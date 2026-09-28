# Research brief — `bogosipeo-vs-bogoshipda`

- **Keyword:** `bogosipda vs bogosipeo difference`
- **Row:** WAVE4-PLAN.json, tier `A-explainer`, band 2, plan weak score 5, region `us-en`
- **Body language:** English (learner page, US/global audience)
- **Measured:** 2026-09-28

---

## Phase 1 — SERP measurement

Two independent routes, both named, per BRIEF §3. **No browser route used**, so no
contention exposure at all — nothing in this brief came from the shared Chrome tab.

### Route A — `scripts/serp-ddg.mjs "bogosipda vs bogosipeo difference" --region us-en`

Query echoed back correctly (`query: bogosipda vs bogosipeo difference`), 10 results
parsed on the **first** call. A second identical call and a variant call both returned
`(no results parsed)` — consistent with the brief's "DDG is intermittent" note, and not
retried further.

| # | Host | Page type | Assessment |
|---|---|---|---|
| 1 | italki.com/en/post/question-206469 | Q&A thread, 4 answers | weak |
| 2 | hinative.com/questions/15675559 | Q&A thread | weak |
| 3 | 90daykorean.com/i-miss-you-in-korean/ | learner blog | weak |
| 4 | hinative.com/questions/6092236 | Q&A thread | weak |
| 5 | kimmstv.blogspot.com (2019) | Blogger post, stale | weak |
| 6 | reddit.com/r/Korean | forum thread | weak |
| 7 | day1ers.com | learner blog | weak |
| 8 | hallyuwords.com/bogoshipda/ | learner blog | weak |
| 9 | hapskorea.com | magazine snippet | weak |
| 10 | sweetandtastytv.com (2016) | blog, stale | weak |

### Route B — harness `WebSearch`, US-served (route-appropriate for a `us-en` row)

Five HiNative threads, italki, 90daykorean, fluenttongue.com, and **two irrelevant
Wikipedia articles** (`Bogan`, `Bogwera and bojale`) — the index running out of matches,
which is itself evidence of a thin SERP. Its generated summary asserted:

> "Bogosipda is a little formal, while bogosipeo is a little informal."

That summary is contradicted by the Standard Korean Language Dictionary (below). It is
recorded here because a search engine's own answer being wrong is part of the measurement.

### Gate 4

**Weak count 10 of 10 on route A, 8 of 10 on route B** (the 2 Wikipedia results are not
even on topic). Zero dictionary, grammar-reference or scholarly pages in either index.
The plan scored this row weak=5; the measured figure is higher. **PROCEED.**

---

## Phase 2 — Gap analysis

**Table stakes** — all incumbents cover: the meaning "I want to see you"; a
formality ladder; 그립다 as the dictionary alternative; K-pop/K-drama context.

**The gap.** Every ranking result treats the pair as two rungs on one politeness ladder,
and most never place 보고 싶다 on that ladder at all. None consults a dictionary. None
states the mechanism (싶다 is an adjective, so its plain-style declarative equals its
citation form). None gives the discourse rule that actually motivates the switch.

**Checkable errors in ranking results** (the strongest asset available here):

1. **italki #1 answer:** "pogoshipayo=Conversation pogoshibda=**verb**". 표준국어대사전
   classes 싶다 as a 보조형용사, an auxiliary **adjective**.
2. **italki, longest answer:** calls 보고 싶다 the "Basic way (**not conjugated**)". `-다`
   is a 종결어미, a sentence-final ending; the form *is* conjugated, into 해라체.
3. **Same answer:** "there are **5** ways to talk politely". Six styles are standardly
   listed, in both the dictionary and the 2026 study cited below.
4. **HiNative #1 (the top-ranked thread on route B):** the top-voted native answer to the
   exact question is the single word "**same !**".
5. **90daykorean (#3):** builds its entire page on an informal / standard / formal ladder
   of 보고 싶어 / 보고 싶어요 / 보고 싶습니다 and **never places 보고 싶다 on it**, so it
   cannot answer the query it ranks for.

**Angle.** Wins by being the only page on this SERP that rules on the pair from the
Standard Korean Language Dictionary's own style headwords, overturning the unanimous
ranking answer that 보고 싶다 is the more formal form.

**Fan-out sub-queries → H2s:** what the dictionary calls each ending · is bogosipda
formal · why bogosipda looks like a dictionary form · why K-pop uses bogosipda · which
attested sentences mean "I miss you" · which form to send to whom · what is ranking.

---

## Phase 3 — Sources (5; caps checked immediately before writing)

1. **표준국어대사전, 해라체** — "상대 높임법의 하나. 상대편을 **아주 낮추는** 종결형."
   Illustration: 철수야, 빨리 자라. 내일 새벽에 운동해야 한다.
2. **표준국어대사전, 해체** — "상대편을 **높이지 않는** 뜻을 나타내는 종결형으로,
   격식체인 '해라체'와 '하게체'를 쓸 자리에 두루 쓰는 **비격식체**."
3. **표준국어대사전, 해요체** — "상대편을 **보통으로 높이는**" 종결형, 비격식체.
4. **Jung et al., "Differential Effect of Formality of Speech Style on Negation Selection
   in Korean Children and Adults", *Journal of Psycholinguistic Research*, 2026-09-06**
   (PMC13547182). Peer-reviewed, open access; **full text read via the Europe PMC
   `fullTextXML` endpoint**, not the abstract. Carries: the six-style inventory with
   endings; "honorific styles include formal and polite styles, while non-honorific styles
   include half-talk and plain styles"; the two non-honorific styles work as one mixed
   style "differentiated in terms of **discourse function**"; and footnote 1, attributing
   Lee (1991): "a speaker switches from the half-talk style to the plain style to
   communicate the new information which is **particularly noteworthy to the listener**."
   n = 35 adults (mean 25.41 ± 4.16) and 31 five-year-olds.
5. **Tatoeba**, all 46 Korean sentences containing 보고 싶, read via the API 2026-09-28.

**Cap position.** stdict and Tatoeba are cap-exempt reference instruments. The journal
named in citation 4, *Journal of Psycholinguistic Research*, is held by exactly one other
post in this batch (`tu-me-manques-signification-grammaire`, via a non-PMC URL that
`journalcheck.mjs` structurally cannot see), so this citation makes it **2 of 3**.
PMC13547182 appears in no other post in either batch. Frontiers in Psychology, PNAS,
JESLA and the four at-cap journals were all avoided.

**Only one peer-reviewed source, and why.** The closest second fit — Brown, "Politeness
and second language learning: the case of Korean speech styles", *Journal of Politeness
Research* 2010 — is behind a de Gruyter paywall and that journal already stands at 2 posts
in this batch. Took the honest shortfall rather than breaching a cap or citing an abstract.

---

## Measurement: 46 Tatoeba sentences, classified by sentence-final form

Classified by what each sentence **ends in**, not by what it means. (The sibling
`difference-between-bogoshipda-and-geuripda` cuts the same corpus by **object**; this is a
deliberately different measurement on the same evidence.)

| Sentence-final form | Style | Count | Translated "I miss you" |
|---|---|---|---|
| 보고 싶다 | 해라체, plain | 4 | **0** |
| 보고 싶어 | 해체, half-talk | 5 | 2 |
| 보고 싶어요 | 해요체, polite | 4 | 2 |
| 보고 싶습니다 | 합쇼체, formal | 1 | 1 |
| (mid-sentence or past) | — | 32 | — |

14 sentence-final tokens is enough to show an asymmetry and not enough to support a rate;
the post states counts, never percentages, for this set.

---

## Instrument authentication and lines cut

- **MARAUD/DEZILITER trap caught once.** `stdict.korean.go.kr/search/searchView.do?word_no=506741`
  returned **HTTP 200 and 54 KB** while serving the headword **회비** ("membership fee").
  Discarded; re-run through `searchResult.do?searchKeyword=<term>` and the headword on each
  page (해라-체, 해-체 1, 해요-체) was read and confirmed before anything was cited.
- **stdict 통합검색 returns 0 results for the bare endings `-다` and `-어`.** The style
  headwords carry the same ruling verifiably, so they were used instead.
- **krdict.korean.go.kr returns HTTP 404 on every search URL shape tried** (`/dicSearch/search`,
  `/eng/dicSearch/search`, `/eng/dicSearch/SearchView`). Not used.
- **CUT: any soliloquy claim.** No source read supports self-address. Lee's formulation is
  explicitly listener-oriented. The row prompt's "self-directed" framing is rejected.
- **CUT: a first-party column in the comparison table.** No SubhSandesh figure decomposes
  by Korean speech level; recorded as a failed checklist item rather than invented.
- **Tatoeba data caveat, recorded not used:** 그를 다시 보고 싶다 ("him") is glossed "I want
  to see **that** again" and 그걸 ("it") "I want to see it again" — the two look swapped.
  Does not affect the ending-based classification, and neither gloss is load-bearing.

---

## Orchestrator claims tested (BRIEF §0)

| Claim in the row prompt | Verdict |
|---|---|
| "The speech-level system: which form you send depends on the relationship" | **Already live on our own domain.** `/blog/i-miss-you-in-korean` is titled "3 Speech Levels, Dictionary-Checked" and owns the 해체/해요체/합쇼체 send-to ladder. Writing that again would have shipped a twin of our own page. Re-aimed at the one form that page omits: 보고 싶다. |
| "Sending the dictionary form to someone you are close to reads as flat or quoted" | **Overturned.** The peer-reviewed source says close to the reverse: the half-talk→plain switch marks information as newly noteworthy. It is a heightening, not a flattening. |
| "The plain form has a genuine exclamative/self-directed use" | **Half confirmed.** Exclamative/noteworthy-new-information use: established, with a citation. Self-directed/soliloquy: **rejected** — Lee's rule is about what is noteworthy *to the listener*. |
| 보고 싶어 is "해요-dropped" | **Corrected.** 표준국어대사전 defines 해체 as a style in its own right and defines 해요체 by the slots of 하오체/하십시오체 — not as 해체 plus 요. |
| Schema reference at `references/article-json-schema.md` | **Path wrong, file real.** It lives at `.claude/skills/blog-optimisation/references/article-json-schema.md` (196 lines). Read there; its own validator run and passed. |
| Row `weak: 5` | **Under-stated.** Measured 10 of 10. |

## Cross-link plan (all three verified HTTP 200)

- `/blog/bogoshipda-meaning-in-english` — owns the `-고 싶다` construction and the
  romanisation ruling. Compressed to two sentences here and linked.
- `/blog/difference-between-bogoshipda-and-geuripda` — owns 그립다 and the object-based
  Tatoeba cut. Linked at the point where this post's ending-based cut is stated.
- `/blog/i-miss-you-in-korean` — owns the three-level send-to ladder. Linked at the point
  where a reader only wants "which one do I text my girlfriend".

## Publish state

Strapi production, 2026-09-28: `filters[slug][$eq]=bogosipeo-vs-bogoshipda` → `total=0`
(slug free). Control query `i-miss-you-in-korean` → `total=1`, confirming the query shape
works rather than silently matching nothing.
