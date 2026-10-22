# Research brief — diwali-shubhkamnaye-photo

- Keyword: दिवाली की शुभकामनाएं फोटो (row 5, language hi, anchor same)
- Phenomenon: image sharing and personal photos in festival greetings
- Written: 2026-10-22. Body in Hindi (Devanagari).

## Phase 0 — first-party data
facts.md (2026-09-24 vintage) has no Diwali or per-format data. Used, platform-wide and labelled so in body:
- 48.3% of shared pages opened on a phone (27,725 of 57,456) — first 150 words
- 48.4% of views on a touch device — first 150 words
- Average views per created page 11.1
- 38.5% of creators password-protect (2,000 of 5,199)
Template spec (/happy-diwali): up to 6 photos in sky lanterns, diya tag, rangoli initials, card saves 1080×1920, ~5 min, private link, no app/account, optional password.

## Phase 1 — SERP (WebSearch, 1 search, 2026-10-22; US-located tool, lower confidence for an India query)

| # | URL | Type | Words (approx, incl. chrome) | Direct answer | Data / dates | Format | Optimises for |
|---|---|---|---|---|---|---|---|
| 1 | amarujala.com photo-gallery 2022 | News photo gallery | ~1,100 | none; images with captions | 2022 in URL | 36 images, no FAQ | "photo" gallery intent |
| 2 | amarujala.com photo-gallery 2021 | News photo gallery | ~1,050 | none | 2021 | 38 images | same |
| 3 | eduyush.com/blogs diwali-wishes-in-hindi | Blog wish list | ~3,500 | lists by audience | "2025" title | H3 lists, FAQPage | Hindi wishes |
| 4 | navbharatlive.com lifestyle | News | ~500 | short wishes | none | 14 images | wishes + images |
| 5 | lutonhoo.oandg.co.uk (parasite) | Spam | — | fetch failed | — | — | — |
| 6 | monitoring.toky.co (parasite) | Spam | not fetched | — | — | — | captions |
| 7 | hellobanker.in happy-diwali-2023 | Blog gallery | ~2,100 | images first | 2023 | 42 images | images + WhatsApp wishes |
| 8 | belgie.strikolith.com (parasite) | Spam | not fetched | — | — | — | — |
| 9 | patrika.com 2018 | News | ~1,650 | quotes | 2018 | 25 images | quotes |

Weak: 7 of 9 (3 parasite, 4 stale-year galleries). Competitors (never cited): amarujala, eduyush, navbharatlive, hellobanker, patrika.

Cannibalisation: 0 shared URLs with happy-diwali-images (b1) recorded top 10; old diwali-wishes-with-name-and-photo has no stored SERP. Sub-intent distinct: how to MAKE the photo, in Hindi; b1 covers legality/CC licences/WhatsApp HD in English; the old post covers who deserves a name+photo.

## Phase 2 — gap
- Table stakes: images + wishes. Covered with 8 original short lines sized for a photo.
- Gap: none of the fetched pages gives a size, aspect ratio, Devanagari rendering check, contrast, or font licensing.
- Stale: 4 of the ranking pages carry 2018–2023 in title/URL.
- Fan-out → H2s: how to make (4 steps); which photo (5 frames); why conjuncts break; correct sizes; readability for elders; short lines; copyright basics; SubhSandesh page; when a photo is better.
- Angle: wins by being the only Hindi page that teaches making the photo, with Instagram's verified 1.91:1–3:4 rule, W3C's Devanagari syllable rule, WCAG 4.5:1 + an age-legibility study, and OFL font-licence basics, using the 48.3% phone-open fact.

## Phase 3 — sources (all fetched 2026-10-22)
1. W3C Indic Layout Requirements, WD 29 May 2020 — "स्कूल" 2 syllables / 3 grapheme clusters; styling per syllable. (w3.org cap-exempt)
2. Instagram Help Center 1631821640426723 — up to 1080 px wide; 1.91:1 to 3:4 kept (1080×566–1080×1440); otherwise cropped. Read via Firecrawl (JS page).
3. W3C Understanding WCAG 2.2 SC 1.4.3 — 4.5:1; large text 3:1 (18pt / 14pt bold); pictures with significant other content exempt.
4. Wolfe et al. 2016, Cogn Res Princ Implic (Springer Open, CC BY), PMC5256463 — full text read via Europe PMC REST: n=32, 16 aged 60–69 vs 16 aged 20–29; 75% threshold blur 2.95 vs 4.43 arcmin; noise contrast 58.8% vs 70.3%. English words, Frutiger. Peer-reviewed, open access.
5. SIL OFL 1.1 official text (26 Feb 2007) — licence requirement does not apply to documents created with the fonts; fonts not sold by themselves.
Verified, not linked: notofonts/devanagari OFL.txt (Copyright 2022 The Noto Project Authors, OFL 1.1). Platts (dsal) कामना; en.wiktionary शुभकामना entry exists.
Tried and dropped: Indian Copyright Act PDF (indiacode, fetch blocked) — no statutory claim made. findpapers queries: "image sharing personal photos festival greetings", "text legibility on images smartphone reading contrast", "WhatsApp image sharing India", "Devanagari font legibility", "personal photo sharing social connectedness family", "greeting cards digital personalisation" — no on-topic OA paper on festival photo greetings; Ergonomics (Taylor & Francis) legibility paper excluded as banned.

## Brief claims checked
- PLAN row diwali-quotes-for-instagram says "4:5 1080x1350"; Instagram Help Center says 1.91:1 to 3:4 (max 1080×1440). That sibling body already states 3:4; the PLAN wording is stale.
