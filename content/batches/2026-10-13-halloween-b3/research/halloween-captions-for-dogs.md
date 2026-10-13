# Research brief — halloween captions for dogs

Row 131 · slug `halloween-captions-for-dogs` · theme captions · absorbs "halloween instagram captions for dogs", "dog halloween captions" · batch 2026-10-13-halloween-b3 · written 2026-10-13

## Phase 0 — first-party data

No Halloween usage data exists in `content/facts.md` (BRIEF §3). Platform-wide lines used, labelled as platform-wide in the body:

- 48.3% of shared pages are opened on a phone (27,725 of 57,456 views) — measured 2026-09-24 → a caption is read on a phone, so the joke goes first.
- Average views per created page: 11.1 — measured 2026-09-24 → a private page reaches a small audience; contrast with a public pet-account post.
- 38.5% of creators password-protect their page before sharing it (2,000 of 5,199) — measured 2026-09-24 → many people prefer a private audience; used in the "wrong choice" section.

The template spec (`template-spec.md`) is first-hand product fact; only its listed features are described.

## Phase 1 — SERP (2 searches used of 2)

**Search 1: WebSearch (US index), 2026-10-13.** 9 results returned: 8 elitedaily.com pages (2017–2022 listicles, several now redirected into the same two URLs) + 1 static.intrafocus.com hijacked-subdomain spam. Weak: 1/9 (spam). Elite Daily is a strong domain but its pages are stale (last modified 2022-10-14).

**Search 2: DuckDuckGo html, lower confidence, 2026-10-13.** howitsee.com (×2), embroly.com (apparel shop blog), elitedaily.com, quoteprayers.com, breathetoinspire.com, sugarthegoldenretriever.com, creativetacos.com, serendipity-adventures.com, intrepidquips.com. Weak: 8/10 (small quote blogs and a shop blog; only Elite Daily has domain strength). Row plan said weak 4/10; my measurement is 1/9 (US WebSearch) and 8/10 (DDG). Gate 4 not triggered.

### Top 5 analysed (fetched in full with ctx fetch, all 200)

| # | Page | Words (approx, incl. chrome) | Structure | Direct answer | Data / dates | Format | Tone / optimising for |
|---|---|---|---|---|---|---|---|
| 1 | elitedaily.com/p/32-instagram-captions-for-dogs… (→ "52 Downright Adorable Captions For Your Pup's Halloween Costume") | ~770 | H1 + one flat list | Intro then list | No data; published 2017-10-04, modified 2022-10-14 | List only; no table, no FAQ | Breezy listicle; pun captions |
| 2 | elitedaily.com/lifestyle/dog-halloween-costume-puns-quotes ("60 Clever Quotes…") | ~835 | H1 + flat list | Intro then list | No data; 2018-09-21, modified 2022-10-14 | List only | Same; costume puns |
| 3 | howitsee.com/halloween-quotes-for-dogs | ~1,000 | 5 H2s: spooky / funny / Instagram-ready / short / costume-specific | First paragraph | No data; 2025-08-06 | Lists, emoji headings, no table/FAQ | Mood categories |
| 4 | embroly.com/blogs/news/dog-halloween-captions (apparel shop) | ~3,080 | 4 H2s × 3 H3s (wordplay, funny, sayings, you-and-puppy) | After shop chrome | No data, no date | Lists, FAQ schema | Mood + "matching costume" — sells dog-mom apparel |
| 5 | quoteprayers.com/halloween-dog-quotes | ~3,670 | Funny / heartfelt / prayers / how to use (incl. "social media captions & hashtags") | Intro paragraph | Mentions research generically, no citation; 2025-07-30, modified 2025-12-13 | Lists, FAQ heading | Quote farm; "prayers for dogs" |

## Phase 2 — gap analysis

- **Table stakes:** pun captions, funny captions, costume-specific captions, short captions, owner-and-dog captions.
- **The gap:** none sorts captions by *who is speaking* (dog's voice vs owner's voice) — the core decision on a pet account. None covers the refused-costume photo, senior dogs, multi-dog households or dog-and-kid photos as distinct photo types. None gives hashtag limits or alt text. None cites any research or dated source. None has a table.
- **Stale data:** Elite Daily pages last modified 2022; no data cited anywhere to supersede.
- **Unanswered:** how many hashtags (Instagram: up to 5 tags per post — Help Center); how to describe a costume photo for screen-reader users (alt text); why the dog's voice works (anthropomorphism research; animal-voice letters date to the 19th century).
- **Fan-out sub-queries → H2s:** what makes a good dog caption; captions by voice and photo type; dog voice vs owner voice compared; hashtags/alt text for a pet account; why people enjoy captioned pet photos; sending to one person; when not to post.

**Angle (batchMeta.angle):** Wins by being the only post that sorts Halloween dog captions by who is speaking (dog or owner) and by photo type, including the refused-costume, senior-dog and multi-dog photos, backed by research on why owners voice their dogs and by Instagram's own 5-hashtag and alt-text rules, using SubhSandesh's 48.3% phone-open rate to argue for front-loaded captions.

## Phase 3 — sources (all fetched and verified 2026-10-13)

| Source | Claim used | Read | Published |
|---|---|---|---|
| Vereshchagina & Dushakova, *Media and Communication* 13 (Cogitatio, CC BY) — https://www.cogitatiopress.com/mediaandcommunication/article/view/8784 | Pet accounts are run by human owners on behalf of pets; writing letters in an animal's voice was already known in the 19th century (citing Grier 2006); animal "autobiography" a popular device by the 1870s; qualitative study of six regularly updated pet accounts active ≥3 months, followers from several hundred to several million; analysis frame = account architecture (header, pinned stories, relations with other pet accounts) + content | Full text (PDF) | 2025-03-06 |
| Bouma, Dijkstra & Arnt Rosa, *Animals* 13(23):3644 (MDPI, CC BY) — https://europepmc.org/article/PMC/PMC10705108 | 527 owners with complete data (332 dog, 195 cat), Netherlands; dog owners anthropomorphise more than cat owners; more anthropomorphising → more making-up behaviour and stronger social support from the pet; talking/petting does not require anthropomorphising | Full text | 2023-11-24 |
| Zhang, Tao & Du, *Animals* 15(17):2593 (MDPI, CC BY) — https://europepmc.org/article/PMC/PMC12427423 | Survey (299 valid responses) + experiment (131 valid): online animal-video engagement negatively associated with loneliness, mediated by "cyber-mediated animal attachment"; animal videos evoked more attachment than humorous human videos with similar positive emotion | Full text | 2025-09-04 |
| Instagram Help Center, hashtags — https://help.instagram.com/351460621611097 | "You can use up to 5 tags on a post. If you include more than 5 tags on a single photo/video, your comment won't post." Private-profile posts don't appear publicly on hashtag pages | Live page is JS-only (400 to plain fetch); verified via Wayback snapshot 2026-06-14 | undated |
| Instagram Help Center, alt text — https://help.instagram.com/503708446705527 | Automatic alt text uses object recognition to describe photos for people with visual impairments; you can write your own via Accessibility before sharing, or change it after | Verified via Wayback snapshot 2026-09-21 | undated |

Rejected: Frontiers papers (puppy video stress 2026, owner "types" 2026) — banned publisher; PMC13603214 ugly-cute memes — used by b1 halloween-memes; Ding & Liu 2026, Gardeweg 2026, Hall 2020 — used by sibling couple-costumes-with-dog. Crossref-only "Pet funeral services" (Communications in Humanities Research) — low-quality venue.

Caps: help.instagram.com 0 posts in b3 before this one (b1 used these two pages; b2 used no Instagram help page — the prompt's claim that b2 used several is not borne out by the files). europepmc.org exempt. cogitatiopress.com new. *Animals* journal: 0 other b3 posts → 1 post.

## Notes

- Captions are original; 5-word-shingle check run against all b1/b2/b3 bodies and the five fetched competitor pages.
- Clean throughout; no candy-for-dogs jokes that encourage feeding sweets.
- No song lyrics. "Black Beauty" (1877, public domain) named only as context, not quoted.
