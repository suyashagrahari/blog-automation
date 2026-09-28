# Research brief — i-miss-you-so-much-in-spanish

Row: WAVE4-PLAN.json, tier `A-translate`, region `us-en`, bodyLanguage **English**
(learner page). Keyword: **i miss you so much in spanish**.

---

## Phase 1 — SERP measurement (route named, per BRIEF §3)

**Route 1 — `serp-ddg.mjs`, ONE call, as instructed.**

```
node scripts/serp-ddg.mjs "i miss you so much in spanish" --region us-en
engine: ddg-html   region: us-en   query: i miss you so much in spanish
  (no results parsed — DDG markup may have changed)
```

The `query:` line echoed back the **full query**, not `us-en`, so this is not the
argument-order trap documented in BRIEF §3 — it is the known DDG IP block. Per the
BRIEF, no retry.

**Route 2 — harness `WebSearch`, 1 call.** BRIEF §3 explicitly licenses `WebSearch`
for a `us-en` row: US-served, real index, matches the market. **It is not Google**
and the post says so. 9 results returned and recorded; ranks beyond what was
returned are **not** invented.

| # | Result | Type | Weak? |
|---|---|---|---|
| 1 | spanishdict.com/translate/i%20miss%20you%20very%20much | auto-generated translator entry | **weak** |
| 2 | spanish.academy — "15 Ways to Say 'I Miss You' in Spanish" | editorial listicle, language school | strong |
| 3 | spanishdict.com/translate/i%20miss%20you%20so%20much | auto-generated translator entry (exact match) | **weak** |
| 4 | spanishdict.com/translate/i%20missed%20you%20so%20much | auto-generated translator entry | **weak** |
| 5 | facebook.com/groups/spanishtips2024 post | UGC forum thread | **weak** |
| 6 | facebook.com/groups/learn.spanish.everyday post | UGC forum thread | **weak** |
| 7 | quora.com — "How do you say I'll miss you so much in Spanish?" | Q&A | **weak** |
| 8 | quillbot.com/blog — "I Miss You in Spanish \| 3 Phrases & Examples" | tool-blog explainer | strong |
| 9 | en.wikipedia.org/wiki/I_Miss_You_(2019_film) | wrong entity entirely | **weak** |

**Weak count: 7 of the 9 results I actually saw.** The row predicted `weak: 4`. The
measured SERP is **weaker than the plan predicted**, not stronger.

**Gate 4 — PROCEED.** Three of nine are the same domain's machine-generated
translator pages, two are Facebook group threads, one is a film. No result on this
SERP reports a corpus frequency, names a corpus, or distinguishes which intensifier
collocates with which verb. The exact-match result (#3) is a translator stub.

The AI-summary paragraph the search returned offered `te extraño muchísimo`,
`te echo mucho de menos`, and the hedge "'so much' can be translated as tanto,
mucho, or cuánto". **`cuánto` is not an intensifier of this verb at all** — it is
interrogative/exclamative — which is exactly the dictionary-list failure the row
warned about.

## Phase 2 — Gap

Table stakes: `te extraño` vs `te echo de menos`; the regional split; a list of
intensifiers; at least one example sentence.

**The gap:** nobody establishes which intensifier *collocates*. Every ranking page
presents the intensifier as a free slot. None reports a frequency, none reports a
zero, and none notices that `te echo de menos` is a locution the intensifier has to
split.

Fan-out sub-queries → H2s: which intensifier is strongest / is *muchísimo* correct /
does *tantísimo* exist / where does *mucho* go in *te echo de menos* / is
*me haces mucha falta* the same thing / does *demasiado* mean "too much" or "a lot"
in Latin America / which do I actually send.

**Angle:** the only page on this SERP that establishes intensifier collocation from
corpora rather than a dictionary list, reports three measured zeros with controls,
and shows the DLE and the DPD disagreeing about `demasiado`.

## Phase 3 — Instruments, and how each was authenticated

**Instrument 1 — Tatoeba (`api_v0/search`, cap-exempt).** Counts are
`paging.Sentences.count` for a quoted query, `from=spa`.

| Query | Count | Query | Count |
|---|---|---|---|
| `te extraño` | 62 | `te echo de menos` | 17 |
| `te extraño mucho` | **13** | `te echo mucho de menos` | **2** |
| `te extraño muchísimo` | **3** | `te echo muchísimo de menos` | **1** |
| `te extraño tanto` | 3 | `te echo de menos mucho` | **0** |
| `te extraño demasiado` | 2 | `me haces falta` | 24 |
| `te extraño un montón` | 1 | `me haces mucha falta` | **0** |
| `te extraño tantísimo` | **0** | `me haces muchísima falta` | **0** |
| `te extraño bastante` | 0 | `te extraño horrores` | 0 |
| `te añoro` | 1 | `te extraño cantidad` | 0 |

**Controls run for every zero** (BRIEF §3 rule: never report a zero from one load):
`tantísimo` 4, `mucha falta` 5, `muchísimo` 243, `un montón` 335, `haces falta` 353.
The components exist in the corpus; the **collocations** do not. The zeros are real.

*Disclosed limitation:* Tatoeba's quoted search is **not exact-string** — it matched
`Te extrañé mucho` for `te extraño mucho` and `Me hace falta` for `me haces falta`.
So these are **construction-level** counts, not string counts, and the post says so.

**Instrument 2 — Leipzig Corpora Collection REST API**
(`api.wortschatz-leipzig.de/ws`), corpus `spa_news_2011_3M`.

*Authentication, per BRIEF §4 (HTTP 200 is not confirmation).* Before trusting a
single figure I reproduced one I can check independently: `de` returns
`freq 4228124, wordRank 1` — **`de` is rank 1 in every published Spanish frequency
list**, so the endpoint is serving Spanish and its ranking is sane. Second check:
the word-level `freq` for `extraño` (1,286) equals the `count` the *sentences*
endpoint returns for the same word (1,286), so the two endpoints agree internally.
Third: every sentence returned was inspected and contains the queried word.

Result: `extraño` freq **1,286**, rank **4,864**, frequency class 12. In a
**400-sentence sample** (2 × 200, offsets 0 and 200): **4** are the 1sg verb with a
person object (all four `te extraño`), **186** sit in an unambiguous adjective frame
(`un/muy/más/es/parece … extraño`), **19** are neuter `lo extraño`. `echo de menos`:
**0** in a 200-sentence sample of `menos` (corpus total for `menos` = 49,041).

This is itself the finding: **a news corpus is the wrong instrument for this verb**,
which is why the post leans on Tatoeba and the Academy rather than pretending a
2011 newswire measures affectionate speech.

**Instrument 3 — RAE.** `dle.rae.es/demasiado` and `rae.es/dpd/demasiado`.
Headword read on the page in both cases (BRIEF §4): "demasiado, da" and
"demasiado -da". Both 403'd on first attempt and served on retry — Cloudflare is
intermittent here, not blocking.

**Instruments that did NOT work, reported honestly:**

- **CORPES XXI (`apps2.rae.es/CORPES/`) — 403 Cloudflare challenge** from a scripted
  UA. So is `corpus.rae.es` (CREA). The row asked for CORPES XXI or Corpus del
  Español; **neither was reachable**, and the BRIEF forbids grinding. Substituted
  Tatoeba + Leipzig and labelled the substitution in the post.
- **Corpus del Español** — gated behind a login for query access.
- Leipzig has only **three** Spanish corpora, all 2011, all news/Wikipedia. No
  spoken or web register available.

## Phase 3 — Sources (6)

| # | Source | Journal / work | Date | Subject test |
|---|---|---|---|---|
| 1 | rae.es/dpd/demasiado | Diccionario panhispánico de dudas, 2.ª ed. | no pub date on page | ✓ the language |
| 2 | dle.rae.es/demasiado | Diccionario de la lengua española | no pub date on page | ✓ the language |
| 3 | revistahipogrifo.com/…/946 | **Hipogrifo. Revista de literatura y cultura del Siglo de Oro** | 2021-05-31 | ✓ intensification + affective expression in private letters |
| 4 | revistaelua.ua.es/article/view/20298 | **ELUA: Estudios de Lingüística. Universidad de Alicante** | 2022-03-21 | ✓ intensifier collocation from corpora |
| 5 | tatoeba.org search | Tatoeba | — | ✓ attested usage |
| 6 | api.wortschatz-leipzig.de | Leipzig Corpora Collection | corpus material 2011 | ✓ Spanish frequency |

Both scholarly sources are **peer-reviewed and open access**; both PDFs were
**downloaded and read in full** (`pdftotext -layout`), not abstract-only. Hipogrifo
corpus size read from the PDF body: **58 letters** (33 Luque + 2 Baena + 23 Baena;
21 sister-to-sister + 37 other), dated **1725–1762** — the two sub-totals agree.

Neither journal is *Frontiers in Psychology* or *PNAS* (both banned in BRIEF §7).
`capcheck.mjs` run immediately before writing: no banned URL used; `doi.org` at cap
and **not used**; neither of my scholarly domains appears in the cap lists. No
generic context statistic used at all (limit is 1).

## Claims from the task prompt — verified, one by one

| Prompt claim | Verdict |
|---|---|
| `demasiado` has drifted in much of Latin America to mean "a lot" | **CONFIRMED, and better than stated.** The DPD says it verbatim: "En buena parte de América, especialmente en el habla coloquial, se usa también *demasiado* sin connotación negativa y con valor intensivo, como equivalente expresivo de *mucho* o *muy*", with a Bolivian (2017) and a Chilean (2018) citation. |
| The DLE records the same | **OVERTURNED.** The DLE gives `demasiado` **eleven** senses, every one defined in terms of excess, and **not one carries a regional mark**. The Latin-American intensive value exists only in the DPD. That disagreement is a finding, not a footnote. |
| `tantísimo` is a candidate intensifier | **OVERTURNED.** `te extraño tantísimo` = **0** attestations, control `tantísimo` = 4. It is a dictionary-plausible form with no attested collocation here. |
| `me haces mucha falta` "behaves differently" | **CONFIRMED and sharpened.** It does not merely behave differently — in this corpus it is **not intensified at all**: `me haces falta` 24, `me haces mucha falta` 0, `me haces muchísima falta` 0, against a control of `mucha falta` 5. |
| `te echo mucho de menos` splits the idiom | **CONFIRMED, and the split is obligatory.** Split order 2 + 1 attestations; unsplit `te echo de menos mucho` = **0**. |
| Use CORPES XXI or Corpus del Español | **NOT POSSIBLE.** Both unreachable (see above). Substitution named in the post. |
| `/blog/i-miss-you-in-spanish` is live | **CONFIRMED** via the Strapi API — id 2578, "I Miss You in Spanish: Which of the Three Phrases to Send". Both batch siblings are live too (ids 2720, 2756), so all three cross-links resolve. |
| Slug free | **CONFIRMED** — `i-miss-you-so-much-in-spanish` returns 0 rows from Strapi. |

## Tooling defects found

1. **`references/article-json-schema.md` is not at the repo root.** The task prompt
   and BRIEF §9 both write `references/…`; the real path is
   `.claude/skills/blog-optimisation/references/`. A literal read of the documented
   path fails.
2. `serp-ddg.mjs` still dead for `us-en` (the control region), one call, no retry.
3. `dle.rae.es` and `rae.es` **403 intermittently** and serve on retry — an agent
   that gives up on one 403 will falsely record the RAE as unreachable.
4. OJS `/article/view/<id>/pdf` returns an **HTML viewer shell**, not a PDF. The real
   file is `/article/download/<id>/pdf/<galleyId>`, which has to be scraped out of
   that shell. Downloading the first link and running `pdftotext` on it silently
   produces nothing.
