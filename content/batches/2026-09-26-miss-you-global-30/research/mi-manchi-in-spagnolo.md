# Research brief — `mi manchi in spagnolo`

- **Batch**: `2026-09-26-miss-you-global-30`
- **Row**: `mi-manchi-in-spagnolo` · tier `A-translate` · region `it-it` · bodyLanguage **Italian**
- **Written**: 2026-09-26
- **Siblings on disk**: `mi-manchi-in-inglese` (IT→EN), `diferencia-entre-te-extrano-y-te-echo-de-menos` (ES internal pair)

---

## Phase 0 — Data gate

Source: `content/batches/2026-09-26-miss-you-global-30/facts-snapshot.md` (pinned), **not**
`content/facts.md`.

Collision counts across the ten sibling blogs already on disk were measured before choosing
(script: count of `batchMeta.factsUsed` strings across `blogs/*.json`):

| Fact line | posts already using it |
|---|---|
| 47 distinct city pairs / 15-city picker | 2 |
| 1,434 "hug" taps, 138 of 214 pages | 2 |
| 43.5% password-protect | 3 |
| 2,417 recorded views | 3 |
| 92.1% "open when" letters | 4 |
| 28.0% reunion date / median letter 88 words | 5 |
| 2.6h edit gap / 88.8% published / 13.6% voice note | 6 |
| 86.4% written memories | 8 |
| 214 pages, 4.1% of 5,221 | 9 |

`mi-manchi-in-inglese` used the 2.6h / 88.8% / 86.4% / 214 set. This post deliberately takes the
**two least-collided lines** (47 city pairs; 1,434 hug taps) for the first 150 words, plus 43.5%
password and 2,417 views. Overlap with the Italian sibling: **zero lines**. Overlap with the
Spanish sibling: two lines (43.5%, 2,417).

**The differentiation is still thin** and is recorded as such in the audit: twelve lines are
shared by 54+ posts, and no permutation of them is genuinely unique. Mandatory disclosures
carried in body prose, in Italian: (1) pickers with defaults are not sender choices, (2)
`viewCount` is page views not unique visitors, (3) n = 214 over two months, (4) **nothing in the
database is segmented by language or country and it records which TEMPLATE was opened, never who
received it** — so no figure here is Italian or Spanish.

---

## Phase 1 — SERP

### Route, and why

- `scripts/serp-ddg.mjs` — run **once**, as BRIEF §3 instructs. `html.duckduckgo.com:443`
  `UND_ERR_CONNECT_TIMEOUT`. Stopped immediately; did not retry.
- `scripts/serp.mjs` (Brave) — not attempted; BRIEF records a hard 429.
- **Google served to it-IT in the operator's real browser**, `gl=it&hl=it&pws=0&num=20`, is the
  route that produced the measurement below. **One clean run, 2026-09-26.**
- **Second confirmation run FAILED**: Google returned `/sorry/index` on the immediate re-run and
  again a few minutes later. So this SERP has **one run, not two**.
- **Bing `mkt=it-IT&setlang=it` in the real browser returned an explicit zero-result page**
  ("Non sono disponibili risultati per mi manchi in spagnolo"). The BRIEF's Bing fallback, which
  worked for another row, **did not work for this query**. Recorded as a negative.
- **Browser contention was observed directly**: mid-session a scrape came back as
  `google.com/sorry/index?continue=…saudade+em+inglês…&hl=pt-BR`, i.e. another agent's Portuguese
  query inside my tab. That result was **discarded, not recorded**, and the page re-fetched.
  Every scrape below was self-authenticated: the returned titles are Italian and contain the
  query terms.

### Measured SERP — Google `gl=it&hl=it&pws=0`, 2026-09-26

Google returned **8 organic results** in the rendered page (`scrollHeight` 1039px; a smart-scroll
added nothing, so 8 is what was served, not 8 of 10 seen). **Counted: 8 of the 8 I actually saw.**

| # | Host | Page type | Verdict |
|---|---|---|---|
| 1 | `context.reverso.net` | machine-aligned bilingual example bank | weak |
| 2 | `spanishschoolvalencia.com/it/` (El Rincón del Tándem) | language-school blog post, Italian, ~1,325 words | **the only genuine Italian editorial** |
| 3 | `it.bab.la` | dictionary aggregator (403 to a script) | weak |
| 4 | `reddit.com/r/learnspanish` (thread `4hqegy`, `?tl=it`) | forum thread, **written in English** | weak |
| 5 | `it.glosbe.com` | aggregator, ~327 words, headed "Traduzioni automatiche" | weak |
| 6 | `wikihow.it` | translated how-to, ~2,639 words, sources are `spanishdict.com` | weak |
| 7 | `tiktok.com/@spem_es/video/7536464703103585558` | short video, not a page | weak |
| 8 | `dizionario.reverso.net` | Reverso again | weak |

**Weak count: 7 of 8.** Reverso takes 2 of the 8 slots. **Zero of the eight cite the RAE, the
DLE, the DPD, Treccani, the Crusca, or any corpus.** The one editorial result (#2) cites no
dictionary either — its authority claims are unsourced.

### Gate 4 — verdict: **PROCEED**

The top 10 is not strong Italian editorial. It is one language-school blog post and seven
aggregators, a forum thread in the wrong language, and a video. A dictionary-grounded,
corpus-counted Italian page has a real gap to fill. (Compare: the Italian sibling measured 9/10
weak on a different query; this is 7/8 weak on mine, measured independently.)

### Checkable errors found in ranking results

**#6 `wikihow.it`, section "Dire a Qualcuno che ti Manca", step on `te extraño`:**

> «il verbo extrañar significa "perdere", mentre *te* corrisponde al pronome "tu". Letteralmente,
> il termine si traduce con "ti perdo".»

Two errors in one sentence, both checkable against the DLE:

1. **`extrañar` does not mean "perdere".** `dle.rae.es/extrañar` gives eight senses; none is
   *perder*. Sense 2 is «Echar de menos a alguien o algo, sentir su falta». The etymology is
   `extraneāre` 'tratar como a un extraño' — *to treat as a stranger*, not *to lose*.
2. **`te` in `te extraño` is the direct-object pronoun, not the subject pronoun `tú`.** The same
   page **contradicts itself** three steps later: «la persona con cui stai parlando resta il
   complemento oggetto della frase». So "ti perdo" is wrong on both halves.

**Secondary, softer (reported as a divergence, not an error):** both #2 and #6 present the
`te extraño` = Latin America / `te echo de menos` = Spain split as a rule. The DLE marks
**neither verb regionally** — `extrañar` carries no regional mark on any of its eight senses.
This is the finding the Spanish sibling established from the DPD, independently re-verified here
from the DLE entries.

**#2 `spanishschoolvalencia.com`** asserts a "differenza molto sottile" by which native speakers
use `echar en falta` for plain absence and `echar de menos` for emotion. **The DLE records no such
split**: `dle.rae.es/falta` gives «echar en falta 1. loc. verb. Echar de menos» flat, and
`dle.rae.es/echar` files *both* readings inside `echar de menos` itself («1. Advertir o notar su
falta. 2. Tener sentimiento y pena por su falta»). Reported in the post as "the DLE does not
record that distinction", not as an error — the school may be describing real usage the
dictionary has not codified.

---

## Phase 2 — Gap analysis

**Table stakes** (all or most of the eight cover these): that `te extraño` and `te echo de menos`
both exist; a regional gloss; conjugation of at least one of them.

**The gap** — nothing on this SERP does any of the following:

1. Names **which of the two languages moves the subject**, with a dictionary label for each side.
2. Tests **`me haces falta`** — the form that keeps the Italian shape — **against the DLE**.
   #6 mentions it and glosses it as "mi causi la mancanza" from intuition, citing spanishdict.
3. Asks whether **`me faltas`** works. `faltar` is the direct cognate of `mancare`; not one of
   the eight raises it.
4. **Counts anything.** No result on this SERP carries a single attested-usage number.

**Stale / unsourced data**: #6's only references are `spanishdict.com` pages. No result cites a
dated dictionary edition.

**Fan-out sub-queries** → H2 map:

| Sub-query | H2 |
|---|---|
| come si dice "mi manchi" in spagnolo | *Le tre opzioni spagnole, e quale mandare davvero* |
| perché lo spagnolo gira la frase | *Chi è il soggetto: due lingue che non sono d'accordo* |
| te extraño o te echo de menos | *Le 22 frasi attestate: come lo spagnolo rende davvero «mi manchi»* |
| "me haces falta" cosa significa | *«Me haces falta»: stessa forma dell'italiano, significato diverso* |
| si può dire "me faltas" | *«Me faltas» non vuol dire «mi manchi»* |
| è vero che in Spagna si dice diversamente | *Un errore verificabile in un risultato che si posiziona oggi* |

**Angle** (→ `batchMeta.angle`): wins by being the only post that tests all three Spanish options
against the DLE and counts how the Italian→Spanish alignments actually go — 22 attested Tatoeba
`mi manchi` sentences, **22/22 with the speaker as subject, 0 keeping the Italian shape and 0
using `me haces falta`** — and that checks the cognate `faltar`, which no ranking result mentions.

---

## Phase 3 — Sources

### Verified first-hand, 2026-09-26

**1. Treccani, `mancare`** — `https://www.treccani.it/vocabolario/mancare/` (HTTP 200, full entry
read). Headword `v. intr. e tr. [der. di manco] (io manco, tu manchi, ecc.)`. Sense **1** is
`intr. (aus. essere)`; sense **1.c** reads: «**Con il compl. di termine**, in frasi quali *mi
manchi*, *mi sei mancato*, *ci mancherai*, *ci manca molto* e sim., riferite a persona di cui si
sente, si è sentita o si sentirà la lontananza, e quindi il desiderio e il rimpianto». The same
1.c carries the death euphemism («è mancato all'affetto dei suoi cari») and the Manzoni citation
(«volete voi mancarmi ora?»). Sense **2** is `intr. (aus. avere)` — «Essere privo (di qualche
cosa)», *mancare di coraggio* — so Italian splits *lack* (aux. **avere**, person = subject) from
*be missed* (aux. **essere**, missed person = subject). Sense 1.a also gives `gli manca una (o
qualche) rotella`.
→ **Label used in the post: `complemento di termine`, Treccani's own words. Not "dative".**
(The Italian sibling established this label; independently re-fetched and re-read here.)

**2. DLE, `faltar`** — `https://dle.rae.es/faltar` (reached via the real browser; a scripted
fetch 403s on Cloudflare). **Eleven senses, read in full. Not one of them is "to miss a person
affectively."** Sense 1 «Dicho de una cualidad o de una circunstancia: No existir en lo que
debiera tenerla»; sense **2 «Consumirse, acabar, fallecer»** (the same death euphemism as Italian
`mancare`); 4 «No acudir a una cita u obligación»; 5 «Estar ausente del lugar en que suele
estar»; 7 «No corresponder a lo que es, o no cumplir con lo que debe. *Faltó a la lealtad*»;
8 «Dejar de asistir a alguien»; 9 «Tratar con desconsideración o sin el debido respeto a
alguien»; 10 «Tener que transcurrir el tiempo que se indica»; 11 `desus.` «carecer».
→ **`me faltas` therefore reads "you fail me / you are absent / you disrespect me", not "I miss
you."** This is the false-friend finding.

**3. DLE, `falta`** — `https://dle.rae.es/falta` (real browser). The locution **`hacer falta`**:
«1. loc. verb. Dicho de una persona o de una cosa: **Ser precisa para algún fin.**» And
**`hacerle a una persona falta alguien o algo`**: «1. loc. verb. **No tenerlo cuando sería
necesario o provechoso.**» Also «echar en falta 1. loc. verb. Echar de menos».
→ **`me haces falta` is defined by the RAE as necessity and usefulness, not as affection.** It is
the structural twin of `mi manchi` with a different semantic load. The prompt's hunch — "may carry
a different weight (need vs missing)" — **is confirmed by the dictionary.**

**4. DLE, `echar`** — `https://dle.rae.es/echar` (real browser). **`echar de menos algo o a
alguien`**: «1. loc. verb. Advertir o notar su falta. 2. loc. verb. **Tener sentimiento y pena por
su falta.**» Also `echar menos algo o a alguien` = `echar de menos`. Two senses, one neutral and
one affective, inside the same locution.

**5. Tatoeba, ita→spa** — `https://tatoeba.org` via `api_v0/search` (`from=ita`, `to=spa`,
`trans_to=spa`), measured 2026-09-26. The loose query `"mi manchi"` returns **116** sentences;
**all 116 were paginated and filtered** on the literal Italian string, leaving **22 strict
matches**. Of those 22:

| Spanish rendering | sentences carrying it (non-exclusive — one Italian sentence often has several Spanish alignments) |
|---|---|
| `echar de menos` | **15** |
| `extrañar` | **10** |
| `hacer falta` | **0** |
| `faltar` | **0** |
| `añorar` | **0** |
| **speaker as Spanish subject** | **22 of 22** |
| **keeps the Italian shape** | **0 of 22** |

And the cognate test, which is the sharper result:

- **`mi manca` + a thing → `faltar`.** Strict `"mi manca un"`: **2 of 2** use it —
  *Mi manca un calzino* → *Me falta un calcetín* (#6910665); *Mi manca un libro!* → *¡Me falta un
  libro!* (#1315627).
- **`mi mancano` + people → never `faltar`.** Strict `"mi mancano"`: **0 of 4** —
  *Mi mancano i miei bambini* → *Extraño a mis hijos* / *Echo de menos a mis hijos* (#2565313).
- **Spanish corpus, strict `"me faltas"` (2sg, a person): 0 sentences.** Nine loose matches, none
  of them the actual string — they are *Me falta pintura*, *Me falta paciencia*, *Me faltaban
  palabras*, *¡Me falta un libro!*, *Me falta un calcetín*.
- **Spanish corpus, strict `"me hace falta"`: 9 sentences, every one of them a thing** — harina,
  dinero, un calcetín, un martillo. **Six of the nine are aligned to Italian `ho bisogno di`**
  ("I need"), not to `mi manca`: e.g. #1172323 *Me hace falta dinero* → *Ho bisogno di soldi*;
  #436816 *Me hace falta un martillo* → *Ho bisogno di un martello*. Strict `"me haces falta"`
  (2sg): **0**.
- Cross-reference to the sibling rows: Italian sibling, ita→eng `mi manchi` = **32** sentences,
  32/32 subject-flipped. Spanish sibling, Spanish corpus: `extraño` 53 / `echo de menos` 15 /
  `añoro` 1. Both counts stand; mine is the ita→spa pair neither measured.

**6. Del Maschio N., Sulpizio S., Bellini C., Del Mauro G., Giannachi M., Buga D., Fedeli D.,
Perani D., Abutalebi J. (2024), "Neurocognitive mechanisms of emotional interference in native and
foreign languages: evidence from proficient bilinguals", *Frontiers in Behavioral Neuroscience*
vol. 18, doi 10.3389/fnbeh.2024.1392005, PMC11337870.** Unpaywall checked **before** citing:
`is_oa: true`, `oa_status: gold`, licence CC BY, publisher Frontiers Media SA, published
2024-08-07. **Abstract only — the PDF does not parse in this environment**, and the post says so.
Sample: **proficient Italian–English bilinguals** who learned the L2 in instructional rather than
immersive contexts. Finding, quoted conservatively: **no detectable behavioural effects**, but
stronger activation for L1 than L2 emotional words in posteromedial cortex, "consistent with the
hypothesis of a stronger emotional resonance when processing words in a native language."
→ Used with two explicit limits in the body: the L2 was **English, not Spanish**, and the
behavioural measures showed **nothing** — the effect is hemodynamic only.

### Cap check

`node content/batches/2026-09-26-miss-you-global-30/capcheck.mjs` run immediately before writing:
no banned URL used in the batch, no domain at cap, no URL at cap. Journals named so a human can
check: **Frontiers in Behavioral Neuroscience** — new to this batch (the batch's Frontiers usage
so far is *Frontiers in Psychology*, a different journal, in two posts). Deliberately avoided per
the row prompt: **PMC13552847 (PNAS)** — already in three sibling posts — plus `doi.org`,
`journals.plos.org`, MDPI *Languages* 11(3):36 and the Vietri chapter. PLoS candidates surfaced by
`findpapers.mjs` (PMC3651159, PMC12221082) were **rejected on that ground, not on quality**.

`treccani.it`, `dle.rae.es` and `tatoeba.org` are cap-exempt reference instruments per
`verify.config.json`. Three DLE entries are three different headwords, each fetched and each
quoted for what it actually says.

### Searched and found nothing usable

`findpapers.mjs` queries run (Crossref + Europe PMC, **zero WebSearch calls this row**):
`false friends Italian Spanish cognates cross-linguistic influence`;
`Italian Spanish closely related languages transfer intercomprehension learners` (Europe PMC
returned **no results at all**); `expressing love affection emotion words second language romantic
partner`; `emotional resonance first language versus second language emotion words bilinguals`.
**No open-access study of Italian speakers producing Spanish affective formulae exists that I
could reach.** The closest reachable work is the Italian–English fMRI study above, and the
mismatch is disclosed rather than papered over.

### Instruments that did not resolve

- `dle.rae.es` and `rae.es/dpd/*` **403 Cloudflare to any scripted fetch** ("Just a moment…").
  All four RAE entries were read in the operator's real browser instead. Recorded.
- **Every RAE corpus host (CORPES XXI, CREA) 403s a script**, as the BRIEF states; no frequency
  figure from them appears in the post. Tatoeba carries the counting instead, and the post says
  which corpus it is and how small.
- `en.wiktionary.org/wiki/faltar` resolves (parse API, 200) and its Spanish section gives five
  senses — lack, remain, be absent, miss an appointment — **and no affective "miss a person"
  sense**, corroborating the DLE. Verified but **not linked**, to stay inside the 6-outbound-link
  ceiling.
- `dle.rae.es/extrañar` was fetched and read in full (8 senses, no regional mark, sense 2 «Echar
  de menos a alguien o algo, sentir su falta», etymology `extraneāre`). **Quoted in the body,
  deliberately not hyperlinked** — same ceiling. The Spanish sibling carries that link.
- `dle.rae.es/menos` was checked on the chance it filed the locution: it does **not**.
  `echar de menos` lives under `echar`. Negative recorded.
- `context.reverso.net`, `it.bab.la`, `dizionario.reverso.net` all **403** a scripted UA; ranked
  positions 1, 3 and 8 are recorded from the SERP itself and their page type inferred from the
  title and the host, not from a fetched body. Stated.
- `reddit.com` returned a 1-word shell to a script; its language (English) is from the SERP title
  and the thread URL.

---

## Phase 4–5 — Draft, links, targeting

- Body target **~1,750 words excluding FAQs** (verifier hard-fails outside 1,500–1,800; four
  posts in this batch sit at 1,789–1,800 and a later cross-link pass would break them).
- **FAQs live in `article.faqs` and the FAQPage JSON-LD only.** 10 FAQs, Italian, none restating
  a body H2.
- `templateUrls`: `/missyou-gf` (mandatory), `/streak`, `/templates` — all three verified present
  in `TEMPLATE_LINKS`, `app/lib/prompt.ts`.
- **`/missyou-gf` is defined at `app/lib/prompt.ts:44` as "'I miss you' page for a
  girlfriend/partner" — read at source.** It is an **English-language** page with English labels.
  My reader is Italian and writing in Spanish, so it is mismatched **twice over**, and the post
  says so in Italian body prose in its own H2, before the link.
- Cross-links owed and paid: `/blog/mi-manchi-in-inglese` (the Italian side of the grammar, and
  the ita→eng count) and `/blog/diferencia-entre-te-extrano-y-te-echo-de-menos` (the internal
  Spanish pair). **The split in one sentence:** the Italian sibling asks what happens to
  `mi manchi` in English, the Spanish sibling compares two Spanish forms for Spanish speakers —
  **this post is the only one of the three that asks which Spanish form an Italian should choose,
  and it is the only one that tests the cognate `faltar`.**
- `categorySlug`: `miss-you-across-miles`.
- Price guard: `pricecheck-intl.mjs` run against this slug before saving; no banned Italian term
  and no `abbonamento` / `prezzo`.
