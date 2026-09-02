# Research brief — `new year gift for girlfriend`

- **Slug:** `new-year-gift-for-girlfriend` (checked against live Strapi: free)
- **Batch:** `2026-09-02-bouquet-2`
- **Category:** `digital-gifts-romance` (verified against the 10 live Strapi category slugs)
- **Event:** 1 January 2027 · `publish_by 2026-10-15` — comfortable lead time
- **Secondaries folded into body/FAQs:** `new year gift ideas for girlfriend`, `new year gift for gf`, `happy new year gift for girlfriend`, `new year surprise for girlfriend`
- Written 2026-09-02, finished 2026-09-03.

---

## Phase 1 — SERP analysis (RUN DEGRADED — read this before trusting anything below)

**This phase was not run to the skill's spec, and the post's audit records it as
such.** `WebSearch` was exhausted at 200/200 before this agent started, and every
competitor domain in this SERP is bot-protected — automated fetches return HTTP
403 or a Cloudflare interstitial. **The top five pages were therefore never
read.** No competitor page was fetched, quoted, paraphrased or linked.

### SERP composition (orchestrator's measurement, 2026-09-02)

Ten results, of which **eight are retail**:

| # | Result | Type |
|---|---|---|
| — | Amazon | retailer |
| — | Winni | retailer |
| — | Nestasia | retailer |
| — | FlowerAura | retailer |
| — | CaratLane | retailer (jewellery) |
| — | Tring | retailer (celebrity video) |
| — | NikkiFlower | retailer (florist) |
| — | FNP (Ferns N Petals) | retailer |
| — | Flaberry | retailer (florist) |
| — | NYTimes | editorial, not about partner gifting |

Every one of the nine retailers is on this batch's competitor blocklist or in
`references/competitors.md`. None is citable, linkable or paraphrasable.

### Independent corroboration attempt (weak, and it did not replace the above)

A DuckDuckGo HTML query for the exact keyword returned HTTP 200 and parsed
cleanly, giving these hosts:

`nytimes.com, theknot.com, etsy.com, cnn.com, giftlytic.com,
groovygirlgifts.com, thousandgiftideas.com, nymag.com, businessinsider.com,
creativegaze.com`

**What this is worth:** it corroborates the *shape* of the SERP — retail plus
undifferentiated gift listicles, with NYTimes recurring — and it independently
confirms that no page in the result set is an editorial answer to what a New Year
gift for a partner is *for*. **What it is not:** the Google India SERP. It is
US-centric, shares only one host with the measured set, and per the batch brief a
200 that parses is not evidence a search engine answered the query. It does not
replace the measured SERP and no ranking claim rests on it.

### What could not be verified

- Word count, heading structure, answer position, schema, byline or tone of any
  of the top five pages.
- Whether any competitor already makes the forward-looking argument. Judged *a
  priori* unlikely from the SERP composition (all nine retailers are product
  listings or category pages), but not observed.

---

## Phase 2 — Gap analysis

### Table stakes (inferred from result type, not from reading the pages)

A page on this keyword is expected to carry: a set of concrete gift options; some
handling of the long-distance case; timing/delivery guidance for 31 December–1
January; and something addressing relationship stage ("we just started dating").
All four are present in the post.

### The gap

New Year is **the only romantic occasion that is explicitly about the next twelve
months rather than the last event.** A birthday and an anniversary both look back
at something that already happened; 1 January looks forward at something that has
not. Every retailer in this SERP treats it as a generic gifting date and
competes on catalogue. Nobody writes about the consequence: a gift given on 1
January is *read* as a statement about the year ahead, which is why a
forward-looking gift lands and a generic one does not.

That gap has a mechanical answer no retailer can copy:

- `/rewind` turns the year just ended into a tappable story with every number
  worked out from one date.
- `/capsule` seals predictions both people write blind and reopens them a year
  later — a gift that arrives twice, on a fixed future date.

Both templates were added to `TEMPLATE_LINKS` on 2026-09-02 and have zero blog
coverage.

### Stale data

Not assessable — no competitor page was read.

### Fan-out sub-queries → H2 map

| Sub-query | Where it lands |
|---|---|
| What makes a New Year gift different from a birthday/Valentine's gift? | H2 2 (definition) |
| What are the actual options / new year gift ideas for girlfriend? | H2 3 (5 ranked H3s) |
| Which option is best, and on what basis? | H2 4 (comparison table) |
| When is a digital gift the wrong call? | H2 5 (objection) |
| When should I build it, and how do I control when she sees it? | H2 6 (timing, first-party) |
| Relationship-stage, long-distance, reciprocity, resolutions, password | FAQs (10) |

### Angle (recorded as `batchMeta.angle`)

> Wins by being the only post that treats a New Year gift as a statement about
> the next twelve months rather than a generic gifting date — grounding the
> fresh-start-effect and start-temporal-landmark research against SubhSandesh's
> own 3,397 pages, 50.2% phone-open rate and median 6.9-hour build window, in a
> SERP where 8 of 10 results are retailers selling against the question instead
> of answering it.

### Duplication check against live content

`new-year` appears in **zero** of the 935 live slugs — the site has never covered
New Year. 91 live slugs contain `girlfriend`; the closest by intent are
`virtual-gift-for-long-distance-girlfriend`, `digital-gift-for-girlfriend-day`,
`girlfriend-day-gift-ideas`, `national-girlfriend-day-gifts`,
`birthday-gift-for-girlfriend-online` and
`unique-birthday-gift-ideas-for-girlfriend`. Wave 1 also published
`digital-gift-ideas-for-girlfriend`. **The post is deliberately not a "digital
gift ideas" page:** the ranking criterion is whether the gift arrives a second
time, which none of those posts uses, and the temporal-landmark framing is
specific to 1 January.

---

## Phase 3 — Sources

Search route that worked: **Crossref `query.bibliographic` → Unpaywall →
DOAJ / Europe PMC abstract text.** OpenAlex worked intermittently; the OSF
preprint search API 404s at the documented endpoint; Europe PMC returned 503/504
under load and needed retries.

**Searched the phenomenon, not the keyword**, per `research-sources.md`:
`fresh start effect temporal landmarks`, `new year resolution large-scale
experiment`, `temporal landmarks goal initiation`, `gift giving givers recipients
asymmetry`, `why certain gifts are great to give but not to get`, `anticipation
experiential purchases`, `relationship maintenance romantic couples`, `symbolic
value of gifts thoughtfulness`, `couple ritual relationship satisfaction`,
`digital/virtual gift intimacy`, `gift giving India festival consumer`.

### Rejected, and why — this matters more than the accepted list

The canonical literature for this angle is **paywalled with no open version**,
checked one DOI at a time through Unpaywall:

| Paper | DOI | Unpaywall |
|---|---|---|
| Dai, Milkman & Riis, "The Fresh Start Effect", *Management Science* 2014 | `10.1287/mnsc.2014.1901` | `oa=false`, **no OA location** |
| Dai, Milkman & Riis, "Put Your Imperfections Behind You", *Psych Science* 2015 | `10.1177/0956797615605818` | `oa=false`, **no OA location** |
| Galak, Givi & Williams, "Why Certain Gifts Are Great to Give but Not to Get", *Curr Dir Psych Sci* 2016 | `10.1177/0963721416656937` | `oa=false`, **no OA location** |
| Chan & Mogilner, "Experiential Gifts Foster Stronger Social Relationships Than Material Gifts", *JCR* 2016 | `10.1093/jcr/ucw067` | `oa=false`, **no OA location** |
| Givi & Galak, *J Business Research* 2020 (repeat gifts) | `10.1016/j.jbusres.2020.05.023` | `oa=false`, **no OA location** |

Also rejected: **Oscarsson et al., "A large-scale experiment on New Year's
resolutions", PLOS ONE 2020** (`10.1371/journal.pone.0234097`) — gold OA and an
excellent subject fit, but `journals.plos.org` (8 posts), `pmc.ncbi.nlm.nih.gov`
(14) and `europepmc.org` (7) are all **closed at 4+** in `USED-SOURCES.md`, and
its remaining OA locations are a DiVA resolver and a DOAJ record rather than the
article. **This is the single best source for this post and the domain caps put
it out of reach.** Recorded, not worked around.

Rejected on domain closure: *Psychological Reports* 2025 temporal-landmarks paper
(sagepub, 6 posts), *Frontiers in Psychology* 2026 temporal-landmarks paper
(frontiersin, 12), *Current Psychology* fresh-start-mindset paper (springer, 6).

### Accepted — 5 sources, all peer-reviewed, all open access

1. **Fast, I. et al.**, "Urban cycling-specific active transportation behaviour
   is sensitive to the fresh start effect: triangulating observational evidence
   from real world data", *International Journal of Behavioral Nutrition and
   Physical Activity* 22(1), **19 June 2025**. CC BY.
   `https://ijbnpa.biomedcentral.com/articles/10.1186/s12966-025-01785-w`
   Claim used: daily cycling traffic fell ~22% across a working week, an effect
   size nearly identical to the ~21% decline in fitness-centre attendance used as
   a positive control. Subject test: **pass** (the fresh start effect itself,
   replicated on real-world data). Swap test: **pass**.

2. **Liang, S. et al.**, "Waking up 'We' or 'I'? How Start Temporal Landmarks
   Influence Arousal Product Preferences", *Behavioral Sciences* 13(1):67,
   **12 January 2023**. CC BY. `https://www.mdpi.com/2076-328X/13/1/67`
   Claim used: three experiments, 1,136 participants in southern China; at start
   temporal landmarks, interdependent self-construal participants preferred
   high-arousal products while independent self-construal participants showed no
   significant difference. Subject test: **pass** — this is the load-bearing
   source for "what she wants on 1 January is relationship-shaped". Swap test:
   **pass**.

3. **Shahrier, M. A. & Khatun, S.**, "Development and validation of the gift
   reciprocation anxiety scale (GRAS) for youths and adults in intimate
   relationships", *Heliyon* 11(2):e41956, **January 2025**. CC BY-NC-ND — cited
   and linked only, nothing reused, per the NC rule in `research-sources.md`.
   `https://www.sciencedirect.com/science/article/pii/S2405844025003366`
   Claim used: validated on 763 Bangladeshi youths and adults aged 17–36 in
   romantic and marital relationships; reciprocation anxiety moderately
   positively associated with depression and anxiety; the authors argue the
   healthier reading of reciprocation is trust and care rather than debt.
   Subject test: **pass**. Swap test: **FAILS** — it is about gift-giving in
   intimate relationships generally and could sit unchanged in the
   `christmas-gift-for-girlfriend` sibling. Kept because reciprocation obligation
   is load-bearing for the downside section, and recorded rather than swapped.
   *URL note:* the `www.cell.com/heliyon/fulltext/S2405-8440(25)00336-6` form was
   rejected because the parentheses truncate under a non-strict markdown link
   parser. `cell.com` had 0 earlier posts and would have been the freer domain;
   it was given up for link safety.

4. **Dickson, J. M. et al.**, "Self-Regulatory Goal Motivational Processes in
   Sustained New Year Resolution Pursuit and Mental Wellbeing", *IJERPH*
   18(6):3084, **17 March 2021**. CC BY.
   `https://www.mdpi.com/1660-4601/18/6/3084`
   Claim used: longitudinal, 182 Australian and UK participants, four timepoints
   over two months; neither goal flexibility nor tenacity at baseline predicted
   whether people stuck with their most-committed resolution. Subject test:
   **pass**. Swap test: **pass**.

5. **Dickson, J. M. et al.**, "Adaptive Goal Processes and Underlying Motives
   That Sustain Mental Wellbeing and New Year Exercise Resolutions", *IJERPH*
   20(2):901, **4 January 2023**. CC BY.
   `https://www.mdpi.com/1660-4601/20/2/901`
   Claim used: community sample of 297; exercise resolutions are the most common
   New Year goals; only intrinsic motives sustained wellbeing and adherence over
   two months. Subject test: **pass**. Swap test: **pass**.

**Zero generic context statistics** (no PIB, TRAI, Census, MEA). **Zero Wikipedia
body links.** **Zero competitor links.** Wikipedia appears only as `sameAs`
targets in `structuredData`, which `structured-data.md` explicitly excludes from
the 0–2 body budget.

### Verification honesty — read this

**No source article page could be machine-fetched.** `www.mdpi.com` returned HTTP
403 to every automated request (3 URLs, both with and without a browser
User-Agent); `www.sciencedirect.com` and `www.cell.com` returned 403;
`ijbnpa.biomedcentral.com` returned 200 but redirected to a `link.springer.com`
bot challenge.

Every claim above was instead verified against the publishers' own authoritative
metadata: **full abstract text from the Crossref REST API for all five DOIs**,
plus the **DOAJ article API** for the Heliyon abstract, plus Unpaywall for OA
status and licence. Every number that appears in the post appears verbatim in an
abstract that was read. **No full text beyond an abstract was read for any of the
five**, and no page was confirmed to render its claim to a human reader. All five
are genuinely open access, so a reader in a browser can open them where a bot
cannot. This is recorded as a failed checklist item, not smoothed over.

### Domain caps — recorded, not worked around

Counted as **posts**, not URL occurrences, per the batch brief.

| Domain | Earlier posts | This post | Sibling posts in batch | Total |
|---|---|---|---|---|
| `mdpi.com` | 2 | 1 (3 URLs) | 1 — `christmas-gift-for-girlfriend` | **4 — OVER CAP** |
| `sciencedirect.com` | 2 | 1 | 0 | 3 — at cap |
| `biomedcentral.com` | ≤2 | 1 | 0 | ≤3 — ok |

**URL half of the cap: clean.** Zero of the five source URLs appear in
`USED-SOURCES.md`, and zero are shared with the sibling post.

**Domain half: `mdpi.com` breaches.** `blogs/` was empty when this post was
drafted, so there was no sibling to be close to. `christmas-gift-for-girlfriend.json`
landed afterwards and uses `https://www.mdpi.com/2305-6290/9/1/16`, which puts
`mdpi.com` at **4 posts against a cap of 3** — counted as *posts*, not URL
occurrences (my three MDPI URLs are one post, not three).

**Recorded, not resolved.** The batch brief is explicit that a suspected breach
is named rather than fixed by the agent, because in an earlier batch four agents
each self-corrected a miscount and one cut a preprint it was entitled to keep.
This one is not a miscount — `USED-SOURCES.md` states `- 2  mdpi.com` in its
2-3-earlier-posts tier, which is a post count.

**The URL I would surrender is `https://www.mdpi.com/1660-4601/20/2/901`** — the
2023 companion resolution study, the least load-bearing of the five. **But note
that surrendering it does not clear the breach:** the cap counts posts, so any
single remaining MDPI URL keeps this post on the tally. Clearing it requires one
whole post to vacate the domain.

If this post is the one to vacate, it loses both load-bearing evidence strands at
once — the start-temporal-landmark experiments and both New Year resolution
studies are the entire research basis for the angle, and the open-access
alternatives were checked and are closed (see the rejection table: the canonical
fresh-start and gift-asymmetry literature is `oa=false` with no OA location, and
the PLOS ONE New Year resolutions paper is unreachable because plos, PMC and
Europe PMC are all closed at 4+). The cheaper fix is the sibling yielding its
single MDPI URL — 1 of its 5, against 3 of my 5. **Orchestrator's call; I have
not dropped, swapped or restructured around it.**

---

## Phase 4–5 — Draft, links, targeting

- **1,796 words** in `contentMarkdown` by plain whitespace split, FAQs excluded.
- **10 FAQs**, in `article.faqs` only. Checked against all 12 headings on meaning
  (stop-word-stripped Jaccard, threshold 0.5) — no collision.
- **6 H2s** plus a Sources H2; 5 H3s under the ranked-list H2. One H1. No skipped
  levels. No paragraph exceeds 3 sentences.
- **Comparison table:** 5 rows × 4 columns, real values, with a first-party
  signal column. The last row's cell reads "Not measurable in our data — no link,
  no view count", which is the honest value for a physical object.
- **9 first-party facts** used, verbatim from `content/facts.md` (regenerated
  2026-09-02, re-read on resume and unchanged). Three land inside the first 150
  words: 3,397 pages / 15 page types, 50.2% phone opens, 6.9-hour median edit gap.
- **Internal links — 4, the cap:** `/capsule`, `/rewind`, `/bouquet-gf`
  (mandatory), `/love-gf` (satisfies the `/love-gf`-or-`/darling` requirement).
  All four sit inside the ranked-list section, after the definition H2 establishes
  why the reader would want them. All four verified present in `TEMPLATE_LINKS`.
  `/templates` was deliberately omitted to stay at 4.
- **`templateUrls`:** `/bouquet-gf`, `/capsule`, `/rewind`.
- **`structuredData`:** an `@id`-matched `BlogPosting` enrichment block on
  `<canonicalURL>#post` carrying `about` (New Year's Day), 3 `mentions` and
  `citation` mirroring `batchMeta.sources` one-to-one; plus an `ItemList`
  mirroring the 5 H3s in order. No renderer-built type without a matching `@id`.
  No `AggregateRating`, `Review` or `HowTo`.
- **Wikipedia/Wikidata `sameAs` pairs verified** against the Wikipedia API
  (`prop=pageprops&ppprop=wikibase_item`, `redirects=1`), no redirects fired:
  New Year's Day `Q196627`, Gift `Q184303`, New Year's resolution `Q2155091`,
  Interpersonal relationship `Q223642`.
- **Pricing: no claim in any direction.** The `facts.md` pricing block is empty.
  Scanned the body, FAQs, excerpt and metaDescription for `free`, `cheap`,
  `price`, `pricing`, `cost`, `₹`, `rupee`, `paid`, `no charge`, `affordab` —
  **zero hits.** The cost sub-question this keyword pulls hard toward is
  therefore **unanswered**, and that is recorded in `honestAssessment` as a real
  gap rather than filled with a guess.

### Meta trio

| Field | Value | Length |
|---|---|---|
| `title` / H1 | New Year Gift for Girlfriend: Give the Next Twelve Months | 57 |
| `metaTitle` | New Year Gift for Girlfriend: Ranked by the Year Ahead | 54 |
| `metaDescription` | A new year gift for girlfriend reads as a statement about the next twelve months. Five options ranked on which ones arrive twice, from 3,397 pages of data. | 155 |
| `excerpt` | (see JSON) | 275 |

No year-stamp — the title reads correctly in 2028. No brand suffix, one
separator, one keyword, no banned booster.

---

## Phase 6 — The two "known defect" items, counted rather than assumed

The batch brief warns that wave 1's brief was wrong about both. Both were counted
against this post's own keyword and slug.

**`metaTitle 50–60 characters, exact keyword in the first five words (hard cap 70)`
— PASSES.** The keyword `new year gift for girlfriend` is **five words**, and it
opens the title, so it occupies words 1–5 exactly. `metaTitle` is 54 characters,
inside 50–60. The brief predicted this would pass at five words or fewer, and it
does.

**`Slug short, hyphenated, lowercase, no stop words` — FAILS.** The slug
`new-year-gift-for-girlfriend` is short, hyphenated and lowercase, but contains
the stop word **`for`**. Dropping it (`new-year-gift-girlfriend`) would break
exact-match with the target keyword, which is the stronger signal on a keyword
the site has never covered. Kept deliberately and recorded as failed.

A third item was also checked rather than waved through:
**`metaTitle differs from the H1, uses one separator, and carries a differentiator
no competitor could claim` — FAILS on its third clause.** "Ranked by the Year
Ahead" is a framing, not a proprietary fact; any of the nine retailers could
write the same words even though none does. With a 5-word keyword consuming 28 of
the 60 available characters there is no room for a first-party number that still
reads as a promise.

---

## Phase 6 — Audit summary

**45 passed · 5 failed · 45 + 5 = 50 · `passed ∩ failed = ∅`** (asserted
programmatically; all 50 item strings compared byte-for-byte against
`references/publish-checklist.md`, `**bold**` markers and six-space continuation
indentation included — 0 mismatches, 0 missing).

Failed:

1. `metaTitle differs from the H1, uses one separator, and carries a differentiator no competitor could claim` — third clause only; character budget.
2. `3–6 outbound links, all fetched and verified to contain the cited fact` — 5 URLs in band, but all five publisher pages 403'd; claims verified via Crossref/DOAJ abstracts only.
3. `Slug short, hyphenated, lowercase, no stop words` — `for`; exact-match kept deliberately.
4. `No source passes the **swap test** — none could sit unchanged in a different keyword's post in this batch` — the Heliyon GRAS paper could move to another gift post; kept as load-bearing, recorded not swapped. The `christmas-gift-for-girlfriend` sibling that has since landed makes this failure more clearly correct, not less.
5. `No source URL appears in more than 2 posts in this batch; no domain in more than 3. …` — URL half clean; `mdpi.com` reaches 4 posts once the sibling is counted. Named with the URL I would surrender; **not** dropped or swapped. See the domain-cap section above.

Also flagged in `honestAssessment` and above: Phase 1 ran degraded (SERP taken
from the orchestrator's measurement, top five pages never read), and no cost
claim is possible on a keyword where budget is a live reader question.

**No ranking prediction is made.** The site has never covered New Year, so there
is no cannibalisation, but domain authority sits far below the incumbent
retailers on a five-word commercial keyword. The realistic upside is
answer-engine citation and long-tail variants.
