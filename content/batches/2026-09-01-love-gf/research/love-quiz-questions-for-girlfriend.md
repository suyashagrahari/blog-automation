# Research brief — `love quiz questions for girlfriend`

- **Slug:** `love-quiz-questions-for-girlfriend` (verified free: Strapi `filters[slug][$eq]` returned `total: 0`, checked 2026-09-01)
- **Batch:** `2026-09-01-love-gf` · **Category:** `modern-romance` (verified against the live Strapi category list)
- **Templates:** `https://subhsandesh.in/love-gf`, `https://subhsandesh.in/darling`
- **Volume:** ~1,000–3,000/mo (EST, no tool data), India market. Demand rank 28× cross-prefix hits — the highest in the keyword run.

---

## Phase 0 — Data gate

`content/facts.md` regenerated 2026-09-01. Gate passes with room to spare: eight relevant lines, of which four sit naturally in the first 150 words. Facts used are listed verbatim in `batchMeta.factsUsed`.

The load-bearing ones: **975 /love-gf pages, 29.2% of 3,335 created since 12 March 2026**; **14,396 views, 35.2% of 40,864**; **median 6.9 hours between first save and last edit on /love-gf, n=975**; 50.3% phone opens; 42.9% password-protect; /darling 343 pages, 10.3%.

The 6.9-hour median is the most useful number on the page and no competitor has an equivalent: it says people build these over an evening and come back, which is the argument for a page that keeps answers rather than a printed list of questions.

---

## Phase 1 — SERP analysis

Searched `love quiz questions for girlfriend`. **The SERP is broken, and that is the opportunity.** It returns roughly five real results, two of which are scraped PDF spam on a New Zealand government immigration domain.

| # | Page | Format | Word count / size | Direct answer? | Data cited | Structure | Tone | Actually optimising for |
|---|---|---|---|---|---|---|---|---|
| 1 | ProProfs — "Does My Girlfriend Love Me?" quiz | Interactive quiz, 10 MCQs, score /100 | Thin page, quiz UI dominates | No — you must play to get anything | None. Zero external citations. Carries a therapist "Reviewed by" byline and an attempt count (220,516; updated 23 Apr 2025) | Quiz widget + "About This Quiz" blurb + related-quiz rail | Second person, breathless, hedged ("explore the depths of your relationship") | Quiz completions and repeat plays, not the query's actual intent |
| 2 | ProProfs — Girlfriend quizzes topic page | Directory of 11 quizzes | Medium, mostly link/sample-question boilerplate | No | Per-quiz attempt counts and update dates only | H1 + "Top Trending" + "Recent" + "Popular Topics" rails | Impersonal, templated | Internal link equity across the quiz topic cluster |
| 3–4 | Two PDFs on `live-work.immigration.govt.nz` | Scraped PDF, spam | n/a | n/a | n/a | n/a | n/a | Nothing — parasite hosting on a `.govt.nz` domain |
| 5 | Goodreads author blog post — "315 Questions to Ask Your Girlfriend" | Stub post; a 3-sentence teaser syndicated from the author's own site | ~150 words on the ranking URL itself | No — the answer lives off-site | None | Teaser + outbound link + comment form | Third person, promotional | Passing link equity to the author's site (canonical version returned HTTP 403 to fetch) |

No AI Overview surfaced. No featured snippet.

**What ranks is one of two things:** a *test that grades her* ("does she really love you?"), or an *undifferentiated dump of 315 questions*. Neither is what a person asking this actually wants.

---

## Phase 2 — Gap analysis

**Table stakes** — must be present or the page reads incomplete: actual questions in quantity; questions grouped by mood or theme; some romantic/deep questions; some flirty/light ones; a nod to long-distance and video calls.

**The gap** — nothing in the top five does any of this:
1. **Dosage.** Nobody says how many questions belong in one sitting, or how many of each type. A 315-item list is a shopping catalogue, not a round.
2. **Order.** Nobody states that escalation is the mechanism, or that jumping to the deep tier is the standard failure.
3. **Design rules.** No page names the questions that start fights, the one-ex cap, or the rule about ending easy.
4. **Two players.** Every ranking quiz has one player. Nobody points out that a one-player quiz cannot produce reciprocity.
5. **Mode.** Nobody answers "does this work on a video call?" with anything but a guess.
6. **Keeping the answers.** No page treats the record as part of the product.

**Stale data:** the #1 result's only quantified claims are its own attempt count and an April 2025 update stamp. There is no third-party data on any page in the top five to supersede — the whole SERP is uncited.

**Fan-out sub-queries → H2 mapping:**

| Sub-query | Where it is answered |
|---|---|
| what is a love quiz for a girlfriend | H2 "What a love quiz for a girlfriend actually is" |
| love quiz questions list | H2 "48 love quiz questions… in four tiers" (4 H3 tiers) |
| how many questions / what order | H2 "Which tier to use when: planning a 10-question round" + table |
| questions not to ask / how to avoid a fight | H2 "Six rules that stop a round becoming an argument" |
| does my girlfriend love me quiz accurate | H2 "Why \"does she really love you?\" quizzes are the wrong format" |
| love quiz over video call / long distance / text | H2 "Video call, same room, or texting: what changes" |
| when not to do this | H2 "When a love quiz is the wrong idea" |

**Angle:** wins by being the only post that treats a girlfriend love quiz as a two-player round with four escalating tiers, a stated dosage per tier and explicit design rules — grounded in the Aron (1997) and RCIT (1999) escalation research and in SubhSandesh's own 975 /love-gf pages, 14,396 views and 6.9-hour median build time.

---

## Phase 3 — Sources

Vein searched: **escalating reciprocal self-disclosure and interpersonal closeness.** Search terms used: `Aron experimental generation interpersonal closeness study`, `Aron 1997 36 questions escalating self-disclosure pdf`, `Relationship Closeness Induction Task replication open access`, `reciprocal self-disclosure liking closeness experiment open access`, `Fast Friends procedure mode of communication video chat`, `miscalibrated expectations barrier deeper conversation`.

All five sources were fetched. Three were read in full text; two are abstract-only and are labelled as such in the body, in `sources`, and here.

| # | Source | Date | What it actually says | Verified how |
|---|---|---|---|---|
| 1 | Aron, Melinat, Aron, Vallone & Bator — *The Experimental Generation of Interpersonal Closeness*, PSPB 23(4) | April 1997 | 45-minute procedure, three question sets of 15 minutes each, escalating in intensity. Closeness in the closeness condition ran ~**0.88 SD** above the matched small-talk condition. **Studies 2 and 3 found no significant closeness effect** from matching pairs on attitudes, from leading them to expect mutual liking, or from making "get close" an explicit goal. | Full text extracted from the openly hosted PDF at `psychodramaaustralia.edu.au`. The SAGE version is listed BRONZE OA by Unpaywall but returns 403 to automated fetches, so the openly readable copy is what the body links. |
| 2 | Sedikides, Campbell, Reeder & Elliot — *The Relationship Closeness Induction Task*, Representative Research in Social Psychology 23 | 1999 | RCIT is **29 questions in three progressively more personal lists of 7, 12 and 10**, timed at **1, 3 and 5 minutes**, 9 minutes end to end. Validity demonstrated across five experiments. | Full text, PDF hosted by the University of Georgia psychology department. |
| 3 | Kardas, Kumar & Epley — *Overly Shallow?*, JPSP 122(3) | 30 Sep 2021 (online) | Across twelve experiments, conversations between strangers felt **less awkward and created more connectedness and happiness than participants expected**; participants especially overestimated the awkwardness of deep conversations relative to shallow ones, and felt more connected to deep-conversation partners after having both. | Full text, author-hosted PDF at `michaelkardas.com` (identical to the accepted JPSP version). |
| 4 | Sprecher — *Closeness and other affiliative outcomes generated from the Fast Friends procedure…*, JSPR 38(5) | 24 Feb 2021 | Zero-history dyads assigned to the closeness task, the small-talk task, or unstructured getting-acquainted. The closeness task generated more closeness. A second manipulation was **video-chat vs face-to-face: no significant differences in outcomes by mode**, and the task's advantage was not moderated by mode. | **Abstract only.** SAGE returns 403; abstract retrieved via the Semantic Scholar API. Nothing beyond the abstract is claimed. |
| 5 | Leckfor, Wood, Slatcher & Orehek — *Not such fast friends?*, JSPR | 21 Aug 2025 | **286 unacquainted dyads (N = 572)**, intimate vs small talk × face-to-face vs texting. Intimate beat small talk in both mediums, and the intimate-conversation effect did not differ by medium; but **texting produced lower self-disclosure than face-to-face**, associated with lower perceived responsiveness and closeness. | **Abstract only**, retrieved via the Semantic Scholar API. |

**Test results.** Subject test: all five are about escalating reciprocal self-disclosure between two people, which is precisely what the post is about. Swap test: none of them fits any sibling post in this batch — they are not about Hinglish, Telugu emotion words, expressive writing, gifting, page-load effort, affectionate messaging or music. **Zero generic context statistics. Zero Wikipedia links in the body.** Wikipedia appears only as verified `sameAs` targets in `structuredData`.

**Batch uniqueness.** Checked all sibling files in `content/batches/2026-09-01-love-gf/blogs/`. New domains for this batch: `psychodramaaustralia.edu.au`, `psychology.uga.edu`, `michaelkardas.com`, `journals.sagepub.com`. No URL and no domain here appears in any other post in the batch. Deliberately avoided `arxiv.org` (already in 3 posts), `journals.plos.org` and `pmc.ncbi.nlm.nih.gov` (2 each), and the five URLs reserved out by the website post.

**Competitors.** No competitor is linked, cited or paraphrased. ProProfs and the Goodreads/Science-of-People post were read in Phase 1 only. The 220,000+ attempt figure in the body is stated as a genre fact without naming or linking the site.

---

## Phase 6 — audit notes

One failure, recorded in `batchMeta.auditReport.failed`: **"At least one table column uses first-party data."** The comparison table compares question tiers on purpose, dosage, video-call viability and risk, and the database holds no per-tier play data, so no column can carry a first-party number honestly. The first-party grounding sits in the paragraph immediately after the table (975 pages, 6.9-hour median). It would close only if per-round quiz telemetry were logged on /love-gf.

Checklist arithmetic: 50 items, 49 passed, 1 failed, `passed ∩ failed = ∅`, `49 + 1 = 50`. Item strings copied verbatim from `references/publish-checklist.md`.

Body: 1,798 words excluding FAQs. 11 FAQs in `article.faqs` and the renderer-built FAQPage only. Two internal links, both after the section that earns them. Five outbound links, all fetched and verified.
