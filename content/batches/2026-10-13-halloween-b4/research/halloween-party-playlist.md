# Research brief — halloween-party-playlist (row 191, b4)

Keyword: **halloween party playlist** (absorbs "halloween party songs"). Theme: party. Weak 5/10 per plan.

## Phase 0 — first-party data
No Halloween data in facts.md (BRIEF §3). `npm run facts` was NOT run. Used, verbatim:
- Raksha Bandhan 2026 lead time (49.4% built on the day) — nearest-analogue lead time, labelled as such.
- 86.1% of on-time rakhi pages built within 24 hours.
- 48.3% of shared pages opened on a phone (2026-09-24).
No playlist or music-choice data exists, so the table's first-party column fails honestly.

## Phase 1 — SERP (1 WebSearch call, US index; "halloween party playlist")
Total searches used for this row: **1 WebSearch**. Firecrawl not used.

| # | URL | Words / structure | Direct answer? | Data and date | Format | Notes |
|---|---|---|---|---|---|---|
| 1 | thedailymeal.com/ultimate-halloween-party-playlist | ~400; 17 unnumbered songs with iTunes links | No, intro about costumes and NYC parade | None; 7 Oct 2011 | Plain list, no table/FAQ | Stale, thin: **weak** |
| 2 | bostonmagazine.com/?p=89601 | ~1,000; 15 numbered songs with jokey blurbs | No | None; 25 Oct 2012 | Numbered bold list | Stale, regional magazine: **weak** |
| 3 | neilturner.me.uk/2024/10/31/playlist-of-the-month-halloween-party | ~350; 10 bullets + Spotify embed | No | Spotify stream counts; Oct 2024 | Bullets | Personal blog: **weak** |
| 4 | dailycollegian.com/2012/10/scaring-up-the-perfect-halloween-playlist | ~700; prose | Partly: ambient → horror themes → dance | None; 26 Oct 2012 | Prose, no headings | Student paper; closest framing to ours (phased build) but no tempo, minutes, counts, licence or noise: **weak** |
| 5 | twinkl.co.uk/resource/halloween-party-playlist-t-prt-1657268961 | fetch returned empty; snippet only | — | — | Printable classroom resource | Plus 3 more twinkl country duplicates (.cl, .pt, .ro) in the top 9: **weak** |

Top 9 returned; **weak count 9/9** (stale 2011–2012 lists, a personal blog, four Twinkl printable duplicates). Gate 4 passes easily. No AI Overview visible in WebSearch output.

**SERP overlap with `halloween-songs`' recorded SERP:** 0 of 9 URLs and 0 shared domains (songs: scarymommy ×2, earthnetworks, tunefind, romper, scholastic.nd.edu, dji spam, billboard, aa.org spam). Two distinct intents; no cannibalisation at the SERP level.

Competitors (never cited or linked): all five above.

## Phase 2 — gap
- Table stakes: a list of recognisable spooky/dance songs (Ghostbusters, Thriller, Monster Mash, She Wolf, Time Warp recur).
- Gap: nobody gives tempo, minutes per phase, track counts, runtime maths, crowd-specific sets (kids, office, non-English), noise cut-offs or licensing. Collegian 2012 sketches a 3-step mood progression in prose only.
- Stale: every list but one is 2011–2012.
- Fan-out: what BPM; how many songs; what to play first; kids/office/teen sets; licence for bar/office; what time to stop; crossfade; non-English songs.
- Angle: see batchMeta.angle.

Song list deliberately avoids all 36 tracks of `halloween-songs` (no overlap in the 50 tracks; the template section names three built-in tracks only because template-spec lists them).

## Phase 3 — sources (all fetched)
| Source | Use | Date | Read |
|---|---|---|---|
| europepmc.org PMC12096039 — Bigand et al., *J Neurosci* (Society for Neuroscience, CC BY) | 80 participants / 40 dyads; social-coordination EEG marker only when partners see each other; vertical bounce drives observers' EEG | 2025-05-21 | Full text |
| europepmc.org PMC13256229 — Alen et al., *Alcohol and Alcoholism* (OUP, CC BY) | 6,110 Billboard songs 1959–2020; 16.1% alcohol refs; danceability OR 1.35; instrumentalness OR 0.85; tempo n.s. | 2026-05-01 | Full text |
| epa.nsw.gov.au preventing-neighbourhood-noise | amplified music: not after midnight Fri/Sat/day before public holiday, 10 pm other days; $400/$800 fine after warning, 40 days | updated 2026-08-31 | Full page |
| copyright.gov Title 17 ch.1 §101 | definition of performing "publicly" | no date | Full page |
| pplprs.co.uk/faqs | outside domestic environment = public performance, even for employees only; temporary permit for events | no date | Full page |

Not used / rejected: Frontiers groove papers (banned publisher), Sci Rep / PLOS ONE (megajournals), Current Biology / iScience / Acta Psychologica (Elsevier), J Parkinson's Dis (SAGE), Annals NYAS (spent by halloween-songs). All §10 and b1–b3 papers avoided; gov.uk DEFRA noise page (b1 party-themes) avoided.

Track fact-checks (not cited): years/artists/languages via Wikipedia API; BPM and durations via songbpm.com, checked Oct 2026. Runtime: 23 timed phase tracks averaged 3:50 (229.7 s) → 15.7/hour.

## Brief claims found false or unverifiable
- "songs ≈ 3.5 min → ~17/hr": our 23 timed tracks average 3 min 50 s → ~15.7/hr. Post states this.
- "cite ASCAP/BMI official page": ascap.com and bmi.com returned HTTP 403 (bot wall; not worked around). Used the US Copyright Office §101 definition instead; ASCAP and BMI are named without links.
- NSW EPA page names a new "Noise Control Regulation 2026" (page updated 31 Aug 2026); time limits quoted as shown on the live page.
