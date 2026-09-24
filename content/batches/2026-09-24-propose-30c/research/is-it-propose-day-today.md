# Research brief — `is-it-propose-day-today`

**Keyword:** `is it propose day today` · **Slug:** `is-it-propose-day-today` ·
**Category:** `modern-romance` · **Batch:** `2026-09-24-propose-30c` ·
**Written:** 2026-09-24 (Thursday 24 September 2026, confirmed with `date`)

---

## Phase 0 — facts gate

`content/facts.md`, regenerated 2026-09-24. Three lines copied verbatim into
`batchMeta.factsUsed`; two of them sit inside the first 150 words of the body.
Four further lines from the manual "Festival lead time" block are used in the
comparison table, with both mandatory disclosures printed in body prose (the
measurement is **Raksha Bandhan**, not Propose Day, and **n = 89** is small, so
no per-template or per-region rate is derived from it).

No proposal-specific data exists — the `proposalpages` probe is still refused by
the production-read policy. Every figure on the page is therefore labelled
**platform-wide across 21 page types** or **sampled on the named template**, in
prose. The pricing block in `content/facts.md` is empty for a fourth batch, so
the post states no price, no tier and no cost of any kind.

---

## Phase 1 — SERP analysis: NOT RUN, and the post says so

**No SERP was measured for this keyword.** The only India-served SERPs ever
measured in this project are the 11 in
`content/keywords/2026-09-16-propose-100/serps.md`, captured 2026-09-16, and
`is it propose day today` is not among them. WebSearch was used once in this run
— for open-access construal-level literature, not for the keyword — and no
ranking page was fetched.

Consequences, all honoured:

- The post makes **no claim about what any competing page currently says**.
- My task prompt reported that an incumbent publishes a section headed
  "7 Feb Propose Day", which is Rose Day. **I did not fetch that page, so the
  post does not repeat the claim.** It says only that date confusion is common
  and gives verifiable reasons for it.
- Checklist items that depend on the top five pages (items 2 and 4) are recorded
  as **failed**, because they cannot be assessed without a measured SERP.

---

## Phase 2 — gap analysis and the angle

### The query shape

`is it propose day today` is a **yes/no check**, not a calendar lookup and not a
gift-idea query. The reader wants one bit of information and wants it in the
first sentence. The interesting structural fact is that **the answer is "no" on
364 days of the year**, so a page that only answers the question wastes almost
every visit.

### Cannibalisation check — read before writing

**`content/batches/2026-09-17-propose-30/blogs/propose-day-2027.json`** (wave 2,
merged). Read in full. That page is *the calendar page*: its H2s are "What is
Propose Day, and why is it on 8 February?", "Valentine week 2027: every dated day
with its weekday", "Why a Monday Propose Day is harder than a Sunday one", "Four
things that actually fit into Monday 8 February 2027", "Which format survives a
working Monday", "When a proposal page is the wrong choice", "What the research
does and does not say about Valentine week". Its lane is invented tradition and
holiday construction; its table is the eight-day weekday table.

**`content/batches/2026-09-24-propose-30c/blogs/propose-day-kab-hai.json`** — did
not exist on disk when this post was written (concurrent sibling). Its lane is
the Hindi-language date question.

**Verdict: genuinely distinct, and here is why.**

| | `propose-day-2027` | this post |
|---|---|---|
| Query shape | calendar lookup — "when is it" | yes/no check — "is it today" |
| Answer given | a dated table of eight days | one word, in sentence one |
| Reader's assumed position | planning for a known date | unsure, possibly wrong-footed by a forward |
| Organising principle | the week's structure | **temporal distance from 8 February** |
| Research lane | invented tradition / holiday construction | **construal level and psychological distance** |
| Table | eight days × weekday | four distance bands × lead-time behaviour |
| Primary job | tell you the date | tell you the answer, then serve you on the 364 days it is "no" |

This post **defers** to the sibling for the full dated week rather than
reproducing it, and names both sibling slugs in prose.

### The gap this post fills

Nothing in the project serves the reader who arrives on a "is it today" query and
gets "no". This page treats that as the main body of work: how far away the date
is, which occasion the reader may actually mean, and what is worth doing today
regardless.

### Fan-out sub-queries → H2s

- What day is Propose Day, and how do I check it? → H2 2
- How long until Propose Day? → H2 3 and the table
- What do I do if it is not today? → H2 3, H3s 2–4
- Why do people get the date wrong? → H2 5
- Does it matter how far away it is? → H2 6
- What if I should not send anything at all? → H2 7

### Angle

> Wins by being the only Propose Day page written for the 364 days when the
> answer is "no" — it structures the advice by distance from 8 February, prices
> that structure against SubhSandesh's own festival lead-time sample (n = 89,
> Raksha Bandhan, median lead time 0 days), and reports honestly that the
> construal-level literature it draws the framing from has just survived a failed
> 11,775-person multilab replication.

---

## Phase 3 — sources

### The assigned research lane, and what I actually found

My task prompt asked me to build on construal-level theory: "distant events are
thought about abstractly and near ones concretely — which … gives you a real
basis for structuring the page by how far away the date is."

**That claim is contested, and I am not printing it as settled.** The Construal
Level International Multilab Replication (CLIMR), a Stage-2 Registered Report
posted to PsyArXiv on 2025-10-28, ran 11,775 participants across 27 countries and
regions. Its temporal-distance protocol (N = 2,941) was a direct replication of
Liberman and Trope (1998, Study 1) and returned **d = 0.08, 95% CI [0.003, 0.16]**
against an original effect of **d = 0.92**. The authors conclude the findings
"provide limited evidence for the predictions of the theory and present a
critical challenge for CLT."

Liberman and Trope replied in *Advances in Methods and Practices in Psychological
Science* (April 2026), arguing the replication fell short of established
standards — inattentive participants, non-native-speaker respondents,
translations that did not preserve intent, weak or valence-confounded distance
manipulations — and reporting a reanalysis plus a new replication that do show a
temporal-distance effect. The dispute is live.

A third data point in the same direction: Calderon and colleagues' replication of
Wakslak, Trope, Liberman and Alony (2006) failed to find the likelihood→construal
effect across two samples (N = 115 and N = 120, against originals of N = 20 and
N = 34), and their meta-analytic summary found effect sizes declining as samples
grew.

**So the page does not assert that distance changes how you think.** It structures
by distance because of something measurable — the platform's own lead-time
sample — and devotes an H2 to saying plainly that the psychological literature
behind the framing is currently under dispute, with the numbers on both sides.
This is the correction the brief asks for: the framing claim in my prompt did not
survive checking.

### The eight-day structure of Valentine week — confirmed negative

`findpapers.mjs "Valentine week India seven days commercial festival"` returned
nothing relevant on either Crossref or Europe PMC (hits were about the seven-day
week as a calendrical unit, pharmacy opening hours and a time-motion study of
ASHAs). Terms tried across this run: *Valentine week India seven days commercial
festival*; *construal level temporal distance study*; *psychological distance
abstract concrete thinking research*; *temporal landmarks planning study*;
*Construal Level International Multilab Replication*; *temporal landmark fresh
start effect aspirational behavior calendar date*.

**This confirms the wave-2 finding rather than refuting it:** no peer-reviewed
source documenting Valentine week's day-by-day structure was located. The post
therefore **does not assert when or where Propose Day originated**, and says so
in the body.

### Sources used (4)

| # | Source | What it supports | Read |
|---|---|---|---|
| 1 | CLIMR Stage-2 Registered Report, PsyArXiv, 2025-10-28 (CC BY 4.0) | N = 11,775 across 27 countries; temporal-distance protocol N = 2,941; d = 0.08, 95% CI [0.003, 0.16] vs original d = 0.92 | Full abstract, via the OSF API record for preprint `wqbhd_v2` and the Crossref record for `10.31234/osf.io/wqbhd_v2`. The OSF web page renders client-side and returned no text to my fetcher. |
| 2 | Liberman & Trope commentary, *AMPPS*, April 2026, DOI 10.1177/25152459261428024 (CC BY-NC) | The replication is disputed; a reanalysis and a new replication show a temporal-distance effect | **Abstract only.** `journals.sagepub.com` returned HTTP 403. Abstract read from the publisher-deposited Crossref record. |
| 3 | Calderon et al., replication of Wakslak et al. (2006), PsyArXiv, 2020-04-23 | Two failed replications (N = 115, N = 120) of likelihood→construal; effect sizes decline as samples grow | Full abstract, via the Crossref record for `10.31234/osf.io/gd6ej`. |
| 4 | Dai, Milkman & Riis, "The Fresh Start Effect", *Management Science*, October 2014, DOI 10.1287/mnsc.2014.1901 | Google searches for "diet", gym visits and goal commitments all rise after temporal landmarks — a new week, month, year, semester, birthday or holiday | **Abstract only.** `pubsonline.informs.org` returned HTTP 403. Abstract read from the publisher-deposited Crossref record. |

**Subject test:** sources 1, 2 and 3 are directly about temporal/psychological
distance and how far-off events are represented — the post's organising
principle. Source 4 is about dated occasions functioning as commitment points,
which is what Propose Day is for the reader who is not on it.

**Swap test:** none of the four would sit unchanged in another post in this
batch. No other post in `2026-09-24-propose-30c` is organised by distance from
the date or discusses the replication status of construal-level theory.

**Generic context statistics:** zero. No PIB, TRAI, Census or MEA figure appears.

**Wikipedia:** zero body links. Wikipedia appears only as `sameAs` targets in
`structuredData`, which does not count against the 0–2 body budget.

**Caps:** `capcheck.mjs` run when sources were chosen and again immediately
before saving. Avoided entirely: `pmc.ncbi.nlm.nih.gov` / `europepmc.org`,
`frontiersin.org`, `journals.plos.org`, `aclanthology.org` (all at cap), and
`github.com`. `osf.io` carries two URLs but counts as one post against the
domain cap; `doi.org` resolves to SAGE for source 2, counted as
`journals.sagepub.com`.

---

## Phase 4–5 — structure, links, targeting

**Block order.** Answer paragraph (three sentences, two first-party numbers) →
definition H2 → four-H3 distance body → comparison table → date-confusion H2 →
research-status H2 → downside H2 → sources H2. Seven H2s, four H3s, one H1.

**Every H3 carries the same four fields in the same order:** *Where you are* /
*Who this is for* / *What to do today* / *What not to do*.

**Template links (3, all from `TEMPLATE_LINKS`):**

- `/proposal` — mandatory, placed after the H3 that establishes the reader is
  actually on or next to the day.
- `/love-gf` — the genuine alternative. In Indian usage "propose" usually means
  asking someone to be your girlfriend or boyfriend, not asking them to marry
  you, so the marriage-proposal scrapbook is the wrong template for most of this
  traffic. `/love-gf` is also the most-viewed template on the platform at 16,998
  views, 29.9% of all page views.
- `/streak` — for the reader who is months out and wants to start something
  today that arrives on 8 February by itself.

**Sibling blog pages are named by slug in prose, not hyperlinked.** Wave 1–3
`/blog/` slugs are not `TEMPLATE_LINKS` entries and may 404 until those waves
publish, and checklist item 31 requires every internal link to come from
`TEMPLATE_LINKS`. Naming them keeps the cross-reference and keeps item 31 honest.
Named: `propose-day-2027`, `propose-day-kab-hai`,
`is-it-national-girlfriend-day-today` (the last confirmed live in
`content/keywords/strapi-live-articles.json`).

**Structured data.** One `ItemList` mirroring the four H3s in order, plus one
`@id`-matched enrichment block on `<canonicalURL>#post` carrying `citation`
(mirroring `batchMeta.sources` one-to-one), `about` and `mentions`. All four
Wikidata QIDs verified against the Wikipedia API on 2026-09-24: Valentine's Week
Q138309865, Valentine's Day Q37587, Marriage proposal Q1057944, Construal level
theory Q1128306.

---

## Date verification

Every date on the page was produced by `date` on this machine on 2026-09-24, not
copied from the task prompt or from any list:

```
for y in 2026 2027 2028 2029 2030; do date -j -f "%Y-%m-%d" "$y-02-08" "+%A"; done
2026 Sunday · 2027 Monday · 2028 Tuesday · 2029 Thursday · 2030 Friday

date -j -f "%Y-%m-%d" "2027-02-07" "+%A %-d %B %Y"  → Sunday 7 February 2027
date -j -f "%Y-%m-%d" "2027-02-14" "+%A %-d %B %Y"  → Sunday 14 February 2027
inclusive span 7–14 February 2027                    → 8 days
```

So: Propose Day Monday 8 February 2027, second of eight dated days; Rose Day
Sunday 7 February 2027; Valentine's Day Sunday 14 February 2027; Propose Day 2026
was a Sunday and 2027 is a working Monday. **Every one of the prompt's date
claims checked out.** The framing claim that did not check out was the
construal-level one.

---

## Honest assessment

The page's defensible claim is not that it knows the date — every competitor
knows the date. It is that it is built for the 364 days when the answer is "no",
that it prints a first-party lead-time distribution nobody else can print, and
that it states the replication status of the literature it borrows its structure
from instead of quoting the textbook version. Against an annual February news
cycle owned by large publishers, and with no SERP measured for this keyword,
position is unpredictable and no outcome is being predicted here.
