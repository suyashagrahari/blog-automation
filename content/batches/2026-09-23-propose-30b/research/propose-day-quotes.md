# Research brief — `propose day quotes`

- **Batch:** `2026-09-23-propose-30b` (wave 3)
- **Slug:** `propose-day-quotes` — checked 2026-09-23 against
  `strapi.subhsandesh.in/api/articles?filters[slug][$eq]=propose-day-quotes` → 0 results, free.
- **Category:** `modern-romance` (verified present in the live Strapi category list, 10 categories).
- **Band:** 10,000+ EST — the highest-volume keyword in the 100-keyword run. **EST is a band, not a
  measured volume; no tool data exists and none is quoted anywhere in the post.**
- **Date check:** `date` on this machine returned `Wed Sep 23 15:45:55 IST 2026`. Propose Day 2027 =
  **Monday 8 February 2027**, second day of Valentine week (Rose Day Sunday 7 February, Valentine's
  Day Sunday 14 February). The weekday is stated in the body and used as an argument.

---

## Phase 1 — SERP: what was actually measured, and what was not

**One WebSearch call was spent** (session budget: 5 permitted, 1 used), on the exact keyword, on
2026-09-23. The search tool is **US-served and US-only**. It returned nine results.

What I can say because I saw it:

- Nine results. Six were quote pages on gift or jewellery retailers' domains; one was a Pinterest
  ideas page; one a Dribbble shot.
- One result title advertised a count of lines ("50+").
- One result title carried a **2026** year-stamp.

What I did **not** do, and therefore do not claim anywhere in the post:

- **No competitor page was fetched.** No claim is made about any incumbent's headings, structure,
  wording, freshness, or what they do or do not cover.
- **No India-served SERP was measured.** The audience is India. Nothing in the post describes a
  ranking position, and the brief's note that several incumbents still carry 2025 titles was
  recorded for *other* queries in the keyword run — I did not see it here, so it is not stated.
- Phase 1 is therefore **thin and inherited**, and that is recorded in
  `batchMeta.structuralLimitations` and as the single audit failure (checklist item
  "No section closely mirrors a competitor page's structure or framing" — unverifiable without
  fetching the pages).

Prior measured SERPs for this territory exist at
`content/keywords/2026-09-16-propose-100/serps.md` (11 India-served SERPs, 2026-09-16); none of
them is this keyword, so nothing was inherited from them either.

## Phase 2 — Gap and angle

**Table stakes** for a copy-text query: a quantity of lines, a date answer, groupings, an FAQ.

**The gap.** Every page in this category answers "how many lines can we put on one screen". Nobody
answers **"how do I pick one?"** — which is the reader's actual task. The list is optimised for the
publisher's dwell time; the reader needs the opposite.

**Angle (recorded as `batchMeta.angle`).** Wins by being the only post that treats picking a
Propose Day line as a *choice problem*: five asks ordered by what each commits the sender to, 20
original lines, and the published research showing that list length alone is not the villain but
**having to justify your choice** is — which is precisely what sending a line to a named person
involves. Grounded in SubhSandesh creation data labelled platform-wide.

**Fan-out sub-queries → H2s.** what a Propose Day quote is · is a long list better · lines by
situation · which line for which relationship · which recipient page to use · how to choose ·
when not to send one · sources.

## Cannibalisation — how this differs from the wave-2 girlfriend page

Sibling read in full: `content/batches/2026-09-17-propose-30/blogs/propose-day-quotes-for-girlfriend.json`
(1,792 words, 20 lines grouped by *the moment*: already together / asking out / long distance /
rough patch / not expecting it; research lane = quotation and formulaic language; sources =
Łódź formulaic-sequences study, Hymes on ceremonial formulae, a ventriloquism/voicing manuscript,
a greeting-card semiotics article).

| | Wave-2 girlfriend page | This hub |
|---|---|---|
| Intent | One recipient, one relationship | Head term; every recipient, briefly, then routed |
| Organising axis | The **moment** the line is sent in | The **size of the ask** the line makes |
| Research lane | Quotation and formulaic language | Choice among many options |
| Lines | 20, addressed to a girlfriend | 20 different originals, none reused |
| Links out | Templates only | Templates **plus 9 sibling blog slugs** — the hub's actual job |

**Zero lines, zero sources and zero groupings are shared.** The girlfriend page is linked by slug
rather than re-covered, as are the boyfriend, wife, crush, shayari, Hindi, Marathi, Bengali and
`propose-day-2027` pages.

## Phase 3 — Sources (4), all fetched and read in full

Lane: **choice among many options.** Searched with `findpapers.mjs`:
`choice overload decision quality study`, `too many options satisfaction research`,
`assortment size choice study`, `decision fatigue selection research`,
`satisficing versus maximising choice study`, plus `mere categorization effect assortment
satisfaction`, `when choice is demotivating too much of a good thing`,
`meta-analytic review of choice overload`, `categorization of options reduces choice difficulty
consumers`, `choice deferral large assortment study`.

1. **Iyengar & Lepper, "When Choice is Demotivating", *JPSP*, Dec 2000** —
   `faculty.washington.edu/jdb/345/…` (course-hosted PDF of the paywalled article, read in full).
   24-jam display: 60% of 242 passers-by stopped, versus 40% of 260 at the 6-jam display; but only
   ~3% of the large-display group bought, against nearly 30% of the small-display group. Study 3:
   74% of students given 6 essay topics completed it, against 60% given 30.
2. **Scheibehenne, Greifeneder & Todd, "Can There Ever Be Too Many Options?", *JCR*, Oct 2010** —
   author-hosted PDF, read in full. Meta-analysis of **63 conditions from 50 published and
   unpublished experiments, N = 5,036**: mean effect size **virtually zero**, large between-study
   variance, no sufficient conditions identified. This is the honest counterweight and it is stated
   as such in the body.
3. **Scheibehenne, Greifeneder & Todd, "What Moderates the Too-Much-Choice Effect?",
   *Psychology & Marketing*, Mar 2009** — author-hosted PDF, read in full. Three studies,
   **598 participants**: set size, option attractiveness, search behaviour, domain expertise and
   tendency to maximise **all failed** as moderators; **only choice justification held.** This is
   the spine — a Propose Day line is a choice you must justify to a named person.
4. **Zhu et al., "Perceived busyness shapes assortment size preferences", *Scientific Reports*,
   15 Mar 2026** — `nature.com/articles/s41598-026-41877-6`. Study 3, n = 185: negative-busyness
   condition chose assortments averaging **8.75** options, against **29.92** (positive busyness) and
   **17.82** (control), F(2,182) = 30.08, p < .001. nature.com blocks automated fetching, so the
   **full text was read in the identical PMC deposit (PMC13121703)** and that is disclosed in
   `batchMeta.sources`.

**Caps.** `capcheck.mjs` run before choosing and again before finalising. None of the four URLs is
among the 194 banned wave-1/2 URLs. A first draft cited the Misuraca 2024 *Frontiers in Psychology*
review and the PMC copy of source 4; both were **dropped** when the second capcheck run showed
`frontiersin.org` at **4 posts** (over the 3-post cap) and the PMC/Europe PMC publisher at **3**
across concurrently written wave-3 siblings. Replacing the Frontiers review with Scheibehenne 2009
also *improved* the argument: the review's maximiser/expertise moderators are exactly the ones the
598-participant study failed to replicate, so the post now makes the narrower, better-supported
claim. Final domain counts after the swap: `scheibehenne.de` 1 post (2 URLs, cap counts posts),
`faculty.washington.edu` 1, `nature.com` 2.

Zero generic context statistics. Zero Wikipedia body links (4 entities appear only as verified
`sameAs` pairs in `structuredData`: Propose Day Q7250378, Overchoice Q2233384, Marriage proposal
Q1057944, Valentine's Day Q37587).

## Phase 0 — first-party facts used

Seven lines copied verbatim from `content/facts.md` (regenerated 2026-09-23). The **new** ranking is
used — `/apology-dashboard` is #1 at 1,347 / 26.6%, `/love-gf` is #2 at 1,173 / 23.2%; the wave-1/2
figure of "1,138 pages / 24.9% / #1" is **not** repeated anywhere. Two facts (5,061 pages across 20
page types; 91.2% published and shared) sit inside the first 150 words. Every SubhSandesh number in
the body is labelled **in prose** as platform-wide across all 20 page types. No figure is attributed
to proposal pages, because no proposal-specific data exists. The Raksha Bandhan lead-time block was
not used. No price, free tier or paid tier is stated or implied — the pricing block is empty.

## Phase 5 — links

- **Templates (4, all in `TEMPLATE_LINKS`, relative):** `/proposal` (mandatory; the fifth ask),
  `/love-gf` (the genuine alternative — most Propose Day traffic is *not* a marriage proposal, and
  the body says which reader should use which), `/date-invitation` (the second ask),
  `/apology-dashboard` (the fourth ask). `templateUrls` = `/proposal`, `/love-gf`,
  `/date-invitation` (max 3).
- **Sibling blog links (9, relative `/blog/…`):** the hub's routing. `scripts/verify-batch.mjs`
  excludes `/blog` paths from both the 2–4 internal-link count and the `TEMPLATE_LINKS` membership
  test. **None of the nine slugs resolves in Strapi as of 2026-09-23** — waves 1 and 2 are committed
  to git but unpublished — so this hub must not be published ahead of them. Recorded in
  `structuralLimitations`.

## Phase 6 — audit

49 passed / 1 failed, disjoint, summing to 50, strings byte-verbatim from `publish-checklist.md`.
The single failure is *"No section closely mirrors a competitor page's structure or framing"* —
honestly unverifiable because no competitor page was fetched. Batch-level limitations (no
proposal-specific data, empty pricing block, US-served SERP, `/blog` links, unpublished siblings,
concurrent-sibling cap timing, the source swap) are in `batchMeta.structuralLimitations`, not in
`failed`.

Body: **1,788 words** excluding FAQs (plain whitespace split). 11 FAQs, in `article.faqs` and the
renderer-built FAQPage only; none byte-identical to a body H2. One H1, eight H2s, five H3s, no
skipped levels, no paragraph over three sentences. One comparison table, 5 rows × 4 columns, with a
first-party column.

## Honest assessment

This is a copy-text query with near-zero conversion — the searcher copies a line and leaves — so the
page is a visibility asset judged on impressions, not a converting page. It is also the highest-
volume keyword in the run, contested by gift and jewellery retailers with far more domain authority
who republish the same pages annually. Realistically this competes for positions 6–10 and for
AI-answer citation of the specific claim (the 598-participant justification finding next to
first-party creation data no competitor can publish), not for position 1, and any movement will take
months if it comes at all.
