# Research brief: zombie pickup lines (rank 257, absorbs "brain pickup lines")

Slug: `zombie-pickup-lines` (Strapi check 2026-10-14: not taken). Category `festive-beats`.

## Phase 0: first-party data
No Halloween or pickup-line data in facts.md (BRIEF §3). Used platform-wide lines: 48.3% phone views and 38.5% passwords (first paragraph), 11.1 views per page, 90.9% publish rate (later sections).

## Phase 1: SERP (2 searches used)
- **WebSearch (US index), 1 search:** 9 results, 7 of them hijacked-subdomain spam (br2.imexhs.com, faits-marquants.inrae.fr, static.intrafocus.com, spc.columbiaspectator.com, imageserver.redfishgroup.co.uk x2, becasfundacionie.blogs.ie.edu), plus onlycaptions.com x2 (same page).
- **DuckDuckGo html (lower confidence), 1 search:** thepickuplines.net, rizzinfinite.com, pickuplinebee.com, pickuplinearoma.com, pickuplineszone.com, pickslines.com, pickuplineinsider.com, pikuplin.com, reddit r/OkCupid (2014), pickuplinebuzz.com.
- **Weak count in top 10: 10.** No publisher of any authority. Gate 4 passes.

| Page | Approx. words | Structure | Direct answer | Sources / data | Notes |
|---|---|---|---|---|---|
| onlycaptions.com | ~3,000+ (403 to script; read via ctx fetch) | 3 H2s (for men / women / funny), "730+" lines | None; scene-setting intro | None | Many lines are bite/rigor-mortis innuendo; "(2026)" year-stamp |
| thepickuplines.net | ~3,100 | 8 H2s by tone/app (Tinder, Hinge) | None | None | "brain" 16 times; cringe section |
| pickuplinebee.com | ~2,100 | 6 H2s (funny/short/clever/cool/flirty) | None | None | Pure list |
| pickuplinearoma.com | ~2,100 | "Quick Answer", 14 H2s incl. "Why zombie pickup lines actually work", delivery tips | Short quick answer | Claims about why lines work, no citations | Closest to a structured page |
| pickslines.com | ~4,300 | 21 H2s incl. "Dirty Zombie Pickup Lines", FAQs | None | None | Dirty section |

Zero of them mention Haiti, Seabrook, Romero, 1968, any study, or any brain fact (keyword counts: Romero 0, Haiti 0, 1968 0, study ≤1, FAQ ≤2).

**Sibling overlap:** no SERP URL is shared with any named sibling (b1 halloween-pickup-lines etc., b2 ghost, b4 witch, b5 vampire). Overlap count 0.

## Phase 2: gap
- Table stakes: grouped lists (funny/cheesy/flirty/texting), "brain" puns.
- Gap: no page is clean, sourced, or explains the monster; none gives delivery advice grounded in research; none fact-checks the brain trivia the puns rely on.
- Fan-out: what is a zombie pickup line; brain pickup lines; zombie origin / word origin; did Night of the Living Dead say zombie; do cheesy lines work; how to deliver; texting lines; lines for a partner; when is Halloween.
- Angle: see `batchMeta.angle`.

## Phase 3: sources (all fetched and read)
1. Seabrook, *The Magic Island* (1929), archive.org djvu text: quoted definition of the zombie; US public domain (≤1930).
2. Romero & Russo, *Night of the Living Dead* screenplay (©1968), archive.org `night-of-the-living-dead-1968_202506` djvu text: "zomb" 1 hit ("the zombie thing", stage direction), "ghoul*" 11, "brain" 0. A second copy (Russo draft, ©1967, item `night-of-the-living-dead-1990-1989.02.00-1st`) gives the same counts (zombie 1, ghoul 9).
3. *Night of the Living Dead* (1968) film, archive.org `NightOfTheLivingDead720p1968`, ASR .srt: "zombie" 0; "marauding ghouls", "flesh eaters", "those things"; newscast: "since the brain of a ghoul has been activated by the radiation ... kill the brain and you [kill the ghoul]" (ASR garbled). **Correction to the prompt:** "never says zombie" is true of the dialogue only; the screenplay uses it once.
4. Engl & Attwell 2015, J Physiol (Europe PMC PMC4560575), full text: brain = 2% of body mass, 20% of resting energy. 1.4 kg = 2% of 70 kg, labelled arithmetic.
5. Allemand, Gmür & Flückiger 2022, Scand J Psychol (PMC9313810): RCT, 96 adults, 3-h flirt training, more flirting behaviour 30 days later. (Journal now 2 posts in b6, with halloween-slogans.)
6. Walker et al. 2023, Current Psychology (PMC9999077): n = 277, humour r = .33, valuing r = .43.
- Unlinked: Senko & Fyffe 2010, J Soc Psychol 150(6):648-667 (Taylor & Francis, banned), abstract read via Europe PMC/PubMed record PMID 21166329: 70 women; flippant line → lower trustworthiness and intelligence, worse for long-term.
- Unverifiable: Kleinke, Meeker & Staneski 1986, Sex Roles 15(11-12):585-600 (Springer). link.springer.com returned a bot challenge (not worked around); OpenAlex and Semantic Scholar carry no abstract. Named only, no numbers.
- Etymology checked at en.wiktionary.org "zombie": Haitian Creole *zonbi*, Louisiana Creole *zombi*, Kikongo *nzambi* "god", Kimbundu *nzumbi* "ghost"; 18th century. Not linked.
- Searches tried for an open humour-in-attraction paper outside banned/full publishers: Europe PMC "humor romantic attraction initial", "humor attraction speed dating", title-restricted humour + romantic/mate/flirt OA. Only SAGE (Evolutionary Psychology), MDPI, Frontiers and EJOP DiDonato 2016 (used in b1, b4).
- sameAs verified via the Wikipedia API: Zombie Q9406, Pick-up line Q2312067, Night of the Living Dead Q623051, George A. Romero Q51511, William Seabrook Q584769, Human brain Q492038.

## Originality check
All 36 lines were checked with a 5-word n-gram overlap against every `content/batches/*halloween*/blogs/*.json` (body and FAQs) and the text of 9 competitor pages. Two drafted lines that collided with competitors ("I'd like to spend the", "can't stop thinking about you") were dropped. Sibling zombie lines avoided: slow/fast zombies (b2 tinder), zombie-to-vampire scale (b1 rizz), zombie makeup melting (b1 girls), "every Monday" (b1 chat-up).
