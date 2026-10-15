# Research brief — halloween-sayings-for-signs (row 396)

Keyword: "halloween sayings for signs" (absorbs "halloween sign sayings"). Band under 300/mo. Slug free in Strapi (checked 2026-10-15).

## Phase 0 — first-party data
No Halloween data exists (BRIEF §3). Platform-wide lines used, framed as the contrast between a one-glance sign and a one-person page:
- Average views per created page: 11.1 — measured 2026-09-24
- 48.4% of views are on a touch device (phone or tablet) — measured 2026-09-24
- 90.9% of started pages are actually published and shared (4,724 of 5,199) — measured 2026-09-24
Honest note: none of these says anything about signs; the first-party table column fails.

## Phase 1 — SERP (2 searches used: 1 WebSearch, 1 DuckDuckGo)
**WebSearch (US index):** 9 of 9 results are hijacked-subdomain spam — jump.wordstream.com, teamsync.shenkar.ac.il, static.intrafocus.com (x5), netbox.point-broadband.com, msoid.icmbio.gov.br. Weak count in top 10: 9+ (Gate 4 passes).
**DuckDuckGo (lower confidence):** restoredecorandmore.com, midgeo.com, routinelyshares.com, etsy.com/market x2.

| Page | Words | Structure | Direct answer | Data | Format | Optimising for |
|---|---|---|---|---|---|---|
| restoredecorandmore.com "150+ Halloween Sayings For Signs" | n/a | bot wall — judged from snippet only | snippet: funny/scary/witchy/cute lists for door, yard, window | none | list | volume of lines |
| midgeo.com "110 Halloween Signs And Sayings" (10/09/2025) | ~1,600 page text | H2 by tone (classic, funny, spooky, cute, pumpkin, kid-friendly, vintage) | after an intro | none | lists, no table, no FAQ schema | tone-sorted line count |
| routinelyshares.com "100 Short, Cute and Spooky Halloween Sayings" (updated 8 Oct 2025) | ~2,700 page text | H2 by tone + one "for signs" H2 | after an intro | none | lists, no table, no FAQ | broad "sayings" incl. cards; some unclean lines |
| etsy.com market pages (x2) | product grid | n/a | n/a | n/a | products | selling sign files |
| WebSearch spam set | spun | tone buckets | — | — | — | — |

## Phase 2 — gap
- Table stakes: lots of sayings, grouped somehow; funny/spooky/cute.
- Gap: nobody sorts by sign TYPE, gives a word budget or letter height, or says anything about reading distance, contrast, lighting or weather. No sources anywhere.
- Fan-out: what should a sign say; how big should letters be; how many words; what colours read at night; fonts; chalkboard in rain; lighting; candy-bowl signs; scary signs and kids; renting/HOA.
- Angle: wins by being the only post that sorts original sayings by sign type with a word budget and letter height for each (ADA 703.5, MUTCD 2A.13, Legge & Bigelow fluent range) plus computed WCAG contrast ratios for Halloween colour pairs.

## Cannibalisation / siblings
- b6 halloween-slogans: owns slogans by venue (shop, café, school, safety, office, T-shirt), rhyme research, trade marks. This post owns sign type, size, contrast, lighting, weather. No line shared (5-gram check across all b1–b8 files: zero saying-line overlaps; residual overlaps are template-feature boilerplate and dates).
- b3 trick-or-treat-quotes owns bucket/pillowcase signs and porch-light rule — not used. b4 porch / b5 wreath / garland: no decor ideas reused. In-batch 393 neighbours: no "handing out / not tonight" lines. 395 candy puns: candy-bowl signs here are instructions, not puns.
- SERP URL overlap with slogans could not be measured (slogans' SERP list not stored); lane differs.

## Phase 3 — sources (all fetched)
1. ada.gov — 2010 ADA Standards, 703.5.1 (non-glare, contrast), 703.5.3 (no script/decorative), 703.5.5 table (5/8 in under 72 in; +1/8 in per foot). Published 15 Sep 2010. Benchmark only; binds public buildings.
2. mutcd.fhwa.dot.gov — 2009 Edition Ch. 2A: 2A.13 (1 in per 30 ft; brief; no punctuation), 2A.07 (street lighting ≠ sign illumination). Superseded by 11th edition (noted).
3. europepmc.org PMC3428264 — Legge & Bigelow 2011, J Vision (peer-reviewed). Abstract via Europe PMC REST (page 403s): fluent range x-height 0.2°–2°. Our arithmetic: 0.50 in at 12 ft, 1.68 in at 40 ft.
4. w3.org WCAG 2.2 (12 Dec 2024) — SC 1.4.3 4.5:1 / 3:1; contrast formula. Our computed ratios: #FFD700/black 15.0, #F2F2F2/#2F4F4F 8.0, #FF7518/black 7.8, #32CD32/#6A0DAD 4.4, #FF7518/#6A0DAD 3.4, #B22222/black 3.1, white/#FF7518 2.7, #6A0DAD/black 2.3.
Tried and rejected: usscfoundation.org legibility index (403); Heliyon (Elsevier, banned); i-Perception (SAGE, banned); Dobres 2016 Ergonomics (T&F, banned); IJERPH/Geriatrics older drivers (MDPI FULL); USDA FPL Wood Handbook (fetch failed).
Search terms: "letter size legibility viewing distance signs", "print size reading speed critical print size", "luminance contrast text legibility older adults low light", "uppercase lowercase word recognition distance legibility", "nighttime sign legibility older drivers", "low luminance visual acuity ageing mesopic"; Europe PMC title queries legibility+sign/colour/contrast.

## Letter-height arithmetic (table)
ADA step at eye level: 3 ft → 5/8 in; 12 ft → 1 3/8 in; 20 ft → 2 3/8 in; 40 ft → 4 7/8 in. MUTCD floor: 40 ft → 1 1/3 in. Distances per sign type are estimates.
