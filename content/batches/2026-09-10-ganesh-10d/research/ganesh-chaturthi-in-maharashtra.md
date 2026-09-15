# Research brief — `how ganesh chaturthi is celebrated in maharashtra`

- **Slug:** `ganesh-chaturthi-in-maharashtra`
- **Batch:** `2026-09-10-ganesh-10d` (Ganesh Chaturthi wave 4)
- **Pool relevance:** 1251 (evidence_type AUTOCOMPLETE, `pool.csv`)
- **Gate against:** `ganesh-chaturthi-puja-vidhi` AND `lalbaugcha-raja-mumbai`, both in
  `content/batches/2026-09-09-ganesh-10b/blogs/`
- **Outcome: PROCEED.** Both halves of the BRIEF §3 gate cleared. Evidence below.

---

## Phase 0 — data gate

`content/facts.md` regenerated 2026-09-09; `npm run facts` NOT re-run (BRIEF §1).
Facts relevant to this keyword, ≥3 required with ≥2 placeable in the first 150 words:

1. `3,894 personalised pages created since 2026-03-12, across 15 page types — measured 2026-09-09`
2. `49.6% of shared pages are opened on a phone (22,817 of 46,005 views) — measured 2026-09-09`
3. `Occasion-dated pages, every festival plus every wedding type, are 144 of 3,894 pages, 3.7%; the platform is 96.3% romantic and everyday pages — measured 2026-09-09`
4. `No Ganesh Chaturthi page-creation data exists at all: the /happy-ganesh-chaturthi template went live 2026-09-10, four days before the festival — measured 2026-09-10`
5. `46,005 recorded views of shared pages — measured 2026-09-09`
6. `Raksha Bandhan 2026 lead time, both rakhi collections, n = 89 pages, IST calendar days: 49.4% built on the festival day itself, 27.0% the day before, 5.6% two to three days ahead, 6.7% four or more days ahead, 11.2% after it had passed; median lead time 0 days — measured 2026-09-09`

Gate PASSES. Fact 6 is used, so BOTH §1 disclosures (Raksha Bandhan not Ganesh
Chaturthi; n = 89 is small, no per-region or per-template rate derived) appear in
body prose, not only in the audit.

---

## Phase 0b — the cannibalisation gate (BRIEF §3)

### Half 1 — SERP overlap

`WebSearch` is **US-locale only** (no `gl=in`). Recorded as a limitation; the real
India SERP for an India-intent keyword may differ from what was measured here.
Exclusions applied per BRIEF §3.2: `pinterest.com`, `youtube.com`.

**My keyword — `how ganesh chaturthi is celebrated in maharashtra`** (9 results returned):

| # | Domain | Article identity |
|---|---|---|
| 1 | incredibleindia.gov.in | Ganesh Chaturthi (Maharashtra festivals hub) |
| 2 | maharashtratourism.gov.in | Ganesh Chaturthi |
| 3 | esamskriti.com | How Ganesh Chaturthi is celebrated in a Maharashtrian home |
| 4 | tourmyindia.com | Ganesh Chaturthi Festival Maharashtra |
| 5 | capertravelindia.com | Ganesh Chaturthi Maharashtra |
| 6 | blog.dharmikvibes.com | Ganesh Chaturthi in Maharashtra: History, Significance, Rituals |
| 7 | newsonair.gov.in | Ganesh Chaturthi celebrated with grandeur across Maharashtra |
| 8 | newsonair.gov.in | Festivities of 10 day Ganesh Chaturthi begin |
| 9 | newsonair.gov.in | Festival of Ganesh Chaturthi being celebrated today |

**Sibling A — `ganesh chaturthi puja vidhi`** (7 results returned):
scribd.com (×2, two different vidhi PDFs), drikpanchang.com (Ganesha Chaturthi Puja
Vidhi), radhakrishnatemple.net, templepurohit.com, mypoojabox.in, servpujastore.in.

**Shared results with sibling A: 0.** No domain appears on both lists. Not one.
The two SERPs are disjoint at the domain level, let alone at article identity.

**Sibling B — `lalbaugcha raja`** (7 results returned):
open.spotify.com, en.wikipedia.org (Lalbaugcha Raja), gettyimages.com,
instagram.com, youtube.com *(excluded)*, tripadvisor.in, pinterest.com *(excluded)*.

**Shared results with sibling B: 0.** After the pinterest/youtube exclusion, five
candidate domains remain and none of them appears on my list. Sibling B's SERP is
a brand-entity SERP (music, stock photos, social profiles, reviews) — mine is an
explainer SERP dominated by state tourism boards and Prasar Bharati. Different
result classes entirely.

**Counted explicitly: 0 shared with A, 0 shared with B. Threshold is 3. Clear on
both, and not near the 2-result judgment band either.**

### Half 2 — substantive duplication (the one that matters here)

Both sibling JSONs read in full before drafting.

**`ganesh-chaturthi-puja-vidhi`** (1,841 words) owns the **at-home ritual
procedure**: shodashopachara as sixteen named upacharas, the samagri list with
quantities, six stages from sthapana through sankalpa, pranapratishtha,
shodashopachara, naivedya/aarti to uttar puja. Sources: Bühnemann 1988 smarta-puja
PDF, Hindu American Foundation, Maňo & Xygalatas 2022 in *Slovenský národopis*, Pew
2021, drikpanchang date page. Its one section that touches duration —
"Dedh-din, five days or ten: what actually changes" — is ~150 words and its thesis
is explicitly that **very little of the vidhi changes**; it lists which *offerings*
scale down (panchopachara on the middle days) and nothing about what happens on
which day. It does not mention Gauri at all. It does not mention a mandal, an
aagman procession, a mandap, or Rishi Panchami.

**`lalbaugcha-raja-mumbai`** (1,844 words) owns **Mumbai pandal logistics**: which
of two queues to join, sourced vs invented waiting times, four named mandals and the
day each closes, transport and road closures. Sources: lalbaugcharaja.com,
lokshahi.com, Free Press Journal ×2, TU Dublin IJRTP Sabarimala carrying-capacity
paper, Frontiers Mahakumbh paper. It is a single-city visit-planning page. It has no
household content, no ritual sequence, and no calendar beyond "the day each mandal
closes".

**Overlap in first-party numbers:** yes, and this is the honest weakness. Both
siblings lean on the same platform-wide lines (mobile-open rate, publish rate,
total pages, password rate) as measured 2026-09-08. My facts.md is the 2026-09-09
regeneration, so my `factsUsed` strings differ byte-wise, but three of them measure
the same quantities. **Mitigation, and the reason this is not a duplicate:** my
load-bearing first-party lines are the two neither sibling uses — the Raksha Bandhan
lead-time distribution (49.4% same-day, median 0 days, n = 89) and the explicit
absence of any Ganesh page-creation data. A ten-day festival against a one-day
measurement is the substantive point of the post's second half, and no sibling can
make it because neither is organised around a calendar.

**Overlap in documents: zero.** No URL and no domain is shared between my source
list and either sibling's, with the single exception of drikpanchang.com under the
BRIEF §4 date/festival-reference exemption — and I use a *different* drikpanchang
page (Jyeshtha Gauri Puja) from the two closed in `USED-SOURCES.md`.

**Verdict on half 2: PROCEED.** Neither sibling provides the ten-day arc as a
schedule. The vidhi post answers "what do I do"; the Lalbaug post answers "where do
I stand and when"; this post answers "what happens on which day, for ten days".

---

## Phase 1 — SERP analysis

`WebSearch`, US locale, 2026-09-10. Top results for
`how ganesh chaturthi is celebrated in maharashtra`, five analysed.

| Page | Type | Direct answer position | Data cited + date | Format | What it optimises for |
|---|---|---|---|---|---|
| incredibleindia.gov.in | Government tourism blurb | First paragraph, generic | None dated | Prose, no table, no FAQ, no byline | Brand/destination presence |
| maharashtratourism.gov.in | State tourism page | First paragraph | None dated; names the four rituals (pranapratishtha, shodashopachara, uttarpuja, visarjan) | Short prose + ritual list | Destination marketing |
| esamskriti.com | Cultural essay, first-person household | Buried after an intro | Undated; strongest on household detail of the five analysed | Long prose, no schema | Long-form readership |
| tourmyindia.com | Travel operator explainer | First paragraph | "2020" stamp in the title — stale by six years | Prose + section headings | Tour package leads |
| capertravelindia.com | Travel operator explainer | First paragraph | None dated | Thin prose | Tour package leads |

Observations:

- **Nobody dates anything to 2026.** Four of five are undated evergreen prose and
  one is year-stamped 2020. A reader four days out from the festival cannot get a
  single 2026 date from this SERP.
- **No page prints a day-by-day calendar.** All five say "ten days" and then
  describe the first day and the last day. Days two through nine are a blank.
- **Gauri is almost entirely absent.** Only the household essay gestures at it.
  This is the largest gap: a three-day observance nested inside the ten days that
  is specific to Maharashtra and that governs what a large share of households
  actually do mid-festival.
- **No tables, no FAQ schema, no author bylines** on any of the five.
- Two of five are travel operators whose commercial intent is a tour booking, which
  is why neither has any reason to publish a household calendar.

## Phase 2 — gap analysis

**Table stakes** (all five cover; must be present or the post reads incomplete):
Bhadrapada shukla Chaturthi timing; murti brought home and installed; daily aarti;
modak as naivedya; visarjan by immersion; the procession; the "Ganpati Bappa Morya"
farewell chant; eco-friendly/PoP concern.

**The gap:** the middle of the festival. Every competing page is shaped like a
before/after — installation, then immersion — with an undifferentiated "ten days"
in between. Nothing on this SERP tells a reader which day Gauri arrives, which day
she is fed, which day she leaves, that households immerse on day 1.5, 3, 5, 7 or
10 rather than all on day 10, or that Rishi Panchami sits on day 5 and changes what
some households cook.

**Stale data:** tourmyindia.com carries a 2020 year-stamp. All five are otherwise
undated, which is a softer version of the same problem — an undated calendar claim
cannot be checked.

**Unanswered questions the pages raise and drop:** why ten days at all; who decides
the household's duration; what happens on the days between; whether the public and
household calendars are the same calendar (they are not).

**Fan-out sub-queries** → H2/FAQ candidates: what is Ganeshotsav; when is Ganesh
Chaturthi 2026 in Maharashtra; what happens on day one; what is Gauri Ganpati and
when; why do some families immerse on day 1.5; what is Rishi Panchami; when is
Anant Chaturdashi 2026; what is a sarvajanik mandal; how is the household
celebration different from the pandal.

**Angle (`batchMeta.angle`):** wins by being the only page that prints the
Maharashtra Ganeshotsav as a dated ten-day schedule for 2026 — including the three
Jyeshtha Gauri days and Rishi Panchami that no competing page places on a calendar —
and prices the send-a-page alternative against SubhSandesh's own festival lead-time
measurement, where 49.4% of Raksha Bandhan pages were built on the day itself.

## The 2026 calendar, as verified

Every date below was read off Drik Panchang's own pages for **Mumbai**
(`geoname-id=1275339`) on 2026-09-10, not carried over from a sibling post:

| Point in the arc | 2026 date | Detail read from the page |
|---|---|---|
| Ganpati sthapana | Mon 14 Sep | Madhyahna Ganesha Puja Muhurat 11:20 AM – 01:48 PM |
| Dedh-din visarjan | Tue 15 Sep | listed on the Ganesh Visarjan page |
| Third-day visarjan | Wed 16 Sep | listed on the Ganesh Visarjan page |
| Jyeshtha Gauri Avahana | Thu 17 Sep | muhurat 06:26 AM – 06:39 PM; Bhadrapada Shukla Ashtami |
| Jyeshtha Gauri Puja | Fri 18 Sep | also the fifth-day Ganpati visarjan date |
| Jyeshtha Gauri Visarjan | Sat 19 Sep | a ceremonial farewell, **not** an immersion |
| Seventh-day visarjan | Sun 20 Sep | listed on the Ganesh Visarjan page |
| Anant Chaturdashi | Fri 25 Sep | Chaturdashi tithi 11:18 PM 24 Sep → 11:06 PM 25 Sep |

Two things fell out of this that no competing page states:

1. **14 September to 25 September is twelve calendar dates, not ten.** The
   festival is named for ten days but the Chaturthi and Chaturdashi tithis do not
   sit a neat ten days apart in 2026.
2. **Gauri visarjan is a farewell, not an immersion.** Drik Panchang's own
   wording: "Visarjan does not signify immersion of the idol in water but rather
   symbolizes the ceremonial farewell of the Goddess after Her visit from Her
   maternal home." The metal, stone or wooden Gauri are kept.

**Deliberately dropped:** Rishi Panchami (Tue 15 Sep 2026). Drik Panchang
describes it as a fasting day tied to *Rajaswala Dosha* and notes it is "more
famous in Nepali Hindus" — it is neither Maharashtra-specific nor content this
post should amplify, and the assignment's `formatRisk` says describe rather than
judge. Omitted rather than hedged.

**Also verified but deliberately kept out of `sources`:** the Anant Chaturdashi
and Ganesh Chaturthi pages for Mumbai. `research-sources.md` allows **at most one**
date/calendar reference per post, so only the Jyeshtha Gauri Avahana page is
listed. The other two dates are stated in the body on the strength of the same
publisher's pages, read on 2026-09-10.

## Phase 3 — sources

Final list, five, in `batchMeta.sources`:

1. **The Metropole** (Urban History Association), 2026-06-26 — Keshavji Naik Chawl
   mandal, Girgaum, established 1893; mandals compete through larger installations
   and are sponsored by local politicians. Full text read. *Cluster ledger: one
   slot left, so this is its second and last permitted use.*
2. **Journal of Ecological Society**, 2023-04-01, doi:10.54081/jes.028/03 —
   peer-reviewed, CC BY. *Matvi*: a wooden canopy ceremonially dressed with
   seasonal plants during the Ganesh festival in the Konkan; eight villages
   surveyed in Rajapur tehsil, Ratnagiri. **Abstract only** — the ScienceOpen PDF
   returns HTTP 403. Unused domain.
3. **Open Cultural Studies**, 2019-02-01, doi:10.1515/culture-2019-0009 —
   peer-reviewed, CC BY. Ganesh Utsav as "a festival for ten days, encapsulating
   the whole city". **Abstract only** — De Gruyter serves a JavaScript bot-check.
   *Cluster ledger: one slot left, second and last use.*
4. **Noise Mapping**, 2021, doi:10.1515/noise-2021-0006 — peer-reviewed, CC BY.
   Noise at famous Mumbai community pandals monitored in 2020 against 2018 and
   2019. **Abstract only.** Unused.
5. **Drik Panchang**, Jyeshtha Gauri Avahana 2026 for Mumbai — `[date/festival
   reference]`, marked as such so the BRIEF §4 exemption applies. Full text read.
   Not one of the two drikpanchang URLs closed in `USED-SOURCES.md`.

Counts against the rules: 4 sources pass the **subject test**; **3 are
peer-reviewed and open-access** (one required); **0 generic context statistics**;
**0 Wikipedia** in the body; **1** date/calendar reference. No source URL and no
source domain is shared with either gated sibling, or with
`ganesh-chaturthi-in-bangalore.json`, the only other post already written in this
batch.

**What could not be found.** No peer-reviewed study of the *household* ten-day arc
or of Jyeshtha Gauri exists in the open literature that I could reach. OpenAlex
returns 1 open-access result for `Gauri vrat married women Maharashtra ritual` and
0 for `Mahalakshmi vrat Maharashtra women household worship`; DOAJ's API was not
resolvable from this machine; the Jio Institute's Versova Koliwada exhibit on
Jyeshta Gauri Pujan, the one institutional ethnographic record found, timed out on
every fetch attempt and was therefore not cited. This is the honest state of the
literature: the public festival is studied, the household observance is not.

Search terms used, phenomenon-first per `research-sources.md`:

- `sarvajanik Ganeshotsav mandal public festival ethnography Maharashtra`
- `Jyeshtha Gauri ritual Maharashtra household worship`
- `Ganapati cult origin Maharashtra scholarly`
- `Ganeshotsav idol immersion water quality Maharashtra study`
- `calendrical rites household duration ritual anthropology`

Domain constraints observed from `USED-SOURCES.md`: `pmc.ncbi.nlm.nih.gov`,
`en.wikipedia.org`, `arxiv.org`, `nature.com`, `archive.org`, `pib.gov.in`,
`aclanthology.org`, `frontiersin.org`, `journals.plos.org`, `dsal.uchicago.edu` all
treated as **closed**. `drikpanchang.com` used once, marked
`[date/festival reference]`, on a page not in the closed spent list.

---

## Phases 4–7 — what was emitted

- `content/batches/2026-09-10-ganesh-10d/blogs/ganesh-chaturthi-in-maharashtra.json`
- **1,703 words** by plain whitespace split of `article.contentMarkdown`, including
  the §0 social block, measured with the BRIEF §2 command and nothing else.
  Target band 1,650–1,760; headroom left at both ends deliberately.
- **12 FAQs**, in `article.faqs` only, mirrored by an `@id`-matched `FAQPage` block
  on `<canonical>#faq`. None appear in `contentMarkdown`.
- `categorySlug` `indian-festivals`; `templateUrls` `["/happy-ganesh-chaturthi"]`.
- Internal links, all absolute so the verifier's regex is not the thing being
  relied on: `https://subhsandesh.in/happy-ganesh-chaturthi` (mandatory, present),
  `https://subhsandesh.in/guides/happy-ganesh-chaturthi`,
  `https://subhsandesh.in/happy-rakshabandhan-to-brother` — the last one placed
  exactly where the rakhi lead-time figures are introduced, so the reader can see
  the template the measurement came from.
- `structuredData`: an `ItemList` mirroring the six H3s in body order, the
  `@id`-matched `FAQPage`, and an `@id`-matched `BlogPosting` enrichment block on
  `<canonical>#post` carrying `citation` one-to-one with `batchMeta.sources`, plus
  `about` and `mentions`. Every `sameAs` was checked against the Wikipedia API on
  2026-09-10 and paired with its Wikidata QID: Ganesh Chaturthi Q929250,
  Maharashtra Q1191, Ganesha Q1579, Parvati Q170485 (Gauri redirects there),
  Ananta Chaturdashi Q3630768, Konkan Q1142402, Marathi people Q1265028.
- Slug checked against Strapi on 2026-09-10: `filters[slug][$eq]` returned 0 rows.
- `scripts/verify-batch.mjs` run against an isolated copy of the batch directory
  (the real `batch.json` is the orchestrator's to write, and was not created here):
  **✔ no problems**, one item flagged for hand judgment — the single
  date/festival-reference exemption claim, which is the intended one.

### Audit

**49 passed, 1 failed. `passed ∩ failed = ∅` and `|passed| + |failed| == 50`,**
both asserted in the build script rather than eyeballed. Item strings copied
verbatim out of `references/publish-checklist.md`.

The one failure, recorded rather than fixed:

> **"3–6 outbound links, all fetched and verified to contain the cited fact"** —
> five outbound links, so the count is right, but three could not be fetched
> directly. De Gruyter serves a JavaScript bot-check for
> `doi:10.1515/culture-2019-0009` and `doi:10.1515/noise-2021-0006`, and
> ScienceOpen returns HTTP 403 for the `doi:10.54081/jes.028/03` full text. Each
> cited fact was verified against the publisher-deposited abstract via the
> OpenAlex/Crossref record. Closes when those pages become reachable from this
> machine or an institutional mirror is found.

**Recorded tool limitation (BRIEF §4):** `WebSearch` is **US-locale only** — there
is no `gl=in`. Both halves of the SERP gate, and the whole of Phase 1, were
measured on a US SERP. For an India-intent keyword whose top results are Indian
state tourism boards, the real India SERP may differ from what is tabulated above.

**Marker word unique to this keyword:** *matvi* (also *Rajapur*, *Jyeshtha
Gauri*). If any of those appear in another slug's body, a draft crossed over.
