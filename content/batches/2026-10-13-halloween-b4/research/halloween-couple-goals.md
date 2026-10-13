# Research brief — halloween couple goals (row 169)

- Slug: `halloween-couple-goals` · theme couple · plan weak 7/10 · absorbs "halloween couple aesthetic"
- Batch: 2026-10-13-halloween-b4 · written 2026-10-13

## Phase 0 — first-party data
No Halloween data exists in facts.md (BRIEF §3). Platform-wide lines used, verbatim:
- 38.5% of creators password-protect their page before sharing it (2,000 of 5,199) — measured 2026-09-24 (first paragraph; also ties to the "keep some goals private" argument)
- 48.3% of shared pages are opened on a phone (27,725 of 57,456 views) — measured 2026-09-24 (first paragraph)
- Average views per created page: 11.1 — measured 2026-09-24 (card section)
Template features from `template-spec.md` only (six photos, pumpkin word, knock three times, fog portraits, flashlight letter, 60-char question, first-answer email, 1080×1920 Boo License with bat/vampire/black cat costumes; premium: 60 s voice note, 12 photos, unlock time).

## Phase 1 — SERP (WebSearch, US index, 1 search; 9 results returned)

| # | URL | Type / words | Direct answer | Data | Format | Optimising for |
|---|---|---|---|---|---|---|
| 1 | hercampus.com/school/cwu/relationship-goals-8-our-favorite-halloween-couples | Student contributor listicle, ~600 words | None; fictional/celebrity couples | None | 8 named couples, no table/FAQ | "relationship goals" fandom |
| 2 | colbyforecasting.bigelow.org/... | Hijacked-subdomain spam | — | — | — | Counted weak, not analysed |
| 3 | boston.com/love-letters/tell-us/2024/10/17/... | Reader call-out + submission form, ~250 words of prose | None | None | Form | Reader submissions on costume stress |
| 4 | newsable.asianetnews.com/gallery/lifestyle/halloween-2025-9-scary... | Photo gallery, 9 slides, 1–2 lines each | None | None (Getty captions) | Gallery | Scary couple costumes |
| 5 | travelpander.com/?p=91045 | Caption listicle, generic | Caption examples | None | Lists | Couple captions |
| 6 | nbcnewyork.com/holidays/halloween-horror-nights-proposal/6411370/ | News story, Oct 2025 | N/A | TikTok view count | News | One couple's proposal |
| 7–8 | nbcconnecticut.com (same story, amp + canonical) | News | — | — | — | Duplicate of 6 |
| 9 | email.integrations.sell.do/... | Hijacked-subdomain spam | — | — | — | Counted weak |

Weak in returned top 9: **8** (only the NBC story is an established outlet, and it is off-intent). No page defines "couple aesthetic", none gives palettes, none cites research. Gate 4 not triggered.

## Phase 2 — gap
- Table stakes: couple pairings, a fun/visual list, captions.
- Gap: no page treats "couple goals / couple aesthetic" as a visual system (palette, outfits for both, home, date, photo, playlist), and none addresses comparison culture with evidence or offers non-performative goals.
- Fan-out sub-queries → H2s/FAQs: what are couple goals; what is a couple aesthetic; which aesthetics; colours/palettes; how to choose if styles differ; does "couple goals" content hurt; realistic goals; whether to post; non-scary option; card; Halloween date.
- Angle: "Wins by being the only post that turns 'couple goals' into 9 named couple aesthetics with hex palettes and per-partner outfits, then sets 18 private October goals against the comparison research, using the 38.5% password-protect rate."

## Sibling non-cannibalisation
- b2 halloween-couple-outfit-ideas: coordination-style outfits with named palettes (Ink and ember, Bruised plum, Candle wax, Poison green…). Avoided those colour pairs and garments.
- b2 halloween-captions-for-couples / photoshoot-ideas / famous-halloween-couples, b1 halloween-activities-for-couples (31-day calendar), b4 halloween-couple-poses: H2/H3s read; no shared idea (no captions, no shoot set-ups, no poses, no week-by-week calendar, no famous pairs). 5-word overlap script run against every b1–b4 file: only template-spec/facts/date phrasing overlaps.

## Phase 3 — sources (findpapers + Europe PMC REST + OpenAlex; no extra web searches)
Queries tried: "social comparison romantic relationship social media satisfaction", "relationship social comparison Instagram couples", "romantic relationship comparison online envy partner", "shared novel activities couples relationship quality", OpenAlex "relationship goals instagram couples comparison", "couple portrayals social media relationship satisfaction", "everyday gratitude booster shot romantic relationships".

1. **Taba M, Lewis L, Cooper SC, et al. (2020) Sexual Health 17(5):467–474**, CC BY, doi 10.1071/SH20056. Link: https://europepmc.org/article/MED/33176904. Full text read (UTS OPUS PDF). 16 interviews, ages 16–19; 9 raised "relationship goals" unprompted; all participants raised incompleteness of online portrayals; reported "peer pressure" to post happy couple photos. Subject test: yes (this is the "couple goals" trend itself).
2. **Chang Y-P, Way BM, Sheeran P, Kurtz LE, Baucom DH, Algoe SB (2022) Scientific Reports**, PMC9271060. Full text read via Europe PMC. 5-week field experiment, 125 couples completing; private 5-min if-then gratitude plan → more time co-present vs control, mediated by expressed gratitude; effect concentrated in CD38 CC expressers (stated in body).
3. **Fejes-Vékássy L, Ujhelyi A, Faragó L (2020) Current Psychology**, CC BY, doi 10.1007/s12144-020-01187-0. ABSTRACT ONLY (Springer client challenge; ELTE repository handle 404; CORE download 403 — not worked around). Study 2 N = 238; jealousy and satisfaction core predictors of post frequency/browsing.
4. **Utz S, Beukeboom CJ (2011) JCMC 16(4):511**, doi 10.1111/j.1083-6101.2011.01552.x. ABSTRACT ONLY (OUP 403, VU preprint 403). Low-self-esteem → idealised picture; need for popularity → SNS jealousy.

Not used: PMC13203665 (self-expansion; already in 6+ Halloween posts), SAGE/Frontiers/Elsevier hits (banned), IJSR (predatory). Prompt-named b2/b3 visibility papers avoided.
Cap check: `capcheck.mjs` run — no domain or paper at cap from this post; europepmc.org exempt; link.springer.com and academic.oup.com new to the batch.

## Audit failures (3)
- First-party table column — structural (no Halloween/aesthetic data).
- 3–6 outbound links all fetched — two publisher pages bot-walled; abstract-only verification.
- Swap test — Chang 2022 and Utz 2011 are general couple papers.
