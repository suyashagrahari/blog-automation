# Research brief: halloween nails (row 72; absorbs "halloween nail ideas", "halloween nails designs")

Batch `2026-10-13-halloween-b2` · slug `halloween-nails` · theme beauty · category `festive-beats`

## Phase 0: first-party data
- facts.md was read by hand (no `npm run facts`, per BRIEF §3). It holds no Halloween, nail or salon data.
- Used (verbatim, 2026-09-24 vintage): 48.3% phone-open share and 11.1 average views per page, both in the first 150 words and both framed as platform-wide rather than nail data. Also 90.9% publish rate beside the /happy-halloween link.
- Template features come only from `template-spec.md`: up to six photos, the carved word, the 1080×1920 Boo License, and for premium a 60-second voice note and 12 photos.

## Phase 1: SERP
- **1 WebSearch call** ("halloween nails", US index). The tool ran 2 internal queries. Firecrawl was disconnected. UK, AU and IN SERPs were not measured.
- **Weak results in the top 10: about 8.** These were hijacked-subdomain spam: community.realventures.com, testaction.babson.edu, do34.pixelkicks.co.uk, vrafortoday.org, do.isev.co.uk, farm.forefrontweb.com, oldstore.motogp.com and bivashvlog.com. Gate 4 passes.
- Corroboration: serps.md line 30, "(WS) halloween nail ideas 2026", lists 4 weak results with whowhatwear, GMA, theeverygirl, distractify and booksy.

| Page | Words | Structure | Direct answer | Data and dates | Format | Optimising for |
|---|---|---|---|---|---|---|
| today.com "55 Halloween nail ideas" | ~2,400 | 1 H1, 40+ H2s, one per design | none, starts straight into images | none; published 2022-08-17, modified 2024-09-24 (stale) | image gallery, no table, no FAQ | image browsing |
| whowhatwear.com "17 Elegant Halloween Nail Art Ideas" | ~1,600 | 17 numbered H2s and a shop block | intro calls burgundy a Halloween-to-November shade | 2026-09-23; Instagram credits only | images and affiliate shop, no table | trend inspiration plus commerce |
| goodmorningamerica.com "14 hot Halloween nail art ideas" | ~650 | embedded Instagram posts | none | 2024-10-09 | embeds, no table | inspiration |
| biz.booksy.com "Halloween Nails: 2026 Trends" | ~1,200 | trend H3s, pedicure, "promote your services" | none | published 2024, modified 2026-08-14 | B2B blog for salon owners | salon-software marketing |
| theeverygirl.com | n/a | 403 (snippet only) | n/a | n/a | n/a | n/a |

## Phase 2: gap
- **Table stakes:** a large gallery of ghosts, pumpkins, webs, blood red, burgundy, chrome and cat-eye designs.
- **The gap:** none of the five gives difficulty, a DIY-or-salon verdict, salon time, price or best nail shape per design. None has a comparison table or an FAQ. None tells the reader what to say at the salon, compares gel with polish and press-ons, or covers hygiene.
- **Stale:** today.com dates from 2022/2024 and GMA from 2024.
- **Fan-outs:** how much Halloween nails cost; how long the appointment takes; designs for short nails; gel vs press-on; how to remove gel; chrome vs cat-eye; glow nails at a salon; whether a salon is clean; whether acrylic is safe (MMA); when to book.
- **Angle:** this page wins by being the only one that gives every design a difficulty score, a DIY/salon verdict, an estimated salon time and price, and a best shape. It adds a nail-tech script and sourced gel, press-on and hygiene checks, framed by the 48.3% phone-open share.

## Phase 3: sources (all fetched, full text read)

| Source | Claim used | Date | Licence |
|---|---|---|---|
| europepmc PMC11753538, Bansal, Nanda, Bansal, Grover, *Indian Dermatology Online Journal* | LED cures in 30–60 s vs 2–4 min for UV; gel removal under occlusion for 5–7 min in a ventilated room; active paronychia or onychomycosis is an absolute contraindication | 2024-12-11 | CC BY-NC-SA (cited, not reproduced) |
| europepmc PMC12539760, Javaid et al., *J Cosmet Dermatol* systematic review | 48 articles; gel outcomes (ACD, onycholysis, paronychia); risk factors UV, at-home manicures, acrylates; 15 cyanoacrylate glue burns, 13 in children; glue reacts with cotton | 2025-10-01 | CC BY (Wiley) |
| europepmc PMC12847775, Salari et al., *Scientific Reports* | over 65% VOC reduction at 10 air changes per hour; even 100 ACH did not reach limit levels | 2026-01-03 | CC BY |
| osha.gov OSHA 3542 (2025 revision) PDF | ventilation is the best control; open doors and windows, exhaust on; disinfect tools for 10–30 min in EPA-registered disinfectant; UV boxes do not disinfect; foot basins after each client | 2025 | US government |
| osha.gov/nail-salons/chemical-hazards | MMA is banned for use in many states and is linked to asthma and loss of smell | no date | US government |

- **Avoided:** all 6 halloween-nail-captions papers, and simple-halloween-nails' cosmoderma.org, PMC12663605, PMC13294297 and aad.org. Also avoided Taylor & Francis, Sage, Frontiers and arXiv.
- **Same authors as simple's source:** PMC11753538 shares authors (Bansal, Grover) with simple's cosmoderma paper, but it is a different paper in a different journal.
- **IDOJ journal count:** the captions post cites a different IDOJ paper, so IDOJ now appears in 2 posts.
- **Capcheck after writing:** clean, with 0 banned URLs. osha.gov is new to the batch.
- **Search terms tried (findpapers):** gel polish nail plate thinning onychoschizia; nail salon technicians air quality ventilation VOC; artificial nails acrylic press-on adverse effects review; nail salon infection pedicure sterilization; artificial fingernails cyanoacrylate glue press-on.
- **No source found for prices or times:** no open, dated salon-price survey turned up, so every time and price band is labelled "est." as our own estimate for a mid-range US salon.

## Overlap checks
- **simple-halloween-nails:** its 16 designs were read after it landed. Six of my designs that echoed them were replaced: jack-o'-lantern alternating, matte black plus glitter accent, pumpkin dot, crescent moons, black-cat ears and the domed eyeball. A 5-word shingle check now finds 0 overlaps.
- **halloween-nail-captions:** the only overlaps are boilerplate (journal name, Boo License spec, "what is the difference between").
- **All siblings in both batches:** the only shared strings are facts.md lines and template-spec phrasing, which are shared batch-wide.

## Remediation (2026-10-13)
- Comparison table cut from 7 to 5 rows: French-tip twists merged into classic, glow into spooky-cute; 3D kept alone so the salon-only contrast survives. Added an est. salon-time column; ranges recomputed from the H3 lines. Per-design data unchanged in the H3s.
- Still open: first-party table column (no Halloween/nail data in facts.md; needs a /happy-halloween probe after 31 Oct) and swap test (sources are general nail-safety work).
- Body 1,770 → 1,787 words (plain split); verifier and capcheck clean.
