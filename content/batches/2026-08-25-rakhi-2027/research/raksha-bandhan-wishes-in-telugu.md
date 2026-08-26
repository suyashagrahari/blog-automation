# Research brief — `raksha bandhan wishes in telugu`

- **Slug:** `raksha-bandhan-wishes-in-telugu`
- **Batch:** `2026-08-25-rakhi-2027`
- **Bucket:** **medium**, not winnable. See Phase 1.
- **Slug check:** `https://strapi.subhsandesh.in/api/articles?fields[0]=slug&filters[slug][$eq]=raksha-bandhan-wishes-in-telugu`
  → `total: 0`. Free. (Site already has 5 Telugu-language posts —
  `sorry-message-in-telugu`, `sorry-quotes-in-telugu-for-love`,
  `miss-you-message-in-telugu`, `miss-you-quotes-in-telugu-for-love`,
  `miss-you-status-in-telugu` — so the Telugu long tail is a proven shape for this domain.)
- **Demand:** autocomplete depth 5 → band 2, **300–1,000/mo `EST` peak**. Small keyword.
  No `TOOL` figure exists for it; the only `TOOL` numbers in this batch are the two head terms.
- **Dates:** Rakhi 2027 = **Tuesday 17 August 2027**. Rakhi 2026 = Friday 28 August 2026
  (3 days after this batch date, so unrankable). Post is written for the 2027 cycle and the
  year-round long tail, with a re-datable date line rather than a rewrite.

---

## Phase 0 — Data gate

`content/facts.md`, refreshed 2026-08-25. **There is no rakhi-specific first-party data**:
`rakshabandhanpages` = 3 documents, `rakshabandhansisterpages` = 3, rakhi template views = 39
of 36,202 (0.1%). n=3 supports no rate and no percentage, and none is computed here.

Assigned primary fact (leads the first 150 words):

- **2,973 personalised pages created since 2026-03-12, across 15 page types — measured 2026-08-25**
- **2,466 registered creators — measured 2026-08-25**

Supporting:

- 51.1% of shared pages are opened on a phone (18,497 of 36,202 views) — measured 2026-08-25
- 44.2% of creators password-protect their page before sharing it (1,315 of 2,973) — measured 2026-08-25
- Average views per created page: 12.2 — measured 2026-08-25

Gate result: **passes on count** (5 facts, 2 in the first 150 words) and **fails on
specificity** — every one is platform-wide, none is about Telugu or about rakhi. That is
recorded in `auditReport.failed`, not smoothed over. Condition that would close it: rakhi
template usage above ~500 pages, then re-query.

---

## Phase 1 — SERP

Fetched 2026-08-25. Word counts and Telugu-character counts below are measured from the
fetched HTML (script/style stripped), not estimated.

| # | Page | Type | Words | Telugu chars | Table | FAQ schema | Date signal | Optimising for |
|---|---|---|---|---|---|---|---|---|
| 1 | etvbharat.com (`…raksha-bandhan-2023-wishes-and-quotes-telugu…`) | News article | ~664 | 3,064 | 0 | No | **URL says 2023** | Annual festival news refresh |
| 2 | telugu.latestly.com (`…-143521.html`) | News + photo greetings | ~705 | 3,207 | 0 | No | Undated in body | "Photo greetings" downloads |
| 3 | sakshi.com/tags/raksha-bandhan-wishes | **Tag page** | ~2,356 (mixed news) | 13,326 | 0 | No | Rolling | Nothing — a tag archive |
| 4 | zeenews.india.com/telugu/photo-gallery/…-241453 | **Photo gallery** | n/a — 403 to fetch | n/a | 0 | No | Undated | Gallery pageviews |
| 5 | zeenews.india.com/telugu/photo-gallery/…-241570 | **Photo gallery** | n/a — 403 | n/a | 0 | No | Title says **2025** | Gallery pageviews |
| 6 | wishme.in/raksha-bandhan-wishes-in-telugu | Wishes farm | **404 on fetch** | — | — | — | Stale | Ranking on a dead URL |
| 7 | wishutsav.com/festival/raksha-bandhan-wishes/telugu | Wishes farm | ~680 | **0** | 0 | No | Title says 2026 | Its own share widget |
| 8 | tring.co.in/wishes/raksha-bandhan-wishes-in-telugu | Wishes farm | ~1,114 | 4,234 | 0 (a "Table Of Contents" H2, not a table) | No | Title says **2024** | Celebrity video upsell |

**This is the hardest language SERP in the batch.** Unlike the Gujarati and Kannada SERPs,
which carry no established brands at all, four national news outlets hold this one — ETV
Bharat, Zee News (two slots), Sakshi, Telugu LatestLY — and they all refresh annually with
newsroom authority behind them. Treat this as `medium`. **The Gujarati and Kannada posts
should land before this one.**

Weak slots — 4 of 8:

1. `sakshi.com` is a **tag page**, not an answer. Gate 2 (page-type mismatch).
2. + 3. The two Zee slots are **photo galleries** — the wishes are baked into images, so
   there is no extractable text for an answer engine to lift. Gate 2.
4. `wishme.in` returned **404** on fetch; `tring.co.in` is stamped **2024** and
   `etvbharat.com` carries **2023** in its URL. Staleness on three of eight.

No AI Overview surfaced for the query at fetch time; the results are dominated by
news-carousel-shaped listings.

---

## Phase 2 — Gap

**Table stakes** (every text page has them, so the post must too): Telugu-script wishes for
brother and sister; the meaning of the festival in Telugu (రక్షా బంధన్ = రక్షణ బంధం);
short WhatsApp-length lines; a date reference.

**The gap, measured not guessed.** I searched the fetched text of the two text-heavy pages
(tring.co.in and etvbharat.com) for `annayya`, `anna`, `tammudu`, `tammuḍu`, `akka`,
`chelli`, `celli`, `subhakankshalu`, `transliterat`, `pronounc`, `Roman`. **Every single term
returned 0 matches on both pages.** So:

1. **No page gives Latin transliteration.** A Telugu-speaking sibling who cannot *read*
   the script gets nothing from any of the eight results. This is the whole opening.
2. **No page mentions the address rule Telugu forces on you.** Telugu marks relative age in
   the sibling terms, and `tammuḍu` ('younger brother') is a term of *reference* with **no
   corresponding term of address** — so a wish to a younger brother grammatically cannot open
   the way a wish to `annayya` does. Not one competitor page says this.
3. **`wishutsav.com` ranks for a Telugu keyword with 0 Telugu characters on the page.**
4. **No comparison table and no FAQ schema anywhere in the top 8.** Zero of eight.
5. **Stale years**: 2023, 2024, 2025 in three of the ranking URLs/titles. None is 2027-framed.

**Fan-out sub-queries** → H2s / FAQs: what does Raksha Bandhan mean in Telugu; how do you
write "happy Raksha Bandhan" in Telugu; anna vs tammudu, akka vs chelli; will Telugu script
show up on my brother's phone; how do I send Telugu wishes on WhatsApp; what if my brother
speaks Telugu but can't read it; when is Rakhi 2027; is there a Telugu word for younger
brother you can call him by.

**Angle** (recorded as `batchMeta.angle`):

> Wins by being the only page that pairs real Telugu-script wishes with Latin
> transliteration and the `anna`/`tammuḍu` address rule Telugu grammar forces on you —
> for the sibling who speaks Telugu but cannot read it — grounded in 2,973 pages built by
> 2,466 creators.

---

## Phase 3 — Sources

Read `SOURCES.md` before choosing. Live batch state at the time of choosing:
`arxiv.org` **SATURATED** (7 uses across 7 posts), `pmc.ncbi.nlm.nih.gov` banned,
`doi.org` banned, `frontiersin.org` at 3/3, `europepmc.org` at 0 headroom,
`aclanthology.org` at 2 (Punjabi + Kannada) → **1 slot, which this post takes, closing it**.
`unicode.org` at 1 (Punjabi) → this post makes 2/3.

Sibling briefs read before choosing, to avoid reusing their language sources:
Gujarati (`frontiersin` neuroscience + `europepmc` + arXiv + doi), Kannada (Journal of
Language Relationship Proto-Dravidian sibling terms, DravidianCodeMix, KanCMD), Punjabi
(unicode Blocks.txt, ACL C12-2062, Ball State thesis, PunGPT2, White Rose thesis).
**No URL and no paper is shared with any of them.** The Kannada agent's Proto-Dravidian
sibling-terms paper does cover Telugu, and was deliberately *not* reused.

Search terms used: `Telugu English code-mixed social media dataset script transliteration`,
`aclanthology Telugu code-mixed corpus romanized script`, `Telugu kinship terminology anna
akka Dravidian sibling terms`, `Telugu language maintenance diaspora heritage language open
access`, `Telugu speakers Indian language digital content consumption report`.

Every source below was downloaded and the quoted claim located in the extracted text
(PDFs via `pdftotext -layout`).

| # | Source | Type | Claim used, verified | Published | Subject test | Swap test (not swappable) |
|---|---|---|---|---|---|---|
| 1 | Kusampudi, Chaluvadi & Mamidi, "Corpus Creation and Language Identification in Low-Resource Code-Mixed Telugu-English Text", RANLP 2021 — [aclanthology.org/2021.ranlp-1.85](https://aclanthology.org/2021.ranlp-1.85/) | Peer-reviewed, open access, **full text read** | Blog dataset 135,648 words / 9,657 sentences; Twitter dataset 212,020 words / 24,404 sentences. Romanisation variability: the Telugu word ఎందుకు appears as `enduku`, `endhuku` and `nduku`; మీకు as `meeku`, `meku`, `miku` (Table 1, Table 2, §3) | 2021-09 | **PASS** — Telugu written online | **PASS** — Telugu-specific corpus counts |
| 2 | Polamarachetty & Riget, "Language Shift and Maintenance: A Case Study of the Telugu Community in Bagan Datoh, Perak (Malaysia)", *Journal of Modern Languages* 33(1): 1–28 — [ejournal.um.edu.my/…/42842](https://ejournal.um.edu.my/index.php/JML/article/view/42842) | Peer-reviewed, open access, **full text read** | n=62 Telugu participants. "Across all age groups… 100% of the participants have stated Telugu as the medium of interaction among family members with a small decline among the age group of 15-25 which records 96.7%". A young-adult focus group participant: "Unlike my grandparents, I can't read and write in Telugu". Abstract: "Language shift is observed in literacy but being revitalized among the youngest generation. In spoken language, Telugu is well maintained especially in the home domain" | 2023-07-31 | **PASS** — Telugu speaking vs Telugu literacy | **PASS** — Telugu community study |
| 3 | Nadimpalli, Prasad & Raghava, "Kinship Terms in Telugu and English", *IJHSSI* 3(4): 44–46 — [ijhssi.org PDF](https://www.ijhssi.org/papers/v3(4)/Version-1/G0341044046.pdf) | Journal article, open access, **full text read** | Term-of-reference / term-of-address table: `Annayya` → address `Annā/annayya` 'elder brother'; `tammuḍu` 'younger brother' → **address column empty**. Text: "tammuḍu 'younger brother' is actually a term of reference for which there is no corresponding term of address" | 2014-04 | **PASS** — Telugu kinship terms | **PASS** — Telugu-specific |
| 4 | IAMAI & Kantar, *Internet in India 2024* (ICUBE 2024) — [iamai.in PDF](https://www.iamai.in/sites/default/files/research/Kantar_%20IAMAI%20report_2024_.pdf) | Industry-body report, open, **full text read** | "There are 870 Million internet users (98% of internet users) who have accessed internet in Indic languages in 2024; 57% of internet users mention that they prefer accessing internet content in Indic languages in Urban India." Predominant Indic languages by conversion ratio: **High = Tamil, Telugu, Malayalam**; Mid = Hindi, Kannada; **Low = Gujarati, Marathi, Bengali** | 2025-01 | Partial — Indic internet use, with a Telugu-specific finding | **PASS** — the finding is the *opposite* in the Gujarati post's language, so it cannot sit there unchanged |
| 5 | Unicode Consortium, `Blocks.txt` (Blocks-17.0.0) — [unicode.org/Public/UNIDATA/Blocks.txt](https://www.unicode.org/Public/UNIDATA/Blocks.txt) | Standards reference, open | `0C00..0C7F; Telugu` — the Telugu block is 128 code points | 2025 (Unicode 17.0.0) | **PASS** — the script itself | **PASS** — the range is Telugu's, not Gurmukhi's `0A00..0A7F` |

**Counts.** 5 sources. 4 pass the subject test; 3 are peer-reviewed/scholarly (1, 2, 3), all
open access; **1** context statistic (4) — the batch limit, and no government source at all.
One Wikipedia link in the body (Telugu language) for entity disambiguation, uncounted.

**Honest caveat on source 3.** *IJHSSI* is a low-prestige journal with a thin review
signal. The claim taken from it is a descriptive fact about Telugu kinship terminology that
any Telugu speaker can check, and it is corroborated by the paper's own reference list
(Subrahmanyam, *An Introduction to Modern Telugu*, Annamalai University, 1974). It is
recorded in the audit rather than presented as strong evidence. A Cambridge *Language*
article on Dravidian kinship terms exists but is paywalled with no open version found.

**Not found, and named honestly:** no study of Telugu-language *festival greeting* behaviour
specifically. Searches for Telugu digital greeting / Telugu festival message studies returned
nothing scholarly. That is a real finding — the post leans on Telugu-language behaviour
research plus first-party platform data instead.

**Ledger rows appended to `SOURCES.md`.** `aclanthology.org` is now **3/3 — full** for this
batch; no later agent may add an ACL Anthology URL.

---

## Phase 5 — Targeting

- `categorySlug`: **`indian-festivals`** — verified live against
  `https://strapi.subhsandesh.in/api/categories`.
- `templateUrls`: `https://subhsandesh.in/happy-rakshabandhan-to-brother` (the only rakhi
  template in `TEMPLATE_LINKS`; genuinely serves the brother-directed half of this keyword)
  and `https://subhsandesh.in/templates`. **There is no sister template** — and this keyword
  is recipient-neutral, so half its intent has no matching template. Recorded in the audit.
- Internal links: 3, all placed after the wishes section establishes why a reader would want
  one. None in the opening paragraph.
- `structuredData`: an 8-item `ItemList` mirroring the eight H3 wishes in order, plus an
  `@id`-matched enrichment block on `…#post` carrying `about`, `mentions` and `citation`
  mirroring `batchMeta.sources` one-to-one. Every `sameAs` QID verified against the
  Wikipedia API: Raksha Bandhan Q10266, Telugu language Q8097, Telugu script Q570450,
  Telangana Q677037, Dravidian languages Q33311.

## Phase 6 — Where this post is weak

1. Every first-party number is platform-wide. None is about Telugu and none is about rakhi.
2. The Telugu wishes are composed for this post, not sourced — they are original editorial
   content, correct Telugu, but not attributable to a corpus.
3. Four national news brands hold this SERP and refresh annually. Authority, not content
   quality, is the binding constraint here.
4. Source 3 sits in a weak journal.
5. No sister-directed template exists to link.
