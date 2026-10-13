# Research brief — happy halloween wishes (row 37)

Slug `happy-halloween-wishes` · theme messages · WISHES HUB (absorbs greetings, card messages, messages/texts to send — 13 variants per PLAN.json).

## Phase 0 — first-party data
No Halloween usage data exists in facts.md. Used platform-wide lines, labelled as such in the body:
- 48.3% of shared pages opened on a phone (2026-09-24) — opening + table + limits section
- 11.1 average views per created page (2026-09-24) — opening + table
- 90.9% of started pages published (2026-09-24) — table
- Raksha Bandhan 2026 lead time, n=89, 49.4% built on the day (2026-09-09) — timing section, disclosed as non-Halloween analogue with small n
Template spec (/happy-halloween, /happy-halloween-premium) used for product features only.

## Phase 1 — SERP (Firecrawl, location United States, 1 search used)
| # | URL | Type | Notes |
|---|---|---|---|
| 1 | 1800flowers.com halloween-greetings | flower retailer (competitor) | ~1,300 words, 75 lines, H2s: general / sweet / spouses. No date, no table, no FAQ, no research |
| 2 | pinterest.com (board) | WEAK | image board |
| 3 | goodhousekeeping.com crafts for kids | off-intent | crafts, not wishes |
| 4 | yahoo.com (Parade syndication) | listicle | ~1,650 words, 115 lines, dated 2025-10-30; H2s: greetings, short, texts, kids, partners. No timing, no research |
| 5 | cardsnacks.com | e-card competitor | ~3,600 words incl. nav, dated 2026-08-25; "by relationship" H3s (partner, family, sibling, coworker, kids), card FAQ (schedule, text/email). Cites only its own gift-card sales %s |
| 6 | facebook.com page | WEAK | |
| 7 | myglobalflowers.com | flower retailer | ~3,400 words, dated 2026-09-25/10-01; most complete: friends far away, kids by age, card openings/closings, 6 tips, voice-note one-liner, one "time zone" line inside a wish. Cites a USPS "76%" claim |
| 8 | pinterest.com (ideas) | WEAK | |
| 9 | fnp.com quotes | gifting competitor | |
| 10 | americangreetings.com what-to-write | card competitor | 36 lines; openings, funny, heartfelt, religious, quotes, kids, closings; AI writer upsell; no timing, no formula, no FAQ (read via Firecrawl query, ctx_fetch 403) |

Weak: 3 (pinterest x2, facebook) + 1 off-intent → Gate 4 passes. Corroborates serps.md row "happy halloween wishes messages" (weak 3, card brands own it).

## Phase 2 — gap
- Table stakes: general/short/funny lines; partner, friends, family, kids, coworkers; card openings/closings.
- Gap: nobody covers someone who doesn't celebrate; no page gives actual 31 Oct send timing across time zones; voice-note scripts and email sign-offs are absent or a one-liner; no page cites research on why a specific personal line beats a generic one; no page explains the postcard origins of Halloween greetings.
- Fan-out: what to write in a Halloween card; short text greeting; doesn't celebrate; coworkers; when to send abroad; when is Halloween; email sign-off; voice note length; funny vs sweet; interactive alternative.
- Angle: wins by being the only hub sorting original lines by recipient AND channel (incl. doesn't-celebrate, email, voice note) with time-zone timing for 31 October, using 48.3% phone-view and 11.1 views-per-page figures.

## Phase 3 — sources (all fetched)
1. Regan, Walsh & Lyubomirsky, Affective Science 4(1):72–81 (epub 2022-11-07), CC BY — https://europepmc.org/article/PMC/PMC10104980 — full text read. N=958 Australian adults, 1 week, 6 conditions; letters > lists; lists = control; social letters strongest gratitude/elevation. Measures the writer, not recipient (disclosed). Replaces Kumar & Epley 2018 (SAGE, banned).
2. Darrah, Journal of American Culture, 2024-08-15, CC BY-NC-ND (hybrid OA) — https://onlinelibrary.wiley.com/doi/10.1111/jacc.13580 — Wiley returned 403; full text read via OpenAlex index. 1¢ buy + 1¢ mail vs 3¢ card postage; >1bn US postcards by 1909; no envelope = public.
3. McMahan, The Conversation, 2020-12-22 — Henry Cole 1843, 1,000 cards; comic cards capture feeling about the season. Takes theconversation.com's last slot (now 3/3).
4. IANA tz database (date/time fact-check, declared) — offsets computed via Node Intl: 19:00 NY = 23:00 London = 04:30 1 Nov India = 10:00 1 Nov Sydney (2026 and 2027); UK clocks back 25 Oct 2026 and 31 Oct 2027. timeanddate.com 403.
Search terms tried via findpapers: "gratitude letter wellbeing randomized", "greeting card social connection", "underestimating value of reaching out social connection", "expressive writing letter recipient appreciation", "holiday cards social network", "expressing gratitude randomized controlled experiment Lyubomirsky", "gratitude expression recipient underestimate surprise", "receiving messages of appreciation wellbeing", "Halloween postcards history", "voice versus text communication feeling connected bond" (no usable OA voice-vs-text paper; SPPS "Explicit signals" is SAGE — excluded).

## Originality check
76 bulleted lines (66 wishes + formula examples) checked against every sibling blog file for any shared 6-word sequence: 0 after rewriting 4 lines that collided with halloween-messages-for-adults / halloween-wishes-for-instagram.
