# Research brief — `love proposal lines in kannada`

- **Slug:** `love-proposal-lines-in-kannada`
- **Batch:** `2026-09-24-propose-30c` (wave 4)
- **Category:** `modern-romance`
- **Secondary keyword on the same page:** `love proposal quotes in kannada`
- **Demand:** 3 ordinal prefixes from the 4,788 raw autocomplete suggestions. `prefix_hits`
  is ordinal, not volume, and is not printed anywhere on the page.

---

## Phase 1 — SERP analysis: NOT RUN, and the page claims nothing about it

The session WebSearch budget is 4 calls shared with the research pass. Both research calls
were spent looking for open-access vachana scholarship; **none was spent on the keyword
SERP**. No competitor page for `love proposal lines in kannada` was fetched, no SERP was
measured, and no AI Overview was seen.

Consequences, applied strictly:

- The post does not say what any ranking page contains, does not say "no competitor covers
  X", and does not describe a current position.
- `content/keywords/2026-09-16-propose-100/serps.md` measured 11 India-served SERPs on
  2026-09-16. This keyword is not among them. Nothing is inherited as current.
- The position 6–10 expectation in `honestAssessment` comes from the BRIEF's inherited
  characterisation of Indian-language proposal SERPs as a publisher-owned February news
  cycle. **That characterisation was not verified in this run** and is recorded as a
  structural limitation rather than stated as fact on the page.

Table stakes were therefore inferred from the keyword itself and from the sibling page,
not from a measured SERP: lines in Kannada script, some transliteration, some English.

---

## Separation from the wave-3 Kannada sibling

Sibling read in full: `content/batches/2026-09-23-propose-30b/blogs/propose-day-quotes-in-kannada.json`.

| | Sibling (wave 3) | This page (wave 4) |
|---|---|---|
| Intent | Propose Day, 8 Feb 2027 — a dated occasion page | Evergreen: proposing in Kannada on any day |
| Framing | Valentine-week calendar, seasonal urgency | No date, no festival, no urgency anywhere |
| Lane | Kannada linguistics and digital presence (parser F1, Unicode atomicity) | The vachana tradition — 12th-century plain-speech Kannada |
| Core section | The ನೀನು/ನೀವು register pair as the main event | Register is marked but subordinate; the main event is **plain vs ornate** |
| Lines | 12 published, 7 cut, marriage-weighted (ಕೈ ಹಿಡಿ, ಮದುವೆಯಾಗು) | 12 published, 9 cut, **girlfriend/boyfriend-weighted** (ಗೆಳತಿ, ಗೆಳೆಯ) |
| Line overlap | — | **Zero lines reused.** Shared vocabulary is limited to unavoidable pronouns and ಸಂಗಡ/ಪ್ರೀತಿ. |
| Sources | Kittel dictionary, Kittel 1903 grammar, JITM parser paper, Unicode 17 | KannadaLit4NLP (Data in Brief 2026), Sahapedia on the vachanas, Kervan 2007, Wikipedia entity |
| Template argument | /proposal primary, /love-gf secondary | **/love-gf primary**, because "love proposal" means the girlfriend/boyfriend ask |

**Honest verdict: genuinely distinct.** The occasion difference is real and it changes the
content, not just the wrapper. A reader arriving in June is not shopping a festival; they
are about to ask someone. That moves the lines away from ಮದುವೆ ("marriage") and towards
the ask to be together, and it makes the missing Kannada noun for "girlfriend/boyfriend"
the page's opening finding rather than a footnote. The research lane is different, the
sources are disjoint, and not one Kannada line is shared.

---

## Phase 2 — The angle

**Wins by being the only Kannada love-proposal page that argues plain Kannada beats ornate
Kannada from the tradition's own evidence — the vachana corpus's own sarala/bedagina split
and the 21,701 vachanas in KannadaLit4NLP of which only 31.49% carry a published scholarly
interpretation — while publishing a 21-drafted / 12-published / 9-cut dictionary ledger and
naming /love-gf, not /proposal, as the right template for this search.**

### Fan-out sub-queries → H2s

| Sub-query | Where answered |
|---|---|
| What is a love proposal line in Kannada? | Block 1 + "What a love proposal means in Kannada" |
| Is there a Kannada word for girlfriend/boyfriend? | "What a love proposal means in Kannada" |
| What are the actual lines? | "Twelve love proposal lines in Kannada" |
| ನೀನು or ನೀವು? | Register field inside every H3 |
| Should the line be poetic or plain? | "What the vachana poets did with plain Kannada" |
| Are these lines correct? | "How each line was checked, and which nine were cut" |
| Which line suits which page? | Comparison table |
| When is a page the wrong idea? | "When a SubhSandesh page is the wrong place" |

---

## Phase 3 — Sources

Cap discipline: `capcheck.mjs` was run when choosing and again immediately before saving.
At that time `pmc.ncbi.nlm.nih.gov` / `europepmc.org` and `journals.plos.org` were both at
the 3-post cap and `frontiersin.org` had one slot; **none of the three is cited here.**

1. **KannadaLit4NLP**, *Data in Brief* 67 (2026), 112983, Elsevier, CC BY —
   `https://www.sciencedirect.com/science/article/pii/S2352340926005330`.
   Peer-reviewed, open access, subject test passed. 24,746 verses, of which **21,701 are
   vachanas**; 22,369 interpretations linked to 9,597 verses; **15,149 verses (61.2%) have
   no interpretation at all**, and for vachanas specifically the interpretation coverage is
   **31.49%** (6,833 of 21,701). Vachanas dated by the authors to the **11th–19th
   centuries**. Kannada is recorded as absent from the BEIR, MIRACL and Mr. TyDi retrieval
   benchmarks. Source texts: *Samagra Vachana Samputa* vols 1–15, Kannada Pustaka
   Pradhikara, Government of Karnataka (2001), and the Sanchaya digital repository.
   **Disclosure:** sciencedirect.com returned HTTP 403 to this machine. The full text was
   read through Europe PMC's mirror of the same CC BY article (PMC13320459); the citation
   points at the publisher of record, and Europe PMC is deliberately **not** counted as the
   cited domain, because that domain is at cap.
2. **"The Vachanas of Akkamahadevi"**, Sahapedia —
   `https://www.sahapedia.org/the-vachanas-of-akkamahadevi-0`. Fetched and read in full.
   Subject test passed; not peer-reviewed, and the page publishes no author byline or date
   that could be extracted, so `publishedDate` is omitted rather than invented. Supplies
   the **sarala / bedagina** distinction — "*sarala* refers to vacanas communicated in
   simple language unlike the *bedagu* form that employs a complex language of 'paradoxes
   and inversions'" — plus roughly 200 vachanakaras whose work survives, around 35 women
   (sharanes) among them, Akkamahadevi's roughly 400 vachanas, and the fact that vachanas
   did not adopt a metre form such as champu or tripadi.
3. **"The Feet of the Jaṅgama. Identity and Ritual Issues among the Vīraśaivas of
   Karnataka"**, *Kervan* 6 (2007) — `https://ojs.unito.it/index.php/kervan/article/view/979`.
   Peer-reviewed, open access, University of Turin. **Abstract only was read** — the PDF
   galley is a scanned Italian-language file that did not convert to text on this machine.
   Cited only for what the abstract states: the Vīraśaivas, also known as Liṅgāyatas, are
   described as a community of more than ten million people in Karnataka and southern
   Maharashtra.
4. **Wikipedia, "Vachana sahitya"** — entity disambiguation only, not research, one link.

**Verification instruments, ban-exempt, deliberately kept OUT of `sources`:**
**Kittel's Kannada–English Dictionary** (DSAL, University of Chicago) was the instrument
for every headword and every affix on this page. Per the BRIEF's mid-batch exemption,
dictionaries are exempt from the 332-URL cross-wave ban and the preferred handling is to
credit them in prose and `structuralLimitations` rather than spend a `sources` slot. The
wave-3 sibling cites the same dictionary; that reuse is deliberate and disclosed.

### What was searched and did not yield

`findpapers.mjs` was run on `vachana literature Kannada study`, `Basavanna vachana poetry
scholarship`, `Kannada bhakti literature plain speech research` and `vernacular poetry
vachana sharana movement study`. Crossref's vachana results are dominated by venues that
index but do not credibly peer-review — AkiNik's *International Journal of Kannada
Research*, IJELS, ACADEMICIA and the *Journal of Asiatic Society for Social Science
Research* all appeared and were all rejected on venue quality, per the BRIEF's warning that
indexing is not peer review. DOAJ returns **nine** articles for "vachana" and none is about
vachanas. Of the legitimate scholarship that exists — the Routledge chapters "The
Twelfth-Century Vachana Movement" and "Bhakti Poetics: An Example from Kannada Vachanas",
the Wiley *Companion to World Literature* chapter on Basavanna, and the University of
Washington Press volume *Bhakti and Power* — **Unpaywall reports every one as closed
access**. journal.fi, books.openedition.org, escholarship.org, shodhganga.inflibnet.ac.in,
core.ac.uk and degruyterbrill.com were all unreachable from this machine (Anubis
bot-challenge, HTTP 403, empty body or connect timeout).

**That is the finding, and it is stated on the page:** a 900-year-old literature with
roughly 21,700 surviving verses has almost no openly readable scholarship, which is exactly
why the one open corpus paper is worth citing.

---

## Vachana quotation: NONE

No vachana is quoted on this page. The Sahapedia article reproduces translations by
Yaravintelimath (2003) and others; those are modern copyrighted translations and are not
reproduced here, and the underlying Kannada text of any individual vachana could not be
independently verified against an edition this machine could open. Per the assignment, the
lines on the page are therefore **original**, written in plain modern Kannada and verified
word by word. The vachana tradition is used as a documented precedent for plainness, not as
a quotation source.

---

## Kannada ledger — 21 drafted, 12 published, 9 cut

Method: every content word had to return a Kittel headword whose **first** sense matches the
use on the page, and every inflection had to map to an affix entry in the same dictionary.

### Published (12)

| # | Line | Register | Gloss | Attestation |
|---|---|---|---|---|
| 1 | ನೀನು ನನಗೆ ಬೇಕು. | ನೀನು | "I want you." | ಬೇಕು p.1218 "it is wished, desired… it is wanted" |
| 2 | ನಿನ್ನ ಮೇಲೆ ನನಗೆ ಪ್ರೀತಿ ಇದೆ. | ನೀನು | "I have love for you." | ಪ್ರೀತಿ p.1117 "affection, love"; ಮೇಲೆ p.1376 "for, toward" |
| 3 | ನಿನ್ನ ಸಂಗಡ ಇರಬೇಕು. | ನೀನು | "I want to be with you." | ಸಂಗಡ p.1559 "together with, with"; ಇರು p.201 "to be" |
| 4 | ನಾನು ನಿನ್ನನ್ನು ಬಯಸುತ್ತೇನೆ. | ನೀನು | "I desire you." | ಬಯಸು p.1143 "to desire, to wish; to long for"; affix -ಏನೆ p.305 |
| 5 | ನೀನು ನನ್ನ ಗೆಳತಿ ಆಗುತ್ತೀ? | ನೀನು | "Will you become my girlfriend?" | ಗೆಳತಿ p.599 "a female friend"; affix -ಈ 7 p.211 |
| 6 | ನೀನು ನನ್ನ ಗೆಳೆಯ ಆಗುತ್ತೀ? | ನೀನು | "Will you become my boyfriend?" | ಗೆಳೆಯ p.600 "a male friend" |
| 7 | ನಾನು ನಿನ್ನನ್ನು ನಂಬುತ್ತೇನೆ. | ನೀನು | "I trust you." | ನಮ್ಬು p.891 "to confide, to trust… to rely on" |
| 8 | ನೀನು ನನ್ನ ಕನಸು. | ನೀನು | "You are my dream." | ಕನಸು p.380 "a dream" |
| 9 | ನೀವು ನನಗೆ ಬೇಕು. | ನೀವು | "I want you." | as #1 |
| 10 | ನಿಮ್ಮ ಮೇಲೆ ನನಗೆ ಪ್ರೀತಿ ಇದೆ. | ನೀವು | "I have love for you." | as #2; ನಿಮ್ಮ per ನಿಮ್- p.921 |
| 11 | ನೀವು ನನ್ನ ಗೆಳತಿ ಆಗುತ್ತೀರಿ? | ನೀವು | "Will you become my girlfriend?" | affix -ಈರಿ 1 p.214, "the plural of -ಈ 7" |
| 12 | ನಿಮ್ಮ ಸಂಗಡ ಬದುಕಬೇಕು. | ನೀವು | "I want to live with you." | ಬದುಕು p.1138 "to live, to be alive" |

Affixes, each its own dictionary entry with worked examples: **-ಏನೆ** p.305 (ತರುತ್ತೇನೆ "I
bring", ಮುಗಿಸುತ್ತೇನೆ, ನಡೆಯುತ್ತೇನೆ); **-ಈ 7** p.211 (ಮಾಡುತ್ತೀ, ತಿಳಿಯುತ್ತೀ, ಕಲಿಯುತ್ತೀ);
**-ಈರಿ 1** p.214, "the plural of -ಈ 7" (ಹೋಗುತ್ತೀರಿ, ಇರುತ್ತೀರಿ). Accusative: the ನಿಮ್-
entry p.921 lists "accusative: ನಿಮ್ಮ, ನಿಮ್ಮನು, ನಿಮ್ಮನ್ನು", and ನಿನ್ನನ್ನು appears in the
dictionary's own worked examples at ಅಕ್ಕಱತೆ p.6 and ಅವಚು p.119.

### Cut (9), each with the gloss that killed it

| Word / line | Wanted | Kittel returned | Verdict |
|---|---|---|---|
| ಒಲವು | "love" | p.331: "pleasure, complacency; kindness, favour, grace" — no sense of love | CUT |
| ಆಸೆ | "longing" | p.179: the headword's own gloss is ಪಾಲಿ, ದಿಕ್ಕು — a quarter, a direction; the sense "wish, desire" only arrives via ಆಶೆ p.176, where it is followed immediately by "lust" | CUT |
| ಸ್ನೇಹ | "affection" | p.1686: sense 1 is "oiliness, unctuousness, fattiness, greasiness"; "love, affection" is sense 5. Same failure class as wave 3's ಬಾಳು | CUT |
| ಒಟ್ಟಿಗೆ | "together" | no headword; ಒಟ್ಟು p.314 is a verb, "to make one, to join; to pile up" | CUT |
| ಬೇಸರ | "without you I am low" | no headword at all | CUT |
| ಬಾಳ್ವೆ | "a life together" | no headword at all | CUT |
| ಜೊತೆಗಾರ | "companion" | no headword at all | CUT |
| ಪ್ರತಿ ದಿನ | "every day" | ಪ್ರತಿ p.1097 leads with "towards, to; against, in opposition to"; "in each" sits far down the sense list | CUT |
| ಖುಷಿ | "happiness" | no headword — it is a Persian/Urdu loan the dictionary does not enter | CUT |

Also refused: the colloquial interrogative particle **-ಯಾ** (ಆಗುತ್ತೀಯಾ). The wave-3 sibling
could not attest it in Kittel and neither could this run, so both question lines rely on
intonation. This is conservatism, not a claim that -ಯಾ is wrong — it is what a great many
Kannada speakers would actually say.

Two orthography notes carried into `structuralLimitations`: Kittel writes a nasal before a
stop as a conjunct (ನಮ್ಬು, ನಿಮ್ಮನ್ನು) where modern standard Kannada uses anusvara (ನಂಬು),
and it enters ಹೇೞು with the obsolete letter ೞ. The published lines use modern orthography.

**No native Kannada speaker reviewed these lines.**

---

## Phase 5 — Links and Strapi

- Internal: `/love-gf` (primary — the "love proposal" ask is the girlfriend/boyfriend ask),
  `/proposal` (mandatory, placed after the section that establishes the marriage case),
  `/templates`. Three links, all relative, all in `TEMPLATE_LINKS`.
- `templateUrls`: `["/love-gf", "/proposal"]`.
- `categorySlug`: `modern-romance` (a lines/quotes page, no festival).
- Slug checked free against Strapi on 2026-09-24: 0 results.

## Honesty constraints applied

- No price, free tier or paid tier is stated or implied anywhere.
- Every first-party figure is labelled **in body prose** as platform-wide across 21 page
  types, or as sampled on the named template. Nothing is attributed to proposal pages.
- No Kannada-speaker population figure appears. The Data in Brief paper states "> 50.8
  million people" but attributes it to another work and gives no date for the figure, so it
  was **not used**.
- No competitor is linked, cited or paraphrased.
