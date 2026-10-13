# Research brief: easy halloween costumes (row 66)

- Slug: `easy-halloween-costumes` · theme: costume · absorbs: "halloween costumes easy" · PLAN weak = 4, band 10,000+/mo
- Head-term warning (Phase 1): "easy halloween costumes" is a 3-word head term held by magazines and costume retailers. Long-tail alternatives this page also serves: "easy halloween costumes you can make in 15 minutes", "last minute halloween costumes from your closet", "cheap halloween costumes from the dollar store".

## Phase 0: first-party data
facts.md has no Halloween or costume data (BRIEF §3). Used, verbatim:
1. Raksha Bandhan 2026 lead time, n = 89: 49.4% built on the festival day, median lead time 0 days (labelled as the nearest festival analogue). In first 150 words.
2. 48.3% of shared-page views on a phone (27,725 of 57,456). In first 150 words; used for "costume must work as a thumbnail-sized photo".
3. 90.9% of started pages published (4,724 of 5,199). Card section.
Template spec (/happy-halloween, /happy-halloween-premium) used for product claims only.

## Phase 1: SERP (WebSearch, 1 of 2 searches used; Firecrawl disconnected)
Query: `easy halloween costumes` (US-served WebSearch index, not Google).

| # | URL | Type | Fetch | Structure / answer position | Data & dates | Optimising for |
|---|---|---|---|---|---|---|
| 1 | halloweencostumes.com.au/easy-halloween-costumes.html (x2, one with ?a= param) | Retailer category | HTTP 403, snippet only | Product grid | Prices per product | Transactional, AU |
| 2 | couponcabin.com/blog/easy-halloween-costume-ideas/ | Coupon-site listicle | HTTP 403, snippet only | Snippet: bachelorette, "cereal killer", Hagrid, cat, candy, ghost, baby costumes | none visible | Affiliate clicks |
| 3 | twinkl.com/blog/easy-halloween-costumes-and-ideas | Teaching-resource blog | Empty content (also .co.uk) | Snippet: kids-oriented ideas | none | Teachers/parents |
| 4 | vinwonders.com/en/news/easy-halloween-costumes/ | Theme-park travel blog | Fetched (105 KB) | "TOP 108" ideas grouped by audience (baby, toddler, teen boys/girls, men, women, couples/groups); answer is the list, after a one-paragraph intro | Dated 01/08/2023; no costs, no times, no sources; includes horror-film characters (Freddy, Michael Myers) | Long-tail volume, off-topic brand |
| 5 | bestbuy.ca/en-ca/shop/halloween/easy-halloween-costumes | Retail category | Fetched | 1-paragraph intro then product grid ("works with clothing you already own") | Store costumes $64.99–72.49 | Transactional, CA |
| – | ev27.clearout.io, status.penumbra.zone, lacisi.cesis.lv | Hijacked-subdomain spam | not analysed | – | – | – |

Weak results in the top 9: ~5 (3 spam + vinwonders off-brand + couponcabin coupon blog). PLAN.json says 4 (close). Gate 4 passes.
Corroboration: `content/keywords/2026-10-12-halloween-global/serps.md` row "easy last minute halloween costumes": weak 5; buzzfeed (titled 2025, stale), Good Housekeeping, Real Simple, Today, savvymom. These incumbents are competitors: not cited or linked.

## Phase 2: gap analysis
- **Table stakes:** classic one-prop ideas (cat, witch, ghost), closet-first framing, a long list.
- **The gap:** nobody sorts by **time to ready**; nobody gives per-idea **source** (closet / pharmacy / dollar store), **labelled cost** or a **recognisability** rating; nobody gives a household **shopping list** that maps items to costumes; nobody says a face-paint **patch test needs days**, which breaks the "15-minute face-paint costume" promise every list makes.
- **Stale data:** vinwonders 2023; buzzfeed titled 2025 (serps.md).
- **Unanswered:** how much it costs; what to buy at a pharmacy; whether face paint is safe same-day; which ideas are actually recognisable in photos.
- **Fan-out sub-queries → H2/FAQ:** definition of easy (H2); ideas by time (H2 + 5 H3s); minutes vs cost vs recognisability (table H2); what to buy (shopping list H2); face-paint safety (H2 + 2 FAQs); closet-only (H3 + FAQ); no-sew (H3 + FAQ); kids at night (FAQ + limits bullet); sending the photo (H2 + FAQ).
- **Angle:** wins by being the only post that sorts easy costumes by minutes to ready with per-idea source, labelled est. cost and recognisability, plus a 10-item shopping matrix and a face-paint test timed to the 24–72 h reaction window, using SubhSandesh's 49.4% build-on-the-day lead time and 48.3% phone-view share.

Sibling separation: `diy-halloween-costumes` = builds with hours (none of its 20 builds reused); batch-1 closet sections of trio / group / best-friends (tourists, mimes, scarecrows, hikers, cat burglars, coffee before/after, breakfast, blind mice) not reused. After `halloween-costume-ideas-for-kids`, `family-halloween-costumes` and `unique-halloween-costumes` landed mid-draft, pirate, skeleton, vampire, bat, superhero and lab scientist were swapped out (pilot, panda, cyborg, Dalmatian, sunflower, barista). `halloween-outfit-ideas` covers non-costume outfits; this page covers costumes only.

## Phase 3: sources (all fetched)
| Source | Claim used | Read | Subject test | Notes |
|---|---|---|---|---|
| Scheibehenne, Greifeneder & Todd 2010, J Consumer Research 37(3), open copy archive-ouverte.unige.ch/unige:76440 | 63 conditions, 50 experiments, N = 5,036; mean choice-overload effect virtually zero | Abstract only (public PDF not read) | Yes (choosing among many options) | OUP journal, green OA. **Prompt framing check:** the paper does not support "fewer options help"; the post uses the null result to justify sorting by time instead of cutting the list. |
| Pisauro, Pollicino, Fisher & Apps 2026, Nature Communications, europepmc PMC13522516 | Deadline pressure = work remaining / time remaining; shifts people from avoiding effort to seeking progress; 4 studies, 125 participants | Full text (Europe PMC XML) | Yes (time pressure) | CC BY 4.0 |
| Salles et al. 2022, IJERPH, europepmc PMC9819701 | 95 face paints/pancakes (4 brands) from São Paulo contained potentially toxic elements; children's estimated risk higher via ingestion | Full text | Yes (costume cosmetics) | MDPI, CC BY. Also cited by b1 halloween-makeup-captions (first use in b2). |
| DermNet, Allergic contact dermatitis (dermnetnz.org) | ACD usually appears 24–72 h after contact; open application test on inner upper arm several times daily over several days | Full page | Yes (patch testing) | Last reviewed Aug 2025; no publication date. Replaces aad.org per prompt. |
| FDA, Novelty Makeup (fda.gov) | Colour additives in face paint/theatrical makeup must be FDA-approved; skin-approved colours may not be eye-approved; none of 8 approved fluorescent colours near eyes; face paint lets you see better than a mask | Full page | Yes (face paint) | Current as of 2022-11-22. 2nd use of this URL in b2 (vampire-halloween-captions) — URL now at cap 2. |

Searches tried: findpapers "choice overload meta-analysis", "time pressure decision making choice"; Europe PMC REST: "choice overload" OA, "decision fatigue" reviews, face paint / Halloween makeup / costume makeup titles, Halloween AND dermatitis. Rejected: iScience 2026 choice-overload papers (Cell Press = Elsevier), Frontiers decision-fatigue reviews (BRIEF trap list), SAGE online-dating choice overload, Chernev 2015 JCP (paywalled), Delaware J Public Health 2019 (no makeup content).

Not cited (competitors): all SERP pages above, costume retailers, magazines.
