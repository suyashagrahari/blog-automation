# Research brief — `скучаю по тебе на английском`

- **Slug:** `skuchayu-po-tebe-na-angliyskom`
- **Batch:** `2026-09-26-miss-you-global-30` (wave 2)
- **Region:** `ru-ru` · **bodyLanguage:** Russian (Cyrillic throughout) · **tier:** A-translate
- **Category:** `miss-you-across-miles` · **templateUrls:** `/missyou-gf` (mandatory), `/streak`, `/templates`
- **Written:** 2026-09-27

---

## 0. Split from the sibling

`blogs/skuchayu-po-tebe-ili-za-toboy-kak-pravilno.json` (live in production Strapi, id 2752,
verified 2026-09-27) owns the **case dispute**: `по` + dative is the norm (Gramota № 274269,
«Нормативно: скучать по тебе»), `за` + instrumental is explicitly outside the literary language
(Gramota № 332860), the older `по` + prepositional survives only for мы/вы, Rosenthal prescribes
it while Ожегов–Шведова mark it «устарелое и просторечное», and — its sharpest point — `ты` has
one form `тебе` for both dative and prepositional, so the dispute is morphologically invisible in
this exact phrase.

**None of that is re-derived here.** This post owns the **English rendering**: what the English
sentence carries and what it drops. The split is stated in one sentence in the third paragraph of
the body and cross-linked there.

---

## 1. SERP analysis

### Route taken, and why

| Step | Instrument | Result |
|---|---|---|
| 1 | `scripts/serp-ddg.mjs --region ru-ru` | **Failed.** First call sent the flags in the wrong order and used the literal string `ru-ru` as the query (script-argument bug, not a network result). Corrected call: `(no results parsed — DDG markup may have changed)`. Per BRIEF §3, not retried. |
| 2 | **Google served to Russia**, `gl=ru&hl=ru&pws=0`, operator's real Chrome, read-only | **Worked.** Run twice on 2026-09-27; identical set of 11 external hosts and identical block structure both times. |
| 3 | Bing `mkt=ru-RU` / Brave `country=ru` | Not needed, not run. |
| 4 | Yandex | Not attempted — the sibling confirmed a captcha wall for scripts, and BRIEF §3 forbids clicking past one. |

**Self-authentication.** Both scrapes came back in Russian, with page title
«скучаю по тебе на английском - Поиск в Google» *and* — which is the part that actually
authenticates — body headings that are translations of this keyword
(«Перевод "Я скучаю по тебе" на английский», «Как сказать я скучаю по тебе на английском»).
Nothing from another agent's SERP was recorded. `surferseo.com` and `docs.surferseo.com`
appeared in the DOM and were **discarded as a browser-extension artefact** (Keyword Surfer),
not counted as organic.

### What actually sits above the organic results

Three Google-owned blocks, in this order, before rank 1:

1. **Google Translate widget** — «Перевод / Русский / Английский / `skuchayu po tebe` → `miss you`».
   Note it transliterates the Cyrillic query and returns **`miss you`, without `I`**.
2. **«Вопросы по теме»** (People Also Ask), 4 questions: «Как сказать на английском "я очень
   скучаю по тебе"?», «Как правильно сказать "я скучаю по тебе"?», «Как на английском скучаю?»,
   «Как по-английски я соскучилась по тебе?»
3. **«Обзор от ИИ»** (AI Overview) — answers «I miss you», cites Memrise and Reverso Context.

**The Translate widget ceiling reported by wave-1 translation rows HOLDS on this query, and it is
worse than a widget: the query is answered three times before the first link.**

### Organic results actually seen (11)

| # | Host | Page type | Weak? |
|---|---|---|---|
| 1 | context.reverso.net | parallel-example bank | weak |
| 2 | translate.yandex.ru | MT dictionary page | weak |
| 3 | context.reverso.net (second URL) | parallel-example bank | weak |
| 4 | memrise.com | UGC phrasebook entry | weak |
| 5 | instagram.com | 0:06 reel | weak |
| 6 | learnwitholiver.com | one-sentence page | weak |
| 7 | vibeling.app | app dictionary page | weak |
| 8 | youtube.com | 0:36 short | weak |
| 9 | tiktok.com | 0:12 video | weak |
| 10 | begin-english.ru | **editorial article**, «10 способов сказать "я скучаю" на английском» | strong-ish |
| 11 | ru.glosbe.com / словарь.reverso.net | dictionary scraper | weak |

**Weak count: 10 of the 11 results I actually saw.** Ranks beyond what the DOM returned are not
asserted.

### Gate 4 verdict — **PROCEED**

The organic field is dictionaries, MT example banks, app pages and short video, with exactly one
editorial article. That is precisely the weak field BRIEF §3 describes as the real opportunity for
an A/B row. The obstacle here is not the competition; it is the three Google-owned answer blocks
above it. The post is therefore built to be worth reading *after* the one-line answer, and gives
the one-line answer in its second line so the reader who only wanted it is not detained.

### Checkable errors in ranking results

1. **Google's own AI Overview** glosses «**I'm missing you** — Я скучаю (процесс происходит прямо
   сейчас)». Measured below: the progressive is **3 of 83** attested translations (3.6%), and the
   ongoing imperfective is rendered by the **simple** present 90.4% of the time. The block presents
   the marked minority form as the natural one.
2. **The snippet Google serves for #3 (translate.yandex.ru)**, read identically on both runs, pairs
   «Я скучаю по тебе очень сильно» (present) → *I missed you so much* (past) **and**
   «Я так скучала по тебе» (past, feminine) → *I miss you* (present). Both directions inverted, in
   one snippet, on a page ranking top-3 for a query about exactly this.
3. Weaker, recorded but not load-bearing: **begin-english.ru** (the only editorial result) lists
   «Your presence makes me a happy person» and «I look forward to seeing you again» among ways to
   say «я скучаю» — presence and a future meeting, not absence — and glosses *I long for you* as
   «Я скучаю по тебе» two lines before glossing *to long for somebody* as «тосковать по кому-то».

No competitor page is linked from the post.

---

## 2. Gap analysis

**Table stakes** (all of the top results carry these): the string *I miss you*; a handful of
intensifiers (*so much*, *a lot*, *very much*); *miss you* as an informal shortening.

**The gap, and it is total:** not one result on this SERP measures anything. They list
alternatives. None of them answers the two questions a Russian speaker actually has —

- does the Russian **imperfective** correspond to *I miss you* or *I am missing you*?
- what happens to **скучал / скучала**, and to **соскучился**?

**Fan-out sub-queries → H2/H3 map**

| Sub-query | Section |
|---|---|
| как сказать скучаю по тебе на английском | intro, line 2 |
| I miss you или I am missing you | H2 «Почему не "I am missing you"» |
| как сказать скучала по тебе (женский род) | H2 «Скучал или скучала» |
| соскучился по тебе на английском (PAA #4) | H2 «Соскучился — это I've missed you» |
| я очень скучаю по тебе на английском (PAA #1) | H2 «Очень, ужасно, безумно» |
| таблица форм | H2 «Пять русских форм», 5 H3s + table + ItemList |
| тоска непереводима? | H2 «Тоска: правда ли её нельзя перевести» |
| правильно ли переводит Google | H2 «Что стоит над выдачей», FAQ |

**Angle:** wins by being the only page on this SERP that *measures* how attested rus→eng sentence
pairs render *скучать*, and uses the measurement to show what English drops.

---

## 3. Measurement — Tatoeba `rus`→`eng`, harvested 2026-09-27

Harvested through the public `api_v0/search` endpoint, deduplicated by sentence id, classified by
regex on the Russian verb form and on the English verb phrase. Raw data kept out of the post;
only the counts are published.

### Tokenisation survival — reported, not hidden

- Query **«скучаю по тебе»**: **193 raw hits reported**, **47 sentences (24.4%) literally contain
  the string**. The search is lemmatised/tokenised — the very first result for «скучаю» was
  «Молодёжь скучает», glossed *The youth are bored*.
- Query **«скучал»** hit the API's **1000-result cap**, so **no rate was computed from it** and it
  is used only to widen the deduplicated pool.
- Queries **тоска / тоскую / тосковать**: 50 unique sentences, **50 of 50 (100%) literally contain
  тоск-** — a distinctive stem loses nothing to tokenisation.

### Aspect — the headline result

| Set | Sentences | EN translations | Simple present | Progressive | Past-marked |
|---|---|---|---|---|---|
| «скучаю по тебе» exactly | 47 | 83 | **75 (90.4%)** | 3 (3.6%) | 1 (1.2%) |
| all present-tense скучать | 204 | 284 | **266 (93.7%)** | 10 (3.5%) | 1 (0.4%) |

**The Turkish sibling's 80.8%-past-marked finding does not replicate for Russian present tense —
0.4% here.** Measured, not assumed. The likely reason is lexical, not aspectual: English *miss* is
a stative verb, and statives resist the progressive. The two non-standard renderings in the 83 are
*I pine for you* and *I'm languishing for you*, one occurrence each.

### Past tense, and the loss of speaker gender

| Set | Sentences | EN translations | Simple past | Present perfect | Present |
|---|---|---|---|---|---|
| imperfective past скучал/скучала | 116 | 170 | 101 (59.4%) | 53 (31.2%) | 13 |

- **13 minimal pairs** in the data: Russian sentences differing *only* in скучал/скучала.
- **16 English strings attested for both genders**, including *I missed you*, *I've missed you*,
  *I've missed you so much, Tom*, *I missed you for all this time*, *I've missed you terribly*.
- Dictionary corroboration: `gramota.ru/meta/skuchat` prints the full paradigm with
  Мужской род **скуча́л** / Женский род **скуча́ла**.

**This is the real, checkable loss: English has no slot for it.**

### Perfective соскучиться

| Set | Sentences | EN translations | Present perfect | Simple past | Present |
|---|---|---|---|---|---|
| соскучиться (idiom removed) | 31 | 51 | **40 (78.4%)** | 6 | 5 |

36 raw hits; **5 removed** as the idiom «с тобой не соскучишься» → *There's never a dull moment
with you* (a separate sense, and BТС carries it as such).

**78.4% present perfect against 31.2% for the imperfective past.** So the prompt's framing —
"English has no single form for соскучился" — is wrong: it has one, and the corpus picks it.
The Russian aspect contrast is **re-encoded as a tense choice**, not lost.

Dictionary corroboration: BТС via Gramota defines соскучиться with **inchoative** verbs —
«Почувствовать скуку» and «Затоскова́ть без кого-, чего-либо» — i.e. *come to feel*, which is
exactly what the English present perfect carries.

### Polysemy split

Of 462 unique deduplicated Russian sentences containing скуча-/соскуч-, **34 are rendered with
bored / boring / dull**. BТС via Gramota confirms the split at sense level: скучать sense 1
«Испытывать скуку», sense 2 «Томиться, тосковать без кого-, чего-либо». English splits this one
Russian verb into two unrelated verbs.

---

## 4. The *тоска* untranslatability claim — tested, rejected

Tested the way a wave-1 row demolished the same claim for *saudade*: by asking whether other
languages register the word, rather than repeating the assertion.

1. **Russian's own synonym list.** `gramota.ru/meta/toska`, Большой толковый словарь русских
   существительных, sense 2 synonyms: «уныние, печаль, грусть, **меланхолия**, разг. хандра,
   устар. **ипохондрия**, устар. **сплин**, тревога». Three of eight are West European
   borrowings; **сплин is English *spleen***.
2. **Other languages have the word.** English Wiktionary (`en.wiktionary.org/wiki/тоска`,
   headword verified) glosses it in three plain senses — *melancholy, depression* / *boredom,
   ennui, weariness* / *longing, yearning* — with a 2018 song citation. It derives from
   **Proto-Slavic \*tъska** («emptiness; melancholy, sorrow, grief»), whose descendants include
   Czech *teskný*, Polish *tęskny*, Slovak *tesklivý*, Ukrainian and Belarusian. **This
   independently confirms the Polish sibling's \*tъsk- / tęsknota claim.**
3. **The corpus translates it every time.** 50 unique тоск- sentences on Tatoeba, **50 of 50
   translated into English**, none transliterated as *toska*. Renderings:
   homesick/homesickness **22**, longing 7, yearn\* 6, melancholy 2, pine/pining 2, sadness/sad 2,
   plus anguish, grief, sorrow, blues, gloomy, wistfulness, nostalgia. «Тоска.» → *How boring.*;
   «Тоска зелёная» → *Dead boring* — matching BТС sense 2, «Гнетущая, томительная скука».

**Verdict: the claim fails all three tests.** The commonest English rendering of *тоска* in an
attested corpus is the entirely ordinary word **homesick**.

**Nabokov's famous gloss is deliberately NOT cited.** `en.wikipedia.org` has no *Toska* article
(API search returned a band and a TV-franchise list), and no reachable source for the *Eugene
Onegin* commentary quotation was found. Repeating it from memory would have been exactly the
failure mode BRIEF §4 warns about.

**Honest limitation, stated in the body:** Tatoeba is a volunteer sentence bank, not a balanced
corpus, and n=50 is small. This tests one claim on available data; it is not a refutation of a
theory.

Also confirmed from `gramota.ru/meta/toskovat`: тосковать is imperfective, its BТС examples give
**«Тосковать по уехавшим детям»** (по + dative) alongside «Тосковать о родине» (о + prepositional)
— which corroborates the Polish sibling's government claim without re-deriving the case dispute.

---

## 5. Sources (6)

| # | URL | What it carries | Subject test | Peer-reviewed / OA |
|---|---|---|---|---|
| 1 | `gramota.ru/meta/skuchat` | BТС: two senses of скучать; paradigm скуча́л / скуча́ла | ✅ the language | — |
| 2 | `gramota.ru/meta/soskuchitsya` | BТС: inchoative definitions of соскучиться | ✅ the language | — |
| 3 | `gramota.ru/meta/toska` | BТС + БТСРС: three senses; synonyms меланхолия / ипохондрия / сплин | ✅ the language | — |
| 4 | `tatoeba.org` (rus→eng search) | every count in this brief | ✅ attested usage | — |
| 5 | `en.wiktionary.org/wiki/тоска` | PSl \*tъska etymology, three English glosses, 2018 citation | ✅ the language | — |
| 6 | `europepmc.org/article/PMC/PMC11465115` — *iScience*, 12 Sep 2024, CC BY | MT error causes: grammatical case (names **Russian**) and verb conjugation (tense/mood/aspect/agreement) | ✅ translation | ✅ **peer-reviewed, gold OA** |

- **Journal named for the human cap count: *iScience*** (Elsevier / Cell Press). Not *Frontiers in
  Psychology*, not *PNAS*, not *PLoS ONE*, not *Scientific Reports*.
- **Full text read**, not the abstract: the europepmc.org landing page 403s a scripted UA, so the
  article was read through the Europe PMC REST `fullTextXML` endpoint (233,594 bytes). Unpaywall:
  `is_oa=true`, `oa_status=gold`.
- **Rejected:** `PMC8669216` (J. Social and Personal Relationships, long-distance texting) — already
  in 3 posts of this batch, over the URL cap of 2. `PMC12842814` (Journal of Intelligence, *Love* in
  L1 vs additional language) — `fullTextXML` 500s and the MDPI PDF returns a 2,317-byte HTML
  bot-challenge at HTTP 200, so it was dropped rather than cited from its abstract.
  `PMC12599338` — spent by the sibling.
- Wikipedia links in the body: **0**. Generic context statistics: **0**.
- All six hosts are cap-exempt instruments; `capcheck.mjs` run immediately before the write —
  no banned URL used, `doi.org` at cap 3 and deliberately avoided.

---

## 6. First-party facts

Five platform-wide lines, chosen deliberately away from the six heavily-collided miss-you lines.
Measured across both batches, those miss-you lines carry 34–64 posts each; the sibling spent the
2.6 h edit gap, 88.8% published, 86.4% memories and the 214-page line.

| Line | Prior uses across both batches |
|---|---|
| `Average views per created page: 11.1` | **0** |
| `Most-viewed template: love-gf — 17,093 views, 29.7%` | 1 |
| `Average pages per registered creator: 1.35` | 3 |
| `5,199 personalised pages … across 21 page types` | 4 |
| `48.3% of shared pages are opened on a phone` | 4 |

Two are inside the first 150 words. **Copied byte-verbatim** from `facts-snapshot.md`, in English,
inside Russian prose.

**Mandatory caveats, in Russian body prose:** views are page views, not unique visitors; the
database records **which template was opened, never who received it**; and **nothing is segmented
by language or country, so no figure in this post is Russian**. The pricing block in
`facts-snapshot.md` is empty, so no cost, tier or price claim appears anywhere.

---

## 7. Product disclosure

`/missyou-gf` is defined at `app/lib/prompt.ts:44` as an **"I miss you page for a girlfriend/partner"** —
English labels, English furniture, a girlfriend/partner recipient. The body says plainly that a
Cyrillic line will sit inside Latin-script furniture, and that **a reader who only needed the
translation needs nothing from SubhSandesh**. The genuine alternative offered is `/streak`
(one tap a day for two people) for the reader whose "скучаю" is a recurring state rather than a
single message, with the reason given.

---

## 8. Audit

50 items, 46 passed, 4 failed, `passed ∩ failed = ∅`. The four left open:

1. **At least one table column uses first-party data** — structural. No column can be first-party
   without implying a per-language segmentation the database does not have.
2. **No source passes the swap test** — the iScience MT review could sit unchanged in another
   translation row of this batch. Kept because it is the only peer-reviewed OA source the checklist
   requires, and the quoted sentence names Russian.
3. **Every internal link is a real URL from TEMPLATE_LINKS** — 3 of 4 are; the fourth is the
   BRIEF §1-mandated sibling cross-link, a live Strapi article (id 2752), which is not and cannot be
   in TEMPLATE_LINKS.
4. **Any paywalled citation records that only the abstract was read** — no paywalled source, but the
   reading route is recorded because the europepmc landing page 403s a scripted UA while the REST
   endpoint served the whole article.

Extras live in `batchMeta.additionalChecks`, never in `passed` or `failed`.
