---
name: subhsandesh-blog
description: Research keywords and write blog posts engineered to rank on Google AND be cited by ChatGPT, Perplexity, Claude and Google AI Overviews, then emit them as batch JSON for the Blog Automation studio to publish to Strapi. Runs SERP competitor analysis, finds the content gap, sources genuine third-party research (never competitor links), and grounds every post in SubhSandesh's own first-party data from content/facts.md. Use this whenever the user gives keywords to write about, mentions a blog post, an article, SEO, GEO, AEO, answer engine optimisation, generative engine optimisation, ranking on Google, getting cited by LLMs, keyword batches, content briefs, or competitor content analysis — even if they only say "write a post about X", "make blogs for these keywords", or hand over a keyword spreadsheet. Also use when asked how to beat a competitor's article or what to write next.
---

# SubhSandesh SEO / GEO / AEO Blog Writer

Write posts that rank in traditional search **and** get cited by answer engines.
These are now partly separate games, so the post has to be built for both.

**The principle behind every rule here: an answer engine cites the source that
has something the others don't.** Synthesising the top 5 results produces a sixth
version of the same page, which neither Google nor an LLM has any reason to
surface. SubhSandesh's own first-party data is the entire moat — that is why
Phase 0 blocks.

All paths below are relative to the `blog-automation/` directory.

---

## Workflow

Run the phases in order. Do not skip ahead to drafting — each phase produces an
input the next one needs, and drafting early is the most common way this goes
wrong.

### Phase 0 — Data gate (BLOCKING)

1. Run `npm run facts`. It rebuilds `content/facts.md` from the live `gifts`
   Mongo database (read-only) with today's date on every line.
2. Read `content/facts.md`.
3. **Require at least 3 facts relevant to the target keyword, with at least 2
   that can sit inside the first 150 words.** If there aren't:
   - Say so plainly. Do not soften it and do not draft anyway.
   - Help find more instead — ask what else can be queried today.
   - Genuinely nothing available? Fall back to documented first-hand experience
     ("I built X and here is what broke"). First-hand experience counts as
     original. Rephrased competitor content does not.

Explain the gate once, briefly: fact density is the strongest lever on whether an
answer engine cites a page, and only original facts are defensible.

### Phase 1 — SERP analysis (no writing yet)

If the keyword is a 1–2 word head term, say so and propose 3 long-tail
alternatives (4–8 words) before continuing. Head terms are unwinnable for a
low-authority domain, and long-tail phrasing matches how people actually query
LLMs — so it serves both goals at once.

Then:

1. `WebSearch` the keyword. Note who ranks 1–5, plus any AI Overview or featured
   snippet.
2. `WebFetch` each of the top 5 pages **in full**.
3. For each page record: word count and heading structure; **where the direct
   answer appears** (first paragraph, or buried after an intro?); named entities,
   subtopics and secondary keywords; data cited **and the date of that data**;
   format elements (tables, lists, FAQ, schema, author byline); tone (first or
   third person, contractions, sentence length, specific or hedged); and what the
   page is actually optimising for.

Put this in a comparison table in `research/<slug>.md`. Write no prose for the
post yet.

### Phase 2 — Gap analysis

From the five pages, extract:

- **Table stakes** — subtopics all five cover. The post must include these or it
  looks incomplete to a retrieval system.
- **The gap** — what none of them cover. Usually: a sub-question everyone dodges,
  an audience segment ignored, a practical constraint (cost, time, region) left
  vague, or a comparison nobody makes.
- **Stale data** — cited statistics older than ~2 years. Superseding a stale
  number with a current one is a reliable citation win.
- **Unanswered questions** — things the pages raise and don't resolve.
- **Fan-out sub-queries** — the smaller questions an answer engine would
  decompose this keyword into. Each becomes a candidate H2 or FAQ entry.

Then state the angle in one sentence and record it as `batchMeta.angle`:

> *"This post wins by being the only one that [gap] using [specific first-party fact]."*

**If that sentence can't be written honestly, the angle is too weak — go back.**

### Phase 3 — Source genuine research

Read `references/research-sources.md` first. It carries the search targets, the
open-access repositories, the licensing rules and the batch-uniqueness rule.

Find 4–6 citable third-party sources. **Topical relevance decides what to look for,
not the publisher's authority** — the old ordering put government statistics first
and produced nine posts propped up by the same telecom figures.

Every post needs:

1. **At least 2 sources that are genuinely about the post's subject** — siblings,
   ritual, distance, the language, the platform behaviour. Of these, **at least 1
   peer-reviewed or scholarly**, from an open-access source the reader can actually
   open.
2. **At most 1 generic context statistic** (PIB, TRAI, Census, MEA). These are
   background, not research, and one is plenty.
3. Wikipedia 0–2, entity disambiguation only — never counted as research.

Two tests, and a source must pass **both**:

- **Subject test** — is it *about* what the post is about? Not "about India", not
  "about the internet".
- **Swap test** — could it sit unchanged in a different keyword's post in this
  batch? If yes it is filler. A subscriber count works in a rakhi post, a Diwali
  post and an anniversary post, which is why it is worthless in all three.

**Do not reuse a source across the batch.** A URL may appear in at most 2 posts, a
domain in at most 3. Check the sibling files in `content/batches/<batchId>/blogs/`
before adding one. Nine posts citing one press release read, to a retrieval system,
like nine pages from a content farm.

**Search the phenomenon, not the keyword.** For "raksha bandhan wishes for long
distance brother", search `sibling relationship maintenance long distance study` —
festivals are under-studied, the behaviours around them are not.

**Never cite a competitor** — see `references/competitors.md`.

Fetch every source and verify it says what you claim. Never cite from memory, never
invent a statistic or a date, and if only an abstract is readable, cite only what
the abstract says and record in the audit that the full text was not read. Record
each as `{ url, stat, publishedDate }` in `batchMeta.sources` — and `publishedDate`
means when the source was published, never when you fetched it.

If no topical research exists for the angle, **say so in the audit and name the
search terms you tried.** That is a real finding, usually meaning the angle is about
product mechanics rather than a studied phenomenon — lean on first-party data
instead. Do not pad the count with another government statistic.

### Phase 4 — Draft

Follow `references/page-structure.md` block by block, and
`references/meta-and-titles.md` for the title / `metaTitle` / `metaDescription`
trio — three different strings with three different jobs. Non-negotiables:

- The direct answer lands in the **first 150 words**, with **at least two
  first-party numbers** in it. No scene-setting intro.
- Paragraphs of 2–3 sentences. Long blocks are less likely to be lifted as a citation.
- Every H2 section contains at least one specific number, date, price or named source.
- One comparison table with **real values**, not "fast" and "affordable".
- **8–12 FAQs** in natural spoken phrasing, plus a matching FAQPage JSON-LD block.
- 1,200–1,800 words. Complete, then stop. Padding dilutes fact density.

Read `references/tone-and-links.md` before drafting. What makes writing read as
human is having something specific to say, not stylistic tricks — state opinions,
name tradeoffs, admit where SubhSandesh is the wrong choice, include the
inconvenient number.

### Phase 5 — Internal links and Strapi targeting

- 2–4 internal links with descriptive anchor text ("animated bouquet template",
  never "click here"), placed **after** the section that establishes why the
  reader would want it — never in the opening paragraph.
- **Only use URLs from `TEMPLATE_LINKS` in `app/lib/prompt.ts`.** Never invent a
  slug; an invented one 404s.
- Choose `batchMeta.categorySlug` from the live Strapi categories:
  `https://strapi.subhsandesh.in/api/categories?fields[0]=name&fields[1]=slug&pagination[pageSize]=200`
- Choose 1–3 `batchMeta.templateUrls` from `TEMPLATE_LINKS` — the ones genuinely
  relevant to this keyword (a Holi post links `/holi`; an apology post links
  `/apology-dashboard`). These become the article's `relatedTemplates`.

Unresolvable values are surfaced as amber warnings in the studio rather than
failing the publish, but getting them right here saves manual fixing.

Then write `structuredData` per `references/structured-data.md`. It is **additive
only** — the site already builds `BlogPosting`, `FAQPage`, `BreadcrumbList`,
`Organization`, `WebSite` and `Person`, and silently drops those types if you
repeat them. The field's real job is an `ItemList` for any ranked body list, and an
`@id`-matched enrichment block carrying `citation` — the only route by which
`batchMeta.sources` survives into the published page.

### Phase 6 — Self-audit

Run **every** item in `references/publish-checklist.md` against the draft and
record the result in `batchMeta.auditReport`:

- `passed` — items that genuinely pass.
- `failed` — `{ item, why }` for each that doesn't. **Flag failures; do not
  silently fix them or quietly drop the item.** The user needs to know where the
  post is weak.
- `honestAssessment` — answer this in one or two sentences: *why would an answer
  engine cite this over the five pages analysed?* If the only honest answer is
  "it's better written", say that the post is unlikely to outperform and name
  what would need to change.

**`passed` and `failed` must be disjoint, and every checklist item must appear in
exactly one of them.** In the 2026-08-13 rakhi batch three files listed the same
item in both — a file asserting it both passed and failed its own audit, which
makes the whole report untrustworthy and hides real failures behind a green count.
Copy the checklist item strings verbatim rather than paraphrasing, then assert:
`passed ∩ failed = ∅` and `|passed| + |failed| =` the checklist length.

Never claim a post will rank. Ranking takes months and depends on domain
authority, backlinks and competition.

### Phase 7 — Emit

Write, per keyword:

- `content/batches/<batchId>/blogs/<slug>.json` — exactly the shape in
  `references/article-json-schema.md`.
- `content/batches/<batchId>/research/<slug>.md` — the Phase 1–3 brief.

Then create or update `content/batches/<batchId>/batch.json`.

**FAQs go in `article.faqs` and the FAQPage JSON-LD only — never inside
`contentMarkdown`.** Strapi renders the `faqs` component as its own section, so an
FAQ heading in the body shows every question to the reader twice. This also means
the body must reach 1,500–1,800 words on its own, without the FAQs counting.

**Check the slug isn't taken before settling on it.** There are ~834 articles
live; a colliding slug is locked out of publishing:

```
https://strapi.subhsandesh.in/api/articles?fields[0]=slug&filters[slug][$eq]=<slug>
```

### Phase 8 — Remediate the audit (BLOCKING if anything is fixable)

An honest audit is the start of the work, not the end of it. A post must not ship
with fixable weaknesses recorded as though they were facts of life.

For every blog whose `auditReport.failed` is non-empty, spawn one
**`blog-audit-remediator`** subagent — in parallel across blogs, since each edits
only its own file. Give it the blog JSON path, the research brief path, and
`references/audit-remediation.md`. Do not run this pass yourself: its value comes
from a reader with no attachment to the draft's phrasing.

The remediator classifies each failure as **fixable** (more work closes it) or
**structural** (the data or source does not exist today). Fixable ones get fixed
in the file. Structural ones stay in `failed`, with a `why` naming the blocker and
the condition that would close it — "n=106 is too small for a per-template rate;
re-query above ~500 pages" — never a restatement of the checklist item.

Because fixing one item routinely breaks another (word count is the usual
casualty), the remediator re-runs the **entire** checklist and the schema
validator, then rewrites `honestAssessment` to describe the post as it now stands.

Report what it fixed and what it deliberately left open. **A remaining failure is
an acceptable outcome; a silently deleted one is not.**

---

## Running a batch

1. `npm run facts` — refresh the facts, then apply the Phase 0 gate.
2. Parse the keywords (a spreadsheet, or a list pasted into chat).
3. Pick a batch id: `<YYYY-MM-DD>-<short-name>`, e.g. `2026-08-12-diwali`.
4. `git checkout -b batch/<batchId>` inside `blog-automation/`.
5. **One subagent per keyword, at most 6 concurrent.** Each runs Phases 1–7 for
   its own keyword and writes its own files. Never let two subagents write the
   same file.

   **Namespace every scratch file by slug.** The session scratchpad directory is
   *shared* across concurrent subagents, not per-agent. In the 2026-08-13 rakhi
   batch three separate agents independently wrote `scratchpad/body.md` and
   overwrote each other mid-draft; all three happened to notice, but a fourth
   would have shipped another keyword's body under its own slug and nothing in
   the schema validator would have caught it. Tell each subagent that any
   temporary file must be named `<slug>-<purpose>.md`.

   Then, before committing, verify no draft crossed over — for every blog file,
   the H1, `article.slug` and `batchMeta.keyword` must agree, and the body must
   contain a marker word unique to its own keyword. Do this even when every
   subagent reports success; the failure is silent by construction.
6. **Then one `blog-audit-remediator` per blog with failures** (Phase 8), again in
   parallel — each edits only its own JSON. Wait for all of them before committing.
7. Write `batch.json`, commit, push.
7. Report a table: slug, words, FAQ count, chosen category and templates, audit
   failures, and the one-line honest assessment per post.
8. The user opens the Vercel deployment → **Batches** → reviews → ticks →
   publishes. Merge the branch once they're satisfied.

A typical batch is 2–4 keywords, so they usually all run at once.

---

## What this skill will not do

- Cite, link to, or paraphrase a competitor's blog post.
- Draft without first-party data. Phase 0 is blocking.
- Invent a statistic, a source, or a publication date.
- Target a head term for this domain without flagging that it's unwinnable.
- Pad word count to hit a number.
- Claim a post will rank.
- Silently fix a failed checklist item instead of reporting it.
- Ship a fixable audit failure unaddressed, or delete one to flatter the count.
- Put FAQs inside `contentMarkdown`.
