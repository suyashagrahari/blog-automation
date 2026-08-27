# Research brief — `birthday-wishes-in-urdu`

- **Keyword:** birthday wishes in urdu
- **Batch:** `2026-08-26-birthday`, wave 2, rank 21
- **Lane:** C — multilingual communication. Sub-angle: Urdu poetic convention and Nastaliq rendering.
- **Band / expected clicks:** 1000–3000 / 132
- **Category:** `milestone-birthdays` (verified live against Strapi, 2026-08-27)
- **Slug check:** `filters[slug][$eq]=birthday-wishes-in-urdu` returned `total: 0` on 2026-08-27 — free.
- **Flagged as the highest-risk post in the wave.** See §6.

---

## 1. Phase 0 — data gate

Satisfied by `BRIEF.md`'s read-only probe of `birthdaygfpages` (n = 198, measured 2026-08-26),
plus `content/facts.md`. Eight first-party facts are used; five sit inside the first 150 words.

**Critical absence, recorded rather than papered over:** the probe carries **no language field**.
There is therefore no Urdu-specific first-party number, and none is invented. The post says this
in the body ("Our data has no language field, so we cannot tell you how many of those 198 birthday
pages were written in Urdu — that figure does not exist, and any page quoting an Urdu-specific one
invented it") and the caveat is repeated in `honestAssessment`.

Facts used:

| Fact | Where |
|---|---|
| Median personal message 96 characters (n=197); 106 of 197 under 100 | Answer paragraph, table, FAQ 8 |
| 198 birthday pages created, 6.5% of 3,024, #5 page type | Answer paragraph |
| Birthday views 1,081 mobile / 1,121 desktop / 22 tablet of 2,224 — 48.6% mobile | Answer paragraph, Nastaliq section, FAQ 12 |
| 51.0% mobile site-wide | FAQ 12 (contrast) |
| Median first-save→last-edit 0.9 h; 50.5% (100 of 198) inside the hour | "Sending it" section |
| 6.9 h median edit gap on /love-gf (n=936) | "Sending it" section (contrast) |
| Quiz added on 195 pages, played on 28 — 14.4%; 4 pages (2.0%) never opened | Objection section, FAQ 11 |
| Surprise audio on 53 of 198 (26.8%); cover photo + music on 198 of 198 (100%) | "Sending it" section, FAQ 11 |

---

## 2. Phase 1 — SERP

Supplied live and India-localised (`gl=in`, real browser, 2026-08-26/27) in
`ASSIGNMENTS-WAVE2.json`. **WebSearch not called** — session budget exhausted at 200/200.
Competitor pages were **not fetched in full**: `WebFetch` is blocked, and every ranking result is
either a competitor (so off-limits to cite or paraphrase) or a Pinterest/Quora surface with no
prose to analyse. Recorded as a process limitation in `honestAssessment`, not as an audit failure.

| # | Result | What it is | Optimising for |
|---|---|---|---|
| 1 | pinterest.com — Birthday Wishes in Urdu | Image board | Visual saves; no text answer |
| 2 | preply.com — How to say happy birthday in Urdu, pronunciation tips | Language-tutor marketplace | Language-learning intent (wrong intent) |
| 3 | poetryshaam.com — Top 10 Heart Touching Birthday Wishes in Urdu Text: 2026 | Wishes content farm | Year-stamped listicle |
| 4 | rekhta.org — Latest Birthday Sher collections | Poetry archive | Attributed sher corpus, not a wishes resource |
| 5 | pinterest.com — 490 Birthday ideas | Image board | Visual saves |
| 6 | talkpal.ai — Creative Birthday Wishes in Urdu | AI language-learning site | Language-learning intent (wrong intent) |
| 7 | quora.com — What are some birthday wishes written in Urdu…| UGC Q&A | Long-tail question capture |
| 8 | quoteslove.poetry.blog — Birthday Poetry Wishes in Urdu Text with Images | Wishes/shayari blog | Image + text listicle |
| 9 | pinterest.com — Birthday Wishes for Bf in Urdu | Image board | Visual saves |

**Why the query is winnable on text:** three of nine results are Pinterest boards, one is Quora,
and two are language-learning sites answering "how do I pronounce it" rather than "what do I
send". `rekhta.org` is the only genuine authority and it is a *sher* archive — excellent at
attributed poetry, not built to answer a sending question. Nobody on the page is doing the
practical job.

**Every domain above is a competitor and none is cited, linked or paraphrased.**

---

## 3. Phase 2 — gap analysis

**Table stakes (present across the ranking set, so the post must carry them):** the phrase
"salgirah mubarak"; wishes grouped by relationship; a Roman transliteration alongside the script;
short, sendable lines.

**The gap — three things nobody on the page does:**

1. **What the words actually mean.** Every page translates *from* English sentiment *into* Urdu.
   None goes the other way and asks what the Urdu word encodes. `salgirah` is glossed by Platts as
   literally "year-knot, or age-knot" — a birthday marked by tying a knot in a string kept as a
   record of one's age. `mubarak-bad` is a benediction ("may he be blessed"), not a greeting. An
   Urdu birthday line is structurally a blessing, which is precisely the register the translated
   lists lose.
2. **Nastaliq is a different rendering problem from Naskh.** No page mentions it. This is not the
   familiar "missing font → empty boxes" failure; Urdu set in a Naskh or typewriter-style fallback
   is fully legible and *wrong-looking*, which is far easier to ship without noticing. Tied to the
   measured 48.6%-mobile / 1,121-of-2,224-desktop split, it becomes a concrete instruction: test on
   a laptop too.
3. **Length.** The ranking pages promise "Top 10", "490 ideas", "200+". The measured median personal
   message is 96 characters and 106 of 197 are under 100. All five lines in this post fit with at
   least 49 characters spare.

**Stale data:** none of the ranking pages cites dated data at all, so there is nothing to supersede.
The one year-stamp on the SERP (`poetryshaam.com`, "2026") is a title tactic, not a dataset.

**Unanswered questions the ranking set raises and drops:** why Urdu renders oddly on phones; whether
to send script or Roman; which pronoun (*aap* / *tum*) a given recipient takes; whether the "shayari"
being handed out is real verse.

**Fan-out sub-queries → H2/H3/FAQ mapping:**

| Sub-query | Where it is answered |
|---|---|
| what does salgirah mubarak mean | H2 "What does 'Salgirah Mubarak' actually mean?"; FAQ 1, 2 |
| salgirah mubarak vs salgirah mubarak ho vs mubarak baad | FAQ 3; table row 1; H3 4 |
| why does urdu look wrong / broken on my phone | H2 "Nastaliq is not Naskh…"; FAQ 4 |
| nastaliq vs naskh difference | H2 "Nastaliq is not Naskh…"; FAQ 5 |
| best urdu / nastaliq font | H2 "Nastaliq is not Naskh…"; FAQ 6 |
| urdu script or roman urdu | H2 "When an Urdu wish in script is the wrong choice"; FAQ 7 |
| how long should the wish be | H2 "How the four lines measure…"; FAQ 8 |
| aap vs tum in a wish | H3 1 and H3 2; FAQ 9 |
| birthday shayari in urdu | H2 "Why this page prints no machine-written shers"; FAQ 10 |
| birthday wishes for friend / elder / partner / colleague in urdu | H3 1–4 |
| phone or laptop | FAQ 12 |

**Angle (recorded as `batchMeta.angle`):** wins by being the only post that treats an Urdu birthday
wish as a *blessing rendered in Nastaliq* rather than a translated English sentiment — grounded in
Platts's "year-knot" gloss, the W3C's record that Naskh not Nastaliq is the typographic default, and
the measured 96-character median across 198 birthday pages.

---

## 4. Phase 3 — sources

Searched the **phenomenon**, not the keyword: `Nastaliq typography rendering study`,
`Nastaliq Naskh legibility Urdu`, `Urdu ghazal sher prosody convention`, `Perso-Arabic script
digital text`, `Roman Urdu transliteration`, `Urdu font comparison`, `salgirah etymology`.
Tools: DOAJ article API, OpenAIRE publications API, targeted fetches. OpenAlex and Semantic
Scholar were both rate-limited to failure (HTTP 429) — several concurrent agents were hitting them.
IEEE Xplore, ScienceDirect, MDPI, SpringerOpen, Brill and `eprints.soton.ac.uk` all refused
programmatic access (403 / 401 / bot wall), which ruled out most of the Nastaliq-OCR literature.
`urdustudies.com`, the former home of *The Annual of Urdu Studies*, is now a parked domain.

**Six sources, all fetched and read, all Urdu- or Arabic-script-specific.**

| # | Source | Type | Date | Fact taken | In-batch domain count |
|---|---|---|---|---|---|
| 1 | [W3C, *Arabic & Persian Layout Requirements*](https://www.w3.org/TR/alreq/) | W3C Group Draft Note | 2025-10-02 | Naskh "has become the default form of Arabic in most contexts, notably as a model for typography"; "in Iran and Pakistan Nasta'liq remains the preferred style for Persian and Urdu respectively"; the simplified "typewriter" approach reusing one glyph for initial and medial positions "is generally the browser default font for the Arabic script" | 1 of 3 |
| 2 | [SIL Global, Awami Nastaliq — Design](https://software.sil.org/awami/design/) | Font-vendor technical doc | none stated | Nastaliq is "one of the most complex forms of writing in the world"; standard font technologies "are not quite up to the challenge"; the sloping baseline causes glyph collisions producing "ugly and even unreadable text" | 1 of 3 |
| 3 | [SIL Global, What is Special About Awami Nastaliq?](https://software.sil.org/awami/what-is-special/) | Font-vendor technical doc | none stated | Missing characters: "the software may substitute a glyph from another Arabic font"; "in other cases, an isolate form is used with no contextual shaping". Also ~25 further languages of Pakistan, 120M+ speakers | (same domain) |
| 4 | [Zahoor Ahmad & Raees Ahmed Mughal, *A Technical Comparison of Selected Urdu Fonts*, DARYAFT 16(02)](https://daryaft.numl.edu.pk/index.php/daryaft/article/view/404) | Peer-reviewed, open access | 2024-12-31 | Five Nastaliq computer fonts (Pak Nastaliq, JameelNooriNastaliq, Faiz Lahori, Alqalam Taj Nastaliq, MehrNastaliq Web) judged against technical standards of traditional Nastaliq calligraphy; Mehr Nastaliq Web rated best, with kasheeda and compound characters giving "natural look and feel of calligraphy" | 1 of 3 |
| 5 | [John T. Platts, *A Dictionary of Urdu, Classical Hindi, and English*, p. 626](https://dsal.uchicago.edu/cgi-bin/app/platts_query.py?qs=sal-girah&searchhws=yes&matchtype=default) | Scholarly reference edition, Digital Dictionaries of South Asia, University of Chicago | none on page | `sal-girah`: lit. "Year-knot, or age-knot"; birthday, "when a knot is tied in a string or thread kept as a record of one's age; syn. baras-ganth". `mubarak`: "blessed; happy, fortunate, auspicious"; `mubarak-bad`: "may he (or it) be blessed" | 1 of 3 |
| 6 | [F. W. Pritchett & Kh. A. Khaliq, *Urdu Meter: A Practical Handbook*](http://www.columbia.edu/itc/mealac/pritchett/00ghalib/meterbk/00_intro.html) | Scholarly handbook, Columbia University | 1987 print; online intro July 2003 | Scansion is taught without assuming a native ear, on one condition: "The student who cannot recognize and pronounce most of the words of a poem, and cannot generally understand their grammar, cannot properly scan that poem. No method can enable him to do so." | 1 of 3 |

**Full text vs abstract.** Sources 1, 2, 3, 5 and 6 were read in full (source 6: the introduction in
full; the chapter pages return 403/404). **Source 4 is the one exception** — its English abstract
was read; the article body is in Urdu, which no agent here can verify. Recorded on the page itself
("English abstract read; the full text is in Urdu") and in `batchMeta.sources`.

**Subject test:** all six are specifically about the Urdu language, the Arabic script, Nastaliq
rendering, or Urdu prosody. **Swap test:** none could sit unchanged in a sibling post — a Nastaliq
layout note is useless in a Devanagari, Gurmukhi, Tamil, Telugu or Gujarati post, and Platts is an
Urdu/classical-Hindi lexicon. **Generic context statistics: zero** (no PIB / TRAI / Census / MEA).
**Wikipedia body links: zero** (four verified `sameAs` pairs sit in `structuredData` only, which does
not count against the body budget).

**Cap check, re-measured after writing:** all five of my domains sit at **1 of 3** in this batch, and
no URL is shared with any sibling. `r12a.github.io` (2 of 3, one slot) was deliberately **left for
the Punjabi sibling** — SIL's Nastaliq documentation and the W3C's `alreq` note are closer to this
post's subject anyway. `pmc.ncbi.nlm.nih.gov`, `pure.uva.nl`, `ccsenet.org`,
`journals.openedition.org` and `europepmc.org` were all avoided.

**`sameAs` entities, verified against the Wikipedia API with Wikidata QIDs paired:**
Urdu (Q1617), Nastaliq (Q1133121), Ghazal (Q281111), Arabic script (Q1828555).

---

## 5. Phases 4–5 — build notes

- 1,772 words by `wordCount()` (the BRIEF-WAVE2 snippet), FAQs excluded and not present in the body.
- 8 H2s, 4 H3s, one H1. No paragraph runs past three sentences.
- One comparison table, 5 rows, real values — Urdu character counts against the first-party
  96-character median (the first-party column).
- 12 FAQs in `article.faqs` only.
- 6 unique outbound links, each placed inline on the sentence it supports and repeated in the
  Sources H2 with dates. 3 internal links, all from `TEMPLATE_LINKS`, all after the value is
  established: `/birthday-friend` (informal *tum*), `/birthday-parents` (respectful *aap*),
  `/templates`.
- `structuredData`: an `@id`-matched `BlogPosting` enrichment block on `…#post` carrying `about`,
  `mentions` and a `citation` array mirroring `batchMeta.sources` one-to-one, plus an `ItemList`
  mirroring the four H3s in order. No renderer-built type is duplicated.
- Objection block: "When an Urdu wish in script is the wrong choice" — recommends Roman Urdu over
  SubhSandesh's own script rendering when the font cannot be controlled, and carries the two
  inconvenient numbers (14.4% quiz play, 2.0% never opened).

---

## 6. The language blocker — the reason this post is the highest risk in the wave

The 2026-08-25 rakhi batch shipped `bhai-behan-shayari-raksha-bandhan`, whose audit records seven
**original** *do-tarfa* shers with agent-written qaafiya/radif labels and Nastaliq lines, and whose
blocker is not closable by any agent. That failure mode is avoided here by construction:

- **No verse of any kind is presented.** No sher, no couplet, no metrical label, and no verse quoted
  from a poet either. The post states this explicitly and gives the reason, citing Pritchett &
  Khaliq: scansion requires reading the words, so a generator cannot know whether a composed line
  scans, and a *sher* that does not scan is prose with a line break.
- **Composed Urdu is held to the minimum that still answers the query.** Four prose lines and three
  set phrases, each with a Roman transliteration and an English sense — against the "200+" and
  "490 ideas" the SERP offers.
- The **lexical** claims (`sal-girah`, `mubarak`, `mubarak-bad`, `baras-ganth`) are quoted verbatim
  from Platts and are therefore attested rather than composed.

**Count of Urdu strings that need a native reader: 14.**

| # | Urdu script | Roman transliteration | Composed or attested |
|---|---|---|---|
| 1 | سالگرہ مبارک ہو۔ آپ کی عمر دراز ہو۔ | Salgirah mubarak ho. Aap ki umar daraz ho. | composed |
| 2 | سالگرہ مبارک، یار۔ آج کا دن تمہارا ہے۔ | Salgirah mubarak, yaar. Aaj ka din tumhara hai. | composed |
| 3 | سالگرہ مبارک۔ تم سے مل کر میری زندگی بہتر ہوئی۔ | Salgirah mubarak. Tum se mil kar meri zindagi behtar hui. | composed |
| 4 | آپ کو سالگرہ مبارک باد۔ نیک خواہشات۔ | Aap ko salgirah mubarak baad. Naik khwahishat. | composed |
| 5 | سالگرہ مبارک | Salgirah mubarak | phrase; lexemes attested in Platts, joined form composed |
| 6 | سالگرہ مبارک ہو | Salgirah mubarak ho | phrase; as above |
| 7 | مبارک باد | Mubarak baad | phrase; `mubarak-bad` attested in Platts |

Seven Urdu-script strings plus their seven Roman transliterations = **14 strings**. What a reader has
to check, per string: idiom, register (*aap* vs *tum* is asserted on lines 1, 2 and 4), orthography
in Nastaliq, and the transliteration. If any line is rejected, replace it and re-run this count.

**Audit mapping, per BRIEF-WAVE2 correction 3.** Recorded in `auditReport.failed` against exactly
one verbatim checklist item — *"The post contains at least one claim none of the top 5 pages make"* —
as **structural**. The mapping is substantive rather than arbitrary: on a language page the
differentiating claim *is* the script content, and while the etymology and the rendering facts are
each independently sourced, the claim that these specific lines are idiomatic and correctly
registered is not established until a reader signs off. **Closing condition: native-reader sign-off
on all 14 strings. No citation can close it** — no source can attest that an agent-composed Urdu
sentence reads naturally.

The remaining 49 checklist items are recorded in `passed`; `passed ∩ failed = ∅` and
`|passed| + |failed| = 50`, both asserted programmatically, and the single `failed` entry's `why`
describes its own item.

---

## 7. Process limitations (in `honestAssessment`, not in `failed`)

- Top-5 competitor pages were not fetched in full: `WebFetch` is blocked and every ranking result is
  a competitor or an image board.
- No Search Console data, so it is not knowable whether the 181 live birthday posts are in
  striking distance or simply unindexed.
- OpenAlex, Semantic Scholar, IEEE, ScienceDirect, MDPI, SpringerOpen and Brill were all
  inaccessible, so the Nastaliq-OCR literature is represented only indirectly, via DARYAFT.
- No first-party figure here is Urdu-specific, because the probe has no language field.
