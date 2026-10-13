# Research brief — halloween ideas for your girlfriend

- **Slug:** `halloween-ideas-for-girlfriend` · **Theme:** couple · **Batch:** 2026-10-12-halloween-b1 (row 4)
- **Also covers:** halloween girlfriend ideas, halloween for girlfriend
- **Searches used:** 1 Firecrawl (`location: "United States"`, limit 10, web only). 0 WebSearch.
- **Split from siblings:** this page = gestures made *for her*, organised by what she loves about the season (cosy-autumn, horror fan, costume-and-party, sceptic, far away), each with 3–4 ideas, rough cost/time and one "don't". Not gifts to buy (boo-basket post), not couples costumes, not date plans for two (date-idea posts), not a relationship-stage planner (`halloween-for-boyfriend-and-girlfriend`), and not the effort-tier structure of `halloween-ideas-for-boyfriend`. No `/blog/` links.

## Phase 0 — first-party data (content/facts.md, read only; `npm run facts` NOT run)

No Halloween usage data exists. Used platform-wide lines plus the Raksha Bandhan lead-time line, labelled as an analogue:
- Most-viewed template: love-gf — 17,093 views, 29.7% of all page views (first 150 words; sceptic row of the table)
- 48.3% of shared pages opened on a phone (first 150 words; table; wrong-choice section)
- 11.1 average views per created page (table)
- 38.5% of creators password-protect (table)
- Raksha Bandhan 2026 lead time, n = 89: 49.4% built on the day, 27.0% day before, median 0 days (timing section, labelled analogue)

Template spec (`template-spec.md`) used for product claims only: knock three times, jack-o'-lantern word, up to six photos, flashlight letter, "Will you be my boo?" with running No button, first-answer email; premium voice note ≤60 s, ≤12 photos, letter ≤3,000 chars, unlock time with countdown, chorus moment, one reply ≤280 chars. HowTo times PT5M / PT10M. No pricing claims (facts.md Pricing block is empty).

## Phase 1 — SERP (Firecrawl, US, 2026-10-12)

| # | URL | Type | Weak? | Notes |
|---|---|---|---|---|
| 1 | reddit.com/r/halloween … halloween_cute_ideas_for_gf | forum thread | weak | 403 to ctx_fetch; Firecrawl refuses reddit. Excerpt only: one DIY idea (paint ghosts on thrift-store art). |
| 2 | halloweencostumes.com/couple-costume-ideas.html | retailer category | weak | Product grid of couples costumes; ~150 words of SEO copy; no ideas for a girlfriend specifically. |
| 3 | pinterest.com/ideas/girlfriend-costumes | image board | weak | Tag links and pins only. |
| 4 | goodhousekeeping.com … couples-costume-ideas-halloween | editorial gallery (57 items) | strong | Costume gallery with DIY notes per costume; direct answer is "lean into shared humour, horror, pop culture"; no data, no costs, no FAQ. |
| 5 | pinterest.com/ideas/halloween-gifts-for-girlfriend | image board | weak | — |
| 6 | etsy.com/market/halloween_girlfriend_gifts | marketplace | weak | Product listing. |
| 7 | cosmopolitan.com … scary-halloween-costumes | editorial gallery (45 items) | strong | Scary costumes; first-person intro; no relevance to "for your girlfriend". |
| 8 | thepioneerwoman.com … halloween-date-ideas | editorial list (31 items) | strong-ish | Title still says 2025; date ideas for two (haunted hotel, escape room, drive-in, cabin); affiliate links; no costs, no research. |
| 9 | tiktok.com/shop … boyfriend-and-girlfriend-ideas-for-halloween | shop | weak | — |
| 10 | fancydress.com … couples-halloween-costume-ideas | retailer blog | weak | 30 couples costumes. |

**Weak count: 7/10** (matches PLAN.json `weak: 7`). Gate 4 passes. Intent is fragmented: costumes (5), gifts/shop (3), date ideas (1), forum (1). No result answers "what do I do for her" by her taste.

## Phase 2 — gap

- **Table stakes:** costume ideas for two, scary-movie night, pumpkin patch/carving, haunted house.
- **Gap:** nobody segments by what the girlfriend actually likes; nobody gives cost and time per idea; nobody says what NOT to do (jump-scare pranks on someone who hates them, gore for a suspense fan, a surprise matching costume over her own plan); nobody handles long distance or the Halloween sceptic; zero research cited anywhere.
- **Stale data:** Pioneer Woman title still "2025"; no page cites a dated statistic.
- **Fan-out sub-queries → H2/FAQ:** what to do if she hates scary things; is pranking her OK; cheap ideas; long-distance Halloween; couples costume yes/no; how far ahead to plan; haunted house with a nervous partner; what to write in a note; sending a Halloween page on WhatsApp.
- **Angle:** Wins by being the only post on a costume-and-shop-dominated SERP that sorts Halloween gestures by what she loves (cosy, horror, costume, sceptic, far away), with a cost, time and one research-backed "don't" per type, using SubhSandesh's own 48.3% phone-open rate and love-gf's 29.7% share of page views.

## Phase 3 — sources (all fetched; full text read via Europe PMC fullTextXML or the author PDF)

| Source | Used for | Access |
|---|---|---|
| Martin 2019, Frontiers in Psychology, PMC6813198 (CC BY), 18 Oct 2019 | individual differences in horror enjoyment (fearfulness, empathy, sex difference on average; disgust sensitivity may mediate); startle reflex/jump scare is horror's most-used device | full text |
| Clasen, Andersen & Schjoedt 2019, Poetics (Elsevier), pure.au.dk author PDF, 25 Jan 2019 | n=280 haunted-house visitors; 149 maximise vs 131 minimise fear; satisfaction relatively similar; fear-avoiders 12.2% physical contact, 9.9% stay close | full text (author PDF) |
| Maffei et al. 2026, Psychophysiology (Wiley, CC BY), PMC12888949, 10 Feb 2026 | n=70 TSST; partner-present women felt more supported (6.41 vs 2.96 /10) than stranger-present; proximity buffered startle inhibition | full text |
| Huh & Andreu-Sánchez 2025, PLOS One (CC BY), PMC12221085, 2 Jul 2025 | n=260; emojis → higher perceived responsiveness → closeness and satisfaction (friends' conversations, not partners' — caveated in body) | full text |

**Dropped:**
- Andersen et al. 2020 "Playing With Fear" (Psychological Science) and Hye-Knudsen et al. 2024 "First They Scream, Then They Laugh" (Evolutionary Psychology) — both SAGE journals, banned by BRIEF §5.
- Kiss et al. 2024, Scientific Reports — already cited by 3 sibling posts (boyfriend, free-date-ideas, date-ideas-at-home), over the 2-post paper cap; flagged for the orchestrator.
- Wiley et al. 2026 "Haunted attraction" (Emotion, APA) — paywalled, no abstract via Crossref.
- NRF Halloween survey — nrf.com already at the 3-post domain cap; not needed (no spending claim made).

findpapers queries: "recreational fear haunted attraction enjoyment"; "why people like to be scared voluntary arousing negative experiences" (Crossref 429); "individual differences enjoyment horror fear sensation seeking"; "long distance romantic relationship mediated communication intimacy"; "perceived partner responsiveness everyday gestures relationship satisfaction"; "startle reflex anxiety individual differences magnitude"; "haunted house recreational fear mood".

Entities (Wikipedia API verified): Halloween Q251868; Haunted attraction Q1139917; Horror film Q200092; Jack-o'-lantern Q221009; Startle response Q430986. No Wikipedia links in the body.

## Brief claims checked

- Halloween 31 Oct; 2027 is a Sunday — matches BRIEF §1 (only 2027 weekday printed).
- PLAN.json weak = 7 — confirmed by the live SERP (7/10).
- BRIEF bans "Sage" but does not flag that Psychological Science (the best-known haunted-house study) is a SAGE title; easy to cite by accident.
- `pmc.ncbi.nlm.nih.gov` serves a reCAPTCHA page to ctx_fetch; Europe PMC fullTextXML works for the same ids.
