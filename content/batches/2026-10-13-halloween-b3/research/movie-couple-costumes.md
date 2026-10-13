# Research brief: movie couple costumes (row 118)

Slug `movie-couple-costumes`. Absorbs "iconic movie couples halloween". Theme: couple. PLAN weak score 4/10.

## Phase 0 — first-party data
- No Halloween data exists in facts.md (BRIEF §3). Platform-wide lines used, labelled as platform-wide in the body: 48.3% phone share of views, 11.1 views per page, 38.5% password rate (all measured 2026-09-24). `npm run facts` was not run.

## Phase 1 — SERP (2 searches used of 2)
- **Tooling:** WebSearch worked (US-served index, not Google's ranking, so lower confidence). Firecrawl disconnected. Competitor pages fetched with `ctx_fetch_and_index`.
- **Query 1, "movie couple costumes"** returned 9 results. Only 2 were genuine pages. The other 7 were hijacked-subdomain spam: video.pw.org, lsfellowship.missouri.edu, support-3.tychesoftwares.com (2 results), netbox.point-broadband.com, slbubble.studentbridge.com and meetingguide.aa.org.
- **Query 2, "famous halloween couples"** (run to measure overlap): essence.com, swooon.com celebrity gallery, elitedaily.com, shibboleth.idm.home.nyu.edu (spam), today.com, buzzfeed.com, grazia.my, theknot.com, money.yahoo.com.

| # | URL | Status | Words | Date | Structure | Answer position | Tables / FAQ | Optimising for |
|---|---|---|---|---|---|---|---|---|
| 1 | bustle.com/articles/119575 (14 movie couple costumes) | 200 | ~1,500 plus product widgets | first published 2015-10-27, updated 2020-10-23 (stale) | 14 numbered H2s, each "X & Y from *Film*", with H3s "For X / For Y" carrying Amazon affiliate products | none; a 2-paragraph intro, then the list | no / no | affiliate shopping per couple |
| 2 | tvinsider.com/swooon/gallery/romance-movie-couples-halloween-costume-ideas | 403, judged from snippet | ? | ? | photo gallery | n/a | n/a | romance-film couples gallery |
| 3 | elitedaily.com/dating/famous-couple-halloween-costume-ideas/2061040 (query 2) | 200 | ~900 | 2017-09-06 (stale) | 5 H3s, each a celebrity couple's costume, with Amazon links | none | no / no | celebrity-inspired shopping |
| 4–5 | no further genuine pages in the 2-search budget | — | — | — | — | — | — | the rest is spam |

- **Weak count in the top 10: about 8 of 9** (7 spam pages plus Bustle's 2015 list). PLAN gave 4/10, and the measured figure is much weaker. Gate 4 passes.
- **Measured overlap with "famous halloween couples": 0 shared URLs and 0 shared domains** across the two top-10 sets in the same index. It is also 0 against the 10 DuckDuckGo URLs the b2 `famous-halloween-couples` brief recorded (today, people, theknot, marieclaire, cosmopolitan, holidayhuddle, halloweencostumes, popsugar, herstylecode, buzzfeed). The intents split: famous-couples is a set of celebrity photo galleries, and movie-couples is a set of film idea lists. This is recorded in `structuralLimitations`.

## Phase 2 — gap analysis
- **Table stakes:** a list of film couples, with an outfit for each partner.
- **Gap:** no ranking page groups the couples by genre, gives the decade, scores recognisability, gives a cost, or includes any non-Hollywood film. None of them addresses how to read at a distance, or the audience age.
- **Stale:** Bustle dates from 2015 (updated 2020) and Elite Daily from 2017.
- **Fan-out:** easiest couple, most recognisable couple, Bollywood couples, horror without gore, cost for two, same-sex or friend pairs, a mixed-age crowd, legality, the signature prop, and sending the photo.
- **Angle:** wins by being the only post that sorts 29 film couples by genre and by the decade the crowd was 16 in (Wentura & Schuck 2025, N = 189). It is also the only one to put Bollywood pairs beside Hollywood ones with split India/elsewhere scores, and to frame the photo for the phone (48.3%).

## Overlap control
- None of the 30 couples on the b2 `famous-halloween-couples` page is used. The excluded list includes Danny and Sandy, Mia and Vincent, Rick and Ilsa, Frankenstein and his Bride, Jack and Sally, Shrek and Fiona, Gatsby and Daisy, Bonnie and Clyde, Beauty and the Beast and Barbie.
- No pair repeats across b1/b2 or the b3 couple posts that were on disk on 2026-10-13 (`couple-costumes-with-baby`, `halloween-couple-costume-ideas-simple`). This was checked after the coordinator's message. `scary-couple-halloween-costumes` and `unique-couple-halloween-costumes` were not on disk yet, so the orchestrator should re-check the horror picks (Maitlands, Shaun and Liz, Columbus and Wichita, Dani and Christian).
- A 5-word overlap check against all b1/b2/b3 files was run. The remaining shared 5-grams are film titles with years (e.g. "Shaun of the Dead (2004)") and nothing else.

## Phase 3 — sources (all fetched)
| Source | Subject test | What it supports | Read |
|---|---|---|---|
| Wentura & Schuck 2025, Psychological Research, europepmc PMC12662928 (CC BY) | yes: film age perception | N = 189; films from about age 16 onward feel "new"; 1990s cohort strongest on 2000s primes; best cut-off 16 | full text |
| Munawar, Kuhn & Haque 2018, PLOS ONE, PMC6289446 | yes: memory for formative years | 68 of 523 studies; bump at about 10–30 | abstract |
| Mohanty, Mudgal & Ganguli 2023, F1000Research, PMC10523098 (CC BY) | yes: Bollywood genres | 105 of 130 top grossers 1994–2019; romantic drama 30; romcoms most stable | abstract plus Table 1 |
| Star Athletica v. Varsity Brands, 2017, law.cornell.edu | partly: garment design | shape/cut/dimensions not copyrightable; 2D surface designs can be | syllabus plus opinion sections |
| Wikipedia DDLJ (entity link only) | — | disambiguation | API-verified |

- Not used: Zhang 2023 PMC9948635, any b1/b2 paper, Frontiers, SAGE (Psychology of Music 2023 reminiscence-bump paper rejected for being SAGE), T&F, Elsevier (Patterns 2022 Bollywood bias paper rejected, Cell Press).
- loc.gov National Film Registry returned 403, so it was dropped.
- Film years were verified against the Wikipedia API extracts, except Star Wars (1977), which is from general knowledge.
- findpapers queries: "nostalgia film movies", "recognition of movie characters faces familiarity", "clothing cues person identification", "Bollywood film audience romance", "reminiscence bump movies preferences", "cosplay character identity fans".

## Brief claims checked
- PLAN weak 4/10 was measured at about 8/9 weak in the WebSearch index, which is lower confidence.
- The prompt asked for 28–34 couples. 29 were delivered, because Mr. & Mrs. Smith and (500) Days of Summer were cut to stay within 1,800 words.
