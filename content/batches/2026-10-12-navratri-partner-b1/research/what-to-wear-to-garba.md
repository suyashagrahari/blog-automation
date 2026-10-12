# Research brief — what to wear to garba

Batch `2026-10-12-navratri-partner-b1` · slug `what-to-wear-to-garba` · bodyLanguage `en` · cluster outfits.
Also covers: garba night outfit, garba night dress, dandiya night outfits, dandiya night dress for women, what to wear to garba for men.
WebSearch calls used: **2 of 2** (1 SERP, 1 research). No browser tools.

## Phase 0 — first-party data (thin)

facts.md read directly; `npm run facts` NOT run. Nothing in facts.md is about clothing, rental or garba. Used:

1. Raksha Bandhan 2026 lead time, n = 89: 49.4% built on the festival day itself (labelled in body as the nearest festival analogue, not Navratri data).
2. Of the 79 finished in time, 86.1% within 24 hours of the festival.
3. 48.3% of shared pages opened on a phone, tied to the 1080×1920 Dandiya Pass.

The template spec (dress-code field, colour picker, pass) is first-hand product fact but does not count toward the three. The gate passes on count only. The facts bear on *timing* and *the invite*, not on the outfit itself.

## Phase 1 — SERP (US-served (WebSearch), 2026-10-12, query "what to wear to garba")

| # | URL | Type | Weak? |
|---|---|---|---|
| 1 | azafashions.com/blog/navratri-2026-bay-area-garba-events-outfit-guide/ | retailer lookbook + US events | no |
| 2 | azafashions.com/blog/garba-nights-chicago-detroit-2026-what-to-wear/ | retailer lookbook + US events | no |
| 3 | azafashions.com/blog/navratri-garba-etiquette-first-timers-usa/ | retailer etiquette | no |
| 4–6 | AMP duplicates of 1–3 | duplicates | — |
| 7 | web.stanford.edu/~gopi/personal/wedding/faq | personal wedding FAQ page, off-topic | **weak** |
| 8 | jigardangadhavi.com/blog/what-to-wear-garba-… (serves Rameelo, a US garba ticketing site) | thin 5-min blog, ~350 words, no data | **weak** |
| 9 | azafashions.com/blog/navratri-2026-outfits-texas-atlanta-garba/ | retailer lookbook | no |

**Weak count in top 10: 2** (Stanford personal page, Rameelo thin post). Gate 4 not triggered. One retailer holds 4 of the 6 unique URLs. Corroboration: serps.md row "garba night outfit ideas for couples" listed azafashions, tasva, tatacliq, lashkaraa, with 3 weak.

### Top 5 analysed

| Page | Words (approx) | Direct answer | Data cited | Format | Optimising for |
|---|---|---|---|---|---|
| Aza Bay Area (10 Sep 2026) | ~2,000 | first paragraph (AI-summary block) | event names only; no numbers on clothing | H2 questions, FAQ, product links | US city events + product clicks |
| Aza Chicago/Detroit (10 Sep 2026) | ~2,000 | first paragraph | event dates **in September 2026**, which falls before Navratri (11–19 Oct 2026). Looks like a factual error | same | same |
| Aza etiquette USA (11 Sep 2026) | ~2,000 | first paragraph | none | bulleted tips, product links | first-timers in the US |
| Rameelo / jigardangadhavi (dated 10 Jun 2026) | ~350 | intro | none | 4 short H2s | ticket sales |
| Aza Texas/Atlanta (5 Aug 2026) | ~1,900 | first paragraph | US temperatures (°F), dates 11–19 Oct | checklist, product links | US climate + products |

Tone: second person, upbeat, hedged ("comfort matters most"). None has a byline with expertise, a source list or a single number about the clothing itself.

## Phase 2 — gap

- **Table stakes:** chaniya choli / lehenga for women, kediyu or kurta for men, breathable fabric, flat footwear, light jewellery.
- **Gap:** (a) no numbers anywhere: no fabric research, no injury data, no prices; (b) everything is US-hall-centric, with nothing for Indian party-plot grounds; (c) nobody discusses rent vs buy; (d) nobody separates garba (circle) from dandiya raas (sticks) in outfit terms; (e) none says "read your pass for a dress code".
- **Stale/wrong data:** Aza Chicago dates Navratri events to 23–26 Sep 2026.
- **Fan-out:** what counts as a garba outfit / fabric and heat / footwear and barefoot / men's options / rent or buy and cost / dress code and colour / when not to follow general advice.
- **Angle:** see `batchMeta.angle`.

## Phase 3 — sources (all fetched via ctx_fetch_and_index or the Europe PMC / Crossref APIs)

| Source | Read | What it supports |
|---|---|---|
| Fu & Song, *Textile & Leather Review*, 15 May 2026, tlr-journal.com/2026/1484-1500 | abstract (journal page; PDF open) | thinner, lower-areal-density fabrics give more airflow and heat/moisture dissipation in high-intensity ethnic traditional sports; 839.0 mm/s |
| Wanke et al. 2012, *Med Probl Perform Art*, europepmc MED/22983131 | abstract only | floor caused 12.8% of 2,281 accidents over 17 yrs; 53.1% "too slippery", 18.4% "getting stuck" |
| Russell 2013, *Open Access J Sports Med*, europepmc PMC3871955 (CC BY-NC, cited not reproduced) | full text | hard floors, ill-fitting shoes, barefoot dancing as hazards; cushioned shoes dissipate landing energy; evening and late-season injury clustering (fatigue) |
| News Karnataka, 2 Oct 2024 | full text | rental doubled YoY; ₹250–₹1,400/day; heavy sets booked a month ahead, particularly by competitors; ~200 sets/day; about a quarter rent nine sets |

findpapers queries tried: "garba dance injuries Navratri", "garba dance energy expenditure heart rate", "folk dance metabolic equivalent intensity", "barefoot dancing foot injury", "clothing fabric thermal comfort sweat exercise cotton polyester", "mirror embroidery Gujarat textile Kutch", "garba", "Navratri garba health", "dance shoe floor friction rotation", "dance costume weight performance", "textile thermal comfort moisture management review open access", "chaniya choli", "Navratri Gujarat dress costume", "Vadodara Navratri garba ground", "heat illness night festival dancing".

Rejected: Chavda 2019 (URL cap); Parmar 2019 "The Performing Body of Navratri: Dancing Dandiya, Dressing to Impress" (Springer chapter, exact subject, but no abstract via Crossref and Springer blocked the fetcher); Autex 2017 PES/CO thermal comfort (CC BY-NC-ND; publisher page would not render, so I could not verify it on a page I could link); Kutch embroidery paper (IJSR, predatory list); gujarattourism.com Navratri page (HTTP 403).

**No measured weight for a chaniya choli was found.** The body says so and tells the reader to weigh theirs.

Not used: colour-of-the-day lists. Unverified for 2026, so the body tells the reader to take the list from the organiser.

## structuralLimitations / brief claims found false

1. **The Deccan Herald rental report is dated 2 October 2024, not September 2026.** The DH page says "Published 02 October 2024" (Metrolife, Mary Chacko), and its body did not render to the fetcher. Its text gives Navratri as starting "October 3", which is the 2024 date. Cited through the News Karnataka restatement of the same date, labelled as 2024 Bengaluru rates.
2. The prompt said the US SERP was "azafashions, tasva, tatacliq, lashkaraa". For this exact query today, Aza holds 4 of 6 unique URLs and tasva/tatacliq/lashkaraa do not appear. The weak count is 2, not 3.
3. No first-party data on outfits exists. Table has no first-party column (recorded as an audit failure).
4. Wanke and TLR read at abstract level only; TLR studies sportswear knits, not chaniya cholis. The body states both caveats.
