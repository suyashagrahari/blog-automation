# Research brief — `propose message for crush`

- **Slug:** `propose-message-for-crush` (checked free against Strapi 2026-09-17 — `filters[slug][$eq]` returned `total: 0`)
- **Category:** `modern-romance` (verified against the live Strapi category list)
- **Templates:** `/date-invitation`, `/proposal`, `/templates`
- **Volume:** estimated band only, no tool data. No volume figure appears on the page.

---

## Phase 1 — SERP analysis (INHERITED, not freshly measured)

The session's WebSearch budget is exhausted at 200/200, so **no live SERP pass was run for
this keyword**. Everything below is read out of `content/keywords/2026-09-16-propose-100/serps.md`
(11 India-served SERPs measured 2026-09-16) and its `competitor-map.md`. No position is
described as current, and no page below was fetched or read for this post.

The two nearest measured neighbours:

| Keyword | Locale | Shape of the top 10 | Weak |
|---|---|---|---|
| `propose message for girlfriend in english` | India | chococraft.in, weddingwire.in, oyegifts.com, surpriseplanner.in, caratlane.com, giftalove.com (2025-stamped), plus Pinterest / Facebook | 6/10 |
| `how to propose a girl on whatsapp chat` | India | Quora ×2, TikTok ×2, YouTube, Facebook, shararat.in, myflowertree.com, chococraft.in, igp.com | 6/10 |

Inferred profile of what ranks on this cluster, from the SERP log rather than from page reads:

- **Publisher type:** gift, chocolate and jewellery retailers running quote-listicles, plus
  forum and short-video results. Not a single research-backed page in either top 10.
- **Format:** long "100 lines / 105 romantic proposal lines" listicles, no author, no citations.
- **Direct answer position:** the neighbouring SERPs show forum answers at #1 and #8 for the
  WhatsApp query, which is the classic signal that no content incumbent has answered the
  actual question.
- **Staleness:** `giftalove.com` still carries a 2025 stamp; `oyegifts.com` was refreshed 2026.
- **One crush-specific result exists in the log:** `quora.com/How-can-I-propose-my-crush-on-WhatsApp`
  at #8 for the WhatsApp query — a forum thread, flagged weak. That is the only direct evidence
  in the repo about who currently serves the crush intent.

Own-site pass in the same file: 46 live articles in proposal territory, **none of them ranked
in any of the 11 measured SERPs**.

---

## Phase 2 — Gap analysis

**Table stakes** (present across the retail listicles): a set of quotable lines; a note on
timing; "keep it short"; a Propose Day tie-in. Per the BRIEF, basic advice of this kind is now
table stakes, not a gap.

**The gap.** Every page on this cluster — and every sibling page in this batch — is written for
someone already in a relationship or close to one. Nothing addresses the reader whose feelings
may not be reciprocated, who may not know the person well, and who may damage a friendship or
make someone uncomfortable. Specifically, nothing on this keyword:

1. tells the reader when **not** to send anything;
2. describes the experience of the person receiving the message;
3. mentions that repeated contact after a clear refusal is a criminal offence in India;
4. treats "accept it and step back" as a legitimate answer to a sub-question.

**Unanswered questions the incumbents raise and drop:** "what if she says no", "will it ruin
the friendship", "what if she leaves it on read".

**Fan-out sub-queries** (derived, not observed — no PAA box was readable):
should I tell my crush · what to say to a crush over text · will telling my crush ruin our
friendship · what if my crush says no · how long should the message be · is WhatsApp okay ·
can I propose to a crush at work or college · what if there's no clear answer · Propose Day
message for a crush.

Each became an H2 or an FAQ.

**Angle:** wins by being the only post on this keyword that treats "send nothing" as a real
answer — grounded in the unrequited-love literature showing the recipient finds refusing far
harder than the sender assumes (targets 4.24 vs suitors 2.92 on a 7-point scale, N = 942) and in
SubhSandesh's platform-wide figures that roughly one in fourteen of 4,567 pages is built and
never sent.

---

## Phase 3 — Sources

Discovered with `findpapers.mjs` (Crossref + Europe PMC), plus a DOAJ API sweep and
green-OA hunting in DSpace repositories. `capcheck.mjs` was run before choosing and again
before finalising.

| # | Source | What it actually says | Read | Domain state |
|---|---|---|---|---|
| 1 | Bringle, Winnick & Rydell (2013), *SAGE Open*, via IUPUI ScholarWorks | Five types of unrequited love, two of them crushes ("on someone unavailable", "on someone nearby"). UL was **over 4× more frequent than equal love** across a 2-year window; "crush on someone nearby" was the most reported type (n = 83, 20.5%). **Turmoil** was higher in UL than in mutual love *or* friendship, and rose as the one-sided relationship became more interdependent. | Full text | `scholarworks.indianapolis.iu.edu` — new to the batch |
| 2 | Bohns & DeVincent (2018), *SPPS*, author copy via Cornell eCommons | N = 942 STEM grad students. Targets rated discomfort saying no at **M = 4.24 (SD 1.88)**; suitors estimated **M = 2.92 (SD 1.48)**. Targets' worry about professional repercussions M = 2.15 vs suitors' estimate M = 1.64. 22.8% had been pursued by someone in their lab/field. Women **more than twice** as likely to be targets. Suitors misread reluctance to refuse as interest, "perpetuating — and potentially escalating — a cycle of romantic pursuit". | Full text | `ecommons.cornell.edu` — 3rd and final post |
| 3 | The Bharatiya Nyaya Sanhita, 2023 (No. 45 of 2023), s. 78, official MHA Gazette PDF | A man who "follows a woman and contacts, or attempts to contact such woman to foster personal interaction repeatedly despite a clear indication of disinterest" commits stalking: up to **3 years** on first conviction, 5 on a second. Gazette dated 25 December 2023. | Full text (PDF extracted, section located verbatim) | `mha.gov.in` — new to the batch |
| 4 | Halatsis & Christakis (2009), *JSPR* | Sexual attraction is a real challenge in cross-sex friendship, but **when the attraction is expressed the friendship prevails in the majority of cases**. | **Abstract only** — publisher returns HTTP 403; abstract read from the Crossref deposited record | `journals.sagepub.com` — 3rd and final post |
| 5 | Bleske-Rechek et al. (2012), *JSPR* | Both emerging and middle-aged adults nominated attraction to a cross-sex friend as a **cost more often than a benefit**; men reported more attraction to their friend than women did. | **Abstract only** — same 403 | same domain as #4 (one post, two URLs) |

Subject test: #1, #2, #4, #5 are all directly about one-sided attraction or attraction inside a
friendship. Peer-reviewed + open access: #1 (SAGE Open, CC) and #2 (green OA). Generic context
statistics: **zero** (#3 is a statute, not a statistic). Swap test: none of the five could sit
unchanged in any other post in this batch.

### Rejected candidates and why

- **Baumeister, Wotman & Stillwell (1993), JPSP** — the canonical unrequited-love paper.
  OpenAlex reports `oa_status: closed`; no green copy found. The rejector-side finding is
  carried instead by #2, which measured it directly and which was read in full.
- **"Of Persistence and Pursuit: Unwanted Pursuit Behavior in Indian Young Adults",
  *Indian Journal of Mental Health* (2021)** — the only Indian empirical hit. Rejected on
  quality: the publisher's site advertises author charges alongside SJIF, Index Copernicus
  and isindexing badges and no recognised index. Crossref indexing is not peer review.
- **Frontiers in Psychology, "Humorous Coping With Unrequited Love" (2021)** — on-lane and
  open access, but `frontiersin.org` is at the 3-post cap.
- **Philosophies (MDPI, 2024), "Unrequited Love, Flirting and Non-Moral Resentment"** — on-lane
  and open access, but analytic philosophy with no empirical content, and the full text was not
  retrievable (bot check).

### Search terms tried

`unrequited love study` · `unreciprocated romantic attraction research` ·
`romantic rejection wellbeing research` · `cross-sex friendship attraction study` ·
`friendship after rejection study` · `unrequited love rejector heartache humiliation` ·
`unwanted pursuit persistence after rejection` · `rejecting unwanted romantic advances difficulty`,
plus DOAJ queries on `unrequited love`, `cross-sex friendship`, `romantic rejection`,
`unwanted pursuit`, `friendzone`.

**Finding worth recording: there is no peer-reviewed study of unrequited-love disclosure in an
Indian sample that survives a quality check.** The India-specific grounding on this page is
therefore statutory rather than empirical.

---

## Phases 4–6 — draft, links, audit

- Body **1,777 words** excluding FAQs. **12 FAQs** in `article.faqs` only.
- All six messages are original to this page. No competitor page was fetched, quoted or
  paraphrased; no lyrics or film dialogue.
- Internal links: `/date-invitation` (the genuine alternative — a crush-sized ask),
  `/proposal` (mandatory, placed after the ask-size table establishes why), `/templates`.
  The page says plainly that for someone who barely knows you, **no page at all** is correct.
- Every SubhSandesh figure is labelled platform-wide or `/love-gf`-sampled **in body prose**.
  No figure is attributed to proposal pages. No price, free tier or paid tier is stated.
- Propose Day 2027 = **Monday 8 February 2027**, verified by date arithmetic before printing.
- Audit: **47 passed / 3 failed**, disjoint, sum 50, strings byte-verbatim from
  `references/publish-checklist.md`. The three failures are the un-measurable Phase 1 items
  (top-5 claim check, observed fan-out) and the two paywalled abstracts. Structural
  limitations live in `batchMeta.structuralLimitations`, not in `failed`.
