import type {
  BatchBlogEdit,
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

// ─────────────────────────────────────────────────────────────────────────────
// Edits — overlaying a user's changes on a committed batch file.
// Pure, so the route handler, the UI and `node --test` all share one definition
// of "what does this blog look like now".
// ─────────────────────────────────────────────────────────────────────────────

/** The fields the editor exposes, in the order the UI shows them. */
export const EDITABLE_FIELDS = [
  "title",
  "slug",
  "canonicalURL",
  "excerpt",
  "contentMarkdown",
  "tags",
  "keyTakeaways",
  "faqs",
  "metaTitle",
  "metaDescription",
  "keywords",
  "ogType",
] as const;

export type EditableField = (typeof EDITABLE_FIELDS)[number];

/**
 * The blog as it stands now: the committed file, with any edit laid over it.
 *
 * Returns the file's own article object unchanged when there is no edit, so
 * `mergeBatchBlog(f, undefined).article === f.article` — callers can use identity
 * to skip work.
 */
export function mergeBatchBlog(
  file: BatchBlogFile,
  edit: BatchBlogEdit | undefined
): BatchBlogFile {
  if (!edit) return file;
  return { ...file, article: edit.article };
}

/**
 * Which editable fields differ between the committed file and an edit.
 *
 * Used for the "edited" badge and for the editor's per-field revert, so the user
 * can always see exactly what they changed rather than a single opaque flag.
 * Arrays and FAQs compare by value; a reordered tags list counts as a change,
 * which is correct — order is what renders.
 */
export function changedFields(file: BatchBlogFile, edit: BatchBlogEdit | undefined): EditableField[] {
  if (!edit) return [];
  const orig = file.article;
  const next = edit.article;
  const out: EditableField[] = [];
  for (const f of EDITABLE_FIELDS) {
    if (f === "faqs") {
      const a = orig.faqs || [];
      const b = next.faqs || [];
      const same =
        a.length === b.length &&
        a.every((x, i) => x.question === b[i].question && x.answer === b[i].answer);
      if (!same) out.push(f);
      continue;
    }
    if (f === "tags" || f === "keyTakeaways") {
      const a = orig[f] || [];
      const b = next[f] || [];
      if (a.length !== b.length || a.some((x, i) => x !== b[i])) out.push(f);
      continue;
    }
    if ((orig[f] || "") !== (next[f] || "")) out.push(f);
  }
  return out;
}

/**
 * Rebuild the canonical URL after a slug edit.
 *
 * The canonical is the one field a slug change silently invalidates: leaving a
 * stale canonical pointing at the old path tells Google the post is a duplicate
 * of a URL that does not exist. Only rewritten when the existing canonical
 * actually ends in the old slug — a hand-written canonical pointing somewhere
 * else is deliberate and left alone.
 */
export function recanonicalise(
  canonicalURL: string | undefined,
  oldSlug: string,
  newSlug: string
): string | undefined {
  if (!canonicalURL || !oldSlug || oldSlug === newSlug) return canonicalURL;
  const re = new RegExp(`(/)${oldSlug.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}/?$`);
  if (!re.test(canonicalURL)) return canonicalURL;
  return canonicalURL.replace(re, `$1${newSlug}`);
}

/**
 * Normalise a user-typed slug the same way the generator does, so a hand-edited
 * slug can never be one Strapi rejects or one that renders a broken URL.
 */
export function normaliseSlug(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}
