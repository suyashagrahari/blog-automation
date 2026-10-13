# Research brief — simple halloween nails (row 69)

Slug `simple-halloween-nails` · absorbs "halloween nails simple", "halloween nails easy" · theme beauty · category `festive-beats`.
Siblings: `halloween-nails` (row 72, design-ideas hub by style/trend, written later), `halloween-nail-captions` (done; none of its six papers or lines reused), `easy-halloween-makeup`.

## Phase 0 — first-party data

No Halloween usage data exists in facts.md (brief §3). Used, byte-verbatim:

- Raksha Bandhan 2026 lead time (49.4% built on the festival day itself), labelled in the body as the nearest analogue. In the first 150 words.
- 48.3% of shared pages are opened on a phone. In the first 150 words.
- Median first-save-to-last-edit gap of 2.5 hours (sampled on /apology-dashboard, n=1,396), in the "wrong plan" section.

Honest limit: all three are platform-wide or analogue figures; none measures nail art. The design-group table therefore has no first-party column (structural failure, recorded).

## Phase 1 — SERP (WebSearch, US-served; Firecrawl disconnected)

Searches used: **2 of 2**.

1. `simple halloween nails easy at home`: 9 results. 8 hijacked-subdomain spam (farm.forefrontweb.com x5, omeka.prmuseum.org, us.thulo.com, old.seoulkoreaasia.com) + graziadaily.co.uk.
2. `easy halloween nail designs for beginners short nails tutorial`: 9 results, all weak (farm.forefrontweb.com x6, static.intrafocus.com, old.langmai.org, meredith-poc-preview.evolphin.com, a staging preview that timed out).

Weak in the top 10: **8 of 9** (query 1), **9 of 9** (query 2). Gate 4 passes. The spam pages all failed to fetch, so they are judged from snippets only. Corroboration: `serps.md` row "(WS) halloween nail ideas 2026" (weak 4; whowhatwear, GMA, theeverygirl, distractify, booksy; image-led). Google's real SERP for this keyword is probably Pinterest-, image- and video-heavy, which a US WebSearch index does not show.

| Page | Words / structure | Direct answer | Data cited (date) | Format | Tone / optimising for |
|---|---|---|---|---|---|
| graziadaily.co.uk "Simple Halloween Nails: All The Inspo…" (updated 22 Oct 2020) | ~640 words; H2 "Halloween Nail Inspo"; 10-slide gallery, with 5 looks alternating with 5 product cards (nails inc £22, Rimmel £3.49, OPI £13.90, essence £1, Essie £7.95) | Intro says "who can be bothered to follow a 27 step tutorial"; no steps | None | Gallery, Instagram credits, buy links | Breezy UK first person; affiliate shopping |
| farm.forefrontweb.com cluster (x11 across both queries) | Snippet only (fetch failed) | Snippet lists black-cat dots, ghost dots, candy-corn stripes, black/orange stripes | None | Auto-generated listicle | Spam, keyword-stuffed titles |
| omeka.prmuseum.org "Ultimate Guide To Easy Nail Halloween Designs" | Snippet only | — | — | Spam | Hijacked subdomain |
| static.intrafocus.com "6+ Spooky & Simple Halloween Nails: Short Designs" | Snippet only | Ghost polka dots, pumpkin stems | — | Spam | Hijacked subdomain |
| meredith-poc-preview.evolphin.com "Short Halloween Nails" | Timed out | — | — | Staging copy of a Meredith page | Not analysable |

Snippet claims worth flagging: one spam page says to "avoid acetone-based removers, as they can damage your nails". The review we cite gives a more precise version: acetone is an irritant that dries nails and can cause splitting with frequent use. It does not say "never use".

## Phase 2 — gap analysis

- **Table stakes:** ghost, pumpkin, candy corn, black/orange, spider web, black cat; base coat and top coat; toothpick or dotting tool.
- **Gap:** no ranking page gives per-design tools, minutes, skill or short-nail fit. None groups designs by the household tool you actually own (bobby pin, toothpick, tape, sponge, reinforcement rings). None covers staining from dark pigment, removal technique, acetone ventilation or cuticle care with a named source.
- **Stale:** Grazia is from 2020, with 2020 prices.
- **Fan-out sub-queries:** easiest design for a beginner; dotting without a tool; tape lifting polish; how many days before Halloween to paint; yellow nails after dark polish; is acetone bad; short-nail designs; cleaning polish off skin; kids; UV lamp needed?
- **Angle (batchMeta.angle):** this post wins as the only one in a spam-heavy SERP that gives every simple design a fixed tools / steps / minutes / skill / short-nail spec using household tools. It adds dated dermatology evidence on staining (onset after 7 days, fades over 2 weeks) and acetone ventilation, framed by SubhSandesh's last-minute build data.

## Phase 3 — sources (all fetched; full text read unless noted)

| # | Source | What it supports | Date | Subject test | Notes |
|---|---|---|---|---|---|
| 1 | Bansal S, Grover C. *CosmoDerma* — cosmoderma.org/adverse-effects-of-nail-cosmetics-and-how-to-prevent-them/ | Staining mainly from red/yellow pigments; develops after >7 days of wear; self-resolves over ~2 weeks; a base coat often prevents it, not always; don't leave polish on >2 weeks; acetone is an irritant → dry, lustreless nails, onychoschizia; pseudo-leukonychia after long wear and removal; don't manipulate cuticles | 2024-05-03 | Pass (nail cosmetics) | Peer-reviewed, OA, **CC BY-NC-SA**: cited and linked only, nothing reproduced |
| 2 | Grigoryants J, Miller S. *Cureus* — europepmc.org/article/PMC/PMC12663605 | Sealed 270 ft³ room: nail polish and a 100% acetone remover each raised TVOC and HCHO above safe limits; an 80 cfm exhaust fan kept TVOC/HCHO below the limit under combined use | 2025-10-29 | Pass (home nail-product solvent exposure) | CC BY. Small study (N=6 measurements) by authors at a school science department; the body says so |
| 3 | Yu J, Schalock PC. *Acta Dermato-Venereologica* — europepmc.org/article/PMC/PMC13294297 | Cites Hilewitz et al.: 8.1% positive patch tests to HEMA, mostly from nail cosmetics; rise with home nail use during COVID-19 | 2026-06-24 | Pass (nail-cosmetic allergy) | CC BY-NC; secondary citation of Hilewitz 2024, recorded as such |
| 4 | American Academy of Dermatology — aad.org/.../healthy-nail-tips | Don't remove cuticles or bite nails; excess water causes splitting/peeling, so wear gloves; see a dermatologist if nails change, swell or hurt | Last updated 2025-02-10 (no publication date; `dateModified` in citation) | Pass | aad.org: 0 uses in batch 2 before this post. Batch 1's halloween-makeup-captions used a different aad.org URL |

Not used: Wang & Lipner 2024 (PMC11147520), Zhivagui 2023, Kamińska 2026, Ali & Thomsen, Benlidayi, Kaliyadan & Pasquali (all caption-post papers); MDPI *Cosmetics* 2022 ceramide/remover study (fetch blocked, 8 bytes); AJCR 2026 nitrite-remover ingestion case (too unusual to generalise).

findpapers queries tried: "acetone nail polish remover exposure", "nail polish remover poisoning", "nail cosmetics adverse effects review", "nail polish yellow discoloration staining", "nail salon worker solvent exposure", "brittle nails onychoschizia treatment". No study on beginner or DIY nail-art technique was found, so design minutes are writer estimates. The body says so.

Caps: no Taylor & Francis, Sage, Frontiers, arxiv. capcheck clean after writing: no banned URLs, no domain at cap.

## Entities (Wikipedia API verified 2026-10-13)

Nail art Q3335182 (about); Halloween Q251868, Nail polish Q223807, Acetone Q49546, Manicure Q747493 (mentions). No Wikipedia body links.

## Notes for the row-72 writer (halloween-nails)

The sources above are spent once each in this batch. Bansal & Grover and the AAD tips would fail the swap test if row 72 reused them. Pick style/trend sources instead. Designs used here: matte midnight, pumpkin stem, orange/black alternating, dripping red tips, ghost faces, polka dots, jack-o'-lantern, toothpick web, cat eyes, taped candy corn, sponge sunset gradient, reinforcement-ring half-moons, diagonal split, glitter ring finger, dangling spider, eyeball accent.
