# Research brief — `digital gift for best friend`

- **Row:** 18 of `WAVE3-PLAN.json`, tier C, `overlapWithNewRow: 4` (nearest: `digital gift ideas for best friend`)
- **Slug:** `digital-gift-for-best-friend` — checked against Strapi 2026-09-16, 0 matches, free
- **Category:** `digital-gifts-romance` — confirmed present in the live Strapi category list (10 categories)
- **Templates:** `/capsule`, `/rewind`, `/templates` — all present in `TEMPLATE_LINKS` (`app/lib/prompt.ts`), descriptions read before writing
- **Outcome:** WRITTEN (not aborted). Differentiation argued in §3 below.

---

## Phase 0 — first-party data gate

`npm run facts` was **not** re-run: `BRIEF-WAVE3.md` §5 records that today's production-DB
read was denied, so every figure below is cited at its measured date of **2026-09-15**.

Facts relevant to this keyword, and where they land:

| Fact (verbatim from `content/facts.md`) | Where used |
|---|---|
| `Average views per created page: 11.5 — measured 2026-09-15` | First 150 words; question 2; table |
| `Average pages per registered creator: 1.29 — measured 2026-09-15` | First 150 words |
| `3,377 registered creators — measured 2026-09-15` | First 150 words |
| `4,357 personalised pages created since 2026-03-12, across 16 page types — measured 2026-09-15` | First 150 words |
| `94.1% of started pages are actually published and shared (4,098 of 4,357) — measured 2026-09-15` | Comparison table |
| `49.0% of shared pages are opened on a phone (24,493 of 49,968 views) — measured 2026-09-15` | Comparison table |
| `49,968 recorded views of shared pages — measured 2026-09-15` | FAQ on read receipts |
| `Most-viewed template: love-gf — 16,201 views, 32.4% of all page views — measured 2026-09-15` | "Lands badly" section, with the recipient disclosure |

Gate: **PASS** — 8 relevant facts, 4 inside the first 150 words.

Two constraints observed:

1. The `## Pricing (fill in by hand)` block in `facts.md` is **empty**. No price is stated,
   estimated or inferred anywhere in the post; the closing section says so explicitly and
   links `/templates` instead.
2. The database records which **template** was opened, never who received it. The post uses
   the `/love-gf` view figure once and discloses this inline, in body prose, in the same
   sentence — which matters more than usual here because this is a friendship post.

Deliberately **not** used: the 40.6% password figure and the 6.2-hour edit gap. Wave-3
brief §5 records both as worn out across 60 posts, and all four friend siblings lean on the
3.7% / 96.3% occasion split, so that pair was avoided too.

---

## Phase 1 — SERP

Read from `SERPS-WAVE3.md`, `## digital gift for best friend` (ddg-html, region in-en).
No fresh `serp.mjs` call was made — `BRIEF-WAVE3.md` forbids Brave, and the pre-collected
SERP is the wave's intended input.

| # | URL | What it is |
|---|---|---|
| 1 | aiskyla.com | Competitor landing page — virtual gift service |
| 2 | gifft.me | Competitor landing page — virtual gift service |
| 3 | giftfeels.com | Competitor landing page — digital gift links |
| 4 | amazon.in `/best-friend-gifts` search | Retail search results |
| 5 | amazon.in `/personalized-gifts-for-best-friend` search | Retail search results |
| 6 | etsy.com `best_friend_gift_box` market | Retail marketplace |
| 7 | givingli.com | Competitor landing page — gifts and greetings |
| 8 | business.amazon.in gadget-gifts blog | Retail listicle, electronics |
| 9 | dundle.com gift cards | Gift-card reseller |
| 10 | blinkit.com e-cards | Grocery app e-card category |

**Honest read of this SERP: it is retail-dominated and editorially empty.** Six of ten
results are shops or shop searches, four are competitor product pages, and **not one page in
the top ten is an article.** Nothing was fetched, cited or linked — `BRIEF-WAVE3.md` §1 bans
the competitor set, and Amazon/Etsy search pages carry no content to analyse. This is
recorded as a Gate 2 observation rather than a page-by-page competitor table, because there
are no competitor *articles* in this SERP to tabulate.

Four of these ten URLs are shared with `digital gift ideas for best friend` — the reason this
row carried an explicit differentiate-or-abort instruction.

---

## Phase 2 — gap analysis

**Table stakes** (what any page on this query must do): say what a digital gift actually is;
separate it from a digital gift *card*, which owns results 9 and 10; name concrete formats;
address cost; address whether a link is a cop-out.

**The gap.** Every result in this SERP — and every one of the four SubhSandesh siblings —
answers *"what could I send?"*. Nothing answers *"I have decided to send one thing and I am
torn between two; which?"* The keyword itself is singular and definite ("**a** digital gift
for **my** best friend"), and the entire result set answers it in the plural.

**Unanswered questions the SERP raises and drops:** whether a digital gift needs the
recipient to do anything; whether the gesture should land immediately or later; how to tell a
gift that is about the friend from one that performs the giver's effort.

**Fan-out sub-queries → H2s:**

| Sub-query | H2 |
|---|---|
| what makes a digital gift good for a friend | What actually makes a single digital gift land for a best friend |
| does sending a link actually count | The 2025 finding that should change which one you pick |
| digital gift that lasts / long term | Why a gift that pays off in a year is friendship-shaped |
| which format for which friendship | The other time-based format, and when to prefer it |
| how to choose between two gifts | Torn between two? Three questions that settle it |
| compare digital gift formats | The formats side by side |
| what not to send a best friend | What makes a digital gift for a best friend land badly |
| when is a digital gift a bad idea | When to send nothing digital at all |

**Angle.** Wins by being the only post that treats a digital gift for a best friend as a
single-choice decision with a time horizon — arguing the gesture should be unfinished on
purpose, requiring a second moment both of you return to.

---

## Phase 3 — anti-cannibalisation (the binding constraint on this row)

All four siblings were read in full before a word was drafted.

| Sibling | Its lane | Templates | How this post differs |
|---|---|---|---|
| `digital-gift-ideas-for-best-friend` (this wave, on disk) | Eight ideas sorted by friendship type; calibration and the debt problem; Indian friendship calendar | `/searched`, `/nutrition`, `/templates` | Roundup vs single choice. Its closing question is "which of eight?"; this post's is "of the two I have left, which?" |
| `digital-gift-for-long-distance-friend` (this wave, on disk) | Drift after a move; a friendship has no anniversary so the gesture must make one | `/streak`, `/catch`, `/watch` | Distance is the problem there; here distance is never mentioned as the constraint |
| `virtual-gift-for-best-friend` (published) | Seven ideas for a friend in another city; friendship-maintenance framing | `/streak`, `/capsule`, `/photo-puzzle` | It lists `/capsule` as idea 2 of 7. This post makes the delayed payoff the **thesis**, not an entry |
| `long-distance-gift-for-best-friend` (published) | Parcel logistics failure; why a friend page must not read like a love letter | `/streak`, `/searched`, `/nutrition` | Logistics vs decision-making |

**Differentiation sentence.** The four siblings all answer *which format exists*; this post
answers *how to pick one*, and it does so through an argument none of them make — that the
best gift for a best friend is one that is deliberately unfinished on the day it arrives,
because a friendship is long and a gesture with a second appointment in it matches that shape.

**Cross-link.** `digital-gift-ideas-for-best-friend` is linked in the opening block, framed
as "if you want the full range of formats, start there" — placed before the body begins, so
a reader on the wrong page leaves immediately rather than reading a post that will not serve
them. That is the positioning that makes two adjacent pages reinforce instead of compete.

The templates reinforce the split: `/capsule` and `/rewind` are both **time-based**, which is
a genuinely different argument from the joke formats (`/searched`, `/nutrition`,
`/legal-notice`) that the ideas post built its list on.

---

## Phase 4 — sources

`BRIEF-WAVE3.md` §3 was read before any API call. **OpenAlex was not called at all** (dead
for the day, $0 budget). Semantic Scholar and CORE were not called. The route used was the
one the brief recommends: **Crossref → Unpaywall → open-access landing page**, with one
OpenAIRE call as permitted.

API behaviour measured from this sandbox on **2026-09-16**, for the next wave:

- **Crossref — reliable.** ~350 DOIs retrieved across 21 queries, no throttling. Correct
  source for authors and dates.
- **Unpaywall — reliable and the key step.** Filtering `oa_locations` by host *before*
  fetching avoided every blocked publisher. ~60 DOIs resolved without a rate limit.
- **DOAJ — mostly HTTP 502 today.** One query returned results; five returned 502. Its
  relevance ranking was also poor (a two-word query on "future self" returned membrane
  chemistry and swine reproduction). Do not rely on it.
- **OpenAIRE — returned HTTP 200** but with an unusable response shape (titles did not
  parse); it did yield one lead via embedded URLs. One call, as instructed, no retry.
- **Confirmed 403 / bot-challenged today:** `royalsocietypublishing.org`,
  `onlinelibrary.wiley.com`, `papers.ssrn.com`, `lirias.kuleuven.be` (connection refused),
  `urn.nsk.hr` (robot challenge), `figshare.com` and `ore.exeter.ac.uk` (HTTP 202, empty body).
  `kclpure.kcl.ac.uk` returned HTTP 500.

Search terms tried, phenomenon-first per the brief: `friendship longevity investment`,
`shared memory reminiscence bonding`, `future self continuity`, `ritual co-experience`,
`anticipation savoring future event pleasure`, `gift givers recipients preference asymmetry`,
`gift choice giver recipient divergence`, `best friends adolescence friendship quality
stability`, `co-presence shared media watching together`, `nostalgia self-continuity meaning`,
`prospection future thinking wellbeing`, `experiential gift versus material gift`.

**Not found, and worth recording.** The giver/recipient divergence literature is real and
directly relevant (Yang & Urminsky's smile-seeking work; the 2024 *Journal of Retailing*
overpackaging paper; the 2025 *Marketing Letters* gift-exchange-taboo paper) but **every
readable copy sits on a blocked host** — SSRN, Wiley, Elsevier, Springer. Four separate
DOIs were resolved through Unpaywall and none had an open location on a fetchable domain.
That argument is therefore absent from the post rather than cited from memory.

### Sources used — all four verified by opening the landing page

| # | Source | Domain (in-batch count before this post) | Subject test | Read |
|---|---|---|---|---|
| 1 | Wolf & Dotson (2025), *Cyberpsychology* 19(1), DOI 10.5817/CP2025-1-3 | `cyberpsychology.eu` (2 → **3, at cap**) | Mediated shared experience and social bonding | Abstract only |
| 2 | Wängqvist, Allemand, Frisén, Lamb & Hwang (2023), *Current Issues in Personality Psychology*, DOI 10.5114/cipp/156764 | `repository.cam.ac.uk` (1 → 2) | Best friendship quality specifically | Abstract only |
| 3 | Vichiengior, Ackermann & Palmer (2024), *Int. J. of Research in Marketing*, DOI 10.1016/j.ijresmar.2024.06.001 | `centaur.reading.ac.uk` (0 → 1) | Anticipation and delayed consumption | Abstract only |
| 4 | Olbertz-Siitonen, Piirainen-Marsh & Siitonen (2021), *Journal für Medienlinguistik* | `jyx.jyu.fi` (0 → 1) | Co-presence in shared mediated activity | Abstract only |

**All four are abstract-only reads.** PDFs do not parse in this sandbox, and every claim in
the post is restricted to what the abstract states. This is recorded here and in the audit.

**Swap test.** None would sit unchanged in another post in this batch. (1) is load-bearing
only for the argument that a page consumed alone is not a shared experience; (2) is about
best friendships specifically, not friendship generally; (3) only matters to a post arguing
for a delayed payoff; (4) only matters where asymmetric participation is the design question.

**Generic context statistics: zero.** No PIB, TRAI, Census or MEA figure appears.

**Cap check, re-run immediately before writing** (scoped to
`content/batches/2026-09-15-virtual-gift-30/blogs`): cyberpsychology.eu 2, repository.cam.ac.uk 1,
centaur.reading.ac.uk 0, jyx.jyu.fi 0; all four URLs at 0. The cyberpsychology.eu third slot
is flagged in `auditReport.failed` so no later post in this wave attempts a fourth.

---

## Phase 5–7 — output

- Body: 1,735 words (plain split), 1 H1, 9 H2s, 3 H3s
- FAQs: 11, in `article.faqs` only — none restates a body heading, and none duplicates an FAQ
  from any of the four siblings (checked against all four lists)
- Internal links: 3 template links (`/capsule`, `/rewind`, `/templates`) + 1 blog cross-link
- Outbound: 4, each placed at the sentence stating its fact, each fetched and verified
- `structuredData`: `ItemList` mirroring the three H3s in order + an `@id`-matched enrichment
  block on `<canonical>#post` carrying all four citations, `about` (Friendship, Q491) and
  `mentions` (Gift Q184303, Time capsule Q348) — all three QIDs verified against the
  Wikipedia API on 2026-09-16
- Audit: 47 passed / 3 failed, disjoint, 50 items total
