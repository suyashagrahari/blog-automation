# Batch brief — 2026-08-19-diwali

Shared constraints for every blog in this batch. Read this **after** the skill file
(`.claude/skills/subhsandesh-blog/SKILL.md` + everything in `references/`) and treat it as an
addition to the skill, never a replacement. All paths relative to `blog-automation/`.

## Why this batch exists — read this before choosing an angle

I audited all **834 live articles** on Strapi. The coverage is lopsided:

| Live coverage | Articles |
|---|---|
| birthday | 176 |
| love / romance | 149 |
| sorry / apology | 137 |
| friendship | 120 |
| bouquet / flowers | 101 |
| miss you | 78 |
| anniversary | 37 |
| **diwali** | **0** |
| every other festival (holi, eid, karwa chauth, navratri, ganesh, bhai dooj, christmas) | 0 |

**There is no Diwali content on the site at all** — 0 live slugs containing `diwali`,
`deepavali`, `festival` or `rangoli`. All ten slugs in this batch were verified free.

This also means the usual cannibalisation risk is inverted. You are not competing with a
sibling post; you are the first. But the site DOES have ~800 romance, apology and birthday
articles, so **do not drift into generic relationship-advice territory** that those already own.
Keep every post about Diwali specifically.

## Diwali 2026 — the facts every post shares

- **Diwali (Lakshmi Puja) falls on Sunday 8 November 2026.**
- The five-day festival runs **6–10 November 2026**.
- Lakshmi Puja muhurat commonly given as **18:29–20:29 IST** on 8 November.

Treat the date and the five-day span as a **fact-check, not a citation** — per
`references/publish-checklist.md` it has no domain cap and stays out of `sources` unless your
post actually states a muhurat time. **If you state the muhurat window, you must fetch and
verify it from a source you actually read, and cite it.** Do not assert a time from memory.

That Diwali 2026 is a **Sunday** matters and is worth using: it changes travel, work and
send-timing calculations in a way no evergreen page can copy.

## Product reality — state it honestly

`TEMPLATE_LINKS` in `app/lib/prompt.ts` has **no Diwali template**. The festival templates that
exist are `https://subhsandesh.in/holi` and `https://subhsandesh.in/eid-mubarak`, plus
`https://subhsandesh.in/happy-rakshabandhan-to-brother`.

So for most posts in this batch the honest internal link is
`https://subhsandesh.in/templates` (the gallery), and you must **say plainly that there is no
Diwali-specific design today** rather than implying a clean fit. Link a romance or birthday
template only where the post's reader genuinely wants that artefact — e.g. a post about a
partner may reasonably point at `https://subhsandesh.in/love-gf`.

Never invent a `/diwali` URL. It 404s.

## First-party data

`content/facts.md`, regenerated **2026-08-19** — cite lines verbatim including
"measured 2026-08-19". Do **not** re-run `npm run facts`.

Unlike the three rakhi batches, some facts here are **template-specific and load-bearing**:
`/love-gf` 914 pages and 13,104 views (39.7% of all views), `/bouquet-gf` 712, `/apology-dashboard`
530, `/darling` 311, `/birthday-gf` 113. Use those where the post is about a partner or a gift.

Two limitations to respect and state rather than paper over:

1. There is **no Diwali-specific first-party fact** — Diwali is not among the 13 page types.
   Do not imply one.
2. The platform-wide figures (mobile share, password rate, publish rate, edit gap, views per
   page) pass the subject test for *"making and sharing a personalised greeting"* but fail the
   swap test across the batch. Say so in `honestAssessment`.

Use **at least 3**, with **at least 2 inside the first 150 words**.

## Source rules

Across the 29 existing rakhi posts, **104 distinct domains and 134 distinct URLs** are already
used. Ten domains appear in two or more of those posts.

**Banned outright for this batch:**
`drikpanchang.com`, `en.wikipedia.org`, `doi.org`, `pmc.ncbi.nlm.nih.gov`, `arxiv.org`,
`europepmc.org`, `journals.plos.org`, `frontiersin.org`, `cambridge.org`,
`calendar.gatech.edu`, `aclanthology.org`, `blog.whatsapp.com`, `developers.facebook.com`,
`newsonair.gov.in`, `w3.org`.

`doi.org` is banned partly because a DOI redirect **hides the real publisher domain** from the
dedup count. Always cite the publisher's own URL.

Within this batch: no URL may repeat, and no domain may appear in more than **two** posts. Read
the `sources` of any sibling files already in
`content/batches/2026-08-19-diwali/blogs/` and pick around them. Prefer a domain that appears in
none of the 29 rakhi posts.

**At most one** generic context statistic (PIB / TRAI / Census / MEA) for the whole batch — if a
sibling has taken it, you get zero. Search the *phenomenon*, not the keyword: Diwali itself is
under-studied, but light and wellbeing, air quality, festival spending, diaspora ritual,
workplace recognition, gift-giving psychology and bereavement around anniversaries are all
studied.

## Competitors — do not cite, link, or mirror

Read `references/competitors.md`. Expect this SERP to be gifting retailers (fnp.com, igp.com,
floweraura.com, winni.in, bigsmall.in, archiesonline.com), card builders (canva.com,
greetingsisland.com, adobe.com Express), news listicles (indiatvnews, timesofindia, hindustantimes,
ndtv) and wishes farms. Analyse them in Phase 1; cite none.

Two extra cautions specific to Diwali:
- **Sweets/gift retailers will dominate.** Do not become a gift-guide; that is their page.
- **Crackers and air quality are politically charged.** If a post touches it, be factual and
  brief, cite a primary source, and take no side.

## Files you own — and only these

- `content/batches/2026-08-19-diwali/blogs/<your-slug>.json`
- `content/batches/2026-08-19-diwali/research/<your-slug>.md`

Do not touch `batch.json`, another slug's files, `content/facts.md`, or any rakhi batch.

**Scratch files must be named `<your-slug>-<purpose>.md`** — the scratchpad is shared and a bare
`body.md` gets overwritten by another keyword's draft.

## Strapi targeting

- `categorySlug` — exactly one of: `digital-gifts-romance`, `milestone-birthdays`,
  `modern-romance`, `family-and-continuity`, `big-fat-weddings`, `festive-beats`,
  `say-sorry-beautifully`, `miss-you-across-miles`, `virtual-bouquets`.
  `festive-beats` is the obvious home for most of these; use `family-and-continuity` where the
  post is really about the relationship, and `digital-gifts-romance` where it is about a partner.
- `templateUrls` — 1–3, only from `TEMPLATE_LINKS`, absolute `https://subhsandesh.in/...`.

## Non-negotiables (the ones this project keeps missing)

- Direct answer in the **first 150 words**, containing **two first-party numbers**.
- Body **1,500–1,800 words** *excluding* FAQs, measured with a plain whitespace split. Check
  BEFORE assembling: prose-heavy drafts in this project land 300–600 words OVER, and list-heavy
  drafts land UNDER. Both have happened.
- FAQs in `article.faqs` and the FAQPage JSON-LD **only** — never in `contentMarkdown`. 8–12.
- One comparison table, 3–5 rows, real values, at least one column first-party.
- Every H2 carries a specific number, date, price or named source.
- **Verify every Wikidata QID against the Wikipedia API.** Guessed QIDs have been wrong every
  single time anyone checked in this project.
- `auditReport.passed` and `failed` must be **disjoint** and together cover **all 50** checklist
  items verbatim. Assert both before writing, and do not invent a failure for an item that
  literally passes — put that nuance in `honestAssessment` instead.
- Fetch every source and verify the number in the source text. If a page 403s, say so and do not
  cite it. Never cite from a search snippet.
- Any non-English line must be idiomatic, with transliteration and a gloss. Drop what you cannot
  vouch for and report how many you dropped.
- Flag failures; never silently fix or drop a checklist item. Never claim the post will rank.
