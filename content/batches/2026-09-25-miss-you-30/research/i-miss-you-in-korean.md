# Research brief — `i miss you in korean`

Batch `2026-09-25-miss-you-30`. Slug `i-miss-you-in-korean` (checked against
Strapi 2026-09-25, `filters[slug][$eq]` returned `[]` — free).
Category `miss-you-across-miles` (verified live in `/api/categories`).

---

## Phase 0 — first-party gate

Source: `content/batches/2026-09-25-miss-you-30/facts-snapshot.md` (pinned; NOT
`content/facts.md`). The `/missyou-gf` segment carries far more than the three
required facts. Eight used, two of them inside the first 150 words
(214 pages since 2026-07-28; median letter 88 words; 43.5% password-protected).

The three mandatory caveats are written into body prose, not just the audit:

1. City / background music / "together since" are **pickers with defaults** — the
   47 city pairs come from a 15-city picker, so they are not free sender choices.
2. `viewCount` is page views, not unique visitors.
3. n = 214 over two months (template live 2026-07-28) — no seasonal claim.

---

## Phase 0b — verifying the framing claims in the task prompt (BRIEF §0)

Three claims in the orchestrator's prompt were load-bearing. All three were
checked against the run's own harvest files and against fetched sources. **Two
are wrong as stated and one is right but imprecise.** Corrections are carried in
the post itself and in `structuralLimitations`.

### Claim 1 — "surfaced in the US and UK autocomplete harvests under 10 different prefixes"

Measured from `content/keywords/2026-09-25-miss-you-global/autocomplete-merged.csv`:

| suggestion | markets | markets_hit | total_prefix_hits |
|---|---|---|---|
| `miss you in korean` | gb-en, in-en, in-hi, us-en | 4 | **10** |
| `i miss you in korean` | in-en, us-en | 2 | **8** |

**Verdict: imprecise.** The 10-prefix figure and the UK hit belong to
`miss you in korean`, not to `i miss you in korean`, which surfaced in **8**
prefixes across **US and India** and did not surface in the UK harvest at all.

More importantly, the prompt omits India entirely, and India is where the
domain lives. `miss you in korean` is the only row in the Korean set to hit both
Indian harvests (`in-en` and `in-hi`). That changes the reader picture the
prompt drew: not only American learners, but Indian K-drama viewers too.

Against the other eight translation spokes, `i miss you in korean` has the
**highest prefix breadth of any `i miss you in <language>` row in the run** — 8,
ahead of Spanish (7), French (6), Japanese (6), Italian (4), German (4). Its
`max_relevance` (601) is lower than Spanish's (1250), so "highest demand" is
true on breadth and false on peak relevance. The post states breadth only.

### Claim 2 — "the Korean-market harvest (geo=kr) returned mostly song and drama noise"

**Verdict: correct, and quantified.** 177 `kr-ko` rows. At least 50 are
unambiguously song, lyric, OST, drama, karaoke, chord or sheet-music queries
(가사, 노래, OST, BTS, 드라마, 코드, 최고음, 김범수, TJ, 피아노, 악보). The true
share is higher — 김범수 is the singer of the 2002 ballad 보고싶다, 박유천 an actor,
다시보기 means "rewatch" — but 50/177 is what a conservative regex supports, and
that is the figure the post prints.

The inference the prompt draws from it — that the searcher is outside Korea — is
supported by the harvest's own shape: the English-language rows come from
`us-en`, `in-en`, `in-hi`, `gb-en` and `ph-en`, while the `kr-ko` rows are
overwhelmingly about a song.

**Three `kr-ko` rows go the other way and are the best evidence in the file:**

```
보고싶다 vs 그리워하다
그립다 vs 보고싶다
difference between 보고싶다 and 그립다
```

Native Korean-market searchers ask for the fork too. That is used in the post.

### Claim 3 — "보고 싶어 is what Koreans actually say; 그리워/그립다 is the closer semantic match to English 'miss', used for places, times, states, the past"

**Verdict: the second half is wrong.** See Phase 3 below. The National
Institute of Korean Language's own dictionary defines 그립다 *using* 보고 싶다,
and Tatoeba attests 그리워요 addressed to a person meaning "I miss you". The real
distinction is **grammatical class and intensity**, not person-versus-place.

---

## Phase 1 — SERP, measured 2026-09-25 (WebSearch, US-served)

One search spent (budget ~4; 1 used). Results as returned:

| # | Result | Type | Notes |
|---|---|---|---|
| 1 | fluentu.com — "10 Ways to Say I Miss You in Korean" | language-learning blog | fetched; see below |
| 2 | 90daykorean.com — "How to Say I Miss You in Korean" | language-learning blog | fetched; see below |
| 3 | cozyhangeul.medium.com | Medium post | fetch returned **403** — not analysed |
| 4 | en.wikipedia.org — *Missing You* (South Korean TV series) | entity page | **off-intent** |
| 5 | en.wikipedia.org — *I Miss You* (EP) | entity page | **off-intent** |
| 6 | en.wikipedia.org — *I Miss You* (Boyfriend song) | entity page | **off-intent** |
| 7 | youtube.com — KWOW #201 | video | |
| 8 | youtube.com — shorts | video | |
| 9 | quora.com | UGC thread | |

**Weak slots: 6 of 9** — three off-intent Wikipedia entity pages, two videos, one
Quora thread. This matches the pattern `competitor-map.md` recorded across the
run: `en.wikipedia.org` appeared in 7 measured SERPs and was off-intent in every
one.

### Structural analysis of the two fetchable ranking pages

Measured by fetching each page and parsing its HTML — headings, `<table>`
presence, `FAQPage` markup, and whether `korean.go.kr` appears anywhere in the
source. **Neither page was paraphrased and neither is linked** (`competitors.md`).

| | fluentu.com | 90daykorean.com |
|---|---|---|
| Body size | ~2,140 tokens of rendered text | ~2,270 |
| Covers 보고 싶어 / 싶어요 / 싶습니다 | yes, as three H3s | yes, as three H3s |
| Mentions 그립/그리워 | yes | yes |
| Comparison table (`<table>`) | **no** | **no** |
| `FAQPage` JSON-LD | **no** | **no** |
| Cites `korean.go.kr` / STDict | **no** | **no** |
| Where 그리워 sits | **item 10 of 10**, under "More ways" | inside "How to say *miss*" |
| Recipient-side data | none | none |

---

## Phase 2 — gap analysis

**Table stakes** (both pages carry these; the post must too): the three speech
levels of 보고 싶다, a romanisation for each, the existence of 그리워, and the
fact that Korean's everyday line is literally "I want to see you."

**The gap — four things, each measured rather than asserted:**

1. **Neither ranking page cites a Korean language authority.** `korean.go.kr`
   appears nowhere in either page's HTML. So neither can report that 보고 싶다
   returns **zero headword entries** in the Standard Korean Language Dictionary
   (it is a construction, not a word), or that the dictionary defines 그립다
   *in terms of* 보고 싶다.
2. **The fork is present but buried.** FluentU places 그리워 tenth of ten.
   Ordering is an editorial claim about importance, and it is the wrong one.
3. **Neither page states the social consequence.** Both *label* the levels;
   neither gives a decision rule for who may receive banmal. A reader messaging a
   Korean partner's parents gets no warning.
4. **No table, no FAQ markup, no recipient-side evidence** on either page. Two of
   those are format; the third is the moat — nobody outside the platform measures
   what the recipient does after the message lands.

**Stale data:** none found — neither page cites dated statistics at all, which is
its own finding.

**Fan-out sub-queries** (became H2s and FAQs): is it 보고 싶어 or 그리워 · how do
you write it in Hangul · is 보고 싶어 rude · how do you say it to someone older ·
how do you pronounce it · which romanisation is correct · what does 보고 싶다
literally mean · is 보고싶다 one word or two · how do Koreans reply · does 그립다
work for a person.

**Angle:** wins by being the only page on this SERP that settles 보고 싶어 vs
그리워 against the National Institute of Korean Language's own dictionary and
gives a send-to/do-not-send-to rule per speech level, next to recipient-side
evidence from 214 `/missyou-gf` pages — 1,434 hug taps across 138 of them.

---

## Phase 3 — sources, all fetched and verified

### The 보고 싶다 / 그립다 verification, in full

**Standard Korean Language Dictionary (stdict.korean.go.kr), fetched 2026-09-25.**

- `보고 싶다` → **찾기 결과 (총 0 개)**. Zero entries. It is not a lexical item;
  it is 보다 ("to see") + the auxiliary adjective -고 싶다 ("to want to").
- `보고프다` → **총 0 개**. The cute contraction is not a standard headword.
- `그립다` → **총 1 개**. `그립다 「형용사」 「1」 보고 싶거나 만나고 싶은 마음이
  간절하다.` — *"adjective: the feeling of wanting to see or wanting to meet is
  intense."*
- `그리워-하다` → **총 1 개**. `「동사」 사랑하여 몹시 보고 싶어 하다.` —
  *"verb: to love and to want very much to see."*

**This is the finding that corrects the brief.** Korea's national dictionary
defines *both* 그립다 and 그리워하다 **using 보고 싶다**. 보고 싶다 is the
semantic primitive; 그립다 is defined as an intensified form of it (간절하다),
and 그리워하다 as an intensified form with love added (사랑하여 몹시). The
difference is **grammatical class and intensity**, not person-versus-place.

**Wiktionary (en.wiktionary.org), fetched 2026-09-25 via the MediaWiki parse API.**

- `그립다` — Korean adjective, native etymology (그리— "to long for" + -ㅂ-).
  Senses: "to be dear, beloved"; "to be longed for, to be missed". Example:
  `고향이 그립다` = "I am homesick."
- `그리워하다` — Korean verb, compound of 그립 + 하다: "to miss, long for, pine
  for, yearn for."
- `싶다` — Korean adjective, "after the verb suffix -고: to be desirous of, to
  want." Middle Korean 식브다.
- `보고 싶다` and `보고싶다` — **no entry** (`missingtitle`), consistent with STDict.

**Tatoeba (tatoeba.org), fetched 2026-09-25 via api_v0, CC BY 2.0 FR.**
Every Korean line printed in the post is attested there:

| id | Korean | English translation(s) held on Tatoeba |
|---|---|---|
| 5368 | 보고 싶어. | "I miss you." / "I'll miss you." / "I pine for you." / **"I want to see it."** |
| 2652673 | 보고 싶어요. | "I miss you." |
| 2652674 | 보고 싶습니다. | "I miss you." |
| 2652675 | 그리워요. | "I miss you." |
| 8364951 | 난 내 고양이가 그리워. | "I miss my cat." |
| 13264324 | 파리에 사는 카토씨는 고향에 남겨둔 가족들을 그리워합니다. | "Mr. Kato, living in Paris, misses the family he left behind." |
| 2880526 | 저도 당신을 보고 싶었어요. | "I've missed you, too." |

Sentence 5368 is the whole ambiguity in one row: the same four syllables carry
"I miss you" and "I want to see it" in the corpus.

Sentences 8364951 and 13264324 settle the grammar: 그립다 is an **adjective**,
so what is missed takes the subject marker 이/가 (`고양이**가** 그리워`), while
그리워하다 is a **verb**, so what is missed takes the object marker 을/를
(`가족들**을** 그리워합니다`). 보고 싶다 patterns with the verb
(`당신**을** 보고 싶었어요`) because 보다 is transitive.

Sentence 2652675 (`그리워요` = "I miss you") is the one that **falsifies the
prompt's framing**: 그리워 addressed to a person is attested, so "used for
places, times, states, the past" is too narrow to print.

**National Institute of Korean Language — Romanization of Korean
(korean.go.kr/front_eng/roman/roman_01.do), fetched 2026-09-25.**
Every romanisation in the post follows the Revised Romanization of Korean, and
the post says so. The rules that matter here:

- ㅓ = `eo`, ㅡ = `eu`, ㅣ = `i`, ㅗ = `o`, ㅜ = `u`, ㅝ = `wo`.
- ㅂ = `b` before a vowel, `p` before a consonant or word-finally; ㄱ = `g`/`k`;
  ㄷ = `d`/`t`; ㅍ = `p`.
- Assimilation between adjacent consonants **is** transcribed (왕십리 → Wangsimni;
  종로 → Jongno). Hence 습니다 → `seumnida`, 합니다 → `hamnida`.
- Tense (glottalised) sounds are **not** transcribed (합정 → Hapjeong; 낙동강 →
  Nakdonggang). Hence 싶다 [십따] → `sipda`, not `sipdda`.

Derived and checked against those rules: 보고 싶어 `bogo sipeo` · 보고 싶어요
`bogo sipeoyo` · 보고 싶습니다 `bogo sipseumnida` · 그리워 `geuriwo` · 그리워요
`geuriwoyo` · 그립다 `geuripda` · 그리워하다 `geuriwohada` · 고향이 그립다
`gohyangi geuripda` · 난 내 고양이가 그리워 `nan nae goyangiga geuriwo` · 저도
당신을 보고 싶었어요 `jeodo dangsineul bogo sipeosseoyo`.

**Unicode (unicode.org/Public/UNIDATA/UnicodeData.txt and Blocks.txt), fetched
2026-09-25.** `AC00;<Hangul Syllable, First>` … `D7A3;<Hangul Syllable, Last>` —
11,172 precomposed syllables in the Hangul Syllables block (Blocks.txt gives the
block range as AC00..D7AF). The exact characters: 보 U+BCF4 · 고 U+ACE0 ·
싶 U+C2F6 · 어 U+C5B4 · 그 U+ADF8 · 립 U+B9BD · 다 U+B2E4 · 워 U+C6CC.

**Jeong, W. & Lee, N. (2022). "Understanding of Korean Honorifics by L2 Korean
Learners in Australia: A Socio-Pragmatic Perspective." *Language Research*
58(3), 223–245. doi:10.30961/lr.2022.58.3.223. Open access, CC BY-NC.**
Full text fetched and read (PDF, 2026-09-25) — not abstract-only. Peer-reviewed,
published by the Language Education Institute, Seoul National University.

What it actually says, and what the post claims from it:

- Eight L1-English speakers learning Korean **in Australia** were surveyed; seven
  were then interviewed about how they conceptualise and use honorifics.
- Finding: participants "appeared to have a subjective attitude towards the
  application of honorifics instead of considering the listener's relational
  status **even when the honorific system had been learned and mastered for a
  considerable period**."
- Learning Korean while living outside Korean society "makes it challenging to
  understand honorifics or establish conversational concepts completely."
- Participants did recognise honorifics as important, but that understanding was
  "overpowered by their cultural identity as 'Australians'."

Subject test: **pass** — it is about exactly this reader, an L1-English learner
outside Korea choosing a speech level. Swap test: **pass** — it is Korean-specific
and could not sit in any other post in this batch. Licence note: CC BY-NC forbids
commercial reuse, so nothing is reproduced; the finding is stated in the post's
own words and linked, which is normal citation.

The paper also reports, citing Lee (2012), that Korean native speakers react more
strongly to pragmatic failure than to lexical or grammatical error. That is a
secondary citation inside the paper and the post attributes it that way.

### Source list as emitted (6)

| # | URL | Subject test | Peer-reviewed | Cap position at check |
|---|---|---|---|---|
| 1 | stdict.korean.go.kr (그립다) | pass | no (national dictionary) | korean.go.kr not at cap |
| 2 | korean.go.kr Romanization | pass | no (national standard) | same domain, 1 post |
| 3 | elanguageresearch.org (Jeong & Lee 2022) | pass | **yes**, open access | domain not previously used |
| 4 | tatoeba.org (search 보고 싶어) | pass | no (corpus) | **cap-exempt** |
| 5 | en.wiktionary.org (그립다) | pass | no (dictionary) | **cap-exempt** |
| 6 | unicode.org (UnicodeData.txt) | pass | no (standard) | **cap-exempt** (listed at 2 posts) |

Generic context statistics: **zero**. Wikipedia body links: **zero** (the domain
sat at 2 posts and is off-intent on this SERP anyway; `sameAs` targets in schema
are not body links).

`capcheck.mjs` at the time of writing reported `pmc.ncbi.nlm.nih.gov`,
`frontiersin.org`, `journals.plos.org` and `aclanthology.org` all **at cap 3** —
which is why the Europe PMC candidate returned by `findpapers.mjs`
(doi:10.1007/s10936-026-10290-5) was not used, and why the search moved to
OpenAlex for a non-PMC open-access venue.

Paper searches run via `findpapers.mjs`: `Korean honorifics speech levels
pragmatics`, `Korean as a foreign language learners honorifics acquisition
errors`, `emotion lexicon cross-linguistic translation equivalence`. Plus two
OpenAlex `is_oa:true` queries. Rejected: doi:10.5325/korelangamer.23.1.0053 and
doi:10.1007/978-3-030-64077-4_8 (both `oa_status: closed`);
doi:10.1016/j.pragma.2017.06.001 (closed); Glossa 8182 (open access but the host
serves an Anubis anti-bot challenge, so the text could not be read — an
unreadable source is not a citable one).

---

## Phase 4–5 — build notes

- Body: 7 H2s, 3 H3s (the three speech levels), one 4-row × 4-column table whose
  third column is first-party.
- `ItemList` in `structuredData` mirrors the three H3s in order.
- Internal links: the live hub `/blog/i-miss-you-in-different-languages`,
  `/missyou-gf` (mandatory), `/dedication` (the `oneOfLinks` alternative).
- **Why `/dedication` and not `/train-ticket` or `/streak`:** 50 of 177 Korean-market
  autocomplete rows are song, lyric, OST or karaoke queries, and 보고싶다 is itself
  a well-known ballad. For a reader who met this phrase through a song — which the
  harvest says most of them did — a page that plays a real voice introducing a track
  fits better than a page about distance. That is the reason, stated in the body.
- FAQs: 10, in `article.faqs` and nowhere else. None duplicates an H2.

## Lines cut, and why (also in `structuralLimitations`)

1. `보고 싶을 때` — composed by me for a table row; **0 Tatoeba attestations**.
2. `보고파` / `보고팡` / `보고 싶당` — `보고프다` returns 0 STDict entries.
3. `보고싶다` written unspaced — 0 STDict entries, and NIKL's own definition of
   그립다 writes it spaced (`보고 싶거나`).
4. `그립습니다` — no Tatoeba attestation, no dictionary example fetched.
5. `너무 보고 싶어` — not verified against any fetched source.
6. "보고 싶다 is a Korean word meaning 'I miss you'" — STDict returns 0; cut and
   replaced with the construction analysis.
7. Hanja for 그립다 — the harvest row `보고싶다 한자` suggested one, but Wiktionary
   marks 그립다 native Korean (`ko-etym-native`). Nothing to print.
8. "그립다 is used for places, times and the past, not people" — the prompt's
   framing; falsified by Tatoeba 2652675 (`그리워요` = "I miss you") and 10788997
   (`널 그리워해`). Replaced with the grammatical-class distinction.

## Honest limits

- The Medium result (#3) returned 403 and was not analysed. Claims about the SERP
  cover the two pages that were fetched plus what the search itself returned.
- No per-speech-level first-party data exists: `/missyou-gf` letter text is free
  input and is not language-tagged, so the platform cannot say what share of
  senders wrote Korean at all. The table's first-party column is therefore about
  the channel, not the register, and the post says so.
- n = 214 over two months. No seasonal claim is drawn.
