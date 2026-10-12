# Research brief: sharad purnima wishes

Slug `sharad-purnima-wishes` · cluster bridge · bodyLanguage `en` (with Hindi, Gujarati, Bengali and Odia greetings in native script, romanised, glossed) · absorbs "sharad purnima garba wishes", "kojagari purnima wishes".
WebSearch calls used: **2 of 2** (SERP; one research query for Kumar Purnima). No browser tools.

## Phase 0: first-party data

facts.md read by hand; `npm run facts` NOT run. Facts used (verbatim):

- 48.3% phone opens (2026-09-24), in the first 150 words
- Raksha Bandhan 2026 lead time, n=89, 49.4% built on the day, median 0 days (2026-09-09), in the first 150 words, disclosed in prose as a different festival with a small sample
- 38.5% password-protect (2026-09-24)

The gate is thin. No Sharad Purnima, Navratri or dandiya-partner data exists, so every fact is platform-wide or an analogue. template-spec.md supplied the /dandiya-partner features: nine lines, six photos, the 1080×1920 pass, No turning into Yes after five tries, and "Any night you pick" on an empty date.

## Phase 1: SERP (US-served, WebSearch, 2026-10-12, query "sharad purnima wishes")

| # | URL | Weak? | Why |
|---|---|---|---|
| 1 | prabhatkhabar.com …sharad-purnima-2021-wishes (amp) | weak | 2021 title, Hindi |
| 2 | prabhatkhabar.com same (non-amp) | weak | duplicate, 2021 |
| 3 | blog.yatradham.org/sharad-purnima-wishes | weak | H1 says 2025 |
| 4 | business-standard.com …sharad-purnima-2024… | weak | 2024 |
| 5 | newsonair.gov.in pm-modi-wishes… | weak | news item, off-intent |
| 6 | blog.yatradham.org/?p=30957 | weak | duplicate of #3 |
| 7 | dnaindia.com …sharad-purnima-2022… | weak | 2022; blocked fetch (576 bytes) |
| 8 | lbas.lboro.ac.uk/wishes/kojagiri… | weak | spam on a university subdomain |
| 9 | indiatvnews.com/topic/sharad-purnima | weak | topic tag page |

The search returned 9 results, all 9 weak. Corroboration: serps.md "sharad purnima garba 2026 wishes" scored 5 of 10 weak (yatradham, dekhopanchang, hindutone, smartpuja).

### Top-5 comparison (fetched via sandbox fetch; headings and counts only)

| Page | Words | Structure | Direct answer | Date given | Kojagari / garba / Odisha / kheer / Raas mentions | Table / FAQ | Native scripts |
|---|---|---|---|---|---|---|---|
| yatradham | ~1,820 incl. chrome | H2: Wishes & Quotes 2025, Hindi wishes, Images, Status video | no, intro first | 2025 framing | 0 / 2 / 2 / 2 / 1 | none / none | Devanagari only |
| business-standard | ~1,300 | Why, significance, how celebrated, top 20 wishes | after intro | Oct 16 2024 | 4 / 0 / 0 / 3 / 4 | none / none | none |
| prabhatkhabar | ~1,440 incl. chrome | single list, Hindi | list | 2021 dates (19/20 Oct) | 0 / 0 / 1 / 0 / 1 | none / none | Devanagari |
| dnaindia | not readable (blocked) | n/a | n/a | 2022 title | n/a | n/a | n/a |
| indiatv topic | 260 | tag listing | n/a | n/a | n/a | n/a | n/a |

## Phase 2: gap

- **Table stakes:** English and Hindi wish lists; a "moon nectar / kheer" explanation; Lakshmi blessing lines.
- **Gap:** no page gives the 2026 tithi split, a moonrise time, or the Kojagara midnight (Nishitha) rule. None separates Kojagari, Kumar Purnima, Raas Purnima and Gujarat's garba night. None has Gujarati, Bengali or Odia script. None has a table or an FAQ.
- **Stale data:** every ranking page is year-stamped 2021, 2022, 2024 or 2025.
- **Fan-out:** which day in 2026 · what Kojagari means · why kheer under the moon · garba on Sharad Purnima · Kumar Purnima · moonrise time · 2027 date · regional-language greetings.
- **Angle:** see `batchMeta.angle`.

## Phase 1b: date verification (drikpanchang, cap-exempt, all with geoname-id)

- Sharad Purnima 2026, New Delhi (1261481): **Sun 25 Oct**, moonrise 5:00 PM, tithi 11:55 AM 25 Oct to 9:41 AM 26 Oct. BRIEF confirmed.
- Kojagara Puja 2026: Sun 25 Oct everywhere checked. Nishitha is 11:40 PM to 12:31 AM in New Delhi and 10:56 to 11:46 PM in Kolkata (1275004). Moonrise is 4:21 PM in Kolkata, 4:34 PM in Bhubaneswar (1275817), and 5:25 PM in Ahmedabad (1279233, Sharad Purnima page). Drik says the puja day is the one where Purnima is Nishitha-vyapini, which is only the 25th.
- Sharad Purnima 2027, New Delhi: **Thu 14 Oct**, tithi 6:49 PM 14 Oct to 7:16 PM 15 Oct. Office Holidays' Odisha list gives Kumar Purnima **Fri 15 Oct 2027**. This discrepancy is reported in the post.
- 404s: `/festivals/sharad-purnima/…`, `/festivals/kojagara-puja/…`, `/festivals/kumar-purnima/…`. The working paths are `/purnima/sharad/sharad-purnima-date-time.html` and `/festivals/kojagara/kojagara-puja-date-time.html`.

## Phase 3: sources (all fetched)

| Source | Subject test | Type | What was read |
|---|---|---|---|
| Jain 2024, J. Traditional & Folk Practices (jtfp.jntbgri.res.in/…/311), chapda sweet of Sharad Purnima, Udaipur | pass (Sharad Purnima itself) | peer-reviewed, OA (CC BY) | abstract only (PDF exists, not read) |
| Casiraghi et al. 2021, Science Advances, PMC7840136, "Moonstruck sleep" | pass (full-moon night wakefulness, tied to Kojagari's vigil) | peer-reviewed, OA | full text: abstract plus results (464 students, 3 to 5 days before full moon) |
| Bhavana 2023, Ayu, PMC10946667, "Festivals of Ayurveda" | pass (Kaumudi Mahotsava / Kaumudi Jagara) | peer-reviewed, OA | full text; it places Kaumudi on the **Kartika** full moon, and the post states this |
| OrissaPOST 2019-10-13, Kumar Purnima in Bhubaneswar | pass | news | full article |
| Office Holidays, Kumar Purnima in Odisha | pass (regional holiday dates, Gajalaxmi Puja) | holiday calendar | full page |
| Drik Panchang Sharad Purnima page | date fact-check | cap-exempt | full page |

Searched with no usable result: "Lakshmi puja Bengal household ritual", "Raslila Krishna Vrindavan performance autumn full moon" (paywalled books only), "Hindu lunisolar calendar tithi festival date computation" (predatory journals or paywalled), "Odisha festival unmarried girls moon Kumar Purnima", "Kojagari Lakshmi". No source found for Mithila Kojagara customs, so they were left out. Wikipedia: 0 body links. sameAs values were verified through the Wikipedia API: Sharada Purnima Q3325016, Lakshmi Puja Q6479912, Raslila Q2121790, Kheer Q59134, Garba (dance) Q882985.

Competitors were read but not cited: yatradham, business-standard, prabhatkhabar, dnaindia, indiatv, hindutone (search result only).

## Brief and prompt claims checked

- The BRIEF's Sharad Purnima tithi and the Sun 25 Oct date are **correct** per drikpanchang.
- Prompt: "one hindutone page gives a wrong 5 Oct date". **Unverified.** No hindutone Sharad Purnima page appeared in my top 10, and the WebSearch budget was spent.
- Gujarat garba on 25 Oct night is taken from the BRIEF calendar. No independent source was fetched.
