# Research brief — `what to reply when someone says i miss you`

- **Batch:** `2026-09-25-miss-you-30`, wave 2, row 23
- **Primary keyword:** what to reply when someone says i miss you
- **Secondary, folded in deliberately (5/10 SERP overlap):** how to respond to i miss you from a guy
- **Category:** `miss-you-across-miles` — verified live in Strapi
- **Templates:** `/missyou-gf` (mandatory), `/hold-my-hand`, `/templates`
- **Slug check:** `filters[slug][$eq]=what-to-reply-when-someone-says-i-miss-you` → 0 results, free
- **Date of all measurements:** 2026-09-25

---

## Phase 0 — first-party data gate

Source: `content/batches/2026-09-25-miss-you-30/facts-snapshot.md` (pinned), not the live
`content/facts.md`. Seven lines used, byte-verbatim. Two sit in the second paragraph, inside
the first 150 words.

The binding constraint is not sources, it is differentiation from first-party data. Usage
counts across the 42 sibling files on disk, miss-you lines only:

| Line | Siblings already using it |
|---|---|
| 2.6-hour median first-save→last-edit gap | 10 |
| 88.8% published and shared | 10 |
| 86.4% carry a written memory | 21 |
| 92.1% carry an "open when" letter | 21 |
| 2,417 views / 11.3 per page | 23 |
| 47 city pairs | 23 |
| 28.0% set a reunion countdown | 32 |
| 1,434 hug taps | 33 |
| 13.6% record a voice note | 35 |
| 214 pages since 2026-07-28 | 38 |
| 43.5% password-protect | 39 |
| 88-word median letter | 39 |

**Deviation from the brief, recorded.** BRIEF-WAVE2 §4 says open with the two least-used.
The two least-used (2.6 hours, 88.8%) are both in the **opening paragraph of
`how-i-miss-you-meaning`**, this post's nearest sibling, which shipped today. Opening on
them would have made the two posts' first 150 words near-identical — the exact
cannibalisation the brief's §2 exists to prevent. Opened instead on the hug-tap line and
the open-when-letter line. The justification is not convenience: **the hug taps are the only
recipient-side measurement in the snapshot, and this is the only recipient-side post in the
batch.** 33 siblings cite that line as sender-side colour; only this one can cite it as the
reader's own behaviour.

Mandatory caveats carried in body prose, not only here: n = 214 over two months (template
live 2026-07-28, so no seasonal claim); `viewCount` is page views, not unique visitors; the
city, background-music and "together since" fields are pickers with defaults and are
therefore **not cited at all**; the database records which template was opened, never who
received it.

Price guard: `## Pricing` in `content/facts.md` is empty. No price, no "free", no
"costs nothing" — one draft phrase ("costs nothing and is accurate") was cut for this.

---

## Phase 1 — SERP analysis

Ten India results from `SERPS-WAVE2.md` (DuckDuckGo `kl=in-en`, 2026-09-25). **Live titles
and headings fetched, not read off the slugs**, per the METHOD table in BRIEF-WAVE2 §0. All
ten returned HTTP 200.

| # | Domain | Live `<title>` | Count in title | Gendered | "Don't feel the same" heading | Timing heading | Group/public |
|---|---|---|---|---|---|---|---|
| 1 | lovetoknow.com | 32 Genuine Ways to Respond When Someone Says "I Miss You" | leads | no | no | no | no |
| 2 | whattosayguide.com | What to Say When Someone Says 'I Miss You': Warm and Honest Replies | no | no | **yes** | no | no |
| 3 | wikihow.com | 15+ Ways to Respond to an "I Miss You" Text | leads | no | **yes** | no | no |
| 4 | whattosayguide.com | What to Say When Someone Says I Miss You: Texts and Replies | no | no | **yes** | no | no |
| 5 | upjourney.com | How to Respond to "I Miss You" (30+ Best Replies) | in title | no | **yes** | yes | no |
| 6 | thecognitio.com | How to Respond to "I Miss You": 40+ Replies | in title | no | **yes** | no | no |
| 7 | practicalpie.com | How To Respond To "I Miss You" (50+ Exact Reponses) | in title | no | **yes** | yes | no |
| 8 | occasiontalk.com | How to Respond When Someone Says "I Miss You" - 30 Best Responses | in title | yes | no | no | no |
| 9 | vibromedia.com | 200+ Responses to "I Miss You" That Will Melt Their Heart | leads | no | body only | no | no |
| 10 | responsewheel.com | 21 Ways to Respond When Someone Says "I Miss You" | leads | no | **yes** | yes | no |

**Tallies:** 9/10 carry a raw count in the title, 4/10 lead with one. **7/10 carry a heading
for "you don't feel the same"**, 8/10 address it somewhere. 3/10 give timing its own
heading. 3/10 name an ex in a heading. **1/10 is gendered. 0/10 mention a group chat or a
public message.**

All ten sort replies by **tone or relationship** — partner / friends / family / flirty /
funny / short. None sorts by the situation the person replying is actually in. Word counts
run 1,479 (lovetoknow) to 6,156 (upjourney).

---

## Phase 2 — gap analysis

**Table stakes:** a set of replies for the reciprocating case; a set for friends and family;
short text-length replies; something on the not-feeling-the-same case; a "what not to say".

**The prompt's framing claim was wrong, and this is the most useful thing in this brief.**
The task prompt predicted the count of results addressing "you do not feel the same way"
would be "likely near zero and is where the post is won". It is **7 of 10**. Building the
post on that premise would have produced a page whose central claim was falsifiable by
anyone who opened result 2.

**The gap as actually measured:**

1. **The group-chat / public case — 0 of 10.** Not one page distinguishes a 1:1 text from
   a message sent where other people can read it, which is a materially different problem.
2. **The gendered version — 1 of 10**, which is why the secondary keyword is worth folding
   in and why so much of what circulates on it is guesswork.
3. **Grounding.** The seven pages that cover the decline case all give it as assertion.
   None cites anything. Pancani et al. 2022 gives it a direction: an explicit no did less
   damage than unexplained silence.
4. **The organising axis.** Sorting by what the replier feels rather than by tone. This
   follows the cluster shape two other rows arrived at independently (sort by the structural
   reason, not by mood), applied to the receiving end.

**Stale data:** none of the ten cites a dated statistic at all, so there is nothing to
supersede — which is itself the finding that they are ungrounded.

**Fan-out sub-queries → H2s:** what do the ranking pages give me · what if I miss them too ·
what if I don't · what if I can't tell what they meant · what if it was in a group · how
fast should I reply · does it differ from a guy · what do the numbers not say.

**Angle:** the only page on this SERP written for the recipient and sorted by their own
situation, with 0/10 and 1/10 measured rather than asserted, grounded in a 176-participant
finding and in 1,434 recipient-side hug taps.

---

## Phase 3 — sources

Zero WebSearch calls spent. Route used: Crossref + Europe PMC via `findpapers.mjs`, arXiv
API, DOAJ API, Unpaywall, Tatoeba `api_v0`.

| # | URL | Host cap status | Journal named | Read |
|---|---|---|---|---|
| 1 | tatoeba.org/en/sentences/show/6324271 | cap-exempt instrument | — | corpus counts run live |
| 2 | cyberpsychology.eu/article/view/14691 | new host, 0 posts → 1 | Cyberpsychology (0 → 1) | abstract in full, landing page |
| 3 | arxiv.org/abs/2605.03687 | 2 → 3, at cap, not over | arXiv preprint | abstract via arXiv API |
| 4 | europepmc.org/article/PMC/PMC11387639 | cap-exempt repository | Scientific Reports (1 → 2) | abstract via Europe PMC REST |

**Subject test:** 1, 2 and 3 are directly about replying, declining, and reply timing. **≥1
peer-reviewed open access:** 2 and 4. **Generic context statistics:** none. **Wikipedia:**
none in the body; three entities carry Wikipedia + Wikidata QID pairs in `structuredData`
only (Interpersonal communication Q3685487, Text messaging Q17166101, Ghosting Q21050182,
all verified against the MediaWiki API).

**Sources deliberately dropped, and why:**

- **PMC12886356**, "Resilience to ghosting? A randomized controlled trial…", *Frontiers in
  Psychology*, CC BY — a well-matched null result (no effect of a two-hour experimental
  ghosting on objective or subjective sleep, N = 112). Dropped because **Frontiers in
  Psychology is already named in 3 posts** in this batch (`how-i-miss-you-meaning`,
  `i-miss-you-in-russian`, `miss-you-quotes-for-her`) and the journal cap binds even when
  the linked host is the cap-exempt Europe PMC.
- **PMC12221085 / `pone.0326189`**, "The impact of emojis on perceived responsiveness and
  relationship satisfaction in text messaging", *PLOS ONE* 2025 — the single most on-topic
  paper found. Dropped: `journals.plos.org` is at 3 posts and PLOS ONE is the journal in all
  three.
- **PMC13077900**, fNIRS hyperscanning on emotional self-disclosure "from the
  discloser-responder perspective" — genuinely about the responder, but already cited by one
  sibling, so it would have failed the swap test outright.

**What does not exist.** No research was found on receiving an affectionate message in a
group chat or in public. Terms tried: `context collapse audience imagined social media
self-presentation`; `"group chat" AND relationship` (DOAJ and Europe PMC); `"public
declaration" AND relationship AND "social media"`; `"comforting messages"`;
`"person-centered" AND messages`; `"affectionate message" AND text`; `responding/reply AND
"romantic relationship"`. One loosely related hit (social isolation among older adults in
urban Japan). That section is therefore written as judgement and labelled as judgement.

**Environment limits, recorded as method:** PDFs do not parse here, so every source is an
abstract-and-metadata read. `academic.oup.com` returns 403 (Cloudflare) — the JCMC 2018
response-latency paper is open access but unreadable, which is why the arXiv preprint
carries that section instead. `europepmc.org` landing pages return 403 to a scripted user
agent; the REST API serves the same record and was used.

---

## Phase 5 — links and the Phase 0 / Phase 5 tension

Template links, all from `TEMPLATE_LINKS`, all placed after the section establishes why the
reader would want them:

- `/missyou-gf` — mandatory batch-wide, placed in the reciprocating section after the case
  for sending more than a sentence is made.
- `/hold-my-hand` — the `oneOfLinks` alternative, with the reason stated: it asks for sixty
  seconds of attention rather than words, which is what a reader stuck for a reply has.
- `/templates` — after the comparison table.

Two further internal links are `/blog/` URLs rather than template URLs, and this is recorded
as a failed checklist item rather than quietly passed:
`/blog/miss-you-message-after-breakup` (live, HTTP 200) and `/blog/how-i-miss-you-meaning`
(ships in this batch; will 404 until published).

**The recorded tension.** Phase 0 wants first-party numbers in the first 150 words; Phase 5
forbids an internal link there. Resolved the same way the `for wife` row resolved it: the
two numbers sit in the second paragraph as plain prose, and `/missyou-gf` is held back to
the section where it earns its place. The cost is that the page's strongest number is not
the one next to the call to action.

---

## De-confliction from `blogs/how-i-miss-you-meaning.json`

Read in full before drafting. That post owns **interpretation**: the exclamative grammar of
"how I miss you", the five things "I miss you" can be doing, and the tells table. This post
owns **action**, and re-derives none of it — the "if you cannot tell what they meant"
section runs four sentences and hands the question over by link.

The one overlap is the sibling's short "What to send back" section. This page splits that
into four situations, adds the group/public case the sibling does not have, grounds the
decline case in Pancani 2022 (which the sibling does not cite), and adds the timing axis.
No fact, source or sentence is shared; the two posts share zero sources.

## Cannibalisation against the live site

`filters[slug][$contains]=miss` returns **exactly 81 live slugs**, and **zero** match
`repl|respond|what-does|meaning|answer|received`. The prompt's structural claim checks out
against Strapi directly rather than against a brief. Every live page is sender-side: a
message bank, a language spoke, or a generator. The nearest live pages —
`what-to-say-when-you-miss-someone`, `how-to-make-someone-miss-you`, `i-miss-you-message` —
all address the person composing. This is the site's first recipient-side page.
