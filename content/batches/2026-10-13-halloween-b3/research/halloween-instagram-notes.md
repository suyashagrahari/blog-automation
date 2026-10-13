# Research brief: halloween instagram notes

Row 136 · slug `halloween-instagram-notes` · theme captions · weak 4/10 in plan · absorbs "halloween notes ideas" · batch 2026-10-13-halloween-b3 · written 2026-10-13

## Phase 0: first-party data

There is no Halloween or Instagram-Notes data in `content/facts.md` (BRIEF §3). I used four platform-wide lines, all relevant because Notes live in the phone inbox and are a semi-private format:

- 48.3% phone-open (first 150 words): Notes are a phone-inbox feature.
- 38.5% password-protect (first 150 words): the same privacy instinct as choosing Close friends.
- 90.9% published and shared, plus 11.1 views per page: used in the template section only.

The table has no first-party column. This is an honest audit failure, not a forced number.

## Phase 1: SERP

**Searches used: 2.**

1. WebSearch (US index) for "halloween instagram notes". It worked; it was not capped.
2. DuckDuckGo html (`site:help.instagram.com notes`), lower confidence. I used it only to find the Help Centre page IDs, not to measure the SERP.

| # | Result | Type | Fetched? | What it optimises for | Direct answer | Data and date | Weak? |
|---|---|---|---|---|---|---|---|
| 1 | phonearena.com, "Instagram unveils spooky suite of features for Halloween" | Tech news | 403, judged from snippet only | News about the year's Halloween features | n/a | 2024 campaign | No (authority) |
| 2 | static.intrafocus.com/?p=70639 | Hijacked-subdomain spam | Not analysed | "Halloween note" badge spam | n/a | none | **Yes** |
| 3 | cmc.imexhs.com/?p=16356, "How to Get the Halloween Note" | Hijacked-subdomain spam | Connect timeout | Same | n/a | none | **Yes** |
| 4 | cmc.imexhs.com/?p=23568 | Spam | Not analysed | Same | n/a | none | **Yes** |
| 5 | socialmediatoday.com, "Instagram Announces Halloween-Themed Activations" (also listed under a second URL) | Trade news, about 500 words | Full | News: secret keywords in DMs and Notes, chat theme, Add Yours templates, font | Para 2 | Published Oct 24, 2024; no limits or rules given | No |
| 6 | training-new.klingspor.com/?p=24531 | Spam | Not analysed | Same | n/a | none | **Yes** |
| 7 | canva.com/fr_fr, Instagram post templates (French) | Competitor template gallery, wrong language and format | Snippet only | Templates for selling posts | n/a | none | **Yes** (off-intent) |
| 8 | hercampus.com, "How To Use Instagram's Halloween 2024 Features" | Lifestyle explainer, about 600 words | Full | How to trigger the 2024 effects (Secret Phrases, Add Yours, Halloween font, chat themes) | Late; long intro | 2024; "Oct 24–Nov 3" window | No |

There was no AI Overview and no featured snippet visible. The SERP leans towards news about the "how to get the Halloween note effect" intent. **No page in the top results lists note ideas, gives the 60-character limit or says who can see a note.**

**Weak count in the top 10: 5** (four spam subdomains plus the off-intent Canva FR page). Gate 4 passes.

## Phase 2: gap analysis

- **Table stakes:** Halloween + Instagram Notes; the seasonal effects.
- **Gap:** an actual list of note texts. Also missing from every page: the verified 60-character limit, the audience options (follow-back or Close friends), the 24-hour duration, one note at a time, private replies, and the Spotify note rules. None of the pages compares Notes with Stories or captions.
- **Stale data:** every competitor describes the 2024 campaign. I could not verify whether a 2026 campaign exists on the Help Centre, so the post makes no effects claim (see FAQ 8).
- **Fan-out sub-queries:**
  - What is a note and what are its rules? → H2
  - Note ideas → H2 with 7 H3s
  - Notes vs Stories vs captions → H2 plus table
  - How to fit 60 characters → H2
  - Who sees my note? → FAQ
  - Can I add music? → FAQ
  - Are replies public? → FAQ
  - Halloween effects → FAQ
  - Something longer for one person → H2
- **Angle:** wins by being the only post that gives 63 original Halloween notes, each counted under Instagram's verified 60-character limit and grouped by the reply you want, with a dated Notes vs Stories vs captions table. It uses the 48.3% phone-open and 38.5% password-protect rates.

## Phase 3: sources (all fetched 2026-10-13)

| Source | Claim used | Read | Subject test | Cap note |
|---|---|---|---|---|
| help.instagram.com/427590629371317, "Share a note with others on Instagram" | Up to 60 characters; Followers you follow back or Close friends (only those who follow you back); top of inbox and profile for up to 24 h; one note, a new one replaces it; delete any time; only you see likes and replies; a reply starts a private conversation; GIF/video notes are not shown on the profile; review can continue after 24 h | Full. The page is JS-rendered; I extracted the embedded CMS JSON with a Googlebot UA | Yes, the platform behaviour itself | Notes page, unused in b1, b2 and b3 |
| help.instagram.com/1048118103140467, "Share music from Spotify as a note" | Real-time updates for up to 24 h, or until 30 min after playback stops; a new note replaces it | Full | Yes | New URL |
| help.instagram.com/1660923094227526, "Stories" | Stories disappear after 24 h unless added to Highlights; private account means followers only; public stories may appear in Search & Explore | Full | Table fact-check; fails the swap test | Used in b1 only. help.instagram.com is in 2 b3 posts including this one |
| developers.facebook.com, IG User Media reference | Caption maximum 2,200 characters | Full (that line). I did not use the "30 hashtags" figure on the same line, because b1 found a newer 5-tag limit on the Help Centre | Table fact-check; fails the swap test | 0 other b3 posts |
| spir.aoir.org, Cassidy, Matamoros Fernández and Thomson, AoIR 2019, published 2019-10-31 | 400+ Instagram stories from 135 active accounts, 2019 Sydney Gay and Lesbian Mardi Gras. Preliminary findings: the "ask me a question" feature afforded direct communication with audiences, and self-deprecating humour was salient | Full extended-abstract PDF (open access) | Yes: ephemeral Instagram posting around a festival | Scholarly (AoIR selected papers); new domain |
| europepmc.org PMC12052294, Minich, Kerr and Moreno, *JMIR Formative Research*, 28 Apr 2025 | 6 focus groups, 31 adolescents with mean age 16.2; 4 themes; adults likely to misinterpret emoji used between adolescents | Full text, CC BY | Yes: emoji in short text messaging | Peer-reviewed, open access; new paper |

Other fact-checks, read but not linked (I kept outbound links at 6):

- help.instagram.com/476003390920140, Close Friends: the list applies to posts, notes, reels and stories, and people are not notified.
- help.instagram.com/517073653436611, public vs private: on a public account anyone sees feed photos; on a private account, only followers. This supports the caption row of the table.

Rejected or avoided:

- socialmediatoday.com, hercampus.com and phonearena.com rank top 5 for this keyword, so I treated them as competitors and did not cite them.
- The papers on the banned list (Veloso da Silva, Purmiasa, Maíz-Arévalo).
- Frontiers, Taylor & Francis, SAGE and Elsevier hits from findpapers. This ruled out Bayer et al. 2016 (T&F) and Piwek & Joinson 2016 (Elsevier), the classic Snapchat ephemerality papers.
- The PsyArXiv Instagram-DM preprint, because it is not peer-reviewed.

findpapers queries tried:

- "ephemeral social media messages connection"
- "Snapchat ephemeral communication close relationships"
- "phatic communication social media small talk"
- "Instagram direct messaging private interaction young adults"
- "Snapchat"
- "Instagram stories ephemeral sharing"
- "friendship maintenance social media brief interactions"
- "mobile messaging social connectedness wellbeing"

## Originality checks

- **Character count:** all 63 notes are at most 60 characters by code-point count. The longest is exactly 60 characters, and none uses emoji.
- **Overlap:** I ran a 5-word shingle check of every copyable note against all b1, b2 and b3 blogs (bodies plus FAQs). There were 0 hits after I replaced one line that matched b1 `halloween-quotes`. The prose shares only spec-feature phrasing about the template ("Will you be my boo", "up to six photos") with many siblings, and I paraphrased it where I could.
- **Siblings:** I read the H2s of b1 `halloween-captions-for-stories`, b1 `halloween-one-word-captions`, b2 `halloween-captions-for-instagram` and b1 `halloween-whatsapp-status`.
  - This post covers the Notes format, which none of them covers.
  - It has no `/blog/` links.
  - Its Stories material is limited to one table row.

## Brief claims checked

- The task prompt says notes are visible to "followers you follow back / close friends". This is **confirmed**, with a detail the prompt missed: a Close friends note is seen only by Close friends **who follow you back**.
- Music: notes can carry music, but only through a linked Spotify note. This is a separate Help Centre page, and that note replaces any text note.
- The "Halloween note" in the SERP is a 2024 seasonal keyword effect, not a permanent feature. The Help Centre (checked 13 Oct 2026) documents no Halloween note effect.
