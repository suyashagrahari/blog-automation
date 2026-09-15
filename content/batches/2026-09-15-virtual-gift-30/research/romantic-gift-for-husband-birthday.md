# Research brief — `romantic gift for husband birthday`

Batch `2026-09-15-virtual-gift-30`, wave 2. Market: India. Category
`milestone-birthdays`. Templates assigned by `WAVE2-PLAN.json`: `/birthday-gf`,
`/dedication`, `/watch`. No `nearestLive` on this row.

---

## Phase 1 — SERP analysis

Source: `SERPS-WAVE2.md`, `scripts/serp-ddg.mjs`, `kl=in-en`, paid results
filtered. No new SERP call was made; `WebSearch`, `WebFetch` and `scripts/serp.mjs`
were not touched, per BRIEF-WAVE2 §0.

| # | Result | Type | What it is |
|---|---|---|---|
| 1 | flipkart.com/q/birthday-gift-for-husband | ecommerce | Marketplace search page |
| 2 | thebirthdayvibes.com | listicle | 22 romantic ideas, one H2 per product |
| 3 | hugnify.com | competitor listicle | 50 gifts; on BRIEF-WAVE2 §0 never-cite list |
| 4 | jewelove.in/blogs/news | retailer blog | 15 ideas, jewellery brand's own blog |
| 5 | theknot.com | listicle | 75 gifts, US wedding publisher |
| 6 | confettigifts.in/collections | ecommerce | Collection page |
| 7 | charmvows.com | listicle | 50+ ideas, Amazon affiliate |
| 8 | swashaa.com/collections | ecommerce | Collection page |
| 9 | oyehappy.com/collections | ecommerce | Collection page |
| 10 | etsy.com/market | ecommerce | Marketplace category |

**Honest read of the ceiling.** The row survived the cut on a score of 3
ecommerce + 1 listicle of 10. Reading the ten myself, that is generous: results
1, 6, 8, 9 and 10 are retail collection or marketplace pages, and 4 is a
jeweller's own blog feeding its store. Counting by what the page is *for*, this
is **five outright storefronts, four affiliate or brand listicles, one competitor
page, and zero informational or authoritative pages**. There is no page in the
top ten that answers a question rather than presenting inventory.

So the head term `romantic gift for husband birthday` is a transactional SERP and
this post will not take it. It is written for the residual intent the ten results
all ignore: the wife who is not deciding *what* to buy but working out *how to
keep it hidden in a house she shares with the recipient*. The realistic targets
are the long-tail phrasings from autocomplete, not the head term.

Two competitors were fetched in full for the comparison, for analysis only —
never cited, never linked:

- **thebirthdayvibes.com** (22 items, dated May 2025): one H2 per product idea
  (photo album, weekend getaway, star map), no data, no dates on any claim, no
  research, byline with a stock avatar. Internal links point at its own theme
  pages. Nothing about logistics or secrecy.
- **charmvows.com** (50+ items, dated September 2026): table of contents,
  Amazon **.com** affiliate links throughout — a US storefront on a page ranking
  in an India SERP. Filed under "Wedding Gifts". Again nothing about concealment.

## Phase 1b — India autocomplete

Grepped `content/keywords/2026-09-15-virtual-gift-100/ac{1,2,3}/autocomplete.csv`.
Completions on this stem:

```
romantic gift for husband birthday        romantic gift ideas for husband birthday
online gift for husband birthday          online surprise gift for husband birthday
what gift for husband birthday            what to give birthday gift for husband
digital birthday gift for husband         what is the best romantic gift for husband
best electronic gift for husband birthday (claimed by digital-gift-for-husband)
```

These are the fan-out sub-queries and the PAA substitute. Note that **not one
completion asks where to hide anything** — the demand signal is for ideas, and
the gap is the logistics nobody writes about.

## Phase 2 — Gap analysis

- **Table stakes**: what to give, a comparison of formats, something personal
  rather than generic, an acknowledgement that husbands are hard to buy for.
- **The gap**: every page assumes buyer and recipient are apart. In a marriage
  they are not. Nothing in the top ten mentions the browser tab, the delivery
  notification, the parcel that needs storing, or where you record a voice note
  in a two-bedroom flat.
- **Stale data**: none of the ten cites any data at all, stale or fresh.
- **Unanswered questions**: how long this takes; what to do if he finds it early;
  whether to send at midnight or in the morning.

**Angle**: wins by being the only post in this SERP that treats a husband's
birthday as a concealment problem rather than a shopping problem, settled with
SubhSandesh's 40.6% password rate and its 352 partner birthday pages, plus the
explicit statement that the database records the template opened, never the
recipient.

## Phase 2b — Separation from the three sibling husband/wife posts

| Sibling | What it owns | How this post differs |
|---|---|---|
| `digital-gift-for-husband` (wave 1) | The voucher / gadget / page taxonomy — three products under one search | This post never defines "digital gift" and does not compare vouchers to gadgets. It assumes the reader has already decided to make something and asks where to make it. It also claims none of that post's secondaries; its `electronic gift for husband birthday` is left alone. |
| `anniversary-website-for-wife` (wave 2) | The anniversary as a date neither spouse can be surprised by, so the page becomes a jointly-known ritual meant to repeat | This post takes the handover explicitly and inverts it: a birthday **can** be a surprise, so the constraint moves from repeatability to concealment. None of that post's sources (wedding-media, gratitude-timing, time-capsule) is reused — the four sources here are entirely disjoint from it. |
| `online-gift-for-husband-anniversary-free` (wave 1) | The "free" angle on a husband's anniversary; answers the pricing question by stating the dataset has no cost figure | This post makes no pricing claim at all and never uses the word "free" as an angle. Different occasion, different question. |

**Secondary keywords: the plan's pair was not used, deliberately.**
`WAVE2-PLAN.json` assigns this row `anniversary gift for husband` and
`anniversary gift ideas for husband`. Both are anniversary phrasings sitting on
top of two existing anniversary posts (`online-gift-for-husband-anniversary-free`
and `anniversary-website-for-wife`), and targeting them from a birthday post is
exactly the self-competition BRIEF-WAVE2 §3 exists to prevent. Replaced with four
birthday completions harvested above. This is recorded here rather than silently.

## Phase 3 — Sources

`WebSearch` is gone and Brave is hard-429, so discovery ran through the scholarly
APIs in BRIEF-WAVE2 §1b. Measured this session: **Europe PMC returned HTTP 503 for
roughly twenty minutes and then recovered**; **Crossref returned HTTP 429 on every
attempt**; **DOAJ worked throughout, but only on two- and three-word queries**;
**OpenAIRE answered but returned one or two records per query**. OpenAlex was not
attempted, per the brief.

Search terms tried, phenomenon-first: `secret keeping romantic relationships
concealment`, `self-concealment`, `concealment couples`, `digital intimacy
couples`, `smartphone couples`, `domestic space privacy`, `surprise gift`,
`gift giving`, `givers recipients`, `birthday ritual`, `interpersonal secrecy`,
`prosocial lie partner deception benevolent`, `voice note`, `audio message
communication`, `relationship maintenance behaviors`, `privacy boundary
management`. The searches that produced nothing usable are as informative as the
ones that did: there is **no research at all on concealing a gift inside a
cohabiting household**, which is the gap this post occupies.

Four sources survived the subject and swap tests:

1. **Fuentes Sánchez, R. (2019), *Canciones y ritos de cumpleaños en Europa*,
   Boletín de Literatura Oral** —
   `https://revistaselectronicas.ujaen.es/index.php/blo/article/view/4945`
   Fetched HTTP 200, landing page read. Folklore and anthropology reading of the
   birthday as a rite of transition assembled from the song, the invitation, the
   guests and the gift. Spanish-language. Used for the claim that the object is
   one component of a performance rather than the whole event. Domain unused in
   this batch.

2. **Ameli Renani, Bicharanlou & Hajjari (2025), *Networked Communication of the
   Iranian Family: Exploring How Spouses Redefine Privacy and Surveillance*, New
   Media Studies 11(41)** — `https://nms.atu.ac.ir/article_19311.html?lang=en`
   Fetched HTTP 200, landing page read (the direct PDF indexed as raw bytes, so
   the landing page was used, per BRIEF.md §10). Semi-structured interviews with
   47 people across three groups — spouses, informants, and psychologists and
   couple therapists. Finds spouses negotiating "self-boundaries" and "dyadic
   boundaries" under a broader theme of "liquid privacy"; some hold that a
   spouse's activity should never be monitored, others accept monitoring of
   social media only. Domain unused in this batch.

3. **Secrecy abilities and attitudes: development and psychometric validation of
   two secrecy scales (2026), BMC Psychology**, DOI 10.1186/s40359-026-04513-6 —
   `https://europepmc.org/article/MED/41975507`
   **Abstract only.** The Europe PMC landing page returned HTTP 403 to this
   sandbox and both publisher mirrors (bmcpsychology.biomedcentral.com and
   journals.lww.com) return 403 as well, so the record — title, journal,
   first-publication date 2026-04-13 and the two cited figures — was verified
   through the Europe PMC REST API instead. Cited claim is confined to what the
   abstract states: 97% of participants reported keeping at least one secret,
   average 14. This is recorded in the body prose and as the single audit
   failure. **Cap note:** `SPENT-SOURCES.json` (quiescence, 2026-09-16) has
   `europepmc.org` at 2 of 3, so this takes its last slot; no wave-2 sibling in
   `blogs/` held it at the time of writing.

4. **Aranda, Ayala, Esquivel, Ossandón & Quinteros (2024), *Self-concealment and
   emotional intimacy in Chilean adults in a couple relationship*,
   Ibero-American Journal of Psychology and Public Policy** —
   `https://ijppp.cl/index.php/ijppp/article/view/12`
   Fetched HTTP 200, abstract and record read. Correlational, cross-sectional,
   non-experimental; self-concealment correlated negatively with emotional
   intimacy and explained 8.26% of its variability, with no significant
   difference between men and women. Used as the post's inconvenient number —
   the argument against its own advice. Domain unused in this batch.

Rejected on the caps or on proximity: `frontiersin.org` (domain at cap — cost us
the 2024 experiential-gifts/gratitude paper, which was the best single hit of the
search), `ijoc.org` (at 2 and already used by `digital-gift-for-husband`),
`doi.org` (at 2), `pmc.ncbi.nlm.nih.gov` (at cap), `tidsskrift.dk` (the gratitude
paper belongs to `anniversary-website-for-wife`). Zero generic context statistics
were used — no PIB, TRAI, Census or MEA figure appears.

## Phase 4–5 — Draft decisions

- 1,6xx words, nine H2s, three H3s under the format section, one four-row
  comparison table whose last column is first-party.
- Internal links: `/birthday-gf`, `/dedication`, `/watch` as assigned, each placed
  inside the H3 that earns it, plus `/templates` once in the disclosure section
  near the close. No blog cross-link: this row has no `nearestLive`, and no live
  subhsandesh page appears anywhere in this keyword's SERP.
- Templates were read in `app/lib/prompt.ts` before writing. `/dedication` is
  described as a radio show made for one person, reached by dragging a needle
  through static; `/watch` gives a video its own player, channel row, chapters
  and a pinned comment. Both are written up as what they actually do, and both
  are named as having the worse secrecy problem, because they have to be recorded
  out loud.
- Mandatory disclosure is in body prose under "What our numbers do not prove
  about husbands", not only in the audit: the database records which template was
  opened, never who received it, so neither the 352 `/birthday-gf` pages nor the
  1,125 `/love-gf` pages prove the recipient was a husband.
- No pricing claim anywhere. The `facts.md` pricing block is empty and the post
  says only that there is no verified figure to publish.
- First-party pair in the opening 150 words: 40.6% password protection and the
  352 partner birthday pages. Checked against `digital-gift-for-husband`,
  `anniversary-website-for-wife` and `online-gift-for-husband-anniversary-free` —
  all three open on the 3,377 creators / 1.29 pages / 11.5 views cluster, so this
  pair does not repeat a near sibling.

## Phase 6 — Audit

49 passed, 1 failed. The failure is item 26 (outbound links all fetched and
verified), structural, recorded above: three of four landing pages returned 200
and were read; the fourth is 403 to this sandbox and was verified through the
Europe PMC REST API record instead.

`node scripts/verify-batch.mjs content/batches/2026-09-15-virtual-gift-30` was run
and only lines naming this slug were acted on; all source-cap findings were
ignored per BRIEF-WAVE2 §7.
