# Research brief — `which day comes after propose day`

- **Slug:** `which-day-comes-after-propose-day` (checked free in Strapi 2026-09-24: `filters[slug][$eq]` returns `total: 0`)
- **Category:** `modern-romance` (verified against the live Strapi category list — 10 slugs, `modern-romance` id 3)
- **Batch:** `2026-09-24-propose-30c`, wave 4
- **Secondaries served by the same page:** `what after propose day`, `which day after propose day`

---

## Phase 0 — data gate

`content/facts.md` regenerated 2026-09-24. Seven lines used, copied byte-verbatim into
`batchMeta.factsUsed` by script (never retyped, never taken from a sibling post). Two sit
inside the first 150 words: the 5,148/21-page-types line and the 90.9% published-and-shared
line.

**Honesty constraint applied throughout:** no proposal-specific data exists on this platform —
the `proposalpages` probe is still refused by the production-read policy. Every figure on the
page is labelled *platform-wide across 21 page types* or *sampled on `/apology-dashboard`,
n=1,375*, in body prose and not only in the audit. The pricing block in `facts.md` is empty for
a fourth batch, so no price, tier, chocolate cost or gift cost appears anywhere.

---

## Phase 1 — what was measured, and what was not

**Search budget:** 4 WebSearch calls allowed; **3 used**. Firecrawl was unavailable this
session (HTTP 402 on both `firecrawl_search` and `firecrawl_scrape`), so SERP work went through
WebSearch and page fetching went through direct HTTP in the sandbox.

1. `which day comes after propose day valentine week list` — the SERP for this keyword.
2. `"thought gap after conversation" Cooney … pdf` — locating a green OA copy.
3. `Sweeny awaiting uncertain news … open access pdf` — locating a green OA copy.

**WebSearch is US-served.** No India-served SERP was obtained, none of this batch's keywords
appears in the 11 India-served SERPs measured 2026-09-16, and **no ranking position is
described anywhere on the page**.

### Pages fetched and read (Phase 1 comparison)

Six result URLs were fetched directly; five returned usable content.

| Page | Words | Structure | Order printed | Calls the week 7 days? | Anything about after the ask? |
|---|---|---|---|---|---|
| vedantu.com/blog/valentine-week | 2,087 | 35 headings, day-by-day + "which day is today" | Rose 7 → Valentine's 14, all eight | **Yes** — "7-day celebration" in the opening line | No |
| oyehappy.com (…7-days-of-love) | 1,226 | 12 headings, retailer listicle | all eight, dated | **Yes** — "List of 7 Days of Valentine Week" | No |
| destinationweddingbharat.com/valentine-week-list | 2,816 | 35 headings, + anti-Valentine week | all eight, dated | **Yes** | No |
| solomonjeweler.com/blogs/post/valentine-week | 2,981 | 32 headings, jeweller blog | all eight, dated | **Yes** — "7 Days of Love" in the H1 | No (the only "reply" hit is an SMS opt-out notice) |
| iforher.com (…valentines-week-days-list) | 913 | 23 headings, summary table | all eight, dated | No | **One line only**: "no one carries any hard feelings for the rejections" — no guidance |
| myflowertree.com (anti-Valentine's week) | 30 | — | — | — | Returned a 30-word shell; not usable |

**What that licenses me to say, and nothing more:** the five usable pages all print the same
eight dated days in the same order; four of the five describe the week as seven days while
listing eight; none of the five gives any guidance for what to do after the ask. Those are the
only competitor claims made on the page, and each one is measured. No position, no "most pages
say X", no claim about pages I did not fetch.

### Establishing the week's order (task prompt asked me to verify and correct)

- `date(1)` on this machine, February 2027: **7 Sunday, 8 Monday, 9 Tuesday, 10 Wednesday,
  11 Thursday, 12 Friday, 13 Saturday, 14 Sunday.** Rose Day Sunday 7 Feb and Propose Day
  Monday 8 Feb as given in the prompt and the BRIEF — **both hold**.
- **The eight-day count holds.** 7 to 14 February inclusive is eight dated days, not seven.
  The Wikipedia Valentine's Week entry (read, not cited) states "eight consecutive themed days"
  explicitly; all five fetched pages print eight dated entries.
- **Middle-day order, established from fetched sources, not from the prompt:** Chocolate 9,
  Teddy 10, Promise 11, Hug 12, Kiss 13. **All five fetched pages agree exactly, and so does
  the Wikipedia entry. There is no inconsistency in the order to report** — the only
  inconsistency found is the seven-vs-eight count, which is reported in the body.
- **No authoritative source exists for the sequence.** Every source found describes current
  practice; none establishes it. The Wikipedia entry's own History section says only that
  coverage has "highlighted increased marketing and gift-buying" — it makes **no origin claim
  at all**. This confirms the two prior agents' finding rather than refuting it, and the page
  says so plainly and asserts no origin.
- **Wikipedia is read but not cited or linked.** The first verifier run put `en.wikipedia.org`
  in 4 posts, over the cap of 3, with this post the weakest of the four uses. The link was
  removed; the order is now stated on the authority of the five fetched pages plus the
  calendar check. The `en.wikipedia.org` values left in `structuredData` are `sameAs` entity
  identifiers paired with verified Wikidata QIDs, which `references/structured-data.md`
  explicitly excludes from the Wikipedia link budget and which the verifier does not count.

---

## Phase 2 — gap and angle

**Table stakes** (all five incumbents cover): the name of the next day, the eight dated days,
the theme of each day, the 2026/2027 dates.

**The gap — and it is the whole page.** The literal answer is one sentence. Every incumbent
stops there and keeps listing days. **Not one of the five fetched pages addresses the state the
searcher is actually in**: having just asked somebody something, with six themed days left to
get through. The refusal case in particular is completely uncovered — the closest any page
comes is a single consoling clause on iforher.

**Fan-out sub-queries** the page answers as H2s or FAQs: *what is the day after propose day ·
chocolate day date 2027 · what to do if she says no on propose day · what to do after
proposing · how long to wait for a reply after proposing · did I miss my chance if I did not
propose · is valentine week 7 or 8 days · should I send something the day after a rejection ·
who started valentine week*.

**Angle:** the only page on this query that gives the one-sentence answer and then spends
itself on the aftermath — four situations, the refusal case handled properly, grounded in
post-disclosure research and platform-wide first-party figures.

### Cannibalisation — read before writing

| Sibling | Its lane | How this differs |
|---|---|---|
| `propose-day-2027` (wave 2, **live in Strapi, id 2488**) | The calendar page: dates, weekdays verified three ways, invented-tradition lane, "no peer-reviewed source documents the week's structure" as a finding | **That lane is taken.** This page gives the sequence in three sentences, hands the calendar query over with a link, and spends everything else on what happens after the ask. Zero source overlap; different intent (aftermath, not planning); different structure (four situations, not eight days). |
| `propose-day-wishes-reply` (this batch) | The **recipient** replying, refusal-pragmatics lane | This page is for the **asker**, after the reply has (or has not) arrived. Named in prose by slug and not hyperlinked, because it 404s until this batch publishes. Zero source overlap. |

**Verdict: meaningfully distinct.** The two pages share only the eight-day sequence, which this
one compresses to three sentences and explicitly defers on.

---

## Phase 3 — sources

**Research lane as assigned:** what happens immediately after a significant disclosure — the
aftermath rather than the moment. Deliberately **not** invented-tradition/calendar (wave 2),
refusal-pragmatics (the reply sibling), post-dissolution adjustment (wave 3), construal-level,
or unrequited love.

**Terms tried** via `findpapers.mjs` (Crossref + Europe PMC) and the DOAJ article API:
`post disclosure interaction study` · `post-event processing after social situation` ·
`post event rumination social anxiety diary` · `awkwardness after rejection interaction study` ·
`friendship after romantic rejection study` · `beautiful mess effect showing vulnerability` ·
`waiting for uncertain news worry anticipation` · `capitalization responsiveness sharing good
news partner` · `liking gap conversation underestimate` · `regret of inaction versus action over
time` · `thought gap after conversation` · DOAJ title queries for `"romantic rejection"`,
`"post-event processing"`, `"perceived partner responsiveness"`, `"relational uncertainty"`,
`"relational turbulence"`, `"social rejection" AND rumination`, `"ostracism" AND recovery`,
`"relationship initiation"`.

**What that found and what it did not.** There is a real, well-populated literature on the
hours and days *after* a socially exposing episode. There is **no** literature on the aftermath
of a Propose Day proposal, or on Valentine week at all — as expected, and stated on the page.
Two strong candidates were rejected on domain caps rather than quality (`pmc.ncbi.nlm.nih.gov`
and `frontiersin.org` were both already at 3 posts), which is why the final four come from a UC
repository, an author's site, a PsychOpen journal and a Cornell repository — the institutional
and DOAJ-listed sources the BRIEF prefers.

| # | Source | What it actually says (read, not inferred) | Subject test | Swap test |
|---|---|---|---|---|
| 1 | Sweeny, *On the Experience of Awaiting Uncertain News*, Current Directions in Psychological Science 27(4), 2018-08-01 — UC eScholarship green OA, **full text read** | Distress is greatest at the **beginning and end** of a waiting period (bar-exam graduates, Howell & Sweeny 2016). Law graduates who **suppressed** thoughts about the exam felt **worse weeks later**; hopeful/optimistic strategies were largely ineffective but did not backfire. In an IVF study (Boivin & Lancastle 2010), **anxiety dominated the wait and dropped precipitously after a negative result, replaced by anger, frustration and sadness**. People awaiting news cope and sleep better when a partner is responsive, and support works when focused on the waiter, not the supporter. | Passes — the waiting period *is* situation 4 | Passes — useless in a quotes or language post |
| 2 | Cooney, Boothby & Lee, *The Thought Gap After Conversation*, J. Exp. Psychol.: General, online 2021-10-21 — author's OA copy, **full text read** | **Eight studies.** People systematically underestimate how much their conversation partner keeps thinking about them afterwards. Contexts include a dining hall, lab conversations, intimate conversations among friends and **arguments between romantic partners**. The gap **grows as time accumulates after the conversation** (Study 6) and **shrinks when people are prompted to consider the partner's thoughts** (Study 5); estimates show projection but no tracking accuracy. | Passes — literally the aftermath of a conversation | Passes |
| 3 | Čolić et al., *Post-Event Processing After Embarrassing Situations*, Clinical Psychology in Europe 2(4) e2867, 2020-12-23, CC BY 4.0 — **abstract read on the OA article page** | Event-based experience sampling: **n=165 patients (47 social phobia, 118 MDD) + 119 controls, five surveys a day for seven days**. After embarrassing social interactions, **post-event processing followed in 86–96% of cases, equally high in every group including controls**. Authors read PEP as "a common coping strategy among all individuals". | Passes — the hours after an exposing episode | Passes |
| 4 | Richardson & Gilovich, *A very public replication of the temporal pattern to people's regrets*, R. Soc. Open Sci. 10: 221574, 2023 — Cornell eCommons OA copy, **full text read** | Field replication with **2,600 between-subjects participants** in a museum. Replicated the action/inaction × time-perspective **interaction**, but **the pattern diverged**: a significant majority were more troubled by their biggest **action** regret in the short term, and there was **no significant difference in the long term** — where Gilovich & Medvec's 1994 original (n=32) found **84%** favouring inaction. | Passes — situation 3 exactly | Passes |

Source hygiene: 4 sources, all open access and all fetched; **0** generic context statistics;
**0** Wikipedia citations; **0** competitor links or paraphrases; no figure, table or passage
reproduced. `capcheck.mjs` run when choosing and again before saving — no banned URL, no domain
over cap. The Richardson & Gilovich divergence is reported **with the divergence intact**
rather than as the folk claim, which is itself one of the page's differentiators.

---

## Phase 4–5 — build notes

- **Body 1,790 words** excluding FAQs (plain whitespace split). 12 FAQs in `article.faqs` and
  the renderer's FAQPage only; none appears in `contentMarkdown`; max FAQ↔H2 Jaccard well
  under 0.85 (checked programmatically).
- **Structure:** answer paragraph (3 sentences, 2 first-party numbers, keyword in the first
  100 words) → definition H2 → four H3s, each with the **same four fields in the same order as
  separate paragraphs** (what happened / what the next day asks / what the research says / what
  not to do) → comparison table with a first-party column → refusal-aftermath H2 → waiting H2
  → "when a built page is the wrong thing to send" (the downside block) → "what is not
  established" → Sources. **No paragraph exceeds 3 sentences** (checked programmatically).
- **Internal links (4):** `/proposal` (mandatory, placed after the four situations establish
  why), `/love-gf` (the honest fit for most of this traffic, since Indian "propose" usually
  means asking someone to be a girlfriend or boyfriend), `/apology-dashboard` (the genuine
  alternative — named as the *closest* fit for a public ask, with the reason it is still wrong
  for a plain refusal, which is the BRIEF's "say which is closest and why it still isn't
  right"), and `/blog/propose-day-2027` (sibling, verified live). The last of these is the
  single recorded audit failure.
- **Recipient-side rules:** the "she said no" section never coaches persistence, never frames
  the refusal as unjust, and says outright that accepting it and stepping back is the whole
  instruction. It also rules out the disguised bids — a smaller gesture, a re-explanation, an
  announced withdrawal that asks for a reply.
- **`structuredData`:** one `@id`-matched enrichment block on `<canonicalURL>#post` carrying
  `citation` mirroring `batchMeta.sources` one-to-one, plus `about` and `mentions`; one
  `ItemList` mirroring the four H3s in order. Every `sameAs` verified against the Wikipedia API
  with its Wikidata QID paired: Valentine's Week **Q138309865**, Propose Day **Q7250378**,
  Valentine's Day **Q37587**, Rumination (psychology) **Q1411912**, Regret **Q4729246**.

## Phase 6 — audit

50 checklist items extracted verbatim by script from `references/publish-checklist.md`
(whitespace-collapsed, wraps joined). **49 passed, 1 failed, disjoint, sum 50**, every string
byte-verbatim. The single failure is *"Every internal link is a real URL from TEMPLATE_LINKS"* —
`/blog/propose-day-2027` is a live sibling article, not a TEMPLATE_LINKS entry, added
deliberately under the cannibalisation rule. Nine non-checklist notes live in
`batchMeta.structuralLimitations`, not in `failed`.

**Line ledger:** not applicable — this is an English advice page with no Indian-language lines
drafted, published or cut.
