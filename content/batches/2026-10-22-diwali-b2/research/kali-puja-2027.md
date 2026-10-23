# Research brief: kali-puja-2027

Keyword: **kali puja 2027** · anchor: diwali puja 2027 date · row 45 · measured 2026-10-22

## Phase 0 — first-party data

No Kali Puja, Bengal or Diwali usage data exists (/happy-diwali is new). Used, verbatim from content/facts.md: 48.3% phone opens (27,725 of 57,456 views); 57,456 views; 11.1 views per page; Raksha Bandhan 2026 lead time (n = 89, labelled as a different festival in the body); none of those 89 built more than 7 days ahead; 214 miss-you pages and their 43.5% password share (two-month caveat stated). The 48.3% and 49.4% figures sit inside the first 150 words.

## Phase 1 — SERP (DuckDuckGo HTML, kl=in-en, lower confidence)

WebSearch is session-capped and Firecrawl unavailable. 2 of 3 searches used (second: West Bengal 2027 holiday list).

| # | Page | Words | Direct answer | Timings | Format | Notes |
|---|---|---|---|---|---|---|
| 1 | panchangtime.com/festivals/kali-puja/yearly/2027 | ~1,150 | Date near top (Thu 28 Oct) | Nishita 11:38 PM–12:28 AM, city unstated (Delhi-like) | 2027–31 list, FAQ + FAQPage | No Bengali script, no Bhoot Chaturdashi |
| 2 | calendarena.com/india/kali-puja | ~1,070 | Countdown widget | Table lists 2027 as **Fri 29 Oct (wrong)** | Table, FAQ | Generic multi-year calendar site |
| 3 | astrosight.ai/festivals/kali-puja/2027 | ~3,100 | 28 Oct in key details | "Timings published closer to the date" | FAQ, astrologer byline | Calls it "the same night as Diwali", which is false for 2027 |
| 4 | vedpanchang.com/festivals/kali-puja-2027 | ~310 | Date in title only | None in body | Event schema, FAQ | Thin |
| 5 | drikpanchang.com Bengal Kali Puja 2027 | tool | Date + nishita box | Delhi by default; Kolkata 10:55–11:46 PM by geoname-id | Tool page | Used only as date reference |
| 6–10 | wikipedia Kali Puja; mypanchang (Bhoot Chaturdashi, some Bengali); instagram popular; panchangya (403); hinducalculator | — | — | — | — | 7 of 10 weak |

Cannibalisation gate: 0 of these 10 URLs appear in any b1 post's batchMeta.serp (checked all 50 programmatically); closest topical posts b1 choti-diwali-2027 and lakshmi-puja-muhurat-2027 mention Kali Puja in one sentence each. Sibling kojagari-lakshmi-puja-2027 (on disk) has a city-by-nishita table, so this post's table was redesigned as a 2026-vs-2027 Kolkata timetable.

## Phase 2 — gap

- Table stakes: the date (28 Oct), the nishita rule, Shyama Puja as the alternate name, Bengal/Assam/Odisha.
- Gap: no top-5 page gives a Kolkata or Guwahati nishita time by default; none explains that 2027 splits Kali Puja from Lakshmi Puja while 2026 did not; none notes Bhoot Chaturdashi falls on the same Thursday evening; none gives Bengali terms in script with a dictionary check.
- Wrong data: calendarena prints Fri 29 Oct 2027; astrosight says "same night as Diwali".
- Fan-out: what time in Kolkata; why not on Diwali; 2026 vs 2027; Amavasya start/end; Bhoot Chaturdashi date; Dipanwita meaning; why "Shyama"; Ramprasad; holiday status; Bhai Phonta date; when to send a greeting.

Angle: wins by being the only post in the measured top 10 with computed nishita windows for Kolkata, Guwahati, Agartala and Bhubaneswar, the 2027 Kali/Lakshmi split and the same-evening Bhoot Chaturdashi, plus dictionary-checked Bengali, framed with SubhSandesh's 48.3% phone-open share.

## Computation (documented)

Astronomy Engine 2.1.19 (node, MIT, github.com/cosinekitty/astronomy; VSOP87/NOVAS-based, ±1 arcminute). USNO refused connections (fetch failed) on 22 Oct 2026.

- New moon (Amavasya end): 29 Oct 2027 19:07 IST (Drik 19:05; BRIEF/USNO 19:06)
- Amavasya start (elongation 348°): 28 Oct 2027 20:49 IST (Drik 20:47)
- Chaturdashi start (336°): 27 Oct 2027 22:50 IST, so Bhoot Chaturdashi = Thu 28 Oct
- 2026: Amavasya 8 Nov 11:28 to 9 Nov 12:32 IST; Chaturdashi from 7 Nov 10:48, so Bhoot Chaturdashi 2026 = Sat 7 Nov
- Pratipada ends 30 Oct 17:52; Dwitiya ends 31 Oct 17:14, so Bhai Phonta = Sun 31 Oct
- Nishita = sunset + 7/15 to 8/15 of the night (28 Oct 2027): Kolkata 22:55–23:45 (Drik 22:55–23:46), Guwahati 22:41–23:32 (Drik same), Agartala 22:43–23:34 (not cross-checked), Bhubaneswar 23:05–23:55 (Drik 23:05–23:56), New Delhi 23:39–00:30 (Drik 23:39–00:31). 2026 Kolkata nishita 22:54–23:46.
- Kolkata sunset 28 and 29 Oct 2027: 17:01; 8 Nov 2026: 16:55.

## Phase 3 — sources (all fetched 22 Oct 2026)

1. Thompson & Spencer, Bengali Religious Lyrics, Śākta (Association Press / OUP, 1923), archive.org/details/bengalireligious00thom: full text read. "On the next new moon night, the Kali-puja is held"; Durga/Kali tied to bright/dark moon; "A scholarly edition of Ramprasad is badly wanted"; Syama = "the Dark Goddess". Scholarly public-domain text (subject test passed).
2. Sister Nivedita, Kali the Mother (London, 1900), archive.org/details/in.ernet.dli.2015.215935: full text read; Ramprasad's songs "a collection of folk-songs, full of the sentiment of Kali-worship, left to the memories of his people". Subject test passed.
3. Samsad Bengali-English Dictionary (Biswas), DSAL: দীপান্বিতা (p. 502) defined as the Kartik new-moon day when Kali is worshipped and houses lit; also checked শ্যামা, অমাবস্যা, নিশীথ, চতুর্দশী, ভূত, চৌদ্দ, প্রদীপ, শাক, জবা, প্রতিমা, বিসর্জন, ভাইফোঁটা (under ভাই), শুভ, কার্তিক, পূজা, কালী. Not headwords: ভূতচতুর্দশী, কালীপূজা, দীপাবলি.
4. DoPT O.M. F. No. 12/2/2023-JCA (July 2026), 2027 holidays, full PDF read: para 6 Naraka Chaturdasi substitution clause; RH 26 Naraka Chaturdasi Thu 28 Oct 2027. (URL now at its 2-post cap.)
5. Astronomy Engine (GitHub): README accuracy claim read; used for every time above. (URL now at its 2-post cap.)
6. Drik Panchang Bengal Kali Puja 2027, Kolkata geoname-id 1275004 (+ Guwahati, Bhubaneswar, Delhi): date reference only, not linked in body.

Research searches with no usable result: findpapers.mjs "Kali Puja Bengal", "Kali Puja Diwali Kolkata fireworks air", "Shyama Kali goddess worship Bengal ritual", "Kali Puja Assam Kamakhya", "Kali Puja Diwali festival Kolkata noise"; Europe PMC full text "Kali Puja" (only passing mentions in air-quality papers PMC9362145, PMC13500472), "Shyama Puja" and "Bhoot Chaturdashi" (0 hits). No peer-reviewed OA paper on the ritual found; OUP monographs paywalled.

Checked, not cited: par.wb.gov.in holiday page lists state holiday lists only up to 2026 (no 2027 list as of 22 Oct 2026).
