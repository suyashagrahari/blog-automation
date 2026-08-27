# Research brief — `birthday-wishes-for-daughter-in-hindi`

- **Keyword:** birthday wishes for daughter in hindi
- **Rank in shortlist:** 16 · band 1000–3000 · expected clicks 132
- **Lane:** C — multilingual communication. **Sub-angle: parent-to-child address, and the register shift from a small *beti* to a grown daughter.**
- **Category:** `milestone-birthdays` · **Templates:** `/birthday-parents`, `/templates`
- **Drafted:** 2026-08-27 · **Slug checked free against live Strapi** the same day (`filters[slug][$eq]` returned `total: 0`)

---

## Phase 0 — data gate

Satisfied by `BRIEF.md`'s read-only probe of `birthdaygfpages` (n = 198, measured 2026-08-26), not by a fresh
`npm run facts` run. Nine facts used, four of them inside the first 150 words' vicinity (two inside the answer
paragraph itself: the 96-character median across 197 pages, and 106 of 197 under 100 characters).

**The absence that matters, recorded rather than invented:** the probe has no language field and no relationship
field. There is therefore *no* Hindi-specific and *no* daughter-specific first-party claim available. The post
states this in the body ("96 characters is a birthday median — not a Hindi median, not a daughter median")
rather than letting the reader assume otherwise, and it is named again in `honestAssessment`.

---

## Phase 1 — SERP (supplied, India-localised `gl=in`, harvested 2026-08-26/27; WebSearch exhausted at 200/200 and not called)

| # | Result | What it actually is | Direct answer? |
|---|---|---|---|
| 1 | mensxp.com — *Beti Birthday Wishes in Hindi* | Editorial listicle, Devanagari lines, no register or length guidance | No |
| 2 | craftyartapp.com — *400+ Heart Touching Birthday Wishes For Daughter in Hindi* | 400-item wish dump attached to a design app | No |
| 3 | scribd.com — *100+ बेटी को जन्मदिन की शुभकामनाएं* | User-uploaded document behind a reader wall | Not a page |
| 4 | pinterest.com — *हैप्पी बर्थडे बेटी* | Image board | Not a page |
| 5 | eduyush.com — *200+ Birthday Wishes for Daughter in Hindi* | 200-item list on an accountancy-courses domain | No |
| 6 | facebook.com — *मेरी प्यारी बेटी, जन्मदिन की अनंत मंगल शुभकामनाएँ* | Single social post | Not a page |

Six results only. **Three of the six are not real pages.** The two substantive results compete on count
(400+, 200+) and neither tells a parent which line belongs to which daughter. No AI Overview was captured in
the supplied SERP. No competitor page was fetched, cited, linked or paraphrased — `competitors.md` treats the
wishes-listicle farms as competitors, and every domain above is in the SERP block.

---

## Phase 2 — gap analysis

**Table stakes** (present on both substantive results, so present here): Devanagari wish lines; a Roman
transliteration people can type; short lines usable as a status or caption; separate treatment for a small
daughter and a grown one; the standard formulae जन्मदिन मुबारक and जन्मदिन की शुभकामनाएं.

**The gap.** Every ranking page mixes a wish for a six-year-old and a wish for a 28-year-old into one
undifferentiated list. None of them names the mechanism that makes those two different: Hindi *grades the
wish grammatically* by the addressee's age. The address term changes (गुड़िया → बिटिया → बेटा/बेटी → बेटी जी),
the pronoun tier changes (तू → तुम → आप), and the verb ending changes with the pronoun (हँस → खेलो → रहिए).
A 400-item list is 400 answers to a question the reader has not been told how to ask.

**Stale data.** None of the ranking pages cites data of any kind, so there is nothing to supersede. That is
itself the finding: the length question — *how long should this be?* — is answered by nobody, and the
first-party 96-character median answers it.

**Unanswered questions the pages raise and drop:** can you call a daughter बेटा? when do you stop saying
बिटिया? तुम or आप for your own daughter? does a married daughter get a different register? why do Hindi
wishes read like commands?

**Fan-out sub-queries → H2/H3 map.** "what does beti mean / commit you to" → H2 2. "why do Hindi wishes sound
like orders / is that rude" → H2 3. "what do I write for a daughter aged X" → H2 4's eight H3s. "which word
for which age" → H2 5 (table). "when to stop using bitiya / diminutives" → H2 6. "public post vs private
message" → H2 7. "is a digital page the right thing at all" → H2 8. Remaining sub-queries went to the ten
FAQs.

**Angle (`batchMeta.angle`).** Wins by being the only post that treats a Hindi birthday wish for a daughter as
an age-graded *register* problem rather than a list — matching address term to pronoun to verb form across five
life stages — and prices every line against the measured 96-character median across 197 birthday pages.

---

## Cannibalisation check

`birthday-wishes-for-daughter` is **live in English** (Strapi id 889, *"Birthday Wishes for Daughter: 120+
Messages & How to Make Her Day"*). I fetched its `contentMarkdown` from the Strapi API and read its heading
tree before drafting. **It already sorts by age** — "For daughters turning 1–10", "11–17", "adult daughters
(20+)" — so age-banding alone is not the differentiator. Its spine is mood + age + a seven-step page-build
walkthrough + etiquette + a pre-publish checklist.

This post therefore does **not** translate that structure. Its organising axis is the linguistic form — address
term, pronoun tier, verb ending — with the age band as the *consequence* of the form rather than the heading.
There is no build walkthrough, no checklist and no etiquette section. `birthday-wishes-for-son` is also live
and is not touched. The Hindi variant is legitimate under the language exception.

Wave-1 sibling `birthday-wishes-in-hindi` covers *why Hindi wishes get typed in Roman letters* and holds
`r12a.github.io`, `research.google` and the Dakshina dataset. Nothing here re-derives transliteration, and
`r12a.github.io` was deliberately left alone (see below). Wave-2 sibling `birthday-wishes-reply-in-hindi`
covers thank-you-word choice; no overlap.

---

## Phase 3 — sources

`r12a.github.io` was at **2 of 3 in-batch** when I measured, with four lane-C siblings potentially wanting it.
This post's sub-angle is parent-to-child *address*, not script or orthography, so it does not need Ishida's
notes — I left the last slot for the Punjabi (Gurmukhi/Shahmukhi) and Urdu (Nastaliq) posts, which cannot
substitute anything for it.

**Discovery was badly constrained.** OpenAlex, Semantic Scholar and PubMed E-utilities all returned HTTP 429
throughout the session (concurrent siblings, presumably); lingbuzz search returned an empty body; MDPI
returned 403 on both the HTML and the PDF; Shodhganga's `/simple-search` timed out on the root path and its
DSpace-7 REST endpoint 404s. **DOAJ's article API was the only working discovery channel**, and it searches
metadata only, so the search space was narrow. Search terms tried, all as phenomena rather than the keyword:
`Hindi terms of address kinship`, `terms of address Hindi honorific tum aap`, `child-directed speech register
India`, `parent child address terms affection diminutive`, `power and solidarity address`, `kinship
terminology North India`, `married daughter natal family India`, `vidai / bidai`, `Bhojpuri songs`,
`age-graded language`, `terms of endearment`, `blessing speech act`, `life course terms of address`.

Four sources. **All four were read in full text, not abstract** — two as journal HTML full-text pages, two as
downloaded PDFs converted with `pdftotext`. No source is paywalled, so item 37 has nothing to record. No
figure, chart or table was reproduced. Zero government/context statistics were used, so the "at most 1"
allowance is unspent.

| Source | Domain | In-batch count at final measure | Read | What it verifies here |
|---|---|---|---|---|
| Suryanarayan & Khalil, *Kinship terms as indicators of identity and social reality: Syrian Arabic and Hindi*, **Russian Journal of Linguistics** 25(1) 125–146, 2021 | `journals.rudn.ru` | 2 of 3 | Full text (HTML) | Dictionary analysis + open-ended questionnaires, **70 Hindi respondents aged 20–85**; बेटी/पुत्री vs बेटा/पुत्र; relative age must be added with छोटा/छोटी or बड़ा/बड़ी because the term will not carry it; age difference weighted more heavily in Indian than Syrian family address |
| Hemangini, *Hypocoristic Formation in Gujarati*, **Catalan Journal of Linguistics** 24(1) 161–184, 27 February 2025, CC BY-NC | `revistes.uab.cat` | 1 of 3 (URL 1 of 2) | Full text (PDF, `pdftotext`) | **Five** hypocoristic types in Gujarati, "an Indo-Aryan language", from **eight L1 speakers** (fn. 5). The *-u* form "denotes an attitude of affection" and "is usually given by parents to their children", but once it becomes the default name in all contexts "the addresser cannot be presumed to have an attitude of affection"; the *-ɭ-* form "mainly denotes a sense of contempt, disgust, rudeness or impoliteness. However, when used for children, it denotes affection"; the *-i/-o* form used by elders to young people "conveys that the addressee is a junior", and "when age is not a factor, it could denote a lack of respect" |
| Sarvasy, Rumsey, Dahmen, Onga & Yam, *Child-directed speech in Ku Waru and Nungon (PNG)*, **Language Development Research** 5(3) 191–244, 15 July 2025 | `ldr.lps.library.cmu.edu` | 1 of 3 | Full text (PDF) | **11 Ku Waru parents** named the lexical set reserved for small children (*kang kel-nga ung-ma*); Nungon corpus = **9 children aged 1;1–5;10, ~182 hours**; the register is a listable, age-marked lexicon, and it is studied only in the earliest years |
| Khalil & Larina, *Terms of Endearment in American English and Syrian Arabic Family Discourse*, **RUDN Journal of Language Studies, Semiotics and Semantics** 13(1) 27–44, 2022 | `journals.rudn.ru` | 2 of 3 | Full text (HTML) | **312 coded family interactions** (155 American, 157 Syrian), **199 endearment uses** (87 / 112); Syrian spouses used endearments only in private and avoided them in front of their children — endearment is audience-governed, not affection-governed |

**Subject test:** all four pass. One is about Hindi specifically (kinship terminology); one is about parent-to-child
and age-graded address in another Indo-Aryan language (Gujarati hypocoristics); two are about the phenomenon the
post turns on (age-marked child-directed register; audience-governed endearment). None is merely "about India" or
"about the internet".

**Swap test: one of four now fails, by demonstration** (two did before the remediation pass, below).
`birthday-wishes-for-younger-sister` also cites the RUDN kinship paper (it lists sibling terms alongside
beti/beta), so that URL sits at **exactly 2 of the permitted 2 posts** — item 36 (the cap) is not breached, but
item 34 is, and it is recorded as a failure rather than argued away. The other three pass cleanly: no sibling
keyword has any use for Gujarati pet-name morphology, for child-directed speech in Papua New Guinean languages,
or for endearment terms in American and Syrian family discourse.

**Corpus-wide judgement:** `journals.rudn.ru`, `revistes.uab.cat` and `ldr.lps.library.cmu.edu` were all at
zero in this batch before this post, and none appears in the banned list. Two of the four URLs share the RUDN
domain, which is more concentration than ideal; it was accepted because those two are the two most
subject-specific sources the working discovery channel could reach, and because they are different journals
with different authors, data and questions.

---

## Phase 4–5 — draft, links, targeting

- **Body:** 1,776 words by the official `wordCount()` snippet (1,780 on a plain split) after the remediation
  pass below; 1,783/1,777 before it. Inside the 1,500–1,800 band. 8 H2s, 8 H3s, exactly one H1, no skipped levels.
- **Answer paragraph:** direct answer in sentence one (the register shift), then the two first-party numbers,
  then one sentence stating what the page covers. No scene-setting.
- **Comparison table:** 5 rows × 5 columns, real values only. Columns 4 and 5 are first-party — the measured
  character count of each wish and its distance under the 96-character median.
- **Downside section:** the 14.4% quiz-play rate, 2.0% never-opened, 48.6% mobile split, and the flat statement
  that the first-party probe has no language or relationship field.
- **Internal links:** 2, both verified present in `TEMPLATE_LINKS` — `/birthday-parents` after the table
  (anchor "family birthday page template", with an honest note that it is the *closest* fit rather than a
  purpose-built parent-to-daughter template) and `/templates` after the public/private section (anchor "every
  SubhSandesh template"). Neither is in the opening. `/birthday-gf` was explicitly not used.
- **Outbound links:** 4, one per source, each attached inline to the sentence stating its fact, each verified
  by reading the source. No Wikipedia in the body (the verified `sameAs` pairs live in `structuredData` only,
  which does not count against the 0–2 budget).
- **`structuredData`:** two blocks. An `@id`-matched `BlogPosting` on `<canonicalURL>#post` carrying `about`
  (Hindi), four `mentions` and `citation` mirroring `batchMeta.sources` one-to-one with dates; plus an
  `ItemList` of 8 mirroring the H3s in order. No `FAQPage` block — the renderer builds it from `article.faqs`.
  All five `sameAs` pairs verified against the Wikipedia API on 2026-08-27: Hindi **Q1568**, Kinship
  terminology **Q2305447**, T–V distinction **Q1124935**, Baby talk **Q797886**, Devanagari **Q38592**. No
  `AggregateRating`, `Review` or `HowTo`.
- **FAQs:** 10, in `article.faqs` only. Verified absent from `contentMarkdown`.

---

## Phase 6 — audit summary

47 passed, 3 failed, disjoint, summing to 50, every string copied verbatim from `publish-checklist.md`.

1. **"The post contains at least one claim none of the top 5 pages make"** — *structural.* This is where the
   mandatory language blocker lands, and per `BRIEF-WAVE2.md` correction 3 it lands here truthfully: in a
   language post the differentiating claim *is* the script content, and every Devanagari string here (eight
   wish lines, the table's address-term and verb-form columns, the दूधो नहाओ warning, the Devanagari inside the
   FAQs) is machine-composed and unverified. **A citation cannot close it.** Native-reader sign-off is
   required, because no agent can verify Hindi idiom, gender agreement or honorific register.
2. **"Paragraphs 2–3 sentences throughout"** — one paragraph of twenty, the opening answer block at five
   sentences. Three other over-length paragraphs were split during the pass; this one cannot be, because
   `page-structure.md` Block 1 prescribes exactly that shape in one liftable paragraph. The two rules conflict
   and this one loses.
3. **"No source passes the swap test"** — **one** of four now sits in a sibling post (the RUDN kinship paper), as
   above. The Bhasha paper, the other demonstrated swap, was given up in the remediation pass below. Closing the
   last one needs a Hindi kinship/address source the sister post cannot also use, and none is reachable.

**Publish blocker:** failure 1. Do not publish until a fluent Hindi reader reviews all eight wish lines, the
तू/तुम/आप guidance and the FAQ Devanagari and signs off, at which point the character counts either stand or
are recomputed.

**Not written:** `batch.json` was left untouched. It currently lists the ten wave-1 posts and four other
wave-2 agents were drafting concurrently; a read-modify-write from here would risk clobbering a sibling's
entry. It needs a wave-2 pass from the batch owner.

---

## Phase 8 — audit remediation (source fix pass, 2026-08-27)

**Batch decision applied:** `birthday-wishes-for-teacher-in-hindi` keeps the Bhasha politeness paper, because
honorific register is its whole subject. This post gave it up, the same way wave 1 routed a typing-speed study to
the brevity post rather than the gratitude post.

**Removed.** Kumar & Dharurkar, *Revisiting Passivity and Politeness in Selected Indic Languages*, `edizionicafoscari.it`
— and with it the 70% / 65% politeness ranking, from the H2 3 prose, the `-इए` entry's register line, `keyTakeaways[2]`,
the "why do Hindi wishes sound like orders" FAQ, `batchMeta.sources`, the `## Sources` list and `structuredData.citation`.

**Could the claim be re-grounded in the three remaining sources?** No — none of them discusses Hindi verb mood or a
politeness ranking, so the figures were dropped rather than re-attributed. **Could a replacement carry the same claim?**
No, and this was searched properly: OpenAlex and Semantic Scholar returned HTTP 429 on every request (four retries each);
DOAJ, the only working channel, returns exactly two open-access Hindi honorific/address papers — the one being given up
and Bhatt's *Honorifics in Hindi* (`journals.phil.muni.cz`), which `birthday-wishes-in-hindi` already cites, so citing it
would fail the swap test by demonstration in exactly the same way. Crossref surfaced only paywalled matches
(*Conventionalized Politeness Structures: Hindi/Urdu*, J. Politeness Research 2017 — Unpaywall `is_oa: false`).
Two candidates were rejected on the tests rather than on availability: Bhatti et al. on politeness in Urdu
(`journals.ssau.ru`) would sit unchanged in the Urdu sibling's post, and Larina, Suryanarayan & Yuryeva on address forms
in British vs Indian *English* (`l.jvolsu.com`) is not an Indic language and would have been a third paper by the same
author pair. **So H2 3 now carries no citation, and the section says so in its own text.** That is a loss, and it is
named in `honestAssessment`.

**Added.** Hemangini, *Hypocoristic Formation in Gujarati*, **Catalan Journal of Linguistics** 24(1) 161–184,
published **27 February 2025** (PDF cover page: received 21 April 2024, accepted 13 November 2024), CC BY-NC,
DOI `10.5565/rev/catjl.463`, `https://revistes.uab.cat/catjl/article/view/463`. **Full PDF downloaded and read with
`pdftotext` — not the abstract.** It carries the diminutive-expiry claim in an Indo-Aryan language, which the post
previously rested on Papua New Guinean data alone: the *-u* form is "usually given by parents to their children", the
*-ɭ-* form means "contempt, disgust, rudeness or impoliteness" to an adult but "affection" when used for children, and
the pet name stops implying affection once it becomes the person's default name everywhere. Placed in H2 6, ahead of a
shortened treatment of the *Language Development Research* paper (which is kept, at four sources).

**In-batch re-measure immediately before citing** (snippet from `BRIEF-WAVE2.md`, 20 blogs):
`revistes.uab.cat` absent from every post — 0 of 3 before this edit, 1 of 3 after; URL 1 of 2. No URL in the batch
sits above 2 and no domain above 2 after the edit; `edizionicafoscari.it` drops to 1 post (the teacher post).

**Other edits made to keep the checklist whole**, none of them in the audit but all required by removing a source:
five paragraphs tightened (H2 3, H2 6 ×2, H2 7 ×2, the downside section) and the one-line "each entry gives the same
four fields" scaffold cut, to bring 1,864 back to 1,776 by `wordCount()`; `keyTakeaways[2]` and the orders FAQ rewritten
without the survey; the `-इए` register line rewritten; `failed[1]`'s prose-paragraph count corrected from twenty to
twenty-three. The language blocker in `failed[0]` was left exactly as written.

**Still open after this pass:** the language blocker (structural, native-reader sign-off, unchanged), the five-sentence
opening block (structural, `page-structure.md` Block 1 conflict), and the swap test (the RUDN kinship paper shared with
`birthday-wishes-for-younger-sister`).

