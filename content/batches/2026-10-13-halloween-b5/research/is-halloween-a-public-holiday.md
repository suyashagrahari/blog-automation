# Research brief: is halloween a public holiday (row 212)

Slug: `is-halloween-a-public-holiday` · Batch `2026-10-13-halloween-b5` · Absorbs "is halloween a holiday" · British spelling, global English.

## Phase 0: first-party data
No Halloween data exists in facts.md (BRIEF §3). Used platform-wide lines plus the Raksha Bandhan lead-time line, disclosed in body prose as a different festival with n = 89:
- 48.3% phone opens (27,725 of 57,456 views), 57,456 views, 11.1 views per page (2026-09-24)
- Raksha Bandhan 2026 lead time: 49.4% built on the day, 27.0% the day before (2026-09-09)
Both 48.3% and 49.4% sit inside the first 150 words. They are relevant because Halloween is a working day: greetings get made and opened in the gaps of the day.

## Phase 1: SERP (WebSearch, US index; 2 searches used: 1 SERP, 1 for the Chilean statute)
| # | URL | Type | Fetched | Answer position | Notes |
|---|---|---|---|---|---|
| 1 | grandavehousing.calpoly.edu/news/is-october-31-2024-a | hijacked subdomain spam | no | n/a | weak |
| 2 | womanandhome.com/…/is-halloween-a-holiday…-2021… | magazine, 2021 | yes | first H2, US only: "isn't an actual public holiday in the US" | stale (Halloween 2021); US-only; Samhain history padding; weak |
| 3–7 | timeanddate.com/holidays/{australia,uk,mexico,us,common}/halloween | holiday database stubs | 403 (snippet only) | first line: "observance, not a public holiday" | strong domain; one country per page; no legal instrument named, no 2027 |
| 8 | womanandhome.com (duplicate, /us/ path) | same article | n/a | n/a | duplicate |
| 9 | timeanddate.com/holidays/norway/halloween | stub | 403 | n/a | as above |
| 10 | node2.medicloud.intersales.de/news/halloween-in-berlin… | hijacked subdomain spam | no | n/a | weak |

Weak in top 10: 3 (two hijacked subdomains, one stale 2021 article). AI summary mentioned Nevada Day (state holiday, last Friday of October); NRS 236 returned 403, so it was left out.

Sibling SERP overlap: when-is-halloween (b1) 0 shared URLs; halloween-in-the-uk (b1) 1 (timeanddate UK); halloween-around-the-world (b4) 0. Below the 4-URL threshold.

## Phase 2: gap
- Table stakes: "No, it's an observance"; businesses open; US/UK.
- Gap: no ranking page names the legal instrument (5 U.S.C. 6103, the Irish 1997 Act Schedule 2, DoPT O.M., Philippine proclamations), gives 2026 and 2027 side by side, or names the nearest real day off. None mentions places where 31 Oct IS a day off for other reasons (Chile, Slovenia). None flags aggregator errors.
- Stale: Woman & Home is framed on Halloween 2021.
- Fan-out → H2/FAQ: what makes a public holiday; per-country status; at-a-glance table; where 31 Oct is off; work/school/banks; federal holiday? bank holiday UK? schools close? 1 November? Philippines? India banks? weekend 2026/2027?
- Angle: wins by being the only post that checks each country's primary instrument for 2026 and 2027, catches the Nager.Date and Lawphil errors, and ties it to the 48.3% phone-open share.

Sibling differentiation: b1 when-is-halloween has one short holiday H2 citing Cornell LII 6103; this post uses OPM's year schedules, adds Ireland, India (DoPT, not RBI as b3 did), the Philippines, Chile and Slovenia, and the data-error findings. Lines checked with a 7-gram overlap scan against all b1–b5 files; remaining overlaps are shared fact strings (dates, facts.md lines, template features).

## Phase 3: sources (6 linked; all fetched)
1. OPM Federal Holidays (opm.gov), 2026 and 2027 tabs: 11 holidays; Columbus Day 12 Oct 2026 / 11 Oct 2027; Veterans Day 11 Nov. Undated page.
2. GOV.UK bank holidays (data read via gov.uk/bank-holidays.json): nothing between summer bank holiday and St Andrew's Day 30 Nov (Scotland) / Christmas in 2026 and 2027.
3. Irish Statute Book, Organisation of Working Time Act 1997, Schedule 2: "the last Monday in October".
4. DoPT O.M. F.No.12/2/2023-JCA, 3 July 2025 (scanned PDF, read page by page): 14 compulsory + 3 of 12 optional; Delhi RH list of 34 (Karwa Chauth 29 Oct, Naraka Chaturdasi 8 Nov); Diwali Sun 8 Nov 2026; para 3.2 no substitute holiday. 2027 O.M. not found at the expected path.
5. Lawphil, Proclamation No. 1427 (8 Sep 2026): 1 Nov 2027 special non-working; preamble declares 2 Nov 2027 additional special (non-working); Lawphil's list misfiles it under "C. Special (Working) Day" (the "D." heading is missing). Followed the preamble. Proc. 1006 (3 Sep 2025) read for 2026: 1 Nov (Sun) + 2 Nov (Mon).
6. Popelková & Zajonc (2022), Łódzkie Studia Etnograficzne 61:21–37, apcz.umk.pl, CC BY-ND, peer-reviewed, full text read: Slovakia has 15 legal non-working holidays; 82% knew Halloween in 2011; Halloween arrived around 1990. Note: b1 halloween-whatsapp-status also cites this paper (different batch; caps are per batch).

Verified but not linked (6-link ceiling): Canada Labour Code s.166 (10 general holidays); CRA 2026 list; Fair Work Ombudsman 2026/2027 pages (no 31 Oct anywhere; Tas Recreation Day 2 Nov 2026/1 Nov 2027; Melbourne Cup 3 Nov 2026/2 Nov 2027); Chile Ley 20.299 (Ley Chile JSON: art. 1 holiday 31 Oct; art. 2 move rule for Tue/Wed); Slovenia ZPDPD 1991 art. 2 (uradni-list.si: 31 Oct dan reformacije a work-free day; art. 3 no carry-over from Sunday); Nager.Date API (lists a non-existent Philippine "All Saints' Day Eve" on 31 Oct 2026/2027).

Not used: uscode.house.gov granule URL (Page Not Found); NRS 236 (403); citizensinformation.ie (403); timeanddate (403, competitor anyway). No Wikipedia body links (en.wikipedia.org near cap per coordinator); Wikipedia/Wikidata only as API-verified sameAs.

capcheck run before the gov fetches and at the end: no domain at cap.
