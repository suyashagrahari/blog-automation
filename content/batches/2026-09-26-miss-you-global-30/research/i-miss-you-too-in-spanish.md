# Research brief — `i-miss-you-too-in-spanish`

Keyword: **i miss you too in spanish** · body language English · market `us-en` · tier `A-reply` · band 3
Written 2026-09-28. Sibling: `yo-tambien-te-extrano` (Spanish-language page, already live — cross-linked, not translated).

---

## Phase 1 — SERP measurement

**Route: harness `WebSearch` (US-served index, NOT Google), 2026-09-28.** Legitimate for a `us-en`
row per BRIEF §3; labelled in the post because it is not Google.

`scripts/serp-ddg.mjs "i miss you too in spanish" --region us-en` was tried **exactly once**, query
first. It echoed `query: i miss you too in spanish` back correctly and returned `(no results parsed)`.
Per BRIEF §3 that is an IP-level block, not the argument-order trap. No retry.

Nine results seen. Counted only what I actually saw.

| # | Host | Type | Strong? | States the verb/pronoun rule? | Mentions *también* placement? |
|---|---|---|---|---|---|
| 1 | spanishdict.com | dictionary/translation entry | content page | no | no |
| 2 | discoverdiscomfort.com | blog listicle | content page | no | no |
| 3 | tellmeinspanish.com | teaching blog | content page | no | no |
| 4 | en.wikipedia.org | **2019 film of the same name** | off-intent | no | no |
| 5 | tureng.com | dictionary scraper | weak | no | no |
| 6 | facebook.com | social post | weak | no | no |
| 7 | quora.com | Q&A | weak | no | no |
| 8 | quillbot.com | tool blog | content page | **states a rule it then breaks** | no |
| 9 | hinative.com | Q&A | weak | no | no |

**Weak count: 5 of the 9 seen** (Tureng, Facebook, Quora, HiNative, plus the Wikipedia film page,
which is off-intent entirely). WAVE4-PLAN predicted `weak: 4`; measured 5 of 9. Gate 4 **passes** —
this is not a SERP owned by strong editorial with no weak result.

**Checkable error found (BRIEF §4's strongest asset).** QuillBot states the recipe as adding
"the subject pronoun *yo*" plus *también*. Its own third table row is **"También me haces falta"** —
no *yo*, no explanation. The reason is that `faltar`/`hacer falta` is intransitive (DPD), so the
subject is *tú*; a reader who applies QuillBot's stated rule to that verb writes something
ungrammatical. Named in the post, deliberately **not linked**.

## Phase 2 — Gap

- **Table stakes:** *te extraño* vs *te echo de menos* (regional), *yo también*, *te extraño más*.
- **The gap:** not one of the nine results says which verb licenses which pronoun, and not one
  mentions where *también* may sit. The entire SERP treats this as a vocabulary question.
- **Fan-out:** "yo también te extraño meaning" · "te extraño también correct?" · "reply to me haces
  falta" · "a mí también vs yo también" · "why do Spanish speakers say yo".

**Angle:** the reply is decided by the **verb**, via the RAE's subject/prepositional pronoun slots —
and the English-vs-Spanish asymmetry is **optionality of the subject pronoun**, not particle placement.

## Phase 3 — What I tested, and what overturned the framing

The task prompt asserted that Spanish "cannot postpose the additive particle onto the object the way
English *too* does", so `yo también` must attach to the subject.

**Half of that is false, measured.** Census of 120 attested Spanish Tatoeba sentences containing
*también* (sampled 2026-09-28, Spanish sentences carrying an English translation):

| Position of *también* | n | % |
|---|---|---|
| sentence-initial | 44 | 36.7% |
| medial | 40 | 33.3% |
| clause-final | 36 | 30.0% |

`¡Te extraño también!` and `¡Te echo de menos también!` are both attested. Spanish postposes the
particle roughly a third of the time. 17 of the 120 sat immediately after *yo*.

**The prompt's conclusion survives on a different mechanism.** It is not *también* that forces the
subject reading — the RAE's DPD entry on *pronombres personales tónicos* licenses **yo** only in the
subject slot and **mí** only as a prepositional term. Spanish may omit the pronoun entirely, so
writing *yo* is elective and therefore contrastive. English cannot do this: *I* is obligatory and
carries no information, which is why English is stuck with the ambiguous clause-final *too*.

Frequency evidence (Leipzig Corpora Collection, REST API, 2026-09-28):

| Corpus | *también* | *yo* |
|---|---|---|
| `spa_news_2011_3M` | rank 48, 87,096 | rank 229, 22,562 |
| `spa_news_2011_1M` | rank 49, 29,206 | rank 232, 7,605 |
| `spa_wikipedia_2011_1M` | rank 42, 30,971 | **rank 1,761, 1,149** |

Self-authentication: three independent Spanish corpora agree on ordering, and *yo* collapses in the
encyclopedic corpus while *también* does not — the first-person register contrast a genuinely Spanish
corpus must show. **The German control named in my prompt (`de` = 4,228,124, rank 1) could not be
reproduced**: `/ws/words/deu_news_2012_3M/word/de` returns 6,443 at rank 735. 4,228,124 is in fact the
frequency of *de* in the **Spanish** corpus `spa_news_2011_3M`, visible inside that corpus's
cooccurrence payload. The earlier agent's control was mislabelled, not wrong.

### Sources (6) — all fetched, headwords read, caps checked

| # | URL | What it carries | Cap status |
|---|---|---|---|
| 1 | `rae.es/dpd/pronombres personales tónicos` | subject `yo` / prepositional `mí` table | 0 prior posts |
| 2 | `rae.es/dpd/faltar` | "es intransitivo" in all senses incl. *hacer falta* | 0 prior posts |
| 3 | `corpora.wortschatz-leipzig.de` (spa corpora) | frequency/rank table above | exempt instrument |
| 4 | `tatoeba.org` (*también* search) | the 120-sentence placement census | exempt instrument |
| 5 | `europepmc.org/…/PMC12619655` | *J. Historical Sociolinguistics* 2025 — orality predicts overt subject use; 2.9%–22% | 0 prior; journal new to batch |
| 6 | `europepmc.org/…/PMC11729791` | *Open Mind* 2025 — reference form is primed; 12% vs 63% | 0 prior |

Both papers read in **full text** via the Europe PMC `fullTextXML` endpoint. No abstract-only citation.
`dle.rae.es/extrañar` and `dle.rae.es/falta` were **rejected** — already in 4 and 5 batch posts
respectively, over the URL cap of 2. `rae.es/dpd/también` was rejected as the sibling's own anchor,
to avoid twinning its thesis.

### Lines cut, per BRIEF §4

- Cut a planned section on *extrañar* vs *echar de menos*: it is the whole subject of the sibling
  `diferencia-entre-te-extrano-y-te-echo-de-menos`, and repeating it would be a twin.
- Cut "*a mí también* is the reply to another verb" as a section: it is an H2 of the Spanish sibling.
  Kept as one sentence plus the cross-link.
- Cut per-phrase Tatoeba frequency claims. The API's phrase search is fuzzy — `"también te extraño"`
  returned *También te extrañamos* — so phrases are reported as attested/not attested only.
- Cut any population proportion from the census: Tatoeba reports the *también* count as exactly
  `1000`, which is a cap, not a total.
- Cut a CORPES XXI / CREA frequency check: both 403 to scripts, and Corpus del Español needs a login.

### Tooling defects found

- `serp-ddg.mjs` blocked for `us-en` (correct echo, no results parsed) — one attempt, no grind.
- Leipzig neighbour endpoints 404 under `/ws/words/{corpus}/leftneighbours/{word}`; the working shape
  is `/ws/cooccurrences/{corpus}/cooccurrences/{word}`. Left/right-neighbour data was not obtainable.
- `tureng.com` refused a scripted fetch; counted from the SERP listing only, never scraped.
- The German Leipzig control circulating in this wave is mislabelled (see above).
