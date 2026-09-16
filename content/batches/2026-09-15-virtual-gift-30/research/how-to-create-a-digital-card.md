# Research brief — `how do i create a digital card`

- **Slug:** `how-to-create-a-digital-card`
- **Wave:** 4, row 6 of `WAVE4-PLAN.json`
- **Category:** `digital-gifts-romance`
- **Templates:** `/shaadi-card`, `/christian-wedding`, `/christian-wedding-2`
- **Secondaries folded in:** `how do i make a digital card`, `how to make a digital card`
  (screened and deliberately merged — `how do i make a digital card` was rejected as a
  separate row at 6/10 SERP overlap with this one)
- **Market:** India. Evergreen.

---

## Phase 0 — Data gate

`content/facts.md`, measured **2026-09-15**. `npm run facts` was not re-run (the
production-DB read is denied in this environment), so every figure is cited with the
2026-09-15 date.

Relevant facts available: well above the three-fact minimum. The whole platform *is* a
digital-card factory, so the usage lines are directly on-subject. Opening pair chosen to
avoid the batch tic (40.6% password / 6.2-hour edit gap appear in dozens of siblings):
**11.5 average views per created page** and **3,377 registered creators at 1.29 pages
each**, with 4,357 pages as the denominator. Gate passes.

`## Pricing` in `facts.md` is **empty**. No price is stated, inferred or implied anywhere
in the post; the body says plainly that no confirmed figure exists and points at
`/templates`.

## Phase 1 — SERP analysis

Source: `SERPS-WAVE4.md`, section `## how do i create a digital card`.
**Engine: Brave, US-served.** Brave takes no region parameter, so this SERP is reliable
evidence of *page type* — which is all Gate 2 needs — and **unreliable evidence of Indian
ranking order**. That caveat is repeated in `honestAssessment`.

Scored 6/10 blog-shaped by the plan. Reading the ten results properly changes the picture
in a way that decides the whole post:

| # | URL | What it actually is | Notes |
|---|---|---|---|
| 1 | wavecnct.com/blogs/how-to-create-digital-business-cards | Editorial — **digital business card** | Founder byline, "5 minutes", "150,000+ cards created since 2020", heavy internal-link web, answer in the first 60 words |
| 2 | canva.com/create/cards/ | Tool landing page | Greeting cards; no prose |
| 3 | reddit.com/r/CreditCardsIndia — Jupiter Edge card at Reliance | Forum — **fintech debit card** | Nothing to do with greetings |
| 4 | reddit.com/r/ask — "digital card-making websites" | Forum — greeting cards | Not fetchable (403) |
| 5 | reddit.com/r/cardmaking — "free ecards to make" | Forum — greeting cards | Not fetchable (403) |
| 6 | reddit.com/r/cardmaking — "card makers, what do you actually use" | Forum — greeting cards | Not fetchable (403) |
| 7 | kadonetworks.com/blog/how-to-create-a-digital-business-card | Editorial — **digital business card** | Step 1–n app walkthrough, last modified 2025-10-24, product-led |
| 8 | adobe.com/express/create/card | Tool landing page | Greeting cards |
| 9 | vistaprint.com/hub/digital-business-cards | Hub page — **digital business card** | |
| 10 | smilebox.com/maker/card-maker/ | Tool landing page | Greeting cards; "Create a stunning digital greeting card", no article body |

**Fetch status.** wavecnct, kadonetworks and smilebox were fetched in full.
All four Reddit threads return **HTTP 403** to this sandbox (both `reddit.com` and
`old.reddit.com`, including the `.json` endpoint), so they are characterised from their
SERP titles and subreddits only. That is recorded rather than papered over.

**What the five reference pages have in common:** the answer lands early, the structure
is a numbered walkthrough, and every one of them is written by the tool it recommends.
None carries third-party research. None carries any usage data beyond its own vendor
claim. None is written for an Indian reader.

## Phase 2 — Gap analysis

**Table stakes** — a numbered build sequence; what to put on the card; how to share it;
format options; a FAQ layer.

**The gap, and it is unusually clean:** *"digital card" is four different products and
nobody separates them.* Three of the ten results are about **digital business cards**,
one is about a **digital debit card** (r/CreditCardsIndia), and screening for this wave
also found **digital arrival cards** (travel — "what is digital card for thailand") and
fintech ("what is digital card for debit", "digital card for cash app") sitting on the
same phrase. A reader typing this query lands on a business-card guide roughly a third of
the time. No page in the SERP does the disambiguation, and a post that does it in the
first 150 words keeps the right reader and sends the other three away quickly and
politely.

**Secondary gaps:**

- **Nobody says what a digital card cannot do.** All ten results advocate. The UF/IFAS
  extension note on sending a card by post describes receiving one as a sequence of
  physical acts — mailbox, envelope, seal, then placing it somewhere — and a link has
  none of that. That is the honest downside section.
- **Wedding cards across communities are untouched.** The SERP treats "card" as one
  generic object. A shaadi card and a Christian wedding invitation are not the same
  document, and the research literature on e-card genre says community convention is
  carried by the *non-linguistic* features, not the wording.
- **No first-party measurement anywhere.** Every number in the SERP is a vendor's claim
  about itself with no denominator.

**Stale data:** none found worth superseding — the incumbent pages carry almost no dated
statistics at all, which is itself the finding.

**Fan-out sub-queries → H2s:**

1. What counts as a digital card (and what the other three "digital cards" are) → H2 2
2. How do I actually make one, step by step → H2 3 (six H3s, mirrored by the `ItemList`)
3. Which format should it be — image, PDF, video or link → H2 4 (comparison table)
4. How do I make a digital wedding card → H2 5
5. How do I send it so it gets opened → H2 6
6. When should I not send a digital card → H2 7

**Angle:** wins by being the only post that separates a digital greeting card from a
digital debit card, a digital arrival card and a digital business card before it explains
anything, then gives the build order backed by 4,357 pages that were actually created and
49,968 views that were actually recorded.

## Phase 3 — Sources

Route used: **Crossref → Unpaywall → open-access landing page**, per `BRIEF-WAVE4.md` §2.
OpenAlex, Semantic Scholar and CORE were not called (recorded dead or 429ing for this
run); DOAJ was called directly for two short queries.

Search terms tried (the phenomenon, not the keyword): `greeting card ritual exchange`,
`greeting cards materiality communication`, `digital card versus paper card`,
`electronic greeting card computer mediated`, `card sending social relationship
maintenance`, `festive greeting messages mobile phone`, `e-invitation adoption wedding
digital`, `digital invitation card design study`, `QR code invitation guests`,
`paper greeting card industry decline digitalisation`, `digital possessions sentimental
value cherished artefacts`, `semiotic analysis greeting card images colour`,
`visual representation Islamic celebrations greeting cards`.

**A real finding worth recording: the literature on electronic greeting cards is tiny.**
DOAJ returns **two** articles in total for `electronic greeting card`. Most Crossref hits
for `digital card` are about smart cards, SD cards and payment cards — the same collision
the SERP shows, reproduced inside the scholarly index. Several promising items were
unreachable: `boris.unibe.ch` (Anubis bot challenge), `dl.acm.org` (403, the CHI 2022
greeting-card study), `ojs.unud.ac.id` (DNS failure), Ryerson/TMU and the 2004 *A Token
of My Affection* chapters (not open access).

**Sibling check.** `what-is-a-digital-invitation` (published this batch) is the nearest
neighbour. Its five sources are wedding-invitation **genre/move-analysis corpus studies**
(journals.umcs.pl, eprints.hud.ac.uk, ccsenet.org, jurnal.ugm.ac.id,
journal.ubpkarawang.ac.id). **None of them is reused here** — this brief deliberately went
to the e-card and card-generator literature instead.

| # | Source | Domain | Date | What it supports | Read |
|---|---|---|---|---|---|
| 1 | Abdullah & Mohd Nor, *Exploring Non-Linguistic Features of Malay Hari Raya E-Cards*, IJARBSS 12(1) | hrmars.com | 2022-01-12 | 70 Malay Raya e-cards from official emails 2020–2021, analysed with Kress & van Leeuwen multimodality; non-linguistic features carry the cultural and religious meaning | Abstract + metadata |
| 2 | Savelyeva, *The transformation of sociocultural celebration practices: the electronic greeting card as a polycode text*, Neophilology 11(3) | neophilology.elpub.ru | 2025-10-16 | 110 cards sampled from open-access card sites plus 49 sent to the author by respondents on 12 June 2023; the visual component dominates the verbal | Abstract + JATS metadata (Russian) |
| 3 | Triadi, Rohmatulloh & Sukmandhani, *Website-Based Digital Wedding Invitation Generator Application*, JARCIS 1(1) | journal.proletargroup.org | 2023-06-30 | Users build to their own design and **preview the invitation instantly**; the build passed a user-acceptance test | Abstract + metadata |
| 4 | Huda & Handrianto, *Design of a Digital Service Information System for Web-Based Wedding Management Invitation System*, ITS 2(2) | sanscientific.com | 2025-06-14 | A digital invitation system's job is create → manage → distribute, with guest interaction as a first-class feature | Abstract + metadata |
| 5 | Futch, *Life Skills in a Minute: Sending a Card* (4H416), UF/IFAS EDIS | journals.flvc.org | 2021-08-05 | Receiving a posted card is a sequence of physical acts: out of the mailbox, reading the envelope, breaking the seal, then placing it somewhere special | Abstract + metadata |

**PDFs do not parse in this sandbox**, so every one of the five is an abstract-and-metadata
read. No full text was read and nothing is claimed beyond what the abstract states.

**Cap check against `SPENT-SOURCES.json` and all 78 sibling `sources` arrays:**
`hrmars.com`, `journal.proletargroup.org`, `sanscientific.com` and `journals.flvc.org` are
**new domains** — zero prior uses. `neophilology.elpub.ru` has **one** prior use
(`anniversary-wish-page-online`, which cites the same URL for a different finding), so this
is its second and final legal use of both the URL and the domain. None of the five is on
`domainsAtCap` or `urlsAtCap`.

**Swap test — one honest failure.** Source 2's URL already sits in a sibling post in this
batch, so it demonstrably *can* sit in a different keyword's post. It is kept because it is
the only peer-reviewed study of the electronic greeting card as a medium that opens from
this sandbox, and because the finding cited here (the 110 + 49 corpus, visual over verbal)
is not the finding the sibling cites. Recorded as a `failed` item rather than argued away.

## Phase 5 — Internal links and cross-links

**Templates, described from their own `TEMPLATE_LINKS` entries in `app/lib/prompt.ts`:**

- `/shaadi-card` — "Animated shaadi/wedding invitation card"
- `/christian-wedding` — "Christian wedding invitation page"
- `/christian-wedding-2` — "Christian wedding invitation page (alternate style)"

All three were kept; **no swap was made.** The wedding H2 is built so each earns its place:
the shaadi card is the animated card-shaped one, and the two Christian pages are two
different styles of the same document, which is the honest reason both exist and the reason
the post names them as a style choice rather than as two products. `/templates` is linked
once near the close. That is four body internal links, the verifier's maximum.

**Cross-link:** `/blog/what-is-a-digital-invitation`. **The split in one sentence:** that
post defines *what* a digital invitation is; this one is the *how* — the build order for
making a card and getting it opened.

Anti-cannibalisation: `overlapWithWritten: 0`, `mustDifferentiate: false`,
`slugCollision: false`. A subject grep across all 78 sibling blogs for "digital card" and
"greeting card" found only passing mentions inside unrelated posts — no sibling makes this
post's argument.

## Phase 6 — Notes for the audit

- SERP caveat (Brave, US-served) recorded in `honestAssessment`.
- Reddit 403s recorded — four of the ten results were not fetched in full.
- Abstract-only reads recorded for all five sources.
- Swap test recorded as failed for source 2, with the reason.
- No price stated anywhere; `facts.md` `## Pricing` is empty.
- The database records which **template** was opened, not who received it. The post
  discloses this where it cites template-level counts.
