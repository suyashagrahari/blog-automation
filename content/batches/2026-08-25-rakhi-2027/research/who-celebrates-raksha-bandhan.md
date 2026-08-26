# `who celebrate raksha bandhan` — NOT WRITTEN. Stop-check failed.

Agent run 2026-08-26. Assigned slug `who-celebrates-raksha-bandhan` (free in Strapi,
total=0 for both the corrected and raw spellings). No blog JSON was emitted.

**Verdict: do not create this URL.** Two independent grounds, either sufficient.

---

## Step 0 — collision check: PASSED, keyword is unclaimed

- `grep -rh '"angle"' content/batches/*/blogs/*.json` — no angle claims a demographic
  or "who observes" framing.
- `grep -ril "who celebrate\|folded in" content/batches/*/research/*.md` — 9 hits, all
  checked. The only `who celebrate` hit is
  `2026-08-18-rakhi-2/research/corporate-raksha-bandhan-greeting-for-employees.md:39`,
  which quotes a *competitor's* copy ("closest with the phrase 'to those who celebrate',
  then stops"). It is not a keyword claim. Every `folded in` line names a different
  keyword.

So the keyword itself was never assigned twice. The problem is downstream.

---

## Ground 1 — SERP: 5 of 10 shared URLs against `why raksha bandhan is celebrated`

Threshold was 3+. Measured 5.

Instrument: **Brave, `country=IN`**, HTML scrape of `data-type="web"` organic blocks
(not raw hrefs — see the methodology note below). 20 organic results extracted per
query; top 10 compared.

| # | `who celebrate raksha bandhan` | `why raksha bandhan is celebrated` |
|---|---|---|
| 1 | **en.wikipedia.org/wiki/Raksha_Bandhan** | **fnp.com/article/raksha-bandhan** |
| 2 | **fnp.com/article/raksha-bandhan** | **bbc.co.uk/newsround/66616799** |
| 3 | britannica.com/topic/Raksha-Bandhan | **en.wikipedia.org/wiki/Raksha_Bandhan** |
| 4 | **utsav.gov.in/view-event/raksha-bandhan-celebration** | facebook.com/sadhguru/posts/… |
| 5 | **bbc.co.uk/newsround/66616799** | gladful.in/blogs/gifting/why-do-we-celebrate-raksha-bandhan-exploring-the-origins |
| 6 | rakhi.in/about-raksha-bandhan.aspx | **incredibleindia.gov.in/en/festivals-and-events/rakshabandhan** |
| 7 | myflowertree.com/article/raksha-bandhan | amritapuri.org/3539/rakshabandan.aum |
| 8 | **incredibleindia.gov.in/en/festivals-and-events/rakshabandhan** | quora.com/What-is-the-story-behind-celebrating-Raksha-Bandhan |
| 9 | bankbazaar.com/indian-holiday/rakhi-holiday.html | kidsstoppress.com/the-story-of-why-we-celebrate-raksha-bandhan |
| 10 | vedantu.com/blog/raksha-bandhan-celebration | **utsav.gov.in/view-event/raksha-bandhan-celebration** |

Shared (bold): `en.wikipedia.org/wiki/Raksha_Bandhan`, `fnp.com/article/raksha-bandhan`,
`utsav.gov.in/view-event/raksha-bandhan-celebration`, `bbc.co.uk/newsround/66616799`,
`incredibleindia.gov.in/en/festivals-and-events/rakshabandhan`. **5 URLs, 5 domains.**

### Corroborating evidence, more persuasive than the count

1. **Brave's own deep-link anchors give the game away.** On the *target* query Brave
   expanded the Wikipedia result into ten section anchors, among them
   `#Traditional_regions_of_observance` and `#Regional_variations_in_ritual`. The
   engine's best answer to "who celebrates" is a *section of the same page* it serves
   for "why" — i.e. it treats the two as one document-level intent.
2. **No result in the target top 10 is demographically framed.** Positions 1–2 are
   general "what is Raksha Bandhan" pages. `utsav.gov.in` and `incredibleindia.gov.in`
   are tourism-board festival pages; `rakhi.in`, `myflowertree.com` and `fnp.com` are
   florist explainers; `vedantu.com` and `britannica.com` are generic overviews. Only
   `bankbazaar.com/indian-holiday/rakhi-holiday.html` touches the holiday geography.
   **There is no demographic SERP to enter** — the query's realised intent is
   "what is this festival / when is it".
3. **The demographic demand exists, but under a different keyword.** Control query
   `who does not celebrate raksha bandhan south india` returned an entirely distinct
   set — `floweraura.com/blog/why-south-indian-people-dont-celebrate-raksha-bandhan`
   (pos 1), Quora ×2, `news18.com/…/how-rakhi-festival-is-celebrated-across-india-and-why-some-sta…`,
   `rakhibazaar.com/blog/…/is-raksha-bandhan-celebrated-in-south-india`, and a Times of
   India piece on a Rajasthan community that observes the day as one of grief. Overlap
   with the target top 10: **0 URLs.** That is where the "who" intent actually lives,
   and it is not the assigned keyword.

### Instrument controls — run before trusting any count

Required by the brief, and they changed the answer twice.

| Instrument | Result |
|---|---|
| **DuckDuckGo HTML POST** | **Now broken — do not trust the brief's "try this first".** Returned HTTP 200, ~14 KB, for all four queries with **zero extractable URLs**. Body text: *"Unfortunately, bots use DuckDuckGo too. Please complete the following challenge… Select all squares containing a duck"* (challenge code `aab3`). This is a CAPTCHA served at 200 — exactly the Bing failure mode the brief warns about. Had I not controlled, the 0/0 overlap would have read as "no collision, write the post". |
| **Brave `country=IN`** | Works. 429s hard under repeat calls — the target query needed 3 attempts with UA rotation and 10s+6s·n backoff; an earlier pass burned 4 attempts and got nothing. |
| **Modifier-sensitivity control** | **Passed.** `who does not celebrate raksha bandhan south india` returned 0 of the target's top 10, and surfaced topic-correct pages (floweraura, rakhibazaar, news18). Brave is genuinely reading the modifiers, so the 5/10 overlap is a real signal and not the modifier-stripping artefact that invalidated Bing. |
| Mojeek · SearXNG · Startpage · Marginalia · Yep · lite.duckduckgo | captcha / challenge / PoW / HTTP 501. All unusable. |
| Bing | Not pulled — discarded per brief. |

**Methodology note.** Raw-href extraction from Brave inflates the count badly: the
Wikipedia article alone contributed 10 anchor rows, which would have produced a false
overlap before the top 10 was even reached. Parsing `data-type="web"` organic blocks and
stripping fragments is what makes the count meaningful. Anyone re-running this must do
the same.

---

## Ground 2 — the differentiator is already published, plank by plank

The assignment's distinct job was demography: which regions mark a *different* Shravan
Purnima festival, plus religion, diaspora and the gazetted-holiday geography. Term counts
across the four siblings' JSON:

| Plank of the assigned angle | Already in | Count |
|---|---|---|
| Narali Purnima | `how-raksha-bandhan-is-celebrated` | 6 |
| Avani Avittam / Upakarmam | `how-raksha-bandhan-is-celebrated` | 2 / 11 |
| Jhulan Purnima | `how-raksha-bandhan-is-celebrated` | 5 |
| Gamha Purnima, Janai Purnima | `how-raksha-bandhan-is-celebrated` | in the same table |
| Sikh observance | `how-raksha-bandhan-started` (5), `why-raksha-bandhan-is-celebrated` (2) | 7 |
| Muslim observance | `why-sister-ties-rakhi-to-brother` | 9 |
| Gazetted in nine states/UTs | `rakhi-2026`, `rakhi-2027`, `raksha-bandhan-2026`, `rakhi-2027-wishes-for-sister` | 4 posts |

`how-raksha-bandhan-is-celebrated` ships a five-row table — *"The same full moon carries
at least five distinct observances"* — covering Narali Poornima, Gamha Purnima, Jhulan
Purnima and Janai Purnima, plus an FAQ *"What is Upakarma and how is it related?"* and an
FAQ *"Is Raksha Bandhan celebrated the same way everywhere in India?"*. **Three of the
five regional examples the assignment named as my differentiator are already on that
page, in a table built for exactly that comparison.**

The observance-vs-practice distinction the brief asked me to hold is real but thin: that
table's "Who ties, and to whom" column keeps sister→brother in every row, so it does
frame all five as places Raksha Bandhan *is* celebrated. Sharpening it into
non-observance is **one added column and one FAQ**, not a 1,500-word post.

What is genuinely unclaimed across all 52 posts: **Jains (0 mentions) and the diaspora
(0 mentions)**, and south-India non-observance as an explicit frame (0). Two paragraphs
of residual — and the SERP above says they have no keyword of their own to rank under.

---

## Recommendation

1. **Absorb the keyword into `why-raksha-bandhan-is-celebrated`.** It owns the shared
   SERP (5/10) and Brave already deep-links into its subject matter. Add
   `who celebrate raksha bandhan` to that post's secondary keywords and one H2 or FAQ,
   *"Who celebrates Raksha Bandhan?"*, answered demographically in ~120 words.
2. **Put the residual demographic material on `how-raksha-bandhan-is-celebrated`**, which
   already holds the five-observance table. Add an observance column (does this region
   mark Raksha Bandhan at all, or only the other festival?) and one FAQ covering Jains
   and the diaspora — the two genuinely unwritten planks.
3. **If a new URL is wanted, target `is raksha bandhan celebrated in south india`**
   instead. It has a measured, distinct SERP (0/10 overlap with either sibling), the
   incumbents are florist blogs and Quora threads rather than Wikipedia and Britannica,
   and the intent is genuinely demographic. That is the reachable version of this
   assignment.
4. **Do not source the nine-state gazette claim here.** `publicholidays.in` is at cap and
   the finding belongs to the `rakhi-2027` agent; four live posts already carry it. I did
   not independently verify any state's holiday status and have stated none.

## Note for the next brief

The assignment's stated differentiator was assembled from material that was already
published in this same batch. That is the third time in this batch an assigned angle
turned out to be in use (see the BRIEF's Gate 2 cut #6 note). Grepping
`batchMeta.angle` before writing a brief catches the angle-level case but missed this
one, because the collision was at the level of *table rows and FAQ topics*, not the
angle string. A cheap addition: grep the candidate differentiator's proper nouns
(here `Narali`, `Jhulan`, `Upakarma`) across `blogs/*.json` while writing the brief.
