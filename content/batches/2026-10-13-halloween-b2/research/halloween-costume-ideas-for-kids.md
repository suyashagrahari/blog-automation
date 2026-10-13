# Research brief: halloween costume ideas for kids (row 61)

- Slug: `halloween-costume-ideas-for-kids` (Strapi slug check 2026-10-13: free)
- Absorbs: "halloween costumes kids"
- Plan band: 10,000+/mo, plan weak count 4 (Google, from PLAN.json)
- Category: `festive-beats`. Templates: `/happy-halloween` (Kids tone), `/happy-halloween-premium` (grandparent voice note)

## Phase 0: first-party data

No Halloween data exists (BRIEF §3). Used, verbatim from `content/facts.md`:
- Raksha Bandhan 2026 lead time (49.4% built on the day itself), labelled in the body as the nearest measured festival analogue, to support "expect a late decision".
- 48.3% of shared pages opened on a phone, used for the costume-photo tip.
- 90.9% of started pages published, labelled "platform-wide (not Halloween data)".

All three are weakly relevant to a costume query. The post's original material is the age-by-temperament framework and its ratings, not the data.

## Phase 1: SERP

Firecrawl MCP was disconnected, so I used WebSearch (US-served index, not Google's ranking). I used 2 of the 2 allowed searches.

Search 1, "halloween costume ideas for kids": toddle.com.au, mansfieldtx.macaronikid.com, rhealana.com (x2), beyond-memories.com, quantaservices subdomain (spam), mothermag.com, zoho wiki (spam), old.langmai.org (spam). **Weak count in the top 9 is about 8**: 3 hijacked-subdomain spam pages, small blogs, a shop blog and a stale 2023 article. The index probably differs from Google, where the plan measured 4 weak. Gate 4 passes.

| Page | Status | Words | Structure | Direct answer | Data / dates | Format | Optimising for |
|---|---|---|---|---|---|---|---|
| toddle.com.au corkboard | 404, judged from snippet | n/a | snippet: witch, ghost "more Casper than creepy" | n/a | none | n/a | AU childcare brand content |
| macaronikid (Mansfield TX) | 403, judged from snippet | n/a | "top 5 unique" | n/a | none | n/a | local parent newsletter |
| rhealana.com "sweet not spooky" | 403, judged from snippet | n/a | storybook, animals | n/a | none | n/a | lifestyle blog affiliate |
| beyond-memories.com | 200 | ~2,200 | 5 H2 themes (classic twist, comfy animals, food, storybook, pop culture) with 2 H3 ideas each | no; intro first | none; 2025–26 dates | list, product plug (crystals) | shop blog SEO |
| mothermag.com (2023 URL) | 200 | ~660 visible | 75+ product cards; includes 2 "adaptive" products and light-up costumes | no | none; 2024 mentions | shopping roundup | affiliate commerce |

Search 2, the gap probe "kids halloween costumes by age sensory friendly wheelchair warm trick or treat", returned perkins.org, romper, careoptionsforkids, mother.ly, braunability, Target adaptive news and shieldhealthcare. They cover sensory and wheelchair costumes as separate pages. **None sorts by age**, and none combines age with temperament.

Corroboration: `serps.md` has no row for this exact keyword. The sibling "easy last minute halloween costumes" row (5 weak) shows buzzfeed, GH, realsimple, today and savvymom on Google.

## Phase 2: gap

- **Table stakes:** classic characters, animals, storybook and pop culture, DIY or easy options, and light-up visibility.
- **The gap:** no page picks costumes by age band and temperament together. None rates each idea for warmth, walkability, bathroom ease and cost, and none treats bathroom access, which matters for toddlers who are potty-training.
- **Stale or absent data:** the ranking pages cite no safety source and no research.
- **Fan-out sub-queries:** costume by age (baby, toddler, preschool, 6–8, tween), sensory-friendly or adaptive costumes, wheelchair costumes, keeping kids warm, masks versus face paint, flame-resistant labels, costume length, the age kids can trick-or-treat alone, and cost.
- **Angle:** "Wins by being the only post that sorts kids' costumes by age band AND temperament, rating every idea for warmth, walkability, bathroom ease and estimated cost, with a 2026 costume-pretense null result none of the top pages mention."

## Phase 3: sources (all fetched)

| Source | Claim used | Read |
|---|---|---|
| kidshealth.org/en/parents/halloween.html (Nemours, reviewed Oct 2022) | reflective tape, "flame-retardant" label, nylon/polyester for DIY, face paint not masks, no oversized shoes | full page |
| safekids.org/tip/halloween-safety-tips (undated) | adults join kids under 12; reflective tape, face paint, glow sticks, right size to prevent trips; 5:30–9:30 p.m. popular hours | full page |
| europepmc PMC5972374, Ben-Sasson 2009 J Abnorm Child Psychol | n=925 aged 7–11; 16% of parents report at least 4 tactile/auditory sensations bother the child | **abstract only** (full text 500) |
| europepmc PMC13603221, Yin, Wu & Gai 2026 Behav Sci (MDPI, CC BY) | 131 first-graders, costumes + real props vs puppets; no significant EF effects after correction | full text |
| europepmc PMC10952659, Francis & Gibson 2023 Br J Psychol (Wiley, CC BY) | 189 children M=4.8; EF unique variance in pretend play β=.21 | abstract + full text |

Rejected or unavailable:
- healthychildren.org AAP: dropped because the URL is at its 2-post cap (diy and family costumes).
- cpsc.gov safety guide: 404, and the release pages are bot-stubbed.
- cdc.gov/family/halloween and 3 other CDC paths: all 404.
- nfpa.org: empty render.
- Frontiers papers (PMC10766374 and others): avoided as a known trap.
- Batman-effect paper (Child Dev 2017): no open-access copy.
- BMJ Paediatrics Open carrier review: avoided per coordinator.

findpapers queries tried: "pretend play children development costume", "dress-up play", "superhero costume children perseverance", "sensory over-responsivity prevalence children clothing" and "children fear of masks faces", plus Europe PMC REST title queries. No study of children's fear of Halloween masks was found, so the mask-scared section makes no research claim.

## Notes for remediation

- Body is 1,795 words, close to the cap. The 31 ideas each carry a 4-part rating ("warmth / walk / bathroom / est. cost").
- Est. costs are the writer's US-dollar estimates, labelled in the body.
- KidsHealth says a flame-retardant label "means the material won't burn". The body deliberately does not repeat this and says lower risk, not zero.
