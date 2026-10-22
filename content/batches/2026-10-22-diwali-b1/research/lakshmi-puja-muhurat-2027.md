# Research brief: lakshmi-puja-muhurat-2027

Keyword: **lakshmi puja muhurat 2027** · secondaries: diwali 2027 date and time, diwali puja muhurat 2027 · run 2026-10-22

## Phase 0: first-party data
There is no Diwali usage data yet (/happy-diwali is new). Cited, with the Raksha Bandhan analogue labelled as such in the body:
- RB 2026 lead time: 49.4% of pages built on the festival day (n = 89)
- RB 2026: 86.1% of pages finished in time were built within 24 hours
- 48.3% of shared pages are opened on a phone (2026-09-24)

None of these bears on a puja time, so the comparison table carries no first-party column. That checklist item is recorded as failed.

## Phase 1: SERP (Firecrawl search, location India, 2026-10-22). Searches used: 2 of 3 (1 Firecrawl, 1 WebSearch for the DoPT holiday list)
| # | URL | Direct answer | Delhi 2027 window printed | Notes |
|---|---|---|---|---|
| 1 | drikpanchang.com lakshmipuja timings 2027 | top of page | 06:34–07:05 PM; Pradosh 05:39–08:13; Vrishabha 06:34–08:30; Amavasya 20:47 (28 Oct) → 19:05 (29 Oct) | Clips the window at the tithi end without explaining why. Competitor, not cited |
| 2 | drrpsharma.com/blog/diwali-2027 | first line | Amavasya 20:49 → 19:07 IST; Delhi sunset 17:40 | Short article, no city table |
| 3 | sanatanhindu.co.in diwali 2027 | widget | Pradosh 17:39–20:03 printed as "muhurat" | Runs on past the Amavasya end. Affiliate samagri |
| 4 | bda.ai festival diwali 2027 | widget | 6:35–8:02 PM | Also runs past the Amavasya end. The SERP snippet showed US times on 28 Oct |
| 5 | facebook fb-answers | n/a (empty fetch) | snippet says 16–17 Oct | Wrong date |
| 6–10 | drikpanchang lagna page, publicholidays.in, ganeshaspeaks (2026), mpanchang, youtube (2026) | | | |

Weak in the top 10: 6 (small sites, stale 2026 pages, one wrong-date page).

## Phase 2: gap
- **Table stakes:** date 29 Oct; pradosh; Vrishabha / sthir lagna; city dependence.
- **The gap:** none of the five explains that in 2027 the Amavasya END (19:06 IST) is what limits the window, or why pages disagree on it. Two of them print windows that run past 19:06. Nobody gives sourced sunset-to-cutoff minutes per city, and nobody derives the diaspora date from a public ephemeris.
- **Fan-out:** what time, after 7:06?, why apps differ, pradosh length, Vrishabha, NRI date, Kali Puja night, missing the muhurat, when to send wishes. Each became an H2 or a FAQ.

## Phase 3: sources (all fetched 2026-10-22)
- USNO moon phases, Oct 2027: new moon 29 Oct 13:36 UT → https://aa.usno.navy.mil/api/moon/phases/date?date=2027-10-01&nump=4
- USNO one-day data, 29 Oct 2027, IST (sunset / solar noon):
  - Delhi 17:39 / 12:05 → https://aa.usno.navy.mil/api/rstt/oneday?date=2027-10-29&coords=28.61,77.21&tz=5.5
  - Mumbai 18:07 / 12:22 → https://aa.usno.navy.mil/api/rstt/oneday?date=2027-10-29&coords=19.08,72.88&tz=5.5
  - Kolkata 17:01 / 11:20 → https://aa.usno.navy.mil/api/rstt/oneday?date=2027-10-29&coords=22.57,88.36&tz=5.5 (not linked)
  - Chennai 17:43 → https://aa.usno.navy.mil/api/rstt/oneday?date=2027-10-29&coords=13.08,80.27&tz=5.5 (not linked)
  - Bengaluru 17:54 → https://aa.usno.navy.mil/api/rstt/oneday?date=2027-10-29&coords=12.97,77.59&tz=5.5 (not linked)
- USNO New York, 28 Oct 2027: sunset 17:58 EDT; new moon 29 Oct 09:36 EDT → https://aa.usno.navy.mil/api/rstt/oneday?date=2027-10-28&coords=40.71,-74.01&tz=-4
- USNO London, 29 Oct 2027: sunset 17:40 BST; new moon 14:36 BST. Fetched, then dropped from the body because the sibling diwali-2027-date covers London.
- Calendar Reform Committee report (CSIR, 1955), archive.org full text → https://archive.org/details/calendar_reform_comittee_report. This is a public-domain primary text and stands in as the scholarly source. Verified passages:
  - Asvina K 30: "Kali puja (nisithavyapini), Dipavali or Diwali (pradosa), Mahalakshmi puja (pradosa)"
  - "Pradosa: two muhurtas (about 4 ghatikas or 1h 36m) after sunset (in some opinions three muhurtas after sunset)"
  - A tithi = 12° of lunar gain; it ranges from 19h 59m to 26h 47m (average 23h 37m)
- Peer-reviewed search (findpapers.mjs: pradosha twilight; tithi computation; muhurta; Diwali Lakshmi puja; panchang; Saha calendar reform; lunisolar festival dates) found no usable open-access paper. The Crossref hits were predatory venues (IJISRT, Int J Jyotish Research) or paywalled.

## Derived numbers (plain arithmetic on the sources above)
- Amavasya left after sunset = 19:06 − sunset: Kolkata 125, Delhi 87, Chennai 83, Bengaluru 72, Mumbai 59 minutes.
- Two-muhurta pradosh end = sunset + 96 min. For Delhi, three muhurtas ≈ +144 min → 20:03.
- New York: sunset on 28 Oct is 15h 38m before the new moon, which is less than the 19h 59m minimum tithi. So Amavasya is running at New York's 28 Oct sunset.

## Not printed (accuracy)
- Vrishabha lagna minutes: the only sources are competitors.
- The Amavasya start: only competitor panchangs print it (20:47 on drikpanchang vs 20:49 on drrpsharma).

## Sibling overlap
The sibling diwali-2027-date also covers families abroad (Thursday 28 Oct) and the Tamil Nadu exception. I removed my Deepavali-K14 and London paragraphs and the "28 or 29 October" FAQ. The New York section stays, framed as a puja-timing derivation.
