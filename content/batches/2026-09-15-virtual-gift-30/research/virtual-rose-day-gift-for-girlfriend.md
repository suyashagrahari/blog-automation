# Research brief — `virtual rose day gift for girlfriend`

- Batch: `2026-09-15-virtual-gift-30`
- Slug: `virtual-rose-day-gift-for-girlfriend`
- Market: India. Rose Day = **7 February**, day one of Valentine's Week.
- Category: `virtual-bouquets` (the only genuinely bouquet-led post in the batch)
- Templates: `/bouquet-gf`, `/love-gf`, `/proposal`
- Slug availability checked 2026-09-15 against
  `strapi.subhsandesh.in/api/articles?filters[slug][$eq]=virtual-rose-day-gift-for-girlfriend`
  → `total: 0`. Free.

---

## Phase 1 — SERP analysis (India, 2026-09-15)

WebSearch on `virtual rose day gift for girlfriend` and
`rose day 7 february digital rose gift girlfriend India`. The session's WebSearch
budget was exhausted after these two queries, so the competitor read below is
based on the returned result set plus two live SubhSandesh pages fetched in full.
That is a real limitation and it is recorded in the audit.

| # | Page | Type | What it is optimising for | Direct answer? | Data cited | Format |
|---|---|---|---|---|---|---|
| 1 | myflowertree.com/rose-day/gifts/for-girlfriend | **Competitor** (physical florist) | transactional "rose day gifts girlfriend" + same-day delivery | No — product grid, no prose answer | none | PLP, price filters, delivery-city list |
| 2 | igp.com/rose-day | **Competitor** | "rose day gifts online India, free delivery" | No | none | PLP + FAQ accordion |
| 3 | floweraura.com/rose-day | **Competitor** | discount-led ("Upto 40% OFF") | No | none | PLP |
| 4 | giftalove.com/rose-day | **Competitor** | "rose day 2026, same day delivery" | No | none | PLP, year-stamped |
| 5 | digiflower.net/virtual-gifts-for-girlfriend | **Competitor** (digital-bouquet startup, named in BRIEF §1) | the exact digital intent | Yes, thin | none | listicle, no data |
| 6 | insmind.com AI rose video generator | Tool page | "AI rose giving video" | Yes | none | tool landing page |

Every one of rows 1–5 is on the never-cite list (`references/competitors.md`
plus BRIEF §1). They were read to find the gap, nothing else.

**The SERP is almost entirely physical-florist product listing pages.** Not one
result on page one answers the question a person typing *virtual* rose day gift is
actually asking, and not one carries a single verifiable number.

## Cannibalisation check — the live SubhSandesh bouquet pages

Fetched in full:

- `subhsandesh.in/blog/digital-flower-bouquet` — generic explainer: "why choose a
  digital bouquet over real flowers", "6 simple steps", "design rules", "cost and
  premium choices". No date, no occasion, no numbers.
- `subhsandesh.in/blog/digital-bouquet-for-girlfriend` — near-identical shape:
  "what to include", "step-by-step", "personalization ideas", "timing tips".

Both are *how to build a digital bouquet* pages. Neither mentions Rose Day,
7 February, Valentine's Week, rose colour meaning, or any postharvest or
floriculture fact. **So the safe, non-cannibalising angle is: not "how to build a
digital bouquet", but "what to send on 7 February and why the rose itself is the
weak link that day."** This post deliberately does not contain a build-it
step-list — that is the existing pages' job, and `/bouquet-gf` is linked instead.

## Phase 2 — Gap analysis

**Table stakes** (present on all florist pages, so the post must not omit them):
Rose Day is 7 February; red/yellow/white/pink carry different meanings; the gift
is for a girlfriend; India, rupee context; same-day delivery is the promise.

**The gap** — nobody in the result set states:
1. How long a cut rose actually lasts. Every florist page sells the rose; none
   says it is dead inside nine days.
2. That Valentine's Week itself is an India-specific sequence, with Rose Day as
   day one and Propose Day the next morning — which makes the 7th a *starting*
   gesture, not a climax.
3. Any first-party evidence about how people build and send digital romantic
   pages (password rates, edit gaps, publish rates).
4. Where the digital version loses.

**Stale data** — irrelevant here: the competing pages cite no data at all, which
is itself the finding.

**Fan-out sub-queries** → became H2s:
`what is a virtual rose day gift` · `is rose day 7 february` ·
`why send a digital rose instead of real flowers` ·
`what do rose colours mean` · `virtual vs real rose comparison` ·
`when should I send it on rose day` · `is a digital rose enough`

**Angle (→ `batchMeta.angle`):** wins by being the only Rose Day page that puts a
measured cut-rose vase life (8.50 days untreated) next to SubhSandesh's own
bouquet-page behaviour — 1,070 `/bouquet-gf` pages, 24.6% of everything built, and
40.6% password-protected before sharing.

## Phase 3 — Sources

Batch caps respected. Domain counts were computed across the 17 sibling JSONs in
`blogs/` before committing: **none of the five domains below appears in any
sibling.** `arxiv.org` (4), `pmc.ncbi.nlm.nih.gov` (3) and `pewresearch.org` (3)
were at or over cap and were not used.

| # | Source | Domain (sibling uses) | Subject test | Swap test | Peer-reviewed / OA |
|---|---|---|---|---|---|
| 1 | Turnos-Milagrosa, *Extending vase life and reducing ethylene production in rose cut flowers using Calamondin extract*, J. Horticulture & Postharvest Research, 2025 | jhpr.birjand.ac.ir (0) | Pass — literally about cut roses | Pass — useless in any non-flower post in this batch | Yes / open access |
| 2 | Stein, Schlegel et al., *"Oh, You Shouldn't Have!" Key Factors Impacting Cut Flowers Gifting Preferences in Germany*, Horticulturae 7(10):368, Oct 2021 | mdpi.com (0) | Pass — flower *gifting* behaviour, n = 978 | Pass | Yes / gold OA, CC BY |
| 3 | Ericsson & Brooks, *Silent Needles, Speaking Flowers: The Language of Flowers…*, Textile Society of America Symposium, 2008 | digitalcommons.unl.edu (0) | Pass — floriography, the rose-colour code | Pass | Scholarly proceedings / OA |
| 4 | Jones & Summers, *Giving and Receiving Brands as Valentine's Day Gifts*, Griffith Research Online, 2005, n = 214 | hdl.handle.net (0) | Pass — Valentine's Day gift ritual | Pass | Scholarly / OA repository |
| 5 | APEDA, *Floriculture* product profile — 1,039.29 thousand tonnes cut flowers, 396.89 thousand ha, 2024-25 | apeda.gov.in (0) | Context stat, and the **only** one | Pass (flower-specific, not "India has N internet users") | Government portal |

Plus one Wikipedia link (`Propose Day`) used purely as the **date fact-check** for
Rose Day = 7 February / Valentine's Week being India-specific. Per
`publish-checklist.md` the date reference is the named exception and is not
counted in `sources`, and it is not carried into `citation`.

### Verification notes

- **Source 1** — landing page fetched and indexed in full. Abstract states:
  untreated cut roses **8.50 days** vase life; calamondin 20 ml/L **11.67 days**
  (+37.29%); bamboo wood vinegar 9.67 days; p = 0.000. Full abstract read.
- **Source 2** — `mdpi.com` returns **HTTP 403** to automated fetches (tried twice,
  with and without a browser User-Agent). The abstract was verified instead
  against the **DOAJ API record** for `10.3390/horticulturae7100368` and the
  OpenAlex record, which agree verbatim: n = 978 representative German residents,
  PLS-SEM, perceived **versatility** of cut flowers is the largest driver of
  gifting preference for both women and men; age, income and education showed no
  effect. Recorded in the audit as abstract-only verification.
- **Source 3** — landing page fetched; abstract read in full. Claim used: the
  Language of Flowers, "a dictionary of symbolic meanings assigned to individual
  flowers", was **established in Europe during the early 19th century** out of the
  leisure classes' interest in botany and a preoccupation with romance and
  chivalry. No specific per-colour meaning is attributed to this paper — the
  colour list in the body is presented as convention, not as its finding.
- **Source 4** — the Griffith DSpace item page is JavaScript-rendered; the record
  was read through the repository's own DSpace REST API
  (`/server/api/discover/search/objects`) and the OpenAlex abstract. Claim used:
  Valentine's Day is "a traditional time for declarations of love, adoration or
  intent that are expressed through a **ritual** of giving and receiving gifts or
  greeting cards", n = 214 survey responses. Abstract-only; recorded in the audit.
- **Source 5** — `apeda.gov.in/floriculture` fetched; page states 396.89 thousand
  hectares under floriculture and 3,226.20 thousand tonnes loose / **1,039.29
  thousand tonnes cut flowers in 2024-25**.

### Searches that failed, and what was tried

OpenAlex and DOAJ were queried after the WebSearch budget ran out (and OpenAlex's
own free budget then ran out mid-session). Terms tried with **no usable result**:

- `Valentine week romantic celebration India young adults`
- `India floriculture rose export Valentine demand` → only 2013-14 polyhouse cost
  data (IJCMAS 2019), too stale and too weakly peer-reviewed to carry a claim
- `rose cut flower carbon footprint life cycle assessment air freight`
- `digital flowers virtual gift symbolic value online`
- `relationship escalation ritual dating milestone sequence`

**There is no published research on Rose Day or Valentine's Week as Indian
practices.** That is a genuine finding, not a sourcing failure: the week is
documented (Wikipedia) but not studied. The post therefore leans on flower
research plus first-party data, exactly as BRIEF §3 instructs.

## Phase 4–5 — Build decisions

- Two first-party numbers inside the first 150 words: `/bouquet-gf` 1,070 pages /
  24.6%, and 40.6% password-protection. The BRIEF flags 40.6% as one of the two
  least-obvious figures; the `/bouquet-gf` rank is used because this is the
  bouquet post and no sibling opens on it.
- Third, fourth and fifth first-party facts in the body: 94.1% publish rate,
  6.2-hour median edit gap, 49.0% phone opens, 3.7% occasion-dated.
- Comparison table carries a first-party column (edit gap + password rate).
- Objection block uses the 3.7% occasion-dated figure against the post's own
  premise — a dated page is a smaller gesture than an undated one.
- Internal links: `/bouquet-gf` (inside option 2), `/proposal` (the 8th),
  `/love-gf` (the objection block). None in the opening.
- `ItemList` mirrors the five H3s in order.
