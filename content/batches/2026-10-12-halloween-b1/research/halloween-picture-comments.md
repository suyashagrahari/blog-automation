# Research brief — halloween picture comments

- Batch: 2026-10-12-halloween-b1 · PLAN row 43 · slug `halloween-picture-comments`
- Keyword: **halloween picture comments** · absorbs: "comments for halloween pictures"
- Theme: captions · PLAN weak score 4/10 · band 10,000+/mo (PLAN "demand 17")
- Date of research: 2026-10-12

## Phase 0 — first-party data

facts.md read directly (no `npm run facts`, per BRIEF §3). No Halloween usage data exists, and none is stated or implied. Platform-wide lines used, all labelled platform-wide in the body:

- 48.3% of shared pages are opened on a phone (27,725 of 57,456 views) — measured 2026-09-24
- Average views per created page: 11.1 — measured 2026-09-24
- 38.5% of creators password-protect their page before sharing it (2,000 of 5,199) — measured 2026-09-24

Relevance: comments are read on phones (length rule), a one-person page is reopened (11.1 views) where a comment is read once, and 38.5% of creators lock pages, which is the "some things don't belong in a public thread" argument. None of them measures comments; the body says so.

## Phase 1 — SERP (WebSearch, 2 of 2 searches used)

Firecrawl MCP is disconnected (BRIEF §9), so both searches ran on WebSearch, which serves a **US index**. Demand for this phrasing may be India-heavy (PLAN band, Hinglish-adjacent phrasing "picture comments"); the US index cannot confirm or deny that, so confidence in the SERP read is **low**. The keyword is not in `serps.md`.

1. `halloween picture comments` — 10 results, **10/10 weak**: two DAZ 3D forum threads, two Parfumo perfume-photo pages, a UK local-newspaper archive gallery, a Drupal group, a becomeanex.org community post, a Goodreads author blog, an Emory library blog post, an itch.io post. None answers the query; none is a list of comments. Gate 4 passes (weak results exist).
2. `comments for halloween pictures instagram friends` — returns **caption** listicles (intent mismatch: captions for your own post). Top 5 fetched with ctx_fetch_and_index:

| # | Page | Words (approx) | Structure | Where answer appears | Data cited | Format | Optimising for |
|---|---|---|---|---|---|---|---|
| 1 | refinery29.com halloween-captions-for-instagram | ~900 | H2 by mood (quarantine, lyrics, couples, costumes) | after a 150-word intro | none; dated Oct 2020 (quarantine framing, stale) | lists, song lyrics | "halloween captions for instagram" |
| 2 | myunidays.com captions-for-all-of-your-halloween-instagrams | ~400 | H3 couples / friend pics / party / selfies | after 2-sentence intro | none; 8 years old | short quote lists | captions |
| 3 | pallyy.com halloween-captions-for-instagram | ~1,500+ | H2 short / funny / spooky / costume / couples / group / kids / puns | first paragraph | none | numbered lists, CTA to own caption generator | captions + tool signup |
| 4 | beacons.ai halloween-captions-for-instagram | ~1,200 | H2 by mood | after intro | none; Apr 2025 | emoji-led bullets | captions |
| 5 | aol.com (Parade syndication) 175 captions | ~3,000 | numbered 175 list by theme | after intro | none; Oct 2024 | long numbered list, lyrics, film quotes | captions |

All five are competitors (wishes/caption content farms, Parade) — never cited or linked.

## Phase 2 — gap

- **Table stakes:** grouping by mood/costume type (scary, cute, funny, couple, group), emoji use, puns.
- **The gap:** none of the ten head-term results and none of the five caption pages addresses **commenting on someone else's photo**: who posted it (crush, boss, a parent posting their kid), what tone is safe, what reads as weird. Not one cites any research on how feedback lands.
- **Stale data:** Refinery29 (2020 quarantine framing), UNiDAYS (8 years old).
- **Unanswered:** how to comment on a crush's photo without being creepy; what to say on a child's costume photo; whether a coworker's/boss's photo needs a different register; how long a comment should be.
- **Fan-out sub-queries:** what to comment on a friend's Halloween picture; what to comment on a crush's costume; comment on boss's Halloween photo; what to say about a kid's costume; emoji comments for Halloween pictures; one-word comments; is it weird to comment on an old/ex's photo; should I comment or DM.

**Angle:** Wins by being the only post that sorts Halloween picture comments by whose photo it is (including a crush, a boss and a parent posting a child) and grounds "lands vs feels weird" in five open-access studies on feedback, appearance and praise, with SubhSandesh's platform-wide phone-open and password rates explaining when a public comment is the wrong format.

## Phase 3 — sources (all via europepmc.org, cap-exempt host; papers checked unused across the batch)

findpapers queries tried: "online comments compliments social media feedback self-esteem", "likes and comments wellbeing", "Facebook comments composed communication tie strength", "appearance comments social media body image", "praise effort children process praise", "parent praise process person children motivation", "receiving likes Instagram neural reward adolescents", "compliment response appearance versus ability", "sharenting parents posting children photos privacy".

| Source | What it says (verified) | Read | Published |
|---|---|---|---|
| Wu & Zhang, BMC Psychology 14:1164 — PMC13459264 (CC BY) | 3-wave, 8-month study, 398 Chinese young adults; lower like feedback at baseline predicted depressive (β = −0.14) and anxiety (β = −0.11) symptoms 4 months later; comment feedback also significant (H2 supported) with smaller effects via self-esteem; self-esteem + social comparison mediated 65.0% of the total effect (37.1% + 27.9%) | full text | 2026-06-05 |
| da Silva Pinho et al., Science Advances — PMC11498218 (CC BY) | Instagram trace data N = 16,613 users / 1.6M+ posts: adolescents more sensitive to social feedback than adults; experiment N = 194: adolescents' mood hit harder by fewer likes | full text (abstract + relevant passages) | 2024-10-23 |
| Marano et al., Eur J Investig Health Psychol Educ (MDPI) — PMC13512515 (CC BY) | Scoping review, 58 studies (2014–2026), females 10–30: appearance-focused engagement consistently linked to body dissatisfaction, surveillance, negative affect; body-positive/body-neutral content most promising protective category | abstract + table 2 | 2026-07-23 |
| Gunderson et al., Child Development — PMC3655123 | Parents' praise of effort at 14–38 months (N = 53) predicted incremental motivational frameworks at 7–8 years; praise of inherent traits was not associated with later fixed frameworks | **abstract only** (full-text XML returned HTTP 500; author manuscript, free to read) | 2013-02-11 (online) |
| Motevalli et al., F1000Research — PMC12344405 (CC BY) | Systematic review of 21 studies (2019–2024): sharenting motivated by social validation and impression management; many children object to sharing without consent | full text (count) + abstract | 2025-07-16 |

Not used: PMC13160335 (Instagram feedback attributions, PLOS ONE 2026) — most on-subject, but already cited by halloween-wishes-for-instagram and the captions siblings writing in parallel are likely to pick it; left for them. Frontiers papers excluded (frontiersin over cap). PMC12109193 (boys' compliments & sexism) not used — adolescent dating-violence frame does not fit.

## Notes / brief claims checked
- Prompt says caps for nrf/doi/frontiers etc. are full — consistent with capcheck 2026-10-12 output.
- Sibling slugs `halloween-makeup-captions`, `halloween-captions-for-stories`, `halloween-one-word-captions` do not exist yet in blogs/, so "reuse no line" could only be checked against `halloween-wishes-for-instagram.json` (done by script, 0 overlaps).
