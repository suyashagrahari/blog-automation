# Research brief — halloween decorations ideas (row 64)

- Slug: `halloween-decorations-ideas` · absorbs "halloween decor ideas", "halloween decorations ideas indoor"
- Head term (1 head + plural modifier, 10,000+/mo band): unwinnable on its own for this domain. Long-tail targets the page is shaped for: "halloween decorations ideas by room", "renter friendly halloween decorations", "halloween decorations ideas indoor living room", "cheap halloween decorations under 15 minutes".
- Siblings checked: Batch 1 `halloween-party-themes` (18 themes x 3 décor moves), `halloween-party-ideas` (budget décor + NFPA fire paragraph). Every décor move listed in both was excluded (dust sheets, coloured bulbs, cardboard/foam tombstones, fog at the gate, tinsel curtain, paper bats/ravens, projector on a sheet, cheesecloth, string lights, thrift frames, bin-bag curtains, etc.). Batch 2 `diy-halloween-decorations` (row 73) not yet written; this page carries no step-by-step builds. 6-gram overlap check against all 63 sibling files: only shared template-feature and facts phrasing, no shared idea lines.

## Phase 0 — first-party facts
No Halloween usage data in facts.md (BRIEF §3). Used, labelled as an analogue:
- Raksha Bandhan 2026 lead time: 49.4% built on the day, 27.0% the day before (justifies putting setup minutes on every idea).
- None of the 89 Raksha Bandhan pages built more than 7 days ahead.
- 48.3% of shared pages opened on a phone (in the /happy-halloween section).

## Phase 1 — SERP (WebSearch x1 for the SERP, US-served; Firecrawl disconnected)
Query `halloween decorations ideas`. 9 results; skewed UK despite US serving.

| # | Page | Fetched | Words / structure | Direct answer | Data cited | Format | Optimising for |
|---|---|---|---|---|---|---|---|
| 1 | dwh.co.uk/advice-and-inspiration/halloween-decoration-ideas | yes, **redirects** to "Pumpkin Afterlife" (Oct 2024) | ~700, 4 numbered tips | n/a, off-intent | "23% of UK households bin pumpkins" (no source) | list | housebuilder brand content |
| 2 | idealhome.co.uk (23 Halloween decorating ideas; 2 URLs in SERP) | yes | long, 23 image-led H2s + FAQ ("How do you stop Halloween decorations from looking tacky?") | intro: three camps (gothic, cosy, playful) | none; product credits (Hobbycraft etc.) | images, FAQ, affiliate | style inspiration + shopping |
| 3 | homedepot.com/c/ai/halloween-decoration-ideas | **403**, snippet only | AI-generated category page | snippet: flickering lights, tombstones, fog machine | none visible | retail | product sales |
| 4 | hellokids.com Halloween party decoration ideas | yes | ~250, one bullet list (2016 images) | first line | none | bullets | kids-party crafts |
| 5 | us.govee.com halloween-party-decoration-ideas-themes (9/10/2026, "2026" title) | yes | 15 party ideas + outdoor + DIY, conclusion → product grid | after intro | none | H3 list, products | smart-light sales |
| - | sonnet.ca (insurer, 7 ideas), partyworld.ie (shop blog), homedepot table centrepieces | not fetched | | | | | |

Weak by serps.md definition (marketplace / small blog / off-intent / stale): dwh (off-intent redirect), hellokids (2016 kids-party list), govee (party-lighting product blog), partyworld.ie (shop blog) = **4/9** (PLAN says 3). No hijacked-subdomain spam this time. Gate 4 not triggered.

serps.md has **no row** for this keyword; the "head term — big-media SERP" flag is in score-topics.mjs / keyword-inventory.csv only.

## Phase 2 — gap
- Table stakes: pumpkins, lighting, colour palette, cobwebs/spiders, outdoor yard props, table centrepiece.
- Gap: nobody groups by room/zone with cost, setup time and renter-safety on each idea; nobody covers rentals or kids' rooms explicitly; nobody has a sourced safety block (fire data, cord/GFCI rules, cobweb wildlife harm, pets, animatronics); nobody addresses single-use plastic. Hellokids actively recommends cobwebs in doorways and red/black bulbs; Govee and Home Depot sell the lights.
- Stale data: none of the five cites any dated figure.
- Fan-out sub-queries → H2/FAQ: indoor ideas; renter-friendly; by room (porch, windows, yard, living room, dining, kitchen, bathroom, kids); cost; real candles vs LED; outdoor extension cords; fake cobwebs and wildlife; pets and animatronics; environmental impact; someone far away.
- Angle: wins by being the only post among the top 5 that sorts ideas by room with scare level, cost, setup minutes and renter-safe verdict on every idea plus a sourced safety block, using SubhSandesh's festival lead-time data to justify setup-time-first.

## Phase 3 — sources (all fetched)
| Source | Verified claim | Date | Notes |
|---|---|---|---|
| NFPA Halloween page | 835 decoration-started home fires/yr 2020–2024; 3 deaths, 29 injuries, $18M/yr; 33% candles; battery candles/glow sticks recommended | undated | page is JS-rendered; verified from embedded content JSON. Also cited by Batch 1 party-ideas (different batch). |
| NFPA blog, Electrical safety tips for Halloween | GFCI for all outdoor electrical decorations; outdoor-rated extension cords; retire damaged cords; UL/Intertek listing | 2024-10-14 | ESFi 403 x2; ul.org no page |
| CBC News (MARS Wildlife Rescue Centre) | birds and squirrels tangled in fake webs; material hard for birds to see | 2021-10-26 | rescue source via mainstream news, per prompt request |
| ASPCA Halloween safety tips | lit pumpkins knocked over by pets; wires out of reach; separate room at peak trick-or-treating | undated | URL now at cap 2 in batch (with mine) |
| Silva, Prata, Zhang & Walker, Cambridge Prisms: Plastics | glitter, confetti, balloons, fake snow as microplastic sources; 100 balloons up to 33M microplastics (citing Luo et al.) | 2025-07-03 | CC BY 4.0, open peer review; publisher HTML read |
| Terán et al., Scientific Reports (PMC12827953) | 52 lamps; cool-white LED 12.3% vs warm-white 3.6% median MSV; tunable 10% at 5700 K → 0.1% at 2100 K | 2026-01-21 | abstract read via Europe PMC REST; CC BY-NC-ND (cited, not reused) |

Social-signalling paper: none open-access found. Searches: "holiday decorations home social signalling neighbours", "seasonal home decoration wellbeing", "festive lighting mood atmosphere", "Christmas decorations attachment place identity", "home decoration ritual festival display" (findpapers), plus Europe PMC queries on "holiday decorations", "Halloween AND decoration", "Christmas lights AND mood", colour temperature AND mood. Werner et al. 1989 excluded (Elsevier). Substituted the lamp colour-temperature paper as the ambience source.

Competitors read, never cited: dwh.co.uk, idealhome.co.uk, homedepot.com, hellokids.com, govee.com, sonnet.ca, partyworld.ie.
