# Research brief: navratri wishes for wife

- Slug: `navratri-wishes-for-wife` (Strapi slug check 2026-10-12: free)
- Absorbs: "navratri wishes for wife in hindi" (Hindi H2 with Devanagari + romanised + gloss)
- Body language: en. Category: indian-festivals. Templates: /dandiya-partner (mandatory), /missyou-gf, /love-gf
- WebSearch calls used: **1 of 2** (SERP only). No browser tools. Competitor pages read via ctx_fetch_and_index / sandbox fetch.

## Phase 0: first-party data

Read `content/facts.md` directly (no `npm run facts`). No Navratri or dandiya-partner usage data exists, and the post says so in its table.

Used (byte-verbatim in `factsUsed`):
- 48.3% of shared pages opened on a phone (opening paragraph): bears on wish length.
- 38.5% of creators password-protect (opening paragraph, wrong-move section): bears on privacy and shared phones in a joint household.
- Miss-you segment: 43.5% password, 13.6% voice note, n=214 (the wife-at-her-parents'-home situation). Caveat stated in body: two months of data since 28 July 2026, not festival data.
- love-gf 29.7% of all views (alternative link).
- Raksha Bandhan lead time, 49.4% on the day (table). Disclosed in body as a different, one-day festival, n=89, an analogue and not Navratri data.

Template features described come only from `template-spec.md`: nine lines, up to six photos, date/time/venue/dress code, clash sticks to open, nine diyas, colour pick, No becomes a second Yes after five tries, a 1080×1920 Dandiya Pass, an email on the first yes, "Any night you pick", English UI, one-to-one only.

## Phase 1: SERP (US-served (WebSearch), 12 Oct 2026, query "navratri wishes for wife")

| # | URL | Status | Words | Wife-specific? | Date signal | Structure / notes |
|---|---|---|---|---|---|---|
| 1 | udayavani.com, PM Modi greets people on Navratri | 403 | n/a | No (news item) | n/a | Off-intent news |
| 2 | lutonhoo.oandg.co.uk (scraped mirror) | fetch failed | n/a | No ("friends and family" in title) | n/a | Spam mirror, never cite |
| 3 | smartpuja.com/blog/navratri-wishes | 200 but redirects to services homepage | ~1,400 (homepage) | No | title "2023" in SERP | Wishes page gone; puja-booking sales page |
| 4 | outlookindia.com brand-studio, Sharad Navratri 2024 | 200 | ~1,490 | **0 mentions of wife** | Published 26 Sep 2024 | H2s: Traditional / Joyful / Family & friends / Quotes. Generic lists, no FAQ |
| 5 | smartpuja wp-json post | n/a | n/a | n/a | n/a | Duplicate of #3 |
| 6 | punekarnews.in/?p=157138 | 200 | ~6,000 | **0** | 15 Oct 2023 | "500 wishes" single numbered list, no headings |
| 7 | eduyush.com/en-us/blogs/lifestyle/navratri-wishes-in-hindi | 200 | ~7,500 | **0 (wife / पत्नी / पति all 0)** | Title "2025", H2s all "(2025)" | 11 Hindi H2 categories (short, WhatsApp, business, shayari...), FAQ |
| 8 | fithindi.thequint.com, Navratri 2021 | 403 | n/a | No (title "loved ones") | 2021 | Stale |
| 9 | fithindi.thequint.com, Chaitra 2023 | not fetched | n/a | No | 2023, wrong Navratri | Stale |

**Weak count: 9 of 9 returned are weak** for this intent: none is written for a wife; two are 403 news/stale items, one is a dead redirect, one is a spam mirror, and the three readable list pages carry zero occurrences of "wife". Corroborated by `serps.md` row "navratri wishes for wife in hindi romantic" (8 weak: eduyush 2025, tring, quint 2022, capcut) and "happy navratri wishes for husband wife romantic" (8 weak).

Where the direct answer appears: no page answers "what to write to a wife"; all open with a generic festival paragraph. No page uses first-party data, a table, or dated research.

## Phase 2: gap analysis

- Table stakes: a quantity of ready-to-send wishes; a Hindi set; short WhatsApp-length lines.
- The gap: nobody addresses a *wife*, meaning married-life situations: fasting together or for each other, the wife who runs the puja and kanya pujan, garba after years of marriage, first Navratri after the wedding (in the in-laws' home), and the wife at her natal home (often for pregnancy).
- Stale data: eduyush is still "2025", Outlook 2024, punekar 2023, quint 2021/2023.
- Fan-out sub-queries → H2/H3/FAQ: what to write to a wife; Hindi wishes for wife; when kanya pujan is (2026/2027); first Navratri after marriage; wife at parents' house; should husband fast too; pregnant wife fasting; invite wife to garba; Navratri 2027 dates.
- Sibling split: navratri-wishes-for-love owns night-by-night for any partner (its H3s are nine nights). This page uses six *situations* and different lines; -husband/-girlfriend/-boyfriend own their recipients. Stated in prose, no /blog/ links.

**Angle:** wins by being the only result written to a wife at all, sorted by married-life situation, each tied to open research on that situation plus SubhSandesh's phone-open and privacy numbers.

## Phase 3: sources (all fetched; full text read via Europe PMC XML; PMC pages return 200)

| Source | Subject test | Use | Licence |
|---|---|---|---|
| Gupta et al., "Pragmatic dietary advice for diabetes during Navratris", IJEM, Jan–Feb 2017, PMC5240068 | Navratri fasting: pass | Small meals ~3 h apart instead of one heavy meal; fasting harmful for pregnant women with diabetes and poorly controlled diabetes | CC BY-NC-SA (cite/link only) |
| Weitkamp et al., "Exploring domains and ways of expressing gratitude in older couples", Health Psychology Open, 3 Dec 2025, PMC12678730 | Spousal gratitude: pass | 43 couples (Swiss, mean ~50 yrs together, 89% married); gratitude for running the household; 40.7% support, 24.4% joint achievements, 25.6% good life together; expressed verbally and via affection and gifts | CC BY 4.0 |
| Brown et al., "Patrilocality in South Asia as a determinant of maternal mental health: A scoping review", J Public Health Research, Apr 2026, PMC13242563 | Post-marital residence: pass | Patrilocal residence common; NFHS-5 ~42% non-nuclear households; DHS analyses link it to fewer natal-kin visits. Only the residence facts are used, not the violence/mental-health findings | CC BY-NC |
| Patil et al., temporary childbirth migration protocol, BMJ Open, 5 Feb 2026, PMC12878404 | Wife at natal home: pass | Women returning to natal homes for pregnancy/delivery/postpartum is long-standing; cited prior work: one-third (Bihar, MP), two-thirds of urban migrants (Mumbai) | CC BY-NC |
| Drik Panchang, New Delhi, 2026 and year=2027 pages | Date reference (cap-exempt) | 2026: 11 Oct start, Ashtami + Navami 19 Oct, Dussehra 20 Oct. 2027: 30 Sep start, Ashtami 7 Oct, Navami 8 Oct, Dussehra 9 Oct | n/a |

findpapers.mjs queries tried: "expressed gratitude spouse marital quality", "joint religious activities couples marital satisfaction", "Hindu women fasting vrat household ritual" (Crossref only: Ṣaṣṭhī Vow 2024, IJHS 2018, not OA-verified, not used), "married women natal home visits India kinship", "perceived partner appreciation household labour division", "Navratri fasting", "gratitude romantic partner relationship maintenance", "vrat vow women Hindu husband wellbeing", "kumari puja girl worship Navaratri" (no OA scholarly hit; kanya pujan has no topical paper), "newlywed India first year marriage adjustment wife".

Caps: all four papers on pmc.ncbi.nlm.nih.gov (cap-exempt per verify.config.json); no sibling cites any of the four PMCIDs at time of writing. capcheck: no banned URLs.

Swap-test risk (recorded as an audit failure): the fasting review and the gratitude study could plausibly fit the -husband sibling.

## Brief claims checked

- Ashtami and Navami both on 19 Oct 2026 (IST): **confirmed** on drikpanchang New Delhi.
- 2027 dates 30 Sep – 8 Oct, Dussehra 9 Oct: **confirmed**; the brief omits 2027 Ashtami (7 Oct) and Navami (8 Oct), which are different days.
- Prompt claim "eduyush, tring, quint 2022, capcut — 8 weak of 10, none written for a wife": consistent with serps.md for the Hindi variant; my English-variant SERP returned a different set (no tring/capcut) with 9 of 9 weak.
