# Batch brief — gift & surprise cluster, wave 1 — 2026-09-03

10 posts, from rows 1–10 of `content/keywords/2026-09-03-gift-gf-bf/shortlist.md`.
Read that file and `serps.md` in the same directory before drafting: the SERP for
your keyword is already measured and you should not re-derive it.

**Read these, in this order, before writing a word:**

1. `.claude/skills/subhsandesh-blog/SKILL.md` — the whole workflow, Phases 0–8
2. `references/page-structure.md`, `references/meta-and-titles.md`,
   `references/tone-and-links.md`, `references/research-sources.md`,
   `references/structured-data.md`, `references/publish-checklist.md`,
   `references/article-json-schema.md`, `references/competitors.md`
3. `content/facts.md` — regenerated today, 2026-09-03
4. `content/batches/2026-09-03-gift-bf/USED-SOURCES.md` — the spent-source ledger

---

## The measured finding this whole batch rests on

All 10 SERPs were pulled on **real Google, `gl=in&hl=en`**, on 2026-09-03. Every one
of them has the same shape: **a retailer-and-UGC wall with no editorial answer in
it.** Across the 34 SERPs measured for this cluster:

| Appearances | Host | What it is |
|---|---|---|
| 28 / 34 | `pinterest.com` | UGC |
| 22 / 34 | `reddit.com` | UGC |
| 16 / 34 | `fnp.com` | **competitor retailer — never link, never cite** |
| 16 / 34 | `oyehappy.com` | **competitor retailer** |
| 16 / 34 | `amazon.in` | marketplace |
| **15 / 34** | **`confettigifts.in`** | **competitor retailer that ranks on BLOG urls** |
| 14 / 34 | `quora.com` | UGC |
| **13 / 34** | **`theknot.com`** | US editorial authority |

`pinterest` + `reddit` + `quora` hold **~24% of the page-1 organic slots in this
cluster.** That is the opening: a quarter of the competition is pages nobody edited.

**Two things to study and neither to link.** `confettigifts.in` is the instructive
one — an Indian gifting retailer ranking on blog URLs, which is exactly this play
executed by someone with a shop attached. It is a **competitor** under
`references/competitors.md`: read it, never cite it, never mirror its section order,
and if it uses a real statistic go find the primary source it used.
`theknot.com` is genuine editorial, US-first, and beatable **only** on
India-specific ground. Do not write a generic listicle at it.

## AI Overview fires on all 10 — write for extraction

Every SERP in this cluster carries an AI Overview. Practical consequences:

- The direct answer must be **liftable as a standalone paragraph** in the first 150
  words. Not a promise of an answer, the answer.
- Every H2 must be answerable in 2–3 sentences without the sections around it.
- The specific number is what gets quoted. A sentence with a figure in it survives
  summarisation; a sentence of adjectives does not.

## Gate 0 — lead time, and what you may NOT state

Rows 1 and 2 are Valentine keywords. **Valentine's Day is 14 February — a fixed
Gregorian date, so that one is safe to state.** The "Valentine's week" day-by-day
sequence (Rose Day, Propose Day, Chocolate Day, Teddy Day, Promise Day, Hug Day,
Kiss Day) is a **popular convention, not an official calendar**. If you state that
sequence you must have fetched a source that states it, and you must attribute it as
a convention. **Do not assert a 2027 date you have not verified.** The site already
has `propose-day-gift-for-girlfriend` and `rose-day-gift-for-girlfriend` live — do
not restate their content, and do not link them (they are blog posts, not templates).

Everything else in the batch is evergreen.

---

## Internal links — a hard restriction for this batch

**Use ONLY these five URLs. Nothing else, however tempting.** All five were verified
HTTP 200 on 2026-09-03:

| URL | What it is |
|---|---|
| `/love-gf` | Romantic "I love you" page — **#1 page type, 1,001 created, 29.2% of all pages** |
| `/darling` | Dark, dramatic romantic page for a partner — 349 created, 10.2% |
| `/birthday-gf` | Birthday surprise page for a partner — 258 created, 7.5% |
| `/apology-dashboard` | The all-in-one apology page — 753 created, 22.0% |
| `/missyou-gf` | "I miss you" page for a partner |

Rules:

- **2–4 internal links per post**, from that list only. Descriptive anchor text
  ("the animated 'I miss you' page", never "click here").
- Placed **after** the section that establishes why the reader would want it — never
  in the opening paragraph.
- `batchMeta.templateUrls` = 1–3 of those five, as **paths** (`"/love-gf"`), not full
  URLs. Pick the ones genuinely relevant to your keyword.
- **Do not use `/bouquet-gf`, `/templates`, `/dedication`, `/capsule` or any other
  slug**, even though they are in `TEMPLATE_LINKS` and would pass the schema check.
  This batch is deliberately scoped to the five above.
- Do not link any other blog post. Do not link a competitor. Do not invent a slug.

**One honest wrinkle on `/missyou-gf`:** it is **not** in the top-5 page types, so
`facts.md` carries **no missyou-specific number**. If you link it you may describe
what it does, but you may not attach a created-count or a share to it. Do not
manufacture one and do not imply a general figure belongs to it.

## Which template fits which keyword

Suggestions, not orders — justify whatever you choose:

- long-distance keywords (3, 7) → `/missyou-gf` + `/love-gf`
- birthday keywords (4) → `/birthday-gf` + `/love-gf`
- anniversary keywords (5, 6) → `/love-gf` + `/darling`
- valentine keywords (1, 2) → `/love-gf` + `/darling`
- "for no reason" / "randomly" (8, 9) → `/love-gf` + `/darling`
- flowers (10) → `/love-gf` + `/missyou-gf`
- `/apology-dashboard` only where the post genuinely covers making up after a
  mistake. **Do not bolt it on to reach the link count** — a gift post that
  gratuitously links an apology page reads as keyword stuffing.

---

## First-party facts — the moat, and its limits

`content/facts.md` was regenerated **today, 2026-09-03**. Quote lines
**byte-verbatim**, including the `— measured 2026-09-03` suffix, into
`batchMeta.factsUsed`. Straight apostrophes only: a curly `’` where the file has a
straight `'` is a mismatch and the batch verifier fails it.

**At least 3 facts per post, at least 2 inside the first 150 words.** Today's set:

- 3,425 personalised pages created since 2026-03-12, across 15 page types
- `/love-gf` #1 — 1,001 created, 29.2% of all pages; most-viewed at 14,828 views (35.2%)
- `/bouquet-gf` #2 — 802 created, 23.4%
- `/apology-dashboard` #3 — 753 created, 22.0%
- `/darling` #4 — 349 created, 10.2%
- `/birthday-gf` #5 — 258 created, 7.5%
- 2,829 registered creators; 1.21 pages per creator
- 42,099 recorded views; 12.3 views per created page
- 50.2% opened on a phone (21,130 of 42,099); 50.4% on a touch device
- 42.7% password-protect before sharing (1,462 of 3,425)
- 99.4% of started pages are published and shared (3,405 of 3,425)
- Median first-save-to-last-edit: 7.2 hours, sampled on `/love-gf`, n=1,001

### Three things the data does NOT say — do not imply otherwise

1. **`facts.md` records no recipient gender.** The database does not know whether a
   `/love-gf` page was sent to a girlfriend or a boyfriend. **Six of these ten posts
   are aimed at boyfriends, and you have no first-party evidence that
   boyfriend-directed pages get created.** Never write "X% of people send this to
   their boyfriend" or anything that implies it. The numbers describe page
   *creation*, full stop.
2. **The Pricing block in `facts.md` is EMPTY.** **No post may state any price,
   describe anything as free, name a tier, or imply a cost** — not "free to create",
   not "no delivery charge", not "paid plan". The batch verifier greps for this.
3. **7.2 hours median edit gap is sampled on `/love-gf` only**, n=1,001. It is not a
   site-wide figure and must not be presented as one.

---

## Sources — "research paper and all", done properly

The user explicitly asked for real research. Per `research-sources.md`, every post
needs **4–6 sources**, of which:

- **at least 2 pass the subject test** — genuinely *about* gift-giving, romantic
  relationship maintenance, long-distance relationships, surprise and anticipation,
  reciprocity, or the platform behaviour. Not "about India". Not "about the internet".
- **at least 1 of those is peer-reviewed or scholarly AND open-access** — the reader
  must be able to open it.
- **at most 1 generic context statistic** (PIB / TRAI / Census / MEA).
- Wikipedia 0–2, entity disambiguation only, never counted as research.

**Search the phenomenon, not the keyword.** There is no literature on "romantic gift
for bf birthday". There is a lot on:

- gift-giving and relationship signalling — search `gift giving romantic
  relationship signalling study`, `gift exchange interpersonal closeness`
- **givers systematically mispredict what recipients want** — a well-replicated
  finding and the single most useful angle available to this batch
- long-distance relationship maintenance — `long distance relationship maintenance
  behaviours communication study`, `mediated communication relational closeness`
- surprise, anticipation and hedonic timing — `anticipation savouring positive
  event`, `surprise emotion intensity study`
- **unprompted vs occasion-bound gestures** — directly on point for rows 8 and 9
- effort as a signal — `perceived effort gift appreciation`

Caps, and they are enforced: **a URL in at most 2 of these 10 posts, a domain in at
most 3.** `USED-SOURCES.md` lists **42 URLs already spent** across the 171 existing
posts — do not cite any of them. It also lists the domains the corpus has leaned on
hardest (`pmc.ncbi.nlm.nih.gov` 14 posts, `frontiersin.org` 12, `aclanthology.org`
12, `arxiv.org` 10). Those are **still legal** here, but a paper 14 sibling posts
already cite makes this the fifteenth page from the same farm. Prefer something
fresher; the ledger names 14 unused open-access repositories.

**Fetch every source and verify it says what you claim.** Never cite from memory.
Never invent a statistic or a date. `publishedDate` is when the *source* was
published, never when you fetched it. If only the abstract is readable, cite only
what the abstract says **and record in the audit that the full text was not read.**

If no topical research exists for your angle, **say so in the audit and name the
search terms you tried.** That is a real finding, not a failure. Do not pad with
another government statistic.

---

## The distinctness problem — this is where a 10-post batch usually fails

These ten keywords are adjacent by construction: six say "boyfriend", four say
"surprise", three say "anniversary". The failure mode is real and this repo already
has it — **12 live `/bouquet-gf` product-term pages share one identical skeleton**
(*why digital beats physical → step-by-step → design tips → table → sharing →
checklist*), and they now compete with each other.

**Do not produce a tenth copy of that shape.** Concretely:

- **Do not** open with "why a digital gift beats a physical one". Every one of you
  would write it and it would be ten identical intros.
- Your H2s must come from **your own** Phase 2 fan-out sub-queries, not from a
  template. Two posts in this batch sharing an H2 is a defect.
- Your comparison table must compare something **specific to your keyword**. A
  generic "digital vs physical" table in all ten is the same failure.
- Pick a different **primary** first-party fact from your neighbours where you can.
  Ten posts all leading on "50.2% open on a phone" is the content-farm signal.

**Rows 8 and 9 need the sharpest separation in the batch.** `how to surprise my
boyfriend for no reason` and `how to surprise your boyfriend randomly` scored
Jaccard 0.40 and shared only one distinctive host, so the method says they are two
SERPs — but they are semantically close enough that Google may pick one and bury the
other. Differentiate on intent, hard:

- **Row 8 ("for no reason")** — the *absence of an occasion* is the subject. Why an
  unprompted gesture reads differently from a birthday one; what "no reason" signals;
  the reciprocity trap of gifts that feel like they demand something back.
- **Row 9 ("randomly")** — *timing and unpredictability* is the subject. Spacing,
  surprise decay, why a predictable Friday-night ritual stops registering, how to
  vary without escalating.

If either of you finds yourself writing the other's post, stop and say so.

## Row 10 has an intent risk — handle it honestly

`how to surprise my girlfriend with flowers` returns **florists**: `myflowertree.com`,
`interflora.in`, `bloomsflora.com`, plus overseas ones. That searcher may well want
**real flowers delivered.** Do not pretend a digital page is a substitute for a
bouquet in water. The honest post covers real-flower logistics properly *and* is
straight about when a digital page is the better answer (they are far away; it is
1 a.m.; the flowers already arrived and you want something to go with them). A post
that dodges the physical-flower question will not deserve the ranking.

`/bouquet-gf` would be the natural template here and **it is excluded from this
batch** — link `/love-gf` and `/missyou-gf` instead, and do not describe a
bouquet-building feature you are not linking.

---

## Hard constraints

- **1,500–1,800 words in `contentMarkdown`, FAQs excluded.** Measured by plain
  whitespace split (`md.split(/\s+/).filter(Boolean).length`) — that is the
  authority, and `wordCount()` in `app/lib/batches.ts` reads 20–40 higher.
- **8–12 FAQs**, in `article.faqs` and the FAQPage JSON-LD **only — never in
  `contentMarkdown`.** Strapi renders `faqs` as its own section, so an FAQ heading
  in the body shows every question twice. No FAQ may duplicate an H2's meaning.
- Exactly one H1. No skipped heading levels.
- `metaTitle` 50–60 chars (hard cap 70), keyword in the first five words, differs
  from the H1, one separator, **no banned booster** (Best, Top, Ultimate, Complete
  Guide, Everything You Need to Know), no year-stamp on an evergreen title.
- `metaDescription` 150–160 chars (hard cap 170), leads with the answer, keyword
  near the start, at least one number, no CTA cliché.
- `excerpt` under 300 chars. `keyTakeaways` 3–5 bullets, each standalone with a
  number where possible.
- **At least one section naming a downside, a limit, or a case where SubhSandesh is
  the wrong choice.** This is a trust signal and it is not optional.
- `structuredData` is **additive only** — never repeat `BlogPosting`, `FAQPage`,
  `BreadcrumbList`, `Organization`, `WebSite` or `Person` as a fresh type; the
  renderer builds those and silently drops duplicates. Use an `@id`-matched
  enrichment block on `<canonicalURL>#post` carrying `citation` (mirroring
  `batchMeta.sources` one-to-one), `about` and `mentions`, plus an `ItemList` if your
  body ranks things. **No `AggregateRating`, `Review` or `HowTo` anywhere.**
- Every `sameAs` verified against the Wikipedia API with its Wikidata QID paired.
- `categorySlug` must be one of the 10 live Strapi slugs. Yours is assigned below.
- Namespace every scratch file `<slug>-<purpose>.md` in the session scratchpad — it
  is **shared** across all ten of you, and three agents in an earlier batch
  overwrote each other's `body.md` mid-draft.

## Phase 6 audit — the part that gets faked

Run **every** item in `publish-checklist.md`. Copy the item strings **byte-verbatim**,
including `**bold**` markers. Then assert, and mean it:

- `passed ∩ failed = ∅`
- `|passed| + |failed| =` the full checklist length (50 items)

A file that lists the same item in both is untrustworthy end to end, and it has
happened here before. **Flag failures; never silently fix one and never drop an item
to flatter the count.** `honestAssessment` answers one question: *why would an answer
engine cite this over the five pages analysed?* If the only honest answer is "it is
better written", say the post is unlikely to outperform and name what would change that.

## This brief may be wrong — check the two claims I am least sure of

My briefs have been wrong before, and in the last batch **every error was caught by a
writer, not by me.** In the bouquet wave I asserted there is no bridal bouquet in a
Hindu wedding (the post's own horticulture sources contradicted it), that maternity
wards restrict flowers for infection control (the CDC guideline says the opposite for
immunocompetent patients), and that a competitor's ranking page was strong editorial
(it was a product category page with 11 words of prose).

So verify these yourself rather than taking them from me:

1. **That "givers mispredict what recipients want" is a real, replicated finding.**
   I believe it is well established and I have not re-read the literature today. If
   the papers you can actually open say something narrower, write the narrower thing.
2. **That the Valentine's-week day sequence is a stable convention.** I have not
   verified it against a source in this run. If you cannot source it, omit it.

If you find a third error in here, say so in your report — that is worth more than a
clean run.

## Your assignment

| Slug | Keyword | Weak | Category | Suggested templates |
|---|---|---|---|---|
| `surprise-gifts-for-girlfriend-on-valentines-day` | surprise gifts for girlfriend on valentine's day | 7/8 | `digital-gifts-romance` | `/love-gf`, `/darling` |
| `surprise-gift-for-girlfriend-on-valentines-week` | surprise gift for girlfriend on valentine's week | 6/8 | `digital-gifts-romance` | `/love-gf`, `/darling` |
| `romantic-gifts-for-boyfriend-long-distance` | romantic gifts for boyfriend long distance | 5/7 | `miss-you-across-miles` | `/missyou-gf`, `/love-gf` |
| `romantic-gift-for-bf-birthday` | romantic gift for bf birthday | 5/7 | `milestone-birthdays` | `/birthday-gf`, `/love-gf` |
| `anniversary-gift-for-boyfriend-unique` | anniversary gift for boyfriend unique | 5/8 | `digital-gifts-romance` | `/love-gf`, `/darling` |
| `anniversary-gift-for-boyfriend-2-years` | anniversary gift for boyfriend 2 years | 5/7 | `digital-gifts-romance` | `/love-gf`, `/darling` |
| `how-to-surprise-my-boyfriend-in-long-distance-relationship` | how to surprise my boyfriend in long distance relationship | 5/8 | `miss-you-across-miles` | `/missyou-gf`, `/love-gf` |
| `how-to-surprise-my-boyfriend-for-no-reason` | how to surprise my boyfriend for no reason | 4/8 | `modern-romance` | `/love-gf`, `/darling` |
| `how-to-surprise-your-boyfriend-randomly` | how to surprise your boyfriend randomly | 4/8 | `modern-romance` | `/love-gf`, `/darling` |
| `how-to-surprise-my-girlfriend-with-flowers` | how to surprise my girlfriend with flowers | 4/8 | `modern-romance` | `/love-gf`, `/missyou-gf` |

All ten slugs were checked against Strapi on 2026-09-03 and are **free**.

Write `content/batches/2026-09-03-gift-bf/blogs/<slug>.json` and
`content/batches/2026-09-03-gift-bf/research/<slug>.md`. Touch no other blog's files.
