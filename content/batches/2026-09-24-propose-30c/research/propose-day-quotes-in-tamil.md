# Research brief — `propose-day-quotes-in-tamil`

Batch `2026-09-24-propose-30c`. Keyword: **propose day quotes in tamil**.
Demand: 5 autocomplete prefixes — the highest of this wave's language posts.
**Ordinal only. Not a volume.**

---

## Phase 1 — SERP (one WebSearch, 2026-09-24)

One India-geo WebSearch was spent on the exact keyword. **No page was fetched**,
so nothing on this page describes what any competitor's article contains, and no
position is asserted. What the result list showed, and nothing more:

| Rank slot | Result | What it is |
|---|---|---|
| 1 | pinterest.com/ideas/best-proposal-lines-in-tamil | Pinterest idea feed, not an article |
| 2 | translate.google.com → weddingwire.in propose day quotes | An **English** page machine-translated into Tamil |
| 3 | translate.google.com → giftalove.com propose day quotes | An **English** page machine-translated into Tamil |
| 4 | in.brandedpoetry.com/propose-day-quotes-in-tamil | Year-stamped 2024 listicle |
| 5 | en.wikipedia.org/wiki/Valluvar_year | Irrelevant entity match |
| 6–9 | dribbble, goodreads ×3 | Not Tamil, not proposal content |

Two of the top results are the same English listicle served through Google
Translate. That is the strongest single signal on this SERP and it is visible
from the result list alone: the query is being answered by machine translation,
not by Tamil. The remaining ranked slots are a pin board, a year-stamped
listicle and three irrelevant matches.

**Inherited Phase 1.** Only 11 India-served SERPs were ever measured for this
cluster, on 2026-09-16, and this keyword is not among them. Nothing here is a
current-position claim.

## Phase 2 — Gap and angle

Table stakes: lines in Tamil script; a transliteration; the 8 February date.

The gap, and it is a large one: **nobody shows their work.** A Tamil line can be
lexically correct and still land wrong, because Tamil is diglossic — the written
variety and the spoken variety are different enough that a classifier separates
them at 99.4–99.8% accuracy (Prasanna & Arora 2024). A quote list that does not
say which variety it is in, and does not say whether it addresses நீ or நீங்கள்,
is handing the reader a coin flip on the most consequential message they will
send this year.

**Angle:** wins by being the only Propose Day page in Tamil that names the
register and the variety of every published line, verifies each one against the
Madras Tamil Lexicon plus a literary treebank and a conversational corpus, and
publishes the seven lines it cut with the instrument that cut them.

Fan-out sub-queries mapped to H2s/FAQs: *what is a Propose Day quote in Tamil* ·
*நீ vs நீங்கள்* · *literary vs spoken Tamil* · *which lines are safe* · *how were
they checked* · *what to send it on* · *when a Tamil line is wrong* · *when is
Propose Day 2027*.

## Phase 3 — Sources (4) and how each was used

| # | Source | Read | Subject test | Why not filler |
|---|---|---|---|---|
| 1 | Prasanna & Arora, *IruMozhi*, Findings of NAACL 2024 | full text (PDF) | Tamil diglossia | The only quantified statement anywhere of how separable the two Tamil varieties are |
| 2 | Seetha Lakshmi, *The Impact of Standard Spoken Tamil in Singapore Tamil Classrooms*, J. NCOLCTL 2012 | full text (PDF) | Tamil H/L variety in use | Documents the exact failure this page prevents: people taught only written Tamil using it in informal settings |
| 3 | Timothy Lubin, *Legal Diglossia*, Institut Français de Pondichéry 2013 | abstract + opening section | functional diglossia in medieval Tamil | Dates the split to inscriptions of the 4th–16th centuries |
| 4 | Ambika & Gideon, *Tamil Grammatical Tradition…*, IJTLLS 5(2) 2023 | **abstract only** — the body is set in a legacy non-Unicode Tamil font and did not extract | the codification of literary Tamil | Explains why the H variety is so fixed |

No source passes the swap test. One generic context statistic: **zero**.
Wikipedia in the body: **zero**.

Search budget spent: **1 of 4** WebSearch calls. Everything else came from
`findpapers.mjs` (Crossref + Europe PMC), the DOAJ article API, and direct
fetches. Crossref queries run: `Tamil diglossia spoken literary study`,
`Ferguson diglossia Tamil`, `Tamil sociolinguistics register research`,
`Tamil language purism movement research`, `Tamil NLP corpus resources study`,
`Standard Spoken Tamil standardization variety`,
`Tamil second person pronoun address terms politeness`,
`diglossia text messaging informal written variety South Asia`.

**Rejected and why.** Ferguson's 1959 *Diglossia* (WORD 15) — Taylor & Francis
returned 403; not cited, and, importantly, **the common claim that Tamil is one
of Ferguson's four defining cases was not verified and is not made on the page**:
the 1959 article's defining languages are Arabic, Modern Greek, Swiss German and
Haitian Creole, and Tamil enters the literature later (Britto 1986, foreword by
Ferguson). Britto 1986 — book, unread. Smirnitskaya, *Diglossia and Tamil
varieties in Chennai* (Acta Linguistica Petropolitana 2018) — the journal has
restructured and every archive URL for issue 14-3 now 404s. Shodhganga — bot
challenge. NIE Singapore repository — AWS WAF challenge. DOAJ returns **0**
articles for `tamil diglossia`.

**The Telugu contrast was deliberately dropped.** A wave-3 sibling reported that
LDC2018S16 states Telugu has no sharp diglossia. That URL is on the 332-URL ban
list, and this agent did not fetch it, so the claim is not repeated. The page
instead uses what it did read: Lakshmi (2012) quoting the SINDA Tamil Education
Review Committee that this "extreme diglossia is unique to Tamil among the four
official languages in Singapore".

## Verification instruments (credited in prose, kept out of `sources`)

Per the BRIEF's mid-batch exemption, dictionaries, treebanks and corpora are
exempt from the cross-wave URL ban and are better credited in prose than given a
source slot. Three were used.

1. **Madras Tamil Lexicon**, Digital Dictionaries of South Asia, University of
   Chicago — `dsal.uchicago.edu/dictionaries/tamil-lex/`. **42 headword queries
   run**; 39 returned a headword, 3 returned none (நண்பி, இதுவரை, சொல்லு-தல்).
   Every content word in every published line was looked up and its attested
   senses read. This instrument alone cut four lines.
2. **UD Tamil-TTB**, Universal Dependencies (train+dev+test,
   `github.com/UniversalDependencies/UD_Tamil-TTB`). **600 sentences, 9,581 word
   tokens.** Exactly **12** tokens carry `Person=2`, **6** of them explicitly
   `Polite=Form`; the forms are நீங்கள், உங்கள், உங்களுக்கு, உங்களைச்,
   இருக்கிறீர்கள், விரும்புகிறீர்கள், வருகிறீர்கள், அஞ்சுகிறீர்கள்,
   கவலைப்படாதீர்கள், இருங்கள். The intimate நீ, உன், உன்னை, உனக்கு appear
   **zero** times. The whole treebank contains exactly **one** imperative,
   இருங்கள் — the respectful plural.
3. **Tatoeba Tamil sentence export** (CC BY 2.0 FR), `tam_sentences.tsv`.
   **597 sentences, 2,308 tokens.** நீ ×27, நீங்கள் ×9, உன்- forms ×20;
   2sg familiar `-கிறாய்` ×10, past `-ஆய்` ×3, future `-ப்பாய்` ×1; respectful
   `-கிறீர்கள்` ×6 and imperative `-உங்கள்` ×15.

**The finding that shaped the page:** the literary treebank has no intimate
second person at all, while the conversational corpus has 27 instances of நீ.
That is the diglossia split showing up as a hole in the data, and it is the exact
reason a line copied from formal written Tamil sounds wrong when said aloud. It
is also the reason no intimate line on this page rests on the treebank alone —
the conversational corpus had to be added, which is what a wave-3 Hindi agent had
to do for the same reason.

## Ledger — 18 drafted, 11 published, 7 cut

| Cut line | Instrument | Reason |
|---|---|---|
| எனக்கு உன்னைப் பிடிக்கும் | Tatoeba | The dative-experiencer `பிடிக்கும்` frame occurs 10× and **every** theme is inanimate and nominative (சிவப்பு, ஆரஞ்சு, மஞ்சள், பாடல்கள்). The human accusative a proposal needs is unattested. |
| நீ என் நண்பியாக இருந்தாய்; இனி என் துணையாக இருப்பாயா? | Madras Tamil Lexicon | **நண்பி has no headword at all.** The masculine நண்பன் that does is glossed 1. friend, companion — and 2. **"Lover, husband; காதலன்"**, which destroys the "we were only friends" contrast the line depends on. |
| என் மனம் உன்னிடம் இருக்கிறது | Madras Tamil Lexicon | மனம் is "Mind; will; the reasoning faculty", plus purpose, memory, desire, and sense 5 **rock salt**. No "heart" sense. The English gloss would have been false. |
| உன் நிழலில் நான் இருக்கிறேன் | Lexicon + both corpora | நிழல் is attested ("shade, shadow") but appears **0×** in either corpus, and Lexicon sense 6 is "Grace, favour, benignity" — a devotional reading, not a romantic one. |
| என் வாழ்க்கைத்துணையாக இருப்பாயா? | Madras Tamil Lexicon | வாழ்க்கைத்துணை is glossed flatly as **"Wife; மனையாள்"**. It is a marriage word, and Indian Propose Day usage is overwhelmingly about asking someone to be a girlfriend or boyfriend. |
| நீ என் ஆசை | Madras Tamil Lexicon | ஆசை sense 4 is **"Sexual appetite; காமவிச்சை"**, sitting beside "wish" and "affection". Too much risk in a first message. |
| நம் பயணம் இன்று தொடங்குகிறது | Lexicon + both corpora | பயணம் sense 2 is **"Death, as a journey; மரணம். Colloq."**, and தொடங்குகிறது is unattested in either corpus. |

Two mild extrapolations are disclosed on the page: `என்னுடன்` is built from உடன்
(Lexicon headword, "together with"; 32 treebank tokens) with a pronoun, a
combination the corpora attest only as எங்களுடன்; and the sandhi-doubled
`உன்னைக் காதலிக்கிறேன்` is given in the corpus-attested undoubled form.

## Phase 0 — facts used

Four lines from `content/facts.md` (2026-09-24), copied verbatim. **No figure is
attributed to proposal pages** — the `proposalpages` probe is still refused — and
every one is labelled platform-wide across 21 page types or sampled on the named
template, in body prose. **No price, free tier or paid tier is stated or implied**;
the pricing block in `facts.md` is empty for a fourth batch.

## Not a native-speaker review

The Tamil on this page was checked against instruments, not by a Tamil speaker.
That is recorded in `batchMeta.structuralLimitations` and stated on the page.
