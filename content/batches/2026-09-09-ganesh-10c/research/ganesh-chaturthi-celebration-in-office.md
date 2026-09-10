# Research brief — `ganesh chaturthi celebration in office`

**Batch:** `2026-09-09-ganesh-10c` (wave 3) · substitute assignment (third substitute this batch)
**Slug:** `ganesh-chaturthi-celebration-in-office` — verified free on Strapi 2026-09-10
**Category:** `indian-festivals` (verified live: `id 10`, "Indian Festivals")
**Date of this brief:** 2026-09-10
**Outcome: BOTH GATES PASS. Post written.**

Research lane, mine alone: **organisational behaviour** — workplace rituals and
celebrations, organisational belonging and inclusion, and the gap between a nominally
voluntary celebration and an implicitly compulsory one.

---

## 0. Why this keyword is off-list

The user's supplied list ran to 50 keywords. Every remaining unclaimed keyword on that
list duplicates one of the 25 live wave-1/wave-2 posts.

I re-counted the live claim myself rather than inheriting the figure, extracting from
all 25 live posts in `2026-09-09-ganesh-10` and `-10b`: each post's
`batchMeta.keyword`, every entry in its `article.keywords`, and every `Folds in:`
declaration in its research brief.

- **214 keyword strings with duplicates; 139 distinct** by my parse.
- The assignment stated **174**. The discrepancy is a parsing artefact — several briefs
  declare folds across a wrapped two-line list and use three different separators
  (`·`, `,`, backticked runs), so any single regex either over- or under-splits. I
  have not reconciled it to the exact string, and I am not claiming 139 is more
  correct than 174.
- **What is robust, and is what the gate actually needs:** across every extraction
  variant, **zero claimed strings contain the substring `office`, and zero contain
  `celebration`.** The nearest live claims are `corporate ganesh chaturthi message`
  and `ganesh chaturthi wishes for employees` — both declared by
  `ganesh-chaturthi-wishes-for-business`, both message-text keywords.

`ganesh chaturthi celebration in office` sits outside the supplied 50 and is clear of
the live claim on every count.

---

## 1. Phase 1 — SERP capture

### Method, stated honestly

Engine: **`WebSearch` tool**, one call per keyword, on 2026-09-10.

- **This is US-localised, not `gl=in`.** It is not the India-localised sweep BRIEF §5
  asks for. Recorded as a limitation, not papered over.
- Google's plain-HTTP endpoint is JS-walled (HTTP 200 plus `enablejs`, no result
  markup) and its scraping path returns 429. DuckDuckGo `kl=in-en` returns 202
  bot-challenges; Brave `country=in` returns 429. The shared Chrome browser was **not**
  used, so no sibling agent's tab was disturbed.
- **`WebSearch` exposes neither an AI Overview nor a People-Also-Ask block.** Both are
  therefore **not captured** for either keyword. Do not read their absence here as
  evidence they are absent from the live SERP — the tool does not surface them. This is
  a genuine, unclosed gap against the assignment's Phase 1 requirement.
- `pinterest.com` and `youtube.com` were excluded at the query, per rule.

### Top 10 — `ganesh chaturthi celebration in office`

| # | Domain | Title | What it is |
|---|---|---|---|
| 1 | manoshala.com | How to Celebrate Ganesh Chaturthi in the Office: 10 Creative Ideas | Wellness content site, listicle |
| 2 | sosparty.io | Online Ganesh Chaturthi Celebration Activities Ideas for Corporate Office | Virtual-events vendor, activity catalogue |
| 3 | ngievents.com | The Complete Guide to Planning a Corporate Ganesh Chaturthi Celebration in the Office | Event agency, vendor guide |
| 4 | mydecorative.com | Ganesh Chaturthi Celebration Ideas For The Corporate Offices | Decor content site, listicle |
| 5 | heliosevent.in | Guide To Create Ganesh Chaturthi Celebrations at Office | Event agency, vendor guide |
| 6 | extramile.in | 5 Ways to Celebrate Ganesh Chaturthi at the Workplace / Offices | Employee-engagement vendor blog |
| 7 | blogs.thecustomwish.com | Top Corporate Ganesh Chaturthi Decorations for Office | Corporate-gifting vendor blog |
| 8 | linkedin.com | Ganesh Chaturthi activity in office | LinkedIn Pulse repost of the sosparty piece |
| 9 | blogs.thecustomwish.com | Corporate Ganesh Chaturthi Gifts Transforming Office Culture | Corporate-gifting vendor blog |
| 10 | dextrus.in | Celebrate Festive Team-Building Activities in Office | Coworking-space vendor blog |

AI Overview: **not captured** (tool limitation). PAA: **not captured** (tool limitation).

### Top 10 — sibling keyword `ganesh chaturthi wishes for clients`

The live sibling is `content/batches/2026-09-09-ganesh-10b/blogs/ganesh-chaturthi-wishes-for-business.json`,
whose `batchMeta.keyword` is `ganesh chaturthi wishes for clients`.

| # | Domain | Title |
|---|---|---|
| 1 | caratlane.com | Happy Ganesh Chaturthi Wishes 2026: Best Quotes and Messages |
| 2 | bestmessage.org | Happy Ganesh Chaturthi Wishes Messages to Customers and Clients |
| 3 | fnp.com | 100+ Happy Ganesh Chaturthi Wishes & Images |
| 4 | bestmessage.org | Vinayaka/ Ganesh Chaturthi Wishes Messages for Business |
| 5 | palify.io | Ganesh Chaturthi Wishes : Heartfelt Messages & Tips |
| 6 | wolfglobal.org | 90+ Ganesh Chaturthi Wishes Messages [Joyful] |
| 7 | floweraura.com | Ganesh Chaturthi Wishes, Quotes & Text Messages |
| 8 | bloomsflora.com | Best Ganesh Chaturthi Wishes for Family and Friends |

(8 results returned, not 10.)

---

## 2. Gate A — SERP cannibalisation

**Method:** compared on **(domain, title) identity** — the same *article*, not merely the
same publisher. `pinterest.com` and `youtube.com` excluded by rule; neither appeared in
either set, so the exclusion changed nothing.

- **Shared articles: 0.**
- **Shared domains: 0.** The two result sets do not overlap at the publisher level
  either.

The sets are structurally different kinds of page. Mine returns **event agencies,
employee-engagement platforms, corporate-gifting vendors and a coworking operator** —
B2B service sellers writing content marketing for an HR buyer. The sibling's returns
**jewellery and flower retailers and message farms** — B2C sellers writing for someone
who wants a sentence to paste. Google is answering two different jobs.

**Gate A verdict: PASS.** Zero shared articles — below the "exactly 2 → stop and
escalate" threshold and well below the 3-article merge threshold. There is no SERP
ambiguity to report.

---

## 3. Gate B — substantive duplication against the live sibling

Read in full: `2026-09-09-ganesh-10b/blogs/ganesh-chaturthi-wishes-for-business.json`
(all 8 H2s of `contentMarkdown`, `keyTakeaways`, all 5 `sources`, `angle`,
`article.keywords`) and its research brief `research/ganesh-chaturthi-wishes-for-business.md`
(declared folds, Phase 2 gap list, Phase 3 rejected sources).

**What the live post claims.** Keyword `ganesh chaturthi wishes for clients`; declared
folds `corporate ganesh chaturthi message`, `ganesh chaturthi wishes for employees`,
`ganesh chaturthi wishes for colleagues`, `ganesh chaturthi wishes for boss`;
`article.keywords` adds `ganesh chaturthi message for business`. Six strings, all of
them message-text keywords. **None is `ganesh chaturthi celebration in office`.**

**What the live post actually covers.** Its subject is the *text of a greeting sent
inside a professional relationship* — five worked message variants by recipient rank, a
channel-choice table priced per recipient, register-by-status research, religious
neutrality **in the wording of a greeting**, when a company-wide festival *mail* reads
as performative, why bulk-sending a page is wrong, and whether 14 September is a working
day. Its own stated gap list is four items, all four about greetings.

### Lane-by-lane, the same test the `eco-friendly-ganesh-idol` abort applied

| This assignment's lane | Already in the live business-wishes post? |
|---|---|
| Who is expected to attend, and whether "voluntary" is experienced as voluntary | **No.** The post never discusses attendance, presence, or pressure. Its "performative" H2 is about an all-staff *email*, not an event. |
| Who pays — company budget, a collection, or the organiser | **No.** No cost, budget or contribution anywhere in the post. |
| How a remote or distributed team participates at all | **No.** Not one sentence. The post assumes an inbox, not a room. |
| Colleagues who do not observe the festival | **Partly, and on a different object.** The post covers not *presuming* in the wording of a greeting (Gebert; "wishing you and everyone celebrating"). It does not cover a colleague standing in a room during an aarti, opting out of a puja, or declining prasad. A sentence and an event are different problems. |
| Workplace ritual, belonging and inclusion literature | **No.** The post's scholarly sources are corpus pragmatics (request strategies by status) and business-communication politeness. Neither is about ritual or belonging. |
| Planning lead time for the celebration | **No.** |
| Whether 14 September 2026 is a working day | **Yes, fully and well** — the central 2026 gazetted vs restricted-holiday distinction, sourced to the CAG PDF, plus "check your state's list". |
| Message text by recipient rank | **Yes** — the whole post. |

**Score: five clean gaps, one partial on a different object, two genuine overlaps.**

### Why this is not a fold, stated against the standard that produced three aborts

The `eco-friendly-ganesh-idol` abort was correct because the live visarjan post already
carried *the same measured claims from the same three documents* and *stated the angle's
punchline verbatim* — what remained was one section's extension of an existing H2. That
is the fold test, and this assignment does not meet it.

Here, my angle's punchline — *a "voluntary" celebration organised by a manager is not
experienced as voluntary* — appears nowhere in the live post, in substance or in
phrasing. The live post has no concept of attendance at all. Folding this material into
it would mean adding five new H2s to a post whose keyword, title, meta description,
excerpt, `keyTakeaways` and every one of its eight sections are about what to *write*.
That is not an extension of an existing section; it is a second post wearing the first
one's slug.

**Gate B verdict: PASS**, subject to two hard constraints I imposed on the draft and
honoured:

1. **Do not re-litigate the holiday status.** The live post owns the gazetted-vs-restricted
   analysis and sources it properly. My post touches the working-day question only where
   it is load-bearing for scheduling an event, states it in a clause rather than an H2,
   and does **not** re-cite the CAG PDF.
2. **Do not reuse the live post's sources.** `repo.uni-hannover.de` (Gebert),
   `teslcanadajournal.ca` (Leopold), `doi.org/10.36923/jicc.v17i3.747` (Pikhart),
   `cag.gov.in` and `drikpanchang.com` are all excluded from my source set — not because
   any cap forces it (the caps are per batch and the sibling is in `-10b`), but because
   BRIEF §2 is explicit that a reader landing on two SubhSandesh Ganesh posts should not
   see the same citation. Gebert in particular is the closest thing in the live post to
   my lane, and re-citing it would have made the duplication argument for me.

---

## 4. Format finding — informational is the right format, and this is the useful finding

Unlike the `eco-friendly-ganesh-idol` SERP (9/10 commerce) and the
`banner`/`poster` SERP (design tools and stock libraries, zero informational results),
**this SERP is 10/10 informational.** Every result is a prose article. A blog post is the
correct format for this query, so there is no format risk to declare.

The finding that matters is the *shape* of those ten:

- **Eight of the ten are content marketing attached to a service** — three event
  agencies (`ngievents.com`, `heliosevent.in`, and `sosparty.io` which also occupies #8
  via a LinkedIn Pulse repost), an employee-engagement platform (`extramile.in`), a
  corporate-gifting vendor holding two slots (`blogs.thecustomwish.com`), and a coworking
  operator (`dextrus.in`). Several are competitors under `references/competitors.md`
  (`thecustomwish` is a personalised-gifting retailer). Read in Phase 1; none linked,
  cited or paraphrased.
- **All ten are idea catalogues.** Decorations, rangoli competitions, modak-making
  sessions, mandala art, aarti singing contests, team-building activities, gifts.
- **The organiser's actual anxieties are absent from all ten.** Not one addresses who is
  expected to attend, who pays, what a colleague who does not observe the festival is
  supposed to do while an aarti happens in the room they work in, or how a distributed
  team participates. Where inclusion appears at all it is a closing line about "cultural
  awareness", never a design constraint.
- The vendor incentive explains the gap cleanly: an event agency's page exists to make
  the celebration sound easy and desirable. "Who might not want to be there" is not a
  section that sells a mandap.

That is the gap the post is written into, and it is a real one rather than a
better-written version of the same catalogue.

---

## 5. Source-cap re-count — the assignment's figures were stale

Re-counted from all **8** sibling JSONs in `-10c` (`batchMeta.sources`, counting
**posts** not entries), because the assignment warned its figures had been wrong once
already. They had been:

| Domain | Assignment said | Actual, 8 blogs | Effect on me |
|---|---|---|---|
| `pmc.ncbi.nlm.nih.gov` | 2 posts, one slot | **3 posts** — `modak-recipe`, `rangoli-designs`, `decoration-ideas-at-home` | **CAP EXHAUSTED. Closed to me.** |
| `doi.org` | 2 posts, one slot | 2 posts — `banner-and-poster`, `ganpati-bappa-photos` | One slot. Confirmed. |
| `en.wikipedia.org` | 2 posts, one slot | 2 posts — `good-morning-wishes`, `songs-and-bhajans` | One slot. Confirmed. |

**No source URL appears in 2 or more posts.** Every other domain sits at 1.

**Re-counted again at the end, because two more siblings landed mid-assignment.**
`ganesh-chaturthi-activities-for-kids` and `ganesh-chaturthi-whatsapp-stickers` were
written while this post was in draft, taking `-10c` to 11 blogs. Neither used `doi.org`,
so the final position across all 11 blogs with this post included is unchanged:
`doi.org` 3 (at cap), `pmc.ncbi.nlm.nih.gov` 3 (at cap), `en.wikipedia.org` 2, no URL in
more than 1 post, **zero cap violations**. Both new siblings were also checked for
keyword collision against this assignment: their keywords are `ganesh chaturthi
activities for kids` and `happy ganesh chaturthi stickers for whatsapp`, neither claims
an office or workplace string, and neither body contains the word "office" at all.

The `pmc.ncbi.nlm.nih.gov` correction is the consequential one: an eighth blog
(`ganpati-decoration-ideas-at-home`) landed after the assignment's figures were taken,
and PubMed Central — the first place this lane's literature search would reach for — is
now closed. I also avoided `www.ncbi.nlm.nih.gov` (a distinct netloc, and at 1 post),
because treating it as separate from PMC would put the registrable domain
`ncbi.nlm.nih.gov` at 4 posts on a reasonable reading of the cap. That is a
prudence call, not a rule, and it is recorded rather than hidden.

Also avoided per BRIEF §2's heavily-used list: `drikpanchang.com` (19 of 25),
`arxiv.org` (preprint server), `frontiersin.org`, `aclanthology.org`, `archive.org`,
`journals.plos.org`, `nature.com`.

---

## 6. Phase 2 — gap analysis and H2 map

**Table stakes** (absent and the post looks incomplete): the 2026 date and the ten-day
shape to Anant Chaturdashi; that an office celebration is normally a shortened 1.5/3/5-day
form rather than the full ten; the concrete components — installation, a daily aarti,
prasad, visarjan.

**The gap — the four things none of the ten address:**

1. **Attendance.** Whether it is optional, and whether "optional" survives contact with
   a manager sending the invitation.
2. **Money.** Who pays, and what a per-head collection does to the person who did not
   want to attend.
3. **The non-observant colleague, as a design constraint** rather than a closing
   disclaimer — including that "opting out" is visible in a way that attending is not.
4. **The distributed team.** Every one of the ten assumes a room.

**Fan-out sub-queries → H2 map:**

| Sub-query | Becomes |
|---|---|
| how do we celebrate ganesh chaturthi in the office | Answer paragraph |
| what is an office ganesh chaturthi celebration, and how long | H2 — definition + the 1.5/3/5/10-day shape |
| is attending compulsory / do I have to go | H2 — the voluntary/compulsory tension |
| who pays for the office ganpati | H2 — funding models, compared in the table |
| what about colleagues who are not Hindu | H2 — inclusion as a design constraint |
| how do remote employees join | H2 — distributed participation |
| when should we start planning | H2 — lead time, carrying the Raksha Bandhan measurement |
| where does this go wrong | H2 — where SubhSandesh and the celebration both lose |

**Angle (→ `batchMeta.angle`):** wins by being the only post that treats an office Ganesh
Chaturthi celebration as an organisational-design problem — attendance, funding,
opt-out visibility and distributed participation — rather than a catalogue of decoration
and game ideas, and the only one that prices the planning window with SubhSandesh's own
festival lead-time measurement.

---

## 7. Phase 3 — sources

Four sources. **All four are peer-reviewed and open-access, all four were fetched and
read in full, and all four pass the subject test.** Zero generic context statistics,
zero Wikipedia body links, zero competitors. Full verified extracts are in
`batchMeta.sources`; this is the summary.

| # | Source | Domain | Peer-reviewed | Open | Read |
|---|---|---|---|---|---|
| 1 | Yim, Foulk, Klotz & Schilpzand, *Is Everyone Having a Good Time?* — accepted at *Journal of Management* | `discovery.ucl.ac.uk` | Yes (accepted) | Yes, institutional repo | Full pre-proof |
| 2 | Urrila, Siiriäinen, Mäkelä & Kangas, *Sense of belonging in hybrid work settings*, *J. Vocational Behavior* 157:104096 | `doi.org` | Yes | Yes, CC BY | Full |
| 3 | Lauring & Jonasson, *How is work group inclusiveness influenced by working virtually?*, *HRM Review* 33(1):100930 | `pure.au.dk` | Yes | Yes, CC BY | Full |
| 4 | Larsen, *Rituals and Ritual-like Activities in the Workplace*, *Management Revue* 36(4):49103 | `www.imrpress.com` | Yes | Yes, CC BY 4.0 | Full |

**Source 1 is the load-bearing one and it is squarely on subject.** Its Study 1 is an
inductive coding of what 37 employees said about the last *workplace celebration* they
attended — 105 negative responses in seven categories, with frequencies. Three of those
categories are precisely this assignment's three anxieties: *require personal
sacrifices* (36), *exclusion* (20) and *attendance pressure* (5). No competing page has
anything like it, and it is the reason the post can treat attendance pressure as
measured rather than asserted.

**Swap test.** All four concern workplace rituals, organisational belonging or virtual
inclusion. None could sit unchanged in a rangoli, modak, banner or photos post in this
batch — the swap test is passed by construction, because the lane is organisational
behaviour and no sibling shares it.

**Two accuracy notes carried into the body rather than hidden:**

- The ritual and belonging samples are American, British, German and Finnish, and none
  concerns a *religious* festival. Yim et al. state their own limitation — data span
  "US, UK, and Germany" and "we cannot rule out potential cultural effects", with
  perceptions "in more collectivistic cultures may differ significantly". The post says
  so and frames every applied claim as a mechanism argument, not a measurement of Indian
  offices.
- Lauring & Jonasson is **conceptual** — propositions, not an empirical test. The post
  says "a proposition rather than a tested result" and also states that their
  Proposition 1 runs the *opposite* way at group level, rather than quoting only the
  half that suits the angle.

**Cost figures.** No dated source for Indian office-celebration costs was found. The
₹200–500 per-head figure is therefore labelled in the body as an **illustrative range,
not a sourced figure**, per the assignment's accuracy rule. It is not in `sources` and
not in `citation`.

**No Indian labour-law or holiday-entitlement claim is made anywhere.** The post says
only that whether 14 September is a working day depends on the state notification and
the employer's leave policy, and that it varies. The live business-wishes post already
owns the sourced gazetted-vs-restricted analysis, and its CAG source is deliberately not
re-cited here (Gate B constraint 1).

### Sources considered and rejected

- `mdpi.com` — *Religions* 13(6):481, "Building a More Inclusive Workplace for Religious
  Minorities". **HTTP 403** to the fetcher on both the article and PDF URLs, confirming
  the `-10b` sibling's finding independently. Would have been a good fourth religion-at-work
  source. Not cited, because it could not be read.
- `onlinelibrary.wiley.com` — Héliot et al., "Religious identity in the workplace: A
  systematic review", *Human Resource Management* 59(2), CC BY per OpenAlex. **Not
  attempted:** the `-10b` sibling brief records all three open mirrors returning 403 or
  timing out and says explicitly "do not burn time re-searching it". Honoured.
- `sites.pitt.edu` / `cmu.edu` — Babcock, Recalde, Vesterlund & Weingart, "Gender
  Differences in Accepting and Receiving Requests for Tasks with Low Promotability",
  *American Economic Review* 107(3). Genuinely relevant to *who ends up organising the
  office celebration*, and it would have been the post's sharpest additional claim. The
  author copy **reset the connection** repeatedly and the CMU mirror 404s; AEA is
  paywalled. **Dropped rather than cited from memory.** Worth one attempt by a future
  agent via a different mirror.
- `researchgate.net` / `academia.edu` — aggregator mirrors. Excluded on the precedent set
  by the `eco-friendly-ganesh-idol` abort report.
- `sciencedirect.com` — 403s to the fetcher (bot block, not a paywall) for both Elsevier
  papers. Both were read instead via their CC BY institutional-repository copies
  (`osuva.uwasa.fi` for source 2, `pure.au.dk` for source 3). Source 2 is cited at its
  canonical DOI because that is also the OA URL OpenAlex reports; source 3 is cited at
  the repository copy actually read.
- `deccanherald.com` — "Ganeshotsav declared Maharashtra's state festival" (10 July
  2025). Fetched, but only the headline, dek and date rendered; the body did not. Citing
  a headline is not verification, and the fact is not load-bearing for the angle.
  **Dropped.**
- `frontiersin.org`, `arxiv.org`, `journals.plos.org`, `nature.com`, `drikpanchang.com` —
  avoided per BRIEF §2's heavily-used list. The festival date is stated without a
  citation because it is the batch's own premise, agreed across all 25 live posts, and
  the post states no muhurat time, so per checklist item 36 the panchang earns no place
  in `sources` or `citation`.
- `pmc.ncbi.nlm.nih.gov` — **the domain cap is exhausted at 3 posts** (see §5). This is
  where an organisational-behaviour literature search naturally lands first, so the whole
  source set was built to avoid it. `www.ncbi.nlm.nih.gov` was avoided too, as a prudence
  call recorded in §5.

### Cap position after this post

`doi.org` moves from 2 posts to **3 — now at the cap.** `en.wikipedia.org` stays at 2
(one slot). `pmc.ncbi.nlm.nih.gov` stays at 3 (exhausted). `discovery.ucl.ac.uk`,
`pure.au.dk` and `www.imrpress.com` are all new to the batch at 1 post each. No URL
appears in 2 or more posts. Verified by re-counting all nine `-10c` blog JSONs with this
post included.

---

## 8. Internal links (BRIEF §3, rewritten 2026-09-10)

Read in its **current** form, not the superseded ban.

- `/happy-ganesh-chaturthi` — **LIVE**, and the topical CTA. Linked in the body and
  carried in `batchMeta.templateUrls`. Present in `TEMPLATE_LINKS`
  (`app/lib/prompt.ts:57`, added 2026-09-09).
- `/guides/happy-ganesh-chaturthi` — **live and legitimate in the body**, but it is
  **not** in `TEMPLATE_LINKS`. Verified against the array directly. So checklist item
  **"Every internal link is a real URL from TEMPLATE_LINKS"** cannot pass as written; it
  is recorded in `auditReport.failed` with the live verification as the `why`, and the
  URL is **kept out of `templateUrls`**. Two siblings handled it exactly this way.
- `/templates` — **not used.** It was only ever needed as a substitute while the Ganesh
  page was 404, and BRIEF §3 now says it is no longer needed.

---

## 9. Audit outcome

**48 passed, 2 failed, `passed ∩ failed = ∅`, `|passed| + |failed| = 50`** — asserted
programmatically against the 50 item strings extracted verbatim from
`references/publish-checklist.md`, including the `**bold**` markers and the full
multi-line clause of item 36.

The two failures, both structural rather than fixable by more writing:

1. **"Slug short, hyphenated, lowercase, no stop words"** — the slug contains the stop
   word "in". Kept deliberately: the assignment fixed the slug to match the keyword
   string exactly, item 14 requires the target keyword in the slug, and renaming to
   `ganesh-chaturthi-office-celebration` (also verified free) would break that match.
   Flagged rather than silently renamed.
2. **"Every internal link is a real URL from TEMPLATE_LINKS"** — `/guides/happy-ganesh-chaturthi`
   is live and legitimate but is not in the `TEMPLATE_LINKS` array. See §8. It would close
   only if that URL were added to `TEMPLATE_LINKS`.

Word count by the studio's own `wordCount()` in `app/lib/batches.ts`, replicated exactly:
**1,776** (target 1,700–1,780). Plain split: 1,724, so the reference schema validator's
1,500–1,800 check also passes. FAQs are excluded from both figures — they live only in
`article.faqs` and are absent from `contentMarkdown`, verified by regex.

## 10. Files emitted

- `content/batches/2026-09-09-ganesh-10c/research/ganesh-chaturthi-celebration-in-office.md` — this brief.
- `content/batches/2026-09-09-ganesh-10c/blogs/ganesh-chaturthi-celebration-in-office.json` — the post.

Not touched: `batch.json`, `content/facts.md`, `ASSIGNMENTS.json`, every sibling blog.
