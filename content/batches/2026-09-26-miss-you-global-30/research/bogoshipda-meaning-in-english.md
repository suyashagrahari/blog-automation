# Research brief — bogoshipda-meaning-in-english

- **Primary keyword:** `bogoshipda in english meaning`
- **Region:** `us-en` (Google `gl=us&hl=en&pws=0&nfpr=1`)
- **Body language:** English (searcher types romanised Korean into an English query)
- **Tier:** A-learner
- **Measured:** 2026-09-26
- **Verdict:** PROCEED. Body written to `blogs/bogoshipda-meaning-in-english.json`.

---

## 1. The premise, checked

**The prompt's framing held.** 보고 싶다 is not built from a verb meaning "to miss". It is
보다 ("to see") + the auxiliary **-고 싶다** ("to want to") — a **desiderative auxiliary
construction**. Literally: "I want to see (you)."

**One terminological correction.** The Standard Korean Language Dictionary labels 싶다
**「보조 형용사」 — auxiliary *adjective*, not auxiliary verb.** Wiktionary lists it under
*Adjective* as well. Korean treats wanting as a descriptive state. The pattern name
"desiderative auxiliary construction" is accurate and is retained.

### What the national dictionary actually returns (all fetched 2026-09-26)

| Query on `stdict.korean.go.kr` | Result |
| --- | --- |
| 보고 싶다 | `찾기 결과 (총 0 개)` — **zero entries**. Not a word; a construction. |
| 싶다 | 1 entry. 「보조 형용사」 `앞말이 뜻하는 행동을 하고자 하는 마음이나 욕구를 갖고 있음을 나타내는 말` |
| 보다 | **3 homographs.** 보다1 「동사」 `눈으로 대상의 존재나 형태적 특징을 알다`; 보다2 「부사」 "more"; 보다3 「조사」 "than" |
| 그립다 | 1 entry. 「형용사」 `보고 싶거나 만나고 싶은 마음이 간절하다` |
| 그리워하다 | 1 entry. 「동사」 `사랑하여 몹시 보고 싶어 하다` |

The wording **앞말** ("the preceding word") in the 싶다 definition is the generality proof
stated by the dictionary itself: it defines a *slot*, not a fixed expression.

**Scripted fetch of `stdict` WORKS.** It did not block. Plain `fetch` with a desktop UA,
`searchResult.do?searchKeyword=<url-encoded>`, HTTP 200, result count in the page text.
No browser route was needed. Same for `korean.go.kr`.

### 그립다 vs 보고 싶다 — what actually differs

- 그립다 is an **adjective**; the thing missed takes the **subject** marker (고양이**가** 그리워).
- 그리워하다 is the **verb** form (사랑하여 몹시 보고 싶어 하다), taking the object marker.
- 보고 싶다 patterns with the verb 보다, so it takes the **object** marker (당신**을** 보고 싶었어요).
- Korea's own dictionary **defines 그립다 using 보고 싶다**, which makes 보고 싶다 the plain
  form and 그립다 the intensified one (간절하다, "earnest").

This is covered at length by the **written sibling** and was deliberately cut down here.

---

## 2. Romanisation ruling

**`bogoshipda` is non-standard. `bogo sipda` is Revised Romanization.**

From the NIKL page `korean.go.kr/front_eng/roman/roman_01.do`, fetched 2026-09-26 —
the consonant table in full for fricatives: **ㅅ → `s`, ㅆ → `ss`, ㅎ → `h`.**
**There is no `sh` digraph anywhere in Revised Romanization**, neither in the vowel table
nor the consonant table. ㅍ → `p`. Tense sounds are not transcribed (합정 Hapjeong,
낙동강 Nakdonggang), so 싶다 [십따] → `sipda`, not `sipdda`.

Nor is it the older standard: Wiktionary gives the **McCune–Reischauer** form of 싶다 as
`sipta` — also no h. **"Bogoshipda" belongs to no published system.**

**Why the "sh" feels right anyway:** the IPA for 싶다 is **[ɕʰip̚t͈a̠]**. [ɕ] is a palatal
fricative genuinely closer to English "sh" than to "s". The searcher's ear is correct;
the orthography is not official. This is the hinge the post turns on and it is checkable
by anyone in two clicks.

---

## 3. Tatoeba — the counted asset

`https://tatoeba.org/en/api_v0/search?from=kor&to=eng&query=보고 싶&page=1..5` — JSON API,
**works unauthenticated**, no block. Fetched 2026-09-26.

| Measure | Count |
| --- | --- |
| Korean sentences returned for `보고 싶` | **46** |
| Genuinely 보다 + -고 싶다 (보고 preceded by space or string start) | **19** |
| Same auxiliary on a **different verb stem**, or the unrelated -아/어 보다 | **27** |
| English translations attached to the 19 | **29** |
| …containing "miss" | **10** |
| …containing "see" / "watch" | **18** |
| …"I pine for you" | **1** |
| Objectless sentences (보고 싶어/싶어요/싶습니다) | 5 — **all** translated "I miss you" |
| Sentences with a **thing** object (film, video, room, 그걸) | 7 — **0** translations use "miss" |

**The headline finding: the "miss" reading is decided by the object.** Bare → "miss".
Thing object → never "miss". That is the ambiguity question answered empirically.

**The generality proof, from the noise:** the 27 non-matching sentences show -고 싶다 on
가다, 보내다, 살다, 배우다, 만들다, 느끼다, 하다, 보이다, 여행하다 — at least eleven
distinct stems in one small result set. The search's own false positives are the evidence.

Sentence **5368** (보고 싶어.) alone carries **7** English translations including both
"I miss you." and "I want to see it." — the whole ambiguity in one row.

Exclusion rule used: 보고 must be preceded by a space or begin the string, which drops the
-아/어 보다 compounds 살펴보고 싶어, 도전해보고 싶어, 시도해보고 싶니, 가보고 싶다.

Raw data: `scratchpad/bogoshipda-meaning-in-english-tatoeba.json` (46 rows) and
`-tatoeba-clean.json` (19 rows).

---

## 4. SERP — measured, `us-en`, 2026-09-26

**Route: Google served to the US market, read in an ISOLATED Playwright browser context.**
Instrument substitution, disclosed.

- `serp-ddg.mjs` / Brave not used beyond BRIEF §3's recorded status (DDG connect timeout,
  Brave 429). Not ground on.
- **The shared real Chrome was attempted first and abandoned.** Two scrapes came back
  carrying **another agent's Spanish SERP for "te echo de menos"** while the tab URL read
  my own query — exactly the BRIEF §3 contamination. `browser_get_text` returned the stale
  sibling DOM; `browser_scrape` returned my query correctly once. **All shared-browser
  reads were discarded, not recorded.** Nothing was clicked, submitted or dismissed.
- Recorded positions come from **one clean Playwright snapshot** whose page content matched
  the query (Kim Bum Soo, BTS Spring Day, 보고 싶다). **9 organic results seen and counted.**

### Who ranks

| # | Host | Page type | Weak |
| --- | --- | --- | --- |
| 1 | genius.com | song lyrics — Kim Bum Soo 보고싶다 | yes |
| 2 | colorcodedlyrics.com | song lyrics (2012) | yes |
| 3 | youtube.com | upload of the same song, 4.2K views | yes |
| 4 | reddit.com r/Korean | forum, 18 answers, BTS Spring Day lyric | yes |
| 5 | lyricstranslate.com | song lyrics (2015) | yes |
| 6 | hinative.com | Q&A, 11 answers (2017) | yes |
| 7 | musixmatch.com | song lyrics | yes |
| 8 | mymemory.translated.net | machine-translation memory | yes |
| 9 | facebook.com / tiktok.com | Videos module, 1 FB + 3 TikTok | yes |

**Weak count: 9 of 9.**

### SERP features

- **AI Overview at position 0**, cited to **TikTok, Facebook and Reddit** — no dictionary.
- People Also Ask (2). Videos carousel (4). A Korean-labelled `웹 검색결과` block.
- **NO Google Translate widget.** The prompt predicted one; it is not there. The inline
  answer is an AI Overview instead — still a structural ceiling, but a *citation surface*
  rather than a dead end.

### Gate 4: **PROCEED, decisively**

No editorial incumbent, no language-school blog, no dictionary anywhere in the top 10.
**Five of nine results are song lyrics** for Kim Bum Soo's 2002 ballad titled 보고싶다,
because the query string collides with a famous song title. **That collision is the gap.**
The prompt predicted "language-school blogs, app content marketing and aggregators" —
wrong; the real SERP is lyrics-dominated.

### Checkable errors found — two

1. **Reddit r/Korean top answer, quoted in the SERP snippet: "it's definitely bogoshipda
   in the song"** — asserting a romanisation that **no published standard produces**
   (NIKL RR has no `sh`; M-R gives `sipta`).
2. **Google's own AI Overview contradicts itself within three lines** — leads with
   "(보고 싶다) translates to [I miss you] in English", then its own *Literal Breakdown*
   heading gives "I want to see [you]". Its authorities are TikTok and Facebook.

Also measurable: **four different romanisations of the same phrase on one SERP** —
*bogoshipda*, *bogosipda*, *bogoshipo*, *bogoshipeoyo*.

---

## 5. Sibling split — the abort test

`../2026-09-25-miss-you-30/blogs/i-miss-you-in-korean.json` read **in full** (1,752 words,
10 FAQs, live at `/blog/i-miss-you-in-korean`, HTTP 200).

**Verdict: PROCEED, but the overlap is real and was managed by subtraction.**

| The sibling already owns | My lane |
| --- | --- |
| The three speech levels (its spine) | cut entirely — one FAQ pointer |
| 그립다 / 그리워하다 full comparison | cut to 2 paragraphs + cross-link |
| stdict zero-result for 보고 싶다 | retained (it is the lead fact) but extended |
| Romanisation as its FAQ 7 | built out from the **RR consonant table itself** |
| Tatoeba sentence 5368, cited once | **46 sentences pulled and classified** |
| Unicode Hangul codepoints | cut — no unicode.org claim made here |

**Genuinely new here:** the stdict **싶다** entry (「보조 형용사」 + the 앞말 wording), the
stdict **보다** three-homograph result, the full counted Tatoeba classification, the RR
consonant table read directly, and the measured SERP.

**`bogoshipda-vs-bogosipeo` is NOT YET WRITTEN** — the batch `blogs/` directory holds five
files and that is not one of them. **Not cross-linked** (the URL would 404). The register
question points at the live sibling instead.

> **Note for the orchestrator:** the written sibling already covers all three speech levels
> in depth. The `bogoshipda-vs-bogosipeo` row may be largely redundant against it.

**Live hub** `/blog/i-miss-you-in-different-languages` fetched, HTTP 200. It **gets Korean
right**: `Korean: 보고 싶어 (bogo sipeo — bo-go shi-puh)` — correct RR plus an ad-hoc
pronunciation respelling, which is exactly the distinction this post teaches. No correction
needed, so it is not linked as a fix.

---

## 6. Sources (5)

| Source | Role | Cap |
| --- | --- | --- |
| `stdict.korean.go.kr` — 싶다, 보다, 그립다, 그리워하다 | primary authority | exempt |
| `korean.go.kr` — Romanization of Korean | primary authority | exempt |
| `en.wiktionary.org` — 싶다 | morphology, IPA, M-R | exempt |
| `tatoeba.org` — sentence 5368 + the 보고 싶 set | attested usage, counts | exempt |
| `europepmc.org/article/PMC/PMC4891949` — Hayes-Harb & Cheng, **Frontiers in Psychology** 7:785 (2016) | peer-reviewed, open access | repository exempt; **journal named** |

- **`capcheck.mjs` run immediately before writing:** no banned URLs, no domain at cap, no
  URL at cap. Batch is nearly empty.
- **PMC4891949 checked against both batches by recursive grep: zero prior use.**
  Abstract read via the **Europe PMC REST API**; **the PDF was not fetched or parsed**.
- **`findpapers.mjs` used** (Crossref + Europe PMC). **WebSearch calls used: 0.**

**Why the Mandarin paper transfers:** Hayes-Harb & Cheng tested Pinyin vs Zhuyin, not
Korean. It is cited for the *mechanism* — a familiar Roman grapheme standing for an
unfamiliar phoneme degrades L2 word-form learning — and **their test phoneme is [ɕ], the
exact sound in 싶**. The post does not claim it studied Korean.

---

## 7. Instruments that failed

- **Wiktionary has NO entry for 보고 싶다.** `en.wiktionary.org/wiki/보고_싶다` → **HTTP 404**,
  as do `보고싶다` and `보고_싶어`. The prompt named it as an instrument. Only 싶다 and 보다 exist.
- `browser_get_text` (PolterTab) returned a stale sibling DOM on every call regardless of
  the tab's actual URL. `browser_scrape` read the live tab correctly. Worth knowing.
- `browser_extract_all` errored on both field-spec forms tried
  (`Cannot read properties of undefined (reading 'includes')`).

---

## 8. First-party facts

Four used, from `facts-snapshot.md`, byte-verbatim. Reuse counts across the **59** sibling
posts scanned: **22, 24, 30 and 53**. The three least-collided available were chosen
deliberately; the 214-pages line (53 uses) is included only because the body cites it.

**Differentiation is thin and the audit says so.** No selection fixes 22 prior uses.

Disclosed **in body prose**, not only in the audit:
1. The database records **which template was opened, never who received it**.
2. **Nothing is segmented by language or country — no figure here is Korean.**
3. City / music / "together since" are **pickers with defaults** (the 47 city pairs).
4. Page views are views, **not unique visitors**.
5. **n = 214 over two months** — no seasonal claim.

## 9. Product honesty

`/missyou-gf` is defined at `app/lib/prompt.ts:44` as an **"I miss you page for a
girlfriend/partner"** — verified at source. This SERP is substantially **K-pop-driven**
(BTS Spring Day, four short-video results), so a meaningful share of readers are **not
writing to a partner**. Said plainly in body prose; **`/streak`** offered as the genuine
alternative because it assumes **no recipient role**. Every template is an
**English-language page** with no Korean interface — also disclosed in prose.
