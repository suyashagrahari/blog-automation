# Research brief — `raksha bandhan greetings online free`

Batch: `2026-08-25-rakhi-2027` · Slug: `raksha-bandhan-greetings-online-free`
Written 2026-08-25. Rakhi 2027 = Tuesday 17 August 2027 (Rakhi 2026 = Friday 28 August 2026, three days out — unreachable, so this page is written for the 2027 cycle and the year-round tail).

Slug check: `https://strapi.subhsandesh.in/api/articles?fields[0]=slug&filters[slug][$eq]=raksha-bandhan-greetings-online-free` → `total: 0`. Free.

---

## Phase 0 — data gate

`content/facts.md` refreshed 2026-08-25 (17 facts). **There is no rakhi-specific
first-party data**: `rakshabandhanpages` = 3 documents, rakhi template views = 39
of 36,202 (0.1%). No statistic was computed from it, per BRIEF.

The **"Pricing and cost" section of `content/facts.md` is empty** — only the
unfilled `Free tier includes:` / `Paid tier price:` placeholders below the manual
marker. That is a material gap for a keyword whose entire subject is price, and
the post therefore prints **no price at all** and says so in the body rather than
inventing terms. Recorded in `auditReport.failed`.

Facts used (all platform-wide, verbatim from facts.md):

| Fact | Role in the post |
|---|---|
| 99.4% of started pages are published and shared (2,956 of 2,973) | **assigned primary** — lead number, first 150 words |
| 51.1% of shared pages opened on a phone (18,497 of 36,202) | table row, phone-check advice, "wrong choice" section |
| 44.2% of creators password-protect before sharing (1,315 of 2,973) | privacy/tracking section, table row |
| 2,973 pages since 2026-03-12 across 15 page types | denominator, completion section |
| 36,202 recorded views | denominator |
| Median 6.9h first save → last edit (n=931, /love-gf) | expiring-drafts argument |

---

## Phase 1 — SERP analysis

**This is a tool-page SERP, not a blog SERP.** That is the defining constraint.
Nine of the ten results are products, not articles. Per `references/competitors.md`
none of these is cited, linked or paraphrased anywhere in the post; they are
analysed here only.

| Result | Type | Words of prose | Direct answer? | Data cited | Format | Optimising for |
|---|---|---|---|---|---|---|
| Canva (pos. 1) | Card-maker landing page | ~150 boilerplate | No — a CTA, not an answer | none | Template grid, no FAQ, no byline | Editor sign-ups |
| drikpanchang (banned as a source) | Card gallery | <100 | No | none | Thumbnail grid | Festival-date traffic |
| 123greetings — **3 of 10 slots** (hub, `/happy/`, `happy55`) | E-card gallery | ~200 across the hub | No | Own view counts (773,507 hub views; 320,138 on the top card) and a 3.45 user rating — no third-party data at all | Thumbnail grid, rating widget, no FAQ, no author | Card sends |
| radhavallabh.com (weak) | Devotional e-card sender | ~80 | No | none | 1990s-era table layout | Long-tail e-card |
| untumble.com (weak) | Personalised e-vite gallery | ~50 — headline plus template names | No | none | Pure gallery, zero prose, no FAQ, no schema | "personalised with your name/image" |
| thisismyindia.com (weak) | Free e-card index | ~150 (403s to fetch; read via SERP) | No | none | Category list | Legacy e-card tail |
| createcustomwishes.com (weak) | WooCommerce template store | ~250 + a lifted encyclopaedia definition | Partially | none | Product grid **with "sort by price"** on a page titled "1.2k+ Free…" | Template SKUs, business-logo upsell |
| Adobe Express | Card-maker landing page | ~200 | No | none | Template grid, app CTA | Editor sign-ups |

Cross-cutting observations:

- **Zero of the analysed pages cite a single third-party source.** Not one.
- **Zero disclose their own free-tier terms** on the page that says "free" —
  no watermark policy, no signup requirement, no export price, no retention
  period, no tracker disclosure.
- Prose is thin (50–250 words) because these pages are shelves, not articles.
- No author byline, no publication date, no FAQ block, no tradeoff section anywhere.
- One store literally offers "Sort by price: low to high" on a page headlined
  "1.2k+ Free … Templates", which is the whole tension in one screenshot.
- Tone is uniformly third-person promotional. Nothing admits a limit.

### The Gate-2 tension, stated plainly

A blog post competes awkwardly here: the searcher wants a tool, and nine
incumbents are tools with far more authority. A tenth template gallery is
pointless. The only defensible move is a page that answers the *question inside*
the query — "is this actually free, and what does free cost me?" — which every
tool page is structurally unable to answer about itself.

---

## Phase 2 — gap analysis

**Table stakes** (present on all/most, so the post must cover them): what a free
rakhi greeting is; brother and sister variants; personalisation with name and
photo; sharing to WhatsApp; the festival date; mobile use.

**The gap.** Every incumbent asserts "free" and none defines it. Nobody on page
one states where the free tier stops: watermark in the export, account wall at
save, paid download, tracking as the funding model, silent retention limits. The
post is built entirely on that gap.

**Stale data.** There is no data to supersede — the pages cite none. The freshest
"data" on the SERP is a 2024-stamped tool page and a set of self-reported view
counters. Publishing 2025 and 2020 research plus 2026-08-25 first-party numbers is
therefore an uncontested win on fact density, if not on authority.

**Fan-out sub-queries → H2s / FAQs.**

| Sub-query | Where it lands |
|---|---|
| What does "free" mean on a greeting site? | H2 2 (definition block) |
| Do free rakhi cards have watermarks? | H3 1 + FAQ 2 |
| Do I have to sign up? | H3 2 + FAQ 3 |
| Is the download free too? | H3 3 + FAQ 1 |
| Is it safe to upload a photo? | H3 4 + FAQ 5 |
| Will the link still work later? | H3 5 + FAQ 7 |
| E-card vs card maker vs shareable page? | H2 4 (table) + FAQ 6 |
| Can I send it on WhatsApp / on a phone? | H2 4, H2 7 + FAQs 4, 11 |
| Free or paid — is free good enough? | H2 6 + FAQ 9 |
| When is Raksha Bandhan 2027? | H2 7 + FAQ 8 |

**Angle (recorded as `batchMeta.angle`).** Wins by being the only post that
itemises what "free" actually excludes on a Raksha Bandhan greeting — watermark,
signup wall, locked download, tracking, expiry — and grounds the friction argument
in SubhSandesh's own 99.4% publish-and-share rate (2,956 of 2,973), which no tool
page on this SERP can publish.

### Differentiation vs the sibling `raksha bandhan wishes maker`

Near-identical SERP, deliberately disjoint pages. **This post is about COST** —
where free stops, what it takes from you, and how to detect each limit before you
invest twenty minutes. It contains no how-to-design content, no template
walkthrough, no message or wording ideas. The sibling owns THE ACT OF CREATING.
The only shared surface is the "free" adjective, and this page treats it as the
subject rather than as a modifier.

**Verdict: two pages, not one.** The SERPs overlap but the searcher does not.
"…greetings online free" is a qualification query — the user has already decided
to send something and is filtering on price and terms. "…wishes maker" is a tool
query — the user wants the editor. A merged page would either bury the pricing
analysis under a template tour or bury the tool under caveats, and would lose the
one thing that makes this page citable: it is a page *about* free, and the
incumbents cannot write it about themselves.

---

## Phase 3 — sources

Search strategy per BRIEF rule 4: searched the **phenomenon**, never the festival.
Queries run: `zero as a special price Ariely free products`,
`freemium conversion rate empirical study open access`,
`registration wall sign-up friction abandonment study HCI`,
`watermark perceived quality user generated content branding study`,
`Mathur dark patterns at scale 11K shopping websites`,
`drip pricing experiment consumer research partitioned pricing`,
`privacy cost of free third-party trackers measurement study`.

**Search that failed, recorded honestly:** there is no usable peer-reviewed work on
*watermarks and perceived value of a personal digital greeting*. The
`watermark perceived quality user generated content` search returned only
brand-equity and UGC-purchase-intention papers, none of which is about watermarks.
The watermark section therefore carries no citation and argues from mechanics
instead. Sign-up-friction search returned only vendor marketing blogs (Zuko,
Baymard-adjacent, Ping Identity, Microsoft Clarity) — no peer-reviewed source, so
none was used; the drip-pricing and freemium papers cover the adjacent behaviour
properly.

| # | Source | Type | Verified stat used | Published | Tests |
|---|---|---|---|---|---|
| 1 | [Zero as a Special Price](https://www-2.rotman.utoronto.ca/facbios/file/ZeroPrice.pdf) — Shampanier, Mazar & Ariely, *Marketing Science* 26(6) | Peer-reviewed, open PDF | 1¢ → free moved the cheaper item's share from 27% to 69%; the better product fell 73% → 31% (full text read, p. 751 of the PDF text layer) | 2007-11 | subject ✓ swap ✗ |
| 2 | [Free trial duration & Freemium conversion](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2025.1568868/full) — *Frontiers in Psychology* 16 | Peer-reviewed, fully open access | 2-year RCT, 680,588 users, 190 countries (2023–24); control-group immediate conversion 0.22%, free-trial adoption 0.86% (Table 4 constants) | 2025-06-18 | subject ✓ swap ✗ |
| 3 | [Dark Patterns at Scale](https://webtransparency.cs.princeton.edu/dark-patterns/) — Mathur et al., *Proc. ACM Hum.-Comput. Interact.* 3(CSCW) | Peer-reviewed (CSCW), open project page | 1,818 dark-pattern instances, 15 types, 7 categories across ~53K product pages / ~11K sites; present on 1,254 sites (~11.1%); 183 deceptive sites; 22 turnkey vendors; "hidden costs" is a named type | 2019-11 (page last revised 2019-07-17) | subject ✓ swap ✗ |
| 4 | [Consumer Reactions to Drip Pricing](https://marketing.wharton.upenn.edu/wp-content/uploads/2024/05/Morwitz-Vicki-Wroe-Alderson-PAPER-2020.pdf) — Santana, Dallas & Morwitz, *Marketing Science* 39(1) | Peer-reviewed, open author PDF | Six studies; late-revealed surcharges leave consumers on the higher total-cost option; only 15.9% restarted in study 1a and 5.8% (n=23) in study 1b | 2020-01 | subject ✓ swap ✗ |
| 5 | [The High Privacy Cost of a "Free" Website](https://themarkup.org/blacklight/2020/09/22/blacklight-tracking-advertisers-digital-privacy-sensitive-websites) — Sankin & Mattu, The Markup | Investigative measurement study, open | Of 80,000+ Tranco-ranked sites scanned 2020-09-08: 69,293 loaded a third-party tracker, 5,000+ fingerprinted visitors, 12,000+ ran session recording, 200+ key-logged form fields | 2020-09-22 | subject ✓ swap ✗ |

- Every source was fetched and its claim verified against the retrieved text
  (PDFs 1 and 4 extracted with `pdftotext` and grepped for the figures quoted).
- **No paywalled citations** — all five full texts were read. No figure, chart,
  table or passage is reproduced.
- **Zero government/context statistics.** No PIB, TRAI, Census, MEA, India Post,
  drikpanchang. The batch bans were respected in full.
- **Zero Wikipedia body links.** Wikipedia appears only as `sameAs` targets inside
  `structuredData` (QIDs verified via the Wikipedia API: Raksha Bandhan Q10266,
  Freemium Q1444631, Greeting card Q915196, Dark pattern Q30325366,
  Watermark Q43065).
- Batch cap check at write time: no URL used twice, no domain over 3 across
  `blogs/`. arXiv is at 2 (two different papers, shared with
  `raksha-bandhan-2027-wishes`). **That check was made too early.** By the time all
  18–20 files had landed, `arxiv.org` stood at 4 posts against a cap of 3 — see the
  remediation section below.

---

## Phases 4–7 — build notes

- **Structure**: H1 → 7 H2s → 5 H3s under "Five things a free rakhi greeting can
  cost you". Each H3 uses the same four fields in the same order: *What it is /
  How you spot it / What it costs / What to do instead.*
- **Body**: 1,758 words, FAQs excluded. 12 FAQs live only in `article.faqs`.
- **Table**: 5 rows × 4 columns; three rows carry first-party numbers. Two rows are
  categorical because the numeric values would be competitors' prices, which are
  banned, and our own price is unrecorded.
- **Internal links**: 2, both from `TEMPLATE_LINKS`, placed in the
  "wrong choice" section after the value case is made —
  `/happy-rakshabandhan-to-brother` and `/templates`.
  **Note for the orchestrator:** the BRIEF names
  `/happy-rakshabandhan-to-sister` as an available rakhi template, but that slug
  is **not** in `TEMPLATE_LINKS` in `app/lib/prompt.ts` (the array ends at
  `/happy-rakshabandhan-to-brother`). It was therefore not used.
- **Category**: `indian-festivals`, confirmed live in the Strapi categories API.
- **structuredData**: two blocks — an `@id`-matched `BlogPosting` enrichment on
  `…#post` carrying `about`, `mentions` and a 5-entry `citation` mirroring
  `batchMeta.sources` one-to-one, plus an `ItemList` mirroring the five H3s in
  order. No `AggregateRating`, `Review` or `HowTo`.
- **Audit**: 48 passed, 2 failed, disjoint, 50 items total = checklist length.
  Failures are (a) first-party facts are platform-wide rather than rakhi-specific,
  and (b) two table rows are non-numeric because both competitor pricing and our
  own free-tier terms are unavailable.

---

## Phase 8 — source remediation (2026-08-26)

**The breach.** Measured across the landed `blogs/` directory, `arxiv.org` appeared
in 4 posts (`raksha-bandhan-2027-wishes`, `raksha-bandhan-2027-quotes`,
`raksha-bandhan-wishes-in-punjabi`, this post) against a domain cap of 3. This post
was nominated to give it up.

**The redundancy hypothesis was wrong, and was not acted on.** The orchestrator's
working theory was that arXiv:1907.07032 (Mathur, *Dark Patterns at Scale*) and the
Markup Blacklight study serve the same argument, making the arXiv paper droppable at
no cost. They do not. Blacklight supplies tracker prevalence and carries only cost
#4 ("your data, and your recipient's"). Mathur supplies the claim that the other four
costs are *deliberate, catalogued and sold* — 15 named dark-pattern types including
"hidden costs", and 22 third-party firms selling them as an off-the-shelf product.
That is the sentence that turns the five-item list from opinion into a documented
phenomenon, and nothing else in the source list carries it. The drip-pricing paper
is the nearest overlap and covers only cost #3.

**What was done instead.** The paper, not the claim, was rehosted. *Dark Patterns at
Scale* is peer-reviewed at CSCW 2019 and the arXiv entry is a preprint mirror; the
authors' own project page at Princeton's WebTAP is the primary institutional host.
Fetched 2026-08-26, HTTP 200, 50,642 bytes. The page states verbatim: "We discovered
1,818 instances of dark patterns … which together represent 15 types", "present on
1,254 of the ∼11K shopping websites (∼11.1%)", "~53K product pages from ~11K shopping
websites", "234 instances of deceptive dark patterns across 183 websites", "We
identify 22 third-party entities", and names "Hidden Costs" as a category. Every
figure the post uses is on the page. Citation block on the page gives
*Proc. ACM Hum.-Comput. Interact.*, CSCW, issue date November 2019.

Result: `arxiv.org` = 3 posts batch-wide, at cap. `webtransparency.cs.princeton.edu`
= 2 posts corpus-wide (the other is `2026-08-19-rakhi-4/rakhi-2026-custom-photo-wishes-card-maker-online`,
which cites the same project page), so the URL is now full and the domain is 2 of 3.

**Lane note.** `SOURCE-ALLOCATION.md` puts product-intent posts in lane D
(publisher-native OA) then F (media & data). This post's list draws one source from
lane F (themarkup.org) and four from outside any lane — two open author/faculty PDFs
(rotman.utoronto.ca, marketing.wharton.upenn.edu), one lane-D-adjacent OA journal
(frontiersin.org) and one university research-project page (Princeton WebTAP). Lane D
proper was unusable: sagepub, wiley, tandfonline, nature and sciencedirect all 403
behind Cloudflare in this environment, and citing from a Crossref abstract would have
been weaker than citing four full texts that were actually read.

**Re-verification of the other four sources**, all re-fetched 2026-08-26, all HTTP 200:

| Source | Figure checked in the retrieved text | Result |
|---|---|---|
| Rotman / ZeroPrice.pdf | "the share of Hershey's increases from 27% in the 1&15 condition to 69% in the 0&14 condition … Lindt … decreasing from 73% … to 31%" | found verbatim |
| Frontiers in Psychology | control-group free-trial adoption **0.856%**, immediate conversion **0.224%**, 680,588 users / 190 countries | found; the post's 0.86% and 0.22% are these rounded |
| Wharton / drip pricing | "only 15.9%, n = 65" (study 1a) and "only 5.8%, n = 23" (study 1b) | found verbatim |
| The Markup Blacklight | 69,293 of 80,000+ sites loading a third-party tracker; 5,000+ fingerprinting; 12,000+ session recording | found verbatim |

**Two accuracy corrections made during re-verification, neither of which was in the
audit report:**

1. The 27%→69% / 73%→31% figures are the shares *after* removing passers-by coded as
   "nothing" — the paper says so explicitly. The body now reads "its share among the
   students who took one", and `batchMeta.sources[0].stat` records the exclusion.
2. The body previously asserted "On most free greeting tools that share is far
   higher" about abandonment on competing tools. No such data exists — nine of the
   ten SERP incumbents publish no completion figure at all — so it was an unsourced
   claim about competitors. Replaced with a statement about our own flow only.

**Unchanged and still failing.** `content/facts.md` was re-read in full on 2026-08-26:
"Pricing and cost" is still an empty header with an HTML comment, and the manual
"Pricing (fill in by hand)" block still has bare `Free tier includes:` and
`Paid tier price:` placeholders. There is still no rakhi-specific first-party data.
Both failures are structural and stay in `auditReport.failed`.

**Post-remediation counts.** Body 1,768 words on the schema validator's plain split
(was 1,758 before the fix pass, 1,773 at its peak), 1,793 on `wordCount()` in
`app/lib/batches.ts` (was 1,779). Audit: 48 passed + 2 failed, disjoint, 50 total.

