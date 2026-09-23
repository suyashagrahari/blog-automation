# Research brief — `how-to-propose-girl-in-marathi`

Batch `2026-09-23-propose-30b` (wave 3). Written 2026-09-23.
Keyword: **how to propose girl in marathi**. Category: `modern-romance`.
Volume band: **under 300 EST**.

---

## Phase 1 — SERP, and what I did and did not measure

**One WebSearch call was spent on the keyword** (budget: 5 total for this agent; 2 used
overall — the second went to locating an open-access copy of a paper). I did **not**
fetch any of the ranking pages, so **nothing on the published page describes what a
competitor's article contains, how long it is, or where it ranks.** Per the BRIEF's
"do not claim what you did not measure" rule, the post makes no claim about
incumbents at all.

What the single SERP call showed, recorded here only as a note and not used as a
claim in the body: results for this phrase mix Quora threads, a Marathi-learning
blog, a Marathi-language lifestyle publisher and shayari aggregators. Several of
those are **content farms and competitors** under `references/competitors.md` —
none is cited, linked or paraphrased.

Inherited SERP context: the only India-served SERPs ever measured for this
territory are the 11 in `content/keywords/2026-09-16-propose-100/serps.md`, measured
2026-09-16, and this keyword is not among them. Recorded in `structuralLimitations`.

---

## Phase 2 — Cannibalisation check against the two Marathi siblings

Both wave-2 siblings were read in full before a line was written.

| | `propose-day-quotes-in-marathi` (wave 2) | `propose-day-wishes-in-marathi` (wave 2) | **this post** |
|---|---|---|---|
| Intent | copy-text: lines you lift | addressed wishes you send | **advice: how to actually do it** |
| Organising axis | who you are asking | तू / तुम्ही register × privacy of the screen | **the sequence, and speaker gender** |
| Research lane | regional-language internet | Valentine reception in Maharashtra, Pune-district premarital research | **Marathi grammatical gender and verb agreement** |
| Sources | arxiv, policyreview.info, KPMG, Orientalia Suecana | Guttmacher, SAMAJ, Population Council, Orientalia Suecana, religionunplugged | **UD Marathi treebank, Deo & Sharma, Wiktionary** |
| Templates | /proposal, /love-gf, /date-invitation | /proposal, /love-gf | /proposal, /love-gf, /apology-dashboard |

**Zero source overlap. Zero line overlap** — three drafted lines were cut precisely
because they collided with the quotes page (see the ledger below).

The real difference: neither sibling answers **how to do it** — the order of moves,
what to say first, what to do in the silence, what to say if the answer is no.
Neither prints any line in both speaker-gender forms. That is this page's ground.

Both siblings are cross-linked by slug in the body rather than re-covered.

## Angle

Wins by being the only Propose Day page that prints every Marathi line in **both
speaker-gender forms**, verified against a manually annotated Marathi treebank, and
by publishing an original count over that treebank's release files showing that the
future tense is the one tense with **no gender marking at all** — 22 finite future
forms, 0 gender-marked, against 41 of 50 in the present imperfective.

---

## Phase 3 — Sources and how morphology was verified

`findpapers.mjs` was used for all research after the two WebSearch calls. Queries
run: `Marathi gender agreement verb morphology study`, `Marathi grammar reference
description`, `Indo-Aryan gender agreement ergative study`, `Marathi NLP
morphological analyser research`, `Marathi treebank corpus linguistics`, plus
`gender bias machine translation Indian languages gender agreement`, `Marathi
morphological analyser generator finite state`, `Marathi gender agreement
acquisition`.

Rejected on the cap: the strongest Europe PMC hit in-lane (an MEG study on
case and agreement in Hindi and Nepali split-ergative structures) sits on
`europepmc.org`, which counts with `pmc.ncbi.nlm.nih.gov` and was already at the
3-post cap. `dsal.uchicago.edu` — the Molesworth Marathi–English dictionary, the
source I actually wanted for lexical checks — reached the 3-post cap **during this
run**; the first capcheck of the session did not show it and the second did. So
lexical checks moved to Wiktionary. This is a downgrade and it is disclosed.

### Final sources (5)

1. `https://universaldependencies.org/treebanks/mr_ufal/mr_ufal-feat-Gender.html`
   — 1,747 tokens (45%) carry a Gender value; 360 VERB tokens = 50% of all verbs;
   100% of NOUN tokens; 96% of noun lemmas occur with only one gender value.
   No publication date on the page, so `datePublished` is omitted.
2. `https://universaldependencies.org/treebanks/mr_ufal/index.html`
   — provenance: manually annotated by Vinit Ravishankar, genre fiction + wiki, in
   UD since v2.1, CC BY-SA 4.0. No publication date; omitted.
3. `https://github.com/UniversalDependencies/UD_Marathi-UFAL`
   — the CoNLL-U release files. **My own count over all three splits**: 466
   sentences, 4,176 tokens; 22 finite `Tense=Fut` tokens, **0** with a `Gender`
   feature; 50 finite `Tense=Pres|Aspect=Imp` tokens, 41 with `Gender`. No
   publication date; omitted.
4. `http://people.umass.edu/bhatt/papers/others/deo-sharma.pdf` — Ashwini Deo and
   Devyani Sharma, *Typological Variation in the Ergative Morphology of Indo-Aryan
   Languages*, manuscript dated August 2002, later published in *Linguistic
   Typology* 10 (2006). Read as extracted text. Finding used: Marathi (with
   Punjabi) marks **only third-person subjects** ergative, where Hindi and Nepali
   mark all persons; the verb agrees with the highest nominative argument.
   Peer-reviewed venue; this is the manuscript.
5. `https://en.wiktionary.org/wiki/करणे` — Marathi conjugation of करणे, plus the
   register glosses for तू ("least formality, grammatically singular") and तुम्ही
   ("mid-level formality, grammatically plural") taken from those entries.

Subject test: all five are about Marathi grammar. Swap test: none could sit in any
other post in this batch. Generic context statistics: **zero**. Wikipedia links in
the body: **zero**.

### Verification method — three tiers, applied to every published line

1. **Treebank attestation.** The form appears in UD_Marathi-UFAL with the features
   claimed. Directly attested: सांगतो (`Person=1|Gender=Masc|Aspect=Imp`), देतो,
   आणतो, येतो (all `Person=1|Gender=Masc`), म्हणते, देते, बघते, विचारते, येते
   (`Gender=Fem`), रडतोस (`Person=2|Gender=Masc`), समजलीस (`Person=2|Gender=Fem`),
   आलास, आलो, झालो, करते, करशील, मागशील, विचारीन, असेल, आहे, नको, प्रेम
   (`NOUN|Gender=Neut`), उत्तर, लग्न, गोष्ट, वेळ, आज, उद्या, तू, तुला, मी, मला,
   आपण (`Clusivity=In`), का, येऊ, या.
2. **Attested minimal pair.** Where only one member of a -तो/-ते pair is attested,
   the other is generated on a pattern attested elsewhere in the same corpus
   (म्हणतो/म्हणते, देतो/देते, येतो/येते). Applies to सांगते, विचारतो, करतो,
   थांबतो/थांबते, शकतो/शकते.
3. **Wiktionary Marathi entry with a gloss.** एकत्र "together", थांबणे "to wait",
   समजणे "to understand", शकणे "to be able to", खरे "true", ठीक "all right",
   विचारणे "to ask", आता "now", होणे "to become", मन, आयुष्य, नाते, नशीब, सोबत,
   बरोबर, आवडणे, वाटणे. मी's entry carries माझा / माझी / माझे / माझ्या / माझ्याशी.

**A line failing all three tiers was cut.** The only exception, declared: the
second-person possessives तुझा / तुझी / तुझं / तुझ्यावर are absent from both the
treebank and Wiktionary, and were confirmed only at a fourth tier — the declension
table in the English Wikipedia *Marathi grammar* article, which sources it to
Dhongde & Wali (2009). Wikipedia is **not** counted as a source and is not linked in
the body. Only one published line (#5) depends on this tier, and the page says so.

### Marathi-not-Hindi screen

A word-boundary blocklist was run over every Devanagari string in the finished body:
मैं, तुम, तुम्हें, तुमसे, हूँ, हूं, मुझे, प्यार, ज़िंदगी, जिंदगी, दिल, नहीं,
मेरा, मेरी, मेरे, तेरा, तेरी, तेरे, और, लेकिन, क्यों, बहुत, हमेशा, सिर्फ, बात,
वक्त, शादी, इंतजार, साथ, करता, करती, रहा, रही, हैं, कुछ, यार, खुश, अपना, ज़रूरी.
**Zero hits.** Marathi-only constructions were required instead and all appear:
आहे / आहेस, माझा / माझी / माझं, तुझ्यावर प्रेम आहे, आयुष्य, नशीब, लग्न, का (not
क्यों), नाही (not नहीं), खूप (not बहुत), आणि (not और), पण (not लेकिन).
Note: `तुम` matches as a substring inside the legitimate Marathi तुम्ही, which is
why the screen is run on word boundaries and not on raw substrings.

### Line ledger — drafted 21, published 8, cut 13

| # | Cut line / element | Reason |
|---|---|---|
| 1 | `मला तू आवडतेस` variant | आवडतेस (2sg fem) not in the treebank (only आवडते, `Gender=Neut|Person=3`) and no Wiktionary entry |
| 2 | second आवडतेस variant | same |
| 3 | `तू माझी होशील का?` | होशील unattested; also a near-collision with the wishes sibling |
| 4 | `आत्ता वेळ आहे का?` | आत्ता has no Marathi Wiktionary entry — replaced with आता, which does |
| 5 | `मी वाट बघतो / बघते` | वाट: the "waiting" sense could not be confirmed in a fetched source |
| 6 | `तुझ्या सोबत…` | सोबत is glossed as a noun ("companionship"); the postpositional use was unverified |
| 7 | second सोबत line | same |
| 8 | `आयुष्यभर` line | the -भर suffix unverified |
| 9 | `जे … ते` relative line | जे absent from the treebank, no Marathi Wiktionary entry |
| 10 | second जे line | same |
| 11 | `तुझ्या डोळ्यांत…` | डोळे unverified in either source |
| 12 | `मी तुझ्यावर प्रेम करतो` as a standalone quotable line | already published on the quotes sibling; kept only as a grammar contrast inside line 5 |
| 13 | `नातं हवं आहे` line | नातं (colloquial spelling) and the हवं आहे construction unverified |

Published lines 1–8 carry Devanagari, Roman transliteration, English gloss, **both
speaker-gender forms** and a तू / तुम्ही register mark. Lines 1, 3, 5 (the
`प्रेम आहे` variant) and 8 are gender-invariant, and the page says why in each case.

**The Marathi was not reviewed by a native speaker.** Recorded in
`structuralLimitations`.

---

## Phase 5 — links and targeting

- `/proposal` — mandatory, linked in the comparison table after the section that
  establishes why a marriage-ask page would be wanted.
- `/love-gf` — the honest alternative. In Indian usage "propose" almost always means
  the girlfriend ask, so the marry-me scrapbook is the wrong template for most of
  this traffic. Said in the body, not only here.
- `/apology-dashboard` — for asking again after a no or a fight.
- Both templates are **English-language**; the body says so.
- Two blog cross-links to the sibling slugs. Both were **unpublished in Strapi at
  time of writing** (checked 2026-09-23: 0 results each), so they resolve only once
  wave 2 publishes. Disclosed in `structuralLimitations`.

`categorySlug`: `modern-romance` — advice post in Valentine week, not a festival.

Slug checked free in Strapi on 2026-09-23 (0 results against 1,131 live articles).

## Honest read on the keyword

Under-300 EST. These SERPs are an annual February news cycle owned by publishers
with far more authority than this domain. A page at this volume is not a traffic
asset — it is a **correctness asset**: the page an answer engine can quote when
someone asks an assistant how to say this, and the page a reader lands on once and
does not have to double-check. Target 6–10, not 3.
