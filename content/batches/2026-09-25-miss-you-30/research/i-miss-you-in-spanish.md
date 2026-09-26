# Research brief — `i miss you in spanish`

Batch `2026-09-25-miss-you-30` · slug `i-miss-you-in-spanish` · written 2026-09-25
Band 5 row, 10,000+/mo EST, US market, English-language SERP.

---

## Phase 0 — first-party gate

Source: `content/batches/2026-09-25-miss-you-30/facts-snapshot.md` (NOT `content/facts.md`).
The miss-you segment gives far more than the three facts the gate requires. Seven lines
used, five of them numeric, two inside the first 150 words. Gate **passes**.

The three mandatory caveats travel into body prose, not just this brief:

1. City / background music / "together since" are **pickers with defaults** — the 47 city
   pairs come from a 15-city picker, so the pair list is a picker artefact as much as a
   sender choice. Stated in the body.
2. `viewCount` is page views, not unique visitors. Stated in the body.
3. n = 214 over two months (template live 2026-07-28). No seasonal claim. Stated in the body.

---

## Phase 1 — SERP analysis (measured, not asserted)

One `WebSearch` run for `i miss you in spanish`, US-served, 2026-09-25. Nine results
returned. I then probed three of them for structure only (headings, token count, schema
presence) — no prose was read into the draft and nothing is cited or linked.

**What the SERP actually is:** four of the nine results are off-intent entity pages —
`en.wikipedia.org/wiki/I_Miss_You_(2019_film)`, `en.wikipedia.org/wiki/Te_Extraño,_Te_Olvido,_Te_Amo`
(a 1993 telenovela / song entity), and two Facebook posts. Only four are genuine
content pages, and all four are language-learning properties. Nobody on page one is
writing for the person who wants to **send** the phrase.

| Page | Tokens (raw) | Heading shape | Schema | Table | What it optimises for |
|---|---|---|---|---|---|
| spanishdict.com `/guide/how-to-say-i-miss-you-in-spanish` | ~857 | H1 + 4 H2 (Singular vs. Plural · Responding · Other Things to Say · Terms of Endearment) | ld+json, no FAQPage | yes | dictionary-brand trust; extremely thin body |
| quillbot.com `/blog/spanish-language/i-miss-you-in-spanish/` | ~2,967 | H1 + H2 "I miss you in Spanish" with H3 ×3 (Te echo de menos · Te extraño · Me haces falta), then 4 variant H2s, then FAQ | ld+json **with FAQPage** | yes | the full three-phrase treatment; ~8 of its H2/H3s are product upsell (Paraphraser, AI Detector, AI Humanizer…) |
| discoverdiscomfort.com `/i-miss-you-in-spanish/` | ~2,413 | H1 + "At a Glance" + H3 ×5 (te extraño · te echo de menos · me haces falta · ojalá estuvieras aquí · ya quiero verte) + replies + nostalgia verb | ld+json, no FAQPage | yes | audio pronunciation; the warmest-written of the three |
| memrise.com (Mexican Spanish phrasebook) | — | app phrasebook entry, not an article | — | — | app install |

**Data cited by any of them: none.** No dictionary citation, no corpus, no dated source
on any of the three pages probed. Every gloss is asserted. That is the whole opening.

**AI Overview / featured snippet:** the search tool returns links plus its own summary
and does not expose Google's AI Overview, so I did **not** observe one and make no claim
about it either way.

---

## Phase 2 — gap analysis

**Table stakes** (all three content pages carry these; the post must too):
`te extraño`, `te echo de menos`, `me haces falta`; the LatAm/Spain split; intensifiers
("so much"); a reply; a note that all three can be platonic.

**The gap — four things none of them do:**

1. **Nobody cites a dictionary.** Not one of the four content pages links the Real
   Academia Española. The definitions are folk glosses. This post quotes the DLE and the
   DPD lemma by lemma.
2. **Nobody checks whether the phrases are attested.** `me haces falta` is on every list.
   It is **not attested in Tatoeba's Spanish corpus** — searching `"Me haces falta."`
   returns fifteen `hacer falta` sentences, every one of them third-person
   (`Me hace falta.` → "I miss it."; `Me hace falta dinero.` → "I'm in need of money.").
   Zero second-person hits.
3. **Nobody gets the etymology right, and nobody admits it is unsourced.** See below.
4. **Nobody has recipient-side data.** 1,434 hug taps across 138 pages is behaviour on
   the receiving end of a miss-you message. No language-learning site measures that
   because none of them owns a sending surface.

**Stale data:** not applicable — there is no data on any of the competing pages to
supersede. That is itself the finding.

**Fan-out sub-queries → H2/H3 map:**

- what does *te extraño* mean → H2 2 / H3 1
- difference between *te extraño* and *te echo de menos* → H2 1, H2 2, comparison table
- how do you say I miss you in Spain vs Mexico → H2 2, comparison table
- what does *me haces falta* literally mean → H2 2 / H3 3
- where does *echar de menos* come from → H2 3
- how long should the message be → H2 4
- when is Spanish the wrong choice → H2 5
- how to reply, plural "I miss you all", "I'll miss you", is it romantic or platonic,
  what about *saudade* → FAQs

**Angle (one sentence):** wins by being the only page on this query that grades all
three Spanish constructions against the RAE's own entries — including the finding that
the RAE labels neither phrase as regional and gives *echar de menos* no etymology at
all — and sets them beside 214 measured miss-you pages whose median letter is 88 words.

---

## Phase 3 — the *achar menos* etymology: verified, partly refuted

The task prompt said `echar de menos` is "widely traced to Portuguese *achar menos*".
Here is what fetching the actual lexicography showed.

**What the RAE says: nothing.**

- `https://dle.rae.es/echar` lemmatises the locution and defines it —
  *"echar de menos algo o a alguien. 1. loc. verb. Advertir o notar su falta.
  2. loc. verb. Tener sentimiento y pena por su falta."* — and gives the de-less variant
  its own lemma: *"echar menos algo o a alguien. 1. loc. verb. echar de menos."*
  **No etymology is offered for the locution.**
- `https://www.rae.es/dpd/echar` §4 treats it in full —
  *"echar (de) menos. Locución verbal transitiva que significa 'notar la falta [de
  alguien o algo]' … La variante echar menos, frecuente en otras épocas, está hoy en
  desuso"* — and again **offers no etymology**. It spends its normative energy on a
  different question entirely: `echar en falta` is *"igualmente correcta"*, while
  `⊗echar a faltar` is discouraged as a Catalan calque of *trobar a faltar*.

**Who does say it, and how well sourced they are:**

- `https://en.wiktionary.org/wiki/echar_de_menos` — *"Originally an archaic and dialectal
  Old Galician-Portuguese idiom, achar (de) menos ('to feel an absence', literally 'to
  find missing'), entering in Spanish as echar (de) menos (mistaking Old
  Galician-Portuguese achar ('to find') (Spanish hallar), with echar ('to throw'), both
  verbs pronounced similarly)."* **No reference is given for the etymology.**
- `https://es.wiktionary.org/wiki/echar_de_menos` — *"Del galaicoportugués achar de menos
  … Fue adoptada al español con el verbo 'echar' por su similitud fonética con achar
  ('hallar')."* Categorised under *ES:Palabras provenientes del galaicoportugués*.
  **Also unreferenced.**
- `https://en.wiktionary.org/wiki/achar` (Galician section) confirms the substrate:
  *achar*, Old Galician-Portuguese, 13th century, from Latin *afflāre*, cognate with
  Spanish *hallar*. The DLE's own `hallar` entry derives it "De fallar1", the same root.

**Verdict, and the three corrections it forces:**

1. **Not "Portuguese".** Every source that carries the claim says **Old
   Galician-Portuguese** / *galaicoportugués* — the medieval ancestor of both Galician
   and Portuguese, not modern Portuguese. The prompt's framing is loose.
2. **Not "documented in RAE lexicography".** The RAE, in both the DLE and the DPD, is
   silent on the origin. The claim rests on Wiktionary, which cites nothing for it, and —
   in the wider literature — on Corominas's *DCECH*, which is not available online and
   which I could not fetch and therefore do **not** cite. The post says exactly this.
3. **The "I throw you less" gloss is the *result* of the error, not the origin.** The
   original verb meant *find* (Sp. *hallar*); *echar* "throw" is the reanalysis. Any page
   that presents "literally I throw you less" as the phrase's etymology has the arrow
   backwards.

**Status printed in the post: plausible, widely repeated, and unconfirmed by the RAE.**
Not asserted as fact.

## Phase 3b — the regional split: also softer than the prompt claims

The prompt called the Spain/LatAm split "documented". What is documented is narrower:

- **The RAE labels neither phrase as regional.** `https://dle.rae.es/extrañar` gives
  sense 2 as *"Echar de menos a alguien o algo, sentir su falta"* with **no `Am.` mark**,
  in an entry that does use markers elsewhere (`p. us.`, `desus.`). So the DLE treats
  *extrañar* as general Spanish, not American Spanish.
- The regional labels come from Wiktionary's usage notes — `echar de menos` marked
  *"(idiomatic, Spain, otherwise formal)"*, `extrañar` marked *"(transitive, Latin
  America, otherwise formal)"* — and each entry carries a dated literary citation
  (Coelho, *El Zahir*, 2005; Bolaño, *Llamadas telefónicas*, 1997).
- **And the RAE's own illustrative quote cuts against the binary.** The DPD's example
  sentence for *echar de menos* is from a **Chilean** novel: *"Es usted buena persona,
  Fischer, lo echaré de menos"* (Collyer, *Pájaros*, cl 1995). The Academy's chosen
  witness for the "Spain phrase" is a Latin American writer.

So: a real frequency tendency, not a border. The post says that, and says it is a
tendency I did not measure — I found no country-by-country corpus frequency count for
*extrañar* vs *echar de menos* in the searches I ran (see limitations).

---

## Phase 3c — attested lines (Tatoeba, fetched 2026-09-25)

Every Spanish line printed in the post comes from this list. IDs are Tatoeba sentence ids.

| Line | ID | English pair on Tatoeba |
|---|---|---|
| Te extraño. | 436802 | "I miss you." |
| Te extraño mucho. | 1056427 | "I miss you very much." |
| ¡Cuánto te extraño! | 7189421 | "How I miss you." |
| Te extrañé. | 4484502 | "I missed you." |
| Te extrañaré mucho. | 767219 | "I'll miss you very much." |
| Te extrañamos. | 4788235 | "We miss you." |
| Mamá, te extraño. | 13378557 | "Mom, I miss you." |
| Te echo de menos. | 454574 | "I miss you." |
| ¡Te echo de menos! | 10459224 | "I miss you!" |
| Te echo mucho de menos. | 491227 | "I miss you very much." |
| Creo que yo también te extraño. | 1737188 | "I guess I miss you too." |

`Me haces falta.` is printed on the strength of the DLE `falta` entry only — the
lemmatised locution *"hacerle a una persona falta alguien o algo. 1. loc. verb. No
tenerlo cuando sería necesario o provechoso."* — and the post says in prose that it is
the one line here with no corpus attestation behind it.

**Lines cut, and why** (also recorded in `structuralLimitations`):

- **`Y yo a ti`** — the standard reply on two of the three competing pages. Tatoeba
  returns **0** results for it and it is not a DLE lemma. Cut; the attested
  `Creo que yo también te extraño.` is printed instead.
- **`Te añoro`** — `añorar` is listed by the DLE as a synonym under `extrañar`, but I
  did not fetch the `añorar` entry and ran no attestation check. Cut rather than guessed.
- **`añoranza` as a single-word "untranslatable"** — claimed by SubhSandesh's own live
  hub. Unverified here. Cut.
- **`Me haces mucha falta`** — no lemma, no attestation. Cut.
- **`Ojalá estuvieras aquí`, `Ya quiero verte`** — competitor lines, no dictionary or
  corpus check run. Cut.
- **`Te extraño, mamá`** — 0 Tatoeba hits in that word order; the attested order
  `Mamá, te extraño.` is printed instead.

---

## Phase 3d — sources chosen (6)

| # | URL | Why it earns the slot | Subject test | Peer-reviewed / OA |
|---|---|---|---|---|
| 1 | `https://dle.rae.es/extrañar` | sense 2 = "echar de menos… sentir su falta", and the absence of an `Am.` label | pass | no |
| 2 | `https://dle.rae.es/echar` | both senses of the locution; `echar menos` still lemmatised | pass | no |
| 3 | `https://dle.rae.es/falta` | "hacerle a una persona falta alguien o algo: No tenerlo cuando sería necesario o provechoso" | pass | no |
| 4 | `https://www.rae.es/dpd/echar` | normative treatment, the Chilean citation, and the absence of any etymology | pass | no |
| 5 | `https://en.wiktionary.org/wiki/echar_de_menos` | the Old Galician-Portuguese *achar menos* claim, and the fact it is unreferenced | pass (cap-exempt instrument) | no |
| 6 | `https://europepmc.org/article/PMC/PMC12504998` | *Spanish is not just one*, Data in Brief 63, 2025-09-18, CC BY — "Spanish, spoken by over 600 million people, exhibits significant lexical, morphological, and syntactic variation across regions" | pass | **yes, peer-reviewed, open access** |

Found via `findpapers.mjs` (Crossref + Europe PMC, no WebSearch spend). Queries run:
`Spanish dialectal variation lexical choice`, `emotion concept translation bilingual`,
`long distance relationship communication maintenance`.

Considered and not used: *Understanding Love in the L1 and the Additional Language*
(J. Intelligence 14(1):3, 2025-12-24, CC BY, PMC12842814) — a good paper on emotion
lexicons being richer in L1, but the sixth slot was better spent on the one that is
about Spanish regional variation specifically. *Grammatical and Lexical Dialectal
Variation in Spanish: the Case of deísmo* (Languages 8(4):288, 2023) — not retrievable
through Europe PMC and MDPI blocked the direct fetch, so it was never read and is not
cited.

Tatoeba is linked in the body as an attestation instrument (cap-exempt in this batch's
`verify.config.json`) but is deliberately **not** in `sources`, so the six registered
sources are the ones carrying propositional claims.

---

## Phase 5 — placement

- `categorySlug`: **`miss-you-across-miles`** — verified live in the Strapi categories
  endpoint on 2026-09-25 alongside `modern-romance`, `digital-gifts-romance` and eight
  others. It is the batch's own category and the exact cluster this post joins.
- `templateUrls`: `/missyou-gf` (mandatory for this batch, and the template the
  first-party data is measured on) and `/train-ticket`, the batch `oneOfLinks`
  alternative. Reason it suits this reader better in some cases: the miss-you pages
  name 47 distinct city pairs including cross-border ones like Mumbai–London and
  Berlin–London, and `/train-ticket` is built around a journey rather than a letter —
  for a reader whose missing is about the distance itself rather than the words.
- Slug check: `https://strapi.subhsandesh.in/api/articles?fields[0]=slug&filters[slug][$eq]=i-miss-you-in-spanish`
  returned `matches=0` on 2026-09-25. Free.

## Cannibalisation check

81 live articles carry `miss` in the slug. The closest live neighbours, from
`content/keywords/strapi-live-articles.json`: `i-miss-you-in-different-languages` (the
hub), `i-miss-you-in-marathi`, `i-miss-you-in-tamil-words`,
`how-to-say-i-miss-you-in-hindi`. **Zero live Spanish pages.** Language is one of the
three axes the BRIEF names as never-duplicates, so this is a new row, not a merge
candidate.

Against the hub specifically (fetched 2026-09-25, ~5,500 tokens): it gives Spanish two
lines in a 50-language list — "Spanish (Latin America): Te extraño", "Spanish (Spain):
Te echo de menos" — plus one FAQ repeating the same pair. It never mentions
*me haces falta*, never names a dictionary, never touches grammar or etymology. This
post is the depth under that row. Its table is not restated.
