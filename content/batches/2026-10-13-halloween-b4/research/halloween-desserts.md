# Research brief — halloween-desserts (row 199, b4)

Keyword: **halloween desserts** (absorbs "easy halloween desserts"; band 1,000–3,000/mo; plan weak = 5).

**Head-term flag.** Two-word head term; the domain cannot expect to win it. Long-tail framing used in the H1 ("Halloween Desserts for Every Host: 24 Cakes, Pies, Pots and Puds") while keeping the core words. Long-tail alternatives the page is built to compete on: "make-ahead halloween desserts for a crowd", "easy halloween desserts for two", "vegan gluten-free halloween desserts", "how to make desserts black without food colouring".

## Phase 0 — first-party data
No Halloween or food data exists in facts.md (BRIEF §3). Used: Raksha Bandhan 2026 lead time (labelled as nearest analogue, n = 89, different festival) to justify the make-ahead-first structure; 48.3% phone opens to justify the one-line-per-dessert format; 90.9% publish rate in the template section. `npm run facts` not run.

## Phase 1 — SERP (WebSearch, US index; 1 search)
| # | URL | Fetch | Words | Structure | Direct answer | Data / dates | Format | Weak? |
|---|---|---|---|---|---|---|---|---|
| 1 | stephaniessweets.com/top-20-halloween-desserts | 404 | — | — | — | — | — | weak (dead page ranking) |
| 2 | foodnetwork.com/…/halloween-desserts | 200 | ~4,800 (page text) | 71 recipe cards, H2 per recipe | none; gallery intro | dateModified 2025-09-25; no stats | no table, no FAQ schema | strong |
| 3 | aheadofthyme.com/25-best-halloween-desserts | 403 bot wall | snippet only | 25 recipes | — | — | — | weak (small blog) |
| 4 | restaurantware.ae/…/top-halloween-desserts | 200 | ~4,850 | 12 H3 foodservice picks, TL;DR, merchandising, FAQ | TL;DR at top | none dated | table + FAQPage | weak (B2B supplier, UAE, off-intent) |
| 5 | gypsyplate.com/the-best-halloween-desserts | 403 bot wall | snippet only | roundup | — | — | — | weak |
| 6 | thecookierookie.com/halloween-dessert-recipes | 403 | snippet only | roundup | — | — | — | weak |
| 7 | papernstitchblog.com (27 desserts) | not fetched | snippet | roundup | — | — | — | weak |

Weak in top 10: **6 of 7 unique domains** (only Food Network strong). Gate 4 passes.

Table stakes: dirt cups, ghost meringues, candy apples, spider/witch-hat cookies, pumpkin brownies/bars, jack-o'-lantern cake, cheesecake, bark. All pages are recipe galleries optimising for "ideas" volume.

## Phase 2 — gap
- Nobody groups desserts by **host situation** (make-ahead, crowd, two people, kids, free-from, regional).
- Nobody gives **make-ahead windows tied to an official storage chart**.
- Nobody covers **natural black/orange**, the **activated-charcoal caution**, the **Red No. 3 deadline** (2027) or the **UK six-colour warning**.
- Nobody separates Allhallowtide bakes (soul cakes, parkin, pan de muerto) from Halloween proper.
- Fan-out: what counts as a Halloween dessert; easiest; make the day before; for 20 people; for two; kids; vegan/GF; black without dye; is charcoal safe; Red No. 3 status; UK warning; how long pumpkin pie keeps; can custard pie freeze.

Angle: wins by being the only post that organises 24 plated/spoon desserts by host situation with make-ahead windows checked against the FoodSafety.gov chart and dated dye-regulation facts.

Sibling avoidance: b3 party-food (raspberry panna cotta, meringue bones, pumpkin bars with web, shattered-glass cupcakes, punch), b3 snacks (pumpkin-pie dip, yoghurt bark, witch-hat biscuits), b1 party-themes (dirt cups, meringue ghosts), b4 wedding (pumpkin/apple sponge, truffles), b4 colors-meaning (no reuse of its PBR/RSOS papers), b4 treats (hand-out/no-bake; read on disk, no clash), b4 cookies (on disk at final check; no clash). Barmbrack one line (b4 Ireland owns it).

## Phase 3 — sources (all fetched)
| Source | Claim used | Read |
|---|---|---|
| Europe PMC PMC7037180 — Spence 2019, *Experimental Psychology* (Hogrefe OpenMind) | ~80 years of evidence colour hue/intensity shapes flavour perception; >5,000 Science Museum visitors: red sweetest-looking drink colour, then blue, purple; orange rarely chosen | full text |
| Europe PMC PMC11920308 — Della Fontana et al. 2025, *Plant Foods for Human Nutrition* (Springer, CC BY) | n = 103; soy chocolate dessert liking 7.1 vs 4.9 for brea gum/black carob; ingredient information did not change liking | abstract only |
| poison.org/articles/activated-charcoal (NCPC, pub 2025-08-08, mod 2026-03-19) | adsorbs substances in gut, reduces absorption; aspirin overdose example | full |
| federalregister.gov 2026-15920 (5 Aug 2026) | Jan 2025 order (90 FR 4628) stayed by objections from 18 Feb 2025; stay lifted 5 Aug 2026; effective 15 Jan 2027 food, 18 Jan 2028 ingested drugs; male-rat cancer, Delaney Clause | full (also read 2025-00830 and the fda.gov page, not cited — fda.gov FULL) |
| gov.uk/government/publications/food-additives/food-additives (FSA, 9 Jan 2018) | six colours E102/E104/E110/E122/E124/E129 must carry "May have an adverse effect on activity and attention in children" (England, NI, Wales) | full |
| foodsafety.gov cold food storage chart (reviewed 19 Sep 2023) | pumpkin/pecan pie 3–4 days fridge, 1–2 months frozen; custard/chiffon pie 3–4 days, do not freeze | full |

Paper searches (findpapers + Europe PMC REST): "food colour flavour perception", "colour of food expectations taste identification", "artificial food colours hyperactivity children", "dessert colour sweetness perception"; Europe PMC title queries on colour × taste. Rejected: Spence 2015 *Flavour* (Springer bot wall), Wieneke 2018 *i-Perception* (SAGE, banned), PLOS ONE/Sci Rep/MDPI hits (megajournals).

Verification only (not linked): Wikipedia summaries for Soul cake, Parkin, Pan de muerto, Barmbrack; Wikipedia API for sameAs QIDs (Dessert Q182940, Halloween Q251868, Erythrosine Q420101, Soul cake Q7564388, Pan de muerto Q2720163, FDA Q204711).

Search budget: 1 WebSearch + 1 DuckDuckGo HTML query (charcoal source) = 2.

## Brief claims found inaccurate
- "FDA's 2025 Red No. 3 revocation": the 16 Jan 2025 order was stayed by objections and only reinstated on 5 Aug 2026.
- "verify on food.gov.uk": the FSA food-additives page now redirects to gov.uk.
- "activated charcoal medication interaction — verify with an official source": no fetchable official page states the drug interaction explicitly (NHS, NCCIH, MedlinePlus 404; StatPearls reCAPTCHA). Poison Control's absorption mechanism is cited and the post's wording stays within it.
