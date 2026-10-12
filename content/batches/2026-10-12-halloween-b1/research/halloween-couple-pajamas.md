# Research brief: halloween couple pajamas

- **Row:** PLAN.json rank 19 · slug `halloween-couple-pajamas` · absorbs "halloween couple pjs", "halloween pajamas boyfriend girlfriend" · PLAN weak count 7
- **Run:** 2026-10-12 · Firecrawl search, `location: "United States"` · searches used: 2 (1 SERP, 1 `site:ftc.gov` lookup to find the bamboo guidance page after ftc.gov guessed URLs 404'd)
- **Phase 0:** facts.md read and not regenerated. No Halloween or sleepwear data exists. Used platform-wide lines: 48.3% phone opens, 38.5% password rate, and the Raksha Bandhan 49.4% same-day lead time, labelled in the body as the nearest analogue.

## Phase 1 — SERP (US, top 10)

| # | URL (competitor, never cited) | Type | Direct answer? | Data / dates | Format | Weak? |
|---|---|---|---|---|---|---|
| 1 | amazon.com search results | Retail search page | No; product grid | Ratings only | Grid. 503 on fetch | Weak for informational intent (no editorial content) |
| 2 | target.com search results | Retail search page | No | — | JS grid; fetch returned only a footer | Weak (no editorial content) |
| 3 | oldnavy.gap.com category | Retail category | No; 1 adult result (a women's set at $23.99 on sale from $39.99) | Prices only | Grid, ~40 words of SEO copy | Weak (thin) |
| 4 | pinterest.com/ideas (couple) | Image board | No | — | Pins | Weak |
| 5 | walmart.com browse | Retail category | No; filters for fabric, size and glow-in-the-dark | Prices from $19.99 | Grid with a "Fabric Material" facet | Weak (no guidance) |
| 6 | pinterest.com/ideas (Black couple) | Image board | No | — | Pins | Weak |
| 7 | berryjaneusa.com collection | Small retailer | No | Prices from $61 | Grid | Weak |
| 8 | childrensplace.com | Retail category, family | No | — | Grid | Weak |
| 9 | mommematch.com | Affiliate roundup (2026 refresh) | No buying guidance; lists affiliate links | "2026 collections arriving" | Long image list, FTC affiliate disclosure | Weak |
| 10 | etsy.com listing | Single product ("His Boo Her Boo", personalised year) | No | 4.9 rating (16) | Product page | Weak |

**Weak count: 10/10 for an informational buyer's guide** (PLAN said 7; the difference is whether the big-box category pages count as strong. They are strong domains, but none of them answers a buying question). Gate 4 passes.

Fetched in full with ctx_fetch_and_index: Old Navy, Walmart, MomMeMatch. Target came back as a footer only (JS-rendered). Amazon returned 503. Not fetched: Pinterest boards, Etsy and Berry Jane. Their snippets show they are product or image pages.

## Phase 2 — gap analysis

- **Table stakes:** prints (ghost, pumpkin, skeleton), glow-in-the-dark, family extension, his/hers personalisation, price.
- **Gap (none of the 10 cover it):** what each fabric does at night; how to size across men's and women's lines; what "bamboo" means on a label; how to care for glow prints; the kids' flammability rule; DIY.
- **Stale data:** none cited anywhere, because the SERP has no data at all.
- **Fan-out sub-queries → H2s:** what counts as couple pajamas · best fabric (5 H3s) · fabric comparison · sizing across lines (+ kids rule H3) · washing glow prints · DIY · pajama-night surprise · when it's the wrong choice.
- **Angle:** wins by being the only page in a 10/10 retailer/Pinterest SERP that tells a couple which fabric to buy from measured sleep-lab results (with the industry funding disclosed), how to size a his-and-hers set by flat-lay measurement, what "bamboo" legally means and how kids' sets fall under 16 CFR 1615/1616.

## Phase 3 — sources (all fetched)

| Source | What it says (verified) | Date | Notes |
|---|---|---|---|
| [Li, Halaki & Chow, J Sleep Res systematic review](https://europepmc.org/article/PMC/PMC11596996) | 9 eligible studies. Fibres: cotton, polyester, wool, blends. Wool helped sleep onset in adults in cool conditions and in older adults in warm conditions. Bamboo, viscose and modal were search terms, but none of the 9 included studies tested them. | 2024-04-16 | CC BY, full text read. COI: authors funded by Australian Wool Innovation (AWI) |
| [Chow et al., Nat Sci Sleep](https://europepmc.org/article/PMC/PMC6716586) | n=36, aged 50–70, 30°C crossover. Over-65s fell asleep in 12.4 min in wool, 26.7 in cotton and 21.6 in polyester. Fragmentation index: wool 12.1, polyester 13.7. Moisture uptake: wool ~35%, cotton ~24%, polyester <1% (background section). | 2019-08-26 | CC BY-NC: cited and linked, not reproduced. AWI-funded |
| [Shin et al., Nat Sci Sleep](https://europepmc.org/article/PMC/PMC4853167) | n=17, 17°C vs 22°C. Sleep onset 11.0 min in wool vs 15.0 min in cotton (p=0.043), significant only at 17°C. | 2016-04-22 | CC BY-NC. AWI-funded |
| [FTC, Bamboo Textiles](https://www.ftc.gov/bamboo-textiles) | A fabric can be called "bamboo" only if it is made directly from bamboo fibre. Otherwise it must say "rayon (or viscose) made from bamboo". | 2015-04-02 | Read through firecrawl_scrape because ctx_fetch got a 404 (bot wall) |
| [16 CFR 1615](https://www.ecfr.gov/current/title-16/chapter-II/subchapter-D/part-1615) | Covers sizes up to 6X. Infant garments (9 months or smaller, within length limits) and tight-fitting garments are excluded. | current | Read via eCFR versioner API (§1615.1) |
| [16 CFR 1616](https://www.ecfr.gov/current/title-16/chapter-II/subchapter-D/part-1616) | Covers sizes 7–14. Tight-fitting garments need a "Wear Snug-fitting, Not Flame Resistant" label. Fit is measured flat on the garment front and multiplied by two. | current | Read via eCFR versioner API (§1616.2) |

Also verified but not cited as a source: 16 CFR 303.16 requires generic fibre names and their percentages by weight on the label, and cross-references the care label required by 16 CFR Part 423.

- **Subject test:** the 3 papers and the FTC page are about sleepwear fibre, so they pass. The eCFR parts are about children's sleepwear, so they pass for the kids sub-section.
- **Swap test:** none of these could sit unchanged in another post in this batch.
- **Not used:** a couple-identity or matching-clothing paper. findpapers turned up nothing relevant for "matching clothing couple identity" or "partner similarity appearance clothing", and the post doesn't need one.
- **Caps:** none of these URLs, papers or domains appears in any sibling (checked with grep). capcheck is clean, and europepmc.org is exempt.

## Claims in the prompt that were checked

- "Search findpapers 'sleepwear fabric thermal comfort sleep quality'": done. It found the review and both lab studies. All three are wool-industry funded, which the prompt didn't mention, so the post discloses it.
- "Thermal/breathability properties from a textile or sleep study": no study measured flannel, fleece or bamboo as such. Flannel is a cotton weave and fleece is usually polyester, so the table maps them by fibre and says so. "Bamboo" is marked "0 of 9 reviewed studies".
- "16 CFR 1615/1616": verified on ecfr.gov. cpsc.gov returned 403.
- Price bands are our own estimates, labelled as such. The only observed prices were $19.99 (Walmart) and $23.99/$39.99 (Old Navy).
