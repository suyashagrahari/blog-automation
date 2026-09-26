# Research brief — `o-que-significa-saudade`

- **Keyword:** `o que significa saudade`
- **Region:** `br-pt` · **bodyLanguage:** Portuguese (pt-BR) · **tier:** A-grammar (meaning lane)
- **Date of all measurements:** 2026-09-26
- **Verdict: PROCEED** (Gate 2 pass, Gate 4 pass)

---

## 1. SERP measurement — route, result, Gate 4

**Route.** `node scripts/serp-ddg.mjs "o que significa saudade" --region br-pt --n 10` was
attempted **once**, per BRIEF §3, and failed exactly as documented:
`ConnectTimeoutError: Connect Timeout Error (attempted address: html.duckduckgo.com:443,
timeout: 10000ms)`, `UND_ERR_CONNECT_TIMEOUT`. I did not retry, and I did not touch
`serp.mjs` (Brave, documented 429).

**Substitute instrument, named in the post:** Google served to Brazil in a real browser tab,
`https://www.google.com/search?q=o+que+significa+saudade&gl=br&hl=pt-BR&pws=0&num=20`,
read-only, 2026-09-26. This is the actual SERP the reader sees, so it is stronger evidence
than the DDG proxy, not weaker — but it is an instrument substitution and the post says so.

**Organic text results, in order (6 total):**

| # | Host | Page type | Strength |
|---|---|---|---|
| 1 | `dicio.com.br` | dictionary-scraper / definitions site | **weak** |
| 2 | `significados.com.br` (7Graus / Toda Matéria) | definitions content farm | **weak** |
| 3 | `reddit.com` r/Portuguese | UGC thread, 3 years old, 18 replies | **weak** |
| 4 | `pt.wikipedia.org` | encyclopedia | neutral |
| 5 | `cnbb.org.br` | Conferência Nacional dos Bispos do Brasil — devotional column quoting Rubem Alves, 2025-01-09 | off-topic for a definition query |
| 6 | `sbps.spanport.ucsb.edu` | PDF, Santa Barbara Portuguese Studies (Bertini), cited by 13 | academic |

Google pads the page with a People Also Ask box, a Vídeos block, an Imagens block, a Vídeos
curtos block and a related-searches strip.

**Gate 4: PASS — PROCEED.** Three of six are clearly weak and **zero** are strong Brazilian
editorial publishers. No UOL, no Globo, no Brasil Escola, no Priberam, no Michaelis, no VOLP,
no Aulete, no Ciberdúvidas ranks in the text results at all. This is a *weaker* SERP than the
grammar sibling's (which at least had brasilescola/UOL at the top), so the sibling's
measurement did **not** transfer and measuring my own was the right call.

**Demand signal for the angle, from the SERP itself:** the related-searches strip carries
**"Porque a palavra saudade só existe no português"**, and both video blocks are myth-busting
("WHY IS IT SO HARD TO TRANSLATE?", DW Brasil's "«Saudade» só existe no português? #shorts",
2026-08-22). The Imagens block even surfaces an Instagram post calling it "um mito". The
untranslatability question is what this SERP is *about* — and **not one ranking text result
answers it against a named lexicographic instrument.** That is the gap.

---

## 2. Gate 2 — the twin check against three siblings

**`saudade-ou-saudades-qual-o-certo`** (this batch, on disk, read in full). Owns the
**grammar/usage** lane: VOLP registers `saudade s.f.` and `saudades s.f.pl.` as two separate
headwords; Priberam senses 6–7 are plural-only; Google Books / Leipzig frequency measurement;
the pt-BR vs pt-PT question. **My split, one sentence: that post answers *which form to
write*, this post answers *what the word means and whether "intraduzível" is true*.** I
restate none of its evidence — no VOLP frequency argument, no corpus measurement, no
singular/plural ruling — and I cross-link it from the body.

**`saudade-em-ingles-como-se-diz`** (translation lane) did **not** exist in `blogs/` when this
was written, so no cross-link could be placed. RE-CHECK TRIGGER: add one from the
"«Intraduzível»" section when that file lands.

**`../2026-09-25-miss-you-30/blogs/i-miss-you-in-portuguese.json`** (English, written, read in
full). **FRAMING CORRECTION for the orchestrator:** the prompt said it carries "a ~150-word
section touching this". It actually carries **two** relevant H2s totalling ~450 words — "Is
*saudade* actually untranslatable?" (~250 w) and "Where *saudade* comes from, and why the
sailors did not invent it" (~200 w).

**I did not abort, and here is the reasoning.** (a) It is an **English page on a `us-en`
SERP** for `i miss you in portuguese`; mine is a **Portuguese page on a `br-pt` SERP** for
`o que significa saudade`. Those two SERPs share zero incumbents. A Brazilian typing this
query is never served that page. (b) **Zero source overlap.** That post's untranslatability
argument rests on Wiktionary, Bułat Silva's ANU chapter and Neto's Porto Saudade Scale — and
`capcheck.mjs --list` shows **both scholarly URLs are BANNED** (spent in waves 1–3), so they
are unavailable to me anyway. Mine rests on four Portuguese dictionaries read sense-by-sense,
the **Real Academia Galega**, the Romanian **DEX '09**, a 2026 *Encyclopedia* entry and
Lindquist 2021. **Not one source is shared.** (c) That post never opens the Galician
dictionary, never reaches Romanian *dor*, never reads Michaelis or Aulete, and does not
contain the checkable error in Dicio. The strongest single finding here — that the Galician
normative dictionary gives *saudade* **two exact synonyms in Galician** — appears nowhere in
it. This is not a translation and not a twin.

---

## 3. The central claim, tested

**BRIEF §4 lists "*saudade* is untranslatable" among the claims to TEST. Tested. The strong
version is FALSE; the weak version is true and trivial.**

### 3a. What the dictionaries actually say, sense by sense

All four fetched 2026-09-26. **None of the four contains the word "intraduzível".**

**Priberam, pt-BR entry** (`/pt-br/saudade` requested explicitly; a bare path redirects to
`/pt-pt/`, confirmed):
- 1. "Lembrança grata de pessoa ausente, de um momento passado, ou de alguma coisa de que alguém se vê privado."
- 2. "Pesar, mágoa que essa privação causa."
- **3, 4 and 5 are [Botânica]** — "Planta (*Scabiosa atropurpurea*) da família das dipsacáceas", "Nome de várias espécies de plantas", "Flor de uma dessas plantas". **CONFIRMED: the coordinator's warning is correct. Anyone citing "sense 3" as an emotional sense is citing a flower.**
- 6 and 7 are filed under `saudades — nome feminino plural` (the sibling's lane; not used here).
- Etymology, verbatim: "Origem: latim *solitas, -atis*, solidão."
- The entry carries a block headed **"Auxiliares de tradução — Traduzir «saudade» para: Espanhol / Francês / Inglês."** Read off the fetched entry itself.

**Michaelis** (Melhoramentos): 1 emotional; **2 Mús "Cantiga entoada por marinheiros em alto-mar"**; 3 Zool (the bird *assobiador*); 4 and 5 Bot. Etymology: "alt do lat *solitatem*".

**Caldas Aulete**: 1 "Sentimento evocatório, provocado pela lembrança de algo bom vivido ou pela ausência de pessoas queridas ou de coisas estimadas"; 2 "Bras. Mús. Cantiga entoada em alto-mar por marinheiros"; 3 Bot, *Scabiosa*. Etymology, verbatim: **"[F.: Do lat. *solitate* (m)]"**.

**Dicio** (the #1 ranking result, read as a SERP incumbent, not as an authority): emotional sense, [Música] sailors' song, two [Botânica] senses, one [Regionalismo: RJ] bird. Etymology: "deriva do latim «solitas, atis», que pode significar solidão, desamparo, recolhimento".

**Conclusion:** *saudade* is an ordinary **polysemous feminine noun** with an emotional
branch, a musical branch, a zoological branch and a botanical branch. That is what
lexicographers do with hundreds of words. It is not a lexical singularity.

### 3b. The scholarly literature is sceptical, exactly as predicted

**"*Saudade* as a Cultural Concept", *Encyclopedia* 6(3):71, 2026, doi:10.3390/encyclopedia6030071.**
Peer-reviewed, open access, DOAJ-indexed. Abstract, verbatim: **"While sometimes described as
untranslatable, its uniqueness reflects deep historical and cultural embedding rather than a
linguistic limitation."** That is the sceptical position in the publisher's own words.
**ABSTRACT ONLY** — mdpi.com is on the BRIEF's 403 list and was not fetched; the abstract was
read through the **DOAJ API** (`doaj.org/api/search/articles/...`), which returns the
publisher-deposited abstract. Recorded as abstract-only in the post's source note.

**Lindquist, Kristen A., "Language and Emotion: Introduction to the Special Issue",
*Affective Science* 2(2):91–98, 2021, doi:10.1007/s42761-021-00049-7, PMC8144866.**
Peer-reviewed and open access; **full text read** via the Europe PMC REST `fullTextXML`
endpoint. Verbatim: Jackson et al. (2019) "used a computational linguistics approach to
examine humans' understanding of 24 emotion concepts … across 2,474 languages spanning the
globe", using **colexification** as an index of semantic similarity, and observed
"significant cross-linguistic variability in the semantic structure of emotion across the 19
language families in our database"; "cross-linguistic similarity in emotion semantics was
predicted by geographic proximity". This converts untranslatability from a mystical claim
into a measured, bounded, *explainable* one.

**Closed-access and therefore NOT cited** (checked via Unpaywall, all `is_oa: false`, no OA
location): Lomas 2016 *J. Positive Psychology* 10.1080/17439760.2015.1127993 (216
'untranslatable' words); *Current Anthropology* 2023 10.1086/725080; Palgrave 2026
10.1007/978-3-032-19264-6_2 and `_3` (the latter directly on the **Galician** emotional
community); Farrell 2006 10.1075/slcs.81.16far. Crossref holds no abstract for any of them,
so there was nothing readable to cite. Recorded rather than bluffed.

### 3c. "Portuguese has a word no other language has" — FALSE, and the test is cheap

**Real Academia Galega, normative dictionary of Galician** (`academia.gal/dicionario`), the
body that "establece a norma da lingua galega no referente ao léxico", ~60,000 entries:

- **`saudade`** — "substantivo feminino. Literatura e Filosofía. Sentimento profundo no que o suxeito vive unha perda ou experimenta unha aguda nostalxia de algo xa vivido e que considera desexable." Example: "Pensando nela, sufrín as infinitas saudades dun namorado corazón na ausencia." **SINÓNIMOS: *señardade*, *soidade*. CONFRÓNTESE: *morriña*, *nostalxia*.**
- **`señardade`** — "substantivo feminino. Soidade." Example: "A ausencia da amada facíao vítima dunha fonda señardade."
- **`soidade`** — sense 3: "Literatura e Filosofía. Sentimento profundo no que o suxeito vive unha perda ou experimenta unha aguda nostalxia de algo xa vivido e que considera desexable." — **word for word the RAG's definition of *saudade***. SINÓNIMOS: *saudade*, *señardade*.
- **`morriña`** — "Sentimento e estado de ánimo melancólico e depresivo, en particular o causado pola nostalxia da terra."

**This is the decisive finding.** Galician is a separate language (ISO `glg`, Q9307) with its
own normative academy, and it registers *saudade* itself, plus **two synonyms its own academy
treats as exact equivalents of each other**, plus a fourth near-neighbour. So the word is not
unique to Portuguese, and inside Galician it does not even lack an exact equivalent. Note
that pt.wikipedia — ranking #4 on my SERP — already concedes half of this in its first
sentence ("da língua portuguesa **e da galega**") without drawing the conclusion.

**Romanian, DEX '09** (Dicționarul explicativ al limbii române, Academia Română, via
dexonline.ro): **`dor`**, sense 1 "Dorință puternică de a vedea sau de a revedea pe cineva sau
ceva drag, de a reveni la o îndeletnicire preferată; nostalgie"; sense 3 "Suferință pricinuită
de dragostea pentru cineva (care se află departe)". Etymology: "Lat. pop. *dolus* (< *dolere*
«a durea»)". A different etymon reaching nearly the same semantic place.

**CUT: Welsh *hiraeth*.** I wanted a third comparison and could not verify it against a named
authority. **Geiriadur Prifysgol Cymru** (`geiriadur.ac.uk`) returned HTTP 200 on three URL
forms but its search servlet returns the literal body `0 0 0` — zero results — for `hiraeth`
under `func=search` with and without `strict=false`. I will not print a Welsh gloss I could
not read out of the dictionary, so Welsh is absent from the post. RE-CHECK TRIGGER: query GPC
through its app API or a working search route and reopen the cross-language section.

### 3d. Etymology — VERIFIED, and the prompt's lead was right

The prompt's "Latin *solitate(m)* is the usual account — verify it" is **CONFIRMED**, and
**Aulete prints exactly that form**: "[F.: Do lat. *solitate* (m)]". The other three agree on
the same etymon in different citation conventions — Priberam "*solitas, -atis*" (nominative),
Michaelis "alt do lat *solitatem*" (accusative), Dicio "*solitas, atis*". **No dictionary of
the four mentions Arabic *sawdāʾ*, and none mentions the Discoveries.** pt.wikipedia gives the
Galician-Portuguese chain *solitatem* → *soidade* → archaic *soidade*/*soudade* → modern form
under the influence of *saúde*/*saudar*.

The sailors **are** in the dictionaries — as Michaelis sense 2 and Aulete sense 2, "cantiga
entoada em alto-mar por marinheiros", a *song*, not an origin story. That is a nice reversal
and it is in the post.

---

## 4. Checkable error in a ranking result — FOUND, in the #1

**`dicio.com.br/saudade` (position #1 on Google Brazil, read 2026-09-26).**

The page's "Sinônimos de Saudade" block reads: **"Saudade é sinônimo de: solidão, desamparo,
retiro, tijuca, assobiador, suspiro."**

Its own etymology block, on the same page, reads: "A palavra saudade deriva do latim
«solitas,atis», que pode significar **solidão, desamparo, recolhimento**."

**Dicio has copied the gloss of the Latin etymon into the synonym list of the modern
Portuguese word.** That is the etymological fallacy, printed on the #1 result, and it is
self-refuting from the same page. *Saudade* is not a synonym of *solidão*: one can feel
saudade in a crowded room, and be alone without feeling any. None of Priberam, Michaelis or
Aulete puts *solidão* inside the definition — Priberam places it only on the origin line, as
the meaning of the **Latin** word. (The other three items in Dicio's list — *tijuca*,
*assobiador*, *suspiro* — are the bird and the plant, so they are synonyms of senses the
searcher did not ask about.)

**Secondary, weaker:** `significados.com.br` (#2) writes "Saudade, segundo a lenda surgiu no
período dos descobrimentos e definia a solidão que os portugueses vindos para o Brasil tinham
da sua terra" — then continues in the indicative ("Eram atacados por uma melancolia…"). It
hedges with "segundo a lenda" and then narrates it as fact; the date fails against the
attested medieval Galician-Portuguese form. Flagged in the post as the weaker of the two,
with the hedge acknowledged.

---

## 5. First-party data and the mandatory disclosures

Source: `content/batches/2026-09-26-miss-you-global-30/facts-snapshot.md`, **not**
`content/facts.md`.

**Least-collided pair chosen for the first 150 words**, because the grammar sibling already
spent eight of the twelve miss-you lines and 54 siblings draw on the same block:
- **43.5% of miss-you senders password-protect the page before sharing it (93 of 214)** — untouched by the grammar sibling.
- **1,434 "hug" taps recorded by recipients across 138 of the 214 miss-you pages (64.5%), 512 on a single page** — untouched by the grammar sibling.
Third and fourth: the 214-page base line, and 13.6% voice notes.
**The differentiation is still thin and the audit says so.** Two unused lines out of twelve is
not a moat; it is the least-bad pick available.

**Five disclosures, all in Portuguese body prose and not only here:**
1. City, background music and "together since" are **pickers with defaults**; their fill rates are not sender choices. (Stated as the reason those fields appear nowhere in this post.)
2. `viewCount` is page views, not unique visitors.
3. n = 214 over two months (live since 2026-07-28) — no seasonal claim survives it.
4. The database records **which TEMPLATE was opened, never who received it**.
5. **Nothing in it is segmented by language or country. No figure here is Brazilian.**

---

## 6. Product disclosure

`/missyou-gf` is defined at `app/lib/prompt.ts:44` as **"'I miss you' page for a
girlfriend/partner"** — verified at source this session. Two mismatches, both disclosed in
Portuguese body prose: **the interface is in English**, and the template is
**recipient-specific** (girlfriend/partner), so it is the wrong page for a reader whose
saudade is for a parent, a grandparent, a friend or a country — which is most of the senses
the dictionaries record. The post says plainly that if the reader only wanted the meaning of
a word, they should take it and leave without building anything.

`/capsule` is the genuine alternative from `oneOfLinks`, with the reason: the dictionaries
define *saudade* around *time* ("um momento passado", "algo xa vivido"), not only distance.

---

## 7. Sources, caps, blocks

`capcheck.mjs` run immediately before writing: no banned URL used, no domain at cap, no URL at
cap. Every dictionary instrument used (`dicionario.priberam.org`, `michaelis.uol.com.br`,
`aulete.com.br`, `academia.org.br`) is on `verify.config.json`'s `capExemptDomains`.
`academia.gal` and `dexonline.ro` are **not** on that list — flagged to the orchestrator in
`structuralLimitations` as reference instruments of the same kind, not edited by me.

Journals named for hand-checking the cap: ***Encyclopedia*** (MDPI) and ***Affective
Science*** (Springer / Society for Affective Science). Neither appears in any sibling file in
this batch.

**Blocked / failed this session, recorded as measurements:**
- `scripts/serp-ddg.mjs` — `UND_ERR_CONNECT_TIMEOUT` on `html.duckduckgo.com:443`, one attempt, per BRIEF §3.
- `geiriadur.ac.uk` GPC search servlet — HTTP 200 with body `0 0 0` for `hiraeth`, three URL forms. Welsh cut.
- `mdpi.com` — not fetched (BRIEF 403 list); *Encyclopedia* abstract read through the DOAJ API instead.
- `dicionario.priberam.org/pt-br/saudade/ingles` — HTTP 200 but renders "Página não encontrada", so I did **not** read Priberam's English gloss and do **not** quote one. The post claims only what is visible on the entry itself: that the entry offers translation auxiliaries into Spanish, French and English.
- `ciberduvidas.iscte-iul.pt` — the `/pesquisa/<q>` path 404s; `/pesquisa?q=` returns the facet page only. No Ciberdúvidas ruling on *untranslatability* was located, so Ciberdúvidas is **not** cited here (the grammar sibling cites two of its rulings on the plural, which is its lane).
- **WebSearch calls used: 0.** Crossref, Europe PMC, DOAJ and Unpaywall covered everything.
