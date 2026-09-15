# BRIEF — WAVE 2 (posts 31–60) of `2026-09-15-virtual-gift-30`

**Read `BRIEF.md` first — all of it still applies.** This file only records what
is *different* for wave 2. Where the two disagree, this file wins.

Your assignment is one row of `WAVE2-PLAN.json`. Market: India. Evergreen.

---

## 0. SERPs — read this first, it has changed twice

**You have a real India SERP for your keyword. It is in `SERPS-WAVE2.md`.**
Find your section by keyword, read the top ten, and use it for Phase 1. That
file now covers all thirty rows plus the eight replacements.

How it was collected, and why that matters for how much you trust it:

- `WebSearch` is exhausted, 200/200. Do not call it. `WebFetch` is blocked.
- `scripts/serp.mjs` (Brave) went to a **hard 429** for the whole session — it
  stayed 429 after every agent was taken off it and it sat quiet for 90 seconds.
  Six agents burned over an hour of wall-clock on retries that returned nothing.
  **Do not call it. Do not write a retry loop around it.**
- `scripts/serp-ddg.mjs` was written to replace it and it works. DuckDuckGo's
  POST endpoints are not bot-challenged the way the GET forms are, and — unlike
  Brave — DDG accepts a region parameter. Everything in `SERPS-WAVE2.md` is
  therefore **`kl=in-en`, a genuine India SERP**, which is *better* evidence than
  the us-served Brave positions still quoted in §5, not a fallback from them.
  Paid results are filtered out, so what you see is organic.

**If you need one more query** — a cannibalisation check, a secondary keyword —
run `node scripts/serp-ddg.mjs "<query>"` yourself. It is not rate-limited. One
or two calls, not a loop.

Supplement it with the India autocomplete in
`content/keywords/2026-09-15-virtual-gift-100/ac*/autocomplete.csv`: grep your
keyword's stem and the completions are your fan-out sub-queries and your PAA
substitute.

### What the thirty India SERPs showed, and what it means for you

**Gate 2 is the live risk on this axis, and it is measured now, not guessed.**
Across the thirty rows, `etsy.com` appears in 16, `giftfeels.com` in 14,
`amazon.in` in 12, `flipkart.com` in 12. Eight rows scored 5–7 of 10 results as
ecommerce and **were cut and replaced** — see `WAVE2-PLAN.json`, where every
killed row records its score and its reason.

If your row survived, it survived on evidence. But read your own SERP anyway and
be honest about what is in it:

- **The `website for …` cluster is clean** — zero ecommerce, GitHub repos and
  Reddit threads at the top, no authoritative page anywhere. This is the best
  ground in the batch.
- **`digital gift for <person>` rows are contested** — half ecommerce, plus
  three genuine rivals (`aiskyla.com`, `iloveyou.gift`, `gifft.me`) who are
  page-shaped like us.
- **The long-distance rows are listicle country** — `couplemoment` (35 gifts),
  `giftrabbit` (49), Business Insider (50), `endlessdistances` (37), The Knot
  (38), Bored Panda (39). You are not going to out-list them and should not try.
  Write for the reader who cannot post a parcel tonight, and say in the audit
  that the SERP is physical-product dominated.

**New competitors found in the India SERPs — never cite or link these**, on top
of the list in `BRIEF.md` §1: `aiskyla.com`, `iloveyou.gift`, `couplemoment.com`,
`hugnify.com`, `feelclose.app`, `giftfeels.com`, `myheartcraft.com`,
`justmeantforyou.com`, `yourlovepage.com`, `lovepage.io`, `wishcupid.in`,
`alwaysyou.in`, `thegreeter.in`, `instamemory.in`, `apologify.com`,
`saysorry.in`, `mewtrucard.com`, `cutiepage.in`, `wishprise.online`.

**Three places subhsandesh.in already ranks** — do not write a competing page,
and link them where relevant: **#2** for `sorry page for girlfriend online`
(`/blog/sorry-gift-online-for-girlfriend`), **#7** for `apology website for
girlfriend` (`/blog/website-to-say-sorry-to-girlfriend`), and **#2** for
`wedding wish page online` (the homepage).

## 1. Caps are batch-wide, and this batch is now SIXTY posts

The URL ≤ 2 / domain ≤ 3 caps count **all 60 posts**, not your wave.

`SPENT-SOURCES.json` has the exact counts after wave 1. Before you cite anything:

- **Banned outright (already at the domain cap of 3):** `arxiv.org`,
  `pmc.ncbi.nlm.nih.gov`, `journals.plos.org`, `frontiersin.org`,
  `pewresearch.org`, `gsb.stanford.edu`.
- **One slot left (currently at 2)** — check `blogs/` for a wave-2 sibling before
  you take it: `angelineclose.com`, `aodr.org`, `cyberpsychology.eu`, `doi.org`,
  `en.wikipedia.org`, `eprints.soton.ac.uk`, `europepmc.org`, `pib.gov.in`,
  `research.utwente.nl`, `research.vu.nl`, `scholarworks.lib.csusb.edu`,
  `sciencedaily.com`.
- Wave 1 spent 137 URLs across 111 domains. **Wave 2 needs ~60 more distinct
  domains.** Go to the institutional repositories in `BRIEF.md` §10 first —
  that list was measured, not guessed, and it is still accurate.

Wave 1's worst structural failure was six agents independently picking the same
paper because they all ran Phase 3 against an empty directory. You are not in
that position: `blogs/` already has 30+ files. **Read the siblings' `sources`
arrays before you commit to a source.** That is a 5-second check that prevents
the only error in this batch nobody can fix after the fact.

## 1b. How to FIND sources when there is no search engine

This is the part wave 2 has to solve that wave 1 never did. With WebSearch gone
and Brave contended, you cannot discover a paper by searching for it. Use the
open scholarly APIs instead — free, no key, JSON, and *better* than a web search
here because they return open-access records you can actually open.

Call them with `ctx_execute` (javascript, `await fetch(...)`) and print only
titles, years and landing-page URLs. Never `curl`.

**Measured from this sandbox on 2026-09-15 — this is a map of what works, not a
policy:**

- **STATUS CHANGE 2026-09-16: Europe PMC started returning `HTTP 503` on every
  call, including a bare smoke test.** It may recover. Try it once; if it 503s,
  go straight to Crossref and DOAJ rather than retrying, and say in the audit
  that Europe PMC was unavailable. Crossref and DOAJ both still work. OpenAIRE
  works but has timed out on longer query runs.

- **Europe PMC — the best one when it is up. Use it first.**
  `https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=<q>&format=json&pageSize=20`
  Returned full results every time. Append ` AND OPEN_ACCESS:Y` to the query to
  keep only what you can read. Strong on psychology, loneliness, attachment,
  relational communication — i.e. most of this batch.
- **Crossref — use it second, and for dates.**
  `https://api.crossref.org/works?query=<q>&rows=20`. Reliable. It indexes
  everything, open or not, so treat a hit as a lead and check the DOI resolves to
  something readable. It is also the correct way to get a real `publishedDate`.
- **DOAJ — works, but only with SHORT queries.**
  `https://doaj.org/api/search/articles/<q>?pageSize=20`. A five-word query
  returned **zero** rows; `gift giving` returned five. Two or three words.
  Everything it returns is open access.
- **OpenAlex — do not bother.** `api.openalex.org` returned **HTTP 429 on every
  attempt**, with and without a `mailto=` polite-pool parameter. It is blocked
  from this sandbox. Do not burn attempts on it.

Then open the landing page with `ctx_fetch_and_index` and **verify it says what
you are about to claim.** An API hit is a lead, not a citation. The repositories
in `BRIEF.md` §10 fetch reliably; the publisher domains listed there as blocked
still 403, and no API changes that.

**Search the phenomenon, not the keyword.** For a long-distance gift post,
`relational maintenance mediated communication` returns real work;
`long distance gift ideas` returns nothing, because nobody studies listicles.

## 2. Templates — this is the wave's headline requirement

The user's instruction for wave 2 was to link **every template related to this
axis**. Wave 1 linked 20 of 27 romance/novelty templates and left **seven never
linked once in 30 posts**: `/missyou-gf`, `/court-of-love`, `/vending-machine`,
`/nutrition`, `/recharge`, `/searched`, `/legal-notice`.

`WAVE2-PLAN.json` assigns your `templateUrls` so that all seven — plus the three
wedding templates — are covered. **Use the ones your row names.** They were
chosen to spread coverage across the batch, not at random, and if you silently
swap `/nutrition` for `/love-gf` because it felt safer you re-create the exact
imbalance this wave exists to fix.

**But do not force a bad link.** If your assigned template genuinely does not fit
your keyword, say so in the audit, pick a better one from `TEMPLATE_LINKS`, and
name the swap. A wrong link is worse than an unbalanced batch. The rule is
*deliberate*, not *mandatory*.

**Read the template's description in `app/lib/prompt.ts` before writing about
it.** Several are jokes by design — `/challan` is a mock traffic notice,
`/legal-notice` a mock legal summons, `/nutrition` a nutrition label where the
product is a person, `/court-of-love` a trial with a penguin judge. Describing
one of these earnestly, as though it were a sincere romantic gesture, reads as
though the writer never opened it. Describe what it actually does.

Rules unchanged: 2–4 internal links, descriptive anchors, placed *after* the
section that earns them, `/templates` linked once near the closing CTA, and
**only URLs that exist in `TEMPLATE_LINKS`**.

## 3. Cannibalisation — ten of you have a live page on your topic

Ten rows in `WAVE2-PLAN.json` carry a `nearestLive` field. That is an **already
published** subhsandesh page close to your keyword. Before drafting:

1. Open `https://subhsandesh.in<the nearestLive path>` with `ctx_fetch_and_index`
   and read what it actually covers. Do **not** run `serp.mjs --gate` — see §0;
   the key is saturated and a 429 there fails silently in the direction that
   lets a duplicate through.
2. Compare it against your keyword's section in `SERPS-WAVE2.md`: if the live
   page appears in that SERP, Google already treats it as the answer to your
   query and you are competing with yourself.
3. Then do one of two things, and **write which one you did into the audit**:
   - **Differentiate** — your post targets a different format, recipient or
     question than the live page. Say in one sentence what the split is.
   - **Escalate** — if you cannot honestly differentiate it, do NOT write a
     near-duplicate to hit a count. Emit the research brief, write no blog JSON,
     and report the row as an abort with your reasoning.

An abort is a correct outcome. Wave 1 of the Ganesh batch produced three of them
and they were the right call. Thirty posts where one is a duplicate is worse
than twenty-nine and an honest note.

**Every post must link its `nearestLive` page** where one exists — that is how
two pages on adjacent topics stop competing and start reinforcing.

**A clarification, because the first wave-2 post hit this and recorded it as a
failure.** The checklist item *"Every internal link is a real URL from
TEMPLATE_LINKS"* governs **template** links. A cross-link to another
subhsandesh.in **blog post** is a different thing, it is required by this
section, and `verify-batch.mjs` already excludes blog cross-links from the 2–4
template-link count. So a `nearestLive` link does **not** fail that item — do not
record it as a failure. Keep 2–4 template links from `TEMPLATE_LINKS`, and add
the blog cross-link on top.

Your keyword is also checked against the other 29 wave-2 rows and all 67
keywords wave 1 claimed. Do not target a phrasing listed as another row's
`secondaryKeywords`.

## 4. First-party facts — the same gate, a tighter instruction

`content/facts.md`, regenerated 2026-09-15. Phase 0 still blocks: **3 relevant
facts, 2 inside the first 150 words.**

Wave 1 leaned hard on the 40.6% password figure and the 6.2-hour edit gap
because `BRIEF.md` §4 told it to. Across sixty posts that now reads as a tic.
**Check three siblings in `blogs/` and open with a pair nobody near you has
used.** The under-used lines, all measured 2026-09-15:

- 94.1% of started pages are actually published and shared (4,098 of 4,357)
- 3,377 registered creators, 1.29 pages each — people come back
- 49.0% of shared pages are opened on a phone
- average 11.5 views per created page; 49,968 views total
- occasion-dated pages are 3.7% of everything — the platform is 96.3% everyday
- /apology-dashboard is 23.9% of all pages, nearly level with /love-gf's 25.8%
- /darling 427 pages (9.8%), /birthday-gf 352 (8.1%)

**Two facts you must not get wrong.** The "## Pricing (fill in by hand)" block
in `facts.md` is **empty**. There is no confirmed free-tier or paid-tier figure.
If your keyword contains "free", you may say the page is free to create *only*
if you can verify it on the live site — otherwise write that you cannot confirm
current pricing and link `/templates`. Do not infer a price. Second: the
database records which *template* was opened, not who received it, so
`/love-gf` counts do not prove the recipient was a girlfriend. If you write
about wives or husbands, disclose that.

## 5. Gate 2 evidence already collected — read this before your own SERP pass

Measured with `serp.mjs` on 2026-09-15, us-served:

**`birthday website for girlfriend` — the best SERP in either run.**
`#1 github.com/nikitayadav19/HappyBirthdayGF` · yourlovepage.online ·
**four Reddit threads** (r/webdesign, r/learnprogramming, r/Gifts, and
r/TwentiesIndia "made a website for my boyfriend's birthday") · yourlovepage.com
· giftsqr.com · blink.new · TikTok.

Read that result set properly. There is **no ecommerce, no Amazon, no gift
card, and no authoritative page at all** — the top result tells the searcher to
clone a GitHub repo. People want this thing badly enough to write code for it.
That is the gap for the whole "website for …" cluster, and it is a much larger
one than anything wave 1 found.

**`digital gift for wife` — mixed, and the warning is real.** sendbestgift ·
lettersbyheart · bestproducts listicle · Reddit · Etsy · then a wall of BestBuy
**gift cards**. "Digital gift" collides with "digital gift card", which is a
different product and a different searcher. Your post must separate the two
early and explicitly, or it will attract the wrong reader and convert nobody.

**The long-distance cluster is unverified here** — its SERPs are being collected
into `SERPS-WAVE2.md`; read yours there rather than running your own pass. If
Amazon/Etsy/listicles own it, that is a Gate 2 signal — say so in the audit and
write for the residual "we cannot post a parcel" intent rather than pretending
the SERP is winnable.

## 6. Everything wave 1 learned the hard way

These cost real rework last time. They are not style notes.

- **§7 — audit strings byte-verbatim**, `**bold**` markers kept, wrapped lines
  joined with single spaces, copied from `references/publish-checklist.md`.
  Assert `passed ∩ failed = ∅` and `|passed| + |failed| = 50` before writing.
- **§8 — an FAQ must not restate a body heading.** Strapi renders FAQs
  separately; the reader sees the duplicate.
- **§9 — paragraphs of 2–3 sentences, including the opening answer block.**
- **§11 — name every scratch file `<slug>-<purpose>.md`.** The scratchpad is
  shared across all of you.
- Category: default `digital-gifts-romance`; your row names the right one.
  **Never `indian-festivals`** — nothing here is a festival.
- `verify.config.json` deliberately sets empty `mandatoryLinks` / `oneOfLinks`.
  Leave it alone.

## 7. Before you report finished — run the verifier and read ONLY your own lines

```
node scripts/verify-batch.mjs content/batches/2026-09-15-virtual-gift-30
```

There is no `--slug` flag: it verifies all sixty posts. Two consequences, and
both matter.

**Act only on lines naming your own slug.** Other agents are writing their files
while you read. A finding against a sibling is very likely an artefact of a
half-written file, and "fixing" it means editing a file another agent owns.

**Ignore every source-cap finding, without exception.** Cap counts taken while
thirty agents are swapping sources are meaningless — measuring one mid-write is
precisely how wave 1 stripped a legitimate source out of a finished post and had
to reconstruct the sentence from scratch. The orchestrator enforces caps once,
at the end, when nothing is moving. Your job is only to check `SPENT-SOURCES.json`
and your siblings *before* you cite.

In wave 1 **every post launched with this instruction came back clean, and every
post that needed repair was launched without it.** Fix what it reports against
your slug, then report. If something is genuinely structural, leave it failed
with an honest `why` naming the blocker — do not delete the item to make the
count green.
