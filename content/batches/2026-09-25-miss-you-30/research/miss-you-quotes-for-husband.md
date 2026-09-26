# Research brief — `miss you quotes for husband`

Batch `2026-09-25-miss-you-30`, wave 2, row 3. Slug `miss-you-quotes-for-husband`.
SERP engine: DuckDuckGo `kl=in-en`, captured 2026-09-25 in `SERPS-WAVE2.md`.
Titles, H1s, headings and rough body sizes fetched directly 2026-09-25 (zero WebSearch spend).

---

## Phase 0 — data gate

`content/facts.md`, regenerated 2026-09-24 with a 2026-09-25 miss-you segment below the
manual marker. Current blocks only; the `## Superseded vintage — 2026-09-15 (ARCHIVE)`
block is not cited anywhere.

Gate: PASS. Eleven relevant lines, and the opening pair chosen is the least-reused in the
batch — the 2.6-hour median edit gap and the 88.8% publish rate appear in only two other
posts each, against 26 for the 214-pages line.

Three mandatory caveats, all carried in body prose:

1. n = 214, template live 2026-07-28, so two months — stated in the intro and again in the
   closing section. No seasonal claim anywhere.
2. `viewCount` is page views, not unique visitors — stated where the 2,417 views appear.
3. City, background music and "together since" are **pickers with defaults** — stated where
   the 47 city pairs appear, with the explicit line that they are not a map of where
   husbands go.

Plus the disclosure that the database records which *template* was opened, never who
received it (body + FAQ). `## Pricing` is empty; no price, tier, or cost-adjacent phrase
appears in the post, and "free" is not used in any sense.

## Phase 1 — SERP

Eight results. All fetched 2026-09-25 for title, H1, headings and rough body size.

| # | Domain | Title | Rough words | Shape | Direct answer? |
|---|---|---|---|---|---|
| 1 | wishesmsg.com | 100+ Miss You Husband **Messages and Quotes** | ~3,257 | 6 mood buckets + AI generator CTA | No — intro then lists |
| 2 | shayarguru.com | 100+ Miss You Husband **Messages and Best Quotes** | ~3,789 | 8 mood buckets | No |
| 3 | parenting.firstcry.com | Top 200+ Miss You **Quotes and Messages** for Husband | ~6,609 | One 220-item list + FAQs | No |
| 4 | attractiondiary.com | 100+ Romantic Miss You **Messages and Quotes** For Your Husband | ~3,714 | 6 buckets incl. "Long Distance", "Busy Husband" | No |
| 5 | themorningpics.com | 120+ Miss You Messages for Husband – Sweet & Romantic | ~1,096 | 6 buckets (H2s say "Quotes") | No |
| 6 | momjunction.com | 400+ Miss You **Quotes And Messages** For Husband | ~13,257 | 400+ list, "how to use creatively", infographic, community | No |
| 7 | redmessages.com | 120+ Miss You Quotes for Him to Express Your Love | ~4,566 | *for him* page; "Miss You Quotes for Husband" is one H2 | No |
| 8 | cozywisher.com | 116 Heartfelt "I Miss You" Messages for Your Husband | ~1,663 | 12 near-synonymous buckets | No |

**FORMAT-SPLIT COUNT (the number the wave brief asked for): 5 of 8 titles merge
"messages" and "quotes". 8 of 8 merge them somewhere on the page** (the other three carry
both words in H2s). That is worse than the `for sister` row's 4 of 8. Google is not
separating the two intents here, and "mine is the quotes one" is not relied on as
differentiation anywhere in this post.

**Volume, as the anchor found:** all eight lead with a raw count — 100, 100, 200, 100,
120, 400, 120, 116.

**Title/URL disagreement, as the anchor found:** wishesmsg serves
`/miss-you-messages-for-husband-sweet-and-romantic/` under a title carrying "Quotes".
redmessages ranks at #7 for a *husband* query with a `/miss-you-quotes-for-him/` page.

**No subhsandesh.in result.** `weAlreadyRank` was null and the SERP confirms it. But
`/blog/miss-you-message-for-husband` is live and was fetched and read before drafting —
see Phase 2.

## Phase 2 — gap

**Table stakes:** a usable set of short lines; some sense of long distance; a length cue;
FAQs.

**The gap, measured rather than asserted.** Searched all eight bodies for `onsite`,
`posting`, `seafarer`, `merchant navy`, `gulf`, `contract`, `deployment`, `migrant`,
`offshore`, `abroad`, `overseas`, `away for work`, `business trip`. Every hit was a false
positive from a substring (`relationship` → "ship", `right` → "rig") or a passing
mention. The only real framings of the absence found:

- wishesmsg, intro: "he is away on a business trip or just away from you for a few days"
- redmessages, one line in a list: "Deployments, work trips, whatever keeps us apart"

**So: no result on this SERP writes for an absence measured in months.** All eight sort
by mood. None asks why he is away, which is why none can give a different answer for a
nine-month contract than for a weekend.

**Live-page check (cannibalisation).** `/blog/miss-you-message-for-husband` fetched with
`ctx_fetch_and_index` and searched. It is a compose-and-send page: choose-your-tone H2,
120+ examples under eight mood buckets (short and sweet / romantic and intimate / playful
and teasing / long-distance and heartfelt / after an argument / for the dad who's away /
new parent / emotional and vulnerable), a three-step personalise workflow, a build flow, a
tone-mistakes section, six template-and-countdown FAQs. "For the dad who's away" is two
lines; "long-distance and heartfelt" is three. No first-party data, no research, no
treatment of a months-long absence. **Verdict: differentiate, and cross-link** — done in
the SERP section.

**The angle.** Sort borrowed lines by the *shape of his absence*, in the register of a
long marriage where the missing is routine rather than dramatic and a household is running
without him. Two of the four reasons invert the anchor's advice rather than echoing it.

**Fan-out sub-queries → H2/H3s:** what is a quote vs a message · what to send a husband on
a long posting · what to send when he is home only at weekends · what to write when the
return date moved · what to say when he is home and distant · do messages actually help ·
how long should it be · what does the recipient do · is this page different from the
messages page · when not to send anything.

## Phase 3 — sources

Route: `findpapers.mjs` (Crossref + Europe PMC) → Europe PMC REST `resultType=core` for
abstracts. **Zero WebSearch calls.** PDFs do not parse here, so every paper is an
**abstract-and-metadata read**; no full text was read and that is recorded in the audit as
a failure against checklist item 26 rather than glossed.

Phenomenon queries tried: `labour migration left-behind spouse wellbeing`, `left-behind
wives India male out-migration mental health`, `transnational marriage communication mobile
phone migrant couples`, `marital satisfaction spousal separation military deployment`,
`loneliness left behind spouse migration`, `left behind wives India male migration autonomy
household`, `internal migration India magnitude census interstate migrants`, `Kerala Gulf
migration emigrant households survey`, `spouse left behind India emotional wellbeing
migration`.

| Source | Journal | Published | What it carries | Tests |
|---|---|---|---|---|
| europepmc.org/article/PMC/PMC6402049 | Current Sociology | 2018-09-13 | Long-distance marriages (migrant wives in Singapore, husbands in the Philippines); couples endure by "bracketing off intense emotions and downplaying ruptures"; communication tech "crucial in (re)making domestic family time" | subject ✓ swap ✓ peer-reviewed ✓ OA ✓ |
| europepmc.org/article/PMC/PMC12934157 | Military Psychology | 2025-03-19 | n=201 partners of mobilised combatants: negative communication ↔ poorer psychological health; **no direct link** between positive communication and mental health; indirect via perceived social support | subject ✓ swap ✓ peer-reviewed ✓ OA ✓ |
| europepmc.org/article/PMC/PMC13435690 | BMC Public Health | 2026-07-23 | NFHS-5, n=82,598: 15.3% of men temporary migrants (8.9% short-term, 6.4% long-term); male labour migration "common across India and often results in extended periods of spousal separation" | subject ✓ swap ✓ peer-reviewed ✓ OA ✓ |
| europepmc.org/article/PMC/PMC10105934 | BMC Women's Health | 2023-04-15 | Middle-Ganga Plain survey 2018-19 (IIPS): 1,314 left-behind wives vs 1,402 non-migrant wives — cited only for the existence and scale of the population | subject ✓ swap ✓ peer-reviewed ✓ OA ✓ |
| en.wiktionary.org/wiki/quote | — (reference instrument, cap-exempt) | — | "to copy out exact words" sense "since 1680"; noun sense attested 1885. Read from page wikitext via `action=parse`. Grounds the inherited lane sentence | instrument |

At most one generic context statistic: the NFHS-5 figure, and it is subject-specific
rather than background.

**Cap decisions.** `journals.plos.org` was at 3 posts and was avoided entirely — including
the single best-matched paper found in the whole search, PLOS Mental Health's
cross-sectional study of 255 wives of migrant workers in Tanahun, Nepal (PMC12798458,
23.5% prevalence of depression). BMC Women's Health was substituted for the
population-scale point instead. PMC12706191 (179 wives of international migrant workers,
Gauradaha) was left to `miss-you-quotes-in-nepali`, which already cites it.
`frontiersin.org` (2 posts) was not used. `doi.org` was not used. `europepmc.org` and
`en.wiktionary.org` are cap-exempt reference hosts under this batch's `verify.config.json`.

**Framing claim in the task prompt — verified, and narrower than stated.** The prompt said
long-term labour migration in India, intra-India and Gulf, is a mass phenomenon. NFHS-5
supports scale but not the wording: 15.3% of men are temporary migrants, of whom only 6.4
points are *long-term*, and the paper does not decompose intra-India versus Gulf. The body
prints the published split and makes no Gulf-specific magnitude claim.

## Phase 4–5 — structure and links

H2s: what a quote is (lane sentence, 1680) · the four reasons and what each changes (4
H3s) · what a message can and cannot do · how much to write (comparison table, 4 rows,
first-party column) · what the recipient does · what the eight pages are selling · where
this runs out.

Internal links, 4: `/missyou-gf` (mandatory), `/dedication` (a radio show made for one
person — his real voice case, placed in reason 4), `/blog/miss-you-message-for-husband`
(the live cross-link), `/capsule` (predictions sealed and opened a year later — the
"missing is about a year, not a distance" case). `templateUrls`: `/missyou-gf`,
`/capsule`, `/dedication`. Category `miss-you-across-miles`.

Slug checked free against Strapi 2026-09-25: `filters[slug][$eq]=miss-you-quotes-for-husband`
returned `total: 0`.

## Phase 6 — audit

48 passed, 2 failed, disjoint, 50 total. Both failures are recorded honestly in
`batchMeta.auditReport.failed`: outbound links read via REST/API records rather than the
rendered HTML pages (abstracts only, no PDFs), and the mandatory `/missyou-gf` link
sitting inside the first 150 words because the Phase 0 first-party rule puts the template's
own measurements there.
