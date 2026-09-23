# Research brief — `propose message for her`

Batch `2026-09-23-propose-30b` (wave 3). Slug `propose-message-for-her`.
Category `modern-romance`. Volume band 300–1,000 EST (estimate, never printed as a
real volume in the post).

---

## Phase 0 — first-party data gate

`content/facts.md`, regenerated 2026-09-23. Facts used, verbatim:

- `5,061 personalised pages created since 2026-03-12, across 20 page types — measured 2026-09-23`
- `Median gap between a page's first save and its last edit: 2.4 hours — sampled on apology dashboard (/apology-dashboard), n=1,348 — measured 2026-09-23`
- `91.2% of started pages are actually published and shared (4,615 of 5,061) — measured 2026-09-23`
- `#2 page type: "I love you" page (/love-gf) — 1,173 created, 23.2% of all pages — measured 2026-09-23`
- `#1 page type: apology dashboard (/apology-dashboard) — 1,347 created, 26.6% of all pages — measured 2026-09-23`
- `48.4% of shared pages are opened on a phone (27,185 of 56,152 views) — measured 2026-09-23`
- `38.7% of creators password-protect their page before sharing it (1,961 of 5,061) — measured 2026-09-23`
- `Most-viewed template: love-gf — 16,902 views, 30.1% of all page views — measured 2026-09-23`

Gate passes: three facts in the first 150 words (5,061 / 20 page types, the
2.4-hour median with its sample label, 91.2% published).

**Honesty constraint applied throughout.** There is no proposal-specific data. The
2.4-hour figure is labelled in body prose as sampled on `/apology-dashboard`,
n=1,348, reported platform-wide — never attributed to proposal pages. No price,
free-tier or paid-tier claim appears anywhere in the post; `content/facts.md` has
an empty pricing block.

---

## Phase 1 — SERP (measured, with a disclosure)

One WebSearch call on the exact keyword, run 2026-09-23. **The search tool is
US-served, not India-served**, so this is not the SERP an Indian reader sees, and
nothing in the post describes a ranking position as current.

Nine organic results were returned. Grouped by what they are:

| Type | Results | What the page is optimising for |
|---|---|---|
| Copy-text roundups ("150+", "200+", "romantic propose messages") | 4 | Volume of lines to copy; no method |
| Pinterest idea boards | 2 | Image discovery, not text |
| Gift / jewellery retailer blogs | 2 | Product pages behind a quote list |
| Wikipedia (a 2009 film titled *The Proposal*) | 1 | Entity mismatch — the query is ambiguous |

**Table stakes:** define what a propose message is; give example messages; cover the
"will you be my girlfriend" versus "will you marry me" distinction; mention Propose
Day.

**The gap, and it is a wide one:** every non-Pinterest result on that page is a list
of finished lines. Not one of them describes *how to write your own* — no drafting
sequence, no advice on what to cut, no guidance on how long to leave a draft, no
stop rule. The searcher who wants to write rather than copy is unserved.

**Stale data:** none of the results carried a dated statistic at all, so there is
nothing to supersede — which is itself the opening. A page with any measured number
on it is unusual in this cluster.

**Fan-out sub-queries** → H2s / FAQs: what is a propose message for her; does
"propose" mean marriage in India; how long should it be; how many times should I
edit it; in person or by message; what to cut; when not to send a page at all.

No competitor is cited, linked, paraphrased or mirrored. The post's organisation
(a drafting sequence) is not a structure any of the nine results uses.

---

## Phase 2 — angle

> Wins by being the only "propose message for her" page that treats the message as
> something the reader is **writing** rather than copying — a six-move drafting
> sequence with an explicit stop rule — grounded in revision and incubation research
> and in SubhSandesh's own 2.4-hour median first-save-to-last-edit gap, sampled on
> `/apology-dashboard` (n=1,348) and reported platform-wide across 20 page types.

### Cannibalisation check — read before drafting

| Sibling | Its axis | Why this page does not collide |
|---|---|---|
| `2026-09-17-propose-30/blogs/propose-message-for-girlfriend-in-english.json` | **Register**: when English fits an Indian couple and when it reads as distant. Indian-English sociolinguistics, address forms, corpus research. | This page never discusses language choice or register. It assumes the language is already settled and works on the draft's structure and timing. Zero sociolinguistic sources. |
| `2026-09-17-propose-30/blogs/propose-message-for-crush.json` | **Whether to send at all.** Unrequited-love literature, the recipient's burden of refusal, BNS s.78. | This page assumes the reader has decided to send and asks a different question: how do you get the draft right. The crush case is routed out by slug, not re-covered. |
| `2026-09-23-propose-30b/blogs/propose-day-quotes-for-love.json` | **Address terms.** 16 copy-ready lines grouped by what you call the person. | This page has no ranked quote list and no address-term axis. Its example drafts are shown as *versions of one message* — before and after a cut, a restructure and a read-aloud — so they are process artefacts, not copy-text. |

"For her" is resolved the same way "for love" is resolved by its sibling — by saying
the recipient is undefined and routing out — but along a different axis (what the
reader is trying to *do*, not what they call her).

---

## Phase 3 — sources

Lane: **writing revision and self-editing — what happens between a first draft and a
sent message.** Two strands: revision research (novices edit surface features;
restructuring is the move that matters) and incubation (a break measurably changes
the later draft).

Search route: `findpapers.mjs` on `revision process writing study`,
`self editing draft quality writers revision strategies`,
`incubation effect creative problem solving study`,
`delay incubation period improves writing revision`,
`message editing before sending text message study`,
`journal of writing research revision process novice expert`; then DOAJ and Crossref
API queries from the sandbox. One WebSearch call total, spent on Phase 1.

| # | Source | What it actually says | Tests |
|---|---|---|---|
| 1 | Das & Kramer, *Self-Censorship on Facebook*, ICWSM 7(1), 2013 — `ojs.aaai.org/index.php/ICWSM/article/view/14412` | 3.9M users over 17 days; **71% showed last-minute self-censorship** — content filtered after being written. | Subject ✓ (text written then not sent). Swap ✗ — useless in a quotes or language post. Peer-reviewed conference, open. |
| 2 | Valueva & Ushakov, *Creative Abilities and Incubation: The Poincaré Effect*, Experimental Psychology (Russia) 17(4), 2024 — `psyjournals.ru/en/journals/exppsy/archive/2024_n4/Valueva_Ushakov` | **N=525**, control vs incubation-break group, Alternate Uses task. The break significantly raised fluency; originality rose for high-creativity participants. | Subject ✓ (the break). Peer-reviewed, open access. **English abstract read; full PDF is in Russian and was not read.** |
| 3 | Kuliev, *Incubation Processes in Solving Problems*, Journal of Modern Foreign Psychology 13(4), 2024 — `psyjournals.ru/en/journals/jmfp/archive/2024_n4/Kuliev` | Review: research lacks standardisation in how incubation is defined and how the **duration** of the incubation period is interpreted. | Subject ✓. Used specifically to stop the post prescribing an exact break length. **English abstract only; PDF is Russian.** |
| 4 | Alizadeh Salteh, Yağız, Hamdami & Sadeghi, *Editing or revision: An examination of EFL teachers' feedback on writing drafts*, Teaching English Language 7(2), 2013 — `teljournal.org/article_54860.html` | 4 teachers' comments on 32 student writers' drafts. **~97% of comments pointed at low-level features** (punctuation, spelling, grammar); teachers rarely asked students to look past the surface, and students came to equate revision with tidying up. | Subject ✓ (revision vs editing). Peer-reviewed, DOAJ-listed, open. |
| 5 | Epting, Gallena, Hicks, Palmer & Weisberg, *Read and think before you write*, Journal of Writing Research 4(3), 2013 — `jowr.org/index.php/jowr/article/view/699` | 66 students, keystroke-logged; 10 s vs 70 s of prewriting time per prompt. Short prewriting time **increased prompt reviewing and lengthened average pauses**; high print-exposure students wrote longer, higher-quality essays. | Subject ✓ (self-editing, measured). Peer-reviewed, open access (CC BY-NC-ND — cited and linked, nothing reproduced). |

Generic context statistics: **zero**. Wikipedia body links: **zero**.
Domains: four distinct (`ojs.aaai.org`, `psyjournals.ru` ×2, `teljournal.org`,
`jowr.org`). `capcheck.mjs` run when choosing and again immediately before saving:
none of the four appears in this batch, none is in the 194 banned wave-1/2 URLs, and
none of the capped publishers (`pmc.ncbi.nlm.nih.gov` / `europepmc.org`,
`journals.plos.org`, `archive.org`, `dsal.uchicago.edu`) or the near-cap ones
(`frontiersin.org`, `nature.com`, `mdpi.com`, `link.springer.com`) is used.

Rejected for cap or access reasons: Sio & Ormerod's 2009 incubation meta-analysis
(no readable open copy found — the CORE mirror 404s, so it is not cited), the MDPI
*Brain Sciences* mind-wandering study (403 from the publisher, and `mdpi.com` reached
2 posts mid-run), the Frontiers incubation-break study (`frontiersin.org` at 2), and
every Europe PMC hit (publisher already at cap).

---

## Phase 4–5 — build notes

- Body target 1,500–1,800 words excluding FAQs, plain whitespace split.
- 11 FAQs in `article.faqs` and the FAQPage JSON-LD only; none byte-identical to a
  body H2.
- Internal links, all from `TEMPLATE_LINKS`, all relative, all after value is
  established: `/proposal` (mandatory), `/love-gf` (the honest alternative — in
  Indian usage "propose" usually means asking someone to be your girlfriend),
  `/apology-dashboard` (asking again after a no or after a fight, and the template
  the 2.4-hour sample comes from).
- Sibling routing is done by naming slugs in prose, not by hyperlink, so the
  "every internal link is from TEMPLATE_LINKS" rule stays true.
- Dates verified with `date`: Rose Day Sunday 7 February 2027, Propose Day **Monday
  8 February 2027**, Valentine's Day Sunday 14 February 2027 — eight dated days.
- Slug checked against Strapi 2026-09-23: `total: 0`, free.
- Seven original example messages / message fragments. No competitor copy, no
  lyrics, no film dialogue.
