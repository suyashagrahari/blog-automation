# Research brief — `te echo de menos en català`

- **Slug:** `te-echo-de-menos-en-catalan`
- **Body language:** Spanish (a Spanish speaker asking for the Catalan; Catalan lines are quoted material)
- **Region:** `es-es` · **Tier:** A-translate · **Category:** `miss-you-across-miles`
- **Templates:** `/missyou-gf` (mandatory), `/hold-my-hand` (alternative, substituted for the plan's `/streak`), `/templates`
- **Written:** 2026-09-27

---

## Phase 1 — SERP, measured

`serp-ddg.mjs` was run **once**, per BRIEF §3. It printed
`engine: ddg-html region: in-en query: te echo de menos en català` and
`(no results parsed — DDG markup may have changed)`. It also ignores the region
argument. Abandoned immediately, no retries.

**Route used: Google served to Spain in the shared real browser**,
`https://www.google.com/search?q=te+echo+de+menos+en+català&gl=es&hl=es&pws=0`,
**run twice** on 2026-09-27.

**Self-authentication** (BRIEF §3, point 0 — a correct title is not enough): the
scraped page carried my exact query in the `<title>`, a Spanish interface
(`Resultados de la búsqueda`, `Más preguntas`), and three h3s containing my query
in Spanish. No Turkish, German or other sibling content appeared anywhere in
either scrape. Both runs returned the same eight-result set; ranks 6 and 7 swapped
between runs. No contention detected.

### What the page actually looks like

Above every organic result:

1. **A Google translation widget** (`Resultado de traducción`, Español → Catalán)
   answering **`et trobo a faltar`**.
2. **An AI Overview** (`Vista creada con IA`, `Respuesta del Modo IA`).

### Organic results seen (8 of a paginated set; only these were read)

| # | Host | Page type | Weak? |
|---|---|---|---|
| 1 | indifferentlanguages.com | auto-generated translation directory | yes |
| 2 | ca.glosbe.com | crowd dictionary aggregator (also owns the translation block) | yes |
| 3 | falou.com/academy | language-app content marketing | yes |
| 4 | es.hinative.com | forum question from 19 Feb 2019 | yes |
| 5 | tiktok.com/@aprendecatalan_ | 4-year-old video | yes |
| 6 | elrincondegundisalvus.blogspot.com | personal blog, Oct 2017 | yes |
| 7 | mymemory.translated.net | translation-memory dump; snippet is unrelated legal text | yes |
| 8 | aplicacions.llengua.gencat.cat | Optimot fitxa — **returns the app's error page** | authority, but broken and not editorial |

**Weak count: 7 of the 8 I actually saw.**
**Gate 4 verdict: PROCEED.** There is no strong editorial page in Spanish on this
SERP. The real competition is Google's own translation widget, not a publisher.

### Fan-out sub-queries harvested from the live SERP

People also ask:
- ¿Cómo se dice "te echo de menos" en catalán?
- ¿Cómo se dice en catalán "te echaré de menos"?
- ¿Cómo se dice "te echo de menos"?
- **¿Cómo se dice en Mallorquín "te echo de menos"?**

Related searches: *Te echo de menos en mallorquín*, *Te añoro en catalan*,
*Te quiero en catalán*, *Et trobo a faltar*, *Añorar en catalan*.

The dialect axis is demanded by the SERP itself, which is why the variety section
and two of the FAQs exist.

---

## Phase 2 — Gap and checkable errors

**Table stakes:** give `et trobo a faltar`; mention `t'enyoro`.

**The gap:** not one result on the page cites a Catalan authority by entry. None
gives a sense number, none names a variety, none says who the grammatical subject
is, and the one authority that does rank is broken.

### Checkable errors found in ranking results

1. **ca.glosbe.com** (translation block and rank 2, page fetched and read on
   2026-09-27): *«enyorar, trobar a faltar, **anar-se'n** són les principals
   traduccions de "echar de menos" a català.»* The full DIEC2 article for `anar`
   is **5,038 characters** and carries no sense of missing anyone; *anar-se'n* is
   to leave. Named in the post, not linked.
2. **Google's AI Overview, 2026-09-27**: offered *«t'enyor»* as
   *«otra opción muy correcta y utilizada»* with **no label at all**. Per the
   DIEC2's own conjugator, `enyor` is the **Balearic** 1sg; Central is `enyoro`,
   Valencian `enyore`. Recorded as a dated snapshot because AI Overviews are
   non-deterministic.
3. **The Optimot result ranks and does not work** — see instruments below.

---

## Phase 3 — Instruments, what resolved and what refused

### Worked

- **DIEC2 (`dlc.iec.cat`) — primary authority.** The results page is a shell; the
  article loads over AJAX. Route that works with no browser: scrape
  `GetDefinition('<id>')` out of `/Results?DecEntradaText=<word>`, then
  `POST /Results/Accepcio` with `id=<id>`. Ids used: **enyorar 0062038**,
  **faltar 0027552**, **mancar 0021534**, **falta 0021216**, **anar 0001236**,
  **trobar¹ 0005554**. Conjugation tables at `/Verbs?IdE=<id>`. Abbreviation table
  at `/AbreviaturesL`.
- **DCVB / Alcover–Moll (`dcvb.iec.cat/results.asp?Word=<word>`)** — plain HTML,
  ISO-8859-1, works.
- **DLE (`dle.rae.es/añorar`)** — 403 Cloudflare to a script, and the Wayback
  Machine replays the block. Read in the **real browser**, headword confirmed on
  the page before citing.
- **Priberam (`dicionario.priberam.org/pt-pt/saudade`)** — works.
- **Tatoeba `api_v0/search`** — works.
- **Europe PMC REST** — works; `findpapers.mjs` for discovery.
- **Strapi production** via `ctx_execute` — slug free (`total: 0`), category live.

### Refused — recorded, not guessed

- **Optimot (Generalitat de Catalunya).** `method=cerca_generica` → HTTP 500.
  `method=detall` on the exact fitqa URL Google indexes → HTTP 500 to a script and
  *«S'ha produït un error»* in the real browser. `method=cerca_dades` returns the
  landing page unchanged (278,216 bytes with a query, 278,091 without). **No
  Optimot content is cited anywhere in the post.**
- **CTILC** (`ctilc.iec.cat`) — redirects to a 101-byte empty stub; every
  `/scripts/*.asp` path 404s from IIS. This is the corpus that would have measured
  *enyorar* against *trobar a faltar*, so **no frequency claim is made**.
- **DEIEC** (`deiec.iec.cat`) — search UI only, no fetchable entry route found.

---

## Findings that carry the post

### 1. Where the locution lives

**DIEC2, entry `faltar`, sense 2 2:**
> *trobar a faltar algú o alguna cosa* — Adonar-se que no és allà on hauria
> d'ésser, sentir-ne la llunyania, la pèrdua, la desaparició.
> *Quan te'n vagis, et trobaré a faltar.*

Headworded under **faltar**, not under *trobar* — structurally the same as the
Spanish sibling's finding that the DLE files *echar en falta* under **falta**.

Negative check: the full `mancar` article (1,641 characters, six senses) contains
**no** *trobar a mancar*. The `falta` article's only "en falta" is
*estar algú en falta* = to be at fault.

### 2. The grammatical subject — verified, not asserted

*Trobar* is `v. tr.`; the speaker conjugates it (`jo trobo`) and the missed person
is the **direct object**. Reader-checkable proof from attested clitics:

| Catalan (Tatoeba) | Spanish gloss on the same sentence |
|---|---|
| El trobes a faltar? | ¿Lo echas de menos? |
| El trobem molt a faltar! | ¡Lo extrañamos mucho! |
| Et trobo a faltar. | Te echo de menos. / Te extraño. |

`el`/`els`, never `li`. **Catalan patterns with Spanish: the speaker is the
subject in all three of *te echo de menos*, *te extraño* and *et trobo a faltar*.
It does NOT invert like French *tu me manques* or Italian *mi manchi*.**

DIEC2 also records an inverting option that is not the default: `falta` 1 2
`fer falta` = «Ésser necessari», so *em fas falta* puts the other person in
subject position. That went into an FAQ.

### 3. `enyorar` is common lexicon, not literary or regional

**DIEC2, entry `enyorar`** — three senses, all marked **[LC]**, which
`dlc.iec.cat/AbreviaturesL` expands as **«lèxic comú»**:

1. Sentir pena d'ésser absent (d'un país), d'haver perdut (algú o alguna cosa).
2. **Trobar a faltar** (alguna cosa o alguna persona absent, desapareguda).
3. `v. intr. pron.` — *Ací, m'hi enyoro, jo!* (feeling out of place, **not**
   missing a person).

Family, all [LC]: `enyorança` («Pena o dolor per l'absència, per la pèrdua
d'alguna cosa o d'alguna persona»), `enyor` (which also records the locution
*trobar a enyor* = *trobar a faltar*), `enyorament`, `enyoradís`.

**The brief's suspicion that *enyorar* might be regional, literary or dated is
wrong, and the dictionary says so directly.**

### 4. Variety — from the IEC's own conjugator

`dlc.iec.cat/Verbs?IdE=0062038` and `?IdE=0005554`, 1sg present indicative:

| | central | valencià | balear | nord-occ. | septentrional |
|---|---|---|---|---|---|
| enyorar | **enyoro** | **enyore** | **enyor** | enyoro | enyori |
| trobar | **trobo** | **trobe** | **trob** | trobo | trobi |

A Tatoeba sentence carries the Valencian marking on a third verb:
*«Et trobaré molt a faltar quan te'n **vages** en juny»* (Central would be *vagis*).

### 5. Etymology — the brief's parallel is false, and the real link is better

- **DCVB, `enyorar`:** «probablement del llatí **ignorare**, 'no saber'»
  (Meyer-Lübke **REW 4258**; M. de Montoliu, *Est. Univ.* vi, 290). It expressly
  rejects Latin *angor* 'tristor' (Forteza, accepted by Alcover) and Latin
  *interanea* 'entranyes' (Spitzer).
- **Priberam, `saudade`:** «Origem: latim **solitas, -atis**, solidão.»

Different roots, different metaphors — *not knowing where someone is* versus
*being left alone*. **There is no shared origin between *enyorança* and
*saudade*.** The brief's hoped-for parallel with the Galician *saudade* finding
does not hold, and the post says so.

What does hold, and is the better story: **DLE `añorar` — «Del cat. *enyorar*»**,
single sense «Recordar con pena la ausencia, privación o pérdida de alguien o algo
muy querido». The Spanish reader already owns a Catalan loanword.

### 6. Tatoeba, inspected individually

Query `trobo a faltar`, `from=cat`:

- **9 raw hits.** The search is tokenised and also matched *trobes*, *trobat*,
  *trobarem*, *trobem*, *trobaré*.
- **9 of 9 survived** individual inspection as genuine uses of the locution —
  **0 false positives**, against the 6.1% survival a sibling Chinese row measured.
- **8 of 9 carry a Spanish translation.** **8 of 8** use *echar de menos* or
  *extrañar*. **0** use *añorar*.
- Sentence **856648** = the exact query, glossed both ways.

Catalan `enyorar` / `enyoro` / `enyorança`: **2 sentences, both the noun
*enyorança*, neither the verb.** Following the Polish row's precedent, **this zero
is not treated as evidence**: the Catalan Tatoeba corpus is small and translated,
and CTILC — the corpus that would settle it — is down.

---

## Phase 3b — Third-party research

- **Health Expectations**, vol. 29 (2026), Nissen, Meuter & Riedlinger,
  `10.1111/hex.70873`, PMC13573317, CC BY, open access. 53 recorded
  emergency-department consultations, 39 containing epistemic adverbs, analysed
  under Communication Accommodation Theory across **language-concordant and
  language-discordant** encounters. Accommodation strategies appeared in every
  analysed excerpt; in some cases the data could not confirm that the expressed
  uncertainty had been resolved. **Abstract only was read**, via the Europe PMC
  REST API.
  **Journal named for the human cap count: *Health Expectations* — first use in
  this batch.** Frontiers in Psychology, PLoS ONE, Scientific Reports, PNAS, BMC
  Psychology, European Journal of Psychotraumatology and Memory & Cognition were
  all avoided.

Searches run through `findpapers.mjs` (Crossref + Europe PMC, no WebSearch calls
spent): *Catalan language use identity bilingual Catalonia accommodation*;
*emotional expression native language versus second language bilingual speakers*;
*long distance romantic relationship maintenance mediated communication*;
*minority language vitality intergenerational transmission speakers attitudes*;
*emotion word perceived intensity first language second language bilinguals
affective*. Most Catalan-specific hits are paywalled book chapters.

---

## Angle

> Wins by being the only page on this measured `es-es` SERP that licenses every
> Catalan form against the IEC's own dictionaries — DIEC2 headwords
> *trobar a faltar* under `faltar` and marks all three senses of `enyorar` [LC]
> *lèxic comú*, its conjugator separates trobo/trobe/trob/trobi and
> enyoro/enyore/enyor/enyori by variety, and the DCVB derives *enyorar* from Latin
> *ignorare* while Priberam derives *saudade* from *solitas*, killing the
> *enyorança*–*saudade* kinship — plus a 9-sentence Tatoeba inspection in which
> 8 of 8 Catalan-Spanish pairs render the locution as *echar de menos*/*extrañar*
> and none as *añorar*, grounded in the 214-page `/missyou-gf` dataset.

## Split from the four Spanish siblings

The axis is **language**, not sense. The siblings argue inside Spanish
(*extrañar* vs *echar de menos*; the DLE's two senses of the locution; the
Spanish→English mapping; indirection). This post is Spanish→**Catalan** and never
re-argues any of their findings — it cites two of them in one sentence each as
established, and cross-links the French row for the one contrastive line about
subject inversion.

## Product disclosure

`/missyou-gf` is defined at `app/lib/prompt.ts:44` as an *"I miss you page for a
girlfriend/partner"* — an English page with English labels, for a partner. The
reader here is a Spanish speaker writing Catalan: a **triple mismatch**, disclosed
in Spanish prose in the final section, not only in the audit.

The plan assigned `/streak` as the alternative. **`/hold-my-hand` was taken
instead**: this post's whole problem is a sender unsure of the words, and Hold My
Hand is the only template whose main payload is a held gesture rather than text,
so it degrades least if the variety is wrong.

## First-party facts used

Picked away from the six miss-you lines the four Spanish siblings have already
taken three times over:

- 13.6% of miss-you senders record a voice note (29 of 214) — used once before
- 1,434 "hug" taps across 138 of 214 pages, 512 on one — used once before
- 47 distinct city pairs from a 15-city picker — used once before
- Median miss-you letter length: 88 words
- 88.8% of started miss-you pages published (190 of 214)
- 48.4% of views on a touch device
- 3,843 registered creators

All four mandatory caveats are in body prose: the city picker has defaults,
`viewCount` counts views not people, n = 214 over two months, and **the database
records which TEMPLATE was opened, never who received it, and is not segmented by
language or country**.
