# Research brief — "propose day wishes with name"

- **Batch:** 2026-09-17-propose-12
- **Slug:** propose-day-wishes-with-name (verified free in Strapi: `filters[slug][$eq]` returned `total: 0`, checked 2026-09-17)
- **Secondary keyword:** propose day quotes with name
- **Category:** `modern-romance` (verified live in Strapi categories; Propose Day is Valentine's week, not `indian-festivals`)
- **Date anchor:** Propose Day 2027 = **Monday 8 February 2027** (Valentine's week 7–14 February). Verified by calendar arithmetic: 1 Jan 2027 is a Friday, so 8 Feb 2027 is a Monday.

---

## Phase 1 — SERP analysis

`WebSearch("propose day wishes with name")` returns two clean archetypes and nothing in between. Note the batch brief's warning about B2B proposal SaaS did **not** materialise here: adding "day wishes" anchors the query firmly in the romance half, and no Proposify/Venngage-type result appeared. That is itself the finding for this keyword — "propose day" is unambiguous where bare "proposal" is not.

| # | Page | Type | Words (prose) | Where the answer is | Data cited | Format elements | Tone | Optimising for |
|---|---|---|---|---|---|---|---|---|
| 1 | mynamepix.com — Propose Day Wishes With Name and Photo | Name-on-image generator | ~320 | No direct answer; two generic paragraphs under the gallery | None | JS image grid, "People Generating These Right Now" live counter, social share row, category rail | Third person, hedged, near-machine-translated ("Satisfaction is necessary for couple's life") | Downloads of a rendered JPG, not reading |
| 2 | namewishes.com — Happy Propose Day Wishes With Name and Photo For Lovers | Name-on-image generator | ~120 | One short intro paragraph, then thumbnails | None | ~20 thumbnail cards each linking to a `/create` route | Third person | Same JPG download funnel |
| 3 | thefestivalwishes.com — Propose Day Wishes Greeting Card With Name Edit | Name-on-image generator | ~250 | Buried below a very large nav of other name-edit pages | None | Huge internal nav (30+ "with name" frames), card gallery | Third person | Internal link sprawl across every occasion |
| 4 | wishesmsg.com — 100+ Propose Day Wishes and Quotes for Every Relationship | Wishes listicle / content farm | ~1,800 (mostly the lines themselves) | Intro paragraph before the jump links | None | Jump-link ToC, H2 per relationship (boyfriend, girlfriend, husband, wife, crush), emoji, inline images | Second person, warm, generic | Copy-and-paste volume; ad impressions |
| 5 | craftyartapp.com / giftalove.com / writenamepics.com | Card-template tool and retailer quote pages | 200–900 | Varies; giftalove is a retailer quote page bolted to a gifting catalogue | None | Template grids, product rails | Promotional | Product sales (giftalove) or app installs |

Cross-cutting observations:

- **Zero of the pages cite a single source.** No research, no dates, no author byline, no publication date on the page. Nothing to verify.
- **Four still carry a stale year.** Several title tags and body lines are stamped 2025, and wishesmsg's body says "Happy Propose Day 2026". None state 2027, and none say which weekday it falls on.
- **The name is always rendered, never written.** On the four generator sites the "name" is a font layer on a JPG. None of them discuss *how to write* a line where the name is load-bearing, and none acknowledge that a rendered JPG forwards intact to a third person.
- **Structure is uniform.** Every wishes page segments by relationship: boyfriend / girlfriend / husband / wife / crush. This is table stakes for the intent.
- Per `references/competitors.md`, all of these are competitors (wishes content farms, e-card/name-editor builders, a gifting retailer). **Read only. Not cited, not linked, not paraphrased.**

---

## Phase 2 — Gap analysis

**Table stakes (must be present or the post reads incomplete):**
- Actual sendable wishes, grouped by recipient relationship
- A visible `[Name]` placeholder convention
- The date of Propose Day and its place in Valentine's week
- Short/WhatsApp-length options as well as long ones

**The gap (none of the five cover it):**
1. **What a name actually does to a reader.** Every page asserts personalisation is "special"; not one cites anything. The own-name attention literature is well studied and entirely absent from this SERP.
2. **The honest size of the effect.** No page says personalisation helps only modestly, or that the name-letter effect itself failed to replicate. Admitting the ceiling is a differentiator here precisely because everyone else oversells.
3. **Rendered name vs. hosted name.** A JPG with a name on it is a *file*; it travels. A page built around someone is a *link*; it does not survive forwarding as the same object. No incumbent draws this distinction, because four of them sell the JPG.
4. **Which template for which ask.** Every generator treats "propose day" as one thing. It is at least three: marriage proposal, "will you be my girlfriend", and asking a crush out.
5. **Year and weekday.** 2027, and the fact that it is a working Monday, which changes when people will actually read the message.

**Stale data:** there is no data on any of the five pages to supersede — the gap is not stale numbers, it is the total absence of numbers.

**Unanswered questions the pages raise and drop:** what to send a crush without ruining the friendship; whether to use a full name or a nickname; whether a re-proposal to a spouse is the same job as a first proposal; what happens after you send it.

**Fan-out sub-queries → H2s:**

| Sub-query | Became |
|---|---|
| what is a propose day wish with name | `## What a propose day wish "with name" actually is` |
| propose day wishes with name for girlfriend / wife / crush / long distance | `## 25 propose day wishes with name, by who you are sending them to` (6 H3s) |
| propose day wishes with name and photo / image vs card | `## A message with their name in it, or a page with their name on it` (comparison table) |
| does personalising a message work | `## Why the name has to be load-bearing, not sprinkled` |
| how to make a propose day page with name / when is propose day 2027 | `## Building the 8 February 2027 page, and which template to pick` |
| when not to send a propose day message | `## When a wish with their name on it is the wrong move` |

**Angle (recorded as `batchMeta.angle`):** wins by being the only post that actually delivers 25 sendable named wishes and then shows, with SubhSandesh's platform-wide 40.0% password-protection rate across 4,524 pages, why a name on a page nobody can forward is a different object from a name typed into a message anyone can.

---

## Phase 3 — Sources

Research lane: **the psychology of names and personal address**. Search terms used: `own name attention effect study`, `name letter effect implicit egotism research`, `personalized message recipient response peer reviewed`, `subject's own name attentional capture PMC`. All four sources below were fetched in full and verified to contain the stated figure; none is paywalled, so no abstract-only disclosure is required.

| # | Source | Published | Verified finding | Subject test | Swap test |
|---|---|---|---|---|---|
| 1 | [Specificity in the processing of a subject's own name](https://pmc.ncbi.nlm.nih.gov/articles/PMC10640853/) — *Soc Cogn Affect Neurosci* 18(1):nsad066, doi 10.1093/scan/nsad066 | 2023-11-07 | n=25. The own name evoked a distinct self-referential negativity (SRN) at 210–350 ms frontocentrally under **every** probability condition — 80% down to 10% — i.e. it does not habituate. The LPP, by contrast, *was* probability-dependent. | Pass — about own-name processing | Pass — useless in any other keyword in this batch |
| 2 | [PROMPTS SWAT within the GRASP trial](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8320189/) — *Trials*, doi 10.1186/s13063-021-05452-w, CC BY 4.0 | 2021-07-28 | n=618 randomised 1:1. 90% (277/309) of the personalised-text group returned the questionnaire vs 84% (260/309) standard. RR 1.07, 95% CI **1.00 to 1.13**; absolute difference 6% (95% CI 0 to 11%). The CI touching 1.00 is used in the post as the honest ceiling. | Pass — the intervention *is* inserting the recipient's name | Pass |
| 3 | [Personalised vs generic e-mail invitations](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4545569/) — *BMC Med Res Methodol* 15:66, doi 10.1186/s12874-015-0063-5, CC BY 4.0 | 2015-08-19 | 69% (116) of those sent a personalised e-mail responded vs 50% (83) sent a generic one; χ²=12.58, p=0.01, RR 1.51 (95% CI 1.18–1.93). Quasi-randomised, allocation by last name — a real limitation, noted. | Pass | Pass |
| 4 | [The Social Name-Letter Effect on Online Social Networks](https://arxiv.org/abs/1411.5451) — Kooti, Magno & Weber, arXiv:1411.5451 [cs.SI] | 2014-11-20 | Twitter and Google+ data gave "limited to no support" for the Name-Letter Effect, but a robust **Same-Name Effect** persisted after controlling for gender, nationality, race and age. Preprint, not peer-reviewed — used only as the counterweight, and labelled as a study in the body. | Pass | Pass |

- Generic context statistics used: **zero**. No PIB/TRAI/Census/MEA figure appears.
- Wikipedia: **one** body link, [Name-letter effect](https://en.wikipedia.org/wiki/Name-letter_effect), entity disambiguation only. Four further entities appear in `structuredData` `about`/`mentions` with Wikidata QIDs verified through the MediaWiki API (Marriage proposal Q1057944, Valentine's Day Q37587, Cocktail party effect Q673205, Name-letter effect Q2620711, Personalization Q1000371).
- **Batch-uniqueness note for whoever writes next:** re-checked against `blogs/` after writing. No URL collides with any sibling. On domains, `nih.gov` now appears in two posts — `how-to-propose-online` (PMC9201715, PMC8315721) and this one (PMC10640853, PMC8320189, PMC4545569) — so **one more post may cite PMC and no more**. `arxiv.org` is used only here.
- One source could not be obtained: *Attention capture by own name decreases with speech compression* (PMC11089017, 2024) is behind PMC's reCAPTCHA interstitial and Europe PMC returned HTTP 403. It would have added a reaction-time figure; the 2023 SCAN paper covers the same ground and was used instead.

---

## Phase 5 — Links and targeting

- **Internal (3, all from `TEMPLATE_LINKS`):** `/proposal` (the primary — an actual marriage proposal), `/love-gf` (the honest alternative, and the reason is stated in prose: most Propose Day messages are "I love you" / "will you be my girlfriend", not a marriage proposal, and it is the #1 template at 1,136 pages / 25.1% and 16,345 views / 31.9%), `/train-ticket` (long-distance readers). All placed in the template section, after the comparison table has established why a page beats a message.
- **`batchMeta.templateUrls`:** `["/proposal", "/love-gf", "/train-ticket"]`.
- **Outbound (5 distinct):** the four research sources plus the single Wikipedia entity link. Zero competitor links.

## Honesty constraint — how it was handled

No figure is attributed to proposal pages. In body prose:

- 40.0% password-protection is stated as "1,809 of 4,524, a platform-wide rate across every page type, **not a proposal-specific figure**" in the opening paragraph, and again in the table.
- 6.3 hours is stated as "sampled on the /love-gf page type, n=1,136, **not on proposals**" in the table cell.
- 92.9%, 4,524 and the /love-gf share figures are all platform or template figures and are labelled as such.

This is recorded as a structural entry in `auditReport.failed` with the condition that would close it: a permitted read-only probe of the `proposalpages` collection.
