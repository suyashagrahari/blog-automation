# Research brief — `proposal website for crush`

- Slug: `proposal-website-for-crush` (checked free: Strapi `filters[slug][$eq]` returned `total: 0` on 2026-09-17)
- Category: `digital-gifts-romance` (tool / page / link post, not advice)
- Templates: `/date-invitation` (the genuine alternative, recommended over `/proposal`), `/proposal` (mandatory), `/love-gf`
- Volume: estimate band only, no tool data. Not printed anywhere in the post.

---

## Phase 1 — SERP analysis (INHERITED, not freshly measured)

WebSearch is exhausted for this session at 200/200, so no live SERP, AI Overview or
People Also Ask pass was run for this keyword. The competitor picture below is taken
from `content/keywords/2026-09-16-propose-100/serps.md` and `competitor-map.md`,
measured 2026-09-16 on India-served SERPs, and chiefly from the nearest measured
phrase, **`will you be my girlfriend website proposal`**. No position described here
is current, and none is described as current in the post.

| # | Domain (adjacent SERP, 2026-09-16) | Type | Note |
|---|---|---|---|
| 1 | bemyval.co | proposal-site maker | at/below our authority |
| 2 | yourlovepage.online/proposal-website | proposal-site maker | same operator as #5 |
| 3 | tiktok.com discover page | social | thin |
| 4 | pixeryhub.com/propose | propose-link generator | small |
| 6 | ai.mobirise.com | AI-generated template page | thin |
| 8 | momentocard.in/proposal | Indian proposal-card maker | small |

Two operators hold four of the ten slots. The SERP was scored **weak 8/10** — the
strongest opening measured in that run.

**None of these was fetched, cited, linked or paraphrased in this session.** Also
banned and untouched: bondlyfe.com, giftsqr.com, mewtrucard.com.

What the inherited notes say they optimise for: the transaction. Every one of them
sells the page the searcher asked for, leads on cost positioning, and answers "how do
I build it" rather than "should I". None of them segments by whether the recipient has
given any signal.

## Phase 2 — Gap analysis

**Table stakes** (assumed from the inherited map, not re-read): what a proposal page
is, that no coding is required, that it is shared as a link, that it works on a phone,
a gallery of styles, a build walkthrough.

**The gap.** Every incumbent treats "crush" and "girlfriend" as the same buyer. Nobody
distinguishes the case where the recipient has given no signal, and nobody tells a
reader that the right artefact might be smaller than the one they searched for — or
that it might be no artefact at all. Nobody addresses the anonymity temptation, which
is the single most common bad instinct in this situation.

**Live-corpus constraint.** `how-to-code-a-moving-button-proposal-website-for-crush`
is already live and is a **code tutorial**. This post is deliberately the opposite: the
ready-made route, with one sentence stating that nothing is installed and no code is
written, and no build steps anywhere.

**Sibling constraint.** `propose-message-for-crush` owns what to *type*. This post
gives no lines to send and no message templates; it is about the artefact and its size.

**Fan-out sub-queries → H2s** (inferred, not observed):

| Sub-query | H2 |
|---|---|
| what is a proposal website | What a proposal website is, and what it changes |
| should I send one to a crush / which one | Match the page to the signal you actually have |
| what does each option cost me | What each route actually costs you |
| can I send it anonymously | Why an unsigned or disguised link backfires |
| should I password-protect it | What the password prompt is actually doing |
| how much should I write | The part where you overshoot |
| when is this a bad idea / what if they say no | When a proposal website is the wrong choice |

**Angle.** Wins by being the only post that tells a crush-sender the proposal page is
the wrong size of ask and routes them to a date-invitation page instead, grounding the
restraint in privacy-calculus research and SubhSandesh's platform-wide 39.9%
password-protection rate across 4,567 pages.

## Phase 3 — Sources

Research lane: **self-disclosure risk and privacy calculus online — what people weigh
before revealing something personal.** Discovery via
`findpapers.mjs` (Crossref + Europe PMC) plus the DOAJ article API and Unpaywall;
`curl`/WebSearch not used for discovery.

Search terms tried: `privacy calculus self-disclosure online study`,
`online self-disclosure risk benefit research`, `anonymity disclosure behaviour study`,
`impression management online disclosure research`, plus DOAJ field queries on
`"privacy calculus" AND "self-disclosure"`, `anonymity AND self-disclosure`,
`identifiability AND disclosure`, `imagined audience social media disclosure`.

**Cap position.** `capcheck.mjs` was run before and after selection.
`pmc.ncbi.nlm.nih.gov` is at the 3-post cap and `europepmc.org` counts with it, which
rules out most of the Europe PMC hits; `frontiersin.org`, `journals.plos.org`,
`arxiv.org`, `aclanthology.org` and (as of the final verifier run)
`journals.sagepub.com` are also at cap. All five sources below sit on domains with no
other post in this batch, and none of the five URLs appears in the wave-1 banned list.
The Yik Yak paper is deliberately cited at its **West Virginia University repository**
copy rather than at its SAGE DOI, because `journals.sagepub.com` reached cap during
this batch.

| Source | Domain | What it says | Subject test | Peer-reviewed / OA |
|---|---|---|---|---|
| Kezer, Dienlin & Baruh (2022), *Cyberpsychology* 16(4) — [Getting the privacy calculus right](https://cyberpsychology.eu/article/view/15411) | cyberpsychology.eu | Three datasets, N1=344 / N2=561 / N3=1,131 (2,036 total). People self-disclose more when gratifications exceed concerns, and more still when risk and benefit perceptions are both high. | pass | yes / yes |
| Ostendorf, Meier & Brand (2022), *Cyberpsychology* 16(4) — [Self-disclosure on social networks](https://cyberpsychology.eu/article/view/15367) | cyberpsychology.eu | N=551 on a purpose-built network "AHOY!". Two decision stages; the reflective system may dominate *whether* to post, an impulsive system appears predominant in *how much* to disclose. | pass | yes / yes |
| Meier, Schäwel & Krämer (2021), *Studies in Communication, Media* 10(3) — [Between protection and disclosure](https://www.nomos-elibrary.de/10.5771/2192-4007-2021-3-283) | nomos-elibrary.de | Online experiment, N=511. Perceived privacy risk strongly related to desired protection, which predicted willingness to use a privacy-protecting tool; self-disclosure was context dependent, protection was not. | pass | yes / yes |
| Clark-Gordon, Workman & Linvill (2017), *Social Media + Society* 3(2) — [College Students and Yik Yak](https://researchrepository.wvu.edu/faculty_publications/1723) | researchrepository.wvu.edu | 12 in-depth interviews plus a content analysis of 3,905 posts from 24 colleges on a pseudo-anonymous platform; the authors describe the phenomena as complex. | pass | yes / yes (CC BY) |
| Trifiro & Goyanes (2025), *International Journal of Communication* 19 — [Revealing the True Self Online](https://ijoc.org/index.php/ijoc/article/view/22785) | ijoc.org | Panel survey, N=570 in Spain. Negative relationship between lurking and self-disclosure; exposure to positivity bias raises disclosure. | pass | yes / yes |

Generic context statistics used: **zero**. Wikipedia body links: **zero** (Wikipedia
appears only as verified `sameAs` targets in `structuredData`, which does not count
against the body budget).

**Swap test.** None of the five would sit unchanged in another post in this batch. The
other 24 posts are about what to say, when to say it, and in which language; these five
are about the calculus of revealing something and of locking it, which is this post's
subject and no other's.

**Reading disclosure.** All five are open access; none is paywalled. Four were verified
from their abstracts rather than full texts. `cyberpsychology.eu` served both abstracts
in full on the article page, `ijoc.org` served its abstract on the article page, the
WVU repository served the Yik Yak abstract on its landing page, and
`nomos-elibrary.de` returned HTTP 200 but serves its abstract through a JavaScript PDF
viewer — so that abstract was read from the article's DOAJ record. No claim in the body
goes beyond what those abstracts state.

**Rejected candidates and why:** Dienlin & Metzger (2016), *JCMC* — the only OA copy is
an academic.oup.com PDF that returns a challenge page from this machine, so it could not
be read; the Frontiers and PMC hits from `findpapers.mjs` — both domains at the 3-post
cap; the *Social Media + Society* imagined-audience paper and the Hindawi/Wiley
privacy-calculus paper — SAGE and Wiley both returned challenge pages, and SAGE later
reached cap; IJSR/IJRASET-class Crossref hits — pay-to-publish, indexing is not review.

## Phase 0 — first-party facts used

Seven lines from `content/facts.md` (2026-09-17). Two land inside the first 150 words:
the 39.9% password-protection rate and the 92.7% publish-and-share rate, both labelled
**platform-wide** in body prose. The 6.4-hour median editing gap is labelled in body
prose as **sampled on /love-gf, n=1,138**, both in the comparison table and in the
sentence under it.

**No number anywhere in the post is attributed to proposal pages.** There is no
proposal-specific data: the read-only probe of the `proposalpages` collection was
refused by this machine's production-read policy in wave 1 and again here.

## What the post refuses to do

- No price, no free tier, no paid tier, no currency figure — the pricing block in
  `facts.md` is empty, and every competitor on this SERP leads on cost. The post
  sidesteps the claim rather than hedging it.
- No coaching of persistence after a refusal. The closing paragraph says a second,
  bigger page is pressure rather than persistence.
- No advice to send anonymously or behind a disguised link, and a full H2 explaining
  why that instinct backfires.
- No code, no build tutorial, no steps.
- No claim that the post will rank.
