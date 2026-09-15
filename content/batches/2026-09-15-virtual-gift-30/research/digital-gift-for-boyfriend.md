# Research brief — `digital gift for boyfriend`

- **Batch:** `2026-09-15-virtual-gift-30`, wave 2
- **Slug:** `digital-gift-for-boyfriend`
- **Secondary keywords:** `digital gift ideas for boyfriend`, `e gift for boyfriend`
- **Category:** `digital-gifts-romance`
- **Templates assigned and used:** `/watch`, `/loveflix`, `/darling` (plus `/templates` at the closing CTA)
- **Row note:** replaces `birthday website for boyfriend`, killed by the live
  `/blog/birthday-surprise-website-for-boyfriend` (Jaccard 0.80). Unclaimed
  Gate-passing survivor, est. 1,000–3,000/mo.

---

## Phase 0 — first-party data gate

`content/facts.md`, regenerated 2026-09-15. Gate requires 3 relevant facts with 2
inside the first 150 words. **Passed.** Eight facts used; three sit in the opening
block (4,357 pages / 16 page types, 11.5 average views per created page, and the
3.7% occasion-dated vs 96.3% everyday split).

BRIEF-WAVE2 §4 asks for an opening pair nobody adjacent has used. The two
boyfriend siblings both open on the 40.6% password rate and the 94.1% publish
rate; this post opens on **11.5 reopens** and **3.7% occasion-dated**, neither of
which appears in any sibling's opening block. The 94.1% figure appears here only
inside the comparison table.

Two mandatory disclosures are honoured in the body: the `## Pricing` block in
`facts.md` is empty, so the post states plainly that no current price list is
published and points at `/templates` instead of inferring one; and the database
records which *template* was opened, not who received it, so the 427 Darling
pages are described as format popularity, not as 427 boyfriends.

---

## Phase 1 — SERP analysis

### What could and could not be run

**WebSearch is exhausted (200/200) and WebFetch is blocked** per BRIEF-WAVE2 §0.
`node scripts/serp.mjs "digital gift for boyfriend"` was attempted **twelve times
across roughly three hours**, in three separately-scheduled background runs with
2-minute and then 4-minute backoff. Every attempt ended in
`brave rate-limited (429) after 4 attempts` — roughly thirty wave-2 agents were
sharing the same Brave quota. The two `--gate` runs
(`vs "online gift for boyfriend"`, `vs "virtual gift website for boyfriend"`)
failed identically. **No live SERP was obtained for this exact keyword**, and the
audit records that against the fan-out item rather than pretending otherwise.

### What was used instead

**1. India-geo SERP already collected for the nearest keyword**
(`content/keywords/2026-09-15-virtual-gift-100/serps.md`, Firecrawl
`location: India`, measured 2026-09-15, top-10):

| keyword | weak/10 | who actually ranks |
|---|---|---|
| `digital gift for girlfriend` | 5/10 | **Reddit #1**, qlovy #2, gifft.me #3, giftsqr #6, digiflower #8, Etsy, Pinterest ×2, IG, YT |
| `virtual gift for boyfriend` | 5/10 | gifft.me, ourgiftverse, qlovy, digiflower, surprises.gift, blog.messagear + Reddit, Pinterest ×2, YT |

Every named domain there is a competitor per `BRIEF.md` §1 and
`references/competitors.md`. **None is cited, linked or paraphrased.**

**2. The us-served evidence recorded in BRIEF-WAVE2 §5** for `digital gift for
wife` (label: `locale=us-served`, discount accordingly): sendbestgift ·
lettersbyheart · a bestproducts listicle · Reddit · Etsy · **then a wall of
BestBuy gift cards**. This is the collision the brief warns about, observed
directly.

**3. India autocomplete** —
`content/keywords/2026-09-15-virtual-gift-100/ac*/autocomplete.csv`, real
India-geo autocomplete and, per BRIEF-WAVE2 §0, the better source of truth on
phrasing. The target phrase is present at score 1,100:

```
digital gift for boyfriend,4,4,1100,2,digital gift | digital gift  | digital gift f | digital gift for
```

And the collision is visible in the same file — the `digital gift` prefix
completes overwhelmingly to the *card*:

```
digital gift cards,3,5,1250   digital gift cards free,4,4,1050
digital gift card amazon,4,4,601   digital gift card roblox,4,4,600
digital gift card store,4,4,560    digital gift card steam,4,4,557
digital gift cards visa,4,3,562
```

The secondary `e gift for boyfriend` is corroborated by a live `e gift` cluster
in the same file (`e gift template`, `e gift free`, `e gift online`,
`e gift for girlfriend`, `what e gift card`), which is likewise half retail
cards.

### Reading of the competitive set

There is no authoritative page on this phrase. The adjacent SERP is a Reddit
thread at #1 plus four small personalised-page startups, none of which is written
for someone who has just been shown a wall of Amazon and Steam codes. Nobody
separates the two products; the retail results sell the card and the startup
results sell the page, and the searcher is left to work out which one they meant.

---

## Phase 2 — gap analysis and cannibalisation

### Cannibalisation check (BRIEF-WAVE2 §3) — **differentiate, not abort**

My row carries no `nearestLive`, but two wave-1 siblings in this same batch are
close enough to matter, and both were read in full before drafting.

| post | the question it answers | opening facts | H2 spine |
|---|---|---|---|
| `online-gift-for-boyfriend` | *will he find a personalised page cringe, and which format suits him?* | 94.1%, 40.6%, 11.5 | six formats ranked by reopens |
| `virtual-gift-website-for-boyfriend` | *which service should I build it on?* | 40.6%, 94.1%, 1.29 | five checks on a platform |
| **this post** | *the word "digital" just put a wall of gift cards in front of me — which of the two products did I mean?* | 11.5, 3.7%/96.3% | buy-vs-make decision, with the Indian rules for the card |

**The split in one sentence:** the two siblings assume you have already decided to
make something and argue about *whether he'll like it* and *where to build it*;
this post is for the searcher who has not decided, because the word "digital"
returned a gift card, and it settles that fork before anything else.

The `--gate` runs that would have quantified the overlap could not be executed
(Brave 429, above). The qualitative check is recorded instead: no H2 here
duplicates a sibling H2, the format list is four capability-led entries rather
than a ranked list of six, and the templates barely overlap — `/watch` has never
been linked anywhere in this batch, and `/loveflix` and `/darling` are used here
in a different frame (video-first and serious-register, against the siblings'
"ranked formats" and "platform checks").

Both siblings are linked from the body, placed after the sections that earn them:
the cringe question after the format list, the platform question in the
wrong-choice section.

### Table stakes

- What a digital gift actually is, in plain words.
- A list of concrete formats with what each needs and how long it takes.
- Something about sending the link, and about the recipient opening it.
- A section admitting where the recommendation fails.

### The gap

**Nobody separates "digital gift" from "digital gift card."** Retail results sell
a prepaid code; page-builder results sell a made page; not one of them names the
fork or gives the rules that govern the card in India. That is the entire post.

### Stale data

The gift-card research available in the open is old — Offenberg is 2007, Anitsal
et al. 2013. The post says the dates out loud rather than laundering them, and
the current numbers in the post are all first-party or regulatory (RBI, updated
27 December 2024).

### Fan-out sub-queries → H2s

| sub-query | H2 |
|---|---|
| is a digital gift the same as a digital gift card? | Digital gift or digital gift card — which one did you mean? |
| what are the rules on gift cards in India? | What a digital gift card actually is in India |
| what digital gifts can I give a boyfriend? | Four digital gifts for a boyfriend a gift card cannot be |
| which is better value? | What each option costs him to open |
| does a homemade digital gift mean more? | Does a made thing land better than a bought code? |
| do I have to wait for his birthday? | Why a digital gift for a boyfriend does not need an occasion |
| when should I just buy the card? | When a digital gift is the wrong choice for your boyfriend |

Flagged honestly: these were inferred from autocomplete and the adjacent SERP,
not observed on a live SERP for this phrasing.

---

## Phase 3 — sources

Cap check run against `SPENT-SOURCES.json` and all 30 sibling `blogs/*.json`
before committing to anything. Banned at domain cap (arxiv, pmc.ncbi,
journals.plos, frontiersin, pewresearch, gsb.stanford, europepmc at 5) — none
used. Three of the four domains below are **new to the batch**.

| # | source | domain state before this post | subject test | swap test |
|---|---|---|---|---|
| 1 | RBI, *Master Directions on Prepaid Payment Instruments*, issued 27 Aug 2021, updated 27 Dec 2024 | `rbi.org.in` at 1 (this URL used once, by `what-is-a-digital-gift`) — takes slot 2 of 2 | the rules that define the product this post is disambiguating | fails nowhere else in the batch: no other post argues about gift cards |
| 2 | Offenberg, "Markets: Gift Cards", *Journal of Economic Perspectives* 21(2):227–238, Spring 2007 | `aeaweb.org` — **new** | gift cards, empirically | specific to buy-vs-make |
| 3 | Anitsal, Anitsal & Brown, "Gift Cards and Gift Giving", *Journal of Applied Marketing Theory* 4(1), 2013 | `digitalcommons.georgiasouthern.edu` — **new** | gift cards and what they communicate in a relationship | specific |
| 4 | Gardiner & Bec, "The culture of gifting with the emergence of online tourism experiential gift-giving", *IJCTHR*, 2021 (N = 39) | `hdl.handle.net` at 1 — **new URL** | online, non-physical gifting and its risks | specific |

**Peer-reviewed and open-access:** #3 (JAMT, open-access via Georgia Southern's
Digital Commons) and #4 (repository record, Griffith Research Online).
**Generic government statistic:** exactly one (#1, RBI), and it is subject-specific
rather than "India has N internet users".

**Verification level, stated plainly.** #1 was read in full (the PPI rules were
extracted from the live page text and quoted). #2, #3 and #4 were read as
**published abstracts only** — `aeaweb.org` and
`digitalcommons.georgiasouthern.edu` both returned **HTTP 403** on their PDFs to
this machine, and the Griffith record is marked *Metadata only*. Nothing in the
body goes past what those abstracts state, the body says so in the Sources
section, and it is recorded as a failed audit item.

### Sourcing attempts that produced nothing, named

The gift-giving consumer-psychology literature is almost entirely paywalled and
three discovery APIs were saturated by the concurrent wave:

- **OpenAlex** — daily budget exhausted (`429 Insufficient budget`) before the
  first query returned.
- **Semantic Scholar Graph API** — `429` on fifteen consecutive attempts.
- **Crossref + Unpaywall**, 210 candidate DOIs across the queries
  `gift card impersonal recipient preference gift giving`,
  `giver recipient asymmetry gift exchange`,
  `personalised gift thoughtfulness recipient perception`,
  `handmade gift perceived love recipient`,
  `gift personalization consumer evaluation`,
  `e-gift card online gifting adoption intention`,
  `effort and thoughtfulness in gift giving`,
  `digital gift giving mediated intimacy couples` — **four** open-access hits
  with a fetchable host, of which one (#4) was usable.
- **DOAJ**, searched on `bibjson.title:"gift card"`, `bibjson.title:"gift
  giving"`, `bibjson.abstract:"digital gift"`, `bibjson.title:"virtual gifting"`,
  `bibjson.abstract:"gift" AND bibjson.abstract:"boyfriend"` — the last returned
  zero. #3 came from here.
- Named papers that would have been ideal and are closed: *Giver-Recipient
  Discrepancies Contribute to Gift Card Non-redemption* (PsycEXTRA, 2014),
  *Who cares more? A giver–recipient asymmetry* (EJM, 2025), *Gift-giving in
  romantic couples serves as a commitment signal* (Evol. Hum. Behav., 2019).
  Unpaywall reports no open version of any of them.

Four sources is the floor, not a comfortable number, and it is the honest ceiling
of what this sandbox could reach today.

---

## Phase 4–5 — draft, links, schema

- 1,733 words in `contentMarkdown`, FAQs excluded. 10 FAQs, none restating a body
  heading.
- Internal links: `/watch`, `/loveflix`, `/darling`, `/templates` — four, all in
  `TEMPLATE_LINKS`, each placed after the section that earns it. Two `/blog/`
  sibling links are excluded from that count by the verifier's own `/blog` filter.
- Every template description was taken from `app/lib/prompt.ts` before writing:
  `/watch` is "a video you made given a page of its own — a real player, a channel
  row, clickable chapters and a pinned comment"; `/loveflix` is "a streaming
  service with one show on it and your partner as the lead"; `/darling` is the
  "dark, dramatic romantic page". None of the three is a joke template, so none is
  described as one.
- `structuredData`: an `ItemList` mirroring the four H3s in order, plus an
  `@id`-matched enrichment block on `<canonicalURL>#post` carrying `about`,
  `mentions` and a `citation` array mirroring `batchMeta.sources` one-to-one. All
  four `sameAs` pairs verified against the Wikipedia API with Wikidata QIDs —
  Gift `Q184303`, Gift card `Q554910`, Reserve Bank of India `Q944085`,
  Stored-value card `Q8428168`.
- Slug checked against Strapi: `filters[slug][$eq]=digital-gift-for-boyfriend`
  returns `total: 0`. Category `digital-gifts-romance` confirmed live.

## Phase 6 — audit

48 passed, 2 failed, disjoint, 50 total, strings byte-verbatim from
`references/publish-checklist.md` (generated with the verifier's own parser).
Both failures are the SERP and sourcing limits described above, and both name the
condition that would close them.

## Phase 7 — verifier

`node scripts/verify-batch.mjs content/batches/2026-09-15-virtual-gift-30`
reports **zero problems** against this slug:

```
digital-gift-for-boyfriend   1733  10  48/2  digital-gifts-romance  /watch /loveflix /darling /templates
```

One hand-judgement note is raised and is **correct as written**:

> `? price-adjacent "₹1" … The maximum value of each prepaid gift instrument is ₹10,000.`

That figure is the Reserve Bank of India's regulatory cap on a third-party
product, quoted from the Master Directions. It is not a claim about what
SubhSandesh costs — the post explicitly declines to state a price, because the
`## Pricing` block in `facts.md` is empty. No change made.

Source-cap findings were ignored per BRIEF-WAVE2 §7; the cap check that matters
was done by hand against `SPENT-SOURCES.json` and all sibling `blogs/*.json`
before any source was committed to, and is tabled in Phase 3.
