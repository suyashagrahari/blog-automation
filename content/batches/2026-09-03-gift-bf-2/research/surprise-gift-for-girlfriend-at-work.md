# Research brief — `surprise gift for girlfriend at work`

Batch: `2026-09-03-gift-bf-2` · Slug: `surprise-gift-for-girlfriend-at-work` ·
Category: `digital-gifts-romance` · Written 2026-09-04

---

## Phase 1 — SERP (measured on real Google, `gl=in&hl=en`, 2026-09-03)

**6 of 8 weak. An AI Overview fired.**

| Result | Type | Verdict |
|---|---|---|
| `fnp.com` | Gifting retailer | Weak. Competitor under `references/competitors.md` — read, never cited, never linked. |
| `amazon.in` | Marketplace listing | Weak. Product grid, no editorial answer. |
| `quora.com` | UGC | Weak. Nobody edited it. |
| `nestasia.in` | Homeware/gift shop | Weak. Commercial. |
| `reddit.com` | UGC | Weak. |
| `boontoon.com` | Indian handicraft shop | Weak **and** commercial — the brief's classifier caveat is correct, this is a shop mis-scored as editorial. |
| `theknot.com` | US wedding authority | Non-weak. Beatable only on India-specific ground and on logistics it does not cover. |
| `styledbymckenz.com` | US lifestyle blog | Non-weak but thin on the actual query. |

**What every result has in common:** all eight answer *"what object should I buy?"*. Not one
answers *"what happens when an object is sent to an office?"* — no reception desk, no gate
register, no question of whether she is in the building that day, no mention of who watches
her open it. Six of them are trying to sell the object.

**AI Overview implication:** the direct answer has to be liftable as a single standalone
paragraph inside the first 150 words, and every H2 has to answer on its own.

## Phase 2 — Gap and angle

**Angle.** Wins by being the only post that treats the workplace as a *delivery destination*
rather than a gift theme: the four-person hand-off chain a parcel crosses, the measured fact
that office attendance is coordinated around other people so "her desk on Tuesday" is a
gamble, the possibility that hot-desking means there is no "her desk" at all, and an honest
account of the embarrassment risk.

**Fan-out sub-queries the H2s map to:**

1. What actually happens to a parcel sent to an office → `## What a workplace gift delivery actually involves`
2. Will she be in the office that day → `## Will she even be at that desk today?`
3. Will her colleagues see it → `## Who else sees it, and whether that is what you want`
4. Is it embarrassing to get a gift at work → `## What the research actually says about embarrassment at work`
5. What are my options → `## Four ways to reach her at work` (4 H3s)
6. Which option is best → `## The four routes, compared`
7. When should I not do this → `## When her workplace is the wrong place to send anything`

### Distinctness against the two named siblings

| Sibling | Theirs | Mine | Collision? |
|---|---|---|---|
| `surprise-gift-for-girlfriend-instant` | **Time** — what arrives in minutes, built on the 7.2-hour median edit gap. Leads with "instant". | **Location.** The word "instant" appears nowhere in my body; my time claims are about *her* calendar (which day she is in the office), never about speed of arrival. | No. |
| `how-to-surprise-my-girlfriend-for-no-reason` | Absorbed `…after work`. Owns **timing around the workday** (the end-of-workday slot) and **social audience in general**, on Sonnentag & Bayer 2005 detachment (`kops.uni-konstanz.de`) plus a gender meta-analysis. | Owns the **workplace itself as a destination**: the courier→security→reception→floor chain, hybrid coattendance, hot-desking, a colleague signing for it, and private-versus-performed *receipt of a delivery*. | No. Deliberate separations below. |

**Deliberate separations from the `for no reason` sibling:**

- It owns the **end of the workday**; I never recommend a time-of-day slot as the answer. My
  timing claims are about *which day of the week she is in the building*.
- Its lens on the work domain is **detachment from work** (Sonnentag & Bayer via
  `kops.uni-konstanz.de`). I did not touch that paper or that lens. My work-domain research is
  **coattendance** (PNAS), **workspace preference** (SJWEH) and **boundary (in)congruence**
  (Frontiers) — three different literatures.
- It has an H3 "Make it something she can open alone" as *advice*. I do not repeat the advice;
  I explain the **mechanism** (boundary intrusion, and control as the moderator) and then show
  in a table which routes structurally cannot offer it.
- It asks whether the advice changes because the recipient is a woman and answers no. I do not
  re-litigate that question at all.
- Zero shared sources. Zero shared source domains.

## Phase 3 — Sources

**4 sources. All four are peer-reviewed and open-access. All four pass the subject test.**
None appears in the 50 spent URLs (checked by parsing `USED-SOURCES.md` **by section**, lines
36-88 only — the 759 URLs under `LEGAL TO CITE` are *not* a block list).

| # | URL | Domain uses in this batch after mine | What it gives me |
|---|---|---|---|
| 1 | `https://europepmc.org/article/PMC/PMC10743359` | `europepmc.org` 2 of 3 | Charpignon et al., **PNAS**, 11 Dec 2023. Anonymised building-access data, ~43,000 employees: in-person attendance **29% higher when the manager was present**; **+16%** per 1-SD rise in share of teammates present. CC BY-NC-ND. |
| 2 | `https://www.sjweh.fi/article/4264` | `sjweh.fi` **1 of 3 — first ever use** | Aboagye, Botha, Ljungberg, Danielsson, Jensen, **Scand J Work Environ Health**, online 11 Dec 2025 (2026 Mar issue). Discrete-choice experiment, **N=433** under a mandated hybrid policy: **a dedicated desk (no desk sharing) was the strongest single influence** on workspace preference. |
| 3 | `https://www.mdpi.com/2076-328X/12/8/278` | `mdpi.com` 2 of 3 | La France, **Behavioral Sciences**, 11 Aug 2022, CC BY. **N=259** organisational members; three underlying belief structures about workplace romance, one being **"the right to demand privacy about workplace romance"**; one of four advice types was **silence**. |
| 4 | `https://www.frontiersin.org/articles/10.3389/fpsyg.2021.772537/full` | `frontiersin.org` 2 of 3 | Mellner, Peters, Dragt, Toivanen, **Frontiers in Psychology**, 15 Nov 2021, CC BY. **n=1,229** Swedish managers. **"Intrusion"** = enacting integration while preferring segmentation → higher work-life conflict than the opposite mismatch; **perceived boundary control mitigated it**. |

**Cap state re-verified live immediately before writing** (scan of every
`blogs/*.json` in this batch): `pmc.ncbi.nlm.nih.gov` 3/3 blocked, `purehost.bath.ac.uk` 3/3
blocked, `europepmc.org` 1, `frontiersin.org` 1, `mdpi.com` 1, `sjweh.fi` 0. No domain of mine
reaches 3. Publishers are four distinct ones (NAS, NIVA/FIOH, MDPI, Frontiers) — no hidden
resolver concentration, and I used **no** `doi.org` URL.

**Access notes (what worked and what lied):**

- `pnas.org` returns **403 to plain `fetch` and also to a full Chromium session** (Cloudflare
  interstitial). Full text obtained from `ebi.ac.uk/europepmc/webservices/rest/PMC10743359/fullTextXML`;
  the citable landing page `europepmc.org/article/PMC/PMC10743359` returns 200.
- `mdpi.com` returns **HTTP 200 with a ~2.2 KB challenge shell** to plain `fetch` — the same
  fake-success pattern the brief flags for `journals.ashs.org`. It renders fully in a Chromium
  session, where I verified the abstract and the 11 Aug 2022 publication date; the full text was
  cross-read via the Europe PMC REST endpoint for `PMC9404732`.
- `europepmc.org/api/fulltextRepo` PDF endpoint 403s; the REST `fullTextXML` endpoint is the one
  that works.
- `OpenAlex` and `Semantic Scholar` were **hard 429** throughout (concurrent siblings).
  Europe PMC REST and the DOAJ article API both worked and carried the search.
- `html.duckduckgo.com` and `lite.duckduckgo.com` returned **HTTP 202 with zero parseable
  results** for me, on three separate queries. It did not work in this session.

**Rejected sources and why:**

- `journals.plos.org` "Intimate but not intimate: The perils of workplace romance…" (2023) —
  **retracted in 2025** (`10.1371/journal.pone.0330657`). Not used.
- `kops.uni-konstanz.de` (Sonnentag & Bayer 2005) — taken by the `for no reason` sibling and
  the wrong lens for me anyway.
- `reference-global.com` / Kolluru et al. 2021, "Post COVID-19 Work Strategies: Insight on
  Indian IT Sector" — open access and India-specific, but its findings are about client
  deliverables, profitability, carbon footprint and team cohesiveness. **No attendance or
  hybrid-pattern number.** It would have failed the subject test as decoration.
- MDPI *Humanities* 2021 on vicarious embarrassment in cringe humour — conceptually adjacent,
  but about comedy, not workplaces. Would have failed the subject test.
- `indiapost.gov.in` — already used once in this batch, and postal norms are about mail rather
  than the office-delivery chain I actually describe.
- Wikipedia — **zero** links in the body. Used only for `sameAs`/QID verification.

---

## The claim the brief asked me to settle

> *"A workplace gift delivery carries a real embarrassment risk worth writing about."*
> — flagged by the coordinator as an inference from the SERP, not a sourced finding.

**Verdict: the coordinator's instinct is directionally right, but it cannot be stated as a
research finding, and I did not state it as one.**

### What I searched

Europe PMC REST (`OPEN_ACCESS:y` filter), with these query strings:

- `ABSTRACT:"embarrassment" AND ABSTRACT:"observers"` — 1 hit, a quantum-mechanics paper.
- `ABSTRACT:"workplace" AND ABSTRACT:"romantic relationship" AND ABSTRACT:"coworkers"` — **0 hits.**
- `ABSTRACT:"public recognition" AND ABSTRACT:"employees" AND ABSTRACT:"discomfort"` — **0 hits.**
- `ABSTRACT:"gift" AND ABSTRACT:"recipient" AND ABSTRACT:"audience"` — **0 hits.**
- `TITLE:"self-disclosure" AND ABSTRACT:"workplace"` — 2 hits, both clinical (HIV disclosure, healthcare-worker empathy).
- `ABSTRACT:"social sharing" AND ABSTRACT:"privacy" AND ABSTRACT:"romantic"` — **0 hits.**
- `TITLE:"workplace romance"` — 5 hits, one retracted, one duplicate of the retraction.

DOAJ article API:

- `bibjson.abstract:("embarrassment" AND "audience")` — 11 hits, all media/theatre/advertising.
- `bibjson.abstract:("unwanted attention" AND "workplace")` — 2 hits, **both about sexual trauma in the French military**.
- `bibjson.title:("public" AND "private" AND "recognition")` — 4 hits, all facial-recognition law.
- `bibjson.abstract:("surprise" AND "gift" AND "recipient")` — **0 hits.**
- `bibjson.abstract:("workplace" AND "boundary" AND "segmentation")` — **0 hits.**
- `bibjson.title:("hybrid work" AND India)` — **0 hits.**

OpenAlex (`workplace privacy boundary management`, `romantic relationship visibility workplace`,
`unsolicited attention workplace discomfort`, `impression management colleagues personal life`,
`hybrid work office attendance`) — **429 on every attempt.** DuckDuckGo HTML and lite endpoints —
**202, zero results.**

### What this means

1. **No study measures embarrassment caused by a romantic gift delivered to a workplace.** The
   nearest literature that exists is about **harassment**, not affection — the only "unwanted
   attention at work" hits were sexual-trauma prevalence studies. Stretching those onto a
   boyfriend sending flowers would be dishonest and, frankly, offensive to the subject matter.
   I did not do it.
2. **What *is* measured is the mechanism underneath the claim**, and it is measured well:
   - **Privacy about romance at work is an empirically identified normative position**, not a
     writer's assumption. La France 2022 found it as one of three underlying belief structures
     among 259 organisational members, and found *silence* as one of four advice types people
     actually give. **Limit, stated in the body:** that study is about relationships *between
     colleagues*, not about an outside partner sending something in, so it does not transfer
     directly. It establishes that "keep my romantic life out of this building" is a real,
     held position — nothing more.
   - **Mellner et al. 2021 names and quantifies the discomfort mechanism.** "Intrusion" —
     enacting integration of work and non-work while *preferring* them separate — was
     associated with higher work-life conflict than the opposite mismatch across 1,229
     managers, and **perceived boundary control mitigated the effect.** An unrequested parcel
     landing on her desk is an integration she did not choose, on your timing. That is the
     shape of the risk, and control is the moderator.
3. **So the post says exactly that, out loud, in its own H2.** `## What the research actually
   says about embarrassment at work` opens with "The honest answer is that no study measures
   embarrassment caused by a romantic gift arriving at someone's workplace", lists the search
   terms I used, tells the reader to "treat the risk as reasoning, not as a finding", and adds
   *"anyone telling you it is proven is guessing too."* Then it reasons from the boundary
   research, clearly labelled as a mechanism rather than a measurement.

**Net:** the topic is worth writing about — it is the whole gap in the SERP — but the *risk* is
reasoning, not research, and the post is now the only page in the row that says so. That
transparency is itself a citation-worthy property.

## A third thing in the brief I think is wrong

The brief and `references/publish-checklist.md` require *"At least one table column uses
first-party data"* while also capping the table at **3-4 columns** and **3-5 rows** of
**real values only — never 'fast', 'affordable', 'high'**. For a comparison whose rows are
*physical delivery routes*, no first-party column can honestly span all rows: SubhSandesh has no
data about couriers or reception desks, so three of four cells in any such column would be
`—`, which is padding by the checklist's own standard. I resolved it by making the fourth
column *"Opened on her own phone"* — a real yes/no across all four rows, with the deciding cell
carrying the first-party figure (50.2% of shared pages are opened on a phone, 21,130 of 42,099
views). I have marked the item **passed**, but flagging the tension: the rule assumes every
comparison is between SubhSandesh and near-substitutes, and it is not.

Also worth recording for the next batch: the **lifetime "heavily-used domains" table in
`USED-SOURCES.md` is actively misleading as a decision input**, exactly as the coordinator's
mid-run correction said. `frontiersin.org` sits at 15 posts lifetime and was still legal for me;
`pmc.ncbi.nlm.nih.gov` sits at 17 lifetime and is blocked — but because siblings filled it
*today*, not because of the 17. The only usable signal is a live scan of `blogs/*.json`.

## Phase 5 — Internal links and first-party facts

**Internal links (3, all from the permitted five, all after value is established, none in the
opening):** `/darling`, `/birthday-gf`, `/love-gf` — all three inside
`### 4. A link she opens on her own phone`, which is the first point in the post where a reader
has been given a reason to want one. `/birthday-gf` is described as *"a birthday page for a
partner"*, per the brief's instruction to use "partner" in prose. **`/missyou-gf` was not used**
— it carries no first-party figure and I had no honest number to attach to it.
`batchMeta.templateUrls` = `["/love-gf", "/darling", "/birthday-gf"]` — a different set from
both named siblings.

**Facts used (7, byte-verbatim, extracted programmatically from `content/facts.md` rather than
retyped, so the `— measured 2026-09-03` suffix and the straight apostrophes are guaranteed):**

- 42.7% password-protect (1,462 of 3,425) — **the primary fact, and deliberately different from
  both siblings' leads** (the `instant` sibling led on the 7.2-hour edit gap, the `no reason`
  sibling on 12.3 views per page). It is also the single most on-theme figure in `facts.md` for a
  post about privacy at work.
- 50.2% opened on a phone (21,130 of 42,099) — the brief's own on-point figure. Used twice: in
  the answer paragraph and as the deciding cell of the comparison table.
- 3,425 pages across 15 page types; `#1 /love-gf` 1,001 / 29.2%; `#4 /darling` 349 / 10.2%;
  `#5 /birthday-gf` 258 / 7.5%; 99.4% published and shared (3,405 of 3,425).

**Two of the seven are inside the first 150 words** (42.7% and 50.2%).

**Not claimed anywhere:** no price, cost, fee, "free" or tier language — the Pricing block in
`facts.md` is empty, and I grepped the entire serialised `article` object for `free`, `cost`,
`price`, `fee`, `rupee`, `₹`, `cheap`, `expensive`, `afford`, `tier` and `discount` before
writing the file. The only hit was the substring "tier" inside "Frontiers". No first-party number
is attached to recipient gender — the database does not record it.

## Phase 6 — Audit summary

50 checklist items, extracted programmatically from `references/publish-checklist.md` with
wrapped lines rejoined and whitespace collapsed. **48 passed, 2 failed, disjoint, sum 50** —
asserted in code, not by eye.

**Failed, both structural and both flagged rather than fixed:**

1. `Paragraphs 2–3 sentences throughout` — the known unsatisfiable conflict. `page-structure.md`
   Block 1 prescribes the answer paragraph as one liftable unit of *direct answer + two to four
   specific numbers, at least two first-party + one sentence stating what the page covers*, which
   is four sentences minimum. An AI Overview fired on this SERP, so splitting it would cost the
   liftable answer. 28 of 29 body paragraphs are 2-3 sentences; the answer paragraph is 4.
2. `Slug short, hyphenated, lowercase, no stop words` — the assigned slug carries "for" and
   "at". Both are load-bearing: the slug is the exact target keyword, and "at work" is the entire
   differentiator against the sibling on the same head term. Verified free in Strapi
   (`filters[slug][$eq]` returned `total: 0`).

**Body:** 1,793 words by plain whitespace split, FAQs excluded. 1 H1, 8 H2s, 4 H3s, no skipped
levels. 4 outbound links, one per source, verified to match `batchMeta.sources` in the same
order; 0 Wikipedia links; 0 competitor links. **12 FAQs**, in `article.faqs` only — no FAQ heading anywhere in `contentMarkdown`.
`structuredData` is additive only: one `@id`-matched `BlogPosting` enrichment on
`…#post` carrying `citation` (4 entries, mirroring `batchMeta.sources` one-to-one and in the
same order, asserted in code), `about` (Gift, Q184303) and 4 `mentions` (Remote work Q1135326,
Hot desking Q3472398, Workplace relationship Q8035069, Receptionist Q1722406 — every QID
resolved through the Wikipedia API in one call, and note `Workplace romance` **redirects** to
`Workplace relationship`, so the redirect target is what I stored). Plus one `ItemList` mirroring
the four H3s in order. No `AggregateRating`, `Review` or `HowTo`.
