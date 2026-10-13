# Research brief — halloween colors meaning (row 190)

- Slug: `halloween-colors-meaning` · theme: global · absorbs: "what halloween colours", "why are halloween colors orange and black" · plan weak: 6
- Searches used: **2 WebSearch** (US index). #1 the keyword (SERP). #2 blue-bucket origin and criticism (source discovery). No Firecrawl, no browser tools, no DuckDuckGo.
- Phase 0: content/facts.md read directly (no `npm run facts`). No Halloween data exists. Used three platform-wide lines, labelled as platform-wide: 48.3% phone opens, 48.4% touch-device views, 90.9% publish rate.

## Phase 1 — SERP (WebSearch, US index, 2026-10-13)

| # | URL | Type | Notes |
|---|---|---|---|
| 1 | nbcwashington.com/holidays/halloween-colors-meanings/3743400/ | TODAY.com syndication | Fetched |
| 2 | nbcdfw.com/holidays/halloween-colors-meanings/3672671 | same article | duplicate |
| 3 | nbcwashington.com AMP | same article | duplicate |
| 4 | nbcnewyork.com/holidays/halloween-colors-meanings/5894583/ | same article | Fetched, identical |
| 5 | nbcnewyork.com AMP | same | duplicate |
| 6 | nbcsandiego.com/holidays/halloween-colors-meanings/3650430 | same | duplicate |
| 7 | static.intrafocus.com/?p=57266 | hijacked-subdomain spam | TLS cert mismatch, not fetched; WEAK |
| 8 | mondaymandala.com/halloween-colors/ | coloring-page site listicle | Fetched; WEAK |
| 9 | nbcphiladelphia.com/holidays/halloween-colors-meanings/4001103/ | same | duplicate |

The top 10 is effectively **3 distinct pages**. Weak: 2 (intrafocus spam, mondaymandala). Gate 4 not triggered.

| Page | Words / structure | Direct answer | Entities, data | Format | Tone / optimising for |
|---|---|---|---|---|---|
| TODAY (via NBC) — Zito & Lemire, pub 16 Oct 2024, upd 3 Jun 2026 | ~1,100; H2 "Halloween colors and their meaning" → H3 Orange and black, Purple and green; H2 "The psychology of color" | Buried after ~150-word intro | Lisa Morton (yellow and brown in early-1900s party guides; jack-o'-lanterns ~1910); 1939 Wizard of Oz green witch (speculative); Kate Smith (sensationalcolor.com); Bed Bath & Beyond stylist; Mental Health America color moods | No table, no FAQ, no sources list, byline | Conversational, expert-quote led; optimises for "why orange and black" |
| mondaymandala.com | ~3,000+; 27 H3 colors | Intro, no direct answer | Dennison 1909 (via marthastewart.com), Roman mourning, Victorian black; no dates on data | Long list, images, no table | Generic listicle; optimises "halloween colors" breadth |
| intrafocus (spam) | n/a | n/a | n/a | n/a | not analysed |

## Phase 2 — Gap

- **Table stakes:** orange = pumpkins/harvest, black = night/death/witches, purple and green as later additions, a color-psychology note.
- **Gap:** no page cites a primary historical document (TODAY relies on an interview, mondaymandala on a competitor page); no evidence grading; no teal or blue (access signals) on either ranking page; no hex codes; no cross-cultural note; no peer-reviewed color-emotion numbers.
- **Stale / unsourced:** Mental Health America color moods (undated, no study); "Dennison 1909" (secondhand).
- **Unanswered:** when did orange replace yellow? Is any meaning really from Samhain? What does teal / blue mean at the door?
- **Fan-out:** what do the Halloween colors mean · why orange and black · official colors? · Samhain origin? · purple meaning · green/witch · teal pumpkin · blue bucket · white / red meaning · color psychology · cross-cultural white/saffron · palette hex codes.
- **Angle:** wins by being the only post that grades each color's meaning by evidence, using the 1919 primary text, our own color-word count of a 1920s Dennison catalogue (orange 73, purple 0), two open-access color-emotion papers, and SubhSandesh's 48.3% phone-open share.

## Phase 3 — Sources (all fetched and read)

| Source | What it supports | Read | Date |
|---|---|---|---|
| archive.org — Kelley, *The Book of Hallowe'en* (Lothrop, Lee & Shepard, c1919) | p.156 "The prevailing colors are yellow and black: a deep yellow is the color of most ripe grain and fruit; black stands for black magic and demoniac influence." | Full OCR text | 1919 |
| archive.org — *Dennison's Bogie Book*, 13th annual edition | "Decorate the living rooms with vivid orange and black"; "very faint green lights"; own count orange 73, black 34, white 17, green 8, red 7, yellow 5, purple 0. Catalogued 1920, but the text reprints a story from "the 1924 edition" → mid-1920s | Full OCR text | mid-1920s |
| europepmc PMC12325498 — Jonauskaite & Mohr 2025, Psychon Bull Rev (Springer, CC BY) | 132 articles 1895–2022, 42,266 participants, 64 countries; orange–joy 76%, black–sadness 75%, black–fear 68%; purple mixed; white positive/low arousal; green calm, envy in some; light = positive, dark = negative | Full text | 2025-01-13 |
| europepmc PMC6774957 — Jonauskaite et al. 2019, R Soc Open Sci (CC BY) | 711 participants (China, Germany, Greece, UK), 12 colour terms × 20 emotions; in-group advantage 6.1%; white more negative in China, "white is the colour commonly worn at funerals" in China; red danger/anger (US, UK, France, China) and positive (Spain, UK, China) | Full text | 2019-09 |
| foodallergy.org Teal Pumpkin Project (FARE) | Began with Becky Basalone's East Tennessee family; FARE national adoption 2014 | Page | undated |
| fullfact.org (24 Oct 2019) | Blue buckets not an official campaign; started with a mother's 2018 Facebook post; reposted by Autism Speaks; some in the autism community reject it over that link; blue also used for allergies | Full page | 2019-10-24 |

Verification only (not linked, outbound budget 6): en.wikipedia API "Flag of India" (Radhakrishnan: saffron "denotes renunciation or disinterestedness"); "Mourning" (white traditional mourning color in Chinese culture); "Antyesti" (white cloth in Hindu rites — not used, too indirect for a mourning-color claim).

Rejected: Jonauskaite et al. 2020 Psychological Science (SAGE, banned); i-Perception 2020 (SAGE); Frontiers color-emotion papers (banned); PLOS ONE / Sci Rep (megajournals); National Autism Association blue-bucket page (used by porch); competitor/TODAY quotes (Morton, Kate Smith, MHA) not reused.

Search terms tried (findpapers / Europe PMC / archive.org APIs, no search budget): "colour emotion associations cross-cultural", "color associations black death mourning", "white mourning funeral China colour symbolism", "food allergy Halloween trick-or-treating", "autism awareness blue puzzle autistic community views", Europe PMC `AUTH:"Jonauskaite D"`, archive.org Hallowe'en titles 1890–1925 (Orne 1898 "red and yellow" decorations and Guptill 1915 "red and black, or orange and black" found but not cited for link budget).

Caps: europepmc.org and archive.org are cap-exempt; foodallergy.org URL now in 2 b4 posts (porch + this) — URL cap reached; fullfact.org new to b4.

## Brief / prompt claims found false or unsupported
1. archive.org dates the Bogie Book 1920; internal evidence says mid-1920s.
2. "Autistic-led groups have mixed views" — the fetched source supports only "some people in the autism community"; no autistic-led group statement was fetched.
3. foodallergy.org was not at cap before this post (1 b4 post).
