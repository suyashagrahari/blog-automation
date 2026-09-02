# Research brief — `bouquet colour combination`

Slug: `bouquet-colour-combination` · Category: `modern-romance` · Timing: evergreen (no date, no year-stamp)
Batch: `2026-09-02-bouquet` · Written 2026-09-02 · `facts.md` regeneration read: **2026-09-02**

Secondary keywords folded in: `bouquet color code` (H2 + hex list + one FAQ), `how to combine flower colors`
(the five-rules H2), `how to match flower colors` (rule 4 + one FAQ), `flower colour combination for bouquet`
(intro + definition H2).

---

## Phase 1 — SERP

### What was measurable

`WebSearch` is exhausted for this session (200/200) and `WebFetch` is hook-blocked, so **the per-page
comparison table Phase 1 asks for could not be built from first-hand fetches.** The SERP below is the
orchestrator's measurement of `bouquet colour combination ideas`, taken 2026-09-02, and is recorded as
received rather than re-verified. This is a real limitation and it is carried into the audit.

| # | Domain | Type | Weak? |
|---|---|---|---|
| 1–2 | `pinterest.*` (×2) | Image board | **Weak** |
| 3 | `threeacrefarm.net` | Small flower-farm blog | No |
| 4 | `icolorpalette.com` | Colour-palette generator site | No |
| 5 | `astyledwedding.com` | Wedding styling blog | No |
| 6 | `blosmia.com` | Florist / floral content site | No |
| 7 | `bloomandrootfloral.com` | Florist | No |
| 8 | `colorany.com` | Colour-palette site | No |

**2 of 8 weak.** Under the skill's Gate 4 that is a "hard" row, roughly 0.15 win probability, not a
winnable one. The six non-weak results are small niche sites rather than large authorities, but they are
genuinely on-topic for this query, which is the harder problem: they are not beatable by being more
relevant.

**None of these pages was fetched, cited, linked or paraphrased.** All six non-Pinterest results are
competitors for this query under `references/competitors.md` (florists and colour-palette tools selling
into the same job), and `icolorpalette`, `colorany`, `blosmia`, `threeacrefarm`, `astyledwedding` and
`bloomandrootfloral` are named as off-limits in the assignment.

### SERP skew

The SERP leans **wedding** (`astyledwedding`, `bloomandrootfloral`). A wedding palette is a
multi-arrangement, multi-venue, colour-scheme-for-a-day problem. A gift bouquet for one person is a
one-arrangement, one-viewer problem, and the two have different constraints. This post deliberately takes
the gift case and says so.

### Adjacent live SubhSandesh articles (read from Strapi, not from the SERP)

103 of 935 live articles are flower/bouquet posts. The two closest were pulled and read in full:

| Slug | Words | What it owns | How this post stays off it |
|---|---|---|---|
| `meaning-of-flower-colors` | 1,222 | Per-colour symbolism (red / pink / white / yellow …), occasion matching, a short "Mixing colors: rules that actually help" | This post carries **no colour-meaning section at all**. Zero per-hue symbolism. |
| `pastel-bouquet-maker-online` | 1,062 | "Choose a 3–5 colour pastel palette", "limit flower types to three", negative space, the pastel aesthetic | This post argues a **3-hue ceiling** (not 3–5), is not about pastels, and never discusses negative space or layout |

Also live and adjacent, not duplicated here: `digital-bouquet` (j=0.20), `digital-flower-bouquet` (j=0.17),
`virtual-bouquet` (j=0.17), `send-a-virtual-bouquet` (j=0.17), `flower-meaning-chart`,
`aesthetic-flower-bouquet-online`.

---

## Phase 2 — Gap analysis

### Table stakes (present in the post)

- What a bouquet colour combination is, and the standard relationship vocabulary (monochromatic, analogous,
  complementary, triadic).
- Named, copyable combinations with actual colour values.
- A shortlist of "safe" combinations for a recipient whose taste you do not know.

### The gap

The SERP answers **"which palettes look nice"** with photographs and swatch grids. It does not answer
**"how do colours work together"** as a set of decidable rules. Specifically, nothing on the SERP covers:

1. **A hue ceiling with evidence behind it.** Everyone says "don't use too many"; nobody says three, and
   nobody points at a preference study.
2. **Dominance ratio.** The 60/30/10 idea is standard in interior design and almost absent from bouquet
   writing.
3. **Lightness before hue.** Counterintuitive and directly supported: palette preference tracked lightness
   and was *not* related to hue angle.
4. **The linking colour as a tested construct**, and the finding that harmony geometry shifts by country —
   which makes every Western palette board a starting point rather than an answer for an Indian recipient.
5. **What a phone screen does to a palette.** No florist blog addresses it because it does not apply to
   their product. 50.2% of SubhSandesh views are on a phone, 50.5% on a touch device.
6. **Designing for black-and-white on purpose.** A physical florist cannot desaturate a rose. `/bouquet-gf`
   can, as a first-class option rather than a filter.

### Stale data on the SERP

Not assessable — no SERP page was fetched. Recorded as unverified rather than claimed either way.

### Fan-out sub-queries → H2/H3 map

| Sub-query | Where it lands |
|---|---|
| what is a bouquet colour combination | H2 "What is a bouquet colour combination?" |
| bouquet colour code / hex codes for a bouquet palette | H2 "What is a bouquet colour code?" |
| how many colours in a bouquet | H3 1 |
| which colour should dominate | H3 2 |
| what to do when two colours clash | H3 3 |
| how to match flower colours | H3 4 |
| black and white bouquet | H3 5 |
| digital vs florist for colour control | H2 "Four routes to the same combination, compared" |
| why does it look different on my phone | H2 "What a phone screen does to a bouquet palette" |
| when is a real bouquet better | H2 "Where a real florist beats a digital bouquet on colour" |
| how do I actually build it | H2 "Building the combination on a template" |

### Angle (`batchMeta.angle`)

> Wins by being the only post that treats a bouquet colour combination as a ratio problem (three hues,
> 60/30/10, a linking colour) and then asks what a backlit screen does to it, using SubhSandesh's own 795
> digital bouquets and 50.2% phone-open rate — plus a black-and-white option no physical florist can offer.

---

## Phase 3 — Sources

Search route that worked: **Crossref → DOAJ article API (publisher-supplied abstracts) → publisher page.**
OpenAlex, CORE and Semantic Scholar were avoided per the assignment (429 from concurrent agents);
Unpaywall returned HTTP 422 on every DOI tried.

**Verification caveat, carried into the audit:** `mdpi.com` and `sciencedirect.com` returned **HTTP 403**
to every fetch attempt, and `journals.ashs.org` returned an empty body. Those three were verified against
the **publisher-supplied abstract in the DOAJ article API**, which is metadata deposited by the journal,
not a competitor's summary. `opg.optica.org` was fetched directly and its abstract read on the page.
**No full text was read for any of the five sources**, so every claim in the post is held to what the
abstract states. A failed fetch is recorded, never treated as evidence of absence.

| # | Source | Domain | Peer-reviewed | Open access | Subject test | Swap test |
|---|---|---|---|---|---|---|
| 1 | "Analyzing and predicting colour preference of colour palettes", *Heliyon*, 2023-03 | `sciencedirect.com` | Yes | Yes (CC BY, DOAJ-indexed) | Pass — colour palette preference | Pass — could not sit in a rose-day or friendship-day post |
| 2 | "Elements of Style in Floral Arrangements…", *HortScience*, 2023-11 | `journals.ashs.org` | Yes | Yes (DOAJ-indexed) | Pass — floral arrangement colour and consumer response | Pass — the load-bearing finding here is the colour one |
| 3 | "'Playing' with Color: … 'Geometry' of Color Harmony in the CIELAB Color Space across Countries?", *Arts*, 2024-03 | `mdpi.com` | Yes | Yes (CC BY) | Pass — colour harmony perception | Pass |
| 4 | "Upper-limit luminance for the surface-color mode appearance", *JOSA A*, 2000-11 | `opg.optica.org` | Yes | **No — paywalled, abstract only** | Pass — colour appearance on a display | Pass |
| 5 | "The Influence of Color on Recognition Memory for Cultural Landscapes", *Russian Psychological Journal*, 2023-09 | `rpj.ru.com` | Yes | Yes (DOAJ-indexed) | Pass — colour vs black-and-white imagery | Pass |

**Zero generic context statistics.** No PIB, TRAI, Census, MEA, APEDA or Wikipedia source. Zero Wikipedia
body links (Wikipedia appears only as `sameAs` in `about`/`mentions`, which the structured-data reference
states does not count against the body budget).

### What each source is actually used for

1. **Heliyon** — 50 observers; lightness played an important role in preference, preference was *not*
   related to hue angle; the new `Delta_Order` metric for colour difference between adjacent patches
   correlated with preference at Pearson **−0.801**, so observers preferred palettes with low
   `Delta_Order`. Used for rule 1 (hue ceiling) and rule 4 (lightness before hue). Paraphrase kept narrower
   than the finding: the study is about colour palettes of patches, not bouquets, and the post says so.
2. **HortScience** — eye-tracking plus mixed logit models; consumers did **not** uniformly favour existing
   floral design theory, and instead valued symmetrical form and arrangements with **similar but not
   identical** colours; the presence of roses was the most crucial factor in capturing attention and
   increasing willingness to pay. Used in rule 1 to show flowers behave like the palette study.
3. **Arts** — 599 participants aged 18–76 across eight countries adjusted the removed "intermediary"
   linking colour of ten historical colour triads; 2,995 choices mapped into CIELAB showed the triads have
   a **different geometry across cultures**. Used for rule 3 and the cross-cultural caveat. The paper's own
   conclusion is about cross-cultural shifts in harmony perception; the post claims nothing more.
4. **JOSA A** — observers raised a colour chip's luminance until it stopped appearing in surface-colour
   mode; the upper limit differed by colour but the corresponding brightnesses were near-identical and sat
   **slightly below the brightness of the white frame**, and the brightest surround stimulus acted as the
   cue. Used for the phone-screen section. **Abstract only.** The post's translation to a phone at full
   brightness in a dark room is stated as a translation, not as the paper's finding.
5. **Russian Psychological Journal** — 154 participants aged 18–66 shown 36 colour and black-and-white
   photographs of cultural landscapes in a continuous recognition task; colour played an important role at
   the **encoding** phase for designed and naturally evolved landscapes. Used for rule 5. The post says
   "take colour away and what the viewer stores changes" and does not extend the finding to flowers.

### Cap check — counts POSTS, not URLs

Sibling files in `content/batches/2026-09-02-bouquet/blogs/` were read before adding anything.

| Domain | Sibling posts using it | This post | Total posts |
|---|---|---|---|
| `sciencedirect.com` | 1 (`rose-day-gift-for-girlfriend`) | 1 | **2 of 3** |
| `journals.ashs.org` | 1 (`womens-day-flower-bouquet`) | 1 | **2 of 3** |
| `mdpi.com` | 1 (`propose-day-gift-for-girlfriend`) | 1 | **2 of 3** |
| `opg.optica.org` | 0 | 1 | 1 of 3 |
| `rpj.ru.com` | 0 | 1 | 1 of 3 |

No URL is shared with any sibling. **No breach suspected, so nothing was dropped or swapped.** If the
orchestrator's finished-batch view disagrees, the URL I would surrender is
`https://www.mdpi.com/2076-0752/13/2/53` (rule 3 survives on the general "harmony is partly cultural"
point, weakened but intact) — I have not removed it.

All five URLs and all five domains were checked against `USED-SOURCES.md` (618 URLs, 373 domains):
**zero matches.** None of the 22 closed domains is used, and neither `doiserbia.nb.rs`, `icesi.edu.co` nor
`un.org` appears.

### Search terms that returned nothing usable

Recorded because an empty result is a finding, not an absence:

- `mobile display colour viewing illuminance`, `smartphone display color ambient`,
  `colour gamut display preference observers`, `colour reproduction display print difference` — **0 DOAJ
  hits each.** I could not find an open-access peer-reviewed study on colour rendering on consumer phone
  displays. The paywalled JOSA A paper is the closest thing that exists and it is 2000, not recent.
- `ornamental colour preference consumers`, `cut flower consumer preference` — nothing on flower *colour*
  preference specifically; the horticulture literature that exists is about postharvest quality and
  willingness-to-pay for form.
- `achromatic chromatic aesthetic preference` — 0 hits. There appears to be no study of preference for
  black-and-white *floral* imagery; the recognition-memory paper on landscapes is the nearest available.

---

## Phase 4–5 — Draft and targeting

- **1,783 words** in `contentMarkdown`, plain whitespace split (`md.split(/\s+/).filter(Boolean).length`).
  In the 1,500–1,800 band. `wordCount()` in `app/lib/batches.ts` will read 20–40 higher; that number was
  not used.
- **11 FAQs**, in `article.faqs` only. No FAQ heading in the body, and no FAQ question string appears
  anywhere in `contentMarkdown` (checked programmatically — one collision with the "What is a bouquet
  colour code?" H2 was found and the FAQ was rephrased).
- **7 first-party facts** quoted verbatim from `facts.md` (2026-09-02 regeneration) in `factsUsed`. Two are
  inside the first 150 words: the `/bouquet-gf` 795 / 23.4% line and the 50.2% phone-open line.
- **Note on a number:** the assignment said 50.3% of views are on a phone. The 2026-09-02 `facts.md` says
  **50.2%** (20,917 of 41,636). The file wins, per the brief, and 50.2% is what the post prints.
- **Pricing:** empty in `facts.md`, so the post states nothing about cost — not in the body, an FAQ, the
  metaDescription or a table cell. The word "free" does not appear. The table column that would naturally
  carry a price carries "changing your mind after committing" instead. **Recorded as a gap in the audit.**
- **Internal links: 3, all three mandatory ones**, all placed in the final "Building the combination"
  section, after the value is established: `/bouquet-gf` ("Build-a-Bouquet page for a partner"), `/love-gf`
  ("romantic 'I love you' page"), `/darling` ("darker Darling page"). No fourth link was added — nothing in
  `TEMPLATE_LINKS` is genuinely relevant to a colour-theory question.
- **`templateUrls`**: `["/bouquet-gf", "/love-gf", "/darling"]`.
- **`categorySlug`**: `modern-romance` — verified present in the live Strapi category list (10 categories).
- **Slug**: verified free against Strapi (`filters[slug][$eq]=bouquet-colour-combination` → `total: 0`).
- **`structuredData`**: two blocks. An `@id`-matched `BlogPosting` enrichment on
  `https://subhsandesh.in/blog/bouquet-colour-combination#post` carrying `about` (Color scheme), four
  `mentions` and `citation` mirroring the five sources one-to-one with dates; plus an `ItemList` of five
  `ListItem`s mirroring the five H3s in the same order. No `AggregateRating`, `Review` or `HowTo`.
- **Entity verification** (Wikipedia API, `prop=pageprops&ppprop=wikibase_item`, all resolved, no
  `missing`): Color scheme → Q859170; Flower bouquet → Q1187930; Harmony (color) → Q5659234 (reached via
  the `Color harmony` redirect, so the canonical title is used); CIELAB color space → Q375414;
  Complementary colors → Q373984.

## Phase 6 — the two "known defect" checklist items, counted rather than assumed

Both were checked by hand and **both pass** for this keyword. Recording the count so the next agent does
not inherit a wrong assumption:

1. *"metaTitle 50–60 characters, exact keyword in the first five words (hard cap 70)"* —
   `Bouquet Colour Combination — 3 Hues, 795 Real Bouquets` is **54 characters**, and the keyword is three
   words long occupying words **1–3**, well inside the first five. **PASSES.** The defect described in the
   brief only bites keywords of five words or more.
2. *"Slug short, hyphenated, lowercase, no stop words"* — `bouquet-colour-combination` is three tokens:
   `bouquet`, `colour`, `combination`. **None is a stop word** on any standard list (no *a, the, of, for,
   and, in, to, is*). Lowercase, hyphenated, 26 characters. **PASSES.** The contradiction with "target
   keyword in slug" does not arise here.

Two failures are recorded in `auditReport.failed`, both honestly:

1. *"At most 1 generic context statistic"* — vacuously satisfied rather than genuinely satisfied: the post
   carries **zero** cost, market or trade figures, because the Pricing block in `facts.md` is empty and no
   supportable cost number exists. The reader gets no answer to "what does a bouquet cost", which some
   share of this keyword's traffic wants.
2. *"3–6 outbound links, all fetched and verified to contain the cited fact"* — four of five were verified
   against publisher-supplied DOAJ abstracts after 403/empty responses from the article pages, and **no
   full text was read for any source.**

## Backlink notes (not in the post)

The hex-code list and the 60/30/10 + three-hue rule set are the linkable asset here — a standalone
"bouquet colour codes" reference is the kind of thing design and wedding-planning forums cite. The
phone-screen argument is the one genuinely novel claim in the flower-content space and is worth answering
with on community threads asking why a bouquet photo looks wrong on someone's phone.
