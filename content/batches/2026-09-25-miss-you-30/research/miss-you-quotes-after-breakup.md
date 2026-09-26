# Research brief — `miss you quotes after breakup`

Batch `2026-09-25-miss-you-30`, wave 2, row 30. Written 2026-09-25.
Slug `miss-you-quotes-after-breakup` · category `miss-you-across-miles` ·
templates `/missyou-gf`, `/catch`, `/templates`.

Slug check: `https://strapi.subhsandesh.in/api/articles?filters[slug][$eq]=miss-you-quotes-after-breakup`
returns `[]` — free. The two live pages below both return their own slug.

---

## Phase 1 — SERP, measured not assumed

Source list: `SERPS-WAVE2.md` "## miss you quotes after breakup" (lines 350–359),
DuckDuckGo `kl=in-en`, 2026-09-25, second screening round. **It holds eight URLs,
not ten.** Live `<title>` and full text fetched for all eight on 2026-09-25.

| # | Host | Live title | Body words | Framing | Count-led |
|---|---|---|---|---|---|
| 1 | theeveryverse.com | When Love Hurts: 25 Raw 'Missing You' Quotes For Breakups And Healing | ~1,318 | moving-on (mood buckets: Ache of Absence, Shock of Change, Quiet Healing) | yes (25) |
| 2 | positivityblog.com | 120 Breakup Quotes: Relatable and Positive Sayings To Help You Move on From Heartbreak | ~3,006 | moving-on | yes (120) |
| 3 | motivationandlove.com | I Miss You After Breakup Quotes | ~3,098 | send-this (H2s "…for Her After a Breakup" / "…for Him") | no |
| 4 | quotes.lifehack.org | (title fetch failed — body read succeeded) | ~4,963 | moving-on ("inspiring quotes after breakup") | unknown |
| 5 | marriage.com | 150+"I Miss You" Quotes for the One You Love | ~5,699 | send-this — **but not about a breakup at all** | yes (150+) |
| 6 | stylecraze.com | 206 Inspirational Quotes To Strengthen You After A Break Up | ~8,424 | moving-on | yes (206) |
| 7 | deskablog.com | 250+ Deep Breakup Quotes To Help You Heal, Let Go, And Love Again | ~6,312 | moving-on | yes (250+) |
| 8 | shinereads.com | 100+ Breakup Quotes to Help You Heal, Move On & Find Strength After Heartbreak | ~2,633 | moving-on | yes (100+) |

**The numbers that decide the angle:**

- **moving-on 6, send-this 2.** Page one is dominated by content for the person
  having the feeling, not for a message being delivered.
- **1 of 8 is not about breakups at all** (marriage.com, a general "for the one
  you love" bank).
- **Count-led: 6 of the 7 titles I could fetch.** Title counts alone total
  **851+ borrowed lines** on one page of results.
- **ZERO of 8 advise against sending. Zero discuss sending at all.** Full text of
  every page searched for `do not send` / `don't send`, `before you send`,
  `drunk`, `2am`, `3am`, `midnight`, `manipulat*`, `make .* ex miss`. Total hits
  across eight pages: **one** — `no-contact` appears once on stylecraze, in
  passing. Nothing else matched anywhere.
- **8 of 8 are mood- or stage-bucketed banks** — the shape BRIEF-WAVE2 §0 bans.

**Prompt framing corrected.** My task prompt said momjunction ranks a "captions to
make your ex miss you" page here and that attractiondiary serves the send-it
intent on this SERP. **Neither domain is in the eight results**, and neither
appeared on the live fetch. Both appear elsewhere in `SERPS-WAVE2.md` (momjunction
on the him/her/husband/mom/dad/brother SERPs, attractiondiary on husband/wife and
two meaning queries) — the orchestrator carried them across. The "wanting them to
miss you back" section is therefore written as a genre that exists across the
wider miss-you cluster, **not** as a measured claim about a rival on this SERP.

## Cannibalisation — two live pages, read before drafting

Both fetched with `ctx_fetch_and_index` on 2026-09-25.

**`/blog/miss-you-message-after-breakup`** — NOT a mood-bucketed bank. It is a
compose-and-send workflow: "How to write" (5 numbered steps: pause and check your
motive → one honest sentence → one specific memory → apology/ownership → close
with no pressure), example templates, medium and timing, a tone-vs-effect table, a
step-by-step for building a private page, "how to respond if they reply", "red
flags and safety", and a pre-send checklist. Its "when should you not send"
section is **four bullets** — legal orders, abuse/harassment, intoxication, intent
to manipulate — inside a ~2,000-word article whose architecture assumes the
message goes out.

**`/blog/miss-you-message-for-ex`** — organised by **goal and tone**: low-pressure,
sincere/rekindling, apology, closure, platonic, long-form; plus a 6-step writing
method and "examples by relationship type". This is both banned shapes in one
page (tone buckets + write-your-own workflow).

**THE SPLIT, IN ONE SENTENCE:** the live pages are compose-and-send workflows that
assume the message will be sent and treat not sending as an exception; this page
is about **borrowed lines**, treats **not sending as the majority case**, and
sorts by **who the line is for — you, or them** — rather than by goal, tone or
mood.

That is an honest difference, so the row proceeds rather than aborting. No body
cross-link was placed, for one reason recorded in `structuralLimitations`: the
live page's closing CTA contains a price claim ("Create your free SubhSandesh
page"), which this batch's price guard forbids this post from endorsing. **Flagged
for the orchestrator as a live-site issue independent of this post.**

## Sibling check (43 blogs on disk)

- `miss-you-quotes.json` — axis: **verified provenance** (book, year, primary
  text). Owns attributed literary lines; this post prints none.
- `miss-you-quotes-for-him.json` — axis: **structural reason he is away**.
- `miss-you-quotes-for-her.json` — axis: **delivery** (bare/credited/framed).
- `how-to-say-i-miss-you-without-sounding-desperate.json` — axis: **register**.

This post's axis — **who the line is for, and whether to send at all** — is not
taken. Nearest overlap is one H2 in `miss-you-quotes.json` ("When a quote is the
wrong thing to send"), which is one section of a provenance post, not its shape.

## Phase 2 — gap and angle

**Table stakes:** lines to read; something about healing; some acknowledgement of
the ex.

**The gap:** every page on this SERP hands over between 25 and 250+ lines and
never once asks whether any of them should be sent. The 2am case — the single most
common version of the misfire — is named by nothing on page one.

**Angle:** the only page on this SERP that measures the SERP, and then acts on the
measurement: lines sorted by who they are for, with the send/do-not-send decision
as the spine, grounded in 214 miss-you pages of which 24 were never shared.

**Fan-out sub-queries → H2s:** what is actually ranking for this / lines to keep
for yourself / when sending is defensible / when it is not, and the 2am case /
making an ex miss you / what the first-party data supports / where our own
template is the wrong object.

## Phase 3 — sources

Route: `findpapers.mjs` (Crossref + Europe PMC), then Europe PMC REST
(`/europepmc/webservices/rest/search`) with field-scoped queries. **Zero WebSearch
calls spent.** All three papers read as **abstract + metadata only**; no PDF or
full text parsed.

| URL | Host (capped?) | Journal (the capped entity) | Used for |
|---|---|---|---|
| `europepmc.org/article/PMC/PMC11985774` | europepmc.org — **cap-exempt** | *Frontiers in Psychiatry*, 2025-03-28 | n=560, 17–22, recent breakup; rumination → worse academic/physical outcomes; avoidance coping mediates rumination → emotional wellbeing |
| `europepmc.org/article/PMC/PMC10727987` | europepmc.org — **cap-exempt** | *Emerging Adulthood*, 2023-10-18 | n=196 longitudinal; attachment insecurity → depressive/anxiety symptoms via self-punishment coping and less accommodation |
| `europepmc.org/article/PMC/PMC9083440` | europepmc.org — **cap-exempt** | *Frontiers in Network Physiology*, 2022-03-03 | "Mind after Midnight": nocturnal wakefulness, negative attentional bias, altered reward processing, prefrontal disinhibition |
| `en.wiktionary.org/wiki/quote` | **cap-exempt** instrument | Wiktionary | "to copy out exact words" dated **1680** — grounds the batch lane sentence |

None of the three PMCIDs appears in any sibling's `sources`. Counting **the
hostname linked**, per BRIEF-WAVE2 §4: `frontiersin.org` is untouched by this post
even though two papers were published by Frontiers, because both are linked at
`europepmc.org`. `capcheck.mjs` run after writing: `journals.plos.org` 3,
`arxiv.org` 3, `doi.org` 4 (resolver, not counted); this post adds nothing to any
of them.

**Searches that returned nothing usable, named so the absence is on record:**
`post-dissolution contact adjustment` (Crossref's best match, J Soc Pers Relat
2020 `10.1177/0265407520906014`, is SAGE-paywalled and SAGE is 403-blocked here);
`no contact rule breakup recovery` (Crossref returns tear-film optometry —
"breakup" is a corneal term and dominates the index); `TITLE:"no contact" AND
ABSTRACT:"ex-partner" AND OPEN_ACCESS:Y` → **0 hits**; expressive writing × breakup
→ **0**; breakup × reconciliation → **0**; jealousy induction → **0**. This is why
the post carries 4 outbound links rather than 5–6, recorded as the single audit
failure.

## Phase 0 — first-party

Six lines from `facts-snapshot.md`, byte-verbatim. Opened with the two
**least-reused** in the batch (13 siblings each at time of writing): the 88.8%
published-and-shared line and the 2.6-hour median edit gap.

The 88.8% line does new work here read as its complement — **11.2%, or 24 of 214,
never shared** — which is the only first-party evidence in the snapshot for the
unsent message, the central case of this post. Differentiation from the
first-party data across the batch nonetheless remains **thin**: 12 lines, 43
posts, no unused line exists. Closes with a new database probe, not more writing.

Caveats carried in body prose: n=214 over two months on one template; the database
records which template was opened, never who received it; a published page is not
evidence it was welcome. `viewCount` and the picker fields (city, background
music, "together since") are not cited anywhere in this post, so those two caveats
do not arise.

## Phase 5 — links and register

`/missyou-gf` is mandatory and the post says plainly where it misfits: the
template holds a countdown, voice note, memories and open-when letters, all of
which assume a shared future a breakup has just removed, so sending it to an ex is
exactly the impulse the post counsels care about. It is recommended only for the
first row of the decision table. `/catch` is the genuine alternative — a letter
first and a page second, which is the object that works whether or not it is ever
sent, and therefore the right one for the dominant "lines for yourself" reader.
`/templates` is the browse fallback. Three internal links, all after the value is
established, none in the opening.

No price, no "free", no cost implication anywhere. No mood or tone buckets. No
write-your-own workflow. No attributed literary lines.
