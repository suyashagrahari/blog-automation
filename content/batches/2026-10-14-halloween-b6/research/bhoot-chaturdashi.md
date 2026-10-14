# Research brief — bhoot chaturdashi (absorbs "bengal halloween")

Row 278 · slug `bhoot-chaturdashi` · batch 2026-10-14-halloween-b6 · written 2026-10-14

## Phase 0 — first-party data
No Halloween or Bhoot Chaturdashi usage data exists in facts.md. Used platform-wide lines only:
48.3% phone opens (first 150 words), Raksha Bandhan 2026 lead time 49.4% / 27.0% (labelled as a
different festival, n = 89, in the body), 38.5% password rate. Template spec used for feature lines.

## Phase 1 — SERP
Searches used: 1 WebSearch (US index) for "bhoot chaturdashi"; 1 DuckDuckGo HTML query
("bhoot chaturdashi 2026 date panjika kali puja", lower confidence) to find date sources.
Gate 1: "bhoot chaturdashi" is a 2-word head term, but an entity name with a weak SERP; the post
also targets long-tails ("bhoot chaturdashi 2026 date", "14 shaak names", "is bhoot chaturdashi
naraka chaturdashi"). Weak results in top 10: 6 (two film pages, SVF film-release pages x2, SheThePeople, India Currents).

| # | URL | Words | Headings | Direct answer | Data / dates | Format | Optimising for |
|---|---|---|---|---|---|---|---|
| 1 | en.wikipedia.org/wiki/Bhoot_Chaturdashi_(film) | — | film article | n/a | 2019 film | infobox | the film entity |
| 2 | homegrown.co.in (Bhoot Chaturdashi … 'Day of the Dead') | ~890 | H1 only | para 2 | none; pub 2024-10-19 | first-person essay, no table/FAQ | nostalgia piece; 14 lamps, Chamunda, radio ghost stories |
| 3 | en.wikipedia.org/wiki/Naraka_Chaturdashi | long | many | infobox | 2025 date only | infobox, sections | Naraka Chaturdashi entity, one Bengal paragraph |
| 4 | filmcompanion.in (film review) | — | — | n/a | 2019 | review | the film |
| 5 | shethepeople.tv (What is Bhoot Chaturdashi?) | ~610 | 1 H2, 1 H4 | after FOMO intro | none; pub 2024-10-29 | listicle-ish, no table | "Indian Halloween" framing; ghost types |
| 6 | indiacurrents.com (India has a Halloween of its own) | ~1,130 | 4 H2, 8 H3 | para 2 | none; pub 2023-11-11 | magazine | Karna/Mahabharat lore, "India's answer to Halloween" |

(403/429: none. Film pages judged from snippet only.)

Cannibalisation: b3 `halloween-in-india` SERP (serps.md row "is halloween celebrated in india") =
firstpost, indiatoday, timeanddate, indianholiday, reddit, facebook, youtube, quora… — **0 shared URLs**.
b4 `halloween-around-the-world` and b5 `is-halloween-a-public-holiday` SERPs are country/holiday hubs — 0 shared URLs measured.

## Phase 2 — gap
- Table stakes: 14 lamps for 14 ancestors; 14 greens; eve of Kali Puja; Halloween comparison.
- Gap: no page gives a date for 2026 or 2027; none names the 14 greens; none cites research;
  none has a table or FAQ; all lean on "Indian Halloween". None notices Bhoot Chaturdashi can fall
  on a different Gregorian date from Naraka Chaturdashi.
- Stale: the dated pages are 2023–2024 with no dates for the coming years.
- Fan-out: what is it / when in 2026, 2027 / same as Naraka Chaturdashi? / what are the 14 shaak /
  why 14 lamps / is it like Halloween / film vs festival / Bengali ghost types / greeting someone abroad.
- Angle: wins by being the only post that gives panjika-checked 2026/2027 dates (and the Naraka
  Chaturdashi split), names all 14 greens and ties them to the Ashwin–Kartik hunger season with a
  peer-reviewed study, using the 48.3% phone-open rate for the friend-abroad greeting.

## Phase 3 — sources (all fetched)
1. myastrology.in/en/utsab/bhoot-chaturdashi — Bisuddha Siddhanta dates: 7 Nov 2026 (tithi 10:49 am
   7 Nov–11:29 am 8 Nov, sunset 4:52 pm), 28 Oct 2027. Date/festival reference. Corroborated for 2026
   by banglacalendartoday.in/festivals/kali-puja-2026 (not cited).
2. drikpanchang.com Diwali calendar, Kolkata (geoname 1275004): 2026 Kali Chaudas 7 Nov; Narak
   Chaturdashi + Kali Puja 8 Nov. 2027: Narak Chaturdashi + Kali Puja 28 Oct. Cap-exempt.
3. bn.wikipedia.org ভূত চতুর্দশী (rev. 2026-08-11) — 14-green list, Raghunandana Krityatattva
   attribution, 14 forebears, Chamunda + 14 ghosts, Bali legend, West Bengal and Bangladesh,
   pre-sunrise Naraka oil bath. Wikipedia 1 of 0–2; flagged in audit (carries content).
4. gutenberg.org/ebooks/38488 — Lal Behari Day, Folk-Tales of Bengal, preface 27 Feb 1883;
   22 stories, 4 ghost titles; footnotes on Sankchinni and Brahmadaitya. Cap-exempt.
5. europepmc.org PMC3950545 — Azam et al. 2014, eCAM (Hindawi/Wiley, CC BY): 167 households,
   34 plants eaten during Monga; greater Monga in Ashwin–Kartik; includes Chenopodium album,
   Enhydra fluctuans, Marsilea minuta. Full text read. Peer-reviewed, open access.
6. bjpsychiatry.org BJPSY-30-1-3 (2025) — Bengali cinema and mental health review: the 2019 film
   conflates psychosis/delusion with possession. Full text read. Peer-reviewed, diamond OA.

Searched without result (Europe PMC, OpenAlex, Crossref): "Bhoot/Bhut/Bhuta Chaturdashi",
"choddo shak", "chaturdasha shak", "fourteen leafy vegetables", "Raghunandana Krityatattva",
"Kali Puja AND ghost". Rejected: Arc 2015 "From Ghost to Goddess" (Gujarat, off-subject); Oraon
study (Taylor & Francis, banned); Sylhet food–medicine (Elsevier, banned); ICAR Indian Horticulture
2020 (already used by b3 for the same fact).

## Corrections to the task framing
- "Same day as Naraka Chaturdashi": false for 2026 in Kolkata (Narak Chaturdashi 8 Nov, Bhoot
  Chaturdashi 7 Nov). "Eve of Kali Puja": true in 2026, but in 2027 both fall on 28 Oct.
- Sibling b3 `halloween-in-india` tables Bhoot Chaturdashi 2026 as "8 Nov listed"; panjika sources give 7 Nov.
