# Research brief — navratri wishes for office

Batch `2026-10-12-navratri-b2` · slug `navratri-wishes-for-office` · bodyLanguage `en` · also covers: navratri wishes for colleagues / boss / clients / employees · autocomplete demand 3.

## Split against siblings (BRIEF §9)

`navratri-invitation-for-office` (b1) covers HR/committee INVITATIONS (all-staff email, dress-code mail, Slack announcement, inclusion of the event); `navratri-wishes-in-english` (b1) has one mixed-audience "colleagues, managers and clients" group. This page is the one-to-one WISH sent at work, split by recipient (boss, own team as manager, client/vendor, fasting colleague, colleague of another faith) and by channel (Slack/Teams vs email vs LinkedIn), with timing (day 1 / Ashtami / regional Dussehra). No invitation templates, no colour list, no sibling sources reused (their Zygon, PMC11717292, PMC9248104, PMC12385570, lboro, PMC5240068, Barbato and PMC10238238 are all avoided).

## Phase 0 — facts gate (thin)

facts.md read directly; `npm run facts` NOT run. No Navratri, workplace or channel data exists. Used (verbatim):
- 48.3% of shared pages are opened on a phone (27,725 of 57,456 views) — measured 2026-09-24
- Raksha Bandhan 2026 lead time … 49.4% built on the festival day itself … median lead time 0 days — measured 2026-09-09 (disclosed in body as a different, one-day festival, n=89)
- Of the 79 Raksha Bandhan 2026 pages finished in time, 55.7% … 86.1% within 24 hours of it — measured 2026-09-09
Template-spec facts (best-friend mode question, nine lines, six photos, 1080×1920 pass, no app/account) used in the /dandiya-partner section; not counted toward the 3.

## Phase 1 — SERP (US-served (WebSearch), 1 call)

Query: `navratri wishes for office colleagues boss clients`. Not present in `content/keywords/2026-10-12-navratri-garba-dandiya/serps.md` (grep for office/colleague returned nothing).

| # | URL | Fetch | Words / structure | Direct answer | Data & date | Optimising for | Weak? |
|---|---|---|---|---|---|---|---|
| 1 | blog.getcompass.ai/navratri-celebration-email | HTTP 404 | — | — | — | HR email ideas (per snippet) | weak (dead) |
| 2 | hindutone.com/…/navratri-2026-wishes-messages-quotes-instagram-captions/ | 200 | long multi-audience page; H2 "Navratri wishes for colleagues and clients" with 4 lines + 1 FAQ | in section intro ("short, warm and inclusive… sent on the first day") | dated 2026-10-06, CC BY 4.0; day table maps Day 8 Mahagauri = Sun 18 Oct (wrong for 2026) | broad wishes hub | strong |
| 3 | peoplematters.in/?p=16489 | 200 but JS shell, no article text | — | — | old blog id | HR opinion | weak |
| 4 | smartpuja.com/blog/wp-json/wp/v2/posts/23343 | not fetched (raw WP API endpoint) | — | — | — | — | weak |
| 5 | smartpuja.com/blog/navratri-wishes | lands on puja-booking homepage | title "14 Best Navratri Wishes 2023" | — | 2023 | puja booking | weak (stale) |
| 6 | pockethrms.com/?p=66602 | HTTP 404 | — | — | — | HR colours | weak |
| 7 | heraldgoa.in/cafe/navratri-colours-at-the-workplace/194590 | redirects to homepage | colours, not wishes | — | — | news | weak |
| 8–9 | pockethrms.com colours posts | 404 | — | — | — | — | weak |

Weak count: 8 of 9. Gate 4 passes (not zero weak). Only HinduTone is a live substantive incumbent; it is a competitor and is neither cited nor linked.

## Phase 2 — gap

- Table stakes: short inclusive lines for colleagues and clients; send on day 1.
- Gap: nobody splits by recipient AND channel; nobody addresses LinkedIn etiquette with the platform's own policy text; nobody handles the fasting colleague or the colleague of another faith as separate cases; nobody gives the regional Dussehra split (20 vs 21 Oct 2026); HinduTone's day table carries the 18 Oct Mahagauri error.
- Fan-out → H2s: what makes it right for office; wishes by recipient; table; channel (Slack/email/LinkedIn); timing; what to avoid; where SubhSandesh fits.
- Angle: wins by being the only post that sorts office Navratri wishes by recipient and channel, quotes LinkedIn's policy, and gives the regional Dussehra split, grounded in the 48.3% phone-open rate and Raksha Bandhan same-day timing analogue.

## Phase 3 — sources (findpapers.mjs; 0 extra WebSearch calls)

Queries run: "religious holidays workplace accommodation employees", "religious diversity workplace inclusion India", "holiday greetings workplace religious expression", "religious fasting at work employees Ramadan colleagues", "workplace email politeness greetings Indian English".

1. Chaikof, Shah & Najeeb (2026-03-16), "Religiously observant faculty, staff, and learners", CMAJ 198(10):E374–5, https://europepmc.org/article/PMC/PMC12999198 — full text read (Europe PMC XML). Peer reviewed, open access (CC BY-NC-ND: cite/link only). Claims used: practices are individual; tokenism; ask individuals; ask about fasting in advance. Subject test: pass (religious observance among colleagues at work).
2. Waldvogel (2007), "Greetings and Closings in Workplace Email", JCMC 12(2), https://academic.oup.com/jcmc/article/12/2/456-477/4583009 — publisher 403, Wiley 403; ABSTRACT ONLY, read via OpenAlex. Claim used: 515 emails, two NZ workplaces; culture outweighs status, social distance and gender for greeting use. Subject test: pass (workplace greetings).
3. LinkedIn Professional Community Policies, https://www.linkedin.com/legal/professional-community-policies — full page read; undated. Quotes used: "broad conversations about the world of work", "require professional expression", "religious affiliation", "a professional networking platform, not a dating site".
4. Drik Panchang (New Delhi geoname 1261481) — 2026 dates page, Vijayadashami 2026 page and 2027 dates page fetched; cap-exempt date reference.

Rejected: Palgrave/Cambridge workplace-religion chapters (paywalled); sibling-used papers; T&F/Sage/Frontiers Psychology (capped). Mysuru 21 Oct not fetched by this writer — printed as BRIEF-verified.

capcheck: no banned URLs, no domain at cap. Verifier: own post clean (only batch-level "batch.json blogs != files on disk", which this writer must not touch).

## Brief claims checked

All BRIEF §1 dates that this post prints were confirmed on Drik Panchang (New Delhi), except Mysuru, which was not fetched. No brief claim found false.
