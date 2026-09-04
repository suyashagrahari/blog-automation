# Research brief — how to surprise my boyfriend on his birthday

- **Slug:** `how-to-surprise-my-boyfriend-on-his-birthday`
- **Batch:** `2026-09-03-gift-bf-2` · **Category:** `milestone-birthdays`
- **Keyword:** `how to surprise my boyfriend on his birthday` (8/8 weak, AI Overview fired)
- **Absorbs merged keyword:** `how to surprise your boyfriend on his birthday online` (3x, Jaccard 0.75, two
  shared distinctive hosts) — covered as a full H2 section, not a paragraph.
- **Facts source:** `content/facts.md`, generated 2026-09-03. `npm run facts` was **not** run.

---

## Phase 1 — SERP (measured on real Google, `gl=in&hl=en`, 2026-09-03)

Row taken from `content/keywords/2026-09-03-gift-gf-bf/serps.md` line 50, with the brief's
classifier correction applied: the three hosts scored "strong" are all shops, so the row is
**8 of 8 weak — no editorial result anywhere.**

| Rank host | Type | What it optimises for | Direct answer? | Data | Format |
|---|---|---|---|---|---|
| `quora.com` | UGC | long-tail question capture | scattered across answers | none | thread |
| `thezappybox.com` | **competitor** (gift shop) | product category page | no | none | product grid |
| `cherishx.com` | **competitor** (experience shop) | bookable decor/experience | no | none | listing + price |
| `reddit.com` | UGC | thread relevance | buried in comments | none | thread |
| `pinterest.com` | UGC | image discovery | no | none | image board |
| `bookthesurprise.com` | **competitor** (shop) | bookable surprise packages | no | none | listing |
| `blacks.ca` | **competitor** (photo/print shop) | product | no | none | product |
| `confettigifts.in` | **competitor** (gift shop) | product | no | none | product |

Read, never cited, never linked, never mirrored — all six non-UGC hosts are competitors under
`references/competitors.md`.

**Merged SERP (`…on his birthday online`, 6/8 weak):** `pinterest.com`, `thezappybox.com`,
`oyegifts.com`, `cherishx.com`, `quora.com`, `igp.com`, plus **`gifft.me` and `memento.com`**.
Those last two are **digital-gift-page products** — direct evidence that the asset type
SubhSandesh sells can hold this intent. Used as reasoning for the angle; **not cited, not
linked** (competitors).

## Phase 2 — Gap analysis

**Table stakes** (present across the SERP): a list of ideas; something about decorations; a
midnight-message idea; the idea of a "surprise plan"; a distance/online variant.

**The gap — nobody in the SERP writes about keeping the surprise secret.** Every result covers
*what to give*. None covers the interval between deciding and revealing, which is where the
plan actually fails: the cover story, the accomplices, the leak. There is a real literature on
concealment and it is entirely absent from page one.

**Second gap:** the online/remote variant is served by product pages (`gifft.me`,
`memento.com`) and shop listings, not by an explanation of what changes when the delivery is a
screen.

**Third gap:** "without spending money" (3x secondary) is answered nowhere except as
"handmade ideas". Reframed here as expectation and effort, with no price, no cost and no
"free" — the Pricing block in `facts.md` is empty, so no monetary claim of any kind appears.

**Stale data:** not applicable — no result on page one cites data at all.

**Fan-out sub-queries → H2s**

| Sub-query | Became |
|---|---|
| what actually counts as a surprise on a birthday | `## What a birthday surprise actually is: a plan you have to hide` |
| how do I keep it secret from someone I speak to daily | `## The part nobody plans for: carrying the secret` |
| what should I actually do | `## Six ways to surprise your boyfriend on his birthday` (6 H3s) |
| how do I do it online / when I cannot be there | `## How to surprise your boyfriend on his birthday online, when you cannot be there` |
| how do I do this without spending money | `## Why what you spend is not the real lever` |
| which plan fits my time and my distance | `## What to pick when you have one evening, or two weeks, or another city` |
| when is this the wrong idea | `## Where this approach fails, and when a page is the wrong choice` |

**Angle (`batchMeta.angle`):** wins by being the only post that treats a boyfriend's birthday
surprise as a **concealment problem** — what carrying the secret actually involves, per the
open-access Secrecy Burden Scale — paired with the merged online/distance intent, grounded in
SubhSandesh's 42.7% password-protection rate and 258 birthday pages for a partner.

## Distinctness check

Headings extracted programmatically from all 11 wave-1 posts (`2026-09-03-gift-bf/blogs/`) and
from every sibling file present in this batch at write time. **No near-duplicate.**

- Wave 1's `romantic-gift-for-bf-birthday` owns the **gift object** and the birthday-as-fixed-
  temporal-landmark framing (PLOS ONE milestone-birthday study). This post deliberately does
  **not** reuse that framing and shares **none** of its five sources (`journals.plos.org`,
  `onlinelibrary.wiley.com`, `dl.acm.org`, `emerald.com`, `frontiersin.org` all avoided).
- Does **not** open with "why a digital gift beats a physical one".
- Comparison table compares *situations* (spare evenings × distance), not gift types — specific
  to this keyword's axis and unlike any sibling table.

## Phase 3 — Sources

Search terms tried (phenomenon, not keyword), via the OpenAlex API filtered to open access:
`secrecy concealment burden mind-wandering`, `keeping a secret experience of secrecy`,
`positive secrets energizing bright side of secrecy`, `surprise emotion intensity amplifies
affective`, `anticipation savoring positive event waiting`, `mediated celebration birthday video
call remote presence`, `surprise gift recipient reaction expectation disappointment`,
`long distance couples relational maintenance technology intimacy`,
`temporal landmark fresh start effect birthday`, `truth bias deception detection romantic
partners`.

Four sources, **all peer-reviewed, all open-access, all read in full**. Publishers counted, not
hostnames: SAGE (via PMC), Elsevier (via the Bath repository), MedieKultur, De Gruyter — four
distinct publishers.

| Source | Publisher | Subject test | Load-bearing claim |
|---|---|---|---|
| [Secrecy Burden Scale](https://pmc.ncbi.nlm.nih.gov/articles/PMC11318218/) — PSPB, 24 May 2023, CC BY | SAGE | pass (concealment) | four-factor structure; 8-item Daily Personal Impact; secret length unrelated to burden except Pressure to Reveal (N = 209) |
| [Surprising Gifts](https://purehost.bath.ac.uk/ws/files/210557398/Surprising_Gifts.pdf) — J. Econ. Theory 159, 2015, CC BY-NC-ND | Elsevier | pass (surprise in gift-giving) | "strong causal effect of recipients' expectations"; more room to surprise at lower expectation |
| [Baked bunnies, couple selfies, and video-call gardening](https://www.mediekultur.dk/article/view/130783) — MedieKultur 73, 2023, CC BY | MedieKultur | pass (couple mediated communication) | 21 couple cases; "visual saturation"; also the downside quote on technology creating distance |
| [Family Experiences in Using Video Calls](https://doi.org/10.1515/culture-2022-0165) — Open Cultural Studies, 2023, CC BY | De Gruyter | pass (mediated celebration) | 16 multi-family interviews, Latvia + Spain; virtual celebration ideas; the stress/withdrawal downside |

**Deliberately not claimed:** that givers systematically mispredict what recipients want. The
canonical papers are closed-access; the Surprising Gifts result is stated at its real scope (a
dictator-game lab study about money between strangers).

**Deliberately scoped:** the Secrecy Burden Scale was validated on people keeping *negative*
personal secrets. The post says so explicitly and states that **nobody has measured the burden
of a happy secret** — a real finding, and the reason the mechanics are presented as a map
rather than a measurement.

**Zero generic context statistics.** Zero Wikipedia links in the body (entities appear only in
`structuredData`, verified against the Wikipedia API with paired Wikidata QIDs: Q47223, Q333173,
Q1503443, Q1406917, Q854954).

### ⚠️ Source-cap warning for the batch owner

`https://purehost.bath.ac.uk/ws/files/210557398/Surprising_Gifts.pdf` is **also cited by
`surprise-gift-for-girlfriend-instant`** in this batch. That puts the URL at **2 of 2** and the
domain `purehost.bath.ac.uk` at **3 of 3** (this post, `surprise-gift-for-girlfriend-instant`,
`romantic-gift-for-boyfriend-on-valentines-day`). Both caps are met, not breached — but **any
further sibling citing that URL or that domain breaks item 36 for the batch.** Flagging rather
than silently swapping, because the source was fetched and read in full here and the section
depends on its exact wording.

## Phase 5 — Internal links and targeting

Three internal links, all from the five permitted, all relative, all placed after the section
that establishes why the reader would want them:

- `/birthday-gf` — "birthday surprise page for a partner" (facts.md wording: **partner**, never
  "girlfriend", in a boyfriend post), with its first-party figure 258 created / 7.5%.
- `/love-gf` — 1,001 created, 29.2%.
- `/missyou-gf` — in the online/distance section, **with no first-party figure attached**, since
  it is not in the top-5 page types.

`/apology-dashboard` and `/darling` were considered and rejected: the post covers no repair
after a mistake, and a fourth link would have been ornamental.

## First-party facts used

Six lines, byte-verbatim from `content/facts.md` including the `— measured 2026-09-03` suffix,
verified programmatically with straight apostrophes. Two inside the first 150 words (42.7%
password-protection; the #5 birthday page at 258 / 7.5%).

**Primary fact varied from neighbours on purpose:** the lead is the **42.7% password-protection
rate**, not the 50.2% phone-open share that eleven wave-1 posts leaned on — and it is the fact
that actually belongs to a post about secrecy.

**Never claimed:** any first-party number describing recipient gender. No pricing claim of any
kind; the body contains no instance of "free", "price", "cost" or a currency symbol.

## Phase 6 — Audit summary

50 checklist items extracted programmatically from `references/publish-checklist.md` and
whitespace-collapsed. `|passed| = 47`, `|failed| = 3`, `passed ∩ failed = ∅`, sum = 50.

Failures, all recorded rather than fixed:

1. **Paragraphs 2–3 sentences throughout** — unsatisfiable under `page-structure.md`, which
   mandates a ~150-word three-part answer paragraph and four fields per H3. Rule conflict named.
2. **Slug short, hyphenated, lowercase, no stop words** — the slug is fixed by the assignment
   and mirrors the exact eight-word keyword, so it carries five stop words.
3. **No source passes the swap test** — only the Secrecy Burden Scale source is uniquely tied to
   this post; the other three would fit sibling keywords unchanged, because this batch is built
   from near-neighbour keywords. Structural.

## What I found wrong in the brief

Nothing factually wrong, but one thing the brief does not warn about and one it under-states:

1. **`journals.sagepub.com` returns HTTP 403 to this environment**, including for a CC BY
   article. The PMC mirror (`PMC11318218`) carries the same full text under the same licence.
   Worth adding to the brief's correction 4 list alongside Wiley and SSRN.
2. **The batch's per-domain source cap is being consumed faster than the brief implies.**
   `purehost.bath.ac.uk` reached 3 of 3 with only five of ten posts written, and one URL on it
   reached 2 of 2. Concurrent siblings cannot see each other's choices at write time, so the cap
   is effectively first-come — the brief should either reserve domains per post or tell writers
   to re-check immediately before commit.
