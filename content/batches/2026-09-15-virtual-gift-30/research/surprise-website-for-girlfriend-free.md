# Research brief — `surprise website for girlfriend free`

Batch: `2026-09-15-virtual-gift-30`, wave 3, row 12 of `WAVE3-PLAN.json`.
Market: India. Evergreen. Written 2026-09-16.
Row flags: `tier: B`, `gate2: PASS`, `mustDifferentiate: true`,
`overlapWithWritten: 4` (`cute website for girlfriend`),
`overlapWithNewRow: 4` (`virtual gift for online friend`).

---

## Phase 0 — Data gate

`npm run facts` was not re-run (wave-3 brief §5: the production-DB read was denied
today). `content/facts.md` as regenerated **2026-09-15** is the source, and that date
is cited in the post rather than today's.

Facts relevant to this keyword, with usage counts across the 66 sibling files so the
opening pair is not one the neighbours already wore out:

| Fact | Sibling uses | Where used here |
|---|---|---|
| `"I love you" page (/love-gf) — 1,125 pages, 25.8% of everything created` | 7 | Opening answer + H2 1 + table |
| `49.2% of views are on a touch device (phone or tablet)` | 12 | Opening answer + table |
| `Most-viewed template: love-gf — 16,201 views, 32.4% of all page views` | 12 | Table + "what we can say" H2 |
| `Median first save → last edit: 6.2 hours, n=1,125 (/love-gf)` | 46 | Table + body prose |
| `4,357 pages since 2026-03-12, across 16 page types` | 57 | H2 1 + "what we can say" H2 |
| `40.6% of creators password-protect before sharing (1,767 of 4,357)` | 56 | FAQ only |
| `Not one of 89 Raksha Bandhan 2026 pages was built >7 days ahead` | 5 | "Wrong call" H2, with both disclosures |

Gate: **PASS.** Seven relevant facts; two in the first 150 words (1,125 / 25.8%, and
49.2%). The two least-used lines in the whole batch — the /love-gf creation share
(7 uses) and the rakhi 7-day ceiling (5 uses) — are both load-bearing here.

**Two mandatory disclosures are in body prose, not only in this brief:**

1. The database records which *template* was opened, not who received it, so a
   `/love-gf` count does not prove the recipient was a girlfriend. Stated in the
   paragraph under the comparison table.
2. The Raksha Bandhan lead-time line is a **different, single-day festival**, and
   **n = 89 is small**, so no per-template or per-region rate is derived from it.
   Both caveats are in the same paragraph as the number.

### The pricing problem — the hardest constraint on this row

`## Pricing (fill in by hand)` in `facts.md` is **empty**. There is no confirmed
figure for what SubhSandesh charges, free or paid.

What was checked, and what was decided:

- The live `https://subhsandesh.in/templates` page **does** assert a zero price in
  its own marketing copy and in an `Offer` JSON-LD block (`"price":"0"`,
  `"priceCurrency":"INR"`), plus an FAQ answer on the page saying creation and
  sharing are free.
- **That is marketing copy, not a measured first-party fact**, and no page was built
  end-to-end from this session to verify it. Under the wave-3 rule the verification
  bar is "you verified it on the live site yourself" — reading a meta description is
  not that.
- **Decision: the post quotes no figure at all**, uses no priced phrase, states
  plainly that current charges cannot be confirmed from our own data, and links
  `/templates` twice so the reader checks for themselves. An entire H2
  ("What we can and cannot say about what SubhSandesh charges") is given to this,
  and the honesty is the post's angle rather than a footnote.
- Phrases deliberately avoided: "free tier", "paid tier", "completely free",
  "costs you nothing", "for free", "no cost to you", "zero cost", and the
  soft-flagged words "pricing" and "subscription". The word "free" itself appears
  only as the searcher's word, discussed as a claim.

---

## Phase 1 — SERP analysis

`SERPS-WAVE3.md`, section `## surprise website for girlfriend free`
(ddg-html, region in-en). No new SERP call was made — the wave-3 brief says the
SERP is already collected and `scripts/serp.mjs` hard-429s.

| # | URL | What the page is | Format |
|---|---|---|---|
| 1 | giftfeels.com/gifts-for-girlfriend | **Competitor** product landing page | Category page, price-of-zero claim in the title |
| 2 | bondlyfe.com/surprise-for-girlfriend | **Competitor** product landing page | "Free & Made in Minutes" |
| 3 | myheartcraft.com/blog/cute-websites-… | **Competitor** blog listicle | Year-stamped listicle |
| 4 | surprises.gift | **Competitor** homepage | Homepage |
| 5 | justmeantforyou.com/blog/cute-website-… | **Competitor** blog | "Free Ideas" listicle |
| 6 | gifft.me | **Competitor** homepage | Homepage |
| 7 | aiskyla.com | **Competitor** homepage | "No. 1 Free Virtual Gift Service" |
| 8 | gifft.me/create | **Competitor** product page | Builder page |
| 9 | giftfeels.com/birthday-gifts | **Competitor** category page | Category page |
| 10 | lovewishesonline.com | **Competitor** homepage | "Free Love Surprise Link Maker" |

**All ten are competitors under `references/competitors.md` and BRIEF-WAVE3 §1.**
None was fetched, cited or linked. They are recorded here for gap analysis only,
from the SERP titles already captured in `SERPS-WAVE3.md`.

Observations that matter:

- **Eight of ten are product landing or homepage results, not articles.** There is
  effectively no editorial page on this query to displace — and equally, transactional
  intent dominates, which is the ceiling on what any blog post can do here.
- **Nine of the ten titles assert a zero price.** "Free" is the headline claim of the
  entire result set.
- **Not one of them says what free costs.** Every page treats the word as a feature.
  That is the gap, and it is unusually clean.

---

## Phase 2 — Gap analysis

**Table stakes** — what a page here must contain or look incomplete:
what the thing is, several concrete ideas, how long it takes, how it is sent,
privacy/who can see it.

**The gap:** nobody on this SERP prices the word "free". The searcher is
explicitly budget-constrained, and every result answers the budget question with a
claim rather than an accounting. Naming the four currencies — an account, an
advertisement, a watermark, the recipient's attention — is a claim none of the ten
make, and refusing to quote our own figure is a claim none of them would ever make.

**Second gap:** none treats the *surprise* as a mechanic. They treat it as an
adjective on a page. A surprise has a mechanical property — the recipient does not
know what she is opening — and that property is what `/hold-my-hand` and `/catch`
are built around, as opposed to the earnest `/love-gf` page.

**Stale data:** not applicable; none of the ten cites any research at all.

**Fan-out sub-queries → H2s:**

| Sub-query | H2 |
|---|---|
| what is a surprise website for a girlfriend | What a free surprise website for a girlfriend really is |
| free surprise website ideas / what can I make | Five surprise mechanics you can build with time instead of money |
| how long does it take / which route | The three routes, and what each one takes out of you |
| is it really free / what's the catch | What "free" charges you instead of money |
| is SubhSandesh free | What we can and cannot say about what SubhSandesh charges |
| when not to do this | When a surprise page is the wrong call |

**Angle (recorded as `batchMeta.angle`):** wins by being the only post that treats
"free" as a budget constraint attached to a surprise mechanic — naming what free
actually charges you elsewhere and refusing to quote a figure for SubhSandesh
because our own facts file is blank — grounded in 1,125 `/love-gf` pages, 25.8% of
everything created, and the 49.2% of views landing on a touch device.

---

## Mandatory differentiation (`mustDifferentiate: true`)

`nearestWritten`: **`cute website for girlfriend`** (4/10 shared organic URLs).
Read from `blogs/cute-website-for-girlfriend.json` — its angle is that "cute" is a
separate format from "romantic", built around joke-shaped pages sent on a day that is
not anything, using the 3.7% occasion-dated / 96.3% everyday split. Its H2s are about
what makes a page cute, five cute ideas, and what to write with no occasion.

> **The split, in one sentence:** the published `cute website for girlfriend` answers
> which page is nicest to look at; this post answers what you can build when you have
> no money and the reveal itself has to carry the gesture — the budget constraint and
> the surprise mechanic, not the aesthetic.

That post is linked from the mechanics section with the descriptive anchor
"a joke-shaped cute page rather than a romantic one", placed after the five mechanics
have earned the comparison. No overlap in facts used (it uses the 3.7%/96.3% lines,
this post uses none of them) and no overlap in sources.

`overlapWithNewRow`: **`virtual gift for online friend`** — no file exists in
`blogs/` at the time of writing, so its H2s could not be read. Mitigation: this post
is entirely girlfriend-and-romance framed, names no friend/platonic use case, and
does not target "virtual gift" as a secondary keyword. Recorded as a residual risk.

Also checked in `blogs/`:

- `romantic-website-for-girlfriend` — "what goes on the page", five content blocks,
  interrupted-presence framing. No structural or keyword overlap with this post's
  mechanics-and-budget framing.
- `website-to-impress-girlfriend` — "will it actually land", reception-focused.
- `how-to-make-a-website-for-your-girlfriend` — the build order, five steps. It uses
  94.1% and 49.0% as its opening pair, so those two facts were **deliberately avoided**
  here.

None of their primary keywords appears in this post's `keywords` string.

---

## Phase 3 — Sources

### API conditions during this run (2026-09-16)

Per BRIEF-WAVE3 §3, Crossref and DOAJ first. Measured:

- **Crossref** — worked throughout. Used for discovery and for real publication dates.
- **DOAJ** — worked, with the documented caveat that long queries return nothing;
  field-scoped Elasticsearch syntax (`bibjson.title:(…)`, `bibjson.abstract:(…)`)
  worked far better than plain keyword strings.
- **Unpaywall** (`api.unpaywall.org`) — worked, and was the most useful addition:
  it resolves a Crossref DOI to every open-access location, including repository
  landing pages, which is how blocked publishers were routed around.
- **OpenAlex** — **HTTP 429 on all six queries, first attempt.** No retry loop was
  written; the tool was switched immediately.
- **Semantic Scholar, CORE** — not attempted, per the brief's warning.

Hosts that refused this sandbox during this run: `onlinelibrary.wiley.com` (403),
`hrcak.srce.hr` (418), `dl.designresearchsociety.org` (403),
`businessperspectives.org` (403), `cris.maastrichtuniversity.nl` (404 on the
constructed landing path), `jurnal.uii.ac.id` and `mjaf.journals.ekb.eg` (DNS
failure).

### Search terms tried

`surprise anticipation positive affect gift`, `effort signalling gift value perceived`,
`low cost gesture perceived thoughtfulness`, `gift giver recipient effort asymmetry`,
`it's the thought that counts gift exchange thoughtfulness`,
`anticipation valuation delayed consumption savoring`,
`personal data as payment free digital services consumers`,
`effort heuristic quality judgment time spent`,
`pleasures of uncertainty prolonging positive mood`,
`handmade effect love perceived value product`,
`freemium watermark conversion free users digital platform`, plus DOAJ field queries
on `gift`, `surprise`, `savoring`, `freemium`, `dark patterns`, `virtual gift`,
`handmade`, `long distance relationship`.

### Sources rejected, and why

- `digitalcommons.georgiasouthern.edu/jamt/vol4/iss1/5` (Gift Cards and Gift Giving)
  and `icesi.edu.co/…/article/view/3539` (Personal values and gift giving) — both
  fetched and verified, both then found in **`SPENT-SOURCES.json` → `urlsAtCap`**.
  Forbidden. Dropped.
- `dergipark.org.tr/en/pub/pgy/article/1681217` (Long Distance Romantic
  Relationships) — full text read via `pdftotext`, then found in `urlsAtCap`. Dropped.
  It also failed the swap test: long-distance framing fits a dozen posts in this batch.
- `onlinelibrary.wiley.com/doi/10.1002/mar.22174` (The Gift of Choice) and the
  Zagreb *Personal Data as Means of Payment* paper — both on-angle, both unfetchable.
  Never cited unread.
- `tidsskriftet-nof.no/…/465` — fetched, turned out to be a **book review**
  (`Seksjon: Bokomtale`), not a study. Dropped.
- `journalqd.org/article/view/3970` (*Community gifting groups on Facebook*) — fetched
  and verified, and originally cited here. The batch verifier then reported it in
  **3 posts** (`digital-gift-ideas-for-best-friend`,
  `long-distance-relationship-gifts-online-free`, this one) — two wave-3 siblings had
  taken it concurrently, so it was not in `SPENT-SOURCES.json` when checked. Swapped
  out for the Dancecult paper below, which makes the same point more sharply.

### Sources used — all four fetched and verified

| # | Source | Domain | Published | What it actually says | Where used |
|---|---|---|---|---|---|
| 1 | Nezlek & Bryant, *A Polish-language version of the Savoring Beliefs Inventory*, Current Issues in Personality Psychology | `cipp.ug.edu.pl` | 2026-02 | N = 574 Polish adults; SBI measures anticipating, savouring the moment and reminiscing as three distinct factors, each internally consistent (ω = .72–.77) | Mechanics section intro; FAQ 8 |
| 2 | Harahap, Alnazhary, Reksohaminoto, Djibat & Handayani, *User's Switching Intention from Social Media Freemium to Premium*, Jurnal Sistem Informasi 21(2) | `jsi.cs.ui.ac.id` | 2025-10-01 | Survey of 507 social media users in Indonesia plus 30 in-depth interviews; functionality, **advertising intrusiveness**, relative advantage, price value, switching cost and social influence all shape switching intention | "What free charges you" |
| 3 | Gunawan, Gray, Santos & Bielova, *Leveraging interdisciplinary methods for evidence collection in enforcement: Dark patterns as a case study*, Internet Policy Review 14(4) | `policyreview.info` | 2025-11-18 | Dark patterns = "manipulative, deceptive design practices deployed in online services to influence users' decisions towards undesired or negative outcomes"; surveys enforcement actions and regulatory fines worldwide | "What free charges you" |
| 4 | Petiau, *Free Parties and Teknivals: Gift-Exchange and Participation on the Margins of the Market and the State*, Dancecult 7(1), trans. Garcia | `dj.dancecult.net` | 2015-06 | Ethnographic and historical study of French free parties, which are understood as free in **both** senses of the word (*liberté* and *gratuité*) while relying on financial and in-kind donations; read through Mauss's gift-exchange framework, "gifts come with strings attached" and participants' donations "may not be as optional and freely given as they seem" | "What free charges you" |

All four are open access. **All four domains are new to this batch** — none appears in
`SPENT-SOURCES.json` under `domainsAtCap`, `domainsAtTwo` or `urlsAtCap`, and none
appears in any sibling's `sources` array as of 2026-09-16.

**Reading depth, disclosed:** source 1 was read in full HTML (Results, Discussion,
Conclusions). Sources 2 and 4 were read at the open-access **landing-page abstract**
only — for source 4 that abstract includes the translator's introduction, which is
where the *liberté*/*gratuité* and "strings attached" claims sit verbatim; every
claim made from them is abstract-level. Source 3 was read as abstract plus the
article's own framing sections. None is paywalled.

**One verifier-driven correction, recorded rather than hidden:** the first draft of
this post carried the phrase "the wait is the part that costs you nothing to build",
which `scripts/verify-batch.mjs` correctly flagged as a `COST CLAIM`. It was rewritten
to "the part you build out of patience rather than money". No other priced phrase
appeared in any reader-facing surface.

**Zero generic context statistics.** No PIB, TRAI, Census or MEA figure appears.
**Zero Wikipedia links in the body** (`en.wikipedia.org` is at 2 in this batch);
Wikipedia and Wikidata appear only as `sameAs` entity references inside
`structuredData`, which the verifier explicitly does not count as citations.

---

## Phase 4–5 — Draft decisions

- **Templates.** All three assigned templates are used and all three genuinely fit:
  `/hold-my-hand` and `/catch` are *mechanics* rather than pages, which is exactly
  what a surprise needs, and `/love-gf` is the earnest alternative the post
  deliberately holds up against them. Descriptions were taken from `TEMPLATE_LINKS`
  in `app/lib/prompt.ts`, not guessed: Hold My Hand drains if you let go; Catch
  never locks anything, each catch just adds a line.
- **Internal links (4, all from `TEMPLATE_LINKS`):** `/templates` (twice — once in
  the opening honesty paragraph, once at the closing check-for-yourself line),
  `/hold-my-hand`, `/catch`, `/love-gf`. Plus the cross-link to
  `/blog/cute-website-for-girlfriend`, which the verifier excludes from the 2–4 count.
- **Category:** `digital-gifts-romance`, confirmed present in the live Strapi
  category list.
- **Slug:** checked against Strapi — `filters[slug][$eq]=surprise-website-for-girlfriend-free`
  returned `total: 0`. Free to use.
- **`structuredData`:** an `ItemList` mirroring the five H3s in order, plus one
  `@id`-matched `BlogPosting` enrichment block on `<canonicalURL>#post` carrying
  `about`, `mentions` and `citation` one-to-one with `batchMeta.sources`. Every
  `sameAs` was verified through the Wikipedia API with its Wikidata QID paired
  (Gift Q184303, Surprise Q333173, Anticipation Q255266, Freemium Q1444631,
  Dark pattern Q30325366). No `AggregateRating`, `Review` or `HowTo`.
- **FAQs:** ten, in `article.faqs` only. None restates a body heading; the highest
  token overlap against any H2/H3 is well under the 0.6 review threshold.

---

## Phase 6 — Audit summary

48 passed, 2 failed, disjoint, summing to the checklist's 50 items (strings copied
byte-verbatim, markdown markers intact).

**Failed, and why they are recorded rather than fixed:**

1. *No source passes the **swap test*** — the Internet Policy Review dark-patterns
   source is about the cost of "free" online in general and could sit unchanged in
   another "free"-keyword post in this wave. The other three are pinned to this
   post's angle. No closer-fitting open-access substitute survived the batch
   URL/domain caps; the honest record is preferable to a worse source.
2. *3–6 outbound links, all fetched and verified* — four, not more, and two of those
   verified at abstract level. Closing it needs the full texts, or a fifth and sixth
   source; the eight richest repositories for this subject are at the batch domain cap.

**Honest assessment** is recorded in `batchMeta.auditReport.honestAssessment`.
Short version: this is the only page on the SERP that refuses to state a price and
then explains what free actually costs, which is a real and defensible difference —
but eight of ten ranking URLs are transactional product pages, and no article is
going to be the natural answer to a query where the searcher wants a builder.
