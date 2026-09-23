# Research brief — `online-proposal-for-girlfriend`

- **Keyword:** `online proposal for girlfriend` (band 300–1,000 EST; never printed in the post as a real volume)
- **Batch:** `2026-09-23-propose-30b` (wave 3)
- **Category:** `digital-gifts-romance`
- **Written:** 2026-09-23

---

## Phase 1 — SERP, and what was actually measured

**One result set was observed, and it was not a proper SERP measurement.** A single
`WebSearch` for the exact phrase on 2026-09-23 returned a US-served list of ten results:
a proposal-planning company's blog post, a Medium first-person build story, a TikTok
discovery page, a Quora thread, a Netlify-hosted hobby page, two named competitors from
the batch ban list, an Adobe Stock image page and a Blind thread.

What that supports: the query is **intent-split** between people wanting a tool, people
wanting a story to copy, and people wanting advice. What it does **not** support, and what
this post therefore never claims:

- No page was fetched. Nothing here describes what any competitor says, sells, prices or
  year-stamps.
- The result set was US-served, so it is not the India-served SERP this keyword would show.
- The 11 India-served SERPs measured on 2026-09-16
  (`content/keywords/2026-09-16-propose-100/serps.md`) do not include this exact keyword.
  Phase 1 for this post is therefore **inherited and partial**, and that is recorded in
  `batchMeta.structuralLimitations`.

## Phase 2 — cannibalisation check, read in full before drafting

Three siblings were read end to end.

| Sibling | Its job | Its organising idea |
|---|---|---|
| `2026-09-17-propose-12/online-proposal-maker-free-for-girlfriend` | the **tool** | sorts the searcher out of business-proposal software, then "five things to put on the page" |
| `2026-09-17-propose-12/how-to-propose-online` | the **method hub** | routes by which ask: marriage / girlfriend / date / after a fight / long distance |
| `2026-09-17-propose-30/will-you-be-my-girlfriend-proposal-page-online` | the **artefact, recipient's-eye** | six blocks in order, the chat preview card, the after-yes screen, who else can open the URL |

"For girlfriend" is not a differentiator: two of the three already assume a girlfriend.
A fourth page that lists what goes on a proposal page would be a duplicate of the third
and should not be written.

**The distinction taken instead: reading conditions, not page contents.** None of the three
says anything about *how* the page is read — that it lands on a phone, in a room the sender
cannot see, with interruptions arriving. This post is subtractive where the siblings are
additive: it converts the phone into a word budget, a first-screen rule, an
interruption rule and a password-cost rule, each with a named study behind it.

**Deliberate non-overlap, enforced during drafting:**

- no block-by-block list of what goes on the page (sibling 3 owns it);
- no chat-preview-card or after-yes section (sibling 3 owns them);
- no "which of five asks are you making" routing section (sibling 2 owns it) — the routing
  survives only as one comparison table that exists to discharge the batch's mandatory
  alternative-template rule;
- no "what free covers" / product-explainer framing (sibling 1 owns it, and pricing claims
  are banned batch-wide anyway).

**Residual overlap, stated honestly:** sibling 3 has a section called "The opening line" and
one on what the link looks like in her chat. Both touch the first screen. The difference is
that sibling 3 tells you what to *write* there and this post tells you what the screen can
*hold* and why, from measured reading speeds. That is a real distinction but not a wide one,
and it is the single strongest cannibalisation risk on this page.

**Fan-out sub-queries this post answers** (each maps to an H2 or an FAQ): what is an online
proposal page; does she read it on her phone; how long should it be; what should be visible
first; what happens if she is interrupted; should it be password-protected; marry-me or
be-my-girlfriend; when is a link the wrong way to ask; when is Propose Day 2027.

## Phase 3 — sources

Lane: **reading and attention on mobile screens.** Queried through `findpapers.mjs`
(`mobile reading comprehension screen study`, `web page first impression 50 milliseconds
visual appeal`, `interruption resumption task switching cost study`, `scrolling versus paging
small screen reading`) and the DOAJ article API. Four sources kept.

| Source | Read | Used for |
|---|---|---|
| Öquist, *Evaluating Readability on Mobile Devices*, Uppsala 2006 (diva-portal.org) | full text (PDF) | paging 217.7 WPM vs scrolling 178.1 WPM on a mobile phone, n=16, comprehension not significantly different; ~150 vs ~50 interactions to finish a text |
| Sharmin, Špakov & Räihä, *Journal of Eye Movement Research* 5(3):3, 2012 (bop.unibe.ch, CC BY) | full text (PDF) | presentation format significantly changes fixation duration (F3,60 = 22.102, p < .001) while measured reading speeds stay between 128 and 156 WPM |
| Mark, Gudith & Klocke, "The Cost of Interrupted Work", CHI 2008 (ics.uci.edu) | full text (PDF) | 48 participants interrupted every two minutes finished faster but reported significantly more stress, frustration, time pressure and effort |
| Hamel, *An Adaptive User Interface for Walking While Reading on a Mobile Device*, Carleton University 2017 (carleton.scholaris.ca) | full text (PDF via the DSpace API) | 30 participants scored 34.7% on a GRE comprehension test reading on a phone while walking a course with pedestrian traffic, against 51.7% seated, F(1,27) = 5.19, p = 0.031, d = 0.59 |

**One late swap, for a cap reason rather than an editorial one.** The fourth source was
originally the 2025 *Behavioral Sciences* eye-tracking study of mobile reading environments
(mdpi.com). `verify-batch.mjs` then reported MDPI at **four posts** once DOIs resolve — over
the three-post publisher cap — so it was dropped and replaced with the Carleton thesis, which
is a cleaner domain, was read in full, and carries a harder number for the same claim.

Rejected on purpose: Lindgaard et al. 2006 "50 milliseconds" (no open copy — tandfonline 403,
and the mirrors are ResearchGate/Academia), Yeykelis et al. 2014 (Wiley/OUP paywall), PeerJ
6516 (Cloudflare 403). Europe PMC / PMC was avoided because the publisher is at the 3-post
cap for this batch; `frontiersin.org`, `nature.com`, `link.springer.com` and
`journals.plos.org` were avoided for the same reason.

Cap position after the swap, re-checked with both `capcheck.mjs` and `verify-batch.mjs`:
diva-portal.org, bop.unibe.ch, ics.uci.edu and carleton.scholaris.ca — four distinct domains,
none at the three-post cap (bop.unibe.ch sits at 2 of 3, shared with one sibling), none
otherwise used in this batch,
none on the banned waves-1–2 URL list. `capcheck.mjs` was run when choosing sources and again
immediately before saving the JSON.

## Phase 0 — facts used

Copied verbatim from `content/facts.md` (regenerated 2026-09-23). Every figure is labelled in
body prose as platform-wide across 20 page types, or as sampled on the named template. No
figure is attributed to proposal pages, because no proposal-specific read exists: the
`proposalpages` probe is refused by this machine's production-read policy.

## Angle

Wins by being the only post in this cluster written for the conditions the page is read in
rather than its contents — a phone, one-handed, interrupted — converting the platform-wide
48.4% phone-view share and two measured reading studies into a word budget, a first-screen
rule and an interruption rule no sibling states.
