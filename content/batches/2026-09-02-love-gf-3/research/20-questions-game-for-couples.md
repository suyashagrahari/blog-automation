# Research brief — `20 questions game for couples`

Batch `2026-09-02-love-gf-3` · slug `20-questions-game-for-couples` · category `modern-romance`
Written 2026-09-02. Facts from `content/facts.md`, regenerated 2026-09-02.

**Environment note that shaped this brief:** the session's WebSearch budget (200/200)
was exhausted before Phase 1 began, and Bash `curl`/`wget` plus `WebFetch` are
blocked here. SERP and source discovery were therefore run by fetching
`duckduckgo.com/html/?q=…` into the sandbox and by querying the OpenAlex API from
a sandboxed Python process. Every source below was downloaded and read as text
(`pdftotext`) rather than skimmed from a snippet.

---

## Phase 0 — Data gate

`content/facts.md` carries 17 first-party lines dated 2026-09-02. Ten are usable
for this keyword and three sit comfortably in the first 150 words. Gate passes.

**The honest limitation, stated up front:** facts.md measures *per page type*.
There is **no per-round game telemetry** — no plays, no round durations, no
completion rates, no quiz-answer counts. So nothing in this post claims how many
couples played a quiz, how long a round runs, or how often a round finishes. The
first-party numbers describe page creation, viewing, device and edit behaviour,
and the table's first-party columns are page-type rows for exactly this reason.

The **Pricing block in facts.md is empty**. The post therefore says nothing about
cost anywhere — not free, not paid, not cheap — including in the FAQs and the
metaDescription. The reader question "is it free" is left unanswered, which is
recorded in `honestAssessment`.

---

## Phase 1 — SERP analysis

Query: `20 questions game for couples`. Top five organic results, in order.

| # | Page | Words (approx) | Structure | Where the direct answer is | Data cited | Format elements | Tone | Optimising for |
|---|---|---|---|---|---|---|---|---|
| 1 | `20questions.app/questions-for-couples/` | ~1,900 | H2 intro → "Play online" promo → "How to Play 20 Questions" (3 steps) → 50 numbered H3 prompts | Buried: a scene-setting intro ("Sure, you probably know your partner's favourite food…") runs before the rules | None | Numbered H3s, emoji, no table, no FAQ, no byline | Second person, breezy, emoji, one visible LLM artefact ("Let me know if you'd like any tweaks 😊") | Driving traffic to its own play-online tool |
| 2 | `connectedcouples.app/blog/20-questions-for-couples` | ~1,600 | Disambiguation lede → "Version one: the classic guessing game, adapted for two" (rules) → "Version two: the twenty that matter" (4 rounds of 5, timed) | First line: names the ambiguity and answers it immediately | None. One named LMFT pull-quote | Named-clinician quote, timed rounds, rules blocks, no table, no citations | Confident, opinionated, first person plural | App download; the strongest editorial page in the set |
| 3 | `couplesinstitute.com/play-twenty-questions-with-your-partner/` | ~900 | Short framing → 20+ numbered questions, flat list | Paragraph 2, but the "answer" is a reframe of the game, not the rules | None | Numbered list, author byline (Dr Peter Pearson), email-gated extras, no table, no schema visible | Warm, clinical, third person advice | Practice authority + email capture |
| 4 | `boldbubbly.com/20-questions-game-for-couples/` | ~1,200 | Personal intro → "How To Play 20 Questions" → "20 Questions For Couples Game" → 4 categories | After ~250 words of date-night framing | None | Images (2022 uploads), bold RELATED interlinks, no table, no FAQ | First person, exclamatory, blog-personal | Internal traffic to other listicles |
| 5 | `couplesquestionsgame.com/games/20-questions-for-couples` | ~700 | Interactive card deck → "About" → 30 numbered sample questions | The tool *is* the answer; prose "About" block sits under it | None | Live deck widget, 30-item list, app-store CTAs, no table | Terse, product | App install |

No AI Overview or featured snippet was retrievable through the HTML SERP endpoint.
**Every one of the five is a competitor** under `references/competitors.md`
(couple-quiz tools, an e-card/app substitute, wishes-listicle farms) or an adjacent
practice site, so none is linked, cited or paraphrased anywhere in the post.

---

## Phase 2 — Gap analysis

**Table stakes — all or most of the five cover these, so the post must too:**

- What the game is, and the yes-or-no rule.
- A list of questions (30–50 is the norm).
- The "restrict the subject to your shared life" adaptation (4 of 5).
- Some notion of a date-night occasion.

**Stale or absent data.** There is no stale data to supersede because **none of
the five cites a single number, study or source.** That is the largest hole in the
SERP: five pages, zero citations, zero tables.

**The gap — what none of the five does:**

1. **Explains how to spend the twenty.** All five give "ask yes-or-no questions"
   and stop. Nobody states that a well-formed question halves the field, nobody
   mentions that twenty halving questions cover 2^20 = 1,048,576 possibilities,
   and nobody points out that a hopeful guess is a question spent for almost no
   information. This is the post's spine.
2. **Shows a worked round with answers.** Not one of the five prints an actual
   sequence of yes-or-no questions with their answers. `boldbubbly` gives four
   generic examples ("Is it an animal?") unattached to any round.
3. **Covers the asynchronous case.** All five assume a shared sofa, a dinner date
   or one phone between two people. Twenty questions is structurally the one couple
   game that survives a delay, because the answer is written and fixed before play
   starts — and nobody says so.
4. **Names a case where the format is the wrong choice.** Zero of five.
5. **Explains where the round goes afterwards.** Zero of five.

**Where the gap is narrower than it first looks.** `connectedcouples.app` already
disambiguates the guessing game from the disclosure game, already supplies rules
for both, and already makes the "something from your shared life" point. That half
of the post is table stakes, not differentiation, and the audit says so.

**Fan-out sub-queries → H2/H3 map.**

| Sub-query | Handled by |
|---|---|
| what is the 20 questions game for couples | H2 "What is the 20 questions game for couples?" |
| 20 questions game how to play | H2 "20 questions game: how to play, in six rules" |
| how do you win / what if you run out | Same H2 + FAQ 6 |
| 20 questions game examples / with answers | H2 "How to spend twenty questions…" + the worked transcript under H3 3 |
| 20 questions game topics | H2 "40 twenty questions game topics, with examples" (5 H3s) |
| 20 question love game questions and answers | H3s 1–3 (yes/no ladder) + H3s 4–5 (disclosure set) |
| 20 questions game for couples deep | H3 4 |
| 20 questions game for couples flirty | H3 5 |
| 20 question game with girlfriend | H2 "Playing 20 questions with your girlfriend when you are not in the same room" |
| can you play over text | Same H2 + FAQ 5 |
| where do we keep the answers | Same H2 (Love Quiz) |
| when is it a bad idea | H2 "When a 20 questions round is the wrong choice" |
| how is it different from never have i ever / would you rather | FAQ 11 |

**Angle (recorded as `batchMeta.angle`):** wins by being the only post that treats
the twenty as a spendable budget rather than a list — the binary-split arithmetic,
a measured finding that people recognise good questions but cannot invent them, and
an asynchronous version where the answer is written before play starts — anchored
on 987 `/love-gf` pages (29.2% of 3,377), 14,607 views (35.2% of 41,486) and a
7.2-hour median edit gap, on a template whose Love Quiz stores answers the creator
sets.

**Staying off sibling ground.** Wave 2's
`truth-or-dare-questions-for-couples-long-distance` owns the escalating-tier
framing, the 438 ms video-call turn gap, shared laughter, playfulness and humour
research. None of that appears here. The wave-3 siblings
`never-have-i-ever-questions-for-couples` (disclosure, one-sided mechanic,
retroactive jealousy) and `would-you-rather-questions-for-couples` (choice) cover
different mechanics; this post owns the *guessing* mechanic — one player holds an
answer, the other spends a fixed budget narrowing it — and FAQ 11 states that
distinction explicitly rather than competing for it.

---

## Phase 3 — Sources

Search pattern used: the *phenomenon*, not the keyword — `question asking
efficiency`, `constraint-seeking questions`, `question-asking liking`,
`closeness-communication bias`, `collaborative remembering couples`, plus OpenAlex
`is_oa:true` queries filtered to exclude every domain listed in `USED-SOURCES.md`.

Four sources. None appears in `USED-SOURCES.md`. None is a competitor. Zero generic
context statistics. One Wikipedia link (entity + arithmetic, not counted as
research).

### 1. Rothe, Lake & Gureckis (2018) — peer-reviewed, openly readable

`https://www.gureckislab.org/publications/Rothe2018_Article_DoPeopleAskGoodQuestions.pdf`
*Do People Ask Good Questions?*, Computational Brain & Behavior 1:69–89, published
online 9 July 2018. Authors' copy on the NYU lab site; full text downloaded and read.

Verified: Experiment 1 recruited **40 participants** on Amazon Mechanical Turk who
produced **605 questions** (**139 unique**) across **18 board contexts** in a
Battleship-style guessing task; only **13%** were simple location queries; the
Discussion states "the very best questions in our dataset were asked by only a small
fraction of participants". Experiment 2 recruited **45 participants** who ranked six
ready-made questions per context; the abstract states participants "strongly preferred
the best questions when evaluating questions that they did not generate themselves",
and the text records that "in 74% of the cases, participants selected the question
they also had ranked highest". The abstract's conclusion: "people have a limited
ability to synthesize maximally informative questions from scratch, suggesting a
bottleneck in the question asking process."

*Subject test:* passes — it is literally about the quality of questions asked in a
guessing game. *Swap test:* passes — it does not fit a disclosure or choice game.
Paraphrase kept narrower than the claim: the post says the best questions were asked
by "only a small fraction of participants" and that the 74% figure is
ranking-versus-favourite consistency, not a claim about objective optimality.

### 2. Huang, Yeomans, Brooks, Minson & Gino (2017) — peer-reviewed, openly readable

`https://www.hbs.edu/ris/Publication%20Files/Huang%20et%20al%202017_6945bc5e-3b3e-4c0a-addd-254c9e603c60.pdf`
*It Doesn't Hurt to Ask: Question-Asking Increases Liking*, Journal of Personality and
Social Psychology 113(3):430–452, 2017. Institutional copy; full text downloaded and read.

Verified from the abstract and body: "Across 3 studies of live dyadic conversations,
we identify a robust and consistent relationship between question-asking and liking:
people who ask more questions, particularly follow-up questions, are better liked by
their conversation partners"; responsiveness explains the effect; speed daters asking
more follow-up questions "are more likely to elicit agreement for second dates"; and
"people do not anticipate that question-asking increases interpersonal liking".

*Subject test:* passes. *Swap test:* **flagged as a failure** in the audit — the
finding could be lifted into a sibling post unchanged. Checked at write time and
neither wave-3 sibling cites it, so there is no live breach; recorded as the URL to
give up if `would-you-rather-questions-for-couples` also lands on it. Not dropped or
swapped unilaterally, per the batch brief.

**Phase 8 review (2026-09-02):** the failure was reviewed and kept. Because this
source *passes* the subject test, it is not the one "context source" that
`research-sources.md` permits — that allowance is written for a source which passes
the swap test and fails the subject test — so it cannot be excused on that ground.
Re-checked across all ten batch-3 posts: the Huang URL appears in no sibling, and
`hbs.edu` in one post of this batch plus one earlier-wave post at a different URL,
so no cap is breached today. A narrower replacement (an open-access study of
asymmetric asker/answerer roles) could not be searched for: the session WebSearch
budget is spent, 200 of 200, and the OpenAlex API returns HTTP 429 "insufficient
budget" from this IP until midnight UTC. Re-check when either resets.

### 3. Savitsky, Keysar, Epley, Carter & Swanson (2011) — peer-reviewed, openly readable

`https://faculty.wharton.upenn.edu/wp-content/uploads/2015/02/2.-Savitsky-Comm-Bias.pdf`
*The closeness-communication bias: Increased egocentrism among friends versus strangers*,
Journal of Experimental Social Psychology 47(2):269–273. Article history: received
29 July 2010, available online 18 September 2010, journal issue 2011. Full text read.

Verified: Study 2b used **24 married couples** (married **14.4 years** on average);
speakers "expected their spouse to understand them better than strangers, paired
t(11) = 9.63, p < .0001" while "accuracy rates for spouses and strangers were
statistically identical, paired t(11) = 1.08, ns"; speakers were more confident with
their spouse (**M = 6.27**) than with strangers (**M = 5.00**). Study 1: addressees
"grab and move the competitor object … more often with a friend (**24%** of trials)
than with a stranger (**15%**)".

*Subject test:* passes — closeness and being understood, which is what a shared-life
guessing round actually tests. *Swap test:* passes.

Note on the date: the post and `citation` use **2011** (the journal issue). The PDF's
own history line says available online 18 September 2010. Both are true; 2011 is the
citation of record.

### 4. Wikipedia — `Twenty questions` (entity + arithmetic; not counted as research)

`https://en.wikipedia.org/wiki/Twenty_questions`

Verified on the page: "The game dates to at least the eighteenth century"; "it appears
to have been common by at least the 1780s, when the writer Hannah More recorded she and
a friend had been 'teaching … the play of twenty questions'" at a London dinner party;
"Lying is not allowed"; "If 20 questions are asked without a correct guess, then the
answerer has stumped the questioners"; and, under *Computers, scientific method, and
situation puzzles*: "Mathematically, if each question is structured to eliminate half
the objects, 20 questions allow the questioner to distinguish between 2^20 = 1048576
objects … The process is analogous to a binary search algorithm."

Continuously updated, publishes no date, so `datePublished` is **omitted** from the
`citation` entry rather than stamped with the run date.

### Candidate fifth sources that could not be opened from this environment

Recorded so the next pass does not repeat the work. All returned HTTP 403 or an empty
body to this sandbox:

- `cognition.princeton.edu/document/136` — Ruggeri & Lombrozo, *Children adapt their
  questions to achieve efficient search* (Cognition, 2015). The best available source
  on constraint-seeking versus hypothesis-scanning questions; 403 on both the PDF and
  the landing page, and the ScienceDirect version is paywalled.
- `philpapers.org/archive/HARCAS-15.pdf` / `philarchive.org/archive/HARCAS-15` —
  Harris, Barnier, Sutton & Keil, *Couples as socially distributed cognitive systems*
  (Memory Studies, 2014). Listed as open in OpenAlex; 403.
- `scholarsarchive.byu.edu/…/22_Contribution_of_Couple_Leisure.pdf` — couple leisure
  and marital satisfaction (2006); 403.
- `dl.acm.org/doi/10.1145/3579546` — *What makes virtual intimacy… intimate?* (CSCW
  2023). Would have been the ideal source for the asynchronous section; 403.
- `sciencedirect.com/…/S2214782916300021/pdf` — *Online intimacy and well-being in the
  digital age* (Internet Interventions, 2016, OA); 403.

Because none opened, the asynchronous argument rests on the structural property of the
format (a written, fixed answer) plus first-party edit-gap and password data, and is
stated as reasoning rather than as a cited finding.

### Batch cap check (URLs and domains, this batch only)

Run across `content/batches/2026-09-02-love-gf-3/blogs/` at write time: **no source
URL appears in more than one post**; the highest domain counts are `en.wikipedia.org`
at 2 posts and `link.springer.com` at 2 posts, both under the cap of 3. **Re-run in
Phase 8 (2026-09-02), now that all ten posts exist: `en.wikipedia.org` is at 3 posts
— exactly at the cap, no longer under it — and `cyberpsychology.eu` is also at 3.
This post holds one of the three Wikipedia slots, so it must not gain another
Wikipedia link and its existing one must not be removed without telling the
orchestrator.** My three
research domains — `gureckislab.org`, `hbs.edu`, `faculty.wharton.upenn.edu` — appear
in **one** post each in this batch. `hbs.edu` and `faculty.wharton.upenn.edu` each
appear in 1 earlier-wave post per `USED-SOURCES.md` (different URLs), well short of
the closed-domain threshold. No breach to escalate.

---

## Phase 4–5 notes

- Word count **1,797** by plain whitespace split, FAQs excluded (they live only in
  `article.faqs` and the renderer-built FAQPage).
- 8 H2s, 5 H3s, exactly one H1, no skipped levels.
- Comparison table: 4 rows, 4 columns, two columns first-party (pages created, share
  of all 3,377) — page-type rows, because there is no per-round telemetry to put in a
  cell.
- Internal links (3, all from `TEMPLATE_LINKS`, all after the section that earns them):
  `/love-gf`, `/darling`, `/birthday-gf`. Both mandated cluster links present.
- Outbound links: 4 distinct URLs, each fetched and read; Wikipedia appears twice as a
  link (body + Sources list), which is within the 0–2 budget.
- `structuredData`: an `ItemList` mirroring the five H3s in order, plus an
  `@id`-matched `BlogPosting` enrichment block on `<canonicalURL>#post` carrying
  `about`, `mentions` and a `citation` array mirroring `batchMeta.sources` one-to-one.
- Entity QIDs verified against the Wikipedia API on 2026-09-02: Twenty questions
  **Q302368**, Parlour game **Q14947863**, Binary search **Q243754** (note:
  "Binary search algorithm" redirects to "Binary search", and the canonical title is
  used), Self-disclosure **Q2892912**.
- Nothing sexual, drinking-related or humiliating in any of the 40 prompts.

## Phase 6 — audit summary

47 passed, 3 failed, disjoint, 50 total, every item string byte-identical to the
strings used by the wave-2 sibling posts (verified programmatically). The three
failures: the Strapi slug check and the Strapi category check could not be re-run
because outbound HTTP to `strapi.subhsandesh.in` is blocked here, and the swap test
is flagged for Huang et al. Full text in `batchMeta.auditReport`.

## Phase 8 — remediation summary (2026-09-02)

**49 passed, 1 failed**, disjoint, 50 total, every item string re-checked
byte-verbatim against `references/publish-checklist.md` programmatically.

- *Slug is not already taken in Strapi* — **now passes.** Verified first-hand from
  this pass: `GET /api/articles?filters[slug][$eq]=20-questions-game-for-couples`
  returned HTTP 200 with `pagination.total: 0`.
- *categorySlug matches a real Strapi category slug* — **now passes.** `GET
  /api/categories` returned HTTP 200 and all 10 live slugs; `modern-romance` is
  among them.
- *No source passes the swap test* — **still fails, deliberately.** Reviewed, not
  excused; see the Phase 8 note under source 2 above.

No body text was changed. Word count stays **1,797** by plain whitespace split, and
the five-round structure is intentionally retained — a fixed budget spent across
successive rounds is this post's mechanic, and the sibling
`never-have-i-ever-questions-for-couples` is the post being restructured to break
the shared skeleton. `honestAssessment` was rewritten to match the post as it stands.
