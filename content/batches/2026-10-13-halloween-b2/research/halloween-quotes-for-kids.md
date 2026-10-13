# Research brief — halloween quotes for kids (row 51)

Slug `halloween-quotes-for-kids` · absorbs "halloween quote for kid", "halloween quotes for toddler" · band 10,000+/mo · PLAN weak = 3.

## Phase 0 — first-party data
No Halloween usage data in facts.md (BRIEF §3). Used platform-wide lines only, labelled as such in the body:
- 48.3% of shared pages are opened on a phone (27,725 of 57,456 views) — measured 2026-09-24
- Average views per created page: 11.1 — measured 2026-09-24
- 48.4% of views are on a touch device (phone or tablet) — measured 2026-09-24

Template facts from `template-spec.md` only (kids tone, six photos, letter by flashlight, email on first answer, "Will you be my favourite little pumpkin?", premium voice note 60 s and no No button for kids, English UI). `npm run facts` not run.

## Phase 1 — SERP
1 WebSearch used ("halloween quotes for kids"; Firecrawl disconnected; US-served index, so UK/AU/IN unmeasured). Result order:

| # | URL | Weak? | Notes |
|---|---|---|---|
| 1 | singing-bell.com/halloween-quotes-for-kids | no | 44 lines, almost all *Nightmare Before Christmas* (1993) film dialogue; H2s Short / Funny / Cute; intro on Celtic origins; no ages, no research |
| 2 | static.intrafocus.com/?p=56788 | **weak (hijacked-subdomain spam)** | not analysed |
| 3 | netbox.point-broadband.com/?p=15592 | **weak (spam)** | not analysed |
| 4 | quotegarden.com/halloween.html | no | flat list of attributed quotes and verse (Baum 1899, Whittier, Jane A. Stewart 1914); no structure, no kids filter; some darker lines |
| 5 | scarymommy.com/halloween-quotes | no | "105 Spooky Halloween Quotes" (updated 2021-09-17); adult famous quotes (Stephen King, Shakespeare, Poe); not kid-specific |
| 6 | istock.hardhattraining.com (trick-or-treat memories) | **weak (spam subdomain)** | not analysed |
| 7 | educatorstechnology.com/2024/10/popular-halloween-quotes-and-phrases | no | numbered famous quotes (Brault, Shakespeare, film/TV) for teachers; no age guidance |
| 8 | goodreads.com/work/quotes/42797497 | **weak (joke-book quote page, off-intent)** | |
| 9 | momjunction.com Halloween songs & poems for kids | no | 26 songs/poems incl. Poe's "The Raven" pitched at children; video; no reading levels |

Weak in top 9: **4** (3 spam + Goodreads); PLAN said 3. Gate 4 passes.

Top-5 analysed (fetched with ctx_fetch_and_index): Singing Bell, Quote Garden, Scary Mommy, Educators Technology, MomJunction. All third-person listicles; none answers in the first paragraph; no tables; none cites research; none sorts by age or reading level.

## Phase 2 — gap
- Table stakes: short / cute / funny lines; some classic verse.
- Gap: no page sorts by age or reading stage; no toddler lines; no decodable lines for early readers; no brave-not-scary lines; the only kid-specific page relies on 1993 film dialogue; nobody explains why rhyme matters; nobody quotes children's verse exactly with dates; MomJunction offers "The Raven" for children with no fright warning.
- Fan-out → H2/FAQ: what makes a quote kid-safe; why rhyme helps; toddler/preschool/early-reader/tween lines; classroom board; nervous kids; treat-bag tags; public-domain verse; length by age (table); sending to a far-away child; when not to.
- Angle: wins by being the only post that sorts original kid-safe lines by reading stage, grounded in measured rhyme-skill-by-age data, with exact 1885 verse instead of film dialogue.

## Phase 3 — sources (all fetched)
| Source | What it supports | Access |
|---|---|---|
| Grofčíková & Máčajová 2021, CEPS Journal 11(1), doi 10.26529/cepsj.685 — https://files.eric.ed.gov/fulltext/EJ1296910.pdf | 866 Slovak children 4–7; completion 74.2% (4.0–4.5), 80% (4.6–5.0), 90.8% (6.6–7.0); production 33.4% → 72.8% | full text (PDF) |
| Goswami 2022, Royal Society Open Science, PMC9326295 — europepmc | nursery rhymes, knee-bouncing and clapping games integrate repetitive language with repetitive rhythm | full text, CC BY |
| Harper 2011, J. Language & Literacy Education 7(1) 65–78 — https://files.eric.ed.gov/fulltext/EJ1097164.pdf | 20 three-year-olds (11 vs 9); ten rhymes, 15–20 min weekly, ten weeks; significant gains on rhyme awareness and completion | full text (PDF); small n stated in body |
| Destro Pastizzaro et al. 2026, BMC Psychology, PMC13640393 — europepmc | 21 studies 2009–2024, 20 reported improved linguistic performance | full text, CC BY |
| Riley, "Little Orphant Annie" — gutenberg.org/ebooks/9777 (Riley Child-Rhymes) | exact text; 1885 date and "The Elf Child" first title verified via Wikipedia API extract (Q6651249) | exempt domain |
| Stevenson, A Child's Garden of Verses — gutenberg.org/ebooks/136 | exact text of "The Moon", "Windy Nights", "My Shadow", "Young Night-Thought"; 1885 and 64 poems verified via Wikipedia (Q4655846) | exempt domain |

Considered, not cited: Bryant et al. 1989 (J Child Lang; ERIC abstract only); Frontiers papers (trap publisher); no SAGE / T&F / Elsevier used. Searches: findpapers "nursery rhyme knowledge phonological awareness children", "rhythm sensitivity phonological awareness preschool reading", "rhyme awareness early literacy", "speech rhythm amplitude modulation dyslexia children Goswami"; ERIC API "nursery rhymes phonological awareness".

## Originality check
All 52 original lines checked for 5-word overlap against every Batch 1 and Batch 2 sibling file: 0 overlaps (october-quotes and witch-quotes were not yet on disk at check time; four draft lines that overlapped halloween-messages-for-kids were rewritten). No line from halloween-quotes, halloween-jokes-for-kids, halloween-messages-for-kids or halloween-wishes-for-grandchildren reused; Riley and Stevenson were not used by any sibling.
