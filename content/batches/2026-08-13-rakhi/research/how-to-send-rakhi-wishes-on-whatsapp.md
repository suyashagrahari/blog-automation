# Research brief — "how to send rakhi wishes on whatsapp"

Batch: `2026-08-13-rakhi` · Cluster C19 · Slug: `how-to-send-rakhi-wishes-on-whatsapp`
Also covers: *raksha bandhan whatsapp status with name*
Run date: 2026-08-13. Raksha Bandhan 2026 = **Friday 28 August 2026** (15 days out).

---

## Phase 0 — Data gate

`content/facts.md` (generated 2026-08-13) carries **no rakhi-specific numbers** — the
database has 13 page types and none of them is a rakhi page with enough volume to
segment. The gate is cleared on **platform delivery facts**, which are the ones this
keyword actually needs, because the post is about how a message travels, not about
what it says:

| Fact | Why it belongs in *this* post |
|---|---|
| 52.5% of shared pages opened on a phone (16,323 of 31,081 views) | The whole post is about a phone-to-phone channel |
| 31,081 recorded views of shared pages | Sample size behind every other number here |
| 11.8 average views per created page | The single strongest claim against pasted text — links get reopened, text does not |
| 44.7% of creators password-protect before sharing (1,177 of 2,632) | Directly answers "is a WhatsApp link private?" |
| 99.4% of started pages are published and shared (2,615 of 2,632) | Completion evidence for the 4–6 minute build claim |
| 52.7% of views on a touch device | Phone + tablet superset of the above |

**Honest limitation, carried into the body:** every one of these is platform-wide
across 2,632 pages and 13 page types. None is rakhi-segmented. The post says so
where the numbers appear rather than implying a rakhi-specific rate.

---

## Phase 1 — SERP

`WebSearch` run 2026-08-13 (US IP — Google-US results for an India-intent query, so
positions are directional). The harvest file recorded **only 6 results** for this
query; the live re-run returned 7. Both sets are the same shape.

| # | URL | Format | Words (approx) | Where the answer lands | Data cited | What it optimises for |
|---|---|---|---|---|---|---|
| 1 | sheetwa.com/blogs/raksha-bandhan-wishes-for-whatsapp | 130+ copy-paste wish list, H2 per relationship | ~4,000 | No answer — 3 paragraphs of throat-clearing, then lists | **None.** Zero numbers, zero sources | Volume of message text + a WhatsApp bulk-sender product |
| 2 | udaipurkiran.com/4-unique-ways-to-send-raksha-bandhan-wishes-via-whatsapp | 4 UI how-tos (photo/video, stickers, GIF, +1) | ~450 | Paragraph 2 | None | Thin news-site pageview |
| 3 | gizbot.com (Raksha Bandhan 2025 stickers/GIFs) | Sticker install walkthrough | — (HTTP 403, not fetched) | — | — | Sticker-pack how-to; **2025-dated** |
| 4 | adobe.com/in/express/discover/wishes/raksha-bandhan | Wish lists by relationship + template CTAs | ~1,200 | No direct answer; TOC then lists | None | Funnelling into Adobe Express card/poster templates |
| 5 | fnp.com/quotes/raksha-bandhan | Quotes directory | — | — | — | Selling rakhi hampers |
| 6 | rakhi.com/blog/rakhi-quotes | Quotes listicle | — | — | — | Selling rakhis |
| 7 | corporate.indiamart.com | **2008 blog post** | — | — | — | Nothing — stale index artefact |

**Format elements across the set:** no comparison table anywhere, no FAQ schema
observed, no author byline with credentials, no outbound citations, no dates on any
claim. Tone is uniformly second-person warm-generic ("You want to make your sibling
smile"). sheetwa's own key-takeaways block is eight bullets containing not one number.

**The structural read:** every page answers "how to send on WhatsApp" with *text to
copy*. Two of them (udaipurkiran, gizbot) answer it with *which button to tap*.
Nobody answers it with *what happens to the message after you tap send*.

---

## Phase 2 — Gap analysis

**Table stakes** (must be present or the post looks incomplete): the 2026 date;
message/wish formats; stickers and GIFs acknowledged; a status option; something for
a long-distance brother; an English-language wish register.

**The gap.** Not one page treats WhatsApp as a *delivery environment*. Specifically,
nobody covers:

1. That WhatsApp has labelled forwarded messages since 2018 precisely so the
   recipient can tell whether you wrote it.
2. That India is, by WhatsApp's own statement, the country that forwards more than
   any other in the world — which is the actual reason a pasted couplet lands flat.
3. That a link behaves differently from text in a chat because it unfurls into a
   preview card, and that this is a spec (Open Graph), not magic.
4. That Status expires in 24 hours and is therefore a broadcast, not a keepsake.
5. That a voice note is unforwardable-from-a-listicle and is the highest-return,
   least-used option in the whole list.

**Why the gap is structural, not accidental.** sheetwa sells a WhatsApp bulk-message
tool; its incentive is more text, sent to more people. Adobe funnels to a template
editor. fnp and rakhi.com sell physical rakhis. A page that concluded "send fewer
words, in a format that survives" is against all four business models.

**Stale data.** There is no data to supersede — the set cites nothing at all. The
staleness is in the *pages*: a 2025-dated Gizbot article and a 2008 IndiaMART post
holding a top-6 slot are the clearest signal that this index is thin.

**Fan-out sub-queries → H2s:**
- What does "sending a rakhi wish on WhatsApp" actually involve? → definition H2
- Why does a copy-pasted wish land badly? → forward-mechanics H2
- What are the actual formats? → 5×H3 block
- Which one should I pick? → comparison table H2
- How do I put a Raksha Bandhan status with his name on WhatsApp? → H3 #3 + FAQ
- Why does my link preview look broken? → Open Graph H2
- When is WhatsApp the wrong channel? → objection H2

**Angle (one sentence):** Wins by being the only post that explains what WhatsApp
*does to* a rakhi message — the forwarded label, the five-chat cap, the 24-hour Status
expiry and the link-preview spec — instead of supplying more text to paste, backed by
SubhSandesh's 11.8 average views per shared page across 31,081 recorded views.

---

## Phase 3 — Sources (all fetched and verified; zero competitors)

| # | Source | Verified statement | Date |
|---|---|---|---|
| 1 | blog.whatsapp.com/labeling-forwarded-messages | "WhatsApp will indicate which messages you receive have been forwarded to you… helps you determine if your friend or relative wrote the message they sent or if it originally came from someone else." | 2018-07-10 |
| 2 | blog.whatsapp.com/more-changes-to-forwarding | "In India – where people forward more messages, photos, and videos than any other country in the world"; forwarding capped at 5 chats at once | 2018-07-19, updated 2019-01-21 |
| 3 | about.fb.com/news/2020/04/whatsapp-message-forward-limit/ | Messages "forwarded many times" (double-arrow label) limited to one chat at a time; earlier limits produced a 25% decrease in total message forwards globally | 2020-04-08 |
| 4 | ogp.me | Open Graph protocol: `og:title`, `og:type`, `og:image`, `og:url` are the four required properties for a page to render as a rich object | undated spec |
| 5 | pib.gov.in — TRAI *Indian Telecom Services Performance Indicator Report*, Jan–Mar 2026 | 1,092.79 million internet subscribers at end of Mar-26, of which 1,046.26 million wireless | 2026-06-22 |
| 6 | calendar.gatech.edu/event/2026/08/28/raksha-bandhan | Raksha Bandhan listed as Friday, August 28, 2026 | 2026 calendar entry |

**Could not verify, so stated without a link and flagged:** the WhatsApp Help Center
page for Status (24-hour expiry). `faq.whatsapp.com` returns HTTP 400/403 to every
fetch attempt and serves a Kannada error shell to the indexer. The 24-hour figure is
stated in the body as observable product behaviour and is deliberately **not** in
`batchMeta.sources`.

**Wikipedia:** 1 body link (Raksha Bandhan, Q10266) for entity disambiguation only.

---

## Phase 5 — Targeting

- `categorySlug`: **festive-beats** — verified against the live Strapi category list.
- `templateUrls`: `/happy-rakshabandhan-to-brother` (primary, live) and `/templates`.
- Slug checked against Strapi: `filters[slug][$eq]=how-to-send-rakhi-wishes-on-whatsapp`
  returned `total: 0` — free.
- Entity QIDs verified via the Wikipedia API: Raksha Bandhan Q10266, WhatsApp
  Q1049511, Open Graph protocol Q17107778, TRAI Q7695822, Meta Platforms Q380.

---

## Backlink notes (not controllable from inside the post)

The forward-mechanics framing is the part worth pitching outside the blog: it is a
genuine answer to "why does my festival message get ignored", which is asked on
Quora and r/india every August and currently has no good link to point at.
