# Research brief — halloween party themes

Row 28 · slug `halloween-party-themes` · absorbs "halloween party theme ideas" · theme party · PLAN weak 5/10.

## Phase 0 — first-party data
facts.md read directly (no `npm run facts`). No Halloween data exists. Used:
- 48.3% of shared pages are opened on a phone (27,725 of 57,456 views) — measured 2026-09-24 → dress code must fit one phone-screen sentence (first 150 words).
- Raksha Bandhan 2026 lead time … 49.4% built on the festival day itself, 27.0% the day before … — measured 2026-09-09 → labelled as nearest festival analogue; people decide late (first 150 words).
- Average views per created page: 11.1 — measured 2026-09-24 → closing section.
Template spec used for /happy-halloween and premium feature descriptions only.

## Phase 1 — SERP (Firecrawl, location "United States", 2026-10-12; 2 searches used in total)
| # | URL | Type | Weak? |
|---|---|---|---|
| 1 | spookylittlehalloween.com/blog/killer-halloween-party-themes | small blog, 15 themes | weak |
| 2 | reddit.com/r/halloween (thread) | UGC | weak |
| 3 | juliacharleseventmanagement.co.uk/20-halloween-party-themes | UK event-co blog, 20 themes | weak |
| 4 | pinterest.com/pin/… | UGC | weak |
| 5 | treschicparty.com (11 themes) | shop blog | weak (HTTP 429, not analysed) |
| 6 | care.com/c/22-halloween-party-themes | major site, 26–28 themes | strong |
| 7 | classpop.com/magazine/halloween-party-themes | brand magazine, 43 themes, FAQ | medium-strong |
| 8 | pinterest.com/ideas/… | UGC | weak |
| 9 | halloweenforum.com thread | forum | weak |
| 10 | 1800flowers.com/articles/…/halloween-party-ideas | gifting retailer (competitor), 14 themes | strong |

Weak count by my reading: 7/10 (PLAN said 5). Gate 4 not triggered.

### Top-5 analysed (ctx_fetch_and_index)
| Page | Shape | Direct answer | Data / dates | Format | Optimising for |
|---|---|---|---|---|---|
| spookylittlehalloween (Jun, updated) | 15 H4 themes, first-person host | after a 4-para intro | none | photos + outbound "see it here" links, affiliate bar | course upsell |
| juliacharles (updated 2026) | 20 H3 themes, TOC, core-elements bullets | after intro + TOC | none | bullets per theme, no costs | event-company leads |
| care.com | 26/28 H2 themes, TikTok embeds | after 2-line intro | none | prose, embeds | breadth |
| classpop (updated Jun 2026) | 43 H3 themes by audience (adults/kids/family/work/scary) + FAQ | after 2-para intro citing NPR | none | photos, FAQ | class bookings |
| 1800flowers (Sep 2024, mod Oct 2024) | 14 H3 themes in mood groups, planner quotes | after 2-para intro | none | photos + product links | product sales |

Table stakes: classic monsters/monster mash, haunted house/mansion, witches, carnival, murder mystery, Día de los Muertos, harvest/pumpkin, vintage/era, pink/pastel.
Gaps: no consistent per-theme fields; no cost tiers; nobody addresses noise/flat suitability; no kid-friendliness flags beyond classpop's grouping; Día de los Muertos treated as décor ("sugar skulls", marigolds) with no explanation of the ofrenda or dates (juliacharles even lists "sugar skills"); many themes are copyrighted IP (Stranger Things, Beetlejuice, Harry Potter, Willy Wonka) — nobody points hosts to public-domain sources; no research on why decade themes work.
Fan-out: themes for adults · easy/cheap themes · small apartment · non-scary/kids · Día de los Muertos respectfully · how far ahead to announce · decade party music · Frankenstein/Dracula copyright · which night · invitations.

Angle: wins by being the only post that writes every theme as the same spec card (invite line, 3 décor moves, one serve, music era, cost tier, best fit) and maps themes to flat/kids/yard/no-budget constraints with a sourced 11pm noise line, grounded in the 48.3% phone-open rate and late-decision Raksha Bandhan data.

## Phase 3 — sources (all fetched)
1. Sidhu, Urian, Zheng & Grahn 2025, PLOS ONE, "Throwbacks that move us" — https://europepmc.org/article/PMC/PMC12083803 (CC BY, full text read). n=102, aged 23–28, Billboard top songs 2010–2015 vs 2018–2021; nostalgic songs → higher desire to tap/move/dance; only nostalgia predicted dance. Found via findpapers "nostalgia music reminiscence bump". journals.plos.org at 2 posts, so linked via Europe PMC (exempt).
2. INPI 2019-10-23 — https://www.gob.mx/inpi/articulos/conoces-el-significado-de-los-elementos-de-una-ofrenda-de-dia-de-muertos (Spanish, full page via firecrawl_scrape after gob.mx bot challenge). Ofrenda elements; sugar skulls = death always present; 31 Oct children's ofrenda, souls arrive 1 Nov.
3. Project Gutenberg #41445 — Frankenstein 1818 edition record (exempt domain). Other years fact-checked via Wikipedia API (not cited): Sleepy Hollow 1820, Usher 1839, The Raven Jan 1845, Dracula 1897.
4. DEFRA 2015-04-07 (updated 2017-12-21) — https://www.gov.uk/guidance/noise-nuisances-how-councils-deal-with-complaints: warning notices 11pm–7am (England). The one context source. gov.uk now in 3 posts (fancy-dress, in-the-uk, this) — at cap.

Rejected/avoided: ich.unesco.org (full), inah.gob.mx (used by pickup-lines-in-spanish), Frontiers "Evoking nostalgia by presenting hit-song lists" (Frontiers over cap), Psychology of Music reminiscence-bump paper (SAGE banned), Tsigeman 2026 nostalgia affect (off-subject), Cattacin 2023 festival cancellations (weak subject fit). Searches tried with no themed-event hit: "themed environment immersion experience", "costume party collective effervescence", "nostalgia social connectedness" (OA results off-subject or capped).

## Claims checked against the brief
- "ich.unesco.org is full" — true per capcheck.
- PLAN weak 5/10 — measured 7/10 by my reading.
- Public-domain years — verified as above.
