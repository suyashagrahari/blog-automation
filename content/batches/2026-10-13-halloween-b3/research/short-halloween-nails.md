# Research brief: short halloween nails (row 146; absorbs "halloween nails short")

Batch `2026-10-13-halloween-b3` · slug `short-halloween-nails` (Strapi slug check 2026-10-13: free) · theme beauty · category `festive-beats` · weak 3/10 (contested) · band 3,000–10,000/mo.

## Phase 0: first-party data
- facts.md read by hand (no `npm run facts`, per BRIEF §3). It has no Halloween, nail or manicure data.
- Used byte-verbatim (2026-09-24 vintage): 48.3% phone-open share and 11.1 average views per page, both in the first 150 words and labelled platform-wide, not nail data; 38.5% password-protect rate, next to the /happy-halloween link.
- Template features come only from `template-spec.md`: up to six photos behind fog, the 1080×1920 Boo License with the chosen costume, partner/bestie/family/kids modes, the kids tone with round blushing ghosts, English UI, one-person page. For premium: 60-second voice note and 12 photos.

## Phase 1: SERP
- **Searches used: 2 of 2.** (1) `WebSearch` "short halloween nails" (US index) returned 9 results. (2) DuckDuckGo html for "simple halloween nails" (lower confidence), used only to measure overlap with the b2 sibling.
- **Top 9 for "short halloween nails" (WebSearch, US):** static.intrafocus.com ×2, farm.forefrontweb.com ×2, meredith-poc-preview.evolphin.com (a staging copy of a Meredith page, timed out), try.gocheetah.com, netbox.point-broadband.com, oldstore.motogp.com, and aol.com (InStyle syndication, 15 Oct 2025).
- **Weak in the top 10: 8 of 9** (hijacked subdomains, all snippet-only). Only aol.com is a real page. Gate 4 passes. The PLAN score of "weak 3" understates how weak the US index is today.

| Page | Words / structure | Direct answer | Data (date) | Format | Optimising for |
|---|---|---|---|---|---|
| aol.com/InStyle "20 Short Halloween Nails Ideas" (Norris & Brown, 15 Oct 2025) | ~1,700; 20 numbered image items, a "Meet Our Expert" block naming 5 nail artists | Intro only: "chrome and cateye finishes… stun on any length" | None; quotes from manicurists | Image gallery, no table, no FAQ, no times, no tools list per item, no shape grouping; #08 is a stiletto nail ("this photo might not show short nails") | Image browsing, expert-quote E-E-A-T |
| intrafocus / forefrontweb / gocheetah / point-broadband / motogp | Snippet only (spam) | — | — | Auto-generated listicles ("7+ Spooky Black Short Halloween Nails") | Keyword-stuffed titles |
| evolphin staging | Timed out | — | — | — | Not analysable |

## Measured SERP overlap with the b2 nail siblings
- **vs "simple halloween nails" (DDG, measured today, 10 results):** melissajanelee, kbeautyaddiction, glamnaildesigns, girlsharestips, chicnstylish, nailsandstyle, pinterest, realbeautyschool, cosmopolitan, nailtheglam. **Shared top-10 URLs: 0 of 10; shared domains: 0.** Caveat: different engines (DDG vs WebSearch).
- **vs b2 simple-halloween-nails' own WebSearch query** "easy halloween nail designs for beginners short nails tutorial": shared domains 3 (farm.forefrontweb.com, static.intrafocus.com, meredith-poc-preview.evolphin.com). These are spam hosts that rotate keyword pages, so they do not show shared intent.
- **vs "halloween nails" (b2 WebSearch record, domains only):** shared domains 2 (farm.forefrontweb.com, oldstore.motogp.com), both spam. 0 shared real pages (today.com, whowhatwear, GMA and booksy do not appear for "short").
- Conclusion: intent is distinct enough for a third page. This page is built around the short-nail constraint (rules, bitten-nail verdicts, work and biter groups), not a general design or beginner-tool list.

## Phase 2: gap
- **Table stakes:** dark colours, chrome and cat-eye, spooky French, small ghosts, bats and webs.
- **Gap:** the only real page (InStyle) has no short-nail *rules*, no grouping by shape, no time, tools, DIY/salon or bitten-nail verdict per design, and it includes a stiletto photo. No page covers people who *must* keep nails short (healthcare and food workers), nail-biters growing out, kids, or hangnail and cuticle care.
- **Fan-outs:** what reads on short nails; bitten nails; vertical vs horizontal; nurses and polish; food workers and polish; kids; time; cuticles; press-ons for biters; how common biting is.
- **Angle:** see `batchMeta.angle`.

## Phase 3: sources (all fetched; full text read)
| # | Source | Used for | Date | Licence / notes |
|---|---|---|---|---|
| 1 | europepmc PMC12719362, Mohammad, Hammad & Elghazally, *Discover Mental Health* (Springer Nature) | 330 Tanta medical students; 57.3% currently bite their nails; linked to smoking, family history and agoraphobia; no PSS difference | 2025-12-21 | CC BY 4.0 |
| 2 | europepmc PMC12256720, Güldiken Doğruel et al., *Int J Dermatol* (Wiley) | 675 SIND patients; mean onset 16.6 y; 64.4% onychophagia group; 19.1% sought treatment; cuticle pushing and cutting = excessive manicuring; barrier methods incl. artificial nails for several weeks; moisturise cuticles; biting increases in adolescence | 2025-04-10 | CC BY-NC-ND, so it is cited and linked only, nothing reproduced. This is the "dermatology source not used in b2" |
| 3 | europepmc PMC11465089, Kramer et al., S2k guideline, *GMS Hyg Infect Control* | Recs 59–61: nails short and rounded at the fingertips; no synthetic or gel nails; no polish except medical; >95% consensus; colonisation rises with wearing time | 2024-09-06 | CC BY 4.0 |
| 4 | fda.gov/media/164194/download, FDA Food Code 2022 §2-302.11 | Trimmed, filed, cleanable nails; no polish or artificial nails with exposed food unless intact gloves are worn | Jan 18, 2023 version | US government. **fda.gov is now 3/3 in b3 (FULL)** |
| 5 | dermnetnz.org/topics/paronychia (Oakley 1997, updated Aug 2017) | Breaks between cuticle and plate (biting, picking, manicuring, artificial nails) raise paronychia risk; wet-hands jobs; emollients; acute cases clear in days | 1997 / 2017-08 | Different DermNet page from b2's easy-halloween-costumes (contact dermatitis) |

- **CDC hand-hygiene pages returned HTTP 403** (clinical-safety, infection-control, MMWR rr5116a1). Per BRIEF they were skipped, not worked around. The S2k guideline stands in as the infection-control source, and the FDA Food Code covers food workers.
- Avoided: every b2 nail-post paper (cosmoderma Bansal & Grover, PMC12663605, PMC13294297, aad.org, PMC11753538, PMC12539760, PMC12847775, osha.gov, and the 6 caption papers). Annals of Medicine 2022 nail-disorders review (PMC8896184) rejected because it is Taylor & Francis. Frontiers candidates rejected.
- findpapers queries: "onychophagia nail biting prevalence"; "healthcare workers fingernails nail polish artificial nails bacteria".
- Wikipedia: 0 body links. Entities verified via the Wikipedia API on 2026-10-13: Nail art Q3335182 (about); Halloween Q251868, Nail biting Q1367423 (redirect from Onychophagia), Paronychia Q3896379, Nail polish Q223807.

## Overlap checks
- 5-word n-gram check of body plus FAQs against every b1, b2 and b3 blog file (excluding this one): **0 shared 5-grams** after rewrites. Template and facts sentences were reworded so they do not match the boilerplate shared batch-wide.
- No b2 design names reused (b2 simple: matte midnight, pumpkin stem, ghost faces, toothpick web, etc.; b2 hub: style groups).

## Structural limitations and brief claims checked
- The prompt's "fda.gov has 1 slot left" was true at start (capcheck: 2 posts). It is now **3/3, FULL**.
- PLAN "weak 3" vs measured 8 of 9 weak in the US WebSearch index today.
- Design minutes are our own first-attempt estimates, not timed trials, and are labelled as such in the body.
- No first-party table column (no nail or Halloween data in facts.md).

## Verifier and capcheck (2026-10-13)
- `verify-batch.mjs`: short-halloween-nails 1,795 words, 11 FAQs, 48/2. The only batch problem is "batch.json blogs != files on disk", which is orchestrator-owned and was not edited.
- `capcheck.mjs`: no banned URLs; fda.gov at cap 3 (this post is the third); no paper over cap.
