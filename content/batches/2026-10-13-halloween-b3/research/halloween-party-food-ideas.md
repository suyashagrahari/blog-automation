# Research brief: halloween party food ideas (row 110)

- Slug: `halloween-party-food-ideas` (free in Strapi, checked 2026-10-13). Absorbs "halloween party food", "halloween party appetizers".
- Category `festive-beats`; templates `/happy-halloween` (mandatory) and `/happy-halloween-premium` (oneOf).
- Head-term note: a 4-word, high-volume (3,000–10,000/mo) query. Recipe sites (Delish, Allrecipes, Food Network, Taste of Home) normally own it; they did not appear in this US index sample. Long-tail alternatives this post also serves: "make ahead halloween party food for adults", "allergen friendly halloween party food", "how long can halloween buffet food sit out".

## Phase 0: first-party data
No Halloween or food data exists in facts.md (BRIEF §3). Used three lines, labelled in prose:
1. Raksha Bandhan 2026 lead time (49.4% built on the day itself), n = 89, labelled as a different festival and nearest analogue.
2. 86.1% of the on-time Raksha Bandhan pages built within 24 hours of the day.
3. 48.3% of shared pages opened on a phone (platform-wide).
`npm run facts` NOT run (BRIEF §3).

## Phase 1: SERP (searches used: 1 WebSearch, US index; Firecrawl 0)
WebSearch worked on the first try (the BRIEF expected it might be capped).

| # | URL | Type | Words | Structure | Direct answer | Data / dates | Format | Weak? |
|---|---|---|---|---|---|---|---|---|
| 1 | funboy.com/blogs/funboy-life/halloween-party-food | Pool-float / party retailer blog | ~2,250 (incl. shop chrome) | H1 + 13 numbered H2 recipes + 3-question FAQ | None; straight into recipes | "5–6 bites per guest per hour"; no dates, no sources | Recipe steps, "party pro tip"; suggests dry ice in punch "if you're feeling theatrical" with no warning | Yes (retailer) |
| 2 | assets.punchbowl.com/p/halloween-party-food-ideas | E-invite competitor (assets subdomain) | ~720 | H1 + inline list, no H2 content | One-line definition | None | Short list (carrot pumpkin platter, etc.) | Yes |
| 3 | greenvelope.com/blog/?p=7653 | E-invite competitor | 403, judged on snippet only | Sweets and desserts table | n/a | n/a | n/a | Yes |
| 4 | sugarandcloth.com/halloween-food-ideas/ | Lifestyle/recipe blog, "50 Best" | 403, judged on snippet only | 50-item roundup | n/a | n/a | n/a | No |
| 5 | fosterwales.blaenau-gwent.gov.uk/en/easy-halloween-party-food-ideas | Council fostering service page | ~1,550 (incl. chrome) | H1 + short list | None | Dated 2021-10-15 | Kid-oriented list | Yes |
| 6–9 | blaenau-gwent.fosterwales.gov.wales (duplicate), pocketchangegourmet.com, care.com (kids), simplyscratchmade.com | — | not fetched | — | — | — | — | 2 weak (duplicate council page, care.com) |

**Weak count in the top 9 returned: 6** (funboy, punchbowl assets, greenvelope, fosterwales ×2, care.com). Gate 4 passes. All of these are competitors or SERP incumbents: none cited or linked.

## Phase 2: gap
- Table stakes: a long list of themed dishes (eyeball, mummy, graveyard, pumpkin shapes), a punch, a dessert.
- Gap: none gives a make-ahead window, servings, cost per serving or allergen flags per dish; none groups by format; none mentions the 2-hour rule or hot/cold holding temperatures; the one dry-ice mention is unsafe; none labels vegan/GF/nut-free dishes; none says why colour choice matters.
- Stale data: fosterwales page dated 2021.
- Fan-out: make-ahead Halloween food; adult appetizers; mains for a crowd; vegan/GF options; how long food can sit out; dry ice in drinks; spooky without food colouring; black/blue food; labelling allergens.
- Angle: wins by being the only post that gives every dish a make-ahead window, cost per serving and nine-allergen flags, backed by the FDA 2-hour rule and a plating-colour study, using SubhSandesh's Raksha Bandhan lead-time data as the case for cooking ahead.
- Siblings avoided: b1 halloween-party-ideas (quantities, budget table, black bean chilli cauldron, cracker tombstones in dip, olive eyeballs, blood-orange mocktail, CDC NIOSH dry ice, fda.gov food-allergies URL) and b2 halloween-party-activities (mummy flatbread bar, caramel-apple bar, mocktail potion line, spiked cider). SERP dishes avoided: ghost pizza bagels, witch fingers, mummy dogs, eyeball caprese/deviled eggs, dirt cups, frozen glove ice, carrot pumpkin platter, spider olive focaccia. Kid snacks left to row 111.

## Phase 3: sources (all fetched 2026-10-13)
| Source | What it says (verified) | Date | Read |
|---|---|---|---|
| europepmc.org/article/PMC/PMC12651177, Silva et al., *Foods* (MDPI), CC BY | n = 295; red 7.27, blue 7.03, yellow 6.82 acceptance; blue: disgusted 72%, no appetite 74%; tableware and arrangement shaped emotion; photos, Brazilian consumers | 2025-11-07 | Abstract plus intro of full text |
| europepmc.org/article/PMC/PMC10602275, Rosa et al., *PLOS ONE*, CC BY | n = 35; no difference haute cuisine vs traditional in affect, physiology, behaviour; younger preferred traditional | 2023-10-26 | Abstract plus discussion |
| europepmc.org/article/PMC/PMC10208358, Park & Vanderwal, *J Chem Health Saf* (ACS), CC BY | Dry ice sublimes at −78.5 °C into CO2 heavier than air; used for dramatic visual effects; most deaths in confined indoor spaces | 2023-05-08 | Full text |
| fda.gov … /serving-safe-buffets | 2-hour rule; 1 hour above 90 °F; hot ≥140 °F; cold ≤40 °F; some warmers only 110–120 °F; replace dishes rather than refill | Content current 2024-03-05 (no pub date) | Full page |
| fda.gov … /food-allergies-what-you-need-know | Nine major allergens; FASTER Act signed 23 April 2021; sesame effective 1 January 2023 | Content current 2024-08-16 | Full page |

findpapers queries: "food presentation visual appeal liking", "plating art presentation taste perception", "food colour expectation flavour identification", "buffet food left at room temperature bacterial growth time", "dry ice ingestion injury"; plus a Europe PMC title search for "dry ice". No Frontiers, SAGE, T&F, Elsevier-published, arXiv or predatory venues cited. Elsevier-hosted *Current Research in Food Science* hits rejected. Dry ice: the CDC NIOSH page (used by b1) was avoided as asked; poison.org and university EHS pages returned 404/403.

capcheck 2026-10-13: no domain at cap; fda.gov now at 2 posts in b3 (mine plus one sibling). europepmc.org is cap-exempt; the three papers (PMC12651177, PMC10602275, PMC10208358) are not used elsewhere in b1–b3.

## Notes for the orchestrator
- Prompt's claim that WebSearch "is probably still capped": false this session. One call returned results.
- Prompt said recipe sites would be competitors; they were absent from the US-index results returned, so the measured top 5 was retailers, e-invite competitors and a council page.
- Costs per serving are my own estimates (US supermarket prices, October 2026), labelled as such in the body. They were not sourced.
