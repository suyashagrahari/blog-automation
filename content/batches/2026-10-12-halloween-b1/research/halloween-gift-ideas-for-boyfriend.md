# Research brief: halloween gift ideas for boyfriend

Row 13 · slug `halloween-gift-ideas-for-boyfriend` · theme couple · absorbs "halloween gifts for boyfriend", "halloween gift for him" · run 2026-10-12

## Phase 0: first-party data
No Halloween usage data exists in facts.md. Cited (verbatim, platform-wide unless noted):
- 48.3% of shared pages opened on a phone (27,725 of 57,456 views), measured 2026-09-24 (opening)
- Average views per created page: 11.1, measured 2026-09-24 (opening)
- 38.5% of creators password-protect (2,000 of 5,199), measured 2026-09-24
- Raksha Bandhan 2026: of 79 on-time pages, 55.7% built on the day, measured 2026-09-09 (labelled analogue in the body, small n)
- The template spec (template-spec.md) supplies product features only; it is not counted as a fact.

## Phase 1: SERP (Firecrawl, location United States, 1 search; no WebSearch)

| # | URL | Type | Weak? | What it optimises for | Where the answer is | Words/headings | Data cited |
|---|---|---|---|---|---|---|---|
| 1 | pinterest.com/ideas/halloween-gift-for-boyfriend | Idea board | Yes | Image pins, "boo basket for him" related terms | None (images only) | ~40 words, H1 only | "349 people searched this", updated 11mo |
| 2 | etsy.com/market/halloween_gifts_for_boyfriend | Marketplace category | Yes | Product grid ("60+ Gift Ideas for 2026"), 5,000+ items | None, products only | Filters, product cards | Ratings, prices (product) |
| 3 | amazon.com spooky gifts for boyfriend | Search results | Yes | Product listings (skeleton cards) | None | n/a (503 on fetch; snippet only) | none |
| 4 | pinterest.com/pin/spooky-halloween-gift-basket-for-boyfriend | Single pin | Yes | A boo basket photo | None | ~30 words | none |
| 5 | reddit.com/r/LongDistance (2018 thread) | Forum | Yes | Box-filler suggestions for a long-distance bf | Snippet: candy, popcorn, blanket, candle | n/a (403; firecrawl refuses Reddit) | none |
| 6 | oliveandcocoa.com halloween gifts | Shop category | Yes | Gift baskets | none | n/a | none |
| 7 | pinterest.com/ideas/halloween-gifts-for-boyfriend | Idea board | Yes | Boo-basket pins | none | n/a | none |
| 8 | hallmark.com halloween gifts | Shop category | Yes | Candles, decor, plush | none | n/a | none |
| 9 | target.com halloween gifts for men | Shop search | Yes | Funny t-shirts | none | n/a | none |
| 10 | offthewagonshop.com funny halloween gifts | Shop category | Yes | Gag gifts | none | n/a | none |

**Weak count: 10/10.** No editorial article ranks. Every result is a product grid, image board or forum thread. The prompt's "7/10 weak" understates it for the US index today. Gate 4 passes: plenty of weak results. The boo-basket pattern dominates (pins 1, 4, 7 and the Reddit thread), which is the sibling `boo-basket-ideas` territory, so this post stays on single gifts.

Fetch notes: Etsy 403, Amazon 503 and Reddit 403 on ctx_fetch_and_index. Etsy was read through one firecrawl_scrape (summary). Firecrawl does not support Reddit. Amazon was assessed from its snippet.

## Phase 2: gap analysis
- **Table stakes:** spooky-themed items, baskets/boxes, candy, candles, apparel, personalised items.
- **The gap:** no page answers *what* to give or *why*. No budget tiers, nothing matched to the kind of boyfriend, no experience gifts, no don't-buy advice, no research.
- **Stale data:** the only dated thing is a 2018 Reddit thread.
- **Fan-out sub-queries:** what's a good gift; how much to spend; surprise vs ask; experience vs physical; gifts for a guy who hates Halloween; last-minute; long-distance; DIY; what to write on the tag; should I buy a costume.
- **Angle:** wins by being the only result in a 10/10 marketplace/Pinterest SERP that answers in prose (buy what he asked for, or an experience above $40), backed by four gift-giving studies, sorted into 3 budget tiers and 6 boyfriend types, with SubhSandesh's 48.3% phone-open and 11.1 views-per-page figures for the note.

## Phase 3: sources (all fetched)
| Source | Claim used | Read | Date |
|---|---|---|---|
| Gino & Flynn, JESP 47(5) 915–922, gsb.stanford.edu faculty publication page (abstract; ScienceDirect version also read via firecrawl) | 5 studies: requested gifts appreciated more; givers assume equal; one specific request makes givers more willing (Study 4) | Abstract only (paywalled, no OA copy). Linked via Stanford GSB because Elsevier (sciencedirect.com 2 posts + an Elsevier doi.org link in a sibling) would exceed the domain cap | 2011-09-01 |
| Chan & Mogilner, JCR 43(6) 913–931, academic.oup.com/jcr/article/43/6/913/2687542 | Experiential > material for relationship strength, even when not consumed together; driven by emotion at consumption | Abstract only (Crossref record; OUP 403 + paywall) | 2017-04-01 |
| Puente-Díaz & Cavazos-Arroyo, Behav Sci 16(9) 1522, PMC13603195 | Givers rate originality/effectiveness above recipients, mediated by surprise; 3 experiments n = 196/281/278 in Mexico | Full text (Europe PMC XML), CC BY | 2026-08-29 |
| Shahrier & Khatun, Heliyon 11(2) e41956, PMC11787505 | GRAS validated on 763 Bangladeshi 17–36-year-olds in romantic/marital relationships; item on special-day worry about expectations vs ability | Full text, CC BY-NC-ND (cite only) | 2025-01-14 |

Searched (findpapers.mjs): "gift recipients prefer requested gifts", "experiential gifts material gifts relationship strength", "gift giving romantic relationships", "gift price recipient appreciation giver recipient mismatch", "handmade gifts love perceived". OA status checked via OpenAlex/Unpaywall/Semantic Scholar. Flynn & Adams 2009 (gift price) was considered but dropped: paywalled, and Elsevier is effectively at cap.

Avoided: nrf.com (capped at 3), frontiersin.org (cap), PMC13203665 / PMC10844225 (full), T&F, Sage, arXiv, all competitors and retailers.

## Brief claims checked
- "archetype 7/10 weak": the measured US top 10 is 10/10 weak today.
- nrf.com cap: confirmed at 3 by capcheck before drafting; not used.
