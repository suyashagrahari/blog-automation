# Research brief — `ja-tez-za-toba-tesknie`

**Keyword:** `ja też za tobą tęsknię` · **body language:** Polish · **region:** `pl-pl`
· **tier:** A-reply · **category:** `miss-you-across-miles`
· **templates:** `/missyou-gf` (mandatory), `/streak`, `/templates`
· **written 2026-09-27**

The plan row carries the keyword as `ja też za tobą tęsknię in english`; the task
prompt corrected it to the bare Polish phrase and that is what `batchMeta.keyword`
holds. The "in english" tail is covered by H2 1 and FAQ 9 rather than by the H1.

---

## Phase 1 — SERP

### Route log (name the instrument, per BRIEF §3)

| Attempt | Result |
| --- | --- |
| `node scripts/serp-ddg.mjs "ja też za tobą tęsknię" --region pl-pl` | echoed `query: ja też za tobą tęsknię` (so the argument order was right), returned `(no results parsed)`. **One call, no retry.** |
| Google, real browser, `gl=pl&hl=pl&pws=0` | **worked.** Run twice, byte-identical result sets both times. |
| Bing / Brave / Yahoo | not needed — Google served on the first attempt. |

Self-authentication: both scrapes were checked for **my** query string and Polish
text in the returned body before anything was recorded. Neither run returned another
agent's page. Counts below are **only results I actually saw** — 8 and 9 — not
assumed tens.

### Head term `ja też za tobą tęsknię` — 8 results seen

| # | Host | Page type | Weak? |
| --- | --- | --- | --- |
| 1 | youtube.com (PJ Robi) | disco-polo song "Tęsknię za Tobą" | yes |
| 2 | youtube.com (GG Piosenki) | song "Ja za Tobą tak tęsknię" | yes |
| 3 | context.reverso.net | translation-memory scrape of my exact phrase | yes |
| 4 | filmweb.pl | film entry — *Miss You Already* (2015), PL title "Już za tobą tęsknię" | yes |
| 5 | youtube.com (Lemon Records) | song "A Ja Tęsknię" | yes |
| 6 | tekstowo.pl | song lyrics, NiceMan "Ja za Tobą tęsknię" | yes |
| 7 | facebook.com (DJ Irek) | social video about tęsknota | yes |
| 8 | kartki.tja.pl | e-card generator page | yes |

**Weak count 8 of the 8 I saw. 6 of 8 are music or film.** Zero pages explain the
phrase. Google's People-Also-Ask carried four questions, one of which —
**„Co odpowiedzieć na »Tęsknię za tobą«?"** — is the retarget the lane-wide finding
tells reply rows to take.

**Gate 2 = PARTIAL.** This is an entertainment SERP, exactly as Spanish (9/10 music)
and Russian (5/8 music) measured. The head term is **not claimed** anywhere in the
post; the post targets the reply/meaning intent.

**The Coben hazard did not materialise here, and that is a correction worth
recording.** The brief warned that the Harlan Coben Netflix series contaminates the
bare Polish head term (the sibling measured Filmweb #1, Netflix #2). With the `ja też`
prefix Coben appeared **zero times across two identical runs**. The Filmweb entry that
did appear is a different work entirely — the 2015 comedy-drama *Miss You Already*.

### Retarget tail `co odpowiedzieć na tęsknię za tobą` — 9 results seen

Reddit r/ask · ohme.pl listicle · Reddit r/aspergirls · zapytaj.onet.pl ·
Facebook "Psychologia związku" · Reddit r/socialskills · video carousel
(Instagram, Facebook ×2, TikTok) · kobiecywieczor.pl listicle · f.kafeteria.pl forum.

**Weak count 9 of 9.** **Gate 4 = PASS on this tail.**

**Checkable finding in ranking results:** three of the nine are **English-language
subreddits** (r/ask, r/aspergirls, r/socialskills) served with Polish titles and
Polish snippets — machine-translated English UGC, with Google's highlighted best
answer rendering as „hehe dzięki". Google has so little Polish content for this query
that it fills page one with translated English forum posts. Anyone can check it by
opening the threads. The two magazine listicles (ohme.pl, kobiecywieczor.pl) rank for
a question they do not answer: both are lists of ways to **say** „tęsknię", not ways
to **reply**.

---

## Phase 2 — gap

**Table stakes:** an English gloss; some example sentences; a warm register note.

**The gap:** *nobody states where „też" attaches.* Across 17 results on two SERPs not
one page makes any claim about the particle, so there is no competitor framing to
mirror and no competitor error to correct — only an unanswered question.

**Fan-out sub-queries** (PAA + my own), each an H2 or FAQ: what it means in English ·
where „też" stands · „ja też" vs „za tobą też" · „też" vs „także" vs „również" ·
the negative reply · whether „tęsknię za tobą też" works · whether „Tobą" is
capitalised · whether bare „Też." is enough.

**Angle:** the only post that shows, from PWN's own two rulings plus NKJP and Tatoeba
counts, that Polish „też" attaches to whatever carries the sentence accent — so
„ja też za tobą tęsknię" says something English „I miss you too" cannot.

---

## Phase 3 — the linguistic result

### This row is the FIFTH test, and it is a new cell

| Language | Rule | Source |
| --- | --- | --- |
| Italian | *anche* selects what it **precedes** | Treccani *anche* 1.a |
| Russian | *тоже* always **follows** its associate (35/35) | Vlasova; Gramota |
| French | *aussi* takes **wide scope**; clitics cannot host it | De Cesare fn. 17 |
| Spanish | **no positional rule stated** by RAE at all | DLE/DPD |
| **Polish** | **accent-governed: a stated default AND its stated override** | **Poradnia PWN nr 12061** |

**Poradnia PWN nr 12061 „miejsce partykuły", 21.04.2011, Mirosław Bańko, dział
składnia** — the ruling that licenses it, verbatim:

> „Partykuła – taka jak *również* w powyższych zdaniach – odnosi się do składnika
> wyróżnionego akcentem zdaniowym. W tekście pisanym jest to przeważnie składnik
> **następujący po niej** i taką właśnie sytuację mamy w zdaniu 1."

and, for sentence 2, the override in the **same** answer:

> „trudno by akcent padał na słowo *znajdują się*, trzeba więc przyjąć, że jego
> miejsce jest albo na wyrażeniu *w naszym mieście*, albo na wyrażeniu
> **znaki drogowe**."

— and *znaki drogowe* stands **before** the particle. So Polish does not encode
direction. It encodes **accent**: rightward adjacency is the written default, and it
yields whenever the right-hand neighbour cannot plausibly bear the stress.

### The mechanism, and it is the exact complement of French

**Poradnia PWN nr 24530 „Mnie też nie dali", 18.11.2025, dział składnia:**

> „Zasada niestawiania na początku wypowiedzenia krótszej formy zaimka nie jest
> regułą szkolną, tylko regułą składniową polszczyzny […] Właściwą postacią tego
> zdania jest albo: *Mnie też nie dali*, albo *Też mi nie dali*. W pierwszym akcent
> logiczny pada na zaimek *mnie*, w drugim na partykułę *też*."

French *aussi* has nowhere to attach because both arguments of *tu me manques* are
clitics. Polish has the escape hatch French lacks: a **strong form for every clitic**,
a preposition (*za*) that forces one, and a nominative *ja* that has no clitic
counterpart at all. That is why *ja też za tobą tęsknię* is unambiguous.

### Corpus confirmation of the ruling (NKJP balanced, 240,192,461 words, PELCRA, 2026-09-27)

| Span | Order A | Order B | Utterance-initial |
| --- | --- | --- | --- |
| {mnie, też}, first 101 shown | *mnie też* **92** | *też mnie* 6 | *Mnie też* **29** · *Też mnie* **0** |
| {mi, też}, first 101 shown | *też mi* **64** | *mi też* 37 | *Też mi* **24** · *Mi też* **0** |

Strong form → pronoun first, can open the utterance. Clitic → particle moves to the
front and takes the accent itself. **Exactly the two variants PWN prescribes, and
nothing else.** 3 of the {mnie, też} spans were punctuation-contaminated and are
counted in the raw 101.

### The target sentence in NKJP

| Query | Header count | Exact order | Note |
| --- | --- | --- | --- |
| `ja też za tobą tęsknię` | 2 | **2** | one is a phone call: „Tęsknię za tobą, tato." — „Ja też za tobą tęsknię." |
| `za tobą też tęsknię` | 2 | **0** | **span artefact** — the same two paragraphs as the row above |
| `ja też tęsknię` | 4 | 4 | all with *ja* + *też* |
| `ja też nie` | 1,042 | — | not fully collected |
| `też` / `także` / `również` | 330,005 / 258,151 / 195,786 | — | paragraph counts |

**PELCRA span trap, confirming and sharpening the sibling's correction:** the header
count is not a count of the queried order. Reading it would have published a false
attestation of *za tobą też tęsknię*.

### Tatoeba (pol→eng, api_v0, every hit inspected, 2026-09-27)

Totals: **też 352 · również 126 · także 49.** All three fully collected against their
reported totals, so the 1,000-result ceiling was never approached.

Position of *też* within the 352: **0** immediately before a nominative pronoun ·
**148** immediately after a pronoun or proper name · **42** sentence-initial ·
**162** after something else (verb, adverb, noun) · **8** sentence-final after a
non-pronoun.

**The zero that belonged to the query.** `"też tęsknię"` returned **0**. Held to the
standard the sibling set when it refused to treat 0 do-forms as evidence: harvested
all 352 *też* sentences instead, and two **survivors** fell out that the collocation
query could not see —

- **nr 8539842** „Też za tobą tęsknimy." = *We miss you, too.*
- **nr 8512452** „Też będę za tobą tęsknić." = *I'm going to miss you, too.*

The zero was word order, not Polish.

**Negative reply:** 36 of the 352 contain *też nie*; **32 of those 36** are translated
with *either / neither / nor* — English swaps the word, Polish does not. The sequence
*nie też* occurs **0** times. Same shape as the Russian row's 29-of-30, reached
independently.

**Caveat on the three-way ratio:** Tatoeba contains deliberately parallel triples by
one contributor (nrs 5868696 / 5868709 / 5868712, „Ja również/także/też poszedłem"),
so the 352 : 126 : 49 split is softer than it looks. NKJP's near-parity
(330,005 : 258,151 : 195,786) is the corrective, and the two together are the register
finding: *też* dominates speech, the trio is level in writing.

### też / także / również — the verdict is REGISTER, not scope

- **pl.wiktionary** *również*: gloss „…używana do wyrażenia, że orzeczenie nie dotyczy
  tylko jednego elementu, ale i innych"; usage note: „Wyrazy »też« i »także« mają to
  samo znaczenie, co »również«. »Również«, w przeciwieństwie do »i«, wyraża pewien
  nacisk na dalszą część zdania." Same meaning; no scope split stated.
- **One hard distributional difference did emerge:** *też* never stands immediately
  before a nominative pronoun (0 / 352) while *także* does — Tatoeba nr **2700068**
  „Także ja was kocham." Small n, but a real asymmetry.
- **Etymology, Poradnia PWN nr 23688:** *też* < psł. \*teže < \*to + że; *także* <
  \*takъže; *również* < \*rowno + żь. All three native, all three the same reinforcing
  particle *-że*.

### Scholarly source, full text read

**Anna Jaremkiewicz-Kwiatkowska (Uniwersytet Rzeszowski), „Das Stellungsverhältnis von
Fokuspartikeln auch/też, także, również und ihrem Bezugsausdruck im Deutschen und im
Polnischen", *Lublin Studies in Modern Languages and Literature* 41(2), 2018, 32–47,
DOI 10.17951/lsmll.2017.41.2.32, gold OA, CC-BY.** PDF (129,992 bytes) pulled from
journals.umcs.pl and read with `/usr/local/bin/pdftotext -layout` — 589 lines, German
original, **full text, not an abstract.**

Conclusion, p. 44: the particles stand adjacent to their domain „nach dem Prinzip der
maximalen Nähe"; „die meist frequente und somit die grundlegende Stellung […] im
NKJP-Korpus ist die **unmittelbar vor dem Bezugsausdruck**"; the following position is
attested but „**weniger frequent**", usually final or at a distance. Her own corpus
examples **37** („Jeżeli Legionovia awansuje to i [JA]F też") and **38** („To [JA]F
też") are exactly our construction — so *ja też* sits in the **less frequent** class,
which is precisely why it is explicit. She calls the study a pilot and says the
hypotheses need further work; that limitation is carried into the post.

---

## Sources (6) — journals named for the human cap count

1. Poradnia Językowa PWN nr **12061** „miejsce partykuły", 21.04.2011, Bańko —
   `sjp.pwn.pl/poradnia/haslo/miejsce-partykuly;12061.html`
2. Poradnia Językowa PWN nr **24530** „Mnie też nie dali", 18.11.2025, składnia
3. Poradnia Językowa PWN nr **23688** „już, jeszcze, też, także, również" (etymology)
4. Jaremkiewicz-Kwiatkowska 2018 — journal **Lublin Studies in Modern Languages and
   Literature** (UMCS), 0 prior posts in this batch. **Full text read.**
5. **Narodowy Korpus Języka Polskiego**, `http://nkjp.pl/` — cited at this URL because
   `capcheck.mjs` reports `https://pelcra-nkjp.clarin-pl.eu/` **at URL cap 2**; PELCRA
   is named as the access route in the `stat` instead.
6. **Tatoeba** nr 8539842.

PWN returns **HTTP 403 from every route**, so all three rulings were read from Wayback
Machine snapshots of those exact URLs (`20210417140348`, `20251118083122`,
`20240807000428`) with the H1 headword confirmed before quoting. `web.archive.org` was
deliberately **kept out of the source URLs** — it sits at 2 of its 3 posts in this
batch, and the canonical PWN URL is what a reader should cite anyway.

Banned/spent and avoided: *Frontiers in Psychology*, *PLoS ONE*, *Scientific Reports*,
*BMC Psychology*, *Behavioral Sciences*, *PNAS*, `doi.org`, De Cesare
(`bop.unibe.ch/.../1777`), PMC8669216, PMC12842814, PMC13455274, PMC13507567.
`sjp.pwn.pl/doroszewski/tez;5505791.html` returned **403** and was not cited.

---

## Instruments that failed, recorded so the next Polish row does not repeat them

- `serp-ddg.mjs` — one call, correct argument order, `(no results parsed)`.
- `sjp.pwn.pl` — **403 on every fetch**, including the Doroszewski dictionary path.
- Wayback **CDX API** — intermittent `503` / `504`; the `takze` and `szyk` queries both
  failed while `tez`, `partykul` and `rowniez` returned. Re-run rather than conclude.
- `context.reverso.net` — **403** to a scripted UA, so the #3 result on my own head-term
  SERP could not be read on-page; nothing is claimed about its content beyond the
  snippet Google served me.
- `ohme.pl` and `kobiecywieczor.pl` fetched 200 but render their bodies in JS — 4.6 KB
  and 10.2 KB of extractable text, no grammatical claim to check.
- Europe PMC `findpapers` on "focus particle scope additive too" returned **hard
  sciences only**; the linguistics came from Crossref, which is the right instrument
  for this subject.

## Lines cut, and why

- **„Polish *też* is Russian-like"** — cut after measuring. It follows a pronoun 148/352
  times but **precedes** its domain in the most frequent NKJP pattern (LSMLL, p. 44).
  Calling it Russian-like would have been half the truth.
- **„»za tobą też tęsknię« is attested twice"** — cut. That was the PELCRA header count;
  the exact-order figure is 0.
- **„»też tęsknię« does not occur in Tatoeba"** — cut. Two survivors exist with the
  words separated.
- **„The Coben series contaminates this SERP"** — cut. Handed to me as expected, measured
  as absent on this keyword.
- **A first-party column in the comparison table** — cut and recorded as a failed
  checklist item rather than invented. The database records which template was opened,
  never what was typed.

## Split from the two Polish siblings

`tesknie-za-toba-po-angielsku` owns the **government** of the verb (za + instrumental,
Poradnia PWN nr 1561, NKJP 30 vs 8, the тосковать cognate). `jak-powiedziec-tesknie-inaczej`
owns the **synonyms** (*brakuje mi ciebie* has no grammatical subject, Poradnia PWN
nr 23173, the Norwid artefact). This post owns **where the particle attaches in the
reply** — a different ruling, different corpus queries, no shared number. Both are
cross-linked in the body, as is the French reply row for the clitic contrast.

Cross-link status against production Strapi, 2026-09-27: `tesknie-za-toba-po-angielsku`
**total=1, live**; `jak-powiedziec-tesknie-inaczej` and `tu-me-manques-aussi` **total=0**,
so those two 404 until this batch publishes. My own slug: **total=0, free.**
