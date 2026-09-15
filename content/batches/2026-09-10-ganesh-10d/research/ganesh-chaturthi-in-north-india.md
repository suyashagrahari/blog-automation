# Research brief — `ganesh-chaturthi-in-north-india`

- **Keyword:** `why ganesh chaturthi is not celebrated in north india`
- **Batch:** `2026-09-10-ganesh-10d` (Ganesh Chaturthi wave 4)
- **Gate sibling:** `content/batches/2026-09-09-ganesh-10/blogs/ganesh-chaturthi-essay.json`
- **Folds:** `why ganesh chaturthi is not celebrated in uttarakhand`, `where ganesh chaturthi is celebrated`
- **Written:** 2026-09-10
- **Tool limitation recorded up front:** `WebSearch` is **US-locale only** — there is
  no `gl=in` parameter. Every SERP measurement below is a US-locale reading of an
  India-intent query, so the live Indian SERP may differ. `WebFetch` is blocked by
  this machine's command classifier; every source was fetched with
  `ctx_fetch_and_index` instead, which is a real fetch of the live page.

---

## Phase 0 — data gate

`npm run facts` was **not** run (blocked by the machine's classifier, and the BRIEF
forbids it — regenerating re-dates every line and invalidates 133 `factsUsed`
entries in the 36 live posts). `content/facts.md` as regenerated **2026-09-09** was
quoted byte-verbatim.

Facts relevant to this keyword, and available inside the first 150 words:

1. `3,894 personalised pages created since 2026-03-12, across 15 page types — measured 2026-09-09`
2. `49.6% of shared pages are opened on a phone (22,817 of 46,005 views) — measured 2026-09-09`
3. `46,005 recorded views of shared pages — measured 2026-09-09`
4. `Occasion-dated pages, every festival plus every wedding type, are 144 of 3,894 pages, 3.7%; the platform is 96.3% romantic and everyday pages — measured 2026-09-09`
5. `No Ganesh Chaturthi page-creation data exists at all: the /happy-ganesh-chaturthi template went live 2026-09-10, four days before the festival — measured 2026-09-10`

Gate **passes**: 5 relevant lines, ≥3 required, and #1/#2 both sit in the opening
paragraph. Fact #4 is the load-bearing one for this keyword — a 3.7% occasion-dated
share is the honest measure of how thin *any* festival signal is in the platform's
own data, north or west, and it is the number that keeps the post from over-claiming.

**Deliberately NOT used:** the `## Festival lead time` Raksha Bandhan dataset
(n = 89). It measures a different, one-day festival, and this post makes regional
claims, so a per-region rate derived from n = 89 would be exactly the abuse the
BRIEF prohibits. Nothing here is derived from it. The Holi lead-time collection
(n = 9) is a launch artefact and is not touched either.

---

## Phase 1 — SERP analysis

### Cannibalisation gate (BRIEF §3) — **CLEARS, 0 shared results**

Top 10 organic, US-locale, measured 2026-09-10.

**My keyword — `why ganesh chaturthi is not celebrated in north india`**

| # | Result | Domain |
|---|---|---|
| 1 | "Why don't North Indians celebrate Ganesh Chaturthi?" | quora.com |
| 2 | "Why do North Indians don't celebrate Ganesh Chaturthi as Maharashtra, Karnataka…" | quora.com |
| 3 | "Why Ganesh Chaturthi is Celebrated More in South & not in North" (short) | youtube.com *(excluded)* |
| 4 | "Is Ganesh Chaturthi Celebrated In North India?" | youtube.com *(excluded)* |
| 5 | "All About Ganesh Chaturthi" | hinduamerican.org |
| 6 | "Apart from Maharashtra, is Ganesh Chaturthi celebrated in other states?" | quora.com |
| 7 | "Why is Ganesh Chaturthi a major celebration in Tamil Nadu and Andhra but not in Kerala?" | quora.com |
| 8 | "Public celebration of Ganesha festival not allowed in B'luru this year" | deccanherald.com |
| 9 | "Ganesh Chaturthi" (newsletter post) | kbssidhu.substack.com |
| 10 | Same Deccan Herald story, AMP URL | deccanherald.com |

**Sibling keyword — `ganesh chaturthi essay`**

| # | Result | Domain |
|---|---|---|
| 1 | "Ganesh Chaturthi Essay: 10 Lines, 100–200 Words" | vedantu.com |
| 2 | Same Vedantu page via Google Translate | translate.google.com |
| 3 | "Ganesh Chaturthi Essay for Students and Children \| 500 Words" | toppr.com |
| 4 | "Ganesh Chaturthi Essay: Discover the History, Joy, and Traditions" | lilamigosnest.com |
| 5 | "Ganesh Chaturthi Essay" | mynachiketa.com |
| 6 | "Ganesh Chaturthi Essays — Short Speech and Essay" | ganeshchaturthi.org |
| 7 | "Essay on Ganesh Chaturthi Festival for Children and Students" | indiacelebrating.com |
| 8 | "Ganesh Chaturthi Festival Essay for Students" | infinitylearn.com |
| 9 | "Essay on Ganesh (Vinayaka) Chaturthi for Students and Children" | firstcry.com |

**Shared results (same domain *and* same article identity), excluding
`pinterest.com` and `youtube.com`: 0.**

Not a single domain appears on both SERPs. This is not a marginal 2-result
judgment call — the two queries return disjoint result sets drawn from different
publisher categories entirely (Q&A and news versus school-essay content farms).
Gate clears; no second-engine corroboration needed at 0.

### Substantive-duplication gate (BRIEF §3, second condition) — **clears, with one binding constraint**

`ganesh-chaturthi-essay.json` was read in full. It **does** cover the 1893
*sarvajanik* turn in depth, and it does so with five specific documents:
`journals.openedition.org/samaj/4549`, `doi.org/10.1080/23311983.2026.2660407`,
`doi.org/10.1515/culture-2019-0009`, `fedoabooks.unina.it/…/592`, and
`themetropole.blog/…`. `ganesh-chaturthi-katha-and-story.json` (wave 2) owns the
Puranic myth lane and already spends
`asianethnology.org/article/148337-the-origin-of-the-ganapati-cult`.

Consequences, all honoured in the draft:

- **Zero overlap with either sibling's source set.** None of those seven URLs
  appears in this post. `asianethnology.org` in particular was the single best
  scholarly fit for Ganapati's origins and was **deliberately declined** — it is
  the katha post's document, and re-using it would make this post read as a
  reprint of that lane even though the URL technically had a slot left.
- **The 1893 turn is background here, not the subject.** It gets one attributed
  paragraph, sourced to the Maharashtra government's own Delhi page, not the
  historiography the essay post already narrates.
- **No myth retelling.** No birth story, no head, no Shani, no moon prohibition.
- **No essay models, no paragraph plans, no word-count templates.**

The lane this post owns and neither sibling touches: **the calendar and
institutional geography of the festival — where the public form is
state-sponsored, where the same tithi carries a different observance, and who
actually runs a Delhi pandal.**

### Competitor pages, read not cited

Positions 1, 2, 6 and 7 are Quora threads; 3 and 4 are YouTube shorts; 8 and 10
are one Deccan Herald news story about a Bengaluru permit decision, which is not
about the keyword at all. Position 5, `hinduamerican.org`, is the only page on the
SERP that is a considered piece of writing on the question, and it is a page this
post competes against — read in Phase 1, **not cited**, per `competitors.md`.

| Page | ~Words | Where the answer sits | Data cited | Format | Optimising for |
|---|---|---|---|---|---|
| quora.com #1 | 200–900 per answer, unstructured | Scattered across answers; no single answer paragraph | None dated | Answer threads, no headings, no schema | User-generated debate; ranks on exact-question match |
| quora.com #2 | ~600 | Buried in anecdote | None | Same | Same |
| hinduamerican.org #5 | ~1,100 | First 200 words, but answers "what is the festival", not the geographic question | Undated history; 1600s Shivaji patronage, 19th-century revival | H2s, no FAQ block, no comparison table | Explaining the festival to a US Hindu-American audience |
| deccanherald.com #8/#10 | ~350 | N/A — a 2021 permit story | Municipal order, dated | News piece | A news event, matched on "not allowed"/"not celebrated" |
| kbssidhu.substack.com #9 | ~1,300 | Essayistic; no extractable answer paragraph | None dated | Newsletter prose | Personal reflection |

**No AI Overview or featured snippet was returned for this query in the
US-locale measurement.** That is itself the opportunity: nothing currently holds
the snippet position, and the strongest incumbent is a Q&A thread.

---

## Phase 2 — gap analysis

**Table stakes** (present across the incumbents, so the post must carry them):
Ganesha is invoked before beginnings everywhere in India; the festival falls on
Bhadrapada shukla chaturthi; Maharashtra's public form is the visible one; the
festival's public phase is roughly ten days ending in immersion; regional names
differ (Vinayaka Chaturthi / Vinayaka Chavithi).

**The gap — five things not one incumbent page carries:**

1. **The premise is false and nobody says so in the first paragraph.** Every
   incumbent either accepts the framing or answers a different question.
2. **The calendar collision.** In 2026 **Hartalika Teej falls on Monday 14
   September — the same day as Ganesh Chaturthi**, and Teej is the marked
   Bhadrapada observance across Uttar Pradesh, Bihar, Rajasthan and Madhya
   Pradesh. No incumbent mentions the tithi adjacency at all, let alone that the
   two land on one date this year.
3. **The public form is a *state* festival with a budget line.** Maharashtra
   declared Sarvajanik Ganeshotsav a state festival and committed public money to
   promoting it. No other state has an equivalent. That is a structural
   explanation of asymmetry that requires no judgment about anyone's devotion.
4. **A ten-day public Ganeshotsav has run in New Delhi since 1997**, organised by
   the Maharashtra government's own Delhi establishment. Concrete
   counter-evidence to "not celebrated in north India", with a named institution
   and a year.
5. **The Government of India's own tourism portal files the festival under
   Maharashtra.** The national classification is itself a cause of the
   impression — a mechanism, not an opinion.

**Stale data in the incumbents:** the Deccan Herald result is a 2021
pandemic-era permit story still ranking for a 2026 evergreen question. The Quora
threads carry no dates at all.

**Unanswered questions the incumbents raise and drop:** whether Ganesh Chaturthi
is a public holiday in north India; whether the north Indian observance has a
name; what "not celebrated" actually means when the deity is invoked in every
north Indian puja; whether north Indian pandals are new or old.

**Fan-out sub-queries → H2s / FAQs:**

- Is Ganesh Chaturthi celebrated in north India at all? → answer paragraph + H2 1
- What does the observance look like in a north Indian home? → H2 2
- Why does it *look* absent? → H2 3 (three named mechanisms)
- What else is happening on that date in the north? → H2 4 (Teej collision)
- Where are the north Indian public pandals? → H2 5
- Why is Maharashtra different? → H2 6
- Uttarakhand specifically? → FAQ
- Is it a holiday in UP/Delhi? → FAQ
- Where *is* it celebrated? → comparison table + FAQ

**Angle (recorded as `batchMeta.angle`):** Wins by being the only page that
corrects the premise in its first sentence and then dates the collision —
Hartalika Teej and Ganesh Chaturthi both fall on Monday 14 September 2026 — while
naming a New Delhi sarvajanik mandal that has run since 1997 and a Maharashtra
state-festival budget line, against SubhSandesh's own 3.7% occasion-dated share
of 3,894 pages.

---

## Phase 3 — sources

`USED-SOURCES.md` closes `en.wikipedia.org` (6 posts), `archive.org` (3),
`pmc.ncbi.nlm.nih.gov` (7), `arxiv.org` (5), `nature.com` (4), `pib.gov.in` (3),
`aclanthology.org` (3), `frontiersin.org` (3), `journals.plos.org` (3),
`dsal.uchicago.edu` (3). **None is used here.** No Wikipedia link appears in the
body at all; the only Wikipedia URLs in the file are `sameAs` entity targets in
`structuredData`, which the reference file says do not count against the 0–2 body
budget.

| # | Source | Type | Subject test | Verified how |
|---|---|---|---|---|
| 1 | `maharashtrasadan.maharashtra.gov.in/en/event/ganeshotsav/` | Govt of Maharashtra, its own Delhi establishment | Pass — a New Delhi Ganeshotsav | Fetched; page states verbatim that "Sarvajanik Ganehotsav Samiti, Maharashtra Sadan was formed in 1997 by the employees of Maharashtra Sadan", that "The staff of all the Maharashtra Government Offices and Corporations in New Delhi is the part of the Samiti", that the celebration is "in true tradition as set by Lokmanya Bal Gangadhar Tilak", and that "It runs for 10 day" |
| 2 | `newsonair.gov.in/maharashtra-declares-sarvajanik-ganeshotsav-as-state-festival` | Akashvani News (Prasar Bharati) | Pass — the state-festival declaration | Fetched; states the Maharashtra government "has officially declared 'Sarvajanik Ganeshotsav' as a state festival", "will bear the expenses for organising and promoting grand celebrations across Maharashtra", announced in the State Legislative Assembly by Cultural Affairs Minister Ashish Shelar, and that the festival "symbolises social unity, nationalism, the spirit of freedom, self-respect, and pride in the Marathi language" |
| 3 | `incredibleindia.gov.in/en/festivals-and-events/maharashtra/ganesh-chaturthi` | Ministry of Tourism, Govt of India | Pass — the national classification of the festival | Fetched; the festival page sits on the `/maharashtra/` path and its own "Major States" field reads **Maharashtra**; describes a 10-day celebration beginning on Bhadrapada chaturthi and ending in a public procession and visarjan |
| 4 | `doi.org/10.3390/rel14010022` — De Koning, *Religions* 14(1):22 | Peer-reviewed, gold open access, CC BY 4.0 | Pass — a study of Ganesha Chaturthi ritual practice | Licence, date (22 Dec 2022) and abstract verified via the Crossref API record. **Abstract only — MDPI returned HTTP 403 on three URL forms, so the full text was not read.** Cited only for what the abstract says: that the festival's water pollution follows from "the public element of immersion of Ganesha idols", and that the fieldwork was conducted "in Chennai and Mumbai in 2022" |
| 5 | `doi.org/10.30664/ar.107671` — Frøystad, *Approaching Religion* 11(2), 5–22 | Peer-reviewed, open access, CC BY 4.0 | Pass — Hindu worship practice and its public/mediated forms | Landing page fetched; licence, date (22 Nov 2021) and abstract confirmed. **Abstract only — the PDF returned as unparsed binary, so the full text was not read.** Cited only for the abstract's claim that the pandemic "accelerated the transition to online religious services in prominent temples while pausing the activities in others, thus augmenting a marked digital divide" |
| 6 | `drikpanchang.com/festivals/teej/hartalika-teej-date-time.html?geoname-id=1273294&year=2026` | **Date/festival reference — claimed under the BRIEF §4 exemption and marked as such in the source entry** | N/A — a fact-check, not a citation | Fetched for Delhi (`geoname-id=1273294`, a URL not previously spent): "Hartalika Teej on **Monday, September 14, 2026**", Pratahkala muhurat 06:05 AM–07:06 AM, Tritiya Tithi 07:08 AM on 13 Sep to 07:06 AM on 14 Sep. The same page states Hartalika Teej "is observed during Shukla Paksha Tritiya of Bhadrapada month" and is "known as Gowri Habba in Karnataka, Andhra Pradesh and Tamil Nadu" |

**Counts:** 6 sources. 5 pass the subject test; 2 are peer-reviewed and
open-access; **0 generic context statistics** (no TRAI, no Census, no MEA, no PIB
— the three government sources are each specifically about this festival, not
about India in general); 1 date/festival reference under the marked exemption;
0 Wikipedia; 0 competitors.

**Swap test:** all six fail to survive a swap. Sources 1, 2 and 3 are about the
institutional geography of *this* festival and would be meaningless in a modak
recipe or a rangoli post. Source 6 is a Hartalika Teej date, which is relevant to
no other keyword in the batch. Source 4 is nearest to portable, and its use here
is narrow and specific: the word *public* in its abstract is the distinction the
whole post turns on.

**Domain caps after this post:** `maharashtra.gov.in` 1, `incredibleindia.gov.in`
1, `mdpi.com` 1, `journal.fi`/`doi.org` — `doi.org` carries many spent DOIs but
both DOIs here are unspent URLs; `newsonair.gov.in` reaches 3 posts and is now at
cap; `drikpanchang.com` is exempt for the date reference.

### What was searched and did not work — recorded honestly

The angle needed a peer-reviewed study of *Ganesh Chaturthi observance in north
India specifically*. It does not appear to exist in the open-access literature.
Searched: `Ganesha worship regional geography north India household ritual`,
`domestic religion versus public festival Hinduism regional variation ritual
calendar`, `Hartalika Teej Bhadrapada north India women's vrat`, `sarvajanik
Ganeshotsav mandal Delhi Marathi migrants spread outside Maharashtra`,
`"Ganesh" festival "north India" pandal public celebration growth`, plus
OpenAlex queries for `Ganesh Chaturthi`, `Ganeshotsav`, `Ganapati festival
Maharashtra public`, `Hindu festival regional variation north India`, `Teej
festival women north India`, `vrat fasting women Hindu north India`, `regional
variation Hindu deity worship India`, `domestic worship household puja India
ethnography`, `festival public sphere India procession region`, and Semantic
Scholar queries for `Ganesh Chaturthi north India` and `Ganesha worship
Rajasthan`.

What the open-access corpus on this festival actually contains is water quality,
noise levels and idol materials — Chennai, Mumbai, Bhopal, Jodhpur, Kolkata. Two
promising items were unreachable: `tandfonline.com/doi/full/10.1080/0048721X.2023.2211397`
("Hindu festivals in small town India") returned HTTP 403, and Anand Singh's 2017
chapter "Zee TV and the Reinforcement of Ganesha Worship among People of
North-Indian Origin in Durban" is publisher-closed with no repository copy —
which is a shame, because media-driven diffusion of the Maharashtrian form is
exactly this post's mechanism. `shodhganga.inflibnet.ac.in` timed out on port 8443.
DOAJ's API was unreachable from the sandbox and Semantic Scholar rate-limited five
of six queries.

So the post leans on primary institutional documents and first-party data rather
than on scholarship for its regional claims, and the audit records that. The two
peer-reviewed sources it does carry are both abstract-only, which is a real
weakness and is recorded as such rather than papered over.

---

## Phase 4–5 notes

- Direct answer, with the premise corrected, in sentence one. Two first-party
  numbers inside the first 150 words.
- **Sensitivity:** every regional statement is descriptive. No region observes
  "properly"; no region has lapsed. The word "less" is attached to *public
  infrastructure and state sponsorship*, never to devotion. The Tilak attribution
  is given as the Maharashtra government's own characterisation ("in true
  tradition as set by Lokmanya Bal Gangadhar Tilak"), not asserted as settled
  history — the essay sibling is where the historiography is argued.
- Internal links, absolute URLs, after value is established:
  `https://subhsandesh.in/happy-ganesh-chaturthi` (mandatory),
  `https://subhsandesh.in/guides/happy-ganesh-chaturthi` (the written build guide,
  as a body reference), `https://subhsandesh.in/templates`.
  `batchMeta.templateUrls` = `["/happy-ganesh-chaturthi"]` only.
- `categorySlug` = `indian-festivals`.
- §0 social block pasted verbatim immediately before `## Sources`; its two URLs
  are excluded from `batchMeta.sources` and from the source count.
- Marker words unique to this keyword, so a crossed-over draft would be
  detectable: **Hartalika Teej**, **Maharashtra Sadan**, **Ashish Shelar**.
- `structuredData`: one `ItemList` mirroring the three H3s under "Three things
  that make the festival look absent", plus one `@id`-matched `BlogPosting`
  enrichment block on `#post` carrying `citation` (six entries, one-to-one with
  `batchMeta.sources`), `about` and `mentions`. A `FAQPage` block is also emitted,
  mirroring `article.faqs` one-to-one in the same order — but with
  `@id` = `<canonicalURL>#faq`, because `structured-data.md` records that a bare
  `FAQPage` is silently discarded and that an `@id` match is what decides survival.
  The eleven FAQs still live in `article.faqs` and nowhere in `contentMarkdown`.

---

## Phase 6–7 outcome

Final measurements, all taken with the authoritative plain whitespace split.

| Measure | Value |
|---|---|
| Body words, plain split, **including** the 46-word §0 social block | **1,718** (target 1,650–1,760) |
| FAQs, in `article.faqs` only | 11 |
| `metaTitle` / `metaDescription` / `excerpt` / H1 lengths | 59 / 156 / 238 / 60 chars |
| Audit | 46 passed, 4 failed, `passed ∩ failed = ∅`, 46 + 4 = 50 |
| Sources | 6 (5 topical, 2 peer-reviewed open-access, 1 marked date reference, 0 generic context statistics) |
| `factsUsed` | 5, all byte-verbatim against `content/facts.md` |
| `categorySlug` / `templateUrls` | `indian-festivals` / `["/happy-ganesh-chaturthi"]` |
| Slug in Strapi | free — `filters[slug][$eq]` returned `total: 0` |

The 50 checklist strings in `auditReport` are **parsed out of
`references/publish-checklist.md` at build time**, using the same
accumulate-and-collapse rule as `scripts/verify-batch.mjs`, so they are
byte-verbatim by construction rather than by retyping. Retyped versions of three
of them (the two containing `**subject test**` / `**swap test**` markers and the
long source-cap item) failed the verifier's byte-verbatim check on the first run;
that is what prompted the change.

`scripts/verify-batch.mjs` reports **`✔ no problems`** and `46/50`. It could not
be run against the live batch directory because
`content/batches/2026-09-10-ganesh-10d/batch.json` does not exist yet — five
other agents are writing into that directory concurrently, so `batch.json` was
deliberately **not** created here. The verifier was run against an isolated copy
in the session scratchpad containing only this post plus the directory's
`USED-SOURCES.md` and `verify.config.json`.

One verifier note is left for hand judgment, and it is the intended behaviour:
the Drik Panchang Hartalika Teej URL claims the date/festival-reference
exemption, and the `sources` entry is prefixed `DATE/FESTIVAL REFERENCE` so the
exemption applies. A second note on the first run flagged the word
"subscription-funded" as price-adjacent — `facts.md` ships an empty Pricing
block, so any pricing-shaped phrasing is unsupportable. It described mandal
funding, not a SubhSandesh price, and was reworded to "neighbourhood-funded" to
remove the ambiguity rather than argued away.

**Files final:** `blogs/ganesh-chaturthi-in-north-india.json` and this brief.
`batch.json` untouched.
