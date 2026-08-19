# Batch brief — 2026-08-18-rakhi-2

Shared constraints for every blog in this batch. Read this **after** the skill file,
and treat it as an addition to the skill, never a replacement.

Skill: `.claude/skills/subhsandesh-blog/SKILL.md` (+ everything in `references/`).
All paths relative to `blog-automation/`.

## Context — this is the second rakhi batch

Batch `2026-08-13-rakhi` already drafted 9 posts (not yet published). Read the
sibling slugs before you draft so you do not repeat their framing or compete with
them:

| Slug | Keyword |
|---|---|
| `raksha-bandhan-wishes-for-long-distance-brother` | raksha bandhan wishes for long distance brother |
| `celebrate-raksha-bandhan-online-long-distance` | how to celebrate raksha bandhan online long distance |
| `how-to-send-rakhi-wishes-on-whatsapp` | how to send rakhi wishes on whatsapp |
| `happy-raksha-bandhan-wishes-for-sister-from-brother` | happy raksha bandhan wishes for sister from brother |
| `raksha-bandhan-shayari-in-hindi-for-bhai` | raksha bandhan shayari in hindi for bhai |
| `raksha-bandhan-wishes-for-brother-in-marathi` | raksha bandhan wishes for brother in marathi |
| `rakhi-wishes-for-cousin-brother` | rakhi wishes for cousin brother |
| `raksha-bandhan-captions-instagram-brother` | raksha bandhan caption for instagram with brother |
| `rakhi-wishes-for-brother-in-law-jiju` | rakhi wishes for brother in law jiju |

They live in `content/batches/2026-08-13-rakhi/blogs/`. Your keyword was chosen
because it is a **different intent** from all nine. Keep it that way — if your
draft starts becoming a second version of one of those posts, that is the failure
mode to avoid, and you should say so in the audit.

Do **not** internal-link to those slugs. None of them are published; the URL 404s.

## Source rules — tightened for this batch

The previous batch cited `drikpanchang.com` in 5 of 9 posts and `en.wikipedia.org`
in 3. To a retrieval system that reads as one content farm. So, in addition to the
skill's rules:

- **Banned outright** (already over budget, or not research):
  `drikpanchang.com`, `en.wikipedia.org`, `europepmc.org`, `frontiersin.org`,
  `arxiv.org`, `aclanthology.org`, `blog.whatsapp.com`, `developers.facebook.com`.
- Within **this** batch: no URL may repeat, and no domain may appear in more than
  **two** posts. Before you write your JSON, list the `sources` already used by
  sibling files in `content/batches/2026-08-18-rakhi-2/blogs/` and pick around them.
- **At most one** generic context statistic (PIB / TRAI / Census / MEA) — and if
  another post has already taken it, you get zero.
- Search the *phenomenon*, not the keyword. Sibling relationships, ritual and
  co-presence, diaspora family contact, Marathi/Hindi literary form, employee
  recognition — these are studied; "rakhi" is not.
- Fetch every source and verify the number. If only the abstract is readable, cite
  only the abstract and record that in the audit.

## Competitors — do not cite, link, or mirror

Read `references/competitors.md`. Specific to this batch, the SERP is almost all
competitors: igp.com, floweraura.com, archiesonline.com, rakhibazaar.com,
mynameart.com, mynamepix.com, thefestivalwishes.com, createcustomwishes.com,
wishesframes.com, giboxonline.com, canva.com, zazzle.com, funkypigeon.com,
flexclip.com, capcut.com, pureshayari.com, theindianshayaris.com, sheetwa.com,
indiatvnews.com (listicle). Analyse them in Phase 1; cite none of them.

## First-party data

`content/facts.md`, regenerated 2026-08-18. Two honest limitations you must
respect:

1. There is **no rakhi-specific first-party fact** — rakhi is not among the top
   page types, so no per-template rakhi number exists today. Do not imply one.
2. The available facts are platform-wide (creation counts, view counts, mobile
   share, password share, publish rate, edit-gap). They pass the subject test for
   *"making and sharing a personalised page"* — which is what these keywords are
   about — but they fail the swap test across the batch. Use them for what they
   actually prove, and note the limitation in `honestAssessment` rather than
   dressing them up as festival research.

Use **at least 3**, with **at least 2 in the first 150 words**.

## Strapi targeting

- `categorySlug` — one of exactly: `digital-gifts-romance`, `milestone-birthdays`,
  `modern-romance`, `family-and-continuity`, `big-fat-weddings`, `festive-beats`,
  `say-sorry-beautifully`, `miss-you-across-miles`, `virtual-bouquets`.
  The previous batch put 8 of 9 in `festive-beats`; prefer
  `family-and-continuity` where the post is genuinely about the relationship
  rather than the festival, so the category pages do not become one bucket.
- `templateUrls` — only URLs from `TEMPLATE_LINKS` in `app/lib/prompt.ts`. The only
  rakhi template is `https://subhsandesh.in/happy-rakshabandhan-to-brother`. Use
  absolute `https://subhsandesh.in/...` URLs consistently, plus
  `https://subhsandesh.in/templates`. Never invent a slug.

## Files you own — and only these

- `content/batches/2026-08-18-rakhi-2/blogs/<your-slug>.json`
- `content/batches/2026-08-18-rakhi-2/research/<your-slug>.md`

Do not touch `batch.json`, another slug's files, or `content/facts.md`.

**Scratch files must be named `<your-slug>-<purpose>.md`.** The scratchpad is
shared across all ten of us; a bare `body.md` will be silently overwritten by
another keyword's draft.

## Non-negotiables (the ones most often missed)

- Direct answer in the **first 150 words**, containing **two first-party numbers**.
- Body **1,500–1,800 words** *excluding* FAQs.
- FAQs live in `article.faqs` and the FAQPage JSON-LD **only** — never in
  `contentMarkdown`. 8–12 of them.
- One comparison table with real values.
- Every H2 carries a specific number, date, price or named source.
- `auditReport.passed` and `auditReport.failed` must be **disjoint**, and together
  must cover **every** item in `references/publish-checklist.md`, using the
  checklist's strings verbatim. State the two counts and that they sum to the
  checklist length.
- Flag failures. Do not silently fix or drop a checklist item.
- Never claim the post will rank.

## Live addendum — measured domain usage (authoritative)

Recomputed directly from the 5 completed sibling files on 2026-08-18. These counts
supersede any agent's self-report; two earlier self-reports were wrong.

**BANNED for every remaining agent — already at or over this batch's 2-post cap:**
`doi.org` (3 — over cap), `pmc.ncbi.nlm.nih.gov` (2), `journals.plos.org` (2),
`support.google.com` (2).

Already used once, so you may take at most one of these and only if nothing better
exists: cyberpsychology.eu, journal.fi, academic.oup.com, calendar.gatech.edu,
indiapost.gov.in, bmj.com, uploads-ssl.webflow.com, cs.cmu.edu, journals.sagepub.com,
thoughtcrumbs.com, asc.upenn.edu, developer.chrome.com, copyright.gov.in,
ideas.repec.org, trialsjournal.biomedcentral.com, inria.hal.science.

No URL is currently duplicated. Keep it that way — cite the publisher's own domain
rather than a `doi.org` redirect, which is banned and also hides the real domain
from this count.

## Note on the 5 completed posts

Five of ten are already written and valid: `raksha-bandhan-wishes-with-name-and-photo`,
`personalised-raksha-bandhan-card-with-name`,
`raksha-bandhan-video-maker-with-photo-and-music`,
`how-to-tie-rakhi-virtually-on-video-call`,
`raksha-bandhan-whatsapp-status-with-name`. Read the ones adjacent to your keyword.
Category split so far is 3 `family-and-continuity` / 2 `festive-beats`.

