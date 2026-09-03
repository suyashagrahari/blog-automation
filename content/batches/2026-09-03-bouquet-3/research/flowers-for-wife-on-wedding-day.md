# Research brief — `flowers for wife on wedding day`

- **Slug:** `flowers-for-wife-on-wedding-day` (verified free against Strapi, 2026-09-03: `filters[slug][$eq]` → `total: 0`)
- **Category:** `big-fat-weddings` (verified present in the live Strapi category list, 10 categories returned)
- **Gate 0:** evergreen, no deadline, no year in any title string.
- **Secondary keywords folded in:** `bouquet for wedding`, `which flowers for wedding`, `wedding day flowers for bride`

---

## Phase 0 — Data gate

`content/facts.md`, regeneration dated **2026-09-03**. The gate passes: far more than 3
relevant lines exist, and the two used inside the first 150 words are the ones that
matter for this keyword — `/bouquet-gf` is the **#2 page type at 801 created, 23.4%**,
and **50.2% of shared pages open on a phone**.

**The Pricing block is empty.** No cost claim appears anywhere in the post — not in the
body, an FAQ, the metaDescription, the excerpt or a table cell. Recorded in the audit as
an unanswered reader question rather than papered over.

---

## Phase 1 — SERP analysis

SERP supplied by the orchestrator (DuckDuckGo HTML, India locale, 2026-09-03), 4/10
graded weak. I attempted to re-pull it in-sandbox to confirm; **both DuckDuckGo HTML
endpoints returned HTTP 202 with a challenge page and zero result links**, so the
supplied host list is the only SERP evidence and I did not independently verify the
ranking order.

I then fetched the ranking hosts directly. Guessed category paths mostly 404'd, which is
itself the finding — these are not editorial URLs.

| Host | Fetch result | Word count | Structure | Where the answer is | Varmala / gajra / mandap mentioned? |
|---|---|---|---|---|---|
| `teleflora.com/wedding-flowers` | **200** | ~1,600 | H1 "Wedding Flower Ideas" → Wedding Trends → Seasonal Wedding Flowers → **Your Bridal Bouquet** → Bridesmaid and Wedding Party Flowers → Reception Centerpieces, Cake Flowers, and Decor → Choosing a Wedding Florist → Florist Designed vs. DIY | Bouquet-first, Western aisle framing throughout | **No** |
| `igp.com/flowers` | 200 (category grid) | ~3,800 | H1 "Flowers" → Same Day Delivery / Birthday / Anniversary / Bestsellers / Hampers | No answer — product grid | **No** |
| `bloomsy.in` | 200 (homepage grid) | ~2,900 | "What are you sending today?" → Birthday / Anniversary / Same-Day / Love & Romance | No answer — product grid, 83 price tokens | **No** |
| `floweraura.com` | 200 on `/flowers/anniversary-flowers`; **400** on `/wedding-flowers` | ~1,100 | Social-share block only; no editorial headings | No answer | **No** |
| `myflowertree.com` | **403 / 404** | — | — | — | — |
| `bloomsvilla.com` | **404** (66 price tokens on the 404 page) | — | Best Selling Product / Flowers / Cakes / Combos / Gifts | No answer | **No** |
| `floraindia.com` | **403** (Cloudflare "Just a moment…") | — | — | — | — |
| `winni.in` | **403 Access Denied** | — | — | — | — |
| `buyanyflowers.com` | **404** (Dubai/UAE florist) | — | — | — | — |

**Reading of the SERP:** ten results, ten commercial. Nine are product grids that sell
against the question without answering it. The single reachable editorial page,
Teleflora, is a competent Western wedding-flowers guide organised entirely around the
bridal bouquet, bridesmaids and reception centrepieces. **Not one reachable result
mentions a garland, a hair flower or a mandap.** There is no editorial answer in the top
ten and no India-specific answer at all.

Note per the brief's warning: a 403 or 404 is **not** evidence that a host has no page on
this topic — five of the ten could not be read, and their content is unknown to me.

### My own site, checked before drafting

The four closest live articles were fetched in full:

| Slug | Words | Skeleton |
|---|---|---|
| `digital-flowers-for-wife` | ~5,300 | why digital → what makes it feel real → step-by-step → design tips → sample flow → comparison → sharing/privacy → troubleshooting → final thoughts |
| `virtual-flowers-for-wife` | ~6,000 | why → what to include → step by step → flower table → compare → message ideas → design tips → surprise ideas → dos/don'ts → troubleshooting |
| `virtual-flowers-for-valentines-day` | ~4,900 | same skeleton |
| `send-flowers-for-national-girlfriend-day` | ~5,400 | same skeleton, plus florist selection and care tips |

The BRIEF's warning is confirmed on all four: one shared skeleton, and **none of the four
mentions a garland, a gajra, a mandap or an Indian wedding ceremony at all**. This post
deliberately shares no section with it — no "why digital beats physical", no
step-by-step, no design tips, no sharing section, no checklist.

---

## Phase 2 — Gap analysis

**Table stakes** (present across the readable results): which flowers to pick; how long
they last; how to choose a florist; when to order.

**The gap.** Every result answers a *Western* question — which bridal bouquet to order.
None asks what flowers physically do at an Indian wedding. Nothing in the SERP contains
the words garland, hair flower or mandap.

**A second gap the orchestrator flagged and I confirmed:** the keyword is ambiguous.
"Wedding day" reads as either the ceremony or the anniversary, and no result resolves it.
The post resolves it explicitly in its second H2 and hands the anniversary reader off
rather than straddling. The sibling post owns `what to gift for wife on anniversary`; the
anniversary answer is deliberately not given here.

**Stale data:** not applicable — the marketplace results cite no data at all.

**Fan-out sub-queries → H2s:**

| Sub-query | Where it lands |
|---|---|
| What flowers does a bride actually get in India? | H2 "What are wedding day flowers for a bride in India?" |
| Do I mean the wedding or the anniversary? | H2 "Do you mean the wedding day, or the wedding anniversary?" |
| Which flowers for a wedding, and what for? | H2 + four H3s (jasmine, tuberose, marigold/rose, the bouquet) |
| Bouquet or garland? | H2 "Bouquet for wedding versus garland: what the numbers say" + table |
| Can a digital thing replace flowers on the day? | H2 "When a link is the wrong answer on a wedding day" |
| So what do I actually send, and when? | H2 "What we would actually send, and when" |

**Angle (recorded as `batchMeta.angle`):** wins by being the only post that explains what
flowers actually do on an Indian wedding day — loose flowers bred and graded for garland
preparation, jasmine documented for garlands and for decorating women's hair, and a
two-day holding time under ambient conditions — instead of which bridal bouquet to order,
and by naming where a link cannot go, using SubhSandesh's own 801 digital bouquet pages
(23.4% of all 3,417 created).

---

## Phase 3 — Sources

Route used: **Crossref → DOAJ → repository landing page**, per the brief. OpenAlex, CORE
and Semantic Scholar were not attempted (documented 429s across three waves). eGyanKosh
was unreachable (`TypeError: fetch failed` on three URL forms). All five sources were
verified by fetching the article landing page and reading the abstract; **no full text was
read**, and all five are open access, so no paywall note is required.

| # | Source | Verified claim | Published | Subject test | Scholarly + OA |
|---|---|---|---|---|---|
| 1 | Journal of Horticultural Sciences 18(1), ICAR-IIHR — [tuberose IIHR 17-23SP-08](https://jhs.iihr.res.in/index.php/jhs/article/view/2148) | loose flower yield 18.88 t/ha/year; "found suitable as loose flower for **garland preparation** with the **shelf life of 2 days under ambient conditions**" | 2023-06-30 | **Pass** | Yes |
| 2 | Journal of Horticultural Sciences 19(1), ICAR-IIHR — [shelf-life extension of tuberose](https://jhs.iihr.res.in/index.php/jhs/article/view/1851) | "Tuberose is highly valuable for making floral ornaments, **bouquets**, **artistic garlands**, button holes and essential oil"; trials at room temperature **32±1°C** | 2024-06-30 | **Pass** | Yes |
| 3 | Journal of Extension Education 28(1) — [jasmine growers](https://www.extensioneducation.org/index.php/jee/article/view/75) | "used for various purposes viz., making **garlands**, **bouquets**, **decorating hair of women**, religious offerings etc."; 120 growers, Vallioor block, Tirunelveli | 2016-11-21 | **Pass** | Yes |
| 4 | Chemical Engineering Transactions 40 — [Indian jasmine aroma](https://www.cetjournal.it/index.php/cet/article/view/5297) | "Jasmine is one of the important commercial traditional flower crops of India. It plays an important role in **religious offerings, social and cultural activities of India**"; fully open flowers carry maximum fragrance | 2014-09-20 | **Pass** | Yes |
| 5 | Etnoantropološki problemi 8(2) — [gift giving in contemporary marital rites](https://www.eap-iea.org/index.php/eap/article/view/578) | "the complex interplay between different forms of **gift giving** and consumption in **contemporary marital rites**"; reciprocity vs conspicuous, prestigious consumption | 2013-08-29 | Pass | Yes |

**Generic context statistics: zero.** No PIB, TRAI, Census or MEA figure appears.
**Wikipedia body links: zero.** Wikipedia appears only as `sameAs` in `about`/`mentions`,
each paired with a Wikidata QID verified through the Wikipedia API (`Weddings in India`
Q16196994, `Garland` Q756600, `Jasminum sambac` Q1356614, `Polianthes tuberosa`
Q17270998 — `Agave amica` redirects to it — `Gajra` Q5517629).

### Two sources I had to surrender

Both of my strongest finds are recorded in `USED-SOURCES.md` as already spent, and the
brief says to cite none of those URLs:

- `https://apeda.gov.in/floriculture` (1 post) — carries India's 2024-25 production split:
  **3,226.20 thousand tonnes of loose flowers against 1,039.29 thousand tonnes of cut
  flowers**, on 396.89 thousand hectares. This is the single best number for this angle —
  a 3.1× empirical demonstration that India's flower economy runs on garlands rather than
  bouquets — and it is out of bounds.
- `https://epubs.icar.org.in/index.php/IJAgS/article/view/156841` (1 post) — ICAR review
  stating that in India "loose flowers such as marigold, jasmine, chrysanthemum, and rose
  are integral to religious rituals, festivals, and social ceremonies", with post-harvest
  losses **estimated at 30–40% in India**.

I tried to obtain the loose-vs-cut figure from a clean domain and failed:
`nhb.gov.in/Statistics.aspx` returns a session-authorisation error, `midh.gov.in` and the
`agriwelfare.gov.in` Horticulture Statistics PDF both return 403, `indiastat.com` 404s,
and the OA papers that mention loose flowers give crop trial figures rather than national
production. **The post therefore states no national production figure.**

### Competitor check

Zero links to any host in the SERP, to any retailer or editorial competitor named in the
BRIEF, or to anything in `references/competitors.md`. Teleflora was read in Phase 1 and
is neither linked, cited, nor structurally echoed.

### Batch cap check

All five URLs and all four domains appear in **exactly one** post in this batch — mine.
Verified programmatically across all seven blog JSONs present: no URL exceeds 2 posts and
no domain exceeds 3. **No breach to report.**

---

## Cultural claims I could not verify — and one the brief got wrong

The brief instructed me to check its varmala / gajra / mandap paragraph rather than trust
it. Three findings:

1. **"Varmala" / "jaimala" could not be sourced.** DOAJ returns **0 results** for
   `varmala`, `jaimala` and `malai maatral` in abstracts. Crossref's best matches for
   "varmala garland exchange Hindu marriage ritual" were unrelated chapters from *Hindu
   Widow Marriage* and *Hindu Ritual at the Margins*. **Neither term appears in the post.**
2. **The mandap's floral decor could not be sourced.** DOAJ `mandap`/`mandapa` returns 5
   results: Nagara-style temple architecture, Yagya-mandap construction geometry, a
   Sumatran biara, and a Kalacuri temple. Nothing on wedding floral décor. **The mandap is
   not mentioned in the post.**
3. **"In a Hindu wedding there is no bridal bouquet" is contradicted by my own sources.**
   This is the same class of error as wave 2's marigold claim. Both the jasmine paper and
   the tuberose paper list **"bouquets"** among standard uses — jasmine for "garlands,
   bouquets, decorating hair of women, religious offerings", tuberose for "floral
   ornaments, bouquets, artistic garlands, button holes". The bouquet is a real product of
   the Indian flower trade. The post therefore makes the narrower, sourced claim: **the
   bouquet is real, and it is fourth on the list.** That is a better differentiator than
   the flat negative would have been, and it is defensible.

One partial: the *practice* of wearing jasmine in the hair is sourced (source 3,
"decorating hair of women"), but the **word "gajra" is not**. It appears once in the body,
explicitly labelled as what families call it, with the factual claim attached to the
paper rather than to the name. Marigold and rose get a dedicated H3 saying plainly that no
citable source was found for their wedding-day role — a claim none of the top results
would make.

---

## Internal links

Three, all from `TEMPLATE_LINKS`, all placed after the section that earns them and none in
the opening:

| URL | Anchor | Why |
|---|---|---|
| `https://subhsandesh.in/bouquet-gf` | "Build-a-Bouquet page" | Mandatory for this cluster; also the post's subject and the #2 page type |
| `https://subhsandesh.in/love-gf` | "I love you page" | The `/love-gf` arm of the brief's requirement; the most-made template |
| `https://subhsandesh.in/wedding-shaadi` | "Hindu wedding invitation page" | Read the `what` first — it is a Hindu wedding (shaadi) invitation page, which is genuinely the adjacent need for this reader |

`/shaadi-card` and `/reception` were considered and dropped: the post is about the flowers
on the day, not about invitations or the reception, and a fourth link would dilute rather
than help. No excluded or removed slug is referenced.

---

## Where SubhSandesh is the wrong answer

Stated in its own H2 and again in the table. On the ceremony day real garlands and real
hair flowers cannot be replaced by a link — they are physically worn and exchanged, and
every florist in this SERP can deliver something we cannot deliver at all. The table says
"Not measured — we do not sell flowers" on three of its four rows. A second limit is
named from our own data: the model assumes a phone in her hand, and **50.2% phone opens**
is exactly the reason a wedding day is the worst day for that assumption.

---

## Self-audit summary

47 of 50 checklist items pass; 3 fail. `passed ∩ failed = ∅` and `|passed| + |failed| = 50`,
both asserted programmatically. Item strings copied byte-verbatim with internal whitespace
collapsed to single spaces.

The three failures, and why each is structural rather than fixable:

1. **metaTitle five-word rule** — the keyword is **6 words**, counted: flowers / for /
   wife / on / wedding / day. No 50–60 character title can fit a 6-word keyword inside
   five words. The keyword opens the title at word one.
2. **Slug stop words** — counted: 6 tokens, **2 of them stop words** ("for", "on").
   Stripping them gives `flowers-wife-wedding-day` and breaks exact-keyword match, so they
   were kept deliberately.
3. **Swap test** — source 5 could plausibly sit in the sibling `engagement gift for
   couple` post. Named the URL I would surrender if the orchestrator wants it clean, rather
   than dropping it unilaterally.

Body: **1,765 words** by plain whitespace split. **12 FAQs**, in `article.faqs` only.
Max FAQ-to-heading token overlap **0.60**, re-examined by hand: the two at threshold share
only the unavoidable vocabulary (flowers / wedding / day) and ask genuinely different
questions — one about the *form* the flowers take, the other about *who sends them*. One
FAQ was rewritten during this pass because its answer duplicated another FAQ's.
