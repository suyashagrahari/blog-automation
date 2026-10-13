# Research brief — things to do on halloween instead of trick or treating

Row 186 · slug `things-to-do-on-halloween-instead-of-trick-or-treating` · theme party · absorbs "halloween ideas instead of trick or treating" · batch 2026-10-13-halloween-b4 · written 2026-10-13.

## Phase 0 — first-party data
No Halloween usage data exists in facts.md (BRIEF §3). Used, verbatim:
- Raksha Bandhan 2026 lead time line (49.4% built on the festival day) — labelled as the nearest analogue, in the opening.
- 48.3% of shared pages opened on a phone (2026-09-24) — opening.
- Average views per created page: 11.1 (2026-09-24) — card section, labelled platform-wide.
The template spec (template-spec.md) supplies the Kids-tone and premium features.

## Phase 1 — SERP (WebSearch, US index, 1 search; label: "WebSearch (US index)")

| # | URL | Type | Words / structure | Direct answer | Data cited | Format | Notes |
|---|---|---|---|---|---|---|---|
| 1 | familius.com/31-halloween-activities-to-do-instead-of-trick-or-treating | Publisher blog (2023) | ~1,500; 31 numbered H2s | Intro mentions safety, candy, boredom, then list | None | List, book promos | Undifferentiated list: trick-or-treat at home, trunk-or-treat, costume party/parade/swap, virtual contest, movies… No ages, costs, reasons or sources |
| 2 | seattleschild.com/?p=16276 | Local parenting magazine | Fetched page was a generic "5 fun ideas for your family this Halloween" | n/a | None | Short list | Weak; not about alternatives specifically |
| 3 | annarborfamily.com/feature/what-to-do-instead-of-trick-or-treating | Local parenting magazine | ~600; bold sub-heads | Buried | None | Short list | Pumpkins, bobbing apples, mummy wrap, ring toss |
| 4 | qc.wawanesa.com/us/blog/8-halloween-activities-to-replace-trick-or-treating | Insurance blog | Fetch failed (TLS cert mismatch) — judged from snippet | — | — | 8 items | Weak |
| 5 | yourmodernfamily.com/alternatives-trick-or-treat | Mom blog (2019, upd. 2020) | ~700; 5 items | Para 2 | None | List, affiliate | Hourly games, decorate pumpkins, bake cookies, Chuck E Cheese |
| 6–9 | familius.com/?p=14284 (dup), annarborfamily.com/?p=84164 (dup), hercampus.com, thegnainsider.com (student paper) | Weak | — | — | — | — | Snippet only |

Weak results in top 10: 7 of 9 (local magazines, mom blog, insurance blog, student press, duplicates). Gate 4 passes.

## Phase 2 — gap analysis
- **Table stakes:** costume party, movie night, pumpkin decorating, trunk-or-treat, at-home candy hunt, baking.
- **The gap:** no page organises alternatives by the *reason* a family skips (weather, rural/unsafe road, sensory/disability, food allergy, faith, toddlers, teens, staying home); none gives age bands, costs or inclusion notes; none cites any research; none covers religious alternatives (church Light Parties) or teens.
- **Stale data:** pages carry no data at all; YMF dates from 2019.
- **Fan-out sub-queries:** what to do instead of trick-or-treating with an autistic child / food-allergy child / toddler / teen; what is a Light Party; rainy-Halloween ideas; is it okay to skip; when is Halloween 2026/2027.
- **Angle:** wins by being the only post that sorts alternatives by the reason a family skips trick-or-treating, with age band, cost and inclusion note per idea, backed by two 2026 open-access studies and a verified church Light Party.

## Phase 3 — sources (all fetched)
1. **de Oliveira et al. 2026, Autism Research 19(9):e70316** — https://europepmc.org/article/PMC/PMC13599684 (Wiley OA, CC BY; epub 2026-07-19). Full text XML read. 80 Brazilian caregivers of autistic children 5–12; 33 named sensory qualities as support and barrier; low participation may reflect protective choices against unwelcoming/unsafe contexts rather than lack of desire.
2. **Nocerino et al. 2026, Pediatric Allergy and Immunology 37(2):e70295** — https://europepmc.org/article/PMC/PMC12900628 (Wiley OA, CC BY; epub 2026-02-12). Full text XML read. 73 children with food allergy, Naples; 35.6% bullied in past 2 months, 27.4% cited FA as motive; some avoided birthday parties.
3. **National Autistic Society, Autism and sensory processing** — https://www.autism.org.uk/advice-and-guidance/about-autism/sensory-processing (undated). Tell the person what to expect; safe space away from triggers; ear defenders, sunglasses, fidget toys. (Different from the nationalautismassociation.org page used by b4 porch.)
4. **St Saviour's Church, Bournemouth — Messy Church Light Party** — https://www.stsaviours.net/event/messy-church-light-party/ (datePublished 2026-10-10). 31 October, 5:30–7 pm; crafts, bouncy castle, glow sticks, fancy dress competition, disco, cafe; entry by donation.
5. **Church of England, A Church Near You search** — https://www.achurchnearyou.com/search/?text=light%20party (undated). "Light party" and "Harvest" are listed event tags.

Searches tried (findpapers): "sensory friendly events autistic children families participation" (top Crossref hit was Frontiers — banned), "community participation children autism leisure barriers parents", "food allergy children social exclusion holidays parties", "Halloween children" (nothing usable), "sensory processing children leisure participation" (Children/MDPI megajournal hits avoided), "children food allergy birthday parties exclusion" (Irish socializing study is Elsevier — banned).

Avoided: b2/b1 sources (CDC MMWR, Hsu, Leung, Joel Best, Teal Pumpkin/FARE), nationalautismassociation.org, Frontiers, SAGE, T&F, Elsevier, MDPI. Wikipedia: none in body (sameAs only).

## Sibling de-duplication
Read H2/H3s and item names of b2 things-to-do-on-halloween-night, b3 halloween-ideas-for-kids, b4 halloween-ideas-with-friends, b4 halloween-sleepover-ideas, and b1/b2 party posts. Dropped: indoor room-to-room trick-or-treat (b2 + Familius), orange-rice spider hunt, torch reading den, bat watch (b3), night hike, corn maze, horror short film (friends), time capsule (sleepover — swapped for a window silhouette show), escape room/karaoke (b2), snap-apple and ring toss (b1). Trunk-or-treat given one line (row 195 owns it). 5-word overlap check run against all Halloween batch files: remaining shared 5-grams are dates, the keyword itself and verbatim-adjacent first-party figures.

## Brief claim found false
Prompt: "/happy-halloween in Kids mode (no No button for kids, per spec)". template-spec.md: in /happy-halloween Kids tone "the No button waits as 'maybe later?'"; only /happy-halloween-premium never shows the No button for family and kids. The post states the spec.
