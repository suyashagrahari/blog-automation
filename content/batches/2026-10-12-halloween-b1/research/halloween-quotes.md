# Research brief: halloween quotes (row 50)

- **Slug:** `halloween-quotes` · **Theme:** quotes hub · **Category:** festive-beats
- **Absorbs (H3s):** funny, short, cute, scary/creepy, for adults/grown-ups, inspirational/motivational, of the day/daily, Halloween night, Halloween vibes (20 absorbed phrasings in PLAN.json).
- **Siblings not cannibalised:** romantic-halloween-quotes (owns romantic lines and the fake-Poe/Stoker verification angle; none of its 10 classics or its misattribution list is repeated here), halloween-whatsapp-status, halloween-one-word-captions, halloween-puns, halloween-jokes, happy-halloween-wishes. A script checked all 82 original lines against every sibling body and FAQ in `blogs/`. It found 0 exact matches and 0 near-matches at Jaccard ≥ 0.5.

## Phase 0: first-party data

facts.md was read directly (`npm run facts` was not run, per the BRIEF). No Halloween usage data exists. Lines used, all platform-wide:
- 48.3% of shared pages are opened on a phone (27,725 of 57,456 views), measured 2026-09-24. The body labels this as covering all page types.
- Average views per created page: 11.1, measured 2026-09-24.
- 90.9% of started pages are actually published and shared (4,724 of 5,199), measured 2026-09-24.

The template spec (/happy-halloween and /happy-halloween-premium) is first-hand product fact. Only spec features are described: knock three times, carve the jack-o'-lantern, letter by flashlight, up to six photos, kids tone with no gore or jump scares, a 1080×1920 Boo License, and the premium voice note (60 s), 12 photos and 3,000-character letter.

## Phase 1: SERP

**Head-term warning.** "halloween quotes" is a contested 2-word head term. The measured Google SERP in `content/keywords/2026-10-12-halloween-global/serps.md` has **2/10 weak** results (today, southern living, rd, T+L, shutterfly, bouqs, chatbooks, rated hard). This is written as the hub anyway, per the PLAN. Long-tail alternatives (4–8 words):
1. halloween quotes of the day for october
2. public domain halloween quotes with source
3. short halloween quotes for pumpkin signs

**Searches used: 1 WebSearch, out of the budget of 2.** Firecrawl MCP was disconnected. WebSearch serves a US index, which is not Google's ranking, so confidence is lower. Results: romper.com (x2), scarymommy.com, rd.com, today.com, educatorstechnology.com (2024), purewow.com (x2), blog.getcompass.ai (off-intent sales listicle). That is about 2 weak (educatorstechnology, getcompass), consistent with serps.md. **Gate 4 passes:** the weak count is not zero.

The top 5 were fetched with ctx_fetch_and_index:

| # | Page | Size / structure | Direct answer | Sources & data dates | Format | Tone | Optimising for |
|---|---|---|---|---|---|---|---|
| 1 | romper.com "21 Classic Halloween Quotes" | 21 H2 items, one per quote | Intro is history scene-setting, so the answer is buried | Sep 2021; no sources; film/song lines (Nightmare Before Christmas lyric, Poltergeist) | H2 per quote + commentary | Chatty, 2nd person | "classic" + social captions |
| 2 | scarymommy.com "105 Spooky Halloween Quotes And Sayings" | H3 groups (Short, etc.), numbered lists | After a 200-word intro with a "9% favourite holiday" stat (totalnewswire, undated) | 2020, updated 2021; stale | Numbered lists | Casual | volume ("105") + "sayings" |
| 3 | rd.com "52 Halloween Quotes" | Mood H2s (for kids, magical, funny, spooky…) | One-line dek | Updated 31 Aug 2026; fact-checked byline; no source per quote | Lists + quote graphics | Light | freshness + E-E-A-T byline |
| 4 | today.com "87 Best Halloween Quotes and Spooky Sayings" | H2s: Best, Spooky, Funny, Movie… | Intro names Shakespeare/Wilde lines | 2026 images; quotes modern authors (Bradbury, Updike, Dahl, King): copyrighted; no work/year for most | Bullets + images | Breezy | "short and spooky" + Instagram |
| 5 | purewow.com "76 Halloween Quotes" | H2 per quote with image | Intro is party/caption framing | Oct 2023; Wednesday Addams, Ichabod Crane film lines | Image-led H2 list | Breezy | Pinterest/image search |

## Phase 2: gap analysis

- **Table stakes:** mood groupings (funny/short/scary/kids), Shakespeare's Macbeth witches, Hamlet "witching time" (today.com), Montgomery "Octobers" (rd, purewow), film lines.
- **The gap:**
  - None gives the work, year and act/scene/chapter, or verifies wording against a text.
  - None quotes Burns's own 1785 footnote defining Halloween or Lovecraft's 1928 opening line.
  - None warns that film lines are copyrighted.
  - None has a dated 31-day "of the day" list.
  - None sizes lines by word count to a use.
  - None explains why scary or patterned lines appeal, with research.
- **Stale data:** scarymommy's 2020/2021 "9% favourite holiday" stat (undated secondary source). Not superseded here because it is off-topic.
- **Unverified attributions seen:** "Villainy wears many masks…" is credited to Ichabod Crane "Sleepy Hollow" (yourtango, purewow). It is absent from Irving's text (Gutenberg #41, string search). It goes in one FAQ only; the misattribution angle belongs to the romantic sibling.
- **Fan-out sub-queries → H2/FAQ:**
  - what makes a good Halloween quote / why people like scary ones → H2 1 + FAQ
  - classic quotes with source → H2 2 + FAQs (Macbeth, Burns, Sleepy Hollow, Montgomery)
  - funny/short/cute/scary/adult/inspirational/night → H2 3 H3s
  - quote of the day → H2 4
  - which quote where → table H2
  - kids-safe → wrong-choice H2 + FAQ
  - copyright on movie quotes → FAQ
  - date of Halloween → FAQ
- **Angle:** see `batchMeta.angle`.

## Phase 3: sources (all fetched)

| Source | What it supports | Read | Cap status |
|---|---|---|---|
| Rozin, Guillot, Fincher, Rozin & Tsukayama 2013, *Judgment and Decision Making* 8(4):439–447, cambridge.org (CC BY 3.0, open access) | 243 Penn undergrads + 147 MTurk adults; thrill rides mean liking 56.5 (64% > 50); favoured level "just below the level that cannot be tolerated" | Full text | cambridge.org now 2 posts (chat-up-lines + this) |
| Kara-Yakoubian, Walker, Sharpinskyi, Assadourian, Fugelsang (+ Harris in published version), PsyArXiv 2020-05-16, osf.io | 4 experiments, N = 797; antimetabole judged more accurate in 3 of 4; fluency predicted it | **Abstract only** (published CJEP 2022 76(2), APA, paywalled) | osf.io 1 post |
| Gutenberg #1279 Burns | "Halloween" opening + footnote 1 | Plain text | exempt |
| Gutenberg #41 Irving (1820) | "A drowsy, dreamy influence…" | Plain text | exempt |
| Gutenberg #45 Montgomery (1908) | ch. XVI "Octobers" | Plain text | exempt |
| Gutenberg #68283 Lovecraft (1928) | opening line; header gives original publication 1928 | Plain text | exempt |
| (unlinked) Gutenberg #1524 Hamlet, #1533 Macbeth, #345 Dracula | Act III Sc. II; Act IV Sc. I; ch. II | Plain text | exempt |

Entity check (Wikipedia API): Halloween Q251868, Robert Burns Q81960, Halloween (poem) Q5643090 (its intro gives written 1785, first published 1786 Kilmarnock edition), The Legend of Sleepy Hollow Q72309, Macbeth Q130283.

**Rejected:**
- McGlone & Tofighbakhsh 2000: Psychological Science, SAGE, banned.
- McGlone 1999 "Keats heuristic": Poetics, Elsevier, full.
- Frontiers 2014 auditory-fluency paper: Frontiers over cap.
- Spent horror papers PMC10725765, PMC13359723, PMC12212089, PMC10844225, Martin 2019, Clasen 2019.
- Playing With Fear (PMC7734554): SAGE.
- Search terms tried via findpapers: "rhyme as reason aphorism truth", "rhyme processing fluency judged truth", "benign masochism enjoy negative emotions", "proverb memory rhyme recall". No open-access rhyme-as-reason replication was found, so the chiasmus study stands in for "aphorism form → believability".

## Verification

- `node scripts/verify-batch.mjs content/batches/2026-10-12-halloween-b1`: halloween-quotes row clean (1774 words, 10 FAQs, audit 47/3). The only batch-level error is batch.json not listing the new slugs. That is the orchestrator's file, so it was not edited.
- capcheck.mjs: no URL or domain over cap from this post.
