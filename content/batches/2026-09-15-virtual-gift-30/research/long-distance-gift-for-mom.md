# Research — `long-distance-gift-for-mom`

Batch `2026-09-15-virtual-gift-30`, wave 2. Market: India. Evergreen.
Primary keyword: **long distance gift for mom**.
Secondary: `long distance gift for dad`, `long distance gift for parents`.
Category: `family-and-continuity`.

---

## Phase 1 — the SERP, hand-scored

Source: `SERPS-WAVE2.md`, `engine: ddg-html`, `region: in-en`, organic only.

| # | URL | Shape |
|---|---|---|
| 1 | fabulesslyfrugal.com/long-distance-mothers-day-gifts/ | affiliate listicle (10 items) |
| 2 | flightgift.com/blog/long-distance-mothers-day-gifts/ | **merchant blog** — flightgift.com sells flight gift cards |
| 3 | etsy.com/market/gifts_for_mom_long_distance | **storefront** (`/market/`) |
| 4 | lastingthedistance.com/long-distance-gifts-for-mom/ | affiliate listicle (11 items) |
| 5 | etsy.com/market/long_distance_gifts_for_mom | **storefront** (`/market/`) |
| 6 | longdistance.net/gift-guides/mothers-day-long-distance-mom | **affiliate gift-guide hub**, monetised product grid |
| 7 | amazon.com/long-distance-mom-gifts/s?k=… | **storefront** (`/s?k=`) |
| 8 | abroadpurpose.com/long-distance-mom-gifts/ | affiliate listicle (15 items) |
| 9 | amazon.com/Long-Distance-Mothers-Day-Gifts/s?k=… | **storefront** (`/s?k=`) |
| 10 | esquire.com/…/best-gifts-for-long-distance-moms/ | magazine listicle (25 items) |

**Automated screen said 4/10 ecommerce. My hand score is 6/10.**

The strict URL-shape rule (`/product`, `/collections`, `/gifts/`, `/s?k=`, `/market/`,
`/q/`) catches exactly four — two Etsy market pages and two Amazon search pages. That
is where the automated 4 comes from, and on that narrow definition it is correct.

It undercounts by two, for the reason the brief predicted — it matches page shape,
not who owns the page:

- **`flightgift.com` (#2)** is not a blog with ads on it. The domain's entire
  business is selling flight gift cards; `/blog/` is its content funnel. A reader
  who follows it is two clicks from a checkout.
- **`longdistance.net/gift-guides/` (#6)** is a gift-guide *hub* — a product grid
  with affiliate links, not an article. `gift-guides` narrowly misses the `/gifts/`
  token in the rule.

So: 6 of 10 exist to move a physical object. The remaining four (#1, #4, #8, #10)
are affiliate listicles of 10, 11, 15 and 25 physical items. **Ten of ten results
assume a parcel.** Gate 2 signal is real and it is recorded in the audit.

**The second finding is larger than the ecommerce count and nobody screened for it.**
This is a `kl=in-en` SERP and it returns `amazon.com`, not `amazon.in`. Not one of
the ten results is written for India — no Flipkart, no Indian courier, no Indian
festival, no mention of an adult child who moved to Bengaluru or Dubai. Compare the
sibling row `long distance gift for sister`, whose India SERP surfaced `amazon.in`,
`flipkart.com` and a Raksha Bandhan article on `herzindagi.com`. The mom query has
no India-native page at all. That gap is the reason to write this post.

## Phase 1b — URL-overlap check (BRIEF-WAVE2 §3)

Against `long distance gift for best friend` and `long distance gift for sister`:

| Comparison | Shared URLs | Shared domains |
|---|---|---|
| mom vs best friend | **0 of 10** | 3 (amazon.com, etsy.com, longdistance.net — all different paths) |
| mom vs sister | **0 of 10** | 2 (amazon.com, etsy.com — different paths) |

Threshold is 4+ shared URLs of 10. **0 and 0. No sharpen, no abort.** The three
rows share retail shelves, not pages. My row has no `nearestLive` field in
`WAVE2-PLAN.json`, so no cannibalisation escalation applies; I cross-link the
sibling post `birthday-surprise-page-for-sister` instead, which is the only other
non-romantic row already written.

## Phase 2 — fan-out sub-queries

From `content/keywords/2026-09-15-virtual-gift-100/ac*/autocomplete.csv`, India:

`long distance gift for mom` (vol 560) · `long distance gift for dad` (554) ·
`long distance gifts mom` · `long distance gifts parents` ·
`long distance gift ideas for mom` · `gift ideas for long distance parents` ·
`long distance mothers day gift` · `long distance dad gift` ·
`long distance grandparent gift` · `digital gifts mothers day`

H2s map to: what it is when a parcel will not arrive · which templates transfer ·
the password question · building for her phone · what the research says · dad and
both parents · when it is the wrong gift.

## Phase 3 — sources

### §1b status note, recorded as instructed

**Europe PMC had recovered by the time I called it on 2026-09-16.** The brief
records `HTTP 503` on every call including a bare smoke test; my smoke test
returned **HTTP 200**, and four `resultType=core` queries all returned full result
sets. So the outage was transient and the API is usable again. I used it for
*discovery only* — `europepmc.org` has taken its last slot (3/3) and is banned, so
no `europepmc.org` URL is cited. Crossref and DOAJ both worked and supplied two of
the four finds. OpenAIRE answered but returned no repository copy for the one paper
I wanted it for. OpenAlex was not attempted (429 per §1b).

Search terms tried: `transnational family communication migrant parents`,
`intergenerational contact distance older parents`, `ICT use older adults family
communication`, `filial obligation India ageing parents`, `migrant adult children
ageing parents India`, `older adults video call adult children`, `elderly
loneliness India migration`, `smartphone older adults digital literacy barriers`,
`digital kinning`, `virtual copresence`, `polymedia migration`, `empty nest
parents`, `left behind elderly`, `older adults passwords`, `digital divide elderly
India`, `elderly India technology`.

Blocked or unusable, confirmed this session: `link.springer.com` (JS challenge),
`academic.oup.com` (403), `journals.openedition.org` (Anubis bot filter),
`cureus.com` (403 Cloudflare), `scielo.br` (502), `osf.io` HTML (JS-rendered — read
via `api.osf.io` instead), `scitepress.org` (abstract not in HTML). `mdpi.com`,
`journals.plos.org` and `frontiersin.org` were skipped — the latter two are at the
domain cap.

### Cited, all four fetched and verified

1. **`osf.io`** — Older adults' digital intergenerational contact: patterns,
   predictors, and associations with subjective well-being across 29 countries.
   SocArXiv preprint `h69cq_v2`, 2026-04-07. Verified via `api.osf.io`.
   *Uses 2020 European Social Survey data on older adults' contact with
   non-resident children; identifies four digital-contact profiles — low contact,
   phone-only, non-visual (phone + text), and high contact across all modes — and
   tests internet access and digital literacy as predictors of which profile a
   person falls into.* Domain count before me: 1. After me: 2.

2. **`ijmr.org.in`** — Prevalence and determinants of social isolation and
   loneliness among the elderly in India: a systematic review. *Indian Journal of
   Medical Research*, 2026-07-01, DOI `10.25259/IJMR_3300_2025`. Fetched, abstract
   read in full. *India's older population is projected at 230 million by 2036; of
   894 papers screened, 20 Indian studies were included; heterogeneity was I² = 99%,
   so meta-analysis was abandoned for narrative synthesis.* New domain.

3. **`ocula.it`** — Sam, Degli Esposti & Gomes, "The elderly collaborative user in
   platform societies: a comparative study between India and Italy", *Ocula* Vol 22
   No 25, 2021-06-01, DOI `10.12977/ocula2021-12`. PDF fetched and read via
   `pdftotext`. *Ethnography of elderly platform users in Kolkata and Bologna.
   Argues the literature's assumption of an individual with autonomous access to a
   device is wrong for these users: "proxy use" — asking a family member to use the
   internet on your behalf — is documented and common, and the authors propose
   "collaborative use", the shared and sometimes simultaneous use of one device, as
   the better unit.* First author at IIT Kanpur. New domain.

4. **`cogitatiopress.com`** — Nguyen, Baldassar & Wilding, "Lifecourse transitions:
   how ICTs support older migrants' adaptation to transnational lives", *Social
   Inclusion* 10(4), 2022-09-26 (Crossref), DOI `10.17645/si.v10i4.5735`. Fetched,
   abstract read in full. *Vietnamese migrant grandparents in Australia; describes
   "digital kinning" and "digital homing" as learned lifecourse practices that
   maintain social support networks and transnational caregiving, against the
   stereotype that older people cannot adapt.* New domain.

**Subject test:** all four are about older parents, elderly device use, or
transnational family contact. None is about "India" or "the internet" in general.
**Swap test:** none survives a move to another row in this batch — every one of the
other 59 posts is about a partner, a sibling or a friend, and these four are
specifically about *older* people at a distance from adult children. **Generic
context statistics: zero.** No PIB, TRAI, Census or MEA figure is used.

## Phase 4 — first-party facts (`content/facts.md`, 2026-09-15)

Used, with the two load-bearing ones inside the first 150 words:

- **49.0% of shared pages are opened on a phone** (24,493 of 49,968 views) — opener
- **40.6% of creators password-protect the page before sharing** (1,767 of 4,357) —
  opener, reframed as a *barrier* for this recipient rather than a feature
- 49.2% of views are on a touch device
- Occasion-dated pages are 3.7% of all pages — the platform is 96.3% everyday
- Top three page types are /love-gf 25.8%, /bouquet-gf 24.6%, /apology-dashboard
  23.9% — used as evidence that the library is partner-first
- Average 11.5 views per created page
- Median first save → last edit 6.2 hours (used once, in the table, to show which
  format breaks the pattern)

Three siblings checked for overlap before choosing: `birthday-surprise-page-for-sister`
opened on /birthday-gf 352 + 49.2% touch + 4,357 total; I deliberately did not
reuse that trio as an opener.

**Pricing: the `## Pricing (fill in by hand)` block in `facts.md` is empty.** No
price, no free-tier claim anywhere in the post. `/templates` is linked instead.

**Disclosure carried into the body:** the database records which *template* was
opened, not who received it. /love-gf counts do not prove the recipient was a
girlfriend, and nothing in the data proves anyone has yet sent one of these pages
to a mother.

## Phase 5 — templates, and the honest transfer judgement

Row assigns `/rewind`, `/capsule`, `/photo-puzzle`. Descriptions read in
`app/lib/prompt.ts` before writing. The sister post established that there is **no
non-romantic birthday template on the site at all** — `/birthday-gf` is written for
a partner. The same problem is worse for a mother, because a mother is not a peer:
the templates that survive a sibling can still be teasing, and teasing does not
survive the move to a parent.

| Template | Transfers? | Why |
|---|---|---|
| `/photo-puzzle` (The Last Piece) | **Yes, cleanly** | A photo jigsaw that reveals a letter line by line. Nothing in it is romantic. She drags with a finger, writes nothing, and the final piece being missing is a device that reads as *distance*, not flirtation. Best of the three. |
| `/watch` (Watch) | **Yes — swapped in** | A video you made, given a real player page with chapters and a pinned comment. Zero romantic framing, zero typing, one tap. For a recipient who may be less phone-fluent this is the lowest-floor format on the site. |
| `/capsule` (Capsule) | **Conditionally** | Sealed predictions, both sides writing blind, opened a year later. Genuinely lovely for a parent — but it requires her to type on a phone twice, a year apart. Kept, with the condition stated in the body. |
| `/rewind` (Rewind) | **No — dropped** | Its payoff is "which couple you actually are". The whole artefact resolves to a couple archetype. There is no edit that makes that land for a mother, and describing it as though there were would show I never opened it. |

**Swap declared per BRIEF-WAVE2 §2: `/rewind` → `/watch`.** `/watch` exists in
`TEMPLATE_LINKS` (verified: `https://subhsandesh.in/watch` returns 200).

Final `templateUrls`: `/photo-puzzle`, `/watch`, `/capsule`. Plus `/templates` once
near the closing CTA — four internal template links, at the checklist cap.

Blog cross-link (excluded from the template count per BRIEF-WAVE2 §3):
`/blog/birthday-surprise-page-for-sister`.

## Phase 6 — the angle

Wins by being the only page on this query written for a recipient who is older,
lives in a different city from a child who migrated for work, and may need someone
else's hands on the phone — and the only one that says the platform's own default
(40.6% of senders add a password) is the wrong setting for her.

## Verification log

- `https://subhsandesh.in/blog/long-distance-gift-for-mom` → **404** (slug free)
- `https://subhsandesh.in/watch` → 200 · `/photo-puzzle` → 200 · `/capsule` → 200
- Wikipedia API + Wikidata QIDs: Mother Q7560 · Parent Q7566 · Human migration
  Q177626 · Loneliness Q223270 — all confirmed 200
- `node scripts/serp-ddg.mjs` not called; the SERP was already in `SERPS-WAVE2.md`.
  `WebSearch`, `WebFetch` and `scripts/serp.mjs` not called.
