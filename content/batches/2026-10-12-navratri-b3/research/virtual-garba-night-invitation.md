# Research brief — virtual-garba-night-invitation

Keyword: **virtual garba night invitation online** (bodyLanguage `en`). Also covers: virtual garba, online garba night, dandiya partner online, digital dandiya invitation, virtual navratri celebration ideas. The site owner asked for this phrasing; there is no autocomplete row.

## Phase 0 — first-party data

I read `content/facts.md` directly; `npm run facts` was not run. No Navratri, dandiya-partner or video-call data exists. These lines bear on the invitation itself:

- 48.3% of shared pages are opened on a phone (27,725 of 57,456 views), measured 2026-09-24. The invitation and the call link have to work on a phone.
- 38.5% of creators password-protect their page before sharing it (2,000 of 5,199), measured 2026-09-24. Used to argue for keeping the call link private.
- Raksha Bandhan 2026 lead time, n=89: 49.4% of pages built on the festival day itself; median lead time 0 days, measured 2026-09-09. Labelled in the body as the nearest festival analogue and used to argue for sending a day early to guests abroad.

Gate: 3 facts, 2 of them in the first 150 words. The gate is thin, because the data is about invitations in general and says nothing about virtual garba. The template spec (nine lines, six photos, Add to calendar, 1080×1920 pass) is first-hand product fact.

## Phase 1 — SERP (US-served, WebSearch, 2026-10-12)

| # | URL | What it is | Weak? | Direct answer? | Notes |
|---|---|---|---|---|---|
| 1 | blog.1invites.com/vibrant-navratri-garba-night-invitation-template | Card-design blog for an invitation maker (competitor class) | Weak for intent: about a physical or offline event card, nothing virtual | No | About 900 words of design description (border, colours, motifs) |
| 2 | blog.1invites.com/elegant-navratri-invitation-template | Same publisher, same template | Weak | No | "Magical glow" design copy, no wording or logistics |
| 3–5 | lists.stevens.edu/pipermail/igsa/2008-October/… | 2008 student mailing-list posts | Weak (stale, mailing list) | n/a | #3 returned 404 when fetched |
| 6 | ls.plattsburgh.edu/pipermail/student-digest/2023-October/006271 | 2023 student-club email | Weak (mailing list, in person) | n/a | Has the date, venue and time, plus an aarti 7:30 then garba 8:00 schedule; useful only as a wording shape |
| 7 | ubwp.buffalo.edu/gsa/calendar/2018-10-13 | 2018 campus calendar entry | Weak (stale) | n/a | Not fetched |
| 8 | venuelook.com/blog/how-to-host-a-garba-night… | Venue marketplace guide, "Happy Navratri 2025" | Weak for intent: offline venue hosting | No | Step 9 is "create colorful e-invites and share on WhatsApp or email". Nothing on online garba |
| 9 | schoolcraftconnection.com/28872/… | College paper, 23 Oct 2020 | Weak (2020 pandemic news) | n/a | The only virtual result: an ASA garba on Zoom, 7–9:30 pm |

**Weak count: 9 of 9 for this intent.** No result explains how to host or invite people to a garba that happens online. This matches serps.md ("virtual navratri celebration online garba", 8 of 10 weak, 2020 pandemic pages). Competition is close to zero, but so is demand.

## Phase 2 — gaps

- **Table stakes:** event details (date, time, link) and a festive tone.
- **Gap (all of it):** no page compares the call platforms on their real limits, explains why the beat drifts on a call, gives a run-of-show sized to a time cap, gives a time-zone line in the invitation, or covers hybrid tripod set-up.
- **Stale:** every on-topic page is from 2020.
- **Fan-out:** which app; how long a free call lasts; how many can join; why the music is out of sync; how to include a bedridden grandparent; what to write; what time it is abroad; hybrid set-up; inviting one person; when not to do it.

**Angle:** this wins by being the only post that treats a virtual garba as a present-day hosting problem. It takes provider-sourced time limits (Meet 60 min, Zoom Basic 40 min), the 25–30 ms clapping threshold, a run-of-show that fits under Meet's cap, and invitation wording with a time-zone line, and grounds them in SubhSandesh's phone-open and festival lead-time data.

**Split from siblings:**
- navratri-wishes-long-distance owns the time-zone table and the nine-night rituals apart. This page references it in prose and does not repeat it.
- dandiya-invitation-card-online-free owns card tools.
- dandiya-night-invitation-message owns WhatsApp surfaces.
- how-to-host-garba-night-at-home (b3) owns the physical home party.
- This page owns a garba that happens online: platform, latency, run-of-show, wording with link, and hybrid tripod set-up.

## Phase 3 — sources (all fetched)

1. Tsioutas & Xylomenos, "Assessing the Effects of Delay to NMP via Audio Analysis", SN Computer Science, 2022-12-26. Europe PMC PMC9791973. **Full text read.** Findings used: voice needs at most 100 ms; clapping to a beat becomes problematic above 25–30 ms; 11 pairs of musicians held tempo at up to 40 ms one-way; sound travels about 3 ms per metre. It is peer-reviewed and in the PMC OA subset. It passes the subject test because it is about why people cannot keep a beat together over a network.
2. Robin et al., "Usability of Videoconferencing for Physical Exercise Interventions in Older Adults: Scoping Review", JMIR Rehabil Assist Technol, 2025-09-18. PMC12445624, CC BY. **Full text read.** Findings used: 14 studies from 2,506 records; video calls can deliver synchronous exercise to older adults; technical support mainly dealt with connection, audio and hardware problems. Relevant to grandparents and bedridden guests.
3. Frøystad, "Worship and the virus in Hindu India", Approaching Religion 11(2), 2021-11-22, journal.fi, CC BY 4.0. **Abstract only:** the PDF link returned an HTML viewer. Finding used: the pandemic accelerated the move to online services at prominent temples, and most changes were ephemeral.
4. Google Meet Help 7317473 (undated). Personal accounts allow 100 participants. Without a subscription, a computer-hosted meeting runs 24 h one-on-one or 60 min for 3 or more people, with a chime at 50 min.
5. Zoom Meetings plans page (undated). Workplace Basic allows 40 min and 100 participants; Pro allows 30 h. The support.zoom.com KB articles found by the search are JS-rendered and came back empty to every fetcher, so I cited Zoom's own plans page instead.
6. WhatsApp Blog, Communities announcement, 2022-04-14: "one-tap voice calling for up to 32 people". WhatsApp's group-video help pages came back empty or 404, so **no video cap is printed**.

Searches tried: networked music performance latency; time delay ensemble clapping synchronization; online religious ritual video conferencing pandemic diaspora; dancing together video call social connectedness; Navratri garba online virtual pandemic (no garba-specific study exists); online dance class videoconference; Hindu festival digital religion livestream; videoconference fatigue self-view.

Caps: capcheck is clean, with no banned URLs. europepmc is cap-exempt. support.google.com is now at 2 posts.

WebSearch calls: 2. One was the SERP; the other found the Zoom and WhatsApp help-page URLs, restricted to their domains.

## Brief and prompt claims checked

- "Participant and time limits from each provider's own help page": this held for Google. For Zoom it held only via the plans page, because the KB pages are unreadable. For WhatsApp video it was not verifiable.
- "SERP = 2020 pandemic pages (8 weak)": confirmed. The exact keyword's SERP is 9 of 9 weak.
- Dates: Navratri 2027 (30 Sep – 8 Oct) and Sharad Purnima garba on 25 Oct 2026 are cited as BRIEF-verified. No drikpanchang page was fetched.
