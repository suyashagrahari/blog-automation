# Research brief — `birthday wishes in kannada`

- **Slug:** `birthday-wishes-in-kannada`
- **Batch:** `2026-08-27-birthday-30` (wave 3, rank 30)
- **Lane:** **O** — Kannada script, orthography and Dravidian script rendering
- **Category:** `milestone-birthdays`
- **Reserved source:** `r12a.github.io` — last in-batch slot, assigned to this post
- **Brief written:** 2026-08-27

---

## Phase 0 — data gate

Satisfied by `BRIEF-WAVE3.md` §1 and `BRIEF.md` §1 (read-only probes of `birthdaygfpages`,
2026-08-26 and 2026-08-27). No `npm run facts` re-run; the birthday-specific probe is
newer and more relevant than the site-wide `content/facts.md` lines.

Facts carried into the post (≥3, with 2 inside the first 150 words):

| Fact | Where used |
|---|---|
| Median lead time 0 days; 91 of 182 pages (50.0%) created on the birthday itself | first 150 words |
| Median personal message 96 characters (n=197); 106 of 197 under 100 characters | first 150 words |
| 50.5% of birthday pages (100 of 198) finished inside the hour; median build 0.9 h | body |
| 48.6% mobile (1,081 of 2,224 birthday views) against 51.0% site-wide | body |
| Quiz built on 195 of 198 pages, played on only 28 — 14.4% | downside section |

**Explicit gap in the first-party data:** the probe carries **no language field**. Nothing
in it is known to be a Kannada page. Every SubhSandesh number in this post is
language-blind, and that is recorded in the audit.

---

## Phase 1 — SERP (harvested 2026-08-27, real browser, `gl=in`, `hl=en`, `pws=0`)

`WebSearch` was **not** called — the session budget is exhausted at 200/200. The SERP
below is the pre-harvested block from `ASSIGNMENTS-WAVE3.json`. The five text results
were **not** fetched, so the "no section mirrors a competitor" item is asserted from
titles and result type rather than from rendered pages. That is recorded as a failure.

| # | Domain | What it actually is | Optimising for |
|---|---|---|---|
| 1 | igp.com | Gifting retailer serving a wishes query | Product discovery behind a wish list |
| 2 | kannadadeevige.in | School-notes site (`kavanagalu` = poems) | Kannada-medium exam and essay traffic |
| 3 | prestogifts.com | Gifting retailer, "Top 25 Heartfelt…" | Same as #1 |
| 4 | pinterest.com | Image board | Pin saves, not reading |
| 5 | dailyinspirationkannada.com | "100+ Birthday Wishes in Kannada" listicle | Volume of lines |
| 6 | tophindistatus.com | A **Hindi** status site serving "[500+] … in Kannada" | Bulk status traffic across languages |

Six results only — the thinnest SERP in the wave. AI Overview present. No People Also Ask.
Two of six are gifting shops, one is a school-notes site, one is Pinterest, and one is a
Hindi site cross-serving Kannada. **Nobody in the SERP is treating Kannada as a script.**

## Phase 2 — gap analysis

**Table stakes** (all of them do this, so the post must too): give real Kannada-script
lines, give a Roman transliteration to read aloud, give an English sense, and split by who
receives it.

**The gap.** Every ranking page treats "in Kannada" as a translation job — supply N lines
and stop. None of them treats the Kannada *script* as the constraint. Not one:

- counts the **ottakshara** (conjunct) load of the lines it publishes;
- says what happens when a phone or a font cannot build the conjunct;
- compares Kannada script against Roman transliteration on cost;
- says anything about how long the reader has left before the birthday.

**Stale/absent data.** No ranking page cites anything at all. There is no statistic to
supersede; the win is having any measurement.

**Fan-out sub-queries** → became H2s: *what does a Kannada birthday wish cost to type* ·
*which Kannada wishes are short* · *Kannada script or English letters* · *why does Kannada
break on some phones* · *is Kannada harder than Hindi to read on a phone* · *when should I
not write in Kannada*.

**Angle (recorded as `batchMeta.angle`):** wins by being the only post that ranks its
Kannada birthday wishes by ottakshara load and prices each one against SubhSandesh's
measured 96-character median message and 0-day median lead time.

### Cannibalisation and sibling de-duplication

- No live Kannada birthday post. Slug checked against Strapi: `total: 0`, free.
- **`2026-08-25-rakhi-2027/blogs/raksha-bandhan-wishes-in-kannada.json`** — spine was
  Kannada **kinship terms** (ಅಣ್ಣ / ತಮ್ಮ / ಅಕ್ಕ / ತಂಗಿ); sources were `jolr.ru`,
  `lrec-conf.org`, `unicode.org`, `glottolog.org`. **This post repeats neither the spine
  nor a single one of those four domains.**
- Siblings read in full before drafting: **`birthday-wishes-in-punjabi.json`** (spine:
  script *choice* — Gurmukhi / Shahmukhi / Roman; original measurement: Roman longest at
  +16% characters) and **`birthday-wishes-in-telugu.json`** (spine: font fallback, tofu
  boxes and SMS segment cost). Also checked `birthday-wishes-in-tamil.json` (spine:
  diglossia and register).
- This post's spine — **conjunct depth**, not script choice, not font fallback, not
  register — is distinct from all three, and the measurement is different in kind.

## Phase 3 — sources (5, all fetched and read in full text)

| # | Source | Lane | What it gave |
|---|---|---|---|
| 1 | `r12a.github.io/scripts/indic-overview/index.html` — Ishida, *An Introduction to Indic Scripts* | **O**, reserved | "In Kannada most combinations are formed by reducing non-initial consonant glyphs in a cluster to a simplified form, **joined beneath and/or to the right** of the initial consonant"; against "for 60% of Devanagari conjuncts the consonants … lose their characteristic vertical bar" (half-forms). Also: Kannada vowel signs attach to the **first** consonant of a cluster (ಕ್ರಿ *kri*); memory order is ಕ + ರ + ಿ; anusvara ಂ is homorganic-nasal, pronounced *m* elsewhere. **Living document — states "Updated 20 October, 2022". Carried as `dateModified`, no `datePublished`.** |
| 2 | `dsal.uchicago.edu/dictionaries/kittel/` — Kittel, *Kannada-English Dictionary*, rev. ed., University of Madras, 1968–1971, hosted by the University of Chicago's Digital Dictionaries of South Asia | **O** | Headwords verified one by one through the dictionary's own query interface: ಹುಟ್ಟು *huṭṭu* (p. 1743) "to arise, to come into existence, to be born"; ಹಬ್ಬ *habba* (p. 1707) "Tbh. of ಪರ್ವ. a festival, a feast, a holiday"; ಜನ್ಮ *janma* (p. 673) "birth, production, origin; existence, life, life-time"; ಶುಭ *śubha* (p. 1537) "auspicious, lucky, fortunate, good, happy"; ಆಶಯ *āśaya* (p. 176) "wish or will". Sources the native-versus-Sanskritic register distinction between *huttuhabba* and *janmadina*, and the literal sense of *śubhāśaya*. **It also corrected the draft:** the body had called *huttuhabba* purely native, where Kittel marks ಹಬ್ಬ a *tadbhava* of Sanskrit ಪರ್ವ. Freely readable in full; DSAL carries a University of Madras copyright notice, so only short headword glosses are quoted and no passage is reproduced. `publishedDate` 1968, the revised edition's own date. |
| 3 | `f1000research.com/articles/9-978/v1` — Usha et al., *Kannada akshara knowledge in primary school children* | **O** | Peer review: 2 approved. n=315 children, Grade I–VII, 67 akshara at four complexity levels (vowels, consonant+inherent vowel, consonant+diacritic, **consonant clusters**). Accuracy improves Grade I→V and **plateaus at Grade VI**; reaction time plateaus at Grade IV. Reports Nag (2007), n=374 Kannada-medium children: consonants with inherent vowels mastered by end of Grade I, **consonant clusters only partially mastered**, ~80% accuracy at second testing. |
| 4 | `link.springer.com/article/10.3758/s13428-017-0881-y` — Chang, Chen & Perfetti, *GraphCom* | **O** | Table 10, 21,550 graphs across 131 written languages. Kannada (Tunga): 50 graphs, **perimetric complexity 12.55**, disconnected components 1.42, connected points 2.40, simple features 3.84. Devanagari (Sanskrit 2003): 62 graphs, **PC 9.41**, DC 1.03. Hindi: 66 graphs, PC 9.25. Tamil 14.58, Telugu 11.41, Malayalam 14.13, Bengali 14.60. |
| 5 | `frontiersin.org/articles/10.3389/fpsyg.2014.00866/full` — Nag, *Alphabetism and the science of reading* | **O** | "In the Indic alphasyllabaries, the number of akshara that can be hypothetically constructed also run into thousands"; the number "in use and hence encountered in print still runs into hundreds"; "a corollary of an extensive symbol set is that symbol learning continues well into middle school and beyond." |

**Subject test:** all five are about the Kannada script or Indic script mechanics. None is
"about India". **Swap test:** all five are Kannada- or Indic-script-specific; #4 and #5
also cover other Indic scripts, and #4 in particular could in principle be reused by a
Devanagari or Tamil post — that is recorded honestly in the audit.

**Generic government statistics used: 0.** (The cap is 1.)

**Source-cap check, run from the repository root.** `r12a.github.io` was at 2 of 3 (Hindi
`/scripts/deva/hi`, Tamil `/scripts/taml/ta.html`) — this post takes the third and last slot
with a **different URL**. `link.springer.com` and `frontiersin.org` were at 1 of 3 when
chosen and sit at 2 of 3 after concurrent wave-3 siblings took a slot each
(`thank-you-for-birthday-wishes`, `birthday-captions-for-myself`). `f1000research.com` and
`dsal.uchicago.edu` at 1 of 3, this post only. No URL reused, no domain over cap.

**`arxiv.org` was dropped after review, and this is why it matters.** The post originally
cited Dixit's *Kannudi* preprint (arXiv 2301.00836) for a corpus conjunct rate of 18.2%.
Checklist item 65 passed on it — arxiv.org was at 1 of 3 in this batch — but **`arxiv.org`
is on the explicit banned-source list in `BRIEF.md` §2** and now sits in six posts
corpus-wide, the third-most concentrated domain in the corpus. The per-batch cap and the
banned list are separate standing instructions and the cap check does not surface the
latter. **Lesson for the next agent: grep `BRIEF.md` §2 for every candidate domain before
fetching it, not just the cap script.** The claim was not swapped for another citation — it
was replaced by an own measurement (below), and Kittel took the freed slot to do work the
preprint never did.
`corpora.uni-leipzig.de` left untouched — reserved for `birthday-wishes-for-uncle`.

**A real negative finding.** `r12a.github.io` has **no Kannada orthography-notes page.**
`/scripts/knda/kn.html`, `/scripts/knda/`, `/scripts/kannada/` and four other spellings all
return 404, and Ishida's own `scripts/linkdata/linkdb.js` records `knda: { … orthoChart:
false }` where Tamil and Devanagari carry full notes pages. The reserved lane exists but
the obvious page inside it does not, so the Indic overview — which does cover Kannada
specifically — was used instead.

### Search terms tried
OpenAlex `is_oa:true`, requests spaced 1.5–2 s, no 429 hit, Semantic Scholar not called:
`Kannada orthography akshara` (68 hits) · `Kannada script conjunct ottakshara` (3) ·
`alphasyllabary Kannada spelling` (48) · `Kannada transliteration romanization social media`
(215) · `Kannada character recognition compound characters ottakshara frequency` (3) ·
`Kannada script character set base consonant vowel modifier count` (59) · `Kannada corpus
character frequency distribution` (535) · `Nag Kannada spelling alphasyllabary` ·
`Kannada akshara spelling errors children conjunct consonant`.

DOAJ, after the arXiv source was dropped: `Kannada script orthography` (**1 hit**) ·
`Kannada akshara` (**2**) · `Kannada writing system` (**1**) · `ottakshara OR Kannada
conjunct consonant` (**1**). **That is a real finding: the open-access literature on the
Kannada script barely exists.** Every Kannada-script query in DOAJ returns one or two
records, and one of the two useful ones is the F1000Research paper already cited.

Rejected or unreachable: `direct.mit.edu` *Context-aware Transliteration of Romanized South
Asian Languages* — HTTP 403 on the full text, dropped rather than cited from an abstract ·
`ora.ox.ac.uk` (Nag's Kannada spelling work) — HTTP 403 on search · `etd.iisc.ac.in` and
`shodhganga.inflibnet.ac.in` — both timed out, the preferred institutional route that did
not open · `notofonts.github.io/kannada/` — reachable but a font-file listing with no
citable statistic, so it was measured directly instead of cited ·
Nag/Treiman/Snowling, *Learning to spell in an alphasyllabary: the case of Kannada*
(10.1093/wsr/wsq001) — the ideal source, no open copy found · `aclanthology.org`
*Aksharantar* and `unicode.org` chapter 12 — spent by the rakhi Kannada post ·
`pmc.ncbi.nlm.nih.gov`, `frontiersin.org` (second URL), `cambridge.org`, `link.springer.com`
(second URL) — corpus-wide concentration.

---

## The original measurement

Written and run in this session on the eight Kannada lines the post publishes. Method: an
akshara segmenter that takes a base character, absorbs following `Mn`/`Mc` marks, and on
hitting U+0CCD KANNADA SIGN VIRAMA absorbs the next consonant into the same cluster — so
"aksharas" counts what a reader sees, and "codepoints" counts what a keyboard sends.

**Result 1 — the ottakshara load of the eight lines.** 86 visible aksharas, 170 codepoints,
484 UTF-8 bytes, **11 ottaksharas**, i.e. **12.8 conjuncts per 100 aksharas**. Five of the
eight lines carry at least one; three carry none.

**Result 1b — the font measurement, added when the arXiv corpus figure was dropped.** I
parsed the `maxp` and `cmap` tables of the Kannada faces actually installed on this machine,
which are the faces an Apple device renders Kannada with. **Apple's Kannada MN carries 565
glyphs but maps only 88 Kannada codepoints (204 codepoints in total), so 361 of its 565
glyphs — 63.9% — are unreachable by any character.** They exist solely for the shaping
engine to assemble into ottaksharas, vowel-sign variants and ligatures. Kannada Sangam MN is
the same to within one glyph (564/88).

For honesty, this is *not* evidence that Kannada demands more of a font than Devanagari — it
demands less. Devanagari Sangam MN is 1,409 glyphs against 128 mapped Devanagari codepoints
(82.8% unencoded), ITF Devanagari 1,049 against 128, Devanagari MT 549 against 109. The
correct claim, and the one the post makes, is that **most of an Indic font is unencoded
conjunct machinery, and that machinery is exactly what a fallback loses** — not that Kannada
is the worst case.

**Result 2 — the fallback cost.** With no conjunct substitution (a font that lacks the
ligature, or a renderer that does not apply it), the same eight lines expand from **86
rendered slots to 97, +12.8%**, and each of the 11 extra slots surfaces a bare virama a
Kannada reader reads as a typo. Lines 1–3 are unaffected because they contain no virama.

**Result 3 — the finding I did not expect: Kannada's cost is depth, not length.** For the
same greeting, Kannada and Devanagari spend the *same* number of codepoints per visible
akshara — ಹುಟ್ಟುಹಬ್ಬದ ಶುಭಾಶಯಗಳು is 21 codepoints over 11 aksharas (1.91) and
जन्मदिन की शुभकामनाएँ is 21 codepoints over 11 aksharas (1.91). On the longer matched pair
it is 35/17 (2.06) against 34/17 (2.00). The difference is not character count. It is that
Kannada carries **3 conjuncts where Devanagari carries 2**, Kannada's conjuncts hang
*beneath* the line where Devanagari's half-forms stay *on* it (source 1), and each Kannada
graph is **33.4% more perimetrically complex** — 12.55 against 9.41 (source 4).

**Result 4 — Roman transliteration is the expensive option.** The identical eight lines cost
170 characters in Kannada script and **216 in Roman — +27.1%**. Against the measured
96-character median personal message that is **11.9 Kannada words against 9.3 Roman words**
(8.10 codepoints per Kannada word, 10.29 characters per Roman word). Kannada script is
2.24× the UTF-8 bytes (484 vs 216), which matters to a database column and to nothing the
sender can see. The Punjabi sibling found Roman longest at +16% on Gurmukhi; the Kannada
figure is +27.1%, and the reason differs — Kannada's per-akshara romanisation is longer.

**Limits.** n = 8 lines, all machine-composed, so the measurement describes strings whose
idiomatic correctness is unverified. The segmenter is my own implementation of Indic
grapheme clustering, not ICU or HarfBuzz, and the fallback figure models a renderer that
applies no conjunct substitution at all rather than any specific real font. The glyph counts
are `numGlyphs` from `maxp` and mapped codepoints from the best available `cmap` subtable;
they count glyphs the font contains, not glyphs any particular string uses, and macOS system
fonts are a sample of one platform.

---

## Phase 5 — targeting

- `categorySlug`: `milestone-birthdays`
- `templateUrls`: `/birthday-parents`, `/birthday-bestfriend`, `/templates` — all present
  in `TEMPLATE_LINKS` in `app/lib/prompt.ts`
- 3 internal links, all placed after the section that establishes why the reader would want
  the page. None in the opening.
- `structuredData`: one `@id`-matched `BlogPosting` enrichment block on
  `https://subhsandesh.in/blog/birthday-wishes-in-kannada#post` carrying `about`,
  `mentions` and `citation` (5 entries, mirroring `batchMeta.sources` one-to-one), plus one
  `ItemList` of 8 items mirroring the eight H3s in order. Every `sameAs` verified against
  the Wikipedia API with its Wikidata QID paired: Kannada Q33673, Kannada script Q839666,
  Karnataka Q1185, Abugida Q335806, Unicode Q8819, WhatsApp Q1049511.

## Phase 6 — the blocker

The native-verification blocker is recorded in `auditReport.failed` against exactly:

> The post contains at least one claim none of the top 5 pages make

as **structural**. In a language post the differentiating claim *is* the script content. All
eight Kannada lines, their transliterations, the register guidance and every number derived
from those strings are machine-composed and unverified. **No citation can close this** — a
source can attest that Kannada forms conjuncts beneath the line; no source can attest that
these particular sentences are idiomatic Kannada. It closes only on sign-off from a native
Kannada reader literate in the script. There is no confirmation that such a reader is
available for this batch.
