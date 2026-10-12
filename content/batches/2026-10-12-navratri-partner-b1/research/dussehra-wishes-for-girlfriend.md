# Research brief: dussehra wishes for girlfriend

Slug `dussehra-wishes-for-girlfriend` · cluster bridge · body `en` with Hinglish/Devanagari and one Bengali line · absorbs "dussehra wishes for boyfriend", "romantic dussehra wishes", "dussehra wishes for love". Written 2026-10-12.

## Phase 0: first-party data

facts.md read directly (no `npm run facts`). It has no Dussehra, Navratri or /dandiya-partner data. Relevant lines used:

- "I love you" page (/love-gf) is #3 page type: 1,182 created, 22.7% of all pages; most-viewed template, 17,093 views, 29.7% of views. These are the romance numbers, used in the opening.
- Raksha Bandhan lead time (n=89): 49.4% built on the festival day. Labelled in the body as Raksha Bandhan, the nearest analogue, with the small sample stated.
- 48.3% phone opens, 38.5% password rate, 90.9% publish rate. Used in the table and the "wrong move" section.

Gate: 6 facts, 2 in the first 150 words. The gate is thin on Dussehra-specific relevance, because no festival segment exists.

## Phase 1: SERP (WebSearch 1 of 2, US-served)

Query: `dussehra wishes for girlfriend`. Corroborated by serps.md row 40 ("dussehra wishes for girlfriend boyfriend", 7 weak).

| # (US-served, WebSearch) | URL | Weak? | Words / structure | Direct answer | Data and date | Optimising for |
|---|---|---|---|---|---|---|
| 1 | swifdoo.com/templates/amp/dussehra-wishes | weak (title "Oct 2024", PDF-software upsell) | ~1,500; 6 H2 lists of 10 (anyone, friend, family, BF/GF, husband/wife, colleague) | none; intro then lists | none; dated Oct 2024 | "dussehra wishes" + download SwifDoo PDF |
| 2 | giftstoindia24x7.com/a/top-5-dussehra-gifts-for-girlfriend | weak (off-intent gift catalogue) | Luxe/Premium/Budget H2s, product carousels with ₹ prices | gifts, not wishes | prices; "Updated Sep 21, 2026" | gift sales to NRIs |
| 3 | swifdoo.com/templates/dussehra-wishes | weak (same content as #1) | same | same | same | same |
| 4 | eduyush.com/blogs/hindi/dusshera-wishes-hindi | weak ("2025" title, Hindi, store banner) | 150 wishes in 10 emoji-headed categories | none | "2025" stamped in wishes | Hindi head term |
| 5 | lutonhoo.oandg.co.uk/en/dussehra-wishes-in-marathi.html | weak (scraped mirror) | not fetched: DNS ENOTFOUND | n/a | n/a | n/a |
| 6 | lutonhoo.oandg.co.uk/en/happy-dussehra-wishes.html | weak (mirror) | not fetched: DNS ENOTFOUND | n/a | n/a | n/a |
| 7 | eduyush.com/en-us/... | weak (duplicate of #4) | | | | |
| 8 | giftstoindia24x7.com category | weak (category page) | | | | |
| 9 | imvoyager.com/happy-dussehra-wishes-quotes-greetings-images | not weak (generic, but on-intent) | 75 wishes; general and family; no partner section | after intro | none | head term "happy dussehra wishes" |

Weak count: 7 of the top 9 distinct results (8 of 9 if the swifdoo duplicate counts). Gate 4 passes.

## Phase 2: gap

- **Table stakes:** a list of copyable romantic lines; "victory of good over evil" framing; a BF/GF set.
- **The gap:** none of the pages gives regional timing (20 Oct North India vs 21 Oct Bengal/Mysuru), Bijoya etiquette for a Bengali partner, the end of the nine garba nights, a Ravan Dahan outing, first Dussehra or long distance. None says what not to joke about. Swifdoo's BF/GF lines ("our love conquers all challenges") are the exact interchangeable framing the post avoids. The imvoyager lines about troubles burning "as you light the bonfire of Ravana" and eduyush's "inner Ravan" lines are the reason the post does not use an "inner Ravan" frame.
- **Stale data:** swifdoo is dated Oct 2024 and eduyush 2025; neither carries data.
- **Fan-out sub-queries, mapped to H2s and FAQs:** when to send (FAQ 1, H3 timings); romantic but not cheesy (definition H2); Bijoya for a Bengali partner (H3 4, FAQ 3); boyfriend wishes (H2, FAQ 5); Ravan jokes (H2, FAQ 4); Hinglish (FAQ 6); invite to Ravan Dahan (H3 3, FAQ 8); first Dussehra (H3 5, FAQ 9); private vs public (wrong-move H2, FAQ 10); dandiya page fit (H2, FAQ 7).
- **Angle:** wins by being the only post that ties romantic Dussehra wishes to the day's real moments and regional timing, with a tone section backed by couples-humour research and SubhSandesh's 22.7% / 29.7% "I love you" figures.

## Phase 3: sources (all fetched with ctx_fetch_and_index)

1. Drik Panchang, Vijayadashami 2026, New Delhi (`&geoname-id=1261481`). Tue 20 Oct 2026; Bengal Vijayadashami Wed 21 Oct; it states the victory of Rama over Ravana and of Durga over Mahishasura. This is a date reference and cap-exempt.
2. Balzarini, Sharma & Muise 2025, *Behavioral Sciences* 15(1) (MDPI, CC BY), PMC11761567, full text read. It summarises Aron et al. 2000: couples given novel, arousing activities reported less boredom and more closeness and satisfaction. Its own VR studies (N=183, N=141 couples) gave mixed results, and the body says so. This is the peer-reviewed, open-access source. PMC13203665 (Aron & Tomlinson 2026) was read but is at its URL cap (2 posts).
3. Kalyan Karmakar, finelychopped.net, 16 Oct 2021. Bijoya is wished after the immersion; kolakuli; visits with tea, snacks and sweets. Now at URL cap 2 (sibling dussehra-wishes).
4. PsyPost (Eric W. Dolan), 8 May 2023, reporting Purol et al. in PSPB. 337 couples; less satisfied partners reported more aggressive humour from the other; aggressive humour slightly overestimated. The PSPB paper is Sage, so it was not read and not linked (publisher cap).

Considered and rejected:
- EJOP DiDonato & Jakubiak 2016: already used by garba-partner-vacancy-meaning, and avoided for the swap test.
- PMC9294438: Sage (JSPR), at the publisher cap.
- PMC8710473: Frontiers in Psychology, at the journal cap.
- PMC12221085: emoji study, used by navratri-wishes-for-love.
- uwo thesis: repository moved.
- MSU thesis: HTTP 403.

findpapers queries tried:
- couple rituals relationship satisfaction
- aggressive humor romantic relationship satisfaction
- capitalization sharing positive events romantic partner responsiveness
- teasing romantic partners hurt feelings
- self-expansion novel shared activities couples relationship quality
- Ramlila Ravana effigy Dussehra
- humor styles couples dyadic aggressive affiliative
- Ramleela performance Ramnagar Varanasi
- relationship turning points dating couples firsts

None returned an open-access study of festival greetings between partners.

WebSearch 2 of 2: "aggressive humor style romantic partner relationship satisfaction study open access full text". It produced the PsyPost lead.

## Brief claims checked

- The regional Dussehra dates (20 vs 21 Oct) match Drik (Bengal 21 Oct confirmed). Mysuru 21 Oct, Sharad Purnima 25 Oct and the 2027 dates are BRIEF-verified only.
- The prompt says /dandiya-partner "fits weakly (garba ends the night before Dussehra)". This is consistent with the BRIEF calendar (Navratri ends Mon 19 Oct). The post says so and points to Sharad Purnima (25 Oct) and Navratri 2027, with /love-gf and /date-invitation for Dussehra itself.
- No brief claim was found false.
