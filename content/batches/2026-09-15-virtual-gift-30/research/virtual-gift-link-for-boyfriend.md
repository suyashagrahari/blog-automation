# Research brief — `virtual gift link for boyfriend`

Batch `2026-09-15-virtual-gift-30`, wave 3, row 17 of `WAVE3-PLAN.json`.
Slug `virtual-gift-link-for-boyfriend` · category `digital-gifts-romance` ·
templates `/recharge`, `/challan`, `/train-ticket` · `mustDifferentiate: true`.

---

## Phase 0 — data gate

`npm run facts` was not re-run (BRIEF-WAVE3 §5: the production-DB read was denied
today). `content/facts.md` as measured **2026-09-15** was used and every figure is
cited with that date.

Gate satisfied. Seven relevant lines, and the two in the first 150 words are
49.0% phone opens (24,493 of 49,968 views) and 11.5 average views per created
page — both chosen because they are about *the link being opened*, which is this
post's subject, and because the 40.6% / 6.2-hour pair that BRIEF.md §4 recommended
now appears across most of the 60 published siblings.

The `## Pricing (fill in by hand)` block is empty, so the post states no price and
says so in the body and in an FAQ.

**Disclosure carried in the body:** the database records which *template* was
opened, not who received it, so a `/love-gf` count does not prove the recipient was
a boyfriend.

## Phase 1 — SERP (from `SERPS-WAVE3.md`, ddg-html, `kl=in-en`, 2026-09-16)

| # | Result | What it is | Direct answer? | Data | Format |
|---|---|---|---|---|---|
| 1 | giftfeels.com/gifts-for-boyfriend | competitor product page | product pitch | none | landing page |
| 2 | giftfeels.com/virtual-gifts | competitor product page | product pitch | none | landing page |
| 3 | surprises.gift/virtual-gifts-for-boyfriend | competitor product page | product pitch | none | landing page |
| 4 | virtualgift.me | competitor homepage | product pitch | none | landing page |
| 5 | blog.messagear.com — "250+ ideas" | competitor blog listicle | buried under an intro | none | listicle |
| 6 | aiskyla.com | competitor homepage | product pitch | none | landing page |
| 7 | giftsqr.com/en | competitor homepage | product pitch | none | landing page |
| 8 | ourgiftverse.com/…long-distance-boyfriend | competitor category page | product pitch | none | landing page |
| 9 | digiflower.net/…long-distance-boyfriend | competitor product page | product pitch | none | landing page |
| 10 | iloveyou.gift/gifts/virtual-gifts-for-boyfriend | competitor product page | product pitch | none | landing page |

Read for gap analysis only. **Every one is on the banned list** (BRIEF.md §1,
BRIEF-WAVE2 §0, BRIEF-WAVE3 §1) — none is cited, linked or paraphrased.

10 of 10 are commercial pages for gift-page builders. There is no blog, no forum
thread and no informational page in the set. Gate 2 (ecommerce) is clean: no
Amazon, Flipkart, Etsy, IGP or FNP.

## Phase 2 — gap analysis

**Table stakes** all ten cover: what a virtual gift link is, that it is instant and
needs no address, that you personalise it with photos/messages/music, and that it
suits long distance.

**The gap.** Not one of the ten says anything about the URL as an object. Nothing on
what the preview card shows in a chat before he taps; nothing on whether a sent link
can be edited, recalled or made to expire; nothing on forwarding or what a password
actually covers; nothing on whether the page still resolves next year; nothing on
what a managed work device or a data-saving browser does to it. They sell the build
and stop at "share the link".

**Stale data:** none — the competitor set publishes no data at all, which is itself
the finding.

**Unanswered questions they raise:** "share the link instantly" (with whom? for how
long?), "private and secure" (against what?), "keep it forever" (hosted by whom?).

**Fan-out sub-queries → H2s:**

| Sub-query | H2 |
|---|---|
| what is a virtual gift link for a boyfriend | What a virtual gift link for a boyfriend actually is |
| what does the link look like when you send it | What his phone shows before he taps the link |
| can I edit / delete / unsend a gift link | Can you edit the page, or take it back, after you send it? |
| what should I check before sending | Three checks to run before you paste it into his chat |
| link vs screenshot vs QR | What you can take back, and what you cannot |
| should I password protect it | Why putting a password on his page is a relationship question |
| will the link still work later | Whether the link still exists a year from now |
| when is a link a bad idea | When a virtual gift link is the wrong thing to send him |

## Anti-cannibalisation (BRIEF-WAVE3 §2)

`mustDifferentiate: true`, `nearestWritten: virtual gift for bf` (4/10 shared URLs),
`nearestNewRow: best virtual gift for boyfriend` (4/10).

Siblings read in full before drafting: `virtual-gift-for-bf`,
`best-virtual-gift-for-boyfriend`, `virtual-gift-link-free`,
`virtual-gift-website-for-boyfriend`, `virtual-gift-for-boyfriend-birthday`,
`online-surprise-for-long-distance-boyfriend`, `shareable-gift-link-for-couples`,
`long-distance-birthday-gift-website`.

**The split, in one sentence:** `virtual-gift-for-bf` argues which *register* of gift
to pick for a boyfriend — joke formats over sincere ones; this post is about the link
*after you press send* — the preview card, editing a live URL, what a password
covers, and whether the address still resolves in a year. It is cross-linked from the
closing section.

**A second overlap the plan did not flag, recorded honestly.**
`shareable-gift-link-for-couples` (wave 2) already runs "What the link looks like when
it lands", "Who else can open it" and "What happens to the link over time" for a
different keyword. Its SERP overlap with this row is below the 4/10 threshold, so
Google is unlikely to collapse them, but roughly a third of the assigned lane was
already occupied. Handling:

- The two posts are cross-linked.
- No source is shared with it. It uses arxiv, PLOS, Strathprints, ogp.me and Pew;
  this post uses six domains none of its 79 siblings has used.
- This post's distinct ground is **editing-after-sending** (a full H2 on the 6.2-hour
  median edit gap, where the sibling has one FAQ line), the **device variables**
  (`Save-Data`, managed work phones), and **password-as-relational-act** via the
  Vendemia & Bevan survey — none of which appears in the sibling.
- `ogp.me` was deliberately **not** cited: it already sits at 2 of its 3 allowed uses
  in this batch and taking the last slot mid-wave risks a cap violation. Slack's
  unfurling documentation is used instead, which verifies the same mechanism (the
  chat platform crawls the URL to build the preview).

Abort was considered and rejected: the remaining lane is genuinely unoccupied by any
boyfriend-keyword sibling and by all ten SERP results.

## Phase 3 — sources

APIs behaved as BRIEF-WAVE3 §3 predicted. **Crossref → Unpaywall was the working
route** and produced every research source here. DOAJ returned HTTP 502 on all four
short queries. OpenAIRE answered (HTTP 200) but its keyword matching is strict AND,
so three-plus-word queries returned zero; used once, then dropped. OpenAlex, Semantic
Scholar and CORE were **not called at all** — §3 marks them dead or degraded for
today.

Search terms tried (the phenomenon, not the keyword): `link rot reference rot web
citation persistence`, `URL sharing privacy expectations unlisted links`,
`message link preview privacy disclosure metadata`, `link preview instant messaging
privacy risk unfurling`, `open graph metadata link preview social sharing`,
`spoiler enjoyment narrative foreknowledge`, `unintended audience context collapse
forwarding messages`, `anticipation valuation delayed consumption`, `digital
possessions impermanence virtual ownership loss`, `web archive URL persistence decay
shortened links`, `screenshot sharing private messages norms interpersonal`,
`communication privacy management boundary turbulence disclosure online`, `password
sharing romantic partners digital accounts`, `smartphone notification preview content
privacy bystander`, `mobile in-app browser web compatibility users`.

**A real negative finding:** there is no peer-reviewed literature on link-preview
cards spoiling a surprise. The spoiler work that exists (Communication Research 2014;
the 2016 replication) is about narrative fiction and is paywalled with no open
version in Unpaywall, and the closest security work is about metadata leakage in
messaging transport, not about preview content. The preview-card claims in this post
are therefore grounded in a **technical** reference that documents the mechanism,
not in research, and are labelled as such.

| # | Source | Domain | Type | Verified claim | Date |
|---|---|---|---|---|---|
| 1 | Zittrain, Albert & Lessig, *Perma* | harvardlawreview.org | scholarly, open | Of 555 URLs in US Supreme Court opinions, 136 (24.5%) returned 404; of 353 HTTP-200 URLs only 277 (78.5%) still showed the cited material; overall reference rot ≈50% | 2014-03 |
| 2 | Saric et al., *Hyperlink Hijacking*, ACM Web Conf '24 | eprints.qut.edu.au | peer-reviewed, CC BY | >572,000 never-registered .com domains are actively linked; of 51 registered, 88% beat a control domain's traffic, up to 10× more visits, under $20 each | 2024-05-08 |
| 3 | Vendemia & Bevan, *Why Do People Share SNS Passwords…* | digitalcommons.chapman.edu | peer-reviewed (Communication Research Reports) | N=948: relationship satisfaction, relationship length and SNS jealousy predicted password sharing; distrust/suspicion reasons negatively related to satisfaction | 2024-10-24 |
| 4 | Venema & Lobinger, *"And somehow it ends up on the Internet."* | firstmonday.org | peer-reviewed, open | 34 interviews: trust, confidentiality and consent are the fundamental conditions for photo-sharing in close relationships, yet treated as fragile; the image-maker is held responsible for unintended re-sharing | 2017-07-03 |
| 5 | Slack, *Unfurling links in messages* | api.slack.com | technical reference | "When a link is spotted, Slack crawls it and provides a preview" — the platform fetches the page to build the card | undated |
| 6 | W3C WICG, *Save Data API* | wicg.github.io | technical reference | `Save-Data: on` is an explicit user opt-in to reduced data usage; origins may then deliver "smaller image and video resources, alternate markup, and so on" | undated |

- **Subject test:** #3 and #4 are about romantic partners and what they share. #1 and
  #2 are about link persistence, which is literally this post's subject.
- **Scholarly + open access:** #2 (CC BY full text on the repository), #3 (repository
  landing page, abstract read), #4 (fully open).
- **Abstract only:** #3 — recorded in the body sentence and in `sources`.
- **Generic context statistics:** zero.
- **Cap check, run against `blogs/` and `SPENT-SOURCES.json` immediately before
  writing:** all six domains had 0 prior uses across the 70 sibling files.
- **Competitors cited:** zero.
- Wikipedia in the body: 1 (Open Graph protocol, entity disambiguation).

## Phase 4–5 — draft and links

1,768 words in `contentMarkdown`, FAQs excluded. 10 FAQs in `article.faqs` only.

Template links (4, all in `TEMPLATE_LINKS`), each placed after the section that earns
it, and each described as the joke it is rather than as a sincere gesture:

- `/challan` — a mock traffic notice; used in the preview-card section because a
  deliberately bureaucratic card is the gag, so the "spoiler" problem inverts.
- `/recharge` — a prepaid relationship recharge with a plan grid and a receipt; used
  in the editing section because the receipt is screenshot-shaped and survives the
  link.
- `/train-ticket` — a love letter as a train ticket, with a PNR, a clearing waitlist
  and a relationship running status; used in the link-rot section because it is built
  to be reopened, which is what 11.5 average opens looks like.
- `/templates` — once, at the closing CTA, next to the "cannot confirm pricing" line.

Blog cross-links (excluded from the 2–4 template count per BRIEF-WAVE2 §3):
`/blog/virtual-gift-for-bf` (required by §2) and
`/blog/shareable-gift-link-for-couples`.

`structuredData`: one `@id`-matched enrichment block on `<canonicalURL>#post` carrying
`citation` (6, mirroring `batchMeta.sources` one-to-one), `about` (Gift Q184303, URL
Q42253) and `mentions` (Link rot Q1193907, Open Graph protocol Q17107778, Password
Q161157, QR code Q12203) — every QID checked against the Wikipedia API. Plus one
`ItemList` mirroring the three H3s in order.

Slug checked against Strapi on 2026-09-16: not taken. Category `digital-gifts-romance`
confirmed against the live category list.

## Phase 6 — audit

49 passed, 1 failed, disjoint, 50 total. The failure is the stop word "for" in the
slug, which is structural: the slug is fixed by `WAVE3-PLAN.json` row 17 and is the
exact-match keyword.
