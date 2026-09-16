# Research brief — `online gift maker for bf`

- **Batch:** `2026-09-15-virtual-gift-30`, wave 3, row 15 of `WAVE3-PLAN.json`
- **Slug:** `online-gift-maker-for-bf` (checked against Strapi 2026-09-16 — `total: 0`, free)
- **Category:** `digital-gifts-romance`
- **Templates:** `/loveflix`, `/court-of-love`, `/legal-notice` (all assigned; none swapped)
- **Row flags:** `gate2: PASS`, `overlapWithWritten: 3`, `overlapWithNewRow: 3`,
  `mustDifferentiate: false`, `nearestWritten: null`

---

## Phase 0 — data gate

`npm run facts` was **not** re-run (production-DB read denied for this wave, per
`BRIEF-WAVE3.md` §5). All first-party lines are quoted from `content/facts.md`
as measured **2026-09-15**, and the post says so.

Gate met: ten relevant facts available, three inside the first 150 words
(3,377 registered creators · 1.29 pages per creator · 11.5 views per created page).

Two hard constraints observed:

- **`## Pricing` in `facts.md` is empty.** The post states plainly that current
  pricing cannot be confirmed and links `/templates`. No figure is stated or inferred,
  in body or in FAQ.
- **The database records which template was opened, not who received it.** The post
  discloses this in the body before it uses any per-template count, because the
  recipient here is a boyfriend and the biggest template counts are romantic pages.

## Phase 1 — SERP analysis

Source: `SERPS-WAVE3.md`, `## online gift maker for bf` (ddg-html, `kl=in-en`,
collected 2026-09-16, ads filtered). **No page was fetched, cited or linked** — the
whole result set is either a banned competitor or a marketplace category page.

| # | Result | Type | What it optimises for | Answers "what does making one involve"? |
|---|---|---|---|---|
| 1 | giftfeels.com/virtual-gifts | competitor landing page | "send a surprise gift link in minutes" | No — product page, no process |
| 2 | gifft.me | competitor landing page | "free virtual gifts online" | No |
| 3 | gifter.live | competitor landing page | "create and send free virtual gifts" | No |
| 4 | amazon.in `Boyfriend Gifts` | marketplace search | physical product sale | No — wrong product entirely |
| 5 | giftsbyrashi.com | retail site | physical personalised gifts | No |
| 6 | giftfeels.com/birthday-gifts | competitor landing page | "birthday surprise website" | No |
| 7 | amazon.in `birthday gifts for boyfriend` | marketplace search | physical product sale | No |
| 8 | myheartcraft.com/blog/cute-websites… | competitor blog | roundup of "cute websites" | Partly — lists tools, not the build |
| 9 | cutiepage.in | competitor landing page | "make a website gift for gf or bf" | No |
| 10 | flipkart.com `personalized gifts` | marketplace search | physical product sale | No |

**Structure of the set:** nine of ten are pages trying to sell you the thing, not
explain it. The single blog result (#8) is a competitor roundup. Word counts and
heading structures were not recorded for the competitor pages because they are
landing pages, not articles — there is no article structure to compare against.

**Where the direct answer appears:** nowhere. Not one result opens by saying what a
gift maker is, what you must supply, or how long it takes.

**Data cited by the set:** none. No result cites a statistic of any kind, first-party
or third-party. That is the single largest opening in this SERP.

## Phase 2 — gap analysis

**Table stakes** (must be present or the page looks incomplete): what the tool is;
that the output is a shareable link; that no app or account is needed for the
recipient; that formats are template-based; a mobile caveat.

**The gap.** Every result is positioned as *"send a gift"*. None is positioned as
*"here is what making one involves"*. Specifically, nobody covers:

1. The **inputs** — what you must physically have before you open the builder.
2. The **time** — everyone says "in minutes"; nobody reconciles that with the fact
   that people actually take an evening.
3. The **output** — that it is a URL, hosted elsewhere, not a file you own.
4. The **pre-send check** — the last pass before the link leaves your phone.

**Stale data:** not applicable — the SERP cites no data at all.

**Unanswered questions raised and dropped by the set:** "in minutes" (how many?),
"free" (free to do what?), "no coding" (so what do I need instead?).

**Fan-out sub-queries → H2 map:**

| Sub-query | H2 |
|---|---|
| what is an online gift maker | What an online gift maker actually is |
| what do I need to make one | What you need in hand before you open one |
| which one should I pick for a boyfriend | Three makers built for a boyfriend, and all three are jokes |
| how do they compare | What the three cost you, in time and in material |
| how long does it take | How long it really takes, and why your estimate is wrong |
| what do I get at the end | What comes out, and the check to run before you send it |
| when is this a bad idea | When an online gift maker is the wrong call for your bf |

**Angle (recorded as `batchMeta.angle`):** wins by being the only post that answers
this as a tool question — the three inputs, the measured 6.2-hour median first-save
to last-edit gap against the ten minutes everyone promises, and what actually comes
out — instead of listing gift ideas.

## Sibling check (anti-cannibalisation)

Six siblings read in full before drafting:
`virtual-gift-for-bf`, `virtual-gift-website-for-boyfriend`, `digital-gift-for-boyfriend`,
`online-gift-for-boyfriend`, `virtual-gift-for-boyfriend-birthday`, `online-gift-kaise-banaye`.

`mustDifferentiate` is **false** for this row (overlap 3/10 against written posts), so
no differentiation mandate applies. The splits are still recorded, because two
siblings sit close:

- **`virtual-gift-for-bf`** owns the casual-register argument and the joke formats
  themselves (`/challan`, `/recharge`). This post owns the *build*: inputs, duration,
  output, pre-send check. **Cross-linked** from the joke-templates section with
  descriptive anchor text.
- **`online-gift-kaise-banaye`** owns the how-to steps in Hindi/Hinglish. This post is
  English, boyfriend-specific, and organised around the artefact rather than the steps.
- **`virtual-gift-website-for-boyfriend`** checks the *service* before you build
  (accounts, editability, link longevity). This post checks the *page you made* before
  you send it. No overlap in checklist content.

No sibling's primary keyword is targeted as a secondary here.

## Phase 3 — sources

**Route used:** Crossref (search) → Unpaywall (open-access location filter) → fetch the
landing page. `journal.sjdm.org` redirects to `jbaron.org` and serves full HTML.
DOAJ returned **HTTP 502** on every query late in the run; OpenAlex, Semantic Scholar
and CORE were not attempted, per the wave-3 instruction that they are 429ing.

**Blocked from this sandbox during this run** (recorded so the next agent does not
repeat them): `mediatum.ub.tum.de` and `inria.hal.science` (Anubis proof-of-work
challenge), `degruyterbrill.com` (HTTP 202 challenge), `onlinelibrary.wiley.com`,
`mospace.umsystem.edu` (JS-only DSpace shell).

**No PDF was parsed.** Every source below was read as an HTML landing-page abstract
or, for the two JDM papers, as HTML full text. That is recorded in the post's own
sources note and in the audit.

| # | Source | Domain | Date | Why it is here |
|---|---|---|---|---|
| 1 | Fernando & Ranasinghe, *Product personalization: stimulating attachment between product and consumers*, FARU Proceedings, University of Moratuwa | `dl.lib.uom.lk` | 2020-11-06 | Attachment comes from the maker's own involvement, not from customisation as such — the reason "a detail only you know" beats picking fonts. South Asian sample. |
| 2 | Wiese, Buehler & Griffin, *Backward planning*, Judgment and Decision Making 11(2) | `journal.sjdm.org` | 2016-03-01 | Backward planning produced longer, less biased completion-time predictions across four experiments. |
| 3 | Goswami & Urminsky, *More time, more work*, Judgment and Decision Making 15(6) | `journal.sjdm.org` | 2020-11-01 | Longer available time inflates perceived task scope even when the limit is known to be arbitrary — why "I have all evening" makes this feel big. |
| 4 | Umam, Rusliyanti & Oktaviani, *Norms Violation and Dark Personality*, IACCP Congress Proceedings | `scholarworks.gvsu.edu` | 2025-11-01 | N=160: casual jokes rated funnier and **less violating** than dark jokes; dark jokes funny only when understood. The evidence behind "keep the demands petty". |

**One source was cut at verification.** The post originally carried five, the fifth being
Norton, Mochon & Ariely's *The IKEA effect: When labor leads to love* (JCP 22(3), 2012)
on `dash.harvard.edu`, cited for the finding that the valuation boost from self-made
things survives **only** on completion. `dash.harvard.edu` stood at 2 when Phase 3 ran
and a concurrent wave-3 sibling took it to 3 mid-write, so citing it put the domain at 4
across the batch. It was dropped rather than left for the orchestrator to strip from
someone else, and the paragraph it supported was rewritten to lean on source 1 (the
maker's own involvement is where the attachment comes from, so it only exists if you
finish) plus the first-party 94.1% completion figure. No open-access host for that paper
fetched from this sandbox: `mediatum`-style repositories and SSRN are blocked, and the
2017 conceptual replication and the 2020 mass-customisation follow-up are both closed.

**Cap position, checked against `SPENT-SOURCES.json` and all sibling `sources` arrays:**
`journal.sjdm.org` (0 → 2), `scholarworks.gvsu.edu` (0 → 1) and `dl.lib.uom.lk` (0 → 1)
are all new domains for this batch. No URL here appears in any other post.

Zero generic context statistics (no PIB / TRAI / Census / MEA). Zero Wikipedia body
links. Zero competitor citations or links.

**Search terms that produced nothing usable**, recorded per the skill: `gift giving`,
`digital gift`, `virtual gift`, `product personalization` and `humour relationships`
on DOAJ (502 late in the run, noise earlier); `end-user development web authoring`,
`no-code low-code citizen developer` and `template based design tools novice users`
on Crossref — the low-code literature is about enterprise IT and fails the subject
test outright; `music evoked autobiographical memory` returned only PLOS and PMC
hosts, both at the domain cap, so the "add a song" input is described in the post
without a citation.

## Phase 6 — audit summary

50 checklist items, `passed = 49`, `failed = 1`, disjoint, asserted in the build script.

The single recorded failure is the **swap test**: the two Judgment and Decision Making
papers are about task-duration estimation in general and could sit unchanged in another
"how do I make one" post in this batch. They are kept because build time is this post's
own lane and no sibling cites them, but the item is failed honestly rather than argued
away.
