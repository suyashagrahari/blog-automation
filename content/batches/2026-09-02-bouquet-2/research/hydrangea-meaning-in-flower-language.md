# Research brief — `hydrangea meaning in flower language`

- **Batch**: `2026-09-02-bouquet-2`
- **Slug**: `hydrangea-meaning-in-flower-language` (checked against Strapi: `filters[slug][$eq]` returns `data: []` → free)
- **Category**: `modern-romance` (verified against the live 10 Strapi category slugs)
- **Secondaries folded in**: `what does the hydrangea represent` (H2), `what do hydrangeas symbolize` (body), `hydrangea meaning in english` (FAQ + India section), `hydrangea flower meaning`, `hydrangea colour meaning` (H2)
- **Timing**: evergreen, no year-stamp
- **Facts read from**: `content/facts.md`, regeneration dated **2026-09-02**

---

## Phase 0 — data gate

`content/facts.md` (2026-09-02) carries 17 usable lines. Seven are cited in
`batchMeta.factsUsed`, byte-verbatim. Two sit inside the first 150 words of the
body (`796 created, 23.4% of all pages` and `3,397 personalised pages … since
2026-03-12`). Gate passed.

**The Pricing block is empty.** No cost claim appears anywhere in this post — not
in the body, an FAQ, the excerpt, the metaDescription or a table cell. The table's
cut-flower row states only that we hold no delivery or cost data. Recorded as a
gap in `honestAssessment`.

### Extra first-party facts read from the repo, not from `facts.md`

Read directly from
`client/app/(templates)/bouquet-gf/components/assets.ts` (`FLOWERS`, "The 12
pickable blooms"):

> orchid, tulip, dahlia, anemone, carnation, zinnia, ranunculus, sunflower, lily,
> daisy, peony, rose

**Hydrangea is not one of them.** That is load-bearing: the post says so
explicitly rather than implying a hydrangea can be sent. The same template offers
a colour and a black-and-white mode (`TEMPLATE_LINKS` description plus
`assets.ts` `bqMedia(mode, …)`), which is what makes the "colour is a setting, not
a soil condition" contrast a real product fact rather than a rhetorical one.

---

## Phase 1 — SERP analysis (what it actually looked like)

**`WebSearch` was exhausted (200/200) and `WebFetch` is blocked, so the SERP was
read through the DuckDuckGo HTML endpoint, not Google.** No AI Overview or
featured snippet could be observed, and Google's ordering may differ. A control
fetch of an unrelated parked domain returned **HTTP 200 with 142 KB of unrelated
content**, which is why nothing below is treated as verified on a status code
alone.

Exact keyword, top 7:

| # | Page | Words | Where the answer lands | Structure | Chemistry? | Schema / byline |
|---|---|---|---|---|---|---|
| 1 | petalrepublic.com | ~1,700 | after an etymology intro | Etymology → Japan → Buddhism → Victorian → tattoos → colour H3s → gifting occasions | one passing mention of "colour can vary with soil pH", used as a metaphor for adaptability | Article, named author, comment thread, florist-delivery affiliate rail |
| 2 | gardeningknowhow.com | ~2,150 | H2 "What Does the Word Hydrangea Mean?" | word meaning → historical (Japan: gratitude/apology; Europe: vanity/boastfulness) → culture H3s → colour → care | "turn colors as you change the acidity of the soil", no numbers | first-person gardener byline, no article schema detected |
| 3 | flowermeaning.com | ~1,050 | H2 "What Does the Hydrangea Flower Mean?" | thin glossary: meaning → etymology → symbolism → colour → botany → occasions | "Bigleaf Hydrangea changes color from pink to blue based on soil pH"; also the only page carrying toxicity ("some amount of cyanide in leaves and flowers") | no schema detected |
| 4 | bloomingexpert.com | ~3,700 | first line, pull-quoted | symbolise → Japanese apology story → colour → cultures (Victorian / hanakotoba / modern reversal) → spiritual → gift → FAQ → **Sources** | **24 chemistry mentions.** Leads on "blue hydrangea's colour is produced by aluminium ions in acidic soil"; cites Yoshida et al. 2021 (PMC) and Cornell Botanic Gardens | FAQPage, named author, explicit sources list |
| 5 | floritica.com | ~2,030 | after a symbolism intro | origins → colour archetypes → cultures → arrangement → **"The Science of Soil and Color Sensitivity"** → FAQ | 11 mentions; frames the plant as "a living…" register of soil | Article schema |
| 6 | bloomandwild.com | — | — | — | — | **HTTP 403, not read.** Florist retailer; a competitor either way |
| 7 | lotusmagus.com | — | — | thin plant-blog glossary | — | not analysed in depth |

Secondary SERP (`what do hydrangeas symbolize`) surfaced
`proflowers.com`, `meaningfulspirit.com`, `whatspiritual.com`,
`myglobalflowers.com`, `wikihow.life`, `herbvity.com`, `southsideblooms.com`.

**Verdict on SERP shape: roughly 3–4 of 10 read as thin (floritica, lotusmagus,
meaningfulspirit, whatspiritual, herbvity, southsideblooms), which is better than
the briefed estimate of 1 of 10.** But the top four are genuine specialists, and
one of them — `bloomingexpert.com` — already runs the aluminium-in-acidic-soil
chemistry *and* cites the primary pigment literature. **The chemistry alone is
therefore not the differentiator the assignment expected it to be.** It is a
closer-to-open door than briefed and a harder differentiator than briefed, at the
same time.

### What the site's own posts already own

Read from Strapi before drafting:

- **`meaning-of-flower-colors`** (1,222 words, 13 FAQs, 0 hydrangea mentions).
  Owns "what each colour means" with `### Pink` — *"gentle affection, gratitude,
  and admiration"* — and `### Blue` — *"calm, trust, and unique rarity"* — plus a
  `Color | Common meanings | Best occasions` table.
- **`carnation-flower-meaning`** (1,137 words, 14 FAQs). House template:
  why-it's-thoughtful → colour → etiquette → creative uses → step-by-step →
  colour table → message ideas → photography tips → relationships → when not to
  → keepsake → final thoughts.

**How the tension with `meaning-of-flower-colors` is handled:** by complicating,
not contradicting. Both of that page's readings are kept intact as descriptions of
a *sender's colour choice*; this post argues only the narrower point that
hydrangea has no stable colour of its own for such a convention to attach to. It
never states or implies that the colour guide is wrong, and it deliberately does
not reproduce its colour-by-colour structure. The `carnation-flower-meaning`
skeleton is avoided outright — no message-ideas block, no photography tips, no
step-by-step, no colour-by-colour H3 run.

Staying off sibling territory: `gerbera-flower-meaning` owns the
"modern flower with no Victorian inheritance" angle and Indian polyhouse
economics; `marigold-flower-meaning-in-hinduism` owns Hindu ritual;
`jasmine-flower-meaning` shipped in wave 1. This post's territory is the
soil-chemistry argument and the instability of the code itself.

---

## Phase 2 — gap analysis

**Table stakes** (all five readable pages carry them): the Greek etymology
(*hydor* + *angeion*); the Japanese gratitude/apology reading; the Victorian
vanity/boastfulness reading; a colour-by-colour block; gifting occasions.

**Stale or thin:** none of the pages date their chemistry. Only
`bloomingexpert.com` cites anything at all. Nobody gives a pH number. Nobody
gives a dosing figure. Nobody names a cultivar constraint.

**The gap — four things none of the seven pages holds:**

1. **The code contradicts itself inside a single dictionary.** Kate Greenaway's
   *Language of Flowers* lists `Hydrangea — A boaster. Heartlessness.` and,
   separately, `Hortensia — You are cold.` NC State confirms Hortensia is an
   accepted common name of *Hydrangea macrophylla*. One book, one species, two
   entries, two meanings. Every competitor reports the Victorian meaning as a
   single settled fact.
2. **The inference nobody draws.** `bloomingexpert.com` uses the aluminium
   chemistry to *support* the symbolism ("which is precisely why it became the
   Japanese symbol of sincere, grounded emotion"). None of them draws the obvious
   opposite conclusion: a colour the grower's soil determines cannot carry a
   stable inherited meaning the way a rose colour does.
3. **An honest refusal.** The emperor-apology legend is repeated across the SERP
   (`bloomingexpert.com` sources it to a florist blog and a lifestyle blog). No
   scholarly or archival source could be found. This post says so.
4. **The Indian reader.** Three regional-language variants of the query exist
   (`malayalam` 13x, `kannada` 10x, `hindi` 8x) and every page serving them is
   written for US/UK beds. No Indian ritual meaning for hydrangea could be sourced
   at all — which is itself the finding.

**Fan-out sub-queries → H2/H3 map:**

| Sub-query | Lands in |
|---|---|
| what does hydrangea represent / symbolize | H2 "What does the hydrangea represent in flower language?" |
| hydrangea colour meaning / blue vs pink | H2 "Why hydrangea colour meaning is really a claim about your soil" |
| why does hydrangea change colour | same H2 (pH 5.0–5.5 / 6.0+, aluminium availability) |
| how do I send hydrangea meaning | H2 "Four ways to send hydrangea meaning…" with 4 H3s → `ItemList` |
| which option should I pick | H2 "What each option is actually trading away" (table) |
| hydrangea meaning in hindi/malayalam/kannada | H2 "Hydrangea has no sourced place in Indian flower ritual" |
| when is this the wrong gift | H2 "When a digital bouquet is the wrong way to say this" |
| is hydrangea poisonous | body line + FAQ |

**Angle** (recorded as `batchMeta.angle`): wins by being the only post that shows
a hydrangea colour meaning cannot be inherited — same plant, blue at pH 5.0–5.5,
pink at 6.0 and above — and proves the code was never stable using the one flower
dictionary that files the same species twice, alongside the first-party disclosure
that hydrangea is absent from our own 12 blooms.

---

## Phase 3 — sources

Route used: **Crossref → Unpaywall → DOAJ article API → publisher/repository**.
OpenAlex, CORE and Semantic Scholar were not needed. J-STAGE
(`jstage.jst.go.jp`) returned **HTTP 500** on every article URL tried, and
`journals.ashs.org` served a JavaScript-only shell, so both were abandoned.

| # | Source | Domain | Peer-reviewed | Open access | Subject test | Verified by |
|---|---|---|---|---|---|---|
| 1 | Kate Greenaway, *Language of Flowers* | gutenberg.org | no (primary source) | yes | pass — it *is* the language of flowers | full plain-text fetched, both entries read verbatim |
| 2 | Magalhães & Paiva, "Flowers through time", *Ornamental Horticulture* | ornamentalhorticulture.com.br | **yes** | **yes** | pass — history of flower symbolism | DOAJ record + landing page fetched (200) |
| 3 | Clemson Cooperative Extension, HGIC 1067 | hgic.clemson.edu | no (extension factsheet) | yes | pass — ornamental horticulture | fetched (200), pH sentences read verbatim |
| 4 | NC State Extension Gardener Plant Toolbox, *H. macrophylla* | plants.ces.ncsu.edu | no (extension factsheet) | yes | pass — ornamental horticulture | fetched (200), colour/toxicity/common-name fields read verbatim |
| 5 | Wang, Liang, Liu, Fan & Yuan, *Horticulturae* 11(12):1490 | mdpi.com | **yes** | **yes** (CC BY) | pass — hydrangea sepal bluing chemistry | **abstract only**, via DOAJ article API — mdpi.com returns HTTP 403 here |

Five sources. Two peer-reviewed and open access (#2, #5). All five pass the
subject test. **Zero** generic context statistics. **Zero** Wikipedia body links.
**Zero** competitor citations. None appears in `USED-SOURCES.md`.

### Verified claim inventory

- Clemson HGIC 1067: *"In acidic soil (pH 5.0 to 5.5), where aluminum is readily
  available, the flowers are blue, while in alkaline soils (pH 6.0 and up), they
  are pink."* Also: *"the actual mechanism of color variation is due to the
  presence or absence of aluminum compounds in the flowers"*; pH acts
  **indirectly**; `'Nikko Blue'` gives *"rich blue flower heads (in acid soil)"*;
  a few bigleaf cultivars are white-flowered. Page states an update date of
  31 October 2025 and **no publication date** → `datePublished` omitted from
  `citation`.
- NC State toolbox: common names include **Hortensia**; *"Blue flowers develop
  with acidic soil and pink flowers in alkaline soil. Aluminum sulfate can be
  added to acidify the soil, and lime to produce a more alkaline soil."*; native
  to Japan, China, Korea and Southeast Asia; *"Poison Severity: Low"*, toxic
  principle *"hydracyanosides (cyanogenic glycosides)"*, poison parts bark /
  flowers / leaves, symptoms *"nausea, stomach pain, vomiting, and sweating"*
  from *"consuming large quantities"*, *"Causes Contact Dermatitis: No"*. No
  publication date → omitted.
- *Horticulturae* 11(12):1490 abstract: blue colour *"results from aluminum
  uptake and vacuolar complexation"*; Al tested at **0–971.62 mg/L** on **six
  blue-modifiable cultivars**; optimum **Al₂(SO₄)₃·18H₂O at 6 g/L applied from
  two weeks after pinching until bloom**; *"commercial cultivation faces
  challenges in achieving consistent bluing while avoiding Al toxicity"*.
- *Ornamental Horticulture* abstract: *"In the nineteenth century, the Victorian
  Era highlighted floriography, in which bouquets expressed feelings determined by
  floral codes"*, within a survey of symbolism assigned by civilisation and
  period. Published **2026-05-20**.
- Greenaway: `Hydrangea — A boaster. Heartlessness.` / `Hortensia — You are
  cold.` / reverse index `Boaster — Hydrangea.` The Gutenberg text states **no
  publication year for the work** (release date 2010-03-10 is the eBook), so no
  year is asserted anywhere.

### Deliberately not stated — could not be verified

1. The Japanese emperor apology legend. Repeated across the SERP; no scholarly or
   archival source found. The FAQ says so explicitly.
2. Any publication year (1884 or otherwise) for Greenaway's dictionary.
3. A pH-driven colour response for **white-flowered** bigleaf cultivars. Clemson
   notes they exist; no mechanism sourced. FAQ declines the claim.
4. Any Indian ceremonial or folk meaning for hydrangea. Searched Shodhganga-style
   terms plus DOAJ (`floriography`, `flower symbolism gift meaning culture`) and
   found nothing. The H2 states the absence rather than filling it.
5. The "mophead of many small florets = togetherness" spiritual reading two
   competitors carry.
6. Vase-life or post-harvest colour behaviour of cut hydrangea.
7. The Yoshida et al. primary pigment chemistry (3-*O*-glucosyldelphinidin +
   Al³⁺ + 5-*O*-acylquinic acid at 1:1:1) was located and its abstract read, but
   its only reachable homes — `nature.com`, `pmc.ncbi.nlm.nih.gov`,
   `journals.plos.org`, `frontiersin.org`, `link.springer.com`, `doi.org` — are
   all closed domains. **Not cited, and the body makes no claim that needs it.**

### Cap notes — recorded, not resolved

Counted as **distinct posts in this batch**, not URL occurrences, and not across
earlier batches:

- `mdpi.com` → **3 posts** (`christmas-gift-for-girlfriend`,
  `new-year-gift-for-girlfriend`, this one). **At the domain cap of 3, not over.**
- `https://ornamentalhorticulture.com.br/rbho/article/view/3015` → **2 posts**
  (`gerbera-flower-meaning`, this one; the gerbera file landed mid-run). **At the
  URL cap of 2, not over.**

Nothing was dropped, swapped or restructured. If the orchestrator wants either
under its cap, the URL to surrender first is
`https://www.mdpi.com/2311-7524/11/12/1490` — Clemson HGIC 1067 and the NC State
toolbox independently carry every mechanism claim it supports, whereas the
Ornamental Horticulture review is the only peer-reviewed open-access source for
the historical framing. The reason MDPI is hard to avoid: essentially the whole
open-access hydrangea-pigment literature sits on MDPI journals, and every
non-MDPI home is a closed domain or refused this environment.

---

## Phase 5 — links and targeting

**Internal, 3 (cap is 4), all from `TEMPLATE_LINKS`, all placed after value is
established:**

| URL | Anchor | Placement |
|---|---|---|
| `https://subhsandesh.in/bouquet-gf` | "digital bouquet you hand-tie yourself" | H3 4, after the colour-as-setting argument is made — **mandatory link, present** |
| `https://subhsandesh.in/love-gf` | "the 'I love you' page that spells the feeling out" | H3 1, after "write the meaning down" is argued — **satisfies the /love-gf-or-/darling requirement** |
| `https://subhsandesh.in/apology-dashboard` | "A page built for apologies" | objection H2, after the flower is named a weak carrier for an apology |

None in the opening paragraph. `batchMeta.templateUrls` mirrors all three.

**Outbound, 5**, each inline at the sentence stating its fact, plus a closing
sources H2 with dates where the source publishes one.

**`structuredData`:** an `ItemList` mirroring the four H3s in body order, and an
`@id`-matched `BlogPosting` enrichment block on
`https://subhsandesh.in/blog/hydrangea-meaning-in-flower-language#post` carrying
`about` (Hydrangea), four `mentions`, and `citation` mirroring
`batchMeta.sources` one-to-one. Every `sameAs` was verified against the Wikipedia
API with its Wikidata QID paired: Hydrangea **Q155997**, Language of flowers
**Q862550** (`Floriography` confirmed as a redirect), Hydrangea macrophylla
**Q159219**, Soil pH **Q565649**, Kate Greenaway **Q204936**. No
`AggregateRating`, `Review` or `HowTo`.

---

## Phase 6 — audit summary

**47 passed, 3 failed, disjoint, 50 total.** Item strings copied byte-verbatim
from `publish-checklist.md` (the three wrapped items joined with a single space,
`**bold**` markers intact).

The three failures, with the "known defect" items counted rather than assumed:

1. *metaTitle differs from the H1, uses one separator, and carries a
   differentiator no competitor could claim* — **failed.** "Soil Sets the Colour"
   is claimable: `bloomingexpert.com` opens on it and `floritica.com` has a whole
   section on it. The unclaimable differentiators (the double dictionary entry,
   the absent 12th bloom) will not compress into 60 characters behind a five-word
   exact keyword.
2. *Slug short, hyphenated, lowercase, no stop words* — **failed, one stop word
   ("in")**, counted not assumed. Removing it breaks exact match for no gain.
3. *3–6 outbound links, all fetched and verified to contain the cited fact* —
   **failed on one of five.** `mdpi.com` returns HTTP 403 here; that source is
   verified from the publisher-deposited abstract via DOAJ and only the abstract
   was read.

**Both "known defect" items resolved by counting:**
`metaTitle 50–60 characters, exact keyword in the first five words (hard cap 70)`
**PASSES** — the keyword is exactly five words and opens a 59-character title, so
the rule is satisfiable here. The slug rule **FAILS** on the single stop word
"in". The wave-1 brief's blanket claim about both was wrong in one direction and
right in the other.
