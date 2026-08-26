# Research brief — `raksha bandhan business wishes with company logo`

Slug: `raksha-bandhan-business-wishes-with-company-logo`
Batch: `2026-08-25-rakhi-2027` · Lane assigned: **D (publisher-native OA), then F (media & data)**
Written 2026-08-26.

---

## STEP 0 — Angle-collision check (run before drafting, as instructed)

```
grep -rh '"angle"' content/batches/*/blogs/*.json
```

**Result: a real partial collision, and worse than the orchestrator knew.**

The live post `corporate-raksha-bandhan-greeting-for-employees`
(`content/batches/2026-08-18-rakhi-2/blogs/`) carries this `batchMeta.angle`:

> "Wins by being the only post written for the sender rather than the sibling — it
> separates colleague-framed from sibling-framed wording, **prices the inclusion and
> logo decisions the whole SERP skips**, and anchors the channel choice in
> SubhSandesh's own 51.9% mobile-open rate and 6.9-hour median edit gap."

Reading that post in full (1,796 words) confirms the overlap is concrete, not nominal:

| What the live post already publishes | Evidence |
|---|---|
| A dedicated H2 **"Should your company logo be on the greeting?"** | heading list |
| The verdict the brief assigned me as *my* differentiator | "Small and in the signature, yes. Locked up with the rakhi artwork as the visual centre, no — the card becomes an advertisement wearing a festival as a costume" |
| The named-person point the brief assigned me | "So sign it from a human being. 'Ravi, and everyone at [company]' beats 'Team HR', and beats a logo standing alone." |
| An FAQ **"Should our company logo be on the greeting?"** | `article.faqs` entry 5 of 12 |
| The when-not-to-send section | "## When a corporate rakhi greeting is the wrong call" |
| Employee-recognition research | `docs.iza.org/dp8311.pdf`, Kosfeld & Neckermann 2011 |

And the collision is documented in the repo, not merely implied. The live post's own
research brief opens:

> `content/batches/2026-08-18-rakhi-2/research/corporate-raksha-bandhan-greeting-for-employees.md:4`
> **"Secondary keyword folded in: `raksha bandhan business wishes with company logo`"**
> …line 72: **"raksha bandhan business wishes with company logo → H2 4"**

So **my exact assigned keyword was deliberately folded into a live post as a secondary
keyword with a dedicated H2.** That is the third time in this batch an assigned angle
turned out to be in use (see BRIEF.md, Gate 2 cut #6), and the first time the keyword
itself — not just the angle — was already targeted.

### Verdict: reshape, do not stop. Three reasons.

1. **The harvest authorises a standalone page knowing the other post exists.**
   `content/keywords/2026-08-25-raksha-bandhan/shortlist.md` entry 6 says
   *"**Action:** new-page · **Bucket:** winnable (from the 2026-08-13 backlog) … You
   already have `corporate-raksha-bandhan-greeting-for-employees`, so this is a cluster
   you have started and abandoned."* The decision to build a second page was made with
   the first page on the table.
2. **The live post explicitly defers my half.** Its own logo section ends:
   *"Save the full brand lockup for the client version, where the company name is the
   point."* It resolves the logo question **for employees only** and hands the external
   audience onward. It contains the word "client" three times and never addresses one.
3. **One paragraph is not a page.** The live post spends ~120 words and one FAQ on the
   logo. It gives a verdict without a mechanism, without the placement decision, and
   without any research on why brand prominence changes how a message is read.

### What that forces this post to be — and what it must NOT re-run

**Must not re-run** (it is published and I will not paraphrase it): the employee-facing
logo verdict as the spine, the four employer wordings, the not-all-Hindu wording
section, the personalising-200-greetings problem, the IZA/Kosfeld recognition
literature, the "sign it from a human being" line.

**This post is instead:**

- **The external half** — clients and vendors, the audiences the live post defers.
- **Logo *mechanics* rather than a logo *verdict*** — the prominence decision decomposed
  into three independent dials with a named framework behind it (Meyer & Manika 2017),
  where the live post offers a single small/large binary.
- **The mechanism for why it backfires** — persuasion knowledge (Boerman et al. 2017)
  and inferred corporate motive (Woisetschläger et al. 2017), neither of which appears
  in the live post or anywhere in the SERP.
- **Internally linked to the employee post**, so the cluster consolidates instead of
  competing. The two pages must read as halves, not rivals.

---

## Phase 0 — Data gate

`content/facts.md`, regenerated 2026-08-25 against the live `gifts` DB: 17 facts.

**HARD RULE observed: no rakhi-specific first-party statistic.** `rakshabandhanpages` = 3
documents, `rakshabandhansisterpages` = 3, rakhi template views = 39 of 36,202 (0.1%).
n=3 supports no rate and no percentage. **No statistic computed from it anywhere in this
post.** Recorded in `auditReport.failed`.

Assigned primary fact (leads the first 150 words):

- **44.2% of creators password-protect their page before sharing it (1,315 of 2,973) — measured 2026-08-25**

Supporting:

- 51.1% of shared pages are opened on a phone (18,497 of 36,202 views) — measured 2026-08-25
- 99.4% of started pages are actually published and shared (2,956 of 2,973) — measured 2026-08-25
- Average views per created page: 12.2 — measured 2026-08-25
- 2,973 pages across 15 page types · 2,466 creators — measured 2026-08-25

The password figure is the right lead for *this* keyword for a non-obvious reason: it is
the strongest evidence in the dataset that these pages are **addressed**, not broadcast.
A branded corporate greeting is the one use case where the sender's instinct is the
opposite — broadcast — which is exactly the tension the post is about.

**Honest weakness:** every one of these is platform-wide, not corporate-specific and not
rakhi-specific. There is no first-party data on branded or corporate greetings at all,
because SubhSandesh ships no corporate template. In `failed`.

---

## Phase 1 — SERP teardown: NOT RUN. Instruments exhausted.

Per the brief, this goes in `honestAssessment`, **not** `failed`.

- **WebSearch:** one attempt, as instructed. Refused — *"this session has used its web
  search budget (200 of 200 WebSearch calls)"*. No further attempts.
- **Brave `country=IN`:** no API key is present in the environment or in `.env*`,
  `.mcp.json`, or `.claude/settings*.json`. Could not be attempted at all — this is a
  different failure from the 429 back-off other agents hit.
- **Bing:** deliberately not pulled. A control in this batch proved it drops modifiers
  and serves a cached head-term SERP, which for a 7-word modifier query would be
  actively misleading.

**No top-5 pages were fetched, so there is no page-by-page comparison table.** What
follows is recorded competitive intel from the two harvests, which is weaker evidence
than a live teardown and is labelled as such.

| Source | Recorded | Reading |
|---|---|---|
| `content/keywords/2026-08-13-rakhi/keyword-inventory.csv:33` | targeted competitor `createcustomwishes.com`, page type `tool`, **8 of 10 weak**, vol band 100–400 EST | one template mill holds the query |
| `content/keywords/2026-08-13-rakhi/shortlist.md:207` | *"createcustomwishes is the only real competitor. Genuinely open — but it is a B2B corporate-greeting play, off-strategy for a consumer product."* | open ground, deliberately deferred once |
| `content/keywords/2026-08-25-raksha-bandhan/shortlist.md:88` | **5 weak**, demand 2, *"`brands.live` — the only real incumbent for logo-on-greeting — is a template mill, not a publisher"* | no publisher incumbent |
| `content/keywords/2026-08-25-raksha-bandhan/site-baseline.md:54` | *"keep — 2027 queue, and B2B intent is uncontested"* | |

Both named incumbents are competitors under `references/competitors.md` and are **never
named or linked** in the post. The post describes what template mills do generically
("a tool whose job ends when the file is generated") without identifying one.

---

## Phase 2 — Gap analysis (from recorded intel, not a live teardown)

**Table stakes** — a page on this query must carry: actual sendable wordings; the
placement answer; the employee/client distinction; the send channel; the date.

**The gap.** Everything on this SERP is a *generator*: upload a logo, pick a template,
download a JPG. The question "should this logo be here, how big, and how many times"
is never asked, because the tool's business model depends on the answer being yes.
Nobody segments the answer by recipient. Nobody says don't send it.

**Fan-out sub-queries → H2s:**

| Sub-query | H2 |
|---|---|
| where does the logo go on a business rakhi greeting | H2 2 (three dials) |
| why do corporate festival greetings feel fake | H2 3 (mechanism) |
| corporate rakhi wishes for clients vs employees vs vendors | H2 4 (+ table) |
| should the greeting come from the company or a person | H2 5 |
| business rakhi wishes samples / what to write | H2 6 |
| when should a company not send festival wishes | H2 7 |
| how to send a branded greeting / email or link | H2 8 |

**Angle (`batchMeta.angle`), written to be honestly defensible against the live post:**

> Wins by being the only page on this query that treats the company logo as three
> independent decisions rather than one yes/no — visibility, frequency and placement,
> using the brand-prominence typology of Meyer & Manika (2017) — and the only one that
> gives clients and vendors a different answer from employees, naming the inferred-motive
> mechanism (Woisetschläger et al., 2,787 consumers across 44 sponsorships) that makes a
> dominant logo read as calculative; grounded in the 44.2% of 2,973 SubhSandesh creators
> who password-protect a page before sharing, the evidence that these pages are addressed
> rather than broadcast.

---

## Phase 3 — Sources

Lane D was assigned first and lane D is where the topical research actually lives:
brand prominence, inferred corporate motive, persuasion knowledge and customer gratitude
are all publisher-native marketing-journal literature. **Every lane-D publisher host
403s an automated fetch** (confirmed again this pass, and already recorded in
`SOURCES.md` by the `what-to-write-in-raksha-bandhan-card` agent). So all five were read
from **open-access repository copies of lane-D journal articles** — the exact route the
batch brief recommends. **All five full texts were fetched and read; none is
abstract-only.**

**Lane F was not used.** It is recorded exhausted twice over in `SOURCES.md`
(pewresearch 2/2, theweek.in at cap, sciencedaily/statista walled, lokniti elections
only, themarkup off-subject) and it has nothing on brand prominence regardless. No
generic context statistic is used, so the "at most 1" allowance is spent at zero.

| # | URL | Domain | Work | What it actually says | Read |
|---|---|---|---|---|---|
| 1 | `publications.aston.ac.uk/id/eprint/31394/1/Deal_characteristics_shape_sponsorship_perceptions.pdf` | publications.aston.ac.uk (new, 1/3) | Woisetschläger, Backhaus & Cornwell, **Journal of Marketing** 81(5), Sept 2017, 121–141 | Study 1: field study of **2,787 consumers across 44 sponsorships**. Consumers associate **naming-rights relationships**, high fees and international sponsors with **calculative motives** and judge them negatively; regionally proximate, long-term partnerships draw positive motive inferences. Study 2 confirms experimentally. | full text, 14,904 words |
| 2 | `hdl.handle.net/2078.5/109425` | hdl.handle.net (new, 1/3) | Kervyn, Fiske & Malone, **Consumer Psychology Review**, 2022 (accepted 25 Oct 2021) | Brands as Intentional Agents Framework: two dimensions, **warmth (worthy intentions)** and competence (ability). *"The primacy of warmth — the tendency to give more importance to warmth over competence when forming an impression — is well-established in perceiving others … This replicates in the context of new brand perception."* Plus the congruence principle of fit to context. | full text PDF, 15,174 words |
| 3 | `bura.brunel.ac.uk/bitstream/2438/21529/1/FullText.pdf` | bura.brunel.ac.uk (**2/3** — 1 other post in batch) | Meyer & Manika, **Journal of Consumer Marketing** 34(4), 12 June 2017, 349–358 | Brand prominence is not one continuum. It resolves into **brand visibility** (two facets: whether the brand is perceptible, and *the size of the brand*), **brand frequency** (number of conspicuous brands, unique and gross) and **brand distribution** (where they sit). 20 in-depth interviews, five outfits each = **100 cases**, both authors coding independently. | full text, 11,650 words |
| 4 | `pure.uva.nl/ws/files/16432055/This_Post_Is_Sponsored.pdf` | pure.uva.nl (new, 1/3) | Boerman, Willemsen & Van Der Aa, **Journal of Interactive Marketing**, 2017 | **N = 409.** A commercial marker on an otherwise social message starts a chain: recognising the advertising activates conceptual persuasion knowledge → **distrusting beliefs about the message** → **lower intention to pass it on**. | full text, 10,805 words |
| 5 | `eprints.qut.edu.au/102519/3/102519.pdf` | eprints.qut.edu.au (new, 1/3) | Fazal e Hasan, Lings, Neale & Mortimer, **Journal of Marketing Theory and Practice** 25(2), 2017, 200–211 | Two datasets, **N = 542 and N = 563**. Affective commitment **mediates** the path from customer gratitude to word-of-mouth intentions and involvement — gratitude only pays off through the relationship it builds. | full text, 6,854 words |

**Subject test.** 1, 2, 3 and 4 are about brand presence and how audiences read
corporate intent — the post's actual subject. 5 is about what a gratitude-bearing
message from a company buys it. None is "about India" or "about the internet".

**Swap test.** None survives a swap into another keyword in this batch. No other post
here is about a company writing to an external audience; brand prominence and inferred
corporate motive have no place in a sibling-wishes post.

**Rejected:** `run.unl.pt` Carmeli HRMR buyer-supplier paper — fetched and read, but the
publication record is contradictory (OpenAlex gives HRMR vol 31 art. 100577 dated
2017-01-05; Crossref returns nothing) and it is a theory paper about inter-organisational
learning agility, too far from brand presence to pass the subject test. Left out rather
than used to pad to six. `ira.lib.polyu.edu.hk` logo-colourfulness paper — connection
timed out (curl code 000), not cited. `docs.iza.org` and Kosfeld & Neckermann —
deliberately avoided; they carry the live employee post.

**Discovery route that worked, for later agents:** OpenAlex `works?search=…&filter=is_oa:true`,
reading `best_oa_location.pdf_url`, then filtering out the bot-blocked publisher hosts in
code before fetching. It surfaces the repository copy directly and never touches a
search engine. Crossref `works?query.bibliographic=` then pins volume/issue/pages.
**`research.dial.uclouvain.be` needs the DSpace 7 REST path** —
`/server/api/core/bitstreams/<uuid>/content` returns the PDF while
`/bitstreams/<uuid>/download` 404s. Its `/handle/...` landing page is also **intermittently
500** (one in two requests on 2026-08-26), so the post cites the persistent handle
`hdl.handle.net/2078.5/109425` instead, which resolved 200 first try on every attempt.
`hdl.handle.net` is not a banned domain and is new to the corpus.

---

## Phase 4–5 — Build decisions

- **Category:** `indian-festivals` (verified live in Strapi; festival-tied post).
- **Templates:** `https://subhsandesh.in/templates` **only**. `TEMPLATE_LINKS` contains
  **no corporate, business or branded template** — the two rakhi entries
  (`/happy-rakshabandhan-to-brother`, `/happy-rakshabandhan-to-sister`) are
  sibling-addressed and linking them from a B2B page is the off-topic linking that commit
  `0b83b5e` fixed. Recorded in the audit.
- **Internal links:** `/templates` (after the sending section establishes why), and the
  live `corporate-raksha-bandhan-greeting-for-employees` post as the employee half.
- **Slug:** verified free —
  `strapi.subhsandesh.in/api/articles?filters[slug][$eq]=raksha-bandhan-business-wishes-with-company-logo`
  returned `{"data":[],…"total":0}`.
- **Wikipedia/Wikidata for `structuredData`:** Raksha Bandhan → Q10266,
  Logo → Q1886349, Business-to-business → Q325421 (all confirmed via the Wikipedia
  `pageprops` API, `wikibase_item`).
- **Competitors:** `createcustomwishes.com` and `brands.live` are the recorded
  incumbents. Neither is named, linked or paraphrased.
- **Wikipedia in body:** zero links. QIDs are used only in `structuredData` `sameAs`.
