# Research brief — diwali-dates-next-10-years

- Keyword: diwali dates for next 10 years · anchor: diwali 2027 date october · language: en
- Phenomenon: lunisolar calendar and adhik maas (intercalary month) shifting festival dates
- Measured 2026-10-22. Searches used: 3 (WebSearch 1 — US-only, spam results, not used as SERP; Firecrawl India 2 — the keyword, and an adhik-maas year check).

## Phase 0 — first-party data
No Diwali usage data exists (/happy-diwali is new). Used, verbatim from content/facts.md:
1. Raksha Bandhan 2026 lead time (n = 89): 49.4% built on the day itself … median lead time 0 days — measured 2026-09-09 (labelled in the body as the nearest festival analogue, a different festival, small sample)
2. Not one of the 89 Raksha Bandhan 2026 pages was built more than 7 days ahead — measured 2026-09-09
3. 48.3% of shared pages are opened on a phone (27,725 of 57,456 views) — measured 2026-09-24

Facts 1 and 2 sit in the first 150 words. They frame the list (greetings are built on the day; the decade list is for leave and travel); none adds a date fact.

First-hand work: our own tithi, new-moon, sidereal-sankranti and sunset computation with Astronomy Engine 2.1.19 (scratch `diwali-dates-next-10-years-calc.cjs`, `-calc2.cjs`). Rule: Lakshmi Puja = evening on which Amavasya overlaps pradosh (sunset + 2 h 24 min, Delhi 28.61 N 77.21 E); month = the lunar month containing the Sun's entry into sidereal Tula (approx. Lahiri ayanamsa).

| Year | Tula ingress (IST) | Amavasya (IST) | Diwali (Delhi) | Delhi pradosh overlap |
|---|---|---|---|---|
| 2026 | 17 Oct 19:42 | 8 Nov 11:28 → 9 Nov 12:32 | Sun 8 Nov | 144 min |
| 2027 | 18 Oct 01:57 | 28 Oct 20:49 → 29 Oct 19:07 | Fri 29 Oct | 88 min |
| 2028 | 17 Oct 08:03 | 17 Oct 12:05 → 18 Oct 08:27 | Tue 17 Oct | 144 |
| 2029 | 17 Oct 14:11 | 5 Nov 13:45 → 6 Nov 09:54 | Mon 5 Nov | 144 |
| 2030 | 17 Oct 20:28 | 26 Oct 04:41 → 27 Oct 01:47 | Sat 26 Oct | 144 |
| 2031 | 18 Oct 02:38 | 14 Nov 04:25 → 15 Nov 02:40 | Fri 14 Nov | 144 |
| 2032 | 17 Oct 08:50 | 2 Nov 10:14 → 3 Nov 11:15 | Tue 2 Nov | 144 |
| 2033 | 17 Oct 14:56 | 22 Oct 10:19 → 23 Oct 12:59 | Sat 22 Oct | 144 |
| 2034 | 17 Oct 21:03 | 10 Nov 04:21 → 11 Nov 06:46 | Fri 10 Nov | 144 |
| 2035 | 18 Oct 03:21 | 30 Oct 08:08 → 31 Oct 08:29 | Tue 30 Oct | 144 |
| 2036 | 17 Oct 09:29 | 18 Oct 19:43 → 19 Oct 17:20 | Sat 18 Oct | 29 min |

2036 by city (sunset on 18th / overlap 18th / overlap 19th): Mumbai 18:13 / 54 / 0; Ahmedabad 18:11 / 52 / 0; Delhi 17:48 / 29 / 0; Chennai 17:48 / 29 / 0; Kolkata 17:08 / 0 / ~13 (sunset 17:07 on 19th).

Adhik months 2026–2036 (lunar month with no sidereal ingress): 17 May–15 Jun 2026 (Jyeshtha); 15 Mar–14 Apr 2029 (Chaitra; Mesha ingress 14 Apr 03:41 vs new moon 03:10 — 31-min margin, inside ayanamsa error); 18 Aug–17 Sep 2031 (Bhadrapada); 16 Jun–15 Jul 2034 (Ashadha). Day gaps between Diwalis: 384 (2025→26), 355, 354, 384 (→2029), 355, 384 (→2031), 354, 354, 384 (→2034), 354, 354.

Verification:
- USNO new moons (via Firecrawl; direct fetch reset): 29 Oct 2027 13:36 UT, 18 Oct 2028 02:57, 6 Nov 2029 04:24, 26 Oct 2030 20:17, 14 Nov 2031 21:09, 3 Nov 2032 05:45, 23 Oct 2033 07:28, 11 Nov 2034 01:16, 31 Oct 2035 02:58, 19 Oct 2036 11:50 — all within 1 minute of ours (+5:30).
- Drik Panchang Lakshmi Puja list (New Delhi), 2027–2034: identical to ours. Direct fetches on 2026-10-22 hit reCAPTCHA (also via Firecrawl stealth); the list was read from the copy indexed the same day in the shared research index.
- mpanchang 2035: Lakshmi Puja 30 Oct, Tamil Deepavali 29 Oct. mpanchang 2036: Diwali/Choti Diwali/Tamil Deepavali 18 Oct, Kartika Amavasya/Kali Puja/Govardhan 19 Oct, Bhaiya Dooj 20 Oct.
- qppstudio (SERP #4, competitor, not cited): 2026–2036 identical to ours.

## Phase 1 — SERP (Firecrawl, India, 2026-10-22)

| # | Page | Words / structure | Direct answer | Data & date | Format | Notes |
|---|---|---|---|---|---|---|
| 1 | gheestore.in 100-year list (5 Oct 2024) | ~1,500; two 100-row tables | Table after intro | No method, no source | Tables | Wrong for 7 of 10 years 2027–36: one day early 2030, 2032–36; 2031 printed as 14 Oct (month early). Tamil table also has 13 Oct 2031. WEAK |
| 2 | testbook.com 20-year list | ~900; one table 2023–2043, fluffy intro | Table after a long intro | No method | Table, FAQ-less | 2036 = Sun 19 Oct (Delhi calc says Sat 18) |
| 3 | timeanddate.com India Diwali | 403 to our fetcher | Snippet: this/next/last year | — | — | Judged from snippet |
| 4 | qppstudio.net 2026–2036 | Short table page | Table at top | No method | Table | Matches ours exactly; no adhik explanation |
| 5 | facebook fb-answers | Empty shell to fetcher | Snippet: 2025, 2026 only | — | — | WEAK |
| 6–10 | airalo (2026 only), drikpanchang 2026 calendar, calendarific (past years + 2028), 2014 blogspot (to 2030), almanac.com (2026) | | | | | |

Weak count in top 10: 4 (gheestore, facebook, airalo for this query, 2014 blogspot).
Cannibalisation: 4 of 10 URLs shared with b1 `diwali-2027-date` (gheestore, timeanddate, facebook, drikpanchang calendar) — gate triggered; angle sharpened to the decade, adhik mechanics, 2036 split and list audit; 2027 kept to one line.

## Phase 2 — gap
- Table stakes: a year-by-year list with weekdays.
- Gap: none of the five shows how a date is derived, the Amavasya window, why some years are in November (no page names the adhik months), the 2036 city dependence, or that the #1 list is wrong.
- Fan-out: dates per year; earliest/latest; why November; 2036 18 or 19; days between; can it be in Sept/Dec; Tamil Nadu; same in every city; official holiday?
- Angle: wins by being the only post that gives each 2027–2036 date with its Amavasya window, checked against USNO and two panchangs, names the adhik months behind the three November jumps, and flags 2036 and the wrong #1 list, framed by SubhSandesh's Raksha Bandhan lead-time data.

## Phase 3 — sources
1. USNO moon phases API (cap-exempt instrument) — new-moon instants 2027–2036. https://aa.usno.navy.mil/api/moon/phases/date?date=2031-10-01&nump=12
2. Burgess, Translation of the Surya-Siddhanta, JAOS vol. 6 (archive.org record dated 1858), full text read: intercalation rule ("when two lunar months begin in the same solar month… the former… intercalary month (adhimasa)"), month named from the solar month in which it commences; 51,840,000 solar months : 1,593,336 intercalary months. Scholarly, public domain, open. https://archive.org/details/jstor-592174
3. Astronomy Engine 2.1.19 — method. https://github.com/cosinekitty/astronomy
4. Drik Panchang Lakshmi Puja list — date/festival reference only.
5–6. mpanchang 2035 and 2036 festival calendars — date/festival reference only.

Paper search (no budget): findpapers "lunisolar calendar intercalary month", "Hindu calendar adhik masa festival date"; Crossref "adhimasa intercalary month", "Indian luni-solar calendar intercalation", "Hindu calendar festival dates computation", "Indian national calendar Saka reform 1957" — nothing on-topic, open and non-predatory. 1955 Calendar Reform Committee report scan dli.ministry.19933 has no text layer; not used (b1 used another scan).
