# Research — anniversary gift for boyfriend long distance

Slug: `anniversary-gift-for-boyfriend-long-distance` · category `miss-you-across-miles`
Written 2026-09-04 against `content/facts.md` generated 2026-09-03 (not regenerated).

---

## Phase 1 — SERP (measured, not re-pulled)

Taken from `content/keywords/2026-09-03-gift-gf-bf/serps.md`, real Google, `gl=in&hl=en`,
2026-09-03. **7 of 8 weak.**

| Result | What it is |
|---|---|
| `oyehappy.com` | Shop |
| `amazon.in` | Marketplace |
| `pinterest.com` | UGC |
| `reddit.com` | UGC |
| `zwende.com` | Shop |
| `boxupgifting.com` | Shop |
| `confettigifts.in` | Shop |
| `endlessdistances.com` | Scored non-weak, but a wave-1 writer established it is a 37-item affiliate product list, i.e. commercial, not editorial |

All eight are competitors under `references/competitors.md`: read, never cited, never
linked, section order not mirrored. **There is no editorial incumbent on this SERP.**
An AI Overview fired, so the answer paragraph is written to be liftable standalone
inside the first 150 words and every H2 answers without its neighbours.

Secondaries served: `gift ideas for boyfriend long distance` (3x), `gift ideas for
boyfriend who is long distance` (3x), `best gift for boyfriend long distance` (1x) —
all carried in `keywords`, and answered by the five-format section rather than by a
separate list.

## Phase 2 — the gap, and the five posts I had to avoid

Read in full before drafting:

| Post | Ground it owns | How mine differs |
|---|---|---|
| `2026-09-03-gift-bf/romantic-gifts-for-boyfriend-long-distance` | LD gift **objects**, reciprocity trap, the flat reaction you will not see, crossing a border | Mine is not a gift list; the object is one of two halves and the section order is built on the clock, not on gift types |
| `2026-09-03-gift-bf/how-to-surprise-my-boyfriend-in-long-distance-relationship` | The LD surprise **act**: pick the hour, keep the secret, five surprise acts | Mine is not a surprise (an anniversary is known to both), and where it touches the hour it does so as arithmetic on a published offset, which that post does not have |
| `2026-09-03-gift-bf/anniversary-gift-for-boyfriend-2-years` | The year ladder 1→10, Emily Post 1922, the 1883 newspaper | No ladder, no convention history at all |
| `2026-09-03-gift-bf/anniversary-gift-for-boyfriend-unique` | "Unique" as a testable claim, novelty research | No novelty argument |
| `2026-09-03-gift-bf-2/anniversary-gift-for-boyfriend-1-year` | Year one as an information problem, 1881 *Our Deportment*, knowing-his-taste | No taste problem, no paper convention |

Also honoured mid-run: the anniversary-**surprise** sibling has taken the **ritual +
capitalisation** lenses (Sezer/Norton/Gino/Vohs, De Netto, Kashdan). I had been
considering a ritual/perceived-emotional-synchrony spine and **dropped it** to avoid
the collision. Zero heading overlap with any of the six.

**Angle:** an anniversary is a *shared* date — unlike a birthday it belongs to both of
you — so distance splits the **occasion**, not just the delivery. The post is built on
that split: a synchronous half that must fit inside the window where you are both awake
and both on the date, and an asynchronous half that is deliberately opened alone.

Fan-out sub-queries my H2s answer, in order: *what is different about an anniversary gift
when we are apart · when does the date actually start for each of us · how do I divide
the day · what formats can hold a joint date · which format lands on his date · does
distance itself damage the relationship · what happens when the plan fails.*

## Phase 3 — sources

Discovery route: **Crossref `query.bibliographic` → Unpaywall** (the productive route),
plus **DOAJ** article search and the **arXiv API**. OpenAlex and Semantic Scholar both
returned hard 429 (budget exhausted by earlier agents); no general web search engine was
usable — `lite.duckduckgo.com`, `html.duckduckgo.com` and `startpage.com` all returned
HTTP 202 challenge pages over plain `fetch`, and `bing`/`mojeek`/`searx` returned no
result links.

| # | Source | Subject test | Peer-reviewed | Open access | Read |
|---|---|---|---|---|---|
| 1 | `arxiv.org/abs/2505.09509` — *Partnership through Play*, ACM DIS 2025 | Pass — long-distance couples | Yes (DIS 2025) | Yes | Full text (PDF extracted) |
| 2 | `ubp.uni-bamberg.de/jfr/.../272` — Viry, Widmer & Kaufmann, *Journal of Family Research* 22(2) 2010 | Pass — couples separated for work | Yes | Yes | Full text (PDF extracted) |
| 3 | `data.iana.org/time-zones/tzdb/asia` — tz database `asia` file | Technical reference (the offset the post computes on) | n/a | Yes | Full file |
| 4 | `arxiv.org/abs/2309.11816` — VR loving-kindness meditation for LD couples, 2023 | Pass — long-distance couples | Preprint of a design study | Yes | **Abstract only** |

Verified claims, as used:

- **DIS 2025.** Diary study plus 60–75 minute semi-structured interviews with 13
  long-distance couples (26 individuals), required to live more than 50 miles apart;
  average age 25.2, together an average of 2.34 years (2 months to 8 years). Five
  couples had no time-zone difference; others reported differences of **up to 19 hours**
  (Philippines and the USA). The majority saw each other in person about once a month;
  two couples were "never mets". Diary entries used Hassenzahl et al.'s **six facets of
  connectedness**, in which **"Gift giving"** ("demonstrate caring and valuing my partner
  through reciprocal exchange") and **"Joint action"** ("carry an action out together")
  are *separate* items. 32 unique games named; Stardew Valley in 18.3% of entries.
  This is the load-bearing find: a posted gift and a joint act are not the same facet.
- **JFR 2010.** European JobMob survey, unweighted sample 2,914 partnered adults aged
  25–54 in France, Germany and Switzerland (weighted 2,188; 779 mobile). Result: **job
  mobility had no significant effect on conjugal quality**; lower conjugal quality
  "concerned mobile people who experienced decisions leading to mobility both negatively
  and collectively". Note the Crossref metadata for this DOI names the wrong first author
  (Uccheddu); the PDF's own running head is **Viry, Widmer & Kaufmann**, which is what the
  post and `citation` use.
- **tz database.** `Zone Asia/Kolkata … 5:30 - IST`, plus the comment "Since 1970 the
  following are like Asia/Kolkata: Andaman Is, Lakshadweep …, Nicobar Is" — one offset
  for the whole country. The post's "9.5 to 13.5 hours ahead of the mainland US" is
  arithmetic from that offset against US zones, and the post says so.
- **VR LKM 2023.** Workshops with couples, then a study comparing a VR prototype against
  an ordinary video-conferencing tool: sessions using **either** tool had a positive
  effect on the relationship, VR preferred for long-term use. Cited narrowly, and flagged
  in `honestAssessment` as the lightest claim on the page. **Abstract only — recorded.**

### Dead ends, named

- **No literature on the hour inside a romantic relationship.** Confirming the wave-1
  field note. Searched `time zone coordination couples`, `synchronous versus asynchronous
  communication closeness`, `synchronous asynchronous messaging closeness partners`,
  `abs:"couples" AND abs:"time zone"` (arXiv), `time zone difference communication
  couples` (DOAJ). Returns are distributed-work-team coordination (e.g. *Research Policy*
  2025, "Collaboration across the globe: Time zone differences and citations") or
  unrelated physics. The couples literature measures contact **frequency**, never the
  **local hour**. Said so in the body rather than padding.
- **No literature on relationship anniversaries as such.** `relationship anniversary
  celebration couples`, `wedding anniversary celebration practices`, `relationship
  anniversary temporal landmark milestone` and `relationship milestones commemoration
  memory couples` return institutional anniversaries and journal birthdays. Nothing usable.
- **No India-specific work on couple anniversaries or partner time allocation** was
  reachable — the same wall the anniversary-surprise sibling reported.
- **Couple-ritual literature is closed.** Bruess & Pearson 1997 (*Communication
  Monographs*), "The Influence of Intimacy Rituals and Biological Sex on Relational
  Quality" (2009) and the we-talk meta-analysis (10.1177/0265407518809547) are all
  closed with no repository copy per Unpaywall. Not cited from the abstract; dropped.
- **A ledger trap avoided.** DOAJ surfaced *I Imagine You Here Now* (2016,
  `tidsskriftet-nof.no`) on a fresh domain. It is a **Danish-language book review of
  Jurkane-Hobein's dissertation**, and the dissertation itself
  (`uu.diva-portal.org/…/diva2:786467`) is already cited by the wave-1 LD-surprise post.
  Citing the review would have been the "press release about a spent paper" trap in
  another shape. Dropped. The same author's `iiass.com` article is already used once
  in-batch by the Valentine's sibling — also dropped.
- **Hosts that refused plain `fetch`:** `nbn-resolving.org` (Anubis proof-of-work wall,
  which cost me the Rennung & Göritz synchrony meta-analysis), `econtent.hogrefe.com`
  (403), `www.scienceopen.com` (403), `shs-conferences.org` (403 on a PDF),
  `dl.designresearchsociety.org` (403 on the download CGI; landing pages resolve but to
  the wrong paper), `upu.int` (500 on every path tried).

### Cap discipline

Live scan of `content/batches/2026-09-03-gift-bf-2/blogs/` immediately before writing:
`pmc.ncbi.nlm.nih.gov` 3/3 **blocked**, `purehost.bath.ac.uk` 3/3 **blocked**,
`onlinelibrary.wiley.com` 2, everything else 1. **None of my four domains appears in
that scan at all** — `arxiv.org`, `ubp.uni-bamberg.de` and `data.iana.org` were each at
zero in-batch. No source URL of mine is on the spent-50 (parsed by section, not by
grepping the whole file). Publishers, not hostnames: arXiv (2 articles, 1 post),
Journal of Family Research, IANA — no publisher a sibling has used today.

## Phase 5 — internal links

Three, from the permitted five only, all after the value is established (inside and
after the five-format section, never in the opening):

- `/love-gf` — "1,001 created, 29.2% of everything made on SubhSandesh".
- `/darling` — "the fourth most-created of 15 page types at 349 pages and 10.2%".
- `/missyou-gf` — described by **function only** ("built for the gap between visits").
  **No count and no share attached**, and no general figure implied to be its.

`batchMeta.templateUrls` = `/missyou-gf`, `/love-gf`, `/darling`. `/bouquet-gf`,
`/templates` and every other slug avoided. `/apology-dashboard` deliberately not used —
this post covers no repair after a mistake.

## Phase 6 — audit

Item strings extracted programmatically from `publish-checklist.md` (wrapped lines
rejoined, whitespace collapsed): **50 items**. `passed` = 48, `failed` = 2,
`passed ∩ failed = ∅`, `|passed| + |failed| = 50`. Confirmed clean by the repo's own
`scripts/normalise-audit.mjs --check` ("50 items · 9 already clean · 0 need fixing ·
0 broken").

Failures, both structural and reported openly:

1. **"Paragraphs 2–3 sentences throughout"** — unsatisfiable under `page-structure.md`
   (Block 1's single ~150-word three-part answer paragraph; Block 3's four fields per H3
   in one run). Followed `page-structure.md` and failed the item with the conflict named.
2. **"Slug short, hyphenated, lowercase, no stop words"** — the assigned slug carries
   "for". Not fixable without breaking the keyword-slug match and the filename agreement.

Not a failure but disclosed here and in `honestAssessment`: source 4 was read in
**abstract only**, and two of four sources share `arxiv.org`.

## Compliance notes

- **Word count** 1,795 by `md.split(/\s+/).filter(Boolean).length`, FAQs excluded and
  absent from the body. **10 FAQs**, in `article.faqs` only; none duplicates an H2's
  meaning (the H2s are about the definition, the offset, the split, the formats, the
  comparison, the research and the failure modes; the FAQs are about celebrating twice,
  night shifts, link-versus-object, a late parcel, opening on a call, the length of the
  minute, him forgetting, passwords, what to write, and whether distance needs
  compensating).
- **Facts:** 6 lines quoted byte-verbatim with the `— measured 2026-09-03` suffix,
  straight apostrophes only; two of them (42.7% password-protection, 99.4%
  published-and-shared) sit inside the first 150 words. Primary fact deliberately varied
  from the neighbours' 7.2-hour and 50.2%-phone leads.
- **No price, cost, "free" or tier claim anywhere.** International shipping is discussed
  as **time, customs and risk**, qualitatively, with no number and no "free".
  `isAccessibleForFree` was removed from `structuredData` so the file contains no
  "free" token at all. The only "price" and "cost" strings in the file are inside a
  verbatim checklist item.
- **No first-party number is attached to recipient gender** anywhere.
- The post does **not** open with "why a digital gift beats a physical one", and does not
  assert that givers systematically mispredict what recipients want.
- `metaTitle` "Anniversary Gift for Boyfriend Long Distance — Two Clocks" is 57 chars,
  keyword **front-loaded at word one** (the rule is front-loading, not containment), one
  separator, no banned booster, no year stamp, differs from the H1 (63 chars).
  `metaDescription` 152 chars with a number; `excerpt` 274.
- `structuredData` additive only: an `ItemList` mirroring the five H3s in order, plus one
  `@id`-matched block on `<canonicalURL>#post` carrying `citation` (4 entries, mirroring
  `batchMeta.sources` one-to-one), `about` and `mentions`. Every `sameAs` paired with a
  Wikidata QID resolved through the Wikipedia API `pageprops.wikibase_item`:
  Q1406917, Q1062856, Q184303, Q604055, Q187176. No `AggregateRating`, `Review` or
  `HowTo`.

## Something in the brief that looks wrong

The brief's cap table and my instructions both frame `endlessdistances.com` as "the one
non-weak result", implying one editorial competitor to beat. Having read the wave-1
finding, the honest count is **8 of 8 commercial** — the SERP has no editorial page at
all, which is a stronger opening than "7 of 8 weak" states. Written up that way in
`honestAssessment`.

Second, smaller: the brief's advice to prefer "institutional repositories and regional
open-access journals" is sound in principle but two of the most promising repository
copies I found were unreachable (`nbn-resolving.org` behind a proof-of-work wall,
`dl.designresearchsociety.org` 403 on downloads). Preprint servers with an open API —
arXiv in particular — were the more reliable route for this keyword's literature.
