# Research brief — `raksha bandhan wishes in kannada`

- **Slug:** `raksha-bandhan-wishes-in-kannada`
- **Batch:** `2026-08-25-rakhi-2027`
- **Category:** `indian-festivals`
- **Slug availability:** checked 2026-08-25 against
  `strapi.subhsandesh.in/api/articles?filters[slug][$eq]=raksha-bandhan-wishes-in-kannada`
  → `{"data":[],"total":0}`. Free.
- **Volume:** band 2, 300–1,000/mo — **EST**, not TOOL. Modest.
- **Festival dates:** Rakhi 2027 = **Tuesday 17 August 2027** (weekday verified by
  computation). Rakhi 2026 = Friday 28 August 2026 — three days after this batch
  date, so this post cannot serve the 2026 cycle and is written for 2027 and the
  year-round long tail.

---

## Phase 0 — Data gate

`content/facts.md` refreshed 2026-08-25. **There is no rakhi-specific first-party
data**: `rakshabandhanpages` = 3 documents, rakhi template views = 39 of 36,202.
Per the batch BRIEF, no statistic is computed from n=3. The post uses
platform-wide facts, led by the fact assigned to this keyword.

Assigned primary fact: **99.4% of started pages are actually published and shared
(2,956 of 2,973)**.

Supporting facts used: 51.1% of shared-page views are on a phone (18,497 of
36,202); 36,202 recorded views at 12.2 average views per created page; 2,973 pages
across 15 page types.

Honest weakness, recorded in `auditReport.failed`: these are platform-wide, not
Kannada- or rakhi-specific. Re-check when rakhi template usage passes ~500 pages.

---

## Phase 1 — SERP analysis

`WebSearch` for `raksha bandhan wishes in kannada`, 2026-08-25. Nine results. No AI
Overview surfaced, no featured snippet.

Every page below was fetched in full and measured programmatically (word count from
stripped body text; "Kannada glyphs" counts characters in the Unicode Kannada block
U+0C80–U+0CFF, which is the only objective test of whether a page marketed as
"wishes in Kannada" actually contains Kannada).

| # | Page | Words | Kannada glyphs | Where the answer is | Data cited | Format elements | Tone | Actually optimising for |
|---|---|---|---|---|---|---|---|---|
| 1 | `vismaya24x7.com/tag/raksha-bandhan-wishes-kannada/` | 280 | 844 (all site chrome) | **Nowhere — H1 is literally "Nothing Found"** | none | no table, no FAQ, no Article schema, 1 image | n/a — it is a WordPress tag archive with no posts | nothing; it is an empty tag route on a Kannada news portal |
| 2 | Adobe Express "Happy Raksha Bandhan Wishes", reachable on the SERP only as `translate.google.com/translate?u=…adobe.com…&tl=kn` | n/a (proxy) | n/a | English page machine-translated on the fly | none | template gallery | brand marketing | Adobe Express sign-ups. Google surfaced a **proxy translation** of an English page, which is what it does when no native Kannada page is available |
| 3 | `filmibeat.com/…happy-raksha-bandhan-2023-best-20-wishes-in-english-tamil-hindi-kannada-telugu-and-malayalam…` | 2,060 | 770, split across **six** languages | ~20 wishes total, so roughly 3 in Kannada, below a slideshow-style intro | none | 72 list items, 49 images, no table, no FAQ, no Article schema | third person, entertainment-portal register | pageviews across six language queries at once; **title stamped 2023** |
| 4 | `joliecarte.com/en/kannada-language-raksha-bandhan-wishes-in-kannada/125041` | 391 | **0** | no wishes on the page at all | none | card widget, no table, no FAQ | generated marketing copy | free-card signups. Titled "wishes in Kannada" with **zero Kannada characters** |
| 5 | `pinterest.com/ideas/raksha-bandhan-in-kannada/909289501861/` | image board | n/a | n/a | none | pin grid | n/a | Pinterest's own idea feed. **A UGC pin board on page one is the clearest possible signal of a thin SERP** |
| 6 | `kannadaquotes.net/raksha-bandhan-wishes-quotes-in-kannada.html` | 2,138 | **3,876** | wishes start high; the strongest page here | none | 22 list items, 13 images, no table, no FAQ schema, no ItemList, no Article schema | warm, Kannada-first | Kannada wishes long tail. **Title says 2025** — stale by this batch date |
| 7 | `99pandit.com/blog/happy-raksha-bandhan-wishes/` | 4,557 | **0** | English wishes, answer-first | none | 54 list items, Article schema, no table, no FAQ schema | brisk listicle | generic "raksha bandhan wishes" — **off-intent for this query, zero Kannada** |
| 8 | `brands.live/template/raksha-bandhan-kannada-greeting-101646` | template page | image only | n/a | none | design template | n/a | Brands.live app installs |
| 9 | `kanndaquotes.weebly.com/home/raksha-bandhan-wishes-quotes-in-kannada-download-free` | **66** | **0** | no wishes; it links out to another site | none | one table, 6 list items | one paragraph, typo in the H2 | nothing. **A free Weebly subdomain, 66 words, last-dated 2020, on page one** |

### What the measurement establishes

1. Of the seven text pages on page one, **three contain zero Kannada characters**
   (joliecarte, 99pandit, weebly), and one contains none of its own (vismaya's 844
   glyphs are the news portal's navigation, not wishes).
2. **Exactly one page — kannadaquotes.net — carries a substantial body of Kannada
   script.** It is titled 2025 and has no schema, no table and no FAQ.
3. Position 1 is an **empty tag archive whose H1 reads "Nothing Found"**.
4. Position 2 is served through a **`translate.google.com` proxy**. Google chose a
   machine translation of an English Adobe page over any native Kannada page.
5. **No page on the SERP has:** a comparison table, FAQPage markup, an ItemList,
   any cited third-party source, or any 2027 date.

This is the weakest SERP found anywhere in the batch, and the weakness is
measurable rather than impressionistic. It is also a modest prize: EST volume is
band 2 (300–1,000/mo). Cheap win, not a big one.

---

## Phase 2 — Gap analysis

**Table stakes** (present on the pages that serve the query at all): wishes for a
brother; wishes for a sister; a short "what is Raksha Bandhan" explainer;
WhatsApp/status framing; a copy-paste-shaped layout.

**The gap — and it is a linguistic one nobody on page one addresses.**

Kannada has **no age-neutral word for brother or sister**. You choose ಅಣ್ಣ (*anna*,
elder brother), ತಮ್ಮ (*tamma*, younger brother), ಅಕ್ಕ (*akka*, elder sister) or
ತಂಗಿ (*tangi*, younger sister). The elder/younger split is inherited from
Proto-Dravidian, not a modern politeness convention (Smirnitskaya 2023 reconstructs
Proto-South-Dravidian *akka* from Tam. *akkā*, Mal. *akka*, Kan. *akka*, Bad.
*akka*, and shows that borrowing into this subsystem began from the *elder*-sibling
terms while younger-sibling terms resisted it).

The practical consequence: **a generic Kannada rakhi wish is not really writable.**
A Hindi wish can say *bhai*; a Kannada wish has to commit. Every page-one result
either ignores this (dumping an undifferentiated list) or sidesteps it by writing in
English. Not one of them sorts wishes by kinship term. That is the post's spine.

**Second gap — script versus transliteration.** The pages either give Kannada script
with no Latin version or Latin/English with no script. The research says both are
needed: social-media users of Dravidian languages "often use the Latin script for
typing in these languages due to its ease of use and accessibility in handheld
devices and computers" (Chakravarthi et al. 2022), and Kannada is phono-syllabic
enough that dedicated input methods are an active research problem (Dixit 2022).
So the reader needs the script to send and the transliteration to type.

**Stale data:** kannadaquotes.net is titled 2025; filmibeat is titled 2023; the
Weebly page's most recent year is 2020. Nothing on the SERP mentions 2027.

**Unanswered questions:** which term to use for a cousin or a bhabhi; whether
Kannada script will render on the recipient's phone at all; whether Raksha Bandhan
is even the August festival that matters in a given Karnataka household.

**Fan-out sub-queries** → became H2s or FAQs:
- what is the Kannada word for brother / sister
- raksha bandhan wishes for anna / tamma / akka / thangi
- how to write raksha bandhan in Kannada
- how to type Kannada on a phone
- rakhi wishes in Kannada text copy paste
- raksha bandhan date 2027
- Kannada rakhi wishes for a sibling living abroad
- is Raksha Bandhan celebrated in Karnataka

**Angle (`batchMeta.angle`):** wins by being the only page that sorts Raksha Bandhan
wishes by the Kannada kinship term the language forces you to choose — anna, tamma,
akka, thangi — giving every wish in Kannada script *and* transliteration, where
three of the seven text results on page one contain no Kannada characters at all,
and grounding the send-it decision in 2,973 SubhSandesh pages of which 99.4% were
actually published and shared.

---

## Phase 3 — Sources

Searched the **phenomenon**, not the festival. Query terms used:
`Kannada low-resource language code-mixed social media dataset`,
`Kannada script transliteration Roman input digital typing study`,
`Indian language digital content availability gap Kannada web underrepresented`,
`Dravidian kinship terminology elder younger sibling distinction`,
`emotional resonance first language versus second language`,
`thesis Kannada Karnataka kinship siblings ritual` (across
`etheses.whiterose.ac.uk`, `ora.ox.ac.uk`, `discovery.ucl.ac.uk`,
`research.ed.ac.uk`).

### Lane compliance — this changed mid-run

`SOURCE-ALLOCATION.md` was written by the orchestrator after this agent had already
verified its shortlist. It **closes `arxiv.org`, `pmc.ncbi.nlm.nih.gov` and
`frontiersin.org` to everyone** for the rest of the batch, and assigns language
keywords to **Lane A (linguistics)** — `aclanthology.org` (max 3), `unicode.org`,
`glottolog.org`, `lrec-conf.org` — with **Lane B (UK/EU theses)** for the cultural
half.

Two verified sources were therefore **dropped and replaced**:

- ~~Chakravarthi et al., DravidianCodeMix (`PMC9388449`)~~ — PMC is closed. Its
  load-bearing claim (Kannada written in Latin script on social media) turned out to
  be stated more precisely in the **KanCMD full PDF**, which is Lane A. Net gain, not
  a compromise.
- ~~Dixit, Kannudi (`arXiv:2301.00836`)~~ — arXiv is closed. Replaced by the
  **Unicode Kannada code chart**, which supports the font-rendering claim more
  directly than an input-method paper did.

Lane B produced nothing usable: the nearest hit was a 1978 Durham thesis on kinship
and ritual in a **Tamil Nadu** microregion — neither Kannada nor Raksha Bandhan.
Per `SOURCE-ALLOCATION.md`'s own instruction, the post ships with four topical
sources rather than padding, and the gap is recorded in `auditReport.failed`.

Every source below was fetched and the quoted claim located in the fetched text.

| # | Source | Lane | Type | Claim used | Subject test | Swap test |
|---|---|---|---|---|---|---|
| 1 | Smirnitskaya, "Nominations for siblings: Proto-Dravidian reconstruction and borrowability", *Journal of Language Relationship* 21(3–4): 201–223, 2023 — [PDF](https://www.jolr.ru/files/%28341%29jlr2023-21-3-4%28201-223%29.pdf) | A (borrowed — a linguistics journal not on the lane list) | peer-reviewed, open access, **full PDF read** | Proto-South-Dravidian *akka* 'elder sister' reconstructed from Tam. *akkā*, Mal. *akka*, Kan. *akka*, Bad. *akka*; borrowing in the sibling subsystem started from elder-sibling terms, while younger-sibling terms resisted and preserved archaic features | **PASS** — Dravidian sibling terms | **PASS** — Gujarati and Punjabi are Indo-Aryan; unusable by the sibling agents |
| 2 | Hande, Priyadharshini & Chakravarthi, "KanCMD: Kannada CodeMixed Dataset", PEOPLES workshop, COLING, 2020-12 — [ACL Anthology](https://aclanthology.org/2020.peoples-1.6/) | **A** | peer-reviewed workshop, open access, **full PDF read** | 7,671 code-mixed Kannada YouTube comments, 64,997 tokens, 8,472 sentences; six observed code-mixing patterns, one of which is "only Kannada written in the Latin script"; Kannada called "morphologically rich and under-resourced" and "a phonemic abugida written from left to right" | **PASS** — Kannada on social media | **PASS** |
| 3 | *The Unicode Standard* v17.0, Kannada code chart — [U+0C80–U+0CFF](https://www.unicode.org/charts/PDF/U0C80.pdf) | **A** | standards body, open | Kannada occupies the Unicode range U+0C80–U+0CFF, so a device renders it only if it carries a font covering that block | **PASS** — the script | **PASS** — a different language means a different block |
| 4 | Glottolog 5.3, Kannada — [nucl1305](https://glottolog.org/resource/languoid/id/nucl1305) | **A** | scholarly reference database, open | Kannada = South Dravidian; ISO 639-3 `kan`; AES status "not endangered"; statutory provincial language in Karnataka since the 1950 Constitution, Schedule VIII | **PASS** — the language | **PASS** |
| 5 | Kannada Wikipedia, `Special:Statistics` (live) | — | primary measurement | 35,663 Kannada articles against 7,230,380 English — 0.49%, roughly 1 per 203; behind Tamil (189,729), Hindi (170,996), Telugu (128,028), Marathi (102,831) and Malayalam (88,622). Retrieved 2026-08-25 via the MediaWiki `siteinfo` API | **PASS** — quantifies the Kannada content gap | **PASS** — the figure is Kannada's |

**Counts.** 5 sources; 4 pass the subject test, all four about the Kannada language.
2 are peer-reviewed and both were read in full PDF. **Zero** government/context
statistics — no PIB, TRAI, Census, India Post or Drik Panchang. **Zero** competitor
links. Wikipedia: one link, a live statistics page rather than an entity article,
recorded as a failure in the audit.

**Domain counts after the swap** (per post, across the batch, re-counted last at
2026-08-25): `unicode.org` 2, `jolr.ru` 1, `glottolog.org` 1, `kn.wikipedia.org` 1
— all well inside cap. **`aclanthology.org` is at 4 and therefore one over**, shared
with `raksha-bandhan-2027-quotes`, `raksha-bandhan-wishes-in-hindi` and
`raksha-bandhan-wishes-in-punjabi`; all four use different URLs. That count rose by
concurrent writes after this post's shortlist was fixed, and it rose partly *because*
the lane closure forced this post off arXiv and PMC onto its lane's one viable host.
KanCMD was kept rather than swapped: it is the only Kannada-specific corpus paper in
Lane A, it carries both load-bearing claims on the page, and `lrec-conf.org` — the
lane's only other proceedings host — has no Kannada equivalent. Recorded in
`auditReport.failed` with the note that the orchestrator should decide which of the
four posts gives up the domain. Dropping arXiv and PMC did remove this post from two
domains that are 8-posts and 5-posts over cap batch-wide, so the net movement is
favourable.

**Batch uniqueness.** `content/batches/2026-08-25-rakhi-2027/blogs/` was empty when
the shortlist was drawn, and re-checked after eight sibling files had landed. **All
five final URLs are unique to this post.** Four are Kannada- or Dravidian-specific
by construction and cannot be reused by the Gujarati or Punjabi agents; the fifth is
language-scoped for the same reason.

**Note for the orchestrator.** `SOURCES.md` was deliberately **not** appended to.
This agent's brief restricts it to two output paths, and `SOURCE-ALLOCATION.md`
already records that the append-only ledger failed under concurrency. The five URLs
and their domains are reported back instead, so the cap check happens in one place.

**Entity QIDs verified against the MediaWiki API**: Raksha Bandhan Q10266, Kannada
Q33673, Kannada script Q839666, Karnataka Q1185, Dravidian languages Q33311,
WhatsApp Q1049511.

---

## Phase 5 — Targeting

- `categorySlug`: `indian-festivals` — confirmed live in the Strapi categories list
  (id 10, "Indian Festivals").
- `templateUrls`: `/happy-rakshabandhan-to-brother`,
  `/happy-rakshabandhan-to-sister` and `/templates`. **Note on sequencing:** at the
  start of this run `TEMPLATE_LINKS` in `app/lib/prompt.ts` contained only the
  brother slug, so the sister slug was held back as an invented-404 risk; it was
  added to `TEMPLATE_LINKS` mid-run and only then taken up. All three are verified
  present in `TEMPLATE_LINKS`, which is authoritative over the BRIEF.
- Internal links: 3, all from `TEMPLATE_LINKS`, all placed after the section that
  establishes why the reader would want them. The sister link matters here because
  half the wishes on the page are addressed to ಅಕ್ಕ and ತಂಗಿ.

## Known weaknesses carried into the audit

Four checklist items sit in `auditReport.failed`; 46 pass. All four are honest.

1. **First-party facts are platform-wide, not rakhi- or Kannada-specific** (n=3
   rakhi pages, 39 of 36,202 template views). Structural. Closes when rakhi
   template usage passes ~500 pages.
2. **No source covers the ritual or sibling-practice half of the subject.** All
   four topical sources are about the Kannada *language*. Lane B (UK/EU theses)
   returned nothing Kannada- or Raksha-Bandhan-specific; terms tried are listed in
   Phase 3. Structural — the research does not exist. The ritual half of the page
   rests on first-party platform data and stated experience instead.
3. **`aclanthology.org` sits in 4 posts, one over the domain cap.** Different URL
   in each. Needs an orchestrator-level decision, not a local edit; the reasoning
   for keeping KanCMD here is in Phase 3 above.
4. **The one Wikipedia link is a `Special:Statistics` page, not an entity
   article.** Kept deliberately: it is the only open, verifiable, Kannada-specific
   quantification of the content gap available, and the obvious substitutes
   (Census, government language statistics) are banned in this batch.

Not a checklist item, but worth stating: the 12 Kannada wishes are composed for
this post rather than lifted from a published corpus, so they carry no external
citation. That originality is the point of the page, but it is not a verifiable
claim and a Kannada-reading reviewer should read them before publish.

---

## Phase 8b — ACL adjudication and audit correction (2026-08-26)

The Phase 8 note above closed with an open question: this post argued to keep the
KanCMD paper (`aclanthology.org/2020.peoples-1.6/`) as its only Kannada-specific
lane-A work, carrying two load-bearing claims, and asked the orchestrator to
arbitrate. **Adjudicated: it stays out.** Recount from `batchMeta.sources` across all
16 landed files on 2026-08-26, after the Hindi post dropped its own ACL paper, puts
`aclanthology.org` at exactly **3** posts — 2027-quotes, punjabi, telugu. Restoring
KanCMD would put the domain one over the cap to buy back two claims the post carries
without it. No source change was made to this file.

All four sources were independently re-fetched and re-read in this pass:

- `jolr.ru` PDF — Proto-South-Dravidian `*akka` 'elder sister' reconstructed from
  "Tam. akkā, Mal. akka, Kan. akka, Bad. akka"; "words denoting younger siblings
  retained more resistant to borrowing". Confirmed from full text.
- `lrec-conf.org` Dakshina PDF, Table 1 — Kannada 678.9k filtered sentences and 2.0
  attested romanizations per word type, against Malayalam 747.5k, Telugu 874.4k,
  Tamil 1,144.4k, Devanagari 1,065.0k. Word-error rate 33.8% confirmed.
- `unicode.org` core-spec chapter 12 — "Kannada: U+0C80–U+0CFF"; South Asian scripts
  "are all abugidas in which most symbols stand for a consonant plus an inherent
  vowel"; "Consonant Conjuncts. Kannada is also noted for a large number of consonant
  conjunct forms that serve as ligatures of two or more adjacent forms."
- `glottolog.org` nucl1305 — the JSON classification array gives Dravidian → **South
  Dravidian** → South Dravidian I → Tamil-Kannada → Badaga-Kannada → Kannadoid;
  ISO 639-3 `kan`; AES "not endangered"; "Statutory provincial language in Karnataka
  (1950, Constitution, Schedule VIII)".

**Audit correction.** The subject-test item was being reported as `failed` while its
own `why` conceded that it passes on the item's literal threshold — it was acting as
a carrier for two other problems. The item is now reported honestly in `passed`, and
both real problems moved to the item they actually bite: *The angle statement is
honestly answerable*. The angle is the 12 machine-composed Kannada lines plus the
uncited Varamahalakshmi / Gowri-Ganesha claim, and neither is verified. `passed` 47 /
`failed` 3, total 50, no overlap. Nothing was deleted.
