# Research brief — "virtual propose day"

- **Slug:** `virtual-propose-day`
- **Batch:** `2026-09-17-propose-12`
- **Category:** `modern-romance`
- **Run date:** 2026-09-17
- **Research lane (assigned):** ritual, timing and symbolic dates in romantic relationships

---

## Date fact-check (done first, because it is the post's entire freshness angle)

Computed from the calendar, then cross-checked against Wikipedia's `Propose Day`
entry and two independent date listings:

| Valentine week 2027 | Date | Weekday |
|---|---|---|
| Rose Day | 7 Feb 2027 | **Sunday** |
| **Propose Day** | **8 Feb 2027** | **Monday** |
| Chocolate Day | 9 Feb 2027 | Tuesday |
| Teddy Day | 10 Feb 2027 | Wednesday |
| Promise Day | 11 Feb 2027 | Thursday |
| Hug Day | 12 Feb 2027 | Friday |
| Kiss Day | 13 Feb 2027 | Saturday |
| Valentine's Day | 14 Feb 2027 | Sunday |

**Correction to the task brief.** The task prompt stated Propose Day is "the first
day of Valentine week (8 Feb Propose, 9 Rose…)". That ordering is wrong and the
prompt explicitly asked for independent verification. **Rose Day (7 Feb) opens the
week; Propose Day (8 Feb) is the second day.** Wikipedia's `Propose Day` article
states it verbatim: *"It is the second day in Valentine's Week … Rose Day on the
7th."* The post states the correct order and calls out the wrong one explicitly,
which is itself a differentiator — several ranking pages get the order muddled.

Weekday check (`Date.UTC(2027,1,d)`): 1 Feb 2027 = Monday, so 8 Feb 2027 = Monday.
2026's Propose Day fell on a **Sunday**, so the weekday genuinely changes the
planning advice year on year — a claim no incumbent makes.

---

## Phase 1 — SERP analysis

Searched: `virtual propose day`, `virtual propose day online proposal page website`,
`how to propose online long distance virtual proposal ideas India`,
`propose day wishes with name propose day quotes with name generator`.

**Headline finding: there is no established publisher in this SERP.** The result set
splits three ways and none of the three is a content competitor doing this well.

| # | Page | Type | Words / structure | Direct answer? | Data cited (+ date) | Format elements | Tone | Actually optimising for |
|---|---|---|---|---|---|---|---|---|
| 1 | `bemyval.co` | Two-person startup, product page | ~400 visible, form-first, no article structure | No — it is a builder form (Their Name / Your Question / pick a GIF) | None | GIF picker, no table, no FAQ, no byline | Product microcopy | "date proposal website maker", Western Valentine framing |
| 2 | `thegreeter.in/blog/romantic-ways-to-propose-online` | Indian startup blog | ~1,100, H1 + 8 numbered H3s + CTA blocks | Partly — an intro paragraph of scene-setting first | **Zero numbers of any kind**; dated 30 May 2026 | Emoji icons, numbered list, in-body CTAs, team byline (no person) | Warm, generic, no opinions | "ways to propose online" — pure listicle |
| 3 | TikTok discover pages (`/wedding-proposal-online`, `/online-wedding-proposal`) | UGC hub | n/a | No | None | Video grid | n/a | Video intent, not answerable text |
| 4 | Qwilr / Better Proposals / Venngage | **B2B proposal SaaS** | 800–1,500 | Yes, for the wrong query | Pricing, trial length | Tables, feature grids, strong schema | Corporate | "online proposal software" — sales documents |
| 5 | `virtualsamedaymarriage.com`, `wedonweb.com` | US novelty wedding sites | ~700–1,200 | No | None | Lists | Breezy | US virtual-officiant / novelty-marriage intent |
| 6 | `en.wikipedia.org/wiki/Propose_Day` | Encyclopedia | ~120 | Yes, one line | None | Stub | Neutral | Entity definition only |
| 7 | `lovenamepix.com`, `writenamepics.com`, `makephotoframes.com`, `thefestivalwishes.com` | Name-on-image farms | ~150 + image grid | No | None | Image grid, no schema | Template text | "propose day wishes with name" — image generators |
| 8 | Zee News / flower + jewellery retailer blogs | Listicles | 600–900 | No | None; several still carry **2025** in the title | Numbered list | Journalistic filler | Seasonal traffic, not maintained |

**Verification of the brief's claims:** confirmed. (a) "Proposal" without a romance
word returns B2B SaaS — Qwilr, Better Proposals and Venngage all appear on
`virtual propose day online proposal page website`. (b) The romance-side incumbents
are small startups (bemyval.co, thegreeter.in), not publishers. (c) No incumbent
states a 2027 date. (d) `subhsandesh.in` does not appear in any of the four SERPs
run — assume zero authority on this query.

**The gap the brief predicted, verified directly:** `bemyval.co` was fetched in
full. Its entire model is "Their Name / Your Question / pick a GIF" for
*Valentine, prom date, girlfriend* — there is no Propose Day anywhere on the page,
no 8 February, no Valentine-week concept. Wikipedia explains why in one sentence:
*"Although Valentine's Day is celebrated across whole world, Valentine's Week is
something celebrated in India only."* The Western link-builders have never had to
know the date exists.

---

## Phase 2 — Gap analysis

**Table stakes** (covered by nearly everything, so the post must include them):
what Propose Day is, that it is 8 February, long-distance/video-call ideas, a
numbered list of online proposal formats, something on what to write.

**The gap — what none of them cover:**

1. **The 2027 date with its weekday.** Everyone says "8 February". Nobody says
   *Monday*, and nobody notices that 2026's fell on a Sunday, which changes the
   available windows from a whole day to a lunch break or an evening.
2. **The Valentine-week ordering.** Multiple pages imply Propose Day opens the
   week. It does not; Rose Day does.
3. **Why the Western tools have no Propose Day page.** Nobody names the India-only
   nature of Valentine week as the reason.
4. **Privacy.** Not one page in the set mentions who else might open the link
   first, which is the most common real-world failure of a shared proposal page.
5. **Failure modes at all.** Every listicle is advocacy. None says what breaks each
   format, and none names a case where doing it virtually is the wrong call.
6. **Any number, first-party or otherwise.** The closest competitor article
   (thegreeter.in, May 2026) contains zero numbers.

**Stale data:** there is none to supersede, because there is none. The staleness is
in the *titles* — several ranking listicles still carry 2025.

**Unanswered questions raised and dropped:** how far ahead to build; what to do
about time zones; whether "propose day quotes with name" generators are worth it.

**Fan-out sub-queries → H2s:**

| Sub-query | Becomes |
|---|---|
| what is a virtual propose day | H2 definition block |
| when is propose day 2027 / what day of the week | H2 date block |
| how to propose online | H2 with 6 ranked H3 formats → `ItemList` |
| which online proposal format is best | H2 comparison table |
| propose day wishes / quotes with name | H2 on what to write |
| is it safe to send a proposal link | H2 on privacy and timing |
| should I propose online at all | H2 objection block |

**Angle (recorded as `batchMeta.angle`):** wins by being the only page that gives
the correct, weekday-dated Propose Day 2027 (Monday 8 February, the *second* day of
Valentine week, not the first) alongside the failure mode of each online format,
grounded in the 40.0% of 4,524 SubhSandesh pages whose creators password-protect
before sharing.

---

## Phase 3 — Sources (all fetched and verified; lane: ritual, timing, symbolic dates)

**Source-collision check, re-run after siblings appeared.** The blogs directory was
empty when drafting began, so a first pass found no collisions. A re-check once five
sibling files existed found **`arxiv.org` used by four posts in the batch**, over the
three-domain cap in `research-sources.md`. The arXiv source originally used here
(*Partnership through Play*, DIS '25) was therefore **dropped and replaced** with the
Holtzman et al. JSPR paper below — a stronger fit anyway, because its finding that
video-call frequency predicts nothing while responsive texting does is exactly the
evidence for ranking the asynchronous link above the live call. After the swap, **all
five URLs and all five domains in this post are used exactly once across the batch.**

| # | Source | Published | Verified claim used | Test |
|---|---|---|---|---|
| 1 | Dai, Milkman & Riis, *The Fresh Start Effect: Temporal Landmarks Motivate Aspirational Behavior*, **Management Science** ([open PDF, Wharton](https://faculty.wharton.upenn.edu/wp-content/uploads/2014/06/Dai_Fresh_Start_2014_Mgmt_Sci.pdf)) | published online 23 Jun 2014 | Abstract read from the PDF: across three archival field studies, Google searches for "diet", gym visits and goal commitments all **increase following temporal landmarks** (new week, month, year, semester; a birthday; a holiday), because landmarks open a new mental accounting period | Subject ✓ (why a named date drives action). Swap ✗ — it is load-bearing only in a post about acting *on a date* |
| 2 | Schweingruber, Cast & Anahita, *"A Story and a Ring": Audience Judgments about Engagement Proposals*, **Sex Roles** 58(3–4), DOI 10.1007/s11199-007-9330-1 ([open PDF, author's site](https://davidschweingruber.com/docs/Schweingruber&al\(2008\)-SR.pdf)) | 2008 (Springer, 2007 online) | Abstract + intro read: **n = 2,174** US Midwestern university students rated a hypothetical couple's relationship strength; relationships were rated **stronger when the proposal conformed to a traditional script**. Sex and age did not affect ratings | Subject ✓ (the proposal itself as ritual performance). Swap ✗ |
| 3 | Abidin, *Happy #monthsary babe! Vernacular readings and practices of monthsaries among young couplings on social media*, **Networking Knowledge** 9(6) ([open PDF, MeCCSA OJS](https://ojs.meccsa.org.uk/index.php/netknow/article/download/483/togetherWHILEapartABIDIN/1029)) | December 2016 | Full text read: monthsaries are monthly commemorations of the date a couple got together; **146,599 Instagram posts under `#monthsary` as of July 2016**, rising to **over 182,000** with tag variants | Subject ✓ (commemorating a symbolic date online — the exact phenomenon). Swap ✗ |
| 4 | Holtzman, Kushlev, Wozny & Godard, *Long-distance texting: Text messaging is linked with higher relationship satisfaction in long-distance relationships*, **Journal of Social and Personal Relationships**, DOI 10.1177/02654075211043296 ([open access via Europe PMC](https://europepmc.org/articles/PMC8669216)) | 14 Nov 2021 | Abstract read in full via the Europe PMC record: survey of **n = 647** emerging adults, **36.5% in long-distance relationships**; more frequent and more responsive **texting predicted significantly greater relationship satisfaction in LDRs but not in geographically close relationships**, while **frequency of video calls was not significantly related to satisfaction in either group** | Subject ✓ (remote communication inside romantic relationships). Swap ✗ |
| 5 | [Propose Day — Wikipedia](https://en.wikipedia.org/wiki/Propose_Day) (Q7250378) | no publication date — omitted from `citation` | Entity + date fact-check: 8 February; **second** day of Valentine's Week; Rose Day on the 7th; Valentine's Week observed in India only | Entity disambiguation. **Not counted as research** |

**Generic context statistics used: zero.** No PIB, TRAI, Census or MEA figure
appears in this post, and no Valentine's-spending press release was used — the
research lane is the behavioural literature on ritual and symbolic dates, per the
task brief.

**Peer-reviewed / scholarly, open-access count: 4 of 5** (Management Science via the
authors' own open PDF; Sex Roles via the author's institutional copy; Networking
Knowledge is fully open access; JSPR is CC BY-NC open access via Europe PMC — cited
and linked, never reproduced, per the licensing rule in `research-sources.md`). Every
one was fetched and verified. For #1 and #4 only the abstract was read; the post
claims nothing beyond what those abstracts state.

**Competitors:** `bemyval.co`, `thegreeter.in`, `yourlovepage`, `pixeryhub`,
`momentocard`, `lovenamepix`, `writenamepics`, `giftalove`, `wishesmsg` and the
jewellery/flower retailer blogs were read in Phase 1 and are **not linked, cited or
paraphrased**.

---

## Phase 5 — Targeting

- `categorySlug`: `modern-romance` (verified live in Strapi). Propose Day is
  Valentine week, **not** `indian-festivals`.
- `templateUrls`: `/proposal` (primary), `/love-gf`, `/bouquet-gf` — all three
  present verbatim in `TEMPLATE_LINKS` in `app/lib/prompt.ts`.
- **The genuine alternative, with its reason:** `/love-gf`. Most Indian Propose Day
  asks are *not* marriage proposals — they are "will you be my girlfriend" and
  first confessions, and `/love-gf` is the template built for exactly that (#1 at
  1,136 pages, 25.1%, 16,345 views / 31.9%). `/bouquet-gf` is offered as the
  second alternative for the reader who wants to send flowers rather than ask a
  question, tied to Rose Day on the 7th.
- Slug `virtual-propose-day` checked against Strapi — **free**. Existing near
  neighbours: `propose-day-gift-for-girlfriend`,
  `online-propose-day-gift-for-girlfriend`, `flowers-to-propose-a-girl`.

## Honesty constraint applied

No number in this post is attributed to proposal pages. The 40.0%
password-protection rate, the 48.9% phone-open rate and the 92.9% publish rate are
stated in body prose as **platform-wide across all 4,524 pages and 16 page types**;
the 6.3-hour median edit gap is stated as **sampled on /love-gf, n = 1,136**. The
absence of proposal-specific data is stated in the body itself, not only in the
audit, and is recorded as a structural failure in `auditReport.failed`. The Raksha
Bandhan lead-time block (n = 89) is **not used**.
