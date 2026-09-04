# Research brief — `romantic gift for bf birthday`

- **Slug:** `romantic-gift-for-bf-birthday`
- **Category:** `milestone-birthdays` (verified live in Strapi, 2026-09-03)
- **Slug availability:** verified free — `strapi.subhsandesh.in/api/articles?filters[slug][$eq]=romantic-gift-for-bf-birthday` returned `total: 0` on 2026-09-03.
- **Demand:** 19x in the harvest, third-highest. Note the keyword says **bf**, not
  boyfriend; that is how the query is actually typed.
- **Secondary keywords served:** `romantic gift for bf` (10x), `birthday gift for bf idea` (1x).
  Ignored as junk co-occurrence: `birthday gift for bf dad`.

---

## Phase 0 — data gate

`content/facts.md` was regenerated 2026-09-03. The gate passes: the keyword has a
directly matching page type (`/birthday-gf`, #5, 258 created, 7.5%) plus a
platform-wide creation total and an edit-span median, so more than three relevant
facts exist and at least two fit inside the first 150 words.

**Facts used (byte-verbatim in `batchMeta.factsUsed`, 8 lines).** Primary fact chosen
to differentiate from the nine sibling posts: the `/birthday-gf` count and the
7.2-hour median edit span — deliberately **not** the 50.2% mobile-open figure, which
every neighbour will reach for first. The mobile figure appears once, late, in the
"wrong choice" section where it is an argument against the product rather than for it.

**What the data does not say, and is not claimed anywhere in the post:** the database
records no recipient gender. Nothing in the post says or implies that any share of
pages is sent to a boyfriend. `/birthday-gf` is described as a birthday page for a
partner, which is what `TEMPLATE_LINKS` calls it.

**No price, cost, tier or "free" claim appears anywhere.** The Pricing block in
`facts.md` is empty. The only occurrence of the string "price" in the JSON is inside a
byte-verbatim `publish-checklist.md` item quoted in the audit report.

---

## Phase 1 — SERP, as already measured

From `content/keywords/2026-09-03-gift-gf-bf/serps.md`, real Google `gl=in&hl=en`,
2026-09-03. **Not re-derived.**

| Host | Read | Verdict |
|---|---|---|
| `oyehappy.com` | weak | competitor retailer |
| `oyegifts.com` | weak | competitor retailer |
| `pinterest.com` | weak | UGC |
| `fnp.com` | weak | competitor retailer |
| `tiedribbons.com` | weak | competitor retailer |
| `confettigifts.in` | **strong** | competitor retailer ranking on blog URLs — study, never cite, never mirror |
| `theknot.com` | **strong** | US wedding authority; beatable only on India-specific ground |

5 of 7 organic hosts weak. **An AI Overview fired**, so the post is written for
extraction: the answer is a liftable standalone paragraph in the first 150 words, every
H2 is answerable alone, and each H2 carries a figure.

**Honest limit on Phase 1.** Per-URL fetches of the ranking pages were not possible in
this run. `WebSearch` quota is exhausted, the SERP log records **hosts, not URLs**, and
direct probes returned `theknot.com/content/gifts-for-boyfriend` → HTTP 403 (Access
Denied) and `confettigifts.in/blogs/news` → a Shopify blog index whose only heading is
`H1: News`. So the competitor comparison table the skill's Phase 1 asks for could not
be built at page level. Consequence: the "no section mirrors a competitor's structure"
item is satisfied by construction (their structure was never read), and the claim that
this post says something none of them say rests on the first-party numbers, which no
retailer can publish at all.

---

## Phase 2 — gap and angle

**Table stakes** (a listicle SERP demands these): concrete gift options, something
about surprise/timing, something about personalisation, an acknowledgement of distance.

**The gap.** Every page on this SERP treats the birthday as a *shopping occasion* — a
category to browse. None of them treat it as a **dated, recurring, personally-owned
landmark**. That is the one structural difference between a birthday and the
anniversary keywords two other agents in this batch are writing: an anniversary is a
shared beginning; a birthday belongs to one person and recurs on a fixed date he
already watches.

**Fan-out sub-queries → H2s** (mine, not a template):

1. What counts as a romantic gift for a bf birthday? → definition H2
2. How is a birthday gift different from an anniversary gift? → temporal-landmark H2
3. What are the actual options and what does each one cost me in lead time? → six H3s
4. Am I choosing for him or for me? → the giver/recipient research H2
5. Which option survives a fixed date? → comparison table H2
6. When is a digital page the wrong answer? → downside H2

**Angle sentence.** Wins by being the only post that treats a boyfriend's birthday as a
fixed, recurring temporal landmark on his own timeline rather than a shopping occasion
— pairing the 2015 PLOS ONE milestone-birthday finding with SubhSandesh's own 258
created birthday pages (7.5% of 3,425) and the 7.2-hour median edit span.

**Distinctness discipline.** Does **not** open with "why a digital gift beats a physical
one". The comparison table compares options on *lead time, same-day survivability and
re-openability next year* — constraints that only exist because a birthday is a fixed
recurring date — rather than digital-vs-physical.

---

## Phase 3 — sources (5), and how each was verified

Search was on the phenomenon, not the keyword. Queries run against OpenAlex, DOAJ,
Europe PMC and Crossref: `gift giving givers recipients preferences mispredict`,
`gift givers recipients desirability feasibility`, `perceived effort gift
appreciation`, `anticipation savouring positive event`, `birthday temporal landmark
fresh start effect`, `birthday celebration relationship significance`, `romantic gift
giving couples relationship`, `hybrid gifting digital physical HCI`, `personalisation
customisation gift recipient evaluation`.

| # | Source | Date | Subject test | Scholarly | Open access | Verification |
|---|---|---|---|---|---|---|
| 1 | *Milestone Age Affects the Role of Health and Emotions in Life Satisfaction*, PLOS ONE | 2015-08-05 | **pass** — about birthdays | yes | yes, CC BY | **full text fetched** |
| 2 | *Gifting digital versus physical gift cards*, Psychology & Marketing | 2023-01-07 | pass — giver/recipient divergence | yes | yes (Unpaywall: publisher, published version) | **abstract only** — article page HTTP 403 |
| 3 | *"More than a cliché": Experiencing Hybrid Gifting in the Wild*, ACM TOCHI | 2023-08-31 | pass — digital/physical gifting | yes | yes, CC BY 4.0 | **abstract only** — HTTP 403 |
| 4 | *The paradox of surprise*, European Journal of Marketing | 2020-09-18 | pass — surprising gifts, close relations | yes | OA accepted MS at research.cbs.dk | **abstract only** — both HTTP 403 |
| 5 | *The consumption of experiential gifts…*, Frontiers in Psychology | 2024-01-12 | pass — gift type and recipient gratitude | yes | yes, CC BY | **full text fetched** |

Zero generic context statistics. Zero Wikipedia links in the body. Zero competitor
citations. Five distinct domains, none of them on the 42-URL spent list, and none
appears more than once here.

**Why three are abstract-only.** `onlinelibrary.wiley.com`, `dl.acm.org`,
`www.emerald.com` and `research.cbs.dk` returned HTTP 403 to every user-agent tried
from this environment, while `example.com`, `api.crossref.org`, `journals.plos.org` and
`frontiersin.org` returned 200 — so this is publisher anti-bot behaviour, not a network
fault. For those three the quoted sentences come from **publisher-supplied abstract
metadata via the Crossref API**, verbatim, and no claim in the post goes beyond the
abstract. This is recorded as an audit failure rather than papered over.

---

## Verifying the brief's two flagged claims

### 1. "Givers systematically mispredict what recipients want" — **narrowed**

The brief flagged this as unverified today. It is **not wrong, but the strong form is
not supported by anything I can open.** The canonical papers exist and are heavily
cited — Gino & Flynn, *Give them what they want* (JESP 2011, 139 citations); Galak,
Givi & Williams, *Why Certain Gifts Are Great to Give but Not to Get* (Current
Directions 2016, 100); Yang & Urminsky, *The Smile-Seeking Hypothesis* (Psychological
Science 2018, 62) — and **Unpaywall reports all three as `is_oa: false`.** I could
verify their existence and titles, not their contents.

What the openable literature does support is the **narrower** version, which is what
the post states: giver and recipient preferences have been shown to diverge in
specific, documented situations, and each is reported as a new instance rather than a
case of one general law. The 2023 *Psychology & Marketing* abstract makes exactly that
framing explicit — it presents its result as "**a new instance in which givers' and
recipients' preferences diverge**". So the post asserts the instance (digital delivery
mode) and explicitly declines the blanket claim. **The brief's claim survives in
weakened form; the post says the weakened thing.**

### 2. Valentine's-week day sequence — **not applicable, and not stated**

Rows 1 and 2 own that. This post mentions 14 February exactly once, as a fixed
Gregorian date used for contrast. No day-sequence convention is asserted anywhere.

### A third thing worth flagging back

The brief's fact list summarises `/birthday-gf` as "the #5 page type at 258 created,
7.5% of all pages", which is correct. But it also groups this post's category as a
"birthday keyword (4)" and suggests `/birthday-gf` + `/love-gf`. Worth noting that
`facts.md` describes `/birthday-gf` verbatim as a "birthday page for a partner" while
`TEMPLATE_LINKS` in `app/lib/prompt.ts:40` calls it a "Birthday surprise page for a
**girlfriend**/partner". The two strings disagree on emphasis, and a careless writer
would have inherited "girlfriend" into a boyfriend-directed post. The post uses
"partner" throughout.

---

## Phase 5 — internal links and schema

Three internal links, all from the batch's permitted five, all placed **after** the
six-option section has established why the reader would want one:

- `https://subhsandesh.in/birthday-gf` — anchor "birthday surprise page for a partner"
- `https://subhsandesh.in/love-gf` — anchor "animated 'I love you' page", with 1,001 / 29.2%
- `https://subhsandesh.in/darling` — anchor "dramatic 'darling' page", with 349 / 10.2%

`templateUrls`: `["/birthday-gf", "/love-gf", "/darling"]`. No `/bouquet-gf`, no
`/templates`, no `/missyou-gf` (long-distance is two other agents' ground and is
covered here in a single FAQ line only), no `/apology-dashboard` (nothing in this post
is about making up after a mistake, so bolting it on would read as stuffing).

`structuredData` is additive only: one `@id`-matched enrichment block on
`https://subhsandesh.in/blog/romantic-gift-for-bf-birthday#post` carrying `about`,
`mentions` and a five-entry `citation` array mirroring `batchMeta.sources` one-to-one,
plus one `ItemList` mirroring the six H3s in order. No `AggregateRating`, `Review` or
`HowTo`.

**`sameAs` verified against the Wikipedia API on 2026-09-03**, QIDs paired:
Birthday → `Q47223`; Gift → `Q184303`; Interpersonal relationship → `Q223642`;
Greeting card → `Q915196`. None returned `missing`.

---

## Phase 6 — audit summary

50 checklist items. `passed` = 47, `failed` = 3, intersection empty, sum 50.

Failures, all genuine and none silently fixed:

1. **Paragraphs 2–3 sentences throughout** — 7 of 23 body paragraphs run 4–5
   sentences. Six are the H3 option blocks, where `page-structure.md` requires the same
   four fields in the same order. The two rules conflict; the structural one was kept.
2. **3–6 outbound links, all fetched and verified to contain the cited fact** — 2 of 5
   fetched in full; 3 verified from publisher abstract metadata after HTTP 403.
3. **No source passes the swap test** — only source 1 is birthday-specific. The four
   gift-psychology sources would fit the anniversary or "surprise him" keywords in this
   batch, because the openable gift literature is organised by mechanism, not occasion.

## Output

- `content/batches/2026-09-03-gift-bf/blogs/romantic-gift-for-bf-birthday.json`
- 1,779 words in `contentMarkdown` (plain whitespace split, FAQs excluded)
- 11 FAQs, in `article.faqs` only
- `metaTitle` 54 chars · `metaDescription` 160 chars · `excerpt` 290 chars
