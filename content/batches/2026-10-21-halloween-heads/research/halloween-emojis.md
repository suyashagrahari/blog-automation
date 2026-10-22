# Research brief — halloween emojis (slug: halloween-emojis)

Head term (2 words): unwinnable outright for this domain; written anyway per BRIEF §A. Long-tail targets the post can realistically win: "witch emoji name", "black cat emoji shows square", "halloween emoji unicode version".

## Phase 0 — first-party facts (facts.md, 2026-09-24 vintage)
- 48.3% of shared pages opened on a phone (27,725 of 57,456) — first 150 words
- 48.4% of views on a touch device — first 150 words
- 90.9% of started pages published and shared — template section
- Average views per created page 11.1 — wrong-choice section
No Halloween usage data exists; none stated or implied.

## Phase 1 — SERP (orchestrator top 10, research/serp-snapshots.md; 0 extra searches used)
Weak 5/10: 1 emojipedia.org/halloween · 2 emojiterra.com/halloween · 3 emojicombos.com/halloween · 4 emojidb.org · 5 pinterest · 6 shutterstock (off-intent) · 7 pinterest · 8 emoji.gg (Discord, off-intent) · 9 magnific.com (off-intent) · 10 glyphy.io.

| Page | Fetched | Words / structure | Direct answer | Data cited | Format | Optimising for |
|---|---|---|---|---|---|---|
| emojipedia.org/halloween | Firecrawl scrape (summary) + ctx_fetch (JS grid, 0.6 KB text) | ~30 words of prose; JS emoji grid | One sentence: jack-o-lantern, ghost, spider web | None on list page; no code points/versions on the list | Grid/list toggle, sidebar games, news | Emoji lookup clicks into per-emoji pages |
| emojiterra.com/halloween | 403 — judged from SERP snippet only | n/a | n/a | n/a | n/a | Emoji reference list |
| emojicombos.com/halloween | ctx_fetch, 276 KB | Thousands of user-submitted combos, kaomoji, braille art; no headings beyond H1/H2 | None — copy-paste wall | None | Tag clouds, copy buttons | "copy and paste" combos |
| emojidb.org halloween | ctx_fetch, 12.9 KB | ~300 copy tiles; one intro paragraph | "more than 20" related emojis | None | Tap-to-copy tiles | Copy-paste |
| pinterest | not fetched (image pins) | n/a | n/a | n/a | n/a | n/a |

## Phase 2 — gap
- Table stakes: the core emoji (🎃 👻 🕸️ 🦇 💀 🍬), copy-paste access, combos.
- Gap: none of the fetched pages gives code point + Emoji version + year per emoji, which ones break on older phones (tofu / ZWJ fallback), or what misreading research says. Combos on emojicombos/emojidb carry no compatibility information.
- Stale data: none cited by competitors.
- Fan-out: what counts as a Halloween emoji; full list; witch emoji name; why black cat shows a square; newest Halloween emoji; iPhone vs Android differences; skull vs skull-and-crossbones; crow emoji; kid-safe set; combos.
- Angle: wins by being the only post that gives every Halloween emoji its verified code point, Emoji version and year, flags older-phone breakage, and dates its own combos, using the 48.3% phone-open rate.

Sibling overlap: 0 SERP URLs shared with halloween-one-word-captions, halloween-hashtags, halloween-captions-for-instagram, halloween-instagram-notes, halloween-whatsapp-status (none of the 40 halloween-global SERPs include emojipedia/emojiterra/emojicombos). Avoided: one-word-captions' word+emoji pairs, its screen-reader/CLDR TTS section and its Miller 2017 paper; crush-texts' Unicode frequency data; no caption line reused.

## Phase 3 — sources (all fetched)
1. unicode.org emoji-test.txt v18.0 (2026-04-30) — every code point, name, E-version and subgroup in the post verified programmatically against the file (56/56 match). Cap-exempt.
2. unicode.org UTS #51 v18.0 (2026-08-28) — version→date table (E0.6 2010-10-11, E0.7 2014-06-16, E1.0 2015-06-09, E3.0 2016-06-03, E5.0 2017-06-20, E11.0 2018-05-21, E12.0 2019-03-05, E13.0 2020-03-10, E14.0 2021-09-14, E15.0 2022-09-13, E16.0 2024-09-10, E17.0 2025-09-09, E18.0 2026-09-15); FE0F presentation selector; ZWJ fallback rule. Cap-exempt.
3. ojs.aaai.org Miller et al. ICWSM 2016 (peer-reviewed, open PDF read in full): 304 analysed, 25% same-rendering sentiment disagreement, 44/110 renderings ≥2, across-platform incrementally larger, P22 "aliens" quote.
4. scholarworks.iu.edu Zhukova & Herring 2024, Language@Internet 22 (open PDF read in full): n=273; Gen Z rated 🔥 friendlier; Boomers rated 🔥 more threatening (p<.01); bomb negative for all.
5. support.apple.com/en-us/123075 — iOS 26.7: 8 new emoji incl. orca, trombone, landslide, ballet dancer, distorted face.
6. developer.android.com emoji2 guide (updated 2026-10-16) — tofu; Android 11 (API 30) and lower can't update the emoji font.

findpapers queries run: "emoji misinterpretation cross-platform rendering", "emoji meaning ambiguity interpretation", "emoji sentiment interpretation differences platforms". Rejected: aclanthology WASSA 2023 (banned host), Frontiers papers (banned publisher), JMIR adolescent emoji PMC12052294 (already used by b3 instagram-notes), MDPI Behav Sci review (off-subject).

## Corrections / notes for the orchestrator
- OJS shows the Miller paper "Published 2021-08-04" (platform migration); the paper is ICWSM 2016 — dated 2016.
- TR51 v18.0 is dated 2026-08-28 but its table dates Emoji 18.0 to 2026-09-15; emoji-test.txt v18.0 file is dated 2026-04-30.
- Apple names only 5 of the 8 iOS 26.7 emoji; hairy creature's iPhone arrival unconfirmed.
- The witch emoji is officially "mage" (U+1F9D9); the ghost sits in the face-costume subgroup; only 🎃 is in Activities > event.
