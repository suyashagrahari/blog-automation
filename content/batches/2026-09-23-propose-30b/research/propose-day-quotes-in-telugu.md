# Research brief — `propose day quotes telugu`

Slug: `propose-day-quotes-in-telugu` · Batch `2026-09-23-propose-30b` · Written 2026-09-23
Category `modern-romance` · Templates `/proposal` (mandatory), `/love-gf` (alternative)
Band: 1,000–3,000 EST. Not a measured volume.

Propose Day 2027 verified with `date`: **Monday 8 February 2027**. Rose Day Sunday 7
February 2027, Valentine's Day Sunday 14 February 2027.

---

## Phase 1 — SERP, and what was and was not measured

One WebSearch on 2026-09-23 for `propose day quotes in telugu`. It is **US-served**,
it returned a result list only, and **no page was fetched**. Everything below is the
result list, not a description of page contents.

Result list, in returned order: sakshipost.com (Telugu daily photo gallery),
weddingwire.in ×2, instagram.com, en.wikipedia.org (Propose Day),
in.pinterest.com, tiktok.com, in.brandedpoetry.com, teluguprabha.net.

What that permits me to say, and nothing more:
- The lane is contested by Telugu news publishers (Sakshi, Telugu Prabha) and by
  wishes aggregators, alongside social platforms.
- weddingwire.in and the wishes aggregators are **competitors** under
  `references/competitors.md` (digital-invitation builders and greeting-message
  farms). Not cited, not linked, not read.

**Not measured, and therefore not claimed anywhere in the post:** what any ranking
page contains, how long it is, what data it cites, whether it marks register,
whether it gives transliterations, or where a SubhSandesh page would land. The brief's
"do not claim what you did not measure" rule is binding and this post honours it by
saying nothing about incumbent content.

Recorded in `batchMeta.structuralLimitations`.

## Phase 2 — Gap and angle

**Table stakes** for a `<language> propose day quotes` page: lines in the script, an
ask-for-marriage variant, short card-length lines, the date of Propose Day.

**The gap I can occupy without reading anyone.** Every line on this page is traceable
to a named instrument, and the lines that failed verification are published with their
reasons. That is a claim about my own process, verifiable by the reader against two
public sources, and it needs no knowledge of what anyone else did.

**Fan-out sub-queries the H2s answer** (inferred, not measured — recorded as an audit
failure on item 13):
- what makes a Telugu line correct rather than merely Telugu
- నువ్వు or మీరు, and what the verb does about it
- the lines themselves, by situation
- what got cut and why
- is written Telugu very different from spoken Telugu
- will the script render where I send it
- when a Telugu line on an English page is wrong

**Angle.** Wins by being the only Propose Day page that names the instrument behind
every Telugu line — Gwynn's 1991 dictionary and the 6,465-token UD Telugu treebank —
publishes the 7 lines it cut and why, and frames it with SubhSandesh's platform-wide
48.4% phone-open rate across 56,152 views.

## Cannibalisation — how this differs from the siblings

Siblings in wave 2: `propose-day-quotes-in-hindi`, `-in-marathi`, `-in-bengali`.
Kannada is running in this batch.

| | Hindi / Marathi / Bengali (wave 2) | This post |
|---|---|---|
| Organising principle | Groups **by pronoun** (तुम/आप, तू/तुम्ही, তুই/তুমি/আপনি) | Groups **by situation**; register is a separate H2 |
| Verification method | Hindi blocklist (Marathi); published verb paradigm (Bengali) | Dictionary headword check + treebank token/affix attestation, per word |
| Lane | Regional internet; literary Bengali; Hindi politeness | **Telugu diglossia and the written/spoken gap**, Arden 1905 vs LDC 2018 |
| Sources | arXiv, policyreview, KPMG, ACL Anthology, ccsenet, UCL | archive.org, LDC/UPenn, DSAL/Chicago, UD GitHub, Iowa State repository |
| Line count | 16 / 19 / 14 | **11, from 18 drafted** |

Zero overlap in sources, structure or lane. Different pronoun system (two-way
నువ్వు/మీరు with -తావా/-తారా verb agreement), different incumbents (Telugu dailies).

## Phase 3 — Sources, and the verification method

Research lane assigned: Telugu sociolinguistics — diglossia between formal and spoken
Telugu, and Telugu digital text.

`findpapers.mjs` queries run: `Telugu diglossia grammatical spoken study`,
`Telugu morphology honorifics linguistics`, `Telugu NLP corpus resources study`,
`Dravidian language technology gap research`,
`Telugu language use Andhra Telangana sociolinguistics`. Crossref returned mostly
paywalled Routledge/OUP handbook chapters and a run of predatory-venue hits
(IJRASET, Indian Journal of Science and Technology, journal of critical reviews) —
indexed, not peer-reviewed, not used. Europe PMC returned nothing on-lane, and
Europe PMC / pmc.ncbi.nlm.nih.gov is at the 3-post cap anyway.

Two WebSearch calls spent (of a 5 budget): the SERP pass, and one for an
open-access Telugu diglossia source. A third located the green OA copy of the
treebank paper. Two unspent.

### The five sources, all fetched

1. **Arden, *A Progressive Grammar of the Telugu Language*, 1905** —
   `https://archive.org/details/aprogressivegra00ardegoog`. Full OCR text fetched.
   The Telugu script did not survive the scan (0 codepoints in U+0C00–U+0C7F), so it
   is used **only** for its English prose on the colloquial/grammatical split, never
   for a Telugu form. Quoted phrase verified in the fetched text.
2. **LDC, *Language Specific Peculiarities Document for Telugu as Spoken in India*
   (LDC2018S16), 2018** — PDF fetched and converted. Carries the finding that
   complicated my hypothesis: "Telugu does not have a sharp diglossia between its
   spoken form and its formal written variety." Also the Unicode range and the
   obsolete-codepoint list. It cites Gwynn 1991 and Krishnamurti 1985 as its own
   authorities, which are the two I ended up using.
3. **Gwynn, *A Telugu-English Dictionary*, OUP 1991, via DSAL, University of
   Chicago** — `https://dsal.uchicago.edu/dictionaries/gwynn/`. ~35 headword queries
   run against the live search CGI. Verified: మీరు "personal pron., polite sing. or
   pl. you"; నీవు/నువ్వు one entry, "pron. sing. you"; ప్రేమించు "to love, fall in
   love with"; చేసుకొను "peLLi ~ to marry"; కావాలి with dative "naaku Dabbu ~";
   ఇష్టం, మాట, నిజం, చాలు, మనసు, జవాబు, తోడు, గుండె, జీవితం, ప్రాణం, పెళ్లి.
4. **UD Telugu-MTG treebank** —
   `https://github.com/UniversalDependencies/UD_Telugu-MTG`. train+dev+test fetched
   (6,465 tokens, 1,328 sentences). Hand-annotated from the example sentences of
   Krishnamurti & Gwynn's *A Grammar of Modern Telugu* (OUP 1985), so every sentence
   checked against is a reference-grammar example.
5. **Rama & Vajjala, *A Dependency Treebank for Telugu*, 2018** — green OA at the
   Iowa State University Digital Repository. **Abstract/record only; full PDF not
   fetched.** Peer-reviewed (TLT16). This is the open-access scholarly source.

Cap position at save time: `pmc.ncbi.nlm.nih.gov` at 3; `frontiersin.org`,
`link.springer.com`, `nature.com`, `journals.plos.org`, `doi.org` at 2. None of my
five domains appears on either list, and no URL of mine is in the 194-URL ban list
(the one banned `archive.org` URL is an unrelated Urdu ghazal PDF). `capcheck.mjs`
run at source-selection time and again immediately before saving.

Zero generic context statistics. Zero Wikipedia links in the body.

### The verification standard actually applied

For every line: **each content word must be a Gwynn headword**, and **each inflected
form must either appear as a token in the treebank, or be an affix pattern attested
there applied to a stem Gwynn lists.** Neither → cut.

Attestation counts pulled from the treebank: నువ్వు 29, మీరు 54, నేను 82, నాకు 64,
మీకు 15, నిన్ను 7, నన్ను 19, మిమ్మల్ని 4, నాతో 14, నీతో 1, మీతో 1, మాట 15, ఇది 24,
నిజం 2, చాలు 2, ఇష్టం 1, పెళ్ళి 2, జవాబు 3, గుండె 1, ఉంటారు 2, వస్తావా 3.

Affix patterns attested: 1sg present-progressive -తున్నాను ×6 forms
(చూస్తున్నాను, వస్తున్నాను, నమ్ముతున్నాను …); 2sg interrogative -తావా ×4
(వస్తావా, తాగుతావా, చేయగలుగుతావా, కొడతావా); polite interrogative -తారా ×2
(ఇస్తారా, వెళ్తారా); polite imperative -ండి ×38; bare-stem 2sg imperative
(వెళ్ళు, చెప్పు, రా).

Structural models used for whole lines:
- sent 831 `ఇటువంటి గొడవ నాకు ఇష్టం లేదు` → positive model for line 1.
- sent 1019 `నాకు ఈ డబ్బు చాలు` → model for line 11.
- imperative pair `నువ్వు వెళ్ళు` / `మీరు వెళ్ళండి` → the register demonstration.

## The line ledger — 18 drafted, 11 published, 7 cut

**Published (11).** నువ్వు నాకు ఇష్టం · నాకు నువ్వు కావాలి · నేను నిన్ను
ప్రేమిస్తున్నాను · నాతో వస్తావా? · నన్ను పెళ్లి చేసుకుంటావా? · మీరు నాకు ఇష్టం ·
మీరు నాతో ఉంటారా? · నన్ను పెళ్లి చేసుకుంటారా? · ఇది నా మనసులో మాట · నా మాట నిజం ·
నాకు నువ్వు చాలు.

**Cut (7), with reason:**

| Line | Reason |
|---|---|
| నీ జవాబు కోసం ఎదురు చూస్తున్నాను | ఎదురుచూడు returns no Gwynn headword; only ఎదురుగా is in the treebank. The compound could not be verified. |
| నా జీవితానికి నీ తోడు కావాలి | జీవితం is a headword but the dative జీవితానికి is neither a treebank token nor a headword. |
| నిన్ను ఎప్పటికీ వదలను | వదలను unverifiable in either instrument. |
| నువ్వే నా ప్రాణం | Emphatic నువ్వే unattested; and the phrasing is film-dialogue register, barred by the brief. |
| నా గుండెలో నువ్వే ఉన్నావు | గుండె appears only bare; the locative గుండెలో is unverified, plus నువ్వే again. |
| నువ్వు లేకుండా నేను ఉండలేను | Two treebank sentences (77, 1030) pair నువ్వు with లేను, a form that is 1sg everywhere else in the same corpus. Agreement unresolvable from the corpus, so the line goes rather than being guessed. |
| మిమ్మల్ని ప్రేమిస్తున్నాను | Line 3 with the pronoun swapped. It would pad the count, so it appears in the register H2 as a worked derivation instead. |

Unresolved orthographic variation, disclosed: Gwynn's headword is **పెళ్లి**; the
1985 grammar examples in the treebank write **పెళ్ళి**. The page uses the dictionary
headword.

**No Telugu line here is taken from any competitor page, any film lyric, or any
modern poem.** All are original, built from verified components.

## Phase 6 — audit

48 passed, 2 failed, disjoint, sum 50.

- Item 2 ("at least one claim none of the top 5 pages make") — **failed**: no
  incumbent page was fetched, so the claim cannot be made.
- Item 13 ("H2s map to the fan-out sub-queries identified in Phase 2") — **failed**:
  sub-queries were inferred, not measured.

Everything else, including the native-speaker gap, the missing proposal-specific
data, the empty pricing block and the abstract-only read of source 5, is recorded in
`batchMeta.structuralLimitations`, not in `failed`.

## Honest position

This is a copy-text query with near-zero conversion — the searcher takes a line and
leaves — so the page is a visibility asset judged on impressions, not signups. The
February Telugu SERP is an annual news cycle held by publishers far above this
domain's authority: **target position 6–10, not 3**, over months rather than weeks.
The page's single biggest weakness is that no native Telugu speaker has read the
lines.
