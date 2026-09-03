# /bouquet-gf keyword shortlist — wave 3 — 2026-09-03

Seed cluster: the `/bouquet-gf` template — "Build a Bouquet". 12 blooms in colour
or black-&-white, reshuffle, card, Deed of Devotion, send a link that blooms open
when tapped.

Market: India (`gl=in`, `kl=in-en`). Site: `subhsandesh.in`. Authority: low.
First-party: `/bouquet-gf` is the **#2 page type — 801 created, 23.4% of all
3,417 pages** (measured 2026-09-03).

---

## The finding: the flower-knowledge axis is closed in every phrasing

Wave 1 concluded that flower-meaning SERPs are specialist-owned and wave 2 bet
that **Indian-first framing** would open them, on the evidence that
`marigold flower meaning in hinduism` returned 1/10 weak. Wave 3 tested that bet
properly and **it does not hold.**

| SERP pulled today | Weak/10 | Who actually owns it |
|---|---|---|
| `lotus flower meaning in hinduism` | **0** | hinduismfacts.org, hinduvism.com, hinducreed.com, divinehindu.com, hindu-blog.com |
| `hibiscus flower meaning in hinduism` | **0** | hindu-blog.com, soulfulmeanings.com, vedjyotish.org, spiritualall.com, petalrepublic |
| `orchid flower represents` | **0** | petalrepublic, flowermeaning.com, theflowerexpert, foliagefriend, bloomingexpert |
| `how to make a bouquet last longer` | **0** | wikihow, realsimple, bestproducts, florist blogs |

There is an entire cottage industry of **Hindu-devotional flower blogs** —
`hindu-blog.com`, `divinehindu.com`, `hinduismfacts.org`, `vedjyotish.org` — and
they own the Indian-first frame outright. Marigold at 1/10 was the outlier, not
the pattern. **Every flower-knowledge keyword tested this wave is a Gate 4 cut.**

### And a second, subtler trap: "in hindi" is a *translation* SERP

The obvious move was the regional-language meaning variants the wave-1 file
queued for "next cycle" (`lotus flower meaning in hindi`, `hibiscus … in
marathi`, `orchid … in tamil` — 7x each, thirty-odd of them). Pulled:

| SERP | Weak/10 | Who owns it |
|---|---|---|
| `lotus flower meaning in hindi` | 0 | shabdkosh.com, dict.hinkhoj.com, hindlish.com, flowersnames.in |
| `hibiscus flower meaning in hindi` | 0 | shabdkosh.com, dict.hinkhoj.com, uptoword.com, helloswasthya.com |
| `orchid flower meaning in hindi` | 0 | shabdkosh.com, dict.hinkhoj.com, hindwidictionary.com, hindlish.com |

Those are **bilingual dictionaries**. The searcher typing "hibiscus flower
meaning in hindi" wants the Hindi *word* — गुड़हल — not an essay on symbolism.
Google has resolved the ambiguity as translation intent, and a symbolism post
does not match that page type. **Gate 2 cut, on top of the Gate 4 cut.** That is
~30 candidates in the harvest killed by one distinction, and it is the single
most useful thing measured this wave.

**Consequence: wave 3 is 100% occasion and life-event gifting.** No flower post.
That is the opposite of what raw demand suggests and it is where every verified
opening actually is.

## The 10

18 SERPs pulled today, **18 verified, 0 failures** (the fetcher refuses to report
a weakness count off fewer than 4 parsed hosts, and retries with backoff — an
earlier wave silently read 8 empty parses as "zero weak"). `demand` is
autocomplete `prefix_hits`: **ordinal demand from Google, never a monthly figure.**

| # | Keyword | Demand | Vol (EST) | Weak | Win | Target pos | Clicks/mo | Publish by |
|---|---|---|---|---|---|---|---|---|
| 1 | makar sankranti gift ideas for wife | 8x | <300 | **6/10** ✓ | 0.60 | 3 | 10 | ~2026-11-20 |
| 2 | what to gift for wife on anniversary | **23x** | 1,000–3,000 | **5/10** ✓ | 0.60 | 3 | **132** | evergreen |
| 3 | holi gift for girlfriend | 3x | <300 | **5/10** ✓ | 0.60 | 3 | 10 | ~2027-01-15 |
| 4 | diwali gift for wife | 11x | <300 | 4/10 ✓ | 0.40 | 4 | 4 | ~2027-08 |
| 5 | promotion gift for husband | 7x | <300 | 4/10 ✓ | 0.40 | 4 | 4 | evergreen |
| 6 | flowers for wife on wedding day | 6x | <300 | 4/10 ✓ | 0.40 | 4 | 4 | evergreen |
| 7 | what to gift for my wife | **21x** | 300–1,000 | 3/10 ✓ | 0.40 | 4 | 18 | evergreen |
| 8 | engagement gift for couple | 6x | <300 | 3/10 ✓ | 0.40 | 4 | 4 | evergreen |
| 9 | navratri gift ideas | **16x** | 300–1,000 | 3/10 ✓ | 0.40 | 4 | 18 | ~2027-07 |
| 10 | flowers for wife after giving birth | 6x | <300 | 2/10 ✓ | 0.15 | 6 | 1 | evergreen |

**Total = 205 clicks/mo at target position** — and **132 of it, 64%, is row 2
alone.** If only one of these ten is worth writing well, it is
`what to gift for wife on anniversary`: highest demand in the harvest, 5/10 weak,
and the closest conversion fit to a romantic template on the list. Rows 4, 5, 6, 8
are worth 4 clicks each and are here for cluster coverage and internal linking, not
for traffic — that is the honest reason to write them, and it is a weak one.

Every figure in that table is computed by one rule in `final10.json`, not by hand:
`band_midpoint × CTR(target_position) × win_probability`, with the volume band
placed from `prefix_hits` on the same thresholds wave 1 used (≥22x → 1,000–3,000,
≥13x → 300–1,000, else <300), win probability from the skill's Gate 4 scale
(5+ weak → 0.60, 3–4 → 0.40, 1–2 → 0.15), and CTR from the skill's own curve.
An earlier hand-written draft of this table disagreed with the script in four rows
and understated the total by a quarter; trust `final10.json`.

### What the weak results actually are

Every opening in this table is the same shape — **a marketplace SERP with no
editorial answer in it**:

- row 1: winni, igp, amazon, giftalove, floweraura, fnp — 6 of 10, the highest
  weakness count measured across all three waves
- row 2: amazon, etsy, caratlane, flipkart, igp
- row 3: amazon, flipkart, meesho, igp, and an FnP **staging host**
  (`uat-iops-new.fnp.com`) ranking in the top 10, which is its own comment on how
  contested this page is
- row 4: amazon, flipkart, igp, etsy
- row 9: etsy, winni, amazon

Rows 7 and 8 are the exception and need care: their strong results are
`theknot.com`, `brides.com`, `forbes.com` and `nytimes.com`. Those are real
editorial authorities, they are US-first, and they are beatable **only** on
India-specific ground. Do not write a generic listicle against Forbes.

## Cut, and why — so nobody re-harvests these

| Cut | Gate | Reason |
|---|---|---|
| every `<flower> flower meaning in hinduism` | 4 | 0/10 weak; Hindu-devotional flower blogs own it |
| ~30 `<flower> flower meaning in <language>` | 2 + 4 | translation-dictionary SERP; wrong page type |
| `orchid flower represents`, `what does the flower hibiscus mean` | 4 | 0/10; petalrepublic + flowermeaning + theflowerexpert |
| `how to make a bouquet last longer` | 4 + 5 | 0/10; and a digital bouquet cannot keep her real one alive |
| `how to make a bouquet garni` | 2 | **it is a cooking herb bundle.** 7x of pure intent mismatch |
| `how to make a bouquet with paper` / `of money` / `of chocolates` | 5 | craft-tutorial intent; a reader folding paper does not want a link |
| `pongal gift for ration card holders`, `pongal gift in ration shop 2026` | 5 | Tamil Nadu government ration-shop hampers. 8x, and completely unsellable |
| `bhai dooj gift for brother` (+ 12 `under ₹N` variants, 16x head) | 5 | sibling occasion; `/bouquet-gf` seals with a "Deed of Devotion" and is romantic by construction |
| `dhanteras gift for husband` | 5 | Dhanteras intent is buying gold/metal. Wrong product, not a near-miss |
| `ganesh chaturthi gift ideas` (17x) | 5 | puja and family-hamper intent — the same ground wave 1 cut `which flower for which god` on |
| `promotion gift for boss` / `for men` / `coworker`, `what is a promotional gift` | 5 | corporate merch |
| all `… under ₹100/200/500/1000` variants | 5 | price-point intent, and **`facts.md` has an empty Pricing block** — we cannot compete on a number we are not allowed to state |
| `housewarming gift for couple` | 5 | 3/10 weak and it survived Gate 4, but there is no housewarming template and the honest product answer is thin. Displaced by row 10 |

## Method and its limits — read before trusting any number here

- **No Ahrefs, Semrush or Keyword Planner. There are no KD figures in this run.**
  Every volume is a band labelled `EST`, placed from autocomplete `prefix_hits`.
  "Difficulty" here is a weak-result count, which is cruder and different.
- **No Search Console export. Fourth run in a row without it.** It is the only
  keyword data that is actually true about this site. With 975 live blog articles
  — 104 of them flower/bouquet posts — the cheapest traffic in this cluster is
  almost certainly a page already sitting at position 5–20, not any row above.
- **`own_position` is `none` on every row because no `site:` pass was run.** With
  104 live flower articles that is very likely wrong somewhere, and it is the
  largest single inaccuracy in this file.
- **`WebSearch` is exhausted.** All 18 SERPs are DuckDuckGo HTML, India locale:
  no AI-Overview detection, no PAA, no ads signal, and DDG's ranking is not
  Google's. Re-pull rows 1–3 with `WebSearch` in a fresh session before betting a
  quarter on them.
- **Dedupe is title-level** — Jaccard on slug+title tokens against the 975 live
  blog slugs pulled fresh from `sitemap.xml` today, plus the 161 slugs already
  committed across 13 batches. It catches "we already wrote this". It does not
  catch "we already rank for this".
- **Festival dates are deliberately absent from this file.** Makar Sankranti,
  Holi, Diwali and Navratri 2027 dates were not verified against a source, so
  `publish_by` above is approximate and marked `~`. No post may state a date it
  has not verified.

## Next cycle — where the remaining demand sits

The harvest returned 4,056 open candidates and this shortlist spends 10. What is
left, honestly ranked:

1. **The occasion-gifting vein is not exhausted** — `farewell gift`,
   `retirement gift`, `graduation gift for girlfriend`, `baisakhi`, `onam`,
   `ugadi`, `bihu`, `chhath`, `lohri` all have zero live coverage and the same
   marketplace-SERP shape. This is the reliable vein.
2. `flowers for wife after giving birth` folds in `flower for wife after giving
   birth to baby` (5x) and `gift for wife on delivery day` — a small cluster
   nobody has written for India.
3. **Do not re-harvest flower meanings.** Three waves have now confirmed it, and
   this wave confirmed it in the two phrasings that looked most promising.
4. The single highest-leverage move for `/bouquet-gf` remains **not another
   post**: pull Search Console, re-run Phase 1 against the 104 existing flower
   articles, and edit rather than add. Also **consolidate** — 12 of those 104 are
   product-term pages sharing one skeleton, competing with each other.
