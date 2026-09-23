# Research brief — `propose day jokes hindi`

- **Slug:** `propose-day-jokes-in-hindi` (verified free in Strapi on 2026-09-23: `total: 0`)
- **Category:** `modern-romance` (confirmed present in the live Strapi category list)
- **Volume band:** under 300 EST — the lowest-volume keyword in batch `2026-09-23-propose-30b`
- **Date check:** `date -j -f "%Y-%m-%d" "2027-02-08"` → **Monday 08 February 2027**. Rose Day Sunday 7 February, Valentine's Day Sunday 14 February. Both verified the same way.

---

## Phase 0 — first-party facts used

Copied verbatim from `content/facts.md` (regenerated 2026-09-23):

1. `5,061 personalised pages created since 2026-03-12, across 20 page types — measured 2026-09-23`
2. `38.7% of creators password-protect their page before sharing it (1,961 of 5,061) — measured 2026-09-23`
3. `Median gap between a page's first save and its last edit: 2.4 hours — sampled on apology dashboard (/apology-dashboard), n=1,348 — measured 2026-09-23`

(1) and (2) sit inside the first 150 words. Both are labelled **platform-wide across 20 page types** in body prose; (3) is labelled **sampled on `/apology-dashboard`, n=1,348** in body prose. No figure is attributed to proposal pages, because there are none — the read-only probe of `proposalpages` remains refused.

The `/love-gf` 1,138-pages / 24.9% figure that waves 1–2 used is out of date and does not appear here.

---

## Phase 1 — what was actually measured

**One WebSearch call, 2026-09-23, query `propose day jokes in hindi`.** Nine results returned. **Only the result titles and URLs were read. No incumbent page was fetched.** Everything the post says about the SERP is therefore limited to titles, and it says so.

What the titles show:

| Signal | Observation from the nine titles |
|---|---|
| Publisher type | Hindi news portals and wishes/jokes aggregator sites, plus Pinterest and Dribbble noise |
| Framing of the top Hindi news result | Its own headline ends with the man being beaten with a chappal after proposing |
| Framing of two further titles | Sold on "the pain of being single" |
| Format signalled | Photo galleries, status/shayari lists, meme roundups |
| Anything about register, script or translation | Nothing visible in any title |

**No comparison table of competitor page internals appears here, because no competitor page was opened.** Wave 2's defect class was asserting what incumbents do without measuring it; this brief does not repeat it.

Second WebSearch call spent on locating an open-access pun-translation study. Total WebSearch spend: **2 of the 5 allowed**. Everything else came from `findpapers.mjs` (Crossref + Europe PMC) and direct fetches.

---

## Phase 2 — gap, fan-out, angle

**Table stakes** (inferred from the titles, not from page bodies): a list of lines, Devanagari, a Propose Day date mention, shareable format.

**The gap.** Nine Hindi siblings in this territory publish earnest lines. Nobody publishes the joke page, and nothing in the measured titles indicates that any page marks register or says which lines stop working in English. This post is therefore separated by **genre** (comedy, not romance) and by **treatment** (jokes handled as translation objects).

**Fan-out sub-queries → H2s:**

| Sub-query | H2 |
|---|---|
| what counts as a Propose Day joke in Hindi | What makes a Propose Day joke work in Hindi |
| give me the actual jokes | 8 original Propose Day jokes in Hindi, with what English does to each |
| where do I send it / can I put it on a status | Sending the line: what we measured, and what we did not |
| are these jokes sexist / is this okay | The joke we would not write, and why |
| should I actually propose with a joke | When a joke is the wrong instrument entirely |

**Angle.** Wins by being the only Propose Day page that treats the jokes as translation objects — marking register and saying which Hindi lines stop being funny in English — while refusing the genre's default punchline, a woman saying no.

---

## Cannibalisation check

| Sibling | Its lane | Why this post is not it |
|---|---|---|
| `propose-day-quotes-in-hindi` | copy-text quotes | quotes are earnest; this is comedy, and the lines are dialogue, not aphorisms |
| `propose-day-wishes-in-hindi` | addressed wishes | a wish is sent to someone; these are told *about* the sender |
| `propose-message-in-hindi` | a message typed to one person today | these are group-chat lines, not a private message |
| `propose-girlfriend-shayari` | poetic form | no shayari here; prose punchlines |
| `how-to-propose-girlfriend-in-hindi` | method | this post argues *against* method, and says a joke is the wrong instrument |
| `propose-day-quotes-hindi-english` (this batch) | bilingual copy-text | overlaps on script, not on genre; that post supplies lines to send, this one supplies lines that do not survive being sent in the other script |
| `propose-day-wishes-for-husband` (this batch) | holds the **humour-in-long-marriages** literature | not touched. This post's lane is incongruity resolution and humour comprehension |

Lanes explicitly avoided per the task prompt: humour-in-marriage/playfulness, code-mixing, romanisation, Hindi politeness theory, bilingual emotion, greeting obligation. The dictionary is used as a **lexical fact-check**, not as a politeness-theory source.

---

## Phase 3 — sources

Five sources. Zero generic context statistics. Zero Wikipedia body links. Zero competitor links.

| # | Source | Subject test | Peer-reviewed | Open access | How much was read |
|---|---|---|---|---|---|
| 1 | Bariselli, *Estetika: The European Journal of Aesthetics* 61(2): 95–109, 12 Sep 2024 — incongruity theory and the **pertinence condition** | pass | yes | yes, CC BY | full HTML sections |
| 2 | Koochacki, *Advances in Language and Literary Studies* 7(4): 147–157, Aug 2016 — pun translatability across 92 of Sa'di's ghazals under Delabastita | pass | yes (venue caveat below) | yes, via ERIC | full PDF, incl. Table 3 |
| 3 | Arróniz Parra & Padilla Cruz, *The European Journal of Humour Research* 10(1): 108–133, 14 Apr 2022 — joke identification/comprehension/appreciation by 49 L2 English users | pass | yes | yes, DOAJ-listed | full PDF |
| 4 | Cendra, Triutami & Bram, *The European Journal of Humour Research* 7(2): 44–66, 28 Jul 2019 — gender stereotypes in online jokes under GTVH + CDA | pass | yes | yes, DOAJ-listed | **abstract, keywords and references only** |
| 5 | McGregor, *The Oxford Hindi-English Dictionary* (1993), queried headword by headword via Digital Dictionaries of South Asia | pass | reference work | yes | the queried entries |

**Swap test:** none of the five could sit unchanged in another post in this batch. Two are humour-theory papers, one is a pun-translation corpus study, one is a study of who jokes target, and one is a Hindi dictionary query.

**Venue caveat on source 2.** *Advances in Language and Literary Studies* (AIAC) is indexed by Crossref and carried by ERIC but is **not DOAJ-listed**. Its figures are used as a corpus observation, not as an authoritative result, and this is recorded in `structuralLimitations`.

**Domain caps, checked twice.** `capcheck.mjs` was run before choosing sources and again immediately after writing the JSON. Final state: `europeanjournalofhumour.org` 1 post (mine), `estetikajournal.org` 1 post (mine), `files.eric.ed.gov` 2 posts, **`dsal.uchicago.edu` 3 posts — at cap** (the Kannada and Telugu siblings wrote it concurrently). No further post in this batch may cite `dsal.uchicago.edu`. Capped domains avoided entirely: PMC/Europe PMC, frontiersin.org, PLOS, arXiv, SAGE, Wiley, Springer, Nature, ACL Anthology, archive.org. `doi.org` was avoided deliberately as a resolver sitting at 2 posts; direct publisher URLs were used instead.

**findpapers queries run:** `incongruity resolution humour theory study`, `joke comprehension processing research`, `humour translation wordplay study`, `pun translatability research`, `WhatsApp humour circulation India study`, `self-deprecating humor style wellbeing study`, `general theory of verbal humour translation study`, `humour appreciation second language learners study`, `Hindi humour linguistic analysis`, `European Journal of Humour Research pun translation`, `incongruity resolution humour European journal`, `humour translation untranslatable pun subtitling open access`, `disparagement humour sexist jokes tolerance prejudice study`, `humour style aggressive affiliative measurement study`.

One candidate was **rejected after fetching**: *Subtitling humour genres and translation strategies: Egyptian movies as an example*, EJHR 13(3) 2025 — the article page is titled **RETRACTED**.

---

## Hindi verification method

Every line was written for this page. Nothing was forwarded, and no film dialogue or copyrighted comedy was reproduced.

Each lexical and morphological claim was checked against McGregor's *Oxford Hindi-English Dictionary* through the Digital Dictionaries of South Asia query interface, with Platts' *A Dictionary of Urdu, Classical Hindi, and English* as a cross-check. What the dictionary actually returned:

- **आप** — `hon. you`
- **तुम** — `pron. (reduced hon. grade). you`
- **तू** — `zero hon. grade: emphasises intimacy or informality … also pej., esp. in the usage of persons employing both āp and tum`. This is why joke 7 carries an explicit warning not to send it outside an existing तू relationship.
- **बात** — `1. sthg. said … 2. a matter, topic, subject`; sub-entry **बात बनना** — `sthg. to prove a success`. Confirms the pun in joke 5.
- **गुलाब** — `*2. a (red) rose`, with **गुलाब-जामुन** as a sub-entry of that headword. Confirms the pun in joke 6 is lexical, not a stretch.
- **सवाल** — sub-entry **सवाल उठना** — `a question or matter to arise`. Confirms joke 8.
- **प्रस्ताव** — `proposal (for discussion); motion; suggestion`. Confirms that the Sanskritic word cannot carry a marriage proposal, which is the note attached to joke 3.
- **अँगूठा** (note the candrabindu; `अंगूठा` returns no headword) — sub-entry **अँगूठा दिखाना** — `to gesture with the thumb in derision or defiance; to make an indecent gesture`, and Platts adds `or to signify a desire for sexual intercourse`. **This killed a joke** (see the ledger).

**The lines were not reviewed by a native speaker.** Recorded in `structuralLimitations`.

---

## Joke ledger — 19 drafted, 8 published, 11 cut

**Published (8):** the calendar reader; the Monday excuse; two proposals; आप → तुम; बात होना / बात बनना; गुलाब / गुलाब-जामुन; the same shirt; सवाल ही नहीं उठता.

Of those, three are marked in the body as **not surviving an English gloss** (आप→तुम, बात, गुलाब-जामुन) and one as **half-surviving** (सवाल उठना, because English *arise* happens to carry the same ambiguity).

**Cut (11):**

| Reason | Count | Detail |
|---|---|---|
| Butt was a woman refusing, or framed refusal as injustice | **4** | the chappal-beating format; "she said no but my heart didn't accept it"; a friendzone-as-injustice line; a "girls always say no because" setup |
| Punchline landed on her deflection rather than his nerve | 1 | the "I asked for her hand / she handed me her phone to scan" line |
| Copyright | 1 | riffed on a film dialogue |
| Dictionary | 1 | the अँगूठी 'ring' / अँगूठा 'thumb' pun, cut on the indecent-gesture gloss above |
| Repeated a stronger line's shape, or body length | 4 | rose-with-no-recipient; the rehearsal habit; the group rule; still-holding-day-one |

**Fewer correct lines beats more shaky ones.** Eight is inside the 8–12 band the BRIEF sets for Indian-language posts.

---

## Editorial spine

The genre's default target is visible in the measured titles, and source 4 gives it a number: 90% of the online humour that study observed targeted women against 10% targeting men. The page states one rule in the body — no joke whose butt is a woman saying no, and none that frames a no as an injustice done to the man — and then publishes the ledger so the rule can be checked against the work. No incumbent, on the evidence of the titles, states anything of the kind.

---

## Links

- Internal (3): `/proposal` (mandatory, placed after the section establishing why a real proposal needs a format that states the question), `/court-of-love` (the genuine alternative for a reader in a joking register), `/apology-dashboard` (attached to the 2.4-hour median it is sampled on).
- `templateUrls`: `/proposal`, `/court-of-love` — relative paths only.
- Outbound (5): one per source, inline at the sentence each supports.
- Wikipedia in body: zero. Wikipedia/Wikidata pairs appear only in `about`/`mentions`, all verified against the Wikipedia API on 2026-09-23 — Hindi Q1568, Devanagari Q38592, Pun Q263668, Humour Q35874, Valentine's Day Q37587.

---

## Audit

50 items, `passed` 49, `failed` 1, disjoint, byte-verbatim. The single failure is the slug's stop word `in`, kept because the batch assigns the slug and it matches how the query is typed. Batch-level limitations live in `batchMeta.structuralLimitations`, not in `failed`.

Body length: **1,792 words** on a plain whitespace split, FAQs excluded. FAQs: 10, in `article.faqs` and the renderer-built FAQPage only; none is byte-identical to a body H2.
