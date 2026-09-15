# Research brief — `long-distance-relationship-gifts-online-free`

Batch `2026-09-15-virtual-gift-30`, wave 2. Keyword: **long distance relationship gifts online free**.
Secondaries: `long distance relationship gifts online`, `long distance relationship gift online`, `long distance gifts website`.
Category: `miss-you-across-miles`. Templates: `/templates`, `/streak`, `/catch`.

## Phase 1 — SERP analysis: NOT PERFORMED, and why

**No page in the top 5 for this keyword was read.** WebSearch is exhausted at 200/200
and will not refill; `scripts/serp.mjs` was not called, per BRIEF-WAVE2 §0, because the
Brave key is hard-throttled and six agents already lost over an hour to retries that
returned nothing. `SERPS-WAVE2.md` contains no section for this keyword.

Nothing in this brief or in the post claims a competitor read. Checklist items 2 and 4
are recorded as **failed** for exactly this reason.

Substituted evidence, all of it real and all of it local:

| Source | What it gave |
|---|---|
| `BRIEF-WAVE2.md` §5 | Page-type mix for the "website for …" and "digital gift for …" clusters |
| `BRIEF.md` §1 | The live India competitive set (gifft.me, qlovy.com, surprises.gift, ourgiftverse.com, digiflower.net, giftsqr.com, blog.messagear.com) and the fact that Reddit/Quora/Pinterest hold 4–6 of every 10 results |
| `content/keywords/2026-09-15-virtual-gift-100/ac*/autocomplete.csv` | Real India-geo demand; the PAA substitute |
| `blogs/` (36 sibling posts) | Each sibling's own competitive read, and every source already spent |

### What the India autocomplete actually shows

Grepping the long-distance stem out of the autocomplete CSVs returns a dense cluster
around price and platform, not around sentiment:

- `best long distance relationship gifts online` — three separate prefixes converge on it
- `anniversary long distance relationship gifts online`
- `best gift for long distance relationship under 200`
- `best gift for long distance relationship meesho`
- `anniversary gift website free`, `anniversary gift certificate template free`
- `best gift for long distance relationship reddit`

Read together: the modifier attached to this cluster in India is **cost** (`under 200`,
`free`, `meesho`) and **platform** (`website`, `online`, `reddit`). That is the fan-out
this post was built to answer.

## Phase 2 — Gap and angle

Every adjacent page — the six wave-2 long-distance siblings, the wave-1
`long-distance-gift-ideas-no-money`, and the live `/blog/long-distance-romantic-gift-online`
— answers some version of *what should I send*. None of them answers the question the
word **free** is actually asking, which is a question about the service, not the gift:
*when this site says free, what does that cover?*

**Angle:** wins by being the only post that reads "free" as a property of the gifting
service rather than of the giver's wallet — naming the four shapes free takes online,
giving six one-minute checks to run before sending the link, and stating plainly that it
cannot confirm a SubhSandesh price because the pricing block of its own data file is empty.

### Fan-out sub-queries → H2 map

| Sub-query | H2 |
|---|---|
| are these sites actually free | What "free" covers on a long distance gifts website |
| what should I check before sending a free gift link | Six checks before you send a free long distance gift link |
| how much does it cost / is there a free tier | What we can and cannot tell you about the price |
| free online vs free offline | Free online against free offline: what each one costs |
| why does free feel better | Why the word "free" changes what you pick |
| does a free gift still land | What actually decides whether a distance gift lands |
| when should I not send a link | Where a free online gift is the wrong call |

## Phase 2b — Cannibalisation (BRIEF-WAVE2 §3)

`nearestLive` = `/blog/long-distance-romantic-gift-online`, read with `ctx_fetch_and_index`.
It is a 15-idea romantic gift listicle with a build-and-send walkthrough, a quick
comparison of which idea fits which partner, message-writing and timing advice, and a
troubleshooting section. It carries no cost dimension at all.

**Decision: differentiate.** The live page answers *what romantic thing do I send and how
do I build it*; this page never lists gift ideas and answers *what is the word "free"
promising on a long-distance gifting site, and how do I check it before I send*. The live
page is linked from the final section as the ideas companion, so the two reinforce rather
than compete.

**Separation from the wave-1 sibling `long-distance-gift-ideas-no-money`:** that post
answers a constraint on the *giver* — "I have zero rupees" — with seven effort-based,
largely offline substitutions priced in hours. This post answers a claim made by a
*website* — "this is free" — with a verification procedure. They share no H2, no source,
and no template beyond `/streak`, which this row was assigned. The no-money post also
declines to price SubhSandesh; this one goes further and explains the four shapes of
"free" that make the question ambiguous in the first place.

## Phase 3 — Sources

Discovery without a search engine, per BRIEF-WAVE2 §1b. OpenAlex and Semantic Scholar were
not attempted (both 429 from this sandbox, per the brief). Queries actually run:

- **Europe PMC**: `long distance relationship maintenance mediated communication`,
  `freemium hidden cost free digital service consumer`, `"long-distance" romantic relationship`
- **Crossref**: `zero price effect free product consumer decision`,
  `long distance relationship technology intimacy maintenance`,
  `reference rot persistence of web links over time study`,
  `long distance dating couples videochat closeness experiment`,
  `cherished digital possessions loss platform closure personal archives`
- **DOAJ** (2–3 words): `link rot`, `url persistence`, `digital gift`, `gift giving online`,
  `freemium`, `long distance relationship`, `relationship maintenance`, `digital possessions`,
  `digital legacy loss`, `privacy free apps`
- **OpenAIRE**: `long distance romantic relationship maintenance technology`

Every landing page below was opened with `ctx_fetch_and_index` and the cited claim was read
off the page before it was written. Domains checked against `SPENT-SOURCES.json` and all 36
sibling JSONs first: **all five domains are new to this 60-post batch.** `hbs.edu` stands at
2 and was deliberately not taken to 3; `europepmc.org` (5), `arxiv.org`, `pmc.ncbi.nlm.nih.gov`,
`journals.plos.org`, `frontiersin.org`, `pewresearch.org` and `gsb.stanford.edu` were all
excluded as at or over cap.

| # | Source | Claim used | Published |
|---|---|---|---|
| 1 | `journal.psych.ac.cn` — Yang & Wang, *Advances in Psychological Science* 31(3) | Zero-price effect: when all prices drop equally and one hits zero, the share choosing the free option rises beyond the price change; the review covers the classic effect, bundled promotion and freemium | 2023-03-15 |
| 2 | `jsi.cs.ui.ac.id` — Harahap et al., *Jurnal Sistem Informasi* 21(2) | 507 Indonesian social-media users surveyed plus 30 interviewed; functionality, advertising intrusiveness, relative advantage, price value, switching cost and social influence drive freemium→premium switching | 2025-10-01 |
| 3 | `liberquarterly.eu` — Bhat, *LIBER Quarterly* 19(2) | 32.09% of web citations in five OA journals were missing; 74.14% of those returned HTTP 404; ten-year-old papers worst at 39.96% | 2009-10-13 |
| 4 | `repository.lsu.edu` — Mapp, LSU doctoral dissertation | n=181 in long-distance or geographically close relationships; proximity did not discriminate for forgiveness, empathy or relational satisfaction, but use of imagined interactions significantly predicted forgiveness and relational satisfaction | 2013 |
| 5 | `journalqd.org` — Herdağdelen, Adamic & State, *Journal of Quantitative Description: Digital Media* 3 | Facebook Buy Nothing groups: millions of members, lower friendship density than other local groups, interaction graphs with large strongly connected components indicating generalised reciprocity | 2023-12-07 |

**Abstract-level disclosure.** All five are open access. For sources 1, 2, 4 and 5 the
abstract and landing-page record were read rather than the full text, and every claim in
the post is drawn from that abstract text — nothing is inferred past it.

Zero competitor links. Zero Wikipedia links in the body (Wikipedia appears only as
`sameAs` inside `structuredData`, verified against the Wikipedia API: Long-distance
relationship Q1406917, Freemium Q1444631, Gift Q184303, Link rot Q1193907).

## Phase 4 — First-party data

Facts used, verbatim from `content/facts.md`:

- 3,377 registered creators — measured 2026-09-15
- Average pages per registered creator: 1.29 — measured 2026-09-15
- 49.0% of shared pages are opened on a phone (24,493 of 49,968 views) — measured 2026-09-15
- 40.6% of creators password-protect their page before sharing it (1,767 of 4,357) — measured 2026-09-15
- 4,357 personalised pages created since 2026-03-12, across 16 page types — measured 2026-09-15
- Average views per created page: 11.5 — measured 2026-09-15
- Occasion-dated pages, every festival plus every wedding type, are 144 of 3,894 pages, 3.7%; the platform is 96.3% romantic and everyday pages — measured 2026-09-09

The two in the first 150 words are the **3,377 creators / 1.29 pages each** pair and the
**49.0% phone** line — both flagged in BRIEF-WAVE2 §4 as under-used, and neither is the
40.6%/6.2-hour pair the wave-1 siblings lean on. The 40.6% password figure appears once,
late, inside the check it actually belongs to.

**The pricing constraint.** `content/facts.md` "## Pricing (fill in by hand)" is empty:
no free-tier description, no paid-tier figure. The post therefore states in the body — not
only here — that it cannot confirm current pricing, and sends the reader to `/templates`
to read it from the live page. No price, no free tier and no paid tier is stated or implied
anywhere in the article, the FAQs or the metadata.

## Phase 5 — Links and templates

Template descriptions were read from `app/lib/prompt.ts` before writing:

- `/catch` — "a letter that falls from the sky one line at a time, caught with the
  recipient's own face; nothing is ever locked, each catch just adds a line". Described in
  the post as a format that forces you to write in fragments; no claim that it is locked or gated.
- `/streak` — "two people, one tap a day; the streak grows, each check-in keeps a word, and
  after a hundred days you have a diary neither of you meant to write". Described as the
  ongoing rather than single-evening option.
- `/templates` — the gallery, linked in the pricing section (where the reader must go to
  read the real price) and again as the closing CTA.

Blog cross-link: `/blog/long-distance-romantic-gift-online`, the `nearestLive` page. Per
BRIEF-WAVE2 §3 this is separate from the 2–4 template-link count.

## Phase 6 — Audit summary

46 passed, 4 failed, disjoint, 50 total. The four failures:

1. **at least one claim none of the top 5 pages make** — unverifiable, no SERP.
2. **no section mirrors a competitor's structure** — unverifiable, no competitor page opened.
3. **metaTitle: exact keyword in first five words** — the keyword is six words; it leads the
   title from word one at 55 characters, which is the strictest placement available.
4. **swap test** — four of five sources are angle-locked to "free"; the LSU long-distance
   dissertation would sit unchanged in an adjacent long-distance row.

Body word count 1,775 (plain split), FAQs 11, outbound links 5, template links 4, blog
cross-links 1, comparison table 4 rows with a first-party column.
