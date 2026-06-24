import type { GeneratedArticle, KeywordRow, Settings, TaxonomyItem } from "./types";
import { SYSTEM_PROMPT, buildUserPrompt, slugify } from "./prompt";

// ─────────────────────────────────────────────────────────────────────────────
// Browser-side orchestration helpers. These call our own Next.js route handlers
// (which proxy to the LLM providers + Strapi) so we avoid CORS and keep all the
// provider quirks server-side.
// ─────────────────────────────────────────────────────────────────────────────

/** Pull the first valid JSON object out of a model response (handles ```json fences). */
export function extractJson(text: string): unknown {
  if (!text) throw new Error("Empty model response");
  let t = text.trim();
  // strip code fences
  const fence = t.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (fence) t = fence[1].trim();
  // find the outermost { ... }
  const start = t.indexOf("{");
  const end = t.lastIndexOf("}");
  if (start === -1 || end === -1 || end <= start) throw new Error("No JSON object found in response");
  const slice = t.slice(start, end + 1);
  return JSON.parse(slice);
}

/** Coerce + sanitize the model output into a safe GeneratedArticle. */
export function normalizeArticle(raw: unknown, row: KeywordRow): GeneratedArticle {
  const o = (raw || {}) as Record<string, unknown>;
  const str = (v: unknown, fallback = "") => (typeof v === "string" ? v.trim() : fallback);
  const arr = (v: unknown): string[] =>
    Array.isArray(v) ? v.map((x) => String(x).trim()).filter(Boolean) : [];

  const title = str(o.title) || row.keyword;
  let slug = slugify(str(o.slug) || title);
  if (!slug) slug = slugify(row.keyword);

  const faqsRaw = Array.isArray(o.faqs) ? o.faqs : [];
  const faqs = faqsRaw
    .map((f) => {
      const fo = (f || {}) as Record<string, unknown>;
      return { question: str(fo.question), answer: str(fo.answer) };
    })
    .filter((f) => f.question && f.answer);

  const excerpt = str(o.excerpt).slice(0, 300);
  const metaTitle = (str(o.metaTitle) || title).slice(0, 70);
  const metaDescription = (str(o.metaDescription) || excerpt).slice(0, 170);
  const canonicalURL = str(o.canonicalURL);
  const keywords = str(o.keywords) || row.keyword;

  const modelLd = Array.isArray(o.structuredData)
    ? (o.structuredData.filter((x) => x && typeof x === "object") as Record<string, unknown>[])
    : [];

  const article: GeneratedArticle = {
    title,
    slug,
    excerpt,
    metaTitle,
    metaDescription,
    keywords,
    canonicalURL,
    ogType: str(o.ogType) || "article",
    tags: arr(o.tags),
    keyTakeaways: arr(o.keyTakeaways),
    faqs,
    coverImageQuery: str(o.coverImageQuery) || row.keyword,
    coverImagePrompt:
      str(o.coverImagePrompt) ||
      `A high-quality, photorealistic blog cover image depicting ${str(o.coverImageQuery) || row.keyword}. Warm, inviting mood with soft natural lighting and a tasteful, modern color palette. Cinematic composition with shallow depth of field and clean negative space for a title overlay, 16:9 aspect ratio. No text or words in the image.`,
    contentMarkdown: str(o.contentMarkdown),
    readingTime: typeof o.readingTime === "number" ? o.readingTime : undefined,
    structuredData: modelLd,
  };

  article.structuredData = ensureBaselineJsonLd(article, modelLd);
  return article;
}

/**
 * Guarantee an Article + FAQPage JSON-LD block exist even if the model skipped
 * them, while preserving any model-authored blocks (e.g. a rich HowTo). We dedupe
 * by @type so we never double up an Article/FAQPage the model already produced.
 */
function ensureBaselineJsonLd(
  a: GeneratedArticle,
  modelLd: Record<string, unknown>[]
): Record<string, unknown>[] {
  const out = [...modelLd];
  const hasType = (t: string) =>
    out.some((b) => String((b as { "@type"?: unknown })["@type"] || "").toLowerCase() === t.toLowerCase());

  if (!hasType("Article") && !hasType("BlogPosting")) {
    out.unshift({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: a.title,
      description: a.metaDescription || a.excerpt,
      keywords: a.keywords,
      inLanguage: "en",
      author: { "@type": "Organization", name: "SubhSandesh" },
      publisher: { "@type": "Organization", name: "SubhSandesh" },
      ...(a.canonicalURL ? { mainEntityOfPage: { "@type": "WebPage", "@id": a.canonicalURL } } : {}),
    });
  }

  if (a.faqs.length && !hasType("FAQPage")) {
    out.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: a.faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    });
  }

  return out;
}

/** Generate one article for a keyword row. Throws on failure. */
export async function generateArticle(settings: Settings, row: KeywordRow): Promise<GeneratedArticle> {
  const provider = settings.activeProvider;
  const apiKey = settings.keys[provider];
  if (!apiKey) throw new Error(`No API key set for ${provider}`);

  const res = await fetch("/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      provider,
      model: settings.models[provider],
      apiKey,
      systemPrompt: SYSTEM_PROMPT,
      userPrompt: buildUserPrompt(row, {
        siteUrl: settings.siteUrl,
        blogPathPrefix: settings.blogPathPrefix,
      }),
    }),
  });

  const data = (await res.json()) as { text?: string; error?: string };
  if (!res.ok || data.error) throw new Error(data.error || `Generation failed (${res.status})`);

  const article = normalizeArticle(extractJson(data.text || ""), row);
  if (!article.contentMarkdown) throw new Error("Model returned no article body");
  if (article.faqs.length < 10) {
    // Not fatal — but flag it so the user knows. We still publish what we got.
    console.warn(`Only ${article.faqs.length} FAQs generated for "${row.keyword}"`);
  }
  return article;
}

export interface PublishResult {
  documentId?: string;
  publishState: "published" | "draft";
}

/** Publish (or draft) the article to Strapi, connecting the default category/author. Throws on failure. */
export async function publishArticle(settings: Settings, article: GeneratedArticle): Promise<PublishResult> {
  if (!settings.strapiUrl) throw new Error("Strapi URL not set");
  const res = await fetch("/api/strapi", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      strapiUrl: settings.strapiUrl,
      strapiToken: settings.strapiToken,
      autoPublish: settings.autoPublish,
      article,
      categoryId: settings.defaultCategoryId || undefined,
      authorId: settings.defaultAuthorId || undefined,
    }),
  });
  const data = (await res.json()) as { documentId?: string; publishState?: "published" | "draft"; error?: string };
  if (!res.ok || data.error) throw new Error(data.error || `Strapi publish failed (${res.status})`);
  return { documentId: data.documentId, publishState: data.publishState || "draft" };
}

/** Fetch the Strapi categories + authors (for the connect dropdowns). */
export async function fetchTaxonomy(
  settings: Settings
): Promise<{ categories: TaxonomyItem[]; authors: TaxonomyItem[] }> {
  if (!settings.strapiUrl) return { categories: [], authors: [] };
  const res = await fetch(`/api/strapi?strapiUrl=${encodeURIComponent(settings.strapiUrl)}`, {
    headers: settings.strapiToken ? { "x-strapi-token": settings.strapiToken } : {},
  });
  const data = (await res.json()) as { categories?: TaxonomyItem[]; authors?: TaxonomyItem[]; error?: string };
  if (!res.ok || data.error) throw new Error(data.error || `Failed to load categories (${res.status})`);
  return { categories: data.categories || [], authors: data.authors || [] };
}

/** Connect / change an existing article's category + author. Throws on failure. */
export async function connectArticle(
  settings: Settings,
  documentId: string,
  categoryId?: string,
  authorId?: string
): Promise<{ publishState: "published" | "draft" }> {
  const res = await fetch("/api/strapi/connect", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      strapiUrl: settings.strapiUrl,
      strapiToken: settings.strapiToken,
      documentId,
      categoryId,
      authorId,
    }),
  });
  const data = (await res.json()) as { ok?: boolean; publishState?: "published" | "draft"; error?: string };
  if (!res.ok || data.error) throw new Error(data.error || `Connect failed (${res.status})`);
  return { publishState: data.publishState || "published" };
}
