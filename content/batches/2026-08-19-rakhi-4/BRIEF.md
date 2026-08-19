# Batch brief — 2026-08-19-rakhi-4

Shared constraints for every blog in this batch. Read this **after** the skill file
(`.claude/skills/subhsandesh-blog/SKILL.md` + everything in `references/`) and treat it as an
addition to the skill, never a replacement. All paths relative to `blog-automation/`.

## What this batch is

The user's keyword sheet (`rakhi-keywords-2026-08-13.xlsx`) holds 61 keywords. Checked against
`2026-08-13-rakhi`, `2026-08-18-rakhi-2`, `2026-08-19-rakhi-3` and this directory: **26 are already
written, 35 are absent.** Of the absent, 20 are gate-failed in the sheet itself and are being
skipped. The remaining **15 are attemptable, and this batch writes the top 10 by priority score.**

All 10 slugs verified free in Strapi.

## THE CENTRAL PROBLEM: every keyword here has a sibling already written

These 10 are the sheet's leftovers, which means each one sits in a cluster where a post already
exists. **Your single most important job is to be genuinely different from your sibling, not just
differently worded.** The table below is not optional context — it is your assignment.

| Your keyword | Sibling already written | What the sibling OWNS (do not repeat) | YOUR mandated differentiator |
|---|---|---|---|
| happy raksha bandhan wishes with name | `raksha-bandhan-wishes-with-name-and-photo`, `make-raksha-bandhan-card-online-with-name`, `write-name-on-happy-raksha-bandhan-photo` | JPG-vs-link argument; the creation walkthrough; text legibility and contrast | **Name without photo.** The grammar of putting a name into a wish: where it goes in the sentence, nickname vs full name vs relation-word, the visible mail-merge seam, name in Devanagari vs Latin, and wishes addressed to two siblings at once |
| rakhi wishes with brother name and photo edit | same C02 trio | as above | **The word "edit".** Iterating an existing wish: what to change and in what order, keeping an editable master vs a flattened export, producing one design for several brothers with different names, and what to do after you have already sent something wrong |
| rakhi 2026 custom photo wishes card maker online | same C02 trio | as above | **Choosing the tool, and what "2026" changes.** A pre-flight checklist for any online maker: does it export, does it watermark, does the link expire, can you edit after sending, does it demand a signup — applied honestly to SubhSandesh too |
| personalised raksha bandhan card with name and photo | `personalised-raksha-bandhan-card-with-name` | printed-vs-digital; India Post transit standards | **Photo selection for a card.** Which photo, consent for using a childhood photo, resolution for print vs screen, card aspect-ratio cropping, and when a photo makes a formal card worse |
| virtual raksha bandhan celebration ideas | `celebrate-raksha-bandhan-online-long-distance`, `how-to-tie-rakhi-virtually-on-video-call` | the ideas listicle; the two-person ritual procedure | **The group case.** Three or more households on one call: who hosts, what works with eight people that fails with two, a family spread across timezones, and what breaks at scale |
| long distance rakhi celebration ideas | same C05 pair | as above | **Objects and synchronisation.** Posting the materials ahead so both houses have the same thali, running the same ritual at the same hour in two places, shared albums and playlists, and the celebrate-twice pattern |
| rakhi wishes to brother who is far away | `raksha-bandhan-wishes-for-long-distance-brother`, `rakhi-message-for-brother-far-away-in-another-country` | per-country segmentation and the IST timing table; years-away segmentation and the "when are you coming home" question | **Rewriting as craft.** Why "miles apart but close at heart" is dead language, present-tense versus nostalgic framing, and before/after pairs turning a generic wish into a specific one |
| 25 raksha bandhan wishes for brother who lives far away | same C06 pair | as above | **Honour the number.** 25 genuinely distinct originals on a real taxonomy (not sentiment buckets), each labelled with when to send it, plus why most "25 wishes" lists are 25 versions of one wish |
| rakhi messages for sister from brother | `happy-raksha-bandhan-wishes-for-sister-from-brother`, `happy-raksha-bandhan-replies-to-sister` | a brother initiating a wish; replying to what she sent | **The brother who finds this hard to write.** What to send when you are not a words person: the shortest defensible message, an action instead of a sentence, and why overcorrecting into a paragraph stops sounding like you. **HIGHEST cannibalisation risk in the batch — say so in your audit** |
| raksha bandhan message for brother in marathi | `raksha-bandhan-wishes-for-brother-in-marathi`, `raksha-bandhan-quotes-in-marathi` | brother-directed Marathi wishes; the तू/तुम्ही/आपण register rule, speaker-gender verb marking, Devanagari conjuncts and the eyelash ऱ | **Message, not wish — and Maharashtra's own rakhi.** A sent message with a reply expected rather than a greeting line: opening and closing conventions in a Marathi text, plus नारळी पौर्णिमा (Narali Purnima) which falls on the same day in coastal Maharashtra and which neither sibling post mentions |

**If your draft starts becoming a second version of its sibling, stop and say so in
`auditReport.failed` and in `honestAssessment`.** A recorded overlap is an acceptable outcome. A
silent one is not — it costs the user real traffic by splitting it across two of their own pages.

## Rakhi 2026 facts every post shares

- Raksha Bandhan 2026: **Friday 28 August 2026**.
- Treat the date as a **fact-check, not a citation** — no domain cap, and keep it out of `sources`
  unless the post actually states a muhurat time. If you state a muhurat, fetch and cite a source
  you actually read. `drikpanchang.com` is banned.
- The Friday is usable: it puts the festival against a working day and creates a weekend after it.

## Product reality — state it honestly

The only rakhi template in `TEMPLATE_LINKS` (`app/lib/prompt.ts`) is
`https://subhsandesh.in/happy-rakshabandhan-to-brother`, and it is written **brother-first**. For a
sister-directed post, say that plainly. Use `https://subhsandesh.in/templates` for the gallery.
Never invent a slug — there is no `/rakhi` URL.

## First-party data

`content/facts.md`, generated **2026-08-19** — cite lines verbatim including "measured
2026-08-19". Do **not** re-run `npm run facts`.

Two limits to state rather than paper over:
1. **No rakhi-specific first-party fact exists.** Rakhi is not among the 13 page types. Do not imply one.
2. The platform-wide figures pass the subject test for *"making and sharing a personalised
   greeting"* but fail the swap test across the batch. Say so in `honestAssessment`.

Use **at least 3**, with **at least 2 inside the first 150 words**.

## Source rules

Across the 36 posts already written (29 rakhi + 7 diwali) roughly **140 distinct domains** are in
use. Repetition across that corpus is the content-farm signal.

**Banned outright:** `drikpanchang.com`, `en.wikipedia.org`, `doi.org`, `pmc.ncbi.nlm.nih.gov`,
`arxiv.org`, `europepmc.org`, `journals.plos.org`, `frontiersin.org`, `cambridge.org`,
`calendar.gatech.edu`, `aclanthology.org`, `blog.whatsapp.com`, `developers.facebook.com`,
`newsonair.gov.in`, `w3.org`, `unicode.org`, `learn.microsoft.com`, `hbs.edu`, `archive.org`.

`doi.org` is banned partly because a DOI redirect **hides the real publisher domain** from the
dedup count. Always cite the publisher's own URL.

**Before choosing sources, read the `batchMeta.sources` of your named sibling posts and of any
sibling already in `content/batches/2026-08-19-rakhi-4/blogs/`.** No URL may repeat; no domain in
more than two posts in this batch. Prefer a domain used in none of the 36 existing posts.

**At most one** generic context statistic (PIB / TRAI / Census / MEA) for the whole batch. Search
the *phenomenon*, not the keyword.

## Competitors — analyse, never cite

Read `references/competitors.md`. This SERP is almost entirely competitors: igp.com, fnp.com,
floweraura.com, archiesonline.com, rakhibazaar.com, giftlaya.com, nrirakhi.com, giboxonline.com,
photojaanic.com, vokka.in, scoopwhoop.com, mynameart.com, mynamepix.com, thefestivalwishes.com,
createcustomwishes.com, wishesframes.com, canva.com, adobe.com Express, zazzle.com, funkypigeon.com,
flexclip.com, capcut.com, bestmessage.org, nestasia.in, bigsmall.in, indiatvnews.com,
urvijadigigrowth.com, textintoimages.com, firstcry.com.

Note: two agents in earlier batches found my SERP predictions **wrong**. Run your own Phase 1 and
report what actually ranks, including how many results answer the query literally.

## Files you own — and only these

- `content/batches/2026-08-19-rakhi-4/blogs/<your-slug>.json`
- `content/batches/2026-08-19-rakhi-4/research/<your-slug>.md`

Do not touch `batch.json`, another slug's files, `content/facts.md`, or any other batch directory.

**Scratch files must be named `<your-slug>-<purpose>.md`** — the scratchpad is shared and a bare
`body.md` gets overwritten by another keyword's draft. This has happened in this project.

## Strapi targeting

- `categorySlug` — one of exactly: `digital-gifts-romance`, `milestone-birthdays`, `modern-romance`,
  `family-and-continuity`, `big-fat-weddings`, `festive-beats`, `say-sorry-beautifully`,
  `miss-you-across-miles`, `virtual-bouquets`. **The corpus is heavily `festive-beats` already —
  prefer `family-and-continuity` wherever the post is about the relationship rather than the
  festival.**
- `templateUrls` — 1–3, only from `TEMPLATE_LINKS`, absolute `https://subhsandesh.in/...`.

## Non-negotiables (the ones this project keeps missing)

- Direct answer in the **first 150 words**, containing **two first-party numbers**.
- Body **1,500–1,800 words** *excluding* FAQs, by a plain whitespace split. **Check before you
  assemble.** Prose-heavy drafts here land 300–600 words OVER; list-heavy and script-heavy drafts
  land UNDER. Both have happened repeatedly.
- FAQs in `article.faqs` and the FAQPage JSON-LD **only** — never in `contentMarkdown`. 8–12.
- One comparison table, 3–5 rows, real values, at least one column first-party.
- Every H2 carries a specific number, date, price or named source.
- **Verify every Wikidata QID against the Wikipedia API.** Guessed QIDs have been wrong *every
  single time* anyone checked in this project — five were caught and corrected in the last batch alone.
- `auditReport.passed` and `failed` must be **disjoint** and together cover **all 50** checklist
  items verbatim. Assert both before writing. **Do not invent a failure for an item that literally
  passes** — put that nuance in `honestAssessment` instead.
- Fetch every source and verify the number in the source text. If a page 403s, say so and do not
  cite it. Never cite from a search snippet.
- Any non-English line must be idiomatic, with transliteration and a gloss. Drop what you cannot
  vouch for and report how many you dropped.
- Flag failures; never silently fix or drop a checklist item. Never claim the post will rank.
