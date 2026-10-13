# Research brief — halloween porch decorations (row 154, absorbs "halloween porch ideas")

Batch `2026-10-13-halloween-b4` · slug `halloween-porch-decorations` · category `festive-beats` · written 2026-10-13

## Phase 0 — first-party data
No Halloween or porch data exists in `content/facts.md` (BRIEF §3). Used, verbatim:
- Raksha Bandhan 2026 lead-time line (49.4% built on the festival day), labelled as the nearest analogue, to argue for a same-day set-up.
- 48.3% of shared pages opened on a phone (platform-wide), for the far-away recipient seeing a porch photo.
- Average 11.1 views per created page (platform-wide, labelled as not Halloween).
Template-spec features of /happy-halloween and /happy-halloween-premium are the only product claims.

## Phase 1 — SERP (WebSearch, US index; 1 search used)
Query: `halloween porch decorations`. Top results: homesandgardens.com, vrafortoday.org/?p=6265 (spam), tractorsupply.com, bfa-collective.beehiiv.com, homestars.com, static.intrafocus.com/?p= (hijacked-subdomain spam), gardeningetc.com, julieblanner.com (off-target: last-minute ideas), familius.com (shop page).

**Weak results in top 9: 5** (vrafortoday spam, intrafocus spam, beehiiv Amazon-affiliate list, familius shop, julieblanner off-target). Gate 4 not triggered.

| Page | Words (approx) | Structure | Direct answer | Data / dates | Format | Optimising for |
|---|---|---|---|---|---|---|
| homesandgardens.com (updated 28 Aug 2026) | ~3,000 incl. shop rail | H1 + 10 numbered H3 ideas, shop module | No; intro then list | None | Images, affiliate links, no FAQ, no table | Style inspiration + affiliate |
| gardeningetc.com | long, 14 numbered H2 ideas + budget H2 | 14 ideas (crates, scarecrow, pumpkins…) | Intro paragraph, then list | None; mentions LED instead of candle once | Images, no table | Style inspiration |
| bfa-collective.beehiiv.com (24 May 2025) | ~1,500 | Product picks table + sections | Product table first | None | Amazon table, AI-generated images | Affiliate sales |
| tractorsupply.com | fetch failed (empty response) — judged from snippet | Product/category guide | — | — | — | Store sales |
| homestars.com | HTTP 403 — judged from snippet only | List; "basic setup in a couple of hours" | — | — | — | Home-services lead gen |

## Phase 2 — gap
- **Table stakes:** pumpkins, lighting, bats/witches/skeletons, budget ideas, LED not candles (mentioned in passing).
- **Gap:** no page groups ideas by porch type (apartment door, stoop, covered, large, steps, path); none gives cost + setup minutes + weather + scare per idea; none treats the walkway as a constraint; none covers the four "candy here?" signals (porch light, teal pumpkin, blue bucket, out-of-candy sign); none sources safety (cords, steps); none mentions HOA/lease rules.
- **Stale data:** none cited at all.
- **Fan-out:** apartment/no-porch ideas; small porch ideas; steps; path; cheap ideas; teal pumpkin meaning; blue bucket meaning; porch light etiquette; outdoor cords; LED vs candle; fog; toddlers; HOA.
- **Angle:** wins by being the only post that sorts porch ideas by porch type and scores each for a clear 36-inch walkway, cost, setup minutes and weather, alongside the four candy signals.

## Sibling de-duplication
Read b2 `halloween-decorations-ideas` (front door & porch: mummy door, pumpkin step stack, layered doormat, witch crash-landing; window and yard ideas), b2 `diy-halloween-decorations` (18 builds incl. tomato-cage ghost, pallet sign, foam tombstones, tin-can luminaries, scarecrow), b3 `pumpkin-carving-ideas` (porch trios, welcome trio). None of those ideas reused. b3 `trick-or-treat-quotes` also covers teal/blue-bucket/porch light; wording rephrased to avoid overlap. A 5-word shingle check against all 150 prior posts + b4 siblings leaves only shared template-feature, date and facts.md phrasing.

## Phase 3 — sources (all fetched 2026-10-13)
| # | Source | What it supports | Published | Read |
|---|---|---|---|---|
| 1 | europepmc.org/article/PMC/PMC11593799 — Kuzuoglu, Glover, Moyer, Todd, IJERPH 21(11):1519, CC BY | 45 residents, Kitchener-Waterloo: porches prompt casual interactions; Christmas/Halloween decorations can become communal efforts; resident-led changes "voyeuristic", organised ones better at collectivisation | 2024-11-15 | Full text |
| 2 | foodallergy.org Teal Pumpkin Project | non-food treats in separate bowl; 2024 map >12,500 locations, 91 events, 50 states + DC, 13 other countries incl. England, Australia, India | undated | Full page |
| 3 | nationalautismassociation.org blue buckets | blue bucket as subtle signal a child/young adult may not participate in all of trick-or-treating | 2020-09-23 | Full page |
| 4 | access-board.gov ADA guide ch. 4 | 36" continuous clear width, 32" for max 24" (§403.5) | undated | Full page |
| 5 | electricalsafetyfirst.org.uk garden safety | RCD with all outdoor electrical equipment; not until dew has dried | undated | Full page |
| 6 | london-fire.gov.uk candles | flameless LED much safer; usable outdoors; Halloween raises candle/decoration risk | undated | Full page |

Subject test passes: 1, 2, 3. Peer-reviewed OA: 1 (MDPI megajournal — BRIEF says prefer others; it was the only open-access paper found that mentions Halloween decorations and porches together).

**Search terms tried for the paper (findpapers + Europe PMC + OpenAlex):** "holiday decorations neighbourhood sociability", "Halloween trick-or-treating neighbourhood", "neighbourhood social cohesion front yard decoration", "Halloween children neighborhood walkability", "front porch neighborhood social interaction", Europe PMC `"Halloween" AND neighborhood`, `"holiday decorations"`, `"Christmas decorations" AND neighbour`, `"front porch" AND social`, `"front garden" AND neighbour`. The classic study (Brown & Werner, holiday decorations and cul-de-sac cohesion, Environment and Behavior) is SAGE — banned.

Rejected: NFPA Halloween and electrical pages (JavaScript-only, no text this session); ESFI and CPSC (403); USFA (404); competitors (all SERP pages).

## Brief claims checked
- "ADA/clear path (find a source)": the Access Board 36" width is a standard for public and commercial facilities; it does not bind private homes. The post states this and uses it as a benchmark.
- "foodallergy.org is fresh in b4": confirmed by capcheck (0 uses before this post).
- Fog machine and animatronic guidance: no source found; labelled in the body as unsourced house rules.

## Verifier / capcheck
`verify-batch.mjs`: my slug clean (1,797 words, 10 FAQs, 48/2 audit). Only batch-level problem: `batch.json` blog list lags the files on disk (orchestrator's file; not edited). `capcheck.mjs`: no banned URLs, no domain at cap.
