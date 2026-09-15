# Research brief — `love-letter-website-for-girlfriend`

Batch `2026-09-15-virtual-gift-30`, wave 2. Market: India. Evergreen.
Primary keyword: **love letter website for girlfriend**
Secondary: `birthday letter for girlfriend website`, `online gift letter maker`, `e letter gift ideas`
Category: `digital-gifts-romance` · Templates: `/catch`, `/hold-my-hand`, `/dedication`

---

## Phase 0 — first-party data gate

`content/facts.md`, regenerated 2026-09-15. The gate needs 3 relevant facts with 2 inside the
first 150 words. This keyword is unusually well served, because the romantic letter page *is*
the site's largest page type.

Per BRIEF-WAVE2 §4, I checked the sibling `blogs/` files before choosing. The two facts wave 1
leaned on are now saturated — the 40.6% password figure appears in **30 of 30** posts and the
6.2-hour edit gap in **30 of 30**. The opening therefore uses three of the under-used lines:

| Line | Uses across the 30 wave-1 siblings |
|---|---|
| Most-viewed template: love-gf — 16,201 views, 32.4% of all page views | 4 |
| 49.2% of views are on a touch device | 3 |
| 3,377 registered creators / 1.29 pages each | 7 |

One derived figure is used in the opening and stated as derived: 16,201 views ÷ 1,125 `/love-gf`
pages ≈ 14 opens per page, against the site-wide average of 11.5. Both inputs are verbatim
`facts.md` lines; the division is mine.

The 40.6% password figure and 94.1% publish rate are used, but late — in the "how to send it"
section — not in the opening, exactly to avoid the batch tic the brief names.

**Two disclosures honoured.** The `## Pricing` block in `facts.md` is empty, so the post states
plainly that current pricing cannot be confirmed from our data and links `/templates` instead of
inferring a number. And no claim is made about who received a `/love-gf` page — the database
records the template opened, not the recipient — so the post says "romantic letter page", never
"pages sent to girlfriends".

---

## Phase 1 — SERP analysis: **not obtained**

This is the brief's biggest hole and it is recorded rather than papered over.

WebSearch is exhausted (200/200) and WebFetch is blocked, so `scripts/serp.mjs` is the only
route. It failed on every attempt:

| Attempt | Command | Result |
|---|---|---|
| 1 | `serp.mjs --gate "love letter website for girlfriend" "cute typing effect love letter page for girlfriend"` | `brave rate-limited (429) after 4 attempts` |
| 2 | `serp.mjs "love letter website for girlfriend"` | `brave rate-limited (429) after 4 attempts` |
| 3 | gate, after a 150s backoff | 429 |
| 4 | gate, after a 420s backoff | 429 |
| 5 | plain SERP, after a 600s backoff | 429 |
| 6 | gate, after a 600s backoff | 429 |

Brave is shared across ~30 concurrent wave-2 agents, which is the obvious cause. **No top-5 page
set was ever retrieved**, so there is no competitor comparison table in this brief, and two
checklist items are recorded as failed for exactly that reason (novelty-against-top-5, and
H2s-map-to-observed-fan-out).

What I used instead:

- **`BRIEF-WAVE2.md` §5**, which carries a measured `serp.mjs` result for the adjacent query
  `birthday website for girlfriend` (2026-09-15, us-served): `#1 github.com/nikitayadav19/HappyBirthdayGF`,
  then yourlovepage.online, four Reddit threads, yourlovepage.com, giftsqr.com, blink.new, TikTok.
  No ecommerce, no authoritative page, and a GitHub repo in position one. That observation is used
  once in the body, explicitly labelled as the adjacent query and as us-served.
- **India-phrasing evidence** from `content/keywords/2026-09-15-virtual-gift-100/ac*/autocomplete.csv`
  rather than from the US-served ranking.
- **The nearestLive page read in full** via `ctx_fetch_and_index` (below).

---

## Phase 1b — cannibalisation gate: `/blog/cute-typing-effect-love-letter-page-for-girlfriend`

**Decision: differentiate.** The `--gate` shared-result count could not be obtained (see above), so
the decision rests on reading the live page rather than on overlap arithmetic. That is a weaker
instrument and is flagged as such in the audit.

What the live page actually is, from its own headings:

> Why a typing effect works · Which occasions suit it · How to plan your message · **Step-by-step:
> build a cute typing effect love letter page (8 steps)** · **How to choose typing speed and
> pauses** · Message examples · Visual & audio choices · Photos and sequencing · Mobile
> optimization · Sharing ideas · Common problems · Why use SubhSandesh · Checklist · Build
> timeline · Troubleshooting

It is a **build tutorial for one animation**. It assumes the format decision is already made and
spends its length on execution detail: 35–55 characters per minute, a 300–500ms pause after
commas, 1.2–1.8 seconds between paragraphs, 2–4 photos. Its internal links are `/love-gf` and
`/valentine-gf`.

**The split, in one sentence:** the live page tells you how to *tune* a typing-effect letter once
you have chosen one; this post is the step earlier — *which* kind of love letter page to make —
and it decides that question by what the recipient has to do to finish reading, comparing a
passive reveal against three interaction-led pages (`/catch`, `/hold-my-hand`, `/dedication`) that
the live page never mentions.

The post links the live page from the "letter that reveals itself" H3, i.e. as the how-to for the
one format this post does not go deep on. Template sets do not overlap at all.

---

## Phase 2 — gap and angle

Table stakes the post has to cover (inferred, not SERP-observed): what the thing is, that no code
is needed, how to send it, what to write, whether it is private.

**The gap.** Every page in this category — including our own live one — treats the format as
decoration and the words as the content. Nobody frames the choice as *what the recipient has to
do*, which is the only variable that changes whether a letter is skimmed or finished. Three of the
four SubhSandesh formats in scope make the letter conditional on an action, and that is a
genuinely different product decision, not a styling one.

**Fan-out sub-queries** the H2s answer (reasoned from the keyword, the secondaries and the
nearestLive page — *not* from a retrieved People Also Ask block):

1. what is a love letter website / do I need to code it
2. what kinds are there
3. which one should I pick
4. what do I write
5. how do I send it so she opens it
6. does making it myself matter
7. when is this a bad idea

**Angle:** wins by being the only post that treats "which love letter website" as a question about
what the recipient has to do to finish reading, using 16,201 views against 1,125 love-letter pages
— roughly 14 opens each, against a site average of 11.5.

---

## Phase 3 — sources

Search strategy per BRIEF §3: **the phenomenon, not the keyword**. The written love letter is a
well-studied object, so the searches were run against epistolary practice, letter corpora,
relational maintenance at distance, and effort-and-valuation.

Discovery ran through the DOAJ and Crossref APIs plus Unpaywall (OpenAlex and Semantic Scholar
were both rate-limited/over-budget on the day). Queries that produced the shortlist:
`bibjson.abstract:("love letter" AND (writing OR genre OR romantic))`,
`bibjson.abstract:("handwritten" AND letter AND emotion)`,
`bibjson.abstract:("long-distance relationship" AND technology)`,
`bibjson.abstract:("IKEA effect")`, `bibjson.abstract:(epistolary AND intimacy)`,
`bibjson.abstract:("relational maintenance" AND mediated)`, `bibjson.abstract:(polymedia)`.

Cap check before committing: none of the four domains below appears in `SPENT-SOURCES.json` or in
any of the 30 sibling files in `blogs/`. All four are new to the batch, which is what wave 2 needs.
Deliberately rejected because the domain is at the cap of 3 or blocked from this sandbox:
`journals.plos.org` (an IKEA-effect/robot-assembly paper that fitted well), `frontiersin.org`,
`pmc.ncbi.nlm.nih.gov` (a voice-vs-text relational-maintenance finding that would have supported
`/dedication` nicely), `mdpi.com`, `nature.com`, `journals.sagepub.com`, Springer, Wiley.

| # | Source | What it supports | Test |
|---|---|---|---|
| 1 | Acha, "Cartas de amor en la Argentina peronista", *Nuevo Mundo Mundos Nuevos*, 9 Dec 2007 — journals.openedition.org | Love-letter writing as "a vast communicative knowledge": a shared, half-borrowed set of conventions people leaned on because they did not know what to say either | subject ✓ scholarly ✓ open ✓ |
| 2 | Turunen, Taskinen, Uusitalo & Kivimäki, "Mining Emotions from the Finnish War Letter Collection, 1939–1944", *DHNB Publications* 4(1), 2022 — journals.uio.no | 7,000 handwritten letters made machine-readable; 298 curated emotion words; soldiers' emotionality did not significantly differ from civilians' | subject ✓ peer-reviewed ✓ open ✓ |
| 3 | Davidov & Nazzal, "IKEA Effect in the Evaluation of Academic Assignments", *Educational Studies Moscow*, 2026 — vo.hse.ru | 115 final projects; advisors graded their own students' work ~5% higher than external evaluators | mechanism; weakest on the swap test (see audit) |
| 4 | "Long Distance Romantic Relationships", *Current Approaches in Psychiatry*, Sep 2026 — dergipark.org.tr | Communication patterns, self-disclosure, social support and the meaning attached to separation shape commitment and satisfaction | subject ✓ peer-reviewed ✓ open ✓ |

All four landing pages were fetched and read (`ctx_fetch_and_index` + `ctx_search`); every stat in
the post comes from text I actually opened. Sources 1, 2 and 4 are read from their abstracts and
front matter; source 3's abstract carries the full result set quoted.

**Zero generic context statistics.** No PIB, TRAI, Census or MEA figure appears — there was no
sentence in this post that one would have honestly supported.

**Zero competitor references.** gifft.me, qlovy.com, surprises.gift, ourgiftverse.com,
digiflower.net, giftsqr.com and blog.messagear.com are neither linked nor paraphrased. The one
third-party URL named in the body — the `HappyBirthdayGF` GitHub repo — is named as a *SERP
observation* recorded in `BRIEF-WAVE2.md`, is not linked, and is not a competitor page.

**A source I wanted and could not use.** A 2022 *Journal of Happiness Studies* paper finds voice
calls, unlike texting, consistently associated with lower loneliness and higher
relationship-maintenance satisfaction. That is the ideal evidence for `/dedication`'s recorded
voice. Unpaywall returns only a PMC copy (domain at the cap of 3) and Springer (blocked), so the
claim is simply not made in the post.

---

## Phase 4–5 — draft, links, schema

- 1,788 words in `contentMarkdown`, FAQs excluded. 8 H2s, 4 H3s, one H1.
- Direct answer in sentence one; three first-party numbers inside the first 150 words.
- Comparison table: 4 rows × 4 columns, last column first-party. Three of its four rows honestly
  read "outside the five most-created page types", because `/catch`, `/hold-my-hand` and
  `/dedication` are not among the five page types `facts.md` breaks out.
- **Templates described from their `app/lib/prompt.ts` entries, not from their slugs.** `/catch`
  is a letter caught with the recipient's own face, nothing ever locking; `/hold-my-hand` is 60
  unbroken seconds or the progress drains; `/dedication` is a radio show with a real recorded
  voice. All three are interaction-led, which is precisely the post's thesis — this is why the
  assigned set was kept rather than swapped.
- Internal links counted by the verifier (`/blog` paths excluded): `/catch`, `/hold-my-hand`,
  `/dedication`, `/templates` = 4. The nearestLive blog link is additional and mandated by
  BRIEF-WAVE2 §3.
- `structuredData`: an `@id`-matched enrichment block on `<canonicalURL>#post` carrying `about`,
  `mentions` and a four-entry `citation` mirroring `batchMeta.sources`, plus an `ItemList` of the
  four H3s in order. Every `sameAs` was checked against the Wikipedia API: Love letter → Q1056617,
  Long-distance relationship → Q1406917, Letter (message) → Q133492.
- Slug checked against Strapi on 2026-09-15: `filters[slug][$eq]=love-letter-website-for-girlfriend`
  returned `total: 0`.

## Phase 6 — audit summary

47 passed, 3 failed, disjoint, 50 total. The three failures are the missing SERP (twice over) and
the swap-test weakness of source 3. All three are recorded in the blog JSON with the blocker
named.
