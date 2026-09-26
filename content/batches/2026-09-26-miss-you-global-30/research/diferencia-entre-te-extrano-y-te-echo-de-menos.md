# Research brief — `diferencia entre te extraño y te echo de menos`

- **Slug:** `diferencia-entre-te-extrano-y-te-echo-de-menos`
- **Body language:** Spanish (H1, all H2s, prose, metaTitle, metaDescription, FAQs)
- **Region:** `es-es` (plus a second run at `mx-es`)
- **Tier:** `A-grammar`
- **Batch:** `2026-09-26-miss-you-global-30`
- **Date of research:** 2026-09-26

---

## 0. Verdict on the framing claims in the task prompt

The prompt asked me to **check, not assert**, the premise that *extrañar* is the Latin
American verb and *echar de menos* the Peninsular one, and that the two are not freely
interchangeable. **The premise is roughly half right and the confident half is wrong.**

| Prompt claim | Verdict | Evidence |
|---|---|---|
| *extrañar* is "the Latin American verb" | **Partly wrong** | The **DLE** entry for `extrañar` carries **no regional mark at all** on sense 2 ("Echar de menos a alguien o algo, sentir su falta"). The **DPD** entry `extrañar(se)` illustrates the 'find strange' sense with a **Spanish** author (SchzOstiz, *Infierno*, **es** 1995). |
| *echar de menos* is "the Peninsular one" | **Partly wrong** | The **DPD** entry `echar(se)` §4 illustrates `echar (de) menos` with a **Chilean** author (Collyer, *Pájaros*, **cl** 1995) and the archaic `echar menos` with a **Colombian** one (DzCastro, *Manuela*, **co** c1858). Neither carries a regional mark. |
| "they are not freely interchangeable" | **Wrong as stated** | The DLE *defines* `extrañar` sense 2 **using** the words "echar de menos". In a pan-Hispanic dictionary that is the strongest possible statement of equivalence for that sense. |
| *extrañar* carries other senses *echar de menos* does not | **Correct, and the most useful finding** | DLE `extrañar` senses 1, 3, 4, 5, 6, 7, 8 — including **"Desterrar a país extranjero"** (to exile) and **"Ver u oír con admiración o extrañeza algo"** (to find strange). `echar de menos` has exactly one sense. |
| "the etymology of *echar de menos* is a genuinely checkable claim" | **Checkable, and it does not resolve cleanly** | See §4. |

**Corrected angle:** the split is real but it is a *frequency and register* split, not a
*correctness* or *regional-marking* split — and the RAE's own choice of citations is the
evidence that breaks the tidy map every ranking page prints.

---

## 1. SERP measurement

### 1a. The sanctioned tool failed — recorded negative

`node scripts/serp-ddg.mjs "diferencia entre te extraño y te echo de menos" --region es-es --n 10`
returned `(no results parsed — DDG markup may have changed)` on **six consecutive runs**,
including a control query (`echar de menos significado`, `es-es`) and a different region
(`us-en`). Direct probing showed why:

```
html.duckduckgo.com  POST  ->  403   236 bytes   "error-lite+9318"
lite.duckduckgo.com  POST  ->  403   236 bytes   "error-lite+9318"
```

DuckDuckGo hard-403'd this session for every endpoint and every region. This is **not** a
markup change — it is a block, and the script's error message misreports it. Alternatives
probed and rejected: Mojeek (200, 5.5 KB, 2 off-site hosts — a stub), Marginalia (200 but
not a general index), Ecosia (403), Startpage (200, 0 results — bot challenge), Bing
(200, 92 KB, **0 `b_algo` blocks** — a JS shell with no server-rendered results).

### 1b. What I used instead — a genuinely market-served SERP

I drove the user's real Chrome (PolterTab) against Google with explicit country and
language forcing and personalisation off:

```
https://www.google.com/search?q=...&gl=es&hl=es&num=20&pws=0&gws_rd=cr
https://www.google.com/search?q=...&gl=mx&hl=es-419&num=20&pws=0&gws_rd=cr
```

These are **genuine market-served SERPs** — Spain-served and Mexico-served respectively.
No US-served caveat applies.

### 1c. `es-es` (Spain-served), measured 2026-09-26

| # | Domain | Page type | Strong? |
|---|---|---|---|
| 1 | italki.com | Language-exchange Q&A thread | weak |
| — | *(Google AI Mode block: "El Modo IA ha respondido")* | AI answer | n/a |
| 2 | burbujadelespanol.com | Small Spanish-learning blog (Italian-run academy) | weak |
| 3 | reddit.com/r/Spanish | Forum thread (`?tl=es-es`) | weak |
| 4 | montonesdepapeles.com | 2013 personal Blogspot essay | weak |
| 5 | es.quora.com | Q&A | weak |
| 6 | instagram.com | Reel | weak |
| 7 | reddit.com/r/Spanish | Same thread (`?tl=es-419`) | weak |
| 8 | quillbot.com | AI-writing-tool SEO FAQ page | weak |
| 9 | italki.com | Second Q&A thread | weak |

### 1d. `mx-es` (Mexico-served), measured 2026-09-26

Same cast, reordered: Reddit #1, italki #2, burbujadelespanol #3, Quora #4, QuillBot #5,
a second Reddit thread #6, montonesdepapeles #7.

### 1e. Gate 4 verdict — **PROCEED**

**Weak count: 9 of 9 organic results on `es-es`; 7 of 7 on `mx-es`. Strong national
Spanish editorial: zero.** Not one result is a dictionary, a language academy, Fundéu,
Cervantes, or a national newspaper. Tier `A-grammar` is confirmed by measurement, not
assumed. **No page on either SERP cites the RAE at all** — the one page that gestures at
it (montonesdepapeles) does so from memory and in passing.

This is the content gap in one line: **the single most authoritative source on this exact
question has an entry on it, and nobody on page 1 has opened it.**

---

## 2. The checkable error in a ranking result

**Page:** `burbujadelespanol.com/decimos-echar-de-menos-y-aqui-te-explico-por-que/`
**Position:** #2 on `es-es`, #3 on `mx-es`. 1,848 words, fetched in full 2026-09-26.

It prints an unsourced region table. Two rows are checkably wrong:

> **"Chile | Extrañar | Echar de menos (ocasional) | Influencia española ocasional"**

and in its opening paragraph:

> **"Mientras que en España es una expresión muy natural y común, en América Latina puede
> sonar extraña o incluso confusa."**

**Refutation, from the RAE:** the **DPD** entry `echar(se)`, §4, illustrates `echar (de)
menos` with exactly one citation, and it is **Chilean**:

> «Es usted buena persona, Fischer, lo echaré de menos» (Collyer *Pájaros* **cl** 1995)

The RAE selects citations to illustrate *normal, general* usage. It reached for Chile — the
very country the ranking page calls "occasional, occasional Spanish influence" — to show
what this locution looks like in ordinary Spanish. The DPD's second citation for the
archaic variant `echar menos` is **Colombian** (DzCastro *Manuela* **co** c1858).

And "may sound strange or even confusing in Latin America" is contradicted by the **DLE**,
which uses the words "echar de menos" as the *defining gloss* of `extrañar` sense 2 in a
pan-Hispanic dictionary carrying no regional mark.

The page also gives no source for any row of its table.

---

## 3. What the dictionaries actually say (fetched verbatim, 2026-09-26)

### DLE — `extrañar` (dle.rae.es/extrañar)

> Del lat. *extraneāre* 'tratar como a un extraño'.
> 1. tr. Sentir la novedad de algo, echando de menos lo que resulta habitual. *No he dormido bien porque extrañaba la cama.*
> 2. tr. Echar de menos a alguien o algo, sentir su falta. *Lloraba el niño extrañando a sus padres.* Sin.: añorar, recordar.
> 3. tr. Desterrar a país extranjero. U. t. c. prnl.
> 4. tr. Ver u oír con admiración o extrañeza algo. U. m. c. prnl.
> 5. tr. Afear, reprender.
> 6. tr. p. us. Apartar, privar a alguien del trato y comunicación que se tenía con él.
> 7. tr. desus. Rehuir, esquivar.  8. prnl. Rehusarse, negarse a hacer una cosa.

**No regional mark on any sense.** Eight senses against the locution's one.

### DPD — `echar(se)` §1 and §4 (rae.es/dpd/echar)

> **§1.** No debe escribirse con h inicial, error frecuente en las formas de presente *echo, echas, echa* por homofonía con las formas del participio de *hacer* (*hecho, hecha*).
> **§4. echar (de) menos.** Locución verbal transitiva que significa 'notar la falta [de alguien o algo]' […] La variante *echar menos*, frecuente en otras épocas, está hoy en desuso […] Igualmente correcta es la expresión *echar en falta* […] se desaconseja ⊗*echar a faltar*, construcción influida por el catalán *trobar a faltar*.

### DPD — `extrañar(se)` (rae.es/dpd/extrañar)

> **1.** Es transitivo cuando significa 'encontrar extraño [algo]' (SchzOstiz *Infierno* **es** 1995); y 'echar de menos [a alguien o algo]' (Martínez *Perón* **ar** 1989).
> **2.** Cuando significa 'causar extrañeza', es **intransitivo**. El sujeto es un sustantivo inanimado, un infinitivo o una subordinada introducida por *que* y lleva además un complemento indirecto de persona.
> **3.** Como intransitivo pronominal significa 'sentir extrañeza' y suele llevar un complemento con *de*.

**Grammar answer (the prompt asked who the subject is):** in *both* `te extraño` and
`te echo de menos` the **person who misses is the grammatical subject** and the missed
person is the direct object — both are transitive. Spanish differs here from Italian
*mi manchi* and Portuguese *sinto a tua falta*, where the missed one is the subject. The
subject only flips inside *extrañar*'s **other** sense: `me extraña que…`, where the
thing causing surprise is subject and the person is a dative.

### DLE — exact-string check

`https://dle.rae.es/?w=echar+de+menos` returns **«La palabra "echar de menos" no está en
el Diccionario.»** — because it is filed as a locución under `echar`, not as a headword.
Worth knowing before asserting "it is not in the RAE dictionary."

---

## 4. The etymology claim — verdict: **do not print it clean**

The prompt flagged the Portuguese *achar menos* story as a genuinely checkable claim. It
is checkable, and **it does not check out cleanly.**

**For it:**
- **en.wiktionary "echar de menos"**: "Originally an archaic and dialectal Old
  Galician-Portuguese idiom, *achar (de) menos* ('to feel an absence', literally 'to find
  missing'), entering in Spanish as *echar (de) menos* (mistaking Old Galician-Portuguese
  *achar* ('to find') […] with *echar* ('to throw'), both verbs pronounced similarly)."
- **es.wiktionary "echar de menos"**: "Del galaicoportugués *achar de menos* ('sentir la
  ausencia', literalmente hallar menos de algo). Fue adoptada al español con el verbo
  'echar' por su similitud fonética con *achar* ('hallar')."

**Against printing it as settled:**
- The **DPD entry that exists on precisely this locution** (`echar(se)` §4) says
  **nothing** about a Portuguese origin. It discusses the meaning, the archaic variant and
  a Catalan calque — and is silent on etymology.
- The **DLE** gives `echar` the etymology *Del lat. iactāre* — the verb only. The DLE
  attaches no etymology to the locución.
- Neither Wiktionary entry carries an inline citation for the claim; en.wiktionary's
  "Further reading" is the DLE, which does not make the claim.

**How the post handles it:** states the story, names both Wiktionaries as the place it is
found, and states plainly that the RAE — which has an entry on this exact locution — does
not endorse it. A hedge that can be cited beats a clean story that cannot.

---

## 5. CORPES XXI / CREA — what I tried and what it returned

**Result: no frequency-by-country data obtained.** Recorded in full because the negative
is the finding.

1. **Server-side fetch of every RAE corpus host** — all **HTTP 403**, Cloudflare
   interstitial ("Just a moment… Enable JavaScript and cookies to continue"):
   - `www.rae.es/corpes/contenidos/lemas-pais` → 403
   - `www.rae.es/corpes/assets/rae/files/corpes/diccionario_frecuencias_corpes_alfa.tsv` → 403
   - `apps.rae.es/CORPES/view/inicioExterno.view` → 403
   - `apps2.rae.es/CORPES/view/inicioExterno.view` → 403 (redirects to `www.rae.es/corpes/`)
   - `corpus.rae.es/creanet.html` (CREA) → 403

2. **Browser route (PolterTab).** Worked for the DLE and DPD. For CORPES it reached the
   pages but **the published frequency products are the wrong shape**: `1000/5000/10000_lemas.html`,
   `listas_dp_lemas.tsv`, `diccionario_frecuencias_corpes_alfa.tsv` and `corpes_lemas.zip`
   are all **global, pan-Hispanic lemma lists with no country split**. The page titled
   *"Listados de lemas por países"* links the same global assets.

3. **The deeper methodological reason nobody has this number** — and it is worth stating
   in the post: **`echar de menos` is a multiword locution and therefore is not a lemma
   at all.** A lemma frequency list can only count `echar`, which aggregates dozens of
   unrelated senses ("echar mercancías al mar", "echar a alguien del trabajo", "echar
   raíces"). Only CORPES's **interactive query interface**, with its geographic filter,
   can compare the two strings by region — and that interface requires a multi-step JS
   session.

4. **Why I could not complete that session:** the PolterTab browser exposes **one shared
   tab across all concurrent agents in this batch**. `session` names did not isolate it —
   every `browser_navigate` returned the same `tabId` (1052052280), and mid-task the tab
   was repeatedly navigated away by sibling agents (a Turkish `seni özledim` Google SERP
   and a `wikihow.com.tr` page appeared inside my own scrape results). A multi-step
   interactive corpus query cannot survive that. **This is an operational finding for the
   orchestrator, not a property of CORPES.**

5. **Fallback attempted — Leipzig Corpora Collection** (`api.wortschatz-leipzig.de`),
   which does publish country-split corpora for some languages. Its public
   `availableCorpora` endpoint exposes **only three Spanish corpora, none country-split**:
   `spa_news_2011_3M`, `spa_news_2011_1M`, `spa_wikipedia_2011_1M`. Direct probes of
   `spa-es_web_2016_1M`, `spa-mx_web_2016_1M`, `spa_es_web_2016_1M` and
   `spa-ar_web_2016_1M` all returned **404**. The one corpus that exists gives
   `extrañar` freq 198 (rank 20,592) and `extraño` freq 1,286 (rank 4,864) — but `extraño`
   conflates the adjective with the first-person verb, so **the pair is not separable
   without POS tags and I did not use these numbers in the post.**

**What I did get, and used:** **FundéuRAE, 2026-06-30** — CORPES version 1.5 holds nearly
**420,000 documents and 455 million orthographic forms**, over ten million more than the
December 2025 version. The post uses this to say precisely what is missing: the corpus
that could settle the regional question exists and is large, and its regional breakdown of
these two forms is not published in downloadable form.

**Attested-usage substitute — Tatoeba** (cap-exempt, named in the brief), queried
2026-09-26 with exact-phrase search, `from=spa`:

| Query | Sentences |
|---|---|
| `"te extraño"` | 53 |
| `"te echo de menos"` | 15 |
| `"te echo en falta"` | 0 |
| `"te añoro"` | 1 |

**Caveat carried into the post:** Tatoeba is a volunteer sentence collection, not a
balanced national corpus. Its contributor base skews it and it is evidence of *attestation*,
not of *national frequency*. It is used in the post only to show that both forms are
abundantly attested and that `echar en falta` is rare in this register — never as a
country statistic.

---

## 6. Gap analysis

**Table stakes** (all ranking pages cover): both mean "to miss someone"; Spain prefers one,
Latin America the other; `añorar` and `hacer falta` exist as alternatives; example sentences.

**The gap — what none of the nine cover:**
1. **Nobody opens the RAE.** No dictionary or academy source appears on either SERP.
2. **Nobody mentions that the DLE gives `extrañar` no regional mark**, or that it uses
   "echar de menos" as its own defining gloss.
3. **Nobody notices the RAE's Chilean citation**, which breaks the map they all print.
4. **Nobody covers `extrañar`'s other senses** — exile, to find strange, to reprimand —
   which is the one difference that can actually change which verb a sender should use.
5. **Nobody states the grammar**: that both are transitive with the misser as subject, and
   that `extrañar` flips to intransitive-with-dative in its 'surprise' sense.
6. **Nobody addresses `echar en falta` / `echar a faltar`** — the DPD explicitly
   discourages the second as a Catalan calque. Relevant to any reader in Catalonia,
   Valencia or the Balearics writing in Spanish.
7. **Nobody reports a negative result** about corpus data, or explains *why* a locution
   cannot appear in a lemma frequency list.

**Stale data:** montonesdepapeles is from 2013. burbujadelespanol's region table is undated
and unsourced.

**Fan-out sub-queries → H2s:** ¿significan lo mismo? / ¿dónde se rompe el mapa regional? /
¿qué significa extrañar que echar de menos no? / ¿quién es el sujeto? / ¿echo o hecho? /
¿de dónde viene la expresión? / ¿qué dicen los corpus? / ¿qué forma envío?

**Angle (recorded as `batchMeta.angle`):** wins by being the only page on this SERP that
tests the regional split against the RAE's own entries — finding that the DLE gives
`extrañar` no regional mark and that the DPD illustrates `echar de menos` with a Chilean
citation — and that reports exactly what CORPES would and would not give.

---

## 7. Sources (6 outbound, all fetched 2026-09-26)

| # | URL | Domain | Journal / publisher | Subject test | Peer-reviewed OA |
|---|---|---|---|---|---|
| 1 | `rae.es/dpd/echar` | rae.es | Diccionario panhispánico de dudas, RAE/ASALE | ✔ the language | instrument |
| 2 | `rae.es/dpd/extrañar` | rae.es | Diccionario panhispánico de dudas, RAE/ASALE | ✔ the language | instrument |
| 3 | `dle.rae.es/extrañar` | dle.rae.es (cap-exempt) | Diccionario de la lengua española, RAE/ASALE | ✔ the language | instrument |
| 4 | `europepmc.org/article/PMC/PMC13552847` | europepmc.org (cap-exempt repo) | **Proceedings of the National Academy of Sciences** 123, 2026-08-31, CC BY-NC-ND | ✔ emotion + Spanish bilinguals | ✔ |
| 5 | `europepmc.org/article/PMC/PMC11878271` | europepmc.org (cap-exempt repo) | **Cognitive Linguistics** 36, 2025-01-10, CC BY | ✔ regional variant use | ✔ |
| 6 | `fundeu.es/noticia/el-corpes-supera-los-455-millones-de-formas/` | fundeu.es | FundéuRAE, 2026-06-30, CC BY-SA 3.0 | ✔ Spanish corpus | no |

**Swap test:** every one is specific to Spanish or to Spanish-speaking bilinguals. None
could sit unchanged in the Turkish, Polish or Indonesian sibling posts.

**Cap check (run 2026-09-26, immediately before writing):** no banned URL used. Avoided
`doi.org` entirely — it is at cap (4 posts); papers are cited through Europe PMC, which is
a cap-exempt repository, with the **journal named** so the cap is checkable by hand.
`journals.plos.org` and `arxiv.org` (also at cap) not used. Sibling batch
`2026-09-25-miss-you-30` checked: neither PMCID, neither journal, and `fundeu` appear in
any of its 54 posts.

**Consulted, named in the post, deliberately not linked** (to hold outbound links at the
3–6 ceiling): en.wiktionary + es.wiktionary `echar de menos` and `extrañar` (etymology,
§4); Tatoeba exact-phrase counts (§5); Leipzig Corpora Collection (§5, unused).

---

## 8. Lines cut, and why

- **"Canary Islands / Río de la Plata / US Spanish are where the split is not clean."**
  **CUT.** The prompt named these as places to check. I found **no source I could fetch and
  verify** that documents `echar de menos` vs `extrañar` distribution in the Canaries,
  the Río de la Plata or US Spanish specifically. The DPD gives me Chile, Colombia,
  Argentina, Spain and Costa Rica as citation codes — real, but that is attestation, not a
  distribution claim. Printing the Canaries claim would have been exactly the unsourced
  region table I am criticising burbujadelespanol for. Re-check trigger: a successful
  CORPES interactive query with the geographic filter set to *Caribe* / *Río de la Plata*.
- **Leipzig frequency figures for `extraño` / `extrañar`.** **CUT** — `extraño` conflates
  adjective and verb without POS tags (§5.5).
- **Any per-country figure from SubhSandesh's own database.** **CUT and disclosed** — the
  database records which *template* was opened, never who received it, and **nothing in it
  is segmented by language or country.** No figure in this post is Spanish or Mexican.
- **"Nobody on this SERP cites a dictionary" as an absolute.** Softened: montonesdepapeles
  does mention the RAE, from memory and without an entry reference. Stated that way.
- **A claim that one form is "more emotional" or "more intense."** **CUT.** The #2 page
  asserts an intensity ladder (`te extraño` → `te extraño mucho` → `te extraño un montón`)
  with no source. Neither the DLE nor the DPD supports a difference in emotional force
  between the two forms.

---

## 9. Product disclosure carried into Spanish body prose

- `/missyou-gf` is an **English-language page with English labels, prompts and furniture**.
  Stated plainly in Spanish in the body, not only in the audit.
- Where it is **genuinely wrong for this reader**: if the recipient does not read English,
  the page's navigation is an obstacle wrapped around a Spanish letter. Said outright.
- The honest positive, and it is narrow: the letter, memories and open-when fields take
  whatever text is typed, so the Spanish stays Spanish. The PNAS finding (§7 source 4)
  gives the real reason this matters — affect labeling down-regulated the amygdala **only
  in the dominant native language** in unbalanced bilinguals (N = 151).
- **Pricing:** `facts.md` Pricing is **EMPTY**, so the post makes **no price claim in any
  language** — no *gratis*, *gratuito*, *sin costo*, no figure, no tier. It says the
  conditions cannot be confirmed here and links `/templates`.
- Alternative from `oneOfLinks`: **`/capsule`**, with the reason — it suits the reader whose
  missing is about *time* (a year apart, a countdown to a shared date) rather than distance.

## 10. Mandatory first-party caveats, all in Spanish body prose

1. City, background music and "together since" are **pickers with defaults**; their fill
   rates are not sender choices. Deliberately excluded from the post's table.
2. `viewCount` is **page views, not unique visitors**.
3. **n = 214, two months** (template live 2026-07-28) — no seasonal claim.
4. The database records **which template was opened, never who received it**, and **nothing
   in it is segmented by language or country.**

**Differentiation is thin and it is declared:** these 12 miss-you lines are shared with 54
sibling posts. This post leans on the least-collided pair it could find — median letter
length (88 words) and the reunion-date rate (28.0%) — because both are about *what a sender
writes*, which is what this keyword is about. The overlap remains real.
