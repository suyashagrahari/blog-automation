# Research brief: halloween in ireland (row 189, absorbs "irish halloween traditions")

Slug `halloween-in-ireland` (free in Strapi, checked 2026-10-13). Category `festive-beats`. Templates `/happy-halloween`, `/happy-halloween-premium`.

## Phase 0: first-party data
facts.md read; `npm run facts` NOT run (BRIEF §3). No Halloween usage data exists. Used platform-wide lines (verbatim, measured 2026-09-24): 48.3% phone opens, 90.9% publish rate, 11.1 views per page. Both opening facts are labelled platform-wide, not Halloween data.

## Phase 1: SERP (WebSearch, US index; 1 of 2 searches used for the SERP, the 2nd for the Dublin Fire Brigade page)
Top 10: houseofwaterford.com (blog), studyinireland.ie x2 (ISI Dublin language school blog), travelawaits.com, irelandbeforeyoudie.com x2, shermanstravel.com, inyourpocket.com, businesswire.com. Weak count: 6 (language-school blog x2, retailer blog, press-release wire, duplicate IBYD URL, in-your-pocket listing) — matches PLAN.json weak=6.

| # | Page | Fetched? | Structure | Direct answer | Data / dates | Optimising for |
|---|---|---|---|---|---|---|
| 1 | houseofwaterford.com | 403, snippet only | blog | n/a | n/a | brand content |
| 2 | studyinireland.ie (ISI) | yes, ~900 words | Origins / Classic traditions / Irish connections / 2025 events | "Halloween began in Ireland" first line | No sources; 2025 event list | student audience |
| 3 | travelawaits.com (2024-10-01) | yes | first-person travel, city by city (Galway, Meath, Derry, Dublin) | buried after intro | Galway Aboo "80,000 participants" quoting tourism site | US travellers |
| 4 | irelandbeforeyoudie.com | 403, snippet only | listicle of towns | n/a | n/a | travel |
| 5 | shermanstravel.com (2024-05-06) | yes | "birthplace of Halloween" + autumn travel reasons + events | after Samhain backstory | Púca 30 Oct–2 Nov (2024), Derry 4 nights; "last weekend in October is a three-day holiday weekend" | travel deals |

Table stakes: Samhain origin story, turnip-to-pumpkin story, barmbrack ring, bobbing apples, bonfires, Púca and Derry festivals.
Gap: none gives the statutory bank-holiday rule, school mid-term dates, the fireworks law, fire-service bonfire warnings, Irish words verified against a dictionary, or any primary folklore record; all assert customs are common with no data. Stale: event dates for 2024/2025. AI summary repeats "Pope Boniface 7th century" and "birthplace of Halloween" — not used.

Fan-out sub-queries -> H2s: what is Halloween called in Irish; is it a holiday / mid-term dates 2026-2027; Irish Halloween traditions (barmbrack, colcannon, snap apple, turnip, bonfires, fireworks); are they still practised; where to go (Púca, Derry; Derry is UK); sending greetings home.

Angle: wins by being the only post that sets each Irish Halloween custom against a primary record and says which are measured as alive today, with 2026/2027 dates side by side.

## Phase 3: sources (all fetched)
1. Nic Philibín (2025), "Food Traditions in the Folklore of Oíche Shamhna", European Journal of Food, Drink and Society 5(1), TU Dublin Arrow, doi 10.21427/we7m-qb52. Peer-reviewed OA (CC BY-NC-SA). ABSTRACT ONLY: full-text PDF 403. Used: 50,000+ schoolchildren 1937–39; four themes; dishes boxty, bairín breac, colcannon, apple cake; last of four Quarter Days; food studies of the feast are few.
2. duchas.ie Schools' Collection, Colthurst/Blarney, "Snap-Apple Night" (CC BY-NC 4.0): barm brack ring = marriage within 12 months; pea, bean, stick, rag; tub half-full of water; "half smothered".
3. Circular 0018/2026 (Dept of Education, 30 Jan 2026), PDF hosted by into.ie: schools close 26–30 Oct 2026, 25–29 Oct 2027, 30 Oct–3 Nov 2028; October bank holiday listed as a factor.
4. irishstatutebook.ie, Criminal Justice Act 2006 s.68 (substitutes s.80 Explosives Act 1875): offences and penalties (€2,500/6 months summary; €10,000/5 years indictment); low-hazard exclusion except bangers.
5. dublincity.ie, Dublin Fire Brigade "Fire Safety at Halloween": bonfires illegal; organised events only; hundreds of 999/112 calls esp. the 31st; toxic materials list.
6. teanglann.ie Ó Dónaill (1977): Samhain = November; Oíche Shamhna = Hallowe'en; Lá Samhna; Mí na Samhna; also bairín (~ breac = barmbrack), púca, bréagriocht.

Verified but named, not linked (to hold outbound links at 6): Organisation of Working Time Act 1997 Second Schedule ("the last Monday in October"; irishstatutebook eli/1997/act/20/schedule/2); pucafestival.com (29 Oct–1 Nov 2026, Trim and Athboy, "Subject to Licence"); derryhalloween.com + /whats-on (28 Oct–1 Nov 2026, 40th anniversary, parade and fireworks 31 Oct, Awakening the Walled City Trail three nights, "Europe's largest" self-description); duchas.ie Boyle, Co. Roscommon "Halloween Customs" (pookas; sweet cake with ring; three saucers water/clay/ring, "never practised nowadays"; topic count Halloween ~934); duchas.ie Bunninadden, Co. Sligo "Making a Ghost from a Turnip" (filed under Making Toys, night not named); gov.uk NI bank holidays (no October date 2026/2027).

Searches tried for scholarly sources: findpapers "Irish Halloween folklore customs", "Samhain Ireland calendar custom", "Irish calendar festivals folklore", "barmbrack divination Halloween", "bonfire night Ireland antisocial" (Crossref hits were JSTOR, not OA); OpenAlex OA search found Nic Philibín 2025 and UCD thesis "The Landscape of Halloween" (2023, not used).

Blocked: gov.ie, citizensinformation.ie, timeanddate.com (403, bot walls, not worked around). Brief asked for gov.ie on fireworks, school dates and bank holiday; Irish Statute Book and the circular PDF used instead.

## Sibling checks
b2 history-of-halloween (origins, Bitel), b1 halloween-in-the-uk (NI fireworks via nidirect, barmbrack line), b4 halloween-around-the-world (Ireland entry: Oíche Shamhna, bank holiday dates, barmbrack with ring), halloween-in-canada, what-does-halloween-mean (owns Samhain etymology; also cites teanglann Samhain entry, so teanglann.ie is at 2 b4 posts). No origin narrative here; meaning of Samhain kept to one line. 6-gram overlap check run against every b1–b4 file: remaining matches are the template spec's own quoted question ("Will you be my favourite little pumpkin?") and generic short phrases.
