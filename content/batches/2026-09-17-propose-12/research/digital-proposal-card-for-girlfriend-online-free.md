# Research brief — "digital proposal card for girlfriend online free"

Batch `2026-09-17-propose-12` · slug `digital-proposal-card-for-girlfriend-online-free` ·
categorySlug `digital-gifts-romance` · researched 17 September 2026.

Slug checked against Strapi (`filters[slug][$eq]`) — 0 results, free to use.

---

## Phase 1 — SERP analysis

Keyword is 7 words, long-tail, transactional. No head-term warning needed.

Two searches were run: the exact keyword, and the bare `proposal card online free`
to test the contamination the batch brief warned about.

### Exact keyword — "digital proposal card for girlfriend online free"

| # | Result | What it is | Words (fetched) | Where the answer is | Data cited | Format | Optimising for |
|---|---|---|---|---|---|---|---|
| 1–2 | etsy.com/market/poster_for_girlfriend_proposal, etsy.com/market/girlfriend_proposal_cards | Marketplace listing grids for **printed** posters and cards | 403 to fetchers | No answer anywhere — it is a product grid | None | Listing tiles, no prose, no FAQ | Marketplace transactions for physical stationery |
| 3 | postermywall.com (search: proposal card) | Template search results, "805+ free templates" | 26 readable words; body is JavaScript-only | None. `<h1>` renders as "JavaScript is disabled" | None | No prose, no FAQ | Template-library signups; design-free / pay-to-export |
| 4 | momentocard.in/proposal | **Competitor.** Romance card tool landing page | 679 | H1 is the product name; benefit claims follow | None | 7 H2s, FAQ block, emoji headings | Tool signup ("no signup", "free") |
| 5 | loveestimator.com/create-proposal | Tool landing page + inline generator | 765 | H1 states the product; the page *is* the form | None | Step list, "why people love" block | Tool use |
| 6 | template.net/edit-online/213781/love-proposal-card | Single template editor page | 495 | No answer; it is an editor shell | None | One real H2 ("You may also like") | Editor upgrade — page carries "sign up" and "upgrade"; also carries bridesmaid inventory |
| 7 | mynameart.com/create-card/... | Card generator | 403 to fetchers | n/a | None | n/a | Tool use |
| 8 | bemyval.co | **Competitor.** Date-proposal site maker | 1,645 | H1 is a product promise | None | 4 H2s + FAQ | Free tier → premium upgrade |

**Finding: not one of the eight is an article.** Six are tool or marketplace pages and
two return 403 to any reader that is not a browser. Nothing on the first page defines
what its own "free" covers, and no result cites a single number of any kind.

### Contamination check — bare "proposal card online free"

Confirmed, and worse than at the long-tail. Four of ten results answer a different
question entirely:

- greetingsisland.com — "Free Will You Be My Bridesmaid Cards"
- bachbride.com — free bridesmaid proposal cards
- brandcrowd.com — "Proposal Business Cards" (B2B sales collateral)
- zazzle.com — printed marriage-proposal stationery

The sibling post's finding (6 of 10 bridesmaid/groomsmen for bare "virtual proposal
card") reproduces here at 4 of 10. Handled in one paragraph in the definition section,
plus one FAQ — not a whole H2, because the searcher who typed "for girlfriend" has
already half-disambiguated.

### Competitors — read, never cited

momentocard.in, bemyval.co, loveestimator.com, template.net, postermywall.com,
mynameart.com, greetingsisland.com and **bondlyfe.com** (named in the task as an active
competitor publishing long answer-first guides in this territory) are all treated as
competitors under `references/competitors.md`. Zero links, zero paraphrase, zero
borrowed statistics. The five "free" models in the body are described as category
patterns, unattributed, because they are common industry knowledge — no competitor is
named as the example of any one of them.

---

## Phase 2 — Gap analysis

**Table stakes** (present on most of the top pages, so the post must cover them):
what the card is, that it can be made in a browser, that it sends as a link, that it
opens on a phone with nothing installed, how long it takes.

**The gap.** Every page leads with "free" and not one of them says what free covers.
PosterMyWall means "free to browse 805 templates"; Template.net's editor page carries
both "sign up" and "upgrade"; BeMyVal carries "premium" and "upgrade". The word is
doing at least three different jobs across one SERP and no page acknowledges it. That
is the post: **a taxonomy of free, and a ninety-second test to find out which one you
are on.**

**Second gap.** Nobody addresses the emotional question underneath the query — whether
sending something free reads as cheap. That is the reason the searcher added "free"
and then hesitated. It is also a genuinely studied phenomenon (zero-price effect, gift
expenditure and perceived motive), so it can be answered with evidence rather than
reassurance.

**Stale data.** Not applicable — zero of the eight pages cite any data at all, which
is itself the citation opportunity.

**Fan-out sub-queries → H2s:**

| Sub-query | Where it lands |
|---|---|
| what is a digital proposal card | H2 1 |
| is it really free / what's the catch | H2 2 (five models) |
| how do I tell before I waste time | H2 3 |
| will a free card look cheap | H2 4 |
| is SubhSandesh free | H2 5 |
| proposal vs "be my girlfriend" | H2 6 + table |
| when should I not do this | H2 7 |
| why am I seeing bridesmaid cards | H2 1 tail + FAQ |

**Angle (batchMeta.angle):** wins by being the only post that names the five distinct
business models behind the word "free" and gives a ninety-second test for identifying
which one a tool uses, then answers "will it look cheap" with zero-price and
gift-suspicion research — grounded in the platform-wide 92.9% publish-and-share rate
across 4,524 pages and the 6.3-hour median edit gap sampled on /love-gf.

**Overlap control.** `virtual-proposal-card` is the category parent (file vs link vs
animated, link rot, how to send) and is linked *up* to from the definition section;
this post takes none of its ground. `propose-day-greeting-card-online-free` owns the
Propose Day angle, so **Propose Day and the 8 February 2027 date appear nowhere in
this post, body or FAQs.** `online-proposal-maker-free-for-girlfriend` owns the
"why does this search return B2B sales software" framing and the five-elements build
list; this post does not repeat either, and where both must state the pricing-data gap
the wording and placement differ.

---

## Phase 3 — Sources

Research lane: **the psychology of zero price** — not the gift-effort literature
(IKEA effect, giver/recipient asymmetry) already used by a sibling on nature.com and
hbs.edu.

Search terms used: `zero price effect study`, `zero price effect replication open
access`, `free product demand behavioral economics research`, `gift price perceived
thoughtfulness recipient study`, `does a free gift signal less effort research`,
plus DOAJ API queries for `"zero price"`, `"free gift" consumer`, `"price of zero"`,
and Crossref bibliographic search for `gift price perceived thoughtfulness
appreciation recipient` filtered to Creative Commons licences.

Allocated repositories were worked in preference order. `tandfonline.com` returned only
a paywalled 2010 inaction-inertia paper on free-gift promotions (off-angle); SSRN's
zero-price freemium working paper (5670171) returns HTTP 403 to every fetch; DOAJ
surfaced nothing on zero price outside already-used domains. OpenAlex was usable for
two DOI lookups before its API budget was exhausted. Final set draws on
`onlinelibrary.wiley.com` (2 of 3 allowed), `link.springer.com` (1) and
`cambridge.org` (1, unused elsewhere in the batch), plus one regulatory context source.

| # | Source | Date | Domain | What it supports | Test |
|---|---|---|---|---|---|
| 1 | [Looking a gift horse in the mouth](https://onlinelibrary.wiley.com/doi/10.1002/mar.21983), *Psychology & Marketing* | 14 Feb 2024 | onlinelibrary.wiley.com | Large gift expenditures can make recipients suspicious of givers' motives; time, effort and experiential gifts are less prone to suspicion and appreciated more | subject ✓ swap ✗ |
| 2 | [The role of social norms in zero price effects](https://www.cambridge.org/core/journals/experimental-economics/article/role-of-social-norms-in-zero-price-effects/62AF95538420785B6341938B196AB7E8), *Experimental Economics* 28(5) | online 26 May 2026 | cambridge.org | Norm-elicitation + natural field experiment: high consumption of a free good is rated significantly less socially appropriate than at 1 cent; zero pricing raises the share who take anything, lowers the average taken | subject ✓ swap ✗ |
| 3 | [The boomerang effect of zero pricing](https://link.springer.com/article/10.1007/s11747-022-00842-1), *JAMS* | 14 Feb 2022 | link.springer.com | Five studies: zero price lowers demand vs a low price when incidental costs are high; dual-process affect-vs-scrutiny model | subject ✓ swap ✗ |
| 4 | [The zero-price effect in freemium business models](https://onlinelibrary.wiley.com/doi/abs/10.1002/mar.21211), *Psychology & Marketing* | 11 Apr 2019 | onlinelibrary.wiley.com | Two opposing intuitions in freemium response: "free mentality" and price–quality inference | subject ✓ swap ✗ |
| 5 | [CCPA Guidelines for Prevention of Misleading Advertisements, 2022](https://www.pib.gov.in/PressReleasePage.aspx?PRID=1832906), PIB | 10 Jun 2022 | pib.gov.in | Notified 9 June 2022; defines what constitutes a "free claim advertisement"; ₹10 lakh penalty, ₹50 lakh for repeat contravention | the single permitted context source |

**Peer-reviewed and open-access:** #2 (CC BY, verified on the article page) and #3
(CC BY, verified via the Crossref licence record). #1 is CC BY-NC-ND — cited and
linked, nothing reused.

**Verification honesty.** #2 and #5 were fetched in full. #1, #3 and #4 sit behind
publisher bot-blocking (HTTP 403 / Cloudflare challenge), so every claim attributed to
them was checked against the publisher-registered abstract through the Crossref API
and nothing beyond the abstract is asserted. This is recorded twice in
`auditReport.failed`.

**Domain caps re-checked against the six sibling files before adding:** arxiv.org 5
(at cap and banned for this post), pmc/ncbi 5 across two spellings (banned),
journals.plos.org 2, doi.org 2, nature.com 2 — all avoided. wiley, springer and
cambridge were at 0 in the batch before this post.

---

## Phase 4–5 — Draft and targeting

- 1,797 words in `contentMarkdown` (plain split), FAQs excluded.
- 8 H2s including Sources; 5 H3s inside the "five kinds of free" block, mirrored
  one-to-one by the `ItemList` in `structuredData`.
- First 150 words carry the direct answer plus two first-party numbers (92.9%
  published-and-shared, 40.0% password-protected), both explicitly labelled
  platform-wide across 16 page types.
- Comparison table uses first-party creation counts out of 4,524 pages, and leaves the
  `/proposal` row's count blank on purpose — proposal-specific figures were not
  obtainable for this batch and the post says so in prose rather than deriving one.
- 6.3 hours is labelled in prose as sampled on `/love-gf`, n=1,136.
- Internal links: `/proposal` (marriage), `/love-gf` (the "will you be my girlfriend"
  alternative, 1,136 pages / 25.1%), `/bouquet-gf` (flowers instead of a question),
  plus the parent post `/blog/virtual-proposal-card`.
- `templateUrls`: `/proposal`, `/love-gf`, `/bouquet-gf`.
- 11 FAQs, in `article.faqs` and the renderer-built FAQPage only.
- `structuredData`: `@id`-matched enrichment block on `<canonical>#post` carrying
  `about` (Marriage proposal, Q1057944), four `mentions` (Greeting card Q915196,
  Freemium Q1444631, Watermark Q43065, Gift Q184303 — all verified against the
  Wikipedia API with QIDs paired) and five `citation` entries mirroring
  `batchMeta.sources` one-to-one; plus the `ItemList`.

## Phase 6 — Audit summary

47 passed, 3 failed, disjoint, 50 total = checklist length. Failures: outbound-link
verification at abstract level for three publisher-blocked pages; the paywalled-abstract
disclosure; and one internal link pointing at the sibling blog post rather than a
`TEMPLATE_LINKS` entry.

**Flagged in `honestAssessment` rather than as a checklist item, because no checklist
item covers it:** SubhSandesh's exact free-tier limits were **not verifiable** — the
pricing block in `content/facts.md` is empty and has never been filled in by hand. The
post states only what can be supported (a page can be built, published and shared with
no card required), declines to print a tier table, and tells the reader to check
pricing on the template page first. Closing this needs the pricing facts entered, not
more writing. The same wall was hit by the `online-proposal-maker-free-for-girlfriend`
sibling.

**Domain-cap caveat.** The counts above were taken against the six sibling files that
existed at 17 September 2026. Five further keywords in this batch were being written
concurrently and could add to `onlinelibrary.wiley.com` (currently 2 of 3 from this
post alone), `link.springer.com`, `cambridge.org` or `pib.gov.in`. Re-check once all
twelve land.
