# Research brief — `long-distance-relationship-gift-ideas-for-girlfriend`

Batch `2026-09-15-virtual-gift-30`, wave 2. Keyword: **long distance relationship
gift ideas for girlfriend**. Category `miss-you-across-miles`. Templates
`/love-gf`, `/capsule`, `/train-ticket`. `nearestLive` = `/blog/girlfriend-day-gift-for-long-distance`.

---

## Phase 1 — what was actually available, and what was substituted

**No SERP was measured for this keyword, and none was available to read.**

- `WebSearch` is exhausted (200/200) batch-wide and `WebFetch` is blocked by the
  routing rules. BRIEF-WAVE2 §0 forbids running `scripts/serp.mjs` — the Brave
  key is hard-throttled and the one check that must not fail silently (the
  cannibalisation gate) fails in the permissive direction under 429.
- `SERPS-WAVE2.md` **is empty of results**: 10 lines, a header explaining the
  serial-collection plan and no harvested SERP for any of the thirty rows. The
  long-distance cluster is explicitly listed in BRIEF-WAVE2 §5 as "unverified
  here".
- So **I did not read the top five ranking pages.** Nothing in the post claims
  otherwise, and the two checklist items that genuinely depend on a competitor
  read are recorded as `failed` in `auditReport`, not quietly passed.

### What was used instead

1. **India autocomplete** — `content/keywords/2026-09-15-virtual-gift-100/ac*/autocomplete.csv`.
   442 distinct completions contain the stem `long distance`, and the
   girlfriend/her subset is the primary phrasing and fan-out evidence for this
   post. Real India-geo demand data, which is better than a us-served SERP for
   phrasing anyway.
2. **BRIEF-WAVE2 §5** — the three SERPs measured before the throttle bit.
3. **Siblings on disk** — the wave-1 and wave-2 posts listed below, each of which
   carries its own competitive read.
4. **The live `nearestLive` page**, fetched and read in full.

### Fan-out sub-queries, taken from the India autocomplete

Direct completions of my stem (all present verbatim in `autocomplete.csv`):

| completion | what it asks |
|---|---|
| `long distance gift ideas for girlfriend` | the head phrasing |
| `long distance gf gift ideas` | same, colloquial |
| `best long distance gift for girlfriend` / `best long distance girlfriend gifts` | ranked framing |
| `gift for girlfriend long distance relationship` | the row keyword, reordered |
| `how to gift long distance girlfriend` | **the delivery question, not the idea question** |
| `long distance gift sending` / `long distance gift delivery` | ditto |
| `long distance gifts for her online` | online-only constraint |
| `free long distance relationship gifts` | budget floor |
| `best gift for long distance relationship under 200` | budget floor, in rupees |
| `birthday gift for girlfriend long distance` | occasion overlay |
| `best monthsary gift for long distance relationship` | **monthsary — India/SEA specific, no US listicle covers it** |
| `homemade long distance relationship gifts` | effort over price |
| `long distance girlfriend gift ideas reddit` | wants a person, not a brand |
| `long distance relationship gift bracelet` / `long distance gift two maps in one` | the physical-product half of the SERP |

Two things fall straight out of that list. First, `how to gift long distance
girlfriend`, `long distance gift sending` and `long distance gift delivery` are
all **logistics** queries hiding inside a gift query — nobody is answering the
"can she even receive it" question. Second, `monthsary`, `under 200` and
`homemade` are the modifiers that mark the residual non-parcel reader.

---

## Gate 2 — intent, judged openly and without a SERP

**Judgement: the head of this SERP is almost certainly not winnable, and this
post is deliberately written for the residual intent.**

The reasoning, stated so it can be checked later:

- `long distance relationship gift ideas` is the archetypal affiliate-listicle
  and marketplace query. The autocomplete itself carries `long distance gifts
  amazon`, `best gift for long distance relationship meesho`, `long distance
  gift bracelet`, `long distance gift box`, `long distance gift basket`,
  `long distance gift two maps in one` and `long distance gift watch`. Those are
  product queries. Etsy, Amazon, Meesho and gift listicles will own the top of
  that page, and BRIEF.md §2 says plainly that a page which drifts into
  jewellery and hampers has already lost.
- BRIEF.md §1 does record that for the adjacent `digital gift for girlfriend`
  query the India SERP is 4–6 of 10 Reddit/Quora/Pinterest with Reddit at #1,
  i.e. no authoritative page. That is a genuine gap signal for the *digital*
  half, and it is the half this post targets.
- **So: I am not claiming this post competes for the parcel intent.** It is
  written for the reader whose girlfriend is 2,000 km away tonight, or who has
  no address that will reach her, or who has run out of days. Both the opening
  and a dedicated closing H2 say that a posted parcel is the better gift when it
  can actually arrive — which is the honest position and also the only one that
  does not mislead the reader who should be on Amazon instead.

I cannot measure whether that residual slice is large enough to rank for. Nobody
in this batch can, until the Brave key clears.

---

## Cannibalisation — `nearestLive` (BRIEF-WAVE2 §3)

Fetched and read `https://subhsandesh.in/blog/girlfriend-day-gift-for-long-distance`.

What it actually is: a **National Girlfriend Day** post. It is occasion-anchored
(a single dated observance), and its structure is a build-and-send how-to —
"quick gift ideas", "how to build a memorable Girlfriend Day surprise page
(step-by-step)", message templates, a 30-second voice-note script, visual and
audio tips, reveal timing, a pre-send checklist. It advises pairing the page with
a small physical delivery.

**Decision: differentiate, not abort.**

> The live page is a how-to for one dated occasion — building and revealing a
> Girlfriend Day surprise page; this post is evergreen selection for no occasion
> at all, sorting seven long-distance gift ideas by how soon you next see her and
> answering the "can she even receive a parcel" question first.

The split is clean on three axes — occasion vs evergreen, build vs choose, and
mine leads on the delivery constraint, which the live page never raises. The live
page is linked from the closing section with a descriptive anchor.

A further detail that supports the split: `facts.md` records that only 3.7% of
all pages built on SubhSandesh are tied to a dated occasion. The live page serves
the 3.7%; this one serves the 96.3%.

---

## Sibling separation

Read before drafting:

| sibling | its claim | why mine does not collide |
|---|---|---|
| `long-distance-gift-ideas-no-money` (wave 1) | seven ₹0 options, priced in time | mine is not budget-led; it is timing-led, and it recommends spending money when a parcel will land |
| `virtual-gift-for-long-distance-boyfriend` (wave 1) | boyfriend, ranked by what gets reopened | different recipient, and the sort key is different (reopen rate vs time-to-reunion) |
| `what-can-i-gift-my-girlfriend` (wave 1) | four-question decision, physical vs digital | that post decides *category*; this one assumes distance is already fixed and decides *timing* |
| `online-gift-for-girlfriend-india` (wave 1) | India Post tariff vs a link, privacy | mine makes no courier price claim at all and does not lead on privacy |
| `surprise-gift-for-girlfriend-website` (wave 1) | the link is the product | mine never covers link-sending mechanics |
| `long-distance-relationship-gifts-to-stay-connected` (wave 2) | ongoing connection | mine covers ritual in one H3 and one H2, not as the spine |
| `long-distance-relationship-gifts-online-free` (wave 2) | free/online | explicitly not my angle |
| `long-distance-relationship-gifts-for-him` (wave 2) | him | different recipient |
| `long-distance-relationship-interactive-gifts` (wave 2) | games and interaction | mine has no game section |
| `long-distance-relationship-gifts-india` (wave 2) | India framing | mine is recipient-framed, not geo-framed |
| `long-distance-relationship-gift-quotes` (wave 2) | wording | mine never supplies message copy |

The `for her` phrasing is a `secondaryKeywords` entry on **this** row in
`WAVE2-PLAN.json`, so no sibling owns it.

---

## Phase 2 — the angle

> Wins by being the only long-distance gift page for a girlfriend that sorts by
> how soon you next see her rather than by price, answers the "can she actually
> receive a parcel" question before naming a single idea, and says where a posted
> parcel beats a link — grounded in 4,357 real pages, an 11.5-views-per-page
> average and the fact that only 3.7% of them are occasion-dated.

**Gap being taken:** the logistics half of the query (`how to gift long distance
girlfriend`, `long distance gift sending`) is unanswered by both the listicles
and by our own live page.

**Stale-data note:** one source is from 1999 and one from 2006. Both are used for
qualitative mechanisms (reminiscing; ritual initiation) and both are labelled with
their year and their population limits in the body.

---

## Phase 3 — sources

Found **without a search engine**, per BRIEF-WAVE2 §1b. What was actually run:

- **Europe PMC** (`ebi.ac.uk/europepmc/.../search`) — queries:
  `long distance relationship maintenance`,
  `relational maintenance mediated communication couples`,
  `idealization long distance romantic relationships`,
  `savoring anticipation positive future event wellbeing`,
  `voice call versus text message closeness`,
  `TITLE:"long-distance" AND TITLE:"relationship"`, all with `AND OPEN_ACCESS:Y`.
  Worked every time. Its best LDR hit — *Long-distance texting* (JSPR 2021) — was
  **rejected**: the wave-1 sibling `virtual-gift-for-long-distance-boyfriend`
  already cites it at `europepmc.org/articles/PMC8669216`, and reusing the same
  finding in an adjacent post is exactly what the swap test exists to stop.
- **Crossref** — used for dates and to resolve DOIs to landing pages.
- **DOAJ** (two/three-word queries only, as briefed) — `long-distance couples`,
  `romantic relationship technology`, `gift giving`, `symbolic gift`,
  `digital gift`, `gift recipient`, `handwritten letter`, `anticipation savoring`.
- **OpenAIRE** — `title=` and `keywords=…&OA=true`. This is what surfaced the
  repository copies that actually fetch.
- **OpenAlex and Semantic Scholar were not attempted** — both 429 from this
  sandbox per BRIEF-WAVE2 §1b and the orchestrator notes.

Rejected after checking: `journals.plos.org`, `frontiersin.org`, `mdpi.com`,
`journals.sagepub.com`, `onlinelibrary.wiley.com` (banned at cap or 403 from this
sandbox); `dergipark.org.tr/en/pub/pgy/article/1681217` (same URL already cited by
the `love-letter-website-for-girlfriend` sibling); `scholarworks.gvsu.edu` (403).

**Every landing page below was opened with `ctx_fetch_and_index` and verified to
state the claim before it was cited.** Six domains, none of them in
`SPENT-SOURCES.json` and none used by any sibling in this batch.

| # | source | domain | date | what it supports |
|---|---|---|---|---|
| 1 | Geong et al., *Dynamics of Romantic Relationship Satisfaction in Long Distance Relationships* | `e-journals.unmul.ac.id` | 2025-05-20 | LDR couples reach the same satisfaction level as geographically close couples, via technology-mediated self-disclosure that builds trust and reduces uncertainty |
| 2 | Amelia, *Long-Distance Romantic Relationships among International Students* | `scie-journal.com` | 2020-05-08 | four semi-structured interviews; five themes, all relational rather than material |
| 3 | Kauffman, *Relational Maintenance in Long-Distance Dating Relationships: Staying Close* (Virginia Tech MS thesis) | `vtechworks.lib.vt.edu` | 1999-05-12 | ten in-depth interviews; reminiscing a dominant maintenance technique; separation framed as a temporary inconvenience |
| 4 | Davis, *Types of and Negotiation of Connection Rituals in Newlywed Couples* (Utah State MS thesis) | `digitalcommons.usu.edu` | 2006-05 | twenty newlywed couples; women initiate rituals more frequently; rituals linked to marital satisfaction |
| 5 | Tikka, *ICT support for gift giving* (University of Oulu) | `urn.fi` | 2017-04-04 | gift giving causes seekers anxiety; countering it depends on recording dates, recipients and what was already given |
| 6 | Choi, *Factors influencing preference toward personalized products in gift-giving situations* | `kci.go.kr` | 2015-11 | independent self-construal buyers preferred personalised products more when social distance to the recipient was **close**; no significant effect for interdependent buyers |

**Abstract-only disclosure:** source 6 is published in Korean. The English
abstract on the KCI landing page was read and is the only thing cited; nothing is
inferred past it. This is stated in the body and recorded in `auditReport`.

**Population-limit disclosures made in the body:** source 4 studied co-resident
newlyweds, not long-distance couples; source 6 used a Korean sample; sources 3
and 4 are old enough that their communication technology is obsolete, and only
their mechanisms are used.

---

## First-party facts

Deliberately **not** opening on the 40.6% password figure or the 6.2-hour edit
gap — BRIEF-WAVE2 §4 flags both as a batch-wide tic, and the three nearest
siblings all lead with them. This post opens on **11.5 average views per page**
and **3.7% occasion-dated / 96.3% everyday**, neither of which any sibling leads
with, and both of which are the right facts for a gift that is not an occasion
gift and is meant to be reopened.

**Disclosed limit:** `facts.md` records which *template* was opened, not who
received it, so `/love-gf` counts do not prove the recipient was a girlfriend.
The body says so where the number is used.

**No price is stated anywhere.** The "## Pricing (fill in by hand)" block in
`facts.md` is empty, and no courier tariff is claimed either.

---

## Templates

All three assigned templates were used, and each description was read in
`app/lib/prompt.ts` first:

- `/love-gf` — "Romantic 'I love you' page for a girlfriend/partner".
- `/capsule` — "you both write predictions about the next year, blind to each
  other; it seals, and a year later you open it together and score every one".
  Written up as the two-sided, future-dated thing it actually is, not as a
  generic memory box.
- `/train-ticket` — "a long-distance love letter disguised as a train ticket:
  check the PNR, watch the waitlist clear, read the running status of the
  relationship". Described as the affectionate joke it is.

No swap was needed; all three fit the keyword directly.
