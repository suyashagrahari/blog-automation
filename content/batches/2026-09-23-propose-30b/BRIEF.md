# BRIEF — batch `2026-09-23-propose-30b`

Binding for every agent in this batch. Where this file and a general reference
disagree, **this file wins**. Read it before Phase 1.

This is **wave 3** on the propose/proposal territory. Wave 1 is
`content/batches/2026-09-17-propose-12` (12 posts), wave 2 is
`content/batches/2026-09-17-propose-30` (30 posts). Both are committed. You are not
rewriting them and **you must not duplicate them** — see "Cannibalisation" below,
which is the single biggest risk in this wave.

---

## The two link rules — non-negotiable, both of them

1. **`/proposal` is mandatory in every post.** `https://subhsandesh.in/proposal` is
   "Will You Marry Me? — a proposal scrapbook of your story, ending in a YES button
   that grows every time they dodge it". Link it with descriptive anchor text,
   **after** the section that establishes why the reader would want it.

2. **Every post must also offer a genuine ALTERNATIVE template, with the reason it
   suits that reader better.** Pick honestly:
   - `/apology-dashboard` — proposing after a fight, or asking again after a no
   - `/love-gf` — it is "will you be my girlfriend", not marriage
   - `/date-invitation` — asking someone out, not proposing
   - `/court-of-love` — a playful couple who would enjoy the bit
   - `/bouquet-gf` — they want to send flowers, not ask a question
   - `/train-ticket` — long distance, and the journey is the story

   **If none genuinely fits, say which is closest and why it is still not right.**
   Only slugs in `TEMPLATE_LINKS` (`app/lib/prompt.ts`) exist; an invented one 404s.

---

## Phase 0 — the facts you may use (REGENERATED 2026-09-23 — THE RANKING CHANGED)

`content/facts.md`. At least 3 per post, at least 2 inside the first 150 words.

**READ THIS CAREFULLY. The platform's #1 template changed since wave 2.** Waves 1 and 2
say `/love-gf` is #1 at 1,138 pages / 24.9%. **That is now out of date and you must not
repeat it.** Today's figures:

- 5,061 personalised pages created since 2026-03-12, across **20** page types
- **#1 is now `/apology-dashboard` — 1,347 pages, 26.6% of everything created**
- **#2 is `/love-gf` — 1,173 pages, 23.2%**; still the most-*viewed* at 16,902 views, 30.1%
- #3 `/bouquet-gf` — 1,163 pages, 23.0%
- **38.7% of creators password-protect the page before sharing it (1,961 of 5,061)**
- **91.2% of started pages are published and shared (4,615 of 5,061)**
- 48.4% of views are on a phone (27,185 of 56,152); 56,152 total views; 11.1 avg views/page
- 3,769 registered creators; 1.34 pages per creator
- **Median first-save → last-edit gap 2.4 hours — sampled on `/apology-dashboard`, n=1,348**
  (waves 1–2 quote 6.4 hours sampled on `/love-gf`; that sample is gone, do not use it)

Copy figures from `content/facts.md`, not from a sibling post and not from this brief
if the two ever disagree — `factsUsed` must be **verbatim** from `content/facts.md`.

### The honesty constraint on every one of those numbers

**There is still no proposal-specific data.** A read-only probe of the `proposalpages`
collection remains refused by this machine's production-read policy.

- **No figure may be attributed to proposal pages.** Every SubhSandesh number is either
  platform-wide across all 20 page types, or sampled on the named template, and **the
  body prose must say which** — not only the audit.
- The **pricing block in `content/facts.md` is still empty** (third batch running).
  You may not state or imply a price, a free tier or a paid tier. The verifier blocks
  "for free", "free tier", "no cost", "₹", "pricing" and friends. Watch for phrasings
  that read as a price claim — a wave-2 post had to cut "length is free".
- Record both in `batchMeta.structuralLimitations`.

**The Raksha Bandhan lead-time block in `facts.md` is OUT OF BOUNDS for this batch.**

---

## Cannibalisation — the defining risk of wave 3

42 posts already exist in this territory and the live corpus holds 905 articles, 46 of
them proposal pages. Most of your keywords are **near neighbours of something already
written**. A near-duplicate does not just fail to rank — it splits the cluster and
drags down the page that was working.

**Before you write a line, read the sibling post named in your task prompt** and state
in your research brief exactly how yours differs in intent, structure and sources. If
you cannot name a real difference, **say so in your report rather than writing a
duplicate.** That is a legitimate outcome and it is what your handback is for.

The distinctions this wave runs on, stated once:

- **quotes ≠ wishes ≠ messages ≠ shayari.** A *quote* is a line you copy. A *wish* is
  addressed and sent, often to someone you are not proposing to. A *message* is typed
  to one named person and sent today. *Shayari* is a poetic form.
- **advice ≠ lines.** "How to propose X" is a method. "Propose X lines/quotes" is
  copy-text. Never let one become the other.
- **language pages are not translations of each other.** Different pronoun systems,
  different registers, different incumbents.
- **product pages differ by the ASK, not by the synonym.** "Marriage proposal maker",
  "love proposal maker" and "proposal website" are the same tool; the only honest
  differentiator is *who is asking whom, and for what*. If your angle is only a synonym
  swap, say so in your handback.

**Cross-link instead of competing.** Where a sibling covers the adjacent case, link it
by its slug rather than re-covering it.

---

## Verified 2027 dates

- **Rose Day — Sunday 7 February 2027** opens Valentine week
- **Propose Day — Monday 8 February 2027**, the *second* day, not the first
- **Valentine's Day — Sunday 14 February 2027** closes it
- Valentine week is **eight** dated days, not seven.

Propose Day 2026 fell on a **Sunday**; 2027 is a working Monday. Verify the weekday
yourself with `date` before printing it.

---

## Competitors — never cite, link, paraphrase or mirror

Per `references/competitors.md`, plus: **bondlyfe.com**, bemyval.co,
yourlovepage.online / .com, pixeryhub.com, momentocard.in, ai.mobirise.com,
giftsqr.com, mewtrucard.com, greetingsisland.com, paperlesspost.com, and the Indian
gift retailers FNP, FloweraAura, GiftaLove, OyeGifts.

A wave-2 post was found to be genuinely derivative — four of six sections mapped onto
an incumbent's recipient list — and had to be re-cut. **Organise by something the
incumbent does not use.**

---

## Do not claim what you did not measure

Wave 2's main defect class. Five posts asserted things like *"most ranking pages still
say 2025"*, *"every incumbent leads with free"*, *"no competitor covers X"* — for
SERPs that were **never measured**. The audits still read green; the batch verifier
cannot see this.

- Only 11 India-served SERPs were ever measured, on 2026-09-16:
  `content/keywords/2026-09-16-propose-100/serps.md` and `competitor-map.md`.
- **If you did not fetch a page or see a SERP, do not describe what is on it.** Say
  what is independently verifiable instead (a calendar fact, a cited study).
- If your Phase 1 is inherited rather than freshly measured, **record that in
  `structuralLimitations`** and never describe a position as current.

---

## Sources — caps are per batch, and 194 URLs are already spent

```
node content/batches/2026-09-23-propose-30b/capcheck.mjs
```

Run it before choosing sources and again before finalising. It prints the **194 URLs
already used in waves 1 and 2 — all banned** — plus domains at the 3-post cap, domains
with one slot left, and URLs at the 2-post cap. **It counts POSTS, not occurrences**;
trust it over your own tally, which has been wrong twice.

- 4–6 sources each. **≥2 must pass the subject test**. **≥1 peer-reviewed open access.**
- **≤1 generic context statistic** per post. Wikipedia 0–2, entity disambiguation only.
- A URL in at most 2 posts, a publisher domain in at most 3. `doi.org` is a resolver —
  count the **resolved** publisher. **`europepmc.org` and `pmc.ncbi.nlm.nih.gov` are the
  same publisher; count them together.**
- A domain used in waves 1–2 may be reused, but the **paper must be different**.

**Search budget.** WebSearch is capped at **200 calls for the whole session, shared
across all 30 agents**. Budget **no more than 5**: SERP pass first, then research. When
it is gone it returns a budget error — do not retry. Fall back to:

```
node content/batches/2026-09-23-propose-30b/findpapers.mjs "your phenomenon query"
```

Crossref + Europe PMC, both confirmed working. **Crossref indexes predatory journals
(IJSR, IJRASET and similar) — indexing is not peer review, judge the venue.** OpenAlex
and Semantic Scholar rate-limit (429) from this machine.

**Search the phenomenon, not the keyword.** Your lane is in your task prompt. If no
topical research exists, **say so and name the terms you tried** — that is a real
finding. Do not pad with another government statistic.

**Publisher bot-blocking is expected** (SAGE, Wiley, Springer, ScienceDirect, MDPI,
tandfonline, nature.com). Use a green OA copy or Crossref/Europe PMC for the abstract,
and **disclose in the audit that the full text was not read**. Cite only what you read.
`publishedDate` is when the **source** was published, never when you fetched it.

---

## The audit arithmetic

`references/publish-checklist.md` has **50** items.

- `passed ∩ failed = ∅`, and `|passed| + |failed| = 50`. Exactly.
- Strings **byte-verbatim**. Items wrap across lines — an item runs from its `- [ ]`
  marker to the next marker, blank line or heading, whitespace-collapsed. Do not
  truncate at the first newline.
- **Anything that is not a checklist item does not belong in `failed`.** Batch
  limitations go in `batchMeta.structuralLimitations`.
- **Do not mark an item `passed` unless it genuinely passes.** A wave-2 post had an H2
  with no number or named source sitting in `passed`; a remediator caught it.
- `page-structure.md` mandates **four fields in fixed order per H3, not one unbroken
  paragraph**, and the Block 1 answer fits in **three** sentences. So
  "Paragraphs 2–3 sentences throughout" is achievable — nine wave-2 posts wrongly
  recorded it as an unfixable conflict. Split the blocks.

---

## Mechanics

- Batch id `2026-09-23-propose-30b`. Write **only your own two files**:
  `content/batches/2026-09-23-propose-30b/blogs/<slug>.json` and
  `content/batches/2026-09-23-propose-30b/research/<slug>.md`.
- **Scratch files must be named `<slug>-<purpose>.md`.** The scratchpad is shared.
- `templateUrls`: 1–3, **relative paths** (`/proposal`), never absolute.
- `categorySlug`: `modern-romance` for advice / message / quotes / wishes posts,
  `digital-gifts-romance` for tool / card / link / website posts. Propose Day is
  Valentine week — **not** `indian-festivals`.
- **FAQs live in `article.faqs` + FAQPage JSON-LD only, never in `contentMarkdown`.**
  Body must reach **1,500–1,800 words without them** — the verifier hard-fails outside
  that range, measured on a plain whitespace split. 8–12 FAQs.
- **No FAQ question byte-identical to a body H2.** Reword the FAQ, not the H2.
- Check the slug is free:
  `https://strapi.subhsandesh.in/api/articles?fields[0]=slug&filters[slug][$eq]=<slug>`

---

## Indian-language posts — extra rules

Eleven posts here target Hindi, Marathi, Kannada, Telugu or Malayalam. The live corpus
has **zero** pages in any Indian language against 905 in English.

- Write the lines in the **actual script**, correct and idiomatic. Give each a **Roman
  transliteration** and an **English gloss**. The surrounding article prose is ENGLISH.
- **Mark the register.** तू/तुम/आप, तू/तुम्ही, and the equivalent in your language.
  Getting register wrong is the failure mode a native reader spots instantly.
- **Verify morphology against a cited linguistic source, not intuition.** Wave 2's
  Marathi agent ran a Hindi blocklist over every line and required Marathi-only
  constructions; the Bengali agent checked verb agreement against a published paradigm.
  Do the same for your language and say how in your handback.
- **Cut anything you cannot verify.** Report a ledger: drafted / published / cut, with
  the reason for each cut. Wave 2 cut 30→12 Marathi, 27→16 Hindi, 25→14 Bengali.
  **Fewer correct lines beats more shaky ones**, and a wrong line in a proposal is
  worse than no page.
- **Kannada, Telugu and Malayalam were deliberately held back in wave 2** because the
  scripts could not be verified to a publishable standard. They are in scope now on one
  condition: **ship fewer lines, verified harder.** Target 8–12 lines, not 20. If you
  cannot verify a line against a dictionary, corpus or published grammar you actually
  fetched, cut it. State in `structuralLimitations` that the lines were not reviewed by
  a native speaker.
- Do not copy lines from any competitor page, and do not reproduce copyrighted modern
  poetry or film lyrics. Public-domain material only, with verified text and attribution.
- These SERPs are an annual **February news cycle** owned by MensXP, Zee, Webdunia,
  Maharashtra Times, Loksatta, Times Now and Amar Ujala, whose authority is far above
  ours. **Target position 6–10, not 3, and say so in `honestAssessment`.**

---

## The copy-text posts — be honest about what they are

Eight posts target `propose day quotes / wishes` by recipient. The keyword run is
explicit: these are **copy-text queries with near-zero conversion** — the searcher
copies a line and leaves. The site already runs this content play at scale.

Write the genuinely best version — lines grouped by the situation they fit, each group
saying **when not to use it** — and say plainly in `honestAssessment` that the page is
a visibility asset judged on impressions, not a converting page. **Do not write a bait
page and do not claim it will convert.**

---

## Source-cap RACE — added mid-batch 2026-09-23, read this

Four agents wrote a `frontiersin.org` source concurrently and put the domain at **4
posts, over the cap of 3**. Every one of them ran `capcheck.mjs` and every run was
accurate at the time — siblings had not written their files yet. The check is not a
lock, so a clean result early in your run means nothing by the time you save.

**Two rules that actually prevent this:**

1. **Re-run `capcheck.mjs` immediately before you write your JSON**, not just when you
   choose sources. If a domain of yours is now at 3, swap it *before* saving.
2. **Avoid the crowded publishers entirely unless the paper is irreplaceable.** These
   fill first every wave and are at or near cap already:
   `frontiersin.org` · `pmc.ncbi.nlm.nih.gov` / `europepmc.org` (same publisher, counted
   together) · `journals.plos.org` · `arxiv.org` · `journals.sagepub.com` ·
   `onlinelibrary.wiley.com` · `link.springer.com` · `nature.com` · `aclanthology.org`.

   Prefer instead: **university and institutional repositories** (`*.edu`, `*.ac.uk`,
   `shura.shu.ac.uk`, `research.gold.ac.uk`, `drum.umd.edu`), **DOAJ-listed journals**,
   national library repositories, `firstmonday.org`, `ojs.aaai.org`, `usenix.org`,
   society journals, and green open-access copies. These are usually the *better*
   citation anyway — they are readable, which the paywalled ones are not.

3. `doi.org` is a resolver: count the **resolved publisher**, never `doi.org` itself.

If you genuinely cannot avoid a capped domain, say so in your handback rather than
saving over the cap — the verifier hard-fails the whole batch on it.
