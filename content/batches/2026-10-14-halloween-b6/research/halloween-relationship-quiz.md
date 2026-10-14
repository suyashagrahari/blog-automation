# Research brief: halloween-relationship-quiz (rank 256)

Keyword: "halloween relationship quiz" (also covers "how well do you know your partner halloween"). Band 300–1,000/mo. Theme: couple.

## Phase 0: first-party data
I read facts.md and did not run `npm run facts`. No Halloween data exists. Facts used: 48.3% opened on a phone (27,725/57,456), 38.5% password-protect (2,000/5,199), 11.1 average views per page (all measured 2026-09-24).

## Phase 1: SERP (2 searches used)
- **WebSearch (US index)** for "halloween relationship quiz how well do you know your partner": thehartcentre.com.au (404), marriage.com x6 (quiz pages and paginated index pages), m.guardian.ng (DNS failure, judged from snippet), paired.com, two.byu.edu (DNS failure, judged from snippet). None of these is Halloween-themed.
- **DuckDuckGo (lower confidence)** for "halloween relationship quiz": gotoquiz costume quiz, quotev x2, marriage.com costume quiz, proprofs x2, buzzfeed user quizzes x2, foreverlovebird (30 couple games), marriage.com "Ultimate Halloween Quiz". Weak results: 7 (UGC quiz builders and BuzzFeed community quizzes).

| Page | Words / format | Direct answer | Data cited | Optimises for |
|---|---|---|---|---|
| paired.com 150 questions (26 Feb 2024) | ~3,000; H2 Q&A plus a numbered list of 150 | Intro, then lists | Names Gottman and Orbuch without studies, links or dates | App download; generic questions, some sexual |
| marriage.com how-well quiz (updated 13 Feb 2026) | 20 multiple-choice questions, interactive (ProProfs widget) | None | None | Quiz engagement |
| marriage.com couple's Halloween costume quiz | ~1,350; 13+ personality items | None | None | Costume personality result |
| proprofs couple's costume quiz | ~900; 10 items | None | None | Costume result |
| gotoquiz couple's costume quiz | ~530 | None | None | UGC quiz |
| foreverlovebird 30 games | ~3,600; H3 list ("Halloween Couple Trivia" is one item) | Late | None | Listicle |

**Table stakes:** a list of partner questions, compare answers, a light-hearted result.
**Gap:** no page offers a Halloween-themed partner-knowledge quiz with rounds, a scoring system, score bands, a long-distance version, or research on what a score means. Stale or absent data: Paired names experts without citations.
**Fan-out sub-queries:** questions to include, how to score, how long it takes, what a good score is, whether knowing your partner predicts happiness, what love maps are, playing over video, new relationships, Halloween dates.

**Cannibalisation:** 0 shared URLs with b2 halloween-games-for-couples (it shares only the paired.com domain, with a different URL). 0 shared URLs with b5 halloween-questions-to-ask-your-boyfriend. I read both siblings' questions. Their would-you-rather, fear, nostalgic and "Horror-Self Quiz" items are not reused, and a 5-gram check of my question lines against all b1–b6 files leaves only generic phrases. halloween-couple-challenges was not yet on disk at finalise.

**Angle:** this post wins by being the only one that gives a complete, scored Halloween how-well-do-you-know-your-partner quiz. That means 28 original questions, 39 points, and a confidence bet grounded in Swann & Gill 1997, plus a video version checked against time zones. It uses the 48.3% phone-open rate and the 38.5% password rate.

## Phase 3: sources (all on europepmc.org, which is cap-exempt)
1. Swann & Gill 1997, JPSP. MED/9325592. Abstract only (APA paywall). Confidence rose with relationship length; accuracy did not consistently rise.
2. Genzer et al. 2025, Nat Commun. PMC12780232. CC BY-NC-ND. n = 2,866 across 7 studies. In Study 6A (100 couples, 21-day diary), moderately overestimating a partner's negative emotions went with higher partner satisfaction.
3. Berlamont et al. 2022 (online), Motiv Emot. PMC9646273. 172 couples, together 11.40 years on average. Relationship-serving motivation predicted empathic accuracy; for men, the result was M 10.93 vs 15.73.
4. Griffes et al. 2024, Family Process. PMC11659094. The Seven Principles programme runs 12 lessons (6–24 h); the paper cites Doherty 2013 on rituals of connection. Family Process is now in 2 posts this batch.

Rejected sources:
- Steinebach 2025 (BMC Psychology): already used by flirty-halloween-texts, and texting papers are spent.
- Gottman IJERPH intervention: MDPI, which is full.
- PSPB "felt understanding" 2025: SAGE, which is banned.
- Scheibehenne 2011 partner-preference prediction: Elsevier, which is banned.
- BMC Psychiatry Gottman counselling: its full text never mentions love maps.

**Finding:** "love maps" is a concept from Gottman's 1999 trade book. I found no open-access peer-reviewed paper that measures love maps against relationship satisfaction. The term "lovemap" itself originated with John Money in a sexological sense.

## Other verifications
- The Newlywed Game debuted in 1966 (checked via the Wikipedia API, not linked; Wikipedia is at the batch cap).
- Time zones were computed with the IANA tz database. On 31 October 2026 and 2027, 20:00 in London is 16:00 in New York (4 hours apart, not 5), 01:30 on 1 November in Delhi, and 07:00 on 1 November in Sydney.
- The slug is free in Strapi, and festive-beats is a live category.
