# Research brief: 90s halloween costumes (row 150)

- Slug: `90s-halloween-costumes` (Strapi check 2026-10-13: not taken)
- Absorbs: "90s costume ideas"
- Theme: costume. Plan weak score 4/10.
- Sibling model: b2 `80s-halloween-costumes` (read in full; none of its sources, looks, scrunchies, leg warmers, neon or bucket hats reused)

## Phase 0: first-party data

facts.md has no Halloween or costume data (BRIEF §3). Platform-wide lines used, verbatim:

- 48.4% of views are on a touch device (phone or tablet) — measured 2026-09-24
- Average views per created page: 11.1 — measured 2026-09-24
- 38.5% of creators password-protect their page before sharing it (2,000 of 5,199) — measured 2026-09-24

The first two sit in the first 150 words (framing a costume photo for a phone). `npm run facts` was not run.

## Phase 1: SERP (WebSearch, US index; lower confidence than Google)

Searches used: 2 in total. 1 for the SERP, 1 for a dated butterfly-clip news archive (it returned only later retrospectives such as coveteur, bravotv, timeout, bustle; none cited).

| # | Page | Date | Format | Where the answer sits | Data cited | Notes |
|---|---|---|---|---|---|---|
| 1 | romper.com, 15 last-minute 90s costumes | 26 Oct 2016 | 15 H2 characters (Arnold, Johnny Bravo…), retail item links with prices | After a 3-paragraph intro | None | Weak: old, affiliate shopping links |
| 2 | bustle.com, 90s costume ideas | 8 Oct 2021 | 3 looks (Dionne, Daria, Aaliyah), shoppable products ($325–795) | After an intro about 2021 | None | Weak: 3 ideas, dated to 2021 |
| 3 | coolmompicks.com, 90s costumes for kids | 26 Sep 2023 | 12 Etsy-bought kids' costumes | After an intro | None | Kids and shopping only |
| 4 | whowhatwear.co.uk, 90s-inspired costumes | Undated | 9-look gallery (Britney, Clueless, Wednesday, Spice Girl…) | First slide | None | Gallery, thin text |
| 5 | lulus.com blog | n/a | HTTP 403, judged from snippet | n/a | n/a | Retailer, competitor |

Also in the top 10: romper duplicate URL, aol.com syndication, whowhatwear.com slide, a 2018 bustle pop-star piece. Weak count in top 10: 4 (two pre-2019 listicles, the retailer blog, the syndicated copy). Gate 4 not triggered.

All five are competitors for this query: none cited or linked.

## Phase 2: gap

- Table stakes: named film/TV/band looks, "you probably own this already", Clueless/Spice Girls/Britney.
- Gap: no page groups looks by subculture, none prices each look, none gives a hair or makeup cue per look, and **none separates 90s from Y2K** or dates a single piece.
- Stale data: no page cites any data at all.
- Fan-out: easy closet looks; 90s vs Y2K; hair; makeup; group looks; cost; kids; band looks without merch; which look the crowd recognises.

Angle: wins by being the only post that groups 28 looks by subculture with three garments, a source, a price and a hair cue each, and dates the pieces as 90s or Y2K against two Met object records and Google Books print data, framed for the phone with the 48.4% touch-device share.

## Phase 3: sources (all fetched)

1. Hanson J, Frame J, Bai E, Mehl K, Jakubowski K, Belfi AM. Popular music and movies as autobiographical memory cues. *Memory & Cognition* (Springer, CC BY), online 8 Aug 2025. https://europepmc.org/article/PMC/PMC12957643. Full text read (JATS XML). N = 248 (120 music + 128 movies), US Prolific, about 20 per ten-year band 20–29 to 70–85; music cues showed a significantly more pronounced reminiscence bump than movie cues; a subset of songs and films was familiar across all ages. Mem Cognit used once elsewhere in b3 (halloween-party-captions, a different paper), so 2 posts for the journal.
2. The Met, object 86737, accession 1993.97: Dress, spring/summer 1993, Perry Ellis Sportswear Inc., designer Marc Jacobs, rayon and Lycra, gift of Perry Ellis International 1993.
3. The Met, object 80893, accession 1998.402.1a–d: Athletic ensemble, 1997, Tommy Hilfiger Corporation, nylon/cotton/plastic, gift of Tommy Hilfiger U.S.A. 1998.
   - Both Met pages returned HTTP 429. Records were read from the Met Collection API (`/public/collection/v1/objects/<id>`, search via `/v1.1/search` because `/v1/search` was retired 2026-10-01). The record does not use the word "grunge"; the post claims only date, designer and materials.
4. Google Books Ngram Viewer (English, case-insensitive, smoothing 0, 1985–2008), set A: grunge, Tamagotchi, Beanie Babies, body glitter, lip liner. Values from the ngrams/json endpoint.
5. Same, set B: low-rise jeans, velour tracksuit, trucker hat, frosted tips, cargo pants. Frosted tips never above 0.6 per billion words, so the post says it can't be dated this way. Velour tracksuit passes 1 only in 2005 (1.15).

books.google.com is cap-exempt in verify.config.json. metmuseum.org and the Mem Cognit paper are new to this batch.

Searched and rejected:
- Europe PMC: "retro fashion revival nostalgia consumers", "vintage clothing nostalgia generation", "nostalgia proneness generation Z retro consumption", "secondhand clothing thrift consumption motivation", "(nineties OR 1990s) AND fashion AND nostalgia", "reminiscence bump AND fashion", DOAJ "nostalgia AND fashion".
- Rejected: Sidhu 2025 PLOS ONE (banned by prompt); Wentura & Schuck 2025 (banned, used by movie-couple-costumes); Song 2024 and Harantová & Mazanec 2025 (Behavioral Sciences, MDPI, journal already in 5 b3 posts); Frontiers papers (banned); PLOS ONE secondhand-clothing papers (PLOS ONE in 12 b3 posts); Sci Rep (full).
- Smithsonian NMAH holds Tamagotchi and Beanie Baby records, but the Open Access API DEMO_KEY returned 429 and collections.si.edu / americanhistory.si.edu returned 403, so they are not cited.

## Brief claims checked

- The prompt suggested FIDM or Smithsonian as V&A alternatives: Smithsonian was blocked to automated fetching; The Met worked only through its API.
- "Hair/makeup cue (frosted tips…) — verify era with a dated source": frosted tips cannot be dated in print (max 0.6 per billion words, 1985–2008). Butterfly clips: no dated contemporary source found within the search budget (the Ngram phrase is ambiguous, with hardware uses before 1990), so the post gives butterfly clips as a cue without a date claim. Brown lip liner is dated only as "lip liner" in print (14.6 to 36.5, 1995–1997).

## Audit failures (2)

- At least one table column uses first-party data: no Halloween data exists.
- Swap test: Hanson 2025 could sit in the batch's `halloween movie trivia` row.
