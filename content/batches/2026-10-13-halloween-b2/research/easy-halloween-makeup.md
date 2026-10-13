# Research brief — easy halloween makeup (row 68)

Slug `easy-halloween-makeup` · absorbs "halloween makeup ideas", "easy halloween makeup ideas" · theme beauty · category `festive-beats`.

## Phase 0 — first-party data
No Halloween or makeup data exists in facts.md. Used (verbatim in factsUsed):
- Raksha Bandhan lead time (n = 89, 49.4% built on the day): nearest-festival analogue, disclosed in prose. It justifies sorting by minutes.
- 48.3% of views happen on a phone: a look must read in a small photo.
- 38.5% of creators password-protect their page: this matters when the page photos show your face.

## Phase 1 — SERP (WebSearch, US index, 1 search; Firecrawl disconnected)

| # | Page | Words (approx) | Structure | Direct answer | Data / date | Format | Optimising for |
|---|---|---|---|---|---|---|---|
| 1 | purewow.com 26 Easy Halloween Makeup Ideas | ~1,300 | H2 per look (26), pop-culture led | No intro answer, list starts | none; 29 Oct 2020 (stale) | image/video embeds, no table, no FAQ | celebrity/character looks |
| 2 | spirithalloween.com Easy Halloween Makeup Tips | ~1,900 | 5 H3 looks (devil, vampire, doll, ghost, zombie) | after intro | none; 2021, modified 2022 | retailer, product-led | selling costume makeup |
| 3 | mother.ly 12 Halloween makeup ideas for kids | ~6,700 incl. chrome | 12 H3 character looks | buried | none; 2021, modified 2022 | video embeds | kids/parents |
| 4 | theeverygirl.com tutorials | ? | 403, judged from snippet only | — | — | video roundup | tutorials |
| 5 | stuwo.at Easy Halloween Makeup Ideas (weak) | ~2,400 | 6 looks + step-by-step + FAQ | after intro | none | FAQ, one patch-test mention | student blog |

Weak results in the top 9: dreamina.capcut.com x2 (AI image generator), library.gmob.ca (spam), static.intrafocus.com (spam), and stuwo.at. That is about 5 of 9. serps.md measured 2 weak for "easy halloween makeup ideas" (purewow, nylon, spirit, motherly, bustle, maybelline) and rated it hard, so real Google is probably harder than this WebSearch result.

Keyword-safety terms in the fetched pages: patch 0/0/0/1 · FDA 0 everywhere · sensitive 0 · glasses 0 · removal/oil ~0 · calavera 0.

## Phase 2 — gap
- **Table stakes:** skull, vampire, witch, zombie, clown, doll and cat looks; a basic product list.
- **The gap:** none of the five gives time per look, a skill rating, or notes for glasses, beards or sensitive skin. None mentions FDA eye-area colour rules, patch testing, craft-paint warnings or oil-first removal, and none treats sugar skulls with any cultural note.
- **Stale data:** all three fetched incumbents date from 2020–2022.
- **Fan-out:** easiest look for beginners; makeup without face paint; how to remove it; acrylic paint on skin; patch-test timing; glasses; making it last; sugar skull respect; beards; kids.
- **Angle:** see batchMeta.angle.

## Phase 3 — sources (all fetched)
1. Sukakul & Svedman 2025, Curr Allergy Asthma Rep (Springer, CC BY 4.0), Europe PMC PMC12552389. Full text read: ~30% of facial-dermatitis patients have cosmetic-induced dermatitis; >150 allergenic fragrance materials; ROAT is coin-sized on the forearm or cubital fossa for 3–4 weeks and not standardised. This is the peer-reviewed, open-access source, different from batch 1's aad.org and PMC9819701.
2. FDA Color Additives and Cosmetics: Fact Sheet (current as of 28 Jun 2022). Covers the eye-area definition (21 CFR 70.3(s)), the 70.5(a) restriction, the 7 listed fluorescent colours and Halloween makeup as a cosmetic. This is a different FDA URL from the novelty-makeup page, which is full.
3. NHS Eye injuries (reviewed 12 Mar 2026): wash with clean water, don't rub, no eye makeup until better.
4. UNESCO ICH Indigenous festivity dedicated to the dead (inscribed 2008): used for the calavera note (unesco.org is cap-exempt).

Considered and dropped:
- Yu & Schalock 2026 Acta Derm Venereol (PMC13294297, CC BY-NC): verified, but simple-halloween-nails already cites it.
- ESCD 2026 patch-test guideline (PMC13441402): clinical, not consumer.
- AAO eye-makeup pages: JS-rendered, no text, and AAO's terms forbid AI ingestion.
- dermnetnz cosmetic-allergy page: 404.
- americanindian.si.edu: 403.

Queries run:
- findpapers: "face paint children dermatitis", "cosmetic allergy patch test prevalence", "cosmetic contact dermatitis eyelid", "glitter eye injury corneal". None returned a usable face-paint or glitter eye-injury paper.

## Sibling checks
- easy-halloween-costumes uses panda, friendly clown and mummy face paint. This post replaces mummy with fishnet scales and uses a distinct Pierrot clown, because the prompt required a clown.
- Batch 1 halloween-makeup-captions: none of its sources are reused, and no lines are shared.
- 5-gram overlap check against both batches: only shared template/fact phrasing, no copied lines.
- FDA's fluorescent count differs between pages: the fact sheet lists 7, the novelty page says 8. This post states 7.

## Remediation (2026-10-13)
- Paragraph rule: four one-sentence lead-ins (5/15/30-minute bands and the table) are now 2-sentence paragraphs. The safety lead-in, a single long sentence the audit missed, is split in two. The post-table line is folded into the table lead-in.
- NHS eye-injuries (swap-test fail) replaced by **Wang & Craig 2018, Clinical Optometry, PMC6118859** (CC BY-NC, full text read via the Europe PMC REST API). It describes a 3-person pilot in which glitter eyeliner migrated into the tear film, less and more slowly when applied outside the lash line. The glitter step now cites it and no longer recommends oil near the eye, since the same review reports an oil-based eye remover reducing tear-film stability. nhs.uk falls to 2 posts in b2.
- findpapers queries run: "Halloween makeup adverse reaction", "cosmetic glitter ocular", "face paint heavy metals lead", "theatrical makeup dermatitis", "Catrina face painting Day of the Dead", "sugar skull makeup cultural appropriation", "calavera face paint Dia de Muertos commodification". Sandoval 2023 (theconversation.com, La Catrina) was fetched but not used: it is iconography and costume history, no more makeup-specific than UNESCO.
- Trims to stay under 1,800: costume roll-call → "one of eight costumes"; FDA bullet compressed. Body 1,794 → 1,798 (plain split).
