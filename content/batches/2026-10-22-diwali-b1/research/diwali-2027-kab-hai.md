# Research brief: diwali 2027 kab hai (`diwali-2027-kab-hai`)

Batch 2026-10-22-diwali-b1, row 2. Body language: Hindi (Devanagari). Written 2026-10-22.

## Phase 0: first-party data

There is no Diwali usage data (/happy-diwali is new). Facts used, quoted exactly from `content/facts.md`:

- Raksha Bandhan 2026 lead time (n = 89): 49.4% built on the festival day, 27.0% the day before, 5.6% two to three days ahead, 11.2% after. The body labels this as a different, one-day festival with a small sample.
- 86.1% of the 79 Raksha Bandhan pages finished in time were built within 24 hours of the festival.
- Median time from a rakhi page's first save to its last edit: 5.4 hours (n = 89).
- 48.3% of shared pages are opened on a phone.
- Average views per created page: 11.1.

Gate: passed. 5 relevant facts, and 2 of them (49.4% and 27.0%) appear in the first 150 words.

## Phase 1: SERP

Query `diwali 2027 kab hai`. Firecrawl, location India, 2026-10-22. 8 of the top 10 are weak.

| # | Page | Words / structure | Where the answer sits | Data and dates | Format | Optimising for |
|---|---|---|---|---|---|---|
| 1 | facebook.com bhartiyacalendarofficial (video) | Snippet only | Title | 29 Oct 2027, Kartika Amavasya | Video post | Social reach |
| 2 | samvat.in/hi/festivals/diwali-2027 | ~200 words, H1 plus 4 H2s | First line | 29 Oct, Krishna Amavasya Kartika. No times | Facts box | Thin date page |
| 3 | drikpanchang.com Hindi Diwali puja calendar 2027 (competitor) | Long; 6-day calendar starting at Govatsa Dwadashi 26 Oct | Calendar cards | Delhi times | Calendar, ads | Panchang authority |
| 4 | youtube bN8ZzEhDlHM | Video | Title | "Diwali 2027 kis date ko hai" | Video | Video intent |
| 5 | panchang.astrosage.com Diwali 2027 (hi) (competitor) | Long | Top: 29 Oct (Fri) | Delhi Lakshmi Puja 18:36–19:07, Pradosh 17:38–20:13, Nishith "none"; 3 rules for when the amavasya is ambiguous | Muhurat boxes, table | Muhurat and upsell to astrologers |

Also in the top 10, not analysed in full: purohit.app (Hindi, 5-day table plus per-day bullets), YouTube Shorts, calendardate.com, a facebook video and another YouTube video.

## Phase 2: gaps

- **Table stakes:** the 29 Oct date, the amavasya tithi and the 5-day list.
- **Gap 1:** no page shows why 28 Oct fails, hour by hour. 28 Oct has amavasya at night, which confuses searchers.
- **Gap 2:** no page contrasts 2026, when the sunrise rule and the pradosh rule disagree (amavasya at sunrise on 9 Nov, Diwali on 8 Nov).
- **Gap 3:** no page gives the city-wise pradosh/amavasya overlap.
- **Gap 4:** no page cites the government 2027 holiday order or its Naraka Chaturdashi clause.
- **Stale data:** none found. Wrong-date pages exist in the English SERP (see `serps.md`).

**Fan-out queries:**
- तारीख
- सरकारी छुट्टी
- पाँच दिन
- 28 क्यों नहीं
- 2026 से फ़र्क
- शहर का समय
- दक्षिण भारत
- बधाई कब भेजें

**Angle:** see `batchMeta.angle`. The post is the only Hindi page with the pradosh-vyapini hour check, the 2026 contrast and city windows, plus first-party lead-time data. It is not a translation of `diwali-2027-date`: it has no English master table and no section on why the date moves each year. Its H2s and FAQs were checked against the 8 old Diwali posts and none are reused.

## Phase 3: sources

All four sources were fetched and verified.

1. **Department of Posts circular, 08-09-2026** (utilities.cept.gov.in), forwarding DoPT O.M. 12/2/2023-JCA of 16-07-2026. It lists Diwali on Fri 29 Oct 2027 (Kartika 7) as gazetted, and Naraka Chaturdasi (28), Govardhan (30) and Bhai Duj (31 Oct) as restricted. It also contains the substitution clause. This is the date/festival reference.
2. **NASA GSFC, Phases of the Moon 2001–2100.** New moon 2027 Oct 29 at 13:36 UT, which is 19:06 IST. The page has no publication date.
3. **Sewell & Dikshit, *The Indian Calendar* (1896)**, archive.org, public-domain scholarly book. Art. 31–32: the civil day takes the tithi current at sunrise, while religious rites take the tithi current at the time of the rite, and a tithi usually spans two civil days. Full OCR text read.
4. **S.K. Chatterjee, "Indian Calendars", IAU Colloquium 91 (1987)**, Cambridge open PDF. Scholarly proceedings, full text read. Points used:
   - a tithi is the Moon gaining 12° on the Sun, and lasts 19.98 to 26.78 hours;
   - the day number follows the tithi at sunrise;
   - the lunar year is about 10.9 days shorter than the solar year;
   - amanta reckoning fixes festival dates in all states.

**First-hand computation.** astronomy-engine 2.1.19, run 2026-10-22:

| Event | Time (IST) |
|---|---|
| Amavasya | 28 Oct 20:48 → 29 Oct 19:06 |
| Chaturdashi begins | 27 Oct 22:50 |
| Pratipada ends | 30 Oct 17:52 |
| 2026 amavasya | 8 Nov 11:28 → 9 Nov 12:31 |

Sunsets on 29 Oct and overlap with amavasya:

| City | Sunset | Overlap |
|---|---|---|
| Delhi | 17:38 | 87 min |
| Mumbai | 18:06 | 59 min |
| Kolkata | 17:01 | 125 min |
| Chennai | 17:43 | 83 min |
| Ahmedabad | 18:03 | 62 min |
| Patna | 17:10 | 115 min |

**Search terms tried:** `findpapers.mjs` with "tithi Hindu lunisolar calendar computation festival date", "Indian calendar panchanga amavasya sunrise" and "Hindu festival calendar Diwali", plus OpenAlex OA searches. No peer-reviewed open-access journal article on the pradosh-vyapini rule itself was found. The Dharmasindhu and Nirnaya Sindhu scans on archive.org are Sanskrit image OCR and could not be verified, so they are not cited.

**Not cited:** drikpanchang and astrosage, because they rank top 5 and count as competitors.

**Searches used:**
- WebSearch: 2 (DoPT 2027 list; Calendar Reform Committee)
- Firecrawl: 2 (the SERP; scholarly)
