# Research brief — navratri wishes in gujarati

- Slug: `navratri-wishes-in-gujarati` · cluster wishes-language · bodyLanguage `gu`
- Also covers: navratri status in gujarati, navratri wishes gujarati text, નવરાત્રીની શુભેચ્છા
- Run date: 2026-10-12 · WebSearch calls used: **1** (SERP only) · no browser tools

## Phase 0 — first-party data

facts.md read directly (no `npm run facts`). No Navratri or /dandiya-partner usage data exists. Used:

1. 48.3% of shared pages are opened on a phone (27,725 of 57,456 views) — measured 2026-09-24 → why the wishes are one-screen length (first 150 words + table).
2. Raksha Bandhan 2026 lead time, n=89: 49.4% built on the festival day, median 0 days — labelled in body as a Raksha Bandhan analogue, not Navratri data.
3. 38.5% of creators password-protect their page — table row for /dandiya-partner.

Template facts (template-spec.md, not counted toward the 3): nine lines, up to six photos, 1080×1920 Dandiya Pass, No → second Yes after five tries, English UI, one-to-one only.

## Phase 1 — SERP, `navratri wishes in gujarati` (US-served (WebSearch))

| # (US-served (WebSearch)) | URL | Type / date | Weak? |
|---|---|---|---|
| 1 | republicworld.com/lifestyle/navratri-2020-quotes-and-wishes-in-gujarati | News roundup, "Updated 7 October 2021" | Weak: stale (2021 dates), garbled machine-translated Gujarati, Hindi loanword ઢેરો, folk lyric reproduced, one wish duplicated |
| 2 | tring.co.in/wishes/chaitra-navratri-wishes-in-gujarati | Celebrity-video marketplace, Chaitra (spring) festival | Weak: wrong festival for October intent |
| 3 | tring.co.in/wishes/navratri-wishes-in-gujarati (serves "100 Joyful Navratri Quotes in Gujarati") | Celebrity-video marketplace upsell | Weak-ish: translated-English register, mixes નવરાત્રી/નવરાત્રિ in one paragraph |
| 4 | eduyush.com/blogs/lifestyle/navratri-wishes-in-hindi | Hindi, "2025" | Weak: wrong language, stale year |
| 5 | lutonhoo.oandg.co.uk/en/navratri-wishes-in-hindi.html | Scraped mirror | Weak |
| 6 | eduyush.com/en-us/... (duplicate of 4) | — | Weak |
| 7 | swarajyamag.com ... what-navratri-and-garba-mean-to-a-gujarati-outside-gujarat | Essay, 14 Oct 2018 | Off-intent (no wishes) |
| 8 | hindupad.com/forums/... | Forum | Weak |
| 9 | hindutone.com/festivals/navratri-2026-wishes-... | 2026, English | Not weak on freshness; off-language. **Fetch failed**, not analysed |

Weak count: **≥7 of 9** returned. Gate 4 passes. Corroborated by `serps.md` row "navratri wishes in gujarati text | 6 weak | republicworld 2020/21, tring, hindutone".

### Top-page analysis (fetched via ctx_fetch_and_index)

| Page | Words / structure | Direct answer | Data cited | Format | Optimising for |
|---|---|---|---|---|---|
| Republic 2021 | ~3-min read; one H2, blockquote list of ~12 wishes | After a 2021 date intro | 2021 dates (Oct 7, Oct 15) — stale | Blockquotes, images, no FAQ | Image/quote grab |
| Tring Navratri | Long; 5 H2 lists (25/20 each), "100 quotes", celebrity CTA | After 3 paragraphs of translated filler | None | Numbered lists, images | Celebrity video sales |
| Tring Chaitra | 75+ wishes; family/friends sections | After filler | None; spring festival | Lists | Same |
| Swarajya 2018 | Long first-person essay | n/a | Aarti attributed to Sivanand Swami (16th c.) | Prose | Culture readers |

**Table stakes:** a list of Gujarati wishes, family/friends split, Maa Durga/Amba blessing language.

## Phase 2 — gap

- No page states a spelling rule; Tring mixes નવરાત્રી and નવરાત્રિ in one paragraph.
- Republic's text has Hindi-isms (ઢેરો શુભ-કામના) and garbled lines; no page flags register (આપ/તમે/તું) or the Gujarati idiom ગરબા **રમવા**.
- No page separates Chaitra from Aso Navratri (Tring ranks with a Chaitra page) or Gujarati New Year (Bestu Varas) from Navratri.
- No page addresses NRI relatives who speak but cannot read the script.
- No page has 2026/2027 dates with the 2026 tithi caveat (Saptami on 17 and 18 Oct; Ashtami + Navami on 19 Oct).
- Garbo-as-object, Amba Maa / Ambaji, sheri vs party plot: only the off-intent Swarajya essay touches these.

**Fan-out → H2s:** spelling (H2 1); what makes Gujarati Navratri distinct (H2 2); wishes by relationship incl. NRI and status (H2 3); how to send (table, H2 4); when to send / dates / New Year (H2 5); one-to-one invite (H2 6); when it is the wrong choice (H2 7).

**Angle:** wins by being the only post that writes original Navratri wishes in idiomatic Gujarati with a stated spelling rule (both spellings verified in Gujarati Lexicon, distinct Unicode code points), a Roman-script line for NRI relatives backed by measured diaspora literacy, and SubhSandesh's 48.3% phone-open rate and Raksha Bandhan lead-time analogue.

## Phase 3 — sources (all fetched)

| Source | What it says (verified) | Date | Subject / swap |
|---|---|---|---|
| Roberts, PhD thesis, Victoria Univ. of Wellington (openaccess.wgtn.ac.nz, figshare 16970086) | 141 Gujarati respondents (327 people); NZ-born: 5.7% write Gujarati easily; 37.1% cannot read or write it; script difference suggested as a factor. Full PDF downloaded, OCR text searched (sections 7.3.3, 7.6.3.2, comparison chapter). | No year in record; cites sources to 1997 | Subject ✓ (Gujarati script literacy, diaspora). Scholarly, open access. Swap risk: other Gujarati siblings |
| Gujarati Lexicon — નવરાત્રી | n. pl.; "first nine days of the bright half of Chaitra and Ashvin months (esp. of Ashvin, preceding the festival of Dashera)" | none | Dictionary (exempt) |
| Gujarati Lexicon — નવરાત્રિ | Same type and definition — both spellings listed | none | Dictionary (exempt) |
| Unicode 18.0 Gujarati chart (U0A80.pdf) | U+0ABF VOWEL SIGN I (િ), U+0AC0 VOWEL SIGN II (ી) | Version 18.0 | Standard (exempt) |
| ambajitemple.in (official) | "5M+ Annual Devotees"; Abu Road ~20 km; Ahmedabad airport ~185 km; app with live darshan | none | Subject ✓ (Amba Maa) |
| Drik Panchang 2026 Shardiya Navratri, New Delhi | Day 1 Sun 11 Oct 2026; Day 10 Tue 20 Oct 2026 | none | Date reference (exempt) |

Date checks (fetched, not linked in body beyond the 2026 calendar): Drik 2027 page (New Delhi) — Day 3 Sat 2 Oct 2027 → Day 1 Thu 30 Sep; Day 10 Sat 9 Oct 2027. Drik Diwali 2026 calendar — Lakshmi Puja Sun 8 Nov; Kartik Shukla Pratipada (Govardhan/Bali Pratipada) Tue 10 Nov 2026 = Bestu Varas. Dedicated Gujarati New Year URLs 404'd. Ashtami/Navami 19 Oct, Saptami 17–18 Oct and Sharad Purnima garba 25 Oct taken as BRIEF-verified.

findpapers queries tried: "Gujarati diaspora Navratri garba", "Ambaji goddess Amba Gujarat pilgrimage", "Gujarati orthography spelling script", "garbo pot lamp Navaratri goddess worship Gujarat women", "transnational family festival greetings WhatsApp diaspora", "Gujarati heritage language maintenance diaspora", "Navaratri garba United States Hindu diaspora", "Gujarati script text recognition vowel diacritics", "Gujarati kinship terms address elders", "Amba mata goddess Gujarat temple Shakti peeth", "garba commercialisation urban Gujarat Navratri", "garba Ahmedabad Vadodara neighbourhood dance festival", "Gujarati transliteration Roman script social media". Garba/Ambaji scholarship found was paywalled (SUNY "Nine Nights of Power", Springer "Performing Body of Navratri"); not cited. Europe PMC "akshara" paper returned HTTP 403.

Competitors never cited or linked: Republic, Tring, eduyush, lutonhoo, hindutone, hindupad, Swarajya.

## Notes

- Spelling: Gujarati Lexicon accepts both; the post uses નવરાત્રી throughout and recommends consistency. Sarth Jodanikosh not consulted directly.
- /dandiya-partner described only from template-spec.md; English UI stated in Gujarati body prose; group-invite limit stated; Gujarati-script rendering on the page not verified, so the post tells readers to check the preview.
- Alternatives linked: /missyou-gf (partner abroad), /templates.
