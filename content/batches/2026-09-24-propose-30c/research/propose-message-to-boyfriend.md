# Research brief — `propose message to boyfriend`

Batch `2026-09-24-propose-30c` · categorySlug `modern-romance` · written 2026-09-24

---

## Phase 1 — SERP analysis: NOT RUN, and the post says so

No SERP was measured for this keyword. It is not among the 11 India-served SERPs
measured on 2026-09-16 (`content/keywords/2026-09-16-propose-100/serps.md`), and no
competitor page was fetched or read at any point. Consequently:

- The post describes no competitor position, heading, claim or date.
- The checklist item "No section closely mirrors a competitor page's structure or
  framing" is recorded in `failed`, not `passed` — nothing could be mirrored, because
  nothing was read, but nothing can be verified either.
- `honestAssessment` does not predict a ranking outcome.

Demand signal: this keyword came from the unselected remainder of the 4,788 raw
autocomplete suggestions, with **one prefix hit — ordinal only**. That figure is not a
volume and is not printed anywhere on the page. A page at this level of demand is a
long-tail catch and an answer-engine citation target, not a traffic line item, and
`honestAssessment` says that in those words.

---

## Phase 2 — Gap analysis, done against the corpus rather than the SERP

Since no SERP was available, the gap was established by measuring the two things that
could be measured: the live Strapi corpus and the two named sibling posts.

### Corpus measurement (first-hand, `content/keywords/strapi-live-articles.json`, n=905)

| Measured | Result |
|---|---|
| Slugs carrying a `propos*` token | **26** of 905 |
| Slugs carrying a `propose` token (not `proposal`) | **0** |
| Of the 26, slugs naming a girlfriend or crush as the person asked | 4 |
| Of the 26, slugs naming a boyfriend | **0** |
| Slugs carrying `boyfriend` | 15 — birthday, sorry, miss-you, anniversary; none propose |
| Slugs carrying both `message` and `boyfriend` | 5 — all sorry or miss-you |

**Correction to the task prompt.** The prompt (and the BRIEF) state that the live corpus
holds "46 proposal pages". By slug token the live corpus holds **26**. The prompt also
states that "effectively all are written to a man doing the asking"; what is actually
measurable is narrower and the post prints only that: four of the 26 name a girlfriend or
a crush as the person being asked, none names a boyfriend, and the rest are
recipient-neutral tool and template pages. The narrow version is what appears in the body.

### Sibling differentiation — the two named boyfriend posts

| | `propose-day-wishes-for-boyfriend` (wave 2) | `propose-day-quotes-for-boyfriend` (wave 3) | **this post** |
|---|---|---|---|
| Object | a **wish** | a **quote** | a **message** |
| Date | 8 Feb 2027, dated | 8 Feb 2027, dated | **undated, evergreen** |
| Organising axis | job the line does for the sender | what the line asks the receiver to do | **what the message is doing, and whether it wants an answer** |
| Who is asking | boyfriend already exists; affection exchange | boyfriend already exists; reception lane | **she may be the one asking** — group 1 exists for exactly that |
| Research lane | public-vs-private affection display | memory display, masculine norms | **who carries relationship maintenance work** |
| Sources | PLOS ×2, Fides et Ratio, Nature, SAGE | Frontiers ×2, PMC, Europe PMC | vu.lt, ualberta.ca, unt.edu, maastricht, spaceandculture.in — **zero overlap** |
| Honest verdict | copy-text, judged on impressions | copy-text, judged on impressions | **decision page**: the reader is choosing whether and how to send |

**Verdict: genuinely distinct.** The wish and quote pages are both 8 February occasion
pages whose reader is looking for a line to copy. This page's reader has already decided
to say something and is deciding *how* — message only, message then in person, or not at
all — which is why it carries a decision table and a section arguing against sending. Both
siblings are cross-linked by slug in the definition section so the wish/quote/message
distinction is navigable rather than competitive.

### Fan-out sub-queries → H2s

| Sub-query | H2 |
|---|---|
| what is a propose message, is it the same as a wish | What a propose message is, and how it differs from a wish or a quote |
| why text instead of saying it | What a sent message carries that a spoken line cannot |
| what do I actually write | Ten propose messages to your boyfriend, grouped by what each one does |
| how do I make it sound like me | Write it so it sounds like you, not like a greeting card |
| is it okay if I propose to him | Who does the asking, and who does the work afterwards |
| should I text it or say it | Message only, message first, or say it in person |
| when should I not send anything | When the scrapbook is wrong, and when to say nothing at all |

### Angle

> Wins by being the only propose page written for the woman composing an undated, private
> message to a man she may be asking herself — grounded in measured maintenance-behaviour
> asymmetry (n=472), the 64% "I love you first" finding, and a first-hand count of the
> 905-article live corpus.

---

## Phase 3 — Sources

Lane assigned: **who carries the maintenance work in a relationship.** Searched the
phenomenon, not the keyword. `findpapers.mjs` was run on `relationship maintenance labour
gender study`, `emotional labour couples research`, `kin keeping relationship work study`,
`initiation of relationship talk gender research`, `division of emotional work partners
study`, plus Crossref + Unpaywall sweeps filtered to open-access locations outside the
capped publishers. Four WebSearch calls were budgeted; **three were used**.

| # | Source | Venue | Date | Read | Subject test |
|---|---|---|---|---|---|
| 1 | Pooja & Bhatia, romantic relationships among urban Indian emerging adults | *Space and Culture, India* | 2026-03-27 | full text | yes — Indian romantic relationships, confession as a classifying parameter |
| 2 | Legkauskas & Pazniokaitė, gender differences in relationship maintenance behaviours | *Social Welfare: Interdisciplinary Approach*, Vilnius University Press | 2018-12-20 | full text | yes — the lane itself |
| 3 | Kuzio, "Women in Love" | *Canadian Journal of Family and Youth*, U. Alberta | 2021-05-02 | full text | yes — who says it first |
| 4 | Hardin, relational maintenance strategy usage | University of North Texas thesis | 1996-08 | **abstract only** | yes — maintenance behaviour and partner satisfaction |
| 5 | de Sá Carvalho Leonardo & Unkel, women's emotional labour | *Maastricht Journal of Liberal Arts* | 2018-07-12 | full text | yes — the lane itself |

Generic context statistics: **0**. Wikipedia in body: **0** (entity `sameAs` only, which
does not count). No URL or domain was reused from waves 1–3; `capcheck.mjs` was run when
choosing and again immediately before saving, and returned no banned URL and no
over-cap domain. `spaceandculture.in` sits at exactly 3 posts including this one.

### What was rejected, and why

- **Europe PMC / PMC** — at cap 3. Every `findpapers.mjs` open-access hit came from there,
  which is why the search moved to Crossref + Unpaywall with the capped publishers filtered
  out at query time.
- **Robnett & Leaper, "Girls Don't Propose! Ew." (2012)** — the obvious paper for this
  angle. Unpaywall confirms `is_oa: false`. Not cited, because it could not be read.
- **Schroeder, Kardas & Epley, "The Humanizing Voice" (2017)** — would have supported the
  "say it out loud" section, but it is about disagreement and dehumanisation, and stretching
  it to a proposal would have been an overreach. eScholarship also serves a CloudFront 403.
- **JCMC self-disclosure meta-analysis (2016)** — academic.oup.com returns 403 for both the
  article and the PDF. Not cited from an abstract-less block.
- **Guest & Chang, *Journal of Social Media in Society* (2024)** — read in full and
  genuinely on-subject, then **dropped**: `capcheck --list` shows that exact URL already
  spent in `2026-09-17-propose-12`.
- **IJSR** — Crossref-indexed, named in the BRIEF as predatory. Rejected on venue.

### Claims from the task prompt that were checked

1. **"The live corpus holds 46 proposal pages."** Not supported. 26 slugs carry a `propos*`
   token across 905 live articles; 0 carry `propose`. The post prints 26.
2. **"There is genuine work on the asymmetry in who initiates relationship talk."** The one
   source here that measured relationship talk directly found **no significant gender
   difference** on relationship talk or self-disclosure. The differences fell on positivity,
   understanding, assurances, sharing tasks and social network. The post says that, and
   reports the asymmetry that *was* found instead — that women's maintenance behaviours
   tracked their male partners' satisfaction (Hardin 1996), and that reciprocity rather
   than volume decided whether emotion work felt positive (Maastricht 2018).
3. **"Effectively all 46 are written to a man doing the asking."** Replaced with the
   measured version: four of the 26 name a girlfriend or a crush, none names a boyfriend,
   the remainder are recipient-neutral.

---

## Phase 4–5 — Draft and targeting

- 1,800 words in `contentMarkdown`, FAQs excluded. 8 H2s, 5 H3s, one H1.
- Three first-party facts inside the first 140 words: 5,148 pages across 21 page types,
  38.5% password-protection (1,983 of 5,148), and the 2.2-hour median first-save-to-last-edit
  gap sampled on `/apology-dashboard`, n=1,375. Each is labelled platform-wide or
  sampled-on-the-named-template **in body prose**.
- Comparison table: 4 rows, 4 columns, with a dedicated first-party SubhSandesh column
  whose header sentence states the platform-wide labelling once for the whole table.
- `/proposal` appears in the objection section with the honest verdict: it is built for a
  marriage proposal and is oversized for a relationship-level ask, which is what most of
  this traffic wants. `/love-gf` is the genuine alternative, right-sized for a relationship
  that already exists, with its current standing labelled platform-wide (third most created
  at 1,178 pages, 22.9%; most-viewed at 16,998 views, 29.9%). `/catch` is offered for a
  message meant to be read slowly.
- No price, free-tier or paid-tier language anywhere; the facts.md pricing block is still
  empty.
- 11 FAQs, in `article.faqs` only. Maximum FAQ-to-H2 Jaccard similarity is 0.25, well under
  the 0.85 flag.
- `structuredData`: one `@id`-matched enrichment block on `<canonical>#post` carrying
  `about`, `mentions` and a five-entry `citation` mirroring `batchMeta.sources` one-to-one,
  plus an `ItemList` mirroring the five H3s in order. Every `sameAs` was verified against
  the Wikipedia API with its Wikidata QID paired (Q3685487, Q17166101, Q1044045, Q736922,
  Q1057944).

## Phase 6 — Audit

50 items, `passed` 48, `failed` 2, disjoint, byte-verbatim against
`references/publish-checklist.md`. The two failures are the unmeasured-SERP mirroring item
and the TEMPLATE_LINKS item, which the two mandated sibling cross-links break by design.
Nine non-checklist limitations are recorded in `batchMeta.structuralLimitations`.
