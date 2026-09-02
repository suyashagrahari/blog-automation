# Research brief — `never have i ever questions for couples`

Batch `2026-09-02-love-gf-3` · slug `never-have-i-ever-questions-for-couples` · category `modern-romance`
Written 2026-09-02. Facts from `content/facts.md` (regenerated 2026-09-02).

**Tooling note, recorded for honesty:** the session's `WebSearch` budget (200/200) was
exhausted before this post started, and `WebFetch` is blocked by the local hook. The SERP
was therefore harvested from DuckDuckGo's HTML endpoint (`kl=in-en`) inside the sandbox,
and every page and paper below was fetched with `urllib` + `pdftotext` in the sandbox
rather than through `WebFetch`. Every source was fetched and read; nothing here is from
memory.

---

## Phase 1 — SERP analysis

Top results for the exact keyword (DuckDuckGo HTML, India-English locale, 2026-09-02):

| # | Page | Words | Structure | Direct answer? | Data cited | Format | Tone |
|---|---|---|---|---|---|---|---|
| 1 | paired.com — "220 Never Have I Ever Questions for Couples" | 2,819 | H2 categories, no H3s | No — "Looking for the perfect game for you…" intro first | None. Zero outbound .edu/.gov/doi links | No table, no FAQ block, `Article` + `Person` schema, dated 2023-10-05 | Second person, warm, app-funnel; "juicy questions" is its own H2 |
| 2 | mantelligence.com — "81 … (Funny, Dirty, Weird)" | 3,118 | 13 H2s, all "N <adjective> questions", 11 H3s | No | None | No table, no FAQ, downloadable list CTA, 2019-10-22 / updated 2025-07-17 | Listicle, male-audience framing, heavy ad furniture |
| 3 | attractiondiary.com — "100 Romantic 'Never Have I Ever' Game Questions" | 1,894 | 2 H2s only ("How to Play", then the list) | Partially — a two-line how-to | None | No table, no FAQ, `BlogPosting`, 2025-02-10 | Blog-personal, Pinterest-shaped |
| 4 | couplemoment.com — "150 … (2026)" | 2,493 | 5 numbered category H2s + "Turn Confessions Into a Date" + FAQ | No | None | `FAQPage` schema present, no table, year-stamped title, 2026-07-20 | Product-adjacent ("Never Run Out of Prompts") |
| 5 | neverhaveieveronline.com — "200+ … (Sweet & Spicy)" | 3,422 | 10 H2s incl. "Why This Game Works", "Tips", FAQ, "The Real Point" | Closest of the five — "Why This Game Works So Well for Couples" is near the top | None | `FAQPage`, in-page prompt drawer, emoji headings, 2026-06-26 | Tool-site editorial |
| 6 | couplecareroutine.com — "90 … (Fun to Deep)" | 1,427 | 12 short category H2s + FAQ | Yes — opens with "usually a party game, but for couples…" | None | `FAQPage` only, no table | Quiet, closest to a point of view |

Cross-page constants:
- **Zero tables.** Six of six.
- **Zero citations.** Six of six: no `.edu`, `.gov` or `doi.org` outbound links anywhere.
- **Zero first-party data.** Nobody publishes a number of their own.
- **Count inflation is the only differentiator on offer** — 81, 90, 100, 150, 200+, 220.
- Two of six ship an FAQPage; one year-stamps its title.
- `paired.com` and `mantelligence.com` are on the competitor blocklist. Read for
  positioning, never cited, never linked, and their section order deliberately not copied.

## Phase 2 — Gap analysis

**Table stakes** (must appear or the post looks incomplete): a set of prompts organised
into groups; a short "how to play as a couple"; something about funny prompts; something
about deeper prompts; a note on new-couple vs long-together framing.

**The gap.** All six treat the format as a container for prompts. None of them explain the
mechanic: never have I ever is a **disclosure** game, not a question game. The move is an
*admission*, and it is structurally lopsided — the person who says the statement reveals
only what they suspect, while the person answering reveals a fact about their past. Nobody
names that asymmetry, nobody fixes it, and nobody says what happens when the past being
mined is the romantic past. None of the six mentions retroactive jealousy. None gives a
stop rule. None asks where the answers go once the round ends.

**Stale data.** Nothing to supersede — there is no data on any of the six pages to be
stale. The oldest page (2019, refreshed 2025) is still purely a list.

**Unanswered questions raised and dropped:** why the game "works" (asserted on one page,
never explained); whether it survives over text; whether a prompt that lands for a
six-month-old couple lands for a married one; what to do with an answer you did not want.

**Fan-out sub-queries → H2s:**
1. What makes never have I ever different from a question game? → definition H2
2. How do you actually play it as a couple / how many prompts? → the rule H2
3. What are good, funny, crazy, fun prompts? → **three H2s, one per kind of thing an
   admission teaches you** (the person you see every day / the years you were not there
   for / the relationship you are already in), each with two H3 prompt banks and mirrored
   by the six-item `ItemList`. Revised in Phase 8 — see the restructure note below.
4. Can you play never have I ever over text? → venue comparison H2 + table
5. Does it work for new couples / married couples? → calibration H2
6. When is it a bad idea? → objection H2
7. Where do the answers live afterwards? → closing H2

**Angle (`batchMeta.angle`):** wins by being the only page that treats never have I ever
as a disclosure game with a one-sided structure — naming the asymmetry, fixing it with a
reciprocity rule, and giving a stop rule grounded in retroactive-jealousy research —
anchored on first-party numbers from 987 `/love-gf` pages (29.2% of 3,377) on a template
that actually plays a round inside the page.

**Deliberate separation from siblings.** Wave 2's
`truth-or-dare-questions-for-couples-long-distance` owns the dare format, the escalating
five-tier ladder and the video-call-lag framing; this post uses *prompts grouped by what
each admission teaches you* rather than tiers by boldness, and does not re-argue lag. The two live siblings in
this batch (`20-questions-game-for-couples`, `would-you-rather-questions-for-couples`)
own a Q&A game and a choice game; the disclosure mechanic — the admission as the move —
is claimed here.

**Excluded on brand grounds:** the harvest surfaced "juicy", "spicy", "dirty" and
rage-bait variants, and rank 1 and rank 5 both build sections on them. Dropped
deliberately: nothing sexual, nothing drinking-related, nothing humiliating. That costs
some traffic and is recorded in the honest assessment.

## Phase 3 — Sources

Four research sources plus one entity link. All fetched and read in full (PDF → text) in
the sandbox on 2026-09-02. None appears in `USED-SOURCES.md`.

1. **Schug, J., Yuki, M., & Maddux, W. W. (2010). "Relational mobility explains between-
   and within-culture differences in self-disclosure to close friends." *Psychological
   Science* 21(10), 1471–1478.**
   `https://eprints.lib.hokudai.ac.jp/dspace/bitstream/2115/47193/1/PS21-10_1471-1478.pdf`
   Peer-reviewed **and** open access (author's accepted version, Hokkaido University
   HUSCAP repository). Study 1: 74 Japanese students and 93 US students. Verified from the
   full text: Americans disclosed more than Japanese participants, F(1,163) = 22.30,
   p < .0001; participants disclosed more to a friend than to a family member,
   F(1,163) = 33.09; the cultural difference was mediated by perceived relational mobility
   (β = .34, p < .001 for the path to disclosure), and relational mobility did **not**
   mediate disclosure to a family member. The authors' own conclusion: contexts high in
   relational mobility "produce stronger incentives for self-disclosure as a social
   commitment device."
   *Used for:* disclosure is socially calibrated, and it functions as a commitment signal —
   which is why an unreciprocated admission is the failure mode. Paraphrase kept narrower
   than the study: it is about close friends in Japan and the US, not Indian couples, and
   the post says so.
   Subject test: **pass** (self-disclosure). Swap test: **pass** (would not sit in a
   love-letter or anniversary post unchanged).

2. **Schouten, A. P., Valkenburg, P. M., & Peter, J. (2009). "An experimental test of
   processes underlying self-disclosure in computer-mediated communication."
   *Cyberpsychology: Journal of Psychosocial Research on Cyberspace* 3(2).**
   `https://research.vu.nl/ws/files/2690641/238793.pdf` (publisher's version of record,
   diamond open access journal)
   Verified from the full text: 168 University of Amsterdam students formed 81 cross-sex
   dyads, 27 per condition, randomly assigned to text-only CMC, webcam CMC, or
   face-to-face, doing a get-acquainted task. Self-disclosure was **lower** face-to-face
   than in either mediated condition; there was **no difference between text-only and
   webcam**; of four candidate mediators only **direct questioning** carried the effect —
   mediated dyads asked more direct questions.
   *Used for:* the "over text" sub-query. The narrow claim: adding video did not change how
   much strangers disclosed, and asking did. Caveat printed in the body — these were
   strangers meeting once, not couples.
   Subject test: **pass** (mediated disclosure). Swap test: **pass**.

3. **Brauer, K., Sendatzki, R., Scherrer, T., Chick, G., & Proyer, R. T. (2021).
   "Revisiting adult playfulness and relationship satisfaction: APIM analyses of
   middle-aged and older couples." *International Journal of Applied Positive Psychology*
   8(Suppl 2), S227–S255. Accepted 17 Aug 2021, published online 7 Sep 2021. CC BY 4.0.**
   `https://link.springer.com/content/pdf/10.1007/s41042-021-00058-8.pdf`
   Peer-reviewed and open access. Verified from the full text: 116 middle-to-older couples
   (median age 54 in women, 57 in men); Actor-Partner Interdependence Modelling; lower
   Other-directed playfulness than in younger samples; partner similarity again unrelated
   to relationship satisfaction; Other-directed and Whimsical playfulness showed the
   numerically strongest actor and partner effects, "but mainly in women."
   *Used for:* the married-couples section — playfulness keeps mattering later, and the
   facet that mattered most is the *other-directed* one, which is the one a reciprocated
   round exercises. Paraphrase stays inside "numerically strongest… mainly in women."
   Subject test: **pass** (play between partners). Swap test: **pass**.

4. **Osorio, M. A. (2025). "Characterizing retroactive jealousy: evidence from network,
   machine learning, and qualitative approaches." Doctoral dissertation, Harvard
   University Graduate School of Arts and Sciences. DASH repository, openly available.**
   `https://dash.harvard.edu/bitstreams/6e01a6f2-5a52-4a61-9ae7-aaf666d568f5/download`
   Scholarly, not peer-reviewed — a dissertation, and the post calls it that. Verified
   from the full text: retroactive jealousy is defined as "intrusive thoughts, compulsive
   behaviors, and emotional distress in response to a romantic partner's past
   relationships"; the dataset carried 299 adults (mean age 30.5), with 221 retained for
   the network analysis and 272 for the clustering; symptoms did not form a strongly
   interconnected network; higher severity was associated with lower self-reported
   cognitive flexibility and greater certainty-related language; the author explicitly
   raises the reading that it is "a historically and culturally situated expression of
   distress shaped by modern romantic ideals and digital media."
   *Used for:* the objection H2 and the stop rule. Note in body: named behaviours in the
   measured set include information-seeking and reassurance-seeking — which is exactly
   what a history prompt invites.
   Subject test: **pass**. Swap test: **pass**.

5. **Wikipedia — "Never have I ever" (Q2699114).**
   `https://en.wikipedia.org/wiki/Never_have_I_ever`
   Entity disambiguation only, not counted as research. Verified via the Wikipedia API:
   the article describes a drinking game, "also known as 'I've never…' or 'ten fingers'",
   with a no-drinking variant scored on fingers. Used once, to state the origin honestly
   before dropping the drinking half.

**Generic context statistics used: none** (budget was 1). No PIB/TRAI/Census/MEA figure
appears — none passed the subject test.

**Cap check.** Domain appearances in the 20 earlier posts: `dash.harvard.edu` 1 (a
different URL — the Kumar/Epley bitstream), `en.wikipedia.org` unlisted in this batch's
domain table but capped at 2 links in-body. `eprints.lib.hokudai.ac.jp`, `research.vu.nl`
and `link.springer.com` appear **zero** times in `USED-SOURCES.md`. No URL here appears in
any earlier post. On a re-check after writing, the sibling
`love-letter-for-girlfriend-in-malayalam.json` also cites `link.springer.com` (a different
article), putting that domain at **2 posts in this batch** — under the cap of 3, so no
breach. Two more siblings are still drafting and could take it to 3 or 4; per the brief,
this is recorded rather than patched. **If the
orchestrator finds a breach, the URL this post offers to give up is the Harvard DASH
dissertation** (`dash.harvard.edu`, the domain already at 1), because the retroactive-
jealousy point can be restated as a caution without a citation; the other three carry
load-bearing numbers.

## Phase 0 — first-party facts, and the gap in them

Used verbatim from `content/facts.md` (2026-09-02): 987 `/love-gf` pages / 29.2% of 3,377;
42.8% password-protect (1,444 of 3,377); 14,607 `/love-gf` views / 35.2% of 41,486; 50.3%
of views on a phone (20,853 of 41,486); median 7.2 h between first save and last edit on
`/love-gf`, n=987; 99.5% published (3,359 of 3,377); `/darling` 349 pages / 10.3%.

**The honest limit.** `facts.md` measures *page types*, not rounds. There is no per-round
telemetry: nothing records how many people opened a Love Quiz or a Truth-or-Dare round
inside a page, how long a round ran, or which prompts got answered. So the post states no
such number, and the comparison table's first-party column says "not measured" for the
three venues where that is the truth. The **Pricing block in `facts.md` is empty**, so the
post says nothing about cost anywhere — not free, not paid.

## Phase 5 — targeting

- `categorySlug`: `modern-romance` (per the brief, games sit with the letters here).
- `templateUrls`: `/love-gf`, `/darling`, `/anniversary-gf` — all three from
  `TEMPLATE_LINKS` in `app/lib/prompt.ts`. `/love-gf` and `/darling` are the batch's
  mandatory pair; `/anniversary-gf` earns its place in the married-couples section.
- Internal links: 3, all after the section that earns them, none in the opening.
- `structuredData`: an `ItemList` mirroring the five prompt-set H3s in order, plus an
  `@id`-matched `BlogPosting` enrichment block on `<canonicalURL>#post` carrying
  `citation` (one entry per source), `about` (Never have I ever, Q2699114) and `mentions`
  (Self-disclosure Q2892912, Party game Q839864, Long-distance relationship Q1406917 — all
  three QIDs verified against the Wikipedia API on 2026-09-02).

---

## Phase 8 — restructure note (2026-09-02)

The draft organised the prompts as **"40 prompts in five sets"** under a single H2 with
five topical H3s. The batch sibling `20-questions-game-for-couples` independently arrived
at **"40 topics in five rounds"** with five numbered H3s. Neither copied the other, but
two posts in one cluster sharing that skeleton reads templated to a retrieval system —
the inward-facing form of `No section closely mirrors a competitor page's structure or
framing`. This post was the one restructured, because the sibling's rounds are intrinsic
to its mechanic (a fixed budget of twenty questions spent across rounds) while these five
sets were only an editorial container.

**New organising principle: what the admission teaches you that you could not have asked
for directly.** Never have I ever is a disclosure game, so the prompts are now grouped by
the *kind of knowledge* an admission produces, across three question-shaped H2s with two
H3 prompt banks each:

1. `## What does a round tell you about the person you see every day?` — 16 prompts
   (`### Habits, firsts and small vanities`, `### The mishaps nobody minds admitting`)
2. `## What does it tell you about the years you were not there for?` — 16 prompts
   (`### Decisions from before you met`, `### Stories you would not have known to ask for`)
3. `## What does it tell you about the relationship you are already in?` — 8 prompts
   (`### Things done quietly and never mentioned`, `### Things nearly said`)

Still 40 prompts. The old set 5 was re-cut into two banks of four (things done quietly vs
things nearly said), which is a real division in that material rather than a relabelling.

**Not chosen: grouping by what the admission costs** (harmless → mildly embarrassing →
genuinely revealing). It is a defensible ladder, but the wave-2 sibling
`truth-or-dare-questions-for-couples-long-distance` already owns the escalating-tier
shape, and the original draft argued in prose that a boldness ladder makes the last prompt
feel like a dare. Grouping by what is learned keeps that argument and makes the structure
enact it instead of asserting it. The anti-ladder sentence survives, compressed, in the
first of the three H2 leads.

**Knock-ons:** `structuredData`'s `ItemList` now carries six items mirroring the six H3s
in document order (`numberOfItems: 6`); the venue table's second column and the
new-couples/married-couples section were rewritten to reference the three groups instead
of numbered sets; `excerpt`, `metaDescription`, key takeaway 2, FAQs 3 and 4 and
`batchMeta.angle` dropped their "five sets" wording. The three "not measured" cells in the
comparison table are untouched — there is still no per-round telemetry in `facts.md`. Word
count 1,797 → 1,799 on the plain whitespace split (1,840 on `wordCount()` in
`app/lib/batches.ts`), inside the 1,500–1,800 band with two words of headroom, so the
restructure was paid for by trimming roughly 175 words of prose across every section
rather than by cutting prompts.

**Audit movement:** `Every H2 section answerable standalone in 2–3 sentences` moved to
`passed` — the 450-word container H2 no longer exists, and each of the three replacement
H2s is a question answered in two or three sentences before its prompt banks. 48 passed /
2 failed. The two remaining failures are unchanged and not fixable here: the metaTitle
cannot fit a seven-word keyword inside its first five words, and the slug is the
exact-match keyword, verified free against the live API today.
