# Research brief — `love letter for girlfriend in marathi`

- **Slug:** `love-letter-for-girlfriend-in-marathi` (checked against Strapi 2026-09-01 — `filters[slug][$eq]` returned `total: 0`, free)
- **Batch:** `2026-09-01-love-gf` · **Category:** `modern-romance`
- **Volume:** 300–1,000/mo (EST, no keyword-tool data available). Market: India, Maharashtra-weighted.
- **Head term?** No — six words, long-tail, matches how the query is actually typed and how an LLM would be asked it.

---

## Phase 1 — SERP analysis

`WebSearch` on the keyword and on `marathi prem patra for girlfriend letter`. Pages fetched in full and indexed (competitor pages are read as research, never cited or linked).

| Page | Type | Words / structure | Where the answer is | Data cited | Format elements | Tone | Optimising for |
|---|---|---|---|---|---|---|---|
| `mywordshindi.com/love-letter-marathi-prem-patra/` | Content farm, real rival | ~2,500, no H2 skeleton — one long letter after another separated by images | No answer at all; opens with a shayari couplet | None | Images between letters, keyword-stuffed intro line ("Marathi love letter, Marathi prem patra, हृदयस्पर्शी…"), no table, no FAQ, no schema, no byline | Florid first-person Marathi, very long paragraphs, heavy use of प्रिये / ग | Keyword repetition + time-on-page from long emotional text |
| `marathians.com` | Content farm, real rival | Quote/letter aggregation | Buried | None | Lists, images | Anonymous | Long-tail Marathi phrase coverage |
| `ai.tenorshare.com/love-letter/love-letter-for-girlfriend-in-marathi.html` | Thin AI page (also a competitor tool) | "20 Samples", 9 anchor-linked sections by occasion (romantic / short / heart-touching / occasion / apologise / surprise / birthday / long-distance) | Opens with "Let's dive into these touching expressions of love" — classic delayed answer | None | Jump-link catalog, author byline "Andy Samue", dated 2025-02-13, product upsell banners for an AI-detector bypass tool | Generic, machine-flat, English framing around Marathi samples | Its own AI writing product |
| `premayanv.blogspot.com/2014/01/marathi-love-letter.html` | 2014 blogspot | Long, undated post chain, links out to another 2011 blogspot | No answer; poetic scene-setting | None | Bollywood stills, no headings | Genuinely literary Marathi, monsoon imagery, very long sentences | Nothing — legacy blog with residual authority |
| Pinterest ×2, Lemon8 | Image/idea boards | n/a | n/a | None | Image grid | n/a | Image search |
| `en.wikipedia.org/wiki/Girlfriend_(2019_film)` | Off-intent | n/a | n/a | n/a | n/a | n/a | Nothing — the word "girlfriend" |

Six of ten results are weak. No AI Overview was returned for the query.

**Occasion segmentation is table stakes** — tenorshare already splits by birthday / long distance / apology. It is the *execution* that is thin: no romanisation, no register discussion, no letter longer than a paragraph of translated English.

---

## Phase 2 — Gap analysis

**Table stakes (must include):** complete letters, not tips; Devanagari on the page; occasion coverage (first letter, distance, fight, birthday); a short one; guidance on what to write.

**The gap — nobody covers:**
1. **The register choice.** Marathi has तू and तुम्ही. Not one ranking page mentions it, even though it is the first decision a writer makes and the fastest way to make a letter read wrong.
2. **Romanisation.** Every page assumes a Marathi keyboard. Nobody gives a roman line an English keyboard can produce, which is what most people typing at midnight actually have.
3. **Gendered sign-off.** तुझाच vs तुझीच. The single most common tell of a copied letter, and no page says so.
4. **What happens after the paste.** Every page's implicit delivery model is "copy this into WhatsApp". Nobody says a pasted letter becomes a time-ordered message and is buried by Sunday.
5. **The downside.** No page names a case where a letter is the wrong move.

**Stale data:** none of the pages cite any data at all, stale or current. That is the whole opening.

**Unanswered questions raised and dropped:** "how do I type this", "how long should it be", "will she be able to read it on her phone".

**Fan-out sub-queries → H2s:**

| Sub-query | Where answered |
|---|---|
| what is a prem patra / marathi love letter | H2 2 (definition) |
| तू or तुम्ही in a love letter | H2 3 |
| marathi love letter for girlfriend (samples) | H2 4 (6 letters, H3 each) |
| marathi love letter for long distance / after fight / birthday | H2 4, H3s 2–4 |
| short marathi love letter | H2 4, H3 6 |
| how to type marathi / romanised marathi love letter | H2 5 (table) |
| how to send a marathi love letter on whatsapp | H2 6 |
| when not to send a letter | H2 7 |

**Angle:** wins by being the only post that treats the Marathi prem patra as a form — the तू/तुम्ही register choice, six complete letters with romanised text and English glosses, and what happens to a letter once it is pasted into WhatsApp — grounded in the 975 /love-gf pages (29.2% of 3,335) and the 6.9-hour median edit gap that no quotes collection can publish.

---

## Phase 3 — Sources

Assigned vein: **expressive writing and handwritten/composed letters as relational and wellbeing practice.** Searched the phenomenon, not the keyword. Every source below was fetched and the claim verified against the text (Europe PMC `resultType=core` for the four PMC articles, NCBI `efetch` for the PubMed record, the arXiv API for the preprint). PubMed and Springer both blocked the HTML fetcher, so the abstracts were read through their official APIs — the content is identical to the linked page.

| # | Source | Date published | Verified claim | Access |
|---|---|---|---|---|
| 1 | Slatcher & Pennebaker, *Psychological Science* 17(8):660-4, "How do I love thee? Let me count the words" | Aug 2006 | 86 dating couples; one partner wrote about their deepest thoughts and feelings about the relationship for 3 consecutive days; those participants were significantly more likely to still be dating 3 months later; both partners used more emotion words in IMs afterwards | **Abstract only** (paywalled full text) — recorded in the audit and in the on-page sources list |
| 2 | *PNAS*, "A meta-analysis of the effectiveness of gratitude interventions on well-being across cultures" (PMC12280877) | 2025-07-08 | 145 papers, 163 samples, 727 effect sizes, 24,804 participants, 28 countries; Hedges' g = 0.19 [0.15, 0.22]; significant between-country differences | Open (CC BY-NC-ND — cited and linked only, nothing reproduced) |
| 3 | *Behavioral Sciences* 16(2):232, "Individual Differences in the Affective Experience of Writing a Gratitude Letter" (PMC12937751) | 2026-02-05 | N = 487 merged from three experiments; three k-means clusters — Buffered, Mixed Feelings, **Backfired**; the Backfired cluster showed decreased positive and increased negative affect and was made up of already-grateful, already-happy people | Open (CC BY) |
| 4 | *PLOS ONE*, "Positive expressive writing interventions, subjective health and wellbeing in non-clinical populations" (PMC12094736) | 2025-05-21 | 51 studies, seven writing techniques; most consistent benefits for wellbeing/positive affect; **quality of every included study assessed as poor or fair** | Open (CC BY) |
| 5 | *Life* 15(3):345, "The Neuroscience Behind Writing: Handwriting vs. Typing" (PMC11943480) | 2025-02-22 | Handwriting activates a broader network of motor, sensory and cognitive regions; typing engages fewer neural circuits | Open (CC BY) |
| 6 | arXiv 2410.00449, "Examining Input Modalities and Visual Feedback Designs in Mobile Expressive Writing" | 2024-10-01 | Field studies confirmed stress-relieving effects of mobile expressive writing; keyboard text entry was more suited and preferred over voice messages for its privacy and reflective nature | Open preprint |

**Subject test:** all six are about written expression as a practice; 1, 3, 4 and 6 are directly about letter- or expressive-writing outcomes. **Peer-reviewed + open-access:** 2, 3, 4, 5. **Generic context statistics:** zero — a Census figure on Marathi speakers was attempted and dropped because `censusindia.gov.in` was unreachable from the sandbox and no primary source could be verified. **Wikipedia:** zero body links; four verified entities in JSON-LD `about`/`mentions` only (Q1571, Q38592, Q1056617, Q134550, Q1191).

**No Marathi-specific letter research exists.** Terms tried: `marathi letter writing study`, `marathi prem patra research`, `regional language love letter sociolinguistics`, `expressive writing indian language`. Nothing returned. This is recorded as a real finding, and it is why the swap-test checklist item is marked failed for sources 4 and 5.

**Banned/competitor domains avoided:** mywordshindi.com, marathians.com, ai.tenorshare.com, and every domain in `references/competitors.md` plus the extra list in the brief. None appear in `sources` or in the body.

---

## Phases 4–7 — build notes

- Body: **1,796 words** (plain whitespace split), 1 H1, 7 H2, 6 H3, no FAQ heading in the body.
- 6 outbound research links inline at the sentence they support, plus a `## Sources` H2 with dates.
- 2 internal links, both after the section establishing the need (H2 6): `/love-gf` and `/darling`. `templateUrls` matches.
- Table: 4 columns × 3 rows. Column 3 is headed with the first-party 50.3%-of-40,864 mobile figure.
- `structuredData`: one `@id`-matched enrichment block on `#post` (about + mentions + 6 `citation` entries mirroring `batchMeta.sources` one-to-one) and one `ItemList` mirroring the six H3s in order. No renderer-built type emitted unmatched; no `AggregateRating`/`Review`/`HowTo`.
- 12 FAQs, in `article.faqs` only.
- Audit: 48 passed, 2 failed, disjoint, sums to the 50-item checklist.

### Open risk worth naming

The Marathi in the six letters is my own composition, not a native speaker's. It is idiomatic as written — the ग vocative, gendered verb agreement, Maharashtra-specific detail (गच्ची, डबा, लोणचं, पुण्याहून) — but it should be read by a Marathi speaker before publish. That is a review step, not a blocker recorded in the audit, because the checklist has no item for it.
