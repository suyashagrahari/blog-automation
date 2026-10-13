# Research brief — halloween wreath ideas (rank 236; absorbs "diy halloween wreath")

Slug: `halloween-wreath-ideas` (Strapi check 2026-10-13: not taken; no live slug contains "wreath").

## Phase 0 — first-party data
No Halloween usage data exists (BRIEF §3). Facts used, verbatim:
- Raksha Bandhan 2026 lead time (55.7% built on the day itself, of 79 pages in time). Cited as the nearest analogue, with the festival and the small n disclosed in body prose.
- 48.3% phone-open; 11.1 average views per page; 38.5% password-protect.
The template spec was used for the two Halloween links and does not count toward the facts minimum.

## Phase 1 — SERP (WebSearch, US index; 1 search used)
Query `halloween wreath ideas`: gathered.how (×2 URLs), nearlynatural.com, wayfair.com, ccv2-p1-ui.i.balsamhill.com (staging subdomain), rustic-crafts.com, reach.dog (collection page), craftsyhacks.com, vrafortoday.org/?p=6347 (spam).
**Weak in top 9: 4** (balsamhill staging subdomain, reach.dog shop collection, vrafortoday spam, craftsyhacks thin affiliate roundup). That passes Gate 4.
**Overlap with siblings:** 0 shared URLs with b2 diy-halloween-decorations, b2 halloween-decorations-ideas or b4 halloween-porch-decorations (b4 had vrafortoday ?p=6265, a different URL). Cannibalisation rule not triggered.

| # | Page | Words (approx) | Structure | Direct answer | Data cited | Format | Tone / optimising for |
|---|---|---|---|---|---|---|---|
| 1 | gathered.how 35 DIY Halloween wreath ideas (Sarah Orme, 8 Oct 2024) | ~3,000 | H1 + 35 numbered H3s, each a linked tutorial | No; 5-paragraph intro | None | Image list, outbound tutorial links, affiliate | Chatty roundup; aggregates others' tutorials |
| 2 | nearlynatural.com Creepy Yet Classy | ~1,500 body | H2 styles (spooky, vintage, gothic, glam, minimal) + "ready-to-hang" product blocks + storage H3 | Partial | None; "hang in a covered area away from sun, wind, rain" (unsourced) | Product cards | Retailer selling faux wreaths |
| 3 | wayfair.com 20 Haunting Halloween Wreath Ideas | ~900 | 20 H2s, 1–2 sentences each + "Shop" links | Intro line only | Size band "16–23 in" for small wreaths | Shop links, tips | Commerce; sells hangers and fabric |
| 4 | rustic-crafts.com Halloween Wreath Ideas | ~1,200 | H2 "Easy" + H3 per wreath, each credited to another blog | After 2 intro paras | None | Amazon affiliate links | Rustic DIY aggregator |
| 5 | craftsyhacks.com 27 DIY Halloween Wreath Ideas (2021, upd. 2023) | ~2,500 | 27 H2s linking out | No | None | Affiliate, dollar-store slant | Thin roundup |

## Phase 2 — gap
- **Table stakes:** grapevine, foam and wire bases; spiders, crows, bats, pumpkins, witches; dollar-store builds; storage.
- **Gap:** none of the five
  - sorts ideas by base and door type;
  - says how to hang a wreath on steel, glass, rental or fire doors;
  - cites any durability evidence (they say "keep it covered" with no basis);
  - mentions fire spacing for lights and candles;
  - mentions pet toxicity of real stems, or that bittersweet, a staple of autumn wreaths, includes an invasive species.
- **Stale data:** craftsyhacks 2021; none has any statistics at all.
- **Fan-out sub-queries:** what base to use; how to hang without damaging the door; can foam go outside; is bittersweet / eucalyptus safe for pets; can I put lights on a wreath; when to hang and remove it; size for a door; cheapest base; storage; reuse as a fall wreath.
- **Angle:** see `batchMeta.angle`.

## Phase 3 — sources (all fetched 2026-10-13)
1. **Dublin Fire Brigade, Fire Safety at Halloween** (dublincity.ie). The page says to hang decorations away from heat and naked flames, to use battery LED candles, and to use only outdoor-rated decorations and connections. It has no publication date (article:modified_time 30/09/2025), so the date is omitted from citation.
2. **Polruang et al., Sci Rep, 4 Nov 2025** (Europe PMC PMC12586459; full text, CC BY). White EPS under ~12 W/m² UVA for 180 days went pale yellow by 2–4 months and deep yellow by 6, with cracking.
3. **ASPCA American Bittersweet.** Toxic to dogs, cats and horses; vomiting, diarrhoea, weakness, rare seizures.
4. **ASPCA Eucalyptus.** Toxic to dogs, cats and horses; salivation, vomiting, diarrhoea.
5. **Roy et al., Global Change Biology, 12 Dec 2018 (issue Mar 2019)** (Europe PMC PMC7380041; full text, CC BY, Wiley).
   - Horizon scan: 329 candidates narrowed to 66 species absent from the EU, rated medium (18), high (40) or very high (8) threat.
   - Celastrus orbiculatus is on the list, pathway "Escape".
   - Replaced Zaya et al. 2021 PLOS ONE (PMC7987179) after the coordinator reported PLOS ONE FULL in b5. The 39% hybridisation, bird-dispersal and capsule-colour claims were removed with it.

Subject test passed by 2, 3, 4 and 5 (wreath materials and foliage). Peer-reviewed OA: 2 and 5. Generic statistics: 0. Wikipedia in body: 0 (sameAs only, verified via the API).

Dropped:
- nfpa.org Halloween page: JS-rendered, no readable text; nfpa is also at 1 post in b5.
- USFA Halloween pages: 404.
- esfi.org: 403.
- fs.usda.gov FEIS Celastrus: 403.
- UMN extension bittersweet page: 403.

Searched (findpapers): "Celastrus orbiculatus oriental bittersweet invasive spread"; "expanded polystyrene foam ultraviolet weathering degradation outdoor"; "plant poisoning dogs cats ornamental plants retrospective"; "decorative wreath floral".

**Limitation:** the EPS paper is in a megajournal (Scientific Reports), which BRIEF §9 discourages but does not ban; no non-megajournal OA paper on foam UV yellowing was found.

## Sibling separation
- b2 diy-decorations has weatherproofing and anchoring for yard builds, plus hot-glue safety. This post covers door hanging by door type and UV on foam specifically.
- b2 decorations-ideas has the 835-fires statistic and a one-line over-door wreath. This post uses no NFPA statistic, and its hanging section is the substance.
- b4 porch is organised by porch type. This post covers only door-hung forms.
- b5 crafts-for-adults covers paper crafts only.
- b5 when-to-put-up-decorations owns daylight and clock changes, so this post dropped its clock-change line.
- b5 garland-ideas (in parallel; not on disk at finalise time): this post covers no strung or line decorations.
- 5-word shingle check against all b1–b5 bodies: matches were only shared product-description phrasing, dates and URLs. Template-description lines were reworded.
