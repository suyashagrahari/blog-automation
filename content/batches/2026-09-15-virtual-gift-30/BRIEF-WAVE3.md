# BRIEF — WAVE 3 (posts 61–79) of `2026-09-15-virtual-gift-30`

**Read `BRIEF.md` first, then `BRIEF-WAVE2.md`. Both still apply.** This file records
only what is *different* for wave 3. Where they disagree, this file wins.

Your assignment is one row of `WAVE3-PLAN.json`. Market: India. Evergreen.

---

## 0. Why this wave is only 19 posts, and why that matters to how you write

The user asked for 30–40 more. **The axis does not contain 30 more winnable blog
keywords, and this was measured, not assumed.**

- `content/keywords/2026-09-15-virtual-gift-100` is **exhausted**. 67 of its 100
  keywords are already written here — 30 as primaries, 35 more as `secondaryKeywords`
  inside existing posts. Of the 33 left, **25 are marked `do-not-write`** by the
  research itself (`gate2-ecom-serp` on head terms like `gift for girlfriend`,
  `gate5-wrong-product` on price brackets like `birthday gift for girlfriend under
  500`), 2 are `merge-into-existing`, 3 are `improve-existing` on pages we already
  rank with, and the last 3 `new-page` rows are ≥7/10 SERP duplicates of posts in
  this batch.
- A fresh India autocomplete harvest produced 1,025 on-axis candidates. **112 were
  screened against live India SERPs** in five batches. 19 survived.

**What killed the rest, and what it tells you about your own row:**

| Shape | Verdict | Evidence |
|---|---|---|
| `online <x> gift for <person>` | retail SERP | 13/13 failed; Amazon/Flipkart/FNP/IGP own 5–8 of 10 |
| `digital invitation for <occasion>` | tool SERP | 10/10 are invitation-*maker* products (Canva, easyinvite.in, desievite) |
| `virtual gift <noun>` (box/link/website/music) | competitor landing pages | 0–1 blog results in 10; aiskyla, gifft.me, giftfeels, surprises.gift |
| `digital gift for <family member>` | retail SERP | Amazon/Etsy/FNP 3–7 of 10 |

**So: you are writing on the last defensible ground on this axis.** Two consequences.
First, do not pad. A 1,500-word post that answers the question completely beats a
1,800-word one that reaches the count by restating competitors. Second, **your row
survived on specific evidence recorded in `WAVE3-PLAN.json` — read your `gate2` and
`overlapWithWritten` fields before you draft.**

## 1. SERPs — you already have yours

`SERPS-WAVE3.md` has your keyword's India SERP (`kl=in-en`, ads filtered, collected
2026-09-16). Read the top ten and use it for Phase 1.

- `WebSearch` is exhausted. `WebFetch` is blocked. **Do not call `scripts/serp.mjs`
  (Brave)** — it hard-429'd for an entire session in wave 2 and six agents burned an
  hour on retries.
- Need one more query? `node scripts/serp-ddg.mjs "<query>" --region in-en`. One or
  two calls, **never a loop** — it throttled under rapid screening today.

**Most of your SERP is competitors you may not cite.** On top of `BRIEF.md` §1 and
`BRIEF-WAVE2.md` §0, these appeared in wave-3 screening and are **banned as sources
and links**: `aiskyla.com`, `gifft.me`, `giftfeels.com`, `surprises.gift`,
`virtualgift.me`, `gifter.live`, `blinkwish.in`, `boxofjoy.fun`, `thegreeter.in`,
`yourlovepage.com/.online`, `cutiepage.in`, `bondlyfe.com`, `lovepanda.co`,
`myheartcraft.com`, `justmeantforyou.com`, `lovepage.io`, `giftsqr.com`,
`openme.in`, `2-luv.com`, `hbday.to`, `wishcupid.in`, `ourgiftverse.com`,
`digiflower.net`, `sendvirtualgift.com`, `lovedigitalgift.com`, `heartdrop.io`,
`weblium.com`, `bemyval.co`, `blink.new`, `einvits.com`, `invitedrop.com`,
`invitify.app`, `invyt.io`, `pinvite.io`, `easyinvite.in`, `desievite.com`.

Reading them to understand the gap is Phase 1 and is fine. Citing or linking them is not.

## 2. Anti-cannibalisation — this is the binding constraint of wave 3

Wave 2 applied the 4+ shared-URL rule only to *new* candidates and discovered
afterwards that 11 already-written pairs shared 4+ of 10 URLs. **Wave 3 applied it up
front, across all 79 posts.** Ten candidates were rejected outright — four as
duplicates of written posts (up to 7/10), six as self-cannibalising against another
wave-3 row. They are listed in `WAVE3-PLAN.json`.

**If your row carries `mustDifferentiate: true`,** it shares 4–5 of 10 organic URLs
with an already-published post named in `nearestWritten`. That is close enough that
Google may collapse them. You must:

1. Open `https://subhsandesh.in/blog/<that slug>` with `ctx_fetch_and_index` and read
   what it actually covers.
2. **State the split in one sentence in your audit** — a different recipient,
   question, format or moment. Not a different adjective.
3. **Link that post** from yours, with descriptive anchor text, after the section that
   earns it. Two adjacent pages that link each other reinforce; two that ignore each
   other compete.

If you cannot honestly differentiate, **do not write a near-duplicate to hit a count.**
Emit the research brief, write no blog JSON, report the row as an abort with your
reasoning. Wave 2 aborted two rows and both were the right call.

If your row carries `overlapWithNewRow` ≥ 4, a *sibling in this wave* shares that SERP.
Read their file in `blogs/` before you finalise your H2s, and do not target their
primary keyword as your secondary.

## 3. Sources — the eight best hosts are now BANNED, and the APIs have changed

The URL ≤ 2 / domain ≤ 3 caps count **all 79 posts**. `SPENT-SOURCES.json` was
regenerated at quiescence today (60 posts, 264 URLs, 215 domains, **zero violations**).

**Banned outright — already at the domain cap of 3:** `arxiv.org`,
`pmc.ncbi.nlm.nih.gov`, `journals.plos.org`, `frontiersin.org`, `europepmc.org`,
`pewresearch.org`, `gsb.stanford.edu`, `ojs.zrc-sazu.si`.

That is every host wave 1 and 2 leaned on. **You must find genuinely new repositories.**

**Measured from this sandbox on 2026-09-16 — the picture improved since wave 2:**

- **OpenAlex — WORKS NOW, and it is the best discovery tool available.** It returned
  HTTP 429 on every attempt in wave 2; today it returns 200.
  `https://api.openalex.org/works?search=<q>&per-page=10&filter=is_oa:true`
- **Semantic Scholar — WORKS NOW** (429 in wave 2).
  `https://api.semanticscholar.org/graph/v1/paper/search?query=<q>&limit=10&fields=title,year,openAccessPdf,externalIds`
- **Europe PMC — recovered** from the 503s that broke wave 2. Append
  ` AND OPEN_ACCESS:Y`.
- **CORE — works.** `https://api.core.ac.uk/v3/search/works?q=<q>&limit=10`
- **Crossref — works**, and is the correct way to get a real `publishedDate`.
- **DOAJ — works, but only with SHORT queries.** Two or three words; a five-word query
  returns zero.
- **BASE — bot-challenged. Do not bother.**

**UPDATE, measured by wave-3 agents during this run — the APIs degrade as the wave
proceeds.** They were all healthy at 13:00; by the fifth concurrent agent:

- **OpenAlex is DEAD for the rest of today.** It now returns HTTP 429 with
  *"insufficient budget, $0 remaining, resets at midnight UTC"*. Do not call it at all.
  It served roughly 10 queries per agent earlier in the wave before exhausting. Front-load it: decide your
  search terms first, fire your best queries early, and **do not write a retry loop.**
- **Semantic Scholar** now 429s after about one query. Treat a hit as luck.
- **CORE** has started 429ing too.
- **OpenAIRE — reports CONFLICT, try it once.** `https://api.openaire.eu/search/publications?keywords=<q>&size=20&format=json`.
  One agent called it "the best discovery tool of the session"; another had it refuse
  connections outright. It costs one call to find out which you get. Do not retry it
  more than once.
- **Crossref and DOAJ remain the reliable pair** — use Crossref for dates and DOAJ
  (two or three words only) for open-access discovery. Go to these first now, not third.
- `escholarship.org` returns 403. `mdpi.com` is blocked (BRIEF.md §10).

**THE ROUTE THAT ACTUALLY WORKS — found independently by two agents, use it first:**

**Crossref → Unpaywall.** Query Crossref for the phenomenon, take the DOI, then call
`https://api.unpaywall.org/v2/<doi>?email=suyash.agrahari@hirequotient.com`. It returns
the best open-access location for that DOI, which lets you **filter out blocked
publisher hosts before you spend a fetch on them.** This is the fastest verified path
from a search term to a landing page you can actually open.

Confirmed 403 / bot-challenged from this sandbox — do not fetch, do not retry:
`sagepub.com`, `sciencedirect.com`, `mdpi.com`, `biomedcentral.com`,
`escholarship.org`, `base-search.net`.

**PDFs do not parse in this sandbox.** Every source will be an abstract-and-metadata
read. That is acceptable — but you must record it in the audit rather than implying you
read the full text.

When an API rate-limits, **switch tool rather than retrying** — wave 2 lost over an
hour to six agents retrying a throttled endpoint. If you genuinely cannot find topical
research, say so in the audit and name the search terms you tried. That is a real
finding, not a failure, and the skill explicitly allows it.

**Additional domains that reached the cap of 3 DURING this wave — do not use:**
`research.tue.nl`. Re-read `SPENT-SOURCES.json` and check your siblings' `sources`
arrays immediately before you commit to a citation; the list is moving while you work.

Call them with `ctx_execute` (javascript, `await fetch`), print only titles, years and
landing URLs. Never `curl`. **An API hit is a lead, not a citation** — open the landing
page with `ctx_fetch_and_index` and verify it says what you claim. If only an abstract
is readable, cite only the abstract and record that in the audit.

**Search the phenomenon, not the keyword.** `relational maintenance mediated
communication` returns real work; `virtual gift ideas` returns nothing, because nobody
studies listicles. For the invitation row, try `wedding invitation ritual`,
`ceremonial invitation social obligation`, `RSVP social commitment`.

## 4. Templates — the wedding set is finally reachable

After 60 posts, five templates have been linked **once or never**: `/wedding-shaadi`
(1), `/shaadi-card` (1), `/reception` (1), `/christian-wedding` (**0**),
`/christian-wedding-2` (**0**).

`what is a digital invitation` is the first keyword in three waves whose SERP actually
justifies them. That row carries the wedding set; use it.

Everyone else: **use the `templateUrls` your row names.** They were assigned to spread
coverage, not at random. If one genuinely does not fit, say so in the audit, pick a
better one from `TEMPLATE_LINKS`, and name the swap — a wrong link is worse than an
unbalanced batch.

**Read the template's description in `app/lib/prompt.ts` before writing about it.**
Several are jokes by design — `/challan` is a mock traffic notice, `/legal-notice` a
mock summons, `/nutrition` a nutrition label where the product is a person,
`/court-of-love` a trial with a penguin judge. Describing one earnestly reads as
though you never opened it.

Rules unchanged: 2–4 template links, descriptive anchors, placed after the section that
earns them, `/templates` once near the closing CTA, **only URLs in `TEMPLATE_LINKS`**.
A cross-link to another subhsandesh **blog post** is a separate thing, is required by
§2, and does **not** fail the TEMPLATE_LINKS checklist item.

## 5. First-party facts — same gate, and one hard prohibition

`content/facts.md`, measured **2026-09-15**. `npm run facts` could not be re-run today
(the production-DB read was denied), so cite the 2026-09-15 date, not today's.

Phase 0 still blocks: **3 relevant facts, 2 inside the first 150 words.**

Across 60 posts the 40.6% password figure and the 6.2-hour edit gap now read as a tic.
**Check three siblings in `blogs/` and open with a pair nobody near you has used.**
Under-used lines:

- 94.1% of started pages are published and shared (4,098 of 4,357)
- 3,377 registered creators, 1.29 pages each — people come back
- 49.0% of shared pages are opened on a phone
- 11.5 average views per created page; 49,968 views total
- occasion-dated pages are 3.7% of everything — the platform is 96.3% everyday
- /apology-dashboard 23.9%, nearly level with /love-gf's 25.8%; /darling 9.8%

**The `## Pricing (fill in by hand)` block in `facts.md` is still EMPTY.** Sixteen
posts already carry a sentence declining to quote a price. If your keyword contains
"free" — four of you — you may say a page is free to create **only** if you verify it
on the live site. Otherwise write that you cannot confirm current pricing and link
`/templates`. **Do not infer, estimate, or invent a figure.** An honest "we cannot
confirm" is correct; a wrong price is not.

Second: the database records which *template* was opened, not who received it. A
`/love-gf` count does not prove the recipient was a girlfriend. If you write about a
crush, a friend, or a husband, disclose that.

## 6. Everything the first two waves learned the hard way

- **Audit strings byte-verbatim**, `**bold**` kept, wrapped lines joined with single
  spaces, copied from `references/publish-checklist.md`. Assert
  `passed ∩ failed = ∅` and `|passed| + |failed| = 50` before writing.
- **An FAQ must not restate a body heading** — Strapi renders FAQs separately and the
  reader sees it twice.
- **Paragraphs of 2–3 sentences**, including the opening answer block.
- **FAQs live in `article.faqs` and the FAQPage JSON-LD only, never in
  `contentMarkdown`.** The body must reach length without them.
- **Name every scratch file `<slug>-<purpose>.md`** — the scratchpad is shared across
  all of you, and wave 1 had three agents overwrite one another's `body.md`.
- Category: `digital-gifts-romance` unless your row says otherwise. **Never
  `indian-festivals`** — nothing here is a festival.
- Leave `verify.config.json` alone; its empty `mandatoryLinks` is deliberate.

## 7. Before you report finished — run the verifier, read only your own lines

```
node scripts/verify-batch.mjs content/batches/2026-09-15-virtual-gift-30
```

There is no `--slug` flag; it verifies all 79.

**Act only on lines naming your own slug.** Siblings are writing while you read, and a
finding against one of them is probably a half-written file.

**Ignore every source-cap finding, without exception.** Counts taken while agents are
swapping sources are meaningless — measuring one mid-write is exactly how wave 1
stripped a legitimate source out of a finished post and had to reconstruct the
sentence. The orchestrator enforces caps once, at the end. Your job is to check
`SPENT-SOURCES.json` and your siblings *before* you cite.

In wave 1 every post launched with this instruction came back clean, and every post
that needed repair was launched without it. Fix what it reports against your slug, then
report. A genuinely structural failure stays `failed` with an honest `why` naming the
blocker and what would close it — **never delete an item to make the count green.**
