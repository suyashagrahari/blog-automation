# Research — `online-creative-gift-ideas-for-girlfriend`

Batch `2026-09-15-virtual-gift-30`, wave 2. Market: India. Evergreen.
Primary keyword: **online creative gift ideas for girlfriend**.
Secondaries: `unique surprise gift for girlfriend`, `cute online gifts for girlfriend`.
Category: `digital-gifts-romance`. Templates assigned: `/searched`, `/vending-machine`, `/nutrition`.

---

## Phase 1 — the SERP, read honestly

From `SERPS-WAVE2.md`, `serp-ddg.mjs`, `kl=in-en`, organic only:

1. giftfeels.com — competitor (banned list)
2. amazon.in — storefront
3. uncommongoods.com — storefront ("1449 Unique Gift Ideas")
4. etsy.com — storefront
5. flipkart.com — storefront
6. aiskyla.com — competitor (banned list)
7. nytimes.com/wirecutter — listicle of 50
8. shutterfly.com — listicle of 16
9. theknot.com — listicle of 40
10. vaaree.com — storefront

**My own count disagrees with the row briefing.** The briefing described "3 ecommerce + 1
listicle of 10". What is actually in the file is **5 storefronts** (amazon.in, uncommongoods,
etsy, flipkart, vaaree), **3 listicles** (Wirecutter 50, Shutterfly 16, The Knot 40) and
**2 direct competitors** (giftfeels, aiskyla). That is 5/10 ecommerce, which sits exactly on
the boundary that got eight other rows cut and replaced (BRIEF-WAVE2 §0 records the cut band
as 5–7 of 10). This row survived the cut, so I wrote it, but the honest read is:

- The ceiling on this query is **not** position 1. Amazon, Flipkart and Etsy own the
  transactional half and no page of ours displaces a marketplace on a shopping query.
- There is no listicle of ten to beat. There are listicles of 50, 40 and 16 — an arms race
  I cannot win and should not enter. BRIEF-WAVE2 §0's long-distance advice applies here
  verbatim: do not out-list them.
- What is completely absent from all ten results is **any page that explains what makes a
  gift feel made rather than bought**. Every one of the ten hands you a finished object or a
  catalogue of finished objects. That residual intent — "creative" read as *I want to make
  something, not choose something* — is the only winnable slice, and it is the slice the
  two competitor results are also chasing without answering.

Recorded in the audit as a Gate 2 warning, not hidden.

## Phase 2 — fan-out sub-queries

From `content/keywords/2026-09-15-virtual-gift-100/ac*/autocomplete.csv` (India autocomplete,
PAA substitute):

- `gift ideas for girlfriend creative`
- `gift ideas for girlfriend unique` → fans out to `… free`, `… online`, `… without`, `… app`
- `cute surprise gift for girlfriend`
- `fun surprise gifts for girlfriend`
- `a good surprise gift for my girlfriend`
- `best surprise gift ideas for girlfriend`
- `digital gift surprise`
- `caption for surprise gift from girlfriend`

The `unique` stem fanning into `free / online / without / app` is the tell: the searcher who
types "creative" or "unique" is already half-decided against a parcel. That is who the post
is written for.

## Phase 2b — cannibalisation and the sibling split

No `nearestLive` on this row. But this is the most crowded neighbourhood in the batch, so the
split is stated explicitly:

| Sibling | Owns |
|---|---|
| `what-can-i-gift-my-girlfriend` (wave 1) | four-question decision: physical vs digital |
| `online-gift-for-girlfriend` (wave 1) | does an online gift *read* as lazy to the recipient |
| `digital-gift-for-girlfriend` (wave 1) | go/no-go: five questions that eliminate forms |
| `virtual-gift-ideas` (wave 1) | ranked by what people actually finish |
| `digital-gift-ideas-for-girlfriend` (wave 2, parallel) | decision procedure for the undecided |
| `website-to-impress-girlfriend` (wave 2) | will a website actually impress her |
| `cute-website-for-girlfriend` (wave 2) | "cute" as a format distinct from "romantic" |
| **this post** | **what makes a digital gift feel *made* rather than *ordered* — the borrowed-format trick, what each format demands you supply, and where each misfires** |

Differentiate, not escalate. The line I hold: every sibling asks *which* thing to send. This
post asks *what you have to put into it*, and answers it with three formats that are empty
containers until you fill them. No sibling covers the borrowed-format mechanism, and none
covers the failure mode of a joke format sent to someone who is not in the mood.

Note on overlap: `cute-website-for-girlfriend` (parallel wave-2 sibling) also carries
`/nutrition` in its `templateUrls`. I kept mine because `WAVE2-PLAN.json` assigned it and the
treatments differ — that post uses it as an example of "cute", this one uses it as the
worked example of a format that misfires. Flagged, not silently swapped.

## Phase 3 — sources

Caps checked against `SPENT-SOURCES.json` (2026-09-16) **and** a live count of the 48 JSONs in
`blogs/`. All four domains below were at **zero** uses in the batch at the time of writing.
`hbs.edu` deliberately avoided (at 2/2) and the IKEA-effect literature deliberately avoided —
the effort argument is routed through the handmade/love-signal literature instead.

1. **Fuchs, Schreier & van Osselaer (2015), "The Handmade Effect: What's Love Got to Do with
   It?", *Journal of Marketing* 79(2), 98–110** — `research.wu.ac.at/de/publications/b7524b6d-9609-4896-b837-a5bb771f4e4c`
   Verified via `ctx_fetch_and_index`. Abstract states: four studies find a positive handmade
   effect on product attractiveness, driven to an important extent by perceptions that
   handmade products symbolically "contain love"; validated by controlling for effort, quality,
   uniqueness, authenticity and pride; and moderated such that consumers prefer handmade over
   machine-made **when buying gifts for loved ones but not for more distant recipients**.
   *Abstract only — the full text is behind the AMA paywall. Recorded as such.*
   Subject test: passes — it is about the gift/love signal of making, not about India or the
   internet. Swap test: passes — no other post in this batch argues made-vs-ordered.

2. **Karasik (2018), "Algorithms of comic texts construction", *Russian Journal of
   Linguistics*** — `journals.rudn.ru/linguistics/article/view/20174`
   Verified: landing page returns 200 with the full English abstract. Corpus of ca. 1,000
   jokes, humorous aphorisms and demotivators. Key line used: comic texts are interpreted
   "in terms of their narrative, or descriptive or argumentative correlation with
   corresponding non-comic texts" — i.e. a joke format is read against the straight format it
   imitates. Also: denotative and significative incongruence, and "collisions of
   interpretation scripts".

3. **Gorbacheva, Berlin Khenis, Puchkova & Osadchiy (2021), "Experimental Study of
   Demotivators and Memes Perception Complexity", *Science Journal of VolSU. Linguistics*
   20(2), DOI 10.15688/jvolsu2.2021.2.7** — `l.jvolsu.com/…/2211-…`
   Verified. Eye-tracking, n = 60 (31 forensic linguists, 29 non-experts). Statistically
   reliable result: compared with memes, respondents looked at demotivators for a longer
   time, made more and shorter fixations, and faster and shorter saccades — read by the
   authors as a denser scanning pattern and **greater cognitive expenditure**. CC BY 4.0.
   Used for: a rigid borrowed frame makes the reader work harder and look longer.

4. **Bogdan (2014), "Failed Humour and its Effects in Conversation: a Case Study", *Limbaj și
   Context / Speech and Context*, DOI 10.62413/lc.2014(1).04** — `ojs.sc.usarb.md/index.php/limbaj_context/article/view/260`
   Verified. Abstract: humour "may also offend the interlocutors bringing about
   misunderstanding and confusion", splits into **unperceived** and **rejected** humour, and
   is generally unsuccessful "when there is incongruity between the interlocutors' speaking
   styles, resulting in an opposition between what is meant and how it is perceived".
   Used for the misfire section.

**Rejected leads and why:** `frontiersin.org`, `pmc.ncbi.nlm.nih.gov`, `arxiv.org`,
`journals.plos.org` — domain cap. `nature.com`, `link.springer.com`, `onlinelibrary.wiley.com`,
`journals.sagepub.com`, `tandfonline.com`, `mdpi.com` — blocked from this sandbox (BRIEF §10).
`ejop.psychopen.eu` (Humour Use Between Spouses, 2014) — at 2/3, left for a sibling.
`theconversation.com` ("Does 'made with love' sell?") — at 2/3, left alone.
`gc.vgtu.lt` ("The elements of making", *Creativity Studies* 2022) — **fetch failed,
CERT_HAS_EXPIRED**, so not cited. `api.openalex.org` not attempted (429 per BRIEF-WAVE2 §1b).
Search route used: Crossref → DOAJ (short queries) → OpenAIRE; Europe PMC returned HTML rather
than JSON on the first two attempts and only worked with `resultType=core`.

## Phase 4 — first-party facts

Sibling check across all 48 JSONs in `blogs/` shows the canonical pair is exhausted: the 49.0%
phone figure appears in 44 posts, the 4,357 total in 42, the 94.1% publish rate in 42, the
40.6% password figure in 42, the 6.2-hour edit gap in 36. So the opening pair here is
deliberately different:

- **3,377 registered creators** and **1.29 pages per creator** (20 uses each) — people make
  one thing, once. A marketplace is built for repeat purchase; this is not that.
- **Most-viewed template: /love-gf, 16,201 views, 32.4% of all 49,968 views** (7 uses) —
  attention concentrates on one shape, so the shape is not the differentiator. The contents are.

Used further down the body: the 6.2-hour median first-save-to-last-edit gap (the labour),
/apology-dashboard at 1,043 pages / 23.9% (the fight case), 49.2% touch-device views (she is
reading it on a phone, alone), 94.1% publish rate (the failure mode is a thin page, not an
abandoned one), and the 96.3% no-occasion split.

**Disclosures carried in the body:** the database records which *template* was opened, not who
received it, so /love-gf counts do not prove the recipient was a girlfriend. No pricing claim
anywhere — the `facts.md` pricing block is empty.

## Phase 5 — structure

1. H1 + answer block (three short paragraphs, two first-party facts inside 150 words)
2. `## What makes an online gift creative rather than just personalised` — definition
3. `## Why a borrowed format does the work` — Karasik + Gorbacheva et al.
4. `## Three creative pages, and what each one needs from you` — H3 × 3, `/searched`,
   `/vending-machine`, `/nutrition`, each: what it does / what you supply / where it misfires
5. `## What each route asks of you, side by side` — 4-row table, first-party column
6. `## When a joke format is the wrong gift` — Bogdan; names where SubhSandesh loses
7. `## What to write when you cannot think of anything specific`
8. `## Sources`

Internal links: `/searched`, `/vending-machine`, `/nutrition`, `/templates` (4, all in
`TEMPLATE_LINKS`), plus two blog cross-links (`/blog/what-can-i-gift-my-girlfriend`,
`/blog/sorry-gift-online-for-girlfriend` — the latter is a confirmed #2-ranking live page per
BRIEF-WAVE2 §0). Blog cross-links are excluded from the 2–4 template count per §3.

Wikipedia: zero body links (`en.wikipedia.org` is at 2/3). Entity grounding is done only in
`structuredData` `about`/`mentions`, where it does not count against the body budget. All QIDs
verified against the Wikipedia API on 2026-09-16: Gift Q184303, Nutrition facts label Q1531970,
Vending machine Q211584, Autocomplete Q749875, Humour Q35874.

## Phase 6 — what this post cannot do

It cannot outrank Amazon, Flipkart or Etsy on a query where half the results are storefronts,
and it cannot out-list a 50-item Wirecutter page. What it can do is be the only result that
tells the reader what a creative gift costs them in specifics, and the only one that says out
loud which of these formats to avoid and when.
