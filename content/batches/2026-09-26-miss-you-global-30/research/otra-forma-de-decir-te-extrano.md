# Research brief — `otra forma de decir te extraño`

- **Batch**: 2026-09-26-miss-you-global-30 (wave 2, last row)
- **Region**: `mx-es` · **bodyLanguage**: Spanish · **tier**: B-howto
- **Verdict**: **PROCEED**
- **Measured**: 2026-09-27

---

## 1. The split from `como-decir-te-extrano-sin-decirlo`

> That post owns **indirection** — saying it *without* saying it, with a diminutive, an
> *ojalá* + subjunctive, or a *reticencia* the DLE defines as concealing «de ordinario
> con malicia». **This post owns the opposite operation: saying it directly, in other
> words** — and concludes that Spanish barely has any.

Written honestly, cross-linked in the body, and stated in both directions: the closing
paragraph sends the "without saying it" reader back to the sibling.

Splits from the other four Spanish siblings:

| Sibling | Owns | My lane |
|---|---|---|
| `diferencia-entre-te-extrano-y-te-echo-de-menos` | which of the **two** standard phrases, and regional marking | everything that is **not** those two |
| `te-echo-de-menos-significado` | the DLE's two numbered senses of the locution | the locutions the DLE gives to *falta*, *anhelar*, *añorar* |
| `te-extrano-en-ingles-como-se-dice` | Spanish → English | Spanish → Spanish |
| `carta-para-decir-te-extrano` | the letter format | the two-word declaration |
| `mi-manchi-in-spagnolo` (Italian body) | *me haces falta* / *me faltas* from the Italian side | extended with a **new, larger** Spanish corpus count |

---

## 2. SERP (Gate 4)

**Route 1 — `serp-ddg.mjs --region mx-es`: one call, "(no results parsed)".** No retries,
per BRIEF §3.

**Route 2 — Google served to Mexico in the real browser**, `gl=mx&hl=es-419&pws=0`,
2026-09-27. Loaded twice; **identical listing both times**. Self-authenticated on the
content actually read: my query, Spanish results, footer `Los resultados no están
personalizados · México`. Eight organic results seen, plus a video pack and an AI
Overview. I did not invent ranks I could not see.

| # | Host | Page type | Weak? |
|---|---|---|---|
| 1 | `languagetool.org/insights/post/word-choice-i-miss-you-synonyms` | **English** article, served with "Traducido por Google · Ver original (English)" — lists English alternatives | yes |
| 2 | `wikihow.com/Other-Ways-to-Say-I-Miss-You` | **English** how-to, machine-translated | yes |
| 3 | `quillbot.com/es/blog/expresiones-y-deseos/te-echo-de-menos` | native Spanish listicle, AI-writing-tool blog | yes |
| 4 | `baselang.com/blog/vocabulary/i-miss-you-in-spanish` | **English** blog for learners of Spanish, translated | yes |
| 5 | `reddit.com/r/AskWomen/...?tl=es-419` | **English** forum thread, auto-translated | yes |
| 6 | `languagetool.org/insights/es/publicacion/frases-para-decir-te-echo-de-menos` | native Spanish listicle; **cited by Google's AI Overview** | yes |
| 7 | `facebook.com/LaMejorCuernavaca/posts/...` | social post | yes |
| 8 | `serpadres.es/familia/48132.html` | established Spanish magazine, "50 frases" listicle | no |

Video pack: YouTube (LAE Madrid Spanish Language School), TikTok ×2.

**Weak count: 7 of the 8 I actually saw.** Four are English pages machine-translated into
Spanish that enumerate *English* alternatives; two are social; one is an AI-tool listicle.
Only `serpadres.es` is an established Spanish publisher, and it publishes a listicle with
no lexicographic citation.

**ZERO of the eight cite the DLE, the DPD, FundéuRAE or any corpus.**

**Gate 4: PROCEED.** The orchestrator's warning that a listicle-shaped query aborts against
strong national publishers (as in Brazil) does **not** hold here: this SERP is owned by
translated English pages and social posts, not by Spanish editorial.

---

## 3. Two checkable errors in ranking results

**(a) Result #1 — LanguageTool (English original), top two suggestions are «Mi corazón te
anhela» and «Anhelo estar contigo».**
[DLE `anhelar`](https://dle.rae.es/anhelar), read in the real browser, headword confirmed:
sense 1 is «Tener ansia o deseo vehemente de conseguir **algo**», illustrated
*Anhelar empleos, honras, dignidades*. Senses 2 and 3 are marked **desus.** The object of
*anhelar* is a thing one wants to obtain, not a person one misses. Tatoeba agrees: of 57
Spanish sentences with *anhelo*, what is longed for is «la paz», «algo inalcanzable»,
«sueños imposibles»; the two hits for «te anhelo» do not contain the phrase. It is a calque
of English *yearn* — and a sibling already established that "I yearn for you" returns zero
Tatoeba sentences.

**(b) Result #6 — LanguageTool (Spanish), model sentence «¡No sabes *cuándo* te echo en
falta!»** — interrogative *cuándo* where the exclamative *cuánto* is required, published by
a grammar-checking company, in an article whose third section explains how to spell
*te echo de menos*. Its list is also titled "10 formas de decir «te echo de menos» **sin
decirlo**" while item 4 is «Te extraño y extraño pasar tiempo contigo», which says it, and
six of its ten items are built out of the original's own vocabulary (*falta* ×4,
*extrañar* ×1, *añorar* ×1).

---

## 4. Every candidate, its subject, its register, and the DLE entry that licensed it

All entries read in the **real browser** (`dle.rae.es` returns HTTP 403 to every scripted
request — tested on five entries, all 403 with ~5.8 KB bodies). **Headword confirmed on
every page before citing.**

| Phrase | Grammatical subject | DLE entry and what it says | Regional / literary / dated? | Verdict |
|---|---|---|---|---|
| *te extraño* | the speaker | `extrañar` ac. 2: «Echar de menos a alguien o algo, sentir su falta»; 8 senses; Sin.: **añorar, recordar** | **not marked** | keep |
| *te echo de menos* | the speaker | `falta` → **echar en falta**: «Echar de menos» | not marked | keep |
| *te echo en falta* | the speaker | `falta` → **echar en falta**: «Echar de menos» — the *same locution*, different preposition | not marked | **not an alternative** |
| *me haces falta* | the person who is absent | `falta` → **hacer falta**: «Dicho de una persona o de una cosa: **Ser precisa para algún fin**»; *hacerle a una persona falta alguien o algo*: «No tenerlo cuando sería necesario o provechoso» | not marked | means **necessity**, not affection |
| *te añoro* | the speaker | `añorar` (del cat. *enyorar*): «Recordar con pena la ausencia, privación o **pérdida** de alguien o algo muy querido» | **not marked** regional, literary or dated | licensed but unattested in this use |
| *te anhelo* | the speaker | `anhelar` ac. 1: «Tener ansia o deseo vehemente de conseguir **algo**»; ac. 2 and 3 **desus.** | ac. 2–3 dated | **cut from the recommendations** |
| *siento tu ausencia* | the speaker | `ausencia`: 6 senses, **none is a feeling**; ac. 1 synonyms are *alejamiento, separación, abandono, huida, emigración, destierro*; ac. 4 is **Der.** («Condición legal de la persona cuyo paradero se ignora»); ac. 5 **Med.** | not marked | cold; the feeling has to come from the verb |
| *te necesito* | the speaker | `necesitar`: «Tener necesidad de alguien o algo»; from lat. mediev. *necessitare* '**obligar, compeler**'; Sin. include **exigir** | not marked | a demand, not a declaration of missing |
| *no es lo mismo sin ti* | — | **no DLE locution**; a paraphrase | — | cut from the table, kept in an FAQ |
| *cuento los días* | — | **no DLE locution**; a paraphrase, and it names the reunion, not the absence | — | cut from the table, kept in an FAQ |

**Cut and why:** *te anhelo* (the DLE gives *anhelar* a thing as its object, and zero
attestations); *no es lo mismo sin ti* and *cuento los días* (not locutions, zero
attestations in the 94 renderings — kept as FAQs because readers do ask about them);
*te necesito* and *siento tu ausencia* (moved out of the table into one paragraph, because
neither is a synonym and the body was over the word ceiling).

---

## 5. Tatoeba — every count, with survivors reported

The search is **tokenised**, so every raw hit was inspected individually.

| Query | Raw hits | Survived | What the rest were |
|---|---|---|---|
| `from=eng&to=spa "I miss you"` | **41** English sentences | **41 (100%)** — 26 *I miss X*, 15 *I missed X* | no false positives at all, which is unusual |
| → their Spanish renderings | **94** | 94 | **47 echar de menos, 45 extrañar, 2 hacer falta** ("Me has hecho falta" ×2), **0 añorar, 0 anhelar, 0 «tu ausencia», 0 «cuento los días»** |
| `from=spa "me haces falta"` | **24** | **0** | all 24 are *me hace falta* (3rd person) + an inanimate object: harina, dinero, un martillo, un calcetín, hilo, un cable tricolor, un medicamento |
| `from=spa añoro` | **38** | 32 verb uses (6 are the noun *añoranza*) | of the 32, **5** have a person as object (*a su marido*, *a su familia* ×2, *a sus padres*, «Te añoramos muchísimo» — 1st person **plural**); **not one is «te añoro»**. The rest: Boston, «mi país», «mi pueblo», la universidad, el verano, los tiempos de los zares, las tertulias, la comida tailandesa |
| `from=spa te anhelo` | **2** | **0** | one is the noun («dejaste solo anhelo en mi corazón»), one has a thing as object |
| `from=spa anhelo` | 57 | 57 | objects are *la paz, algo inalcanzable, un poco de tranquilidad, los mismos sueños, sueños imposibles* |
| `from=spa "tu ausencia"` | 11 | 11 | all administrative or neutral («Nadie se percató de tu ausencia», «Tienes que dar cuenta de tu ausencia», «Peter vino en tu ausencia»); **zero** are a declaration to the absent person |

**Distribution of the 94 renderings** — this is the finding that answers the keyword:
53 carry an intensifier, 15 a circumstance clause, 6 a vocative, 26 are bare.
**Three constructions, and all the variation is in the modifier.**

**A zero here is not proof of non-existence.** Tatoeba is small and volunteer-built; the
RAE corpora (CORPES, CREA) 403 a script and would have been the complementary check. The
post says "does not appear in the corpus", never "is not said".

---

## 6. Is "otra forma" honest advice?

**No, for the two-word declaration — and the post says so.** The Italian row proved it from
Treccani's *originale*, the French row concluded "keep the standard phrase and change the
detail", the Turkish row found TDK defining the alternatives **by means of** the original.
**Spanish falls exactly the same way, and harder**, because the proof here is lexicographic
rather than inferential: the DLE literally defines **echar en falta** as «Echar de menos»,
and gives *extrañar* only two synonyms, one of which (*añorar*) has zero attestations in
the second person.

**Yes, for the detail.** 53 of 94 renderings differ by an intensifier and 15 by a
circumstance. That is the honest recommendation the post makes, and it is what drove the
template swap.

---

## 7. Sources, journals, and what was read

| # | Source | Journal / publisher | Read |
|---|---|---|---|
| 1 | `dle.rae.es/extrañar` | RAE/ASALE, DLE 23.ª ed. | full entry, headword confirmed, real browser |
| 2 | `dle.rae.es/falta` | RAE/ASALE | full entry (all 13 senses + 13 locutions) |
| 3 | `dle.rae.es/anhelar` | RAE/ASALE | full entry |
| 4 | `dle.rae.es/añorar` | RAE/ASALE | full entry |
| 5 | Tatoeba `from=eng&to=spa "I miss you"` | Tatoeba Project | 41 sentences + 94 renderings, via the public API, every one inspected |
| 6 | `europepmc.org/article/PMC/PMC13424393` | ***Cognitive Processing*** (2026) | **FULL TEXT** via `ebi.ac.uk/.../PMC13424393/fullTextXML` (119 KB JATS) |

Also read in full and **cut**: `PMC12434326`, "Between distance and duty: emotional labor
in transnational fatherhood among Pakistani migrants in Italy", ***Frontiers in
Sociology*** (2025), 30 in-depth interviews with Pakistani migrant fathers in Bergamo and
Naples — full text read (115 KB). Cut because it would have been a **seventh** outbound
link, over checklist item 26's cap of six. *Frontiers in Sociology* is cited in **zero**
files in this batch, so it is free for anyone who wants it.

### Cap work, and an orchestrator claim that was wrong

- My prompt said **Memory & Cognition is at 2 with one slot left** and pointed me at
  **PMC10896937** (idiom variation, eye-tracking). Measured on disk: the journal name
  appears in **four** files of this batch, and **PMC10896937 is already cited by
  `ozledim-demenin-farkli-yollari` for exactly my argument**. Citing it would have been a
  twin. **Dropped**, and *Cognitive Processing* used instead — 0 prior appearances in the
  batch.
- *Frontiers in Psychology*, *PLoS ONE*, *Scientific Reports*, *BMC Psychology*, *PNAS* and
  *Memory & Cognition* all deliberately avoided.
- `capcheck.mjs` run immediately before writing: no banned URL, no URL at cap 2, `doi.org`
  at cap 3 and not used.
- `dle.rae.es` and `tatoeba.org` are cap-exempt hosts in `verify.config.json`, so
  `dle.rae.es/añorar` is reused here although two Spanish siblings already cite it. Noted
  in `structuralLimitations`.

---

## 8. Product, facts, and the template swap

- **`/missyou-gf` is English.** Defined at `app/lib/prompt.ts:44` as "'I miss you' page for
  a girlfriend/partner". Disclosed in Spanish body prose, in the section that links it.
- **`/catch` was in my row and was swapped for `/streak`.** `/catch` is already used by
  `como-decir-te-extrano-sin-decirlo`, whose thesis ("the letter arrives incomplete and the
  other person completes it") it fits exactly and mine does not. `/streak` — "two people,
  one tap a day; each check-in keeps a word; after a hundred days you have a diary neither
  of you meant to write" — is the product form of this article's conclusion: the same
  phrase, a different detail under it. It is in `oneOfLinks` in `verify.config.json` and in
  `TEMPLATE_LINKS`.
- **Price guard**: `pricecheck-intl.mjs otra-forma-de-decir-te-extrano` → clean. No
  *gratis*, *gratuito*, *sin costo*, *precio* or any figure. The body says the data file's
  usage-terms block is empty and links `/templates`.
- **First-party facts.** Five Spanish siblings had taken nearly the whole miss-you block, so
  I took the least-collided lines left plus three platform-wide lines no Spanish sibling had
  used: the 2,417 segment views, the 28.0% reunion date, 57,456 platform views, 11.1 views
  per created page, 38.5% password-protected. **Neither edit-gap line is used**, so the
  2.6 h / 2.5 h conflation cannot happen here. All four mandatory caveats are in body prose,
  including *nothing is segmented by language or country* and *the database records which
  template was opened, never who received it*.

## 9. Checks

- Slug free in production Strapi (`total:0`, 2026-09-27). All four sibling cross-link
  targets return `total=1` — already published, so no 404s.
- `categorySlug: miss-you-across-miles` exists among the ten live categories.
- Wikidata QIDs verified one by one: Q1321, Q616620, Q675538, Q11993457, Q495456, Q42106,
  Q11073520. (Q181503 is a Belgian painter, not the RAE — a trap for anyone quoting from
  memory.)
- Body 1,774 words without FAQs; 10 FAQs; 50-item audit, 48 passed / 2 failed, no overlap.
