# Research brief — `diwali wishes with name and photo`

- Batch: `2026-08-19-diwali`
- Slug: `diwali-wishes-with-name-and-photo` (Strapi check on 2026-08-19: `filters[slug][$eq]` returned 0 rows — free)
- Intent: transactional / tool. The searcher wants a generator, not an essay.
- Siblings present in `content/batches/2026-08-19-diwali/blogs/` when I checked (2026-08-19): **none**. This was the
  first blog file written into the batch, so there were no sibling `batchMeta.sources` to pick around. Domain
  de-duplication was done against the 139 URLs / 108 domains already used across the rakhi and miss-you batches.

---

## Phase 1 — SERP analysis

`WebSearch` for the exact keyword returns almost no editorial content. The first page is Pinterest boards, Freepik
stock, and four name-on-image generators. There is no AI Overview and no featured snippet on this query; Google is
treating it as a tool query.

| # | Page | Type | Words / structure | Where the answer is | Data cited | Format elements | Tone | Optimising for |
|---|---|---|---|---|---|---|---|---|
| 1 | mynamepix.com — "Create Personalized Happy Diwali Wish With Name" | Generator | ~120 words of prose around a live editor | No answer; the editor *is* the answer | None. Body copy still says "wish Diwali 2018" | Name field capped at 25 chars, crop tool, public-gallery opt-in, related-design grid | Third person, promotional | The click into the editor, plus long-tail "with name" variants |
| 2 | mynameart.com — "Diwali Wishes With Photo [FREE]" | Generator gallery | ~150 words + a ~60-item category list | None | None | Enormous category nav (Alphabet → Bhai Dooj → Birthday Cake), template thumbnails | Third person, keyword-dense | Internal link equity across every occasion |
| 3 | birthdayphotoframes.com — "happy diwali wishes" | Generator gallery | ~200 words across card teasers | None | None | Ad slots, per-frame pages, "Free Diwali 2025" naming | Third person | Year-stamped frame pages, refreshed annually |
| 4 | threadvibeliving.com — "7 Unique Diwali Name Cards for Guests" | Retailer blog listicle | ~1,100 words, H2 + 7 H3s + FAQ | Buried; the intro is scene-setting | None | 7 card types (handmade, hand-painted, laminated, digital, vintage…), product cross-links, 3-question FAQ | Third person, hedged ("can be a great idea") | Selling home décor; the greeting is the hook |
| 5 | newmynamepix.com / Freepik / Pinterest | Asset libraries | n/a | n/a | None | Thumbnail grids | n/a | Image search |

Consistent findings across all five: **zero data of any kind, zero dates, no author byline, no discussion of who
the greeting is for.** Two pages carry stale year copy (2018, 2025). Every page assumes the reader has already
decided to personalise and only needs a design.

## Phase 2 — Gap analysis

**Table stakes** — what all five cover and this post must therefore include: what "with name and photo" means, the
two formats (flat image vs page/link), a way to choose a design, and how to share it.

**The gap.** Not one page asks *how many* greetings the reader is about to send, or whether personalising all of
them is a good idea. Diwali is a broadcast festival — one sender to thirty or fifty contacts including colleagues,
clients and neighbours — and every ranking page treats it as one-to-one. Nobody says "do not put a colleague's name
on a diya graphic". Nobody discusses which photo to use, only that you may add one.

**Stale data.** There is no data to supersede; there is none on any of the five pages. The nearest thing is stale
copy (mynamepix still says 2018; birthdayphotoframes brands frames "Diwali 2025").

**Unanswered questions raised and dropped:** does a name change how the greeting lands? Which photo works? When
should it be sent? Is it appropriate for work contacts?

**Fan-out sub-queries → H2s:**

| Sub-query | H2 |
|---|---|
| what is a diwali wish with name and photo | What a Diwali wish with a name and photo actually is |
| how many diwali wishes do people send | Diwali is a broadcast festival, so the maths is different |
| who should get a personalised diwali greeting | Who on your list actually warrants a name and a photo (5 ranked H3 tiers) |
| does adding a name make a greeting feel more personal | What a name buys you when the recipient knows you sent forty-nine others |
| which photo for diwali greeting card | Which photo to use, and why a family photo behaves differently |
| name on image vs shareable page | Broadcast greeting versus personal greeting, compared (table) |
| when is diwali 2026 / when to send | folded into the broadcast H2 (Sunday 8 November 2026) |
| is it rude / when not to | When a name and photo is the wrong choice |

**Angle.** Wins by being the only post that treats a Diwali name-and-photo greeting as a rationing decision on a
fifty-name broadcast list rather than a design choice, ranking five recipient tiers against Hill and Dunbar's
measured 68 cards per sender and SubhSandesh's own 12.1 views per created page and 44.3% password rate.

**Deliberate divergence from the rakhi sibling.** `2026-08-18-rakhi-2/blogs/raksha-bandhan-wishes-with-name-and-photo.json`
owns the JPG-versus-shareable-link format argument and the name-effect / personalisation-response literature
(RePEc field experiments, PROMPTS SWAT, own-name EEG, mere-presence-of-image). This post does not re-run that
spine: the format comparison appears once, as a table row, and the research lane is gift-giving and greeting
psychology — giver/recipient asymmetry — with five sources that share no URL or domain with any rakhi post.

## Phase 3 — Sources

Research lane held: **gift-giving and greeting psychology; the asymmetry between what givers think matters and what
recipients actually value; effort and thoughtfulness perception.** Deliberately out of the homesickness/belonging
and B2B/commercial-gratitude lanes held by other agents in this batch.

Search pattern used (phenomenon, not keyword): `giver recipient asymmetry thoughtfulness gift study`,
`personalised greeting perceived effort recipient`, `overindividuation gift giving multiple recipients`,
`christmas card network size social`, `gifts that reflect the giver closeness`.

| Source | Domain | Read | Why it passes the subject test | Why it fails the swap test (i.e. is specific to this post) |
|---|---|---|---|---|
| Hill & Dunbar, "Social network size in humans", *Human Nature* 14(1), 2003 | `rahill.webspace.durham.ac.uk` (author's copy, Durham) | Full text | Measures how many people a person sends seasonal greeting cards to, and what predicts who gets contacted | Only this post argues about list *size*; a post about a partner or a sibling has one recipient |
| Zhang & Epley, "Exaggerated, Mispredicted, and Misplaced", *JEP: General* 141(4), Nov 2012 | `web2-bschool.nus.edu.sg` (NUS copy) | Full text | Peer-reviewed, open copy; measures whether a giver's thought registers with the receiver | The load-bearing claim is that thought only counts when *triggered* — an argument that exists here because fifty greetings arrive at once |
| Gino & Flynn, "Give them what they want", *JESP* 47(5), Sep 2011 | `www.gsb.stanford.edu` | **Abstract only** (publisher paywalled) | Recipients vs givers on unsolicited effort reading as thoughtful | Used for the "personalisation starts to look automated" argument, not for gift choice generally |
| Aknin & Human, "Give a piece of you", *JESP*, 2015 — via SFU's university summary, 14 Feb 2017 | `www.sfu.ca` | **University summary only**; underlying paper paywalled and not read | Gifts that reflect the giver produce more closeness — the photo-choice question | Only this post has to choose between a family photo and a stock diya |
| Steffel, Williams & LeBoeuf, "Overly Specific Gift Giving", working paper, Apr 2015 | `marketing.wharton.upenn.edu` | Full text | Givers over-personalise and misjudge what reads as thoughtful; carries hard percentages | Used against over-specifying the greeting (nickname + five photos), which is a name-and-photo-specific failure mode |

- **Generic context statistics used: 0.** No PIB / TRAI / Census / MEA figure anywhere, leaving the batch's single
  allowance untouched for a sibling.
- **Wikipedia links in the body: 0** (`en.wikipedia.org` is banned for this batch). Wikipedia appears only as
  `sameAs` pairs in `structuredData`, which is entity grounding, not a source.
- **Domain overlap:** none of the five domains appears in any of the 139 source URLs across the earlier batches, and
  none appears on the batch ban list.
- **Competitors cited: none.** All five SERP pages are generators or a retailer blog and were read for analysis only.

### Fact-checks (not citations)

- Diwali / Lakshmi Puja 2026: **Sunday 8 November 2026**; five-day festival **Friday 6 – Tuesday 10 November 2026**.
  Weekdays verified computationally (`datetime.date(2026,11,8).strftime('%A')` → Sunday; 6 Nov → Friday;
  10 Nov → Tuesday). **No muhurat time is stated in the post**, so no panchang source is cited, per the batch brief.
- Wikidata QIDs verified against the Wikipedia API (`prop=pageprops&ppprop=wikibase_item`, no redirects, no
  `missing` keys): Diwali `Q10244`, Lakshmi Puja `Q6479912`, Greeting card `Q915196`, Personalization `Q1000371`,
  WhatsApp `Q1049511`.

## Phase 4–7 notes

- Body: **1,789 words** by plain whitespace split, FAQs excluded (they live only in `article.faqs` and the
  renderer-built FAQPage). 1 H1, 8 H2s, 5 H3s. 11 FAQs.
- First-party facts: 8 lines from `content/facts.md` used verbatim; three of them (2,739 pages, 12.1 average views,
  44.3% password rate) sit inside the 123-word opening answer paragraph.
- Comparison table: 5 rows, real values, last column entirely first-party.
- Internal links (3, all from `TEMPLATE_LINKS`): `/love-gf` in tier 3, `/holi` and `/templates` in the
  wrong-choice section. The post states plainly that **there is no Diwali template today**.
- `categorySlug`: `festive-beats`, confirmed live in the Strapi categories endpoint on 2026-08-19.
- Audit: 47 passed / 3 failed, disjoint, summing to the 50 checklist items. The three failures are the six-sentence
  opening paragraph (deliberate, to keep one liftable answer block), one H2 whose framing line carries no number of
  its own, and the absence of any Indian context statistic behind the fifty-contact premise.
