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

**Shared articles: 2. Threshold is 3. VERDICT: PROCEED — these are not the same keyword.**

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
`drikpanchang.com`, `arxiv.org`, `pmc.ncbi.nlm.nih.gov`, `frontiersin.org`, `aclanthology.org`,
`archive.org`, `journals.plos.org`, `nature.com`, `gretil.sub.uni-goettingen.de`,
`dsal.uchicago.edu`.

_Sources table is filled in below once each was fetched and verified._

