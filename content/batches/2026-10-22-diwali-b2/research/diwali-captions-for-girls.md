# Research brief — diwali-captions-for-girls (row 23, b2rank 73)

- Keyword: `diwali captions for girls` · anchor: `diwali captions for instagram for girl` · language: en
- Phenomenon (for papers): self-presentation and outfit posts
- PLAN angle: ORIGINAL captions for girls' Diwali photos (saree/lehenga/friends/solo); no line reused from diwali-captions. Sisters set added per task prompt.

## Phase 0 — first-party data (facts.md, 2026-09-24 vintage; `npm run facts` NOT run)
Relevant lines used (verbatim in `factsUsed`):
1. 48.3% of shared pages opened on a phone — first 150 words (platform-wide).
2. Raksha Bandhan 2026 lead time, n = 89, 49.4% built on the festival day — first 150 words, labelled as nearest festival analogue.
3. 38.5% of creators password-protect — sister/one-reader section.
4. Average views per created page 11.1 — limits section, labelled views not unique visitors.
No Diwali usage data exists (/happy-diwali is new); none implied. Template features only from `template-spec.md`.

## Phase 1 — SERP (2 of 3 searches)
- WebSearch (US index) — off-target: shilpaahuja.com, scraped spam on alumni.jntua.ac.in and lutonhoo.oandg.co.uk, tring.co.in, beacons.ai, adobe express, onlycaptions, nenow, eduyush.
- DuckDuckGo HTML, kl=in-en — **DuckDuckGo, lower confidence**. Top 10:

| # | URL | Date | Words (page text incl. nav) | Structure | Girl-specific? | Sources / mechanics |
|---|---|---|---|---|---|---|
| 1 | wowcaption.com/diwaligirl.html | undated | ~1,300 | one H2, single list ~100 lines | yes (saree, lehenga) | none |
| 2 | bakingo.com/blog/diwali-captions-for-instagram | 15 Oct 2025 | ~2,000 | 7 H2 by gift/sweets/story | no | none; cake-shop promo |
| 3 | captionsparks.com/diwali-girl-captions-for-instagram | undated ("2026") | ~1,450 | 15 tone H2s (cute, stylish, sassy, outfit, selfie, friends…) + 5 FAQ | yes | none |
| 4 | quotedtale.com/festivals/diwali-quotes-captions | 29 Sep 2026 | ~2,100 | 11 H2 by photo/tone (selfie & outfit, rangoli, diya, Hindi) | partly | none |
| 5 | captionvibes.com/diwali-captions-for-instagram | 5 Jul 2026 | ~2,900 | 10 H2 incl. "for girl", "for boy", Marathi, Hindi + FAQ | partly | none |
| 6–10 | iforher.com, dmlai.com (AI tool), scoopwhoop.com, captionsandquote.com, heartfeltverses.com | — | not fetched | snippets: tone lists | — | — |

Direct answer placement: every fetched page opens with a generic intro, lists start after it. Tone: emoji-heavy, second person, no data. Weak: 9 of 10 (caption farms, undated or stale, an AI tool page).

### Cannibalisation gate
Closest existing post: b1 `diwali-captions` (serp measured with Firecrawl India, query "diwali captions"). Shared URLs: **1 of 10** (bakingo.com/blog/diwali-captions-for-instagram). Below the 4-URL threshold; different tools, so indicative. b1 already has an "Outfit photos and selfies" set, 5-hashtag sets, alt text, a caption-vs-private-page table and the FAQ "What caption should a girl use for a Diwali outfit photo?" — all avoided here.

## Phase 2 — gap
- Table stakes: categorised caption lists; outfit/selfie/friends sets; short lines.
- Gap: no sisters set; nobody explains collab vs carousel vs tag for a group/sister photo; nobody addresses asking friends before posting; nobody cites anything or dates a platform rule; no 2027 dates.
- Fan-out → H2/FAQ: saree caption, lehenga caption, friends caption, solo selfie caption, sister caption, collab or tag, carousel limit, tag visibility, when to post in 2027, one-person alternative.
- Angle: wins by being the only post that sorts original captions by the girl's photo (saree, lehenga, friends, solo, sisters) and pairs group/sister shots with how Instagram collabs, carousels and tags actually behave, using SubhSandesh's phone-open and lead-time data.

## Phase 3 — sources (all fetched 2026-10-22)
| Source | What it says (used) | Date | Notes |
|---|---|---|---|
| europepmc.org/article/PMC/PMC13512515 — Marano et al., EJIHPE (MDPI) | Scoping review, 58 studies 2014–2026, females 10–30; appearance-focused use linked to body dissatisfaction/surveillance; appearance comparison & self-objectification mechanisms; body-positive/neutral content protective | 2026-07-23 | CC BY OA; abstract read via Europe PMC API; full text not read. MDPI 3rd b2 slot. |
| help.instagram.com/291200585956732 | Collab posts: shows on both profiles after acceptance; original author owns; privacy follows author; deletion removes from collaborator | undated | read via r.jina.ai (page is client-rendered) |
| help.instagram.com/269314186824048 | Carousel up to 20 photos/videos; one caption/location; tag per photo; one orientation for all | undated | same |
| help.instagram.com/412981112149384 | Tag visibility public vs private; notification only if follower (private) | undated | same |
| help.instagram.com/351460621611097 | Up to 5 tags (hashtags) per post; private-profile posts not on public hashtag pages | undated | same; also used by b1 (different batch) |

Papers searched (findpapers.mjs): "self-presentation Instagram women photos captions", "Instagram selfie posting young women self-presentation", "sari saree Indian women dress identity". Rejected: Frontiers (PMC13668808, PMC11157131), SAGE (Digital Health), Elsevier (Addictive Behaviors Reports), PMC13160335 (already used by b1 diwali-captions), Wiley IJOP BoPo experiment (less relevant).
Not linked: help.instagram.com/1631821640426723 (3:4, 1080×1440) — URL at its 2-post cap; stated in body as Help Centre fact per BRIEF §A. Close Friends page (2183694401643300) returned no body text — not used.
Date reference only (not cited): drikpanchang Diwali puja calendar 2027 — Dhanteras Wed 27, Narak Chaturdashi/Tamil Deepavali Thu 28, Lakshmi Puja Fri 29, Govardhan Sat 30, Bhaiya Dooj Sun 31 Oct 2027.

## Originality check
All 45 captions compared by 4-gram against every Diwali post on disk (89 files across b1, b2, 2026-08-19, bouquet-3) and the 7 competitor pages fetched: no caption shares more than a generic 4-gram ("for the rest of" etc. removed in revision); none matches a competitor line.

## Links
Internal: /happy-diwali (sister/friend one-reader section) + /photo-puzzle (one oneOfLinks alternative: photo jigsaw revealing a letter; body says it is not a Diwali template). Outbound: 5.
