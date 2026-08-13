---
name: keyword-harvest
description: Take a seed keyword plus industry and country, expand it into 30-40 long-tail queries, harvest the pages that actually rank for each on Google and the domains cited by answer engines, extract the keywords those pages target with a source URL for every single one, then filter and rank the result into a publish-ordered shortlist and a studio-ready Excel sheet. Use this skill whenever the user gives a seed keyword and wants more keywords, asks which keywords they can rank for, asks what competitors are ranking on, wants long-tail keyword ideas, mentions keyword research, keyword extraction, competitor keyword analysis, SERP analysis, keyword clustering, GEO or AEO keyword discovery, or wants to know what to write next. Also trigger on bare requests like "give me keywords for X", "extract keywords from competitors", "what long tail keywords should I target", or "make me a keyword sheet".
---

# Keyword Harvest

Turn one seed keyword into a ranked, source-attributed keyword set that a specific
site can realistically rank for — in Google **and** in answer engines — and emit it
as an `.xlsx` the Blog Automation studio can upload directly.

The core principle: **a keyword is only worth having if a page you can actually
build could occupy that SERP.** Volume is the last filter, not the first. Most
keyword lists fail not because the keywords are low-volume but because the SERP was
never checked, the intent never matched, and near-duplicate keywords were never
merged — producing pages that compete with each other and rank for nothing.

## Where this sits in the pipeline

```
keyword-harvest  →  keywords.xlsx  →  subhsandesh-blog  →  content/batches/  →  Batches tab  →  Strapi
   (this skill)      + inventory.csv     (writes posts)      (JSON on disk)      (review)      (live)
```

This skill produces the input. It never writes a blog post. When the shortlist is
agreed, hand the top clusters to **`subhsandesh-blog`**, which runs its own
per-keyword SERP pass before drafting — the two skills do not share research.

## Tools

Use `WebSearch` for every SERP. For fetching competitor pages, prefer
`ctx_fetch_and_index` when the context-mode MCP tools are available (raw HTML never
enters context, and the indexed pages stay searchable across all of Phase 5);
fall back to `WebFetch` only when they are not. Never fetch a page with `curl`.

Record SERPs to the working file as you go. Forty SERPs held in context is how a
run dies at Phase 5.

## What this skill can and cannot do

State these limits to the user at the start of the first run. Do not discover them
silently mid-run.

**Can do:** pull live SERPs, read competitor pages, extract the keywords each page
*targets*, attribute every extracted keyword to the exact URL it came from, cluster
by SERP overlap, judge intent and winnability from real evidence, rank and sequence
the output, and write a studio-uploadable Excel sheet.

**Cannot do:**
- **Return tool-verified search volume or keyword difficulty.** There is no Ahrefs,
  Semrush, or Keyword Planner access. Every volume or KD figure is an inference band
  and must be labelled `EST`. If the user pastes a tool export, layer those real
  numbers in and label them `TOOL`.
- **Extract the keywords a page *ranks* for.** That requires a rank-tracking
  database. What a page ranks for and what a page *targets* are different sets. This
  skill extracts targeted keywords — from titles, slugs, headings, meta, anchor
  text, schema, and on-page repetition — and must label them as such. Never present
  targeted keywords as ranking keywords.
- **Query ChatGPT, Gemini, or Perplexity directly.** Only the available search
  tools. See Phase 3 for how the answer-engine layer is actually run.

---

## Phase 0 — Input gate (blocking)

Collect these before doing anything. Ask for whatever is missing; do not guess.

| Input | Why it matters |
|---|---|
| **Seed keyword** | The starting point |
| **Industry / category** | Determines which axes in Phase 1 are live. Pick the category explicitly and state it back. |
| **Country / market** | SERPs differ by market. India-targeted work needs the language axis; US work usually doesn't. |
| **Asset type** — tool page, blog post, or both | Decides which SERPs are reachable at all. A tool page cannot rank in a SERP of blog posts. |
| **Site authority** — new domain, or what it already ranks for | Sets the winnability threshold in Phase 7 |
| **Language mix** | English only, or local-language and transliterated variants too |
| **Product mechanic** (if a tool) | Feature-modifier keywords come from here and are usually the least contested set |
| **Tool export** (optional) | Any Keyword Planner / Ahrefs / Semrush CSV. Real numbers beat estimates. |

If the seed is a 1-2 word head term, say so and continue anyway — Phase 1 exists
precisely to convert head terms into reachable long-tails.

**For SubhSandesh runs**, the answers are usually: industry = digital greeting /
celebration templates, market = India, asset type = both (template pages and blog
posts), authority = low-authority domain, language mix = English + Hinglish +
Devanagari, product mechanic = personalised shareable page with photo, music,
password and countdown. Confirm rather than assume — the market shifts by festival.

---

## Phase 1 — Expand the seed into 30-40 long-tails

Generate candidates along eight axes. Not every axis is live for every industry —
state which ones apply to the category chosen in Phase 0 and why the others are
skipped.

| Axis | What it adds | Generic examples |
|---|---|---|
| **1. Modifier** | qualifiers | free, online, best, [current year], without signup, instant |
| **2. Audience** | who it's for | for beginners, for small business, for [relationship], for [role] |
| **3. Format** | the artifact wanted | template, tool, generator, checklist, guide, page, app |
| **4. Action** | the verb | make, create, send, download, compare, automate |
| **5. Occasion / trigger** | when the need fires | seasonal events, lifecycle moments, deadlines |
| **6. Feature** | product mechanics | with photo, with API, with export, offline, self-hosted |
| **7. Language** | local-market variants | local script, transliterated, mixed-script |
| **8. Question** | how people actually ask | "how to…", "what to write in…", "best way to…", "is X worth it" |

Axes 1-4 produce transactional queries. Axes 5-7 produce the least contested ground
in most markets. Axis 8 produces the answer-engine set — those go into Phase 3.

**Target 30-40 candidates, 4+ words each.** Drop anything under 4 words: head terms
waste the SERP-checking budget that Phase 2 spends per query.

Show the list to the user before running Phase 2. It is cheap to correct here and
expensive to correct later.

---

## Phase 2 — Google SERP harvest

For each long-tail from Phase 1, run one search and record:

- Top 10 URLs, in order, with page titles
- Whether an AI Overview or featured snippet fired
- Page type of each result — tool, blog, listicle, forum, marketplace, image pack, video
- Any People Also Ask questions (these are free additional long-tails — add them to the pool)
- Any "related searches" (same)

Write each SERP to `serps.md` in the run directory as you go rather than holding 40
SERPs in context.

**Do not fetch any pages yet.** Fetching is the expensive step and Phase 4 decides
what deserves it.

**On the counting.** 40 queries × 10 results is 400 result-slots, not 400 sites.
After deduplication most niches collapse to 30-60 unique domains, and the same 5-10
domains will appear across most queries. That repetition is the most useful signal
in the whole run — a domain appearing in 25 of 40 SERPs is the topical authority to
study. Report unique-domain count and appearance frequency, never the inflated slot
count.

---

## Phase 3 — Answer-engine citation harvest

This is a **separate SERP**, not a second opinion on Google. Google tells you what
ranks. Answer engines tell you what gets cited. Do not merge or average the two — a
domain can own one and be absent from the other, and that gap is often the
opportunity.

Take the Axis 8 question-shaped queries from Phase 1 (aim for 10-15). For each:

1. Run it as a search and record which domains are surfaced and cited in the
   synthesised answer.
2. **Run each query 2-3 times.** Answer-engine retrieval is non-deterministic — a
   domain appearing once may be noise. Count only domains appearing in **2 or more
   runs**. Single-appearance domains go in a "low confidence" column, not the main
   set.
3. Record whether the answer names specific brands or products, and which.

**If the user wants true ChatGPT / Gemini / Perplexity citation data**, this skill
cannot fetch it. Give them the query list and ask them to run it and paste the cited
domains back. That is a real 20-minute task and it produces better data than
anything inferable. Say this plainly rather than substituting a proxy and calling it
ChatGPT data.

**The finding that matters most here:** answer engines disproportionately cite
third-party roundups and comparison posts over vendor pages. If the citation set is
full of listicles, the strategic move is getting *named in other people's roundups*,
not optimising your own product page. Report this explicitly when the data shows it.

---

## Phase 4 — Deduplicate and set a fetch budget

1. Collapse all URLs from Phases 2 and 3 into a unique-domain list.
2. Rank domains by appearance frequency across queries.
3. Fetch this many pages, in this order:
   - **Every domain appearing in 5+ SERPs** — these define the topical territory
   - **The top 3 ranking URLs for each of the 10 highest-priority long-tails**
   - **Any domain cited by answer engines but absent from Google top 10** — these
     are the GEO-only players and the most instructive pages in the set

**Cap total fetches at ~40 pages.** Beyond that, returns collapse: the same keywords
repeat and the run gets slow and expensive for no additional signal. If the cap is
hit, say which domains were skipped and why.

---

## Phase 5 — Extract targeted keywords, with provenance

For each fetched page, pull the keywords it is built to target:

| Source on page | What it tells you |
|---|---|
| URL slug | The single primary target — the highest-confidence signal on the page |
| `<title>` and meta description | Primary + one or two secondary targets |
| H1 | Primary target, usually a variant of the slug |
| H2s and H3s | Secondary and long-tail targets, one per section |
| Internal anchor text | What the site thinks its *other* pages target — reveals the full cluster architecture |
| FAQ questions | Question-shaped long-tails, already validated by a competitor |
| Meta keywords, if present | Some smaller sites still ship these; when present, it is a literal target list |
| Repeated exact phrases in body | Confirms intent, low confidence on its own |
| Schema markup | FAQPage and HowTo blocks name the questions being targeted |

**Every extracted keyword carries the source URL it came from.** No exceptions. An
unattributed keyword cannot be verified and is worthless in review.

**Label every keyword `TARGETED`, not `RANKING`.** A page targeting a keyword is
evidence of a competitor's bet, not evidence they won it. Cross-reference against
Phase 2: if the page targets a keyword *and* appears in that keyword's top 10,
upgrade it to `TARGETED+CONFIRMED` and note the position. That subset is the
highest-value output of the entire run.

Expect roughly 8-20 usable keywords per page. Pages with a heavy internal-linking
architecture yield the most.

---

## Phase 6 — Cluster by SERP overlap

The step nearly everyone skips, and the one that decides whether the output becomes
pages or a mess.

Two keywords are **the same keyword** if their top 10 results share **3 or more
identical URLs**. Merge them into one cluster with one primary term.

Why this is not optional: without it, a 150-keyword list becomes 150 pages, of which
dozens compete against each other for the same SERP. Google picks one and suppresses
the rest. Clustering usually collapses a raw list by 30-50%. **One cluster = one
page.** Report the collapse ratio.

Use the Phase 2 SERP data to do this — the URL lists are already recorded, so this
is comparison, not new searching.

---

## Phase 7 — Filter through the six gates

Apply in order. Each gate runs on what survived the last. Read
`references/gates.md` for the full rubric, edge cases, and scoring detail.

| Gate | Test | Typical kill rate |
|---|---|---|
| **1. SERP exists** | Does the query return on-topic results? Off-topic, marketplace-only, or Pinterest-only results mean near-zero volume. | ~40% |
| **2. Page-type match** | Does the ranking page type match the asset from Phase 0? A tool page cannot enter a blog SERP. Reclassify or cut. | ~25% |
| **3. Duplicate** | Already merged in Phase 6 | — |
| **4. Weakness count** | Count weak results in the top 10: forums, Reddit, Quora, Pinterest, TikTok, marketplaces, off-intent pages, sites near the user's authority. **3+ weak = winnable. 0 weak = cut regardless of volume.** | varies |
| **5. Conversion fit** | When the searcher lands, is their job finished by *reading* or by *doing*? Reading-intent keywords are the classic high-volume trap — they rank, they convert at near-zero. Cut them unless the asset is explicitly a content play. | varies |
| **6. Volume** | Only now. Rank survivors by estimated market volume. Volume breaks ties between keywords that already passed 1-5; it never rescues one that failed them. | — |

---

## Phase 8 — Score and rank

Score each surviving cluster:

```
Priority = winnability (1-5) × intent fit (1-5) × volume band (1-5)
```

- **Winnability** — from Gate 4 weakness count and the authority of the top 10
- **Intent fit** — how directly the searcher's goal maps to the user's asset
- **Volume band** — `EST` unless tool data was supplied

Sort into three buckets and be blunt about the boundaries:

- **Winnable now (8-12 weeks)** — 3+ weak results, intent matches, asset already
  exists or is a small build
- **Medium play (3-9 months)** — needs authority build or new content type
- **Do not attempt** — name them explicitly with the reason. Include high-volume
  terms that failed Gate 4 or 5, so the user can see what they're giving up and why
  it isn't a loss.

---

## Phase 9 — Write the artifacts

Everything lands in one run directory:

```
content/keywords/<YYYY-MM-DD>-<seed-slug>/
├── serps.md                  raw Phase 2 + 3 SERP log, written as you go
├── keyword-inventory.csv     every keyword, including the cut ones
├── shortlist.md              15 clusters, ranked, with named weaknesses
├── competitor-map.md         domains by frequency, architecture, Google vs AE
└── keywords.xlsx             generated in Phase 10 — the studio upload
```

Read `references/output-templates.md` for the exact structure of each file. Use
those structures verbatim: consistency across runs is what makes output comparable
over time, and comparability is what lets the user see whether their SEO is actually
improving.

`keyword-inventory.csv` header, exactly:

```
keyword,cluster_id,source_url,source_domain,evidence_type,intent,page_type_required,est_volume,volume_source,weakness_count,gate_failed,bucket,priority_score
```

Two columns beyond the spec are optional and, when present, flow into the Excel
sheet: `ranking_urls` (top 3 live URLs, pipe-separated, in position order) and
`category` (the functional core category for the studio sheet). Add them — the
ranking URLs are the single most useful thing a reviewer looks at, and without
them the sheet answers "which keyword" but not "who am I beating".

**Hard cap the shortlist at 15.** The CSV can hold everything; the shortlist cannot.
A 150-row deliverable with no priority order is a planning artifact, not a plan — it
feels like progress and produces none. If the user asks for more than 15, give them
the CSV and explain that the constraint is publishing capacity, not keyword supply.

---

## Phase 10 — Emit the Excel sheet

The studio's **Generate** tab and the `subhsandesh-blog` skill both take a keyword
spreadsheet. Convert the inventory:

```bash
npm run keywords:xlsx -- content/keywords/<run-id>/keyword-inventory.csv
```

The script writes `keywords.xlsx` beside the CSV with two sheets:

- **`Keywords`** (first, and the only one the studio reads) — survivors only,
  sorted by `priority_score` descending
- **`All Keywords`** — the full set including everything the gates cut, with the
  `Gate Failed` column populated

Column mapping — the six studio-mapped headers, then the harvest evidence:

| Sheet column | Comes from |
|---|---|
| `Keyword` | `keyword` |
| `Strategy / Intent Cluster` | `cluster_id` · `intent` |
| `Search Volume Profile` | `est_volume` + `volume_source` — e.g. `200-600/mo EST` |
| `Ranking Difficulty` | `bucket` · `weakness_count` weak in top 10 |
| `Asset Type Blueprint` | `page_type_required` |
| `Functional Core Category` | `category`, or the cluster's primary keyword |
| `Ranking URL 1` / `2` / `3` | `ranking_urls` — **who currently ranks** |
| `Weak Results` | `weakness_count` / 10 |
| `Evidence Type` | `evidence_type` |
| `Source URL` / `Source Domain` | provenance from Phase 5 |
| `Cluster ID`, `Bucket`, `Priority Score`, `Gate Failed` | as extracted |

The first six are the headers `app/lib/excel.ts` maps onto `KeywordRow`. The rest
land in `extra` and survive the studio's own Excel export untouched, so the
provenance follows the keyword all the way to the published-articles sheet.

**Do not invent extra columns whose names contain `volume`, `intent`, `difficulty`,
`asset`, `category`, `kd`, or `keyword`.** The studio's header matcher is a
substring match, so such a column is silently swallowed into a mapped field and its
data replaces the real one.

---

## Phase 11 — Sequence, and say the uncomfortable thing

End every run with:

1. **Publish order** — the first 5 pages to build, in order, with the reason each
   comes when it does.
2. **The honest read** — how contested the niche is, what the realistic traffic
   ceiling of the winnable set is, and whether the seed keyword was the right target
   at all. If the evidence says the user's premise was wrong, say so with the
   evidence rather than delivering the list they asked for and staying quiet.
3. **The feedback loop** — every estimate in this output is a guess about a SERP the
   user hasn't entered. Search Console impressions from published pages are the only
   keyword data that is true about *their* site. The next run should start from that
   data, not from another seed.
4. **The handoff** — name the 2-4 clusters worth sending to `subhsandesh-blog`
   first, and say plainly that the blog skill's Phase 0 facts gate may still refuse
   one of them. A keyword surviving all six gates here is not a promise that a post
   can be written about it today.

---

## Reporting numbers honestly

**Report:** unique domains found, total pages fetched, keywords extracted, clusters
after merge, clusters surviving each gate, final shortlist size.

**Do not report** the multiplied slot count (queries × results) as though it were a
count of sites. It inflates the apparent scale of the work and hides the
deduplication that is the actual finding.

An honest summary line:

> 38 long-tails searched → 380 result slots → **47 unique domains** → 34 pages
> fetched → 411 keywords extracted → **156 clusters** after merge → 61 survived the
> gates → **15 shortlisted**.

The collapse from 411 to 15 is not a failure of the run. It is the run working.

---

## What this skill will not do

- Present targeted keywords as ranking keywords
- Give volume or KD figures without an `EST` or `TOOL` label
- Claim to have queried ChatGPT, Gemini, or Perplexity when it used available search tools
- Deliver keywords without source URLs
- Skip Phase 6 clustering, however long the list is
- Rank keywords by volume before Gates 1-5 have run
- Produce a long unranked list when a short ranked one is what gets published
- Write the blog posts — that is `subhsandesh-blog`, and it re-researches each keyword itself
