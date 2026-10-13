# Research brief: halloween wishes for grandchildren

- Row 40 · slug `halloween-wishes-for-grandchildren` · absorbs "halloween wishes for grandkids", "halloween wishes for granddaughter" · PLAN weak count 4
- SERP: Firecrawl search, `location: "United States"`, 2026-10-12 (1 SERP search, plus 1 Firecrawl search restricted to aarp.org for the distance statistic = 2 searches total)

## Phase 1: SERP (US)

| # | URL | Type | Weak? |
|---|---|---|---|
| 1 | boomf.com/blogs/inspiration/happy-halloween-grandson | Card retailer blog, grandson lines + card catalogue | Yes (thin, product-led) |
| 2 | ideas.hallmark.com halloween-wishes-what-to-write | Card brand mega-list (Oct 2024) | No |
| 3 | greetingcarduniverse.com grandchildren/grandson | Product category page | Yes |
| 4 | pinterest.com "10 cute Halloween wishes for your grandson" | Pin | Yes |
| 5 | amazon.com Halloween cards for grandchildren | Product search page | Yes |
| 6 | boomf.com halloween-wishes-to-granddaughter (Jun 2022) | Card retailer blog | Yes (thin) |
| 7 | americangreetings.com halloween-messages | Card brand list | No |
| 8 | today.com halloween-greetings (101 lines) | Publisher list | No |
| 9 | greetingcarduniverse.com grandchildren/granddaughter | Product category page | Yes |
| 10 | cardsnacks.com halloween-messages (Aug 2026) | E-card brand list | No |

**Weak count measured: 6/10** (PLAN said 4). Gate 4 passes.

### Top-5 article analysis

| Page | Length/structure | Direct answer | Data cited | Format | Optimising for |
|---|---|---|---|---|---|
| Boomf grandson | Short; summary-only read (ctx_fetch 429, Firecrawl summary) | Intro sells cards | None | Lines + product grid | "happy halloween grandson" card sales |
| Boomf granddaughter | Short, 2022; HTTP 429, read via SERP snippet only | No | None | Lines + products | granddaughter card sales |
| Hallmark | ~3,000 words, H2s by tone and recipient (Kids, Friends, Family, Religious...) | Buried after origins section | None | Bullet lists | Generic "what to write in a Halloween card" |
| CardSnacks | ~2,000 words, by relationship (Boo, Kids, Friends, Coworkers) + FAQ | Formula after long intro | None | Numbered lists | E-card sign-ups |
| TODAY | 101 lines by style (short, funny, spooky) | No | None | Bullets | Broad "halloween greetings" |
| American Greetings | HTTP 403, not read | — | — | — | — |

Limitation: two Boomf pages were rate-limited (429) and American Greetings returned 403; their content was judged from SERP snippets and a Firecrawl summary only.

## Phase 2: Gap

- **Table stakes:** a list of copyable lines; kid-friendly puns; grandson/granddaughter framing.
- **Gap:** nobody sorts by the grandchild's age (toddler / 4–7 / 8–12 / teen / adult), nobody covers teens without cringe, adult grandchildren, step-grandchildren, money in the card, a hard year, or long-distance logistics on 31 October (video-call trick-or-treat, posting a parcel, photo request). No page cites any research or dates.
- **Stale data:** none cited anywhere.
- **Fan-out sub-queries:** what to write as a grandparent; length by age; teen grandchild; money in card; step-grandchild; long distance; what to mail; toddler-safe spooky; granddaughter; Halloween date 2026/2027.
- **Angle:** wins by being the only post that sorts the wishes by age and situation with a long-distance plan, grounded in AARP distance data, a 2026 love-and-pride study and SubhSandesh's 48.3% phone-open rate.

## Phase 3: Sources (all fetched)

1. AARP 2018 Grandparents Today National Survey, https://www.aarp.org/pri/topics/social-leisure/relationships/aarp-grandparenting-study/ (published 2019-04-04, updated 2024-08-15; online n=2,654, fielded 20 Aug–4 Sep 2018): over half have a grandchild living more than 200 miles away; about a third live more than 50 miles from the closest; phone contact went from 70% (2011) to 46% (2018).
2. AARP 2026 "Powering Families", https://www.aarp.org/pri/topics/social-leisure/relationships/the-essential-role-of-grandparents/ (published 2026-06-16; ~3,300 grandparents surveyed 2025): 76% say texting, video calls and so on are a primary way they stay connected; 19% have step-grandchildren. **No distance statistic is on this page**, so the distance figure comes from the 2018 survey (the latest AARP figure published on distance). The 2011 AARP page (69% within 50 miles of closest) was older and not used.
3. Chereches, Brehmer, Olaru & Ballhausen 2026, J Gerontol B, CC BY, https://europepmc.org/article/PMC/PMC13143431: 125 grandparents, 5 days × 6 assessments; grandchild contact means more love and pride, and more positive words. Full text read. (OUP journal linked via Europe PMC, so the last academic.oup.com slot stays free.)
4. Neely et al. 2026, Infancy, CC BY, https://europepmc.org/article/PMC/PMC12790811: 47 infant-parent-grandparent triads on Zoom; play repertoire was greater on video chat than in person; age was the strongest predictor; a dropped connection was turned into peek-a-boo. Full text read.

Searched via findpapers: "grandparent grandchild contact wellbeing", "long-distance grandparenting video calls", "grandparents video chat grandchildren". Rejected: Frontiers papers (cap full), Genus 2022 Italy digital contact (not found in Europe PMC; not needed).

Wikidata QIDs verified via the Wikipedia API: Grandparent Q167918, Halloween Q251868, AARP Q463410, Videotelephony Q854954, Trick-or-treating Q47195.

## First-party (facts.md, verbatim)
48.3% phone open; 90.9% published; 11.1 views per page; 38.5% password; Raksha Bandhan lead time (labelled as a different festival, n = 89). No Halloween data was used or implied.

## Notes
- Parcel guidance is kept generic: no USPS or Royal Mail dates were cited because none were sourced (search budget spent).
- Every line is original. One line coincided with a sibling written in parallel (halloween-messages-for-adults, "from the far side of the map") and was rewritten.
- Slug is free in Strapi (checked 2026-10-12).
