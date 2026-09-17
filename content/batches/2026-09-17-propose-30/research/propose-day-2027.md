# Research brief — `propose day 2027`

- **Slug:** `propose-day-2027` (checked against Strapi 2026-09-17: 0 matches, free)
- **Category:** `modern-romance` (confirmed live in Strapi category list)
- **Templates:** `/proposal`, `/love-gf`, `/date-invitation`
- **Secondary keyword in cluster:** `propose day date` (same page)
- **Volume:** estimated band only, no tool data — not printed on the page as a real volume.

---

## Phase 0 — first-party facts used

Six lines from `content/facts.md` (2026-09-17 regeneration). Three of them sit inside
the first 150 words.

| Fact | Label used in body prose |
|---|---|
| 4,567 pages created since 2026-03-12 across 16 page types | "platform-wide, across all 16 page types" |
| Median first-save → last-edit gap 6.4 h, n=1,138 | "sampled on the 'I love you' page (n=1,138)" |
| 48.9% of views on a phone (25,167 of 51,504) | "of all page views platform-wide" |
| 39.9% password-protect before sharing (1,822 of 4,567) | "creators on SubhSandesh … platform-wide" |
| 92.7% published and shared (4,234 of 4,567) | table column headed "platform-wide" |
| /love-gf #1 — 1,138 pages, 24.9% of everything created | "the most-created template on the platform" |

**No figure is attributed to proposal pages anywhere on the page.** The `proposalpages`
read was refused by this machine's production-read policy, in wave 1 and again here.
**No price, free tier or paid tier is stated or implied** — the pricing block in
`facts.md` is empty.

The Raksha Bandhan lead-time block was not touched. Different festival, n=89, out of
bounds for this batch.

---

## Date verification — the whole point of this page

Computed three independent ways on 2026-09-17. All three agree.

1. BSD `date(1)` against the IANA tz database — `date -j -f %Y-%m-%d 2027-02-08 +%A` → `Monday`
2. Sakamoto's day-of-week congruence, implemented from scratch
3. An independent UTC date-object check

| Date | Weekday | Day of Valentine week |
|---|---|---|
| 2027-02-07 | Sunday | Rose Day |
| **2027-02-08** | **Monday** | **Propose Day** |
| 2027-02-09 | Tuesday | Chocolate Day |
| 2027-02-10 | Wednesday | Teddy Day |
| 2027-02-11 | Thursday | Promise Day |
| 2027-02-12 | Friday | Hug Day |
| 2027-02-13 | Saturday | Kiss Day |
| 2027-02-14 | Sunday | Valentine's Day |

Cross-years for the "the weekday moves, the date does not" claim: **2025-02-08 Saturday,
2026-02-08 Sunday, 2028-02-08 Tuesday.**

Two corrections the page makes that incumbents get wrong:

- Propose Day is the **second** day, not the first. A sibling agent found a live page
  heading a section "7 Feb Propose Day". 7 February is Rose Day.
- Valentine week is **eight dated days** (7–14 February inclusive), not seven. The page
  says so explicitly rather than quietly listing eight items under a "week" heading.

---

## Phase 1 — SERP analysis: NOT RUN, and why

**This agent never saw a live SERP for `propose day 2027`.** The first `WebSearch` call
returned:

> Web search was not performed: this session has used its web search budget (200 of 200
> WebSearch calls).

Sibling agents had exhausted the allowance before this post's turn. This is recorded as
an **audit failure** on the item *"H2s map to the fan-out sub-queries identified in
Phase 2"*, and in `batchMeta.structuralLimitations`. It is not papered over.

What substitutes for it, and its limits:

| Evidence | Where it came from | What it is worth |
|---|---|---|
| IGP blog page titled "Propose Day 2026 – When is Propose Day and Unique Proposal Ideas" | Sibling agent's indexed capture in the shared knowledge base | Confirms a ranking incumbent is year-stamped to 2026; a competitor, so never cited or linked |
| CraftyArt "Romantic Propose Day Templates" | Same | Template-seller; competitor |
| TheFestivalWishes "Propose Day Wishes … 8th February" | Same | Confirms the 8 February date is the consensus; content farm, competitor |
| Amar Ujala Hindi Propose Day wishes page | Same | News-cycle incumbent, refreshed each February |
| "Four ranking incumbents still carry 2025 in their titles" | Batch `BRIEF.md`, wave-1 SERP notes | Second-hand |

**The competitive read behind the H2 order is therefore second-hand.** Re-run Phase 1
once the search budget resets.

---

## Phase 2 — gap and angle

**Table stakes** (every incumbent has these, so the page must too): the date, a list of
the Valentine week days, ideas for what to send, some wishes/quotes.

**The gap.** Every incumbent is year-stamped 2025 or 2026 and none prints a **weekday**
against the 2027 dates. A Propose Day page is a dated-event page; the date is the
product. The uncopied observation is that 2027 puts Propose Day on a **working Monday**
in India, where 2026 put it on a Sunday — which converts into one concrete instruction
(build on Sunday 7 February) once you attach our 6.4-hour median build time to it.

**Stale data.** Not applicable in the usual sense: the incumbents cite no data at all
(bondlyfe, per the BRIEF, cites zero sources). The staleness here is the *title year*.

**Angle statement.**

> Wins by being the only Propose Day page that prints the verified 2027 weekday for all
> eight dated days of Valentine week, converts the Monday into a concrete
> build-on-Sunday instruction using SubhSandesh's 6.4-hour median first-save-to-last-edit
> gap sampled on `/love-gf` (n=1,138), and states as a finding that no peer-reviewed
> source documents Valentine week's day-by-day structure as a South Asian elaboration.

**Fan-out sub-queries** the H2s answer (reconstructed, not SERP-derived): when is Propose
Day 2027 · what day of the week · is it the first day of Valentine week · full Valentine
week date list · why does the weekday change · what do I send · is it only for marriage
proposals · where did Valentine week come from.

---

## Phase 3 — sources

Lane: **how dated observances get fixed in a calendar, and the commercial construction
of Valentine week.** Deliberately avoided: first-disclosure anxiety, marriage readiness,
novelty, escalation, WhatsApp mechanics, CMC channel, post-conflict, bilingual emotion,
perceived effort, greeting obligation, ghazal poetics, script choice, regional-language
internet, Valentine reception in Maharashtra, Bengali literary, privacy/context collapse.

Search infrastructure note: **OpenAlex returned HTTP 429** (daily credit budget spent by
earlier agents), so discovery ran through the **Crossref** and **DOAJ** APIs instead.

### The negative finding, stated in the body

**No peer-reviewed source documents Valentine week's day-by-day structure — Rose,
Propose, Chocolate, Teddy, Promise, Hug, Kiss — as a South Asian elaboration on
Valentine's Day.** This confirms the wave-1 agent's result independently. Terms tried:

```
Valentine week seven days India
Valentine's Day India cultural globalization
invented tradition holiday calendar
calendar custom AND festival
title:"Valentine"                        (DOAJ, 231 hits, all Panton-Valentine leukocidin)
bibjson.abstract:"Valentine's Day"       (DOAJ, 31 hits, none on the week structure)
Saint Valentine's Day history origin Chaucer
festival calendar standardization print almanac
Hallmark holiday manufactured observance
holiday commercialization gift giving obligation
```

The page says this in prose and names the terms. It is a finding, not an omission.

### The four cited sources, plus one entity reference

1. **Lisa Bitel, "The 'real' St. Valentine was no patron of love", *The Conversation*,
   13 February 2018.**
   `https://theconversation.com/the-real-st-valentine-was-no-patron-of-love-90518`
   Several St Valentines died on 14 February; two executed under Claudius Gothicus,
   269–270 AD. The romantic association appeared "more than a thousand years after the
   martyrs' death", when Chaucer tied the February feast to bird-mating in the *Parlement
   of Foules*. Also: no evidence Gelasius replaced Lupercalia with the Valentine cult.
   **Full text read.** Subject test: PASS. Swap test: PASS (no other keyword in this
   batch is about how 14 February acquired its meaning).

2. **Jingyu Li, Xiaoming Wang, Qiuyang Gu, "Shopping festival atmospherics of China's
   singles day shopping festival and participants' perception: Scale development and
   validation", *PLOS One* 20(6): e0324989, 20 June 2025.**
   `https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0324989`
   **Peer-reviewed, open access (PLOS, CC BY).** 11 November "was not a traditional,
   official, or even popular holiday" before Alibaba pioneered the 11.11 festival in
   2009. Valid sample 686 of 738. The "cultural cues" dimension is the fixed annual date
   itself becoming a must-do ritual that participants prepare for in advance.
   **Full text read.** Subject test: PASS. Swap test: PASS.

3. **Žilvytis Šaknys, "National and Confessional Features of Festivals and Holidays:
   Structure of the Ritual Year in Modern Lithuania and Bulgaria", *The Yearbook of
   Balkan and Baltic Studies* 4(1), 23 December 2021. DOI 10.7592/YBBS4.08.**
   `https://www.folklore.ee/balkan_baltic_yearbook/YBBS/article/view/123`
   **Peer-reviewed, open access.** Fieldwork 2012–2019 in Sofia, Vilnius and Vilnius
   County. Abstract: "little correlation between a holiday being a day off and its
   popularity". Conclusions: a day off "does not guarantee" popularity.
   **Full text PDF read.** Used as a *counterweight* to this post's own Monday argument,
   which is the honest way to use it. Subject test: PASS. Swap test: PASS.

4. **Avery Morrow, "Tree Ordination as Invented Tradition", *ASIANetwork Exchange*
   19(1): 53–60, 19 January 2012. DOI 10.16995/ane.11, CC BY 4.0.**
   `https://www.asianetworkexchange.org/article/id/7744/`
   **Peer-reviewed, open access.** An invented ritual takes hold by appealing to the
   "comfort of familiar forms" rather than to a principle, asserting continuity with
   existing cultural symbols. Applied to a calendar of named days.
   **Full text PDF read.** Subject test: PASS. Swap test: PASS.

5. **"Valentine's Week", Wikipedia.** Entity disambiguation only, not counted as
   research. Confirms the 7→14 February themed-day sequence with Propose Day second.
   Note `https://en.wikipedia.org/wiki/Propose_Day` is on wave 1's banned list, so the
   `Valentine's_Week` page is used instead.

**Generic context statistics used: zero.** (Budget allows one; none was needed.)

### Cap check

Run before choosing sources and again after writing. After this post:

- `theconversation.com` → 2 posts (cap 3) ✓
- `journals.plos.org` → 2 posts (cap 3) ✓
- `folklore.ee` → 1 post ✓
- `asianetworkexchange.org` → 1 post ✓
- `en.wikipedia.org` → 1 post ✓
- No URL at the 2-post cap; no wave-1 banned URL reused.

### Sources considered and rejected

| Source | Why not |
|---|---|
| Oruch, "St. Valentine, Chaucer, and Spring in February", *Speculum* 56(3), 1981 | The canonical treatment, but closed access with no readable abstract anywhere (Semantic Scholar reports the abstract elided by the publisher). Citing it would mean citing from memory. Bitel, who cites it, is used instead. |
| Kelly, *Chaucer and the Cult of Saint Valentine*, Brill 1986 | Closed; Brill returned 405. |
| "Black Friday rituals…", *Cogent Business & Management* 2020 | tandfonline.com 403. |
| "How online shopping festival atmosphere promotes consumer participation", *Fashion and Textiles* 2023 | springeropen.com bot challenge. |
| The Conversation, "How commercialization … transformed the Day of the Dead" | Would have put theconversation.com over the 3-post domain cap alongside the Bitel piece; also a weaker subject fit. |
| timeanddate.com February 2027 calendar | 403. The weekdays are verified computationally three ways instead, which is stronger. |
| Any incumbent Propose Day page (IGP, CraftyArt, TheFestivalWishes, Amar Ujala, bondlyfe) | Competitors. Read in Phase 1 via indexed captures, never cited, linked or mirrored. |

---

## Phase 4–5 — structure and links

8 H2s, 4 H3s, one H1. 1,730 words in `contentMarkdown`, FAQs excluded. 12 FAQs live in
`article.faqs` and the renderer-built FAQPage only.

- Block 1 — answer paragraph: date in sentence one, three first-party numbers inside 150 words.
- Block 2 — definition H2, with Bitel on the date preceding the meaning.
- Block 3 — the eight-day calendar with weekdays, plus the verification method.
- Block 3b — the Monday argument, with Šaknys as the counterweight.
- Block 3c — four numbered options as H3s (mirrored by the `ItemList`).
- Block 4 — comparison table, 3 rows × 4 columns, first-party column labelled platform-wide.
- Block 5 — "When a proposal page is the wrong choice".
- Block 6 — the research finding.
- Block 7 — sources with dates.

**Internal links (3):** `/proposal` in H3 1, after the value is established; `/love-gf`
in H3 3 and again in the objection block; `/date-invitation` in the objection block. All
from `TEMPLATE_LINKS`, all relative.

**The honest alternative.** `/proposal` is the wrong choice when the reader is not
actually proposing marriage — which is most of this traffic. The page says so, points
at `/love-gf` for "will you be my girlfriend", and at `/date-invitation` for asking
someone out. It also names two cases where no page is right: a recipient with no
smartphone, and two people in the same room.

**Structured data.** One `@id`-matched enrichment block on `…/propose-day-2027#post`
carrying `about` (Propose Day, Q7250378), four `mentions` (Valentine's Week Q138309865,
Valentine's Day Q37587, Singles' Day Q4158493, Invented tradition Q1350207) and
`citation` mirroring `batchMeta.sources` one-to-one. Every QID was resolved against the
Wikipedia API on 2026-09-17; none returned `missing`. The Wikipedia citation carries no
`datePublished`, because the page publishes none. Plus one `ItemList` mirroring the four
H3s in order.

---

## Phase 6 — audit

**49 passed, 1 failed, disjoint, sum 50.** Strings copied byte-verbatim from
`publish-checklist.md` by a parser that follows each item to the next marker, blank line
or heading.

The single failure is *"H2s map to the fan-out sub-queries identified in Phase 2"* — the
Phase 1 SERP pass could not be run, so the fan-out set is reconstructed rather than
observed. Six structural limitations (no proposal-specific data, empty pricing block, no
SERP, the Valentine-week research absence, the OpenAlex/publisher blocks, and the
unreadable Oruch article) are in `batchMeta.structuralLimitations`, not in `failed`.

**Honest assessment.** The page's one defensible edge is that it is simply correct for
2027 and can attach a first-party build time to the Monday. That edge is perishable:
incumbents will re-stamp their titles in January 2027 and their domain authority is far
above ours. Position 6–10 is the realistic target, and I never saw the live SERP, so the
competitive read behind the H2 order is second-hand.
