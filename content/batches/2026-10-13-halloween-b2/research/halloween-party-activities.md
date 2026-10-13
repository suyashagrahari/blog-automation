# Research brief — halloween party activities (row 98)

- **Keyword:** halloween party activities (absorbs "halloween party activities for adults")
- **Slug:** `halloween-party-activities` (Strapi slug check 2026-10-13: 0 hits, free)
- **Plan row:** rank 98, theme party, weak 5/10, band 3,000–10,000/mo
- **Siblings (no idea reused):** b1 `halloween-party-games` (22 rule games incl. One-Word Ghost Story, Murder in the Dark), `halloween-party-ideas` (host timeline, food per guest, budget, dry ice), `halloween-party-themes` (18 themes incl. Poe night with Usher/Raven and Sleepy Hollow harvest); b2 `halloween-party-games-for-kids`, `halloween-games-for-teens`, `things-to-do-on-halloween-night`, `diy-halloween-decorations`. This page = non-game stations only. Stories chosen to avoid the b1 themes post: Irving's German Student, Poe's Masque, M. R. James's Lost Hearts (no Usher, Raven, Sleepy Hollow). `Breaking Bread` (PMC6979515) deliberately avoided: b1 party-ideas cites it.

## Phase 0 — first-party data
No Halloween usage data exists (BRIEF §3); `npm run facts` NOT run. Used three platform/analogue lines verbatim:
1. 48.3% of shared pages are opened on a phone (photo booth built around phone cameras) — first 150 words.
2. Raksha Bandhan 2026 lead time, 49.4% built on the day — labelled as the nearest measured festival, not Halloween, n=89 — first 150 words.
3. Median first-save-to-last-edit 2.5 hours (apology dashboard) — in the /happy-halloween section.
All three are tangential to party activities; stated plainly in the post ("our data only touches the edges").

## Phase 1 — SERP
**Method:** 1 WebSearch (US-served index; Firecrawl disconnected), query "halloween party activities for adults". WebSearch returned 9 results, not 10. Pages fetched with a node fetch inside ctx_execute (headings, word count, dates, table/FAQ schema). No browser tools. Not present in `serps.md`. Confidence: medium (US index, one query; the bare head term was not separately measured).

| # | URL | Weak? | Words (approx, incl. chrome) | Structure | Direct answer | Dates | Tables / FAQ | Optimising for |
|---|---|---|---|---|---|---|---|---|
| 1 | assets1.punchbowl.com/p/party-planning-adults-only-halloween | weak (thin, asset subdomain; e-invite competitor) | 767 | H1 only | n/a | none | no / no | invitations funnel |
| 2 | apartmenttherapy.com/halloween-party-ideas-adults-37307244 | strong | 1,457 | 6 H2 (menu, themes, costumes, activities, décor) | listicle, no direct answer | 2023-09-25 | no / no | party ideas roundup |
| 3 | stacyling.com/elegant-adult-halloween-party-ideas… | weak (personal blog) | 2,430 | 13 planning H3 + 10 idea H3 (masquerade, movie marathon, escape room, tarot…) | buried | 2024-10-21 | no / no | décor/affiliate |
| 4 | nightofmystery.com/collections/halloween-games-for-adults/ | weak-ish (retail collection page) | 2,869 | games H2/H3, FAQ | buried | 2026-05-29 (mod 2026-09-22) | no / FAQ headings | murder-mystery kits |
| 5 | static.intrafocus.com/?p=60623 | weak — hijacked-subdomain spam, not analysed | — | — | — | — | — | spam |
| 6 | hometainment.com/blog/halloween-party-games-for-adults (+ /uk/ duplicate) | weak (retailer blog) | 3,219 | games by group size; "ghost storytelling" one item | buried | 2023-07-24 (mod 2025-10-22) | no / FAQPage yes | chef experiences |
| 7 | frugalconfessions.com/holidays/halloween-activities-for-adults/ | weak (personal blog) | 2,341 | 21 H3 activities, mostly out-of-house (haunted hotel, drive-in) | none | 2021-10-04 (mod 2026-09-28) | no / no | Halloween activities generally |
| 8 | visu.network/blog/halloween-activities-for-adults/ | weak (new 2026 site) | 3,011 | 8 H2 essays, "without a party" | n/a | 2026-09-19 | no / FAQ heading | no-party adult activities |

**Weak count in top 9: 7** (punchbowl asset, stacyling, nightofmystery, intrafocus spam, hometainment ×2, frugalconfessions, visu — counting hometainment once gives 6 of 8 distinct). Plan said 5/10; measured is weaker than planned. Gate 4 not triggered.

Top 5 analysed: apartmenttherapy, stacyling, nightofmystery, hometainment, frugalconfessions. None cited or linked.

## Phase 2 — gap analysis
- **Table stakes:** pumpkin decorating/carving, costume contest/parade, tarot/fortune telling, food/drink, scary stories, movies.
- **Gap:** no page gives setup time, cost, capacity or an adults-only flag per activity; none has a comparison table; none says where to put activities in the room (bottlenecks, food at the exit); none times a read-aloud story or names public-domain texts; none cites research; none treats non-drinkers or introverts as a station; fire-pit activities appear with no safety distance.
- **Stale data:** apartmenttherapy 2023, hometainment 2023, frugalconfessions 2021 (no statistics cited anyway).
- **Fan-out sub-queries:** what counts as an activity vs a game; adult activities; how many stations; where food goes; which ghost stories to read aloud and how long; tarot appropriateness; fire-pit distance; non-drinkers; introverts; costs; something for a friend who missed it.
- **Angle:** Wins by being the only post that treats Halloween party activities as timed, costed stations (setup minutes, est. cost, guests at once, adults-only flag) with a floor layout and public-domain stories timed for reading aloud, using SubhSandesh's 48.3% phone-open share to build the photo booth around phones.

## Phase 3 — sources (all fetched 2026-10-13)
| Source | Verified claim | Access | Publisher check |
|---|---|---|---|
| Pearce, Launay & Dunbar 2015, Royal Society Open Science 2(10), PMC4632513 — europepmc.org | 7-month follow-up of new WEA adult-education classes; 84 singing participants vs 51 crafts/creative-writing; singers bonded faster at month 1; non-singers caught up by month 3 | full text (Europe PMC XML), CC BY | Royal Society — not SAGE/T&F/Elsevier/Frontiers |
| Dunbar et al. 2016, Royal Society Open Science 3(9), PMC5043313 | 169 participants watched *Stuart: A Life Backwards* (90 min) in groups of 12–20; increased pain threshold and group bonding vs 68 documentary controls | full text, CC BY | Royal Society |
| Wiessner 2014, PNAS 111(39), PMC4191796 | 174 day and night conversations; day talk economic matters and gossip; night talk singing, dancing, religious ceremonies, enthralling stories | **ABSTRACT ONLY** — Europe PMC full-text XML returned 500; only abstract claims used | National Academy of Sciences |
| US Fire Administration, usfa.fema.gov/prevention/outdoor-fires/ | fire pits outdoors at least 10 feet from home or anything that can burn; watch children; metal screen over wood fires; put out before leaving the backyard | full page; undated | US government (FEMA) |
| Project Gutenberg #8486, M. R. James, *Ghost Stories of an Antiquary* (1904) | PD in USA; word counts by our script on the eBook .txt: Lost Hearts ≈3,907, Oh Whistle ≈7,935 (incl. headings) | full text | exempt domain |
| Project Gutenberg #13514, Irving, *Tales of a Traveller* (1824) | German Student ≈2,074 words | full text | exempt domain |
| (not linked) Gutenberg #1064, Poe, *The Masque of the Red Death* (1842) | ≈2,397 words | full text | verified, left unlinked to stay within 6 outbound links |

Read-aloud times use our 150 words-per-minute estimate (labelled in the post). findpapers.mjs runs ("group arts activities adult wellbeing", "social interaction parties wellbeing adults", "group singing social bonding", "storytelling social connection adults") returned mostly 2026 Frontiers papers, skipped as a trap; the three papers above came from Europe PMC REST title searches. Capcheck 2026-10-13: none of these URLs/papers/domains used elsewhere in b2.

Wikidata pairs verified via the Wikipedia API: Halloween Q251868, Party Q200538, M. R. James Q963715, Washington Irving Q181667, Edgar Allan Poe Q16867, Fire pit Q187317, United States Fire Administration Q7889886.

## Structural limitations / brief claims checked
- Prompt said "Poe, M. R. James, Irving; verify via Gutenberg": confirmed all three PD on Gutenberg (US). M. R. James died 1936, so PD in the UK/EU too.
- Plan weak 5/10 → measured 7 of 9 weak (US index, one query).
- The prompt's table spec (station · setup · cost · guests · adults only) for 8 stations conflicts with the BRIEF's 3–5 row rule; the table groups the 8 stations into 5 rows.
- Costs are estimates in US dollars for ~10 guests, labelled "est."; no price source.
- No first-party column in the table (no Halloween data) — recorded as a failure.
