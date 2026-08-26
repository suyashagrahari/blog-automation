# Research brief — `raksha bandhan letter for brother`

Slug: `raksha-bandhan-letter-for-brother` · Batch: `2026-08-25-rakhi-2027`
Source lane: **B (UK/EU theses), then C (US repositories)**
Primary first-party fact: median 6.9 h between a page's first save and its last edit (n=931, /love-gf)

## Phase 0 — Data gate

`content/facts.md` refreshed 2026-08-25 (17 facts). **No rakhi-specific first-party data exists**:
`rakshabandhanpages` = 3 documents, rakhi template views = 39 of 36,202 (0.1%). No statistic was
computed from it. Five platform-wide facts are used (6.9 h median edit gap, 99.4% publish rate,
51.1% phone-open, 12.2 avg views, 931 /love-gf pages). The platform-vs-keyword weakness is recorded
in `auditReport.failed`.

## Phase 1 — SERP teardown

**WebSearch refused: 200/200 for the session.** Fallback = **Brave Search, `country=in`** (HTTP 200,
coherent English set). Every article result was then fetched directly and measured, so the numbers
below are first-hand; only the rank order is Brave's rather than Google's.

Brave top 10 (IN): floweraura.com/blog/article/rakhi-message-for-brother · healthymaster.in ·
reddit.com/r/indiasocial · youtube · poojaaarti.com · brainly.in · hindi.asianetnews.com ·
oneindia.com · imnepal.com · pinterest — then phool.co, twinkl.co.in, lettersinenglish.com,
askfilo.com, igp.com.

| Page | Words | Heading shape | Direct answer? | Data / dates | Format | Optimising for |
|---|---|---|---|---|---|---|
| floweraura.com/blog `rakhi-message-for-brother` | ~854 | no server-side H tags | No | none | no table, no FAQ schema | gift funnel |
| healthymaster.in `raksha-bandhan-letter-for-brother-2023` | ~1,425 | H1 + 2 letter H3s + 3 gift H3s | No | year in title only | no table, no FAQ schema | dry-fruit hampers |
| poojaaarti.com `heartfelt-raksha-bandhan-letter-for-brother` | ~2,186 | H1 + 100/200/300-word letters + "5 points" | No | none | no table, no FAQ schema | ad inventory |
| phool.co `how-to-write-a-heartfelt-rakhi-letter` | ~919 | Importance / Tips / Sample / Takeaways | Partly | none | no table, no FAQ schema | incense shop |
| imnepal.com `raksha-bandhan-letter-brother` | ~1,468 | 6 numbered H2 + 3 sample H3 + FAQ | Partly | 1 date | **only FAQPage schema in the set** | ad inventory |
| oneindia.com `rakhi-2023-…-check-samples` | ~1,809 | four H1s, all "Sample Letter" | No | 2023 stamp | no table, no schema | news recirculation |
| lettersinenglish.com `…cousin-brother` | ~244 | H1 + one sample | Yes (one sample) | none | none | school-assignment long tail |

Zero tables across all seven. Zero citations. Zero numbers of any kind. One FAQPage schema.
**Every page hands over a finished letter to copy.**

**Intent split worth naming:** brainly.in, askfilo.com, twinkl.co.in and lettersinenglish.com are
school-assignment intent ("write a letter to your brother inviting him to celebrate Raksha
Bandhan"). This post deliberately does not serve that half, and that is recorded in the audit.

## Phase 2 — Gap analysis

**Table stakes:** what to write; sample letter(s); a length cue; long-distance variant; the emotional
register; the 2027 date.

**The gap:** nobody teaches *structure*. Every page supplies the artefact and none supplies the
method, so a reader who wants their own letter leaves with someone else's. Nobody addresses which
memory to pick, how long the letter should be against what it can carry, how long the writing
actually takes, or what a letter cannot do.

**Stale data:** oneindia carries a 2023 stamp; healthymaster carries 2023 in the slug; poojaaarti
was refreshed Dec 2024. No page cites anything datable.

**Fan-out sub-queries → H2s:** what a letter does that a wish cannot · the six-part structure · how
long should it be · which memory to choose · a worked example · what a letter cannot fix · paper vs
page · when to start for 2027.

**Angle:** wins by being the only post that refuses to hand over a letter to copy — a six-part
structure, a 350–500 word target, and a memory-selection rule — using the 6.9 h median edit gap
(n=931) as evidence that this is letter behaviour, not greeting-card behaviour.

## Differentiation vs `what-to-write-in-raksha-bandhan-card`

**Line held.** That post is **situation triage for a short card**: six *relational* cases (barely
know them, unnamed falling-out, first rakhi after a death, no-contact sibling, English-to-Hindi,
nothing new to say) and the decision of *what* to say. This post is **form and structure of a long
letter**: six *sequential parts* of one artefact, a length table, memory selection, a worked example
the reader is told not to copy. No shared H2. No shared source. The card post's angle is *which
line*; this one's is *what shape*.

## Clustering verdicts on the two queued "letter" keywords

**`raksha bandhan letter for brother in gujarati` — CANCEL. Clusters with the existing
`raksha-bandhan-wishes-in-gujarati` post.** Brave IN top 14 returned four URLs that are *already in
that post's own SERP table*: `gujaratiwish.com/raksha-bandhan-wishes-in-gujarati/`,
`gujaratisuvichar.co.in/raksha-bandhan-wishes-in-gujarati/`,
`saralgujarati.in/2024/08/raksha-bandhaan-shayari-status.html`,
`rangilagujarati.com/2021/08/Rakshabandhan-gujarati.html`, plus `wishgujarati.com`. That is 4 shared
URLs against the 3-URL threshold. Positions 1–2 are a translation-memory page and a Pinterest ideas
hub; nothing letter-specific and Gujarati-specific exists. The engine drops the "letter" token
exactly as the brief predicted for language variants. Cheap alternative: add one FAQ to the general
Gujarati post in searcher phrasing ("મારે ભાઈ માટે પત્ર શું લખવો?").

**`raksha bandhan letter for soldiers in english` — do NOT write a new URL; fold into the existing
`raksha-bandhan-wishes-for-soldiers` post.** Against *this* post: 0 shared URLs (5 shared domains
only) → not one keyword with me. Against the soldiers post: `floweraura.com/blog/raksha-bandhan-
wishes-n-messages-for-soldiers` and `bestmessage.org/raksha-bandhan-messages-for-indian-soldiers/`
are both in that post's SERP table, and brainly.in is a shared domain — 2 confirmed exact plus one
domain, i.e. just under the threshold but with the same intent. That post already runs six sender
situations and a "what actually reaches him, and what it costs" channel section, and mentions
"letter" only twice. Recommendation: one H3 on writing an actual posted letter (address format, what
Army Postal Service will and will not carry) plus two FAQs, inside the existing post. The remaining
half of that SERP (lettersinenglish, jyotidehliwal, infinitylearn, YouTube) is school-assignment
intent a commercial blog should not chase.

## Phase 3 — Sources (lane B, then C)

`SOURCES.md` checked before selection. `arxiv.org`, `pmc.ncbi.nlm.nih.gov`, `frontiersin.org`,
`escholarship.org`, `etheses.whiterose.ac.uk` (3/3) and `research.ed.ac.uk` are closed or full;
`ora.ox.ac.uk` and `repository.cam.ac.uk` had **zero** prior uses.

| # | Source | Domain | Lane | Verified stat |
|---|---|---|---|---|
| 1 | Nyssen OP et al., *Does therapeutic writing help people with long-term conditions?*, Health Technology Assessment, 2016-04-01 | ora.ox.ac.uk | B | 14,658 citations screened → 284 full texts → 64 studies (59 RCTs); very little or no evidence of benefit from unfacilitated expressive writing; sole meta-analytic exception inflammatory arthropathies, n=191, SMD −0.61 (95% CI −0.96 to −0.26). **Full-text PDF read.** |
| 2 | Matsumoto N et al., *Repeated retrieval of generalized memories can impair specific autobiographical recall*, 2021-09 | repository.cam.ac.uk | B | Three experiments; retrieval practice of general memories reduced recall of associated specific memories; cue-independent and competition-dependent. **Abstract only.** |
| 3 | Hitchcock C et al., *Autobiographical episodic memory-based training…*, 2017-03 | repository.cam.ac.uk | B | PRISMA review, 15 controlled studies; Memory Specificity Training, concreteness training, Competitive Memory Training. **Abstract only.** |
| 4 | Portocarrero FF et al., *A meta-analytic review of… dispositional gratitude and well-being*, 2020-06-10 | eprints.lse.ac.uk | B | 404 effect sizes, 158 independent samples, N = 100,099; gratitude moderately to strongly correlated with well-being. **Abstract only.** |

Domain counts after appending: ora.ox.ac.uk 1, repository.cam.ac.uk 2, eprints.lse.ac.uk 2. All
within cap.

**Lane C returned nothing usable.** Searched, via OpenAlex OA filtering restricted to
`scholarworks.*`, `digitalcommons.*`, `ir.library.*`, `scholarcommons.*`, `cardinalscholar`,
`deepblue`: "letter writing personal correspondence practice meaning", "gratitude letter
intervention", "self-disclosure written message closeness sibling family", "keepsake objects memory
attachment family heirloom", "handwritten note perceived effort thoughtfulness gift", "sibling
estrangement reconciliation communication", "writing a letter to a family member intervention
forgiveness", "adult sibling relationship closeness communication frequency". Two candidates were
found and both had to be dropped as unfetchable — `discovery.ucl.ac.uk/id/eprint/10118574` and
`deepblue.lib.umich.edu/handle/2027.42/140877` both return a Cloudflare 403, and
`digitalcommons.law.yale.edu/yjlh/vol9/iss2/1` ("Epistolary Justice: The Love Letter as Law") 404s.
Nothing was cited unfetched. Source count is therefore 4 rather than 4–6, recorded in
`auditReport.failed`.

This corroborates the batch note: **there is not a distinct body of topical research behind 47 rakhi
keywords.** What exists for *this* keyword is research on the *form* — written disclosure, memory
specificity — not on rakhi letters.

## Phase 5 — Targeting

- `categorySlug` = `indian-festivals`
- `templateUrls` = `/happy-rakshabandhan-to-brother` (recipient matches: sister → brother),
  `/templates`
- 2 internal links, both after the section that establishes why a reader would want them
  (the paper-vs-page section), with descriptive anchors.
- Honest position stated in the body: **for a 400-word letter, paper is the better artefact and
  SubhSandesh is the weaker one.** The page earns its place only as the on-the-day delivery when the
  siblings are in different cities.
- `structuredData`: `@id`-matched enrichment block on `<canonical>#post` carrying `about`, `mentions`
  and 4 `citation` entries mirroring `batchMeta.sources` one-to-one, plus an `ItemList` mirroring the
  six H3s in order. All five `sameAs` verified against the Wikipedia API with QIDs paired
  (Q10266, Q133492, Q682304, Q8038545, Q2728730).
- Slug verified free: `?filters[slug][$eq]=raksha-bandhan-letter-for-brother` → `total: 0`.

## Phase 6 — Audit summary

47 passed, 3 failed, disjoint, 50 total. Failures: outbound-source count is 4 not 3–6 with the lane-C
shortfall named; the LSE gratitude meta-analysis fails the swap test; first-party facts are
platform-wide rather than rakhi-specific. The Brave-instead-of-WebSearch note sits in
`honestAssessment` as instructed.
