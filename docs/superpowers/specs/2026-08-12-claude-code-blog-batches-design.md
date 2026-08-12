# Claude-Code Blog Batches — Design

**Date:** 2026-08-12
**Repo:** `blog-automation` (github.com/suyashagrahari/blog-automation)
**Status:** Approved for implementation

---

## Problem

The studio's existing pipeline (Excel → in-app LLM call → IndexedDB → Strapi) produces
articles from a single one-shot prompt. No SERP research, no competitor gap analysis,
no verified third-party sources, and no first-party data. The result is a sixth version
of whatever already ranks, which neither Google nor an answer engine has a reason to
surface.

We want a second, higher-quality pipeline where **Claude Code** writes the posts — with
real web research and the site's own Mongo numbers — and the studio becomes the review
and publish surface for that output.

## Non-goals

- Replacing the existing Generate / Library flow. This is additive; both pipelines coexist.
- Generating cover images. Covers stay manual (bulk-attached in the UI), as today.
- Any change to the Strapi Article schema. The existing schema already carries every
  field this design needs.

---

## Decisions taken

| Question | Decision |
|---|---|
| Where the user publishes from | The **live Vercel deployment** of blog-automation |
| How content reaches the UI | JSON files **committed to the repo**, read server-side |
| Published-lock truth | **Strapi slug set**, checked on load. IndexedDB is a local mirror |
| First-party facts | **Auto-queried from Mongo** into a committed `facts.md` |
| Research depth | **Full depth, one subagent per keyword**, run concurrently |
| Category + related templates | **Skill picks per blog** |
| Author + cover images | **User sets per batch in the UI** |
| Typical batch size | **2–4 keywords** (design handles any N; concurrency cap 6) |
| FAQs per post | **8–12** (down from the in-app prompt's 60–100) |

### Why the lock lives in Strapi

The user publishes from a Vercel URL, and preview URLs change per branch. IndexedDB is
scoped to one origin and one browser, so a "published" flag stored only there would be
invisible on the next deploy and the same post could be published twice. Strapi already
enforces `slug` uniqueness, so the set of existing slugs *is* the durable answer to
"what has been published". IndexedDB remains useful as a fast local ledger and to make
batch blogs appear in the existing Library view.

---

## Architecture

```
                        ┌──────────────────────────────────────┐
   keywords (2–4)  ───▶ │ Claude Code + subhsandesh-blog skill │
                        └──────────────────┬───────────────────┘
                                           │ npm run facts  ──▶ Mongo (gifts)
                                           │
                        writes to a new git branch:
                        content/batches/<batchId>/
                          batch.json
                          blogs/<slug>.json
                          research/<slug>.md
                                           │
                                    git push
                                           ▼
                              Vercel builds the branch
                                           │
                                           ▼
                  ┌────────────────────────────────────────────┐
                  │  Batches section (new)                     │
                  │  GET /api/batches      ← reads content/**  │
                  │  GET /api/strapi/slugs ← the lock          │
                  │  review → tick → Publish                   │
                  └──────────────────┬─────────────────────────┘
                                     │ existing publishArticle()
                                     ▼
                     POST /api/articles/automation  (Strapi)
                                     │
                            entry.publish event
                                     ▼
                     nextjs-revalidate webhook → subhsandesh.in/blog
```

---

## Component 1 — The skill

### Location

Canonical files live in the `blog-automation` repo so they are versioned with the app:

```
blog-automation/.claude/skills/subhsandesh-blog/
├── SKILL.md
└── references/
    ├── page-structure.md
    ├── tone-and-links.md
    ├── publish-checklist.md
    ├── article-json-schema.md
    └── competitors.md
```

A one-line pointer skill at `gifts/.claude/skills/subhsandesh-blog/SKILL.md` makes it
discoverable from the `gifts` working directory, where the user actually runs Claude Code.
The pointer contains only a description and an instruction to read the canonical
`SKILL.md`; all substance lives in one place.

### Workflow (7 phases, in order)

**Phase 0 — Facts gate (blocking).** Run `npm run facts` to refresh
`content/facts.md`, then read it. Require **≥3 facts relevant to the target keyword**,
with **≥2 usable in the first 150 words**. If fewer, stop and report — do not draft.

**Phase 1 — SERP analysis.** For each keyword: `WebSearch`, then `WebFetch` the top 5
results in full. Record word count, heading structure, where the direct answer appears,
named entities, data cited **with its date**, format elements (tables/FAQ/schema/byline),
and tone. If the keyword is a 1–2 word head term, propose 3 long-tail alternatives first.

**Phase 2 — Gap analysis.** Extract table stakes (what all 5 cover), the gap (what none
cover), stale data (>2 years old), unanswered questions, and fan-out sub-queries. State
the angle in one sentence: *"This post wins by being the only one that ___ using ___."*
If that sentence can't be written honestly, the angle is too weak — return to Phase 2.

**Phase 3 — Source research.** Find 4–6 citable third-party sources, priority order:
government statistics → peer-reviewed → industry bodies → non-competitor original
research → data journalism. `WebFetch` each to verify it actually contains the claimed
statistic. **Never cite a competitor** (see `references/competitors.md`). Apply the
relevance test: would this fact belong without the link? If not, cut it.

**Phase 4 — Draft.** Follow `references/page-structure.md`. Non-negotiables: direct
answer in the first 150 words with ≥2 first-party numbers; 2–3 sentence paragraphs;
≥1 specific number, date, price or named source per H2; one comparison table with real
values; 8–12 FAQs in natural spoken phrasing; 1,200–1,800 words.

**Phase 5 — Internal links + Strapi targeting.** 2–4 internal links using descriptive
anchor text, placed *after* the section that establishes the need — never in the opening.
Only URLs from `TEMPLATE_LINKS` in `app/lib/prompt.ts` (prevents invented 404 slugs).
Then choose `categorySlug` from the live Strapi categories and 1–3 `templateUrls` for
`relatedTemplates`.

**Phase 6 — Self-audit.** Run every item in `references/publish-checklist.md`. Record
pass/fail per item into `batchMeta.auditReport` — **flag failures, do not silently fix
them**. Write the honest assessment: why would an answer engine cite this over the five
pages analysed? If the only answer is "it's better written", say so.

**Phase 7 — Emit.** Write `blogs/<slug>.json` and `research/<slug>.md`.

### Concurrency

One subagent per keyword, all phases inside that subagent, max 6 concurrent. At the
typical batch size of 2–4 the whole batch runs in parallel, so wall-clock is roughly one
keyword's worth.

### The facts collector

`blog-automation/scripts/collect-facts.mjs`, exposed as `npm run facts`.

- Reads `PROD_MONGODB_URI` from `../server/.env` (sibling directory). **Credentials are
  never printed and never enter a prompt** — the script connects, aggregates, and writes
  only the resulting numbers.
- The Mongo MCP connection available in-session points at the HireQuotient cluster, which
  has no SubhSandesh data. It must not be used for this.
- Target DB: `gifts` on `gift-cluster`.
- Read-only. Aggregations only, no writes.

Facts collected:

| Fact | Source |
|---|---|
| Total pages created, and per-month trend | `countDocuments` across the ~50 `*Page` collections, grouped by `createdAt` month |
| Most popular occasion and its share | Relative doc counts per page-type collection |
| Most-used templates | `Template` + per-collection counts |
| Median time from first edit to publish | `createdAt` → `publishedAt`/`updatedAt` delta |
| Mobile share of creators | `PageView` user-agent / device field |
| Registered users | `User` |
| Views on published pages | `PageView`, `PlatformAnalytics` |

Output: `content/facts.md`, every line carrying its measured date, committed to git.
Re-running overwrites it. If a collection or field is missing, the script omits that fact
rather than guessing — a missing fact is better than a wrong one.

---

## Component 2 — On-disk batch format

```
blog-automation/content/
├── facts.md
└── batches/
    └── 2026-08-12-diwali/
        ├── batch.json
        ├── blogs/
        │   └── diwali-gift-ideas-for-parents.json
        └── research/
            └── diwali-gift-ideas-for-parents.md
```

`batch.json`:

```json
{
  "kind": "blog-automation/batch",
  "version": 1,
  "id": "2026-08-12-diwali",
  "name": "Diwali cluster",
  "createdAt": "2026-08-12T10:00:00.000Z",
  "branch": "batch/2026-08-12-diwali",
  "keywords": ["diwali gift ideas for parents", "..."],
  "blogs": ["diwali-gift-ideas-for-parents", "..."]
}
```

`blogs/<slug>.json`:

```json
{
  "kind": "blog-automation/batch-blog",
  "version": 1,
  "article": { "…exactly the existing GeneratedArticle shape…" },
  "batchMeta": {
    "keyword": "diwali gift ideas for parents",
    "angle": "This post wins by being the only one that …",
    "categorySlug": "festivals",
    "templateUrls": ["/holi", "/templates"],
    "factsUsed": ["41,208 pages created since Jan 2025 — measured 2026-08-12"],
    "sources": [{ "url": "…", "stat": "…", "publishedDate": "2025-11-02" }],
    "auditReport": {
      "passed": ["Direct answer in first 150 words", "…"],
      "failed": [{ "item": "3–6 outbound links", "why": "only 2 verified" }],
      "honestAssessment": "…"
    },
    "generatedAt": "2026-08-12T10:04:00.000Z"
  }
}
```

`article` deliberately reuses the existing `GeneratedArticle` interface so
`toStrapiData()` in `app/api/strapi/route.ts` works **unchanged**. `batchMeta` is
additive and never reaches Strapi.

`research/<slug>.md` holds the Phase 1–3 brief: the competitor comparison table, the gap
analysis, and the verified sources. It is an audit trail for the user, not shipped
content, and is not read by the app.

---

## Component 3 — The Batches section

### New types (`app/lib/types.ts`)

```ts
export interface BatchBlogFile {
  kind: "blog-automation/batch-blog";
  version: 1;
  article: GeneratedArticle;
  batchMeta: BatchMeta;
}

export interface BatchMeta {
  keyword: string;
  angle: string;
  categorySlug?: string;
  templateUrls?: string[];
  factsUsed: string[];
  sources: { url: string; stat: string; publishedDate?: string }[];
  auditReport: {
    passed: string[];
    failed: { item: string; why: string }[];
    honestAssessment: string;
  };
  generatedAt: string;
}

export interface BatchManifest {
  kind: "blog-automation/batch";
  version: 1;
  id: string;
  name: string;
  createdAt: string;
  branch?: string;
  keywords: string[];
  blogs: string[];
}

/** A batch plus its fully-loaded blogs, as served by GET /api/batches. */
export interface BatchWithBlogs extends BatchManifest {
  loaded: BatchBlogFile[];
}
```

`View` in `app/components/Sidebar.tsx` gains `"batches"`.

### Server routes

**`GET /api/batches`** — lists every batch (manifest only, for the cards grid).
**`GET /api/batches?id=<batchId>`** — one batch with all its blogs loaded.

Reads `content/batches/**` with `fs/promises` at request time. Because Vercel's serverless
bundler only includes statically-analysable files, `next.config.ts` must declare:

```ts
outputFileTracingIncludes: {
  "/api/batches": ["./content/**"],
}
```

Malformed or missing JSON is skipped with a warning rather than failing the whole
response, so one bad file can't hide an entire batch.

**`GET /api/strapi/slugs?strapiUrl=…`** (token via `x-strapi-token`) — pages through
`/api/articles?fields[0]=slug` and returns `{ slugs: string[] }`. This is the lock.
Requests **both** draft and published states, so a post that exists as a draft still
counts as taken and can't be created twice.

### UI

Sidebar gains a third project-scoped nav item — `Batches` (📦) — next to Generate and
Library, badged with the count of unpublished batch blogs.

`app/components/BatchesScreen.tsx`:

- **Batch list** — one card per batch: name, date, keyword count, `n published / m total`,
  branch name.
- **Batch detail** — a table of blogs with checkboxes. Columns: Title, Slug, Words,
  FAQs, Category, Templates, **Audit** (✓ or ⚠ with failed count), Status.
- A blog whose slug is in the Strapi slug set renders as **Published** with its checkbox
  **disabled** — the hard lock.
- Toolbar: author select (batch-level), status filter, `Publish selected (n)`.
- Clicking a row opens the existing `BlogViewer`, which already has Article / FAQs /
  Schema / SEO tabs. A new **Audit** tab is added showing pass/fail items, the honest
  assessment, the facts used, and the verified sources. `BlogViewer` takes an optional
  `batchMeta` prop so the tab only appears for batch blogs and the Library keeps working
  unchanged.

### Publish flow

For each selected blog, sequentially (never parallel — Strapi slug-conflict retry logic
depends on ordering):

1. Resolve `batchMeta.categorySlug` → category `documentId`, and each
   `batchMeta.templateUrls` entry → template `documentId`, from the taxonomy the app
   already fetches via `GET /api/strapi`. Unmatched values are reported in the row, not
   silently dropped.
2. Call the existing `publishArticle()` → `POST /api/strapi` → `POST /api/articles/automation`.
   Live instantly; the `entry.publish` event fires the `nextjs-revalidate` webhook.
3. On success, ensure a `Project` record exists with id `batch:<batchId>` (name = batch
   name, `type: "batch"`), then `saveBlog()` a `StoredBlog` with
   `id = batch:<batchId>::<slug>`, `rowId = <slug>`. Batch blogs then appear in the
   existing Library view for free.
4. Flip the row to Published and disable its checkbox.

Failures show the Strapi error inline on the row and stay retryable. One failure does not
abort the remaining selections.

---

## Component 4 — Batch run procedure

What happens when the user hands over keywords:

1. `npm run facts` → refresh `content/facts.md`. Gate on ≥3 relevant facts.
2. Parse keywords (xlsx / csv / pasted list). Existing `parseWorkbook()` handles sheets.
3. `git checkout -b batch/<YYYY-MM-DD>-<slug>` in `blog-automation`.
4. Fan out one subagent per keyword (≤6 concurrent), each running Phases 1–7.
5. Write `batch.json`; commit; push.
6. Report a table: slug, word count, FAQ count, chosen category/templates, audit
   failures, and the one-line honest assessment per post.
7. User opens the Vercel preview for that branch → Batches → reviews → ticks → publishes.
8. Merge the branch to `main` once satisfied.

Subsequent keywords create a new branch and a new batch folder. Previous batches stay
visible, and already-published posts stay locked.

---

## Risks

**Vercel must reach Strapi.** `/api/strapi` runs server-side on Vercel, so Vercel's
servers — not the browser — must reach the Strapi instance on EC2. If Strapi is
HTTP-only, IP-allowlisted, or behind a security group that excludes Vercel, publishing
will fail from the deployment while working on localhost. **Verify before the first real
batch.** Mixed content (an `https` Vercel page is fine here since the call is server-side,
but `NEXT_PUBLIC_*` client calls to `http://` Strapi would be blocked).

**Repo growth.** Roughly 20 KB per blog. A 4-keyword batch is ~80 KB; even 20 batches
stays under 2 MB. Acceptable. `research/*.md` adds a similar amount and could be moved
out later if it ever matters.

**Preview URL sprawl.** Each batch branch gets its own preview URL, and the Strapi token
lives in that origin's `localStorage` — so the token must be re-entered per preview
domain. Publishing from the production deployment after merge avoids this. Documented in
the README; not worth engineering around yet.

**Next.js 16.** `AGENTS.md` warns this version has breaking changes from training data.
Route handler and `next.config` APIs must be checked against
`node_modules/next/dist/docs/` before writing code.

---

## Testing

- `collect-facts.mjs` against the live DB: assert it writes ≥3 dated facts and prints no
  credentials.
- `GET /api/batches` with a hand-written fixture batch: correct listing, and a
  deliberately malformed blog JSON is skipped rather than fatal.
- `GET /api/strapi/slugs`: returns published *and* draft slugs; paginates past 100.
- Lock: publish one blog, reload, confirm its checkbox is disabled and a second publish
  attempt is impossible.
- Taxonomy resolution: a `categorySlug` with no Strapi match surfaces a visible warning
  instead of publishing with no category.
- End-to-end on localhost first, then from the Vercel deployment.
