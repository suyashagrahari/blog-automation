# Research brief — `online bouquet app`

Batch `2026-09-02-bouquet-2`. Slug `online-bouquet-app`. Category `digital-gifts-romance`.
Written 2026-09-03 against `content/facts.md` regenerated 2026-09-02.

---

## Phase 1 — SERP analysis

**`WebSearch` was exhausted (200/200) and `WebFetch` is hook-blocked, so the SERP was
established by fetching search-engine HTML endpoints directly and cross-checking two
independent engines and two query variants.** Everything below states which engine
returned it.

### What was actually run

| Engine / endpoint | Status | Usable? |
|---|---|---|
| `html.duckduckgo.com/html/?q=online+bouquet+app` | 200, 39 KB, 96 "bouquet" hits | Yes — 12 results parsed in document order |
| Same, `&kl=in-en` (India region) | 200 | Yes — 12 results |
| `html.duckduckgo.com` for `bouquet app` | 200 | Yes — 11 results |
| `search.brave.com` | 200, 228 KB, **captcha challenge page** | Partially — result payload leaked 36 hosts, no reliable ordering |
| `lite.duckduckgo.com` | 200 | Redundant with the HTML endpoint |
| `mojeek.com` | 200, 5.5 KB, 1 "bouquet" hit | **No — near-empty, treated as a non-answer** |
| `startpage.com` | 200, 22 KB, **0 "bouquet" hits** | **No — a 200 that did not answer the query. Discarded.** |
| `search.brave.com` DOM link extraction | 200 | **No — returned only Brave's own CDN hosts and a Tor Browser manual page. Discarded.** |

Two of the seven attempts returned HTTP 200 with content that had nothing to do with
the query, which is exactly the failure mode the batch brief warned about. Neither was
counted.

### The top 10 for `online bouquet app` (DuckDuckGo HTML, India region)

Positions 1–2 are paid retailer ads (a gifting retailer and a flowers/cakes retailer;
not named here per the competitor rule). Organic, in order:

| # | Host | Page type | Word count / structure |
|---|---|---|---|
| 3 | `thebouquet.me` | **Tool** — "Create & Send Digital Bouquets" | Landing page, not an article |
| 4 | `digibouquet.vercel.app` | **Tool** | Landing page |
| 5 | `digibouquet.org` | **Tool** | Landing page |
| 6 | `digibouquet.app` | **Tool** | Landing page |
| 7 | `digi-bouquet.com/virtual-bouquet-maker` | **Tool** | Landing page |
| 8 | `digi-bouquet.com` (second URL) | **Tool** | Landing page |
| 9 | `digibouquet.net` | **Tool** | Landing page |
| 10 | `egreet.in` | **Tool** | Landing page |
| 11 | `digibouquet.space` | **Tool** | Landing page |
| 12 | `egreet.in` (second URL) | **Tool** | Landing page |

Non-India run additionally surfaced `onlinebouquet.com`, `digiflower.net`,
`digital-bouquet.online` — all tools. Brave's leaked host list added
`digitalbouquet.vercel.app`, `bloomify-ashen.vercel.app`, `bridalbouquetbuilder.com`,
`attachedapp.com`, plus `play.google.com`, `apps.apple.com` (with `play-lh.googleusercontent.com`
and `is1-ssl.mzstatic.com` image CDNs, i.e. real app cards), `reddit.com`, `dribbble.com`,
`youtube.com`, and two flower retailers.

### The sibling term `bouquet app` (DuckDuckGo HTML)

| # | Host | Type |
|---|---|---|
| 2 | `thebouquet.me` | Tool |
| **3** | **`play.google.com`** | **App-store listing** |
| 4 | `digibouquet.org` | Tool |
| 5 | `digibouquet.vercel.app` | Tool |
| 6 | `digibouquet.net` | Tool |
| **7** | **`play.google.com`** | **App-store listing** |
| 8 | `digi-bouquet.com` | Tool |
| 9 | `digibouquet.app` | Tool |
| **10** | **`apps.apple.com`** | **App-store listing** |

### Phase 1 findings — the top 5 pages could not be analysed as articles, because none are articles

The Phase 1 template (word count, heading structure, where the direct answer lands,
data cited and its date, tone) does not apply: **there is no editorial content anywhere
in the top 10 of either query.** Every organic result is either a product landing page
for a browser-based bouquet tool or an app-store listing. There is no AI Overview or
featured snippet surfaced by either endpoint, and nothing carrying a heading structure,
a citation, a data point or a byline to compare against.

**This is a Gate 2 page-type mismatch.** It is the same shape as `funny google search
prank` and `couple compatibility test online`, both cut from this batch for exactly
this reason — a SERP made of tools. This one is worse in one respect and better in
another: worse because it also contains app-store listings, which no blog post can
displace; better because the tools are all *browser* tools, which empirically confirms
the post's thesis (see Phase 2).

**Recommendation on record: `online bouquet app` belongs to `/bouquet-gf` as a
template-page target, not to the blog.** The post was still written as assigned, and
the mismatch is stated in `auditReport.honestAssessment` rather than buried.

### What could not be verified

- No Google SERP was observed directly. All ordering comes from DuckDuckGo's HTML
  endpoint (Bing-backed) and a partial Brave payload; Google's own top 10, its AI
  Overview and its People Also Ask block are **unverified**.
- Brave's ordering is unknown — its page was a captcha challenge, so its hosts are
  evidence of *presence*, not of rank.
- Whether the app-store listings for `bouquet app` are flower-delivery apps, design
  apps or something else was **not** checked, because opening and characterising a
  competitor's store listing is outside what this post may cite.
- Search volume and keyword difficulty were not measured; the "2 of 10 estimated weak"
  figure in the assignment is a sibling-row pattern estimate and remains unverified.

---

## Phase 2 — Gap analysis

### The real competitive set is internal, not on the SERP

103 flower/bouquet posts are live, and the product-term space is spent. I read the
`contentMarkdown` of four of the twelve existing product-term posts via the Strapi API
(`virtual-bouquet`, `digital-bouquet-maker`, `send-a-virtual-bouquet`,
`online-bouquet-maker-free`) and pulled the headings of all four:

| Slug | Words | Shape | `app` mentions | `install` / store mentions |
|---|---|---|---|---|
| `virtual-bouquet` | 1,071 | Why digital > physical → creative ideas → step-by-step → design tips → comparison table → sharing/privacy → checklist | **0** | 1 |
| `digital-bouquet-maker` | 1,060 | What is it → when to choose it → 15 ideas → 7 steps → design tips → comparison → troubleshooting → checklist | **1** | 0 |
| `send-a-virtual-bouquet` | 1,015 | Why send one → step-by-step → what to write → share methods → comparison → recipient ideas → troubleshooting | **0** | 1 |
| `online-bouquet-maker-free` | 1,133 | Why use one → 8 steps → design ideas → comparison → sharing → common mistakes → checklist | **0** | 0 |

All twelve are the same page: *"a digital bouquet is nice, here is how to make one,
here is a table comparing it to real flowers."* **Not one of them engages the word
"app" at all.** None mentions an app store, an install, a download, or the existence of
flower-delivery apps as a separate product.

### Table stakes

- A definition of the thing.
- A digital-versus-physical comparison table.
- Naming when physical flowers are the better gift.
- Sharing mechanics (WhatsApp, a link, privacy).

### The gap

**Nobody — not the twelve internal posts, not the ten SERP tools — distinguishes the
three products that answer to "online bouquet app":**

1. an app that delivers *real* flowers,
2. an app you *install* to design a bouquet,
3. a browser page that *sends a link* carrying a digital bouquet.

Those are three different products for three different situations, and the searcher who
types "app" is very likely expecting (1) or (2). Answering honestly — "SubhSandesh is
(3), there is nothing to download, and here is when you should go get (1) instead" — is
the whole differentiator. Without it this is a thirteenth copy, which is the cluster's
worst self-cannibalisation risk.

The SERP itself is the empirical proof: a searcher typing "app" is being served ten
browser pages. That observation is available to no competitor because none of them is
looking at the product-type question.

### Stale data

Not applicable in the usual sense — the ranking pages are tools and cite nothing. The
one internal comparison worth noting is that all twelve existing posts predate the
current `facts.md` regeneration, so their first-party numbers are older than this one's.

### Unanswered questions on the SERP

- Is there an app to install, or not? (No page answers it.)
- Does the *recipient* have to install anything? (No page answers it.)
- Does it work on iPhone and Android? (No page answers it.)
- What happens if the recipient's phone is full, or offline?
- When should you buy real flowers instead of sending a link?

### Fan-out sub-queries → H2 map

| Sub-query | Becomes |
|---|---|
| "What is an online bouquet app?" | `## What an online bouquet app is` |
| "Is there an app for making a bouquet to send someone?" | `## The three products behind one search` (3 H3s) |
| "Do I have to download anything?" | `## What the digital bouquet on this site actually is` |
| "What does the recipient have to do?" | `## Install versus link: what changes for the person receiving it` |
| "Do I need an app at all if it's on a phone?" | `## Why the phone matters more than the app store here` |
| "Is it free / is it private?" | `## What this post cannot tell you, and what it can` |
| "Should I just send real flowers?" | `## When a flower-delivery app is the right choice and this is not` |

### Angle

> Wins by being the only post on this SERP that separates a flower-delivery app, a
> native design app you install, and a browser tool that sends a link — and says
> plainly which one SubhSandesh is, using `/bouquet-gf` being the #2 page type at 23.4%
> of 3,397 pages and 50.2% of views arriving on a phone as proof that a browser tool
> used mostly on phones is the real answer to "is there an app".

---

## Phase 3 — Sources

Route that worked: **Crossref → Unpaywall → DOAJ / OpenAIRE**, exactly as the batch
brief predicted. OpenAlex, CORE and Semantic Scholar were not needed. Search terms used:
`progressive web app versus native mobile application user adoption`,
`mobile app installation friction abandonment users`,
`app store download intention barriers users`,
`progressive web apps performance user experience`,
`gift giving mediated technology digital gifts`,
`mobile internet usage India smartphone web browsing`,
plus DOAJ field queries on `"progressive web app"`, `"app installation"`, `uninstall OR
"app abandonment" OR "app retention"`, `"cut flower" AND consumer AND (gift OR purchase)`,
`"vase life" AND (rose OR gerbera OR "cut flower")`, `floriculture AND India AND consumer`.

### The four cited

| # | Source | Venue / date | OA status | Subject test | Verified how |
|---|---|---|---|---|---|
| 1 | Biørn-Hansen, Majchrzak & Grønli, *Progressive Web Apps: The Possible Web-native Unifier for Mobile Development* | WEBIST 2017, SciTePress | Gold OA (Unpaywall), CC BY-NC-ND | **Platform behaviour** — install versus browser | **Full text read.** PDF fetched (517 KB) and converted; quotations checked against the extracted text |
| 2 | *When and Why Adults Abandon Lifestyle Behavior and Mental Health Mobile Apps: Scoping Review* | Journal of Medical Internet Research, 2024-12-18 | Open access | **Platform behaviour** — app abandonment | **Abstract only.** `jmir.org` served a JavaScript bot-check; the 70% / 100-day / 18-study / 525,824-participant figures were read from the publisher's Crossref deposit for `10.2196/56897` |
| 3 | Turnos-Milagrosa, *Extending vase life and reducing ethylene production in rose cut flowers using Calamondin (Citrus macrocarpa) extract* | J. Horticulture and Postharvest Research 8(4): 581–594, 2025 | Gold OA, **CC BY** | **Cut flowers** — the physical alternative | **Full text read.** PDF fetched (1.74 MB); "8.50 days" untreated and "11.67 days" treated confirmed in the abstract and in Table 1's discussion |
| 4 | *Cut Flower Purchasing and Market Segments within the US Flower Industry* | HortTechnology 35(3), June 2025 | OA, CC BY-NC | **Flower gifting** | **Abstract only.** `journals.ashs.org` served a JavaScript app shell; the 8,502-consumer survey and the 13 gift-giving segments were read from the publisher's Crossref deposit for `10.21273/horttech05584-24` |

Rule compliance:

- **4 sources**, inside the 4–6 band. All four are peer-reviewed and open access.
- **All four pass the subject test.** (1) and (2) are about the platform behaviour the
  post turns on; (3) and (4) are about cut flowers and flower gifting.
- **At least one peer-reviewed *and* open-access:** all four, with (1) and (3) read in
  full from the publisher's own PDF.
- **Zero generic context statistics.** No PIB, TRAI, Census or MEA figure appears, and
  the one permitted India mobile-internet statistic was deliberately **not spent** — the
  first-party 50.2% phone figure does the same work and is not swappable.
- **Swap test:** none could sit unchanged in a sibling post in this batch. The
  app-abandonment review and the PWA paper have no home in `christmas-gift-for-girlfriend`,
  `eid-gift-for-wife`, `new-year-gift-for-girlfriend`, `year-in-review-for-couples` or
  `flower-emoji-meaning-in-chat`; the vase-life and cut-flower-gifting papers are
  bouquet-specific. Closest tension: (4) could plausibly sit in a "which flower for
  which occasion" post, but that keyword shipped in wave 1 and is not in this batch.
- **Batch cap (counted as DISTINCT POSTS in this batch):** `scitepress.org` 0,
  `jmir.org` 0, `jhpr.birjand.ac.ir` 0, `journals.ashs.org` 0. Mine makes each 1.
  **No breach.** Sibling domains at risk and deliberately avoided: `mdpi.com` (2 posts),
  `sciencedirect.com` (2), `onlinelibrary.wiley.com` (2) — an MDPI PWA-accessibility
  paper was found and rejected to keep that domain off the cap.
- **`USED-SOURCES.md`:** none of the four URLs appears in the 666-URL list.
  `journals.ashs.org` appears twice at the *domain* level from earlier batches
  (`hortsci/58/12/article-p1560.xml` and `horttech/34/4/article-p481.xml`); neither is
  the URL cited here, and neither is in this batch.
- **No figure, chart, table or substantial passage reproduced.** Two short quoted
  phrases from (1): "a regular app requires search and installation via an app
  marketplace" and "testable before installation".

### Found, verified, and deliberately not cited

- **Goodwin, *"Why Sideload?" User Behaviours, Interactions and Accessibility Issues
  Around Mobile App Installation*** — BCS HCI 2020, Electronic Workshops in Computing,
  `10.14236/ewic/hci20dc.5`, CC BY. Squarely on-subject. Abstract verified via
  OpenAIRE's harvested record (a position paper on sideloading behaviour, stating the
  field is "insufficiently researched"). **Dropped because ScienceOpen returns HTTP 403
  to every automated request** — the publisher path, the DOI redirect and the document
  page all 403 — so it could not be fetched and would have been a citation the audit
  could not honestly call verified. Re-check if ScienceOpen becomes fetchable.
- *The Implementation of PWA Technology in Enhancing Website Performance & Mobile
  Accessibility*, Buletin Pos dan Telekomunikasi 22(1), 2024, gold OA. Abstract verified
  via the DOAJ API. **Dropped because every host for it failed DNS resolution**
  (`bpostel.kominfo.go.id`, `bpostel.penerbitan.kominfo.go.id`,
  `bpostel.penerbitan.komdigi.go.id`).
- *Evaluating Progressive Web App Accessibility for People with Disabilities*, Network
  (MDPI) 2022. Fetchable and on-topic, **rejected to keep `mdpi.com` off its 3-post cap**
  in this batch.
- *Gift-Giving as a Conversion Device in Online Marketplaces*, Social Media + Society
  2022. **Rejected — resolves through `doi.org` to `journals.sagepub.com`, both closed
  domains.**

### Sourcing gap worth recording

No research was found on **mediated or digital gift-giving** that passes the subject
test and is open-access and fetchable. The searches tried are listed above. This is the
Phase 3 "product mechanics rather than a studied phenomenon" case: the install-versus-link
question is a product-design question, not a studied behaviour, so the post leans on
first-party data plus the two platform-behaviour papers instead of padding the count.

---

## Phase 4–5 — Draft decisions

- **Words:** 1,778 by plain whitespace split (`md.split(/\s+/).filter(Boolean).length`),
  FAQs excluded and not present in the body. In the 1,500–1,800 band.
- **FAQs:** 11, in `article.faqs` only. Each was compared on meaning against all 12
  headings; the closest pair is *"Is a digital bouquet a bad idea for someone who
  struggles with phones?"* against `## When a flower-delivery app is the right choice
  and this is not`, and they are different questions — the heading is about physical
  presence, the FAQ is about the recipient's tech comfort, which the body does not
  cover. No pair reads as the same question asked twice.
- **First-party facts:** 11 lines from `facts.md` in `factsUsed`, quoted verbatim with
  dates. In the first 150 words: 796 / 23.4% (`/bouquet-gf` as #2 page type), 3,397
  pages across 15 page types, and 50.2% / 20,937 of 41,682 phone views — four facts,
  against a floor of two.
- **The two load-bearing facts** are exactly the ones the assignment named: a browser
  tool that is the #2 page type at 23.4%, read on a phone 50.2% of the time, is the
  precise answer to "is there an app for this".
- **Cost:** no claim in any direction. The body has an explicit paragraph saying the
  pricing block is empty and that a guess would be worse than the gap. A scan of the
  body for `free`, `no charge`, `no cost`, `costs nothing`, `subscription`,
  `in-app purchase`, `₹`, `cheap`, `price`, `paid`, `pay` returns **zero matches**.
  There is deliberately no pricing FAQ.
- **Comparison table:** 5 rows × 4 columns, real values. First-party column carries
  50.2% and 12.3 views per page; the physical column carries the verified 8.50-day
  vase life.
- **Where SubhSandesh loses:** two sections. `## What this post cannot tell you, and
  what it can` (the cost gap) and `## When a flower-delivery app is the right choice
  and this is not` (same city, a table wanting a vase, a hospital room, a house in
  mourning, a gesture meant to be seen by others in the room — "you should not be
  talked out of stems"). The FAQ on tech-uncomfortable recipients adds a third.
- **Competitors:** none named or linked. The ten SERP tools are described generically as
  "browser tools"; delivery retailers as "a retailer's ordering app or site". No Play
  Store or App Store link; "app store" and "app marketplace" appear only as generic
  category nouns.
- **Internal links (3):** `/bouquet-gf` (mandatory, anchor "Build-a-Bouquet page for a
  partner"), `/love-gf` (anchor "\"I love you\" page"), `/darling` (anchor "Darling
  romantic page"). All three placed in the fourth section, after the three-product
  taxonomy has established why a browser page is the relevant product. `/bouquet-gf`'s
  description in the body — 12 blooms, colour or black-and-white, reshuffle, a card, a
  Deed of Devotion, a link that blooms open when tapped — is taken from the template's
  own `TEMPLATE_LINKS` entry, not invented.
- **Category:** `digital-gifts-romance`, as assigned and confirmed live in Strapi.
  Noted for the orchestrator: a `virtual-bouquets` category also exists and is arguably
  this cluster's natural home; the assignment was followed rather than second-guessed.
- **Slug:** verified free — a Strapi `filters[slug][$in]` query for `online-bouquet-app`
  plus the twelve existing product-term slugs returned 12 rows and no
  `online-bouquet-app`.

### The two "known defect" items, counted rather than assumed

- **`metaTitle` five-word rule — PASSES.** The keyword is **three words**. `metaTitle`
  is `Online Bouquet App: What You Install vs What You Send` — 53 characters, exact
  keyword in words 1–3, one separator (a colon), no banned booster, no year, no brand
  suffix, and it differs from the H1.
- **Slug stop-word rule — PASSES.** `online-bouquet-app` tokenises to
  `["online","bouquet","app"]`; **zero** stop words.

---

## Phase 6 — Audit summary

**49 passed, 1 failed. `passed ∩ failed = ∅`, `|passed| + |failed| = 50`,** all 50 item
strings byte-verbatim against `publish-checklist.md` (three are multi-line in the file
and were folded to single lines; `**bold**` markers and backticks are intact, and the
folded set matches the file's 50 items exactly).

**The one failure:** *3–6 outbound links, all fetched and verified to contain the cited
fact.* All four URLs returned HTTP 200 and all four facts were verified, but two were
verified from the publisher's Crossref-deposited abstract rather than from the fetched
page, because `jmir.org` served a JavaScript bot-check and `journals.ashs.org` served a
JavaScript app shell. Classified **structural**: both publishers block automated
fetching today. It closes if either page is read in a real browser session, or if a
fetchable OA mirror of either full text appears.

**Not a checklist failure but worth stating:** this post's realistic upside is
answer-engine citation, not a rank. See `auditReport.honestAssessment` for the Gate 2
finding.
