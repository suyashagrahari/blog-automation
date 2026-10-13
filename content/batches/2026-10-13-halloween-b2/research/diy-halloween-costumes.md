# Research brief — diy halloween costumes (row 59)

Batch `2026-10-13-halloween-b2` · slug `diy-halloween-costumes` · absorbs "homemade halloween costumes", "halloween costumes diy" · band 10,000+/mo · PLAN weak = 4.

## Phase 0 — first-party data

facts.md has no Halloween, costume or craft data (BRIEF §3). Used, all disclosed in prose:

- 48.3% of shared pages are opened on a phone (27,725 of 57,456 views), 2026-09-24: the finished build has to read in a phone-sized photo.
- Raksha Bandhan 2026 lead time, n = 89: 49.4% built on the day itself (the nearest festival analogue, labelled as Raksha Bandhan with its small n): argues for starting a 5–6 hour build early.
- Average views per created page: 11.1, 2026-09-24: used in the "wrong call" section.

`npm run facts` was NOT run (BRIEF §3). The template spec is product fact and is not counted toward the 3.

## Phase 1 — SERP (1 WebSearch, US-served index; Firecrawl disconnected)

Query: `diy halloween costumes`. WebSearch is not Google; the known incumbents (goodhousekeeping, today, parade, retailers) did not show up, so the real Google top 5 is probably stronger than this.

| # | Result | Fetch | Type / weak? | Structure and what it covers | Direct answer | Data / dates | Gaps |
|---|---|---|---|---|---|---|---|
| 1 | smstationery.com.ph (stationery shop blog) | 429, snippet only | weak (small shop blog) | Sheet ghost, mummy from old white shirt, cardboard cat mask + sock tail | n/a | none visible | no specs, no safety |
| 2 | xtool.com (laser-cutter brand blog) | 429, snippet only | brand content | Closet-based last-minute: sheet ghost + goggles, zombie makeup | n/a | none visible | not a making guide despite the brand |
| 3 | offcampus.umich.edu | 403, snippet only | weak (campus page) | Closet costumes, e.g. Mary Poppins | n/a | none | closet only |
| 4 | nbcwashington.com (also nbcmiami, nbcnewyork, nbcboston: one syndicated story) | fetched | news | Primary's costume concierge service; "benefits of DIYing" bullets | first para | 18 Oct 2023; "over 4,000 requests" (company claim) | it's a service story, not instructions |
| 5 | your.eastsussex.gov.uk | fetched | council blog (weak for intent) | 5 kids' costumes (superhero cape, felt ears and tail, no-sew tulle fairy, cardboard robot, sheet ghost) with What You'll Need / How to Make It | after a 90-word intro | 25 Oct 2024; no costs, no times | no skill level, hours, cost, durability or safety |
| — | ev27.clearout.io | not fetched | hijacked-subdomain spam | — | — | — | — |

Weak in top 9: about 5 (shop blog, campus page, spam, council page, syndicated duplicates). Gate 4 is not triggered.

## Phase 2 — gap

- **Table stakes:** materials + how-to steps, some cardboard, sheet and felt ideas.
- **Gap:** no page gives skill level, hours, cost or durability per build, none groups builds by material, none says how to join or finish materials (glue choice, cardboard scoring, sealing foam), and none deals with the safety risks specific to homemade costumes (no flame-resistance label, fluffy fill, masks and frames that block vision, reflective tape).
- **Stale:** NBC story 2023; East Sussex 2024.
- **Fan-out:** no-sew costumes; cheapest homemade costume; how long it takes; glue for felt; keeping cardboard from going soggy; painting EVA foam; are homemade costumes a fire risk; cardboard box costume safety for kids; starter tools; sending the photo.
- **Angle:** Wins by being the only post that gives each DIY costume a full build spec (materials, tools, skill 1–3, hours, labelled cost estimate, steps) grouped by core material, with homemade-specific CPSC and 16 CFR 1610 flame and visibility checks.

Sibling de-duplication: no idea repeats Batch 1 trio, group, best-friends or fancy-dress-for-couples (sheet ghosts, crayons, dice, puzzle pieces, mummy, scarecrow, robot-type builds, plague doctor, turnip lantern all avoided). The East Sussex cardboard robot was also left out. Low-effort and last-minute ideas are left to `easy-halloween-costumes`.

## Phase 3 — sources (all fetched and read)

1. **Bone, Bu, Sonke and Fancourt 2026, Scientific Reports** (CC BY), https://europepmc.org/article/PMC/PMC13031343, published 24 Feb 2026. ATUS sample, n = 11,144. Participatory arts (which includes "arts and crafts as a hobby") showed moderate happiness and, descriptively, the highest stress and sadness of 8 behaviours; in regression it was lower in pain and tiredness than physical activity. Subject: making and wellbeing. Caveat: the category bundles crafts with performing, writing and dancing.
2. **Marsh et al. 2022, Developmental Psychology** (APA Open Access), https://europepmc.org/article/PMC/PMC8958763, April 2022. 128 children aged 5–6 in the UK and India showed an IKEA effect (ηp² = .19), valuing a toy they built over an identical copy, whether or not they collaborated. Subject: valuing what you make. Caveat: toys, not costumes.
3. **CPSC Publication 100, Halloween Safety**, https://www.cpsc.gov/s3fs-public/100.pdf, footer 032012 (March 2012). Covers the flame-resistant label (labelled items can still burn), flimsy materials, baggy sleeves and billowing skirts, reflective tape (headlights; hardware, bicycle and sporting goods stores), mask eyeholes, makeup over masks, and soft, flexible swords. The cpsc.gov HTML page returns 403; the PDF was read in full.
4. **AAP, HealthyChildren.org Halloween Safety Tips**, https://www.healthychildren.org/English/safety-prevention/all-around/Pages/Halloween-Safety-Tips.aspx, last updated 29 Sep 2026 (a modification date, so no datePublished). Hats must not slide over eyes; reflective tape; flame-resistant labels. Used once in Batch 1, and the caps are per batch.
5. **16 CFR 1610.7** (eCFR), https://www.ecfr.gov/current/title-16/chapter-II/subchapter-D/part-1610/subpart-A/section-1610.7, no publication date. A plain-surface fabric is Class 3, "Rapid and Intense Burning", when the average burn time is under 3.5 s.

Searched without a usable result: "crafting wellbeing" (Crossref hits were T&F TEXTILE and The Design Journal, both banned; Europe PMC returned job-crafting papers), "making things by hand psychological benefits", "handcraft hobby mental health", "costume flammability burn injury" (0 hits), "textile fiber flammability burning rate cotton polyester" (flame-retardant chemistry only), "pedestrian retroreflective clothing night conspicuity" (cycling and equestrian only). Not used: nfpa.org (page rendered no text), UK OPSS (spent in Batch 1, avoided per prompt), nrf.com.

capcheck (2026-10-13): no domain at cap and no URL at cap. europepmc.org is cap-exempt.

## Audit summary

48 passed / 2 failed. Failed: (a) table first-party column, because no costume data exists; (b) swap test, because CPSC and AAP are general Halloween-safety pages that a kids or family costume sibling could reuse.
