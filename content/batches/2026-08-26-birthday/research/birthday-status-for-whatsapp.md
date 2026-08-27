# Research brief — birthday status for whatsapp

- **Batch:** `2026-08-26-birthday` · **Rank in batch:** 2 · **Lane:** B (computer-mediated
  communication, messaging brevity, mobile text behaviour)
- **Market:** India (evergreen, no event date) · **Band:** 3,000–10,000/mo ·
  **Expected clicks:** 429 · **Weak results:** 5+
- **Slug:** `birthday-status-for-whatsapp` · **Category:** `milestone-birthdays`

> **Provenance, stated up front.** This brief was **reconstructed on 2026-08-27, after the
> draft was written**. The original agent never wrote it. It is assembled from three things
> that do exist: the live India-localised SERP block in `ASSIGNMENTS.json` (harvested with a
> real browser at `gl=in` on 2026-08-26), the draft's own structure, and the five sources in
> `batchMeta.sources`, all of which were re-fetched and verified on 2026-08-27. WebSearch was
> exhausted at 200/200, so **no live fan-out or People-Also-Ask harvest was possible** — the
> sub-queries in §3 are inferred from the SERP titles and the keyword, not measured. Read them
> as a hypothesis. The remediation pass on 2026-08-27 re-pointed the body at them, so the
> checklist item *"H2s map to the fan-out sub-queries identified in Phase 2"* now passes —
> against inferred sub-queries, which is the caveat that survives into `honestAssessment`.

---

## 1. Phase 1 — who ranks (live, `gl=in`, 2026-08-26)

| # | Domain | Page | Country | Format | States a length? |
|---|---|---|---|---|---|
| 1 | shutterfly.com | The 80 Best Happy Birthday Quotes to Help You Celebrate | US | 80-item quote listicle | No |
| 2 | pinterest.com | Birthday Wishes Whatsapp Status | — | Image board, no prose | No |
| 3 | vidday.com | 75 Ways to Say Happy Birthday | US | 75-item listicle | No |
| 4 | captionhuzz.com | 180+ Happy Birthday Wishes for WhatsApp | thin aggregator | 180+ listicle | No |
| 5 | goodhousekeeping.com | 125 Best Happy Birthday Wishes and Blessings for Friends | US | 125-item listicle | No |
| 6 | boxupgifting.com | 100+ Birthday Wishes for Wife & Husband | commercial | 100+ listicle | No |
| 7 | blessingwish.com | The 99+ Happy Birthday Wishes For WhatsApp Status | thin aggregator | 99+ listicle | No |

**Why it is winnable (from `ASSIGNMENTS.json`):** shutterfly.com and goodhousekeeping.com —
both US publishers — hold top-5 for an intrinsically Indian query, which means Google has no
strong Indian page to hand it. Pinterest sits at #2, which is a board, not an answer.
captionhuzz and blessingwish are thin aggregators with no first-party anything.

**Every one of these seven is a competitor** under `references/competitors.md`. None may be
cited or linked; the draft links none of them.

---

## 2. Gap analysis

The whole SERP answers one question — *"give me lines to copy"* — and answers it by volume.
Not one of the seven pages answers any of these:

1. **How long should the status be?** Zero pages state a character count, a word count, or any
   length guidance at all. This is the gap.
2. **Status vs direct message vs a link** — what each format is actually for. The listicles
   treat "status" as a synonym for "wish" and never separate the broadcast from the message.
3. **What happens after you post it** — reach, lifespan, who sees it, whether anyone opens a
   link you put in it. No measured behaviour anywhere on the SERP.
4. **When not to post one.** Every page is uniformly positive; none names a case where a
   status is the wrong call.

**The exploitable asymmetry:** none of the seven has first-party data, because none of them
operates a product that records how people write birthday messages. SubhSandesh does. The
`birthdaygfpages` probe (2026-08-26, n=198 pages / n=197 messages) measures the exact number
the whole SERP is silent about.

**Cannibalisation check (BRIEF §6):** 181 birthday-related articles are already live, including
45 `birthday-wishes-for-<relation>` posts. This post is organised by **length and format**, not
by relationship, so it does not restate any of them. The eight sample statuses are deliberately
spread across relations (friend, brother, mother, father, best friend, colleague) so that none
of them becomes a de-facto relation post.

---

## 3. Inferred fan-out sub-queries (hypothesis, not harvested)

| Sub-query | Covered by H2 |
|---|---|
| what is a whatsapp birthday status | "What is a WhatsApp birthday status?" |
| how long should a birthday status be / character limit | "How long should a birthday status be?" |
| short birthday status for whatsapp (copy) | "Eight birthday statuses for WhatsApp, with character counts" |
| birthday status vs message vs link | "Status, direct message or a page link: what each is good for" |
| should I put a link in my status / will anyone open it | "Should you put a link in your status, and will anyone open it?" |
| when not to post a birthday status | "When a WhatsApp status is the wrong place for a birthday wish" |

**All six content H2s map** as of the 2026-08-27 remediation pass. The two off-query analytics
sections — *"Birthday pages are the one thing people open on a laptop"* and *"Most people never
play the game you built"* — were deleted and their first-party data (view split, views per page,
open-rate ceiling, 14.4% quiz-play rate) rebuilt into the single on-query link section, where the
same numbers answer "is a link worth adding, and will it be opened" rather than describing the
product's analytics. Nothing was invented to replace them. Two first-party details lost their home in the cut and were
dropped from `factsUsed` rather than re-homed: the surprise-audio share (53/198) and the 6.5%
share-of-all-pages framing. Across the whole fix pass the body lost 98 words net.

---

## 4. The angle

> **Wins by being the only post that tells the reader how long a WhatsApp birthday status
> should be — 96 characters, the measured median of 197 SubhSandesh birthday messages —
> instead of handing over another 75-to-180-item wish listicle.**

The 96-character median is the strongest data-to-keyword fit in the whole batch: a WhatsApp
status *is* a short broadcast line, and 96 characters is exactly that length. The counterpart
number is the **48.6% mobile split** on birthday-page views (1,081 / 1,121 / 22 of 2,224) — the
one page type on the site that tips to desktop. It is genuinely counterintuitive in a
WhatsApp-shaped post, but it earns its place only as an answer to *should I put a link in my
status* — not as a section about the product's device mix.

Execution rule that follows from the angle: every sample status carries its exact character
count, and all eight sit at or under 96 (range 68–91, median 76). The counts were re-verified
character-by-character on 2026-08-27 — all eight are correct.

---

## 5. First-party data used (`birthdaygfpages` probe, 2026-08-26)

| Figure | Value | Where it lands |
|---|---|---|
| Median personal message | **96 characters** (n=197); longest 1,437 | Opening answer, H2 #2, table, FAQ #1 |
| Under 100 characters | 106 of 197 (53.8%) | Opening answer, keyTakeaways, table |
| First-save → last-edit gap | 0.9 h median vs 6.9 h for the love page; 100 of 198 inside the hour | H2 #2 |
| View split | 1,081 mobile / 1,121 desktop / 22 tablet = 48.6% mobile vs 51.0% site-wide | H2 #5 (link section), FAQ #10 |
| Views per page | 11.2 vs 12.2 site-wide; 2,224 total | Table, H2 #5, FAQ #6 |
| Quiz played | 28 of 195 pages (14.4%); 606 questions loaded | H2 #5, FAQ #9 |
| Ceiling | only 2 of 198 passed 50 views (max 67); 4 never opened | H2 #5, FAQ #6 |
| Password-protected | 37.9% vs 43.9% site-wide | H2 #6 |
| Personal message added | 99.5%; cover photo 198/198; surprise audio 53/198 | Table, FAQ #4 |

**Stated limits (BRIEF §1, carried into the post's closing note):** n=198, data starts 2026-04,
and the August clustering of birthdates is a launch artefact, not demography. The post says so
explicitly. **There is no per-language birthday breakdown** — FAQ #8 says so out loud rather than
inventing one.

---

## 6. Sources — lane B, all re-fetched and verified 2026-08-27

| Source | Claim used | Verified | Licence / access |
|---|---|---|---|
| Palin et al., *How Do People Type on Mobile Devices?*, MobileHCI 2019 — `userinterfaces.aalto.fi/typing37k/` | 36.2 WPM average, 2.3% uncorrected errors, 37,370 volunteers | ✅ verbatim in the abstract | Open, dataset public |
| Waterloo et al., *Norms of online expressions of emotion*, *New Media & Society* (online 23 May 2017; 20(5), 2018) — `pure.uva.nl` AAM PDF | 1,201 Dutch users aged 15–25, March 2016; positive-emotion appropriateness **highest for WhatsApp**, then Instagram, Facebook, Twitter | ✅ full text read; order matches exactly | CC BY-NC |
| Rababah, *Speech Act Analysis of Whatsapp Statuses Used by Jordanians*, *Review of European Studies* 12(2), 30 Apr 2020 — `ccsenet.org` | 200 statuses from 50 students; expressive 37%, directive 25%, assertive 23%, commissive 15% | ✅ verbatim in the abstract | CC BY 4.0, open access |
| Anyanwu et al., *Twenty-four Hour Seduction*, *Online Media & Society* 4(3), 30 Sep 2023 — `hnpublisher.com` | WhatsApp status as a public 24-hour digital diary; users posted for self-expression without weighing consequences | ✅ matches the abstract's Findings | Open access OJS |
| Georgakopoulou, *Sharing the moment as small stories*, *Narrative Inquiry* 27(2), 2017, 311–333 — `kclpure.kcl.ac.uk` AAM PDF | "showing the moment as opposed to telling it", via pre-selection, visualization and audience selection | ✅ verbatim in the abstract | Green AAM, free; publisher version paywalled |

**Subject test:** four of five are about WhatsApp or story-format posting behaviour specifically.
Passes.

**Swap test:** **still fails on one source, and remains a recorded audit failure.** The batch
resolved the duplicate URL — this post keeps `typing37k`, `thank-you-for-birthday-wishes.json`
drops it — but that fixes the collision, not the genericness. A 36.2 wpm average across 37,370
volunteers is about no platform and no occasion, so it would drop unedited into
`2-line-birthday-wishes`, the other lane-B brevity keyword in this batch. Waterloo (`pure.uva.nl`)
is the secondary offender: it is about emotional expression on WhatsApp generally rather than on
statuses, and the same URL already sits in
`2026-08-25-rakhi-2027/blogs/raksha-bandhan-business-wishes-with-company-logo.json`. Closing it
needs a verified open-access source on brevity or attention in *broadcast/status* posting; none is
in hand and WebSearch is exhausted, so re-check when the search budget resets.

**Caps (checked across all 83 `content/batches/*/blogs/*.json` on 2026-08-27):**
`typing37k` URL = 2 posts (at the 2-post cap, not over); `ccsenet.org` = 2 posts;
`pure.uva.nl` = 2 posts; `hnpublisher.com` = 1; `kclpure.kcl.ac.uk` = 1. All domains within the
3-post cap. **No banned source used; zero generic context statistics (PIB / TRAI / Census / MEA).**

---

## 7. Internal links

Three, all real `TEMPLATE_LINKS` entries, each placed after the section has already paid out:

- `https://subhsandesh.in/birthday-friend` — after the format-comparison table
- `https://subhsandesh.in/birthday-bestfriend` — closing the "should you put a link in your status"
  section, framed as the one case where the interactive layer has odds
- `https://subhsandesh.in/templates` — closing line

No `/birthday-gf`: the keyword is not relationship-specific and the sample statuses span friends,
siblings, parents and colleagues.

---

## 8. Open items — status after the 2026-08-27 remediation pass

1. ~~Body 1,842 words~~ — **closed.** Now **1,744** by plain whitespace split and **1,767** by
   `wordCount()` in `app/lib/batches.ts`, the figure the studio displays. Both inside 1,500–1,800.
2. ~~Paragraph length~~ — **closed.** The opening and the "four cases" paragraph were split, and
   each of the eight H3 blurbs now runs as two short paragraphs. No paragraph exceeds three
   sentences.
3. ~~Two off-query H2s~~ — **closed.** Merged and re-pointed at the query (§3).
4. **Swap test** on the Aalto source (§6) — **still open, structural.** See §6 for the blocker and
   the re-check trigger.

Post-remediation the 50-item publish checklist reads **49 passed, 1 failed**.
