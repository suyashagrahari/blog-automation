# Research brief — `propose girlfriend website`

Batch `2026-09-23-propose-30b` · slug `propose-girlfriend-website` · category `digital-gifts-romance`
Volume band: 300–1,000 EST (a band, not a measured volume).

---

## Phase 1 — SERP analysis: NOT PERFORMED, and that is recorded

**Zero WebSearch calls were spent on this post, and no competing page was fetched.**
`propose girlfriend website` is not among the 11 India-served SERPs measured on
2026-09-16 in `content/keywords/2026-09-16-propose-100/serps.md`.

Consequently this post makes **no claim whatsoever about what any ranking page
contains, what any competitor leads with, or what position anything holds today.**
Two checklist items that depend on a measured SERP are recorded in
`auditReport.failed` rather than being asserted on faith — that is the wave-2
defect class the BRIEF names, and the correct response is to fail the item.

Inherited context only, from the 2026-09-16 log, and stated as inherited:

| Measured 2026-09-16 (adjacent keywords, NOT mine) | What it showed |
|---|---|
| `online proposal website free` | SERP was read as dominated by business-document tooling — an adjacent keyword, not this one |
| `will you be my girlfriend proposal page online` | small romance-link builders at or below our authority |
| `online proposal maker free for girlfriend` | mix of small romance builders and business-document tooling |

None of those three is my keyword and none of the pages was re-fetched in this run.

### Own-site / cannibalisation surface

The live corpus (`content/keywords/strapi-live-articles.json`, 905 articles) carries
`create-interactive-proposal-website-girlfriend` — "How to Create an Interactive
Proposal Website for Your Girlfriend". The corpus file indexes only slug, title,
category and keyword; **the body is not in the repo**, so overlap with it was judged
from its title alone. This is recorded in `structuralLimitations`.

---

## Cannibalisation check — read in full before drafting

### Wave 1 · `online-proposal-maker-free-for-girlfriend`
Sorts the reader out of business-document tooling, then splits the "which question"
decision, then lists five elements of the page, then covers what "free" covers.
Sources: gift-giving psychology (JCP, HSSC, IKEA effect, EJM).
**Overlap with mine:** the /proposal-vs-/love-gf split, and the fact that a page is a link.
**Distinct:** it is about *which tool and which question*; mine is about *the delivery moment*.

### Wave 1 · `online-proposal-link`
What happens to the link **after** it is sent: expiry, deletion, forwarding, chat
preview as a spoiler, view counts, screenshots, shoulder-surfing.
Sources: SOUPS 2018 deletion + artifact ageing, Cyberpsychology CPM, CHI 2017 shoulder
surfing, Open Graph spec.
**This is the closest sibling and the real risk.** It shares a research field
(usable security) and touches the chat preview card.
**Distinct:** its clock starts the moment she opens the page and runs forward — who
else can read it, can you delete it, does a screenshot outlive it. Mine runs
*backwards* from that moment: the thirty seconds when she has the link and has not
tapped. It treats the preview card as a **spoiler** risk (keep the title neutral);
mine treats legibility as a **trust** requirement and explicitly takes the opposite
side of that trade in the final section. No source is shared.

### Wave 2 · `will-you-be-my-girlfriend-proposal-page-online`
The six content blocks that go on the page, in reading order, plus which template that
exact phrasing wants. Sources: digital-gift-exchange and virtual-gifting literature.
**Overlap:** the template split; one sentence noting the preview card "decides whether
the link is opened now or after dinner" — which is my entire post, compressed to a line
and then dropped.
**Distinct:** it is a composition guide for the artefact; mine never discusses what goes
on the page.

### Sibling in this batch · `love-proposal-website-template`
Treats "template" literally — the seven slots the template hands back to the sender.
Mass-customisation / IKEA-effect sources. No overlap with link trust; no shared source.

**Verdict: distinct, and the distinction is structural rather than cosmetic.** My post
contains no "what to put on the page" list, no expiry/deletion material, and no
composition advice. Residual overlap is confined to three places and is named in
`honestAssessment`: the definition H2, the mandatory /proposal-vs-/love-gf section, and
two lines of the downside block. On those specific queries this page should lose to the
siblings, and it is not trying to win them.

---

## Phase 2 — Gap and angle

**The gap.** Every page in this cluster, ours and everyone else's, begins after the
link has been opened. In practice the sender is asking someone to tap an unfamiliar URL
on a phone — the single behaviour a decade of security messaging has trained people out
of. Nobody in the cluster writes about **link trust**, and it gates everything else.

**Fan-out sub-queries this post answers** (derived from the siblings and the research
lane, **not** from a measured People Also Ask block — hence the failed audit item):
will she open it · is it safe to send a link like this · should I shorten it · what do I
say with the link · should I send it at midnight · does a password make it look like a
scam · which template does "propose" actually mean in India.

**Angle.** Wins by being the only post in this cluster about whether the link gets
opened at all — the trust decision in the chat window before the page loads — using
URL-reading and phishing-cue research alongside SubhSandesh's platform-wide
38.7% password-protection and 91.2% publish-and-share rates.

**Ethical constraint applied throughout.** Every recommendation is about making the link
*legible* — known sender, plain words, full URL, readable domain, password announced.
Nothing here helps anyone disguise a link or hide what a page is. The one place where
legibility costs something (it tells her a surprise is coming) is named and the trade is
taken openly in the final section.

---

## Phase 3 — Sources

All five were located via `findpapers.mjs` and Crossref, and all five were downloaded
and read in full from open author or conference copies. `capcheck.mjs` was run before
choosing sources and again immediately before saving; none of these four domains
appears in the 194 banned wave-1/2 URLs, in the at-cap list, or in the one-slot-left
list. Europe PMC / PMC was at the 3-post cap and was therefore avoided entirely.

| Source | Venue / date | What it supplies | Subject test | Swap test |
|---|---|---|---|---|
| Albakry, Vaniea, Wolters — *What is this URL's Destination?* | CHI 2020, 21 Apr 2020 | n=1,929, 23 URLs; 32.9% always pick the named organisation regardless of position; only 8.3% distinguish subdomain from domain; short URLs judged more cautiously | Pass — about reading links | Pass — unusable in any other post here |
| Alsharnouby, Alaca, Chiasson — *Why phishing still works* | IJHCS 82, Oct 2015 | Eye-tracking; 53% detection even when primed; little gaze on security indicators; proficiency uncorrelated | Pass | Pass |
| Dhamija, Tygar, Hearst — *Why Phishing Works* | CHI 2006, 22 Apr 2006 | n=22, 20 sites; 23% ignored browser cues, wrong 40% of the time | Pass | Pass |
| Downs, Holbrook, Cranor — *Decision Strategies and Susceptibility to Phishing* | SOUPS 2006, 12 Jul 2006 | n=20 interviews; "this email appears to be for me" as a real strategy; 55% had noticed an unexpected URL; 80% noticed broken images and blamed their own computer | Pass | Pass |
| Pilavakis, Jenkins, Kökciyan, Vaniea — *"I didn't click"* | USEC 2023 (year only) | 270 real help-desk tickets over nine months; 57.0% carried reasoning beyond the bare report, commonly "inconsistent with expectations" | Pass | Pass |

Generic context statistics used: **zero**. Wikipedia body links: **zero** (entities appear
only in `sameAs`, verified against the Wikipedia API with Wikidata QIDs paired:
Phishing Q135005, URL Q42253, URL shortening Q637342, WhatsApp Q1049511).

### What could not be sourced, and the terms tried

No study was found that measures whether a **personalised romantic link** gets opened.
Every figure above comes from email/web phishing research, and the transfer to this
setting is an inference — stated as an inference in the body, and recorded in
`structuralLimitations`.

Terms tried: `findpapers.mjs` on `phishing susceptibility link trust study` and
`URL trust judgement user study`; Crossref on `shortened URL trust users perception`,
`unsolicited message suspicion sender familiarity click`,
`WhatsApp link sharing trust India study`, and
`Unpacking Spear Phishing Susceptibility Benenson`.

Benenson et al., *Unpacking Spear Phishing Susceptibility* (LNCS 2017) is the single
most on-point paper for this angle — a 1,200-student field experiment in which reasons
given for **not** clicking included the message not appearing to be meant for the
recipient — but OpenAlex reports no open-access copy at any location, and
`link.springer.com` had one slot left besides. **Not cited, because it was not read.**

---

## Phase 0 — first-party facts used

Copied verbatim from `content/facts.md` (regenerated 2026-09-23). The #1 template is now
`/apology-dashboard` at 1,347 pages / 26.6%; the wave-1/2 claim that `/love-gf` is #1 is
out of date and is **not** repeated here — `/love-gf` is described as #2 by pages created
and #1 by views, which is what today's file says.

Two first-party numbers sit inside the first 150 words (91.2% publish-and-share, 38.7%
password-protection), alongside 5,061 pages / 20 page types. Every figure is labelled
platform-wide **in body prose**, not only in the audit. No proposal-attributed figure
appears anywhere. No price, tier or cost claim appears anywhere.

---

## Phase 5 — links

- `/proposal` — mandatory, placed in the template section after the trust case is made.
- `/love-gf` — the genuine alternative: in Indian usage "propose" usually means asking
  someone to be your girlfriend, so the marry-me scrapbook is wrong for much of this
  traffic. The post says which reader needs which.
- `/templates` — a third real `TEMPLATE_LINKS` URL for readers neither one fits.
- `batchMeta.templateUrls`: `["/proposal", "/love-gf"]`, relative paths.

Competitors named in the BRIEF were not fetched, cited, linked, paraphrased or mirrored.
The page is romantic from the title and the first sentence and never mentions business
proposals, even to distinguish them.

---

## Phase 6 — audit summary

50 items, `passed` = 48, `failed` = 2, disjoint, byte-verbatim, sum 50.
Both failures are the same root cause: **no SERP was measured for this keyword in this
run.** Neither is fixable without spending search budget, and neither was papered over.
Six structural limitations are recorded in `batchMeta.structuralLimitations`, including
the absent proposal-specific data, the empty pricing block, the unmeasured SERP, the
unreadable live sibling article, the phishing-to-romance inference, and the
unobtainable Benenson paper.
