# Research brief — dev-deepawali-2027

- Keyword: dev deepawali 2027 (anchor: diwali 2027 date in india calendar with holidays)
- Row phenomenon: Varanasi ghats festival on Kartik Purnima
- Measured: 2026-10-22

## Phase 0 — first-party data
No Dev Deepawali or Diwali usage data exists and SubhSandesh has no Dev Deepawali template. Used (verbatim in factsUsed): Raksha Bandhan 2026 lead time (n = 89; 49.4% on the day, 27.0% the day before) and the "not one more than 7 days ahead" line, both labelled in the body as a different festival; 48.3% phone-open; 11.1 average views per page. Did not run `npm run facts`.

## Phase 1 — SERP (DuckDuckGo, lower confidence)
WebSearch was at its session cap and Firecrawl had no credits. Searches (3 of 3): DuckDuckGo HTML kl=in-en for "dev deepawali 2027"; `dev deepawali varanasi site:uptourism.gov.in`; `dev deepawali site:varanasi.nic.in` (no results).

| # | URL | Fetched | Words | Date given | Direct answer | Times | Varanasi/travel | Sources cited | Notes |
|---|---|---|---|---|---|---|---|---|---|
| 1 | samvat.in/festivals/dev-diwali-2027 | yes | ~350 | Sun 14 Nov | first line | none | one line | none | sunrise rule, New Delhi baseline; FAQ block |
| 2 | hellobanaras.com/festival/dev-deepawali-2027 | yes | ~450 | Sat 13 Nov | top card | deepdan 5:10–7:47 PM, choghadiya, moonrise 4:25 PM | one paragraph ("over 1 million diyas", "PM often attends") | none | local site, unsourced claims |
| 3 | drikpanchang.com …dev-deepawali-date-time.html?year=2027 | yes | tool | Sat 13 Nov | top | pradosh 5:11–7:48 PM; Purnima 9:55 AM–8:55 AM | legend paragraph | none | date reference only (exempt), not linked |
| 4 | snanify.com/muhurat/dev-deepawali-2027 | yes | ~600 | Sun 14 Nov | top | godhuli window | Haridwar/Prayagraj/Mathura, not Varanasi | "checked against Drik Panchang" | sunrise rule at Har Ki Pauri |
| 5 | mypanchang.com/devdiwali.php?yr=2027 | yes | ~500 | 13 Nov (Bengaluru) | top | Purnima 9:55:27 AM–8:55:35 AM | short paragraph | none | Tripurari legend, deepa shloka |
| 6 | dekhopanchang.com/en/hindu-calendar/2027 | snippet | — | — | — | — | — | — | general calendar |
| 7 | drikpanchang.com/diwali/diwali-puja-calendar.html?year=2027 | snippet | — | — | — | — | — | — | Diwali calendar |
| 8 | bhaktiangan.com/kartik-purnima-2027 | snippet | — | Sun 14 Nov | — | — | — | — | Kartik Purnima page |
| 9 | hinducalculator.com/diwali-calendar/2027 | snippet | — | — | — | — | — | — | Diwali calendar |
| 10 | kundalimatches.com/festival/kartik-purnima-2027 | snippet | — | Sat 13 Nov | — | — | — | — | astrology site |

Date split in the ten results: 4 say Saturday 13 Nov (2, 3, 5, 10), 3 say Sunday 14 Nov (1, 4, 8), 3 do not state it. Weak results: 7 of 10 (thin auto-generated panchang/astrology pages, none with official travel facts).
Cannibalisation gate: 1 URL shared with b1 diwali-2027-calendar (drik diwali-puja-calendar), 1 with b2 chhath-puja-2027 (dekhopanchang). Below 4.

## Phase 2 — gap
- Table stakes: date, Purnima tithi window, Tripurari/“Diwali of the gods” meaning, Varanasi ghats.
- Gap: no page explains WHY results disagree (pradosh vs sunrise rule); no page gives official, dated Varanasi facts (UP Tourism, district) — the only Varanasi claims are unsourced; no page compares neighbouring years; no page notes Bharani nakshatra, which UP Tourism's brochure says raises the day's importance.
- Stale/unsourced: HelloBanaras "over 1 million diyas" without source/year; replaced with UP Tourism's ">15 lakh diyas in 2020".
- Fan-out sub-queries → H2s/FAQs: 13 or 14 November? what is it? how/when are the ghats lit? 2026/2028 dates? how to get there / airport distance? where to watch / crowd? what if I can't go?
- Angle: wins by being the only post that explains the 4-3 13/14 November split with the rule names and an independent computation across 2026-2028, plus dated official Varanasi facts, with SubhSandesh's phone-open rate and Raksha Bandhan lead-time analogue for remote senders.

## Phase 3 — sources (all fetched)
1. UP Tourism, Dev Deepavali e-brochure PDF (89 pp., PDF dated Dec 2023) — full text via pdftotext. 84 ghats/8 km Ravi Ghat–Raj Ghat; Hazara 1,000 lamps c.1720 Ahilyabai, lit first; 1985 revival (Mahant Narayan Guru), 1986 Kashi Naresh at Panchganga, five ghats; aarti 1991, regular from 14 Nov 1997; 21 Brahmins + 41 girls; >15 lakh diyas 2020, 135 countries; balloon festival 3 days; Alaknanda cruise 2018; Bharani/Rohini note; airport 22 km.
2. UP Tourism, Varanasi–Sarnath page (no date) — Dev Deepawali 15 days after Deepawali; airport 30 km; winter 5–15.5 °C, woollens.
3. District Varanasi, How to Reach (no date) — airport 22 km (30 from Sarnath); DDU Jn 16 km; two tourist offices with phone numbers.
4. Sharma & Agrawal, Turizam 25(2):55–71, 2021 (peer-reviewed, open PDF read in full) — 154 respondents 2014–2016; 69% first visit; 60% bathed, no foreign tourist; most rated water dirty/very dirty.
5. Parker et al., Journal of Travel Medicine, 1 Dec 2024, PMC11646089 (OA CC BY-NC, full text via Europe PMC) — Ganga Mahotsav Varanasi 100–150k/day, 5 days; mass-gathering risks (overcrowding, transport hazards, stampedes).
6. Drik Panchang 2026/2027/2028 Dev Deepawali pages — date reference only (exempt), not linked.

findpapers queries tried: "Varanasi ghats festival on Kartik Purnima", "Dev Deepawali Varanasi", "Ganga water quality Varanasi mass bathing festival", "religious tourism Varanasi ghats pilgrims crowd". Rejected: IRJMETS, IJFMR, IJRASET (predatory list); Routledge chapters (Taylor & Francis); Wiley 1996 Mahakumbh paper (Wiley domain at cap); Landscape Journal (paywalled).

Own computation: astronomy-engine 2.1.19 for Varanasi — Purnima 2026: 23 Nov 23:43–24 Nov 20:24; 2027: 13 Nov 09:56–14 Nov 08:56; 2028: 1 Nov 13:09–2 Nov 14:47 (all IST). Sunset 13/14 Nov 2027 17:10; moonrise 13 Nov 16:21. No lunar eclipse on Kartik Purnima 2027.

## Links
Internal: /happy-diwali (mandatory, after the "can't be at the ghats" section) + /photo-puzzle (traveller sending a ghat photo home). Outbound in body: 5 (UP Tourism brochure, UP Tourism Varanasi page, varanasi.nic.in, Europe PMC, scindeks). No competitor links; no Wikipedia links.
