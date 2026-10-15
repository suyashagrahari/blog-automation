# Research brief — halloween-decorations-for-apartments (row 316)

Keyword: "halloween decorations for apartments" (absorbs "small space halloween decor"). Lane (BRIEF §9b): apartment/small-space — renter rules, no-damage. In-batch neighbours: 315 bedroom decor, 318 table decor.

## Phase 0 — first-party data
No Halloween usage data exists (BRIEF §3). Platform-wide lines used, each tied to the "decor has to travel by phone / greeting page" argument: 48.3% phone opens and 11.1 views per page (both in the first 150 words), 38.5% password rate, 90.9% publish rate. Template spec used for feature descriptions only.

## Phase 1 — SERP (WebSearch, US index; 2 searches used in total, 1 for the SERP)
Query: `halloween decorations for apartments`. Results: costco.com/opt (category page), tractorsupply.com/a (category page), bfa-collective.beehiiv.com (Amazon-affiliate roundup), static.intrafocus.com/?p=44738 and ?p=51486 (hijacked-subdomain spam), bcliving.ca/?p=113097, netbox.point-broadband.com x2 (hijacked-subdomain spam), hazelviewproperties.com (property-manager blog).

| Page | Words / structure | Direct answer | Data cited | Format | Optimising for |
|---|---|---|---|---|---|
| costco.com category | product grid of 7 + 6-question FAQ | FAQ: "window clings, door wreaths, string lights, tabletop figurines, removable wall decals" | none | grid, FAQ | product sales |
| tractorsupply.com | fetch returned only the title — judged from SERP snippet | — | — | — | product sales |
| bfa-collective.beehiiv.com (28 May 2025) | ~1,500, product table + H2 sections, AI-generated images | product table first | none; Amazon links | affiliate table | affiliate sales |
| bcliving.ca (Karisa Cheng, 29 Oct 2025) | ~700, 5 numbered H3 tips (mini pumpkins, balcony cobweb on thumbtack hooks, smart-bulb lighting, ...) | intro, then list | none | photos | style inspiration |
| hazelviewproperties.com | HTTP 403 — snippet only (homemade cheesecloth/twine ghost garland) | — | — | — | tenant engagement |

Weak in top 10: 4 hijacked-subdomain spam + 1 thin affiliate post (PLAN says 4). Gate 4 not triggered.
Cannibalisation: 0 shared URLs with b4 `halloween-porch-decorations` (shared domains only: tractorsupply, beehiiv, intrafocus — different URLs). b2 `halloween-decorations-ideas` and `diy-halloween-decorations` recorded entirely different SERPs. Below the 4-URL threshold.
Competitors read, never cited or linked: all of the above.

## Phase 2 — gap
- Table stakes: compact decor, renter-safe hanging, lighting, balcony, vertical space.
- Gap: no page names a deposit rule, defines wear vs damage, or mentions corridor fire policy; "renter-safe" is asserted, never tested. Nobody addresses self-closing fire doors or wiring into corridors. Nobody gives undo times.
- Fan-out: what counts as damage / will I lose my deposit; can I decorate my hallway / door; how to hang without nails; balcony rules; studio layout; do I need permission.
- Angle (batchMeta.angle): the only page that grades no-hole methods against a state wear-and-tear table, UK deposit protection and the GOV.UK "zero tolerance" corridor policy.

Sibling ideas avoided (b2 ideas, b2 DIY, b4 porch): over-door wreath hanger, decor tray, clipped balcony crows, paper lantern shade, static clings, painter's tape, peephole eye, doorknob pouch, door hanger, door-frame micro lights, riddle card, cheesecloth ghosts, fake-web/bird FAQ, take-down timing (b5).

## Phase 3 — sources (all fetched; capcheck clean before choosing)
| # | Source | What it says (used) | Date | Read |
|---|---|---|---|---|
| 1 | idaholegalaid.org PDF — Idaho AG wear-and-tear table, Idaho Code 6-321 | nail/pin holes, small cracks = normal wear; gaping holes, unapproved paint colour = damage; dated move-in/out photos | undated | full |
| 2 | gov.uk/tenancy-deposit-protection | scheme within 30 days; returned within 10 days of agreement; protected during dispute; APTs replaced ASTs 1 May 2026 | undated, read 2026-10-14 | full |
| 3 | europepmc PMC9347395 — Brown et al. 2022, J Community Psychology (Wiley, CC BY) | 58 interviews (50 residents, 8 professionals); tenants afraid to ask landlords for rent flexibility for fear of losing tenancy | 2022-05-24 | full text |
| 4 | assets.publishing.service.gov.uk — Home Office "Fire safety in purpose-built blocks of flats" | 44.10 unrestricted use of common parts "clearly not acceptable"; zero tolerance (default) vs managed use (door mats, pot plants, framed pictures); zero tolerance always where escape stair combustible / no stay-put; front doors fire-resisting and self-closing; stop residents wiring decorative lights into common parts; 44.5 barbecues on access decks and escape balconies | 2011-07-31 (guide says no longer comprehensive) | full (pdftotext) |

Rejected / unavailable: leginfo.legislature.ca.gov Civ. Code 1950.5 (403), ag.ny.gov tenants' rights (404), vtcourts.gov decision (403), J Environ Psychol apartment-lockdown paper (Elsevier, banned), IJERPH renting paper (MDPI, last slot — avoided). Generic safety sources (CPSC/NFPA/CDC) avoided per swap-test lesson. No Wikipedia links.

Brief claims checked: none found false. Note: GOV.UK states assured shorthold tenancies were replaced by assured periodic tenancies on 1 May 2026.
