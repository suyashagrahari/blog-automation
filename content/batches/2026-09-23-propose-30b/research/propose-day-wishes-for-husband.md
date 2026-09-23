# Research brief — `propose day wishes for husband`

- **Batch:** `2026-09-23-propose-30b` (wave 3, propose/proposal territory)
- **Slug:** `propose-day-wishes-for-husband` — checked 2026-09-23 against
  `https://strapi.subhsandesh.in/api/articles?fields[0]=slug&filters[slug][$eq]=propose-day-wishes-for-husband`
  → `data: []`, free.
- **Secondary keyword, same page:** `propose day quotes for husband`
- **Category:** `modern-romance`
- **Band:** 1,000–3,000 EST. Never printed in the post as a real volume.

---

## Phase 1 — SERP analysis: NOT FRESHLY MEASURED

**This is the honest state of Phase 1 and it is recorded in
`batchMeta.structuralLimitations`.** No SERP was fetched for this keyword. The only
India-served SERPs ever measured in this territory are the 11 captured on
2026-09-16 in `content/keywords/2026-09-16-propose-100/serps.md` and
`competitor-map.md`, and `propose day wishes for husband` is not one of them.

Consequence, applied throughout the draft: **the post describes no incumbent page,
asserts nothing about what competitors do or do not cover, and claims no current
position for anything.** Per the BRIEF's "Do not claim what you did not measure",
the differentiation argument is built only on things that are independently
verifiable — the 2027 calendar, five fetched research abstracts, and SubhSandesh's
own first-party numbers.

Inherited, not re-measured: `subhsandesh.in` did not appear in the top 20 of any of
the 11 propose-territory SERPs measured on 2026-09-16, despite 46 live proposal
articles in a 905-article corpus. That is a 2026-09-16 observation, not a current one.

---

## Cannibalisation check — the wave-2 sibling

**Sibling read in full:**
`content/batches/2026-09-17-propose-30/blogs/propose-day-wishes-for-wife.json`
(1,797 body words, 12 FAQs, templates `/proposal`, `/love-gf`, `/capsule`).

That page already touches husbands: it carries a short H2, *"Propose Day wishes for
husband, and why they read differently"*, with **four** husband lines and the rule
"name what he actually did, then ask". So the differentiator cannot be the pronoun.

| | Wave-2 wife page | This page |
|---|---|---|
| Reader | A husband writing to a wife | A wife writing to a husband |
| Research lane | **Gratitude / marriage maintenance** — gratitude and perceived partner responsiveness, quality time, long-marriage interviews | **Humour, teasing and playfulness in long marriages** — humour styles, playfulness facets, humour as an interpersonal signal |
| Organising principle | **The year you have had** (hard year / ordinary Monday / gone quiet / no-fuss wife) | **How the two of you joke** (jokes back / teases / not funny and knows it / captions / inside joke) |
| Central claim | Specificity — name the thing she did | Register — match the joke to the marriage, and cut it when the joke would be a jab |
| Sources | Sci Rep 2024 (gratitude×responsiveness), Sci Rep 2022 (gratitude field experiment), BMC Psychology 2026 (long-marriage interviews), BMC Psychology 2025 (Tamil DAS), Behav. Sci. 2026 (quality time) | Sci Rep 2024 (playfulness/OLIW), Psychological Reports 2023 (humour-type clusters in 170 married couples), HUMOR 2019 (meta-analysis, sex moderation), HUMOR 2020 (negative humour → relational uncertainty), Evolutionary Psychology 2013 (humour as signal) |
| Source overlap | — | **Zero URLs in common.** `nature.com` recurs as a domain with a **different paper** (`s41598-024-70979-2`, not `s41598-024-71994-z` / `s41598-022-15650-4`), which the BRIEF permits. |
| Alternative template | `/love-gf`, `/capsule` | `/court-of-love` first, `/love-gf` as the plain-register fallback |
| Lines | 20 for a wife + 4 for a husband, gratitude register | 22 for a husband, humour register, none overlapping the sibling's four |

**Deliberate non-overlap of the lines.** The sibling's four husband lines include
*"All these years of your terrible jokes, and the answer is still yes."* — that is the
closest it comes to this lane and it is one line. Every one of the 22 lines here is
newly written and none paraphrases those four.

**Cross-link, not compete:** the post links
`/blog/propose-day-wishes-for-wife` by slug in the objection section rather than
re-covering the gratitude case.

**Verdict: a real difference exists.** Same occasion, opposite direction, and — the
part that matters — a different body of research producing a different grouping.

---

## Phase 2 — Gap and angle

Fan-out sub-queries the page answers:

- What do I write to my husband on Propose Day when he is at work?
- Is it odd for a wife to propose again?
- Can a Propose Day message be funny, or does that ruin it?
- What is a short propose day quote for a husband, for a status or caption?
- When should I *not* send a joke?
- What day is Propose Day 2027?

**The gap this lane opens:** every "wishes" page treats the wish as solemn by
default. The humour literature gives *permission* for a funny wish and — more
usefully — a test for **which couples it suits**, because the same literature is
clear that negative/injurious humour runs the other way.

**Angle (`batchMeta.angle`):** wins by being the only propose day wishes page that
sorts the lines by the couple's humour type, using a cluster analysis of 170 married
couples, and that says when the joke is the wrong instrument — anchored on
SubhSandesh's platform-wide finding that the single most-built template across 20
page types is the apology dashboard, 1,347 of 5,061 pages and 26.6%.

---

## Phase 3 — Sources

Search budget: **0 WebSearch calls used** (budget was 5). All discovery ran through
`findpapers.mjs` (Crossref + Europe PMC). Queries run:
`humour in long term relationships study`,
`playfulness couples relationship satisfaction research`,
`shared laughter couples study`,
`teasing intimacy close relationships research`,
`inside jokes relational identity study`,
`idiosyncratic communication married couples nicknames`,
`humor styles marital satisfaction`,
`affiliative humor romantic partner attraction`,
`sense of humor mate preference long term`,
`personal idioms romantic couples private language`,
`humor long term romantic relationship maintenance`.

`personal idioms romantic couples private language` returned **nothing open-access** —
the couple-idiom literature (Bell & Healey and successors) is not in Europe PMC and
the Crossref hits were unrelated. So the inside-joke group in the body is presented
as a *format* with no research claim attached to it, not as a finding.

**Deliberately excluded:** `Forty years on one pillow` (BMC Psychology 2026,
`10.1186/s40359-026-04135-y`) surfaced under `humor styles marital satisfaction` and
is **already the wave-2 wife page's source**. Not reused.

| # | Source | Passes subject test | Read |
|---|---|---|---|
| 1 | *Extending the study of playfulness in romantic life*, **Scientific Reports**, 2024-08-30, CC BY | Yes — playfulness in couples | Abstract + record via Europe PMC REST API (PMC11364825). `nature.com` returns an IDP redirect/bot challenge from this machine. |
| 2 | *Humor Styles and Marital Satisfaction: Cluster Analysis*, **Psychological Reports**, 2023-01-10 | Yes — married couples, humour | **Abstract only**, via the Crossref works API. `journals.sagepub.com` returns HTTP 403 from this machine. |
| 3 | *Humor production in long-term romantic relationships*, **HUMOR**, 2019-08-27 | Yes — humour in long-term couples | **Abstract only**, via Crossref. `degruyterbrill.com` returns an HTTP 202 challenge. |
| 4 | *Perceived partner humor use and relationship satisfaction*, **HUMOR**, 2020-08-19 | Yes — partner humour, satisfaction | **Abstract only**, via Crossref. Same 202 challenge. |
| 5 | *Laughing at the looking glass: does humor style serve as an interpersonal signal?*, **Evolutionary Psychology**, 2013-02-27, CC BY-NC | Yes — humour style as social signal | Abstract + record via Europe PMC REST API (PMC10481033). `europepmc.org` HTML returns 403; the REST API does not. |

- **Peer-reviewed + open access:** #1 (CC BY) and #5 (CC BY-NC). CC BY-NC material is
  cited and linked only — nothing reused.
- **Generic context statistics: zero.** No PIB, TRAI, Census or MEA figure appears.
- **Swap test:** none of the five would sit unchanged in another keyword's post in this
  batch — all five are specifically about humour or playfulness between partners.
- **Wikipedia in body: zero.** Wikipedia appears only as `sameAs` targets in
  `structuredData`, which does not count against the 0–2 body budget.
- `capcheck.mjs` run before choosing and again before finalising. None of the five URLs
  appears in the 194 banned wave-1/wave-2 URLs.

---

## Phase 0 — first-party facts used (verbatim from `content/facts.md`, 2026-09-23)

1. `5,061 personalised pages created since 2026-03-12, across 20 page types — measured 2026-09-23`
2. `Most popular creation: apology dashboard (/apology-dashboard) — 1,347 pages, 26.6% of everything created — measured 2026-09-23`
3. `48.4% of shared pages are opened on a phone (27,185 of 56,152 views) — measured 2026-09-23`
4. `91.2% of started pages are actually published and shared (4,615 of 5,061) — measured 2026-09-23`
5. `Median gap between a page's first save and its last edit: 2.4 hours — sampled on apology dashboard (/apology-dashboard), n=1,348 — measured 2026-09-23`
6. `38.7% of creators password-protect their page before sharing it (1,961 of 5,061) — measured 2026-09-23`

**Facts 1 and 2 are inside the first 150 words.** The ranking used is the
**regenerated 2026-09-23** one: `/apology-dashboard` is #1 at 1,347 / 26.6%, *not*
the `/love-gf` 1,138 / 24.9% figure that waves 1–2 print. Every figure is labelled
in body prose as either platform-wide across 20 page types or sampled on the named
template. **No figure is attributed to proposal pages** — that data does not exist;
a read-only probe of `proposalpages` is refused by this machine's production-read
policy.

**Pricing:** the pricing block in `content/facts.md` is empty. The post states no
price, no free tier and no paid tier, and nothing that reads as one.

**Indian marriage/divorce statistics:** none used. No source fetched for this post
states one.

---

## Phase 4–5 — structure and links

Seven H2s: definition · the 2027 date · why the direction matters · the 22 lines
(5 H3s) · four formats compared · when it is the wrong instrument · sources.

**Calendar, verified with `date` on this machine (2026-09-23):** Rose Day Sunday
7 February 2027; **Propose Day Monday 8 February 2027**, a working Monday; Valentine's
Day Sunday 14 February 2027.

Internal links (placed after value is established, never in the opening):

- **`/proposal` — mandatory**, after the 22 lines. The scrapbook is where the story
  goes once the line exists.
- **`/court-of-love` — the genuine alternative**, justified by the research rather
  than asserted: it is a *playful* instrument (10 funny questions, a penguin judge,
  a stamp paper), so it suits the couples the Psychological Reports clusters call
  "positive humour couples", and it is the wrong instrument for the rest.
- **`/love-gf`** — the plain-register fallback for a husband who does not do funny.
- **`/blog/propose-day-wishes-for-wife`** — the wave-2 sibling, cross-linked by slug.

A page is explicitly named as the wrong instrument where one sentence at breakfast
beats a link: on a working Monday, in the same house, it is.

## Known limitations carried into `structuralLimitations`

1. No proposal-specific platform data exists; every figure is platform-wide or
   sampled on the named template.
2. No SERP was measured for this keyword; Phase 1 is inherited from 2026-09-16.
3. The pricing block in `facts.md` is empty; no price claim is made.
4. All five publisher pages bot-block this machine; every claim is abstract-level.
5. The five studies' samples are not Indian, and none measures Propose Day.
6. `/blog/propose-day-wishes-for-wife` is not yet live in Strapi — the cross-link
   resolves only once wave 2 is published.
