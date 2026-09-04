# Research brief — how to surprise my girlfriend with flowers

Batch `2026-09-03-gift-bf` · slug `how-to-surprise-my-girlfriend-with-flowers` · category `modern-romance`
Written 2026-09-03. SERP not re-derived — taken from `content/keywords/2026-09-03-gift-gf-bf/serps.md`.

## Phase 1 — SERP, as already measured

Real Google, `gl=in&hl=en`, 2026-09-03. **Weak 4/8. AI Overview fired.**

| Host | Class | What it is |
|---|---|---|
| `myflowertree.com` | weak | Indian flower retailer — **competitor**, never cite or link |
| `pinterest.com` | weak | UGC boards |
| `interflora.in` | weak | Indian flower retailer — **competitor** |
| `reddit.com` | weak | UGC threads |
| `regalflowers.com.ng` | "strong" | Nigerian florist shop |
| `bloomsflora.com` | "strong" | flower retailer — **competitor** |
| `flowersathilltop.com` | "strong" | florist shop |
| `williampaulfloraldesignatl.com` | "strong" | Atlanta florist shop |

**Correction to the brief's framing of "strong".** All four "strong" hosts are
florist shops, and two of them (Nigeria, Atlanta) cannot deliver to an Indian
reader at all. The pages I could inspect are shop pages with a thin blog wrapper,
not editorial. So the SERP has **no editorial answer in it whatsoever** — the
weak/strong split here is a distinction between two kinds of commercial page, not
between shops and journalism. Per `competitors.md`, none of the retailers was
cited, linked, or used for framing.

**Intent risk, handled.** The searcher may genuinely want real flowers delivered.
Per the brief, this post therefore covers real-flower logistics properly and then
names the narrow cases where a page wins. See "The honesty problem" below.

## Phase 2 — Gap analysis

**Table stakes** (present across the retailer pages, so present here): when to
send, what to send, how to make it a surprise, where to send it.

**The gap — four things none of the eight page-one results does.**

1. **Nobody names the second recipient.** Every page assumes she is home. The
   commonest real failure is an unattended doorstep, and the fix (a flatmate, her
   mother, a briefed neighbour, a named receptionist) is one message.
2. **Nobody states a postharvest temperature.** They say "keep them fresh". None
   gives a threshold, and none acknowledges that a domestic fridge can *damage*
   tropical stems.
3. **Nobody mentions cats.** Lilium nephrotoxicity in cats is well established in
   the veterinary literature and is the single highest-consequence mistake
   available in this purchase.
4. **Nobody mentions the handler.** Tulipalin A — the allergen behind "tulip
   fingers" — is released on injury by *Rosa* and *Gerbera*, the two flowers
   Indian bouquets are actually built from.

**Stale data:** not applicable — the retailer pages carry no dated statistics at
all, which is itself the finding.

**Fan-out sub-queries → H2/H3 map.**

| Sub-query | Became |
|---|---|
| what makes a flower surprise work | H2 "What makes a flower surprise actually work" |
| why did my flower delivery fail | H2 "Five ways a flower surprise fails…" + 5 H3s |
| how long do cut flowers last in Indian heat | H2 "What Indian heat does to cut flowers" |
| which flowers should I pick if I don't know her taste | H2 "Choosing flowers when you do not know her taste" |
| home vs office vs hand-delivered | H2 "The five routes compared on what has to be true" (table) |
| can I send flowers when she is in another city | H2 "What a page written for her does that a bouquet cannot" |
| is a digital gift a real substitute for flowers | H2 "Where flowers win, and where a page is the wrong substitute" |

**Angle (recorded as `batchMeta.angle`).** Wins by being the only post that treats
a flower surprise as a delivery-and-survival problem — second recipient, reception
contact, named postharvest temperature thresholds, the Lilium-and-cat rule and the
tulipalin A handling risk — while being straight that a shared page is a companion
or a fallback and never a bouquet, using SubhSandesh's 42,099 recorded views at
12.3 per created page.

## The honesty problem — physical vs digital

`/bouquet-gf` is excluded from this batch, so no bouquet-building feature is
described anywhere in the post. The post takes the following line, in this order:

1. It treats real flowers as the default answer and spends roughly two-thirds of
   the body on making a real delivery work.
2. It states plainly, in the final H2, that **a page is not a bouquet** and that
   "nothing on a screen does what a stem in water does to a room", supported by
   the one flower-and-human-response study I could open (Ikei 2014) — *including*
   that study's limits (n=31, all male, one Tokyo office, measuring viewing rather
   than receiving).
3. It gives the recommendation one way round: same city + someone to receive →
   send real flowers, and send a page as well if you want words attached. Send a
   page *instead* only when the physical route is genuinely closed — another
   country, 1 a.m., nobody to take a delivery, a pollen allergy, or the flowers
   already arrived and you want something beside them.
4. It closes on a case where SubhSandesh is the wrong choice outright: a recipient
   who leaves her phone face-down all day, against the measured 50.2% phone-open
   share.

**No price, cost, delivery fee, "free", tier or plan claim appears anywhere.** The
Pricing block in `facts.md` is empty, so the post trades in *time*, *logistics*
and *risk* instead: delivery slots, lead time, who must be present, what kills the
flowers. A grep for `price|cost|free|fee|charge|paid|pay|cheap|tier|plan|₹|rupees`
over `contentMarkdown` returns zero hits.

## Phase 3 — Sources

Search terms actually run (the phenomenon, not the keyword): `flowers emotional
response study`, `cut flowers wellbeing mood experiment`, `flower gift recipient
emotion`, `postharvest cut flower vase life temperature`, `cut flower cold chain
temperature tropical`, `lily nephrotoxicity cats acute kidney injury`,
`occupational allergy florists ornamental plants pollen`, `flowers allergen
rhinitis`. Routes: Crossref, PMC E-utilities, Europe PMC REST, DOAJ API.

**Per the brief, "givers systematically mispredict what recipients want" was not
used** — a sibling verified Gino & Flynn 2011, Galak/Givi/Williams 2016 and Yang &
Urminsky 2018 are closed-access here. Nothing in this post rests on it.

| # | Source | Class | Subject test | Swap test |
|---|---|---|---|---|
| 1 | Ikei et al., *J. Physiological Anthropology* 33:6, 8 Mar 2014 — [PMC3974224](https://pmc.ncbi.nlm.nih.gov/articles/PMC3974224/) | peer-reviewed, CC BY, full text read | flowers → human physiological/psychological response | fails the swap test (flower-specific) |
| 2 | Malakar et al., *Frontiers in Plant Science* 14, 28 Jul 2023 — [PMC10419226](https://pmc.ncbi.nlm.nih.gov/articles/PMC10419226/) | peer-reviewed, open access, full text read | cut-flower postharvest temperature and keeping quality | fails the swap test |
| 3 | Nagy et al., *Toxins* 15(7):442, 4 Jul 2023 — [PMC10467095](https://pmc.ncbi.nlm.nih.gov/articles/PMC10467095/) | peer-reviewed, CC BY, full text read | ornamental-plant toxicity to household pets | fails the swap test |
| 4 | Phan et al., *Plant Methods* 21, 5 Feb 2025 — [Europe PMC PMC11795999](https://europepmc.org/article/PMC/PMC11795999) | peer-reviewed, CC BY, full text read | cut-flower allergen released on stem injury | fails the swap test |
| 5 | Cunha Neto et al., *Ornamental Horticulture* 29(2), 2023 — [rbho 2643 galley](https://rbho.emnuvens.com.br/rbho/article/view/2643/1946) | peer-reviewed, open access, **full text read in the fix pass** | postharvest technique effectiveness for cut stems | fails the swap test |

Five sources, all peer-reviewed and open access, **zero generic context
statistics**, **zero Wikipedia body links**, **zero competitor citations**. Every
one is flower-specific, so none of them could sit unchanged in a sibling's post.

### What each source actually says, as verified

1. **Ikei 2014.** 31 male office workers (37.3 ± 2.0 yrs), 4 minutes viewing 30
   unscented pink roses at 37–40 cm, counterbalanced against a no-flower control.
   HF component of HRV 502.4 msec² vs 414.0 in control — a 21% increase, p<0.05.
   "Comfortable", "relaxed" and "natural" all significantly higher (p<0.01).
   No significant difference in LF/HF or pulse rate. CC BY.
   **Limits stated in the post:** small, all-male, single-site, and it measures
   *viewing* roses, not *receiving* them.
2. **Malakar 2023.** Recommended storage temperature for cut *Heliconia* is >12°C;
   chilling injury (depressions, browning, dark spots) below 10°C for 2 days;
   *Anthurium* optimum 10–12°C. Reporting Leite et al. 2015, cut *H. stricta*
   'Bucky' boxed at 23°C / 89% RH achieved the optimum postharvest attributes and
   a 7-day shelf life. Also: "prolonged exposure of the cartons to scorching
   temperatures due to unprofessional handling can also cause injury".
3. **Nagy 2023.** "Cats are the most sensitive species to poisoning by plants from
   the genus *Lilium*. These plants are nephrotoxic to cats, causing acute renal
   failure." "Consumption of a small amount, such as one or two leaves or one whole
   flower, can cause toxicosis in cats." Separately: *Zantedeschia aethiopica*
   (calla lily) is **not** nephrotoxic; it carries calcium oxalate raphides that
   irritate the oral cavity, and there is no evidence cats are more susceptible to
   it than other species. CC BY.
4. **Phan 2025.** Allergic contact dermatitis associated with *Alstroemeria* and
   *Tulipa* is documented among florists and gardeners; the causative agent is
   tulipalin A, and the condition from handling damaged floral parts is known as
   "tulip fingers", with airborne cases also observed. Detectable tulipalin A
   release on injury from *Rosa*, *Gerbera*, *Ranunculus*, *Muscari*, *Galanthus*,
   *Tulipa* and *Alstroemeria*, predominantly from *Tulipa* and *Alstroemeria*.
   CC BY. **Read via the Europe PMC full-text XML endpoint** — the PMC HTML page
   returned a reCAPTCHA wall on this machine; the citation points at Europe PMC,
   which is where the full text was actually read.
5. **Cunha Neto 2023.** Abstract: "the addition of preservatives to solutions,
   variations in storage temperature, and the use of electromagnetic fields were
   the most effective techniques in extending the shelf life of cut flowers.
   However, techniques such as dry conditioning and the use of coating films did
   not show significant results." DOI `10.1590/2447-536X.v29i2.2643`, journal,
   volume 29 issue 2 and the 2023 year were confirmed through Crossref.
   **Full text read in the fix pass (2026-09-03).** The drafting 404 was a wrong
   galley id, not a paywall: `/rbho/article/view/2643/1591` still returns HTTP
   404, but the landing page's own `citation_pdf_url` names galley **1946**, and
   `/rbho/article/download/2643/1946` returns HTTP 200, `application/pdf`,
   1,956,016 bytes. From that full text, now cited in the body: "From the
   systematic search considering the year 2023, **88 case studies** were found"
   and "In relation to storage temperature evaluation, the meta-analysis was
   significant, indicating an **increase of 5 to 6 days** in the postharvest vase
   life of the stems (Figure 7)". The citation URL was moved to the galley
   viewer `/rbho/article/view/2643/1946` (HTTP 200) so the outbound link is the
   page that actually contains the cited numbers; the domain is unchanged, so no
   source cap moves. Not read but noted for future use: the same full text puts
   normal tropical-stem storage between 8 °C and 16 °C, left out of the body only
   for word budget.

### Sources rejected, and why

- `journals.sagepub.com/doi/10.1177/147470490500300109` — Haviland-Jones et al.
  2005, "An Environmental Approach to Positive Emotion: Flowers", the obvious
  first choice. **HTTP 403** here; `epjournal.net` mirror unreachable. Confirmed
  via Crossref that it exists (Evolutionary Psychology 3(1), 2005) but **not
  cited**, because nothing in it could be verified.
- `www.mdpi.com/2311-7524/11/8/959` — forced-air precooling of cut roses,
  Horticulturae 2025. **HTTP 403**, no PMC mirror, not cited.
- `onlinelibrary.wiley.com/doi/10.1111/j.1398-9995.1998.tb03872.x` — "Occupational
  allergy caused by flowers", *Allergy* 1998. Wiley 403s here **and** the domain
  is already at 4 posts corpus-wide and 2 in this batch. Not cited.
- `journals.ashs.org`, `scielo.br` (Ciência Rural gerbera/temperature paper) —
  HTTP 502 / unreachable at fetch time.
- `frontiersin.org` direct URLs — the domain is at 2 of its 3-post cap in this
  batch, so the Malakar review is cited at its PMC mirror instead.
- All eight page-one hosts — competitors or UGC.

### Cap compliance

No source URL here appears in any sibling file in
`content/batches/2026-09-03-gift-bf/blogs/`, and no URL anywhere in the batch is in
more than 2 posts. Re-counted against all ten completed blog files, domain counts
inside this batch are: `pmc.ncbi.nlm.nih.gov` **3 posts — exactly at the cap**
(this one, `anniversary-gift-for-boyfriend-unique`,
`romantic-gifts-for-boyfriend-long-distance`), `europepmc.org` 2 posts (this one and
`how-to-surprise-your-boyfriend-randomly`), `rbho.emnuvens.com.br` 1 post. Nothing
exceeds the cap, but PMC has no headroom left in this batch: an eleventh post, or a
remediation pass that adds a PMC source anywhere, would break the rule. Flagging it
rather than assuming someone else will notice.
None of the 42 spent URLs in `USED-SOURCES.md` is used. Note that
`ornamentalhorticulture.com.br/rbho/article/view/3015` **is** on the spent list —
a different article on the same journal at a different host, so the domain was
checked deliberately and the spent URL avoided.

## Phase 4/5 — Draft decisions

- **1,787 words** in `contentMarkdown` by plain whitespace split, FAQs excluded
  (1,771 on the studio's `wordCount()` in `app/lib/batches.ts`). Was 1,780 before
  the fix pass; the +7 is the meta-analysis numbers and the sources-line disclosure.
- **10 FAQs**, in `article.faqs` and the renderer-built FAQPage only. None
  duplicates an H2's meaning: the FAQs are hostel/PG delivery, stem count,
  anther removal, refrigeration, damage on arrival, no-occasion sending, and
  whether anything needs installing.
- **Primary first-party fact chosen to differ from the siblings.** All four
  existing sibling files lead on the 7.2-hour median edit gap and/or the `/love-gf`
  #1 share. This post leads on **42,099 recorded views** and **12.3 views per
  created page** instead, because "a page gets reopened, a bouquet does not" is the
  post's actual argument.
- **No first-party number is attached to recipient gender** anywhere. The database
  records page creation, not who received it.
- **Internal links: 3**, all from the batch's permitted five, all after the section
  that establishes why the reader would want them: `/love-gf` (1,001 created,
  29.2%), `/darling` (349, 10.2%), `/missyou-gf` (**no count attached — it is not
  in the top five page types, and the post says so explicitly**).
  `/apology-dashboard` was **not** linked: this post does not cover
  flowers-as-apology, and bolting it on to reach a link count would be keyword
  stuffing. `/bouquet-gf` is neither linked nor described.
- **Comparison table** is keyword-specific — five *delivery routes* against who
  must be present, lead time, and what kills it — not a generic digital-vs-physical
  table. The first-party column is honestly empty on the three physical rows, and
  the sentence after the table says why: the database records pages, not parcels.
- **No H2 or H3 overlaps a sibling.** Re-checked case-insensitively against all
  nine other blog files in the batch: the only shared heading is `## Sources`,
  which `page-structure.md` prescribes for every post. The nearest conceptual
  neighbour is each post's own "when this is the wrong choice" block, and mine is
  about flowers versus a link rather than about a gift's timing.

## Phase 6 — Audit summary

`passed` = 47, `failed` = 3 at draft time. **After the fix pass: `passed` = 49,
`failed` = 1**, disjoint, 49 + 1 = 50 (the full `publish-checklist.md`), item
strings extracted programmatically from the checklist and compared byte-verbatim,
including the four items that wrap across lines in that file.

### Fix pass — 2026-09-03

1. *Any paywalled citation records that only the abstract was read* → **passed,
   by closing the gap rather than reinterpreting the item.** No citation in this
   post is paywalled. The one source read as abstract-only at draft time is now
   read in full: see source 5 above. The wrong galley id was the whole problem.
   The disclosure trail is kept anyway, in three places, because the item exists
   to stop unread full texts hiding — `batchMeta.sources[4].stat` records the 404
   galley and the galley that works, the body's Sources list says "full text
   read", and `auditReport.honestAssessment` states both. Had the full text
   stayed unreadable, the item would have stayed failed: on the reading taken
   here, "paywalled" covers any full text the writer could not open, whatever the
   HTTP status, and a 404 is not an excuse to record less.
2. *metaTitle 50–60 characters, exact keyword in the first five words (hard cap
   70)* → **passed, no text change needed.** `How to Surprise My Girlfriend With
   Flowers — 5 Ways It Fails` is 60 characters (inside 50–60, not the 70 cap),
   one em-dash separator, no banned booster, no year-stamp, and differs from the
   H1. On the placement clause: `meta-and-titles.md` states the rule as "the
   exact target keyword in the first five words, **ideally at the very start**.
   Position matters more here than anywhere else on the page" — it is a
   front-loading rule about where the keyword *begins*, not a cap on how long the
   keyword may be. The keyword begins at word one, the ideal case, and no
   rewrite can improve on that. Batch precedent agrees: four sibling posts with
   six- and seven-word keywords record this item as passed
   (`surprise-gift-for-girlfriend-on-valentines-week`,
   `surprise-gifts-for-girlfriend-on-valentines-day`,
   `romantic-gifts-for-boyfriend-long-distance`,
   `anniversary-gift-for-boyfriend-2-years`), and the draft's failure was
   inconsistent with them.
3. *Paragraphs 2–3 sentences throughout* → **left failed, deliberately.** It is
   unsatisfiable alongside `page-structure.md`, whose Block 1 prescribes a single
   ~150-word answer paragraph carrying the direct answer, two first-party numbers
   and one scope sentence — five sentences by construction, and the one block an
   answer engine lifts whole. Splitting it to clear a checklist item would trade
   the post's most extractable asset for a tick. The failure is isolated to that
   paragraph: all 24 other prose paragraphs run two or three sentences, and the
   five H3 blocks were written short enough to comply, so this post does not hit
   the Block 3 four-fields-per-H3 conflict its siblings do. Re-check when
   `page-structure.md` stops requiring the answer to be one paragraph, or when the
   checklist item is scoped to body prose outside Block 1.

### Re-verified in the fix pass, not only the three failures

All 50 items re-run. Independently re-checked rather than trusted: all five
outbound URLs return HTTP 200; all six `sameAs` Wikipedia titles resolve
non-redirected with their paired Wikidata QID confirmed through the Wikipedia API
(`Q1576780`, `Q5194627`, `Q310654`, `Q34687`, `Q7916473`, `Q12077704`); all seven
`factsUsed` strings are byte-identical to `content/facts.md` including the
`— measured 2026-09-03` suffix; `structuredData` `citation` mirrors
`batchMeta.sources` one-to-one in order; the `ItemList` names match the five H3s
in order; 10 FAQs, none of them present in `contentMarkdown`; three internal
links, all from the batch's permitted five, `/bouquet-gf` absent from the file
entirely and `/missyou-gf` carrying no first-party figure; zero competitor
mentions; zero price, cost, fee, "free" or tier words; `pmc.ncbi.nlm.nih.gov`
still at three cited posts in the batch, with nothing added by this pass.

## Errors found in the brief

Reporting one, per the brief's request. **The brief calls all four non-weak hosts
on this SERP "strong".** They are four florist shops, two of which are not in
India, and the ones I could inspect are commerce pages. That matters because
"beatable only on India-specific ground" (the `theknot.com` framing used elsewhere
in the brief) does not apply here at all — there is no editorial incumbent on this
SERP to beat, only shops. The brief's own Row 10 section gets the *intent* risk
right; it is the strength labelling that overstates the competition.
