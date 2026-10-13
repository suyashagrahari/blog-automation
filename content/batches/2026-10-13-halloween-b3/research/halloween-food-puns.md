# Research brief — halloween food puns (row 139)

- Slug: `halloween-food-puns` (Strapi check 2026-10-13: not taken)
- Absorbs: "halloween puns for food"
- Category: `festive-beats` · templates: `/happy-halloween`, `/happy-halloween-premium`

## Phase 0 — first-party data
No Halloween usage data exists in `content/facts.md`. Used platform-wide lines, labelled as such:
- 48.3% of shared pages opened on a phone (27,725 of 57,456 views), measured 2026-09-24
- 11.1 average views per created page, measured 2026-09-24
- Raksha Bandhan 2026 lead time (n = 89; 49.4% built on the day), labelled as the nearest analogue
`npm run facts` was not run (BRIEF §3).

## Phase 1 — SERP (WebSearch, US index, 1 query; lower confidence on rank order)
| # | URL | Type | Words / structure | Direct answer | Food coverage | Data / dates | Notes |
|---|---|---|---|---|---|---|---|
| 1 | static.intrafocus.com/?p=31982 | Hijacked-subdomain spam | — | — | — | — | Weak, not analysed |
| 2 | static.intrafocus.com/?p=59434 | Hijacked-subdomain spam | — | — | — | — | Weak, not analysed |
| 3 | romper.com/life/halloween-puns | General pun list, 55 lines (2021, upd. 2022) | ~1,000 words; H2s by monster type | Intro then list | One "drink puns for adults" group (alcohol) | None | No food labels, no allergens |
| 4 | dev.ourstate.com/tag/puns | Hijacked-subdomain spam | — | — | — | — | Weak |
| 5 | wordstream.com/blog/halloween-puns | Marketing pun list | 403 — snippet only | — | — | — | Judged from snippet |
| 6 | wideopencountry.com/halloween-puns | 99 general puns, Q&A style | ~2,000 words | After 2 intro paras | Scattered food jokes ("Fettuccine Afraid-o") | None | No grouping by use |
| 7 | picsart.com/blog/halloween-puns | ~100 puns in 10 groups + FAQ (Oct 2025) | ~1,500 words | Intro | Candy group, pumpkin group | None | Competitor-adjacent (design tool) — not cited |
| 8 | jira.phpfox.com/p/halloween-puns | Hijacked-subdomain spam | — | — | — | — | Weak |
| 9 | aol.com (Parade syndication) 55 pumpkin puns (Oct 2024) | Pumpkin-only list | ~1,200 words | After intro | Pumpkin only | None | Parade is a known incumbent |

Weak count: 4 of 9 spam; 0 of 9 is a food-puns page as such. Top 5 analysed: romper, wordstream (snippet), wideopencountry, picsart, aol/Parade.

## Phase 2 — gap
- Table stakes: candy, pumpkin and drink puns; one-liners grouped by theme.
- Gap: nobody organises food puns by *use* (dish label, chalkboard, drinks jug, caption, lunchbox), nobody says how to make a label readable, nobody mentions allergens, and none cites any evidence on whether a fun name changes what people take.
- Stale data: none — the pages cite no data at all.
- Fan-out: what is a food pun; puns for buffet labels; café chalkboard puns; Halloween drink names for kids; candy puns; pumpkin puns; lunchbox notes; do I need allergen labels; which allergens; do fun names make people eat more.
- Angle: wins by being the only post that treats food puns as working dish labels — 64 original lines by food and use, a label-tent method with the 14 UK allergens and the FSA written-vs-verbal confidence figure, and the one buffet study on dish names.

## Phase 3 — sources (all fetched)
| Source | Claim used | Read | Subject test | Swap test |
|---|---|---|---|---|
| Gavrieli et al. 2022, BMC Public Health, europepmc PMC9710164 | 4 buffet cafeterias; appealing names +54.5% vs +10.6% food per plate; ~7% more grams; English-speaking sites only; descriptive names, not puns | Abstract + metadata from full-text XML (CC BY 4.0) | Pass (dish naming) | Pass |
| Roose & Mulier 2020, Foods, europepmc PMC7022983 | Healthy food: single-sense (taste) ads raise taste perceptions more than multi-sense ads | Abstract only | Pass (food wording and taste expectation) | Pass |
| FSA, Allergen guidance for food businesses, gov.uk (2020, upd. 2026-07-17) | 14 allergens; businesses in England/NI/Wales must declare; chalkboard is an accepted written method for loose food | Full page | Pass (food labelling) | Fails — could sit in party-food/snack posts |
| FSA, Ipsos, Opinium 2025, science.food.gov.uk | Food and You 2 Wave 9: 83% confident in written vs 67% verbal allergen info | Relevant sections read | Pass | Fails — same reason |

findpapers queries tried: "descriptive menu labels food choice", "food names taste expectations labels", "indulgent descriptions vegetables taste-focused labels", "children vegetable names attractive school lunch", "product name wordplay brand humor consumer", "menu font size legibility older adults reading". Avoided Wansink-lab papers (retractions) and paywalled JAMA IM 2017. No Taylor & Francis, Sage, Frontiers or Elsevier sources.

Capcheck (2026-10-13): no banned URLs; gov.uk now at 2 b3 posts; journal Foods at 2 b3 posts; fda.gov unused here (still 1 slot left).

## Overlap check
5-word overlap against all b1/b2/b3 blog files: only shared template/fact boilerplate. "Mint condition" (b1 halloween-puns) replaced. No line copied from the SERP pages (checked against romper, wideopencountry, picsart, aol lists).
