# Research brief — `miss you quotes in nepali`

Batch `2026-09-25-miss-you-30` · slug `miss-you-quotes-in-nepali` · drafted 2026-09-25

---

## Phase 0 — Data gate

Source: `content/batches/2026-09-25-miss-you-30/facts-snapshot.md` (pinned), **not**
`content/facts.md`. Eight lines used, byte-verbatim, all from the miss-you segment
(n = 214 pages on `/missyou-gf`, measured 2026-09-25). Two are in the first 150
words: the 88-word median letter and the 43.5% password-protect rate. Gate passes.

The three mandatory caveats are in body prose in the comparison-table section:
pickers with defaults (city, background music, "together since" excluded and the
sender-chosen fields named); `viewCount` is page views, not unique visitors; n = 214
over two months from 2026-07-28, so no seasonal claim.

---

## Phase 1 — SERP

One WebSearch on the exact keyword, 2026-09-25, US-served. What actually came back,
in order:

| # | Result | Type |
|---|---|---|
| 1 | in.pinterest.com pin, "Heart touching I miss you Nepali" | image pin |
| 2 | tiktok.com/discover/i-miss-you-quotes-in-nepali | platform discover page |
| 3 | tiktok.com/discover/miss-you-in-nepali-language | platform discover page |
| 4 | mymemory.translated.net — "Translate miss you from Hindi to Nepali" | machine-translation memory |
| 5 | tiktok.com/@kashminiraula video, "How to Say 'I Miss You' in Nepali" | short video |
| 6 | hinative.com/questions/420008 | Q&A thread |
| 7 | en.wikipedia.org — "Miss Nepal 2011" | pageant article (query misread) |
| 8 | imnepal.com tag page, "miss-you-quotes-in-nepali" | SMS/shayari aggregator |
| 9 | imnepal.com, "Miss You SMS In Nepali" | SMS/shayari aggregator |

**Phase 1 as written could not be run.** There are no five comparable article-format
pages to fetch in full: no dictionary, no grammar, no named author, no publication.
Per `references/competitors.md` the aggregator, Pinterest, TikTok and MyMemory
results were **not opened**, so nothing in the post claims anything about their
contents beyond what this result list shows. Google resolving part of the query as
"Miss Nepal" is itself evidence that the query is thin.

The search snippet did surface the two phrasings people circulate — *ma timilai
samjhinchhu* / *maile timilai miss garchhu* and *malai timro yaad aairaheko chha* —
which set the three candidate constructions the post then went and checked.

---

## Phase 2 — Gap and fan-out

**Table stakes.** Devanagari plus a romanisation; more than one line; a note on
pronunciation; a note on who you can say it to.

**The gap.** Nobody sources anything. No page on this SERP names a dictionary, a
page number, a corpus or a grammar. Nobody explains the construction, so nobody
tells the reader that the sentence has no "you" as its object. Nobody separates
Nepali from Hindi even though the script is shared and result 4 is literally a
Hindi→Nepali machine translation.

**Fan-out sub-queries → H2s**

| Sub-query | Became |
|---|---|
| how do you actually say I miss you in Nepali | H1 answer paragraph |
| why does the Nepali phrase not have a verb for "miss" | H2 "What the 'memory comes' construction is…" |
| what does न्यास्रो mean | H2 "नियाँस्रो: the most Nepali word here…" |
| give me lines I can send | H2 "Six Nepali lines, with the page each one rests on" (6 H3s) |
| is this Nepali or Hindi | H2 "How to tell Nepali from Hindi when the script is identical" |
| how long should the message be / how private | H2 "Which line belongs where on a page…" + table |
| what if I'm writing to a parent / my Nepali is weak | H2 "When sending a Nepali line is the wrong move" |
| what did you leave out | H2 "What I cut, and why" |

**Angle.** Wins by being the only post that gives a dictionary page number for every
Nepali line, states the construction correctly as a dative experiencer, and reports
that the word it was told to lead with is glossed "solitude, loneliness; despair,
perplexity".

---

## Phase 3 — Language verification

Everything below was **fetched this session**, not recalled.

### Turner, *A Comparative and Etymological Dictionary of the Nepali Language* (1931), DSAL

DSAL serves two Nepali dictionaries, indexed at `dictionaries/nepali/`: Schmidt
(`schmidt_query.py`) and **Turner Nepali (`turnernepali_query.py`)** — note the
script name, not `turner_query.py`, which is a different resource. Turner's headword
index is romanised (IAST-ish); Devanagari queries work only with `searchhws=no`.
Schmidt's index is romanised too but with a different convention, which is why
`nyaasro`, `samjhanaa` and `yaad` all return nothing there while `māyā` returns p. 518.

| Page | Headword | What it says |
|---|---|---|
| 347 | नियाँस्रो niyā̃srō | "or niyāsro or ninyāsro, s. Solitude, loneliness; — despair, perplexity. — n˚ lāgnu c. lāi to feel lonely. [ni-³ and āsro ?]" |
| 345 | निन्यास्रो | cross-reference → niyā̃sro |
| 348 | नियास्रो | cross-reference → niyā̃sro |
| 523 | याद् yād | "s. Memory; attention. — yād garnu to remember, mark, attend. **[lw. H. yād fr. Pers.]**" |
| 588 | सम्झना samjhanā | "s. Memory, remembrance; memorial. — s˚ garnu … s˚ rākhnu … s˚ hunu to remember (e.g. s˚ bhayo I remembered)." |
| 588 | सम्झनु samjhanu | "vb. tr. and intr. To remember; understand; feel." ← Sk. saṁbudhyate via Pk. saṁbujjhaï |
| 551 | लाइ lāi | "postp. (c. obl.) In the case of living beings … added to the oblique to express the direct object; — to, for; as regards" |
| 553 | लाग्नु lāgnu | the experiencer paradigm: भोक l˚ hungry, निद्रा l˚ sleepy, तिर्खा l˚ thirsty, लाज l˚ ashamed, उदास l˚ depressed, मन l˚ to please |
| 504 | माया māyā | "love; pity. — m˚ lāgnu c. lāi to fall in love (e.g. **malāi m˚ lāgyo** I have fallen in love). — **m˚ mārnu to forget (e.g. m˚ na māra don't forget me)**" |
| 284 | तिमि / तिम्रो | "less familiar than tã, less formal than tapāĩ … used between friends or to inferiors"; timro "[cf. … H. tumhārā]" |
| 189 | छ cha | "3rd sg. pres." |
| 448 | बिर्सनु birsanu | "To forget; neglect; misunderstand" |
| 30 | आउनु āunu | "vb. intr. To come" |

### Schmidt, *A Practical Dictionary of Modern Nepali* (1993), DSAL

| Page | Headword | What it says |
|---|---|---|
| 518 | माया māyā | "love, liking, attachment"; माया गर्नु "to like, love" with `-laai` examples |
| 350 | निराशा nirāśā | निराश लाग्नु with "**malaai niraas laagyo**, I was disappointed" |
| 73 | एक्लो eklo | "alone; lonely: saathi chaina, ma eklo chu" |
| 524 / 525 | मिसाउनु / मिसिन | "to mix, adulterate" / "machine" — the only mis- headwords. **No मिस गर्नु entry.** |
| — | नियाँस्रो / न्यास्रो | **no entry under any spelling tried** |

### Tatoeba (npi)

Corpus size **4,504 sentences** on 2026-09-25, rank 93 by language size, read from
`tatoeba.org/en/stats/sentences_by_language`. The language code is **npi**, not
`nep` — `nep` silently returns unrelated languages rather than erroring, which is
how a corpus count gets reported wrong.

| Query | Hits | Notable sentence |
|---|---|---|
| याद | 14 | **12348012** मलाई तिम्रो धेरै याद आइरहेको छ। = "I miss you badly" |
| | | 11987269 त्यो गीत सुन्दा बाल्यकालको याद आयो। = "That song reminds me of my childhood" |
| सम्झ | 3 | 12148368 म पक्का छु कि टमले तपाईलाई सम्झेको छ। = "I'm sure that Tom remembers you" |
| मिस | 2 | 11864846 म तिमीलाई धेरै मिस गर्नेछु। = "I'm going to miss you an awful lot" |
| आउँछ | 8 | — |
| एक्ल | 0 | — |

### Unicode

`unicode.org/Public/UCD/latest/ucd/Blocks.txt` = Blocks-18.0.0.txt, dated 2026-07-08:
`0900..097F; Devanagari`. Named in prose, not linked, to stay inside the 3–6
outbound-link rule.

### Wiktionary

`en.wiktionary.org` has **no page** titled न्यास्रो (`missingtitle`) and the search
API returns zero results for it. Recorded as an absence, not cited.

### Third-party research

| Source | Why it passes the subject test | Read |
|---|---|---|
| BMJ Open 2025, Jhapa (Europe PMC PMC12706191) — n=179 wives of international migrant workers; depression 54.7%, anxiety 53.1%, stress 60.9% on DASS-21; **daily communication with husbands significantly associated with all three** | about this exact separation, in Nepal | full text (Europe PMC XML) |
| Kurmi, *Chhahari* 3(1):81–95, 2026 (NepJOL, CC-BY) — synthesis 2010–2025; communication frequency a mediator of psychosocial well-being | about left-behind Nepali spouses | **abstract and metadata only** |

Rejected: `bmjopen.bmj.com` (Cloudflare challenge — hence the Europe PMC URL);
`comparativemigrationstudies.springeropen.com` (empty body); `journals.plos.org`
Sigdel et al. 2025 (read in full, then dropped when the domain hit the 3-post cap
mid-draft — see `structuralLimitations`).

---

## Cannibalisation check

`content/keywords/2026-09-25-miss-you-global/site-baseline.md` lists the Indian
languages already owned (hindi, marathi, tamil, telugu, punjabi, gujarati, urdu,
bengali, kannada, malayalam). **Nepali is not among them** and no Nepali slug appears
among the 81 live `miss` slugs. Strapi returns `total: 0` for this slug.

The honest overlap with `/blog/how-to-say-i-miss-you-in-hindi`: both languages use a
memory-coming construction and both use the same Persian-derived याद, so the
*construction* does not separate them. What does: the inherited alternative सम्झना,
the copula (छ vs है), the possessive (तिम्रो vs तुम्हारा), and नियाँस्रो, which has
no Hindi twin. Separate page, overlap stated in the body rather than hidden.

The hub `/blog/i-miss-you-in-different-languages` carries "Nepali" only inside one
FAQ (id 53186), has no Nepali row in its language lists, offers म तिमीलाई मिस गर्छु
and म तिमीलाई सम्झन्छु, romanises सम्झन्छु as two words, and never gives the
याद आउँछ line. The body says so and links up.

---

## Emit

- `blogs/miss-you-quotes-in-nepali.json` — 1,797 body words, 11 FAQs, 6 sources,
  8 first-party facts, category `miss-you-across-miles`, templates `/missyou-gf`
  and `/streak`.
- Audit: 47 passed, 3 failed, disjoint, 50 total.
