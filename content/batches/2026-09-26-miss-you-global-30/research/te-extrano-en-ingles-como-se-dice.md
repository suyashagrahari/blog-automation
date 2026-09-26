# Research brief — `te-extrano-en-ingles-como-se-dice`

- **Keyword:** `te extraño en ingles como se dice`
- **Region:** `mx-es` (Google `gl=mx&hl=es-419&pws=0`)
- **Body language:** Spanish. `factsUsed` stay byte-verbatim English.
- **Tier:** `A-translate`
- **Written:** 2026-09-26

---

## Phase 1 — SERP, measured

**Scripted routes.** `serp-ddg.mjs` run **once**, as instructed:
`UND_ERR_CONNECT_TIMEOUT` on `html.duckduckgo.com:443`. Confirmed dead, not retried.

**Route used: Google served to Mexico in the operator's real Chrome (PolterTab),**
`https://www.google.com/search?q=te+extraño+en+ingles+como+se+dice&gl=mx&hl=es-419&pws=0&num=20`.
Read only — nothing clicked, submitted or dismissed.

**Run twice. Both runs identical** (same seven organic results, same order, same
widget). Self-authenticated on both runs: the Google Translate widget's source
field read `te extraño`, its `aria-label` read `Texto traducido: I miss you`, the
UI chrome was Spanish, and every organic title contained my query.

### What sits above the organic results

1. **A Google Translate widget** — `Español → Inglés`, source `te extraño`,
   target `I miss you`. It is the first thing on the page, above everything.
2. **An AI Mode block** (`El Modo IA respondió:`), citing **QuillBot**,
   **BaseLang** and **YouTube · Academia de Idiomas Smart**.
3. A YouTube video card, *¿Cómo decir TE EXTRAÑO en Inglés*, Academia de Idiomas
   Smart, 0:11.

### Organic results — 7, and 7 is all Google returned at `num=20`

| # | Host | Title | Page type | Weak? |
|---|---|---|---|---|
| 1 | inglés.com | Te extraño en inglés \| Traductor de español a inglés | machine-translator landing page | yes |
| 2 | Tureng | te extraño - Español Inglés Diccionario | dictionary aggregator | yes |
| 3 | Inglesxdia (`inglesxdia.tech/lecs/miss_you`) | Curso de inglés en línea: formas de decir te extraño en inglés | micro-site ESL blog | yes |
| 4 | Reverso Context | te extraño - Traducción al inglés - ejemplos español | corpus aggregator | yes |
| 5 | Instagram · michelllaragon | Como decir "te extraño" en inglés sin decir la frase más común… | reel, 3.9K likes, 2 weeks old | yes |
| 6 | Linguee.es | te extraño - Traducción al inglés | corpus aggregator | yes |
| 7 | Instagram · englishmasterypd | ❤️ Frases en inglés para expresar que extrañas a alguien… | reel, 24.1k likes, 3 months old | yes |

**Weak count: 7 of 7 — and 7 is the number I actually saw.** Four are automated
dictionary/corpus aggregators with no editorial position, two are Instagram reels,
one is a micro-site. **Not one is Spanish editorial with lexicographic authority.
Not one cites the RAE, a dictionary of English, or any corpus count.**

**Gate 4 verdict: PROCEED.** There is no strong Spanish editorial incumbent to
displace. The honest ceiling is not the incumbents — it is the Translate widget,
which answers the query above every organic result and will take the clicks of
every searcher who only wanted the three words.

### Checkable errors found in the ranking set

1. **The result at position 3 serves HTTP 500.** `https://inglesxdia.tech/lecs/miss_you`
   returned `500: Internal Server Error` on **two independent routes** — a
   sandboxed `fetch` and the real browser. Google is ranking a broken page third.
2. **The Translate widget offers gendered English variants for a string that
   marks no gender in either language.** It renders three slots — neutral,
   `(femenino)`, `(masculino)`. Only the neutral one resolved (`I miss you`); both
   gendered slots came back empty behind *No se puede actualizar la traducción en
   este momento*. Neither Spanish `te extraño` nor English `I miss you` encodes the
   gender of either participant, so the two extra slots have nothing to hold.

### Contention — caught and discarded

Navigating to `ingles.com` to read the #1 result returned **the French sibling's
SERP**: French UI (`Résultats de recherche`, `Résultats Web`) and a French headline,
*Arrête de Dire Tu me Manques en Français*. **Discarded; nothing recorded from it.**
This is the eighth confirmed cross-contamination on the shared browser. My own SERP
survives only because it was self-authenticated twice.

---

## Phase 2 — Gap

**Table stakes** (all seven cover): the string `I miss you`.

**The gap** — nothing on this SERP does any of the following:

- States that `te extraño` and `I miss you` put the **speaker** in subject position
  in *both* languages, which is why this pair maps cleanly where French
  *tu me manques* and Italian *mi manchi* invert.
- Shows that English **cannot mark number** on the object: `te` and `los` come back
  as the same English string.
- Tests **which English tense** the Spanish past forms take, instead of asserting one.
- Checks whether **`yearn`** is attested with a second-person addressee before
  recommending it.
- Counts anything.

**Fan-out sub-queries → H2s:** ¿cómo se dice te extraño en inglés? · ¿te extraño o
te echo de menos en inglés? · ¿cómo se dice te extrañé en inglés? · ¿te extraño es
para una persona o varias? · ¿cómo se dice te añoro en inglés? · ¿"I yearn for you"
se usa? · ¿cuántos significados tiene "miss"? · ¿qué muestra Google cuando busco esto?

---

## Phase 3 — Instruments and what they gave

### DLE — `añorar` (fetched in the real browser; headword on the page confirmed `añorar`)

`https://dle.rae.es/añorar`

- Etymology: **`Del cat. enyorar`** — from Catalan, not Latin.
- **Exactly one sense**: *«1. tr. Recordar con pena la ausencia, privación o pérdida
  de alguien o algo muy querido. U. t. c. intr.»*
- `Sin.: extrañar, recordar, pensar, meditar.` `Ant.: olvidar.`

So the three Spanish verbs stack: **`extrañar` 8 senses** (sibling), **`echar de
menos` 2 numbered senses** (sibling), **`añorar` 1** — and `añorar`'s single sense is
the narrowest of the three, because it requires the thing to be *muy querido*.

**Negative recorded: `dle.rae.es` 403s a scripted fetch.** One sandboxed request
succeeded, then every subsequent one — five attempts across two user agents, with
back-off — returned 403. The entry above was read in the real browser instead.

### Wiktionary — English `miss` (API, `action=parse`)

`https://en.wiktionary.org/wiki/miss`

- **15 top-level verb senses.**
- The one the reader wants is **sense 6**: *"To become aware of the loss or absence
  of; to feel the want or need of, sometimes with regret; to feel sadness at the
  absence of somebody or something."*
- Senses 1–5 are *fail to hit*, *avoid hitting*, *fail to achieve*, *fail to attend*,
  *avoid or escape*.
- Note: Wiktionary folds the **cognitive** reading ("become aware of the absence")
  and the **emotional** reading ("feel sadness at the absence") into **one** sense,
  where the DLE splits `echar de menos` into **two** numbered ones. Cross-linked to
  the sibling that established the Spanish side; not re-argued here.

### Tatoeba — everything counted by hand

Harvested through `tatoeba.org/en/api_v0/search`, `from=spa&to=eng`. Tatoeba's
search is lemma-normalising: every inflected form of `extrañar` returns the same
result set of **692**. **632 of the 692 were harvested and read** (the remaining 60
sat on pages that 403'd after repeated back-off — recorded, not guessed).

- **At least 153 of the 632** use `extrañar` as the verb of missing. The majority of
  the rest are the unrelated adjective/noun `extraño` — *strange*, *stranger*, *odd*,
  *weird*. This is a floor, not a precise split: the classifier is conservative and
  misses verb uses with no clitic (`Extraño tanto París.` fell in the remainder).

- **`te extraño` exact string: 15 sentences, read one by one.** 14 are the verb of
  missing. The 15th, `¿Nada te extraño al verme?`, comes back as *"Aren't you
  surprised to see me?"* — the **surprise** sense, not the missing sense. Two more
  in the corpus confirm it: `¿No te extrañaste al verme?` and `¿No te extrañaste
  cuando me viste?`, both *"Aren't you surprised to see me?"*.

- **Sentence 436802, `Te extraño.`, carries TEN distinct English translations**:
  *I miss you. / You're not here, so I'm really sad. / I'm lonely without you. /
  You've been missed. / I'm longing for you. / I miss you guys. / I'm missing you. /
  I missed you. / I'll miss you. / I miss you!* — three of which are not *miss* at
  all, and three of which change the tense or the number.

- **THE NUMBER COLLAPSE, verbatim.** Three distinct Spanish sentences carry the
  **identical** English string *"I'll miss you when you're gone."*:
  - `Te voy a extrañar cuando no estés.` — **one** person (tú)
  - `Los voy a extrañar cuando se vayan.` — **a group** (ustedes)
  - `Los voy a extrañar cuando no estén.` — **a group** (ustedes)

  Also `Los extrañaré mucho si se van.` → *"I'll miss you very much if you go."*
  English `you` absorbs both. Spanish marks it on the clitic; English cannot mark it
  at all.

- **Person on the subject is marked and survives**: `Te extrañamos.` → *"We miss
  you."*, `Te extrañamos mucho.` → *"We miss you very much."*, `Te extrañamos
  anoche.` → *"We missed you last night."* English recovers *we* from the pronoun it
  is obliged to write; Spanish carries it on the verb ending.

### THE TENSE MAPPING — measured, and the framing I was handed was half wrong

Every past-marked sentence in the harvest, read individually:

| Spanish form | Sentences | English forms the corpus actually gives |
|---|---|---|
| preterite (`extrañé/aste/ó/aron`) | 8 | *did … miss* ×5, *missed* ×1, *have … missed* ×1, *do … miss* ×1 (+2 that are the surprise sense, +1 idiom) |
| imperfect (`extrañaba/abas/aban`) | 7 | *missed* ×9, *have missed* ×2, *was homesick* ×1 |
| present perfect (`he extrañado`) | 2 | *have missed* ×3, *missed* ×1, *miss* ×1 |

**The finding: there is no one-to-one mapping.** Simple past *missed* appears under
all three. Present perfect *have missed* appears under all three. No English form
belongs to exactly one Spanish form.

The proof is two sentences sitting in the same corpus:

- `Te extrañaba mucho.` (imperfect) → *"I missed you very much."* and *"I've missed
  you very much."*
- `Te he extrañado.` (present perfect) → *"I've missed you."* **and *"I missed
  you."***

And the preterite `¿Me extrañaste?` carries **three** English forms at once: *"Did
you miss me?"*, *"Have you missed me?"*, *"Do you miss me?"*

So the trap is not "pick the right English tense for each Spanish tense". **The trap
is that the Spanish preterite/imperfect contrast is not expressible in English at
all** — `I missed you` covers both. What actually decides the English form is
whether the absence has ended, not which Spanish past you used. This inverts the
framing in the task prompt, which assumed each Spanish form "takes" a particular
English form. It does not.

### `añorar` → English: 22 sentences, all read

18 of the 22 use the **verb** `añorar` (the other four are the noun `añoranza`).
Of those 18:

- **10 use `miss`** (`Lo añoro.` → *I miss it.*; `Mary añora a su marido.` → *Mary
  misses her husband.*)
- **7 use `long for` / `long to`** (`Añoro mi pueblo.` → *I long for my people.*)
- **1 uses `want`**
- **0 use `yearn`**

**The only one of the 22 addressed to a person** is `Te añoramos muchísimo.`, and it
comes back as ***"We've missed you so much."*** — `miss`, not `long for`, not
`yearn`.

### Is there an English word worth sending for `añorar`? Measured: no.

| English string | Tatoeba English corpus | Survived inspection |
|---|---|---|
| `I miss you` | **110 sentences** | — |
| `long for you` | **15 raw hits** | **8** |
| `yearn for you` | **0 sentences** | **0** |

**`yearn for you` returns zero results in Tatoeba's entire English corpus** — which
confirms, independently, what a sibling row found. The verb itself is attested: 72
sentences contain `yearn`. **Not one of the 72 takes a second-person addressee.**
*I yearn for victory*, *I yearn for your voice*, *He yearns for his family*, *She
yearns for her family* — never *I yearn for you*.

The 15 raw hits for `long for you`, inspected one by one, **7 do not survive**:
*"The journey is long for you."* and *"The road is long for you."* are the
**adjective** `long`; *"I think Tom wouldn't wait that long for you."* twice is the
**adverb**; *"I am longing for you to succeed as a businessman."* is a different
construction; *"Oh my beloved childhood, I long for you with all my heart!"*
addresses a childhood, not a person. **8 of 15 survive.**

**Recommendation for the body: `I miss you`. `I long for you` only if the register
is deliberate and literary. `I yearn for you` — do not send it.**

### Corpus caveat, recorded

Tatoeba translations are user-contributed and include indirectly-linked pairs. Two
defects surfaced in my own reading: sentence 1427867, `Me extrañarás.`, lists *"I
will miss you."* alongside the correct *"You will miss me."*; and sentence 436802's
*"I miss you guys."* reads a singular `te` as plural. Both are recorded rather than
used, and every figure above comes from sentences I read individually.

### Peer-reviewed, open access

- **PMC10928072** — *Shared structure of fundamental human experience revealed by
  polysemy network of basic vocabularies across languages*, **Scientific Reports**,
  2024-03-11, `is_oa` = Y, CC BY, doi 10.1038/s41598-024-56571-8. 60 basic
  vocabularies across **61 languages**, **11,841 senses** from **3,736 entries**;
  the network has **2,941 nodes** and **3,573 edges**. **Abstract only** — the PDF
  does not parse here.
- **PMC12080926** — *Novel forms for the expression of aspect in heritage Greek
  across majority languages*, **PLoS ONE**, 2025-05-15, `is_oa` = Y, CC BY, doi
  10.1371/journal.pone.0319154. Finds that **φ-features (person and number) and
  aspect** are the most re-organised elements in heritage speakers' verbs — the two
  features Spanish marks on `extrañar` and English cannot mark at all. **Abstract
  only.**

**Journals named for the cap, since `capcheck.mjs` counts hostnames and cannot see
this: *Scientific Reports* (1 → 2 in this batch) and *PLoS ONE* (1 → 2).**
**Nothing from *Frontiers in Psychology* (banned, already at 5–6), nothing from
*PNAS* (banned, at 3), no PMC13552847, no PMC6684791, no PMC12409917, no
PMC11878271, no PMC8669216** (already spent once in this batch by `aitai`, and in
four earlier batches).

Search terms that returned nothing usable: *bilingual emotion word translation
equivalence*, *expressing emotion in a second language romantic partner*,
*grammatical number person marking loss in machine translation*, *aspect tense
preterite imperfect Spanish English second language acquisition* (the only Spanish
aspect hits were both *Frontiers in Psychology*, banned).

### RAE corpus frequency — negative recorded

No phrase-level frequency for `te extraño` vs `te echo de menos` is available.
`dle.rae.es` 403s a script; the CORPES/CREA hosts 403 a script across every host a
sibling tried. A sibling also established the substantive reason nobody has this
figure: **`echar de menos` is a multiword locution and cannot be a lemma**, so a
lemmatised corpus cannot count it. Tatoeba is used instead and labelled as what it
is — a user-contributed sentence corpus, not a balanced frequency corpus.

---

## Split from the two Spanish siblings on disk

- **`diferencia-entre-te-extrano-y-te-echo-de-menos`** owns the *regional* question
  and settled it: the DLE marks **neither** verb regionally, and the split is
  frequency and register, not correctness. **I do not re-argue it.**
- **`te-echo-de-menos-significado`** owns the *meaning of the other phrase* and its
  two DLE senses, plus `echar en falta` living under `falta`. **I do not redo it.**
- **This page is the third lane: a Spanish speaker who already knows what the phrase
  means and wants the English** — the one-line answer, then the three things the
  English cannot carry (number, aspect, and a single word for `añorar`).

One line of contrast with the French and Italian rows (`tu me manques`, `mi
manchi`), cross-linked, and no more: those pairs invert the subject, this one does
not.

---

## First-party data — collision is total, and that is a real failure

**All twelve `/missyou-gf` lines in `facts-snapshot.md` are already used by the two
Spanish siblings between them** (sibling 1 uses eight, sibling 2 uses six; the union
is twelve of twelve). There is nothing left that is unused on this SERP's language.

I picked the **least-collided** lines available batch-wide: median letter length (5
prior uses), reunion-date rate (6), password rate (6), plus the 214-page line (12)
because every mandatory caveat needs the denominator. **Differentiation on
first-party data is thin against the two Spanish siblings and this is recorded as a
failed self-check, not hidden.**

Mandatory caveats, all in body prose in Spanish:
1. City / background music / "together since" are **pickers with defaults** — not
   sender choices. (None of the four lines I cite is a picker field, and the body
   says so.)
2. `viewCount` is **page views**, not unique visitors.
3. **n = 214 over two months** (live 2026-07-28). No seasonal claim survives it.
4. **Nothing is segmented by language or country — no figure here is Spanish or
   Mexican — and the database records which TEMPLATE was opened, never who received
   it.**

---

## Product honesty

`/missyou-gf` is defined at `app/lib/prompt.ts:44` as *"'I miss you' page for a
girlfriend/partner"* — **English labels and recipient-specific**, verified at source.
Both facts are disclosed in Spanish body prose, including that it is the wrong
choice when the recipient does not read English, and that **a reader who only needed
the translation needs nothing from us** — the three words at the top of this page are
the whole answer.

Price guard: no `gratis`, `gratuito`, `sin costo`, `no cuesta nada`, no price, no
tier. Checked with `pricecheck-intl.mjs`.

---

## Lines cut, and why

- **Any claim about how `extrañar` and `echar de menos` divide regionally.** Sibling
  1 owns it and measured it; repeating it would be a twin.
- **Any recount of the two DLE senses of `echar de menos`.** Sibling 2 owns it.
- **Any frequency claim from CORPES or CREA.** Both 403 a script; recorded as a
  negative instead.
- **"I yearn for you" as a recommendation.** Zero attestations. Kept only as the
  measured negative.
- **A precise verb/adjective split of the 632 sentences.** The classifier is
  conservative, so only the floor (≥153 verb uses) is stated.
- **Anything about what the ranking pages "say" beyond their titles and page types.**
  Two of the seven are Cloudflare-challenged or 500ing and I did not read their
  bodies; the post claims only what I measured.
- **The Instagram reels' content.** Titles and engagement counts only — I did not
  open them.
