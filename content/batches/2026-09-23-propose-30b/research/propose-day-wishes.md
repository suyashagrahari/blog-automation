# Research brief — `propose day wishes`

- **Batch:** `2026-09-23-propose-30b` (wave 3 on the propose/proposal territory)
- **Slug:** `propose-day-wishes` — checked against Strapi on 2026-09-23, 0 results, free
- **Category:** `modern-romance`
- **Band:** 10,000+ EST (joint-highest volume in the run). A band, not a measured volume.
- **Role in the cluster:** this is the **hub / head term** for the whole wishes cluster.

---

## Phase 0 — first-party data gate

`content/facts.md` was regenerated 2026-09-23 and **the ranking changed since wave 2**.
`/apology-dashboard` is now #1 (1,347 pages, 26.6%), `/love-gf` #2 (1,173, 23.2%). The
6.4-hour `/love-gf` build gap quoted by waves 1–2 no longer exists; today's figure is a
**2.4-hour median sampled on `/apology-dashboard`, n=1,348**.

Facts used (verbatim in `batchMeta.factsUsed`), all labelled in body prose as
platform-wide across 20 page types or sampled on the named template:

1. 5,061 personalised pages since 2026-03-12, across 20 page types
2. 91.2% of started pages published and shared (4,615 of 5,061)
3. 38.7% password-protect before sharing (1,961 of 5,061)
4. #1 page type `/apology-dashboard` — 1,347, 26.6%
5. #2 page type `/love-gf` — 1,173, 23.2%
6. Median first-save → last-edit gap 2.4 hours, sampled on `/apology-dashboard`, n=1,348
7. 48.4% of views on a phone (27,185 of 56,152)

Gate passes: 3 facts sit inside the first 150 words (1, 2, 3).

**No proposal-specific figure exists**, and the body says so twice — once in the answer
paragraph and once above the comparison table. The pricing block in `facts.md` is still
empty, so the post states and implies no price, free tier or paid tier. The Raksha
Bandhan lead-time block is out of bounds for this batch and was not used.

---

## Phase 1 — SERP analysis: NOT MEASURED

**No WebSearch call and no competitor fetch was made for this keyword.** The session
budget was 5 WebSearch calls and none was spent; Crossref and Europe PMC via
`findpapers.mjs` carried the research instead.

The only India-served SERPs on record for this territory are the 11 measured on
2026-09-16 in `content/keywords/2026-09-16-propose-100/`. That predates this post and
was not re-run.

**Consequence, applied throughout:** nothing in the post describes what a competing page
contains, what it omits, or where it ranks. Two checklist items are recorded as
`failed` because of it (see below) rather than passed on an unmeasured assumption.

---

## Phase 2 — Cannibalisation and the angle

Two wave-2 siblings were read in full before drafting.

| | `propose-day-wishes-for-boyfriend` | `propose-day-wishes-in-hindi` | **this page** |
|---|---|---|---|
| Recipient | one — an existing boyfriend | all, grouped by recipient | all, covered briefly, then routed out |
| Organising axis | job the message does (plain / specific / funny / LD / no-hint) | pronoun and recipient (तुम / तू / आप) | **hour of the day it is sent** |
| Lane | affection exchange, public-vs-private | greeting obligation, Hindi register | **chronemics — timing and response expectation** |
| Lines | 20, girlfriend → boyfriend | 10, Devanagari + Roman + gloss | 15, English, 5 send windows |
| Language | English | Hindi | English |

**How this page differs in intent, structure and sources:**

- **Intent.** A recipient page answers "what do I send *him*". A hub has to answer the
  prior question: *what kind of object is a Propose Day wish at all?* The page opens by
  separating **wish / quote / proposal / shayari** and never resolves into a recipient list.
- **Structure.** Neither sibling organises by time. Sorting by send window is an axis
  that follows directly from the research lane and is not reusable by either sibling.
- **Sources.** Zero overlap. The siblings cite PLOS, Nature, SAGE relationship-science
  and Hindi NLP papers; this one cites chronemics and response-latency work only.
- **Routing.** Both siblings are linked by slug from the table section, with one line
  each saying what they cover that this page deliberately does not.

**Angle sentence:** wins by being the only Propose Day wishes page that separates a wish
from a quote, a proposal and a shayari and then sorts 15 original lines by the hour of a
working Monday they suit — grounded in chronemics research on what a delayed reply
signals, and in SubhSandesh's platform-wide figures.

**Fan-out sub-queries the H2s answer** (constructed from the keyword, the brief and the
siblings — *not* from a measured SERP or a PAA panel, which is why checklist item 13 is
recorded as failed): what is a Propose Day wish; when is Propose Day 2027; what do I
send; who can I send it to; which page fits which recipient; what does it mean if they
do not reply; when should I not send one.

---

## Phase 3 — Sources

`capcheck.mjs` was run before choosing sources and again before finalising. None of the
194 banned wave-1/2 URLs is used; no domain here appears in waves 1–2.

Search was `findpapers.mjs` (Crossref + Europe PMC) on: `chronemics computer-mediated
communication response latency`, `message response time relational interpretation
texting`, `waiting for a reply anxiety text messaging expectation`, `chronemic expectancy
violations online pauses silence`, `greeting timing politeness mobile messaging study`,
`circadian diurnal rhythm of mobile phone communication activity`, `inter-event time
reply patterns human communication dynamics`, `instant messaging response time norms
workplace expectations`.

| # | Source | What it actually says | Read | Test |
|---|---|---|---|---|
| 1 | Kalman & Rafaeli, *Communication Research*, Feb 2011, `doi:10.1177/0093650210378229` | E-mail latency is an expectancy violation: replies at 1 day / 2 weeks / silence >1 month were read differently depending on the recipient's reward valence. Norms-based definition of online silence, not a fixed threshold. | Abstract via Crossref-deposited record; sagepub 403 | subject ✓ |
| 2 | Wang, *J. Social & Personal Relationships*, 29 Jul 2026, `doi:10.1177/02654075261472148` | 333 adults; disclosure later than the recipient's *ideal* associated with lower latent general trust, β = −.27; perceived timing appropriateness mediated 28.5% of the total effect. | Abstract via Crossref; sagepub 403 | subject ✓ |
| 3 | Kato, Kato & Ozawa, *IJTHI*, 1 Jan 2020, `doi:10.4018/ijthi.2020010103` | 213 female college students in Japan; negative emotions (sadness, anxiety, anger, guilt) arose in significantly less time waiting on a **read** message than an unread one. | Abstract via Crossref; IGI 429 | subject ✓ |
| 4 | Tatum, *JETDE* 14(1), 2021, `aquila.usm.edu/jetde/vol14/iss1/3/` | Positive chronemic violations — replying **faster than expected** — evaluated more favourably for credibility and relational closeness than negative violations. **Open access, page fetched HTTP 200.** | Abstract read on the article page | subject ✓, peer-reviewed OA ✓ |
| 5 | Pintér & Felde, *Information* 13(3):114, 26 Feb 2022, `doi:10.3390/info13030114` | Budapest call-detail records; a group's morning "wake-up time" is earlier on workdays than on holidays. Budapest, not India — said so in the body. | Abstract via Crossref; mdpi.com 403 | subject ✓ (timing of phone activity) |

- 4 of 5 pass the subject test; 1 is peer-reviewed **and** open-access with the page
  actually fetched (#4).
- **0 generic context statistics.** No PIB, TRAI, Census or MEA figure appears.
- **0 Wikipedia links in the body.** Wikipedia appears only as verified `sameAs` targets
  in `structuredData`, with Wikidata QIDs paired (Q37587, Q1057944, Q2018606, Q5420828,
  Q58199, Q1049511 — all confirmed against the Wikipedia API on 2026-09-23).
- **Swap test:** none of these could sit unchanged in another post in this batch. The
  timing/chronemics lane is unique to this page.
- The Frontiers ghosting RCT (`doi:10.3389/fpsyg.2025.1742356`) was sourced, read via
  Europe PMC and then **dropped**: `verify-batch.mjs` showed frontiersin.org would reach
  4 posts in this batch, over the 3-post domain cap. Tatum 2021 replaced it.

---

## Phase 4–5 — Draft decisions

- 1,791 words in `contentMarkdown`, FAQs excluded. 12 FAQs in `article.faqs` only.
- 7 H2s, 5 H3s. Each H3 carries the same four fields in the same order: **The window /
  Who it suits / Lines / What it risks.**
- Comparison table: 5 recipients × 4 columns, with the fourth column carrying
  first-party creation shares and an explicit "no proposal-specific figure published".
- **15 original wishes**, all written for this page. No competitor copy, no lyrics, no
  film dialogue, no quotation of any third party.
- **Template links.** `/proposal` is placed immediately after the table establishes who
  actually needs a built page. `/love-gf` is the honest alternative for a partner you
  already have. The body says plainly that for a friend or sibling **neither template is
  right and no template is** — plain text in your own words is the answer. `/templates`
  catches everything outside the five rows.
- Two cluster cross-links to the sibling slugs. Both are `/blog/...` paths, not
  TEMPLATE_LINKS, and neither is live in Strapi yet — recorded as a failure, not hidden.

---

## Phase 6 — Audit summary

44 passed / 6 failed, disjoint, summing to 50. Failed, with the honest reason:

1. **"The post contains at least one claim none of the top 5 pages make"** — no SERP measured.
2. **"H2s map to the fan-out sub-queries identified in Phase 2"** — fan-out was constructed, not measured.
3. **"metaTitle differs from the H1, uses one separator, and carries a differentiator no competitor could claim"** — differs and uses one separator, but the differentiator is editorial framing, not an unclaimable one, and no SERP was measured to check.
4. **"3–6 outbound links, all fetched and verified to contain the cited fact"** — 4 of 5 publisher pages bot-blocked; verified against Crossref-deposited abstracts instead.
5. **"2–4 internal links with descriptive anchor text, placed after value is established"** — 5 links, because the hub is required to route to two siblings.
6. **"Every internal link is a real URL from TEMPLATE_LINKS"** — two are sibling blog paths.

Batch-level limitations are in `batchMeta.structuralLimitations`, not in `failed`.

## Honest assessment

`propose day wishes` is a copy-text query with near-zero conversion intent: the searcher
takes a line and leaves. This page should be judged on impressions and on holding the
head of the cluster, not on pages created. It has a real editorial claim — the
wish/quote/proposal separation, the send-window structure and four first-party figures
nobody else can print — but subhsandesh.in is far below the news and wishes publishers
that own this February cycle, and no SERP was measured, so nothing here forecasts a
position.
