# Research brief — halloween countdown ideas (row 187, absorbs "31 days of halloween")

Batch `2026-10-13-halloween-b4` · slug `halloween-countdown-ideas` · theme party · written 2026-10-13

## Phase 0 — first-party data
facts.md read directly (no `npm run facts`). No Halloween usage data exists. Used, verbatim:
- 28.0% of miss-you senders set a reunion date for the countdown (60 of 214) — measured 2026-09-25 (caveats in body: n=214, since 28 July 2026, none for Halloween)
- Not one of the 89 Raksha Bandhan 2026 pages was built more than 7 days ahead; 7 days was the earliest — measured 2026-09-09 (disclosed as a different, one-day festival, small sample)
- 90.9% of started pages are actually published and shared (4,724 of 5,199) — measured 2026-09-24
- 48.3% of shared pages are opened on a phone (27,725 of 57,456 views) — measured 2026-09-24

Template spec: /happy-halloween has NO countdown or timer feature. /happy-halloween-premium has "an optional unlock time (until then the link shows only their name and a countdown)" — described exactly so. The spec does not say how far ahead the unlock can be set; the post says so.

## Phase 1 — SERP (1 search used: WebSearch, US index)
| # | URL | Type | Fetched | Words / structure | Direct answer | Data | Format | Notes |
|---|---|---|---|---|---|---|---|---|
| 1 | www3.nnu.edu/halloween-advent-calendar_17459 | hijacked-subdomain spam | no | — | — | — | — | weak, not analysed |
| 2 | romper.com 31 countdown calendar ideas | publisher listicle | yes | ~2,000; 31 numbered H2s | after 3-para intro | none; updated Feb 2024 | product embeds, affiliate | single format (advent-style bags), kids |
| 3 | www3.nnu.edu countdown calendar 32121 | spam | no | — | — | — | — | weak |
| 4 | tools.wbez.org how many days until | hijacked-subdomain timer spam | no | — | — | — | — | weak |
| 5 | dateyourspouse.com/halloween-countdown | blog + printable | yes | ~1,200; prep steps + chain slips | buried | none | PDF printable, affiliate | single format (paper chain), behind download |
| 6 | dateyourspouse.com/?p=59925 | duplicate of 5 | no | — | — | — | — | duplicate |
| 7 | barleyandbirch.com 31 easy countdown activities | mommy blog | 403, snippet only | 31 activities | — | — | — | kids only |
| 8 | mondaymandala.com/halloween-countdown | live timer + 10 ideas | yes | ~400 | none | timer stale (2024) | timer widget | generic ideas |
| 9 | mamasmiles.com/halloween-countdown | mommy blog (2010) | yes | ~600 | paper chain anecdote | none | link list | kids refused to remove links |

Weak in top 10: 7 of 9 (3 spam/timer, 1 duplicate, 3 small blogs). Gate 4 passes.

## Phase 2 — gap
- Table stakes: 31-day list, paper chain, advent-style calendar.
- Gap: no page compares formats; none gives length options (13 nights, final week), who each suits, daily minutes, prep or cost; none covers offices, teens or long-distance family; none gives 31 Oct weekdays for 2026/2027; none explains why month-long calendars stall (Mama Smiles even reports it stalling).
- Fan-out: what is 31 days of Halloween; when to start; toddler version; non-candy fillers; office version; long distance; reverse advent; how to keep going; a card with a countdown.
- Angle: wins by being the only post that compares six countdown formats on audience, daily minutes, prep and estimated cost with 2026/2027 weekdays, grounded in habit/anticipation research and SubhSandesh's 28.0% countdown-setting rate.

## Phase 3 — sources (all fetched via Europe PMC REST full text)
1. Gardner, Sheals, Wardle & McGowan 2014, IJBNPA (BMC), CC BY — https://europepmc.org/article/PMC/PMC4216661 — 57 parents, habit strength within two weeks, maintained/increased; "same place at the same time each day". Full text read.
2. Shahnawaz et al. 2026, CHI Extended Abstracts (ACM), CC BY-NC-ND — https://europepmc.org/article/PMC/PMC13089969 — 13,997 days, 131 + 72 participants, 90 days; later-day engagement strongest predictor of consistency; consistency strongest predictor of adherence. Full text read.
3. Nawijn et al. 2010, Applied Research in Quality of Life (Springer), CC BY-NC — https://europepmc.org/article/PMC/PMC2837207 — 1,530 Dutch, 974 vacationers; higher pre-trip happiness, possibly anticipation; no post-trip difference generally. Full text read.
4. Dawson & Johnson 2026, Cognitive Science (Wiley), CC BY — https://europepmc.org/article/PMC/PMC12818390 — BHPS waves 1–17, 125,026 obs / 13,969 people; anticipated-loss displeasure outweighs anticipated-gain pleasure (financial expectations). Full text read.
Wikipedia "Advent calendar" was drafted as a body link, then removed: en.wikipedia.org would have hit 4 b4 posts (verifier CAP). Kept only as a verified `about` sameAs (Q152862).

Rejected: Gardner/Lally/Wardle 2012 BJGP "Making health habitual" (PMC3505409) — full text behind reCAPTCHA at PMC and not rendered at bjgp.org; not worked around. Frontiers, MDPI, Scientific Reports and BMC Psychology candidates skipped per BRIEF. timeanddate.com returned 403; weekdays computed arithmetically and match BRIEF §1 (Sat 31 Oct 2026, Sun 31 Oct 2027); weekend counts 9 (2026) and 10 (2027).
Searched for countdown-ritual research ("advent calendar history tradition", "countdown calendar children"): nothing open-access and on subject — recorded as swap-test failure.

None of these papers appear in b1–b3 or b4 §10 spent lists (grep for PMC ids returned nothing). capcheck: clean for this post.

## Sibling de-duplication
Checked: b4 halloween-ideas-with-friends, halloween-sleepover-ideas, things-to-do-on-halloween-instead-of-trick-or-treating; b3 halloween-ideas-for-kids (week-by-week plan), b2 halloween-movies-to-watch (weekend schedule), things-to-do-on-halloween-night, october-quotes (countdown captions), b1 halloween-activities-for-couples (31-day couples calendar). Swapped out two clashing ideas: creaky-sound guessing (b1 party games) and horror-film poster edit (b2 photoshoot). Crafts and movies held to one line each.
