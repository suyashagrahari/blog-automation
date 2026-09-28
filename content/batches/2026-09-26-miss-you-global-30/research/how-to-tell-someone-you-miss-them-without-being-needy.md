# Research brief — how to tell someone you miss them without being needy

Row: `how-to-tell-someone-you-miss-them-without-being-needy` · market `us-en` · body language English · tier `A-howto` · WAVE4-PLAN row 5.
Written 2026-09-28.

---

## Phase 0 — first-party data gate

Source is `facts-snapshot.md` (pinned), **not** `content/facts.md`. `npm run facts` was
deliberately NOT run: it rewrites the live file in place and orphans `factsUsed` across
every written post.

Gate met. Eight relevant lines available; two sit inside the first 150 words
(92.1% "open when" letters; 1,434 hug taps across 138 of 214 pages).

Honest caveat required by BRIEF §6 and recorded in the audit: these twelve miss-you
lines are drawn on by 54 sibling posts, so the differentiation is thin. The least
collided lines were chosen where possible (92.1% open-when letters, 86.4% written
memories); the 1,434 hug taps and the 88-word median appear in both live siblings and
are re-used here under a different reading, not as a new number.

---

## Phase 1 — SERP measurement

**Route.** `scripts/serp-ddg.mjs` was tried **once**, query first, `--region us-en`
second. It echoed `query: how to tell someone you miss them without being needy`
correctly — so this was the known outage, not the argument-order trap — and returned
`(no results parsed)`. No retry, per the brief.

Measured instead with the **harness `WebSearch` tool**: a real, US-served index, which
matches a `us-en` row, but **not Google**. Two calls, 2026-09-28. No browser route was
used, so there was no contention exposure on either shared-browser channel.

### Ranking for the target keyword — 9 results seen

| # | Host | Page type | Research cited | Weak? |
|---|---|---|---|---|
| 1 | marriage.com | "13 Ways" advice listicle | none | no |
| 2 | medium.com (personal) | ex-partner specific post | none | **yes** |
| 3 | attracttheone.com | dating-coach blog | none | **yes** |
| 4 | liveboldandbloom.com | "37 Ways" listicle | none | no |
| 5 | hackspirit.com | "28 ways" listicle | none | no |
| 6 | breakthecycle.org | "9+ Ways" listicle, off-mission for a dating-abuse nonprofit | none | **yes** |
| 7 | happierhuman.com | "31 Ways" listicle | none | no |
| 8 | rukayya.com | "50 Creative Ways", thin personal blog | none | **yes** |
| 9 | goodreads.com author blog | off-intent | none | **yes** |

**Weak count: 5 of the 9 I actually saw.** That matches the inventory's `weak: 5`.

### Control run — the sibling keyword

`how to say i miss you without sounding desperate`, same route, same day:
facebook.com ×2, quora.com ×2, languagetool.org, adobe.com, tenderherbs.substack.com
(a comment thread), plus marriage.com and breakthecycle.org.

---

## Two framing claims from the orchestrator, overturned

**1. The pasted SERP belongs to the sibling, not to this row.** The prompt and
`WAVE4-PLAN.json` both describe the c02 weak results as
"facebook/quora/wikipedia-off-intent" plus a Substack comment thread. None of those
appear on this keyword's SERP. All of them (bar Wikipedia) appear on the **sibling**
keyword's SERP, measured above. The two SERPs overlap on only **2 of 9** results.

Consequence: this row is a **harder** SERP than the plan says. The incumbents are
established content sites with real authority, not forums. The one thing they share is
that not one of the nine cites any research at all — which is where the opening is.

**2. "Desperate" is not about concealment.** The prompt proposes that both live siblings
are about CONCEALMENT and that the attachment read is free ground. That holds for
`say-i-miss-you-without-saying-it`. It is **false** for
`how-to-say-i-miss-you-without-sounding-desperate`, which is squarely on the
clingy/needy read: its H2s are "The one variable that separates warm from clingy" and
"Six ways to say I miss you that read as warm, not needy", and it already cites
excessive reassurance-seeking (Starr & Davila) and direct-versus-indirect support-seeking
(the RoSS scale). The twin risk was higher than the prompt implied.

---

## Phase 2 — twin test and gap

Both siblings were read in full from production Strapi before a word was drafted.

| | desperate (LIVE) | without saying it (LIVE) | this post |
|---|---|---|---|
| Question asked | "How risky is showing it?" | "What can stand in for the words?" | "Who is judging, and is their estimate calibrated?" |
| Mechanism | excessive reassurance-seeking; direct vs hinting | indirect signal → perceived responsiveness | sender-recipient prediction gap; response obligation |
| Core sources | Starr & Davila; RoSS/Current Psychology; Interpersona; Floyd | PLOS One ×2; Heliyon; Arch Sexual Behavior | Psych Science; PSPB; IJERPH; Emotion |
| Shared source URLs with this post | **0** | **0** |  |

**Verdict: not a twin — proceed.** The distinction that survives testing is narrower than
the one the prompt proposed, and it is stated in the post in one sentence:

> Desperate is about how much feeling you show. Needy is about how much response you require.

The desperate sibling answers "is it risky?" with a rejection correlation and prescribes
directness. This post answers "is it as risky as you think?" with the measured gap
between what senders predict and what recipients report, then treats neediness as a
property of the message's **structure** — the reply obligation it creates — rather than
of its emotional volume. The five practical moves all reduce reply demand; none of them
is a phrasing suggestion, which is the entire content of all nine SERP incumbents.

**Angle statement:** wins by being the only page on this SERP that separates "needy" from
"desperate" as a structural variable and quantifies the sender-recipient prediction gap,
alongside 214 miss-you pages showing 92.1% carrying a zero-demand "open when" letter.

**Table stakes covered:** what counts as needy, going first, frequency, what to send
instead, voice notes, what to do when there is no reply.

**Gap none of the nine cover:** that the sender's own estimate is the biased instrument;
that concealment has a measured cost of its own; any number whatsoever.

---

## Phase 3 — sources

Caps checked with `capcheck.mjs` immediately before writing, and with the coordinator's
`journalcheck.mjs`, which resolves PMCIDs to journals — the check `capcheck.mjs`
structurally cannot do.

| Source | Journal | Journal count in batch before this post | Read |
|---|---|---|---|
| Dungan, Munguia Gomez & Epley, *Too Reluctant to Reach Out* (osf.io preprint) | Psychological Science | 0 | full text, PDF via `pdftotext` |
| Bruk, Scholl & Bless, *You and I Both* (PMC9178778) | Personality and Social Psychology Bulletin | 0 | full text, Europe PMC `fullTextXML` |
| Rice, Kumashiro & Arriaga, *Mind the Gap* (PMC7578987) | IJERPH | 2 — **this post takes the last slot** | full text, `fullTextXML` |
| Parkinson, Simons & Niven, *Sharing Concerns* (PMC4868124) | Emotion | 0 | full text, `fullTextXML` |

Zero abstract-only citations. Zero generic context statistics. Zero Wikipedia links in
the body (two entities carried as `sameAs` in `structuredData`, QIDs verified against the
Wikipedia API: Attachment theory Q909609, Self-disclosure Q2892912, Long-distance
relationship Q1406917). Zero competitor links.

**Banned journals avoided:** Frontiers in Psychology and PNAS are both hard-banned by
BRIEF §7; neither is cited. Note a discrepancy worth resolving — BRIEF §7 says Frontiers
in Psychology is "ALREADY OVER at 5 posts" while `journalcheck.mjs` on 2026-09-28 reports
it at 2 with a slot left. Not acted on here.

**Dropped deliberately:**

- *Personal Relationships* 10.1111/pere.12573, "When and how do people share? Attachment
  anxiety predicts support-seeking strategies" — the closest paper in existence to this
  thesis, listed by Unpaywall as CC-BY at the publisher, but Wiley returns **HTTP 403** to
  a scripted fetch of `/doi/pdfdirect/`. Replaced with PMC7578987. A browser route might
  recover it.
- PMC8895702 (attachment styles, reassurance seeking and trust) — clean under this
  batch's caps, but cited **twice** in the adjacent `2026-09-25-miss-you-30` batch, and
  the brief's instruction is to prefer a paper the sibling batch has not touched.
- The entire source list of both live siblings — avoided on principle, not on caps.

---

## Phases 4–7 — build notes

- 1,800 words, plain whitespace split, FAQs excluded (they live only in `article.faqs`
  and the FAQPage the renderer builds).
- 12 FAQs, none restating a body H2; FAQ 1 was rephrased after the verifier flagged a
  0.60 similarity against the H1.
- Comparison table: 5 rows, one column entirely first-party.
- Internal links counted by the verifier: `/missyou-gf` (mandatory), `/streak` (the
  `oneOfLinks` alternative, with the reason — chronic rather than acute missing needs a
  symmetrical rhythm, not a message), `/templates`.
- The two sibling cross-links are written as **relative** `/blog/…` paths on purpose:
  `verify-batch.mjs` matches internal links with `\]\((\/[a-z0-9-]+)\)`, a single path
  segment, and separately flags absolute `subhsandesh.in` links whose first segment is not
  in `TEMPLATE_LINKS` — so an absolute sibling link would be reported as
  `link not in TEMPLATE_LINKS: /blog`.
- `metaTitle` is 65 characters. Recorded as a checklist **failure**: the target keyword is
  ten words and 52 characters, so an exact match cannot sit inside the first five words of
  a 50–60 character title that must also differ from the H1.
- Slug checked against production Strapi: `total=0`, free.
- `pricecheck-intl.mjs`: clean. `verify-batch.mjs`: no findings against this slug.

## Tooling defects found

1. `references/article-json-schema.md` does not resolve from the repo root; the real path
   is `.claude/skills/blog-optimisation/references/article-json-schema.md`.
2. `scripts/serp-ddg.mjs` still down for `us-en` (one attempt, query echoed correctly).
3. Wiley `/doi/pdfdirect/` is 403 to a scripted UA even for a CC-BY published version that
   Unpaywall reports as open at the publisher.
4. BRIEF §7 and `journalcheck.mjs` disagree on the Frontiers in Psychology count (5 vs 2).
5. `capcheck.mjs` reports `BANNED URLS USED IN THIS BATCH: https://www.mdpi.com/2226-471X/11/3/36`,
   which belongs to `ich-vermisse-dich-auf-italienisch.json`, not to this row.
