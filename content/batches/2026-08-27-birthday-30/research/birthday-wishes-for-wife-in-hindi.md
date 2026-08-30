# Research brief — birthday wishes for wife in hindi

- **Batch:** 2026-08-27-birthday-30, wave 2, rank 18
- **Slug:** `birthday-wishes-for-wife-in-hindi` (checked against live Strapi 2026-08-27 — free)
- **Lane:** C — multilingual communication. Sub-angle: intimate register, and the public/private
  split in spousal address.
- **Cluster:** absorbs `birthday wishes for boss in hindi` as `batchMeta.secondaryKeywords`.
- **Band:** 1,000–3,000 · expected clicks 132 · weak results 5+

---

## Phase 0 — data gate

Satisfied by `BRIEF.md`'s read-only probe of `birthdaygfpages` (n = 198, run 2026-08-26) plus
`content/facts.md` (regenerated 2026-08-26). Facts used in the post:

| Fact | Where used |
|---|---|
| Median personal message 96 characters, n = 197 | answer paragraph, wish H3s, table |
| 106 of 197 messages under 100 characters | answer paragraph |
| 198 pages created on the partner-birthday template `/birthday-gf`, 6.5% of 3,024 pages | answer paragraph, definition H2 |
| 37.9% password-protect a birthday page vs 43.9% site-wide | answer paragraph, public/private H2, table |
| 14.4% of quizzes were actually played (28 of 195) | "wrong choice" H2 |
| 0.9-hour median first-save-to-last-edit | public/private H2 |
| 48.6% mobile split on birthday views vs 51.0% site-wide | "wrong choice" H2 |

**Recorded absence.** The probe has no language field and no relationship field. `/birthday-gf` is
the partner-birthday template, so the 198 pages are partner-directed by construction, but nothing
in the data separates a wife from a girlfriend, and nothing separates a Hindi message from an
English one. No wife-specific or Hindi-specific first-party figure was invented; the post says so
in the "wrong choice" section, and it is recorded as an audit failure.

---

## Phase 1 — SERP

Supplied India-localised (`gl=in`) in `ASSIGNMENTS-WAVE2.json`. **Four results total** — the
thinnest in the wave. Not fetched, not cited, not linked (all four are competitors under
`references/competitors.md`).

| # | Result | What it is | What it optimises for |
|---|---|---|---|
| 1 | craftyartapp.com — "330+ Heart Touching Birthday Wishes For Wife in Hindi" | Wish listicle, 330+ items | Volume of quotes; app install |
| 2 | livehindustan.com — "Happy Birthday Wishes For Wife" | News-portal wishes roundup | Hindi-news pageviews |
| 3 | pinterest.com — "100+ Birthday Wishes To Wife In Hindi" | Pinterest board | Image saves |
| 4 | happybirthdaywishesinhindi.com | Bare exact-match domain, "50+ रोमांटिक संदेश" | Exact-match domain match |

Two of the four are not articles at all (a Pinterest board, an EMD). Google has almost nothing to
serve on this query.

The same three domains (craftyartapp, livehindustan, happybirthdaywishesinhindi) also rank for
`birthday wishes for boss in hindi`, which is why the two keywords are treated as one page.

## Phase 2 — gap

**Table stakes:** a set of ready-to-send Hindi wishes in Devanagari; a romantic register; some
short lines; some longer lines.

**The gap, in one line:** every ranking page hands over a pile of Hindi sentences and says nothing
about *which second-person pronoun* is in them. Hindi forces a choice between आप, तुम and तू
before you can write a single verb, and that choice is the whole social content of the message.
None of the four results names it, none prices message length, and none distinguishes a wish sent
privately from a wish posted where the in-laws can read it.

**Fan-out sub-queries → H2s:**

- Which pronoun do you use for a wife in Hindi? → the corpus H2
- Is तू rude? → the corpus H2 and FAQ
- What do I actually write? → the five-wish H3 block
- Should I post it in the family group or send it privately? → the public/private H2
- Does she reply the same way? → the asymmetry H2
- What if I need the boss version? → the आप H2
- What if she can't read Devanagari? → the "wrong choice" H2

**Angle:** wins by being the only post that decides the pronoun before the wish — measuring
आप, तुम and तू against each other in a 19,177,172-token Hindi corpus — and the only one that
treats a wish posted to a family WhatsApp group as a different message from the same wish sent
privately, priced against the 96-character median and the 37.9% password-protect rate.

## Phase 2b — cannibalisation

Live in English and read before drafting (headings pulled from the live pages 2026-08-27):

- `birthday-wishes-for-wife` — "120 birthday wishes for wife (organized by tone)", romantic /
  heartfelt / funny / short H3s, a tone-vs-elements table, a 7-step page build.
- `romantic-birthday-wishes-for-wife` — "120+ Messages & How to Send Them".
- `birthday-wishes-for-wife-from-husband` — "120+ lines, templates & delivery ideas".
- `birthday-wishes-for-boss` — formal / warm-professional / light-and-playful tone H3s, card /
  email / Slack format examples.

All four are **tone-sorted listicles**. This post is sorted by *grammatical person*, not by mood,
and its organising numbers are a corpus frequency table and a character median. No section mirrors
their structure; no "organised by tone" block, no step-by-step page build.

In-batch siblings checked so none of their spines is reused: `birthday-wishes-in-hindi` (Roman
transliteration input), `birthday-wishes-reply-in-hindi` (thank-you word frequencies),
`birthday-wishes-in-tamil` (literary vs spoken register), `birthday-wishes-for-younger-sister`
(elder/younger titles), `birthday-surprise-ideas-for-wife-at-home` (time remaining).

---

## Phase 3 — sources

### Original measurement (the differentiator)

Queried the **Leipzig Corpora Collection** Hindi news corpus `hin_news_2011_1M`
(1,000,000 sentences, 230,831 types, **19,177,172 tokens**) through its public word-frequency
endpoint on 2026-08-27. Absolute frequencies:

| Nominative | freq | Oblique | freq | Possessive | freq |
|---|---|---|---|---|---|
| आप | 12,335 | आपको | 6,884 | आपका | 1,759 |
| तुम | 750 | तुम्हें | 201 | तुम्हारा | 118 |
| तू | 236 | तुझे | 43 | तेरा | 189 |

Derived: आप is **16.4×** तुम and **52×** तू. Of the 13,321 nominative tokens, आप is **92.6%**,
तुम **5.6%**, तू **1.8%**.

The one genuinely surprising cell: **तेरा (189) outranks तुम्हारा (118)** even though तू is a
third of तुम in the nominative — तू's possessive survives in quoted song, verse and prayer where
its nominative does not.

Congratulation words, same corpus: बधाई **739**, शुभकामनाएं **214**, शुभकामनाएँ **7**,
जन्मदिन **698**, हार्दिक **27**, सालगिरह **72**. Address nouns: साहब **895**, सर **517**,
श्रीमती **351**, पत्नी **4,118**, जीवनसाथी **103**, प्रिय **159**.

**Caveat stated in the post:** this is written *news* Hindi. आप-dominance is partly genre —
journalism quotes interviews and addresses readers, and it almost never addresses a spouse. That
is the point being made, not a flaw being hidden: the register you inherit by copying published
Hindi is the wrong one for a marriage.

**Rejected from the same corpus:** मुबारक (1,922) — the 2011 corpus is contaminated by the
Egyptian surname Mubarak (Arab Spring coverage), so the count does not measure the greeting. Not
used anywhere in the post.

**Distinctness from the sibling.** `birthday-wishes-reply-in-hindi` measured
धन्यवाद / शुक्रिया / आभार / थैंक्यू in the same corpus. No word, and no question, overlaps.
The domain moves from 1 of 3 to 2 of 3 in-batch, which is inside checklist item 65.

### Cited sources

1. **Manjulakshi, L. (2004). "Modes of Address in Kannada: A Sociolinguistic Study of Language Use
   in Mysore District." *Language in India* 4:9, September 2004. ISSN 1930-2940.**
   `https://www.languageinindia.com/sep2004/manjulakshitermsofaddress2.html`
   **Read in full** (HTML, 17,833 characters extracted). Verified verbatim: "As per a widely
   prevalent Hindu custom, wife never addresses the husband by his name… Wife always addresses the
   husband using the plural form to show respect", while husbands used singular familiar
   imperatives to wives; the paper records name-use by both spouses as a recent shift.
   Subject test: pass — spousal address terms in an Indian language.
   Swap test: pass — no sibling in this batch is about spousal address asymmetry.
   **Limitation stated in the post:** the study is of Kannada in Mysore district, not Hindi. Used
   as documented Indian pattern, never as a Hindi measurement.
   Domain `languageinindia.com` — 0 other posts in batch.

2. **Kocur, D. J., Prusik, M., & Konopka, K. (2022). "Public and Private Romantic Display of
   Affection Scale: Development and Validation." *Polish Psychological Bulletin* 53(3), 152–170.
   DOI 10.24425/ppb.2022.141863. Published 2022-09-26. Open access.**
   `https://journals.pan.pl/Content/124290/PDF/2022-03-PPB-rew.pdf`
   **Read in full** (PDF, 122,960 characters extracted). Verified: Study 1 N = 894 (483 women,
   54.0%; 411 men, 46.0%), mean age 26.88 (SD 10.08); Study 2 N = 343; Study 3 N = 204 couples,
   where partners' reports of each other's displays converged with self-reports. Public and private
   display were built and validated as **separate subscales** (8 items each in the item pool, 19
   items in the final PPRDAS). Verified verbatim: "a negative association between the age of the
   participants, duration of the relationship and willingness to show affections both in private
   and in public."
   Peer-reviewed, open access, subject test pass. Domain `journals.pan.pl` — 0 other posts.

3. **Piercy, C. W. (2016). "Making it Facebook official: The warranting value of online
   relationship status disclosures on relational characteristics." *Computers in Human Behavior*.
   DOI 10.1016/j.chb.2015.11.016. Published 2015-11-26. Green OA at KU ScholarWorks.**
   `https://kuscholarworks.ku.edu/handle/1808/27653`
   **Read in full** (author manuscript PDF, 54,901 characters extracted). Verified: N = 170 (120
   women), undergraduates at a large Southwestern US university. Respondents who posted their
   relationship status reported greater relational satisfaction (M = 5.40, SD = .68) than those who
   did not (M = 4.53, SD = .92), t(168) = 6.88, p < .001, Cohen's d = 1.06; commitment d = 1.13.
   **Limitation stated in the post:** the sample is US undergraduates, and the paper's own
   limitations section says future work "should… includ[e] married couples". Used as directional
   evidence that a public declaration is a different act from a private one, never as a figure
   about Indian marriages. Domain `kuscholarworks.ku.edu` — 0 other posts.

4. **Leipzig Corpora Collection, Hindi news corpus `hin_news_2011_1M`.** Corpus page:
   `https://corpora.uni-leipzig.de/en?corpusId=hin_news_2011_1M`. Frequencies retrieved
   2026-08-27 via the collection's public word endpoint. Corpus metadata (1,000,000 sentences;
   19,177,172 tokens; 230,831 types) read from the collection's own corpus listing. No publication
   date is stated for the corpus release, so `publishedDate` is omitted from `citation`.

**Count: 4 sources.** 3 pass the subject test, 1 is peer-reviewed and open-access (PPB), and there
is **no** generic context statistic — no PIB, TRAI, Census or MEA figure appears in the post.

### Rejected sources, and why

- **Rahimi, A. & Bassiri, S. (2011). "The Address Forms of Spouses in Different Social Strata in
  Iran…" *International Journal of Linguistics* 3(1). DOI 10.5296/ijl.v3i1.721.** The single best
  topical match found — spousal address forms, peer-reviewed, open access. `macrothink.org` and
  the DOI resolver for it both **timed out on every attempt** (three URLs, 25s / 45s / 45s,
  `UND_ERR_CONNECT_TIMEOUT`). Rejected rather than cited from metadata, because the full text was
  never readable and the abstract was never retrieved either.
- **Ghosh, T. (2015). "Conventionalized Politeness Structures: Empirical Evidence from
  Hindi/Urdu." *Journal of Politeness Research*. DOI 10.1515/pr-2015-0001.** The best Hindi-specific
  politeness paper found. Not open access (Unpaywall: `is_oa: false`), and the De Gruyter page
  returned an empty body (HTTP 202) so not even the abstract was readable. Rejected.
- **"Violating the Hindu Norm of Husband-Wife Avoidance", *Journal of Comparative Family Studies*
  25(2), 1994. DOI 10.3138/jcfs.25.2.249.** Directly on the Indian public-reserve norm. Paywalled,
  no OA copy. Rejected.
- **Context-collapse literature** (e.g. *Social Media + Society* 2021, DOI
  10.1177/20563051211041646, open access). Fails the **swap test**: it would sit unchanged in
  `birthday-status-for-whatsapp` or `birthday-captions-for-myself`, both of which are already
  written in this batch on self-presentation. Left out.
- **`r12a.github.io`** (Ishida's Devanagari orthography notes) — not needed; this post makes no
  script or rendering claim. The last in-batch slot is left for a sibling.
- **`pmc.ncbi.nlm.nih.gov`** — measured at **3 of 3** in-batch (songs-for-whatsapp-status,
  surprise-ideas-for-wife, younger-sister). At cap. Not used.

### Search terms tried

`Hindi honorific second person pronoun address terms` · `address terms between spouses husband
wife sociolinguistics` · `terms of endearment married couples` · `terms of address spouses` ·
`name avoidance wife husband India naming taboo` · `teknonymy address avoidance South Asia` ·
`husband name taboo Hindu wife custom` · `spousal address terms India sociolinguistic survey` ·
`honorificity Hindi second person pronoun choice` · `politeness strategies Hindi speakers pronoun
tu tum aap` · `husband wife avoidance joint family north India reserve` · `conjugal intimacy joint
family India privacy` · `relationship visibility social media couples disclosure` · `public
display of affection social media Indian` · `Facebook official relationship status disclosure
couples` · `WhatsApp family groups India intergenerational communication` · `code switching
intimacy Hindi English couples`

Routed through CrossRef, DOAJ and Unpaywall APIs in the sandbox. **OpenAlex returned HTTP 429
(daily budget exhausted, "$0.0002 remaining") and Semantic Scholar returned 429 on every query** —
both already spent by sibling agents. WebSearch was not called (session exhausted at 200/200).

**Honest finding:** there is no open-access, peer-reviewed study of *Hindi* spousal address that
this agent could reach. The two best candidates were unreachable and paywalled respectively. The
post therefore leans on an original corpus measurement plus an Indian-language study of a
different language, and says which is which in the body.

---

## Phase 4–5 — targeting

- `categorySlug`: `milestone-birthdays`
- `templateUrls`: `https://subhsandesh.in/birthday-gf`, `https://subhsandesh.in/templates`
- Internal links in body (3, all from `TEMPLATE_LINKS`): `/birthday-gf`, `/templates`,
  `/anniversary-gf`
- `structuredData`: `ItemList` mirroring the five wish H3s in order, plus an `@id`-matched
  enrichment block on `…#post` carrying `citation` (4 entries, one-to-one with
  `batchMeta.sources`), `about` and `mentions`.
- Wikipedia/Wikidata `sameAs` pairs verified against the Wikipedia API on 2026-08-27:
  Hindi Q1568 · Devanagari Q38592 · T–V distinction Q1124935 · Kannada Q33673 · WhatsApp Q1049511.
  ("Terms of address" returned `missing` and was dropped.)

## The cluster decision

**Written as one page.** The spine holds: a birthday wish in Hindi cannot be written without
choosing a second-person pronoun, and a wife and a boss are the two ends of that one choice. The
corpus table (आप 12,335 : तुम 750 : तू 236) is load-bearing for both halves, and the boss section
is the contrast that proves the wife rule rather than a bolted-on second topic.

The page is deliberately **wife-first and wife-dominant** — roughly 80% of the body — with one
substantial आप section carrying three boss wishes. A 50/50 split would have been the incoherent
version; a wife post with the boss as the far end of the same scale is not.

## Final measurements

`wordCount()` = **1,784** (plain split 1,760) · 5 wish H3s + 3 boss wishes · 9 H2s ·
10 FAQs · 4 outbound research links, 3 internal · audit 49 passed / 1 failed / 50 total.

In-batch source position after this post: `corpora.uni-leipzig.de` moves 1 → **2 of 3** domains, and
after the counter's query-string stripping the URL `https://corpora.uni-leipzig.de/en` sits at
**2 of 2** posts — at the URL cap, not over it. `journals.pan.pl`, `kuscholarworks.ku.edu` and
`languageinindia.com` are all new to the batch at 1 of 3.

`batch.json` was deliberately **not** edited: four other wave-2 agents were running concurrently
against the same file, and the deliverables for this keyword are the blog JSON and this brief.

## Language blocker

Every Devanagari string in the post is **machine-composed and unverified**. Recorded in
`auditReport.failed` against *"The post contains at least one claim none of the top 5 pages make"*
as **structural**, per BRIEF-WAVE2.md correction 3: in a language post the differentiating claim
*is* the script content, and no citation can close it — only a native reader can. The corpus
frequencies are separately verifiable and are not covered by this blocker; the composed wishes,
transliterations and honorific guidance are.
