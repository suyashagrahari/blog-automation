# Research brief — `why is there no tagalog word for miss`

Slug: `no-tagalog-word-for-miss` · Batch: `2026-09-25-miss-you-30` · Run date 2026-09-25

---

## Phase 0 — Data gate

Source: `content/batches/2026-09-25-miss-you-30/facts-snapshot.md` (pinned), **not**
`content/facts.md`. The miss-you segment (n = 214 pages on `/missyou-gf`, probed
2026-09-25) supplies far more than the required three relevant facts, and two of them
(median letter 88 words; 92.1% "open when" letters) sit inside the first 150 words.
Gate passed.

The snapshot's three mandatory caveats are reproduced in body prose in the
"What 214 miss-you pages show" section: pickers-with-defaults, viewCount is page views,
n = 214 over two months. A fourth caveat is added on my own initiative — these senders
are **not a Tagalog-speaking sample**, so the table is evidence about message
composition, not about Tagalog.

---

## Phase 1 — SERP

One WebSearch on the exact keyword `why is there no tagalog word for miss`,
2026-09-25, US-served. Results 1–10:

| # | Page | Type | Where the answer sits | Data cited | Format |
|---|---|---|---|---|---|
| 1 | tagaloglang.com "How to Say 'I Miss You' in Tagalog: IMY" | language-blog phrasebook | phrase list, no "why" | none | short list |
| 2 | tagalog.com forum thread "Is there a Filipino equivalent…" | user forum | buried in replies | none | thread |
| 3 | hinative.com Q&A | user Q&A | one-line answers | none | thread |
| 4 | tagalog.com/dictionary/miss | MT/dictionary dump | entry list | none | auto-generated |
| 5 | tagalog-dictionary.com | dictionary aggregator | entry list | none | auto-generated |
| 6 | englishtotagalog.org | dictionary aggregator | entry list | none | auto-generated |
| 7 | wordhippo.com | dictionary aggregator | word grid | none | auto-generated |
| 8 | majstro.com | dictionary aggregator | entry | none | auto-generated |
| 9 | en.wikipedia.org/wiki/Bisalog | encyclopaedia | irrelevant to the query | — | article |
| 10 | en.wikipedia.org/wiki/Tagalog_profanity | encyclopaedia | irrelevant to the query | — | article |

Observed characteristics, measured not assumed:

- **Not one result answers the "why".** Eight of ten are either phrase lists or
  automatically generated dictionary lookups. Two are Wikipedia articles that do not
  address the question at all — the SERP is padded with near-misses.
- **No page cites a dictionary by name with a definition.** The aggregators reproduce
  English→Tagalog word grids with no lexicographic source.
- **No page distinguishes word class.** None says whether the candidate Tagalog items
  are nouns, adjectives or verbs, which is the whole substance of the question.
- **No page contrasts another Philippine language.** Cebuano `hidlaw` appears nowhere.
- **No structured data, no author byline, no dates** on any of the aggregator pages.
- The search engine's own summary repeated the folk claim — "there is no colloquial
  Tagalog word for 'miss' so Filipinos use the English" — which is the premise this
  post refutes.

Per `references/competitors.md`, none of these pages is cited, linked or paraphrased.
The forum and Q&A threads (results 2 and 3) are excluded outright.

## Phase 2 — Gap analysis

**Table stakes** — the phrases `miss kita` / `miss na kita` / `namimiss kita`, and the
fact that the English verb is used in Tagalog. All present.

**The gap.** Every result treats "no Tagalog word for miss" as a settled fact and moves
on to phrases. None of them checks it. The gap is the *why*, and it has a real
literature behind it: lexical gaps, the noun-over-verb borrowability asymmetry, and the
question of whether "language L has no word for X" is a sound form of argument at all.

**Stale/absent data.** There is no data on any of the ten pages to supersede. That is
itself the finding: an eight-word question with a measurable answer, and no measurement
anywhere on the first page.

**Fan-out sub-queries → H2s.**

1. Does Tagalog have a word for missing someone? → *What Tagalog actually has for missing someone*
2. What does the Filipino dictionary say about "miss"? → *What the national dictionary records under the word "miss"*
3. Why do Filipinos use the English word? → *Why verbs are borrowed less readily than nouns*
4. Do other Philippine languages have one? → *Cebuano answers the same question differently*
5. Is "no word for X" true/meaningful? → *Is "no word for X" ever a sound argument?*
6. What do I send instead? → *What 214 miss-you pages show about sending it anyway*
7. When is this the wrong thing to send? → *When sending a page is the wrong call*

**Angle.** Wins by being the only post that refutes its own keyword's premise with the
national dictionary, then explains the real gap as the noun-over-verb borrowability
asymmetry measurable in the World Loanword Database (nouns 0.391, verbs 0.189 across 41
languages), with Cebuano `hidlaw` as the control and 214 first-party miss-you pages
showing what senders actually do.

---

## Phase 3 — Sources, each fetched and verified 2026-09-25

### Independently verified, not taken from the siblings

Everything the task prompt asserted about the two finished sibling posts was re-checked
against the primary source before being used.

**CONFIRMED — the KWF `miss` entry.** `https://diksiyonaryo.ph/search/miss` returned
HTTP 200. The page carries **two** headwords, not one:

- `miss png | [ Ing ] : binibíni` — a noun, the courtesy title.
- `miss pnd | [ Ing ]` — a verb, with exactly six senses, every one opening `mabigong`:
  (1) `mabigong matama-an, maabot, maiugnay, at katulad ang isang bagay o hangarin`
  (2) `mabigong madatnan o maabutan ang isang sasakyan`
  (3) `mabigong maranasan, makíta, o madaluhan ang isang pang-yayari`
  (4) `mabigong makatagpo ang isang tao; mabigong puntahan ang isang pagtitipon`
  (5) `mabigong masamantala ang isang pagkakataon`
  (6) `mabigong marinig o maunawaan ang isang sinabi`

  None is "to long for someone absent." The prompt's claim is exact. **New detail the
  sibling did not record: the noun headword `binibíni`.** KWF borrowed the *title* noun
  and the *failure* verb, and not the longing sense.

**CONFIRMED — pangungulila and sabik.** `pangungulila png | [ pang+u+ulilà ]` with two
senses, the second `lumbay bunga ng pithayang umuwi dahil sa matagal na pagkawalay sa
bayan, pamilya, at minamahal`. `sabik pnr` sense 2 `matinding paghahangad na makíta o
makaulayaw ang isang matagal nang hindi nakakasáma`. Both as the prompt stated.

**EXTENDED — the whole native field is nouns and adjectives.** Checked on the same run:
`pananabik png` (noun), `ulila png` (noun), `lungkot png` (noun). Not one verb among
them. This is stronger and more falsifiable than "pangungulila is a noun".

**NEGATIVE RESULTS, recorded because they matter.** `mangulila`, `nangungulila`,
`pangulila`, `masabik` and `namimiss` all return empty result pages on diksiyonaryo.ph
(HTTP 200, no headword). And English Wiktionary's `miss` page has **no Tagalog section
at all** — verified via the MediaWiki `action=parse&prop=sections` API, which lists
English, Catalan, Dutch, German, Maltese, Norwegian Nynorsk, Old English, Polish,
Romanian, Spanish and Swedish, and no Tagalog. Two reference works, neither recording
the sense. The post states plainly that absence from a dictionary is not absence from
the language.

**CONFIRMED — Cebuano is the control and cuts the other way.**
`https://en.wiktionary.org/wiki/hidlaw` HTTP 200: Cebuano, part of speech **Verb**,
"to yearn; to long, have a strong desire (for something)"; "to long for something in
the past with melancholy, nostalgically"; "to have strong feelings of love, sympathy,
affection, etc. (toward someone)". Derived term `kahidlaw`.
Tatoeba API `search?query=gimingaw&from=ceb` returned exactly one sentence, id 4642724,
`Samot pa kong gimingaw nimo ron.` → "I'm missing you more than ever." (CC BY 2.0 FR).
Verified directly; not taken from the sibling.

### New evidence this post brings that no sibling has

**WOLD word-class borrowability.** The World Loanword Database (Haspelmath & Tadmor
eds., 2009, CC BY 3.0 DE) publishes a borrowed score per meaning. Its CLDF release
(`lexibank/wold`, `cldf/parameters.csv`, 1,814 rows, fetched 2026-09-25) carries a
`Semantic_category` column. Mean borrowed score by word class, computed from that file:

| Word class | Meanings | Mean borrowed score |
|---|---|---|
| Noun | 1,172 | 0.391 |
| Function word | 122 | 0.259 |
| Adjective | 134 | 0.213 |
| Verb | 376 | 0.189 |

The same table is browsable and filterable at `https://wold.clld.org/meaning`, which is
what the post links, so a reader can reproduce it. The computation is mine; the scores
are WOLD's. Disclosed in `structuralLimitations`.

**WOLD has no meaning for "missing a person".** `https://wold.clld.org/meaning/20-63`
HTTP 200: meaning 20.63 `to miss`, description **"miss a target"**, typical context
"He shot at the bird but missed it", semantic field **Warfare and hunting**, semantic
category Verb, borrowed score 0.16. The comparative wordlist used to study borrowing
across 41 languages splits `miss` exactly where KWF splits it. No page anywhere makes
this observation.

**Nobody else borrowed the verb.** English Wiktionary's `miss` wikitext, fetched via
`action=parse&prop=wikitext`, shows five borrowings of English *miss*: Catalan, Dutch,
Polish, Romanian and Spanish — all tagged `id=title`, all **nouns**, all the
pageant/courtesy sense. Maltese and Norwegian Nynorsk `miss` are native verb forms
(`mess`, `missa`), not borrowings. Not one language on that page borrows the English
verb. Tagalog, which did, is absent from the page entirely.

**The "no word for X" literature.** Regier, Carstensen & Kemp, "Languages Support
Efficient Communication about the Environment: Words for Snow Revisited", PLOS ONE
11(4): e0151138, 13 April 2016. Peer-reviewed, open access, full text read (not just
the abstract). The abstract states the Eskimo snow-words claim "has been greatly
exaggerated through popularization and is therefore viewed with skepticism by many
scholars of language", and the paper concludes that "variation in semantic categories
across languages may be traceable in part to local communicative needs". This is the
honest frame: a missing lexeme is not a missing concept.

### Searched and rejected

- `loanword typology borrowability verbs` via findpapers.mjs → Crossref returned the
  Haspelmath/Tadmor De Gruyter chapters (doi:10.1515/9783110218442.1 and
  10.1515/9783110206043.43). **degruyterbrill.com returns HTTP 202 with a JavaScript
  bot wall**, so the chapters could not be read. Rather than cite an abstract I could
  not open, the post cites WOLD's own published data directly.
- `lexical gap semantics` → nothing topical and open; Europe PMC returned NLP and
  clinical-linguistics papers unrelated to lexical gaps in the sense meant here.
- `linguistic relativity no word for` → nothing usable; results were number-cognition
  and grammatical-gender studies.
- `Eskimo words for snow vocabulary myth` → Cichocki & Kilarski, "On 'Eskimo Words for
  Snow'", *Historiographia Linguistica* 37(3), 2010 (doi:10.1075/hl.37.3.03cic).
  OpenAlex reports `oa_status: closed` with no OA location. **Not cited**, because the
  batch requires the reader be able to open it. Regier et al. 2016 covers the same
  ground and is open.
- `Tagalog verbal morphology borrowing` → only paywalled handbook chapters; the
  `na-`/`ma-` claim in the post rests on the attested Tatoeba forms and on WOLD's
  word-class data, not on an unread chapter.

### Cap positions at time of writing (capcheck.mjs, re-run before save)

| Source | Domain posts before / after | URL posts before / after |
|---|---|---|
| diksiyonaryo.ph/search/miss | 1 → 2 (cap 3) | 1 → 2 (cap 2) |
| diksiyonaryo.ph/search/pangungulila | (same domain) | 1 → 2 (cap 2) |
| wold.clld.org/meaning | 0 → 1 | 0 → 1 |
| wold.clld.org/meaning/20-63 | (same domain) | 0 → 1 |
| en.wiktionary.org/wiki/hidlaw | exempt | exempt |
| journals.plos.org/…pone.0151138 | 1 → 2 (cap 3) | 0 → 1 |

Final capcheck run immediately before saving: no domain at cap 3; `diksiyonaryo.ph`
and `journals.plos.org` both sit at 2 posts, and the two diksiyonaryo URLs are at the
URL cap of 2 without exceeding it. `journals.plos.org` is a distinct domain from
`europepmc.org` / `pmc.ncbi.nlm.nih.gov` (2 posts) for cap purposes. `doi.org` is deliberately
avoided: the BRIEF counts the publisher a DOI resolves to, and it already sits at 2
posts, so every citation here links the publisher directly.

Subject test: all six sources are about the language or about the soundness of
vocabulary-difference claims. None is about India or the internet. Swap test: none
could sit unchanged in another post in this batch — the WOLD, KWF and PLOS entries are
about `miss` specifically, and `hidlaw` about Cebuano specifically. Zero generic context
statistics. Zero Wikipedia body links (Wikipedia is used only for verified `sameAs`
entity grounding in `structuredData`, which the reference explicitly excludes from the
body budget).

---

## Phase 5 — Targeting

- `categorySlug`: `miss-you-across-miles`, confirmed live in the Strapi category list
  on 2026-09-25.
- `templateUrls`: `/missyou-gf` (batch-mandatory, and genuinely the reader's template)
  plus `/hold-my-hand`, chosen from `oneOfLinks` on merit. The batch's own
  `_why` note assigns `/hold-my-hand` to "the reader who cannot say it in words", which
  is exactly this post's reader — someone who went looking for a single word and found
  the language does not supply one. It is also unused in this batch so far
  (`/dedication` ×4, `/catch` ×3, `/capsule`, `/train-ticket`, `/streak`).
- The post says openly, in the downside section, that most readers of a grammar
  explainer want a sentence and not a template, and that the page loses to a phone call,
  a printed letter, or an apology depending on the situation.
- Slug `no-tagalog-word-for-miss` checked against Strapi on 2026-09-25:
  `filters[slug][$eq]` returned `total: 0`. Free.
- All three internal URLs returned HTTP 200 on 2026-09-25.
