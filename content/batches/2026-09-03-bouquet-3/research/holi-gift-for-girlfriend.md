# Research brief — `holi gift for girlfriend`

- **Batch:** 2026-09-03-bouquet-3
- **Slug:** `holi-gift-for-girlfriend` (verified free — Strapi `filters[slug][$eq]` returned `[]` on 2026-09-03)
- **Category:** `indian-festivals` (verified against the live Strapi category list on 2026-09-03; the other nine live slugs are `digital-gifts-romance`, `milestone-birthdays`, `modern-romance`, `family-and-continuity`, `big-fat-weddings`, `festive-beats`, `say-sorry-beautifully`, `miss-you-across-miles`, `virtual-bouquets`)
- **Secondary keywords folded in:** `holi gift to girlfriend`, `holi special gifts for girlfriend`, `holi gift for her`, `holi gift for women`, `holi gift for girl`

---

## Phase 0 — Data gate

`content/facts.md`, regeneration dated **2026-09-03**, read directly (not from the brief). Five facts used, all verbatim in `batchMeta.factsUsed`:

| Fact | Where it lands |
|---|---|
| `#2 page type: digital bouquet (/bouquet-gf) — 801 created, 23.4% of all pages` | answer paragraph, H3 #1, table |
| `50.2% of shared pages are opened on a phone (21,101 of 42,017 views)` | answer paragraph, table, downside section |
| `42.7% of creators password-protect their page before sharing it (1,458 of 3,417)` | H3 #1, table, FAQ |
| `3,417 personalised pages created since 2026-03-12, across 15 page types` | table intro |
| `Average views per created page: 12.3` | table |

Two are inside the first 150 words (801 / 23.4%, and 50.2%). Gate passes.

**The Pricing block is empty.** No cost, price, "free" or "no charge" claim appears anywhere in the body, FAQs, excerpt or metaDescription — scanned with `/\bfree\b|\bcheap\b|₹|\bprice\b|costs? nothing|no charge/i`, zero hits. Recorded in `honestAssessment` as an unclosable gap, since cost is the reader's live question on a gift query.

---

## Phase 1 — SERP analysis

DuckDuckGo HTML, India locale, pulled 2026-09-03 (supplied in the assignment; `WebSearch` is exhausted for this batch). **5 of 10 weak.**

| Rank band | Host | Page type | Where the answer is | Data cited | Format | What it optimises for |
|---|---|---|---|---|---|---|
| weak | `amazon.in` | marketplace search results | nowhere — no editorial answer exists | none | product grid, price facets, review stars | add-to-cart |
| weak | `flipkart.com` | marketplace category | nowhere | none | product grid, filters | add-to-cart |
| weak | `meesho.com` | marketplace category | nowhere | none | product grid | add-to-cart |
| weak | `igp.com` | gifting retailer category | nowhere | none | product grid, delivery-date widget | same-day delivery upsell |
| weak | **`uat-iops-new.fnp.com`** | **FnP staging / UAT host leaked into the index** | nowhere | none | half-built product grid | nothing — it is not meant to be public |
| strong | `phool.co` | incense/flower shop | nowhere | none | product page | add-to-cart |
| strong | `mirraw.com` | clothing shop | nowhere | none | product grid | add-to-cart |
| strong | `rangriti.com` | clothing shop | nowhere | none | product grid | add-to-cart |

No AI Overview or featured snippet was reported for this query.

**The finding that matters:** all eight identified hosts are shops. Not one is an editorial page. A leaked UAT host holding a top-ten position is direct evidence of how little editorial competition exists here — nothing with real content is displacing it. Pages were not fetched individually: they are all competitors under `references/competitors.md`, so fetching them would only risk absorbing their framing, and their page type (product grid) is already determined. **No competitor page is cited, linked, or paraphrased.**

### Live SubhSandesh articles read before drafting

The four nearest live slugs (Jaccard 0.50 against this slug, a stop-word artifact of "for"), pulled from Strapi with `populate=*`:

| Slug | Words | Skeleton |
|---|---|---|
| `birthday-gift-for-girlfriend-online` | 1,195 | why online → what to include → checklist → 6-step build → template pick → message openers → privacy → comparison table → add-ons → design tips → mistakes → combine with physical |
| `digital-gift-ideas-for-girlfriend` | 1,798 | what is a digital gift → 14 ideas ranked → … → testing → troubleshooting → final checklist |
| `digital-gift-for-girlfriend-day` | 1,285 | why digital beats a message → 5 elements → 5-step build → message examples → comparison table → reveal ideas → tips → etiquette |
| `sorry-gift-online-for-girlfriend` | 1,151 | why digital works → how to create step-by-step → comparison → ten ideas → sample messages → timing → mistakes → checklist |

All four run the skeleton the BRIEF documents: *why digital beats physical → step-by-step → design tips → table → sharing → checklist*. **This post carries none of those sections** — no "why digital wins" H2, no numbered build steps, no design-tips section, no sharing section, no pre-send checklist, no "mistakes to avoid". Zero live Holi articles exist to collide with.

---

## Phase 2 — Gap analysis

**Table stakes** (present here): a definition of the thing being bought; a list of concrete gift options; a comparison table; the long-distance case; a downside section.

**The gap.** Every result treats Holi as a date on which to buy an object. **None of them treats Holi as a day with a shape.** Holi is a two-part festival — a bonfire on the eve, colour and water the next morning — and the middle of it physically destroys or ignores almost anything handed over. The question "what should I give her" has a prior question nobody asks: *when can you give her anything at all?*

**Stale data:** not applicable. The competing pages cite no data of any age, which is the more useful finding.

**Unanswered questions raised and dropped by the SERP:** whether Holika Dahan is a separate gifting occasion; what happens to a gift given mid-play; what to do when the recipient does not want to play; what reaches her when you are not in the same city.

**Fan-out sub-queries → H2/H3 map:**

| Sub-query | Lands in |
|---|---|
| what counts as a Holi gift for a girlfriend | H2 "What counts as a Holi gift for a girlfriend?" |
| when should I give it / is Holi morning a good time | H2 "Why Holi morning is the worst window for handing anything over" |
| what should I actually give | H2 "Six Holi gifts for a girlfriend, matched to a window in the day" (6 × H3) |
| which option suits which moment | H2 "Which window suits which gift" (table) |
| should a Holi gift be colourful | H2 "Colour or black-and-white: the choice Holi hands you" |
| is a digital gift enough / when is physical better | H2 "When a physical gift beats a link on Holi" |
| when is Holi 2027 / is Holika Dahan separate | FAQ 1 |
| she does not like colours / family Holi / long distance / thandai / staining / no account needed | FAQs 2–10 |

**Angle (recorded verbatim in `batchMeta.angle`):** wins by being the only post that plans a Holi gift around the three usable windows in Holi's own timetable — Holika Dahan night, the colour play, the wash-up evening — instead of listing objects, using SubhSandesh's 801 digital bouquets (23.4% of all pages) and the 50.2% phone-open rate to show which window a shareable page actually fits.

---

## Phase 3 — Sources

Four sources. Three research, one date reference. **Zero generic context statistics.** Every URL checked against `USED-SOURCES.md` (1,435 URLs / 441 domains) — none appears there.

| # | Source | Host | Prior posts on host | Subject test | Swap test | Peer-reviewed + OA |
|---|---|---|---|---|---|---|
| 1 | Ghosh SK, Bandyopadhyay D, et al., "The 'Holi' dermatoses: annual spate of skin diseases following the spring festival in India", *Indian Journal of Dermatology* 54(3):240–242, 2009 | `doaj.org` | 0 | pass — about Holi observance and its physical consequences | pass — cannot move to any non-Holi keyword | yes |
| 2 | Joshi BR, "The Dynamics of Performance Culture in the Holi Festival: A Critical Analysis", *Journal of Durgalaxmi* vol. 4, pub. 2025-12-31 | `nepjol.info` | ≤2 (3 URL occurrences, absent from the 3-post list) | pass — Holi as ritual and performance | pass | yes |
| 3 | Caranti E, "Masāne kī horī: Singing life in the cremation ground", *Kervan* 26(1), 2022 | `ojs.unito.it` | 0 | pass — the Holi song tradition and its Banaras variant | pass | yes |
| 4 | Office Holidays, "Holi in India in 2027" | `officeholidays.com` | 0 | date fact-check, not a citation-grade research source | pass | n/a — no publication date, so `datePublished` is omitted |

**What each one is actually load-bearing for:**

1. **Ghosh 2009** — 42 patients at a Kolkata teaching hospital, mean age **24.2 years**, itching in **59.5%**, ocular complaints in **16.7%**, and **11 of 42** attributing symptoms specifically to preparing the colours or removing them. Verified from the DOAJ API record for the article, which carries the publisher's full abstract. **Only the abstract was read**: the publisher full text (`e-ijd.org`) and `doaj.org`'s own HTML both return **HTTP 403** to automated fetches (Cloudflare JS challenge); both open normally in a browser. Recorded in the audit.
2. **Joshi 2025** — Holi read through performance theory as a liminal space that dissolves social hierarchies and boundaries through communal participation, where established norms are momentarily suspended. Abstract read on the NepJOL article page (HTTP 200). The paper also notes that critiques of the festival associate it with harassment; that framing informed the post's handling of a girlfriend who does not want to play, but no claim was built on it.
3. **Caranti 2022** — *horī* songs cast Krishna as the one throwing coloured powders at Radha and the gopīs in Braj, and the Banaras tradition has Śiva playing Holi at the Maṇikarṇikā cremation ground, tossing **ashes from the funeral pyres in place of colours**. Verified directly on the Kervan article page (HTTP 200). This is what licenses the black-and-white argument; the post states exactly what the abstract states and no more.
4. **Office Holidays** — Holi listed on **Monday 22 March 2027** across most Indian states, with **Holi Dahan on Sunday 21 March 2027** ("Day before Holi"). Verified on both the 2027 India page and the Holi page (HTTP 200).

### Gate 0 — the date, verified independently of `drikpanchang.com`

`drikpanchang.com` is a closed domain and was not used. Holi 2027 = **Monday 22 March 2027**, corroborated by two unrelated non-closed hosts:

- `officeholidays.com` — "Dates of Holi in India 2027 Mar 22", plus Holi Dahan Sun 21 Mar.
- `nationaltoday.com` — "In 2027, Holi arrives on Monday, March 22", with a table giving 2026 = 4 March and 2028 = 11 March.

`nationaltoday.com` is used as corroboration only and is deliberately **not** in `batchMeta.sources` — it runs "Expected Holi Deals" commercial content and sits too close to the competitor line. No year appears in the title or metaTitle; the date appears in the body, the metaDescription and one FAQ, which is what earns it a place in `citation`.

### Sources considered and rejected

| Candidate | Why rejected |
|---|---|
| "A methodological approach to identify communities at risk: trajectory dispersion models to trace air pollutants during colour festival", *Hygiene and Environmental Health Advances* 2022 (0.7% rise in hospital admissions after Holi) | best OA copy is on **`sciencedirect.com`** — closed at 4 posts |
| "Impact of synthetic and herbal dyes on photosynthesis…", *Scientific Reports* 2025 (Holi dyes vs an aquatic plant, 94.18% drop in trapped energy flux) | **`nature.com`** and **`doi.org`** — both closed |
| Acute myocardial infarction after bhang during Holi, *Toxicology Reports* 2024 | **`sciencedirect.com`** — closed |
| Fibiger MQ, "Holī og Dīvalī – to hindufester", *Religionsvidenskabeligt Tidsskrift* 76, 2024 (`tidsskrift.dk`) | drafted in, then **cut**: the only claim its English abstract supports ("adaptability outside India is an open research question") fails the "would the fact stay without the link" test, and its Diwali half creates a swap-test collision with the batch's `diwali gift for wife` post |
| Ghosh SK et al. 2016, paediatric Holi dermatoses, *IJD* 61(5) | genuine and OA, but same authors and journal as source 1 and the paediatric cohort is the wrong demographic for this keyword |
| "Hazardous effects of Holi colours on eyes", PARIPEX 2025 | OA but the journal's editorial standards do not support a health claim |
| Every host in the SERP, plus `phool.co`, `fnp.com`, `igp.com`, `theknot.com` et al. | competitors — never cited, linked or paraphrased |

### Search terms tried (recorded per `research-sources.md`)

DOAJ: `Holi festival ritual`, `Holi festival`, `Holi colours health`, `Holi air quality`, `gulal colours toxic`, `spring festival India colours`, `gift giving`, `gift giving ritual India`, `festival gift exchange`, `romantic gift giving partner`, `gift exchange romantic relationship`, `romantic relationship gift`, `bibjson.title:gift`.
Crossref → Unpaywall: `Holi festival colours dermatitis`, `Holi festival air pollution particulate India`, `Holi Holika Dahan bonfire ritual`, `festival Holi social relations north India`, `festival crowd public space India women safety Holi`, `gift giving romantic relationship symbolic value`, `gift giving timing anticipation surprise experiment`, `gift giving occasion ritual Hindu`, `gift giving Indian festival consumer`, `flowers gift emotional response recipient`, `digital gift mediated intimacy couples`, `photograph sharing couples relationship social media`.
OpenAlex (`is_oa:true`): `gift giving romantic relationship`, `Holi festival colours`, `Holi women public space harassment India`, `festival of colours Holi celebration women`, `Holi Braj Barsana Lathmar`, `Krishna Radha Holi Braj devotional`.

**Honest finding: there is no open-access, peer-reviewed literature on romantic gift-giving at Holi.** The consumer-research literature on romantic gift-giving that Crossref surfaces (Journal of Business Research 2011; the 2023 *Psychology of Gift-Giving* chapters; Ward & Broniarczyk's giver/recipient divergence work) is **entirely paywalled**, and SSRN, Zenodo and ScienceDirect all blocked automated access from this environment. The gift-behaviour half of the angle therefore rests on first-party data rather than on literature, which is the documented fallback. It was not padded out with a government statistic.

### Access failures encountered (a failed fetch is not evidence of absence)

`e-ijd.org` 403 · `doaj.org` HTML 403 (API 200) · `zenodo.org` 403 (record and API) · `papers.ssrn.com` 403 Elsevier content block · `timeanddate.com` 403 · `journals.lww.com` 403 · `periodicos.unb.br` connection failure · `nepjol.info` galley PDF 404 (article page 200).

---

## Phase 4–5 — Draft, links, schema

- **1,699 words** in `contentMarkdown` by plain whitespace split (`md.split(/\s+/).filter(Boolean).length`), FAQs excluded. 1 H1, 7 H2, 6 H3, no skipped levels.
- **Internal links: 3**, all from `TEMPLATE_LINKS`, all after the section that earns them, none in the opening paragraph — `https://subhsandesh.in/bouquet-gf` (mandatory, in H3 #1), `https://subhsandesh.in/darling` (H3 #5), `https://subhsandesh.in/holi` (H3 #6). None of the ten entries removed on 2026-09-02 is linked.
- **`templateUrls`:** `/bouquet-gf`, `/holi`, `/darling`.
- **Outbound links: 4 distinct URLs**, each appearing inline at the sentence it supports and again in the Sources H2. Wikipedia body links: **0** (`en.wikipedia.org` is closed at 159 posts).
- **`structuredData`:** an `@id`-matched enrichment block on `https://subhsandesh.in/blog/holi-gift-for-girlfriend#post` carrying `about` (Holi), four `mentions` and `citation` mirroring `batchMeta.sources` one-to-one and in the same order (verified programmatically); plus an `ItemList` of 6 mirroring the H3s exactly in order (verified programmatically). No `AggregateRating`, `Review` or `HowTo`. No `FAQPage` or `BlogPosting` block without the matching `@id` — the renderer builds both.
- **`sameAs` verified** against the Wikipedia API in one call, QIDs paired: Holi **Q10259**; Holika Dahana **Q16191443** (note the API redirect from "Holika Dahan"); Radha **Q113904**; Krishna **Q42891**; Gujhia **Q10997735** (redirect from "Gujiya"). No `missing` key on any title.
- **10 FAQs**, in `article.faqs` and the renderer-built `FAQPage` only. Every FAQ was compared against every H1/H2/H3 by token overlap; three pairs cleared 0.5 and were re-examined by meaning. One was reworded ("My girlfriend does not like playing with colours. What do I do for Holi?" → "My girlfriend avoids the gulal entirely. What should I do instead?") because it shared *playing* and *colour* with the H1 by accident. The remaining two ask about propriety and definition respectively and are distinct questions.

---

## Phase 6 — Audit summary

`|passed| = 48`, `|failed| = 2`, `48 + 2 = 50` = the checklist length. `passed ∩ failed = ∅`, asserted in the build script, which throws on either violation. Item strings copied byte-verbatim from `publish-checklist.md` (extracted programmatically, internal whitespace collapsed to single spaces, `**bold**` markers preserved).

**Failure 1 — "Paragraphs 2–3 sentences throughout".** Prose paragraphs are 2–3 sentences; the Block 1 answer paragraph runs 4 and each of the six four-field H3 entries runs 4–5, both because `page-structure.md` mandates their shape. Closing it means fragmenting the answer paragraph or dropping a required H3 field.

**Failure 2 — "Slug short, hyphenated, lowercase, no stop words".** Counted directly rather than assumed: the keyword is **4 words** and the slug is **4 tokens** — `holi` / `gift` / `for` / `girlfriend` — of which **`for` is a stop word**. Structural, since the assignment fixed this slug as the verified exact match.

**The two "known defect" items, counted rather than assumed:**

- **"metaTitle 50–60 characters, exact keyword in the first five words (hard cap 70)" — PASSES.** The keyword is four words, shorter than five, and the metaTitle opens with it: *"Holi Gift for Girlfriend: 3 Windows in the Day That Work"*, **56 characters**. Wave 1's brief was wrong to call this item unsatisfiable; it is only unsatisfiable at six words or more.
- **"Slug short, hyphenated, lowercase, no stop words" — FAILS**, on `for`, as counted above. Here the claimed defect is real.

Other measured values: `metaTitle` 56 · `metaDescription` 153 · `title`/H1 54 · `excerpt` 214 · `faqs` 10 · `keyTakeaways` 5.

---

## Could not verify

- **Cost, of anything.** The Pricing block in `content/facts.md` is empty, so the post makes no claim about what a SubhSandesh page costs, and it prints no rupee figure for any physical gift either — no verified price source was found and inventing one was not an option. On a gift keyword this is the largest hole in the page.
- **Full text of Ghosh 2009.** Abstract only; `e-ijd.org` and `doaj.org` HTML both 403 to automated fetches. Every figure quoted comes from the abstract and nothing is inferred beyond it.
- **Clock hours for the colour play.** The post says "morning" and "late afternoon onward" rather than naming hours, because no source states them. An earlier draft had "roughly 9am–1pm"; it was cut as unverifiable.
- **Whether Holi 2027 is 21–22 March in every state.** `officeholidays.com` lists Mar 22 for most states but the listing is regional and state observance varies; the post says "Holi 2027 falls on Monday 22 March" without claiming national uniformity.
- **Domain-cap headroom on `nepjol.info`.** `USED-SOURCES.md` shows 3 URL occurrences on that host, and the cap counts *posts*, not URLs. It is absent from the "exactly 3 posts" list, so it stands at ≤2 posts and this post takes it to ≤3 — at the cap, not over it. **Recorded, not restructured around,** per the BRIEF: if a sibling in this batch also cites `nepjol.info`, this is the URL I would surrender — `https://www.nepjol.info/index.php/jdl/article/view/87801` — and the orchestrator should make that call, not me. The knowledge base for this session already showed indexed output from sibling agents, so parallel sourcing overlap is a live possibility.
- **Whether the SERP hosts have since changed.** The top-ten list was supplied, not re-pulled, and `WebSearch` is exhausted for this batch.
