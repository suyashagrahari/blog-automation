# Research brief — `surprise gift for girlfriend on valentine's week`

- **Slug:** `surprise-gift-for-girlfriend-on-valentines-week`
- **Category:** `digital-gifts-romance` (verified live in Strapi, 2026-09-03)
- **Slug availability:** `filters[slug][$eq]` returned 0 articles on 2026-09-03 — free
- **Templates linked:** `/love-gf`, `/darling`, `/missyou-gf` (all three verified present in `TEMPLATE_LINKS`, `app/lib/prompt.ts:41-44`)
- **`batchMeta.templateUrls`:** `/love-gf`, `/darling`

---

## Phase 0 — data gate

`content/facts.md` regenerated 2026-09-03. Seven lines quoted byte-verbatim into
`batchMeta.factsUsed`, all confirmed with a literal substring match against the
file (straight apostrophes and straight double quotes preserved, `— measured
2026-09-03` suffix intact). Three of them sit in the first 150 words:

- 7.2-hour median first-save-to-last-edit gap, **sampled on `/love-gf`, n=1,001** — used as the post's *primary* fact and always caveated as `/love-gf`-only, never site-wide
- 99.4% of started pages published and shared (3,405 of 3,425)
- 3,425 pages created since 2026-03-12 across 15 page types

Deliberately **not** led on: the 50.2% mobile-open figure. The brief warned that
ten posts leading on it is the content-farm signal, so it appears only in the
table, the late-start section and the wrong-choice section.

Nothing in the post attaches a recipient gender to any first-party number. Nothing
states or implies a price, a tier, or that anything is without charge — the
Pricing block in `facts.md` is empty and the whole JSON was grepped for
`price|cost|free|tier|paid|cheap|affordable|discount|premium|subscription`; the
only hit anywhere in the file is the checklist item string *"At least one specific
number, date, price or named source per H2 section"* inside `auditReport.passed`.

---

## Phase 1 — SERP, as measured (not re-derived)

Taken from `content/keywords/2026-09-03-gift-gf-bf/serps.md`, row 2. Real Google,
`gl=in&hl=en`, 2026-09-03. **AI Overview fired.**

| Host | Type | Treatment |
|---|---|---|
| `fnp.com` | competitor retailer | study only, never cite or link |
| `oyehappy.com` | competitor retailer | study only |
| `oyegifts.com` | competitor retailer | study only |
| `cherishx.com` | experience/gifting retailer | study only |
| `amazon.in` | marketplace | not citable |
| `pinterest.com` | UGC | not citable |
| `confettigifts.in` | **strong** — gifting retailer ranking on blog URLs | competitor: study, never cite, never mirror |
| `jusst4you.com` | **strong** — gifting retailer | competitor: study, never cite, never mirror |

6 of 8 organic hosts weak. Both "strong" hosts sell into the same buyer, so under
`references/competitors.md` **both are competitors, not authorities** — there is no
editorial incumbent on this SERP at all.

**Process limitation, recorded honestly:** the eight ranking pages were **not
fetched in full.** `WebFetch` is denied in this environment and `WebSearch` quota
was exhausted before this run, so Phase 1 rests on the pre-measured host list
rather than on a per-page word-count/heading/tone table. The consequence is that
"no section closely mirrors a competitor page's structure" is supported by the H2s
having been derived from this post's own fan-out sub-queries, not by a page-by-page
structural comparison. This is stated in `auditReport.honestAssessment` too.

---

## Phase 2 — gap and angle

**Table stakes** (what any page on this query must have): what Valentine's week is
and which dates it covers; something to send or give; the fact that 14 February is
the endpoint; a late-start option.

**The gap.** Every ranking result treats the week as a **product list indexed by
day** — a rose for Rose Day, a teddy for Teddy Day. Not one of them answers the
question the week actually poses: *if she already knows a gift is coming on seven
named days, where in those seven days does a surprise still work?* Placement,
escalation and not peaking too early are unaddressed.

**Fan-out sub-queries** (each became an H2 or an FAQ):

1. What counts as a surprise when a gift is already expected? → H2 1
2. Is Valentine's week official, and what are the dates? → H2 2
3. Which day should the main gift land on? → H2 3 (four slots, H3s ×4)
4. Why does gift number seven land softer than gift number one? → H2 4
5. How do the slots compare on expectation and lead time? → H2 5 (table)
6. What if the week has already started and I have done nothing? → H2 6
7. When is a week-long plan a bad idea? → H2 7
8. Do I have to tell her / what if she told me what she wants / same-idea-as-last-year / different cities / private or shareable → FAQs

**Angle (one sentence).** Wins by being the only post that treats Valentine's week
as a *placement* problem — four slots, peak on 13 February and not 7 — grounded in
the 2020 *European Journal of Marketing* finding that on an obligated occasion the
surprise has to come from the *when*, plus SubhSandesh's 7.2-hour median
first-save-to-last-edit gap across 1,001 `/love-gf` pages.

**Distinctness from the sibling post** (`surprise-gifts-for-girlfriend-on-valentines-day`):
that post is the **day** (hour-by-hour reveal windows on 14 February); this one is
the **week** (which of seven days to use, and the escalation cost of using all of
them). Its H2s and mine were compared after both were written — one collision was
found and fixed: my late-start H2 was originally `## If it is already 13 February`,
which mirrored its `## If you have left it until the 13th`; mine is now
`## If the week has already started without you` and covers 10–11 February onward.
No source URL and no source domain is shared with any sibling post in the batch.
The post also avoids the two live posts' territory: no rose-colour guidance and no
proposal advice, because `rose-day-gift-for-girlfriend` and
`propose-day-gift-for-girlfriend` already cover those and are not linked.

Also avoided per the brief: no "why a digital gift beats a physical one" opener, and
the comparison table compares **week slots**, not digital vs physical.

---

## Phase 3 — sources

Five sources. Three pass the subject test, all three are peer-reviewed **and**
open-access, and all three full texts were read (no abstract-only citations, no
paywalled citations). Zero generic context statistics. One Wikipedia link, entity
disambiguation only.

| # | Source | Domain | Published | Role | Verified |
|---|---|---|---|---|---|
| 1 | Vanhamme, Lindgreen & Beverland, "The paradox of surprise", *European Journal of Marketing* 55(2) | `repository.up.ac.za` | 2020-09-18 | The spine: six variables of a surprising gift; the "when" lever; the obligated-occasion problem; the paradox | Full text read (PDF via UP institutional repository) |
| 2 | Bao & Lyubomirsky, "Making it last: Combating hedonic adaptation in romantic relationships", *The Journal of Positive Psychology* 8(3) | `escholarship.org` | 2013-03-27 | Why the seventh gesture lands softer; variety over volume; the entitlement/aspiration trap | Full text read (eScholarship PDF, UC Riverside) |
| 3 | Ryan, Pàmies & Valverde, "The joys of waiting", *Marketing Letters* | `link.springer.com` | 2025-11-27 | Anticipation over a long wait is "cyclical rather than steadily fading, with peaks and lulls" — the midweek lull | Full text read, CC BY 4.0 |
| 4 | "Valentine's Week full list 2026", *Hindustan Times* | `www.hindustantimes.com` | 2026-02-08 | The day sequence, attributed as a convention | Full page read; date taken from the page's own JSON-LD `datePublished` (`dateModified` was 2026-02-13 and was **not** used) |
| 5 | "Valentine's Week", Wikipedia | `en.wikipedia.org` | — (no publication date; omitted per `structured-data.md`) | Entity reference / `about` `sameAs` | Wikitext read via the MediaWiki API |

**Cap compliance.** None of these five URLs appears in the 42-URL spent list in
`USED-SOURCES.md`. `repository.up.ac.za` is unused across the 171-post corpus;
`link.springer.com` is at 6 posts, `escholarship.org` at 6, `en.wikipedia.org` at 7
corpus-wide — all still legal, and none is at the per-batch cap. Cross-checked
against the sibling blog files already written in
`content/batches/2026-09-03-gift-bf/blogs/`: **no URL and no domain overlap.**

**Exact quotations used** (short phrases only; no figure, chart, table or
substantial passage reproduced from any source):
`"recipients are not surprised per se that they receive a gift"`,
`"at a slightly different time than gifts normally are given"`,
`"become expected and predictable"`,
`"may begin to feel entitled to those gestures"`,
`"cyclical rather than steadily fading, with peaks and lulls punctuating the wait"`.

### The Valentine's-week claim — VERIFIED, and it is a convention

The brief asked me to verify or drop the day-by-day sequence. **It is sourceable.**

1. **Hindustan Times, published 2026-02-08** (JSON-LD `datePublished`
   `2026-02-08T13:02:46+05:30`) carries the full date-wise table: Rose Day 7 Feb,
   Propose Day 8, Chocolate Day 9, Teddy Day 10, Promise Day 11, Hug Day 12,
   Kiss Day 13, Valentine's Day 14 Feb.
2. **Wikipedia's `Valentine's Week` article** (Wikidata **Q138309865**) describes it
   as "a week-long celebration of romantic love that is observed in India each year
   from February 7 (Rose Day) to 14 February", and itself cites *The Indian Express*
   (2025-02-06) and the same *Hindustan Times* piece.

So the post **states the sequence and attributes it as a popular Indian
convention, not an official calendar** — which is exactly what both sources
support. Two related notes:

- The two sources are internally inconsistent about the count. Wikipedia says
  "eight consecutive themed days"; the HT standfirst says "seven days of love" and
  then tabulates eight rows including 14 February. The post sidesteps this by
  naming the dates and the endpoint rather than asserting a count.
- **HT prints 2026 weekdays** (7 Feb Saturday … 14 Feb Saturday). The post states
  **no weekday for any year**, and asserts nothing about 2027. 14 February is
  stated as a fixed Gregorian date, which the brief confirmed is safe.
- *The Indian Express* article that Wikipedia cites returns HTTP 403 to
  non-browser clients, so it was **not** fetched and is **not** cited.

### The "givers mispredict what recipients want" claim — narrower than the brief

The brief also asked me to check that this is a real, replicated finding. **What I
could actually open says something narrower than "systematic misprediction of what
recipients want", so the post writes the narrower thing.**

What the Vanhamme/Lindgreen/Beverland full text supports, in its own words and
data (48 respondents; 43 given / 38 received accounts; 8 interviews):

- an **asymmetry of preference**: "some givers like to surprise recipients, yet
  they prefer not to be surprised when they receive a gift";
- a **paradox driven by disappointment-avoidance**: "Even if givers or recipients
  prefer a surprising gift, they might give or wish for an unsurprising gift to
  avoid disappointment", with respondents saying that for obligated occasions they
  buy what was asked for.

That is risk-aversion and role-dependent preference, **not** a demonstrated
systematic error about desirability. The paper's own literature review points at
Givi & Galak (2019) for givers "intentionally bypass[ing] the gifts that would make
the recipient happiest" — which is a *motivational* account, not a predictive one.
Note also that `USED-SOURCES.md` retires
`research.wur.nl/…/give-me-your-self-gifts-are-liked-more-when-they-match-the-givers`
as spent, and that paper's title points the other way again. The post therefore
claims only the asymmetry and the disappointment-avoidance paradox, both quoted
from a source whose full text was read.

Search terms tried while looking for a Valentine's-week-specific scholarly source
(none found): OpenAlex `"Valentine's week"` (35 results, none about the Indian
convention), `Valentine's Day India consumption romance`, `Valentine's Day India
moral policing globalization youth`, `filter=title.search:valentine`; DOAJ API
`"valentine week"` and `valentine day india marketing` (0 results each). OpenAlex
and Semantic Scholar both began returning HTTP 429 partway through, which is why
the final pass used direct repository fetches.

---

## Phase 5 — internal links and schema

Three internal links, all from the batch's permitted five, all with descriptive
anchor text and all placed after the section that establishes why the reader would
want them (never in the opening paragraph):

- `/love-gf` — in the midweek-lull slot, as "the animated 'I love you' page", with its own first-party numbers (1,001 created, 29.2%)
- `/darling` — in the 13 February slot, as "the dark, dramatic 'darling' page" (349 built, 10.2%)
- `/missyou-gf` — in the late-start section, as "the animated 'I miss you' page". **No created-count and no share is attached to it**, per the brief's wrinkle: `facts.md` carries no missyou-specific number and none was manufactured.

No `/bouquet-gf`, no `/templates`, no other slug. No blog-post links at all, so the
two live Valentine posts are neither restated nor linked.

`structuredData` is two blocks and additive only:

1. An `@id`-matched enrichment block on `https://subhsandesh.in/blog/surprise-gift-for-girlfriend-on-valentines-week#post` carrying `citation` (five entries, mirroring `batchMeta.sources` one-to-one and in the same order — asserted programmatically), one `about` and three `mentions`.
2. An `ItemList` mirroring the four H3s in the same order, with `numberOfItems: 4`.

No `BlogPosting` duplicate, no `FAQPage`, no `BreadcrumbList`, no `Organization`,
no `WebSite`, no `Person`, no `AggregateRating`, no `Review`, no `HowTo`.
`datePublished` is omitted for Wikipedia, which publishes none.

Every `sameAs` verified against the MediaWiki API with `redirects=1` and
`ppprop=wikibase_item`, and paired with its QID:

| Entity | Wikipedia title | QID |
|---|---|---|
| Valentine's Week | `Valentine's Week` | **Q138309865** |
| Valentine's Day | `Valentine's Day` | **Q37587** |
| India | `India` | **Q668** |
| Hindustan Times | `Hindustan Times` | **Q41595** |

(`Rose Day` was checked and **rejected** — it redirects to `Valentine's Day#South Korea`,
a different observance, so it is not used as an entity anywhere.)

---

## Phase 6 — audit summary

- `contentMarkdown`: **1,764 words** by `md.split(/\s+/).filter(Boolean).length`
- FAQs: **10**, in `article.faqs` only; no FAQ heading in the body; no FAQ duplicates an H2's meaning
- Headings: 1 H1, 8 H2, 4 H3, no skipped levels; every paragraph ≤ 3 sentences
- `metaTitle` 58 chars · `metaDescription` 153 chars · `excerpt` 239 chars · `keyTakeaways` 5
- Table: 4 rows × 4 columns, real values, one column entirely first-party
- Audit: **48 passed, 2 failed, 48 + 2 = 50**, `passed ∩ failed = ∅` (both asserted in code before the file was written)

**The two recorded failures**

1. *Slug short, hyphenated, lowercase, no stop words* — the assigned slug keeps
   `for` and `on`, which the exact-match keyword needs. Fixed by the batch brief,
   not fixable in the post.
2. *No source passes the swap test* — two of the three scholarly sources are
   transferable inside this batch: the EJM surprising-gift study would also fit
   `surprise gifts for girlfriend on valentine's day`, and the hedonic-adaptation
   review would also fit `how to surprise your boyfriend randomly`. Only the
   Hindustan Times calendar and the Wikipedia entry are keyword-locked. No
   open-access paper about Valentine's week itself exists (search terms above), so
   this cannot be closed by more searching — it would need the sibling posts to
   agree not to use these two, which is a batch-level decision, not a post-level one.

---

## Notes back to the brief

1. **The Valentine's-week sequence is sourceable** — Hindustan Times (2026-02-08)
   plus a Wikipedia article with Wikidata QID Q138309865. Attributed in the post as
   a convention, with no weekday and no 2027 claim.
2. **"Givers mispredict what recipients want" is broader than the openable
   literature supports.** What is documented in the source I read is a
   giver/recipient *preference asymmetry* and disappointment-avoidance, not a
   systematic predictive error. Written narrowly on purpose.
3. **A third thing worth flagging:** the brief calls `confettigifts.in` and
   `jusst4you.com` "strong" hosts, which reads as a quality signal. Under
   `references/competitors.md` both are online gifting retailers and therefore
   **competitors** — meaning this SERP has *no* citable editorial incumbent at all,
   unlike the boyfriend rows where `theknot.com` appears. That is a better
   opportunity than "6 of 8 weak" conveys, and it also means there is nobody on this
   SERP whose primary sources can be traced. Worth stating explicitly in the next
   brief so a writer does not go looking for one.
4. **Phase 1 could not be run as written.** The skill requires `WebFetch` of the top
   five pages in full; `WebFetch` is denied and `WebSearch` quota was exhausted.
   Every keyword in this batch has the same constraint, so the Phase 1 instruction
   should either be re-scoped to the pre-measured SERP log or routed through the
   available fetch tooling.
