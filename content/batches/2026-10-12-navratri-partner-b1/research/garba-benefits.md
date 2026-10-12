# Research brief — garba-benefits

Keyword: **garba benefits** (also: garba dance benefits for health, garba calories burned, is garba good exercise). Cluster: explainer. bodyLanguage: en. Autocomplete demand rank 10. YMYL-lite: every claim sourced or labelled as practical advice; no medical advice.

## Phase 0 — first-party data

facts.md read (not regenerated). **Gate is thin for this keyword.** No facts.md line bears on dancing, exertion or health. Three lines are cited only in the invitation section, where they bear on the one-to-one invite: 48.3% phone opens (no-app point), 38.5% password rate, Raksha Bandhan 2026 lead time (49.4% same-day, labelled in body as a different-festival analogue, not Navratri data). None is in the first 150 words, by design (BRIEF §3), recorded as a failure. Template-spec features used: nine lines, up to six photos, nine diyas, dhol-beat game, colour pick, No → second Yes after five tries, 1080×1920 Dandiya Pass, password at publish, no app/account, English UI, one-to-one only.

## Phase 1 — SERP (WebSearch call 1 of 2 budgeted; 1 used in total)

`garba benefits` — **US-served (WebSearch)**. India-served positions unavailable this run. Not present in `serps.md` (41 SERPs), so no corroboration.

| Pos (US-served) | URL | Type | Words / structure | Direct answer | Data cited (date) | Weak? |
|---|---|---|---|---|---|---|
| 1 | navbharatlive.com/health/garba-dandiya-is-the-best-workout-for-fitness-1366994.html | Hindi news health piece, 25 Sep 2025 | ~600, H3 sections, no table | Headline claim, then listicle | "Study" says 300–400 kcal per 60–90 min; unnamed "2022 study" BP −5–10 mmHg; 3,500 kcal = 1 lb rule — no links | Weak |
| 2 | adityabirlacapital.com/healthinsurance/active-together/?p=60096 | Insurer wellness blog | ~700, 4 numbered "workouts", precautions titled "Navratri 2021" | "500 to 600 calories" an hour, unsourced | None; stale (2021) | Weak |
| 3 | edzy.ai CBSE MCQ page | Class 6 quiz answer | Not fetchable (connect timeout) | — | — | Weak (off-intent) |
| 4 | som.rku.ac.in/viewnews.php?id=858 | College news ("Yog Garba") | 404 on fetch | — | — | Weak |
| 5 | vajiramandravi.com/current-affairs/garba/ | UPSC current-affairs note, 12 Oct 2026 | Bullets + FAQ | Cultural, not health | UNESCO 2023 mention; "social equality" | Weak for health intent |
| 6–9 | berks.psu.edu event; theartycrowd.ca artist profile; second vajiram page; adityabirla JSON | Events/profiles | — | — | — | Weak |

Weak results in top 10: 9 of 9 returned. Gate 4 passes. No AI Overview visible in WebSearch output. None of eduyush/flick/hindutone ranked for this query.

## Phase 2 — gap

- **Table stakes:** calories, "full-body/cardio workout", mood/endorphins, community/UNESCO, precautions (hydration, shoes).
- **Gap:** nobody shows the calorie formula or that the figure depends on body weight and intensity (the two incumbents' figures, 300–400 per 60–90 min vs 500–600 per hour, contradict each other and neither is sourced); nobody cites the two garba-specific studies; nobody says what is unmeasured.
- **Stale:** the insurer page's precautions are labelled Navratri 2021.
- **Fan-out:** how many calories does garba burn; is garba good exercise; garba for weight loss; garba and mental health; garba and Parkinson's; fasting and garba; shoes/knees; who should avoid.
- **Angle:** the only garba-benefits page that shows the MET formula worked for four body weights (with above-resting kcal), grades each benefit against the two garba studies plus borrowed dance research, and names what no study shows.

## Phase 3 — sources (all fetched; findpapers.mjs + Europe PMC/OpenAlex/Semantic Scholar APIs; no 2nd WebSearch)

| # | Source | What it says (verified) | Read | Published |
|---|---|---|---|---|
| 1 | pacompendium.com/dancing (2024 Adult Compendium) | 03033 folk moderate 5.0 MET; 03031 nightclub/folk vigorous 9.8 MET; no garba code; red codes are estimates (03025 ethnic 4.5 is red, not used) | Full page | 2024 |
| 2 | JSIP 2019, doi 10.18231/j.jsip.2019.002 (linked via semanticscholar.org) | n=25 women 19–25, 3×/wk × 10 wk, 30-min sessions with 20 min garba; significant (p<0.05) only skinfold, sit-to-stand, sit-and-reach; non-experimental, no control; conclusion's cardio claim not supported by its own results line | **Abstract only** (S2 + OpenAlex APIs). Publisher URL ipinnovative.com 404; doi.org resolves to the 404; S2 page renders via JS (empty to fetcher) | 2019-09-15 |
| 3 | Mehta et al. 2024, Parkinson's Disease, PMC11390233 | 55 PD patients randomised garba 20 / PT 20 / control 15; 1 h × 5 d/wk × 12 wk; UPDRS 35.4→19.95; FoG, mood, sleep, fatigue improved; 6 near falls; excluded recent falls, MoCA<24 | Full text, CC BY | 2024-06-20 |
| 4 | Tarr, Launay, Dunbar 2016, Evol Hum Behav, PMC4985033 | 94 participants, Oxford, silent disco; synchrony → higher pain threshold and closeness; no more cooperation in weak-link game | Full text | 2016-02-25 |
| 5 | Turan & Turan 2026, Front Psychol, PMC13642181 | 20 studies; g=0.66 overall; folk 0.76 vs other 0.58, p=0.304; only Indian folk study (Mishra & Shukla 2022, 20 v 20) g=−0.05 | Full text, CC BY | 2026-10-08 |
| 6 | Ong et al. 2026, Sports Med Open, PMC13332931 | Fasted (no food/fluid) daytime exercise can worsen physiological responses and performance acutely | **Abstract only** (Europe PMC API) | 2026-07-04 |

Caps: pacompendium.com/dancing now in 2 posts (with dandiya-partner-steps) — at URL cap. PMC/Europe PMC are cap-exempt in verify.config. No Wikipedia body link, no doi.org link, no T&F/Sage, no UNESCO link (UNESCO 2023 inscription stated without a link). Tarr 2015 and Keller 2014 (used by siblings) deliberately not used. Not cited: any competitor; the navbharat "2022 study" (could not identify primary).

Searches run (findpapers.mjs): "Garba dance fitness components young adult females"; "garba dance"; "Indian folk dance heart rate energy expenditure"; "dance exertion endorphin pain threshold group"; "dance intervention meta-analysis depression anxiety"; "interpersonal synchrony prosocial behaviour meta-analysis"; "silent disco dancing synchrony pain threshold social closeness"; "dance floor surface hardness lower limb injury" (nothing usable — knee/footwear cautions are labelled practical advice in the body); "Ramadan fasting exercise performance hydration review".

## Brief / prompt claims checked

- Prompt: "UNESCO's 2023 inscription" — consistent with Wikipedia (Dec 2023) seen in the shared index; stated without a link (URL at cap).
- Prompt: JSIP 2019 "read it before citing" — full text is unreachable (publisher 404); only the abstract was read, and the abstract's conclusion overstates its own results (claims cardiovascular improvement; significant changes listed only for skinfold, sit-to-stand, sit-and-reach). Body says so.
- Prompt: the dandiya-partner-steps 60 kg figures (300 / 588 kcal) reproduce exactly from MET × kg; consistent.
- No BRIEF claim found false for this row.
