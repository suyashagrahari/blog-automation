# Research brief — raksha bandhan wishes for long distance brother

**Batch:** 2026-08-13-rakhi · **Cluster:** C06 · **Slug:** `raksha-bandhan-wishes-for-long-distance-brother`
**Run date:** 2026-08-13 · **Raksha Bandhan 2026:** Friday 28 August 2026

Folded into this single page (no separate URLs):
- rakhi wishes to brother who is far away
- 25 raksha bandhan wishes for brother who lives far away
- rakhi message for brother far away in another country

**Slug check:** `strapi.subhsandesh.in/api/articles?filters[slug][$eq]=…` returned `total: 0` on 2026-08-13. Free.

---

## Phase 0 — Data gate

`content/facts.md` (generated 2026-08-13) has **no rakhi-specific row**. The
`/happy-rakshabandhan-to-brother` template shipped after the pull, so all 2,632
recorded pages are romantic, apology and birthday types.

Gate passed on platform-wide facts that are genuinely relevant to "will a message
sent across a timezone actually get opened":

| Fact | Used where |
|---|---|
| 31,081 recorded views of shared pages | Opening paragraph |
| 52.5% opened on a phone (16,323 of 31,081) | Opening paragraph, comparison table, wrong-choice H2 |
| 11.8 average views per created page | Comparison table, wrong-choice H2 |
| 44.7% password-protect before sharing (1,177 of 2,632) | Comparison table, FAQ, takeaways |
| 99.4% of started pages published and shared (2,615 of 2,632) | Wrong-choice H2 |
| Median 6.8 h first save → last edit (n=902) | Comparison table |
| 2,632 pages across 13 page types since 2026-03-12 | Wrong-choice H2 |

Two first-party numbers sit inside the first 150 words. **The limitation is
stated in the published body**, not hidden — that is deliberate E-E-A-T.

---

## Phase 1 — SERP analysis

`WebSearch`, 2026-08-13, US IP. Result set matched `content/keywords/2026-08-13-rakhi/serps.md`
exactly — no drift.

| # | Page | Format | Direct answer? | Data cited | Delivery mechanics | Notes |
|---|---|---|---|---|---|---|
| 1 | igp.com/blog/rakhi-message-long-distance-brother | Long quote listicle, TOC, festival-nav chrome | No — three paragraphs of "you're staring at a blank page" before any line | None | "Plan a virtual celebration" section exists, but resolves to *"send a rakhi online from the IGP store so he can unbox it on the call"* | Dated 18 July 2025, title says 2026. Terminates in product links. |
| 2 | floweraura.com/blog/rakhi-wishes-to-brother-who-is-far-away | 50 quotes, ~8 min read | No — two nostalgia paragraphs first | None | None | **Published 4 April 2022.** Four years stale and still ranking #2. |
| 3 | pinterest.com/ideas/… | Image pack | n/a | None | None | Social noise. |
| 4 | archiesonline.com/blogs/article/rakhi-messages-for-your-brother | 30 messages split emotional / fun / nostalgic | Partially — the split is the only reader guidance on the SERP | None | None | Best-organised competitor. Still a commerce blog; sidebar pushes "Archies Rakhi Collection 2026 Is LIVE". |
| 5 | damensch.com/blog/… | Generic sibling wishes | No | None | None | **A menswear brand.** |
| 6 | rakhibazaar.com/blog/25-raksha-bandhan-wishes-…-far-away | 25 quotes, flat numbered list | No | None | None | 2023 assets. Body pivots to "send designer rakhi to brother". |
| 7 | thezappybox.com | Quote list | No | None | None | 2025-dated. |
| 8 | clayfulhomes.com/blogs/news | Generic wishes | No | None | None | **A homeware brand.** |

**Weak: 4 of 8.** Two off-topic brands inside the top eight is the clearest
possible signal that nobody is serving this query properly.

---

## Phase 2 — Gap analysis

**Table stakes (all five real competitors cover):** a substantial set of ready-to-send
lines; emotional / funny / nostalgic tonal split; "distance doesn't weaken the bond"
framing; a nod to video calls.

**The gap — three things none of the eight do:**

1. **Tell you which line to pick.** Archies splits by mood; nobody splits by the
   reader's actual situation (which country he's in, whether it's the first year
   apart, whether he replies).
2. **Tell you when to send it.** Not one page contains a timezone, an IST
   conversion, or a send-time. Every page treats a message as instantaneous and
   context-free. This is the single largest unclaimed sub-query.
3. **Cite any number at all.** Zero data across all eight pages. No delivery
   window, no diaspora figure, no engagement metric.

**Structural reason the gap exists** (per `competitor-map.md`): igp, floweraura,
rakhibazaar and archies are gifting retailers. A post that concluded "the physical
option already expired on 31 July — send a message instead" cannibalises the
shipment that funds the post. They are commercially unable to write this page.

**Stale data:** floweraura #2 is from April 2022; rakhibazaar's assets are 2023;
thezappybox is 2025-dated. There is no statistic to supersede because there are no
statistics.

**Fan-out sub-queries → H2 map:**

| Sub-query | Becomes |
|---|---|
| What do I write to a brother far away? | Opening answer + Block 3 |
| What makes a long-distance rakhi message different? | H2 "What makes a long-distance rakhi message different" |
| Which message suits my brother? | H2 "8 Raksha Bandhan messages…", H3s 1–8 |
| What time should I send it in his timezone? | H2 "What time should the message actually land?" + table |
| Message vs call vs posted rakhi vs page? | H2 "A message, a call, a posted rakhi or a page" + table |
| Is a digital page ever the wrong call? | H2 "When a digital rakhi page is the wrong choice" |

**Angle (recorded as `batchMeta.angle`):**

> Wins by being the only post that turns a rakhi wish into a delivery plan — which
> message fits which brother and the exact IST minute to send it on Friday
> 28 August 2026 — grounded in 31,081 recorded page views and a 52.5% phone-open
> rate no gifting blog can publish.

---

## Phase 3 — Third-party sources (re-sourced 2026-08-13)

Re-run against `references/research-sources.md`. The previous set of six contained
**no research at all** and leaned on three PIB releases plus an MEA head-count. Two
of those — 37,280,845 overseas Indians and 1,092.79 million internet subscribers —
were about India rather than about siblings, distance or ritual, and would have sat
unchanged in any post in this batch. Both are gone, with the paragraphs they
propped up. The Delhi Circle release went too, and **the one body claim that
depended on it (counters closing 06.08.2025) was deleted rather than left
unsourced**. `pib.gov.in` drops from three URLs to one — the release that is
actually about Rakhi.

| # | Source | Verified string (read out of the fetched text) | Subject test | Published |
|---|---|---|---|---|
| 1 | Vaterlaus, Dodson & Bock, "Young Adults' Closest Sibling Relationships and Interactive Technology", *Marriage & Family Review*. Green OA, **CC BY 4.0**, [Montana State ScholarWorks](https://scholarworks.montana.edu/handle/1/17581) | "how young adults (n = 239) conceptualized sibling closeness and how interactive technology influenced their self-identified closest sibling relationship"; the three technology themes are "(1) functionality, (2) technology that promotes quality communication, and (3) technology is not a benefit for sibling relationship" | **Passes** — adult siblings and mediated communication, the exact phenomenon | 2022-11 |
| 2 | Mathew Schmalz (Professor of Religious Studies, College of the Holy Cross), ["Explaining 'Rakshabandhan'"](https://theconversation.com/explaining-rakshabandhan-a-hindu-festival-that-celebrates-the-brother-sister-bond-81665), The Conversation | "Sisters not only tie their brothers as defined by blood relationship, but also those with whom they have a very close family-like relationship"; "relationships are established and maintained through establishing clear roles of 'giver' and 'receiver' as well as 'protector' and 'protected'" | **Passes** — the brother–sister bond and the ritual itself. Academic-authored, not peer-reviewed, so it does not satisfy the scholarly requirement on its own | 2017-08-04 (page states "originally published on Aug. 4, 2017") |
| 3 | [PIB / India Post — international Rakhi shipments by 31st July](https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=2034361) | "India Posts strongly advise that you plan your Rakhi shipments by the 31st of July", to "minimize the likelihood of delays and customs-related hitches" | The single context source, and rakhi-specific rather than generic | 2024-07-19 |
| 4 | [NIST — Daylight Saving Time Rules](https://www.nist.gov/pml/time-and-frequency-division/popular-links/daylight-saving-time-dst) | "During 2026, daylight saving time is in effect from March 8 at 2 a.m. (local time) to November 1 at 2 a.m. (local time)" | **Fails** the swap test — a generic clock reference. Kept because the EDT/PDT offsets in the send-time table are wrong without it. No publication date on the page, so `publishedDate` is omitted | — |
| 5 | [GOV.UK — When do the clocks change?](https://www.gov.uk/when-do-the-clocks-change) | 2026 row: "forward 29 March, back 25 October"; "The period when the clocks are 1 hour ahead is called British Summer Time (BST)" | **Fails** the swap test, same reasoning. The page shows only "Last updated: 24 November 2025", which is a modification date, so `publishedDate` is omitted | — |

One peer-reviewed open-access source, one academic-authored topical source, one
rakhi-specific context source, two clock references. Total five, inside the 4–6 band.

**Abstract-only note.** Only the *abstract* of source 1 was read. The CC BY PDF is
free and linked from the same page, but its text streams would not extract in this
environment (`scholarworks.montana.edu` closes the socket on every client except
`ctx_fetch_and_index`, which returns the raw PDF). Nothing in the post claims more
than the abstract states, and the audit records this.

**Licensing.** Source 1 is CC BY 4.0 (reuse would be permitted; not reused).
Source 2 is CC BY-ND — cited and linked only, never reproduced. No figure, table or
substantial passage is copied from any source.

**Searched and rejected.** For the peer-reviewed slot the searches were
`adult sibling relationship maintenance geographic distance contact frequency`,
`siblings communication technology closeness media multiplexity`,
`sibling relationships adulthood open access` (OpenAlex title search, `is_oa:true`),
and a Europe PMC query for sibling + geographic distance + contact restricted to
open access. Most sibling-and-distance work is paywalled: *Adult sibling
relationships and media multiplexity theory* (JSPR 2024) is bronze OA behind a Sage
403; Perales' JMF 2020 proximity-and-contact study has no reachable OA copy;
`tandfonline.com` returns 403 to every fetcher here; the MDPI media-multiplexity
family-closeness paper returned empty content twice. `pmc.ncbi.nlm.nih.gov` article
pages return a reCAPTCHA interstitial. Ahlin's *Frequent Callers: "Good Care" with
ICTs in Indian Transnational Families* (Medical Anthropology 2018, hybrid OA,
CC BY-NC-ND) is the best topical match found for Indian transnational families, but
no copy could be fetched and verified, so it was **not** cited. The Madianou
polymedia paper was verified in the same pass and used on the sibling-adjacent
"celebrate online" post instead, so it is not reused here.

**2026 date:** verified from the [Wikipedia Raksha Bandhan infobox](https://en.wikipedia.org/wiki/Raksha_Bandhan)
(`2026 date | 28 August (Friday)`), used as the post's single Wikipedia link and as
the `about` entity. No government source for the 2026 date was reachable; flagged
here rather than papered over.

### Timezone arithmetic (derived, not invented)

IST = UTC+5:30, no DST. On **Friday 28 August 2026**, US DST is in effect (source 4)
and the UK is on BST (source 5):

| City | Offset 28 Aug 2026 | India is | Send at IST for 8:00 am local |
|---|---|---|---|
| Dubai / Abu Dhabi | UTC+4 | +1h 30m | 9:30 am |
| Riyadh / Doha | UTC+3 | +2h 30m | 10:30 am |
| London | UTC+1 (BST) | +4h 30m | 12:30 pm |
| Berlin / Paris | UTC+2 (CEST) | +3h 30m | 11:30 am |
| New York / Toronto | UTC−4 (EDT) | +9h 30m | 5:30 pm |
| San Francisco | UTC−7 (PDT) | +12h 30m | 8:30 pm |
| Singapore | UTC+8 | −2h 30m | 5:30 am |
| Sydney | UTC+10 (AEST) | −4h 30m | 3:30 am |

---

## Phase 5 — Internal links and Strapi targeting

- `https://subhsandesh.in/happy-rakshabandhan-to-brother` — anchor "Raksha Bandhan page for a brother". Live, HTTP 200 (verified 2026-08-13).
- `https://subhsandesh.in/missyou-bestfriend` — anchor "miss-you page for a best friend", framed honestly for the brother who is more best friend than sibling.
- `https://subhsandesh.in/templates` — anchor "browse the templates", at the CTA.

All three from `TEMPLATE_LINKS` in `app/lib/prompt.ts`. All placed after the section
that establishes the need; none in the opening.

**`categorySlug`: `festive-beats`** — chosen from the nine live Strapi slugs fetched
2026-08-13. `miss-you-across-miles` was the runner-up and is arguably a better fit for
the distance angle, but the post's primary entity is the festival.

**`templateUrls`:** `/happy-rakshabandhan-to-brother`, `/templates`.

**Wikidata QIDs** — all verified against the Wikipedia API on 2026-08-13, labels
confirmed: Raksha Bandhan `Q10266`, India Post `Q3519720`, Indian Standard Time
`Q604055`, Indian diaspora `Q925034`, Sibling `Q31184`. The TRAI entity
(`Q7695822`) was dropped with the subscriber statistic — the post no longer
mentions TRAI, and schema must not name what the page does not discuss.

---

## Phase 6 — Audit summary

*(Updated by the audit-remediation pass, 2026-08-13.)*

*(Re-sourcing pass, same date: source set rebuilt, word count re-checked.)*

Body: **1,799 words** (FAQs excluded). FAQs: **12**. H1 ×1, H2 ×8, H3 ×8.
metaTitle 60 chars, metaDescription 154, excerpt 238. Six distinct outbound links
(five sources + one Wikipedia entity link), three internal.

Two items remain failed in `batchMeta.auditReport.failed`:

1. **First-party facts are platform-wide, not rakhi-specific** — structural. The
   `/happy-rakshabandhan-to-brother` template shipped after the 2026-08-13 pull with
   zero recorded creations, so `content/facts.md` has no rakhi row to query. Closes
   once the template has roughly 100–200 published pages and `npm run facts` is
   re-run; re-check after the 2026 festival.
2. **Two sources pass the swap test** — the NIST and GOV.UK clock references would
   fit any timezone-bearing post. Kept deliberately: the IST send-time table is the
   post's reason to exist and the BST/EDT offsets are wrong without them. Neither is
   counted toward the topical-research requirement.

Closed by the remediation pass:

- **`FAQPage` block deleted from `structuredData`.** The reference files no longer
  contradict: `client/components/JsonLd.tsx:622-637` merges an `@id`-matched block
  and drops an unmatched one, so a bare `FAQPage` was dead weight. The renderer
  builds FAQPage from `article.faqs`, which is untouched.
- **Outbound links.** Now five sources plus the one Wikipedia entity link, all
  fetched and verified live on 2026-08-13, and every source is linked inline in the
  body as well as listed. The unlinked PIB Delhi-Circle cell that used to sit in the
  comparison table is gone: the release was cut and the claim with it.
- **Slug freshness** re-confirmed on 2026-08-13 (`/blog/…` returns 404 on the live
  site). Still a point-in-time check, as it is for every post in the batch.

Also changed: entry 6's send-time no longer says "muhurat window in his timezone" —
this post states clock times only and makes no panchang claim, and the timezone
table now says so explicitly. `templateUrls` normalised to `TEMPLATE_LINKS` paths
and `/missyou-bestfriend` added, since the body links it.

Backlink notes (not controllable from inside the post): the timezone send-time table
is the standalone-asset candidate here — it is the one thing on the page a forum
answer or a roundup would link to on its own.
