# Research brief — `raksha bandhan wishes for bhaiya and bhabhi in english`

Batch `2026-08-25-rakhi-2027`. Source lane **C (US repositories), then D (publisher-native OA)**.
Autocomplete demand 3. Volume EST (no tool figure for this long tail).

---

## Phase 0 — Data gate

`content/facts.md` refreshed 2026-08-25, 17 facts. Gate **passes on count** and
**fails on relevance**, which is recorded in the audit rather than smoothed over.

Assigned primary fact: **99.4% of started pages are actually published and shared
(2,956 of 2,973)**. Supporting: 51.1% phone opens (18,497 of 36,202), 12.2 average
views per page, 44.2% password rate (1,315 of 2,973), 2,973 pages across 15 types.

**No rakhi-specific first-party data exists.** Direct DB counts: `rakshabandhanpages`
= 3 documents, `rakshabandhansisterpages` = 3 documents, rakhi template views = 39 of
36,202 (0.1%). n=3 supports no rate, no percentage and no "most creators" claim, and
none was computed. Every first-party number in the post is platform-wide.
Re-check condition: rakhi template usage above ~500 pages.

---

## Phase 1 — SERP analysis

Searched the exact keyword. Every result on page one is an e-commerce gifting blog.
`nestasia.in` returned 403 to automated fetch, so it is analysed from the SERP
snippet only.

| Page | Words | Direct answer? | Structure | Data cited | Table | FAQPage schema | "in english" addressed | `nanad` | `lumba` | `2027` |
|---|---|---|---|---|---|---|---|---|---|---|
| nestasia.in — "51 Trending Rakhi Wishes For Bhaiya And Bhabhi" | n/a (403) | No | Numbered list of 51 lines | None visible | No | No | No | — | — | — |
| igp.com — "Top Raksha Bandhan Wishes & Messages… (2026)" | ~1,200 | No | H1 → 3 H3 buckets (warm / emotional / modern) | None | No | No | No | 0 | 0 | 0 |
| floweraura.com — "Raksha Bandhan Messages for Bhaiya and Bhabhi" | ~1,280 | No | H1 then message lists; sidebar dominates the heading tree | None | No | No | No | 0 | 0 | 0 |
| bestmessage.org — "Happy Raksha Bandhan/Rakhi Messages for Bhaiya and Bhabhi" | ~1,140 | No | H1 → 3 H3 list blocks, no editorial prose | None | No | No | No | 0 | 0 | 0 |
| rakhibazaar.com — "40+ Heartfelt Rakhi Quotes for Bhaiya and Bhabhi" | ~1,360 | No | H2 buckets: General / Funny / Emotional / Modern / Final Words | None | No | No | No | 0 | 2 | 0 |

Common to all five: an intro paragraph before any answer, no numbers of any kind,
no dates on any claim, no comparison table, JSON-LD present but never `FAQPage`, and
a product byline. All five are retailers selling rakhis or gifts, so none is citable
(see `references/competitors.md`) and none is linked from the post.

No AI Overview surfaced for the exact query at the time of the search.

---

## Phase 2 — Gap analysis

**Table stakes** — paired greetings addressed to both; a warm/emotional/formal split;
some acknowledgement that bhabhi joined the family by marriage; wording usable in a
WhatsApp message.

**The gap.** Nobody addresses the qualifier that defines the query. All five pages are
*already in English* and not one of them notices that this is a decision. The
substantive point none of them makes: **English has exactly one affinal word,
"sister-in-law", where Hindi distinguishes bhabhi, nanad, jethani, devrani and
salhaj** — so writing the wish "in English" forces a real loss of information, and
the fix is to keep the Hindi address term inside the English sentence. Read's
kinship-terminology entry supplies the structural reason, including the
address-term / reference-term distinction that makes *bhabhi* (not *sister-in-law*)
the grammatically correct form in a greeting.

**Stale data.** None to supersede — none of the five cites data at all. Four are
year-stamped 2026 and will read stale from September 2026; this post carries the 2027
date in an FAQ instead of the title.

**Unanswered questions** raised and dropped by the ranking pages: whether bhabhi
receives a rakhi (only rakhibazaar mentions *lumba*, twice, without explaining it);
what to do when the sender is a brother rather than a sister; what to write when the
relationship is strained; how to address her when she has no Hindi.

**Fan-out sub-queries → H2s.**

| Sub-query | Becomes |
|---|---|
| what changes when the wish is written in English | `## What "in English" actually changes about this wish` |
| should I say bhabhi or sister-in-law | `## Keep the Hindi word, translate it, or use her name?` |
| give me the actual English lines | `## Seven Raksha Bandhan wishes for bhaiya and bhabhi in English` (7 H3s) |
| how do I send it so she actually sees it | `## Which format actually reaches bhabhi` |
| does bhabhi get a rakhi | `## Does bhabhi get a rakhi, and how do you ask?` |
| what is the English word for bhabhi / nanad / jija | `## The Hindi kin terms an English message still needs` |
| when is a joint message wrong | `## When one English message to both is the wrong choice` |

**Angle.** Wins by being the only post that treats "in English" as the real
constraint — English has one word, sister-in-law, where Hindi distinguishes bhabhi,
nanad, jethani, devrani and salhaj, so an English rakhi wish must keep the Hindi
address term or lose the relationship it names.

---

## Cannibalisation check — the reason this brief exists

SubhSandesh already publishes **`raksha-bandhan-wishes-for-bhaiya-bhabhi`**
(2026-08-19-rakhi-3 batch, live in Strapi, 1,800 words). It was read in full before
drafting. Its H2s:

> What a Raksha Bandhan wish for bhaiya bhabhi actually is · Why one message, and when
> to send two · Three wishes by how long bhabhi has been in the family · Three wishes
> by who you are actually closer to · Which version fits: tenure, register and format ·
> **Does bhabhi get a rakhi too?** · Your bhabhi is somebody's nanad too · When a joint
> wish is the wrong choice

**Verdict: ship, with one section deliberately compressed.** The two posts are not
near-twins, on three counts:

1. **Different deliverable.** That post's six lines are Hindi, glossed into English
   (its own metaDescription says so: "6 Hindi lines with English glosses"). This post's
   seven lines are English sentences that keep two Hindi words. A searcher typing
   "in english" wants the second and gets the wrong artefact from the first.
2. **Different organising principle.** That post groups by tenure (year one, years
   two to five, ten years in) and by closeness. This one groups by the code-mixing
   decision and by situation (first festival, formal register, brother-sender,
   distance, strained year).
3. **Different citable claim.** That post's core claim is that a joint wish has two
   recipients. This post's core claim is a fact about English: it has six affinal
   terms, all `-in-law`, so four distinct Hindi relations collapse into one word.
   No overlap.

**Where they do compete:** the "does bhabhi get a rakhi / lumba" sub-query, which the
existing post owns with a fuller treatment plus a dedicated `What is a lumba rakhi?`
FAQ. Mitigation applied — that H2 here is the shortest in the post, is re-framed
around *how to phrase the question in English*, and adds a claim the sibling post does
not make (the Floyd & Morr triad finding). Recorded as an audit failure against "No
section closely mirrors a competitor page's structure or framing" so the overlap is
visible rather than buried. The two posts also share zero sources.

---

## Phase 3 — Sources

Lane C first, then D. `arxiv.org`, `pmc.ncbi.nlm.nih.gov` and `frontiersin.org` are
closed batch-wide and were not used. All four domains below are new to this batch's
ledger and new to the existing 48-post corpus. Nothing from the existing
bhaiya-bhabhi post's list was reused.

| # | Source | Lane | Domain | Verified how | Passes subject test | Passes swap test |
|---|---|---|---|---|---|---|
| 1 | Dwight Read, "Kinship Terminology", *Int. Encyclopedia of the Social & Behavioral Sciences*, 2nd ed., Vol. 13, 2015, pp. 61–66 | C | escholarship.org | PDF fetched and text-extracted in full | Yes — the language | Yes |
| 2 | Rittenour & Soliz, *Western Journal of Communication* 73:1, Jan 2009, pp. 67–90 | C | digitalcommons.unl.edu | Landing page read (headless; Cloudflare blocks plain fetch) | Yes — in-law relations | Yes |
| 3 | Floyd & Morr, "Human affection exchange: VII…", *Communication Quarterly* 51:3, 2003, pp. 247–261 | D | tandfonline.com | Abstract read (headless). **Full text paywalled — abstract only** | Yes — the sibling-in-law triad | Yes |
| 4 | "Beyond the Clock…", *The Indian Journal of Labour Economics*, 16 June 2023 | D | link.springer.com | Abstract read (headless) | Yes — daughters-in-law in India | **No — see below** |

**Verified claims, verbatim from the sources.**

1. English's affinal kin terms are exactly the six `-in-law` forms (father-, mother-,
   son-, daughter-, brother-, sister-in-law); *aunt* and *uncle* are "defined
   disjunctively" because they serve consanguineal *and* affinal relations; address
   terms are distinct from terms of reference, and a kinship terminology proper is
   built from terms of reference.
2. N = 190 daughters-in-law. A structural model tested shared family identity as a
   mediator between communicative factors (supportive communication,
   **nonaccommodation**, self-disclosure), family-of-origin factors, and DIL
   intentions on caregiving and future contact. Limitation stated in the post: the
   dyad studied is mother-in-law/daughter-in-law, not sister-in-law.
3. 327 participants, 109 sibling/spouse/sibling-in-law triads. Spouses reported
   communicating more affection than siblings, who reported more than siblings-in-law.
   Affectionate communication correlated with satisfaction and closeness in all three
   relationship types. Abstract only.
4. NSSO Time Use Survey, January–December 2019; linear regression plus Fairlie
   decomposition; daughters-in-law spend significantly more time on unpaid domestic and
   care activities than daughters, with household kinship ties a critical determinant.

**Swap-test failure, recorded honestly.** Source 4 could sit unchanged in any rakhi
post that gives timing advice about a woman in her marital home. It is used for one
paragraph, in the downside section, and nowhere else.

**Search terms tried that returned nothing usable in lane C/D:** `sister-in-law
relationship quality affinal kin study thesis`; `affinal kinship obligation`;
`Hindi kinship terms address English code-switching sister-in-law terminology`;
`North Indian kinship terminology bhabhi nanad address terms anthropology`;
`heritage language speakers retain kinship terms while speaking English South Asian
family address`; `thesis in-law relationship development sister-in-law communication
scholarworks digitalcommons`; `"siblings-in-law" OR "in-law" tie closeness extended
family study Journal of Social and Personal Relationships`.

Two real findings from that sweep. First, **there is no study of Hindi–English
code-mixing in kinship address terms** — the Hindi-English code-switching literature
is corpus and ASR work, all of it on `arxiv.org`, which is closed. The structural
claim therefore rests on the kinship-terminology entry plus the Hindi terms
themselves, which is honest but thinner than a dedicated study would be. Second,
**no source quantifies how common the lumba is.** The post says so in the body
rather than implying a consensus that does not exist.

Sagepub was tried for a fifth source (Spitze & Trent, "Changes in Individual Sibling
Relationships in Response to Life Events" — a brother's marriage as a sibling-relation
life event would have fitted well) but `journals.sagepub.com` returned 403 to both
plain and headless fetch, and the skill forbids citing from memory. Four sources
rather than a padded five.

---

## Phase 5 — Targeting

- `categorySlug` = `indian-festivals` (batch rule).
- `templateUrls` = `https://subhsandesh.in/happy-rakshabandhan-to-brother` and
  `https://subhsandesh.in/templates`, both from `TEMPLATE_LINKS` in
  `app/lib/prompt.ts`. The post is addressed to a brother *and* his wife, so the
  brother page is the closer recipient match; `/templates` is the browse-all extra.
  **No bhabhi-specific or sister-in-law template exists** — the closest is a page
  built for a brother that can carry both names, which is what the body says.
  `/happy-rakshabandhan-to-sister` was rejected: its recipient contradicts the post.
- Slug checked against Strapi on 2026-08-25 — `total: 0`, free. The only live posts
  matching `bhabhi` are `birthday-wishes-for-bhabhi` and
  `raksha-bandhan-wishes-for-bhaiya-bhabhi`.
- `structuredData` — `@id`-matched `BlogPosting` enrichment on `<canonical>#post`
  carrying `citation` (4, one-to-one with `batchMeta.sources`), `about`, `mentions`
  and `isAccessibleForFree`; plus an `ItemList` of the seven lines in body order.
  All five `sameAs` pairs verified against the Wikipedia API with Wikidata QIDs:
  Raksha Bandhan Q10266, Kinship terminology Q2305447, Hinglish Q1499115,
  Affinity (law) Q954007, Code-switching Q255615.

## Phase 6 — Audit summary

1,799 words, 11 FAQs, 8 H2s, 7 H3s, 1 table (4 rows, first-party column), 4 outbound
links, 2 internal links. Checklist: **44 passed, 6 failed, disjoint, 50 total.**

Failures, in short: first-party facts are platform-wide not rakhi-specific; internal
overlap with the existing bhaiya-bhabhi post on the lumba sub-query; 5 of 29
paragraphs exceed three sentences; `metaTitle` uses a leading count rather than a
separator and a differentiator competitors cannot claim; the slug carries three stop
words to keep exact keyword match; source 4 fails the swap test.
