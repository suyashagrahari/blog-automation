# Research brief — `propose message to wife`

Batch `2026-09-24-propose-30c` · slug `propose-message-to-wife` · category `modern-romance`
Secondary keyword `propose message to my wife`, same page. Written 2026-09-24.

---

## Phase 0 — facts gate

`content/facts.md` regenerated 2026-09-24. Seven lines used, copied byte-verbatim into
`batchMeta.factsUsed`. Two sit inside the first 150 words (5,148 pages across 21 page
types; 38.5% password-protecting, 1,983 of 5,148). Gate passed.

Every figure is labelled **platform-wide across 21 page types** or **sampled on the named
template** in body prose, never attributed to proposal pages — the `proposalpages` probe is
still refused by this machine's production-read policy. The pricing block is empty for a
fourth batch, so the post states and implies no price, no free tier and no paid tier.

---

## Phase 1 — what was actually measured

**One WebSearch call, run 2026-09-24, US-served, titles and snippets only. No ranking page
was fetched.** The search budget for this post was 4 calls; 1 was spent here and the rest
were not needed because `findpapers.mjs` and repository search covered Phase 3.

What the result listing contained: nine results, all of them generic marriage-proposal
line collections — gifting retailers, an AI message generator, a jewellery blog, two
Wikipedia entity pages (`Marriage proposal`, `The Husband's Message`). The snippets the
tool returned were sample lines of the form "Will you marry me?".

**What I will not claim, and why.** I did not open any of those pages, so the post
describes none of them, quotes none of them, and asserts nothing about their structure,
word count, schema or freshness. None of this batch's keywords appears in the 11
India-served SERPs measured on 2026-09-16 (`content/keywords/2026-09-16-propose-100/`), so
there is no inherited India-geo measurement to lean on either. Checklist item *"The post
contains at least one claim none of the top 5 pages make"* is recorded as **failed** for
exactly this reason — it is unverifiable without fetching them.

No comparison table of competitor pages is included in this brief, because producing one
would mean writing down things I did not see.

---

## Phase 2 — gap and fan-out

The assignment's framing claim was that **the reader is already married and is sending a
message, not asking a question**. That part I can verify from inside the project rather
than from the SERP: the two wife-facing siblings are both occasion pages, and neither
treats the page as a sent message.

Checked directly, not assumed:

| Sibling | Wave | What it is | Lane |
|---|---|---|---|
| `propose-day-wishes-for-wife` | wave 3 (`2026-09-17-propose-30`) | 20 **wishes**, grouped by the kind of year you have had, tied to Propose Day | gratitude / marriage maintenance; sources banned |
| `propose-day-quotes-for-wife` | wave 3 (`2026-09-23-propose-30b`) | 21 **quotes**, sorted by years married | nostalgia / shared reminiscence; sources banned |
| **this post** | wave 4 | a **message you type and send**, evergreen, no date | everyday rituals and routine interaction |

Both siblings are keyed to 8 February. Both are addressed-greeting or copy-a-line pages.
Mine is neither: it is about composing and sending, it carries no occasion, and its spine
is the failure modes of a message inside an ongoing marriage. The project's
*quote ≠ wish ≠ message* distinction holds here without straining. **Verdict: meaningfully
distinct, write it.** The siblings are named in prose rather than linked, because their
`/blog/` slugs are not `TEMPLATE_LINKS` entries and 404 until those waves publish.

**Fan-out sub-queries the H2s answer, in order:**

1. What *is* a propose message to a wife, if she already said yes? → H2 2
2. Why does an affectionate message out of nowhere read as an apology? → H2 3
3. Does a specific line really beat a beautiful one? → H2 4
4. What do I actually send? → H2 5 (5 H3 groups, 18 lines)
5. Text, voice note or a page — which? → H2 6 (table)
6. Should I send my wife a Will-You-Marry-Me page? → H2 7
7. Is this the same thing as a Propose Day wish or quote? → H2 8

**Angle:** wins by being the only propose-message page written for a reader who is already
married and sending rather than asking — naming the four ways a re-affirmation message
misfires inside an everyday chat thread, grounded in the ritual-versus-routine split from a
404-participant study and in SubhSandesh's platform-wide password-protection rate.

---

## Phase 3 — sources

**Lane, as assigned:** everyday rituals and routine interactions in long relationships.
Deliberately avoided: gratitude / marriage maintenance (wave-3 wishes sibling), nostalgia
and shared memory (wave-3 quotes sibling), humour-in-marriage, affection exchange,
responsiveness, revision/incubation.

`findpapers.mjs` was run on all five assigned queries. Europe PMC and PMC are at the 3-post
domain cap for this batch, as are frontiersin.org, journals.plos.org and aclanthology.org,
so every Europe PMC candidate it returned was unusable regardless of fit. The four sources
below are green or gold open access from university and institutional repositories, which
is what the BRIEF asks for. Cap check run when choosing **and again immediately before
saving**: none banned, none at cap.

| # | Source | Why it is in this post | Subject test | Swap test |
|---|---|---|---|---|
| 1 | García-Rada, Sezer & Norton, *Rituals and Nuptials*, **Journal of the Association for Consumer Research** 4(2), 6 Mar 2019 — HBS author copy | Supplies the definition the whole page turns on and the ritual-vs-routine result | passes — couple rituals | passes — no other keyword in this batch needs the routine/ritual split |
| 2 | Campbell, Silva & Wright, *Rituals in unmarried couple relationships*, 2011 — CSUSB ScholarWorks | Communication rituals are a named, counted category: 14% of 756 rituals from 129 people | passes — couple ritual typology | passes |
| 3 | Chonody, Killian, Gabb & Dunk-West, *Understanding Everyday Relationship Work*, **Advances in Social Work** 17(2) 355–368, 30 Jan 2017 — Open Research Online, CC BY-NC-ND | Item loadings put everyday talk (.760) above the declaration (.677) — the register argument | passes — everyday relationship work | passes |
| 4 | Hu, *The role of multi-level relationship maintenance on married couples' commitment*, M.S. thesis, UIUC, 26 Apr 2022 — IDEALS | 193 married couples; the *similarity* finding is why "mirror her register" is bad advice | passes — married couples specifically | passes |

Peer-reviewed open access: #1 and #3. #4 is a master's thesis and is labelled as such in
`structuralLimitations`; it is not doing the peer-reviewed job. #2's sample is unmarried
couples, and the post says so in the body, citing only the authors' own statement that 12
of their 16 types are documented in marriages.

Generic context statistics used: **zero**. Wikipedia links in body: **zero** (the four
Wikipedia/Wikidata pairs appear only in `about`/`mentions`, verified against the Wikipedia
API: Marriage Q8445, Ritual Q189819, Text messaging Q17166101, Interpersonal communication
Q3685487, Marriage proposal Q1057944).

All four PDFs were fetched and the quoted figures returned verbatim from the papers' own
text via targeted passage extraction, not read cover to cover. None is paywalled, so no
abstract-only citation exists. The ban-exemption clause for statutes, dictionaries and
standards was not needed.

**Terms searched that returned nothing usable:** `couple rituals everyday routines study`,
`relational rituals maintenance research`, `mundane interaction relationship quality
study`, `small moments connection couples research`, `bids for connection turning toward
study` — Crossref returns mostly book chapters from one Palgrave volume and, for the last
query, mechanical-engineering hits on "moments and couples"; Europe PMC returns 2026
clinical and caregiving papers with no relevance. The research that does exist on this
phenomenon sits in consumer-behaviour and social-work journals, not in the biomedical
index, which is why repository search rather than `findpapers.mjs` produced all four.

---

## Phase 5 — links and templates

Internal links, 4, all from `TEMPLATE_LINKS`, all placed after the section establishing why
the reader would want them: `/love-gf` (in the format comparison), `/proposal` and
`/dedication` (in the objection section), `/apology-dashboard` (in the same section, for
the reader who actually owes an apology). `templateUrls` carries three: `/proposal`,
`/love-gf`, `/dedication`.

**`/proposal`, handled honestly as the BRIEF requires.** The template is a Will-You-Marry-Me
scrapbook ending in a YES button that grows when dodged. Sent to a woman who is already
your wife it is a joke, and the post says so plainly: it lands only if joking is already
the register of that marriage, and it fails outright if she would read it as a test or as a
hint that something is being announced.

**The genuine alternative is `/dedication`, and the research is why.** The page's whole
argument is register — a message far warmer than how you usually talk reads as performance.
A recorded voice introducing a song is the one format in which you cannot accidentally
write in someone else's register. It also fits source #1's definition better than a card
does: an activity enacted jointly, repeated, carrying symbolic meaning. `/love-gf` is
offered as the plainer default with its own numbers (1,178 created, 22.9%; 16,998 views,
29.9%), because plain out-performing grand is the steadiest pattern in this data.

---

## Phase 6 — audit

50 items, `passed` 49, `failed` 1, disjoint, byte-verbatim from
`references/publish-checklist.md`. The single failure is *"The post contains at least one
claim none of the top 5 pages make"*, failed because Phase 1 fetched nothing. Nine notes
that are not checklist items live in `batchMeta.structuralLimitations`.

Body 1,797 words excluding FAQs. 12 FAQs, in `article.faqs` and the renderer-built FAQPage
only; highest FAQ-to-H2 Jaccard after rewording is well under the verifier's flag.
`scripts/verify-batch.mjs` reports no findings for this slug.

## Correction to the task prompt

The prompt lists `github.com` among the domains at cap. It is not — `capcheck.mjs` on
2026-09-24 reports only `pmc.ncbi.nlm.nih.gov`, `frontiersin.org`, `journals.plos.org` and
`aclanthology.org` at 3 posts. Immaterial here, since none of those four was cited, but
recorded because the BRIEF asks for prompt claims to be checked rather than repeated.

Propose Day 2027 was verified as **Monday 8 February 2027** with the system `date` command
rather than taken from the BRIEF.
