# Research brief: garba-partner-vacancy-meaning

- Keyword: `garba partner vacancy open meaning in hindi`. The page also covers: garba partner vacancy, garba partner vacancy open, garba partner vacancy meaning. Autocomplete demand rank 3.
- Body language: `hi-mixed`. The page is framed in English. Every line is given in Devanagari, then romanised Hinglish, then an English gloss.
- Slug `garba-partner-vacancy-meaning` is free in Strapi (checked 2026-10-12, total 0).
- Budget: 1 of 2 WebSearch calls used. No browser tools.

## Phase 0: first-party data

facts.md was read by hand; `npm run facts` was not run. The four facts below are cited verbatim in `factsUsed`:

| Fact | Why it bears on this keyword |
|---|---|
| 48.3% of shared pages opened on a phone | The meme and every reply to it happen on a phone. Used in the opening and the table. |
| 38.5% of creators password-protect | Supports the argument that the serious ask happens in private, not in public comments. |
| Raksha Bandhan 2026 lead time: 49.4% built on the day, median 0 | Used to say "reply within the nine nights". The body states that it is Raksha Bandhan data, a one-day festival, n=89. |
| 90.9% of started pages published | Table column. A weak fit, and the audit should treat it as thin. |

There is no Navratri or dandiya-partner usage data, and the page does not imply any. The template features described come only from template-spec.md: nine lines, six photos, the 1080×1920 pass, No turning into Yes after five tries, English UI, one-to-one use. The page avoids the word "free".

## Phase 1: SERP (US-served, from WebSearch, 2026-10-12)

| # | URL | Type | Words (approx.) | Answers the meme? | Weak? |
|---|---|---|---|---|---|
| 1 | aajtak.in, the ₹1,000 garba partner story (16 Sep 2026) | Hindi news | ~1,400 incl. chrome | No. It covers the paid rent-a-partner pitch. Its subhead says readers "expressed a wish to apply", the same job-ad register. | Yes |
| 2 | edzy.ai, CBSE MCQ on garba | Quiz | ~160 | No | Yes |
| 3 | testbook.com, garba origin MCQ | Quiz | ~2,700 incl. chrome | No | Yes |
| 4 | hinkhojdictionary.com, "notified vacancy" | Dictionary, wrong phrase | ~390 | No (अधिसूचित रिक्ति) | Yes |
| 5 | folklore.usc.edu ?p=35994 | Folklore archive | fetch failed | Unknown, title only | Yes |
| 6–9 | weblio.jp ×2, cp.thecable.ng (scraped), graphsearch.epfl.ch | Off-topic or scraped | n/a | No | Yes |

**Weak count: 9 of 9 returned (10th slot empty), so the Gate 4 abort does not apply.** No AI Overview or featured snippet showed in the tool output. serps.md (41 SERPs from 12 Oct) has no entry with "vacancy", so there was nothing to corroborate against.

The prompt said "the SERP is likely reels and posts". That is **only partly true**. The US-served WebSearch returned no reels. A DuckDuckGo HTML query (`"garba partner vacancy"`, fetched with ctx_fetch_and_index, not a WebSearch call) did return Instagram reels:

### Usage evidence: public captions read through the DDG index (reels themselves not opened)

We read five reel captions from DDG snippets, so this is the indexed caption text only:

- 18 Aug 2026: "Garba partner vacancy is officially OPEN", followed by outfit/vibes/skills "pending" lines in job-review style.
- 8 Sep 2026: "Garba partner vacancy available", with a comment "Aur Hoga to 😂".
- 9 Sep 2026: "Garba partner vacancy available comment now", tagged #navratri #garba.
- Undated: "Vacancy available for a garba partner".
- 4 Oct 2026: "Garba Partner Vacancy Open", with a college and town hashtag.

Handles are not named in the post because they are private individuals. The body quotes only short phrases ("officially OPEN", "vacancy available, comment now"). The three tones (flirting, real partner search, friend joke) are our reading, not something the captions label. The body says so.

## Phase 2: gap and angle

- **Table stakes:** none. No ranking page explains the phrase.
- **Gap:** all of it. That covers the meaning, the Hindi rendering, the tone, how to reply, original lines, and the consent line.
- **Fan-out queries:** what it means; the Hindi word; why job-ad language is used; how to tell the tone; how to reply yes, no, or as a friend; status lines to post; comment vs DM; what to do when it turns into harassment.
- **Angle:** the post wins by being the only page that decodes the meme from dated captions and dictionary senses, gives original replies in three scripts, and draws the consent line with BNS s.78.

## Phase 3: sources (all fetched 2026-10-12)

| Source | What was verified | Read |
|---|---|---|
| Cambridge Dictionary, "vacancy" | Two C1 senses: an available space, and a job "no one is doing… available for someone new" | Full entry |
| McGregor via DSAL, रिक्त p. 864 | "emptied, empty; vacant" | Full entry. DSAL is cap-exempt. Publication year not shown, so not printed. |
| DiDonato & Jakubiak 2016, EJOP 12(3), CC BY, published 19 Aug 2016 | n=224; positive humour used for both short- and long-term pursuit; negative humour limited for long-term; target's positive humour increased attraction, especially women's | **Abstract only.** The full text is open access but was not read. |
| Martínez-Díaz et al. 2026, Healthcare 14(7):863, PMC13073261, CC BY, 27 Mar 2026 | 3 focus groups, 23 women aged 21–42; unsolicited sexual messages/images, persistent harassment mostly by strangers, new accounts made after blocking; coping mainly by blocking and reporting | Full text XML |
| BNS 2023 s.78, MHA gazette PDF (25 Dec 2023) | s.78(1)(i) text quoted; s.78(2) first conviction up to 3 years and fine | Section read in the PDF text |
| Instagram announcement, 10 Aug 2021 | Limits hides comments and DM requests from non-followers and recent followers; Hidden Words rolled out globally for abusive DM requests | Full page. The date was taken from the page; a 2024 date also appears on the page, probably the footer. |

findpapers.mjs queries tried: "unwanted sexual messages social media young women India", "online sexual harassment unsolicited messages prevalence", "humor in flirting initiation romantic interest", "relationship status disclosure Instagram stories self-presentation". No India-specific open-access paper on unwanted DMs turned up. The Instagram self-disclosure hits were in low-quality journals and were skipped.

Caps: capcheck shows none of these domains at cap. europepmc and dsal are exempt. Nothing comes from Taylor & Francis, Sage, Wikipedia or doi.org. No competitor links.

## Structural limitations

- The usage evidence is five DDG snippet captions, not a measured sample, and no India-served SERP was available.
- The slug, fixed by PLAN.json, drops "open" and "in hindi". This is recorded as a failed audit item.
- The verifier exits 1 only because batch.json `blogs` does not match the files on disk. That is the orchestrator's file and was not touched.
