# Research brief — `ganesh-chaturthi-quotes` — **GATE STOPPED. NO POST WRITTEN.**

- **Assignment:** `assignments[9]`, n=10, batch `2026-09-09-ganesh-10c`
- **Primary keyword:** `ganesh chaturthi quotes`
- **Folds in:** `ganesh chaturthi wishes` · `ganesh chaturthi quotes for instagram`
- **Cluster:** C02 · **Research lane:** quotation and aphorism circulation (unspent — see §6)
- **Slug check:** `strapi.subhsandesh.in/api/articles?filters[slug][$eq]=ganesh-chaturthi-quotes`
  returned `{"data":[],"meta":{"pagination":{"total":0}}}` on 2026-09-10 — **free**, and still free.
- **Harvest date:** SERPs captured 2026-09-09 late, verification fetches 2026-09-10 IST.
  The session crossed midnight; both dates are recorded rather than picking the flattering one.
- **Outcome:** `blogs/ganesh-chaturthi-quotes.json` was **not written.** The gate stopped this
  assignment before Phase 4. Nothing else in the batch was touched.

---

## 0. The verdict up front

| Comparison | Live sibling | Engine | Shared **articles** | Gate rule | Result |
|---|---|---|---|---|---|
| **Primary** — `ganesh chaturthi quotes` | `2026-09-09-ganesh-10/happy-ganesh-chaturthi-wishes` (`happy ganesh chaturthi wishes`) | `WebSearch` (US-localised) | **2** — caratlane.com, fnp.com | "Exactly 2: STOP and report the ambiguity, do not decide it yourself" | **STOPPED — ambiguous, escalated** |
| **Second** — `ganesh chaturthi quotes for instagram` (the fold) | `2026-09-09-ganesh-10b/ganesh-chaturthi-captions-for-instagram` | `WebSearch` (US-localised) | **3** — eduyush.com, pratidintime.com, vaaree.com | "3 or more = same keyword: STOP" | **TRIPPED — the fold is the live post's keyword** |
| Second — primary keyword vs the same sibling | as above | `WebSearch` | **0** | — | passes |
| **Third, advisory** — the provisional good-morning-wishes top 10 | `2026-09-09-ganesh-10c/ganesh-chaturthi-good-morning-wishes` (provisional) | its PolterTab `gl=in` harvest | **1** — fnp.com `/quotes/ganesh-chaturthi` | advisory only | 1, no trip |

**And a finding that does not depend on any SERP at all.** The live sibling's own brief,
`content/batches/2026-09-09-ganesh-10/research/happy-ganesh-chaturthi-wishes.md` line 5, states:

> **Folds in:** ganesh chaturthi wishes · happy ganesh chaturthi · ganesh chaturthi quotes

That live post already claims **both** of my primary keyword and my first secondary, by its own
written record. That is a documentary merge, independent of the two-vs-three counting argument
below, and it is the single most important thing in this brief. `ASSIGNMENTS.json`'s
`coverage.unclaimedRowsNotAssigned` only flags `ganesh chaturthi quotes in hindi` as already
live; it does not surface the *secondaries* the 25 existing posts folded in. That is the gap in
the coverage bookkeeping that produced this assignment — and it produced **three more like it in
this same wave.** See §7.3.

---

## 1. Method, recorded honestly

| Attempt | Endpoint | Outcome |
|---|---|---|
| Google plain HTTP | `google.com/search?gl=in` | Not attempted — BRIEF §5 and the sibling briefs both record it as JS-walled (HTTP 200 + `enablejs`, no result markup) and 429 on the scraping path. Re-testing it would only burn the shared rate limit. |
| **`WebSearch` tool** | one call per keyword | **Worked. This is the harvest of record.** **US-localised, not `gl=in`** — stated plainly because the gate verdict rests on it. |
| DuckDuckGo | `html.duckduckgo.com`, `kl=in-en`, POST | **HTTP 202**, 14,325 bytes, **0 parseable results** — bot-challenge page, both queries. |
| Brave | `search.brave.com?country=in` | **HTTP 429.** The only host in the returned markup was `tb-manual.torproject.org`, i.e. the block page. |
| PolterTab / shared Chrome | — | **Deliberately not used.** The good-morning-wishes agent records that its first harvest came back as a *different* agent's `ganpati bappa photos` SERP because the tab was being driven concurrently. With the verdict already decisive on two independent comparisons, the corruption risk outweighed the localisation gain. |

**What the US localisation does and does not affect.** It changes *which* commerce sites rank
(a US-side SERP surfaces `mypoojabox.in` and `giftcarnation.com`; an India SERP would likely
push Pinterest and Adobe Express higher, as it did for the good-morning agent). It does **not**
plausibly reverse either verdict: the two shared articles on the primary are the #1 and #6
results, and the three on the Instagram fold are the #1, #2 and #3 results. A merge sitting at
the very top of both SERPs does not evaporate under re-localisation — if anything, an India
SERP would tighten it, because caratlane and fnp are Indian retailers.

---

## 2. My SERP — `ganesh chaturthi quotes` (`WebSearch`, US-localised, 2026-09-09)

| # | Domain | Title as returned | Format | Competitor? |
|---|---|---|---|---|
| 1 | caratlane.com | "Happy Ganesh Chaturthi Wishes 2026: Best Quotes and Messages" | Jewellery-retailer blog listicle | Yes — retailer |
| 2 | mypoojabox.in | "10 Beautiful Ganesh Chaturthi Messages & Quotes to Share with Loved Ones" | Puja-goods store blog | Yes — retailer |
| 3 | floweraura.com | "Ganesh Chaturthi Wishes, Quotes & Text Messages" (`/quotes/ganesh-chaturthi`) | Gifting retailer quotes hub | Yes — named in `competitors.md` |
| 4 | winni.in | "Happy Ganesh Chaturthi Wishes, Quotes & Messages 2026" (`/wishes/ganesh-chaturthi`) | Gifting retailer wishes hub | Yes — named in `competitors.md` |
| 5 | zalkari.com | "100 Best Ganesh Chaturthi Quotes & Wishes 2025 for Inspiration" | Quotes farm on a Shopify store | Yes — wishes farm |
| 6 | fnp.com | "100+ Happy Ganesh Chaturthi Wishes & Images - FNP" (`/quotes/ganesh-chaturthi`) | Gifting retailer quotes hub | Yes — named in `competitors.md` |
| 7 | ganeshchaturthi.org | "Ganesh Chaturthi Quotes – Quotes for Ganesh Chaturthi" | Single-festival topical site, quote dump | Yes — wishes/quotes aggregator |
| 8 | giftcarnation.com | "Top 50 Inspirational and heartfelt Wishes and Quotes for this Ganesh Chaturthi 2024" | Gift-hamper store blog, **2024-stamped** | Yes — retailer |

`WebSearch` returned 8 result blocks, not 10, and reports no AI Overview either way — so
**no AIO is recorded for this keyword**, and its absence is not evidence of absence.

## 2b. My SERP — `ganesh chaturthi wishes` (first secondary, same engine and date)

| # | Domain | Title | Note |
|---|---|---|---|
| 1 | adobe.com/in/express | "Ganesh Chaturthi Wishes (with Templates)" | Design tool. Also #9 on the good-morning agent's `gl=in` harvest. |
| 2 | caratlane.com | "Happy Ganesh Chaturthi Wishes 2026: Best Quotes and Messages" | **Same article as #1 on my primary and on sibling A** |
| 3 | floweraura.com | "Ganesh Chaturthi Wishes, Quotes & Text Messages" | Same article as #3 on my primary |
| 4 | joliecarte.com | "Ganesh Chaturthi wishes messages English - Free card" | Ecard generator. Also #6 on the good-morning agent's harvest. |
| 5 | fnp.com | "100+ Happy Ganesh Chaturthi Wishes & Images" | **Same article as #6 on my primary and on sibling A** |
| 6 | bloomsflora.com | "Best Ganesh Chaturthi Wishes for Family and Friends" | Florist blog |
| 7 | newsonair.gov.in | "prime minister modi wishes peace prosperity on ganesh chaturthi" | Wrong intent — a news item about a politician's greeting |
| 8 | newsonair.gov.in | "president droupadi murmu wishes on the auspicious occasion…" | Wrong intent, same shape |

`ganesh chaturthi wishes` shares **4 of its 6 usable results with my own primary SERP.** It is
not a distinct keyword from `ganesh chaturthi quotes` on this evidence — which is exactly why
sibling A folded it, and it is a second reason the two assignments collapse into one.

## 2c. My SERP — `ganesh chaturthi quotes for instagram` (second secondary)

| # | Domain | Title | In sibling B's harvest? |
|---|---|---|---|
| 1 | eduyush.com | "Ganesh Chaturthi Captions for Instagram: 250+ Ganpati & Marathi Ideas" | **Yes — its #1, title recorded verbatim** |
| 2 | pratidintime.com | "200+ Ganesh Chaturthi Wishes, Quotes, and Captions for Instagram in 2025" | **Yes — its #2, title recorded verbatim** |
| 3 | vaaree.com | "Ganesh Chaturthi Wishes, Messages & Quotes For Instagram" | **Yes** — listed as "cross-checked but not counted: vaaree.com (gifting retailer — a competitor)" |
| 4 | zalkari.com | "300+ Happy Ganesh Chaturthi Quotes for WhatsApp, Instagram & More" | No — and note this is a *different* zalkari article from the one on my primary SERP, so it is not double-counted anywhere |
| 5 | seminarsonly.com | "Ganesh Chaturthi Quotes for Instagram 2024" | No |

---

## 3. The shared-article verification — why these are the same ARTICLE, not the same publisher

This is the trap the songs agent avoided with Spotify and that the birthday batch got wrong four
times, so every claimed match below was verified by fetching the page and reading its `<title>`,
`<h1>` and `og:title` on 2026-09-10. The discrepancy that made this look like a near-miss is
mundane: **my harvest recorded `<title>`, the sibling briefs recorded `<h1>`.** Same URL, same
article, two different strings.

| Domain | URL | Live `<title>` | Live `<h1>` | Sibling recorded | Same article? |
|---|---|---|---|---|---|
| caratlane.com | `/blog/happy-ganesh-chaturthi-wishes-quotes-messages/` | "Happy Ganesh Chaturthi Wishes 2026: Best Quotes and Messages" | "Top Happy Ganesh Chaturthi Wishes 2026: 101 Messages, Quotes & Greetings to Share" | A: "Top Happy Ganesh Chaturthi Wishes 2026: 101 Messages…" | **YES** — sibling A recorded the H1 of the page my SERP returned by its title. One URL. |
| fnp.com | `/quotes/ganesh-chaturthi` | "100+ Happy Ganesh Chaturthi Wishes & Images - FNP" | "Happy Ganesh Chaturthi Wishes, Quotes, Images, Greetings, Text, WhatsApp Status N Messages" | A: "Happy Ganesh Chaturthi Wishes, Quotes, Images…" | **YES** — identical, H1 truncated in the sibling's table. One URL. |
| eduyush.com | `/en-us/blogs/lifestyle/ganesh-chaturthi-captions-for-instagram` | "Ganesh Chaturthi Captions: 250+ Ganpati, Marathi 2026 – Eduyush" | "Ganesh Chaturthi Captions for Instagram: 250+ Ganpati & Marathi Ideas" | B: "Ganesh Chaturthi Captions for Instagram: 250+ Ganpati & Marathi Ideas" | **YES** — B recorded the H1 exactly. |
| pratidintime.com | `/lifestyle/150-ganesh-chaturthi-wishes-status-and-captions-for-instagram` | "200+ Ganesh Chaturthi Wishes, Quotes, and Captions for Instagram in 2025" | same | B: identical string | **YES** — title, H1 and og all agree. |
| vaaree.com | `/blogs/vaaree-journals/ganesh-chaturthi-wishes-messages-quotes-for-instagram` | "Ganesh Chaturthi Wishes, Messages & Quotes For Instagram \| Vaaree" | "Ganesh Chaturthi Wishes, Messages & Quotes For Instagram" | B: "vaaree.com", **no title recorded** | **PROBABLE.** B logged the domain only. Vaaree's blog carries one Ganesh Instagram-quotes article and this is it, so the identity is near-certain — but it is the one match resting on inference rather than a recorded string, and it is flagged as such. |

**Both `pinterest.com` and `youtube.com` were excluded from every count above.** Neither
appeared in my `WebSearch` harvests in any case, which is itself a US-localisation artefact —
the good-morning agent's `gl=in` harvest was 4 of 10 Pinterest.

### The count, stated so it cannot be read two ways

- **Primary vs sibling A: 2 shared articles** (caratlane, fnp). Both verified by fetch. Neither
  is Pinterest or YouTube. Neither is a same-publisher-different-asset false positive.
- **Instagram fold vs sibling B: 3 shared articles** (eduyush, pratidintime, vaaree) — of which
  **2 are verified against strings the sibling recorded verbatim** and 1 rests on domain-plus-URL
  inference. **So the fold trips at 3, or at 2 on the strictest possible reading — and 2 is also
  a stop condition.** There is no reading of the evidence on which the Instagram fold survives.

---

## 4. What I did **not** do, and why

- **Did not write the post.** The primary comparison landed on exactly the value the assignment
  reserves for escalation. One agent in this wave decided a 2 for itself today and its gate had
  to be re-run; that is not repeated here.
- **Did not silently drop the Instagram fold to rescue the post.** The assignment asks for that
  as a *recommendation*, not an action, and in any case dropping it does not clear the primary.
- **Did not run Phase 3 sourcing.** No sources were fetched, so no source-cap budget in `-10c`
  was consumed by this assignment. The lane is intact for whoever inherits it.
- **Did not touch** `batch.json`, `content/facts.md`, `ASSIGNMENTS.json`, or any sibling's files.

---

## 5. Format finding (BRIEF §5 requires it regardless of the verdict)

**Format risk: LOW-to-MEDIUM. A blog post is the right format for this query — that was never
the problem.** Unlike the banner/poster SERP, which is entirely design tools and stock libraries
with zero informational pages, my primary SERP is 8 of 8 *prose pages*. The problem is what
those pages are.

1. **Every single result is a competitor under `references/competitors.md`** — five gifting or
   puja retailers, two quotes farms, one single-festival aggregator. Nothing citable, nothing
   linkable, and the entire SERP is off-limits as a source.
2. **Not one result publishes a number of any kind.** No count, no date, no measurement. Same
   finding as sibling A recorded for `happy ganesh chaturthi wishes` and sibling B for captions.
   The SERP has no data to supersede, which is a real opening and is the reason the C02 cluster
   was worth entering at all — it is just already entered.
3. **A stale result ranks.** `giftcarnation.com` is 2024-stamped and still on page one, which
   says how little competitive pressure this SERP is under.
4. **The attribution gap is real and completely unoccupied.** Every page prints lines in
   quotation marks; not one names a source for any of them. The `ganeshchaturthi.org` and
   `zalkari.com` pages mix devotional formulae, modern motivational lines and mantras in one
   undifferentiated list. Nobody distinguishes an attributed quote from an invented one.
5. **`newsonair.gov.in` ranking twice on `ganesh chaturthi wishes`** is a mixed-intent signal:
   part of that keyword's volume is people looking for *news about* official greetings, not
   greetings to send. Worth knowing for whichever post eventually owns the wishes intent.

---

## 6. The angle, banked for the reserve keyword

Recorded because it is the useful residue of a stopped assignment, and because the lane is
unspent — no sources fetched, no domain budget touched.

**Lane:** quotation and aphorism circulation — why short attributed text spreads,
misattribution, the social function of quoting.

**The angle as it stood:** a quote differs from a wish in exactly one way that matters — a quote
is *attributed* — and a large share of festival quotes circulating online carry an attribution
that is invented, drifted, or unverifiable. Verifying attribution is a genuine scholarly subject
(the Quote Investigator / Garson O'Toole tradition, and the misquotation literature on how
aphorisms migrate to more famous names over time), and §5 point 4 above confirms **no page on
this SERP does it.**

**Where it would have to be careful, spelled out so the next agent inherits the constraint and
not just the idea.** The angle's own rule is that you may not print an unverifiable attribution
as fact. That cuts both ways: you also may not assert "this quote is misattributed" without
naming where it actually comes from or stating plainly that no source can be found. Several of
the lines on this SERP — "Om Gan Ganapataye Namo Namah", "Ganpati Bappa Morya" — are formulae
and slogans, not attributable quotations at all, and calling them misattributed would be its own
error. And a Sanskrit line must be printed correctly or not printed.

**Candidate reserve keywords that would carry this angle without re-merging** — offered as
suggestions, not decisions, and each needs its own gate run:

- `ganesh chaturthi quotes by famous personalities` — narrows straight onto the attribution
  problem, and no C02 sibling folds it.
- `who said ganpati bappa morya` / `ganpati bappa morya meaning` — an attribution question with
  a real answer; check against `ganpati-aarti` and `ganpati-mantra-and-stotra`, which are live.
- `ganesh chaturthi quotes in sanskrit with meaning` — but `ganpati-mantra-and-stotra` is live
  in `-10b` and this would likely merge with it.

The C02 wishes/quotes intent is, on this evidence, **fully claimed** by
`happy-ganesh-chaturthi-wishes` (which folds `ganesh chaturthi quotes` by its own record),
`ganesh-chaturthi-quotes-in-hindi`, `happy-ganesh-chaturthi-status` and
`ganesh-chaturthi-captions-for-instagram`. A reserve keyword should probably leave the cluster
rather than look for another corner of it.

---

## 7. Recommendation

1. **Substitute a reserve keyword.** `ganesh chaturthi quotes` is the same keyword as the live
   `happy ganesh chaturthi wishes` — on 2 verified shared articles at positions 1 and 6, and on
   the live post's own written claim to fold it.
2. **Drop `ganesh chaturthi quotes for instagram` permanently, from any future assignment.** It
   is the live `ganesh chaturthi captions for instagram` post's keyword: 3 shared articles at
   positions 1, 2 and 3. This is the bappa-photos precedent, and unlike that case dropping the
   fold does not rescue the host post.
3. **Fix the bookkeeping, not just this row — and check three other assignments in this wave
   before they commit.** `ASSIGNMENTS.json` records `cannibalisationSibling` per assignment, but
   `coverage` lists only the *primary* keywords the 25 live posts claimed. Sibling A folds
   `ganesh chaturthi quotes` by its own written record. I ran the grep that would have caught
   this at zero cost —

   ```
   grep -h -iE "^\s*[-*]?\s*\*\*Folds in" content/batches/2026-09-09-ganesh-10{,b}/research/*.md
   ```

   — and it turns up **three more `-10c` assignments already folded by a live post**, on the
   same documentary basis as mine. These are flagged, not adjudicated; each is another agent's
   gate to run, and a declared fold is a strong signal but not by itself the 3-shared-article
   trip:

   | `-10c` assignment | Live post that already declares it as a fold |
   |---|---|
   | `ganesh-chaturthi-rangoli-designs` | `2026-09-09-ganesh-10/ganesh-chaturthi-decoration-ideas` — folds `ganesh chaturthi rangoli designs` |
   | `ganesh-chaturthi-greeting-card` | `2026-09-09-ganesh-10b/ganesh-chaturthi-wishes-with-name` — folds `ganesh chaturthi greeting card` |
   | `ganesh-chaturthi-invitation-maker` | `2026-09-09-ganesh-10b/ganpati-invitation-card` — folds both `ganesh chaturthi invitation maker` **and** `free ganesh chaturthi invitation maker` |

   Two further live folds are worth knowing about even though no `-10c` assignment targets them
   directly: `ganesh-chaturthi-drawing` folds `ganesh chaturthi poster drawing` (adjacent to the
   banner/poster assignment) and `ganesh-chaturthi-wishes-in-gujarati` folds
   `ganesh chaturthi quotes in gujarati`.

   The structural fix is to derive `coverage.unclaimedRowsNotAssigned` from the live briefs'
   `Folds in:` lines as well as their primaries, so a keyword claimed as a secondary cannot be
   handed out as a primary one wave later.
4. **Re-run this gate `gl=in` only if the verdict is being contested.** Two engines were
   unavailable (DDG 202, Brave 429) and the shared Chrome is being driven by other agents. The
   US-localised evidence is decisive at positions 1–3 and 6; a localisation change moves which
   *additional* commerce sites appear, not which article sits at #1.
