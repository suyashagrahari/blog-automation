# Research brief — `anniversary gift for boyfriend 2 years`

- **Slug:** `anniversary-gift-for-boyfriend-2-years` (checked against Strapi 2026-09-03: `filters[slug][$eq]` returned `total: 0` — free)
- **Category:** `digital-gifts-romance` (confirmed live in `/api/categories`)
- **Templates:** `/love-gf`, `/darling` (+ `/missyou-gf` linked in body, no count attached)
- **Batch:** `2026-09-03-gift-bf`

---

## Phase 1 — SERP

The SERP was **already measured** on real Google (`gl=in&hl=en`) on 2026-09-03 and is
recorded in `content/keywords/2026-09-03-gift-gf-bf/serps.md`, row 6. It was not
re-derived.

| Field | Measured value |
|---|---|
| Weak / parsed hosts | **5 / 7** |
| AI Overview | **Fired** |
| Weak hosts | `pinterest.com`, `amazon.in`, `etsy.com`, `reddit.com`, `oyehappy.com` |
| Strong hosts | `theknot.com`, `confettigifts.in` |
| Harvest volume | 13x — the highest rung of the year-ladder (1 yr 12x, 2 yr 13x, 3 yr 9x, 4 yr 8x, 5 yr 9x, 6 yr 3x, 10 yr 4x) |

**Two of the seven are competitors under `references/competitors.md`:** `oyehappy.com`
and `confettigifts.in`. Neither is cited, linked or paraphrased. `confettigifts.in` is
the instructive one — an Indian gifting retailer ranking on blog URLs — and it was
deliberately not used as a structural model.

**Honest limitation on the page-level read.** All five weak hosts plus `theknot.com`
returned **HTTP 403 to automated fetches** during this run (`theknot.com/content/...`
403 on three URL patterns; `reddit.com/search.json` 403). `WebSearch` quota is
exhausted and `WebFetch` is blocked in this environment. So there is **no
line-by-line word-count/heading table for the top 5** in this brief. What the
characterisation rests on instead is (a) the measured host list, (b) the batch
brief's cluster-wide measurement that `pinterest` + `reddit` + `quora` hold ~24% of
page-1 organic slots in this cluster, and (c) the host types themselves — a
marketplace listing (`amazon.in`, `etsy.com`), two UGC boards (`pinterest.com`,
`reddit.com`) and two retailer blogs publish neither primary etiquette history nor
first-party product data. This is recorded as a failure-adjacent caveat in
`honestAssessment` rather than papered over.

---

## Phase 2 — Gap analysis and fan-out

### Table stakes (present in every page of this shape)
- A numbered list of gift ideas
- Something addressing "what do boys actually like"
- Some acknowledgement of the year count in the title

### The gap
**Nobody explains what two years is supposed to mean.** Every ranking result treats
"2 years" as a filter on a product list. The searcher's actual question — *is this
year supposed to be different from last year, and how?* — goes unanswered. And the
thing people half-remember (that anniversaries have traditional materials) turns out
to be verifiably absent at year two, which no ranking page says.

### Fan-out sub-queries → H2s

| Sub-query | H2 |
|---|---|
| What does a 2-year gift have to do that a 1-year gift didn't? | `## What a two-year anniversary gift actually has to do` |
| What is the traditional 2nd anniversary gift? | `## No tradition tells you what two years means` |
| Is two years a real milestone? | `## What changes between year one and year two` |
| What should I actually put in it? | `## Five things to build into a two-year anniversary gift` (5 H3s) |
| How does this change at 3, 4, 5, 10 years? | `## What the gift has to prove at 1, 2, 4, 5 and 10 years` |
| Which format/page should I use? | `## Which SubhSandesh page fits a two-year anniversary` |
| When is a digital page a bad idea? | `## When a shared page is the wrong two-year gift` |

Secondary keywords served inside the post: `anniversary gift for boyfriend 4 years`,
`anniversary gift for boyfriend`, `anniversary gift for boyfriend 10 years`,
`anniversary gift for boyfriend of 5 years`, `anniversary gift for boyfriend of 2 years`.
The H1 and `metaTitle` remain about two years.

### Angle
> Wins by being the only post that shows the two-year mark has no tradition behind it
> at all — Emily Post's 1922 list runs paper at one year then jumps to wood at five —
> and then answers the year-ladder question from 1 to 10 years using SubhSandesh's own
> 7.2-hour median build gap on 1,001 `/love-gf` pages.

### Distinctness from the sibling post
`anniversary-gift-for-boyfriend-unique` is about uniqueness as a selection criterion.
This post is about the specific two-year mark and the year ladder; the word "unique"
is not used as a frame. The post does **not** open with "why a digital gift beats a
physical one", and its comparison table is the year ladder — specific to this keyword.

---

## The question the brief asked me to answer

> *Check whether a traditional-gift-material convention actually names a
> second-anniversary material.*

**Answer: not in the canonical list, and where one exists it is a twentieth-century
American commercial addition — not a tradition, and not Indian.**

Verified against the primary text. Emily Post, *Etiquette* (1922), full text at
Project Gutenberg (`pg14314.txt`), section `=WEDDING ANNIVERSARIES=`:

> 1 year, paper / 5 years, wood / 10 years, tin / 15 years, crystal / 20 years, china
> / 25 years, silver / 50 years, gold / 75 years, diamond

There is **no entry for years two, three or four**. Post also writes that the paper,
wooden and tin presents "are seldom anything but jokes" and that crystal at 15 is "the
earliest that is likely to be taken seriously by the gift-bearers."

Provenance of the year-two material — **re-sourced in the remediation pass to a primary
newspaper, replacing Wikipedia entirely.** Chronicling America's current endpoint is
`https://www.loc.gov/collections/chronicling-america/?q=...&fo=json` (the old
`chroniclingamerica.loc.gov/search/pages/results/` path 404s, which is what defeated the
first run). A full-text search for `"straw wedding" anniversary` returns 11 pages; page 3
of **The Hope Pioneer (Hope, Dakota Territory), 8 June 1883** carries an anniversary
ladder whose OCR reads "anniversaries First papei second straw wedding third ... fourth
leather wedding ... tenth tin wed ... ntyfifth silver wedding ... seventyfifth diamond".
So a **second-year material existed in 1883**, thirty-nine years *before* Post's 1922
list, which omits years two, three and four while keeping paper, tin and diamond. The
post now makes that the claim: the year-two material was not added later, it was
**dropped** from the canonical list.

Verification method, recorded honestly: `www.loc.gov` HTML returns **HTTP 403** (Cloudflare)
both to `fetch` and to a Chromium session, but the **same resource with `&fo=json`
returns 200** and its `description` field is the page's OCR text, which is where the
ladder was read. The linked URL and the fetched URL are the same LOC resource.

Two claims were **dropped** rather than re-sourced, because no openable record of either
was found: the **1937 American National Retail Jeweler Association** list (Chronicling
America full-text for `"retail jewelers" anniversary gift list` 1935–1945 returns 7
pages, none carrying the list; `archive.org` full-text for `"national retail jeweler"`
returns 0; the Google Books API is over its daily quota) and the **South Indian 60th/80th
anniversary** practice (Wikipedia-only). **"Cotton" remains deliberately unasserted.**
The India point in that section is now carried by Bhandari 2017 instead — couples
improvising "in absence of any well-defined template" — which is sourced and on-topic.

---

## Phase 3 — Sources

| # | Source | Subject test | Peer-reviewed | Open access | Verified how |
|---|---|---|---|---|---|
| 1 | Emily Post, *Etiquette* (1922), Project Gutenberg | Pass — it *is* the anniversary-gift convention | No (primary historical text) | Yes, public domain | **Full text fetched** (1.2 MB) and the list read directly |
| 2 | *The Hope Pioneer* (Hope, Dakota Territory), 8 June 1883, p.3, via the Library of Congress | Pass — it *is* a printed second-anniversary convention | No (primary newspaper) | Yes, public domain | **Page OCR fetched** via `loc.gov` `&fo=json` (HTTP 200); HTML view 403s |
| 3 | Park & Yi, "The Gift of Choice? How Offering Options Can Undermine Recipient Appreciation", *Psychology & Marketing*, 21 Dec 2024 | Pass — gift appreciation and giver–recipient asymmetry | **Yes** | **Yes** (Unpaywall `is_oa: true`, publisher-hosted) **Rendered publisher page opened in a Chromium session** in the remediation pass — the Cloudflare interstitial clears and the abstract was read verbatim; it states all four cited elements (less thoughtful, reduced appreciation, givers underestimate, less inferred effort, narrows in socially distant relationships). Version of record: 42(5), May 2025, 1219–1232. `fetch` still 403s. |
| 4 | Yang & Urminsky, "Smile-Seeking Givers and Value-Seeking Recipients", SSRN working paper, 2016 | Pass — giver–recipient preference divergence | Working paper (scholarly, not peer-reviewed) | Yes, free to read on SSRN **Rendered SSRN page opened in a Chromium session** in the remediation pass; abstract read verbatim, including the "considerable givers-recipients preference discrepancy" and the Study 6 longitudinal result. SSRN records Date Written 2015, Posted 18 Feb 2016. `fetch` still 403s. |
| 5 | Bhandari, "Pre-marital Relationships and the Family in Modern India", *SAMAJ* 16 (2017) | Pass — Indian pre-marital relationships and how couples classify them | **Yes** | **Yes** (OpenEdition) | **Full text fetched and searched** |
| 6 | Pooja & Bhatia, "Types, Patterns of Romantic Relationships and Dating Delays among Urban Indian Emerging Adults", *Space and Culture, India* 13(4), 27 Mar 2026 | Pass — romantic relationship patterns among Indian emerging adults | **Yes** | **Yes** (CC BY 4.0) | Landing page + abstract + reference list fetched. **PDF full text not read.** |

**Zero** Wikipedia links in the body after remediation — the provenance claim moved to
the 1883 LOC newspaper page (source #2 below), so Wikipedia now appears only as `sameAs`
identifiers in `about`/`mentions`, which is what checklist item 44 requires.
**Zero** generic context statistics. **Zero** competitor citations.

### What each source is load-bearing for

- **(1)** No second-year entry in the canonical list; the "seldom anything but jokes"
  and "earliest that is likely to be taken seriously" quotations.
- **(2)** Recipients rated gifts that let them choose an attribute as **less
  thoughtful** and appreciated them less because they **inferred less giver effort**;
  **givers underestimated** the penalty; the disagreement **narrowed** in socially
  distant relationships (so it is widest between close partners). This is the
  *narrower, verified* version of the brief's "givers mispredict what recipients want".
- **(3)** A considerable givers–recipients preference discrepancy not explained by
  perspective-taking; in a **longitudinal field survey** givers derived more enjoyment
  from recipients' **initial affective reactions** than from recipients' **long-term
  satisfaction**.
- **(4)** 100 in-depth interviews with men and women aged 24–31 in New Delhi plus about
  25 parents; middle-class Indian youth sort relationships by **seriousness, not
  duration** ("dating" = a longer period together without necessarily any commitment to
  marriage; "serious"/"long-term" = intended to become a marriage), improvising "in
  absence of any well-defined template".
- **(5)** N=510 unmarried urban Indian emerging adults aged 18–25 (221 male, 289
  female), typed by **pattern** (first vs latest relationship) rather than by duration.

### Uniqueness / cap check (run against the sibling files present at write time)

- None of the six URLs appears in the spent list in `USED-SOURCES.md` (re-checked after
  the remediation pass; `loc.gov` appears there zero times).
- No URL collides with any sibling in `content/batches/2026-09-03-gift-bf/blogs/`.
- Domain counts inside this batch after remediation: `gutenberg.org` 1, `www.loc.gov` 1,
  `onlinelibrary.wiley.com` 2, `ssrn.com` 1, `journals.openedition.org` 1,
  `spaceandculture.in` 1 — all ≤ 3. `pmc.ncbi.nlm.nih.gov` (3/3) and
  `nature.com/articles/s41599-025-06093-z` (2/2) are at their caps and were **not** touched.
  `npm run` equivalent `node scripts/verify-batch.mjs content/batches/2026-09-03-gift-bf`
  reports "no problems".
- The Wiley citation was moved off `doi.org` to the publisher URL because `doi.org`
  had already reached 3 hostname appearances inside this batch.
- Siblings had already taken `journals.plos.org` and `frontiersin.org` (the latter at 2
  of its 3-post in-batch cap); neither is used here.
- Corpus-wide freshness: `gutenberg.org` 1 prior post (different URL), `ssrn.com`
  unused, `openedition.org` effectively unused (one unrelated URL),
  `spaceandculture.in` 3 prior posts (all different URLs).

### On the brief's claim I was told to verify

> *"That 'givers mispredict what recipients want' is a real, replicated finding."*

**Not confirmed as a general law. The post writes the narrower, instance-scoped thing,
and says so on the page.** The coordinator has since circulated the same correction
after a sibling writer found it: the canonical papers (Gino & Flynn 2011; Galak, Givi &
Williams 2016; Yang & Urminsky 2018) are heavily cited but Unpaywall reports all three
`is_oa: false`, so they cannot be opened, cannot be verified here, and would fail
`research-sources.md`'s open-access requirement anyway. The openable literature frames
these divergences **case by case** — the 2024 *Psychology & Marketing* paper presents
its result as one instance in which givers' and recipients' preferences diverge, not as
a principle. The body therefore says the effort judgement holds "in the specific cases
that have been tested, not as a general law", and adds outright that the two studies
"report a single case each, not one universal rule about what boyfriends want."

Two independent
publisher-registered abstracts state a giver–recipient divergence: Park & Yi (2024)
find givers underestimate how badly offering choices reads, and Yang & Urminsky (2016)
find a "considerable givers-recipients preference discrepancy" plus a longitudinal
result that givers are rewarded by the *initial* reaction rather than long-term
satisfaction. What I could **not** verify this run is the strong general claim that
givers mispredict *what recipients want* across gift types — the classic references
for that (Galak/Givi/Williams 2016, Flynn & Adams 2009, and the two HBS working papers)
are either paywalled (`is_oa: false` per Unpaywall) or already spent in
`USED-SOURCES.md`. The post therefore claims only what the two abstracts say: that
recipients read gifts for **effort**, and that givers **mis-forecast that specific
judgement**. Search terms tried: `gift givers recipients asymmetric valuation
appreciation`, `perceived effort gift exchange appreciation`, `gift givers overestimate
recipients preferences misprediction`, `givers and receivers divergent evaluations
gifts experiment`, `thoughtfulness gift appreciation recipient perspective`,
`sentimental value gifts recipients givers`, plus title searches for the three canonical
papers. OpenAlex and Semantic Scholar both rate-limited (HTTP 429) mid-run; Crossref +
Unpaywall carried the search.

A price-based source (Frontiers in Psychology 2022, on giver/receiver divergence over
gift pricing) was found and **deliberately rejected**: the Pricing block in `facts.md`
is empty, so the post states no price, cost or "free" claim anywhere, and a
price-framed citation would have dragged the vocabulary in. `grep` for
`price|cost|free|₹|tier|expensive|cheap` over `contentMarkdown` returns nothing.

---

## Phase 4/5 — Build notes

- **1,793 words** in `contentMarkdown` by plain whitespace split, FAQs excluded (1,775 before
  the remediation pass; 1,786 on `wordCount()` in `app/lib/batches.ts`, which the studio shows).
- **10 FAQs**, in `article.faqs` only. No FAQ restates an H2's meaning; none appears in
  the body. No `FAQPage` block was emitted — `structured-data.md` is explicit that the
  renderer builds it from `article.faqs`, and checklist item 42 permits only an
  `@id`-matched block on `<canonicalURL>#post`.
- **First-party facts:** 7 quoted byte-verbatim into `factsUsed`; the primary one is the
  **7.2-hour median first-save-to-last-edit gap**, chosen deliberately to differ from
  the neighbours' likely lead fact. It is stated **with its sampling caveat every time
  it appears** (`/love-gf` only, n=1,001, not site-wide).
- **Two first-party numbers inside the first 150 words:** the 7.2-hour gap and the
  1,001 `/love-gf` pages / 29.2% of 3,425.
- **No claim about recipient gender.** The post says outright that the database records
  what was built, never who received it, and tells the reader to read the counts as
  format popularity rather than evidence about boyfriends.
- **`/missyou-gf`** appears in the format table with "Not published" in both numeric
  columns, and the body says why — it is not among the top five page types, so
  `facts.md` carries no count for it.
- **Two tables.** The keyword-specific one is the year ladder (5 rows: 1, 2, 4, 5, 10
  years) which serves the secondary keywords; the second is a 3-row format table whose
  numeric columns are first-party (`/love-gf` 1,001 / 29.2%, `/darling` 349 / 10.2%).
- **Downside section:** `## When a shared page is the wrong two-year gift` — same-city
  handover beats a link, 50.2% phone-share means a locked-down desktop or a dead
  connection makes a printed letter better, and a celebration page is the wrong
  instrument when the two years contain something unresolved.
- **Internal links (3):** `/love-gf`, `/darling`, `/missyou-gf`, all in the format
  table after the reason to want one is established; none in the opening paragraph.
  `batchMeta.templateUrls` = `["/love-gf", "/darling"]`.
- **`structuredData`:** an `@id`-matched enrichment block on `#post` carrying `about`
  (Anniversary, Q1062856), `mentions` (Wedding anniversary Q1136848, Emily Post
  Q2915964, Gift Q184303 — all verified against the MediaWiki API this run, none
  `missing`) and `citation` mirroring `batchMeta.sources` one-to-one; plus an
  `ItemList` mirroring the five H3s in order. No `AggregateRating`, `Review` or `HowTo`.

## Phase 6 — audit

`passed` = 46, `failed` = 4 at write time. **After the remediation pass: `passed` = 48,
`failed` = 2, `48 + 2 = 50`, `passed ∩ failed = ∅`**, with every item string extracted
programmatically from `publish-checklist.md` (wrapped items collapsed on whitespace) and
compared byte-for-byte — no item is missing, extra or duplicated.

**Closed in remediation.** (a) *Wikipedia links: 0–2, entities only* — the body now has
zero Wikipedia links; the convention is sourced to the 1883 LOC newspaper page and the
two unsourceable Wikipedia-only claims (1937 jewellers' list, South Indian 60th/80th)
were dropped, along with the "added later, and by shops" framing in `keyTakeaways`.
(b) *3–6 outbound links, all fetched and verified* — Wiley and SSRN were opened in a
Chromium session and their abstracts read verbatim; the LOC page was read as OCR through
its own JSON view. Six outbound links, all six verified against the cited fact, and the
six match `batchMeta.sources` and the `citation` array one-to-one.

**Left failed, deliberately.** Paragraph length (unsatisfiable for any post built to
`page-structure.md` — its Block 1 answer paragraph and Block 3 four-field H3s are
longer than three sentences by construction; closing it means changing that reference,
not this post) and the swap test (the two gift-psychology sources are general; no
open-access study measures gift appreciation against relationship *duration*). Both
`why` strings name the blocker and the re-check trigger.

---

## Phase 8 — remediation pass (2026-09-03)

Run by `blog-audit-remediator`, editing only this brief and the blog JSON.

- **Sourcing.** Added source #2, *The Hope Pioneer*, 8 June 1883, p.3 (Library of
  Congress) — a primary newspaper anniversary ladder naming **straw for the second
  year**. Re-verified Park & Yi and Yang & Urminsky against their rendered publisher
  pages. Body edits: the Wikipedia paragraph in `## No tradition tells you what two
  years means` was replaced; the "Sources" list bullet swapped; `keyTakeaways` 1 and 2
  rewritten; `honestAssessment` rewritten around the 1883-versus-1922 contradiction.
- **Schema.** `batchMeta.sources` and `structuredData[0].citation` both gained the LOC
  entry in the same position, so the one-to-one mirror still holds. No other
  `structuredData` change; the `ItemList` still mirrors the five H3s in order.
- **Constraints re-checked mechanically after editing:** 1,793 words (band 1,500–1,800);
  6 outbound links; 3 internal links, all in `TEMPLATE_LINKS`, `/missyou-gf` still
  "Not published" in both numeric columns; 10 FAQs, none in `contentMarkdown`; all 7
  `factsUsed` byte-verbatim against `content/facts.md` including the
  `— measured 2026-09-03` suffix; zero price/cost/"free"/tier tokens; no claim tying a
  first-party number to recipient gender; `metaTitle` 58 chars, `metaDescription` 159,
  `excerpt` 286.
