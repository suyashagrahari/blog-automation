# Research brief — halloween party games for kids (row 96)

Batch `2026-10-13-halloween-b2` · slug `halloween-party-games-for-kids` · absorbs "halloween games for kids party", "halloween games for kids" · theme party · plan weak 5/10.

## Phase 0 — first-party data

No Halloween usage data exists (BRIEF §3). Used three platform-wide lines, each labelled in the body as platform-wide, not Halloween data:

- 48.3% of shared pages are opened on a phone (27,725 of 57,456 views) — measured 2026-09-24 (first 150 words; justifies the phone-readable game format)
- Average views per created page: 11.1 — measured 2026-09-24 (named in the first 150 words, used in the template section)
- 90.9% of started pages are actually published and shared (4,724 of 5,199) — measured 2026-09-24 (template section)

These are tangential to party games; the honest assessment says so. Template spec (`template-spec.md`) used for the Kids-mode description only.

## Phase 1 — SERP

**Method:** Firecrawl disconnected; 1 WebSearch call (US index), 2026-10-13. Pages fetched with `ctx_fetch_and_index` / sandbox fetch. Searches used for this row: 1 of 2.

Results returned (9): romper.com, speechblubs.com, twinkl.com, maisonette.com, blog.playosmo.com, splashlearn.com (×2 URLs), kidactivities.net, archive.speechblubs.com (duplicate). No AI Overview visible through the tool. Not in `serps.md` (40 measured SERPs) for this keyword.

**Weak count:** 6 of 9 (twinkl resource stub that returns empty content; playosmo HTTP 521; kidactivities.net thin 74-item list; splashlearn duplicate URL; speechblubs archive duplicate; maisonette retailer listicle with shop chrome). Gate 4 not triggered.

| # | Page | Words (~, incl. chrome) | Structure | Direct answer | Data cited | Format | Optimising for |
|---|---|---|---|---|---|---|---|
| 1 | romper.com (Oct 2022, upd. Feb 2024) | 1,366 | H1 + 10 H2 games | No; anecdotal intro | None | Numbered list, Amazon links, no FAQ/table | Media listicle, affiliate |
| 2 | speechblubs.com | 3,146 | Decor, 14 games (H4) in 3 groups (classic/active/calm), snacks, app pitch, 4 FAQs | No; long scene-setting | None | Lists, FAQ, no table | Speech-therapy app funnel |
| 3 | maisonette.com (Nov 2025) | 4,191 (mostly shop chrome) | 25 games as bold bullets | No | None | Bullets, product carousels | Retail |
| 4 | splashlearn.com | 3,981 (chrome) | 15 H2 games incl. "online coloring games", FAQ schema | No | None | How-to-play bullets, FAQPage | Ed-tech app funnel |
| 5 | kidactivities.net | 6,470 | 74 H2 games, no grouping | No | None | Long list | Ad-supported list |
| – | twinkl.com | empty | – | – | – | – | Paywalled resource (snippet only) |
| – | blog.playosmo.com | 521 error | – | – | – | – | Judged from snippet only |

Measured flags (sandbox regex over each page): allergy mentions — speechblubs 2 (snacks only), others 0; choking 0 on all; Teal Pumpkin 0 on all; supervision 0 on all; tables 0 on all.

## Phase 2 — gap analysis

- **Table stakes:** mummy wrap, apple/donut bobbing, scavenger/ghost hunt, bowling, relays, ring toss, pin-the-X, prizes for winners.
- **Gap:** none groups games by age band AND energy; none gives a non-competitive version per game; none has a timed run sheet, adult ratios or a plan for tears; none mentions the under-3 small-parts rule, blindfold trips or Teal Pumpkin non-food prizes; none cites research.
- **Stale data:** none cited at all.
- **Fan-out sub-queries:** games for 3–5 / 6–8 / 9–11; indoor vs outdoor; how many games for a 90-minute party; how many adults; non-food prizes; stopping tears over losing; blindfold safety; no-garden parties; scared children.
- **Angle:** Wins by being the only post in the top results that sorts 20 original games by age and energy with an everyone-wins version and a non-food prize per game, inside a 90-minute run sheet with ratios and the 16 CFR 1501 / Teal Pumpkin safety rules, grounded in a 2025 cooperative-vs-competitive sharing experiment, using the 48.3% phone-open rate to justify the format.

**Sibling exclusions honoured:** no game from Batch 1 `halloween-party-games` (22 games incl. mummy wrap race, pumpkin bowling, ghost in the graveyard, witch hat ring toss, freeze zombie, snap-apple, barmbrack), `halloween-crafts-for-kids` or `halloween-jokes-for-kids`; none of Batch 2 `halloween-games-for-couples` (18 games) or `halloween-games-for-teens` (21 games — I swapped my capture-the-flag variant for Pumpkin Bocce after seeing their Glow-Stick Capture the Flag). `halloween-party-activities` (row 98) was not on disk when written. 5-gram overlap check against all 95 sibling bodies (both batches): only factual/URL/template-spec phrases overlap, no game line.

## Phase 3 — sources (all fetched)

| Source | What it supports | Read | Published |
|---|---|---|---|
| [Zhang, Ruan & Xiong, Frontiers in Psychiatry (Europe PMC PMC12268353)](https://europepmc.org/article/PMC/PMC12268353) | 120 kindergarteners (mean age 4.73), same 15-min fishing game cooperative vs competitive; cooperative raised sticker sharing; boys largely unaffected | Full text, CC BY | 2025-07-03 |
| [Jusko et al., Res Child Adolesc Psychopathol (PMC13053425)](https://europepmc.org/article/PMC/PMC13053425) | 28 children with ADHD, groups of 3–4, 20 days; cooperative board games reduced teasing, medication did not; reward-sensitive kids showed more poor sportsmanship in competitive games | Full text, CC BY-NC-ND (cited, not reused) | 2026-04-06 |
| [16 CFR Part 1501, eCFR](https://www.ecfr.gov/current/title-16/chapter-II/subchapter-C/part-1501) | Scope: under 3 (36 months); fails if it fits entirely in the test cylinder; exemptions incl. balloons, crayons, modeling clay; source 44 FR 34903, 15 June 1979 | Text via eCFR versioner API (HTML page bot-gated); Figure 1 cylinder dimensions NOT read (image blocked), so no dimensions are stated | 1979-06-15 |
| [Teal Pumpkin Project, FARE](https://www.foodallergy.org/our-initiatives/awareness-campaigns/living-teal/teal-pumpkin-project) | Non-food treats in a separate bowl; adopted nationally by FARE in 2014 | Page read | undated |

Search terms (findpapers.mjs): "cooperative games children prosocial"; "cooperative versus competitive games preschool children sharing". Rejected: Crossref-only hits with no OA text, a 2026 Frontiers Psych music-game paper (Frontiers already present), SAGE/T&F/Elsevier items. Supervision ratios: tried Caring for Our Children standard 1.1.1.2 at nrckids.org (404); ratios are therefore stated in the body as "our working rule for a home party, not a legal standard".

Caps (capcheck + verify-batch, 2026-10-13): ecfr.gov now 2 posts in b2 (one slot left); Teal Pumpkin URL now 2 posts (with things-to-do-on-halloween-night) → FULL; both PMC papers unused elsewhere in b2. verify-batch: no problems on this slug (48 passed / 2 failed).

## Brief claims found inaccurate

- Task prompt: "ecfr.gov is unused in b2 so far" — false. `diy-halloween-costumes` already cites ecfr.gov (16 CFR 1610); this post makes it 2 posts. Also, Batch 1 `halloween-crafts-for-kids` cites the identical 16 CFR 1501 URL, and Batch 1 `boo-basket-ideas` cites the identical Teal Pumpkin URL (caps are per batch, so legal, but BRIEF §9 prefers unused sources).
- Task asked for a table with one row per game (age · game · energy · minutes · materials); BRIEF §10 caps tables at 3–5 rows, so the table groups by age band (4 rows, 5 columns) and per-game values sit in each H3.
