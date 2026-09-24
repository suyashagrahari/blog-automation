# Research brief — `propose without saying i love you`

- **Slug:** `how-to-propose-without-saying-i-love-you` (checked free in Strapi 2026-09-24: `filters[slug][$eq]` returned `total: 0`)
- **Batch:** `2026-09-24-propose-30c` (wave 4)
- **Category:** `modern-romance`
- **Secondaries on the same page:** `propose a girl without saying i love you`, `how to propose girl without saying i love you`
- **Demand:** 2 prefixes, ordinal only. `prefix_hits` is not printed anywhere on the page.

---

## Phase 0 — first-party gate

Seven lines copied verbatim from `content/facts.md` (regenerated 2026-09-24) into
`batchMeta.factsUsed`. Three used in the first 150 words of the body; two of those are
first-party numbers, as required.

Honesty handling, enforced in body prose and not only here:

- **No proposal-specific data exists.** The `proposalpages` probe is still refused. Every
  figure in the body is labelled *platform-wide across 21 page types* or *sampled on the
  named template*. The opening paragraph says outright that the figures are "not measured
  on proposals specifically".
- **No price, free tier or paid tier.** The pricing block in `facts.md` is empty for a
  fourth batch. The word "free" appears nowhere; an earlier draft line ("whichever day
  you're free") was rewritten to "whichever day you're around" to stay well clear of the
  verifier's string checks.
- The table's fourth column uses the #5 template share (8.9%) as a ceiling for
  `/date-invitation` and `/proposal`, which are outside the top five. That is a real
  first-party bound, not an estimate.

---

## Phase 1 — SERP (thin, and declared as thin)

Budget: **4 WebSearch calls for the whole post.** Three went to source discovery, one to
the SERP. **No competing page was fetched**, so nothing below describes page contents —
only the result list actually returned.

One search on the exact keyword, 2026-09-24. The returned result list was dominated by
**user-generated Q&A threads and short-video platform pages**, plus one US
proposal-planning blog (a competitor under `competitors.md`: it sells the same job).
The answer text surfaced with those results consistently read the query as
*"propose without speaking at all"* — gestures, silent videos, letting the eyes do it.

That is a different question from the one the keyword asks, and it is the gap. **Nothing
in this post asserts what any ranking page contains, and no position is described as
current.** None of this batch's keywords is among the 11 India-served SERPs measured on
2026-09-16 (`content/keywords/2026-09-16-propose-100/`).

---

## Phase 2 — gap and angle

**The keyword is odd until you see who is typing it.** Three readers, three different
answers, and the page is built on that split:

1. **"I love you" is too big for where we are.** They want to say *I like you, let's be
   together*; the phrase would overshoot and frighten. Commonest case; served first.
2. **They cannot say it out loud** — reticence, or a family where the phrase is not used.
3. **They mean it, but the phrase feels worn out** and they want it to land.

**Table stakes:** what to say instead; whether leaving it out is acceptable; how to do it
over text; whether a gesture is enough.

**The gap:** nobody separates the three readers, and nobody prints the *failure mode* of
each alternative line. The visible answers treat the query as a request for a stunt.

**Angle (one sentence):** wins by being the only post that reads this as a **wording
problem with three distinct readers**, shows with observational research that a smaller,
more specific sentence outperforms the formula, and refuses to coach ambiguity.

**Fan-out sub-queries → H2s:** what does it mean (H2 2) · why would someone avoid it
(H2 3) · what do I say instead (H2 4, six H3s) · where do I send it (H2 5) · is avoiding
it dishonest (H2 6) · when is a page wrong (H2 7).

---

## Cannibalisation — how this differs from both named siblings

| | Wave 2 `how-to-propose-to-a-new-girlfriend` | Wave 3 `propose-message-for-her` | **This post** |
|---|---|---|---|
| Question | *Which* escalation do I owe her, and when | *How* do I draft the message | *What sentence* replaces one specific phrase |
| Unit of work | Choosing among four asks | A six-move drafting sequence with a stop rule | Six finished sentences, each with its failure mode |
| Research lane | Escalation / DTR (Solomon, Clifford, Harrison & Shortall) — **banned to me, and unused** | Revision and incubation — **unused** | Showing vs telling: behavioural expressions against verbal declarations |
| Reader state | Already together, unsure of the next step | Knows what to say, cannot write it | Knows what they mean, cannot use *that word* |
| Template argument | Argues against `/proposal` on escalation grounds | Argues for drafting before sending | Argues `/love-gf` is the wrong *frame*, not the wrong size |

Both are cross-linked by slug in a single prose sentence, as the brief requires. Neither
sibling's sources appear here; none of their five URLs is cited, and the DTR lane is not
touched anywhere in the body.

---

## Phase 3 — sources

Lane: **showing versus telling — behavioural expressions of commitment against verbal
declarations.** `findpapers.mjs` queries run (Crossref + Europe PMC): `relationship
maintenance behaviours commitment study`, `enacted support versus perceived support
romantic partner`, `behavioural expressions of love study`, `affectionate communication
verbal nonverbal supportive study`, `invisible support romantic partner daily diary`,
`perceived partner responsiveness understanding validation caring`, `relational
maintenance behaviours assurances openness romantic`, `specific versus general
compliments partner appreciation experiment`, `expressing appreciation daily romantic
relationship experiment open access`, `declaration of love saying i love you meaning
communication`, `expression of affection India young adults romantic communication`,
`indirect expression of affection collectivist culture romantic partners`,
`affectionate communication relationship satisfaction Interpersona`, `nonverbal affection
behaviours predict commitment couples open`.

**Real finding worth recording: there is no study of what people say when they
deliberately avoid the phrase "I love you".** The lane is adjacent to the keyword, not
about it. The four sources below are about the *substitution* — what carries relational
weight when it is not the formula — which is as close as the literature gets.

| # | Source | Why it is here | Subject test | Peer-reviewed / OA |
|---|---|---|---|---|
| 1 | Algoe, Kurtz & Hilaire, *Social Psychological and Personality Science*, 2016 — [author copy, Carolina Digital Repository](https://cdr.lib.unc.edu/downloads/2801pj53j) | 73 couples (Study 1) + 257 couples (Study 2), n = 370 recorded gratitude expressions. **Other-praising** behaviour predicted the benefactor's perceived responsiveness, positive emotion and *felt loving*; **self-benefit** statements ("it let me relax") did not, and controlling for them did not reverse the effect. This is the page's central argument. | ✔ | ✔ green OA, full text read |
| 2 | Pett, Lozano & Varga, *Communication Reports*, 23 Aug 2022 — [author copy, Ohio University](https://www.ohio.edu/scripps-college/sites/ohio.edu.scripps-college/files/sites/scripps-college/comm-studies/files/Revisiting%20the%20Languages%20of%20Love%20An%20Empirical%20Test%20of%20the%20Validity%20Assumptions%20Underlying%20Chapman%20s%202015%20Five%20Love%20Languages%20Typology.pdf) | 648 open-ended responses, 324 people. Words of affirmation 296 (45.7%), acts of service 164 (25.3%) — and an inductively derived **sixth** category the coders had to add: **check-ins**, 100 responses (15.4%), short partner-centred questions about someone's day. Small and specific counts; vague does not. | ✔ | ✔ green OA, full text read |
| 3 | Canary & yum, *The International Encyclopedia of Interpersonal Communication*, 2016 — [copy hosted by Yale](https://wggc.yale.edu/sites/default/files/files/Relationship%20Maintenance%20Strategies.pdf) | Stafford & Canary's five maintenance strategies; **assurances** defined as behaviours that *"show one's commitment to the partner"*. Also: individualists consistently reported greater use of **explicit** relational maintenance than collectivists — which is what case 2 needed, and it is reported as a finding *they report*, not as their own data. | ✔ | Scholarly reference chapter, open, full text read |
| 4 | Hughes & Camden, *Psi Chi Journal of Psychological Research* 25(3), 2020 — [PDF](https://cdn.ymaws.com/www.psichi.org/resource/resmgr/journal_2020/25_3_hughes.pdf) | 981 people in couples. Acts of service predicted love R² = .25 and satisfaction R² = .20; words of affirmation .26 and .32. Doing carries near-equal weight to declaring — *and only when recognised as doing*, which is the hinge of the "do not coach evasion" section. | ✔ | ✔ peer-reviewed, fully OA, full text read |

Generic context statistics: **zero**. Wikipedia body links: **zero** (Wikipedia appears
only in `sameAs`, which does not count against the budget). Competitor citations: **zero**.

**Discarded on the cap rule after reading it in full:** Kocur et al. 2025, *To hug or not
to hug? Public and private displays of affection… Indonesia, Nepal, and Poland*, PLOS ONE
`10.1371/journal.pone.0326115` — genuinely in lane (its tripartite model of direct-verbal
/ direct-nonverbal / indirect-nonverbal expression is exactly this post's taxonomy), but
`capcheck.mjs` shows it already spent in `2026-09-17-propose-30`. Also discarded:
`journals.plos.org/…/pone.0269429` (love-language matching), likewise banned.

`capcheck.mjs` was run **at source selection and again immediately before saving**. Both
runs: no banned URL used, and none of `cdr.lib.unc.edu`, `ohio.edu`, `wggc.yale.edu` or
`cdn.ymaws.com` at or near the domain cap. No exempt reference URL (statute, dictionary,
grammar, treebank, corpus, standards) was reused — all four sources are new to the cluster.

---

## Phase 5 — templates and links

Internal links: **four**, all placed after the section that establishes the need.

- **`/proposal` (mandatory)** — linked in the paragraph after the routing table, with the
  honest note the brief demands: a Will-You-Marry-Me scrapbook is a *very large* gesture
  for a reader whose entire problem is overstating, so it suits case 3 and **not case 1**.
- **`/date-invitation` (the genuine alternative)** — reasoned out on the page rather than
  asserted: `/love-gf` is literally the "I love you" page, so for a reader avoiding that
  exact phrase it is the wrong *frame*, however well it performs (16,998 views, 29.9% of
  all page views). The invitation page asks for one Saturday rather than a lifetime, which
  is the size case 1 actually wants.
- **`/love-gf`** stays in `templateUrls` and is discussed in the table and in prose, but is
  deliberately **not linked** — linking the page you are telling the reader is the wrong
  frame is not a service, and it keeps the internal-link count inside 2–4.
- Two sibling `/blog/` slugs, as required. These are the single audit failure (item 31).

---

## Phase 6 — audit

49 passed, 1 failed, disjoint, summing to 50, strings byte-verbatim from
`publish-checklist.md`.

**Failed:** *Every internal link is a real URL from TEMPLATE_LINKS* — two of the four
internal links are sibling post slugs the brief mandates for cannibalisation control.
Structural, not fixable without disobeying the brief.

Everything else that could not be closed is in `batchMeta.structuralLimitations`, not in
`failed`: the absent proposal-specific data, the empty pricing block, the deliberately
thin Phase 1, the sibling slugs' 404 window, the discarded banned source, and the
1,797-word plain-split body length.

**Honest assessment:** the page's defensible edge is the three-reader split plus printed
failure modes, and a first-party page mix no competitor can publish. Its ceiling is the
SERP: user-generated Q&A and short-video platforms carry engagement signals a
low-authority blog does not, and no position was measured, so nothing is predicted.
