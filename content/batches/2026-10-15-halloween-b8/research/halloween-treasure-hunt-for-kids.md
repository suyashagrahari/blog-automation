# Research brief — halloween treasure hunt for kids (rank 378)

Slug: `halloween-treasure-hunt-for-kids` · absorbs "halloween treasure hunt clues" · written 2026-10-15

## Phase 0 — first-party data
No Halloween or hunt data exists (BRIEF §3). Platform-wide facts used, verbatim:
- 48.3% of shared pages are opened on a phone (27,725 of 57,456 views) — measured 2026-09-24 (intro)
- 38.5% of creators password-protect their page before sharing it (2,000 of 5,199) — measured 2026-09-24 (intro; cipher-trail password mechanic)
- Average views per created page: 11.1 — measured 2026-09-24 (card section)

## Phase 1 — SERP (WebSearch, US index; 1 search used, Firecrawl 0)
| # | URL | Type | Notes |
|---|---|---|---|
| 1 | familinparis.fr (Bercy Village hunt) | Event listing (weak) | Paris event, ages 4–10, 30 min, groups of 5 max, 200 g candy bag. Not a how-to. |
| 2 | tech.mozilla.com.tw/…printable | Hijacked-subdomain spam | Weak, not analysed. |
| 3 | sf.funcheap.com | Event listing (weak) | SF event. |
| 4 | familinparis.fr (jeu de piste) | Event listing (weak) | Duplicate domain. |
| 5 | static.intrafocus.com | Hijacked-subdomain spam | Weak. |
| 6 | grapevine.nu/shop — Halloween Mystery 4–6 | Paid printable kit (€16.99) | Story kit, 6 key cards, two age bands 4–6 / 7–10. No free clues, no safety. Product page (weak). |
| 7 | twinkl.com.au clue cards | Paid printable | Fetch returned empty; judged from snippet: ages 7–11, younger need reading support. |
| 8 | darcyandbrian.com printable clues | Competitor (printable blog) | ~1,500 words, 12 riddle cards behind a download, FAQ, generic "builds reading comprehension" claims with no source, candy prizes. Direct answer buried after intro. |
| 9 | inspirationlaboratories.com flashlight hunt | Blog (2016) | ~350 words: hide erasers, search with flashlights. No clues. |
| 10 | mail.medacs.com | Hijacked-subdomain spam | Weak. |

Weak in top 10: 7 (3 spam, 3 event listings, 1 product page). Gate 4 not triggered.
Cannibalisation vs b6 `halloween-scavenger-hunt` (romper, teachbesideme, intrafocus/forefrontweb spam): 0 real URLs shared (only spam host static.intrafocus.com). Sub-intent kept distinct: one clue trail to one treasure, graded by reading level, with ciphers.

## Phase 2 — gap
- Table stakes: printable clue cards, indoor/outdoor spots, a prize at the end.
- Gap: nobody grades clue difficulty to reading level by age; nobody offers a cipher trail for 10–12; nobody says where NOT to hide clues (appliances, high furniture); no adult ratio; prizes default to candy.
- Fan-out: what clues for a 5-year-old / 10-year-old; how many clues; where to hide; how many adults; non-candy treasure; how long; small-flat version.
- Angle: wins by being the only post that grades three complete original trails to children's reading standards, pairs each with a garden version, names spots to avoid with tip-over injury data, and ends the cipher trail on a password (38.5% of creators already use one).

## Phase 3 — sources (all fetched 2026-10-15)
1. Gutenberg eBook 120, *Treasure Island* (1883) — map text "Bulk of treasure here", "Tall tree, Spy-glass shoulder…" verified in full text. Cap-exempt.
2. thecorestandards.org RF K–3 (2010) — RF.K.2a rhyming, RF.K.3c sight words (the, of, to, you, she, my, is…), RF.2.3c two-syllable long-vowel words, RF.3.3c multisyllable. Not used in b1–b8.
3. Park et al. 2025, *npj Science of Learning* (Nature portfolio, not Sci Rep), PMC12770468 via Europe PMC — 103 children 5–7, question-asking valued new info more (r = 0.23), lower-knowledge children benefited most. Abstract + full-text metadata read; licence CC BY-NC-ND (cited, not reproduced). Not in b1–b8.
4. Lu et al. 2021, *Injury Epidemiology* (BMC), PMC8394564 — full text read: 560,203 children 1990–2019, 18,673/yr, under-6s 69.9%; under-6 mechanism 19.5% pulled onto self, 11.3% climbing (Table 1). Not in b1–b8.
Rejected: Caunt et al. 2026 Dev Sci curiosity search task (Stage-1 registered report, no results yet); Brain Sci / JEMR reading papers (MDPI, full); Frontiers, SAGE, Elsevier (Cell, Dev Cogn Neurosci) reading papers (banned); brtprojects ORF norms (used by b6 lunchbox; lane too close); foodallergy.org (swap-test filler, used b2/b3/b6). Child choking/small-parts sources avoided (row 366 owns them).

## Sibling clash checks
- b6 scavenger-hunt hiding spots (teddy, boot, cushion, pumpkin, fridge drawer, laundry basket, coat, game box, wellies, under bed, watering can, flowerpot, wheelbarrow, bird table, gate) — none reused.
- b2 party-games-for-kids "Crypt Code Cracker" uses a pumpkin-symbol alphabet — not used here.
- In-batch 377 escape room uses an A=1 tombstone cipher and hint tokens — removed my A=1 card (replaced with a vowel-free line) and my token idea.
- 5-gram overlap scan vs all Halloween batch posts: only boilerplate (Halloween date line, "SubhSandesh platform data, measured 24 September 2026").

## Structural limits
- First-party table column fails honestly (no Halloween data).
- Tip-over paper may fail the swap test (could fit a decor/safety post).
- Adult ratios and times are labelled working estimates; no official home-game standard found.
