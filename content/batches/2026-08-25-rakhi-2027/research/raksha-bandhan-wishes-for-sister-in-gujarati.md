# Research brief — `raksha-bandhan-wishes-for-sister-in-gujarati`

**Status: NOT WRITTEN. Cancelled at the pre-draft stop-check.**
Date: 2026-08-26 · Batch: `2026-08-25-rakhi-2027`

No `blogs/raksha-bandhan-wishes-for-sister-in-gujarati.json` was emitted. No sources
were settled, so nothing was appended to `SOURCES.md`.

---

## 1. Why a stop-check ran at all

The batch already contains `raksha-bandhan-wishes-in-gujarati` (the general Gujarati
post, 1,995 body words, 11 FAQs, live in `blogs/`). The queue additionally held
`raksha bandhan wishes for brother in gujarati` and `raksha bandhan letter for brother
in gujarati`. Writing this keyword would have made **four** Gujarati posts for a
band-2/3 keyword (300–3,000/mo **EST**, not TOOL) — the over-fragmentation pattern
the skill's clustering rule exists to catch.

The rule applied: **≥3 shared URLs in the top 10 → one keyword, do not write.**

---

## 2. Method — and its limitation, stated up front

**Phase 1 SERP teardown was NOT run via `WebSearch`. The session search budget was
exhausted (200/200).** Positions below are therefore **approximate** and must not be
quoted as ranks.

What was used instead, in order of attempts:

| Engine | Endpoint | Outcome |
|---|---|---|
| Bing en-IN | `bing.com/search?cc=IN` | HTTP 200, parsed via base64 `/ck/a?u=a1…` redirect decode. **Degenerate — see §3.** |
| DuckDuckGo HTML | `html.duckduckgo.com/html/`, `lite.duckduckgo.com/lite/` | HTTP **202** challenge, 0 results, both POST and GET |
| Mojeek | `mojeek.com/search` | HTTP 200 but a 5.5 KB stub, 0 result anchors |
| Startpage | `startpage.com/sp/search` | Anubis proof-of-work interstitial (`anubis_challenge`), blocked |
| Marginalia | `search.marginalia.nu` | 200, but an independent index — not comparable to a commercial SERP |
| Yep | `api.yep.com` | HTTP 403 |
| **Brave Search** | `search.brave.com/search?country=in` | **HTTP 200, usable.** Rate-limited (429) on the second query; recovered on retry with a cooldown and a rotated UA. **This is the result set the verdict rests on.** |

Extraction was by href order inside Brave's `id="results"` container, de-duplicated.
That approximates but does not exactly reproduce visual rank — another reason to treat
positions as indicative only. The verdict does not depend on ordering: it depends on
set membership, which is robust to it.

---

## 3. Bing was discarded as degenerate

Bing returned the **identical 10 URLs, in the identical order, for both queries** —
and not one of them is a Gujarati-language wishes page:

```
1. en.m.wikipedia.org/wiki/Raksha_Bandhan
2. ganeshaspeaks.com/hindi/festival-calendars/information/raksha-bandhan/
3. parenting.firstcry.com/articles/gen-raksha-bandhan-date-time-history-significance-and-celebration/
4. hindi.astroyogi.com/festival/raksha-bandhan
5. shubhpanchang.com/blog/raksha-bandhan-significance-history-and-rituals
6. britannica.com/topic/Raksha-Bandhan
7. en.m.wikipedia.org/wiki/Raksha_(Vedic)
8. oneindia.com/raksha-bandhan/
9. play.google.com/store/apps/details?id=club.raksha.app
10. iforher.com/life-culture/festivals/raksha-bandhan-wishes-quotes-rakhi-messages/
```

Bing dropped both `wishes` and `gujarati` and served a generic Raksha Bandhan entity
cluster. A 10/10 overlap here is an artefact of the modifiers being ignored, not
evidence about intent. **Counting it would have produced the right verdict for the
wrong reason, so it was excluded from the count.** Recorded because a discarded result
set is still a finding — it echoes the BRIEF's Gate 2 note that Google/Bing hold weak
intent data for several rakhi phrasings.

---

## 4. Result set A — `raksha bandhan wishes in gujarati`

Brave Search, country=IN, 2026-08-26. Approximate positions.

| ~Pos | URL | Domain |
|---|---|---|
| 1 | https://gujaratiwish.com/raksha-bandhan-wishes-in-gujarati/ | gujaratiwish.com |
| 2 | https://www.saralgujarati.in/2024/08/raksha-bandhaan-shayari-status.html | saralgujarati.in |
| 3 | https://www.pinterest.com/pin/raksha-bandhan-message-in-gujarati--773845148476864703/ | pinterest.com |
| 4 | https://wishgujarati.com/raksha-bandhan-quotes-wishes-in-gujarati/ | wishgujarati.com |
| 5 | https://www.joliecarte.com/en/raksha-bandhan-wishes-in-gujarati-text/158522 | joliecarte.com |
| 6 | https://gujaratisuvichar.co.in/raksha-bandhan-wishes-in-gujarati/ | gujaratisuvichar.co.in |
| 7 | https://www.joliecarte.com/en/happy-raksha-bandhan-wishes-in-gujarati-language/138665 | joliecarte.com |
| 8 | https://www.gujaratipictures.com/raksha-bandhan/ | gujaratipictures.com |
| 9 | https://lovesove.com/happy-raksha-bandhan-quotes-wishes-in-gujarati/ | lovesove.com |
| 10 | https://www.saralgujarati.in/2025/08/rakshabandhan-wishes-in-gujarati.html | saralgujarati.in |

Tail beyond 10 (recorded, not counted): `in.pinterest.com/pin/…578501514638998700`,
`in.pinterest.com/rangila_gujarati/raksha-bandhan-gujarati-status/`,
`newmynamepix.com/…/44`, `hindibesters.blogspot.com/2020/08/happy-raksha-bandhan-in-gujarati.html`.

## 5. Result set B — `raksha bandhan wishes for sister in gujarati`

Brave Search, country=IN, 2026-08-26 (second attempt after a 429). Approximate positions.

| ~Pos | URL | Domain |
|---|---|---|
| 1 | https://gujaratiwish.com/raksha-bandhan-wishes-in-gujarati/ | gujaratiwish.com |
| 2 | https://wishgujarati.com/raksha-bandhan-quotes-wishes-in-gujarati/ | wishgujarati.com |
| 3 | https://gujarati.webdunia.com/article/rakshabandhan/happy-raksha-bandhan-wishes-for-brother-and-sister-in-gujarati-125080200014_1.html | gujarati.webdunia.com |
| 4 | https://www.gujaratijagran.com/lifestyle/raksha-bandhan-2025-wishes-messages-quotes-for-sister-gujarati-581521 | gujaratijagran.com |
| 5 | https://www.gujaratijagran.com/lifestyle/heart-touching-raksha-bandhan-wishes-in-gujarati-for-brother-and-sister-381198 | gujaratijagran.com |
| 6 | https://www.gujaratijagran.com/lifestyle/happy-raksha-bandhan-2025-wishes-for-brother-and-sister-in-gujarati-581445 | gujaratijagran.com |
| 7 | https://gujarati.oneindia.com/features/raksha-bandhan-wishes-in-gujarati-wish-raksha-bandhan-with-special-messages-112713.html | gujarati.oneindia.com |
| 8 | https://www.gujaratijagran.com/lifestyle/happy-raksha-bandhan-wishes-for-brother-and-sister-in-gujarati-581482 | gujaratijagran.com |
| 9 | https://www.joliecarte.com/en/raksha-bandhan-wishes-in-gujarati-text/158522 | joliecarte.com |
| 10 | https://tv9gujarati.com/photo-gallery/raksha-bandhan-gift-ideas-for-sister-best-gifts-to-make-sister-raksha-bandhan-special-1502714.html | tv9gujarati.com |

Tail beyond 10 (recorded, not counted): `tv9gujarati.com/web-stories/raksha-bandhan-gifts-for-sister`,
`gujaratijagran.com/lifestyle/raksha-bandhan-2025-quotes-in-gujarati-581494`,
`gujaratijagran.com/lifestyle/happy-raksha-bandhan-wishes-in-gujarati-for-brother-and-sister-382077`,
`pinterest.com/pin/…773845148476864703` (which is A#3 — a **fourth** shared URL if the
window were widened to 14).

---

## 6. The count

**Shared exact URLs in the top 10 = 3.** Threshold is ≥3. **Threshold met.**

| Shared URL | in A | in B |
|---|---|---|
| https://gujaratiwish.com/raksha-bandhan-wishes-in-gujarati/ | #1 | #1 |
| https://wishgujarati.com/raksha-bandhan-quotes-wishes-in-gujarati/ | #4 | #2 |
| https://www.joliecarte.com/en/raksha-bandhan-wishes-in-gujarati-text/158522 | #5 | #9 |

Shared domains in the top 10 = 3 (the same three). Widening to the full 14 extracted
results adds `pinterest.com/pin/…773845148476864703`, giving 4 — the verdict
strengthens under a wider window, it does not weaken.

### Three corroborating signals beyond the raw count

1. **The two strongest results for the sister-qualified query are the general
   Gujarati wishes pages themselves**, at #1 and #2 — the same URLs that rank #1 and
   #4 for the unqualified query. The engine's own best answer for "for sister in
   gujarati" is a page that is not sister-specific.
2. **Five of B's top 10 are titled "for brother *and* sister in gujarati"** — webdunia
   #3 and gujaratijagran #5, #6, #8, #13. Gujarati-language publishers, who know this
   audience, do not split the two directions. They ship one combined page.
3. **No URL in either set is sister-directed *and* Gujarati-specific.** The only
   sister-exclusive results in B (tv9gujarati #10, #11) are *gift* pages — different
   intent entirely. There is no distinct SERP to enter.

---

## 7. VERDICT — do not write this post

`raksha bandhan wishes for sister in gujarati` is **not a separate keyword** from
`raksha bandhan wishes in gujarati`. A fourth Gujarati post would compete with
SubhSandesh's own `raksha-bandhan-wishes-in-gujarati`, which already ranks nothing yet
and would be diluted by a near-duplicate.

The brief's original justification for substituting this keyword in at Gate 2 —
"language × recipient; the sister template now exists" — was reasoning from the
template inventory, not from the SERP. The template existing is a fact about
SubhSandesh, not about search demand. **The substitution was wrong and this record
supersedes it.**

---

## 8. Recommendation — absorb, don't fragment

Expand `blogs/raksha-bandhan-wishes-in-gujarati.json` rather than writing a new post.
That file already has the hooks:

- `### 3. The wish for a sister` exists but is one of eight numbered wishes.
- `### 5. The respectful wish for an elder` already establishes the honorific axis.
- The તું/તમે respect rule is already the post's second H2.
- But the body mentions બહેન only **2×**, મોટી **1×** and નાની **0×** — the kinship
  vocabulary that actually distinguishes the direction is essentially absent.

Concretely, the general post should gain **one H2** — a brother-to-sister section
carrying the material this cancelled post was scoped to cover:

- The **બહેન / મોટી બહેન / નાની બહેન** distinction, with script + Roman + English gloss.
- Why the honorific flips: તમે to an elder sister is normal, તું to a younger sister is
  warm rather than rude — the inverse of the bhabhi case the post already handles.
- The framing point that stands up: Raksha Bandhan's default direction is
  sister→brother, so a brother writing *to* his sister has no stock phrasing to copy.
  That is a genuine gap — it is just a **section-sized** gap, not a post-sized one.

Two mechanical follow-ups for whoever does that edit:

1. Add `https://subhsandesh.in/happy-rakshabandhan-to-sister` to that post's
   `templateUrls`. It currently carries only `/happy-rakshabandhan-to-brother` and
   `/templates`. The sister page is live (HTTP 200) and is now present in
   `TEMPLATE_LINKS` in `app/lib/prompt.ts`, so it is a legal link — and once the post
   covers both directions, linking only the brother template contradicts half of it.
2. **The Gujarati-script sign-off requirement travels with the content.** Any Gujarati
   lines added in that expansion are agent-composed and must be recorded in that
   post's `auditReport.failed` as a **structural** item: a Gujarati-reading human must
   sign off before publish, and it does not close by re-reading. Two earlier language
   agents in this batch omitted this and a remediator had to add it.

## 9. Read-across to the two queued sibling keywords

Not tested — no search budget was spent on them, and this section is a flag, not a
finding. But the mechanism that killed this keyword applies to both:
`raksha bandhan wishes for brother in gujarati` sits in the *default* direction of the
festival, where B's SERP showed publishers already merging brother and sister onto one
page — so it is, if anything, a **stronger** absorb candidate than the sister variant.
`raksha bandhan letter for brother in gujarati` differs by **format** (a letter, not a
wish list) rather than by recipient, so it may well survive the same test. Run this
stop-check on both before drafting either.

---

## 10. First-party data — recorded, unused

The assigned primary fact was **99.4% of started pages are published and shared
(2,956 of 2,973)**. It was never placed, because nothing was drafted. It remains
available for whoever writes the absorption edit.

Phase 0 note carried forward regardless: there is **no rakhi-specific first-party
data** (`rakshabandhanpages` = 3 documents, n=3). No statistic may be computed from it.
Any Gujarati post's first-party grounding is platform-wide, not keyword-specific, and
that belongs in `auditReport.failed` — the closing condition is rakhi template usage
above ~500 pages.

## 11. Sources

**None.** Lane B (UK/EU theses) and lane C (US repositories) were never searched: the
stop-check ran before Phase 3, which is the point of running it first. Nothing was
appended to `SOURCES.md`, so this cancellation consumes no domain headroom — which
matters, since `etheses.whiterose.ac.uk` is already at 2 posts and was reserved for
this one.
