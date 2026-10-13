# Research brief — halloween ideas for toddlers (row 108)

Slug `halloween-ideas-for-toddlers` · absorbs "halloween activities for toddlers" · ages 1–3 only · batch 2026-10-13-halloween-b3 · written 2026-10-13.

## Phase 0 — first-party data
No Halloween or toddler data exists in facts.md (BRIEF §3). Used three site-wide lines, labelled site-wide in the body:
- 48.3% of shared pages are opened on a phone (27,725 of 57,456 views) — measured 2026-09-24
- Average views per created page: 11.1 — measured 2026-09-24
- 90.9% of started pages are actually published and shared (4,724 of 5,199) — measured 2026-09-24

The relevance is indirect (sending pumpkin-patch photos to grandparents who live elsewhere). Template-spec facts (six photos, Family mode question, Kids tone, premium voice note) are product fact, not counted.

## Phase 1 — SERP (2 searches used)
1. **WebSearch (US index)**, "halloween ideas for toddlers": WebSearch worked (it was not capped). Results: 4 × halloween.com query-string doorway URLs, twinkl.com (resource page, about 2 words served to the fetcher), twinkl blog (costumes), static.intrafocus.com (hijacked-subdomain spam), mumandyou.com, old.langmai.org (spam).
2. **DuckDuckGo HTML, lower confidence**, "halloween activities for toddlers": busytoddler, kidactivitieswithalexa, midgeo, busybloomingjoy, craftsonsea.co.uk, taminglittlemonsters, happiestbaby, proudhappymama, teaching2and3yearolds, playpartygame.

**Weak count in the top 10 (WebSearch SERP): 6.** These are the 4 halloween.com doorway URLs, intrafocus spam and langmai spam. Gate 4 does not apply.

| Page | ~Words | Structure | Choking mentions | AAP/CDC cited | Ages in months | Minutes | Candy rules | Scared toddler | Research |
|---|---|---|---|---|---|---|---|---|---|
| busytoddler.com | 1,465 | 3 H2 groups (sensory, crafts, easy), FAQ | 0 | no | no | no | no | no | none |
| kidactivitieswithalexa.com | 1,483 | 11 H3s, product plugs | 0 | no | partly ("2-year-olds") | no | no | no | none |
| midgeo.com | 5,942 | 24 H3s in 5 groups, "Parent Tips" | 3 (googly eyes) | no | under-2 group | 1 | no | no | none |
| busybloomingjoy.com | 6,065 | 24+ crafts, roundup of other blogs | 0 | no | no | 1 | no (lollipop craft) | no | none |
| happiestbaby.com | 1,869 | 14 H2 crafts/games | 0 | no | no | 2 | no (candy bark activity) | no | 1 "research" mention |

Fetched each page with a fetch inside ctx_execute and counted headings and keywords. twinkl served no body text, so it was judged from its snippet only.

## Phase 2 — gap
- **Table stakes:** sensory bins, crafts, simple games, pumpkin play, storytime.
- **Gap:** none of the five gives an age in months, minutes, supervision level and a choking flag per activity, and none cites the AAP or CDC. None covers toddler candy rules or what to do when a costume scares the child. Rice and similar small fillers appear without any warning.
- **Fan-out:** what to do with a 1-year-old; safe sensory-bin fillers; can toddlers eat candy / lollipops; how many houses; trunk-or-treat; why toddlers fear costumes; pumpkin patch length; board books; sharing with far-away grandparents.
- **Angle:** the only post that tags all 26 toddler activities with age in months, minutes, supervision and a choking flag, grounded in AAP/CDC candy rules, a 4,227-case aspiration study and a 1,285-twin stranger-fear study.

## Phase 3 — sources (all fetched; full text read unless noted)
| # | Source | What it supports | Date |
|---|---|---|---|
| 1 | AAP, HealthyChildren.org, Choking Prevention (a different URL from the Halloween-Safety-Tips page that b1/b2 used) | most choking deaths from balloons, balls, marbles, toy pieces, foods; keep high-risk foods until 4+; hard/gooey/sticky candy, gum, nuts, seeds, marshmallows, grapes, hot dogs; toys that fit in the mouth | last updated 2026-02-27 (no publication date, so `dateModified` only) |
| 2 | CDC Infant & Toddler Nutrition, Choking Hazards | round or hard candy, jelly beans, caramels, gum drops, gummies; whole beans; whole grain kernels | 2026-03-11 |
| 3 | Craig et al. 2024, IJERPH (MDPI, CC BY), Europe PMC PMC11432191 | sensory play a key element in infant/toddler cognitive, physical, social–emotional development; sand and water play build fine motor skills | 2024-09-20 |
| 4 | Wang et al. 2024, Scientific Reports (CC BY), PMC11220051 | 4,227 FBA cases; median age 19 months; 63.28% aged 1–2; more than four-fifths nuts, seeds and beans | 2024-07-02 |
| 5 | Brooker et al. 2013, Developmental Science, PMC4129944 (author manuscript; full text read on pmc.ncbi, linked via Europe PMC) | N = 1,285; stranger fear trajectories 6–36 months: 42.3% steep increase, 32.9% slow increase, 11.8% high-stable, 12.1% decreasing | 2013-06-08 |

- **Avoided:** PMC10811631 (used by b2 party-favors for hard candies), the healthychildren Halloween-Safety-Tips URL (b1/b2), and the b1/b2 fear papers (PMC2882043, EJ795855, Hoffner & Cantor, PMC12905873). Frontiers hits were excluded: PMC11253214 masks/toddlers and PMC9160792 food-choking regulation.
- **Searches tried for the costume/mask fear source:** findpapers "young children fear of masks costumed characters" and "normative fears toddlers infancy stranger fear development". Europe PMC title queries: masks + toddlers/infants + fear; "fears" + toddler/preschool; social referencing. No open-access toddler study of fear of costumes or masks was found. Brooker 2013, on fear of strangers, is the closest, and the body says it measured strangers, not costumes. The FSSIP (PMC9972891) includes a "clowns" item for under-5s, but it was not cited.
- **Board books:** existence, edition, publisher and page count were checked in the Open Library search and editions API on 2026-10-13. Where Is Baby's Pumpkin? (Katz, Little Simon 2006, board, 14p), That's Not My Witch... (Watt, Usborne 2017, 10p), Spooky Pookie (Boynton, board, 18p), Little Blue Truck's Halloween (Schertle/McElmurry 2016, board, 16p), Llama Llama Trick or Treat (Dewdney 2015, 14p). No reviews. Open Library was not linked, to stay at 5 outbound sources.
- **Wikidata QIDs verified (Wikipedia API):** Halloween Q251868, Toddler Q1340307, Choking Q19275831, Stranger anxiety Q511454, Trunk-or-treating Q130566584, AAP Q463305, CDC Q583725.

## Sibling de-duplication
- I read the H2s and H3s of the b1 crafts-for-kids, b2 costume-ideas-for-kids, family-halloween-costumes and party-games-for-kids posts, and of the b3 ideas-for-kids, jokes-for-toddlers and family-of-3 posts. Activity 4 was changed from "spider dig in oats" to "bubble cauldron" because the b3 kids hub has "Spider hunt in orange rice".
- A 5-gram overlap check against all b1, b2 and b3 files leaves only verbatim template strings ("Will you be my favourite little pumpkin?") and generic phrases such as "the American Academy of Pediatrics".
- Slug is free in Strapi (empty result on 2026-10-13). `festive-beats` is a live category.
