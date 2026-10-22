# Research brief: diwali sweets (row 22, slug `diwali-sweets`)

Measured 2026-10-22. Secondaries: diwali sweets list, diwali sweets names, diwali mithai. Siblings: diwali-party-ideas (not yet written; party content kept out), diwali-gift-ideas (read: its only sweets idea is a hometown mithai box for a friend; no overlap with shelf life or purity).

## Phase 0: first-party data

facts.md (2026-09-24 vintage) has **no** sweets, food or Diwali data. The post uses three platform lines only in the greeting section: 48.3% phone opens, 11.1 views per page, and Raksha Bandhan 2026 same-day build 49.4% (n = 89, labelled as the nearest festival analogue). None is in the first 150 words: forcing them into a sweets answer would mislead. Recorded as an audit failure. `npm run facts` was not run (BRIEF §3).

## Phase 1: SERP (Firecrawl, location India, "diwali sweets")

Head term (2 words). Flagged as hard for this domain; the plan row fixes the keyword, so the post targets the long-tail sub-intents "diwali sweets list by region", "how long do diwali sweets last", "how to check sweets for adulteration at home".

| # | Page | Words / format | Direct answer | Data and date | FSSAI / shelf life / purity |
|---|---|---|---|---|---|
| 1 | indianhealthyrecipes.com roundup | ~4,700 incl. sidebar; recipe cards by type (ladoo, kheer, halwa, burfi) | None; recipe links | modified 9 Oct 2025 | 0 mentions |
| 2 | YouTube recipe video | video | n/a | 12 Oct 2025 | judged from snippet |
| 3 | swadinstitute.com blog | ~1,300; 10 sweets with recipes | List after intro | undated | 0 mentions |
| 4 | YouTube recipe video | video | n/a | 19 Oct 2025 | judged from snippet |
| 5 | milkmaid.in brand page | ~3,400; 29 recipe H2s, condensed-milk led | None | undated | 0 mentions |
| 6 | fnp.com blog (competitor gift retailer) | ~1,200; 10 sweets as H3s, links to its sweets shop | Intro | 13 Oct 2025 | 1 "purity" (silver gift ad) |
| 7-10 | YouTube, vegrecipesofindia (403), BBC Food (UK fusion bakes), cookwithmanali category | | | 2025 | |

Tone across the set: second-person recipe copy, hedged ("best Diwali sweets"), no sources, no dates on facts. 7 of 10 are weak for this intent (videos, brand recipe pages, category pages, a retailer).

## Phase 2: gap analysis

- **Table stakes:** a named list of sweets (kaju katli, besan laddoo, gulab jamun, rasgulla, Mysore pak, peda, gujiya).
- **Gap:** none of the fetched pages groups sweets by region with main ingredient, none gives shelf life by sweet, none mentions FSSAI, adulteration, the DART book, varq testing, or the best-before rule.
- **Stale / wrong belief to correct:** many buyers still assume best-before on loose sweets is mandatory (2020 directions); FSSAI withdrew it on 7 Nov 2023.
- **Fan-out sub-queries → H2s/FAQs:** what counts as a Diwali sweet; sweets by region; how long each lasts; how to check khoya; how to check silver varq; is varq vegetarian; is colour allowed; must shops show best-before; which sweets survive a courier; where to complain.
- **Angle:** wins by being the only post in the India top 10 that pairs a regional mithai list with FSSAI's shelf-life classes and the DART book's page-cited tests, plus the 2023 best-before withdrawal.

## Phase 3: sources (all fetched 2026-10-22)

1. FSSAI Guidance Note No. 14/2020 (24 Feb 2020), www.fssai.gov.in — text PDF, full text read. Shelf-life classes (same day / 2 / 4 / 7 / ~30 days), quality table (17 products), tray declarations, 2019 Delhi-NCR survey (1,041 samples), coal tar test reagents, "no force of law".
2. FSSAI DART book, stg-old.fssai.gov.in (www path returns HTML shell) — image-only PDF, pages rendered and read: Test 3 p.03 (starch in khoya/chenna/paneer, iodine), Test 10 p.09 (aluminium in silver leaves). File metadata Jan 2024; no printed publication date.
3. FSSAI gazette, silver leaf standard (19 Jul 2016; in force 1 Aug 2017) — 2.8 g/m², 999/1000, no animal origin.
4. FSSAI letter RCD-01002/1/2021 (7 Nov 2023) — 25.09.2020 best-before directions withdrawn; voluntary now.
5. Siruguri V., IJMR 2018 (PMC6366254, CC BY-NC-SA: cited, not reproduced) — aluminium foil in place of silver foil on sweets listed among adulterants identified. Peer-reviewed, open access.
6. Varghese R., Ramamoorthy S., J Consum Prot Food Saf 2023 (PMC10009361) — FSSAI 100 ppm synthetic colour cap; non-permitted dyes detected. Peer-reviewed, open access.

Date reference only: drikpanchang 2027 Diwali calendar (Dhanteras Wed 27 Oct, Diwali Fri 29 Oct 2027). Not cited.

findpapers queries tried: "silver leaf varq sweets aluminium" (nothing relevant), "khoa adulteration starch India" (nothing relevant), "synthetic food colours Indian sweets" (→ #6), "milk adulteration festival India" (→ #5).
Rejected: FSSAI-hosted Deccan Herald clipping (2020, a dietitian's quotes, not FSSAI guidance); lexology/foodcomplianceinternational (secondary; used only to locate the FSSAI letter).

Searches used: 3 Firecrawl (1 SERP + 2 FSSAI) and 2 WebSearch.
