# Batch brief — gift & surprise cluster, wave 2 — 2026-09-03

10 posts, ranks 12–20 of `content/keywords/2026-09-03-gift-gf-bf/shortlist.md` plus
two substitutes. **The sibling batch `2026-09-03-gift-bf` wrote ranks 1–11 earlier
today** — read its posts before you draft, because your first job is not to repeat them.

**Read these, in this order, before writing a word:**

1. This file
2. `.claude/skills/subhsandesh-blog/SKILL.md` — the workflow, Phases 0–8
3. `.claude/skills/subhsandesh-blog/references/` — page-structure.md,
   meta-and-titles.md, tone-and-links.md, research-sources.md, structured-data.md,
   publish-checklist.md, article-json-schema.md, competitors.md
4. `content/facts.md` — regenerated 2026-09-03
5. `content/batches/2026-09-03-gift-bf-2/USED-SOURCES.md` — **50 spent URLs, and read
   its warning about the two lists**
6. `content/keywords/2026-09-03-gift-gf-bf/serps.md` — your SERP is already measured
7. **`content/batches/2026-09-03-gift-bf/blogs/`** — the 11 sibling posts from wave 1

---

## Read this section even if you skip the rest — it is what wave 1 cost us

Wave 1's writers found **nine errors in my brief** and its remediators found three more
in the drafts. Everything below is a correction earned the hard way. Ignoring it repeats
work that has already been paid for.

### 1. Do NOT assert that givers systematically mispredict what recipients want

Four writers independently checked. Gino & Flynn 2011, Galak/Givi/Williams 2016,
Steffel & LeBoeuf 2013 and Yang & Urminsky are **all closed-access with no repository
copy** — unopenable, therefore unverifiable, and `research-sources.md` requires your
scholarly source to be open-access anyway. What *is* supportable is narrower and
instance-specific: a 2023 *Psychology & Marketing* paper frames its own result as "a
new instance in which givers' and recipients' preferences diverge". **State scope
precisely or leave it out.**

### 2. The `metaTitle` keyword rule is FRONT-LOADING, not containment

Two wave-1 posts failed `metaTitle 50–60 characters, exact keyword in the first five
words` on the belief that an 8-word keyword cannot fit inside five words. **That is a
misreading.** `meta-and-titles.md` says *"the exact target keyword in the first five
words, ideally at the very start"* — the test is where the keyword **begins**. Read as
containment the item would be unsatisfiable for every keyword over five words, and
the reference file's own worked example (`8 Miss You Ideas for a Long Distance
Relationship, Ranked`, a 7-word keyword starting at word two) would fail it. If your
keyword starts at word one and the title is 50–60 chars with one separator, **that item
passes.** It fails only on genuine length overflow.

### 3. `Paragraphs 2–3 sentences throughout` is unsatisfiable — fail it openly

Five wave-1 writers hit this. `page-structure.md` Block 1 is a single ~150-word
three-part answer paragraph, and Block 3 mandates four fields per H3. Both exceed three
sentences by construction. **Follow `page-structure.md`. Put the item in `failed` with
a `why` that names the rule conflict** — do not mangle the structure, and do not drop
the item.

### 4. Before calling a sourcing failure structural, try another endpoint and a browser

Three wave-1 "no source exists" failures were actually **unreachable URLs**:

- A dead Chronicling America endpoint became live at
  `https://www.loc.gov/collections/chronicling-america/?q=…&fo=json` — and yielded an
  1883 Dakota Territory newspaper that *beat* the claim it replaced.
- A PDF 404 was a **wrong galley id**; the landing page's own `citation_pdf_url` named
  the right one and returned the full 88-study meta-analysis.
- Wiley and SSRN Cloudflare interstitials **clear in a Chromium session** where plain
  `fetch` gets 403.

If a source 404s or 403s: check for a JSON endpoint, read the landing page's
`citation_pdf_url`, try a browser session, look for a repository or preprint copy, or
find the researchers' own university news office — one wave-1 post replaced a paywalled
abstract with Ohio State's news release, which carried a statistic the abstract never had.

### 5. USED-SOURCES.md has two lists and only one is a block

A wave-1 writer grepped the whole file, decided two of its best sources were spent, and
discarded the only India-specific paper it had found all run. They were in the
**one-slot-left** list. **Parse by section.** Only the 50 under "spent URLs" are blocked.

### 6. Count publishers, not hostnames

`doi.org` is a resolver. Wave 1 put four posts on Wiley while hostname counting saw
"doi.org 2, wiley 2" and passed. Resolve the DOI prefix before you count, and prefer a
publisher no sibling has used.

### 7. Relative internal links are fine

`[the animated "I love you" page](/love-gf)` is correct and preferred. Two wave-1 posts
were briefly misreported as having zero internal links because a checker only matched
absolute URLs. That is fixed; write relative paths.

---

## The measured finding this cluster rests on

All SERPs pulled on **real Google, `gl=in&hl=en`**, 2026-09-03. Every one is the same
shape: **a retailer-and-UGC wall with no editorial answer.** Across the 34 measured,
`pinterest.com` appears in 28, `reddit.com` in 22, `quora.com` in 14 — about **24% of
page-1 organic slots held by pages nobody edited.**

**Your rows are weaker still than wave 1's.** Two of you have **9 of 9 weak** — not one
editorial result anywhere. That is the strongest opening in the entire 30-keyword set.

**And a classifier caveat that matters to you:** my first pass scored unfamiliar Indian
gifting retailers as "strong" editorial. `confettigifts.in`, `jusst4you.com`,
`boontoon.com`, `zwende.com`, `boxupgifting.com`, `giftory.com`, `incrediblegifts.in`,
`showcity.in`, `surprisemachi.com`, `lovelydesign.in`, `qlovy.com`, `cherishx.com`,
`thezappybox.com`, `gifft.me`, `memento.com`, `chococraft.in`, `blacks.ca`,
`bookthesurprise.com` are **shops**, and every one is a **competitor** under
`references/competitors.md`: read them, never cite them, never link them, never mirror
their section order. `anncheshire.co.nz` is a New Zealand florist whose `/blog` 404s.
`endlessdistances.com` ranks a **37-item affiliate list with a discount code** — also
commercial. If a "strong" host looks like a shop, it is one.

**AI Overview fired on every SERP in this cluster.** So: the direct answer must be
liftable as a standalone paragraph inside the first 150 words, every H2 must answer in
2–3 sentences without its neighbours, and the sentence with a **number** in it is the
one that survives summarisation.

---

## Internal links — the same hard restriction as wave 1

**Use ONLY these five. Nothing else, however tempting.** All verified HTTP 200 today:

| URL | What it is |
|---|---|
| `/love-gf` | Romantic "I love you" page — **#1 page type, 1,001 created, 29.2% of all pages**, and most-viewed at 14,828 views (35.2%) |
| `/darling` | Dark, dramatic romantic page for a partner — **349 created, 10.2%; the 4th most-created of 15 page types** |
| `/birthday-gf` | Birthday surprise page for a partner — 258 created, 7.5% |
| `/apology-dashboard` | The all-in-one apology page — 753 created, 22.0% |
| `/missyou-gf` | "I miss you" page for a partner |

- **2–4 internal links**, from that list only, descriptive anchor text, placed **after**
  the section that establishes why the reader would want it — never in the opening.
- `batchMeta.templateUrls` = 1–3 of those five, as **paths** (`"/love-gf"`).
- **Do not use `/bouquet-gf`, `/templates`, `/dedication`, `/capsule` or anything else**,
  even though `TEMPLATE_LINKS` contains them and the schema would accept them.
- **`/missyou-gf` has NO first-party number** — it is not in the top-5 page types. Describe
  what it does; attach **no** count or share to it, and do not imply a general figure is its.
- `facts.md` calls `/birthday-gf` a page for "a partner"; `TEMPLATE_LINKS` says
  "girlfriend/partner". **Use "partner" in prose** — do not inherit "girlfriend" into a
  boyfriend post.
- `/apology-dashboard` only where the post genuinely covers repair after a mistake.
  **Do not bolt it on to reach the link count.**

---

## First-party facts — the moat, and three things it does not say

Quote lines **byte-verbatim** into `batchMeta.factsUsed`, including the
`— measured 2026-09-03` suffix. **Straight apostrophes only** — a curly `’` where the
file has `'` fails the verifier. **At least 3 per post, at least 2 inside the first 150
words.**

- 3,425 personalised pages created since 2026-03-12, across 15 page types
- `/love-gf` #1 — 1,001 created, 29.2%; most-viewed at 14,828 views (35.2%)
- `/bouquet-gf` #2 — 802 created, 23.4% · `/apology-dashboard` #3 — 753, 22.0%
- `/darling` #4 — 349, 10.2% · `/birthday-gf` #5 — 258, 7.5%
- 2,829 registered creators; 1.21 pages per creator
- 42,099 recorded views; 12.3 views per created page
- 50.2% opened on a phone (21,130 of 42,099); 50.4% on a touch device
- 42.7% password-protect before sharing (1,462 of 3,425)
- 99.4% of started pages are published and shared (3,405 of 3,425)
- Median first-save-to-last-edit: 7.2 hours, sampled on `/love-gf`, n=1,001

**Do not imply any of these:**

1. **No recipient gender is recorded.** Six of these ten posts target boyfriends and you
   have **zero** first-party evidence that boyfriend-directed pages get created. Never
   write "X% send this to their boyfriend" or anything implying it.
2. **The Pricing block is EMPTY.** **No price, no cost, no "free", no tier, no delivery
   fee** — not "free to create", not "costs nothing". The verifier greps for this.
3. **7.2 hours is sampled on `/love-gf` only**, n=1,001. Not a site-wide figure.

**Vary your primary fact from your neighbours.** Eleven wave-1 posts plus ten of yours
all leading on "50.2% open on a phone" is the content-farm signal.

---

## Sources — real research, and the caps

**4–6 sources**, of which **at least 2 pass the subject test** (genuinely about
gift-giving, romantic relationship maintenance, long-distance relationships, surprise
and anticipation, reciprocity, birthdays as temporal landmarks, or platform behaviour —
not "about India", not "about the internet"), and **at least 1 peer-reviewed AND
open-access**. At most **1** generic context statistic. Wikipedia 0–2, entity
disambiguation only, never counted as research — and note a wave-1 post failed this item
for using Wikipedia to source a *historical convention*.

**Search the phenomenon, not the keyword.** No literature exists on "surprise gift for
girlfriend instant". Plenty exists on: anticipation and savouring; hedonic adaptation and
why repetition dulls a gesture; birthdays as temporal landmarks; relationship-milestone
ritual; reciprocity and indebtedness; workplace-context gift norms; LDR maintenance.

**Caps: a URL in at most 2 of these 10 posts, a domain in at most 3.** Domain caps
**reset per batch**, so `pmc.ncbi.nlm.nih.gov`, `journals.plos.org` and
`frontiersin.org` are legal again despite hitting 3 in wave 1 — but eleven sibling posts
already lean on them, so prefer something fresher. **Check
`content/batches/2026-09-03-gift-bf-2/blogs/` before committing to a domain** — your
siblings are writing concurrently.

Fetch every source and verify it says what you claim. Never cite from memory. Never
invent a statistic or a date. `publishedDate` is when the **source** was published. If
only the abstract is readable, cite only what the abstract says **and record in the
audit that the full text was not read.** If no topical research exists for your angle,
**say so and name the search terms you tried** — that is a real finding, not a failure.

---

## Distinctness — the failure mode this batch is most likely to hit

Wave 1 achieved **134 distinct headings across 11 posts with zero near-duplicates**.
Match that. This repo already carries the counter-example: **12 live `/bouquet-gf`
product-term pages sharing one skeleton** (*why digital beats physical → step-by-step →
design tips → table → sharing → checklist*), now competing with each other.

- **Do NOT open with "why a digital gift beats a physical one."** Twenty-one writers have
  now been told this. It would be twenty-one identical intros.
- Your H2s come from **your own** Phase 2 fan-out sub-queries. **Read the sibling files
  and the wave-1 files, extract their headings, and check yours against both.**
- Your comparison table must compare something specific to **your** keyword.
- Two of you are on *her* birthday and *his* birthday; two on anniversary *surprises* vs
  anniversary *gifts*; two on "instant"/"at work". Read each other.

### Assignments, with the distinctness line each of you must hold

| Slug | Keyword | Weak | Category | Your territory — and what is NOT yours |
|---|---|---|---|---|
| `how-to-surprise-my-girlfriend-for-no-reason` | how to surprise my girlfriend for no reason | 4/8 | `modern-romance` | Wave 1 wrote the **boyfriend** version (occasion-absence, indebtedness, the "what did you do?" misread). Yours is 0.60 token overlap with it and shares `zenhabits.net`. **Do not restate it.** Your SERP is different — `romantic.ua`, `marriage.com`, `boontoon.com`. Find what genuinely differs when the recipient is a woman, in India, and if the honest answer is "not much", say that and build on the SERP gap instead. |
| `surprise-gift-for-girlfriend-instant` | surprise gift for girlfriend instant | **9/9** | `digital-gifts-romance` | **Zero editorial results — the best opening in the set.** "Instant" is the subject: what is actually achievable in minutes, and what is not. Secondaries include `surprise gift for girlfriend website` (8x) and `…link` (8x) — **product-shaped phrasings that name the mechanic SubhSandesh sells.** You may NOT state a price or say "free". |
| `how-to-surprise-my-gf-on-her-birthday` | how to surprise my gf on her birthday | **9/9** | `milestone-birthdays` | **Zero editorial results.** Note "gf" not "girlfriend" — that is the real phrasing. Yours is *her* birthday; a sibling has *his*. You share `cherishx.com` with them — coordinate. Birthdays as a fixed recurring date she cares about is the axis. |
| `romantic-gift-for-boyfriend-on-valentines-day` | romantic gift for boyfriend on valentine's day | 8/8 | `digital-gifts-romance` | **14 February is a fixed Gregorian date — safe to state.** Do not assert a 2027 weekday. Wave 1 wrote the *girlfriend* Valentine's day post AND the Valentine's *week* post — read both. Yours is the one aimed at **him**, which is the gap: the SERP is `caratlane.com` and `chococraft.in`, i.e. jewellery and chocolate aimed at women. |
| `how-to-surprise-my-boyfriend-on-his-birthday` | how to surprise my boyfriend on his birthday | 8/8 | `milestone-birthdays` | **This post absorbs a merged keyword.** `how to surprise your boyfriend on his birthday online` (3x) scored 0.75 against yours with two shared distinctive hosts, so it is one page, not two — **cover the "online / from a distance" angle as a section of your post.** `gifft.me` and `memento.com` rank there: digital-gift products holding that intent, which is proof the asset type can win. Secondary `…without spending money` (3x) — answer it **without naming a price**. |
| `anniversary-gift-for-boyfriend-1-year` | anniversary gift for boyfriend 1 year | 7/8 | `digital-gifts-romance` | **Wave 1's `anniversary gift for boyfriend 2 years` post already answers the year ladder 1→10, citing an 1883 newspaper that lists "second straw wedding" 39 years before Emily Post's 1922 list drops year two.** Read it first. Do **not** rewrite the ladder. Yours is the **first** anniversary specifically — the one year that *does* have a convention (paper), and the one where the couple is newest. |
| `how-to-surprise-my-boyfriend-on-our-anniversary` | how to surprise my boyfriend on our anniversary | 7/8 | `modern-romance` | Yours is the **surprise act**, not the gift object — three sibling/wave-1 posts own anniversary *gifts*. Note the top secondary is `how to surprise my girlfriend on our anniversary` (14x, higher than your head term) so serve both directions. `greetingsisland.com` and `boxupgifting.com` in this SERP are competitors. |
| `anniversary-gift-for-boyfriend-long-distance` | anniversary gift for boyfriend long distance | 7/8 | `miss-you-across-miles` | Wave 1 wrote `romantic gifts for boyfriend long distance` **and** `how to surprise my boyfriend in long distance relationship`. **Read both.** Yours is the intersection nobody covered: the **anniversary** specifically when you are apart — a shared date you cannot spend together. `endlessdistances.com` is an affiliate list, not editorial. |
| `gift-ideas-for-boyfriend-christmas` | gift ideas for boyfriend christmas | 7/8 | `digital-gifts-romance` | **25 December is fixed — safe to state.** 0.60 overlap with wave 1's hub post `romantic gift ideas for boyfriend`, zero shared distinctive hosts — differentiate on the occasion, not the gift theory. Christmas in India is a minority-community festival *and* a broadly-observed secular gifting moment; be accurate about which you mean. |
| `surprise-gift-for-girlfriend-at-work` | surprise gift for girlfriend at work | 6/8 | `digital-gifts-romance` | **Location is the subject**, and it is genuinely under-answered: a delivery to a workplace needs a reception contact, a desk she will actually be at, and colleagues who will see it. The embarrassment risk is real and no page in your SERP names it. A link she can open privately is a legitimate answer — say so without overclaiming. |

---

## Hard constraints

- **1,500–1,800 words in `contentMarkdown`, FAQs excluded**, measured by plain
  whitespace split (`md.split(/\s+/).filter(Boolean).length`). That is the authority;
  `wordCount()` in `app/lib/batches.ts` reads 20–40 higher.
- **8–12 FAQs** in `article.faqs` and the FAQPage JSON-LD **only — never in
  `contentMarkdown`.** No FAQ may duplicate an H2's meaning (checked on meaning, not
  string match: a wave-1 FAQ was flagged at 0.75 against its own heading).
- Exactly one H1; no skipped heading levels.
- `metaTitle` 50–60 chars (cap 70), keyword front-loaded (see correction 2), differs from
  H1, one separator, **no banned booster** (Best, Top, Ultimate, Complete Guide,
  Everything You Need to Know), no year-stamp on an evergreen title.
- `metaDescription` 150–160 (cap 170), leads with the answer, keyword near the start, at
  least one number, no CTA cliché. `excerpt` under 300. `keyTakeaways` 3–5, each
  standalone with a number where possible.
- **At least one section naming a downside, a limit, or where SubhSandesh is the wrong
  choice.** Not optional. A wave-1 post closed on a recipient who leaves her phone
  face-down, against the 50.2% phone-open share — that is the standard.
- `structuredData` is **additive only**: never re-declare `BlogPosting`, `FAQPage`,
  `BreadcrumbList`, `Organization`, `WebSite` or `Person`. Use an `@id`-matched
  enrichment block on `<canonicalURL>#post` carrying `citation` (mirroring
  `batchMeta.sources` one-to-one), `about` and `mentions`, plus an `ItemList` if the body
  ranks things. **No `AggregateRating`, `Review` or `HowTo`.** Verify every `sameAs`
  against the Wikipedia API with its Wikidata QID paired.
- `categorySlug` must be one of the 10 live Strapi slugs; yours is assigned above.
- **Namespace every scratch file `<slug>-<purpose>.md`.** The scratchpad is shared across
  all ten of you. In an earlier batch three agents overwrote each other's `body.md`
  mid-draft; in wave 1, namespacing is what let three agents resume after API 529s with
  no lost work. **The API has been unstable today — write your two files as soon as they
  are schema-valid, then refine in place.**

## Phase 6 audit — the part that gets faked

Run **every** item in `publish-checklist.md`. **Extract the item strings
programmatically and collapse whitespace — several items wrap across lines** and
retyping them produces a byte-mismatch that reads as a lie. Then assert:

- `passed ∩ failed = ∅`
- `|passed| + |failed| = 50`

A wave-1 post shipped an audit **short by one item**, which makes the whole report
untrustworthy; it had to be sent back. **Flag failures; never silently fix one and never
drop an item to flatter the count.** `honestAssessment` answers one question: *why would
an answer engine cite this over the pages in your SERP?* If the honest answer is "it is
better written", say the post is unlikely to outperform and name what would change that.

## This brief may still be wrong

Wave 1's writers found nine errors in mine. The two I am least sure of here:

1. **That Christmas in India is best framed as both a minority-community festival and a
   secular gifting moment.** I have not sourced that characterisation today.
2. **That a workplace gift delivery carries a real embarrassment risk worth writing
   about.** That is my inference from the SERP, not a sourced finding.

If you find a third, say so in your report — it is worth more than a clean run.

## Your deliverables

`content/batches/2026-09-03-gift-bf-2/blogs/<slug>.json` and
`content/batches/2026-09-03-gift-bf-2/research/<slug>.md`. **Touch no other blog's
files.** `curl`/`wget`/`WebFetch` are blocked — use `ctx_fetch_and_index` then
`ctx_search`, or `ctx_execute` with javascript `fetch`. WebSearch quota is exhausted.
