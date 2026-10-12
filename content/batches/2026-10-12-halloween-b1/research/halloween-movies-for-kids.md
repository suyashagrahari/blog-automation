# Research brief — halloween movies for kids

Row 31 · slug `halloween-movies-for-kids` · absorbs "kid friendly halloween movies" · theme kids · written 2026-10-12

## Phase 0 — first-party data
facts.md has no film or Halloween data (BRIEF §3). Used three platform-wide lines, verbatim:
- 48.3% of shared pages are opened on a phone (27,725 of 57,456 views) — measured 2026-09-24
- Average views per created page: 11.1 — measured 2026-09-24
- 38.5% of creators password-protect their page before sharing it (2,000 of 5,199) — measured 2026-09-24

Honest note: none bears on which film suits which age. The post's original contribution is first-hand verification (23 films checked against FilmRatings.com and bbfc.co.uk on 2026-10-12) plus research-backed guidance, not platform data.

## Phase 1 — SERP (Firecrawl, location United States, 1 search used)

| # | URL | Type | Weak? |
|---|---|---|---|
| 1 | hollywoodreporter.com — "Family Frights: 40 Kid-Friendly Scary Films" (6 Oct 2026) | publisher listicle | no |
| 2 | imdb.com/list/ls052733561 — user list | list | no (authority) |
| 3 | editorial.rottentomatoes.com — 60 Best Scary Kids Movies (3 Oct 2025) | publisher listicle | no |
| 4 | reddit.com/r/halloween thread | forum | yes |
| 5 | againstallgrain.com (2020) | food blog | yes |
| 6 | mother.ly — 40+ by age | parenting publisher | no |
| 7 | mommypoppins.com — 31 gentle to spooky | parenting blog | yes |
| 8 | swank.com — top Halloween movies | licensing vendor list | yes |
| 9 | commonsensemedia.org — best Halloween movies for kids | ratings authority | no |
| 10 | stuffedsuitcase.com — 31+ G/PG/PG-13 (2026) | travel blog | yes |

Weak count: 5/10 (matches PLAN). serps.md has no row for this keyword; nearest is "best halloween movies to watch" (3 weak, entertainment majors).

Fetched in full (ctx_fetch_and_index): THR, Rotten Tomatoes, Against All Grain, Motherly. IMDb returned empty, Reddit 403; Motherly substituted.

| Page | Words / structure | Direct answer | Data | Format | Optimising for |
|---|---|---|---|---|---|
| THR | ~40 entries, editorial blurb each | after intro | none | numbered list, images | entertainment authority, breadth |
| Rotten Tomatoes | 60 entries, PG and below, sorted by Tomatometer | intro paragraph | Tomatometer %, critics consensus | ranked cards | critic score |
| Against All Grain (2020) | ~20 films + TV episodes | none | "Parents say / Kids say" ages copied from Common Sense, streaming links | per-film cards | personal family list |
| Motherly | 40+ in age bands (younger / 9+ / pre-teen) | buried after intro | MPA letter only, links to Common Sense | H3 per film, 1–2 lines | "by age" intent |

## Phase 2 — gap
- **Table stakes:** Hocus Pocus, Nightmare Before Christmas, Coraline, Monster House, Casper, Great Pumpkin; MPA letter; some age grouping.
- **Gap:** no page gives runtime, a BBFC rating next to the MPA one, or a named heads-up scene per film; none cites any research on children's fear by age; none says what to do after a scary scene; none addresses whether to forewarn. Against All Grain's streaming links (2020) are stale, which is why we list none.
- **Fan-out:** what age for X; is X too scary for N-year-old; should I warn my kid; how to calm a child after a scary movie; MPA vs BBFC; where to stream.
- **Angle:** wins by being the only post that ranks kids' Halloween films on an age-based scare ladder grounded in fright research, with every MPA and BBFC rating and runtime checked on the official sites and one named heads-up scene per film.

## Rating verification (2026-10-12)
filmratings.com `/search-results/?search=` (letter from the rating icon alt text, descriptor from "Reason") and bbfc.co.uk release pages (`__NEXT_DATA__`: classification, classificationUse, durationSeconds). Scripts: scratchpad `halloween-movies-for-kids-ratings2.mjs`.

| Film | MPA (cert #, descriptor) | BBFC | BBFC runtime used |
|---|---|---|---|
| Great Pumpkin (1966) | not on filmratings (TV) | U | 24 min (video) |
| Room on the Broom (2012) | not on filmratings (TV) | U | 26 min |
| Pooh's Heffalump Halloween (2005) | G #41595 | U | 63 min (video) |
| Spookley (2004) | G #41272 | U ("some mild scary scenes") | 45 min (video) |
| Monsters, Inc. (2001) | G #38501 | U | 95 min (cinema 2001) |
| Were-Rabbit (2005) | G #41969 | U | 85 min |
| Casper (1995) | PG #33785 "mild language and thematic elements" | PG 1995 → 12A 2023 ("moderate bad language") | 100 min |
| Nightmare Before Christmas (1993) | PG #32683 "some scary images" | PG | 76 min (1994 cinema) |
| Hotel Transylvania (2012) | PG #45411 | U | 91 min |
| The Addams Family (2019) | PG #52356 | PG | 87 min |
| Coco (2017) | PG #51192 "thematic elements" | PG | 105 min |
| Frankenweenie (2012) | PG #47759 | PG | 87 min |
| Hocus Pocus (1993) | PG #32530 "some scary sequences, and for language" | PG | 96 min |
| Goosebumps (2015) | PG #49605 | PG ("frequent scary scenes") | 103 min |
| Monster House (2006) | PG #41005 | PG | 91 min |
| Coraline (2009) | PG #45001 (rated 2008) | PG | 100 min (2009 cinema) |
| ParaNorman (2012) | PG #47694 | PG | 93 min |
| The Witches (1990) | not returned (only 2020 remake) | PG 1990 → 12 | 91 min |
| Ghostbusters (1984) | PG #27436, no descriptor | PG 1984 → 12A 2011 | 105 min |
| Gremlins (1984) | PG #27406, no descriptor | 15 1984 → 12A 2012 | 106 min |
| Beetlejuice (1988) | not returned (only 2024 sequel) | 15 1988 → 12A 2018 | 92 min |
| Poltergeist (1982) | PG #26466, no descriptor | 15 ("strong supernatural threat, gory images") | 114 min |
| The Others (2001) | PG-13 #38431 "thematic elements and frightening moments" | 12 2001 → 12A 2022 | 104 min |

## Phase 3 — sources (all fetched)
1. **Wilson, B. J. (2008) "Media and Children's Aggression, Fear, and Altruism", The Future of Children 18(1):87–118** — https://files.eric.ed.gov/fulltext/EJ795855.pdf — peer-reviewed (ERIC flag), open access, full text read. Ages 2–7 frightened by look/sound (ghosts, witches, monsters); 8–12 by injury, violence, realistic threats; cognitive coping for older elementary, noncognitive (physical comfort, turning off) for younger; reports Harrison & Cantor: 90% of 150 students, 26% residual anxiety, 52% sleep/eating disturbance. Subject test: pass.
2. **Hoffner & Cantor (1990), Human Communication Research 16(3):323–54** — https://eric.ed.gov/?id=EJ404956 — ERIC abstract only (full text not read): forewarning increased anticipatory fear; knowing the happy outcome reduced it. Subject test: pass.
3. **MPA Ratings Guide** — https://www.filmratings.com/ratings-guide/ — descriptors on every PG+ rating since 1990; "Scary Images are generally PG; Frightening Images are generally a step up at PG-13". Undated.
4. **BBFC Casper record** — https://www.bbfc.co.uk/release/casper-q29sbgvjdglvbjpwwc0zndq0odc — PG 1995 → 12A 2023.
5. **BBFC Poltergeist record** — https://www.bbfc.co.uk/release/poltergeist-q29sbgvjdglvbjpwwc0zmdk5njy — 15, 114 min.

Searches tried (findpapers, no budget): "children fright reactions media developmental", "children fear television coping strategies age", "Cantor fright reactions mass media children", "children frightening media exposure sleep anxiety"; ERIC API for Cantor fright papers. Rejected: Cantor's primary papers in Media Psychology, JOBEM, J Children & Media (Taylor & Francis — banned), Poetics 1995 (Elsevier — full), Cantor & Wilson 1984 (Journal of Broadcasting, T&F), Martin 2019 (banned), Frontiers in Neurology 2026 PMC13236553 (Frontiers over cap).

Caps (capcheck 2026-10-12): eric.ed.gov now 2 posts (with halloween-jokes-for-kids); filmratings.com and bbfc.co.uk 1 post each.

## Claims in the prompt checked
- "Verify on filmratings.com": possible for 19 of 23; the database has no entries for TV specials, and search did not surface the original The Witches (1990) or Beetlejuice (1988). Recorded in structuralLimitations; the post prints no unverified letter.
- "Find an open-access Cantor source": no open-access Cantor-authored primary paper found outside banned publishers; used Wilson 2008 (which reports Harrison & Cantor) and an ERIC abstract of Hoffner & Cantor 1990.
