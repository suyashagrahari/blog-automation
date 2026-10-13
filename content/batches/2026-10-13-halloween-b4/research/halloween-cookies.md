# Research brief: halloween cookies (row 200)

- Slug: `halloween-cookies` (free in Strapi, checked 2026-10-13: `data: []`)
- PLAN row: rank 200, theme food, absorbs "halloween cookie decorating ideas", weak 5, band 1,000-3,000/mo
- **Head term:** "halloween cookies" is a 2-word head term owned by large recipe publishers. Long-tail framing used in the H1 ("Halloween Cookies by Dough and Decorating Skill, With Fixes") while keeping the core words. Long-tail alternatives: "halloween cookie decorating ideas by skill level", "halloween cut-out cookies that don't spread", "royal icing halloween cookies for beginners".

## Phase 0: first-party data
facts.md read directly (no `npm run facts`). No Halloween or baking data exists. Used four platform-wide lines (2026-09-24): 48.3% phone opens, 90.9% publish rate (both in the first 150 words), 38.5% password rate, 11.1 views per page (in the gifting section). They bear only on the "cookies sent with a link" case, which the post says.

## Phase 1: SERP (WebSearch, US index, 1 search used of 2)

| # | URL | Type | Words / structure | Direct answer | Data and date | Format | Notes |
|---|---|---|---|---|---|---|---|
| 1 | scarymommy.com/halloween-cookies/ | Listicle, 15 ideas | ~900; H3 per idea, mostly Instagram embeds | No; pandemic-era intro | None; updated Oct 2021 | List, no table/FAQ | Thin, stale, links out to other recipes. **Weak** |
| 2 | inkbird.com/blogs/recipes/... | Appliance-brand blog, 10 ideas | ~2,500 incl. shop chrome | Buried after intro | None; 9 Oct 2025 | List + recipes | Thermometer seller's content marketing. **Weak** |
| 3 | crayonsandcravings.com/halloween-cookie-recipes/ | Food blog roundup, 8 recipes | ~1,200 | No | None | Tips block (gel colour, chill 30 min), cards | Only page with any troubleshooting (2 lines) |
| 4 | foodnetwork.com/.../halloween-cookies | Gallery, 25 recipes | ~1,800 over 25 slides | No | None; 4 Oct 2022 | Slideshow | Ghost sugar cookies with royal icing, black cocoa crinkles, skeleton gingerbread |
| 5 | silverspoon.co.uk/recipes/spooky-halloween-cookies | Sugar brand single recipe | ~600 | Recipe card | Nutrition per 32 g; updated 21/10/2025 | Ingredients + 9 steps | One dough, cutters, sugar paste |
| 6 | bakedbree.com/wprm_print/... | Print view of a recipe | — | — | — | — | **Weak** (print endpoint) |
| 7 | wideopencountry.com/halloween-cookies | Lifestyle roundup | not fetched | — | — | — | Mid |
| 8 | crayonsandcravings.com/?p=76958 | Duplicate of #3 | — | — | — | — | **Weak** (duplicate) |
| 9 | arquivo.ipam.org.br/... | Hijacked-subdomain AI spam | — | — | — | — | **Weak**, not analysed |

Weak in top 10: **5** (scarymommy, inkbird, bakedbree print, crayons duplicate, ipam spam). Gate 4 passes. All top-5 pages are competitors for this keyword and are neither cited nor linked.

## Phase 2: gap
- **Table stakes:** ghosts, mummies, bats, spiders, pumpkins; sugar-cookie base; royal icing or candy eyes.
- **Gap:** no page tags designs by dough and by decorating skill, none says which a child can decorate, none explains why cut-outs spread with evidence, none gives raw-flour or raw-egg-icing safety, none covers freezing dough vs baked cookies or nut-free batches. Only Crayons & Cravings gives two troubleshooting lines.
- **Stale data:** none of the five cites any data.
- **Fan-out sub-queries:** what dough for cut-outs; why cookies spread; royal icing consistency; how long icing takes to dry; colour bleed; is raw cookie dough safe; raw egg in royal icing; how far ahead to bake; can you freeze decorated cookies; gluten-free cut-outs; nut-free for school.
- **Angle:** wins by being the only post that tags every Halloween cookie design by dough, skill 1–3, active time and kid-suitability, and pairs it with sourced troubleshooting and safety none of the top 5 give.

## Phase 3: sources (all fetched 2026-10-13)
1. **Dadalı & Özcan 2026, Journal of Food Science 91(8)** (Wiley Open Access, not a megajournal; not SAGE/Elsevier/T&F/Frontiers). europepmc.org/article/PMC/PMC13454929. Full text read via Europe PMC REST: margarine 50 g / sucrose 24 g / flour 100 g control; spread ratio 2.56 (control) falling to 1.61 at 30% fat + 30% flour replacement with artichoke bracts; authors attribute spread to wheat gluten. Not in §10 or b1–b3.
2. **CDC, Raw Flour and Dough** (cdc.gov/food-safety/foods/no-raw-dough.html, dated 2025-11-24): most flour is raw; grinding/bleaching don't kill E. coli or Salmonella; outbreaks investigated 2016, 2019, 2021, 2023; children should not eat or play with raw-flour dough, crafts included.
3. **Food Standards Agency, Food allergy and intolerance advice for consumers** (gov.uk, published 2020-02-18, updated 2026-08-07): 14 regulated allergens incl. peanuts and tree nuts (almonds etc.); cross-contamination can happen at any point in the supply chain.
4. **USDA FSIS, Shell Eggs from Farm to Table** (updated 2024-11-20): avoid icing recipes using uncooked eggs/whites; use pasteurized dried egg whites.
5. **USDA FSIS, Freezing and Food Safety** (updated 2024-08-09): 0 °F food always safe, times are quality only; freezing inactivates, does not kill microbes.

Searches tried (findpapers, no budget): "cookie spread sugar fat dough", "sugar-snap cookie spread gluten", "biscuit dough fat replacement spread texture", "home baking wellbeing", "cookie spread during baking", "sucrose particle size cookie", "butter crystallization temperature dough", "royal icing", "gluten-free cookie dough rheology", "baking cooking intervention mental health". Most OA hits were MDPI Foods/Molecules (MDPI full in b4) or Elsevier (CRFS, Food Chem X, banned). No home-baking-wellbeing paper outside T&F/Frontiers was found. No study on royal icing consistency, colour bleed or icing drying exists in the results; those are labelled practice in the post.

The CDC URL I tried first (`/food-safety/foods/raw-flour-dough.html`) returns 404; the live page is `/food-safety/foods/no-raw-dough.html`. FDA flour and FDA allergen pages were first used, then swapped out on the orchestrator's cap note (fda.gov FULL in b4). No Wikipedia body link (en.wikipedia at b4 cap); structuredData sameAs pairs verified via Wikipedia API (not counted by the verifier).

## Sibling clash check
Read cookie/biscuit lines in all b1–b4 halloween blogs. Avoided: meringue ghosts/bones (b1 themes, b3 party food, b4 colours), witch's hat biscuits (b3 snacks), black-and-white cookies (b1 themes), "RIP" headstones (b3), pretzel broomsticks, cookie-cutter bats in pumpkins (b3), cherry drip on white icing (b4 colours). b4 `halloween-treats` and `halloween-desserts` were not on disk at final check (re-checked before emit); `halloween-crafts-for-toddlers` has no food crafts. 5-word overlap check against all halloween blogs: only template-spec and facts boilerplate remain.

## Caps
No fda.gov or who.int citations (both FULL per orchestrator). cdc.gov now 3 b4 posts (games-for-seniors, sleepover, this) = FULL; www.gov.uk now 3 (long-distance, desserts, this) = FULL; fsis.usda.gov 1 post; europepmc exempt. Verifier clean for this slug.
