# Research brief — witch pickup lines (row 175)

- Keyword: **witch pickup lines** · absorbs "witchy pickup lines" · slug `witch-pickup-lines` (Strapi check 2026-10-13: not taken)
- Theme: pickup · plan weak score 6/10 · category `festive-beats`
- Searches used: **1 WebSearch (US index)**, 2026-10-13. Firecrawl: 0 (disconnected). No browser tools.

## Phase 0 — first-party data
No Halloween data in facts.md (BRIEF §3). Used three platform-wide lines, labelled as such in the body:
- 48.3% phone opens (27,725 of 57,456 views), measured 2026-09-24
- 11.1 average views per created page, measured 2026-09-24
- 90.9% of started pages published and shared (4,724 of 5,199), measured 2026-09-24
Template spec (`template-spec.md`) used for /happy-halloween and /happy-halloween-premium features only.

## Phase 1 — SERP (WebSearch, US index)

| # | URL | Type | Words / structure | Direct answer | Data cited | Notes |
|---|---|---|---|---|---|---|
| 1 | onlycaptions.com/297-witchy-ways-to-woo-pick-up-lines-for-witches/ | Caption farm, Feb 2023, retitled "(2026)" | ~3k words; H2s Funny / Cheesy / Tinder / Cute / For Her / For Him; 4-question FAQ; conclusion | Buried after a 2-paragraph intro | None | Heavy Harry Potter IP (Hogwarts, Dementor, Felix Felicis), recycled generic lines ("Do you have a map?"), one suggestive line ("spell book in your pocket"). No channel guidance, no Wicca note |
| 2 | onlycaptions.com/?p=6419 | Same page, duplicate URL | — | — | — | Counted once |
| 3 | faits-marquants.inrae.fr/... | Hijacked-subdomain spam | — | — | — | Weak, not analysed |
| 4 | en.wikipedia.org/wiki/Pick-up_line | Encyclopedia | Generic definition | n/a | — | Not witch-specific |
| 5 | samplechat.aldine.edu.in/... | Hijacked-subdomain spam | — | — | — | Weak, not analysed |
| 6 | forums.anandtech.com thread (Dec 2002) | Forum | Joke thread | none | none | Only a "witch" pun on "bitch"; irrelevant |
| 7 | owad.de/word/pick-up-line | ESL word-of-the-day | Definition + 7 generic lines | n/a | none | Not witch-specific; includes a suggestive line |
| 8 | docs.thebrandindustry.com "freaky pick up lines" | Hijacked-subdomain spam | — | — | — | Weak |
| 9 | br2.imexhs.com "dirty halloween pick up lines" | Hijacked-subdomain spam | — | — | — | Weak |

**Weak count in top 10: 9 of 9 results** (no authoritative incumbent; the only genuine list is a 2023 caption-farm page). Gate 4 not triggered.

## Phase 2 — gap analysis
- **Table stakes:** a long list of spell/potion/broom lines; some grouping.
- **Gap:** no page groups by witch trope (cauldron, familiar, tarot/crystals, coven, hex); no page says which line suits a party vs a DM vs an app; nothing on the modern "witchy" aesthetic (#WitchTok, tarot); nothing respectful toward people who practise Wicca; the incumbent leans on Harry Potter IP and one suggestive line.
- **Stale data:** none cited anywhere.
- **Fan-out sub-queries:** what is a witch pickup line; clean witch lines; witch lines for a crush who dresses witchy; tarot/crystal pickup lines; what to text vs say; is it offensive to Wiccans; what is WitchTok; do pickup lines work; difference from witch quotes; Halloween date.
- **Angle:** wins by being the only post that sorts clean, original witch lines by trope and channel, explains the witchy aesthetic with dated #WitchTok and 2025 Pew tarot data, and gives a respectful option for people who practise Wicca.

## Phase 3 — sources (all fetched)
| Source | Use | Read | Date |
|---|---|---|---|
| DiDonato & Jakubiak, *Europe's Journal of Psychology* (PsychOpen, CC BY 3.0), europepmc.org PMC4991047 | n = 224; positive humour raises attraction, especially women's; less negative humour for long-term motives | Full text (Europe PMC REST) | 2016-08-19 |
| Miller, *Religions* 13(2):118, doi 10.3390/rel13020118 | #WitchTok serves Contemporary Pagans/modern Witches; spells, potions, altars; consumerism | **Abstract only** (Crossref + DOAJ APIs); mdpi.com, PDF and doaj.org all HTTP 403 | 2022-01-25 |
| Pew Research Center, 21 May 2025 | 9,593 US adults, Oct 21–27 2024; 30% consult astrology/tarot/fortune tellers yearly; ~1 in 10 tarot; nearly a quarter of 18–29s tarot; most "just for fun" | Full page | 2025-05-21 |
| Tervanotko, The Conversation (McMaster) | "Tarot is not a religion"; visual appeal | Full page | 2025-06-29 (OpenAlex) |
| National Cemetery Administration, Emblems of Belief | "(37) Wicca (Pentacle)" | Full page | undated |

Search terms tried (findpapers.mjs): "WitchTok TikTok witchcraft", "contemporary witchcraft social media spirituality", "tarot astrology belief young adults", "Wicca paganism religion", "opening lines flirtation humor preference", "humor production romantic interest initial attraction", "pagan witchcraft practitioners", "flirting conversation opener women men ratings". Avoided b2 witch-quotes sources (Leeson, Kwaschik/Dunning, Salem, The Conversation witch-iconography piece, Gutenberg Baum). Rejected: Frontiers/SAGE/T&F hits, predatory IJ* journals.

Caps: capcheck clean for these URLs. MDPI as publisher is now in 3 b4 posts (LDR ideas, porch decorations, this one) — at cap, not over. Pew, The Conversation, cem.va.gov: first use in b4.

## Originality
56 lines: 7+7+7+7+7+7+6+7 = 55 across the eight tropes, plus 1 respectful line for someone who practises (cut from a 61-line draft to meet the 1,800-word cap). Every line checked with a 5-word n-gram scan against all blogs in b1–b4: **0 line overlaps**. Remaining prose n-gram matches are template-feature wording and the 2026/2027 date sentence.

## Verifier
`node scripts/verify-batch.mjs content/batches/2026-10-13-halloween-b4`: witch-pickup-lines 1,794 words, 10 FAQs, audit 47/3, no slug-level problems. Batch-level "batch.json blogs != files on disk" is the orchestrator's (not edited per BRIEF).
