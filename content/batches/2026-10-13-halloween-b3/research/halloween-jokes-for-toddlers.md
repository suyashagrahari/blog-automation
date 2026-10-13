# Research brief — halloween jokes for toddlers (row 104)

- Slug: `halloween-jokes-for-toddlers` · absorbs "halloween jokes for 4 year olds", "halloween jokes for little kids"
- Batch: 2026-10-13-halloween-b3 · category `festive-beats` · templates `/happy-halloween`, `/happy-halloween-premium`
- Written 2026-10-13. Phase 8 remediation left to the orchestrator.

## Phase 0: first-party data
facts.md (2026-09-24 block) holds no Halloween data and nothing about jokes or ages. Used three platform-wide lines, each labelled as such in the body: 48.4% touch-device views, 11.1 views per page, 48.3% phone opens. They bear on sending a toddler's joke to a grandparent's phone. The template spec is product fact and not counted.

## Phase 1: SERP
Searches used: **1 WebSearch (US index)**, no Firecrawl, no DDG fallback. Results: fatherly.com (two URLs), scotsman.com, motherandbaby.com, kidactivities.net, weareteachers.com (two URLs), goodreads.com (a book page), fromabcstoacts.com. Nine results in all, and no page targets toddlers specifically. **Weak count in the top 10: 4** (kidactivities.net, fromabcstoacts.com, the goodreads book page, the duplicate fatherly URL). Gate 4 passes.

| # | Page | Fetch | Words | Structure | Direct answer | Toddler content | Data / dates | Table / FAQ schema |
|---|---|---|---|---|---|---|---|---|
| 1 | fatherly.com best-halloween-jokes-for-kids | 200 | ~945 | H1 plus 6 H3s by monster (pumpkin, vampire, werewolf, ghost) | none, goes straight to a list | none | pub 2019-10-01, mod 2022-10-09 | no / no |
| 2 | scotsman.com 100 jokes for kids | **403**, judged from snippet | n/a | "100 funny and easy jokes" | n/a | none in snippet | n/a | n/a |
| 3 | motherandbaby.com 46 jokes | 200 | ~1,256 | H3s by monster plus "Why tell jokes at Halloween?" | a line saying Halloween need not be scary for toddlers | names toddlers once, no age guidance | undated | no / no |
| 4 | kidactivities.net 55 jokes | 200 | ~1,281 | flat list | "ideal for preschool and elementary" | no age split | pub 2022-11-24 | no / no |
| 5 | weareteachers.com 200 jokes | 200 | ~3,004 | one H2 per joke, riddle and pun style | none | none; puns throughout | pub 2025-08-27, mod 2026-08-13 | no / no |

Shared by all five: generic monster-themed puns and riddles, sorted by monster. **None** sorts by age, gives months, explains why toddlers laugh, carries a table or FAQ schema, or covers peekaboo, action or wrong-name jokes.

## Phase 2: gap and angle
- **Table stakes:** a large list of clean Halloween jokes and some knock-knocks.
- **Gap:** puns sit above toddler level. The Early Humor Survey reports fewer than 25% of children enjoying puns by 47 months, yet every top-5 list is made of puns. No page covers peekaboo, sound, action or wrong-name jokes, or a never-scary rule.
- **Stale data:** none of the five cites data.
- **Fan-out:** at what age toddlers get jokes; why they laugh; peekaboo as a joke; knock-knocks for 4-year-olds; scary or not; how to make one up; sending to a grandparent.
- **Angle:** the only post that sorts toddler Halloween jokes by developmental joke type and the month children reach it, using the Early Humor Survey age curves.

## Phase 3: sources (all fetched, all on europepmc.org, which the batch treats as cap-exempt)
1. Hoicka et al., Early Humor Survey, Behavior Research Methods (Springer, CC BY 4.0), online 2021-11-18, PMC9374637. **Full text read.** Gives the months at which 25/50/75% pass each item, from the age analysis on N = 671 (Studies 2 and 3): peekaboo 1/1/1, funny voices 1/1/17, bodily humour 1/1/10, scaring others 1/16/35, mislabelling 22/29/36, playing with concepts (including nonsense knock-knocks) 24/31/37, nonsense words 28/35/42, puns under 25% by 47 months. Production is 50% by 11 months and 97.5% by 25 months (Study 1). No country differences across AU, CA, UK and US. Stranger peekaboo is cited from MacDonald & Silverman 1978.
2. Mireault et al., Br J Dev Psychol (Wiley), 2017-09-25, PMC6171116 author manuscript. **Full text read.** Two longitudinal studies, N = 60 and N = 53. The absurd events included a clown-nose ball. 5-month-olds laughed at them despite neutral parents.
3. Mireault & Reddy, Human Development (Karger), 2020-09-17, PMC8291289 author manuscript. **Full text read.** Humorous incongruity is odd but possible, harmless and nonthreatening. Impossible events produce looking instead of smiling.
4. Allison, Kelsey & Grossmann, Developmental Psychobiology (Wiley, CC BY-NC, cited and not reused), 2025-09, PMC12464472. Claim taken from the abstract: 35 five-month-olds in the final sample; smiling and laughter with caregivers predicted DMN connectivity, an association.

Rejected:
- Frontiers: "Playing with Expectations" PMC5028384 and "Play-mirth theory" (Frontiers is banned).
- "First They Scream, Then They Laugh" (Evolutionary Psychology, SAGE, banned).
- Paine 2022 and the 2021 PLOS fNIRS paper (b1 used both).
- Elsevier author manuscripts by Mireault in Infant Behav Dev, JECP and Curr Biol (Elsevier banned).
- Hoicka & Martin 2016 (Child Dev), Hoicka & Butcher 2016 (Cogn Sci), Hoicka & Akhtar 2012 (BJDP): **not open access in Europe PMC**, so not cited.

findpapers queries run: "toddler humor production joking", "Early Humor Survey infants", "infant laughter peekaboo", "infants humor perception incongruity", "toddlers distinguish joking pretending", "parents cues humor toddlers", "infant laughter development first year", "peek-a-boo game infants", "clowning teasing infants Reddy". Also searched the Europe PMC REST API by Hoicka and Mireault author names.

## Originality
All 46 lines are new. A 5-gram check ran against all 100 b1/b2 posts. It first caught three knock-knock lines that reused b1's Owl, Mummy and "Bat you can't…" patterns, and all three were replaced. The only 5-gram overlaps left are template-spec feature wording and boilerplate, not joke lines.

## Structural limitations and brief claims checked
- The prompt said to use Hoicka's toddler-joking work "if open access". Her experimental toddler-joking papers are **not** OA. The OA Early Humor Survey (her lab, Mireault co-author) carries the claims instead.
- The prompt framed "first knock-knocks for 4-year-olds" as a joke type. The survey shows real puns stay rare to 47 months, so the knock-knocks here end in nonsense or sounds. The page says this openly.
- The prompt says b1 used "Mayseless & Reiss 2021". b1's sources are PMC9494906, PMC8654164, PMC8360189 and two ERIC records. I did not check the authors of PMC8654164 and avoided all five regardless.
- First-party table column: fails honestly, because no Halloween data exists.
