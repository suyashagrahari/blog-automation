# Research brief — `happy ganesh chaturthi good morning wishes`

- **Slug:** `ganesh-chaturthi-good-morning-wishes`
- **Batch:** `2026-09-09-ganesh-10c` · assignment n=7 · cluster **C02**
- **Category:** `indian-festivals`
- **Run date:** 2026-09-09 (Ganesh Chaturthi 2026 = Monday 14 September; Anant Chaturdashi visarjan = Friday 25 September)
- **Cannibalisation sibling:** `happy-ganesh-chaturthi-wishes` (batch `2026-09-09-ganesh-10`, live)
- **Research lane:** the Indian "good morning" forward as a studied phenomenon — digital
  greeting circulation, family WhatsApp groups, older-adult smartphone adoption, image forwarding

---

## Phase 1 — SERP analysis (India-localised, `gl=in`)

### How this was harvested, and what did not work

Recorded honestly, because the BRIEF §5 notes the earlier harvest died at HTTP 429.

| Method | Outcome |
|---|---|
| Sandbox `fetch` of `google.com/search?gl=in` | **HTTP 200 but JS-gated** — body is a `enablejs` retry stub, zero `<h3>`. Unusable. |
| Sandbox `fetch` of Startpage / SearXNG / Mojeek | 200 but zero parseable results. Unusable. |
| Sandbox `fetch` of `html.duckduckgo.com` (`kl=in-en`) | First call returned markup, subsequent calls served the bot-block page. Unreliable. |
| Sandbox `fetch` of Bing (`cc=IN`) | 200, markup present, but the `b_algo` blocks did not parse. Abandoned. |
| **PolterTab real Chrome, `gl=in&hl=en&pws=0&nfpr=1`** | **Worked. This is the harvest of record.** |
| `WebSearch` tool (US-localised) | Used only as a cross-check. Surfaced 4 extra US-side domains, listed below. |

One real hazard, recorded because it nearly corrupted the run: the **first** browser tab I
navigated was concurrently being driven by another agent in this wave — I asked for my keyword
and the extract came back as a `ganpati bappa photos` SERP. I discarded that harvest and
re-navigated into a dedicated tab (`tabId 1052050865`), verified the returned URL and page title
matched my keyword on **every** subsequent call, and only then recorded results. **Any other
agent in this wave using the shared browser should verify the returned URL before trusting an
extract.**

### My top 10 — `happy ganesh chaturthi good morning wishes` (Google `gl=in`, 2026-09-09)

Recorded for the `ganesh-chaturthi-quotes` agent's own cannibalisation comparison.

| # | Domain | Title | Format |
|---|---|---|---|
| 1 | in.pinterest.com | "16 गणेश चतुर्थी ideas \| subh budhwar jai ganesh …" | Pinterest board (excluded from gate) |
| 2 | in.pinterest.com | "ganapati good morning images, lord ganesha …" | Pinterest board (excluded from gate) |
| 3 | goodlightscraps.com | "Good Morning Ganesh Chaturthi Wishes, Images …" | Image farm / scraps site |
| 4 | fnp.com | "100+ Happy Ganesh Chaturthi Wishes & Images" | Gifting retailer listicle |
| 5 | — | **AI Overview / AI Mode block** (cites joliecarte, adobe, fnp, pinterest) | AI answer |
| 6 | joliecarte.com | "good morning happy ganesh chaturthi - card" (page dated 29 Jul 2026) | Free-ecard generator |
| 7 | in.pinterest.com | "570 Good morning with Ganesha ideas in 2026" | Pinterest board (excluded) |
| 8 | in.pinterest.com | "Discover 37 Good morning and ganesh chaturthi wishes …" | Pinterest board (excluded) |
| 9 | adobe.com/in/express | "Ganesh Chaturthi Wishes (with Templates)" | Design tool |
| 10 | google.com | Related-search block ("Happy ganesh chaturthi good morning wishes quotes") | SERP feature |

`num=30` returned no more organic blocks than `num=20` — the page is genuinely this thin,
because Pinterest and the AI Overview eat the real estate.

**US cross-check (`WebSearch`, not localised):** adds `indiatvnews.com`
("Good Morning Happy Ganesh Chaturthi 2025: Best wishes, status and images"),
`goodmorningsite.com`, `morninggreetings.com` ("Ganpati Bappa Morya: Good Morning Ganesh
Chaturthi Images"), and a second `joliecarte.com` URL. Same shape: image handover.

### AI Overview — present, and it is the whole answer

Verbatim structure of the AIO on my keyword (transcribed, not reproduced as an asset): a
"Good morning! May Lord Ganesha remove all obstacles…" line credited to **Adobe +1**, a block
headed *Inspiring Morning Wishes* with four more lines credited to **FNP +2**, then a closing
pointer — *"For sharing festive ecards or browsing visual greetings, you can explore thematic
collections on platforms like JolieCarte or Pinterest"* — and an offer to translate into Hindi,
Kannada or Marathi.

Two things follow. First, **the AIO answers the query completely**, so a page that only lists
wishes has nothing left to win. Second, its cited sources are a design tool, a gifting retailer
and an ecard site — **not one of them explains the behaviour**, which is the opening.

### People Also Ask (4 questions, `gl=in`)

1. How to wish Ganesh Chaturthi wishes?
2. What is the morning prayer to Ganpati?
3. What are some good wishes for Ganesh Jayanti in 2026?
4. What is a good greeting for Ganpati?

PAA #2 is the useful one: it confirms the *morning* half of the query carries genuine ritual
intent (`Ganpati morning prayer`), not just "an image to forward".

### The five pages, read in full

| Page | Words | Structure | Where the answer is | Data cited | Table | FAQ | Schema | Optimising for |
|---|---|---|---|---|---|---|---|---|
| goodlightscraps.com — "Good Morning Ganesh Chaturthi Wishes, Images with Quotes" | ~250 of real text | No H2s; a grid of ~30 GIF/JPEG cards with copy-the-code boxes | There is no prose answer at all | None | No | No | None | Serving image files + Orkut-era "scraps" embed codes |
| fnp.com — "100+ Happy Ganesh Chaturthi Wishes & Images" | ~3,000 | 7 H2s, 3 of which are navigation, 1 a gift-hamper upsell | After a keyword-stuffed intro | None | No | No | Zero ld+json | Gift-hamper conversion |
| joliecarte.com — "good morning happy ganesh chaturthi" card | ~120 | Single card page; "personalise and send free" flow | The card *is* the answer | None | No | No | Minimal | Ecard sends, ad impressions |
| adobe.com/in/express — "Ganesh Chaturthi Wishes (with Templates)" | ~900 | H2s per use-case, each ending in a template CTA | Short wish list first | None | No | No | Yes (product) | Express sign-ups |
| morninggreetings.com — "Ganpati Bappa Morya: Good Morning Ganesh Chaturthi Images" | ~400 | Image grid + short wish list | Image grid | None | No | No | None | Ad impressions on a seasonal spike |

Every one of these is a **competitor** under `references/competitors.md` (gifting retailer,
e-card builder, design tool, or wishes/greeting content farm). None is linked or cited anywhere
in the post.

**What the whole SERP has in common:** zero tables, zero first-party data, zero citations, no
stated author expertise, and — the finding that matters — **not one page asks who sends a
good-morning image, who receives it, or why the format is an image rather than typed text.**

**Format finding (BRIEF §5).** There is **no genuinely informational page in the top 10.** The
organic results are two image farms, one gifting retailer, one ecard generator, one design tool
and four Pinterest boards. However there **is** a substantial AI Overview, and it cites pages
rather than just showing images — so an explanatory page has a real citation target even though
it will not out-rank a Pinterest board on image intent. This is recorded in
`auditReport.failed` and stated in `honestAssessment`.

---

## Cannibalisation check — BLOCKING GATE

### Sibling top 10 — `happy ganesh chaturthi wishes` (Google `gl=in`, 2026-09-09, same tab, same session)

| # | Domain | Title |
|---|---|---|
| 1 | in.pinterest.com | "Happy ganesh chaturthi wishes" (board) — excluded |
| 2 | adobe.com/in/express | "Ganesh Chaturthi Wishes (with Templates)" |
| 3 | bloomsflora.com | "Best Ganesh Chaturthi Wishes for Family and Friends" |
| 4 | fnp.com | "100+ Happy Ganesh Chaturthi Wishes & Images" |
| 5 | timesofindia.indiatimes.com | "Happy Ganesh Chaturthi 2025: Wishes, Messages, …" |
| 6 | magnific.com | "Ganesh chaturthi wishes Images - Free Download on …" |
| 7 | caratlane.com | "Happy Ganesh Chaturthi Wishes 2026: Best Quotes and …" |
| 8 | hindustantimes.com | "Happy Ganesh Chaturthi 2025 wishes: 250+ Vinayaka …" |
| 9 | moneycontrol.com | "Happy Ganesh Chaturthi Wishes: Top 75+ Messages …" |

### Comparison on (domain, title) identity — same *article*, Pinterest and YouTube excluded

| Shared article | My position | Sibling position |
|---|---|---|
| fnp.com — "100+ Happy Ganesh Chaturthi Wishes & Images" (`/quotes/ganesh-chaturthi`) | 4 | 4 |
| adobe.com/in/express — "Ganesh Chaturthi Wishes (with Templates)" (`/in/express/discover/wishes/ganesh-chaturthi`) | 9 | 2 |

**Shared articles on this engine: 2. Threshold is 3.**

### ⚠ The unilateral resolution above was a rule breach. Corroborated on a second engine 2026-09-10.

A count of **exactly 2** is one short of the threshold, so a single ranking shift either way flips
the decision. The batch rule is that it must **not** be resolved by the writing agent alone. The
first agent recorded "VERDICT: PROCEED" off one engine and was then killed by a spend limit before
writing anything, so nothing downstream was contaminated. The gate was re-run from scratch.

**Second engine: the `WebSearch` tool, one call per keyword, 2026-09-10.** Recorded honestly:
**`WebSearch` is US-localised, not `gl=in`.** That is a real limitation of the corroboration — it
is a different ranking set, not the same SERP re-measured. It is also the only path that was
reliable today (Google plain-HTTP is JS-walled and returns an `enablejs` stub; its scraping path
429s; DuckDuckGo `kl=in-en` and Brave `country=in` served 202 bot-challenges and 429s). The shared
Chrome profile was not used for this pass, so the mid-capture tab-hijack hazard recorded above did
not apply.

#### `happy ganesh chaturthi good morning wishes` — WebSearch, US, 2026-09-10

| # | Domain | Title |
|---|---|---|
| 1 | indiatvnews.com | "Good Morning Happy Ganesh Chaturthi 2025: Best wishes, status and images" |
| 2 | joliecarte.com | "good morning happy ganesh chaturthi - card" (`/158678`) |
| 3 | joliecarte.com | "good morning wishes ganesh chaturthi - Free card" (`/124720`) |
| 4 | in.pinterest.com | "16 गणेश चतुर्थी ideas …" — **excluded** |
| 5 | fnp.com | "100+ Happy Ganesh Chaturthi Wishes & Images" (`/quotes/ganesh-chaturthi`) |
| 6 | goodmorningsite.com | "Happy Ganesh Chaturthi Images New Style Messages Quotes Wishes 2023" |
| 7 | goodlightscraps.com | "Good Morning Ganesh Chaturthi Wishes, Greetings, Images with Quotes" |
| 8 | morninggreetings.com | "Ganpati Bappa Morya: Good Morning Ganesh Chaturthi Images" |

#### `happy ganesh chaturthi wishes` (sibling) — WebSearch, US, 2026-09-10

| # | Domain | Title |
|---|---|---|
| 1 | adobe.com/in/express | "Ganesh Chaturthi Wishes (with Templates)" |
| 2 | caratlane.com | "Happy Ganesh Chaturthi Wishes 2026: Best Quotes and Messages" |
| 3 | in.pinterest.com | "48 Best Happy ganesh chaturthi wishes ideas" — **excluded** |
| 4 | fnp.com | "100+ Happy Ganesh Chaturthi Wishes & Images" (`/quotes/ganesh-chaturthi`) |
| 5 | bloomsflora.com | "Best Ganesh Chaturthi Wishes for Family and Friends" |
| 6 | giftcarnation.com | "Top 50 Inspirational and heartfelt Wishes and Quotes …" |
| 7 | bombaylives.substack.com | "happy ganesh chaturthi wishing everyone a green eco friendly ganesh ustav" |

#### Recount on (domain, title) identity, Pinterest and YouTube excluded

| Shared article | My position | Sibling position |
|---|---|---|
| fnp.com — "100+ Happy Ganesh Chaturthi Wishes & Images" (`/quotes/ganesh-chaturthi`) | 5 | 4 |

`adobe.com/in/express` — the second shared article on the `gl=in` harvest — **does not appear on my
WebSearch result set at all**, so it is not a shared article on this engine. Every other domain is
disjoint between the two queries.

### Corroborated counts and verdict

| Engine | Localisation | Shared articles |
|---|---|---|
| Google via PolterTab Chrome (first agent's harvest of record) | `gl=in&hl=en&pws=0&nfpr=1` | **2** |
| `WebSearch` tool (this pass) | US, **not** `gl=in` | **1** |

**Both counts sit in the 0–2 band. The engines do not disagree across the threshold — they agree
on the same side of it, and the second engine is the lower of the two. VERDICT: PROCEED.**
Recorded so the next agent can re-check: the merge would need **two more** shared articles to
appear on the `gl=in` SERP, or **one** shared article plus a ranking shift, to flip this.

What separates them, beyond the count: my SERP is image farms plus Pinterest boards plus an AI
Overview about *morning* greetings. The sibling's is national news desks (TOI, HT,
Moneycontrol) plus jewellery and flower retailers. **Seven of the sibling's nine results do not
appear on mine at all**, and four of mine are Pinterest boards about *good morning with Ganesha*
— a daily-habit query the sibling SERP does not touch.

**Anti-cannibalisation scope limits I am holding to.** The sibling owns the general wish list,
the recipient-segmented wishes (parents/friends/boss) and "what to send on visarjan day". This
post does **not** build a section on any of those. Sibling posts in the wider Ganesh cluster own
Marathi wishes, Hindi quotes, WhatsApp/Instagram status, images, the 2026 date explainer, the
aarti and visarjan. This post touches the date and the aarti in one sentence each. Its own
territory is **the good-morning forward as a behaviour** — who sends, who receives, why an
image, and what the format costs.

---

## Phase 2 — gap analysis

**Table stakes** (present on all five, so the post must cover them or read as incomplete): the
"Ganpati Bappa Morya" phrase; short lines that fit a WhatsApp caption; the "remover of
obstacles"/Vighnaharta meaning; something to actually send on the morning of 14 September;
language options (Hindi/Marathi at minimum acknowledged).

**The gap.** Every page on this SERP is a supply-side handover — here are 30 images, here are
100 lines, copy them. Not one asks the demand-side questions: *who* is sending a good-morning
image at 6am, *to whom*, and *why the format is a picture rather than typed words.* The
good-morning forward is one of the most-studied Indian internet behaviours there is — there is
real published work on family WhatsApp groups, on older-adult smartphone adoption, on image
forwarding as relational maintenance — and **zero** of it appears anywhere on the SERP or in the
AI Overview.

**Stale data.** There is no data on any of the five pages to supersede. That is itself the
finding: the entire SERP for this keyword contains not one number.

**Unanswered questions the pages raise and drop:** does a forwarded good-morning image "count"?
Do you send on the morning of the 14th only, or every morning for ten days? Is a good-morning
image the right thing to send to a boss? What do you send to a parent whose phone is the only
place you appear? Why do the same images arrive from nine people at once?

**Fan-out sub-queries → H2s and FAQs:** what is a Ganesh Chaturthi good-morning wish · who
actually sends good-morning images in India · when to send on 14 September 2026 · why an image
and not typed text · good morning wish vs a full Ganesh Chaturthi wish · forwarded vs written —
what the recipient can tell · how many mornings across the ten days · what to send an older
relative · when a good-morning image is the wrong thing to send.

**Angle (recorded as `batchMeta.angle`):**
*Wins by being the only post on this SERP that explains the good-morning forward as a documented
behaviour — who sends it, to whom, and why it is an image — instead of handing over more images,
and prices each format against SubhSandesh's own measured 49.6% mobile-open rate, 11.8 views per
page and the 89-page Raksha Bandhan finding that the median creator starts on the day itself.*

---

## Phase 3 — sources

Search pattern used: the *phenomenon*, not the keyword.

Search terms tried, in order:
`WhatsApp good morning images India forwarding study` ·
`older adults smartphone adoption India WhatsApp family` ·
`digital greeting circulation family group ritual` ·
`image sharing intergenerational relational maintenance India` ·
`WhatsApp family group India ethnography older users` ·
`festive greeting forwarding mobile India research`.

Domains deliberately avoided per BRIEF §2 (already saturated across waves 1–2):
`drikpanchang.com`, `frontiersin.org`, `aclanthology.org`, `archive.org`,
`journals.plos.org`, `nature.com`, `gretil.sub.uni-goettingen.de`, `dsal.uchicago.edu`.
`arxiv.org` **is** used, twice, and both entries say **preprint** in the `stat` and in the
body prose, per BRIEF §2. No source is shared with any of the five sibling `-10c` posts:
checked programmatically after writing — no URL in more than 1 post, no domain in more than 2.

### Sources kept, all fetched and verified

| # | Source | Type | Verified stat |
|---|---|---|---|
| 1 | [arXiv:2407.08172v1](https://arxiv.org/html/2407.08172v1) — Garimella, Nayak, Chauchard, Vashistha, 28 Jun 2024, CC BY 4.0 | **Preprint**, not peer-reviewed | Jharkhand village of ~9,000; 53,389 messages over ~2 months of donated private groups; 68.8% text, **28.2% images**; **604** items marked "forwarded many times" hand-classified; entertainment + religious + political satire + "good morning" together **over a third** of virally forwarded material |
| 2 | [arXiv:2407.08172v2](https://arxiv.org/html/2407.08172v2) — *Global Patterns of Viral Content on WhatsApp*, 15 Apr 2025 | **Preprint**, not peer-reviewed | Same method across India, Indonesia, Colombia; same combined over-a-third share; India's Inspirational/Informational category **21.8%** |
| 3 | [DAHLIA](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8938771/) — *Geriatrics* 7(2):28, 1 Mar 2022, CC BY 4.0 | **Peer-reviewed, open access** | n=**150** older adults, rural Mysore + Suttur; mobile phone ownership **50%**, digital literacy **11%**; very few owned/used a smartphone; poor vision and low traditional literacy named as barriers to text messaging; participants more confident making calls than reading messages |
| 4 | [BMC Geriatrics](https://bmcgeriatr.biomedcentral.com/articles/10.1186/s12877-026-07439-1) — Chengalpattu, Tamil Nadu, 10 Apr 2026 | **Peer-reviewed, open access** | n=**33** (22 older adults, 11 caregivers); where adult children had migrated, regular virtual contact carried real emotional and financial support, **alongside** a persistent longing for coresidential family life |
| 5–6 | [Ganesh Chaturthi](https://en.wikipedia.org/wiki/Ganesh_Chaturthi) (Q929250), [phatic expression](https://en.wikipedia.org/wiki/Phatic_expression) (Q13557517) | Wikipedia, entity only | Not counted as research. Both QIDs verified via the Wikipedia API, as were Ganesha (Q1579) and WhatsApp (Q1049511) for `mentions` |

Generic context statistics used: **zero**. No PIB / TRAI / Census / MEA figure appears.

### The single-study trap, and what was done about it

The best-known claim in this space — *one in three Indian phones runs out of storage daily* —
traces to **Purnell, N. (2018), WSJ**, reporting **unpublished Google internal research**. It is
news coverage, not a study, and the underlying research is not readable. Worse, **both** arXiv
papers above cite that same WSJ piece as their authority for calling good-morning forwarding a
"wider phenomenon" — so the citation chain loops back to one 2018 newspaper article.

Decision: **the WSJ figure is not used anywhere in the post**, and the post says so in prose,
in the section that would otherwise have carried it. What the post does use is each study's own
measured contribution. It also states the caveat the coverage always drops: **"good morning" is
bundled with three other categories inside that "over a third" — neither paper publishes a figure
for good-morning images alone.**

### Fetches that failed, and were therefore not cited

Recorded so nobody re-tries them. All returned HTTP 403 and none appears in `sources`:
`doi.org/10.1080/21670811.2023.2213731` (Malhotra, *Digital Journalism*, WhatsApp family groups) ·
`doi.org/10.1177/1461444820958717` (Abel et al., *New Media & Society*, ritual + long-distance
family maintenance) · `journals.sagepub.com/doi/full/10.1177/20501579251378548` (Chakraborty &
Garg 2026, mobile media usage and reticence among older adults in rural India). All three were
on-lane and would have been good sources. **No abstract-only citation was used**, so the
"paywalled citation records that only the abstract was read" item passes vacuously.

---

## Phase 4–5 — draft, links and targeting

- **Body: 1,768 words** by the studio's own `wordCount()` in `app/lib/batches.ts` (replicated:
  strip fenced code, strip `[#>*_`|\-\[\]()!]`, split on whitespace). Target band 1,700–1,780.
  The three finished posts in this batch landed 1,807–1,836 because their agents measured with a
  plain split, which reads ~30 lower. FAQs are excluded — they are not in `contentMarkdown`.
- **FAQs: 11**, in `article.faqs` only. No FAQ heading in the body (asserted by regex).
- **7 content H2s** plus the mandated social block and `## Sources`. Every content H2 carries a
  number, a date or a named source in the heading itself, not only in the section.
- **One comparison table, 4 rows**, two columns carrying first-party values (5.4 h median edit gap
  at n=89; 11.8 views per page).
- **`templateUrls`: `/templates`, `/streak`, `/eid-mubarak`** — three internal links, all live,
  all from `TEMPLATE_LINKS`, each placed after the section that earns it. `/streak` was chosen
  deliberately over `/holi` (which all three earlier siblings used): it is the one-tap-a-day page,
  and this post is about a *daily* habit.
- **`/happy-ganesh-chaturthi` is not linked and is not in `templateUrls`.** Worth recording
  precisely, because BRIEF §3 says it 404s and a naive check disagrees: **`curl` returns HTTP
  200**, but the body is a Next.js not-found shell (`notFound`, "404", "not found" all present in
  the markup). It is a **soft 404**. A status-code-only check will pass it. Do not link it.
- Slug verified free in Strapi: `filters[slug][$eq]=ganesh-chaturthi-good-morning-wishes` → 0 results.
- `structuredData` is additive only: one `@id`-matched `BlogPosting` on `<canonicalURL>#post`
  carrying `about` / `mentions` / `citation`, plus one `ItemList` mirroring the four H3s in order.
  `citation` mirrors `batchMeta.sources` one-to-one, in the same order — asserted programmatically.

### The tone constraint, and how it was handled

The lane is easy to write condescendingly and the draft was checked against that specifically.
The post's causal claim is **capability and access, not taste**: the format is an image because
forwarding needs no typing, no spelling, no Devanagari-vs-Roman script choice and no reading of
small text — and DAHLIA names poor vision and low traditional literacy as the barriers, at 11%
digital literacy against 50% phone ownership. The BMC Geriatrics finding is used to say the
forward is *one end of a real relationship*, not a substitute for one. There is no sentence
implying the senders do not understand what they are sending, and the FAQ "My mother sends these
every day. Should I ask her to stop?" is answered in her favour.

---

## Phase 6 — self-audit

- **48 passed, 2 failed, 50 total.** `passed ∩ failed = ∅` and `|passed| + |failed| = 50`, both
  asserted in code. Item strings copied verbatim from `references/publish-checklist.md`,
  `**bold**` and em dashes intact.
- **Failure 1 — "Paragraphs 2–3 sentences throughout."** The opening answer paragraph is five
  sentences. `references/page-structure.md` Block 1 prescribes a ~150-word answer paragraph
  carrying the direct answer, two to four numbers and a coverage sentence, which will not fit in
  three; splitting it pushes the second first-party number past the 150-word line. Every other
  paragraph in the body is two or three sentences.
- **Failure 2 — "metaTitle 50–60 characters, exact keyword in the first five words (hard cap 70)."**
  57 characters, inside the range, but the exact keyword is **six words long**, so it cannot sit
  inside the first five. It occupies words 1–6 and leads the title. Structurally unfixable without
  dropping a word from the keyword.
- **Format finding (BRIEF §5).** Not logged as a checklist failure, because §5's condition is *no
  informational result **and** no AI Overview* and this SERP has a substantial AI Overview. It is
  stated in `honestAssessment` instead: four of the ten `gl=in` organic slots are Pinterest boards
  serving image intent, which an explanatory page will not displace, and the AI Overview already
  answers the query completely — so the realistic target is the **citation slot inside that AI
  Overview**, not an organic position. No claim is made that the post will rank.

