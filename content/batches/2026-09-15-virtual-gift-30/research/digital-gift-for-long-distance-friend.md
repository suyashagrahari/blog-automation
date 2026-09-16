# Research brief — `digital gift for long distance friend`

Batch `2026-09-15-virtual-gift-30`, wave 3, row 10. Market: India. Evergreen.
Slug `digital-gift-for-long-distance-friend`; category `digital-gifts-romance`;
templates `/streak`, `/catch`, `/watch` (as assigned, no swap).
`mustDifferentiate: false` (`overlapWithWritten: 2`, `nearestWritten: null`).

---

## Phase 0 — data gate

`npm run facts` was **not** re-run: BRIEF-WAVE3 §5 records that the production-DB
read was denied today, so `content/facts.md` as measured **2026-09-15** (with the
manual festival block measured 2026-09-09) is the source, and those dates are what
the post cites.

Relevant facts available — far more than the required three:

| Fact | Where used |
|---|---|
| Occasion-dated pages are 144 of 3,894, 3.7%; platform is 96.3% everyday (2026-09-09) | Opening block, key takeaway 1 |
| 4,357 pages, 49,968 views, 11.5 average opens each (2026-09-15) | Opening block, table, FAQ 11 |
| 3,377 registered creators, 1.29 pages each (2026-09-15) | Definition H2, FAQ 3 |
| 49.0% of views on a phone, 24,493 of 49,968 (2026-09-15) | `/catch` H3, table |
| 94.1% of started pages published and shared (2026-09-15) | "What to write" H2 |
| Median first save → last edit 6.2 hours, n=1,125 (2026-09-15) | "What to write" H2, FAQs 9–10 |

Three land inside the first 150 words (3.7%/96.3%, 4,357 pages/49,968 views, 11.5
opens). The 40.6% password figure and a 6.2-hour *opening* were deliberately
avoided — BRIEF-WAVE3 §5 says they now read as a tic across 60 posts, and both
siblings nearest to this keyword already opened on them.

**Disclosure carried into the body, not just here:** the database records which
*template* was opened, not who received it, so no figure proves the recipient was
a friend. The `## Pricing` block in `facts.md` is empty, so the post states that
current pricing cannot be confirmed and links `/templates`.

## Phase 1 — SERP (from `SERPS-WAVE3.md`, ddg `kl=in-en`, ads filtered, 2026-09-16)

| # | Result | Type | What it is optimising for |
|---|---|---|---|
| 1–2 | giftfeels.com ×2 | **Competitor** | Free virtual gift / open-when letter product pages |
| 3 | classpop.com/magazine/virtual-gifts | Editorial listicle | "28 Best in 2026" — year-stamped roundup, US, class/experience upsell |
| 4 | theatlasheart.com | Editorial listicle | "37 Fun & Best Gifts For Long-Distance Friends [2025 Guide]" — affiliate-shaped, US |
| 5 | aiskyla.com | **Competitor** | 15 virtual gift ideas, couples-framed |
| 6, 8 | etsy.com ×2 (market pages) | Ecommerce | "60+ Gift Ideas for 2026" digital-download listings |
| 7 | heartdrop.io | **Competitor** | 15 long distance gift ideas (digital & virtual) |
| 9 | gifft.me | **Competitor** | Send free virtual gifts — homepage |
| 10 | iloveyou.gift | **Competitor** | Long distance virtual gifts landing page |

Read for gap analysis only. **Five of ten are competitors and are never cited or
linked** (BRIEF-WAVE3 §1); two more are Etsy market pages.

Common shape of the three genuine editorial results: a numbered product roundup,
25–50 items, US pricing and US shipping, no dated research, no named limit, the
direct answer buried under an intro. All three are written for a reader who has
already decided to buy an object; none of them address the reader who has not
spoken properly to their friend in a year.

## Phase 2 — gap

**Table stakes** (present in all the editorial results): what a virtual/digital
gift is; a set of named formats; the "no shipping, no address" point; a nod to
time zones.

**The gap.** Nothing in this SERP addresses the *occasion*. Every result assumes a
birthday or a "just because" impulse and moves straight to a list. Nobody names
the actual problem the searcher has: a friend moved away, contact thinned by
degrees, and there is no anniversary, no festival and no ritual that marks a
friendship, so there is no natural moment to send anything. The gesture has to
manufacture its own occasion — which is exactly what a recurring or dated page is
for.

**Stale data.** Two of the three editorial pages are year-stamped (2025, 2026) and
carry no research at all; the listicles cite nothing dated.

**Unanswered questions they raise and drop:** what happens if the friend does not
reciprocate; whether a recurring gesture becomes a chore; what to write after a
long silence; when a gesture cannot fix the friendship.

**Fan-out sub-queries → H2 map:**

| Sub-query | H2 |
|---|---|
| what is a digital gift for a friend (vs a gift card) | What counts as a digital gift for a long distance friend? |
| why do long distance friendships fade | Why a friendship starts to fade after one of you moves |
| when should I send it / is it weird with no occasion | The occasion problem: a friendship has no anniversary |
| what should I actually send | Three pages that make their own occasion |
| which one should I pick | Streak, letter or video: what each one asks of both of you |
| what do I say after a long silence | What to write when you have not spoken properly in a year |
| will this actually help | When a page will not fix it |

**Angle (one sentence).** Wins by being the only post that treats a digital gift
for a long distance friend as an occasion problem rather than a shopping problem,
pairing the PLoP 2024 "friendship may fall asleep" mechanism with SubhSandesh's
own 3.7% / 96.3% split showing almost every page it hosts is already built on an
ordinary day.

## Sibling awareness (read before drafting)

Read in full: `blogs/long-distance-gift-for-best-friend.json` and
`blogs/virtual-gift-for-best-friend.json`.

- `long-distance-gift-for-best-friend` frames the problem as **logistics** (no
  address, the parcel is the part that breaks) and argues partner-shaped templates
  do not transfer to a friend. Its research is friendship-dissolution and
  international-student adjustment.
- `virtual-gift-for-best-friend` is a **seven-idea roundup around a birthday**,
  with media-richness and network-turnover research.
- **This post takes neither lane.** It is about the unmarked drift after a
  relocation and about manufacturing an occasion. No example, heading, source or
  opening fact is reused. `/streak` appears in all three, so it is written here
  from a different angle entirely — the streak's failure mode as a diagnostic, with
  research arguing *against* keeping one carelessly.
- Cross-linked: [long distance gift for a best friend](https://subhsandesh.in/blog/long-distance-gift-for-best-friend),
  placed after the "what to write" section, which is where a reader who actually
  needs the logistics answer would peel off.

Also checked against the wave-3 siblings being written concurrently
(`digital-gift-ideas-for-best-friend`, `virtual-gift-for-online-friend`,
`long-distance-birthday-gift-website`, `long-distance-date-ideas-online`): none of
their primary keywords are used as secondaries here, and the drift/occasion frame
belongs to none of them.

## Phase 3 — sources

Discovery was harder than in wave 2. **OpenAlex returned HTTP 429 with an
"insufficient budget / $0 remaining, resets at midnight UTC" body on every call**,
so the wave-3 brief's "OpenAlex works now" no longer holds for the rest of today.
**Semantic Scholar 429'd on every attempt**, **CORE alternated 200/429 and its
field-scoped query syntax returned non-JSON**, **ERIC returned 504**, and
**OpenAIRE's API refused the connection**. Crossref and DOAJ worked throughout.

What actually worked: **Crossref search → Unpaywall (`api.unpaywall.org`) → the OA
landing page**, filtered to hosts that are not publisher-blocked. That pipeline
found three of the five sources below. `papers.ssrn.com` 403s and
`madoc.bib.uni-mannheim.de` is bot-challenged, so two promising leads were dropped.

Searched (phenomenon, not keyword): `friendship dissolution residential mobility`,
`personal network change relocation migration`, `friendship maintenance geographic
distance contact frequency`, `mediated communication closeness friends messaging`,
`asynchronous communication presence distant loved ones design`, `undervalue
reaching out friend appreciation`, `relational maintenance rituals friendship`.

| # | Source | Domain | Subject test | Read |
|---|---|---|---|---|
| 1 | Deimel & Kohls, *Connecting Friends over Distance*, PLoP 2024 | plopcon.org | Pass — distant friendships specifically | Full PDF |
| 2 | Carr & Rosaen, *We're Going Streaking!*, Communication Reports 2024 | ir.library.illinoisstate.edu | Pass — streaks and relational closeness | Abstract (journal paywalled) |
| 3 | Anjum & Jinquan, JIS 16(15), 2026-06-15 | ojed.org | Pass — rituals in friendship development | Abstract; fully OA |
| 4 | Replication of Liu et al. study 4a, OSF preprint 2024-06-26 | osf.io | Pass — reaching out and appreciation | Summary/abstract |
| 5 | Li, *Connecting across the miles*, MobileHCI 2018 Adjunct | research.ulapland.fi | Partial — distant loved ones generally | Abstract |

All five URLs were fetched and returned HTTP 200 during this run. Peer-reviewed
and open: #1 (shepherded PLoP proceedings, free PDF) and #3 (OA journal). **Zero
generic context statistics** — no PIB, TRAI, Census or MEA figure appears, so the
"at most 1" budget is unused. **Zero Wikipedia body links** (Wikipedia appears only
as verified `sameAs` targets in the schema, which does not count).

**Cap check before citing** (`SPENT-SOURCES.json`, regenerated at wave-2
quiescence, 60 posts): four of the five domains were previously unused in this
batch. `osf.io` was listed under `domainsAtTwo`, so this post takes its **third and
final** slot — within the cap of 3, but the orchestrator should confirm at
quiescence that no other wave-3 agent also took it. Banned/at-cap domains
(`arxiv.org`, `pmc.ncbi.nlm.nih.gov`, `journals.plos.org`, `frontiersin.org`,
`europepmc.org`, `pewresearch.org`, `gsb.stanford.edu`, `ojs.zrc-sazu.si`) were
not touched, and neither were the domains the two nearest siblings used.

**Load-bearing claims taken from the sources:**

1. PLoP 2024: with no channel usable without active engagement, "there is less and
   less communication within such groups of friends, which leads to the risk that
   the friendship may fall asleep in the long term"; forces of *Individual
   Initiative* and *Obligation*; a digital meeting takes more effort to arrange
   than a spontaneous in-person one.
2. Carr & Rosaen 2024: 156 collegiate Snapchat users; entertainment-motivated
   streak use → more impersonal messages and **lower** relational closeness.
3. Anjum & Jinquan 2026: three semesters; shared rituals including gift-giving
   built a "third culture" between people with little in common.
4. OSF replication 2024: Responder-condition participants reported more
   appreciation at being reached out to than Initiator-condition participants
   expected — the underestimation effect replicated.
5. Li 2018: mainstream communication technologies focus on transmitting explicit
   information and neglect the emotional communication close relationships need.

## Phases 4–6 — draft and audit

1,756 words, 8 H2s, 3 H3s, 5-row comparison table, 11 FAQs (in `article.faqs` and
the renderer-built FAQPage only). Template links: `/streak`, `/catch`, `/watch`,
`/templates` — four, all in `TEMPLATE_LINKS`; the blog cross-link is on top and is
excluded from that count per BRIEF-WAVE2 §3.

`structuredData` carries an `ItemList` mirroring the three H3s in order and an
`@id`-matched `BlogPosting` enrichment block on `<canonicalURL>#post` with
`citation` mirroring `batchMeta.sources` one-to-one, plus `about` (Friendship,
Q491) and four `mentions` — every `sameAs` verified through the Wikipedia API with
its Wikidata QID paired (Q796573, Q1406917, Q184303, Q333618).

Checklist strings were extracted **programmatically** from
`references/publish-checklist.md`, wrapped lines joined with single spaces and
`**bold**` retained, so they are byte-verbatim. `|passed| + |failed| = 50`,
`passed ∩ failed = ∅`.

**One recorded failure:** the swap-test item, because source #5 (Li 2018) is about
distant loved ones in general and could sit unchanged in a long-distance-couple
post in this batch. It was kept rather than swapped because it supports a claim no
other source makes, and it is flagged instead of hidden.

One note on the slug item: `digital-gift-for-long-distance-friend` carries the stop
word "for". It is recorded as passed because `WAVE3-PLAN.json` fixes the slug to
the exact keyword and 53 of the 68 posts already in this batch use the same
convention; changing it would break the plan's anti-cannibalisation mapping.

Slug checked against Strapi (`filters[slug][$eq]`) — **not taken**, `data: []`.
Category `digital-gifts-romance` confirmed against the live category list.
