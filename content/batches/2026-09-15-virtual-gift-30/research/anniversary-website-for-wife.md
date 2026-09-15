# Research — `anniversary-website-for-wife`

Batch `2026-09-15-virtual-gift-30`, wave 2. Market India. Keyword: **anniversary
website for wife**. Secondaries: `anniversary website for husband`,
`online anniversary page for wife`. Category `digital-gifts-romance`.
Row templates: `/capsule`, `/rewind`, `/dedication`.

Row context from `WAVE2-PLAN.json`: this row **replaced** `online gift for wife
on anniversary`, which measured 6/10 ecommerce in the India SERP (Amazon,
Flipkart, IGP, Winni class — physical-product intent). My row's gate 2 is
recorded CLEAN.

---

## Phase 1 — SERP (India, `kl=in-en`, from `SERPS-WAVE2.md`, ads filtered)

```
 1. alwaysyou.in/anniversary-website          Anniversary Website — Personalised Page for Wife or Husband
 2. thegreeter.in/anniversary-wishes-website  Free Anniversary Wish Website Maker
 3. wishcupid.in/anniversary                  Create an Anniversary Gift Website for Your Partner
 4. aiskyla.com/free-anniversary-website-template
 5. thegreeter.in/                            homepage
 6. instamemory.in/occasions/anniversary      Anniversary Website Builder
 7. wishify.io/anniversary-card.html          Create Custom Anniversary Cards Online
 8. aiskyla.com/blog/free-anniversary-website-templates-guide
 9. lovlio.in/                                Personalised Website for Someone You Love
10. anniversary.keepsake.id/                  Keepsake — Anniversary Website
```

**Reading.** Zero ecommerce; zero Amazon/Flipkart/IGP; zero listicles; zero
Reddit. All ten results are **product pages from small personalised-page
startups** — i.e. our own shape of competitor, not a source. Seven of ten are
tool landing pages ("builder", "template", "maker"); only #8 is editorial, and it
is a competitor's own blog.

Consequences for the draft:

1. The intent is **tool-shaped** ("which site do I use, and what do I put on
   it"), not idea-shaped. A listicle of 35 anniversary gifts would mismatch it.
2. There is **no explanatory page in the result set at all** — nobody explains
   what an anniversary page is for, what a wedding anniversary needs that a
   birthday does not, or what the thing costs you in time. That is the gap.
3. Every one of `alwaysyou.in`, `thegreeter.in`, `wishcupid.in`, `aiskyla.com`,
   `instamemory.in`, `wishify.io`, `lovlio.in`, `keepsake.id` is a **competitor**.
   None cited, linked or paraphrased. They were read only to establish (2).

Supporting India autocomplete (`content/keywords/2026-09-15-virtual-gift-100/ac*`):
`anniversary gift for wife` (vol-proxy 1251, depth 5), `anniversary gift ideas
for wife`, `anniversary gift to wife`, `anniversary gift wife ke liye`,
`anniversary gift wife ko kya de`, `anniversary gift to husband from wife`,
`anniversary gift for long distance wife`, `romantic gift for wife online`.
The Hinglish completions (`ke liye`, `ko kya de`) confirm an India-resident,
not diaspora, searcher.

## Phase 2 — angle and fan-out

**Angle.** Wins by being the only page in this SERP that treats a wedding
anniversary as *a date neither spouse can be surprised by* — so the page is
built as a jointly-known ritual that is meant to repeat — and the only one that
publishes a first-party number (3,377 creators averaging **1.29** pages each)
which argues **against** its own product's repeat story.

Fan-out sub-queries the H2s answer:

- what is an anniversary website / anniversary page for a wife
- how is it different from a birthday page or a card
- what do you actually put on one
- how does it compare to dinner, a gift, or a long message
- is there any evidence this kind of thing does anything
- can the data prove wives receive these
- when is it the wrong idea
- (via FAQs) free?, how far ahead?, children?, password?, husband version?

## Phase 3 — separation from siblings

Read before drafting: `blogs/digital-gift-for-wife.json`,
`blogs/digital-gift-for-wife-birthday-online.json`,
`blogs/online-gift-for-husband-anniversary-free.json`,
`blogs/digital-anniversary-gift-for-girlfriend.json`,
`blogs/virtual-anniversary-gift-for-boyfriend.json`.

| Sibling | Its question | Mine |
|---|---|---|
| `digital-gift-for-wife` | which of three products the phrase returns (voucher / gadget / page) | not a disambiguation post at all; the SERP has no voucher in it |
| `digital-gift-for-wife-birthday-online` | secrecy inside a shared home | secrecy is impossible — the date is jointly owned |
| `online-gift-for-husband-anniversary-free` | what "free" means, husband recipient | no "free" in my keyword; wife recipient; repeat-across-years spine |
| `digital-anniversary-gift-for-girlfriend` | a dating anniversary | a marriage anniversary: years of it, wedding media, children |
| `gift-ideas-for-girlfriend-1-year-anniversary` (wave 2) | one year, a girlfriend | year *n*, a wife |

**The distinguishing question**, as briefed: what does a marriage anniversary
need that a birthday or a girlfriend anniversary does not? Three things, and all
three are load-bearing in the draft: (a) accumulated years, so the page has
material a first year does not; (b) an existing archive of **wedding media**
that already governs how the day is remembered; (c) other people — children,
parents — legitimately in frame.

Sources and structure share nothing with any sibling. `/rewind` and `/capsule`
appear in two siblings, but there they are items on a list of things to put on a
page; here they carry the post's spine (a page designed to be rebuilt annually),
which is why the row assigns them.

No `nearestLive` field on this row, so no cannibalisation escalation and no
mandatory blog cross-link. No live subhsandesh page targets this keyword.

## Phase 4 — sources (found via Europe PMC → Crossref → DOAJ → OpenAIRE)

WebSearch/WebFetch/`serp.mjs` not called. All five landing pages opened and read
before citing. Domain check run against all 40+ sibling JSONs and
`SPENT-SOURCES.json`: **all five domains previously unused in this batch**;
`open-research-europe.ec.europa.eu` holds one other URL
(`/articles/4-275/v3`, in `romantic-website-for-girlfriend`) and mine is a
different article, so the domain sits at 2 of 3 and the URL at 1 of 2.

1. **Mäder, M-T. "Promising images of love: a qualitative-ethnographic study
   about the mediatised memories of weddings."** *Open Research Europe* 3:198
   (v2, 5 Dec 2024).
   `https://open-research-europe.ec.europa.eu/articles/3-198/v2`
   Verified by fetching the article PDF (landing page is a JS shell) and reading
   the abstract, methods and results. **What it actually says:** 27
   semi-structured video-recorded interviews with married couples in Italy,
   Germany and Switzerland; couples "shared their wedding album or video and
   developed their wedding narrative by looking at the photographs and videos";
   taking photos becomes part of the ritual itself; the mediatisation leads to a
   partial homogenisation of how weddings are remembered; and **"the
   brides/wives of heterosexual couples are significantly more invested in the
   production and reception of wedding media."** That last finding is the single
   most on-target sentence I found for this keyword.

2. **deSouza, D. K., et al. "The Gratitude Opportunity Space: The timing of
   gratitude expressions in object passes."** *Social Interaction: Video-Based
   Studies of Human Sociality* 4(1), 24 Feb 2021.
   `https://tidsskrift.dk/socialinteraction/article/view/122437`
   Abstract read in full on the landing page. **What it says:** introduces the
   "gratitude opportunity space", a standard time for expressing gratitude, with
   three discernible phases around an object pass — pre-delivery, on-delivery,
   post-delivery — and shows the space is "dynamically recalibrated" for other
   activities involving object passes, explicitly **remote offers of objects and
   gift giving**. Data are American and British English. Used only for the
   claim about *when* thanks happens around a handover; nothing inferred about
   marriage, India, or web pages.

3. **Veselkova, N., Vandyshev, M., Pryamikova, E. "The Continued Present: Time
   Capsules as a Social Practice and Research Method."** *Laboratorium: Russian
   Review of Social Research* 15(1), 4–32, 18 Jun 2023.
   `https://www.soclabo.org/index.php/laboratorium/article/view/1177`
   **Article is in Russian; only the English abstract was readable**, and the
   post says so in body prose. Abstract states that time-capsule practice has
   distinct creation and opening stages "often tied to ritualized points —
   certain dates and events", and that capsules vary in their balance of
   future/present and serious/ironic, a balance that can shift over time. Cited
   for exactly that and nothing more.

4. **Lagerkvist, A. "A Quest for Communitas: Rethinking Mediated Memory
   Existentially."** *Nordicom Review* 35(s1), Aug 2014 (open access Mar 2020).
   `https://www.sciendo.com/article/10.2478/nor-2014-0113`
   Abstract read on the landing page. Compares anniversaries of 9.11 on Swedish
   television with web communities of commemoration, and names three challenges
   to memory practice: the temporality of instantaneity, networked
   individualism, and **"the technological capacities that subject memory to
   endless revision."** It describes televisual anniversaries as inviting
   audiences to **an annual return**. Used for the annual-return framing and the
   revisability of a digital record; the 9.11 and bereavement material is not
   used and not alluded to.

5. **Ogalle, R., Alumada, A., Makena, V. "The Relationship between Partner
   Phubbing and Marital Satisfaction among Married Couples in Nakuru County,
   Kenya."** *East African Journal of Arts and Social Sciences* 9(2),
   23 Apr 2026.
   `https://journals.eanso.org/index.php/eajass/article/view/4868`
   Abstract read in full. Mixed methods, **392 married couples** across eleven
   churches, Partner Phubbing Scale + Couple Satisfaction Index, plus eight key
   informant interviews. Partner phubbing significantly affected marital
   satisfaction (t = 3.989, p = 0) with a **standardised β = −0.223**, which the
   authors themselves describe as a *weak* negative effect. The post reports the
   weakness, not just the significance.

**Subject test.** 1, 3, 4 and 5 are about weddings, anniversaries, commemorative
ritual and married couples respectively — none is "about India" or "about the
internet" in general. **Swap test.** 1, 3, 4, 5 could not sit unchanged in
another row of this batch. Source 2 is the closest to swappable, because gift
handover is the batch's whole axis; it earns its place only because it is used
against a *jointly known* date, which no other row in the batch has.

**Not used, and why:** `frontiersin.org`, `journals.plos.org`,
`pmc.ncbi.nlm.nih.gov`, `arxiv.org`, `pewresearch.org`, `gsb.stanford.edu` are
at the batch domain cap; `europepmc.org` is over it (5 uses) and was used only
as a discovery API. The obvious hit — *"Forty years on one pillow: an
examination of long-term marital dynamics"*, BMC Psychology 2026 — is already
cited by `online-gift-for-husband-anniversary-free`, so it was dropped despite
being the best topical match in Europe PMC. `academic.oup.com` (the "I Wish I
Knew" spousal-knowledge paper, *Innovation in Aging* 2025) returned HTTP 403 and
was dropped rather than cited unread; `mdpi.com`, `publicera.kb.se` and
`bmcpsychology.biomedcentral.com` were blocked by bot challenges.

## Phase 5 — first-party facts

Chosen to avoid the batch's two over-used lines (40.6% password, 6.2-hour edit
gap), both of which three siblings already open with.

- `3,377 registered creators — measured 2026-09-15`
- `Average pages per registered creator: 1.29 — measured 2026-09-15`
- `Average views per created page: 11.5 — measured 2026-09-15`
- `49,968 recorded views of shared pages — measured 2026-09-15`
- `49.0% of shared pages are opened on a phone (24,493 of 49,968 views) — measured 2026-09-15`
- `4,357 personalised pages created since 2026-03-12, across 16 page types — measured 2026-09-15`
- `#1 page type: "I love you" page (/love-gf) — 1,125 created, 25.8% of all pages — measured 2026-09-15`
- `#4 page type: Darling romantic page (/darling) — 427 created, 9.8% of all pages — measured 2026-09-15`

Two mandatory disclosures, both in **body prose**, not only the audit:

- The database records **which template was opened, not who received it**. A
  `/love-gf` or `/darling` count cannot prove the recipient was a wife. The post
  says this in its own H2 and repeats it in a key takeaway.
- The `## Pricing` block in `facts.md` is **empty**. The post states that no
  current pricing figure can be confirmed from our data and points at
  `/templates`; it never says the page is free. The FAQ "Is it free to make one?"
  answers with that limitation rather than a number.

The 1.29 figure is used *against* the product: it means the average creator has
made roughly one page, so nothing in our data yet demonstrates anyone rebuilding
an anniversary page in a second year. Stating that is the post's clearest
originality signal and its honest limit.

## Phase 6 — templates

Row assignment used as given, no swaps.

- `/rewind` — "your year as a story you tap through, every number worked out
  from one date, ending on which couple you actually are". Description read in
  `app/lib/prompt.ts`. It derives everything from **one date**; a wedding
  anniversary *is* one date. Best match in `TEMPLATE_LINKS` for this keyword.
- `/capsule` — "you both write predictions about the next year, blind to each
  other; it seals, and a year later you open it together and score every one".
  The only template in the library whose payoff is **a year later**, which makes
  it the spine of a page meant to repeat annually.
- `/dedication` — "a radio show made for one person: they drag the needle
  through static, land on your station, and hear your real voice introduce the
  song". Used for the voice argument in a long marriage, not as a generic
  romantic gesture.
- `/templates` once, at the closing CTA, per the link rules.

Four template links total, all real `TEMPLATE_LINKS` URLs, each placed after the
section that earns it. No blog cross-link, because this row has no `nearestLive`
and no published sibling targets this keyword.

## Phase 7 — verification

`node scripts/verify-batch.mjs content/batches/2026-09-15-virtual-gift-30` run
after emit; only lines naming `anniversary-website-for-wife` acted on;
source-cap findings ignored per BRIEF-WAVE2 §7.
