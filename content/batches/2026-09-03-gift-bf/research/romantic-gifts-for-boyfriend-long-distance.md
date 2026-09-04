# Research brief — `romantic gifts for boyfriend long distance`

Batch `2026-09-03-gift-bf`. Slug `romantic-gifts-for-boyfriend-long-distance`.
Category `miss-you-across-miles`. Written 2026-09-03.

Demand: 20x, the second-highest in the harvest. Secondary keywords served:
`romantic gifts for boyfriend` (13x), `surprise romantic gift for boyfriend long
distance` (3x), `gift ideas for boyfriend in long distance relationship` (3x),
`romantic birthday gifts for boyfriend long distance` (2x).

---

## Phase 1 — SERP, as measured (not re-derived)

Source: `content/keywords/2026-09-03-gift-gf-bf/serps.md`, real Google `gl=in&hl=en`,
2026-09-03. **AI Overview fired.** 5 of 7 organic hosts weak.

| Host | Type | Could I open it? | What it is |
|---|---|---|---|
| `endlessdistances.com` | strong (per SERP log) | **yes** — full HTML fetched | "37 Best Long Distance Relationship Gift Ideas", ~3,050 words incl. chrome, H1 + 1 H2 + 37 product H3s + "Final Thoughts". First-person (UK–US international LDR), last updated 10 August 2026, author byline (Sarah Bence). Zero research citations, zero data, no delivery or customs detail, affiliate links plus a discount code (`ENDLESS12`). Direct answer: none — the answer is the product list. |
| `theknot.com` | strong | **no** — HTTP 403 to the sandbox fetcher on two candidate URLs | US wedding authority. Per the batch brief, beatable only on India-specific ground. Not analysed first-hand; no claim made about its contents. |
| `oyehappy.com` | weak, **competitor** | no — HTTP 403 | Indian gifting retailer. Never cited, never linked, structure not mirrored. |
| `amazon.in`, `etsy.com` | weak | not attempted | Marketplace listing pages. |
| `pinterest.com` | weak | not attempted | UGC boards. |
| `fnp.com` | weak, **competitor** | not attempted | Retailer. |

**Honest limitation:** only one of the top hosts was readable from this
environment. The comparison above is therefore one fetched page plus the measured
host list, not five fetched pages. Nothing in the post depends on an unread page.

## Phase 2 — Gap analysis

**Table stakes** (the fetched competitor covers all of these): a numbered list of
concrete gift ideas; distinct ideas for physical objects vs keepsakes; something
about missing him; lived-experience framing.

**The gap.** Every page on this SERP is organised around *objects to buy*. None of
them covers the **receiving conditions**:

- what the gift needs *from him* (storage, an address he will still have, a phone,
  a connection, approved leave);
- what a border does to the arrival date, and therefore to the promise you make;
- what happens when the reaction is invisible — you send, and get a typing indicator;
- the reciprocity problem, i.e. a gift he cannot return.

**Stale data:** none to supersede. The ranking pages carry no statistics at all,
which is itself the opening — a single measured figure outranks adjectives for
extraction.

**Fan-out sub-queries → H2s.** Each H2 came from one of these, not from a template:

| Sub-query | H2 |
|---|---|
| what counts as romantic when you are apart? | What makes a gift romantic when he is far away? |
| which gifts actually work long distance? | Seven romantic gifts for a long distance boyfriend |
| what happens when it crosses a border? | What changes when the gift crosses a border |
| which type should I pick for my situation? | Which gift type fits your situation |
| can a gift make him uncomfortable? | The reciprocity trap: when the gift asks him for something |
| why does a lukewarm reaction sting so much? | Why a flat reaction hurts more at distance |
| when is a digital gift the wrong call? | When a SubhSandesh page is the wrong gift |

**Angle (`batchMeta.angle`).** Wins by being the only post that plans a
long-distance gift around the reaction you will not be in the room to see — using
42,099 recorded views across 3,425 shared pages (12.3 per page) plus the
long-distance finding that responsive texting, not video-call frequency, tracks
relationship satisfaction.

**Distinctness from the sibling on `how to surprise my boyfriend in long distance
relationship`.** This post is about *objects and gestures you send* and their
arrival conditions. It contains no section on timing, spacing or the mechanics of
surprising him; the one surprise-adjacent question is in the FAQs and answers it by
separating the parcel from the moment. The post does **not** open with "why a
digital gift beats a physical one" — the opening classifies gifts by where they
arrive, and the comparison table and the "wrong choice" section both argue against
the page in specific cases.

## Phase 3 — Sources

Four peer-reviewed studies plus one ethnography. **Zero government/context
statistics used.** Every URL below was fetched in this session and the claim
verified against the fetched text; no abstract-only citations.

| # | Source | Domain | Verified claim | Subject test |
|---|---|---|---|---|
| 1 | Bouchard, Gaudet, Cloutier & Martin, "Attachment, Relational Maintenance Behaviors and Relationship Quality in Romantic Long-Distance Relationships: A Dyadic Perspective", *Interpersona* 2023 (diamond OA, CC BY) | `dialnet.unirioja.es` | 137 couples; while apart, text messages 97.1%, telephone 89.8%, webcam 82.5%; median separation 350 km, 18.4% over 1,000 km, 6.9% saw each other in person once every six months or less; dyadic RMBs mediated attachment → relationship quality | pass |
| 2 | Holtzman et al., "Long-distance texting", *Journal of Social and Personal Relationships* 2021 (CC BY-NC, via PMC) | `pmc.ncbi.nlm.nih.gov` | n=647 emerging adults, 36.5% in LDRs; more frequent and more responsive texting predicted higher satisfaction in LDRs but not GCRs; **video-call frequency was not significantly related to satisfaction in either group** | pass |
| 3 | Islam et al., "Development and validation of the gift reciprocation anxiety scale (GRAS)", *Heliyon*, 14 Jan 2025 (CC BY-NC-ND, via PMC) | `pmc.ncbi.nlm.nih.gov` | 7-item unifactorial scale, n=763 Bangladeshi youths/adults in romantic and marital relationships; a gift difficult to reciprocate is described as producing indebtedness and fear of the partner's negative evaluation | pass |
| 4 | Lyu, Wang, Song & Jin, "Greater effort, greater pain", *Humanities and Social Sciences Communications*, 19 Nov 2025 (CC BY-NC-ND) | `www.nature.com` | Three experiments (Study 1 n=91 effective participants) plus ERP: givers devote more effort to gifts for close recipients, hold higher expectations, and feel stronger social exclusion when the reaction is negative — expectancy violation | pass |
| 5 | Madianou, "Ambient co-presence: transnational family practices in polymedia environments", *Global Networks* 2016 (green copy, Goldsmiths repository) | `research.gold.ac.uk` | Ethnography of UK-based Filipino migrants; always-on peripheral awareness gave low-level emotional reassurance in strong relationships and increased conflict/surveillance in weak ones | pass |

Fetch route: `curl` inside the context-mode sandbox (`ctx_execute`), plus
`pdftotext` for the two PDFs and the Europe PMC `fullTextXML` endpoint for the two
PMC articles. Candidate discovery: OpenAlex `works` search filtered `is_oa:true`
and the DOAJ article API. **Unfetchable from here (403/CAPTCHA), therefore not
cited:** `onlinelibrary.wiley.com`, `journals.sagepub.com`, `sciencedirect.com`,
`research.cbs.dk`, `mdpi.com`, and `interpersona.psychopen.eu` itself (its OJS
article and download URLs both return a login page to a bot, which is why source 1
is cited at Dialnet, where the published CC BY version is indexed and readable).

**Batch caps.** No source URL is shared with a sibling post. `www.nature.com`
reaches the three-post domain cap in this batch with this post (it was at two when
this was written) — flagged for the coordinator; every other domain here is unused
in-batch. None of the 42 spent URLs in `USED-SOURCES.md` is cited.

**Swap test — recorded as a failure, not hidden.** Sources 1, 2 and 5 are
distance-specific and would not transfer. Sources 3 and 4 are about gift-giving in
close relationships generally, so they could sit unchanged in a sibling gift post.
That is item 34 of the checklist and it is in `auditReport.failed`.

### Verifying the two claims the batch brief flagged

**1. "Givers systematically mispredict what recipients want."** *Not verifiable
today at that strength; I wrote the narrower version instead.* The canonical papers
are unreachable or spent: Gino & Flynn 2011 ("Give them what they want", JESP) is
closed access per OpenAlex, its HBS PDF is one of the 42 spent URLs, and
`research.wur.nl/.../give-me-your-self-gifts-are-liked-more-when-they-match-the-givers`
is already at its two-post limit. Galak/Givi/Williams 2016 and Baskin et al. 2014
returned no open-access copy in OpenAlex or DOAJ. The two Wiley papers that would
have carried it directly — *Psychology and Marketing* 2023 on digital vs physical
gift-card delivery preferences diverging between givers and recipients, and *JCP*
2024 on givers overestimating the harm of late gifts — are both blocked here, so
neither is cited. Search terms tried: `gift giving givers recipients preference
mispredict`, `gift exchange asymmetry giver recipient perspective`, `perceived
effort gift appreciation`, `feasibility matters more gift receivers than givers`,
`it's the thought that counts gift exchanges mispredicted`, `gift recipients prefer
requested gifts explicitness`, plus DOAJ queries on `"gift giving" AND givers AND
recipients`. **What the openable literature does support, and what the post claims:**
givers scale their expectations to their own effort and are hurt more by a flat
reaction from someone close (source 4), and recipients can experience measurable
anxiety over a gift they cannot reciprocate (source 3). The post never says
recipients dislike what they are given.

**2. "The Valentine's-week day sequence is a stable convention."** Out of scope for
this keyword — the post makes no calendar claim of any kind, states no Valentine's
week sequence, and names no 2027 date. Not verified here; rows 1 and 2 own it.

**3. A third thing the brief gets slightly wrong.** The brief lists
`endlessdistances.com` under "strong hosts" as "a genuine long-distance-relationship
blog — real editorial". The editorial voice is genuine (first-person international
LDR, named author, updated August 2026), but the page ranking for this keyword is a
37-item affiliate product list carrying its own discount code — commercially it
sells the same job SubhSandesh sells ("make someone feel special remotely"), which
puts it inside the "online gifting and personalised-gift retailers" category in
`references/competitors.md`. Treating it as editorial understates it as a
competitor; the brief's instruction ("study it, do not link it") happens to be the
right handling either way. It also means the *editorial* gap on this SERP is wider
than "5 of 7 weak" suggests: on this keyword there is no non-commercial answer at all.

## First-party data used

Six lines from `content/facts.md` (regenerated 2026-09-03), quoted byte-verbatim in
`batchMeta.factsUsed`. Three appear inside the first 150 words: 3,425 pages created,
42,099 recorded views, 12.3 views per created page. The primary fact for this post is
**12.3 views per created page** — deliberately not "50.2% open on a phone", which
several siblings will lead on.

Deliberate abstentions:

- **No number is attached to `/missyou-gf`.** It is not in the top-5 page types, so
  `facts.md` carries no missyou-specific figure. The post describes what the page
  does and nothing more.
- **No recipient-gender claim.** The database records no recipient, and the post says
  so out loud in the closing section: "we cannot tell you who reopened it."
- **No price, cost, shipping cost, "free" or tier claim anywhere.** The Pricing block
  in `facts.md` is empty. Customs is discussed only as *time and assessment* — the
  post never mentions duty, charges or any figure, and states instead that neither
  partner controls the clearance day.
- **7.2 hours is presented as sampled on `/love-gf`, n=1,001**, never as site-wide.

## Internal links

Three, all from the five permitted URLs, all placed after the value is established:
[`/missyou-gf`](https://subhsandesh.in/missyou-gf) and
[`/love-gf`](https://subhsandesh.in/love-gf) at the end of gift #3 (the H3 that
establishes why a reopenable page is a gift at all), and
[`/darling`](https://subhsandesh.in/darling) in the reciprocity section, for couples
whose register is dramatic rather than sweet. `/apology-dashboard` was deliberately
not used: this post is not about making up after a mistake, and bolting it on to
reach a link count would read as stuffing. `batchMeta.templateUrls` mirrors the three
links used.

## Structured data

`BlogPosting` enrichment block `@id`-matched to `<canonicalURL>#post` carrying
`about` (Long-distance relationship, Q1406917), `mentions` (Gift Q184303,
Computer-mediated communication Q796573, Reciprocity (social psychology) Q2147331 —
all four QIDs pulled from the Wikipedia API in this session, none `missing`), and
`citation` mirroring the five `batchMeta.sources` one-to-one with dates. Plus an
`ItemList` of the seven H3s in body order, and a `FAQPage` `@id`-matched to
`<canonicalURL>#faq` mirroring `article.faqs` exactly — `@id`-matched blocks merge
per `client/components/JsonLd.tsx:622-637`, so this is the one route by which the
FAQPage JSON-LD required by the batch instruction is not silently discarded. No
`AggregateRating`, `Review` or `HowTo`.

## Audit summary

50 checklist items: **48 passed, 2 failed**, `passed ∩ failed = ∅`,
`|passed| + |failed| = 50`, item strings copied byte-verbatim including `**bold**`.

Failures, both structural and left open:

1. `Paragraphs 2–3 sentences throughout` — unsatisfiable alongside
   `page-structure.md`, which mandates a ~150-word single answer paragraph and
   four one-sentence fields per H3. The post follows `page-structure.md`.
2. `No source passes the **swap test** …` — two of five sources are about gift-giving
   generally rather than distance, and would transfer to a sibling gift post.

Word count 1,797 by plain whitespace split, FAQs excluded (10 FAQs, in
`article.faqs` and the FAQPage JSON-LD only). Slug confirmed free in Strapi on
2026-09-03; `miss-you-across-miles` confirmed as a live category (id 8).
