# Research brief — `te-extrano-papa-frases`

- **Keyword:** te extraño papá frases
- **Body language:** Spanish
- **Markets:** mx-es + es-es · band 300–1k/mo · plan predicted 4 weak
- **Axis (WAVE5-PLAN standingRisk):** SUBJECT — father, grief-adjacent. Stays in lane; does not restate the hub's table.
- **Date measured:** 2026-09-28

---

## Phase 1 — SERP, measured not inferred

### Route and control

| Route | Result |
|---|---|
| `serp-ddg.mjs "recetas de pozole rojo" --region mx-es` (control, known demand) | `(no results parsed)` |
| `serp-ddg.mjs "te extraño papá frases" --region mx-es` | `(no results parsed)` |
| **Google, real browser, `gl=mx&hl=es&pws=0&num=20`** | 8 results, self-authenticated |
| **Google, real browser, `gl=es&hl=es&pws=0&num=20`** | 8 results, self-authenticated |
| Harness `WebSearch` | **not used** — us-en only, not valid evidence for mx-es or es-es |

The control returned the identical empty string to the target query, so the DDG output was a **bot block, not an empty SERP** (lane-wide finding 20). One call each, no retries, per BRIEF §3.

`serp-ddg.mjs` echoed `query: recetas de pozole rojo` and `query: te extraño papá frases` respectively, so the query-first argument order was correct and the mis-ordering trap did not apply.

### Contention — four hits, all caught

`browser_navigate` returned `status: ok` **with the correct page title** and the next extract returned, in order:

1. `https://dle.rae.es/mucho` (the `te-extrano-mucho-frases-para-el` row)
2. `https://www.rae.es/dpd/él`
3. `https://www.google.com/search?q="mensajes+de+te+extraño"+whatsapp&gl=es` (the WhatsApp row)
4. `https://dle.rae.es/amigo` (the `para-una-amiga` row)

A distinct `session` name was passed on every call and did **not** isolate. Every corrupted page was discarded on content self-authentication and re-run. Nothing from another row was recorded. This is the fourth confirmed instance and it confirms §11 exactly.

### gl=mx, 8 results

| # | Host | Title (abbrev.) | Type | Weak? |
|---|---|---|---|---|
| 1 | pensador.com | 39 frases para papá fallecido | quote aggregator | yes |
| 2 | mx.pinterest.com | 580 ideas de te extraño papá | UGC board | yes |
| 3 | elcomercio.pe | 50 frases … recordar a un papá fallecido | established daily | no |
| 4 | facebook.com/imagenesdeluto | Papá… cuánto te extraño | social post | yes |
| 5 | borea.es | 50 frases para un padre fallecido | funeral-services site | no |
| 6 | tiktok.com | Te extraño papá: reflexiones | UGC video | yes |
| 7 | guiainfantil.com | Frases para un padre fallecido | established parenting mag | no |
| 8 | pensador.com | Cartas para padre fallecido | quote aggregator | yes |

**5 of the 8 I actually saw are weak.** Plan said 4.

### gl=es, 8 results

Same cast, reordered, with three Pinterest boards instead of one (`mx.pinterest`, `es.pinterest/linasantandreu7`, `pinterest.com/gabrielamellan`) and no TikTok. **5 of 8 weak.**

No AI Overview or featured-snippet block was captured in either extract, so none is claimed.

### The finding

**16 of 16 results across both markets are written for a deceased father.** Titles carry "papá fallecido" / "padre fallecido" / "imágenes de luto" verbatim. **Zero** address a father who is alive and lives far away — the same shape the English sibling `miss-you-quotes-for-dad` measured (0 of 9).

---

## Phase 2 — Gap analysis

- **Table stakes:** lists of short frases; a Día del Padre angle; a bereavement register.
- **The gap:** (a) nobody separates the bereaved reader from the reader with a living, distant father, and both land on the same page; (b) nobody opens a dictionary. The incumbents are quote aggregators and image boards.
- **Stale data:** not applicable — these pages cite nothing at all.
- **Fan-out sub-queries → H2s:** ¿qué frase sirve si murió? · ¿qué significa «desde que faltó»? · ¿«me haces falta» implica muerte? · frases para papá lejos · frases para papá fallecido · qué escribir el Día del Padre · ¿sirve escribir una carta? · qué enviar y qué no.

**Angle:** the only page on this search that separates the two readers, and the only one that tests the death sense against the RAE's own entries.

---

## Phase 3 — The lexical test (the original contribution)

The Portuguese sibling row found three dictionaries put a **death** sense inside **falta** (Michaelis acep. 3, Priberam pt-br 8, Aulete 9) while *saudade* carries none, and concluded the disambiguator is tense, addressee and a return date rather than the noun. This row ran the same test on the Spanish pair.

`dle.rae.es` returned **HTTP 403 to a scripted UA on every attempt** (4 headwords × 2 attempts, ~5.7 KB challenge body). Lane-wide finding 27 called it intermittent; as of 2026-09-28 it is consistent. All four entries were read in the **real browser** with the headword confirmed on the page.

| Headword | Acepciones | Death / loss sense? |
|---|---|---|
| **extrañar** | 8 | **None.** Acep. 2 = "Echar de menos a alguien o algo, sentir su falta", example a child crying for living parents. Acep. 3 = exile. |
| **falta** (n.) | 13 + locuciones | **Yes, literal.** Acep. 6: "Ausencia de una persona, **por fallecimiento u otras causas**". |
| **faltar** (v.) | 11 | **Yes.** Acep. 2: "Consumirse, acabar, **fallecer**". Acep. 5, three numbers away: "Estar ausente del lugar en que suele estar" ("Antonio falta de su casa desde hace un mes"). Etymology line: "De falta." |
| **añorar** | 1 | Names **pérdida**: "Recordar con pena la ausencia, privación o pérdida de alguien o algo muy querido". The only one of the four. |

### Did the test hold? Yes — with a sharper result than Portuguese

The death sense lives in the *falta / faltar* family and **not** in the verb the searcher typed. Two differences from the Portuguese row worth recording:

1. Spanish carries it in **both** the noun (acep. 6) and the verb (acep. 2); Portuguese's three dictionaries put it in the noun.
2. Spanish has a fourth term with no Portuguese analogue in that row: **añorar**, whose single definition is the only one naming *pérdida*.

**And the Portuguese conclusion survives, reproduced independently.** The noun does **not** disambiguate, for two reasons the DLE supplies itself:

- Acep. 6 widens in the same line: "por fallecimiento **u otras causas**".
- **"Hacer falta" is a separate locución**, glossed "Ser preciso" — necessity, not absence — so `me haces falta` does not inherit acep. 6 at all.

What disambiguates is **person, tense and whether a return date exists**: `me haces falta` (2nd person, present) presupposes a reader; `desde que faltó mi papá` (preterite) is the euphemism; a phrase with a date is long-distance, a phrase with no possible date is bereavement.

**Not claimed:** no CORPES/CREA frequency check was run, and no dated first attestation of the death sense is asserted (the DLE gives *faltar* only "De falta.").

### Sibling-twin check

- `otra-forma-de-decir-te-extrano` cites `dle.rae.es/falta` and `/añorar` for a **different** claim ("me haces falta" = necessity; "te añoro" is rare in use). It does not touch acep. 6, acep. 2 of *faltar*, or the death sense. No twin.
- `diferencia-entre-te-extrano-y-te-echo-de-menos` runs the regional split. Different axis. Cross-linked, not restated.

---

## Sources (6)

| # | Source | What it carries | Read |
|---|---|---|---|
| 1 | `dle.rae.es/extrañar` | 8 acepciones, no death sense | real browser, headword confirmed |
| 2 | `dle.rae.es/falta` | acep. 6 "por fallecimiento u otras causas"; loc. "hacer falta" = "Ser preciso" | real browser |
| 3 | `dle.rae.es/faltar` | acep. 2 "Consumirse, acabar, fallecer"; acep. 5 absence | real browser |
| 4 | `dle.rae.es/añorar` | single acepción naming *pérdida* | real browser |
| 5 | PMC9595366 — **Revista Colombiana de Psiquiatría**, 2022 | 239 bereaved relatives in Colombia, 112 followed up; 87 % had funeral rites, 42 % called them "muy sobrios" | **full text**, `fullTextXML` |
| 6 | PMC13083514 — **Journal of Immigrant and Minority Health**, 2025 | RCT, 116 bereaved adults, Pennebaker paradigm, "letter to the deceased" a named task; between groups only positive mental health improved, no time × condition interaction | **full text**, `fullTextXML` |

Subject test: sources 5 and 6 (exactly two — the minimum, no margin). Peer-reviewed open-access: 5 and 6. Generic context statistics: zero. Wikipedia in body: zero.

**Read and deliberately not cited:** PMC11655495 (*Frontiers in Sociology* 2024, 27 group discussions with Polish 12–14-year-olds on transnational families) — source cap is 6 and the cohort is schoolchildren, not adults writing to a father.

---

## `/capsule` — dropped

`app/lib/prompt.ts:80` defines it as: *"Capsule — you both write predictions about the next year, blind to each other; it seals, and a year later you open it together and score every one."* It is **mutual**, **year-sealed** and **requires the other person to open it**. For a reader whose father has died there is no second person, so it is not a gentler alternative — it is an uncompletable promise. Dropped, and the drop is explained in body prose and in an FAQ, matching the Tamil row (`miss-you-appa-quotes-in-tamil`). Replacement alternative: `/watch`, chosen for the living-father half because a real player with chapters reaches a father who does not install apps.

---

## Claims in the orchestrator prompt, checked

| Claim | Verdict |
|---|---|
| `/capsule` is actively wrong here | **Confirmed** at source, `app/lib/prompt.ts:80`. |
| Spanish may mirror the Portuguese *falta* death sense | **Confirmed and extended** — it is in both `falta` acep. 6 and `faltar` acep. 2, and `añorar` adds a *pérdida* sense Portuguese's *saudade* lacks. |
| RAE 403s to scripted UAs | **Confirmed, and stronger than stated** — 403 on 4/4 headwords × 2 attempts, not intermittent. |
| band 300–1k/mo, **4 weak** | **Overturned (mildly)** — measured **5 of 8 weak** in both markets, not 4. |
| D-listicle tier caveat | **Holds.** Delivered anyway per the user's explicit request, with the SERP reality disclosed in `honestAssessment`. |
| Strapi production up, `miss-you-across-miles` real | **Confirmed.** Slug check `total=0`; category live. |

## Tooling defects

1. `serp-ddg.mjs` blocked for mx-es (control proved block, not zero).
2. PolterTab contention on **four** consecutive navigations; `session` does not isolate; `status: ok` + correct title is not authentication.
3. `dle.rae.es` 403 to scripted UAs is now consistent, not intermittent — BRIEF §4 and lane-wide finding 27 should be updated.
