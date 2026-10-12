# Research brief — garba partner captions for instagram

Batch `2026-10-12-navratri-partner-b1` · slug `garba-partner-captions-for-instagram` · bodyLanguage `en` · written 2026-10-12

Absorbs: captions for garba partner; best / short garba partner captions for instagram; garba partner captions for instagram in english.

## Sibling split (no cannibalisation)

| Sibling | Owns | This page |
|---|---|---|
| garba-captions-for-instagram | solo / outfit / generic garba captions | only captions ABOUT the partner |
| garba-night-captions-for-couples | the couple's night out, couple framing | partner as the subject, including non-couples (crush, best friend) |
| garba-partner-captions-with-friends | squad / group | one best friend as garba buddy only (group 3), never the squad |
| garba-partner-captions-in-gujarati / -in-hindi | native-script captions | English only |
| garba-partner-quotes | quotes, longer lines | captions sized for post types |
| dandiya-partner-captions-for-instagram | dandiya (paired stick dance) | garba circle framing; dandiya named only to separate the two senses |

## Phase 0 — first-party data

`npm run facts` NOT run (BRIEF §3). Read `content/facts.md` (2026-09-24 vintage). No Navratri or /dandiya-partner usage data exists; none stated or implied.

Used (verbatim in `factsUsed`):
- 38.5% password-protect rate — bears directly on "should I tag / post publicly" (2 places: intro, table).
- Raksha Bandhan 2026 lead time n=89 (49.4% on the day, median 0 days) — labelled in body as Raksha Bandhan, the nearest analogue, not Navratri; small n disclosed.
- 48.3% phone share — used in the "wrong choice" section (laptop-only recipients), where it genuinely bears.

Template-spec facts (first-hand, not counted to the 3): nine lines, six photos, five-tries No→Yes, 1080×1920 Dandiya Pass with "Partner Confirmed" stamp, garba-buddy question, email on first yes, optional password, English UI.

## Phase 1 — SERP (1 WebSearch call, US-served (WebSearch))

Query: `garba partner captions for instagram`. 9 results returned.

| # (US-served) | URL | Weak? | Why |
|---|---|---|---|
| 1 | flick.social/captions/garba-look-captions-for-instagram | weak | outfit captions, no partner section; templated |
| 2 | cmc.imexhs.com/tag/garba | weak | scraped mirror |
| 3 | nestasia.in/blogs/news/trending-catchy-garba-captions-for-instagram | weak | generic garba captions, off-intent (403 to fetch) |
| 4 | training-new.klingspor.com/?p=22236 | weak | scraped mirror |
| 5 | erpstaging.fha.gov.ng/?p=29861 | weak | scraped mirror |
| 6 | eduyush.com/.../navratri-captions-for-instagram | not weak | 4,568 words, H1 now "2026", "Last updated September 2026", FAQPage schema, 15-line couples block |
| 7 | flick.social/captions/navratri-captions-for-instagram | weak | generic Navratri; carries "#Navratri2022" |
| 8 | flick.social/captions/short-navratri-captions-for-instagram | weak | generic; literal "{target-keyword}" template placeholders left in copy |
| 9 | training-new.klingspor.com/tag/navratri | weak | scraped mirror |

**Weak count: 8 of 9.** Gate 4 passes. Corroborated by `serps.md`: "dandiya partner quotes captions instagram" 7/10 weak, "garba night captions for couples" 8/10 weak.

### Top-5 analysis (fetched with ctx_fetch_and_index / sandbox fetch)

| Page | Words | Headings | Direct answer | Data cited | Format | Partner content |
|---|---|---|---|---|---|---|
| flick garba-look | ~1,230 | H1 + 7 H2 (best/short/funny/cute/engaging/lyrics/quotes) | none, generic intro | none | copy buttons, AI generator upsell, no FAQ | 0 partner section |
| flick navratri | ~1,360 | same 7-H2 template | none | none | same | 0 |
| flick short navratri | ~1,330 | same template | none | none | same; unfilled `{target-keyword}` | 0 |
| eduyush | ~4,570 | 25+ H2 by post type, FAQ (6 Qs) | bolded answer sentence first | 2026 date calendar (Delhi panchang) | jump-links, FAQPage | one 15-line "Couples" block; 8 dandiya lines |
| nestasia | n/a (403) | — | — | — | — | generic garba per snippet |

## Phase 2 — gap

- **Table stakes:** short / funny / romantic groups; reel captions; hashtags/post-type guidance.
- **Gap:** none is about the partner as subject; none separates crush vs established partner vs best friend; none says when to tag or keep private; none distinguishes garba-circle partner from dandiya pair; none offers a private alternative to a public post.
- **Stale:** flick carries #Navratri2022; eduyush is current (2026).
- **Fan-out:** captions for boyfriend/girlfriend; crush; best friend; funny; short; reel vs story; should I tag; garba vs dandiya partner; when is Navratri; how to ask someone to be a garba partner.

**Angle:** wins by being the only page whose captions are about the partner rather than the outfit, sorted by relationship and post type, with a tag-or-don't rule grounded in a 90-interview study and SubhSandesh's 38.5% password-protect rate.

## Phase 3 — sources (0 WebSearch; findpapers.mjs + OpenAlex)

Queries tried: "romantic relationship visibility social media posting partner photos", "Instagram caption self-presentation audience" (mostly predatory/undergrad venues, rejected), "couple selfie dyadic profile picture relationship satisfaction" (off-topic), "garba Navratri Gujarat dance youth".

| Source | Read | Claim used | Published |
|---|---|---|---|
| Lucchesi & Lobinger, Visual Communication — PMC12588420 | full text, CC BY 4.0 | 90 interviews, 21 romantic + 9 friend dyads, Switzerland; conflicts from non-negotiated sharing and exclusion from posts; "looked ten times better" quote | 2024-03-08 |
| Bouchard, Harrigan & Tobin, JSPR 38(7) — doi 10.1177/02654075211006788 | abstract only (Sage 403) | 139 couples 17–30; desired visibility linked to own/partner posting | 2021-03-30 |
| Ito, Yang & Li, Computers in Human Behavior 120 — doi 10.1016/j.chb.2021.106748 | abstract only | imagined dyadic photo → expected commitment → satisfaction | 2021-02-15 |
| Chavda, Dance Chronicle 42(1) — doi 10.1080/01472526.2018.1563468 | abstract only (paywalled) | pre/post-1990s garba; choreographic revisions influenced by selfies, commercialisation, Bollywoodization | 2019-01-02 |
| UNESCO ICH, Garba of Gujarat | full page | inscribed 2023 (18.COM); counter-clockwise circle round a lit pot, clapping | no date published (omitted) |

Wikipedia: 0 body links; sameAs verified via API (Garba (dance) Q882985, Navaratri Q10269, Dandiya Raas Q3629880, Instagram Q209330). capcheck: no caps hit; 3 doi.org URLs resolve to Sage, Elsevier, Taylor & Francis.

## structuralLimitations / brief claims checked

- **BRIEF §4 "eduyush.com (titles still say 2025)" is false for this page.** The SERP title shows "Best Quotes 2025", but the live page H1 reads "200+ Navratri Captions for Instagram 2026" and states "Last updated: September 2026" with the 2026 calendar. Eduyush is a fresh incumbent here, not a stale one.
- Prompt claim "no partner-specific page": confirmed for the US-served top 9.
- Dates printed (11–19 Oct 2026, Dussehra 20 Oct, Sharad Purnima garba 25 Oct, 2027: 30 Sep–8 Oct / 9 Oct) are taken from BRIEF §1. My own drikpanchang fetches returned 404 / no parseable dates, so I did not independently re-verify and removed the drikpanchang link from the body.
- Positions are US-served only; India-served SERP not measured.
