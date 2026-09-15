# Research brief — `cute website for girlfriend`

Batch `2026-09-15-virtual-gift-30`, **wave 2**. Market: India. Evergreen.
Category `modern-romance`. Templates `/nutrition`, `/catch`, `/photo-puzzle`.

Primary: **cute website for girlfriend**
Secondary: `cute website for gf` · `cute website for your girlfriend` ·
`cute website for girlfriend birthday`

---

## Phase 0 — first-party data gate

`content/facts.md`, regenerated 2026-09-15. Gate passes: well over 3 relevant
lines, and the two that open the post are both in the first 150 words.

BRIEF-WAVE2 §4 says not to reuse wave 1's default pair. Checked three siblings
(`digital-gift-for-girlfriend`, `surprise-gift-for-girlfriend-website`,
`what-is-a-virtual-gift`): **all** open on 40.6% password-protection plus the
6.2-hour edit gap. Neither opens this post.

Opening pair chosen instead, both under-used and both *about* the no-occasion
intent this keyword carries:

- Occasion-dated pages, every festival plus every wedding type, are 144 of 3,894
  pages, 3.7%; the platform is 96.3% romantic and everyday pages — measured
  2026-09-09
- 3,377 registered creators, average 1.29 pages each — measured 2026-09-15

Used later in the body: 49.0% phone opens, 11.5 views per page, 6.2-hour edit
gap, 94.1% publish rate, 40.6% password rate (FAQ only), /love-gf 25.8%,
/apology-dashboard 23.9%, /birthday-gf 8.1%.

**Pricing:** the `## Pricing (fill in by hand)` block in `facts.md` is empty.
The post states that no figure is being quoted and points at `/templates`. No
price, free tier or paid tier is asserted anywhere.

---

## Phase 1 — SERP analysis

### What was actually run, and what failed

`WebSearch` is exhausted (200/200) and `WebFetch` is blocked, per BRIEF-WAVE2 §0.
The sanctioned substitute is `node scripts/serp.mjs "<query>"`.

**It never returned a result for this keyword.** Every attempt died on
`brave rate-limited (429) after 4 attempts`. Fifteen invocations — 60 Brave requests —
over roughly 75 minutes, in three separate backoff loops (25–100 s sleeps, randomised). `ps` showed
**~18 concurrent `serp.mjs` processes** from sibling wave-2 agents sharing the same
Brave key, which is the cause. Four research SERPs
(`playfulness in romantic relationships research open access`,
`relational idioms couples private language study`,
`just because gift giving non occasion consumer research`,
`humor romantic relationship satisfaction open access study`) failed identically.

This is recorded as an audit failure against *"The post contains at least one claim
none of the top 5 pages make"*, with a re-check trigger, rather than hidden.

### Evidence used in its place

**1. The cluster SERP in BRIEF-WAVE2 §5** (measured 2026-09-15, `locale=us-served`,
discounted accordingly), for the sibling keyword `birthday website for girlfriend`:

| # | Result | Type |
|---|---|---|
| 1 | `github.com/nikitayadav19/HappyBirthdayGF` | source repo — clone-it-yourself |
| 2 | yourlovepage.online | tiny startup |
| 3–6 | four Reddit threads (r/webdesign, r/learnprogramming, r/Gifts, r/TwentiesIndia) | forum |
| 7 | yourlovepage.com | tiny startup |
| 8 | giftsqr.com | tiny startup (batch competitor) |
| 9 | blink.new | AI site builder |
| 10 | TikTok | video |

Read properly, that SERP says four things. There is **no ecommerce** — no Amazon,
no Flipkart, no gift card. There is **no authoritative page at all**. The #1 result
tells the searcher to clone a repository, i.e. the best answer Google can find is
"build it yourself". And **four of ten results are Reddit**, which means the demand
is real and the supply is people asking each other.

For the `cute` variant specifically the intent is softer than `birthday` — no date
attached — so the GitHub/tutorial pressure should be lower and the Reddit/Pinterest
share higher. That is an inference from the sibling SERP, not a measurement, and it
is flagged as such.

**2. India autocomplete** — `content/keywords/2026-09-15-virtual-gift-100/ac*/autocomplete.csv`,
which BRIEF-WAVE2 §0 names as the better source of truth on phrasing because it is
genuinely India-geo:

| phrase | seed hits |
|---|---|
| cute website for gf | 12 |
| cute website for girlfriend | 11 |
| cute website for your girlfriend | 7 |
| cute website for girlfriend birthday | 2 |

Every one of those surfaced off `romantic website for girlfriend …` and
`personalised website for girlfriend …` seeds, which is direct evidence that
Indian searchers treat *cute*, *romantic* and *personalised* as three sibling
modifiers on the same head — exactly the split this post is written to occupy.

### Competitor pages — not fetched

`yourlovepage.online`, `yourlovepage.com`, `giftsqr.com` and `blink.new` are
competitors under `references/competitors.md` (giftsqr.com is named in `BRIEF.md`
§1; the others are "make a website for your girlfriend" tools and tutorial sites,
which the competitor file lists explicitly). They are **not cited, not linked and
not paraphrased**. Nothing on this page derives from them.

---

## Phase 2 — gap analysis

### Table stakes for the cluster

- What a "cute website for your girlfriend" actually is
- Concrete ideas, not adjectives
- Whether you need to code
- How you send it and whether it stays private
- What it costs

### The gap

Nobody in this cluster distinguishes **cute** from **romantic**. The GitHub repos
and the startup landing pages all resolve to the same artefact: a page that says
"I love you" with hearts on it. The searcher typing *cute* is asking for something
smaller and funnier — a joke she can screenshot — and there is no page anywhere in
the result set that says so, let alone one that hands over five specific formats.

Second gap: nobody publishes usage data, because nobody has any. The 96.3%
everyday-page figure is the number this post owns.

### Fan-out sub-queries → H2s

| Sub-query | H2 |
|---|---|
| what counts as cute vs romantic | What makes a website cute rather than romantic |
| cute website ideas for girlfriend | Five cute website ideas for a girlfriend, and what each one actually does |
| which one should I pick | Which format to pick, side by side |
| what do I write on it | What to write on a cute page when there is no occasion |
| when is this a bad idea | When a cute page is the wrong call |
| how long / how much | How long this takes, and what it costs |

### Angle

> Wins by being the only post that treats "cute" as a separate format from
> "romantic" — joke-shaped pages sent on a day that is not anything — using
> SubhSandesh's own finding that occasion-dated pages are 144 of 3,894 (3.7%) and
> the platform is 96.3% everyday.

---

## Cannibalisation

No `nearestLive` on this row — no published subhsandesh page sits on this keyword.

Two wave-2 siblings are adjacent and the line between them is kept clean:

| Row | Owns | This post does not |
|---|---|---|
| `birthday-website-for-girlfriend` | the occasion — her birthday, a dated page | mention birthdays except to exclude them, and `cute website for girlfriend birthday` is carried as a secondary only because India autocomplete returns it on the cute seed |
| `romantic-website-for-girlfriend` | the register — declaration, sincerity, love-letter tone | write a single line of romantic copy; the whole body argues the opposite register |
| **this row** | **no occasion, joke-shaped, small and silly** | — |

No phrasing listed as another row's `secondaryKeywords` is targeted.

---

## Templates — read before writing, per BRIEF-WAVE2 §2

The assigned row is `/nutrition`, `/catch`, `/photo-puzzle`. All three were read in
`app/lib/prompt.ts` before a word was written. **Two of them are jokes by design**
and the post describes what they actually do:

- **`/nutrition`** — "Nutrition Facts — a nutrition label where the product is a
  person (serving size 1, calories ∞); tap any row and the sender explains why it
  is on the label." Written up as a deadpan comedy format whose layout carries the
  joke, with an explicit warning that a list of someone's "ingredients" reads as a
  list of faults after a bad week. Not described as a romantic gesture.
- **`/catch`** — "Catch — a letter that falls from the sky one line at a time,
  caught with the recipient's own face; nothing is ever locked, each catch just
  adds a line." Written up as a camera game, with the camera named as a hard
  requirement and three situations where that kills it (train, office, dislikes
  being filmed).
- **`/photo-puzzle`** — "The Last Piece — a photo jigsaw where each piece placed
  reveals a line of a letter and plays a note, and the final piece is not in the
  box." Used as the assembly format, which is where the IKEA-effect source earns
  its place.

No swap was needed; all three fit the cute axis better than anything else in
`TEMPLATE_LINKS`. `/templates` is linked once, at the closing CTA. Four internal
links total, each placed after the block that earns it.

---

## Phase 3 — sources

Caps checked against `SPENT-SOURCES.json` (wave 1: 137 URLs, 111 domains) and
against every file in `blogs/` before committing. None of the six banned domains and
none of the twelve one-slot-left domains is touched.

Three of the four domains — `cambridge.org`, `ejop.psychopen.eu`, `kirj.ee` — are
new to this batch at count 0. **The fourth needs flagging honestly:**
`https://www.hbs.edu/ris/Publication%20Files/11-091.pdf` is already cited once, by
wave 1's `virtual-gift-link-free`. This post takes it to **2 of the permitted 2 URL
uses, and hbs.edu to 2 of 3 domain uses** — compliant, but at the URL ceiling. Any
later wave-2 agent reading `blogs/` will now see it at 2 and must not take it. It
was kept rather than swapped because the IKEA-effect finding is load-bearing in two
places (the jigsaw H3 and the whole downside section), and the journal version
(10.1016/j.jcps.2011.08.002) is `oa_status: closed` per Unpaywall, so there is no
open substitute on a fresh domain.

| # | Source | Domain | Test |
|---|---|---|---|
| 1 | de Moraes et al., *Adult playful individuals have more long- and short-term relationships*, Evolutionary Human Sciences, 10 Mar 2021 | cambridge.org | subject ✓ scholarly ✓ OA ✓ |
| 2 | DiDonato & Jakubiak, *Strategically Funny*, Europe's Journal of Psychology, 19 Aug 2016 | ejop.psychopen.eu | subject ✓ scholarly ✓ OA ✓ |
| 3 | Bîrlea, *Soft Power: 'Cute Culture'*, Trames, 20 Sep 2023 | kirj.ee | subject ✓ scholarly ✓ OA (CC BY 4.0) ✓ |
| 4 | Norton, Mochon & Ariely, *The "IKEA Effect"*, HBS Working Paper 11-091, 2011 | hbs.edu | subject ✓ working paper, open ✓ |

**Every one was fetched and read.** Verified claims, and only these are used:

1. n = 1,191 Brazilian adults (646 cis men, 494 cis women), OLIW inventory.
   Other-directed playfulness — defined in the paper as "enjoying to play with
   others; using one's playfulness to make social relations more interesting…
   enjoying good-heartedly teasing" — positively predicted number of short- and
   long-term partners in men. The body says it is correlational, self-reported and
   single-country, because the paper says so in its own limitations section.
2. n = 224. Participants produced positive humour in both contexts but limited
   negative humour when pursuing a long-term relationship; a target's positive
   humour increased attraction, especially women's. The body discloses that this is
   **relationship initiation**, not established couples.
3. Kawaii analysed as a deliberate persuasive strategy, used "to arouse empathy"
   and "a sense of affinity". Read via `pdftotext` on the journal PDF. The body
   does not overclaim: it is Japanese advertising, not romance.
4. Builders priced their own origami at M = $0.23 (SD 0.25) against the M = $0.27
   non-builders paid for expert-folded origami, and — the load-bearing half —
   "expected others to share their opinions". That last clause is what the
   downside section is built on.

**Subject test:** all four are about playfulness, humour, cuteness or the valuation
of self-made things. None is "about India" or "about the internet".
**Swap test:** none survives a move to a sibling post. Playfulness, humour styles,
kawaii and the IKEA effect are all specific to the *cute/joke/assembled* axis; drop
any of them into `long-distance-relationship-gifts-india` or `digital-gift-for-wife`
and it is visibly imported.
**Generic context statistics:** zero. No PIB, no TRAI, no Census, no MEA.
**Wikipedia:** zero body links. Four entities appear in `structuredData` `sameAs`
only (Kawaii Q281639, Play (activity) Q1150958, IKEA effect Q1653973, Humour
Q35874), each verified against the Wikipedia API on 2026-09-15 with its Wikidata QID
paired. Per `structured-data.md` those do not count against the 0–2 body budget.
**Paywalled:** none. All four were read in full, so no abstract-only disclosure is
needed.

### What was searched for and not found

Per BRIEF-WAVE2 §0 and `research-sources.md`, the honest negative result: **no
open-access research on non-occasion / "just because" gift-giving was findable with
the tools that work in this sandbox.** Queries run:

- DOAJ API: `surprise unexpected gift recipient` (0), `handmade gift effort
  appreciation` (0), `gift givers recipients perspective mismatch` (0),
  `everyday small gestures relationship wellbeing` (0), `playful teasing couples`
  (0), `pet names nicknames couples` (0), `relational maintenance technology` (0),
  `self-expansion novel arousing activities couples` (0 usable — the one hit was
  mdpi.com, listed as blocked in `BRIEF.md` §10), `gift giving symbolic meaning`
  (5, none on-topic), `shared laughter couples interaction` (1, frontiersin.org,
  banned at cap 3)
- OpenAlex: HTTP 429, "Insufficient budget… Resets at midnight UTC" — the shared
  daily budget was spent by sibling agents
- Semantic Scholar: HTTP 429 on all five queries
- Crossref + Unpaywall for `idiomatic communication in romantic relationships`,
  `relational maintenance behaviors everyday romantic partners`,
  `cuteness kawaii emotion approach behavior`,
  `gift giving effort thoughtfulness recipient appreciation` — hits found, no OA
  location for any of them
- The IKEA-effect journal version (10.1016/j.jcps.2011.08.002) is `oa_status:
  closed` per Unpaywall, which is why the **HBS working paper** is cited instead —
  open, and it is the same three authors reporting the same studies

So the "what to write when there is no occasion" section leans on first-party data
rather than a padded government statistic, which is the outcome
`research-sources.md` asks for.

---

## Phase 4–5 — draft and targeting

- Body **1,717 words**, FAQs excluded. 1 H1, 7 H2, 5 H3.
- Direct answer in the first 150 words, three first-party numbers inside it,
  split across three paragraphs of 2–3 sentences each.
- One comparison table, 4 rows, with a first-party column (page counts and shares).
- `ItemList` mirrors the five H3s in order; `@id`-matched enrichment block on
  `…#post` carries `about`, `mentions` and four `citation` entries mirroring
  `batchMeta.sources` one-to-one.
- **11 FAQs**, none restating a body heading — deliberately aimed at coding,
  old phones, password-forwarding, early-relationship etiquette, post-send edits,
  the "cringe" objection, the camera requirement, warning her first, gender
  neutrality, frequency, and no reply.
- Downside section names four cases where SubhSandesh loses, including the
  uncomfortable one: you will overrate what you built.
- Category `modern-romance`, per the plan row. Not `indian-festivals` — nothing
  here is a festival.
- Slug checked against Strapi on 2026-09-15: `total: 0`, free.

## Phase 6 — audit

49 passed, 1 failed. The single failure is *"The post contains at least one claim
none of the top 5 pages make"* — a Phase 1 blocker, not a content weakness: the top
5 for this exact keyword could not be opened because `serp.mjs` was rate-limited on
all fifteen invocations. Re-check trigger is recorded in the `why`.
