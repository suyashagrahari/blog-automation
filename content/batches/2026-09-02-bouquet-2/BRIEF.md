# Batch brief — 2026-09-02-bouquet-2 (bouquet cluster, wave 2)

Read this **before** Phase 1. It carries the batch-level facts no single agent can
see, and the one finding that should change how you judge your own SERP.

## Why this batch is split into two very different halves

Wave 1 used up the winnable tier. Of the 30-keyword bouquet shortlist, 20 rows
are already targeted as heads or secondaries across wave 1's ten posts (they
cover 56 keywords between them), and 9 more were cut outright on Gate 4 for
having **zero** weak results — including `how many roses to give girlfriend`,
the highest-demand keyword in the whole run at 33x, whose top 10 is florist
blogs answering the question properly.

So this batch is:

- **Three genuinely winnable occasion-gift posts** on newly harvested keywords,
  from gift occasions the site has never covered.
- **Seven hard posts** at 1–2 weak results. None is a Gate-4 cut, but none is a
  likely head-term win either. Your realistic upside is answer-engine citation
  and long-tail variants. Say so in `honestAssessment` — do not predict a rank.

## The distinction that should drive your angle

13+ SERPs were measured across this cluster. They come in two kinds and mixing
them up is how a post here fails:

**Retailer-owned** — Amazon, Flipkart, FNP, IGP, Winni, FlowerAura, CaratLane,
Nestasia. Nobody answers the question; they sell against it. **This is an
editorial vacuum and it is a real opening**, and the conversion fit is good
because a personalised page is itself a gift.

**Specialist-owned** — `petalrepublic.com`, `flowermeaning.com`, `rosaholics.com`,
`emojipedia.org`, `movienightsathome.com`, `couplesquizzes.com`. These answer
their query properly and own it topically. **Zero or one weak result there is a
closed door, not an opening.** If you are on one of these, your only real
differentiator is first-party data plus a genuinely uncovered sub-angle.

A third kind exists and was **cut**: a SERP made of *tools* (`shinysearch.com`,
`letmegooglethat.com`, `couplesuite.com`, `lovetest.com`). A blog post cannot
rank there — Gate 2. `funny google search prank` and `couple compatibility test
online` were dropped for that reason and belong to `/searched` and
`/kundli-milan` as template-page targets instead.

## Internal links

**`https://subhsandesh.in/bouquet-gf` is mandatory in every post** — it is this
cluster's template and the user asked for it explicitly. Plus **at least one of**
`https://subhsandesh.in/love-gf` or `https://subhsandesh.in/darling`. Then up to
two more from `TEMPLATE_LINKS`, chosen because they are genuinely relevant.
Total internal links: **2–4**.

`TEMPLATE_LINKS` in `app/lib/prompt.ts` was rebuilt today and now holds **36
entries, every one verified HTTP 200**. Two things you need to know about it:

1. **Ten entries were removed** because they were 307 redirects that had been
   advertised as valid link targets across 147 posts: `/birthday-bestfriend`,
   `/birthday-friend`, `/birthday-parents`, `/anniversary-gf`,
   `/anniversary-parents`, `/valentine-gf`, `/valentine-bestfriend`,
   `/missyou-bestfriend`, `/sorry-gf`, `/sorry-friend`. **Do not link any of
   them** — there is no separate anniversary, Valentine's or best-friend page.
2. **Twenty were added**, each described from its own `config.ts`. Several are
   jokes by design — `/challan` is a mock traffic notice, `/legal-notice` a mock
   legal notice, `/nutrition` a nutrition label about a person. Read the `what`
   before linking one, and make your anchor text honest about what the reader
   lands on.

Never invent a slug.

## First-party facts

Read the numbers **out of `content/facts.md`**, never out of this brief — the
database is live and the file has already moved twice today. At the current
regeneration: 3,397 pages across 15 types since 2026-03-12; `/bouquet-gf` is the
**#2 page type at 23.4%**; 41,682 views; 12.3 views per page; 50.2% of views on a
phone; 42.8% password-protect before sharing; 99.5% published; median 6.9 hours
first-save-to-last-edit on `/love-gf` (n=996). At least 3 per post, at least 2
inside the first 150 words, quoted verbatim. If your figures disagree with
these, trust the file and say which regeneration you read.

**The Pricing block is EMPTY.** No post may state or imply that SubhSandesh is
free, cheap, paid or priced at anything — not in the body, an FAQ, the
metaDescription, the excerpt or a table cell. Every keyword in this batch's
winnable half is a *gift* query where cost is a live reader question, so answer
what you can support and record the gap in the audit. "No delivery charge" is a
cost claim. So is "free".

## Sources

`USED-SOURCES.md` in this directory lists **666 URLs across 409 domains** spent
over 151 earlier posts. Cite none of them. 27 domains are closed at 4+ posts,
including `pmc.ncbi.nlm.nih.gov`, `frontiersin.org`, `aclanthology.org`,
`arxiv.org`, `journals.plos.org`, `europepmc.org`, `cambridge.org`,
`en.wikipedia.org`, `doi.org`, `nature.com`, `link.springer.com`,
`journals.sagepub.com`, `un.org`, `escholarship.org` and `drikpanchang.com`.

4–6 sources. At least 2 pass the **subject test**; at least 1 peer-reviewed
**and** open-access; at most 1 generic context statistic; Wikipedia 0–2 for
entity disambiguation only and it is a closed domain anyway.

Veins that worked in wave 1 and are still open: **ethnobotany, floriculture and
horticulture journals** (excellent for the flower posts), Shodhganga, eGyanKosh,
DOAJ, CORE, SSRN, JSTOR Open, Project MUSE Open, PsyArXiv. The route that
actually worked all day is **Crossref → Unpaywall → repository**; OpenAlex, CORE
and Semantic Scholar were rate-limited to 429 repeatedly.

**Never cite or link a competitor.** Retailers: `igp.com`, `fnp.com`, `ferns`,
`floweraura.com`, `winni.in`, `oyegifts.com`, `oyehappy.com`, `giftalove`,
`archiesonline.com`, `interflora.in`, `caratlane.com`, `bluestone.com`,
`nestasia.in`, `flaberry.com`, `myflowertree.com`, `momentz.in`, `tring.co.in`,
`amazon.in`, `flipkart.com`, `etsy.com`. Flower-meaning sites we are trying to
outrank: `petalrepublic.com`, `flowermeaning.com`, `theflowerexpert.com`,
`florgeous.com`, `foliagefriend.com`, `rosaholics.com`, `morflora.com`,
`symbolsage.com`, `yourflowersguide.com`, `thursd.com`. Plus everything in
`references/competitors.md`.

### The cap counts POSTS, not URLs

A URL may appear in at most 2 posts in this batch, a domain in at most 3. The
same domain three times inside *your* post is **one** post against the cap.

In an earlier batch four agents each reported a breach and **all four were
miscounts** — they had counted URL occurrences, and one cut a verified preprint
it was entitled to keep. So prefer a different domain when a sibling looks close,
but **never drop, swap or restructure around a suspected breach yourself.**
Record it, name the URL you would surrender, and let the orchestrator decide.

## Never claim more than the source says

An earlier batch shipped a post asserting its central source was "accepted at ACL
SRW 2026" — the PDF names no venue and arXiv's Comments field is empty. Wave 1
of this cluster had a different failure worth learning from: the orchestrator's
own brief asserted several plausible cultural "facts" (that `sargi` is sent by
the mother-in-law; that chrysanthemum reads as a funeral flower in India; that
white flowers mean death) and **none could be sourced.** Two agents independently
refused to repeat them and one omitted the term entirely.

Do the same. State only what a source states, keep every paraphrase narrower
than the claim, and if you cannot verify something, **leave it out and list it in
`honestAssessment`** rather than softening it into the page. This brief may
itself contain an error — check anything load-bearing.

## Gate 0 — your deadline

Today is **2026-09-02**. The occasion posts carry real deadlines and yours is in
your assignment. Note that Bhai Dooj, Navratri, Teachers Day and the 2026
occurrences of Karwa Chauth and Diwali are all already inside the lead time and
cannot pay off this cycle. No year-stamp in any title, and do not assert a date
you have not verified.

## Hard constraints

- **1,500–1,800 words** in `contentMarkdown`, excluding FAQs, by **plain
  whitespace split** (`md.split(/\s+/).filter(Boolean).length`). This is the
  authoritative measure — `wordCount()` in `app/lib/batches.ts` reads 20–40
  words *higher*.
- **8–12 FAQs**, in `article.faqs` and the FAQPage JSON-LD **only**.
- **No FAQ question may also appear as a body heading**, verbatim *or* nearly.
  Three wave-1 posts had this and an exact-string check missed it — one heading
  differed from its FAQ by two words and still read as the same question asked
  twice. Compare every FAQ against every H1/H2/H3 on meaning, not just characters.
- One comparison table with real values, 3–5 rows, including a first-party column.
- Name at least one case where SubhSandesh is the wrong answer.
- Copy each `publish-checklist.md` item string **byte-verbatim**, `**bold**`
  markers included. Assert `passed ∩ failed = ∅` and `|passed| + |failed| = 50`.
- Flag failures; never silently fix or drop an item.

## Check the two "known defect" items yourself — do not assume

Wave 1's brief claimed the metaTitle five-word rule and the slug stop-word rule
always fail. **That was wrong and five agents caught it.** The metaTitle rule is
only unsatisfiable when the keyword is **six words or more**; at five or fewer it
passes if the keyword opens the title. The slug rule passes whenever the
exact-match slug happens to contain no stop words. **Count your own keyword and
your own slug, then record what is true.** A false failure is as corrosive as a
hidden one.

## Housekeeping

- **Namespace every scratch file by slug**: `<slug>-<purpose>.md`. The scratchpad
  is shared — in one batch three agents each wrote `scratchpad/body.md` and
  overwrote each other mid-draft.
- Write only `content/batches/2026-09-02-bouquet-2/blogs/<slug>.json` and
  `content/batches/2026-09-02-bouquet-2/research/<slug>.md`. Do **not** create or
  edit `batch.json`.
- All 10 slugs were checked against the 935 live articles and are free.
- `WebSearch` is exhausted (200/200) and `WebFetch` may be hook-blocked. Expect
  both to fail. Two engines returned **false positives** today: Bing served
  127 KB of an unrelated cached Portuguese SERP, and separately HTTP 200 with
  Wattpad fan-fiction for the keyword. **A 200 that parses is not evidence it
  answered your query, and a failed fetch is never evidence of absence.** Record
  what you could not verify.
