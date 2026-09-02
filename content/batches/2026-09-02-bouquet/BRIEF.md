# Batch brief — 2026-09-02-bouquet (the /bouquet-gf cluster, wave 1)

Read this **before** Phase 1. It carries the batch-level facts no single agent can
see, and the one finding that decides how every post here has to be written.

## The finding: this is the most heavily worked topic on the blog

**103 of the 935 live Strapi articles are already flower or bouquet posts — 11% of
everything published.** The whole product-term space is spent: `virtual-bouquet`,
`digital-bouquet`, `online-bouquet-maker-free`, `virtual-bouquet-maker-online`,
`digital-flower-bouquet`, `send-virtual-flowers`, `online-bouquet-for-girlfriend`
and about 20 more. So are all the mainstream recipients and occasions, and roughly
25 Western flower-meaning posts (rose colours, tulip, lily, carnation, peony,
sunflower, birth-month flowers, language of flowers).

**Your keyword was chosen precisely because it is not in those 103.** Your job is
to keep it that way. Each assignment below names the closest live articles; read
them before drafting and stay off their ground. If your draft starts to read like
a better version of `digital-flower-bouquet`, the angle is wrong.

## The SERP distinction that decides your angle

13 SERPs were pulled for this run. They split into two kinds, and confusing them
is the main way a post here fails:

**Retailer-owned** — rose day, propose day, karwa chauth, friendship day, women's
day. Flipkart, Amazon, FNP, IGP, Winni, FlowerAura, OyeGifts. Nobody answers the
question; they sell against it. **This is an editorial vacuum and it is your
opening.** Write the answer they refuse to write.

**Specialist-owned** — flower meanings, rose counts, Hindi flower names, emoji
meanings. `petalrepublic.com`, `flowermeaning.com`, `rosaholics.com`,
`morflora.com`, `vocabshiksha.com`, `emojipedia.org`. These answer the query
properly and own it topically. Zero weak results here is a closed door, not an
opening. If you are on one of these keywords, your only real differentiator is
**Indian-first framing plus first-party data**, and you should say plainly in the
audit if you do not think it is enough.

## Internal links — three are mandatory

Every post links **all three**, with descriptive anchor text, placed *after* the
section that earns them, never in the opening paragraph:

- `https://subhsandesh.in/bouquet-gf` — the primary template for this cluster
- `https://subhsandesh.in/love-gf`
- `https://subhsandesh.in/darling`

That is 3 of a 2–4 budget, so you may add **at most one** more from
`TEMPLATE_LINKS` in `app/lib/prompt.ts`, and only if genuinely relevant
(`/valentine-gf` for the February posts, `/anniversary-gf`, `/missyou-gf`).
Never invent a slug. `/bouquet-gf` was added to `TEMPLATE_LINKS` today — it was
missing, which is why no earlier post links it.

All three URLs were verified live today: HTTP 200, `index, follow`, present in
`sitemap.xml`.

## `/bouquet-gf` mechanics — so nothing gets invented

"Build a Bouquet". Four tabs: **Bouquet · Style · Card · Deed**.

- Pick from **12 blooms**, in **colour or black-&-white**
- **Reshuffle** the arrangement
- Write a **card**
- Seal it with a playful **"Deed of Devotion"**
- Send a link; the blooms **open when she taps it**

It is described in the product as "a gen-z digital florist". There is no delivery,
no address, no window to be home for — that absence is the strongest honest
argument this cluster has against every florist in the SERP, and it is worth
making explicitly.

## First-party facts

`content/facts.md`, regenerated **2026-09-02**, 17 facts. At least 3 per post, at
least 2 inside the first 150 words. The ones that matter most here:

**Read the numbers out of `content/facts.md` itself, never out of this brief.**
The database is live and the file moved during this batch — an earlier draft of
this section quoted 3,377 pages / 789 bouquets / 7.2 hours, which are now stale.
`facts.md` is the only source of truth, and `factsUsed` must quote it verbatim.

As of the current regeneration:

- **`/bouquet-gf` is the #2 page type — 795 created, 23.4% of all 3,394 pages**
- 3,394 personalised pages created since 2026-03-12 across 15 page types
- 41,636 recorded views; 12.3 views per created page
- 50.3% of views are on a phone; 50.5% on a touch device
- 42.8% of creators password-protect before sharing (1,453 of 3,394)
- 99.5% of started pages are published and shared
- Median 6.9 hours from first save to last edit (sampled on `/love-gf`, n=995)

If your figures disagree with these, `facts.md` has regenerated again — trust the
file, and say in the audit which regeneration you read.

**The Pricing block in `facts.md` is EMPTY.** No post may state or imply that
SubhSandesh is free, cheap, paid, or priced at anything — not in the body, an FAQ,
the metaDescription, or a table cell. Several of these keywords are gift-cost
queries, so answer what you *can* support and record the gap in the audit. Do not
let "free" in as a synonym for "no delivery charge".

## Sources

Read `USED-SOURCES.md` in this directory first: **618 URLs across 373 domains are
already spent** over 141 earlier posts. Cite none of them.

These are closed (4+ earlier posts each): `pmc.ncbi.nlm.nih.gov`,
`frontiersin.org`, `aclanthology.org`, `arxiv.org`, `journals.plos.org`,
`europepmc.org`, `cambridge.org`, `en.wikipedia.org`, `doi.org`, `nature.com`,
`unicode.org`, `journals.sagepub.com`, `hbs.edu`, `escholarship.org`,
`dsal.uchicago.edu`, `link.springer.com`, `drikpanchang.com`, `w3.org`,
`journal.sjdm.org`, `web.mit.edu`, `dash.harvard.edu`, `archive.org`.

4–6 sources. At least 2 pass the **subject test** — about gift-giving behaviour,
ritual and festival observance, flower symbolism in a specific culture, or
mediated intimacy; not "about India" and not "about the internet". At least 1
peer-reviewed **and** open-access. At most 1 generic context statistic.

Good hunting grounds for this cluster: DOAJ, CORE, SSRN (consumer research and the
economics of gift-giving), JSTOR Open and Project MUSE Open (anthropology of
ritual, South Asian studies), Shodhganga and eGyanKosh (Indian festivals,
kinship, folklore, ethnobotany), PsyArXiv, OpenAlex, Semantic Scholar, and
university repositories. **Ethnobotany and floriculture journals are a genuinely
open vein for the flower posts** and no earlier batch has touched them.

**Never cite or link a competitor.** For this cluster that means both groups:

- Gift/florist retailers: `igp.com`, `fnp.com`, `ferns`, `floweraura.com`,
  `winni.in`, `oyegifts.com`, `oyehappy.com`, `giftalove`, `archiesonline.com`,
  `interflora.in`, `floraindia.com`, `sendflowers.com`, `proflowers.com`,
  `1800flowers.com`, `bloomsybox`, `giftlaya`, `personalizationmall.com`.
- Flower-meaning sites we are trying to outrank: `petalrepublic.com`,
  `flowermeaning.com`, `theflowerexpert.com`, `florgeous.com`, `foliagefriend.com`,
  `rosaholics.com`, `morflora.com`, `yourflowersguide.com`, `symbolsage.com`.
  Citing these hands authority to the pages already beating us.

Plus everything in `references/competitors.md`.

### The cap counts POSTS, not URLs

A URL may appear in at most 2 posts in this batch, a domain in at most 3. The same
domain three times inside *your* post is **one** post against the cap.

In an earlier batch four agents each reported a breach and **all four were
miscounts** — they had counted URL occurrences. One cut a verified preprint it was
entitled to keep. So: prefer a different domain when a sibling looks close to its
cap, but **never drop, swap or restructure around a suspected breach yourself.**
Record it in the audit, name the URL you would give up, and let the orchestrator —
who alone sees the finished batch — decide. Escalate, don't patch.

## Never claim more than the source says

An earlier batch shipped a post asserting its central source was "accepted at ACL
SRW 2026". The PDF names no venue and arXiv's Comments field is empty. The venue
was invented, inside a post whose own audit reported 49 of 50 items passing. Two
over-reached claims and a date stated as 2006 in one sentence and 2007 in another
were caught in the same pass.

State only what the source states. Keep every paraphrase narrower than the claim,
never wider. If you can only read an abstract, cite only the abstract and record
that in the audit.

## Gate 0 — your publish deadline

Today is **2026-09-02**. Occasion posts carry a real deadline; it is in your
assignment. **The 2026 occurrences of Karwa Chauth and Diwali are already inside
the lead time and cannot pay off**, so the festival posts target 2027. Do not put
a stale year in a title, and do not imply the current year's date.

## Hard constraints

- **1,500–1,800 words** in `contentMarkdown`, excluding FAQs, measured by **plain
  whitespace split** (`md.split(/\s+/).filter(Boolean).length`). This is the
  authoritative measure — `wordCount()` in `app/lib/batches.ts` strips markdown and
  reads 20–40 words *higher*, and trusting it once nearly cost three earlier posts
  real content.
- **8–12 FAQs**, in `article.faqs` and the FAQPage JSON-LD **only**. Never in
  `contentMarkdown` — Strapi renders `faqs` as its own section, so a body FAQ
  heading shows every question twice.
- One comparison table with real values, 3–5 rows. Mirror any ranked body list as
  an `ItemList` in `structuredData`.
- Name at least one case where a digital bouquet is the wrong answer and a real
  one wins. A page that pretends otherwise is not credible, and every florist in
  the SERP can deliver something you cannot.
- **Category**: `digital-gifts-romance` for the gift posts, `modern-romance` for
  the styling and meaning posts. Both verified live today.
- Copy each `publish-checklist.md` item string **byte-verbatim**. Assert
  `passed ∩ failed = ∅` and `|passed| + |failed| = 50`.
- Flag failures; never silently fix or drop a checklist item.

## Two known checklist defects — do not burn time on them

1. `metaTitle … exact keyword in the first five words` is **unsatisfiable** for any
   keyword of five words or more. Put the keyword at word one and record the
   failure with that reason.
2. `Slug short, hyphenated, lowercase, no stop words` **contradicts** `Target
   keyword in H1, metaTitle, slug`. Your slug is the pre-verified exact-match
   keyword; keep it and record the failure.

Both are checklist bugs, not your fault. They accounted for 16 of the last batch's
22 failures.

## Housekeeping

- **Namespace every scratch file by slug**: `<slug>-<purpose>.md`. The scratchpad
  is shared across concurrent agents — in one earlier batch three agents each wrote
  `scratchpad/body.md` and overwrote one another mid-draft.
- Write only `content/batches/2026-09-02-bouquet/blogs/<slug>.json` and
  `content/batches/2026-09-02-bouquet/research/<slug>.md`. Do **not** create or
  edit `batch.json`.
- All 10 slugs were checked against the 935 live articles and are free.
- `WebSearch` is exhausted for this session (200/200) and `WebFetch` may be
  hook-blocked. Expect both to fail. Work through sandboxed fetches, the OpenAlex /
  Crossref / DOAJ / Semantic Scholar APIs, and DuckDuckGo HTML. **Record what you
  could not verify because of it** rather than guessing — and never treat an empty
  or failed fetch as evidence of absence.
