# Research brief — `virtual gift with music`

- **Slug:** `virtual-gift-with-music`
- **Batch:** `2026-09-15-virtual-gift-30` (wave 3, row 16)
- **Category:** `digital-gifts-romance`
- **Templates:** `/dedication`, `/watch`, `/loveflix` (+ `/templates` CTA)
- **Written:** 2026-09-16

---

## Phase 1 — SERP analysis

India SERP, `kl=in-en`, ads filtered, collected 2026-09-16 (`SERPS-WAVE3.md`).

| # | Result | What it is | Word count / structure | Where the answer sits | Data cited | Format elements | Tone | Optimising for |
|---|---|---|---|---|---|---|---|---|
| 1 | aiskyla.com | product homepage | ~300 visible words, hero + feature grid | no answer — a CTA | none | no table, no FAQ, no byline | marketing second person | conversion on "free virtual gift" |
| 2 | virtualgift.me | product homepage | ~250 words, hero + three steps | no answer | none | step icons only | marketing | "create in minutes for free" |
| 3 | giftsqr.com/en | product homepage | ~400 words + pricing rail | no answer | none | some FAQ accordion | marketing | "QR code" modifier |
| 4 | aiskyla.com/free-virtual-gift | product landing page | ~350 words | no answer | none | none | marketing | the word "free" |
| 5 | iloveyou.gift | product homepage, **music in the title tag** | ~250 words | no answer | none | none | marketing | "with music and photos" |
| 6 | lovedigitalgift.com | product homepage | ~300 words | no answer | none | none | marketing | "interactive gift websites" |
| 7 | 2-luv.com/en/event/birthday | product category page, **music in the title** | ~300 words | no answer | none | template gallery | marketing | birthday + music + QR |
| 8 | sendvirtualgift.com/create | product builder page | ~150 words | none — it is the builder itself | none | form | UI copy | direct conversion |
| 9 | gifter.live | product homepage | ~250 words | no answer | none | none | marketing | "free virtual gifts online" |
| 10 | 2-luv.com/en | product homepage | ~350 words | no answer | none | none | marketing | "digital love letter QR" |

**10 of 10 are competitor landing pages.** All are on the wave-3 banned list
(`BRIEF-WAVE3.md` §1) and are read for gap analysis only — never cited, never linked.

There is no AI Overview and no featured snippet on this query, because there is no
prose page in the result set for Google to pull a passage from.

## Phase 2 — Gap analysis

**Table stakes** (present on nearly every page, so the post must cover them):
what a virtual gift with music is; that it is a link; photos + text + a song;
that you can send it on WhatsApp; that it works on a phone.

**The gap — and it is unusually wide.** Three of the ten pages put *music* in the
title tag, and **not one of them explains a single thing about how the audio
behaves.** Specifically, nobody on this SERP mentions:

1. **Autoplay is blocked by default.** Audio with sound will not start until the
   recipient interacts with the page. Every "surprise them with our song" plan
   fails on this, and the sender finds out from the recipient, not the product.
2. **On mobile there is no engagement-score escape hatch.** Chrome's Media
   Engagement Index only unlocks sound-on autoplay *on desktop*; on a phone the
   routes are a user tap or installing the site to the home screen.
3. **The licensing distinction.** Linking or embedding a track from a streaming
   service is not the same as hosting a copy of a copyrighted recording, and the
   two carry entirely different obligations.
4. **Everything between the send and the ear** — silent mode, the WhatsApp in-app
   browser, one earbud in a shared room.
5. **Song choice as a practical constraint** — the opening seconds do the work.

**Stale data:** none to supersede. No page on this SERP cites any data at all.

**Unanswered questions raised and dropped by the competitor set:** "add your
favourite song" appears on six of ten pages with no statement of format, size
limit, licence or playback behaviour.

**Fan-out sub-queries** (each becomes an H2 or an FAQ):
can you add music to a virtual gift · why won't the music play · can I use a
Spotify song · is it legal to add a copyrighted song · what file format ·
will it play on WhatsApp · what if their phone is on silent · which song should
I pick · does it work on iPhone · can I add my own voice instead.

**Angle:** *This post wins by being the only page on the query that explains why
the music does not start — browser autoplay blocking, verified against MDN and
Chrome's own policy — and prices that against the 49.2% of SubhSandesh page views
that arrive on a touch device where the tap is the only unlock.*

## Phase 3 — Sources

Route used: **Crossref → Unpaywall**, per `BRIEF-WAVE3.md` §3. OpenAlex returned
HTTP 429; DOAJ returned HTTP 502 on three consecutive queries and was abandoned
rather than retried; `nature.com`, `weizenbaum-library.de` and `libres.uncg.edu`
were reachable only as bot challenges or connect timeouts and were dropped.
Search terms tried: `music evoked autobiographical memory emotion`,
`music chills emotional response psychophysiology`, `nostalgia music social
connectedness`, `shared music listening interpersonal bonding`,
`music sharing romantic relationship mediated communication`,
`smartphone music listening everyday emotion regulation`,
`recognition of familiar songs within seconds exposure`.

| Source | Domain | Why it passes the subject test | Swap test |
|---|---|---|---|
| MDN — Autoplay guide for media and Web Audio APIs | developer.mozilla.org | The post's central technical claim. Verified by fetching the page, not asserted from memory. | Passes — no other post in this batch discusses audio playback. |
| Chrome for Developers — Autoplay policy in Chrome | developer.chrome.com | Supplies the desktop/mobile asymmetry MDN leaves general. | Passes. |
| Volgsten & Pripp 2016, *Culture Unbound* | cultureunbound.ep.liu.se | Peer-reviewed, open access. Music as carrier of communicative memory and affect attunement — why a song moves something a message does not. | Passes — tied to music specifically. |
| Vasiou, Danou & Sideris 2023, *Θέματα Επιστημών Αγωγής* | ejournals.epublishing.ekt.gr | Peer-reviewed, open access, n=203. Positive music-listening experience predicted positive affect. | Passes. |
| Spotify for Developers — Embeds | developer.spotify.com | The documented legal route for putting a commercial track on a page you control. | Passes. |

**Abstract-only disclosure:** the two scholarly sources were read as landing-page
abstracts and metadata. PDFs do not parse in this sandbox, so the full texts were
not read. Both claims made in the post are drawn from the abstract wording.

**Cap check against `SPENT-SOURCES.json` (regenerated 2026-09-16) and all 70
sibling files in `blogs/`:** `developer.mozilla.org` was at 2 and this post takes
the third and final slot; `developer.chrome.com`, `cultureunbound.ep.liu.se`,
`ejournals.epublishing.ekt.gr` and `developer.spotify.com` were all at 0. `osf.io`
had reached 3 during this wave and was dropped after selection. `nature.com`,
`doi.org` and every domain in `domainsAtCap` were avoided.

## Phase 0 — First-party gate

Three or more relevant facts, two inside the first 150 words:

- 49.2% of views are on a touch device (phone or tablet) — measured 2026-09-15
- Average views per created page: 11.5 — measured 2026-09-15
- 49.0% of shared pages are opened on a phone (24,493 of 49,968 views) — measured 2026-09-15
- Most-viewed template: love-gf — 16,201 views, 32.4% of all page views — measured 2026-09-15
- 4,357 personalised pages created since 2026-03-12, across 16 page types — measured 2026-09-15

The touch-device share is the load-bearing one: a touch device is precisely the
context in which sound-on autoplay is unavailable without a tap.

**Pricing:** the `## Pricing` block in `content/facts.md` is empty. No price is
stated or implied anywhere in the post.

## Cannibalisation

`WAVE3-PLAN.json` records `overlapWithWritten: 2`, `mustDifferentiate: false`,
`nearestWritten: null`. Read before drafting: `virtual-gift-ideas` (ranks ideas by
how often each is finished) and `what-is-a-virtual-gift` (separates four meanings
of the term). Neither contains a single sentence on audio behaviour, licensing or
song choice — a grep for `music|song|audio|autoplay|Spotify` across both returns
one line, a description of the `/dedication` template. Both are cross-linked from
this post, which is strictly downstream of them.

## Internal links

`/dedication` (the strongest template fit in the batch — a radio show for one
person), `/watch` (a real player with chapters and a pinned comment), `/loveflix`
(a streaming parody, a joke by design — described as one), and `/templates` at the
close. Plus blog cross-links to `virtual-gift-ideas` and `what-is-a-virtual-gift`.
