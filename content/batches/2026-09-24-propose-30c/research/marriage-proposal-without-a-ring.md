# Research brief — `marriage-proposal-without-a-ring`

- **Keyword:** marriage proposal without a ring
- **Secondaries on the same page:** propose without a ring, propose without ring box
- **Category:** `modern-romance` (verified live in Strapi, 2026-09-24)
- **Slug check:** `https://strapi.subhsandesh.in/api/articles?filters[slug][$eq]=marriage-proposal-without-a-ring` → `[]`, free.
- **Demand:** 3 prefixes, ordinal only (`prefix_hits`). Not printed anywhere in the post.
- **Reader:** already decided, slightly anxious. They are going to ask without a ring. The page's job is to say why it still counts, with evidence, then make the ask work without the prop.

---

## Phase 1 — SERP, and what was actually measured

**One WebSearch spent, on 2026-09-24.** WebSearch is US-only from this machine, so what came back is a **US-served** result list, not the India-served SERP this keyword targets. **No ranking page was fetched.**

What was visible (titles and hosts only):

| # | Host | Type |
|---|---|---|
| 1 | angara.com | jewellery retailer blog |
| 2 | theknot.com | wedding platform |
| 3 | zola.com | wedding platform |
| 4 | theheartbandits.com | proposal-planning service |
| 5 | antiquejewellerycompany.com | jewellery retailer blog |
| 6 | modgents.com | jewellery retailer blog |
| 7 | diamondrensu.com | jewellery retailer blog |
| 8 | engaged.robbinsbrothers.com | jewellery retailer blog |
| 9 | en.wikipedia.org | "Visual markers of marital status" |

Every one of 1–8 is a competitor or an adjacent substitute under `references/competitors.md`. **None is linked, cited or paraphrased.**

**Limits recorded honestly, and carried into `structuralLimitations`:**

- The India-served SERP for this keyword has **never** been measured. None of the 11 SERPs measured on 2026-09-16 (`content/keywords/2026-09-16-propose-100/serps.md`) is this keyword.
- No competing page body was read. **Nothing in the post describes what a competing page contains**, and checklist item *"The post contains at least one claim none of the top 5 pages make"* is recorded as **FAILED** for exactly this reason rather than asserted.

---

## Phase 2 — gap and angle

Fan-out sub-queries the keyword decomposes into, each of which became an H2 or an FAQ:

- does a proposal without a ring still count / is it real
- what do I give her instead of a ring
- what do I say when people ask to see the ring
- can we pick the ring together afterwards
- do I have to propose again when the ring arrives
- what if her family expects a ring
- is a digital/online proposal a real proposal
- is a placeholder ring a bad idea

**The gap, stated without claiming anything about pages not read:** the reader is Indian, and the question "does it count?" has an Indian answer that no jewellery retailer or US wedding platform has a commercial reason to give — **the statute that decides whether a marriage happened names no object at all.** Section 7 of the Hindu Marriage Act, 1955 makes a Hindu marriage complete and binding at the seventh step of the saptapadi. Everything else on this page follows from separating *the question* from *the token*.

**Angle (in `batchMeta.angle`):** wins by answering "does it still count?" from the statute, then answering "what do I hold instead?" from the research on why particular possessions carry meaning, grounded in platform-wide first-party numbers.

---

## Cannibalisation — how this differs from the wave-3 sibling

Read before writing: `content/batches/2026-09-23-propose-30b/blogs/online-marriage-proposal-maker.json`.

| | wave-3 `online-marriage-proposal-maker` | this post |
|---|---|---|
| Intent | tool/product — "make me an online proposal" | reassurance + practical — "it counts, now what do I hold?" |
| Subject | the **ceremony**: is a mediated ask a real ritual | the **object**: what the ring was doing and what else can do it |
| Research lane | ritual studies — Hobson, Cho, Mäder, Klocová | attachment to objects / why particular possessions carry meaning |
| Sources | osf.io, pure.coventry.ac.uk, open-research-europe, cambridge.org | nsuworks.nova.edu, shura.shu.ac.uk, rave.ohiolink.edu, metacriticjournal.com, + statute |
| Structure | five things the page must carry; /proposal vs /love-gf | law → the ring's three jobs → five stand-ins → table → choosing together → family → downside |

**Zero source overlap and zero lane overlap.** The ritual/ceremony literature is banned to this post and none of it is cited. The sibling is referenced by lane here rather than linked from the body, because sibling `/blog/` slugs are not `TEMPLATE_LINKS` entries and 404 until waves 1–3 publish.

---

## Phase 3 — sources

Lane: **attachment to objects — why particular possessions carry meaning.** Queries run through `findpapers.mjs`: `cherished possessions meaning study`, `object attachment special possessions research`, `heirloom inherited object meaning study`, `material possessions self extension research`, `sentimental value objects consumer study`, `keepsake memento memory object relationship research`, `handmade gift perceived value recipient study`, `inherited objects family memory qualitative study`. Also `engagement ring diamond convention history study`, `betrothal engagement ceremony India kinship study`, `wedding jewellery mangalsutra meaning study`.

| # | Source | Why it passes the subject test | Read |
|---|---|---|---|
| 1 | [Martin, *Nurturing Self*, The Qualitative Report 22(6), 12 Jun 2017](https://nsuworks.nova.edu/tqr/vol22/iss6/6/) | Nine women, three semi-structured interviews each; cherished personal possessions nurture the self by connecting with others, affirming personal experience and supporting self through change. Peer-reviewed, open access. | Abstract |
| 2 | [Keyte, *Revealing the meaning of home possessions*, Sheffield Hallam doctoral thesis, 2026](https://shura.shu.ac.uk/37264/) | Meaning in a possession is mutable — built, ebbing and flowing through the practices of keeping it, not fixed at acquisition. Institutional repository, CC BY-NC-ND. | Abstract (40MB PDF not downloaded) |
| 3 | [Grossman, *Achievement-Based Sentimental Value as a Catalyst for Heirloom Gift Giving*, University of Cincinnati PhD, 2020](http://rave.ohiolink.edu/etdc/view?acc_num=ucin1583247115503432) | Objects associated with achievements are judged more suitable as heirlooms than objects associated with enjoyment, controlling for positivity of association. | Abstract |
| 4 | [Sava, *Family Cookbooks – Objects of Family Memory*, Metacritic Journal 7.1, Jul 2021](https://www.metacriticjournal.com/article/183/family-cookbooks-objects-of-family-memory) | Recipes inherited within a family and passed on generation to generation, carrying gendered roles of the work with them — an object doing the family's work, not the couple's. | Full article page |
| 5 | [Section 7, Hindu Marriage Act, 1955](https://constitutionofindia.in/section-7-of-hindu-marriage-act-1955-2/) | Statute. Defines when a Hindu marriage is complete and binding, and names no object. | Full text of s.7 |

- **Subject test:** 4 of 5 pass (1–4). The statute is primary reference material, not a research source.
- **Peer-reviewed / scholarly + open access:** #1 (journal), #2 and #3 (doctoral theses in institutional repositories), #4 (university journal, open).
- **Swap test:** none survives it. All four are about objects carrying meaning; none could sit unchanged in another keyword's post in this batch.
- **Generic context statistics:** zero. No PIB, TRAI, Census or MEA figure appears.
- **Wikipedia in body:** zero. Wikipedia appears only as `sameAs` targets in `structuredData`, each verified through the Wikipedia API with its Wikidata QID paired (Q1057944, Q7929, Q2367559, Q5766344, Q16842191).

### Two sources dropped before saving, and why

`capcheck.mjs` was clean when the sources were chosen, but the batch verifier run immediately before saving showed **`pmc.ncbi.nlm.nih.gov` at four posts — over the three-post domain cap.** Two PMC-hosted sources originally drafted into this post were therefore cut:

- *Redefining object attachment* (Object Attachment Security Measure, N=365), Journal of Behavioral Addictions 2022 — europepmc.org
- *The Ties That Bind* (family archives), Journal of Family History 2018 — pmc.ncbi.nlm.nih.gov

They were replaced with #2 and #4 above on fresh domains, and **the two affected paragraphs were rewritten around what the new sources actually say** rather than the new citations being pasted under the old claims. `pmc.ncbi.nlm.nih.gov` is now at three posts and this post contributes nothing to it.

### The claim that was deliberately NOT made

The ring's **commercial history** is not asserted anywhere. The one legal-history paper located — *Rings of power: a legal history of the engagement ring in early twentieth-century Australia*, History Australia, 2024 — is bot-blocked at tandfonline.com. **No date, no century, no marketing campaign is claimed for when the diamond engagement ring became conventional.** The cultural-specificity point is made instead from the statute and from named Indian betrothal practice (sagai, roka), and the sagai/roka description is general, not attributed to any specific community's rite.

### Ban-exemption used

The BRIEF's mid-batch exemption covers **statutes**. Section 7 of the Hindu Marriage Act, 1955 is cited under it. The URL used is not on the 317-URL ban list. It is a **bare-act reproduction, not an official gazette copy**, because from this machine `indiacode.nic.in` timed out, `legislative.gov.in` returned 404, `highcourtchd.gov.in` was unreachable, `mea.gov.in` returned 403 and `indiankanoon.org` was challenge-blocked. Recorded in `structuralLimitations`.

---

## Phase 0 — first-party facts

Seven lines copied byte-verbatim from `content/facts.md` (2026-09-24) into `batchMeta.factsUsed`; verified programmatically against the file. Two sit inside the first 150 words (5,148 pages across 21 page types; 90.9% published and shared).

**Every figure is labelled in body prose** as platform-wide across 21 page types, or sampled on the named template (`/apology-dashboard`, n=1,375). **No figure is attributed to proposal pages** — none exists, because the `proposalpages` probe is still refused.

---

## Cost constraint — the highest-risk item in this post

`content/facts.md` ships an **empty Pricing block** for a fourth batch. This post therefore states **no price, no free or paid tier, and no ring price or budget figure of any kind.**

Checked mechanically against the body: the verifier's `PRICE_HARD` and `PRICE_SOFT` patterns both return no match, and the words **cost, price, cheap, afford, free, budget, money, expensive and spend do not appear anywhere in `contentMarkdown`.** Money as a *reason* for asking without a ring is handled without any monetary framing — the H3 fields are *what it is / who it suits / what it asks of you / where it fails*, where the third field is time and effort, never money.

---

## Phase 4–5 — structure and links

8 H2s, 5 H3s, one H1, no skipped levels. Body **1,774 words** excluding FAQs (plain whitespace split). 11 FAQs, in `article.faqs` and an `@id`-matched FAQPage only — none within 0.6 Jaccard of any body H2 (checked).

Internal links, all real `TEMPLATE_LINKS` slugs, all placed after the section establishing why the reader would want them:

- **`/proposal` (mandatory, and genuinely apt).** Placed at the end of H3 #4, after the section that establishes the ring's three jobs — because a scrapbook page is keepable and re-openable, which is two of those three. Stated as a **reasoned fit, not a measured one**, since no proposal-specific data exists.
- **`/love-gf` (the genuine alternative).** For the reader whose ask is *not* marriage — in everyday Indian usage "propose" usually means asking someone to be your girlfriend or boyfriend, and for that reader the proposal scrapbook answers the wrong question. Named with the reason, in the downside section.
- **`/templates`** as the fallback when neither fits.

`templateUrls`: `["/proposal", "/love-gf"]`.

`structuredData`: an `@id`-matched `BlogPosting` enrichment block on `<canonicalURL>#post` carrying `about`, `mentions` and a `citation` array mirroring `batchMeta.sources` one-to-one; an `ItemList` mirroring the five H3s in order; an `@id`-matched `FAQPage` on `<canonicalURL>#faq` matching `article.faqs` exactly. No `AggregateRating`, `Review` or `HowTo`.

---

## Phase 6 — audit

`passed` 48 + `failed` 2 = 50, disjoint, every item accounted for, strings byte-verbatim from `references/publish-checklist.md`.

**Failed, both structural and honestly stated:**

1. *"The post contains at least one claim none of the top 5 pages make"* — no top-5 page was fetched; only a US-served result list was seen. Closes if the India SERP is fetched and the top five read.
2. *"Slug short, hyphenated, lowercase, no stop words"* — the assigned slug keeps "without" and "a" because the exact-match keyword requires them.

Non-checklist notes live in `batchMeta.structuralLimitations`, never in `failed`.
