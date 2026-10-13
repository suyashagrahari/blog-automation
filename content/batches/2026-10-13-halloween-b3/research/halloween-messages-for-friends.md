# Research brief — halloween messages for friends (row 120)

- Slug: `halloween-messages-for-friends` · theme: messages · absorbs "happy halloween message for friends", "halloween wishes for friends"
- Band 3,000–10,000/mo · plan weak score 4/10
- Searches used: **1 WebSearch (US index)**, 2026-10-13. No Firecrawl, no browser.

## Phase 0 — first-party data
No Halloween usage data exists in facts.md (BRIEF §3). Platform-wide lines used, labelled as such in the body:
- 48.3% of shared pages are opened on a phone (27,725 of 57,456 views) — measured 2026-09-24 (first 150 words)
- Average views per created page: 11.1 — measured 2026-09-24 (first 150 words)
- 90.9% of started pages are actually published and shared (4,724 of 5,199) — measured 2026-09-24
- 38.5% of creators password-protect their page before sharing it (2,000 of 5,199) — measured 2026-09-24

## Phase 1 — SERP (WebSearch, US index)

| # | URL | Status | Words / structure | Direct answer | Data cited | Format | Weak? |
|---|---|---|---|---|---|---|---|
| 1 | hallmark.ca/en/get-inspired/what-to-write-in-a-halloween-card (21 Jul 2021) | fetched | ~2,000; H2s by tone (Jokes and Puns, Heartfelt, For Friends, Fun Wishes, Spooky, Fun Closings, Sweet and Simple, Kids, Family, Seasonal, Religious) | Intro, then lists | None | Bulleted lines, tip callouts, origin box | No — strong brand; but "For Friends" is just 6 pun lines |
| 2 | aol.com/50-best-halloween-greetings-wishes (Parade syndication) | 404 | judged from snippet: "110 spooky and sweet messages for friends and loved ones" | — | — | listicle | Moderate |
| 3 | fithindi.thequint.com …happy-halloween-2023-wishes… | 403 | snippet only; 2023-dated wishes + images | — | — | listicle | Yes — stale year-stamped |
| 4 | static.intrafocus.com/tag/quotes | not fetched | hijacked-subdomain spam | — | — | — | Yes |
| 5 | ibtimes.co.uk top-10 Halloween quotes (2016) | fetched | ~250 words; 10 attributed quotes, no friend segmentation | None | None | numbered list | Yes — 2016, quotes not messages |
| 6 | newsx.com halloween-2025-50-heartfelt-messages… | 403 | snippet only: 50 messages/quotes/captions for family and friends, 2025-stamped | — | — | listicle | Yes — year-stamped news filler |
| 7 | msoid.icmbio.gov.br/en/printable-halloween-sayings | not fetched | hijacked .gov.br subdomain | — | — | — | Yes |
| 8 | lbas.lboro.ac.uk/wishes/halloween-wish | not fetched | hijacked .ac.uk subdomain | — | — | — | Yes |
| 9 | static.intrafocus.com/?p=35816 | not fetched | hijacked subdomain spam | — | — | — | Yes |

**Weak count in top 9 returned: 6–7** (Quint, IBTimes, NewsX, 4 hijacked subdomains). Gate 4 not triggered. Competitors read, never cited or linked.

## Phase 2 — gap
- **Table stakes:** a few dozen copyable lines; puns (BOO, FANGS, WITCH); a "friends" bucket; card sign-offs.
- **Gap:** no page splits "friends" into the actual circles people message (group chat, uni, work, drifted, new, neighbours, online, moved, host), and none says which channel fits each. No page cites any research. None handles the old friend you have drifted from, which is where people actually hesitate.
- **Stale data:** IBTimes 2016, Quint 2023, NewsX 2025 — year-stamped news filler.
- **Fan-out sub-queries:** short happy Halloween message for a friend; group chat message; old friend text; neighbour card; work friends; when to send; friend who doesn't celebrate; host thank-you; voice note; friends vs best friend.
- **Overlap guard:** b2 `halloween-messages-for-best-friend` covers ONE best friend in 9 situations (Roberts & Dunbar 2015, van der Mey-Baijens 2025). This post excludes the best friend except the single /happy-halloween bestie-mode section, and uses neither paper.
- **Angle:** Wins by being the only post that sorts Halloween messages by the wider friend circle with a send-it-as channel for each, backed by weak-tie and reaching-out research, using SubhSandesh's 48.3% phone-open rate to keep lines phone-sized.

## Phase 3 — sources (all fetched via Europe PMC REST full text; all CC BY)

| Source | Claim used | Read | Published |
|---|---|---|---|
| [Aknin, Sandstrom, Dunn & Norton, PLOS ONE](https://europepmc.org/article/PMC/PMC3037397) | Weak-tie definition (less frequent contact, lower intensity, limited intimacy); spending on strong ties → more positive affect; intimacy > relationship type | full text (abstract + intro) | 2011-02-10 |
| [Sandstrom, PLOS ONE](https://europepmc.org/article/PMC/PMC10414558) | N = 352; instructor greeting at the door ("good morning") → stronger relationship vs control; predicted enjoyment, relatedness, belonging | full text (methods) | 2023-08-10 |
| [Aknin & Sandstrom, Communications Psychology](https://europepmc.org/article/PMC/PMC11332216) | 7 studies; < 1/3 messaged an old friend despite wanting to; old friends feel like strangers; Study 7 (N = 194): 3 min messaging current friends (M = 3.3) raised reaching out by two-thirds vs browsing feeds | full text | 2024-04-23 |
| [Yen et al., Journal of Happiness Studies](https://europepmc.org/article/PMC/PMC13241400) | YouGov N = 1,738 England; Happy to Chat badge → seen friendlier/trustworthy, more acknowledgements; no rise in intention to start a chat | **abstract only** | 2026-06-05 |

- Subject test: Aknin & Sandstrom 2024 (old friends), Aknin 2011 (weak vs strong ties), Sandstrom 2023 (minimal contact) pass.
- Swap test: **fails** for Aknin 2011 (could sit in a gift/boo-basket post) and Yen 2026 (could sit in a neighbourhood post) — recorded in audit.
- Avoided per prompt: Liu, Parkinson, Rennung, Kikuchi, Holt-Lunstad, Kim 2023, Dunbar 2025, Roberts & Dunbar 2015, van der Mey-Baijens. None of the four papers appears in any b1/b2/b3 file (grep + capcheck).
- **Brief/prompt claim checked:** "Sandstrom & Dunn, if open access" — the 2014 weak-ties paper is in Personality and Social Psychology Bulletin (SAGE, not open access per Europe PMC), so BRIEF §9 bars it.
- Searches tried (findpapers + Europe PMC REST): "weak ties social interactions well-being", "acquaintances weak ties happiness daily interactions", "reaching out old friends reconnecting dormant ties", "relationship diversity well-being", "minimal social interactions strangers subjective well-being", "social interactions weak ties well-being experience sampling", "workplace friendship coworkers well-being", "online gaming friendships", TITLE:"weak ties" (OA), AUTH:"Sandstrom GM", AUTH:"Fingerman KL". Rejected: Fingerman 2025 "Fringeships" (Review of General Psychology — SAGE); multiple Frontiers hits (banned).

## Phase 5 — links and entities
- Internal: https://subhsandesh.in/happy-halloween (bestie mode, mandatory), https://subhsandesh.in/happy-halloween-premium (voice note for the friend abroad). No /blog/ links. Category `festive-beats`.
- Wikidata (Wikipedia API, 2026-10-13): Friendship Q491, Halloween Q251868, Interpersonal ties Q1276633.
- Slug free in Strapi (filters[slug][$eq] returned []).

## Checks run
- Body 1,792 words (plain split), 55 lines in 9 circles, 10 FAQs, 4 outbound links (europepmc.org, exempt domain).
- 5-word overlap of every copyable line vs all 118 b1/b2/b3 files: 0 collisions (10 colliding drafts lines were replaced). Prose describing the template and platform facts shares phrasing with siblings by design.
- `verify-batch.mjs`: my row clean (48/2); the only batch problem is batch.json not listing new slugs (orchestrator-owned).
- `capcheck.mjs`: none of the four papers at cap.
