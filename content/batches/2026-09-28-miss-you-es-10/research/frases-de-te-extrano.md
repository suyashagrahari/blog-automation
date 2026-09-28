# Research brief — `frases-de-te-extrano` (HUB)

Keyword: **frases de te extraño** · body language: Spanish · market: mx-es + es-es
Tier: D-listicle (ABORT-LIKELY by default) · **delivered, not aborted** — user-requested row,
and the measured SERP is weaker than the tier warning predicted.

---

## Phase 1 — SERP measurement

**Route used:** `node scripts/serp-ddg.mjs "frases de te extraño" --region <mx-es|es-es>`
(query first, `--region` second; the tool echoed `query: frases de te extraño` on both
recorded runs, so the §3 mis-ordering trap did not fire).

**Control, run on the same route in the same minute:**
`el tiempo en madrid --region es-es` → eltiempo.es, aemet.es, tiempo.com, accuweather,
meteosat, tutiempo, eltiempoen — real results. So an empty target SERP would have been
distinguishable from a bot challenge. It was not empty.

**Re-run, minutes later:** `frases de te extraño --region mx-es` printed
`(no results parsed — DDG markup may have changed)`. Per WAVE4 lane finding 20 that output
is indistinguishable from an empty SERP, so it was treated as a **block, not a measurement**,
and the first run stands.

**Second route — attempted, failed, NOT substituted.**
- Google `gl=mx&hl=es&pws=0&num=20` in the shared real browser: two `browser_navigate` calls
  returned, **in the navigate response itself**, a different concurrent row's page
  (`te extraño papá frases`, `gl=es`). Fourth confirmed contention instance in this lane, and
  the first where the corruption is visible in the navigate result rather than in a later read.
  Nothing from the browser was recorded.
- Brave (`scripts/serp.mjs`): hard **429** after 4 attempts.
- Harness `WebSearch`: **deliberately not used.** It is us-en only and is not valid evidence
  for an es-MX query. Saying so beats substituting silently.

### mx-es, top 10 (all ten actually read)

| # | Host | Type | Weak? |
|---|---|---|---|
| 1 | pensador.com | user-submitted quote aggregator, ~2,700 words, 3 headings | no |
| 2 | elcomercio.pe | national newspaper, `/mag/respuestas` SEO desk, ~1,430 words | no |
| 3 | maestrovirtuale.com | translated content farm, ~3,400 words | **weak** |
| 4 | psicoblog.org | small blog, ~2,300 words, 11 mood-based H2s | **weak** |
| 5 | es.wikihow.com | wikiHow; URL `/decirle-que-lo-extrañas`, served title «140 … para él» | no |
| 6 | frasesdelavida.com | small quote site, one H2 + related-post H3s | **weak** |
| 7 | lifeder.com | content farm; returned HTTP 522 when fetched | **weak** |
| 8 | imaglix.com | small site | **weak** |
| 9 | dilo.love | 176-word page | **weak** |
| 10 | bonobology.com/es/ | machine-translated from an English site | **weak** |

**7 weak of 10.**

### es-es, top 10

Same core incumbents, reordered: pensador · maestrovirtuale (weak) · psicoblog (weak) ·
elcomercio.pe · es.wikihow · lifeder (weak) · imaglix (weak) · frasesdelavida (weak) ·
frasess.net (weak) · frasesconemocion.com (weak). **7 weak of 10.**

**Against the plan's estimate of 4 weak, both markets measured 7.** The tier warning is
directionally wrong here — but the three non-weak results are a national newspaper, wikiHow
and a large aggregator, all far above this domain's authority, so this is not an easy SERP.

---

## Phase 2 — Gap

**Table stakes:** many lines, grouped; a short emotional intro; some grouping by recipient.

**The gap, and it is large.** All ten pages are `N frases` listicles ordered by *recipient*
or by *mood*. Not one of them:
- labels what an individual line **does** (state / request / reproach / promise);
- distinguishes «me haces falta» from «te extraño» as a different construction — three of the
  ten print it inside an undifferentiated list;
- gives the reader any procedure for **choosing**.

**Fan-out sub-queries → H2s:** who the sentence is about · what the line asks for · what it
promises and whether you can keep it · how much to write · is «te añoro» usable · the four
forms side by side · which sibling page fits my recipient · what the page template actually is.

---

## Phase 0 / framing — the orchestrator's spine was overturned

The prompt proposed: *the regional verb split (extrañar = Latin America, echar de menos =
Spain) decides which phrasing is natural, and sending the wrong one reads as foreign.*

**Both halves fail.** The LIVE sibling
`https://subhsandesh.in/blog/diferencia-entre-te-extrano-y-te-echo-de-menos`, read in full,
already establishes from the DLE that **none of the eight senses of *extrañar* carries a
regional mark**, and that the only example the *Diccionario panhispánico de dudas* uses for
«echar (de) menos» is **Chilean** (Collyer, *Pájaros*, cl 1995), with a **Colombian** example
for the older variant. The split is a frequency tendency, not a norm; nothing "reads as
foreign". Building the hub on it would have been wrong **and** a twin of the sibling.

**Spine used instead: who the sentence is grammatically about.** That is unclaimed, checkable,
and it is the decision a chooser actually has to make.

---

## Phase 3 — Sources (5)

1. **DLE, «falta»** — `https://dle.rae.es/falta`. Headword confirmed on the fetched page.
   `hacer falta` = «dicho de una persona o de una cosa: ser precisa para algún fin»;
   `hacerle a una persona falta alguien o algo` = «no tenerlo cuando sería necesario o
   provechoso»; `echar en falta` = «echar de menos». **The DLE defines it as necessity, not
   as feeling** — which is the whole post. Returned 403 on the first attempt, served on retry.
2. **DLE, «añorar»** — `https://dle.rae.es/a%C3%B1orar`. Headword confirmed.
   «Recordar con pena la ausencia, privación o pérdida de alguien o algo muy querido»,
   «del cat. *enyorar*».
3. **Frontiers in Psychology**, 2021-07-19 — `europepmc.org/article/PMC/PMC8330882`,
   *Co-occurrence Strength and Transitivity Effects on Spanish Clitic Case Variation With
   Reverse-Psychological Predicates*. Places ***faltar*** in the Spanish r-psych-verb class
   that marks the experiencer **only in the dative**, with *gustar* and *encantar*.
   **Read in full via `fullTextXML`.**
4. **Journal of Social and Personal Relationships**, 2021-11-14 —
   `europepmc.org/article/PMC/PMC8669216`, *Long-distance texting*. n = 647, 36.5 % in LDRs;
   more frequent and more responsive texting predicted higher satisfaction **only** in LDRs,
   voice-call frequency **only** in geographically close ones. **Read in full via `fullTextXML`.**
   Correlational, US emerging adults — both limits stated in the body.
5. **Wortschatz Leipzig**, `spa_news_2011_3M` —
   `api.wortschatz-leipzig.de/ws/words/spa_news_2011_3M/word/a%C3%B1oro`.
   *añoro* = 13 occurrences, rank 109,037, frequency class 18.
   **Control reproduced with its corpus name attached** (lane finding 22): `de` = 4,228,124,
   rank 1, in `spa_news_2011_3M`. *extraño* = 1,286, rank 4,864 — reported in the body but
   **its URL is on the banned list and is not cited**, and the ratio is disclosed as unusable
   because *extraño* is also the adjective.

**Deliberately not cited**, checked against the 112-URL banned list before use:
`mdpi.com/2226-471X/11/3/36` (= doi 10.3390/languages11030036, the top Crossref hit for the
Spanish psych-verb query, and the exact article lane finding 13 flagged); PLoS One
`journal.pone.0326189` (= PMC12221085); the Leipzig `extraño` query URL.

**Tatoeba tried and CUT.** Its `api_v0` quoted query does **not** do exact-phrase matching:
`"me haces falta"` and `"me hace falta"` both return **24**, and the top hit for `"te extraño"`
is «Te extrañamos». Any table of Tatoeba phrase counts built through that endpoint counts
loosely matching sentences, not the phrase. **Flagged for the orchestrator: a sibling post
publishes such a table.**

---

## Phase 5 — targeting

- `categorySlug`: `miss-you-across-miles` (confirmed live).
- `templateUrls`: `/missyou-gf` (mandatory), `/train-ticket` (the named alternative, with the
  reason it suits a distance reader better), `/templates`.
- Slug free: Strapi production `filters[slug][$eq]=frases-de-te-extrano` → `total=0`.

## Cross-link contract

All seven spokes linked in one H2, absolute `https://subhsandesh.in/blog/<slug>`, each
introduced by the question it answers rather than by its content. `te-extrano-papa-frases` is
introduced last and separately, naming bereavement explicitly so no reader is ambushed.
The live sibling is linked in the intro and used to *close* the extrañar/echar-de-menos
question rather than to reopen it.

## Audit arithmetic

`|passed| = 48`, `|failed| = 2`, intersection empty, total 50 = the checklist length.
Extra self-checks live in `batchMeta.additionalChecks`, never in `passed`/`failed`.
