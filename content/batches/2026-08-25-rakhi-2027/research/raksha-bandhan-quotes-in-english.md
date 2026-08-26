# Research brief — `raksha-bandhan-quotes-in-english`

**Status: NOT WRITTEN. Cancelled at the pre-draft stop-check.**
Date: 2026-08-26 · Batch: `2026-08-25-rakhi-2027`

No `blogs/raksha-bandhan-quotes-in-english.json` was emitted. Phase 3 was never
reached, so no sources were settled and nothing was appended to `SOURCES.md`.
Lane F (media & data) and lane B (UK/EU theses) were never searched — their domain
headroom is preserved.

Companion record: `research/raksha-bandhan-lines-in-english.md` (also cancelled).

---

## 1. Why a stop-check ran

Three keywords were in play: the two queued (`raksha bandhan quotes in english`,
`raksha bandhan lines in english`) and the already-drafted
`raksha bandhan 2027 quotes` (`blogs/raksha-bandhan-2027-quotes.json`, 24 original
lines, quote-vs-wish distinction, leads on the 44.2% password-protect rate).

The rule applied: **≥3 shared URLs in the top 10 → one keyword, do not write.**

A pre-draft angle grep (`grep -rh '"angle"' content/batches/*/blogs/*.json`) was run
first, per the orchestrator's STEP 0. It found the assigned angle already in use —
see §6. This is the **third** time in this batch that a briefed angle turned out to
be published; the first two are recorded in `BRIEF.md`.

---

## 2. Method, and its limitation stated up front

**Phase 1 SERP teardown was NOT run via `WebSearch`. The session budget is exhausted
(200/200).** One `WebSearch` call was attempted and refused. Positions below are
therefore **approximate and must not be quoted as ranks**.

Instrument: **Brave Search, `country=in`, 2026-08-26.** HTTP 200 on all five queries,
no 429s, 20–25 s cooldowns between calls, rotated UA. Extraction by href order inside
Brave's `id="results"` container, de-duplicated, Brave's own chrome (`brave.com`,
`status.brave.app`, `hackerone.com/brave`) stripped.

**Bing was deliberately not pulled.** `BRIEF.md` documents it dropping modifiers and
serving a cached head-term SERP, and this stop-check turns entirely on modifier
behaviour — the one thing Bing is proven to get wrong here.

### Two readings of "top 10", both reported

Brave's DOM interleaves a Reddit discussion block and a YouTube video carousel among
the organic links, so raw href order is not visual rank. Both windows are reported
because they disagree in one place, and suppressing the disagreement would be
dishonest:

- **Raw top 10** — first 10 hrefs in DOM order, exactly the Gujarati precedent's method.
- **Content-page top 10** — first 10 excluding `youtube.com`, `reddit.com` and
  `brainly.in`, which are SERP *features* (video carousel, discussion block, Q&A)
  rather than organic article results.

### Instrument control — Brave is NOT stripping modifiers

Checked before trusting any of this, because a null result and a broken instrument
look identical:

- For `quotes in english`, Brave returned
  `pinterest.com/ideas/raksha-bandhan-quotes-in-english/929026978143/` at position 1.
  The bare query `raksha bandhan quotes` returns **zero** Pinterest results in 25.
- For `lines in english`, Brave swapped the retail-gifting layer out for
  `testbook.com`, `vedantu.com` and `brainly.in` — it responded to the word "lines".

Brave is reading the modifiers and reordering on them. Where the result sets still
converge, that convergence is a real finding, not the Bing artefact.

---

## 3. The three result sets

### Set A — `raksha bandhan quotes in english`

| ~Pos | URL | Type |
|---|---|---|
| 1 | pinterest.com/ideas/raksha-bandhan-quotes-in-english/929026978143/ | Pinterest ideas board |
| 2 | nestasia.in/blogs/news/101-rakhi-captions-quotes-wishes-for-brothers-sisters | retail blog |
| 3–6 | reddit.com ×4 (`i24n40`, `165kj36`, `1mdvonp`, `1eummja`) | discussion block |
| 7–12 | youtube.com ×6 (incl. `tZyWidUV8eM`) | video carousel |
| 13 | caratlane.com/blog/happy-rakhi-wishes-quotes-messages/ | retail blog |
| 14 | fnp.com/quotes/raksha-bandhan | retail quote page |
| 15 | uk.pinterest.com/sangeetatanna/rakhi-quotes/ | Pinterest board |
| 16 | adobe.com/in/express/discover/captions/raksha-bandhan | tool page |
| 17 | in.pinterest.com/pratibhasharma3232/rakhsha-bandhan-quotes/ | Pinterest board |
| 18 | igp.com/blog/happy-rakhi-wishes-for-brother/ | retail blog |
| 19 | adobe.com/in/express/discover/wishes/raksha-bandhan | tool page |
| 20 | pinterest.com/ideas/funny-raksha-bandhan-quotes-for-brother/934472218906/ | Pinterest ideas board |

Tail (21–25, recorded not counted): `fnp.com/quotes/raksha-bandhan/for-cousin`,
`rakhibazaar.com/rakhi-messages-wishes-quotes.aspx`,
`photojaanic.com/blog/celebrating-raksha-bandhan-for-long-distance-siblings`,
`pinterest.com/ideas/rakshabandhan-captions-for-instagram/918573635944/`,
`boxupgifting.com/blogs/all/110-happy-raksha-bandhan-captions-quotes-wishes-for-brother-sister`.

**Not one organic result is about the English language.** Every content page is a
generic quote list on a gifting or tool domain. There is no page on this SERP that
treats "in English" as a subject.

### Set B — `raksha bandhan lines in english`

| ~Pos | URL | Type |
|---|---|---|
| 1 | testbook.com/articles/10-lines-on-raksha-bandhan | **exam-prep / homework** |
| 2 | pinterest.com/ideas/raksha-bandhan-quotes-in-english/929026978143/ | **shared with A#1** |
| 3–8 | youtube.com ×6 (incl. `UY7ZyI7JoGM`, shorts `8sQnfnk2ay8`, `tZyWidUV8eM`) | video carousel |
| 9 | vedantu.com/english/raksha-bandhan-essay | **school essay** |
| 10 | fnp.com/quotes/raksha-bandhan | **shared with A#14** |
| 11 | adobe.com/in/express/discover/captions/raksha-bandhan | **shared with A#16** |
| 12 | srimandir.com/articles/wishes/raksha-bandhan-quotes-wishes?lang=en | wishes list |
| 13 | igp.com/blog/raksha-bandhan-quotes-messages-wishes/ | igp.com — shared domain, different URL |
| 14 | bigsmall.in/blogs/unique-gifts/rakhi-quotes-one-liners-rakhi-wishes-and-instagram-captions | retail blog |
| 15 | jagranjosh.com/…/raksha-bandhan-2025-captions-and-slogans-in-hindi-english-… | news list |

Tail (16–25): `oyegifts.com`, `rakhi.in`, `brainly.in/question/23458308`,
`brainly.in/question/5278887`, `99digest.com`, `vedantu.com/english/paragraph-on-raksha-bandhan`,
`skillmatics.in`, `rakhi.com/blog/rakhi-quotes/`, `brainly.in/question/1963013`,
`partyvillas.in`.

Three Brainly homework threads, two Vedantu essay pages and a Testbook "10 lines"
article. This is not a greetings SERP.

### Set C — `raksha bandhan 2027 quotes` (the already-drafted post)

| ~Pos | URL | Type |
|---|---|---|
| 1 | hindi.mpanchang.com/festivals/raksha-bandhan/?year=2027 | panchang |
| 2 | kundligpt.com/hi/festivals/raksha-bandhan-2027/ | panchang |
| 3–5 | youtube.com ×3 | video carousel |
| 6 | blog.bluestone.com/raksha-bandhan-quotes-in-english/ | **a "quotes in english" page** |
| 7 | samvat.in/festivals/raksha-bandhan-2027/ | panchang |
| 8 | rakhi.in/raksha-bandhan-quotes-messages-and-greetings.aspx | quotes list |
| 9 | mpanchang.com/festivals/raksha-bandhan/?year=2027 | panchang |
| 10 | muhuratam.in/hi/festivals/raksha-bandhan/strasbourg/2027 | panchang |
| 11 | panchang.astrosage.com/festival/raksha-bandhan?date=2027&language=hi | panchang |
| 12 | ishvaram.com/hi/raksha-bandhan-2027/ | panchang |
| 13 | calendardate.com/raksha_bandhan_2027.htm | calendar |
| 14 | drikpanchang.com/…?year=2027 | panchang |
| 15 | pinterest.com/ideas/raksha-bandhan-quotes/912050814472/ | Pinterest ideas board |

Tail (16–25): `fnp.com/quotes/raksha-bandhan`,
`adobe.com/in/express/discover/captions/raksha-bandhan`, `economictimes.indiatimes.com`,
`blog.yatradham.org`, `publicholidays.in`, `rakhibazaar.com`,
`pinterest.com/ideas/happy-rakshabandhan-quotes/895047362506/`, `calendarlabs.com`.

**C's top 10 is a date SERP, not a quotes SERP** — 8 of 10 content pages are panchang
or calendar lookups. The "2027" token dominates "quotes". The quotes-intent portion of
C only begins around ~15.

---

## 4. The 3×3 overlap matrix

Shared **exact URLs**, both windows. Diagonal = set size.

### Raw top-10 window (DOM href order)

|  | A `quotes in english` | B `lines in english` | C `2027 quotes` |
|---|---|---|---|
| **A** | 10 | **2** | **0** |
| **B** | **2** | 10 | **0** |
| **C** | **0** | **0** | 10 |

### Content-page top-10 window (YouTube / Reddit / Brainly excluded)

|  | A | B | C |
|---|---|---|---|
| **A** | 10 | **3** | **0** |
| **B** | **3** | 10 | **0** |
| **C** | **0** | **0** | 10 |

**A∩B = 3** (content-page window):

| Shared URL | in A | in B |
|---|---|---|
| pinterest.com/ideas/raksha-bandhan-quotes-in-english/929026978143/ | #1 | #2 |
| fnp.com/quotes/raksha-bandhan | #4 | #4 |
| adobe.com/in/express/discover/captions/raksha-bandhan | #6 | #5 |

Shared **domains** in the same window = 4 (add `igp.com`, holding a different URL in each).

**A∩B under the raw window = 2, which is BELOW the threshold.** Stated plainly rather
than buried: under the strict Gujarati-precedent method the two queued keywords do
**not** cluster with each other. The verdict below does not rest on this cell.

**A∩C = 0 and B∩C = 0 in both windows.** At a 25-result window A∩C rises to 3
(`fnp.com/quotes/raksha-bandhan`, `adobe.com/…/captions/raksha-bandhan`,
`rakhibazaar.com/rakhi-messages-wishes-quotes.aspx`) — recorded, not counted, because
the rule specifies the top 10.

---

## 5. The control that actually decided it — "in english" is a null modifier

The matrix above is not what kills this keyword. This is.

**Set D — `raksha bandhan quotes` (bare head term), Brave IN, same session.**
Content-page top 10:

| ~Pos | URL | Also in A? |
|---|---|---|
| 1 | caratlane.com/blog/happy-rakhi-wishes-quotes-messages/ | **A#3** |
| 2 | bigsmall.in/blogs/unique-gifts/rakhi-quotes-one-liners-rakhi-wishes-and-instagram-captions | — (A tail) |
| 3 | adobe.com/in/express/discover/captions/raksha-bandhan | **A#6** |
| 4 | rakhi.in/raksha-bandhan-quotes-messages-and-greetings.aspx | — |
| 5 | fnp.com/quotes/raksha-bandhan | **A#4** |
| 6 | adobe.com/in/express/discover/wishes/raksha-bandhan | **A#9** |
| 7 | nestasia.in/blogs/news/101-rakhi-captions-quotes-wishes-for-brothers-sisters | **A#2** |
| 8 | giftalove.com/articles/raksha-bandhan-quotes | — |
| 9 | rakhibazaar.com/rakhi-messages-wishes-quotes.aspx | A tail (#22) |
| 10 | igp.com/blog/happy-rakhi-wishes-for-brother/ | **A#8** |

**A∩D = 6 shared exact URLs in the content-page top 10** — double the threshold. Add
`rakhibazaar.com` and `photojaanic.com` at a wider window and it is 8.

The discussion block corroborates it and is harder to explain away: **all four Reddit
threads are identical between A and D** (`i24n40`, `165kj36`, `1mdvonp`, `1eummja`),
and `youtube.com/watch?v=tZyWidUV8eM` appears in both carousels.

And this is not modifier-stripping — the instrument control in §2 shows Brave *did*
react to "in english", by promoting four Pinterest boards that the bare query does not
return at all. It reacted, reordered the Pinterest layer, and left 6 of 10 organic
content pages in place.

**Conclusion: `raksha bandhan quotes in english` IS `raksha bandhan quotes`.** The
modifier is null because the SERP is already entirely in English — every page in set D
is an English-language page, so "in english" excludes nothing and adds no intent. This
is the opposite of the Gujarati/Kannada case, where the language token named a genuine
minority-script subset. Here it names the default.

That reclassifies the keyword. It is not a long-tail language variant; it is the
**head term `raksha bandhan quotes`** wearing a modifier. `BRIEF.md`'s head-term rule
applies: reachable only by a hub or a genuinely better dated guide, not by another
generic quotes post.

---

## 6. The angle was already published — three times over

STEP 0's grep found that every plausible distinct job for this page is taken. All four
are live or drafted:

| Candidate angle for "quotes in english" | Already owned by | Status |
|---|---|---|
| Quote vs. addressed wish; portability; original English lines | `raksha-bandhan-2027-quotes` (this batch) | drafted, 24 original English lines |
| What is sacrificed translating a rakhi couplet into English — radeef, qaafiya, translation scholarship | `raksha-bandhan-shayari-2026-hindi-english` (batch `2026-08-18-rakhi-2`) | **LIVE in Strapi** |
| "In English" as the real constraint — English collapses distinctions Hindi keeps | `raksha-bandhan-wishes-for-bhaiya-and-bhabhi-in-english` (this batch) | drafted |
| Brevity / the one-liner as a form, with measured effects | `rakhi-quotes-one-liners-for-instagram` | **LIVE in Strapi** |

The orchestrator's suggested angle — "which lines survive translation, which don't, and
why the English rakhi quote drifts toward the generic" — is the second row, and it
shipped in the 18 August batch. `grep -rl 'radeef' content/batches/*/blogs/*.json`
returns that file. Verified live: `GET /api/articles?filters[slug][$eq]=raksha-bandhan-shayari-2026-hindi-english`
→ 1 match.

SubhSandesh already has **five** pages aimed at the rakhi-quotes cluster
(`raksha-bandhan-2027-quotes`, `raksha-bandhan-shayari-2026-hindi-english`,
`rakhi-quotes-one-liners-for-instagram`, `raksha-bandhan-quotes-without-sister`,
`raksha-bandhan-quotes-in-marathi`). A sixth aimed at the head term is the
thirteen-posts-on-one-SERP pattern `BRIEF.md` records under the Gate 2 cuts.

---

## 7. VERDICT — do not write this post

Three independent grounds, any one sufficient:

1. **Null modifier.** A∩D = 6 shared URLs in the content-page top 10 (threshold 3),
   plus 4/4 identical Reddit results. The keyword is the head term
   `raksha bandhan quotes`, which the brief classes as unreachable without a hub.
2. **Every distinct angle is published**, including the exact one assigned (§6).
   What remains after subtracting the four owned angles is a generic English quote
   list — the sixth version of the page the skill's opening principle forbids.
3. **Cannibalisation.** It would compete with SubhSandesh's own
   `raksha-bandhan-2027-quotes`, whose 24 lines are already English, before either
   ranks for anything.

Note what did *not* kill it: **A∩C = 0.** By the stated rule this keyword does **not**
cluster with the already-written `raksha bandhan 2027 quotes`. Their SERPs are
genuinely different objects — C's is a panchang SERP, A's is a gifting-blog SERP. The
overlap is in *content*, not in *search results*, which is a cannibalisation argument
rather than a clustering one. Recorded because collapsing the two would misdescribe the
evidence.

The slug is free (`filters[slug][$eq]=raksha-bandhan-quotes-in-english` → 0 matches).
It is left free deliberately.

---

## 8. Recommendation — absorb into the drafted 2027 post

Do not create a URL. `blogs/raksha-bandhan-2027-quotes.json` is still a draft and can
take the residual demand at zero cost:

1. **Add "in english" to `article.keywords`.** It currently reads
   `raksha bandhan 2027 quotes, rakhi quotes 2027, short raksha bandhan quotes,
   raksha bandhan captions, rakhi quotes for brother, rakhi quotes for sister` — no
   English token, despite all 24 lines being English. Append
   `raksha bandhan quotes in english`.
2. **Add one FAQ in searcher phrasing:** *"Are these Raksha Bandhan quotes in
   English?"* — answered honestly: yes, all 24 are original English lines, and the
   page says which three count time and need re-dating. The post has 12 FAQs, at the
   8–12 ceiling, so this replaces the weakest rather than adding a thirteenth. The
   weakest is *"Do I need a page at all if I only want a caption?"*, which duplicates
   the "when this is the wrong thing to send" H2.
3. **Do not add a translation section.** That is
   `raksha-bandhan-shayari-2026-hindi-english`'s job and it is live. Link to it
   instead if an internal link is wanted — but note the skill's internal-link rule
   permits only `TEMPLATE_LINKS` URLs, so a blog-to-blog link needs the orchestrator's
   decision, not an agent's.
4. **`templateUrls`**: that post carries `/happy-rakshabandhan-to-brother` and
   `/templates`, and its `batchMeta.notes` still asserts the sister slug "does not
   exist" — superseded by `BRIEF.md` CORRECTION 2. Since its §3 is a sister section,
   `/happy-rakshabandhan-to-sister` should be added and the stale note corrected.

---

## 9. First-party data — recorded, unused

Assigned primary fact: **36,202 recorded views of shared pages, an average of 12.2
views per created page.** Never placed; nothing was drafted. It remains available.

Phase 0 note carried forward: there is **no rakhi-specific first-party data**
(`rakshabandhanpages` = 3 documents, n=3; 39 rakhi template views of 36,202). No
statistic may be computed from it, and none was. Any rakhi post's first-party
grounding is platform-wide rather than keyword-specific, which belongs in
`auditReport.failed`; the closing condition is rakhi template usage above ~500 pages.

## 10. Sources

**None.** Phase 3 was never reached — the point of running the stop-check first.
Lane F (media & data) and lane B (UK/EU theses) were not searched, so this
cancellation consumes no domain headroom from `SOURCES.md`.
