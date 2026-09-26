# Research brief — `sinto-sua-falta-em-ingles`

- **Keyword:** `sinto sua falta em ingles` · **Region:** `br-pt` · **Body language:** Portuguese (pt-BR)
- **Tier:** A-translate · **Category:** `miss-you-across-miles` · **Templates:** `/missyou-gf`, `/streak`, `/templates`
- **Date of all measurements:** 2026-09-26
- **Gate 2 / Gate 4 verdict: PASS — write.** 10 of 10 measured results are weak.

---

## 1. Phase 2 — SERP measurement, route and self-authentication

### Routes tried, in order

| Route | Result |
| --- | --- |
| Google `gl=br&hl=pt-BR&pws=0`, real browser | `/sorry/index` on first navigation — as BRIEF §3 predicted |
| `scripts/serp-ddg.mjs` (run **once**, per BRIEF) | `UND_ERR_CONNECT_TIMEOUT` on `html.duckduckgo.com:443` |
| `html.duckduckgo.com` / `lite.duckduckgo.com` in browser | navigation timeout, 30 s |
| Bing RSS `format=rss&setmkt=pt-BR`, sandboxed fetch | HTTP 200, channel title correctly echoed, **0 `<item>` elements** on 4 query variants |
| **Bing `mkt=pt-BR`, real browser (Playwright), DOM read** | **WORKED — this is the measurement** |

The Bing RSS route a sibling used successfully this morning no longer returns items
from this IP. Reported so the next agent does not spend time on it.

### Contention — caught twice, discarded twice

1. PolterTab shared tab, after my navigation to `duckduckgo.com/?q=…&kl=br-pt`:
   returned a **German-language Bing page**. Discarded.
2. Next navigation, to `html.duckduckgo.com/html/?q=sinto+sua+falta+em+inglês`:
   `browser_get_url` returned
   `bing.com/search?q="ich+vermisse+dich"+auf+türkisch&mkt=de-DE` —
   **another agent's keyword, another agent's market.** Discarded.
3. Passing a fresh `session` name did **not** isolate the tab: the second session
   returned the identical German page. Confirms the BRIEF's correction.

The Playwright browser is also shared (its tab 0 held another agent's
`bonobology.com/de/…` page for the whole session) but per-tab navigation was
verifiable. **Every position below comes from a page whose own `input[name=q]`
contained my query and whose `documentElement.lang` was `pt`.**

### A Bing artefact worth naming

The **unquoted** query returned an empty result set (`#b_results` holding a single
`li.b_no`) on two consecutive loads. A **control query** — `saudade em inglês como
se diz`, a sibling's keyword — returned 10 results on the same route seconds later,
and the **quoted** variant of my own query returned 10. On a third load the unquoted
query returned its 10. The zero was transient. A single load would have produced a
false "this keyword has no SERP" finding.

### The measured top 10 (Bing, `mkt=pt-BR`, real browser, `cite` elements read)

| # | Host | Type | Weak? |
| --- | --- | --- | --- |
| 1 | linguee.com.br | MT aggregator | yes |
| 2 | pt.bab.la | MT aggregator | yes |
| 3 | youtube.com | video, 13 Feb 2026 | yes |
| 4 | pt.glosbe.com | MT aggregator | yes |
| 5 | dictionary.reverso.net | MT aggregator | yes |
| 6 | linguee.com | MT aggregator (EN-facing duplicate of #1) | yes |
| 7 | letras.mus.br | song lyric (Silverchair, *Miss You Love*) | yes |
| 8 | letras.com | song lyric (Ferrugem, *Sinto a Sua Falta*) | yes |
| 9 | context.reverso.net | MT aggregator | yes |
| 10 | pt.bab.la | MT aggregator (duplicate of #2) | yes |

**Weak count: 10 of 10, all ten actually seen.** Four aggregator brands occupy seven
slots, two of them duplicated. **Zero dictionaries with a real entry, zero grammar
pages, zero Brazilian editorial pages.** This is a materially weaker SERP than the
sibling `saudade-em-ingles-como-se-diz` measured (6/10 weak, English-teaching blogs).

**SERP furniture:** a Bing translation widget rendered above the organic results
(`#b_results` text begins "Detecção automática Portuguese (Brazil) Turkish …").
Observed on **Bing**, not Google. No claim is made about Google's widget.

### Checkable error in a ranking result

**Reverso, rank 5** (rank 3 on the quoted variant) labels the whole clause an
**adverb**, three times on one page:

- heading: `Translation of sinto sua falta from Portuguese into English adverb Adverb I miss you adv.`
- `<meta name="description">`: `Translations of "sinto sua falta" into English: I miss you. Adverb, definitions, …`

*Sinto* is the 1sg present indicative of *sentir*, which **Priberam** labels
`verbo transitivo`; *falta* is `nome feminino`. Neither *sinto sua falta* nor
*I miss you* is an adverb. The gloss is right and the word class is wrong, and both
halves are checkable in one dictionary.

---

## 2. The lane — how this row differs from its three Portuguese siblings

| Sibling | Its object | Its central evidence |
| --- | --- | --- |
| `saudade-ou-saudades-qual-o-certo` | orthography / number | VOLP registers two headwords, `s.f.` vs `s.f.pl.` |
| `o-que-significa-saudade` | the noun's meaning | Real Academia Galega registers *saudade* with two synonyms |
| `saudade-em-ingles-como-se-diz` | translating the **noun** | 142 Tatoeba pairs, 87.3% rendered with the verb *miss* |
| **this row** | the **verb phrase** *sentir a falta de* | 210 Tatoeba pairs, **97.1%** rendered with *miss*; the pronoun and article questions |

**The split, with authority.** Priberam gives *falta* eight noun senses and **none is
an emotion** (ato de faltar, ausência, privação, não comparência, conduta reprovável,
transgressão religiosa, infração desportiva, falecimento), against *saudade* sense 1
"Lembrança grata de pessoa ausente" — an emotion inside the noun.

> **In *saudade* the feeling is in the NOUN. In *sinto sua falta* the feeling is in
> the VERB — and English also puts it in a verb, *miss*. That is why the phrase
> crosses cleanly and the word does not.**

---

## 3. Dictionary findings (headword read on every page before citing)

### Priberam, `/pt-br/falta`
Eight senses, none emotional. Locutions listed: `à falta de`, `em falta`,
`falta de chá`, `na falta de`, `ter falta de pau`. **`sentir falta` is NOT among
them.** Etymology: `latim *fallita … de fallo, -ere, enganar`.

### Priberam, `/Traduzir/EN/falta` and `/Traduzir/EN/sentir`
- *falta* → `lack; need; absence; shortage; miss; shortfall; misery` (+ 4 more senses)
- *sentir* → `to feel; to sense; to experience; to appreciate`

Compose them and you get **"I feel your lack"**. `miss` is present only as a **noun**
gloss inside *falta*. **The word-level dictionary cannot produce the right answer.**

### Michaelis, Português-Inglês (Moderno) — `r=1&t=1`
Under **`sentir`**, in Expressões, verbatim:

> **sentir falta de** *to miss*: **vou sentir muito a sua falta / I shall miss you very much.**

Under **`falta`**: `dar por falta de to miss: sentimos muito a falta dele / we miss him very much.`

**This is the only fetched source that answers the query at phrase level.**

### Michaelis, Dicionário Brasileiro da Língua Portuguesa (monolingual) — `r=0&t=0`
EXPRESSÕES under *falta*, in full: `Falta de ar`, `Falta de palavra`, `Falta dupla`,
`Falta máxima`, `Falta pessoal`, `Falta recíproca`, `Falta técnica`, `À falta de`,
`Fazer falta`, `Sem falta`. **`Sentir falta` is absent.** The *sentir* entry has 14
senses, none of them "feel the absence of someone"; sense 2's example is
*"A moça vivia suspirando porque sentia **saudade**."*

**Same publisher, same site: the bilingual edition lemmatises the locution and the
Brazilian monolingual one does not, and it sends you back to *saudade*.**

### Aulete — fetched, verified, then CUT from sources
Sense 3 example: *"Todos sentiram a sua falta."* Sense 9: *"ainda sente muito a falta
dos pais."* Agrees that *falta* has no emotional sense. Cut only to hold the outbound
link count down.

---

## 4. The pronoun verdict

### Authorities
**Ciberdúvidas, Carla Marques, 17 May 2022** (`/a-expressao-sentir-a-falta-de-alguem/36971`):
- `«sinto a falta»` alone, with no complement, **is not acceptable** — *falta* requires
  a `de`-complement, or a possessive in its place.
- For a 2nd person, "o sintagma introduzido por *de* será substituído pelo possessivo *tua*".
- `(5) «Sinto a tua falta / Sinto a falta de ti / ?Sinto-te a falta»`, where `?` is
  defined on the page as "aceitabilidade duvidosa".
- **The ambiguity, stated outright:** the clitic construction "é equivalente a
  «sinto a sua falta» ou «sinto a falta dele»" — *sua* and *dele* used interchangeably
  in one sentence by the authority itself. Third-person `sinto-lhe a falta` is attested
  in Raul Brandão (*Húmus*) and Eça de Queirós (*Alves e Companhia*).

**Ciberdúvidas, Carlos Rocha, 8 May 2017** (`/sentir-falta--sentir-a-falta/34310`):
- "Os dois usos estão corretos, mas correspondem a significados ligeiramente diferentes."
- Without the article, *falta* is "como que um mero modificador de *sentir*" (vague).
- With it, `sinto a falta` = "apercebo-me da ausência de alguma coisa/alguém" — a
  concrete referent, or one already in the discourse.
- "A diferença … não é uma questão de grau de correção. É antes uma questão semântica."

### Measurements
| Instrument | *seu/sua* | *teu/tua* | *de você* |
| --- | --- | --- | --- |
| Sousa 2025, ALFMA corpus, 72 spoken interviews, Caxias-MA (n=56) | **50 (89%)** | **6 (11%)** | — |
| Tatoeba, my 210 *sentir*+*falta* pairs | **57** | **13** | **3** |

(Tatoeba also: `falta dele/dela` 22, `minha falta` 12.)

**Why *sua* is ambiguous — the documented mechanism.** Rumeu & Pedrosa 2024
(*LaborHistórico*, UFRJ), Brazilian letters 1869–1907: the insertion of *você* into
the pronoun system "repercutiu na seleção do *seu* também para a referência ao
interlocutor ao lado do etimológico *teu/tua*".

**VERDICT:** write **`sinto sua falta`**. Use `sinto a falta de você` only where the
context could read as 3rd person. `tua falta` is not wrong — it is more intimate and
more regional, and co-occurs with *ti*. **English erases the whole question: `your`
is second person only.**

---

## 5. Tatoeba measurements (api_v0, exact substring after NFD accent-strip)

- **636** Portuguese sentences containing *falta* with an English translation.
- **210** of them contain a form of *sentir* + *falta*.
- **204 (97.1%)** are rendered with the English verb **miss**.
- English verb forms: `miss` 146, `missed` 38, `misses` 16, `missing` 4.
- Only **6** do anything else; only **2** use *absence*, both the same pair:
  *"Seus amigos vão sentir sua falta"* → *"Your friends will regret your absence."*

### The "closer phrasal equivalent" check — the *I yearn for you* equivalent
| English phrase | Exact sentences in the English Tatoeba corpus |
| --- | --- |
| `I miss you` | **23** |
| `I missed you` | **10** |
| **`feel your absence`** | **ZERO** |

**`I feel your absence` is unattested.** It composes from the dictionary and nobody
writes it. Caveat recorded in the post: Tatoeba is contributor-built, so zero means
unattested there, not nonexistent — but it is the same instrument that returns 23
`I miss you`, and the asymmetry is the finding.

### Exact pairs used in the body
- `Sinto sua falta.` → `I miss you.`
- `Sinto a tua falta.` → `I miss you.`
- `Eu sinto falta de você o tempo todo.` → `I miss you all the time.`
- `Senti sua falta!` → `I missed you.`
- `Também senti sua falta.` → `I missed you too.`
- `Tom, sinto a sua falta.` → `I miss you, Tom.`

**Contrast with the sibling, same instrument, same method:
noun *saudade* → *miss* in 87.3% of 142 pairs; verb phrase *sentir falta* → *miss* in
97.1% of 210 pairs.**

---

## 6. Lines CUT and why

1. **"*sentir a falta de* is the dictionary-registered locution"** — CUT. Priberam
   lists five locutions under *falta* and this is not one; Michaelis's Brazilian
   monolingual edition does not list it either. The cut became §3 of the post.
2. **Google Books Ngram frequency comparison** — CUT. In `pt-2019`, 1990–2019,
   smoothing 0, every relevant 2-, 3- and 4-gram returns **NO SERIES** (below the
   inclusion threshold) *except* `sua falta`. Control 3-gram `de que a` returns
   normally, so the instrument was alive. Reporting "*sua falta* has a series and
   *tua falta* does not" as a frequency result would have overstated a threshold
   artefact.
3. **Unigram ratio** (`falta` 3.057e-8 vs `saudade` 1.332e-8, same corpus) — CUT.
   *falta* is polysemous (football fouls, workplace absences), so the ratio measures
   nothing about missing someone.
4. **Aulete** — fetched and verified, cut from `sources` for link count only.

---

## 7. Sources emitted (10) — journals named by hand for the cap

| # | Source | Cap-relevant name |
| --- | --- | --- |
| 1 | Priberam, `/pt-br/falta` | exempt instrument |
| 2 | Priberam, `/Traduzir/EN/falta` | exempt instrument |
| 3 | Michaelis PT-EN (Moderno), *sentir* | exempt instrument |
| 4 | Michaelis monolingual, *falta* | exempt instrument |
| 5 | Ciberdúvidas 34310 (Carlos Rocha, 2017-05-08) | exempt instrument |
| 6 | Ciberdúvidas 36971 (Carla Marques, 2022-05-17) | exempt instrument |
| 7 | Tatoeba, `falta` por→eng | exempt instrument |
| 8 | Sousa 2025, doi:10.54033/cadpedv22n5-254 | **journal: *Caderno Pedagógico*** (Brazilian Journals) |
| 9 | Rumeu & Pedrosa 2024, doi:10.24206/lh.v10i2.61358 | **journal: *LaborHistórico*** (UFRJ) |
| 10 | Reverso — cited as a measured SERP result, **not** an authority | `dictionary.reverso.net` |

- Both journals are **open access** (Unpaywall `is_oa: true`) and **abstract-only**
  reads through the Crossref API. Neither landing page nor PDF was fetched.
- **Neither is *Frontiers in Psychology* nor PNAS.** Neither appears in any sibling
  on disk. `doi.org` resolves to `brazilianjournals.com.br` and `revistas.ufrj.br`,
  both fresh in this batch.
- **Zero WebSearch calls** were spent on this post.

---

## 8. First-party facts and the honest failure

Collision counts measured across the 19 posts on disk at write time. The three
least-used lines available were taken:

| Fact | Sibling posts already using it |
| --- | --- |
| Median miss-you letter length: 88 words; longest 1,024; n=214 | 5 |
| 43.5% password-protect (93 of 214) vs 38.5% platform-wide | 6 |
| 28.0% set a reunion date (60 of 214) | 6 |

**The differentiation item is FAILED in the audit, not caveated.** All 12 miss-you
lines are spent; the first-party section differentiates this post from outside
competitors but not from its own siblings.

Mandatory caveats, all in Portuguese body prose: pickers-with-defaults; `viewCount`
is page views not unique visitors; n=214 over two months since 2026-07-28 so no
seasonal claim; and **the database records which TEMPLATE was opened, never who
received it, and nothing is segmented by language or country — no figure here is
Brazilian.**

## 9. Product honesty

`/missyou-gf` is defined at `app/lib/prompt.ts:44` as an *"'I miss you' page for a
girlfriend/partner"* — verified at source. **Both** mismatches are disclosed in
Portuguese prose: an English interface for a Portuguese reader, and a romantic-partner
recipient for anyone writing to a parent, sibling or friend. The post also states
plainly that a reader who came only for the translation **needs nothing from us**.
`/streak` is offered as the genuine alternative for couples already apart, with the
reason. No commercial condition is claimed in any language; `pricecheck-intl.mjs`
passes.
