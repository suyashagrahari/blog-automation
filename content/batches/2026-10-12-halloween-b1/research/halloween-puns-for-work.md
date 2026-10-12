# Research brief — halloween puns for work (row 46)

- Slug: `halloween-puns-for-work` · absorbs "halloween puns for marketing" · theme puns · category `festive-beats`
- Written 2026-10-12. Firecrawl MCP disconnected → **2 WebSearch calls (US-served index, lower confidence)**.

## Phase 0 — first-party data

facts.md has no Halloween or workplace data (BRIEF §3). Used, verbatim:

- 48.3% phone-open share (2026-09-24): supports "keep it phone-short".
- Raksha Bandhan 2026 lead time (49.4% on the day, n=89) and "none more than 7 days ahead": disclosed in the prose as a different festival with a small sample.
- Occasion-dated pages 3.7% vs 96.3% romantic/everyday: used in the limits paragraph (SubhSandesh is not a work tool).

The template spec is first-hand product fact and is not counted toward the 3 facts.

## Phase 1 — SERP

| # | Query | Result | Type | Weak? | Notes |
|---|---|---|---|---|---|
| 1 | halloween puns for work | static.intrafocus.com ?p=37310 / 69437 / 31982 / 69959 | scraped/parasite pages | weak (spam) | fetch failed |
| 1 | " | live.museum.manchester.ac.uk/library/printable-halloween-decorations… | parasite page on a hijacked subdomain | weak | not fetched |
| 1 | " | wiki.uep.edu.py / ns1.mudfish.net "Halloween Puns For Marketing.pdf" | PDF spam | weak | not fetched |
| 1 | " | omeka.prmuseum.org halloween dress-up ideas | parasite | weak | not fetched |
| 1 | " | thryv.com.au (marketing puns, SMB software blog) | listicle | weak (low-DA SaaS blog) | HTTP 403 to ctx_fetch and fetch; no Wayback |
| 2 | halloween puns for coworkers office slack email | wordstream.com 2022 greetings & sayings | listicle | no (known incumbent) | HTTP 403; no Wayback snapshot |
| 2 | " | absence.io office-safe pranks (pub 2017-10-11, mod 2020-01-09) | 7 pranks, ~1,050 words, H2 list, no table, no FAQ | weak | not a pun page |
| 2 | " | attendancebot.com "Halloween at Work" (2025-10-03) | ~1,750 words, 10 activities, inclusion + HR playbook H2s, 1 mention of "pun" | weak | activity, not puns |
| 2 | " | hive.com 5 lessons from The Office Halloween episodes | ~1,670 words | weak | TV-episode tie-in |
| 2 | " | bustle 2015 pranks; smallbiztrends x3 (client posts) | off-topic | — | not fetched |

Corroboration: `serps.md` has only the head term "halloween puns" (3 weak: today, GH, rd, wordstream, wickerdarling). **PLAN's "weak 3/10" for row 46 is that head-term archetype, not a measured SERP for this keyword** (keyword-inventory.csv note: "puns head: today/GH/rd (3 weak)"). The US WebSearch index for the exact keyword is mostly spam, so the true weak count is unknown. Gate 4 (0 weak) does not trigger.

What the readable pages optimise for: office activities and pranks (absence.io, attendancebot, hive), not pun lists. Direct answers are late (attendancebot opens with "why Halloween at work is good for business"). None has a table; none rates risk by context; none gives a subject-line length rule; only attendancebot has an inclusion section, and it is generic.

## Phase 2 — gap

- Table stakes: a long list of puns; office-safe tone; a few marketing puns.
- Gap: no page groups puns by **work setting** (chat, meeting, subject line, potluck label, HR notice, department, banner) with a **risk level**, a sourced **subject-line limit**, or evidence on **affiliative vs aggressive humour**.
- Fan-out: what's safe at work · puns for Slack/Teams · meeting openers · email subject lines and length · potluck/desk signs · HR/all-hands · by department (sales, IT, finance, support, healthcare, teachers, remote) · marketing puns · coworkers who don't celebrate · when to post (2027 = Sunday) · when not to pun · thanking one colleague.
- Angle: wins by being the only post that sorts original work-safe puns by office setting, with a risk level per setting and an opt-in inclusion checklist, grounded in a 481-employee humour study and SubhSandesh's 48.3% phone-open share.

## Phase 3 — sources (all fetched)

| Source | What it says (verified) | Date | Notes |
|---|---|---|---|
| Braha & Karabulut, Behavioral Sciences 14(1):23, via europepmc.org PMC10813194 | 481 valid of 549 questionnaires (87%), private service firms in Kosovo, 2017–18; affiliative humour (+PsyCap) raises relational energy, aggressive humour lowers it | 2023-12-27 | Full text read, CC BY (MDPI). Peer-reviewed, OA. Subject test: pass |
| Mumtaz, Int Rev Soc Psychol, via europepmc.org PMC12372801 | Conceptual model: negative workplace humour → surface acting (esp. high need for affiliation), identity conflict → emotional exhaustion, rudeness; untested | 2024-10-08 | **Abstract only read**; CC BY. Subject test: pass |
| mailchimp.com/help/best-practices-for-email-subject-lines | ≤9 words and 60 characters; ≤3 punctuation marks; ≤1 emoji | none | Vendor help page, not a competitor. Fails swap test (could sit in captions-for-business) |
| jw.org/en/bible-teachings/questions/halloween-origin | "Christians should oppose wicked spirit forces, not pretend to celebrate with them." | none | Primary statement by a non-celebrating group |
| eeoc.gov/religious-discrimination | Employer must reasonably accommodate religious beliefs/practices unless burden is substantial; Groff v. DeJoy (2023) | none | US-only; fails swap test |

Rejected: Frontiers papers (PMC12549636, fpsyg 2020.499849): Frontiers banned batch-wide. Safety and Health at Work 2026 laughter scoping review (PMC13650304): Elsevier journal, excluded. HUMOR (De Gruyter) leader-humour papers: paywalled. Subject-line academic papers (Expert Systems with Applications 2022, IEEE BigData 2014): Elsevier and paywalled. No capped domain or paper used; capcheck shows none of the five at a cap.

## Writing notes

- 54 original lines (8 chat, 6 meeting, 7 subject lines, 7 potluck/desk, 6 HR, 14 department, 6 banner). Every subject line was checked against the Mailchimp limits (28–45 chars, ≤8 words, ≤2 punctuation).
- 5-word-overlap check against every sibling body: 0 hits. Avoided messages-for-adults coworker themes (printer, inbox jump scares).
- No "free" price wording. No gore, no religious mockery, no drinking jokes.
- /happy-halloween: described only from template-spec (bestie mode, letter, up to six photos, carve word, knocks three times, flashlight letter, 60-character question, first-answer email, 1080×1920 Boo License). Stated plainly that it is not a team tool. Alternative is /templates, for a plain thank-you to a colleague who does not celebrate.
