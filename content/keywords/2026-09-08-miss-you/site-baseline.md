# Phase 1 — own-site baseline, miss-you axis

Run: 2026-09-08 · seed set: miss you / i miss you / miss you gf / miss you
boyfriend / miss you long distance / miss you ideas · market: India (`gl=in`)

## What the site already has on this axis

One post, and it is aimed squarely at the highest-demand cluster in the whole
harvest:

| slug | primary keyword | batch |
|---|---|---|
| `miss-you-ideas-long-distance-relationship` | miss you ideas for long distance relationship | 2026-08-12-miss-you-ldr |

Its declared secondaries already cover `long distance miss you ideas`,
`what to send when you miss your long distance partner`, `i miss you page`
and `long distance relationship surprise ideas`.

**This is the single most important fact in this run.** The Phase 2 demand data
puts `miss you long distance relationship` and its variants at 13-15x prefix
hits — the top of the entire axis — and the site already owns a page pointed at
it. So the LDR cluster is an `improve-existing` question, not a `new-page`
question, and Gate 3/8b has to be applied at theme level or this run will
recommend writing a second page that competes with it.

`site-inventory.csv` carries the row with `live_url`
`https://subhsandesh.in/blog/miss-you-ideas-long-distance-relationship`, but the
repo has no publish state (that lives in Strapi), so live status is confirmed
from the SERP itself in Phase 4 rather than assumed here.

## No prior harvest on this axis

`content/keywords/` has runs for rakhi, raksha-bandhan, birthday, love-gf,
bouquet, gift-gf-bf and digital-gift. There is no miss-you run. So unlike the
digital-gift axis, there is no shortlisted-never-written backlog to mine first —
every candidate in this run is new ground.

## Own-site collisions

`npm run keywords:inventory` reports no collision involving a miss-you keyword.
The 39 collisions it does report are all rakhi/birthday clusters and are out of
scope for this run.

## Still missing

No Search Console export. Sixth run without one. Every position in this run is
observed from a live SERP, not from the site's own impression data, which means
striking-distance keywords (position 5-20 with impressions) cannot be separated
from keywords the site has never been seen for at all.

---

## Correction, after Phase 4 measured the SERPs

The section above is what the **repo** knows. It understated the site's position on
this axis substantially, and the live SERPs corrected it.

`subhsandesh.in` appears in **11 of the 43 measured SERPs** — the 7th most frequent
domain on the axis, ahead of womansday.com and southernliving.com. The pages found:

| our pos | keyword | page title as it appears on the SERP |
|---|---|---|
| **@1** and **@4** | i miss you website for girlfriend | "Miss You Page for Your Girlfriend — Send a Love Le…" / "I Miss You Page Maker for Her: Build a Heartfelt P…" |
| **@2** | cute ways to say i miss you | "Cute ways to say I miss you over text — 70+ exampl…" |
| **@3** | miss you message for boyfriend | "Miss You Message for BF — 120+ Lines & How to Send…" |
| **@3** | miss you surprise for girlfriend | "Miss You Surprise Page for Girlfriend — Create One…" |
| **@4** | miss you messages for gf | "Miss You Message for GF — Romantic & Sweet Lines +…" |
| **@4** | i miss you page for boyfriend | "Miss You Message for Boyfriend — 120 Lines & How t…" |
| @6 | miss you surprise for boyfriend | "Missing You Message for Boyfriend — 50 Heartfelt L…" |
| @7 | how to tell someone you miss them | "How to Tell Him You Miss Him Over Text — Scripts &…" |
| @7 | i miss you letter for gf | "Miss You Page for Your Girlfriend — Send a Love Le…" |
| @8 | i miss you online message | "Miss You Message Generator — Create heartfelt mess…" |
| @9 | miss you ideas for girlfriend | (as above) |

**None of these pages is in `content/batches/`** apart from the single LDR post. So
they were published outside the batch pipeline, and `keywords:inventory` cannot see
them — it reads `content/batches/` only. This is the concrete cost of the repo having
no publish state: a run that trusted Phase 1a alone would have recommended writing
pages that already exist and already rank in the top 4.

**Consequence for this run.** Six keywords are at position 1-4 and are cut from the
shortlist entirely (writing again against them invites cannibalisation). Two are in
striking distance and become `improve-existing`. Nine more sit in themes the site
already holds, so they are `cover-on-existing-page` rather than new pages. That is
15 of 43 rows — more than a third of the run — reclassified by this correction.
