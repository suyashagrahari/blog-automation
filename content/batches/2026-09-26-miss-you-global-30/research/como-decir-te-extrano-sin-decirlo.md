# Research — `como-decir-te-extrano-sin-decirlo` (mx-es, bodyLanguage Spanish)

Verdict: **PROCEED.** Written and emitted as `blogs/como-decir-te-extrano-sin-decirlo.json`.

---

## 1. SERP measurement (BRIEF §3)

`scripts/serp-ddg.mjs` run **once**: `UND_ERR_CONNECT_TIMEOUT` to `html.duckduckgo.com:443`. Not retried.

### Route A — Google in the operator's real Chrome, `gl=mx&hl=es-419&pws=0`

Self-authenticated before recording: tab title `como decir te extraño sin decirlo - Buscar con Google`, Spanish body text about *te extraño*. No foreign-agent SERP seen; nothing discarded.

| # | Domain | Page type | Weak |
|---|---|---|---|
| 1 | quillbot.com/es | AI-writing-tool SEO blog | yes |
| 2 | languagetool.org/insights/es | grammar-tool content marketing | yes |
| 3 | reddit.com/r/AskWomen `?tl=es-419` | **English** forum thread, machine-translated | yes |
| 4 | marriage.com/es/ | English relationship site, machine-translated subfolder | yes |
| 5 | es.pinterest.com (run 1) / tiktok.com (run 2) | aggregation page / video | yes |
| 6 | facebook.com/LaMejorCuernavaca | local Facebook page post | yes |
| 7 | es.quora.com | Q&A | yes |

Page 1 carried **only 7 organic results** plus an AI Mode block and a People-Also-Ask set. I did not invent ranks 8–10.

**Run 2** (accented query, same parameters): identical set except Pinterest → TikTok at #5 and a different Quora thread at #7. Stable.

### Route B — Bing DOM, `mkt=es-MX&setlang=es`, same browser

10 results, self-authenticated: `bonobology.com/es`, `imaglix.com`, `frasesindirectas.com`, `queresponder.com`, `enterapiaonline.com`, `blogfrases.com`, `todorespondio.es`, `nucleovisual.com`, `imagenesdereflexion.org`, `trashtucada.es`. **10 of 10 weak.** No Bing "no results" state occurred, so no throttle control was needed.

Brave was not needed: Google and Bing both served.

### Weak count and Gate 4

**7 of 7 on Google mx-es (twice), 10 of 10 on Bing es-MX. Strong editorial: 0.**

**Gate 4 = PROCEED.** The query's *shape* is the listicle shape that aborted in Brazil, but the *incumbents are not*: there is no dictionary, no language academy, no FundéuRAE, no Instituto Cervantes, no national newspaper, and not one page cites the RAE. Two of seven Google results are English pages served machine-translated. Bing's whole top 10 is phrase mills. The br-pt abort was against eight national publishers with a decade of authority; this is not that.

### People-Also-Ask (fan-out, Phase 2)

"¿Cómo decir te extraño de otra forma?", "¿Cómo reemplazar la palabra extrañar?", "¿Cómo decir 'te voy a extrañar sin decirlo'?", "¿Cómo decir 'te pienso sin decirlo'?"

---

## 2. Checkable error in a ranking result

**`bonobology.com/es/como-decir-te-extraño-sin-decirlo` — #1 on Bing `mkt=es-MX`, 2026-09-26.** Fetched in full (32,281 chars of text). Named in the post, **not linked**.

- Item 33 of 55: «ABCDEFGHIJKLMNOPQRSTVWXYZ. Creo que me perdí algo. ¿Adivinas?» — the joke requires English *U* ≈ *you*. Spanish *u* is a disjunctive conjunction, not a pronoun; nothing is missing. The printed string also has **25 letters and no ñ**, so it is not the Spanish alphabet.
- Item 29: «ESCUCHA – TL + MAD – SEN + ICE – …» — an English letter puzzle whose first operand was *LISTEN*; translated to *ESCUCHA* the arithmetic no longer resolves.

The page is an Indian English relationship magazine served through a machine-translated `/es/` subfolder.

**Second error, not used** (adjacent to a sibling's lane): languagetool.org (#2 on Google) asserts as fact that *echar de menos* «es un lusismo … viene de la construcción "achar de menos"», in a paragraph that opens «Según la RAE». The DPD entry for *echar* does not carry that etymology. Left to the sibling row that owns the locution.

---

## 3. Instruments and what they actually said

| Instrument | Claim tested | Verdict |
|---|---|---|
| DLE `reticencia` | is "saying it without saying it" a neutral act in Spanish? | **No.** Sense 1: «Efecto de no decir sino en parte, o de dar a entender claramente, **y de ordinario con malicia**, que se oculta o se calla algo que debiera o pudiera decirse». Synonyms: insinuación, indirecta, rodeo, evasiva, ironía, **insidia**. |
| DLE `indirecto, ta` | sense 2 definition | «Dicho o medio de que alguien se vale para no significar explícita o claramente algo, y darlo, sin embargo, a entender.» Read but cut from `sources` for the 6-link cap. |
| DLE `diminutivo` | "the diminutive softens" | **Half wrong.** Sense 2: a suffix «Que expresa disminución, **atenuación o intensidad** … o que valora afectivamente su significación». Examples *Frasquito, problemilla, ahorita*. The dictionary assigns it **intensity** as well as attenuation. |
| DLE `ojalá` | the prompt's etymology *law šā' Allāh* "if God wills" | **Wrong as given.** The DLE prints «Del ár. hisp. **wa šá lláh** 'y Dios ha querido'» — past tense. Classed `interj.`; only synonym *quienquita*. |
| DPD `ojalá o ójala` | does it take the subjunctive? | **Confirmed.** Interjection of desire; may stand alone; if followed by a clause «el verbo en subjuntivo», optional *que*; «**Debe evitarse su uso con infinitivo**» (⊗ «Ojalá sacar el libro a fin de año»). **«ojalá y» is documented «sobre todo en México, Centroamérica y el área caribeña»** (Güemes, *Soñar*, mx 2011); restricted to popular speech in Spain. Calls it a «voz de origen árabe». Also: *ójala* esdrújula is valid; llana [ojála] is not written. |
| DPD `usted` §4 | tú/usted carries distance | **Confirmed but useless as a softener.** «usted implica cierto distanciamiento, cortesía y formalidad» — distance is the opposite of intimacy. And **in all of the Americas *ustedes* is the only plural**, formal and informal alike, so the plural contrast does not exist for a Mexican reader. **Cut from the body for the 6-outbound-link cap**; first thing to add if the cap were 7. |
| DLE `besito` | lexicalised softener? | **Not a headword.** «La palabra «besito» no está en el Diccionario» (it offers *besico*). Claim cut. |
| DLE `pulla`, `ahorita` | synonym / Mexican example | **403 Cloudflare** on every scripted attempt; not spent a browser load. Claims cut. |
| RAE corpora (CORPES, CREA) | frequency | Not attempted — BRIEF §4 records every RAE corpus host 403-ing a script. No frequency claim is made anywhere in the post. |

**Fresh instance of the HTTP-200-wrong-entry trap:** `https://dle.rae.es/ojala` (unaccented) returns **200 and serves OJALAR**, "hacer y formar ojales", with a full conjugation table. Only `https://dle.rae.es/ojal%C3%A1` serves *ojalá*. MARAUD/DEZILITER again.

---

## 4. Tatoeba measurement

Query `api_v0/search?from=spa&query=ojalá`, pages 1–12, run 2026-09-26.

- Tatoeba **reports 504** Spanish hits. **120 collected and inspected individually.**
- **120 of 120 survive** a word-boundary check. *Method note:* the naive `/\bojalá\b/` returns **0** survivors, because `á` is a non-word character in JS so the trailing `\b` never fires. The corrected pattern `ojal[áa](?![a-záéíóúñ])` returns 120/120.
- **0 of 120** take an infinitive — the DPD's banned construction, at 0% in real use.
- **87** imperfect/pluperfect subjunctive; **31** present subjunctive.
- **5** carry the optional *que*; **0** use *ojalá y*. Tatoeba has no regional sampling frame, so this is a limit of the instrument and is **not** reported as evidence about Mexican usage.
- **2** stand alone as a reply.
- **20** address a second person. An automated filter flagged **23**; each was read and **three were false positives** (`proteste.`, `inteligente.`, `amigos.` end like an enclitic).
- **13** concern presence or absence.
- **3 are curses** («Ojalá te mueras», twice with *que*). This is the load-bearing datum: *ojalá* marks **desire**, not tenderness. What softens is the subjunctive.

---

## 5. Sources emitted (6)

1. `https://dle.rae.es/reticencia` — DLE, 23.ª ed. (cap-exempt instrument)
2. `https://dle.rae.es/diminutivo` — DLE, 23.ª ed.
3. `https://dle.rae.es/ojal%C3%A1` — DLE, 23.ª ed.
4. `https://www.rae.es/dpd/ojal%C3%A1` — DPD, 2.ª ed.
5. `https://tatoeba.org/es/sentences/search?from=spa&query=ojal%C3%A1` — Tatoeba (cap-exempt)
6. `https://europepmc.org/article/PMC/PMC13077900` — **journal: *BMC Psychology*, vol. 14, 2026-03-06, CC BY-NC-ND, `isOpenAccess: Y`.** Abstract only (the PDF does not parse); disclosed in body prose.

**Journal cap:** *BMC Psychology* stands at 1 prior post in this batch. **Frontiers in Psychology, PNAS, PMC13552847 and every spent PMCID in BRIEF §7 are absent.** PLoS ONE was deliberately *not* used (an excellent emoji/responsiveness paper, PMC12221085, would have taken PLoS ONE to 3 of 3); recorded here as the swap.

`capcheck.mjs` run immediately before writing: no banned URL, no domain at cap, no URL at cap.

---

## 6. Split from the live English post and the three siblings

- **`/blog/say-i-miss-you-without-saying-it` (live, Strapi `total=1`)** — read in full. It is a **seven-object post**: send the song, the photo, the food order, the meme, the voice note, the countdown, the hug page. It is about *tokens*, contains no grammar, and works in any language. **This post is about the grammar** — the two lexical operations Spanish names, the subjunctive, the diminutive suffix. No overlap; cross-linked.
- **`diferencia-entre-te-extrano-y-te-echo-de-menos`** — which verb is correct where. I state the split in one sentence (an FAQ) and cross-link; I do not re-argue regionality.
- **`te-echo-de-menos-significado`** — the locution's two DLE senses and its register. Cross-linked; not re-argued.
- **`te-extrano-en-ingles-como-se-dice`** — the translation. Cross-linked (it was written to disk while this row ran).

**ABORT was considered and rejected**: the English post answers "what object do I send"; a Spanish reader typing this query gets, from every ranking page, a list of translated phrases and no account of what *indirecta* means in their own dictionary.

---

## 7. Framing claims in my prompt that were wrong

1. **`ojalá` etymology.** Prompt: "an Arabic borrowing (*law šā' Allāh*)" = 'if God wills'. DLE: «Del ár. hisp. **wa šá lláh** 'y Dios ha querido'» — different form, past-tense gloss. Arabic origin holds (DPD: «voz de origen árabe»); the popular form does not appear in the RAE and is not printed.
2. **`how-to-say-i-miss-you-without-sounding-desperate` "on disk, unpublished".** Live Strapi API returns `total=1`: it **is** published. (`say-i-miss-you-without-saying-it` is live as stated.) Neither appears in `content/keywords/strapi-live-articles.json`, a 905-entry snapshot that predates both.
3. **"#25 is unsatisfiable" (earlier batch guidance).** The Strapi REST API answers from `ctx_execute`: `filters[slug][$eq]=como-decir-te-extrano-sin-decirlo` → HTTP 200, `total: 0`. Item 25 **passes**.
4. **"The diminutive softens."** The DLE gives the suffix *intensity* in the same sense — the Indonesian-particle failure mode, as predicted.
5. **"usted carries distance English cannot."** True per DPD §4, but distance is the wrong direction for a love message, and the plural contrast does not exist in Mexico at all.

---

## 8. Is indirectness honestly good advice?

**Conditionally, and the post says so.** The BMC Psychology fNIRS study found dyads in the **self-disclosure** condition reported *higher* intimacy than the non-disclosure condition, with the listener's neural reactivity mediating empathy → intimacy. Limits disclosed in the body: female friend dyads in a lab, not couples at distance; revealing vs not revealing, not indirect vs direct.

Combined with the DLE's own framing of *indirecta*/*reticencia* as malicious, the honest answer printed in the post is: **the softening devices (ojalá + subjunctive, the affective diminutive) are safe; the *indirecta* proper is not, and when a conversation is actually pending it is the worst available vehicle.** Our own data supports the mechanism rather than the tactic: 90.9% of started pages are published and shared (4,724 of 5,199), so what fails is the reading, not the sending.

---

## 9. Audit

**46 passed / 4 failed, 50 total, `passed ∩ failed = ∅`.** Extras in `additionalChecks` (10 entries).

Failed, with the blocker:

- **#24 slug** — the slug *is* the keyword; six segments, two stop words (*como*, *sin*). Shortening breaks exact match.
- **#34 swap test** — the BMC Psychology paper could sit unchanged in the Indonesian *cara bilang kangen tanpa bilang kangen* row. The five lexical sources do pass.
- **#36 source cap** — uncountable mid-batch with six concurrent writers; `capcheck.mjs` clean at write time; journal named for a human to count.
- **#45 ItemList** — the body ranks and numbers nothing; emitting one would misdescribe the structure.

**#25 passes** (Strapi verified). **#50 passes** — `references/article-json-schema.md` read; `kind` is exactly `blog-automation/batch-blog`; the single `structuredData` block is the `@id`-matched enrichment on `…#post`, which is the only route by which `batchMeta.sources` reach the page; `citation` mirrors `sources` 6-for-6.

Word count **1,769** (verifier range 1,500–1,800; 31 words of headroom deliberately left for the quiescence cross-link pass). FAQs **12**. Internal links **3** (`/missyou-gf`, `/catch`, `/templates`). Outbound links **6**. Wikipedia in body **0**.
