# digital-gift-ideas-for-girlfriend — ABORTED at the BRIEF-WAVE2 §3 cannibalisation gate

- **Keyword:** `digital gift ideas for girlfriend`
- **Secondary (assigned):** `creative digital gift ideas for girlfriend`
- **Slug (not published):** `digital-gift-ideas-for-girlfriend`
- **Batch:** `2026-09-15-virtual-gift-30`, wave 2
- **Category that would have been used:** `digital-gifts-romance`
- **Assigned templates:** `/love-gf`, `/searched`, `/nutrition`
- **`nearestLive`:** `/blog/digital-gift-for-girlfriend-day`
- **Verdict: ABORT. No blog JSON was written. No source was spent.**
- **Measured:** 2026-09-16

---

## 1. Verdict in one paragraph

The intent is real and the keyword has volume, but it has no SERP of its own and
no angle of its own. Half of its India top-ten is byte-identical to the top-ten
of `digital gift for girlfriend`, which wave 1 of this same batch already
published as `/blog/digital-gift-for-girlfriend` — and the five shared URLs are
the five personalised-page competitors, i.e. the engine resolves both queries to
exactly the product our published sibling was written to explain. Separately and
independently, the differentiator this row was commissioned to carry — *"ideas"
means the searcher wants a decision procedure, not a catalogue* — is already
spent twice over inside this batch: `digital-gift-for-girlfriend` is a five-
question elimination procedure and `what-can-i-gift-my-girlfriend` is a four-
question one, both for the same recipient. A third decision procedure for a
girlfriend, on the same product, on a SERP the second one already occupies, is
the near-duplicate BRIEF-WAVE2 §3 exists to prevent. The recommended remediation
is in §7: fold the one genuinely unclaimed observation into the live sibling as a
section and two FAQs, and leave the slug unpublished.

---

## 2. Phase 0 — data gate (would have passed; recorded for completeness)

`content/facts.md`, regenerated 2026-09-15, was read. Phase 0 was not the
blocker. At least three lines are relevant and at least two could have opened
the body inside 150 words, choosing the under-used pair BRIEF-WAVE2 §4 asks for
rather than the 40.6% / 6.2-hour pair that four siblings already open on:

- `94.1% of started pages are actually published and shared (4,098 of 4,357) — measured 2026-09-15`
- `3,377 registered creators — measured 2026-09-15` (1.29 pages each: people come back)
- `Occasion-dated pages … 3.7%; the platform is 96.3% romantic and everyday pages`
- `Average views per created page: 11.5` / `49,968 recorded views`
- `49.0% of shared pages are opened on a phone (24,493 of 49,968 views)`

**Pricing:** the `## Pricing (fill in by hand)` block in `facts.md` is empty.
No free-tier or paid-tier figure exists. Nothing in this brief asserts a price,
and nothing would have.

**Recipient caveat, recorded:** the database records which *template* was
opened, not who received it. `/love-gf`'s 1,125 pages do not prove the recipient
was a girlfriend.

---

## 3. Methodology disclosure

- `WebSearch` is exhausted (200/200) and `WebFetch` is blocked. Neither was
  called.
- `scripts/serp.mjs` (Brave) is in a hard 429 for the session. It was **not**
  called and no retry loop was written, per BRIEF-WAVE2 §0.
- The assigned SERP was read from `SERPS-WAVE2.md` (DDG html POST, `kl=in-en`,
  organic only, paid filtered).
- **One** additional `node scripts/serp-ddg.mjs "digital gift for girlfriend"`
  call was made — the cannibalisation check in §4.2. One call, no loop.
- `https://subhsandesh.in/blog/digital-gift-for-girlfriend-day` was opened with
  `ctx_fetch_and_index` and read, per §3 step 1.
- Six sibling JSONs in `blogs/` were read in full for angle, headings, FAQs and
  sources before any drafting decision was taken.
- No scholarly API was called and no source was fetched. **The batch source
  ledger is unchanged by this row** — see §8.

---

## 4. Phase 1 — SERP analysis

### 4.1 The assigned SERP, and why it is unusually clean

`digital gift ideas for girlfriend`, DDG html, `kl=in-en`, organic:

| # | Host | What the page actually is |
|---|---|---|
| 1 | giftfeels.com | competitor — free virtual gift link for a girlfriend |
| 2 | etsy.com `/market/digital_gift_for_girlfriend` | auto-generated marketplace facet over **digital downloads** |
| 3 | giftcart.com `/collections/digital-gifts` | retailer — e-vouchers sold as "digital gifts" |
| 4 | etsy.com `/market/virtual_gifts_for_girlfriend` | the same facet, second spelling |
| 5 | aiskyla.com | competitor — personalised page service |
| 6 | giftoryy.com | competitor — interactive digital love gifts |
| 7 | pctechkits.com | affiliate listicle, gaming hardware |
| 8 | lovedigitalgift.com | competitor — interactive gift websites |
| 9 | couplemoment.com | competitor listicle, 50 physical gifts |
| 10 | gifft.me | competitor — free virtual gift sending |

**Only 2 of 10 are conventional ecommerce** (both Etsy), against a wave-2 average
where `etsy.com` appears in 16 of 30 rows and `amazon.in` in 12. Neither Amazon
nor Flipkart appears here at all. **Why**, worked out from the results rather
than assumed: the qualifier `digital` is doing the disambiguation, and the
control case is sitting in the same file. The near-identical sibling query
`online creative gift ideas for girlfriend` — same head (`gift ideas for
girlfriend`), different qualifier — returns Amazon, Uncommon Goods, Etsy,
Flipkart, Wirecutter, Shutterfly, The Knot and Vaaree: **8 of 10 retail or
retail-listicle**. Swap `online creative` for `digital` on the same tail and the
retail wall disappears. `online` and `creative` are words a retailer's category
page can honestly carry; `digital` is not, because a retailer cannot ship a
digital thing, so the retail pages simply do not compete for it and five
personalised-page startups fill the vacancy instead.

**Six of ten results are competitors under `references/competitors.md` /
BRIEF-WAVE2 §0** (giftfeels, aiskyla, giftoryy, lovedigitalgift, couplemoment,
gifft.me). They were read for gap analysis only. None is cited or linked.

**There is still no authoritative, non-commercial page in this SERP.** That is a
genuine gap — but it is the *same* gap `/blog/digital-gift-for-girlfriend` was
written into, which is the problem, not the opportunity.

### 4.2 The cannibalisation check that decided it

`node scripts/serp-ddg.mjs "digital gift for girlfriend"` — the keyword of the
wave-1 sibling `blogs/digital-gift-for-girlfriend.json` — run once, same engine,
same region, on 2026-09-16:

```
 1. https://giftfeels.com/gifts-for-girlfriend        ← shared, and #1 in BOTH
 2. https://aiskyla.com/                              ← shared
 3. https://giftoryy.com/                             ← shared
 4. https://gifft.me/                                 ← shared
 5. https://www.etsy.com/market/digital_gift_for_girlfriend  ← shared
 6. https://www.2-luv.com/en
 7. https://iloveyou.gift/
 8. https://www.cutiepage.in/
 9. https://lovelink.online/
10. https://www.amazon.in/electronic-gifts-for-women/...
```

**5 of 10 URLs are byte-identical across the two top-tens, and the #1 result is
the same page in both.** Adding "ideas" to `digital gift for girlfriend` moves
results around and swaps in one listicle; it does not change what the engine
thinks the query is about. Under BRIEF-WAVE2 §3 step 2 — *"if the live page
appears in that SERP, Google already treats it as the answer to your query and
you are competing with yourself"* — this is the blocking condition at the
document level rather than the page level: our sibling is too new to rank yet,
but it is aimed at precisely the result set this keyword returns.

### 4.3 `nearestLive` — `/blog/digital-gift-for-girlfriend-day`

Fetched and read. It is an occasion-dated build guide: *why a page beats a
message*, *the five essential elements*, *five build steps*, *message examples*,
*reveal ideas*, *timing and etiquette*, *final checklist*. This one is **easy to
differentiate from** — it is a how-to for an occasion, not an idea or decision
post. It is not the reason for the abort, and a published post here would have
linked it. Recorded so the next agent does not re-derive it.

---

## 5. Phase 2 — gap analysis, and the exhaustion of the angle space

Six sibling posts were read in full. What each one already owns:

| Sibling | Wave | Owns |
|---|---|---|
| `digital-gift-for-girlfriend` | 1 | **The decision procedure.** Five questions that eliminate *forms*: can she open it without installing, who else sees her screen, is she expecting a specific object, how much time tonight, does she have to do something. Plus "what a digital gift is genuinely bad at". |
| `what-can-i-gift-my-girlfriend` | 1 | **The other decision procedure.** Four questions on *context*: relationship length, budget, distance, appetite for a public gesture. Plus the physical-vs-digital call. |
| `virtual-gift-ideas` | 1 | **The catalogue.** Nine ideas ranked by how many real people finish each one. Its `secondaryKeywords` are `digital gift ideas` and `online gift ideas`. |
| `online-gift-for-girlfriend` | 1 | **Legitimacy.** Does an online gift read as a real gift — plus six options and a time/visible-effort comparison. |
| `online-creative-gift-ideas-for-girlfriend` | 2, parallel | **Craft.** What makes a gift feel *made* rather than *ordered*. |
| `/blog/digital-gift-for-girlfriend-day` | live | **The build how-to**, for one occasion. |

The commissioned differentiator for this row was: *someone typing "ideas" has
decided nothing and wants a decision procedure, not a catalogue.* **That
sentence describes `digital-gift-for-girlfriend` exactly** — its own `angle`
field reads "the only post that treats `digital gift for girlfriend` as a go/no-go
decision rather than an idea list". The premise the row was built on is false as
of wave 1's publication, and it is false twice.

Angles considered and rejected, so the next agent does not re-walk them:

1. **A third decision procedure, on different axes (about *her*, not about *you*).**
   Rejected: `digital-gift-for-girlfriend` Q3 and Q5 and
   `what-can-i-gift-my-girlfriend` Q4 are already recipient-facing. The residue
   is one or two questions, not a post.
2. **The sourcing problem — where the *content* comes from, as opposed to which
   container to pick.** The strongest survivor, and genuinely thin in the
   siblings (one FAQ in the boyfriend post, one step in `nearestLive`). Rejected
   because it converges hard on the parallel row's *made rather than ordered* —
   the argument for made-ness is that it uses material only you have — and this
   row was explicitly told not to take that.
3. **A three-way product fork: personalised page vs Etsy digital *download* vs
   e-voucher**, which is what this SERP literally contains. Rejected:
   `digital-gift-for-boyfriend` owns the digital-gift-vs-gift-card fork and
   `what-is-a-digital-gift` owns the definition. Adding the Etsy download leg is
   one paragraph of novelty on a frame two posts already hold.
4. **"Ideas" plural as a sequence rather than one object** (3,377 creators ×
   1.29 pages). Rejected: cannot be grounded past one statistic.
5. **Which ideas survive a Tuesday night.** Rejected: that is
   `virtual-gift-ideas`'s ranking-by-completion angle verbatim.

**I cannot state the split from the five sibling girlfriend posts in one honest
sentence.** Per BRIEF-WAVE2 §3, that is the abort condition, and it is met.

### Keyword-overlap note, stated precisely

`virtual-gift-ideas` claims **`digital gift ideas`** as a `secondaryKeyword`.
This row's primary is that phrase plus a recipient qualifier — a containment,
not a byte-identical collision, so I am **not** claiming a literal §3
secondary-keyword violation. Likewise, the assigned secondary `creative digital
gift ideas for girlfriend` is a one-word swap from the parallel row's *primary*
(`online creative gift ideas for girlfriend`) rather than from its declared
secondaries. Both are corroborating, neither is the load-bearing evidence. The
load-bearing evidence is §4.2 and §5.

---

## 6. Templates — the abort costs zero coverage, which removes the last reason to write anyway

Wave 2 exists in part to link the seven templates wave 1 never linked. This row
carried `/searched` and `/nutrition`, so the coverage question had to be checked
before aborting. Counted across `WAVE2-PLAN.json`:

- `/searched` → also assigned to `online-creative-gift-ideas-for-girlfriend` and
  `long-distance-gift-for-best-friend`.
- `/nutrition` → also assigned to `cute-website-for-girlfriend`,
  `online-creative-gift-ideas-for-girlfriend` and `long-distance-gift-for-best-friend`.
- `/love-gf` is the batch's most-linked template already.

**Both novelty templates keep two or three other carriers.** Aborting this row
leaves no template unlinked and does not reopen the imbalance wave 2 was
commissioned to fix.

Recorded for whoever writes the parallel row, since both rows were assigned the
same two jokes and were told to say different things about them:
`/searched` is *"they type their own name into a search box and get joke
autocomplete, a full results page about them, and a knowledge panel that is too
accurate"*; `/nutrition` is *"a nutrition label where the product is a person
(serving size 1, calories ∞); tap any row and the sender explains why it is on
the label"*. Both are jokes by design. Describing either earnestly, as a sincere
romantic gesture, reads as though the writer never opened it.

---

## 7. Recommended remediation instead of a fifth post

1. **Do not publish this slug.** Leave `digital gift ideas for girlfriend` to
   `/blog/digital-gift-for-girlfriend`, which targets the same result set.
2. **Add one section to the live `digital-gift-for-girlfriend` post** carrying
   the only observation in this brief that no sibling holds: the SERP for this
   phrase returns three different products under one name — a personalised page,
   an Etsy *digital download* you buy and she prints, and an e-voucher — and the
   Etsy download leg is the one neither `what-is-a-digital-gift` nor
   `digital-gift-for-boyfriend` covers, because both of those split it two ways.
   Two sentences and a row in its existing comparison table.
3. **Add two FAQs to the same post**, neither of which restates one of its
   headings (§8): *"I searched 'digital gift ideas' and got Etsy printables —
   are those the same thing?"* and *"Why does adding the word 'digital' change
   the results so much?"*
4. **Nothing is owed to the replacement ledger.** This row was itself a
   replacement for `how to surprise boyfriend on his birthday online`, killed for
   the same reason (cannibalised by a live page). The replacement inherited the
   defect rather than fixing it: it was picked for volume and for being
   unclaimed *outside* the batch, without a check against what wave 1 had just
   published *inside* it.
5. **Process note worth carrying to wave 3.** The Gate-2 screen that built
   `WAVE2-PLAN.json` measured ecommerce density, which this keyword passes
   cleanly (2/10). It did not measure URL overlap against the top-tens of
   already-claimed rows, which this keyword fails badly (5/10). One
   `serp-ddg.mjs` call per candidate against its nearest claimed sibling, at
   planning time, would have caught this before an agent was spawned on it.

---

## 8. Source ledger — unchanged

No scholarly API was queried, no landing page was fetched for citation, and no
source was spent. `SPENT-SOURCES.json` counts are unaffected by this row.
`theconversation.com` (2 of 3) and `hbs.edu` (at its 2/2 URL ceiling) remain
where they were; a later row may still take the free slot.

---

## 9. Phase 6 — audit

No `auditReport` exists because no blog JSON was written. The 50-item publish
checklist was not run; it cannot pass or fail against a file that does not exist.
`scripts/verify-batch.mjs` was run across the batch after this decision and
reports **no lines naming `digital-gift-ideas-for-girlfriend`**, which is the
correct result for an aborted row. Per BRIEF-WAVE2 §7, all source-cap findings
and all findings naming other slugs were ignored.

**Honest assessment.** Aborting is the right call and it is not a close one: the
keyword's top-ten shares half its URLs and its #1 result with a post this batch
published nine days ago, and the differentiator this row was commissioned to
carry was already the published sibling's stated angle. The keyword is worth
something — the "digital" qualifier really does clear the retail wall, and that
finding is the durable output of this brief — but it is worth it to the page
that already exists, not to a fifth girlfriend post standing next to it.
