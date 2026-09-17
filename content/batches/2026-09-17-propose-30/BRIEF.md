# BRIEF — batch `2026-09-17-propose-30`

Binding for every agent in this batch. Where this file and a general reference
disagree, **this file wins**. Read it before Phase 1.

This is the **second wave** on the propose/proposal territory. Wave 1 is
`content/batches/2026-09-17-propose-12` — 12 posts, already committed. You are not
rewriting it and you must not duplicate it.

---

## The two link rules — non-negotiable, both of them

1. **`/proposal` is mandatory in every post.** `https://subhsandesh.in/proposal` is
   "Will You Marry Me? — a proposal scrapbook of your story, ending in a YES button
   that grows every time they dodge it". It is the primary template for this whole
   batch. Link it with descriptive anchor text, **after** the section that establishes
   why the reader would want it — never in the opening paragraph.

2. **Every post must also offer a genuine ALTERNATIVE template, with the reason it
   suits that reader better.** This is the point of the rule, not a second link for
   the sake of it. Pick honestly:
   - `/apology-dashboard` — proposing after a fight, or asking again after a no
   - `/love-gf` — it is "will you be my girlfriend", not marriage
   - `/date-invitation` — they are asking someone out, not proposing
   - `/court-of-love` — a playful couple who would enjoy the bit
   - `/bouquet-gf` — they want to send flowers, not ask a question
   - `/train-ticket` — long distance, and the journey is the story

   **If the alternative does not genuinely fit your keyword, say which one is closest
   and why it is still not right.** An honest "none of these is what you want, here is
   what is" beats a forced link. Do not invent a slug — only `TEMPLATE_LINKS` in
   `app/lib/prompt.ts` exists, and an invented one 404s.

`verify.config.json` enforces rule 1 and the one-of list for rule 2.

---

## Phase 0 — the facts you may use (regenerated 2026-09-17)

`content/facts.md`. At least 3 per post, at least 2 inside the first 150 words.

- 4,567 personalised pages created since 2026-03-12 across 16 page types
- `/love-gf` is #1 — 1,138 pages, 24.9% of everything created; 16,362 views, 31.8% of all views
- `/apology-dashboard` is #2 — 1,118 pages, 24.5%
- `/bouquet-gf` is #3 — 1,101 pages, 24.1%
- **39.9% of creators password-protect the page before sharing it (1,822 of 4,567)**
- 92.7% of started pages are published and shared (4,234 of 4,567)
- 48.9% of views are on a phone (25,167 of 51,504); 51,504 total views; 11.3 avg views/page
- 3,481 registered creators; 1.31 pages per creator
- Median first-save → last-edit gap **6.4 hours, n=1,138, sampled on `/love-gf`**

### The honesty constraint on every one of those numbers

**There is no proposal-specific data.** A read-only probe of the `proposalpages`
collection was refused by this machine's production-read policy, in wave 1 and again
here. So:

- **No figure in this batch may be attributed to proposal pages.** Not "39.9% of
  people proposing", not "most proposal pages". Every SubhSandesh number is either
  platform-wide across all 16 page types, or sampled on `/love-gf`, and **the body
  prose must say which** — not only the audit.
- The **pricing block in `content/facts.md` is still empty.** You therefore may not
  state or imply a price, a free tier, or a paid tier. The verifier blocks "for free",
  "free tier", "no cost", "₹", "pricing" and friends. Say "without paying" only if the
  keyword forces it, and prefer to sidestep the claim entirely.
- Record both of these in `batchMeta.structuralLimitations`.

**The Raksha Bandhan lead-time block in `facts.md` is OUT OF BOUNDS for this batch.**
Different festival, n=89.

---

## Verified 2027 dates

- **Rose Day — Sunday 7 February 2027** opens the week
- **Propose Day — Monday 8 February 2027**, the *second* day of Valentine week, not the first
- **Valentine's Day — Sunday 14 February 2027** closes it

Propose Day **2026 fell on a Sunday**; the 2027 Monday genuinely narrows the usable
window, and no incumbent prints that. Four ranking incumbents still carry **2025** in
their titles. Verify the weekday yourself before you print it — a wrong date on a dated
occasion is the one error a reader will catch instantly.

---

## Competitors — never cite, link, paraphrase or mirror

Per `references/competitors.md`, plus these, found during wave 1:

- **bondlyfe.com** — sells proposal pages, ~3,000-word answer-first guides, recently
  updated, cites **zero** sources. Basic advice (timing, ask clearly, one message not a
  wall of text) is now **table stakes, not a gap**.
- bemyval.co · yourlovepage.online / .com · pixeryhub.com · momentocard.in ·
  ai.mobirise.com · giftsqr.com · mewtrucard.com · greetingsisland.com ·
  paperlesspost.com

---

## Sources — the cap is per batch and this batch is 30 posts

- 4–6 sources each. **≥2 must pass the subject test** (about *your* phenomenon, not
  "about India" or "about the internet"). **≥1 peer-reviewed and open-access** so the
  reader can actually open it.
- **≤1 generic context statistic** (PIB, TRAI, Census, MEA) per post. One is plenty.
- Wikipedia 0–2, **entity disambiguation only**, never counted as research.
- **A URL may appear in at most 2 posts; a publisher domain in at most 3.** With 30
  posts this is tight — it needs **40+ distinct domains across the batch**. Re-count
  from the sibling files in `blogs/` before you commit to a source.
- `doi.org` is a resolver, not a publisher. Count the **resolved** publisher.

### The 54 URLs already spent in wave 1 are BANNED here

Caps reset per batch, but reusing wave 1's exact citations across the same topical
cluster is what makes a site read like a content farm to a retrieval system. A **domain**
from that list may be reused; the **URL and the paper** must be different. The full list
is `content/batches/2026-09-17-propose-12/` — extract it before you search:

```
node content/batches/2026-09-17-propose-30/capcheck.mjs
```

That script prints the wave-1 banned list, every domain already at the 3-post cap,
every domain with one slot left, and every URL at the 2-post cap. **It counts POSTS,
not occurrences.** Counting URLs overstates the tally and has raised a false cap alarm
twice now — once in wave 1 and once here. Run it before you choose sources and again
before you finalise, because siblings are writing concurrently.

**Search the phenomenon, not the keyword.** Your lane is named in your own task prompt.
Festivals are under-studied; the behaviours around them are not. If no topical research
exists for your angle, **say so in the audit and name the search terms you tried** —
that is a real finding, and it usually means the angle is product mechanics rather than
a studied phenomenon. Do not pad the count with another government statistic.

**Publisher bot-blocking is expected.** SAGE, Wiley, Springer, tandfonline and
dl.acm.org return 403. Use a green open-access copy, or Crossref / OpenAlex / DOAJ for
the abstract, and **disclose in the audit that the full text was not read**. Cite only
what you actually read. Never cite from memory; never invent a statistic or a date.
`publishedDate` is when the **source** was published, never when you fetched it.

---

## The audit arithmetic — read this, three agents got it wrong last time

`references/publish-checklist.md` has **50** items.

- `passed ∩ failed = ∅`, and `|passed| + |failed| = 50`. Exactly.
- Checklist strings must be **byte-verbatim** from the file. Items wrap across lines —
  an item is everything from its `- [ ]` marker until the next marker, blank line or
  heading, whitespace-collapsed. Do not truncate at the first newline.
- **Anything that is not a checklist item does not belong in `failed`.** The
  no-proposal-specific-data limitation and the empty-pricing-block limitation go in
  `batchMeta.structuralLimitations`, **never** in `failed`. Putting them in `failed`
  breaks the sum and the verifier rejects the file.

---

## Mechanics

- Batch id `2026-09-17-propose-30`. Write **only your own two files**:
  `content/batches/2026-09-17-propose-30/blogs/<slug>.json` and
  `content/batches/2026-09-17-propose-30/research/<slug>.md`.
- **Scratch files must be named `<slug>-<purpose>.md`.** The scratchpad is shared
  across concurrent agents; unprefixed names have silently overwritten each other.
- `templateUrls`: 1–3, **relative paths** (`/proposal`), never absolute. Absolute URLs
  fail last-segment matching and silently drop the related templates.
- `categorySlug`: `modern-romance` for advice / how-to / message posts,
  `digital-gifts-romance` for tool / card / link posts. Propose Day is Valentine week —
  **not** `indian-festivals`.
- **FAQs live in `article.faqs` + FAQPage JSON-LD only, never in `contentMarkdown`.**
  Strapi renders `faqs` as its own section, so an FAQ heading in the body shows every
  question twice. The body must reach **1,500–1,800 words without them**. 8–12 FAQs.
- **No FAQ question may be byte-identical to a body H2.** Reword the FAQ, not the H2.
- Follow `references/page-structure.md`, `meta-and-titles.md`, `tone-and-links.md`,
  `structured-data.md` and `article-json-schema.md` exactly.
- Check the slug is free before settling on it:
  `https://strapi.subhsandesh.in/api/articles?fields[0]=slug&filters[slug][$eq]=<slug>`

---

## Indian-language posts — extra rules

Eight posts in this batch target Hindi, Marathi or Bengali keywords. The live corpus
has **zero** pages in any Indian language against 905 English ones, which is why they
are here.

- Write the **actual lines in the actual script**, correct and idiomatic. A garbled
  Devanagari or Bengali line is worse than no page, because the reader is about to send
  it to someone they love.
- Give each line a **Roman transliteration and an English gloss**. Most of this audience
  types in Roman and reads in Devanagari.
- The surrounding article prose is **English** — that is what the SERP shows and what
  the searcher scans. The *quotable lines* are the local-language asset.
- **If you cannot verify a line is correct, cut it.** Say in the audit how many you cut
  and why. Fewer correct lines beats more shaky ones.
- These SERPs are a **news cycle** — MensXP, Maharashtra Times, Zee, Webdunia, Loksatta,
  Times Now — refreshed every February, with authority far above ours. Target position
  6–10, not 3, and **do not claim otherwise in `honestAssessment`**.

---

## WebSearch is EXHAUSTED — added 2026-09-17, mid-batch

This session has used **200 of 200** WebSearch calls. `WebSearch` now returns a budget
error for every agent, including yours. Do not burn turns retrying it.

**This does not lower the sourcing bar.** Phase 3 still requires 4–6 real sources, ≥2
passing the subject test, ≥1 peer-reviewed open-access. Use API-based discovery
instead, which does not consume the WebSearch budget:

```
node content/batches/2026-09-17-propose-30/findpapers.mjs "your phenomenon query"
```

It queries **Crossref** (bibliographic) and **Europe PMC** (open access, full text
reachable) and prints candidates with journal, year and DOI. Both were confirmed
working from this machine. OpenAlex and Semantic Scholar rate-limit (HTTP 429) from
here — do not rely on them.

**Judge the quality yourself. Crossref indexes predatory journals.** If a hit is in
IJSR, IJRASET or a similar pay-to-publish outlet, do not cite it — Crossref indexing is
not peer review. Prefer Europe PMC open-access articles, established journals,
university repositories and DOAJ-listed titles.

**Phase 1 SERP analysis:** you cannot run a live SERP pass. Use the SERP intelligence in
your own task prompt and in `content/keywords/2026-09-16-propose-100/serps.md` and
`competitor-map.md` — 11 India-served SERPs measured 2026-09-16, which is recent. **Say
in the audit and in `structuralLimitations` that Phase 1 was inherited rather than
freshly measured.** Do not invent a SERP you did not see, and do not describe positions
as current.

Fetching a specific known URL still works. `curl` and `wget` are blocked on this
machine — fetch through your available fetch/index tooling, not the shell.
