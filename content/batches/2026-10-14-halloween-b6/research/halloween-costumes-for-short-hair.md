# Research brief: halloween costumes for short hair (rank 285)

Slug: `halloween-costumes-for-short-hair`. Also covers: "short hair costume ideas". Category: festive-beats.

## Phase 0: first-party data
facts.md has no Halloween, costume or hair data (BRIEF §3). These platform lines bear on the reader's next step, which is sharing a costume photo:
- 48.3% of shared pages are opened on a phone (27,725 of 57,456 views), measured 2026-09-24. In the first 150 words.
- Average views per created page: 11.1, measured 2026-09-24. In the first 150 words.
- 38.5% of creators password-protect their page before sharing it (2,000 of 5,199), measured 2026-09-24. In the sharing section.

## Phase 1: SERP (WebSearch, US index; 1 search used of a budget of 2)

| # | URL | Type | Words | Structure | Direct answer | Data / date | Format | Weak? |
|---|---|---|---|---|---|---|---|---|
| 1 | lateblooomer.substack.com/p/short-hair-halloween-costumes-that | Personal Substack, 22 Oct 2024 | ~1,550 | Intro, then 4 film characters (Meredith Blake, Trinity, Penny Lane, Margot Tenenbaum), with affiliate links | Buried after a long intro | None | No FAQ, no table | Yes |
| 2 | static.intrafocus.com/?p=36324 (and 4 more intrafocus URLs) | Hijacked-subdomain spam | n/a | TLS cert mismatch, so not fetched | n/a | n/a | n/a | Yes (x5) |
| 3 | netbox.point-broadband.com/?p=50251 | Hijacked-subdomain spam | n/a | Not fetched | n/a | n/a | n/a | Yes |
| 4 | halloweencostumes.com/blog/p-472-costume-ideas-for-women-with-short-hair.aspx | Costume retailer blog, 17 May 2024 | ~3,250 | 30 numbered H2s, one per licensed character, each with "shop" links | First paragraph frames the idea; no hair-length grouping | None | No FAQ, no table | No (competitor retailer) |
| 5 | tulanehullabaloo.com/44289/... | Student newspaper, 25 Oct 2018 | ~700 | Short and long hair lists, 5 ideas each | Immediate | None | Lists | Yes |

Weak count: 8 of 9 results (PLAN.json says 7). Gate 4 passes. Every real page is a list of women's film or cartoon characters, sorted by hair colour at best.

## Phase 2: gap analysis
- **Table stakes:** costumes that use your own short hair, with a short build list.
- **The gap:**
  - No page sorts ideas by length band (pixie or buzz, bob, chin to shoulder).
  - No page separates own-hair costumes from hat or wig costumes.
  - None covers buzz cuts or men, gives costs or times, or says anything about wig safety, colour sprays or pins.
- **Stale data:** none cited anywhere.
- **Fan-out sub-queries:**
  - what costume for a buzz cut, a bob, or a pixie
  - do I need a wig, and are wigs flammable
  - patch-testing a colour spray, and keeping bobby pins in short hair
  - the cheapest option
  - costumes for men
  - short hair from chemotherapy or alopecia
- **Angle:** see `batchMeta.angle`. Ideas are generic archetypes, so no trademark claims are needed.

## Cannibalisation
- The siblings named in the prompt were read for H2s, FAQs and every costume name:
  - this batch: last-minute and black-dress
  - b4: halloween-hairstyles and glasses-wearers
  - b3: women and men
  - b2: unique
- 0 SERP URLs are shared with them.
- All 271 Halloween blog files were scanned for each candidate idea:
  - **Dropped because a sibling owns them:** Count Orlok, mime, aviator/pilot, Cleopatra, boxer, flapper, beekeeper, monk (b2 "unique" lists monks' robes as a costume to skip), lampshade and sleepwalking variants.
  - **The 12 kept have 0 costume hits elsewhere:** Joan of Arc, toothbrush, chimney sweep, Georgian judge, squire, go-go dancer, switchboard operator, usherette, Lady Macbeth sleepwalking, pageboy herald, troubadour, town crier.
- b4 halloween-hairstyles already owns hair-dye safety, citing NHS, FDA, PPD papers and Bucks Fire. This post uses none of them and keeps colour to a short patch-test note from a different source.

## Phase 3: sources (all fetched)
1. **Villalobos et al., J Burn Care Res 2025, abstract 962.** europepmc.org/article/PMC/PMC11958306, CC BY. The abstract is the whole item and was read in full. It covers wig flammability and the gap in standards. Subject test: pass.
2. **Montgomery et al., BMJ Open 2017.** europepmc.org/article/PMC/PMC5566602, full text read. n=338; acrylic wigs were the most common type; 46% reported a positive impact. Covers hair, wigs and self-image. Peer-reviewed and open access.
3. **16 CFR 1610.1.** law.cornell.edu/cfr/text/16/1610.1. Hats are excepted; costumes are covered. Text is identical to eCFR, which reached its batch cap mid-write.
4. **Health Canada, Hair dyes.** canada.ca. Patch-test method: 24 hours, behind the ear or on the inner forearm. Modified 2016-12-05.
5. **Wiktionary, bobby pin and pageboy.** Cap-exempt. Etymology and definition only.

Searched with no usable open result:
- "hairstyle identity self-perception"
- "women short hair femininity identity"
- "hair and identity qualitative study"
- "hair length perception attractiveness women"
- Europe PMC title searches for haircut, short hair and hairpin

The P&G hair-shine study (Int J Cosmet Sci 2026) was rejected: it is industry-run and about shine, not length or identity.

Not used: ecfr.gov, nhs.uk and gov.uk (full); fda.gov (one slot left, not needed). Avoided Frontiers, SAGE, Taylor & Francis, Elsevier, PLOS ONE and MDPI.
