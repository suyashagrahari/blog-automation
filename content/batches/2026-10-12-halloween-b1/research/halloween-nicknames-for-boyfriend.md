# Research brief: halloween nicknames for boyfriend

- Slug: `halloween-nicknames-for-boyfriend` (row 9). Also covers: "cute halloween nicknames for him".
- Theme: couple. Category `festive-beats`. Templates: /happy-halloween (mandatory), /happy-halloween-premium (oneOf).
- Slug free in Strapi (checked 2026-10-12, 0 results; no live slug contains "nickname"). Not in `serps.md` (no nickname row), so there was no corroborating SERP.

## Phase 0: first-party data
No Halloween usage data exists. Platform-wide lines used (verbatim in `factsUsed`):
- 48.3% phone opens: the reason short names suit a lock-screen preview (opening paragraph and table).
- 38.5% password-protect: pet names as private language (opening paragraph).
- 11.1 average views per page: the table row for the Halloween card, labelled platform-wide.
- 90.9% publish rate: the delivery section.
Template spec facts (not counted toward the 3): editable question up to 60 characters, 8 Boo License costumes, 1080×1920 card, first-answer email, premium voice note up to 60 s, reply up to 280 characters.

## Phase 1: SERP (Firecrawl, location "United States", 1 of 2 searches)

| # | URL | Type | On intent? | Weak? |
|---|---|---|---|---|
| 1 | pinterest.com/ideas/halloween-nicknames-for-boyfriend | image board, about 0 words of text | partly | weak |
| 2 | barrynames.com/halloween-nicknames | 250+ name listicle, about 3,750 words | generic (friends, pets, loved ones) | strong-ish |
| 3 | reddit.com/r/NameMyCat | cat names | no | weak |
| 4 | neaterpets.com halloween pet names | animal names (HTTP 429 on fetch) | no | weak |
| 5 | facebook.com/fb-answers/cute-halloween-nicknames-for-boyfriend | AI answer stub (empty on fetch) | yes | weak |
| 6 | forum.nameberry.com | baby-name forum | no | weak |
| 7 | nickname-generator.net/blog/halloween-nicknames | 250+ listicle, about 2,200 words | generic (gamers, groups, pets) | strong-ish |
| 8 | tiktok.com/discover | video | partly | weak |
| 9 | chewy.com | dog names | no | weak |
| 10 | thebump.com | baby names | no | weak |

**Weak count: 8/10** (the plan said 7). Gate 4 does not fire.

Top-5 analysis (the on-intent text pages; the rest have no analysable text):

| Page | Words | Headings | Direct answer | Data cited | Format | Tone | Optimising for |
|---|---|---|---|---|---|---|---|
| barrynames | ~3,750 | H1, H2 "Fun Fact", 9 H3 category tables (Cute, Funny, Spooky, Scary, Romantic/Gothic, Unique, Witchy, Cool, Candy), 5 FAQ H3s | After 3 intro paragraphs | None; an unsourced claim that Celts used fake names at Samhain | Tables (name, meaning, origin), FAQPage schema, dated 2026-01-11 | First person, padded | "halloween nicknames" head term, every audience at once |
| nickname-generator.net | ~2,200 | H1, 10 H3 sections (punny, cute, scary, generators, pop culture, duos/couples, pets, crafting, styling) | No direct answer; long intro | None | Lists, author byline, no FAQ schema | Chatty | Gamer handles, cross-sells generators |
| pinterest | ~0 | n/a | n/a | "261 people searched this" | Pin grid | n/a | Image engagement |
| facebook answers | 0 (empty on fetch) | n/a | Snippet: "pumpkin seed", "vanilla bean", "Halloween boy" | none | n/a | n/a | AI answer |
| tiktok | video | n/a | n/a | n/a | n/a | n/a | n/a |

## Phase 2: gap
- **Table stakes:** grouping by mood (cute, spooky, funny), a large list.
- **The gap:** nobody writes for a *boyfriend* specifically, nobody says *how or where* to use a name (text, card, caption, call), there is no long-distance or horror-fan segment, and nobody explains why pet names work. Neither page cites a source.
- **Stale or unsupported:** barrynames' Samhain fake-name origin story has no source. The post makes no origin claim.
- **Fan-out:** cute names for him; funny/punny; horror-fan; long distance; how to tell him; why couples use pet names; is a spooky name too dark; what if he hates pet names; can I use them all year; Instagram caption use.
- **Angle:** wins by being the only post that writes boyfriend-specific Halloween pet names with a use-line for each and explains why they work from two peer-reviewed studies, using the 48.3% phone-open share to argue for short names.

## Phase 3: sources (all fetched)

| Source | What I verified | Read | Date |
|---|---|---|---|
| Rauers, Schmiedek, Lindenberger, Riediger, *Frontiers in Developmental Psychology*, doi 10.3389/fdpys.2025.1649507 | 38 younger + 40 older couples; Taboo-based task; 1,763 cueing episodes coded; idiosyncratic cues enhanced efficiency in older couples; the age difference was not statistically reliable; both groups gained at high difficulty | Full text | 2025-11-04 |
| *Frontiers in Psychology*, doi 10.3389/fpsyg.2024.1498235 | 2 experiments, n=368 and n=370; "babies" from a human streamer raised closeness and attitude; for a virtual streamer, no nickname gave more closeness | Full text | 2024-12-24 |
| *Scientific Reports*, doi 10.1038/s41598-024-70979-2, via Europe PMC PMC11364825 | 332 mixed-gender + 139 same-gender couples, N=942; O/L/I playfulness linked to lower attachment insecurity; whimsical linked to cognitive/behavioural jealousy in actors | **Abstract only** (Europe PMC REST API; nature.com and PMC full text bot-blocked) | 2024-08-30 |
| Brendan McGowan, "Turnip Lantern Tradition", Galway City Museum | Turnip lanterns were called "Jack o' Lantern"; emigrants switched to pumpkins (more plentiful, easier to carve); will-o'-the-wisp lights over bogland | Full page | 2025-10-09 |

Searches run through findpapers (no budget): "couples personal idioms idiosyncratic communication", "pet names terms of endearment romantic relationship satisfaction", "baby talk intimate partners affectionate communication", "nicknames address terms intimacy", "Couples' personal idioms exploring intimate talk", "affectionate communication romantic partners stress", "long-distance romantic relationship texting maintenance", "playfulness in adult romantic relationships".

**Brief/prompt claim not usable:** the prompt suggested Bruess & Pearson on couples' personal idioms. Their paper is in *Western Journal of Communication* (Taylor & Francis), which BRIEF §5 bans. Hopper, Knapp & Scott (1981, *Journal of Communication*, doi 10.1111/j.1460-2466.1981.tb01201.x) is closed access, with its abstract elided by the publisher (Semantic Scholar, OpenAlex), and OUP returned 403. Neither is cited. The JSPR long-distance texting paper (Sage) was skipped for the same ban.

Wikipedia/Wikidata used only as `sameAs` (verified via API): Term of endearment Q1615964, Halloween Q251868, Jack-o'-lantern Q221009, Will-o'-the-wisp Q160569.

Capcheck (2026-10-12): none of my URLs or papers are at cap. frontiersin.org is now in 2 posts (mine + halloween-date-ideas-for-adults via a doi.org link). europepmc.org and galwaycitymuseum.ie are fine (europepmc is exempt).
