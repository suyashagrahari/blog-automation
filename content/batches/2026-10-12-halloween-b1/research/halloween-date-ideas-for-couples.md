# Research brief — halloween date ideas for couples

- Slug: `halloween-date-ideas-for-couples` · theme couple · absorbs "halloween date night ideas for couples", "cute halloween date ideas for couples"
- Run: 2026-10-12 · batch `2026-10-12-halloween-b1` · Strapi slug check: free (empty `data`)
- Searches used: **1** (Firecrawl, `location: "United States"`, limit 10, web only). No WebSearch. Corroborated by `content/keywords/2026-10-12-halloween-global/serps.md` row "halloween date ideas for couples" (6 weak).

## Phase 0 — first-party data
facts.md has no Halloween data (per BRIEF §3). Used, byte-verbatim:
1. Raksha Bandhan 2026 lead time: 49.4% built on the festival day itself (labelled in body as nearest festival analogue, n = 89).
2. 48.3% of shared pages opened on a phone (27,725 of 57,456) — 2026-09-24.
3. Not one of 89 Raksha Bandhan 2026 pages built more than 7 days ahead.
Two (1, 2) sit in the first 150 words. Template-spec features of /happy-halloween used as product fact only.

## Phase 1 — SERP (US, Firecrawl, 2026-10-12)
| # | URL | Type | Weak? |
|---|---|---|---|
| 1 | fridaywereinlove.com/20-halloween-date-ideas | blog listicle (21 ideas) | no |
| 2 | reddit r/halloween thread | forum | **weak** |
| 3 | thepioneerwoman.com …/halloween-date-ideas | Hearst listicle (31) | no |
| 4 | pinterest ideas page | pin board | **weak** |
| 5 | getpottd.com.au … at-home | AU shop blog, at-home intent | **weak** |
| 6 | wmca.com … 7 date night ideas | radio-station blog (7) | no |
| 7 | facebook group post | social | **weak** |
| 8 | classpop.com/magazine/Halloween-date-ideas | class marketplace, titled 2026 | no |
| 9 | pinterest pin | pin | **weak** |
| 10 | screams.org/2020/… | single-venue haunted attraction, 2020 | **weak** |
Weak count: **6/10** — matches the prompt's claim.

### Top-5 page analysis (fetched with ctx_fetch_and_index)
| Page | Length / structure | Direct answer | Data cited | Format | Tone / optimising for |
|---|---|---|---|---|---|
| fridaywereinlove | ~2.5k words, 21 H3 ideas mixing home and out | after a personal intro | "the study that adrenaline helps you feel in love" — unnamed | list, images, affiliate | first person; Pinterest traffic |
| Pioneer Woman | 31 H2 ideas, one paragraph each, title says 2025 | after 3-paragraph intro | none | gallery, shop links (Amazon) | third person; affiliate commerce |
| WMCA | 7 H2 ideas, ~1.2k words, dated 13 Oct 2025 | none, straight to list | none | list | devotional/marriage blog |
| Classpop | 31 ideas in 5 H2 groups + FAQ, updated 2 Jan 2026 | first para cites Dutton & Aron via Psychology Today | Dutton & Aron (1974) via secondary blog | list, FAQ, class CTAs | sells paint-and-sip/cooking classes |
| Field of Screams | 3 ideas, ~600 words, 2020, COVID closure note | none | "Rated #1 by Washington Post" | promo | sells its own tickets |

## Phase 2 — gap
- **Table stakes:** pumpkin patch/carving, haunted house, corn maze, hayride, scary movie, costumes.
- **Gap:** no page compares the dates on a common scale (time, scare level, who it suits); none gives price ranges with a source; none covers UK/AU/IN (AU spring, IN club nights, UK Bonfire Night); none gives booking timing for the last two weeks of October; all mix at-home and out, and all cite the fear-attraction idea only via secondary blogs or not at all. Nobody reports that the 2026 *Emotion* haunted-attraction studies found tiny/null measured closeness change.
- **Stale:** Pioneer Woman titled 2025; screams.org 2020 with COVID closure; WMCA Oct 2025.
- **Fan-out sub-queries:** what counts as a Halloween date; which dates are not scary; how long each takes; how much it costs; how far ahead to book; does a scary date bring you closer; what to do in UK / Australia / India; how to invite them.
- **Sibling split:** this page = dates you go out for. At-home formats (`halloween-date-ideas-at-home`), 21+/after-dark (`halloween-date-ideas-for-adults`), budget (`free-halloween-date-ideas`), general activities (`halloween-activities-for-couples`) are named in one line only; no /blog/ links.
- **Angle:** wins by being the only top-10 post that rates out-of-home Halloween dates on one scale (time, 0–3 scare, who it suits), covers US/UK/AU/IN, and gives a late-October booking countdown, grounded in SubhSandesh festival lead-time data and the 2026 haunted-attraction bonding study.

## Phase 3 — sources (all fetched)
| Source | Claim used | Read | Subject test | Swap test |
|---|---|---|---|---|
| Wiley et al., "Haunted attraction," *Emotion* (APA), online 2025-11-20 — europepmc.org/article/MED/41264500 | 5 studies at 3 commercial haunted attractions; fear + physical contact predict perceived closeness; pre-post closeness tiny/null; post-experience processing may matter | **abstract only** (closed access; OpenAlex `closed`) | pass | specific to haunted/scare formats |
| Balzarini, Sharma & Muise, *Behavioral Sciences* 2025-01-14 — PMC11761567 | novel/exciting shared activities → less boredom, more closeness (citing Aron 2000) | full text (Europe PMC XML) | pass (couples' shared activities) | **fails** — could sit in at-home sibling |
| Millán et al., *IJERPH* 2021-03-08 — PMC7967458 | Córdoba dark/ghost tourism: 91.6% very positive, 68.1% would repeat | full text (Europe PMC XML), CC BY | pass (ghost/cemetery tours) | specific |
| UNESCO ICH, Indigenous festivity dedicated to the dead | inscribed 2008 (proclaimed 2003); petals, candles, offerings; end Oct–early Nov | full page; no publication date | pass | specific |
| NRF press release 2026-09-22 | 74% plan to celebrate; 49% shop in September or earlier | full page | generic context stat (the one allowed) | fails (generic) |

Searched and rejected: "agritourism pumpkin patch corn maze visitors" (MDPI *Sustainability* 2025 segmentation paper — HTTP 403 on fetch, not cited); "recreational horror haunted attraction" (*Psychological Science* 2020 "Playing with fear" — Sage, banned by BRIEF §5); "dark tourism ghost tour" (book chapters, paywalled). No source gave cross-format ticket prices, so prices read "Check locally".

Wikidata/Wikipedia verified (API, 2026-10-12): Halloween Q251868; Haunted attraction Q1139917; Corn maze Q1885881; Day of the Dead Q309256; Dark tourism Q3042619. ("Ghost tour" missing; "Pumpkin patch" redirects to a company — not used.)

## Capcheck / verifier (2026-10-12)
capcheck: no banned URLs, no domain or URL at cap. verify-batch: this slug clean (1797 words, 10 FAQs, 47/3 audit); only batch-level note is batch.json vs disk (not ours to edit).

## Remediation pass (2026-10-12)
- Table: dropped the empty "Typical cost" column; split ghost walk and drive-in into separate rows and merged patch/maze/daytime hayride (still 5 rows). New "What the evidence says" column carries the sourced finding per format (Emotion, Millán 68.1%, UNESCO 2008) or "No study found"; time and scare headers labelled estimate/rating. Item moved to passed.
- Removed Balzarini (PMC11761567 — was in 3 batch posts, over the paper cap; also failed the swap test) and NRF (generic; nrf.com at domain cap). Outbound now 3.
- Re-searched prices via findpapers (Crossref + Europe PMC): "agritourism pumpkin patch admission price", "corn maze agritourism visitors expenditure", "haunted attraction ticket price" — no priced, fetchable source. Do not repeat.
- Still failed: first-party table column (no per-format data); swap test (UNESCO page also in halloween-activities-for-couples; Emotion study fits the adults sibling — cluster overlap).
- Body 1,797 → 1,756 words (plain split); studio wordCount 1,764 → 1,708. verify-batch 48/2; capcheck clean.
