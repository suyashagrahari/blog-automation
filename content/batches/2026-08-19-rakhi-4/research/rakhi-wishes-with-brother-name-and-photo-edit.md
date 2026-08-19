# Research brief — `rakhi wishes with brother name and photo edit`

- **Batch:** `2026-08-19-rakhi-4`
- **Cluster:** C02 · transactional · tool · winnable · P80 · 300–900 EST
- **Slug:** `rakhi-wishes-with-brother-name-and-photo-edit` (verified free in Strapi)
- **Facts source:** `content/facts.md`, generated 2026-08-19. Phase 0 was run by the
  orchestrator; `npm run facts` was **not** re-run.
- **Festival date used as a fact-check, not a citation:** Raksha Bandhan 2026 falls on
  **Friday 28 August 2026**. No muhurat time is stated in the post, so no panchang source is cited.

---

## Siblings that existed when this post was written

Recorded per the brief's instruction.

| File | Status at write time | What it owns |
|---|---|---|
| `2026-08-18-rakhi-2/blogs/raksha-bandhan-wishes-with-name-and-photo.json` | existed | JPG-vs-link as a **format** choice |
| `2026-08-19-rakhi-3/blogs/write-name-on-happy-raksha-bandhan-photo.json` | existed | legibility, contrast, Devanagari mark positioning |
| `2026-08-19-rakhi-3/blogs/make-raksha-bandhan-card-online-with-name.json` | existed | the seven-step creation walkthrough |
| `2026-08-19-rakhi-4/blogs/happy-raksha-bandhan-wishes-with-name.json` | **existed** (only sibling present in this batch dir) | the name as a writing problem: vocative position, nickname vs kinship term, mail-merge seam |
| `2026-08-19-rakhi-4/research/25-raksha-bandhan-wishes-for-brother-who-lives-far-away.md` | research only, no blog JSON yet | the 25-item taxonomy |

Sibling source domains already spent (excluded here): `kops.uni-konstanz.de`,
`journals.rudn.ru`, `ijhssi.org`, `hindiurduflagship.org`, `emerginginvestigators.org`,
`ideas.repec.org`, `trialsjournal.biomedcentral.com`, `pmc.ncbi.nlm.nih.gov`, `doi.org`,
`inria.hal.science`, `w3.org`, `jdobr.es`, `ejournal.amikompurwokerto.ac.id`,
`learn.microsoft.com`, `hbs.edu`, `research.google.com`, `englelab.gatech.edu`, `wu.ac.at`,
`ics.uci.edu`. **No URL and no domain in this post appears in any sibling.**

---

## Phase 1 — What actually ranks

Two searches were run: the exact keyword, and `edit raksha bandhan card after creating change
name photo online editable`. Nineteen distinct results across the two.

**The single most useful finding: on this SERP the word "edit" does not mean "revise". It
means "fill in the blank once."** Every page that uses "edit" in its title or anchor text is a
one-shot name-and-photo generator. `mynameart.com`'s per-card call to action is literally
"Edit card", and it opens a form, not a revision history.

| # | Page (analysed, never cited) | Type | Where the answer is | Data cited | Format | What it optimises for |
|---|---|---|---|---|---|---|
| 1 | `mynameart.com/greeting-cards/raksha-bandhan` (fetched in full) | Template grid, ~25 cards each with an "Edit card" link | No answer paragraph at all; the page is a gallery | None | Card thumbnails, 1–2 sentence blurbs, no table, no FAQ, no byline | "raksha bandhan card with name" + long-tail card names. Copy still says **2024** in the H1 |
| 2 | `makephotoframes.com/p/happy-raksha-bandhan-rakhi-wishes-card-edit-name-and-photo` (fetched in full) | Single generator page, 12 sections of which most are cross-site nav | Upload widget above the fold | None | Nav-heavy, thin body copy, no table, no FAQ | Exact-match "edit name and photo" phrasing |
| 3 | `newmynamepix.com/happy-raksha-bandhan-wishes-greeting/2617` | Generator | Widget | None | Same pattern | Same |
| 4 | `adobe.com/express/discover/wishes/raksha-bandhan` | 40-wishes listicle + product CTA | Wishes list starts after a short intro | None | Long list, no table, no FAQ schema visible | "raksha bandhan wishes" head term |
| 5 | `canva.com/create/raksha-bandhan-cards/` | Template gallery + short explainer | Explainer after the gallery | None | Steps ("choose, personalise, download"), no revision content | "raksha bandhan card maker" |
| 6 | `igp.com/blog/happy-rakhi-wishes-for-brother/`, `fnp.com/quotes/raksha-bandhan`, `nestasia.in`, `boxupgifting.com`, `chocomanualart.com` | Quote lists attached to gift retail | Quotes, immediately | None | Very long lists | "rakhi wishes for brother" |

**How many results answer the query literally?** Zero. Not one page on either SERP discusses
changing a card after it exists — no order of operations, no editable-master concept, no
"I sent the wrong one" recovery, no way to reuse one design for two brothers. The keyword
contains the word "edit" and the entire SERP reads it as "create".

**AI Overview / featured snippet:** the search tool surfaced a synthesised summary that
listed generator sites and, for the second query, five "editors" — again all one-shot. Nothing
in it addressed revision.

---

## Phase 2 — Gap analysis

**Table stakes** (must be present or the post looks incomplete): what "editing a rakhi wish with
a brother's name and photo" means; that names and photos are swappable; that the result gets
sent on WhatsApp; that Raksha Bandhan 2026 is Friday 28 August 2026; that there is a free way
to do it.

**The gap — four sub-questions the whole SERP dodges:**

1. **Order of operations.** Nobody says what to change first. Text before layout before colour,
   because each pass invalidates the work downstream of it. The trap nobody names: perfecting the
   design while the words are still in flux.
2. **Editable master vs flattened export.** A downloaded JPG is terminal — it cannot be edited
   back into its parts. A project file or a live page can. This is the difference between next
   year being a five-minute swap and a rebuild, and no page on the SERP mentions it.
3. **One design, several brothers.** Every generator assumes one card, one recipient. Nobody
   covers duplicating a finished design for a second and third sibling — or the failure mode that
   workflow invents: sending brother A's version to brother B.
4. **Recovery after sending.** Absolutely nothing on this SERP tells you what is recoverable. A
   live page is; a JPG that has been forwarded, or screenshotted, is not.
5. **When to stop.** Version fatigue is not mentioned anywhere, on any page.

**Stale data:** the incumbent generator pages carry no data at all, and `mynameart.com` still
year-stamps its H1 **2024**. There is no statistic on this SERP to supersede — which is itself
the opportunity, because a page with real numbers is uncontested here.

**Fan-out sub-queries** (each became an H2 or an FAQ):
can I edit a rakhi card after I have sent it · how do I change the name on a rakhi photo I already
made · can I reuse the same rakhi design for two brothers · what should I change first · can I edit
a JPG after downloading it · what happens if I send the wrong brother's card · how do I delete a
rakhi message I sent on WhatsApp · how many times should I edit a greeting · will editing a shared
link break it · how do I keep the design for next year.

**Angle (recorded as `batchMeta.angle`):**

> Wins by being the only post on this SERP that reads "edit" as *revision of something that
> already exists* rather than as a synonym for "create" — an order of operations for the second
> and third pass, the editable master versus the flattened export, one design retargeted to
> several brothers, and an honest account of what is recoverable after sending — grounded in a
> median 6.9-hour gap between a page's first save and its last edit (n=914) and a 99.4%
> publish-through rate, neither of which any generator on this SERP can publish.

---

## Phase 3 — Sources (all fetched and read; text verified)

Research lane: **revision and editing behaviour, surface vs deep revision, error recovery and
undo in interactive systems.** Search terms used: `revision strategies student writers experienced
writers`, `surface revision versus meaning revision taxonomy`, `undo error recovery interactive
systems open access`, `regret after posting deleting content study`, `parallel versus serial
prototyping iteration fixation`, `misdirected email wrong recipient study`, `revision depth
diminishing returns text quality`.

| # | Source | Verified claim | Published | Test |
|---|---|---|---|---|
| 1 | `files.eric.ed.gov/fulltext/ED220839.pdf` — Nancy Sommers, *Revision Strategies of Student Writers and Experienced Adult Writers* (ERIC ED220839, NIE report; 8 freshmen + 7 experienced adult writers) | Four revision operations (deletion, substitution, addition, reordering) across four levels (word, phrase, sentence, thema). For the student group, **140 of 333 changes were substitutions and 143 were deletions**, and **only 10 of 333 changes happened at the thema level** — the level of the whole idea. Text verified from the extracted PDF (pp. 42–44, and the Table 11 discussion). | 1982-06-12 | subject ✔ scholarly ✔ swap ✔ |
| 2 | `hci.stanford.edu/publications/2010/parallel-prototyping/ParallelPrototyping2010-final.pdf` — Dow, Glassco, Kass, Schwarz, Schwartz & Klemmer, *Parallel Prototyping Leads to Better Design Results, More Divergence, and Increased Self-Efficacy*, ACM TOCHI 17(4), Article 18 | 33 novice designers each made five prototype ads plus a final ad. Ads made in the parallel condition significantly outperformed the serial condition on live click-through: overall CTR **0.0424% (424 clicks per million impressions)**, and the **top two CTRs were both parallel ads at 735 and 578 clicks per million**. At the matched-impressions stage, parallel had 44 clicks on 79,800 impressions vs serial 26 on 79,658 (χ²=4.60, p<0.05). The paper's own framing: iteration "can also give rise to fixation, continuously refining one option without considering others." | 2010-12-01 | subject ✔ scholarly ✔ swap ✔ |
| 3 | `hal.science/hal-03630474v1/document` — Francis Jambon, *Error Recovery Representations in Interactive System Development*, 3rd ERCIM Workshop "User Interfaces for All", pp. 177–182 | Distinguishes **backward error recovery** (restoring the previous system state — undo, cancel, stop; "the only real recovery function", because the effects of the error are totally removed) from **forward error recovery**, where "the user has to execute unexpected tasks to recover the fault" and "the final result is non-optimal" — illustrated with the broken plate you can only glue. Also: undo is the most famous and "also the most complex" recovery command. | 1997-11-03 | subject ✔ scholarly ✔ swap ✔ |
| 4 | `cups.cs.cmu.edu/soups/2011/proceedings/a10_Wang.pdf` — Wang, Norcie, Komanduri, Acquisti, Leon & Cranor, *"I regretted the minute I pressed share": A Qualitative Study of Regrets on Facebook*, SOUPS 2011 | Findings drawn from interviews, diaries and surveys with **569 American Facebook users**; **66 of 321 survey respondents (21%)** reported a first-party regret. "Perhaps the most frequent strategy we observed was simply deleting problematic posts. However, by the time a user deletes a post it may be too late to avoid a negative consequence if the post has already been viewed by other users." | 2011-07-20 | subject ✔ peer-reviewed ✔ swap ✔ |
| 5 | `faq.whatsapp.com/1370476507114859` — WhatsApp Help Center, *How to delete messages* | In WhatsApp's own words: Delete for Everyone is "particularly useful if you sent a message to the wrong chat or if the message you sent contains a mistake"; deleted messages are replaced with "This message was deleted"; **"Recipients might see your message before it's deleted or if deletion wasn't successful"** and **"You won't be notified if deleting for everyone wasn't successful."** No publication date on the page, so `publishedDate` is omitted. The page is client-rendered; content was extracted from the server payload. | (none published) | subject ✔ platform behaviour ✔ swap ✔ |

**Deliberately not cited:** `dl.acm.org/doi/fullHtml/10.1145/3290605.3300520` (CHI 2019, *"Wait, Do
I Know This Person?": Understanding Misdirected Email`) — returned **HTTP 403**, so it is not
cited even though it is the best available evidence on wrong-recipient sends. The ACL 2022
IteraTeR revision-depth paper was rejected because its only two hosts (`arxiv.org`,
`aclanthology.org`) are both on the batch ban list. **No exact time window for WhatsApp's
Delete for Everyone is stated in the post**, because the official Help Center page did not state
one in the text I could read and every third-party figure came from an uncitable blog.

**Zero generic context statistics** (no PIB, TRAI, Census or MEA). **Zero Wikipedia body links** —
`en.wikipedia.org` is banned outright in this batch; Wikipedia appears only inside
`structuredData` `sameAs` pairs, which are entity identifiers rather than citations.

---

## First-party facts used

1. `Median gap between a page's first save and its last edit: 6.9 hours — sampled on "I love you" page (/love-gf), n=914 — measured 2026-08-19` — the load-bearing one: direct evidence that people return and revise.
2. `99.4% of started pages are actually published and shared (2,722 of 2,739) — measured 2026-08-19`
3. `2,739 personalised pages created since 2026-03-12, across 13 page types — measured 2026-08-19`
4. `44.3% of creators password-protect their page before sharing it (1,213 of 2,739) — measured 2026-08-19`
5. `51.8% of shared pages are opened on a phone (17,101 of 33,007 views) — measured 2026-08-19`
6. `Average views per created page: 12.1 — measured 2026-08-19`

**Stated limits.** There is **no rakhi-specific first-party fact** — rakhi is not one of the 13
page types, and the 6.9-hour edit gap is sampled on `/love-gf`, not on a rakhi page. The post says
so in the body rather than implying a rakhi measurement. These platform-wide figures pass the
subject test for "revising and re-sharing a personalised greeting" but they would fail a swap test
against other posts in this batch, which is recorded in `honestAssessment`.

---

## Strapi targeting

- `categorySlug`: **`family-and-continuity`** — the post is about a sibling relationship and about
  keeping a card reusable year to year, not about the festival's ritual. The corpus is already
  heavily `festive-beats`, and the three C02 siblings all took `festive-beats`; the name sibling in
  this batch took `family-and-continuity`, and this post has the stronger continuity claim of the two.
- `templateUrls`: `https://subhsandesh.in/happy-rakshabandhan-to-brother` (the only rakhi template
  in `TEMPLATE_LINKS`, brother-first, which suits this keyword exactly) and
  `https://subhsandesh.in/templates`.
- No `/rakhi` URL exists and none was invented.
