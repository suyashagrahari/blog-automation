# Research brief — halloween-movies-on-disney-plus (rank 227; absorbs "disney plus halloween movies")

- Written 2026-10-13. Phase 0: facts.md read (no `npm run facts`). Facts used, platform-wide, measured 2026-09-24: 48.4% touch-device views, 11.1 views per page, 38.5% password rate. No Halloween usage data exists; none implied.
- Not a head term (5 words), so no long-tail swap needed.

## Phase 1 — SERP (WebSearch, US index). Searches used: 1 (Firecrawl `map` used afterwards only to find disneyplus.com entity URLs; it is a site index, not a SERP)

| # | URL | Weak? | Date of data | Shape | Direct answer | Notes |
|---|---|---|---|---|---|---|
| 1 | jira.phpfox.com/p/halloween-movies-on-disney-plus | spam (hijacked subdomain) | — | — | — | not analysed |
| 2 | caskstrength.bevvy.co/?p=11649 | spam (hijacked) | — | — | — | not analysed |
| 3 | romper.com/entertainment/halloween-movies-disney-plus | no | updated 20 Feb 2024 (orig. Sep 2021) | 40 numbered H2s, TV ratings per film, family framing | after a 4-paragraph intro | no region, no date-stamp on availability |
| 4 | techradar.com …-to-watch-in-2021 | stale | 2021 | films + shows list | buried under membership chrome | 5 years old |
| 5 | refinery29.com …/2020/10/… | stale | 15 Oct 2020 | 13-slide list, "not-so-spooky" angle | 2nd paragraph | says no straight horror on Disney+ (US, 2020) |
| 6 | bustle.com …halloween-movies-stream-disney-plus | weak (branded affiliate) | 30 Sep 2021 | 5–6 H2s, affiliate "sign up" links | none | links en-gb Disney+ pages but never says region |
| 7 | thewrap.com/best-halloween-movies-on-disney-plus | no | 2021 images | long critic blurbs per H2 | intro paragraph | US-only, undated availability |
| 8 | dailydot.com/?p=1132949 | weak (snippet only) | — | — | — | not fetched |
| 9 | dadsguidetowdw.com/?p=42697 | weak (fan blog) | — | — | — | not fetched |
| 10 | dev1.mobupps.com/?p=11649 | spam (hijacked) | — | — | — | not analysed |

Weak count in top 10: 5 (3 hijacked spam, bustle affiliate, dadsguide) — Gate 4 passes. Sibling overlap: b3 halloween-movies-on-netflix's top 10 is Netflix-specific; 0 shared URLs (max overlap with any named sibling: 0).

## Phase 2 — Gap
- Table stakes: Hocus Pocus, Halloweentown, Nightmare Before Christmas, Haunted Mansion, Muppets Haunted Mansion.
- Gap: none of the five says which country it checked or when; none separates Disney+ from Hulu in the US; none covers Canada/UK/AU/India; none gives BBFC ratings; ratings where present are TV ratings from the competitor, not board records.
- Stale: 4 of 5 are 2020–2021.
- Fan-out: is X on Disney+ (UK)? why can't I find X? R-rated? India? shortest? what's new this October? rating differences.
- Angle: see `batchMeta.angle`.

## Phase 3 — Verification log (13 Oct 2026)
- Disney+ US guide `explore/articles/best-halloween-movies` (Firecrawl, US location): revised 9 Oct 2026; 14 picks, 8 Disney+, 6 Hulu; Hulu footnote.
- press.disneyplus.com October 2026 schedule (direct fetch): dates for Coven Academy, Vampirina S2, Phineas and Ferb/Big City Greens/Kiff Halloween episodes, Under Wraps (1997) 9 Oct; Hulu 1 Oct: Barbarian, Ghostbusters, Hotel Transylvania.
- Disney+ title pages (Firecrawl with location): US — Hocus Pocus 1h36m PG; Something Wicked 1h35m; Under Wraps 1997; Muppets Haunted Mansion 54m TV-PG. Haunted Mansion 2023 (2h 5m) and Werewolf by Night (54m) runtimes from Disney+ US page index entries (firecrawl map). UK (en-gb, Europe/London) — Halloweentown High 1h23m, 6+, rail with Hocus Pocus, Halloweentown I/II/Return, Twitches, Girl vs. Monster. CA — Barbarian 1h43m. Later "GB" requests were served the en-de storefront (Hocus Pocus 12+, Werewolf by Night 16+) — reported as "a European Disney+ page". AU request served the US page — unconfirmed.
- India: direct fetch from an Indian connection — every disneyplus.com URL redirects to https://www.hotstar.com/in (JioHotstar). Brief said "Disney+ is via JioHotstar; verify": confirmed at the redirect level only.
- MPA (filmratings.com server-rendered search): Hocus Pocus PG (1993, cert 32530, scary sequences and language), Hocus Pocus 2 PG, Haunted Mansion PG-13, The Haunted Mansion PG, Something Wicked PG, Frankenweenie PG, Nightmare PG, Edward Scissorhands PG-13, Barbarian R, Longlegs R.
- BBFC (release pages): Hocus Pocus PG (mild scary scenes, violence, sex references); Haunted Mansion 2023 12A cinema 10/07/2023 moderate horror; Something Wicked PG 29/04/1983; Edward Scissorhands 12 moderate violence; Barbarian 18 strong bloody violence, gore, horror 18/10/2022; Nightmare PG; Frankenweenie PG.
- Scholarly: Siles et al. 2025, Media and Communication 13 (Cogitatio, CC BY 4.0, DOAJ) — abstract read on the publisher page: 40 diarists, 13 focus-group participants, "ontological comfort".
- Rejected: PMC12212089 (Dove Press = Taylor & Francis imprint, banned); PMC11155347 and PMC7734554 (SAGE, banned); Sci Rep (megajournal). No en.wikipedia body links (FULL).
- Search terms tried in findpapers: "streaming video catalogue geoblocking country availability" (only German-language law books, not OA), "recreational fear horror haunted attraction", "nostalgia rewatching familiar films comfort", "film age rating classification parents".

## Internal links
/happy-halloween, /happy-halloween-premium (both mandatory), /date-invitation (oneOfLinks: asking someone to the movie night itself).
