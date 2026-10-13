# Research brief — halloween gift ideas for girlfriend (row 75)

Slug `halloween-gift-ideas-for-girlfriend` · absorbs "halloween girlfriend gifts", "halloween gift for her" · theme couple · PLAN weak 7/10.

## Phase 0 — first-party data
facts.md read by hand (no `npm run facts`). No Halloween data exists. Used (platform-wide, verbatim):
- 48.3% phone opens; 11.1 views per page (both in first 150 words); 38.5% password-protect; Raksha Bandhan lead time 49.4% on the day (disclosed in body as a different festival, n = 89).
Template spec (/happy-halloween, /happy-halloween-premium) used for feature descriptions only. No price wording about the product.

## Phase 1 — SERP (1 WebSearch, US index; Firecrawl disconnected)
Query: `halloween gift ideas for girlfriend`. Results: pearltrees (aggregator), fridaywereinlove.com x2 (same page via ?p=), static.intrafocus.com x2 + netbox.point-broadband.com (hijacked-subdomain spam, not analysed; intrafocus fetch failed), homecrux.com (canonical + AMP), hercampus.com. **Weak: 9/9.** No UK/AU/IN check; confidence lower for non-US.

| Page | Words (approx, incl. chrome) | Structure | Direct answer | Data / dates | Format | Optimising for |
|---|---|---|---|---|---|---|
| homecrux.com Halloween gifts for girlfriend (pub. 2026-09-09) | ~1,370 | H1 + 12 product H2s (bats cup, ghost plushie, candles x3, snow globes, anatomical-heart vase, heating pad, gnome, grim-reaper jar) | None; straight into products | None | No table, no FAQ, affiliate products | Amazon affiliate clicks |
| fridaywereinlove.com Spooky Basket for Her (2022, mod. 2025-09-06) | ~2,300 | H2 groups: things to wear, fall items, date night, treats; H3 fillers | Defines spooky basket | None | No table/FAQ; email opt-in | Basket fillers + list signups |
| hercampus.com spooky basket for gf/bf (2019, mod. 2021) | ~4,000 incl. chrome | 14 numbered H3 fillers (blanket, socks, candy, skincare…) | None | None | Student blog list | Basket fillers, both genders |
| pearltrees item | n/a | Aggregator pin | — | — | — | Spam/curation |
| intrafocus / point-broadband | n/a | Hijacked spam ("7+ Spooky Halloween Presents") | — | — | — | Spam |

## Phase 2 — gap
- Table stakes: candles, cosy items, spooky decor, date-night framing, basket fillers.
- Gap: no page gives budgets, sorts by HER interest, or offers single considered gifts (two of three real pages are baskets). None cites research; none says what NOT to buy; none addresses experiences vs things.
- Fan-out: gifts under $25 / $25–75 / $75+; for a horror fan; for someone not into scary; experiences vs objects; what to write in the card; long distance; mistakes; boo basket vs gift.
- Angle: wins by being the only post that sorts single gifts for her by labelled budget and interest, pairs each with a note, and grounds experiences-vs-things and mistakes in open-access research, with SubhSandesh's 48.3% / 11.1 figures for the note.

## Sibling de-duplication
Read H2s/items of b1 `halloween-gift-ideas-for-boyfriend`, `boo-basket-ideas`, `halloween-ideas-for-girlfriend`; b2 `halloween-messages-for-boyfriend` (not in batch dir at time of reading — not on disk). Excluded items they used (haunted attraction, cinema double feature, escape room, day trip, board game, framed photo, potion set, coupon deck, candles, mugs, throw, tarot deck, socks, pumpkin carving, etc.). 5-word shingle check vs both batches: only template-feature phrasing, fact lines and URLs overlap; reworded the template walkthrough and two H2s that echoed the boyfriend post.

## Phase 3 — sources (all fetched)
1. Pollmann & van Beest 2013, PLOS ONE, PMC3873259 — full text (Europe PMC XML). Study 1: 61 dyads (21 romantic), known 16.92 yrs; 10 of 30 catalogue gifts; women M 5.66, men M 5.33 of 10; mediated by interpersonal interest. Giver/recipient mismatch paper, not one of Batch 1's.
2. Stenlund et al. 2024, Communications Psychology, PMC11659422 — full text. 200 people, 7 countries, $10,000; highest happiness from donations, gifts, experiences; 273 experience purchases, mean $384. CC BY-NC-ND: cited/linked only.
3. Van Boven & Gilovich 2003, JPSP — **prompt said check OA**: OpenAlex lists green OA on SSRN only; SSRN returned 403. Cited from Europe PMC abstract (MED/14674824); body says abstract only.
4. Project Gutenberg #84 Frankenstein — PD in USA, release 1993-10-01 (exempt host).
Rejected: Chan & Mogilner 2017 (used by b1 boyfriend), Givi & Galak 2017 + Givi et al. 2022 review (Elsevier/Wiley, closed), Galak et al. 2016 (SAGE, banned), Yang & Urminsky SSRN (later Psychological Science, SAGE), Frontiers experiential-gift papers (Frontiers banned), PMC13603195 / PMC11787505 (b1).
Findpapers queries: "gift giver recipient mismatch", "experiential versus material purchases happiness", "gift giving romantic partner", "gift givers recipients preferences misprediction", "gift recipient appreciation versus giver prediction", "Givi Galak gift giving review", "material versus experiential gifts relationship strength".
capcheck: no caps hit by this post; verify-batch: clean for this slug (only problem is batch.json not listing new slugs — orchestrator's file).
