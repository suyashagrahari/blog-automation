# Research brief: diwali decoration ideas

Row 20 · slug `diwali-decoration-ideas` · secondaries: diwali decoration ideas for home / for office / for school · siblings: diwali-rangoli-designs, diwali-party-ideas · phenomenon: fire and electrical safety with diyas and fairy lights.

## Phase 0: first-party data

There is no Diwali or decoration data. The post uses:
- Raksha Bandhan 2026 lead time (n = 89): 49.4% of pages built on the day. The body labels it as the nearest festival analogue.
- 86.1% of the 79 on-time Raksha Bandhan pages were built within 24 hours of the festival.
- 48.3% of pages are opened on a phone (platform-wide, 2026-09-24).

The template spec (/happy-diwali features) is product fact and is not counted toward the three facts. The gate passes on count. The relevance is indirect: the facts support "plan for one evening", not anything about decoration itself.

## Phase 1: SERP (Firecrawl, India, 2026-10-22, 1 search)

| # | URL | Type | Words | Structure | Prices / time | Safety | Office / school |
|---|---|---|---|---|---|---|---|
| 1 | meesho.com/diwali-decorations | shop listing | — | product grid | product prices | none | no |
| 2 | pinterest.com/nayanad | board | — | pins | — | — | — |
| 3 | youtube.com (10 DIY ideas 2025) | video | — | — | — | — | — |
| 4 | centuryply.com blog | furniture brand | ~2,000 | 22 H3 ideas + FAQ | none | none | no |
| 5 | youtube.com (17 Oct 2025) | video | — | — | — | — | — |
| 6 | woodenstreet.com blog (3 Oct 2026) | furniture brand | ~3,300 | 7 H2 sections by room | none | none | 2 passing "office" mentions |
| 7 | pinterest.com | board | — | — | — | — | — |
| 8 | livspace.com magazine | interiors brand | ~4,400 | room-wise H2s, 21 H3 ideas, "Safety tips" H2, FAQ | none | generic, no source | no |
| 9 | magicbricks.com blog | real estate | ~4,800 | 25 H2 ideas, Vastu, dos and don'ts | ₹ appears twice | one diya-wick line | no |
| 10 | enhanceyourpalate.com | personal blog | ~3,400 | narrative, room by room | none | none | 1 passing mention |

The top five editorial pages (4, 6, 8, 9, 10) were fetched in full with ctx_execute. In each, the direct answer is buried under an intro or a list title. All are written in third person. None cites a dated statistic.

Weak results: 5 of the top 10 have no editorial text (shop, Pinterest, YouTube). Every result is a competitor and none is cited.

## Phase 2: gap

- **Table stakes:** diyas, string lights, marigold toran and flowers, urli, puja corner, balcony, and room-by-room grouping.
- **Gap:** no page covers office desks or school classrooms. None gives a setup time or a ₹ estimate per idea. None cites an official safety source (BIS, a fire service). None says what to do in an electrical fire, which needs no water, unlike a diya fire.
- **Stale data:** none cited at all.
- **Fan-out queries:**
  - home ideas by space
  - office ideas
  - school ideas
  - when to decorate in 2027
  - time and cost
  - are fairy lights safe / BIS marking
  - how many lights per socket
  - water on an electrical fire
  - diyas overnight
  - burn first aid
  - small balcony
- **Angle:** wins by being the only post in the measured top 10 that covers office and classroom as well as home, puts a time and a dated ₹ estimate on each idea, and grounds safety in BIS IS 10322 (Part 5/Sec 7) and three state fire services, using SubhSandesh's Raksha Bandhan 2026 lead-time data.

## Phase 3: sources (all fetched 2026-10-22)

1. **BIS note, IS 10322 (Part 5/Sec 7) lighting chains**: services.bis.gov.in/tmp/tbl5_2024-11-11-04-57_113.pdf. The PDF was read in full.
   - Festival lights are lighting chains.
   - Chains must not electrify tinsel.
   - The controller must sit in a non-flammable enclosure.
   - Rated voltage and wattage must be marked.
   - MeitY's 2021 CRS order mandates BIS registration.

   The PDF prints no date. Domain count: services.bis.gov.in is now at 3 per capcheck, the allowed maximum.
2. **Delhi Fire Service, Fire Safety Precautions Against Electricity**:
   - About 60% of fires are of electric origin.
   - Use one socket for one appliance.
   - Fit MCBs and ELCBs.
   - Do not lay wires under mats.
   - In an electrical fire, use dry sand, CO2 or dry powder.
3. **Uttar Pradesh Fire Services advisory, Deepavali section**:
   - Put diyas only at safe places.
   - Do not overload the supply board.
   - Clear combustibles from the puja place after Laxmi Pujan and before bed.
   - Keep two buckets of water ready.
   - Cool a burn under cold water for 10 minutes.
   - The fire number is 101.
   - Do not use water extinguishers on energised equipment.
4. **TNFRS, Tips for Safe Diwali**: wear cotton, and never put cream, ointment or oil on a burn.
5. **TNFRS, Fire Safety Guide for School Students**: students should not touch electrical equipment without permission or play with fire.
6. **Pediatric burns in North India**, J Indian Assoc Pediatr Surg, 6 Apr 2026, PMC13271701, CC BY-NC-SA. Full text was read.
   - 191 children were admitted to JNMCH Aligarh in 2024.
   - Flame burns were 18% and electrical injuries 14%.
   - 52 cases (27%) came in October to December.

   This is the peer-reviewed, open-access source.

**Not used:**
- Indian J Plast Surg 2024 diya-burn study: at its batch cap.
- NDMA: no page found. ndma.gov.in fire paths returned 404, and site:ndma.gov.in returned nothing.
- UK fire services: not Indian.
- Meesho prices: competitor.

**findpapers queries:** "Diwali burn injuries", "festival burns India oil lamp clothing ignition", "decorative string lights electrical fire", "Deepavali burns epidemiology".

## Links

- **Internal:** /happy-diwali, after the "someone not home" section, and /missyou-gf for a partner in another city.
- **Outbound:** the 6 sources above.
