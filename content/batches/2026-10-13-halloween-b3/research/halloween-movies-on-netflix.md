# Research brief — halloween movies on netflix (row 148)

- Slug: `halloween-movies-on-netflix` · absorbs "netflix halloween movies" · theme movies · plan weak 3/10
- Written 2026-10-13. Phase 0: facts.md read (no `npm run facts`). Facts used: 48.3% phone opens, 11.1 views/page, 90.9% publish rate (all platform-wide, measured 2026-09-24). No Halloween usage data exists; none implied.

## Phase 1 — SERP (WebSearch, US index — lower confidence than Google). Searches used: 1

| # | URL | Date | Type | Notes |
|---|---|---|---|---|
| 1 | news.xcp.org (school newspaper) | 18 Oct 2018 | short list | Conjuring, Shining, Sixth Sense, Donnie Darko, Goosebumps — licensed titles, long since rotated. **Weak/stale.** |
| 2 | thewrap.com/best-halloween-movies-on-netflix | undated "right now" | listicle, H2 per film | Halloween (2018), Fear Street, Scream (2022)… no availability dates, no original/licensed flag. Answer buried after intro. Incumbent. |
| 3 | netflixlife.com/…/halloween-movies-netflix | page title "2016" | slideshow, 26 slides | Stale. **Weak.** |
| 4 | macmyths.com (Oct 2024) | 2024 | listicle | Stale year in title, low-quality domain. **Weak.** (snippet only) |
| 5 | netflixlife.com 2020 | 2020 | listicle | **Stale.** |
| 6–7, 9 | netflixlife.com 2021 ×3 | 2021 | listicles | **Stale.** |
| 8 | aol.com syndication | — | listicle | Returned HTTP 404 on fetch; judged from snippet only. |
| 10 | creepycatalog.com/best-halloween-movies-on-netflix | updated 21 Oct 2022 | listicle with "Stream on Netflix" links | Links The Conjuring 2 (netflix.com/title/80091246) — **that title page showed isAvailable=false on Netflix US on 13 Oct 2026**. Stale. |

Weak count in top 10: **8** (xcp 2018, netflixlife ×4 dated 2016–2021, macmyths 2024, creepycatalog 2022, aol 404). Gate 4 passes. Netflix Tudum and What's on Netflix did not appear in this index's top 10 (Google may differ — unmeasured).

Table stakes: Hubie Halloween, Fear Street, Nightbooks, a horror-heavy mix, "right now" framing.
Gap: **no page dates its availability claims, none says how it checked, none separates Netflix originals from licensed titles, none covers international originals for an Indian reader, and none tells the reader how to check their own country.** Several still list titles that have left (The Conjuring 2).
Fan-out: what's a Netflix original / will it still be there; horror vs family vs series; Hindi/Korean options; how long is a binge; how to check my country; is X (Hocus Pocus) on Netflix.

Angle: wins by being the only post that checks every title on Netflix US on a stated date, flags each as original or licensed from Netflix's own page data, and leads with originals because Netflix's help pages say licensed titles rotate by country and time.

## Availability method (first-hand, 13 October 2026)

- Logged-out `https://www.netflix.com/title/<id>` pages are fetchable (with a current desktop Chrome UA; an older UA is redirected to /unsupportedbrowser). Page data carries `metaData.isAvailable`, `isOriginal`, the US maturity label, year and type. Geo block in page data read `en-US / US`, so every check is **Netflix US**.
- Title IDs came from Netflix's own public genre pages (JSON-LD ItemList): 108663 "Best Halloween Movies" (281 titles), 8711 "Essential Horror Flicks" (437), 83059 "TV Horror" (266), 783 "Children & Family Movies" (550), 89585 horror comedies (136).
- Runtime is not shown logged-out; taken from each title's Wikipedia infobox running time, cross-checked with Wikidata P2047 (Wikidata's 120 min for Nightbooks is wrong; infobox 103 used).
- Raw probe output: scratchpad `halloween-movies-on-netflix-probe-2026-10-13.jsonl` (not committed).

| Title (Netflix id) | First release | Runtime / episodes | US label | isAvailable | isOriginal |
|---|---|---|---|---|---|
| Fear Street Part One: 1994 (81325689) | 2021 | 107 min | R | true | true |
| Fear Street Part Two: 1978 (81334749) | 2021 | 110 min | R | true | true |
| Fear Street Part Three: 1666 (81334750) | 2021 | 114 min | R | true | true |
| His House (81231197) | 2020 | 93 min | TV-14 | true | true |
| Gerald's Game (80128722) | 2017 | 103 min | TV-MA | true | true |
| Apostle (80158148) | 2018 | 129 min | TV-MA | true | true |
| Frankenstein (81507921) | 2025 | 150 min | R | true | true |
| Fear Street: Prom Queen (81512194) | 2025 | 90 min | R | true | true |
| Hubie Halloween (80245104) | 2020 | 102 min | PG-13 | true | true |
| Nightbooks (81002270) | 2021 | 103 min | TV-PG | true | true |
| The Curse of Bridge Hollow (81156676) | 2022 | 91 min | TV-14 | true | true |
| Wendell & Wild (80231433) | 2022 | 105 min | PG-13 | true | true |
| The Bad Guys: Haunted Heist (81686326) | 2024 | 24 min | TV-Y | true | true |
| The Haunting of Hill House (80189221) | 2018 | 10 ep, 42–71 min | TV-MA | true | true |
| The Haunting of Bly Manor (81237854) | 2020 | 9 ep, 46–66 min | TV-MA | true | true |
| Midnight Mass (81083626) | 2021 | 7 ep, 60–71 min | TV-MA | true | true |
| The Fall of the House of Usher (81414665) | 2023 | 8 ep, 57–77 min | TV-MA | true | true |
| Wednesday (81231974) | 2022 (Netflix shows 2025) | 16 ep, 48–69 min | TV-14 | true | true |
| Kingdom (80180171) | 2019 (Netflix shows 2020) | 12 ep, 36–56 min | TV-MA | true | true |
| All of Us Are Dead (81237994) | 2022 | 12 ep, 53–71 min | TV-MA | true | true |
| #Alive (81240831) | 2020 | 99 min | TV-MA | true | true (Lotte released it in Korea) |
| Bulbbul (81029150) | 2020 | 94 min | TV-MA | true | true |
| Ghoul (80245450) | 2018 | 3 ep, ~45 min | TV-MA | true | true |
| Typewriter (80996338) | 2019 | 5 ep, 43–54 min | TV-MA | true | true |
| Feria: The Darkest Light (81059720) | 2022 | 8 ep (length unlisted) | TV-MA | true | true |
| Incantation (81599888) | 2022 | 111 min | TV-MA | true | true |
| Halloween Ends (81489841) | 2022 | 111 min | R | true | **false** |
| Scream VI (81639205) | 2023 | 122 min | R | true | **false** |
| The Black Phone (81488656) | 2022 | 103 min | R | true | **false** |
| Bhool Bhulaiyaa 3 (81686134) | 2024 | 158 min | TV-14 | true | **false** |
| Goosebumps 2: Haunted Halloween (80991404) | 2018 | 89 min | PG | true | **false** |

Excluded after checking: Hush (80091879) and Veronica (80109295), both available but isOriginal=false despite being commonly called "Netflix horror"; The Conjuring 2 (80091246) isAvailable=false; Sweet Home, Cadaver, A Babysitter's Guide to Monster Hunting, We Have a Ghost (verified original + available, cut for length). Hocus Pocus: absent from all six genre listings fetched.

## Phase 3 — sources (all fetched)

| Source | What it supports | Date | Notes |
|---|---|---|---|
| help.netflix.com/en/node/4976 | originals = produced or exclusive rights, red N; licensed titles "may only be available in certain countries or for a limited time" | undated | primary, Netflix |
| help.netflix.com/en/node/60541 | why titles leave: rights, regional popularity, cost; heads-up before leaving | undated | primary |
| help.netflix.com/en/node/24853 | selection of shows and movies may differ outside your sign-up country | undated | primary |
| netflix.com/browse/genre/108663 | Best Halloween Movies collection, 281 titles on Netflix US, 13 Oct 2026 | live page | first-hand count |
| europepmc PMC9524295 — Billaux et al., *Psychologica Belgica* | binge-watching usually = ≥3 hour-long episodes in a sitting; study cut-off ≥120 min and ≥3 episodes; trouble-free vs problematic binge-watchers differ beyond pattern | 2022-09-30 | peer-reviewed, OA, CC BY, full text read |
| europepmc PMC12007762 — Singh et al., *J Fam Med Prim Care* | n=430 Bhubaneswar medical students: 60.60% prefer night viewing, 69.07% smartphone/tablet, 24.5% sleep affected | 2025-03-25 | peer-reviewed, OA, CC BY-NC-SA (cited and linked only), full text read |

Subject test: both papers are about streaming/series viewing behaviour; the Netflix help pages are about the platform's catalogue behaviour. Swap test: none fits another b3 post. Avoided b2's horror papers (Cureus 2025, BMC Psych 2026, PLOS ONE 2022) and PLOS ONE generally (heavily used in b3); Heliyon (Elsevier) and J Prim Care Community Health (SAGE) candidates rejected as banned publishers. No competitor cited. Wikipedia: 0 body links (used only for runtimes and sameAs).

Searches tried in findpapers: "binge-watching television series viewing motives", "horror film fear enjoyment viewers", "binge-watching motives enjoyment narrative engagement", "binge watching sleep quality pre-sleep arousal", "streaming video on demand viewing behaviour", "co-viewing television family together", "binge-watching episodes session study".

## Brief/prompt claims checked
- "Netflix originals stay on Netflix globally" — only partly true. Netflix's help page warns about licensed titles, but promises nothing global for originals; #Alive is flagged original on Netflix US but was released in Korean cinemas by Lotte. Hush and Veronica are not flagged original.
- "Tudum ranks top-5" — not in the measured WebSearch top 10.
- Netflix title pages are fetchable (with a current UA) and expose the original flag, which made per-title dating possible.
