# Batch brief — 2026-08-19-rakhi-3

Shared constraints for every blog in this batch. Read this **after** the skill file
(`.claude/skills/subhsandesh-blog/SKILL.md` + everything in `references/`) and treat it as an
addition to the skill, never a replacement. All paths relative to `blog-automation/`.

## Context — this is the THIRD rakhi batch

**19 rakhi posts already exist** across `2026-08-13-rakhi` (9) and `2026-08-18-rakhi-2` (10),
both still on disk and readable. Read the ones adjacent to your keyword before drafting.

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
| `raksha-bandhan-wishes-with-name-and-photo` | raksha bandhan wishes with name and photo |
| `personalised-raksha-bandhan-card-with-name` | personalised raksha bandhan card with name |
| `raksha-bandhan-video-maker-with-photo-and-music` | raksha bandhan video maker with photo and music |
| `how-to-tie-rakhi-virtually-on-video-call` | how to tie rakhi virtually on video call |
| `raksha-bandhan-whatsapp-status-with-name` | raksha bandhan whatsapp status with name |
| `corporate-raksha-bandhan-greeting-for-employees` | corporate raksha bandhan greeting for employees |
| `happy-raksha-bandhan-replies-to-sister` | happy raksha bandhan replies to sister |
| `rakhi-message-for-brother-far-away-in-another-country` | rakhi message for brother far away in another country |
| `raksha-bandhan-shayari-2026-hindi-english` | raksha bandhan shayari 2026 hindi english |
| `raksha-bandhan-quotes-in-marathi` | raksha bandhan quotes in marathi |

**Cannibalisation is the primary risk in this batch, not competitors.** The keyword sheet is
nearly exhausted of distinct intents, so five of these ten keywords were sourced fresh and the
other five were selected specifically because they are *not* variants of the 19 above. If your
draft starts becoming a second version of an existing post, stop and say so in the audit — a
recorded overlap is acceptable, a silent one is not.

**Do not internal-link to any of those 19 slugs.** None is published; the URL 404s.

## Source rules — tightened again

Across the two previous batches, 70 distinct domains were used, but ten of them appear in two
or more posts. `drikpanchang.com` alone appears in five. To a retrieval system reading all 29
posts together, repeated domains are the content-farm signal.

**Banned outright for this batch** (used in ≥2 existing posts, or not research):
`drikpanchang.com`, `en.wikipedia.org`, `doi.org`, `pmc.ncbi.nlm.nih.gov`, `arxiv.org`,
`europepmc.org`, `journals.plos.org`, `frontiersin.org`, `cambridge.org`,
`calendar.gatech.edu`, `aclanthology.org`, `blog.whatsapp.com`, `developers.facebook.com`.

Also note: `doi.org` is banned partly because a DOI redirect **hides the real publisher domain
from the dedup count**. Always cite the publisher's own URL.

Within this batch: no URL may repeat, and no domain may appear in more than **two** posts.
Before writing your JSON, list the `sources` already present in sibling files in
`content/batches/2026-08-19-rakhi-3/blogs/` and pick around them. Prefer a domain that appears
in none of the 29 posts.

**At most one** generic context statistic (PIB / TRAI / Census / MEA) — and if a sibling has
taken it, you get zero. Search the *phenomenon*, not the keyword.

## Competitors — do not cite, link, or mirror

Read `references/competitors.md`. Across all three batches the rakhi SERP has been almost
entirely competitors: igp.com, fnp.com, floweraura.com, archiesonline.com, rakhibazaar.com,
giftlaya.com, chocomanualart.com, caratlane.com, nrirakhi.com, giboxonline.com, photojaanic.com,
vokka.in, scoopwhoop.com, mynameart.com, mynamepix.com, thefestivalwishes.com,
createcustomwishes.com, wishesframes.com, canva.com, adobe.com (Express templates), zazzle.com,
funkypigeon.com, flexclip.com, capcut.com, pureshayari.com, theindianshayaris.com,
shayarimasti.com, heartfullines.com, supportmeindia.com, festivalwishhub.in, sheetwa.com,
firstcry.com, bestmessage.org, seminarsonly.com, angiehomes.co, cultureally.com.
Analyse them in Phase 1; cite none.

## First-party data

`content/facts.md`, generated 2026-08-18 — cite the lines verbatim including
"measured 2026-08-18". **Do not re-run `npm run facts`.** Today is 2026-08-19.

Two limitations you must respect and state rather than paper over:

1. There is **no rakhi-specific first-party fact**. Rakhi is not among the 13 page types, so
   no per-template rakhi number exists. Do not imply one.
2. The facts are platform-wide. They pass the subject test for *"making and sharing a
   personalised page"* but fail the swap test across the batch. Use them for what they prove,
   and say so in `honestAssessment`.

Use **at least 3**, with **at least 2 inside the first 150 words**.

## Strapi targeting

- `categorySlug` — exactly one of: `digital-gifts-romance`, `milestone-birthdays`,
  `modern-romance`, `family-and-continuity`, `big-fat-weddings`, `festive-beats`,
  `say-sorry-beautifully`, `miss-you-across-miles`, `virtual-bouquets`.
  Running split across the 19 existing posts is heavily `festive-beats`; prefer
  `family-and-continuity` where the post is about the relationship rather than the festival.
- `templateUrls` — only URLs from `TEMPLATE_LINKS` in `app/lib/prompt.ts`, absolute
  `https://subhsandesh.in/...`. The only rakhi template is
  `https://subhsandesh.in/happy-rakshabandhan-to-brother`, and it is written **brother-first** —
  say so plainly if your post is addressed to or about a sister.

## Files you own — and only these

- `content/batches/2026-08-19-rakhi-3/blogs/<your-slug>.json`
- `content/batches/2026-08-19-rakhi-3/research/<your-slug>.md`

Do not touch `batch.json`, another slug's files, `content/facts.md`, or anything in the two
previous batch directories.

**Scratch files must be named `<your-slug>-<purpose>.md`.** The scratchpad is shared; a bare
`body.md` will be silently overwritten by another keyword's draft.

## Non-negotiables (the ones most often missed)

- Direct answer in the **first 150 words**, containing **two first-party numbers**.
- Body **1,500–1,800 words** *excluding* FAQs. Count with a plain whitespace split — drafts in
  this project routinely land 300–600 words over on the first pass, so check before you assemble.
- FAQs live in `article.faqs` and the FAQPage JSON-LD **only** — never in `contentMarkdown`.
  8–12 of them.
- One comparison table with real values, 3–5 rows, at least one column first-party.
- Every H2 carries a specific number, date, price or named source.
- **Verify every Wikidata QID against the Wikipedia API.** Guessed QIDs have been wrong every
  single time they were checked in this project.
- `auditReport.passed` and `failed` must be **disjoint** and together cover **all 50** checklist
  items, using the checklist's strings verbatim. Assert both conditions before writing.
- Fetch every source and verify the number in the source text. If a page 403s, say so and do not
  cite it. Never cite from a search snippet.
- Any non-English line you publish must be idiomatic, with transliteration and a gloss. Drop
  what you cannot vouch for and report how many you dropped.
- Raksha Bandhan 2026 is **Friday 28 August 2026**. It is a fact-check, not a citation: keep it
  out of `sources` unless the post actually states a muhurat time.
- Flag failures; never silently fix or drop a checklist item. Never claim the post will rank.
