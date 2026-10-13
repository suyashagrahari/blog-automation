# Research brief — halloween costume ideas for girls (row 144)

Slug `halloween-costume-ideas-for-girls` · also covers "halloween outfit ideas for girls" · audience: girls ~4–14 · written 2026-10-13.

## Phase 0 — first-party data
- facts.md read directly (no `npm run facts`, per BRIEF §3). No Halloween, costume or kids-mode data exists.
- Used (platform-wide, labelled as such in the body): 48.3% phone opens; 11.1 views per page; 90.9% publish rate (all measured 2026-09-24).
- Honest note: none of these bear on choosing a costume; they bear only on the card section (sending costume photos to a relative). Table column with first-party data fails structurally.

## Phase 1 — SERP (2 searches used: 1 WebSearch, 1 DuckDuckGo)
- **WebSearch (US index)**, 1 call: 9 results, of which **7 are hijacked-subdomain spam** (foreman.hms.harvard.edu, 2019esg.quantaservices.com x3, tdten.teradata.com, old.langmai.org x2), 1 parked-museum spam (omeka.prmuseum.org), 1 weak blog (programminginsider.com). Weak count in top 10: 9/9 weak. Gate 4 passes.
- **DuckDuckGo (lower confidence)**, `html.duckduckgo.com`, used to find legitimate competitors: withtheblinks.com, parade.com, spirithalloween.com, diys.com, pinterest.com, miabellegirls.com, partyandbeyond.com.

| # | Page | Fetched? | Words / structure | Direct answer | Data and date | Format | Optimising for |
|---|---|---|---|---|---|---|---|
| 1 | withtheblinks.com/girl-halloween-costumes | Yes | ~1.5k; "14 Girl Halloween Costumes" H2 + H3 per costume, each linking to own DIY post | No; intro is throat-clearing | None | Photo gallery, internal links | Internal traffic to family-costume posts; licensed characters (Edna Mode, Miss Piggy, Monsters Inc) |
| 2 | parade.com/…/girl-halloween-costumes | No — HTTP 403; snippet only | "50 Cute Girls Halloween Costume Ideas (2024)" | Snippet: "From cute to creepy" | Year-stamped 2024 | Listicle (judged from snippet) | Affiliate/shopping |
| 3 | spirithalloween.com girls-costumes category | No — fetch failed; snippet only | Retail category page | n/a | "2026" in title | Product grid | Sales |
| 4 | diys.com/halloween-costumes-for-little-girls | Yes | 50 numbered H3s; images from 2015 | No | None (2015 uploads, stale) | Gallery linking out to other blogs | DIY image roundup (witch, princess, ladybug, unicorn, cheetah, Frida Kahlo, superhero) |
| 5 | partyandbeyond.com/teen-girl-halloween-costume-ideas | Yes | ~5k; 21 ideas in 3 categories, each with Difficulty/Time/Budget; budget-vs-splurge table | No ("Picture this" anecdote opener) | Amazon/Dollar Tree prices, undated | Tables, budget lines | Teen trend list (Wednesday S2, Glinda, Barbie in a Box) |

**Table stakes:** witch, ghost, black cat, fairy/princess, animals, superheroes, DIY vs bought, cost.
**Gap:** nobody organises by the girl's interest; nobody gives age band + make-it level + warmth per idea; no fact-checked real women; no tween supervision/independence guidance; no research on stereotypes or career aspirations; all lean on licensed characters (Disney, Netflix, Barbie).
**Stale data:** diys.com images 2015; parade year-stamped 2024.
**Fan-out sub-queries:** easiest DIY girl costume; not-babyish costume for 12-year-old; age to trick-or-treat alone; are STEM costumes better; warm costumes; homemade cost; spooky but not scary for 5-year-old; group costume for tween friends; halloween outfit (non-costume) for girls.

**Angle:** wins by being the only post in a spam-heavy SERP that sorts girls' costumes by interest with age band, make-it level, warmth and labelled cost per idea, with fact-checked history makers, open-access research on stereotypes and tween independence.

## Sibling de-duplication
Read H2/H3 and idea names of b2 kids, b2 family, b2 unique, b2 outfit, b3 no-mask, b3 women (written in parallel), b3 baby. Removed during drafting after the women's post landed: Marie Curie, Ada Lovelace, Amelia Earhart, Flamingo, The Snow Queen (all in women's post), Hedgehog (baby post). Avoided b2 kids' pirate, construction worker, mermaid, robot, scarecrow, mad scientist, skeleton, werewolf, wizard; b3 no-mask's raccoon, fox, unicorn, Red Riding Hood, Dorothy, Pippi, Medusa; b2 unique's axolotl, tardigrade, Baba Yaga etc. Vampire and witch are prompt-mandated spooky-classics, given kid-specific twists (toothbrush vampire, potion-class witch with goggles). 5-word overlap scan run against all b1/b2/b3 blogs; remaining shared 5-grams are template-feature wording and generic phrases.

## Phase 3 — sources (all fetched)
findpapers queries: "children Halloween costumes gender stereotypes", "role models girls STEM aspirations", "draw-a-scientist children gender", "children independent mobility age parents permission", "gender-typed toys children play preferences", "children's independent mobility licences age unaccompanied".
- The only costume-specific paper found ("Halloween Costumes and Gender Markers", Psychology of Women Quarterly 2000) is SAGE (banned) and paywalled — not used; body says no open-access costume study was found.

| Source | Claim used | Read | Published |
|---|---|---|---|
| europepmc PMC12234352 Davenport & Padwick, HSSC (Springer Nature) | 78 children 7–9 tracked 3 yrs; "relatively narrow pool of jobs"; 60% changed completely; girls' STEM aspirations fell 2019→2021 | Abstract (full text fetched) | 2025-07-08 |
| europepmc PMC6096659 Spinner, Cameron, Calogero, Sex Roles (Springer) | n=82, 4–7; counter-stereotypic pictures → more flexibility on toy play/playmates; own preferences unchanged | Abstract | 2018-01-23 |
| europepmc PMC5561163 Slater et al., J Youth Adolesc (Springer) | 80 girls 8–9; 10-min appearance game → more body dissatisfaction, more feminine career preference | Abstract | 2017-03-18 |
| europepmc PMC10715529 Frohlich & Collins, JECH (BMJ, CC BY-NC: cited, not reused) | "mobility licences" incl. going out after dark alone; Hillman 80% (1971) → 9% (1990) | Full text | 2023-08-03 |
| nhm.ac.uk Mary Anning | Born 1799; Nov 1812 dug out 5-m ichthyosaur skeleton (age 13) | Full page | undated |

Fact checks not linked (verified via Wikipedia API extracts, not cited): Bessie Coleman FAI licence 15 June 1921; Wilma Rudolph three golds, Rome 1960; Junko Tabei first woman on Everest; Savitribai Phule girls' school, Pune, 1848; Alice 1865; Anne of Green Gables 1908; Rapunzel (Grimm) 1812; Heidi 1880–81. Wikidata QIDs: Halloween costume Q5643122, Mary Anning Q230491, Bessie Coleman Q254376, Savitribai Phule Q2645692, Trick-or-treating Q47195.
- Rejected: nobelprize.org Curie page (fetched; dropped with the Curie costume — women's post uses Curie and nobelprize.org reached the b3 cap). nasa.gov Sally Ride page 404.
- Caps: capcheck clean for this post; europepmc exempt; nhm.ac.uk now 2 b3 posts.

## Brief claims checked
- Prompt's suggested history makers (implied Curie-type figures) collided with the parallel women's post; swapped for Anning, Phule, Coleman, Rudolph, Tabei.
- Costs are labelled estimates in USD, not checked prices (no shop prices were verified).
