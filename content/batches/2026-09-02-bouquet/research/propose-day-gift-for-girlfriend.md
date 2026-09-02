# Research brief — `propose day gift for girlfriend`

- **Slug**: `propose-day-gift-for-girlfriend` (re-verified free against live Strapi on 2026-09-02; `filters[slug][$eq]` returned `total: 0`)
- **Batch**: `2026-09-02-bouquet`
- **Category**: `digital-gifts-romance` (verified live against the Strapi categories endpoint)
- **Occasion**: Propose Day, **8 February 2027**, a **Monday** — day two of Valentine's week
- **publish_by**: 2026-12-14
- **Secondary keywords folded in**: `propose day gift card` (H3 #2 + FAQ), `propose day gift idea` (H2 + FAQ), `propose day gift for gf` (FAQ), `propose day gift for her` (FAQ), `what to give on propose day` (FAQ)
- **Internal links**: three in the body — `/bouquet-gf` (H3 #1), `/love-gf` and `/darling` (the "why the gift says as much about you" section). A fourth link to `/valentine-gf` was drafted into the closing section and **removed in the 2026-09-02 fix pass**: that URL returns HTTP 307 to `/love-gf`, which the post already links directly, and it has since been dropped from `TEMPLATE_LINKS` along with nine other redirecting entries. The clause was cut rather than re-pointed and no substitute was added, so the post carries 3 internal links inside the 2–4 budget. `batchMeta.templateUrls` carries the same three.

---

## Phase 1 — SERP analysis (constrained; read this caveat)

**`WebSearch` was exhausted for the session (200/200) and `WebFetch` was hook-blocked**, so
the prescribed "fetch each of the top 5 pages in full" step was **not performed**. The SERP
composition below is the orchestrator's own measurement of 2026-09-02, not a first-hand pull,
and the gap analysis rests on it.

| Rank band | Who | What the page is | Editorial answer? |
|---|---|---|---|
| Top 5 | Winni, FNP, IGP, Flipkart, Amazon | Category / product-listing pages for "propose day gifts" | None |
| 6–10 | FlowerAura, Woofern, TheKnotCompany, ThezappyBox | Shop pages and one gift-box brand | None |

- **10 of 10 results are commercial. 0 are editorial.**
- **5 of the 10 are flagged weak** — the best verified weakness count across the whole
  30-keyword shortlist for this run.
- No AI Overview or featured snippet was recorded for this query.

Because every result is a competitor under `references/competitors.md`, none of them could
have been cited or paraphrased even if they had been fetched. The practical loss from the
tooling gap is the *word count / heading structure / stale-statistic* columns, not the
strategy — a page-level read of five PLPs would not have changed the angle.

## Phase 2 — Gap analysis

**Table stakes** (things a retrieval system expects any page on this query to carry):
what Propose Day is, when it falls, that it sits in Valentine's week, a list of gift options,
flowers as the default object, and something about long-distance/remote sending.

**The gap.** Not one result explains what a Propose Day gift is *for*, or how it differs
from a Valentine's Day gift six days later. All ten treat 8 February as a retail occasion
identical to 14 February with different stock. Nobody addresses the thing that actually
distinguishes the day: **it is a fixed calendar date for something that is supposed to be
spontaneous, and the giver frequently does not know the answer yet.**

**Stale data**: not assessable without page fetches. Recorded as unknown rather than guessed.

**Unanswered questions the results raise and drop**:
- What do you send when the answer is genuinely uncertain?
- Who else sees the gift before she does?
- What happens to the gift if she says no?
- Is a gift card acceptable for a proposal, or does it read as lazy?

**Fan-out sub-queries → H2 map** (checklist item 13):

| Fan-out sub-query | H2 that answers it |
|---|---|
| what is propose day / when is it | `## What is Propose Day, and what is the gift for?` |
| propose day vs valentine's day gift | `## Propose Day is not a smaller Valentine's Day` |
| propose day gift ideas / what to give | `## Five Propose Day gift ideas, ordered by how sure you are` |
| which propose day gift arrives fastest / most privately | `## What actually reaches her, and who else sees it` |
| how do i choose a propose day gift for her | `## Why the gift says as much about you as about her` |
| is a digital propose day gift a bad idea | `## When a link is the wrong Propose Day gift` |
| how to send a propose day gift on 8 february | `## Getting it out on Monday 8 February 2027` |

**Angle (recorded as `batchMeta.angle`)**: wins by being the only post that treats a Propose
Day gift as a **risk-and-reversibility** problem — what to send when you do not yet know the
answer, and what happens to the gift if the answer is no — ordered by certainty required and
grounded in the 42.8% of 3,394 SubhSandesh creators who password-protect a page before
sharing it.

## De-duplication against live and sibling posts

| Post | Why this post does not overlap |
|---|---|
| `digital-gift-for-girlfriend-day` (j=0.38) | National Girlfriend Day (1 August), a different occasion. Title confirmed live: "Best Digital Gift for Girlfriend Day — A Step-by-Step Guide". Its frame is a how-to build guide; this post is a decision framework about certainty and audience. |
| `free-girlfriend-day-gift-online` (j=0.38) | Same occasion mismatch, plus a cost angle this post is barred from taking. |
| `girlfriend-day-gift-ideas`, `cheap-girlfriend-day-gift-ideas` | National Girlfriend Day listicles. Titles confirmed live via Strapi. |
| Sibling `rose-day-gift-for-girlfriend` (7 Feb) | Rose Day is about the object and its colour code. This post never ranks blooms or explains rose meanings; flowers appear only as one of five delivery routes. |
| Sibling `flowers-to-propose-a-girl` | That keyword is about *which blooms* to choose. This post takes no position on bloom choice at all — the axis here is the ask, not the flower. |

The Strapi `content` field is not exposed on the public read endpoint, so heading-level
comparison against the four live articles was not possible; only titles were verified.

## Phase 3 — Sources

Search strategy: the phenomenon, not the keyword. OpenAlex was **rate-limited to zero budget**
(HTTP 429, "Insufficient budget… Resets at midnight UTC") and Semantic Scholar returned HTTP
429 on every query, so sourcing ran through the **DOAJ article API** with title and abstract
field queries, then each candidate was fetched and read directly.

Queries run: `gift giving reciprocity romantic relationship`, `courtship commitment
signalling`, `Valentine's Day` (title), `Valentine AND gift` (abstract), `gift card` (title),
`gift AND givers AND recipients` (abstract), `digital gift OR virtual gift` (abstract),
`romantic gift OR gift exchange OR gift ritual` (title), `love confession OR romantic
proposal` (title), `experiential gift` (title), `relationship initiation AND rejection`
(abstract), `self-disclosure AND romantic AND risk` (abstract), `proposal AND marriage AND
ritual` (abstract), `dating AND India AND youth` (abstract).

**Rejected for being on a closed domain** (4+ earlier posts each) despite being on-topic:
- "Greater effort, greater pain: Givers' feelings of social exclusion in gift failures across
  close and distant relationships" (2025) — the single best-matched paper found; `nature.com`
  / `doi.org` both closed.
- "A Maussian bargain: Accumulation by gift in the digital economy" (2020) — `journals.sagepub.com`.
- "WeChat online visual language among Chinese Gen Z: virtual gift…" (2023) — `frontiersin.org`.
- "The consumption of experiential gifts…" (2024) — `frontiersin.org`.

### Final source list (5)

| # | Source | Domain | Subject test | Peer-reviewed | Open access | Verification |
|---|---|---|---|---|---|---|
| 1 | Baćević (2007), *Valentine's Day as the 8th March of Transitional Serbia*, Glasnik Etnografskog instituta SANU 55(1), 77–89 | doiserbia.nb.rs | Pass — anthropology of consumption, imported romantic holiday | Yes | Yes | PDF downloaded and text-extracted. **English summary read; main text is in Serbian.** Quoted phrase "the market of partners and the market of goods" appears verbatim in that summary. |
| 2 | Popelková & Zajonc (2022), *Halloween and Valentine's Day in Slovakia*, Łódzkie Studia Etnograficzne 61, 21–37 | apcz.umk.pl | Pass — calendrical/ritual observance | Yes | Yes | Full English PDF downloaded and read. The 98% / 31% figures are on p. 31, attributed to a representative questionnaire survey (FOCUS agency, 2018 and 2019). |
| 3 | Anitsal, Anitsal & Brown (2013), *Gift cards and gift giving*, Journal of Applied Marketing Theory 4(1), 40–61 | digitalcommons.georgiasouthern.edu | Pass — gift-giving behaviour | Yes | Yes (CC BY-NC-ND) | **Abstract only.** Landing page read in full; the PDF at `/cgi/viewcontent.cgi?article=1028` returned HTTP 403. Every claim used is inside the abstract: relationship duration × level of intimacy cross-tabulation, and value of convenience, time and experience beyond the five in the literature. Nothing reproduced (NC licence respected — cite-and-link only). |
| 4 | Passos, Leite & Pinto (2020), *Personal values and gift giving act: a proposed connection*, Estudios Gerenciales 36(155) | icesi.edu.co | Pass — gift-giving behaviour | Yes | Yes | Landing page read. n = 1,085; SEM-PLS; five values named: self-direction, hedonism, tradition, achievement, power. |
| 5 | *Hedonic and Eudaimonic Well-Being Orientations as Drivers of Symbolic Gift Preferences in Online Gift Choice* (2026), JTAER 21(5), 144 | mdpi.com | Pass — online gift choice | Yes | Yes | **Abstract only.** `www.mdpi.com` returned HTTP 403 (Akamai) to every sandboxed fetch; the abstract was read from the DOAJ-indexed record. n = 574, pilot n = 100, ten pretested options, PLS-SEM, 5000 bootstrap resamples. Recorded as audit failure on item 26. |

- Generic context statistics: **0**. Wikipedia body links: **0**.
- Wikipedia appears only in `sameAs` (which the structured-data reference excludes from the
  0–2 body budget). All five QIDs verified live against the MediaWiki API: Propose Day
  Q7250378, Valentine's Day Q37587, Gift card Q554910, Marriage proposal Q1057944,
  Long-distance relationship Q1406917. The Propose Day article's own lead confirms 8 February,
  second day of Valentine's Week, India-specific.

### Batch cap status — no breach, but at the limit

The sibling `rose-day-gift-for-girlfriend` independently selected two of the same five URLs:

| URL | Posts in this batch | Cap | Status |
|---|---|---|---|
| `doiserbia.nb.rs/img/doi/0350-0861/2007/0350-08610701077B.pdf` | 2 (this + rose-day) | 2 | **at limit** |
| `icesi.edu.co/…/estudios_gerenciales/article/view/3539` | 2 (this + rose-day) | 2 | **at limit** |
| domain `doiserbia.nb.rs` | 2 | 3 | ok |
| domain `icesi.edu.co` | 2 | 3 | ok |

Nothing was dropped, swapped or restructured — per the brief's escalate-don't-patch rule. If
the orchestrator needs headroom, **the URL this post surrenders is the Baćević PDF**: source 2
(Popelková & Zajonc) carries the same imported-calendrical-holiday point *and* a verified
statistic, whereas the Estudios Gerenciales five-values finding is load-bearing for the "why
the gift says as much about you" section and no open substitute was found.

## Phase 6 — Audit summary

47 passed, 3 failed, disjoint, 50 total.

| Item | Why it failed |
|---|---|
| 24 — slug stop words | `for` is a stop word; the slug is the pre-verified exact-match keyword. Directly contradicts item 14. Known checklist defect. |
| 26 — outbound links fetched and verified | 4 of 5 fetched in full; the MDPI page 403s, so its figures were verified against the DOAJ-indexed abstract instead. |
| 34 — swap test | Confirmed, not suspected: the rose-day sibling independently used two of the same sources. |

### One deliberate disagreement with the brief

The batch brief lists **item 15** (`metaTitle 50–60 characters, exact keyword in the first
five words`) as known-unsatisfiable for a five-word keyword and instructs recording it as a
failure. **It is recorded as passed here.** `metaTitle` is
`Propose Day Gift for Girlfriend, Ranked by Risk of a No` — 55 characters, with the exact
keyword occupying words one through five. The rule is met at the boundary rather than broken,
and logging a false failure would corrupt the audit as surely as hiding a real one. This is
also mirrored in `batchMeta.notes`. Item 24 *is* genuinely unsatisfiable and is recorded as a
failure.

## Known gaps recorded rather than papered over

- **Cost is unanswerable.** The Pricing block in `content/facts.md` is empty, so the post
  makes no price comparison of any kind and says so explicitly in the body. For a
  "gift for girlfriend" query, cost is plausibly the second-largest intent behind the keyword,
  and this post cannot serve it.
- **No Indian-specific research was found** for Propose Day, Valentine's week in India, or
  Indian romantic gift-giving on any open repository reachable in this session. The two
  holiday ethnographies used are Slovak and Serbian; the argument they support (an imported
  romantic date spread by the market, with awareness far exceeding observance) generalises,
  but the post does not claim they measured India. Terms tried: `Valentine AND India`,
  `romantic love AND India`, `dating AND India AND youth`.
- **Phase 1 page-level competitor reading did not happen.** See the caveat above.

## Fix pass — 2026-09-02

Run by `blog-audit-remediator` on the emitted JSON.

- **Removed the `/valentine-gf` internal link** (see Internal links above). Word count fell
  from 1,794 to 1,782 by plain whitespace split, still inside 1,500–1,800. No words were
  added anywhere to compensate.
- **All five outbound sources re-fetched and re-verified.** doiserbia.nb.rs (English summary
  in the PDF), apcz.umk.pl (full-text PDF, 98%/31% on p. 31), digitalcommons.georgiasouthern.edu
  (abstract) and icesi.edu.co (abstract, 1,085 consumers and the five named values) all
  returned 200 and contained the cited fact. `www.mdpi.com/0718-1876/21/5/144` returned
  **HTTP 403 from the article page, the `/pdf` endpoint and the DOI resolver alike**; its
  n=574 / congruence claim was re-verified word for word against the DOAJ-indexed abstract
  (DOAJ API, single exact-title match) and stays labelled abstract-only in the body and the
  Sources list. Item 24 therefore remains a recorded failure — one of the five links cannot
  be fetched at the URL the post prints.
- **Swap test stays failed** and stays unpatched. Both shared URLs sit at exactly 2 posts and
  their domains at 2, which is the ceiling, not a breach, so the per-post cap item remains
  passed. The `why` now records that the sibling audit claims both writers nominated the
  Estudios Gerenciales survey for surrender, while this post nominates doiserbia.nb.rs
  instead — Popeľková and Zajonc carries the same calendrical point, whereas the five-values
  finding is the only number in its section. The orchestrator holds the decision.
- **Re-checks that came back clean**: all seven `factsUsed` entries match the 2026-09-02
  regeneration of `content/facts.md` verbatim (the brief’s 50.3% phone figure is stale and
  never entered the post; the post uses 50.2%); none of the 12 FAQ questions appears as a
  body heading or verbatim in `contentMarkdown`; one H1, no skipped heading levels; no cost
  or pricing claim anywhere. `metaTitle` re-counted at 55 characters, not the 54 first
  recorded — inside 50–60 either way, and item 15 stays passed.
- **Final audit state**: 47 passed / 3 failed, disjoint, 50 total, every string byte-verbatim
  against `references/publish-checklist.md`. `honestAssessment` rewritten for the post as it
  now stands.
