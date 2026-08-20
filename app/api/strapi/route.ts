import type {
  GeneratedArticle,
  StrapiPublishBody,
  StrapiUpdateBody,
  TaxonomyItem,
  TemplateItem,
} from "@/app/lib/types";

// Publish a generated article to Strapi.
//
//   POST → create. Tries the custom create-and-publish endpoint first (instant
//          publish → fires the revalidate webhook), falling back to the standard
//          REST create (which makes a draft) if that endpoint isn't present.
//   PUT  → overwrite an article that already exists, by documentId. This is what
//          makes "edit an already-published post and push again" work: without
//          it, a second push hits the slug-conflict retry and creates
//          `<slug>-2`, quietly splitting the post into two live URLs.
//
// Both share toStrapiData(), so an update writes exactly the fields a create
// would — no partial-payload surprises where an edit silently drops the FAQs.

export const runtime = "nodejs";
export const maxDuration = 120;

// GET → fetch the Strapi categories + authors + templates so the studio can let
// the user pick what to connect/link an article to. Token via x-strapi-token.
export async function GET(req: Request) {
  const url = new URL(req.url);
  const strapiUrl = url.searchParams.get("strapiUrl") || "";
  const strapiToken = req.headers.get("x-strapi-token") || "";
  if (!strapiUrl) return json({ error: "Missing strapiUrl" }, 400);

  const base = strapiUrl.replace(/\/+$/, "");
  const headers: Record<string, string> = {};
  if (strapiToken) headers.Authorization = `Bearer ${strapiToken}`;

  try {
    const [categories, authors, templates] = await Promise.all([
      fetchTaxonomy(`${base}/api/categories?pagination[pageSize]=200&sort=name:asc`, headers),
      fetchTaxonomy(`${base}/api/authors?pagination[pageSize]=200&sort=name:asc`, headers),
      // Templates are optional — if the collection isn't present, degrade to [].
      fetchTemplates(`${base}/api/templates?pagination[pageSize]=200&sort=order:asc`, headers).catch(() => []),
    ]);
    return json({ categories: pinFirst(categories, PINNED_CATEGORY_SLUGS), authors, templates });
  } catch (err) {
    return json({ error: err instanceof Error ? err.message : "Failed to load taxonomy" }, 502);
  }
}

async function fetchTemplates(url: string, headers: Record<string, string>): Promise<TemplateItem[]> {
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
      const attrs = (o.attributes as Record<string, unknown>) || o;
      return {
        documentId: String(o.documentId ?? o.id ?? ""),
        name: String(attrs.title ?? attrs.name ?? ""),
        url: attrs.url ? String(attrs.url) : undefined,
        emoji: attrs.emoji ? String(attrs.emoji) : undefined,
        category: attrs.category ? String(attrs.category) : undefined,
      } as TemplateItem;
    })
    .filter((t) => t.documentId && t.name);
}

// Categories that should always float to the top of the picker, in this order,
// regardless of the alphabetical Strapi sort. Match by slug (falls back to name).
const PINNED_CATEGORY_SLUGS = ["say-sorry-beautifully"];

/** Move pinned items to the front (in `pinned` order); everything else keeps its order. */
function pinFirst(items: TaxonomyItem[], pinned: string[]): TaxonomyItem[] {
  const rank = (t: TaxonomyItem) => {
    const key = (t.slug || t.name || "").toLowerCase();
    const i = pinned.indexOf(key);
    return i === -1 ? pinned.length : i;
  };
  return [...items].sort((a, b) => rank(a) - rank(b));
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

  const { strapiUrl, strapiToken, autoPublish, article, categoryId, authorId, templateIds } = body;
  if (!strapiUrl || !article) return json({ error: "Missing strapiUrl or article" }, 400);

  const base = strapiUrl.replace(/\/+$/, "");
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (strapiToken) headers.Authorization = `Bearer ${strapiToken}`;

  const data = toStrapiData(article, categoryId, authorId, templateIds);

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
      // 404/405 => custom endpoint not installed on this Strapi (405 happens when
      // POST /articles/automation falls back to the core /articles/:id route, which
      // only allows GET/PUT/DELETE). Either way, degrade to a standard draft create.
      if (custom.status === 404 || custom.status === 405) {
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

/**
 * PUT → overwrite an existing article. The whole article is sent, so a field the
 * user cleared in the editor is actually cleared in Strapi rather than keeping a
 * stale value.
 *
 * A slug change is allowed and is the point of the endpoint, but it can still
 * collide with a *different* article that already owns the target slug. Strapi
 * reports that as a uniqueness error, which is surfaced as-is: silently renaming
 * to `<slug>-2` on an update would be much worse than a create, because the user
 * asked for one specific URL.
 */
export async function PUT(req: Request) {
  let body: StrapiUpdateBody;
  try {
    body = (await req.json()) as StrapiUpdateBody;
  } catch {
    return json({ error: "Invalid JSON body" }, 400);
  }

  const { strapiUrl, strapiToken, documentId, article, categoryId, authorId, templateIds } = body;
  if (!strapiUrl || !documentId || !article) {
    return json({ error: "Missing strapiUrl, documentId or article" }, 400);
  }

  const base = strapiUrl.replace(/\/+$/, "");
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (strapiToken) headers.Authorization = `Bearer ${strapiToken}`;

  const payload = { data: toStrapiData(article, categoryId, authorId, templateIds) };

  // 1) custom update-and-publish endpoint — keeps the post published and fires
  //    the revalidate webhook so the live page reflects the edit immediately.
  const custom = await tryPut(`${base}/api/articles/automation/${documentId}`, headers, payload);
  if (custom.ok) return json({ documentId, publishState: "published", slug: article.slug });
  if (custom.status !== 404 && custom.status !== 405) {
    return json({ error: custom.error }, 502);
  }

  // 2) fallback: standard REST update. Leaves the entry as a draft revision, so
  //    say so rather than reporting a publish that did not happen.
  const std = await tryPut(`${base}/api/articles/${documentId}`, headers, payload);
  if (std.ok) return json({ documentId, publishState: "draft", slug: article.slug });
  return json({ error: std.error }, 502);
}

interface PutResult {
  ok: boolean;
  status: number;
  error: string;
}

async function tryPut(url: string, headers: Record<string, string>, payload: unknown): Promise<PutResult> {
  try {
    const res = await fetch(url, { method: "PUT", headers, body: JSON.stringify(payload) });
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
    return { ok: true, status: res.status, error: "" };
  } catch (err) {
    return { ok: false, status: 0, error: err instanceof Error ? err.message : "Network error" };
  }
}

/** Map our GeneratedArticle to the Strapi Article content-type shape. */
function toStrapiData(a: GeneratedArticle, categoryId?: string, authorId?: string, templateIds?: string[]) {
  return {
    title: a.title,
    slug: a.slug,
    excerpt: a.excerpt || undefined,
    contentMarkdown: a.contentMarkdown,
    tags: a.tags?.length ? a.tags : undefined,
    keyTakeaways: a.keyTakeaways?.length ? a.keyTakeaways : undefined,
    featured: false,
    // External S3/CDN cover image (set in the viewer before re-publishing).
    coverImageUrl: a.coverImageUrl || undefined,
    // Connect the manyToOne relations by documentId (v5 accepts the id directly).
    category: categoryId || undefined,
    author: authorId || undefined,
    // Link the manyToMany templates by documentId (array = the full set).
    relatedTemplates: templateIds?.length ? templateIds : undefined,
    seo: {
      metaTitle: a.metaTitle || a.title,
      metaDescription: a.metaDescription || a.excerpt,
      canonicalURL: a.canonicalURL || undefined,
      keywords: a.keywords || undefined,
      ogType: a.ogType || "article",
      // Mirror the cover to the OG image so social shares get the same picture.
      metaImageUrl: a.coverImageUrl || undefined,
      structuredData: a.structuredData?.length ? a.structuredData : undefined,
    },
    faqs: (a.faqs || []).map((f) => ({ question: f.question, answer: f.answer })),
  };
}

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: { "Content-Type": "application/json" } });
}
