# Research brief — halloween songs (row 152)

- Slug: `halloween-songs` · absorbs "halloween music", "best halloween songs" · category `festive-beats`
- Sibling boundary: b4 `halloween-party-playlist` (row 191) owns the ordered party set; this page is the era reference. b2 `halloween-movie-quotes` copyright care mirrored: no lyrics at all, titles/names/years only.
- Slug free in Strapi (`filters[slug][$eq]=halloween-songs` → 0 results, 2026-10-13).

## Phase 0 — first-party data
No Halloween or music-choice data in facts.md. Used, verbatim:
- 48.3% of shared pages are opened on a phone (27,725 of 57,456 views) — measured 2026-09-24
- Average views per created page: 11.1 — measured 2026-09-24
- Raksha Bandhan 2026 lead time (n = 89): 49.4% built on the festival day itself — labelled in body as the nearest analogue, not Halloween data.
Template-spec music features (product fact, not counted): /happy-halloween — YouTube link (audio only, optional start time), eight Halloween favourites such as This Is Halloween, Monster Mash, Thriller, built-in spooky music box, music starts after the knock. /happy-halloween-premium — song starts on first tap; on "yes" the song hits the chorus.

## Phase 1 — SERP (1 WebSearch call, US-served index; "halloween songs")

| # | Page | Words / structure | Direct answer | Data & dates | Format | Tone / optimising for |
|---|---|---|---|---|---|---|
| 1 | scarymommy.com/entertainment/halloween-songs-best | ~1,000; 21 H3 song items | No — intro about costumes first | None; updated 26 Oct 2021 | Numbered H3 list, one-line blurbs, no table/FAQ | Chatty first person; listicle clicks |
| 2 | scarymommy.com/halloween-songs-best (duplicate) | — | — | — | — | Same publisher, second URL |
| 3 | blog.earthnetworks.com/songs-about-halloween | HTTP 404 | — | — | — | Dead/hijacked; weak |
| 4 | tunefind.com/blog/2023/10/fan-favorite-halloween-songs | HTTP 403, snippet only | — | 2023 | — | Fan-vote list; weak |
| 5 | romper.com/entertainment/halloween-songs-for-kids | ~1,100; 15 H2 songs | No — scene-setting intro | Monster Mash 1962, Time Warp 1975, Spooky Scary Skeletons; 9 Sep 2021 | H2 per song, YouTube embeds | Parent-facing; kids long tail |
| 6 | scholastic.nd.edu/issues/the-best-halloween-songs | ~450; 5 items | No | Nov 2023 | Numbered list | Student magazine opinion; weak |
| 7 | cdn.dji.nl/social-clips/... | spam | — | — | — | Hijacked-subdomain spam; weak, not analysed |
| 8 | billboard.com/pro/top-halloween-songs | snippet only | — | — | — | Competitor (never cite) |
| 9 | meetingguide.aa.org/?p=694262 | spam | — | — | — | Hijacked spam; weak |

Weak in top 9: 5 (earthnetworks 404, tunefind, ND student magazine, two hijacked spam pages). Gate 4 passes.
serps.md has no measured row for this keyword; the prompt's incumbents (Billboard, Spotify, Rolling Stone, Parade) could only be partly confirmed (Billboard appeared; the others did not in this search).

## Phase 2 — gap
- Table stakes: Monster Mash, Thriller, This Is Halloween, Ghostbusters, Time Warp, Halloween theme, Spooky Scary Skeletons, kids' songs.
- Gap: no page dates the classical pieces or separates composition vs recording rights; none explains *why* a song became a Halloween song; none cites research on why music sounds scary; none has chart data; none covers Hindi horror-film songs or La Llorona; none groups by era.
- Stale: every list 2021–2023, no dated facts.
- Fan-out: what makes a Halloween song · oldest Halloween music · why spooky music sounds scary · minor keys across cultures · Monster Mash year/chart · kids' songs · Bollywood horror songs · classical copyright · Thriller status · list vs party playlist.
- Angle: wins by being the only post that explains why each Halloween song became one (subject, source or sound), backs the sound route with 2020–2026 research, and reads the Official Charts record of Monster Mash's 14 November re-entries.

## Phase 3 — sources (all fetched)
| Source | What it says (used) | Read |
|---|---|---|
| Di Stefano et al. 2026, Annals NYAS (Wiley), europepmc PMC13395244 | 146 English + 64 Mandarin speakers; dissonant intervals rated rough, cold, spiky, dark; country/language minimal influence | Full text, CC BY |
| Putkinen, Rassouli, Nummenmaa 2026, Phil Trans R Soc B, PMC13601867 | Fear etc. recognised above chance across cultures; major–minor connotations arise through enculturation, no equivalent in speech | Full text, CC BY |
| Trevor, Arnal, Frühholz 2020, JASA, europepmc MED/32611175 | Scream-like film music imitates roughness of human screams | Abstract only (CC BY) |
| Blumstein, Davitian, Kaye 2010, Biology Letters, PMC3001365 | Horror soundtracks: more non-musical sidebands and noisy screams than expected; dramatic films suppressed noise | Abstract only |
| Official Charts Company — Monster Mash (London HL10320) | 01/09/1973 No. 43 → No. 3 on 06/10/1973, 13 weeks; No. 13 on 27/10/1973 | Page fetched 2026-10-13 |
| Official Charts Company — Monster Mash (Decca) | 14 one-week Top 100 appearances 10/11/2007 (No. 79) → 13/11/2025 (No. 20 peak); 2020–2024: 50, 41, 38, 29, 71; absent 2011/14/16/18/19 | Page fetched 2026-10-13 |

Fact-checks only (not cited): Wikipedia API for every song year/maker; Official Charts search for Ghostbusters (UK peak 2, 1984), This Is Halloween (UK peak 14, 2023), Spooky Scary Skeletons (UK peak 30, 2022) — not used in body.
Rejected: PMC10725765 (Miller et al. 2023, horror sweet spot) — already in b1 and b2; Frontiers hits (banned); PLOS ONE/Scientific Reports (megajournals).
findpapers queries: "minor mode dissonance fear emotion music perception", "scary music horror film soundtrack fear", "nonlinear acoustics scream roughness film music fear", "film soundtracks nonlinear analogues emotion", "terrifying film music mimics screams", "major minor mode emotion cross-cultural listeners".
