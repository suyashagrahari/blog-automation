# Research brief — diwali social media post for business

- **Row:** 35 (b2rank 85) · slug `diwali-social-media-post-for-business` · anchor "diwali template design free" · language en
- **Phenomenon:** brand communication and platform specs (official Meta / LinkedIn / X pages)
- **Measured:** 2026-10-22. Searches used: 2 of 3 (WebSearch US index; DuckDuckGo html `kl=in-en`, lower confidence). Firecrawl unavailable.

## Phase 0 — first-party data

facts.md (2026-09-24 block + 2026-09-09 manual festival block). No Diwali data and no business/brand-post data exist. Used, labelled in the body:

1. 48.3% of shared pages opened on a phone (27,725 of 57,456 views) — first 150 words.
2. Raksha Bandhan 2026 lead time, n = 89: 49.4% on the day, 27.0% the day before, 5.6% two to three days ahead, 6.7% four or more, 11.2% after — first 150 words and the schedule table, labelled as the nearest festival analogue with n = 89.
3. No Raksha Bandhan 2026 page built more than 7 days ahead.
4. 48.4% of views on a touch device.

Template spec used only for the SubhSandesh section (one-person page, six-photo lanterns, liffafa letter, ~5 min, no app).

## Phase 1 — SERP

DuckDuckGo India top 10: shiprocket.in, webquickindia.com, adomantra.com, mydigitalsevak.in, happydeepawali.org, soravjain.com, webjinnee.com, pinterest.com, clickseek.in, admeducation.com.
WebSearch (US): visme.co templates (4), piktochart.com, shiprocket.in (2 URLs), kapwing.com (2), m.aisensy.com.

| # | Page | Words | Where the answer sits | Structure / format | Data and dates | Pixel specs | ASCI / ad rules | Optimising for |
|---|---|---|---|---|---|---|---|---|
| 1 | shiprocket.in campaigns | ~2,900 | after 2 context H2s | 7 brand case-study H3s, FAQ schema, no table | brand campaigns, years mixed (2021+) | none | none | "campaign inspiration", shipping upsell |
| 2 | webquickindia.com content ideas | ~1,950 | H2 3 | 15 ideas in 4 groups, per-platform tips, 2026 calendar table, caption formulas, mistakes, FAQ schema | Diwali 2026 dates | none | none | agency services |
| 3 | adomantra.com post ideas | ~4,000 | buried after "Diwali 2023" intro | 10 generic idea H3s, no table, no FAQ | 2023 framing (stale) | none | none | generic "ideas" |
| 4 | mydigitalsevak.in ideas for brands | ~2,070 | H2 1 (dates) | dates, countdown table to 8 Nov 2026, ideas by industry, 10 formats, "what to avoid", FAQ, sources | Drik Panchang 2026, Meta/Ipsos 2025 playbook via Business Today, SC green-cracker order 2025 | none | none (mentions Tanishq 2020 backlash) | agency SaaS sign-up |
| 5 | happydeepawali.org brands | ~740 | n/a | office-celebration H2s, FAQ | none | none | none | thin, off-intent |

Positions 6–10 judged from snippets (campaign roundups, Pinterest board, a listicle).

**Cannibalisation gate:** at most 1 URL shared with any existing Diwali post's `batchMeta.serp` (diwali-gift-messages b1; diwali-quotes-for-instagram, diwali-reel-ideas b2). Passes. Sub-intent kept distinct: siblings cover organic Instagram canvas (quotes-for-instagram), reels (reel-ideas), X character counting (short-diwali-quotes); this post covers business ad/Page specs, ASCI and a business schedule. A planned sibling `diwali-instagram-post-ideas` is in batch.json but not on disk at write time — orchestrator should check overlap.

## Phase 2 — gap analysis

- **Table stakes:** a list of post ideas; a countdown/calendar; things to avoid; captions.
- **Gap:** none of the 5 fetched pages gives a single pixel dimension from an official platform page, none cites ASCI (disclaimers, drip pricing, false urgency, influencer labels, children with fire), none mentions ASCI's 17 Sept 2026 AI-content guideline, none dates anything to Diwali 2027.
- **Stale:** adomantra frames around Diwali 2023; the others are dated to 8 Nov 2026.
- **Fan-out sub-queries → H2/FAQ:** what makes a business post different (definition); post ideas; image sizes per platform; when to post (schedule); what the ad rules say; AI creatives; when not to post; Instagram ad size, LinkedIn size, X size, child + sparkler, reposting customer photos, showing prices, "only a few left".
- **Angle:** wins by being the only post that gives business Diwali post ideas with original copy alongside the platforms' own October 2026 specs and the ASCI clauses a festive offer must clear, timed to 29 October 2027 against SubhSandesh's Raksha Bandhan lead-time data.

## Phase 3 — sources (all fetched 2026-10-22)

| Source | Type | What it supports | Subject / swap test |
|---|---|---|---|
| ascionline.in/the-asci-code/ | primary (self-regulatory code) | substantiation; misleading by omission; "grave or widespread disappointment"; children with matches/inflammable/explosive substances (ads addressed to children); plagiarism clause | subject: ad rules for business posts · not swappable to greeting posts |
| ascionline.in/the-asci-code-guidelines/ | primary | disclaimer placement/language/italics; video 2 lines, 4 s/line, 26 px at 1080; drip pricing, false urgency, disguised ads (11 May 2023, from 1 Sept 2023); influencer labels; Addendum II 6 Mar 2025; SGC/AI labelling signed 17 Sept 2026 | subject · not swappable |
| facebook.com/business/ads-guide/update/image/instagram-feed | official platform spec | 4:5, 1440 × 1800, JPG/PNG, 30 MB, 125-char primary text, 40-char headline | subject: platform behaviour |
| linkedin.com/help/linkedin/answer/a563309 | official platform spec | 1.91:1 at 1200 × 627; logo 400 × 400; cover 1512 × 256; 3 MB | subject |
| docs.x.com/x-api/media/quickstart/best-practices | official platform docs | 5 MB image cap, JPG/PNG/GIF/WEBP; no canvas published | subject |
| europepmc.org PMC13510129 (Qu & Lee 2026, Behavioral Sciences, CC BY) | peer-reviewed, open access, full text read | n = 460 MTurk experiment: brand selfie (hand-held, no face) → lower persuasion knowledge, higher purchase intention than consumer selfie; packshot intermediate | subject: brand image communication on Instagram |

Rejected: Ritual Revision During a Crisis (JPP&M — SAGE, banned); BMC Medicine food-retail scoping review (off-subject for most businesses); PLOS ONE candidates (journal at cap per task prompt); Meta Instagram Stories ad spec (read: 9:16, 1440 × 2560, safe zone 14% top / 35% bottom / 6% sides) dropped to stay within 6 outbound links.

Blocked: help.x.com and business.x.com (HTTP 403, Cloudflare); Meta Ads Guide returns 400 to plain fetch (read via ctx_fetch_and_index). help.instagram.com at domain cap — not used.

Generic statistics: 0. Wikipedia body links: 0.
