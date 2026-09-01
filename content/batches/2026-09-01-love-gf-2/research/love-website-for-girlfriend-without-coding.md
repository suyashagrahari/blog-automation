# Research brief — `love website for girlfriend without coding`

- **Batch:** `2026-09-01-love-gf-2`
- **Slug:** `love-website-for-girlfriend-without-coding` (verified free in Strapi, `pageCount: 0`, 2026-09-01)
- **Category:** `digital-gifts-romance` (verified present in the live Strapi category list)
- **Asset type:** comparison, not how-to (assigned)
- **Volume / market:** est. 300–1,000/mo, India-weighted, demand rank 5x
- **Difficulty read:** 9 of 9 results are direct competitors; 1/10 "weak result" score

---

## Phase 0 — Data gate

`content/facts.md` regenerated 2026-09-01. Gate passes with room to spare. The keyword-relevant facts:

| Fact | Value |
|---|---|
| Pages created since 2026-03-12 | 3,335 across 15 page types |
| #1 page type | `/love-gf` — 975 created, 29.2% of all pages |
| #4 page type | `/darling` — 343 created, 10.3% |
| Total recorded views | 40,864 |
| Most-viewed template | `love-gf` — 14,396 views, 35.2% of all views |
| Phone share of views | 50.3% (20,561 of 40,864); 50.5% on any touch device |
| Password-protect rate | 42.9% of creators (1,432 of 3,335) |
| Publish-through rate | 99.5% (3,317 of 3,335) |
| **Median first-save → last-edit, `/love-gf`** | **6.9 hours, n=975** |

The 6.9-hour median is the load-bearing fact of this post. It is the only measured
number anywhere in this SERP that contradicts the "minutes" claim the whole
category — ours included — puts on its landing pages.

**Pricing block in `facts.md` is empty.** No claim about what SubhSandesh costs
appears anywhere in the post, in either direction. The purpose-built row of the
comparison table describes the *shape* of the cost ("no hosting bill or domain
renewal of your own; you pay what the platform sets") and never a figure, and
never the word "free". This is deliberate and load-bearing, because the post is
about build-vs-buy and a pricing claim would be the one unverifiable sentence in it.

---

## Phase 1 — SERP analysis

`WebSearch` 2026-09-01. Every result is a vendor selling the thing the query asks
about. There is no editorial or third-party content in the top 10 at all.
Competitors are analysed here and **never cited, linked, named-and-recommended, or
paraphrased in the post** (`references/competitors.md`).

| # | Result (competitor — not linked in post) | Words | Structure | Where the answer lands | Data cited | Format | Optimising for |
|---|---|---|---|---|---|---|---|
| 1 | India-based ₹79 one-time vendor, blog post A (30 Jul 2026) | 1,575 | H1 → TL;DR → "decide what you're optimizing for" → **Route 1: code it yourself (the honest version)** → **Route 2: the template route** → **Side-by-side: which route wins where** → mistakes → FAQ | TL;DR, para 1 | own price only; **no third-party sources, no first-party usage data** | FAQPage + Article + BreadcrumbList JSON-LD; **no table** despite a "side-by-side" heading | selling its own ₹79 template, via an honest-broker frame |
| 2 | same vendor, blog post B | — | duplicate framing, transactional landing | para 1 | own price | as above | same |
| 3 | US vendor `.online`, blog post (1 May 2025) | 564 | H1 → Step 1–4 (all four steps are its own product) → "what to put on it" | para 1 | none | BlogPosting only; no FAQ, no table | pure funnel to its own create page |
| 4–7 | same `.online` vendor × 4 more slots (boyfriend, Netflix-style, ideas, landing) | 500–900 | step-by-step, self-referential | para 1 | none | thin | keyword-slot capture |
| 8 | `.com` sibling vendor, `/best-website-for-girlfriend` (2026-stamped) | 540 | H1 → **five named options compared** (itself, a design tool, two general builders, a notes app, hand-coded) → 4 Q&A H2s → CTA | para 1, names itself as the answer | own price ($4.99 one-time); no research | FAQPage + ItemList + BreadcrumbList; **no table** | vendor comparison that concludes with itself |
| 9 | `.com` sibling vendor, homepage | — | product page | above the fold | none | — | brand |

**Tone across all nine:** warm second person, short sentences, no hedging, no
downsides, no dates on any claim, no outbound links of any kind. Every single one
concludes with itself.

### The finding that changes the brief

**The assigned premise — "an honest comparison is the one thing none of them can
write" — is no longer true.** Result #1 published exactly that comparison on
30 July 2026, with a `Route 1: code it yourself (the honest version)` heading, and
result #8 runs a five-way build-vs-buy comparison. The build-vs-buy *frame* is
occupied at position 1.

What remains genuinely unavailable to all nine:

1. **Any measured number.** Not one of the nine cites a usage statistic, its own
   or anyone else's. #1's "15 minutes" and #8's "in minutes" are unsourced.
2. **Any third-party source.** Zero outbound links across all nine pages.
3. **A real table.** Both comparison pages promise a side-by-side and deliver prose.
4. **A named downside of their own category.** #1 comes closest ("the honest
   version") but the honesty is spent on the *coding* route, never on the template
   route's own failure mode — that the link dies with the platform and the files
   were never yours.

So the differentiator for this post is **measured data plus verified sources
inside the comparison frame**, not the frame itself. That is recorded as a real
audit failure (item: *"No section closely mirrors a competitor page's structure or
framing"*) rather than papered over — see `auditReport.failed`.

---

## Phase 2 — Gap analysis

**Table stakes** (all nine cover, so the post must too): that no-code is possible;
what a romantic page contains (letter, photos, music, a game); that the output is
a private shareable link; that it can be sent on WhatsApp; a "do I need to code"
answer.

**The gap:**

- **Time, honestly.** Everyone advertises minutes. Nobody has measured the
  finished page. 6.9 hours, n=975.
- **Password protection as a comparison axis.** Nobody treats it as a criterion,
  yet it is the single feature the free static-host route structurally cannot
  provide without writing a login — and 42.9% of real creators use it.
- **What happens to the link in a year.** Absent from all nine. Verifiable
  externally (Pew link rot) and it is the template route's real weakness.
- **The public-repository consequence.** The free-hosting route is recommended by
  #1 and #8 without either mentioning that GitHub Free requires a public repo, so
  the photos and the letter are readable by anyone who finds them.
- **Naming who should *not* buy.** Every page concludes with itself. None says
  "if you code, code it" — which the Sundar & Marathe power-user finding supports.

**Stale data:** none to supersede — there is no data in this SERP to be stale.

**Fan-out sub-queries → H2 map:**

| Sub-query | H2 (as shipped, after the Phase 8 restructure) |
|---|---|
| what does "without coding" actually mean / rule out / what are my options | `What "without coding" actually rules out` |
| how long does it really take + which template / theme should I pick | `Failure 1: it never gets finished, and the mood is usually why` |
| can I password it | `Failure 2: anyone who has the link can read it` |
| will it work on her phone | `Failure 3: it was only ever opened on a laptop` |
| what happens to the link in a year | `Failure 4: the link is gone within a year` |
| which is cheapest / best / what do I give up | `The three routes, priced against those four failures` |
| should I just build it myself | `When you should just code it yourself` |
| are the sources real | `Sources` |

**Angle (recorded as `batchMeta.angle`):** wins by being the only build-vs-buy
comparison on this keyword that prices the no-code route in measured time — a
6.9-hour median first-save-to-last-edit across 975 `/love-gf` pages — and names
the one thing a free static host cannot deliver, against the 42.9% of creators who
password-protect before sharing.

---

## Phase 3 — Sources

Reserved vein for this post: **end-user development / no-code tools, and how
non-programmers choose between building and buying.** Searches run:
`end-user development non-programmers study CHI`, `low-code no-code development
platforms empirical study citizen developers limitations open access`,
`choice overload meta-analysis`, `website template versus custom design study
users perceived personalization HCI`, `Ko state of the art in end-user software
engineering`.

Every source below was fetched and the claim read in the **full text**, not the
abstract. No source is paywalled. Two candidates were dropped because they would
not extract or were paywalled: the CMU `NatProg`/`Compose` PDFs of Ko et al. 2011
(fetch failed / unreadable text layer) and the Journal of Consumer Research PDF of
Scheibehenne et al. 2010 (HTTP 403) — the latter replaced by the later Chernev
meta-analysis, which the author publishes openly.

| # | Source | Peer-reviewed | Open | Claim used | Published |
|---|---|---|---|---|---|
| 1 | Guthardt, Kosiol & Hohlfeld, *Low-code vs. the developer*, MODELS Companion '24 (ACM), author-institution PDF (uni-kassel.de) | yes (ACM conference) | yes | Median build time on a prototype no-code builder: **23 min** (no programming experience) vs **19 min** (programmers); means 22 vs 21.4; **p = 0.8785, Cohen's d = 0.01, n = 10**. Interviewed SMEs objected that low-code tools "might offer too few functions or insufficient flexibility"; only 2 of 6 used such platforms. | 2024-09-22 |
| 2 | Sundar & Marathe, *Personalization versus Customization*, Human Communication Research, author-course PDF (terpconnect.umd.edu) | yes | yes | Study 1, **N = 82**: power users rated content quality higher with a customisable (user-tailored) interface; non-power users preferred personalised (system-tailored) content. | 2010 |
| 3 | Chernev, Böckenholt & Goodman, *Choice overload: a conceptual review and meta-analysis*, J. Consumer Psychology, author's PDF (chernev.com) | yes | yes | Meta-analysis of **99 observations, N = 7,202**; four moderators, and overload rises with **preference uncertainty**, choice-set complexity and decision task difficulty. | 2014-08-29 (available online) |
| 4 | Pew Research Center, *When Online Content Disappears* | no (research org) | yes | **25%** of pages sampled 2013–2023 inaccessible as of Oct 2023; **38%** of 2013 pages gone; **~1 in 5** pages from the 2021 snapshot gone within two years. | 2024-05-17 |
| 5 | GitHub Docs, *GitHub Pages limits* | no (platform docs) | yes | Published Pages site **≤ 1 GB**; soft bandwidth limit **100 GB/month**; soft limit **10 builds/hour**; 10-minute deployment timeout; on **GitHub Free, Pages is available only in public repositories**. | no publication date — `datePublished` omitted from `citation` |

**Subject test:** #1 (non-programmers using no-code builders), #2 (agency in
customisation vs system-tailoring), #4 (persistence of a published page), #5
(platform behaviour of the free static tier) all pass. #3 passes as the mechanism
behind template choice. **Generic context statistics: 0.** No PIB / TRAI / Census /
MEA figure appears. **Wikipedia body links: 0** (Wikipedia is used only for
verified `sameAs` in `structuredData`, which is outside the 0–2 body budget).

**Swap test:** none of the five could sit unchanged in a sibling post — they are
about no-code tooling, static hosting, page persistence and choice difficulty, and
would be nonsense in a Tamil love-letter, a birthday-letter or an LDR-surprise post.

**Batch cap check (2026-09-01-love-gf-2, as of writing).** All five domains —
`uni-kassel.de`, `terpconnect.umd.edu`, `chernev.com`, `pewresearch.org`,
`docs.github.com` — appear in **0** other posts in this batch and in **0** posts of
`2026-09-01-love-gf` (all 10 sibling `batchMeta.sources` arrays read). No URL and no
domain cap is approached, let alone breached. Siblings were still running at write
time, so a later collision is possible; nothing was cut on suspicion.

---

## Phase 4–5 notes

- **Body: 1,796 words** by the plain whitespace split (`references/article-json-schema.md`
  line 134 band, 1,500–1,800). FAQs are **not** in the body; the studio's
  `wordCount()` will read higher by design and was not trimmed against.
- **Comparison table:** 3 rows (the three approaches) × 6 columns. Rows are inside
  the checklist's 3–5 band; the column count exceeds the 3–4 *guidance* in
  `page-structure.md` because the brief mandated a multi-criterion comparison. The
  two criteria with no hard values — skills needed, how much structure you control —
  were moved out of the table and into the H3 fields, so no cell carries a
  "low / medium / high"-style non-value. Three of the six columns carry first-party
  numbers.
- **Internal links (3, all from `TEMPLATE_LINKS`, none in the opening):**
  `/love-gf` inside route 3, as the named example of the purpose-built category, after
  the route is described; `/darling` in the aesthetic section, carrying the 343-page,
  10.3% figure that makes the trade-off concrete; `/templates` in the same section,
  attached to the choice-overload finding — i.e. deliberately framed as *harder* to
  use if the mood is undecided, which is the honest placement.
- **Outbound links:** 5 distinct URLs, 6 instances, each inline at the sentence
  stating its fact.
- **Where SubhSandesh loses**, named in the body: route 3's `What breaks` (the link
  dies with the platform, you never hold the files, "the downside our own category
  rarely prints"), the table's `Alive in a year` cell, and the whole final H2
  (`When you should just code it yourself`) — which tells a front-end developer to
  code it, and tells anyone needing a bespoke interaction or a permanent link the
  same.
- **`structuredData`:** additive only. One `@id`-matched `BlogPosting` enrichment
  block on `<canonicalURL>#post` carrying `about` (No-code development platform,
  Q60741440), four `mentions` (End-user development Q500467, Static web page
  Q2641220, Website builder Q1625990, Link rot Q1193907) and `citation` mirroring
  all five `batchMeta.sources` one-to-one. Plus one `ItemList` mirroring the three
  H3s in order. Every `sameAs` and QID — including Pew Research Center (Q1635722) —
  verified against the Wikipedia API. No `AggregateRating`, `Review` or `HowTo`.

## Phase 6 — audit summary

50 checklist items. **49 passed, 1 failed**, disjoint, summing to 50.

The single failure is item *"No section closely mirrors a competitor page's
structure or framing"*: the build-vs-buy framing this post was briefed to own as
an unoccupied gap is already published at position 1 (30 July 2026) and position 3.
The post's section order, three-route split and every number differ; the top-level
frame does not. It closes only by changing asset type — publishing the 6.9-hour
edit window and the 42.9% password rate as a standalone, linkable first-party data
asset no vendor comparison can republish.

`honestAssessment` in the blog JSON states plainly that this post is not expected
to enter that SERP on its own, and names what would have to change externally.
No ranking outcome is predicted.

## Phase 8 — remediation (2026-09-01)

The single failure was **closed by restructuring**, not by softening the finding.
Both competitor pages were re-read during the fix pass, structurally only.

- **What the collision actually was.** The draft enumerated the three routes as
  numbered H3s in the same code-first order as result #1, each with four fixed
  fields, and followed them with a route-vs-criteria comparison section — i.e. #1's
  `Route 1 → Route 2 → Side-by-side` spine, and #3's numbered-options-with-pros-and-cons
  shape at the same time. Note two corrections to Phase 1: result #1 **does** carry a
  side-by-side table (criteria as rows, routes as columns) and **does** carry one
  outbound third-party link. The "no table, zero outbound links across all nine"
  reading was wrong; `honestAssessment` now says so.
- **What changed.** The organising axis moved from route to **failure mode**: four
  numbered failure H2s (never finished / never locked / laptop-only / dead in a year)
  with all three routes judged inside each, no per-route H3 blocks, and the comparison
  table demoted to a penultimate summary rather than the payoff of a route
  enumeration. The link-rot sub-query, previously a gap with no H2 of its own, now
  has one. `structuredData`'s `ItemList` was re-pointed from the three routes to the
  four failures.
- **What was preserved.** The 3×6 table with its three first-party columns, the
  6.9-hour median, the 42.9% password rate against a static tier that structurally
  cannot password-protect, the Pew link-rot finding, the "if you code, code it"
  verdict, all five sources, all three internal links (none in the opening) and all
  11 FAQs. No new source was added, so no batch domain cap moved.
- **Result.** 1,796 → 1,750 words on the plain split. Audit: **50 passed, 0 failed.**
  `batchMeta.competitorStructureCheck` records the structural comparison in full.
