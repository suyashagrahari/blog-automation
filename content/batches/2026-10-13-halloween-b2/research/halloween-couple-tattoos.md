# Research brief — halloween couple tattoos (row 86)

- Keyword: `halloween couple tattoos` (absorbs "matching halloween tattoos") · slug `halloween-couple-tattoos` · theme couple · PLAN weak 7/10, band 3,000–10,000/mo
- Slug free in Strapi (checked 2026-10-13, empty data array).
- Siblings not cannibalised: halloween-couple-shirts (slogan tees), halloween-couple-outfit-ideas (clothes), halloween-love-puns, famous-halloween-couples. No /blog/ links.

## Phase 0 — first-party data
No Halloween or tattoo data exists in facts.md. Used three platform-wide lines (verbatim in factsUsed):
- 5,199 pages created (scale of what we build)
- 2.5-hour median between first save and last edit, sampled on /apology-dashboard (disclosed in the body): the argument is that people revise what they make for each other, and ink cannot be revised.
- 48.3% opened on a phone (why the card works for the partner).
The table can't honestly carry a first-party column, so that checklist item is recorded as failed.

## Phase 1 — SERP (WebSearch, 2 searches, US index; Firecrawl disconnected)
Queries: "halloween couple tattoos matching ideas"; "matching halloween tattoos for couples small designs". The coordinator's DuckDuckGo fallback wasn't needed because both searches returned results.

| # | Result | Type | Fetch | Notes |
|---|---|---|---|---|
| 1 | static.intrafocus.com/?p=35004 | hijacked subdomain spam | TLS cert mismatch | snippet only: split pumpkins, matching ghosts |
| 2 | foreman.hms.harvard.edu/matching-his-and-hers-tattoos | hijacked subdomain spam | DNS fails | snippet: "two halves" tattoos |
| 3 | get.cloudshark.org/view/matching-halloween-tattoos.html | hijacked, serves unrelated CloudShark page | 200, no tattoo content | weak |
| 4 | devmousedatabase.ucsf.edu / sandbox.dss.ucdavis.edu / wd0105.coe.psu.ac.th / ftp.dia.ucla.edu | hijacked university subdomains | not analysed (brief rule) | weak |
| 5 | morphic.com/…/couple-tattoo-ideas | AI image-generator gallery (Arabic/Turkish locales) | 200 | prompt cards for wrist and forearm placements; no prices, safety or Halloween angle |
| 6 | temporarytattoos.com/blogs/news/small-halloween-tattoos | temp-tattoo retailer blog, ~800 words | 200 | H2s: why small, pain, placement, where to buy. Matching pairs: smiling/frowning pumpkins, "Boo & Boo-thang", spider & web, witch & black cat, coffin & cross. No prices, no henna, no licensing, no regret or removal data. Sells decals (CTA). |
| 7 | avaria.dyverse.com, payments.oliverbonacini.com, wp2.siris.com | hijacked/spam | — | weak |

**Weak count in top 10: 9 of 9 organic results in query 1 are spam, stubs or an image gallery; 1 real page across both queries.** Gate 4 passes easily. AI summary flagged the results as low quality.

## Phase 2 — gap
- Table stakes: matching ghosts and pumpkins, two-halves designs, wrist and ankle placements.
- Gap (none cover): estimated size and price per design, the black henna (PPD) hazard, how to check a licensed shop, an aftercare timeline set against the 31 October deadline, regret rates and the number of laser sessions removal takes.
- Fan-out: what makes it matching / ideas / cost / try first / henna safety / licensed artist / aftercare timing / breakup and removal / surprise-gift question.
- Angle: wins by being the only post that pairs every design with est. size, placement and price and then states the permanence honestly (henna timing, inspector checklist, regret, median sessions).

Avoided the retailer's exact pairs (spider & web, witch & cat, coffin & cross, smiling/frowning pumpkins, Boo & Boo-thang).

## Phase 3 — sources (all fetched; Europe PMC papers read in full text via the REST fullTextXML endpoint)
| Source | What it supports | Date | Notes |
|---|---|---|---|
| europepmc PMC10043702, Altunay et al., Indian J Dermatol | 302 patients; 53% have letters/numbers (mostly names/dates of a loved one); 26% regret; 42.5% of regretters removed or covered | 2022-11-01 | CC BY-NC-SA, cited not reproduced |
| europepmc PMC11300047, Mitwalli & Alfurayh, Dermatol Res Pract | 181 tattooed, Riyadh; 42.5% attempted removal; "change of lifestyle or partner" 8/77 = 10.4% | 2024-07-24 | sample 57.5% eyebrows, 95.6% women (caveated in body) |
| europepmc PMC13428261, Chen et al., J Cosmet Dermatol | 130 patients; median 3 PS vs 4 QS sessions to excellent clearance; 8–12 weeks apart; 78.1% vs 54.4% | 2026-08-01 | CC BY 4.0 |
| europepmc PMC9290601, Fauger et al., J Cosmet Dermatol | European aftercare recommendations; healing 2–3 weeks | 2021-05-08 | product study (Bioderma); only the recommendation summary is used; CC BY-NC |
| health.state.mn.us henna Q&A (MDH) | henna is approved by FDA for hair dye only; black henna/PPD reactions 4–10 days, up to 3 weeks; can scar permanently | updated 2025-01-09 | regulator substitute for fda.gov (FULL) / nhs.uk (FULL) |
| health.state.mn.us body art inspection report PDF (MDH) | 48 items: licences displayed, single-use sterile needles, 3 years of spore results, gloves, aftercare instructions | undated | state health department page, as the row asked |

Couple-tattoo research: **none exists** that I could find. Europe PMC searches for "matching tattoos", "couple tattoo" OR "couples tattoo" OR "partner tattoo", and TITLE:tattoo + "relationship" + "romantic" returned nothing relevant (the hits were forensic or DNA papers). findpapers runs: "tattoo regret prevalence survey", "laser tattoo removal number of sessions", "black henna paraphenylenediamine…", "couple matching tattoos relationship", "tattoo aftercare complications infection", "tattoo motivation identity meaning".

Rejected: Cureus "Think Before You Ink" (PMC10693284, 18.2% regret, n=3,033), a good fit but Cureus is already in 3 batch-2 posts (journal cap). The Frontiers Saudi youth paper (Frontiers is a known trap). FDA's henna fact sheet (fda.gov FULL).

Caps (capcheck 2026-10-13): europepmc exempt; health.state.mn.us is new to the batch (1 post); J Cosmet Dermatol is now in 2 posts (halloween-nails + this one); Indian J Dermatol and Dermatol Res Pract are new to the batch.

## Prices
No published survey of tattoo prices was found. Every price, size and placement is labelled in the body as our estimate (USD, black ink, per person, licensed US shop).
