# Research brief — `te echo de menos significado`

- **Batch**: 2026-09-26-miss-you-global-30
- **Row tier**: A-grammar · **bodyLanguage**: Spanish · **region**: es-es
- **Written**: 2026-09-26
- **Lane**: what the phrase MEANS and what register it carries. The comparison
  lane (`extrañar` vs `echar de menos`, regional marks, etymology, corpora)
  belongs to the sibling row `diferencia-entre-te-extrano-y-te-echo-de-menos`
  and is NOT rewritten here.

---

## Phase 1 — SERP measurement

### Instrument substitution (named, per BRIEF §3)

`node scripts/serp-ddg.mjs "te echo de menos significado" --region es-es` was run
**once**. It failed with `UND_ERR_CONNECT_TIMEOUT` on `html.duckduckgo.com:443`,
exactly as BRIEF §3 predicted. No retries were spent.

Route actually used: **Google served to Spain in the operator's own Chrome via
PolterTab**, `gl=es&hl=es&pws=0&num=20&nfpr=1`, read-only. Every scrape was
self-authenticated against query and language before being recorded.

**Contention caught and discarded**: the first two attempts returned another
agent's Korean SERP (`bogoshipda in english meaning`, `gl=us&hl=en`) — nine
Reddit/HiNative/Quora/TikTok results. Those were thrown away, not recorded. A
third navigation under a named session returned the correct Spanish page. This is
the failure BRIEF §3 warns about and it happened on the first try.

### `te echo de menos significado` — es-es, run twice, identical both times

| # | Host | Page type | Strong Spanish editorial? |
|---|---|---|---|
| 1 | quillbot.com/es/blog/preguntas-frecuentes/… | ~100-word stub selling a spell-checker | No |
| 2 | reddit.com/r/learnspanish | forum thread | No |
| 3 | conmishijos.com | parenting site, "explicación para niños" | No |
| 4 | wikilengua.org | Fundéu-hosted **wiki**, user-editable | Borderline — the only page that cites the DLE |
| 5 | burbujadelespanol.com | one-person Spanish-teaching blog | No |
| 6 | reddit.com/r/Spanish | forum thread | No |
| 7 | quillbot.com/es/blog/ortografia/… | second stub, same domain | No |
| 8 | instagram.com | social post | No |

**8 organic results actually seen** (not 10 — reporting what I saw, per BRIEF §3).
**Weak count: 7 of 8.** Zero results from `dle.rae.es`, `rae.es`, `fundeu.es`
proper, Instituto Cervantes, a national newspaper or a university. Two of eight
are Reddit; two of eight are the same SaaS blog.

Also present: a "Más preguntas" (People Also Ask) block with four questions —
"¿Qué significa que una persona te echa de menos?", "¿Qué significa echo de
menos?", "¿Qué significa cuánto te echo de menos?", "¿Cómo se dice 'te echo de
menos' o 'te hecho'?". No AI Overview rendered on this query.

**Gate 4 verdict: PROCEED.** Seven of eight results are forums, SaaS content
stubs, a parenting site and a social post. The one semi-strong result is a wiki
anyone can edit, and it self-flags its own etymology paragraph as unsourced.

**Dominant intent on this SERP is ORTHOGRAPHY, not meaning.** Six of the eight
titles are about `echo` vs `hecho`. Nobody on page one answers "what does it
mean", "how many senses does it have", or "can I say it to a friend". That is
the gap.

### The Netflix claim — MEASURED, and the brief's framing is imprecise

`WAVE1-PLAN.json` says "Netflix series 'Te echo de menos' owns the bare head term
in Spain." Measured on the bare head term `te echo de menos`, es-es, same route:

| # | Host | What it is |
|---|---|---|
| 1 | filmaffinity.com | "Te echo de menos (Miniserie de TV) (2025)" |
| 2 | netflix.com/es | official series page |
| 3 | imdb.com/es-es | same miniseries |
| 4 | quillbot.com | the only linguistic result |
| 5 | youtube.com | Chayanne — "Te Echo de Menos" |
| 6 | open.spotify.com | Beret — "Te echo de menos" |
| 7 | amazon.es | Harlan Coben, *Te echo de menos* (Serie Negra) |

7 results seen. An "El Modo IA ha respondido" block also rendered.

**Verdict: entertainment owns the head term, but not the series alone.** A film
database ranks above Netflix's own page, and two songs and the source novel share
the page with it. The correct statement is "entertainment, six of seven", not
"the Netflix series owns it". **Adding the word `significado` removes the
entertainment entirely: 0 of 8.** That is a genuine, useful finding for a reader.

### Checkable error in a ranking result

**`conmishijos.com`, position #3 on es-es**, a page whose stated purpose is
teaching children the spelling. It prints this mnemonic:

> "Truco: ante la duda, echar sin la letra h lo usamos cuando echamos fuera algo,
> y así, echamos la h."

Applied to the phrase in the page's own title, the trick gives the wrong answer:
nothing is thrown out when you miss someone. The page itself concedes this two
paragraphs later — "no significa que quieras echar o expulsar a esa persona" — so
the mnemonic contradicts the article that carries it. Checkable against
`dle.rae.es/echar`, where `echar de menos` is listed as a **locución verbal**,
i.e. a unit, and where only senses 1–4 of the verb's 48 involve throwing or
expelling anything.

Secondary observation (recorded, not used as the headline error):
`wikilengua.org` (#4) is the only page on the SERP that prints **both** DLE
senses, and it carries its own inline `[falta referencia]` tag on the
Galician-Portuguese `achar menos` etymology attributed to Corominas. That
corroborates the sibling row's finding that the etymology is a hypothesis and
must not be printed as fact. Neither page is linked from the post (item 28).

---

## Phase 2 — Gap analysis

**Table stakes on this SERP**: `echo` vs `hecho` homophony; a gloss of the
expression as "extrañar"; example sentences.

**The gap, four things nobody on page one does**:

1. **The DLE gives the locution TWO senses, not one.** Only wikilengua prints
   both. QuillBot (#1) and conmishijos (#3) give one. A reader who just received
   the message cannot tell which one was meant, and that is the actual question.
2. **Register is never addressed.** Not one page says whether you can send it to
   a friend, a parent or a colleague.
3. **`echar en falta` is never located.** It is not under `echar` in the DLE at
   all; it is defined under `falta`.
4. **The grammatical subject is never named**, so the contrast with French
   `tu me manques` never surfaces.

**Angle**: wins by being the only page on this SERP that prints both DLE senses
of the locution, locates `echar en falta` under `falta` rather than `echar`,
measures the register against 50 attested Tatoeba sentences (12 of which take no
person at all), and reports the measured entertainment takeover of the bare head
term — grounded in 214 `/missyou-gf` pages.

**Fan-out sub-queries → H2s**: qué significa exactamente · por qué no se entiende
sumando las palabras · quién es el sujeto · ¿es romántico? · dónde está «echar en
falta» · por qué Google devuelve una serie · el error en un resultado · qué
enviar.

---

## Phase 3 — Sources (5)

Every one fetched on 2026-09-26 and read before citing.

1. **`https://dle.rae.es/echar`** — DLE, s.v. *echar*. Etymology "Del lat.
   iactāre"; 48 numbered senses; sense 1 "Hacer que algo vaya a parar a alguna
   parte, dándole impulso". Locution list carries **`echar de menos algo o a
   alguien` 1. loc. verb. Advertir o notar su falta. 2. loc. verb. Tener
   sentimiento y pena por su falta.** — two senses. Also `echar menos algo o a
   alguien 1. loc. verb. echar de menos`, with **no `desus.` mark** (the DPD, per
   the sibling row, calls it "hoy en desuso" — a tension between two RAE works,
   recorded). **`echar en falta` does not appear in this entry at all.** No
   regional mark anywhere.
2. **`https://dle.rae.es/falta`** — DLE, s.v. *falta*. **`echar en falta` 1. loc.
   verb. Echar de menos.** Defined purely by cross-reference, so it inherits both
   senses. No regional or register mark.
3. **`https://tatoeba.org/en/sentences/search?from=spa&query=%22echo+de+menos%22`**
   — 52 Spanish sentences hold *echo de menos*; 50 read (5 API pages × 10).
   Classified: **12 of 50 take a non-person object** (Italia, la universidad, mi
   casa, el otoño, mis clases de indonesio, los olores de mi infancia, la comida
   de mi mamá, el compañerismo de mis amigos de juventud, las paellas que me
   hacía mi abuela, mi pueblo natal, el ruido de la ciudad, el olor de la
   hojarasca); **8 name a family member**; **3 name a friend**; **3 carry a
   romantic marker** ("te quiero" ×2, "pienso en ti" ×1). Comparison counts the
   same day: `"te extraño"` 62, `"extraño a"` 46, `"te echo de menos"` 17,
   `"echo en falta"` 3, `"te añoro"` 1.
   *Divergence from the sibling recorded honestly*: it measured `echo en falta` at
   0 and `te echo de menos` at 15. Different query strings and a live corpus.
4. **`https://europepmc.org/article/PMC/PMC6684791`** — *Frontiers in Psychology*
   vol. 10 (2019-07-31), CC BY. Two eye-tracking experiments on English–French
   bilinguals reading verb-particle constructions. Abstract conclusion: "L1
   readers may have lexicalized VPC representations that are directly retrieved
   during comprehension, whereas L2 readers are more likely to compositionally
   process VPCs." **Abstract only — the full text was not read.** Different
   language pair and a different construction type from a Spanish locución; the
   post says so.
5. **`https://europepmc.org/article/PMC/PMC12409917`** — *European Journal of
   Psychotraumatology* vol. 16 (2025-09-03), CC BY-NC. 231 bereaved participants,
   130 Chinese and 101 Swiss. The yearning induction did not significantly move
   momentary yearning, but emotional responses differed by culture: Swiss
   participants showed rises in sadness, anger and loneliness; Chinese
   participants showed a fall in positive emotions including happiness.
   **Abstract only.** Bereavement, not distance; neither group is Spanish-speaking.
   Cited only for the narrow point that the emotion behind DLE sense 2 is
   culturally shaped, and the limits are stated in the body.

**Subject test**: sources 1, 2 and 3 are about this exact phrase; source 5 is
about yearning for someone absent. Four pass.
**Peer-reviewed + open access**: sources 4 and 5.
**Generic context statistics**: zero.
**Swap test**: none transfers — 1 and 2 are entries for *echar* and *falta*, 3 is
a count of Spanish sentences containing *echo de menos*, 4 is invoked for
non-compositional retrieval and 5 for the emotion in DLE sense 2.

**Caps**: `capcheck.mjs` run immediately before writing — no banned URL, no domain
at cap, no URL at cap. `doi.org` avoided entirely. `dle.rae.es`, `tatoeba.org` and
`europepmc.org` are cap-exempt instruments/repositories; the **journals** named
are *Frontiers in Psychology* and *European Journal of Psychotraumatology*, and
neither appears in any sibling file in this batch (the sibling used *PNAS* and
*Cognitive Linguistics*). PDFs were not parsed — Europe PMC REST abstracts only.
WebSearch calls spent: **0**.

---

## Phase 0 — first-party facts

`facts-snapshot.md`, not `content/facts.md`. Collision counts across the five
sibling files already on disk were computed before choosing. The two
least-collided lines (1 prior use each) were taken and both sit in the first 150
words:

- 1,434 "hug" taps across 138 of 214 pages
- 47 distinct city pairs from a 15-city **picker**

Four more carry the mandatory caveats: 214 pages / 4.1 %, 88.8 % published,
median 2.6 hours, 2,417 views. Disclosed in body prose: the picker-with-defaults
problem, `viewCount` being page views rather than unique visitors, n = 214 over
two months, **and** that nothing in the database is segmented by language or
country and that it records which template was opened, never who received it.

**The differentiation is thin and it is stated in the audit.** These twelve lines
serve 55+ siblings.

---

## Phase 5 — links

- `/missyou-gf` (mandatory), `/dedication` (the genuine alternative — a recorded
  voice and a song carry no English for the recipient), `/templates`.
- Two `/blog/` cross-links to sibling rows, which the verifier excludes from the
  internal-link count.
- `categorySlug`: `miss-you-across-miles`.

## Split from the sibling rows, in one sentence each

- `diferencia-entre-te-extrano-y-te-echo-de-menos` owns **which form to use and
  where**; this row owns **what the form means and to whom you can say it**.
- `tu-me-manques-en-anglais` owns **the French inversion**; this row borrows one
  line of it for contrast and links out rather than restating it.
