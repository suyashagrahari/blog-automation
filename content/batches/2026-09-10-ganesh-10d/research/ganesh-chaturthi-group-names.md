# Research brief — `ganesh chaturthi group names`

- **Batch:** `2026-09-10-ganesh-10d` (Ganesh Chaturthi wave 4)
- **Slug:** `ganesh-chaturthi-group-names`
- **Gate against:** `content/batches/2026-09-09-ganesh-10b/blogs/ganesh-chaturthi-captions-for-instagram.json`
- **Pool relevance:** 1250 (AUTOCOMPLETE evidence, `pool.csv`)
- **Folds:** `ganesh chaturthi group name in kannada`, `ganpati group name`
- **Written:** 2026-09-10
- **Outcome: PROCEED.** Cannibalisation gate cleared with **0 shared results**; no substantive
  duplication against the sibling.

---

## Tool limitation, recorded up front

`WebSearch` is **US-locale only** — there is no `gl=in`. Every SERP below was measured from a
US locale on 2026-09-10, and an India-intent keyword's real SERP may differ from what is
recorded here. This matters more than usual for this keyword: see "Intent ambiguity" below.

**The session's `WebSearch` budget (200 calls) was exhausted during Phase 3**, before a fifth
source could be hunted. Phase 3 therefore closes at four sources — the floor of the 4–6 band.
Two of the four share the `developers.facebook.com` domain (two different reference pages);
that is one *post* against the domain's batch tally, so the cap is not breached, but it is
thinner sourcing than this post wanted.

---

## Phase 0 — Data gate

`content/facts.md` regenerated **2026-09-09**. `npm run facts` was **not** run (blocked on this
machine, and re-dating the file would invalidate 133 existing `factsUsed` entries across the 36
posts already written — BRIEF §1).

Relevant facts, ≥3 required with ≥2 placeable inside the first 150 words. **Gate passes.**

| Fact line (verbatim) | Why it is relevant to a group *name* |
|---|---|
| `49.6% of shared pages are opened on a phone (22,817 of 46,005 views) — measured 2026-09-09` | The phone chat-list row is the surface that truncates a group subject. Goes in the first 150 words. |
| `3,894 personalised pages created since 2026-03-12, across 15 page types — measured 2026-09-09` | The denominator for every other first-party number. Goes in the first 150 words. |
| `42.0% of creators password-protect their page before sharing it (1,636 of 3,894) — measured 2026-09-09` | The deliberate opposite of a name that travels with an invite link. |
| `96.0% of started pages are actually published and shared (3,737 of 3,894) — measured 2026-09-09` | Persistence: a shared label is not a draft. |
| `Median gap between a page's first save and its last edit: 6.8 hours — sampled on "I love you" page (/love-gf), n=1,070 — measured 2026-09-09` | The contrast that carries the angle: a page is a hours-long artefact; a group subject lives for weeks. |
| `No Ganesh Chaturthi page-creation data exists at all: the /happy-ganesh-chaturthi template went live 2026-09-10, four days before the festival — measured 2026-09-10` | The mandatory disclosure that there is no Ganesh-specific number. |
| `Raksha Bandhan 2026 lead time, both rakhi collections, n = 89 pages, IST calendar days: 49.4% built on the festival day itself, 27.0% the day before, 5.6% two to three days ahead, 6.7% four or more days ahead, 11.2% after it had passed; median lead time 0 days — measured 2026-09-09` | Used for the lifetime contrast. **Both mandatory disclosures appear in body prose:** it measures Raksha Bandhan, a one-day festival, not Ganesh Chaturthi's ten; and n = 89 is small, so no per-template, per-region or per-language rate is derived from it. |

The Holi lead-time collection (n=9) is **not** used — launch artefact. `pageviews` is not a page
type and appears in no denominator here.

---

## Phase 1 — SERP analysis

### 1a. My keyword: `ganesh chaturthi group names` (US locale, 2026-09-10)

| # | Result | What it actually is |
|---|---|---|
| 1 | `en.wikipedia.org/wiki/Ganesh_Chaturthi` | Festival encyclopedia entry |
| 2 | `drikpanchang.com/deities-namavali/gods/lord-ganesha/21-ganesha-names.html` | Eka Vimshati Namavali — 21 names of the deity |
| 3 | `en.wikipedia.org/wiki/Ganeshamoorthy` | A person's name |
| 4 | `sssbalvikas.in/courses/group-i/ganesh-chaturthi-yr2/` | Balvikas "Group I" course page — matches "group" by accident |
| 5 | `en.wikipedia.org/wiki/Ganesh_(name)` | Given-name entry |
| 6 | `facebook.com/chandakgroup/posts/…` | A builder's jumbled-names puzzle post |
| 7 | `en.wikipedia.org/wiki/Sankashti_Chaturthi` | Related observance |
| 8 | `cycle.in/blogs/all/108names-of-lord-ganesha` | 108 names of Ganesha (agarbatti brand blog) |
| 9 | `en.wikipedia.org/wiki/Ganesha` | Deity entry |
| 10 | `ganeshchaturthi.org/different-names-of-ganesha.html` | Different names of Ganesha |

**Corroborating query** — `ganesh chaturthi whatsapp group names ideas list`: `facebook.com`
(×2), `in.pinterest.com` (excluded by rule), `en.wikipedia.org` (×4, including
`108_Names_of_Ganesh`), `ganeshchaturthi.org`. Same picture.

### 1b. Intent ambiguity — the finding that shapes the post

In the measured US locale, **not one of the ten results is about naming a WhatsApp group.** The
SERP resolves the query to *names of the deity* (namavali, 21 names, 108 names). The
WhatsApp-group-label intent is what the harvested India autocomplete pool evidences — relevance
1250, with `ganesh chaturthi group name in kannada` and `ganpati group name` as sibling
completions — and the folds only make sense under that reading.

This post is written for the **WhatsApp-group-label intent**, and the body says so in its
opening rather than pretending the ambiguity is not there. The measured competitor set for that
intent is therefore not the ten above but the generic "150+ / 180 / 250+ WhatsApp group names"
listicle genre, which the second query surfaced and which is characterised below from the
category rather than from five individual fetches. **That is a real weakening of Phase 1 and it
is recorded as an audit failure, not smoothed over.**

### 1c. Characterisation of the listicle genre this keyword actually competes with

Common to every page in the genre: 100–250 interchangeable name strings, split by audience
(family / friends / mandal / office / cousins), a Marathi or Hindi block, emoji decoration, no
sources, no dates, no JSON-LD beyond a stock `BlogPosting`, and — the point — **no statement
anywhere of how many characters a WhatsApp group subject can hold.** Several assert or imply 25
characters, a figure that has been wrong since February 2023.

### 1d. Sibling keyword: `ganesh chaturthi captions for instagram` (US locale, 2026-09-10)

| # | Result |
|---|---|
| 1 | `eduyush.com/en-us/blogs/lifestyle/ganesh-chaturthi-captions-for-instagram` |
| 2 | `pratidintime.com/lifestyle/150-ganesh-chaturthi-wishes-status-and-captions-for-instagram` |
| 3 | `weavinghomes.in/blogs/blog-home/ganesh-chaturthi-captions-2025` |
| 4 | `ai.tenorshare.com/instagram-captions/short-ganpati-captions-for-instagram.html` |
| 5 | `wolfglobal.org/blog/ganpati-instagram-captions` |

Five organic results returned for the sibling query.

---

## Phase 1e — CANNIBALISATION GATE (BRIEF §3), counted explicitly

**Rule:** count results shared between the two SERPs — same domain *and* the same article
identity. Exclude `pinterest.com` and `youtube.com`. 3+ shared = one keyword = abort. Exactly
2 = judgment call.

**Domain intersection of the two result sets:**

- Mine: `en.wikipedia.org`, `drikpanchang.com`, `sssbalvikas.in`, `facebook.com`, `cycle.in`,
  `ganeshchaturthi.org` (6 distinct domains over 10 results).
- Sibling's: `eduyush.com`, `pratidintime.com`, `weavinghomes.in`, `ai.tenorshare.com`,
  `wolfglobal.org` (5 distinct domains over 5 results).
- **Intersection: {} — empty.**

**Shared results after the pinterest/youtube exclusion: 0.**

| Check | Threshold | Measured | Verdict |
|---|---|---|---|
| Shared top-10 results (same domain + same article) | ≥3 aborts | **0** | Pass |
| Judgment-call band | exactly 2 | not reached | n/a |
| Excluded false merges (`pinterest.com`, `youtube.com`) | — | 1 (`in.pinterest.com`, corroborating query only) | Correctly excluded |

`0 < 3`, and not 2 either, so no second-engine corroboration was required by the rule. The two
SERPs do not merely differ — they share **no domain at all**, which is a stronger separation
than the gate asks for.

## Phase 1f — Second abort condition: substantive duplication (BRIEF §3)

The sibling's JSON was read in full before drafting. A clean SERP is not sufficient, so:

| Dimension | Sibling (`…captions-for-instagram`) | This post | Overlap? |
|---|---|---|---|
| Platform surface | Instagram caption on a public post | WhatsApp group-subject field | No |
| The constraint | 2,200 characters, 30 hashtags, 20 @-tags; feed folds at ~125 chars | 128 characters documented, 100 in the consumer app, 25 stale | No — different platform, different field |
| Artefact lifetime | One-time post on one image | Persistent label, renamed not reposted | No |
| Source URLs | Meta IG API (archived), `doi.org/10.1016/j.jjimei.2022.100067`, `frontiersin.org`, `cyberpsychology.eu`, `drikpanchang.com` | `developers.facebook.com` ×2, `business-standard.com`, `misinforeview.hks.harvard.edu` | **0 shared URLs, 0 shared domains** |
| `factsUsed` lines | 2026-09-08 vintage (3,860 / 45,656 / 42.1% / 96.1% / 11.8) | 2026-09-09 vintage (3,894 / 46,005 / 42.0% / 96.0% / 6.8h) + the lead-time lines | Different strings; the lead-time dataset is used here and not there |
| Language fold | Marathi (Devanagari) | Kannada | No |

**The ~125-character Instagram feed fold and the 2,200/30/20 ceilings are the sibling's
material and are neither restated nor re-derived here.** This post's constraint is a different
field on a different platform. Conclusion: **not a duplicate. Proceed.**

---

## Phase 2 — Gap analysis

**Table stakes** (present in every listicle; omitting them looks incomplete to a retrieval
system): an actual list of usable names; a split by who the group is for (immediate family /
extended family / mandal / friends / office); at least one regional-language block; the
`Ganpati Bappa Morya` chant as a name; something for the visarjan end of the festival.

**The gap — nobody states the constraint.** The genre publishes 100–250 names and never once
says how long a WhatsApp group subject may be, where that number comes from, or what happens to
a long name in a phone's chat list. A name is chosen against an invisible ceiling.

**Stale data — the specific, dateable error.** The 25-character group-subject limit is the
number the genre carries by inheritance. It was raised to **100** in the consumer app in
**February 2023**, and Meta's own current Groups API reference documents **128**. Superseding a
stale number with a dated current one is the cleanest citation win available on this keyword.

**Unanswered questions the genre raises and drops:** does the whole name show anywhere? Is a
group name searchable? Does renaming a group notify everyone? Can a group name be in Kannada
script at all? Who can see the name of a group they are not in?

**Fan-out sub-queries → H2s:**

1. What is a Ganesh Chaturthi group name for, as against a caption or a wish? → definition H2
2. How many characters can a WhatsApp group name be? → the constraint H2
3. Give me actual names, with lengths → the 8-item list H2
4. What is the difference between the subject, the description and a status? → comparison table
5. Ganpati group name for a mandal vs a family vs an office → folded into the list's audience field
6. Ganesh Chaturthi group name in Kannada → the Kannada H2
7. Who can see my group's name? → answered inside the constraint and objection H2s
8. When does none of this matter? → objection H2

**Angle (`batchMeta.angle`):** wins by being the only Ganesh Chaturthi group-name page that
names the WhatsApp group-subject ceiling and dates it — 128 characters in Meta's own Groups API
reference of 16 June 2026, 100 in the consumer app since February 2023, not the 25 the genre
still implies — and sizes eight names against it, using SubhSandesh's 49.6% phone-open rate
across 3,894 pages as the reason the ceiling is not the real constraint.

---

## Phase 3 — Sources (4; the floor of the band, see the tool-limitation note)

Every URL below was fetched and read. None is a competitor.

### 1. Meta — WhatsApp Business Platform, Groups API: Group management reference

`https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/reference`
— page states "Updated: Jun 16, 2026".

Verified verbatim from the fetched page, `Create group` → Request parameters:
`<GROUP_SUBJECT>` … **"Maximum 128 characters. Whitespace is trimmed."**;
`<GROUP_DESCRIPTION>` … **"Maximum 2048 characters."** The `Update group settings` endpoint
repeats it: subject **"Maximum length: 128 characters. Must not be empty if provided."**

- Subject test: **pass** — it is the documentation for the exact field the post is about.
- Swap test: **pass** — no other keyword in this batch concerns a group-subject field.
- Not scholarly. Primary platform documentation, which is the right kind of source for a
  platform limit.

### 2. Meta — WhatsApp Business Platform, Groups API overview

`https://developers.facebook.com/documentation/business-messaging/whatsapp/groups`
— page states "Updated: Jun 16, 2026".

Verified: Quick facts give **"Max group participants: 8"**, **"Max groups you can create:
10,000 per business number"**, and eligibility is restricted to an Official Business Account.

This is cited for an honest caveat, not for padding: the 128-character figure comes from an
**API construct capped at 8 participants**, which is not the same object as a 300-member mandal
group in the consumer app. Without this page the 128 would be over-claimed.

- Subject test: pass. Swap test: pass. Same domain as source 1 — two reference pages, one post
  against the domain's batch tally.

### 3. Business Standard / IANS — "WhatsApp rolls out longer group subjects, descriptions on iOS beta: Report", 6 February 2023

`https://www.business-standard.com/article/technology/whatsapp-rolls-out-longer-group-subjects-descriptions-on-ios-beta-report-123020600224_1.html`

Verified verbatim from the fetched page: **"the characters of the group subject have been
increased to 100 to provide admins more freedom when naming their groups"**, and **"Beta users
can now choose a longer group description, up to 2048 characters, as the previous limit was 512
characters."** Attributed in the article to WABetaInfo.

This is the dateable death certificate for the 25-character figure. Note the corroboration
that makes it usable: the 2,048-character description figure reported here in February 2023
**matches exactly** the 2,048 in Meta's own current reference (source 1), which is why the
100 alongside it is credible rather than a rumour.

- Subject test: pass — it is about this field. Swap test: pass.
- Secondary reporting of a beta rollout, not a Meta statement. Said plainly in the body.

### 4. Garimella, K. & Eckles, D. — "Images and misinformation in political groups: Evidence from WhatsApp in India", *Harvard Kennedy School Misinformation Review*, 7 July 2020. `doi.org/10.37016/mr-2020-030`

`https://misinforeview.hks.harvard.edu/article/images-and-misinformation-in-political-groups-evidence-from-whatsapp-in-india/`
— peer-reviewed, diamond open access, full text read (not abstract-only).

Verified from the fetched Methods section: the authors define a public group as **"Any group on
WhatsApp which can be joined using a publicly available link"**; they located such groups by
**"manually searching for keywords related to all major national & regional political parties
and religious groups and their prominent political leaders, looking for data on Facebook,
Twitter and Google"**; they **"joined and obtained data from over 5,000 political groups"** and
**"collected over 5 million messages shared by over 250,000 users"**. From the Essay Summary:
image misinformation made up **13%** of all images shared in those groups.

Used for the naming consequence nobody in the genre mentions: a group whose invite link reaches
the open web is findable **by its name**, and 5,000 Indian groups were assembled exactly that
way. The 13% figure is cited only as what the paper found in *political* groups; it is not
generalised to festival groups, and the body says so.

- Subject test: **pass** — WhatsApp groups in India, and specifically how they are found.
- Swap test: **pass** — no other keyword in this batch is about WhatsApp groups.
- Peer-reviewed and open-access: **satisfies the one mandatory scholarly source.**

### Deliberate exclusions

- **`drikpanchang.com`** — not included. The post states the festival dates (Monday 14
  September and Friday 25 September 2026) but states **no muhurat time**, and the checklist
  exempts the date reference from the caps only where the post "actually states the time". A
  post that merely mentions the date "keeps it out of `sources` and `citation` entirely", so it
  is out of both. Had it been included it would have been marked `[date/festival reference]`.
- **`en.wikipedia.org`** — closed at 6 posts, and it is never research. It is used only via the
  Wikipedia API to verify Kannada script and to supply `sameAs`/QID pairs in `structuredData`,
  neither of which counts against the body Wikipedia budget or the source quota.
- **Callahan, S. P. & Ledgerwood, A. (2016), "On the psychological function of flags and logos:
  Group identity symbols increase perceived entitativity", *JPSP* 110(4), 528–550.** This was
  the intended fifth source — the mechanism for why a group's label does identity work — and it
  is **dropped because it could not be verified by fetch.** `escholarship.org` returned HTTP 403
  on both the landing page and the PDF; the Semantic Scholar record returns
  `"abstract": null` with a publisher elision notice; `cyberleninka.org` refused the
  connection. Citing it would have meant citing from memory, which the skill forbids. Search
  terms that produced it: `onomastics study of WhatsApp group names naming practices
  sociolinguistic open access`, `"psychological function of flags and logos" group identity
  symbols entitativity`, plus OpenAlex `title.search:entitativity group,is_oa:true`.
- **No peer-reviewed study of WhatsApp *group names* appears to exist.** Searched:
  OpenAlex `title.search:group names,is_oa:true` (777 hits, all zoological family-group
  nomenclature), `title.search:WhatsApp usernames,is_oa:true` (3 hits; the one real paper,
  "WhatsApp Usernames of University Students of Ghana", *IJIRD* 13(1) 2024, is diamond OA but
  returned HTTP 403 from `internationaljournalcorner.com` and from its DOI, so it was dropped
  for the same reason), `title.search:onomastic digital names,is_oa:true` (1 hit, a 2026
  Russian-language article whose full text was not reachable), `title.search:WhatsApp group
  India,is_oa:true`, `title.search:WhatsApp groups community,is_oa:true`. DOAJ's API and
  CORE's API were both unreachable from the sandbox. **This is a real finding: group naming on
  messaging platforms is not a studied phenomenon, so the post leans on platform
  documentation and first-party data, which is the documented fallback.**
- **No generic context statistic is used at all** (0 of the 1 permitted). No PIB, TRAI, Census
  or MEA figure earns a place in a post about a text field.

---

## The Kannada fold — how the script was verified

The assignment permits the Kannada fold only if the script is correct and verified, and
requires romanisation with a stated note otherwise. Method used: the **Wikipedia API's
`langlinks`** for `lllang=kn`, which returns the Kannada Wikipedia's own article title for an
English entity — a verifiable string rather than a generated one.

| English entity | Verified Kannada title | Wikidata QID |
|---|---|---|
| Ganesh Chaturthi | `ಗಣೇಶ ಚತುರ್ಥಿ` | Q929250 |
| Ganesha | `ಗಣೇಶ` | Q1579 |
| Gauri Habba | `ಗೌರಿ ಹಬ್ಬ` | Q5590128 |
| Bengaluru | `ಬೆಂಗಳೂರು` | Q1355 |
| Karnataka | `ಕರ್ನಾಟಕ` | Q1185 |
| Modak | `ಮೋದಕ` | Q2673557 |
| Kannada | `ಕನ್ನಡ` | Q33673 |
| Arti (Hinduism) | `ಆರತಿ (ಪೂಜೆ)` | Q16154326 |

Only these verified strings are set in Kannada in the body. Two words the fold would have
wanted — a Kannada word for a festival *committee* (`ಮಂಡಳಿ` / `ಸಮಿತಿ`) — were **not**
verifiable this way: the API returns `ಮಂಡಲ` for *Mandala*, the geometric and religious diagram,
which is the wrong sense for a mandal committee. Those are therefore **romanised on purpose**,
and the body says why. `Swarna Gauri Vrata` has no English Wikipedia article (`missing`), so
only `ಗೌರಿ ಹಬ್ಬ` is used.

---

## Verification commands run

```bash
# body word count — plain whitespace split, the authoritative measure (BRIEF §2)
python3 -c "import json,sys;print(len(json.load(open(sys.argv[1]))['article']['contentMarkdown'].split()))" \
  content/batches/2026-09-10-ganesh-10d/blogs/ganesh-chaturthi-group-names.json
```

`wordCount()` in `app/lib/batches.ts` was **not** used; it reads 20–50 words high.

`scripts/verify-batch.mjs` was run against a scratch copy of the batch directory (the real
`batch.json` is the orchestrator's to write, and this agent must not create it while five other
agents are in flight). Result: **✔ no problems** — 1,743 words, 11 FAQs, audit 48/2,
`indian-festivals`, internal links `/happy-ganesh-chaturthi /guides /templates`, 4 outbound URLs
across 3 domains, 0 domains at the cap of 3.

Its FAQ-versus-heading similarity check caught three FAQs that restated an H2 —
"How many characters can a WhatsApp group name be?" (1.00 against the H2),
"Who can see the name of my Ganesh Chaturthi group?" (0.88) and
"Can a Ganesh Chaturthi group name be in Kannada script?" (0.71). All three were **replaced**,
not reworded to slip past the check, in line with `page-structure.md`: a question worth an H2 is
promoted to the H2 and dropped from the FAQ list. The three replacements ask genuinely different
things — putting a year in the name, renaming a group later, and how to stop a name looking like
every other group's.

Final numbers: body **1,743** words by plain whitespace split (band 1,650–1,760, so 17 words of
headroom under the ceiling), **11** FAQs in `article.faqs` only, **6** verbatim `factsUsed` with
2 inside the first 150 words, **4** sources, audit **48 passed / 2 failed**, `passed ∩ failed = ∅`
and `|passed| + |failed| = 50`.

## The verified WhatsApp group-subject limit, in one place

- **128 characters**, whitespace trimmed — Meta's Groups API group-management reference, page
  stating "Updated: Jun 16, 2026", read directly. Description 2,048.
- **100 characters** in the consumer app since **February 2023**, up from 25 — Business Standard
  reporting WABetaInfo, 6 February 2023, read directly. Corroborated by the 2,048 description
  figure in that same report matching Meta's current reference exactly.
- **25 characters** — the figure the listicle genre still implies. Dead since February 2023.
- **How much the chat list shows** — **no published figure anywhere**, Meta included. Not
  invented; the body says so.

---

## Honest weaknesses of this brief

1. **Phase 1 is characterised, not fetched five-deep for the real competitor set.** The measured
   US-locale SERP returns deity-name pages, so the five pages that rank for the
   WhatsApp-group-name intent in India were never individually fetched. The genre
   characterisation in 1c is from the second query's results and the category, which is weaker
   evidence. Recorded as an audit failure.
2. **Four sources, two of them the same domain.** The `WebSearch` budget ran out mid-Phase-3
   and three candidate fifth sources were lost to HTTP 403s.
3. **No scholarly source on the actual mechanism.** The entitativity paper would have supplied
   it and could not be verified. The post therefore asserts less about *why* names matter than
   it wanted to.
4. **The 128 is an API figure.** The consumer app's current ceiling is not documented by Meta
   anywhere I could find; 100 is secondary reporting from February 2023. The body states this
   uncertainty rather than picking a number and sounding confident.
