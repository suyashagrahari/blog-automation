# Research brief: trio halloween costumes

Row 22 · slug `trio-halloween-costumes` · theme friends · also covers "halloween ideas for trios", "halloween costume ideas for 3 people" · written 2026-10-12.

## Phase 0: first-party data
- No Halloween usage data exists in facts.md (BRIEF §3). `npm run facts` not run.
- Used: 48.3% phone-open (first 150 words and table takeaway), Raksha Bandhan lead time 49.4% on the day (first 150 words, labelled as the nearest analogue), 11.1 average views per page (template section, labelled platform-wide).
- Template spec (`template-spec.md`) used for bestie mode, Boo License 1080×1920, 8 licence costumes, 6 photos, email on first answer; premium: 12 photos, 60 s voice note, unlock time.

## Phase 1: SERP (Firecrawl, location "United States", 1 search used of 2)

| # | URL | Type | Weak? |
|---|---|---|---|
| 1 | pinterest.com/ideas/iconic-trios-costume | image board, ~20 pins, "18k people searched" | weak |
| 2 | goodhousekeeping.com …/halloween-costumes-for-3-people | listicle; SERP title "56 Best Trio…", page now serves "85 Group Halloween Costumes" | strong |
| 3 | amazon.com Trio Costumes | retail | weak |
| 4 | womansday.com …/trio-halloween-costume-ideas | listicle, 42 ideas, modified 2024-10-10 (stale, titled 2024) | strong |
| 5 | spirithalloween.com group costumes | retail | weak |
| 6 | pinterest.com/sag3712 board | image board | weak |
| 7 | halloweencostumes.com/blog p-351 | retailer blog, 37 H2s, ~4,300 words, updated 2026-09-19 | weak (retailer) |
| 8 | pinterest.com board | image board | weak |
| 9 | tiktok.com video | video | weak |
| 10 | countryliving.com …/best-trio-halloween-costume-ideas | listicle, 64 ideas, affiliate, modified 2025-10-13 | strong |

**Weak count: 7/10** (matches PLAN).

### Top-5 analysis (fetched with ctx_fetch_and_index; structure via scripted fetch)

| Page | Words / H2s | Direct answer | Data cited | Format | Tone / optimising for |
|---|---|---|---|---|---|
| GH (now group page) | ~2,240 / 24 product H2s | none; intro then products | none | product cards, affiliate | third person, shopping |
| Woman's Day | ~2,060 / 23 | intro buries list | none | one H2 per pop-culture trio | third person, affiliate |
| Country Living | ~2,130 / 29 | none | Amazon prices only | product cards, some DIY | shopping, 2-day delivery |
| HalloweenCostumes.com | ~4,280 / 37 numbered | none | none | 3 product links per H2 | retailer, licensed sets |
| Pinterest ideas | ~0 text | n/a | n/a | pins | image discovery |

## Phase 2: gap
- **Table stakes:** pop-culture trios (Hocus Pocus, Powerpuff, Harry Potter, Stooges), food trios (s'mores), rock-paper-scissors, three little pigs, DIY vs buy.
- **Gap:** none groups ideas by how three people split; none gives effort or cost per person in a comparable form; none addresses the odd-one-out problem beyond one joke (HC.com "third wheel" line on Vikings); none gives a fair way to assign roles; none treats mixed heights as a design feature; no FAQs on any of the four text pages.
- **Stale:** Woman's Day titled 2024; GH trio URL now redirected in content to a group list.
- **Fan-out:** what counts as a trio costume; ideas by structure; cost/effort; different heights; couple + friend; any gender mix; last-minute; fair role choice; fourth friend joining; when to decide.
- **Angle:** wins by being the only post that sorts trio costumes by how three people split, with effort/cost per person, and answers the odd-one-out problem with three-player Cyberball research and a blind-draw method.

## Phase 3: sources (findpapers.mjs, Crossref + Europe PMC)
Queries tried: "ostracism cyberball three-player exclusion", "triadic friendship exclusion third wheel", "triads friendship stability three person", "costume wearing group identity", "deindividuation Halloween costume children", "synchrony matching appearance group bonding", "ordinal effects of ostracism meta-analysis Cyberball", "dyads versus triads conversation exclusion", "children friendship triads conflict", "lottery fairness procedural justice random allocation", "partial ostracism inclusion level Cyberball", "enclothed cognition costume".

| Source | What it says (verified) | Read |
|---|---|---|
| Hartgerink, van Beest, Wicherts, Williams (2015) PLOS ONE, PMC4449005 via europepmc | 120 studies, N=11,869; d > \|1.4\|; typical = 3 players, 30 throws, <5 min; 4 players smaller effect than 3 (interpret carefully) | full text |
| Mulder et al. (2023) BMC Psychology, PMC10280895 | 4,813 ten-year-olds; game with two putative other children; facial sadness/anger associated with self-reported negative feelings during game | full text |
| Wang, Xu, Zhou (2014) Sci Rep, PMC5376050 | 360 students, 60 groups of 6, 300 rounds; players more likely to repeat last action; contradicts NE randomisation | full text |
| Jacobs (1890) English Fairy Tales, Gutenberg #7439 | Three Bears verbatim from Southey; Great, Huge / Middle-sized / Little, Small, Wee Bear; old woman not Goldilocks; Three Little Pigs | full text |

Rejected: Diener et al. trick-or-treat deindividuation (APA, paywalled); Psychological Reports 1979 Halloween masks (SAGE, banned); Social Psychology Quarterly 1985 dyads vs triads (SAGE, banned); PSPR 2023 dress & person perception (SAGE); CPSC costume safety (HTTP 403, unverifiable); nature.com and bmcpsychology direct pages returned bot challenges, so Europe PMC full text used.

Not sourced, stated as common knowledge: Dickens 1843, Shelley 1818, Dumas 1844, Baum 1900 publication years. Costs per person are the writer's estimates.

Capcheck 2026-10-12: none of the three PMC ids or the Gutenberg ebook appear in any sibling; europepmc.org and gutenberg.org are cap-exempt. Avoided nrf.com, doi.org, frontiersin.org, PMC13203665, PMC10844225, PMC11364825, Martin 2019.

## Brief-claim checks
- PLAN weak 7/10: confirmed.
- Prompt: "Cyberball is literally a 3-player paradigm": mostly true. The typical version is 3 players, but the meta-analysis covers games with more players too (it tested player count as a moderator).
- GH trio page now serves a group list (not in the brief): this matters for the `group-halloween-costumes` sibling as well.
