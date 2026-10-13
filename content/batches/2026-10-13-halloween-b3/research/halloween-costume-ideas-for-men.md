# Research brief — halloween costume ideas for men

Row 147 · slug `halloween-costume-ideas-for-men` · absorbs "halloween costumes men", "halloween costume ideas male" · batch 2026-10-13-halloween-b3 · written 2026-10-13.

## Phase 0 — first-party data

facts.md read directly (no `npm run facts`, per BRIEF §3). No Halloween usage data exists. Used, platform-wide and labelled as such in the body:

- 48.3% of shared pages are opened on a phone (first 150 words)
- Average views per created page: 11.1 (first 150 words)
- 90.9% of started pages are published and shared (card section)
- Raksha Bandhan 2026 lead time, 49.4% built on the day, n = 89 (limits section, labelled as the nearest festival analogue)

The template spec (`template-spec.md`) is the only source for /happy-halloween features: up to six photos, knock three times, carve, letter by flashlight, Boo License 1080×1920 with one of eight costumes, partner/bestie/family/kids modes; premium voice note up to 60 seconds and 12 photos.

## Phase 1 — SERP (2 searches used)

1. **WebSearch (US index)**, "halloween costume ideas for men": 9 results, 8 hijacked-subdomain spam (m.fightcancer.org/?p=, n8n.kaiai.it.com, netbox.point-broadband.com, do2.dr-chuck.com, 2019esg.quantaservices.com, static.intrafocus.com, omeka.prmuseum.org, old.langmai.org) plus thefashionisto.com.
2. **DuckDuckGo (html), lower confidence** — the same results page was parsed twice (once indexed, once to extract links); that is one search. Top 10: goodhousekeeping.com, thepioneerwoman.com, spirithalloween.com (retailer), ideastoknow.com, momooze.com, pinterest.com, moderngentlemanmagazine.com, menshealth.com, halloween.com (retailer), collegelifemadeeasy.com.

Weak count in the DDG top 10: 5 (ideastoknow, momooze, pinterest, moderngentlemanmagazine, collegelifemadeeasy). Gate 4 not triggered. All are competitors: none cited or linked.

| # | Page | Words (raw page) | Structure | Where the answer is | Data cited | Tables / FAQ / schema | Optimising for |
|---|---|---|---|---|---|---|---|
| 1 | goodhousekeeping.com men's costumes (pub 2019-06-25, mod 2026-10-04) | ~2,300 | 20 H2s, one per pop-culture character (Odysseus, Ted Lasso, Dr. Robby, Art the Clown, Doctor Doom…) | One-line dek, then product slides | None | No table, no FAQPage | Trending characters + affiliate products |
| 2 | thepioneerwoman.com (pub 2022-06-24, mod 2026-10-06) | ~1,700 | 20 H2 characters (Spider-Man, Odysseus, Grace, Carmy, Oppenheimer…) | Intro says men "default to a sports jersey" | None | None | Trending characters, affiliate |
| 3 | spirithalloween.com men's category | n/a | Retail category | — | — | — | Sales. Fetch timed out; judged from snippet only |
| 4 | ideastoknow.com (undated) | ~3,500 raw | 31 numbered H2 archetypes (soldier, pirate, lumberjack, nerd, chef, vampire, scarecrow…) | Straight into list | None | None | Generic archetype list, Pinterest traffic |
| 5 | momooze.com (pub 2025-08-13) | ~2,600 raw | 32 H3s of character looks (Freddie Mercury, Joker, Jack Sparrow-inspired, steampunk gentleman, 1920s gangster, scarecrow, MIB-style agent) | After "No time to read?" pin | None | None | Pinterest images |

Men's Health (#8) is an Amazon product roundup (Superman, Hangover, Forrest Gump, hot dog). No page mentions beard, glasses or build more than twice in passing; none gives cost, comfort or whether hands stay free; none has a table, FAQ or any research.

## Phase 2 — gap

- **Table stakes:** a long list of recognisable costumes; some easy/DIY entries; classic monsters.
- **Gap:** organisation by the man's own constraints (effort tolerance, beard, glasses, size, kids, coming straight from work) and practical ratings (comfort, est. cost, phone and drink). No page explains why men resist costumes or what the evidence is.
- **Stale data:** none cited anywhere; the incumbents' value is trend-of-the-year characters that expire annually. We write evergreen and deliberately skip trending characters.
- **Fan-out sub-queries:** easy costume for a man who hates dressing up; beard costumes; costumes with glasses; tall/big guy costumes; dad and kid costumes; office-to-party costumes; historical costumes; why men don't dress up; is liquid latex safe; how much a costume costs.
- **Angle:** Wins by being the only post that sorts men's costumes by effort tolerance and by beard, glasses, build, kids and work-suit reality, rating each for comfort, est. cost and phone-and-drink use, and the only one to say what research does and does not show about why men skip dressing up.

Sibling cannibalisation check: H2/H3s and bolded item names read from unique, easy, funny, 80s, DIY, work (b2), boyfriend (b1), without-buying, no-mask, women and girls (b3). Removed after the check: referee and gondolier (women / without-buying), film director and secret agent (without-buying wardrobe matrix), pumpkin farmer and zookeeper-style dad pairs (women's mom-and-kid set), Bigfoot (women's yeti), plague doctor (scary couples), Jekyll and Hyde (couples posts), kangaroo-and-joey (couple-costumes-with-baby), moon-with-astronaut (girls' astronaut). No costume idea reused. A 5-word overlap scan against every b1/b2/b3 post was run and the substantive overlaps reworded; what remains is template-feature and facts.md phrasing (e.g. "up to 60 seconds", "11.1 views on average") shared batch-wide. verify-batch.mjs is clean for this slug (its only problem is batch.json not yet listing new slugs, which is the orchestrator's file).

## Phase 3 — sources

Search budget for the row was spent on the SERP; research used `findpapers.mjs` (Crossref + Europe PMC) and the Europe PMC REST API. Queries: "men costume dress-up masculinity", "adult playfulness gender differences", "precarious manhood embarrassment", "Halloween costume gender", "cosplay men masculinity", "playfulness sex differences adults", "gender role violation men social penalty", "men appearance clothing self-presentation", "fear of embarrassment men gender atypical behavior", "fancy dress costume party adults", "enclothed cognition", "(costume OR dressing up) AND (men OR masculinity)".

**Finding: no open-access study measures men's reluctance to wear Halloween costumes.** The post says so in the body.

| Source | Use | Read | Notes |
|---|---|---|---|
| Broussard 2009, *Southern Anthropologist* 34(1), egrove.olemiss.edu | Male cosplayers, "unmanly" stereotype, costume as acknowledging and subverting masculinity | Abstract only (PDF 403 to automated access; not worked around) | Peer-reviewed society journal, open repository. The one source about men and costume |
| McDermott et al. 2026, *Health Promotion International*, Europe PMC PMC13583625 | 33 men; engagement where conditions reduce social risk and feel familiar | Abstract | Not about costumes; stated as such in the body |
| Mancini et al. 2026, *Health Promotion Journal of Australia*, Europe PMC PMC13111975 | >14,000 men; CMNI-22 as 11 dimensions | Abstract | Wiley, CC BY-NC: cited and linked only |
| Krivoshchekov & Gulevich 2026, PsyArXiv (osf.io) | 188 samples, 452 tests, substantial selection for significance | Abstract via Crossref (CC BY 4.0) | Preprint, not peer reviewed; stated in Sources |
| MedlinePlus Latex Allergy (NLM) | Reaction can start in minutes; rash, asthma, rarely anaphylaxis | Full page; last updated 2025-11-30 | Generic safety page (swap-test failure recorded) |

Rejected: Eareckson & Heilman 2026 (PLOS ONE, PMC13042864, highly relevant on gender-norm violations) — PLOS ONE already appears in 12 b3 posts, far past the journal cap. Frontiers, SAGE (PSPR "Dress is a fundamental component of person perception", Am J Men's Health), Taylor & Francis (Halloween costume choices and gender, J Genet Psychol; Aust J Psychol), Elsevier (adult playfulness, PAID) — banned publishers. nps.gov "Story of the Teddy Bear" was fetched and verified but dropped from the citations on the coordinator's instruction (sibling women/girls posts use nps.gov); the Roosevelt fact stays unlinked.

Historical and other facts checked before printing (not linked, to stay inside link and Wikipedia caps): Grace Bedell's letter to Lincoln, 15 October 1860 (Wikipedia API); Franklin generally credited with bifocals (Wikipedia "Bifocals"); Roosevelt's refusal to shoot a tied bear near Onward, Mississippi, 14 November 1902 (NPS page and Wikipedia "Teddy bear"); Napoleon about 168 cm, average height (Wikipedia "Napoleon"); male emperor penguins incubate the egg for just over two months (Wikipedia "Emperor penguin"); The Invisible Man 1897; The Phantom of the Opera in volume form March 1910; Magritte's The Son of Man 1964 (Wikipedia API extracts).

sameAs verified via the Wikipedia pageprops API: Halloween costume Q5643122, Masculinity Q1076509, Abraham Lincoln Q91, Theodore Roosevelt Q33866, Benjamin Franklin Q34969.

Slug checked free in Strapi on 2026-10-13; category `festive-beats` exists.

## Structural limitations

- No first-party Halloween data; the table cannot carry a first-party column.
- Costs are our US-dollar estimates for new items, not checked prices.
- The single costume-specific paper was read as an abstract only.
- The prompt asked for "an open-access paper on masculinity and play/self-presentation or on men and dress-up reluctance": none on dress-up reluctance exists in Crossref or Europe PMC as of 2026-10-13; the post says so instead of stretching.
