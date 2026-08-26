# Research brief — `bhai behan shayari raksha bandhan`

Batch `2026-08-25-rakhi-2027` · slug `bhai-behan-shayari-raksha-bandhan`
Source lane assigned: **A (linguistics) then F (media & data)**.
Slug check: `filters[slug][$eq]=bhai-behan-shayari-raksha-bandhan` → `total: 0`. Free.

---

## Phase 1 — SERP teardown

**WebSearch was exhausted (200/200).** One call was attempted and refused. Recorded in
`honestAssessment`, not `failed`, per batch instruction.

**Instrument used: Brave Search, `country=in`.** 429 on most first attempts; cleared on
retry with rotated User-Agent and 6–15s backoff. All four keyword SERPs returned HTTP 200
and coherent, checkable Indian result sets.

**Bing was run as a control and discarded.** Three queries returned HTTP 200 but the
result-heading extraction yielded **zero URLs** on all three — the markup did not match any
result pattern, so the "identical top-10" test could not be executed at all. An extractor
returning nothing is not evidence of modifier-stripping *or* of good behaviour, so Bing
contributed nothing either way and is excluded from every conclusion below. The batch brief's
prior finding (Bing drops language/modifier tokens and serves a cached head-term SERP) stands
un-refreshed.

### Top 10 for `bhai behan shayari raksha bandhan` (Brave IN, junk filtered)

Pinterest pins, a Facebook video and an `india.com` homepage hit were filtered out before
ranking; they carry no analysable page.

| # | URL | What it is |
|---|---|---|
| 1 | igp.com/blog/raksha-bandhan-wishes-in-hindi | **Competitor** (named in competitors.md). General "wishes in Hindi", not bhai-behan |
| 2 | navbharattimes.indiatimes.com/…/articleshow/123187800.cms | Publisher listicle, "quotes for brothers and sisters" |
| 3 | indianshayaris.com/raksha-bandhan-shayari | **Competitor** (shayari aggregator). "230+ Shayari, Wishes & Quotes" |
| 4 | fnp.com/quotes/raksha-bandhan | **Competitor** (Ferns N Petals) |
| 5 | dilsedeshi.com/hindi-lok/raksha-bandhan-shayari-hindi | Shayari aggregator |
| 6 | herzindagi.com/…/article-298971 | Publisher, "to share with your brother and sister" |
| 7 | tv9hindi.com/…/3419464.html | Publisher, "sister brother heart touching status" |
| 8 | navbharattimes.indiatimes.com/…/articleshow/112594004.cms | Publisher, "to share with your brother and sister" |
| 9 | timesnowhindi.com/…/article-112556071 | Publisher, "bhai behen shayari … raksha bandhan shayari 2 line" |
| 10 | navbharattimes.indiatimes.com/…/articleshow/112567021.cms | Publisher, "for little brother and sister" |

Pages 1, 3 and 4 are competitors under `references/competitors.md` (gifting retailers and
shayari/wishes aggregators) and are therefore un-citable. They were read for research only.

### What the top pages actually are

Two were fetched in full (`indianshayaris.com`, `timesnowhindi.com`). Both are the same
artefact:

- **An undifferentiated couplet pool.** indianshayaris.com advertises "230+" pieces under
  stacked H2s that are just keyword variants of each other (`Raksha Bandhan Shayari in Hindi`,
  `Raksha Bandhan Shayari 2 Line`, `Happy Raksha Bandhan Shayari`). timesnowhindi.com runs a
  numbered list 1)…n) with no structure at all.
- **Zero form analysis.** Neither page names a single technical term — no *sher*, *matla*,
  *radif*, *qaafiya*, *beher*. Grep for all five across both pages: no hits. The couplets are
  presented as anonymous, undated, unattributed text.
- **One direction at a time, despite the framing.** Every piece is addressed *to* somebody —
  "प्यारे भैया", "ओ बहना", "सुन मेरे भाई". The pages are titled "for brother **and** sister"
  but nothing in them is written *as* a pair. The bhai lines and the behan lines sit in one
  bucket; no piece is jointly voiced.
- **No transliteration, no English sense line.** Devanagari only. A reader who does not read
  Devanagari gets nothing.
- **No first-party data, no dates, no author expertise, no sources.** timesnowhindi carries a
  byline (सृष्टि, updated Aug 19 2024) and nothing else.

### The direct evidence that the cluster is one keyword

The position-9 result's own URL slug is:

```
shayari-on-brother-sister-bond-best-bhai-behen-shayari-in-hindi-
raksha-bandhan-shayari-2-line-status-hindi-quotes-article-112556071
```

One publisher page targeting `bhai behen shayari in hindi` **and**
`raksha bandhan shayari 2 line` in a single slug. The publishers do not split these.

---

## Phase 1b — the clustering decision (assigned deliverable)

Rule applied: **3+ shared URLs in the top 10 = one keyword.** Exact-URL matching, host and
path normalised, trailing slash stripped, junk hosts removed before ranking.

### Overlap matrix — shared URLs in the top 10 (Brave, country=IN, 2026-08-26)

|   | A `bhai behan shayari raksha bandhan` | B `raksha bandhan shayari 2 line` | C `raksha bandhan par shayari` | D `raksha bandhan wishes shayari` |
|---|---|---|---|---|
| **A** | 10 | **3** | **3** | 2 |
| **B** | **3** | 10 | **5** | 2 |
| **C** | **3** | **5** | 10 | **4** |
| **D** | 2 | 2 | **4** | 10 |

Widened to all extracted results rather than the top 10, A∩B, A∩C and A∩D are each 3.

### The shared URLs

**A ∩ B = 3** — igp.com/blog/raksha-bandhan-wishes-in-hindi (A1/B1) ·
navbharattimes …123187800.cms (A2/B3) · indianshayaris.com/raksha-bandhan-shayari (A3/B4).
All three are in A's **top three**, which makes the merge stronger than the bare count: the
overlap is not tail noise, it is the head of the SERP.

**A ∩ C = 3** — the identical three URLs (A1/C2, A2/C4, A3/C6).

**A ∩ D = 2** — navbharattimes …123187800.cms (A2/D1) ·
indianshayaris.com/raksha-bandhan-shayari (A3/D8).

**B ∩ C = 5** — the three above plus sahityarachana.com/2024/08/rakshabandhan-popular-shayari.html
and tophindishayari.in/2026/02/Raksha-Bandhan-Shayari.html.

**C ∩ D = 4** — navbharattimes …123187800.cms · indianshayaris.com/raksha-bandhan-shayari ·
livehindustan.com/astrology/…201754710392726.html ·
livehindustan.com/…top-25-…201723962403920.html.

### Verdict: cancel all three siblings

**B `raksha bandhan shayari 2 line` — CANCEL.** A∩B = 3, at the threshold, and the three
shared URLs occupy A's positions 1–3. Corroborating and stronger than the count: the
position-9 result for A targets *both* keywords in one slug (above). A page that ranks for A
is already the page Google serves for B.

**C `raksha bandhan par shayari` — CANCEL.** A∩C = 3 on the identical three URLs. `par`
("on") is a grammatical particle, not a content modifier — "shayari *on* Raksha Bandhan" and
"Raksha Bandhan shayari" are the same request with a postposition inserted. C∩B = 5 confirms
C sits inside the same cluster from the other side.

**D `raksha bandhan wishes shayari` — CANCEL, on different grounds.** A∩D = 2 is *below* the
threshold, so D does not merge with A on a direct pairwise test. It is cancelled anyway, for
two reasons that are firmer than the rule:

1. **Transitive closure.** C∩D = 4 and A∩C = 3. D is in the same cluster as A by way of C.
2. **It is not a distinct SERP, it is the wishes head term.** D's top 10 is 3 ×
   navbharattimes + 5 × livehindustan — **8 of 10 from two publishers**, all generic
   "wishes / quotes / messages / shayari / status" listicles. The word `shayari` is doing no
   work: it is one token in a bag with four synonyms. This batch has **already published
   `raksha-bandhan-wishes-in-hindi`**, which is the post for that SERP. Writing D would be
   writing a second post for a keyword already served in-house.

**Net: write A only. B, C and D should be removed from the queue, not drafted.** The earlier
consolidation attempt that "died before testing them" was reaching the right answer.

**Standing caveat.** These are Brave-IN results on one date from one location, not
Search Console data. The rule is a heuristic, and A∩B and A∩C sit exactly *at* the threshold
of 3 rather than comfortably past it. What would overturn the B and C verdicts: Search Console
showing the published A post earning impressions on B/C queries at materially different
positions, which would mean Google does separate them. That test is available three months
after A publishes and costs nothing; it is the correct way to settle a threshold call.

---

## Phase 2 — the gap, and the angle

Every page in the top 10 publishes couplets addressed **to** one sibling. The keyword's
distinguishing token is `bhai behan` — the pair as a *unit*. Nobody serves it.

Two independent bodies of work say the pair, not the person, is the right unit:

1. **The sher is structurally a closed two-line unit.** Liboiron's UBC thesis: each couplet of
   a ghazal "is itself a complete text"; "each verse remains an independent description of its
   world". Vedabala & Paul: "every couplet is a little poem by itself and a complete
   statement… Ghazal has tremendous quotability because two lines can make the complete
   statement." **Two lines is two slots.** A sher can therefore hold two voices — one line
   each — and remain complete. This is a property of the form, not a gimmick.
2. **Sibling research analyses the dyad, not the sibling.** Chacko & Mohan apply Collaço et
   al.'s (2021) *framework of dyadic analysis* to five Indian sibling dyads; their finding is
   that siblings "rely substantially on emotional reciprocity, in which reciprocal trust and
   openness build closeness."

So the post's original claim — made by no page in the top 10 — is that **bhai-behan shayari
should be written as a `do-tarfa sher`: line 1 in one sibling's voice, line 2 answering it,
sharing one qaafiya and one radif.** Seven are composed for the post, each labelled with its
qaafiya, radif and which sibling speaks which line, in Devanagari + Roman + an English sense
line, with Nastaliq where the register is Urdu.

**Angle:** wins by being the only post that treats bhai-behan shayari as a reciprocal
two-voice form rather than a couplet pool — grounding the claim in the ghazal's closed-couplet
structure and in dyadic sibling research, and labelling the qaafiya and radif of every piece
so the form is checkable.

### Fan-out sub-queries → H2s

| Sub-query | H2 |
|---|---|
| what is bhai behan shayari / how is it different from a wish | What bhai behan shayari is, and what it is not |
| can two people share one shayari | Why a two-line sher can hold two voices |
| bhai behan shayari in hindi with meaning | Seven do-tarfa shers for bhai and behan |
| shayari in hindi or urdu or roman | Devanagari, Nastaliq or Roman: which one to send |
| brother sister relationship research | What sibling research measures: the pair, not the person |
| how to send raksha bandhan shayari on whatsapp | Where a couplet actually lands |
| when not to send shayari | When a do-tarfa sher is the wrong thing to send |

---

## Phase 0 — first-party data gate

`content/facts.md`, generated 2026-08-25. **No rakhi-specific first-party data exists**
(`rakshabandhanpages` = 3 documents; rakhi template views = 39 of 36,202). No statistic is
computed from n=3 anywhere in this post. The rakhi template's newness is stated qualitatively
in the limits section, which is the honest form of that fact.

Assigned primary fact (lead, first 150 words):
**51.1% of shared pages are opened on a phone (18,497 of 36,202 views) — measured 2026-08-25.**

Supporting: average 12.2 views per created page; 2,973 pages across 15 page types;
44.2% password-protect before sharing (1,315 of 2,973).

All are **platform-wide, not keyword-specific**. Recorded in `auditReport.failed`.

---

## Phase 3 — sources

**Lane A (linguistics) was assigned and is very nearly exhausted.** `aclanthology.org` (8
uses) and `unicode.org` (6) are over the 3-per-domain cap; `lrec-conf.org` sits at 3 and is
full; `aclweb.org` mirrors the same anthology. **`glottolog.org` was the only lane-A
repository with capacity, and it yielded exactly one usable source.**

**Lane F (media & data) was tried next and yielded nothing on subject.** `theweek.in` is at
cap (2). `lokniti.org` failed to fetch (`fetch failed`, PDF endpoint). `sciencedaily.com`,
`themarkup.org`, `pewresearch.org` and `statista.com` have no material on ghazal form, on
Urdu–Hindi register, or on Indian sibling dyads — nothing there passes the subject test for
this post, and anything they do carry about Indian internet use would fail the swap test
instantly.

**So three sources are borrowed from lane E (Indian scholarship) and one from a university
thesis repository (lane B/C territory).** Declared in `auditReport`.

Searches run (DuckDuckGo HTML endpoint, after WebSearch exhaustion and Brave rate-limiting):
`sibling dyad unit of analysis reciprocal relationship study open access` ·
`ghazal autonomous couplet sher independent thematic unity thesis university repository` ·
`sibling relationship reciprocity mutual support brothers sisters India kinship open access journal` ·
`sibling relationship warmth reciprocal both siblings perceptions discrepancy study open access` ·
`ghazal radif qafiya matla sher form Urdu prosody shodhganga thesis` ·
`Hindi Urdu literary register Hindustani shared grammar divergent lexicon vocabulary study` ·
`lokniti CSDS survey youth family relationships report`

**Publisher hosts bot-blocked, as the batch brief warned:** `utppublishing.com` 403,
`tandfonline.com` 403, `columbia.edu` HTML 403 (the PDF path served 200),
`jstor.org` Cloudflare challenge, `mdpi.com` and `open.library.ubc.ca` returned JS shells with
no readable metadata. None of those is cited. `journals.sagepub.com` (at cap 3),
`frontiersin.org`, `arxiv.org`, `pmc.ncbi.nlm.nih.gov` (all CLOSED) and `journals.plos.org`
(banned) appeared in results and were not used.

`rekhta.org` ranked at B7 and was **deliberately rejected**: `competitors.md` lists
"Shayari/wishes aggregators" as competitors. Not cited, not linked, not paraphrased.

### The five sources, all fetched and verified

| # | Source | Domain (prior uses in batch) | Lane | Verified content |
|---|---|---|---|---|
| 1 | Liboiron, Paul Adrien (1989), *The Transformation of Plot in the Couplet of the Urdu Ghazal: An Examination of Narrative*, MA thesis, Department of Asian Studies, University of British Columbia — PDF hosted at columbia.edu | `columbia.edu` (0) | borrowed, thesis repository | "although the ghazal poem consists of a set of couplets, each couplet of a ghazal is itself a complete text"; "The first couplet, or sh'er, is called the **matla**. Both lines of the matla rhyme, setting up the rhyme for the rest of the ghazal. In each subsequent sh'er, the rhyme is suppressed in the first hemistich and reappears in the second" — scheme AA, BA, CA, DA; "The rhyming syllable is called the **qafiya**"; the completing word or words "is called the **radif**"; English analogy "deceive me, believe me, receive me" (qafiya *deceive*, radif *me*); "Each verse remains an independent description of its world"; "It is the ghazal's form and not its content which unifies the ghazal." **Full text read.** |
| 2 | Vedabala, Samidha & Paul, Susmita (2024), "Ghazal: Structure, Themes and Its Styles", *Swar Sindhu: National Peer-Reviewed/Refereed Journal of Music* (UGC CARE listed), ISSN 2320-7175(O), Vol 12 Issue 01, Jan–Jun 2024, Sikkim University | `swarsindhu.pratibha-spandan.org` (0) | borrowed, lane E | "every couplet is a little poem by itself and a complete statement which means if a ghazal has 5 to 8 couplets, each one is complete with itself"; "Ghazal has tremendous quotability because two lines can make the complete statement"; in India the ghazal "has been written in Urdu, Punjabi, Hindi, and Gujrati". **Full text read.** Peer-reviewed. |
| 3 | Glottolog 5.3, languoid records for Hindustani (`hind1270`), Hindi (`hind1269`) and Urdu (`urdu1245`), Max Planck Institute for Evolutionary Anthropology | `glottolog.org` (0) | **A — assigned** | Glottolog 5.3 classifies **Hindustani as a family-level languoid** within Western Hindi, with Hindi and Urdu recorded as **separate member languoids** under it (Wikidata Q11051 / Q1568 / Q1617). Subclassification comments cite Masica 1993 and Kogan 2017. **Record pages read.** |
| 4 | Chacko, Sherin Simon & Mohan, Miriam Priti (2025), "Exploring Effective Communication Dynamics in Young Adult Sibling Dyad Relationships: An Indian Perspective", *International Journal for Multidisciplinary Research*, E-ISSN 2582-2160, Vol 7 Issue 2, March–April 2025, paper IJFMR250239260, Dept of Psychology, CHRIST (Deemed to Be University), Bangalore | `ijfmr.com` (0) | borrowed, lane E | Five Indian sibling dyads (same and different sex), ages 18–30, semi-structured interviews, analysed with Collaço et al.'s (2021) framework of **dyadic analysis**. "siblings rely substantially on **emotional reciprocity**, in which reciprocal trust and openness build closeness"; "**Communication quality, rather than frequency, determines emotional intimacy** among young adult sibling dyads"; humour and avoidance were the common conflict-resolution styles, and humour and empathic understanding "promote emotional equilibrium"; cultural pressures of respect and familial duty shaped communication. Stated limits: convenience sampling, desirability bias, restricted geographic sample, n=5 dyads. **Full text read.** |
| 5 | Law, Cleo & Imran, Mohammad (2024), "Birth Order and Sibling Pairs: A Comparative Study of Older and Younger Siblings' Perceived Sibling Relationship and Differences in Gender Dyads", *The International Journal of Indian Psychology*, ISSN 2348-5396(O), Vol 12 Issue 1, Jan–Mar 2024, DIP 18.01.102.20241201; accepted 20 February 2024 | `ijip.in` (0) | borrowed, lane E | n = **101** young adults of Indian origin (50 older siblings, 51 younger), ages 18–30, Adult Sibling Relationship Questionnaire – Very Short Form; t-test plus one-way ANOVA across gender dyads. "both older and younger siblings reported similar sibling relationships characterized by **low levels of conflict and average levels of warmth**"; "**sister pairs exhibited higher levels of warmth compared to brother-sister pairs**"; sister pairs also perceived higher parental favouritism than brother-sister pairs; mean differences significant at the 0.05 level. **Full text read.** |

No URL is reused; no domain exceeds one use. No generic context statistic (PIB / TRAI /
Census / MEA) is used at all. Zero Wikipedia links in the body and zero Wikipedia entries in
`sources` — `en.wikipedia.org` is at cap 3 in the ledger. Wikipedia appears only as verified
`sameAs` targets in `structuredData`, paired with Wikidata QIDs.

### Subject and swap tests

Sources 1, 2, 4 and 5 pass the **subject test** — two are about the couplet form this post
composes in, two are about Indian brother-sister dyads specifically. Source 3 is about the
Hindi/Urdu register question the post has to resolve to choose a script.

**Swap test — sources 1, 2 and 3 fail it, honestly.** They would sit unchanged in
`raksha-bandhan-shayari-2026-hindi-english` (which is live and works the same ground with
*different* citations — poets.org, thesai.org, revistas.unir.net, akademie-solitude.de,
jals.miard.org, glrjournal.com; none reused here). Sources **4 and 5 pass**: both are
specifically about *dyads and sibling pairs*, which is this keyword's distinguishing token and
would be off-topic in any one-directional sibling keyword in this batch. Recorded in
`auditReport.failed`.

### QIDs verified against the Wikipedia API

`Raksha Bandhan` Q10266 · `Ghazal` Q281111 · `Hindustani language` Q11051 · `Urdu` Q1617 ·
`Hindi` Q1568 · `Devanagari` Q38592 · `Radif` Q6411216 · `Nastaliq` Q1133121.
(`Sher (poetry)` redirects to `Bayt (poetry)` Q2581045 — not used, to avoid a redirect target.)

---

## Phase 4–5 — draft decisions

- Category: `indian-festivals` (batch-wide rule).
- Templates: **both** rakhi pages, `/happy-rakshabandhan-to-brother` and
  `/happy-rakshabandhan-to-sister`, plus `/templates`. This is the one keyword in the batch
  where linking both is *correct rather than contradictory* — the post is explicitly about
  the pair in both directions, so each sibling needs the page that points the other way.
- 3 internal links, all from `TEMPLATE_LINKS`, all placed after the value is established.
- `ItemList` mirrors the seven H3s in order.

## The mandatory structural audit failure

Every one of the seven shers in this post is **agent-written and unattested**. They are not
sourced from any published poet, they carry no provenance, and their metrical claims
(qaafiya and radif labels) are my own analysis, not a scholar's. A Hindi/Urdu-reading human
must sign off on the Devanagari, the Nastaliq, the transliteration and the metre before this
publishes. **This is not closable by re-reading my own work** — the reviewer must be a human
who reads the scripts. Recorded in `auditReport.failed` and left open by design.
