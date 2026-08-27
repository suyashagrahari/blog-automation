# Research brief — `2 line birthday wishes`

- **Slug:** `2-line-birthday-wishes` (checked against live Strapi 2026-08-27 — free)
- **Batch:** `2026-08-27-birthday-30`, rank 10, source lane **B**
- **Category:** `milestone-birthdays` (confirmed live, documentId `uwc6sanl1mqehjsdqzi6rhy0`)
- **Band:** 1,000–3,000/mo, expected clicks 132, weak results 5+

---

## Phase 0 — data gate

Satisfied by the batch BRIEF's read-only probe of the `birthdaygfpages` collection
(2026-08-26, n=198 pages / n=197 personal messages) plus `content/facts.md`
(generated 2026-08-26). Eight first-party facts are used; two of them —
the 96-character median and 198 of 3,024 pages — sit inside the first 150 words.

The load-bearing one is unique to this keyword: **median personal message 96
characters, 106 of 197 under 100 characters, longest 1,437.** That is the definition
of "two lines", measured.

---

## Phase 1 — SERP (India, `gl=in`, harvested by the batch owner; WebSearch was
exhausted at 200/200 this session and was not called)

| # | Domain | Page | What it optimises for | Direct answer? | Data cited | Format |
|---|---|---|---|---|---|---|
| 1 | grammarly.com | 185 Happy Birthday Wishes and Messages in English | Volume of options; brand halo on "writing" | No — intro then list | None | Long listicle, category subheads |
| 2 | pinterest.com | Two Lines Birthday Wishes | Image board, zero prose | n/a | None | Pin grid |
| 3 | goodhousekeeping.com | 125 Best Happy Birthday Wishes and Blessings for Friends | Relationship (friends) + count | No | None | Listicle by relationship |
| 4 | adobe.com | Birthday wishes for everyone's special day | Funnel to Adobe Express templates | No | None | Marketing page + samples |
| 5 | statustown.com | 2 Line Romantic Birthday Wishes and Messages | The exact phrase, romantic slant | Partly — jumps to the list | None | Bare list |
| 6 | optimalprint.cl | 100 Best Birthday Wishes & Quotes | Print-product funnel (Chilean domain) | No | None | Listicle |
| 7 | boxupgifting.com | 100+ Birthday Wishes for Wife & Husband | Gifting funnel | No | None | Listicle |
| 8 | apdc.ap.gov.in | Happy Birthday Wishes For Friend In English | Nothing — an Andhra Pradesh government department page | No | None | Scraped listicle |

**Read as competitor research only. None is linked, cited or paraphrased.**
grammarly, goodhousekeeping, adobe, optimalprint and boxupgifting are all
"greeting-message content farm" or "digital card builder" competitors under
`references/competitors.md`; pinterest and apdc.ap.gov.in are simply not sources.

**Why this SERP is winnable:** an Andhra Pradesh government department site and a
Chilean print shop both rank on page one. That only happens when nothing on the
query has real topical authority.

---

## Phase 2 — gap analysis

**Table stakes** (all five prose pages carry these, so the post must too):
worked examples the reader can copy; some organising structure over the examples;
coverage of more than one recipient type; an FAQ-shaped tail.

**The gap — the whole angle.** Every page on this SERP offers between 100 and 185
options and **not one of them states how long a birthday wish should be.** The
query says "2 line" and every result answers "here are 185 lines". The measured
answer — 96 characters, 15–20 words — exists in SubhSandesh's own data and nowhere
else on the page one.

**Stale data:** none of the five cite any data at all, stale or otherwise. There is
nothing to supersede; there is only an empty space to fill.

**Unanswered questions raised and dropped:** what makes a short wish personal
rather than generic; whether short reads as rude; what belongs in line two.

**Fan-out sub-queries → H2 map:**

| Sub-query | Section |
|---|---|
| what is a 2 line birthday wish | `## What is a 2 line birthday wish?` |
| how long should a birthday wish be | `## Why 96 characters is the number to aim at` |
| short 2 line birthday wishes examples | `## Five two-line shapes, with the character count for each` |
| what to write in a short birthday message | `## What goes in line one and what goes in line two` |
| short vs long birthday message | `## Two lines against every other length` |
| is a short birthday wish rude / when to write more | `## When two lines is the wrong choice` |

**Cannibalisation guard.** The site already has 45 live
`birthday-wishes-for-<relation>` posts. This post is organised by **length**, never
by relationship: relationships appear only as "who each shape suits" inside the
five H3s and inside FAQs. No relationship gets its own heading.

**Angle statement:** wins by being the only post that answers how long a birthday
wish should be with a measured number — the 96-character median across 197 real
personal messages, 106 of 197 under 100 characters — while every ranking page
offers 100–185 options and states no length at all.

---

## Phase 3 — sources

Lane B, sub-angle **message length and compression in short-form text** (not typing
speed). `userinterfaces.aalto.fi/typing37k/` is explicitly excluded: it is spent on
the sibling `birthday-status-for-whatsapp` post and it fails the swap test anywhere.

Domain counts re-measured across all `content/batches/*/blogs/*.json` on 2026-08-27
**after** writing this post's file:

| # | Source | Domain (count incl. this post) | Subject test | Swap test | Verified how |
|---|---|---|---|---|---|
| 1 | Panckhurst, Lopez & Roche (2020), "A French text-message corpus: 88milSMS", *Corpus* 20 — `journals.openedition.org/corpus/4852` | journals.openedition.org **3/3** | Pass — measured lengths in a real 88,000-message text corpus | Pass — a corpus length distribution is useless in a Tamil, nephew or thank-you post | Full HTML fetched and searched; the 16.5%-under-15-characters and sub-10% reduction-rate figures read directly out of §2.1 |
| 2 | Gligorić, Anderson & West (2018), "How Constraints Affect Content", *ICWSM* 12(1) — `ojs.aaai.org/index.php/ICWSM/article/view/15079` | ojs.aaai.org **1/3** | Pass — the effect of a character limit on how people write | Pass — only this post is about a length constraint | Landing page fetched; abstract states terser writing, more abbreviations/contractions, fewer definite articles, and constrained-length tweets more successful. Peer-reviewed, open access |
| 3 | Saleem, Saleem & Aziz (2022), "A pragmatic study of congratulation strategies of Pakistani ESL learners and British English speakers", *APJSFLE* 7(8) — `sfleducation.springeropen.com/articles/10.1186/s40862-022-00134-9` | sfleducation.springeropen.com **1/3** | Pass — the internal structure of a congratulation, i.e. what goes in line two | Pass — it is about congratulating, which only this and the belated post touch, and only this one uses the *overlapped-strategy* finding | Landing page returned a bot challenge; title, journal, date, CC BY licence, n=120 and the full strategy ranking verified through the Crossref API record for the DOI. **Abstract only** — recorded in the audit |
| 4 | Gillen (2013), "Writing Edwardian postcards", *Journal of Sociolinguistics* 17(4) 488–521 — `eprints.lancs.ac.uk/id/eprint/65539/` | eprints.lancs.ac.uk **2/3** | Pass — brief messages in a fixed physical space, explicitly linked to digital practice | Pass — a postcard-brevity study fits nowhere else in this batch | Repository landing page fetched; abstract confirms ten postcards from a collection of three thousand, cheap channel, several deliveries a day, brief multimodal messages, connection drawn to digital claims. The open post-print PDF was **not text-extractable** through the fetch pipeline, so **abstract only** — recorded in the audit |

- **Peer-reviewed / scholarly, open access:** #1, #2 and #4 (and #3 is CC BY). Requirement met three times over.
- **Generic context statistics used: zero.** No PIB, TRAI, Census or MEA figure appears. The budget of one was deliberately left unspent.
- **Wikipedia in the body: zero.** Wikipedia appears only as verified `sameAs` targets in `structuredData`, which does not count against the body budget.
- **Competitor links: zero.**

### Searches that failed, and why they are recorded

Looking for a primary source for the 160-character SMS payload, `3gpp.org`
(dynareport 23.038) carries no body text and the ETSI TS 123 038 PDF is not
text-extractable through this pipeline, so **the SMS 160-character fact was cut from
the post rather than asserted without a verifiable citation.** Also tried and
rejected: the eye-tracking study on SMS shortcut processing costs
(`10.1080/17586801.2014.943150`, not open access, publisher returned HTTP 403);
`academic.oup.com` for "Brevity is the Soul of Twitter" (HTTP 403); `mdpi.com` for
the Grice brevity-maxim paper and the Entropy brevity-law paper (both returned empty
bodies). Search terms used: *message length brevity short message*, *average length
of text messages corpus characters*, *brevity constraint microblog compression*,
*short message service corpus linguistic length words*, *formulaic language greetings
short messages sms*, *congratulation speech act text message*, *less is more brevity
persuasion message length*, across OpenAlex, Crossref, DOAJ and Semantic Scholar.

---

## Phase 4–5 — build notes

- Body **1,751 words** by plain whitespace split, **1,758** by `wordCount()` in
  `app/lib/batches.ts`. FAQs are not in the body.
- Direct answer is sentence one; two first-party numbers land in the first 60 words.
- One comparison table, 4 rows × 4 columns, every value real; the fourth column is
  entirely first-party.
- Every character count printed in the body was computed against the exact string as
  printed, spaces included, and re-checked programmatically after the final edit
  pass (0 mismatches).
- Internal links: 3, all from `TEMPLATE_LINKS`, all placed after the section that
  establishes why the reader would want them.
- `structuredData`: an `ItemList` mirroring the five H3s in order, plus one
  `@id`-matched enrichment block on `<canonicalURL>#post` carrying `about`,
  `mentions` and a four-entry `citation` array mirroring `batchMeta.sources`
  one-to-one. Every `sameAs` was verified against the Wikipedia API with its
  Wikidata QID paired: Birthday `Q47223`, Greeting `Q45594`, Text messaging
  `Q17166101`, Postcard `Q192425`.

## Phase 6 — audit

50 items run, **48 passed / 2 failed**, disjoint, |passed| + |failed| = 50.
Both failures are recorded honestly in `batchMeta.auditReport.failed`:
the abstract-only verification of sources #3 and #4, and the fact that
`journals.openedition.org` lands at exactly the 3-post domain cap and should be
re-measured corpus-wide before the batch is merged.
