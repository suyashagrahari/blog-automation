import type { GeneratedArticle, StrapiPublishBody, TaxonomyItem } from "@/app/lib/types";

// Publish a generated article to Strapi. Tries the custom create-and-publish
// endpoint first (instant publish → fires the revalidate webhook). Falls back to
// the standard REST create (which makes a draft) if that endpoint isn't present.

export const runtime = "nodejs";
export const maxDuration = 120;

// GET → fetch the Strapi categories + authors so the studio can let the user pick
// which one to connect an article to. Token comes via the x-strapi-token header.
export async function GET(req: Request) {
  const url = new URL(req.url);
  const strapiUrl = url.searchParams.get("strapiUrl") || "";
  const strapiToken = req.headers.get("x-strapi-token") || "";
  if (!strapiUrl) return json({ error: "Missing strapiUrl" }, 400);

  const base = strapiUrl.replace(/\/+$/, "");
  const headers: Record<string, string> = {};
  if (strapiToken) headers.Authorization = `Bearer ${strapiToken}`;

  try {
    const [categories, authors] = await Promise.all([
      fetchTaxonomy(`${base}/api/categories?pagination[pageSize]=200&sort=name:asc`, headers),
      fetchTaxonomy(`${base}/api/authors?pagination[pageSize]=200&sort=name:asc`, headers),
    ]);
    return json({ categories, authors });
  } catch (err) {
    return json({ error: err instanceof Error ? err.message : "Failed to load taxonomy" }, 502);
  }
}

async function fetchTaxonomy(url: string, headers: Record<string, string>): Promise<TaxonomyItem[]> {
  const res = await fetch(url, { headers });
  const data = await res.json().catch(() => null);
  if (!res.ok) {
    const d = data as { error?: { message?: string } } | null;
    throw new Error(`Strapi ${res.status}: ${d?.error?.message || res.statusText}`);
  }
  const list = (data as { data?: unknown[] })?.data || [];
  return list
    .map((raw) => {
      const o = raw as Record<string, unknown>;
      // v5 returns fields flat with documentId; v4 nests under attributes.
      const attrs = (o.attributes as Record<string, unknown>) || o;
      return {
        documentId: String(o.documentId ?? o.id ?? ""),
        name: String(attrs.name ?? ""),
        slug: attrs.slug ? String(attrs.slug) : undefined,
      } as TaxonomyItem;
    })
    .filter((t) => t.documentId && t.name);
}

export async function POST(req: Request) {
  let body: StrapiPublishBody;
  try {
    body = (await req.json()) as StrapiPublishBody;
  } catch {
    return json({ error: "Invalid JSON body" }, 400);
  }

  const { strapiUrl, strapiToken, autoPublish, article, categoryId, authorId } = body;
  if (!strapiUrl || !article) return json({ error: "Missing strapiUrl or article" }, 400);

  const base = strapiUrl.replace(/\/+$/, "");
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (strapiToken) headers.Authorization = `Bearer ${strapiToken}`;

  const data = toStrapiData(article, categoryId, authorId);

  // Strapi rejects duplicate slugs (uid is unique). Retry with a numeric suffix.
  let lastErr = "";
  for (let attempt = 0; attempt < 4; attempt++) {
    const slug = attempt === 0 ? data.slug : `${data.slug}-${attempt + 1}`;
    const payload = { data: { ...data, slug } };

    if (autoPublish) {
      // 1) custom create-and-publish endpoint
      const custom = await tryPost(`${base}/api/articles/automation`, headers, payload);
      if (custom.ok) {
        return json({ documentId: custom.documentId, publishState: "published", slug });
      }
      // 404 => endpoint not installed; anything else with a slug conflict => retry
      if (custom.status === 404) {
        // fall through to standard create (draft)
        const draft = await tryPost(`${base}/api/articles`, headers, payload);
        if (draft.ok) return json({ documentId: draft.documentId, publishState: "draft", slug });
        if (isSlugConflict(draft.error)) {
          lastErr = draft.error;
          continue;
        }
        return json({ error: draft.error }, 502);
      }
      if (isSlugConflict(custom.error)) {
        lastErr = custom.error;
        continue;
      }
      return json({ error: custom.error }, 502);
    } else {
      const draft = await tryPost(`${base}/api/articles`, headers, payload);
      if (draft.ok) return json({ documentId: draft.documentId, publishState: "draft", slug });
      if (isSlugConflict(draft.error)) {
        lastErr = draft.error;
        continue;
      }
      return json({ error: draft.error }, 502);
    }
  }
  return json({ error: lastErr || "Failed after slug-conflict retries" }, 502);
}

function isSlugConflict(msg: string): boolean {
  return /slug|unique|already exists|must be unique/i.test(msg || "");
}

interface PostResult {
  ok: boolean;
  status: number;
  documentId?: string;
  error: string;
}

async function tryPost(url: string, headers: Record<string, string>, payload: unknown): Promise<PostResult> {
  try {
    const res = await fetch(url, { method: "POST", headers, body: JSON.stringify(payload) });
    let data: unknown = null;
    try {
      data = await res.json();
    } catch {
      /* non-json (e.g. html 404 page) */
    }
    if (!res.ok) {
      const d = data as { error?: { message?: string } } | null;
      return { ok: false, status: res.status, error: `Strapi ${res.status}: ${d?.error?.message || res.statusText}` };
    }
    const d = data as { data?: { documentId?: string } };
    return { ok: true, status: res.status, documentId: d?.data?.documentId, error: "" };
  } catch (err) {
    return { ok: false, status: 0, error: err instanceof Error ? err.message : "Network error" };
  }
}

/** Map our GeneratedArticle to the Strapi Article content-type shape. */
function toStrapiData(a: GeneratedArticle, categoryId?: string, authorId?: string) {
  return {
    title: a.title,
    slug: a.slug,
    excerpt: a.excerpt || undefined,
    contentMarkdown: a.contentMarkdown,
    tags: a.tags?.length ? a.tags : undefined,
    keyTakeaways: a.keyTakeaways?.length ? a.keyTakeaways : undefined,
    featured: false,
    // Connect the manyToOne relations by documentId (v5 accepts the id directly).
    category: categoryId || undefined,
    author: authorId || undefined,
    seo: {
      metaTitle: a.metaTitle || a.title,
      metaDescription: a.metaDescription || a.excerpt,
      canonicalURL: a.canonicalURL || undefined,
      keywords: a.keywords || undefined,
      ogType: a.ogType || "article",
      structuredData: a.structuredData?.length ? a.structuredData : undefined,
    },
    faqs: (a.faqs || []).map((f) => ({ question: f.question, answer: f.answer })),
  };
}

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: { "Content-Type": "application/json" } });
}
