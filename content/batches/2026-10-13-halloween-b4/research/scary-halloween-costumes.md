# Research brief: scary halloween costumes (row 151)

- Slug: `scary-halloween-costumes` · absorbs "halloween costumes scary", "halloween costumes horror" · band 3,000–10,000/mo
- Head-term flag: a 3-word head term dominated by retailers. Realistic long-tail targets: "faceless halloween costume ideas", "scary halloween costumes without makeup", "uncanny valley halloween costume".
- Searches used: 2 of 2 (1 WebSearch, 1 DuckDuckGo HTML).

## Phase 0: first-party data
No Halloween usage data in `content/facts.md` (BRIEF §3). Used three platform-wide lines, labelled in the body:
- 48.3% of shared pages are opened on a phone (27,725 of 57,456 views), measured 2026-09-24
- Average views per created page: 11.1, measured 2026-09-24
- 90.9% of started pages are actually published and shared (4,724 of 5,199), measured 2026-09-24

They support one practical argument (a costume is often seen at phone-thumbnail size, so silhouette and stillness beat fine latex detail). They are tangential to the keyword, and the post says so.

## Phase 1: SERP

**WebSearch (US index):** 7 of 9 results were hijacked-subdomain spam (doapi.flashtelecom.es, status.penumbra.zone, docs.thebrandindustry.com, v0.carbonext.com.br, tools.highaltitudescience.com, finderio.dev.500apps.com, blog.founders.illinois.edu ?p=) plus two halloweencostumes.com.au category links. All counted as weak. None analysed as top-5 pages.

**DuckDuckGo HTML (lower confidence):** thehorrordome.com (shop), halloweencostumes.com (shop), halloween.com (shop), amazon.com ×2, spirithalloween.com ×2, rd.com/list/scary-halloween-costumes, heystylehey.com, walmart.com.

| Page | Type | Words (approx.) | Structure | Direct answer | Data / date | Table | FAQ | Optimising for |
|---|---|---|---|---|---|---|---|---|
| rd.com/list/scary-halloween-costumes | editorial listicle | ~4,200 page text | H1 + 55 H3 product items + 3 FAQ H3 | no, intro then list | none; datePublished 2021-08-09 | no | yes (3) | affiliate product clicks, pop-culture characters (M3GAN, Pennywise, Jason) |
| heystylehey.com/scary-halloween-costume-ideas | small blog | ~2,600 | 4 H2 (Classic, Horror Movies, Creepy Creatures, Bloody & Disturbing), 45 H3 | no | none; modified 2026-07-30 | no | no | Pinterest-style image list, mostly film IP |
| halloweencostumes.com/scary-costumes.html | retailer category | ~6,100 page text | product-grid H2s | n/a | none | no | yes (shop FAQ) | transactional |
| thehorrordome.com/collections/halloween-costumes | retailer category | ~2,800 | category H1s + 25 shipping/size FAQs | n/a | none | no | yes (buying) | transactional |
| spirithalloween.com/category/horror | retailer category | not read (fetch timed out) | snippet only | n/a | n/a | n/a | n/a | transactional |

Weak count in top 10: WebSearch 7 of 9 spam; DuckDuckGo 1 weak editorial (heystylehey) among 8 retail/category pages and 1 strong editorial (rd.com). Gate 4 passes.

## Phase 2: gap analysis
- **Table stakes:** clowns, zombies, ghosts, vampires, mummies, witches, skeletons, plague doctor, film slashers.
- **Gap (none of the pages do it):** explain *why* a costume is scary; rate scare level; give kid-safety and cost per idea; scare etiquette (jump scares, children, heart conditions, masks at night); solo DIY without film IP; any research.
- **Stale data:** rd.com carries a 2021 publish date and no data at all.
- **Fan-out sub-queries:** what makes a costume scary / why are uncanny faces creepy / why are clowns scary / scariest costume / scary costume without makeup / is it safe to wear a mask at night / scary costumes and young kids / cost.
- **Angle:** this post wins by being the only one that sorts solo scary costumes by the mechanism that makes them frightening, rating each 1–5 with SFX skill, est. cost and age, grounding the uncanny and clown sections in two open-access studies, and adding sourced scare etiquette.

## Sibling de-duplication
Read H2/H3s and the item names of: b3 `scary-couple-halloween-costumes` (30 pairs), b2 `easy-halloween-makeup`, `funny-halloween-costumes`, `unique-halloween-costumes`, b3 `halloween-costume-ideas-for-men`, `-women`. Excluded every item they use: mannequins, porcelain dolls, automatons, wax figures, mirrored twins, La Llorona, banshee, Krampus, Leshy, plague doctor, mourning portrait, sleep-paralysis visitor, too-perfect neighbours, sleepwalkers, werewolf, Orlok/vampire, ghouls, gargoyles, Grim Reaper, headless horseman, giant spider, swamp creature, Baba Yaga, Kappa, Pierrot clown, doll, skull, witch, zombie, Frankenstein, ventriloquist dummy, Phantom, Victorian undertaker, Invisible Man, living statue. The 30 ideas here are all distinct. 5-word overlap check run against all 150 b1–b3 posts and b4 files on disk: the only shared 5-grams are template-feature, date and facts.md phrases, plus short generic phrases ("at the end of the").

## Phase 3: sources (all fetched)
| # | Source | What it supports | Read | Date |
|---|---|---|---|---|
| 1 | Chattopadhyay & MacDorman, "Familiar faces rendered strange", *Journal of Vision* 16(11), europepmc.org/article/PMC/PMC5024669 | 365 participants; reduced realism consistency made humans and animals (not objects) less familiar, eliciting cold, eerie feelings; cites Mori 1970/2012 | full text (Europe PMC REST XML). Licence CC BY-NC-ND: cited and linked only | 2016-09-09 |
| 2 | Planting, Koopowitz & Stein, "Coulrophobia: An investigation of clinical features", *SA Journal of Psychiatry* 28 (AOSIS), europepmc.org/article/PMC/PMC8831965 | n=95 support-group survey; 43.9% palpitations; 7.4% severe anxiety with panic; onset mean 9; 89.5% no remission; cites Meiri 2017 (14 of 1,160 hospitalised children) | full text, CC BY | 2022-01-19 |
| 3 | Cleveland Clinic, Broken Heart Syndrome | intense fear (and surprise parties) listed as sudden stressors that can trigger it | full page | updated 2026-04-16 |
| 4 | AAP / HealthyChildren.org, Halloween Safety Tips | makeup and hats as safer alternatives to masks; hats must not block vision; flashlight after dark | full page | updated 2026-09-29 |
| 5 | Wikipedia, Mari Lwyd (Q2025077) | South Wales wassailing custom, horse skull on a pole, first recorded 1800, Christmas time | API extract | none |
| 6 | Wikipedia, Black Shuck (Q880558) | ghostly black dog of East Anglian folklore, sometimes an omen of death | API extract | none |

Searches run through `findpapers.mjs`: "uncanny valley human faces eeriness", "fear of clowns coulrophobia", "creepiness perception ambiguity threat", "emotional stress triggered takotsubo fright".
Rejected: Frontiers 2023 coulrophobia aetiology study (PMC9931735) and Kätsyri 2015 uncanny-valley review (Frontiers), both BRIEF §9 bans; Elsevier *Computers in Human Behavior* 2013 (banned); Scientific Reports 2025 uncanny/immune study (megajournal); McAndrew creepiness (Elsevier). heart.org returned 403; NHLBI and MedlinePlus URLs 404.

## Brief claims checked
- Row prompt: "cite coulrophobia prevalence from an open-access study if one exists". No open-access, non-banned population prevalence was found. The SAJP paper is a support-group survey, and its one prevalence-type number (14/1,160 hospitalised children) comes from a cited 2017 study. It is attributed that way, in the FAQ only.
- Sibling-overlap claim: b3 `halloween-costumes-with-no-mask` also cites the AAP page, but caps are counted per batch and b4 has no other use (capcheck clean).

## Template
`/happy-halloween` features are described only from template-spec.md: six photos, letter, knock, pumpkin carving, foggy portraits, flashlight letter, Boo License (Story size, 8 costumes), PT5M, Kids tone with no blood or gore. `/happy-halloween-premium`: 60-second voice note, 12 photos, optional unlock time. The post says plainly that the page is a single-recipient greeting, spooky rather than scary, and English-only.
