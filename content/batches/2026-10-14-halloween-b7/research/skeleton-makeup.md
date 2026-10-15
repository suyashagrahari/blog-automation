# Research brief — skeleton makeup (rank 313, absorbs "easy skeleton makeup")

**Head term flag:** "skeleton makeup" is a 2-word head term, effectively unwinnable for this domain against Allure / Martha Stewart / Byrdie and video results. Long-tail alternatives: "half face skeleton makeup step by step", "how to remove black and white skeleton face paint", "skeleton makeup anatomy where to paint cheekbones". Proceeded per orchestrator; the body targets all three as H2/FAQ sub-queries.

## Phase 1 — SERP (2 searches used, budget 2)

1. **WebSearch (US index), "skeleton makeup":** 9 results, all hijacked-subdomain spam (analytics.streetsforall.org, status.penumbra.zone, doapi.flashtelecom.es, tools.highaltitudescience.com, v0.carbonext.com.br, finderio.dev.500apps.com, app.coachingtoolbox.net, origin-exchange.autodesk.com, zulip.talkabroad.com) repeating one text. **Weak: 9/9.** Not analysed as top-5.
2. **DuckDuckGo HTML, "skeleton makeup tutorial step by step" — lower confidence:** youtube (T3FaNaIyHKY), marthastewart.com/1522162/skeleton-makeup, allure.com/story/skeleton-makeup, veotag.com/easy-skeleton-makeup, skeletonconcept.com/easy-halloween-skeleton-makeup-tutorial-step-by-step-guide, youtube (2aKbk_50RYU), byrdie.com/skull-makeup-for-halloween, beautysky.co.uk/easy-skeleton-makeup, beautindependent.com. **Weak ≈ 5/9** (veotag spam-injected, skeletonconcept, beautysky, beautindependent thin; two videos).

| Page | Words / structure | Direct answer | Entities / subtopics | Data cited (date) | Format | Tone | Optimising for |
|---|---|---|---|---|---|---|---|
| allure.com (Avila, 2 Oct 2023) | ~1,500; tools → prep → 5 steps | After intro + J.Lo inspiration | 3 named MUAs, products with prices | none | product cards, photos | 2nd person, chatty | affiliate product clicks, "easy" |
| marthastewart.com | 403 — snippet only | "easy-to-recreate how-to" | — | — | step photos (per snippet) | — | last-minute costume |
| byrdie.com (11 tutorials) | 403 — snippet only | roundup of 11 skull tutorials | creator embeds | — | listicle | — | roundup |
| skeletonconcept.com (30 Sep 2026) | ~2,500; face chart, kit, 3 phases, prosthetics, product comparison, 6 FAQs | "under thirty minutes" in intro | "brow ridges, cheekbones, nasal passages" generic | none | TOC, FAQ | generic AI-ish | "easy skeleton makeup" |
| veotag.com | spam keyword injection around a thin tutorial | — | — | — | — | — | spam |

## Phase 2 — Gap

- **Table stakes:** white base, black sockets and nose, cheek contour, teeth across lips, setting, removal mention, sensitive-skin note.
- **Gap:** no page names actual skull landmarks or cites anatomy; all describe the nose as a heart/"nasal passages" and the cheek hollow vaguely. None mentions the septum, the zygomatic arch running to the ear, the temporal vs infratemporal fossa, the foramina, or that only the mandible moves. None treats removal of heavy black/white as an ordering problem. None distinguishes calavera from skeleton with a source.
- **Stale data:** none cite data at all.
- **Fan-out sub-queries → H2/FAQ:** what is skeleton makeup / where to paint (landmarks); easy/half-face/full looks with times; which to choose; is a sugar skull the same; how to remove heavy black and white paint; how big are sockets; how many teeth; grey temples; kids; phone photos.
- **Angle:** "This post wins by being the only one that maps skeleton makeup to 9 named skull landmarks from an open anatomy textbook and grounds the calavera distinction in two scholarly sources, framed for phone viewing with SubhSandesh's 48.3% phone-open rate."
- **Cannibalisation:** b2 easy-halloween-makeup owns skeleton nose, half-skull, full skull, sugar-skull-style and UV skeleton items (steps: white face, black sockets outside the lashes, nose heart, grey cheek hollows, teeth to jaw); this post reuses none of those steps and builds looks from landmarks (jaw-only, septum-split half face, anatomical full skull). b5 face-paint brief shares allure.com + youtube only (<4 URLs). 311 beginners owns kit + 5 core skills; not re-taught.

## Phase 3 — Sources (all fetched and read)

| Source | Subject test | Used for | Date |
|---|---|---|---|
| OpenStax A&P 2e §7.2 The Skull (openstax.org) | yes — skull anatomy | 22 bones, mandible only moving bone; orbit cone of 7 bones; foramina; nasal bones; triangular nasal halves + septum; zygomatic arch to ear canal; temporal/infratemporal fossae; alveolar processes; ramus/angle | 2022-04-20 (CMS publish_date) |
| OpenStax A&P 2e §23.3 | yes — teeth | 32 adult teeth | 2022-04-20 |
| Grilo et al., Tobacco Control (Europe PMC PMC10646926), peer-reviewed | yes — Día de Muertos imagery and appropriation | Day of the Dead 1–2 Nov, ofrendas; papel picado on Marlboro packs called cultural appropriation | online 2022-02-25 |
| Sebasti & Caetano, Terra Roxa e Outras Terras 41 (ojs.uel.br), peer-reviewed, full PDF read | yes — Calavera Catrina | Catrina/Garbancera as satire of people pretending to an elite European identity; death reaches all equally | 2022-02-24 |

- Rejected after reading: Salles et al. 2022 IJERPH (PMC9819701, costume face-paint metals) — fits, but b1 halloween-makeup-captions already used it for the same point and it fails the swap test; also keeps the last MDPI slot free. Kamchatka 2020 Día de Muertos folklorisation article — behind a Cloudflare check, not worked around.
- Correction found: Terra Roxa captions Posada's Calavera Garbancera engraving as "1873"; it is normally dated c.1910–1913. Not printed.
- No open-access study on removing heavy theatrical paint found; searched "makeup remover cleansing oil micellar skin barrier", "theatrical makeup removal skin irritation actors", "face paint allergic contact dermatitis carnival". Removal section is practical guidance.
- Wikipedia: none in body. sameAs verified via Wikipedia API: Skull Q13147, Day of the Dead Q309256, La Calavera Catrina Q1084690, José Guadalupe Posada Q732526, Halloween Q251868.
- First-party facts: 48.3% phone opens; 11.1 views per page; 38.5% password-protect (all measured 2026-09-24). No Halloween usage data exists.
- Slug check: Strapi `filters[slug][$eq]=skeleton-makeup` → 0 results (2026-10-14).
