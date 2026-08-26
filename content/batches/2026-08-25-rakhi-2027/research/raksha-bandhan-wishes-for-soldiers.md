# Research brief — `raksha bandhan wishes for soldiers`

- Batch: `2026-08-25-rakhi-2027`
- Slug: `raksha-bandhan-wishes-for-soldiers` — checked against Strapi 2026-08-25, `total: 0`, free.
- Category: `indian-festivals`. Templates: brother page, sister page, `/templates`.
- Source lane: **C (US repositories), then D (publisher-native OA)**. `arxiv.org`,
  `pmc.ncbi.nlm.nih.gov`, `frontiersin.org` closed; `indiapost.gov.in` / `pib.gov.in`
  banned.
- Assigned primary first-party fact: **51.1% of shared pages are opened on a phone
  (18,497 of 36,202 views) — measured 2026-08-25.**

## Phase 0 — data gate

`content/facts.md` (regenerated 2026-08-25 by the orchestrator; not re-run here to
avoid a shared side effect across 10 concurrent agents) carries 17 platform facts.
Three used in this post, two of them in the first 150 words.

**Keyword-specific first-party data does not exist.** `rakshabandhanpages` = 3
documents, `rakshabandhansisterpages` = 3, rakhi template views 39 of 36,202
(0.1%). No rate, percentage or "most creators" claim is computed from n=3 anywhere
in this post, and the rakhi templates are described as new and lightly used or not
at all. This weakness is recorded in `auditReport.failed`, not in `passed`.

## Phase 1 — SERP analysis

Fetched 2026-08-25. Ranking set for the exact keyword: floweraura blog,
hinduparv.in, bestmessage.org, yatradham blog, plus a Brainly thread (403, not
analysable). No AI Overview surfaced for the exact phrase in the tool result.

| Page | Words | Structure | Direct answer | Data cited | Format | Tone | Optimising for |
|---|---|---|---|---|---|---|---|
| floweraura.com/blog (2021, refreshed) | ~1,695 | H1 + 3 H2s: "Why Send…", "Heartfelt Wishes", "Thank You Messages" | No — two paragraphs of framing, then a list | None. No percentage anywhere on the page | No table, no FAQ schema, no ItemList; author "admin" | Third person, reverent, tricolon-heavy | Rakhi delivery conversions — two inline "BUY RAKHI GIFTS" CTAs |
| hinduparv.in (2020, undated refresh) | ~1,763 | H1 + 16 near-duplicate H2s ("…for soldiers", "…to soldiers", "…for indian army") | No | None | 28 numbered quote blocks; no table, no FAQ, no schema | Machine-translated register, "Indian army lover" | Keyword permutations, Hindi/Marathi variants |
| bestmessage.org (2023) | ~954 | H1 only, then a numbered list of ~20 lines | No | Wrong festival date (9 Aug 2025) still on the page | No table, no FAQ, no schema | Ellipsis-heavy, third person | Rakhi-messages hub internal links |
| blog.yatradham.org | ~2,326 | 7 H2s; "Quotes for the Indian Army" is one section of a general quotes post | No — army is a subsection | A percentage appears but not about soldiers | No table, no FAQ schema | Devotional, app-download CTA | Broad "raksha bandhan quotes" head term |
| brainly.in thread | n/a | Q&A | n/a | None | UGC | n/a | Long-tail "slogans" |

Common to all five: **zero tables, zero FAQ schema, zero ItemList, zero first-party
data, and no mention of any practical constraint** — no addressing, no connectivity,
no reply expectation, no location secrecy, no route for a civilian with no soldier
in their life. Two of the four working pages carry a stale festival date.

## Phase 2 — gap analysis

**Table stakes.** Ready-to-send lines; a short "why send" framing; separate
registers for someone you know and someone you do not; Hindi-adjacent phrasing
expected by part of the audience.

**The gap.** Nobody writes about the *sender's* situation. Every page assumes one
generic sender addressing one generic soldier, so it can only produce patriotic
lines. The uncovered questions: what do you write when no reply is possible; what
do you write when you have never met the person; what do you write to a woman in
uniform when you are her brother; what do you write to a bereaved family; and what
do you do instead if you want the gesture to be material.

**Stale data.** bestmessage.org still prints 9 August 2025 as the festival date.
hinduparv.in is a 2020 page. Rakhi 2027 = **Tuesday 17 August 2027**, stated in the
opening block of this post.

**Unanswered questions.** How fast does anything actually arrive; does it matter if
he never sees it; is asking where he is posted a problem.

**Fan-out sub-queries** → H2s/H3s/FAQs: what to write to a soldier who cannot
reply · what to write to a soldier you don't know · rakhi for a female soldier ·
message to a martyr's family · how to send a rakhi with no address · text vs link ·
what not to say to a soldier · what else can I do besides a message.

**Angle.** Wins by being the only post that writes from the sender's side — six
distinct senders, including the civilian who has never met a soldier and the
brother of a woman in uniform — for a message that gets no reply, with the four
channels compared on real arrival conditions and the 51.1% phone-open rate behind
the "text first, link second" call.

## Differentiation vs `rakhi-wishes-for-brother-in-the-army`

The existing post (batch `2026-08-19-rakhi-3`) is about **one** sender — a sister
writing to her brother — grouped by *his reachability*, and its distinctive
material is postal: the 56/99 A.P.O. addressing rule from India Post's Post Office
Guide, the Army Postal Service Corps, and the Army's social-media advisory.

This post is grouped by *who is sending*, covers five senders that post does not
(friend/cousin, stranger writing publicly, brother of a servicewoman, unaddressed
drive rakhi, bereaved family), and deliberately does **not** re-cover A.P.O.
addressing, the ASPS, or the social-media advisory — partly to avoid duplication
and partly because both of those domains are banned in this batch. Shared premise:
the message must survive with no reply. Verdict: **ship, differentiated.** Overlap
is one paragraph of premise and one FAQ, not a structure.

## Phase 3 — sources

Lane C produced one strong on-subject item; lane D produced two. The government
context source (one permitted) is the Kendriya Sainik Board page, kept because it
is the honest answer to "what else can I do" and is topical rather than generic.

| # | Source | Domain | Lane | Verified claim |
|---|---|---|---|---|
| 1 | Biltz, M., *Resiliency on the home front*, Smith College School for Social Work M.S.W. thesis, 2012 | scholarworks.smith.edu | **C** | n=33 recruited via Facebook military communities/forums; unmarried service members depend on parents, relatives, **siblings**, significant others and close friends; those supporters are "restricted in accessing military resources because they do not meet the military's definition of family". Abstract read in full on the landing page. |
| 2 | Kirca, A., Malouff, J. M., & Meynadier, J., *The Effect of Expressed Gratitude Interventions on Psychological Wellbeing: A Meta-Analysis of Randomised Controlled Studies*, Int. J. Applied Positive Psychology 8:63–86, 28 Jan 2023 | link.springer.com | **D** | 23 studies / 25 samples / 6,745 participants; overall Hedges' g = 0.22 against neutral comparison conditions; coded item (10) is "whether gratitude was actually expressed to recipient prior to post-intervention assessment". Full PDF text extracted and read. |
| 3 | Wood, A. et al., *Social media and Internet-based communication in military families during separation: An international scoping review*, New Media & Society, 17 Aug 2022, CC-BY | journals.sagepub.com | **D** | Benefits for connectedness and communication potential alongside "unique practical barriers"; "a paucity of research focused specifically on the use of social media by Service families". **Abstract only** — sagepub returns HTTP 403 to this environment; abstract verified via the OpenAlex record for the DOI. |
| 4 | Kendriya Sainik Board, *Armed Forces Flag Day Fund* (no publication date; page last updated 12 Jun 2025) | ksb.gov.in | gov/context (1 permitted) | AFFDF instituted by Gazette of India notification No 5(1)/92/US(WE)/D(Res) dated 13 Apr 1993 by amalgamating four funds; administered by KSB for ex-servicemen, war widows and dependents; "Every year about 60000 Defence personnel are compulsorily retired" at 35–40. Page fetched and read. |

Ledger check before committing: `scholarworks.smith.edu` 0 prior, `link.springer.com`
0 prior, `journals.sagepub.com` 1 prior (`raksha-bandhan-wishes-link`) → 2,
`ksb.gov.in` 0 prior. No URL reused. Rows appended to `SOURCES.md`.

### Searches that returned nothing usable

Recorded because the negative result is a finding. Lane C/D searches tried:
`deployed service members communication with home frequency morale thesis` ·
`letters from strangers to deployed soldiers morale civilian support study` ·
`communication technology use during military deployment families asynchronous` ·
`military spouses social media operational security OPSEC disclosure thesis` ·
`care packages letters civilians support the troops thesis morale deployed` ·
`rakhi fictive kinship ritual brother non-relatives India anthropology thesis` ·
OpenAlex full-text queries for `mail from home morale deployed military personnel`,
`communication with deployed soldier limited internet access field`,
`Raksha Bandhan ritual sibling`.

Findings: (a) there is **no scholarly literature on the civilian-to-forces rakhi**
in any lane C or D repository — the 14 OpenAlex hits for "Raksha Bandhan ritual
sibling" are all about other festivals, kinship terminology or diaspora identity;
(b) the deployment-communication literature is almost entirely about **spouses and
children**, which is exactly what source 1 and source 3 independently report;
(c) lane D publishers are largely unfetchable from this environment — sagepub,
tandfonline, sciencedirect and OUP all returned 403, springer's PDF endpoint was
the only one that served full text. Unpaywall confirms Carter & Renshaw (2016),
Kumar & Epley (2018) and the Journal of Family Studies deployment-communication
paper are all closed, so none was cited.

## Phase 4–5 notes

- Body 1,712 words (plain split), FAQs excluded and absent from `contentMarkdown`.
- 7 H2s, 6 H3s, one H1. Comparison table: 5 rows × 4 columns, one column carrying
  first-party measurements with honest em-dashes where the platform has no number.
- 4 outbound links, all fetched. 3 internal links, all from `TEMPLATE_LINKS`,
  each placed after the section that establishes why the reader would want it.
- `structuredData`: `ItemList` mirroring the six H3s in order, plus an
  `@id`-matched enrichment block on `…#post` carrying `citation` (4 entries,
  one-to-one with `batchMeta.sources`), `about` and `mentions`. Every `sameAs`
  verified through the Wikipedia API with its Wikidata QID paired: Raksha Bandhan
  Q10266, Indian Armed Forces Q320919, Indian Army Q355771, Armed Forces Flag Day
  Q970234, Department of Ex-servicemen Welfare Q16920639 (the `Kendriya Sainik
  Board` title redirects there). No `datePublished` on the KSB citation — the page
  publishes none.

## Absorbed keyword — `raksha bandhan letter for soldiers in english` (2026-08-26)

**Cancelled as a separate URL; folded into this post.** The clustering analysis is in
`content/batches/2026-08-25-rakhi-2027/research/raksha-bandhan-letter-for-brother.md`
(section "Clustering verdicts on the two queued 'letter' keywords"). Summary of that
finding: against `letter for brother` the keyword shares **0 URLs** — a separate
keyword — but against **this** post it shares
`floweraura.com/blog/raksha-bandhan-wishes-n-messages-for-soldiers` and
`bestmessage.org/raksha-bandhan-messages-for-indian-soldiers/`, both already in the
Phase 1 SERP table above, plus `brainly.in` as a shared domain. Same intent, section-
sized demand, so it gets a section rather than a URL. Evidence instrument was Brave
`country=in` run by that agent; **WebSearch was exhausted at 200/200** and was not
attempted here.

**Half that SERP was deliberately not pursued.** `lettersinenglish.com`, `brainly.in`,
`infinitylearn` and the YouTube results are school-assignment intent — students told to
"write a letter to your brother inviting him for Raksha Bandhan". A commercial greeting
site has no business ranking for homework, and writing for it would have distorted a page
whose whole angle is the sender's real situation. Nothing in the new section addresses a
classroom brief, a "formal letter format", or a marks scheme.

### What was added

One **H3** — `### If you are posting a letter rather than sending a message` — inside the
existing `## What actually reaches him, and what it costs` H2, immediately after the
channel table (the table already carried a "Posted rakhi or letter" row, so the section
extends a claim the page had rather than opening a new topic). Plus **2 FAQs** in searcher
phrasing: "How do I write a Raksha Bandhan letter to a soldier in English?" and "What
address do I use to post a Raksha Bandhan letter or rakhi to a soldier?". One weak FAQ was
removed to stay inside the 8–12 cap — "Can I ask a soldier where he is posted?", already
answered by section 2 of the body and by the "what should I not write" FAQ.
`article.keywords` now carries the absorbed query.

### A.P.O. address format — NOT verified, and deliberately not printed

The section states **no address format at all**. Reason, recorded so it is not mistaken
for an omission:

- `indiapost.gov.in` publishes the rule (Post Office Guide Part I) and is **banned** at 4
  posts corpus-wide. The live sibling `rakhi-wishes-for-brother-in-the-army`
  (batch `2026-08-19-rakhi-3`) already cites it for the 56 / 99 A.P.O. convention, clause 27
  particulars, the bar on value-payable articles and the ₹500 insurance limit — that is its
  ground and this post stays off it entirely.
- `indianarmy.nic.in` Army Postal Service Corps page: **fetched, HTTP 200**, and contains
  no addressing text at all (0 matches for `A.P.O.` / `Army Post Office` / `Field Post
  Office` in the served HTML). `desw.gov.in`, `ksb.gov.in` and `mod.gov.in` home pages:
  fetched, HTTP 200, 0 matches. `indianairforce.nic.in`: connection timed out.
- Search fallbacks are degenerate. Brave returned **HTTP 429**; Bing, given a quoted
  `"56 APO"` query, returned Samsung, Flipkart, Vedantu and LeetCode results — it stripped
  the phrase exactly as the batch brief warns.

So the honest write-up is qualitative: get the line from the soldier or his family in
writing and copy it exactly, and treat any format from a blog — including this one — as a
letter that does not arrive. **Nothing about the A.P.O. numbering was written from memory.**
Condition that would close it: an unbanned, fetchable official statement of the defence-mail
addressing rule, or headroom on `indiapost.gov.in`.

### Word cap trade — what was cut to fit

Body was 1,716 words (plain split) against an 1,800 ceiling. The new H3 is ~145 words, so
framing was cut, not substance:

| Cut | Saved |
|---|---|
| Intro roadmap sentence, tightened and re-pointed at the letter section | ~6 |
| "Both cases share one constraint: you are writing into silence…" — merged into the paragraph above | ~23 |
| "Each situation below states … what the message has to do …" — tightened | ~10 |
| "This is the case with the thinnest evidence behind it and the most cliché attached to it." | ~16 |
| Table lead-in sentence, tightened | ~5 |
| "…and a rakhi post is not it" clause on the Flag Day Fund | ~13 |
| Five micro-trims (takeaway line, section 2, 4 and 5 leads, H3 phrasing) | ~14 |

**Final: 1,793 words plain split / 1,795 by `wordCount()` in `app/lib/batches.ts`.**
No source was added, so `SOURCES.md` is unchanged and the four verified sources stand.

### Audit state after the edit

48 passed / 2 failed, disjoint, 50 total — unchanged, and both failures are the structural
ones: platform-wide-not-rakhi-specific first-party facts (closes above ~500 rakhi pages) and
the gratitude meta-analysis failing the swap test with no scholarly literature existing on
the civilian-to-forces rakhi. The A.P.O. non-verification and the Brave-not-WebSearch
provenance of the merge are recorded in `honestAssessment`, not as extra `failed` entries.

Note on checklist item 43: there are now 7 H3s but the `ItemList` still carries 6 items. It
is named "Six Raksha Bandhan messages for soldiers, by who is sending" and mirrors the six
**numbered** H3s in order; the letter H3 is unnumbered, sits under a different H2 and is not
part of a ranked set, so it is correctly absent.
