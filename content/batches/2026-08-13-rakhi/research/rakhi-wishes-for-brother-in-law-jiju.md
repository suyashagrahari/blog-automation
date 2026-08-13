# Research brief — "rakhi wishes for brother in law jiju"

- **Batch:** 2026-08-13-rakhi · **Cluster:** C08 · **Slug:** `rakhi-wishes-for-brother-in-law-jiju`
- **Also covers:** raksha bandhan wishes for bhaiya bhabhi
- **Run date:** 2026-08-13 · **Raksha Bandhan 2026:** Friday 28 August 2026
- **Caveat:** `WebSearch` is served from a US IP, so positions are Google-US for an India-intent query. Directional, not google.co.in truth.
- **Provenance note:** this brief was written after the blog JSON, from the actual tool
  trace of the research run. Anything I did not personally fetch is marked as such
  rather than reconstructed.

---

## Phase 0 — data gate

`content/facts.md` (regenerated 2026-08-13) has **no rakhi-, festival- or in-law-specific
lines**. Gate cleared on platform-wide facts, used only where they answer "will this
greeting actually reach him on the morning, and will it stay private?":

| Fact (verbatim) | Where used |
|---|---|
| 2,632 personalised pages created since 2026-03-12, across 13 page types — measured 2026-08-13 | Answer para, sources H2 |
| 31,081 recorded views of shared pages — measured 2026-08-13 | Answer para |
| Average views per created page: 11.8 — measured 2026-08-13 | Table |
| 52.5% of shared pages are opened on a phone (16,323 of 31,081 views) — measured 2026-08-13 | Answer para, table, timing H2, objection H2 |
| 44.7% of creators password-protect their page before sharing it (1,177 of 2,632) — measured 2026-08-13 | Answer para, table |
| 99.4% of started pages are actually published and shared (2,615 of 2,632) — measured 2026-08-13 | Timing H2 |
| 2,165 registered creators — measured 2026-08-13 | Sources H2 |

Four appear inside the first 150 words. **Recorded weakness:** none is rakhi-specific.
`/happy-rakshabandhan-to-brother` does not appear in the top-5 page-type counts, so the
52.5% / 44.7% / 11.8 figures are platform-wide and applied to this occasion by
inference. Carried into `auditReport.failed`.

---

## Phase 1 — SERP analysis

Query: `rakhi wishes for brother in law jiju`. 7 results returned. A second query,
`raksha bandhan wishes for bhaiya bhabhi`, was run to cover the secondary keyword.

**What I actually fetched: 5 of 7 pages, in full, via `ctx_fetch_and_index`.**
Positions 6 (skillmatics.in) and 7 (adobe.com) were **not fetched** — assessed from SERP
title only, and recorded as such below. The entire bhaiya-bhabhi SERP was **not fetched**
— assessed from `WebSearch` snippets only.

**Word counts were not measured.** I recorded extracted-markdown size (which includes
site chrome, nav and ads), not body word count. Sizes below are therefore a shape
signal, not a word count, and are marked `~KB`.

| # | URL | Type | Size / shape | Where the direct answer sits | Data cited + date | Format elements | Tone | Actually optimising for |
|---|---|---|---|---|---|---|---|---|
| 1 | bestmessage.org/raksha-bandhan-wishes-for-brother-in-law | wishes content farm | ~12.5 KB, 18 sections | No answer — 2-paragraph festival preamble ("Rakhi or Raksha Bandhan is a Hindu festival…"), then `###` blocks of numbered lines 1)–n) | None. Page dated **27 July 2023**; hero image path `/2016/07/` | Numbered lists, H3 sub-buckets, dense internal links to sibling wish pages, comment form | Third person, formal, no contractions | Ad impressions on a long numbered list |
| 2 | igp.com/blog/happy-rakhi-wishes-for-brother | gifting-commerce blog | ~32.4 KB, 26 sections | No answer — 6 short throat-clearing lines ("Feeling stuck on what to write for your brother this Rakhi?… You're not alone.") before anything usable | None. Page dated **18 July 2025**, title says 2026 | ToC toggle, festival mega-nav, inline product CTA ("Send Rakhi and Gifts On Time with Online Raksha Bandhan Shopping") above the first wish, image blocks | Second person, warm, marketing cadence | Selling rakhis and hampers; the wishes are the hook |
| 3 | caratlane.com/blog/happy-rakhi-wishes-quotes-messages | jewellery-brand blog | ~18.1 KB, 18 sections | ~250 words in, after four scene-setting paragraphs | **Prints "In 2026, Raksha Bandhan will fall on Saturday, August 9" — wrong** (see stale data below) | Numbered "Top 50", product image links to gold rakhi / bracelet SKUs, Elementor popups | Third person warming to second | Selling gold rakhis |
| 4 | parenting.firstcry.com/articles/raksha-bandhan-messages-quotes-and-wishes | parenting portal listicle | ~38.6 KB, 20 sections | No answer — festival preamble, then H2 "Raksha Bandhan Wishes and Messages for Brother" | None. **Author byline (Priyadarshika Ingle) and "Updated: 18/07/2026"** — the only page of the five with both | Breadcrumbs, author link, H2 per relationship, very heavy ad interstitials ("Play The Quiz…/ADVERTISEMENT" repeated between sections) | Third person, editorial | Ad density on a 100-item list |
| 5 | rakhibazaar.com/rakhi-messages-wishes-quotes.aspx | gifting-commerce page | ~10.7 KB, **6 sections — thinnest of the five** | No answer — one preamble paragraph, then a bulleted wish list | None visible; body text says "Raksha Bandhan 2026" | Country shipping rail above the fold (Rakhi to USA / UK / Canada / UAE / Australia / Singapore), inline gift-hamper banner, links to `/rakhi-gifts-99.html` | Third person, brochure register | International rakhi shipping |
| 6 | skillmatics.in/blogs/blog/50-rakhi-wishes-quotes-for-your-siblings | brand blog | **not fetched** | — | — | — | — | Assessed from title only: a generic 50-wishes sibling listicle |
| 7 | adobe.com/in/express/discover/wishes/raksha-bandhan | design-SaaS content page | **not fetched** | — | — | — | — | Assessed from title only: Express template funnel |

**Structural finding.** Only **one** of the five fetched pages (#1, bestmessage) is
actually about a brother-in-law. The other four are generic brother/sibling wish pages
that rank on this query because they contain the token "brother" at volume. I did **not**
run a term-level check for "jiju" / "jija" / "brother in law" inside #2–#5, so "they
merely mention it" is an inference from their headings and previews, **not a verified
count.** Marked uncertain.

**What the SERP itself revealed.** The `WebSearch` synthesised answer surfaced genuine
jija-saali Hindi lines attributed to the result set — "Jija aisa jo hai ek bhai jaisa…"
and "Jija aur saali ka rishta bhi ajeeb hai, hum dost bhi hai aur bhai-behen bhi" —
confirming the teasing register exists on position 1, but nowhere is it explained,
labelled, or separated from a straight brother wish.

**Bhaiya-bhabhi SERP (snippets only, not fetched):** igp.com/blog/rakhi-wishes-bhaiya-bhabhi,
floweraura, nestasia.in, bestmessage.org/rakhi-messages-for-bhaiya-bhabhi,
rakhibazaar.com ×2, sendrakhi.com. Two visibly stale — rakhibazaar's URL slug ends
`-for-2021/` and sendrakhi's title says 2023. **A separate competitive set from the jiju
SERP: no domain except bestmessage and rakhibazaar appears on both.** That is the
structural fact behind the gap — nobody serves both halves of this query on one page.

**Stale / wrong data found.** #3 (caratlane) states Raksha Bandhan 2026 is "Saturday,
August 9". That is the **2025** date carried forward; 2026 is **Friday 28 August**
(verified independently against Drik Panchang and the Wikipedia infobox). #1 is dated
2023 with a 2016 hero image. Two of the bhaiya-bhabhi results are year-stamped 2021/2023.

---

## Phase 2 — gap analysis

**Table stakes (all five fetched pages carry these):** a large block of copy-ready lines;
some Hindi or Hinglish; the claim that the bond survives distance; a nod to the festival
extending past blood siblings.

**The gap.** This one query covers **two structurally opposite relationships**, and not
one page separates them:

- **Jiju / jija** — your *sister's husband*. An affine who married *into* the family.
  In North Indian practice the jija-saali pairing carries a licence to tease, and the
  rakhi thread is optional rather than owed.
- **Bhaiya + bhabhi** — your *blood brother* and *his wife*, greeted as a pair. The
  thread goes on bhaiya's wrist only; bhabhi is welcomed and thanked, not tied.

Every ranking page treats "brother in law" as one undifferentiated bucket, or ignores it
and serves brother wishes. None states who actually receives a thread. None gives the
teasing register a name or a boundary (where it is fine, where it is a breach). None
gives an English gloss for its Hindi lines, so a Hinglish-first reader cannot check what
they are about to send.

**Unanswered questions the pages raise and drop:** can you tie a rakhi to jiju at all;
"jiju" vs "jija ji" and when the formal *aap* is required; does bhabhi get a rakhi;
what a *saala* (wife's brother) writes, as opposed to a *saali*; whether a teasing line
is safe in the family group; what the correct 2026 date and muhurat window is (and #3
gets the date outright wrong).

**Fan-out sub-queries → became H2s / H3s / FAQs:**
what jiju means in Hindi · can I tie a rakhi to my jiju · jiju vs bhaiya, what changes ·
funny / teasing rakhi message for jija · first Raksha Bandhan after my sister's wedding ·
rakhi wish from a saala · rakhi wish for jiju abroad · how to wish bhaiya and bhabhi
together · does bhabhi get a rakhi · Raksha Bandhan 2026 date and muhurat · Hindi or
English · what to send if you forgot.

**Angle (recorded verbatim in `batchMeta.angle`):**
> Wins by being the only page that splits this query into the two genuinely different
> relationships it covers — jiju (a licensed jija-saali teasing relationship) and
> bhaiya-bhabhi (a pair where only bhaiya's wrist takes the thread) — giving each its
> own idiomatic Hindi wording, and pairing that with SubhSandesh's own 52.5%
> phone-open and 44.7% password-protect rates across 2,632 pages.

---

## Phase 3 — sources (all 5 fetched and verified; zero competitors)

| # | Source | Verified fact | Published |
|---|---|---|---|
| 1 | Drik Panchang, Raksha Bandhan 2026 (Delhi, `geoname-id=1273294`) | Friday 28 August 2026; thread ceremony 05:57–09:48 AM (3h 51m); Purnima tithi 09:08 AM 27 Aug → 09:48 AM 28 Aug; "Bhadra got over before Sunrise" | undated calendar page (checked 2026-08-13) |
| 2 | Cambridge Core — A. R. Radcliffe-Brown, "On joking relationships", *Africa* 13(3), pp. 195–210 | Where social structure places two people in **both conjunction and separation**, custom yields either exaggerated respect and reserve **or** its opposite — familiarity, teasing, coarse banter; two alternative routes to an extra-juridical alliance. Also: teasing between two people in a joking relationship in the presence of certain relatives is a breach of etiquette | 1940 (online 2012-08-21) |
| 3 | TRAI, Press Release No. 78/2026 | 1,294.46 million wireless subscribers at end-May 2026; net addition 5.50 million; monthly growth 0.43% | 2026-06-25 |
| 4 | arXiv:2301.01967 — Doğruöz, Sitaram, Bullock, Toribio, "A Survey of Code-switching" | Surveys structural and functional patterns of code-switching, with **European and Indian contexts as the core cases** — i.e. C-S is structured and socially purposeful, not careless | 2023-01-05 |
| 5 | Wikipedia, *Raksha Bandhan* (entity link, 1 of the 0–2 budget) | Infobox 2026 date **28 August (Friday)**; rite rooted in territorial/village exogamy (Coleman 2017 quoting Marriott on Kishan Garhi); large numbers of married Hindu women in rural north India travel back to their parents' homes for the ceremony | accessed 2026-08-13 |

### Verification limits I want on the record

- **Source 2 is paywalled.** Only the **Extract**, the French **Résumé**, and the
  references/notes block were readable. The two claims above were taken from the Résumé
  and the notes text respectively — both were read directly, neither is from memory —
  but I did **not** read the full 16-page article.
- **Re-verified 2026-08-13, after a coordinator challenge** to the "teasing in front of
  particular relatives" claim. The claim **is** supported, and the supporting passage is
  publicly readable despite the paywall on the body. It is **page 199, note 1**, quoted
  verbatim: *"It seems quite possible that the man may have committed a breach of
  etiquette in teasing the woman in the presence of her mother's brother, for in many
  parts of the world it is regarded as improper for two persons in a joking relationship
  to tease one another (particularly if any obscenity is involved) in the presence of
  certain relatives of either of them."* Confirmed by fetching the Cambridge Core page in
  the sandbox and string-matching, not from ranked excerpts and not from memory.
  `batchMeta.sources` for this entry now records **both** verified passages — the Résumé
  thesis and page 199 note 1 — so the citation record matches what the body claims.
- **Radcliffe-Brown is about African societies, not India.** The post uses him for the
  *structural framework* only. The application of that framework to jija-saali and to
  bhabhi is **my own analysis and is unattributed in the body** — it does not claim
  Radcliffe-Brown said it about India. No verified source in the post carries the
  specific claim "jija-saali is a documented Indian joking relationship"; the post
  treats the custom itself as common knowledge.
- **Source 3 arrived as unparsed binary.** `ctx_fetch_and_index` indexed the raw PDF
  stream. The figure was re-extracted locally from the PDF text layer, where the
  highlights table reads `1294.46` total wireless / `5.50` net addition / `0.43%`.
  Verified, but by a second pass, not the first.
- **Source 4 is the abstract only.** I read the arXiv landing page, not the paper. The
  claim used is the one the abstract states in its own words.

### Rejected / failed fetches

- **eGyanKosh (IGNOU) Unit 10, *Kinship*** — `UNABLE_TO_VERIFY_LEAF_SIGNATURE`, TLS
  failure. This was the one institutional source that would have carried the
  devar-bhabhi / jija-sali joking-relationship claim **for India**. It could not be
  verified, so it is **not cited anywhere** and the gap above stands.
- **Census of India** (`censusindia.gov.in`, C-17 bilingualism and the Language Atlas) —
  `fetch failed` on every attempt. The Hindi-speaker and bilingualism figures surfaced
  by `WebSearch` are therefore **not used**.
- **Drik Panchang** — two URL guesses 404'd before the working `geoname-id` form was
  found via search.
- **Not consulted as sources, by rule:** owlgen, sociology.institute, testbook,
  grokipedia and Studocu all appeared in search for the jija-sali material. None was
  fetched and none is cited — they are not citable sources.

---

## Phase 5 — targeting

- `categorySlug`: **festive-beats** (verified live against Strapi; 9 categories returned).
- `templateUrls`: `/happy-rakshabandhan-to-brother`, `/templates`.
- Internal links in body (3, all from `TEMPLATE_LINKS`, all after value is established):
  `/happy-rakshabandhan-to-brother` (bhaiya-bhabhi H2, and again in the closing CTA),
  `/templates` (closing CTA).
- Slug checked against Strapi: `filters[slug][$eq]=rakhi-wishes-for-brother-in-law-jiju`
  returned `total: 0` — free.
- `https://subhsandesh.in/happy-rakshabandhan-to-brother` returned **HTTP 200**.
- `sameAs` QIDs verified against the Wikipedia API in one call: Raksha Bandhan
  **Q10266**, Joking relationship **Q2713419**, Exogamy **Q182639**, Hindi **Q1568**,
  TRAI **Q7695822**. All returned `OK`, none `missing`.

---

## Phase 6 — audit

Recorded in `batchMeta.auditReport`. Three failures were opened by me:

1. *At least one table column uses first-party data* — the column is genuinely
   first-party, but only 3 of 4 cells carry a measured number and none is
   rakhi-specific. Closes with a per-template query once the rakhi page has enough
   published pages to sample.
2. *Sources list with publication dates* — only 3 of 5 sources are dated
   (Radcliffe-Brown 1940, TRAI 2026-06-25, arXiv 2023-01-05). Drik Panchang and
   Wikipedia are undated and continuously edited; the body carries the checked-on date
   instead. Structural — no dated equivalent exists.
3. *At least one specific number, date, price or named source per H2 section* — the
   bhaiya-bhabhi H2 carried a named source but no numeral of its own.

**Reported to me after my run was interrupted** (not verified by me): a remediation pass
trimmed `contentMarkdown` from 1,871 to 1,787 words, added a source to the
bhaiya-bhabhi H2 (closing failure 3), and the file now passes the schema validator.

### Attribution pass, 2026-08-13 (post-remediation)

A coordinator challenge asked whether the Extract/Résumé/notes I could actually read
support the *specific* "teasing in front of particular relatives" claim. I re-fetched
the Cambridge Core page and string-matched it rather than trusting ranked excerpts.
**Split verdict — one passage verified, one narrowed:**

- **Body, H3 #2 — KEPT, verified.** Page 199 note 1 carries the claim almost word for
  word ("in the presence of certain relatives of either of them"). Only the wording was
  tightened to match the source: *"…teasing in front of **particular** relatives
  **breaches the etiquette**"* → *"…teasing in front of **certain** relatives **is a
  breach of etiquette**"*. Attribution to Radcliffe-Brown stands, and is correct.
- **FAQ #4 — NARROWED.** The old answer read *"teasing in front of **elders** is a
  common breach of etiquette in joking relationships"*. The source says "certain
  relatives of either of them", **not elders** — the narrowing to elders is my own
  reading of the Indian family context, and stating it as a general finding about
  joking relationships was an appeal to authority the source does not carry. Rewritten
  so the advice stands in my own voice: *"Send it one-to-one rather than in the family
  group, though — the same line reads very differently with forty relatives watching,
  and elders in particular may not take it as affectionately as you meant it."* Same
  advice, no borrowed authority.

**No source was removed and none was added.** eGyanKosh and Census were not retried, and
no weaker source was substituted to manufacture support. `auditReport.passed` /
`failed` are unchanged: no checklist item changed status — the outbound-links item was
already passing and is now better evidenced, and the FAQ edit removed an overclaim
rather than creating a new gap. `honestAssessment` is unchanged for the same reason: it
makes no claim that depended on the FAQ's authority framing.

Body 1,787 → **1,789 words** (+2, from the body rewording). FAQs remain 12. Schema
validator: **PASS**.

**Honest assessment, unchanged:** the defensible claim is the split itself, plus real
idiomatic Hindi with English glosses and the 3h51m muhurat window. Against that, this
is a **narrow-audience keyword** — jiju and bhaiya-bhabhi are a small slice of rakhi
volume — and positions 2–4 are igp.com, caratlane.com and parenting.firstcry.com, all
with domain authority far above a five-month-old site. Position 1 is a wishes content
farm and is beatable on substance; the authority sites are not, on this timescale.
Expect answer-engine citation before Google position, and expect months either way.
