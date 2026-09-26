# Research brief — `i miss you in russian`

Batch `2026-09-25-miss-you-30` · slug `i-miss-you-in-russian` · written 2026-09-25

---

## Phase 1 — SERP, measured not predicted

One `WebSearch` on the exact keyword `i miss you in russian`, run 2026-09-25. No SERP
was supplied in the prompt, so this is the only measurement.

What came back, in order: memrise.com (phrasebook page), learntherussianlanguage.com
("11 Ways to Say I Miss You In Russian"), two Quora question threads, bab.la
(dictionary), learnrussian101.com, learnrussianwords.com, two **Wikipedia song
articles** ("You Are My Only Love", "I Miss You (Sarah Engels song)"), and
context.reverso.net.

Structural facts about that result set, and nothing more (no competitor page is
linked, cited or paraphrased anywhere in the post, per `references/competitors.md`):

| What I looked for | Present on the English-language SERP |
|---|---|
| A named Russian reference authority (gramota.ru, Ozhegov, Ushakov, Kuznetsov) | Not in any result title or the engine's own summary |
| Corpus evidence of any kind | None |
| The `по тебе` / `за тобой` dispute | Absent from the summary; the engine's answer gave three variants and no case analysis |
| `по вам` / `по вас` | Absent |
| Two of ten results being songs | Yes — the head term is contaminated in English too, not only in Russian |

The search engine's own generated summary asserted that "both word orders are
interchangeable". That is testable, and I tested it (below) rather than repeating it.

## Phase 2 — the gap, and the angle

**Table stakes:** я скучаю по тебе, a romanization, the formal/informal split, an
"I miss you so much" intensifier, and the second construction мне тебя не хватает.

**The gap:** the Russian-market harvest itself contains the argument.
`content/keywords/2026-09-25-miss-you-global/autocomplete-merged.csv`, geo `ru-ru`,
206 rows, includes:

- `скучаю по тебе или за тобой` (4 prefix hits, relevance 1250)
- `скучаю по тебе или за тобой как правильно` — literally "which is correct"
- `скучаю по тебе и за тобой`, `скучаю по тебе или за тобой стихи`
- `скучаю по тебе или по вас` — the second dispute, in the harvest too
- `скучаю по тебе как правильно`

Native speakers are asking. No page on the measured SERP answers either question with
a source. That is the angle.

**Angle:** wins by being the only post that settles «скучаю по тебе» vs «скучаю за
тобой» and «по вам» vs «по вас» against Gramota.ru's own dated answer, Ushakov's
«обл.» marking and a corpus measurement that dates the по вам / по вас inversion to
2012 — paired with recipient-side data from 214 /missyou-gf pages.

**Fan-out sub-queries → H2s:** is за тобой wrong · which line do I send · вам or вас ·
ты or вы · how do I write it so it arrives intact · why are the Russian results full
of a TV series · what do people put around the line · when is Russian the wrong choice.

## Phase 3 — what the sources actually say (all fetched 2026-09-25)

### 1. Gramota.ru, reference-service answer № 298024, 8 September 2018

`https://gramota.ru/spravka/vopros/298024` — server-rendered, fetched in full.

Verbatim findings:

- «Скучаю по вас – старая норма; по вам – новая… в наши дни эти варианты
  конкурируют.»
- Rozental's *Управление в русском языке*: with nouns and 3rd-person pronouns,
  **скучать по кому-чему** (dative). With 1st/2nd person **plural** pronouns,
  **скучать по ком** — «скучали по нас, скучаем по вас». Gramota notes the 2005
  reissue keeps that recommendation.
- *Русская грамматика* (M., 1980) treats по вам and по вас as variants.
- Lazutkina, *Словарь грамматической сочетаемости слов русского языка* (M., 2012):
  по ком-чем is **устарелым** (obsolete); по кому-чему is recommended.
- On за: «вариант скучать за кем-либо… **не является нормативным, выходит за рамки
  русского литературного языка**.»

### 2. Ushakov (1935–40) via gufo.me

`https://gufo.me/dict/ushakov/скучать` — sense 2 reads
«по ком-чем или по кому-чему (**за кем-чем ·обл.**)». `обл.` = областное, regional.
The page also prints the headword as «Скуч/а́/ть», with U+0301 COMBINING ACUTE ACCENT
(confirmed by byte inspection) — the copy-paste hazard the post warns about.

Ushakov's own examples: Скучать по друзьям. Скучать по работе. Скучать по театру.

### 3. Google Books Ngram Viewer, Russian corpus `ru-2019`, smoothing 3

Relative frequencies, JSON endpoint, all values at year 2019:

| n-gram | 2019 | note |
|---|---|---|
| скучаю по тебе | 2.442e-7 | |
| скучаю за тобой | 4.168e-9 | **58.6× rarer** |
| я скучаю по тебе | 4.718e-8 | |
| я по тебе скучаю | 3.525e-8 | 1.34:1 — both orders live |
| мне тебя не хватает | 5.071e-8 | **more frequent than я скучаю по тебе** |
| я так скучаю по тебе | 6.016e-9 | |
| я очень скучаю по тебе | 5.823e-9 | так ≈ очень |
| скучаю по вам | 1.299e-8 | |
| скучаю по вас | 9.131e-9 | |
| скучаю о вас | 2.512e-9 | Ozhegov's prepositional-with-о, rarest |

**The dated finding.** Year-by-year, `скучаю по вам` first exceeds `скучаю по вас` in
**2012** and has stayed ahead every year since (2013: 7.10e-9 vs 5.40e-9; 2019:
1.30e-8 vs 9.13e-9). Before 1990 по вам is at zero in this corpus while по вас is
attested from the 1920s. Lazutkina's dictionary declared по ком-чём obsolete in 2012.
The codification and the corpus crossover land in the same year.

**Caveat carried into the post:** Google Books is edited, published prose. A form that
lives in speech is systematically under-represented, so 58.6× is the size of the gap
*in print*, not in conversation.

### 4. Tatoeba (cap-exempt reference instrument)

`api_v0/search?from=rus&to=eng`, 2026-09-25:

| query | sentences |
|---|---|
| скучаю по тебе | 193 |
| я по тебе скучаю | 122 |
| скучаю по вам | 137 |
| мне тебя не хватает | 47 |
| **скучаю за тобой** | **0** |

Sentence 404917 «Скучаю по тебе.» → "I miss you." Sentence 6057354 «Мне тебя не
хватает!» → "I miss you!" — a near-minimal pair with 6057353 «Я скучаю по тебе!».
Sentence 5151178 «Я по тебе скучаю.» is glossed "I will miss you.", which is a real
aspectual ambiguity, not an error.

### 5. Endresen & Janda 2020, *Frontiers in Psychology* 11:574353 (peer-reviewed, open access)

Published 20 November 2020. Documents the Russian Constructicon (UiT Tromsø + HSE
Moscow), "over two thousand two hundred constructions", illustrated from the Russian
National Corpus. Load-bearing for this post: their account of Russian encoding a
non-agentive experiencer in the **dative** — a state that "happens" to the subject,
implying "lack of agentivity and control". That is exactly the shape of
**мне** тебя не хватает.

### 6. BGN/PCGN 1947, Romanization of Russian (PCGN, checked November 2022)

`assets.publishing.service.gov.uk/media/636cd2828fa8f5357a0c652c/ROMANIZATION_OF_RUSSIAN_2022_final.pdf`,
text extracted. ч→ch, ю→yu, ы→y, я→ya, х→kh, ь→ʹ, and Note 1: **е is romanized `ye`
after a vowel**. That is what makes хватает → `khvatayet`, not `khvataet`. The table
also prints each letter's Unicode code points (0410;0430 …), which is where the post's
Cyrillic-block figures come from.

Every romanization in the post is BGN/PCGN 1947 and the post says so.

## Entity check (Wikipedia API, QIDs paired)

Russian language Q7737 · Dative case Q145599 · Adpositional case Q117226378
(«Prepositional case» redirects here) · Cyrillic script Q8209 · Romanization of
Russian Q6453319 · Gramota.ru Q4147664 · Google Books Ngram Viewer Q3339343 ·
Russian National Corpus Q4315017 · Long-distance relationship Q1406917.

**«Скучаю по тебе» has no article on Russian Wikipedia** — `action=query&titles=`
returns `missing`. The only `intitle` hit is «Уже скучаю по тебе» (*Miss You Already*,
2015 film). This is why the post names no series.

## Phase 0 — first-party gate

Passed on `facts-snapshot.md`. Nine miss-you segment lines used; three mandatory
caveats (pickers-with-defaults, viewCount ≠ unique visitors, n=214 over two months)
are in body prose.

## Cuts, corrections and limits

Recorded in full in `batchMeta.structuralLimitations` of the blog JSON.
