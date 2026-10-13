# Research brief — things to do on halloween night (row 91)

- Slug: `things-to-do-on-halloween-night` · theme party · absorbs "what to do on halloween night" · demand unmeasured (plan band 3,000–10,000/mo).
- Batch: 2026-10-13-halloween-b2 · written 2026-10-13.

## Phase 0 — first-party data

No Halloween usage data exists in facts.md (BRIEF §3). Platform-wide lines used, labelled as such:
- 48.3% of shared pages are opened on a phone (27,725 of 57,456 views) — 2026-09-24
- 90.9% of started pages are published and shared — 2026-09-24
- Average views per created page: 11.1 — 2026-09-24
- Raksha Bandhan 2026 lead time, n = 89: 49.4% built on the festival day itself — 2026-09-09. Mandatory disclosures (different festival, small n) are in the body prose.

The template spec (`/happy-halloween`, `/happy-halloween-premium`) is first-hand product fact. The premium **optional unlock time** is the one product feature that genuinely fits "the night of": set it to midnight and the link shows only a name and a countdown until then.

## Phase 1 — SERP

Tooling: Firecrawl MCP disconnected; **WebSearch** (US-served index), **1 search** used ("things to do on halloween night"). Mid-task the coordinator reported WebSearch had hit its session cap; my one search had already returned. Two DuckDuckGo HTML fetches were used for **source discovery only** (Joel Best page; MMWR 1997 URL), not as SERP measurement. The keyword is not in `content/keywords/2026-10-12-halloween-global/serps.md`, so there is no corroborating measured SERP.

Top 10 as returned (9 results):

| # | Result | Type | Weak? |
|---|---|---|---|
| 1 | static.intrafocus.com/?p=40988 | hijacked-subdomain spam | weak |
| 2 | commons.bcit.ca/evolution1079/?p=148332 | hijacked-subdomain spam | weak |
| 3 | netbox.point-broadband.com/?p=34007 | hijacked-subdomain spam | weak |
| 4 | gleaner.rutgers.edu tag feed (RSS) | raw feed | weak |
| 5 | today.com "59 Halloween Activities…" | incumbent listicle | strong |
| 6 | thehillernewspaper.org (2021 school paper) | 5-item student opinion piece | weak |
| 7 | funnygirlsshow.co.uk "Top 20 Things to Do on Halloween" | venue marketing blog | weak |
| 8 | abmcollege.com "Top 5 Spooktacular…" (2023) | college news post | weak |
| 9 | airtalkwireless.com "25 fun ideas" | telecom brand blog (403, snippet only) | weak |

**Weak count: 8 of 9.** Gate 4 passes comfortably. The plan's "weak 5/10" understates it on this index.

### Top-5 analysed pages (spam excluded)

| Page | Words / structure | Where the answer is | Data cited (date) | Format | Tone / optimising for |
|---|---|---|---|---|---|
| today.com (rcna34716, updated for 2026) | ~59 H2 items, ~3,500 words | after 5-para intro | none | H2 list, affiliate/shop links, no table, no FAQ | 3rd person, breezy; season-long "activities" (pumpkin painting, matching T-shirts, cookie swap) not the night itself |
| funnygirlsshow.co.uk (11 Oct 2025) | 20 H2s, ~2,200 words | item 1 is the venue's own drag show | none | list + "planning" close; mentions UK weather contingency in one line | venue promotion |
| abmcollege.com (31 Oct 2023) | 5 H3s, ~700 words | after intro | none | list | generic: carving, costume contest, home haunted house, outdoor movie |
| thehillernewspaper.org (26 Oct 2021) | 5 numbered paras, ~350 words | para 2 | none (COVID note) | numbered prose | teens "too old to trick-or-treat" |
| airtalkwireless.com | 403 — snippet only ("25 fun ideas for every kind of celebration") | n/a | n/a | n/a | n/a |

## Phase 2 — gap

- **Table stakes:** trick-or-treat, handing out candy, scary film, party, haunted attraction, carving, costume contest.
- **The gap (none of the five do it):** (1) a time-of-night structure (5 pm → midnight); (2) sorting by who the reader is (solo, introvert, night shift, not celebrating, the person at the door); (3) cost and indoor/outdoor per idea; (4) a rain plan beyond one line; (5) any sourced safety: no page cites the hour of peak child-pedestrian risk, the candy-poisoning myth evidence, or nut-allergy risk on Halloween.
- **Stale data:** none cited at all on any page.
- **Fan-out sub-queries:** what time does Halloween night start/end; what to do on Halloween night alone / as an introvert; what to do if you don't celebrate; what to do on Halloween night with kids/teens/at work; what to do if it rains; is it safe / should I check candy; what is a teal pumpkin; what to do at midnight on Halloween.
- **Angle:** wins by being the only post that plans 31 October as a 5 pm to midnight timetable sorted by who you are, with cost and indoor/outdoor on every idea and a safety block sourced to CDC and UK crash data, the Joel Best candy-myth record and a CMAJ nut-anaphylaxis study, grounded in SubhSandesh's 48.3% phone-open rate and the 49.4% same-day build share (Raksha Bandhan analogue) for the midnight send.

## Phase 3 — sources (all fetched)

| Source | What it says (verified) | Read | Cap status |
|---|---|---|---|
| cdc.gov MMWR 46(41) 1997, "Childhood Pedestrian Deaths During Halloween — United States, 1975–1996" | 4 p.m.–10 p.m. window; 89 deaths among 5–14-year-olds on 31 Oct vs 8,846 on all other evenings; average 4 vs 1 per evening, fourfold; midblock crossing and dark costumes as risk factors; urges constant adult supervision | full text | cdc.gov in 1 other b2 post (costume-ideas-for-kids) → 2 |
| europepmc PMC8430693 — Hsu et al. 2021, IJERPH (CC BY) | UK STATS19 1990–2017, 73,587 pediatric casualties; casualties higher 17:00–18:59 on Halloween; KSI odds 34.2% higher 17:00–17:59 (OR 1.342) | abstract (full text open) | not in b2; used once in b1 (halloween-in-the-uk) |
| europepmc PMC7532006 — Leung et al. 2020, CMAJ | 1,390 pediatric anaphylaxis cases 2011–2020, 4 provinces; Halloween IRR unknown nuts 1.66, peanuts 1.86 vs rest of year; risk higher age 6+ | abstract only (CMAJ PMC copy not flagged OA) | unused in both batches |
| joelbest.net/halloween-sadism (Joel Best, Univ. of Delaware; undated, "updated every few years") | Best & Horiuchi 1985 reviewed 4 newspapers 1958–84; "unable to find a substantiated report of a child being killed or seriously injured by a contaminated treat" picked up while trick-or-treating; O'Bryan 1974 poisoned by his father; X-rays cannot detect drugs or poisons; 2011 Harris poll: 24% of parents worried about poisoned treats | full page | unused |
| foodallergy.org Teal Pumpkin Project (FARE) | non-food treats in a separate bowl; teal pumpkin signal; started by an East Tennessee family; FARE adopted nationally in 2014 | full page | unused in b2 (b1 boo-basket-ideas used it) |

Rejected: JAMA Pediatrics 2019 (PMC6583441) — unused in b2, but its PMC copy is PDF-only and Europe PMC/JAMA returned 403/500, so its hourly findings could not be verified; the CDC report (full text) replaces it. NHTSA not needed. Rituals/wellbeing: findpapers ("holiday rituals wellbeing enjoyment", "rituals enhance consumption enjoyment", "family rituals celebrations children wellbeing") returned Frontiers/SAGE/Routledge chapters — skipped per BRIEF §9; the Joel Best record covers the research ask.

Wikipedia/Wikidata verified (API, 2026-10-13): Halloween Q251868; Trick-or-treating Q47195; Poisoned candy myths Q7208482; Food Allergy Research & Education Q5465287; Jack-o'-lantern Q221009.

## Siblings checked (no idea reused)
Batch 1 H2/H3s read: halloween-party-ideas, halloween-party-games, halloween-date-ideas-at-home, -for-adults, -for-couples, halloween-activities-for-couples (incl. its "31 October, morning to night" week entry), free-halloween-date-ideas, when-is-halloween. Avoided: horror double feature, living-room haunted house, bake-off, ghost-story night, game nights and named games, pumpkin patch/corn maze/hayride/ghost walk/parade/drive-in, jack-o'-lantern walk, trunk-or-treat helpers, thrift costume swap. Batch 2 siblings `halloween-party-activities` and `halloween-games-for-teens` were not on disk at writing time; no games are listed here.
