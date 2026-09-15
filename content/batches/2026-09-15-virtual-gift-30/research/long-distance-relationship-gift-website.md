# Research brief — `long distance relationship gift website`

**Batch:** `2026-09-15-virtual-gift-30`, WAVE 2
**Row:** `long-distance-relationship-gift-website` (replaced `long distance relationship gifts india`, killed at 6/10 ecommerce)
**Assigned:** cat `miss-you-across-miles`; templates `/train-ticket`, `/recharge`, `/templates`
**Secondaries assigned:** `long distance gifts website`, `website for long distance couples`

## OUTCOME: ABORT — no blog JSON emitted

Per `BRIEF-WAVE2.md` §3, this row is reported as an abort. The research brief is
below; `blogs/long-distance-relationship-gift-website.json` was deliberately not
written. Four independent tests point the same way, and two of them are hard
thresholds rather than judgement calls.

No third-party sources were fetched or consumed for this row. Wave 2 needs ~60
fresh domains against a cap of 3 per domain across sixty posts; spending four to
six slots on a page that will not publish would take them from rows that ship.
That omission is deliberate, not an incomplete Phase 3.

---

## 1. SERP — hand-scored (Phase 1)

`SERPS-WAVE2.md`, `engine: ddg-html  region: in-en  query: long distance relationship gift website`

| # | URL | Shape | What it actually is |
|---|---|---|---|
| 1 | endlessdistances.com/long-distance-relationship-gift-ideas/ | article | **Commerce.** 37 items, a "Buy here" affiliate link per item (`luvlink.com/?ref=`, `totwooglobal.sjv.io`), plus a 12%-off discount code. Fetched and verified. |
| 2 | giftfeels.com/long-distance-gifts | page-shaped | Competitor service (named in BRIEF-WAVE2 §0). Free open-when letters / surprise links. |
| 3 | couplemoment.com/blog/long-distance-relationship-gifts/ | article | **Commerce.** "Every idea links straight to Amazon"; Amazon Associate disclosure; every item is an `amazon.com/s?k=…&tag=couplemoment-20` link — the `/s?k=` shape itself. Also promotes its own app. Fetched and verified. |
| 4 | my-sweet-ldr.com/romantic-ldr-gifts/ | article | **Commerce.** Runs its own shop — `/shop/long-distance-map/`, "From the shop" modules inline — plus a declared Amazon affiliate disclosure. Fetched and verified. |
| 5 | aiskyla.com/blog/cutest-virtual-gift-ideas… | article | Competitor blog (named in BRIEF-WAVE2 §0). |
| 6 | digitalloveletters.com/long-distance | page-shaped | Competitor service. |
| 7 | ourgiftverse.com/ | page-shaped | Competitor service (named in BRIEF.md §1). |
| 8 | blog.messagear.com/virtual-gifts-for-long-distance-boyfriend/ | article | Competitor blog (named in BRIEF.md §1). |
| 9 | oyehappy.com/collections/long-distance-gifts-for-girlfriend | `/collections/` | **Ecommerce**, outright. |
| 10 | giftrabbit.com/long-distance-relationship-gifts/ | article | **Commerce.** 49 products, a "View on Amazon" / "View on UncommonGoods" affiliate button per product, and a price-band facet filter. Fetched and verified. |

**Hand-scored ecommerce: 5/10.** Strictly by hostname-and-path shape it is 1/10
(only `oyehappy.com/collections/`), which is what the orchestrator's automated
screen saw and why this row survived. That count is wrong about this SERP. Four
of the five "listicles" are affiliate storefronts wearing an article URL: I
fetched all four and every one carries a per-item buy link, an affiliate
disclosure, and in two cases a merchant UI (a price facet on giftrabbit, an
in-house `/shop/` on my-sweet-ldr). CoupleMoment's every product link is an
`amazon.com/s?k=` — the exact transactional shape named in the scoring rule,
just one hop downstream of the URL the screen inspected.

5/10 sits inside the 5–7/10 band that got eight wave-2 rows cut, and one point
below the 6/10 that killed the row this one replaced. The replacement did not
escape the problem; it changed which page in the chain carries the buy button.

**The other half of the SERP is worse, not better.** Results 2, 5, 6, 7 and 8
are all named competitors. So the top ten holds **zero citable pages and zero
authoritative pages** — five merchants and five rivals. That is the gap the
cluster keeps pointing at, and six sibling posts have already been written into
it.

## 2. URL-overlap check (BRIEF-WAVE2 §3)

Computed set-wise over `SERPS-WAVE2.md`, exact-URL match:

| Sibling row | Shared URLs of 10 |
|---|---|
| **`long distance relationship gifts online free`** | **5** |
| `long distance relationship interactive gifts` | 5 |
| `long distance relationship gifts to stay connected` | 3 |
| `long distance relationship gift ideas for girlfriend` | 3 |
| `long distance relationship gifts for him` | 3 |
| `long distance relationship gift quotes` | 0 |
| every `… website for …` row (birthday / romantic / cute / love letter / anniversary / apology / impress) | 0 |

The five shared with `online free`: `endlessdistances`, `giftfeels`,
`my-sweet-ldr`, `aiskyla`, `blog.messagear`.

**5 ≥ 4, so the threshold fires.** The zero-overlap column is the more
interesting half: this keyword shares nothing with the `website for …` cluster
and half its SERP with the `gifts online free` row. Google does not read
"website" here as a build-and-host query at all. It reads it as a synonym for
"site that has long distance gifts", which is the query `online free` already
holds.

## 3. Keyword conflict — a direct prohibition, not a judgement call

`blogs/long-distance-relationship-gifts-online-free.json` carries
`long distance gifts website` in `article.keywords`, and uses it verbatim as its
first H2: `## What "free" covers on a long distance gifts website`.

That phrase is one of this row's two assigned secondaries. BRIEF-WAVE2 §3: *"Do
not target a phrasing listed as another row's secondaryKeywords."* The remaining
secondary, `website for long distance couples`, is unclaimed but cannot carry a
post once the substance below is gone.

## 4. The assigned split is already written — 6 of 6 sub-questions

The intended angle was the platform question: what a long-distance gift site has
to do that a generic card site does not. Each of its load-bearing parts, checked
against `blogs/`:

| Sub-question of the assigned split | Already answered by |
|---|---|
| A link that survives being reopened for months | `online-free` check 1 ("how long the link stays alive", link-rot citation); `shareable-gift-link-for-couples` → `## What happens to the link over time` |
| No address / no sign-up required of the recipient | `online-free` check 2 ("whether your partner has to sign up"); `gift-ideas-for-girlfriend` → `## Answer the parcel question before you choose a single idea` |
| Works on the recipient's phone in another country | `online-free` check 3 ("check the preview on a phone", 49.0%); `birthday-website-for-girlfriend` → `## Four things that break a birthday website on her phone` |
| Who else can open it | `online-free` check 4 (40.6% password); `shareable-gift-link-for-couples` → `## Who else can open it` |
| What happens if the service disappears | `online-free` check 6 ("get your own copy back"); `virtual-gift-link-free` → "a page is not permanent" |
| Timezone handling | `stay-connected` → `## How often to send, and what to do about time zones and signal`; `virtual-gift-for-long-distance-boyfriend` → `## Time zones and timing` |

And the frame itself is taken twice over:

- `virtual-gift-website-for-boyfriend` — *"Five checks to run on a virtual gift website before you build anything"*, covering **signup, editability, password, price and link survival**. That is this row's brief, item for item.
- `birthday-website-for-girlfriend` — *"Four routes to a live birthday page, compared"*: writing the code, an AI builder, a bought template, a ready-made page, against **build time, hosting, privacy and autoplay**. That is the build-vs-host decision, already priced.
- `shareable-gift-link-for-couples` — capability URLs, Open Graph cards, password scope, link decay.
- `online-free` — the same six checks, in the long-distance frame, on the same two first-party facts (49.0% phone, 40.6% password).

The batch's persistence hook (11.5 average views per page, reopened rather than
viewed once) is likewise spent: `stay-connected` is built on it and
`website-to-impress-girlfriend` uses it too.

There is no honest residue. A sharpened version would be either a re-cut of
`online-free`'s Block 3 in a long-distance frame it already occupies, or a page
so narrow it stops answering `long distance relationship gift website`. Writing
it would put two SubhSandesh pages into a ten-result SERP they already share
five URLs of, both targeting `long distance gifts website`.

## 5. Phase 2 gap analysis — recorded, since the gap is real even if this row is not the one to take it

Table stakes across the five commerce pages: touch bracelets / friendship lamps,
open-when letters, care packages, matching items, countdown to reunion. All five
are physical-first and US-priced; none names an Indian delivery reality.

The genuine gap all ten miss: **nobody states what happens to the link after the
first week.** Ten pages, zero retention numbers, zero expiry policies, zero
"what if the site shuts". SubhSandesh can print 11.5 views per created page and
94.1% publish-and-share. But that gap is claimed — `shareable-gift-link-for-couples`
and `long-distance-relationship-gifts-online-free` both hold it — and a seventh
long-distance page is not how to widen it.

## 6. Notes for the orchestrator

- **`/recharge` is now unlinked again.** It was assigned here and has been linked
  once in sixty posts. It needs reassigning to a row that ships. It is a joke by
  design — a mock prepaid top-up for a relationship: a plan grid, a payment sheet
  that looks like the real thing, a receipt — so it fits a row that can carry a
  deadpan mock-interface format. `cute-website-for-boyfriend` already argues
  exactly that case ("the joke-shaped pages get built more than the sincere
  ones") and would be the natural home. `/train-ticket` is already linked by
  four long-distance siblings and needs nothing.
- **The automated Gate 2 screen has a systematic blind spot.** It reads an
  affiliate catalogue at an article URL as editorial. On this keyword that is the
  difference between 1/10 and 5/10. The fix is to score the *outbound link
  pattern*, not the hostname: a page where most links are `amazon.*/s?k=`,
  `/dp/`, `uncommongoods.com/product/` or an affiliate redirector is a
  storefront. Three wave-2 agents have now hand-scored worse than the screen; the
  screen is the thing to change.
- **`long distance relationship interactive gifts` also overlaps this SERP 5/10**
  and 5/10 with the others in the cluster. Worth a look before it is written.
- The `… website for …` rows share **zero** URLs with this one. That cluster is
  genuinely separate ground and the cluster boundary is measurable, which is
  useful for planning wave 3: "website" attached to a *person or occasion* is a
  build query; attached to *gifts* it is a shopping query.

## 7. Verifier

`node scripts/verify-batch.mjs content/batches/2026-09-15-virtual-gift-30` was
run. No finding names `long-distance-relationship-gift-website`, as expected —
this row emits no blog JSON. Source-cap findings ignored per BRIEF-WAVE2 §7.

## 8. Search terms not spent

Phase 3 was not run. Had it been, the directions were
`relational maintenance mediated communication`, `link persistence web citation
decay`, `platform migration user trust`. Europe PMC is unusable either way — it
503s as of 2026-09-16 *and* sits at 3/3 on its domain cap.
