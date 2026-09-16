# Research brief — `digital gift ideas for best friend`

Batch `2026-09-15-virtual-gift-30`, wave 3, row 9. Written 2026-09-16.
Slug `digital-gift-ideas-for-best-friend`. Category `digital-gifts-romance`.
Templates `/searched`, `/nutrition`, `/templates`. `mustDifferentiate: false`.

---

## Phase 0 — Data gate

`content/facts.md` as measured 2026-09-15 (`npm run facts` could not be re-run today;
the production-DB read was denied, so every line is cited with its own measurement date).

Gate met. Ten relevant lines, two placed inside the first 150 words:

- **In the opening block:** occasion-dated pages are 144 of 3,894, 3.7%, the platform
  96.3% romantic and everyday (2026-09-09); and 94.1% of started pages are published
  and shared, 4,098 of 4,357 (2026-09-15).
- Later in the body: the 25.8% / 24.6% / 23.9% template mix, 49.0% phone opens,
  11.5 average views per page, 3,377 creators at 1.29 pages each, and the Raksha
  Bandhan lead-time figures (n = 89, median 0 days).

Two deliberate choices. First, the opening pair is **not** the 40.6% password figure or
the 6.2-hour edit gap — 57 and 45 of the 69 sibling files already use those, and across
a 79-post batch they read as a tic. The 3.7% / 96.3% occasion split was chosen because it
argues the post's actual thesis: friendship has no obligation calendar.

Second, the **mandatory disclosure** is in body prose, not only here: the database records
which *template* was opened, never who received it, so a `/love-gf` count is evidence about
a page's design register and not proof of a romantic recipient. Wave 3 §5 requires this for
any post about a friend.

Pricing: the `## Pricing (fill in by hand)` block is empty. The post states plainly that
current SubhSandesh pricing cannot be confirmed and links `/templates`. No figure is
stated, inferred or estimated anywhere.

---

## Phase 1 — SERP analysis

`SERPS-WAVE3.md`, section `## digital gift ideas for best friend`, ddg-html, `in-en`,
collected 2026-09-16. `WAVE3-PLAN.json` records `gate2: PASS` on a hand-read SERP.
No fresh Brave pass was run (`scripts/serp.mjs` hard-429s); one `serp-ddg.mjs` call was
spent on source discovery and returned nothing parseable.

| # | Result | Page type | Direct answer? | Notes |
|---|---|---|---|---|
| 1 | aiskyla.com | Competitor homepage | No | Product landing page, not an article |
| 2 | giftfeels.com/virtual-gifts | Competitor category page | No | "Send a surprise gift link in minutes" |
| 3 | giftfeels.com | Competitor homepage | No | Same brand, second slot |
| 4 | gifft.me | Competitor homepage | No | "Send free virtual gifts online" |
| 5 | amazon.in/digital-gifts | Retail search | No | Query-shaped listing page, no editorial |
| 6 | hugnify.com/blogs/news/gift-ideas-for-friends | Competitor blog listicle | Partial | "50+ meaningful gift ideas", physical-product heavy |
| 7 | giftella.app | Competitor homepage | No | AI wishlist product |
| 8 | amazon.in/personalized-gifts-for-best-friend | Retail search | No | Second Amazon slot |
| 9 | bestproducts.com/tech/g62954022 | US tech listicle | Partial | "59 best tech gifts", gadgets, US pricing, US calendar |
| 10 | imgkitapp.com | Competitor homepage | No | Photo-gift tool |

Every one of #1, #2, #3, #4, #6, #7 and #10 is on the wave-3 banned list or is
page-shaped like SubhSandesh. **None is cited or linked in the post.** They were read only
to establish the page type, which is Phase 1 and permitted.

**What the SERP actually shows.** Nine of ten results are either a product page or a
retail search. Exactly one result (#6) is a blog post, and it is a competitor's. The
reader asking this question is being served shops, not help. That makes the page type
winnable — there is no incumbent article to displace — and it also means the opening
paragraph has to do something no page on that SERP does: answer the question rather than
present inventory.

**Tone across the set:** third person, superlative-led ("No. 1", "Best", "50+"),
no author byline, no dates on claims, no research of any kind. The only dated data
anywhere on the SERP is Amazon's pricing.

---

## Phase 2 — Gap analysis

**Table stakes** (must be present or the post looks incomplete):
a concrete numbered list of ideas; the no-address / no-courier point; some indication of
effort or time; an occasion hook; a mobile-first assumption.

**The gap.** Nothing on the SERP asks *how much is appropriate*. Every result optimises
for breadth — 50+ ideas, 59 gadgets, a catalogue — on the unstated assumption that more
choice is more helpful and a more expensive gift is a better gift. Between friends that
assumption is wrong in a specific, nameable way: a friendship has no obligation calendar,
so an outsized gift does not read as generous, it reads as a debt handed over. The
failure mode inverts relative to a romantic gift, where the risk is doing too little.

**Second gap: the Indian friendship calendar.** #9 is a US listicle and #6 is
occasion-agnostic. Friendship Day in India is the **first Sunday of August** — 2 August in
2026 — which is not the international date. Raksha Bandhan tied between friends and the
farewell when someone moves city for work are two further occasions no result mentions.

**Third gap: register.** Nothing on the SERP distinguishes a page built for a partner from
a page built for a friend. `/searched` and `/nutrition` are jokes by design — a search
results page with a knowledge panel that is too accurate, a nutrition label with serving
size 1 and calories ∞ — and that is precisely why they transfer to a best friend and a
romantic template does not. The post makes this point explicitly rather than listing the
templates neutrally.

**Stale data:** #9 is year-stamped and its products rotate annually; nothing else on the
SERP cites data at all, so there is no stale statistic to supersede — only an absence.

**Fan-out sub-queries** → became H2s: *what makes a friend's gift different from a
partner's* · *what are the actual ideas and who is each for* · *what occasion is this even
for in India* · *what does each option cost me* · *does a gift actually help a friendship* ·
*when should I not do this*.

**Angle (recorded as `batchMeta.angle`):** wins by being the only post that treats a
best-friend gift as a calibration problem rather than a shopping list, pairing gift-obligation
and friendship-maintenance research with SubhSandesh's own 3.7% / 96.3% occasion split.

---

## Phase 3 — Sources

**Availability, measured from this sandbox on 2026-09-16.** OpenAlex returned HTTP 429 on
every one of ~20 attempts across five query sets with polite-pool `mailto` and exponential
backoff to 48s — it did **not** work today, contrary to `BRIEF-WAVE3.md` §3. Semantic
Scholar returned 429 on every attempt. CORE returned 200 once and 429 thereafter.
**DOAJ and Crossref worked reliably**, and **OpenAIRE
(`api.openaire.eu/search/publications`) worked and was the most productive discovery tool
of the session** — it is not in the brief's list and is worth adding for wave 4.

Publisher hosts that 403'd and could not be verified, so were dropped:
`sciencedirect.com` (the 2025 Gift Reciprocation Anxiety Scale paper, which would have been
the single best fit), `tandfonline.com`, `mdpi.com`, `ejournal.radenintan.ac.id`,
`scirp.org`. `hrcak.srce.hr/file/*` returns 418 but `hrcak.srce.hr/clanak/*` returns 200.

Search terms used: `friendship maintenance behaviours gift giving`, `gift giving friendship
reciprocity norms`, `platonic intimacy friendship communication`, `friendship rituals
celebration`, `friendship day celebration India`, `gift obligation`, `reciprocity anxiety`,
`emerging adulthood friendship`, `humour friendship bonding`.

Four sources, all fetched and read. All four domains are new to the batch
(`hrcak.srce.hr` and `journalqd.org` each appear once elsewhere, well under the cap of 3;
`journalqd.org/article/view/3970` is at 1 of its 2 URL slots). None is on the
`domainsAtCap` or `urlsAtCap` list, and none overlaps the two published friend posts'
`sources` arrays.

| Source | Published | What it supports | Subject test | Swap test |
|---|---|---|---|---|
| [Ompangan tradition, Kubu Raya](https://e-journal.elkuator.com/index.php/ijssls/article/view/23) — Susanti, Masuwd, Hasan & Zaman, *Indonesian Journal of Sharia and Socio-Legal Studies* 1(1) | 2025-05-19 | Gift-giving at celebrations slid from voluntary solidarity into a tracked obligation: systematic record-keeping, rigid repayment expectations, stigmatisation as sanction; normatively from *hibah* to *qarḍ* | Gift obligation between non-kin — yes | Would not fit any other row; the post's core claim rests on it |
| [Friendship Maintenance Strategies and Satisfaction in Same-Sex Friendships](https://hrcak.srce.hr/clanak/232829) — Huić & Smolčić, *Društvena istraživanja* 25(1):63–83 | 2016-05-02 | n = 196 friend pairs, 19–30. Affection, low antagonism and interaction frequency all predict friendship satisfaction; partner effect for affection in female friendships | Friendship maintenance — yes | Friendship-specific; no other row is about friendship maintenance |
| [Community gifting groups on Facebook](https://journalqd.org/article/view/3970) — Herdağdelen, Adamic & State, *JQD: Digital Media* 3 | 2023-12-07 | Buy Nothing groups have *lower* friendship density than comparable local groups and form large strongly connected components — generalised reciprocity between people not already close | Online gifting norms — yes | Used here for a contrast (digital gifting was built for strangers) no other row makes |
| [Recent Extensions of the Gift](https://www.ledonline.it/index.php/Elementa/article/view/4935) — Caillé, *Elementa* 3(1-2) | 2023 | Extends Mauss beyond simple giver-recipient reciprocity toward the gift as *adonnement* — a commitment that brings something new, rather than settling a balance | Gift theory — yes | Supports the calibration argument specifically |

Zero generic context statistics (no PIB, TRAI, Census, MEA). Zero Wikipedia body links;
Wikipedia and Wikidata appear only as `sameAs` pairs inside `structuredData`, each QID
verified against the Wikipedia API (Q491, Q184303, Q14551661, Q10266, Q1531970, Q668).

**Abstract-only reads, recorded in the audit as failures rather than hidden:** Huić &
Smolčić publish full text in Croatian, and Caillé's PDF is gated. The English abstracts on
both landing pages carry every figure claimed in the post, and nothing beyond the abstract
is asserted.

---

## Phase 4–5 — Draft and targeting

1,786 words in `contentMarkdown` excluding FAQs. 12 FAQs in `article.faqs` and the
renderer-built FAQPage only — none in the body, and none restates a body heading.

Internal links, four, all real and all placed after the section that earns them:
`/searched` and `/nutrition` inside the idea they describe; `/templates` at the pricing
caveat; and `/blog/virtual-gift-for-best-friend` in the closing section, which is the
closer of the two published friend siblings.

**Sibling awareness.** Both published friend posts were read in full before drafting:

- `virtual-gift-for-best-friend` — seven ideas, framed as friendship *maintenance*, opens
  on the 40.6% password figure. Its items 6 and 7 are the search page and the nutrition
  label.
- `long-distance-gift-for-best-friend` — framed as a *logistics* failure ("the parcel is
  the part that breaks"), three formats, links `/searched` and `/nutrition`.

`virtual-gift-for-online-friend` (in flight) also uses `/searched`. Three siblings therefore
describe at least one of my two assigned templates. The templates were still used as
assigned, because they are the right ones for a friend, but the post differentiates on
argument rather than on examples: it is the only one of the four that says *why* a joke
format outperforms a sincere one between friends, and six of its eight ideas (mock summons,
annotated playlist, photo archive, transcribed voice note, top-up, written vouch) appear in
none of the siblings. No sibling covers the Indian friendship calendar or the calibration
problem at all.

`structuredData` is additive only: one `@id`-matched enrichment block on
`<canonicalURL>#post` carrying `citation` (mirroring `batchMeta.sources` one-to-one),
`about` and `mentions`; plus one `ItemList` of the eight ideas in H3 order. No
`BlogPosting` duplication of renderer-built types, no `AggregateRating`, `Review` or
`HowTo`.

Slug checked against Strapi on 2026-09-16 — `filters[slug][$eq]=digital-gift-ideas-for-best-friend`
returned `total: 0`. `digital-gifts-romance` confirmed present in the live category list.

---

## Phase 6 — Audit

48 passed, 2 failed, disjoint, 50 of 50 checklist items accounted for. Both failures are
the same underlying issue and are recorded honestly rather than fixed by swapping in a
weaker but English-language source:

1. *3–6 outbound links, all fetched and verified to contain the cited fact* — two of the
   four were verified at abstract level only (Croatian full text; gated PDF).
2. *At least 1 of those is peer-reviewed or scholarly, and open-access* — passes in
   substance (Huić & Smolčić is a peer-reviewed *izvorni znanstveni članak*, openly
   hosted), recorded only because the read was abstract-level.

Both close if an English full text or a translated read is sourced.

`verify-batch.mjs` returns one amber `?` on this file: a price-adjacent mention of the word
"pricing". That line is the required disclosure that current pricing cannot be confirmed,
so it is correct as written.
