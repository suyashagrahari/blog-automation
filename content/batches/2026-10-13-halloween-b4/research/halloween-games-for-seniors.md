# Research brief — halloween games for seniors (row 181)

- **Slug:** `halloween-games-for-seniors` · theme party · absorbs "halloween activities for seniors"
- **Searches used:** 2 WebSearch (US index); Firecrawl disconnected. (1) the keyword; (2) "Alzheimer's Society Halloween dementia masks startle tips" to find a care source. Papers via `findpapers.mjs` (no budget).
- **Slug check:** Strapi `filters[slug][$eq]` returned 0 matches (2026-10-13).

## Phase 0 — first-party data
No Halloween, senior or activity data in facts.md (BRIEF §3). Used, labelled as platform-wide or as analogue:
- 48.3% of shared pages are opened on a phone (27,725 of 57,456 views) — measured 2026-09-24
- Raksha Bandhan 2026 lead time … 49.4% built on the festival day itself … — measured 2026-09-09 (nearest analogue, labelled)
- Average views per created page: 11.1 — measured 2026-09-24
Template spec (`template-spec.md`) used for the family/kids mode description only.

## Phase 1 — SERP (WebSearch, US index)
Top 9 returned. **7 of 9 are weak / hijacked-subdomain spam**: games.rjuuc.edu.np x2, static.intrafocus.com x2, netbox.point-broadband.com x2, servermove.retailgazette.co.uk. Not analysed. Gate 4 passes (many weak results).

| Page | Words (est.) | Headings | Direct answer | Data cited | Format | Tone / optimising for |
|---|---|---|---|---|---|---|
| comfortkeepers.com (Osseo MN franchise blog) | ~900 | H1 + 7 H3 (costume parties, pumpkin decorating, bingo, …) | After a generic intro | None; no dates on data | Prose blocks, images, no table, no FAQ | Third person, local SEO for in-home care |
| kohud.kendal.org (Kendal on Hudson, 20 June 2024) | ~600 | 6 italic sub-heads (scavenger hunt, bingo, pumpkin decorating, candy count, …) | After a CEO quote | None | Short prose, no table, no FAQ | Promotional for a Life Plan Community |

Fetched both in full via `ctx_fetch_and_index`. Both are operators in senior care (treated as rank-holders: never cited or linked).

## Phase 2 — gap
- **Table stakes:** bingo, pumpkin decorating, costumes, social benefit.
- **Gap:** no page tags activities for mobility, cognitive load, group size or minutes; no hearing/vision adaptations; no dementia-specific set; no sourced safety (startle, falls, diabetes); no intergenerational/video-call angle; no evidence for "cognitive benefit" claims (Comfort Keepers asserts bingo "improves" memory with no source).
- **Stale/unsupported data:** none cited at all.
- **Fan-out:** seated games for wheelchair users; dementia-safe activities; jump scares and heart risk; sugar-free treats for diabetics; session length in a care home; large-print bingo; grandkids over video call; is Halloween childish for older adults; Halloween date 2026/2027; does reminiscence help.
- **Angle:** wins by being the only post that tags every activity for mobility, load, players, minutes and hearing/vision adaptation across four settings, with sourced startle, fall and sugar-free safety and an honest read of the reminiscence evidence, using the 48.3% phone-open share for the one-grandchild send.

## Phase 3 — sources (all fetched)
| Source | What it supports | Date | Read |
|---|---|---|---|
| Jiao et al., BMC Geriatrics 25:847 — europepmc.org/article/PMC/PMC12587503 | Umbrella review: 21 reviews, 246 RCTs, 18,177 older adults; RT may reduce loneliness, aid communication; most reviews critically low quality; no support for well-being, agitation, apathy | 2025-11-05 | Full text (Europe PMC XML). Licence CC BY-NC-ND: cited and linked only |
| alzfdn.org — Creating a Dementia-Friendly Halloween | Talking/screaming/flashing decor frightens and may prompt wandering; pumpkins and leaves instead; fruit for candy (sugar may increase agitation); old photos, painting pumpkins | 2023-10-24 | Full |
| bhf.org.uk — Takotsubo syndrome | Sudden heart-muscle weakening usually from severe emotional/physical stress; more common in women and over-50s | 2024-07-01 (next review 2027-07-01) | Full |
| who.int — Falls fact sheet | Adults over 60 suffer the most fatal falls; 684,000 fall deaths a year | 2021-04-26 | Full (context stat) |
| diabetes.org.uk — Sugar, sweeteners and diabetes | "Sugar-free" not necessarily low-calorie; polyols in "diabetic" foods not recommended, laxative in large amounts | 2017-08-21 (JSON-LD datePublished) | Full |

Search terms tried in findpapers: "group reminiscence older adults loneliness", "bingo older adults", "board games older adults social engagement", "intergenerational program older adults children", "playing games older adults loneliness longitudinal", "group games nursing home residents depression". Rejected: PMC13424732 (Int J Nursing Sciences — Elsevier, banned); Frontiers and MDPI/PLOS hits (banned / megajournal).

## Notes and brief-claim checks
- The prompt asked for a care source on jump-scares for **heart conditions**. No source found ties Halloween pranks to cardiac events; the post cites BHF on takotsubo risk factors and states plainly that no source links pranks to it.
- heart.org returned a Cloudflare challenge and cdc.gov (falls facts) returned 403; neither worked around.
- Sibling clashes avoided: b1 Monster Bingo (find-a-guest) and Spooky Sound Guess → Riddle Bingo, Object Bingo, radio-play listening game; b2 kids pass-the-pumpkin (music, copy-a-face) → question-under-thumb version with no music; b1 grandchildren video-call "pass a pretend treat" → costume reveal guessing; b1 date-ideas-at-home Tell-Tale Heart reading → W. W. Jacobs's "The Monkey's Paw" (1902); b4 games-for-adults (20 games, re-read before finalising) — no shared game.
- 5-word overlap check against all b1–b4 posts: remaining shared n-grams are template-spec boilerplate and calendar dates only.
