# Research brief: scary couple halloween costumes

Row 116, batch `2026-10-13-halloween-b3`. Slug `scary-couple-halloween-costumes`. Theme couple. Absorbs "halloween couple costumes scary" and "halloween couple ideas scary". Written 2026-10-13.

## Phase 0: first-party data

There is no Halloween usage data in `content/facts.md` (BRIEF §3). The post uses only platform-wide lines, each labelled as platform-wide in the body:

- 48.3% of shared pages opened on a phone (measured 2026-09-24)
- 38.5% of creators password-protect before sharing (measured 2026-09-24)
- Average views per created page: 11.1 (measured 2026-09-24)
- Raksha Bandhan 2026 lead time, n = 89: 49.4% built on the day itself. Labelled in the body as a different festival with a small sample, which is the nearest analogue we have.

These numbers are about the page you send, not about costumes. That is a real limit: no first-party number speaks to costumes themselves.

## Phase 1: SERP (2 searches used out of 2)

1. **WebSearch (US index), 1 call:** 7 of the 9 results were spam on hijacked subdomains (static.intrafocus.com, support-3.tychesoftwares.com, devservices.eveuniversity.org, zkteco.tvc.mx, clinvendors.supernus.com, dev.ourstate.com). The one real result was scarymommy.com. WebSearch was not capped.
2. **DuckDuckGo HTML (lower confidence), 1 fetch:** gave a usable top 10:

| # | URL | Type |
|---|---|---|
| 1 | goodhousekeeping.com/…/scary-couples-costumes/ | strong, incumbent |
| 2 | womansday.com/…/scary-halloween-couples-costumes/ | strong, incumbent |
| 3 | walkingtowardslove.com/scary-couples-halloween-costume-ideas/ | weak (small blog), returned 403 so judged from its snippet only |
| 4 | apluscostumes.com/scary-couples-costumes/ | weak (small affiliate blog) |
| 5 | popsugar.com/love/scary-halloween-costumes-couples-38536270 | mid |
| 6 | amazon.com search page | retailer category page, not content |
| 7 | forgettingfairytales.com/scary-halloween-costumes-for-couples/ | weak (small blog) |
| 8 | amazon.com search page | retailer category page |
| 9–10 | pinterest.com ideas pages x2 | weak (aggregator) |

**Weak count in top 10: 5** (walkingtowardslove, apluscostumes, forgettingfairytales, Pinterest x2). The plan said 4/10. Gate 4 passes.

### Top-5 comparison (fetched 2026-10-13 with a plain fetch; WebFetch is blocked)

| Page | ~Words | Structure | Where the answer sits | Data / dates | Safety, kids, scare level | Optimising for |
|---|---|---|---|---|---|---|
| Good Housekeeping (48) | ~1,800 | one H2 per pair, all franchise names (M3GAN, Terrifier, Squid Game, Grady twins, Plague Doctors) | the list itself, after a short intro | title says "2025"; no research | "fake blood" mentioned twice; no allergy, lens, kid or scare rating | shopping links per costume |
| Woman's Day (41) | ~2,000 | one H2 per pair, almost all film IP (Hellraiser, Saw, Midsommar, Pearl) | the list | 2024 references; no research | latex mentioned once, in passing; nothing on kids | shopping links |
| apluscostumes (23) | ~2,100 | numbered H3s (Pennywise, voodoo doctors, Plague Doctor and His Bride, zombie nurses) | the list | none | none | Amazon affiliate |
| POPSUGAR (16) | ~1,500 | H2 per pair (Jason and Freddy, Chucky and Tiffany, Grady twins) plus unrelated widgets | the list | 2024 | none | ad pageviews |
| forgettingfairytales (10) | ~1,150 | H2 per idea (Edward Scissorhands, voodoo dolls, Shining twins, Purge) | the list | "2024" in an H2 | none | date-ideas funnel |

## Phase 2: gap analysis

- **Table stakes:** zombies, twins, clowns, dolls and plague doctors appear on 3 or more pages, and every page relies on horror-film IP.
- **The gap:** no page groups pairs by *what kind of fear* they use. None rates scare level, none says whether a pair works around children, none gives a cost for two or an SFX skill level. None mentions latex allergy, coloured-lens risk, or how to behave toward strangers who did not opt in to being scared. None uses folklore, and none handles a cultural figure such as La Llorona with care.
- **Stale data:** two pages put 2024 or 2025 in a title or heading. Nothing they cite can be superseded, because they cite nothing.
- **Fan-out sub-queries:** scary but not gory; scary costumes that are fine around kids; whether liquid latex is safe; whether costume coloured contacts are safe; scaring etiquette at trick-or-treat; whether folklore costumes are respectful; why couples like being scared together; DIY cost for two.

**Angle:** wins by being the only scary-couple page that sorts 30 non-franchise pairs by type of fear, rating each for scare level, SFX skill, rough cost and kid suitability, with dermatology and ophthalmology safety checks and a consent rule for strangers. The platform-wide phone-open and password figures (48.3%, 38.5%) are used for the photo you send afterwards.

## Phase 3: sources (all fetched 2026-10-13)

| # | Source | What it supports | Read | Batch status |
|---|---|---|---|---|
| 1 | Chung, Mennella, Pacherie & Grèzes, "Social bonding through shared experiences: the role of emotional intensity", *Royal Society Open Science*, 30 Oct 2024, CC BY. europepmc.org/article/PMC/PMC11521598 | 56 dyads (112 French adults, strangers, same-sex). Physiological arousal during emotional videos was linked to reciprocal prosocial attitudes, but only under joint attention, and the emotions did not have to converge. | Full text (Europe PMC fullTextXML). **Caveat: the emotional videos were amusement and sadness, not fear, and the pairs were strangers, not couples.** The body says so. | Not in b1, b2 or b3 |
| 2 | AAD, "Contact dermatitis: causes", aad.org, last updated 14 Dec 2020 | Latex is one of the most common causes of allergic contact dermatitis. With a latex allergy, avocados, bananas and kiwis can cause a flare. The rash can take hours or days to appear. More than 15,000 allergens exist. | Full page | aad.org unused in b3; this URL unused in b1/b2 |
| 3 | AAO, "Halloween and Cosplay Eye Safety", aao.org (no publication date on the hub page) | Selling contact lenses without a prescription is illegal in the US. The FDA analysed 300 illegally sold lenses and found bacteria in about 60%. Remove lenses and see an ophthalmologist for redness, swelling, discharge or pain. | Full page | aao.org unused in b3; b1 used a different AAO URL |
| 4 | Wikipedia, "La Llorona" (Q1866923) | Entity disambiguation: in Hispanic American folklore she is a weeping ghost who roams near water mourning the children she drowned, and she is well known in Mexico and the southwestern US. | Wikipedia API intro | Wikipedia 1 of 0–2 |

Sources considered and rejected:
- **Banned or spent:** PMC10844225, the Sci Rep 2024 horror-scene paper, was used in 5 b1 posts. PMC12212089, the PRBM 2025 fear-pleasure paper, is used in b1 and b2 and is CC BY-NC. PMC7734554 ("Playing with fear", *Psychological Science*) is SAGE, which is banned. PMC11155347 is in *Evolutionary Psychology*, also SAGE and banned. The Emotion haunted-attraction paper is spent.
- **Not reachable:** Britannica pages for La Llorona, Krampus and the banshee returned 403. The Western Folklore La Llorona articles (JSTOR) are paywalled.
- The fda.gov novelty-makeup URL is full in b2, so it was avoided.

Searches tried with findpapers:
- "recreational fear haunted attraction physiological"
- "shared fear experience social bonding"
- "horror enjoyment fear arousal companion"
- "La Llorona legend folklore": no open-access hit
- "uncanny valley dolls mannequins eeriness"

**Finding:** no open-access, non-banned, unspent paper tests couples bonding over *fear* specifically. The closest unspent study, Chung 2024, tests intense shared emotion in stranger pairs.

Entity checks (Wikipedia API, used for structured data only): La Llorona Q1866923, Krampus Q925042, Banshee Q273112, Leshy Q1056876, Searcher of the dead Q55099268, Wendigo Q370801, Nosferatu Q151895, Liquid latex Q17097284, Halloween Q251868.

## Sibling de-duplication

The following pairs from sibling posts are avoided:
- **b1 fancy-dress:** Jekyll/Hyde, ghost and ghost hunter, scarecrow and crow, Dracula and Mina, plague doctor and patient
- **b2 famous couples:** Frankenstein's monster and Bride, Morticia/Gomez, Munsters, Jack and Sally
- **b2 outfits:** witch and familiar, split skeleton

The plague-doctor pair here is plague doctor plus a London **searcher of the dead**. The twins pair is generic mirrored strangers, not the Grady twins.

The b3 siblings 117, 118 and the simple-costumes post were not on disk at writing time, so they could not be checked.
