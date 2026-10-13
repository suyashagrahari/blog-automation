# Research brief: halloween captions for stories

Row 45 · slug `halloween-captions-for-stories` · absorbs "halloween instagram story captions" · theme captions · PLAN weak 4/10.

## Phase 0: first-party data

facts.md (2026-09-24 block) has no Stories, Instagram or Halloween data (BRIEF §3). Used, labelled as SubhSandesh greeting-page data:

- 48.3% of shared pages are opened on a phone (27,725 of 57,456 views) — measured 2026-09-24 (opening)
- 48.4% of views are on a touch device (phone or tablet) — measured 2026-09-24 (opening)
- 38.5% of creators password-protect their page before sharing it (2,000 of 5,199) — measured 2026-09-24 (Close Friends section)

Template spec used for the /happy-halloween section; key tie-in: the Boo License is 1080×1920, Instagram Story size.

## Phase 1: SERP

Firecrawl MCP disconnected. **One WebSearch call** ("halloween captions for stories"); the tool ran two internal queries in that call, so the 2-search budget is treated as spent. **US-served index, not Google's ranking: lower confidence.**

Results (deduplicated): apartmenttherapy.com, socialchamp.com (x3 locale variants), tools.wbez.org, erpstaging.fha.gov.ng, op.brooklynbedding.com, john.inspire.com, training-new.klingspor.com, onlypult.com, beacons.ai, womenshealthsa.co.za, adconsole.inmobi.com, netbox.point-broadband.com. Five or more are scraped/parasite pages on hijacked subdomains. **Weak in top 10: 6** (PLAN said 4). Gate 4 passes. serps.md corroborates: "(WS) halloween instagram story ideas" 5 weak, SaaS blogs, creator intent.

| # | Page | Words (approx.) | Direct answer | Structure | Data / date | Story-specific? |
|---|---|---|---|---|---|---|
| 1 | apartmenttherapy.com/halloween-instagram-captions-37429663 | n/a | n/a | HTTP 403, not readable | n/a | unknown |
| 2 | socialchamp.com/blog/halloween-captions/ (SaaS) | ~4,100 incl. chrome | No, 4-paragraph intro, then "Short Summary" | 7 H2s by platform and post type; 200 captions; FAQ; scheduler CTA | Published 23 Oct 2024, title "Updated 2026"; no data | "story" only in sidebar links; 0 sticker / poll / Close Friends mentions |
| 3 | onlypult.com/blog/halloween-instagram-captions (SaaS) | ~2,800 | No, intro paragraph | 11 H2s by tone (funny, cute, movies, songs, literature, emoji, costume, selfies, friends, couples), 150 numbered; 3 FAQs | 13 Feb 2024; no data | No |
| 4 | beacons.ai/i/blog/halloween-captions-for-instagram (creator SaaS) | ~1,500 | Generic intro | 12 H2s by tone + pets/selfie; ~100 bullets with emoji | 16 Apr 2025; no data | No |
| 5 | womenshealthsa.co.za/halloween-instagram-captions/ (media) | ~1,700 | No, long intro | H2s by tone, movie/TV quotes, song lyrics | 27 Oct 2023 (stale); no data | No |

Tone across all: third person, listicle, puns ("creep it real", "fang-tastic"), copied pop-culture quotes and lyrics. None has schema we could detect, none has a table.

## Phase 2: gap

- **Table stakes:** many short captions; cute/funny/spooky; costume, couple, group.
- **Gap:** none of the four readable pages treats a Story as a different format from a feed post. Zero mention of stickers (poll, quiz, question, slider, countdown), Close Friends, Highlights or the 24-hour life. None sorts captions by moment of the night (getting ready → morning after).
- **Stale:** womenshealthsa 2023, onlypult Feb 2024; socialchamp stamps "2026" on a 2024 post.
- **Fan-out sub-queries:** what makes a Story caption work; story captions by moment; poll/quiz ideas for Halloween stories; Close Friends Halloween story; keep Halloween story as Highlight; can I see who voted; are question answers anonymous; sticker missing; difference between story and feed captions; 1 November story.

**Angle:** Wins by being the only post that sorts Halloween Story captions by moment of the night and pairs them with Help-Center-verified sticker, Close Friends and Highlights mechanics, using SubhSandesh's 48.3% phone-view share and 38.5% password-protect rate.

## Phase 3: sources (all fetched 2026-10-12)

| Source | What it says (verified) | Read | Subject test | Cap status |
|---|---|---|---|---|
| help.instagram.com/1660923094227526 "Stories" | Photos/videos disappear from profile, Feed and messages after 24 hours unless added as story highlights | Full (embedded CMS JSON; page is JS-rendered) | Yes | help.instagram.com: 2 posts incl. this; different URLs from the Instagram wishes post |
| help.instagram.com/151273688993748 "Using stickers on Instagram" | Poll realtime results, swipe up to see how each person voted; question sticker Text or Music, shared response hides photo and username; quiz multiple choice; countdown reminder notification; Add Yours; not all stickers available to everyone; unavailable in Japan/Europe note | Full | Yes | same |
| help.instagram.com/2183694401643300 "Share a story with your Close Friends list" | CF stories disappear after 24h; people know they're on it; no requests; label + green ring | Full | Yes | same |
| help.instagram.com/813938898787367 "Add a story to your Story Highlights" | Highlights remain until removed; those allowed to see your story see highlights | Full | Yes | same |
| Veloso da Silva 2025, PhD, Corvinus Univ. Budapest (phd.lib.uni-corvinus.hu/1413/) | 43 participants, 20 nationalities, aged 18–22, six focus groups + netnography + interviews; Stories more lighthearted than feed; strategies incl. Close Friends segmentation, polls/questions/stickers, "more playful and less polished self-representation" | English thesis booklet in full; full 9MB dissertation not read | Yes, scholarly, open | domain 0 posts in this batch (also cited in navratri-b3; caps per batch) |
| Purmiasa, Yoanita & Budiana 2020, IMC 2019 proceedings, Atlantis Press (CC BY-NC) | n=400, aged 18–24, five Indonesian cities, Stories posters; privacy concern highest-weighted factor, privacy invasion experience lowest | Full PDF | Yes, peer-reviewed proceedings, OA | atlantis-press.com 0 posts; NC licence, cited/linked only |

**Excluded:** Ephemerality on WeChat Moments (Frontiers, over cap); Xu et al. 2016 CSCW archiving vs deletion (dl.acm.org 403); Bayer et al. 2016 Snapchat (T&F, banned); SSRN 2025 "Ephemeral Content and Attention Span" (unreviewed); theconversation.com (prompt said one slot; capcheck shows FULL at 3).

**Not printed:** any Story text-length limit (no Instagram source publishes one; the "under 12 words" figure is labelled a working rule); any Story-frame duration in seconds (not verified).

## Sibling separation

Feed wishes → halloween-wishes-for-instagram (hashtags, alt text). This page: Stories only (24h, stickers, Close Friends, Highlights, moment-by-moment). 5-gram overlap check of all 80 bullets against every sibling blog and brief in the batch: none. 4-gram check against the four competitor pages: one incidental phrase ("you are on the"), no copied line.
