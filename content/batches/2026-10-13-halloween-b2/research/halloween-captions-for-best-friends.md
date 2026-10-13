# Research brief — halloween captions for best friends

Batch `2026-10-13-halloween-b2`, PLAN rank 90 (absorbs "halloween instagram captions with best friend"). Theme: friends. Written 2026-10-13.

## Phase 0 — first-party data
- `content/facts.md` read directly (no `npm run facts`, per BRIEF §3). No Halloween usage data exists, and none is implied.
- Used, verbatim: 38.5% password-protect (2,000 of 5,199), 48.3% phone opens (27,725 of 57,456), 90.9% published and shared (4,724 of 5,199), 11.1 average views per created page. All measured 2026-09-24 and labelled platform-wide in the body.
- The first two sit in the opening paragraph. The password rate is the one that bears on the post's subject (keeping things between two people).

## Phase 1 — SERP
**Tool:** WebSearch (US-served index), 1 search: `halloween captions for best friends`. Firecrawl is disconnected. The coordinator's DuckDuckGo fallback was not needed because WebSearch returned results. Pages were fetched with `ctx_fetch_and_index`.

| # | Result | Status | Words / structure | Direct answer | Data & date | Format | Optimising for |
|---|---|---|---|---|---|---|---|
| 1 | elitedaily.com, 25 last-minute Halloween 2019 captions | fetched | ~600; intro then numbered list | after 3 intro paragraphs | none; dated Oct 2019 | numbered italics, no FAQ | generic Halloween captions; "Hanging with my best boos" is the only friend line |
| 2 | elitedaily.com, 31 captions for Halloween movie night with your boos | fetched | ~700; intro then 31 lines | after 3 paragraphs | none; Oct 2019 | numbered list | girl-squad movie night; "ghoulfriends" puns |
| 3 | fotor.com, 100+ Halloween party captions | **HTTP 410**, judged from the snippet only | — | — | — | grouped by cute/funny/punny | party captions, tool upsell |
| 4 | socialchamp.io (?p=147167) | **HTTP 404**, judged from the snippet only | — | — | — | short list | generic puns, SaaS upsell |
| 5 | thepreviewapp.com, Halloween Instagram captions | fetched | ~400; H2 per group, captions only as images | no | none; Oct 2021 | image-only caption groups, incl. "with friends" | app download |
| 6–9 | dev.ourstate.com/tag/captions, bpsf.bouncepad.com, wildvisualizer.com, elitedaily 2019 #3 | spam / hijacked subdomains / stale | not analysed | | | | |

**Weak count:** 9 of the 9 results returned are weak. That is three stale 2019 Elite Daily lists, one stale 2021 app blog, two dead pages (410/404) and three hijacked or scraped pages. PLAN said 7/10, so this measurement is a little weaker still. Gate 4 passes. `serps.md` has no row for this exact keyword. Its "costume ideas for best friends" row (7 weak) agrees that the friends cluster is soft. Confidence is medium, because this is the US index only.

## Phase 2 — gap analysis
- **Table stakes:** punny lines ("boo", "ghoul", "gourd"), a squad or group angle, movie night.
- **Gap:** none of the pages sorts captions by the photo actually taken (mirror selfie, haunted-house reaction, throwback, split screen, "only one of us dressed up"). None mentions tagging or asking, and none has data newer than 2021.
- **Stale data:** none of them cites any data at all.
- **Fan-out:** what caption for a duo or squad photo; should I tag my friend; long-distance best friend captions; throwback captions; what to write when only one of us dressed up; is there a private alternative to posting; when is Halloween.
- **Angle:** wins by being the only post that sorts best-friend captions by the photo actually taken and gives each type a tag-or-ask rule grounded in a 1,033-person photo-consent study, alongside SubhSandesh's own 38.5% password-protect rate.

## Phase 3 — sources (all full text read)
| Source | Host | Used for | Subject test | Swap test |
|---|---|---|---|---|
| Such, Porter, Preibusch & Joinson 2017, CHI, "Photo Privacy Conflicts in Social Media" | kclpure.kcl.ac.uk (publisher PDF, CC BY-ND per OpenAlex) | n=1,033; 57.3% never asked; 96% never asked; friends 40.20%; Halloween 3.24%; 4+ people 31.3%; topics: old photos 10.27%, pulled faces 6.06%, sleeping 2.86%; 53.2% did not complain (33.9% of them to avoid upsetting); about 75% of outcomes were removal or nothing | yes (consent among friends) | **fails**: fits any caption post |
| Wee & Lee 2017, PLOS ONE | europepmc PMC5409138 | 36 users, 967 friendships; photo tags did not track intimacy | yes (friend closeness online) | passes |
| Fogues et al. 2018, PLOS ONE | europepmc PMC6115014 | 48 users, 30 photos each; closeness made sharing rules easier to understand, but led to more mistakes | yes | **fails**: generic photo sharing |
| Farley, Carson & Hughes 2022, J Nonverbal Behav | europepmc PMC9247916 | 50 raters, friend vs partner laughter at 57% accuracy | yes (friend laughter) | passes |
| Pennington, Hall & Holmstrom 2024, PLOS ONE | europepmc PMC11288408 | more than 40% of friends live in a different town or further away | yes (friendship, distance) | passes |

- Avoided: Motevalli 2025 and Ferrara 2024 (used by b1 family captions), Kaliyadan & Pasquali 2026 (used by nail captions), and the messages-for-best-friend papers PMC4626528 and PMC12217408. Also avoided Vaillancourt 2024 "Social Media Friendship Jealousy" (Evolutionary Psychology, which is SAGE and banned).
- No Halloween post in either batch uses any of these five sources. Domains: kclpure.kcl.ac.uk is in 1 post, and europepmc.org is exempt.
- Searches tried: findpapers "photo sharing privacy friends consent social media", "multiparty privacy photo tagging", "co-owned photos interdependent privacy", "friendship closeness social media posting together photos", "best friend friendship maintenance social media". Europe PMC REST: "untagging", "posting photos of others", "shared laughter friends", "long-distance friendship". OpenAlex: CHI and IEEE S&P photo-sharing titles.

## Template features used (template-spec.md only)
Bestie mode with the question "Will you be my boo-st friend forever?", up to six photos and a letter, a private link, the haunted-house walk-through, pumpkin carving until the word glows, a 3–5 memory potion, an email on the first answer, and a 1080×1920 Boo License. Premium adds a 60-second voice note, 12 photos and a 280-character reply box. Honest limits stated: it greets one person, it is not a group tool, and the UI is English only.

## Notes for the orchestrator
- `verify-batch.mjs` reports no problem on this slug. The only batch problem is `batch.json` blogs != disk, which is the orchestrator's to fix. capcheck exits clean.
- None of the 60 captions shares a 5-gram with any file in either batch, including messages- and quotes-for-best-friend. The only shared 5-grams are template-spec and facts.md boilerplate.
- The structure is close to the sibling couples captions page (photo-type H3s, a tag section, a table). The content and studies differ.
