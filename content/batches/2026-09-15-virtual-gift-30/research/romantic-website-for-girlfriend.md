# Research brief — `romantic website for girlfriend`

Batch `2026-09-15-virtual-gift-30`, WAVE 2. Market: India. Evergreen.
Written 2026-09-15.

- **Primary keyword:** romantic website for girlfriend
- **Secondaries:** romantic website for gf · love website for girlfriend · love website for gf · love website for girlfriend free
- **Category:** `digital-gifts-romance`
- **Templates assigned and used:** `/love-gf`, `/darling`, `/dedication` (all three used, none swapped)
- **`nearestLive`:** none on this row — no cannibalisation gate ran.

---

## Phase 0 — data gate

`content/facts.md`, regenerated 2026-09-15. The gate needs 3 relevant facts with 2
inside the first 150 words. Comfortably met; this keyword is *about* the product,
so almost every line in the file is on-subject.

**Opening pair chosen deliberately.** BRIEF-WAVE2 §4 says wave 1 wore out the
40.6% password figure and the 6.2-hour edit gap. I counted them across the 30
wave-1 siblings before drafting:

| fact | siblings using it |
|---|---|
| 40.6% password-protect | 30 of 30 |
| 6.2-hour median edit gap | 30 of 30 |
| 94.1% published and shared | 29 |
| 49.0% opened on a phone | 29 |
| **most-viewed template: love-gf, 16,201 views, 32.4%** | **4** |
| **3,377 registered creators** | **7** |
| **1.29 pages per creator** | **7** |

So the post opens on 16,201 views / 32.4% plus 3,377 creators averaging 1.29 pages
each — the two least-used lines that are also the two most relevant to a "love
website" query. 40.6% still appears, but deep in the privacy section, where it is
the correct fact and nothing else in the file would do.

The **pricing block in `facts.md` is empty**, so the post refuses to quote a price
and says why, in its own H2. That is the honest handling of the
`love website for girlfriend free` secondary.

---

## Phase 1 — SERP analysis

### What I could not do, stated plainly

`WebSearch` is exhausted (200/200) and `WebFetch` is blocked. The sanctioned
replacement, `node scripts/serp.mjs "romantic website for girlfriend"`, **failed
on every attempt**: Brave returned HTTP 429 through all four of the script's
internal retries, on eight separate invocations spanning roughly 75 minutes, while
the batch's thirty concurrent agents shared one key. There is therefore **no
measured top-10 for this exact keyword, and no page in it was read.**

Consequences, carried into the audit:

- The checklist item *"The post contains at least one claim none of the top 5
  pages make"* is recorded as **failed**, not quietly passed.
- No Phase 1 comparison table of the top 5 exists, because there are no top 5.
- Nothing in the post paraphrases a competitor's structure, because no competitor
  page was opened.

### What the cluster evidence says instead

`BRIEF-WAVE2` §5 carries a measurement taken with the same script on 2026-09-15,
**`locale=us-served`**, for the sibling keyword `birthday website for girlfriend`:

| position | result |
|---|---|
| 1 | `github.com/nikitayadav19/HappyBirthdayGF` |
| 2 | yourlovepage.online |
| 3–6 | four Reddit threads (r/webdesign, r/learnprogramming, r/Gifts, r/TwentiesIndia) |
| 7 | yourlovepage.com |
| 8 | giftsqr.com |
| 9 | blink.new |
| 10 | TikTok |

Discount the positions — US-served, and a different keyword in the same cluster.
The *shape* is what transfers and it is unusually clear: no ecommerce, no Amazon,
no gift cards, no authoritative page of any kind, and the #1 result is a
repository you clone. India-geo phrasing evidence for the cluster lives in
`content/keywords/2026-09-15-virtual-gift-100/ac*/autocomplete.csv`.

**Treat this as inherited, not measured.** It is why the post's competitive claim
is flagged in the audit rather than asserted.

---

## Phase 2 — gap analysis

**Table stakes** (what any page on this query has to cover): what the thing is,
that you do not need to code, what to put on it, how to send it, whether it is
free.

**The gap.** Everything in the cluster answers *how to host it* — clone this repo,
use this builder, here is a Reddit thread about my boyfriend's birthday site.
Nothing answers *what to write on it*. The searcher's real problem is a blank
page, not a blank server.

**Second gap: the occasion.** The whole cluster is birthday-shaped, because
birthdays are the only reason people currently think to build one. SubhSandesh's
own data says the opposite is normal — occasion-dated pages are 144 of 3,894,
**3.7%**. The general romantic page *is* the majority case and nobody writes for
it.

**Stale data:** not assessable without the SERP.

**Fan-out sub-queries** → these became the H2s and FAQs:

| sub-query | where it is answered |
|---|---|
| what is a romantic website for a girlfriend | H2 2 |
| what do I put on it | H2 3 (five H3s + ItemList) |
| which template / which style | H2 4 (comparison table) |
| when should I send it / does it need an occasion | H2 5 |
| can I keep it private | H2 6 |
| is there a free one | H2 7 |
| when is this a bad idea | H2 8 |
| do I need to code, can I use my phone, will the link last, can I edit it, what if she doesn't reply | FAQs (10, none restating an H2) |

**Angle (one sentence, recorded as `batchMeta.angle`):** wins by being the only
post in this cluster that treats a romantic website as a letter for *interrupted
presence* — an ordinary night apart, not a birthday and not a long-distance
crisis — and specifies exactly what goes on the page, using 16,201 views across
1,125 `/love-gf` pages and the 96.3% of pages that carry no occasion at all.

### Sibling separation

Two wave-2 rows sit next to this one and neither existed in `blogs/` at drafting
time:

- `birthday website for girlfriend` — the dated, occasion post. This post sends
  that intent away explicitly, in the comparison table's last row and in H2 5.
- `cute website for girlfriend` — the playful/novelty register. This post stays on
  the sincere register and points the darker register at `/darling`.

**Neither could be linked**: internal links must resolve to `TEMPLATE_LINKS`, and
neither sibling is a template or a live Strapi article. Recorded in the honest
assessment as a gap for the orchestrator to close after publish.

---

## Phase 3 — sources

Tool route: `WebSearch`/`WebFetch` unavailable; discovery via the **OpenAIRE**,
**Crossref** and **DOAJ** public APIs from the sandbox, then every candidate
fetched directly and verified. OpenAlex and Semantic Scholar were both rate-limit
exhausted by other agents (OpenAlex returned "Insufficient budget", Semantic
Scholar 429 on every query).

Searched the phenomenon, not the keyword: `mediated intimacy romantic couples
technology`, `digital gift giving meaning`, `music sharing romantic
relationship`, `digital possessions attachment`, `romantic relationship
smartphone communication`, `love letter writing`, `gratitude expression romantic
partner`, `self-disclosure intimacy online communication`, `imagined audience
social media privacy`, `digital gifting platform`.

**Cap check before committing.** Counted all source domains across the 30 wave-1
siblings in `blogs/`. All five domains below are **new to the batch** (zero prior
posts). None appear on BRIEF-WAVE2 §1's banned list or its one-slot-left list.

| # | source | domain | subject test | scholarly / OA | read |
|---|---|---|---|---|---|
| 1 | Stanley, "The death of the letter?", *Cultural Sociology* 9(2):240–255, 2015 | `pure.ed.ac.uk` | letters, epistolary intent, interrupted presence | peer-reviewed, CC BY | full text |
| 2 | Vigl, Bamford, Fleckenstein & Saarikallio, "Music across the love-span", *Open Research Europe* 4:275, 2024 | `open-research-europe.ec.europa.eu` | music in romantic relationships, n=174 | peer-reviewed (3 approved, 2 with reservations), fully OA | full text (PDF) |
| 3 | Lapierre & Custer, "Testing relationships between smartphone engagement…", *Mobile Media & Communication*, 2020 | `repository.arizona.edu` | partner communication via phone, n=433 | peer-reviewed, green OA | abstract (repository record) |
| 4 | Orth, Thurgood & van den Hoven, "Designing Meaningful Products in the Digital Age", *ACM TOCHI* 26(5), 2019 | `research.tue.nl` | why digital things become meaningful | peer-reviewed; **full text paywalled at ACM** | **abstract only — disclosed in the body and the audit** |
| 5 | Goncalves, "Together yet Apart", MSc thesis, University of Guelph, 2016 | `atrium.lib.uoguelph.ca` | communication frequency ↔ satisfaction/intimacy, n=396 | scholarly thesis, OA | abstract in full on landing page |

**Generic context statistics: zero.** No PIB, no TRAI, no Census. **Wikipedia body
links: zero** (Wikipedia appears only as verified `sameAs` targets in
`structuredData`, which does not count against the body budget).

**Swap test — one honest failure.** Sources 1, 2 and 4 are tied to this post's
specific argument and could not move. Source 3 is arguable. **Source 5
(Goncalves) fails it**: a video-mediated-communication study of long-distance
relationships could sit unchanged in this batch's long-distance posts. It stays
because it carries the closing "talking to her beats one beautiful page" point,
and it is recorded as a failure rather than swapped out.

### Sources that were tried and rejected

- `arxiv.org` — "Understanding Digital Gifting Through Messengers Across
  Cultures" (2025, CSCW) is a near-perfect fit, but arXiv is **at the domain cap**
  (4 wave-1 posts). The ACM version is paywalled and blocked.
- `journals.sagepub.com`, `nature.com`, `onlinelibrary.wiley.com`,
  `dl.acm.org`, `ora.ox.ac.uk` downloads — all 403 or bot-challenged from this
  sandbox, as BRIEF §10 predicted.
- Orben & Dunbar 2017 (social media post intimacy) — the only OA copy is behind
  Oxford ORA's download challenge. Dropped rather than cited unread.
- `europepmc.org` — already in 5 wave-1 posts. Not touched.
- Nottingham's "From ephemerality to delicacy: digital gifting" thesis — repository
  returned 503/404 on every route. Dropped.

---

## Phase 4–5 — draft decisions

- **1,758 words** in `contentMarkdown` (plain whitespace split), FAQs excluded.
- **One H1, eight H2s, five H3s.** Every H2 carries a number, a date or a named
  source.
- **Comparison table** is entirely first-party: five page types, real counts and
  shares from 2026-09-15. Its last row exists to push birthday intent to the
  sibling post.
- **Internal links (4):** `/dedication` inside the song block, `/darling` and
  `/love-gf` under the table, `/templates` once in the pricing section near the
  close. All four resolve in `TEMPLATE_LINKS`.
- **Template descriptions were read in `app/lib/prompt.ts` before writing.**
  `/dedication` is described as a radio show where the recipient drags a needle
  through static and hears your recorded voice introduce a song — the post
  describes exactly that, not a generic "music page".
- **Pricing:** no figure anywhere. H2 7 says the facts file's pricing block is
  empty and links `/templates`.
- **Disclosure carried in body prose:** the 40.6% password figure is stated as a
  platform-wide rate, not a love-page rate, because the database records which
  template was opened, not who received it.
- `structuredData`: one `@id`-matched `BlogPosting` enrichment block on
  `…#post` with `about` / `mentions` / `citation` (mirroring the five sources
  one-to-one), plus one `ItemList` mirroring the five H3s in order. All four
  `sameAs` entities verified against the Wikipedia API with Wikidata QIDs paired:
  Personal web page Q2737701, Intimate relationship Q736922,
  Computer-mediated communication Q796573, Love letter Q1056617.
- Slug checked against Strapi — `romantic-website-for-girlfriend` returns `[]`,
  not taken. `digital-gifts-romance` confirmed against the live category list.

## Phase 6 — audit

50 items, `48 passed / 2 failed`, disjoint, asserted in the build script before
the file was written. The two failures are the missing own-keyword SERP and the
Goncalves swap-test failure, both described above and both left open with an
honest `why` rather than deleted.
