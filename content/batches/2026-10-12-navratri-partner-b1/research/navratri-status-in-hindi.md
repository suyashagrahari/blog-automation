# Research brief — navratri-status-in-hindi

Keyword: `navratri status in hindi` (absorbs: navratri status shayari, navratri status in hindi for whatsapp). Body language: hi (Devanagari). Cluster: wishes-language.

## Phase 0 — first-party data

facts.md read directly (no `npm run facts`). No Navratri or dandiya-partner data exists. Used:

- 48.3% of shared pages are opened on a phone (27,725 of 57,456 views) — 2026-09-24 (first 150 words)
- Raksha Bandhan 2026 lead time, n=89: 49.4% built on the festival day, median lead 0 days — 2026-09-09 (first 150 words; labelled as RB analogue in prose)
- Of 79 RB pages finished in time, 86.1% within 24 hours — 2026-09-09 (table)
- 38.5% of creators password-protect — 2026-09-24 (table)

Gate: 4 facts, 2 in the opening. Relevance is moderate: phone share bears on line length; the RB timing bears on posting a status the same morning. Template-spec fact used: nine short lines, one per night (direct tie to a day-wise status list), six photos, 1080×1920 pass.

## Phase 1 — SERP (US-served, WebSearch, 1 call)

Query `navratri status in hindi` returned 9 results.

| # | URL | Year / freshness | Words (approx) | Structure | Direct answer | Char counts | Nine forms day-wise | Weak? |
|---|---|---|---|---|---|---|---|---|
| 1 | prabhatkhabar.com — Chaitra Navratri 2021 wishes/status | Chaitra 2021 | ~2,500 | ~30 H2s, each a pasted couplet as heading | No; intro then couplets | No | No | Weak (stale, Chaitra, heading-stuffed) |
| 2 | blogs.transparent.com/hindi (wp-json 2029) | 2011, mod. 2018 | short | English explainer of the word Navratri | n/a | No | No (old 3-3-3 Durga/Lakshmi/Saraswati framing) | Weak (off-intent) |
| 3 | fithindi.thequint.com 2022 status | 2022 | — | HTTP 403 | — | — | — | Weak (stale; unreadable) |
| 4 | blogs.transparent.com/hindi (wp-json 5151) | old | — | not fetched (same publisher as #2) | — | — | — | Weak |
| 5 | thequint.com 2022 status | Oct 2022 | ~560 | H1 + 2 H3 lists, English lines | No | No | No | Weak (stale, thin, English) |
| 6 | fithindi.thequint.com Chaitra 2022 | 2022 | — | not fetched | — | — | — | Weak (stale) |
| 7 | eduyush.com navratri-wishes-in-hindi | titled 2025 | ~7,500 (incl. shop chrome) | 13 H2s, 150+ wishes, one "social media status" H2, FAQ H2 (no FAQPage schema) | No | No | Mentions forms inside long messages only | Not weak by depth; stale year, wishes not status. Competitor (never cite) |
| 8 | eduyush.com en-us mirror | same | — | duplicate | — | — | — | — |
| 9 | narayanseva.org/bn (wp-json 18590) | 2024, mod. 2026-06 | — | Bengali Navratri explainer, dates 2024 | n/a | No | Lists nine forms | Weak (off-language, off-intent) |

Weak in top 10: 7 of 9 returned (eduyush counted once, as not weak). Gate 4 passes.
Corroboration: `serps.md` row "navratri status for whatsapp 2026" — 6 weak (digit Chaitra 2026, bridgechronicle 2025, statesman 2025).

## Phase 2 — gap

- Table stakes: Hindi lines, devotional + festive tone, WhatsApp framing, short and longer forms.
- Gap: no page gives character counts; none notes Devanagari inflates character counts (क्ष = 3 code points); none keys lines to the nine forms with tithi dates for this year and next; none notes the 2026 two-day Saptami; none separates status (public, 24 h) from a wish (to one person).
- Stale data: every incumbent is year-stamped 2021/2022/2025.
- Fan-out: what to write in a Navratri status; nine forms in order; dates by day; how long a status lasts; letters vs characters in Hindi; are lines original; how long a 2-line shayari should be; when to post; one person vs group.
- Angle: wins by being the only post that gives each line with visible-letter and Unicode character counts, keyed to tithi with 2026/2027 dates, using the 48.3% phone share and the RB day-of build rate as the nearest analogue.

Sibling split: navratri-wishes-in-hindi = longer wishes to a person; navratri-ki-hardik-shubhkamnaye = formal phrase. This page = short public lines to post. Both linked as /blog/ cross-links.

## Phase 3 — sources (all fetched)

| Source | What it supports | Read | Subject test | Swap test |
|---|---|---|---|---|
| Noreen & Shah 2026, J. Global Social Transformation 2(10), rjsaonline.org, CC BY 4.0 | WhatsApp status disappears after 24 h; 410 users; religious status posted to remind/benefit others; gender n.s. | Full PDF | Pass (religious WhatsApp status) | Pass (specific to status) |
| Zhang et al. 2021, Frontiers in Psychology, PMC8451155, CC BY | 263 of 390 WeChat users used Time Limit; post more often, smaller audience | Full text via Europe PMC REST | Pass (ephemeral posting) | Weak — could sit in an Instagram captions post |
| Unicode Standard 18.0 ch. 12 (exempt) | क्ष = <0915 094D 0937>; bindus/nukta are combining marks | Full section | Pass (the script) | Pass |
| Drik Panchang Navdurga (exempt) | order of nine forms | List read | Pass | Shared reference |
| Drik Panchang Shardiya Navratri 2026 + 2027, New Delhi (exempt) | per-day dates | Day blocks parsed | Pass | Shared date reference |

Searches run (findpapers.mjs): "WhatsApp status ephemeral sharing", "ephemeral social media stories self-presentation", "Hindi Devanagari romanized script social media", "Navaratri goddess Durga nine forms", "religious expression social media India festival"; Europe PMC: TITLE/ABSTRACT "WhatsApp status" OA (1 hit, off-topic), Navratri OA (33, all health), Instagram stories self-presentation OA. Rejected: SAGE Brooklyn Museum stories paper (403), Ritual Revision COVID paper (403/captcha), Nine Nights of the Goddess (not OA). Second WebSearch used to locate WhatsApp's status help page; faq.whatsapp.com returned 400 to fetchers, so not cited.

## Verified-against-BRIEF notes

- Drik (New Delhi) shows 10 calendar days for 2026: Saptami 17–18 Oct, Ashtami + Maha Navami Sandhi Puja 19 Oct, Navami Homa + Vijayadashami 20 Oct. BRIEF's 11–19 Oct is the right span but day-count by date is wrong for the forms.
- 2027: 30 Sep start, Vijayadashami 9 Oct, Durga Visarjan 10 Oct — matches BRIEF.
- Day colours depend on weekday (2026 Day 1 Orange, 2027 Day 1 Yellow); omitted from the post.

## Character counts (Intl.Segmenter graphemes / code points)

Day lines avg 43 / 65 (36–49 graphemes); short status avg 26 / 37 (19–33); couplets avg 57 / 81 (47–66); overall code points ÷ graphemes = 1.45 across 21 lines.
