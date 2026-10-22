# Research brief — diwali-2027-city-wise-timings

Keyword: **diwali 2027 date and time** (row 32, wave 2; anchor "diwali 2027 date and time")
Secondaries: diwali 2027 time · lakshmi puja time 2027 city wise · diwali 2027 timings delhi mumbai bangalore
Written 2026-10-22.

## Phase 0 — first-party data
Diwali usage data does not exist (/happy-diwali is new). Used, labelled in the body:
- Of the 79 Raksha Bandhan 2026 pages finished in time, 55.7% built on the day, 86.1% within 24 h (Rakhi analogue, n = 89)
- 48.3% of shared pages opened on a phone (27,725 of 57,456)
- 11.1 average views per created page
No first-party fact varies by city, so the table has no first-party column (audit fail, recorded).

## Phase 1 — SERP (Firecrawl search, location India, 2026-10-22; 2 searches)

Primary "diwali 2027 date and time":

| # | URL | What it gives | Direct answer | Times for cities | Notes |
|---|---|---|---|---|---|
| 1 | drikpanchang.com diwali-puja-calendar ?year=2027 | 6-day calendar, New Delhi default; Tamil Deepavali + Kali Puja 28 Oct | top | Delhi default, city selector; times on linked pages | fetched; strongest, a competitor: not cited |
| 2 | facebook bhartiyacalendarofficial video | date, Amavasya start | snippet | none | weak |
| 3 | calendardate.com/diwali_2027 | date + countdown | top | none | weak, no time at all |
| 4 | samvat.in/festivals/diwali-2027 | 5-day list, "tithi checked at pradosha", New Delhi | top | none; says a sunset check is not a muhurat | fetched |
| 5 | timeanddate.com holidays/india/2027 | gazetted-holiday table | table | none | 403 in this batch; from snippet |
| 6–10 | astrosage (Delhi), purohit.app (Delhi only: pradosh 5:39–8:13 PM, muhurat ~6:34–7:05), gheestore 100-yr list, publicholidays.in, youtube | | | | weakCount 7 of 10 |

Secondary "lakshmi puja time 2027 city wise": drikpanchang lakshmi-puja timings (2026 default), satvikly (2026, 61 cities), drrpsharma (Amavasya 20:49 to 19:0x), fb-answers (WRONG 16–17 Oct), ganeshaspeaks (2026 city list), publicholidays, bda.ai, world-timedate, samvat (off-topic), prokerala (2026).

Observation (dated, top 10 seen): no page gives **2027** times for more than one city; the city lists that exist are for 2026.

### Cannibalisation gate (BRIEF §9)
- Primary SERP shares **8 of 10** URLs with diwali-2027-date's recorded SERP.
- Secondary shares **6** with lakshmi-puja-muhurat-2027's.
Both exceed 4 → sub-intent sharpened to the per-city table: 18 cities, variable night muhurta, which cities pradosh vs Amavasya closes, Thursday check for every city. Not repeated: five-day table, date reasoning, lagna 4-step method, NY/London margins (diwali-2027-in-usa-uk-canada), Kolkata-vs-Mumbai solar-noon example, fixed-96-minute pradosh table design.

## Phase 2 — gap and angle
- Table stakes: Friday 29 Oct; Amavasya ~8:47–8:49 PM Thu to ~7:05–7:07 PM Fri; pradosh after sunset.
- Gap: no 2027 multi-city times; nobody explains why the east-west spread exists or that the night muhurta is variable; nobody checks Thursday for every city; nobody says pradosh (not Amavasya) closes the window in the east on the two-muhurta reading.
- Angle: only post with an 18-city sunset / night-muhurta / pradosh window table against the single 7:06 PM IST cut-off, reproducible from USNO + an open ephemeris.

## Phase 3 — sources (all fetched)
1. USNO one-day data, Guwahati 29 Oct 2027 — sunset 16:44, new moon 19:06 IST (via Firecrawl; direct fetch ECONNRESET).
2. USNO one-day data, Ahmedabad 29 Oct 2027 — sunset 18:04, new moon 19:06 IST.
3. Report of the Calendar Reform Committee (1955), archive.org full text — pradosha = 2 muhurtas, some say 3; night muhurta = 1/15 of night; its tables time the Sun's centre with 30′ refraction. Public-domain primary text. (2nd post using this URL; cap 2.)
4. Sharma et al., Current Science 115(7):1252–1261, 10 Oct 2018 (CSIR-NPL), via npl.csircentral.net — IST at 82°33′E; India 68°7′E–97°25′E; Dong–Ghuar Mota sunrise gap ~2 h at equinox; sunrise lines follow longitude only near equinoxes. Peer-reviewed, open PDF read in full.
5. Astronomy Engine 2.1.19 (github) — our computation. URL now at cap 2.
Not cited: drikpanchang (top-1 competitor; used only to confirm Tamil Deepavali 28 Oct as a date reference), purohit/drrpsharma (competitors).
Tried: Kane's History of Dharmasastra for the pradosha definition (no readable scan found).

## Computation (reproducible)
Astronomy Engine `SearchRiseSet` (upper limb, standard refraction) at city-centre coordinates; night = sunset 29 Oct → sunrise 30 Oct; muhurta = night/15; pradosh 2 = sunset + 2 muhurtas, 3 = + 3; cut-off 19:06 IST (USNO 13:36 UT; AE gives 13:37:04). Checks: USNO Guwahati 16:44 and Ahmedabad 18:04 match; sibling's USNO Delhi 17:39, Mumbai 18:07, Kolkata 17:01, Chennai 17:43, Bengaluru 17:54 match. Script: scratchpad diwali-2027-city-wise-timings-astro/compute2.js.

| City (lat, lon) | Sunset | Night min | Muhurta | 2-muhurta end | 3-muhurta end | Thu 3-muhurta end |
|---|---|---|---|---|---|---|
| Guwahati 26.14, 91.74 | 16:44 | 767 | 51.1 | 18:26 | 19:17 | 19:17 |
| Kolkata 22.57, 88.36 | 17:01 | 758 | 50.6 | 18:42 | 19:33 | 19:33 |
| Delhi 28.61, 77.21 | 17:39 | 773 | 51.5 | 19:22 | 20:13 | 20:14 |
| Lucknow 26.85, 80.95 | 17:26 | 768 | 51.2 | 19:08 (fixed 48 min: 19:02) | 20:00 | 20:00 |
| Mumbai 19.08, 72.88 | 18:07 | 751 | 50.1 | 19:47 | 20:37 | 20:37 (12 min before 20:49) |
(all 18 rows in the article table)

## Brief claims checked
- Amavasya end ≈19:06 IST (USNO) — confirmed; AE says 19:07.
- Tamil Deepavali conflict — drikpanchang 28 Oct confirmed; stated, not resolved.
