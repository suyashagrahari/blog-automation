# Research brief — `is it miss you or missing you`

- **Slug:** `miss-you-or-missing-you` (checked against Strapi 2026-09-25 — free; `is-it-miss-you-or-missing-you` also free)
- **Batch:** `2026-09-25-miss-you-30`, wave 2, row n=10 of `WAVE2-PLAN.json`
- **Category:** `miss-you-across-miles` · **Templates:** `/missyou-gf` (mandatory), `/templates`, `/catch`
- **SERP source:** `SERPS-WAVE2.md`, "## is it miss you or missing you" — DuckDuckGo `kl=in-en`, 2026-09-25

---

## Phase 0 — data gate

Used `facts-snapshot.md`, cross-checked byte-for-byte against `content/facts.md` lines
136–147 (the current `## Miss-you segment` block, **not** the
`## Superseded vintage — 2026-09-15 (ARCHIVE)` block at lines 43–85).

Gate passes. Eight facts cited; two inside the first 150 words:

- `Median gap between a miss-you page's first save and its last edit: 2.6 hours, n=214` (word ~118)
- `88.8% of started miss-you pages are published and shared (190 of 214)` (word ~127)

Deliberately chosen because they are the **least-used pair in the batch** — a frequency
count across the 24 sibling blogs showed the 2.6-hour line in 2 posts and the 88.8% line
in 1, against 24 posts each for the 214-pages, 43.5%-password and 88-word lines. They
are also the only two that are actually *about hesitation*, which is what this keyword is.

Mandatory caveats honoured: n=214 over two months (template live 2026-07-28) is stated in
the body; no picker-with-defaults field (city, background music, "together since") is
cited anywhere; `viewCount` is not cited; the template-not-recipient disclosure is in the
body prose, not only in this brief. No price, cost or "free" appears anywhere —
`## Pricing (fill in by hand)` is empty.

---

## Phase 1 — SERP analysis

All ten results are usage/grammar pages. No ecommerce, no tools, no vendors. Five fetched
in full on 2026-09-25 (english.stackexchange returned 403 and was not read).

| # | Page | Words | Direct answer? | Grammar depth | Data cited | Format |
|---|---|---|---|---|---|---|
| 1 | oneminuteenglish.org/missed-you-miss-you/ | 537 | Yes, H2 "Miss you" then "Missed you" | None — tense labels only | None | 3 short H2s, ad-heavy shell |
| 2 | lovelingolab.com — I miss you or I missed you | 1,125 | Key-takeaways block first | None; uses "aspect" once, as "key aspects" in a table header | None | Key takeaways, 6 H2s, one table, comment form |
| 3 | textranch.com/c/miss-you-or-missed-you/ | 1,389 | Yes, one-line verdict per form | Tense labels only | Own usage counts ("2780 views") | Two H2s + generated example sentences |
| 4 | attractiondiary.com — I miss you or I missed you | 865 | Yes, after a rhetorical opener | "continuous, perhaps even an intense, sense of absence" — closest any page gets | None | Listicle, relationship framing, social-share furniture |
| 5 | textranch.com/c/i-miss-you-or-im-missing-you/ | 1,471 | Yes — "simple present tense" vs "present continuous tense" | Names the tenses, explains nothing | Own usage counts | Same generated template as #3 |
| 9 | english.stackexchange.com q/153075 | not read (403) | — | — | — | Q&A |

**What none of the five does:** uses the word *stative*; names a corpus, dictionary or
grammar reference; mentions Indian English or any variety of English; distinguishes what
the progressive *implies* from whether it is *allowed*; gives any frequency figure from
outside its own site.

**Three of the five (1, 2, 4) answer `miss` vs `missed`, not `miss` vs `missing`.** The
head keyword is being served by pages about a different confusion.

---

## Phase 2 — gap analysis

**Table stakes:** both forms are correct; simple present vs present continuous; the
miss/missed past-tense contrast; example sentences; when to use which in a message.

**The gap:**
1. *Why* the progressive feels different — nobody names the stative-verb constraint.
2. Indian English. The SERP is India-served and not one page tells an Indian reader that
   "I am missing you" is a recognised feature of their variety rather than an error.
3. Any measurement at all. No page gives a frequency.
4. The second sense of *missing* ("absent, lacking"), which is the reading that actually
   makes the progressive risky in formal writing.
5. A limits section. No page says what its answer cannot cover.

**Stale data:** none to supersede — no page cites dated data of any kind.

**Fan-out sub-queries → H2s:**

| Sub-query | H2 |
|---|---|
| are both correct? | Both forms are correct — the difference is aspect, not right and wrong |
| why does one sound odd? | "Miss" is a state verb, and that is the whole explanation |
| which is more common? | Miss you vs missing you vs missed you: the comparison |
| is "I am missing you" Indian English? | In Indian English, "I am missing you" is a documented feature, not an error |
| miss vs missed | "I missed you" is a different question |
| can "missing you" mean something else? | "Missing" has a second meaning, and it can misfire |
| does the wording matter? | What actually changes the message |
| what is this answer not covering? | Where this answer runs out |

**Angle:** wins by being the only post that answers the choice with the actual linguistics
— *miss* as a state verb, the progressive as a marked **expressive** form, and eWAVE 3.0
rating that progressive pervasive in Indian English — next to SubhSandesh's own evidence
that 214 senders take a median 2.6 hours to settle an 88-word letter.

---

## Phase 3 — sources, and what was verified against what

Searched the phenomenon, not the keyword: `Indian English progressive stative`,
`progressive aspect World Englishes extension stative verbs`, `stative verbs progressive
aspect English`, `progressive aspect Indian English`, `Indian English grammar features
corpus variety` — via `findpapers.mjs` (Crossref + Europe PMC), DOAJ and Unpaywall.
Zero WebSearch calls spent. OpenAlex returned HTTP 429 on every attempt, as the brief warns.

### Claims verified, and the instrument each was verified against

| Claim in the post | Verified against | Verdict |
|---|---|---|
| English resists the progressive with stative verbs | Zeng, Shirai & Chen 2023, *Linguistics* 61 — native COCA data: progressive *-ing* strongly associated with activity verbs, **stative verbs least likely of all** to be inflected with it | Confirmed (abstract, read in full via DOAJ) |
| *miss* (emotional sense) is a state verb | Longman Dictionary of Contemporary English, `ldoceonline.com/dictionary/miss`, fetched 2026-09-25: sense 3 "feel sad about somebody — to feel sad because someone you love is not with you"; also carries the grammar note "Miss is followed by an -ing form, not an infinitive" | Confirmed |
| The stative progressive is expressive, and a spoken-register feature | Granath & Wherrity 2013, *Rhesis* 4, OA — 132 tokens of BE *loving* and 66 of BE *knowing* in COHA; argue all so-called statives can take the progressive, and that they are called odd largely because grammar descriptions were built on written English | Confirmed |
| **"I am missing you" is idiomatic Indian English, not an error** | eWAVE 3.0 feature 88, "wider range of uses of progressive be + V-ing than in StE: extension to stative verbs". Indian English (language 52) = **A, "feature is pervasive or obligatory"**; 13 of 77 varieties rated A; Colloquial American English = B; the atlas' own IndE example is *We are knowing each other*. Read at `ewave-atlas.org/values/52-88` and cross-checked in the eWAVE CLDF `values.csv` / `codes.csv` | **Confirmed** |
| Indian English uses the progressive more | Salles-Bernal 2015, *Miscelánea* 51, OA — ICE corpora: IndE highest progressive frequency of the three Asian varieties (India, Singapore, Hong Kong); progressive more frequent in speech than writing in every variety | Confirmed for the progressive **generally** |
| Indian English uses **stative** progressives more | Rautionaho 2020, *World Englishes* — once regional differences in verb-phrase density are accounted for, "more frequent use of stative progressives in Outer Circle varieties" is **not confirmed**, though IndE differs from SgE and HKE | **NOT confirmed — brief framing corrected** |
| The progressive implies a *temporary* state in British/American English | van Rooy 2014, *World Englishes* — Outer Circle prototype is an **on-going state of extended duration**; Inner Circle prototype is a **temporary** state; all three Outer Circle varieties use the progressive proportionally more with statives than BrE | Confirmed |

### Correction to the task prompt

The prompt asserted that "I am missing you" is "markedly more common … in Indian English
than in US/UK English". **The frequency half of that does not survive Rautionaho 2020.**
The post therefore claims the form is *idiomatic and unmarked* in Indian English (which
eWAVE and van Rooy both support) and explicitly declines to claim Indians say it more
often. Rautionaho's correction is stated in the body rather than buried here.

The prompt's "more temporary" framing **is** supported — but only for Inner Circle
English, which is how the post states it.

### Own measurements (named in the body, reproducible, not counted in `sources`)

1. **Google Books Ngram**, English 2019 corpus, smoothing 0, year 2019, queried 2026-09-25
   via `books.google.com/ngrams/json`:
   `I miss you` 1.0158e-6 · `I missed you` 8.302e-7 · `I'm missing you` 1.146e-8 ·
   `I am missing you` 8.087e-9. Ratio "I miss you" : both progressives = **51.96 : 1**;
   "I miss you" : "I missed you" = **1.22 : 1**.
   Caveat stated in the body: "I miss you" is a 3-gram measured against 4-grams.
2. **Universal Dependencies English Web Treebank**, all three CoNLL-U splits, lemma
   `miss` + UPOS `VERB`: **10 VBG tokens, 1 VBP/VBZ, 10 VBD**. Every one of the ten
   *-ing* tokens is the "absent / lacking / failed to notice" sense ("I am missing Deal
   No. 74419 on your sheet", "maybe I'm missing something here", "a nail missing") — not
   one is the emotional sense. Ten tokens proves nothing about rarity and the body says so.

### Fetch failures, recorded rather than papered over

- `dictionary.cambridge.org` — 403 (both the grammar pages and the `miss` entry)
- `collinsdictionary.com`, `merriam-webster.com`, `dictionary.com` — 403
- `ucl.ac.uk/internet-grammar` — 403 (Cloudflare challenge)
- `onlinelibrary.wiley.com` — 403; van Rooy 2014 and Rautionaho 2020 abstracts read from
  the publishers' **Crossref deposits** instead. Both are recorded as abstract-only.
- `papiro.unizar.es` (Miscelánea) and `ojs.unica.it` (Rhesis) — connection failed across
  retries, so the three OA papers are cited at their **DOAJ article records**, which is
  where their abstracts were actually read.
- `firecrawl` MCP — out of credits, so all fetching went through the sandbox.

### Cap compliance

`doi.org` is at the cap of 3 in this batch and was **deliberately avoided**;
`journals.plos.org` likewise. `doaj.org` appears three times in this post but in only
one post batch-wide. `onlinelibrary.wiley.com` and `ewave-atlas.org`: one post each.
Both World Englishes citations sit in this single post, so the journal is at 1 of 3 posts.
`capcheck.mjs` re-run immediately before saving.

---

## Phase 5 — links and cannibalisation

**Internal (3, all from `TEMPLATE_LINKS`):** `/missyou-gf` (mandatory, placed after the
88-word / 43.5% section establishes why), `/catch` (the `oneOfLinks` alternative, with
the reason: a letter that arrives line by line suits a long note better than a single
page), `/templates` (with the reason: a partner template reads wrong sent to a brother).

**Live cross-link:** `/blog/what-to-say-when-you-miss-someone` (1,162 words, read in full
from Strapi). It is the closer of the two candidates — it opens on "I miss you is a
complete sentence" and is entirely about wording, so this post hands off to it once the
grammatical choice is settled. `/blog/cute-ways-to-say-i-miss-you-over-text` (1,153 words)
was read and not linked: it is a tone-and-examples listicle with no overlap to hand off to.

**Cannibalisation check:** 81 live slugs contain `miss` (Strapi query, 2026-09-25). None
is a grammar or usage post — they are message/quote/shayari lists, relationship-specific
message pages, and page-builder tools. Two live slugs (`missing-you-message-for-boyfriend`,
`missing-you-already-message`) use the progressive form in the slug without ever
addressing whether it is correct. No merge recommended; no overlap to escalate.

**Sibling separation (wave 2):** `how i miss you meaning`, `miss you dearly meaning` and
`miss you yaar meaning in hindi` are all *what a phrase means*. This post is *which of two
grammatical forms to send*. No sibling primary is used as a secondary keyword, and the
H2s carry no phrase-meaning section.

---

## Phase 6 — audit summary

50/50 checklist items accounted for; 49 passed, 1 failed.

**Failed (structural):** "metaTitle 50–60 characters, exact keyword in the first five
words (hard cap 70)". The keyword is seven words long, so it cannot fit inside five. It
sits at the very front of a 54-character metaTitle, which is the rule's intent. Closes
only if the checklist item is amended for keywords longer than five words.

Body: 1,796 words (plain whitespace split, FAQs excluded). 11 FAQs, all in `article.faqs`
only. 8 H2s. One comparison table, 4 data rows, one column anchored on first-party data.
