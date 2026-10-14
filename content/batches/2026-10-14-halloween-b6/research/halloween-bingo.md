# Research brief — halloween bingo (rank 264)

- Keyword: "halloween bingo" (absorbs "halloween bingo cards"); band 300–1,000/mo. Head term (2 words): flagged; the post targets the long-tail fan-outs "how many words for halloween bingo", "how to make halloween bingo cards", "how long does a bingo game take", "halloween picture bingo for preschool".
- Slug: `halloween-bingo` (Strapi check 2026-10-14: not taken).
- Searches used: 1 of 2 — 1 WebSearch (US index). No Firecrawl, no DuckDuckGo.

## Phase 0 — first-party data
No Halloween usage data in facts.md. Used verbatim in factsUsed:
- Raksha Bandhan 2026 lead time (49.4% built on the day; n = 89), disclosed in the body as the nearest analogue; it supports a fast card method.
- 48.3% of shared pages opened on a phone, which supports running the calling list from a phone.
- 38.5% password-protect, in the template paragraph.

## Phase 1 — SERP (WebSearch, US index)
| # | URL | Status | Notes |
|---|---|---|---|
| 1 | lexingtonky.macaronikid.com/…/halloween-bingo | fetched | Oct 2023 local franchise blog; ~500 words; what-is, supplies, rules; printables behind a Google Form. Answer in para 3. No data. |
| 2 | merimeri.com/blogs/stories/halloween-bingo | 403 | Retailer blog (party goods); snippet only. Weak. |
| 3 | alloprof.qc.ca/…/halloween-bingo-k3054 | fetched | ~100 words: 4-step rules + PDF; word called or spelled out. Grade 1–6. Thin. |
| 4 | merimerieu.com/it/… | — | Duplicate of #2 (Italian store). Weak. |
| 5 | bingocardcreator.com/bingo-cards/halloween/ | fetched | Card-generator tool page; variants (traditional, story, memory, candy); no numbers, no dates. Competitor-adjacent (card builder) — not cited. |
| 6 | apps.apple.com/us/app/-/id1300167303 | — | App listing; not an article. |
| 7 | adconsole.inmobi.com/halloween-bingo-game | — | Hijacked-subdomain spam. Weak. |
| 8 | crayonsandcravings.com/halloween-bingo/ | fetched | Recipe blog; 10 printable cards + 30 calling cards; marking with candy/coins; line vs full card; cute images for young kids. |
| 9 | twinkl.com/resource/t-t-2441-halloween-bingo | snippet | Paid teacher resource. |
| 10 | crayonsandcravings.com/?p=41971 | — | Duplicate of #8. |

Weak in top 10: 6 of 10 (macaronikid, merimeri ×2, app listing, inmobi spam, duplicate). Gate 4 passes.

Format notes: all pages are third person, short, list-driven; none has a table, FAQ schema with data, a dated statistic, or any probability.

## Phase 2 — gap
- Table stakes: what it is; cards with pictures/words; caller draws; markers; line vs full card; free centre; prizes.
- Gap (none of the 5 covers): how many words a card needs; how long a game lasts and how often it ties by group size; why blackout with a 24-word pool always ties; why rotated cards are "twins"; a spreadsheet method for unique cards; costume-spotting walk version; large-print card geometry.
- Stale data: none cited by any page.
- Fan-outs → H2s: what is halloween bingo; calling list; how to make unique cards (hand/spreadsheet); how many calls until someone wins; variants (pre-readers, seniors, trick-or-treat walk); when it is the wrong game.
- Angle: see batchMeta.angle.

Cannibalisation: no sibling shares 4+ URLs. b1 halloween-party-games and b2 halloween-party-games-for-kids briefs share only the macaronikid / twinkl domains. Read and avoided: b1 "Monster Bingo" (find-a-guest 4×4), b4 seniors "Riddle Bingo" (3 cm squares, whiteboard) and "Object Bingo" (caller holds up real item), b6 office games.

## Phase 3 — sources
1. Wikipedia "Bingo (American version)" — 75-ball card count 552,446,474,061,128,648,601,600,000 (recomputed: 360,360^4 × 32,760). Used for the count only.
2. Europe PMC PMC9766423 — Bingocize trial abstract, Innovation in Aging 2022-11-01 (OUP/GSA, CC BY). Peer-reviewed abstract; outcomes self-reported.
3. Europe PMC PMC5534081 — Ryde et al., Well!Bingo, BMC Women's Health 2017-07-28 (CC BY). Abstract read.
4. Europe PMC PMC5806249 — Dieckmann et al., NTS Bingo, Advances in Simulation 2016-07-22 (CC BY). Abstract read.
5. Europe PMC PMC12493062 — Gillispie-Taylor, Perspectives on Medical Education 2025-09-30 (CC BY). Abstract read.

Rejected: ERIC ED479379 (2003 bingo vs worksheet vocabulary review, n.s.) — eric.ed.gov at batch cap 3. Gerontology & Geriatric Medicine Bingocize paper — SAGE (banned). BMC Psychology 2025 recreational games — megajournal, avoided. MedEdPORTAL 2025 — CC BY-NC, not needed. NCTM Mathematics Teacher bingo-probability articles (1973, 1993, 2000) — paywalled. Indonesian bingo-vocabulary journals — low quality.

Search terms tried: findpapers "bingo probability", "bingo older adults cognition", "bingo game vocabulary learning children", "high contrast bingo vision older adults"; Europe PMC REST `TITLE:bingo AND OPEN_ACCESS:y`, `ABSTRACT:"bingo" AND (older OR elderly OR dementia)`, `… AND (vocabulary OR literacy OR reading)`; ERIC API `title:bingo AND probability`, `title:bingo AND (vocabulary OR words)`, `bingo AND "older adults"`.

## Original maths (writer's own)
- Pool = 24 words, so every card holds all 24; after k calls each card's marked set is a uniform random k-subset of the 24 non-centre squares, independent across cards.
- p(k) by inclusion–exclusion over 2^12 subsets of the 12 lines: Σ(−1)^{|S|+1} C(24−u, k−u)/C(24, k), u = distinct non-centre squares in S.
- P(no winner after k) = (1 − p(k))^n. Tie = P(game ends at k) − n·[p(k) − p(k−1)]·(1 − p(k))^{n−1}, summed over k.
- Results: 1 card median 14, certain by 20 (min blocking set = 5 squares); 4 players median 11, ties 17%; 12 → 9, 23%; 20 → 8, 26% (mean 8.32; Monte Carlo 20,000 games 8.31); 30 → 8, 28%; 40-word pool, 30 players → 12, 17%. 3×3 pre-reader, 12 pictures, 25 kids: line median 2; full card median 10, ties 51%. 4×4, 16 of 24, 12 players: median 8, ties 23%. Blackout, 40 words, 30 players: median 37.
- 24! = 620,448,401,733,239,439,360,000; ÷8 (dihedral symmetries) = 77,556,050,216,654,929,920,000.
