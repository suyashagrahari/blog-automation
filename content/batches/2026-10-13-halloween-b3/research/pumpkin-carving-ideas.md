# Research brief: pumpkin carving ideas (row 149)

- Keyword: `pumpkin carving ideas` (absorbs "easy pumpkin carving ideas"), theme decor, weak 4/10 in plan, band 3,000–10,000/mo.
- Slug `pumpkin-carving-ideas`: free in Strapi (checked 2026-10-13). Category `festive-beats` exists.
- Head-term note: a 3-word head term, hard to win for a low-authority domain. Long-tail alternatives the post also serves: "how long does a carved pumpkin last", "etched pumpkin designs for intermediate carvers", "does bleach make a carved pumpkin last longer".

## Phase 0: first-party data

No Halloween or pumpkin data exists in facts.md (BRIEF §3). Used, verbatim:
- Raksha Bandhan 2026 lead time (49.4% built on the day), labelled as the nearest festival analogue, to argue for carving late.
- 48.3% of shared pages opened on a phone (the reason to photograph the pumpkin).
- 90.9% of started pages published and shared.

`npm run facts` not run (BRIEF).

## Phase 1: SERP. WebSearch (US index), 1 call

| # | Page | Fetch | Words / shape | Direct answer | Data cited | Optimising for |
|---|---|---|---|---|---|---|
| 1 | foodnetwork.com packages/halloween/pumpkin-carving-ideas | 403, judged from snippet only | gallery package | n/a | n/a | brand gallery |
| 2 | collegehunkshaulingjunk.com/blog/pumpkin-carving-ideas (3 Oct 2024) | fetched | ~600 words, 10 H3 ideas, junk-removal promo banner | none, intro then list | none | brand content, weak |
| 3 | lancerspoint.sjvhs.com (school paper, 21 Oct 2014) | fetched | ~700 words, 5 categories (classic, scary, Disney characters, pop culture, no-carve) | buried | none | student article, weak |
| 4 | ohhdeer.com/blogs/blog/pumpkin-carving-ideas (gift shop) | fetched | ~900 words, 10 H2 ideas + "top tips" | none | none; asserts petroleum jelly "seals in moisture" with no source | shop blog, weak |
| 5 | saga.co.uk magazine (27 Oct 2025) | fetched | ~2,500 words, 9 ideas + carver quotes | after intro | none; carver claims bottom-cut pumpkins "last a lot longer" | magazine |
| 6 | homedepot.com (13 ideas, AI page) | not fetched (snippet) | | | | retailer |
| 7 | lohacemosvisible.zeiss.es | hijacked-subdomain spam, weak, not analysed | | | | |
| 8 | gardeningetc.com | snippet | 11 designs | | | magazine |
| 9 | sfddev.scotsman.com (dev subdomain, 2023 date in title) | weak, stale | | | | |

Weak results in top 9: collegehunks, lancerspoint, ohhdeer, zeiss spam, sfddev.scotsman = **5 weak**. Gate 4 passes.

## Phase 2: gap

- Table stakes: classic face, scary faces, stencils, drilled patterns, stacked totem, painted/no-carve, seeds spilling out, LED tip.
- Gap: no page gives time, tools, skill AND lifespan per design; none groups by carving depth (cut-through / etched / sculpted); none checks the preservation claims it repeats (petroleum jelly, bottom-cut lasts longer); none sources candle vs LED or composting.
- Stale: lancerspoint 2014, sfddev 2023.
- Fan-out: easy ideas for beginners; how far ahead to carve; stencil transfer; etching vs carving; pie vs carving pumpkin; top vs bottom lid; bleach / petroleum jelly; candle safety; where to keep overnight; composting; sharing a photo.
- Angle: wins by being the only post that gives each of 26 designs an estimated lifespan and tests the bleach and petroleum-jelly folklore against extension pages and a 2012 hypochlorite study, saying what is unproven.

## Phase 3: sources (all fetched 2026-10-13)

| Source | What it supports | Subject test | Note |
|---|---|---|---|
| extension.sdstate.edu/pumpkin-carving-preservation (updated 15 Oct 2025) | carving exposes rind/pulp to pathogens; 10% bleach, petroleum jelly, electric light, 50–60°F, never below 32°F | pass | no shelf-life test on page |
| extension.usu.edu/planthealth/news/preserve-carved-pumpkins (Volesky, 26 Oct 2020) | same recommendation list | pass | no test |
| europepmc.org PMC3866743, Sun et al. 2012, Prev Nutr Food Sci 17(3) | 100 mg/L hypochlorite cut aerobic plate counts on fresh-cut zucchini by 2.29 log; storage 4/10°C | pass (fruit decay/storage) | peer-reviewed, OA, full text read; CC BY-NC so cited, not reproduced |
| extension.illinois.edu/pumpkins/choosing-pumpkin (undated) | pie pumpkins 4–8 lb, sweeter, less watery; ornamental for carving; keep 1–2 in of stem | pass | |
| nfpa.org Halloween page (data 2020–2024) | 835 decoration-started home fires/yr; 47% near heat source; ~33% candles; use glow sticks/battery candles | context (fails swap test) | the 1 generic statistic |
| epa.gov/recycle/composting-home (undated) | fruit/veg scraps are greens; 2–3 browns : 1 green; chop to speed breakdown; vermicompost 3–6 months | fails swap test | |

Searches tried for a new OA pumpkin-injury paper (findpapers): "pumpkin carving injury" (only Johnson 2022 AJEM and Marcus 2004, both used by b1/b2, plus a 2020 simulation editorial), "jack-o-lantern", "Halloween burn injuries costume candle". Decay route: "pumpkin Cucurbita postharvest storage rot" (Food Chem X 2024 and Postharvest Biol Technol 2023 are Elsevier, banned), "winter squash storage decay fungal", "fresh-cut produce sodium hypochlorite microbial decay" (picked Sun 2012).

Capcheck 2026-10-13: none of the six domains or PMC3866743 used elsewhere in b3.

## Claims checked against the prompt (BRIEF §0)

- Prompt framed bleach dip and petroleum jelly as folklore. Both are actually recommended by two university extensions; neither reports a test. Post says "recommended, unproven".
- "Bottom-cut lasts longer" (Saga carver): no extension test found; post says unproven, explains the stem logic from Illinois Extension.
- Lifespans per design are writer's estimates; no source measures them.
