# Research brief — `ganesh chaturthi outfits`

- **Batch:** `2026-09-10-ganesh-10d` (Ganesh Chaturthi wave 4)
- **Slug:** `ganesh-chaturthi-outfits`
- **Folds:** `ganesh chaturthi look`, `ganesh chaturthi outfit ideas`
- **Pool relevance:** 1251 · **Priority:** 3
- **Gate against:** nothing (`gateAgainst: null`) — no live sibling covers dress
- **Date of this brief:** 2026-09-10
- **OUTCOME: ABORTED AT PHASE 0. No blog JSON written.**

---

## Verdict in one line

The SERP lane is the cleanest in the batch and the §3 cannibalisation gate is not
the binding constraint. The **Phase 0 first-party data gate is**, and it fails
outright: `content/facts.md` contains **zero** facts about clothing, dress,
textiles or festival attire, and no available fallback closes it honestly. Per
`ASSIGNMENTS.json`'s own `formatRisk` note — *"Highest Phase 0 abort probability.
Do not force platform statistics into a clothing post"* — this is the designed
outcome, not a failure to try.

---

## Phase 0 determination — fact by fact

The gate requires **≥3 facts relevant to the target keyword, with ≥2 that can sit
inside the first 150 words**. Two tests applied to every line in `facts.md`:

- **Subject test** — is it *about* Ganesh Chaturthi outfits / festival dress?
- **Swap test** — could it sit unchanged in a rakhi post, a Diwali post and an
  anniversary post? If yes it is filler and does not count.

`facts.md` was regenerated 2026-09-09 and holds 20 quotable data lines. All 20
were considered. **All 20 fail.**

### `## Product usage` (8 lines)

| Fact line (abridged) | Subject test | Swap test | Counts? |
|---|---|---|---|
| 3,894 personalised pages across 15 page types | FAIL — page creation volume, not dress | FAIL — fits every post in the batch | No |
| Most popular creation: "I love you" page (/love-gf), 1,070 pages, 27.5% | FAIL — romantic template mix | FAIL — used verbatim in siblings | No |
| #1 page type: /love-gf, 1,070, 27.5% | FAIL | FAIL | No |
| #2 page type: digital bouquet (/bouquet-gf), 969, 24.9% | FAIL | FAIL | No |
| #3 page type: apology dashboard, 912, 23.4% | FAIL | FAIL | No |
| #4 page type: Darling romantic page, 387, 9.9% | FAIL | FAIL | No |
| #5 page type: birthday page for a partner, 259, 6.7% | FAIL | FAIL | No |
| 3,088 registered creators / 1.26 pages per creator | FAIL — account metric | FAIL | No |

None of the 15 page types is a clothing, styling, wardrobe or attire template.
There is no field in any page schema that records what anyone wore.

### `## Performance and reach` (3 lines)

| Fact line (abridged) | Subject test | Swap test | Counts? |
|---|---|---|---|
| 46,005 recorded views of shared pages | FAIL — traffic, not dress | FAIL | No |
| Average views per created page: 11.8 | FAIL | FAIL | No |
| Most-viewed template: love-gf, 15,568 views, 33.8% | FAIL | FAIL | No |

### `## Customer behaviour` (5 lines)

| Fact line (abridged) | Subject test | Swap test | Counts? |
|---|---|---|---|
| 49.6% of shared pages opened on a phone | FAIL — device split | FAIL — the single most swappable line in the file | No |
| 49.8% of views on a touch device | FAIL | FAIL | No |
| 42.0% of creators password-protect before sharing | FAIL — privacy behaviour | FAIL | No |
| 96.0% of started pages are published and shared | FAIL — completion rate | FAIL | No |
| Median first-save-to-last-edit gap: 6.8 hours (/love-gf, n=1,070) | FAIL — editing behaviour | FAIL | No |

This block is the specific trap the assignment warned about. A sentence like
"49.6% of shared pages are opened on a phone, so plan your outfit photos for a
vertical screen" *sounds* on-topic and is not: the number measures viewers'
hardware, says nothing about clothing, and would sit unchanged in any of the 36
live siblings. It is filler dressed as relevance.

### `## Pricing and cost` / `## Pricing (fill in by hand)`

Empty in both places. Independently, the assignment forbids pricing any garment,
so this block is unusable twice over. **No post may price anything.**

### `## Festival lead time` (6 lines)

| Fact line (abridged) | Subject test | Swap test | Counts? |
|---|---|---|---|
| Raksha Bandhan 2026 lead time, n=89, 49.4% on the day itself, median 0 days | FAIL — build timing, and a *different festival* | FAIL — written for the batch generally | No |
| None of the 89 rakhi pages built >7 days ahead | FAIL | FAIL | No |
| Of 79 finished in time, 55.7% on the day, 86.1% within 24h | FAIL | FAIL | No |
| Median rakhi first-save-to-last-edit: 5.4 hours, n=89 | FAIL | FAIL | No |
| Occasion-dated pages are 144 of 3,894 (3.7%) | FAIL | FAIL | No |
| No Ganesh Chaturthi page-creation data exists at all | FAIL — a *negative* about page creation | Partly Ganesh-specific, but still not about dress | No |

The lead-time dataset is the most tempting bridge and the weakest. Even setting
aside the two MANDATORY disclosures (BRIEF §1: it measures **Raksha Bandhan**,
and **n=89 is small**), it measures *when people build a greeting page*. Outfit
shopping lead time is a different behaviour, on a different subject, in a
different economy. Asserting the one from the other would be an invented
statistic — precisely what the skill forbids.

**Relevant facts found: 0 of a required 3. Facts that could sit in the first 150
words: 0 of a required 2. GATE FAILS.**

---

## Fallback route 1 — documented first-hand experience

The skill's stated fallback when first-party data is genuinely absent is
documented first-hand experience ("I built X and here is what broke"). It must be
**real and specific to this post's subject**.

- The `## First-hand experience` block in `facts.md` is **empty** (a bare `-`).
  Nothing is recorded to draw on.
- I have no genuine first-hand experience of Ganesh Chaturthi dress practice,
  nine-yard saree draping, or Puneri pagdi tying to document.
- The one real first-hand story available — building the
  `/happy-ganesh-chaturthi` template, which went live 2026-09-10 — is **not about
  outfits**, and is equally available to every sibling in the batch, so it fails
  the swap test as well as the subject test.

Inventing a styling anecdote would satisfy the word count and violate the skill's
hard rule against invention. **Fallback route 1 declined.**

## Fallback route 2 — third-party research alone

Phase 3 research (regional textile and dress practice; Maharashtra and Karnataka
festival dress custom; nine-yard *nauvari* saree, dhoti-kurta, Puneri pagdi) is
almost certainly sourceable — textile history and dress anthropology are far
better studied than most of this batch's lanes, and this is the one keyword where
the *scholarly* supply is likely richer than the first-party supply.

But third-party sourcing cannot substitute for Phase 0. A post built only from
outside sources is, by the skill's own framing, "a sixth version of the same
page" — synthesis with no moat, nothing an answer engine has a reason to prefer
over the pages already ranking. Phase 0 is blocking precisely so that this route
is not taken. **Fallback route 2 declined.**

---

## What would close the gap

None of these can be run today: `npm run facts` is blocked by this machine's
command classifier (BRIEF §1), and re-running it would re-date every line and
invalidate the 133 `factsUsed` entries across the 36 existing posts. These are
for whoever retries this keyword after the platform has attire data.

**Query A — the only clothing-adjacent field that exists on the platform.**
`server/src/models/DateInvitationPage.ts` defines `dressCode` (maxlength 200) and
`dressNote` (maxlength 200) — the sole garment-related fields in any page schema.
Against the `gifts` database:

```
db.dateinvitationpages.countDocuments({ dressCode: { $nin: ["", null] } })
db.dateinvitationpages.countDocuments({ dressNote: { $nin: ["", null] } })
db.dateinvitationpages.countDocuments({})
```

This would yield "N% of date invitations specify a dress code". **Be warned that
this still fails the subject test for this keyword** — it is romantic date
planning, not Ganesh Chaturthi dress custom, and it would need its own honest
disclosure. It is listed because it is the closest thing that exists, not because
it clears the gate. Note also that `dateinvitationpages` carries no label in
`TEMPLATE_LABELS` in `scripts/collect-facts.mjs`, so it produces no `facts.md`
line today and therefore nothing byte-verbatim to quote in `factsUsed`.

**Query B — the real fix: capture the data.** Nothing on the platform asks what
anyone wore. A festival page type with an attire or `dressCode` field (as the
date-invitation template already has), or a post-publish prompt on
`/happy-ganesh-chaturthi`, would create a genuine first-party dress dataset. That
is a product change, not a query.

**Query C — Ganesh page creation, once it exists.** As of 2026-09-10 the
`/happy-ganesh-chaturthi` template is four days old with zero pages. A creation
and lead-time probe of its collection after Ganesh Chaturthi 2026 (Monday 14
September) would at least give the batch a Ganesh-native number — useful for
other keywords in this cluster, though still not about clothing.

**Retry condition:** re-run this keyword only when a probe returns ≥3 lines that
pass both the subject and swap tests for *dress* — not for page behaviour. Absent
that, this keyword should stay unwritten or be reassigned to a lane the platform
can actually evidence.

---

## Phase 1 — NOT MEASURED (SERP unobserved)

**No SERP was pulled for this keyword. There are no Phase 1 observations.** Two
independent reasons, stated plainly rather than papered over:

1. Phase 0 had already failed and is blocking, so Phase 1 could not change the
   outcome.
2. **The session's `WebSearch` budget was exhausted** — 200 of 200 calls, a quota
   shared across the six agents running this batch concurrently. The one search I
   attempted for this keyword was refused. So even had I wanted to measure the
   SERP, I could not, and no top-5 comparison table exists in this brief.

**Recorded tool limitation (BRIEF §4):** the `WebSearch` tool is **US-locale
only** — there is no `gl=in` parameter. This is a strongly India-intent keyword,
so a US-locale measurement would in any case be a weak proxy for the real Indian
SERP. Every wave-3 post records this; it is recorded here in place of an audit
report, since no blog JSON exists to carry one.

**Lane character — INFERENCE, NOT MEASUREMENT.** Flagged as such so a future
retry does not mistake it for evidence. From the keyword's shape alone,
`ganesh chaturthi outfits` reads as a 3-word commercial/visual query whose intent
is likely shopping and image browsing rather than reading, which would put a text
post up against ecommerce inventory, marketplace listings and Pinterest boards.
**A retry must verify this against a live SERP before acting on it.** If it holds,
two consequences follow:

1. **It may not be an article SERP at all.** A text post would be competing
   against inventory and imagery, and even a well-sourced textile-history piece
   may answer a different question than the searcher asked.
2. **It is a near-head commercial term** for a low-authority domain. Per the
   skill's Phase 1 rule, a future retry should propose long-tail alternatives
   (4–8 words) before targeting this string. Candidates that fit the assigned
   research lane and are answerable in prose:
   - `what to wear for ganesh chaturthi in maharashtra`
   - `nauvari saree how to drape for ganesh chaturthi`
   - `puneri pagdi meaning and when it is worn`
   - `ganesh chaturthi dress colour tradition`

   Note that these are **research-lane** reframings — they still require Phase 0
   data or documented first-hand experience to clear the gate. Reframing the
   keyword does not create first-party facts.

## Phase 2 — gap analysis

Not performed. The skill requires the angle sentence *"This post wins by being
the only one that [gap] using [specific first-party fact]"* to be writable
honestly. With zero relevant first-party facts, the second half of that sentence
cannot be completed, so no angle was recorded and `batchMeta.angle` does not
exist for this slug.

## Phase 3 — sources

Not sourced. Deliberately: sourcing 4–6 URLs would consume scarce
batch-unique domains (§4 records 178 URLs and 97 domains already spent, with ten
domains at or past the cap of 3) for a post that will not be written. No entry
was added to `USED-SOURCES.md`, so the textile and dress-anthropology lane is
left fully open for a future retry.

---

## Cannibalisation gate (§3) — for the record

Not the reason for the abort. `gateAgainst` is `null`; no sibling among the 36
live posts across `-10`, `-10b`, `-10c` and this wave covers dress at all. Had
Phase 0 passed, this keyword would have had the batch's cleanest separation. The
inverse risk that `ASSIGNMENTS.json` flagged is exactly what materialised: a
clean SERP lane the platform's own data cannot support.

## Housekeeping

- No blog JSON written: `blogs/ganesh-chaturthi-outfits.json` does not exist and
  should not be created.
- No `batch.json` entry, no `USED-SOURCES.md` entry, no sources consumed.
- No temp files left in the shared session scratchpad.
- **This file is final.**
