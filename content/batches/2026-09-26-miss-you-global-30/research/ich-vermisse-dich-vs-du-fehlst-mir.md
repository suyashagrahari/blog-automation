# Research brief — `ich-vermisse-dich-vs-du-fehlst-mir`

**VERDICT: ABORT. No blog JSON written.**

**Not aborted at Gate 4 — the SERP is winnable. Aborted at the duplicate test: the
SERP wants exactly what two existing SubhSandesh pages already give, and every
candidate differentiator has been measured and closed.**

- Keyword: `ich vermisse dich vs du fehlst mir`
- Row tier: `C-explainer` (flagged HIGH DUPLICATE RISK / ABORT-LIKELY in `WAVE3-PLAN.json`)
- Region: `de-de` · bodyLanguage would have been German
- Date measured: 2026-09-27
- Files emitted: this brief only. `blogs/` untouched, `batch.json` untouched.

---

## 1. Headline finding, stated first because it contradicts the run's assumption

**The German magazines do NOT own a "vs" query.** The `de-de` SERP for
`ich vermisse dich sprüche` was dropped as unwinnable against ten established German
magazines. This query is a different shape and a different SERP: **8 of 9 organic
results are weak**, the #1 result is a ten-year-old Reddit thread, Google pulls its
featured snippet from a Redditor's comment, and **not one dictionary or grammar
authority ranks.** Gate 4 passes comfortably.

**And it still should not be written**, because the answer the SERP is missing is one
this site already published twice — once in German, once in English with six corpus
cuts. A third page is the twin the row was flagged for.

---

## 2. SERP routes attempted, in the order BRIEF §3 prescribes

| Route | Result |
|---|---|
| `scripts/serp-ddg.mjs "<kw>" --region de-de` | `(no results parsed — DDG markup may have changed)`. **One call, no retry**, per BRIEF §3. |
| **Google `gl=de&hl=de&pws=0&num=20` in the real browser** | **200, parsed, used below.** Re-run once; identical. |
| Bing / Brave | Not needed — Google served on the first attempt, twice. |

**A script gotcha worth recording for the next agent.** `scripts/serp-ddg.mjs` picks
its query with `args.find(a => !a.startsWith("--"))`, so the documented usage
`--region de-de "<query>"` silently makes **`de-de` the query** and prints
`query: de-de`. The query must come **first**: `serp-ddg.mjs "<query>" --region de-de`.
My first invocation hit this; I caught it in the script source, re-ran with the
correct arg order, and DDG then failed properly on the real query. Only the
correctly-formed call is counted as my one DDG attempt.

### Self-authentication (Gate 4 / contention)

Every extracted row is in German and contains my exact keyword or its two component
phrases; the featured snippet quotes both `ich vermisse dich` and `Du fehlst mir`. No
Turkish, Spanish, Dutch or English result appeared. Two independent loads returned the
**same nine results in the same order**. This is my SERP, not a sibling's.
A correct page title was *not* treated as authentication — the content was.
No captcha was encountered and nothing was clicked.

## 3. Measured SERP — Google `gl=de&hl=de&pws=0`, 2026-09-27, two identical runs

| # | Result | Publisher type | Strong / weak |
|---|---|---|---|
| 1 | Reddit r/German — "Gibt es einen Unterschied zwischen 'Ich vermisse dich…'" (9 comments, **10 years old**) — Google's **featured snippet** | Forum thread | **WEAK** |
| — | *"Weitere Fragen" (People Also Ask) block* | SERP feature | — |
| 2 | gutefrage.net — "gibts n unterschied zwischen 'ich vermisse dich' und 'du…'" (**02.03.2011**, 3 answers) | Q&A forum | **WEAK** |
| 3 | myself.de — "Psychologie: 4 Sätze, die indirekt 'Ich vermisse dich' sagen" (10.07.2026) | Established German magazine (Bauer) | **Strong** — but off-intent |
| 4 | Instagram · de.learn — "Stop saying 'Ich vermisse dich' in German" | Social post | **WEAK** |
| 5 | WordReference Forums — "Ich vermisse dich v. Du fehlst mir" (**11.10.2010**) | Forum thread | **WEAK** |
| 6 | Reddit r/German — "Fehlen vs Vermissen" (4 comments, 1 year) | Forum thread | **WEAK** |
| 7 | YouTube · TRAU DICH DEUTSCH — "Du fehlst mir – oder vermisse ich dich? \| Deutsch B2–C1" (**~10 views**, 3 weeks) | Video, no audience | **WEAK** |
| 8 | QuillBot — "Wie kann man noch 'Ich vermisse dich' sagen?" (Sprüche und Zitate) | High-DA SaaS blog, off-intent; Google flags **"Es fehlt: vs"** | **WEAK** (off-intent) |
| 9 | famwalls.com — "'Ich vermisse dich' – Die schönsten Sprüche" (21.11.2024); **"Es fehlt: vs"** | Small Sprüche site | **WEAK** |

**Weak count: 8 of 9.** One established German magazine (myself.de), and it answers a
*different* question — indirect phrasings, not the contrast.

Three of the nine (ranks 7, 8, 9) carry Google's **"Es fehlt: vs"** marker, i.e. they do
not contain the comparison term at all and are ranking on partial match. The genuine
head-to-head answers on this SERP are **two forum threads from 2010 and 2011 and one
from 2024** — no Duden, no DWDS, no Wiktionary, no grammar site.

### What the SERP is actually asking for (PAA block, verbatim)

- „Ist du fehlst mir und ich vermisse dich das Gleiche?"
- „Was ist der Unterschied zwischen 'fehlen' und 'vermissen'?"
- „Wann sagt man 'Ich vermisse dich'?"
- „Welche Alternativen gibt es zu 'Du fehlst mir'?"

**This is the decisive measurement, and it is what kills the row.** Three of those four
questions are already answered, in full and with named authorities, by pages this site
has already published. The fourth is the Sprüche lane, which myself.de owns and which
this run already dropped as unwinnable.

**The SERP wants nothing the two siblings do not give.** That is precisely the abort
condition my instructions name.

---

## 4. Checkable error found on the SERP

**Reddit r/German, rank 6, "Fehlen vs Vermissen":**

> „Du fehlst mir" und „ich vermisse dich" sind Synonyme, ja. **Ersteres wird aber
> glaube ich häufiger verwendet.**

*Ersteres* = `du fehlst mir`. The claim is that **`du fehlst mir` is the more frequent
of the two**, and it is checkable — it is **backwards in every spoken-register corpus
cut that has been counted**:

| DWDS corpus cut | *ich vermisse dich* | *du fehlst mir* |
|---|---|---|
| Filmuntertitel, 75,520,701 tokens | **453** | 232 |
| Filmuntertitel, exact present-tense string | **410** | 223 |
| DWDS blog collection, 107M tokens | **25** | 12 |
| perfect forms (*ich habe dich vermisst* / *du hast mir gefehlt*) | **297** | 105 |

Counts are from the live sibling `/blog/i-miss-you-in-german`, which measured them at
DWDS; I did not re-run them and am not claiming them as my own measurement.

**Recorded with its honest limit**, because the error is real but not crushing: two
small cuts run the other way (DWDS-Kernkorpus 3:6, Deutsches Textarchiv 3:9 — single
digits, meaningless), and the bare *lemma* counts across DWDS's 53.4-billion-token set
favour `fehlen` 7,740,436 to 1,172,332 — but overwhelmingly in the sense "to be
lacking" (*es fehlt an Geld*), not "to be missed by a person". The Redditor's hedge
("glaube ich") is doing honest work. **The error is that Google promoted an unmeasured
forum guess into a featured snippet on a question that has a countable answer** — and
this site has already published that answer, in English, where no German searcher will
find it.

*Also noted:* the on-disk German sibling already ran this exact play — measured its own
SERP, found a page collapsing *du* and *Sie* inside one paragraph (*Sie* 70 vs
*dich* 118), and published the count. A second German SERP-error section is itself a
repeat of a move, not just of a fact.

---

## 5. The duplicate audit — every candidate lane, measured and closed

My instructions listed four candidate lanes. All four are closed. I looked for a fifth
and did not find one.

### 5a. Candidate: "which one to actually send, by relationship and situation"

**CLOSED — owned twice.** The live `/blog/i-miss-you-in-german` carries a five-row
decision table (German line / literal sense / corpus hits / fit on a miss-you page).
The on-disk German sibling `wie-sage-ich-ihm-dass-ich-ihn-vermisse` carries an H2
„Vier Formulierungen und was sie von ihm verlangen". A German-language decision section
would be the English table with the learner column deleted.

### 5b. Candidate: "whether the two differ in what they presuppose"

**CLOSED — already searched for, and honestly dropped, by the sibling.** The on-disk
German sibling states this verbatim in its own body:

> „Ob deutsche Muttersprachler ‚Du fehlst mir' deshalb als weniger fordernd
> **empfinden**, konnte ich nicht belegen; eine Untersuchung dazu habe ich nicht
> gefunden. Die Satzstruktur ist durch Wörterbücher gedeckt, die Gefühlswirkung ist
> meine Auslegung."

A named source does not exist. My instructions say: *"if not, drop it rather than
inventing psychology."* Dropped.

### 5c. Candidate: regional or register differences (DACH) — **THE ONE GENUINELY NEW CHECK**

**CLOSED — measured, negative result.** This was the only candidate neither sibling had
tested, so I tested it rather than assuming. Both headwords fetched and the headword
confirmed before reading, per BRIEF §4:

| Instrument | Status | Register / regional marking on the *person* sense |
|---|---|---|
| `dwds.de/wb/vermissen` | 200, headword confirmed | **None.** No label of any kind. |
| `dwds.de/wb/fehlen` | 200, headword confirmed | **None** on sense 1b ⟨jmd. fehlt jmdm.⟩. |
| `duden.de/rechtschreibung/vermissen` | 200, headword confirmed | **None.** No `Gebrauch` label at all. |
| `duden.de/rechtschreibung/fehlen` | 200, headword confirmed | **None** on sense 4. |

Every regional/register hit on those four pages belongs to a **different lexical item**
and would have been a trap to cite:

- `einlangen` marked *österr.*, `jiepern`/`giepern` marked *ugs., regional*,
  `schmerzlich vermissen` marked *geh., floskelhaft* — all from the **thesaurus
  neighbour panel**, not from the headword.
- Duden's only `Gebrauch` labels on `fehlen` are **gehoben** on "eine Sünde begehen,
  etwas Unrechtes tun" and **veraltet** on "nicht treffen, verfehlen" — senses that have
  nothing to do with missing a person.
- `süddeutsch` / `schweiz` matches in the DWDS page text are **newspaper names in corpus
  citations** (*Süddeutsche Zeitung*, *Luzerner Zeitung*), not usage labels.

**Finding: neither `vermissen` nor `fehlen` carries any regional or register marking on
the sense that matters. There is no Germany/Austria/Switzerland difference to write
about.** That is a clean negative, and a negative does not carry a page.

### 5d. Candidate: a different DWDS corpus cut

**CLOSED — DWDS is spent.** The live English sibling already published Filmuntertitel
(453:232 and 410:223), the blog collection (25:12), perfect forms (297:105), the reply
forms (80:32), DWDS-Kernkorpus (3:6), Deutsches Textarchiv (3:9), and lemma counts over
53.4 billion tokens. A seventh cut would produce a seventh number pointing the same way.
That is additive noise, not a lane.

### 5e. What I checked that was not on the list

- **The two German-language pages that rank do make a factual claim worth contesting**
  (§4) — but contesting it requires publishing the DWDS counts, which duplicates 5d.
- **A "what the grammar does NOT determine" angle** — i.e. that the case difference is
  real but carries no politeness or intensity consequence. This is genuinely the honest
  German-native answer, and it is also exactly what the German sibling already concluded
  in 5b, in German, in a section it already wrote.

---

## 6. Why "the German searcher cannot reach the English page" does not rescue the row

This is the strongest argument for proceeding and it deserves a straight answer rather
than silence.

It is true that Google.de will never serve `/blog/i-miss-you-in-german` (English) to a
German query, so the German searcher is unserved despite this site owning the answer.
**But that is a discovery gap, not a content gap, and a third independently-researched
post is the wrong instrument for it.** Writing one would mean:

1. Publishing the same corpus evidence on two URLs, which is the twin condition.
2. Putting a new German page into competition with
   `wie-sage-ich-ihm-dass-ich-ihn-vermisse` — already on disk, already in German,
   already carrying an H2 on this exact contrast and a FAQ „Was ist stärker: ‚Ich
   vermisse dich' oder ‚Du fehlst mir'?" — for overlapping German queries.
3. Note that the German sibling **already cross-links** `/blog/i-miss-you-in-german` for
   precisely this frequency question. A German reader who lands on the German sibling is
   already routed to the answer.

**Recommendation to the orchestrator, offered as signal rather than as a hedge:** if the
`de-de` opportunity measured in §3 is worth taking — and 8-of-9-weak with forum
incumbents is the weakest German SERP measured in this run — the correct remedy is a
**deliberate German localisation of `i-miss-you-in-german`** (same research, German body,
hreflang pair), decided at site level, **not** a thirty-first independently-sourced post.
That is a different piece of work with a different risk profile and it is not mine to
start unasked.

---

## 7. Instruments verified this session (all cap-exempt, all headwords read)

| URL | HTTP | Headword confirmed | Used for |
|---|---|---|---|
| `https://www.dwds.de/wb/vermissen` | 200 | yes | §5c register check |
| `https://www.dwds.de/wb/fehlen` | 200 | yes | §5c register check |
| `https://www.duden.de/rechtschreibung/vermissen` | 200 | yes | §5c register check |
| `https://www.duden.de/rechtschreibung/fehlen` | 200 | yes | §5c; sense 4 gloss re-confirmed verbatim as *"[sehnlich] herbeigewünscht, vermisst werden"* with example *"du wirst/deine Hilfe wird mir sehr fehlen"* |
| `https://www.dwds.de/api/frequency/?q=du+fehlst+mir` | 200 | n/a | returns `{"frequency":null,…}` — **the public frequency API does not serve multi-word strings**; recorded so the next agent does not spend time on it |
| `https://www.dwds.de/api/corpus/counts`, `/api/search/` | **404** | n/a | neither endpoint exists; DWDS corpus counts need the site UI or the DDC backend |
| `https://www.dwds.de/api/wb/snippet?q=fehlen` | 200 | yes | works, returns lemma + Wortart + canonical URL — **a cheap way to verify a DWDS headword resolves before citing it** |
| `https://strapi.subhsandesh.in/api/articles?filters[slug][$eq]=i-miss-you-in-german` | 200, `total: 1` | n/a | read the live sibling in full via `ctx_execute` (curl/WebFetch are blocked; the sandbox fetch works) |

No source was cited that I did not fetch and read in this session. No journal was
consulted, because no blog JSON was written — so **this row spends zero source-cap
budget**: no `Frontiers in Psychology`, no PMCID, no `doi.org`, nothing added to any
hostname count. The four papers a proceeding row would have spent remain available to
the rest of the batch.

---

## 8. Checks run

- `node scripts/verify-batch.mjs content/batches/2026-09-26-miss-you-global-30` — run;
  **no line names this slug**, which is correct for a row that emitted no blog JSON.
- `pricecheck-intl.mjs` / `capcheck.mjs` — **not run and not applicable**: both operate
  on an emitted blog JSON, and there is none.
- `batch.json` — **not touched**, per instruction.
- No other blog file was read for modification or modified.

## 9. Honest assessment

The frustrating part of this row is that the SERP is a genuine, measured opportunity —
the best German SERP anyone in this run has measured, and a direct refutation of the
working assumption that `de-de` is closed. Two decade-old forum threads and a
ten-view YouTube video are holding a question that has a countable answer.

But an opportunity is not a lane. The test is not *"can this page rank?"* — it probably
could — it is *"does this site have something to say here that it has not already
said?"* Measured against two siblings, on five candidate axes, four already published
and the fifth (register/regional) returning a clean negative at both Duden and DWDS:
**no.** The one thing I found that is genuinely mine is the Reddit frequency error in
§4, and answering it requires republishing the sibling's corpus table.

One post's worth of new information exists on this axis in German, and it is already
written and on disk. I am recording the opportunity so it is not lost, and declining to
fill it with a twin.
