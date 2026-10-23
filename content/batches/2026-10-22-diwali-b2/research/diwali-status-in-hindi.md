# Research brief — diwali-status-in-hindi (row 49)

- **Keyword:** दिवाली स्टेटस हिंदी · **Anchor:** दिवाली की शुभकामनाएं स्टेटस · **Language:** hi (Hindi body, Devanagari)
- **Phenomenon searched:** WhatsApp status behaviour
- **Measured:** 2026-10-22

## Phase 0 — first-party data (facts.md only; `npm run facts` NOT run)

Used (verbatim in `factsUsed`):
1. 38.5% of creators password-protect their page (2,000 of 5,199) — 2026-09-24 → first 150 words (status audience/privacy parallel).
2. 48.3% of shared pages opened on a phone — 2026-09-24 → first 150 words (why lines are short).
3. Raksha Bandhan 2026 lead time (n = 89; 49.4% on the day, 27.0% day before) → timing section, labelled in the body as the nearest-festival analogue.

No Diwali or WhatsApp-status usage data exists; the body says so.

## Phase 1 — SERP (DuckDuckGo HTML, kl=in-en — lower confidence; 1 of 3 searches)

WebSearch at session cap; Firecrawl unavailable. Top 5 fetched directly in the sandbox (2026-10-22).

| # | URL | Words (whitespace, whole page) | Structure | Date | WhatsApp limits? | Notes |
|---|---|---|---|---|---|---|
| 1 | igp.com/blog/diwali-wishes-in-hindi | ~2,980 | H1 + H2/H3 wish lists; drifts to cleaning and eco-Diwali tips | pub 2024-10-29, mod 2026-08-20 | No | Gift retailer; no FAQ schema, no table |
| 2 | yojanavani.in/diwali-status-in-hindi | ~2,240 | One H2 list of 100 statuses + 4 generic FAQs (FAQ schema) | H1 says "2025"; mod 2025-11-08 | No | Only page whose URL targets "status" |
| 3 | livehindustan.com (astrology) top-20 wishes | ~1,880 | Numbered couplets as H2s | 2025-10-20 | No | News publisher; images + SMS |
| 4 | loveshayaree.com/happy-diwali-wishes | ~2,510 | Traditional / modern / heart-touching lists | 2025-09-16, H1 "2025" | No | |
| 5 | sanjayjangam.com/hindi/diwali-wishes-in-hindi | ~1,820 | "2200+" unsorted lists | pub 2018, mod 2026-10-19 | No | |
| 6–10 | dilsedeshi, tathyatarang, astroyogi, canva (template gallery), helpsinhindi (H1 "2024") | — | snippet only | — | — | |

Direct answer placement: every fetched page opens with a generic intro, then lists. None mentions 24 घंटे, 90 seconds, privacy settings or a character limit (string search of fetched text).

Cannibalisation gate: max 2 shared URLs with any existing Diwali post's recorded SERP (b1 diwali-status: livehindustan, canva; b2 hinglish-diwali-wishes: igp, tathyatarang). Below 4.

## Phase 2 — gap

- **Table stakes:** many Hindi lines; some grouping.
- **Gap:** no page says what a WhatsApp status can and cannot do — expiry, video length, that a posted text status cannot be edited (Hindi matra typos), who actually sees it (groups, mentions).
- **Stale:** 3 of 5 carry 2024/2025 in H1.
- **Fan-out sub-queries:** how long a status stays; can I fix a typo; max video length; show only to some people; hide from relatives/boss; group visibility; character limit; when to post in 2027; are lines original; alternative for one person.
- **Angle:** Wins by being the only page in the measured top 10 that pairs original Hindi status lines grouped by recipient and mood with WhatsApp's official limits (24 h, 90 s, 15-minute caption edit / no edit without caption, 3 privacy settings, group visibility), mapping each group to a setting, framed by SubhSandesh's 38.5% / 48.3% data.

## Distinctness from siblings

- b1 `diwali-status` (English): organised by length and tone, with a 5-line Hindi subsection; its audience H2 covers three settings. This post: Hindi body, grouped by recipient/mood, adds the 15-minute caption edit rule and no-edit-without-caption (Edit/save/delete page, not used by b1), group-status visibility, and a recipient→setting table.
- Hindi siblings checked (b1 happy-diwali-wishes-in-hindi, diwali-shayari*, b2 diwali-speech-in-hindi, diwali-essay-in-hindi, diwali-shayari-hindi-2-line, hinglish-diwali-wishes, 10-lines-on-diwali-in-hindi etc.): 4-word n-gram check of all 35 lines against every post in b1, b2 and 2026-08-19-diwali → 0 hits after rewriting 2 lines.

## Phase 3 — sources (all fetched 2026-10-22)

1. faq.whatsapp.com/454876960047011 — About status: 24 h; max 90 s; 3GP/mpeg4. (via r.jina.ai text renderer; page is JS-rendered)
2. faq.whatsapp.com/8560797347309938 — Edit/save/delete: caption editable within 15 min; media and audience not editable; no caption → no edit option.
3. faq.whatsapp.com/502161774931737 — Privacy: default all contacts; 3 options; changes not retroactive; mentions bypass audience; group status visible to all members.
4. Bhikne et al., IndiaHCI 2018 (dl.acm.org) — ABSTRACT ONLY: 20 novice users; keyboard+speech 2.5× faster for Hindi; smaller gain for poem/song phrases. Scholarly, not open access.
5. Assaggaf, Arab World English Journal 2019 (awej.org) — open access, full PDF read: 846 text statuses (2017, mainly Yemeni, profile-text status); 53% pure text; 37% religious, 27% social incl. occasions. Peer-reviewed, open access → satisfies the scholarly OA requirement.
6. Platts 1884 (dsal, cap-exempt) — अमावसी/अमावस्या "the night of new moon".

Tried and not used: Apriliyanti, Indonesian Journal of Social Sciences 2020 (7 informants, qualitative; abstract only, weaker fit). Avoided b1's atlantis-press and PMC6169781. Capped domains in the task prompt not used.

## Verifier notes

- FAQ~heading check strips non-Latin text; Devanagari FAQs are effectively unchecked. A lone shared Latin token ("SubhSandesh") produced a false 1.00 on one FAQ; it was rephrased. FAQs were checked by hand against H2s.
- Audit: 49 passed / 1 failed ("At least one table column uses first-party data" — facts.md has no per-recipient or WhatsApp data).
