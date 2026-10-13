# Research brief — halloween in canada (row 184)

Slug: `halloween-in-canada` · Batch `2026-10-13-halloween-b4` · Absorbs "how halloween is celebrated in canada", "why halloween celebrated in canada" · Canadian spelling.

## Phase 0 — first-party data

facts.md has no Halloween or per-country data. Used platform-wide lines only (verbatim in `factsUsed`): 48.3% phone opens, 11.1 views per page, 90.9% publish rate (all measured 2026-09-24). Two sit in the first 150 words. None is Canada-specific; the body says so.

## Phase 1 — SERP (WebSearch, US index, 2026-10-13; 1 search for SERP + 1 for the 1927 verification = 2 total)

| # | URL | Type | Notes |
|---|---|---|---|
| 1 | moving2canada.com/halloween-in-canada/ | Immigration-services feature (updated 11 Jun 2026) | Long feature; family anecdotes (Cornwall-born parent), Samhain origins. No weather data, no DST, no holiday status, no regional split. Answer not in first paragraph. |
| 2 | moving2canada.com/news-and-features/…/halloween-in-canada/ | Same article, second URL | Duplicate |
| 3 | thecanadianencyclopedia.ca/en/article/halloween | Encyclopedia | Fetch returned empty; judged from snippet: Celtic origins, Kingston 1886 jack-o'-lantern, Vancouver 1898 costumes, Lethbridge 1927 "trick or treat", Norfolk County pumpkins, revenue doubled 2004–2014 (dated). |
| 4 | logitgroup.com/canadian-halloween-habits/ | Pollster blog, 7 Nov 2025 | Half give treats, 58% Prairies/Atlantic, 34% Quebec; n=1,230. |
| 5 | tashigi.jmoiron.net/… | Hijacked-subdomain spam | Weak; not analysed. Claims a "StatCan 2024 survey" — unverifiable. |
| 6 | universitystudy.ca/…newcomers-guide… | Now a closure notice | Weak (dead content). |
| 7 | archives.oxfordcounty.ca/blog/history-of-halloween-in-canada | County archivist blog | Stingy Jack, Vancouver 1898, Lethbridge Herald 4 Nov 1927 re Blackie, WWII sugar rationing. |

Weak count: 3 of 9 by URL (spam, dead page, duplicate URL). Brief's 6/10 not reproduced on this index; still winnable on content gaps.

Competitor rule (BRIEF §4): thecanadianencyclopedia.ca, logitgroup.com, oxfordcounty.ca and moving2canada.com rank top-10 → none cited. The Logit poll is cited from co-publisher Narrative Research's own release (different URL, same survey).

## Phase 2 — gap

- Table stakes: Celtic/Irish-Scottish origins; 1927 "trick or treat"; trick-or-treating, costumes, pumpkins.
- Gap: none gives weather data, none states statutory-holiday status, none gives DST dates or the Saskatchewan/Yukon exceptions, none mentions the 1917 Ontario variants (all repeat "Lethbridge 1927 = first"), none gives Quebec French usage, none says plainly that no Canadian spending figure is verifiable.
- Stale data: TCE's 2004–2014 revenue claim.
- Fan-out: how celebrated · why celebrated · is it a holiday · dates 2026/2027 · first trick or treat · weather/snow · Quebec · clocks · spending · safety.

Angle: wins by being the only post that checks the 1927 claim against DCHP-3 and pairs it with ECCC October normals, a dated 2025 regional split and 2026–27 DST dates.

## Phase 3 — sources (all fetched)

| Source | What it says (verified) | Date | Role |
|---|---|---|---|
| narrativeresearch.ca release | 50% give treats; 58% Prairies & Atlantic; 34% Quebec; 1/3 decorate outside; 1/4 inside; 1/4 dress up; 40% reuse decor, ~half add, 1 in 10 new; younger/higher-income most likely; "two-thirds… getting into the spooky spirit"; online 7–9 Oct 2025, n=1,230, weighted to 2021 Census | 2025-10-29 | Subject (Canada participation) |
| persee.fr Lherm, *Communications* 77 (2005) 83–108 | Abstract: Halloween faded from British calendar in 19th c. but became popular in Canada and US, taken up for British references to keep both countries Anglo-Saxon amid immigration; rites adapted to industrial America. Full text = page-image scans; **abstract only read** | 2005 | Peer-reviewed, OA, subject |
| dchp.arts.ubc.ca DCHP-3 "trick or treat" | Canadianism (origin). 1917 Sault Star "tricks or treats"; 1917 Owen Sound Sun "treat or trick"; 1921 "treat or a trick"; 1924 Edmonton Bulletin "Treat up -- or tricks"; 1927 Blackie, Nov 3 report ("TRICK OR TREAT" IS DEMAND) reported by The Lethbridge Herald; 1937 Lacombe Western Globe; 1898 Vancouver Daily World disguised visits (via Mooney 2024); 1989 & 2002 "Halloween apples" quotes | 2025-04 | Scholarly/institutional, subject |
| climate.weather.gc.ca normals (values via api.weather.gc.ca climate-normals, 1981–2010, MONTH=10) | Yellowknife A max 0.9, min −4.24, snow 20.88 cm, month-end depth 6.2 cm; Edmonton Int'l 10.4/−2.87, 10.36 cm; Winnipeg Richardson 10.52/−0.48, 4.82 cm; Vancouver Int'l 13.54/7.0, precip 120.76 mm, snow 0.07; Halifax Stanfield 13.13/4.23, 124.93 mm; Montreal Trudeau 12.98 max, 1.83 cm; St John's A 156.15 mm; Regina 11.02/−2.38, 6.89 cm | normals 1981–2010 | Subject (weather) |
| recalls-rappels.canada.ca witch-hat recall | Polyester witch hat fails recognized flammability standards; burn risk; no incidents as of 24 Jun 2024 | updated 2024-07-11 | Safety (Health Canada) — fails swap test, flagged |
| nrc.canada.ca DST page | DST ends 02:00 local, 1st Sunday in Nov; most of SK on CST year-round (Lloydminster area changes); Yukon UTC−7 year-round since 2020; Quebec east of 63°W on Atlantic time | modified 2025-11-01 | Date/clock fact |

Verified, named but not linked (6-link cap):
- CRA "Public holidays" 2026 (canada.ca/en/revenue-agency/services/tax/public-holidays.html): no 31 Oct; Thanksgiving Mon 12 Oct → Remembrance Day Wed 11 Nov.
- OQLF GDT fiche 8398771: Halloween n. f.; silent h; Quebec "C'est l'Halloween!" vs Europe "C'est Halloween!"; "Joyeuse Halloween!". (Linked by the French-wishes sibling.)
- barrypopik.com: Calgary Daily Herald 3 Nov 1927 and Lethbridge Herald 4 Nov 1927 both carried the Blackie item; Ontario 1917 variants. Body says Calgary claim not opened by us.

Verified, unused: ECCC LTCE API, 31 Oct records — Edmonton Int'l record low −26.5°C (1984), Calgary −25.7°C (1984), Yellowknife −27.3°C (1984); record 31 Oct snowfall Winnipeg 15.7 cm (1919), Yellowknife 12.7 cm (1975), Edmonton Int'l 10.2 cm (1999), Vancouver 0.0. edmonton.ca archives: earliest "trick or treat" from Blackie 1927; "Halloween apples" in 1930s Edmonton.

Tried and failed: Retail Council of Canada (403); Health Canada Halloween-safety pages (six canada.ca paths 404; canada.ca search no hit); alberta.ca search 404; healthlinkbc search no Halloween page; ECCC almanac per-day page (form, empty on direct fetch); timeanddate.com (Cloudflare challenge, not worked around); Internet Archive search for Lethbridge Herald 1927 (0 hits); Érudit title search "Halloween" (only Lherm on Persée is scholarly). findpapers: "Halloween Canada", "trick-or-treating children neighbourhood", "Newfoundland mummering tradition" — no OA Canadian Halloween paper.

Dates (computed locally): Sat 31 Oct 2026, Sun 1 Nov 2026, Sun 31 Oct 2027, Sun 7 Nov 2027.

## Brief claims checked

- "First recorded 'trick or treat' Alberta 1927": partly false. Exact wording first attested 1927 (Blackie, AB; printed Lethbridge Herald, and per Popik the Calgary Daily Herald a day earlier). Chant variants are attested in Ontario in 1917 (DCHP-3).
- "Saskatchewan doesn't observe DST": true for most of the province; the Lloydminster area does. Yukon also doesn't (since 2020).
- "Climate normals for 31 Oct": ECCC normals are monthly; per-day values exist only in the almanac form. Used October normals.
- "Not a statutory holiday in any province": consistent with CRA list; no provincial counter-example found.
- Spending: no verifiable Canadian figure; stated in body.
