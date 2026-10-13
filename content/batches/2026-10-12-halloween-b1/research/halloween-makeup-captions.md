# Research brief: halloween makeup captions (row 41)

- Keyword: `halloween makeup captions` (absorbs `halloween face quotes`), slug `halloween-makeup-captions`, theme captions, plan archetype weak 4/10.
- Date: 2026-10-12. Slug checked free in Strapi (0 matches).

## Phase 0: first-party data

facts.md was read, not regenerated (BRIEF §3). There is no Halloween or caption data. Three platform-wide lines were used:

- 48.3% phone-open share and 11.1 views per page, in the first 150 words, framed as the reason short captions matter on small screens.
- 38.5% password-protect rate, in the section on sending the look privately to one person.

All three are platform-wide, and the post presents them that way. The template spec (/happy-halloween, /happy-halloween-premium) gave the product facts.

## Phase 1: SERP

Firecrawl is disconnected, so I used **WebSearch: 1 search** (US-served index, lower confidence). I fetched the top 5 with a sandboxed fetch.

| # | URL | Words (approx., page text) | Dated | Structure | Direct answer | Safety / calavera / formats / table |
|---|---|---|---|---|---|---|
| 1 | elitedaily.com/p/50-clever-captions-for-halloween-makeup… | ~980 | pub 2018-09-11, mod 2021-10-12 | H1 + one undivided list | List immediately | none / none / none / none |
| 2 | romper.com/life/halloween-captions | ~890 | 2021-10-04 | 5 H2 by theme (puns, classic, pumpkin, couples, movies) | List immediately | none / none / none / none |
| 3 | growthscribe.com/halloween-captions/ | ~2,040 | 2026-05-02 | 10 H2 by theme incl. song lyrics, movies | Intro, then lists | none / none / none / none |
| 4 | onlypult.com/blog/halloween-instagram-captions | ~2,750 | 2024-02-13 | 11 H2 by theme incl. selfies, costumes, FAQ | Intro, then lists | none / none / none / none |
| 5 | perfectcorp.com/…/halloween-instagram-captions | ~1,400 | 2025-10-23, mod 2026-08-01 | AI-app funnel, how-to steps, FAQ | After app pitch | none / none / none / none |

The rest of the top 10 was origin-exchange.autodesk.com (garbled spun page), elitedaily thirst-trap captions (off-topic), aol.com syndicated list, and a CUNY OpenLab PDF (irrelevant). **Weak count in the top 10: 5** (autodesk spam, growthscribe, onlypult, perfectcorp, CUNY PDF). Gate 4 passes. serps.md has only the related `easy halloween makeup ideas` (beauty majors), which is a different intent.

## Phase 2: gap

- **Table stakes:** themed caption lists, puns, short one-liners, a selfie section.
- **Gap:** only Elite Daily is makeup-specific, and it is undivided and dated 2018/2021. None of the five:
  - groups captions by makeup look (skull, witch, vampire, SFX, cute, clown, last-minute, fail)
  - writes captions by format (before/after carousel, tutorial Reel, GRWM)
  - mentions face-paint skin safety or patch testing
  - mentions Día de los Muertos or calavera makeup
  - has a comparison table
- **Stale:** Elite Daily (2018) and Romper (2021).
- **Lyrics/film lines:** growthscribe and onlypult publish song-lyric and movie captions. We give original lines plus public-domain quotes only.
- **Fan-out:** makeup vs costume caption, captions by look, by format, length, face quotes, Catrina respect, crediting artists, craft paint vs face paint, skin reaction steps, sending privately.
- **Angle:** see `batchMeta.angle`.

## Phase 3: sources (all fetched and read)

1. **AAD**, "How to test skin care products at home". Undated except "Last updated 8/10/21". It gives the 7–10 day, twice-daily test, the site (underside of arm or elbow bend), and the reaction steps. aad.org has not been used by any sibling.
2. **Salles et al. 2022**, IJERPH (MDPI, CC BY), PMC9819701, read in full via Europe PMC. It tested 95 face-paint and pancake samples for 12 elements. Estimated cancer risk for children was higher through ingestion. Peer-reviewed and open access.
3. **Jones & Kramer 2016**, PLOS ONE (CC BY), PMC5058481. Abstract and methods read. It rated 33 YouTube before/after professional makeovers; identity still outweighed cosmetics. Peer-reviewed and open access.
4. **Gaceta UNAM 2025-11-06**, Catrinas en Ingeniería 4.0, read in full via the WP API. It traces Posada's Calavera Garbancera to Rivera's 1947 mural naming of La Catrina, and lists 15 makeup artists.

**Rejected:**
- PMC12262999: industrial paint contamination, not cosmetics.
- Evolutionary Psychology makeup paper: SAGE, which is banned.

**Brief claim found false or unusable:** gob.mx/inpi returns a "Challenge Validation" bot page to every fetch, so it cannot be verified without Firecrawl. I used Gaceta UNAM instead, which is also a Mexican public institution. Nothing from fda.gov, frontiersin, sciencedirect, ich.unesco, gov.uk, nrf, doi.org or any capped paper was used. capcheck shows none of my four sources at cap.

## Notes

- 58 captions: 46 by look and 12 by format. 53 run under 60 characters. I checked every line for an exact match against all sibling blog files and found no reuse. No sibling uses the Macbeth or Poe quote.
- The only audit failure is that no table column uses first-party data. This is structural, because no Halloween or per-look data exists.
