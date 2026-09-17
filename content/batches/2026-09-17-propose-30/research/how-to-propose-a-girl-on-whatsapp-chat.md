# Research brief — `how to propose a girl on whatsapp chat`

Batch `2026-09-17-propose-30` · slug `how-to-propose-a-girl-on-whatsapp-chat` ·
category `modern-romance` · volume band 1,000–3,000 EST (no tool data — never
printed as a measured volume anywhere in the post).

---

## Phase 1 — SERP

SERP measured 2026-09-16 by the batch owner and re-checked 2026-09-17 via
WebSearch. **No dedicated resource exists for this query.** Position 1 is a Quora
thread (`How-do-I-propose-a-girl-on-WhatsApp`); the rest of page one is TikTok,
a Facebook video, YouTube dating advice and two flower retailers. The retailer
pages that surface (FlowerAura, MyFlowerTree) are **competitors** under
`references/competitors.md` — read for gap analysis, never cited, linked or
mirrored.

| Result type | Word count | Where the answer sits | Data cited | Format | Optimising for |
|---|---|---|---|---|---|
| Quora thread (pos. 1) | Variable, ~200–600 per answer | First answer, anecdotal | None | Q&A, no schema | UGC freshness + exact-match title |
| TikTok / FB video | n/a | In-video, ~15s | None | Video | Watch time |
| YouTube dating advice | n/a | 2–4 min in | None | Video | Session duration |
| Flower retailer blog A | ~1,200 | After a scene-setting intro | None | Listicle of lines, product CTA | Product pages |
| Flower retailer blog B | ~1,400 | After intro | None | Listicle of lines + "tips" | Product pages |

Common shape: a pile of copy-paste proposal lines, four generic tips (be
sincere, pick the right time, do not send a wall of text, use emojis), and a
product CTA. **Zero sources across the entire first page. Zero mentions of any
WhatsApp mechanic.**

Per the BRIEF, bondlyfe-style basic advice (timing, ask clearly, one message not
a wall of text) is now **table stakes, not a gap** — included briefly, never as
the spine.

## Phase 2 — Gap

- **Table stakes**: say it clearly; do not send paragraphs; pick a moment; be
  sincere rather than copy-pasted; girlfriend-vs-marriage distinction.
- **The gap**: every ranking page treats WhatsApp as a neutral pipe. Not one
  describes what the app *does* to a proposal — read receipts, last seen,
  per-message notifications, the link preview card, forwardability. That is the
  whole angle.
- **Stale data**: nothing to supersede; there is no data on these pages at all.
- **Unanswered questions**: "she read it and didn't reply, what now"; "should I
  turn off blue ticks"; "what does she see when I send a link"; "does turning off
  last seen hide me".
- **Fan-out sub-queries → H2s**: what proposing on WhatsApp means · what blue
  ticks mean · what last seen shows · which format to send · what a link looks
  like in chat · which format costs what · when not to do it at all.

**Angle**: wins by being the only post that treats the WhatsApp mechanics as the
subject — blue ticks, last seen and the link preview card — with peer-reviewed
CHI evidence on what read receipts and status indicators do to people, grounded
in SubhSandesh's platform-wide 39.9% password-protection and 48.9% phone-view
rates.

## Phase 3 — Sources (5)

Lane: **WhatsApp as social infrastructure in India, and messaging-app
affordances.** Deliberately avoided: media-richness / CMC-channel theory,
first-disclosure anxiety, post-conflict and long-distance literature — those are
sibling agents' lanes.

All five URLs checked against the 54 spent in
`content/batches/2026-09-17-propose-12`: **none reused.** `tandfonline.com` is
the only shared domain, via a different paper.

1. **Hoyle, Das, Kapadia, Lee & Vaniea (2017), "Was my message read? Privacy and
   Signaling on Facebook Messenger", CHI 2017** —
   `https://www.cs.oberlin.edu/~rhoyle/papers/hoyle-chi17.pdf`
   Peer-reviewed, open PDF, **read in full** (PDF pulled and text-extracted).
   Surveys of 402 senders and 316 recipients. Senders: 42.8% upset or angry when
   a message was read but unanswered vs 30.3% when never read; 27.9% assumed
   pointed ignoring vs 15.4% unread. Recipients: 68.4% had deliberately avoided
   opening a message; 68.2% of those wanted to pretend they never saw it.
   *Disclosed in body prose that the platform was Messenger, not WhatsApp.*

2. **Cobb, Simko, Kohno & Hiniker (2020), "User Experiences with Online Status
   Indicators", CHI 2020** —
   `https://faculty.washington.edu/alexisr/osiUserStudy.pdf`
   Peer-reviewed, open PDF, **read in full**. Survey of 200 smartphone users.
   107 had opened an app purely to check someone else's status; 86 (43%) changed
   a setting or behaviour to avoid one specific person; in apps lacking the
   setting, participants wrongly believed they had found one in 23% of cases,
   half of those false positives in WhatsApp — where switching off "last seen"
   stops the app showing what time you were last online but **not** that you are
   online now. ACM DL returns 403; the authors' copy was used.

3. **Khan, Yaqoob, Showkat & Ahmed (2026), "The Promise and the Perils of
   Mediated Romance: An Exploration of Digital Intimacy Among Young Couples in
   India", Marriage & Family Review** —
   `https://www.tandfonline.com/doi/full/10.1080/01494929.2026.2668537`
   Peer-reviewed, **closed access — abstract only**, read via the OpenAlex
   record for DOI `10.1080/01494929.2026.2668537`. tandfonline.com blocks
   automated fetches, so the article page itself was not retrieved; this is
   recorded as a failure against the outbound-links checklist item, not hidden.
   25 semi-structured email interviews with unmarried young Indians blocked by a
   partner; messaging, voice notes and "last seen" monitoring produced
   "connected presence" alongside obsessive surveillance and distress after
   digital withdrawal. The post claims nothing beyond the abstract.

4. **Garimella & Eckles (2020), "Images and misinformation in political groups:
   Evidence from WhatsApp in India", HKS Misinformation Review, 8 July 2020** —
   `https://misinforeview.hks.harvard.edu/article/images-and-misinformation-in-political-groups-evidence-from-whatsapp-in-india/`
   Open access, **fetched and read**. Used only for the scale figure: over
   5 million messages from over 250,000 users across more than 5,000 public
   political WhatsApp groups in India. The misinformation percentage is
   deliberately **not** cited — the abstract says ~10% and the essay summary says
   13%, and the post does not need it.

5. **Meta, "Link Previews — WhatsApp Business Platform", updated 21 May 2026** —
   `https://developers.facebook.com/documentation/business-messaging/whatsapp/link-previews`
   Platform documentation, **fetched and read**. Preview card is built from
   `og:title`, `og:description`, `og:url`, `og:image`; title renders in at most
   2 lines; 80 characters of description suffice; image must be an absolute URL,
   300px or more, under 600KB; markup must sit in the first 300KB of the HTML.

**Source tests.** Subject test: 1, 2, 3 and 5 are about messaging-platform
behaviour; 4 is about WhatsApp in India specifically. Peer-reviewed and
open-access: 1 and 2. Swap test: none of the five could sit unchanged in another
post in this batch — they are all about app mechanics rather than about
proposing. **Zero generic context statistics used** (no PIB, TRAI, Census or
MEA); the ≤1 allowance was not spent. Zero Wikipedia body links; Wikipedia
appears only as verified `sameAs` targets in `structuredData`.

**Searched and rejected**: `read receipts anxiety research` (surfaced mostly
SEO blog spam); `link sharing behaviour messaging research` → Gabielkov et al.,
*Social Clicks* (SIGMETRICS 2016) — the HAL open copy is behind an
anti-bot interstitial and ACM returns 403, so it was dropped rather than cited
unread; `WhatsApp India usage study` → deliberately did not use a WhatsApp user
count or market-share figure, per the BRIEF, because no source actually fetched
and read stated one with a publication date.

## Phase 0 — first-party facts used

Six lines from `content/facts.md` (2026-09-17), each labelled in the **body
prose** as platform-wide across all 16 page types, or as sampled on `/love-gf`:
48.9% phone views of 51,504; 39.9% password-protection of 4,567; 92.7% published
and shared; median 6.4h first save → last edit (n=1,138, `/love-gf`); `/love-gf`
at 1,138 pages and 24.9%; 4,567 pages since 2026-03-12. Two are inside the first
150 words. **No number is attributed to proposal pages** — none exists.

## Phase 5 — links

- `/proposal` (mandatory) — placed in "What she actually sees when you send a
  link", after the preview-card mechanics establish why a link beats a wall of
  text.
- `/date-invitation` (genuine alternative) — placed in the objection H2, with the
  reason stated plainly: on WhatsApp the realistic next step is usually asking to
  meet, not proposing.
- `/love-gf` — for readers whose real question is "will you be my girlfriend".

Three internal links, all from `TEMPLATE_LINKS`, all relative. Five outbound
links, one per source, each attached inline to the sentence stating its fact.

## Verified dates

Propose Day 2027 = **Monday 8 February 2027** (Rose Day Sunday 7 February;
Valentine's Day Sunday 14 February). Stated once, in the definition H2.

## Audit

50 items, 47 passed, 3 failed (`passed ∩ failed = ∅`). Failures: H2 5
("answerable standalone in 2–3 sentences") for the six-item list H2; the
outbound-links item for the un-fetched tandfonline URL; and the batch
URL/domain-cap item, unverifiable at write time with 29 sibling agents running
concurrently. Structural limitations — no proposal-specific data, empty pricing
block, and pages-not-messages measurement — live in
`batchMeta.structuralLimitations`, not in `failed`.
