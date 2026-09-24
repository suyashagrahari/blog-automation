# Research brief — `love proposal in telugu`

Batch `2026-09-24-propose-30c` · slug `love-proposal-in-telugu` · category `modern-romance`
Written 2026-09-24. Demand: 3 prefixes, ordinal only (`prefix_hits` is not printed anywhere).

---

## Phase 0 — first-party gate

`content/facts.md`, regenerated 2026-09-24. Seven lines are relevant; six are used, two
inside the first 150 words. Every figure is labelled **platform-wide across 21 page types**
or **sampled on the named template** in body prose, never attributed to proposal pages —
the `proposalpages` probe is still refused by this machine's production-read policy.

Used verbatim:

- 5,148 personalised pages created since 2026-03-12, across 21 page types — measured 2026-09-24
- 48.3% of shared pages are opened on a phone (27,499 of 56,886 views) — measured 2026-09-24
- #3 page type: "I love you" page (/love-gf) — 1,178 created, 22.9% of all pages — measured 2026-09-24
- Most-viewed template: love-gf — 16,998 views, 29.9% of all page views — measured 2026-09-24
- Most popular creation: apology dashboard (/apology-dashboard) — 1,375 pages, 26.7% of everything created — measured 2026-09-24
- Median gap between a page's first save and its last edit: 2.2 hours — sampled on apology dashboard (/apology-dashboard), n=1,375 — measured 2026-09-24

The pricing block is empty for a fourth batch, so the post states and implies no price,
no free tier and no paid tier.

---

## Phase 1 — SERP (inherited and thin; recorded as a limitation)

One US-served `WebSearch` on 2026-09-24 for `love proposal in telugu how to propose telugu
lines`. It returned a result list only: Pinterest boards, two Quora threads, a YouTube
playlist, a WeddingWire page served through Google Translate, a 2014 Blogspot quote page,
and two Wikipedia film articles (*Hyderabad Love Story*, *Nuvvala Nenila*).

**No incumbent page was fetched. No India-served SERP was measured.** None of this batch's
keywords appears in the only measured SERP set (`2026-09-16-propose-100/serps.md`,
11 India-served SERPs, 2026-09-16). The post therefore makes **no claim about what any
ranking page contains**, and checklist items 2 and 13 are recorded as failures rather than
asserted.

What the result list does show, without needing a fetch: the visible surface for this query
is image-board and forum material, and at least two of the ten results are Telugu **films**,
which is the single strongest signal that film diction is the temptation here. The post
refuses film lyrics outright.

---

## Phase 2 — angle and separation from the wave-3 sibling

Sibling read in full: `content/batches/2026-09-23-propose-30b/blogs/propose-day-quotes-in-telugu.json`.

| | Wave-3 sibling | This post |
|---|---|---|
| Occasion | Propose Day, Monday 8 Feb 2027 — a dated page | Evergreen; no date, no festival, no seasonal urgency |
| Intent | Copy-text: take a quote, leave | Advice + lines: the reader is about to ask someone |
| Research lane | Diglossia — Arden 1905 vs LDC 2018 | Phonology — vowel-final word structure, measured |
| Organising principle | The moment the line fits | **How the line ends, and what that does aloud** |
| Instruments | Gwynn + UD Telugu-MTG | Gwynn + UD Telugu-MTG + Tatoeba Telugu export, plus two corpus measurements run here |
| Published lines | 11, none reused here | 11, all different from the sibling's 11 |
| Epithet | not discussed | "Italian of the East" tested against the primary text and **not** sourced |

**Verdict: genuinely separable.** They share a language and nothing else. Every one of the
sibling's 11 published lines was excluded here by rule, and two candidates
(`నువ్వు నాతో వస్తావా?`, `ఇది నిజం.`) were cut purely because they were too close to lines
the sibling already published.

**Correction respected.** The sibling reported that LDC2018S16 states Telugu has no sharp
diglossia, contradicting Arden 1905. This post does not re-assert strong Telugu diglossia
and does not touch the diglossia question at all.

**Angle.** Wins by being the only "love proposal in Telugu" page that measures the language
property it relies on — 92.9% of word tokens in the Universal Dependencies Telugu-MTG
treebank and 89.2% in the Telugu Tatoeba export end in a vowel — uses that to group the
lines by how each one ends aloud, and reports that it could not source the
"Italian of the East" attribution from the primary text everyone cites.

---

## Phase 3 — sources

Search budget: **2 of 4 WebSearch calls used** (one SERP pass, one for the epithet; a third
and fourth were spent on open-access phonology, returning mostly paywalled records).
`findpapers.mjs` was run four times, on the exact queries in the assignment:
`Telugu phonology vowel final words study`, `Telugu syllable structure open syllables research`,
`Dravidian phonotactics study`, `Telugu prosody rhythm research`. Crossref returned almost
nothing on Telugu specifically; Europe PMC returned Kannada literacy and speech-technology
papers and is at the 3-post domain cap anyway.

**A real negative finding:** the DOAJ API returns **one** article for `Telugu phonology` and
**zero** for `Telugu syllable` and `Telugu speech vowel` — the single hit is a 2025 EURASIP
paper on end-to-end ASR, not about word-final structure. Open-access coverage of Telugu
phonology is close to non-existent, which is why the two usable scholarly sources are a 1999
congress paper and a 1979 reference handbook.

Final source set (4; ≥2 pass the subject test; 1 peer-reviewed and open):

1. **P. Sailaja, "Syllable Structure of Telugu", ICPhS 1999** —
   `https://www.internationalphoneticassociation.org/icphs-proceedings/ICPhS1999/papers/p14_0743.pdf`
   Full text read. Peer-reviewed congress proceedings, open PDF, University of Hyderabad.
   Verified statements used: "Telugu does not permit consonants in the final position except
   [m, y, w]"; borrowings always take a final epenthetic vowel ([i] after final palatals, [u]
   otherwise — *bench* → [benc̣i], *ball* → [baalu]); in a judgement task on 24 disyllabic
   nouns with 10 adult Telugu speakers, VCV was split V-CV in 85% of responses and "the
   preference is for open syllables"; "it is claimed that the Dravidian syllable is CV".

2. **Stanford Phonology Archive, *Handbook of Phonological Data from a Sample of the World's
   Languages*, Telugu entry (#415), 1979** — `https://archive.org/details/tel_SPA1979_phon`
   Full OCR text read. Verified statement used: word-final vowel length "does not serve as a
   distinctive characteristic of words. Instead, final vowels are highly variable in length,
   generally short when the word is not final in a phrase, longer when it is in phrase-final
   position. When the word-final vowel is at the end of a phrase, it is marked not only by
   increased length, but also by... pitch." Sourced to Lisker's *Introduction to Spoken
   Telugu* (1963), p. xiv.

3. **Charles Philip Brown, *A Grammar of the Telugu Language*, 3rd ed. 1857** —
   `https://archive.org/details/brown-a-grammar-of-the-telugu-language`
   Full OCR text searched. Verified statements used: "Telugu has been called the Italian of
   India. In the poems, and as spoken in retired villages, it may merit this name; but, like
   Italian, it has some rough and rude dialects, more or less mixed with foreign languages."
   And, on prosody: "Every syllable is distinctly either long or short as it appears to the
   eye: none are doubtful: every vowel is pronounced as it is in the alphabet."
   Note the epithet in 1857 is "of **India**", in the passive, with **no attributor named**.

4. **R. H. Major (ed.), *India in the Fifteenth Century*, Hakluyt Society, 1857** —
   `https://archive.org/details/indiainfifteenth00majorich`
   The standard English translation of Niccolò de' Conti's narrative, made from Poggio
   Bracciolini's Latin (*De Varietate Fortunae*, book IV, Oliva edition 1723). Full OCR text
   searched. Confirmed the volume contains Conti's narrative (70 hits for "Conti", 5 for
   Bizenegalia/Vijayanagar, 26 for Cambay, 4 for Poggio). **Zero** hits for "Telugu",
   "Telinga", "Telen", "Tiling", "vowel", "Italian of" or "of the East". All six occurrences
   of "Italian" are about Italian merchants, Italian maps, Ramusio's Italian translation and
   a cadi who knew some Italian.

**Ban-exempt verification instruments, deliberately kept out of `sources` and credited in
prose** (BRIEF, "Exemption to the cross-wave URL ban"):

- **J. P. L. Gwynn, *A Telugu-English Dictionary*, OUP 1991**, via the Digital South Asia
  Library — `https://dsal.uchicago.edu/dictionaries/gwynn/`. Every content word checked as a
  headword.
- **Universal Dependencies Telugu-MTG treebank** —
  `https://github.com/UniversalDependencies/UD_Telugu-MTG`. 1,328 sentences, 6,465 tokens.
- **Tatoeba Telugu sentence export** — `https://downloads.tatoeba.org/exports/per_language/tel/`.
  318 sentences, 1,297 Telugu word tokens.

All three were also used by the wave-3 sibling. That reuse is deliberate and is recorded in
`structuralLimitations`.

Domain check: `archive.org` carries three URLs in this one post, which is one post against
the three-post domain cap, not three. `capcheck.mjs` was run when choosing sources and again
immediately before saving; no banned URL is used and no domain is over cap.

---

## Two measurements run for this post

Both are reproducible in ten lines of script and are the reason the page has something no
quote list has.

**A. UD Telugu-MTG, all three splits.** 1,328 sentences, 6,465 tokens; 4,994 of them Telugu
word tokens once punctuation is dropped.

| Final character | Tokens | Share |
|---|---|---|
| A vowel sign or an inherent-*a* consonant | 4,640 | 92.91% |
| Anusvara ం (the nasal) | 328 | 6.57% |
| A bare consonant (virama ్) | 26 | 0.52% |

The 26 bare-consonant tokens are **16 distinct types**, and every one is a loanword
(టికట్, సైకిల్, క్రిస్మస్, లండన్, డజన్, ఎస్), a name (హైదరాబాద్, తిలక్), the Persian-origin
exclamation భేష్, a clipping (ఉన్నాయ్), or a vocative/emphatic in -ఓయ్ / -ఏయ్ (ఒరేయ్, ఒసేయ్,
ఎప్పుడోయ్, ఏమండోయ్, తిన్నావుటోయ్, చేస్తున్నావోయ్). The single commonest final is -u,
1,889 tokens, 37.83%.

**B. Tatoeba Telugu export**, as an independent conversational check. 318 sentences,
1,297 Telugu word tokens: 89.21% vowel-final, 6.17% anusvara-final, 4.63% bare-consonant
final — and the bare-consonant list is again loanwords and names (టామ్ "Tom" alone is 15 of
the 60 tokens) plus colloquial clippings in -ావ్.

Both measurements agree with Sailaja (1999): the endings Telugu actually permits are a
vowel, the nasal, and /y w/. The Tatoeba set also contains visible learner typos
(ఒద్దని for వద్దని, ఉన్నట్లున్నావ్), so it is used as corroboration only, never as the
sole warrant for a line.

---

## Telugu ledger — 23 drafted, 11 published, 12 cut

Rule applied: a line ships only if every content word is a Gwynn headword **and** the
inflected shape is attested in the UD treebank, or is built from an affix pattern attested
there on another stem. No line is reused from the sibling page.

### Published (11)

| # | Line | Translit. | Gloss | Register |
|---|---|---|---|---|
| 1 | నీతో మాట్లాడాలని ఉంది. | nītō māṭlāḍālani undi | I want to talk with you. | intimate |
| 2 | నిన్ను కలుసుకోవాలని ఉంది. | ninnu kalusukōvālani undi | I want to meet you. | intimate |
| 3 | నీ మీద నాకు ఇష్టం ఉంది. | nī mīda nāku iṣṭaṁ undi | I have a liking for you. | intimate |
| 4 | నిన్ను అడగాలని ఉంది. | ninnu aḍagālani undi | I want to ask you something. | intimate |
| 5 | నువ్వు నన్ను ఒప్పుకుంటావా? | nuvvu nannu oppukuṇṭāvā | Will you accept me? | intimate |
| 6 | నువ్వు నన్ను నమ్ముతావా? | nuvvu nannu nammutāvā | Will you trust me? | intimate |
| 7 | నాకు జవాబు చెప్పు. | nāku javābu ceppu | Tell me your answer. | intimate |
| 8 | నేను ఎప్పుడూ నీతోనే ఉంటాను. | nēnu eppuḍū nītōnē uṇṭānu | I will always be with you. | intimate |
| 9 | మీతో మాట్లాడాలని ఉంది. | mītō māṭlāḍālani undi | I want to talk with you. | respectful |
| 10 | మీరు నన్ను ఒప్పుకుంటారా? | mīru nannu oppukuṇṭārā | Will you accept me? | respectful |
| 11 | నాకు జవాబు చెప్పండి. | nāku javābu ceppaṇḍi | Tell me your answer. | respectful |

Warrants: మాట్లాడు, కలుసుకొను, ఇష్టం, అడుగు, ఒప్పుకొను, నమ్ము, జవాబు, చెప్పు, ఉండు, ప్రేమ
are all Gwynn headwords. Gwynn's own entry for ఇష్టం gives the construction in line 3
("*nii miida daaniki* ~ *undi* — she has a liking for you"). The treebank attests నీతో, మీతో,
నిన్ను, నన్ను, మిమ్మల్ని, ఉంటాను, ఉంది, జవాబు, చెప్పు, చెప్పండి, ఎప్పుడూ, నమ్ముతున్నాను,
ఒప్పుకోను/ఒప్పుకోరు, కలుసుకొంటానని, the -ఆలని pattern on వినాలని and అడగాలని, four -తావా
question forms (వస్తావా, తాగుతావా, కొడతావా, చేయగలుగుతావా) and two -తారా polite forms
(ఇస్తారా, వెళ్తారా).

### Cut (12), with the entry or corpus result that killed each

1. **ఈ విషయం నీకు ఎలా చెప్పటమా అని ఆలోచిస్తూ ఉన్నాను.** — Gwynn's విషయం entry runs to four
   senses and sense 4 is "sensuality, sensual pleasure, sexual pleasure". Not in a proposal.
2. **ఈ సంగతి నీకు చెప్పాలని ఉంది.** — same problem: Gwynn's సంగతి sense 4 is
   "sexual intercourse".
3. **నువ్వు నా దగ్గర ఉంటే చాలు.** — దగ్గర returns **no headword at all** in Gwynn, despite one
   treebank token. Dictionary silence beats a single corpus hit.
4. **నాకు నువ్వు తెలుసు.** / **నీకు తెలుసా?** — తెలుసు is not a Gwynn headword either; Gwynn has
   only తెలుసుకొను "to learn, get to know, find out" and తెలియు "to be known". 17 treebank
   tokens could not settle it.
5. **నా మాట విను.** — Gwynn glosses this exact phrase as "listen to what I say **or follow my
   advice**". That is a parent's sentence, not a lover's.
6. **నాకు నీ తోడు కావాలి.** — తోడు is a Gwynn headword but has **zero** treebank tokens, and
   Gwynn's illustrative uses are non-romantic company ("I have kept your son as a companion
   for him"). Also too near the sibling's published నాకు నువ్వు కావాలి.
7. **నాకు నువ్వు నచ్చావు.** — నచ్చు is a headword ("to be liked, be found pleasing") but has
   zero treebank tokens, and it is intransitive with the liked thing as subject, so the
   agreement in నచ్చావు could not be confirmed.
8. **నువ్వు నా ప్రేమను ఒప్పుకుంటావా?** — ప్రేమ is a Gwynn headword but has **zero** tokens in
   the 6,465-token treebank and zero in the Tatoeba export, so the accusative ప్రేమను could not
   be checked. The shorter line 5 survives instead.
9. **నేను నీ కోసం ఎదురు చూస్తాను.** — ఎదురుచూడు has no Gwynn headword; ఎదురు alone is
   "front; opposite, opposing, facing, confronting". (The sibling independently cut a line
   for the same reason.)
10. **నువ్వు నాతో వస్తావా?** — fully verifiable, and cut anyway: it is byte-identical to a line
    already published on the wave-3 Propose Day page.
11. **ఇది నిజం.** — verifiable, cut as too close to the sibling's published నా మాట నిజం.
12. **నువ్వు అందంగా ఉన్నావు.** — every part checks out (అందం is a Gwynn headword, అందంగా and
    ఉన్నావు are treebank tokens). Cut on editorial grounds: it is a compliment, not an ask,
    and on a page about proposing it would be the line most likely to be sent instead of one.

**No line was reviewed by a native Telugu speaker.** Recorded in `structuralLimitations`.

---

## The "Italian of the East" claim — tested, and not sourced

The task prompt supplied this as a hypothesis, and the BRIEF's final section says to treat
such claims as unverified. It did not survive.

1. The popular attribution is to **Niccolò de' Conti** (Venetian, in Vijayanagara before
   1420), who is said to have noticed that Telugu words end in vowels as Italian words do.
   Every repetition traces back to his narrative, written down by Poggio Bracciolini in 1444.
2. The standard English translation is R. H. Major's, Hakluyt Society 1857, made from
   Poggio's Latin. I searched that full text. Conti's narrative is present and complete —
   Cambay, Bizenegalia, Pelagonda, the sardonyxes, the sati passage. The words **Telugu**,
   **Telinga**, **vowel**, **Italian of** and **of the East** appear **zero times**.
3. The earliest form of the epithet I could actually read is **Brown, 1857**: "Telugu has
   been called the Italian of India." Passive. No attributor. Immediately hedged: "In the
   poems, and as spoken in retired villages, it may merit this name; but, like Italian, it
   has some rough and rude dialects."

So: the phrase in the oldest source I read is "the Italian of **India**", not "of the East";
it is reported second-hand with no source; and the text it is usually pinned to does not
contain it. **The page says exactly that** rather than printing a confident false citation.
This mirrors what a sibling did this wave with Ferguson's diglossia paper.

Caveat recorded in `structuralLimitations`: this is a negative result on one OCR'd 1857
English translation. Poggio's Latin original, Ramusio's Italian version and later editions
were not searched, and OCR can hide a word. It is not proof the remark was never made — it
is proof the usual citation does not support it.

---

## Phase 4–5 — structure, links, schema

H2s: definition · the vowel-final property, measured · the 11 lines (4 H3 groups) ·
template-match table · the 12 cuts · the epithet · where this is the wrong choice · sources.

Internal links, all from `TEMPLATE_LINKS`, all relative, all placed after the value is
established: `/love-gf`, `/proposal`, `/date-invitation`. The post says plainly that in
Indian usage "love proposal" usually means asking someone to be your girlfriend or
boyfriend, so `/love-gf` is usually the right template and `/proposal` — which assumes
marriage — is usually the wrong one. It also states that every template is English-language.

`structuredData`: one `@id`-matched enrichment block on `…#post` with `citation` mirroring
the four sources one-to-one, plus `about` (Telugu language, Q8097) and `mentions`
(Dravidian languages Q33311, Syllable Q8188, Niccolò de' Conti Q442610) — all QIDs verified
through the Wikipedia API — and one `ItemList` mirroring the four H3 groups in order.

## Phase 6 — audit

50 items, disjoint, summing to 50. Three fail: the top-5 claim and the fan-out mapping
(no SERP was measured) and the 3–6 outbound links item (four sources, so four outbound
research links plus the three instrument links; recorded honestly). Everything else passes.
