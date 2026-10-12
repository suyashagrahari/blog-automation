# Research brief: halloween messages for kids

- Row 39 · slug `halloween-messages-for-kids` · absorbs "halloween wishes for kids", "halloween messages for kids funny" · PLAN weak count 4 · band 10,000+/mo
- Siblings not cannibalised: `halloween-wishes-for-grandchildren` (grandparent lines left there), `halloween-jokes-for-kids` (no jokes or riddles here), `halloween-messages-for-adults`, `happy-halloween-wishes`. No /blog/ links. A 6-word-shingle check against every sibling body found no shared line.

## Phase 0: first-party data
- facts.md read directly (no `npm run facts`). There is no Halloween or Kids-mode data (BRIEF §3).
- Used, all platform-wide and labelled that way: 48.3% phone opens, 11.1 views per page, 38.5% password-protect, 90.9% publish rate (2026-09-24 vintage).
- Template spec used as product fact: Kids tone (spooky-cute, round blushing ghosts, no blood, gore or jump scares, confetti spiders, nothing goes dark, "maybe later?" No button, reduced motion), plus six photos, about five minutes, knock three times, carve the pumpkin, an email on first answer. The premium version adds a 60-second voice note and has no No button for family and kids. Because Kids mode says "nothing goes dark", the post leaves out the "dark attic" step.

## Phase 1: SERP (Firecrawl, location United States, 2026-10-12)
Searches used: 2 (both Firecrawl). The first was this SERP. The second looked for school-district inclusion guidance. Firecrawl disconnected afterwards. The coordinator's resume note said the SERP had not run, but it already had, so WebSearch was not used.

| # | URL | Type | Weak? |
|---|---|---|---|
| 1 | pinterest.com/ideas/halloween-quotes-for-kids | UGC aggregator | weak |
| 2 | boomf.com halloween-messages-for-kids | card retailer blog (competitor) | no |
| 3 | ideas.hallmark.com halloween-wishes | Hallmark, incumbent (competitor) | no |
| 4 | embroly.com 77 quotes for kids | small Shopify shop blog | weak |
| 5 | goodhousekeeping.com halloween crafts for kids | off-intent (crafts) | weak (intent) |
| 6 | pinterest.com/ideas/halloween-greetings | UGC | weak |
| 7 | lovepop.com 75+ sayings | card retailer (competitor) | no |
| 8 | sendwishonline.com Halloween wishes for kids by age | e-card builder (competitor) | no |
| 9 | cardsnacks.com 25+ card messages | e-card app (competitor) | no |
| 10 | cuteasiancards.com 100+ wishes | small shop blog | weak |

Measured weak count: 5 of 10 (PLAN said 4). Gate 4 passes.

### Top pages analysed
| Page | Fetched | Structure | Direct answer | Kids-specific | Data / research | Tone |
|---|---|---|---|---|---|---|
| Hallmark (3 Oct 2024, J. Benevento) | full (ctx) | about 11 H2 categories, one of them "For Kids"; history intro first | buried after an origins section | one section only | none | third person, brand |
| sendwishonline.com | full (ctx) | age bands 3–5, 6–9 and 10–13 with a "rule at this age" each; "for a class or a teacher"; "messages kids can write themselves"; FAQ | yes, early | yes, the strongest rival | none | opinionated, specific |
| cardsnacks.com (25 Aug 2026) | full (ctx) | by relationship; one 10-line "Kids" list; a writing formula | after a long intro | 10 lines | none | promotional |
| boomf.com | HTTP 429, snippet only | pun one-liners | n/a | n/a | n/a | n/a |
| embroly.com / lovepop.com | HTTP 429, snippet only | quote and rhyme lists | n/a | n/a | n/a | n/a |

## Phase 2: gap
- Table stakes: age-appropriate lines, cute puns, a class or teacher line.
- Gap: none of them sort by sender within each age band (parent lunchbox, treat-bag tag, 31 October bedtime note, coach or club leader). None have a section for a child who is scared, and none give research on how wording affects children's fear. None offer a harvest or autumn alternative for families who don't celebrate, and none give the date logic for lunchbox notes (31 Oct is a Saturday in 2026 and a Sunday in 2027, so the note goes in on Friday). No page cites any source.
- Fan-out sub-queries: messages for toddlers, tweens, teacher to class, non-celebrating families, a scared child, lunchbox note length and timing, funny lines, sending online. Each maps to an H2 or an FAQ.
- Angle: see `batchMeta.angle`.
- Overlap risk: sendwishonline already uses the age-band framing, and the BRIEF requires it too. This is recorded as a failed audit item.

## Phase 3: sources (all Europe PMC full text read via the REST fullTextXML; europepmc.org is cap-exempt)
1. Muris & Field 2010, Clin Child Fam Psychol Rev 13(2):129, PMC2882043. 7–9-year-olds and a monster doll: threat information raised fear, and positive information lowered it in 71.4% of experiments. Licence is CC BY-NC, so it is cited, not reproduced.
2. Saminathen et al. 2026, BMC Public Health 26:1560, PMC13173933. n=2,697. Warmth at 18 was linked to lower depression and anxiety at 21. The body caveats that this sample is older than the post's readers.
3. Lin et al. 2025, Behavioral Sciences 15(9):1147, PMC12466800. 10 TK teachers in 7 rural California schools. One teacher had a Jehovah's Witness student; another asked families at the start of the year which holidays they keep. This is the inclusion source.
4. Aji et al. 2026, Child Adolesc Psychiatry Ment Health 20:22, PMC12905873. Nighttime fears affect up to 85% of children aged 7–12 (the paper's introduction, citing earlier work), and the fears include darkness and monsters.
- None of these four is used by a sibling (grep checked). capcheck: no banned URLs; no capped domain used.
- Not found: a school-district or education-department page on Halloween alternatives. The US search returned forums, teacher blogs and a 403-blocked NYT Learning Network article. NAEYC returned 403 and guessed district URLs returned 404. The BRIEF said to use one "if possible", and it was not possible with the budget. Also not found: any open-access study of written notes to young children, so the warmth study stands in, with its caveat.
- Not cited: competitors (Hallmark, sendwishonline, CardSnacks, Boomf, Lovepop) and anything on the capped list.

## Verification
- `scripts/verify-batch.mjs`: no errors on this slug (1,768 words, 10 FAQs, 47/3). The batch-level "batch.json blogs != files on disk" error belongs to the orchestrator, because batch.json does not yet list several slugs, including this one. batch.json was not edited.
- Slug is free in Strapi. All sameAs links were checked against the Wikipedia API: Halloween Q251868, Trick-or-treating Q47195, Fear Q44619, Autumn Q1314.
