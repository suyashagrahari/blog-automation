import type {
  BatchBlogFile,
  BatchManifest,
  BatchPublishState,
  GeneratedArticle,
  TaxonomyItem,
  TemplateItem,
} from "./types";

// ─────────────────────────────────────────────────────────────────────────────
// Pure helpers for Claude-Code-authored batches. No I/O, no React — so the
// route handler, the UI and `node --test` can all share them.
//
// Every parse function returns null instead of throwing: one malformed file
// must never take down a whole batch listing.
//
// NOTE: types above are imported with `import type` on purpose. Type-only
// imports are erased at compile time, so `node --test --experimental-strip-types`
// can load this file directly without resolving ./types at runtime. Do not add
// a value import from "./types" here or the tests stop running.
// ─────────────────────────────────────────────────────────────────────────────

const isRecord = (v: unknown): v is Record<string, unknown> =>
  typeof v === "object" && v !== null && !Array.isArray(v);

const str = (v: unknown): string => (typeof v === "string" ? v : "");
const strArray = (v: unknown): string[] =>
  Array.isArray(v) ? v.filter((x): x is string => typeof x === "string") : [];

/** Validate a batch.json payload. Returns null if it isn't one. */
export function parseBatchManifest(raw: unknown): BatchManifest | null {
  if (!isRecord(raw)) return null;
  if (raw.kind !== "blog-automation/batch") return null;
  const id = str(raw.id);
  if (!id) return null;
  return {
    kind: "blog-automation/batch",
    version: 1,
    id,
    name: str(raw.name) || id,
    createdAt: str(raw.createdAt) || new Date(0).toISOString(),
    branch: str(raw.branch) || undefined,
    keywords: strArray(raw.keywords),
    blogs: strArray(raw.blogs),
  };
}

/**
 * Validate a blogs/<slug>.json payload. Requires the three fields Strapi
 * genuinely cannot do without (title, slug, body) and fills safe defaults for
 * everything else so the UI never dereferences undefined.
 */
export function parseBatchBlogFile(raw: unknown): BatchBlogFile | null {
  if (!isRecord(raw)) return null;
  if (raw.kind !== "blog-automation/batch-blog") return null;
  if (!isRecord(raw.article)) return null;

  const a = raw.article;
  const title = str(a.title);
  const slug = str(a.slug);
  const contentMarkdown = str(a.contentMarkdown);
  if (!title || !slug || !contentMarkdown) return null;

  const faqs = Array.isArray(a.faqs)
    ? a.faqs
        .filter(isRecord)
        .map((f) => ({ question: str(f.question), answer: str(f.answer) }))
        .filter((f) => f.question && f.answer)
    : [];

  const article: GeneratedArticle = {
    title,
    slug,
    contentMarkdown,
    excerpt: str(a.excerpt),
    metaTitle: str(a.metaTitle) || title,
    metaDescription: str(a.metaDescription) || str(a.excerpt),
    keywords: str(a.keywords),
    canonicalURL: str(a.canonicalURL) || undefined,
    ogType: str(a.ogType) || undefined,
    tags: strArray(a.tags),
    keyTakeaways: strArray(a.keyTakeaways),
    faqs,
    coverImageQuery: str(a.coverImageQuery),
    coverImagePrompt: str(a.coverImagePrompt),
    coverImageUrl: str(a.coverImageUrl) || undefined,
    readingTime: typeof a.readingTime === "number" ? a.readingTime : undefined,
    structuredData: Array.isArray(a.structuredData)
      ? (a.structuredData.filter(isRecord) as Record<string, unknown>[])
      : undefined,
  };

  const m = isRecord(raw.batchMeta) ? raw.batchMeta : {};
  const audit = isRecord(m.auditReport) ? m.auditReport : {};

  return {
    kind: "blog-automation/batch-blog",
    version: 1,
    article,
    batchMeta: {
      keyword: str(m.keyword),
      angle: str(m.angle),
      categorySlug: str(m.categorySlug) || undefined,
      templateUrls: strArray(m.templateUrls),
      factsUsed: strArray(m.factsUsed),
      sources: Array.isArray(m.sources)
        ? m.sources
            .filter(isRecord)
            .map((s) => ({
              url: str(s.url),
              stat: str(s.stat),
              publishedDate: str(s.publishedDate) || undefined,
            }))
            .filter((s) => s.url)
        : [],
      auditReport: {
        passed: strArray(audit.passed),
        failed: Array.isArray(audit.failed)
          ? audit.failed
              .filter(isRecord)
              .map((f) => ({ item: str(f.item), why: str(f.why) }))
              .filter((f) => f.item)
          : [],
        honestAssessment: str(audit.honestAssessment),
      },
      generatedAt: str(m.generatedAt) || new Date(0).toISOString(),
    },
  };
}

/** Approximate word count of a Markdown body, ignoring syntax noise. */
export function wordCount(md: string): number {
  return md
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/[#>*_`|\-[\]()!]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
}

/** Map a skill-chosen category slug (or name) to a Strapi documentId. */
export function resolveCategoryId(
  categorySlug: string | undefined,
  categories: TaxonomyItem[]
): string | undefined {
  if (!categorySlug) return undefined;
  const want = categorySlug.trim().toLowerCase();
  const bySlug = categories.find((c) => (c.slug || "").toLowerCase() === want);
  if (bySlug) return bySlug.documentId;
  const byName = categories.find((c) => c.name.toLowerCase() === want);
  return byName?.documentId;
}

/** Last path segment of a template url/path, lowercased ("/holi" → "holi"). */
function pathKey(urlOrPath: string): string {
  const noQuery = urlOrPath.split(/[?#]/)[0];
  const parts = noQuery.replace(/\/+$/, "").split("/");
  return (parts[parts.length - 1] || "").toLowerCase();
}

/** Map skill-chosen template paths to Strapi documentIds, reporting misses. */
export function resolveTemplateIds(
  templateUrls: string[] | undefined,
  templates: TemplateItem[]
): { ids: string[]; missing: string[] } {
  const ids: string[] = [];
  const missing: string[] = [];
  for (const want of templateUrls || []) {
    const key = pathKey(want);
    const hit = templates.find((t) => t.url && pathKey(t.url) === key);
    if (hit) {
      if (!ids.includes(hit.documentId)) ids.push(hit.documentId);
    } else {
      missing.push(want);
    }
  }
  return { ids, missing };
}

/**
 * THE LOCK. A slug already present in Strapi (draft OR published) is spent —
 * the row renders as published and its checkbox is disabled. Strapi is the
 * truth here, not IndexedDB, so the lock survives a different browser or a
 * fresh Vercel preview URL.
 */
export function batchBlogPublishState(slug: string, strapiSlugs: Set<string>): BatchPublishState {
  return strapiSlugs.has(slug) ? "published" : "unpublished";
}
