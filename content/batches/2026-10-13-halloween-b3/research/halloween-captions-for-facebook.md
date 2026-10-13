# Research brief: halloween captions for facebook

Row 132 · slug `halloween-captions-for-facebook` · absorbs "halloween facebook post ideas" (H2: "10 Halloween Facebook post ideas beyond a caption") · batch `2026-10-13-halloween-b3` · written 2026-10-13.

## Phase 0: first-party data

No Halloween usage data exists in `content/facts.md` (BRIEF §3). `npm run facts` was not run. Platform-wide lines used, each labelled "platform-wide, not Halloween data" in the body:

- 48.3% of shared pages are opened on a phone (27,725 of 57,456 views), measured 2026-09-24. Used in the opening.
- 38.5% of creators password-protect their page before sharing it (2,000 of 5,199), measured 2026-09-24. Used in the opening; it bears on the privacy angle.
- Average views per created page: 11.1, measured 2026-09-24. Used in the wrong-choice section.

Template features come only from `template-spec.md`: up to six photos, a letter, knock on a haunted house, carve a jack-o'-lantern, a letter read in the attic, family mode question "Will you be my favourite little pumpkin?", opens in any phone browser. Premium: voice note up to 60 seconds.

## Phase 1: SERP

**Source: WebSearch (US index), 1 search. Lower confidence than a Google SERP.** The query was "halloween captions for facebook". No second search was used.

| # | URL | Type | Facebook-specific? | Notes |
|---|---|---|---|---|
| 1 | socialchamp.com/blog/halloween-captions/ (plus 3 duplicate URLs: ?p=, /id/, wp-json) | SaaS scheduler listicle, "200 captions", "Updated 2026", first published 23 Oct 2024 | One H3: "Trending Halloween Captions For Facebook", about 25 one-liners of 2 to 6 words | Third person, product CTA (AI caption generator). No privacy settings, groups, Events or Memories. Incumbent. |
| 2 | engoo.com/blog/?p=7179 | ESL blog, "20+ captions for Instagram" | Mentions Facebook once in the intro | Starts with a vocabulary glossary and explains each pun. Off-intent for Facebook. |
| 3 | plannthat.com/the-best-instagram-captions-for-halloween | SaaS listicle | No, Instagram only | About 2022 (WebSearch's summary says 2022), stale. Pumpkin, vampire and ghost puns. |
| 4 | subtitlebee.com/blog/50-best-halloween-captions-for-instagram-2025 | SaaS listicle dated 17 Oct 2025 | No | Short, funny, spooky and cute groups. Stale year in the URL. |
| 5 | subtitlebee.com …-2024 | The same site's 2024 version | No | Stale year. |
| 6 | mercury.uvaldetx.gov/?p=37432 | **Hijacked-subdomain spam** ("Spooky Halloween Cover Photos for Facebook FREE") | — | Counted as weak and not analysed (BRIEF §4). |

**Weak count:** the index returned only 6 distinct hosts. The weak ones are Plann (stale, Instagram-only), both SubtitleBee pages (stale year, Instagram), Engoo (off-intent ESL) and the spam subdomain. That makes 5 of the 6 measured weak. PLAN.json says 4/10, so this measurement does not contradict the plan. The Gate 4 abort does not apply.

**Where the answer appears:** none of the pages answers "what makes a Facebook caption different". Social Champ places its Facebook block about halfway down a 200-line list.

**Data cited:** none of the five cites any data. None mentions audience settings, tagging, group posts, Events, Memories or contest rules.

## Phase 2: gap analysis

- **Table stakes:** grouped lists of short captions (funny, spooky, cute) and family-photo lines.
- **The gap:** no page sorts captions by **where they are posted on Facebook** (album, grandparent tag, neighbourhood group, school/PTA page, Event description, Memories reshare, long story post). None covers **who sees a tagged photo**, **Facebook's promotion rules** for costume contests, or **who is actually on Facebook**.
- **Stale data:** Plann (2022) and the SubtitleBee 2024 and 2025 pages.
- **Fan-out sub-queries:** what to write in a Facebook Halloween post; how long a Facebook caption can be; who sees kids' photos when I tag grandma; can I run a costume contest; what goes in an Event description; what to write on a Memory; is Facebook used by older people; post ideas beyond captions.
- **Angle (batchMeta.angle):** this post wins by being the only one that sorts captions by Facebook-native post type and pairs each type with an audience setting. It uses Pew's 2025 age-by-platform figures and Facebook's own tagging and promotion rules, alongside the platform-wide phone-open and password rates.

## Phase 3: sources (all fetched 2026-10-13)

| Source | What it supports | Published | Read |
|---|---|---|---|
| pewresearch.org Social Media Fact Sheet | 5,022 US adults surveyed 5 Feb to 18 Jun 2025. Facebook use: 68% of 18–29, 80% of 30–49, 74% of 50–64, 57% of 65+. Instagram: 80%, 62%, 40%, 19% | 2025-11-20 | Full page (age tab) |
| facebook.com/policies/pages_groups_events/ | Promotions need a complete release of Facebook and a no-sponsorship acknowledgement. "Tag your friends in this post to enter" is not permitted | Last revised 2018-03-08 | Full text (section III.E) |
| facebook.com/help/211513702214269 | Public / Friends (+ friends of anyone tagged) / Only Me / Custom. Untick "Friends of those tagged" | Undated | Read via m.facebook.com/help/www/ (desktop page is JS-rendered). The 120939471321735 page confirmed that a per-post choice does not change the default |
| Europe PMC PMC13544962, Hurd et al., *The Gerontologist* 2026 | 20 adults aged 65–89. ICTs alleviate loneliness but undermine intimacy and spontaneity | 2026-08-01 | Abstract only. CC BY-NC-ND, so it is cited and linked, not reused |
| Europe PMC PMC13492726, Carlin et al., *JMIR Pediatrics and Parenting* 2026 | 22 mothers used Facebook private groups for information seeking, engagement and social connectedness | 2026-08-20 | Abstract only |
| Europe PMC PMC13510256, Tosuntaş & Griffiths, *Behavioral Sciences* (MDPI) 2026 | Sharenting scale tested on 1,483 parents. Sharenting is associated with FOMO, social presence and social media addiction | 2026-08-18 | Abstract only |

- **Subject test:** Pew, Carlin and the two Facebook pages are about the platform's audience and behaviour. **Peer-reviewed open access:** Carlin (CC BY) and Tosuntaş (CC BY).
- **Spent sharenting papers avoided:** Motevalli, Ferrara and Such were not used. PMC12344405 (F1000 review) has 10 uses across batches 1–3 and was not used either.
- **Banned publishers avoided:** Frontiers and SAGE. findpapers hits that were rejected: Frontiers sharenting 2026, Frontiers intergenerational bonding 2025, and PSPR "aging poorly" (SAGE).
- **findpapers queries tried:** "Facebook On This Day memories reminiscence", "grandparents grandchildren Facebook social media contact", "older adults Facebook use family connection", "Facebook self-presentation photo sharing audience", "parents posting children photos Facebook privacy settings", "Facebook groups neighborhood community", "context collapse social media audience", "revisiting past social media posts nostalgia", "Facebook use older adults loneliness grandparents". No open-access study of Facebook Memories or "On This Day" was found, so that section relies on no source.
- **Caps:** capcheck was run and is clean. None of these URLs, papers or domains appears in any other b3 post.

## Brief claims checked

- **"Facebook's audience skews older" is only partly true.** Pew's 2025 data shows adults aged 30–49 use Facebook most (80%), and 68% of 18–29s use it. Facebook skews older only **relative to Instagram, TikTok and Snapchat**: at 65+ it is 57% for Facebook against 19% for Instagram. The post says so explicitly. The figures are for **US adults only**.
- **Contest rules on facebook.com/policies are verified**, but the governing page is dated 8 March 2018 and is the Pages terms. A no-prize comment vote among friends is not described as a promotion.
- **The audience selector lists four options** (Public, Friends, Only Me, Custom), not only "Public/Friends/Custom". The tag-expansion rule is the most useful finding.

## Overlap check

A 5-word-gram check of every caption, list item and table row against all b1, b2 and b3 blog files found 0 hits. The remaining prose hits are standard platform-fact and template-spec phrasing.
