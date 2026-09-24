# Research brief — `love-proposal-short-lines`

**Keyword:** `love proposal short lines` · **Slug:** `love-proposal-short-lines` ·
**Category:** `modern-romance` · **Batch:** `2026-09-24-propose-30c` (wave 4)
**Secondaries on the same page:** `love proposal quotes short`, `propose girl short line`
**Demand:** 3 prefixes, ordinal only (`prefix_hits` is not printed anywhere on the page).

---

## Phase 0 — facts gate

`content/facts.md`, regenerated 2026-09-24. Six lines used, copied byte-verbatim into
`batchMeta.factsUsed`. Two sit inside the first 150 words (48.3% phone opens; 5,148 pages
across 21 page types). **No proposal-specific data exists** — the `proposalpages` probe is
still refused — so every figure is labelled **in body prose** as platform-wide across 21
page types or as sampled on the named template. The pricing block is empty for a fourth
batch; the post states and implies no price, no free tier and no paid tier.

## Phase 1 — SERP (what was actually measured)

One WebSearch call, `love proposal short lines`, 2026-09-24 (1 of the 4 permitted).
**Titles and URLs only. No competitor page was fetched.** Nine organic results returned:
caratlane.com, marriage.com, theknot.com, weddingwire.in, sandjest.com, surpriseplanner.in
(×2), oyegifts.com, alissebridal.com.

The only competitor claim made anywhere on the page or in the audit is one that is visible
in the SERP listing itself: **seven of the nine titles carry a count** — 150+, 150+, 110+,
105+, 87, 60, "Top 10". Nothing is asserted about their internal structure, word count,
ranking position, AI Overview presence or freshness, because none of that was observed.
The 11 India-served SERPs measured 2026-09-16 do not include this keyword.

## Phase 2 — gap and angle

**Table stakes** (inferable from the titles alone, and covered here): a set of short lines,
grouped, for both the girlfriend ask and the marriage ask.

**The gap:** every title in the measured set promises a *quantity* of lines. None promises
a *specification* for one line. Nobody states what a single line has to contain when it is
the whole message, and nobody gives a failure test.

**Fan-out sub-queries → H2s:**

| Sub-query | H2 |
|---|---|
| what is a short proposal line | What a short proposal line actually is |
| is short better than long for a proposal line | Why short usually beats long here |
| why did my short message not get a reply | The spine: a line she has to ask about has failed |
| short vs rude / too blunt | Short is not the same as curt |
| short proposal lines for X situation | 12 short proposal lines, grouped by the job they do |
| which line for which situation | How the four jobs compare |
| should I send a line or make a page | Where a page helps, and where a typed line is right |
| when does a one-liner fail | What a short line cannot do |

**Angle:** the only post that treats one line as a craft problem rather than a supply
problem — three jobs (name a specific, make the ask unmistakable, leave a way to answer),
a failure test ("if she has to ask what you meant, it failed"), and 12 original lines each
with an explicit *when not to use it*.

## Cannibalisation — the nearest neighbour, and the verdict

**`how-long-should-a-marriage-proposal-be` (this batch)** owns the length question across
four delivery forms (spoken / message / letter / built page), with traceable counts.
**That lane is not re-entered here.** This post never answers "how long should it be" as a
question, never compares delivery forms, and carries no duration or word-budget claim
beyond one editorial range (6–14 words) that is labelled as editorial judgement. Its
question is the one *after* that one: given that it is one line, how do you write it well?

**Verdict: genuinely distinct.** Different question (how do I write one line vs how long
should it be), different unit of analysis (the sentence's internal parts vs the form's
length), different deliverable (12 lines with when-not-to-use vs four length limits),
different research lane (chunking/recall vs message-length/verbosity), and zero source
overlap.

**`propose-message-for-her` (wave 3)** owns the drafting process — incubation, revision,
what to cut. Also disjoint: this post is about what the finished sentence must contain,
not how to arrive at it. Both siblings are linked by slug in the body.

## Phase 3 — sources

Lane assigned: **memorability of short phrases — chunking, working memory, recall.**
Lanes deliberately avoided: message-length/verbosity, revision/incubation,
rhyme-as-reason/processing-fluency, quotation/formulaic-language.

`findpapers.mjs` queries run: `short phrase recall memory study`,
`chunking working memory capacity research`, `sentence length recall experiment`,
`slogan memorability study`, `memory span for sentences syntactic chunking recall`,
`verbatim memory for conversation utterances gist recall`.

**Cap problem:** PMC/Europe PMC, frontiersin.org, journals.plos.org and aclanthology.org
were all at the 3-post domain cap, which removed most of what Europe PMC returned. Sources
were therefore taken from university and society hosts.

| # | Source | What it actually says | Read |
|---|---|---|---|
| 1 | Miller, *The Magical Number Seven* (Psychological Review, 1956) — utexas.edu PDF | "The span of immediate memory seems to be almost independent of the number of bits per chunk"; capacity is counted in chunks and raised by recoding | full text |
| 2 | Campoy, *Word length in short-term memory: is rehearsal necessary?* (2008) — um.es green OA | short four-phoneme word lists recognised more accurately than long six-phoneme lists; effect survives when rehearsal is prevented; Cohen's d 0.97 (Exp 1) and 1.10 (Exp 3), no-delay | full text |
| 3 | Tan, Ward & Grenfell-Essam (2010), *JEP:LMC* 36(5) — City, St George's Research Online | across lists of 1–15 words, short lists tended to start recall at the first item; the tendency fell as lists grew | **abstract + metadata only**; APA full text not fetched |
| 4 | Morra, Patella & Muscella, *Modelling Working Memory Capacity* (Journal of Cognition, published 18 July 2024, CC-BY) | capacity estimates rose under long presentation because participants recoded into chunks, not because capacity changed | full text |

Subject test: all four are about short-material recall and chunking, the post's stated
mechanism. Peer-reviewed open access: #4 (and #1 is a peer-reviewed journal article that is
freely readable). Generic context statistics: none. Wikipedia links in body: none.
Domains: `utexas.edu`, `um.es`, `openaccess.city.ac.uk`, `journalofcognition.org` — none
on the 317-URL ban list, none at or near the domain cap (`capcheck.mjs` run at selection
and again immediately before saving).

**Honest limit on the research:** all four are laboratory studies of word lists or visual
arrays. **No study of proposal-line or romantic-message recall was found.** The body says
so at each citation ("a laboratory word list, not romance"; "a visual-array task, not a
sentence") rather than implying the transfer.

## Phase 4–5 — draft, links, schema

Body 1,796 words excluding FAQs (plain whitespace split, the verifier's measure).
11 FAQs, in `article.faqs` and the renderer-built FAQPage only.

Internal links (4): `/proposal` (mandatory; placed after the section establishing why a
reader might want a built page, and described honestly as **the opposite of a one-liner**),
`/love-gf` (the genuine alternative for this reader), plus the two sibling posts by slug.
The body also says plainly when a single typed line with no page at all is right.
`templateUrls`: `/proposal`, `/love-gf`.

`structuredData`: an `ItemList` mirroring the four H3 job groups in order, plus one
`@id`-matched enrichment block on `<canonicalURL>#post` carrying `citation` one-to-one with
`batchMeta.sources`, `about` and `mentions`. Every `sameAs` was checked against the
Wikipedia API on 2026-09-24 with its Wikidata QID paired: Marriage proposal Q1057944,
Chunking (psychology) Q1089605, Working memory Q11337567, Recall (memory) Q18733,
George Armitage Miller Q670658.

## Phase 6 — audit

50 items, `passed ∩ failed = ∅`, 49 + 1 = 50. One failure, structural and deliberate:
*Every internal link is a real URL from TEMPLATE_LINKS* — two of the four are sibling
`/blog/` slugs the BRIEF requires, which are real site paths but not TEMPLATE_LINKS entries
and 404 until waves 3–4 publish.

**Honest assessment:** the citation case is specificity — a definition of what one line must
do, a failure test, and a when-not-to-use per group, on a SERP whose visible titles all
promise volume. It is not an authority case: this domain has neither the age nor the
backlinks of the jewellery and wedding-marketplace sites in that result set. The keyword is
copy-text demand — the searcher lifts a line and leaves — so the page should be judged on
impressions and citations, not conversions.

**Verified independently of the task prompt:** Propose Day 2027 is Monday 8 February 2027
(checked on this machine with `date` before printing it in an FAQ). The task prompt's
framing that "every incumbent gives a long list of short lines" was *partly* confirmed and
partly narrowed — seven of nine measured titles carry a count, which is what the page now
says; the stronger claim that "nobody explains what a single line must do" was **not**
verifiable without fetching those pages, so it appears nowhere on the page.
