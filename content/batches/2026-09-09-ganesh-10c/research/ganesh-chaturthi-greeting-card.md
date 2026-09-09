# Research brief — `ganesh-chaturthi-greeting-card`

- **Batch:** `2026-09-09-ganesh-10c` (assignment n=4, cluster C13)
- **Primary keyword:** `ganesh chaturthi greeting card`
- **Folds in:** `happy ganesh chaturthi name style` · `happy ganesh chaturthi photo editor online`
- **Slug:** `ganesh-chaturthi-greeting-card` (verified free on Strapi today)
- **Cannibalisation sibling:** `ganesh-chaturthi-wishes-with-name` — **already live**, batch `2026-09-09-ganesh-10b`, keyword `happy ganesh chaturthi with name`
- **Research lane:** history and sociology of the greeting card — mediated ritual, why a bought token carries obligation, what changed when cards went digital
- **Run date:** 2026-09-09. Ganesh Chaturthi 2026 is **Monday 14 September** (five days out). Anant Chaturdashi visarjan **Friday 25 September**.

---

## VERDICT: **GATE PASSES — post written.**

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

## Phase 3 — Sources

See `batchMeta.sources` in the blog JSON for the fetched-and-verified list with publication
dates. Lane: history and sociology of the greeting card.

Search terms used (phenomenon, not keyword): `greeting card ritual obligation sociology`,
`greeting card industry sentiment history`, `material culture of cards and gifts`,
`gift exchange reciprocity obligation anthropology open access`, `digital gifting mediated
intimacy study`, `e-card versus physical card recipient perception`, `Speed Post delivery
norms India`.

**Recorded honestly:** the greeting card is a thinly studied object. There is a real literature
on gift exchange and on mediated intimacy, and a smaller one on cards specifically, much of it
paywalled monographs rather than open-access journal articles. Where only an abstract was
readable that is recorded in the audit.

---

## Files

- `content/batches/2026-09-09-ganesh-10c/blogs/ganesh-chaturthi-greeting-card.json`
- `content/batches/2026-09-09-ganesh-10c/research/ganesh-chaturthi-greeting-card.md` (this file)
- Raw SERP captures: `scratchpad/ganesh-chaturthi-greeting-card-serp-{ddg,brave}-{q1,q2}.html`
