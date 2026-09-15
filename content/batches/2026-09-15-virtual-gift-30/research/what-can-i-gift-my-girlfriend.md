# Research brief — what can i gift my girlfriend

- **Batch:** 2026-09-15-virtual-gift-30
- **Slug:** `what-can-i-gift-my-girlfriend`
- **Primary keyword:** what can i gift my girlfriend
- **Secondary keywords:** what should i gift my girlfriend · what will be the best gift for girlfriend · what should i give my girlfriend as a gift
- **Category:** `digital-gifts-romance`
- **Templates:** `/love-gf`, `/train-ticket`, `/capsule`
- **Written:** 2026-09-15

---

## Phase 1 — SERP analysis

Measured India SERP for the primary keyword, supplied with the assignment:

| Position | Property | Shape |
|---|---|---|
| 1 | Reddit | Thread — crowd-sourced anecdote, no structure, no data |
| 5 | Quora | Answer stack — long personal answers, heavily upvote-sorted |
| 7 | Instagram | Reel/carousel — visual idea dump |
| — | Remainder | Gifting-retailer listicles (treated as competitors; read, never cited) |

Two things follow from that shape:

1. **The query is question-shaped and forum-held.** That is exactly the profile ChatGPT, Perplexity and AI Overviews synthesise around, because no single page offers an extractable answer — they assemble one. A page that *is* the extractable answer is the one that gets cited.
2. **The intent in this SERP is physical.** Nobody in the top ten is selling a digital page. Reddit and Quora answers are about perfume, jewellery, handwritten letters, scrapbooks and "just ask her". Writing this post as a digital-gift pitch would mismatch the SERP and lose on relevance before authority ever mattered.

BRIEF §2 governs this batch toward the digital-gift searcher. This keyword is the exception inside that rule, and the assignment says so explicitly: cover the real decision honestly, and position the page only for the cases where it genuinely wins.

## Phase 2 — Gap analysis and fan-out sub-queries

What every page in the SERP is missing: **a decision procedure**. Every result is a list of options. None tells the reader how to choose between the two categories — an object versus something made.

Fan-out sub-queries the post must answer standalone, mapped to H2s:

| Sub-query | H2 |
|---|---|
| what actually makes a gift good for a girlfriend | What makes a gift land with a girlfriend? |
| what to gift a new girlfriend / few months in | Question 1: How long have you been together? |
| how much should I spend on my girlfriend | Question 2: What can you actually spend? |
| what to gift a long distance girlfriend / can't meet her | Question 3: Will you be in the room when she opens it? |
| is a public surprise a good idea / she's private | Question 4: Does she want other people to see it? |
| physical vs digital gift comparison | The four questions as a table |
| when is a digital gift a bad idea | When a physical gift is simply the right answer |

**Angle:** wins by being the only post that answers "what can I gift my girlfriend" as a four-question decision rather than an idea list, with a measured boundary condition behind the physical-vs-digital call (44.8% vs 27.7%) and first-party build behaviour no gift guide can publish.

**Claim no top-5 page makes:** that whether you will physically be present when she opens it is the variable that should decide the *category* of gift — and that there is an experiment showing givers' own preferences shift by 17 percentage points on exactly that condition.

## Phase 3 — Sources

Cap position checked against the six sibling posts already in `blogs/` before choosing. `arxiv.org` (4 posts) and `pmc.ncbi.nlm.nih.gov` (3) were treated as unusable; `frontiersin.org` and `aodr.org` had one slot each and were not needed. **All five domains below are new to this batch.**

| # | Source | Why it is here | Test |
|---|---|---|---|
| 1 | Yang, A. X. & Urminsky, O., *Psychological Science* 29(8): 1221–1233, 2018 — [open author manuscript](https://home.uchicago.edu/~ourminsky/Smile%20Seeking.pdf) | Six studies. Givers chose the reaction-maximising option 44.8% of the time vs 19.8% of recipients when presenting in person (N=227); 27.7% vs 26.4% when the giver would be absent (N=222); the 44.8→27.7 drop is significant at N=228. Full text read and the figures verified against the PDF. | Subject ✓ · scholarly ✓ · open ✓ |
| 2 | Gino, F. & Flynn, F. J., *Journal of Experimental Social Psychology* 47(5): 915–922, Sept 2011 — [abstract at Stanford GSB](https://www.gsb.stanford.edu/faculty-research/publications/give-them-what-they-want-benefits-explicitness-gift-exchange) | Five studies: recipients more appreciative of explicitly requested gifts; givers assume parity; Study 5 shows recipients rate money above a solicited gift while givers believe the reverse. **Abstract only — full text paywalled at ScienceDirect.** Nothing in the post goes beyond what the abstract states. | Subject ✓ · peer-reviewed ✓ · abstract-only ⚠ |
| 3 | Saad, G. & Gill, T., *Psychology & Marketing* 20(9): 765–784, Sept 2003 — [open PDF, Bauer College](https://www.bauer.uh.edu/mark/papers/saad_gill.pdf) | Mean gift expenditure $106.43 romantic partner / $73.12 close kin / $46.34 closest friend; n=93 undergraduates, eastern Canadian university. Also: men report tactical motives more often than women, and women know it. Full text read. | Subject ✓ · peer-reviewed ✓ · open ✓ |
| 4 | Givi, J. & Galak, J., *Journal of Consumer Psychology*, 2017 — [Society for Consumer Psychology release via ScienceDaily, 25 July 2017](https://www.sciencedaily.com/releases/2017/07/170725100701.htm) | Carnegie Mellon. Romantic-partner experiment: gift card vs framed couple photo with carved initials; recipients wanted the sentimental gift more often than givers gave it. The Wiley original returns HTTP 403, so the verified secondary is cited and attributed to the researchers in the body. | Subject ✓ · secondary source ⚠ |
| 5 | Murikkattu, N. E. et al., *World Journal of Advanced Research and Reviews* 23(02): 2736–2743, 2024 — [open access](https://wjarr.com/content/experiences-individuals-maintaining-long-distance-relationship-through-social-media) | Eight students aged 18–24, Kristu Jayanti College, Bengaluru. Voice and video calls named as central to intimacy at distance; privacy management within the family is an explicit theme. **n=8, qualitative — disclosed in the body prose, not only here.** | Subject ✓ · India-specific ✓ · open ✓ |

**Zero generic context statistics.** No PIB, TRAI, Census or MEA figure appears; the post did not need one. No Wikipedia link in the body (entities are grounded in `structuredData` only, which does not count against the 0–2 budget).

**Swap test — failed on two of five, honestly.** Sources 1, 3 and 5 are bound to sections that exist only in this post. Sources 2 and 4 are general giver/recipient mismatch findings that could sit unchanged in `digital-gift-for-girlfriend` or `online-gift-for-girlfriend`. Neither is cited there today, so no cap is breached, but the test is failed and is recorded as a failure in `auditReport`. Searches tried for an India-specific, open-access study of gift-giving inside dating relationships: `gift giving romantic relationship India study`, `gift giving recipient preference mismatch study`, `experiential versus material gift wellbeing`, `gift value perception givers recipients`. Nothing usable surfaced that was both India-specific and open.

## Phase 4 — First-party data used

From `content/facts.md`, regenerated 2026-09-15. Two inside the first 150 words, per BRIEF §4: the **40.6% password-lock rate** and the **6.2-hour median build**, both flagged in the brief as the least-obvious pair.

- 4,357 pages created since 2026-03-12 across 16 page types
- 1,125 `/love-gf` pages — 25.8% of everything built
- 49,968 recorded views; 11.5 views per page average
- 49.0% of views on a phone (24,493 of 49,968)
- 40.6% password-protected before sharing (1,767 of 4,357)
- 94.1% of started pages published and shared (4,098 of 4,357)
- Median first save → last edit 6.2 hours (`/love-gf`, n=1,125)
- Occasion-dated pages 144 of 3,894, 3.7% (measured 2026-09-09)

## Phase 5 — Internal links and targeting

Four internal links, all from `TEMPLATE_LINKS`, each placed after the section that establishes why the reader would want it:

- `/train-ticket` — inside Question 3, after the distance argument is made
- `/love-gf` — inside Question 4, after the privacy argument is made
- `/capsule` — inside the objection section, attached to "a gift that does not get used up"
- `/templates` — closing line, browse-all

`batchMeta.templateUrls`: `/love-gf`, `/train-ticket`, `/capsule`. `/templates` is a real URL in the list but is left out of `templateUrls`, which resolves to Strapi template entries.

`categorySlug`: `digital-gifts-romance`, verified live against the Strapi categories endpoint on 2026-09-15. Slug verified free — `filters[slug][$eq]=what-can-i-gift-my-girlfriend` returned zero matches.

`structuredData`: an `@id`-matched `BlogPosting` enrichment block on `<canonicalURL>#post` carrying `about` (Gift, Q184303), `mentions` (Long-distance relationship Q1406917, Personalization Q1000371, Gift economy Q2233575 — all verified via the Wikipedia API with QIDs paired) and `citation` mirroring `batchMeta.sources` one-to-one; plus an `ItemList` of the four questions in body order. No `HowTo`, no `Review`, no `AggregateRating`, no duplicate `FAQPage`.

## Phase 6 — Audit summary

47 passed, 3 failed, 50 items, disjoint and exhaustive. Failures recorded in full in `batchMeta.auditReport.failed`:

1. **Paragraphs 2–3 sentences throughout** — the prescribed opening answer block runs five sentences; every other paragraph is one to three.
2. **Slug short, hyphenated, lowercase, no stop words** — the slug is the verbatim question keyword and carries three stop words. Kept deliberately to stay in sync with `batchMeta.keyword` and the H1.
3. **No source passes the swap test** — two of five fail it, as set out above.

## What this post deliberately does not do

It does not claim a personalised page beats a physical gift in general. The objection section names four cases where it loses outright — you will see her this week, she has asked for something specific, the occasion carries an expectation, or she simply prefers objects — and backs the last one with our own 3.7% occasion-dated share. Where a page wins is stated narrowly: distance, no delivery address, hours rather than days, or wanting something that is not used up.
