# Research brief — `ganesh-chaturthi-2027`

- **Batch:** `2026-09-09-ganesh-10b` (Wave 3, post 11)
- **Primary keyword:** `ganesh chaturthi 2027`
- **Folds in:** `ganesh chaturthi 2027 date` · `ganpati 2027 visarjan date` · `ganesh chaturthi for next 5 years`
- **Assigned research field:** calendrical projection — how lunisolar festival dates are computed forward, why the Gregorian date shifts ~11 days a year, how an adhika masa resets it
- **Category:** `indian-festivals`
- **Slug check:** `https://strapi.subhsandesh.in/api/articles?fields[0]=slug&filters[slug][$eq]=ganesh-chaturthi-2027` returned `data: []` on 2026-09-09 — **free**. (`rakhi-2027`, `raksha-bandhan-2027-wishes`, `raksha-bandhan-2027-quotes`, `rakhi-2027-wishes-for-sister` are live, so the "year+1" pattern is already established on this domain.)

---

## Phase 0 — Data gate

`content/facts.md` regenerated 2026-09-08. **There is no Ganesh-specific first-party fact and there will not be one this cycle** — the `/happy-ganesh-chaturthi` template has created zero pages. Every first-party number in this post is therefore **platform-wide across 15 page types** and is captioned that way in the sentence nearest the claim, per the batch brief and `audit-remediation.md`.

Facts used:

- 49.6% of shared pages are opened on a phone (22,667 of 45,656 views) — measured 2026-09-08
- 96.1% of started pages are actually published and shared (3,708 of 3,860) — measured 2026-09-08
- 3,860 personalised pages created since 2026-03-12, across 15 page types — measured 2026-09-08
- 42.1% of creators password-protect their page before sharing it (1,625 of 3,860) — measured 2026-09-08
- Median gap between a page's first save and its last edit: 6.8 hours — sampled on "I love you" page (/love-gf), n=1,065 — measured 2026-09-08
- #1/#2/#3/#5 page-type counts (1,065 / 954 / 904 / 257) for the all-first-party comparison table

Gate satisfied on count (6 facts, 2 in the opening 150 words) but **not on topicality** — none are Ganesh facts. Recorded as an audit failure rather than papered over.

---

## Phase 1 — SERP analysis (WebSearch `ganesh chaturthi 2027 date`, 2026-09-09)

| # | Page | What it is | Direct answer? | Data | Format | Gap it leaves |
|---|---|---|---|---|---|---|
| 1 | drikpanchang.com `/festivals/ganesh-chaturthi/…?year=2027` | Panchang generator | Yes, above the fold | Tithi + muhurat, geolocated | Table + boilerplate | No explanation of *why* the date moved; no forward table with visarjan |
| 2 | drikpanchang.com `/vrats/vinayaka-chaturthi-dates.html?year=2027` | Monthly Chaturthi vrat list | Yes | Tithi times | List | Not the festival page; confuses monthly Vinayaka Chaturthi with the Bhadrapada one |
| 3 | qppstudio.net | Global holiday database, 2026–2036 list | Yes | Bare dates only | List | No muhurat, no visarjan, no mechanism, no verification path |
| 4 | calendardate.com | Calendar-spam | Yes | Date + weekday | Thin page | Nothing else on it |
| 5 | samvat.in | "Date, Tithi, Meaning & Calculation" | Yes | Tithi times, some arithmetic | Article | Closest to this post's angle; still no independent astronomical cross-check and no data of its own |
| — | astrovachmi.com, prokerala.com, daanyam.in, mpanchang.com | Panchang aggregators | Yes | Tithi times | Thin | Same page, nine times |

**All nine are competitors or the permitted date reference.** `references/competitors.md` names mpanchang and calendar-spam sites explicitly; the rest are the same category. Zero of them are linked, cited or paraphrased. Drik Panchang is used only as the `[date/festival reference]` exemption.

AI Overview for the query states 4 September 2027 and "runs 03 September to 14 September" — the 3 September figure is the *tithi start* (02:18 PM), not a second festival day, and no page on the SERP explains that.

---

## Phase 2 — Gap analysis

**Table stakes** (all five cover): the date, the weekday, the tithi start/end, the Anant Chaturdashi visarjan date.

**The gap.** Every page on this SERP *asserts* the date. Not one of them:

1. Shows the arithmetic that produces it, forward, for more than one year.
2. Cross-checks the panchang against an independent astronomical source.
3. Publishes the visarjan date alongside the Chaturthi date for each of the next five years.
4. Notices that the 2027 madhyahna window is roughly an hour, not the usual two and a half.
5. Carries a single number no other site can print.

**Stale data:** none — these pages carry no dated research at all, which is itself the finding.

**Fan-out sub-queries → H2s:**

- when is ganesh chaturthi 2027 / what time is the puja → H2 1
- why does ganesh chaturthi change date every year → H2 2
- what is adhik maas / why did the date jump forward → H2 3
- ganesh chaturthi next 5 years / 2028 / 2029 / 2030 / 2031 → H2 4 (+ H3s + ItemList)
- how do I know this date is right → H2 5
- ganpati 2027 visarjan date / long weekend / planning → H2 6
- what a greeting page can't do → H2 7

**Angle (→ `batchMeta.angle`):** wins by being the only page that both projects Ganesh Chaturthi forward to 2031 with visarjan dates attached *and* cross-checks every one of those dates against NASA's new-moon table, with platform-wide first-party data from 3,860 SubhSandesh pages that no panchang aggregator can publish.

**Deliberate non-overlap with batch 1's `ganesh-chaturthi-2026-date`.** That post owns 14 September 2026, the madhyahna-vyapini rule, the 18-day 2025→2026 jump, and Dershowitz & Reingold / Kielhorn 1897 / the 1955 Calendar Reform Committee report. **None of those three sources is re-cited here**, and the madhyahna rule appears in one clause of H2 5 as a checking step, never as a section.

---

## Phase 3 — Sources

Every URL below was fetched and read in this session. Domain-cap position checked against `USED-SOURCES.md` and `PRIOR-BATCH-SOURCES.md` first.

### 1. Drik Panchang, Ganesh Chaturthi 2027 (Mumbai) — `[date/festival reference]`, exempt from caps
`https://www.drikpanchang.com/festivals/ganesh-chaturthi/ganesh-chaturthi-date-time.html?geoname-id=1275339&year=2027`

Verified 2026-09-09:
- **Ganesha Chaturthi on Saturday, September 4, 2027**
- Madhyahna Ganesha Puja Muhurat 11:23 AM – 12:25 PM, duration 1 h 03 m
- Chaturthi Tithi begins 02:18 PM on 3 Sep 2027, ends 12:25 PM on 4 Sep 2027
- **Ganesha Visarjan on Tuesday, September 14, 2027**
- Time to avoid moon sighting 09:49 AM – 09:16 PM on 4 Sep; 02:18 PM – 08:34 PM on 3 Sep
- "Ganesh Chaturthi in Recent Years" panel: 2024 Sat Sep 7 · 2025 Wed Aug 27 · 2026 Mon Sep 14 · 2027 Sat Sep 4 · 2028 Wed Aug 23 · 2029 Tue Sep 11 · 2030 Sun Sep 1 · 2031 Sat Sep 20 · 2032 Wed Sep 8 · 2033 Sun Aug 28 · 2034 Sat Sep 16 · 2035 Wed Sep 5 · 2036 Sun Aug 24 · 2037 Sat Sep 12

City muhurats for 4 September 2027, all fetched separately, **all ending at the same instant** because the tithi ends then:

| City | geoname-id | Madhyahna muhurat | Duration |
|---|---|---|---|
| Mumbai | 1275339 | 11:23 AM – 12:25 PM | 1 h 03 m |
| Pune | 1259229 | 11:19 AM – 12:25 PM | 1 h 06 m |
| New Delhi | 1273294 | 11:04 AM – 12:25 PM | 1 h 21 m |
| Bengaluru | 1277333 | 11:05 AM – 12:25 PM | 1 h 21 m |
| Hyderabad | 1269843 | 11:01 AM – 12:25 PM | 1 h 25 m |
| Chennai | 1264527 | 10:54 AM – 12:25 PM | 1 h 31 m |

For contrast, Mumbai 2026: 11:20 AM – 01:48 PM, 2 h 27 m.

### 2. Drik Panchang, per-year pages 2026 and 2028–2031 (Mumbai) — `[date/festival reference]`
`https://www.drikpanchang.com/festivals/ganesh-chaturthi/ganesh-chaturthi-date-time.html?geoname-id=1275339&year=2031` (same URL pattern fetched for `year=2026`, `2028`, `2029`, `2030`, `2031`)

| Year | Ganesh Chaturthi | Visarjan (Anant Chaturdashi) | Madhyahna muhurat, Mumbai | Gap |
|---|---|---|---|---|
| 2026 | Mon 14 Sep | Fri 25 Sep | 11:20 AM – 01:48 PM (2 h 27 m) | 11 days |
| 2027 | Sat 4 Sep | Tue 14 Sep | 11:23 AM – 12:25 PM (1 h 03 m) | 10 days |
| 2028 | Wed 23 Aug | Sat 2 Sep | 11:25 AM – 01:57 PM (2 h 32 m) | 10 days |
| 2029 | Tue 11 Sep | Fri 21 Sep | 11:21 AM – 01:49 PM (2 h 28 m) | 10 days |
| 2030 | Sun 1 Sep | Tue 10 Sep | 11:23 AM – 01:53 PM (2 h 30 m) | 9 days |
| 2031 | Sat 20 Sep | Mon 29 Sep | 11:19 AM – 01:45 PM (2 h 26 m) | 9 days |

Year-on-year shift: −10 (2027), −12 (2028), **+19** (2029), −10 (2030), **+19** (2031).

### 3. Gislén & Eade (2019), "The Calendars of Southeast Asia. 1: Introduction" — peer-reviewed, open access
*Journal of Astronomical History and Heritage* 22(3), 407–416.
`https://web.archive.org/web/20240827060635/https://www.narit.or.th/files/JAHH/2019JAHHvol22/2019JAHH...22..407G.pdf`

The publisher's own copy at `narit.or.th` is dead — every `/files/JAHH/…` path now returns an HTML shell, and `sciengine.com` (the journal's current host) returns HTTP 418 to a fetcher. The Lund University repository record (`portal.research.lu.se`, `lup.lub.lu.se`) links only to that dead file. The Wayback capture is the only readable full text, and it is a real PDF (870 KB, `%PDF-1.5`), read in full via `pdftotext`. **This consumes archive.org's last remaining slot in the batch.**

Verified quotations/figures:
- "Such solar years will be about **11 days longer** than a lunar year with 12 synodic months with a mean length of about 29.5 days and giving a total of about **354 days**."
- Adhikamasa rule: "there will sometimes be two lunar months starting in the same solar month … The first of these two months is then an intercalary month, *adhikamasa*, but will otherwise have the same name as the second month."
- Metonic: "seven intercalary lunar months in 19 solar years … giving a total of **235 lunar months** in each 19-year cycle … 19 × 365.2422 = **6939.6018 days**, and 235 × 29.53059 = **6939.6886 days**."
- Mean synodic month from the Sūryasiddhānta = **29.530587 days**; "the present current value is **29.530589 days**."
- Tithi = 1/30 of a synodic month, "the time it takes for the distance between the Sun and the Moon to increase by 12°"; the civil lunar day is "denoted by the number of the tithi in force at sunrise".
- Kshayamasa (a suppressed lunar month) is possible when no lunar month starts in a solar month.
- On why fixed computational schemes matter: "it is possible to plan and predict future events like gatherings and celebrations and thus serves as an important administrative tool."

Subject test: passes — it is *about* lunisolar intercalation, including the Indian scheme the article inherits from. Swap test: passes — no sibling post is about calendrical projection.

### 4. Abdul Rahman H.S. (2019), "Study the variation of synodic month for the moon through 2000-2100" — peer-reviewed, open access, CC BY 4.0
*Iraqi Journal of Physics* 14(29), 138–144. `https://doi.org/10.30723/ijp.v14i29.229`

Verified from the article page (abstract read in full; the licence and Crossref record confirm CC BY 4.0 and a 2019-02-03 publication date on a 2016 issue):
- mean synodic month **29.53109 days**
- shortest **29.27436 days**, beginning 16 January 2053
- longest **29.81442 days**, beginning 27 November 2008
- 1,236 synodic months in the 100-year span studied
- shortest lunations cluster in June–July (Earth near aphelion), longest in December–January (Earth near perihelion)

**Full text was not read** — only the abstract, which is where all five figures appear. Recorded in the audit.

### 5. Fred Espenak, NASA GSFC, "Phases of the Moon: 2001 to 2100"
`https://eclipse.gsfc.nasa.gov/phase/phases2001.html`

New Moon instants (Universal Time) immediately preceding each Ganesh Chaturthi, read off the table:

| Governing New Moon (UT) | IST | Ganesh Chaturthi | Days later |
|---|---|---|---|
| 11 Sep 2026, 03:27 | 08:57, 11 Sep | Mon 14 Sep 2026 | 3 |
| **31 Aug 2027, 17:41** | **23:11, 31 Aug** | **Sat 4 Sep 2027** | 4 |
| 20 Aug 2028, 10:44 | 16:14, 20 Aug | Wed 23 Aug 2028 | 3 |
| 8 Sep 2029, 10:44 | 16:14, 8 Sep | Tue 11 Sep 2029 | 3 |
| 28 Aug 2030, 23:07 | 04:37, 29 Aug | Sun 1 Sep 2030 | 3 |
| 16 Sep 2031, 18:47 | 00:17, 17 Sep | Sat 20 Sep 2031 | 3 |

Gaps between consecutive governing new moons: 354, 355, **384**, 353, **384** days. The two 384-day gaps (2028→2029, 2030→2031) are the intercalated years, matching the two +19-day jumps in the Drik table exactly. **This cross-check is the post's original contribution — no page on the SERP does it.**

The page also states: "For the year 2000, the length of the mean synodic month (New Moon to New Moon) is 29.530588 days (=29d 12h 44m 03s)." Not peer-reviewed, but it is the primary ephemeris and it is what makes the cross-check possible.

### Sourcing decisions and what was rejected

- **arxiv.org, en.wikipedia.org, journals.plos.org are at the 3-post cap.** None used. `arXiv:1007.0062` "Calendars of India" would have been an excellent fit and was deliberately not used. Wikipedia appears only as `sameAs` inside `structuredData`, which does not count.
- **Zero generic context statistics** (no PIB / TRAI / Census / MEA).
- `insa.nic.in/writereaddata/UpLoadedFiles/IJHS/Vol38_1_3_AKBag.pdf` (A.K. Bag, "Luni-solar calendar, Kali Ahargana and Julian days", *Indian Journal of History of Science* 38(1)) downloads as a 188 KB PDF but is a **scanned image with no text layer** — `pdftotext` yields 4 bytes. Not cited. Do not burn a slot re-fetching it.
- `link.springer.com/article/10.1007/s11042-023-16553-w` (VedicDateTime R package) returns a JS client challenge. Not cited.
- `repository.ias.ac.in/74673/` 404s. `packolkata.gov.in` (Positional Astronomy Centre, which computes the *Rashtriya Panchang*) does not resolve from this network — the obvious official Indian source for this post is unreachable, and that is recorded in the audit.
- `articles.adsabs.harvard.edu` and `ui.adsabs.harvard.edu` return CAPTCHA/405. `core.ac.uk` 403s.
- DOAJ's article API returned 0 results for every calendrical query tried (`lunisolar calendar intercalation`, `Hindu calendar panchanga`, `adhika masa`, `Indian calendar reform tropical year`).
- Europe PMC has fifty open-access Ramadan papers that mention the Islamic calendar's ~11-day drift in passing, but every one of them is a clinical fasting study. Citing one for a calendar fact would fail the subject test. Rejected.
- **New domains claimed by this post:** `ijp.uobaghdad.edu.iq` (via doi.org), `eclipse.gsfc.nasa.gov`. `web.archive.org` takes archive.org from 2/3 to **3/3 — at cap**.

---

## Phase 4–5 — Draft plan

**H2s (7 + Sources):**

1. `## Ganesh Chaturthi 2027 date, muhurat and visarjan`
2. `## Why 2027 lands ten days earlier than 2026`
3. `## The extra month that resets the drift`
4. `## Ganesh Chaturthi for the next five years` — H3s: 2027, 2028, 2029, 2030, 2031 → mirrored by the `ItemList`
5. `## How to check any of these dates yourself`
6. `## Planning a festival whose date will not sit still`  ← internal links land here
7. `## What a Ganesh Chaturthi page will not do for you`  ← downside block + the all-first-party table
8. `## Sources`

**Tables:** (a) the six-year date table in H2 4 — real values, no first-party column; (b) the four-row **all-first-party** page-type table in H2 7, which is the designated comparison table for the checklist.

**Internal links (3):** `/happy-ganesh-chaturthi` (first in `templateUrls`, in H2 6, after the planning value is established), `/templates`, `/shaadi-card` — the last only if it earns its place; otherwise two.

**FAQs (12):** none restates an H2 — they cover the 3 vs 4 September confusion, the length of Ganeshotsav, the varying Chaturthi→visarjan gap, why the muhurat is short, the moon-sighting windows, the weekend question, the August–September band, what a tithi is, the 19-year near-repeat, how far ahead the projection holds, whether the date is the same across India, and how early to send an invitation.

**Structured data:** `ItemList` (5 items, mirroring the H3s) + an `@id`-matched `BlogPosting` enrichment on `https://subhsandesh.in/blog/ganesh-chaturthi-2027#post` carrying `about`, `mentions` and `citation` mirroring `batchMeta.sources` one-to-one.

**Verified `sameAs` (Wikipedia API, `redirects=1`, 2026-09-09):** Ganesh Chaturthi Q929250 · Hindu calendar Q190552 · Adhika-masa Q7261567 · Tithi Q1427958 · Lunisolar calendar Q194235 · Metonic cycle Q285682 · Ananta Chaturdashi Q3630768 (redirected from "Anant Chaturdashi"). "Bhadra (month)" redirects to a disambiguation page and was dropped.

---

## Known problems to record in the audit

1. **No Ganesh-specific first-party data exists.** Every first-party number is platform-wide across 15 page types. Closes when `/happy-ganesh-chaturthi` has produced enough pages to report a rate — call it 500.
2. **`https://subhsandesh.in/happy-ganesh-chaturthi` returned HTTP 404 on 2026-09-09** while `/templates` returned 200. It is the primary CTA in all fifteen posts in this cluster. Re-check before publishing.
3. **The Iraqi Journal of Physics paper was read abstract-only.**
4. **The JAHH citation is a Wayback capture** because the publisher's copy is gone.
5. **This is a next-cycle asset.** Ganesh Chaturthi 2026 is five days away and this domain has no Ganesh topical authority; nothing published now ranks for 2026. The whole justification for the page is that it has twelve months to mature before the 2027 query volume arrives.
