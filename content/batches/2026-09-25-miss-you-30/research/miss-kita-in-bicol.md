# Research brief — `miss kita in bicol`

Batch `2026-09-25-miss-you-30`, wave 2, row 14. Slug `miss-kita-in-bicol`.
Category `miss-you-across-miles`. Templates `/missyou-gf` (mandatory), `/catch`, `/templates`.
All fetches 2026-09-25 unless stated. Zero WebSearch calls spent.

---

## Phase 0 — first-party gate

Source: `content/batches/2026-09-25-miss-you-30/facts-snapshot.md` (pinned), **not** `content/facts.md`.
Seven lines used, copied byte-verbatim into `batchMeta.factsUsed`. The opening pair is
deliberately the two least-used lines in the batch — `88.8% published and shared` and
`median first-save-to-last-edit 2.6 hours` appear in only 6 of the 32 sibling files each,
against 32/32 for the 214-pages line.

Mandatory caveats, all in body prose and not only here:

- n = 214 over two months (template live 2026-07-28) — no seasonal reading.
- The city field is a **picker with defaults**; 47 city pairs describes the options offered.
- `viewCount` is page views, not unique visitors — which is why no engagement figure appears.
- **No first-party figure is Bikol-specific.** The database records which TEMPLATE was
  opened, never who received it or in what language. Stated in the third paragraph.

`## Pricing` in facts.md is empty, so no price, no "free", no cost claim anywhere.

---

## Phase 1 — SERP, measured not assumed

Live run: `node scripts/serp-ddg.mjs "miss kita in bicol" --region in-en --n 12`, ddg-html,
`kl=in-en`, 2026-09-25. The live SERP differs from `SERPS-WAVE2.md`: #1/#2 are swapped,
brainly.ph has dropped out, and glosbe and two Facebook group posts have appeared.

| # | URL | Live `<title>` | Reachable? |
|---|---|---|---|
| 1 | howtosayguide.com/how-to-say-i-miss-you-in-bicol/ | How to Say "I Miss You" in Bicol: A Comprehensive Guide | **No** — Cloudflare |
| 2 | howtosayguide.com/how-to-say-i-miss-you-in-bicolano/ | How to Say "I Miss You" in Bicolano: A Comprehensive Guide | **No** — Cloudflare |
| 3 | answers.com/linguistics/What_is_miss_na_kita_in_bicol | What is miss na kita in bicol? - Answers | Yes |
| 4 | facebook.com/groups/417721452379437/… | Bikol Languages \| Ano po sa bicol ang "miss na kita…" | Excluded (social) |
| 5 | kitamasarite.blogspot.com/2021/02/miss-na-kita-in-bicol.html | Miss Na Kita In Bicol - kita masarite | Yes |
| 6 | facebook.com/…/730080213267349/ | TAGA BICOL AKO — 30 Bikol words… | Excluded (social) |
| 7 | mymemory.translated.net/en/Tagalog/English/miss-na-kita-in-bicol | Miss na kita in bicol in English with contextual examples | Yes (via API) |
| 8 | translatormax.com/translator/tagalog-bicol-translator | Translator Max | Yes |
| 9 | mymemory.translated.net/…/bicol-miss-na-miss-na-kita | Bicol miss na miss na kita in English with examples | Yes (via API) |
| 10 | glosbe.com/tl/bik/Mahal%20kita | Mahal kita in Bikol - Tagalog-Bikol Dictionary \| Glosbe | Yes |

### The numbers the brief asked for

- **10 results, 6 distinct domains.** howtosayguide ×2, mymemory ×2, facebook ×2.
- **0 of 10 name a Bikol variety.** Not one says Central Bikol, Rinconada, Albay, bcl, or
  Naga/Legazpi. The closest is the blogspot page's scraped fragment "This language is based
  from Canaman Camarines Sur", which is not a claim about the query.
- **1 of 10 is a dictionary** (glosbe #10) and it is empty on the question: English→Bikol
  returns "Currently, we have no translations for I miss you in the dictionary."
- **0 subhsandesh.in.** No cannibalisation risk from the live site on this SERP.
- **Format:** 2 how-to guides (same domain), 1 Q&A, 1 scrape farm, 2 MT memory dumps, 1 MT
  tool, 1 dictionary, 2 social. Nothing editorial with a named source.
- **Disagreement:** the only two results that state a Bikol form disagree with each other
  *and* with Wiktionary on the spelling of the pronoun — answers.com and glosbe both write
  **ta ka** (two words), Wiktionary lemmatises **taka** (one word).

Cloudflare blocked #1 and #2 on three routes: direct fetch (connect timeout),
`r.jina.ai` (403 managed challenge), `api.allorigins.win` (500) and `api.codetabs.com`
(522). Recorded as a structural limitation; the measurements above count those two by
title and URL only.

### Two checkable errors in ranking results

1. **MyMemory (#7 and #9) — reproducible.**
   `https://api.mymemory.translated.net/get?q=miss%20na%20kita%20in%20bicol&langpair=tl|en`
   returns `{"translatedText":"i miss you in Chicago.","match":0.85}`, the top match
   `created-by: MT!`, quality 70. The engine treats *bicol* as a place name and normalises
   it to Chicago. The same API rejects the language outright:
   `langpair=en|bik` → `'BIK' IS AN INVALID TARGET LANGUAGE`, and `bcl` is refused too.
   Two of the ten ranking results are served by a system that does not support Bikol.
2. **answers.com (#3).** Its answer to the exact query is the string **"atik ssim n"** —
   the query reversed, not a translation. On the same page it glosses *mahal kita* as
   "namomotan ta ka" or "namomotan ko **ikaw**"; *ikaw* is the Tagalog absolute, where
   Central Bikol has **ika** — which is exactly the form Wiktionary's *taka* entry says the
   portmanteau replaces.

---

## Phase 2 — gap and angle

**Table stakes:** give a form for "I miss you"; explain *kita*; mention the English loan.

**The gap:** nobody says *which Bikol*. Every result treats "Bicol" as one language, which
is why they contradict each other — and none explains *ta ka*, the single most interesting
thing in the phrase.

**Angle:** *Wins by being the only post that answers this keyword variety-by-variety — ISO
639-3 registers `bik` as a macrolanguage with eight members, so Central Bikol's `hidaw taka
na` is not Rinconada's uncontracted `payaba ko ika` — and the only one that takes apart
`taka` as a portmanteau replacing `ko ika` rather than the two grid cells `ta` + `ka`.*

**Fan-out sub-queries → H2s:** is "miss kita" correct Bikol? · which Bikol? · what does
hidaw taka na mean piece by piece? · what about namimiss taka? · what does the old
dictionary say? · what do the search results say? · what goes around the line? · when is a
Bikol line wrong?

**De-confliction with the Philippine set.** The Ilocano row owns "kita is not a fused
pronoun in Ilocano, and no cell produces it". This row owns the mirror finding: Bikol *does*
fuse, into `taka`, and the fusion is variety-specific. The Bisaya row owns "miss kita is
Tagalog grammar" for Cebuano; the Waray row owns the 1895 Sánchez de la Rosa / 1885
Encarnación era-matched dictionary method, which this row reuses with Lisboa 1865. The
Tagalog row owns the borrowability thesis, which is stated here in two sentences and
cross-linked, not re-argued.

---

## Phase 3 — instruments, each resolved before use

BRIEF.md §3 has now been wrong twice about DSAL (Monier-Williams, and Clough → Carter), so
every reference named in the prompt was checked before anything was built on it.

| Instrument | Resolves? | Used for |
|---|---|---|
| `en.wiktionary.org` API | Yes | Lemmas, glosses, pronoun grid, phrasebook, lemma counts |
| `iso639-3.sil.org` | Yes | Macrolanguage `bik`, 8 members, `bhk` deprecation |
| `archive.org` (Lisboa 1865) | Yes, OCR text layer | HIDAO headword |
| `tatoeba.org` API | Yes | 15 Central Bikol sentences, read in full |
| `glosbe.com` | Yes | Empty English→Bikol entry for "I miss you" |
| `api.crossref.org` | Yes | Lobel 2004 and Lorenzana 2020 abstracts |
| **`webonary.org`** (SIL) | **NO — 403** | Nothing. Cloudflare "you have been blocked" on `?s=bikol` and `?s=bicol` |
| `dsal.uchicago.edu` | n/a | Holds no Bikol dictionary; not used |
| `diksiyonaryo.ph` (KWF) | Yes | Not used — Filipino, no Bikol headwords, already the Tagalog row's instrument |
| `ethnologue.com` | Not needed | ISO register served the variety codes directly |
| `link.springer.com` | Blocked | Bot challenge on the LREv Rinconada corpus paper |

### Corrections to the task prompt's variety list

The prompt offered "bcl / bto / rbl / bhk etc. — check them, do not trust my list". Checked:

- `bik` **Bikol** is a **macrolanguage**, 639-2 and 639-3, Living.
- Eight active members: `bcl` Central Bikol, `bln` Southern Catanduanes Bikol, `bto`
  Rinconada Bikol, `cts` Northern Catanduanes Bikol, `fbl` West Albay Bikol, `lbl` Libon
  Bikol, `rbl` Miraya Bikol, `ubl` Buhi'non Bikol.
- **`bhk` Albay Bicolano is Deprecated**, effective 2010-01-15, change request 2009-078,
  type Split — the same request that added `ubl`, `lbl`, `rbl` and `fbl`. So "Albay Bikol"
  is not a code you can cite today.
- **`msb` Masbatenyo is NOT a member of the Bikol macrolanguage.** Its ISO record carries no
  "is a member of the macrolanguage Bikol" line, unlike all eight above. The prompt listed
  it as a Bikol variety; it is spoken in the Bicol Region but is not classed as Bikol.
- **"Pandan Bikol" appears nowhere** among the eight member names. The Catanduanes varieties
  are `cts` and `bln`.

### Every Bikol form used, with its variety and its instrument

| Form | Variety | Gloss as the instrument gives it | Instrument |
|---|---|---|---|
| `hidaw` (hídaw / hidáw) | Central Bikol (bcl) | "to miss someone; to feel the absence of an acquaintance" | Wiktionary, Central Bikol verb entry |
| `hidaw taka na` | Central Bikol (bcl) | "I miss you" | Wiktionary phrasebook entry (`{{phrasebook|bcl}}`) |
| `taka` (taká) | Central Bikol (bcl) | "Second-person form… combining the first- and second-person. Replacement for **ko ika**" | Wiktionary pronoun entry |
| `kita` (kitá) | Central Bikol (bcl) | "we; us (inclusive of the person spoken to)" — ex. *Luwas na kita* | Wiktionary pronoun entry |
| `ta` / `ka` | Central Bikol (bcl) | `ta` = short ergative, 1pl **inclusive**; `ka` = short absolute, 2sg | `Template:bcl-personal pronouns` grid |
| `padaba taka`, `padangat taka`, `namumutan taka`, `gusto taka`, `muya taka` | Central Bikol (bcl) | the productive X-*taka* frame; `namumutan taka` tagged literary/formal | Wiktionary lemmas |
| `pungaw` / `mapungaw` | Central Bikol (bcl) | "lonely, depressed, desolate, bleak, gloomy" / "to become lonely" | Wiktionary |
| `girumdom` / `lingaw` | Central Bikol (bcl) | "to remember; to reminisce" / "to forget" (mutual antonyms) | Wiktionary |
| `payabâ`, derived `payaba ko ika` | **Rinconada Bikol (bto)** | "beloved; sweetheart" — and the pronoun is spelled **ko ika**, uncontracted | Wiktionary |
| `HIDAO` | Old Bikol (Lisboa) | "lo que falta, ó se echa menos"; index: "Echar menos lo que falta, ó se muere" | Lisboa 1865, OCR text layer |
| `namimiss taka` / `na-miss taka` | Central Bikol (bcl), **spoken only** | **No entry exists** — `namimiss`, `nami-miss`, `miss taka`, `namimiss taka` all return "page does not exist" | Wiktionary API, checked 2026-09-25 |

### Lines considered and cut

- `mamundo` / `malumbay` — cut. `mamundo` is "sad, unhappy, sorrowful"; `malumbay` is
  "weary; listless; lethargic" and, of a voice, "soft; sweet". Neither is about missing a
  person, and `malumbay` would have been a false friend for anyone reading it as Tagalog.
- `pita` — cut immediately. It surfaced in a search for "lonely"; the Central Bikol entry is
  an anatomical childish term. This is the Odia-ରହ class of near-miss the brief warns about.
- `lawas` — cut. Matched "long for" only because the entry text contains the string.
- Masbatenyo and Rinconada lines for "miss" — **none exist to cut.** A full-text search of
  Wiktionary's Rinconada Bikol and Masbatenyo entries for "miss"/"lonely" returned nothing
  usable.

### Coverage measured (absence is evidence)

- **Wiktionary lemma counts, 2026-09-25:** Central Bikol 6,612 · Masbatenyo 380 ·
  Rinconada Bikol 59 — against Tagalog 33,406, Cebuano 15,515, Ilocano 1,581,
  Waray-Waray 720. Central Bikol verbs 1,447; Central Bikol pronouns 78.
  Note Wiktionary's L2 header is **"Central Bikol"**, not "Bikol Central" — the latter
  exists only as a stub category.
- **Wiktionary's "I miss you" phrasebook page:** 106 translation entries across **73
  distinct language codes**. Exactly **two are Philippine**: Central Bikol (`hidaw taka na`)
  and Kapampangan (`agaganaka daka` / `pagdulapan daka`). Tagalog, Cebuano, Ilocano, Waray,
  Hiligaynon, Pangasinan, Masbatenyo and Rinconada are **all absent**.
- **Tatoeba:** Central Bikol holds **15 sentences in total**. All 15 were read; none is
  about missing anyone (Paaram!, Salamat., Magayon ka., Ingat ka!, Dagos kamo!, Maboot ako.,
  Bikolano ako., Patawarun mo ako!, Marhay na hapon!, Marhay na banggi!, Marhay na aga.,
  An pangaran ko Gregory., An tubig ay buway., Dagos tabi sa Tatoeba!, Maugmang
  Panggarabusang Aldaw nin kababaehan!). Searches for `hidaw`, `miss` and `taka` in `bcl`
  return 0.

### Research sources (capped; instruments are not)

Route: Crossref → Unpaywall → OA landing page. No WebSearch. `findpapers.mjs` for discovery.

1. **Lobel, J. W. (2004).** "Old Bikol -um- vs. mag- and the Loss of a Morphological
   Paradigm." *Oceanic Linguistics* 43(2), 469–497. Project MUSE; Unpaywall reports **no OA
   location**. **Abstract only.** Directly on subject: draws its evidence from Lisboa's
   seventeenth-century *Vocabulario de la Lengua Bicol* and compares Old Bikol with
   Waray-Waray, Southern Tagalog and **Rinconada Bikol** — the peer-reviewed confirmation
   that the Bikol varieties diverge morphologically. Cited at
   `https://api.crossref.org/works/10.1353/ol.2005.0007` (the record carrying the abstract
   I read); `doi.org` is at the batch cap of 3 and is deliberately not used.
2. **Pandes, T. L. & Martinez, J. (2024).** "Mapping Morphological Patterns: A Framework for
   Rinconada Bikol Language Morphological Analysis and Stemming." ICCE 2024, 32nd
   International Conference on Computers in Education, Asia-Pacific Society for Computers in
   Education. **Open access**, landing page read (the PDF does not parse here). Rinconada
   Bikol is a "Low-resource language with limited linguistic data"; analyser reports 0.90
   precision, 1.00 recall, F1 0.95.
3. **Not cited, read anyway:** Lorenzana, A. (2020), "Phonological, Lexical, and
   Morphological Analysis of the Philippine East Miraya Bikol-Pilar Dialect", *Bicol
   University Research and Development Journal*. Abstract read from Crossref: the Pilar
   variety of East Miraya Bikol has a **three-vowel system**, and the paper reports mutual
   intelligibility with other East Miraya dialects. Excluded because
   `journal.bicol-u.edu.ph` serves its site homepage for every article path (checked
   `/article/view/3` and the search endpoint) and the only stable URL is a `doi.org` one,
   which is at the batch cap.
4. **Not cited, unreachable:** Oñate & Pandes (2024), "Exploratory Analysis of Rinconada
   Bikol Language-Nabua Text Corpus", *Language Resources and Evaluation* 59:1613–1629.
   Paywalled, no OA location, Springer bot-challenged, no Crossref abstract. Re-check
   trigger for the second recorded audit failure.
5. **Rejected on venue:** "Language and Thematic Values of Music in Bikol Partido, Camarines
   Sur" (IJISRT, 2026) — open access but a venue the brief's "check the venue before citing"
   rule argues against, and PDF-only.

Search terms that returned nothing usable: `portmanteau pronoun Philippine languages`,
`Philippine languages lexical borrowing English` (all hits were Korean/Japanese/Chinese/
Malay), `Taglish code-switching affection` (pedagogy and vlog studies only).

Cap check before saving: `capcheck.mjs` reports `doi.org` (4 posts) and `journals.plos.org`
(3) at cap — neither used here. `api.crossref.org` and `library.apsce.net` appear in no
other post. `en.wiktionary.org`, `iso639-3.sil.org`, `archive.org`, `tatoeba.org` and
`glosbe.com` are cap-exempt reference instruments.

---

## Phase 4–5 — draft, links, targeting

1,795 words excluding FAQs. 12 FAQs, in `article.faqs` and the FAQPage JSON-LD only; none
restates a body H2 (they cover pronunciation, the Bicolano/Bikol naming, one-word vs
two-word spelling, ta-ka read separately, miss na miss kita, Masbatenyo, homesick, why MT
fails, Albay/Sorsogon usage, register between padaba/namumutan, message length, passwords).

Internal links, 3, all from `TEMPLATE_LINKS`, all placed after the value is established:

- **`/missyou-gf`** — mandatory batch-wide, and named with its honest limit: its furniture is
  English (live `<title>`: "Miss You Page for Your Girlfriend — Send a Love Letter"), so a
  Bikol line sits in an English frame. There is no Bikol interface.
- **`/catch`** — the `oneOfLinks` alternative, with the reason: it drops a letter one line at
  a time and locks nothing, which suits a message still being edited 2.6 hours after the
  first save (live `<title>`: "Catch — Someone Wrote You Something. It's In Pieces.").
- **`/templates`** — the browse-everything fallback.

Plus two `/blog/` links, which the verifier excludes from the 2–4 count: the live hub
`i-miss-you-in-different-languages` (fetched, not restated — it carries one Philippine line,
Tagalog, and no Bikol) and the sibling `no-tagalog-word-for-miss`.

Six outbound links, all fetched, all in the Sources section. Zero competitor links: nothing
from the SERP is linked, including glosbe, which is a cap-exempt instrument but also result
#10 and therefore left unlinked on purpose.

`structuredData`: an `@id`-matched `BlogPosting` enrichment block on `<canonicalURL>#post`
carrying `citation` (one entry per `batchMeta.sources` entry, in order), `about` and
`mentions` — every `sameAs` checked against the Wikipedia API with its QID paired
(Central Bikol Q33284, Bikol languages Q35455, Rinconada Bikol Q12633026, Masbatenyo Q33948,
Bicol Region Q13662, Mark of Lisbon Q6770515 — note "Marcos de Lisboa" redirects there).
Plus an `ItemList` mirroring the four H3s in order. No renderer-built type without a
matching `@id`; no AggregateRating, Review or HowTo.

Slug check: `https://strapi.subhsandesh.in/api/articles?fields[0]=slug&filters[slug][$eq]=miss-kita-in-bicol`
returns `{"data":[],"meta":{"pagination":{"total":0}}}` — free.

---

## Phase 6 — audit

48 passed, 2 failed, disjoint, 50 total, strings byte-verbatim from
`references/publish-checklist.md`.

Both failures are structural and recorded with their re-check triggers: the top two SERP
results cannot be fetched from this environment (Cloudflare), so the no-mirroring check
rests on eight of ten results; and the subject-test source count sits at exactly 2 on the
research half, with the obvious third candidate (the Springer Rinconada corpus paper)
paywalled with no OA location.
