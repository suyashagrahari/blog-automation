# Research brief — `propose day quotes for wife`

Batch `2026-09-23-propose-30b` (wave 3). Slug `propose-day-quotes-for-wife`.
Category `modern-romance`. Band 1,000–3,000 EST — not a measured volume, and not
printed as one anywhere in the post.

---

## Phase 0 — first-party data gate

`content/facts.md`, regenerated 2026-09-23. Facts used, verbatim:

- 5,061 personalised pages created since 2026-03-12, across 20 page types — measured 2026-09-23
- #2 page type: "I love you" page (/love-gf) — 1,173 created, 23.2% of all pages — measured 2026-09-23
- Most-viewed template: love-gf — 16,902 views, 30.1% of all page views — measured 2026-09-23
- 48.4% of shared pages are opened on a phone (27,185 of 56,152 views) — measured 2026-09-23
- 38.7% of creators password-protect their page before sharing it (1,961 of 5,061) — measured 2026-09-23
- 91.2% of started pages are actually published and shared (4,615 of 5,061) — measured 2026-09-23
- Median gap between a page's first save and its last edit: 2.4 hours — sampled on apology dashboard (/apology-dashboard), n=1,348 — measured 2026-09-23

Two are inside the first 150 words. Every figure is labelled in body prose as
platform-wide across 20 page types, or as sampled on the named template. There is
**no proposal-page data**: the `proposalpages` probe is still refused by this
machine's production-read policy. The pricing block in `facts.md` is empty, so the
post states no price, free tier or paid tier, and no phrasing that reads as one.

## Phase 1 — SERP: inherited, not measured

**No SERP was measured for `propose day quotes for wife`.** WebSearch budget for
this agent was 5 calls and none were spent; the post therefore makes no claim of
any kind about what currently ranks, what competitors say, or whether anyone
covers this angle.

The nearest measured SERP is `propose day wishes for girlfriend`, pulled with
`location: India` on **2026-09-16** (`content/keywords/2026-09-16-propose-100/serps.md`).
That result set was retailer quote hubs and Pinterest boards — giftalove, fnp,
floweraura, myflowertree, oyegifts — six of ten flagged weak, two still carrying
2025 in the title. It is a **different keyword and 2026-09-16 data**, so it is used
here only to shape the format decision (a copy-text list page is the right shape),
never as a description of this keyword's live results. Recorded in
`structuralLimitations`.

## Phase 2 — cannibalisation check and angle

Sibling read in full before drafting:
`content/batches/2026-09-17-propose-30/blogs/propose-day-wishes-for-wife.json`
(wave 2, 1,797 words, 20 original wishes, 12 FAQs).

| | Wave-2 sibling — *wishes for wife* | This post — *quotes for wife* |
|---|---|---|
| Intent | A greeting he composes and sends | A line he copies and adapts |
| Organising axis | The kind of year the couple has had (hard year, ordinary Monday, gone quiet, no-fuss, captions) | **How long the marriage has been, and what each line risks sounding like once it is older than the line** |
| Research lane | Gratitude, responsiveness, marriage maintenance | **Nostalgia and shared autobiographical memory** |
| Sources | Nature Sci Rep ×2, BMC Psychology ×2, MDPI Behav Sci | Frontiers Psychol (marital reminiscence), Gerontologist (first-encounter co-reminiscence), Dementia (nostalgic conversations), Memory & Cognition (reminiscence bump), Psychology in Russia (nostalgia's affective contingency) |
| Inventory | 20 wishes + a set for husbands | 22 quotes, none shared with the sibling, plus a fill-in-the-detail set |
| Third template | `/capsule` | `/streak` |
| Cross-link | — | Links the sibling by slug as the page for a reader who wants to write rather than copy |

**Is the difference honest?** Yes, but it is narrow, and it is only real because of
the sort order. A quotes page that simply re-listed lines would have been a
duplicate. What makes this page its own thing is that the lines are sorted by
marriage duration and every group states its failure mode — the thing a line starts
to sound like after twenty years — which is a judgement the sibling never makes and
which follows directly from the memory research rather than being decoration.

**Angle:** wins by being the only Propose Day quotes page that sorts lines by how
long the marriage has been and names what each group risks sounding like, using
research on couples' shared reminiscence plus SubhSandesh's platform-wide finding
that the plainest template out-creates and out-views every grander one.

## Phase 3 — sources

Lane: **nostalgia and shared autobiographical memory in couples.** Queries run
through `findpapers.mjs` and the Europe PMC REST API: `nostalgia relationship
satisfaction study`, `shared memory couples reminiscence research`, `reminiscence
bump autobiographical memory`, `collective memory romantic partners study`,
`reminiscing about relationship beginnings research`, `reminiscence marital
satisfaction older couples`, `nostalgia social connectedness experiment induced`.

1. **Majzoobi & Forstmeier, *Frontiers in Psychology*, 2025-08-26** —
   `https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2025.1639240/full`
   304 married people in Kermanshah, Iran; SEM. Narrative marital reminiscence style
   related positively to marital quality; obsessive style related negatively.
   Peer-reviewed, open access, page loads from this machine. **Subject test: pass.**
2. **"When Harry Met Sally: Older Adult Spouses' First Encounter Reminiscing and
   Well-Being", *The Gerontologist*, 2022-11-01** —
   `https://pmc.ncbi.nlm.nih.gov/articles/PMC9710240/`
   101 couples; closeness and perceived support rose from pre- to post-reminiscence
   for husbands and wives. **Abstract only** — the publisher page and the PMC page
   both return a challenge to this machine; abstract read via the Europe PMC REST
   API. **Subject test: pass.**
3. **Hodge et al., "Nostalgic conversations", *Dementia*, 2021-10-08, CC BY** —
   `https://pmc.ncbi.nlm.nih.gov/articles/PMC8811318/`
   States that nostalgic memories are more social than other autobiographical
   recall and often refer to atypical events; six couples trialled a 5-week
   nostalgic-conversation workbook, five integrated it into daily life.
   **Subject test: pass.**
4. **"Popular music and movies as autobiographical memory cues", *Memory &
   Cognition*, 2025-08-08** —
   `https://link.springer.com/article/10.3758/s13421-025-01765-2`
   N = 248; musical cues produced a significantly more pronounced reminiscence bump
   than movie cues. **Abstract only** — Springer returns a bot challenge; abstract
   read via the Europe PMC REST API.
5. **"Experimental Testing of the Affective Consequences of Nostalgia",
   *Psychology in Russia: State of the Art*, 2026-03-01, CC BY** —
   `https://pmc.ncbi.nlm.nih.gov/articles/PMC13196901/`
   122 participants, Event Reflection Task; well-being moderated the affective
   outcome — those higher in well-being gained more positive affect. Carries the
   "when not to send it" section. **Abstract only**, read via the Europe PMC REST API.

Swap test: none of the five could sit unchanged in another post in this batch —
all five are about reminiscence or nostalgia specifically, which is this post's
organising idea and nobody else's lane. Zero generic context statistics. Zero
Wikipedia links in the body. Zero competitor citations.

`capcheck.mjs` run before choosing and again before finalising: none of these five
URLs is in the 194-URL banned list, and no domain was at cap.

## Phase 4–5 — build decisions

- Dates verified with `date` on this machine: Propose Day **Monday 8 February
  2027**, Rose Day Sunday 7 February, Valentine's Day Sunday 14 February. 2026 fell
  on a Sunday; 2027 is a working Monday.
- Internal links (3): `/proposal` (mandatory, placed after the section that
  establishes why a long-married reader would want it), `/love-gf` (the honest
  alternative — platform-wide #2 by creation at 1,173 pages, 23.2%, and most-viewed
  at 16,902 views, 30.1%), `/streak` (a page that accumulates the specific days the
  quotes ask the reader to name). All relative paths.
- `categorySlug`: `modern-romance`.
- FAQs: 10, in `article.faqs` and the FAQPage JSON-LD only. None byte-identical to
  a body H2.
- `structuredData`: an `@id`-matched enrichment block on `<canonicalURL>#post` with
  `citation` mirroring all five sources, plus `about`/`mentions` whose `sameAs`
  pairs were verified against the Wikipedia API (Nostalgia Q12151852,
  Autobiographical memory Q682304, Valentine's Week Q138309865, Weddings in India
  Q16196994), and an `ItemList` mirroring the five H3 groups in order.
- Slug checked against Strapi on 2026-09-23: `total: 0`, free.

## Honest position

This is a copy-text query. The searcher copies a line and leaves, so the page is a
visibility asset judged on impressions, not a converting page, and the post says so
rather than pretending otherwise.
