# Research brief — `how to surprise my boyfriend on our anniversary`

Batch `2026-09-03-gift-bf-2` · slug `how-to-surprise-my-boyfriend-on-our-anniversary` ·
category `modern-romance` · researched and drafted 2026-09-03/04.

---

## Phase 1 — SERP analysis

SERP measured on real Google, `gl=in&hl=en`, 2026-09-03
(`content/keywords/2026-09-03-gift-gf-bf/serps.md`, row 66).

**7 of 8 weak. AI Overview fired.**

| Rank pool | Host | Type | What it optimises for | Direct answer? |
|---|---|---|---|---|
| weak | `pinterest.com` | UGC image boards | image-save engagement | no |
| weak | `igp.com` | gifting retailer | product SKUs | no |
| weak | `fnp.com` | gifting retailer (Ferns N Petals) | product SKUs + same-day delivery | no |
| weak | `quora.com` | UGC Q&A | question-page volume | scattered, unedited |
| weak | `oyehappy.com` | gifting retailer | product SKUs | no |
| weak | `greetingsisland.com` | **digital card builder** | template downloads | no |
| weak | `boxupgifting.com` | gift-box retailer | product SKUs | no |
| **strong** | `theknot.com` | US wedding authority | editorial anniversary hub, gift-first | yes, gift-object framed |

**Competitor determination (`references/competitors.md`).** `igp.com`, `fnp.com`,
`oyehappy.com` and `boxupgifting.com` are online gifting retailers; **`greetingsisland.com`
is a digital greeting-card / invitation builder, i.e. a direct substitute for a SubhSandesh
page.** All five were read for gap analysis only — **not cited, not linked, section order
not mirrored.** `pinterest.com` and `quora.com` are UGC.

**The only editorial result is `theknot.com`**, a US wedding brand with domain authority far
beyond subhsandesh.in. It is beatable only on ground it does not hold:

1. It answers *what to buy*, not *what to do at the reveal*.
2. It is written one-directionally and from a US wedding-anniversary frame.
3. It carries no first-party behavioural data.

**AI Overview implication.** The direct answer is a single liftable paragraph inside the
first 150 words carrying two first-party numbers (7.2 hours median build, 42.7%
password-protection), and every H2 answers standalone with a number or a named source in it.

---

## Phase 2 — Gap analysis and fan-out sub-queries

**Demand shape (from the batch shortlist).** Head term 11x. Top secondary
`how to surprise my girlfriend on our anniversary` at **14x — higher than the head term.**
Also `how to surprise my boyfriend on our 1st anniversary` (11x),
`how to surprise my boyfriend for our 2 year anniversary` (2x),
`how to surprise your boyfriend for anniversary` (2x).

"Our anniversary" is a **shared** occasion, so the post is written to serve both directions
rather than one, with a dedicated H2 for the reversal.

**Sub-queries the fan-out produced, and the H2 each became:**

| Sub-query | H2 |
|---|---|
| what makes an anniversary different from a birthday | An anniversary is a ritual the two of you enact… |
| how do I know if the surprise worked | The first thirty seconds after the reveal are his… |
| when in the day should I do it, since he knows the date | The date is fixed and he knows it, so the hour… |
| what do I actually do on the day | Five moves for the day, ordered by how much he has to do |
| should I hand it over, send a link, or hide it | The five reveal formats, compared… |
| does the same thing work for surprising her | How to surprise my girlfriend on our anniversary: the same plan, reversed |
| when does an anniversary surprise backfire | Where this goes wrong, and when a SubhSandesh page is the wrong surprise |

**Distinctness check against the three adjacent posts (all read in full).** All three own the
**gift object**; this post owns the **surprise act**.

| Post | Its territory | Overlap with this post |
|---|---|---|
| `2026-09-03-gift-bf/anniversary-gift-for-boyfriend-unique.json` | uniqueness as a selection criterion | none — no selection criteria here |
| `2026-09-03-gift-bf/anniversary-gift-for-boyfriend-2-years.json` | the year ladder 1→10, 1883 Dakota newspaper, Post 1922 | none — **no year ladder, no anniversary materials** |
| `2026-09-03-gift-bf-2/anniversary-gift-for-boyfriend-1-year.json` | the first anniversary, paper convention from Young 1881 | none — no convention, no materials, no taste-guessing |

Also checked against the five other batch-2 posts on disk: 134 headings across wave 1 plus
these six, and **no heading here near-duplicates any of them.** Two deliberate avoidances:

- The gf-birthday sibling has *"Six surprises for her birthday, and the hour each one needs"*.
  An hour-per-item list was drafted and **discarded** for being too close; the main body was
  rebuilt around *how much the recipient has to do*.
- The his-birthday sibling frames a birthday surprise as a **concealment** problem via the
  Secrecy Burden Scale. Secrecy here is one short passage using the **opposite** lens
  (positive secrets as energising), and is not a heading.

**Claim no top-5 page makes:** that the anniversary surprise is graded by the *recipient's*
response in the first thirty seconds, that this response type is a measured predictor of
relationship outcomes, and that a surprise the recipient does not participate in is the one
ritual condition the ritual literature found had no association with enjoyment.

---

## Phase 3 — Sources

**Search terms tried** (WebSearch quota exhausted; used the Europe PMC REST API, Crossref,
DOAJ, DuckDuckGo HTML, and direct repository fetches):
`anniversary ritual couple wellbeing` · `relationship rituals shared meaning` ·
`couple rituals relationship satisfaction` · `capitalisation shared positive events` ·
`capitalization positive events romantic partner` · `surprise emotion intensity study` ·
`surprise appraisal emotion intensity` · `secret keeping concealment burden` ·
`positive secrets energizing` · `couple time scarcity` ·
`time scarcity couples leisure relationship satisfaction` ·
`romantic relationship maintenance India` · `shared experiences are amplified` ·
`anniversary celebration couples wellbeing`.

**Tool notes for the next writer.** OpenAlex and Semantic Scholar were both **rate-limited to
zero** (`429 Insufficient budget` / `429 Too Many Requests`) — siblings had exhausted them.
`pmc.ncbi.nlm.nih.gov` returns **HTTP 200 with a 167-byte bot wall** on plain `fetch`, which
looks like success; `https://www.ebi.ac.uk/europepmc/webservices/rest/<PMCID>/fullTextXML`
serves the same full text at 200 and is the reliable route. `academiccommons.columbia.edu`,
`www.columbia.edu/~<user>/`, `espace.library.uq.edu.au` and `minerva-access.unimelb.edu.au`
all failed (bot wall, 403, JS shell, irrelevant index). **`html.duckduckgo.com/html/?q=` works
over plain `fetch`** and was the single most useful unlock — but it rate-limits to HTTP 202
after roughly two queries a minute.

**The find worth repeating.** Slepian et al. 2023 is paywalled at PsycNet, and no repository
copy exists. But APA publishes the **full article PDF free** for press-released papers at
`https://www.apa.org/pubs/journals/releases/psp-<doi-suffix>.pdf`. That URL returns the
complete 18-page article at HTTP 200. Try that pattern before declaring an APA paper closed.

### The four sources, all fetched and read in full

| # | Source | Domain | Peer-reviewed | Open access | Subject test |
|---|---|---|---|---|---|
| 1 | Sezer, Norton, Gino & Vohs, "Family Rituals Improve the Holidays", *JACR* 1(4), 2 Sept 2016 | `hbs.edu` | yes | yes (institutional repository PDF) | **pass** — ritual |
| 2 | De Netto, Quek & Golden, *Frontiers in Psychology*, 13 Dec 2021 | `frontiersin.org` | yes | yes (CC BY) | **pass** — capitalisation in romantic relationships |
| 3 | Kashdan et al., *Behaviour Research and Therapy* 51(10), Oct 2013 | `europepmc.org` | yes | yes (CC BY-NC-SA 3.0) | **pass** — capitalisation in 174 couples |
| 4 | Slepian, Greenaway, Camp & Galinsky, *JPSP* 125(5), 1018–1035, 2023 | `apa.org` | yes | free publisher PDF | **pass** — positive secrets, surprising a partner |

Zero generic context statistics. Zero Wikipedia citations. Zero competitor citations.
Four distinct publishers: University of Chicago Press / ACR, Frontiers Media SA, Elsevier,
American Psychological Association — **counted by publisher, not hostname.** No cited URL
appears in the spent-50 block; the Sezer PDF sits in the LEGAL TO CITE list with one slot
left, and the other three have zero prior uses. All four **domains are at zero uses in this
batch**, so `pmc.ncbi.nlm.nih.gov` (3/3) and `purehost.bath.ac.uk` (3/3) are avoided.

### Verified claims, quoted from the fetched text

1. **Sezer et al. 2016.** Three studies, N = 1,098. "while simply spending the holiday with
   family was associated with greater enjoyment, enacting a ritual while with family added
   significantly to that enjoyment"; and — the load-bearing one — "Participants were unlikely
   to engage in individual rituals (i.e., on their own without family involvement), and when
   they did, individual rituals were not associated with holiday enjoyment." The paper names
   "annual events such as anniversaries and birthdays" among family rituals.
   **Scope stated in the post:** it studied Christmas and New Year's Eve *with families*, not
   couples on a dating anniversary.
2. **De Netto, Quek & Golden 2021.** 139 Malaysians in dating relationships, aged 18–30
   (46 male, 93 female; M age 23.15), recruited Dec 2017 – Jan 2018. "an active-constructive
   capitalization response bore the strongest influence on relationship satisfaction above and
   beyond other responses"; passive-destructive responses "were the most detrimental factor";
   and "interdependent self-construal did not moderate the two forms of communication
   processes". The paper states this literature has been "dominated by the Western
   perspectives" — which is why it carries the both-directions and non-Western weight here.
3. **Kashdan et al. 2013.** 174 heterosexual dating couples, mean age 21.5, dating ≥ 3 months.
   "individuals in romantic relationships with socially anxious partners who experienced
   inadequate capitalization support were more likely to terminate their relationship and
   report a decline in relationship quality six months later."
4. **Slepian et al. 2023.** Five experiments, N = 2,800. "positive secrets increase feelings of
   energy, relative to (a) content-matched positive non-secrets"; "these energizing effects of
   positive secrets were independent of positive affect"; mechanism is intrinsic rather than
   extrinsic motivation. One intrinsic-condition vignette reads: "you're going to keep this
   good news secret, and you are going to surprise your partner, when you get home after
   work." **Scope stated in the post:** single pieces of good news held for days, not a
   multi-week plan with accomplices.

### What was searched for and does not exist

- **No India-specific research on couple anniversaries or on how Indian couples allocate time
  to a partner** was reachable. `romantic relationship maintenance India` in Europe PMC with
  `OPEN_ACCESS:Y` returns three papers, none on the topic (adolescent HIV care, attitudes to
  singlehood in Malaysia/Japan/India, an anonymised youth support forum). The Time Use Survey
  route was attempted via `mospi.gov.in` and PIB and blocked at the search layer. The India
  specificity in this post therefore rests on **first-party data plus the non-Western
  capitalisation sample**, not on a national statistic — which also keeps the generic-context-
  statistic count at zero.
- **The brief's suggested "givers systematically mispredict what recipients want" was not
  asserted**, per the batch correction. Nothing in this post depends on it.

---

## Phase 4–5 — Draft decisions

- **1,794 words** in `contentMarkdown` by plain whitespace split, FAQs excluded.
- **Primary first-party fact deliberately varied from neighbours:** the lead is the
  **7.2-hour median first-save-to-last-edit** (scoped to `/love-gf`, n=1,001) and
  **42.7% password-protection** — not the 50.2% phone-open share that eleven wave-1 posts and
  several siblings lead on. 50.2% appears once, inside a table cell.
- **No price, cost, "free" or tier claim anywhere.** The `facts.md` Pricing block is empty; a
  grep for `free|price|cost|tier|paid|rupee` over the final body returns zero matches, and the
  words "costs him" were rewritten out of an H2 to keep a naive grep clean.
- **No first-party number is attached to recipient gender.** The post states explicitly that
  SubhSandesh records no recipient gender on any of the 3,425 pages.
- **Internal links (3, all after value is established):** `/love-gf` (with its 1,001 / 29.2%
  figure) and `/darling` (349 / 10.2%) in the post-table paragraph; `/missyou-gf` in the final
  section, described by function with **no** figure attached, since it carries none.
  `batchMeta.templateUrls` = `["/darling", "/love-gf"]`. `/apology-dashboard` was deliberately
  **not** used — this post is not about repair, and the closing section says an anniversary is
  the wrong place to attempt one.
- **Comparison table** compares five *reveal formats* (the axis specific to this keyword),
  5 rows × 4 columns, with a first-party column; two rows honestly read "Not recorded".
- **Downside section** names three failure modes and three situations where a SubhSandesh page
  is the wrong choice, including a do-not-disturb phone read against the 50.2% phone share.
- **`structuredData`** is additive only: one `@id`-matched enrichment block on
  `…#post` carrying `about`, `mentions`, `isAccessibleForFree` and `citation` mirroring
  `batchMeta.sources` 1:1, plus an `ItemList` mirroring the five H3s in order. No
  `AggregateRating`, `Review` or `HowTo`. No FAQPage — the renderer builds it from
  `article.faqs`. Every `sameAs` verified against the Wikipedia API with its Wikidata QID:
  Wedding anniversary Q1136848, Ritual Q189819, Surprise (emotion) Q333173, Secrecy Q1503443,
  Interpersonal relationship Q223642.
- **Slug availability:** `strapi.subhsandesh.in/api/articles?filters[slug][$eq]=…` returned
  `total: 0`. `categorySlug` `modern-romance` confirmed against the live category list.

---

## Phase 6 — Audit

Checklist item strings were **extracted programmatically** from
`references/publish-checklist.md` (wrapped items re-joined, whitespace collapsed) — 50 items.
`|passed| = 47`, `|failed| = 3`, `passed ∩ failed = ∅`, `47 + 3 = 50`.

**The three failures, all reported rather than fixed:**

1. **`Paragraphs 2–3 sentences throughout`** — unsatisfiable under `page-structure.md`
   (Block 1's single ~150-word three-part answer paragraph; Block 3's four fields per H3).
   `page-structure.md` was followed and the conflict is named.
2. **`Slug short, hyphenated, lowercase, no stop words`** — the assigned slug mirrors the
   eight-word keyword and necessarily carries `how / to / my / on / our`. Changing it would
   break the filename-equals-slug contract and drop the exact-match keyword.
3. **`No source passes the swap test`** — three of four pass. The Slepian positive-secrets
   paper could sit in the sibling `how-to-surprise-my-boyfriend-on-his-birthday`, which treats
   a birthday surprise as concealment. That post cites a different paper (Secrecy Burden Scale)
   and takes the opposite framing, so there is no citation collision — but the item is not
   cleanly passed and is reported.

---

## Note back to the brief author

**A third error, offered per the brief's invitation.** The brief and the assignment both frame
`greetingsisland.com` correctly as a competitor, and the internal-link and facts constraints
held up. But the batch brief's Phase 3 guidance says to prefer a publisher "no sibling has
used" while `USED-SOURCES.md` presents the heavily-used-domains table as the thing to check.
**Neither surfaces the case that actually bit here:** a domain can sit at *six* posts
lifetime (`hbs.edu`) and still be entirely legal in this batch, while a domain at *seventeen*
posts lifetime (`pmc.ncbi.nlm.nih.gov`) can be hard-blocked because siblings filled it today.
The lifetime table is close to useless for the decision, and the only usable signal is a live
scan of `content/batches/<batchId>/blogs/`. Worth saying outright in the brief.

**Second, smaller:** the brief tells writers that a browser session clears Cloudflare
interstitials, which is true — but the higher-yield trick this run was neither a browser nor a
different endpoint. It was **guessing the publisher's own press-release PDF path**
(`apa.org/pubs/journals/releases/psp-<doi-suffix>.pdf`), which turned a paywalled JPSP article
into a free full text in one request. That belongs in correction 4's list alongside
`citation_pdf_url`.
