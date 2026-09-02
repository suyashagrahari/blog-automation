# Batch brief — 2026-09-02-love-gf-3 (wave 3 of the love-gf cluster)

Read this **before** Phase 1. It carries the batch-level facts no single agent can
see, and three rules that were learned by getting them wrong in waves 1 and 2.

## Why these ten keywords, and not the shortlist's leftovers

The 2026-08-31 love-gf shortlist is **exhausted**. Waves 1 and 2 wrote 20 posts
that between them target all 30 keywords — 12 of the 13 apparent "leftovers" are
already named in an existing post's `article.keywords` as secondaries, and the
13th (`love quiz game for girlfriend`) scored `expected_clicks = 0` for a blog
because its SERP is 100% product tools with zero editorial results.

So wave 3 runs on newly harvested keywords, deduped against **935 live Strapi
articles and all 20 written posts** (Jaccard on slug+title tokens, `< 0.45`), with
demand from three fresh India-geo autocomplete harvests in
`content/keywords/2026-09-02-love-gf-3/`.

`prefix_hits` below is **ordinal demand** — how many distinct prefixes surfaced
the phrase. It is never a monthly search volume. Do not print it as one.

| # | Keyword | Demand | Live on-site | Note |
|---|---|---|---|---|
| 1 | love letter for girlfriend in malayalam | 25x | 0 letter pages | 2 sorry/miss-you pages only |
| 2 | love letter for girlfriend in assamese | 21x | 0 | nothing live in Assamese at all |
| 3 | love letter for girlfriend in punjabi | 20x | 0 letter pages | 6 sorry/miss-you/festival pages |
| 4 | love letter for girlfriend in nepali | 15x | 0 | nothing live in Nepali at all |
| 5 | never have i ever questions for couples | 23x | **0 game pages** | whole axis empty |
| 6 | 20 questions game for couples | 23x | **0 game pages** | whole axis empty |
| 7 | would you rather questions for couples | 13x × ~12 variants | **0 game pages** | widest variant spread in the harvest |
| 8 | how to make your girlfriend feel special online | 24x | 0 | nearest is `miss-you-message-to-make-her-feel-special` |
| 9 | virtual date night ideas for couples | 19x | 1 mechanic page | `how-to-construct-a-virtual-date-itinerary-page-link` |
| 10 | anniversary surprise for girlfriend online | 8x | 38 anniversary pages | **weakest of the ten — say so if it stays weak** |

**The two structural openings**, both verified against the live blog:

1. **Love letters in Indian languages.** The language axis is populated for
   *sorry* (21 pages) and *miss you* (21 pages) and festivals — and has **zero**
   love-letter pages. The 2026-08-31 run measured these SERPs at 6–8 weak results
   out of 10 (Pinterest, 2014-era blogspots, Wikipedia film articles colliding on
   the entity name). The one competitor already there, `ai.tenorshare.com`, is
   thin AI-generated sample text.
2. **Couple games.** Zero live game pages, three live quiz pages. `/love-gf`
   *plays* a Love Quiz and Truth-or-Dare inside the page, which is the only real
   differentiator against the entrenched list sites — and it is the same one that
   justified wave 2's truth-or-dare post. Use it, or admit the post is a list.

Odia (13x) is queued for wave 4, along with the Assamese/Odia long-tails
(`…copy and paste`, `…text`, `short…`) that the harvest surfaced.

## Every post must do these

**Internal links — non-negotiable for this cluster.** Every post links **both**
`https://subhsandesh.in/love-gf` **and** `https://subhsandesh.in/darling`, with
descriptive anchor text, placed *after* the section that earns them — never in the
opening paragraph. Add 0–2 more from `TEMPLATE_LINKS` in `app/lib/prompt.ts` only
where genuinely relevant (`/anniversary-gf` for #10, `/missyou-gf` for #8, and so
on). Never invent a slug. Total internal links: 2–4.

**First-party facts.** `content/facts.md`, regenerated **2026-09-02**, 17 facts.
At least 3 per post, at least 2 inside the first 150 words. The most load-bearing:
3,377 pages created since 2026-03-12 across 15 types; `/love-gf` is #1 at 987
pages (29.2%) and most-viewed at 14,607 views (35.2% of 41,486); `/darling` is #4
at 349 (10.3%); 42.8% of creators password-protect before sharing; 50.3% of views
are on a phone; 99.5% of started pages get published; median 7.2 hours from first
save to last edit on `/love-gf` (n=987).

**The Pricing block in `facts.md` is EMPTY.** No post may state or imply that
SubhSandesh is free, cheap, paid, or priced at anything. Not in the body, not in
an FAQ, not in the metaDescription, not in a table cell. If the keyword pulls
toward cost, answer the parts you *can* support and record the gap in the audit.

**Word band 1,500–1,800** in `contentMarkdown`, excluding FAQs, measured by
**plain whitespace split** (`md.split(/\s+/).filter(Boolean).length`). This is the
authoritative measure — `wordCount()` in `app/lib/batches.ts` strips markdown and
reads *higher*, and trusting it once nearly cost three wave-2 posts real content.

**FAQs: 8–12, in `article.faqs` and the FAQPage JSON-LD only.** Never inside
`contentMarkdown` — Strapi renders `faqs` as its own section, so a body FAQ
heading shows every question twice.

**Category** — pick one slug from the 10 live ones:
`modern-romance`, `digital-gifts-romance`, `miss-you-across-miles`,
`say-sorry-beautifully`, `virtual-bouquets`, `family-and-continuity`,
`milestone-birthdays`, `big-fat-weddings`, `festive-beats`, `indian-festivals`.
For this batch `modern-romance` fits the letters and games; `digital-gifts-romance`
fits #9 and #10.

## Sources — read `USED-SOURCES.md` in this directory first

96 URLs are already spent across waves 1 and 2. **Cite none of them.** These
domains are at or past 3 earlier posts and are effectively closed to you:
`pmc.ncbi.nlm.nih.gov` (6), `aclanthology.org` (6), `arxiv.org` (5),
`frontiersin.org` (5), `journals.plos.org` (3), `doi.org` (3). Go to DOAJ, CORE,
Shodhganga, SSRN, JSTOR Open, eGyanKosh, OpenAlex, Semantic Scholar,
`ijoc.org`-style open journals, university repositories — the field is wide.

4–6 sources. At least 2 pass the **subject test** (about the language, the game
format, mediated intimacy, ritual, distance — not "about India" or "about the
internet"), of which **at least 1 is peer-reviewed and open-access**. At most 1
generic context statistic. Wikipedia 0–2, entity disambiguation only. Fetch every
source and verify it says what you claim.

**Never cite or link a competitor**: `yourlovepage.com`/`.online`,
`lovelydesign.in`, `lovepage.io`, `justmeantforyou.com`, `lovetales.ai`,
`syncwithlove.com`, `couplesquizgame.com`, `quiz-couple.com`, `lovebae.app`,
`lovify`, `truthordarequiz.com`, `xdares.com`, `weblium.com`,
`ai.tenorshare.com`. They are positioning intel, not sources.

### The source cap counts POSTS, not URLs

A URL may appear in at most 2 posts in this batch; a domain in at most 3.
`arxiv.org` three times inside *your* post is **one** post against the cap, not
three.

In wave 1, four agents each reported a cap breach and **all four were miscounts** —
they had counted URL occurrences. One cut a verified preprint it was entitled to
keep; another merged an H2 to route around a constraint that did not exist. Then a
real breach happened anyway, because the fourth agent added a domain after the
third had already checked and passed.

So: you may prefer a different domain when a sibling already looks close to its
cap, but **never drop, swap or restructure around a suspected breach yourself.**
Record it in the audit, name the URL you would give up, and let the orchestrator —
who is the only one who can see the finished batch — decide. Escalate, don't patch.

## Never claim more than the source says

Wave 2's Phase 8 pass caught a post asserting its central source was "accepted at
ACL SRW 2026". The PDF names no venue and arXiv's Comments field is empty — the
venue was invented, inside a post whose own audit reported 49 of 50 items passing.
Also caught: two over-reached source claims, a dropped consonant in a Tamil
romanisation, and a source dated 2006 in one sentence and 2007 in another.

State only what the paper states. Where you paraphrase a finding, keep the
paraphrase narrower than the claim, not wider.

## If you write a language post

You are almost certainly not a native speaker, and neither is the orchestrator.

- Give both the native script **and** a romanisation, and keep them consistent
  with each other character by character.
- Get the register right and say which one you chose. Second-person address
  differs by language (Punjabi ਤੂੰ vs ਤੁਸੀਂ, Malayalam നീ vs താങ്കൾ, Assamese তই
  vs তুমি vs আপুনি, Nepali तँ vs तिमी vs तपाईं) and the formal form to a
  girlfriend can read as cold or as parody. Name the form you used and why.
- **List every line you are unsure of** in `auditReport.honestAssessment`, by
  line. Eight such flags is a better outcome than zero. Native review is queued
  for the whole language set and your flags are what makes it possible.
- Do not transliterate a fixed phrase from memory. Verify it, or drop it.

## Mechanics of `/love-gf` and `/darling`, so nothing gets invented

`/love-gf` (`client/app/(templates)/love-gf`): four tabs — Cover, Games, Gallery,
Music. The letter is typed out on the cover; the Games tab holds a **Love Quiz**, a
**Truth or Dare** round and an **"Our Story"** history; the Gallery holds photos;
Music plays a background track; floating hearts; an optional password gate before
sharing. `/darling` is the darker, more dramatic romantic page for a partner.

## Housekeeping

- **Namespace every scratch file by slug**: `<slug>-<purpose>.md`. The scratchpad
  is shared across concurrent agents — in the 2026-08-13 batch three agents each
  wrote `scratchpad/body.md` and overwrote one another mid-draft.
- Write `content/batches/2026-09-02-love-gf-3/blogs/<slug>.json` and
  `content/batches/2026-09-02-love-gf-3/research/<slug>.md`. Touch no other file.
- Every one of the 10 slugs was checked against the 935 live articles and is free.
- Copy each `publish-checklist.md` item string **byte-verbatim**. Assert
  `passed ∩ failed = ∅` and `|passed| + |failed| = 50` before you finish.
- Flag failures; never silently fix or drop a checklist item.
