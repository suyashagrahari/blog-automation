# Research brief — thank you for birthday wishes

- **Batch:** `2026-08-27-birthday-30` · **Rank in batch:** 5 · **Lane:** D (gratitude, reciprocity,
  acknowledgement norms)
- **Market:** India (evergreen, no event date) · **Band:** 3,000–10,000/mo ·
  **Expected clicks:** 429 · **Weak results:** 5+
- **Slug:** `thank-you-for-birthday-wishes` · **Category:** `milestone-birthdays`

> **Provenance, stated up front.** This brief was **reconstructed on 2026-08-27, after the draft
> was written** — the original agent was killed by an API error between emitting the JSON and
> writing the brief. It is assembled from three things that do exist: the live India-localised
> SERP block in `ASSIGNMENTS.json` (harvested with a real browser at `gl=in` on 2026-08-26), the
> draft's own structure and claims, and the sources in `batchMeta.sources`, every one of which was
> re-fetched and read in full on 2026-08-27. WebSearch was exhausted at 200/200, so **no live
> fan-out or People-Also-Ask harvest was possible** — the sub-queries in §3 are inferred from the
> SERP titles and the keyword, not measured. Read them as a hypothesis. Two source claims were
> found wrong during verification and were corrected in the body; a third source was removed at
> batch level and replaced. All of it is recorded in §6 and §8.

---

## 1. Phase 1 — who ranks (live, `gl=in`, 2026-08-26)

| # | Domain | Page | Type | What it optimises for | Weak? |
|---|---|---|---|---|---|
| 1 | instagram.com | "My heart is full! Thank you for all the sweet birthday wishes!" | Single social post, UGC | Nothing — it is one person's caption that happens to match the query | **Yes** — not a page at all |
| 2 | shutterfly.com | 75 Ways to Say "Thank You" for the Birthday Wishes | US photo-gift retailer listicle | Volume of copy-paste lines, funnelling to card products | Partly — 2,105 words, 14 headings, no table, no FAQ, no JSON-LD, no data |
| 3 | facebook.com | "Thank you for all the birthday wishes…" | Single social post, UGC | Nothing | **Yes** — not a page at all |
| 4 | my-picture.co.uk | 200+ Ways to Say Thank You for Birthday Wishes in 2026 | UK photo-gift retailer listicle | Line count (200+) plus a year-stamp for freshness | **Yes** — UK pricing/idiom, returned an empty body to a non-JS fetch |
| 5 | ca.pinterest.com | Thank you quotes for birthday | Image board (Canadian locale) | Pin saves | **Yes** — a board, not an answer |
| 6 | confettigifts.in | 111+ Best Birthday Thank You Messages & Wishes | Indian gifting retailer listicle | Line count, product cross-sell | **Yes** — thin, no structure beyond the list |
| 7 | adobe.com | Thank You Birthday Wishes (with Templates) | Brand content funnelling to Adobe Express | Template downloads, not the reply itself | No — huge domain, but answers a *design* query |
| 8 | picsy.in | 60 Heartfelt Messages of Thank you for Birthday Wishes | Indian photobook retailer listicle | Line count, product cross-sell | **Yes** — thin |
| 9 | bloomandwild.com | 100 Best Thank You Messages to Write on a Card | UK florist listicle | Card-message volume, flower sales | **Yes** — off-intent (cards), empty body to a non-JS fetch |

**Why it is winnable (from `ASSIGNMENTS.json`):** Instagram is #1 and Facebook is #3 — raw social
posts rather than pages, which is Google admitting it has nothing better to hand this query. Four
of the remaining seven are US/UK retailers (shutterfly, adobe, bloomandwild, my-picture). Only
confettigifts.in and picsy.in are Indian, and both are thin listicles attached to a gifting shop.

**Every one of these nine is a competitor** under `references/competitors.md`. None may be cited or
linked; the draft links none of them. Phase 1 was **partial**: two results are social posts, and
my-picture.co.uk and bloomandwild.com returned empty bodies to a non-JS fetch, so only Shutterfly
and Picsy were read as text. That limit is carried into `honestAssessment`.

---

## 2. Phase 2 — gap analysis

**Table stakes** (what the post must have or it is not competitive):

1. A block of copy-ready thank-you lines, spread across relationship types — friend, colleague,
   manager, older relative, group chat, gift-giver.
2. Something for the person replying late, because "belated thank you for birthday wishes" is the
   loudest sub-intent on the SERP.
3. Short lines that work as a caption or status, since #1 and #3 on the SERP are exactly that.
4. Enough of them to not look thinner than a 75-item page.

**The gap.** All nine pages answer one question — *give me lines to copy* — and answer it by
volume. Not one of them answers the question the reader actually arrives with once thirty people
have posted on their wall:

> **Do I reply to each person individually, or post one thank-you to everybody — and at what group
> size does replying individually stop being possible?**

No page on the SERP states a threshold, a group size, a time cost, or any measured behaviour about
how people actually answer birthday wishes. Nobody says how long a reply should be, either: the
listicles hand over lines of wildly different lengths with no guidance on which length is normal.

**Stale / absent data.** Not one of the nine cites a study, a dataset, or a date. The only temporal
signal anywhere on the SERP is my-picture.co.uk's decorative "in 2026" in the title. Shutterfly,
Adobe and Bloom & Wild encode *Western card culture* — write it on a card, post it, mail it — which
is the wrong physical channel for an Indian reader answering WhatsApp and Instagram replies.

**Unanswered questions** (each becomes an H2 or an FAQ):

1. Individual replies vs one public post — which, and when?
2. Is there a group size where individual replying breaks down?
3. How long should the reply actually be?
4. How late is too late, and does a late reply need an apology?
5. Do you have to reciprocate the wish, or is thanking enough?
6. Is a built page or a card a better answer than a message? (The one the competitors would
   answer "yes" to, because they sell cards.)

**Fan-out sub-queries → H2s** (inferred, not harvested):

| Sub-query | Covered by |
|---|---|
| what to say thank you for birthday wishes / what a reply should do | H2 "What a thank-you for birthday wishes actually has to do" |
| reply individually or post one thank you to all | H2 "When to reply individually, and when one post is enough" |
| short thank you messages for birthday wishes (copy) | H2 "Eight thank-you messages, with the character count next to each" |
| thank you status vs individual message vs page | H2 "The three ways to say thank you, compared" |
| belated / late thank you for birthday wishes | H2 "What to write when you are already days late" |
| when not to send a thank-you message | H2 "When a thank-you message is the wrong choice" |

**Cannibalisation check (BRIEF §6).** The live `birthday-thank-you-card-template` post owns the
card-and-template angle. **This draft stays on reply etiquette throughout** — verified line by line
on 2026-08-27. The word *card* does not appear in the body at all, and *template* appears exactly
once — as `https://subhsandesh.in/templates` in the closing line of the "when a thank-you message is
the wrong choice" section, which argues *against* building anything for most wishers. There is no
printable, no design, no layout and no card copy. No drift.

---

## 3. The angle

> **Wins by being the only post that answers whether to reply individually or post one thank-you to
> everyone, with a stated group-size threshold of about 70 wishes, cross-checked against the only
> published dataset on how people actually answer birthday wishes.**

The arithmetic behind the threshold: a personal reply runs **96 characters** (measured median
across 197 SubhSandesh birthday messages) ≈ 19 words ≈ **45 seconds** once you have read theirs and
picked the detail worth answering. Seventy replies is 53 minutes, which is longer than the
**0.9-hour** median it takes one person to build an entire birthday page on SubhSandesh. Under 70
you are spending less time thanking than the celebration itself took; over it you are doing admin
on your own birthday.

**The 45 seconds is an editorial estimate, not a measurement, and the body says so.** It was
originally derived from a mobile-typing dataset (36.2 wpm across 37,370 volunteers); that source
was dropped at batch level as generic filler — see §6 — so the estimate now stands on its own,
labelled. It is the load-bearing input to the whole threshold and that is recorded in
`honestAssessment`.

---

## 4. First-party data used (`birthdaygfpages` probe, 2026-08-26, n = 198 pages)

| Figure | Value | Where it lands |
|---|---|---|
| Median personal message | **96 characters** (n=197); longest 1,437 | Opening answer, threshold maths, comparison table, keyTakeaways |
| Under 100 characters | 106 of 197 | H2 #1 |
| First-save → last-edit gap | **0.9 h** median; 100 of 198 finished inside the hour | Opening answer, comparison table |
| Views per page | **11.2** vs 12.2 site-wide; 2,224 views total | Comparison table, "wrong choice" section |
| Ceiling | only 2 of 198 passed 50 views (max 67); 4 never opened | "Wrong choice" section |
| Mobile split | 48.6% mobile (1,081 / 1,121 / 22) vs 51.0% site-wide | "Wrong choice" section |

**Stated limits (BRIEF §1):** n=198, data starts 2026-04, and the August clustering of birthdates is
a launch artefact. **There is no per-relationship birthday data**, so the eight recipient-type
recommendations are editorial judgement, not measurement — said out loud in `honestAssessment`.

---

## 5. Internal links

Three, all real `TEMPLATE_LINKS` entries, none of them a card or a printable:

- `https://subhsandesh.in/birthday-bestfriend` and `https://subhsandesh.in/birthday-friend` — in the
  "wrong choice" section, framed as the *one* case (a single close person) where a built page beats
  a message
- `https://subhsandesh.in/templates` — closing line

No `/birthday-gf` and no `/birthday-parents`: the keyword is not relationship-specific.

---

## 6. Phase 3 — sources (lane D), all re-fetched and read in full on 2026-08-27

| Source | Claim it carries | Verified |
|---|---|---|
| Theodoropoulou, *Politeness on Facebook: The Case of Greek Birthday Wishes*, **Pragmatics 25:1, 23–45 (2015)** — `jbe-platform.com` | 400 native Greek Facebook users aged 25–35, walls observed July 2007–Dec 2010; **10,746** wishes; **65%** answered; **317 (79%)** replied to each well-wisher individually, **53 (13%)** posted one thank-you status, **16 (4%)** posted one thank-you plus a reciprocated wish, **14 (3%)** never responded | ✅ **every figure matches Table 1 verbatim.** This is the spine of the post — the only published dataset on how people actually answer birthday wishes, and a source none of the nine competitors use |
| Barron, *Responses to Thanks in Ireland, England and Canada*, **Corpus Pragmatics 6, 127–153 (published online 9 June 2022)** — `link.springer.com` | "Minimising the favour" ("no bother", "no problem", "that's alright") is the dominant response-to-thanks strategy — the justification for keeping the reply short enough to close the exchange | ✅ Table 7: IrE 81.8%, EngE 66.7% (74.1% alt coding), CanE 39.2%. Top strategy in all three, **but only narrowly in Canadian English**, where "expressing appreciation of the addressee" runs 36.8%. `batchMeta` stat was rewritten on 2026-08-27 to carry those percentages rather than the flat word "dominates" |
| Karamalak, *Facebook Birthday Postings from a Language Ecology Perspective*, **Journal of Language and Education 2(3), 71–81 (2016)** — `jle.hse.ru` | 680 birthday postings in Russian, American English, German and French; the platform pushes greetings toward short standard phrases because most "friends" are acquaintances | ✅ full PDF read. The abstract carries the 680 and the "reduced characters… simple structures"; the discussion carries the causal claim verbatim — *"a lot of 'friends', 'friends of friends'… most of which are just acquaintances who rarely meet"*, with creativity reserved for people who genuinely matter |
| Naito & Sakata, *Gratitude, Indebtedness, and Regret on Receiving a Friend's Favor in Japan*, **Psychologia 53, 179–194 (2010)** — `jstage.jst.go.jp` | Positive feelings on receiving a favour correlate with prosocial motivation (*wish* to help); indebtedness correlates with obligation (*should* help) — why over-apologising hands the reader a debt instead of warmth | ⚠️ finding ✅ verbatim in the abstract, **but the sample was misstated and has been fixed.** Study 1 n=135, **Study 2 n=164** — the "196" in the original draft is a *preliminary item-development sample*, not one of the two studies. Both samples were **female** university students, which the authors flag as a limitation. Body, sources list and `batchMeta` all corrected |
| Funke, *Pragmatic nativisation of thanking in South Asian Englishes*, **World Englishes (published 27 May 2020)** — `onlinelibrary.wiley.com` | 640 acts of thanking from the spoken British, Indian and Sri Lankan components of the International Corpus of English (547 *thank*, 93 *thanks*); the *thank* variant is **94.1%** of Indian English instances against **80.5%** in British English — so the full "thank you" is the neutral form for an Indian reader and a bare "thanks" is the marked, clipped one | ✅ open access, full text read; both percentages verbatim in §3 of the paper. **Added 2026-08-27** as the lane-D replacement for the removed typing dataset |

**Removed 2026-08-27:** Palin et al., *How Do People Type on Mobile Devices?* (MobileHCI 2019,
`userinterfaces.aalto.fi/typing37k/`). The stat itself checks out verbatim (37,370 volunteers,
36.2 wpm, 2.3% uncorrected errors), but it is a generic figure about no occasion and no
relationship, and the same URL was cited by `birthday-status-for-whatsapp.json` in this same batch.
Batch-level resolution: the status post keeps it (lane B, message brevity on a phone), this post
drops it. The two body sentences that leaned on it were rewritten, not deleted — see §8.

**Subject test:** all five are about thanking, gratitude, or how birthday wishes are answered.
Passes.

**Swap test — still fails on one source, and remains the single recorded audit failure.** Karamalak
is about *greeting brevity*, so it would drop unedited into `2-line-birthday-wishes`, the other
brevity keyword in this batch. It was kept because it is what justifies replying short rather than
long. Closing it needs a gratitude-specific corpus carrying its own message-length or reply-latency
measure; none is in hand and WebSearch is exhausted, so re-check when the search budget resets.

**Caps (re-checked across every `content/batches/*/blogs/*.json` on 2026-08-27, after the swap):**

| URL / domain | Posts | Cap | Status |
|---|---|---|---|
| `jbe-platform.com` (URL and domain) | 1 | 2 / 3 | Clear |
| `link.springer.com` | **1 of the 10 posts in this batch**; 8 corpus-wide (7 in `2026-08-25-rakhi-2027`) | 3 per batch | **Clear on the checklist item, which scopes the cap to the batch.** Re-counted 2026-08-27: the Barron URL itself is used by no other post in the corpus. The corpus-wide concentration is recorded in `honestAssessment` as a thing to watch, not as a failure |
| `jle.hse.ru` | 1 | 3 | Clear |
| `jstage.jst.go.jp` | 1 | 3 | Clear |
| `onlinelibrary.wiley.com` | 2 (this one + `what-to-write-in-raksha-bandhan-card.json`, which uses three Wiley URLs in one post) | 3 | Clear. The new URL itself is used once |

**No banned source used. Zero generic context statistics** — no PIB, TRAI, Census, India Post or
drikpanchang anywhere in the post.

---

## 7. Cannibalisation and duplication

- vs live **`birthday-thank-you-card-template`** — clear (see §2). Messages only, no card, no
  printable, no design.
- vs the 45 live `birthday-wishes-for-<relation>` posts — clear. This post is organised by
  *reply mode and group size*, not by relationship; the eight sample replies are deliberately
  spread (close friend, "HBD" wisher, colleague, manager, older relative, group chat, gift-giver,
  late reply) so that none becomes a de-facto relation post.
- vs sibling **`birthday-status-for-whatsapp`** — clear after the source swap; no shared source
  remains.

---

## 8. What changed on 2026-08-27, and open items

**Edits made to `blogs/thank-you-for-birthday-wishes.json` (body otherwise untouched):**

1. Aalto typing source removed from `batchMeta.sources`, from the `## Sources` list, and from the
   `structuredData` citation array; Funke added in all three places.
2. Opening threshold sentence re-grounded: *"…96 characters is about 19 words, or roughly 45 seconds
   a reply, an estimate rather than a measurement."* The 53-minute figure for 70 replies is
   unchanged, because 70 × 45 s = 52.5 min.
3. `excerpt` no longer advertises a "36.2 WPM mobile typing average"; it now says
   "45-second-per-reply estimate".
4. The typing-speed sentence in H2 #1 replaced with the Funke finding (94.1% vs 80.5%).
5. Naito & Sakata sample corrected in the body, the sources list and `batchMeta`: **164, not 196**,
   and **female** students.
6. Barron's `batchMeta` stat rewritten to carry the per-variety percentages, including the narrow
   Canadian English margin.
7. `auditReport.failed[0].why` and `honestAssessment` rewritten to describe the post as it now
   stands.

**Word count:** the 2026-08-27 source swap left the body at **1,817 words by `wordCount()`** in
`app/lib/batches.ts` — the figure the studio displays, and **17 over the 1,800 cap**. The plain
whitespace split reads 1,799 because `wordCount()` turns markdown punctuation into spaces, so
hyphenated words split in two and table-cell pipes count as tokens; the two measures differ by
roughly the number of links plus table cells. The trim below (§9) brought it to **1,768**.

**Open items:**

1. **Swap test on Karamalak** — open, structural. Re-check when the WebSearch budget resets (§6).
2. **The 45-second estimate** — open by design. It is judged, not measured; closing it needs a probe
   that times real replies, which the `birthdaygfpages` collection does not record.
3. **`link.springer.com` at 3 posts** — monitor. Any further Springer citation anywhere in the
   corpus should displace this one.
4. **Phase 1 partial** — four of the nine SERP results could not be read as text (two social posts,
   two JS-only retail pages). Recorded in `honestAssessment`; not closable without a browser pass.

---

## 9. Word-count trim, 2026-08-27

Checklist item **"1,500–1,800 words in contentMarkdown excluding FAQs, no padding"** had been recorded
as passed on the wrong measure. Measured correctly with `wordCount()`, the body stood at **1,817**.
Three cuts, no restructuring and no change to the argument:

1. The intro road-map line — *"Below: the threshold, eight messages with real character counts, the
   three reply modes compared, and what to write when you are late."* A transition that only
   restated the H2s, and a one-sentence paragraph. −22.
2. In *What to write when you are already days late* — *"Everything about a birthday happens in one
   sitting, and the wishes arrive that way too."* A restatement of the paragraph's own opening
   sentence (*"Birthday replies decay fast because birthday activity is compressed"*). −15.
3. In *When a thank-you message is the wrong choice* — the clause *"and it is the most common
   mistake of the group-chat era"*. An unsourced superlative; the sentence it hung off carries the
   point without it. −12.

**After: 1,768 by `wordCount()`, 1,751 by plain split.** Nothing cited, first-party, or
load-bearing was touched — every character count, every study figure, the direct answer in the
first 150 words, the comparison table and the 70-wish threshold with its arithmetic all stand
unchanged, and `article.faqs` was not edited. *card* still appears zero times in the body. The full
50-item checklist was re-run after the trim: **49 passed, 1 failed**, lists disjoint, item 41 now a
genuine pass.
