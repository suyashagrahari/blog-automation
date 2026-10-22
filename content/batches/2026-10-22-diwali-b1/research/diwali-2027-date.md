# Research brief: diwali-2027-date

Keyword: **diwali 2027 date** (secondaries: diwali 2027, diwali, when is diwali 2027, diwali 2027 date in india, happy diwali 2027, happy diwali). Head-term note: "diwali" and "happy diwali" are unwinnable head terms; the post targets the time-bound long-tail "diwali 2027 date".

## Phase 0: first-party data

No Diwali usage data exists (/happy-diwali is new). Facts used, verbatim from content/facts.md:

- Raksha Bandhan 2026 lead time (n = 89): 49.4% on the day, 27.0% the day before, 5.6% two to three days ahead, 11.2% after. Used as the nearest festival analogue and disclosed as such in the body (different festival, small sample). Two of these numbers sit in the first 150 words.
- Not one of the 89 Raksha Bandhan 2026 pages was built more than 7 days ahead.
- 48.3% of shared pages are opened on a phone; 11.1 average views per page.

First-hand work (not counted toward the facts minimum): our own tithi, sunrise and sunset calculations with Astronomy Engine 2.1.19 (scratch scripts `diwali-2027-date-calc*.cjs`). Amavasya 28 Oct 20:49 IST to 29 Oct 19:07 IST; Trayodashi 27 Oct 01:04 to 22:50; Chaturdashi to 28 Oct 20:49; Pratipada to 30 Oct 17:52; Dwitiya to 31 Oct 17:14. Delhi sunset 17:39 (28th) and 17:38 (29th); Chennai sunrise 06:01 (28th); Mumbai sunset 18:06, Kolkata 17:01 (29th).

## Phase 1: SERP (measured 2026-10-22, Firecrawl search, location India; 1 search)

| # | URL | Type | Answer position | Structure / data | Notes |
|---|---|---|---|---|---|
| 1 | gheestore.in/diwali-dates-for-the-next-100-years-india-tamil-nadu | Ghee shop blog, 5 Oct 2024, byline Kokila B | Table, after a 2-paragraph intro | Two 100-year tables (North, Tamil Nadu); ~1,500 words mostly table rows; no sources | Claims Tamil Nadu is always one day earlier; gives 19 Oct 2025 for Tamil Nadu, which our calculation contradicts (20 Oct, same as North) |
| 2 | drikpanchang.com/diwali/diwali-puja-calendar.html?year=2027 | Panchang tool, undated | Calendar grid at top | Six-day grid from Govatsa Dwadashi (26 Oct); Tamil Deepavali and Kali Puja on 28 Oct; city-specific | Authority leader; competitor for this keyword, not cited |
| 3 | timeanddate.com/holidays/india/2027 | Holiday database | n/a | HTTP 403 to our fetcher; judged from snippet (holiday list with gazetted/restricted labels) | Not read in full |
| 4 | samvat.in/festivals/diwali-2027 | Small panchang site | First line | Five-day list; "why this date" (Kartik Krishna Amavasya, pradosha check at New Delhi); ~500 words | No sources, no regional or diaspora split |
| 5 | facebook.com/bhartiyacalendarofficial video | Social video, 23 Aug 2026 | Caption | Five-day list, 29 Oct | No reasoning |
| 6-10 | calendardate.com, purohit.app, publicholidays.in, youtube ("28 ya 29 October"), facebook fb-answers | | | | fb-answers says Thursday 28 Oct (wrong for Lakshmi Puja); publicholidays lists Tamil Nadu Deepavali on 29 Oct (contradicted by the DoPT Naraka Chaturdasi paragraph and our calculation) |

Weak in top 10: 7 (small sites, social, video, wrong-date pages). Tone across the five: third person, table-first, no first-person data, no cited primary source.

## Phase 2: gap analysis

- Table stakes: the date (Fri 29 Oct), the five-day list, Kartika Amavasya, Tamil Nadu difference.
- Gap: no page cites the Government of India's 2027 holiday order; none shows the astronomical basis (NASA new moon) or explains the 10-day jump with lunation counts; none addresses diaspora dates (London/NY land on Thursday 28 Oct by local sunset); the "always a day earlier" Tamil claim is wrong for 2024-2026 and 2028-2029.
- Stale data: gheestore (Oct 2024) carries a 2025 Tamil date we calculate as wrong.
- Fan-out sub-queries: is it 28 or 29; Dhanteras/Bhai Dooj dates; is it a holiday; why it moves; Diwali 2028; UK/US date; Amavasya timing; which calendar to trust.
- Angle: wins by being the only post that ties the 2027 date to the government's own order and NASA's new moon, shows its own tithi calculation for India and the diaspora, and plans around SubhSandesh's Raksha Bandhan lead-time data.
- Sibling overlap: choti-diwali-2027 covers the Tamil oil-bath morning and Kali Puja (so this post drops Kali Puja and keeps only the split-year finding and the DoPT substitution rule); dhanteras-2027 lists Dhanteras dates by year (this post uses NASA lunations and Sewell and Dikshit for the Diwali drift instead). Old Diwali posts (2026 timing for cards, boss, family) are not reused.

## Phase 3: sources (all fetched)

1. Department of Posts letter Y-21/2/2026-PE-II-DOP (8 Sep 2026) circulating DoPT O.M. 12/2/2023-JCA (16 Jul 2026): Diwali Fri 29 Oct 2027 (Kartika 07) gazetted; Naraka Chaturdasi 28 Oct, Govardhan Puja 30 Oct, Bhai Duj 31 Oct restricted; Deepavali may be observed on Naraka Chaturdasi where a state so declares. Dhanteras not listed. https://utilities.cept.gov.in/dop/pdfbind.ashx?id=15435
2. NASA GSFC, Phases of the Moon 2001-2100 (Espenak): new moon 29 Oct 2027 13:36 UT; 9 Nov 2026 07:02 UT; 21 Oct 2025 12:25 UT. https://eclipse.gsfc.nasa.gov/phase/phases2001.html
3. Sewell and Dikshit, The Indian Calendar (1896), Internet Archive full text: amanta/purnimanta definitions and regions; twelve lunar months short of the solar year by about eleven days; adhika month has no sankranti. Public-domain scholarly text. https://archive.org/details/indiancalendarwi00seweuoft
4. S.K. Chatterjee, "Indian Calendars", IAU Colloquium 91 (1987), pp. 91-95: Vedanga Jyotisha yuga of 1,830 days, 60 solar and 62 lunar months. Extract only read (PDF is an image scan). https://www.cambridge.org/core/journals/international-astronomical-union-colloquium/article/indian-calendars/0661941482297D73847158FD39140765
5. Astronomy Engine (Donald Cross, MIT), version 2.1.19, method source for our calculations. https://github.com/cosinekitty/astronomy

Peer-reviewed/scholarly: Chatterjee (IAU proceedings, extract only) and Sewell and Dikshit (public-domain scholarly text, full text read). No generic context statistic. No competitor cited; drikpanchang is cap-exempt in config but ranks #2 here, so it is excluded.

Search terms tried for papers (findpapers.mjs): "Hindu lunisolar calendar festival dates", "Indian calendar tithi amavasya intercalary month", "Diwali festival timing" — only pollution and predatory-journal hits, none used.
