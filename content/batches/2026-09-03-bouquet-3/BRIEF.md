# Batch brief — 2026-09-03-bouquet-3 (bouquet cluster, wave 3)

Read this **before** Phase 1. It carries the batch-level facts no single agent can
see, plus the corrections that came out of wave 2 — where this brief's author was
wrong four times and every error was caught by a writer, not by the orchestrator.

## What is different about this wave: there is no flower post in it

Waves 1 and 2 each spent posts on flower meanings. Wave 3 spends **none**, and
the reason is measured, not stylistic.

Wave 2 bet that **Indian-first framing** would open the flower-meaning SERPs, on
the evidence that `marigold flower meaning in hinduism` returned 1/10 weak
results. That bet was tested properly today and it fails:

| SERP pulled 2026-09-03 | Weak/10 | Who owns it |
|---|---|---|
| `lotus flower meaning in hinduism` | **0** | hinduismfacts.org, hinduvism.com, hinducreed.com, divinehindu.com, hindu-blog.com |
| `hibiscus flower meaning in hinduism` | **0** | hindu-blog.com, soulfulmeanings.com, vedjyotish.org, spiritualall.com |
| `orchid flower represents` | **0** | petalrepublic, flowermeaning.com, theflowerexpert, foliagefriend |
| `lotus flower meaning in hindi` | **0** | shabdkosh.com, dict.hinkhoj.com, hindlish.com — **bilingual dictionaries** |

Two separate closed doors. There is a whole cottage industry of Hindu-devotional
flower blogs that owns the Indian frame outright; and the `… in <language>`
variants are **translation** queries, where the searcher wants the Hindi word
(गुड़हल) and not an essay on symbolism — a Gate 2 page-type mismatch on top of the
Gate 4 cut. Marigold was the outlier, not the pattern.

**So every keyword in this batch is an occasion or life-event gift query, and
every one sits in a marketplace SERP.** That is the shape you are writing into.

## The SERP shape you are actually in

18 SERPs were pulled today (India locale), **18 verified, 0 failures.** Yours is
in your assignment with its full top-10 host list. Nine of the ten are the same
kind:

**Marketplace-owned.** Amazon, Flipkart, Meesho, Etsy, IGP, Winni, FnP,
FlowerAura, GiftaLove, CaratLane. Nobody answers the question; they sell against
it. **This is an editorial vacuum and it is a real opening**, and the conversion
fit is good because a personalised page *is* a gift rather than a description of
one. `holi gift for girlfriend` even has an FnP **staging host**
(`uat-iops-new.fnp.com`) sitting in the top 10, which tells you how thin the
editorial competition is.

**The two exceptions need care.** `what to gift for my wife` (3/10) and
`engagement gift for couple` (3/10) have `theknot.com`, `brides.com`,
`forbes.com` and `nytimes.com` among their strong results. Those are genuine
editorial authorities. They are also US-first, and India-specific ground is the
only place you beat them. **Do not write a generic listicle against Forbes.**

## Stay off the ground of 975 live articles

975 blog articles are live (pulled fresh from `sitemap.xml` today). **104 are
already flower or bouquet posts — 11% of everything published.** Your keyword was
chosen because it is not among them, and your assignment names the closest live
slugs. Read them before drafting.

One finding from wave 2 you should know: a writer read four of the twelve live
**product-term** bouquet pages (`virtual-bouquet`, `digital-bouquet`,
`online-bouquet-maker-free`, `digital-flower-bouquet` …) and found all of them
share a single skeleton — *why digital beats physical → step-by-step → design
tips → table → sharing → checklist*. **If your draft starts to follow that
skeleton, the angle is wrong.** You are writing about an occasion and a
relationship, not about a feature list.

## Internal links

**`https://subhsandesh.in/bouquet-gf` is mandatory in every post** — this is its
cluster and the user asked for it explicitly. Plus **at least one of**
`https://subhsandesh.in/love-gf` or `https://subhsandesh.in/darling`. Then up to
two more from `TEMPLATE_LINKS`, chosen because they are genuinely relevant.
Total internal links: **2–4**, with descriptive anchor text, placed *after* the
section that earns them, never in the opening paragraph.

`TEMPLATE_LINKS` in `app/lib/prompt.ts` holds **36 entries, every one verified
HTTP 200**. Three things to know:

1. **Ten entries were removed on 2026-09-02** because they were 307 redirects
   that had been advertised as link targets across 147 earlier posts:
   `/birthday-bestfriend`, `/birthday-friend`, `/birthday-parents`,
   `/anniversary-gf`, `/anniversary-parents`, `/valentine-gf`,
   `/valentine-bestfriend`, `/missyou-bestfriend`, `/sorry-gf`, `/sorry-friend`.
   **Do not link any of them.** In particular: **there is no `/anniversary-gf`
   page**, which matters to two of you.
2. Several entries are **jokes by design** — `/challan` is a mock traffic notice,
   `/legal-notice` a mock legal notice, `/nutrition` a nutrition label about a
   person, `/court-of-love` a mock trial. Read the `what` before linking one and
   make your anchor text honest about what the reader lands on.
3. `/holi` and `/eid-mubarak` are real festival greeting templates. The Holi
   writer should link `/holi`.

Never invent a slug.

## First-party facts

**Read the numbers out of `content/facts.md`, never out of this brief** — the
database is live and the file moved twice during wave 2. At the 2026-09-03
regeneration: 3,417 pages across 15 types since 2026-03-12; `/bouquet-gf` is the
**#2 page type — 801 created, 23.4%**; `/love-gf` #1 at 1,001 and 29.3%; 42,017
views; 12.3 views per page; 50.2% of views on a phone; 42.7% password-protect
before sharing; 99.5% published; 2,820 registered creators; median **6.9 hours**
first-save-to-last-edit on `/love-gf` (n=1,001).

At least 3 per post, at least 2 inside the first 150 words, quoted **verbatim**
in `factsUsed`. If your figures disagree with these, trust the file and say which
regeneration you read.

**The Pricing block is EMPTY.** No post may state or imply that SubhSandesh is
free, cheap, paid or priced at anything — not in the body, an FAQ, the
metaDescription, the excerpt or a table cell. **Every keyword in this batch is a
gift query and cost is the reader's live question**, so this gap bites harder here
than anywhere. Answer what you can support, and record the gap in the audit.
"No delivery charge" is a cost claim. So is "free". So is "costs nothing".

Related: the harvest returned dozens of `… under ₹100 / ₹200 / ₹500 / ₹1000`
variants and **all were cut on Gate 5** for exactly this reason. Do not target a
price point, and do not fold one in as a secondary keyword.

## Sources

`USED-SOURCES.md` in this directory lists **1,435 distinct URLs across 441
domains** spent over 161 earlier posts. Cite none of those URLs. **31 domains are
closed at 4+ posts**, including `pmc.ncbi.nlm.nih.gov`, `frontiersin.org`,
`aclanthology.org`, `arxiv.org`, `journals.plos.org`, `europepmc.org`,
`cambridge.org`, `en.wikipedia.org`, `doi.org`, `nature.com`,
`link.springer.com`, `journals.sagepub.com`, `escholarship.org`, `mdpi.com`,
`onlinelibrary.wiley.com`, `drikpanchang.com` and `archive.org`. **23 more sit at
exactly 3 posts and one more use closes them** — the file lists those separately,
read it.

4–6 sources. At least 2 pass the **subject test** — about gift-giving behaviour,
ritual and festival observance, marriage and kinship in a specific culture, or
mediated intimacy; not "about India" and not "about the internet". At least 1
peer-reviewed **and** open-access. At most 1 generic context statistic.
Wikipedia 0–2 for entity disambiguation only, and it is a closed domain anyway.

Veins still open and well suited to this batch — **the anthropology and economics
of gift-giving** is the single best fit any wave of this cluster has had:
Shodhganga, eGyanKosh, DOAJ, SSRN, JSTOR Open, Project MUSE Open, PsyArXiv,
university repositories. The route that actually works is **Crossref →
Unpaywall → repository**; OpenAlex, CORE and Semantic Scholar rate-limited to 429
repeatedly across all three waves.

**Never cite or link a competitor.** Retailers: `amazon.in`, `flipkart.com`,
`meesho.com`, `etsy.com`, `igp.com`, `fnp.com`, `fernsnpetals`, `floweraura.com`,
`winni.in`, `giftalove.com`, `oyegifts.com`, `oyehappy.com`, `archiesonline.com`,
`interflora.in`, `caratlane.com`, `bluestone.com`, `candere.com`, `giva.co`,
`nestasia.in`, `flaberry.com`, `myflowertree.com`, `bloomsvilla.com`,
`floraindia.com`, `teleflora.com`, `fromyouflowers.com`, `phool.co`.
Editorial competitors in your SERPs: `theknot.com`, `brides.com`, `marriage.com`,
`forbes.com`, `goodhousekeeping.com`, `hgtv.com`, `giftsitter.com`,
`mommyonpurpose.com`. Flower-meaning sites: `petalrepublic.com`,
`flowermeaning.com`, `theflowerexpert.com`, `florgeous.com`, `rosaholics.com`,
`bloomingexpert.com`, `hindu-blog.com`, `divinehindu.com`. Plus everything in
`references/competitors.md`.

### The cap counts POSTS, not URLs

A URL may appear in at most 2 posts in this batch; a domain in at most 3. The
same domain three times inside *your* post is **one** post against the cap.

In an earlier batch four agents each reported a breach and **all four were
miscounts** — they had counted URL occurrences, and one cut a verified preprint it
was entitled to keep. So prefer a different domain when a sibling looks close,
but **never drop, swap or restructure around a suspected breach yourself.**
Record it, name the URL you would surrender, and let the orchestrator decide.

## Never claim more than the source says — and check this brief

Wave 1's brief asserted several plausible cultural "facts" that **could not be
sourced** (that `sargi` is sent by the mother-in-law; that chrysanthemum reads as
a funeral flower in India; that white flowers mean death). Two writers
independently refused to repeat them.

Wave 2 was worse — **the orchestrator's briefing was wrong four times**:

- It claimed marigold reads as a funeral flower in India. One survey has marigold
  garlanding the corpse, the bride and groom, **and** Lord Shiva, in one state in
  one year. The writer argued the opposite and was right.
- It claimed the hydrangea soil-chemistry angle was uncovered. A competitor
  already led on it. The writer found a better differentiator on its own.
- It mis-stated a slug's stop words.
- It filed an Eid post under the wrong category, against a rule that names Eid
  explicitly.

**This brief may contain the same class of error. Check anything load-bearing,
and if you cannot verify something, leave it out and list it in
`honestAssessment` rather than softening it into the page.** State only what a
source states; keep every paraphrase narrower than the claim, never wider.

## Gate 0 — deadlines, and the dates this brief refuses to give you

Today is **2026-09-03**.

Four of you are on festival keywords. **The 2026 occurrences of Navratri, Diwali,
Dhanteras and Bhai Dooj are all already inside the lead time and cannot pay off
this cycle — you are writing for 2027.** Makar Sankranti and Holi 2027 are
actionable.

**This brief deliberately states no festival date, because none was verified.**
`publish_by` in the shortlist is approximate and marked `~`. Do not put a year in
a title, do not assert a 2027 date you have not verified against a source, and if
you cannot verify one, write the post without a specific date and say so in the
audit. `drikpanchang.com` is a **closed** domain — find another source or omit.

## Hard constraints

- **1,500–1,800 words** in `contentMarkdown`, excluding FAQs, by **plain
  whitespace split** (`md.split(/\s+/).filter(Boolean).length`). This is the
  authoritative measure — `wordCount()` in `app/lib/batches.ts` reads 20–40 words
  *higher*, and trusting it once nearly cost three earlier posts real content.
- **8–12 FAQs**, in `article.faqs` and the FAQPage JSON-LD **only**. Never in
  `contentMarkdown` — Strapi renders `faqs` as its own section.
- **No FAQ question may also appear as a body heading, verbatim *or* nearly.**
  Compare every FAQ against every H1/H2/H3 **on meaning**, not on characters: an
  exact-string check missed three of these in wave 1, where a heading differed
  from its FAQ by two words and still read as the same question asked twice. Token
  overlap ≥0.6 is the threshold to re-examine by hand.
- One comparison table with real values, 3–5 rows, including a first-party column.
- **Name at least one case where SubhSandesh is the wrong answer** and a physical
  gift wins. Every marketplace in your SERP can deliver something we cannot. A
  page that pretends otherwise is not credible.
- `batchMeta.categorySlug` is in your assignment and was checked against the live
  Strapi category list today. **Anything tied to a festival goes in
  `indian-festivals`** — that rule is in SKILL.md and wave 2 broke it once.
- Copy each `publish-checklist.md` item string **byte-verbatim**, `**bold**`
  markers included. Assert `passed ∩ failed = ∅` and `|passed| + |failed| = 50`.
  Collapse any internal whitespace in the item string to single spaces — three
  strings in wave 2 kept raw newlines from the source file.
- Flag failures; never silently fix or drop an item.

## Check the two "known defect" items yourself — do not assume

Wave 1's brief claimed the metaTitle five-word rule and the slug stop-word rule
always fail. **That was wrong and five writers caught it.** The metaTitle rule is
only unsatisfiable when the keyword is **six words or more**; at five or fewer it
passes if the keyword opens the title. The slug rule passes whenever the
exact-match slug happens to contain no stop words. **Count the words in your own
keyword and the tokens in your own slug, then record what is true.** Several of
this batch's keywords are 5, 6 and 7 words, so the answer genuinely differs
between you. A false failure is as corrosive as a hidden one.

## Housekeeping

- **Namespace every scratch file by slug**: `<slug>-<purpose>.md`. The scratchpad
  is shared — in one batch three agents each wrote `scratchpad/body.md` and
  overwrote each other mid-draft.
- Write only `content/batches/2026-09-03-bouquet-3/blogs/<slug>.json` and
  `content/batches/2026-09-03-bouquet-3/research/<slug>.md`. Do **not** create or
  edit `batch.json`.
- All 10 slugs were checked free against the 975 live blog slugs and the 161
  slugs already committed across 13 batches.
- `WebSearch` is exhausted and `WebFetch` may be hook-blocked. Expect both to
  fail; work through sandboxed fetches and the Crossref / Unpaywall / DOAJ APIs.
  Two engines returned **false positives** in wave 2: Bing served 127 KB of an
  unrelated cached Portuguese SERP, and separately HTTP 200 with Wattpad
  fan-fiction. **A 200 that parses is not evidence it answered your query, and a
  failed fetch is never evidence of absence.** Record what you could not verify.
