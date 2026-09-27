# Research brief — `ya-tozhe-skuchayu-po-tebe`

- **Primary keyword:** `я тоже скучаю по тебе` (native Cyrillic; the WAVE3-PLAN row carries
  `я тоже скучаю по тебе in english`, the task prompt corrected it to the bare Cyrillic form and
  that is what `batchMeta.keyword` holds).
- **Body language:** Russian, Cyrillic throughout. **Region:** `ru-ru`. **Lane:** A-reply.
- **Category:** `miss-you-across-miles` (verified present in the live Strapi category list,
  10 categories returned 2026-09-27).
- **Slug check:** `https://strapi.subhsandesh.in/api/articles?filters[slug][$eq]=ya-tozhe-skuchayu-po-tebe`
  returned `total: 0` on 2026-09-27 via `ctx_execute`. Free. (Checklist item #25 passes; the
  WAVE1 knownIssue about "Strapi offline" is an orchestrator error and production is up.)

---

## Phase 1 — SERP, measured

Four ru-ru SERPs were run. **Route 1: `scripts/serp-ddg.mjs`, query first, `--region ru-ru`.**
It worked — no browser, no contention exposure. The `query:` line echoed back correctly on every
call, so no mis-ordered-argument artefact. **Route 2: Google in the real browser,
`gl=ru&hl=ru&pws=0`,** self-authenticated on content (page title AND the returned results were
Russian and carried my query; the "correct title is not authentication" trap was avoided by
checking the organic result texts themselves).

### 1a. DDG `ru-ru`, `я тоже скучаю по тебе` — run twice, results NOT stable

Run 1 and run 2 overlapped on roughly 5 of 10 hosts and differed on the rest. **That instability
is itself a finding and is reported rather than hidden.** What did not change is the page *type*:

| run 1 | run 2 |
|---|---|
| pozdravok.com (×2, poems) | pozdravok.com (×2, poems) |
| stihovik.com (poems) | rutube.ru (×2, the song) |
| ru.muzland.ru (song lyrics) | my.mail.ru/music (the song) |
| my.mail.ru/music (the song) | mychords.net (chords) |
| datki.net (×2, message listicles) | ru.muzland.ru (lyrics) |
| mysekret.ru (poem) | datki.net (listicle) |
| fabulae.su (a poem) | slova-citaty.ru (reply listicle) |
| youtube.com (excluded by the tool) | youtube.com (excluded by the tool) |

**Zero results on either run address «тоже».** DDG treats the string as the base phrase
«скучаю по тебе».

### 1b. Google `gl=ru&hl=ru&pws=0&num=20`, `я тоже скучаю по тебе`

Google returned **8 organic results** (plus a `lumendatabase.org` DMCA filtering notice, which is
what a music SERP looks like). Counted only what was actually seen — 8, not 10.

| # | host | page type | weak? |
|---|---|---|---|
| 1 | open.spotify.com | song track, Рамиль Муликов | weak-for-me, unwinnable |
| 2 | vk.ru/wall | social post | weak |
| 3 | mp3party.net | mp3 download | weak |
| 4 | music.apple.com | song track | weak-for-me, unwinnable |
| 5 | context.reverso.net | translation-memory scrape | weak |
| 6 | reddit.com (`?tl=ru`, machine-translated) | forum thread | weak |
| 7 | muzkach.net | mp3 download | weak |
| 8 | pozdravok.com | poems in prose | weak |

**8 of 8 weak on the authority test. But 5 of 8 are the song** — «Я тоже скучаю по тебе» is a
track by Рамиль Муликов, and GUT1K's «Я тоже скучаю» fills the video carousel. **That is a Gate 2
page-type mismatch: a blog post cannot displace Spotify and Apple Music on a song title.**

**Blocks above organic rank 1, in order:** (1) an **«Ответ режима ИИ»** block (Google AI Mode;
confirmed by its `support.google.com/websearch?p=ai_overviews` link), (2) a **book knowledge panel**
built from `books.google.com` + litres.ru (Марика Внукова's novel of the same title), (3) a
**Spotify entity panel**, (4) a **YouTube video carousel with Google-generated chapter fragments**.

**Answering the sibling's question directly:** the `skuchayu-po-tebe-na-angliyskom` row measured
three Google-owned blocks above rank 1 — Translate widget, «Вопросы по теме», «Обзор от ИИ».
**That exact ceiling does NOT hold here.** There was **no Translate widget** and **no «Вопросы по
теме»** on my query. What sits above rank 1 instead is an AI-Mode block plus three
*entity* panels (book, song, video), because this string is a title, not a translation request.
**The AI-Mode block's text did not render into the DOM** on either read attempt, so no claim is
made about what it said — an unread block is not evidence.

### 1c. Google `gl=ru&hl=ru&pws=0`, `я тоже или я также скучаю по тебе как правильно`

This is the query that matters, and the result is the strongest gap evidence in the brief.
**Every organic result answered a different question.** Seven of eight were about
**по тебе / за тобой / по вам / по вас** — the preposition-and-case dispute — and one was about
**«также» vs «так же»**, the orthography question. Result headings as returned:

- «Почему нельзя говорить "я скучаю за тобой"»
- «Скучаю: по вам, по вас или за вас? — Русский язык»
- «Как правильно говорить: "скучаю по тебе…"»
- «Как правильно: скучаю ПО тебе или ЗА тобой?…»
- «Скучаю по вам, по вас или за вами? Как сказать правильно?…»
- «Скучать по вам/по вас/за вами? Речевые ошибки в…»
- «Как правильно: скучаю по вам или скучаю по вас?»
- «"Также" или "так же": как пишется, раздельно или слитно»

**Not one result answers тоже vs также.** Google substitutes the adjacent, more famous dispute —
the one the live sibling `skuchayu-po-tebe-ili-za-toboy-kak-pravilno` already owns.

### 1d. DDG `ru-ru`, two supporting queries

- **`что ответить на я скучаю по тебе`** — the true reply-intent SERP. **10 of 10 weak.**
  Four different domains (infoniac.ru, infodays.ru, maple.by, ogonek.msk.ru) carry the *same*
  syndicated article, «110 оригинальных ответов на сообщение "Я скучаю"». Plus slova-citaty.ru
  («156 фраз»), two `otvet.mail.ru` threads, bolshoyvopros.ru, a dzen.ru blog, mksegment.ru.
  Zero dictionaries, zero grammar authorities, **zero pages that mention тоже vs также at all**.
- **`тоже или также как правильно`** — the usage SERP. Held by grammar sites
  (russkiiyazyk.ru ×2, lazurkin.com, lifehacker.ru, profi.ru, lenta.news, ria.ru, dzen.ru,
  ruhomeschool.ru, mksegment.ru) — but **9 of 10 answer the *spelling* question**
  (слитно/раздельно: также vs так же, тоже vs то же), not the *choice* question.

---

## Phase 2 — Gap analysis

**Table stakes** (present on the reply SERPs): a list of things to write back; a note that the
reply should be sincere; register advice for partner vs ex vs friend.

**Table stakes** (present on the usage SERPs): the слитно/раздельно test ("drop the же", "replace
with и"); the part-of-speech label "союз"; a worked example or two.

**The gap, measured, not assumed:** the reply SERP has no grammar and the grammar SERP has no
reply. The two do not meet on any page in either top ten. **Nobody answers: in the sentence you
are about to send, is it тоже or также, and where does it go?**

**Stale / wrong data on ranking pages:** see the checkable error below.

**Fan-out sub-queries** → H2s: тоже или также в ответе · куда ставить тоже · чем «я тоже по тебе
скучаю» отличается от «я по тебе тоже скучаю» · что английское *too* не различает · как ответить
в отрицании · «мне тоже тебя не хватает» · почему «тоже» умеет звучать насмешкой · что стоит в
выдаче.

**Angle:** wins by being the only page on either SERP that answers тоже-vs-также *inside this
sentence*, with three Gramota rulings that contradict each other, a peer-reviewed Russian paper
that says the school classification is unsafe, and 35 attested Tatoeba sentences in which тоже
never once precedes the word it attaches to.

### The checkable error in a ranking result

**`lazurkin.com/samopodgotovka/soyuzy-tozhe-takzhe`, rank 2 on DDG ru-ru for
«тоже или также как правильно»** — an exam-preparation page for ЦТ / ЦЭ / ЕГЭ. It states:

> «Союз "также" используется для выражения добавления или присоединения к уже сказанному, но с
> акцентом на **равенство или одинаковость** действий…»
> «"Тоже" подчеркивает присоединение к уже сказанному, тогда как "также" акцентирует внимание на
> **равенстве или одинаковости** действий»

**That is the two definitions swapped.** The Большой толковый словарь русского языка (Кузнецов),
served on Gramota's metaslovar with the headword `то́же` verified on the page, defines **тоже** as
«**Равным образом, в равной мере**; также» — the 'equal measure' sense belongs to *тоже* — and
defines **также** as a союз that «**Присоединяет** однородные члены предложения или предложения в
составе сложного» — the 'joining / adding' sense belongs to *также*. Gramota's справочная служба
answer **№ 203084** points the same way: the reading «этот календарь выполнен **ещё и** в голубом
цвете» «обладает только вариант с **также**».

Two further problems on the same page: it says «"Тоже" чаще используется в разговорной речи, тогда
как "также" может встречаться как в разговорной, так и в письменной», where Gramota **№ 330967**
says «также — более официальное и книжное, **тоже — нейтральное**»; and it prints
«Я люблю читать книги, и мой брат **также**» as correct, which is precisely the elliptical shape
Gramota **№ 330967** names as one where the substitution is impossible.

Underneath all of it: Власова (2022) argues in a peer-reviewed university journal that calling
these words союзы is unsafe and that «такого рода вопросы логичнее было бы исключить хотя бы на
время» from the ЕГЭ — while lazurkin.com sells ЕГЭ preparation on exactly that classification.

---

## Phase 3 — Sources

Caps checked with `capcheck.mjs` immediately before writing. `doi.org` is **at cap 3**, so both
papers are cited by their resolved **publisher / repository URL**, never through the resolver.
Banned journals avoided: *Frontiers in Psychology*, *PLoS ONE*, *Scientific Reports*,
*BMC Psychology*, *Behavioral Sciences*. **Two strong candidates were rejected on those grounds
and it is worth recording which:** the emoji-and-perceived-responsiveness paper
(doi:10.1371/journal.pone.0326189, PMC12221085) is ***PLoS One*** — banned; and
"Long-distance texting" (doi:10.1177/02654075211043296) is **PMC8669216**, which the task prompt
lists at URL cap 2. Neither was used.

1. **Власова, О. Б. (2022). «Слова "тоже" и "также" в современном русском языке».
   Вестник Тверского государственного университета. Серия: Филология, № 3 (74), С. 95–100.
   ISSN 1994-3725.** `https://eprints.tversu.ru/id/eprint/11515/`
   **Journal named for the cap census: Вестник Тверского государственного университета.
   Серия: Филология.** Peer-reviewed, open access via the Tver State University repository.
   **READ IN FULL** — the 336 KB published-version PDF was downloaded and parsed with
   `/usr/local/bin/pdftotext -layout` (poppler); all six pages, references included.
   What it actually says: the morphological status of тоже/также is genuinely unsettled —
   Розенталь's «Практическое пособие» files them under «Правописание союзов» (с. 125–128),
   Ожегов–Шведова calls тоже a наречие, Галкина-Федорук (1958, с. 153) calls them
   соединительные союзы, and Власова argues for **частицы**. Her functional definition is the
   load-bearing quote: «частицы тоже и также подчеркивают однотипность действий, совершенных
   **разными субъектами** (Он засмеялся, и я тоже улыбнулся), **одним субъектом в отношении
   разных людей** (Дай мне тоже яблоко), а также — однотипность признаков». She also rejects
   the наречие label on the ground that наречие «примыкает к глаголу… отвечая на специальные
   вопросы», which пошел тоже / дай тоже do not do, and concludes that ЕГЭ questions on this
   should be suspended until the matter is settled.

2. **Berchio, C., Bonvin, A. & Berthele, R. (2025). "Swiss-German Additive Focus Particle *auch*
   in bi-/multilingual Speakers: The Role of Language Typology, Language Dominance and
   Proficiency." Journal of the European Second Language Association, 9(1), 85–102.
   Submitted 15 Apr 2024, accepted 13 Feb 2025, published 16 Jun 2025. CC BY 4.0, peer reviewed.**
   `https://euroslajournal.org/articles/10.22599/jesla.127`
   **Journal named for the cap census: Journal of the European Second Language Association.**
   **READ IN FULL** — the complete article text is served on the article page (70 KB of text
   after stripping), including Table 4. n = 71 Swiss German–French bilinguals, n = 70 Swiss
   German–Italian bilinguals, n = 40 Standard German and n = 40 Swiss German monolinguals; the
   dependent variable is where *auch* is placed. Table 4: left-of-entity 71 (25%) / 119 (37%) /
   70 (36%) / 74 (36%); post-finite 209 (75%) / 203 (63%) / 126 (64%) / 118 (64%). The line that
   carries the post: «**The left-of-entity position of the additive focus particle is not shared
   with English.**» Also: Italian is classified as entity-based and the post-finite position is
   considered non-grammatical there.

3. **Грамота.ру, справочная служба, ответ № 330967.**
   `https://gramota.ru/spravka/vopros/330967` — Q: «"Тоже" & "Также" — это полные синонимы?»
   A verbatim: «Эти слова часто взаимозаменимы, но не всегда. **Есть конструкции, где замена
   невозможна, например во фразах Я тоже!** или Напиток содержит витамины, а также минеральные
   компоненты. Есть и стилистические различия: также — более официальное и книжное, тоже —
   нейтральное.» Cap-exempt reference instrument.

4. **Грамота.ру, справочная служба, ответ № 213923.**
   `https://gramota.ru/spravka/vopros/213923` — asked by a reader whose Serbian friend wanted the
   difference explained. A verbatim: «1. В значении союза, который соединяет однородные члены
   предложения, указывая на их тождественность или близость по значению, **варианты тоже и также
   равноправны: Ты устал, я тоже / также.** Брат бросил курить, вам тоже / также следует сделать
   это. 2. В значении частицы (разг.) «неодобрение по адресу кого-л., сомнение относительно
   чьего-л. права называться как-л., делать что-л.» **употребляется тоже**: Тоже, судьи нашлись!»
   Cap-exempt.

5. **Грамота.ру, справочная служба, ответ № 203084.**
   `https://gramota.ru/spravka/vopros/203084` — Q: are тоже and также equal in «Этот календарь
   тоже/также выполнен в голубом цвете»? A verbatim: «В значении "и этот календарь выполнен в
   голубом цвете" различий нет. **Значением "этот календарь выполнен ещё и в голубом цвете"
   обладает только вариант с также.**» Cap-exempt. This is the ruling that isolates the additive
   'ещё и' reading as также-only.

6. **Tatoeba, rus→eng, `api_v0` search endpoint, harvested 2026-09-27.**
   `https://tatoeba.org/en/sentences/search?from=rus&to=eng&query=%D1%82%D0%BE%D0%B6%D0%B5+%D1%81%D0%BA%D1%83%D1%87%D0%B0%D1%8E`
   Cap-exempt instrument. See the measurement section below.

**Three further Gramota rulings were read and are named by number in the body without an outbound
link, to keep the post inside the checklist's 3–6 outbound-link ceiling:** № 209450 («Стилистической
разницы нет»), № 100004 (the слитно/раздельно ruling, which also gives «При слитном написании также
имеет значение 'еще' или 'тоже'»), and № 305878 (word order: «В спонтанной разговорной речи такой
порядок слов возможен. Хотя, конечно, проще воспринимается вариант Завтра тоже дождь»). The
metaslovar entries `gramota.ru/meta/tozhe` and `gramota.ru/meta/takzhe` were both fetched and the
headwords `то́же` and `та́кже` verified on the page before anything was quoted from them — the
MARAUD / DEZILITER trap applies to Gramota too, and it was checked.

---

## The Tatoeba measurement

Tatoeba's search is **tokenised**, so every hit was inspected and literal survivors are reported
rather than raw totals. Counts are from the `api_v0` endpoint, 2026-09-27.

**`тоже скучаю` (rus→eng): 35 raw hits, 35 harvested, 35 literal survivors** — every one is a
real sentence pairing тоже with скучать/скучаю/скучал/буду скучать.

- **Where тоже sits, in all 35:** immediately **after** the element it attaches to, every single
  time. **29 of 35** have тоже directly after the subject (`Я тоже по тебе скучаю`,
  `Мы тоже будем по вам скучать`, `Уверен, Том тоже по тебе скучает`). **6 of 35** have it
  directly after the object phrase (`Мы по тебе тоже скучали`, `Я и по тебе тоже буду скучать`,
  `Я по тебе тоже!`). **Zero of 35 place тоже before the word it adds.**
- **English collapses the distinction.** 27 distinct English strings across the 35; **25 contain
  *too***, one uses *also*, one uses *so do we*. The decisive evidence is two attested minimal
  pairs:
  - `Я тоже буду скучать по тебе` → "I'll miss you too." / "I'm going to miss you, too."
  - `Я и по тебе тоже буду скучать` → "I'll miss you too." / "I'll miss you, too."
    Two different Russian scopes, **the same English string**.
  - `«Том, я так по тебе скучала!» — «Я по тебе тоже.»` → "Me too." — an object-echo in Russian
    rendered by an English phrase that reads as a *subject* echo.
- **The exact keyword string is not the attested word order.** `я тоже скучаю по тебе` as a
  literal substring: **0 of 35**. `я тоже по тебе` : 6. `тоже по тебе скучаю` : 3.
  `по тебе тоже` : 4. Tatoeba's Russian prefers the verb-final order `Я тоже по тебе скучаю`.
  The order after тоже splits 16 PP-first / 16 verb-first across the 35, which at n = 35 is a
  count, **not a rate**, and no percentage is derived from it.

**также with скучать: zero.** `также скучать` → 0 hits. `также скучаю по тебе` → 0 hits.
`также по тебе` → **1 raw hit and 0 literal survivors**: the single hit is a long sentence about
Anglo-Saxons («Они также сделают несколько фильмов…») that matches only because the search is
tokenised. This is the tokenisation trap working exactly as the brief warned, caught by
inspecting the hit.

**Negation — `я тоже не`: 371 raw hits, first 30 inspected in full.** Russian keeps the *same*
particle under negation; English does not. Of the 30, **29 are rendered with *either* / *neither* /
*nor*** («Я тоже не уверена» → "I'm not sure either", «Я тоже не могу» → "Nor can I" / "Neither
can I"). Exactly one uses *also* («Я тоже не звонил» → "I also did not call"). Exactly one
sentence offers a *too* variant at all — «Я тоже не студент» → "I, too, am not a student", listed
beside "I'm not a student either". **Not one of the 30 is rendered with a plain clause-final
*too*.** A 30-sentence sample of 371 is a sample and is described as one.

**The dative variant — `мне тоже не хватает`: 10 raw hits, 10 literal survivors.** These give the
second minimal pair, in a different construction:
- `Мне тебя тоже не хватает!` → "I miss you too!"
- `Мне тоже тебя не хватает.` → "I miss you, too."
Again: two Russian scopes, one English string. `мне тебя не хватает` alone returns 47;
`тебя не хватает` returns 128.

**Frequency, with the ceiling disclosed:** `я также` returns **56**. `я тоже` returns **1000** —
which is the API's result ceiling, not a true count (`я`, `не` and `тоже` each also return exactly
1000). So the honest statement is "at least eighteen times more", not a ratio.

---

## What this post does NOT re-derive

- **`skuchayu-po-tebe-ili-za-toboy-kak-pravilno` (LIVE, id 2752)** owns the preposition-and-case
  dispute: по + дательный is normative (Грамота № 274269: «Нормативно: скучать по тебе»),
  за + творительный is outside the literary language (№ 332860), Розенталь and Ожегов–Шведова
  contradict each other on «по вас», and ты has a single form `тебе` for both dative and
  prepositional so the dispute is morphologically invisible in this exact phrase. **Not re-opened
  here.** Cross-linked; the link resolves today.
- **`skuchayu-po-tebe-na-angliyskom`** owns the English rendering: 93.7% simple present across 284
  translations, the speaker's gender lost in the past, соскучиться → present perfect 78.4%, and
  the three-way rejection of the тоска-untranslatability claim. **Not re-opened here** — this post
  only measures what English does with the *particle*, which that row did not test.
  **Cross-linked, and the link 404s until that batch publishes.**
- **NKRJa (`ruscorpora.ru`) was deliberately not run.** It is browser-only (its SPA's only scripts
  are Yandex SmartCaptcha, `/api/search` 404s), the `na-angliyskom` row already declined to
  re-run it, and duplicating that work has no value. Tatoeba carries this post's measurements
  instead, and the post says so.
- **Yandex was not attempted.** It is a captcha wall for scripts and nothing is ever clicked past
  a captcha in the operator's browser.

## First-party facts — the split from both Russian siblings

Collision counts were computed across all 529 post JSONs on disk before choosing. The two least-used
lines in the whole snapshot (**1 prior use each**) were taken deliberately, plus the 3-use touch-device
line, plus the pair the task prompt flagged:

| line | prior uses | used by a Russian sibling? |
|---|---|---|
| `#1 page type: apology dashboard … 1,396 created, 26.9%` | 1 | no |
| `#5 page type: Darling romantic page (/darling) — 457 created, 8.8%` | 1 | no |
| `48.4% of views are on a touch device` | 3 | no |
| `Median gap … 2.5 hours — sampled on apology dashboard, n=1,396` | 14 | no |
| `Median gap between a miss-you page's … 2.6 hours, n=214` | 38 | yes (`ili-za-toboy`) |

**Overlap with `skuchayu-po-tebe-na-angliyskom`: zero lines.** Overlap with
`skuchayu-po-tebe-ili-za-toboy-kak-pravilno`: one line, the 2.6-hour edit gap — kept on purpose,
because **pairing it with the platform-wide 2.5-hour line is itself the finding**: the two figures
are measured on different populations (n=214 miss-you pages vs n=1,396 /apology-dashboard pages)
and land 6 minutes apart. Writing a miss-you page takes the same order of time as writing an
apology page. Nothing in the database is segmented by language or country, so neither number is
Russian, and the database records which **template** was opened, never who received it.

## Price guard

No price, tier or cost claim appears in the post. The Russian forms of the banned word
(бесплатно, без оплаты, даром, ничего не стоит) do not appear. `pricecheck-intl.mjs` was run
against the written file.
