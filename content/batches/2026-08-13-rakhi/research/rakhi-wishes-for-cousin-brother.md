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

**Re-sourced 2026-08-13** against `references/research-sources.md`. The Census
migration statistic was cut — it is about India, not about cousins, and would sit
unchanged in any other post in this batch. The primary of the cousin paper was
reached and is now cited directly, and a second peer-reviewed study about extended
family was added.

| # | Source | Verified fact | Published | Access |
|---|---|---|---|---|
| 1 | Oxford Learner's Dictionaries, *cousin brother* | Listed as an Indian English informal noun: "a son of your aunt or uncle; a male first cousin" | undated reference work (accessed 2026-08-13) | free |
| 2 | **Hessel, H. M. & Christiansen, R. J., "Close but Not Too Close? A Qualitative Study of How U.S. Emerging Adults Describe Their Cousin Relationships", *Adolescents* 5(1): 8** — the primary | 192 US adults aged 18–29 (mean 25.6) described 561 cousins (mean 28.2); emerging adults feel varying degrees of closeness and distance with cousins; relational maintenance with cousins is both planned and incidental; family membership provides resources; cousins share the same generational position | 2025-03-06 | Gold OA, **CC BY**. **Abstract only was read** (see below) |
| 3 | Chronicle of Evidence-Based Mentoring, summarising the paper above | The paper's *results-level* finding that cousin closeness is fostered by emotional confiding and shared experience and limited by awkwardness, comparison and estrangement | 2025 | free; retained deliberately — see below |
| 4 | **Hessel, H., "A Typology of U.S. Emerging Adults' Online and Offline Connectedness with Extended Family", *Journal of Adult Development*** | Latent class analysis of 532 US emerging adults; 72% connect with extended family online even when they do not feel close to them; cousins and aunts/uncles were identified most frequently as extended family | 2023-05-13 | Free full text in PubMed Central (PMC10182746). **Abstract only was read** |
| 5 | Drik Panchang, Raksha Bandhan 2026 (New Delhi) | Friday 28 August 2026; thread-ceremony muhurat 05:57–09:48 AM IST (3h 51m); Purnima tithi 09:08 AM 27 Aug → 09:48 AM 28 Aug; Bhadra over before sunrise | undated calendar page (accessed 2026-08-13) | Date fact-check, not counted as research |
| 6 | Wikipedia, *Raksha Bandhan* (entity link, 1 of the 0–2 budget) | Infobox 2026 date 28 August (Friday); earliest attested English use of *rakhi* is 1829 (James Tod), the thread bestowing the title of *adopted* brother | accessed 2026-08-13 | free |

**Did the primary get reached?** Yes, as a citable source — and no, as full text.
`mdpi.com` returns empty content to the fetcher for both the article HTML and the
CC BY PDF. The record was instead confirmed through three independent routes that
agree exactly: the DOAJ article API, the Semantic Scholar graph API and Unpaywall
(`is_oa: true`, `oa_status: gold`, `license: cc-by`, `published_date: 2025-03-06`).
All three return the same abstract verbatim. So the post links the DOI and cites
**only what the abstract states**.

**Why the secondary was kept.** Two body passages use the paper's *results* —
comparison and awkwardness as limits on cousin closeness — and those sentences are
not in the abstract. Since the full text could not be read, that claim stays
attributed, visibly and in the body, to the Chronicle summary, which is the only
version of the results actually read. Dropping it would have left a results-level
claim resting on a source that does not state it.

**Subject test:** sources 1, 2, 3 and 4 all pass — the kin term itself, cousin
relationships, and how emerging adults keep up with extended family online. Two are
peer-reviewed and open access. Generic context statistics: zero.

**Rejected sources.** PRS Legislative Research / Census 2011 migration — cut in this
pass as filler. TRAI's May 2026 subscription press release (PR No. 78) arrived as
unparsed binary PDF and failed the subject test anyway. Census HH-04 joint-vs-nuclear
household shares: no clean, verifiable percentage was reachable, and nothing was going
to be estimated. `oed.com` redirects to a JS shell, so the OED's "earliest evidence
1847, *Bombay Times*" datum could **not** be verified and is **not** used anywhere in
the post. No open-access scholarship on Indian English kinship lexis (`cousin brother`
/ `cousin sister` in World Englishes and similar) was reachable; searched OpenAlex,
DOAJ and general web for `Indian English kinship terms cousin brother lexical
borrowing` and `North Indian kinship terminology classificatory sibling` — nothing
citable, so the Oxford entry carries the lexical claim alone.

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
- *Cousin study verification.* **Reopened and largely closed by the re-sourcing pass
  on 2026-08-13.** `mdpi.com` still returns empty content for both the article HTML
  and the CC BY PDF, but the record was confirmed through the DOAJ article API, the
  Semantic Scholar graph API and Unpaywall — all three agree, and all three return
  the same abstract verbatim. The post now links the DOI directly and cites only what
  the abstract states. The Chronicle summary was **kept**, not dropped, because two
  body passages use the paper's results-level finding (comparison and awkwardness as
  limits on cousin closeness), which is not in the abstract; that claim stays visibly
  attributed to the summary, the only version of the results actually read. The
  unverifiable OED 1847 "Bombay Times" first-attestation datum stays excluded.

**Changed in the re-sourcing pass:**

- `prsindia.org` / Census 2011 migration cut as filler. Generic context statistics
  now zero.
- Hessel (2023), *Journal of Adult Development*, added — free full text in PMC. Its
  72%-connect-online finding replaces the Census statistic in the long-distance
  section, and is a fact about the behaviour rather than about the country.
- `keyTakeaways[0]` rewritten to carry a number, as the checklist asks.
- Sources 4 → 6; `citation` re-mirrored one-to-one.

**Left open:**

- *Batch-wide domain cap.* `en.wikipedia.org` sat in 6 of 9 posts against a cap of 3.
  This post's Wikipedia link carries a specific non-obvious fact (the 1829 James Tod
  attestation), so it was kept rather than dropped for the count. The cap is a
  batch-wide property; re-run a domain count across all nine blogs before publishing.
- *Abstract-only reads.* Both peer-reviewed sources are cited from their abstracts;
  neither full text was reachable. Recorded here and in `honestAssessment`.
- *No rakhi-specific first-party data* — re-check once the rakhi template has roughly
  100–200 published pages.

Body: **1,791 words** excluding FAQs. 12 FAQs. Outbound links 6 in prose, all
fetched and verified; internal links 3.
