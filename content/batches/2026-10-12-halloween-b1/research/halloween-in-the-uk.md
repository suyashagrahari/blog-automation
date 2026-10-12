# Research brief: how is halloween celebrated in the uk

- **Slug:** `halloween-in-the-uk` · PLAN rank 25 · absorbs "why halloween is celebrated in england", "halloween in the uk"
- **Searches used:** 2 Firecrawl (`location: "United Kingdom"`): the SERP itself, plus one source search for YouGov UK polling. 0 WebSearch. Scholarly discovery via `findpapers.mjs`, the Crossref API (The Conversation prefix 10.64628) and the Europe PMC REST API, none of which count toward the search budget.

## Phase 0: first-party data

facts.md has no Halloween or UK data, so the post uses platform-wide lines, labelled as such:
- 48.3% phone opens (27,725 of 57,456 views), 2026-09-24
- 11.1 average views per created page, 2026-09-24
- Raksha Bandhan 2026 lead time (n=89): 49.4% built on the day, median 0 days. Labelled as the nearest analogue, not Halloween data.

## Phase 1: SERP (UK-served, Firecrawl, 2026-10-12)

| # | URL | Weak? |
|---|---|---|
| 1 | reddit.com r/AskUK | weak (UGC) |
| 2 | anamericansguidetobritishlife.substack.com | weak (personal blog) |
| 3 | richmond.ac.uk blog "Halloween in the US vs the UK" (31 Oct 2024) | strong-ish |
| 4 | historic-uk.com/CultureUK/Halloween | strong |
| 5 | youtube.com | weak |
| 6 | en.wikipedia.org/wiki/Halloween | strong |
| 7 | uk.jackery.com "[2025 Update]" | weak (power-station retailer) |
| 8 | quora.com | weak |
| 9 | timeanddate.com/holidays/uk/halloween | strong (403 to fetch) |
| 10 | ihmanchester.com (language school, 15 Oct 2025) | weak |

**Weak count: 6/10**, matching PLAN.json and serps.md.

### Top-5 content pages analysed

| Page | Words (approx.) | Headings | Direct answer | Data and dates | Format | Wales / NI / Hutton / UK poll |
|---|---|---|---|---|---|---|
| historic-uk.com (Ben Johnson) | ~1,050 | H1 only plus related links | Para 1: "children... trick-or-treat" | No stats; Samhain "thousands of years", druids, Pomona | Prose, images | Wales 4 mentions in passing; no NI, no Hutton, no poll |
| richmond.ac.uk | ~840 | Bold pseudo-headings | "much simpler affair... primarily children trick-or-treating" | No stats | Personal US vs UK essay | None |
| substack (Marianne Jennings, 26 Oct 2025) | ~3,370 | 8 H2s (roots, trick-or-treat rules, Guy Fawkes, carving, Sept 1st) | Buried | No stats | First-person American expat | Bonfire Night 12 mentions; no Wales or NI |
| ihmanchester.com | ~1,760 incl. nav | H3/H4 bold sections | Para 1 | No stats; Pope Gregory III, souling, guising | ESL-learner prose | Wales 1 mention; no NI |
| uk.jackery.com | ~6,670 | H2/H3 how-to plus product pitch | Para 1 | £ prices for products | Tables (35), FAQ | NI 1 mention; no Wales custom |

## Phase 2: gap

- **Table stakes:** Samhain origin, turnip-to-pumpkin, guising/trick-or-treat, Bonfire Night.
- **The gap:** no page compares the four nations; none mentions Nos Galan Gaeaf or Northern Ireland's firework licensing; none gives a measured UK participation or spending figure; all repeat the druid-bonfire Samhain story uncritically.
- **Stale or unsupported:** "Celts across Britain celebrated Samhain on 31 Oct" (historic-uk, ihmanchester, richmond). Rodway: there is no evidence of Samhain in Wales, and "Celtic new year" is comparative mythologists' speculation.
- **Fan-out sub-queries:** what does UK Halloween look like now; how the nations differ; did it come from Samhain; is it American; Halloween vs Bonfire Night; how to greet UK family. Each became an H2.
- **Angle:** wins by being the only post that compares all four UK nations, separates scholar-supported Samhain history from myth, and puts YouGov's measured GB participation beside SubhSandesh's 48.3% phone-open rate.

## Phase 3: sources (all fetched and read)

| Source | Type | What it supports | Date |
|---|---|---|---|
| YouGov, GB Halloween spending and shopping trends (n=2,069, fieldwork 23–24 Sep 2025) | Poll, subject-specific | 51% don't celebrate; activity shares; £ spend; 57% a week before; 81% more commercialised; 48% "not a GB tradition" | 2025-10-06 |
| YouGov, How do Britons feel about Halloween? | Poll, subject-specific | 66% not celebrating; 10% Americanism; Bonfire Night 44% vs 16% | 2024-10-31 |
| Hsu et al., IJERPH 18:9093, via Europe PMC PMC8430693 | **Peer-reviewed, open access, full text read** | UK STATS19 1990–2017, n=73,587; 17:00–19:00 peak; KSI +34.2% at 17:00–17:59 | 2021-08-28 |
| Simon Rodway (Aberystwyth, Celtic Studies), The Conversation | Scholar-authored | Nos Galan Gaeaf customs; Halloween's Christian dating; no Samhain in Wales | 2023-10-30 |
| Pamela O'Neill (Sydney, Celtic Studies), The Conversation | Scholar-authored | Guising, turnip lanterns, 18th-century records, emigration. Error: calls 1 Nov "All Souls' Day" | 2025-10-27 |
| nidirect, Fireworks | NI government | Licence needed; Halloween display application deadline | undated |

**Tried and not usable:**
- Hutton, *Stations of the Sun*, "Samhain" chapter (OUP, 1996): abstract truncated (403 and paywall); Internet Archive copy is lending-only.
- Santino 1996, "Light up the Sky: Halloween Bonfires… in Northern Ireland" (Western Folklore, JSTOR): paywalled.
- OpenAlex: rate-limited.
- Middleton 2023 (Glasgow) on Victorian Halloween foods and souling: read, but dropped to stay within the 6-source cap.
- gov.uk fireworks law (Bonfire Night midnight curfew; no Halloween exemption) and gov.uk clock-change dates: read; clock dates used unlinked.

**Search terms tried:** "Halloween Britain Americanisation trick-or-treating", "Samhain Celtic calendar festival evidence", "Halloween history folklore Scotland guising", "Hutton Halloween Samhain origins", "Bonfire Night Guy Fawkes commemoration", "Halloween Wales Nos Calan Gaeaf", "fireworks injuries Northern Ireland Halloween", "Halloween Northern Ireland", "souling soul cakes All Souls".

**No source found for** trick-or-treating's arrival in the UK "since the 1980s". The body says this plainly.

## Brief claims checked

- "Nos Calan Gaeaf": the attested form after *Nos* is **Nos Galan Gaeaf** (soft mutation). The post uses Galan and notes the variant in an FAQ.
- Calendar: Sat 31 Oct and Thu 5 Nov 2026; Sun 31 Oct and Fri 5 Nov 2027. UK clocks go back 25 Oct 2026 and **31 Oct 2027** (gov.uk).
