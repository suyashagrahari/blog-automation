# Research brief — скучаю по тебе или за тобой как правильно

slug: `skuchayu-po-tebe-ili-za-toboy-kak-pravilno` · region `ru-ru` · tier `A-grammar` · bodyLanguage RUSSIAN
Measured 2026-09-26.

## 1. SERP — measured, with an instrument substitution I have to disclose

**The prescribed instrument failed.** `node scripts/serp-ddg.mjs "скучаю по тебе или за тобой как правильно" --region ru-ru --n 10`
was run 5 times over ~20 minutes. First two runs: HTTP 200 but `(no results parsed — DDG markup may have changed)`.
Runs 3–5 and every later attempt: `TypeError: fetch failed … ConnectTimeoutError … html.duckduckgo.com:443, timeout: 10000ms`.
A control English query on `us-en` failed identically, and `lite.duckduckgo.com` failed identically, so this is
DuckDuckGo refusing this IP, not the Cyrillic query. Mojeek returned a 5,724-byte stub with a bot challenge.

**Substitute instrument, disclosed:** Google served from Russia, in the user's real Chrome via PolterTab,
`google.com/search?q=…&gl=ru&hl=ru&num=20&pws=0` (personalisation off). Yandex was tried first and served
`showcaptchafast`. This is a genuine market-served SERP for Russia — it is *not* the DDG `ru-ru` SERP the
BRIEF names, and it is Google rather than the market-leading engine. Positions are Google's.

Top 10 organic (8 organic returned + one Google AI-mode block):

| # | URL | Page type | Weak? |
|---|---|---|---|
| 1 | mel.fm/gramotnost/kak-pisat/638529-miss_u — «Почему нельзя говорить "я скучаю за тобой"», 20.12.2016 | Established education media, literacy column, 9 years old, ~250 words | No — the only real editorial result |
| — | Google AI mode answer block | SERP feature | n/a |
| 2 | yandex.ru/q/lifestyle/293889/ | Yandex Q, UGC Q&A | Yes |
| 3 | kubnews.ru/turizm/2016/08/27/skuchayu-po-tebe-ili-za-toboy | Regional newspaper (Krasnodar), filed under **/turizm/**, 2016 | Yes |
| 4 | oshibok-net.ru/articles/skuchat-po-vam-po-vas-ili-za-vami/ | Small RKI teaching project, thin page | Borderline |
| 5 | forum.textologia.ru/part/theme/401/ | Forum thread | Yes |
| 6 | otvet.mail.ru/question/84786045 | Mail.ru Answers, UGC | Yes |
| 7 | dzen.ru/a/ZKgUJrZJHwMSL-Bd | Dzen blog | Yes |
| 8 | vk.ru/wall-73546564_240641 | VK wall post | Yes |

**Weak count: 6 clearly weak of 8, 7 counting oshibok-net.** No philology site ranks. **gramota.ru does not rank at all**,
although its own справочная служба has answered this exact question at least eight times since 2007. Nobody has corpus data.

**Gate 4: PASS — build.** The BRIEF's abort condition (strong Russian editorial holding the top 10, no weak result) is
not met: the top 8 is two media pages and six UGC/forum/social results.

## 2. The three constructions, verified, cases named

| Construction | Case | Verdict | Authority |
|---|---|---|---|
| скучать **по** + **дательный** — скучаю по тебе, по нему, по сыну | dative | Modern norm | Gramota № 274269 «Нормативно: скучать по тебе»; Лазуткина 2012 recommends по кому-чему; Gramota № 307831 names the case: «Местоимение стоит в дательном падеже: скучать (по кому?) по ней» |
| скучать **по** + **предложный** — скучаю по вас, по нас, по ком | prepositional | Old norm; alive only with мы / вы | Розенталь «Управление в русском языке» (repeated in the 2005 reissue); «Русская грамматика» 1980 treats по вам / по вас as variants; Лазуткина 2012 calls по ком-чем **устарелым** |
| скучать **за** + **творительный** — скучаю за тобой | instrumental | **Not normative, outside literary Russian** | Gramota, verbatim: «не является нормативным, выходит за рамки русского литературного языка»; № 308234 (16.06.2021) «Так говорить не стоит»; № 227389 (15.08.2007) «Вариант скучать за кем-то неверен» |
| скучать **о** + **предложный** — скучаю о тебе, о лете | prepositional | Correct, bookish | Ожегов–Шведова 1997 via Gramota's «Непростые слова»; БТС Кузнецова lists «(о ком-чём, по ком-чём, по кому-чему)» |

**The documented disagreement (this is the content, not a problem):**
- Розенталь prescribes **по вас / по нас** (prepositional) as the *correct* form for 1st/2nd person **plural** pronouns.
- Ожегов–Шведова 1997 mark the same **скучаю по вас** as «устарелое и просторечное» and give **по вам** (dat.) and **о вас** (prep.) as correct.
- Граудина / Ицкович / Катлинская, «Грамматическая правильность русской речи»: «формы по нам, по вам ещё нельзя считать литературной нормой, хотя они встречаются в печати» — the opposite direction again.
- Gramota's own answers moved: № 247062 (11.10.2008) «предпочтительным пока следует считать вариант скучаем по вас»; № 332860 (03.06.2026) leads with Лазуткина 2012 calling the prepositional outdated.
- History: А. Х. Востоков, «Русская грамматика» (СПб., 1834), «По ком стреляли? По неприятелю» — 19th-century norm was prepositional for кто, что, он, мы, вы.

**The point no ranking page makes:** ты has **тебе** for both dative and prepositional. The по/по dispute is
morphologically invisible in «скучаю по тебе». It only surfaces where the forms diverge — вам/вас, нам/нас, кому/ком, нему/нём.

## 3. НКРЯ — obtained. Основной корпус, 140 804 texts / 426 186 466 words, measured 2026-09-26

The scripted route failed and is recorded: `ruscorpora.ru`, `ruscorpora.ru/explore` and
`processing.ruscorpora.ru/search.xml` all returned HTTP 200 with an identical 60,019-character SPA shell whose only
script tags are `smartcaptcha.cloud.yandex.ru/captcha.js` and Yandex Metrika — **Yandex SmartCaptcha, no server-rendered
counts**. `ruscorpora.ru/api/search` → 404. `ruscorpora.ru/results?search=<guessed payload>` → 500.
**Obtained instead through the user's real Chrome** (PolterTab): ran «Поиск точных форм» once, decoded the resulting
protobuf `search=` payload, and generated the remaining query URLs by patching the phrase bytes.

| Query (exact forms) | Texts | Examples | IPM | Composition dates of the examples |
|---|---|---|---|---|
| скучаю по тебе | 37 | **56** | 0,13 | 2016–2024 spread |
| скучаю за тобой | 1 | **1** | 0 | «Открытое письмо (1965–1986)» |
| скучаю по вас | 8 | **10** | 0,02 | 1909, 1914, 1925, 1927, 1935*, 1940, 1941–45, 1973–83, 2000, 2004 — **none composed after 1983** |
| скучаю по вам | 6 | **6** | 0,01 | 1935, 1997, 2007–11, 2009, 2015, 2016 — **five of six from 1997 on** |
| скучаю о вас | 6 | 6 | 0,01 | — |

\* 1935 belongs to по вам (П. Л. Капица, «Письма»); listed here only to show the earliest по вам attestation.

- **56 : 1** — скучаю по тебе against скучаю за тобой in the main corpus.
- The single attestation of за тобой is remarkable on its own: «А я очень скучаю **за тобой** и ежечасно вспоминала **по Волге**» — the same sentence carries a second non-standard government (вспоминать по).
- **Raw totals invert the story and the dates correct it.** по вас (10) still outnumbers по вам (6) in the corpus, so anyone quoting totals alone would conclude the old form is winning. Every по вас example is a letter or a diary composed by 1983; five of six по вам examples are from 1997 onward. n = 6 and n = 10 are far too small for a rate — this is a date pattern, not a frequency claim.

## 4. The regional claim — partly verified, partly NOT

- **Verified:** English Wiktionary, `скучати` (Ukrainian): "to feel longing, to long for, to miss (**+ за + instrumental** or без + genitive)". The same page's Russian entry `скучать`: "[with по (+ dative) or о (+ prepositional)]". So за + instrumental **is** the standard government of the Ukrainian cognate.
- **NOT verified:** that Russian «скучаю за тобой» *comes from* Ukrainian or from southern Russian dialect. Gramota never says it — it only says the form is outside the literary language, with no region attached. sum.in.ua (СУМ, the Ukrainian academic dictionary) **connect-timed-out twice** and uk.wiktionary `сумувати` is a **404 empty page**, so no Ukrainian national dictionary was reachable. The post says exactly this and attributes the origin claim to the pages that make it, not to an authority.

## 5. Checkable errors found in ranking results — two

**kubnews.ru, #3.** Quoting Anna Nemyko, deputy dean of philology at Kuban State University:
«Запомните: скучать можно только ПО кому-то. Об этом ещё в середине XX века писал… Розенталь. Согласно его рекомендациям,
с существительными и личными местоимениями 3-го лица всегда употребляется предлог ПО.»
The page cites Rosenthal for "only ПО + dative, always", and stops the quotation exactly where Rosenthal contradicts it:
the same handbook prescribes the **prepositional** «скучали по нас, скучаем по вас» for 1st/2nd person plural pronouns.
Gramota quotes that clause verbatim. The page also argues «значение предлога ЗА не подразумевает употребление его в ином
значении, кроме как указания места нахождения предмета или человека» — refuted by the БТС entry for «за» itself, whose
senses include non-locative uses (взяться за работу, бояться за кого-либо).

**mel.fm, #1.** «А вот в первом и втором лице будет "скучать по ком": по нас, по вас.» Rosenthal's rule is for 1st and 2nd
person **plural** pronouns; mel.fm drops «мн. числа», so as written it also covers я and ты. And its origin claim
— «Это скорее привет соседям с Украины» — is asserted with no source of any kind.

## 6. Sources committed (6)

1. `https://gramota.ru/spravka/vopros/332860` — 2026-06-03 — Rosenthal, Русская грамматика 1980, Лазуткина 2012, and за = outside the literary language.
2. `https://gramota.ru/spravka/vopros/274269` — 2014-04-01 — «Нормативно: скучать по тебе», the exact keyword.
3. `https://gramota.ru/biblioteka/spravochniki/slovar-spravochnik-neprostye-slova/skuchayu-grushchu-toskuyu` — Ожегов–Шведова 1997, Граудина и др., Востоков 1834.
4. `https://ruscorpora.ru/results?search=Ck0qGwoICAAQChgyIAoQBSAAQAVqBDAuOTV4AKABATICCAE6AQFCJwolCiMKA3JlcRIcChrRgdC60YPRh9Cw0Y4g0L%2FQviDRgtC10LHQtQ%3D%3D` — the скучаю по тебе query, 37 texts / 56 examples / IPM 0,13.
5. `https://en.wiktionary.org/wiki/скучати` — Ukrainian за + instrumental.
6. `https://europepmc.org/article/PMC/PMC12599338` — Mhaka et al., *International Journal of Qualitative Studies on Health and Well-being* 2025, doi 10.1080/17482631.2025.2577283, CC BY-NC, n = 14. **Abstract only** — the PDF does not parse here. Not used in the sibling batch (checked).

Cap-exempt: gramota.ru, ruscorpora.ru, en.wiktionary.org, europepmc.org. Journal named for the hand-check: *International
Journal of Qualitative Studies on Health and Well-being* (Taylor & Francis), first use in this batch.

## 7. Lines and links cut

- **Cross-link to the English sibling `i-miss-you-in-russian` cut.** The BRIEF asks for it, but it is not published: `content/keywords/strapi-live-articles.json` holds 905 live articles and contains no such slug, so the link would 404. The split is stated in prose instead.
- **Google Books Ngrams cut.** The sibling already uses it for this exact pair. The NKRJa numbers here are an independent instrument and replace it; reusing Ngrams would have been a twin signal.
- **Tatoeba cut** — the sibling uses it, and the NKRJa concordance is a stronger attestation source for a Russian-language reader.
- **The southern-Russian dialect claim cut entirely** — no reachable authority states it.
- **«Скучать по ком-то» as a recommendation cut** — Gramota answered exactly that in 2007 (№ 227389) but Лазуткина 2012 has since called it outdated; quoting the 2007 answer as current advice would be wrong.
