# Research brief — group halloween costumes (row 23)

- Slug: `group-halloween-costumes` · theme friends · also covers "halloween ideas for groups", "halloween ideas for 4 people"
- Siblings (no overlap, no /blog/ links): `halloween-costumes-for-best-friends` (duos), `trio-halloween-costumes` (exactly 3), `halloween-party-themes` (décor), `halloween-marketing-ideas` (office/brand). This page = 4+ people, organised by headcount.
- Slug free in Strapi (checked 2026-10-12, total 0).

## Phase 0 — first-party facts
No Halloween or costume data exists in facts.md. Used, with disclosures in body prose:
- 48.3% of shared pages opened on a phone (platform-wide) — framed as "your group photo is judged on a phone".
- Raksha Bandhan 2026 lead time: 49.4% built on the day (n = 89) — labelled as a different festival and a small sample.
- Not one of 89 Raksha Bandhan pages built more than 7 days ahead — used in the coordination section as the nearest analogue.
Template spec (/happy-halloween, /happy-halloween-premium) used as product fact only.

## Phase 1 — SERP (Firecrawl, location United States, 2026-10-12)

| # | URL | Type | Weak? |
|---|---|---|---|
| 1 | buzzfeed.com/alannaokun/just-dont-separate | 30 reader photos, ~2015 images, no text per item | weak (stale UGC) |
| 2 | halloweencostumes.com/group-costume-ideas.html | retailer category + "Group Builder" 2–20 | weak (retailer) |
| 3 | pinterest.com board | board | weak |
| 4 | teenvogue.com best-group-halloween-costume-ideas | 15 pop-culture ideas, 2026-stamped | strong |
| 5 | spirithalloween.com group costumes | retailer | weak |
| 6 | goodhousekeeping.com 85 group costumes | 85 shoppable items, affiliate | strong |
| 7 | amazon.com search | retailer | weak |
| 8 | fancydress.com blog, 60 ideas (2025-03-06) | retailer blog | weak |
| 9 | disneystore.com group costumes | retailer | weak |
| 10 | pinterest.com ideas page | board | weak |

Weak count: 7/10 (matches plan). serps.md had no measurement for this keyword.

### Top-5 comparison (pages fetched via ctx_fetch_and_index)

| Page | Size / structure | Where the answer lands | Data cited | Format | Optimising for |
|---|---|---|---|---|---|
| GH 85 group costumes | ~85 H2 product cards, short intro | none; straight into products | none | images, shop buttons, affiliate | affiliate clicks, pop-culture freshness (KPop Demon Hunters, Wicked) |
| Teen Vogue 15 ideas | 15 H2, one paragraph each (not word-counted) | intro para ("stand out in a large crowd") | none | images, numbered H2 | 2026 pop culture, "2026" in title |
| BuzzFeed 30 | 30 H2, captions only | none | none | UGC photos | evergreen viral list |
| HalloweenCostumes.com | category page + themed H3 blocks (Disco, etc.) | Group Builder tool "2 to 20" | none | product links | product sales |
| FancyDress.com 60 | 60 H4 items, ~2 sentences each | intro | none | product links, UK spelling | UK fancy-dress sales |

Table stakes: pop-culture ensembles (Scooby gang, Wizard of Oz, Addams Family), crayons, food sets, families.
Gap: nobody sorts by headcount with numbers (only HC's tool asks for size), nobody gives cost per person or hours, nobody addresses dropouts, nobody covers how the group decides. No page cites any data at all.
Fan-out: costumes for 4 / 5 / 6 / 10+ people; office group costumes; family group costumes; cheap/last-minute group costumes; how to choose; how much it costs.

Angle: wins by being the only post that sorts by headcount with hours, cost per person and dropout tolerance, plus a coordination plan (shared doc, approval vote, budget cap, one bulk buyer), grounded in group-synchrony and Halloween deindividuation research.

## Phase 3 — sources (all fetched)

| Source | What it says (verified) | Access |
|---|---|---|
| Jackson et al. 2018, Scientific Reports 8:127 — europepmc.org/article/PMC/PMC5760525 | 172 participants (recruited in Dunedin), Forsyth-Barr Stadium; synchrony and arousal each → larger groups, tighter clustering, more cooperation in a free-rider dilemma; synchrony's effect on clustering/cooperation only with arousal | Full text read (Europe PMC XML; nature.com bot-blocked). CC BY |
| Johnson & Downing 1979, JPSP 37(9):1532–1538 — psycnet doiLanding | 2×2: deindividuation × costume cue (nurse uniform vs Klan-like robe). No main effect of deindividuation; main effect of cue; deindividuation significantly increased prosocial responses with positive cues | Abstract only (paywalled) |
| Diener, Fraser, Beaman & Kelem 1976, JPSP 33(2):178–183 — psycnet record 1976-20842-001 | ~1,300 trick-or-treaters observed by concealed raters, chance to steal candy and money; more stealing with anonymity and in groups; Anonymity×Group interaction; highest among anonymous children in groups with altered responsibility (one child made responsible) | Abstract only; closed access per OpenAlex (no repository copy) |
| FDA, Decorative Contact Lenses for Halloween and More | Prescription required; never buy from Halloween/novelty stores; "Don't share your contact lenses with anyone else!" Content current as of 10/22/2024 | Open |

Brief-claim check: the brief described Diener 1976 as children "taking extra candy". The abstract says candy and money, and the strongest effect involved a group where one child had been made responsible. It is NOT open access. Johnson & Downing found anonymity alone had no main effect — reported that way in the body.

Avoided: nrf.com (capped), doi.org (linked publishers instead), Frontiers, Elsevier, SAGE (Psychological Reports 1979 "Halloween Masks and Deindividuation" is SAGE — excluded), Taylor & Francis. Best-friends sibling had no files on disk at write time, so no overlap is possible from its side yet; Jackson 2018 / Diener / Johnson & Downing are flagged here for it to avoid.

findpapers queries run: "deindividuation costume Halloween Diener 1976", "synchrony cooperation group cohesion", "shared appearance clothing group identity".

Searches used: 2 Firecrawl (SERP; one to locate the Johnson & Downing record). Firecrawl scrape used for two psycnet abstracts (ctx_fetch got HTTP 403) and one failed CPSC URL (404).

## Not sourced (labelled in body)
Cost per person and effort hours are our build estimates. No non-competitor source prices group costumes, and nrf.com is capped.
