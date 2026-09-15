# Research brief — `virtual-gift-link-free`

- **Primary keyword:** `virtual gift link free`
- **Secondaries:** `virtual gift maker free`, `virtual gift link generator free`, `virtual gift maker online free`, `send free virtual gifts online`
- **Cluster intent:** FREE + TOOL. The searcher wants to make and send a gift link now, at no payment, and wants to know what they are getting before they invest an evening.
- **Category:** `digital-gifts-romance` (verified live in Strapi 2026-09-15)
- **Templates:** `/templates`, `/love-gf`, `/apology-dashboard`
- **Slug check:** `filters[slug][$eq]=virtual-gift-link-free` returned `{"data":[],"total":0}` — free (checked 2026-09-15).

---

## Phase 1 — SERP analysis

Measured 2026-09-15 on the India-facing SERP for `virtual gift link free`, plus the
secondary queries `virtual gift link generator free` and `virtual gift maker online free`.

**Every result on page one is a maker's own landing page.** There is no editorial page,
no research-backed page, and no page that is not selling the tool it describes.

| # | Page | What it is | Word count / shape | Where the answer sits | Data cited | Format elements | Tone | Optimising for |
|---|---|---|---|---|---|---|---|---|
| 1 | `giftsqr.com/en/seo/virtual-gift-link` (competitor) | Programmatic SEO landing page, one per keyword phrase | ~350, no real H2 depth | Above the fold, as a product claim | None | CTA buttons, feature bullets, QR pitch | Second-person sales copy | The exact keyword string, at scale |
| 2 | `gifft.me/create` and `gifft.me/` (competitor) | Product home + builder entry | ~400 | Above the fold | None | Template grid, "free" repeated | Cheerful, imperative | Conversion, not information |
| 3 | `aiskyla.com` (competitor) | Product home, "No. 1 Free Virtual Gift Service" | ~450 | Above the fold | None | Feature list, "no downloads, no sign-ups, no fees" | Superlative | Brand + head term |
| 4 | `gifter.live` (competitor) | Product home | ~300 | Above the fold | None | Three-step explainer | Plain, thin | "gift link" head term |
| 5 | `surprises.gift`, `qlovy.com/en/blog/free-digital-gift`, `giftfeels.com/create`, `swipewrap.com` (competitors) | Product homes and one product blog post | 300–900 | Above the fold | None | Template grids; qlovy states a 24-hour active window on its free level | Sales copy | The same keyword set |

None of these are citable (BRIEF §1 + `references/competitors.md`). They are recorded
here to establish the shape of the competition, not as sources.

**Observations that decide the post:**

1. The word "free" is asserted on every page and defined on none of them. Only one
   competitor states any concrete limit attached to it.
2. Not one page mentions that a gift link is a URL anyone who receives or guesses it
   can open. That is the largest unclaimed gap in the category.
3. Not one page carries a third-party citation or a dated statistic of any kind.
4. Zero pages discuss what happens to the page later — retention, expiry, link rot.
5. All are landing pages, so all answer "what is this product" and none answer
   "how do I do this well".

## Phase 2 — Gap analysis

**Table stakes** (present on all five, so the post must have them): what a virtual gift
link is; that the recipient needs no app or account; a step-by-step build; the fact that
you share it as a URL or QR; examples of what you can make.

**The gap** — three things none of them do:

- Define what "free" reliably covers in this category, and say plainly where the
  payment page usually appears.
- Treat the gift link as a security object. An unlisted URL is not a private URL.
- Give any measured behaviour at all — how long a build actually takes, how often a
  page is reopened, how many people lock one.

**Stale data:** not applicable. There is no data on any competing page to supersede,
which is itself the finding.

**Unanswered questions raised and dropped by the competing pages:** how long the page
stays up; whether the recipient sees a maker's badge; whether anyone else can open the
link; whether editing after sending does anything.

**Fan-out sub-queries** (each became an H2 or an FAQ):

| Sub-query | Where it landed |
|---|---|
| What is a free virtual gift link? | H2 2 |
| How do I make one / steps? | H2 3, five H3s + ItemList |
| Free link vs other ways to send something? | H2 4, comparison table |
| What does "free" include, what is gated? | H2 5 |
| Is a gift link private? Can anyone open it? | H2 6 |
| Is a self-made page actually better? | H2 7 |
| When should I not use one? | H2 8 |
| Account needed? preview spoilers? editing after sending? expiry? scheduling? | FAQs (kept out of the body so they do not restate a heading — BRIEF §8) |

**Angle:** wins by being the only post that says out loud what the word "free" does and
does not cover on a virtual-gift-link maker — refusing to state a price it cannot
source — and backs the two limits nobody else names (an unlisted URL is not private; a
page is not permanent) with the 40.6% of SubhSandesh creators who password-protect
before sharing and the 94.1% who publish at all.

## Phase 3 — Sources

Search terms used: `zero price effect free products study`, `freemium conversion zero
price effect open access`, `free vs paid apps privacy empirical study`, `short URL
enumeration unlisted link privacy`, `effort self-made valuation gift`, `link rot how
long web pages last`, plus the India-specific attempts noted below.

Four sources, all fetched and read in full. Nothing paywalled, no generic context
statistic, no government release, no Wikipedia body link, no competitor.

| Source | Publisher / date | Verified claim used | Subject test | Swap test |
|---|---|---|---|---|
| [Zero as a Special Price: The True Value of Free Products](https://web.mit.edu/ariely/www/MIT/Papers/zero.pdf) | Shampan'er & Ariely, MIT, 2007 (published in *Marketing Science* 26(6)) | Demand for the Hershey's Kiss rose 27% → 69% when its price went from 1¢ to 0¢; demand for the Lindt truffle fell 73% → 31% | Passes — it is about the word this post is built on | Passes — useless in any sibling post that is not about a price of zero |
| [Can You Pay for Privacy?](https://btlj.org/data/articles2020/35_1/07_Bamberger_WEB.pdf) | Bamberger, Egelman, Han, Elazari Bar On & Reyes, *Berkeley Technology Law Journal* 35:327, 2020 | 5,877 Android apps in free and paid versions: 48% of paid apps carried all the same third-party code, 56% the same privileges, 38% collected all the same data; 83% of 1,000 surveyed chose the free app before privacy was raised | Passes — free-versus-paid behaviour is the post's subject | Passes — no other post in the batch turns on the free/paid distinction |
| [Gone in Six Characters](https://freedom-to-tinker.com/2016/04/14/gone-in-six-characters-short-urls-considered-harmful-for-cloud-services/) | Vitaly Shmatikov, Princeton CITP / Freedom to Tinker, 14 April 2016 — the author's own write-up of the Cornell/UT Austin study | A sample scan of 100,000,000 bit.ly URLs with random 6-character tokens resolved 42% of the time; 19,524 of those led to OneDrive/SkyDrive files and folders | Passes — the delivery mechanism of the product is a shareable URL | Passes — only this post argues the gift link is a security object |
| [The "IKEA Effect": When Labor Leads to Love](https://www.hbs.edu/ris/Publication%20Files/11-091.pdf) | Norton, Mochon & Ariely, HBS Working Paper 11-091, 4 March 2011 (published *JCP* 2012) | Builders valued their own origami at $0.23, indistinguishable from the $0.27 non-builders bid for expert work, while non-builders bid significantly less for the builders' pieces | Passes — the post's whole premise is that you supply the labour | Passes — it is used here to warn the giver their valuation is inflated, not to flatter the format |

Open-access: all four. Peer-reviewed in their published form: the Ariely zero-price
paper (*Marketing Science* 26(6)) and the IKEA-effect paper (*Journal of Consumer
Psychology*, 2012); BTLJ is a law journal; the Freedom to Tinker post is the paper's
own author writing up the study on Princeton's CITP blog and is the one source here
that is not itself a paper.

**Cap position:** `web.mit.edu`, `btlj.org`, `hbs.edu` and `freedom-to-tinker.com` are
all new to this batch, and no URL is reused. The link-privacy source was originally
`arxiv.org/abs/1604.02734`; a mid-run re-check of the sibling posts showed `arxiv.org`
had reached 5 posts against a cap of 3, so it was swapped for the authors' own write-up
on a different publisher rather than contributing to a breach. That write-up carries
harder numbers than the abstract did (100,000,000 tokens scanned, 42% resolved, 19,524
OneDrive hits), so the swap improved the citation.

**What could not be sourced.** No Indian study of free digital gifting or freemium
adoption was found under `digital gift giving India study`, `freemium conversion India`,
`virtual gift link India research`. Rather than pad with a TRAI or PIB connectivity
figure — which would pass the subject test for nothing — the post carries no Indian
third-party evidence and the audit records that as an open item.

## Phases 4–7 — Build notes

- **First 150 words:** exactly 150, carrying 94.1% published-and-shared and 40.6%
  password-protect, per BRIEF §4's instruction to prefer those over the raw totals.
  The literal string `virtual gift link free` appears at word 82.
- **Word count:** 1,783 in `contentMarkdown`, FAQs excluded.
- **Pricing:** `content/facts.md` has an empty Pricing block — `Free tier includes:` and
  `Paid tier price:` are both blank. The post therefore states no price for SubhSandesh
  or for any competitor, and says so to the reader in the "What 'free' reliably covers"
  section rather than hiding the omission. Recorded in `auditReport.honestAssessment`.
- **Comparison table:** four routes × five columns, with the first-party column
  (6.2 h median build, 40.6% locked, 11.5 views) measured and the other rows honestly
  marked "not measurable".
- **Downside section:** "When a free gift link is the wrong thing to send" — same room,
  weak connection, serious occasion, permanence.
- **FAQs:** 11, none above 0.6 token overlap with any heading (checked with the
  verifier's own Jaccard function before emitting).
- **structuredData:** an `@id`-matched enrichment block on `<canonicalURL>#post` with
  `about`/`mentions`/`citation` mirroring `batchMeta.sources` one-to-one, plus an
  `ItemList` mirroring the five H3s in order. Every `sameAs` checked against the
  Wikipedia API: Virtual gift `Q7935109`, Freemium `Q1444631`, URL shortening `Q637342`,
  Gift `Q184303`.
- **Audit:** 49 passed, 1 failed, disjoint, 50 total. The single failure is the
  metaTitle's exact-keyword word order. The absence of any India-specific source was
  briefly logged as a second failure and moved out again: the post cites zero
  PIB/TRAI/Census/MEA statistics, so it passes that item on the letter, and recording a
  passing item as failed would be as dishonest as hiding a real one. It is named in
  `honestAssessment` instead, alongside the empty Pricing block.
