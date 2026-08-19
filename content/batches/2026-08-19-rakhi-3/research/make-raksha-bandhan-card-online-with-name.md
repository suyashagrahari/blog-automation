# Research brief — `make-raksha-bandhan-card-online-with-name`

- **Keyword:** make raksha bandhan card online with name
- **Cluster:** C02 · transactional · asset type: tool · winnable (9 of 10 weak)
- **Volume profile:** 1000–3000 EST
- **Batch:** `2026-08-19-rakhi-3`
- **Research lane:** task completion / abandonment in online forms and creation flows;
  effort-justification and "IKEA effect" literature on valuing self-made things.
- **Siblings present when I checked** (`content/batches/2026-08-19-rakhi-3/blogs/`, checked
  2026-08-19): **none — the directory was empty.** No sibling `batchMeta.sources` existed to
  pick around, so my five URLs and five domains are unclaimed by construction. Later agents in
  this batch must dedupe against me, not the reverse.

---

## Phase 1 — SERP analysis

Fetched 2026-08-19. Canva returned **403** to a normal browser user-agent, so it was analysed
from its public SERP title and the visible category structure only, and is recorded as
unfetched. All six are competitors under `references/competitors.md`; none is cited or linked.

| # | Page | Status | Words (visible) | Heading structure | Where the answer is | Data cited | Format elements | Tone | Actually optimising for |
|---|---|---|---|---|---|---|---|---|---|
| 1 | canva.com `/create/raksha-bandhan-cards/` | 403 (blocked) | n/a | n/a (H1 served was an error page) | n/a | none visible | template grid, app funnel | brand voice, second person | getting you into the Canva editor; the page is a doorway, not an article |
| 2 | mynameart.com `/greeting-cards/raksha-bandhan` | 200 | ~713 | H1 "Make Raksha Bandhan Card Online … With Name **2024**" + 13 H2s, every one a category label ("Photo Greetings New", "Categories", "Popular") | nowhere — there is no answer, only a grid | none | image grid; no table, no FAQ, no JSON-LD | keyword-stuffed labels, no prose voice | one query per image; the H2s are navigation, not content |
| 3 | mynamepix.com `/rakhi-photo-frame` | 200 | ~213 | H1 "Explore mynamepix Categories", H3 "No Categories Found" | nowhere; the rakhi collection is empty | none | JSON-LD present, no table, no FAQ | none | a category slug that currently renders nothing |
| 4 | createcustomwishes.com `/…/raksha-bandhan-rakhi/` | 200 | ~821 | H1 "Raksha Bandhan / Rakhi" + 10 H2s, all counts ("680+ wishes", "532+ editable templates"), one in Gujarati | nowhere — count claims, not steps | inventory counts only (680+, 532+, 425+) — its own, unverifiable | `<table>` (layout), JSON-LD, no FAQPage | promotional, numbers-as-proof | volume signalling across many long-tails at once |
| 5 | a2zcardmaker.com `/categories/raksha-bandhan` | 200 | ~779 | **two H1s** ("Categories", "Raksha Bandhan Card Online…") + 6 H3s, all image labels | nowhere | none | JSON-LD, no table, no FAQ | label voice | image-name variants ("with name", "for WhatsApp status", "Instagram story") |
| 6 | 123greetings.com `/events/rakshabandhan/` | 200 | ~738 | H1 "Raksha Bandhan 2026 [Aug 28]" + H2s by card count ("Happy Raksha Bandhan (9 Cards)") + H3 card titles | nowhere | the date (Aug 28) — correct | JSON-LD, no table, no FAQ, no author | catalogue voice | ecard sends, segmented by sentiment |

**The single most important observation:** not one of the six is an article. All six are
**template galleries** — an H1, a grid of images, and category H2s. Visible prose runs 213–821
words. There is no ordered procedure, no time estimate, no pre-flight list, no verification
step, no FAQ block, no comparison table with real values, and no named source anywhere in the
set. mynameart's H1 still says **2024**, which is two years stale on a query people run every
August.

No AI Overview was returned for the exact query in this run; the SERP is dominated by
tool-landing pages, which is consistent with an unmet informational need sitting underneath a
transactional keyword.

---

## Phase 2 — Gap analysis

**Table stakes** (present, in some form, across the set — the post looks incomplete without them):

- the phrase "with name" treated as the core feature, not a footnote
- a template/design choice as step one
- adding a photo alongside the name
- free / no-signup expectations
- the 2026 date (Friday 28 August 2026)
- sharing to WhatsApp / Instagram as the destination

**The gap — what none of the six covers:**

1. **The procedure itself.** Nobody writes the steps in order. Every page assumes you will
   figure out the editor by clicking it.
2. **What you need *before* you start.** Nobody mentions gathering the spelling, the photo, or
   deciding the script (Devanagari vs Latin) in advance.
3. **Time.** No page states how long any of this takes. Not one number.
4. **Where people stall.** No page acknowledges that a creation flow can be abandoned halfway,
   or that people leave and come back.
5. **Verification before sending.** Nobody says: check the spelling, check the phone crop, check
   the link opens for someone who is not you and not logged in.
6. **The irreversible mistake.** A misspelled name on something meant to feel personal is the
   one failure the whole exercise cannot survive, and no page in the set mentions it once.
7. **Reversibility.** Nobody distinguishes the steps you can fix after sharing from the one you
   cannot.

**Stale data:** mynameart's H1 is year-stamped 2024. createcustomwishes' "680+ / 532+ / 425+"
are self-reported inventory counts with no basis a reader can check. Neither is worth
superseding — the honest win here is not a fresher statistic but the presence of *any* verified
number, since the SERP contains none.

**Unanswered questions the pages raise and drop:** does the name go into the image or onto a
page? what happens if you get the name wrong? does the recipient need an account? how do you
know it looks right on their phone?

**Fan-out sub-queries** (each maps to an H2 or an FAQ):

- what does "making a rakhi card online with a name" actually mean → H2 2
- what do I need before I start → H2 3
- what are the steps → H2 4 (seven H3s)
- how long does it take → H2 4 + the table (H2 7)
- why do people not finish → H2 5
- what if I spell his name wrong → H2 6
- can I fix it after sending → the table
- how do I check it before sending → steps 6 and 7
- when should I not do it this way → H2 8
- does he need an app / an account / a password → FAQs
- Hindi or English spelling → FAQ
- is it free → FAQ

**Angle (one sentence):** wins by being the only page on this SERP that is a procedure rather
than a template grid — seven ordered steps with real times, a pre-flight list, and a
spelling-verification step — grounded in a 99.4% publish-through rate (2,701 of 2,718) and a
median 6.9-hour gap between a page's first save and its last edit, neither of which any
competitor can publish.

**Deliberate non-overlap with the two adjacent existing posts** (read in full before drafting,
`content/batches/2026-08-18-rakhi-2/blogs/`):

- `raksha-bandhan-wishes-with-name-and-photo.json` owns the **JPG-versus-link format argument**
  and the "what to write next to the name" material. I do not compare formats and I do not
  supply message copy; my message step is about *how long the line takes to write and whether
  it can be edited later*, not what it should say.
- `personalised-raksha-bandhan-card-with-name.json` owns **printed vs digital** and India Post
  lead times. I never raise printing, posting or delivery windows. My comparison table is
  step-level (time and reversibility per step), not route-level.

Residual cannibalisation risk, stated rather than hidden: all three posts share the "name +
rakhi card" head intent and will compete for some of the same long-tails. The intents are
distinguishable (format choice / print-or-send / how-to-do-it), but they are adjacent.

---

## Phase 3 — Sources

Search terms used: `IKEA effect labor leads to love pdf`, `web form abandonment empirical study
completion rate usability guidelines open access`, `proofreading own text harder detecting typos
generation effect`, `endowed progress effect Nunes Dreze pdf`, `"I designed it myself" effect
mass customization pdf`, `task resumption interrupted work CHI`.

All five were downloaded as PDFs and read as extracted text in a sandbox. Every number below
was read out of the source text, not from a search snippet.

| # | Source | Domain | Type | Verified claim (exact) | Published | Subject test | Swap test |
|---|---|---|---|---|---|---|---|
| 1 | Norton, Mochon & Ariely, *The "IKEA Effect": When Labor Leads to Love*, HBS Working Paper 11-091 | `hbs.edu` | scholarly working paper (the OA version of the *Journal of Consumer Psychology* 22(3) article) | Experiment 2, N = 39: builders who finished an IKEA Kassett box bid **M = $1.46** for it; "incomplete builders", asked to **stop before the last two steps** of the identical box, bid **M = $0.59**, t(37) = 2.35, p < .05. Abstract: "labor leads to love only when labor results in successful completion of tasks". | 2011 | ✅ about valuing a thing because you made it, and about what stopping short costs | ✅ would be absurd in a shayari or Marathi-quotes post |
| 2 | Seckler, Heinz, Bargas-Avila, Opwis & Tuch, *Designing Usable Web Forms — Empirical Evaluation of Web Form Improvement Guidelines*, CHI 2014 | `research.google.com` | peer-reviewed conference paper | Controlled eye-tracking experiment, **N = 65**. Mean task completion time fell from **113 s → 85 s (−25%)**, **105 s → 70 s (−33%)** and **104 s → 85 s (−18%)** across three real company forms when 20 usability guidelines were applied; also "fewer form submission trials, and fewer eye movements". | 2014 | ✅ about whether people get through an online form at all | ✅ meaningless in any other keyword in this batch |
| 3 | Burgoyne, Saba-Sadiya, Harris, Becker, Brascamp & Hambrick, *Revisiting the self-generation effect in proofreading*, *Psychological Research* | `englelab.gatech.edu` (authors' lab copy) | peer-reviewed journal article, two eye-tracking experiments | "Experiment 1 failed to reveal a self-generation effect" (N = 64 undergraduates). "Experiment 2 … revealing a weak but non-significant self-generation effect." "Overall, word errors (i.e., wrong words) were detected less often than non-word errors (i.e., misspellings)." "Students who made more text fixations and spent more time proofreading detected more errors." | 2022-07-06 (confirmed via OpenAlex) | ✅ about catching a spelling error in text, which is the post's irreversible-mistake section | ✅ nothing else in this batch turns on error detection |
| 4 | Franke, Schreier & Kaiser, *The "I Designed It Myself" Effect in Mass Customization*, *Management Science* 56(1):125–140 | `wu.ac.at` | peer-reviewed journal article, five studies | Study 2, N = 114, real binding bids (BDM auction): participants who reproduced the design themselves in the toolkit bid **M = €6.85 (SD 3.70)** for the T-shirt; participants bidding on the identical off-the-shelf design bid **M = €4.75 (SD 3.04)**, p = .01 — a difference of "over 40%". Effect "mediated by feelings of accomplishment and moderated by the outcome of the process as well as the individual's perceived contribution". | 2010 (online in advance 2009-10-16) | ✅ about online *design toolkits* specifically — the exact artefact class this post describes | ✅ no other keyword in this batch is about self-design |
| 5 | Mark, González & Harris, *No Task Left Behind? Examining the Nature of Fragmented Work*, CHI 2005 | `ics.uci.edu` | peer-reviewed conference paper | "**57%** of their working spheres are interrupted"; "Though most interrupted work is resumed on the same day, **more than two intervening activities occur before it is**." | 2005 | ⚠️ partial — it studies information workers at work, not people making a greeting card. Cited only for the structural finding that a task left mid-way is resumed later and after other activities, which is what the 6.9-hour first-save-to-last-edit gap looks like from the outside. | ✅ no other post in this batch discusses interruption |

**Context statistics used: zero.** No PIB, TRAI, Census or MEA figure appears in this post.

**Wikipedia: zero body links.** `en.wikipedia.org` is banned for this batch and is not used as a
source or an inline link. It appears only inside `structuredData` `sameAs` pairs, which
`references/structured-data.md` explicitly excludes from the body link budget and which the
checklist *requires* to be Wikipedia-API-verified.

**Domain-uniqueness notes, stated rather than buried:**

- `hbs.edu`, `research.google.com`, `wu.ac.at`, `ics.uci.edu` appear in **0** of the 29 existing
  posts across the three rakhi batches.
- `englelab.gatech.edu` appears in **0** existing posts. The batch ban list names
  `calendar.gatech.edu`, a different host, which does appear in 2 existing posts. If the
  intended rule is registrable-domain dedup rather than host dedup, `gatech.edu` would reach 3.
  I am using it deliberately, because OpenAlex reports the article as `oa_status: closed` with
  no repository full text — the authors' lab copy is the only version a reader can actually
  open, and the alternative was citing a paywall. Flagged here and in the audit rather than
  silently swapped.
- Source 5 is from 2005. It is cited for a structural claim about interruption and resumption,
  not for a rate that would have drifted, but it is the oldest thing in the post and the audit
  says so.

**Entities verified against the Wikipedia API** (`action=query&prop=pageprops&ppprop=wikibase_item&redirects=1`),
all returned `wikibase_item`, none `missing`:

| Title | QID |
|---|---|
| Raksha Bandhan | Q10266 |
| Greeting card | Q915196 |
| Personalization | Q1000371 |
| HTML form (`Form (HTML)` → redirect) | Q287539 |
| IKEA effect | Q1653973 |
| Devanagari | Q38592 |

`Raksha Bandhan` is **Q10266**, not the QID I would have guessed — the check earned its keep.

---

## Phase 5 — targeting

- **Slug** `make-raksha-bandhan-card-online-with-name` — re-verified free against Strapi on
  2026-08-19 (`filters[slug][$eq]` returned `total: 0`).
- **categorySlug** `festive-beats`. Confirmed live in the Strapi categories list. The BRIEF
  prefers `family-and-continuity` where a post is about the relationship; this one is about a
  procedure inside a festival, not about the sibling bond, so `festive-beats` is the honest fit.
- **templateUrls** `https://subhsandesh.in/happy-rakshabandhan-to-brother` and
  `https://subhsandesh.in/templates`, both from `TEMPLATE_LINKS`. The rakhi template is written
  **brother-first**; the body says so plainly in step 1 and points a sister-recipient reader at
  the gallery instead.
- **First-party facts used:** the 99.4% publish-through rate, the 6.9-hour median first-save-to-
  last-edit gap, the 51.9% phone-open share, the 44.3% password rate, and the 2,718-pages /
  13-page-types totals — all copied verbatim from `content/facts.md` (measured 2026-08-18).
  There is no rakhi-specific first-party number and the post does not imply one.
