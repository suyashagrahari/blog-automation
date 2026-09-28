# Research brief — `te-extrano-mucho-frases-para-el`

**Keyword:** te extraño mucho frases para el · **Market:** mx-es · **Body language:** Spanish
**Axis:** SUBJECT — male romantic recipient, plus the intensifier (`mucho`)
**Written:** 2026-09-28

---

## Phase 1 — SERP, measured

### Routes tried, in the brief's prescribed order

| Route | Result |
|---|---|
| `serp-ddg.mjs "te extraño mucho frases para el" --region mx-es` | Echoed `query: te extraño mucho frases para el` (argument order correct), returned `(no results parsed)` |
| **Control:** `serp-ddg.mjs "clima ciudad de mexico" --region mx-es` | **Same empty output** → bot challenge, not an empty SERP. Recorded as a block; not retried. |
| **Google, real browser, `gl=mx&hl=es&pws=0&num=20&nfpr=1`** | **Served. 8 organic results + an AI Mode answer block at the top.** This is the measurement used. |
| Harness `WebSearch` | **Not used.** It is us-en only and is not valid evidence for an es-MX row. Nothing was substituted silently. |

### Contention, caught twice by content self-authentication

1. A `browser_navigate` to my own Google URL returned `status: ok` **and the correct page title**, while the DOM's search box read `frases de te extraño para una amiga` — the sibling row's keyword. Discarded, re-run. An earlier unauthenticated scrape of the same query, which had returned three `amiga` results, was discarded retroactively for the same reason.
2. A navigate to `rae.es/dpd/el` returned the correct DPD page title while serving the **DLE entry for «faltar»**. Discarded.

Only scrapes whose `textarea[name=q]` value or whose dictionary headword matched my own query were recorded. Confirms lane finding #3 and BRIEF §11: title is not authentication, and the failure is not specific to SERP pages.

### The 8 results actually seen

| # | Host | Page type | Weak? |
|---|---|---|---|
| 1 | pensador.com | Quote aggregator, "102 frases de extrañar a alguien" | ✔ |
| 2 | quillbot.com | AI-writing-tool blog, answers *te echo de menos* | ✔ |
| 3 | cosmopolitan.com | Established magazine, "100 frases de te echo de menos… a alguien" | ✘ |
| 4 | marriage.com | English-origin listicle served with a Spanish title | ✔ |
| 5 | bodas.com.mx | Wedding marketplace, "frases para tu amor a distancia" | ✔ (off-keyword) |
| 6 | es.pinterest.com | Pin board, titled "Fraces De Te Extraño Mucho" (sic) | ✔ |
| 7 | Facebook | Social post | ✔ |
| 8 | elcomercio.pe | Peruvian newspaper, "50 frases… para decirle a alguien" | ✘ |

**Weak: 6 of the 8 seen.** Ranks 9–10 were not read and are not reported.

### The measured gap — this is the whole angle

- **0 of 8 are addressed to a man.** The qualifier the searcher typed (`para él`) is served by nobody.
- **5 of 8** carry a deliberately generic recipient ("a alguien", "la persona que amas", "tu amor a distancia").
- **2 of 8** answer with *te echo de menos*, the peninsular verb, on a **Mexican** query.
- **2 of 8** are English-origin pages served with machine-translated Spanish titles.

**Overturns the plan.** `WAVE5-PLAN.json` scores this row 4 weak. Measured, it is 6 of 8 — weaker than the inventory, and the D-listicle ABORT-LIKELY framing does not hold here. Delivered, not aborted.

---

## Phase 2 — Gap and angle

**Table stakes:** actual sendable Spanish lines; the *mucho / muchísimo / tanto* question; a length answer.

**The gap nobody touches:** the keyword contains a recipient qualifier and an intensifier, and **neither is grammatically load-bearing in the phrase itself**. No incumbent notices this, because none of them looks at the grammar.

**Angle:** the only page that *demonstrates* rather than asserts that the verb in the keyword carries no gender at all, then shows exactly where gender does surface — and that half the time it is the sender's, not his.

---

## Phase 3 — Instruments and sources

### Original measurement (Tatoeba, Spanish corpus, 2026-09-26)

| Query | Sentences | Masc. form | Fem. form |
|---|---|---|---|
| `te extraño` | 62 | **0** | **0** |
| `te echo de menos` | 17 | **0** | **0** |
| `me haces falta` | 24 | **0** | **0** |
| `estoy solo` (set) | 31 | 19 | 10 |
| `enamorado de ti` (set) | 36 | 24 | 3 |
| `mi rey` / `mi reina` | 1 / 9 | — | — |

**103 attested sentences across the three constructions, zero gender marks.**

**Controls reproduced** from the sibling `i-miss-you-so-much-in-spanish`, in the same corpus so the control travels with it (lane finding #22): `te extraño mucho` = 13, `me haces mucha falta` = 0, `mucha falta` = 5, `muchísimo` = 243. All matched its published figures, which is why its findings are relied on here without restating its table.

### ⚠ Instrument defect found

**Tatoeba's `/api_v0/search` result counter does not discriminate grammatical gender.** `"loco por ti"` and `"loca por ti"` return the **identical six-sentence set** (ids 1264243, 1074912, 1074911, 455830, 8079952, 1236818), only one of which is feminine. Four pairs initially looked perfectly symmetric (6/6, 36/36, 59/59, 31/31) — an artefact, not a finding. Articles (`el único` 45 / `la única` 46) and distinct nouns (`rey`/`reina`) *are* discriminated, so the stemming is adjective-specific.

**Consequence:** any gender-frequency figure taken from that counter is invalid. Every gender count above was made by fetching all result pages and counting surface forms in the sentence texts. The sibling's intensifier counts are unaffected — no gendered adjectives are involved — so its findings stand.

### Sources (6)

| Source | Journal / instrument | Subject test | Read |
|---|---|---|---|
| `dle.rae.es/mucho` | DLE, lemma **«mucho, cha»** — adj. 1–4 agree, pron. 5–9, **adv. 10–16 invariable**; acep. 12 is the reading in *te extraño mucho* | ✔ Spanish | Real browser, headword confirmed |
| `dle.rae.es/él` | DLE, **«él, ella»** — "en nominativo o precedida de preposición" | ✔ Spanish | Real browser, headword confirmed |
| Tatoeba census | Own measurement | ✔ the phrases themselves | Full |
| PMC12821406 | **Journal of Eye Movement Research**, 2026-01-09, n=24, 220 sentences | ✔ Spanish gender agreement | Full text, `fullTextXML` |
| PMC13221201 | **Studies in Second Language Acquisition**, 2025-09-04, n=39 heritage speakers | ✔ Spanish gender agreement | Full text, `fullTextXML` |
| PMC12842814 | **Journal of Intelligence**, 2025-12-24, n=66, *Amor* vs *Love*, t = −8.866, p < 0.001 | ✔ Spanish emotion lexicon | Full text, `fullTextXML` |

Zero abstract-only citations. Zero generic context statistics. Zero Wikipedia citations (two entities in `about` only: Q1321, Q162378, both verified non-missing via the es.wikipedia API). Zero competitor links.

Cap state at write time: `capcheck.mjs` — no banned URL used, no domain at cap. `journalcheck.mjs` — nothing over cap; *Journal of Intelligence* sits at 2 posts with one slot left.

---

## Phase 4–5 — Build decisions

**Ten H2s, each a different question:** the census · where the masculine actually surfaces (+ 12 sendable lines) · the DLE's three-way split of *mucho* · which intensifier (cites the sibling, does not restate it) · `para el` vs `para él` · gendered nicknames · what a mis-agreement costs the reader · the measured SERP · what our 214 pages do and do not measure · the English template and when it is the wrong choice.

**Axis hold:** 7 of the 12 lines break if the recipient is female; none is a friend or father line. No overlap with `para-mi-novia`, `para-una-amiga` or `te-extrano-papa-frases`.

**Cross-links (5):** hub `frases-de-te-extrano`, plus `frases-de-te-extrano-para-mi-novia`, `mensajes-de-te-extrano-para-whatsapp`, `imagenes-de-te-extrano-para-enviar`, and the intensifier sibling `i-miss-you-so-much-in-spanish`. The verifier excludes `/blog/…` paths from its 2–4 internal-link band, so the counted internal links are exactly `/missyou-gf` and `/train-ticket` — no conflict.

**Mandatory disclosures, all in Spanish body prose:** the template is English-labelled; the database records which template was opened, never who received it, and nothing is segmented by language or country; `viewCount` is page views; pickers have defaults; n = 214 over two months.

**Price guard:** clean. `pricecheck-intl.mjs` passes and the body makes no cost, tier or currency claim in any language.

---

## Phase 6 — Audit

46 passed / 4 failed of 50, disjoint, verbatim strings. The four failures are structural and recorded with their blockers: the six-word keyword cannot fit inside a five-word title window; one source (PMC12842814) partly fails the swap test because it grounds a batch-wide mandatory disclosure; two `mentions` entities have no Wikipedia article to pair a QID with; the fifth `keyTakeaway` is a SERP measurement kept deliberately because it is the evidence for the angle.

`verify-batch.mjs` reports **zero problems naming this slug**. The schema validator at `.claude/skills/blog-optimisation/references/article-json-schema.md` passes: `✔ te-extrano-mucho-frases-para-el.json (1793 words)`.
