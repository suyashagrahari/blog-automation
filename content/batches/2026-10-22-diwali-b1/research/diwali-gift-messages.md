# Research brief — diwali-gift-messages (row 38, keyword "diwali gift message")

Anchor: "diwali wishes quotes" (wave-1 row diwali-quotes). Secondaries: diwali gift tags, diwali hamper message, what to write on diwali gift. Phenomenon: gift accompaniments, notes and perceived thoughtfulness.

## Phase 0 — first-party data
facts.md read (not regenerated). No Diwali or gift-tag data exists. Used, verbatim:
- Median miss-you letter length: 88 words (n = 214, 2026-09-25) — scale for "a tag is under a tenth of a letter".
- Raksha Bandhan 2026 lead time, n = 89 — 49.4% built on the day (labelled as the nearest festival analogue).
- 48.3% of shared pages opened on a phone (2026-09-24).
Template spec used for /happy-diwali: diya at their door with a tag, wish diyas, liffafa letter, up to 6 photos, mithai box + Shubh Deepavali card, love/family/friend modes, AI drafting, ~5 min, private link, no app/account, 1080×1920 card save.

## Phase 1 — SERP (measured 2026-10-22)
Searches used: 2 for the SERP (1 WebSearch, US-only and mostly thin/spam; 1 DuckDuckGo HTML kl=in-en — lower confidence, Firecrawl disconnected). Pages fetched with plain fetch in the sandbox.

| # | URL | Type / date | Words | Direct answer? | Tag/size guidance | Data / sources | Notes |
|---|---|---|---|---|---|---|---|
| 1 | wishesmsg.com/diwali-wishes-messages | wishes site, "2025" | n/a (403) | snippet only | none seen | none | judged from snippet |
| 2 | diwalicountdown.in/blog/diwali-wishes-messages-guide | festival blog, undated | 887 | no, list after intro | FAQ "how long" with no count | none | relationship lists |
| 3 | kymee.in happy-diwali-best-wishes | retailer blog, 15 Oct 2025 | ~2,300 | no | none | none | 10 wish categories |
| 4 | greetingsisland.com/blog/diwali-wishes-messages | card-maker blog, undated | ~1,760 | "how to choose" section | none | none | 70 wishes + FAQ |
| 5 | indiablog.in diwali-wishes…gift-ideas | blog, 21 Oct 2024 | ~4,400 | no | none ("tag" = taglines) | uncredited scripture lines | stale 2024 |
| 6 | oyegifts.com 80+ wishes | gift shop blog | snippet | — | — | — | shop CTA |
| 7 | herzindagi.com Diwali 2025 wishes | news | snippet | — | — | — | — |
| 8 | goodgraze.in diwali-wishes-for-clients-employees | snack-gift shop, 3 Oct 2026 | ~2,100 | 2026 dates first | hamper pairing section, no lengths | none | 30 corporate messages |
| 9 | chococraft.in/pages/diwali-gifts-messages | chocolate shop page | ~600 | templates | none | none | corporate |
| 10 | infistyle.in diwali-wishes-to-write-on-gift-tags | stationery shop, 5 Oct 2026 | ~2,160 | "keep it short" | "one or two lines" for tags; no character counts | none | closest sub-intent; CTA to buy tags |

Weak in top 10: 8 (thin lists, shop CTAs, stale/undated, no sources). All competitors; none cited or linked.

Cannibalisation gate: diwali-quotes' recorded top 10 (adobe, pinterest, nestasia, kamajewelry, diwalifestival, bakingo, fnp, zoomin, ecraftindia, jkyog) shares 0 URLs with this SERP.

## Phase 2 — gap
- Table stakes: lines by recipient (family, friends, colleagues, clients), short lines, Hindi/Hinglish.
- Gap: nobody gives a character count, maps a line to a physical size (tag, hamper card, sweet-box card, A6 insert) or to gift contents; nobody mentions Devanagari counting longer in online boxes; nobody cites any research.
- Stale: indiablog 2024; kymee 2025.
- Fan-out → H2s: how long for each tag size; tag lines by recipient; hamper lines by contents; sweet-box lines; corporate pack lines; Hindi/Hinglish and Devanagari counts; thank-you gifts to staff; online order gift message; digital option; when a tag beats a link.
- Angle: wins by being the only top-10 page that gives each line an exact character count matched to a tag/card size, using SubhSandesh's 88-word median letter and 49.4% same-day festival builds.

Siblings read: diwali-quotes (length table by channel — not repeated; this post uses physical sizes), diwali-gift-ideas (gift ideas, Puente-Díaz & Stenlund studies — not repeated), diwali-gift-ideas-for-employees (tax, bands — not repeated), old what-to-write-in-a-diwali-card (35–45-word cards, Lyubomirsky/Gillen — not repeated), old diwali-wishes-for-boss/clients, diwali-card. Old diwali-wishes-with-name-and-photo already uses Zhang & Epley 2012, so that paper was dropped.

## Phase 3 — sources (all fetched 2026-10-22)
1. University of Nevada, Reno, "Presentation matters" summary, 9 Dec 2019 — https://www.unr.edu/nevada-today/news/2019/gift-wrapping — neat wrapping lowers liking for friends' gifts, raises it for acquaintances' (Rixom, Mas & Rixom, J Consumer Psychology 2019; paper paywalled, summary only). Subject: gift presentation.
2. Unicode UAX #29 v18.0.0, 2026-09-01 — https://www.unicode.org/reports/tr29/ — grapheme clusters as user-perceived characters; Devanagari क्षि = 4 code points, 1 cluster. Reference instrument (cap-exempt).
3. Oishi, Lee, Koo & Cha 2025, Applied Psychology: Health and Well-Being (Wiley, OA CC BY-NC-ND) — https://europepmc.org/article/PMC/PMC12106001 — indebtedness predicts thank-you gifts (N = 120, 327, 561). Peer-reviewed, open access. Abstract read.
4. Amazon.in Gift Wrap help — https://www.amazon.in/gp/help/customer/display.html?nodeId=G6RLNNT974EPS5US — printed gift-message card on top of package; ₹30 for eligible FBA items, varies by size. Platform behaviour, not ranking for the keyword.

Tried and rejected: Zhang & Epley 2012 (idea already used by old post); Europe PMC MDPI Foods PMC12650813 (verbal packaging for gift food — MDPI at 4 posts already); Frontiers hits (banned); FSSAI best-before (already in diwali-sweets, and withdrawn in 2023). findpapers.mjs queries: "gift card note thoughtfulness recipient appreciation", "gift giving thoughtfulness perceived recipient", "gift wrapping presentation recipient attitude", "handwritten note gratitude expression underestimate"; plus Europe PMC REST and Crossref queries on gift notes, thank-you gifts, wrapping.

Character counts: computed with JavaScript code-point length and Intl.Segmenter('hi', grapheme) on 22 Oct 2026; tag-capacity ranges are the writer's arithmetic (4 mm/character, 6 mm/line), labelled EST.
