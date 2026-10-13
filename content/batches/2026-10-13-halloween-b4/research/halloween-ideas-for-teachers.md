# Research brief: halloween ideas for teachers (row 179)

- Slug: `halloween-ideas-for-teachers` (free in Strapi, checked 2026-10-13). Absorbs "halloween classroom ideas".
- Category `festive-beats`; templates `/happy-halloween` (mandatory) and `/happy-halloween-premium`.
- Searches used: 2 WebSearch (US index). One for the SERP, one for a school-district Halloween policy page.

## Phase 0: first-party data

There is no Halloween or teacher-segment data in `content/facts.md`. The post uses three platform-wide lines, and only in the one-colleague card section and the opening:
- 90.9% of started pages published and shared (4,724 of 5,199), measured 2026-09-24
- 48.3% of shared pages opened on a phone, measured 2026-09-24
- 38.5% of creators password-protect, measured 2026-09-24

Gate result: weak but honest. The facts are about the card, not about teaching. The first-party table column fails.

## Phase 1: SERP (WebSearch, US index, 2026-10-13)

| # | URL | Type | Notes |
|---|---|---|---|
| 1 | static.intrafocus.com/?p=51372 | Hijacked-subdomain spam | TLS cert mismatch (plesk host). Counted weak, not analysed |
| 2 | teachstarter.com/us/blog/book-inspired-halloween-costume-ideas-for-teachers-3/ | Competitor (teacher resource) | Titled "13 Best Halloween Costume Ideas for Teachers for 2023". About 2,000 words of costume photos from Instagram teachers (Pop-It, ice cream cone, "It's Corn", Rainbow Fish). Each costume links to paid resources. No inclusion or allergy content, no standards. Stale (2023) |
| 3 | netbox.point-broadband.com/?p=47560 | Hijacked-subdomain spam | Weak |
| 4 | teachstarter.com/teaching-resource-collection/halloween/?page=9 | Competitor catalogue | 191 resources faceted by learning area and grade. No prose answer. Plus Plan paywall |
| 5 | static.intrafocus.com/tag/teachers/page/2/ | Spam | Weak |
| 6 | (dup of 4, /us/) | Competitor | |
| 7 | iteach.net/blog/top-10-teacher-halloween-costume-ideas-2024/ | Teacher-prep provider blog | Oct 2024, about 900 words. Ten costumes (pun "ceiling fan", book character, mad scientist, emoji). The answer is in its first paragraph. Images credited to Instagram and Scholastic. No data |
| 8–9 | drmattlynch.com 22-best-…-2026 (x2) | Thin AI-style listicle | About 900 words, H2-less bold sections (Miss Frizzle, Harry Potter, Bob Ross, Einstein, Earhart, Cleopatra). No sources. Weak |

Weak count in the top 9: 5 (3 spam, 2 drmattlynch). The Gate 4 abort does not apply.
Intent finding: the US SERP is mostly **costume** intent, with one activity catalogue. This post leads with activities (per the row brief) and has a costume H2. Activity-first may underperform on the head query, and the honest assessment says so.

## Phase 2: gap

- Table stakes: costume ideas, Halloween activities, classroom party.
- Gap: no ranking page organises ideas by **subject and grade band with minutes, prep and a standard area**. None addresses families who don't celebrate, school costume rules or food allergies. None names a downside or a research basis.
- Stale: Teach Starter's 2023 costume list and iteach's 2024 list.
- Fan-out: activities by subject and grade, a classroom party plan, non-celebrating families, school costume rules, allergy and candy rules, teacher costumes, Día de los Muertos done respectfully, safe science (no dry ice), public-domain read-alouds, high-school ideas.
- Angle: the only post that tags every idea with grade band, minutes, prep and standard, and pairs the ideas with real school policy on costumes, inclusion and food.

## Phase 3: sources (all fetched)

| Source | What it supports | Read |
|---|---|---|
| Skene et al. 2022, *Child Development* 93(4), Wiley OA CC BY, europepmc PMC9545698 (DOI 10.1111/cdev.13730) | 39 studies reviewed, 17 meta-analysed, N=3,893, ages 1–8. Guided play beat direct instruction on early maths (g=0.24) and shape knowledge (g=0.63). Half the papers had samples under 50 | Full text (Europe PMC XML) |
| Santos et al. 2023, *Allergy, Asthma & Clinical Immunology* (BMC), europepmc PMC10347816 | Food allergy affects 7–8% of children worldwide. 16 Winnipeg K–6 teachers report minimal standardisation and inconsistent enforcement of allergy policies | **Abstract only** |
| butlermiddle.canyonsdistrict.org/halloween-costume-guidelines/ | No full-face mask or full-face paint, no weapons, no stereotyping costumes, dressing up optional | Full page. Undated |
| ars.htps.us/o/ars/article/2491825 (Auten Road Intermediate, Hillsborough Township PS, NJ) | Final 25 minutes in homeroom on fall/autumn activities. Hat, T-shirt or orange/black instead of a costume. No masks or weapon toys. Staff hand out no food or candy | Full page |

Unused or dropped:
- The UNESCO ICH Día de los Muertos page was fetched and verified, but cut because a sibling (halloween-wedding-ideas) took the URL to 3 posts in b4. The post now states "UNESCO … 2008" unlinked.
- Daniels 2025 (PMC12780796, food rewards) was not used because b2 halloween-party-favors already cited it.
- Lin 2025 was avoided per the prompt.
- The CDC food-allergy guidelines returned 404/403. LAUSD King MS PDF returned 403. UGDSB Ontario page returned 404.
- Megajournal (MDPI) and Frontiers candidates from findpapers were rejected per BRIEF §9.

Search terms tried (findpapers / Europe PMC REST):
- play-based mathematics learning young children
- estimation skill children number sense intervention
- holiday celebrations school religious diversity inclusion
- sink float density children science misconceptions
- game-based learning mathematics engagement elementary
- seasonal themed instruction student engagement
- guided play learning outcomes meta-analysis
- playful learning mathematics children randomized
- board game number line children numerical knowledge
- children naming emotions fear regulation classroom
- Day of the Dead cultural education
- situational interest classroom novelty learning

No open-access paper on *seasonal or Halloween-themed* instruction specifically was found. Skene is about play-based learning.

## Brief or prompt claims checked

- The search-engine summary said the Auten Road letter gives "the final 35 minutes". The page says **25 minutes**. The post uses 25.
- The Auten Road page shows a posting date of 14 October 2025, but it describes "Friday, October 30th", which is a 2026 weekday (30 Oct 2025 is a Thursday). No publication date is asserted.
- The prompt suggested "candy-graph data". b3 halloween-ideas-for-kids already has a candy-sort bar graph, and b3 also has pumpkin-patch weigh/measure maths. This post swaps in a teacher-supplied fun-size data table (mean, median, range, with no sweets in the room) and seed bundling, spider-jar benchmark estimation and a sphere-volume model.
- Sibling idea overlaps were removed before finalising. These were costumes already in b2/b3 (bat hoodie, scarecrow, pumpkin knit, spelling bee), the "My Shadow" poem (quoted in a b-batch kids' quotes post) and the idioms "scared stiff" and "skeleton crew" (in b1/b3 phrase posts).
