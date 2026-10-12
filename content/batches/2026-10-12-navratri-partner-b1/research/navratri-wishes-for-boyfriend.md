# Research brief — navratri wishes for boyfriend

Batch `2026-10-12-navratri-partner-b1` · slug `navratri-wishes-for-boyfriend` · cluster romantic-wishes · bodyLanguage `en` with a Devanagari/Hinglish section · no autocomplete row (demand inferred from the romantic cluster).

WebSearch calls used: **1** (SERP). Research used findpapers.mjs (Crossref + Europe PMC), the Europe PMC REST API and OpenAlex — no WebSearch cost. No browser tools.

## Phase 0 — first-party data

facts.md read directly (no `npm run facts`). No dandiya-partner or Navratri usage data exists, and none is implied.

| Fact (verbatim in batchMeta.factsUsed) | Where used | Why it bears on the question |
|---|---|---|
| 48.3% of shared pages opened on a phone (2026-09-24) | First 150 words, table | The wish lands on a lock screen: governs length and morning-text format |
| 38.5% of creators password-protect (2026-09-24) | First 150 words, table | Private-vs-public choice; stated as platform-wide, all page types |
| 13.6% of miss-you senders record a voice note, 29 of 214 (2026-09-25) | Voice-note H3, table, FAQ | Only voice-note behaviour on record; caveated as 214 pages, miss-you only |
| Raksha Bandhan 2026 lead time, n=89, 49.4% on the day (2026-09-09) | Invitation H2, table | Labelled in body as Raksha Bandhan analogue, not Navratri data |

Template spec (`template-spec.md`) used for the /dandiya-partner description only: nine lines, six photos, sticks-clash envelope, colour pick, 1080×1920 Dandiya Pass, No → second Yes after five tries, no app/account, English UI, one-to-one.

## Phase 1 — SERP (US-served, WebSearch, 2026-10-12)

Query: `navratri wishes for boyfriend`. 9 results returned. Positions are **US-served (WebSearch)**; India-served positions unavailable this run.

| # | URL | Date | Words / structure | Boyfriend content? | Direct answer | Weak? |
|---|---|---|---|---|---|---|
| 1 | fithindi.thequint.com (AMP) Navratri 2021 | 7 Oct 2021 | ~300 words, 6 generic wishes + image credits to 365greetings/askideas/dgreetings | None | Intro about festival, then list | Yes — stale 2021, generic |
| 2 | lutonhoo.oandg.co.uk "50+ Navratri wishes in Hindi" | — | Fetch failed (DNS ENOTFOUND) | — | — | Yes — scraped mirror |
| 3 | thequint.com AMP (same 2021 article) | 7 Oct 2021 | duplicate of #1 | None | — | Yes — duplicate, stale |
| 4 | eduyush.com/blogs/lifestyle/happy-navratri-wishes | "Last updated: September 2026" (SERP title still says 2025) | 170+ wishes, 13 sections (short, Hindi, day-wise, WhatsApp, family, business, garba, heartfelt, creative, inspirational, Ashtami/Navami, status, long), date table, FAQ | **None** — no partner/boyfriend section | Bold first paragraph with 2026 dates | Fresh and strong, but off-intent for "boyfriend". Day-wise list puts Mahagauri on 18 Oct, which BRIEF §1 flags as wrong for 2026 |
| 5 | eduyush.com/en-us/ (same page, US locale) | same | duplicate | None | — | duplicate |
| 6 | outlookindia.com brand-studio Sharad Navratri 2024 | 26 Sep 2024 | ~1,500 words; traditional / joyful / family message lists | None | Long intro paragraph | Yes — stale 2024 sponsored |
| 7 | bootsnipp.com/snippets/n43VQ "Navratri 2021 wishes" | 2021 | code-snippet spam | None | — | Yes — spam |
| 8 | lbas.lboro.ac.uk/wishes/navratri-wish.html | — | spam subdomain | — | — | Yes — spam mirror |
| 9 | smartpuja.com/blog/navratri-wishes "14 Best Navratri Wishes 2023" | 2023 | Fetched HTML served the puja-booking shell; wish list not in fetched content | None visible | — | Yes — stale 2023 |

**Weak count in top 10: 8 of 9** (only eduyush is fresh, and it is off-intent). Gate 4 does not trigger. Corroborated by `serps.md`: "navratri wishes 2026 for girlfriend boyfriend" 8/10 weak, "none romantic".

Competitors (eduyush, Quint wish lists, Outlook brand studio, SmartPuja, mirrors) were read for research only. None is linked or cited.

## Phase 2 — gap

- **Table stakes:** generic blessing lines, festival dates, a Hindi set, garba/dandiya lines, Ashtami/Navami lines.
- **The gap:** no page in the top 9 writes for a boyfriend at all, and no page addresses *how or when* a wish is sent (text vs voice vs story vs DM vs handwritten), or how to reply when he wishes first.
- **Stale data:** Quint 2021, Outlook 2024, SmartPuja 2023; eduyush's day-wise list maps Mahagauri to 18 Oct, but Drik Panchang (New Delhi) shows Ashtami/Mahagauri puja on 19 Oct 2026, shared with Maha Navami.
- **Fan-out sub-queries → H2/H3/FAQ:** what to text him on day 1; voice-note length; public story vs private; note for his kurta; Ashtami 2026 date and midnight timing; reply when he wishes first; long-distance boyfriend; non-religious boyfriend; Hindi/Hinglish lines; asking him to be a dandiya partner.
- **Sibling split:** love = night-by-night + tone; wife/husband = married-life situations; girlfriend = relationship stages. This post = delivery channel and timing, plus four boyfriend types (not religious / religious / away / teasing about dandiya). No sibling `/blog/` links in body (BRIEF §8).

**Angle:** wins by being the only post that organises Navratri wishes for a boyfriend by how and when they are sent, with the 2026 shared Ashtami/Navami date, SubhSandesh's 48.3% phone-open and 38.5% password rates, and two channel-choice studies.

## Phase 3 — sources (all fetched)

| Source | What it says (verified) | Read | Subject test | Swap test |
|---|---|---|---|---|
| Taş & Eker 2026, *BMC Psychology* 14 — https://europepmc.org/article/PMC/PMC13072600 | Digital Boundary Ambiguity Scale; 673 adults in romantic relationships in Turkey (365 EFA, 308 CFA); ambiguity includes uncertainty over sharing private relationship moments on public platforms; correlated negatively with dyadic trust. CC BY-NC-ND (cited/linked only). Published 2026-02-12 | Full text (Europe PMC XML) | Pass (couples' online posting) | Fails — could sit in any romantic-wishes sibling |
| Sherman, Michikyan & Greenfield 2013, *Cyberpsychology* 7(2) — https://cyberpsychology.eu/article/view/4285 | 58 young women (29 close-friend pairs), in-person/video/audio/IM; each reduction in cues reduced self-reported bonding; in-person > audio, in-person > IM, video > IM significant; not every gap significant. **Friends, not couples; live chat, not voice notes** — caveated in body | Full text | Pass (channel choice) | Fails — same reason |
| WhatsApp Blog, 30 Mar 2022 — https://blog.whatsapp.com/making-voice-messages-better | 7 billion voice messages a day on average; Draft Preview, pause/resume recording | Full page | Pass (voice-note platform behaviour) | Borderline |
| Drik Panchang 2026 Shardiya Navratri, New Delhi — `…?geoname-id=1261481&year=2026` | Day 1 Sun 11 Oct; Durga Ashtami, Mahagauri puja, Sandhi Puja, Maha Navami Mon 19 Oct; Parana/Navami Homa Tue 20 Oct | Full page | Date fact-check (cap-exempt) | n/a |

Rejected / not used:
- **Kocur et al. 2025, PLOS One (PMC12193689)** — public vs private displays of affection, 461 adults in Indonesia/Nepal/Poland. Read in full and first drafted in, then **removed**: navratri-wishes-for-girlfriend landed citing the same URL mid-run, and the task asked to avoid sibling sources.
- Long-distance texting (JSPR 2021, PMC8669216) — Sage, publisher at cap.
- Changing Facebook profile pictures to dyadic photos (CHB 2021) — already used by garba-partner-captions-for-instagram.
- Yang 2018 NTU thesis "Include me in your Facebook" — OA PDF returned HTTP 405; not read, not cited.
- "Voice Messages Reimagined" (Mensch und Computer 2023, ACM) — OA per OpenAlex but dl.acm.org returned 403; abstract only (focus group); not cited.
- Saudi WhatsApp text vs voice (JLTR 2025) — publisher quality doubtful; not cited.
- Instagram Close Friends help page — fetched empty shell; the feature is mentioned in body without a citation.

findpapers queries tried: "public displays of affection Facebook romantic relationship"; "romantic partners communication channel text messaging voice call relationship satisfaction"; "relationship visibility social media posting partner tagging"; "voice messages WhatsApp intimacy"; "effects of text audio video in-person communication bonding between friends"; "voice versus text connection misunderstanding hear you"; "couples relationship status profile picture dyadic photos Facebook official"; "handwritten letter versus email perceived effort sincerity"; "Instagram close friends stories audience"; "voice notes young adults mobile messaging audio messages"; "romantic partner posts Instagram relationship disclosure India young adults"; "posting about romantic partner on social media relationship quality"; "online public displays of affection couples". **No study of festival greetings between dating partners was found.**

## Internal links

/dandiya-partner (mandatory, after the "become an invitation" setup; English UI and one-to-one limits stated), /missyou-gf (for a boyfriend away all festival; features from facts.md miss-you block), /dedication (voice-led alternative). All from TEMPLATE_LINKS.

## Calendar claims

Sharad Navratri 11–19 Oct 2026; Ashtami + Maha Navami Mon 19 Oct (Drik, New Delhi); 2027 Navratri 30 Sep–8 Oct (BRIEF-verified; 2027 page not fetched, no 2027 Ashtami date printed). No Dussehra date printed, so the regional 20/21 Oct caveat is not needed.

## Brief claims checked

- BRIEF §4 says eduyush titles "still say 2025": the SERP title for this page does, but the page itself reads "Last updated: September 2026" with 2026 dates — consistent with the BRIEF's own caveat.
- No BRIEF claim found false for this row.
