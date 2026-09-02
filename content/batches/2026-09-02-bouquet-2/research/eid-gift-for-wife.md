# Research brief — `eid gift for wife`

- **Slug**: `eid-gift-for-wife` (verified free: `filters[slug][$eq]` returned `total: 0` against live Strapi, 2026-09-02)
- **Category**: `digital-gifts-romance` (verified live in the Strapi category list)
- **Batch**: `2026-09-02-bouquet-2` · `publish_by 2026-12-15`
- **Secondaries**: `eid gift ideas for wife`, `eid gift for her`, `eidi gift for wife`, `eid mubarak gift for wife`
- **Body length**: 1,790 words, plain whitespace split, FAQs excluded (FAQs are in `article.faqs` only)

---

## Phase 1 — SERP analysis: NOT PERFORMED, and why

**This is a real gap, not an omission I am hiding.** `WebSearch` is exhausted for this
run (200/200) and `WebFetch` is hook-blocked. The seven results measured for this
keyword on 2026-09-02 were handed to me in the assignment: two marketplaces and five
niche gifting or cosmetics shops. Every one of them falls under
`references/competitors.md`, so even with a working fetch I could not read them for
structure and could not paraphrase them.

Consequences, stated plainly:

- I have **no** word counts, heading structures, schema inventories or tone notes for
  the incumbent pages. There is no Phase 1 comparison table in this brief because
  there is nothing verified to put in it.
- The Phase 2 fan-out is therefore **derived, not measured** — from the keyword, the
  four secondaries, and the `/eid-mubarak` template's own `config.ts`. That is why
  `H2s map to the fan-out sub-queries identified in Phase 2` is recorded as a
  **failure** rather than quietly passed.
- Effective weakness of the SERP was given as ~3 of 7. I could not independently
  confirm that number and did not use it in the post.

The one thing I can assert about the SERP without reading it: none of the seven is an
editorial answer, and `subhsandesh.in/eid-mubarak` is a live template with zero blog
coverage anywhere on the site. That is the opening.

## Phase 2 — Gap and angle (derived)

**Table stakes** (what any post on this keyword must contain): what the occasion is,
which Eid is meant, a list of concrete options, a way to act at short notice.

**The gap.** No retailer can sell against its own delivery model, so none of them
frames the actual constraint: *the date is not fixed until the new crescent is
sighted locally.* A gift route that needs an address and a courier window is being
asked to hit a target that may only be confirmed the evening before. A link has no
delivery window and needs no address. That argument is available to nobody on this
SERP.

**Fan-out sub-queries → H2s** (derived):

| Sub-query | H2 |
|---|---|
| which Eid is this, are they the same | `## What Eid al-Fitr and Eid al-Adha actually are` |
| when is Eid / why does the date change | `## Why the calendar sets your lead time, not the retailer` |
| what should I actually give her | `## Five Eid gifts for a wife that survive short notice` |
| digital vs physical, what does each need | `## Digital page, parcel or bought in person: what each asks of you` |
| what is eidi, does it apply to a wife | `## Where the word "eidi" fits, and where it does not` |
| when is a link not enough | `## When a link is the wrong gift for your wife` |

**Angle**: wins by being the only post that plans an Eid gift for a wife around a date
fixed by local moon sighting, backed by named open-access research and by first-party
numbers no retailer can print.

## Phase 3 — Sources

Route that worked: **Crossref → Unpaywall → repository/publisher landing page.**
DOAJ's article search worked directly. Not attempted or not usable: OpenAlex, CORE and
Semantic Scholar (rate-limited all day per the brief). Two fetches were refused and the
claims they would have supported were dropped, not softened — see *Could not verify*.

| # | Source | Domain | Published | Peer-reviewed | Open access | Subject test | Read |
|---|---|---|---|---|---|---|---|
| 1 | Ahmed & Alexander, "Moon sighting is a key part of Muslim life…", *The Conversation* | `theconversation.com` | 2026-02-17 | No (academic-authored explainer; Cambridge + Leeds) | Yes, CC BY-SA | Pass — Islamic calendar and moon sighting | **Full text** |
| 2 | Ahmad Fauzi, "Negotiating the New Moon: Social Media and the Dynamics of Hijri Calendar Determination among Muslims", *Al-Hilal: Journal of Islamic Astronomy* | `journal.walisongo.ac.id` | 2025-10-06 | Yes | Yes, gold, CC BY-SA | Pass — Hijri-month determination | Abstract + metadata only |
| 3 | Vahed & Waetjen, "Moon sightings and the quest for Muslim solidarities in twentieth century Natal", *New Contree* | `newcontree.org.za` | 2014-12-30 | Yes | Yes, CC BY 4.0 | Pass — moon-sighting contestation in a Muslim community | Abstract only |
| 4 | Ramdhani, "Eid Al-Fitr Preserves The Relations of Muslim and Klungkung Royal Palace", *Nadwa: Jurnal Pendidikan Islam* | `journal.walisongo.ac.id` | 2024-05-30 | Yes | Yes, gold, CC BY-SA | Pass — Eid al-Fitr observance and social relations | Abstract only |
| 5 | Alinejad, "Careful Co-presence: The Transnational Mediation of Emotional Intimacy", *Social Media + Society* 5(2) | `dspace.library.uu.nl` (Utrecht repository copy) | 2019-04-01 | Yes | Yes, gold, CC BY | Pass — mediated intimacy under long-term separation | Repository record + abstract |

- **5 sources**, all five pass the subject test; **4 are peer-reviewed and open-access**.
- **Zero** generic context statistics (no PIB / TRAI / Census / MEA). Zero Wikipedia
  body links. Zero panchang / calendar-reference sources, because the post prints no date.
- **Swap test**: none of the five would survive unchanged in another keyword's post in
  this batch — four are about the Islamic calendar or Eid observance specifically, and
  the fifth is load-bearing only because this post's argument is about separation.

### Cap accounting — recorded, not acted on

Per the brief I am not restructuring around a suspected breach.

- **No source URL used here appears in `USED-SOURCES.md`** (checked by exact string).
- `theconversation.com` sits at **2 earlier posts** in `USED-SOURCES.md`, under
  "At 2-3 earlier posts — prefer something else". It is **not** closed (closure starts
  at 4). The specific URL used here is unused, and no sibling in this batch is written
  yet, so the per-batch cap is not breached by my post alone.
- **If the orchestrator wants a domain surrendered, surrender source #1** (The
  Conversation). Cost of doing so: the "different communities celebrate Eid on
  different dates" claim would then rest only on abstract-level readings of #2 and #3,
  and the only full-text-verified source in the post would be gone.
- `journal.walisongo.ac.id` supplies two URLs (#2 and #4) **inside this one post**,
  which is one post against the domain cap, not two.
- **Re-checked after the siblings landed.** Five sibling blogs had been written by the
  time this post was finalised (`christmas-gift-for-girlfriend`,
  `flower-emoji-meaning-in-chat`, `new-year-gift-for-girlfriend`,
  `year-in-review-for-couples`). None of my five URLs appears in any of them, and all
  four of my domains — `theconversation.com`, `journal.walisongo.ac.id`,
  `newcontree.org.za`, `dspace.library.uu.nl` — are used by **this post only** within
  the batch. No URL in the batch is at more than 2 posts and no domain at more than 3,
  so there is no breach to escalate on my side.

### Rejected sources and why

- `onlinelibrary.wiley.com` (International Migration, Gulf remittances) — closed
  domain at 4 earlier posts, and the article is paywalled anyway.
- Journal of International Migration and Integration (Kerala left-behind wives, 2025) —
  Unpaywall `is_oa: false`.
- *Negotiated identities: Male migration and left-behind wives in India*, Journal of
  Population Research 2008 — green OA **only** on `ncbi.nlm.nih.gov/pmc`, which is the
  most-spent domain in the batch (14 earlier posts). Dropped.
- IJFMR, "Gulf Male Migration in Kerala: How do the Female Spouses Cope with It?" —
  the journal is not DOAJ-indexed. Not cited.
- `en.wikipedia.org` — closed domain (6 earlier posts). Used **only** for
  `sameAs` entity verification in `structuredData`, which per `structured-data.md` is
  not a body link and does not count against the Wikipedia budget.
- Two open-access papers I wanted and **could not read**: the KIJMS study on national
  holidays and collective leave for Eid al-Fitr and Eid al-Adha (HTTP 468, twice, on
  both the journal URL and the DOI redirect) and the HIKMATUNA study on legal certainty
  in determining Ramadan and Shawwal (HTTP 403). Both would have supported the
  "Eid falls on a working day" line with a citation. **The line survives in the post
  only as a practical observation with no source attached, and the FAQ answer makes no
  factual claim beyond which routes are available.**

### Entity verification (for `structuredData` `sameAs`)

Verified via the Wikipedia API with `prop=pageprops&ppprop=wikibase_item`; none
returned `missing`:

| Entity | QID |
|---|---|
| Eid al-Fitr | Q464458 |
| Eid al-Adha | Q514400 |
| Islamic calendar | Q28892 |
| New moon | Q108566 |
| Long-distance relationship | Q1406917 |

## First-party data

Read from `content/facts.md`, md5 `2c491ca60155c2cefe6f979404c13919`, generated
2026-09-02. All eight lines in `batchMeta.factsUsed` were checked as exact substrings
of that file.

In the **first 150 words**: `50.2% of shared pages are opened on a phone (20,937 of
41,682 views)` and `99.5% of started pages are actually published and shared (3,379 of
3,397)`.

**The Pricing block is empty**, and the post makes no cost claim in any direction — not
in the body, an FAQ, the excerpt, the metaDescription or a table cell. The comparison
table says so explicitly. This leaves a live reader question unanswered and it stays
unanswered until the manual pricing lines in `facts.md` are filled in.

There is **no per-template breakdown for `/eid-mubarak`** in `facts.md` (it is not in
the top five page types). The table says "No per-template breakdown published for it
yet" rather than borrowing another template's number.

## Handling the occasion

What the post asserts, and on whose authority:

- Eid al-Fitr and Eid al-Adha are two different festivals; al-Fitr comes at the end of
  Ramadan; each is marked by its own Hijri month → #2 (which names all three
  observances as distinct) and #4 (al-Fitr "celebrated after one month of Ramadan").
- The date is not fixed until the crescent is sighted locally; naked-eye sighting is
  the majority practice; cloud cover moves the start; different communities celebrate
  on different dates; some states use pre-determined calculation → #1, full text.
- The sighting-versus-calculation question is old and internally contested → #3.
- The announcement now reaches people through social media; ḥisāb/rukyat debate runs in
  three registers → #2.
- What the day consists of is local, not universal → #4, attributed to Klungkung, Bali
  by name.
- Mediated intimacy at distance comes from shifting between registers, not from one
  channel → #5, attributed to Turkish-Dutch fieldwork by name.

**No religious ruling is asserted anywhere.** The FAQ on whether a gift is appropriate
says explicitly that it turns on fiqh and family custom and is not a question a gifting
site answers.

## Could not verify — every claim, by line

Listed so a reviewer can check each one. Items 1–5 were asserted by the orchestrating
brief; I omitted all of them rather than softening them into the page.

| # | Claim | Where it came from | What I did | What I searched |
|---|---|---|---|---|
| 1 | Eid al-Fitr 2027 falls in roughly March 2027 | assignment prompt | **Omitted entirely.** The post prints no calendar date for either Eid, in any year. | nothing — I declined to source a date I would then have to keep true |
| 2 | Eid al-Adha falls "roughly two months" after Eid al-Fitr | assignment prompt | **Omitted.** The post says only that they are different festivals and that al-Adha "is not tied to Ramadan at all". No interval, no month names. | Crossref: `Shawwal Dhu al-Hijjah Eid al-Fitr Eid al-Adha Islamic months dates`; `Eid al-Adha 10 Dhulhijjah Eid al-Fitr 1 Syawal determination`. Best hits were an OED entry and an NYU Press chapter, both paywalled. |
| 3 | *Eidi* is traditionally money, often given by elders to children | assignment prompt | **Omitted, and the omission is stated on the page.** The `eidi` H2 says I found no citable scholarly definition and names where I looked. | Crossref: `Eidi Eid gift money children Islamic custom`; `Eidi Eid gift money children tradition South Asia`. DOAJ: `Eidi gift Eid` (0 results), `Eid gift Muslim` (1 result, unrelated Arabic-language article on Friday rulings). Platts / `dsal.uchicago.edu` is a closed domain at 10 earlier posts. |
| 4 | Gifting between spouses at Eid is common | assignment prompt | **Omitted as a claim; converted into a stated absence.** The post says none of the studies behind it describes spousal gift exchange at Eid at all. | Crossref: `festival gift giving spouse marital relationship`; `gift giving reciprocity Muslim society ritual`; `gift giving festival consumer behaviour Muslim consumers`. DOAJ: `Muslim marriage gift husband wife` (4 results, all about *mahr*/dower, a different institution). |
| 5 | Practice varies across Indian Muslim communities, and across Sunni and Shia observance | assignment prompt | **Omitted.** The post makes no India-specific and no sect-specific claim. Every variation statement is attributed to the community my source actually studied (Natal; Klungkung; the ḥisāb/rukyat debate). | Crossref: `Indian Muslims diversity practice ethnography north India`; `Ramadan Eid observance India Muslim community`. DOAJ: `Eid al-Fitr India` (0 results). Nothing citable and open. |
| 6 | Eid often falls on a working day | angle guidance | **Kept as a practical observation with no source attached.** Both candidate sources were unreadable: KIJMS (HTTP 468 twice) and HIKMATUNA (HTTP 403). No number, no jurisdiction and no holiday claim appears in the post. | Crossref → the KIJMS paper on national holidays and collective leave for both Eids; DOAJ. |
| 7 | How many Indian couples are separated by Gulf or overseas work | angle guidance | **No figure used.** The separation case is stated as a situation, never quantified. | Crossref + Unpaywall across five queries on Kerala/Gulf migration and left-behind wives. Every OA candidate was rejected — see *Rejected sources*. |
| 8 | Whether a recipient needs an account to open a shared page | my own draft impulse | **Not claimed.** I could not verify it from `facts.md` or the template config, so the post says only that a link needs no address. | — |
| 9 | Courier delivery windows and costs for a physical Eid gift | reader question | **Not claimed.** The table's parcel row reads "Nothing — SubhSandesh ships no goods and holds no delivery data". | — |
| 10 | Effective weakness of the SERP (~3 of 7) | assignment prompt | Recorded, not used in the post. Unverifiable without a fetchable SERP. | — |

What *is* first-party-verified and load-bearing: the `/eid-mubarak` template's own
`config.ts` carries `description: "A beautiful Eid al-Fitr digital greeting with duas,
playlist & blessings"` and `pages.final.closingSubtext: "Eid al-Fitr"`. That is the
basis for the post's caveat that the template's copy is written for Eid al-Fitr rather
than Eid al-Adha — and it is the claim none of the seven SERP results can make.

## Internal links (3, all in `TEMPLATE_LINKS`)

| URL | Anchor | Placement |
|---|---|---|
| `https://subhsandesh.in/eid-mubarak` | "Eid Mubarak greeting page" | H3 #1, after the definition and calendar sections |
| `https://subhsandesh.in/bouquet-gf` | "hand-tie yourself from twelve blooms" | H3 #2 |
| `https://subhsandesh.in/love-gf` | "\"I love you\" page" | H3 #3 |

Mandatory `/bouquet-gf` ✓. At least one of `/love-gf` or `/darling` ✓ (`/love-gf`).
`/eid-mubarak` ✓ — its first blog link anywhere on the site. None in the opening
paragraph. Cap of 4 respected with one to spare; no fourth link was added because none
of the remaining 33 entries is genuinely relevant to this keyword.

## Self-audit

- Checklist reconstructed from `publish-checklist.md`: **50 items**.
- `|passed| = 48`, `|failed| = 2`, sum **50**, `passed ∩ failed = ∅`, no duplicates.
- All 50 strings verified **byte-identical** to the checklist (programmatic set
  comparison, `**bold**` markers included).

**Failed, both recorded rather than patched:**

1. `H2s map to the fan-out sub-queries identified in Phase 2` — see Phase 1 above.
   (String in the JSON is the exact checklist text; this line is prose.)
2. `Slug short, hyphenated, lowercase, no stop words` — the slug contains "for".

**The two "known defect" items, counted rather than assumed:**

- `metaTitle 50–60 characters, exact keyword in the first five words (hard cap 70)` —
  **PASSES.** The keyword is **four words**, so it occupies words 1–4 of
  `Eid Gift for Wife — Built Around a Moon-Sighting Date` (53 characters). The wave-1
  claim that this item always fails does not apply below six keyword words.
- `Slug short, hyphenated, lowercase, no stop words` — **FAILS**, but only on the
  stop-word clause: `eid-gift-for-wife` contains "for". It is 17 characters, four
  tokens, hyphenated and lowercase. Removing "for" gives `eid-gift-wife`, which no
  longer matches the target query, so this is a deliberate trade.

**FAQ / heading collision check.** All 10 FAQ questions were compared against all 13
headings on content-word overlap, then judged on meaning. One flag survives at
two shared tokens: "Is it appropriate to give my wife a gift on Eid?" against
`## When a link is the wrong gift for your wife`. These are different questions — one
is about religious and family appropriateness, the other about whether a digital medium
fits — and only "gift" and "wife" are shared, both of which are the keyword. One FAQ
was rewritten during this check: "Which SubhSandesh page should I use if it is Eid
al-Adha, not Eid al-Fitr?" read as a near-duplicate of
`## What Eid al-Fitr and Eid al-Adha actually are` and became "Is there a page that
works whichever festival we are marking?".

**Other verified invariants:** 1 H1, no skipped heading levels, 7 H2s, 5 H3s; no
paragraph over 3 sentences; every H2 carries a number, a date or a named source; one
table, 5 rows, 4 columns, one first-party column; 5 outbound links and 3 internal, all
fetched or config-verified; 0 competitor strings anywhere in the file; `ItemList`
mirrors the 5 H3s in order and by name; the `@id`-matched enrichment block is the only
renderer-built type present and its `citation` array mirrors `batchMeta.sources`
one-to-one by URL; no `AggregateRating`, `Review` or `HowTo`; no `FAQPage` emitted
(the renderer builds it from `article.faqs`, so emitting one would be discarded).

**One routing tension, flagged not fixed.** `SKILL.md` says anything tied to a festival
— Eid included — belongs in `indian-festivals`. The assignment binds
`digital-gifts-romance`, which is a live slug, so the checklist item passes. Which one
the cluster actually wants is the orchestrator's call.
