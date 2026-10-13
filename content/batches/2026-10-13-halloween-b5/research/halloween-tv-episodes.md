# Research brief — halloween-tv-episodes (rank 234; absorbs "best halloween episodes")

## Phase 0 — first-party data
No Halloween usage data exists (BRIEF §3). Platform-wide lines used, labelled as such: 48.3% phone opens; 11.1 average views per page; 90.9% publish rate. The template spec is product fact, not counted.

## Phase 1 — SERP (1 search: Firecrawl search, 13 October 2026, before Firecrawl disconnected)
Query "best halloween tv episodes", top 10:

| # | URL | Type | Notes |
|---|---|---|---|
| 1 | reddit.com/r/halloween thread | UGC — weak | Forum list, no dates |
| 2 | ew.com/gallery/best-halloween-episodes | Publisher (competitor) | 30 episodes; HTTP 402 to our fetch — judged from snippet only (S/E numbers given, e.g. "season 5, episode 5") |
| 3 | imdb.com/list/ls079825439 | User list (competitor) | Episode list with S/E, ratings; not fetched |
| 4 | hulu.com/guides/halloween-episodes | Streamer guide (competitor) | "100+" episodes; from India the URL redirects to JioHotstar's homepage, so content not readable |
| 5 | netflix.com/tudum/articles/best-halloween-tv-episodes | Streamer editorial (competitor) | ~3,300 words, 13 shows / 18 episodes, Oct 1 2025, S/E numbers given, Netflix-only availability, FAQ present, no air dates, no table |
| 6 | en.wikipedia.org List of Halloween television specials | Reference | Not cited (en.wikipedia full) |
| 7 | facebook.com ScreenRant post | Social — weak | |
| 8 | youtube.com video | Video — weak | |
| 9 | people.com 44 best Halloween episodes "to stream in 2024" | Publisher (competitor) | HTTP 402; snippet only; year-stamped 2024 (stale) |
| 10 | slashfilm.com 10 best, ranked | Publisher (competitor) | ~2,900 words, Oct 27 2025, 10 episodes with S/E, answer after a 3-paragraph intro, no air dates, no streaming info, no table, no FAQ |

Weak count in top 10: 3 (reddit, facebook, youtube) — matches PLAN.json `weak: 3`. Gate 4 passes.

Comparison of analysed pages: slashfilm (ranked list, critic voice, first person, no data), Tudum (Netflix catalogue promotion, mood-agnostic, "see also" lists of sequels), people.com/EW (galleries, snippet-only). None gives original air dates, none gives availability outside one service or one country, none groups by mood or scare level.

## Phase 2 — gap
- Table stakes: Treehouse of Horror, Brooklyn Nine-Nine heists, The Office, Community "Epidemiology", Buffy "Halloween", Stranger Things S2E2, Bob's Burgers, Gravity Falls "Summerween", Friends.
- Gap: (1) original air dates checked against an episode guide and network pages; (2) streaming by region (US/UK/India) date-stamped; (3) mood/scare grouping; (4) the fact that many "Halloween" episodes premiered in November (13 of 37 numbered Treehouse of Horror episodes; Friends 1 Nov 2001; AHS 2 Nov 2011); (5) Inside No. 9 "Dead Line" first broadcast 28 Oct 2018 (BBC programme page), not on Halloween night; (6) numbering differs across guides (SpongeBob "Scaredy Pants" S1E26 on TVmaze vs "Episode 13" in segment-pair numbering).
- Stale: people.com is stamped 2024.
- Fan-out: which are funny vs scary; which are on Netflix/Disney+/JioHotstar; when did X air; are cartoons OK for kids; which aired on Halloween; how many Treehouse of Horror episodes are there.

Angle: wins by being the only list that pairs every episode's season/episode number and original air date with US/UK/India availability checked on 13 October 2026, grouped by scare level, and by surfacing that many "Halloween" episodes first aired in November; grounded in SubhSandesh's 48.3% phone-open share.

Cannibalisation check: sibling SERPs (halloween-movies-to-watch, halloween-movie-trivia, family-halloween-movies, halloween-movies-on-netflix, halloween-movies-on-disney-plus) are film-led; this SERP is episode lists (slashfilm, Tudum episodes article, EW episodes gallery, Hulu episodes guide, People episodes). Shared URLs with any sibling: 0 found in their briefs' named URL sets (Tudum's episode article is a different URL from Netflix film pages). Overlap count recorded: 0–1.

## Verification of episodes (13 October 2026)
- TVmaze episode guide API (crowd-maintained) for every S/E and airdate; cross-checked where possible against primary pages:
  - Netflix India title pages (streamer): The Office S2 Ep5 "Halloween" 22 min; Community S2 Ep6 "Epidemiology" 21 min; Friends S8 Ep6 "The One with the Halloween Party" 22 min; Brooklyn Nine-Nine S1E6, S2E4, S3E5, S4E5 (21 min), S5E4 "HalloVeen" 22 min; Stranger Things S2 Ep2 "Chapter Two: Trick or Treat, Freak" 57 min.
  - BBC programme page b0bqn4g3: Inside No. 9 "Dead Line", 32 minutes, broadcasts Sun 28 Oct 2018 22:00 BBC Two and Fri 31 Oct 2025 21:35 BBC Three; available on iPlayer.
- Streaming availability by country (US/GB/IN) from JustWatch's public listings, 13 Oct 2026; India Netflix rows confirmed on Netflix's own pages. Peacock pages return "Unavailable in your region" from India; Hulu redirects to JioHotstar.
- Original networks (Fox for B99 S1, The WB for Buffy S2, Disney Channel for Gravity Falls S1) are from editor knowledge; TVmaze lists the show's last network (NBC, UPN, Disney XD). Flagged in structuralLimitations.

## Phase 3 — sources
1. BBC programme page, Inside No. 9 "Dead Line" — primary, broadcast date and runtime.
2. TVmaze, The Simpsons episode guide — Treehouse of Horror dates incl. XXXVII listed 25 Oct 2026.
3. Siles et al. 2025, Media and Communication (Cogitatio, CC BY, peer-reviewed): rewatching as "ontological comfort"; 40 users' one-month diaries + focus groups with 13. Abstract read; PDF available, full text not read.
4. Arian Namazi et al. 2026, Scientific Reports (Europe PMC PMC13447817): 65 children aged 5–7, high- vs low-fantasy TV, no significant effect on inhibitory control or visual attention. Abstract read.
Rejected: Zhan & Ding 2025 PRBM (Dove = Informa/Taylor & Francis, banned); "(Why) Do You Like Scary Movies?" (Frontiers, banned); Open Philosophy 2021 rewatching (abstract too general to carry a fact); Evolutionary Psychology 2024 humour/fear (SAGE, banned).
Search terms tried: rewatching familiar television comfort; sitcom viewing parasocial attachment; recreational fear horror enjoyment; television holiday episodes seasonal programming; children fright reactions frightening television; nostalgia media consumption comfort; repeated consumption familiar narratives; sitcom humor mood management; episode length attention.
