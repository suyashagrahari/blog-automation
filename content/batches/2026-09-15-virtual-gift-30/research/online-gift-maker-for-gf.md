# Research brief — `online gift maker for gf`

- **Slug:** `online-gift-maker-for-gf` (checked against Strapi 2026-09-16: 0 results, free)
- **Row:** 14 of `WAVE3-PLAN.json`, tier B, `mustDifferentiate: true`
- **Category:** `digital-gifts-romance` · **Templates:** `/bouquet-gf`, `/photo-puzzle`, `/darling`
- **Market:** India, evergreen. Register: "gf", not "girlfriend" — casual, phone-first, in a hurry.

---

## Phase 1 — SERP analysis

India SERP (`ddg-html`, `kl=in-en`, ads filtered, collected 2026-09-16, recorded in
`SERPS-WAVE3.md`). All ten are on the banned list in `BRIEF-WAVE3.md` §1 or are
retail. Read for gap analysis only; none cited or linked.

| # | Result | Shape | Where the direct answer sits | Format |
|---|---|---|---|---|
| 1 | giftfeels.com/gifts-for-girlfriend | competitor landing page | above the fold, as a pitch | hero + template grid, no prose |
| 2 | gifft.me | competitor landing page | pitch | product page |
| 3 | aiskyla.com | competitor landing page | pitch | product page |
| 4 | boxofjoy.fun | competitor landing page | pitch | product page |
| 5 | blinkwish.in | competitor landing page | pitch | product page |
| 6 | amazon.in customized gifts search | retail SERP | none | faceted product grid |
| 7 | etsy.com virtual gifts market page | retail SERP | none | product grid |
| 8 | amazon.in gifts for girlfriend | retail SERP | none | product grid |
| 9 | myheartcraft.com blog listicle | competitor article | after an intro | listicle, "cute websites to send" |
| 10 | cutiepage.in | competitor landing page | pitch | product page |

**What the page-one set is optimising for:** conversion on the word *maker* — every
result sells a maker or sells objects. **Eight of ten are product landing pages or
retail searches; exactly one is an article, and it is a competitor listicle.** No page
in the ten explains what an online gift maker *is*, what it needs from you, or how long
using one takes. No AI Overview surfaced on the collected result set.

Gate 2 note: two of ten are Amazon and one is Etsy — retail pressure exists but is well
below the 5–7/10 threshold that killed eight wave-2 rows.

## Phase 2 — Gap analysis

**Table stakes** (present across the landing pages, so the post must cover them):
what the tool produces (a link), that the recipient installs nothing, that it works on a
phone, that you can add photos and a message, that pages can be private.

**The gap.** Nobody on page one writes about the tool as a tool. Specifically missing:
what a configurator can and cannot generate; what you must have ready before you open
it; the real elapsed time from first save to sent link; and what to check between
"finished" and "sent". That is the post.

**Stale data:** none — the landing pages cite no dated research at all, so there is
nothing to supersede. That is itself the finding.

**Unanswered questions raised and dropped by the SERP:** cost (every competitor says
"free" without terms), what happens to the page afterwards, whether you can edit after
sending, and what to do if she does not react.

**Fan-out sub-queries → H2s:** what is an online gift maker · what do I need before I
start · how long does it take · which maker produces what · how do they compare · what
do I check before sending · when is this the wrong tool.

**Angle:** wins by being the only post that treats an online gift maker as a tool with
inputs, a runtime and a failure mode, using SubhSandesh's 1,070 bouquet pages (24.6% of
4,357) and 11.5 average views per page instead of ranking gift ideas.

## Anti-cannibalisation (`mustDifferentiate: true`)

Four of ten organic URLs shared with each of three published posts. All three read in
full before drafting (`blogs/*.json`):

| Sibling | What it actually covers | Split |
|---|---|---|
| `cute-website-for-girlfriend` | "cute" as a format distinct from romantic; five joke-shaped pages | theirs is *which silly thing*; mine is *the tool and the making* |
| `digital-gift-for-girlfriend` | five questions that eliminate gift forms — a go/no-go decision | theirs is *whether and which*; mine starts after that decision |
| `virtual-christmas-gift-for-girlfriend` | 25 December as a hard deadline; occasion post | theirs is *an occasion*; mine is occasion-free |

**Differentiation sentence (also in the audit):** the three near-neighbours answer which
gift to send, what counts as cute rather than romantic, and a dated occasion; this post
is about the tool and the making — what the maker supplies, what you must bring, how
long it takes, and the check before you send.

**Cross-linked:** `cute-website-for-girlfriend` (the `nearestWritten` on the plan) in
the "wrong tool" section, plus `digital-gift-for-girlfriend` for readers who have not
chosen a form yet.

Also checked, not named on the row: `how-to-make-a-website-for-your-girlfriend` (wave 3,
in flight) covers the *build order* for writing or hosting a site yourself — a different
question from what a ready-made configurator does, and no SERP overlap was recorded
between the two rows. `online-gift-kaise-banaye` is the Hinglish `banaye` query.

**Sibling in flight:** `online-gift-maker-for-bf` on the near-identical boyfriend query.
Deliberately not a gender swap: this row carries the craft-and-beauty templates
(`/bouquet-gf`, `/photo-puzzle`, `/darling`) and is written toward making something
considered; the bf row carries the joke templates.

## Phase 3 — Sources

API state on 2026-09-16, measured from this sandbox:

- **OpenAlex** — dead for the day, HTTP 429, "insufficient budget, $0 remaining". Not called after the first failure.
- **Semantic Scholar** — HTTP 429 on the first and only call.
- **DOAJ** — Cloudflare HTTP 502 on every query, with and without an `Accept: application/json` header.
- **Crossref, Unpaywall, OpenAIRE** — all healthy; these did the work.

Route used: Crossref/OpenAIRE for discovery → Unpaywall to find an open-access location
that is not on a blocked publisher host → `ctx_fetch_and_index` on the landing page to
verify the claim. **Every source was read as an abstract and metadata only**: the
open-access copies are PDFs, which do not parse in this sandbox. Recorded in the audit
and in the body's Sources list.

Search terms tried: `self-design customization consumer value effort`,
`effort signal gift giving thoughtfulness`, `co-creation psychological ownership product
attachment`, `personalization perceived effort recipient appreciation`,
`constraints templates creativity design`, `customization toolkit consumer`,
`digital gift giving`, `handmade gift`, `gift personalization`, `effort justification`,
`greeting card personalisation`.

| # | Source | Domain | What it carries | Published |
|---|---|---|---|---|
| 1 | Zhao, McLoughlin, Adzhiev, Pasko — *3D Mass Customization Toolkits Design, Part I* | `eprints.bournemouth.ac.uk` (0 prior uses in batch) | toolkit evaluation model: individual differences, solution space, interaction design, enabling technologies | 2018-08-13 |
| 2 | Turner, Merle, Fatien Diochon — *How to Assess and Increase the Value of a Co-Design Experience* | `grenoble-em.hal.science` (0 prior) | four variables of self-design value: enjoyment, control, pride of authorship, complexity | 2011 |
| 3 | Franke, Hader — *Configuration Toolkits as Learning Instruments* | `research.wu.ac.at` (1 prior) | three experiments: a ten-minute self-design session raised preference insight by an average of €43.13, +66% | 2013-11-27 |
| 4 | Ciampa, De Valck — *Co-creative gift systems within digital platforms* | `research.birmingham.ac.uk` (1 prior) | netnography of digital gift systems; roles between giver and recipient are fluid | 2024-06-12 |

Subject test: all four are about co-design tools and digital gift systems — the
behaviour this post is about, not "about India" or "about the internet". Swap test: none
would sit unchanged in a Christmas, cute-website, long-distance or apology post in this
batch; the only genuine risk is the boyfriend twin, flagged in the audit. No generic
context statistic (PIB/TRAI/Census/MEA) used. No Wikipedia link in the body. Caps checked
against `SPENT-SOURCES.json` and every sibling `sources` array immediately before
writing; all four hostnames were at 0 or 1 posts.

## Phase 4–5 — Draft decisions

- Direct answer in the first four short paragraphs; the 1,070/24.6% bouquet count and
  the 11.5 views-per-page average both land inside the first 150 words.
- Disclosure carried in the body, not only the audit: the database records which
  *template* was opened, not who received it.
- Pricing: `facts.md` `## Pricing` is empty, so the post states it will not quote a
  figure and points at `/templates`.
- Internal links: `/bouquet-gf`, `/photo-puzzle`, `/darling`, `/templates` (four, the
  cap), each placed after the section that earns it. Two blog cross-links on top.
- `structuredData`: one `@id`-matched enrichment block on `<canonical>#post` carrying
  `about`/`mentions`/`citation`, plus an `ItemList` mirroring the three H3s in order.
  Wikidata QIDs verified against the Wikipedia API (Q1367461, Q184303, Q1000371).

## Phase 6 — Audit

49 of 50 checklist items pass. The one failure is structural: the slug keeps the stop
word "for" because the primary keyword is the exact phrase `online gift maker for gf`.
Closable only by retargeting the keyword.
