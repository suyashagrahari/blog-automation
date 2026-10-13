# Research brief: halloween snacks for kids

Row 111 · slug `halloween-snacks-for-kids` · theme food · absorbs "halloween food ideas for kids" · batch 2026-10-13-halloween-b3 · written 2026-10-13.

## Phase 0: first-party data

There is no Halloween, food or kids-segment data in `content/facts.md` (BRIEF §3). `npm run facts` was not run. Three lines are used, each labelled in the body:

- Raksha Bandhan 2026 lead time (n = 89, 49.4% built on the day). Used to argue for planning a week ahead, and disclosed in the body as a different festival with a small sample.
- 48.3% of shared-page views are on a phone. Platform-wide. Used to justify the one-line snack format.
- 90.9% of started pages are published and shared. Platform-wide. Used in the Kids-mode section.

The template spec (`template-spec.md`) is the only source for the /happy-halloween Kids tone and the premium features.

## Phase 1: SERP

Searches used: 1 WebSearch (US index), `halloween snacks for kids`. The result set looked low quality: a hijacked `easy.rjuuc.edu.np` spam page, plus crayonsandcravings listed twice under different URLs. Weak results in the top 10: about 8 of 10 (small blogs, the spam page and a franchise-parent site), so Gate 4 passes.

| # | Page | Words (approx.) | Structure | Direct answer | Data / dates | Format | Optimising for |
|---|---|---|---|---|---|---|---|
| 1 | en-bn.babysits.com healthy halloween snacks | ~900 | H2s on "When is Halloween" and "What is trick or treating", then 6 snack H3s | Buried below the history | None | Ingredient list, photos | Babysitting signups |
| 2 | punchbowl.com kids halloween snacks (**competitor**: e-invites) | ~600 | 5 bold recipe blocks | Intro line | None | Recipes (meringue ghosts, veggie platter, dirt cups, cereal bars) | Party-planner traffic |
| 3 | crayonsandcravings.com halloween snacks for kids | ~1,500 | Supplies list, then 4 decorated packaged snacks | First paragraph ("not candy") | None | Craft photos, hot-glue steps | Pinterest and recipe traffic |
| 4 | spectrumhealth.ie quick & healthy halloween snacks (9 Sept 2024) | ~250 | 5 numbered H2s | Intro line | None | One-line bullets | Clinic blog |
| 5 | temecula.macaronikid.com healthy halloween snacks | n/a | **403**, judged from snippet | n/a | n/a | n/a | Local parents' newsletter |

Table stakes: banana ghosts, clementine or satsuma pumpkins, apple "monsters", a veggie platter with spooky names, decorated packaged snacks.

## Phase 2: gap analysis

- None of the five gives prep minutes, allergens, a sugar level or what a child can do per snack.
- None addresses school allergy policy. Crayonsandcravings mentions "classroom parties" and suggests "nut-free butter" but gives no rule data.
- None says anything sourced about the candy haul.
- Stale or absent data: none of the pages cites a figure.
- Fan-out sub-queries, which became H2s or FAQs: nut-free school snacks; whether homemade food is allowed at school parties; healthy Halloween food for kids; how much candy is OK; whether to hide or ration candy; what to eat before trick-or-treating; snacks kids can make alone; leftover candy; whether pumpkin seeds are safe for nut allergies.

**Angle:** this post wins by being the only one in the top 5 that labels every snack with prep minutes, kid-help level, allergens and a sugar band. It also sorts them by school-relevant occasion and backs the classroom and candy advice with an allergy-policy survey, Australian no-ban guidance and two feeding studies.

## Phase 3: sources (all fetched; none used in b1, b2 or b3 before)

1. **Vos et al. 2016, AHA scientific statement**, *Circulation* (PMC5365373, Europe PMC). Recommends 25 g or less of added sugar a day for children, and none under 2. **Abstract only**: the full-text XML endpoint returned 500.
2. **Asigbee et al. 2020**, *Curr Dev Nutr* (OUP/ASN, PMC7108796). 1,231 third-graders in 28 schools: children always involved in cooking had higher vegetable intake (β 2.45) and fruit intake (β 0.93). Cross-sectional. Licence CC BY-NC, so it is cited only.
3. **Mustafa et al. 2018**, *BMC Pediatrics* (PMC5948763). 289 parents; peanut 76.1% and tree nut 77.2%; 53.3% reported celebration food rules, of which 38.6% allowed labelled food only and 31.4% no food; 90.2% found the rules helpful.
4. **Allergy Aware, "Manage anaphylaxis risk" (schools)**, allergyaware.org.au, by A&AA, ASCIA and the National Allergy Council, content updated July 2025. Says schools should not ban food or claim to be "nut free"; students with allergies should not eat food brought by other students; non-food rewards are encouraged.
5. **Bauer et al. 2017**, *IJBNPA* (BMC, PMC5735902). 229 dyads at 21, 27 and 33 months; restriction did not increase eating in the absence of hunger.
6. **Gevers et al. 2015**, *Nutrients* (MDPI, PMC4488774). 888 parents, four clusters; "high involvement and supportive" (27.8%) had the most favourable snack intake; two looser clusters (about 40%) had higher intake.

Rejected or unavailable:

- foodallergy.org school pages: bot challenge or 404.
- cdc.gov food-allergies-in-schools: 403.
- allergyuk.org: 403.
- NSW Education and Massachusetts DESE allergy pages: 404.
- Schwartz 2003 "Trick, treat, or toy": Elsevier, banned.
- Frontiers EAH papers: banned.

Avoided per prompt: PMC5749710 (used in b2). Avoided per coordinator: fda.gov (one b3 slot left) and every dish from halloween-party-food-ideas.

## Claims in the brief or prompt that did not hold

- "foodallergy.org is unused in b3" is **false**. b3's `halloween-ideas-for-kids` cites its Teal Pumpkin page.
- "Most bans are nut-free" is **only half true**. US schools often run peanut-free tables or classroom bans: Mustafa cites a survey in which 67% of schools made such accommodations. But Australia's national guidance explicitly advises against food bans and against "nut free" claims. The post presents both.

## Audit

49 of 50 checklist items passed. One failed: "At least one table column uses first-party data". This is structural, because no Halloween or kids data exists.
