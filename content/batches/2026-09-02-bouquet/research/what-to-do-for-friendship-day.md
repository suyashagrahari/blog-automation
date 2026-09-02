# Research brief — `what to do for friendship day`

- **Batch**: 2026-09-02-bouquet
- **Slug**: `what-to-do-for-friendship-day` (checked against Strapi 2026-09-02, `filters[slug][$eq]` returned `[]`)
- **Category**: `digital-gifts-romance` (verified against the live category list)
- **Templates**: `/bouquet-gf`, `/love-gf`, `/darling`, `/missyou-gf` — all four present in `TEMPLATE_LINKS`.
  **Corrected in the Phase 8 fix pass**: the draft linked `/missyou-bestfriend`, which returns HTTP 307 and redirects
  to `/missyou-gf`, and has since been removed from `TEMPLATE_LINKS` with nine other stale redirect entries. The
  recipient-specific pages were consolidated one-per-occasion, so no best-friend miss-you page exists; the link now
  points at `/missyou-gf` and the anchor says plainly that the single "I miss you" page is worded for a partner,
  rather than promising a best-friend variant.
- **Event**: Friendship Day in India, first Sunday of August. Computed: 2026-08-02, **2027-08-01**, 2028-08-06. `publish_by 2027-05-09`
- **facts.md regeneration read**: 2026-09-02 (3,394 pages / 795 bouquet / 41,636 views / 6.9 h median). This differs from the assignment sheet's 3,377 / 789 / 7.2 h, which the updated BRIEF confirms is stale.

---

## Phase 1 — SERP analysis, and what actually happened

**The SERP could not be verified on Google, and this is a real finding rather than a formality.** `WebSearch` was exhausted (200/200) before this agent started. Everything below was attempted from the sandbox:

| Route | Result |
|---|---|
| `google.com/search` (5 user agents incl. w3m, Lynx, Opera Mini) | 200 with the JS-required interstitial; zero `/url?q=` results |
| `html.duckduckgo.com` GET **and** POST, `lite.duckduckgo.com` | HTTP 202 anti-bot challenge |
| `bing.com/search` and `bing.com/search?format=rss` | HTTP 200 but **poisoned**: "friendship day ideas" returned Google Sheets QUERY docs, "friendship day activities" returned Facebook login pages, "what to do for friendship day" returned Wattpad FNAF fan-fiction. Unusable, and worth recording because a careless agent would have believed it |
| `search.brave.com` | 429 |
| `qwant`, `ecosia`, `presearch` | 403 |
| 12 public SearXNG instances | 429 on ten, `fetch failed` on three, HTML challenge on `searx.be` |
| `r.jina.ai` proxy over Google and DDG | 403 Cloudflare |
| `dogpile.com`, `mojeek.com` | 200 but JS-rendered / captcha |
| Playwright MCP (real browser) | `Browser is already in use` — another agent in this batch holds it |
| **`search.seznam.cz`** | **200, real results, all five keyword variants.** This is the only index that answered |

So the result set below is **Seznam's index, not Google's**, and the ordering is not Google's ordering. It is evidence about the *shape* of the result set — which page types exist and compete — not about ranks.

### What the measured result set looks like

Deduplicated across `what to do for friendship day`, `friendship day ideas`, `how to celebrate friendship day`, `friendship day activities`, `friendship day celebration ideas`:

| Page | Type | What it optimises for |
|---|---|---|
| `en.wikipedia.org/wiki/Friendship_Day` | Encyclopaedia entity | The date and the origin. Appears on 4 of 5 variants |
| `nationaltoday.com` (two separate pages: `/friendship-day/`, `/international-day-of-friendship/`) | Observance calendar | "when is it" — one page title carries "August 3, 2026", the other "July 30, 2027" |
| `holidayscalendar.com/event/friendship-day/` | Observance calendar | "When, Where, Why, How is it celebrated" |
| `un.org/en/observances/friendship-day` | Official observance | The 30 July International Day of Friendship |
| `regain.us/advice/friendship/...` | Therapy-platform advice | "the power of friendship and how you can celebrate" — the only page in the set with a relationship-psychology frame |
| `quillbot.com/blog/wishes-and-expressions/friendship-day/` | Brand blog, wishes/quotes | Wishes, quotes, rhymes |
| `ancestry.com/c/ancestry-blog/holidays/friendship-day` | Brand blog | Soft brand association with the day |
| `jumbaloo.com/blogs/friendship-day-fun-for-kids/` | Local play-centre blog | Kids' activities in Mississauga — the only "activities" content, and it is for children |
| `giva.co/collections/friendship-day-collection` | Jewellery retailer | Product grid |
| `fnp.com/gifts/friendship-day-lp` | Gifting retailer | Product grid |
| `grabon.in/friendshipday-offers/` | Coupon site | "Up To 90% OFF" |
| `couplepitara.com/friendship-day-gifts/` | Personalised-gift retailer | Product grid |
| `youtube.com`, `snapchat.com/topic/...` | Video/social topic pages | Card DIY and gift-idea videos |

**This is not the retailer wall the row was pattern-scored against.** The `friendship day gift for best friend` SERP was 10 of 10 product grids. This one is roughly a third calendar/observance pages, a third brand-blog and wishes content, and a third retail — and the retail pages only surface for the "ideas/gifts" phrasing, not the "what to do" phrasing. The angle consequence is recorded below.

**Word counts and heading structures of the top 5 were not extracted**, because ranks could not be established and fetching an arbitrary five pages would have produced a table that looked rigorous and meant nothing. This is a gap in the Phase 1 output and is flagged rather than papered over.

---

## Phase 2 — Gap analysis

**Table stakes** (present across the measured set, so the post must carry them):
- What Friendship Day is, in one extractable definition.
- When it falls, and that the date moves — first Sunday of August in India.
- That it is distinct from the UN International Day of Friendship on 30 July. Two of the calendar pages carry both dates and confuse them.
- Something concrete to actually do, in a list.

**The gap** — nothing in the measured set answers the question for an adult:
- The calendar pages answer *when*, then stop.
- The wishes/quotes pages answer *what to say*, not what to do.
- The one activities page is written for children in a play centre.
- The retail pages answer *what to buy*.
- **Nobody treats the day as a coordination problem.** Not one page acknowledges that the first Sunday of August is the single hardest day to get six working adults into one room, or sorts what to do by how much notice the reader actually has.

**Stale data**: `nationaltoday.com` carries "August 3, 2026" in a page title. The first Sunday of August 2026 is **2 August**, not 3 August (2026-08-03 is a Monday). A calendar page with a wrong date in its title is the cheapest correctness win available here, and this post states the moving date with three years computed.

**Unanswered questions raised and dropped by the set**: why the date moves; whether the UN day or the Indian day is "the" Friendship Day; what to do when nobody in the group is in the same city.

**Fan-out sub-queries → H2/FAQ mapping**:

| Sub-query | Where it is answered |
|---|---|
| What is Friendship Day? | H2 "What Friendship Day is and when it falls" (first two sentences are self-contained) |
| When is Friendship Day / why does the date change? | Same H2 + FAQ 2 |
| Is Friendship Day the same as 30 July? | Same H2 + FAQ 2 |
| What should I do on Friendship Day? | H2 "What to do for Friendship Day, by how much notice you have" + FAQ 1 |
| What if my friends are in other cities? | H3 3 + FAQ 3 |
| What do I do for a friend I have drifted from? | H3 4 + FAQ 6 |
| What do we do as a group? | H3 5, H2 "Why the group of six never picks a date" + FAQ 4 |
| What if I have no time to plan? | H3 1 + FAQ 11 |
| Friendship day activities for people who work Sundays | FAQ 5 |
| Do I need an address / how long does it take? | FAQ 8, FAQ 9 |
| Should I post publicly or message privately? | FAQ 10 |
| When should I not send anything? | H2 "What a link cannot do — and when to call instead" + FAQ 12 |

**Angle** (recorded as `batchMeta.angle`): wins by being the only post that treats Friendship Day as a scheduling problem rather than an idea problem — five plans ordered by the notice each needs — using the 6.9-hour median save-to-last-edit gap to prove even the digital option is not instant.

### Deliberate separation from live and sibling pages

- **Sibling `friendship-day-gift-for-best-friend` (written in parallel)** sorts the *gift decision* by the state of the friendship: weekly friend / three years lapsed / abroad / group of six. I read its finished JSON before drafting. My organising axis is deliberately different — **notice needed × people to coordinate** — and the output is a plan, not an object. The group-of-six and the friend-abroad cases appear in both because the brief assigned them to both, but mine produce a date and a clock time rather than a purchase.
- **Live `things-to-do-on-girlfriend-day`** (fetched from Strapi, 1,184 words) is a mood-grouped "40+ ideas" listicle with budget tiers, a quick-checklist, and a generic 20–30-minute page-building walkthrough. This post has no mood groups, no idea count in the title, no budget tiers (it cannot have any — see below), and no walkthrough. It is the same occasion-shape trap the brief warned about and was avoided by construction.
- **103 live flower/bouquet posts**: `/bouquet-gf` appears in exactly one H3 out of five, as the option for the friend whose address you do not have, with the Deed-of-Devotion caveat attached. The post is not a bouquet post.

---

## Phase 3 — Sources

Four sources, all open access, all peer-reviewed or scholarly, none in `USED-SOURCES.md`, none on the closed-domain list, and **no domain shared with any of the six sibling posts in this batch** (checked by parsing every sibling's `batchMeta.sources`).

| # | Source | What it actually says | Tests |
|---|---|---|---|
| 1 | Sarah Hilaly, "Culture of Friendship Among the Apatanis of Arunachal Pradesh", *Space and Culture, India* 6(1) 38–50, 28 June 2018, CC BY 4.0 — `spaceandculture.in/.../view/322` | The Pataň labour gang is composed largely on the basis of village friendship cutting across genders; during the Myoko festival friends visit across villages to renew those ties, and the festival assigns friendship a special ritual position | Subject ✓ (friendship as institution and ritual, in India). Swap ✗→ pass: no other keyword in this batch is about friendship |
| 2 | Silvia-Georgiana Pătrașcu & Sebastian Vaida, "Friendship and Wellbeing in Emergent Adults. A Systematic Review", *Studia Universitatis Babeș-Bolyai Psychologia-Paedagogia* 70(1), June 2025 — `studia.reviste.ubbcluj.ro/.../view/9250` | Friendships marked by trust, emotional closeness and mutual support are associated with positive wellbeing indicators; friendships high in conflict or short on reciprocity are associated with more stress and lower psychological health | Subject ✓ (adult friendship quality). Peer-reviewed + open access ✓ |
| 3 | Jonathan Gruber, Eszter Hargittai & Minh Hao Nguyen, "The value of face-to-face communication in the digital world", *Studies in Communication Sciences* 22(3) 417–435, 28 Dec 2022, CC BY-NC-ND — `hope.uzh.ch/scoms/article/view/3340` | From a spring-2020 survey of a national sample of U.S. adults: most people missed elements of face-to-face interaction, and **particularly valued spontaneous interactions, physical closeness and independence from technology**; heavier use of voice calls, video calls, texts and social media was positively related to missing face-to-face contact | Subject ✓ (mediated vs in-person closeness). **Swap test: FAILS** — recorded in the audit, and named as the URL to surrender. NC-ND licence: cited and linked only, nothing reproduced |
| 4 | Ade Tuti Turistiati, "The Use of WhatsApp Group to Maintain Intercultural Friendship", *KOMUNIKA: Jurnal Dakwah dan Komunikasi* 14(2), 2020 — `ejournal.uinsaizu.ac.id/.../view/4030` | Qualitative case study of the WhatsApp group of SSEAYP batch '89 alumni, 20 informants across several countries. The group is used to exchange family news, mark birthdays and achievements, raise funds and **coordinate reunions**, and members agreed an unwritten rule keeping politics and religion out | Subject ✓ (how a scattered friend group is actually maintained). Directly load-bearing for the group-of-six section |

**Generic context statistics used: zero.** No PIB, TRAI, Census or MEA figure appears, so the "at most 1" item passes with room to spare.

**Wikipedia body links: zero.** Wikipedia URLs appear only as verified `sameAs` targets in `structuredData`, which does not count against the 0–2 body budget.

**Date fact-check, not a source**: `un.org/en/observances/friendship-day` is linked once in the body for the 30 July International Day of Friendship. It was fetched and the page header reads "International Day of Friendship 30 July". It is deliberately **kept out of `batchMeta.sources` and `citation`**, which is exactly what the checklist's date-reference exception prescribes for a post that states the date without depending on it. **Phase 8 recount**: `un.org` appears in exactly three posts in this batch — at the domain cap, not over it — so the single body link stays exactly as it is. It was neither moved into `sources`/`citation` (the exception exists so a date check does not consume a citation slot) nor duplicated nor stripped. Per the brief, nothing was dropped or swapped unilaterally.

### What could not be found

Searched for research on **adult friendship decay, dissolution and drift** that was not on a closed domain. DOAJ queries run: `bibjson.title:"friendship maintenance"`, `bibjson.abstract:"friendship maintenance"`, `bibjson.abstract:"maintenance behaviours"` / `"maintenance behaviors"`, `bibjson.abstract:"dormant ties"`, `bibjson.abstract:"lapsed" AND "friendship"`, `bibjson.abstract:"friendship" AND "decline over time"`, `bibjson.title:friendship AND bibjson.abstract:"network turnover"`, plus `friendship dissolution drift adults` and `coordination scheduling social plans group`. Semantic Scholar returned HTTP 500 on every query; OpenAlex returned 429 on every query (as the assignment warned). The one strong candidate for friendship decay, Roberts & Dunbar, is already used by the sibling post, and the remaining hits sat on `frontiersin.org`, `pmc.ncbi.nlm.nih.gov`, `journals.plos.org`, `journals.sagepub.com` or `doi.org` — all closed. **No open, unspent source on friendship decay was found today**, so the post makes no decay claim; it argues from coordination cost and from the wellbeing association instead. Re-check when OpenAlex and Semantic Scholar are available, or when a CORE API key exists.

Also searched for research on **group event scheduling / coordination cost**. Nothing topical surfaced in DOAJ that was not about telecom scheduling or construction projects. The group-of-six argument therefore rests on the Komunika fieldwork plus stated opinion, and is written as opinion where it is opinion.

---

## Constraints honoured

- **Pricing**: `facts.md` "Pricing and cost" is empty. No cost claim appears in the body, the FAQs, the table, the excerpt or the meta. The words "free", "price", "cheap", "paid" and "delivery charge" are absent, and the earlier draft's "Sunday reads as free time" was reworded to "unclaimed time" so no ambiguity survives. Consequence, recorded in the audit: the post cannot serve the "free things to do on friendship day" variant at all.
- **Doing nothing digital**: H3 1 is a phone call and nothing else, ranked first; the objection H2 names the death/diagnosis/heavy-silence and no-smartphone cases; and the same H2 admits `/love-gf` and `/darling` are romance-first templates that misfire when sent to a platonic friend unedited.
- **No year in the title.** The moving date is stated with 2026/2027/2028 computed from the calendar, not asserted.
- **Word count**: 1,799 by plain whitespace split (`md.split(/\s+/).filter(Boolean).length`), the authoritative measure.
- **FAQs**: 12, in `article.faqs` only. No FAQ heading in `contentMarkdown`.
- **Scratch files**: all namespaced `what-to-do-for-friendship-day-*`.

## Audit summary

47 passed, 3 failed, disjoint, all 50 strings byte-verbatim from `publish-checklist.md`.

1. `metaTitle 50–60 characters, exact keyword in the first five words (hard cap 70)` — **verified rather than assumed**: the keyword is six words, so it cannot fit in five. Keyword at word one, metaTitle 55 characters.
2. `Slug short, hyphenated, lowercase, no stop words` — **counted rather than assumed**: three stop words (`what`, `to`, `for`). Contradicts the "keyword in slug" item; slug kept.
3. `No source passes the **swap test**` — source 3 (SComS) fails it honestly. Kept, with the URL named for the orchestrator to decide.

### Phase 8 fix pass — 2026-09-02

- **Fixed**: the fourth internal link, `/missyou-bestfriend` (HTTP 307 → `/missyou-gf`, and since removed from
  `TEMPLATE_LINKS`). Repointed at `/missyou-gf` in `contentMarkdown` and `batchMeta.templateUrls`, and the anchor
  rewritten from "a miss-you page for a best friend" to "Our single \"I miss you\" page … worded for a partner",
  so it no longer promises a page that does not exist. All four internal links are now verified-200 paths.
- **Re-checked and unchanged**: all nine `factsUsed` lines still match the regenerated `content/facts.md` verbatim
  (3,394 / 795 / 41,636 / 50.2% / 6.9 h / n=995 — no stale 50.3% or 3,377 anywhere); no FAQ question appears as a body
  heading; FAQs live only in `article.faqs` (12); no cost or pricing claim; the single `un.org` body link untouched.
- **Word count**: 1,799 → **1,798** on the plain whitespace split (1,802 by `wordCount()` in `app/lib/batches.ts`).
  The new anchor is one word shorter than the old one, so nothing had to be cut elsewhere.
- **Still failing, all three by design**: the six-word keyword cannot fit a five-word metaTitle window; the
  exact-match slug carries three stop words; the SComS paper honestly fails the swap test and was neither dropped nor
  swapped — its `why` now records that it is one of four sources, that no URL or domain in this batch is over cap
  (`un.org` sits at the cap of three), and that the decision belongs to the orchestrator.
- **Re-ran all 50 checklist items** after the edit: 47 passed / 3 failed, disjoint, 47 + 3 = 50, every string
  byte-verbatim. `honestAssessment` rewritten to describe the post as it now stands, keeping the SERP honesty intact:
  only Seznam answered, Bing's RSS returned Wattpad FNAF fan-fiction for this keyword, and ranks are unknown so the
  finding is result-set shape rather than ordering.
