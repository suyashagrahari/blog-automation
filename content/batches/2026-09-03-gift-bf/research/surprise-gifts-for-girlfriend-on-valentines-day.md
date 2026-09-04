# Research brief — `surprise gifts for girlfriend on valentine's day`

- **Slug:** `surprise-gifts-for-girlfriend-on-valentines-day`
- **Category:** `digital-gifts-romance` (verified live in Strapi, 2026-09-03)
- **Slug availability:** verified free — `strapi.subhsandesh.in/api/articles?filters[slug][$eq]=…` returned `total: 0`
- **Batch:** `2026-09-03-gift-bf`, row 1
- **Secondary keywords served:** `best surprise gift for girlfriend on valentine's day` (7x),
  `how to surprise your girlfriend on valentine's day` (3x),
  `how to surprise your girlfriend with gifts` (2x),
  `how to surprise your long distance girlfriend on valentine's day` (1x)

---

## Phase 1 — SERP analysis

The SERP was **not re-derived.** It is taken from `content/keywords/2026-09-03-gift-gf-bf/serps.md`,
pulled from real Google with `gl=in&hl=en` on 2026-09-03. **AI Overview fired.**
Page-1 organic hosts, 7 of 8 weak:

| # | Host | Type | What the page is optimising for |
|---|---|---|---|
| 1 | `igp.com` | competitor retailer | Fetched. A product category page — H1 "Valentine Gifts for Girlfriend", every H2/H3 a product bucket ("Valentine's Day Chocolate Gifts", "Elegant Watches for Girlfriend"). ~4,000 words of which almost all is grid chrome and SEO copy blocks. No FAQ, no table, no dates, no citations. Optimising for transactions. |
| 2 | `fnp.com` | competitor retailer | Not fetched — the category URL guessed for it returned 404 and no further probing was done. Characterised from host type and from `references/competitors.md`, which names it explicitly. |
| 3 | `flipkart.com` | marketplace | Search-results surface. No editorial answer possible. |
| 4 | `pinterest.com` | UGC | Board of images. Nobody edited it. |
| 5 | `caratlane.com` | jewellery retailer | Fetched. Homepage/PLP; 394 words of prose, 40 near-empty headings, 45 currency figures. A shop. |
| 6 | `amazon.in` | marketplace | Search-results surface. |
| 7 | `youtube.com` | video | Not an extractable text answer. |
| 8 | `confettigifts.in` | **competitor retailer on a blog URL** | Studied, never cited, never linked, structure not mirrored. |

### `confettigifts.in` — the only "strong" result, read in Phase 1

Their blog sitemap (`sitemap_blogs_1.xml`) carries **524 posts**, of which 45+ target
Valentine terms. The three most likely to be the ranking URL were fetched:

| URL slug | Words (incl. chrome) | Structure | FAQ | Table | Currency figures |
|---|---|---|---|---|---|
| `how-to-plan-the-perfect-valentine-s-surprise-for-your-girlfriend` | ~2,850 | 6 numbered H2s, every H3 a product name (Red Crochet Bouquet, Lily Bouquet, Sense of Love) | No | No | 101 |
| `creative-valentines-day-gifts-to-surprise-your-girlfriend-this-year` | ~2,550 | "Why Thoughtful Gifts Matter?" → 5 numbered products → tips → "Why Choose Confetti Gifts" | Yes | No | 102 |
| `unforgettable-valentines-day-gifts-for-your-girlfriend` | ~2,700 | Three product clusters (hampers, jewellery, keepsakes) | No | No | 102 |

**Honest characterisation:** these are product catalogues in blog clothing. The prose
between the product blocks is thin, undated and uncited. The brief did *not* overstate
them, so nothing to correct there. Two framings of theirs are deliberately avoided in
this post: "Why Thoughtful Gifts Matter?" as an opener, and "Why Effort Matters More
Than Extravagance?" — the effort material here is grounded in peer-reviewed work and is
framed as a **risk to the giver**, which is the opposite reading.

### What none of the eight do

Not one of them answers the question the query actually implies. They all answer
*what to buy*. Nobody covers **what to do on 14 February** — the hour of the reveal, the
sequence across the day, or what happens when the plan lands badly.

---

## Phase 2 — Gap analysis

**Table stakes** (present across the retail results, so the post must not look thin
next to them): named, concrete gift options; a personalisation angle; a
long-distance case; something addressing last-minute panic.

**Stale data:** none of the eight cites a dated statistic at all, so there is nothing
to supersede. That is itself the opening.

**The gap:** *timing.* A shop cannot sell you an hour. Every one of these pages treats
14 February as a purchase deadline; none treats it as a timetable with slots that
behave differently.

**Fan-out sub-queries derived here, each becoming an H2:**

1. What actually makes a gift on 14 February count as a *surprise* when she already
   expects one? → `## What makes a gift on 14 February a surprise at all`
2. Which moment of the day should the reveal land in? → `## Six reveal moments for 14 February, ranked by lead time`
3. How much lead time does each option need, and what has to be true at her end? → `## Which reveal window fits the time you actually have`
4. How do I do this when she is in another city? → `## How to surprise a long-distance girlfriend on Valentine's Day`
5. Am I too late if it is already the 13th? → `## If you have left it until the 13th`
6. When is a surprise gift the wrong call? → `## When a surprise gift is the wrong move`

**Angle (`batchMeta.angle`):** wins by being the only page in a SERP of seven shops
that plans the *day* rather than the purchase — six timed reveal moments for
14 February anchored on the 7.2-hour median build window (n=1,001) and on peer-reviewed
evidence that lateness harms less than givers fear while effort raises the giver's own
exposure.

**Distinctness measures taken** (nine siblings drafting adjacent keywords concurrently):

- Does **not** open on "why a digital gift beats a physical one" — the intro opens on
  the SERP's own composition and on the reveal hour.
- The comparison table compares **reveal windows on 14 February**, not digital vs
  physical.
- Primary first-party fact is the **7.2-hour median build window**, chosen precisely
  because a timing post is the one place it is load-bearing, and to leave
  "50.2% open on a phone" as a secondary rather than the lead.
- The six H3s are moments of a day, not product categories.

---

## Phase 3 — Sources

Five sources, all of which pass the subject test (each is genuinely about gift-giving
or long-distance intimacy — none is "about India" or "about the internet").
**Zero generic context statistics.** One Wikipedia link in the body, for the
14 February entity only; it is deliberately kept out of `sources` and `citation`.

| # | Source | Type | Verified how |
|---|---|---|---|
| 1 | Puente-Díaz & Cavazos-Arroyo, "Experiential gifts and the construal of meaningful consumption episodes", *Humanities and Social Sciences Communications*, 21 Dec 2022 — `nature.com/articles/s41599-022-01486-w` | Peer-reviewed, gold OA, **CC BY** | **Full text read.** Five experiments. The cited indirect effect (0.38, 95% CI 0.16–0.61) belongs to experiment 1, whose sample was 199 college students at two private universities in Mexico; both were read in the results section, not inferred from the abstract. A first draft wrongly paired that effect with the n=362 sample from the paper's later 2x2 experiment and was corrected before writing. |
| 2 | Haltman, Herziger, Donnelly & Reczek, "Better late than never? Gift givers overestimate the relationship harm from giving late gifts", *Journal of Consumer Psychology*, 5 Dec 2024 — `doi.org/10.1002/jcpy.1446` | Peer-reviewed, hybrid OA, **CC BY** | **Abstract only.** The article is open access and readable by a human, but Wiley's bot protection returned HTTP 403 and a CAPTCHA to every automated route tried (direct, PDF-direct, reader proxy). The two claims used — that givers overestimate the relationship harm of a late gift, and that the overestimation is attenuated when care is signalled another way such as effort put into creating the gift — are both stated verbatim in the publisher abstract, retrieved via the Crossref and OpenAlex records. **Nothing beyond the abstract is claimed.** **— SUPERSEDED in the remediation pass:** this URL was replaced by Ohio State's own news-office report of the same six studies, which *was* readable in full. See *Source swap* below. |
| 3 | Jurkane-Hobein, "Imagining the absent partner: intimacy and imagination in long-distance relationships", *Innovative Issues and Approaches in Social Sciences* 8(1), Jan 2015 — `iiass.com/pdf/IIASS-2015-no1-art13.pdf` | Double-blind peer-reviewed, DOAJ-indexed, free PDF, DOI `10.12959/issn.1855-0541.IIASS-2015-no1-art13` | **Full text read** (21pp). 19 in-depth interviews with people in Latvia with LDR experience; imagination as the mechanism; four dimensions of intimacy — embodied, emotional, daily, imagined. |
| 4 | "Greater effort, greater pain: Givers' feelings of social exclusion in gift failures across close and distant relationships", *Humanities and Social Sciences Communications* 12, 19 Nov 2025 — `nature.com/articles/s41599-025-06093-z` | Peer-reviewed, gold OA, **CC BY-NC-ND** | **Full text read.** Cited and linked only — no passage, figure or table reproduced, which the NC-ND licence forbids for a commercial blog. The realism check t(341), i.e. 342 participants, and the Study 2 serial-mediation chain (effort → expectation → social exclusion) were read in the results; the "treat the act as the expression rather than hunting for validation" line paraphrases the authors' own implications section. |
| 5 | Shahrier & Khatun, "Development and validation of the gift reciprocation anxiety scale (GRAS) for youths and adults in intimate relationships", *Heliyon* 11(2), Jan 2025 — `doi.org/10.1016/j.heliyon.2025.e41956` | Peer-reviewed, gold OA, CC BY-NC-ND | **Abstract only.** ScienceDirect returned a CAPTCHA to every automated route. The abstract was retrieved in full from the Europe PMC REST API and carries every figure used: n=763 Bangladeshi youths and adults aged 17–36, 7-item single-factor scale, invariant across gender/age/marital status, and the authors' closing argument that gift reciprocation works better read as trust and care than as obligation. **Nothing beyond the abstract is claimed.** |

### Search terms tried, and what came back

Because the literature has nothing on the keyword itself, the *phenomena* were
searched instead, through the DOAJ article API, OpenAlex, Semantic Scholar, Crossref
and the Europe PMC REST API:

- `gift giving` / `gift-giving` (title), `gift givers AND recipients` (abstract),
  `gift givers recipients preference mismatch`, `givers recipients asymmetry gift appreciation`
- `experiential gifts material gifts relationship`, `effort AND gift AND appreciation`
- `long distance relationship maintenance behaviours`, `long-distance relationship` (title)
- `reciprocity AND obligation AND gift AND close`
- `surprise AND unexpected AND enjoyment`, `anticipation AND savoring AND positive event`,
  `surprise AND consumer AND delight`
- `self-expansion AND shared AND couples`, `capitalization AND positive events AND partner`,
  `rituals AND couples`, `special occasion AND celebration AND consumer`

**Two negative findings worth recording.** First, there is essentially no open-access
literature on **surprise as an emotion in gift-giving** — the DOAJ hits for surprise
plus enjoyment are neuroscience and clinical psychology, not gifting, and the one
marketing hit (`surprise strategy on digital advertising avoidance`, 2020) fails the
subject test. The post therefore treats surprise mechanically (predictability of
content vs of timing) rather than citing a literature that does not exist in an
openable form. Second, **`capitalization` and `special occasion` searches returned zero
open-access results**, so the day-timetable framing is argued from first-party build
data and from the three gift papers, not from a study of occasion timing.

### Sources deliberately rejected

- `confettigifts.in`, `igp.com`, `fnp.com`, `caratlane.com` — competitors under
  `references/competitors.md`.
- `phys.org` write-up of Givi, Reshadi & Das on digital vs physical gift cards, and the
  Wiley paper behind it — a sibling post in this batch is using that line of work; left
  alone to keep the batch's sourcing distinct.
- Estudios Gerenciales, "Personal values and gift giving act" (2020) — **on the 42 spent
  URLs list** in `USED-SOURCES.md`. Correctly caught and dropped.
- `research.wur.nl` "Give me your self: gifts are liked more when they match the giver's
  self" — also **spent** (2 posts). Dropped.
- `journal.sjdm.org`, `pmc.ncbi.nlm.nih.gov`, `aclanthology.org`, `arxiv.org` — legal
  here but the corpus already leans on them in 10–17 posts each; nothing topical enough
  was found there to justify a fifteenth page from the same farm.
- Rucker et al. 1992 ("over 75% have received unwanted gifts") and Branco-Illodo et al.
  2020 ("~36% of UK people received at least one unwanted gift at Christmas 2017") —
  both are *secondary* citations inside source 4. Neither primary was opened, so
  neither figure is used anywhere in the post.

### Source-cap status

`nature.com` appears twice in this post's five sources; `doi.org` twice (Wiley and
Elsevier landing pages); `iiass.com` once. **None of these five URLs is on the spent
list.** The batch cap (a URL in ≤2 posts, a domain in ≤3) could not be fully checked at
write time — see the audit failure on that item.

> **Superseded by the remediation pass.** The cap was measured once all siblings
> existed, and the Wiley DOI was then swapped out. The post's five domains are now
> `nature.com` ×2, `news.osu.edu`, `iiass.com`, `doi.org` (Elsevier only). Read the two
> subsections below, not this paragraph, for the current position.

One live collision was caught and fixed: a sibling post
(`romantic-gift-for-bf-birthday`) cites Frontiers `10.3389/fpsyg.2023.1254789`, which
this post had drafted in as source 1. It was swapped for the same authors' 2022
*Humanities and Social Sciences Communications* paper — a different journal, a different
finding (meaningful-memory construal rather than autonomy support) and one fewer shared
URL in the batch.

#### Post-batch recount — done in the remediation pass, 2026-09-03

All ten `content/batches/2026-09-03-gift-bf/blogs/*.json` now exist, so the cap was
measured rather than assumed. Every URL in `batchMeta.sources` **and** in each post's
`structuredData[].citation` was collected, de-duplicated per post, and counted by post
and by registrable domain (public-suffix aware, so `pmc.ncbi.nlm.nih.gov` folds to
`nih.gov`).

**Both caps hold, and nothing is over.**

| Measure | Cap | Batch maximum | Involves this post? |
|---|---|---|---|
| Same source URL across posts | ≤ 2 | **2** — `nature.com/articles/s41599-025-06093-z`, in this post and `romantic-gifts-for-boyfriend-long-distance`. It is the only URL shared by any two posts in the batch. | Yes, at the cap |
| Same registrable domain across posts | ≤ 3 | **3** — `nih.gov`, in `anniversary-gift-for-boyfriend-unique`, `how-to-surprise-my-girlfriend-with-flowers`, `romantic-gifts-for-boyfriend-long-distance` | No |

This post's own domain footprint: `nature.com` 2 posts, `doi.org` 2 posts, `iiass.com`
1 post. Next highest in the batch: `wiley.com`, `plos.org`, `frontiersin.org`,
`europepmc.org` at 2 posts each. The Frontiers swap recorded above is why
`frontiersin.org` stops at 2. So no re-pointing was needed and no citation was changed;
the audit item moved to `passed` on this measurement.

**One caveat worth writing down, because it is a reading the checklist does not ask
for.** `doi.org` is a resolver, not a publisher. Counted at *publisher* level instead of
registrable-domain level, Wiley is reached by four posts in this batch — this post via
`doi.org/10.1002/jcpy.1446` (*Journal of Consumer Psychology*),
`how-to-surprise-my-boyfriend-for-no-reason` via `doi.org/10.1111/aphw.70030` (*Applied
Psychology: Health and Well-Being*), and `anniversary-gift-for-boyfriend-2-years` and
`romantic-gift-for-bf-birthday` via `onlinelibrary.wiley.com` — which would be one over
a cap of three. The checklist says "domain", and on that measure the batch is clean, so
the item passes as written. But if the cap is ever restated in publisher terms, this
post's late-gift DOI is one of the four uses that would have to move, and the honest
replacement is not another Wiley mirror: it is the publishing university's news-office
restatement of the finding, per `audit-remediation.md`. Flagging it rather than
pre-emptively rewriting a citation whose two claims are verified against the publisher
abstract via Crossref and OpenAlex.

---

## First-party data used

Seven lines from `content/facts.md`, quoted byte-verbatim into `batchMeta.factsUsed`
(extracted programmatically from the file rather than retyped, so the
`— measured 2026-09-03` suffix and every straight apostrophe are exact):

1. Median first-save-to-last-edit gap, 7.2 hours, `/love-gf`, n=1,001 — **the lead fact**
2. `/love-gf` #1, 1,001 created, 29.2% — **in the first 150 words with (1)**
3. 50.2% of views on a phone (21,130 of 42,099)
4. 12.3 views per created page
5. 42.7% password-protect before sharing (1,462 of 3,425)
6. 99.4% of started pages published and shared (3,405 of 3,425)
7. `/darling` #4, 349 created, 10.2%

**Gender caveat honoured in the body text itself**, not only in this brief: the post
says outright that "the database records what was created, not who it was sent to, so
treat that as evidence about builders, not about recipients." No number anywhere is
attached to a recipient's gender.

**No price, cost, "free" or tier claim appears anywhere in the file.** The Pricing block
in `facts.md` is empty. Three draft phrases were removed for this reason —
"the cheapest surprise left on the clock", "not free of risk", and "proves you spent
money" — and the JSON was grepped afterwards; the only remaining hit for `price` is
inside the byte-verbatim checklist item string "At least one specific number, date,
price or named source per H2 section".

---

## Internal links

Three, all HTTP 200 on 2026-09-03, all from the five URLs this batch permits, all
placed after the section that establishes why the reader would want them:

| URL | Anchor | Placed |
|---|---|---|
| `/darling` | "the Darling romantic page" | Inside reveal moment 4, where a shared-screen evening reveal has just been described |
| `/love-gf` | "the animated \"I love you\" page" | After all six reveal moments, once the format's job is established |
| `/missyou-gf` | "an \"I miss you\" page" | In the long-distance section, with an explicit note that it sits outside the top-five page types so **no creation figure is quoted for it** |

`batchMeta.templateUrls`: `["/love-gf", "/darling", "/missyou-gf"]` — paths, not URLs.
`/bouquet-gf`, `/templates` and every other slug were left alone.

---

## Structured data

- One `@id`-matched enrichment block on `https://subhsandesh.in/blog/surprise-gifts-for-girlfriend-on-valentines-day#post`,
  carrying `about` (Valentine's Day), `mentions` (Gift, Long-distance relationship,
  Surprise (emotion)) and `citation` mirroring `batchMeta.sources` **one-to-one, five for five**.
- One `ItemList`, `numberOfItems: 6`, mirroring the six H3s in order.
- No `BlogPosting` duplicate, no `FAQPage`, no `AggregateRating`, no `Review`, no `HowTo`.
- Every `sameAs` verified against the Wikipedia API with `redirects=1` and its Wikidata
  QID paired: Valentine's Day `Q37587`, Gift `Q184303`, Long-distance relationship
  `Q1406917`, Surprise (emotion) `Q333173`. No `missing` key on any of the four.

---

## Audit

`|passed| = 46`, `|failed| = 4`, `passed ∩ failed = ∅`, `46 + 4 = 50` — the full
`publish-checklist.md` length. Item strings were extracted programmatically from
`publish-checklist.md` (including `**bold**` markers and multi-line continuations)
rather than retyped, and the disjointness and total were asserted in code before the
file was written.

The four failures are recorded in full in `batchMeta.auditReport.failed`, and in short:
paragraph length (items 6 — the prescribed Block 1 and Block 4-field Block 3 patterns
exceed 3 sentences by construction), stop words in a slug that was assigned rather than
chosen, an imperfect swap test on three general gift-giving sources, and the batch-level
source-cap check being unverifiable while nine siblings draft concurrently.

### Remediation pass, 2026-09-03 — now `|passed| = 47`, `|failed| = 3`

One failure closed, three left standing as structural. Item strings were re-extracted
programmatically from `publish-checklist.md` and the full 50 re-run;
`passed ∩ failed = ∅` and `47 + 3 = 50` were re-asserted in code, and
`node scripts/normalise-audit.mjs content/batches/2026-09-03-gift-bf --check` reports
`0 broken`.

- **Closed: the batch source-cap item.** Measured across all ten sibling posts now that
  they exist — see *Post-batch recount* above. No URL in more than 2 posts, no
  registrable domain in more than 3. No citation was changed to achieve this.
- **Still failed: paragraph length.** Now provably limited to the seven paragraphs
  `page-structure.md` prescribes — the Block 1 answer paragraph and the six four-field
  H3s. Two paragraphs that ran long for no structural reason were split at zero word
  cost: the experiential-gift paragraph under the first H2 (4 → 2 + 2), and the trailing
  product-signal half of reveal 4 (6 → 4 + 2). The earlier `why` claimed "every other
  paragraph is 2-3 sentences", which was not true before those splits and is now.
- **Still failed: slug stop words.** Left untouched deliberately. The `why` now records
  that the exact-match tradeoff was an orchestrator decision, taken with the cost known,
  so nobody reads it as an oversight.
- **Still failed: swap test.** The `why` now names what a closing source would have to
  be — a study of gift *timing inside one named occasion* (delivery hour and reaction,
  anticipation on a date the recipient already knows, or Valentine's Day as a fixed-date
  obligation) rather than gift type, gift effort or gift reciprocity in general — plus
  the two unretrievable candidates to re-check.

### Source swap — the Wiley concentration, acted on rather than just recorded

The publisher-level caveat above was escalated by the coordinator and is now fixed at
source, not annotated. Read at publisher level rather than registrable-domain level,
Wiley had been reached by **four** posts in the batch, one over the cap of three. This
post's use was the weakest of the four and the right one to move: `10.1002/jcpy.1446`
was its **only abstract-only citation**, because Wiley's bot protection returned a
CAPTCHA to every automated route.

**Replaced with the publishing institution's own news office, read in full:**
`https://news.osu.edu/giving-a-gift-better-late-than-never-study-finds/` — Jeff
Grabmeier, Ohio State News, 09 December 2024 (`datePublished` confirmed
`2024-12-09T13:59:05` in the page's own JSON-LD). Ohio State is where Haltman and Reczek
are based, so this is the primary restatement, not an aggregator; `phys.org` carries the
same text under Grabmeier's byline and was the fallback if OSU had not resolved.
Neither `news.osu.edu` nor `osu.edu` is on the spent list, and neither appears in any
other post in this batch.

**Everything the post now claims from it was read on the page, not inferred:**

| Claim in the post | Verified text |
|---|---|
| Six studies | "In a series of six studies, Haltman and his colleagues explored the mismatch…" |
| Givers overestimate the relationship harm | "recipients aren't nearly as upset about getting a late gift as givers assume they will be" |
| Recipients did not read lateness as caring less | "They didn't see a late gift as signaling a lack of care. They were more forgiving than those giving late gifts thought they would be" |
| **65% of Americans think an occasion-based gift should arrive on time** | "A survey by the researchers found that 65% of Americans believed that if you're sending an occasion-based gift for a holiday or birthday, the gift should arrive on time." — a figure the abstract did not carry |
| Effort compensates | participants "wouldn't worry as much if they put together a basket of goodies by themselves rather than buying a pre-made basket containing the same items" |
| The limit: later is worse | "both gift givers and gift receivers thought that the later the gift, the more harm" — two days, two weeks, two months |
| No gift at all is worse than a very late one | "both givers and receivers thought that not giving a gift would harm a relationship even more than being severely late" |

No passage, figure or table is reproduced in the post; the two short phrases above appear
only in this brief as verification evidence.

**Net effect on the batch, recounted across all eleven posts after the swap:**

| Measure | Cap | Batch maximum | Breaches |
|---|---|---|---|
| Same source URL | ≤ 2 | 2 (`nature.com/articles/s41599-025-06093-z`, this post + `romantic-gifts-for-boyfriend-long-distance`) | none |
| Same registrable domain | ≤ 3 | 3 (`nih.gov`, `plos.org`, `frontiersin.org` — none of them this post) | none |
| Same **publisher**, DOI prefixes resolved | ≤ 3 | 3 (Wiley, PLOS, Frontiers, Springer Nature) | none |

Wiley now sits at **3 of 3** — `anniversary-gift-for-boyfriend-2-years`,
`how-to-surprise-my-boyfriend-for-no-reason`, `romantic-gift-for-bf-birthday`, and no
longer this post. The other three Wiley posts were not touched; they are not this
remediator's. Springer Nature sits at 3 of 3 including this post's two `nature.com`
articles, so **this post must not add another Springer Nature source.**

Source count stays at **5** (band 4–6), `structuredData[].citation` still mirrors
`batchMeta.sources` one-to-one, and the subject test still holds on the IIASS distance
study and the 2025 HSSC effort paper, both peer-reviewed and open-access. **Only one
citation now rests on an abstract alone** — Heliyon 2025, blocked by ScienceDirect —
down from two.

Word count **1,791** on the plain whitespace split the schema validator uses (band
1,500–1,800, FAQs excluded), **1,819** on `wordCount()` in `app/lib/batches.ts`, which
is what the studio displays. The swap added the 65% figure, the recipients-forgiving
finding and the two-months limit, so ten sentences elsewhere were tightened to pay for
them — no fact, figure, caveat or link was dropped to make room. FAQs stay at 11 in
`article.faqs` only, internal links at 3 (`/missyou-gf` still carrying no first-party
figure), `factsUsed` byte-verbatim against the 2026-09-03 `content/facts.md`, and no
price, cost, "free" or tier claim appears anywhere reader-facing.

---

## Verification of the two claims the brief flagged, plus what else I found wrong

### 1. "Givers mispredict what recipients want" — **real, but narrower than stated**

Supported, in the direction the brief expects, but the openable evidence is more
specific than "givers mispredict what recipients want":

- The *Journal of Consumer Psychology* 2024 abstract opens by stating that "past work
  has found that there is often a mismatch between the types of gifts individuals send
  and recipients would prefer to receive" — so the mismatch premise is asserted as
  settled by a 2024 peer-reviewed paper, and that paper's own contribution is a
  *different* misprediction: about the harm of lateness.
- The 2025 *HSS Communications* paper states in its introduction that "givers frequently
  fail to select gifts that can be satisfied by recipients", and its own finding is
  about the giver's side — effort raises expectation, so a flat reaction hurts more.
- The mechanism most often cited for the divergence is **relational signalling**, not
  ignorance: Ward & Broniarczyk (2016, *JMR*) — "close friends prioritize relational
  signaling over recipient preferences in their gift choices". I could not open that
  paper directly (paywalled), so it is **not cited** in the post.
- Yang & Urminsky's "Smile-Seeking Givers and Value-Seeking Recipients" (SSRN 2016) is
  the cleanest statement of the divergence I found, and SSRN's landing page was not
  retrievable automatically, so it is not cited either.

**What the post therefore claims** is only what I could open and verify: that givers
overestimate the harm of a late gift, and that effort raises the giver's own exposure.
It does not assert a general replicated effect size for giver–recipient mismatch,
because I could not open a paper that establishes one.

### 2. "The Valentine's-week day sequence is a stable convention" — **not sourced, so omitted**

Every India-facing page I found stating the Rose Day → Kiss Day sequence during this
run was a **competitor**: `confettigifts.in` has both
`7-days-of-valentines-week-complete-guide` and `21-ways-of-celebrating-7-days-of-valentine`,
and `igp.com`'s category page carries "Valentine Week Gifts for Girlfriend: 7 Days of
Rose to Propose Day Surprises". Both are off-limits under `references/competitors.md`.
Per the brief's own instruction, **the sequence is omitted entirely** — the post states
only that Valentine's Day is 14 February, a fixed Gregorian date. No 2027 date and no
weekday is asserted anywhere.

(For the record: a non-competitor source does exist — the sibling
`surprise-gift-for-girlfriend-on-valentines-week` post cites Hindustan Times and
`en.wikipedia.org/wiki/Valentine%27s_Week`. This post simply does not need the claim,
so it spends nothing on it.)

### 3. A third problem, in the instruction set rather than the brief

**`publish-checklist.md` item "Paragraphs 2–3 sentences throughout" is unsatisfiable by
any post that follows `page-structure.md`.** Block 1 mandates a ~150-word answer
paragraph containing three prescribed components; Block 3 mandates that each H3 cover
"the same four fields in the same order". Both produce paragraphs of four or more
sentences by construction. Every post written to page-structure.md must therefore fail
that checklist item, or quietly violate page-structure.md. This one fails the checklist
item openly and says why. Worth resolving in the skill rather than per-post.

**A smaller one, in the brief:** it asks for "**2–4 internal links per post**" but caps
`batchMeta.templateUrls` at "1–3 of those five". A post that links four templates cannot
represent them all in `templateUrls`. This post links three, so the conflict does not
bite here.
