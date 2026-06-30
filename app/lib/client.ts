import type { GeneratedArticle, KeywordRow, Settings, TaxonomyItem, TemplateItem } from "./types";
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

  // Strip a wrapping code fence ONLY when the WHOLE response starts with one.
  // We must NOT use a global ``` match here: the article's contentMarkdown can
  // itself contain ```html / ```css blocks (e.g. a sample CSS with `body { ... }`),
  // and a global match would extract that inner block and then JSON.parse the CSS —
  // which fails with "Expected property name or '}'".
  if (t.startsWith("```")) {
    t = t
      .replace(/^```(?:json)?\s*\n?/i, "")
      .replace(/\n?```\s*$/i, "")
      .trim();
  }

  // find the outermost { ... }
  const start = t.indexOf("{");
  const end = t.lastIndexOf("}");
  if (start === -1 || end === -1 || end <= start) {
    console.error("[blog-automation] extractJson: no JSON object found. Raw response:\n", text);
    throw new Error("No JSON object found in response");
  }
  const slice = t.slice(start, end + 1);
  try {
    return JSON.parse(slice);
  } catch (err) {
    const pos = err instanceof Error ? (err.message.match(/position (\d+)/)?.[1] ?? null) : null;
    const around = pos ? slice.slice(Math.max(0, +pos - 60), +pos + 60) : slice.slice(0, 200);
    console.error(
      "[blog-automation] extractJson: JSON.parse failed:",
      err instanceof Error ? err.message : err,
      "\n--- context around the error ---\n",
      around,
      "\n--- full slice that failed to parse ---\n",
      slice
    );
    throw new Error(`Could not parse model JSON: ${err instanceof Error ? err.message : "unknown error"}`);
  }
}

/**
 * Clean the article body before it's saved/published. Belt-and-suspenders for the
 * prompt rules: (1) strip heading-level labels the model sometimes writes into the
 * heading TEXT ("### H3: Title" → "### Title", "**H3: Title**" → "### Title"), and
 * (2) remove any FAQ / Q&A section from the body — FAQs render from the separate
 * `faqs` field, so a body FAQ section would show up twice.
 */
export function sanitizeBody(md: string): string {
  if (!md) return md;
  let text = md;

  // 1a) Drop level labels from real Markdown headings: "### H3: Title" → "### Title".
  text = text.replace(/^(#{1,6}[ \t]+)(?:H[1-6]|Heading[ \t]*[1-6]|Section)[ \t]*[:.)\-–—][ \t]*/gim, "$1");
  // 1b) Convert bold pseudo-headings carrying a level label into real headings.
  text = text.replace(
    /^[ \t]*\*\*[ \t]*H([1-6])[ \t]*[:.)\-–—][ \t]*(.+?)[ \t]*\*\*[ \t]*$/gim,
    (_m, lvl: string, title: string) => `${"#".repeat(Math.min(6, Math.max(1, Number(lvl))))} ${title.trim()}`
  );

  // 2) Remove a FAQ / Q&A section if one leaked into the body.
  const lines = text.split("\n");
  const isHeading = (l: string) => /^#{1,6}[ \t]+/.test(l);
  const headingLevel = (l: string) => l.match(/^(#{1,6})[ \t]+/)?.[1].length ?? 0;
  const faqStartRe = /^[ \t]*(?:#{1,6}[ \t]+|\*\*[ \t]*)?(?:FAQs?|Frequently Asked Questions)\b/i;
  const faqOnlyLineRe = /^[ \t]*(?:FAQs?|Frequently Asked Questions)(?:[ \t]*\(.*\))?[ \t:]*$/i;

  let start = -1;
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    if (faqStartRe.test(l) && (isHeading(l) || /^[ \t]*\*\*/.test(l) || faqOnlyLineRe.test(l))) {
      start = i;
      break;
    }
  }
  if (start !== -1) {
    const startLevel = isHeading(lines[start]) ? headingLevel(lines[start]) : 99;
    let end = lines.length;
    for (let j = start + 1; j < lines.length; j++) {
      if (isHeading(lines[j]) && headingLevel(lines[j]) <= startLevel) {
        end = j;
        break;
      }
    }
    lines.splice(start, end - start);
    text = lines.join("\n");
  }

  return text.replace(/\n{3,}/g, "\n\n").trim();
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
      `A high-quality, photorealistic blog cover image depicting ${str(o.coverImageQuery) || row.keyword}. Warm, inviting mood with soft natural lighting and a tasteful, modern color palette. Cinematic composition with shallow depth of field and clean negative space for a title overlay, 16:9 aspect ratio. No text or words in the image except a small, subtle "subhsandesh.in" watermark in the bottom-right corner.`,
    contentMarkdown: sanitizeBody(str(o.contentMarkdown)),
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

  let parsed: unknown;
  try {
    parsed = extractJson(data.text || "");
  } catch (err) {
    // Surface the exact failing response so it can be debugged from the console.
    console.error(`[blog-automation] Failed to parse article for "${row.keyword}". Raw model text:\n`, data.text);
    throw err;
  }
  const article = normalizeArticle(parsed, row);
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

/** Publish (or draft) the article to Strapi, connecting the project's default category/author/templates. Throws on failure. */
export async function publishArticle(
  settings: Settings,
  article: GeneratedArticle,
  links?: { categoryId?: string; authorId?: string; templateIds?: string[] }
): Promise<PublishResult> {
  if (!settings.strapiUrl) throw new Error("Strapi URL not set");
  const res = await fetch("/api/strapi", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      strapiUrl: settings.strapiUrl,
      strapiToken: settings.strapiToken,
      autoPublish: settings.autoPublish,
      article,
      categoryId: links?.categoryId || undefined,
      authorId: links?.authorId || undefined,
      templateIds: links?.templateIds?.length ? links.templateIds : undefined,
    }),
  });
  const data = (await res.json()) as { documentId?: string; publishState?: "published" | "draft"; error?: string };
  if (!res.ok || data.error) throw new Error(data.error || `Strapi publish failed (${res.status})`);
  return { documentId: data.documentId, publishState: data.publishState || "draft" };
}

/** Fetch the Strapi categories + authors + templates (for the connect dropdowns). */
export async function fetchTaxonomy(
  settings: Settings
): Promise<{ categories: TaxonomyItem[]; authors: TaxonomyItem[]; templates: TemplateItem[] }> {
  if (!settings.strapiUrl) return { categories: [], authors: [], templates: [] };
  const res = await fetch(`/api/strapi?strapiUrl=${encodeURIComponent(settings.strapiUrl)}`, {
    headers: settings.strapiToken ? { "x-strapi-token": settings.strapiToken } : {},
  });
  const data = (await res.json()) as {
    categories?: TaxonomyItem[];
    authors?: TaxonomyItem[];
    templates?: TemplateItem[];
    error?: string;
  };
  if (!res.ok || data.error) throw new Error(data.error || `Failed to load categories (${res.status})`);
  return { categories: data.categories || [], authors: data.authors || [], templates: data.templates || [] };
}

/**
 * Connect / change an existing article's category + author + linked templates.
 * Pass `templateIds` ([] clears all links) to update the relatedTemplates relation;
 * omit it (undefined) to leave the templates untouched. Throws on failure.
 */
export async function connectArticle(
  settings: Settings,
  documentId: string,
  categoryId?: string,
  authorId?: string,
  templateIds?: string[]
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
      templateIds,
    }),
  });
  const data = (await res.json()) as { ok?: boolean; publishState?: "published" | "draft"; error?: string };
  if (!res.ok || data.error) throw new Error(data.error || `Connect failed (${res.status})`);
  return { publishState: data.publishState || "published" };
}

/**
 * Upload a cover image file to S3 (compressed server-side) and return its public
 * URL. Used by the blog viewer's "Cover Image" panel.
 */
export async function uploadCoverImage(file: File): Promise<string> {
  const fd = new FormData();
  fd.append("file", file);
  fd.append("folder", "blog");
  const res = await fetch("/api/upload-image", { method: "POST", body: fd });
  const data = (await res.json()) as { ok?: boolean; url?: string; error?: string };
  if (!res.ok || data.error || !data.url) {
    throw new Error(data.error || `Image upload failed (${res.status})`);
  }
  return data.url;
}

/**
 * Save an external cover image URL (S3/CDN) onto an already-published article in
 * Strapi. Republishes so the live site revalidates.
 */
export async function setArticleCover(
  settings: Settings,
  documentId: string,
  coverImageUrl: string
): Promise<{ publishState: "published" | "draft" }> {
  const res = await fetch("/api/strapi/connect", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      strapiUrl: settings.strapiUrl,
      strapiToken: settings.strapiToken,
      documentId,
      coverImageUrl,
    }),
  });
  const data = (await res.json()) as { ok?: boolean; publishState?: "published" | "draft"; error?: string };
  if (!res.ok || data.error) throw new Error(data.error || `Saving cover image failed (${res.status})`);
  return { publishState: data.publishState || "published" };
}
