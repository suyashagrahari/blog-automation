# Research brief: halloween ideas for babies (rank 283; absorbs "babys first halloween ideas")

Slug `halloween-ideas-for-babies` (Strapi check 2026-10-14: total 0, free). Category `festive-beats`. Theme: kids.

## Phase 0: first-party data
No Halloween or baby-segment usage data in facts.md (BRIEF §3). Cited platform-wide lines, verbatim, measured 2026-09-24: 48.3% phone opens (27,725 of 57,456); 90.9% published (4,724 of 5,199); 11.1 views per page; 38.5% password-protect. The first two sit in the first 150 words; all four relate to the grandparents-far-away use case. The table has no first-party column (audit failure, structural).

## Phase 1: SERP. 1 WebSearch (US index), 0 Firecrawl
| # | URL | Words | Structure | Data cited | Notes |
|---|---|---|---|---|---|
| 1 | mumandyou.com/blogs/blog/halloween-ideas-for-babies-and-toddlers | ~600 prose (1,419 incl. chrome) | H1 only, no H2s | none | UK baby retailer; sensory bags, pumpkin patch |
| 2–3 | halloween.com/halloween-ideas-for-infants-babies.html (?ht / ?t doorway variants) | 2,540 incl. chrome | 60+ product H2s | none | costume shop listing; weak |
| 4–5 | cradlewise.com/blog/halloween-costume-ideas-babies-parents (+ en-AU dup) | ~1,800 | 15 numbered costume concepts + short safety check | none | baby-product retailer; costumes only |
| 6–8 | twinkl.com blog (older babies 1–2) + twinkl.co.za mirror + twinkl resource page | 2 words served (JS) | n/a | n/a | judged from snippet: handprint ghosts, footprint pumpkins, taste-safe paint, coloured porridge |
| 9 | babymori.com/blogs/baby-stories/babys-first-halloween-ideas | ~300 body | 4 numbered ideas, no H2s | none | UK retailer; **recommends sitting a baby inside a hollowed pumpkin** |

Weak count: 9 of 9 (all retailers, doorways or mirrors). Direct answer in first paragraph: none. No page has a table, an FAQ, a cited source, a date, or anything on candy, safe sleep, car seats, or the clock change.

Sibling overlap (cannibalisation check): halloween-ideas-for-toddlers (b3) shares at most 3 (mumandyou, halloween.com doorway, twinkl); baby-halloween-costume-ideas (b3) shares cradlewise x2. Under 4; no sub-intent switch needed, but costumes were cut to one line because b3 owns them.

## Phase 2: gap and angle
Table stakes: pumpkin photo, pumpkin patch/outing, handprint/footprint craft, sensory play, a costume mention.
Gap: no page splits ideas by month of age 0–12; no page states the AAP under-4 candy rule, the move-a-sleeping-baby-to-a-flat-surface rule, car-seat bulk, or stroller visibility; one ranking page recommends the unsafe pumpkin-seat photo; nobody notices that the US fall-back is the night after Halloween 2026 and the UK fall-back is Halloween 2027.
Fan-out: what counts as a first Halloween / photo ideas by age / keepsakes / sensory play under 12 months / candy and choking / costume and sleep / car seat / night outings and bedtime / clock change / sending to grandparents / when to skip.

Angle: wins by being the only post that plans a baby's first Halloween by month of age with safe-positioning photos, sourced AAP candy and safe-sleep rules, the Mindell bedtime-routine trial, and statutory clock-change dates, framed by the 48.3% phone-open share for grandparents far away.

Sibling idea separation: no costumes beyond one line (b3 baby-costume, couple-costumes, b5 toddler costume); no captions (b3); no announcement (b5); no toddler sensory bins/crafts (b3/b4: spaghetti, squish-bag, yogurt paint, crinkle ghost, scarf ghost, hay-bale portrait all avoided); grandparents section built on premium unlock time + baby babble voice note rather than costume photo.

## Phase 3: sources (all fetched and read)
1. Mindell, Telofski, Wiegand & Kurtz, *Sleep* 2009, europepmc PMC2675894 (full text read on pmc.ncbi.nlm.nih.gov): 405 mothers, 206 infants 7–18 months; bath + massage + quiet activities, lights out within 30 min of bath; faster sleep onset, fewer/shorter night wakings, P < 0.001; maternal mood improved. 3 of 4 authors J&J (disclosed in body). Journal *Sleep* (OUP/APSS): not banned, not a megajournal.
2. AAP HealthyChildren, Choking Prevention (last updated 2026-02-27): hard/gooey/sticky candy and gum kept from children until 4+; two-thirds of child choking deaths are under 1; balloons, balls, toy pieces lead.
3. AAP HealthyChildren, A Parent's Guide to Safe Sleep (Moon; last updated 2026-09-11): ~3,500 US sleep deaths/yr; move baby asleep in car seat/stroller/carrier/sling to firm flat surface asap; fitted sheet only; no hat indoors; one layer more than adult.
4. ACMI materials-safety: AP Seal = toxicologist-reviewed, non-injurious when used as intended, for children sixth grade or younger.
5. 15 U.S.C. 260a (GovInfo, 2023 ed.): DST ends 2 a.m. first Sunday of November → 1 Nov 2026, 7 Nov 2027 (computed).
6. Summer Time Order 2002 art. 2 (legislation.gov.uk): summer time ends 01:00 GMT last Sunday in October → 25 Oct 2026, 31 Oct 2027 (computed).

Search terms (findpapers): "bedtime routine infant sleep"; "daylight saving time transition infant child sleep" (nothing open-access and infant-specific; Crossref hits were conference abstracts or Elsevier); "infant hand-to-mouth mouthing frequency" (only open hit was Frontiers in Public Health 2026, banned publisher).
Not used: timeanddate.com (403 bot wall, not worked around); gov.uk clocks page (gov.uk at cap 3); healthychildren Halloween-safety news URL (404).

## Corrections / notes for the orchestrator
- Task prompt asked for "PLOS ONE/MDPI FULL" research; per BRIEF §10 both are already FULL in this batch, so neither was used. The scholarly source is *Sleep* 2009.
- The safe-sleep guidance is AAP, not NICHD (b3 couple-costumes used NICHD in another batch).
- capcheck: healthychildren.org 1 post (two URLs, this post only), acmiart.org 1, govinfo.gov 1, legislation.gov.uk now 2 posts (with halloween-bucket-list, ONE left), europepmc exempt.
- verify-batch: my row clean (1777 words, 10 FAQs, audit 47/3). The only batch problem is batch.json's blogs list lagging the disk (orchestrator-owned; not edited).
