# Research brief — `ganesh-chaturthi-logo-design`

Primary keyword: **ganesh chaturthi logo design**
Folded secondary: **ganpati logo design**, **ganesh chaturthi youth logo design**,
**ganpati group name logo** (all from `ASSIGNMENTS.json`, pool relevance 1250)
Batch: `2026-09-10-ganesh-10d` (wave 4) · Category: `indian-festivals`
Research lane: **visual identity** — logo legibility at small sizes, single-colour
reproduction, mark recognition from silhouette.
Date facts held constant: Ganesh Chaturthi 2026 = **Monday 14 September 2026**;
Anant Chaturdashi / visarjan = **Friday 25 September 2026** (BRIEF §1). No muhurat
time is stated in the body, so no panchang appears in `sources` or `citation`.

STATUS: **complete — gate PASSED, post written.** See Phase 6 for the audit.

---

## Tooling limitations, recorded rather than hidden

Three separate constraints hit this assignment and all three are disclosed in the
audit as well as here:

1. **`WebSearch` was unavailable.** The session had already spent its entire
   budget (200 of 200 calls) on earlier agents in this wave before this assignment
   started. Both of this post's gate captures therefore had to come from
   `fetch()`-in-sandbox against a public HTML SERP.
2. **`WebSearch` is US-locale only** — there is no `gl=in` parameter. This matters
   for the sibling-side capture below, which is inherited from a US-locale run.
   An India-intent keyword's real SERP may differ from anything measured here.
3. **Every fallback engine except Brave refused to serve a non-browser client**
   on 2026-09-10. Measured, not assumed:

   | Engine | Result |
   |---|---|
   | `search.brave.com?country=in` | **HTTP 200, 291 KB, 19 organic results** — the one that worked |
   | `html.duckduckgo.com/html/?kl=in-en` | HTTP 200, 48 KB, **0** organic hrefs |
   | `lite.duckduckgo.com/lite/` (POST, `kl=in-en`) | HTTP **202** anti-bot challenge, 0 hrefs |
   | `mojeek.com?arc=in` | HTTP 200 but a 5.5 KB shell, 2 external hrefs (both Mojeek's own social) |
   | `startpage.com` | HTTP 200, 22 KB, **1** href |
   | `ecosia.org` | HTTP **403** |
   | `api.qwant.com/v3` | HTTP **403** |
   | `searx.be`, `search.inetol.net`, `priv.au` | HTTP 200, **0** result hrefs |
   | `stract.com`, `mwmbl.org` | HTTP **404** |
   | `bing.com?cc=IN` | HTTP 200, 126 KB, 132 hrefs, **all internal to bing.com** |
   | `yandex.com` | HTTP 200, 14 KB, no result anchors |

   Brave then rate-limited: the first query returned 200, and every subsequent
   query — including one after a 75-second cooldown and one after a further 75 —
   returned **HTTP 429** with an identical 73,906-byte body. So exactly **one**
   live SERP could be captured for this assignment, and it was spent on the
   assignment's own keyword.

---

## Phase 1a — the BLOCKING cannibalisation gate

Sibling to gate against (from `ASSIGNMENTS.json`):
`content/batches/2026-09-09-ganesh-10c/blogs/ganesh-chaturthi-banner-and-poster.json`
— keyword **`happy ganesh chaturthi banner`**, already live.

Rule (BRIEF §3): compare top 10 on **same domain AND same article identity**,
excluding `pinterest.com` and `youtube.com`, because a shared *publisher* ranking a
different asset is a false merge (the "Spotify precedent"). **3 or more shared
results = one keyword = abort.**

### Capture A — mine, live

`ganesh chaturthi logo design`, Brave `country=in`, 2026-09-10, HTTP 200,
291,337 bytes, 19 organic results parsed. Raw HTML saved to
`scratchpad/ganesh-chaturthi-logo-design-serp-brave-mine.html`.
Pinterest rows are struck out per the rule (4 of the top 14 were Pinterest,
including both #1 and #2 — itself a signal about this keyword's intent).

| # | Domain | Path | Class of page |
|---|---|---|---|
| — | ~~pinterest.com~~ | `/ideas/ganpati-group-logo/933296627221/` | EXCLUDED |
| — | ~~pinterest.com~~ | `/ideas/ganesh-chaturthi-logo-design/918326634083/` | EXCLUDED |
| 1 | posterit.in | `/image/ganesh-chaturthi-logo-png/4328` | PNG download page |
| 2 | brandcrowd.com | `/maker/tag/ganesha` | **AI logo maker** |
| 3 | freepik.com | `/vectors/ganesh-logo` | vector collection |
| 4 | stock.adobe.com | `/search?k=ganesh+logo` | stock search |
| 5 | vecteezy.com | `/free-vector/lord-ganesha-logo` | vector collection |
| — | ~~in.pinterest.com~~ | `/pin/ganeshutsav-logo-design--588775351310196763/` | EXCLUDED |
| 6 | dreamstime.com | `/illustration/ganesh-logo.html` | stock collection |
| 7 | magnific.com | `/free-photos-vectors/ganesh-logo` | vector collection |
| — | ~~in.pinterest.com~~ | `/pin/508836457931967889/` | EXCLUDED |
| 8 | magnific.com | `/vectors/ganesh-chaturthi-logo` | vector collection |
| — | ~~in.pinterest.com~~ | `/vhdvivek28/ganesh-logo/` | EXCLUDED |
| 9 | ailogomaker.io | `/tag/Ganesh` | **AI logo maker** |

Brave served an AI-summary block; there was no classic featured snippet and no
People Also Ask in the returned markup.

### Capture B — the sibling, inherited (disclosed)

Brave's 429 made a live sibling re-run impossible, so the sibling side is taken
**verbatim from the sibling's own research brief**,
`content/batches/2026-09-09-ganesh-10c/research/ganesh-chaturthi-banner-and-poster.md`,
captured 2026-09-09 — one day old, by the agent that wrote the post I am gating
against. It records two captures, and I compare against **both**.

B1 — US `WebSearch`, 2026-09-09:

| # | Domain | Article identity |
|---|---|---|
| 1 | vecteezy.com | *Indian festival happy ganesh chaturthi banner 47927900 Vector Art* |
| 2 | dreamstime.com | *Happy Ganesh Chaturthi Banner Design Template Stock Illustrations* |
| 3 | istockphoto.com | *4,400+ Happy Ganesh Chaturthi Stock Photos* |
| 4 | freepik.com | *Happy ganesh chaturthi banner Images* |
| 5 | amazon.in | *Happy Ganesh Chaturthi Banner* (search listing) |
| 6 | freepik.com | *Ganesh chaturthi banner Images* |
| 7 | create.vista.com | *Banner ganesh chaturthi Free Stock Vectors* |
| 8 | stock.adobe.com | `/search?k=ganesh+chaturthi+banner` (19,533 results) |
| 9 | en.wikipedia.org | *Ganesh Jayanti* |
| 10 | canva.in | *Free Custom Ganesh Chaturthi Banner Templates* |

B2 — DuckDuckGo `kl=in-en`, 2026-09-09 (the sibling's India-localised run):
canva.in, magnific.com, adobe.com (Express), magnific.com, freepik.com, canva.in,
shutterstock.com, ~~pinterest.com~~, pngtree.com, shutterstock.com.

### The count

**Shared domains: 5.** `vecteezy.com`, `dreamstime.com`, `freepik.com`,
`stock.adobe.com`, `magnific.com` all appear on both sides. That number looks
alarming and is why this gate was checked article by article rather than by domain.

**Shared results by the rule — same domain AND same article identity: 0.**

| Domain | Mine | Sibling | Same article? |
|---|---|---|---|
| vecteezy.com | `/free-vector/lord-ganesha-logo` (collection) | asset `47927900`, one banner vector | **No** — a collection page vs a single asset |
| dreamstime.com | `/illustration/ganesh-logo.html` | *Banner Design Template* illustrations | **No** — different collections |
| freepik.com | `/vectors/ganesh-logo` | `happy-ganesh-chaturthi-banner`, `ganesh-chaturthi-banner` | **No** — different collections |
| stock.adobe.com | `/search?k=ganesh+logo` | `/search?k=ganesh+chaturthi+banner` | **No** — different queries |
| magnific.com | `/free-photos-vectors/ganesh-logo`, `/vectors/ganesh-chaturthi-logo` | `/free-photos-vectors/ganesh-chaturthi-banner` | **No** — different collections |

Every one of the five is the Spotify precedent exactly: five stock libraries that
rank a *collection page per query string*, so they will co-occur on any two
image-adjacent keywords in this cluster and carry no information about whether the
two keywords are one. Strip them out and the two SERPs share nothing at all:

- **Unique to mine:** posterit.in, **brandcrowd.com**, **ailogomaker.io** — two of
  the nine are AI *logo makers*, a page class that appears nowhere on the sibling's
  SERP, on either of its captures.
- **Unique to the sibling:** istockphoto.com, amazon.in, create.vista.com,
  canva.in ×2, en.wikipedia.org, shutterstock.com ×2, pngtree.com — template
  editors, a marketplace listing for a *physical printed banner*, and an
  encyclopaedia entry.

Pinterest's position is the other tell. It took **#1 and #2** on my keyword with
`/ideas/` hub pages and **4 of the top 14** overall; on the sibling's it managed one
excluded row at #4. Excluded from the count by rule, but it says this keyword is
read by the engine as *browse-for-a-mark*, not *download-an-artwork*.

**Corroboration:** BRIEF §3 makes a second engine mandatory only at exactly 2
shared results, the judgment-call band. This capture is **0**, three below the
abort threshold, so the verdict does not turn on the engines that refused to
answer. It is worth stating plainly that the abort threshold would not have been
reached even if every one of the five shared domains had been counted as a shared
*article* — that would be 5, over the line — so the verdict does rest on the
article-identity rule rather than on domain overlap. The rule is explicit, and the
page classes above are the evidence for why it exists.

### Second abort condition — substantive duplication: PASS

The sibling's full JSON was read before drafting. It is a **type-size** post: cap
height per metre of viewing distance (2.4 mm/m, 36 mm at 15 m, 0.8 mm at 35 cm),
four surfaces at four text heights, gold-on-saffron measuring 1.01:1 against
WCAG's 3:1, dpi versus the 5.8-pixels-per-inch acuity limit at 15 m, and the
Raksha Bandhan lead-time block. Its subject is **how large to set the words on a
one-off artwork**.

This post's subject is a **reusable mark**: what structure survives being shrunk,
what survives having its colour removed, and what survives a circular crop — the
same mark across three reproductions rather than one artwork at one size.

Deliberately ceded to the sibling and not repeated here:

- **Cap height per metre / letter-size arithmetic.** Not re-derived. Where this
  post needs to say "the mandal name will not survive", it says so as a
  drop-out rule for the wordmark, and points the reader at the sibling's own
  live post for the millimetres.
- **Contrast ratios and the gold-on-saffron finding.** Cleanly separable and left
  alone: the sibling's question is "does this colour pair pass 3:1", mine is
  "what is left when there is no colour at all". No WCAG citation appears here.
- **Resolution and dpi.** Untouched.
- **The Raksha Bandhan lead-time H2.** Not used at all in this post — no
  lead-time fact is cited, so neither mandatory disclosure is triggered.
- **All four of the sibling's sources.** Zero overlap; see Phase 3.

Shared `factsUsed` lines: 3 of 5, all three platform-wide denominators that every
post in the cluster is expected to share.

**VERDICT: GATE PASSES (0 shared articles against a threshold of 3). Post written.**

---

## Phase 0 — data gate

`npm run facts` was **not** run: BRIEF §1 blocks it (the machine's command
classifier refuses it, and re-dating the file would invalidate 133 `factsUsed`
entries across the 25 posts already written). `content/facts.md` as regenerated
**2026-09-09** was quoted as it stands.

Facts relevant to this keyword, and why they are relevant rather than decorative —
this post is about a mark that has to survive small, and the platform's own
measurements are about how small the screen actually is:

1. `49.6% of shared pages are opened on a phone (22,817 of 46,005 views) — measured 2026-09-09`
2. `49.8% of views are on a touch device (phone or tablet) — measured 2026-09-09`
3. `3,894 personalised pages created since 2026-03-12, across 15 page types — measured 2026-09-09`
4. `46,005 recorded views of shared pages — measured 2026-09-09`
5. `No Ganesh Chaturthi page-creation data exists at all: the /happy-ganesh-chaturthi template went live 2026-09-10, four days before the festival — measured 2026-09-10`

Two of the five sit inside the first 150 words. Gate cleared: 5 relevant, ≥3
required, ≥2 in the opening.

**What is honestly missing.** There is no first-party measurement of a *logo* here
at all — the platform renders pages, not identity marks, and (5) above is the
disclosure that no Ganesh page-creation data exists either. The first-party numbers
in this post establish the *surface* the mark lands on, not the mark. That is
recorded as an audit failure rather than dressed up.

---

## Phase 2 — gap analysis

### Table stakes across the nine ranking pages

All nine are **asset supply**: a collection of Ganesh-shaped vectors, a PNG to
download, or a generator that will emit one. Every one of them covers "here is a
Ganesha silhouette / trunk / modak / lotus motif you can use". A post that omits
motif vocabulary entirely would read as incomplete to a retrieval system, so the
motifs appear here — but as *structure to be tested*, not as a gallery.

### The gap

**Not one of the nine says what the mark has to survive.** They are all
single-surface: download the file, use the file. None of them mentions being
shrunk, being printed in one colour, or being cropped to a circle — which are the
three things that actually happen to a mandal's mark, because a mandal's mark is
not artwork, it is an identity that recurs on a WhatsApp group icon, a receipt
book, a pandal arch, a volunteer T-shirt and a donation slip. Two of the nine are
AI logo makers, which is the sharpest version of the gap: a generator optimises the
image you see at 1024 px and has no mechanism to care what happens at 40.

### Stale data

None to supersede. None of the nine cites a statistic of any kind — they are asset
pages, so there is no dated claim on the SERP to beat. That is worth stating: the
citation win here is not "a newer number", it is "any number at all".

### Unanswered questions the SERP raises and drops

- Why does the logo look right in the editor and turn to mud on the group icon?
- How much of the mark does the circular crop actually eat?
- Can the mandal's name go inside the mark?
- What happens when the printer says "one colour only"?
- Is one file enough, or does the mandal need more than one?

### Fan-out sub-queries → H2s

| Sub-query | H2 |
|---|---|
| what is a ganesh chaturthi / mandal logo | *What a Ganesh Chaturthi logo actually has to do* |
| where will the logo be used | *The three reproductions one mark has to survive* |
| why does my logo look bad small | *The shrink test: what disappears first* |
| logo in one colour / black and white | *Single-colour: the mark has to work with the colour removed* |
| whatsapp group icon logo circle crop | *The circular crop, and how much it eats* |
| ganpati group name logo / logo with text | *Where the mandal's name goes — and when it drops out* |
| ganesh chaturthi logo maker / ai logo | *Where a logo is the wrong thing to make* |

### The angle, one sentence

> Wins by being the only page on this SERP that treats a Ganesh Chaturthi logo as a
> reusable identity mark with reproduction constraints — a shrink test, a
> single-colour test and a circular-crop test, each with a stated threshold — rather
> than as a vector file to download, grounded in a 49.6% phone share of 46,005
> measured views for the surface the mark is smallest on.

---

## Phase 3 — sources

Four sources, inside the 4–6 band. Three are peer-reviewed and open-access; the
fourth is a platform specification. **No generic context statistic and no
Wikipedia citation appears at all** — Wikipedia is used only for `sameAs` entity
disambiguation inside `structuredData`, which is not a citation and is kept out of
`batchMeta.sources`. That also keeps this post clear of `en.wikipedia.org`, which
the ledger has closed at 6 posts.

Search strategy was the phenomenon, not the keyword. Because `WebSearch` was
unavailable, discovery ran through the **OpenAlex API** (`is_oa:true`) and the
**CORE API**, then each candidate's full text was fetched and read. Every
publisher landing page was bot-walled, so open repository copies were used
instead and each substitution is recorded.

| # | Source | Subject test | Peer-reviewed / OA | What it supplies |
|---|---|---|---|---|
| 1 | Collaud et al. (2022), *Displays* 74, 102290 — via EPFL Infoscience | **Icon design.** Pass | Yes / yes | Complexity did **not** significantly affect icon understanding (F < 1); concreteness did, F(1, 63) = 23.40, p < .001, η²p = .30. Simple icons rated more appealing, F(1, 56) = 4.03, p = .05. Method: 24×24 vector grid, one-square stroke, black and white only, vector "from retina screens to large-scale signage systems". |
| 2 | Therriault, Yaxley & Zwaan (2009), *Cognitive Processing* — via CORE | **Colour's role in recognising a mark.** Pass | Yes / yes | Naming latency 891 ms congruent colour, 923 ms greyscale, 986 ms incongruent, all pairwise p < .05; verification 613/640/669 ms. |
| 3 | Janiszewski & Meyvis (2001), *JCR* 28(1) — author-hosted | **Brand logo complexity.** Pass | Yes / yes | Familiar logos rated simpler than novel ones, M = 3.06 vs 4.66, F(1, 702) = 187.5, p < .01; complexity "probably a spurious factor" against uniformity plus meaning. |
| 4 | Android Developers, *Adaptive icons* | **Reproduction of a mark at icon size.** Pass | No / yes | 66×66 safe zone inside a 108×108 container, "never clipped by a shaped mask defined by an OEM"; masks vary from circle to squircle; themed icons require "a single layer for the monochrome version". |

**Access substitutions, all disclosed in `batchMeta.sources`:** ScienceDirect
returned HTTP 403 for (1), so the published version was read at
`infoscience.epfl.ch/record/296221`; `link.springer.com` served a JavaScript
challenge for (2), so the full text was read at `core.ac.uk/download/357327419`;
`academic.oup.com` returned HTTP 403 for (3), so the author-hosted copy at
`pages.stern.nyu.edu` was read. **No source was read in abstract-only form** — all
three papers were read in full from PDF, so checklist item 37 is satisfied
trivially rather than by disclosure.

**Swap test.** None of the four could sit unchanged in another post in this batch.
(1) and (3) are about icons and logos specifically; (2) is only relevant to a post
that removes colour on purpose; (4) is an icon-masking specification that has no
bearing on any other keyword in the wave. No URL and no domain here appears in any
of the 39 sibling posts — `sciencedirect.com` appears once in the cluster but not
this URL, and `link.springer.com` once, neither of which is cited here.

**Ledger check.** `infoscience.epfl.ch`, `core.ac.uk`, `pages.stern.nyu.edu` and
`developer.android.com`: **0 prior uses each** across all 39 posts. Nothing near a
cap. `drikpanchang.com` is **not** cited — no muhurat time is stated in the body —
so the date/festival-reference exemption is not invoked.

**The honest gap: no fifth source exists.** The one claim this post would most like
a citation for — that an outline or silhouette alone carries enough information for
rapid recognition, which is the theoretical basis for the single-colour test — has
no open-access source. Biederman & Ju (1988), *Surface versus edge-based
determinants of visual recognition*, is the canonical study and OpenAlex reports
`is_oa: false`. OpenAlex searches for `symbol legibility minimum size observer`,
`logo simplification brand mark redesign`, `trademark similarity visual shape
consumer confusion` and `image thumbnail size recognition accuracy human` returned
only sibling-lane signage-typography work (NBS TN-1180 on letter size versus
viewing distance, and the *Interdisciplinary Journal of Signage and Wayfinding*)
or off-topic computer vision. Recorded as an audit failure on checklist item 26
rather than padded with a fifth link.

Also deliberately **not** used: `people.csail.mit.edu/torralba/publications/howmanypixels.pdf`,
which is topically apt and legal (one slot left, used once by `ganpati-wallpaper-hd-4k`).
It was passed over because reusing a live sibling's source weakens exactly the
uniqueness this post is built on, and because the paper is about scene recognition
rather than mark reproduction.

---

## Phase 4–5 — draft, links, targeting

- **Body: 1,748 words** by plain whitespace split, including the 46-word §0 social
  block. `wordCount()` in `app/lib/batches.ts` reads **1,766**, which is what the
  studio displays; the plain split is the authoritative figure per BRIEF §2.
- **11 FAQs**, in `article.faqs` only. A `FAQPage` block sits in `structuredData`
  with `@id` = `<canonical>#faq` so the renderer merges rather than discards it,
  and its `mainEntity` is generated from `article.faqs` in the build script, so the
  two cannot drift.
- **`structuredData`**: an `@id`-matched `BlogPosting` enrichment block on
  `<canonical>#post` carrying `about`, `mentions` and a `citation` array mirroring
  all four sources one-to-one; the `FAQPage`; and an `ItemList` mirroring the three
  H3s under *The three reproductions one mark has to survive* in order. No
  `AggregateRating`, `Review` or `HowTo` anywhere.
- **Entities verified** against the Wikipedia API on 2026-09-10 with QIDs paired:
  Ganesh Chaturthi = **Q929250**, Logo = **Q1886349**, Corporate identity =
  **Q609781** (reached via the *Visual identity* redirect). Brand = Q431289 was
  verified and then dropped as not load-bearing.
- **Internal links, 3, all absolute** so the verifier's `\]\((\/[a-z0-9-]+)\)`
  regex is not the thing being relied on:
  `https://subhsandesh.in/happy-ganesh-chaturthi` (mandatory, live HTTP 200),
  `https://subhsandesh.in/guides/happy-ganesh-chaturthi` (body reference, HTTP 200)
  and `https://subhsandesh.in/templates` (HTTP 200). All three exist in
  `TEMPLATE_LINKS`. All are placed in the closing section, after the post has
  established why a reader would want them — none in the opening paragraph.
- A link to the sibling banner post was drafted and then **removed**: a
  `/blog/...` URL is not in `TEMPLATE_LINKS` and the sibling is not yet published,
  so it would have risked a 404. The reference survives as prose.
- **`categorySlug`: `indian-festivals`** — confirmed live against the Strapi
  categories endpoint on 2026-09-10.
- **`templateUrls`: `["/happy-ganesh-chaturthi"]`** only. Not `/templates`, not a
  `/guides/...` path.
- **Slug free**: the Strapi articles endpoint returned 0 matches for
  `ganesh-chaturthi-logo-design` on 2026-09-10.
- **Marker words** unique to this post across all 40 cluster blogs, checked
  programmatically: `squircle` and `receipt book` appear in this file and nowhere
  else, so a crossed-over draft would be detectable.
- **Honesty constraint honoured.** No specific logo is described and no design is
  attributed to any named mandal. Every constraint is stated as a test the reader
  applies to their own mark. The Android figures are quoted as a platform spec; the
  61%-of-width and ~37%-of-area conversions and the π/4 = 78.5% inscribed-circle
  figure are this post's own arithmetic and are presented as such.

---

## Phase 6 — self-audit

**46 passed, 4 failed, of 50.** `passed ∩ failed = ∅` and `|passed| + |failed| ==
50` are asserted in the build script, which would raise before writing the file.
Item strings are parsed out of `references/publish-checklist.md` and `factsUsed`
lines out of `content/facts.md` programmatically, so neither can drift from a
retyped copy.

`scripts/verify-batch.mjs` was run against an isolated single-blog copy of the
batch directory (the real directory has no `batch.json` yet — that file belongs to
the orchestrator, and six agents are writing concurrently). Result: **no
problems**, 46/50 audit, 4 URLs across 4 domains, 0 domains at the cap. One earlier
run flagged a `COST CLAIM "for free"` on a rhetorical use of the phrase; the
sentence was reworded and the re-run is clean.

The four recorded failures:

1. **Item 26** — 4 outbound links, not a comfortable 3–6. The missing fifth source
   does not exist open-access; the search terms tried are named above and in the
   audit.
2. **Item 23** — 1,748 by plain split against 1,766 by `wordCount()`; in band but
   in the upper third, with little headroom for a later edit.
3. **Item 44** — three of four verified `sameAs`/QID pairs; the fourth candidate
   entity was verified and then dropped, so `mentions` is smaller than it could be.
4. **Item 1** — passes on the count (5 facts, 3 in the first 150 words) but the
   substance is thinner than the count implies: **there is no first-party
   measurement of a logo anywhere in `facts.md`**, because the platform renders
   shareable pages and has never rendered or printed an identity mark. The numbers
   describe the surface the mark lands on, not the mark. This is the post's real
   weakness and it cannot be closed with more work — it needs data the platform
   does not have.

**Recorded tool limitation** (BRIEF §4, in `auditReport.toolLimitations` as well as
here): `WebSearch` is **US-locale only** — there is no `gl=in` — and in this case
was unavailable entirely. See the table at the top of this file.

**Honest assessment.** All nine ranking pages are asset supply and not one states a
single reproduction constraint, so this is the only page on the SERP that answers
"will the mark survive being shrunk, printed in one ink, and cropped to a circle"
with numbers. What it cannot overcome: `subhsandesh.in` has no design-authority
signal, the SERP's top is Pinterest hub pages plus five very strong stock
libraries, and the first-party data speaks to the surface rather than to logos. A
citation play for answer engines rather than a realistic bid for position one. No
ranking prediction is made.
