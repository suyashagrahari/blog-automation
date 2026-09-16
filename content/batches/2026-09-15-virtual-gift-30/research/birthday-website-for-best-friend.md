# Research brief — `birthday website for best friend`

- **Slug:** `birthday-website-for-best-friend`
- **Wave:** 4, row 8 of `WAVE4-PLAN.json`
- **Primary keyword:** birthday website for best friend
- **Secondaries folded in:** birthday page for friend, happy birthday page for friend
- **Category:** `digital-gifts-romance`
- **Templates:** `/searched`, `/nutrition`, `/birthday-gf` (+ `/templates` near the close)
- **`mustDifferentiate`:** TRUE

---

## Phase 0 — Data gate

`npm run facts` could not be re-run (production DB read denied in this environment), so
everything cites `content/facts.md` as measured **2026-09-15**, per BRIEF-WAVE4 §6.

Gate cleared: eleven relevant first-party lines, two inside the first 150 words
(**11.5 average views per created page** across 49,968 views on 4,357 pages, and
**94.1% published-and-shared**, 4,098 of 4,357). Both are on BRIEF-WAVE4's under-used
list; the 40.6% password figure and the 6.2-hour edit gap were deliberately kept out of
the opening, and the password figure appears only in §7 where it is load-bearing.

`## Pricing (fill in by hand)` is **EMPTY**. No price is stated or implied anywhere in
the post. The one FAQ that touches cost declines explicitly and points at
`/templates`.

**Disclosed in the body:** the database records which *template* was opened, not who
received it, so the 352 `/birthday-gf` pages prove what the template was written for
and nothing about the recipient. That disclosure sits in §2, in reader-facing prose.

---

## Phase 1 — SERP

Source: `SERPS-WAVE4.md`, `## birthday website for best friend`. **7/10 blog-shaped.**

| # | Result | Type | What it is |
|---|---|---|---|
| 1 | gifft.me/create/happy-birthday | Competitor tool page | Not fetched, not cited, not linked — `references/competitors.md` |
| 2 | r/website_ideas "need some ideas for a website for friends bday" | Forum | Asker is willing to *build* it |
| 3 | r/GiftIdeas "a silly website to celebrate birthdays" | Forum | Joke register, explicitly |
| 4 | r/Gifts "need birthday gift idea for my best friend (22M)" | Forum | Gift intent, male friend |
| 5 | r/AskReddit "creative ways to wish for friends" | Forum | Wish/greeting intent |
| 6–7, 10 | r/Gifts ×2, r/birthday | Forum | Listicle-resistant, urgent |
| 8 | TikTok | Video | — |
| 9 | github.com/topics/happy-birthday-website | Code index | Developer intent |

Secondary `birthday page for friend` (9/10 editorial, prefix_hits 15) skews harder to
developer intent — r/AskProgramming, r/lovable, r/website — which is why the plan folded
it in as a secondary rather than making it the primary.

**Collection caveat, recorded in `honestAssessment`:** all wave-4 SERPs are **Brave,
US-served**. Brave accepts no region parameter and DuckDuckGo's `kl=in-en` route was
rate-limited. These positions are reliable evidence of **page type** — which is what
Gate 2 needs — and unreliable evidence of **Indian ranking order**, which was not
measured.

**Phase 1 was not a full five-page fetch.** The #1 result is a competitor and is
excluded by policy; Reddit returned **HTTP 403** to every `.json` endpoint tried from
this sandbox. The analysis therefore rests on titles, subreddits and URL shapes rather
than full-page reads. That is a real limitation and it is why the "top 5 pages" audit
items are judged against the SERP's evident content type rather than against fetched
prose.

**What the SERP shape means.** Eight of ten results are people asking other people.
Nobody has written the article, the asker in r/website_ideas is ready to build
something, and r/GiftIdeas frames it as *silly*. Write for someone who will actually
make it, and be concrete about what goes on the page.

---

## Phase 2 — Gap analysis and the differentiation

### Mandatory differentiation (`mustDifferentiate: true`)

`blogs/birthday-wish-website-for-friend.json` was **read in full** before drafting.
Stemmed keyword similarity 0.60 — under the 0.80 reject threshold, semantically close.

**The split, in one sentence:** a birthday **wish** website is a container other people
fill with messages — a collective object judged by how many signed it; **this** is a
page one person makes and hands over finished, judged by what is on it, which is why
that post is about *what to write* and this one is about *who else ends up reading it*.

Cross-linked from §1 with the anchor "what to write on a birthday wish website for a
friend". `/blog` links are excluded from the verifier's 2–4 internal-link count by
design (`verify-batch.mjs:216,225`), so the cross-link costs nothing.

### The crowded corner — ten siblings read before drafting

| Sibling | Lane it already owns | Avoided here |
|---|---|---|
| `birthday-wish-website-for-friend` | The wish as a speech act; linguistic research on formulaic greetings; which templates transfer | No greeting-language research, no transfer table framing, no "four things to write" list |
| `virtual-gift-for-best-friend` | Friendship maintenance across cities; 7 ideas incl. `/searched` + `/nutrition` | No idea-list format |
| `long-distance-gift-for-best-friend` | Parcel logistics; "why a page for a friend must not read like a love letter" | Register argument kept to **one operationalised test**, not a section of theory |
| `digital-gift-ideas-for-best-friend` | Calibration; 8 ideas; "a joke format carries sincerity between friends" | Same claim exists there — so the joke templates are justified **by screenshot legibility**, not by sincerity |
| `digital-gift-for-best-friend` | Single choice with a time horizon | — |
| `digital-gift-for-long-distance-friend` | "Friendship has no anniversary, the gesture must create its own" | No occasion-creation argument; a birthday *is* the scheduled excuse |
| `birthday-website-for-girlfriend` | Four build routes (code / AI builder / template / ready-made), autoplay, GitHub Pages | No build-route comparison, despite the developer-intent secondary |
| `birthday-website-for-crush` | Calibrating intensity; deniability; privacy | Password argument runs the **opposite** direction |
| `birthday-surprise-page-for-sister` | Which templates transfer from a partner to a sibling | No transfer framing |
| `long-distance-birthday-gift-website` | Midnight delivery timing; Open Graph preview leak | No timezone or OG-card content |

`/searched` and `/nutrition` are described by three siblings. Both are described here
**freshly and from `app/lib/prompt.ts`**, and specifically on the axis nobody else used:
how each one reads *as a screenshot to a stranger*.

### The gap

Every sibling and every SERP result treats the page as a private object passing between
two people. It is not. A best friend's birthday page is the one page of this kind with a
**group** behind it — it gets read over a shoulder, screenshotted into the chat, put on
a story. Nothing on this SERP reasons from that, and it changes four concrete decisions:
which jokes go on, what comes off, where the photos come from, and whether to set a
password.

### Angle

> Wins by being the only post that treats a birthday website for a best friend as a
> semi-public object — the one page of this kind that is screenshotted into a group chat
> rather than kept between two people — and works out what that changes about the inside
> jokes, where the photos come from and whether to set a password, using SubhSandesh's
> 11.5 views per page, its 94.1% publish-and-share rate and the 40.6% password rate that
> a friend's page should probably invert.

### The inconvenient number, stated in the body

11.5 views per page counts **views, not viewers**. It could be one friend reopening the
page or eleven people opening it once. The post says so in the third paragraph rather
than letting the figure carry more than it can.

### Fan-out sub-queries → H2s

1. what is a birthday website for a best friend → §1
2. is it weird / cringe for a friend → §2 (and FAQ 1)
3. what do I write on it → §3
4. what photos do I use → §4
5. can I put our inside jokes on it → §5
6. which template should I use → §6
7. when is it a bad idea → §8

Two H2s — §4 (camera rolls) and §7 (password) — answer questions **nobody is searching
yet**; they come from the Reddit threads, not from measured demand. Recorded as an audit
failure rather than claimed as a mapping.

---

## Phase 3 — Sources

Route used: **Crossref → Unpaywall → OA landing page**, exactly as BRIEF-WAVE4 §2
prescribes, with blocked and at-cap hosts filtered out *before* spending a fetch.

Search terms run (the phenomenon, not the keyword): `friendship celebration ritual`;
`platonic intimacy expression friends`; `birthday celebration social ritual friends`;
`shared history reminiscence bonding friends`; `friendship social network witnesses
public`; `self-disclosure audience third party`; `collective memory small group
nostalgia`; `screenshot sharing social media memory`; `imagined audience context
collapse social media`; `whatsapp group india everyday communication`; `tagging friends
social media relationship display`; `gift giving digital peer group identity`; `feeling
understood being known close relationship`; `in-group humour shared reference bonding`.

### Selected — 4 sources, all open access, none used by any sibling

| Source | Domain | Batch use before this post | Subject test | Swap test |
|---|---|---|---|---|
| Schroeder & Fishbach, *Feeling known predicts relationship satisfaction* (2023-12-09) | `knowledge.uchicago.edu` | 0 | Friends named explicitly in Studies 1a–c | Fails in any post not about what to write on the page |
| Stone & Zwolinski, *The mnemonic consequences associated with sharing personal photographs on social media*, Memory Mind & Media (2022-08-11) | `cambridge.org` | 1 | Shared photographs and collective memory | Fails in any post not sourcing photos from other people |
| Sun, Ahmad Ghazali & Abdul, *The Imagined Audience in Social Media: A Systematic Review*, Studies in Media and Communication (2024-12-29) | `redfame.com` | 0 | Invisible audience, context collapse | Fails in any post about a two-person page |
| Teichert, *Mediating Close Friendship Intimacy in Times of (Social) Distance*, Networking Knowledge (2021-07-05) | `ojs.meccsa.org.uk` | 0 | Friendship communication specifically | Fails outside the friendship cluster |

All four were **fetched and their abstracts read in this session**; each cited sentence
was matched against the text on the page. Three are abstract-and-metadata reads — PDFs
do not parse in this sandbox — and that is recorded in each `batchMeta.sources` entry.
Zero generic context statistics (no PIB/TRAI/Census/MEA). Zero Wikipedia body links;
Wikipedia appears only as `sameAs` entity disambiguation in `structuredData`, paired
with verified Wikidata QIDs (Friendship Q491, Birthday Q47223, Screenshot Q208594,
Context collapse Q106678883, WhatsApp Q1049511 — all confirmed via the Wikipedia API).

### Rejected, and why

- `10.1093/jcmc/zmae023` — *Understanding screenshot collection and sharing on messaging
  platforms* (JCMC 2025). The single best fit for this angle. OA, but Unpaywall names
  only the publisher copy and `academic.oup.com` returns **403** to this sandbox.
- `10.1111/1467-9655.13778` — *Brothers, friends, and enemies: averting intimacy on
  Facebook in western India* (JRAI 2022). India-specific and on-subject; OA only via
  Wiley, which **403s**.
- `10.1002/mar.20561` (adolescent gift-giving and peer-group management) and
  `10.1109/taffc.2023.3244520` (haptic messages as inside jokes) — both closed access.
- `research.birmingham.ac.uk` (*Digital connection, real bonding*, Heliyon 2025) — good
  fit, but the domain already stands at **2 posts in this batch** and a third from a
  concurrently-written sibling would breach the cap of 3.
- Reddit threads 2–10 — **HTTP 403**, so they inform intent but are cited nowhere.
- gifft.me (#1) — competitor, excluded by policy.

Four sources is the floor of the 4–6 band and it is recorded as an audit failure with
the two DOIs whose later availability would close it.

---

## Phase 4–7 — Output

- `blogs/birthday-website-for-best-friend.json` — 1,703 words (plain split), 10 FAQs,
  9 H2s, one 4-row comparison table with a first-party column, `ItemList` mirroring the
  three H3s, `@id`-matched enrichment block on `<canonicalURL>#post` carrying `citation`
  one-to-one with `batchMeta.sources`.
- Internal links: `/searched`, `/nutrition`, `/birthday-gf`, `/templates` — four, all in
  `TEMPLATE_LINKS`, all placed after the section that earns them. Plus one `/blog`
  cross-link to the wish post.
- Slug checked against Strapi (`filters[slug][$eq]`): **not taken**, `data: []`.
- `categorySlug` `digital-gifts-romance` confirmed against the live category list.
- Verifier: no problem line names this slug. One note — `price-adjacent "pricing"` — is
  the FAQ *declining* to quote a price, which is the behaviour BRIEF-WAVE4 §5 requires.
- Audit: 47 passed / 3 failed, disjoint, union = all 50 checklist items byte-verbatim.
