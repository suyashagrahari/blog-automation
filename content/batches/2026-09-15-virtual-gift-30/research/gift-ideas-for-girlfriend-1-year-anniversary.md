# Research brief — `gift ideas for girlfriend 1 year anniversary`

Batch: `2026-09-15-virtual-gift-30` (WAVE 2) · Slug: `gift-ideas-for-girlfriend-1-year-anniversary`
Market: India · Category: `digital-gifts-romance` · Compiled 2026-09-16

---

## Phase 1 — SERP analysis

Source: `SERPS-WAVE2.md`, `engine: ddg-html  region: in-en`. A genuine India SERP,
organic only. No own `serp.mjs` pass was run (BRIEF-WAVE2 §0).

```
 1. personalchic.com/blogs/gift-inspiration/...      20 Best 1 Year Anniversary Gifts for Girlfriend
 2. groovygroomsmengifts.com/blogs/news/...          44 Thoughtful 1-Year Anniversary Gifts for Her
 3. giftingwho.com/romantic-1-year-anniversary...    25 Most Romantic 1 Year Anniversary Gifts for Her
 4. etsy.com/market/1_year_anniversary_girlfriend_gifts
 5. casolia.com/1-year-anniversary-gift-ideas...     25+ Thoughtful 1-Year Gifts
 6. etsy.com/market/1_year_anniversary_gifts_for_girlfriend
 7. theknot.com/content/anniversary-gifts-for-girlfriend   41 Dating Anniversary Gifts
 8. groovygirlgifts.com/collections/1-year-anniversary-gifts-for-her
 9. theknot.com/content/1-year-anniversary-gift-ideas
10. giftlab.co/one-year-dating-anniversary-gifts-for-her/  25 Perfectly Thoughtful
```

**Gate 2 score: 3 of 10 are pure ecommerce** — Etsy market pages at #4 and #6, and a
Shopify collections page at #8. That is below the 5–7 band that got eight wave-2
rows cut and replaced, so the row legitimately survives. But the honest reading is
worse than the score:

- **Ten of ten results sell or list physical objects.** Three more (#1, #2, #5) are
  store-attached blogs whose listicles exist to move stock. #7 and #9 are editorial
  but affiliate-monetised.
- **Zero pages about a shareable or digital gift.** Zero research citations. Zero
  original numbers. No authoritative page of any kind.
- **Zero Indian results despite `kl=in-en`.** Compare `online gift for wife on
  anniversary` in the same file, which returns Amazon.in, Flipkart, Winni, IGP and
  Confetti Gifts. This phrasing is served entirely US retail, which says the query
  is commercially under-served locally rather than that Indian intent is absent.

**What that means for the ceiling.** The head term is physical-product dominated and
Etsy/The Knot hold authority this site will not match. Written up honestly in the
audit. The winnable ground is the residual intent — the searcher who has already
decided an object is not the whole answer, or who cannot post a parcel — plus the
long tail around *first* / *one year* / *dating* anniversary.

## Phase 1b — Cannibalisation and URL-overlap check (BRIEF-WAVE2 §3)

My row carries no `nearestLive`, but two anniversary siblings exist and both were
tested by URL overlap, as instructed.

**vs wave-1 `digital anniversary gift for girlfriend`** (published). Fresh in-en SERP
pulled with one `node scripts/serp-ddg.mjs` call:

```
giftfeels.com · amazon.in ×2 · aiskyla.com · giftoryy.com · lovepaper.app ·
etsy.com/market/anniversary_gifts_for_girlfriend · iloveyou.gift · cutiepage.in · lovelink.online
```

→ **0 of 10 URLs shared. 1 domain shared (etsy.com), on two different market URLs.**
Well under the 4/10 abort threshold.

**vs wave-2 `anniversary website for wife`** (published, `SERPS-WAVE2.md`):

```
alwaysyou.in · thegreeter.in ×2 · wishcupid.in · aiskyla.com ×2 · instamemory.in ·
wishify.io · lovlio.in · anniversary.keepsake.id
```

→ **0 of 10 URLs shared. 0 domains shared.**

**Outcome: DIFFERENTIATE, not abort.** The two SERPs are not merely non-overlapping,
they are different universes — the wave-1 sibling's results are 100% digital-gift
startups, mine are 100% physical-gift listicles and marketplaces. Google is treating
these as different queries with different result sets and different searchers.

**The split in one sentence:** the wave-1 post answers "what digital thing do I send
her and how do I curate it" for any anniversary; this post answers "it is our *first*
anniversary, I have exactly one year of material, we are not married, and I do not
know what this is supposed to cost." The wife post owns the marriage frame entirely
and none of its sources are reused here.

Cross-link placed to `/blog/digital-anniversary-gift-for-girlfriend` in the closing
section. Per BRIEF-WAVE2 §3 that blog cross-link is **not** counted against the 2–4
template-link rule and is **not** recorded as a checklist failure.

Slug availability checked against Strapi 2026-09-16:
`?filters[slug][$eq]=gift-ideas-for-girlfriend-1-year-anniversary` returned
`data: []` — free.

## Phase 2 — Gap analysis and fan-out

Every ranking page answers "which object?" Nobody answers the two questions a
one-year couple actually stalls on: **what have I even got after twelve months**, and
**what is this supposed to cost when there is no convention.**

| Sub-query | H2 |
|---|---|
| how is one year different from a long anniversary | Why a first anniversary is a different problem from a tenth |
| what do I even have to work with | What you actually have after twelve months |
| what goes on it | What actually goes on a first-anniversary page (5 × H3, mirrored as `ItemList`) |
| how much should I spend | How much to spend, and why nobody can tell you |
| page or a real present | A page against something she can hold |
| when is this a bad idea | When a page is the wrong first-anniversary gift |
| how do I send it | Sending it |

**Angle:** wins by being the only post in this SERP that treats the first anniversary
of a *dating* relationship as its own problem — one year of material, no marriage
frame, no price convention — rather than as a smaller wedding anniversary or a
longer gift list.

**Drift control (BRIEF.md §2).** No section lists jewellery, chocolates or hampers.
The physical option appears twice and only as an honest recommendation: "if she wants
a specific object, buy the object and stop optimising", and as a column in the
comparison table.

## Phase 3 — Sources

**Europe PMC outage (BRIEF-WAVE2 §1b): recovered.** A bare smoke test on 2026-09-16
returned **HTTP 200**, not the 503 the brief recorded, and full queries returned
results. It is noted here because the brief asked for the status either way. It was
ultimately of limited use: its index is biomedical enough that on-angle social-science
queries returned little whose landing page was on an unspent, non-blocked domain.
Crossref and DOAJ both worked; DOAJ only usefully with `bibjson.title:("…")`
field queries, since bare short queries match on unrelated fields. OpenAIRE worked
but its keyword matching is weak and it timed out once. OpenAlex was not attempted
(brief records a hard 429).

Search terms, phenomenon-first: `gift givers recipients value expensive gifts`;
`turning points development romantic relationship retrospective`; `first romantic
relationship young adults experience`; `thought that counts gift giving
thoughtfulness`; `experiential versus material gifts`; `temporal landmarks fresh
start effect`; `emerging adulthood romantic relationship India`.

**Rejected, and why — this is the part that mattered most this wave:**

- `spaceandculture.in/.../article/view/1667` (N=510 urban Indian emerging adults,
  18–25) was the single best India-market fit found. **Rejected: that exact URL is
  already used by `cute-website-for-boyfriend` and `online-propose-day-gift-for-girlfriend`,
  which puts it at the URL cap of 2.** The domain had one slot left but the URL did
  not. Searching the journal for any other on-angle article returned nothing.
- `rac.anpad.org.br/.../view/1372` (Silva et al. 2019, gift-giving and love styles
  among romantic partners, n=257). Legal on caps — one prior use, domain at 1 — but
  **rejected because it is already cited in `long-distance-gift-ideas-no-money` with
  substantially the same framing, so it would fail the swap test outright.**
- `animorepository.dlsu.edu.ph/apssr/vol15/iss1/8` ("Is it Really the Thought that
  Counts? The Deadweight Loss of Gift-Giving", APSSR 2015). Landing page fetched 200
  but carries **no abstract**, and the PDF download returns a 5.6 KB stub that
  `pdftotext` cannot extract. **Rejected under BRIEF.md §10: never cite a paper you
  could not open.**
- `revistaseletronicas.pucrs.br` (mate choice in adolescence, 467 Brazilian students)
  — fetched and read, but it is about partner *selection*, not anniversaries.
  Rejected on the subject test.
- Confirmed 403 / JS-stub and not cited: `tandfonline.com`, `sagepub.com`,
  `linkinghub.elsevier.com` (Heliyon GRAS scale), `link.springer.com` (BMC
  Psychology), `oed.com`, `taylorfrancis.com`. bepress repository `/do/search/`
  endpoints returned 403 across four institutions.
- Banned at cap and not used: `arxiv.org`, `pmc.ncbi.nlm.nih.gov`, `journals.plos.org`,
  `frontiersin.org`, `pewresearch.org`, `gsb.stanford.edu`, `ojs.zrc-sazu.si`.
- Sources belonging to the two anniversary siblings were read first and none reused:
  `open-research-europe.ec.europa.eu`, `tidsskrift.dk`, `soclabo.org`, `sciendo.com`,
  `journals.eanso.org` (wife); `eprints.soton.ac.uk`, `shura.shu.ac.uk`,
  `scholarworks.lib.csusb.edu`, `ouci.dntb.gov.ua`, `rte.ie` (wave-1 girlfriend).

### The three used

All three domains were at **zero** uses across all 60 posts before this one, checked
by parsing every `batchMeta.sources` array in `blogs/` at draft time. Each landing
page was opened with `ctx_fetch_and_index` and the cited claim read off it.

| # | Source | What it actually says | Date |
|---|---|---|---|
| 1 | `mountainscholar.org/items/db3ced93-…` — Perkins, Colorado State University | Interviews with 14 students aged 18–22; nine coding categories, second is "milestones, turning points, and firsts in relationships"; aligned with adult attachment literature except in technology use and self-concept development | 2016 |
| 2 | `sciscanpub.com/index/journals/ainfo/pc/8096.html` — *Psychology of China* 7(9) 1116–1120 | Experiment, **N = 144**: givers underestimate how moved recipients are by premium-priced gifts and substitute a regular-priced item at equal cost; recipients report significantly stronger gratitude for the premium one; prompting givers to think as recipients reduces the bias | 2025 |
| 3 | `journal.media-culture.org.au/…/view/1348` — Cardell, *M/C Journal* 21(2) | Pre-formatted diaries (almanac, pocket calendar) are the precursors of wearable trackers; the template itself coaxes and shapes what counts as a worthwhile record of a life | 2018-04-25 |

Three outbound links, at the bottom of the 3–6 band. Two pass the subject test
(1 and 2); both are scholarly and open access. **One swap-test failure is recorded
honestly in the audit** — source 3 would sit unchanged in any post about a page that
derives a story from data.

## Phase 4 — First-party facts

Three siblings (`anniversary-website-for-wife`, `digital-anniversary-gift-for-girlfriend`,
`romantic-website-for-girlfriend`) were checked before choosing, per BRIEF-WAVE2 §4.
The 40.6% password figure and the 6.2-hour edit gap are deliberately **not** used;
the 6.2-hour line was drafted into the comparison table and then removed.

Opening 150 words carry three: occasion-dated pages at **3.7%** of **4,357** (so the
platform is **96.3%** everyday — a genuinely counterintuitive fact for an anniversary
post), and **94.1%** published-and-shared (**4,098 of 4,357**). Later: **49.0%** of
shared pages opened on a phone, **11.5** average views per page, **3,377** creators at
**1.29** pages each, and **259** started-but-never-shared derived from the 94.1%.

Mandatory disclosure carried **in body prose**, not only the audit: the database
records which *template* was opened, not who received the page, so a page count does
not prove the recipient was a girlfriend.

**No pricing claim of any kind.** `facts.md`'s pricing block is empty; the post says
so explicitly and links `/templates` rather than inferring a figure. The keyword does
not contain "free" and the post never implies it.

## Phase 5 — Templates

Assigned by `WAVE2-PLAN.json`: `/capsule`, `/rewind`, `/loveflix`. All three kept —
no swap — plus `/templates` once near the closing CTA. Four template links, inside
the 2–4 rule; the blog cross-link sits on top and is excluded.

Descriptions were read from `app/lib/prompt.ts` before writing, not inferred:

- **`/rewind`** — "your year as a story you tap through, every number worked out from
  one date". A first anniversary supplies exactly one uncontested date and exactly one
  year. The honest caveat is written into the post: at twelve months the derived
  numbers are small (365 days, not 3,650), so the output reads neat rather than epic.
- **`/capsule`** — "you both write predictions about the next year, blind to each
  other; it seals, and a year later you open it together". Built around a one-year
  span, which is the span a first anniversary sits on; the payoff lands on the second
  anniversary.
- **`/loveflix`** — "browse the catalogue of your relationship, then play a branching
  episode". **The one genuine fit problem, and it is named in the body rather than
  hidden:** it wants a catalogue, and twelve months may not supply one. The post tells
  the reader to choose it on the year they actually had, and says a thin catalogue
  reads worse than a short page.

## Phase 6 — Verification

`node scripts/verify-batch.mjs content/batches/2026-09-15-virtual-gift-30` run at the
end. Per BRIEF-WAVE2 §7, only lines naming this slug were acted on, and all
source-cap findings were ignored regardless of which slug they named.
