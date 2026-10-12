# Research brief — navratri invitation message

Batch `2026-10-12-navratri-partner-b1` · slug `navratri-invitation-message` · bodyLanguage `en` · cluster invite-wording
Absorbs: navratri invitation message for whatsapp, navratri invitation text, navratri invitation message for whatsapp in english.
WebSearch calls used: **1** (SERP). Research via findpapers.mjs, OpenAlex and Europe PMC REST (no WebSearch cost). No browser tools.

## Phase 0 — first-party data

facts.md read, `npm run facts` NOT run. No Navratri or /dandiya-partner data exists. Used (verbatim in `factsUsed`):

- 48.3% phone share of views (2026-09-24) — load-bearing: invitation must fit one phone screen.
- Raksha Bandhan 2026 lead time, n = 89, 49.4% built on the day (2026-09-09) — labelled in body as nearest analogue, not Navratri data; sets reminder/timing advice.
- 38.5% password rate (2026-09-24) — in the one-to-one /dandiya-partner paragraph.

Template facts from `template-spec.md` (nine lines, six photos, 1080×1920 pass, Yes after five No tries, no app/account, English UI, one-to-one) used as first-hand product fact, not counted toward the 3.

Own measurement (first-hand, not a competitor statistic): the tring.co.in list "80+ Navratri Invitation Messages" holds 80 quoted messages, mean 19.3 words (15–25); **0 of 80** match venue / address / location / RSVP / reply / confirm / "let us know" / a clock time / a month name / flat / street. The competitor is not named or linked in the body.

## Phase 1 — SERP (US-served (WebSearch), 2026-10-12, query "navratri invitation message")

| # | URL | Type | Words | Direct answer? | Structure | Data / date | Weak? |
|---|---|---|---|---|---|---|---|
| 1 | lists.stevens.edu/pipermail/igsa/2011-October/000153.html | 2011 student mailing-list post | n/a (404 to fetcher) | n/a | n/a | 2011 | **weak** |
| 2 | lutonhoo.oandg.co.uk/en/navratri-wishes-in-hindi.html | scraped mirror, Hindi wishes | fetch failed | no | wishes list | none | **weak** |
| 3 | tring.co.in/invitations/navratri-invitation-message | celebrity-shoutout marketplace list | ~2,470 | no; intro then 2025 colour table | H2: Introduction, Navratri Colours 2025, Message, for WhatsApp, to Friends, Online. No FAQ schema | dates 22–30 Sep **2025** (stale) | strong-ish (exact match) |
| 4 | lists.stevens.edu/.../2011-September/000152.html | 2011 mailing list | n/a | n/a | n/a | 2011 | **weak** |
| 5 | op.gov.gy/president-ali-message-on-the-occasion-of-navratri | Guyana president's greeting | n/a | off-intent | — | — | **weak** |
| 6 | adobe.com/in/express/create/invitation/navratri | card-maker tool | HTTP 403 | tool | — | — | tool (not weak) |
| 7 | lokbhavan.haryana.gov.in/?p=18245 | governor's message | n/a | off-intent | — | — | **weak** |
| 8 | desievite.com/invitation-blogs/How-to-create-Navratri-invitation-video-for-WhatsApp | paid video-card how-to | ~530 | no messages at all | 9 screenshot steps | 2017 screenshots | strong-ish (paid tool) |
| 9 | tring.co.in/invitations/invitations-for-garba-night | same marketplace, garba | ~5,180 | no | H2: Best, Dandiya, Raas Garba English, Traditional, Gujarati, Party, FAQ (FAQ schema) | "Navratri 2025" title, 2023-05-17 date in markup | strong-ish |

**Weak: 5 of 9 returned** (Gate 4 passes). Prompt said "6 weak of 10" with boldsky 2025 and bridgechronicle 2025; neither appeared for the bare keyword in this call. Corroboration in `content/keywords/2026-10-12-navratri-garba-dandiya/serps.md`: "navratri invitation message home puja whatsapp" 6/10 weak (bridgechronicle 2025, boldsky 2025, desievite, tring); "kanya pujan invitation message" 8/10 weak.

Tone of the ranking content: third-person, generic, every message interchangeable ("Join us for a joyous Navratri celebration…"), no first person, no data.

## Phase 2 — gap analysis

- **Table stakes:** a list of English messages; WhatsApp framing; garba/dandiya mention.
- **The gap:** (1) none of the messages is a working invitation — 0 of 80 give a time, date, place or reply route; (2) no page segments by recipient (elders, neighbours, friends, one person); (3) kanya pujan and golu invitations are absent (tring: "kanya" 0, "golu" 0); (4) no current dates — tring still prints 2025.
- **Stale data:** tring's 2025 calendar. Superseded with drikpanchang-verified 2026 and 2027 dates.
- **Fan-out sub-queries → H2/FAQ:** what to include; WhatsApp format; how early to send; kanya pujan date and who to invite; golu invitation wording; inviting elders/neighbours; asking one person to garba; whether to mention dress; group vs one-to-one tool.
- **Angle:** wins by being the only post that sorts short English invitation texts by event (incl. kanya pujan and golu) and by recipient, each carrying the date, time, place and reply line that 0 of 80 leading messages include, using the 48.3% phone-open rate and the Raksha Bandhan same-day pattern to set length and timing.

**Sibling split (no /blog/ links):** this = English hub of short texts to people you know. navratri-invitation-message-in-hindi (Hindi), garba-invitation-wording (organisers' card wording), dandiya-night-invitation-message (dandiya-night only), navratri-invitation-for-office, dandiya-invitation-card-online-free (tools), dandiya-invitation-card-in-hindi — named in prose only.

## Phase 3 — sources (all fetched)

| Source | What it says (what I read) | Subject test | Swap test | Access |
|---|---|---|---|---|
| Givi & Kirk 2024, JPSP, "Saying no…" — europepmc.org/article/MED/38079463 | Invitees overestimate the negative ramifications of declining in the inviter's eyes | pass (invitations) | **fails** — fits sibling invitation posts | abstract only (Europe PMC REST); PubMed returned 203 bot page |
| Liu, Rim, Min & Min 2023, JPSP, "The surprise of reaching out…" — europepmc.org/article/MED/35816566 | People underestimate appreciation of being reached out to; larger gap between socially distant others | pass (initiating contact) | **fails** — fits any message post | abstract only |
| IIZUKA Mayumi 2026, *Dynamics of Civilizations* 5: 82–100, Okayama University repository (OA PDF) | Chidambaram kolu: invited guests asked to sing before the altar; tāmpūlam (betel, areca, turmeric, flowers) given at the end of each visit; kolu photos shared in WhatsApp groups | pass | pass (golu-specific) | full text read |
| Wikipedia "Golu (festival)" (Q4167950) | Women in the neighbourhood invite each other in the evenings to view golu; families and neighbours visit with gifts | entity only | — | read via API |
| drikpanchang.com, Sharad Navratri dates, New Delhi, year=2026 and year=2027 | 2026: 11–19 Oct, Ashtami + Navami 19 Oct, Vijayadashami 20 Oct. 2027: day 1 30 Sep, Ashtami 7 Oct, Navami 8 Oct, Vijayadashami 9 Oct | date fact-check (cap-exempt) | — | HTTP 200, read |

findpapers.mjs queries with nothing usable: "kumari puja girl worship Navaratri", "Golu doll display Navaratri Tamil women hospitality", "WhatsApp family group messaging India", "social invitation acceptance reciprocity rejection", "Navaratri festival women ritual domestic", "Bommai Kolu", "Kanjak Kanya puja". OpenAlex found Iizuka 2026. No scholarly source on kanya pujan invitations exists in these indexes. Predatory journals (IJSR etc.) surfaced and were skipped.

capcheck.mjs: no banned URLs; europepmc.org and drikpanchang.com are exempt; en.wikipedia.org at 2 posts after this one (verifier counts 3 including body links).

Wikidata QIDs verified via the Wikipedia API: Navaratri Q10269, Golu (festival) Q4167950, Kanya Puja Q12060958, Garba (dance) Q882985, WhatsApp Q1049511. Slug free in Strapi (empty result); `indian-festivals` category exists.
