# Research brief: halloween wedding ideas (row 174)

- **Keyword:** halloween wedding ideas (absorbs "halloween themed wedding")
- **Slug:** `halloween-wedding-ideas` (Strapi check 2026-10-13: not taken)
- **Theme:** couple · plan weak 7/10 · **measured weak 3 of 9**
- **Category:** festive-beats · **templates:** /happy-halloween, /christian-wedding (+ /date-invitation in body)

## Phase 0: first-party data

No Halloween or wedding-theme data exists in `content/facts.md` (brief §3). The post uses three lines, verbatim:

- 48.3% of shared pages are opened on a phone (27,725 of 57,456 views), measured 2026-09-24. Used for designing the digital invite for a phone.
- Occasion-dated pages (every festival plus every wedding type) are 144 of 3,894 pages, 3.7%, measured 2026-09-09. Used as an honest scope limit: we are not a wedding planner.
- 38.5% of creators password-protect their page (2,000 of 5,199), measured 2026-09-24. Used for the private-photos note.

The template features come from `template-spec.md`. /christian-wedding is described only from its own FAQPage and HowTo JSON-LD, fetched 2026-10-13.

## Phase 1: SERP, WebSearch (US index), 1 search

| # | URL | Type | Fetched? | Shape | Date | Direct answer | Data cited | Optimising for |
|---|---|---|---|---|---|---|---|---|
| 1 | thebudgetsavvybride.com/halloween-wedding-ideas | Wedding budget blog | Yes | "40 Best… on a Budget": an affiliate product roundup of dresses, spider-web veil, cakes, toppers and guest book, with a short guest-attire section | Updated 2024-01-15 | Intro after an affiliate notice | None (prices of products) | Affiliate clicks |
| 2 | weddingwire.ca/…awesome-halloween-wedding-ideas--c989 | Wedding platform (competitor) | 403, snippet only | Gallery: historic venues, candlelit altars with skulls, crows, violin or harp music, trick-or-treat candy | ? | n/a | n/a | Vendor directory |
| 3 | greenvelope.com/blog/halloween-wedding-ideas | Digital invitation builder (competitor) | Yes | 13 ideas: engagement shoot, invitations (product CTA), venues, fall flowers (mums, asters, dahlias, anemones) and more | Updated 2021-07-22 | No, intro then a CTA | None | Invitation sales |
| 4 | fiftyflowers.com/blogs/inspiration/halloween-wedding-ideas | Flower retailer | Yes | "15+ ideas" from a real masquerade wedding: old theatre, period attire, vintage car, masks… | 2022-10-03 | No | None | Flower sales |
| 5 | theknot.com/content/halloween-wedding-ideas | Wedding platform (competitor) | 403, snippet only | Palette and décor gallery (black and orange, purple, copper) | ? | n/a | n/a | Vendor directory |
| 6–9 | weddingshoppeinc.com (weak), weddingwire.com, wedding-venues.co.uk (weak), thebudgetsavvybride.com/?p=214154 (duplicate) | | Not fetched | | | | | |

**Weak results:** 3 of 9 (weddingshoppeinc, wedding-venues.co.uk, and thebudgetsavvybride counted once). That is below the plan's 7/10, but it does not trigger the Gate 4 abort. Never cited: theknot, weddingwire, greenvelope, fiftyflowers, budgetsavvybride, and also Brides, Martha Stewart Weddings and Zola, per the prompt.

## Phase 2: Gap

- **Table stakes:** black or burgundy gowns, veils, autumn and dark flowers, candles, cake, venues with atmosphere, guest attire.
- **Gap that none of the 5 cover:**
  - grouping by theme intensity
  - the weekday of 31 October (Sat 2026, Sun 2027) and what follows it (All Saints' Day 1 Nov, Día de los Muertos 1–2 Nov, Bonfire Night 5 Nov)
  - guests whose children trick-or-treat that night
  - venue open-flame rules and LED candles
  - respecting Día de los Muertos instead of using it as décor (budgetsavvy shows a sugar-skull cake topper)
  - the southern-hemisphere spring
  - costumes as optional, with invite wording
- **Stale data:** none of them cite data. The latest update is Jan 2024 and Greenvelope dates from 2021.
- **Fan-out queries:**
  - what is a Halloween wedding
  - Halloween wedding dress or black wedding dress
  - should guests wear costumes, and how to word the invite
  - October wedding flowers
  - Halloween wedding cake
  - is Halloween a bad wedding date / what day it falls on
  - candles at the venue
  - Day of the Dead wedding
  - is it more expensive (no source found, so the post says to ask venues)
- **Angle:** wins by being the only post that sorts the ideas into three intensities across eight elements and answers the practical calendar, kids, fire-rule and Día de los Muertos questions.

## Phase 3: Sources (all fetched 2026-10-13)

| Source | Claim used | Subject test | Swap test | Notes |
|---|---|---|---|---|
| Mäder, Open Research Europe 2023 (v2 2024), [Europe PMC PMC11831601](https://europepmc.org/article/PMC/PMC11831601) | 27 couples (54 people) in DE, IT and CH; photos are a memento of the ritual and reach those unable to attend | Pass (weddings) | Pass | Peer-reviewed (open review), CC BY, full text read via the EBI XML |
| [UMass Extension "Fall Flowers"](https://www.umass.edu/agriculture-food-environment/home-lawn-garden/fact-sheets/fall-flowers) | Chrysanthemums star in the fall colour show, alongside asters; flowering kale and ornamental grasses add texture | Pass (season flowers) | Pass | Updated 2017-12-12; New England gardening guidance, not florist supply data |
| [London Fire Brigade candles](https://www.london-fire.gov.uk/safety/the-home/candles/) | Flameless LED is much safer and fine outdoors; Halloween raises fire risk; keep decorations from flames | Pass | **Fail**: already used by b4 porch-decorations | Undated |
| [UNESCO ICH, Día de los Muertos](https://ich.unesco.org/en/RL/indigenous-festivity-dedicated-to-the-dead-00054) | Inscribed 2008; return of deceased relatives; end of Oct to early Nov; petals, candles and offerings | Pass | **Fail**: already used by b4 proposal-ideas | unesco.org is cap-exempt; the URL is now at 2 of 2 |

Rejected:
- **Kabátek & Ribar 2018** (special wedding dates and divorce): closed access, and Springer, SSRN and Minerva all returned bot walls. Not worked around.
- **National Marriage Project "Before I Do" PDF**: 404.
- **NFPA and USFA candle pages**: JavaScript-only or 404.
- **SARE dahlia PDF**: unparseable.
- **Heliyon Chinese weddings**: Elsevier, banned.

findpapers queries tried:
- "wedding ritual ceremony meaning couples"
- "wedding guests experience celebration"
- "personalized wedding ceremony"
- "wedding costs marital duration"
- "dahlia cut flower season"
- "special wedding date divorce risk"
- "wedding attendance guests marital quality"

Capcheck after writing: no banned URLs. The LFB and UNESCO URLs are each at 2 posts, which is within the cap.

## Calendar fact-check (not cited)

| Date | 2026 | 2027 |
|---|---|---|
| 31 Oct | Saturday | Sunday |
| 1 Nov | Sunday | Monday |
| 5 Nov | Thursday | Friday |

Computed and consistent with brief §1.
