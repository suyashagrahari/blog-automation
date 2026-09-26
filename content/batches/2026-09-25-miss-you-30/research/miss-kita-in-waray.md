# Research brief — `miss kita in waray`

Batch `2026-09-25-miss-you-30` · slug `miss-kita-in-waray` · written 2026-09-25

---

## Phase 1 — SERP (one WebSearch, exact keyword)

One `WebSearch` on `miss kita in waray`, run 2026-09-25. What actually came back:

| # | Result | What it is | Word count / structure | Direct answer? | Data cited |
|---|---|---|---|---|---|
| 1–5 | `mymemory.translated.net` × 5 near-identical pages (`miss-na-kita-sa-in-waray`, `miss-na-kita-in-waray`, `ma-miss-kita-in-waray-language`, `miss-kita-to-waray`, `miss-na-kita-sa-waray`) | Crowd/MT translation-memory dumps, not articles | No headings, no prose; a table of user-submitted pairs | No — contradictory strings, no grammar, no language named | None |
| 6–9 | Facebook video + three YouTube uploads ("Mahal Miss na Miss Kita" covers "revived into Waray-Waray") | Song covers, not text | n/a | No | None |
| 10 | `en.wikipedia.org/wiki/Miss_Kita_Kung_Christmas` | Article about a 1981 **Tagalog** Christmas ballad | Encyclopedic | No — different subject entirely | n/a |

**There is no article on this SERP.** Not one result is a written explanation of the
phrase in Waray. Five of the ten are the same machine-translation-memory site under
five URL variants, four are song uploads, and the tenth is about a Tagalog song. No AI
Overview and no featured snippet were returned for the query.

Per `references/competitors.md` none of these is cited, linked or paraphrased. The
observation recorded here is only about *format and absence*, which is what Phase 2
needs.

**What this means for the angle.** The usual gap analysis (table stakes, stale data,
unanswered questions) does not apply, because there is no competing text to analyse.
The real competitor is the assumption — visible in the MT pairs, which silently return
Tagalog and Cebuano strings for a Waray query — that Waray is a spelling variant of
Cebuano. That assumption is testable, and it is wrong.

## Phase 2 — Gap and angle

**Fan-out sub-queries** an answer engine would decompose this into, each of which
became an H2 or an FAQ:

- Is "miss kita" Waray at all? What does `kita` mean in Waray?
- What *is* the Waray sentence for "I miss you"?
- Is Waray the same as Cebuano / Bisaya?
- Does Waray have its own word for missing someone, or does it borrow English?
- How is it pronounced / contracted in speech?
- What should go around the line when you send it?

**Angle.** Wins by being the only post that answers the keyword from the Waray record
itself — the 1895 Samar-and-Leyte dictionary, the 1885 Cebuano dictionary set beside
it, and every Waray sentence in the Tatoeba corpus counted — rather than from Cebuano
sources with the spelling changed.

## Phase 3 — What was actually measured and fetched

### Tatoeba, Waray (`war`) — counted 2026-09-25

Corpus size taken from `tatoeba.org/en/stats/sentences_by_language` (the `api_v0`
search endpoint caps its reported count at 1000 and cannot be used for this):

- **Waray `war`: 2,391 sentences, rank 117** of the languages listed.
- For scale on the same table: Cebuano `ceb` 1,877 · Ilocano `ilo` 2,472 ·
  Kapampangan `pam` 1,482 · Tagalog `tgl` 79,134 · Hiligaynon `hil` 44 ·
  Central Bikol `bcl` 15.

Searches run `from=war`:

| query | sentences |
|---|---|
| `hidlaw` | **0** |
| `hidlao` | **0** |
| `nahidlaw` / `nahihidlaw` | **0** |
| `iliw` / `ilíw` | **0** |
| `miss` | **0** |
| `mingaw` | **2** |
| `kita` | **37** |
| `higugma` | 0 · `hinigugma` 1 · `ginhigugma` 1 · `lipay` 1 |

**The two `mingaw` sentences are the find of this post.**

- `#11312979` — **Gin-mingaw ako ha imo.** Translations attached: tgl *Namis kita.*,
  ina *Tu me mancava.*, pol *Tęskniłe/am za tobą.* Licence CC BY 2.0 FR.
- `#11312977` — **Gin-mingaw ak ha im.** (the contracted speech form), same
  translation set.

So the corpus itself maps a Waray sentence onto the Tagalog *Namis kita* — and the
Waray sentence contains no `kita`.

**All 37 `kita` sentences were read.** Every one is first-person plural inclusive:
*Kita!* = "Tayo!"; *Madalagan kita.* = "We will run."; *Burubligay kita.* = "Let us
help one another."; *Kana kalangoy kita.* = "Let's go swimming."; *Puydi kita
mag-estorya?* = "Can we talk a second?"; *Makakailub kita ha búlig hiton Guinoo.* =
"We will survive with God's help!"; *Baga'n magka-edad la kita.* = "I'm roughly the
same age as you." Not one uses `kita` as an I→you agent-patient pair. **37 of 37.**

### Sánchez de la Rosa, *Diccionario Hispano-Bisaya … para las provincias de Samar y Leyte* (Manila: Chofre y Comp., 1895)

Franciscan, *cura párroco* of Tarangnan in Samar. This is a **Waray** dictionary, not
a Cebuano one. Full OCR text fetched from archive.org and searched. Entries, with
obvious OCR artefacts normalised (the scan prints `HiIDLAO`, `dusear`, `Desc-o`):

- **HIDLAO. v.** *Echar de menos al ausente, desear verle.* — s. *Deseo, ansia.*
  Worked example: **Nahihidlao aco san acon iroy** = *"Echo de menos á mi madre, deseo
  ver á mi madre."*
- **CAHIDLAO. s. (DE HIDLAO).** *Deseo, anhelo, ansia.*
- **ILIO. v.** *Echar de menos una cosa, tener sentimiento y pena por la falta de
  ella.* On the Spanish→Bisaya side: *"Echar de menos á una persona ó cosa.*
  **Pagilio.***"*
- **MINGAO. adj.** *Triste, lleno de tristeza; melancólico; desconsolado, que carece de
  consuelo. — Silencioso.* Example: *Mamingao an acon casing-casing, cay namatay aco
  san acon anac* = "My heart is sad, because my child has died."
- **CAMINGAO / CAMINGAUAN. s.** *Soledad, retiro* — and on the Spanish side it is the
  gloss chosen for *aislamiento* (isolation) and *holganza* (leisure, idleness).
- Second-person oblique in this dictionary is written **`sa imo`** (93 occurrences,
  e.g. *Dumdumon mo an polong co sa imo* = "Remember what I say to you"). The modern
  Tatoeba sentences write it **`ha imo`**.
- `kita` as a pronoun does **not** appear on the Bisaya side; the `quita` strings in
  the file are the root *kita* "see" (*pakita*, "to appear") and Spanish headwords.

### Encarnación, *Diccionario bisaya-español* (1885) — the Cebuano control

Juan Félix de la Encarnación, twice Provincial of the Augustinian Recollects. Fetched
from archive.org, same method. Set beside the Samar-Leyte volume:

- **HIDLAO.** *Desear afectuosamente ver al ausente. \* Deseo vehemente por cualquiera
  cosa.* Worked example: **Nahidlao acó canimo, ginahidlaóan ta icáo** = *"Deseaba con
  ansia, de veras, verte."*
- **MINGAO** appears only in *namíngao uyámot*, glossed *"muy seria, grave,
  lúgubre"* — of a piece of music. Not of a person.

The two dictionaries are era-matched and independently compiled, which makes the
comparison usable: **Cebuano *nahidlaw ako kanimo* vs Waray *nahihidlaw ako sa/ha
imo*.** Waray reduplicates the first syllable of the root in the imperfective
(na-**hi**-hidlaw); the Cebuano entry gives plain *nahidlaw*. Cebuano takes *kanimo*;
Waray takes *sa imo* / *ha imo*. Neither fuses "I" and "you" into one word.

### ISO 639-3 (SIL), fetched 2026-09-25

- `war` — **Waray (Philippines)**, Status Active, Code Sets 639-2 and 639-3, Scope
  **Individual**, Type **Living**.
- `ceb` — **Cebuano**, Status Active, Code Sets 639-2 and 639-3, Scope **Individual**,
  Type **Living**.

Two separate individual languages, each with its own 639-2 and 639-3 code. Not
dialects of one another.

### Amat, "Discovering Ugmad as a Belief Among the Waray of Eastern Visayas"

*International Journal of Asia Pacific Studies* 21(2), 2025, pp. 51–69. Peer-reviewed,
open access (Universiti Sains Malaysia Press). **Abstract read only** — the PDF served
by the DOI is an image-layer scan with no extractable text, and the journal's issue
listing page did not expose a direct article URL, so the DOI resolver is cited. The
abstract documents *ugmad* as a Waray belief about intense fear or trauma affecting a
child, with the Waray terms *punò*, *ginpupusód* and *suób*, and closes by recommending
"further research on culturally significant terms among ethnic groups, as well as the
collection of oral traditions to enrich regional and local literature."

### The reference-layer gap (measured, not asserted)

English Wiktionary `Category:Waray-Waray lemmas` holds **720 pages** (733 including
subcategory entries), and **no Waray-Waray section exists on `hidlaw`, `mingaw`,
`kahidlaw`, `kita` or `imo`** — each of those pages carries Cebuano, Tagalog,
Hiligaynon or Central Bikol sections and nothing for Waray. That is the measurable
reason the SERP keeps handing Waray queries Cebuano answers.

### What could not be fetched (recorded per BRIEF §3)

- **`webonary.org`** (SIL) — HTTP 403, Cloudflare challenge. No Waray lexicon reachable.
- **`ethnologue.com/language/war`** — HTTP 403, Cloudflare challenge. No speaker figure
  taken from it, so the post makes **no claim about how many people speak Waray**.
- **`library.oapen.org`** — HTTP 403, bot challenge. Llamzon's *A Subgrouping of Nine
  Philippine Languages* (1969) was not read, so no subgrouping claim is sourced to it.
- **`ijaps.usm.my`** issue listing — the Vol. 21 No. 2 page returned no article links or
  PDF hrefs in its served HTML.
- **Romuáldez, *A Bisayan grammar*** (1908) was fetched and does attest `kahidlaw` in
  Waray verse ("sa dako nga pagkahidlaw"), but the OCR of that scan is too corrupt to
  quote responsibly — it renders the same line as `sa dako j£i pag kahidlaw`. **Cut.**

### Lines cut, and why

1. **`Miss kita` presented as a Waray line** — cut. It is Tagalog grammar; the post
   says so instead.
2. **`Hidlaw kita`** — cut. Would mean "we long", not "I long for you".
3. **`Nahidlaw ako kanimo`** as Waray — cut. That is the *Cebuano* dictionary's
   sentence; using it for Waray is the exact error this post exists to correct.
4. **`Gimingaw ko nimo`** as a Waray alternative — cut. Cebuano.
5. **Romuáldez verse quotations** — cut, OCR unreliable (above).
6. **Any Waray speaker-population figure** — cut, Ethnologue unreachable (above).
7. **`Mingaw` glossed as "I miss you" from the 1895 dictionary** — cut. The 1895 entry
   is *triste / silencioso*; only the modern corpus sentence licenses the transitive
   reading, and the post keeps those two statements apart.
8. **`Ilíw` as a way to say "I miss you" to a person** — cut. The dictionary restricts
   `ILIO` to *una cosa*. It survives in the post only for missing a place or a thing.

Eight lines cut.

## Phase 5 — links, category, templates

- `categorySlug`: `miss-you-across-miles` (verified live in Strapi).
- `templateUrls`: `/missyou-gf` (mandatory for this batch) and **`/streak`**. `/streak`
  was chosen over the higher-used `/dedication` (×4), `/capsule` (×4) and
  `/hold-my-hand` (×4) because it is the one alternative whose mechanic matches the
  measured shape of this reader: only 28.0% of the 214 miss-you senders set a reunion
  date, so for roughly seven in ten there is no date to count down to, and a
  once-a-day shared tap fits an open-ended separation where a countdown has nothing to
  count.
- Internal link up to the live hub `/blog/i-miss-you-in-different-languages` per BRIEF
  §2. **Finding on our own page:** it carries exactly one Philippine entry — "Tagalog
  (Filipino): Miss na kita / Nami-miss kita (miss na kee-tah)" — and **no Waray,
  Cebuano/Bisaya, Ilocano or other Philippine line at all**, while labelling Tagalog
  and Filipino as one thing. The hub should gain a Waray row reading
  *Gin-mingaw ako ha imo*.

## Cap state, re-checked immediately before saving

`capcheck.mjs` was updated again during this run and its exempt list now includes
**archive.org** alongside `tatoeba.org`, `iso639-3.sil.org`, `diksiyonaryo.ph` and the
`europepmc`/`pmc` family. So both archive.org dictionaries here are uncapped reference
instruments — still fetched in full, and neither URL is used elsewhere in the batch.

The one capped domain this post touches is **`doi.org`**, which stood at 2 posts and
this takes to exactly 3 — at the cap, not over. It resolves to Universiti Sains
Malaysia Press / `ijaps.usm.my`, cited by no other post in the batch. A direct
publisher URL was preferred and sought; the journal's issue listing exposed none. If a
concurrent agent also lands on `doi.org`, the ugmad citation is the one to swap: it is
the least load-bearing of the six.

Six outbound URLs, six `batchMeta.sources`, six `citation` entries, mirrored one to one.

## Slug

`https://strapi.subhsandesh.in/api/articles?filters[slug][$eq]=miss-kita-in-waray`
returned `"total": 0` on 2026-09-25. Free.
