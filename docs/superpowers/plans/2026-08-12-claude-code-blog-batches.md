# Claude-Code Blog Batches Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Let Claude Code write deeply-researched blog posts into committed JSON files, then review and publish them to Strapi from a new "Batches" section in the deployed studio, with a published-lock that cannot be defeated.

**Architecture:** Claude Code runs a 7-phase skill per keyword (facts gate → SERP → gap → sources → draft → links → audit) and writes `content/batches/<batchId>/blogs/<slug>.json` on a git branch. A server route reads those files; a second route fetches the Strapi slug set as the published-lock; the UI reuses the existing `publishArticle()` path so nothing about Strapi publishing is reinvented.

**Tech Stack:** Next.js 16.2.9 (App Router), React 19.2.4, TypeScript 5, Tailwind 4, Node 22.20.0, `node:test` (built-in, zero new deps), IndexedDB, Strapi v5.

## Global Constraints

- **Next.js is 16.2.9** — `AGENTS.md` warns APIs differ from training data. Before writing any route handler or config, consult `node_modules/next/dist/docs/`. Do not guess.
- **Route handlers** follow the existing repo pattern: `export const runtime = "nodejs";` then `export async function GET(req: Request)`. See `app/api/upload-image/route.ts`.
- **`next.config.ts` already uses `outputFileTracingIncludes`** for sharp. Add to that existing object; do not replace it.
- **No new npm dependencies.** Tests use Node's built-in `node --test`. The facts script uses the `mongodb` driver already present in `../server/node_modules` — invoke it with `NODE_PATH` rather than adding a dep here.
- **`article` in a batch blog file MUST match the existing `GeneratedArticle` interface exactly** (`app/lib/types.ts:43-63`) so `toStrapiData()` in `app/api/strapi/route.ts` works unchanged.
- **Never print or log Mongo credentials.** `collect-facts.mjs` reads `PROD_MONGODB_URI` from `../server/.env` and emits only aggregate numbers.
- **Publish is sequential, never parallel.** The slug-conflict retry loop in `app/api/strapi/route.ts` depends on ordered execution.
- **The lock is the Strapi slug set**, queried for both draft and published states. IndexedDB is a mirror only.
- **FAQs per post: 8–12.** Not the 60–100 the in-app prompt asks for.
- Existing signatures this plan consumes verbatim:
  - `publishArticle(settings: Settings, article: GeneratedArticle, links?: { categoryId?: string; authorId?: string; templateIds?: string[] }): Promise<{ documentId?: string; publishState: "published" | "draft" }>`
  - `fetchTaxonomy(settings: Settings): Promise<{ categories: TaxonomyItem[]; authors: TaxonomyItem[]; templates: TemplateItem[] }>`
  - `saveBlog(blog: StoredBlog): Promise<void>`, `saveProject(p: Project): Promise<void>`, `getProject(id: string): Promise<Project | undefined>`

---

## File Structure

**Create:**
| File | Responsibility |
|---|---|
| `app/lib/batches.ts` | Pure parse/validate/derive logic for batch files. No I/O. Unit-tested. |
| `app/api/batches/route.ts` | Reads `content/batches/**` from disk, serves manifests or one loaded batch. |
| `app/api/strapi/slugs/route.ts` | Returns every existing Strapi article slug (draft + published). The lock. |
| `app/components/BatchesScreen.tsx` | Batch list + batch detail table + selection + publish orchestration. |
| `scripts/collect-facts.mjs` | Mongo → `content/facts.md`. |
| `tests/batches.test.mts` | Unit tests for `app/lib/batches.ts`. |
| `tests/fixtures/batches/…` | A hand-written fixture batch used by tests and local dev. |
| `.claude/skills/subhsandesh-blog/SKILL.md` + `references/*.md` | The writing skill. |
| `content/facts.md` | Generated first-party facts (committed). |

**Modify:**
| File | Change |
|---|---|
| `app/lib/types.ts` | Add `BatchMeta`, `BatchBlogFile`, `BatchManifest`, `BatchWithBlogs`, `BatchPublishState`. |
| `app/lib/client.ts` | Add `fetchBatches`, `fetchBatch`, `fetchPublishedSlugs`. |
| `app/components/Sidebar.tsx` | `View` gains `"batches"`; add nav item. |
| `app/page.tsx` | Render `BatchesScreen` for the new view; pass settings/taxonomy. |
| `app/components/BlogViewer.tsx` | Optional `batchMeta` prop → new "Audit" tab. |
| `next.config.ts` | Add `"/api/batches": ["./content/**"]` to `outputFileTracingIncludes`. |
| `package.json` | Add `test` and `facts` scripts. |
| `README.md` | Document the Batches flow. |

---

## Task 1: Batch types, pure logic, and a test harness

**Files:**
- Modify: `app/lib/types.ts` (append after line 216)
- Create: `app/lib/batches.ts`
- Create: `tests/batches.test.mts`
- Create: `tests/fixtures/batches/2026-01-01-fixture/batch.json`
- Create: `tests/fixtures/batches/2026-01-01-fixture/blogs/fixture-post.json`
- Create: `tests/fixtures/batches/2026-01-01-fixture/blogs/broken.json`
- Modify: `package.json`

**Interfaces:**
- Consumes: `GeneratedArticle` from `app/lib/types.ts`.
- Produces: `parseBatchManifest`, `parseBatchBlogFile`, `wordCount`, `resolveCategoryId`, `resolveTemplateIds`, `batchBlogPublishState` — all imported by Tasks 2, 6 and 7.

**Note on testing TypeScript:** `node --test --experimental-strip-types` erases types at runtime but cannot resolve extensionless imports. `app/lib/batches.ts` must therefore import its types with `import type { … } from "./types"` — type-only imports are erased entirely, so no runtime resolution is attempted. Do not add a value import to `./types` in this file.

- [ ] **Step 1: Add the types**

Append to `app/lib/types.ts`:

```ts
// ─────────────────────────────────────────────────────────────────────────────
// Batches — blogs authored by Claude Code and committed to content/batches/.
//
// `article` is deliberately the SAME GeneratedArticle the in-app generator
// produces, so publishing reuses toStrapiData() untouched. `batchMeta` is
// additive review metadata and never reaches Strapi.
// ─────────────────────────────────────────────────────────────────────────────

/** A third-party source verified during Phase 3 research. */
export interface BatchSource {
  url: string;
  /** The specific statistic this source was cited for. */
  stat: string;
  /** Publication date of the source, ISO or human ("2025-11-02"). */
  publishedDate?: string;
}

/** Result of running references/publish-checklist.md against a draft. */
export interface BatchAuditReport {
  passed: string[];
  failed: { item: string; why: string }[];
  /** Why would an answer engine cite this over the 5 pages analysed? */
  honestAssessment: string;
}

/** Review metadata Claude Code records alongside each generated article. */
export interface BatchMeta {
  keyword: string;
  /** One-line Phase 2 angle: "wins by being the only one that … using …". */
  angle: string;
  /** Strapi category slug the skill chose; resolved to a documentId at publish. */
  categorySlug?: string;
  /** Template paths from TEMPLATE_LINKS, e.g. ["/holi"]; resolved at publish. */
  templateUrls?: string[];
  /** Lines lifted from content/facts.md and cited in the post. */
  factsUsed: string[];
  sources: BatchSource[];
  auditReport: BatchAuditReport;
  generatedAt: string;
}

export interface BatchBlogFile {
  kind: "blog-automation/batch-blog";
  version: 1;
  article: GeneratedArticle;
  batchMeta: BatchMeta;
}

export interface BatchManifest {
  kind: "blog-automation/batch";
  version: 1;
  id: string;
  name: string;
  createdAt: string;
  /** Git branch the batch was written on. */
  branch?: string;
  keywords: string[];
  /** Slugs of the blogs in this batch (one file each under blogs/). */
  blogs: string[];
}

/** A batch plus its fully-loaded blog files, as served by GET /api/batches?id=… */
export interface BatchWithBlogs extends BatchManifest {
  loaded: BatchBlogFile[];
  /** Blog files that failed to parse — surfaced so a bad file is never silent. */
  skipped: { file: string; why: string }[];
}

/** Per-blog publish state derived from the live Strapi slug set. */
export type BatchPublishState = "unpublished" | "published";
```

- [ ] **Step 2: Write the failing tests**

Create `tests/batches.test.mts`:

```ts
import { test } from "node:test";
import assert from "node:assert/strict";
import {
  parseBatchManifest,
  parseBatchBlogFile,
  wordCount,
  resolveCategoryId,
  resolveTemplateIds,
  batchBlogPublishState,
} from "../app/lib/batches.ts";

test("parseBatchManifest accepts a valid manifest", () => {
  const m = parseBatchManifest({
    kind: "blog-automation/batch",
    version: 1,
    id: "2026-01-01-fixture",
    name: "Fixture",
    createdAt: "2026-01-01T00:00:00.000Z",
    keywords: ["a"],
    blogs: ["fixture-post"],
  });
  assert.equal(m?.id, "2026-01-01-fixture");
  assert.deepEqual(m?.blogs, ["fixture-post"]);
});

test("parseBatchManifest rejects wrong kind and missing id", () => {
  assert.equal(parseBatchManifest({ kind: "nope", version: 1, id: "x" }), null);
  assert.equal(parseBatchManifest({ kind: "blog-automation/batch", version: 1 }), null);
  assert.equal(parseBatchManifest(null), null);
  assert.equal(parseBatchManifest("string"), null);
});

test("parseBatchBlogFile requires title, slug and contentMarkdown", () => {
  const ok = parseBatchBlogFile({
    kind: "blog-automation/batch-blog",
    version: 1,
    article: { title: "T", slug: "t", contentMarkdown: "# hi there" },
    batchMeta: { keyword: "k", angle: "a", factsUsed: [], sources: [], auditReport: { passed: [], failed: [], honestAssessment: "" }, generatedAt: "2026-01-01T00:00:00.000Z" },
  });
  assert.equal(ok?.article.slug, "t");
  // defaults filled so the UI never hits undefined
  assert.deepEqual(ok?.article.tags, []);
  assert.deepEqual(ok?.article.faqs, []);

  assert.equal(parseBatchBlogFile({ kind: "blog-automation/batch-blog", version: 1, article: { title: "T" }, batchMeta: {} }), null);
  assert.equal(parseBatchBlogFile({ kind: "wrong", version: 1 }), null);
});

test("wordCount ignores markdown syntax", () => {
  assert.equal(wordCount("# Title\n\nOne two three."), 4);
  assert.equal(wordCount(""), 0);
});

test("resolveCategoryId matches on slug then name, case-insensitively", () => {
  const cats = [
    { documentId: "c1", name: "Festivals", slug: "festivals" },
    { documentId: "c2", name: "Birthday Ideas" },
  ];
  assert.equal(resolveCategoryId("festivals", cats), "c1");
  assert.equal(resolveCategoryId("FESTIVALS", cats), "c1");
  assert.equal(resolveCategoryId("birthday ideas", cats), "c2");
  assert.equal(resolveCategoryId("nonexistent", cats), undefined);
  assert.equal(resolveCategoryId(undefined, cats), undefined);
});

test("resolveTemplateIds matches by url path and reports misses", () => {
  const tpls = [
    { documentId: "t1", name: "Holi", url: "/holi" },
    { documentId: "t2", name: "Birthday GF", url: "https://subhsandesh.in/birthday-gf" },
  ];
  const r = resolveTemplateIds(["/holi", "/birthday-gf", "/ghost"], tpls);
  assert.deepEqual(r.ids, ["t1", "t2"]);
  assert.deepEqual(r.missing, ["/ghost"]);
});

test("batchBlogPublishState locks a slug that already exists in Strapi", () => {
  const slugs = new Set(["already-there"]);
  assert.equal(batchBlogPublishState("already-there", slugs), "published");
  assert.equal(batchBlogPublishState("brand-new", slugs), "unpublished");
});
```

- [ ] **Step 3: Add the test script and run it to watch it fail**

Add to `package.json` `scripts`:

```json
"test": "node --test --experimental-strip-types tests/",
"facts": "node scripts/collect-facts.mjs"
```

Run: `npm test`
Expected: FAIL — `Cannot find module '../app/lib/batches.ts'`

- [ ] **Step 4: Implement `app/lib/batches.ts`**

```ts
import type { BatchBlogFile, BatchManifest, BatchPublishState, GeneratedArticle, TaxonomyItem, TemplateItem } from "./types";

// ─────────────────────────────────────────────────────────────────────────────
// Pure helpers for Claude-Code-authored batches. No I/O, no React — so the
// route handler, the UI and `node --test` can all share them.
//
// Every parse function returns null instead of throwing: one malformed file
// must never take down a whole batch listing.
// ─────────────────────────────────────────────────────────────────────────────

const isRecord = (v: unknown): v is Record<string, unknown> =>
  typeof v === "object" && v !== null && !Array.isArray(v);

const str = (v: unknown): string => (typeof v === "string" ? v : "");
const strArray = (v: unknown): string[] => (Array.isArray(v) ? v.filter((x): x is string => typeof x === "string") : []);

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
    structuredData: Array.isArray(a.structuredData) ? (a.structuredData.filter(isRecord) as Record<string, unknown>[]) : undefined,
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
        ? m.sources.filter(isRecord).map((s) => ({ url: str(s.url), stat: str(s.stat), publishedDate: str(s.publishedDate) || undefined })).filter((s) => s.url)
        : [],
      auditReport: {
        passed: strArray(audit.passed),
        failed: Array.isArray(audit.failed)
          ? audit.failed.filter(isRecord).map((f) => ({ item: str(f.item), why: str(f.why) })).filter((f) => f.item)
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
    .replace(/[#>*_`|\-\[\]()!]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
}

/** Map a skill-chosen category slug (or name) to a Strapi documentId. */
export function resolveCategoryId(categorySlug: string | undefined, categories: TaxonomyItem[]): string | undefined {
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
```

- [ ] **Step 5: Run the tests**

Run: `npm test`
Expected: PASS, 7 tests.

- [ ] **Step 6: Create the fixture batch**

`tests/fixtures/batches/2026-01-01-fixture/batch.json`:

```json
{
  "kind": "blog-automation/batch",
  "version": 1,
  "id": "2026-01-01-fixture",
  "name": "Fixture batch",
  "createdAt": "2026-01-01T00:00:00.000Z",
  "branch": "batch/2026-01-01-fixture",
  "keywords": ["fixture keyword"],
  "blogs": ["fixture-post", "broken"]
}
```

`tests/fixtures/batches/2026-01-01-fixture/blogs/fixture-post.json`:

```json
{
  "kind": "blog-automation/batch-blog",
  "version": 1,
  "article": {
    "title": "Fixture Post",
    "slug": "fixture-post",
    "excerpt": "A fixture used by tests.",
    "metaTitle": "Fixture Post",
    "metaDescription": "A fixture used by tests.",
    "keywords": "fixture",
    "tags": ["fixture"],
    "keyTakeaways": ["It parses."],
    "faqs": [{ "question": "Is this a fixture?", "answer": "Yes." }],
    "coverImageQuery": "fixture image",
    "coverImagePrompt": "A plain grey placeholder square.",
    "contentMarkdown": "# Fixture Post\n\nThis body exists so wordCount has something to count."
  },
  "batchMeta": {
    "keyword": "fixture keyword",
    "angle": "Wins by being the only fixture.",
    "categorySlug": "festivals",
    "templateUrls": ["/holi"],
    "factsUsed": ["Fixture fact — measured 2026-01-01"],
    "sources": [{ "url": "https://example.gov/report", "stat": "1 fixture", "publishedDate": "2025-01-01" }],
    "auditReport": { "passed": ["Direct answer in first 150 words"], "failed": [{ "item": "3–6 outbound links", "why": "fixture has 1" }], "honestAssessment": "It is a fixture; it would not rank." },
    "generatedAt": "2026-01-01T00:00:00.000Z"
  }
}
```

`tests/fixtures/batches/2026-01-01-fixture/blogs/broken.json` — deliberately invalid, proves one bad file is skipped not fatal:

```json
{ "kind": "blog-automation/batch-blog", "version": 1, "article": { "title": "No slug, no body" } }
```

- [ ] **Step 7: Commit**

```bash
git add app/lib/types.ts app/lib/batches.ts tests/ package.json
git commit -m "feat(batches): batch file types, pure parse/resolve logic, node:test harness"
```

---

## Task 2: `GET /api/batches`

**Files:**
- Create: `app/api/batches/route.ts`
- Modify: `next.config.ts`
- Create: `content/batches/.gitkeep`

**Interfaces:**
- Consumes: `parseBatchManifest`, `parseBatchBlogFile` (Task 1).
- Produces: `GET /api/batches` → `{ batches: BatchManifest[] }`; `GET /api/batches?id=<id>` → `BatchWithBlogs`. Consumed by Task 4.

- [ ] **Step 1: Read the Next 16 docs for route handlers and file tracing**

Run: `sed -n '1,80p' node_modules/next/dist/docs/01-app/03-api-reference/05-config/01-next-config-js/output.md`
Confirm the `outputFileTracingIncludes` key shape before editing config.

- [ ] **Step 2: Implement the route**

```ts
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { parseBatchBlogFile, parseBatchManifest } from "@/app/lib/batches";
import type { BatchBlogFile, BatchManifest, BatchWithBlogs } from "@/app/lib/types";

// Serve the Claude-Code-authored batches committed under content/batches/.
//
//   GET /api/batches          → { batches: BatchManifest[] }   (cards grid)
//   GET /api/batches?id=<id>  → BatchWithBlogs                 (batch detail)
//
// Vercel's bundler only ships statically-analysable files, so next.config.ts
// force-includes ./content/** for this route — without that, readdir finds an
// empty directory in production while working perfectly on localhost.

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const TAG = "[batches]";
const ROOT = path.join(process.cwd(), "content", "batches");

export async function GET(req: Request) {
  const id = new URL(req.url).searchParams.get("id");
  try {
    if (id) return json(await loadBatch(id));
    return json({ batches: await listBatches() });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to read batches";
    console.error(`${TAG} ✖`, message);
    return json({ error: message }, 500);
  }
}

/** Directory names under content/batches/ that hold a readable batch.json. */
async function batchDirs(): Promise<string[]> {
  try {
    const entries = await readdir(ROOT, { withFileTypes: true });
    return entries.filter((e) => e.isDirectory()).map((e) => e.name).sort().reverse();
  } catch {
    // content/batches/ absent (fresh clone, or nothing generated yet).
    return [];
  }
}

async function listBatches(): Promise<BatchManifest[]> {
  const out: BatchManifest[] = [];
  for (const dir of await batchDirs()) {
    const m = await readManifest(dir);
    if (m) out.push(m);
    else console.warn(`${TAG} skipping ${dir}: unreadable batch.json`);
  }
  return out;
}

async function readManifest(dir: string): Promise<BatchManifest | null> {
  try {
    const raw = await readFile(path.join(ROOT, dir, "batch.json"), "utf8");
    return parseBatchManifest(JSON.parse(raw));
  } catch {
    return null;
  }
}

async function loadBatch(id: string): Promise<BatchWithBlogs> {
  // Reject traversal: an id must be a plain directory name.
  if (!/^[a-z0-9._-]+$/i.test(id)) throw new Error(`Invalid batch id: ${id}`);

  const manifest = await readManifest(id);
  if (!manifest) throw new Error(`Batch not found: ${id}`);

  const loaded: BatchBlogFile[] = [];
  const skipped: { file: string; why: string }[] = [];

  // Trust the directory over the manifest list, so a blog written but not yet
  // recorded in batch.json still shows up.
  let files: string[] = [];
  try {
    files = (await readdir(path.join(ROOT, id, "blogs"))).filter((f) => f.endsWith(".json")).sort();
  } catch {
    files = manifest.blogs.map((s) => `${s}.json`);
  }

  for (const file of files) {
    try {
      const raw = await readFile(path.join(ROOT, id, "blogs", file), "utf8");
      const parsed = parseBatchBlogFile(JSON.parse(raw));
      if (parsed) loaded.push(parsed);
      else skipped.push({ file, why: "missing title, slug or contentMarkdown" });
    } catch (err) {
      skipped.push({ file, why: err instanceof Error ? err.message : "unreadable" });
    }
  }

  return { ...manifest, loaded, skipped };
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}
```

- [ ] **Step 3: Add the tracing include**

In `next.config.ts`, extend the **existing** `outputFileTracingIncludes` object:

```ts
  outputFileTracingIncludes: {
    "/api/upload-image": ["node_modules/sharp/**/*", "node_modules/@img/**/*"],
    // The batches route reads committed JSON off disk at request time. Next's
    // tracer can't see through readdir/readFile, so the content tree must be
    // force-included or production returns an empty list.
    "/api/batches": ["./content/**/*"],
  },
```

- [ ] **Step 4: Verify against the fixture**

```bash
mkdir -p content/batches
cp -r tests/fixtures/batches/2026-01-01-fixture content/batches/
npm run dev &
sleep 8
curl -s localhost:3000/api/batches | head -c 400
curl -s 'localhost:3000/api/batches?id=2026-01-01-fixture' | node -e "let s='';process.stdin.on('data',d=>s+=d).on('end',()=>{const b=JSON.parse(s);console.log('loaded',b.loaded.length,'skipped',b.skipped.length,b.skipped)})"
```

Expected: `batches` lists one entry; the detail call reports `loaded 1 skipped 1` with `broken.json` named. Then remove the copied fixture: `rm -rf content/batches/2026-01-01-fixture`.

- [ ] **Step 5: Commit**

```bash
git add app/api/batches/route.ts next.config.ts content/batches/.gitkeep
git commit -m "feat(batches): GET /api/batches reads committed batch files"
```

---

## Task 3: `GET /api/strapi/slugs` — the published-lock

**Files:**
- Create: `app/api/strapi/slugs/route.ts`

**Interfaces:**
- Produces: `GET /api/strapi/slugs?strapiUrl=…` with header `x-strapi-token` → `{ slugs: string[] }`. Consumed by Task 4.

- [ ] **Step 1: Implement**

```ts
// Return every article slug that exists in Strapi — draft OR published.
//
// This is the published-lock for the Batches section. IndexedDB can't be the
// lock: the user publishes from Vercel preview URLs that change per branch, so
// a flag in one browser's IndexedDB is invisible on the next deploy and the
// same post could be published twice. Strapi enforces slug uniqueness, so the
// set of existing slugs IS the durable answer.
//
// `status=draft` in Strapi v5 returns drafts *and* published entries, so a post
// saved as a draft still counts as taken.

export const runtime = "nodejs";
export const maxDuration = 60;

const TAG = "[strapi-slugs]";
const PAGE_SIZE = 100;
const MAX_PAGES = 100; // 10k articles — a backstop, not an expected limit

export async function GET(req: Request) {
  const strapiUrl = new URL(req.url).searchParams.get("strapiUrl") || "";
  const strapiToken = req.headers.get("x-strapi-token") || "";
  if (!strapiUrl) return json({ error: "Missing strapiUrl" }, 400);

  const base = strapiUrl.replace(/\/+$/, "");
  const headers: Record<string, string> = {};
  if (strapiToken) headers.Authorization = `Bearer ${strapiToken}`;

  const slugs = new Set<string>();
  try {
    for (let page = 1; page <= MAX_PAGES; page++) {
      const url =
        `${base}/api/articles?fields[0]=slug&status=draft` +
        `&pagination[page]=${page}&pagination[pageSize]=${PAGE_SIZE}`;
      const res = await fetch(url, { headers, cache: "no-store" });
      const data = (await res.json().catch(() => null)) as {
        data?: { slug?: string; attributes?: { slug?: string } }[];
        error?: { message?: string };
      } | null;

      if (!res.ok) {
        return json({ error: `Strapi ${res.status}: ${data?.error?.message || res.statusText}` }, 502);
      }

      const list = data?.data || [];
      for (const row of list) {
        const slug = row.slug ?? row.attributes?.slug;
        if (slug) slugs.add(slug);
      }
      if (list.length < PAGE_SIZE) break;
    }
    return json({ slugs: [...slugs] });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to reach Strapi";
    console.error(`${TAG} ✖`, message);
    return json({ error: message }, 502);
  }
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}
```

- [ ] **Step 2: Verify against the live Strapi**

```bash
curl -s "localhost:3000/api/strapi/slugs?strapiUrl=$STRAPI_URL" -H "x-strapi-token: $STRAPI_TOKEN" \
  | node -e "let s='';process.stdin.on('data',d=>s+=d).on('end',()=>{const j=JSON.parse(s);console.log('slugs:',j.slugs?.length ?? j)})"
```

Expected: a count matching roughly the article count in Strapi (>100 proves pagination works). If it errors, note whether Strapi is reachable — this is the risk flagged in the spec.

- [ ] **Step 3: Commit**

```bash
git add app/api/strapi/slugs/route.ts
git commit -m "feat(batches): GET /api/strapi/slugs as the durable published-lock"
```

---

## Task 4: Client helpers

**Files:**
- Modify: `app/lib/client.ts` (append at end)

**Interfaces:**
- Produces: `fetchBatches()`, `fetchBatch(id)`, `fetchPublishedSlugs(settings)`. Consumed by Tasks 6 and 7.

- [ ] **Step 1: Append to `app/lib/client.ts`**

```ts
// ── Batches (Claude-Code-authored posts committed under content/batches/) ─────

/** List every committed batch (manifests only). */
export async function fetchBatches(): Promise<BatchManifest[]> {
  const res = await fetch("/api/batches", { cache: "no-store" });
  const data = (await res.json()) as { batches?: BatchManifest[]; error?: string };
  if (!res.ok || data.error) throw new Error(data.error || `Failed to load batches (${res.status})`);
  return data.batches || [];
}

/** Load one batch with every blog file parsed. */
export async function fetchBatch(id: string): Promise<BatchWithBlogs> {
  const res = await fetch(`/api/batches?id=${encodeURIComponent(id)}`, { cache: "no-store" });
  const data = (await res.json()) as BatchWithBlogs & { error?: string };
  if (!res.ok || data.error) throw new Error(data.error || `Failed to load batch (${res.status})`);
  return data;
}

/**
 * Every slug already in Strapi — the published-lock. Returns an empty set when
 * Strapi isn't configured so the UI still renders (nothing is locked, and the
 * publish call itself would fail loudly anyway).
 */
export async function fetchPublishedSlugs(settings: Settings): Promise<Set<string>> {
  if (!settings.strapiUrl) return new Set();
  const res = await fetch(`/api/strapi/slugs?strapiUrl=${encodeURIComponent(settings.strapiUrl)}`, {
    headers: settings.strapiToken ? { "x-strapi-token": settings.strapiToken } : {},
    cache: "no-store",
  });
  const data = (await res.json()) as { slugs?: string[]; error?: string };
  if (!res.ok || data.error) throw new Error(data.error || `Failed to load published slugs (${res.status})`);
  return new Set(data.slugs || []);
}
```

Add `BatchManifest` and `BatchWithBlogs` to the existing `import type { … } from "./types"` at the top of the file.

- [ ] **Step 2: Typecheck**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add app/lib/client.ts
git commit -m "feat(batches): client helpers for batches and the slug lock"
```

---

## Task 5: Sidebar nav + page wiring

**Files:**
- Modify: `app/components/Sidebar.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Produces: `View` includes `"batches"`; `page.tsx` renders `<BatchesScreen>` for that view.

- [ ] **Step 1: Extend the View union and nav**

In `app/components/Sidebar.tsx`:

```ts
export type View = "generate" | "library" | "batches";

const PROJECT_NAV: { id: View; label: string; icon: string; hint: string }[] = [
  { id: "generate", label: "Generate", icon: "✦", hint: "Upload keywords & write" },
  { id: "library", label: "Library", icon: "📚", hint: "Read every blog" },
  { id: "batches", label: "Batches", icon: "📦", hint: "Claude-written posts, review & publish" },
];
```

Add an optional `batchCount?: number` prop and badge the Batches item with it, mirroring how `library` is badged with `blogCount`:

```tsx
badge={item.id === "library" && blogCount > 0 ? blogCount : item.id === "batches" && batchCount ? batchCount : undefined}
```

- [ ] **Step 2: Render the screen in `app/page.tsx`**

Import `BatchesScreen` and render it for `view === "batches"`, alongside the existing `view === "library"` block. Pass:

```tsx
{view === "batches" && (
  <BatchesScreen
    settings={settings}
    categories={categories}
    authors={authors}
    templates={templates}
    onPublished={refreshBlogs}
  />
)}
```

`refreshBlogs` is whatever existing callback reloads `blogs` from IndexedDB — reuse it so a published batch blog immediately appears in Library. If the existing loader is inline, extract it to a named `useCallback` first.

- [ ] **Step 3: Verify the nav renders**

Run `npm run dev`, open a project, confirm a third "Batches" rail item appears and switches view without console errors. A placeholder `BatchesScreen` returning `<div>Batches</div>` is fine at this step.

- [ ] **Step 4: Commit**

```bash
git add app/components/Sidebar.tsx app/page.tsx
git commit -m "feat(batches): add Batches view to the sidebar and page router"
```

---

## Task 6: `BatchesScreen` — list, detail table, lock rendering

**Files:**
- Create: `app/components/BatchesScreen.tsx`

**Interfaces:**
- Consumes: `fetchBatches`, `fetchBatch`, `fetchPublishedSlugs` (Task 4); `wordCount`, `resolveCategoryId`, `resolveTemplateIds`, `batchBlogPublishState` (Task 1).
- Produces: the component rendered by Task 5. Task 7 adds the publish handler to this same file.

Follow the existing visual language: CSS vars (`var(--panel)`, `var(--border)`, `var(--muted)`, `var(--accent)`), the `Segmented` pill pattern from `BlogLibrary.tsx`, rounded-xl cards, `text-[11px] uppercase tracking-wide` labels.

- [ ] **Step 1: Build the batch list view**

Component state:

```tsx
const [batches, setBatches] = useState<BatchManifest[]>([]);
const [openId, setOpenId] = useState<string | null>(null);
const [batch, setBatch] = useState<BatchWithBlogs | null>(null);
const [strapiSlugs, setStrapiSlugs] = useState<Set<string>>(new Set());
const [selected, setSelected] = useState<Set<string>>(new Set());   // slugs
const [authorId, setAuthorId] = useState<string>("");
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string>("");
const [rowState, setRowState] = useState<Record<string, { status: "idle" | "publishing" | "done" | "error"; error?: string; warning?: string }>>({});
const [viewingSlug, setViewingSlug] = useState<string | null>(null);
```

On mount: `fetchBatches()` and `fetchPublishedSlugs(settings)` in parallel via `Promise.allSettled`, so an unreachable Strapi still lets batches render (with a visible warning banner that nothing is locked and publishing will fail).

Batch cards show: name, `createdAt` formatted with the existing `fmt()` helper pattern, keyword count, `n published / m total` computed from `strapiSlugs`, and the branch name in monospace.

- [ ] **Step 2: Build the detail table**

On `openId` change, `fetchBatch(openId)`.

Table columns, one row per `batch.loaded` entry:

| Column | Content |
|---|---|
| checkbox | disabled when `batchBlogPublishState(slug, strapiSlugs) === "published"` |
| Title | `article.title`, click → `setViewingSlug(slug)` |
| Slug | `article.slug` in monospace |
| Words | `wordCount(article.contentMarkdown)` |
| FAQs | `article.faqs.length`, amber if `< 8` or `> 12` |
| Category | resolved name, or `⚠ no match: <slug>` in amber |
| Templates | resolved count, plus `⚠ n missing` when `resolveTemplateIds().missing.length` |
| Audit | `✓` when `failed.length === 0`, else `⚠ n` |
| Status | `Published` pill (green) / `Not published` (muted) / per-row publishing spinner / error text |

Render `batch.skipped` as a visible amber banner above the table — a malformed file must never be silently invisible.

- [ ] **Step 3: Toolbar**

- Author `<select>` built from `authors` (reuse `TaxonomySelect` from `SettingsPanel` for consistency), stored in `authorId`. Label it "Author (applied to every post in this batch)".
- `Select all unpublished` / `Clear` buttons.
- Status filter: `All` / `Unpublished` / `Published` via the `Segmented` pattern.
- `Publish selected (n)` button — disabled when `n === 0`, when `!settings.strapiUrl`, or while publishing. Task 7 wires its handler.

- [ ] **Step 4: Wire the viewer**

When `viewingSlug` is set, render the existing `BlogViewer` for that blog inside the existing `Modal`, matching how `BlogLibrary` opens it. Pass `batchMeta` so Task 8's Audit tab appears.

- [ ] **Step 5: Verify**

Copy the fixture into `content/batches/`, run dev, open Batches. Expect: one card; opening it shows one row plus an amber "1 file skipped: broken.json" banner; the FAQ cell is amber (1 FAQ, below 8); the Category cell warns if no `festivals` category exists in Strapi.

- [ ] **Step 6: Commit**

```bash
git add app/components/BatchesScreen.tsx
git commit -m "feat(batches): batch list and review table with Strapi-slug lock"
```

---

## Task 7: Publish flow

**Files:**
- Modify: `app/components/BatchesScreen.tsx`

**Interfaces:**
- Consumes: `publishArticle` (`app/lib/client.ts:245`), `saveBlog`/`saveProject`/`getProject` (`app/lib/db.ts`), `resolveCategoryId`/`resolveTemplateIds` (Task 1).

- [ ] **Step 1: Implement `publishSelected`**

```tsx
/**
 * Publish the ticked blogs, one at a time.
 *
 * Sequential on purpose: the slug-conflict retry loop in /api/strapi mutates
 * the slug (`-2`, `-3`…) on collision, and concurrent publishes would race it.
 * A failure on one blog never aborts the rest.
 */
const publishSelected = useCallback(async () => {
  if (!batch) return;
  const targets = batch.loaded.filter(
    (b) => selected.has(b.article.slug) && batchBlogPublishState(b.article.slug, strapiSlugs) === "unpublished"
  );

  for (const blog of targets) {
    const slug = blog.article.slug;
    setRowState((s) => ({ ...s, [slug]: { status: "publishing" } }));

    try {
      const categoryId = resolveCategoryId(blog.batchMeta.categorySlug, categories);
      const { ids: templateIds, missing } = resolveTemplateIds(blog.batchMeta.templateUrls, templates);

      const warnings: string[] = [];
      if (blog.batchMeta.categorySlug && !categoryId) {
        warnings.push(`category "${blog.batchMeta.categorySlug}" not found in Strapi`);
      }
      if (missing.length) warnings.push(`templates not found: ${missing.join(", ")}`);

      const { documentId, publishState } = await publishArticle(settings, blog.article, {
        categoryId,
        authorId: authorId || undefined,
        templateIds,
      });

      // Mirror into IndexedDB so batch blogs also appear in the Library view.
      // Batch blogs are grouped under a synthetic project so the existing
      // project-scoped queries keep working untouched.
      const projectId = `batch:${batch.id}`;
      if (!(await getProject(projectId))) {
        const now = new Date().toISOString();
        await saveProject({
          id: projectId,
          name: batch.name,
          description: `Claude Code batch — ${batch.keywords.length} keyword(s)`,
          type: "batch",
          createdAt: now,
          updatedAt: now,
        });
      }

      await saveBlog({
        id: `${projectId}::${slug}`,
        projectId,
        rowId: slug,
        keyword: blog.batchMeta.keyword,
        article: blog.article,
        provider: "anthropic",
        model: "claude-code",
        publishState,
        documentId,
        categoryId,
        categoryName: categories.find((c) => c.documentId === categoryId)?.name,
        authorId: authorId || undefined,
        authorName: authors.find((a) => a.documentId === authorId)?.name,
        templateIds,
        templateNames: templateIds.map((id) => templates.find((t) => t.documentId === id)?.name || id),
        createdAt: new Date().toISOString(),
      });

      // Lock it immediately — no reload needed, and a second click can't republish.
      setStrapiSlugs((prev) => new Set(prev).add(slug));
      setSelected((prev) => {
        const next = new Set(prev);
        next.delete(slug);
        return next;
      });
      setRowState((s) => ({
        ...s,
        [slug]: { status: "done", warning: warnings.length ? warnings.join("; ") : undefined },
      }));
      onPublished?.();
    } catch (err) {
      setRowState((s) => ({
        ...s,
        [slug]: { status: "error", error: err instanceof Error ? err.message : "Publish failed" },
      }));
    }
  }
}, [batch, selected, strapiSlugs, categories, templates, authors, authorId, settings, onPublished]);
```

- [ ] **Step 2: Surface per-row outcome**

In the Status cell: `publishing` → spinner + "Publishing…"; `done` → green "Published" pill, plus an amber warning line when `warning` is set; `error` → red text with the Strapi message and a "Retry" button that re-runs just that slug.

- [ ] **Step 3: Verify the lock end-to-end**

1. Point Settings at Strapi, open the fixture batch, publish the one valid blog.
2. Confirm the row flips to Published and its checkbox is now disabled.
3. Reload the page. Confirm it is *still* Published and *still* disabled — this proves the lock reads Strapi, not component state.
4. Open the article in Strapi admin and confirm category/author/templates are connected.
5. Confirm the post also appears under Library in a `batch:` project.
6. Delete the test article from Strapi afterwards.

- [ ] **Step 4: Commit**

```bash
git add app/components/BatchesScreen.tsx
git commit -m "feat(batches): sequential publish with taxonomy resolution and IndexedDB mirror"
```

---

## Task 8: `BlogViewer` Audit tab

**Files:**
- Modify: `app/components/BlogViewer.tsx`

**Interfaces:**
- Consumes: `BatchMeta` (Task 1).

- [ ] **Step 1: Add an optional prop and tab**

`BlogViewer` currently has `type Tab = "article" | "faqs" | "schema" | "seo";` (line 9) and a `TABS` array (line 11). Add `"audit"` to the union, and append `{ id: "audit", label: "Audit" }` to `TABS` **only when `batchMeta` is provided**, so the Library's existing usage is unchanged:

```tsx
const tabs = batchMeta ? [...TABS, { id: "audit" as Tab, label: "Audit" }] : TABS;
```

Render `tabs` instead of `TABS` in the tab bar.

- [ ] **Step 2: Render the tab content**

```tsx
{tab === "audit" && batchMeta && (
  <div className="space-y-5">
    <section>
      <h4 className="text-[11px] uppercase tracking-wide text-[var(--muted)] mb-1">Angle</h4>
      <p className="text-sm">{batchMeta.angle || "—"}</p>
    </section>

    <section>
      <h4 className="text-[11px] uppercase tracking-wide text-[var(--muted)] mb-1">Honest assessment</h4>
      <p className="text-sm">{batchMeta.auditReport.honestAssessment || "—"}</p>
    </section>

    {batchMeta.auditReport.failed.length > 0 && (
      <section>
        <h4 className="text-[11px] uppercase tracking-wide mb-1" style={{ color: "#f59e0b" }}>
          Failed checks ({batchMeta.auditReport.failed.length})
        </h4>
        <ul className="text-sm space-y-1">
          {batchMeta.auditReport.failed.map((f) => (
            <li key={f.item}>
              <span className="font-medium">{f.item}</span>
              <span className="text-[var(--muted)]"> — {f.why}</span>
            </li>
          ))}
        </ul>
      </section>
    )}

    <section>
      <h4 className="text-[11px] uppercase tracking-wide text-[var(--muted)] mb-1">
        First-party facts cited ({batchMeta.factsUsed.length})
      </h4>
      <ul className="text-sm space-y-1">
        {batchMeta.factsUsed.map((f) => <li key={f}>{f}</li>)}
      </ul>
    </section>

    <section>
      <h4 className="text-[11px] uppercase tracking-wide text-[var(--muted)] mb-1">
        Verified sources ({batchMeta.sources.length})
      </h4>
      <ul className="text-sm space-y-2">
        {batchMeta.sources.map((s) => (
          <li key={s.url}>
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--accent)" }}>
              {s.url}
            </a>
            <div className="text-[var(--muted)]">{s.stat}{s.publishedDate ? ` · ${s.publishedDate}` : ""}</div>
          </li>
        ))}
      </ul>
    </section>

    <section>
      <h4 className="text-[11px] uppercase tracking-wide text-[var(--muted)] mb-1">
        Passed ({batchMeta.auditReport.passed.length})
      </h4>
      <ul className="text-xs text-[var(--muted)] space-y-0.5">
        {batchMeta.auditReport.passed.map((p) => <li key={p}>✓ {p}</li>)}
      </ul>
    </section>
  </div>
)}
```

- [ ] **Step 3: Verify**

Open a batch blog from Batches → Audit tab shows the fixture's one failed check. Open a blog from Library → no Audit tab. Both without console errors.

- [ ] **Step 4: Commit**

```bash
git add app/components/BlogViewer.tsx
git commit -m "feat(batches): Audit tab showing checklist, facts and sources"
```

---

## Task 9: `collect-facts.mjs` → `content/facts.md`

**Files:**
- Create: `scripts/collect-facts.mjs`
- Create: `content/facts.md` (generated output, committed)

**Interfaces:**
- Produces: `npm run facts` writes `content/facts.md`. Phase 0 of the skill reads it.

- [ ] **Step 1: Confirm the mongodb driver is reachable without a new dep**

Run: `node -e "console.log(require.resolve('mongodb',{paths:['../server/node_modules']}))"`
Expected: a path. If it fails, the script must be run with `NODE_PATH=../server/node_modules node scripts/collect-facts.mjs` — encode whichever works into the `facts` npm script.

- [ ] **Step 2: Implement the script**

Requirements, precisely:

- Parse `../server/.env` by hand (no dotenv dep): read the file, split lines, take `PROD_MONGODB_URI` (fall back to `LOCAL_MONGODB_URI`). **Never log the value.** If absent, exit non-zero with `Set PROD_MONGODB_URI in ../server/.env` and write nothing.
- Connect to db `gifts`.
- Enumerate collections via `db.listCollections()`; treat every name ending in `Page` as a page-type collection.
- Compute, each guarded in its own try/catch so one failure omits one fact rather than killing the run:
  1. **Total pages created** — sum of `countDocuments({})` across page collections.
  2. **Pages created in the last 30 days** — same, filtered `createdAt: { $gte: <30d ago> }`.
  3. **Most popular occasion** — page collection with the highest count; report name (strip the `Page` suffix, humanise) and percentage of total.
  4. **Top 5 page types** — name + share, as a list.
  5. **Median minutes from `createdAt` to `updatedAt`** on the largest page collection — `$match` both present, `$project` the delta, sort, pick the middle. Cap the sample at 5000 docs.
  6. **Registered users** — `countDocuments` on `users` (resolve the real collection name from `listCollections`, Mongoose pluralises).
  7. **Total page views** — `countDocuments` on the `PageView` collection; also distinct pages viewed.
- Emit `content/facts.md` with the `## Product usage` / `## Performance` / `## Customer behaviour` headings from the reference template, one fact per line, each ending `— measured YYYY-MM-DD` using today's date.
- Print a summary of how many facts were written, and **nothing else** — no URIs, no document dumps.
- Close the client in a `finally`.
- Read-only: no `insert`, `update`, `delete`, or `createIndex` anywhere in the file.

- [ ] **Step 3: Run it**

Run: `npm run facts`
Expected: `content/facts.md` written with ≥3 dated facts. Then verify no leak:

```bash
grep -ciE 'mongodb\+srv|@gift-cluster|password' content/facts.md
```
Expected: `0`

- [ ] **Step 4: Commit**

```bash
git add scripts/collect-facts.mjs content/facts.md package.json
git commit -m "feat(facts): collect first-party numbers from Mongo into content/facts.md"
```

---

## Task 10: The `subhsandesh-blog` skill

**Files:**
- Create: `.claude/skills/subhsandesh-blog/SKILL.md`
- Create: `.claude/skills/subhsandesh-blog/references/page-structure.md`
- Create: `.claude/skills/subhsandesh-blog/references/tone-and-links.md`
- Create: `.claude/skills/subhsandesh-blog/references/publish-checklist.md`
- Create: `.claude/skills/subhsandesh-blog/references/article-json-schema.md`
- Create: `.claude/skills/subhsandesh-blog/references/competitors.md`
- Create: `/Users/admin/Desktop/Suyash/gifts/.claude/skills/subhsandesh-blog/SKILL.md` (pointer)

**Interfaces:**
- Consumes: `content/facts.md` (Task 9), the batch file format (Task 1), `TEMPLATE_LINKS` in `app/lib/prompt.ts`.

- [ ] **Step 1: Write `SKILL.md`**

Frontmatter `name: subhsandesh-blog`, and a `description` that triggers on: writing a blog post or article, SEO, GEO, AEO, answer engine optimisation, keyword batches, "make blogs for these keywords", content briefs, competitor content analysis, getting cited by ChatGPT/Perplexity/AI Overviews.

Body must contain, in order:

- **The core principle** — an answer engine cites the source that has something the others don't; synthesising the top 5 produces a sixth identical page. Original first-party data is the moat.
- **Phase 0 (blocking)** — run `npm run facts`, read `content/facts.md`, require ≥3 keyword-relevant facts with ≥2 usable in the first 150 words. If short: say so plainly, do not draft, help find more.
- **Phase 1** — WebSearch, WebFetch top 5 in full, record the comparison table (word count, heading structure, where the answer appears, entities, data + its date, format elements, tone). Head terms (1–2 words) → propose 3 long-tail alternatives first.
- **Phase 2** — table stakes / the gap / stale data / unanswered questions / fan-out sub-queries. Write the one-line angle or go back.
- **Phase 3** — 4–6 sources in the stated priority order, each WebFetched to verify it contains the claimed stat. Never cite a competitor. Apply the "would it stay without the link" test.
- **Phase 4** — draft per `references/page-structure.md`. **8–12 FAQs.** 1,200–1,800 words.
- **Phase 5** — 2–4 internal links, descriptive anchors, placed after value is established; URLs only from `TEMPLATE_LINKS` in `app/lib/prompt.ts`. Then pick `categorySlug` from live Strapi categories (`GET /api/strapi` or the Strapi REST API) and 1–3 `templateUrls`.
- **Phase 6** — run `references/publish-checklist.md`, record pass/fail into `auditReport`, flag failures rather than fixing silently, write the honest assessment.
- **Phase 7** — emit `content/batches/<batchId>/blogs/<slug>.json` per `references/article-json-schema.md`, plus `research/<slug>.md`, plus/update `batch.json`.
- **Batch procedure** — branch `batch/<YYYY-MM-DD>-<name>`, one subagent per keyword, ≤6 concurrent, commit, push, report a table.
- **What this skill will not do** — cite/link/paraphrase a competitor; draft without first-party data; invent statistics or dates; pad word count; claim a post will rank.

- [ ] **Step 2: Write the four content references**

Adapt the user's reference bundle, with these deliberate changes:
- `page-structure.md` — the 7-block template verbatim (title/H1/answer paragraph → definition H2 → main body H2+H3s → comparison table → objection H2 → FAQ → author & sources), heading rules, schema requirements. Change the FAQ block to **4–6 questions minimum, 8–12 target**.
- `tone-and-links.md` — verbatim: what reads as human, what reads as generated (the full avoid-list), regional fit, outbound/competitor/Wikipedia/internal link rules.
- `publish-checklist.md` — verbatim checklist, with the FAQ line changed to 8–12 and an added technical line: "batch JSON validates against `references/article-json-schema.md`".
- `article-json-schema.md` — **new.** The exact `BatchBlogFile` shape from `app/lib/types.ts`, every field with its constraint (`metaTitle` ≤70, `metaDescription` ≤170, `excerpt` ≤300, `slug` lowercase-hyphenated, `structuredData` must contain Article + FAQPage blocks), plus a complete worked example. State that `article` must match `GeneratedArticle` exactly because `toStrapiData()` consumes it unchanged.
- `competitors.md` — **new.** The do-not-link list: Indian gifting and greeting-card sites selling to the same buyer for the same job (FNP, IGP, Archies, BigSmall, Winni, Zoomin, Printvenue, Oyehappy, Bigsmall.in), plus template/invitation builders and "digital invite" apps. Rule: a competitor is any site selling into the same buyer for the same job. If a competitor published original data that matters, find their primary source and cite that instead.

- [ ] **Step 3: Write the pointer skill**

`/Users/admin/Desktop/Suyash/gifts/.claude/skills/subhsandesh-blog/SKILL.md` — frontmatter with the same triggering `description`, and a body that says only: the canonical skill lives at `blog-automation/.claude/skills/subhsandesh-blog/SKILL.md`; read it and follow it exactly; all paths in it are relative to `blog-automation/`.

- [ ] **Step 4: Verify the skill loads**

From `/Users/admin/Desktop/Suyash/gifts`, confirm `subhsandesh-blog` appears in the available-skills list and that invoking it reads the canonical file.

- [ ] **Step 5: Commit**

```bash
git add .claude/skills/subhsandesh-blog
git commit -m "feat(skill): subhsandesh-blog 7-phase researched writing skill"
```

---

## Task 11: README, build, deploy

**Files:**
- Modify: `README.md`
- Modify: `.gitignore` (ensure `content/batches/` is NOT ignored)

- [ ] **Step 1: Document the flow in `README.md`**

A new "Batches — Claude-Code-authored posts" section covering: what a batch is, the on-disk layout, `npm run facts`, how to hand keywords to Claude Code, how to review (the Audit tab, what the amber warnings mean), how publishing works, that the lock is the Strapi slug set and therefore a published post can never be republished, and the note that each preview URL needs its own Strapi token in Settings.

- [ ] **Step 2: Confirm nothing needed is gitignored**

Run: `git check-ignore -v content/facts.md content/batches/.gitkeep`
Expected: no output (not ignored).

- [ ] **Step 3: Full verification**

```bash
npm test
npx tsc --noEmit
npm run lint
npm run build
```
All four must pass. Fix anything that fails before proceeding — do not report success on a red build.

- [ ] **Step 4: Push and deploy**

```bash
git push -u origin feat/blog-batches
```

Confirm the Vercel build succeeds, then on the deployed URL: enter the Strapi token in Settings, open Batches, and confirm the batch list renders and the slug lock loads. **This is the step that proves Vercel can reach Strapi** — the main risk in the spec. If `/api/strapi/slugs` fails from the deployment but works locally, stop and report it; that's an infrastructure fix (security group / HTTPS), not a code fix.

- [ ] **Step 5: Commit**

```bash
git add README.md
git commit -m "docs: document the Batches review-and-publish flow"
git push
```

---

## Self-Review

**Spec coverage:**
| Spec section | Task |
|---|---|
| Skill location, 7 phases, concurrency | 10 |
| Facts collector, Mongo, no credential leak | 9 |
| On-disk batch format | 1 (types + fixture), 10 (schema reference) |
| `batch.json` / `blogs/*.json` / `research/*.md` | 1, 10 |
| New types in `types.ts` | 1 |
| `View` gains `"batches"` | 5 |
| `GET /api/batches` + `outputFileTracingIncludes` | 2 |
| `GET /api/strapi/slugs`, draft+published | 3 |
| Batch list, detail table, Audit column | 6 |
| Lock disables the checkbox | 1 (logic), 6 (render), 7 (verify) |
| Publish: resolve taxonomy → publishArticle → IndexedDB → lock | 7 |
| Synthetic `batch:<id>` project | 7 |
| Sequential publish, failures don't abort | 7 |
| Audit tab in `BlogViewer` | 8 |
| Batch run procedure | 10 |
| Risk: Vercel → Strapi reachability | 3 (local check), 11 (deployed check) |
| Testing section | 1, 2, 3, 7, 9, 11 |

No gaps.

**Placeholder scan:** No TBDs. Tasks 6, 9, 10 and 11 specify content by explicit enumerated requirements rather than full literal text — that is deliberate for UI markup, a long procedural script, and prose documents, and every requirement is concrete and checkable. All logic that can be unit-tested has literal code (Tasks 1, 2, 3, 4, 7, 8).

**Type consistency:** `parseBatchManifest` / `parseBatchBlogFile` / `wordCount` / `resolveCategoryId` / `resolveTemplateIds` / `batchBlogPublishState` are defined in Task 1 and used under those exact names in Tasks 2, 6, 7. `BatchWithBlogs.skipped` is defined in Task 1 and consumed in Tasks 2 and 6. `publishArticle`'s `links` object uses `categoryId` / `authorId` / `templateIds`, matching `app/lib/client.ts:248`. `StoredBlog` fields in Task 7 match `app/lib/types.ts:88-118`, including required `provider` and `model`.
