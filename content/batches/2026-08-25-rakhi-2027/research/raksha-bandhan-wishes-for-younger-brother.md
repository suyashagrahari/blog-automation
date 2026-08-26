# Research brief — `raksha bandhan wishes for younger brother`

- **Slug:** `raksha-bandhan-wishes-for-younger-brother`
- **Batch:** `2026-08-25-rakhi-2027`
- **Assigned primary first-party fact:** 51.1% of shared pages are opened on a phone (18,497 of 36,202 views) — measured 2026-08-25
- **Slug availability:** checked against Strapi 2026-08-25, `total: 0`. Free.
- **Volume:** 100–300/mo **EST** (band 1), autocomplete demand 1–2. This is a small keyword. Its value is as a spoke in the sibling-relationship cluster, not as a traffic driver on its own.

---

## Phase 0 — data gate

`content/facts.md` refreshed 2026-08-25. **There is no rakhi-specific first-party
data**: `rakshabandhanpages` = 3 documents, `rakshabandhansisterpages` = 3, rakhi
template views = 39 of 36,202 (0.1%). Per the batch BRIEF, **no statistic was
computed from n=3.** The post uses platform-wide behaviour only, and states the
rakhi template's newness qualitatively ("39 of our 36,202 recorded views") rather
than as a rate.

Facts used:

1. 51.1% of shared pages are opened on a phone (18,497 of 36,202 views) — **primary, first 150 words**
2. 99.4% of started pages are actually published and shared (2,956 of 2,973) — first 150 words
3. 44.2% of creators password-protect their page before sharing it (1,315 of 2,973)
4. Average views per created page: 12.2
5. Median gap between first save and last edit: 6.9 hours (n=931, `/love-gf`)
6. Most-viewed template: `love-gf`, 13,581 views (37.5% of all views)

The platform-wide nature of these is recorded as an `auditReport.failed` item.

---

## Phase 1 — SERP analysis

Locale US, 7 results, **5 weak**. The weakness type is unusual and exploitable:
**off-intent brands ranking with generic sibling-wishes posts.** Harvest already
done in `content/keywords/2026-08-25-raksha-bandhan/serps.md`; the four reachable
pages were fetched in full on 2026-08-25.

| Page | Words | Direct answer | "younger" mentions | Data cited | Format | What it optimises for |
|---|---|---|---|---|---|---|
| `giva.co` — 90+ Raksha Bandhan Quotes (jewellery brand) | ~2,490 | Buried after "What is Raksha Bandhan?" | **3** | None. Page carries 2023/2024 dates | 1 table, FAQ, 3 JSON-LD blocks | Selling silver rakhis. Younger brother is one H2 inside a generic post |
| `damensch.com` — 100+ Happy Raksha Bandhan Wishes 2026 (clothing brand) | ~3,450 | No — opens with "sibling arguments can wait for a day" | **0** | None | No table, FAQ, 4 JSON-LD blocks | Selling innerwear. Titled 2026, published 25 Jul 2025 |
| `floweraura.com/quotes/raksha-bandhan/for-younger-brother` | **948** | Yes, immediately — but it is a quote list, not an answer | **19** | None | No table, FAQ, **0 JSON-LD** | The only genuinely on-intent incumbent. Dedicated URL, thin body, zero schema |
| `igp.com/blog/raksha-bandhan-wishes` | ~2,400 | No | **0** | None | 1 table, no FAQ, 1 JSON-LD | Hindi-first generic wishes hub, 2026-dated, gifting funnel |
| `skillmatics.in` ×2 (toy brand blog) | not fetched — guessed URL returned 404 | — | — | — | — | Recorded as unfetched; SERP position taken from the harvest |

**AI Overview / featured snippet:** none recorded for this query in the harvest.

Tone across all five: third person, generic, hedged, zero named sources, zero
numbers. Every one of them is a quote dump with a product rail attached.

---

## Phase 2 — Gap analysis

**Table stakes** (all incumbents carry these, so the post must too): actual usable
wish text; short/emotional/funny groupings; a WhatsApp-length option; a nod to what
Raksha Bandhan is; the festival date; an FAQ.

**The gap — four things none of the five cover:**

1. **The direction of care is never named.** Every page writes the default rakhi
   script, in which the brother is protector. For an elder sister writing to a
   *younger* brother that is backwards, and it is why ready-made lines read wrong.
   Two of the five never use the word "younger" at all.
2. **No page segments by his age.** A 10-year-old, a 15-year-old, a 21-year-old in
   a hostel and a 27-year-old with a salary need four different messages. Nobody
   splits them.
3. **No page cites anything.** Zero named sources, zero numbers, across ~9,300
   words of incumbent content. There is no research, no data and no dates.
4. **No page addresses delivery.** They give you words and stop. Nothing about how
   the message reaches him, what it costs, or what arrives the same day.

**Stale data:** `giva.co` carries 2023/2024 date stamps; `damensch.com` is a
25 Jul 2025 post title-stamped 2026. Any dated, named finding beats them; after
Phase 8 the freshest source cited here is 2018, because the 2026
*Developmental Psychology* paper had to be dropped (see Phase 8).

**Unanswered questions the incumbents raise and drop:** what to do when he does
not reply; whether to send it publicly or privately; whether a printed card is
worth the transit time.

**Fan-out sub-queries → H2 map:**

| Sub-query an engine would decompose this into | H2 that answers it |
|---|---|
| How is a wish for a younger brother different from one for an elder brother? | What makes a wish for a younger brother different |
| What do I actually write? Give me lines. | 8 Raksha Bandhan wishes for a younger brother |
| What suits his age? Why doesn't my teenage brother respond? | Which wish fits his age, and what changes at each stage (renamed in Phase 8) |
| How do I send it so he sees it? What does each option cost? | How to send it so it actually gets opened |
| When is a message the wrong move? | When a written wish is the wrong choice |
| When is Raksha Bandhan 2027 and when should I send? | Raksha Bandhan 2027: when to send the wish |

**Angle (`batchMeta.angle`):** wins by being the only post that treats
elder-sister-to-younger-brother as its own relationship — sorting eight wishes by
his actual age against birth-order and sibling-intimacy research — using
SubhSandesh's own 51.1% phone-open rate to decide how the message is delivered.

**Deliberate non-duplication.** SubhSandesh already has posts for cousin brother,
brother-in-law/jiju, bhaiya-bhabhi, step-siblings, brother-in-the-army, long-distance
brother and brother-abroad (`content/keywords/site-inventory.csv`). None of those is
about the *younger* brother, and none frames the age asymmetry. This post stays on
that one axis and does not reuse their framing.

---

## Phase 3 — Sources

> **SUPERSEDED 2026-08-25 by Phase 8 (remediation).** Five of the six sources
> below were removed. Read Phase 8 at the end of this file for the list that is
> actually cited; the table here is kept as the record of what was tried.

Searched the **phenomenon**, not the festival. Terms used:
`older sister younger brother sibling caregiving research open access study`;
`birth order sibling age gap emotional support adult siblings peer-reviewed study PMC`;
`older sister younger brother age gap sibling warmth conflict study open access`;
`kin keeping women family communication maintaining ties study open access sisters`;
`raksha bandhan kinship brother sister ritual protection anthropology open access`.

The last of those returned **no scholarly work at all** — only festival explainers
and competitor gifting pages. Recorded as a finding: the ritual itself is
under-studied in open access; the sibling behaviours around it are well studied.

| Source | Type | Verified claim used | Published |
|---|---|---|---|
| `pmc.ncbi.nlm.nih.gov/articles/PMC6426140/` — *Perception of Sibling Relationships and Birth Order Among Asian American and European American Emerging Adults*, Journal of Family Issues | Peer-reviewed, open access | Thematic analysis of **48 semi-structured interviews**; "First-borns overall reported a strong pressure to be a role model to later-borns, provide sibling care, assume family responsibilities, and not expect to rely on younger siblings" | 2018-07-11 |
| `alex-hoagland.github.io/files/Caretaking_Published.pdf` — Wikle, Jensen & Hoagland, *Adolescent caretaking of younger siblings*, Social Science Research | Peer-reviewed, author-hosted open PDF (DOI 10.1016/j.ssresearch.2017.12.007) | Logistic regression, **N = 5,170** ATUS respondents: Female OR = **1.42**, p < .001. Abstract also states boys more often cared for younger brothers, girls for younger sisters | 2018-03 |
| `pmc.ncbi.nlm.nih.gov/articles/PMC11910747/` — *Patterns and correlates of changes in sibling intimacy and conflict from middle childhood through young adulthood*, Developmental Psychology | Peer-reviewed, open access | **201 families**, two siblings each, ages 7–30: "intimacy declined from middle childhood through early adolescence, increased through the mid-twenties and leveled off" | 2026-03 (Crossref issue; PMC posted 2025-10-22) |
| `pmc.ncbi.nlm.nih.gov/articles/PMC9683197/` — Aldrich & Nomaguchi, *Life Course Statuses and Sibling Relationship Quality during Emerging Adulthood*, Journal of Family Issues | Peer-reviewed, open access | Add Health, **N = 1,366**: "full-time employment, marriage/cohabitation, and parenthood are related to more distant sibling relationships, whereas college education is related to closer sibling relationships" | 2021-07-03 |
| `doi.org/10.1093/qje/qjab006` — *O Brother, Where Start Thou? Sibling Spillovers on College and Major Choice in Four Countries*, Quarterly Journal of Economics | Peer-reviewed, open access (OUP) | Using admissions cut-offs affecting only the older sibling's options in Chile, Croatia, Sweden and the US: "a meaningful portion of siblings follow their older sibling into the same college or college-major combination"; the spillover disappears if the older sibling drops out | 2021-02-22 |
| `britannica.com/topic/Raksha-Bandhan` | Reference work, named editor (Charles Preston) | "Raksha Bandhan is a Hindu festival celebrating the bond (*bandhana*) between sisters and brothers and their **mutual protection** (*raksha*)" | No publication date published — omitted from `citation` |

**Subject test:** 5 of 6 pass — siblings, birth order, caregiving, older-to-younger
sibling influence, the ritual itself. **Peer-reviewed and open access:** 5 of 6.
**Government / context statistics:** 0. **Banned sources:** none used (no drikpanchang, indiapost, pib,
trai). **Competitor links:** zero — giva, damensch, floweraura, igp and skillmatics
were read in Phase 1 and are cited nowhere.

**Reading depth.** Nothing cited is paywalled. For PMC11910747 and PMC9683197 the
abstract plus selected full-text passages were read, not the complete papers; every
claim used comes from the abstract verbatim. The Wikle PDF was read in full text.

**Batch cap check.** Re-run after sibling files appeared: `pmc.ncbi.nlm.nih.gov`
is used in **4 of the batch's posts**, over the 3-post domain cap, and
`PMC9683197` (Aldrich & Nomaguchi) now sits in **exactly 2 posts**, at the URL cap.
Three of my six sources are on PMC and OpenAlex shows no non-PMC open-access mirror
for any of them — the SAGE and APA versions are paywalled. Agents were still
writing when this was checked, so the counts can only rise. Recorded as an audit
failure for the orchestrator to resolve batch-wide.

**Word count:** 1,799 in `contentMarkdown`, FAQs excluded (11 FAQs live in
`article.faqs` and the FAQPage JSON-LD only).

**Rejected sources:** Eklund, *Kinwork revisited* (Convergence, 2023, CC BY) —
topically strong on gendered digital kin-work, but SAGE returned 403 and the DiVA
mirror timed out twice, so the full text could not be verified. Not cited.
ResearchGate PDFs were not used (no verifiable licence, no stable URL).

---

## Phase 5 — Strapi targeting

- `categorySlug`: `indian-festivals` (batch rule; festival post).
- `templateUrls`: `/happy-rakshabandhan-to-brother`, `/templates`. Both exist in
  `TEMPLATE_LINKS` (`app/lib/prompt.ts`). Note the BRIEF mentions
  `/happy-rakshabandhan-to-sister`, but **that slug is not in `TEMPLATE_LINKS`** and
  was therefore not used.
- Internal links: 3 — the rakhi-for-brother page twice (in the "different city"
  wish and the 2027 timing section) and the full template set once, in the downside
  section. None in the opening.
- `sameAs` verified via the Wikipedia API on 2026-08-25: Raksha Bandhan → Q10266;
  Sibling → Q31184; Birth order → Q2914808; Encyclopædia Britannica → Q455.

---

## Phase 6 — Audit summary

3 of 50 checklist items failed, all structural rather than fixable by more writing:

1. **First-party facts are platform-wide, not keyword-specific.** No number in this
   post describes younger-brother rakhi behaviour, because `rakshabandhanpages`
   holds 3 documents. Closes when rakhi template usage passes ~500 pages.
2. **Two of six sources would survive the swap test.** Britannica's mutual-protection
   line and the Aldrich life-course finding could sit in another rakhi post in this
   batch; the birth-order, caretaking and sibling-spillover papers could not.
3. **Batch URL/domain caps already breached.** `pmc.ncbi.nlm.nih.gov` is in 4 posts
   against a 3-post cap, and PMC9683197 is at the 2-post URL cap. No open-access
   mirror exists off PMC for any of the three papers involved.

**Honest assessment:** it is the only page in this SERP that segments the wish by
the brother's age and grounds the elder-sister-to-younger-brother reversal in named
birth-order, caretaking and sibling-spillover research, against five incumbents
carrying zero citations between them —
but the keyword is band 1 (~10 clicks/mo EST) and floweraura holds a dedicated URL
on a far stronger domain, so treat this as cluster depth rather than a traffic win.

---

## Phase 8 — Source remediation (2026-08-25)

Trigger: batch-wide source counts. This post held **three** `pmc.ncbi.nlm.nih.gov`
URLs against a 3-post *domain* cap that the domain had already breached (4 posts),
one of them (`PMC9683197`) already at the 2-post URL cap, plus
`https://doi.org/10.1093/qje/qjab006` on a domain banned batch-wide.

### Removed

| Removed | Why | Replaced by |
|---|---|---|
| `pmc.ncbi.nlm.nih.gov/articles/PMC6426140/` | domain over cap | `digitalcommons.wku.edu/theses/3032` (lane C) |
| `pmc.ncbi.nlm.nih.gov/articles/PMC11910747/` | domain over cap; no host outside PMC that answers an automated fetch | **claim dropped** — see below |
| `pmc.ncbi.nlm.nih.gov/articles/PMC9683197/` | at the 2-post URL cap | `etd.ohiolink.edu/…bgsu147851519857788` (lane C) |
| `doi.org/10.1093/qje/qjab006` | `doi.org` banned batch-wide | `escholarship.org/uc/item/8db6b27b` (lane C) |
| `britannica.com/topic/Raksha-Bandhan` | not research, failed the swap test, and returns HTTP 403 to automated verification so it could not be re-verified | no replacement; the *raksha* / *bandhan* gloss now stands as plain framing with no citation attached |

Kept unchanged: `alex-hoagland.github.io/files/Caretaking_Published.pdf` (unique in
the corpus, full text readable).

### Final source list — all five fetched and verified on 2026-08-25

| Source | Lane | Verified claim used | Published | Reading depth |
|---|---|---|---|---|
| `digitalcommons.wku.edu/theses/3032` — Prewitt, *Sibling Supportive Communication and Birth Order*, WKU MA thesis | C | "firstborn children expressed an innate obligation to be supportive of their younger siblings, even without being told this message from their parents"; five same-gender sibling dyads, 10 participants | Spring 2018 (recorded as 2018-05-01) | repository abstract read in full; thesis PDF not read |
| `alex-hoagland.github.io/files/Caretaking_Published.pdf` — Wikle, Jensen & Hoagland, *Social Science Research* | kept | N = 5,170 adolescents **aged 15–18** (M = 16.51); 30% provided sibling care the previous day, 141 minutes on average when they did; female OR = **1.42**; girls caring for younger brothers aged 6–12 gave care **9 percentage points** higher in direct-care share than boys caring for younger sisters | 2018-03 | full text read (p.369, p.410, p.610, Table 3) |
| `escholarship.org/uc/item/8db6b27b` — Dagys Pajoluk, UC Berkeley PhD dissertation | C | 288 younger siblings in grades 9–10; "The strongest predictor of YS achievement was OS academic engagement, followed by parent expectations of achievement and differentiation". Correlational — the post says so | 2013 (Spring) | dissertation abstract read from the open PDF |
| `scholarsarchive.byu.edu/facpub/2674` — Hamwey, Rolan, Jensen & Whiteman, *JSPR* | C (US repository; not on the enumerated lane-C list, borrowed as the only fetchable host) | nine focus groups, **N = 45** emerging adults; siblings remained important "despite a lack of physical proximity and less frequent communication", and "although communication was less frequent, the content of the discussions was often more meaningful" | 2018-07-30 | repository abstract only — the "Link to Full Text" points at the paywalled JSPR version |
| `etd.ohiolink.edu/…accession=bgsu147851519857788` — Aldrich, *Sibling Relationships in Early Adulthood*, BGSU MA thesis | C | Add Health Wave III matched sibling dyads, **N = 1,451**, ages 18–26: "the respondents' or the siblings' marriage or cohabitation is related to less direct or indirect contact and fewer fights between siblings" | 2016-12 | thesis abstract read from the open PDF |

**Batch counts after the swap** (measured across all 16 landed files, 2026-08-25):
`pmc.ncbi.nlm.nih.gov` 3 posts (at cap, none of them this one), `doi.org` 1,
`escholarship.org` 2, and the other four of my domains 1 each. No URL of mine
appears in a second post. The checklist item on caps therefore moved to `passed`.

### Dead ends — do not repeat

Publisher-native hosting (lane D) is unusable from this environment. Verified 403
to an automated fetch on 2026-08-25: `academic.oup.com` (the QJE article at
`/qje/article/136/3/1831/6164872`, which is the real target of the banned
`doi.org` redirect), `journals.sagepub.com`, `onlinelibrary.wiley.com`,
`www.tandfonline.com`, `www.britannica.com`. Each was a live candidate and each was
dropped rather than cited unverified. Repository hosts (`digitalcommons.*`,
`scholarsarchive.byu.edu`, `escholarship.org`, `etd.ohiolink.edu`) all fetch fine.

### The claim that was dropped

McHale, Sun, Updegraff & Whiteman's 201-family study of sibling intimacy from age
7 to 30 — the one finding that justifies age-banding directly, and the basis of the
old H2 "why 13 to 18 is the hardest stretch". Searched for a non-PMC host in lane
C/D: `link.springer.com` and `tandfonline.com` for a comparable longitudinal
trajectory, BYU ScholarsArchive and OhioLINK for a repository copy, plus
`"sibling" "intimacy" OR "warmth" declined "early adolescence" longitudinal thesis`
across `digitalcommons`/`scholarworks`/`etd.ohiolink.edu`. Nothing fetchable.
Closes if an accepted-manuscript copy appears on a repository domain.

Consequences in the body: the H2 is now **"Which wish fits his age, and what
changes at each stage"** (still answering the Phase 2 sub-query "What suits his
age? Why doesn't my teenage brother respond?"), rebuilt on the 15–18 caretaking
load, the Berkeley older-sibling-engagement finding, the 45-person focus-group
paper on moving out, and the 1,451-person thesis on marriage/cohabitation. The
teenager's flat reply is now framed as advice, not as a research finding, because
none of the surviving sources measures whether he replies. keyTakeaways 3 and 4,
FAQs 2, 3 and 5, and the excerpt were rewritten for the same reason.

**Word count:** 1,799 → **1,794** in `contentMarkdown`, FAQs excluded (studio
`wordCount()`: 1,832 → 1,819). Audit: **48 passed / 2 failed**, both structural —
platform-wide first-party facts (closes at ~500 rakhi pages) and one source that
survives the swap test (the focus-group paper on distance).

---

## Phase 8b — Independent re-verification (2026-08-26)

A second remediator re-ran this post from the files rather than trusting the Phase 8
record. Findings:

**The cheap fixes were re-tested and all still fail.** `academic.oup.com` (both the
`article` and `article-abstract` paths for QJE 136(3):1573),
`journals.sagepub.com` and `psycnet.apa.org` each return a bot challenge — Cloudflare
"Just a moment…" at HTTP 403 for the first two, an Incapsula block for APA. Publisher-
native hosting does not rescue any of the removed claims.

**The dropped Developmental Psychology finding is confirmed unavailable.** The
OpenAlex work record for *Patterns and correlates of changes in sibling intimacy and
conflict from middle childhood through young adulthood* lists exactly three
locations: `doi.org` (banned), PubMed (metadata only) and PMC (closed at cap). There
is no repository copy. The drop stands; it closes only if one appears.

**All five current sources re-fetched and matched line by line against the body.**

- `digitalcommons.wku.edu/theses/3032` — "firstborn children expressed an innate
  obligation to be supportive of their younger siblings, even without being told this
  message from their parents". Confirmed on the open landing page.
- `alex-hoagland.github.io/…/Caretaking_Published.pdf` — full PDF: "final analysis
  sample included 5,170 adolescents between the ages of 15 and 18 (M age = 16.51,
  SD = 1.05)"; "30% of the adolescents in the sample engaged in sibling care, and for
  those engaged, the average time spent was 141 minutes per day"; the 9-percentage-
  point girls-caring-for-younger-brothers gap; OR 1.42. All confirmed.
- `escholarship.org/uc/item/8db6b27b` — the landing page now returns a JavaScript bot
  challenge (HTTP 202). The content PDF at
  `escholarship.org/content/qt8db6b27b/qt8db6b27b.pdf` is open and was read in full:
  Dagys Pajoluk, UC Berkeley, 2013; "Data was collected from 288 younger siblings (YS)
  in ninth and tenth grade"; "The strongest predictor of YS achievement was OS
  academic engagement, followed by parent…". The cited permalink is the one printed
  inside the PDF itself, so it stays as the citation URL.
- `scholarsarchive.byu.edu/facpub/2674` — "nine different qualitative focus groups
  (N = 45 participants)"; siblings "remained important … despite a lack of physical
  proximity and less frequent communication"; "the content of the discussions was
  often more meaningful". Confirmed.
- `etd.ohiolink.edu/…bgsu147851519857788` — full PDF: Lindsey L. Aldrich, BGSU MA,
  December 2016, advisor Kei Nomaguchi; "Wave III … (N = 1,451)"; "respondents' or the
  siblings' marriage or cohabitation is related to less direct or indirect contact and
  fewer fights between siblings"; ages 18 to 26. Confirmed. Note this is the thesis
  behind the removed Aldrich & Nomaguchi PMC article — the same work on a host that is
  not over cap, which is why the replacement kept the finding intact.

No change was made to `batchMeta.sources`, `contentMarkdown` or `auditReport.failed`.
`honestAssessment` gained one sentence recording the OpenAlex check.
