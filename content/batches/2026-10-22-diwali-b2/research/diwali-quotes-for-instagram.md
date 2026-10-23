# Research brief — diwali-quotes-for-instagram

Row 1 of PLAN.json (b2rank 51). Keyword and anchor: "diwali quotes for instagram". Language: en.
Phenomenon: visual text legibility and quote graphics. Written 2026-10-22.

## Phase 0 — first-party data
facts.md (generated 2026-09-24) re-read. No Diwali usage data exists. Facts used:
- 48.3% of shared pages are opened on a phone (27,725 of 57,456 views) — measured 2026-09-24 (first 150 words)
- 48.4% of views are on a touch device (phone or tablet) — measured 2026-09-24 (first 150 words)
- Raksha Bandhan 2026 lead time, n = 89, 49.4% built on the festival day (labelled as the nearest festival analogue, small sample)
Template spec (first-hand, not counted toward the 3): the closing Shubh Deepavali card saves as a 1080 × 1920 image.
None of these measures quote graphics directly; they frame phone reading and lead time.

## Phase 1 — SERP (2 of 3 searches used)
Firecrawl search, location India, 2026-10-22. WebSearch (US) run first as BRIEF §A asks.

| # | URL | Type / date | Words / structure | Direct answer | Data cited | Format | Optimising for |
|---|---|---|---|---|---|---|---|
| 1 | adobe.com/in/express/discover/captions/diwali | Design tool (competitor), undated | ~1,500; 6 tone H2s + 5-step "create" tip | Captions in first block | None | Lists, CTA to Adobe Express | Tool sign-ups via captions |
| 2 | nestasia.in/blogs/news/diwali-captions-quotes-for-instagram | Gift shop, 3 Oct 2023 | 403 on fetch; snippet: numbered list of 170+ | List from line 1 | None | Numbered list | Shop traffic |
| 3 | pinterest.com/ideas/diwali-post-captions | Image board | n/a (not fetched) | n/a | n/a | Pins | Pins |
| 4 | zoomin.com/blog/45-unique-captions-... | Photo-gift shop (competitor), undated | ~1,800; Instagram/Facebook/WhatsApp caption H2s | After a 2-paragraph intro | None | Bullets + hashtags | Gift sales |
| 5 | virgio.com/blogs/news/short-and-sweet-diwali-captions-for-insta | Fashion shop, 19 Oct 2024 | ~900; tone/gender H2s, 10 hashtags, 1 FAQ | After 1-paragraph intro | None | Numbered lists | Outfit sales |

Positions 6–10: bakingo (15 Oct 2025), skillmatics (10 Oct 2024), pinterest outfit board, instagram reel (20 Oct 2025), cosmopolitan (8 Nov 2023).
US WebSearch: nestasia, two scraped spam copies, piktochart templates, shilpaahuja.com, simplified.com, eduyush.
Weak in top 10: 8 (stale 2023–2025 dates, boards, a reel, a 403).

**Cannibalisation gate:** 7 of 10 URLs shared with diwali-captions (b1) batchMeta.serp. Angle sharpened to graphics (canvas, type size, contrast, alt text); no captions-by-photo-type, no hashtags.

## Phase 2 — gap analysis
- Table stakes: a list of short lines, some Hindi, tone variety.
- Gap: none of the top 10 treats the quote as an image. None gives Instagram's uncropped size range, a type size, a contrast figure or alt text.
- Stale data: pages dated 2023–2025; many still assume 4:5 is the tallest feed ratio. Instagram's help centre now says 1.91:1 to 3:4 (1080 × 566–1440).
- Fan-out: what size is an Instagram quote post; is 4:5 or 3:4 better; how big should text be; which colours are readable; what to put in alt text; should the quote go in the caption; Hindi on a graphic; when to post for Diwali 2027.
- Angle: wins by being the only post that pairs 20 original quotes with Instagram's current 3:4 limit, measured WCAG contrast for festive pairs and W3C alt-text rules, framed by SubhSandesh's 48.3% phone-view share.

## Phase 3 — sources (all fetched 2026-10-22)
1. W3C, Understanding SC 1.4.5 Images of Text — https://www.w3.org/WAI/WCAG22/Understanding/images-of-text.html — "people cannot alter how text looks in images"; image of text plus the same real text meets the criterion. Cap-exempt domain.
2. W3C, WCAG 2.2 Recommendation (12 Dec 2024) — https://www.w3.org/TR/WCAG22/ — 4.5:1, 3:1 for large text (18 pt / 14 pt bold); thin strokes note.
3. W3C WAI Images of Text tutorial — https://www.w3.org/WAI/tutorials/images/textual/ — text alternative must contain the same text; decorative effects not described.
4. Instagram Help Centre, image resolution — https://help.instagram.com/1631821640426723 — 320–1080 px wide, 1.91:1 to 3:4 kept. Plain fetch returned an empty JS shell; read via Firecrawl scrape (HTTP 200).
5. Muhamad & Amali 2023, Iran J Public Health 52(8) — https://europepmc.org/article/PMC/PMC10512131 — systematic review of 28 studies; peer-reviewed, open access (CC BY-NC: cited, nothing reproduced). Full text read via Europe PMC XML.

Rejected: Applied Ergonomics 2017 legibility paper (Elsevier, banned); Frontiers font-size review (banned); ACM "Glyphexts" (403 on fetch, not verifiable).
Search terms (findpapers.mjs): "text legibility smartphone font size contrast reading"; "alt text images social media screen reader blind users".

Measured by the writer (WCAG relative-luminance formula): #7A1F1F/#FFF6E5 9.58:1; #F2C14E/#7A1F1F 6.12:1; #FFFFFF/#1A1A1A 17.40:1; #FF9933/#FFFFFF 2.13:1; #F2C14E/#FFF6E5 1.56:1.

## Originality
All 20 quotes were written for this post. They were checked by 5-word shingles against all 58 existing Diwali posts plus the b2 folder, and by 4-word shingles against 8 fetched ranking pages. Two incidental overlaps were rewritten: "darkest night of the month" and "diyas on the parapet". Hindi words were checked on en.wiktionary: दीया, उजाला, अमावस, कोना, अँधेरा, मिठाई, बाँटना, हिसाब, दूर, घर, साफ़, मन, हल्का, दरवाज़ा, खुला, छोटा, बड़ा, रात, नाम.

## Brief claims found false
- PLAN angle "4:5 1080x1350" is not the tallest size. Instagram now keeps 3:4 (1080 × 1440) uncropped. 4:5 still works.
