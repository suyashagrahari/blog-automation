# Research brief — navratri day wise wishes

- Slug: `navratri-day-wise-wishes` · bodyLanguage `en` (one Devanagari line + romanisation + gloss for the shared 19 Oct 2026 wish)
- Also covers: navratri day 1 … day 9 wishes, navratri 9 days wishes with goddess names
- WebSearch calls used: **1** (SERP). Research used Crossref, Europe PMC, the journal sites and Drik Panchang via fetch (no WebSearch).

## Sibling split (BRIEF §9)

`navratri-wishes-for-love` is romantic and grouped into three relationship chapters; `navratri-status-in-hindi` is Hindi status lines per tithi with character counts; `navratri-wishes-in-hindi` is Hindi by pronoun register; `navratri-wishes-in-english` is by mixed-audience group. **This page is the general-audience English day-by-day guide: three original lines per Navadurga form (family, friend, status), one line of verified iconography per form, and 2026 + 2027 tithi tables.** No sibling gives English per-form lines for three recipients or a 2027 tithi table with the tithi at sunrise.

## Phase 0 — first-party data

facts.md read directly (no `npm run facts`). Used, verbatim:
- Raksha Bandhan 2026 lead time (n=89): 49.4% built on the festival day, median 0 days — labelled in body as the nearest analogue, not Navratri data.
- 48.3% of shared pages opened on a phone.
- 38.5% of creators password-protect their page.
No dandiya-partner or Navratri usage data exists; none stated or implied. Template facts (nine lines, six photos, No → Yes after five tries, English UI, one-to-one) from template-spec.md only.

## Phase 1 — SERP (US-served (WebSearch), 12 Oct 2026, "navratri day wise wishes")

| # | URL (US-served) | Format / length | Direct answer | Dates | Day-wise? | Notes |
|---|---|---|---|---|---|---|
| 1 | hindutone.com/festivals/navratri-2026-wishes-messages-quotes-instagram-captions | Long hub (~25 KB text): day-wise list, family/office/garba, Ashtami–Navami section, captions | Table near top | 2026, refreshed | Yes: ONE wish per Devi | Day table maps Day 8 Mahagauri = Sun 18 Oct and Day 9 = Mon 19 Oct, while its own Ashtami section says Ashtami+Navami 19 Oct (internally inconsistent). Colours days 8–9 "lists differ". |
| 2 | newsonair.gov.in (PM Modi fifth-day greeting) | News item | n/a | 2025 | No | Not a wish page |
| 3 | thestatesman.com/tag/navratri-wishes | Tag page | — | 2025 | — | HTTP 403, not analysed |
| 4 | bhaktibharat.com/en/wishes-quotes/navratri | Downloadable image cards | None | undated | Partial (Day 3/4 cards only) | Lists the nine names in one sentence |
| 5 | punekarnews.in/?p=157138 | "500 wishes", numbered | Generic | 15 Oct 2023 | No | Generic lines, no goddess per day |
| 6 | smartpuja.com/blog/navratri-wishes | 14 wishes, puja-service upsell | Generic | 2023 | No | |
| 7 | indiatvnews (celebs listing) | Day-1 roundups (2025) | — | 2025 | Per-article | Not fetched (listing page) |
| 8 | nestasia.in (Chaitra 2024) | 50 quotes | — | 2024 | No | Competitor-adjacent retailer |

Corroboration: `serps.md` row "navratri day-wise wishes 2026" (6 results: shubhpanchang, hindutone guides — no wish page). Also seen via a sibling's index: eduyush 2026 day-wise list (one wish per day) maps Day 8 Mahagauri = 18 Oct, Day 9 = 19 Oct — wrong for New Delhi.

**Weak results in top 10:** 6 of 8 (newsonair news item, statesman tag page, bhaktibharat image cards, punekar 2023 generic, smartpuja 2023 generic, nestasia 2024 Chaitra). Gate 4 passes.

## Phase 2 — gap

- Table stakes: nine names in order; one wish per day; day/date/colour table.
- Gap: (1) nobody keys the goddess to the **tithi at sunrise** — every list maps one goddess per calendar date, which breaks in 2026 (Saptami 17+18 Oct; Ashtami+Maha Navami 19 Oct New Delhi); (2) nobody offers different lines for different recipients per day; (3) nobody gives 2027; (4) nobody explains why days 8–9 colours shift.
- Stale: punekar/smartpuja 2023, nestasia 2024.
- Fan-out → H2s: what is a day-wise wish / order of nine forms; day N wishes; 2026 dates; 2027 dates and colours; which wish for whom; one-person invitation; when not to.
- Angle: wins by being the only post that keys three original per-form wishes to the tithi at sunrise (Mahagauri on 19 Oct 2026, not 18 Oct), with 2026/2027 Drik tables, using the 49.4% day-of build analogue and 48.3% phone share.

## Phase 3 — sources (all fetched)

| Source | What it supports | Read | Date |
|---|---|---|---|
| sa.wikisource.org — Devi Kavacham (देव्याः कवचम्) | Verses 3–5: प्रथमं शैलपुत्री … नवमं सिद्धिदात्री च नवदुर्गाः प्रकीर्तिताः — order of the nine | Full text via MediaWiki API | undated |
| journals.ed.ac.uk/himalaya/article/view/9978 — Chatterjee, "Bhairab Nach and Navadurga: Masked Rituals of Nepal", HIMALAYA 44(1), CC BY-NC-ND (cite/link only) | Bhaktapur Navadurga = masked ritual dance; Chitrakar family makes masks yearly; offerings in Dasain; masks placed in samadhi and destroyed | Full PDF (pdftotext) | 12 Jun 2025 |
| europepmc.org PMC12563348 — Neeralakeri et al., J Pharm Bioallied Sci, CC BY-NC-SA (cite/link only) | Kushmanda = ash gourd (Benincasa hispida); "used during Durga Puja" | Full text XML | 8 Sep 2025 |
| drikpanchang navdurga + 9 sub-pages | Iconography per form | Fetched each | undated |
| drikpanchang 2026 / 2027 calendars, geoname-id=1261481 | Tithi tables, colours (date/festival reference) | Fetched and parsed | undated |
| drikpanchang Maha Navami, Mahashtami, Vijayadashami pages (2026, 2027) | Tithi start/end times; Dussehra 20 Oct Delhi / 21 Oct Bengal (2026), 9 Oct / 10 Oct Bengal (2027) | Fetched | undated (fact-check only, not linked) |

Search terms tried (findpapers / Crossref / Europe PMC): "Navadurga nine forms goddess", "Navaratri goddess ritual Durga", "festival greeting messages WhatsApp India", "good morning messages WhatsApp India religious forwards", "Devi Mahatmya Durga Saptashati", "Navaratri", "Navadurga", "Durga nine forms". Found nothing open-access on day-wise greeting behaviour. "Nine Nights of the Goddess" (SUNY 2018) and "Goddess Durga and Sacred Female Power" (2010) are paywalled; not cited. OpenAlex (429), DOAB/OAPEN (403) unavailable. IJSR/predatory hits skipped.

## Verified 2026 / 2027 data (Drik, New Delhi)

2026: 11 Pratipada Shailaputri Orange · 12 Dwitiya White · 13 Tritiya Red · 14 Chaturthi Royal Blue · 15 Panchami Yellow · 16 Shashthi Green · 17 Saptami Kalaratri Grey · 18 Saptami (Ashtami from 8:27 AM) no puja listed, Purple · 19 Ashtami (Navami from 10:51 AM): Durga Ashtami, Mahagauri, Sandhi Puja 10:27–11:15 AM, Maha Navami, Peacock Green · 20 Navami: Ayudha Puja, Navami Homa, Parana, Durga Visarjan; Vijayadashami 20 Oct (Bengal 21 Oct).
2027: 30 Sep Amavasya at sunrise, Ghatasthapana, Shailaputri, Yellow · 1 Oct Green · 2 Grey · 3 Orange · 4 White · 5 Red · 6 Saptami Royal Blue · 7 Ashtami Mahagauri Pink · 8 Ashtami (Navami from 6:27 AM) Sandhi Puja 6:03–6:51 AM, Maha Navami, Purple · 9 Navami Ayudha Puja, Vijayadashami (Bengal 10 Oct).

## Brief / prompt claims checked

- **False (partly):** "Mahanavami/Ayudha puja 20 Oct in Drik's table". Drik puts **Maha Navami on 19 Oct 2026** (table and dedicated page); only Ayudha Puja, Navami Homa, Parana, Visarjan are on 20 Oct. BRIEF §1 bullet 2 (Ashtami and Maha Navami together on 19 Oct) is right; bullet 4's "Mahanavami … Tue 20 Oct" is wrong.
- True: Saptami spans 17–18 Oct 2026; Ashtami/Mahagauri 19 Oct New Delhi; 2027 Ashtami 7 Oct, Navami 8 Oct; colours days 1–7 by weekday, days 8–9 purple/peacock green (2026) and pink/purple (2027); Dussehra 2027 9 Oct.
- Not re-verified: Mysuru 21 Oct; Drik's US listing of Ashtami on 18 Oct (both taken from BRIEF).
- Drik's own Kushmanda page mislabels its Iconography paragraph "Goddess Siddhidatri rides on the lioness" (copy error); not used.
- eduyush's 2026 Day 8 = 18 Oct is wrong, and so is hindutone's table (the actual #1 result). Neither is named or linked in the body.
