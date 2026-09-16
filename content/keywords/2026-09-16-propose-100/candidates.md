# Candidates — propose / proposal / virtual proposal · 2026-09-16

Recorded **before** any SERP was run, so the run can be audited for what it chose to
check and what it never looked at.

**Seeds (15):** propose · propose day · propose girlfriend · virtual proposal ·
online proposal · digital proposal · proposal website · propose message ·
how to propose girlfriend · marriage proposal · propose day quotes ·
romantic proposal ideas · proposal ideas for girlfriend · propose day wishes ·
love proposal

**Harvest:** `npm run keywords:suggest --geo in --hl en`, three batches →
**4,788 unique India-geo suggestions**, 3,339 at 4+ words.

**Axes live:** 1 modifier · 2 audience · 3 format · 4 action · 5 occasion ·
6 feature · 7 language · 8 question · 9 year freshness — **all nine.**
Nothing skipped: this is an Indian multilingual market (axis 7), an annual dated
occasion (axes 5 and 9), and a product with a named mechanic (axis 6).

## Autocomplete demand by axis

| Axis | Suggestions | Top phrase | prefix_hits |
|---|---|---|---|
| 5 · occasion — propose day | **862** | propose day quotes | 14 |
| 4 · action — chat/text/online/message | **660** | online proposal ideas | 21 |
| 3 · format — website/link/page/card/maker | **444** | proposal website template | 19 |
| 2 · audience — girlfriend/gf/crush | **443** | proposal ideas for girlfriend at home | 36 |
| 7 · language — hindi/shayari/regional | **250** | propose girlfriend in hindi | 11 |
| 9 · year — 2026/2027 | **96** | propose day 2026 | 7 |
| 6 · feature — with name/photo/music | ~40 | propose day wishes with name | 7 |
| 5b · occasion — long distance | **11** | — | — |

**The surprise:** `long distance` returned only 11 suggestions against 862 for
`propose day`. Prior runs in this repo have leaned on long-distance framing; for
proposal keywords in India the occasion dwarfs it, and the shortlist is weighted
accordingly.

## From autocomplete (Phase 2) — the 100 selected

All 100 keywords in `keyword-inventory.csv` carry a `demand_rank` equal to their
`prefix_hits`. Highest-demand selections, by axis:

| Keyword | Words | prefix_hits | Axis |
|---|---|---|---|
| proposal ideas for girlfriend at home | 6 | **36** | 2 audience |
| proposal ideas for gf | 4 | 27 | 2 |
| online proposal ideas | 3 | 21 | 4 action |
| proposal website template | 3 | 19 | 3 format |
| will you be my girlfriend proposal ideas | 7 | 18 | 1 modifier |
| online proposal maker free | 4 | 17 | 3 |
| virtual proposal card | 3 | **17** | 6 feature |
| propose ideas for girlfriend in chat | 6 | 17 | 4 |
| romantic proposal ideas in mumbai | 5 | 15 | 2 |
| how to propose girlfriend | 4 | 14 | 8 question |
| propose day quotes | 3 | 14 | 5 occasion |
| how to propose girlfriend first time | 6 | 12 | 8 |
| propose girlfriend in hindi | 4 | 11 | 7 language |
| **virtual propose day** | 3 | **11** | 5 × 6 |
| propose day wishes | 3 | 10 | 5 |
| can you propose over text | 5 | 9 | 8 |
| propose day quotes in marathi | 5 | 8 | 7 |
| propose day wishes with emoji | 5 | 8 | 6 |
| how to propose online | 4 | 8 | 4 |
| propose day wishes with name | 5 | 7 | **6 feature — the doing-intent tell** |
| proposal website for girlfriend free | 5 | 7 | 1 × 3 |
| love proposal website template | 4 | 7 | 3 |
| propose day 2026 → **2027** | 3 | 7 | 9 year |

## Generated to fill gaps autocomplete couldn't reach

| Keyword | Axis | Why autocomplete wouldn't have this |
|---|---|---|
| will you be my girlfriend proposal page online | 3 × 6 | The exact product phrasing; autocomplete returns the *ideas* variant because nobody knows a page maker exists yet |
| digital proposal card for girlfriend online free | 1 × 3 × 6 | Four stacked modifiers — beyond what a prefix expansion returns |
| virtual proposal ideas for long distance relationship | 5b × 6 | `long distance` yielded only 11 suggestions; the axis is real but under-typed |
| how to propose a girl on whatsapp chat | 4 × 8 | Autocomplete split this across `how to propose girlfriend in chat` and `propose message text`; the merged phrasing is how people actually search |
| propose day 2027 | 9 | Autocomplete still returns 2026. **That is the opportunity, not an error** — every incumbent title is a cycle behind |
| how to propose a girl online long distance | 4 × 5b | Combines two axes autocomplete keeps separate |

## Dropped before searching

| Keyword | Why |
|---|---|
| propose, proposal, propose day, love proposal | Under 4 words / bare head terms — waste the SERP budget Phase 4 spends per query |
| web design proposal examples (13) · digital marketing proposal examples (12) · proposal for website redesign (10) · website proposal template free download · what is a website proposal · virtual assistant proposal template · proposal website pdf · website proposal examples | **B2B contamination inside the romance seed expansion.** Google reads bare "proposal" as a business document. Dropped before searching; two survivors kept deliberately (`proposal website template`, `online proposal website`) so Gate 1 could measure and prove the finding rather than assert it |
| proposal website for girlfriend github | Developer intent — wants source code, not a product |
| marriage proposal biodata template | Indian arranged-marriage biodata — a genuinely different market |
| is marriage proposal important · propose day meaning | Definition queries, near-zero conversion — one kept (`propose day meaning in hindi`) as a Tier 3 sample to price the axis |
| how to girlfriend propose (13) | Malformed word order; the SERP auto-corrects to `how to propose girlfriend`, which is already in the list |
| romantic proposal ideas uk (11) | Wrong market |
| propose day wishes for friends/best friend | Kept, but flagged: platonic intent, weakest conversion in the set |

**Result:** 100 candidates carried into Phase 4, every one at 3+ words, each with a
live India-geo `prefix_hits` figure behind it.
