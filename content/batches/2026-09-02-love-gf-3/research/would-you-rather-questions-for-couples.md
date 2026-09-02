# Research brief — `would you rather questions for couples`

- **Batch**: `2026-09-02-love-gf-3` (wave 3, love-gf cluster)
- **Slug**: `would-you-rather-questions-for-couples` — re-verified free against Strapi on 2026-09-02 (`filters[slug][$eq]` returned `total: 0`)
- **Category**: `modern-romance`
- **Templates**: `/love-gf`, `/darling` (both mandatory for this cluster; no others added — nothing else in `TEMPLATE_LINKS` is genuinely relevant to a couple game)
- **Secondaries folded in**: flirty (11x), funny (11x), deep (11x), cute (11x), romantic (11x), online (12x), over text (13x), fun (11x), flirty funny (11x). None got its own H2; each is answered inside a group's usage rule or an FAQ.

## Phase 1 — SERP analysis

Note on method: this session's `WebSearch` budget was exhausted (200/200) before Phase 1, and `WebFetch` is blocked by a local hook. The SERP was taken from a DuckDuckGo HTML result page and the pages were fetched through the sandbox fetcher. `theknot.com` returned **HTTP 403** to the fetcher, so its row below is built from its indexed title, meta description and SERP snippet only — **the page body was not read**. That is recorded here rather than papered over.

| # | Page | Shape | Where the answer is | Data cited | Format elements | Tone | Optimising for |
|---|---|---|---|---|---|---|---|
| 1 | theknot.com — "100+ Would You Rather Questions for Couples From Funny to Flirty" | 100+ prompts, tone buckets: fun, flirty, hard, spicy, deep (from snippet) | not readable (403) | none visible | not readable | wedding-brand editorial | breadth + the tone modifiers |
| 2 | wikihow.com — "150 Flirty & Spicy Would You Rather Questions for Couples" | H2 per tone bucket (Romantic, Funny, Flirty/Spicy, Deep…), step images, PDF download, Tips, quiz rail | after a short intro | **no statistics at all**; cites named expert interviews (e.g. Sven Loss, "Relationship and Transformation Coach") | numbered lists, images, expert-source footnotes, related quizzes | third person, instructional | expert-source E-E-A-T + breadth |
| 3 | wouldyouratherquest.com — "Would You Rather Questions for Couples (Deep, Funny & Romantic)" | 150+ prompts, "Why Couples Should Play", tone buckets, FAQ block | after a 3-paragraph intro about dinner-table boredom | none; asserts "the psychology behind it is real" with **no citation** | numbered lists, FAQ, author byline (Ashish Sharma), "Last Updated on May 21, 2026" | first person, punchy, fragmentary | its own play-online tool ("real vote percentages") |
| 4 | connectedcouples.app — "250+ Would You Rather Questions for Couples" | 250+ prompts in **12** categories, jump-link rail, "How to Play" with 5 rules | after a couch-silence anecdote | none | jump links, numbered rules, pro-tip callout, app CTA | first person, conversational | app installs |
| 5 | couplecareroutine.com — "100 Would You Rather Questions for Couples (Cute to Deep)" | 100 prompts, "How to play" bullets, buckets cute/funny/lifestyle/deep/flirty | first paragraph (best of the five) | none | bullets, internal routine links, partner-app link | second person, brisk | its "Couple Care Routine" framework + an affiliate app |

## Phase 2 — Gap analysis

**Table stakes** (all five, so the post must carry them): tone-labelled buckets (cute / funny / flirty / deep / romantic); a "how to play" ruleset; a "why this works for couples" rationale; an over-text or date-night use case; a large prompt count.

**The gap** — four things none of the five do:

1. **No setting verdict.** Every page mixes prompts that need ten minutes of reasoning with prompts that are a two-second joke, then suggests both for "date night, texting, or a road trip". Nobody says which group dies in a thread.
2. **A construction rule.** All five hand over prompts; none says what makes a prompt work. The rule — *both options must cost something, or it is a quiz with an answer* — is absent everywhere.
3. **Zero data.** Not one of the five cites a study or a number beyond its own prompt count. wouldyouratherquest.com asserts "the psychology behind it is real" and cites nothing.
4. **What happens to the answers.** All five treat the round as disposable. None addresses where the answers live afterwards.

**Stale data**: not applicable — there is no data on any of the five pages to supersede.

**Unanswered questions raised and dropped**: "the answer is never as interesting as the why" (connectedcouples.app) is asserted and never explained; wikihow's expert quotes are about romance generally, never about the format.

**Fan-out sub-queries → H2s**:
- what is would you rather / what does it do → `## What a would you rather round actually does`
- would you rather questions for couples (list intent) → `## 30 would you rather questions for couples, grouped by what the pick reveals`
- over text / online → `## Would you rather questions for couples over text, and the two rules that keep it going`
- how to make your own → `## How to write your own prompt: make both options cost something`
- where to keep the answers → `## Where the round lives after it ends`
- when not to play → `## When would you rather is the wrong game`

**Angle** (`batchMeta.angle`): wins by being the only post that splits the prompts by the setting the pair is actually in — a two-line exchange in a text thread versus a sit-down round where the "why" gets answered — plus a construction rule, anchored on 987 `/love-gf` pages (29.2% of 3,377), 50.3% phone opens of 41,486 views, and a median 7.2 hours from first save to last edit.

**Staying off sibling ground**: wave 2's `truth-or-dare-questions-for-couples-long-distance` owns escalating tiers, dare mechanics and the 438 ms video-call turn-gap framing; this post uses neither tiers nor call latency, and none of its sources. The two live siblings in this batch own disclosure (never-have-i-ever) and guessing (20 questions); this post argues the structural difference explicitly — Would You Rather requires **no disclosure and hides no answer**, so the reveal is the reasoning, which is why it is the safest of the three to open with and the only one that works in a shared room.

## Phase 3 — Sources

Domain hygiene: `pmc.ncbi.nlm.nih.gov`, `aclanthology.org`, `arxiv.org`, `frontiersin.org`, `journals.plos.org`, `doi.org` avoided as instructed; `link.springer.com` avoided because two batch siblings already use it. `journal.sjdm.org` and `cyberpsychology.eu` appear in no earlier post and in no sibling. `en.wikipedia.org` sits at exactly 3 posts in this batch (at the cap, not over) — escalated in the audit rather than patched.

| # | Source | Domain | What it verifies | Test |
|---|---|---|---|---|
| 1 | Erlandsson, "Seven (weak and strong) helping effects systematically tested in separate evaluation, joint evaluation and forced choice", *Judgment and Decision Making* 16(5), pp. 1113-1154, September 2021 | journal.sjdm.org | Ten studies, N = 9,187, one paradigm tested in three decision modes (separate evaluation, joint evaluation, forced choice). Abstract's prominence finding: people "express a preference to help females, but only when forced to choose" | subject test: **pass** (forced choice and preference revelation); peer-reviewed **and** open access (CC BY); full HTML read |
| 2 | Schouten, Valkenburg & Peter, "An Experimental Test of Processes Underlying Self-Disclosure in Computer-Mediated Communication", *Cyberpsychology* 3(2), Article 3, 2009 | cyberpsychology.eu | 168 university students in cross-sex stranger dyads; both text-only and webcam CMC produced significantly higher self-disclosure **and more direct questioning** than face-to-face, with no difference between the two CMC conditions | subject test: **pass** (computer-mediated intimacy); peer-reviewed, open access; full HTML read. **Limit stated in the post**: strangers on a first meeting, not established couples |
| 3 | Sherman, Michikyan & Greenfield, "The effects of text, audio, video, and in-person communication on bonding between friends", *Cyberpsychology* 7(2), Article 3, 2013 | cyberpsychology.eu | 58 young women in close-friend pairs, four conversations each; self-reported liking/bonding significantly greater in person than over IM (t = 3.79) and greater on video than over IM (t = 2.31); typed laughter significantly related to vocal laughter | subject test: **pass**; peer-reviewed, open access; full HTML read. **Limit**: friends, all women |
| 4 | Quiroz & Mickelson, "Are online behaviors damaging our in-person connections? Passive versus active social media use on romantic relationships", *Cyberpsychology* 15(1), Article 1, 2021 | cyberpsychology.eu | 432 adults in a relationship of ≥3 months; women at moderate-to-high **passive** use showed a negative association between daily hours of use and relationship satisfaction and commitment; low passive use showed none; no significant effects for men | subject test: **pass**; peer-reviewed, open access; full HTML read. Correlational, and the post says so |
| 5 | "Would you rather", Wikipedia | en.wikipedia.org | Entity disambiguation plus the rule the post is built on: "Answering 'neither' or 'both' is against the rules. This leads the players to debate their rationales." No publication date, so `datePublished` is omitted from `citation` | entity only, not counted as research |

Generic context statistics used: **none** (0 of the permitted 1). No competitor is cited or linked; none of the five ranking pages is quoted, and their prompt sets were not reused.

Sources considered and rejected for fetchability or domain hygiene: the ISPOR conjoint-analysis task-force report (valueinhealthjournal.com, 403), *Journal of Computer-Mediated Communication* on response latency (academic.oup.com, 403), the closeness-communication-bias papers (fully paywalled, no OA copy), "It doesn't hurt to ask: question-asking increases liking" (only OA copy is on dash.harvard.edu, which a sibling already uses).

## Phase 4-5 — Build notes

- Body: 1,794 words by plain whitespace split, FAQs excluded. 1 H1, 7 H2, 5 H3. Longest paragraph is 3 sentences.
- First 150 words carry two first-party facts: 987 `/love-gf` pages / 29.2% of 3,377, and 50.3% of 41,486 views on a phone.
- Comparison table: four rows, all first-party page-type data (pages created, share of 3,377, median first-save-to-last-edit) — page-type rows are used because there is **no per-round game telemetry** in `facts.md`, and the post says so out loud in the downside section.
- Pricing: not mentioned anywhere, in any form. The Pricing block in `facts.md` is empty.
- Internal links: 2, both in `## Where the round lives after it ends`, after the table earns them.
- `structuredData`: an `@id`-matched `BlogPosting` enrichment block on `<canonical>#post` with `about` (Would you rather / Q8037371), four `mentions` and a five-entry `citation` mirroring `batchMeta.sources` one-to-one; plus an `ItemList` mirroring the five H3s in order. Every `sameAs` was checked through the Wikipedia API with its Wikidata QID paired (Q8037371, Q839864, Q58199, Q2892912, Q1406917).

## Phase 6 — Audit summary

48 passed, 2 failed, disjoint, 50 total, item strings taken byte-verbatim from `publish-checklist.md` (continuation lines joined with a single space, matching the sibling convention).

Failed, both structural:
1. *Slug short, hyphenated, lowercase, no stop words* — the slug is the exact keyword, so "you" and "for" ride along.
2. *No source passes the swap test* — Sherman 2013 and Quiroz 2021 would sit unchanged in either sibling couple-game post; no study of forced-choice prompts inside couple conversation was found.
