# Research brief — `propose day quotes in gujarati`

Batch `2026-09-24-propose-30c` (wave 4) · slug `propose-day-quotes-in-gujarati` ·
category `modern-romance` · demand: 3 prefixes, ordinal only.

---

## Phase 0 — facts gate

`content/facts.md`, regenerated 2026-09-24. Five lines used verbatim in
`batchMeta.factsUsed`; two sit inside the first 150 words of the body (5,148 pages
across 21 page types; 38.5% password-protecting before sharing). Three more carry
the comparison table (48.3% phone views; `/love-gf` 1,178 created at 22.9%;
`/love-gf` 16,998 views at 29.9%).

**No proposal-specific data exists.** The `proposalpages` probe is still refused by
this machine's production-read policy, so every figure is labelled platform-wide
across 21 page types, or sampled on the named template, in the body prose.
The pricing block is empty for a fourth batch: the post states no price, tier or
cost. One draft FAQ said transliteration "costs you nothing" — `verify-batch.mjs`
caught it as a cost claim and it was rewritten.

## Phase 1 — SERP: NOT MEASURED, and nothing in the post pretends otherwise

No SERP was fetched for this keyword. The only India-served SERPs in this project
were captured 2026-09-16 for a different 100-keyword run
(`content/keywords/2026-09-16-propose-100/serps.md`) and this phrase is not among
them. No competitor page was read, so the post contains **no** claim about what
competing pages cover, no "most pages still say 2025", and no comparison table
row describing a rival. Two checklist items fail on exactly this and say so.

The BRIEF's inherited read of this SERP class — an annual February news cycle held
by MensXP, Zee, Webdunia, Times Now, Amar Ujala and similar — is taken as
background, not as measurement, and drives only the position target (6–10, not 3).

## Phase 2 — gap and angle

The live corpus has **905+ English articles and zero in any Indian language**.
Waves 2–3 covered Hindi, Marathi, Bengali, Kannada, Telugu and Malayalam. Gujarati
is new, so there is no sibling to cannibalise inside SubhSandesh.

Differentiation from the siblings in this batch: `propose-day-quotes-in-punjabi`
and `propose-day-quotes-in-tamil` are different languages with different scripts,
different registers and — by the lane rule — entirely different research. This
post's lane is **Gujarati script and the language's diaspora**, and it touches none
of the Tamil-diglossia, Punjabi-Gurmukhi/Shahmukhi, Kannada-linguistics,
Telugu-diglossia, Malayalam-orthography, Marathi-gender, Hindi-politeness,
code-mixing, romanisation or bilingual-emotion lanes.

**Angle:** the only page that publishes its Gujarati verification ledger — ten
lines kept and five named lines cut, each against a stated instrument — next to
first-party platform data no competitor can print.

Fan-out sub-queries the H2s answer (derived from the keyword and the brief, **not**
from a measured PAA box — this is one of the recorded audit failures): when is
Propose Day 2027; how do I write it in Gujarati script; is it તું or તમે; how do I
tell Gujarati script from Hindi; what if the answer is no; does "propose" mean
marriage here.

## Phase 3 — sources

Search budget: **1 WebSearch call used of 4 allowed.** Everything else came from
`findpapers.mjs` (five lane queries: Gujarati script orthography, Gujarati diaspora
language maintenance, heritage language transmission Gujarati, Gujarati NLP corpus
resources, Indic script shirorekha comparison), the DOAJ API, the Crossref/DOI
resolver, the figshare API and direct fetches.

| # | Source | Why it passes the subject test | Read |
|---|---|---|---|
| 1 | Nara 2017, *Interspeech*, ISCA Archive | Acoustic study of **heritage vs native Gujarati speakers** | Full landing page incl. abstract |
| 2 | Roberts 1999, VUW doctoral thesis | **Gujarati** language maintenance and shift in a diaspora community | Repository record + abstract (the PDF is 95 MB) |
| 3 | Jobanputra, Mehta & Çöltekin 2024, MWE-UD @ LREC-COLING | The **Gujarati** UD treebank itself | ACL Anthology abstract + the treebank README and data |
| 4 | The Unicode Standard 16.0, ch. 12 §12.4 | The **Gujarati script**: no headline bar, block range, punctuation | Full chapter text |

All four are open to the reader. Two are peer-reviewed (1, 3). Zero generic
context statistics, zero Wikipedia body links, zero competitor citations.
`capcheck.mjs` was run when choosing and again immediately before saving: no banned
URL, no domain at cap.

Rejected: the Georgetown dissertation on Gujarati heritage-language proficiency
(Cloudflare challenge, unreadable); "Gujarati in Singapore" in *Heritage Language
Policies around the World* and the South African Gujarati literature chapter (both
paywalled); the IJMEMS Gujarati OCR paper (PDF text would not extract); the AiBi
Gujarati NLP survey (DOAJ-listed but an odd venue for the subject); the Springer
Gujarati NLP survey (bot-blocked, no green OA copy found).

## Verification instruments — what each one actually did

Exempt from the cross-wave URL ban under the BRIEF's "Exemption" clause, credited
in prose rather than spending `sources` slots.

1. **Doshimaneklal Govindlal, *Gujarati English Dictionary*, N. M. Tripathi,
   Bombay, 1884** — Internet Archive item `india.history.resource.110640`, OCR text
   grepped in the sandbox. The primary headword instrument. Confirmed પ્રેમ, પ્યાર,
   પ્રીત/પ્રીતિ, દિલ, જીવન, જીવ, સાથ, સાથી, હેત, ચાહ/ચાહના, જવાબ, નામ, ડર, દુનિયા,
   ખુશ, સત્ય (glossed સાચું), વિશ્વાસ, યાદ, લાગણી, પૂછવું, હસવું, પૂરતું, દિવસ,
   શબ્દ, મીઠાશ. **DSAL does not host a usable Gujarati–English dictionary**: its
   listed Gujarati title (Sastri, *Brhad Gujarati kosa*) is marked "License
   agreements for Web use need to be negotiated" and is not online — which is why
   this 1884 scan was used instead.
2. **R. L. Turner, *A Comparative Dictionary of the Indo-Aryan Languages*, at DSAL**
   — the etymological cross-check, searched by headword and full text. It produced
   three of the five cuts: entry 14152 gives Gujarati "heart" as *haiyũ*, not હૃદય;
   entry 11199 gives *vacaná* as *vεṇ*, not વચન; *snéha* surfaces as *neh*, not
   સ્નેહ. It also attests G. *pyār* 'love' (8975) and G. *hāth* 'hand' (hasta).
3. **UD_Gujarati-GujTB** — 187 sentences, 1,885 tokens. The register instrument.
   Attested તું (5 tokens), તમે (4), તારે, તારી, તને, તમને, તમારો, તમારી, and the
   agreement split છે vs છો, -ીશ vs -શો. Also settled ગમવું: the sentence
   **તેમને તે ગમવું જરૂરી છે** puts the experiencer in the dative, which is the
   structure of તું મને ગમે છે and rescued the word from Turner's 'to approve'.
4. **Tatoeba Gujarati export** — 168 sentences, CC BY 2.0 FR, pulled as TSV. Filled
   GujTB's gaps: GujTB has **zero** first-person present copula છું, Tatoeba has 13,
   including **હું તને પ્રેમ કરું છું**. It also supplied three clean minimal pairs
   (તારુ/તમારુ નામ; તુ રહે છે / તમે રહો છો; જા / જાઓ).

## Gujarati ledger

**Drafted 15 · published 10 · cut 5.**

| Cut line | Instrument | Reason |
|---|---|---|
| તું મારી જિંદગી છે | 1884 dict, GujTB, Tatoeba | જિંદગી: no headword, zero tokens in either corpus |
| તારી આંખોમાં મારી દુનિયા છે | 1884 dict | આંખ's gloss line is OCR-damaged; oblique plural unverifiable |
| હું તને વચન આપું છું | CDIAL 11199 + 1884 dict + GujTB | reflex is *vεṇ*; વચન glossed 'speech'; only treebank use is political newswire |
| મારું હૃદય તારું છે | CDIAL 14152 + 1884 dict | inherited form is *haiyũ*; હૃદય is not a headword. Replaced by દિલ |
| તારા માટે મારા મનમાં સ્નેહ છે | CDIAL + 1884 dict | reflex is *neh*, not સ્નેહ; મન's gloss line damaged |

Every published line was assembled only from forms one of the four instruments
attests, and each is labelled with its register. **No native Gujarati speaker
reviewed the result** — recorded in `structuralLimitations`, stated in the body and
answered in an FAQ.

## Phase 5 — links and targeting

- `categorySlug` `modern-romance`, confirmed against the live Strapi category list.
- `templateUrls`: `/proposal` (mandatory) and `/love-gf` (the genuine alternative —
  in Indian usage "propose" usually means asking someone to be your girlfriend or
  boyfriend). Four internal link instances, all relative, all in `TEMPLATE_LINKS`.
- The body says plainly that both templates are **English-language**: Gujarati you
  type will display, the buttons and headings will not translate.
- Six outbound links, all fetched and verified in this session.
- Slug checked free in Strapi (`total: 0`).

## Phase 6 — audit

46 passed, 4 failed, disjoint, summing to 50, strings byte-verbatim (extracted
programmatically from `publish-checklist.md`). The four failures are the unmeasured
SERP (two items), the quotes H2 not compressing to 2–3 sentences, and the stop word
"in" in the assigned slug. Eleven further notes live in
`batchMeta.structuralLimitations`, not in `failed`.

Target position **6–10, not 3**.
