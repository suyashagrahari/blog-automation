# Research brief — `christmas gift for girlfriend`

- **Slug:** `christmas-gift-for-girlfriend` (re-verified free against Strapi on 2026-09-03: `filters[slug][$eq]` returned `total: 0`)
- **Batch:** `2026-09-02-bouquet-2`
- **Category:** `digital-gifts-romance` (re-verified live against `/api/categories`, id 1)
- **Secondaries:** `christmas gift ideas for girlfriend`, `christmas gift for gf`, `xmas gift for girlfriend`, `christmas surprise for girlfriend`
- **Occasion:** 25 December 2026 — computed as a **Friday** (`Date.UTC(2026,11,25).getUTCDay() === 5`). `publish_by 2026-10-20`.
- **Site history:** SubhSandesh has never covered Christmas. ~40 gift posts exist.

---

## Phase 0 — data gate

`content/facts.md` re-read at the 2026-09-02 regeneration (unchanged between the
first read and the resume). Eight keyword-relevant lines available, three of them
usable inside the first 150 words. Gate passes.

The **Pricing block is empty** — both manual lines (`Free tier includes:`,
`Paid tier price:`) are blank. This keyword pulls hard toward budget, so the post
carries an H2 that states the gap rather than dancing around it, and makes no cost
claim in any direction. Recorded in the audit as the largest unanswered reader
question for this keyword.

Facts used (verbatim, all measured 2026-09-02):

| Fact | Where it lands |
|---|---|
| Median gap between first save and last edit: 6.9 hours (n=996, /love-gf) | Answer para, deadline H2, table, FAQ, takeaway |
| 99.5% of started pages are published and shared (3,379 of 3,397) | Answer para, takeaway |
| 50.2% of shared pages opened on a phone (20,937 of 41,682) | Answer para, objection H2, FAQ |
| 3,397 pages across 15 page types since 2026-03-12 | Definition H2, table |
| #2 page type: /bouquet-gf, 796 created, 23.4% | Definition H2, table |
| #1 page type: /love-gf, 996 created, 29.3% | H3 2, table |
| Most-viewed template: love-gf, 14,692 views, 35.2% | Table |
| 42.8% password-protect before sharing (1,455 of 3,397) | Objection H2, FAQ |

---

## Phase 1 — SERP

`WebSearch` was exhausted (200/200) before this post started and `WebFetch` is
hook-blocked, so **the SERP was not independently re-measured.** The composition
below is the assignment's 2026-09-02 measurement, taken as given. No competitor
page was fetched in this run, which means the "table stakes" and "framing" reads
below are inferences from the publisher type, not from the page text — a real
limitation, recorded in `honestAssessment`.

Measured 2026-09-02, top 9: `nytimes.com`, `amazon.in`, `nypost.com`,
`blog.messagear.com`, `etsy.com`, `winni.in`, `glamour.com`, `giftrabbit.com`,
`myflowertree.com`.

| Result | Type | Weak? | What it optimises for |
|---|---|---|---|
| nytimes.com (Wirecutter-style) | Genuine editorial authority | No | Annually refreshed, tested product picks |
| glamour.com | Genuine editorial authority | No | Aspirational product roundup, affiliate |
| nypost.com | Genuine editorial authority | No | Volume commerce content, affiliate |
| amazon.in / etsy.com | Marketplace | Vendor | Selling, not answering |
| winni.in / myflowertree.com | Gifting retailer (competitor) | Vendor | Selling, not answering |
| blog.messagear.com | Thin content | Weak | Keyword coverage |
| giftrabbit.com | Thin affiliate | Weak | Keyword coverage |

Effective weakness ≈ 3 of 9 (two weak plus one vendor). **Nominally winnable,
actually not.** This is not the retailer vacuum the brief describes for the
"retailer-owned" SERP kind — three of the nine are national editorial brands
whose gift-guide programmes are a deliberate, funded, annually-refreshed category.
A new page on a low-authority domain does not displace those.

**Every ranking page assumes American Christmas.** That is the whole opening.

---

## Phase 2 — gap analysis

**Table stakes** (inferred from publisher type, not fetched): a list of ideas with
names; some segmentation by budget or by relationship stage; a "last minute"
mention; delivery reassurance on the retailer pages.

**The gap — two things, both genuinely uncovered:**

1. **The pages that rank were written for a different Christmas.** They assume a
   household where 25 December is the year's central family gift exchange. In
   India Christmas is a gazetted holiday and, for Christian communities in Kerala,
   Goa, the North-East and elsewhere, a full religious festival built around
   church and family. For a lot of other couples it is one dated evening they
   choose to mark — and in 2026 it is a **Friday**, which is why an evening plan is
   realistic this year. The claim in the post is about *the ranking pages' US
   assumption*, never about the occasion being minor here.
2. **The shipping-deadline problem.** 25 December is immovable and a physical gift
   ordered too late does not arrive at all. A link has no delivery window; it has
   a build window instead, and ours is measurable at a 6.9-hour median. That is
   the one structural advantage worth stating plainly, and no ranking page states
   it because every one of them is either selling the parcel or reviewing it.

**Stale data:** not assessable — no competitor page was fetched.

**Fan-out sub-queries → H2/H3 map:**

| Sub-query | Where answered |
|---|---|
| what counts as a christmas gift for a girlfriend | H2 2 (definition) |
| christmas gift for girlfriend india | H2 3 |
| is christmas 2026 a friday / working day | H2 3, FAQ 9 |
| when do I have to order by | H2 4 (deadline) |
| christmas gift ideas for girlfriend | H2 5 (five H3s) |
| digital vs physical christmas gift | H2 6 (table), H2 8 |
| christmas gift for girlfriend budget / cheap | H2 7 — answered by naming the gap |
| christmas gift long distance girlfriend | H3 1, FAQ 7 |
| when is a physical gift better | H2 8 |

**Angle (recorded as `batchMeta.angle`):** wins by being the only post that orders
the options by the last date you can still start one, and the only one that says
plainly it will not sort by budget.

**Kept off the sibling's ground.** `new-year-gift-for-girlfriend` is about the
year ahead (its H2s: what makes a New Year gift different, how the options hold
the year ahead, building one on 31 December). This post is about the day itself
and the deadline before it. Zero source-URL overlap; `/capsule` was deliberately
not linked here because "predictions about the next year" is that post's territory.

---

## Phase 3 — sources

Route that worked: **Crossref (`query.bibliographic` + `filter=has-license:true`)
→ Unpaywall → publisher/repository.** DOAJ's article API was productive for the
Christmas gift-giving vein. OpenAlex, CORE and Semantic Scholar were not used;
`WebSearch` unavailable throughout.

Five sources. None appears in `USED-SOURCES.md` (666 URLs / 409 domains checked
by string match). No competitor cited or linked. Zero Wikipedia body links —
`en.wikipedia.org` is a closed domain at 7 posts; the `sameAs` values in
`structuredData` are entity grounding, not body links or sources.

| # | Source | Domain | Subject test | Peer-reviewed | Open access | Verified how |
|---|---|---|---|---|---|---|
| 1 | Taylor & Gillison, "Christmas in September", *Marketing Management Journal* 33(2) 24–38, 2023 | `marketingmanagementjournal.scholasticahq.com` (0 prior posts) | Pass — Christmas retail timing | Yes | CC BY | Landing page fetched (HTTP 200), record confirmed; abstract read from publisher's Crossref deposit. Full text not read |
| 2 | Torkar, "Pre-Service Teachers' Consumer Behaviour for the December Holidays", *CEPS Journal* 11(4) 151–167, 23 Dec 2021 | `journals.uni-lj.si` (1 prior post, different URL) | Pass — Christmas gift-giving rates | Yes | CC BY | Landing page fetched, full abstract read |
| 3 | Čižiūnienė, Šiugždinytė & Matijošius, "Analysis of Parcel Delivery Issues at 'State Parcel Company'", *Logistics* 9(1):16, 20 Jan 2025 | `www.mdpi.com` | Pass — parcel delivery failure modes | Yes | CC BY | mdpi.com 403; **full PDF fetched from mdpi-res.com and read** — r = 0.9188 and n=375 confirmed in text, authors at Vilnius Gediminas Technical University |
| 4 | Mutluoglu, Ashworth & Robitaille, "Looking a gift horse in the mouth", *Psychology & Marketing* 41(6) 1333–1345, 14 Feb 2024 | `onlinelibrary.wiley.com` | Pass — gift-giving and spend perception | Yes | CC BY-NC-ND | **ABSTRACT ONLY.** Wiley 403. Finding rests on the publisher's Crossref abstract deposit + Unpaywall. Stated as such in the body and the sources list |
| 5 | Sachin B S & Ramesh B, "Social Celebration and Financial Anxiety", *Space and Culture, India* 12(3) 135–153, 29 Nov 2024 | `www.spaceandculture.in` | Pass — occasion spending in India | Yes | CC BY | Landing page fetched, full abstract read |

**Generic context statistics: zero.** Budget was one; none was needed.

**Swap test — 2 of 5 fail, and this is recorded as an audit failure.** Sources 1–3
are Christmas- or delivery-specific and cannot move. Sources 4 and 5 are about
gift-giving and occasion spending generally, so either could sit unchanged in
another gift keyword's post in this batch.

### What could not be verified

- **No citable government source for Indian public holidays.** `dopt.gov.in`,
  `persmin.gov.in` and `censusindia.gov.in` failed to connect;
  `mea.gov.in/holiday-list.htm` returned 403; `india.gov.in/calendar` returned 200
  but renders its holiday data via JavaScript and served no usable text.
  **Consequence:** the post asserts only that Christmas is a gazetted holiday in
  India and that Christian communities in Kerala, Goa and the North-East observe
  it as a full religious festival. It makes **no** observance-rate, population-share
  or regional-practice claim, because none could be sourced. Census 2011 religion
  tables would have closed this and would have been the one permitted generic
  context statistic.
- **No India-and-Christmas scholarship found.** Searched Crossref and DOAJ for
  Christmas + India / Goa / Kerala / Mizoram / Christian community. The only
  on-topic hit, *Religions* 16(12):1569 (2025), is about religious persecution and
  was rejected as wrong for a gift post. An honest "no relevant research exists
  for this angle" — the India half of the argument therefore rests on the calendar
  arithmetic and the US-context tilt of sources 1 and 2, not on Indian data.
- **Waldfogel-style Christmas deadweight-loss work and the 1993 "Christmas and
  procrastination" paper** (`10.1016/0191-8869(93)90171-x`) are both closed on
  Unpaywall with no repository copy. Would have been the ideal deadline source.
- `frontiersin.org` carries an excellent 2024 paper on propensity to spend at
  Christmas (`10.3389/frbhe.2024.1385609`) — **surrendered**, the domain is closed
  at 12 posts. Same for the Norwegian Christmas gift-giving study on
  `journals.sagepub.com` (closed at 6).

---

## Phases 4–7 — output

- **Body:** 1,785 words, plain whitespace split, FAQs excluded. 1 H1, 8 H2s,
  5 H3s, no skipped levels. No paragraph over 3 sentences.
- **FAQs:** 11, in `article.faqs` only. Checked against every H1/H2/H3 on meaning
  and by token-overlap score; nothing above 0.4 Jaccard, and the near-misses were
  rewritten (an "is it too late on the 24th" question was replaced because it read
  as the deadline H2 asked again).
- **Table:** 5 rows, 4 columns, real values, first-party column, blank cells left
  blank where the number does not exist.
- **Physical gift wins:** H2 8, first paragraph — same room on 25 December.
  Plus two more cases, and the shared-desktop device mismatch.
- **Internal links (4, the cap):** `/bouquet-gf` (mandatory), `/love-gf`,
  `/photo-puzzle`, `/loveflix`. All four confirmed present in `TEMPLATE_LINKS` in
  `app/lib/prompt.ts` as rebuilt on 2026-09-02. None of the ten removed 307
  redirects is linked. All placed after the value is established, none in the
  opening. `templateUrls` = `/bouquet-gf`, `/love-gf`, `/photo-puzzle`.
- **Outbound links:** 5 distinct, inline at the sentence stating the fact, plus a
  hyperlinked sources list with publication dates.
- **structuredData:** `ItemList` mirroring the five H3s in order, plus one
  `@id`-matched `BlogPosting` enrichment block on `<canonicalURL>#post` carrying
  `about`, `mentions` and a `citation` array mirroring `batchMeta.sources`
  one-to-one. Every `sameAs` verified against the Wikipedia API with its QID
  paired: Christmas Q19809, Gift Q184303, Long-distance relationship Q1406917,
  Christianity in India Q530005. No `AggregateRating`, `Review` or `HowTo`.
- **Meta trio:** metaTitle 55 chars, exact keyword in words 1–4, one separator
  (colon), no banned booster, no year, no brand suffix. metaDescription 156 chars.
  excerpt 267 chars. metaTitle differs from the H1.

### The two "known defect" items, counted rather than assumed

- **metaTitle five-word rule — PASSES.** The keyword is **four words**, so
  "Christmas Gift for Girlfriend" occupies words 1–4 and the differentiator
  follows the colon. The brief's warning applies only at six words or more.
- **Slug stop-word rule — genuinely FAILS.** `christmas-gift-for-girlfriend`
  contains `for`, a stop word. It is the assigned exact-match slug and dropping
  the word would break the "target keyword in the slug" item. Recorded as a
  failure with that trade-off named, not waved through.

### Audit

47 passed, 3 failed, disjoint, 50 total. All 50 item strings byte-verbatim
(cross-checked as an exact set match against a previously shipped post's audit,
so the multi-line items are collapsed to single spaces using the established
convention, `**bold**` and backticks preserved).

Failed: the slug stop-word item; "3–6 outbound links, all fetched and verified"
(2 of 5 cited URLs 403'd — one closed via the publisher's own PDF, one left as
abstract-only); and the swap test (2 of 5 sources are generically about
gift-giving).
