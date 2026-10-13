# Research brief — couple costumes with baby (row 115)

- Slug: `couple-costumes-with-baby` · theme couple · absorbs "halloween couple with baby ideas", "halloween couple and baby costumes"
- Batch: 2026-10-13-halloween-b3 · written 2026-10-13
- Searches used: 1 WebSearch (US index), query "couple costumes with baby". Firecrawl: 0.

## Phase 0 — first-party data

No Halloween, costume or baby data exists in `content/facts.md`. Platform-wide lines used, labelled as site-wide in the body:

- 48.3% of shared pages are opened on a phone (27,725 of 57,456 views) — measured 2026-09-24 (sets portrait framing of the trio photo)
- Average views per created page: 11.1 — measured 2026-09-24
- 90.9% of started pages are actually published and shared (4,724 of 5,199) — measured 2026-09-24 (same-night build is realistic)

Template spec (`template-spec.md`) used for /happy-halloween Family mode and /happy-halloween-premium; only spec features described.

## Phase 1 — SERP (WebSearch, US index)

Results returned: fridaywereinlove.com (x2, one a `?p=` duplicate), vivaveltoro.com (`?p=18151`), static.intrafocus.com (`?p=66119`, hijacked subdomain), romper.com (x2), brit.co, fatherly.com, costume-works.com.

| # | Page | Words (approx.) | Structure | Direct answer | Data / dates | Format | Optimising for |
|---|---|---|---|---|---|---|---|
| 1 | fridaywereinlove.com 150+ couples costumes | ~4,000 | One long numbered list, shop links | Buried after personal intro | None; 2017 images | List, affiliate links, no FAQ | Generic couples costumes; baby only as "add-in" (Pebbles, Baby Shark) |
| 2 | vivaveltoro.com couples + baby | ~1,200 | Numbered list of ~10 photos (football, burglar + money bag, lobster in pot, popcorn in carrier, Oz, Peter Pan, garlic) | After a personal intro | None; 2015 images | Photos, Amazon affiliate | Personal family-costume blog |
| 3 | romper.com 11 costumes for pregnant women | ~1,500 | 11 H2 items (Juno, etc.) with product prices | After intro | 28 Sep 2016 | Product links | **Pregnancy bump**, not a born baby |
| 4 | fatherly.com pregnant couple costumes | ~600 | Buy list + DIY list | After intro | Updated 12 Oct 2021 | Amazon cards, Instagram embeds | **Pregnancy bump** |
| 5 | static.intrafocus.com `?p=66119` | n/a | TLS cert mismatch, unfetchable | — | — | — | Hijacked-subdomain spam; counted weak, not analysed |

Weak results in top 10: intrafocus (spam), fridaywereinlove `?p=` duplicate, vivaveltoro `?p=` (2015 personal blog), costume-works (contest page), plus two pregnancy-intent pages that miss the query → **4–6 weak**. Gate 4 passes.

## Phase 2 — gap analysis

- **Table stakes:** a list of themed trios with the baby as a small part; some carrier ideas.
- **Gap:** none organises ideas by where a non-walking baby actually is (carrier / stroller / arms / asleep / photo-only); none gives an age band, a comfort note or cost per idea; none mentions safe sleep, overheating, face coverings or stroller airflow; none has a "baby stays asleep" plan.
- **Stale data:** romper 2016, vivaveltoro 2015, fatherly 2021.
- **Intent mismatch:** 2 of 5 answer "pregnant couple", not "couple with baby".
- **Fan-out:** carrier costumes; stroller costumes; newborn costume; is a hat safe; baby asleep at a party; is my baby too hot; cost; swaddle as costume; sharing with relatives.

**Angle:** wins by being the only post that organises couple-and-baby costumes by where a non-walking baby spends the night, with a comfort note, age band and cost per trio and current safe-sleep/face/pram-airflow rules, using the 48.3% phone-view share to set photo framing.

Sibling checks: b2 `family-halloween-costumes` (nest, ice-cream van, special delivery; BMJ PO carrier review PMC13239663/PMC13239534 — confirmed, not reused); b3 `halloween-ideas-for-family-of-3` (28 sets incl. the locket, magician's rabbit, catch of the day — none repeated). Re-checked after the coordinator's request against b3 `halloween-couple-costume-ideas-simple`, `halloween-couple-dress-ups`, `couple-costumes-with-dog` and the b1 duo posts: beehive (bee/beekeeper), zookeeper, vampire/bat, lighthouse, ghost hunters, skeletons and divers were swapped out for bookshelf/bookworm, safari guide, scarecrows and crow, museum night guards and polar expedition. Competitor ideas also avoided (football, money bag, lobster, popcorn, garlic, Oz, Peter Pan, Flintstones). 5-word overlap check run against all b1/b2/b3 bodies; remaining overlaps are template feature names and fact phrasing only.

## Phase 3 — sources (all fetched)

| Source | What it says (used) | Date | Notes |
|---|---|---|---|
| [NICHD Safe to Sleep, Ways to Reduce Baby's Risk](https://safetosleep.nichd.nih.gov/reduce-risk/reduce) | Move a baby asleep in car seat/stroller/carrier/sling to regular sleep space ASAP; fitted sheet only; overbundling raises SIDS risk; hat off indoors; stop swaddling at rolling (~3 months) | undated | Government; full page read |
| [Cole et al., BMC Pediatrics 2020](https://europepmc.org/article/PMC/PMC6975091) | n=3,341 Queensland caregivers; 38% of infants slept with soft items/bulky bedding/soft surfaces; nearly half routinely slept somewhere not designed for sleep (pram, bouncer) | 2020-01-21 | Peer-reviewed, CC BY, open access. **Abstract only** (Europe PMC REST); full-text endpoint EHOSTUNREACH |
| [Olvera et al., Can J Respir Ther 2025](https://europepmc.org/article/PMC/PMC12256047) | 9 adults face-down on infant-product fabrics 10 min; 100% cotton and 50/50 cotton-poly significantly raised EtCO2 and lowered SpO2; infants at higher risk | 2025-07-11 | Peer-reviewed, CC BY-NC (cited and linked, nothing reproduced); full text read |
| [Lullaby Trust, hot weather](https://www.lullabytrust.org.uk/baby-safety/travel-and-weather/hot-weather/) | Don't cover prams/buggies with anything that stops airflow; car seat on arrival → firm flat surface | updated 2026-08-27 | UK SIDS charity |
| [Lullaby Trust, room temperature](https://www.lullabytrust.org.uk/baby-safety/safer-sleep-information/room-temperature/) | Check chest/back of neck; don't wrap an unwell baby more than usual | updated 2026-04-30 | UK SIDS charity |

findpapers queries tried: "infant overheating thermoregulation clothing sudden infant death", "infant sleep sitting devices car seat stroller deaths", "stroller pram injuries children", "infant head covering bedding sudden death", "family photography new parents identity", "infant clothing thermal insulation tog overwrapping". Frontiers results (banned) skipped; no on-subject paper on first-year family photography or costumed infants found. Eur J Pediatr 2026 SIDS review (PMC13481494) fetched but not cited (too general).

Capcheck run 2026-10-13: no URL or domain at cap; europepmc.org is exempt.

## Audit failures (structural)

1. At least one table column uses first-party data — no Halloween/baby usage data exists.
2. Swap test — NICHD and Lullaby Trust guidance could sit unchanged in row 145 (baby costume ideas).
