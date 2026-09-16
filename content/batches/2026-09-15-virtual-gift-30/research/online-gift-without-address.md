# Research brief — `online gift without address`

Batch `2026-09-15-virtual-gift-30`, wave 3, row 5. Market: India. Evergreen.
Category `digital-gifts-romance`. Templates `/templates`, `/bouquet-gf`, `/watch`.
`mustDifferentiate: false` — `overlapWithWritten: 1`, `overlapWithNewRow: 0`, `nearestWritten: null`.
Slug checked against Strapi 2026-09-16: 0 hits, free.

---

## Phase 1 — SERP analysis

Source: `SERPS-WAVE3.md`, section `## online gift without address` (ddg-html, region `in-en`).
Live SERP re-query was not run: `scripts/serp.mjs` hard-429s and the row's SERP was
already captured by the orchestrator.

| # | Result | Type | Word count / shape | Where the direct answer sits | Data cited, and its date | Format elements | What it is really optimising for |
|---|---|---|---|---|---|---|---|
| 1 | gipht.io/individuals | Vendor landing page | Short landing copy, no article body | First screen, as a product claim ("send gifts with email only") | None | Hero, feature grid, CTA | Product signup, US market |
| 2 | fountaingifts.com/giftdrop | Vendor landing page | Short landing copy | Product claim | None | Hero, curated box grid | Corporate/curated box sales |
| 3 | gifft.me | Vendor landing page — **known competitor** (BRIEF §1) | Landing copy | Product claim | None | Hero, template rail | Direct competitor to SubhSandesh |
| 4 | blog.giftbasketsoverseas.com | Vendor blog | ~1,200 words, listicle | After a two-paragraph intro | None dated | H2 list, no schema visible | Funnelling to their own gift baskets |
| 5 | gipht.io | Vendor homepage | Landing copy | Product claim | None | Hero | Signup |
| 6 | ongoody.com | Vendor homepage (B2B) | Landing copy | Product claim ("No Address Needed") | None | Hero, logo wall | Corporate gifting sales |
| 7 | giftenmarket.com/collections | Shopify collection | Product grid, no prose | n/a | None | PDP grid | Ecommerce |
| 8 | money.com/send-amazon-gift-without-address | **Editorial (news)** | ~700 words, "4 min read", bylined Mallika Mitra, published 4 Oct 2021 | First paragraph, clearly | Amazon spokesman quote (Craig Andrews); 2021 supply-chain context | Byline, author bio, publish date, internal links | News coverage of one Amazon **US** feature |
| 9 | apartmenttherapy.com/instant-gifts-to-send | **Editorial (listicle)** | Product listicle — 403 to this sandbox, analysed from title + SERP snippet only | Unknown; listicle convention puts it after an intro | Unknown | Numbered product list, affiliate links | Affiliate revenue on instant/e-gift products |
| 10 | boxofjoy.fun | Vendor app landing page — **banned** | Landing copy | Product claim | None | Hero | Signup |

**Honest limits of this pass.** #9 returned HTTP 403 and was not read; it is
characterised from its title and SERP snippet, not from the page. Nothing in this
SERP was cited or linked in the post — the vendor results are competitors under
`references/competitors.md` and BRIEF §1 / BRIEF-WAVE3 §1, and the two editorial
results sit in the SERP, so both are named in prose without a link where relevant
and never used as a citation.

---

## Phase 2 — Gap analysis

**Table stakes** (covered by nearly everything in the set, so the post must cover them):
what "no address" means at all; that an email or phone number substitutes; a list of
things you can send; some reassurance about it being a real gift.

**The gap — four things nobody in this set does.**

1. **Nobody treats "no address" as a category property.** All ten results frame it as a
   workaround for a shipping problem: the address still exists, it has just moved. For a
   shareable personalised page the address never existed in the flow. That is the post's
   spine.
2. **Nobody separates the three products** hiding under the phrase — retailer shipping
   workaround, stored-value e-voucher, shareable page. Wave 1 found that "digital gift"
   collides with "digital gift card" and it cost a post its focus; here the collision is
   in the SERP itself, and the post splits it in its second block.
3. **Nobody answers the Indian case.** The only dated editorial result is about an
   Amazon **US** Prime feature. Indian addressing is a materially harder problem and there
   is peer-reviewed evidence for that, which nothing in this SERP uses.
4. **Nobody states the replacement requirement as a constraint.** "Just needs an email"
   is sold as frictionless. It is not: no channel means no gift, a link can be swiped
   away in a group chat, and a page cannot be unwrapped in front of family.

**Stale data.** The only dated fact in the whole SERP is the money.com piece of
4 October 2021 — nearly five years old and about a US-only retailer feature, framed
around pandemic supply-chain shortages that have since resolved.

**Unanswered questions raised and dropped.** money.com raises, and does not resolve,
whether a recipient wants gift notifications from someone who does not have their
address. Nothing in the set says what happens if the link is never opened.

**Fan-out sub-queries → the post's H2s.**

| Sub-query | H2 |
|---|---|
| can you actually send a gift online without an address? | opening answer block |
| what does "without address" mean — is it a voucher? | `"Online gift without address" hides three different products` |
| why would I not want to use their address anyway? | `The address is the weak link, not the workaround` |
| what do I need instead? | `What you still need instead of an address` |
| what can I actually send? | `Five things you can send without an address, in order of how fast they land` |
| which option is best for my situation? | `Which route fits which situation` |
| is a digital gift worse than a real one? | `Where a digital gift loses to a parcel` |
| how do I do it right now? | `Sending one in the next ten minutes` |

**Angle (recorded as `batchMeta.angle`).** Wins by being the only post that treats
"no address" as a category difference rather than a shipping workaround — separating
the shareable page from the e-voucher and the retailer flow, and proving it with 4,357
first-party pages sent without an address and three studies showing that addresses
themselves fail.

---

## Phase 3 — Sources

Discovery: OpenAlex `works?search=` (working from this sandbox today) and DOAJ short
queries; Crossref for publication dates. Semantic Scholar and CORE both returned
HTTP 429 during this run. Searched the phenomenon, not the keyword — the productive
queries were `unstructured address India last mile delivery`,
`postal address quality geocoding India delivery`, `address geocoding` (DOAJ),
`surprise gift emotional response recipient experiment`. Queries that returned nothing
usable: `gift giving physical distance relationship`, `last minute gift giving
procrastination`, `home address disclosure privacy concern online` (every strong hit
was on a host blocked from this sandbox — Wiley, Elsevier, Springer).

All four hosts below were checked against `SPENT-SOURCES.json` and against all 60
sibling files in `blogs/` before use: **0 prior uses each** (`bath.ac.uk` appears once
in a sibling, but as `www.bath.ac.uk`, a different host from `researchportal.bath.ac.uk`).
None of the at-cap domains (`arxiv.org`, `pmc.ncbi.nlm.nih.gov`, `journals.plos.org`,
`frontiersin.org`, `europepmc.org`, `pewresearch.org`, `gsb.stanford.edu`,
`ojs.zrc-sazu.si`) is used, and neither is any `domainsAtTwo` host.

| Source | Host | Published | What it actually says | Read |
|---|---|---|---|---|
| LAST MILE LOGISTICS: IMPACT OF UNSTRUCTURED ADDRESSES ON DELIVERY TIMES | `isprs-archives.copernicus.org` | 2022-10-14 (Crossref) | Unstructured addresses are an established problem in developing countries; hard for last-mile riders to read and locate; increase delivery times and cost | Landing page abstract read in full |
| GeoIndia: A Seq2Seq Geocoding Approach for Indian Addresses | `aclanthology.org` | 2024 (Crossref gives year only) | Indian addresses carry diverse languages, scripts and formats that existing methods often fail to resolve at fine resolution; state-level models cut mean distance error >50% vs Google Maps in multiple states | Landing page abstract read in full |
| Improving geocoding matching rates of structured addresses in Rio de Janeiro, Brazil | `www.scielo.br` | 2021 (Cad. Saúde Pública 37(7)) | 132,863 structured address records standardised automatically against the national postal directory; 85.7% (113,876) geocoded and validated — ~1 in 7 unmatched | Abstract, introduction and methods read |
| Surprising gifts: Theory and laboratory evidence | `researchportal.bath.ac.uk` | 2015-09-01 (J. Econ. Theory 159A:163–208) | Dictator-game experiments: strong causal effect of recipients' expectations on givers' transfers; givers care what recipients know about the intentions behind a surprise | **Abstract / portal record only** — the accepted manuscript PDF was not read |

**Subject test.** Three of the four are literally about postal addresses failing, which
is the post's subject. The fourth is about surprise in gift-giving, which is the
mechanism behind "don't ask for their address".

**Swap test.** Three pass cleanly — no other post in this batch is about addresses.
The Bath paper does **not** pass and is recorded as a failure in
`auditReport.failed`; it is kept because it is the only evidence located for the
surprise claim.

**Generic context statistics used: none.** No PIB, TRAI, Census or MEA figure appears.

---

## Phase 4–5 — Draft decisions

- Opening pair chosen to avoid the batch tic: **94.1% published-and-shared** and
  **49.0% phone opens**, neither of which is the 40.6% password figure or the 6.2-hour
  edit gap that sixty posts already lean on. Both land inside the first 150 words,
  along with the 4,357 total.
- **Pricing:** `content/facts.md` `## Pricing (fill in by hand)` is empty. The post says
  so explicitly and links `/templates` rather than stating or implying any figure.
- **Template links (3, all from `TEMPLATE_LINKS`, all assigned by the plan row):**
  `/bouquet-gf` after the bouquet H3 earns it, `/watch` after the video H3,
  `/templates` at the closing CTA. No swap was needed — the bouquet is the canonical
  "gift that normally needs an address" and `/watch` is the fastest route for someone
  who already has the video.
- No `nearestLive` / `nearestWritten` exists for this row, so no blog cross-link was
  required; none was added.
- Comparison table carries a first-party column (`Measured across 4,357 pages built
  here`) and includes the two routes SubhSandesh does **not** sell, marked honestly as
  "Not sold here, so no data".
- Downside section is real: no unwrapping in front of family, no resale or exchange
  value, no convincing anonymity, and the surprise cost of asking for an address.

## Phase 6 — Audit

48 passed / 2 failed, disjoint, 50 total.

1. *Slug short, hyphenated, lowercase, no stop words* — fails on the stop word
   "without", which is unremovable: it is the exact target keyword and the slug is
   fixed by `WAVE3-PLAN.json` row 5.
2. *No source passes the swap test* — fails on Khalmetski et al. alone, kept
   deliberately; closed by a study measuring the cost of requesting delivery details
   specifically.
