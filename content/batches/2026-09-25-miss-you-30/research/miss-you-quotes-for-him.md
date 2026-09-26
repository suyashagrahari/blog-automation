# Research brief — `miss you quotes for him`

Batch `2026-09-25-miss-you-30`, wave 2, row 1 (cluster anchor).
Slug `miss-you-quotes-for-him` · category `miss-you-across-miles` · templates `/missyou-gf`, `/train-ticket`, `/templates`.
Slug checked against Strapi on 2026-09-25: `filters[slug][$eq]=miss-you-quotes-for-him` returned `[]` — free.
Category checked the same way: `miss-you-across-miles` exists (id 8).

## Phase 1 — SERP (re-measured with titles after the BRIEF-WAVE2 §0 correction)

`SERPS-WAVE2.md` lists URLs only, which is not enough to test the message/quotes claim. I re-ran `scripts/serp-ddg.mjs "miss you quotes for him"` once (engine `ddg-html`, region `in-en`, 2026-09-25) to get the **titles**. One extra call, no looping.

| # | URL slug says | Title returned | Count in title |
|---|---|---|---|
| 1 | quotes | `140 Best "I Miss You" Quotes for Him — wikiHow` | 140 |
| 2 | quotes | `130+ Heartfelt Romantic I Miss You Quotes for Him to Melt His Heart` | 130+ |
| 3 | **text** | `120+ Warm And Heart Touching 'I Miss You' Text For Him` | 120+ |
| 4 | **messages** | `120+ Warm 'I Miss You' Quotes For Him — MomJunction` | 120+ |
| 5 | quotes | `150+ I Miss You Quotes for Him: Romantic, Deep & Heartfelt` | 150+ |
| 6 | quotes | `120+ Miss You Quotes for Him to Express Your Love` | 120+ |
| 7 | **messages** | `Melt His Heart With These 55 I Miss You Messages For Him` | 55 |
| 8 | quotes | `50 Best "I Miss You" Quotes For Him to Perfectly Express` | 50 |
| 9 | quotes | `151 Best Miss You Quotes For Him (with Commentary)` | 151 |
| 10 | quotes | `50 Heartfelt Missing You Quotes for Him: Express Your Love Across the …` | 50 |

**The correction is confirmed on this keyword too.**

- **3 of 10** results rank for a *quotes* query with a **messages/text** title or URL.
- **#4 is the clearest evidence**: it serves a `/best-miss-you-messages-for-him_00790699/` URL under a title that reads *"120+ Warm 'I Miss You' Quotes For Him"*. Same page, retitled. Google is not separating the intents.
- **10 of 10** lead on a raw count (50, 50, 55, 120, 120, 120, 130, 140, 150, 151). The entire SERP competes on volume.
- **0 subhsandesh pages appear.** This is where this row differs from the sister row, whose own `/blog/miss-you-message-for-sister` ranked #7 for its quotes query. Nothing of ours is in this ten.
- 10/10 editorial, 0 ecommerce, 0 tools — the page type is winnable, the domains are not weak.

**Read on the SERP, not fetched.** Per `references/competitors.md` none of these is cited, linked or paraphrased; the body describes the *pattern* (title/URL mismatch, count headlines) without naming or linking any of them, which is a measurement of the SERP rather than a paraphrase of anyone's content.

## Live SubhSandesh pages read (cannibalisation check)

Both fetched and read on 2026-09-25.

- `/blog/miss-you-messages-for-him` — "120 Lines & How to Send Them". H2s: how to pick the right message · 120 messages organised by **mood** (Sweet / Romantic / Playful / Flirty / Short & Cute / Emotional & Deep / Long-distance / After a fight / Travel / Late-night / Supportive / Sign-offs) · how to send them · length-vs-medium table · fill-in-the-blank templates · mistakes to avoid.
- `/blog/miss-you-text-message-for-him` — "120+ Examples". H2s: choosing tone · word bank organised by **tone** · 5 steps to write one · when a text becomes a page · tone comparison table · 20 tips · timing and channel · checklist.

**Both existing pages are mood/tone-bucketed word banks of lines you write yourself** — the same shape as every result on the SERP. So this post must not bucket by mood or tone, must not be a word bank, and must not repeat the "how to write a miss-you text" workflow. It is cross-linked once (`/blog/miss-you-messages-for-him`, the closer of the two, since it is the direct "for him" sibling) and the link explicitly hands off the "lines to write yourself" intent. Note that our own mood-bucketed pages do **not** appear in the ten results for this query, so there is no evidence here that they already absorb the quotes intent.

## Lane (the thing this cluster's other eight rows inherit)

**"Mine is the quotes one" is NOT the lane, and this row says so in the body.** The measured SERP above shows the format word does not select a different page type.

The lane is the layer underneath:

> **Sort by the STRUCTURAL reason he is not here, not by mood.** There are four, and they are genuinely different problems: (1) a **fixed trip** — the absence has a known end date; (2) **open-ended distance** — same absence, no end date, so a promise reads hollow; (3) **chosen absence** — you are not speaking after a fight, so the obstacle is not kilometres and no line about kilometres moves it; (4) **no absence at all** — he is reachable and the only obstacle is your own hesitation. Every result on the SERP sorts by romance level instead, which is why none of them can tell you that case 3 takes no borrowed line at all.

The quote/message distinction survives as one short section, framed honestly as *a distinction that exists in the language but not in the SERP*, grounded in a reference instrument rather than asserted: Wiktionary records the sense of *quote* moving via "to give as a reference, to cite as an authority" to "to copy out exact words" from 1680, with the noun "quotation" attested from 1885. The "write it yourself" intent is handed to the existing `miss-you-messages-for-him` page by cross-link.

Secondaries absorbed: `i miss you quotes for him`, `miss you quotes for boyfriend` (rejected at 7/10 SERP overlap with this row). **Left alone:** `miss you quotes for him long distance` — a separate row at 4/10 overlap. Distance is therefore *one of four* reasons here, one H3, not the spine of the page.

## Sibling de-confliction — wave-1 `blogs/miss-you-quotes.json`

Checked before finalising. That post owns:

- **Verified literary provenance** — ten lines with book, year and an openable primary text (Shakespeare Sonnets 97 and 39, Tennyson, Lamartine, Tagore ×2, Dickinson, Barrett Browning, Dickens, Kalidasa), sourced to Gutenberg and Wikisource, plus a section on the five it cut.
- A general **"When a quote is the wrong thing to send"** section, a **"quote in a text versus a quote on a page"** comparison, and **"How long should the message around the quote be?"**

Consequently this post carries **zero attributed literary lines** (and states outright that its lines are unattributed, and why), and it does **not** run a general "when a quote is wrong" section — the no-borrow case is narrowed to the *chosen-absence* category only, which is a structural claim that post does not make. The "how much to attach" section is framed around what the recipient can *act on* (hug taps, open-when letters), not around text-versus-page.

## Phase 2 — Gap and fan-out

Gap: **nobody on this SERP asks why he is away.** All ten sort by mood and compete on count, so none of them can give a different answer for a work trip than for a fight.

Fan-out sub-queries the H2s map to:

| H2 / H3 | Sub-query |
|---|---|
| What the word "quotes" is actually doing | "difference between miss you quotes and messages" |
| 1. A fixed trip | "miss you quotes for him when he is away for work" |
| 2. Open-ended distance | "miss you quotes for him different city" |
| 3. Chosen absence | "what to send him after a fight instead of a quote" |
| 4. No absence at all | "how to say i miss you without sounding needy" |
| Which reason you are in (table) | "should I write my own or use a quote" |
| Make the line answer him | "how to make a quote feel personal" |
| How much to attach | "how long should a miss you message be" |
| Where this advice runs out | limits / trust |

Claims none of the top ten make:

1. The **four structural reasons** framing, with a different recommendation per reason.
2. A **"do not borrow"** verdict for one of them, justified structurally.
3. The measured observation that **"quotes" is not a distinct page type on this query** — reported in the body with the count, not asserted.
4. Lines carrying **no author attributions**, stated outright, because attributions on quote lists are rarely verifiable.
5. Behavioural benchmarks from 214 real miss-you pages.

## Phase 0 — first-party data (from `content/facts.md`, current blocks only)

The `## Miss-you segment — the /missyou-gf template` block is dated **2026-09-25**; the platform-wide lines used are dated **2026-09-24**. The `## Superseded vintage — 2026-09-15 (ARCHIVE)` block was **not** cited. `## Pricing` and `## Pricing (fill in by hand)` are empty, so **no price, cost or fee claim appears anywhere in the post**, including the word "free".

Ten facts used (verbatim in `batchMeta.factsUsed`); two are inside the first 150 words (the 214 pages / 4.1% of 5,221 line, and the 88-word median letter line).

Mandatory caveats carried into the body, in `## Where this advice runs out`:

- **Disclosure, stated in the second paragraph:** the database records which template was opened and what was put on the page, **never who received it**.
- n = 214 over two months (template live 2026-07-28) → no seasonal or festival claim is made.
- `viewCount` is page views, not unique visitors — stated.
- The city field is a **picker with defaults**, so the 47 city pairs are not evidence of sender choice — stated explicitly next to the figure.

## Phase 3 — sources

Route used: Crossref + Europe PMC via `findpapers.mjs`, then Unpaywall (`api.unpaywall.org/v2/<doi>`) to find the OA location, then the Europe PMC REST `search?resultType=core` endpoint for the abstract. **PDFs do not parse in this environment and several publishers are bot-blocked** — nature.com returned a "Client Challenge" page and interpersona.psychopen.eu returned a login wall, so both were reached through Europe PMC instead. `works.bepress.com` (the Unpaywall location for Emily West's greeting-card paper, the best conceptual match for the "borrowed sentiment" angle) is **dead — SelectedWorks was retired in April 2025** — and no other OA copy was reachable, so that line of argument is carried by the Wiktionary etymology instead.

| # | Source | Journal / publisher | Date | Read | Subject test | Swap test |
|---|---|---|---|---|---|---|
| 1 | europepmc.org/article/PMC/PMC8669216 — "Long-distance texting" | Journal of Social and Personal Relationships (SAGE) | 2021-11-14 | Abstract only | Pass — remote communication in romantic couples | Pass |
| 2 | europepmc.org/article/PMC/PMC12827988 — "Asymmetric loneliness response to social connectedness around individual set points" | Scientific Reports | 2026-01-16 | Abstract only | Pass — loneliness vs amount of contact | **Weak** — see audit |
| 3 | europepmc.org/article/PMC/PMC7366940 — "Enhancing relationships through technology" | Dialogues in Clinical Neuroscience | 2020-06-01 | Abstract only | Pass — couples adapting technology for emotional communication | Pass |
| 4 | en.wiktionary.org/wiki/quote | Wiktionary (cap-exempt reference instrument) | no date published | Entry read in full | Pass — the lexical basis of the quote/message distinction | Pass |

Cap position, `capcheck.mjs` run immediately before writing the file: `journals.plos.org` and `doi.org` at 3 (**avoided**), `frontiersin.org` and `edizionicafoscari.it` at 2 (**avoided**, because six agents are writing concurrently and a 3rd slot can vanish mid-run). `europepmc.org` and `en.wiktionary.org` are on this batch's `capExemptDomains`. The **journals** named — SAGE/JSPR, Scientific Reports, Dialogues in Clinical Neuroscience — appear in no other post in the batch. No banned URL used. 1 generic context statistic: **zero**. Wikipedia body links: **zero** (Wikipedia/Wikidata appear only as `sameAs` entity references in `structuredData`, which is not a citation).

Search terms tried that produced nothing usable, recorded per the brief: `separation distress attachment romantic partner`, `perceived partner responsiveness effort intimacy`, `greeting card sentiment commercialised emotional expression`, `nostalgia social connectedness loneliness`, `expressive writing emotional disclosure` (all hits breast-cancer RCTs in PLOS, which is at cap), `authenticity AND self-disclosure AND messages` (0 OA hits), `handwritten OR letter writing AND gratitude` (0 OA hits).

## Phase 5 — links

- `/missyou-gf` — **mandatory**, placed in "How to send a miss you quote so it does not read as copied", after the hug-tap data establishes why a page beats a one-read line.
- `/train-ticket` — the `oneOfLinks` alternative, placed in the different-cities H3 with the reason it suits *that* reader better: it gives distance a form (PNR, clearing waitlist) rather than more words.
- `/templates` — closing, for comparing the letter / countdown / voice-note formats.
- `/blog/miss-you-messages-for-him` — blog cross-link, excluded from the 2–4 internal-link count by `verify-batch.mjs` (it filters `/blog`).

Three body internal links, all from `TEMPLATE_LINKS`, all after the value is established, all with descriptive anchors.

## Phase 6 — audit

49 passed, **one failure left open**: the swap test on source 2 (Scientific Reports), which is about loneliness and connectedness generally rather than about this keyword. It is load-bearing for the "volume does not help" claim and no narrower OA paper surfaced; the search terms tried are listed above and in `auditReport.failed[0].why`. Everything else passed; see `batchMeta.auditReport`.

WebSearch calls spent: **zero**. Research went through `findpapers.mjs` (Crossref + Europe PMC), Unpaywall and the Europe PMC REST API; the single extra SERP call was `serp-ddg.mjs`, run once, to get titles for the §0 correction check.
