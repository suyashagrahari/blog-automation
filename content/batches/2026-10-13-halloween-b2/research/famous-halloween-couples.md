# Research brief: famous halloween couples (row 82)

Slug `famous-halloween-couples`. Absorbs "iconic couples to dress up as" and "couples to be for halloween". Theme: couple. PLAN weak score 7/10.

## Phase 0: first-party data
- No Halloween data exists in facts.md (BRIEF §3). Used three platform-wide lines from the 2026-09-24 block, verbatim:
  - 48.3% of shared pages are opened on a phone (27,725 of 57,456 views)
  - Average views per created page: 11.1
  - 38.5% of creators password-protect their page before sharing it (2,000 of 5,199)
- Why they bear on this keyword: a famous-couple costume is judged at thumbnail size on a phone as well as across a room. The first two numbers sit in the first 150 words.
- The template spec (`template-spec.md`) is the only source for /happy-halloween features.

## Phase 1: SERP
- **Tooling:** Firecrawl was disconnected. My first WebSearch call came back with "session limit" and returned no results. I measured the SERP once through DuckDuckGo's HTML endpoint, which serves a US index. That is 1 search used out of 2, plus the failed call.
- **Intent split (finding):** the results serve two intents. Half are celebrity-photo galleries ("stars dressed as couples"); the other half are lists of famous-couple costume ideas. Pages 1–5 are all from incumbent publishers.

| # | URL | Status | Words | Date | Structure | Answer position | Tables / FAQ schema | Optimising for |
|---|---|---|---|---|---|---|---|---|
| 1 | today.com/life/holidays/famous-couple-costumes-rcna36792 | 200 | ~3,500 | 2026-09-17 | 60+ H2s, each "Celebrity X and Y as Z" | none; a photo gallery | no / no | celebrity photos, "66 ideas" |
| 2 | people.com/most-unforgettable-celebrity-halloween-couples-costumes-11838019 | 403, judged from snippet | ? | ? | gallery of 36 | n/a | n/a | celebrity photos |
| 3 | theknot.com/content/celebrity-halloween-costumes | 200 | ~4,400 | 2025-09-11 | 50 numbered H2s of celebrity couples | none | no / no | celebrity photos |
| 4 | marieclaire.com/.../best-celebrity-couple-halloween-costumes | 200 | ~4,000 | 2022-10-26 (stale) | 78 H2s of celebrities | none | no / no | celebrity photos |
| 5 | cosmopolitan.com/.../celebrity-couple-halloween-costumes | 200 | ~1,200 | 2025-10-13 | 20 H2s, "Name and Name, year" | none | no / no | celebrity photos |
| 6 | holidayhuddle.com/couple-costumes | 403 | — | — | "41 couple costumes from movies" | — | — | ideas list (weak) |
| 7 | halloweencostumes.com couples guide | 403 | — | — | retailer guide | — | — | retailer, competitor |
| 8 | popsugar.com/.../diy-movie-couples-costumes | 200 | ~1,600 | 2017-08-25 (stale) | ~16 H2 movie couples | none | no / no | DIY movie couples (weak, stale) |
| 9 | herstylecode.com celebrity couple costume ideas | 200 | ~1,650 | 2024-10-16 | 23 H3s of celebrities, plus an FAQ | none | no / FAQ heading | celebrity (weak) |
| 10 | buzzfeed.com celeb couples dressed as celeb couples | 406 | — | old | — | — | — | weak |

- **Weak count in the top 10: about 4** (holidayhuddle, popsugar from 2017, herstylecode, the old buzzfeed post). PLAN's figure was 7/10. Gate 4 passes because the count is above 0.
- The keyword is not in `serps.md`, so there was nothing to corroborate against.
- **Confidence: medium-low.** This is one engine on a US index.

## Phase 2: gap
- **Table stakes:** named film and TV couples, Sonny and Cher, Morticia and Gomez, Danny and Sandy, Barbie and Ken, Shrek and Fiona, Cleopatra and Mark Antony.
- **Gap:** none of the pages scores recognisability, gives a cost, says whether any genders can play the roles, groups couples by source, or says which characters are public domain. None explains how to make a pair readable at a distance, and none uses a table, FAQ schema or research.
- **Stale data:** marieclaire (2022) and popsugar (2017).
- **Fan-out:** most famous couples to dress up as; cheap famous couple costumes; costumes for same-sex or non-binary couples; historical couples; spooky famous couples; whether Mickey and Minnie or the Addams Family are public domain; how to make a costume recognisable; a partner who will not dress up; sending the photo.
- **Angle:** wins by being the only post that scores 30 famous couples for recognisability, with two props per person, an estimated cost and an any-gender note. It backs the readability advice with caricature research, flags which pairs are actually public domain, and uses the 48.3% phone-open share to frame the couple photo for a small screen.
- The post deliberately does not serve the celebrity-gallery intent (photos of stars in costume). That needs images, and this post uses none.

## Sibling exclusion (no pair repeated)
- I checked these and excluded every pair they use: Batch 1 `halloween-fancy-dress-for-couples` (Jekyll/Hyde, Dracula/Mina, Henry VIII/Anne Boleyn, Mary Shelley/creature, Holmes/Hound and others), `halloween-costumes-for-best-friends` (Holmes/Watson, Dracula/Van Helsing, Alice/White Rabbit…), `halloween-for-boyfriend-and-girlfriend` (ghost/ghost hunter, black cat/witch…), `anime-couple-costumes` (all anime pairs), and `trio-halloween-costumes`.
- From Batch 2 I checked `funny-halloween-costumes`, `80s-halloween-costumes` (solo Beetlejuice and Marty), `unique-halloween-costumes` and `halloween-couple-outfit-ideas`, which names none of my 30.
- `trio` uses Dr Frankenstein, the Bride and the Creature as a trio. My pair, the Monster and his Bride, comes from the 1935 film and is a pair, not that trio.
- A 5-gram overlap check against both batches found only template-feature boilerplate and generic phrasing. I reworded the opener and several FAQs anyway. The post offers no copyable lines.

## Phase 3: sources (all fetched)
1. Li, Wang & Tan, *Behavioral Sciences* (MDPI), 18 May 2026, PMC13203613. Scoping review of 59 studies: parasocial relationships (PSR) were the most studied construct (n=42), and perceived familiarity and imagined intimacy are key features. CC BY. **I read the abstract only.**
2. Lane et al., *Scientific Reports*, 12 Oct 2018, PMC6185956. Tested 19 AMD eyes at caricature strengths of 0, 20, 40 and 60%. All 9 mildly affected eyes improved. CC BY. **Abstract only.**
3. McKone et al., *PLOS ONE*, 4 Oct 2018, PMC6171855. Caricatures improved identity discrimination under simulated blur and under prosthetic-vision simulation. CC BY. **Abstract only.**
4. Duke CSPD, Public Domain Day 2024: Steamboat Willie, with Mickey and Minnie, entered the US public domain. I read the page.
5. Duke CSPD, Public Domain Day 2025: the original Popeye (Thimble Theatre, 1929) entered the US public domain. I read the page.
6. NobelPrize.org, Physics 1903 summary: the laureates were Becquerel, Pierre Curie and Marie Curie. I read the page.
- Facts I verified but do not cite (Wikipedia, whose domain is at cap 3): Bonnie and Clyde both died on 23 May 1934. Morticia was named for a 1962 doll line and Gomez for the 1964 TV series, and the cartoons date from 1938. "I Got You Babe" came out in 1965. Priscilla married Elvis in 1967. The bed-ins were in 1969. Barbenheimer is dated 21 July 2023. The Left Shark halftime show was on 1 February 2015. Joséphine was empress from 1804. *The Odd Couple* premiered in 1965 and got a female version in 1985. Cheems is Balltze.
- Avoided Taylor & Francis, SAGE, Elsevier, arXiv and Frontiers. I skipped the BMC Psychology anime-parasocial review because it is CC BY-NC-ND and its subject is anime, which this post excludes.
- capcheck after writing: web.law.duke.edu is now in 2 posts (halloween-movie-quotes and this one). No URL is over its cap.

## Brief or prompt claims found false
- The prompt lists "Gomez & Morticia from Charles Addams's cartoons" under **public-domain** classic literature. The cartoons are from 1938 (The New Yorker) and are **still in copyright**: US works from 1938 enter the public domain in 2034, and Amazon MGM holds the current rights. The post puts them under TV and says so.
- The prompt lists "Frankenstein's Monster & his Bride" as public-domain literature. In Shelley's 1818 novel the female creature is destroyed before she lives. The Bride as a character comes from the 1935 Universal film, so the post puts her under film and tells readers to build their own version, not copy the studio makeup.
- PLAN says weak 7/10. I measured about 4/10. The other pages are mostly entrenched celebrity galleries.
- The prompt asked for a "source · couple · recognisability · est. cost" table. BRIEF §9 caps tables at 3–5 rows, so the table groups the couples into 5 source rows, each with its easiest pair, the average score and the cost range. The per-couple values are in the list.

## structuredData note
The Wikimedia API rate-limited this session ("too many requests"). The about/mentions sameAs pairs are reused from sibling posts that verified them, and the audit records this as a failure.
