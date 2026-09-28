# Research brief — `ishtaqtu-ilayka-meaning-in-english`

**VERDICT: ABORT AS A TWIN. No blog JSON written.**

- Keyword: `ishtaqtu ilayka in english`
- Row tier: `A-explainer`, band 3, inventory `weak: 4`
- Region: `us-en` · bodyLanguage would have been English
- Date measured: 2026-09-28
- Files emitted: **this brief only.** `blogs/` untouched, `batch.json` untouched.
- Slug check: `strapi.subhsandesh.in` HTTP 200, `total=0`. The slug is free. It is not
  being surrendered because it was taken; it is being surrendered because the post
  behind it would duplicate two live posts.

**Aborted on two independent grounds, either of which is sufficient:**

1. **Twin test — four of the five assigned substance pillars are already SHIPPED AND
   LIVE** on `subhsandesh.in`, in the two siblings the prompt told me to read. The prompt
   conceded one of them (gender). It did not know about the other three.
2. **Cannibalisation gate — the SERP for this keyword IS the SERP for the sibling's
   keyword.** Five identical URLs out of nine, measured on two queries.

---

## 1. Headline finding — the prompt's twin-risk estimate was too low by three pillars

The prompt's instruction was: *"That second one already owns the gender-of-addressee
angle, so gender must be a supporting fact here, not your thesis — your thesis is the
transliteration/aspect problem."*

I fetched both live siblings from the production Strapi API and regex-counted their
bodies. **The transliteration/aspect problem is also already shipped.** Assigned pillar
by assigned pillar:

| Assigned substance | Status | Where it is already live |
|---|---|---|
| Perfective aspect, form VIII, "I have come to long for you" not present-tense "I miss you" | **SPENT** | `i-miss-you-in-arabic`, H2 "What the verb actually says, and why 'miss' is an approximation" — states verbatim that *"أشتاق إليك is the present, اشتقت إليك the perfect"*, files it as form-VIII on root ش و ق, glosses "to yearn for" ahead of "to miss" |
| Gender of addressee, `ilayka` / `ilayki` | **SPENT TWICE** | Both siblings. Sibling B is titled around it and attests it at 2 of 51 sentences |
| Transliteration variance + Arabizi numerals (2, 3, 7) | **SPENT** | `…-to-a-woman`, H2 "Arabizi is the only typed form that keeps her gender" — names the digit convention (7 for ح, 3 for ع), cites the ACL 2014 Arabizi corpus paper, and carries `ishta2t elayki` as a row in a five-form table |
| Register: MSA vs Levantine / Egyptian / Gulf | **SPENT TWICE** | Sibling A gives four dialect forms an H3 each (وحشتني, اشتقت لك, افتقدتك). Sibling B audits the register against the ISO 639-3 registry |
| A named romanisation standard (ALA-LC, DIN 31635, ISO 233) | **UNSPENT** | Zero regex hits for `ALA-LC`, `DIN 31635` or `ISO 233` across both sibling bodies |

Sibling A additionally ships the homography finding — اِشْتَقْتُ / اِشْتَقْتَ / اِشْتَقْتِ are
three different persons under one written form اشتقت — which is the strongest version of
"a reader holding a transliteration cannot map it back to script", and is the exact
territory this row was commissioned to open.

**So the residual, genuinely unclaimed contribution is one section: which romanisation
standard, if any, produces the string `ishtaqtu ilayka`.** That is roughly 300 words.
The other 1,200–1,500 words needed to hit the band would have to come from aspect,
gender, Arabizi and dialect — i.e. from restating two live posts, with weaker instruments
than they already use (they carry Tatoeba attestation counts, a Glosbe headword audit and
an ISO 639-3 check).

---

## 2. SERP measurement and route

**Route: WebSearch, us-en. Two scripted routes failed first and both failures are
reported below rather than silently retried.**

| Route | Result |
|---|---|
| `scripts/serp-ddg.mjs "<q>" --region us-en` | `(no results parsed — DDG markup may have changed)` for the target query **and for the control query `i miss you in arabic`**, which certainly has results. This is a DDG bot challenge (202), matching the engine table in `scripts/serp.mjs`'s own header comment. Dead. |
| `scripts/serp.mjs "<q>" --region us-en` | `Error: brave rate-limited (429) after 4 attempts`. Dead. |
| Mojeek, hand-rolled in sandbox | 200 but a 5.5 KB stub returning a single `buttondown.email` link; 403 on the third query. Dead — also matches `serp.mjs`'s own note that Mojeek is "a stub". |
| **WebSearch tool** | **Worked. All three SERPs below.** |

### SERP A — `ishtaqtu ilayka in english` (the target keyword)

1. instagram.com/popular/ishtaqtu-ilayk-translate-to-english/
2. instagram.com/popular/ishtaqtu-ilayk-jiddan-meaning/
3. instagram.com/p/DWXp4VPEc8S/
4. hinative.com/questions/1821921
5. khatarabic.com/Blog-Articles/arabic-words-for-love.html
6. quora.com/How-do-I-say-I-miss-you-in-Arabic-1
7. mishkahacademy.com/miss-you-in-arabic/
8. earabic.io/blog/how-to-say-i-miss-you-in-arabic
9. talkpal.ai/culture/how-do-i-say-i-missed-you-in-arabic/
10. en.wikipedia.org/wiki/Inna_Lillahi_wa_inna_ilayhi_raji'un

**Not one result is a page about the transliteration string.** Results 1–2 are Instagram
tag-scrape shells, not documents. Result 10 is a false match on the token `ilayhi` and is
a different phrase entirely (the Islamic condolence formula). Results 7–9 are generic
"I miss you in Arabic" language-school pages — i.e. sibling A's keyword, not mine.

### SERP B — `i miss you in arabic ishtaqtu ilayka meaning` (sibling A's territory)

**Five URLs are identical to SERP A**, marked ←:

1. instagram.com/p/DWXp4VPEc8S/ ←
2. quora.com/What-is-I-miss-you-in-Arabic
3. hinative.com/questions/827669
4. mishkahacademy.com/miss-you-in-arabic/ ←
5. italki.com/en/post/question-149228
6. hinative.com/questions/1821921 ←
7. earabic.io/blog/how-to-say-i-miss-you-in-arabic ←
8. talkpal.ai/culture/how-do-i-say-i-missed-you-in-arabic/ ←
9. equranzone.com/i-miss-you-in-arabic-meaning-pronunciation-and-romantic-usage/

**5 of 9 identical URLs; 6 of 9 shared hosts.** By BRIEF §3's cannibalisation gate this is
one SERP, not two. The engine has already decided that `ishtaqtu ilayka in english` is a
synonym of `i miss you in arabic` — the keyword sibling A is live on.

### SERP C — `"eshta2to" OR "ishtaqto" arabizi transliteration miss you arabic`

Run to test whether the transliteration-variance intent has its own result set. It does
not: hinative, quora and mishkahacademy recur again, and the only on-topic documents are
the two Wikipedia articles (`Arabizi`, `Arabic chat alphabet`) that sibling B already
cites.

### The answer-engine summary is the decisive piece

The generative answer returned **on my own keyword** in SERP B was:

> "Arabic is a gendered language… To a male: اشتقت إليك (Ishtaqtu ilayka) To a female:
> اشتقت إليكِ (Ishtaqtu ilayki)"

The answer engine already treats the gender split as *the* answer to this query. That
answer is sibling B's entire thesis, and sibling B is live. Publishing a third
subhsandesh page into this result set competes with our own two.

---

## 3. What would have to be true for this row to be revived

A future row is viable **only** if it is scoped to the one unspent pillar and is not
required to hit 1,500 words on this keyword:

- **Angle:** which romanisation standard actually emits `ishtaqtu ilayka` — ALA-LC vs
  DIN 31635 vs ISO 233 — and the finding that the string people type matches none of
  them cleanly.
- **Caveat, stated plainly:** I did **not** go on to verify what those three standards
  emit for اشتقت إليك. This row aborted at the twin gate, before Phase 3, so no source
  was consumed and no standard was fetched. The gap is established as *absent from the
  siblings* (measured), not as *substantiated* (not attempted).
- **Better home for it:** as a new H2 inside the live `i-miss-you-in-arabic`, which
  already owns this SERP, rather than as a competing post. That is an edit to a published
  post and needs the user's decision, per BRIEF §11.

## 4. Sources consumed

**None.** No journal, dictionary or corpus citation was spent on this row. The per-journal
one-slot-left list (Frontiers in AI, PNAS, Cognitive Linguistics, EJPT, Memory &
Cognition, Frontiers in Psychology) is untouched by this row, and so is the
`bop.unibe.ch` / `euroslajournal.org` JESLA cap.

## 5. Instruments used, and how each was authenticated

| Instrument | Authentication |
|---|---|
| `capcheck.mjs` | Run; output read in full |
| `journalcheck.mjs` | Run; output read in full |
| Strapi production API | HTTP 200 on three slug queries and on the category list. Authenticated by content: the two sibling queries returned `total=1` **with their exact expected titles**, and my own slug returned `total=0`. `miss-you-across-miles` confirmed present in the 10-category list |
| Sibling bodies | Fetched from the Strapi API (`populate=*`), **not from the public HTML and not via a browser**, which sidesteps the PolterTab contention hazard entirely. Authenticated by content: each body was checked for markers that must be present (its own title as H1, `ilayka`/`ilayki`) before any claim was drawn from it |
| WebSearch | Three queries; result sets differ from each other in the expected direction, so no cache/contention artefact |

No browser tool was used at any point in this row.
