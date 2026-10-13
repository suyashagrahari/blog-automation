# Research brief: halloween movies to watch

Row 63 · slug `halloween-movies-to-watch` · theme movies · absorbs "best halloween movies to watch", "halloween movies to watch in october" · batch `2026-10-13-halloween-b2` · written 2026-10-13

## Phase 0: first-party data

There is no Halloween, film or viewing data in `content/facts.md` (BRIEF §3), and `npm run facts` was not run. The post uses three platform-wide lines verbatim, all labelled in the body as platform-wide and not Halloween data:

- 48.3% of shared pages are opened on a phone (27,725 of 57,456 views), measured 2026-09-24. Used in the first 150 words.
- Average views per created page: 11.1, measured 2026-09-24. Used in the first 150 words.
- 38.5% of creators password-protect their page before sharing it (2,000 of 5,199), measured 2026-09-24. Used in the invite section.

The template spec (`template-spec.md`) is the only source for /happy-halloween and /happy-halloween-premium features.

## Phase 1: SERP

Firecrawl is disconnected, so I used 2 WebSearch calls on a US-served index that does not reflect Google's ranking. Pages were fetched with `ctx_fetch_and_index` or a scripted fetch. `serps.md` measured the Google SERP for "best halloween movies to watch" as **hard**: imdb, variety, hollywoodreporter, netflix, rottentomatoes, paramount+ and swank, with 3 weak results. None of them is cited.

Query 1, "halloween movies to watch", top 10: tvguide.com, mentalfloss.com, 3 hijacked-subdomain spam copies of "6+ Ultimate Halloween Movies", theforestscout.com, hcdevilsadvocate.com and 2 more spam pages (cpanel.defendernetwork, prod.eaglehills). That is **7 weak results** in this index: 5 spam and 2 student papers. Query 2, "best halloween movies to watch in october", returned inquirer (403), nyunews (403), thethunderbeat, glasgowguardian, bhg.com.au, creepycatalog and filmdaze.net.

| Page | Words | Structure | Direct answer | Data / dates | Format | Optimising for |
|---|---|---|---|---|---|---|
| tvguide.com/galleries/best-halloween-movies-to-watch (2026) | ~3,600 | 32-slide gallery, one H2 per film | Intro names Scream, Beetlejuice, Sinners, Weapons | Streaming link per film (36 "stream" mentions); no ratings, runtimes or scare level | Gallery, trailers, affiliate stream buttons | Fresh-year "2026" head term, affiliate clicks |
| mentalfloss.com 20 best Halloween movies | ~4,500 | 20 numbered H2s, chronological | Buried; the intro says every genre counts | Years only; trivia | Listicle, no table or FAQ | "Halloween-set" films, including non-horror (To Kill a Mockingbird) |
| theforestscout.com (2019, student paper) | ~2,200 | Top-10 countdown | None | None; stale | Plot summaries | School readership |
| hcdevilsadvocate.com (2020, student paper; 403 to script, indexed via ctx) | ~800 | 5 picks | "If you get easily scared" note for Halloweentown | Years; quotes from students | IMDb links | School readership |
| filmdaze.net 31 Days of Halloween | ~2,150 | 31 H2s, one per day | None | None | Calendar framing but no dates, ratings or runtimes | "31 days" October intent |

## Phase 2: gap analysis

- **Table stakes:** a long named list mixing classics and newer films, plus a few family-safe picks.
- **The gap:** none of the five gives an official rating, a runtime or a fear level per film. None groups by mood, includes international horror by country (Japan, Korea, Spain, India) or gives a dated weekend schedule. None explains which classics are legal to watch because they are in the public domain. TV Guide's streaming links go stale because catalogues change by month and country.
- **Stale data:** two of the five are 2019 and 2020 student pages.
- **Fan-out sub-queries:** scariest film; picks for people who hate horror; Indian horror; films set on Halloween night; whether Nosferatu is legal to watch; Dracula/Frankenstein 2027; why US and UK ratings differ; horror and anxiety; horror-fan personality; a Korean starter film; how to plan October viewing; why no streaming list.
- **Angle:** this post wins by being the only post in a SERP of flat entertainment-site lists that gives every film a verified MPA/BBFC rating, runtime and 1–5 scare score, a dated five-weekend October schedule and the US public-domain rule for watching classics legally. It opens with SubhSandesh's 48.3% phone-open share, which matters for the watch-together invite.

## Sibling de-duplication

- Batch 1 `halloween-movies-for-kids` (23 films, MPA/BBFC ladder): none of its films is a main entry here. *The Others*, *Beetlejuice* and *The Nightmare Before Christmas* appear only as "watch if you liked" pointers.
- Batch 1 `halloween-date-ideas-at-home` names no specific films, so nothing is duplicated. Its papers (PMC12212089, PMC10844225, PMC13203665) were avoided.
- Batch 2 `halloween-movie-quotes`, per the coordinator note: its sources were avoided (Scrivner PMC7492010, Duke Public Domain Day, Cornell guide, copyright.gov Circular 33). Its film entries (Halloween 1978, The Shining, Scream) are not main entries. Nosferatu and Night of the Living Dead appear only in the required public-domain section. The 2027 Dracula/Frankenstein date is one FAQ line.
- `family-halloween-movies` (row 71) had not landed. This list is adult/teen, and its only PG-rated picks are Young Frankenstein (PG) and Kwaidan (BBFC PG).

## Phase 3: sources (all fetched)

| Source | What it supports | Read |
|---|---|---|
| Europe PMC PMC12182957, Menon et al., Cureus, 2025-05-23 (CC BY 4.0) | 300 Bengaluru students aged 20–23: horror preference correlated with extraversion (0.55) and agreeableness (0.71); the authors suggest group, shared viewing as a reason | Full text |
| Europe PMC PMC13501714, Perchtold-Stefan et al., BMC Psychology, 2026-06-16 | n = 199, 14-day diary: anxiety predicted next-day violent true-crime viewing; no evidence it raised anxiety; all effects below the SESOI (β = .10) | Full text |
| Europe PMC PMC9067675, Charles et al., PLOS ONE, 2022-05-04 | 136 documents from 32 countries, 14-domain NEON warning typology; UK film classification since 1912 | Full text |
| filmratings.com/ratings-guide | Rating descriptors on every PG, PG-13, R and NC-17 rating since 1990; per-film MPA search | Page and search |
| copyright.gov/circs/circ15a.pdf | "All works published in the United States before January 1, 1931, are in the public domain" | PDF (undated) |
| archive.org/details/night_of_the_living_dead_dvd | NOTLD (1968) in feature_films with a public-domain licence mark | Metadata API |

Not cited but used for verification: bbfc.co.uk release pages (rating, production year, runtime for 26 films), Wikidata Q19057481 (The Witch runtime, 93 min) and the Wikipedia API for sameAs QIDs (Q251868, Q200092, Q1987792, Q861670, Q19652, Q151895).

Rejected candidates: SAGE Evolutionary Psychology PMC11155347; Frontiers PMC6813198 (Martin 2019, spent), PMC11185070 and PMC6582762 (Frontiers trap, §9); spent PMC10725765 and PMC13359723; Scrivner PMC7492010 (used by the quotes sibling).

Search terms (findpapers.mjs): "why people watch horror films motivation", "horror film enjoyment fear sensation seeking", "recreational fear horror media", "horror movie viewing anxiety coping", "horror fans psychological resilience pandemic morbid curiosity", "horror film preference personality", "watching scary movies together social", "horror film physiological arousal heart rate viewers", "fear film watching coviewing companion", "horror film audiences motives enjoyment survey", "frightening entertainment benefits coping", "horror genre fans emotion regulation", "scary movie fright reactions adults", "horror films Korea Japan audience".

## Verification notes and open issues

- **NOTLD public-domain reason not primary-sourced.** loc.gov returned 503, smithsonianmag and pghcitypaper returned 403, web.archive.org returned 503 and the Google Books quota was exhausted. The body says the film is "widely treated as" public domain and attributes the mark to the Internet Archive.
- **Re-release records.** BBFC lists Practical Magic (12A, 104 min) and Tumbbad (15, 107 min) under 2026 and 2024 re-release records. MPA "NR" means filmratings.com search had no record, not that the film is officially unrated.
- **Calendar.** Fri 1 Oct 2027, Sun 31 Oct 2027 and Sat 31 Oct 2026 were computed with JS Date.
