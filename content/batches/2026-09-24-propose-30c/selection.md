# Keyword selection — wave 4 (`2026-09-24-propose-30c`)

## Why these are not from the shortlist

The `2026-09-16-propose-100` run is **exhausted**. All 72 of its primary keywords are
built across waves 1–3. The 28 that remain break down as:

- **6 gated** (`do-not-attempt`) — B2B contamination (G1) or physical-gift / venue SERPs (G5)
- **2 merge-into-existing** — they point at a live page that needs an edit, not a new post
- **20 secondaries already covered** inside a built post, e.g. `propose day quotes for
  husband` inside `propose-day-wishes-for-husband`, `how to propose girl on chat` inside
  `how-to-propose-girlfriend-in-chat`, `love proposal lines in hindi` inside
  `propose-message-in-hindi`

Building 30 pages from that remainder would have produced 30 duplicates.

## Where wave 4 came from instead

The same run harvested **4,788 unique India-geo autocomplete suggestions** (3,339 at 4+
words) and selected only 100. Wave 4 is mined from the unselected remainder, applying the
run's own gates plus the three dedupe exceptions established in this repo:

- **language** — a different language is never a duplicate
- **occasion** — a different occasion is never a duplicate
- **subject** — propose/proposal vs not is never a duplicate

Filters applied, in order:
1. 4+ words
2. not among the 100 researched keywords, nor any of the 72 built primaries
3. drop B2B leakage (`proposal` as a business document: pdf, sample, tender, rfp, invoice,
   client, vendor, marketing, thesis, act, transformation, networks, assistant)
4. drop wrong-market (Cape Town, Melbourne, Sydney, London, NYC, Dubai) and the Indian
   city-venue queries the original run gated under G5 (Mumbai, Delhi, Bangalore, Pune…)
5. drop developer / literature / media intent (github, html, css, Chekhov, web series)
6. require a romance token
7. drop ≥0.70 token overlap against all 72 built slugs and all 905+ live slugs, with the
   three exceptions above applied

**1,646 candidates survived.** Wave 4 takes 30, chosen for axis coverage rather than raw
`prefix_hits`, because the high-`prefix_hits` tail is dominated by near-synonyms of pages
that already exist.

## The axes wave 4 opens that the original 100 never touched

| Axis | Posts | Why it is new |
|---|---|---|
| **Recipient side** — replying, accepting, refusing | 3 | All 72 existing posts are written for the person asking. Nobody has written for the person being asked. |
| **Six further Indian languages** — Tamil, Punjabi, Gujarati, Urdu, Assamese, Odia | 6 | The live corpus has zero pages in any Indian language. Waves 2–3 covered Hindi, Marathi, Bengali, Kannada, Telugu, Malayalam. |
| **Existing-language extensions** — evergreen (non-Propose-Day) lines in Kannada, Telugu; a Marathi *message* | 3 | Those languages had quotes/wishes pages only. |
| **Hindi date-question** — `kab hai`, `is it today` | 3 | A distinct Hindi-language query shape; the English `propose-day-2027` page does not serve it. |
| **Practical constraints** — without a ring, without saying "I love you" | 2 | Real questions no incumbent answers. |
| **Setting and decoration** | 2 | Physical staging, absent from the whole project. |
| **Brevity and captions** | 2 | A caption is a public artefact, not a sent message. |
| **Timing and length** | 2 | When to ask, and how long the ask should be. |
| **Family present** | 2 | The opposite situation to wave 2's at-home page, which is about privacy *from* family. |
| **Remaining** | 5 | shy-girl, meaning-in-Hindi, message-to-wife, message-to-boyfriend, cute-ways |

## Honest caveat

`prefix_hits` for this wave is lower than for the original 100 (mostly 1–5 against the
shortlist's 7–36). These are genuinely longer-tail. The trade is deliberate: the axes are
uncontested and non-cannibalising, where the remaining high-demand phrases were duplicates.
Several posts here are **correctness and coverage assets, not traffic assets**, and the
per-post `honestAssessment` says so.
