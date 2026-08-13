# Research brief — "rakhi wishes for cousin brother"

- **Batch:** 2026-08-13-rakhi · **Cluster:** C09 · **Slug:** `rakhi-wishes-for-cousin-brother`
- **Also covers:** raksha bandhan quotes for cousin brother
- **Run date:** 2026-08-13 · **Raksha Bandhan 2026:** Friday 28 August 2026
- **Caveat:** `WebSearch` is served from a US IP, so positions are Google-US for an India-intent query. Directional, not google.co.in truth.

---

## Phase 0 — data gate

`content/facts.md` (regenerated 2026-08-13) has **no rakhi-, festival- or cousin-specific
lines**. The gate is cleared on platform-wide facts that are genuinely relevant to the
question "will this greeting actually get seen and kept?", not on borrowed relevance:

| Fact (verbatim) | Where used |
|---|---|
| 2,632 personalised pages created since 2026-03-12, across 13 page types — measured 2026-08-13 | Answer para |
| 31,081 recorded views of shared pages — measured 2026-08-13 | Answer para, table |
| Average views per created page: 11.8 — measured 2026-08-13 | Answer para, table, FAQ |
| 52.5% of shared pages are opened on a phone (16,323 of 31,081 views) — measured 2026-08-13 | Objection H2 |
| 44.7% of creators password-protect their page before sharing it (1,177 of 2,632) — measured 2026-08-13 | Table, FAQ |
| 99.4% of started pages are actually published and shared (2,615 of 2,632) — measured 2026-08-13 | Closing H2 |

Four appear inside the first 150 words. **Recorded weakness:** none of these is
rakhi-specific, and the post says so in the prose ("across the 2,632 personalised pages
SubhSandesh has hosted"). Carried into `auditReport.failed`.

---

## Phase 1 — SERP analysis

Query: `rakhi wishes for cousin brother`. 5 of 8 results judged weak.

| # | URL | Type | Word count / shape | Where the direct answer sits | Data cited | Format elements | Tone | Actually optimising for |
|---|---|---|---|---|---|---|---|---|
| 1 | floweraura.com/quotes/raksha-bandhan/for-cousin | templated quote directory | ~700 visible, mostly a JS-loaded quote carousel | No answer — a "Copy" list loads first | None | Copy buttons, "Load More", inline product rail (Flowers/Cakes/Hampers) | Third person, brochure register | Selling flowers and hampers; the quotes are the hook |
| 2 | bestmessage.org/happy-raksha-bandhan-wishes-for-cousin-brother | content farm listicle | ~1,200, numbered 1)–30) | No answer — 4-sentence festival preamble then the list | None | Numbered list, internal links to sibling wish pages | Third person, formal, no contractions | Ad impressions on a long numbered list |
| 3 | caratlane.com/blog/happy-rakhi-wishes-quotes-messages | jewellery-brand blog | ~2,000, "Top 50" | ~150 words in | **Prints "In 2026, Raksha Bandhan will fall on Saturday, August 9"** | Product image links to gold rakhi/bracelet SKUs | Warm second person | Selling gold rakhis; cousins get one line |
| 4 | in.pinterest.com/chetnaneera12/rakhi/ | image board | n/a | n/a | None | Pins only | n/a | Social noise |
| 5 | fnp.com/quotes/raksha-bandhan/for-cousin | templated quote directory | ~600 + image grid | No answer | None | Image grid (filenames still say `-2025`), coupon banner | Third person | Selling gifts; identical architecture to #1 |
| 6 | pngmagic.com/…/raksha-bandhan-wishes-for-cousin-brother | image-download farm | thin | n/a | None | Download buttons | n/a | Ad/download farm |
| 7 | giboxonline.com/blogs/wishes/rakhi-messages-for-long-distance-brother-sister | gifting blog | ~1,500 | off-intent (long distance, not cousins) | None | Lists | Third person | Gift shop |
| 8 | viraasi.com/blogs/news/top-100-raksha-bandhan-quotes-messages | jewellery blog | ~2,500 "Top 100" | Buried | None | Long list | Third person | Selling jewellery |

**Structural finding.** floweraura and fnp both serve this from a
`/quotes/<relationship>` templated directory — one thin page per relationship, which is
why the same two domains appear across every relationship long-tail simultaneously. It
is also the weakness: nothing on either page is written *for* a cousin. floweraura's
"for-cousin" page in fact opens with four **cousin sister** quotes on a cousin-brother
query.

**Stale/wrong data.** The #3 result states Raksha Bandhan 2026 is "Saturday, August 9".
That is the **2025** date (Saturday 9 August 2025) carried forward; 9 August 2026 is a
Sunday, and the festival is Friday 28 August 2026. fnp's image filenames still carry
`-2025`. bestmessage's page is dated 30 August 2023 with an "(Rakhi 2025)" heading.

---

## Phase 2 — gap analysis

**Table stakes (all five cover):** a block of copy-ready lines; the word *bhaiya*;
some acknowledgement that the festival extends beyond blood siblings; the idea that
distance doesn't weaken the bond.

**The gap.** Not one page engages with what makes a cousin relationship *different*.
They relabel brother-wishes as cousin-wishes. The real search anxiety — how close is
too close, what to write for a cousin you only see at weddings, how to sound warm
without overclaiming a bond neither of you would describe that way — is untouched.
None of the five sorts its lines by anything at all; they are undifferentiated piles.

**Unanswered questions the pages raise and drop:** is it acceptable to tie a rakhi to a
cousin at all; bhaiya vs first name; what to send when you barely talk; what the
correct 2026 muhurat is (and #3 gets the date wrong).

**Fan-out sub-queries → became H2s / FAQs:**
what to write for a cousin brother · is "cousin brother" correct English · is it okay
to tie rakhi to a cousin · rakhi wish for a cousin you barely talk to · rakhi for a
cousin abroad · Raksha Bandhan 2026 date and muhurat · one-line rakhi wish for cousin
brother · bhaiya or name · keeping a message private · what to avoid writing.

**Angle:**
> Wins by being the only post that treats a cousin brother as its own relationship —
> sorting the wishes by how close you actually are, grounded in a 2025 peer-reviewed
> cousin study and SubhSandesh's own 11.8-opens-per-page and 44.7% password-protect
> figures — instead of relabelling brother wishes as cousin wishes.

---

## Phase 3 — sources (all fetched and verified; zero competitors)

| # | Source | Verified fact | Published |
|---|---|---|---|
| 1 | Oxford Learner's Dictionaries, *cousin brother* | Listed as an Indian English informal noun: "a son of your aunt or uncle; a male first cousin" | undated reference work (accessed 2026-08-13) |
| 2 | Chronicle of Evidence-Based Mentoring, summarising Hessel, H. & Christiansen, R. J. (2025), *Adolescents* 5(1): 8 | 192 US emerging adults (mean age 25.6) described 561 cousins; closeness fostered by emotional confiding and shared experience, limited by awkwardness, comparison and estrangement; support persists even when contact is infrequent | 2025 (study) |
| 3 | PRS Legislative Research, "Migration in India and the impact of the lockdown on migrants", citing Census 2011 | India had 45.6 crore migrants in 2011 (38% of population); 99% of total migration was internal | 2020-06-10 |
| 4 | Drik Panchang, Raksha Bandhan 2026 (New Delhi) | Friday 28 August 2026; thread-ceremony muhurat 05:57–09:48 AM IST (3h 51m); Purnima tithi 09:08 AM 27 Aug → 09:48 AM 28 Aug; Bhadra over before sunrise | undated calendar page (accessed 2026-08-13) |
| 5 | Wikipedia, *Raksha Bandhan* (entity link, 1 of the 0–2 budget) | Infobox 2026 date 28 August (Friday); earliest attested English use of *rakhi* is 1829 (James Tod), the thread bestowing the title of *adopted* brother | accessed 2026-08-13 |

**Rejected sources.** TRAI's May 2026 subscription press release (PR No. 78) was
fetched but arrived as unparsed binary PDF, and a tele-density figure failed the
"would it stay without the link" test in a cousin-wishes post — dropped rather than
cited second-hand. Census HH-04 joint-vs-nuclear household shares were dropped: no
clean, verifiable percentage was reachable, and nothing was going to be estimated.
`oed.com` (both the `cousin brother` entry and the September 2017 Indian English
update) redirects to a JS shell, so the OED's "earliest evidence 1847, *Bombay Times*"
datum could **not** be verified and is **not** used anywhere in the post. mdpi.com,
doi.org and link.springer.com all blocked the primary paper.

---

## Phase 5 — targeting

- `categorySlug`: **family-and-continuity** (verified live in Strapi; 9 categories returned).
- `templateUrls`: `/happy-rakshabandhan-to-brother`, `/templates`.
- Internal links in body (3, all from `TEMPLATE_LINKS`, all placed after value is
  established): `/happy-rakshabandhan-to-brother` (timing H2),
  `/missyou-bestfriend` (objection H2, for the cousin abroad), `/templates` (closing CTA).
- Slug checked against Strapi: `filters[slug][$eq]=rakhi-wishes-for-cousin-brother`
  returned `total: 0` — free.
- `https://subhsandesh.in/happy-rakshabandhan-to-brother` returned HTTP 200.

## Phase 6 — audit

Recorded in `batchMeta.auditReport`. Four failures were opened; the fix pass on
2026-08-13 closed two and left two.

**Closed:**

- *FAQPage JSON-LD block.* The supposed conflict between `structured-data.md` and
  `article-json-schema.md` was not real. `client/components/JsonLd.tsx:622-637`
  merges any block whose `@id` matches an existing graph node and only runs the
  `@type` filter on unmatched blocks, so the `@id`-matched `BlogPosting` enrichment
  on `#post` survives and is the sole route by which `batchMeta.sources` reach the
  published page, while a bare `FAQPage` is discarded. The `FAQPage` block was
  deleted; `ItemList` and the `#post` enrichment were kept. `article.faqs` untouched.
- *Cousin study verification.* mdpi.com and doi.org returned empty and
  link.springer.com returned a bot challenge, so the primary is unreachable. The post
  cites the Chronicle of Evidence-Based Mentoring summary, which carries the full
  Hessel & Christiansen (2025) citation, in the body, the sources list and the
  `citation` array — the accessible source is the one linked, deliberately and
  visibly, so the outbound-links item passes. The unverifiable OED 1847 "Bombay
  Times" first-attestation datum stays excluded.

**Left open:** 3 of 5 sources being undated reference works (access dates are the
correct treatment; no dated equivalent exists), and no rakhi-specific first-party
data existing today — re-check once the rakhi template has roughly 100–200
published pages.
