# Research brief — `marriage proposal meaning in hindi`

Batch `2026-09-24-propose-30c` · slug `marriage-proposal-meaning-in-hindi` ·
category `modern-romance` · written 2026-09-24.

---

## Phase 1 — SERP: NOT MEASURED, and nothing on this page describes one

This keyword is **not** among the 11 India-served SERPs measured on 2026-09-16
(`content/keywords/2026-09-16-propose-100/serps.md`). No SERP was fetched for it in this
run, no top-5 pages were read, and therefore **no claim anywhere in the post describes
what competitors publish, cover or omit.** The one WebSearch call spent this run
(1 of the 4 allowed) was a research query for open-access work on Indian betrothal, not
a SERP pass; its result is discussed under "the paper we could not cite" below.

Demand signal from `selection.md`: 3 ordinal prefixes, ordinal only. Not printed as a
search volume anywhere.

**Live-corpus check (measured here, not assumed):** `content/keywords/strapi-live-articles.json`
was filtered for slugs matching `hindi|marriage|propos|rishta|sagai`. Hindi-language pages
exist in the live corpus — `how-to-say-i-miss-you-in-hindi`, `miss-you-message-for-love-in-hindi`,
`sorry-shayari-in-hindi`, `raksha-bandhan-wishes-in-hindi`, `girlfriend-day-wishes-in-hindi`
and others — and ~25 proposal-territory pages exist, but **every proposal-territory slug is a
tool/builder page in English**. So "no Hindi-language proposal page exists in the live corpus"
is supportable; the broad "no Indian-language page exists" claim is false and is not printed.
Slug checked against Strapi: `filters[slug][$eq]=marriage-proposal-meaning-in-hindi` → `[]`, free.

## Phase 2 — Cannibalisation and the angle

**Sibling read in full before drafting:**
`content/batches/2026-09-23-propose-30b/blogs/propose-day-meaning-in-hindi.json` (wave 3).

| | Wave-3 sibling | This post |
|---|---|---|
| Question answered | What does *Propose Day* mean — the occasion, its date, and the verb *propose karnā* | What does *marriage proposal* mean as a concept in Hindi, and which noun covers which stage |
| Lane | Loanword semantics and Hindi light verbs (करना compounding) | Betrothal and engagement as a social institution, and its standing in Indian marriage statute |
| Sources | Wichmann & Wohlgemuth verb-borrowing typology; Vaidya light-verb analysis; Persian/Bengali loanword-shift papers | Hindu Marriage Act 1955; Special Marriage Act 1954; McGregor entries; Lamba 2022 |
| Hindi printed | Second-person sentences (तुम/आप register split) | Nouns and verb-noun idioms only — no second-person sentences, so no overlap |
| Calendar | Propose Day date is load-bearing | No date claim at all |

**Both the lane and both named sources of the sibling are banned to this post and were not
opened.** Cross-linked by slug in prose (`/blog/propose-day-meaning-in-hindi`), which
404s until wave 3 publishes — recorded in `structuralLimitations`.

**Fan-out sub-queries this post decomposes into**, each mapped to an H2: *what is a marriage
proposal called in Hindi* → Block 2; *does प्रस्ताव mean a romantic proposal* → the committee-word
H2; *what is the difference between रिश्ता, सगाई and शादी* → the six-word block; *which word do I
use for which situation* → the table; *is a proposal in India a family matter* → the two-conversations
H2; *is an engagement legally binding in India* → the statute H2; *should I send a proposal page*
→ the closing H2. Sub-queries that did not earn an H2 (minimum marriage age, objection window,
मँगनी, native-speaker review) went to the FAQ instead, and no FAQ repeats an H2.

**Angle:** the only page on this keyword that answers the definition from primary reference
material it re-verified itself — every gloss taken from McGregor entry by entry, the committee
reading of प्रस्ताव re-counted in a 16,652-sentence treebank, and the legal standing of an
engagement checked by searching the two marriage Acts for the word and finding it absent —
then priced against the platform's own page-type mix.

## Phase 3 — Verification done for this post, by this agent

### McGregor, checked entry by entry (DSAL, ban-exempt reference instrument)

The task prompt asserted that McGregor glosses प्रस्ताव as a motion for discussion.
**Checked directly; the prompt is correct.** Entry, p. 667, verbatim:

> प्रस्ताव pra-stāv [S.], m. 1. introduction; commencement (of discussion, exposition).
> *2. proposal (for discussion); motion; suggestion. 3. Pl. HŚS. occasion, time. —
> ~ उठाना, to raise a matter; to introduce a motion, or topic. – प्रस्ताव-कर्ता, m. inv.
> proposer (of a motion, &c.). विषय-प्रस्ताव, m. introduction of, or to a topic.

No romantic sense in the entry. Other entries read in full: रिश्ता (p. 865), सगाई (p. 973),
शादी (p. 947), विवाह (p. 929), बात (p. 723).

### Treebank replication (independent of the wave-3 count)

UD Hindi-HDTB, `train` + `dev` + `test` conllu files, **16,652 sentences** scanned by
string match on the `# text` line: **268 sentences contain प्रस्ताव or प्रस्तावित.** One
contains a love-word token and it is प्रेमियों meaning "cricket lovers/fans" (a sentence about
special trains), not romance. **The prompt's figure was 230 instances; mine is 268 sentences.**
The two are not the same measurement — mine counts sentences and includes the participle
प्रस्तावित — so the numbers are not in conflict, but only **my own 268/16,652 figure is printed**,
with its method stated.

### Statute (India Code, ban-exempt)

Both acts read as the India Code bare-act text, both stamped `[As on the 15th April, 2026]`.

- **Hindu Marriage Act 1955, s.7(2):** "Where such rites and ceremonies include the Saptapadi
  (that is, the taking of seven steps by the bridegroom and the bride jointly before the sacred
  fire), the marriage becomes complete and binding when the seventh step is taken."
- **HMA s.5(iii):** bridegroom 21, bride 18.
- **Special Marriage Act 1954, s.5:** written notice to the Marriage Officer of a district where
  a party has resided not less than thirty days. **s.6(2):** the officer publishes it by affixing
  a copy in a conspicuous place in his office. **s.7(1):** "Any person may, before the expiration
  of thirty days … object to the marriage."
- **Verified negative:** `betroth*`, `engagement`, `espousal` return **zero matches in either
  Act's full text.** That is the legal point of the post, and it is a count this agent ran.

The official **Hindi** text of the HMA (`H1955-25Hi.pdf`) was also downloaded; its extracted
text is font-mangled and unusable, so no Hindi statutory wording is quoted.

### Peer-reviewed open access

Lamba, T. (2022), "At the Crossroads of Marriage", *Changing Societies & Personalities* 6(4):965–979,
DOI 10.15826/csp.2022.6.4.212. **Full text read** (PDF). Qualitative: in-depth interviews with
**12 working women aged 25–30 in Delhi, over two months in 2019**, snowball sampled. Load-bearing
passage: "In most cases, the intimate relationship that starts from mutual attraction must seek
parental approval for marriage." And the participant "Natasha", who says she told her partner she
wanted her parents to agree "and then I would say yes to him". n = 12 is small; the post says so.

### The paper we could not cite — a real finding about the cap system

Reed, M. N. (2025), "Roka Engagements and the Hybridization of Arranged and 'Love' Marriage in
Urban India", *Journal of Marriage and Family* 87(5), DOI 10.1111/jomf.13115 — 48 interviews,
New Delhi, 2018–19 — is the single most on-lane paper in existence for this brief. It is
**unusable here**: its Wiley URL is on the 332-URL ban list (spent in `2026-09-17-propose-30`),
and its only other full-text host, `pmc.ncbi.nlm.nih.gov`, is at the 3-post domain cap. It was
read but **nothing from it is stated anywhere in the post**.

### Rejected or unreachable

`southasianist.ed.ac.uk` (Moore 2014) — readable, but an "Exploratory Essay" whose relevant
claims are second-hand from Mody and Kaur, and `ed.ac.uk` would have gone to the cap; dropped.
`repository.nls.ac.in` (NLSIR, false-promise-to-marry) — Cloudflare 403. Europe PMC REST — 503.
BMC/Springer, openedition.org — bot-challenged. DOAJ returns **0 results** for `betrothal` +
India, for `"matrimonial" AND India AND advertisement`, and for `"engagement" AND "marriage"
AND India AND ritual`; findpapers on `betrothal engagement custom India study` and
`roka sagai engagement ceremony research` returned nothing India-specific and open. **Betrothal
as an institution is thinly covered in reachable open-access literature** — that is why this
post leans on statute and on the platform's own data rather than on a stack of papers.

## Phase 4–5 — Structure and links

Eight H2s. Block 3 is six H3s with four fixed fields in fixed order (dictionary gloss / what it
covers / who is in the room / when it is wrong), mirrored one-to-one by the `ItemList`.
Internal links: `/proposal` (mandatory, placed after the table that establishes why),
`/love-gf` (genuine alternative for the majority Indian sense of "propose"), `/templates`.
Zero Wikipedia body links — `en.wikipedia.org` has one slot left in this batch and the entity
work is done in `sameAs` instead, where it costs nothing.

## Hindi ledger

**Drafted 22 · published 12 · cut 10.** Published lines are all McGregor headwords or idioms
listed inside a McGregor entry this agent read. Cut, with reasons:

| Cut | Reason |
|---|---|
| मँगनी | No McGregor result on exact-headword or full-text search from DSAL; could not verify |
| रोका | Same — no DSAL result; the roka literature could not be cited either (see above) |
| वाग्दान | No McGregor result |
| मँगेतर | No McGregor result |
| प्रणय / प्रणय-निवेदन | No McGregor result for either element |
| निवेदन | No McGregor result |
| ब्याह (standalone) | No standalone DSAL result; kept **only** inside शादी-ब्याह, which McGregor lists |
| संबंध (standalone) | No standalone DSAL result; kept **only** inside विवाह-संबंध, which McGregor lists |
| रिश्ता आना | Not in McGregor's रिश्ता entry (which lists रिश्ता करना and रिश्ता रखना); the wave-3 sibling printed it, this post does not |
| Second-person proposal sentences | The sibling owns that lane; printing them again would duplicate it and would need conversational-corpus verification this post did not run |

**Not reviewed by a native speaker.** Recorded in `structuralLimitations`.

## Honest assessment

The defensible assets are the re-verification itself (the McGregor entries, the 268/16,652
treebank count, the zero-hit statute search) and the first-party page-type mix. The domain is
far below the incumbents on this kind of query and no SERP was measured, so nothing here
predicts a position.
