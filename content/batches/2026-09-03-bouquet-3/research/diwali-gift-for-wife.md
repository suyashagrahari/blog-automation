# Research brief — `diwali gift for wife`

- **Slug:** `diwali-gift-for-wife` (verified free: Strapi `filters[slug][$eq]` → 0 matches, 2026-09-03)
- **Batch:** `2026-09-03-bouquet-3` · **Category:** `indian-festivals` (verified present in the live 10-category list)
- **Gate 0:** 2026 Diwali is inside the lead time; written for 2027, `publish_by ~2027-08`. **No date and no year appear anywhere on the page** — see "Dates I could not verify" below.

---

## Phase 1 — SERP (DuckDuckGo HTML, India locale, re-pulled 2026-09-03)

The assignment's host list reproduced. I re-ran the query myself; the result set was identical in shape. Nine of ten results are product listing pages. Only one editorial page exists in the set, and it is not about wives.

| # | Page | Type | Fetch | Words | Direct answer? | Data / dates | Format | Optimising for |
|---|---|---|---|---|---|---|---|---|
| 1 | `amazon.in/s?k=diwali+gift+for+wife` | Search results | **HTTP 503** | — | No | — | Product grid | Transactional |
| 2 | `flipkart.com/q/gifts-for-wife` | Category listing | **HTTP 403** (reCAPTCHA) | — | No | — | Product grid | Transactional |
| 3 | `igp.com/diwali-gifts-for-wife` | Category + SEO copy | 200 | ~3,495 | No — copy sits under the grid | No dated data at all | 11 H2s, 9 H3s, on-page FAQ, `Product`/`Offer`/**`AggregateRating`** JSON-LD | Transactional; **title is "Best Diwali Gifts for Wife \| Unique Padwa Gift Ideas for Wife"** and it carries H2s for "Diwali Padwa Gift" — so the Padwa modifier is commercially recognised, and still unexplained |
| 4 | `etsy.com/in-en/market/diwali_gift_for_wife` | Marketplace market page | **HTTP 403** | — | No | — | Product grid | Transactional |
| 5 | `swashaa.com/collections/diwali-collection` | Jewellery collection | 200 | ~2,673 | No | — | Product grid, `Organization` JSON-LD | Transactional; **112 occurrences of "gold"**, 0 of "Padwa" |
| 6 | `fourbrothers.in/collections/diwali-gifts` | Kitchenware collection | 200 | ~2,152 | No | 21 products, ₹ prices | Product grid | Transactional; 0 "gold", 0 "Padwa" |
| 7 | `itokri.com/collections/premium-diwali-gifts` | Craft collection + SEO copy | 200 | ~5,228 | No | 72 ₹ values | 6 H2s, 5 H3s | Transactional; 1 passing mention of "Padwa", 0 "gold" |
| 8 | `ankx.in/blogs/news/custom-diwali-gifts-guide` | **Blog post** | 200 | ~4,826 | Partly — "how to pick something personal" | No dated data, no ₹ | 3 H2s, 2 H3s, own-product section | Informational→transactional; 2 mentions of "gold", **0 of "Padwa"**, and not wife-specific |

Tone across all eight: third person, product-descriptive, no author byline, no citations, no tradeoffs, no named downside. Nobody defines Padwa. Nobody engages with "except gold" beyond selling gold.

**Live SubhSandesh posts read as instructed** (both HTTP 200): `digital-flowers-for-wife` (~5,309 words, 18 H2s) and `virtual-flowers-for-wife` (~6,015 words, 17 H2s). Both run the product-feature skeleton the batch brief warned about — *why digital beats physical → what to include → step-by-step → design tips → table → sharing → troubleshooting → how SubhSandesh makes it effortless*. **This post deliberately shares none of that structure**: it is an occasion-and-obligation post, not a feature walkthrough. Also read: the committed `first-diwali-after-marriage.json` (2026-08-19-diwali batch), which treats the first married Diwali as a two-household scheduling problem. No overlap in H2s, sources or angle; I stay off "whose house", Bhai Dooj, and first-Diwali logistics, and it stays off gift choice.

## Phase 2 — Gap analysis

**Table stakes** (present on ≥5 of the pages): a list of gift categories; a wife-specific framing; some acknowledgement of Diwali as the occasion; a personalisation option.

**The gap** — three things, none of them anywhere in the top ten:
1. **What Diwali Padwa is.** `diwali padwa gift for wife` and its variants appear 6× in the autocomplete for this term. IGP's own title sells "Padwa Gift Ideas" and never says what Padwa is or why a husband owes a gift on it. That is the whole demand driver, undocumented.
2. **A real answer to "except gold"** — the joint-highest modifier at 11×. Every page answers it by showing more gold or by ignoring it. Nobody explains *why* gold is the default on this specific day, which is the only answer that makes the searcher's problem tractable.
3. **A named case where the recommended thing loses.** Zero of eight pages name a downside.

**Stale data:** none to supersede — none of the eight cites a dated statistic at all. That is itself the finding: this SERP has no data in it.

**Fan-out sub-queries → H2s:**
- "what is diwali padwa / balipratipada" → H2 2
- "why is gold given at diwali" → H2 3
- "diwali gift for wife except gold / unique" → H2 4 (six H3s) + H2 5 (table)
- "what if she says no gold / doesn't want anything" → H2 6
- "is a digital gift a good gift for a wife" → H2 7

**Angle:** wins by being the only post that explains that the day this query is really about is Diwali Padwa — where the wife performs *aukshan* and the husband owes her a gift — and that Padwa itself carries a gold-buying custom, which is why "except gold" is the top modifier; then ranks six non-gold options against SubhSandesh's own 801 digital bouquets, 23.4% share and 42.7% password-protection rate.

## Phase 3 — Sources

**The Padwa gifting custom: ASKED TO VERIFY, VERIFIED, three independent sources.**

The brief flagged this as the class of claim that was wrong twice in earlier waves. It holds up. Three unrelated publishers state the same thing:

1. **marathicultureandfestivals.com** (English, no publication date stated) — "The fourth day of Diwali is also celebrated as 'Diwalicha Padva' … wife does 'aukshan' of her husband and husband gives a special gift to his spouse."
2. **esakal.com** (Sakal, Marathi daily, 2025-10-22, `datePublished` read from the page's JSON-LD) — headline and standfirst both carry it; body: "या दिवशी बायको आपल्या नवऱ्याचे औक्षण करते आणि नवरा तिला प्रेमाने भेटवस्तू देतो."
3. **marathi.webdunia.com** (2024-11-02) — "पत्नी पतीचे औक्षण करते. नवरा देखील बायकोला ओवाळणी देतो."

Direction of the exchange, stated narrowly on the page: the **wife** performs aukshan; the **husband** gives the gift (*ovalani*). Not softened, not widened.

**The gold link, which the brief did not anticipate.** The same Webdunia page states two further things that turn "except gold" from a shopping preference into an explainable conflict: Balipratipada is counted among the **sadetin muhurta**, and **"या दिवशी सोनं खरेदी करण्याची पद्धत आहे"** — there is a custom of buying gold on this day. The ritual calendar and the jewellery grid are pointing at the same metal on the same date. That is the post's best single sentence and it came out of a Marathi festival page, not a research database.

**Final source set (6).** Domains checked against `USED-SOURCES.md` (1,435 URLs / 441 domains) and against all three sibling blogs already written in this batch.

| # | Source | Subject test | Scholarly / OA | Cap position |
|---|---|---|---|---|
| 1 | marathicultureandfestivals.com — Balipratipada / Diwali padwa | PASS (ritual observance) | No | new domain, 0 prior posts |
| 2 | esakal.com — why the husband gives ovalani, 2025-10-22 | PASS | No | new domain, 0 |
| 3 | marathi.webdunia.com — sadetin muhurta + gold-buying custom, 2024-11-02 | PASS | No | new domain, 0 |
| 4 | ierj.in — Shah, "Cultural Economics of Gold in India", IERJ 12(05) p.254, 2026-05-15 | PASS (gold in Indian ritual economy) | Peer-reviewed, **open access** | new domain, 0 |
| 5 | scholarsphere.psu.edu — Cheng, Meloy & Polman, "Picking Gifts for Picky People", *Journal of Retailing* 2020 | PASS (gift-giving behaviour) | Peer-reviewed, **open access** (author manuscript, CC BY-NC-ND 4.0) | **at cap — 2 posts** |
| 6 | research.wur.nl — Paolacci, Straeter & de Hooge, "Give me your self", *JCP* 25(3) 487–494, 2015 | PASS (gift evaluation) | Peer-reviewed; **abstract only**, publisher full text paywalled | **at cap — 2 posts** |

- **Generic context statistics: 0.** No PIB, TRAI, Census or MEA figure appears.
- **Wikipedia body links: 0.** Wikipedia/Wikidata appear only as `sameAs` in `structuredData`, all six titles verified live against the Wikipedia API with QIDs paired: Balipratipada `Q4851001`, Diwali `Q10244`, Maharashtra `Q1191`, Gift `Q184303`, Gold as an investment `Q791975`.
- **Competitors: 0 cited, 0 linked.** IGP, Amazon, Flipkart, Etsy, iTokri, Swashaa, Four Brothers and ANKX were read in Phase 1 and appear nowhere in the post.
- **Swap-test honesty:** sources 5 and 6 are already cited by the sibling post `what-to-gift-for-my-wife.json`. Each URL now sits at exactly 2 posts and each domain at 2 — **at the URL cap, not over it**. Recorded as an audit failure rather than silently swapped; if one must be surrendered, surrender the WUR record.

### Search routes that produced nothing

- **DOAJ**: `Diwali` → 63 articles, **every one about firework air pollution**. `stridhan gold women property India` → 0. `gold jewellery India women` → 0. `festival gifting consumer` → 0.
- **Crossref** `Diwali` + consumer/gift/ritual → air quality, 5S manufacturing, and an OED headword. There is no accessible research literature on Diwali gift exchange.
- **Unpaywall**: the four best gift-psychology papers (Flynn & Adams 2009, Flynn 2011, Galak et al. 2016, Givi & Galak 2017) are **all closed**; the one OA route Semantic Scholar returned for Galak was `journals.sagepub.com`, a closed domain here.
- **SSRN** (Yang & Urminsky, "Smile-Seeking Givers and Value-Seeking Recipients") — Cloudflare **403**, could not read, not cited.
- **`gold.org`** — Gold Demand Trends pages return 200 but are JavaScript-rendered; **no extractable India figure**. No World Gold Council statistic appears in the post.
- `shodhganga.inflibnet.ac.in` was deliberately not used: it sits at exactly 3 posts and one more use closes it.

### Dates I could not verify — nothing asserted

Attempted, all failed: `timeanddate.com/holidays/india/diwali` → **403** (Cloudflare); `india.gov.in/calendar` → 200 but **carries no 2027 data**; `hinducalendar.info` → connection failed. `drikpanchang.com` is a closed domain and was not tried. Consequently:

- **No Diwali 2027 or Padwa 2027 date appears anywhere on the page**, and there is no year in the title, metaTitle, H1 or body.
- Padwa is positioned only as **"the fourth day of Diwali"**, which is directly sourced (Marathi Culture and Festivals).
- One FAQ says outright that we do not print a date because we could not verify one.

### Also not claimed

- **No cost, price, "free", "cheap" or rupee claim about SubhSandesh anywhere** — `content/facts.md`'s Pricing block is empty. The post says so explicitly in the objection section, which is the only place money is mentioned at all.
- No figure, chart or table reproduced from any source. Source 5 is CC BY-NC-ND and a company blog is commercial use, so it is cited and linked only, never quoted at length.

## Phase 4–5 — Build notes

- **1,786 words** in `contentMarkdown` by plain whitespace split, FAQs excluded. 1 H1, 7 H2, 6 H3, no skipped levels. Longest prose paragraph: 3 sentences.
- **First 150 words carry four first-party numbers**: 3,417 pages / 15 types, 801 bouquets, 23.4%, 42.7%.
- **11 FAQs**, in `article.faqs` and the renderer-built FAQPage only. Every FAQ compared against every heading on meaning; highest token overlap 0.50, both cases genuinely different questions (H2 defines the day, the FAQ asks about its geographic spread; the H1 states the premise, the FAQ asks for a recommendation).
- **Internal links: 3** — `/bouquet-gf` (mandatory), `/love-gf`, `/dedication`. All in `TEMPLATE_LINKS`, all placed inside the ranked list after the reason to want them exists, none in the opening. No removed-2026-09-02 slug used.
- **Table:** 5 rows × 4 columns, real values only, one column entirely first-party, and the last row is a gold chain so the comparison is honest.
- **`structuredData`:** an `@id`-matched `BlogPosting` enrichment block on `…#post` carrying `about`/`mentions`/`citation` (6 citations, one-to-one with `batchMeta.sources`, in the same order), plus one `ItemList` mirroring the six H3s in order. No `AggregateRating`, `Review` or `HowTo` — notably, IGP's own page ships `AggregateRating`; we do not.
- **Objection section** names three losses: Padwa is a physical ritual and a link is not; 50.2% phone opens make a shared or absent device a real failure; at zero distance a physical gift wins.

## Phase 6 — Audit

**48 passed, 2 failed, disjoint, 48 + 2 = 50.** Item strings copied byte-verbatim from `publish-checklist.md` with internal whitespace collapsed. Failures: the slug's stop word `for` (kept — it is the exact-match, pre-verified slug); and the swap test on sources 5 and 6. Full text in `batchMeta.auditReport`.
