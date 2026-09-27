# Research brief — `difference-between-bogoshipda-and-geuripda`

- **Primary keyword:** `difference between 보고싶다 and 그립다`
- **Row:** WAVE3-PLAN.json, tier `C-explainer`, flagged ABORT-LIKELY
- **Region:** `us-en` · **bodyLanguage:** English · **categorySlug:** `miss-you-across-miles`
- **Verdict: PROCEED.** Reasoning in §4.

---

## 1. SERP measurement

**Route taken, in the order BRIEF §3 prescribes:**

1. `node scripts/serp-ddg.mjs "difference between 보고싶다 and 그립다" --region us-en` — **query
   first, and the tool echoed it back correctly** (`query: difference between 보고싶다 and 그립다`,
   `region: us-en`), so this was *not* the argument-order trap. It returned
   `(no results parsed — DDG markup may have changed)`. Per BRIEF §3 ("try once, a failure
   tells you nothing"), **no retry.**
2. **Harness `WebSearch`**, which BRIEF §3 licenses explicitly for a `us-en` row. One call for
   the assigned Hangul-typed keyword, one for the romanised variant as a cross-check.
   **Not Google — labelled as such in the post.** No browser was used at all, so this row
   carries **zero contention exposure** (BRIEF §3's preferred outcome).

### SERP A — the assigned keyword, `difference between 보고싶다 and 그립다` (WebSearch, us-en, 2026-09-27)

| # | Result | Page type | Strong? |
|---|---|---|---|
| 1 | italki.com/en/post/question-457918 | Language-exchange Q&A, 3 answers, Jan 2019 | weak |
| 2 | facebook.com/studykoreanforbeginners photo post | Social-media image caption | weak |
| 3 | hinative.com/questions/27039988 | Crowd Q&A | weak |
| 4 | hinative.com/questions/16429929 | Crowd Q&A | weak |
| 5 | hinative.com/questions/88686 | Crowd Q&A | weak |
| 6 | hinative.com/questions/6475490 | Crowd Q&A | weak |
| 7 | sydney-to-seoul.tumblr.com (AMP) | Tumblr ask-box answer, 13 years old | weak |
| 8 | goodreads.com/author_blog_posts — "어렵다 vs. 힘들다" | **Off-topic**: a different word pair entirely | weak |
| 9 | goodreads.com/author/show/…/blog?page=3 | Blog **index page**, not an article | weak |

**Weak count: 9 of 9, all nine actually seen.** Four of nine slots are one domain
(hinative.com). Two of nine are off-topic Goodreads pages — the index page at #9 is not an
article at all. **There is no dictionary, no grammar reference and no editorial page anywhere
on this SERP.** Every result is user-generated.

### SERP B — cross-check on the romanised variant, `bogoshipda vs geuripda …` (WebSearch)

Reported for honesty because **it is a materially stronger SERP and a different query shape**:
90daykorean.com, koreanjun.com, sweetandtastytv.com, kimmstv.blogspot.com, quora.com,
hinative ×3, lister.co.id. That is ~4 established language-learning publishers. **The assigned
keyword is the Hangul-typed one**, whose SERP is the 9-of-9 above; a reader who types Hangul
is already reading Korean script and lands in a different, much weaker neighbourhood.

### Comparison with the sibling's SERP

The sibling `bogoshipda-meaning-in-english` measured **9 of 9 weak with five of nine slots
being song lyrics** (Kim Bum Soo's 보고싶다) and a self-contradicting AI Overview. **Mine shares
not one host with it.** A comparison query pulls Q&A; a meaning query pulls lyrics. Different
SERP, different incumbents — which is itself evidence the two pages are not twins.

### Gate 4 verdict: **PASS, comfortably.**

Zero strong results. No incumbent with topical authority. The three highest-ranked answers are
a 2019 forum reply, a Facebook caption and a 2013 Tumblr ask that **declines to answer**
("I would check out both in Naver dictionary… Or if you have a native speaking Korean friend
ask them about the distinction"). A page that cites 표준국어대사전 by entry and counts the corpus
is a different class of document from everything ranking.

---

## 2. Checkable error in a ranking result

**Result #1 (italki question-457918), top-voted answer, verbatim:**

> `'그립다' but the object can be anything but only limited to past. so, you can write like
> "고향에서 먹었던 음식이 그립다" or "학생이었을 때가 그립다."`

It calls the thing missed 그립다's **object** — twice. **표준국어대사전 lists 그립다 as 「형용사」, an
adjective.** A Korean descriptive adjective takes no object. And the answer's *own* examples
refute it: 음식**이**, 때**가** — both carry 이/가, the **subject** marker, not 을/를. The #1
result's terminology is contradicted by the national dictionary and by its own example
sentences in the same paragraph. That is the strongest citation asset on this SERP.

**Second, milder error, same page, answer 2:** `보다(see) + ～하고 싶다(want to do ~)`. The
auxiliary is **-고 싶다** attached to the stem 보-, per 표준국어대사전's 싶다 entry
(「보조 형용사」, defined on 앞말, "the preceding word"). Written as ～하고 싶다 it would predict
*보하고 싶다, which does not exist.

**Third, a claim the corpus contradicts** (widely repeated, and present in SERP B's #1):
"use geuripda when you miss something **non-human**". Tatoeba attests 그립다/그리워하다 aimed at
people in **5 of 7** genuine sentences — 그리워요 ("I miss you"), 난 내 고양이가 그리워,
톰이랑 메리 둘 다 널 그리워해, 그녀가 당신을 그리워 합니까, 카토씨는 … 가족들을 그리워합니다.
The person/thing split is **not** the dividing line. Recorded and corrected in the post.

---

## 3. Instruments — every one fetched, headword read before citing

| Instrument | Status | What it returned |
|---|---|---|
| 표준국어대사전 `그립다` | 200, **headword read** | `찾기 결과 (총 1 개)` — 「형용사」 「1」 보고 싶거나 만나고 싶은 마음이 간절하다 |
| 표준국어대사전 `그리워하다` | 200, **headword read** | `총 1 개` — 그리워-하다 「동사」 사랑하여 몹시 보고 싶어 하다 |
| 표준국어대사전 `그리움` | 200, **headword read** | `총 1 개` — 「명사」 보고 싶어 애타는 마음 |
| 표준국어대사전 `보고 싶다` / `보고싶다` | 200 | `찾기 결과 (총 0 개)` — **zero entries, both spacings**. Independently reproduces the sibling's finding. |
| 국립국어원 Revised Romanization | 200 | 그립다 → **geuripda**; no "sh" digraph exists in RR (sibling's finding, reused) |
| Wiktionary `그립다` | 200, Korean section read | **Adjective**, **ㅂ-irregular**, infinitive 그리워, sequential 그리우니; RR *geuripda*, MR *kŭripta*, Yale *kulipta*; IPA [kɯɾip̚t͈a̠]. Etymology: **first attested 1449 in 월인천강지곡 (Worin cheon'gangjigok)**, Middle Korean 그립다, from 그리- ("to long for") + -ㅂ- (adjectival suffix). Gloss: "to be dear, beloved; to be longed for, to be missed." **Its own usage example is `고향이 그립다` = "I am homesick."** |
| Wiktionary `그리워하다` | 200, Korean section read | **Verb**, 하-irregular; from 그립- + -어 + 하다; "to miss, long for, pine for, yearn for" |
| Tatoeba | 200, JSON API | counts in §4 |
| Europe PMC `fullTextXML` | 200 both ids | full texts read, §5 |

**Wiktionary caveat confirmed:** BRIEF §4 warns it 404s on multi-word forms. `그립다` and
`그리워하다` are single lemmas and both resolve; `보고 싶다` does not (the sibling recorded the
404). I did not re-request it.

---

## 4. Tatoeba — raw hits, survivors, and the dividing line

**The search is tokenised and over-returns, exactly as BRIEF/prompt warn.** Every hit inspected
individually:

| Query (`from=kor&to=eng`) | Raw hits | Genuine | False positives (and why) |
|---|---|---|---|
| `그립` | **3** | **1** | #8362490 고**립**시켰어 ("isolated"); #13755107 백**립**/선보이**고** — substring noise, nothing to do with 그립다 |
| `그리워` | **8** | **6** | #8367368 자랑스러**워**; #13250834 무거**워**서 — the tokeniser matches the 워 syllable |
| `보고 싶` | **46** | (sibling: 19) | reproduces the sibling's total exactly — corpus is stable between 2026-09-26 and 2026-09-27 |

**7 of 11 raw 그립다-family hits survived inspection (63.6%).** The 4 false positives are
themselves the proof that the search is syllable-matching, not lemma-matching.

**The seven survivors, with their English translations:**

| # | Korean | English | Subject/object of the missing | Marker |
|---|---|---|---|---|
| 11933748 | 고향**이** 그립니? | *Are you home**sick**?* | 고향 — a **place** | **이** (subject) |
| 2652675 | 그리워요. | *I **miss** you.* | (none stated) | — |
| 8364951 | 난 내 고양이**가** 그리워. | *I **miss** my cat.* | 고양이 — an animal | **가** (subject) |
| 10788997 | 톰이랑 메리 둘 다 널 그리워해. | *Both Tom and Mary **miss** you.* | 널 — a person | 를 (obj., **verb** form) |
| 10617675 | 그녀가 너를 그리워 하니? | *Do you **miss** it?* | person | 를 (verb form) |
| 10617676 | 그녀가 당신을 그리워 합니까? | *Do you **miss** it?* | person | 를 (verb form) |
| 13264324 | 파리에 사는 카토씨는 고향에 남겨둔 가족들을 그리워합니다. | *Mr. Kato… **misses** the family he left behind.* | 가족들 — people | 를 (verb form) |

### The dividing line this page draws

**7 of 7 renderings use "miss" or "homesick". Zero use "see" or "watch".**
Against the sibling's measurement of 보고 싶다: **10 of 29** renderings contain "miss", **18**
contain "see"/"watch", and **0 of 7** thing-object sentences use "miss".

> **보고 싶다 is ambiguous and its object decides the reading. 그립다 is not ambiguous and never
> collapses into "want to see."** That is the difference, and it is measurable in both
> directions rather than a feeling about tone.

**Non-person uses — verified, and the answer is asymmetric:**
- 그립다 **does** take a non-person as its subject and **keeps** the "miss" reading:
  고향이 그립니? → "Are you homesick?"; 난 내 고양이가 그리워 → "I miss my cat."
  Wiktionary's own example is the same sentence, 고향이 그립다 → "I am homesick."
- 보고 싶다 **also** takes a thing — and **loses** the "miss" reading when it does:
  그걸 다시 보고 싶다 → "I want to see it again"; 톰의 방을 보고 싶었어 → "I wanted to see Tom's room."
  (sibling's set: 0 of 7 thing-object sentences translate as "miss").

So the popular rule "그립다 = non-human, 보고 싶다 = human" is **wrong in both directions**, and the
real line is about whether *seeing* would satisfy the wish.

**Marker split confirmed on a non-person subject** — the sibling proved it on a person
(고양이가 그리워 / 당신을 보고 싶었어요); 고향**이** 그립니? extends it to a place.

### 그리워하다 vs 그립다 — the prompt told me to verify before building on it. It holds.

All **four** 그리워하다 sentences have a **third-person subject** (그녀 ×2, 톰이랑 메리, 카토씨).
All **three** bare 그립다/그리워 sentences have a **first- or second-person experiencer**
(그리워요 = I; 난 … 그리워 = I; 고향이 그립니? = a question put to *you*). **7 of 7 consistent.**
Wiktionary's etymology is the mechanism: 그리워하다 = 그립- + **-어** + **하다** — the derivation
that turns a descriptive adjective into a verb so it can be predicated of someone else.

**Honest limitation, recorded:** n = 7 is small, and two of the seven (#10617675, #10617676)
carry **mismatched Tatoeba translations** — the Korean says "Does she miss *you*?" while the
English reads "Do you miss *it*?". They still evidence the *form* and its subject, which is
what I use them for, but not the semantics of the English. Stated in the post.

---

## 5. Sources — journals named, full text recorded

1. **표준국어대사전** (stdict.korean.go.kr) — cap-exempt. Entries 그립다, 그리워하다, 그리움 + the
   zero result for 보고 싶다/보고싶다. Headword confirmed on every fetch.
2. **국립국어원 Revised Romanization** (korean.go.kr) — cap-exempt. geuripda.
3. **Wiktionary 그립다** (en.wiktionary.org) — cap-exempt. ㅂ-irregular paradigm, 1449 attestation.
4. **Tatoeba** — cap-exempt. Counts above, every hit inspected individually.
5. **Doshi HS, Anderson AK & Gonzalez MZ (2026)**, "Same emotion, different stimuli: A
   context-sensitive method to evoke nostalgia." **JOURNAL NAMED FOR THE CAP: *Behavior
   Research Methods* 58(4):105**, doi 10.3758/s13428-026-02971-9, PMC13065580, CC BY 4.0.
   **FULL TEXT READ** via `https://www.ebi.ac.uk/europepmc/webservices/rest/PMC13065580/fullTextXML`
   (177 KB JATS XML, 200 on first request). N = 98 across two cohorts (51 US-raised, 47
   India-raised, all living in the USA); test–retest subset n = 33 after a mean 113.5 days,
   **71.7% attrition over two months**; nostalgic value r(6,499) = .77 between timepoints.
   Finding used: nostalgia for **food** is reliably evoked, is higher for developmentally
   consistent foods, and is **greater for the group further displaced from home**. Stated
   limitation quoted in the post: stimulus validity "is ecological in the sense that it only
   arises when the relationship between the population and the stimuli is maintained".
   **Journal count in this batch before me: 0.**
6. **Chen et al. (2025)**, "When Cultural Resources Amplify Psychological Strain: Off-Work
   Music Listening, Homophily, and the Homesickness–Burnout Link Among Migrant Workers."
   **JOURNAL NAMED FOR THE CAP: *Behavioral Sciences* (Basel) 15(5):666**, doi
   10.3390/bs15050666, PMC12108809. **FULL TEXT READ** via the same endpoint (245 KB JATS XML,
   200 first request). n = **2,493 valid responses** from 122 firms in Guangdong, from 4,076
   returned questionnaires (**61.2% valid response rate**); 46.33% male. Stated limitation
   quoted: **cross-sectional design**, so it "may not have entirely captured the dynamic
   nature" of the process. Used only for the size of the place-missing phenomenon that
   고향이 그립다 names. **Journal count in this batch before me: 2 (measured 2026-09-27 across
   41 blogs). This citation makes it 3 — AT the cap of 3, not over. Flagged for the
   orchestrator: if another wave-3 row also takes it, one of us must swap.**

**Deliberately NOT cited** (BRIEF §7 / prompt bans, checked before writing): *Frontiers in
Psychology* (8 in batch, over), *PLoS ONE* (4, over), *Scientific Reports* (4, over),
*BMC Psychology* (3, at cap), *PNAS*, PMC13552847, PMC4891949 (spent by the Korean sibling),
PMC8669216, PMC12842814, doi.org (at cap 3 — **publisher URLs used instead**).
`capcheck.mjs` run 2026-09-27: no banned URL used; doi.org at cap 3 and avoided.

---

## 6. Why this is not a twin of `bogoshipda-meaning-in-english`

| | Sibling | This page |
|---|---|---|
| Question | What does 보고 싶다 *mean*? | Which of the two do I *use*? |
| Corpus half measured | 보고 싶 (19 of 46 genuine) | 그립/그리워 (**7 of 11 genuine — new**) |
| Direction of the finding | 보고 싶다's object decides "miss" vs "see" | **그립다 never has a "see" reading at all** — the asymmetry |
| Non-person | 보고 싶다 + thing → "want to see" | **그립다 + place/animal → still "miss"** — not previously drawn |
| Morphology | 싶다 as 보조 형용사 | **그립다 is ㅂ-irregular: 그리워, not ×그립어** — a form the romanisation hides |
| Third person | one FAQ on 보고 싶어하다 | **그리워하다 measured: 4 of 4 third-person subjects, 3 of 3 bare forms first/second** |
| SERP | 9/9 weak, 5 slots song lyrics | 9/9 weak, **4 slots one Q&A domain, 2 off-topic** — no shared host |
| Ranking error found | — | **#1 result calls an adjective's subject its "object"**, refuted by its own 이/가 examples |

The sibling is cross-linked from the body, and this post explicitly defers the meaning
question and the romanisation ruling to it rather than restating them.

---

## 7. Product fit — checked at source, disclosed in prose

`app/lib/prompt.ts:44` defines `/missyou-gf` as **"'I miss you' page for a girlfriend/partner"**.
`verify.config.json` `_why` makes it mandatory for every row in this batch and requires one
genuine alternative from `oneOfLinks` with a reason.

**The mismatch is real and is stated plainly in the body:** this reader is a *learner* deciding
between two Korean words — often K-pop- or K-drama-adjacent, often not writing to a partner at
all — and the page is English-furnitured and recipient-specific. **Considered and rejected:**
`/capsule`, whose `what` in `prompt.ts` is forward-looking ("predictions about the next year"),
so it does not fit 그립다's backward-looking sense despite `_why` suggesting it for
"missing about time". **Kept `/streak`** with a concrete reason: it is a two-person daily
check-in, which matches the 보고 싶다 case (a person you will see again) exactly.
**And the post says outright that nothing on the site fits the 그립다 case** — there is no
template for missing a hometown, a decade or a taste. That is a downside section, not a pitch.

## 8. Price guard

`node content/batches/2026-09-26-miss-you-global-30/pricecheck-intl.mjs
difference-between-bogoshipda-and-geuripda` — run before saving. No price, no tier, no
"free"/무료 anywhere.

## 9. Framing claims in the prompt — checked

| Prompt claim | Verdict |
|---|---|
| Sibling establishes 그립다 defined using 보고 싶다, marker split, 싶다 = 보조 형용사 | **True**, re-verified at stdict independently |
| "scripted fetch WORKS" for stdict | **True** — 200 on all five queries |
| Wiktionary 404s on multi-word forms | **True** for 보고 싶다; `그립다`/`그리워하다` resolve fine |
| `serp-ddg.mjs` takes query first | **True** — it echoed my query correctly and still parsed nothing |
| "그리워하다 vs 그립다 — verify the third-person constraint before building on it" | **Verified and it holds, 7 of 7** — see §4 |
| `/missyou-gf` is recipient-specific at `prompt.ts:44` | **True**, verified at source |
| Checklist items #25 and #50 both satisfiable | **True** — schema file is 196 lines and was read; Strapi production returned `total: 0` for this slug |
| Live `i-miss-you-in-korean` may own politeness | **Assumed true and deferred to** rather than contested — this post does not do speech levels |
