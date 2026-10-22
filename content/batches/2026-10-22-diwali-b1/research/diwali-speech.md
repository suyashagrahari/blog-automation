# Research brief — diwali-speech (row 24)

Keyword: **diwali speech** · secondaries: diwali speech in english, diwali speech in hindi, diwali speech for students · siblings: diwali-essay (written in parallel, checked before finalising), diwali-story (after this post; one-line unlinked pointer).
Head term (2 words): unwinnable on authority for this domain. Long-tail targets the post can serve: "how many words is a 2 minute diwali speech", "1 minute diwali speech for class 3", "short diwali speech in hindi for students".

## Phase 0 — first-party data
No Diwali or speech data exists (BRIEF §3). Used, verbatim from facts.md:
- Median miss-you letter length 88 words, n=214 (2026-09-25) — a length yardstick for word counts; template live since 2026-07-28, stated as "n = 214 since July 2026".
- Raksha Bandhan 2026 lead time, n = 89 (2026-09-09) — labelled in body as the closest festival analogue; supports "rehearse two days early".
- 48.3% of shared pages opened on a phone (2026-09-24) — in the /happy-diwali paragraph.
All three are tangential to speeches. `npm run facts` NOT run.

## Phase 1 — SERP (Firecrawl, location India, 2026-10-22; 1 search used)

| # | URL | Date | Shape | Direct answer | Notes |
|---|---|---|---|---|---|
| 1 | vedantu.com/english/speech-on-diwali | undated | 1-min, 2-min, long, 10-line samples; duration table (type / duration / best for); tips; FAQ | samples up top | "1 minute" sample = 62 words, "2 minute" = 94 words (counted). No wpm basis. Third person, generic ("victory of good over evil"); promotes crackers + "eco-friendly". |
| 2 | firstcry.com/intelli/... speech-on-diwali-in-english | 20 Sep 2025 | 10 lines, 1 min, 2 min, short, long; five-days list; "points to consider"; FAQ | samples | 2-min section ~219 words incl. lead-in; no wpm basis; tips generic (practise, eye contact). |
| 3 | in.pinterest.com pin | — | image | — | weak |
| 4 | youtube.com video | 25 Oct 2021 | video | — | judged from snippet; weak |
| 5 | byjus.com/english/speech-on-diwali | undated | ~400 words, two H2s, cracker safety, 2 FAQs | not a speech text | weak, no timing |
| 6–10 | pinterest pin (2024), talkdrill essay (7 Oct 2026), scribd upload, youtube (2025), pcsdelhi.in principal PDF | | | | 7 of 10 weak |

AI Overview / featured snippet: not observed through the API.

## Phase 2 — gap
- Table stakes: samples by duration, English; greeting opener; Rama's return; five days; a tips list; FAQ.
- Gap: no page states how many words fit a minute or cites a basis; Vedantu's "2-minute" sample (94 words) runs under a minute at a child's pace. No page uses research on young people's speaking anxiety; tips are generic. None gives Diwali 2027 dates inside the speeches. Jain/Sikh observances absent from the samples read.
- Stale: FirstCry 2025, BYJU'S undated; dates generic ("October or November").
- Fan-out → H2s: how long / how many words; speeches in English (1/2/3 min); Hindi speech; 2027 dates; time table; stage fright tips; where SubhSandesh fits.
- Angle: wins by being the only one of the five analysed that writes each speech to an exact count on a cited wpm basis, with delivery tips from two adolescent public-speaking studies.

## Phase 3 — sources (all fetched 2026-10-22)
1. Hasbrouck & Tindal (2017), *An Update to Compiled ORF Norms*, Tech Report 1702, U. Oregon — files.eric.ed.gov/fulltext/ED594994.pdf. Full PDF read. Table 4 winter 50th pct WCPM: G1 29, G2 84, G3 97, G4 120, G5 133, G6 145. US pupils, unfamiliar passages. Scholarly technical report.
2. Brysbaert & Vantieghem (2023), Psychologica Belgica 63(1), CC BY — PMC10360968. Full text read: 94 Dutch adults; reading aloud median 162 wpm (106–207); intro cites typical speech 140–180 wpm. Peer-reviewed.
3. Kahlon, Lindner & Nordgreen (2019), Child Adolesc Psychiatry Ment Health 13, CC BY — PMC6933883. Abstract + background read: 1 in 3 report anxiety giving a speech; mind going blank among common fears; 27 adolescents 13–16, one 90-min VR exposure, d = 1.53, held at 1 and 3 months; non-randomised. Peer-reviewed (BMC).
4. Velthuizen et al. (2026), Res Child Adolesc Psychopathol 54, CC BY — PMC12832577. Abstract + introduction read: 41 adolescents 11–17 with SAD, 5-min speech, 12 weeks group CBT; gaze to faces up, speech disruptions unchanged. Peer-reviewed (Springer).
5. Drik Panchang 2027 Diwali calendar (New Delhi) — date/festival reference only: 27/28/29/30/31 Oct 2027; Tamil Deepavali 28 Oct.

Entity checks (Wikipedia API, not cited in body): Bandi Chhor Divas Q4854576 (Guru Hargobind released from Gwalior Fort); Diwali (Jainism) Q16973943 (Mahavira's nirvana); Diwali Q10244; Public speaking Q18342738; Glossophobia Q2540262.

Rejected: PMC6764215 Kannada/English rate-of-reading norms (Frontiers — banned); PMC12190131 PSAS for adolescents (MDPI already at 3 posts in batch); PMC6428748 meta-analysis (Frontiers); PMC9158251/9158252 (Behavior Modification, SAGE — banned); PLOS ONE VR paper (journal cap pressure).
Searches: findpapers "public speaking anxiety children", "speech anxiety adolescents classroom oral presentation", "speaking rate words per minute", "rehearsal public speaking performance anxiety intervention"; Europe PMC REST title queries; ERIC API for ORF norms.

## Sibling check
diwali-essay appeared on disk mid-draft and was read (H2s, FAQs, Hindi sample, table). 6/7-gram scan against it and all batch posts: no shared sentence left (only the shared Drik Panchang URL). Its structure (10 lines / 150 / 300 / Hindi / "which fits which class" / "wrong help") overlaps this post's duration grouping by nature of the two queries; this post's H2 on SubhSandesh was renamed to avoid echoing the essay's.

## Phase 8 remediation (2026-10-22)

- **Mirror item, fixed.** Speeches regrouped by the speaker's class band (Classes 1-4 primary assembly; 5-8 middle-school; 9-12 or college) with 100/200/300 words and 1/2/3 minutes kept as attributes. Each H3 lead now ties length to the grade norm it rests on (Hasbrouck & Tindal mid-Grade 3 = 97, mid-Grade 5 = 133; Brysbaert & Vantieghem adult median 162). H1 changed to "Diwali Speech for Students, Class by Class, Word-Counted"; metaTitle keeps the minute phrasing for search. ItemList names and table rows updated to match. Office/society-function speeches not added: no word budget (body 1,797 plain-split words) and each would need its own count.
- **Recount:** speeches 100 / 200 / 300 / 40 words (plain split of the quoted lines); first two paragraphs of speech 1 = 47. Error fixed: the 300-word speech has 7 paragraphs, not 8, so the cue-card tip and FAQ now say seven / "four to seven cues".
- **First-party table column, structural.** facts.md re-read: the 13.6% voice-note share (29 of 214) is a page rate, not a per-row duration. Re-check when a probe of voice-note durations on /missyou-gf or /dedication has ~100 recordings.
