# Research brief — `raksha bandhan whatsapp status with name`

- **Batch:** `2026-08-18-rakhi-2`
- **Slug:** `raksha-bandhan-whatsapp-status-with-name`
- **Intent cluster:** C19 · transactional · asset type "tool" · category "rakhi"
- **Volume / difficulty:** 400–1200 EST · winnable, 5 weak in top 10
- **Written:** 2026-08-18. Phase 0 facts regenerated 2026-08-18 (not re-run by this agent).

## Sibling de-confliction (read first)

`content/batches/2026-08-13-rakhi/blogs/how-to-send-rakhi-wishes-on-whatsapp.json` was read
in full before drafting. That post is about **sending a wish into one chat**: forwarded
labels, the five-chat forwarding cap, Open Graph link previews, and five send formats
(text / image / status / voice note / link). Its Status coverage is one H3 and one FAQ.

This post is about **Status as a broadcast** and deliberately does not restate any of the
sibling's mechanics:

| Owned by the sibling post | Owned by this post |
|---|---|
| Forwarded label, five-chat forwarding cap | Status privacy: all contacts / except a list / only a list |
| Open Graph tags and link-preview debugging | The 24-hour expiry as a *scheduling* constraint |
| Sending into a single chat thread | Broadcasting to an imagined vs actual audience |
| "Which of five send formats" | "Which of six ways to carry a name in a broadcast" |
| Delivery ticks as feedback | Status viewer list (private, ephemeral) vs recorded page views |

No internal link points at any 2026-08-13 slug — none of them is published, so the URL
would 404.

Overlap risk inside this batch: `raksha-bandhan-wishes-with-name-and-photo` also covers
name personalisation. The separation held here is that this post only discusses a name
*inside a plural audience* — why a name is needed at all when the audience is not one
person — and never covers image composition or name-on-photo rendering.

## Phase 1 — SERP analysis

Query: `raksha bandhan whatsapp status with name` (WebSearch, 2026-08-18). Every result is a
competitor under `references/competitors.md` (wishes farm, personalised-gift retailer, or
name-image generator). All five were fetched in full and analysed; **none is cited or
linked**. The two ranking URLs supplied in the brief are rows 1 and 2.

| # | Page | Words | Headings | Direct answer? | Data cited | Format elements | Tone | Actually optimising for |
|---|---|---|---|---|---|---|---|---|
| 1 | sheetwa.com — "130+ Raksha Bandhan Wishes to Send on WhatsApp in 2026" (dated 25 Feb 2026) | ~5,270 | 37 (H2/H3 by wish category: Short / Heartfelt / Funny / Long-Distance / Brothers / Sisters / Quotes / Status Ideas) | No — three throat-clearing paragraphs, then lists | None. No statistic, no source, no date beyond the byline | Key Takeaways box, hundreds of copy-lines, internal links to its own WhatsApp-bulk-sender product. **Zero JSON-LD** | Second person, warm, generic ("you want to make your sibling smile") | Volume of copyable text + funnelling to a bulk-messaging SaaS |
| 2 | mynameart.com — "Happy Raksha Bandhan Wishes In Hindi Image" | ~520 | 11, mostly navigation | No prose answer at all — it is a tool page | None | Name-input form, card gallery, huge category nav. **Zero JSON-LD** | Third person, thin SEO boilerplate | The literal "with name" query, served by a generator |
| 3 | floweraura.com/blog — "Raksha Bandhan Status For Whatsapp, Facebook & Instagram" (4 Aug 2021) | ~1,210 | 13 (Brothers / Sister / Conclusion + gift-post rail) | No — one setup paragraph, then two quote lists | None; content stale since 2021 | Two lists, "Conclusion", related-post rail into rakhi gift SKUs. **Zero JSON-LD** | Third person, promotional | Rakhi gift-hamper conversion |
| 4 | mynamepics.in — "Raksha Bandhan Wishes Quote Whatsapp Status With Name" | ~560 | 12, mostly navigation | No | None; page text still says **2018** and "Google Plus" | Name field capped at 19 characters, download button, ad slots. **Zero JSON-LD** | Title Case keyword soup | Name-image generation, unmaintained |
| 5 | tophindistatus.com — "Raksha Bandhan Status For Whatsapp In Hindi" | ~3,710 | 2 (one H1, one "Read More") | No | Festival history in Hindi, no sourcing; page still labels statuses "2025" | Blockquoted couplets, images. **Zero JSON-LD**, no heading hierarchy | Hindi, devotional-literary | Hindi status copy volume |

Observations that shaped the draft:

- **Not one page states who a status is visible to.** Five pages about statuses, zero
  mentions of status privacy, the default audience, or "Only share with…".
- **Not one page mentions timing.** The 24-hour expiry is never used to answer "when do I
  post this", and no page names the 2026 date.
- **Not one page carries any structured data**, not even a FAQPage. There is no FAQ block
  anywhere in the top five.
- Three of the five are name-generator tool pages with < 600 words; the two long pages are
  pure copy-line inventory. The SERP is winnable on explanation, not on more quotes.
- Stale data: mynamepics.in still says 2018 and references Google Plus; floweraura's post
  is from August 2021; tophindistatus still labels statuses 2025.

## Phase 2 — Gap analysis

**Table stakes (must appear or the post looks incomplete):** actual usable status lines with
a name in them; brother/sister framing; Hindi as well as English; the fact that a status
disappears; the 2026 date.

**The gap (none of the five covers any of these):**

1. Who actually sees a status — the three privacy settings and the default of all contacts.
2. When to post, derived from the 24-hour expiry, against Friday 28 August 2026.
3. What feedback a status gives back (a private viewer list that dies with the status) versus
   a link whose opens are recorded.
4. Whether a broadcast does the same emotional work as a message addressed to one person.
5. The ~30-second clip cap as a *composition* constraint (name in the first two seconds).
6. Where a status is the wrong surface entirely — private content, muted contacts, no
   smartphone, same room.

**Unanswered questions the pages raise:** all five tell the reader to "add your sibling's
name", none says what the name is doing or why it matters when hundreds of people are
reading; several tell the reader to post to "status, Facebook and Instagram" without noting
that the audiences are different.

**Fan-out sub-queries → H2 mapping:**

| Sub-query | Where it is answered |
|---|---|
| what is a whatsapp status with a name | H2 "What a Raksha Bandhan WhatsApp status with a name actually is" |
| who can see my whatsapp status | H2 "Who actually sees your status, and who you think sees it" |
| when should I post a rakhi status / raksha bandhan 2026 date | H2 "When to post it, so the 24 hours land on the festival" |
| raksha bandhan status ideas with name / video / voice / hindi | H2 "Six ways to put his name in a Raksha Bandhan status" (6 H3s) |
| which is better, status or link / how long does it last | H2 "Which format to pick, by audience, lifespan and feedback" (table) |
| does a status actually mean anything to him | H2 "What a name inside a broadcast can and cannot do" |
| should I post a status or message him / is it rude | H2 "When a WhatsApp status is the wrong place for the wish" |

**Angle (`batchMeta.angle`):** wins by being the only post that treats a rakhi status as a
broadcast rather than a wishes list — who the 24-hour window and the three privacy settings
actually expose it to, when to start the clock for Friday 28 August 2026, and what a name can
and cannot do inside a plural audience — grounded in 32,683 recorded page views at 12.0 per
page and research showing ephemeral broadcasts feel enjoyable but are perceived as less
supportive than targeted messages.

## Phase 3 — Sources

Research lane for this post (assigned to avoid collision with nine concurrent siblings):
**ephemeral / disappearing posting behaviour, and broadcast-versus-directed messaging on felt
connection.** Search strings that worked: `ephemeral social interaction Snapchat experience
sampling`, `directed vs broadcast communication well-being tie strength`, `imagined audience
ephemerality Stories diary study`, `own name attentional capture open access`. Searched the
phenomenon, never the keyword.

| Source | Type | What it actually says | Verification |
|---|---|---|---|
| Bayer, Ellison, Schoenebeck & Falk (2016), *Information, Communication & Society* 19(7) — author copy on asc.upenn.edu | Peer-reviewed, freely readable author copy | Two-week experience sampling (N = 154) + interviews (N = 28): ephemeral-platform interactions were rated **more enjoyable** and produced **more positive mood** than calling, texting, email or Facebook, but were perceived as **less supportive**. | PDF downloaded and text-extracted; abstract and results section read in full |
| Burke & Kraut (2016), *Journal of Computer-Mediated Communication* 21(4):265–281 — author manuscript | Peer-reviewed (author's pre-print of the version of record) | Opt-in panel of **1,910** users linked to server logs: receiving **targeted, composed** communication from strong ties was associated with improvements in well-being (β = .04, p = .003); viewing **wide-audience broadcasts** and receiving one-click feedback were not. | PDF downloaded and text-extracted; abstract, method and results read. The PDF states it is the pre-peer-reviewed version of the JCMC article; the OUP and Wiley copies both returned 403 to this environment |
| Yao, Taylor & Leiser Ransom (2024), *Social Media + Society* | Peer-reviewed, gold OA (CC BY-NC) | Retrospective diary study of posts vs Stories (**n = 1,270**): channel **ephemerality predicted a less diverse and less close imagined audience**; imagined closeness was positively related to disclosure intimacy. | **ABSTRACT ONLY.** journals.sagepub.com served a Cloudflare challenge; the abstract, authors, licence and issue date were verified through the Crossref and Semantic Scholar APIs. Nothing beyond the abstract is claimed in the post |
| Li, Lee, Chiu, Loeb & Sanderson (2024), *Cognitive Research: Principles and Implications* (CC BY), read on PMC | Peer-reviewed, open access | Experiment 1 (**39** participants): a listener's own name as an auditory distractor slowed visual word categorisation relative to other names, and own names were detected faster; Experiment 2 (3 compression levels × **25**) found capture weakest under intense time compression. | Article page fetched; abstract, significance statement and results read. Authors, journal, DOI and 12 May 2024 date confirmed via Crossref |

Source hygiene:

- **Zero competitor citations or links.** All five SERP pages were read for Phase 1 only.
- **Zero generic context statistics.** No PIB, TRAI, Census or MEA figure appears — the
  batch's one allowance was not spent.
- **Zero Wikipedia links in the body.** Wikipedia appears only inside `structuredData`
  `sameAs`, paired with Wikidata QIDs verified against the Wikipedia API on 2026-08-18:
  Raksha Bandhan `Q10266`, WhatsApp `Q1049511`, Instagram `Q209330`.
- **Subject test:** all four are about ephemeral posting, broadcast-vs-directed messaging, or
  name-driven attention — the exact mechanics of this keyword. **Swap test:** none would fit a
  shayari, Marathi-wishes, gift or long-distance post unchanged; each is tied to the
  broadcast/ephemerality argument.
- **Domain-cap breach recorded as an audit failure:** `pmc.ncbi.nlm.nih.gov` now appears in 3
  batch posts (distinct articles), over the batch cap of 2. See `auditReport.failed`.

### Sourcing gap worth naming

The platform mechanics this post relies on — the 24-hour expiry, ~30 seconds per video or
voice clip, the three status-privacy settings, and the viewer list being visible only to the
poster — are stated as **observed behaviour with no citation**. `blog.whatsapp.com` and
`developers.facebook.com` are banned in this batch (the sibling post spent them), and
`faq.whatsapp.com` returned either a localised 404 or "Sorry, something went wrong" to every
fetch attempted (`454876960047011`, `502161774931737`, `1053085649260949`, with and without
`locale=en_US` and a browser user-agent). Rather than invent a citation or cite an archive
snapshot as though it were live documentation, the post states these as observed behaviour.
Anyone re-running this should try the Help Centre from a real browser session and attach the
canonical URLs.

Raksha Bandhan 2026 = **Friday 28 August 2026**, fact-checked against calendarlabs.com. Kept
out of `sources` and `citation` deliberately: the post states the date, not the muhurat, so
per `publish-checklist.md` it is a fact-check rather than a citation. `drikpanchang.com` is
banned in this batch and was not used.

## First-party data used

Five facts, copied verbatim from `content/facts.md` (regenerated 2026-08-18). Three land in
the first 150 words (32,683 recorded views; 12.0 average views per page; 51.9% phone opens).

- 32,683 recorded views of shared pages — measured 2026-08-18
- Average views per created page: 12.0 — measured 2026-08-18
- 51.9% of shared pages are opened on a phone (16,952 of 32,683 views) — measured 2026-08-18
- 44.3% of creators password-protect their page before sharing it (1,205 of 2,718) — measured 2026-08-18
- Median gap between a page's first save and its last edit: 6.9 hours — sampled on "I love you" page (/love-gf), n=913 — measured 2026-08-18

Honest limitation, per the batch brief: **there is no rakhi-specific first-party number.**
Rakhi is not among the top page types, so nothing here is presented as a rakhi metric. The
numbers are platform-wide and are used only for what they prove — that a shared page's opens
are recorded and mostly happen on a phone, that creators treat these pages as private, and
that people take hours rather than minutes to finish a personal message.

## Strapi targeting

- `categorySlug`: `family-and-continuity`. The post's substance is whether a broadcast does
  the relational work of a message, so per the batch brief it belongs with the relationship
  category rather than adding to `festive-beats`.
- `templateUrls`: `https://subhsandesh.in/happy-rakshabandhan-to-brother` and
  `https://subhsandesh.in/templates` — both from `TEMPLATE_LINKS` in `app/lib/prompt.ts`.
  Two internal links, both placed after the value is established (format #6 and the closing
  objection section).
- Slug reported free in Strapi by the batch orchestrator. Independent verification failed
  from this environment: `strapi.subhsandesh.in` returned no response to the sandbox.

## Audit summary

50 checklist items; `passed` = 48, `failed` = 2, disjoint, summing to 50.

Failures recorded, not fixed:

1. **"Paragraphs 2–3 sentences throughout"** — the six H3 entries run to four short sentences
   each because `page-structure.md` requires the same four fields in the same order in every
   entry. Kept the four-field structure; the rule conflict is real and is recorded rather than
   hidden.
2. **"No source URL appears in more than 2 posts in this batch; no domain in more than 3"** —
   `pmc.ncbi.nlm.nih.gov` is in 3 posts, over the batch's tightened 2-post cap. The fix is to
   move one citation to its publisher; SpringerOpen's CC BY version of record for this post's
   own-name paper was unreachable behind a bot challenge, and citing an unread page would be
   worse than recording the breach.
