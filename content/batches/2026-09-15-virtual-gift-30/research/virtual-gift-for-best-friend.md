# Research brief — `virtual gift for best friend`

- **Batch:** 2026-09-15-virtual-gift-30
- **Slug:** `virtual-gift-for-best-friend`
- **Primary keyword:** virtual gift for best friend
- **Secondary keywords:** none (cluster primary only)
- **Market:** India
- **Written:** 2026-09-15
- **Slug check:** `https://strapi.subhsandesh.in/api/articles?filters[slug][$eq]=virtual-gift-for-best-friend`
  returned `data: []`, `total: 0` on 2026-09-15 — the slug is free.
- **Position in batch:** the only non-romantic post of the 30. Every sibling targets a
  partner. This one targets a friendship, so the tone shifts: warmth without romance,
  and an explicit warning that most SubhSandesh templates are built for a partner.

---

## Phase 1 — SERP analysis

Searched `virtual gift for best friend` on 2026-09-15. The India-facing result set is
dominated by two things that are not each other: US/UK affiliate listicles of gift cards
and subscriptions, and small personalised-page startups selling the exact product
SubhSandesh sells. Pinterest, Quora and Wikipedia take the remaining slots. There is no
authoritative page written for an Indian searcher whose best friend has just moved.

| Page | Words / shape | Where the answer is | Data cited | Format | Tone | Optimised for |
|---|---|---|---|---|---|---|
| collectionpot.com — "Virtual & Digital Gifts That Impress" (1 Aug 2024, 10-min read) | ~2,000, long explainer + category lists | Definition of "virtual gift" arrives in the first section, but after a sustainability/remote-work preamble | None — no statistics anywhere | Headed sections, no table, no FAQ schema, named author byline | Third person, UK, workplace-gifting framing | Group gift collections (their own product); "leaving collection" and "teacher" occasions |
| marieclaire.com — "The 60 Best Virtual Gifts You Can Buy Online" | ~4,000+, 60-item affiliate listicle | No direct answer; jump-links to seven product categories | Prices only, US dollars | Category jump list, product cards, image-heavy | Third person, US consumer, brand-forward | Affiliate revenue on subscriptions, e-cards, beauty and food boxes |
| rollingstone.com — "20+ Best Online Gifts for 2024" (20 Dec 2024) | ~3,500, affiliate listicle | Intro reassures that digital ≠ impersonal, then straight into products | Prices only, US dollars, year-stamped title already stale | Product grid, affiliate links, three-author byline | Third person, US, casual | Affiliate revenue; "last-minute" shopper intent |
| aiskyla.com — "10 Free Surprise Gift Ideas for Your Best Friend Online" | ~1,200, product-led listicle | "Bottom Line Up Front" block at the top — the only page in the set that answers first | None | Numbered list, BLUF callout, internal CTAs to its own builder | Second person, friendly | Its own page builder — **treated as a competitor; not cited, not linked** |
| giftsqr.com, gifft.me | Landing pages, not articles | n/a | None | Product pages | Sales | Their own builders — **named competitors in the BRIEF; not cited, not linked** |

Also present: a Pinterest idea board, a Quora thread ("What are some good virtual gifts
for an internet friend?"), and the Wikipedia "Virtual gift" entity page.

## Phase 2 — Gap analysis

**Table stakes** (all five cover these, so the post must too):
- A working definition of "virtual gift".
- A list of formats, not a single recommendation.
- The "no shipping / arrives instantly" benefit.
- Some acknowledgement that digital can feel impersonal.

**The gap — four things nobody in the set does:**
1. **Nobody separates a friendship from a relationship.** Every listicle is occasion-neutral
   and therefore friendship-neutral. None says "this template will read as a confession if
   you send it to a friend", which is the single most useful warning for this searcher.
2. **Nobody publishes usage data.** Not one page in the set cites a statistic of any kind —
   not a price distribution, not an open rate, not a build time. The entire category is
   assertion.
3. **Nobody writes for India.** Prices are in dollars; the delivery assumptions are US/UK.
4. **Nobody treats it as a friendship-maintenance problem.** The research literature on
   friendship decay after a move exists and is directly on point, and no page touches it.

**Stale data:** there is no data to be stale. The Rolling Stone piece is year-stamped 2024
and its products have moved on, which is a titling lesson more than a data one.

**Unanswered questions raised and dropped:** "will they actually open it?", "is it enough on
its own?", "what if we've drifted?", "can I keep it private?".

**Fan-out sub-queries → H2s:**
- what counts as a virtual gift for a best friend → H2 2
- virtual gift ideas for a friend far away → H2 3 (seven H3s)
- how do the options compare / what does my friend need → H2 4 (table)
- does a digital gift feel as personal → H2 5 (mediated-communication research)
- do long-distance friendships survive → H2 6 (friendship-turnover research)
- when is a virtual gift a bad idea → H2 7

**Angle (`batchMeta.angle`):** wins by being the only post that treats a virtual gift for a
best friend as a friendship-maintenance problem rather than a gift-card list — pairing
friendship-turnover research with SubhSandesh's own 40.6% password-protection rate and the
3.7% / 96.3% split that proves most of its own templates are built for a partner, not a
friend.

## Phase 3 — Sources

Search terms used: `friendship maintenance geographic mobility longitudinal study`,
`friendship dissolution distance longitudinal`, `social media friendship maintenance young
adults`, `long distance friendship maintenance communication`, `friendship turnover close
friends network change`, `keeping in touch friends who moved away technology study`,
`gift giving friendship reciprocity study open access`, `personalised gift recipient
appreciation study`. Repositories queried: OpenAlex (OA filter), DOAJ API, Crossref,
Cyberpsychology, VU Amsterdam, Aalto, Stirling, OJED.

Cap compliance checked against the six sibling files already in
`content/batches/2026-09-15-virtual-gift-30/blogs/`. **arxiv.org (4 posts) and
pmc.ncbi.nlm.nih.gov (3 posts) are at or over cap and were not used.** All five domains
below are new to this batch.

| # | Source | Why it passes the subject test | Access |
|---|---|---|---|
| 1 | Sherman, Michikyan & Greenfield (2013), *The effects of text, audio, video, and in-person communication on bonding between friends*, Cyberpsychology 7(2) | Experiment on **existing close friends**, not strangers: 58 young women in 29 friend pairs, four conversation conditions | Open access, full text read |
| 2 | Utz (2007), *Media use in long-distance friendships*, Information, Communication & Society 10(5), 693–712 | Two studies specifically on **long-distance friendships** and which medium people pick | **Abstract only** — publisher paywall; VU repository landing page read |
| 3 | Bhattacharya et al. (2022), *Turnover in close friendships*, Scientific Reports 12, 11018, CC BY | National mobile-phone dataset on how **close friendships start and end**, by age and gender | Open access, CC BY; **abstract read via the Aalto repository record**, full PDF not parsed |
| 4 | Clarke & Mortimer (2020), *The 'perfect gift' and the 'best gift ever'*, Journal of Business Research 120, 418–424 | 35 in-depth interviews on what makes a gift significant to giver and receiver | **Abstract only** — Stirling repository copy is embargoed |
| 5 | Akashvani News / newsonair.gov.in (18 Dec 2024), Education Ministry reply in Rajya Sabha | The one generic context statistic: ~892,000 Indian students went abroad in 2023 vs ~586,000 in 2019 | Open |

Wikipedia: one entity link only — `Friendship Day` (Q14551661), for the India date.

**Rejected sources and why:**
- `arxiv.org`, `pmc.ncbi.nlm.nih.gov` — at/over the batch cap.
- `aodr.org/xml/33129/33129.pdf` — explicitly banned (at cap).
- `mdpi.com`, `nature.com`, `royalsocietypublishing.org`, `dl.acm.org`, `europepmc.org`,
  `mea.gov.in`, `hdl.handle.net` — all returned HTTP 403 to a fetch, so nothing could be
  verified; the Scientific Reports paper was reached through Aalto's repository record
  instead.
- `giftsqr.com`, `gifft.me`, `aiskyla.com`, `collectionpot.com` — competitors or
  competitor-adjacent builders. Read in Phase 1, cited nowhere.
- Live-streaming "virtual gift" papers (Twitch, Douyin tipping) — same words, different
  phenomenon, and they would swap straight into the `what is a virtual gift` sibling.

**Honest note on the swap test:** source 4 (the gift-framework paper) is the weakest on
this test. It is about gift-giving in general rather than friendship specifically, and it
could plausibly sit in another gift post in this batch. It is kept because it carries the
one finding that directly contradicts the affiliate listicles — that the gifts people call
their best ever are tied to experiences rather than objects — and the audit records the
failure rather than hiding it.

## First-party facts used

- 40.6% of creators password-protect their page before sharing it (1,767 of 4,357) — 2026-09-15
- Median gap between a page's first save and its last edit: 6.2 hours, n = 1,125 (/love-gf) — 2026-09-15
- 4,357 personalised pages created since 2026-03-12, across 16 page types — 2026-09-15
- 94.1% of started pages are actually published and shared (4,098 of 4,357) — 2026-09-15
- 49.0% of shared pages are opened on a phone (24,493 of 49,968 views) — 2026-09-15
- Occasion-dated pages are 144 of 3,894 pages, 3.7%; the platform is 96.3% romantic and everyday — 2026-09-09
- #1 /love-gf 1,125 pages (25.8%); #2 /bouquet-gf 1,070 (24.6%) — 2026-09-15

The last two are the post's sharpest move: they are the numbers that prove SubhSandesh's
own catalogue is built for partners, which is exactly the warning a friendship searcher
needs and exactly the sentence a competitor would never write.

## Internal links and targeting

- `categorySlug`: `digital-gifts-romance` (verified live on 2026-09-15). The BRIEF's default
  for this axis; there is no friendship category.
- `templateUrls`: `/streak`, `/capsule`, `/photo-puzzle` — the three formats in the body
  that carry no romantic reading.
- Body internal links (4): `/streak`, `/capsule`, `/photo-puzzle`, `/watch`. The romantic
  templates (`/love-gf`, `/darling`, `/proposal`, `/missyou-gf`) are deliberately named in
  the body only as things **not** to send a friend, and are not linked.
