# Research brief — `ganesh-chaturthi-greeting-card`

- **Batch:** `2026-09-09-ganesh-10c` (assignment n=4, cluster C13)
- **Primary keyword:** `ganesh chaturthi greeting card`
- **Folds in:** `happy ganesh chaturthi name style` · `happy ganesh chaturthi photo editor online`
- **Slug:** `ganesh-chaturthi-greeting-card` (verified free on Strapi today)
- **Cannibalisation sibling:** `ganesh-chaturthi-wishes-with-name` — **already live**, batch `2026-09-09-ganesh-10b`, keyword `happy ganesh chaturthi with name`
- **Research lane:** history and sociology of the greeting card — mediated ritual, why a bought token carries obligation, what changed when cards went digital
- **Run date:** Phases 1–2 on **2026-09-09**; Phases 3–6 on **2026-09-10** by a second agent after
  the first was killed by an account spend limit mid-Phase 3. Ganesh Chaturthi 2026 is
  **Monday 14 September**. Anant Chaturdashi visarjan **Friday 25 September**.

---

## VERDICT: **GATE PASSES — post now written (2026-09-10).**

**Header correction.** Until 2026-09-10 this file read "GATE PASSES — post written" while no
blog JSON existed: the Phase 1–2 agent was killed by an account spend limit during Phase 3,
after the gate had passed but before any source was fetched or any JSON written. Everything
above the Phase 3 heading is Phase 1–2 work and stands as recorded. Everything from Phase 3
down was produced on 2026-09-10, and the source list the dead agent had merely *named* was
re-searched and re-verified from scratch rather than inherited (see Phase 3).

Shared articles between the two SERPs, on (domain, title) article identity, Pinterest and
YouTube excluded:

| Engine | Localisation | Shared articles | Verdict |
|---|---|---|---|
| Google, real Chrome (PolterTab) | `gl=in&hl=en&num=20` | **0** | pass |
| DuckDuckGo HTML | `kl=in-en` | **1** | pass |
| Brave Search | `country=in` | **2** (1 inside both top 10s) | pass |

**Highest count on any engine: 2. The gate trips at 3.** The two keywords are not the same
keyword in the India index — and the reason is structural, not marginal. `ganesh chaturthi
greeting card` returns *card* surfaces: design galleries, stock libraries, a government e-card
portal, Amazon and Etsy card listings, a wooden-card shop. `happy ganesh chaturthi with name`
returns *name-on-image* surfaces: mynameart, mynamepics, writenamepics, newmynamepix,
birthdayphotoframes. On Google the two sets do not intersect at all.

---

## Phase 1 — SERP analysis, India-localised

### Method, copied from the sibling `ganesh-chaturthi-invitation-maker` brief

Google's plain-HTTP HTML endpoint is JS-walled — HTTP 200 with a `noscript` redirect to
`/httpservice/retry/enablejs` and zero result markup — and its scraping path returns 429. So
Phase 1 was run on **three** instruments, two of them stateless:

| Instrument | Localisation | Result markup | AI Overview / PAA |
|---|---|---|---|
| **Google, real Chrome (PolterTab)** | `gl=in&hl=en&num=20` | Yes — organic + video + image packs | **Captured; see below** |
| **DuckDuckGo HTML** (`html.duckduckgo.com/html/`, POST) | `kl=in-en` | Yes — 10 organic | none returned |
| **Brave Search** | `country=in` | Yes — 20/21 results | summariser present, not expanded |

**Contention notes, recorded because they affected the run.** DuckDuckGo answered HTTP 202
(anomaly challenge) on the first attempt and Brave answered HTTP 429 on three consecutive
attempts before serving — both consistent with ten sibling agents querying the same two
endpoints in the same minutes. Every capture used here was retried until it returned real
result markup, written to
`scratchpad/ganesh-chaturthi-greeting-card-serp-{ddg,brave}-{q1,q2}.html`, and parsed from
that file rather than from a live page. The Chrome tab was opened as a **named session
(`gcgc-serp`)** rather than reusing whatever tab was current, and `browser_get_url` was
checked against my own query before every read — the sibling brief records another agent
navigating the shared tab away mid-capture.

### Q1 — `ganesh chaturthi greeting card`

**Google, `gl=in&hl=en`, 2026-09-09. About 69,10,000 results.**

| # | Domain | Title | What it is |
|---|---|---|---|
| 1 | canva.in | Free Ganesh Chaturthi Greeting Card Design Templates | Template gallery + editor (**ad + organic**) |
| 2 | egreetings.gov.in | Ganesh Chaturthi | Government e-card portal, 30 cards |
| 3 | woodgeekstore.com | Happy Ganesh Chaturthi Greeting Cards — Personalized Wooden Cards | Product shelf (physical card) |
| 4 | shutterstock.com | Illustration of Happy Ganesh Chaturthi greeting card | Stock vector |
| 5 | timesofindia.indiatimes.com | Ganesh Chaturthi Cards 2025: Best greeting card images to share | **Editorial listicle — the only informational result** |
| 6 | youtube.com | Handmade Ganesh Chaturthi greeting card making ideas | **excluded from count** |
| 7 | waybayme.com | Happy Ganesh Chaturthi | e-card / wish page |
| 8 | dreamstime.com | Happy Ganesh Chaturthi greeting card — traditional Indian | Stock image |
| 9 | in.pinterest.com | Ganesh Chaturthi greetings and image wishes | **excluded from count** |
| 10 | joliecarte.com | Happy Gowri and Ganesh Chaturthi | Free e-card sender |
| 11 | stock.adobe.com | Ganesh Chaturthi Greetings With Ganapati Riding Images | Stock search, 1,499 assets |
| 12 | magnific.com | Ganesh chaturthi greetings Images — Free Download | Stock (ex-Freepik) |
| 13 | amazon.in | Ganesh Chaturthi Greeting Card, Pink, Double-Fold | Product shelf (physical card) |
| — | **Video pack** | 4 items, all "how to make a Ganesh Chaturthi card" craft tutorials | — |
| — | **People also ask** | 4 questions, below | — |
| — | **AI Overview** | **ABSENT.** No AI Overview element, no `AI Overview` heading in the DOM | — |

**People also ask (4), verbatim:**
1. How to wish Ganesh Chaturthi wishes?
2. What is a good greeting for Ganpati?
3. What are some good wishes for Ganesh Jayanti in 2026?
4. How to write beautifully happy Ganesh Chaturthi?

All four are *message-wording* questions. Not one asks what a card costs, when it has to be
posted, or what to do if you have left it too late — which is the query's real situation five
days out.

**DuckDuckGo, `kl=in-en`, 10 organic:**

| # | Domain | Title |
|---|---|---|
| 1 | canva.in | Free Ganesh Chaturthi Greeting Card Design Templates \| Canva |
| 2 | adobe.com | Free Ganesh Chaturthi Card Maker \| Adobe Express India |
| 3 | createcustomwishes.com | 980+ Ganesh Chaturthi Editable Templates & Designs \| 2026 |
| 4 | ayozan.com | Ganesh Chaturthi Greeting Cards — Free \| Ayozan |
| 5 | kapwing.com | Ganesh Chaturthi Card Templates — 844+ Free & Editable Designs |
| 6 | homiwork.com | Ganesh Chaturthi Card — Happy Ganesh Chaturthi Greetings Free |
| 7 | createcustomwishes.com | Free Greeting Card for Ganesh Chaturthi |
| 8 | drikpanchang.com | Ganesh Chaturthi Greetings \| Ganeshotsav Greeting Cards |
| 9 | freepik.com | Ganesh chaturthi greetings Images — Free Download on Freepik |
| 10 | etsy.com | Buy Ganesh Greeting Card Online In India — Etsy India |

**Zero informational results in the DuckDuckGo top 10.** Every one is a design tool, a
template library, a stock library or a shop.

**Brave, `country=in`, top 15 of 20** (`[X]` = excluded from the shared count):

| # | Domain | Title |
|---|---|---|
| 1 | canva.in | Free Ganesh Chaturthi Greeting Card Design Templates |
| 2 | egreetings.gov.in | Ganesh Chaturthi |
| 3 `[X]` | youtube.com | (video) |
| 4 `[X]` | pinterest.com | 18 Happy Ganesh Chaturthi / Vinayaka Chaturthi Cards ideas |
| 5 | adobe.com | Free Ganesh Chaturthi greeting card maker. |
| 6 | magnific.com | Ganesh chaturthi greetings Images — Free Download |
| 7 | amazon.in | Ganesh Chaturthi Greeting Card, Light Blue, Religious Festival Card |
| 8 | stock.adobe.com | Ganesh Chaturthi Greetings With Ganapati Riding Images (1,499) |
| 9 | shutterstock.com | 43,371 Ganesh Chaturthi Royalty-Free Images |
| 10 | adobe.com | Ganesh Chaturthi Wishes (with Templates) |
| 11 | timesofindia.indiatimes.com | Ganesh Chaturthi Cards 2025: Best greeting card images |
| 12 | woodgeekstore.com | Happy Ganesh Chaturthi Greeting Cards — Personalized Wooden Cards |
| 13 | postermywall.com | 121+ Free Templates for 'Ganesh chaturthi greeting card' |
| 14 | 123greetings.com | Ganesh Chaturthi Cards, Free Ganesh Chaturthi Wishes |
| 15 | pikaaso.com | Blue Green Ganesh Chaturthi Greeting Card |

### Q2 — `happy ganesh chaturthi with name` (the live sibling's keyword)

**Google, `gl=in&hl=en`, top 13 non-excluded:**

| # | Domain | Title / URL |
|---|---|---|
| 1 | mynameart.com | `/greeting-cards/ganesh-chaturthi` |
| 2 | mynamepics.in | `/greeting/ganesh-chaturthi-indian-festival-greeting-with-name` |
| 3 | writenamepics.com | `/category/ganesh-chaturthi` |
| 4 `[X]` | cl.pinterest.com | pin |
| 5 | birthdayphotoframes.com | `/photoframe/happy-ganesh-chaturthi-wishes-card-with-name-and-photo-edit` |
| 6 | mynameart.com | `/greeting-cards/ganesh-chaturthi/3` |
| 7 | mynamepics.in | `/category/ganesh-chaturthi` |
| 8 | thefestivalwishes.com | `/wishes/ganesh-chaturthi-wishes-with-name` |
| 9 | newmynamepix.com | `/category/ganesh-chaturthi-wishes-greeting-card` |
| 10 | createcustomwishes.com | `/greetings-card/create-animated-wishes-for-ganesh-chaturthi-with-name/` |
| 11 | wishme29.in | `/c/happy-ganesh-chaturthi-wishes-with-name` |
| 12 | birthdaycake24.com | `/tags/ganesh-chaturthi-card-with-name-edit` |
| 13 | pngtree.com | `/so/ganesh-chaturthi-name` |

**AI Overview: ABSENT. People also ask: ABSENT.** No AIO element and no PAA block in the DOM.

**DuckDuckGo, `kl=in-en`:** createcustomwishes ×2, thefestivalwishes.com, **canva.in**,
hindustantimes.com, namewishes.in, wishme29.in, 99pandit.com, mynameart.com, lifekafunda.com.

**Brave, `country=in`, non-excluded:** mynameart.com ×2, **canva.in**, writenamepics.com,
vriddle.com, createcustomwishes.com ×2, nickfinder.com ×2, wishme29.in,
timesofindia.indiatimes.com, en.wikipedia.org, mynamepics.in, quora.com, drikpanchang.com,
hi.wikipedia.org, **adobe.com `/in/express/discover/wishes/ganesh-chaturthi`**.

---

## The cannibalisation comparison

### Google `gl=in` — **0 shared articles**

The two result sets are disjoint. Not one (domain, title) pair appears in both, and no
publisher appears in both either. `canva.in`, which is the one genuine overlap on the other two
engines, does not rank at all for the name query on Google India.

### DuckDuckGo `kl=in-en` — **1 shared article**

| Domain | Title | Q1 pos | Q2 pos |
|---|---|---|---|
| canva.in | Free Ganesh Chaturthi Greeting Card Design Templates \| Canva | 1 | 4 |

Same URL: `canva.in/cards/templates/ganesh-chaturthi`.

**Rejected as a false merge — same publisher, different article:** `createcustomwishes.com`
appears in both top 10s, but with four *distinct* URLs —
`/category/all-festival-wishes/hindu-festivals/ganesh-chaturthi` and
`/greetings-card/free-greeting-card-for-ganesh-chaturthi` on Q1 against
`/greetings-card/happy-ganesh-chaturthi-greetings-with-name` and
`/greetings-card/online-create-happy-ganesh-chaturthi-wishes-with-name` on Q2. On the
article-identity rule the BRIEF requires, that is 0, not 2. Counted on domains it would have
read as 3 and tripped the gate wrongly — exactly the false merge the BRIEF says the birthday
batch hit four times.

### Brave `country=in` — **2 shared articles**

| Domain | Title | Q1 pos | Q2 pos |
|---|---|---|---|
| canva.in | Free Ganesh Chaturthi Greeting Card Design Templates \| Canva | 1 | 5 |
| adobe.com | Ganesh Chaturthi Wishes (with Templates) \| Adobe Express India | 10 | 20 |

Restricted to both top 10s it is **1**, because the Adobe page sits at #20 on Q2. Taken across
Brave's full 20/21 it is 2. Either reading clears the threshold.

**Rejected as false merges here too:** `adobe.com/in/express/create/card/ganesh-chaturthi`
(Q1 #5) is a different article from the `/discover/wishes/` page; and the two
`timesofindia.indiatimes.com` results are different articles —
`/ganesh-chaturthi-2021-cards-messages-wishes-and-images-best-greeti…` on Q1 against
`/happy-ganesh-chaturthi-2020-wishes-messages-quote…` on Q2.

### Per-engine summary

| Engine | Shared articles | Threshold | Result |
|---|---|---|---|
| Google `gl=in` | 0 | 3 | pass |
| DuckDuckGo `kl=in-en` | 1 | 3 | pass |
| Brave `country=in` | 2 | 3 | pass |

Two of the three engines agree on the single genuine overlap (canva.in's card-template
gallery), which is a generic Canva surface that ranks for almost any Ganesh design query and
is a competitor rather than a comparable post. **No merge.**

---

## Format finding

The Q1 SERP is **not** an informational SERP, and the honest reading is that a blog post is a
minority format for this query:

- **DuckDuckGo top 10: zero informational results.** Ten out of ten are design tools, template
  libraries, stock libraries or shops.
- **Google top 13: exactly one informational result** — the Times of India card-images
  listicle at #5. Everything else is a gallery, a stock library, a government e-card portal, a
  product shelf or a video tutorial.
- **Brave top 15: one informational result** (the same TOI article, at #11).
- **No AI Overview on either query.** That is a difference from the invitation-maker cluster,
  where the AIO performed the reader's whole job inside the SERP. Here there is nothing
  synthesising an answer, and the PAA questions are all about message wording.

So the transactional intent dominates: most people typing this want a *card artefact* in the
next few minutes. The consequence for this post is recorded as an audit failure rather than
hidden — a 1,600-word article is competing against Canva's gallery for a query whose intent is
"give me the card", and it should not be expected to displace a design tool on that basis. What
it can do is own the sliver the whole SERP ignores: the sender who has run out of *time*, which
is the one thing neither a stock library nor a template gallery addresses anywhere on the page.

---

## What the live sibling already covers

`content/batches/2026-09-09-ganesh-10b/blogs/ganesh-chaturthi-wishes-with-name.json` —
keyword `happy ganesh chaturthi with name`, title *"Happy Ganesh Chaturthi With Name: What
Actually Lands"*.

Its angle: *"the only post that treats the name as a thing you can still get wrong — pricing
the five delivery formats by whether a misspelt name can be corrected after sending — using
SubhSandesh's platform-wide 6.8-hour median gap between a page's first save and its last
edit (n=1,065)."*

Its H2/H3 structure:

- What "happy Ganesh Chaturthi with name" actually means
- Why a name on a greeting changes what the recipient does
- Five ways to put a name on a Ganesh Chaturthi greeting (H3s: name burned into a JPEG by an
  online photo editor · stock image plus the name typed into the WhatsApp message · printed
  card with the name written by hand · name in an Instagram story caption or sticker · name
  held as live text on a page)
- Name style: what survives a phone screen
- A JPEG with a name against a page with a name
- Getting the spelling right, and fixing it when you get it wrong
- When a name on a screen is the wrong choice
- Watch the page get built / Sources

**Secondaries it has effectively already folded in.** Two of my three keywords brush against
it. Its *"Name style: what survives a phone screen"* H2 covers `happy ganesh chaturthi name
style`, and its H3 *"a name burned into a JPEG by an online photo editor"* covers part of
`happy ganesh chaturthi photo editor online`. **This post therefore does not re-litigate name
typography or name-spelling correction, and does not repeat its five-format list.** It treats
the photo-editor route only as one row in a cost-and-deadline table, which is a different
question from the one the sibling asks about it.

**Its sources, all of which this post must avoid reusing** (they are in `-10b`, so the `-10c`
cap does not formally bind, but the BRIEF is explicit that a reader landing on two SubhSandesh
Ganesh posts should not see the same citation):

- `link.springer.com/article/10.1186/s41235-024-00555-9` — own-name attention capture
- `gsb.stanford.edu/faculty-research/working-papers/personalization-email-marketing…`
- `arxiv.org/abs/1411.5451` — name-letter effect online
- `doi.org/10.3390/bs15101323` — privacy priming and personalisation
- `doi.org/10.15766/mep_2374-8265.11284` — name mispronunciation

None of these are used here. This post's lane is the greeting card as an object and an
obligation, not the psychology of a name.

**What it leaves open, and this post takes:** the sibling prices formats by *correctability*.
Nothing in it prices them by *whether they can still arrive*. It never states a postal
deadline, never gives a card price, and never confronts the reader who is five days out. The
card-versus-page comparison here is built on delivery time and cost, not on name accuracy —
and it carries the batch's Raksha Bandhan lead-time measurement, which the sibling was written
before and does not cite.

---

## Phase 2 — Gap analysis

**Table stakes** (present across the ranked pages, so the post looks incomplete without them):
what a Ganesh Chaturthi greeting card is; the standard greetings and what they mean
("Ganpati Bappa Morya", "Ganesh Chaturthi ki hardik shubhkamnaye"); free options; that you can
put a name on it; that it gets shared on WhatsApp.

**The gap.** Every ranked result assumes the reader has time. Canva, Adobe Express, PosterMyWall
and 123Greetings all hand you a canvas; Amazon and woodgeekstore hand you a parcel with a
delivery estimate they do not put in the title; the TOI listicle hands you images. **Not one
page on any of the three SERPs states a deadline.** No page says what a physical card costs
delivered, how long India Post actually takes, or what a person five days out should do
differently from a person three weeks out. The PAA proves the same blind spot from Google's
side: four questions, all about wording, none about timing.

**Stale data.** The single informational result is a Times of India article whose URL slug is
`ganesh-chaturthi-2021-…` retitled "Cards 2025", and the createcustomwishes and
invitationindia pages carry 2023-era URLs. Nothing on the SERP carries a 2026 measurement of
sender behaviour, because nobody on it collects one.

**Unanswered questions raised and dropped:** is a bought card better than a made one; does a
digital card "count"; what do you do when the card will not arrive in time; is it rude to send
a forwarded image.

**Fan-out sub-queries** → H2s and FAQs: what a Ganesh Chaturthi greeting card is · why a bought
card carries weight a message does not · what a real card costs and when it must be posted ·
card versus page, compared · what happened when cards went digital · name style and photo
editors, briefly · when the physical card is still the right answer · how late is too late.

**Angle (recorded as `batchMeta.angle`).** Wins by being the only post that prices a Ganesh
Chaturthi greeting card against a shareable page on *delivery deadline* rather than design —
₹99–₹499 and a 2–7 day post against a link that lands in seconds — against the batch's own
finding that 49.4% of measured festival senders (n=89, Raksha Bandhan) acted on the day itself
and none acted more than 7 days ahead.

---

## Phase 2b — The live with-name post declares this keyword as a fold

Raised by the coordinator on 2026-09-10, after the batch-level coverage scan was re-run. The
first scan extracted declared folds only from the header `**Secondaries folded in:**`, which
appears in 4 of the 25 live briefs; twelve others use `**Folds in:**` and were missed. The true
claimed set is 86 keywords, not 31.

**What that means here.** `content/batches/2026-09-09-ganesh-10b/research/ganesh-chaturthi-wishes-with-name.md`
line 4 reads:

> `**Folds in:** happy ganesh chaturthi name style · happy ganesh chaturthi photo editor online · ganesh chaturthi greeting card`

and `blogs/ganesh-chaturthi-wishes-with-name.json` carries all three in `article.keywords`:

> `happy ganesh chaturthi with name, ganesh chaturthi wishes with name, happy ganesh chaturthi name style, happy ganesh chaturthi photo editor online, ganesh chaturthi greeting card`

So a live post claims **all three** of this assignment's keywords on paper — the primary and
both folded secondaries.

**Why this post proceeds anyway.** A measured SERP beats a declared intention. The Phase 1 gate
above compared the two queries on (domain, title) article identity, India-localised, on three
instruments: **0 shared articles on Google `gl=in`, 1 on DuckDuckGo `kl=in-en`, 2 on Brave
`country=in`** — against a threshold of 3. On Google India the two result sets do not intersect
at all, and the reason is structural: `ganesh chaturthi greeting card` returns card surfaces
(design galleries, stock libraries, the egreetings.gov.in portal, Amazon and Etsy card
listings, a wooden-card shop), while `happy ganesh chaturthi with name` returns name-on-image
surfaces (mynameart, mynamepics, writenamepics, newmynamepix, birthdayphotoframes). The
declared fold was never earned in the index. **The gate is not re-run** — the recorded result
stands.

### Recommended reallocation — for the coordinator to apply, not this agent

This agent did **not** edit any other blog's files.

| Keyword | Recommendation | Reason |
|---|---|---|
| `ganesh chaturthi greeting card` | **Strike** from the with-name post's declared folds and from its `article.keywords`. It belongs to this post. | It is this post's primary, and it has its own non-intersecting SERP on Google India. The with-name post never states a card price, a posting deadline or a delivery time — the whole substance of the query. |
| `happy ganesh chaturthi name style` | **Leave with the live with-name post.** Drop it from this post's claim. | That post carries a whole H2, *"Name style: what survives a phone screen"*, on exactly this question. This post does not re-litigate name typography (recorded above) and mentions name style only as one priced format. |
| `happy ganesh chaturthi photo editor online` | **Leave with the live with-name post.** Drop it from this post's claim. | That post has a dedicated H3, *"a name burned into a JPEG by an online photo editor"*. This post treats the photo-editor route as one row in a cost-and-deadline table — a different question, but not enough to own the keyword. |

**Honest note on what shipped.** This post's `article.keywords` still lists both secondaries,
because the assignment instructed folding them in and reallocation is the coordinator's call,
not this agent's. If the recommendation above is accepted, `happy ganesh chaturthi name style`
and `happy ganesh chaturthi photo editor online` should be struck from **this** post's
`article.keywords` too, leaving `ganesh chaturthi greeting card`, `ganesh chaturthi card last
date` and `ganesh chaturthi card price`. The body needs no change either way: the name-style
and photo-editor material is two sentences and one H3 row, and both survive as supporting
detail without the keyword claim.

The sibling case is the opposite outcome and worth recording next to this one: the live
`happy-ganesh-chaturthi-wishes` brief declares `ganesh chaturthi quotes`, that keyword's SERP
**also** merged, and it was correctly aborted. This one survives on the evidence.

---

## Phase 3 — Sources, fetched and verified 2026-09-10

Lane: history and sociology of the greeting card, plus the physical card's delivery logistics.

**Nothing was inherited.** The dead agent's Phase 3 section named search terms and a "see
`batchMeta.sources`" pointer, but no `batchMeta.sources` existed and no URL was ever recorded —
so there was nothing to verify. Every source below was searched, fetched and read on
2026-09-10. Where a PDF was involved it was downloaded and text-extracted, and the specific
sentence carrying the cited number was located before the source was accepted.

Search terms used (phenomenon, not keyword): `greeting card social relations obligation open
access`, `greeting card ritual exchange material culture DOAJ`, `Christmas card social network
size`, `digital greeting cards mediated intimacy`, `communication media choice awkwardness
field experiment`, `India Post Speed Post service standards citizen charter`, `India Post
domestic Speed Post tariff 50 g`.

### The five that shipped

| # | Source | Subject test | Verification |
|---|---|---|---|
| 1 | India Post, **Citizens' Charter of the Department of Posts** (2021), `indiapost.gov.in/documents/CitizenCharter2021.pdf` | Pass — the printed card's delivery deadline is the post's spine | PDF downloaded (1.64 MB) and text-extracted. Table 1.2 read verbatim: Speed Post Local 1–2, Metro-Metro 1–3, State Capital to State Capital 1–4, Same State 1–4, Rest of the country 4–5 **days**. Table 1.1 First Class Mail (letters, postcards, inland letter cards): Local 2, Metro-Metro 2–4, Same state 2–6, State Capital to State Capital 3–5, Rest of country 5–6. Footnotes read: Sundays excluded; Branch Office booking or delivery adds 1 day. |
| 2 | India Post, **Domestic Speed Post Document** (Mail Products), `indiapost.gov.in/mailproducts/premiumservices` | Pass — the delivered cost of the physical format | Page fetched and indexed. Verbatim: "delivers across the country @ **INR 47.00** (GST extra as applicable) and Local @ **INR 19.00** (GST extra as applicable) for consignments up to 50 grams". Specifications read: max weight 500 g; max 420 mm × 297 mm × 24 mm. **No publication date on the page — `publishedDate` omitted, not back-filled with the fetch date.** |
| 3 | **Hill & Dunbar, "Social Network Size in Humans"**, *Human Nature* 14(1):53–72, 2003 — author's institutional copy at `rahill.webspace.durham.ac.uk` | Pass — the study *is* card-sending behaviour | PDF downloaded (819 KB), full text extracted and read. Methods and Results located verbatim: "Forty-three questionnaires were returned, between them involving a total of 2,984 Christmas cards… The mean number of Christmas cards sent was 68.19 (range 11–149)… mean network size of 153.5… 124.9 for the 22 questionnaires for which this distinction was made". Kin ≈ 21% from the abstract. Peer-reviewed; free full text from the first author's own university page. |
| 4 | **Kumar & Epley, "It's Surprisingly Nice to Hear You"**, *Journal of Experimental Psychology: General*, advance online 2020-09-10 — author's copy at `kumar-amit.com` | Pass — media choice for a personal greeting | PDF downloaded twice (author copies on both `nicholasepley.com` and `kumar-amit.com`; the latter shipped because the URL is stable and human-readable). **Full text read, not the abstract.** Experiment 1 located verbatim: "Sixty-seven percent of participants indicated that they would prefer to interact over e-mail than over the phone, χ²(1, N = 200) = 23.12, p < .0001" while expecting a stronger bond by phone; abstract confirms voice produced stronger bonds "and no increase in awkwardness". |
| 5 | **Davydova, "Thematic analysis of scientific publications dedicated to a greeting card…"**, *Theory and Practice of Design* 1(25):202–209, 2022, DOI `10.18372/2415-8151.25.16797` | Pass — directly about greeting-card scholarship | Found via DOAJ. `doaj.org` returned HTTP 403, so the PDF was retrieved from the Index Copernicus mirror (492 KB) and text-extracted; the DOI was then resolved and confirmed HTTP 200 → `jrnl.kai.edu.ua/index.php/Design/article/view/16797`, which was also fetched directly and confirmed to be the right article. **The publisher's own landing page is what shipped as the URL, not the DOI** — see the `doi.org` cap note below. Gold open access, peer-reviewed. Cited claim taken from the abstract and results, which state that the scholarship treats the postal greeting card "from the standpoint of socio-cultural and historical heritage, and not only from the standpoint of a means of transmission information". |

### Rejected, and why

- **`doaj.org/article/1339e…`** — HTTP 403 to a non-browser client. Replaced with the publisher.
- **BORIS (Bern), "digital greeting cards as a form of counter-memory"** — the repository is
  behind an Anubis proof-of-work bot wall; the PDF could not be read, so it was **not cited**.
  It looked like the single best on-lane source on *digital* cards specifically, and losing it
  is the biggest gap in this source list.
- **Emily West, "A taste for greeting cards"** (*Journal of Consumer Culture*, 2010) and
  **Alexandra Jaffe, "Packaged Sentiments"** (*Journal of Material Culture*) — both on-subject
  and both paywalled behind SAGE with no open version found. Not cited; nothing was taken from
  a publisher abstract page.
- **The BGSU honors project on greeting-card selection** — open access but an undergraduate
  thesis, not peer-reviewed. Rejected rather than counted as the scholarly source.
- **`psychologycorner.com`'s greeting-card piece** — a collaboration with Paperless Post, an
  e-card builder. Competitor-adjacent. Rejected.
- **Card-maker tools of every kind** (Canva, Adobe Express, PosterMyWall, Kapwing,
  createcustomwishes, 123Greetings, ayozan, homiwork, joliecarte, waybayme, pikaaso) and the
  card shops (Amazon, Etsy, woodgeekstore) — **competitors under `competitors.md`.** Read in
  Phase 1, never cited, never linked.

### The ₹99–₹499 card price is an observation, not a citation

The shelf price of a folded religious-festival card could not be sourced without linking a
retailer, and retailers are competitors. It is stated in the body as a first-hand observation
of the shopping results for this query on 2026-09-09, with no link and no attribution, and it
is the one number in the post that has no third-party source behind it. Recorded here so it is
not mistaken for a sourced figure.

### Cap check, re-run 2026-09-10 against all six committed siblings

At the time of writing, `blogs/` held six JSONs (banner-and-poster, good-morning-wishes,
greeting-card, rangoli-designs, songs-and-bhajans, ganpati-bappa-photos). No source URL appears
in more than 2 posts and no domain in more than 3. This post introduces four fresh domains and
repeats none: `indiapost.gov.in`, `rahill.webspace.durham.ac.uk`, `kumar-amit.com` and
`jrnl.kai.edu.ua`.

**`doi.org` swap, on the coordinator's cap warning (2026-09-10).** Davydova originally shipped
as `https://doi.org/10.18372/2415-8151.25.16797`, which would have put `doi.org` at **3 posts
in this batch — exactly the domain cap**, alongside banner-and-poster and ganpati-bappa-photos.
The BRIEF classes `doi.org` as a resolver rather than a publisher, so it arguably would not
have breached anything, but the cap is easier to respect than to argue with: the citation was
resolved to the publisher's own landing page at `jrnl.kai.edu.ua` and re-verified there. That
drops `doi.org` to **2 posts** and leaves a slot for a later sibling. `en.wikipedia.org` stands
at 2 posts; this post spends none of that budget, because it carries **zero Wikipedia links in
the body** and uses Wikipedia only as `sameAs` targets in schema.

---

## Phase 4 — Structure as written

H1 → answer paragraph (two paragraphs, 3 sentences each; three first-party numbers inside the
first 150 words) → 7 content H2s → the verbatim social block → `## Sources`. FAQs are in
`article.faqs` only; there is no FAQ heading anywhere in `contentMarkdown`.

| Block | Fan-out sub-query it answers |
|---|---|
| `## What a Ganesh Chaturthi greeting card is: four formats, one deadline` | what a Ganesh Chaturthi greeting card is |
| `## The posting deadline for 14 September 2026 was 7 September cross-country` | when it must be posted · how late is too late |
| `## Four ways to send a Ganesh Chaturthi greeting card, priced` (4 H3s) | what a real card costs · name style and photo editors, briefly |
| `## Card against page: ₹146 and five working days versus ₹0 and seconds` | card versus page, compared |
| `## What the printed card does that no page can: 2,984 cards across 43 households` | why a bought card carries weight a message does not · what happened when cards went digital |
| `## Why 67% pick the easier channel, and what our 89 rakhi pages say` | (carries both mandatory BRIEF §1 disclosures) |
| `## When a link is the wrong answer: 49.6% phone views, 0% on a landline` | when the physical card is still the right answer |

Eight of the eight Phase 2 fan-out sub-queries are covered. The weakest is *"what happened when
cards went digital"*, which is compressed into two sentences inside the Hill-and-Dunbar H2
rather than getting its own section — a consequence of the 1,700–1,780 word ceiling, and the
BORIS source that would have carried it being unreadable.

**The comparison table** is 4 rows × 4 columns. Column 4 is the first-party column: 49.6% of
46,005 page views arriving on a phone, and the 5.4-hour median from a festival page's first
save to its last edit (n=89). Rows 1 and 2 say plainly that there is no first-party data for a
posted card, rather than inventing a number for the sake of a full column.

**Both BRIEF §1 disclosures are in body prose**, bolded, in the `## Why 67% pick the easier
channel` section: that the measurement is Raksha Bandhan 2026 and not Ganesh Chaturthi — a
different, one-day festival against Ganesh Chaturthi's ten days to Anant Chaturdashi — and that
n = 89 is small, with an explicit instruction not to read a per-template or per-region rate off
it and a statement that there is no Ganesh page-creation data at all (occasion-dated pages are
144 of 3,894, 3.7%).

**Word count: 1,773 by `wordCount()` in `app/lib/batches.ts`** — the studio's own measure,
replicated exactly (fenced blocks to spaces, then `[#>*_`|\-\[\]()!]` to spaces, then split).
Plain split reads 1,725. The three earlier posts in this batch landed 1,807–1,836 on the studio
measure because their agents trusted a plain split; this one was measured with the studio
function from the first draft and trimmed twice to land inside 1,700–1,780. The ~51-word social
block is inside that total.

---

## Phase 5 — Links and schema

**Outbound: 5**, all fetched and verified above, all inline at the sentence stating the fact.
**Zero competitor links. Zero Wikipedia links in the body** — Wikipedia appears only as
`sameAs` targets in schema, which does not count against the 0–2 body budget.

### The internal-link reversal — the Ganesh page shipped mid-run

**First draft (2026-09-10, morning).** Written to BRIEF §3 as issued: `/happy-ganesh-chaturthi`
neither linked nor in `templateUrls`, `/templates` as the topical CTA, and the final H2 hedged
in prose — "our Ganesh Chaturthi page is built but not yet published on the site, so nothing in
this post links to it" — so that no sentence depended on the reader opening it.

An observation recorded during that draft, which turned out to be the leading edge of the
deployment: a plain GET to `https://subhsandesh.in/happy-ganesh-chaturthi` already returned
**HTTP 200** with a real `<title>Happy Ganesh Chaturthi — Send a Ganpati Wish They Can Perform,
Free | SubhSandesh</title>`, while the HTML payload still contained the strings `404` and `not
found`. That was read conservatively at the time — consistent with a Next.js not-found route
rendering under a 200 — and the instruction was obeyed as absolute rather than second-guessed.

**Revision (2026-09-10, later).** The coordinator rewrote BRIEF §3: the page is live, the
sitemap went from 1,121 URLs with no Ganesh entry to 1,123 with both the template and the
guide, and the "no sentence may depend on the reader opening it" restriction is lifted.
Re-verified independently here before any edit — both URLs HTTP 200, and
`/guides/happy-ganesh-chaturthi` carries H1 *"Build a Ganesh Chaturthi page for the people you
cannot sit with"*. The final H2 was then rewritten: the hedge is gone, the "built but not yet
published" sentence is deleted, and the page is stated directly as something the reader can send
tonight. This mattered more here than in most of the wave, because the page half of the
card-versus-page spine is now openable.

**Internal: 4** — the maximum the skill allows — all placed in the final content H2, after the
post has established why the reader would want them:

- `/happy-ganesh-chaturthi` — the topical CTA, now live. In `TEMPLATE_LINKS`.
- `/guides/happy-ganesh-chaturthi` — the written step-by-step. **Not in `TEMPLATE_LINKS`**; see
  the audit failure below.
- `/happy-rakshabandhan-to-brother` — the collection the n=89 measurement actually comes from.
  In `TEMPLATE_LINKS`.
- `/shaadi-card` — an animated card that *is* a page, which is the post's whole comparison. In
  `TEMPLATE_LINKS`.

`/templates` was dropped, as directed.

`batchMeta.templateUrls`: `["/happy-ganesh-chaturthi", "/happy-rakshabandhan-to-brother",
"/shaadi-card"]` — three paths, all inside `TEMPLATE_LINKS`. The guide is deliberately excluded
from `templateUrls` because it is not a template, which keeps the checklist item
*"templateUrls all exist in TEMPLATE_LINKS"* honestly passing.

**`structuredData` is additive only**, two blocks:

- `ItemList` at `#formats` — 4 `ListItem`s mirroring the four H3s in order, each `description`
  carrying only concrete cost and delivery facts.
- `BlogPosting` at `<canonicalURL>#post` — the `@id`-matched enrichment block, carrying `about`
  (Ganesh Chaturthi), four `mentions` (Greeting card, India Post, Ananta Chaturdashi, Ganesha)
  and `citation` mirroring `batchMeta.sources` **one-to-one, five for five**.

No `BlogPosting`/`FAQPage`/`BreadcrumbList`/`Organization`/`WebSite`/`Person` is re-emitted as
an unmatched block; no `AggregateRating`, `Review` or `HowTo` anywhere.

**Every `sameAs` was verified against the Wikipedia API** (`action=query&redirects=1&
prop=pageprops&ppprop=wikibase_item`) with the Wikidata QID paired: Ganesh Chaturthi Q929250,
Ganesha Q1579, Greeting card Q915196, India Post Q3519720, Ananta Chaturdashi Q3630768. Note
`Anant Chaturdashi` **redirects** to `Ananta Chaturdashi`; the canonical title is what shipped.

---

## Phase 6 — Audit

All 50 items in `references/publish-checklist.md` audited, strings copied verbatim including
`**bold**` and the full text of the long source-cap clause.
**`|passed| = 48`, `|failed| = 2`, `48 + 50 − 50 = 48 + 2 = 50`, and `passed ∩ failed = ∅`** —
both asserted programmatically against the emitted JSON.

The batch JSON also passes the validator in `references/article-json-schema.md` verbatim, run
from the repository root over the whole `blogs/` directory.

### The 2 failures

1. **"Slug is not already taken in Strapi"** — not re-verified this run; the Strapi check needs
   credentials this session did not have. The Phase 1 brief records the slug verified free on
   2026-09-09, which is one day stale and unconfirmed here. Cheap to re-check at publish time.
2. **"No source passes the swap test…"** — three of five pass cleanly (Hill & Dunbar, Davydova,
   and the Speed Post tariff read against a card's shelf price). Two do not: the Citizens'
   Charter delivery norms and Kumar & Epley on channel choice could both sit unchanged in the
   sibling `ganesh-chaturthi-invitation-maker` post, which faces the same printed-versus-digital
   deadline question. Both are load-bearing here and neither breaches the ≤2-posts URL cap, so
   they were kept and the failure reported.

### The format finding, and why it is not in `failed[]`

BRIEF §5 asks for the format finding to go in `failed` with an honest `why`. It could not be
put there without breaking the two invariants BRIEF §6 also requires — verbatim checklist
strings, and `|passed| + |failed| == 50` — because no checklist item expresses it. It is
therefore stated plainly and at length in `auditReport.honestAssessment` instead, which BRIEF
§5 also requires. The finding itself: **DuckDuckGo's top 10 has zero informational results,
Google's top 13 has exactly one (a retitled 2021 Times of India listicle), and there is no AI
Overview on either query.** A 1,770-word article is competing against design tools for a query
whose dominant intent is "give me the card now". It should not be expected to displace Canva's
gallery. Its honest ceiling is the last-minute-sender sliver the whole SERP ignores, plus
answer-engine citation on the deadline and cost questions, where it is the only page carrying
numbers. **No ranking outcome is predicted anywhere in the post or the audit.**

---

## Files

- `content/batches/2026-09-09-ganesh-10c/blogs/ganesh-chaturthi-greeting-card.json` (written 2026-09-10)
- `content/batches/2026-09-09-ganesh-10c/research/ganesh-chaturthi-greeting-card.md` (this file)
- Raw SERP captures: `scratchpad/ganesh-chaturthi-greeting-card-serp-{ddg,brave}-{q1,q2}.html`
- Build script, Phase 3–6 run: `scratchpad/ganesh-chaturthi-greeting-card-build.py`

Nothing outside these two files was modified. `batch.json`, `content/facts.md` and every other
blog's files were left untouched, including the two edits recommended in Phase 2b.
