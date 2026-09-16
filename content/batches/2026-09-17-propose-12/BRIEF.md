# Batch brief — 2026-09-17-propose-12

Source run: `content/keywords/2026-09-16-propose-100/` (shortlist.md Part 2, all 12
`winnable` pages). Branch `batch/2026-09-17-propose-12`.

## The batch angle, and the one thing that must not go wrong

Every post in this batch points at **https://subhsandesh.in/proposal** — "Will You
Marry Me? — a proposal scrapbook of your story, ending in a YES button that grows
every time they dodge it". That is the primary template for all 12.

**Every post must also offer at least one genuine alternative template**, named with
the reason it might suit the reader better. Do not list alternatives as a menu — pick
the one that fits the post's reader and say why. The honest options:

| Template | When it beats /proposal |
|---|---|
| `/apology-dashboard` | Proposing after a fight, or winning someone back. #2 template on the platform, 1,095 pages / 24.2% |
| `/love-gf` | Not a marriage proposal — "I love you" / "will you be my girlfriend". #1 template, 1,136 pages / 25.1%, 16,345 views / 31.9% |
| `/date-invitation` | Asking someone out, not asking to marry. A yes turns into a countdown |
| `/court-of-love` | Playful couples; a proposal that would land badly if played straight |
| `/bouquet-gf` | Reader wants to send flowers, not ask a question — 1,094 pages / 24.2% |
| `/train-ticket` | Long-distance. Letter disguised as a train ticket with a PNR |
| `/capsule`, `/streak`, `/photo-puzzle` | Slow-burn, not a single moment |

**Only URLs from `TEMPLATE_LINKS` in `app/lib/prompt.ts`.** An invented slug 404s.
`batchMeta.templateUrls`: 1–3, `/proposal` always among them.

## SERP truth from the keyword run — do not re-derive, but do verify

1. **"Proposal" without a romance word is a B2B software query.** `online proposal
   website free` returns 10/10 business-proposal SaaS (Proposify, Canva, Venngage,
   Jotform). If your Phase 1 SERP comes back full of B2B tools, that is the finding,
   not an error — say so in the research brief and target the romance half.
2. **The incumbents are two-person startups**, not publishers: bemyval.co,
   yourlovepage.online/.com, pixeryhub.com, momentocard.in. Never cite or paraphrase
   them (`references/competitors.md`).
3. **Four incumbents still rank with a 2025 title.** Propose Day 2027 is
   **Monday 8 February 2027**. Get the year right and say it explicitly — it is the
   cheapest freshness win on the board.
4. **subhsandesh.in has 46 live proposal pages and none ranked in any of the 11 SERPs
   measured.** Assume no authority on this query. Do not write "as we've covered
   before".

## Phase 0 facts — already run, gate passed

`content/facts.md`, regenerated 2026-09-16. Use **at least 3**, **at least 2 in the
first 150 words**. The ones that carry this batch:

- 4,524 personalised pages created since 2026-03-12 across 16 page types
- `/love-gf` #1 — 1,136 pages, 25.1% of everything created; 16,345 views, 31.9% of all views
- `/apology-dashboard` #2 — 1,095 pages, 24.2%
- **40.0% of creators password-protect the page before sharing it (1,809 of 4,524)** —
  the single most relevant behaviour fact for a proposal, and the one to lead with
- 92.9% of started pages are actually published and shared (4,204 of 4,524)
- 48.9% of views are on a phone (25,008 of 51,164)
- Median first-save → last-edit gap 6.3 hours, n=1,136, sampled on /love-gf
- 51,164 recorded views; 11.3 average views per page; 3,456 registered creators

**HONESTY CONSTRAINT — mandatory, applies to every post.** There is a `proposalpages`
collection in the database but **no proposal-specific figures were obtainable for this
batch** (the read-only probe was blocked by the production-read policy). Therefore:

- **Never attribute a number to proposal pages specifically.** 40.0% is the
  *platform-wide* password rate across all 4,524 pages; 6.3 hours is sampled on
  **/love-gf**, not on proposals. Say which, in body prose, wherever you cite them.
- Do not derive a per-template proposal rate from anything in facts.md.
- Record this as a structural limitation. **CORRECTED 2026-09-17:** the brief originally
  said to put it in `auditReport.failed`. That was wrong and three agents correctly
  refused it — `failed` entries must be verbatim checklist strings, and a non-checklist
  string breaks the mandatory `|passed| + |failed| = checklist length` arithmetic.
  Put it in `honestAssessment` and the research brief instead (a clearly-labelled
  non-checklist entry alongside `failed` is also acceptable, provided it is excluded
  from the arithmetic). It is a real finding, not a gap to paper over.

  **Remediators: do not "fix" this deviation back into `failed`.** The audit contract
  wins over the brief's original wording.

Do **not** use the Raksha Bandhan lead-time block (n=89, different festival).

## Research — Phase 3

Read `references/research-sources.md` first. 4–6 sources, **at least 2 genuinely about
the post's subject, at least 1 peer-reviewed open-access**, at most 1 generic context
statistic, and every one fetched and verified. Record `{url, stat, publishedDate}` in
`batchMeta.sources` — `publishedDate` is when the source was published.

**Search the phenomenon, not the keyword.** Your assigned research lane is in your own
task prompt — stay in it. A URL may appear in **at most 2** posts in this batch and a
domain in **at most 3**, so check sibling files in `blogs/` before you add one. If no
topical research exists for your angle, say so in the audit and name the terms you
tried — do not pad with another government statistic.

## Mechanics

- Batch id `2026-09-17-propose-12`. Write
  `content/batches/2026-09-17-propose-12/blogs/<slug>.json` and
  `content/batches/2026-09-17-propose-12/research/<slug>.md`. **Only your own files.**
- Scratch files must be named `<slug>-<purpose>.md`. The scratchpad is shared across
  concurrent agents and unprefixed names have silently overwritten each other before.
- `categorySlug`: `modern-romance` for advice/how-to posts, `digital-gifts-romance`
  for tool/card/link posts. Propose Day is Valentine week, **not** `indian-festivals`.
- FAQs live in `article.faqs` + FAQPage JSON-LD **only**, never in `contentMarkdown`.
  Body must reach 1,500–1,800 words without them. 8–12 FAQs.
- Follow `references/page-structure.md`, `meta-and-titles.md`, `tone-and-links.md`,
  `structured-data.md`, `article-json-schema.md` exactly.
- Phase 6 audit: `passed ∩ failed = ∅`, `|passed| + |failed| =` checklist length,
  checklist strings copied verbatim.

## Verified 2027 dates — corrected 2026-09-17

An earlier task prompt stated the Valentine-week order wrongly. The verified order,
confirmed by computation and by the Propose Day entry on Wikipedia:

- **Rose Day — Sunday 7 February 2027** (opens the week)
- **Propose Day — Monday 8 February 2027** (the *second* day, not the first)
- Valentine's Day — **Sunday 14 February 2027** (closes it)

Two further facts no incumbent prints: Propose Day **2026 fell on a Sunday**, so the
2027 Monday genuinely narrows the usable window; and four ranking incumbents still
carry **2025** in their titles.

## Competitor entered after the keyword run — 2026-09-17

**bondlyfe.com** sells proposal pages (the same job as `/proposal`) and publishes long
answer-first guides, ~3,000 words, recently updated. It was in none of the 11 SERPs
measured on 2026-09-16. Treat it strictly per `references/competitors.md`: do not cite,
link, paraphrase or mirror its structure. It cites **zero** sources — still the opening
— but basic advice (timing, ask clearly, one message not a wall of text) is now table
stakes, not a gap.

## Source caps — live tally, check before adding

**AT CAP, do not cite:** `arxiv.org` (3), `journals.sagepub.com` (3),
`ncbi.nlm.nih.gov` / `pmc.ncbi.nlm.nih.gov` (3 combined — same publisher, count together).
**One slot left each:** `journals.plos.org` (2), `cyberpsychology.eu` (2),
`frontiersin.org` (2), `en.wikipedia.org` (2 — entity links only, never research).

Updated after 8 of 12 posts. Re-count from `blogs/` yourself before adding a source;
four posts were still being written when this line was last refreshed.
In use with room: nature.com, frontiersin.org, journals.sagepub.com, cyberpsychology.eu,
thejsms.org, hbs.edu, pewresearch.org, shura.shu.ac.uk, europepmc.org,
faculty.wharton.upenn.edu, davidschweingruber.com, ojs.meccsa.org.uk.

`doi.org` is a resolver, not a publisher — count the **resolved** publisher against the
cap, not `doi.org`.
