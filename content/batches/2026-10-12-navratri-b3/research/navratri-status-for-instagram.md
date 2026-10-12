# Research brief — navratri status for instagram

- Batch: `2026-10-12-navratri-b3` · slug `navratri-status-for-instagram` · bodyLanguage `en`
- Also covers: navratri instagram story ideas, navratri story for instagram, navratri status in english for whatsapp
- Written 2026-10-12. WebSearch calls used: **2** (1 SERP, 1 Instagram Help Center lookup restricted to help.instagram.com / facebook.com).

## Split against the 50 written siblings (navratri-partner-b1)

`garba-captions-for-instagram` owns permanent FEED captions by post type and the five-hashtag cap; `navratri-status-in-hindi` owns Hindi status lines with character counts and a goddess-by-tithi list; `garba-partner-captions-for-instagram` owns the tag-or-keep-private decision for a partner caption; `navratri-wishes-in-english` owns English wishes for a mixed audience. **This page owns the 24-hour formats only: a nine-night STORY plan, which Instagram story feature fits each night (countdown, poll, mention, questions, music, Add Yours, Close Friends, Highlights) with Instagram's own help text, the WhatsApp Status equivalent and its hard limits (24 h, 90 s, privacy settings, mentions, group statuses), short original English status lines, and who sees what.** It does not mention hashtags or build on the five-hashtag cap.

## Phase 0 — first-party data gate

facts.md read directly; `npm run facts` NOT run (per BRIEF §3). No Navratri or dandiya usage data exists. Facts used (byte-verbatim):

1. `48.3% of shared pages are opened on a phone (27,725 of 57,456 views) — measured 2026-09-24` — bears on the page: a story/status is a phone format; also frames the recipient of a one-to-one page.
2. `38.5% of creators password-protect their page before sharing it (2,000 of 5,199) — measured 2026-09-24` — bears directly on the privacy section (Close Friends vs public).
3. Raksha Bandhan 2026 lead-time line (49.4% built on the festival day, n=89, median 0 days) — labelled in body as the nearest analogue, not Navratri data.

Gate: 3 relevant facts, 2 in the first 150 words. The gate is thin: none of them measures Instagram or WhatsApp behaviour, so the table's first-party value sits in one cell, not a column (recorded as an audit failure). Template-spec facts used (not counted toward the 3): nine lines, six photos, No turns to Yes after five tries, 1080×1920 PNG Dandiya Pass at Instagram Story size, no app/no account, English UI, one-to-one.

## Phase 1 — SERP (US-served (WebSearch), 2026-10-12, query "navratri status for instagram")

India-served positions unavailable this run. 9 results returned.

| # | URL (US-served (WebSearch)) | Type | Date of content | Where answer appears | Format | Weak? |
|---|---|---|---|---|---|---|
| 1 | training-new.klingspor.com/tag/navratri | Scraped mirror ("9+ Divine Navratri Captions") | unknown | — (DNS fail on fetch) | caption list | Weak — mirror, unreachable |
| 2 | digit.in … happy-navratri-whatsapp-status-video-download … | News roundup, video downloads | Updated 21 Sep 2025, Sharad 2025 dates | after 3 intro paras | 2025 date table, 7-step "add status" how-to, video embeds | Weak — 2025 dates, no Instagram story features, no privacy beyond "Status (Contacts)" |
| 3 | digit.in … happy-chaitra-navratri-2026-whatsapp-status-video … | News roundup | Chaitra 2026 (March) | after intro | Chaitra date table, "make a video with Gemini" | Weak — wrong Navratri (Chaitra) |
| 4 | socialveins.com/influencer/instagram/navratri_collection__ | Influencer profile listing | — | — (HTTP 503) | — | Weak — off-topic shopping profile |
| 5 | socialveins.com/influencer/instagram/destination_jewellery | Influencer profile listing | — | — | — | Weak — off-topic |
| 6 | erpstaging.fha.gov.ng/?p=29861 | Scraped mirror on a hijacked .gov.ng staging host | — | — (timeout) | — | Weak — spam mirror |
| 7 | thebridgechronicle.com … navratri-2025-wishes-quotes-status | Wishes listicle | 22 Sep 2025 | after 2 intro paras | bullet wishes, "status updates for WhatsApp & Facebook", quotes | Weak — 2025, generic wishes, no story mechanics |
| 8 | digit.in … happy-navratri-2025-whatsapp-status-video … (amp) | Near-duplicate of #2 | Sep 2025 | — | — | Weak — duplicate, stale |
| 9 | training-new.klingspor.com/?p=3275 | Scraped mirror | — | — | — | Weak — mirror |

**Weak count: 9 of 9.** Gate 4 passes. Corroboration: `content/keywords/2026-10-12-navratri-garba-dandiya/serps.md` row "navratri status for whatsapp 2026" — weak 6, digit (Chaitra 2026), bridgechronicle 2025, statesman 2025.

Competitor pages are not cited or linked. Fetched via ctx_fetch_and_index: #2, #3, #7 (others failed DNS/503/timeout, recorded above).

## Phase 2 — gap analysis

- **Table stakes:** ready-to-paste status lines; Navratri dates; WhatsApp "how to add a status".
- **The gap (none of the reachable pages cover it):** what Instagram story features actually do and which suits which Navratri moment; Close Friends mechanics; that poll voters are visible to the poster; WhatsApp Status limits (90 s, cannot be switched off), its three privacy settings, that mentions bypass the audience and allow resharing, that a status posted to a group reaches every member regardless; that public Instagram stories (archived ones too) are used to improve AI at Meta; that music stickers on archived photo stories may be muted; regional Dussehra dates; 2026's split Saptami / shared Ashtami-Navami.
- **Stale data:** digit and bridgechronicle carry 2025 or Chaitra 2026 dates.
- **Fan-out sub-queries → H2/FAQ:** what is a Navratri status; story ideas per day; which sticker; how long a status lasts / video length; who sees a status / Close Friends; English status lines; colours 2026/2027; Dussehra date; inviting one person.

**Angle:** Wins by being the only post in the top 10 that plans Navratri stories night by night with the Instagram feature and WhatsApp Status equivalent for each, sourced to Instagram's and WhatsApp's own help pages (24 h, 90 s, Close Friends, mention/group visibility), grounded in SubhSandesh's 38.5% password-protect rate and 48.3% phone-open share.

## Phase 3 — sources (all fetched 2026-10-12)

| Source | What was verified | Date | Notes |
|---|---|---|---|
| https://faq.whatsapp.com/454876960047011 (About status) | "share text, photo, video, and GIF updates that disappear after 24 hours"; "maximum duration for status is 90 seconds"; 3GP/MPEG-4; "not possible to turn off or disable WhatsApp Status" | none published | Rendered via json_cms_content (Googlebot UA) |
| https://faq.whatsapp.com/502161774931737 (How to manage status privacy) | default = all contacts; My contacts / My contacts except… / Only share with…; changes don't affect already-shared statuses; mentioned people/groups see it even outside the audience and can reshare; status posted to a group visible to all members regardless | none | |
| https://help.instagram.com/151273688993748/ (Using stickers) | countdown (name, date/time, reminders, notification at end); poll (swipe up to see how each person voted); questions (text or Music answers; shared response hides photo and username); music (song, lyrics style, part that plays); Add Yours (prompt; hide username from "Started by"); not all stickers available to everyone; unavailable in Japan and Europe | none | |
| https://help.instagram.com/1935507879999791/ (Archive stories) | stories saved to archive; archived photo stories with music/gif stickers may be muted; public stories incl. archived used to improve AI at Meta unless deleted or private | none | |
| https://help.instagram.com/2183694401643300/ (Close Friends story) | share only with list; disappear after 24 h; people know they're on it; green ring + label; no one can request to be added | none | "not notified when added/removed" verified on https://help.instagram.com/476003390920140/ (fetched, not linked) |
| https://phd.lib.uni-corvinus.hu/1413/ — Veloso da Silva (2025) PhD, Corvinus University of Budapest | 43 participants from 20 nationalities, six focus groups, 20 semi-structured interviews; stories "only visible for 24 hours unless saved as a Highlight"; open accounts visible to anyone on Instagram; participants describe stories as less curated/more fun than feed (FG02P08 quote) | 2025 (DOI 10.14267/phd.2025004; summary cover says 2024) | Scholarly, open access. Only the English thesis summary (24 pp.) was read, not the 9 MB full dissertation |

Fetched but not linked (to keep outbound links at 6): WhatsApp "How to create and share a status" (643144237275579: music on photo/video statuses), "How to see who viewed or liked your status" (1401592180746512: replies arrive in the shared chat), "Share status to other apps" (1551987998564481: cross-posted status uses Instagram's story privacy — a good fact left out for length), Instagram highlights (813938898787367), where a story appears (636136463228627), Close Friends list (476003390920140).

Rejected: "Effect of Close Friends Instagram Stories Feature Intensity…" (SYLECTION 2022, seminar.uad.ac.id, n=60, R²=0.189) — read in full, but its Methods section contains a pasted paragraph about Indomaret/Alfamart retail competition, so not cited. Social Media + Society (Sage) — banned publisher. BMIJ 2020 marketing paper — Turkish-language, marketing angle, not read.

Search terms tried (findpapers.mjs): "Instagram stories ephemeral self-presentation", "close friends audience Instagram stories privacy", "WhatsApp status India", "ephemeral social media Snapchat stories sharing". No peer-reviewed study of WhatsApp Status specifically, or of festival stories, was found.

Dates: Drik Panchang New Delhi (`geoname-id=1261481`) fetched for 2026 and 2027 — 2026 colours Orange, White, Red, Royal Blue, Yellow, Green, Grey, Purple, Peacock Green; Day 8 = 18 Oct (Saptami), Day 9 = 19 Oct (Ashtami + Maha Navami), Day 10 = 20 Oct Vijayadashami (New Delhi). 2027 colours Yellow, Green, Grey, Orange, White, Red, Royal Blue, Pink, Purple; Navratri 30 Sep–8 Oct, Vijayadashami 9 Oct. Bengal/Mysuru 21 Oct 2026 taken from BRIEF §1 (not re-fetched). Drik named in body, not linked or cited (no muhurat times stated).

URL overlap with b2 sibling `garba-invitation-video`: it cites faq.whatsapp.com/454876960047011 (About status). Kept here because it is the only live WhatsApp help page found that states the 90-second limit (the "create and share a status" page, which that sibling also uses, does not). Two posts = URL cap, not over it. The other five URLs are not used by any b2/b3 sibling at time of writing. 30 seconds is not printed anywhere.

## Brief claims checked

- Calendar, colours, 2027 Ashtami 7 Oct / Navami 8 Oct: confirmed against Drik.
- Brief prompt asked to "tie to facts.md only where genuine (phone-open share, password rate)": done; both carry weight only in the privacy/format framing.
- No brief claim found false.
