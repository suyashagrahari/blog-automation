# Blog Automation Studio

A local Next.js studio that turns a **keyword Excel sheet** into fully
**SEO + GEO + AEO–optimized** blog articles using **any** LLM (OpenAI / Gemini /
Claude), then **auto-publishes** them to the Strapi blog CMS — one click at a
time or the whole sheet at once.

```
gifts/
├── cms/              Strapi v5 blog CMS (:1337)
└── blog-automation/  THIS — the automation studio (:3000 by default)
```

## Quick start

```bash
cd blog-automation
npm install      # already includes `xlsx`
npm run dev      # open http://localhost:3000
```

> Run the CMS too (`cd ../cms && npm run develop`) so publishing has a target.

## Layout

A left **sidebar** switches between four views:

- **Generate** — upload your keyword sheet, pick rows, write & publish (in-app LLM).
- **Library** — every blog you've generated, stored locally in **IndexedDB**.
  Click a card to read the full article (rendered Markdown), its FAQs, the
  **JSON-LD structured data**, and SEO meta. Delete one, or **Delete all**.
- **Batches** — posts written by **Claude Code** with real SERP research, read
  from committed files. Review the audit, then publish. See
  [Batches](#batches--claude-code-authored-posts).
- **Settings** — API keys + model per provider, and your Strapi connection.

### Two pipelines, deliberately

| | Generate | Batches |
|---|---|---|
| Who writes | In-app LLM call, one prompt | Claude Code, 7-phase skill |
| Research | None | WebSearch + fetches the top 5, gap analysis |
| Sources | Whatever the model recalls | 4–6 fetched and verified, no competitors |
| First-party data | None | Blocking gate: ≥3 facts from `content/facts.md` |
| Where content lives | Browser IndexedDB | Committed JSON in `content/batches/` |
| Speed | Seconds per post | Minutes per post |

Use **Generate** for volume. Use **Batches** when the post actually has to rank.

### Where the keywords come from

Both pipelines start from a keyword sheet, and the sheet itself is produced by a
third skill — **`keyword-harvest`** (`.claude/skills/keyword-harvest/`). Ask Claude
Code for keywords and it runs an 11-phase research pass, then emits an `.xlsx` this
studio can upload directly:

```
seed keyword          "rakhi wishes"
        │
        ├─ 30-40 long-tails along 8 axes
        ├─ one live SERP per long-tail  →  who ranks, page types, PAA, AI Overview
        ├─ a separate answer-engine pass (2-3 runs each, noise dropped)
        ├─ fetch ≤40 competitor pages  →  extract the keywords each one TARGETS
        ├─ cluster by SERP overlap (3+ shared URLs = one keyword)
        ├─ six gates: SERP exists → page type → dupe → weakness → conversion → volume
        └─ score, rank, cap the shortlist at 15
        │
content/keywords/<date>-<seed>/ → keyword-inventory.csv + shortlist.md
                                  + competitor-map.md + keywords.xlsx
        │
   upload keywords.xlsx into Generate,  or hand the top clusters to subhsandesh-blog
```

Convert the inventory to a sheet with:

```bash
npm run keywords:xlsx -- content/keywords/<run-id>/keyword-inventory.csv
```

The workbook has two sheets. **`Keywords`** holds the survivors, sorted by priority
— and it must stay first, because `parseWorkbook` reads `SheetNames[0]` and ignores
the rest. **`All Keywords`** holds everything including the rows the gates cut, with
`Gate Failed` filled in, so a reviewer can see what was rejected and why.

Beyond the six mapped headers, each row carries **`Ranking URL 1-3`** (who currently
holds the SERP), `Weak Results`, `Evidence Type`, `Source URL`, `Cluster ID`,
`Bucket` and `Priority Score`. Those land in `KeywordRow.extra`, so the provenance
survives all the way into the studio's own Excel export.

> One trap worth knowing: `app/lib/excel.ts` matches headers by **substring**, so a
> column named `Volume Source` would be absorbed by the `volume` alias and would
> overwrite Search Volume Profile. `scripts/keywords-to-xlsx.mjs` checks every extra
> column against the alias list at startup and refuses to run on a collision.

What the skill will not do: report volume or difficulty as though a tool supplied it
(every figure is a labelled `EST` band), present *targeted* keywords as *ranking*
keywords, or hand back a keyword without the source URL it was extracted from.

## How to use

1. **Settings** (sidebar → Settings; opens automatically the first time)
   - Paste an API key for **OpenAI**, **Gemini**, and/or **Claude**.
   - Pick a model per provider (or type a custom model id), then click
     **Set active** on the provider you want to write with.
   - Fill in **Strapi URL** + **API Token** (full-access), the **Site URL**
     (for canonical links) and the **blog path prefix** (`/blog`).
   - Toggle **Auto-publish** on to publish straight to Strapi.
   - Everything is saved in your browser's `localStorage` — keys never go
     anywhere except this app's own server routes.

2. **Upload** your keyword `.xlsx` / `.csv`. Expected headers (case/spacing
   tolerant): `Keyword`, `Strategy / Intent Cluster`, `Search Volume Profile`,
   `Ranking Difficulty`, `Asset Type Blueprint`, `Functional Core Category`.
   Extra columns are preserved and re-exported.

3. The sheet renders as a **table**. Tick the keywords you want (or
   **Select all**).

4. Click **Generate Selected** or **Generate All**. Articles are written **one
   by one**; each row shows a live status (`Writing… → Publishing… → Done`).
   On success the row fills in the **slug** and a **cover-image search query**
   you can copy into Strapi / Unsplash.

5. **Export Excel** to download the sheet back with appended columns: `Status`,
   `Publish State`, `Slug`, `Article URL`, `Cover Image Query`, `Meta Title`,
   `Error`.

## What each article gets (mapped 1:1 to the Strapi Article schema)

`title`, `slug`, `excerpt`, `contentMarkdown` (1500–2500 words, answer-first,
with a comparison table), `tags[]`, `keyTakeaways[]` (GEO TL;DR), a full **SEO**
component (`metaTitle ≤70`, `metaDescription ≤170`, `keywords`, `canonicalURL`,
`ogType`, **`structuredData`** JSON-LD) and **≥10 FAQs** (powering FAQPage schema
for AEO). `coverImage`, `author` and `category` are left for you to set in Strapi
(the cover query helps).

### Structured data (JSON-LD) for GEO/AEO

Every article ships a `structuredData` array of schema.org JSON-LD that lands in
the CMS `seo.structuredData` field (no CMS change needed — that field already
exists). It always contains an **Article** block and a **FAQPage** block, and for
how-to intents the model also emits a full **HowTo** block (ordered `HowToStep`s,
`totalTime`, etc.). If the model omits Article/FAQPage, the studio injects them
automatically. View/copy the JSON-LD from the **Library → blog → Structured Data**
tab.

## Auto-publish endpoint (one-time CMS setup)

The studio publishes via a custom CMS endpoint so posts go **live instantly**
(the default Strapi REST create only makes a *draft*). Two files were added to
the CMS:

- `cms/src/api/article/controllers/article.ts` → `createAndPublish` action
- `cms/src/api/article/routes/01-automation.ts` → `POST /api/articles/automation`

**Restart Strapi** once after pulling these (`npm run develop`). Then create a
**full-access API token** in *Strapi → Settings → API Tokens* and paste it into
the studio's Settings.

If the endpoint is missing (CMS not restarted), the studio gracefully falls back
to creating a **draft** — the row is marked `saved as draft` so you can publish
it manually in Strapi.

---

# Batches — Claude-Code-authored posts

The **Generate** flow writes from a single prompt: no web research, no competitor
analysis, no first-party data. That's fine for volume, but an answer engine has no
reason to cite the sixth version of a page that already ranks.

**Batches** is the higher-quality path. Claude Code researches each keyword
properly and writes the post into files that get committed to the repo; this
studio becomes the review-and-publish surface.

## The flow

```
you hand Claude Code 2-4 keywords
        │
        ├─ npm run facts            refresh content/facts.md from Mongo
        ├─ gate: >=3 relevant facts, else it stops and says so
        ├─ git checkout -b batch/2026-08-12-diwali
        ├─ one subagent per keyword (max 6 concurrent), each running:
        │     WebSearch -> fetch top 5 -> gap analysis -> verify 4-6 sources
        │     -> draft -> internal links -> self-audit -> write JSON
        └─ commit + push
        │
   Vercel builds the branch
        │
   you open the deployment -> Batches -> review -> tick -> Publish
        │
   Strapi (live instantly) -> revalidate webhook -> subhsandesh.in/blog
```

## On disk

```
content/
├── facts.md                              first-party numbers, regenerated
└── batches/2026-08-12-diwali/
    ├── batch.json                        manifest + keyword list
    ├── blogs/<slug>.json                 { article, batchMeta }
    └── research/<slug>.md                the SERP + gap + sources brief
```

`article` is the **same** `GeneratedArticle` shape the in-app generator produces,
so publishing reuses `toStrapiData()` untouched. `batchMeta` carries the review
metadata (angle, chosen category/templates, facts cited, verified sources, audit
result) and never reaches Strapi.

These files are **committed** — that's how they reach the Vercel build.
`next.config.ts` force-includes `./content/**/*` in the trace for `/api/batches`,
because Next's bundler can't follow the route's `readFile` calls and would
otherwise ship an empty directory to production.

## First-party facts

```bash
npm run facts
```

Reads `PROD_MONGODB_URI` from `../server/.env` (never printed), runs read-only
aggregations against the `gifts` database, and writes `content/facts.md` with the
measured date on every line — pages created, most popular occasion, view counts,
mobile share, password-protection rate, publish rate.

Anything you write below the `<!-- MANUAL FACTS -->` marker is **preserved** when
you regenerate, so hand-added facts (pricing, support themes) survive.

The skill's Phase 0 blocks drafting until at least 3 facts are relevant to the
keyword, with 2 usable in the first 150 words. That gate is the point of the whole
pipeline — it's the only thing competitors can't copy.

## Reviewing a batch

Each row shows Title, Slug, Words, FAQs, Category, Templates, Audit and Status.

- **Amber FAQ count** — outside the 8–12 target.
- **`⚠ no match: <slug>`** in Category — the skill chose a category slug that
  doesn't exist in Strapi. It will publish with **no** category unless fixed.
- **`⚠ n missing`** in Templates — template paths that aren't in Strapi, so those
  `relatedTemplates` links won't be made.
- **`⚠ n`** in Audit — that many publish-checklist items failed. Click the title
  and open the **Audit** tab to see which, plus the honest assessment of whether
  the post can actually outperform the pages it was researched against.
- A **skipped files** banner means a blog JSON didn't parse. It names the file and
  the reason; nothing is hidden.

Set **Author** once per batch in the toolbar — it applies to every post you
publish from it.

## The published-lock

**A post can only ever be published once, and the lock is Strapi itself.**

On load the studio fetches every existing article slug via
`GET /api/strapi/slugs` (drafts included). Any batch blog whose slug is already
taken renders as **Published** with its checkbox **disabled**.

This is deliberately *not* stored in IndexedDB. You publish from Vercel URLs that
change per branch, so a flag in one browser's IndexedDB would be invisible on the
next deploy and the same post could go out twice. Strapi already enforces slug
uniqueness, so the set of live slugs is the only durable answer. IndexedDB still
gets a copy of each published post, which is how batch posts also appear in
**Library** (grouped under a `batch:` project).

If Strapi is unreachable you get a loud amber banner saying nothing is locked —
fix Settings before publishing, or you risk duplicates.

Publishing runs **one post at a time**, because `/api/strapi` retries slug
collisions by appending `-2`, `-3`… and concurrent calls would race that. One
failure never aborts the rest; failed rows keep a **Retry** button.

## Per-preview Strapi token

Each batch branch gets its own Vercel preview URL, and the Strapi token lives in
that origin's `localStorage` — so you'll re-enter it per preview domain. Merging
to `main` and publishing from the production deployment avoids this.

## Adding a new batch

Just hand Claude Code more keywords. It creates a new branch and a new folder;
previous batches stay visible and already-published posts stay locked.

---

## Notes

- LLM + Strapi calls are proxied through this app's own route handlers
  (`/api/generate`, `/api/strapi`) to avoid browser CORS (Anthropic blocks
  direct browser calls) and keep provider quirks server-side.
- Duplicate slugs are handled automatically (a numeric suffix is appended).
- `npm test` runs the batch-parsing unit tests via Node's built-in test runner
  (`node --test`), no test framework installed.
