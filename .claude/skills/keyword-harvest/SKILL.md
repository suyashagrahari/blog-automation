---
name: keyword-harvest
description: Take a seed keyword plus industry and country, check what the site already ranks for, harvest live geo-targeted autocomplete demand, expand into long-tail queries, harvest the pages that actually rank for each on Google and the domains cited by answer engines, extract the keywords those pages target with a source URL for every single one, then filter and rank the result by expected monthly clicks into a publish-ordered shortlist and a studio-ready Excel sheet. Use this skill whenever the user gives a seed keyword and wants more keywords, asks which keywords they can rank for, asks what is trending, asks what has search volume, asks where their own site already ranks, asks what competitors are ranking on, wants long-tail keyword ideas, mentions keyword research, keyword extraction, competitor keyword analysis, SERP analysis, keyword clustering, striking-distance keywords, GEO or AEO keyword discovery, or wants to know what to write next. Also trigger on bare requests like "give me keywords for X", "extract keywords from competitors", "what long tail keywords should I target", "what should I write before Diwali", or "make me a keyword sheet".
---

# Keyword Harvest

Turn one seed keyword into a ranked, source-attributed keyword set that a specific
site can realistically rank for — in Google **and** in answer engines — ordered by
**expected monthly clicks**, and emitted as an `.xlsx` the Blog Automation studio can
upload directly.

Three principles, in priority order:

1. **The cheapest traffic is a page that already exists.** A published post sitting
   at position 8 needs an edit, not a competitor. Phase 1 finds those before this
   skill spends a single search on a new keyword.
2. **A keyword is only worth having if a page you can actually build could occupy
   that SERP.** Volume is the second-last filter, not the first.
3. **A keyword that lands after the event is worth nothing, whatever it scores.**
   For occasion-linked work, lead time is a blocking gate.

Most keyword lists fail not because the keywords are low-volume but because the SERP
was never checked, the intent never matched, the site's own existing pages were never
looked at, and the publish date never worked backwards from the festival.

## Where this sits in the pipeline

```
keyword-harvest  →  keywords.xlsx  →  subhsandesh-blog  →  content/batches/  →  Batches tab  →  Strapi
   (this skill)      + inventory.csv     (writes posts)      (JSON on disk)      (review)      (live)
        ↑                                                          │
        └──────────  npm run keywords:inventory  ←─────────────────┘
              (what we already wrote — feeds the next run's Phase 1)
```

This skill produces the input. It never writes a blog post. When the shortlist is
agreed, hand the top clusters to **`subhsandesh-blog`**, which runs its own
per-keyword SERP pass before drafting — the two skills do not share research.

## Tools

- **`WebSearch`** for every SERP.
- **`npm run keywords:inventory`** (Phase 1) and **`npm run keywords:suggest`**
  (Phase 2) — deterministic local scripts. Run them; do not reimplement what they do
  by hand, and do not skip them because they look like setup.
- For competitor pages, prefer **`ctx_fetch_and_index`** when the context-mode MCP
  tools are available (raw HTML never enters context, and the indexed pages stay
  searchable across all of Phase 7); fall back to `WebFetch` only when they are not.
  Never fetch a page with `curl`.

Record SERPs to the working file as you go. Forty SERPs held in context is how a run
dies at Phase 7.

## What this skill can and cannot do

State these limits to the user at the start of the first run. Do not discover them
silently mid-run.

**Can do:** read what the site has already published, harvest live India-geo
autocomplete demand with a numeric relevance score, pull live SERPs, find where the
user's own pages currently sit, read competitor pages, extract the keywords each page
*targets*, attribute every extracted keyword to the exact URL it came from, cluster
by SERP overlap, detect the site competing with itself, judge intent and winnability
from real evidence, compute an expected-clicks figure, sequence against a festival
date, and write a studio-uploadable Excel sheet.

**Cannot do:**
- **Return tool-verified search volume or keyword difficulty.** There is no Ahrefs,
  Semrush, or Keyword Planner access. Every volume figure is an inference band and
  must be labelled `EST`. Autocomplete gives **ordinal** demand, not volume — see
  `references/trends-and-volume.md` for what that is worth and how to use it without
  overclaiming. If the user pastes a tool export, layer those real numbers in and
  label them `TOOL`.
- **Return true Google Trends interest-over-time.** `trends.google.com/trending/rss`
  is reachable but returns ten *daily news* breakouts for a country, which is almost
  never relevant to occasion keywords. Real interest-over-time and rising-query data
  needs the user to open Trends themselves; Phase 2 hands them the exact comparison
  lists to paste back.
- **Extract the keywords a page *ranks* for.** That requires a rank-tracking
  database. What a page ranks for and what a page *targets* are different sets. This
  skill extracts targeted keywords — from titles, slugs, headings, meta, anchor
  text, schema, and on-page repetition — and must label them as such. Never present
  targeted keywords as ranking keywords.
- **Know whether a drafted post is live.** `content/batches/` has no publish state;
  that lives in Strapi. Phase 1 gives a URL a published post *would* have, and the
  `site:` check confirms it.
- **Query ChatGPT, Gemini, or Perplexity directly.** Only the available search tools.
  See Phase 5.

---

## Phase 0 — Input gate (blocking)

Collect these before doing anything. Ask for whatever is missing; do not guess.

| Input | Why it matters |
|---|---|
| **Seed keyword** | The starting point |
| **Industry / category** | Determines which axes in Phase 3 are live. Pick the category explicitly and state it back. |
| **Country / market** | SERPs and autocomplete differ by market. India-targeted work needs the language axis; US work usually doesn't. |
| **Asset type** — tool page, blog post, or both | Decides which SERPs are reachable at all. A tool page cannot rank in a SERP of blog posts. |
| **Site authority** — new domain, or what it already ranks for | Sets the winnability threshold in Phase 9 |
| **Language mix** | English only, or local-language and transliterated variants too |
| **Product mechanic** (if a tool) | Feature-modifier keywords come from here and are usually the least contested set |
| **Event date** (if occasion-linked) | **The most important input in this table.** Gate 0 works backwards from it. Get the exact date, not the month. |
| **Search Console export** (optional, high value) | Queries + impressions + position + clicks CSV. This is the only keyword data that is true about *their* site. If it exists, Phase 1 uses it and the run gets dramatically better. |
| **Tool export** (optional) | Any Keyword Planner / Ahrefs / Semrush CSV. Real numbers beat estimates. |

If the seed is a 1-2 word head term, say so and continue anyway — Phases 2 and 3
exist precisely to convert head terms into reachable long-tails.

**For SubhSandesh runs**, the answers are usually: industry = digital greeting /
celebration templates, market = India (`gl=in`), site = `subhsandesh.in` with blog at
`/blog/<slug>`, asset type = both (template pages and blog posts), authority =
low-authority domain, language mix = English + Hinglish + Devanagari + regional,
product mechanic = personalised shareable page with photo, music, password and
countdown. Confirm rather than assume — the market shifts by festival.

**Ask for the Search Console export every time.** Not having it is the single largest
quality gap in this skill's output, and the user can produce it in two minutes.

---

## Phase 1 — Own-site baseline (blocking, run before any search)

The skill's original failure was searching the whole internet while never once
looking at the user's own site. Fix that first.

### 1a. Read what has already been written

```bash
npm run keywords:inventory
```

Writes `content/keywords/site-inventory.csv` and prints three findings:

- **Shortlisted but never drafted** — a backlog with SERP evidence already behind it.
  Check this before generating a single new candidate; a keyword already researched
  and never published beats a fresh one at equal score, because half the work is done.
- **Drafted with no harvest evidence** — posts written on instinct. No SERP was ever
  checked for them, so they are the likeliest underperformers and the best candidates
  for the striking-distance pass in 1c.
- **Own-site keyword collisions** — near-duplicate primary keywords across batches.
  This is the site competing with itself, and Phase 8's clustering cannot catch it
  because Phase 8 only ever sees the new list. Every collision is either a merge or a
  deliberate differentiation, and it needs a decision, not a note.

### 1b. Layer in Search Console, if it exists

If the user supplied the export, join it to the inventory and pull out:

| Segment | Query filter | What to do with it |
|---|---|---|
| **Striking distance** | position 5-20, impressions > 50 | The highest-ROI segment in the entire run. Improve the existing page. No new page, no new keyword. |
| **Impressions, no clicks** | position 1-10, CTR < 1% | Title and meta problem, not a ranking problem. Cheapest fix on the list. |
| **Ranking for something unintended** | query ≠ the page's target keyword | Free intelligence about what the page is actually good at. Sometimes worth re-landing the page on that query. |
| **Already position 1-4** | — | **Cut these keywords from the run entirely.** Writing another page for a query you already own is how cannibalisation starts. |

### 1c. Where do we actually sit? (`site:` pass)

With no Search Console export, this is the fallback — and run it regardless for the
top candidates. For each keyword that survives to Phase 9, and for every keyword in
the 1a inventory:

```
site:subhsandesh.in <keyword>          →  do we have a page aimed at this at all?
<keyword>                              →  does that page appear in the top 20?
```

Record `own_url` and `own_position` for every keyword. `own_position` is one of a
number, or `none`.

### 1d. First-party demand from `content/facts.md`

`content/facts.md` records what this audience actually does: which page types get
created, which get viewed, what share each holds. As of the last regeneration,
`love-gf` was 39.7% of all page views and `apology-dashboard` 19.4% of all pages
created. That is proof of demand no keyword tool can give.

Use it as a **tie-breaker, not a filter**: between two clusters with similar expected
clicks, the one that maps to a template people already use converts better, and the
post can cite first-party numbers, which is what makes it citable by answer engines.
Name the fact you used.

### 1e. Set the action for every keyword

Before Phase 2 begins, every keyword from 1a-1c carries an `action`:

| `action` | When | Cost |
|---|---|---|
| `improve-existing` | own_position 5-20 | Lowest — an edit |
| `retitle-existing` | own_position 1-10 with near-zero CTR | Lowest — two fields |
| `merge-into-existing` | a collision from 1a, or own_position 1-4 | Removes a page |
| `new-page` | own_position `none` | Highest |
| `outreach` | listicles own the SERP (Gate 2) | Different job entirely |
| `skip` | already position 1-4 and healthy | Free |

**Report the `improve-existing` set first in every deliverable, above the new-page
shortlist.** It ranks faster, costs less, and the original version of this skill could
not see it at all.

---

## Phase 2 — Live autocomplete demand harvest

Google will tell you, for a named country, which continuations of a prefix real
people actually type — in popularity order, with a numeric relevance score.

```bash
npm run keywords:suggest -- "<seed>" --geo in --hl en
npm run keywords:suggest -- "<seed>" --geo in --hl hi    # Devanagari phrasings
```

One seed produces 400+ unique India-geo suggestions from ~48 calls. Writes
`autocomplete.csv` (`suggestion, words, prefix_hits, relevance, best_rank,
source_prefixes`), sorted by cross-prefix demand.

**Read the output for four things:**

1. **The 4+ word rows** — these are the Phase 3 candidate pool, generated from live
   data instead of from the model's memory. They go into Phase 3 as a first-class
   input, ahead of anything invented.
2. **Language variants** — the script isolates them. This is Phase 3's language axis,
   populated with the languages people are *actually* typing rather than the ones that
   seemed likely. A rakhi run surfaced hindi, marathi, gujarati, kannada, telugu and
   tamil in that order of demand.
3. **Year modifiers** — every `…2026` / `…2027` phrasing. Cross-reference against the
   SERP in Phase 4: an incumbent still ranking with an old year in its `<title>` is the
   most reliable weakness signal in this niche.
4. **Product-shaped phrasings** — phrases naming the mechanic the user sells. A rakhi
   run surfaced `raksha bandhan wishes link` and `raksha bandhan greetings online
   free`, both describing a shareable personalised page, and neither had appeared in
   any earlier candidate list.

**`prefix_hits` is the column that matters.** A phrase Google returns under nine
different prefixes has broader demand than one that appears only under its own exact
stem, and it beats `relevance` for ranking because relevance is scoped to a single
request.

**Never print a relevance score as a monthly search figure.** It is ordinal demand.
It ranks keywords against each other correctly and says nothing about absolute volume.

**Then ask for real Trends data.** Group the surviving candidates into batches of five
and hand the user the exact lists to paste into `trends.google.com` with `geo=IN` and
the 12-month window. Five at a time is the Trends limit. Ask them back for the
relative-interest numbers and the rising queries. That is a ten-minute task that
produces genuine trend data and genuine relative volume, and no proxy in this skill
substitutes for it. See `references/trends-and-volume.md`.

---

## Phase 3 — Expand into 30-40 long-tails

Start from the Phase 2 autocomplete rows. Only then generate along the nine axes, to
fill gaps autocomplete missed — autocomplete cannot suggest a phrasing nobody has
searched yet, which is exactly where a new product mechanic lives.

State which axes are live for the Phase 0 category and why the others are skipped.

| Axis | What it adds | Generic examples |
|---|---|---|
| **1. Modifier** | qualifiers | free, online, best, without signup, instant |
| **2. Audience** | who it's for | for beginners, for small business, for [relationship], for [role] |
| **3. Format** | the artifact wanted | template, tool, generator, checklist, guide, page, app, link |
| **4. Action** | the verb | make, create, send, download, compare, share |
| **5. Occasion / trigger** | when the need fires | seasonal events, lifecycle moments, deadlines |
| **6. Feature** | product mechanics | with photo, with music, with password, with countdown |
| **7. Language** | local-market variants | **from Phase 2, not from memory** |
| **8. Question** | how people actually ask | "how to…", "what to write in…", "best way to…" |
| **9. Year freshness** | the current and next cycle | `<term> 2026`, `<term> 2027` — and check what year the incumbent's title says |

Axes 1-4 produce transactional queries. Axes 5-7 produce the least contested ground in
most markets. Axis 8 produces the answer-engine set — those go into Phase 5. Axis 9 is
the cheapest win available when incumbents have not refreshed.

**Target 30-40 candidates, 4+ words each.** Drop anything under 4 words: head terms
waste the SERP-checking budget Phase 4 spends per query.

**Drop any candidate the user already owns at position 1-4** (Phase 1). Carry forward
every `improve-existing` keyword — those skip Phases 4-8 and go straight to the
deliverable, because the SERP question for them is already answered.

Show the list to the user before running Phase 4. It is cheap to correct here and
expensive to correct later.

---

## Phase 4 — Google SERP harvest

For each long-tail from Phase 3, run one search and record:

- Top 10 URLs, in order, with page titles
- **Whether `subhsandesh.in` appears anywhere in the top 20, and at what position**
- Whether an AI Overview or featured snippet fired
- Page type of each result — tool, blog, listicle, forum, marketplace, image pack, video
- **The year in each title, where one appears** — the Axis 9 evidence
- Any People Also Ask questions (free additional long-tails — add them to the pool)
- Any "related searches" (same)

**Market locality is not optional.** SERPs served from a US IP are not the SERPs an
Indian searcher sees, and the previous version of this skill shipped a whole rakhi run
on US-served positions without flagging what that cost. Add market qualifiers to the
query where the tool allows it, prefer the India-geo autocomplete set from Phase 2 as
the source of truth on phrasing, and **label every recorded position with the locale it
was served from**. Where a position could not be India-localised, say so in
`serps.md` and discount confidence in that row — do not quietly average it in.

Write each SERP to `serps.md` as you go rather than holding 40 SERPs in context.

**Do not fetch any pages yet.** Fetching is the expensive step and Phase 6 decides what
deserves it.

**On the counting.** 40 queries × 10 results is 400 result-slots, not 400 sites. After
deduplication most niches collapse to 30-60 unique domains, and the same 5-10 domains
appear across most queries. That repetition is the most useful signal in the whole run
— a domain in 25 of 40 SERPs is the topical authority to study. Report unique-domain
count and appearance frequency, never the inflated slot count.

---

## Phase 5 — Answer-engine citation harvest

This is a **separate SERP**, not a second opinion on Google. Google tells you what
ranks. Answer engines tell you what gets cited. Do not merge or average the two — a
domain can own one and be absent from the other, and that gap is often the opportunity.

Take the Axis 8 question-shaped queries from Phase 3 (aim for 10-15). For each:

1. Run it as a search and record which domains are surfaced and, where the tool
   returns a synthesised answer with citations, which domains it cites.
2. **Run the 5 highest-priority queries a second time.** No more. The original spec
   asked for 2-3 runs of every query to filter non-determinism; in practice these
   results are largely cached, so repeated runs mostly burn budget. Two runs on the
   queries that matter is the honest version of that check — and where the two runs
   agree, say so; where they differ, mark the domain low-confidence rather than
   dropping it.
3. Record whether the answer names specific brands or products, and which.

**Do not describe this as ChatGPT, Gemini, or Perplexity data.** It is not. If the user
wants true citation data, give them the query list and ask them to run it and paste the
cited domains back. That is a real 20-minute task producing better data than anything
inferable.

**The finding that matters most here:** answer engines disproportionately cite
third-party roundups and comparison posts over vendor pages. If the citation set is
full of listicles, the strategic move is getting *named in other people's roundups*,
not optimising your own product page. Report this explicitly when the data shows it.

---

## Phase 6 — Deduplicate and set a fetch budget

1. Collapse all URLs from Phases 4 and 5 into a unique-domain list.
2. Rank domains by appearance frequency across queries.
3. Fetch this many pages, in this order:
   - **Every domain appearing in 5+ SERPs** — these define the topical territory
   - **The top 3 ranking URLs for each of the 10 highest-priority long-tails**
   - **Any domain cited by answer engines but absent from Google top 10** — the
     GEO-only players, and the most instructive pages in the set
   - **Any incumbent whose title carries a stale year** — read it and record exactly
     how stale it is; this is the Gate 4 evidence that carries the most weight

**Cap total fetches at ~40 pages.** Beyond that, returns collapse. If the cap is hit,
say which domains were skipped and why.

---

## Phase 7 — Extract targeted keywords, with provenance

For each fetched page, pull the keywords it is built to target:

| Source on page | What it tells you |
|---|---|
| URL slug | The single primary target — the highest-confidence signal on the page |
| `<title>` and meta description | Primary + one or two secondary targets, and the year |
| H1 | Primary target, usually a variant of the slug |
| H2s and H3s | Secondary and long-tail targets, one per section |
| Internal anchor text | What the site thinks its *other* pages target — reveals the full cluster architecture |
| FAQ questions | Question-shaped long-tails, already validated by a competitor |
| Meta keywords, if present | Some smaller sites still ship these; a literal target list |
| Repeated exact phrases in body | Confirms intent, low confidence on its own |
| Schema markup | FAQPage and HowTo blocks name the questions being targeted |
| Last-modified / visible dates | Freshness evidence for Gate 4 |

**Every extracted keyword carries the source URL it came from.** No exceptions. An
unattributed keyword cannot be verified and is worthless in review.

**Label every keyword `TARGETED`, not `RANKING`.** A page targeting a keyword is
evidence of a competitor's bet, not evidence they won it. Cross-reference against Phase
4: if the page targets a keyword *and* appears in that keyword's top 10, upgrade it to
`TARGETED+CONFIRMED` and note the position. That subset is the highest-value output of
the entire run.

Expect roughly 8-20 usable keywords per page. Pages with a heavy internal-linking
architecture yield the most.

---

## Phase 8 — Cluster by SERP overlap, then check against your own site

The step nearly everyone skips, and the one that decides whether the output becomes
pages or a mess.

**8a. Cluster the new list.** Two keywords are **the same keyword** if their top 10
results share **3 or more identical URLs**. Merge them into one cluster with one
primary term. Use the Phase 4 SERP data — the URL lists are already recorded, so this
is comparison, not new searching.

Without this, a 150-keyword list becomes 150 pages, dozens of which compete for the
same SERP. Google picks one and suppresses the rest. Clustering usually collapses a raw
list by 30-50%. **One cluster = one page.** Report the collapse ratio.

**8b. Then cluster the new list against the site's existing pages.** For every
surviving cluster, check its primary keyword against `site-inventory.csv` from Phase 1:

- Token overlap ≥ 0.6 with an existing primary keyword → **not a new page.** It is
  `improve-existing` or `merge-into-existing`. Say which existing slug.
- The cluster's top 10 already contains a `subhsandesh.in` URL → **not a new page.**
  Improve the page that is already there.

8a stops the new keywords cannibalising each other. **8b is the step the original skill
was missing entirely**, and it is the one that stops the site cannibalising itself.
Report both collapse numbers separately.

---

## Phase 9 — Filter through the gates

Apply in order. Each gate runs on what survived the last. Read `references/gates.md`
for the full rubric, edge cases, and scoring detail.

| Gate | Test | Typical kill rate |
|---|---|---|
| **0. Lead time** | Occasion keywords only. Is `event_date − time_to_rank` still in the future? If not, this keyword cannot pay off this cycle. **Do not cut it — bucket it `next-cycle` with its `publish_by` date.** | varies by run date |
| **1. SERP exists** | Does the query return on-topic results? Off-topic, marketplace-only, or Pinterest-only results mean near-zero volume. | ~40% |
| **2. Page-type match** | Does the ranking page type match the asset from Phase 0? A tool page cannot enter a blog SERP. Reclassify or cut. | ~25% |
| **3. Duplicate** | Merged in Phase 8a (against the new list) **and** 8b (against the live site) | — |
| **4. Weakness count** | Count weak results in the top 10: forums, Reddit, Quora, Pinterest, TikTok, marketplaces, off-intent pages, **stale-year titles**, sites near the user's authority. **3+ weak = winnable. 0 weak = cut regardless of volume.** | varies |
| **5. Conversion fit** | When the searcher lands, is their job finished by *reading* or by *doing*? Reading-intent keywords are the classic high-volume trap — they rank, they convert at near-zero. Cut them unless the asset is explicitly a content play. | varies |
| **6. Volume** | Only now. Rank survivors by estimated market volume, banded 1-5 per the table in `references/gates.md`. Volume breaks ties between keywords that already passed 0-5; it never rescues one that failed them. | — |

**Gate 0 is new and it is the one that changes behaviour most.** The 2026-08-13 rakhi
run shipped a shortlist 15 days before the festival, whose own top entries read *"Not
before 28 Aug"* and *"Misses this festival."* Those keywords were correct and
unbuildable at the same time, and nothing in the output said so until the reader got to
the last line of each block. Gate 0 makes that a bucket, not a footnote.

---

## Phase 10 — Score, estimate clicks, rank

Two numbers, and they answer different questions.

**Priority score — "is this a good keyword?"**

```
Priority = winnability (1-5) × intent fit (1-5) × volume band (1-5)
```

**Expected clicks — "how much traffic does this actually get us?"** This is the one
the user asked for, and the original skill never computed it.

```
expected_clicks = volume_midpoint × ctr(target_position) × win_probability
```

Both the band table and the CTR table are in `references/gates.md` under Gate 6 —
**use them verbatim.** A band-to-score mapping invented per run makes two runs
incomparable, which defeats the point of having a consistent output format at all.

Sort into four buckets and be blunt about the boundaries:

- **Own it already (this week)** — the `improve-existing` and `retitle-existing` set
  from Phase 1. Reported first, always. Fastest traffic on the board.
- **Winnable now (8-12 weeks)** — 3+ weak results, intent matches, asset exists or is a
  small build, and `publish_by` is still in the future.
- **Next cycle** — passed everything except Gate 0. Give each one its `publish_by`
  date so the next run starts with a queue instead of a blank page.
- **Do not attempt** — name them explicitly with the reason. Include high-volume terms
  that failed Gate 4 or 5, so the user sees what they are giving up and why it isn't a
  loss.

---

## Phase 11 — Write the artifacts

Everything lands in one run directory:

```
content/keywords/<YYYY-MM-DD>-<seed-slug>/
├── site-baseline.md          Phase 1 — what we own, striking distance, collisions
├── autocomplete.csv          Phase 2 — live geo demand, from the script
├── candidates.md             Phase 3 — the 30-40 long-tails, before any SERP was run
├── serps.md                  Phase 4 + 5 SERP log, written as you go, locale labelled
├── keyword-inventory.csv     every keyword, including the cut ones
├── shortlist.md              the ranked deliverable, with named weaknesses
├── competitor-map.md         domains by frequency, architecture, Google vs AE
└── keywords.xlsx             generated in Phase 12 — the studio upload
```

Read `references/output-templates.md` for the exact structure of each file. Use those
structures verbatim: consistency across runs is what makes output comparable over time,
and comparability is what lets the user see whether their SEO is actually improving.

`keyword-inventory.csv` header, exactly:

```
keyword,cluster_id,source_url,source_domain,evidence_type,intent,page_type_required,est_volume,volume_source,weakness_count,gate_failed,bucket,priority_score,ranking_urls,category,action,own_url,own_position,expected_clicks,trend,peak_window,publish_by,demand_rank
```

The first fifteen are the original spec. The eight after them exist because the
original sheet answered "which keyword" but not "do we already have this", "when must
it ship", or "what is it worth" — which are the three questions a reviewer actually
asks. Field definitions are in `references/output-templates.md`.

**Cap the new-page shortlist at 15.** The CSV holds everything; the shortlist cannot.
A 150-row deliverable with no priority order is a planning artifact, not a plan — it
feels like progress and produces none. The `improve-existing` list is **not** subject
to the cap: it is cheap, it is fast, and there is no reason to ration it.

---

## Phase 12 — Emit the Excel sheet

The studio's **Generate** tab and the `subhsandesh-blog` skill both take a keyword
spreadsheet. Convert the inventory:

```bash
npm run keywords:xlsx -- content/keywords/<run-id>/keyword-inventory.csv
```

Writes `keywords.xlsx` beside the CSV with two sheets:

- **`Keywords`** (first, and the only one the studio reads) — survivors only, sorted by
  **expected clicks descending**, falling back to `priority_score` where clicks are
  absent
- **`All Keywords`** — the full set including everything the gates cut and everything
  bucketed `next-cycle`, with `Gate Failed` and `Publish By` populated

Column mapping — the six studio-mapped headers, then the harvest evidence:

| Sheet column | Comes from |
|---|---|
| `Keyword` | `keyword` |
| `Strategy / Intent Cluster` | `cluster_id` · `intent` |
| `Search Volume Profile` | `est_volume` + `volume_source` — e.g. `200-600/mo EST` |
| `Ranking Difficulty` | `bucket` · `weakness_count` weak in top 10 |
| `Asset Type Blueprint` | `page_type_required` |
| `Functional Core Category` | `category`, or the cluster's primary keyword |
| `Action` | `action` — what to actually do: improve, retitle, merge, new page, outreach |
| `Expected Clicks / mo` | `expected_clicks` — **the sort column** |
| `Our Position` / `Our URL` | `own_position` / `own_url` |
| `Trend` / `Peak Window` / `Publish By` | `trend` / `peak_window` / `publish_by` |
| `Ranking URL 1` / `2` / `3` | `ranking_urls` — **who currently ranks** |
| `Weak Results` | `weakness_count` / 10 |
| `Evidence Type` | `evidence_type` |
| `Source URL` / `Source Domain` | provenance from Phase 7 |
| `Demand Rank` | `demand_rank` — the Phase 2 `prefix_hits` count |
| `Cluster ID`, `Bucket`, `Priority Score`, `Gate Failed` | as extracted |

The first six are the headers `app/lib/excel.ts` maps onto `KeywordRow`. The rest land
in `extra` and survive the studio's own Excel export untouched, so provenance follows
the keyword all the way to the published-articles sheet.

**Do not invent extra columns whose names contain `volume`, `intent`, `difficulty`,
`asset`, `category`, `kd`, or `keyword`.** The studio's header matcher is a substring
match, so such a column is silently swallowed into a mapped field and its data replaces
the real one. `scripts/keywords-to-xlsx.mjs` asserts this at startup and exits rather
than corrupt a mapped column — if it exits, rename the column, do not disable the check.

---

## Phase 13 — Sequence, and say the uncomfortable thing

End every run with, in this order:

1. **This week** — the `improve-existing` and `retitle-existing` set from Phase 1, with
   the current position and the specific edit. This comes first because it is the
   fastest traffic available and it needs no new page.
2. **Publish order** — the first 5 new pages to build, in order, each with its
   `publish_by` date and the reason it comes when it does. If a page cannot make its
   `publish_by`, say that in the same line as the recommendation, not in a footnote.
3. **Next cycle's queue** — everything bucketed `next-cycle`, with dates. This is the
   artifact that makes the next run start ahead instead of from a seed.
4. **The honest read** — how contested the niche is, what the realistic traffic ceiling
   of the winnable set is, whether the SERPs were India-localised or not, and whether
   the seed keyword was the right target at all. If the evidence says the user's
   premise was wrong, say so with the evidence rather than delivering the list they
   asked for and staying quiet.
5. **The feedback loop** — every estimate here is a guess about a SERP the user hasn't
   entered. Search Console impressions from published pages are the only keyword data
   that is true about *their* site. Ask for the export again, name the date to ask
   again if it doesn't exist yet, and note that `npm run keywords:inventory` will show
   next time which of today's shortlist actually got written.
6. **The handoff** — name the 2-4 clusters worth sending to `subhsandesh-blog` first,
   and say plainly that the blog skill's Phase 0 facts gate may still refuse one of
   them. A keyword surviving every gate here is not a promise that a post can be
   written about it today.

---

## Reporting numbers honestly

**Report:** existing pages found, striking-distance keywords found, own-site collisions
found, unique domains, pages fetched, keywords extracted, clusters after 8a, clusters
after 8b, clusters surviving each gate, final shortlist size.

**Do not report** the multiplied slot count (queries × results) as though it were a
count of sites. It inflates the apparent scale of the work and hides the deduplication
that is the actual finding.

An honest summary line:

> 48 posts already drafted → 7 shortlisted-never-written → 4 own-site collisions →
> 433 autocomplete suggestions (geo=IN) → 38 long-tails searched → **47 unique
> domains** → 34 pages fetched → 411 keywords extracted → **156 clusters** after 8a →
> **149** after 8b → 61 survived the gates → 12 next-cycle → **15 shortlisted**,
> 6 improve-existing.

The collapse from 411 to 15 is not a failure of the run. It is the run working.

---

## What this skill will not do

- Search the internet before looking at the user's own site
- Recommend a new page for a keyword the site already ranks for
- Present a shortlist that cannot ship before the event it is aimed at
- Print an autocomplete relevance score as a monthly search volume
- Claim Google Trends interest data it did not fetch
- Present targeted keywords as ranking keywords
- Give volume or KD figures without an `EST` or `TOOL` label
- Report a SERP position without saying which locale served it
- Claim to have queried ChatGPT, Gemini, or Perplexity when it used available search tools
- Deliver keywords without source URLs
- Skip Phase 8 clustering — either half of it — however long the list is
- Rank keywords by volume before Gates 0-5 have run
- Invent its own band-to-score mapping instead of using the table in `gates.md`
- Produce a long unranked list when a short ranked one is what gets published
- Write the blog posts — that is `subhsandesh-blog`, and it re-researches each keyword itself
