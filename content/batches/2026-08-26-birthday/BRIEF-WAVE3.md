# Wave 3 brief — 2026-08-26-birthday, the final 10

Read `BRIEF.md` for the general rules and `BRIEF-WAVE2.md` for the four corrections that
still apply (per-batch source cap, `wordCount()`, language-blocker mapping, lane
discipline for general sources). **Where any of them disagree with this file, this file
wins.**

This wave writes the last 10 of the 30. It includes the two keywords that were held on
the Phase 0 gate in waves 1 and 2 — `birthday date personality test` and
`birthday decoration ideas at home`. **They are no longer held.** Section 1 explains
why: a new first-party measurement now exists that gives both of them a real spine.
Nobody overrode the gate.

---

## 1. NEW first-party data — this is the wave-3 differentiator

A second read-only probe of `birthdaygfpages` was run on **2026-08-27**. The collection
has grown to **209 birthday pages**, and **182 of them carry a recorded birthday date**.
That date field was never measured in waves 1 and 2. It is the strongest fact in the
batch and it is new:

### Lead time — how long before the birthday people actually make the page

Measured as the recorded birthday minus the page's creation date, n=182:

| Measure | Value |
|---|---|
| **Median lead time** | **0 days** |
| p25 / p75 | 0 days / 1 day |
| **Created on the birthday itself** | **91 of 182 — 50.0%** |
| Created on the day or the day before | 114 of 182 — 62.6% |
| Created within 3 days | 122 of 182 — 67.0% |
| Created within 7 days | 128 of 182 — 70.3% |
| **Created *after* the birthday had passed** | **23 of 182 — 12.6%** |

> **Use this. It is the wave-3 spine and it beats the 96-character fact for most of these
> keywords.** Every page you are competing with is a "150+", "250+", "750+" listicle,
> which silently assumes the reader has time to browse and pick. Half of them do not:
> they are doing this on the day, on a phone, with the party already happening. A post
> that is organised around *how much time the reader has left* is saying something none
> of the ten ranking pages says. Lead with the number.

Still true and still usable from `BRIEF.md`: median personal message **96 characters**
(n=197), median build **0.9 hours**, **50.5%** finished inside the hour, **48.6%** mobile,
quiz built on 98.5% of pages but played on only **14.4%**.

### The numerology measurement — for ranks 2 and 24 only

Numerology's "birth number" (*mūlānk*) is the day of the month reduced to a single digit.
That is computable from the 182 recorded dates, so it was computed:

| Birth number | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|
| Pages | 20 | 24 | 19 | 13 | 19 | 20 | **29** | 21 | 17 |
| Share | 11.0% | 13.2% | 10.4% | 7.1% | 10.4% | 11.0% | **15.9%** | 11.5% | 9.3% |

**χ² against a uniform day-of-month = 14.53 on 8 df. The critical value at p=.05 is
15.51, so the distribution is NOT significantly different from chance.** The same test on
two independent cuts agrees: the 56 rows carrying a plausible year of birth (1990–2012)
give χ²=14.07, and the 126 rows where the year is the upcoming occurrence give χ²=5.24.
Both are non-significant.

**The claim you may make:** across 182 real birthday dates entered by Indian users, the
nine numerology birth numbers occur at rates indistinguishable from chance — 7 is the
most common at 15.9% and 4 the least at 7.1%, but that spread does not clear
significance. This directly answers two questions Google itself lists under this SERP
("Which birthday number is lucky?", "What is the rarest birthday number?") with a
measurement rather than an assertion.

**The limitation you MUST disclose, in the body and not only in the audit:**

- Days 1–15 hold only **28.0%** of the dates where 48.4% would be expected. This skew
  **persists in the clean year-of-birth subset (32.1%, n=56)**, so it cannot be blamed
  on product launch timing alone and is not understood.
- Only **56 of 182** rows carry a plausible year of birth; in 126 the year is the coming
  occurrence, so this is a sample of *birth days and months*, not of full birth dates.
- **32 of 182 (17.6%)** have a recorded birthday identical to the page's creation date.
- n=182 supports the aggregate uniformity finding. It does **not** support any claim about
  an individual number. Do not rank the numbers, do not call 7 "the most common Indian
  birth number", and do not build a table that invites that reading.

**Do not assert that numerology works, and do not assert that it is worthless.** Report
what people believe, sourced; report what was measured; let the two sit side by side. A
post that says "here is the traditional meaning of each number, and here is our own count
of 182 real birth dates showing the numbers arrive at chance rates" is citable. A debunk
is not what the searcher asked for, and an endorsement is not something the data supports.

### What still does not exist

There is no per-relationship, per-language or per-region birthday data, and nothing at all
about physical decoration, room setup, balloons or cost. If your angle needs it, **record
a structural audit failure naming what you needed.** Do not invent it and do not
substitute a government statistic.

---

## 2. Your keywords, and the specific trap in each

Full India-localised SERPs are in `ASSIGNMENTS-WAVE3.json` — harvested in a real browser
at `gl=in` on 2026-08-27. **WebSearch is exhausted (200/200) and errors if called.**
Phase 1's "who ranks 1–5" is answered for you; do not re-run it.

**Clustering was checked across all ten on shared results with aggregators excluded: no
pair shares 3+ results. All ten are genuinely distinct keywords.** (A first pass compared
*domains* and flagged four false merges — goodhousekeeping, recocards and floweraura each
rank a *different article* per relation. That is not one keyword; it is a niche that
writes one page per relation, exactly as we are.)

### Cannibalisation — read this before choosing an angle

181 birthday posts are live and this batch has added 20 more. Four of you have a direct
conflict:

- **`birthday wishes for uncle`** — **`birthday-wishes-for-chachu` is already live.**
  Chachu is one specific uncle: father's younger brother. The English query spans
  *chacha, tau, mama, mausa* and *fufa*, which are five different relations with
  different expected registers. **That distinction is your angle and it is a real gap** —
  no page in your SERP makes it. Do not write a sixth generic uncle listicle, and do not
  re-cover chachu.
- **`birthday wishes for sister in law`** — **`birthday-wishes-for-bhabhi` is already
  live.** Bhabhi is the brother's wife. The English term also covers *nanad* (husband's
  sister), *jethani* (husband's elder brother's wife) and *devrani* (younger brother's
  wife) — and note that **3 of your 9 results are about a *sister*, not a sister-in-law**
  (boxupgifting #4, goodhousekeeping #5, countryliving #9). Google is padding the SERP
  because it cannot fill it. Same shape of angle as uncle; coordinate by not duplicating
  each other's framing.
- **`birthday wishes for niece`** — **`birthday-wishes-for-nephew` was written in wave 1
  of this batch** and it consumed the avuncular-relationship research (Lane E, plus
  `europepmc.org` and `pure.uva.nl`, each now at 2 of 3 posts). **Do not write the nephew
  post with the nouns changed.** Your lane is different (see below) and your angle has to
  be too. Read `blogs/birthday-wishes-for-nephew.json` first.
- **`50th birthday wishes`** — **`50th-birthday-invitation-template` is live.** That page
  is an invitation template; yours is the message. Different intent, but link nothing to
  it and do not restate it.

`birthday-wishes-in-hindi`, `-tamil`, `-telugu`, `-gujarati`, `-punjabi` and `-urdu` are
all now written in this batch. **Bengali and Kannada: read at least two of them before
drafting.** Six sibling language posts already exist; the seventh and eighth cannot be
the same post in a new script.

### The decoration post — a correction you need

The wave-2 shortlist said of this keyword: *"photojaanic and vaaree prove a blog ranks."*
**The 2026-08-27 harvest falsifies that. Neither domain appears.** The live SERP is 7
results: 3 Pinterest boards, 1 YouTube video, and 3 commercial decoration services
(cherishx "in Bangalore", balloondekor, 7eventzz "from ₹1399 | Same-Day Setup"). It is the
only keyword in the wave with **no AI Overview** and **no informational article ranking at
all**.

Read that honestly. It is a weak SERP, which is why the keyword scored well — but it is
weak because the intent is **images and same-day service**, not reading. A text post is
fighting the intent, not just the incumbents. Your first-party warrant is real (50%
same-day, 62.6% within a day, and 7eventzz is selling *same-day setup* into exactly that
behaviour), so the post is worth writing — but **record the intent mismatch as an audit
failure under the conversion item unless you can genuinely close it.** Do not write
"this post will rank because the competition is weak". The competition is weak *and* the
format may be wrong, and both belong in the honest assessment.

---

## 3. Source lanes

The required scholarly source must come from your lane. General sources may come from
anywhere that passes the subject test, the swap test and the caps.

| Lane | Territory | Assigned to |
|---|---|---|
| **G** | Ageing, midlife, round-number and milestone birthdays, life-course transitions | `50th-birthday-wishes` |
| **H** | Numerology and number superstition as cultural practice; belief in lucky numbers | `birthday-number-meaning-numerology` |
| **I** | Barnum/Forer effect, validity and replication of date-based personality claims | `birthday-date-personality-test` |
| **J** | In-law relationship quality, saas–bahu dynamics, affinal tension and warmth | `birthday-wishes-for-mother-in-law` |
| **K** | Kinship *terminology* — semantics of affinal terms, address vs reference | `birthday-wishes-for-sister-in-law` |
| **L** | Gendered address and expectation toward girl children in family communication | `birthday-wishes-for-niece` |
| **M** | Terms of address and honorific register for senior male kin | `birthday-wishes-for-uncle` |
| **N** | Bengali script, orthography and Bangla digital text | `birthday-wishes-in-bengali` |
| **O** | Kannada script, orthography and Dravidian script rendering | `birthday-wishes-in-kannada` |
| **P** | Household ritual labour, home-made vs bought celebration, domestic space | `birthday-decoration-ideas-at-home` |

**H and I are adjacent — keep them apart.** H is what the practice *is* and who believes
it; I is whether date-based personality claims *hold up*. Neither should cite the other's
core paper. Same for **J and K**: J is the relationship, K is the vocabulary.

### Two reservations, first-come does not apply — these are assigned

- **`corpora.uni-leipzig.de` (1 slot left) is reserved for `birthday-wishes-for-uncle`.**
  Kin-term frequency in a Hindi corpus (चाचा / ताऊ / मामा / मौसा / फूफा) is the natural
  original measurement for that post, the way the teacher post measured the honorific
  ladder. Nobody else may take it.
- **`r12a.github.io` (1 slot left) is reserved for `birthday-wishes-in-kannada`.**
  Bengali: find something else, and do not assume an obscure venue is free — measure.

### In-batch position after 20 posts — 83 domains, 93 URLs, nothing at cap

**One slot left (already in 2 posts):** `ccsenet.org` · `corpora.uni-leipzig.de`
(reserved) · `europepmc.org` · `journals.openedition.org` · `journals.rudn.ru` ·
`pmc.ncbi.nlm.nih.gov` · `pure.uva.nl` · `r12a.github.io` (reserved)

**Spent URLs — do not reuse:** `corpora.uni-leipzig.de/en` ·
`journals.rudn.ru/linguistics/article/view/26001`

Everything else in the batch sits at 1 of 3. Measure before you cite:

```bash
python3 - <<'PY'
import json,glob,os,collections
dom=collections.defaultdict(set); url=collections.defaultdict(set)
for p in glob.glob("content/batches/2026-08-26-birthday/blogs/*.json"):
    j=json.load(open(p)); s=os.path.basename(p)[:-5]
    for x in (j["batchMeta"].get("sources") or []):
        u=(x.get("url") or "").split("?")[0]
        if "://" in u: dom[u.split("/")[2].replace("www.","")].add(s); url[u].add(s)
for d,v in sorted(dom.items(), key=lambda x:-len(x[1])):
    if len(v)>=2: print(len(v), d, sorted(v))
print("URLs at 2:", [u for u,v in url.items() if len(v)>=2])
PY
```

**Run it from the repository root.** The shell's working directory is not guaranteed —
this is not hypothetical, the orchestrator lost a `cd` during setup and silently created a
stray nested `content/` tree before catching it.

### API pacing — a wave-2 failure to avoid

Five concurrent wave-2 agents exhausted the shared OpenAlex and Semantic Scholar budgets
and several hit **429**. This wave runs in **two groups of five**. Within your group:
space requests to those two APIs by a second or more, back off on a 429 rather than
retrying immediately, and prefer an institutional repository or a publisher page over an
aggregator API when either will answer the question. Do not sit in a retry loop.

---

## 4. Standing rules — unchanged, and all still binding

- **Phase 0 is satisfied** by section 1. Use **≥3 first-party facts, ≥2 inside the first
  150 words**, and prefer the birthday-specific numbers over the site-wide ones.
- **`WebFetch` is blocked. Use `ctx_fetch_and_index`**, then `ctx_search`. Shell through
  `ctx_execute`. Never `curl` or `wget`. Never `WebSearch`.
- **Read full text, not abstracts, wherever the full text is reachable.** Wave 1 caught
  two real citation errors this way — a gratitude study cited as n=196 is n=164, and an
  eye-tracking paper's abstract says 44 participants where its Methods say 50 per group.
  Record explicitly when only an abstract was readable.
- **`publishedDate` is when the source was published, never when you fetched it.** If a
  living document states no date, carry it as `dateModified` and say so in the audit.
- **Scratch files must be named `<slug>-<purpose>.md`.** The scratchpad is shared.
- **Never cite or link a competitor**, including every domain in your SERP block.
- At most **1 generic context statistic** (PIB / TRAI / Census / MEA) per post.
- FAQs live in `article.faqs` + FAQPage JSON-LD **only** — never in `contentMarkdown`.
  8–12 of them. The body must reach length without them.
- **1,500–1,800 words by `wordCount()`. Target ~1,770.** Measure with exactly this:

```bash
node -e "
const fs=require('fs');
const j=JSON.parse(fs.readFileSync('content/batches/2026-08-26-birthday/blogs/<SLUG>.json','utf8'));
const md=j.article.contentMarkdown;
console.log(md.replace(/\`\`\`[\s\S]*?\`\`\`/g,' ').replace(/[#>*_\`|\-[\]()!]/g,' ').split(/\s+/).filter(Boolean).length);
"
```

- `batchMeta.categorySlug` = **`milestone-birthdays`**. Template URLs only from
  `TEMPLATE_LINKS` in `app/lib/prompt.ts` — never invent a slug.
- Audit: all **50** items, `passed ∩ failed = ∅`, `|passed| + |failed| == 50`, every
  string **verbatim** from `references/publish-checklist.md`, **never a placeholder**,
  `honestAssessment` real prose and never "TBD". Process limitations go in
  `honestAssessment`, not `failed`.
- **Check each `failed` entry's `why` describes its own item.** One wave-1 post had all
  three entries paired with the wrong item's `why`, so three items falsely passed while
  three real failures sat in `passed`. Sums and disjointness were both correct, which is
  exactly why nothing caught it.

### Bengali and Kannada — the language blocker

Map the native-verification blocker to exactly this checklist item, verbatim:

> The post contains at least one claim none of the top 5 pages make

Record it as **structural**, with a `why` that names the closing condition and makes clear
no citation can close it. In a language post the differentiating claim *is* the script
content; if the wishes, transliterations and register guidance are unverified, that claim
is not established.

**Both of you will ship blocked.** Eleven posts in this batch already need a native reader
and there is no confirmation that a Bengali or Kannada reader is available. Write the post
properly and record the blocker honestly — do not soften it, and do not quietly assume
someone will check it.
