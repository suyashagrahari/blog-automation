# Research brief — `love letter for girlfriend in assamese`

- **Batch**: 2026-09-02-love-gf-3 (wave 3, love-gf cluster)
- **Slug**: `love-letter-for-girlfriend-in-assamese` — verified free against Strapi (`filters[slug][$eq]` returned `total: 0`)
- **Category**: `modern-romance` (confirmed present in the live 10-category list)
- **Templates**: `https://subhsandesh.in/love-gf`, `https://subhsandesh.in/darling` (both mandatory per BRIEF), plus `/templates` linked once in the body
- **Secondary keywords**: `romantic love letter for girlfriend in assamese` (13x), `short love letter for girlfriend in assamese` (12x) — folded into `article.keywords` and FAQs 8 and 12, no dedicated section
- **Demand**: 21x prefix hits (ordinal, not search volume)

---

## Phase 1 — SERP analysis

**Method limitation, recorded up front:** the session's WebSearch budget (200/200) was exhausted immediately after the first query for the head keyword, so this analysis rests on that single result set plus five pages fetched in full. The two secondary-keyword SERPs were **not** observed directly. `WebFetch` is blocked in this environment; pages were fetched and indexed in the sandbox instead.

Top-10 result set for the exact keyword (2026-09-02):

| # | URL | Type |
|---|---|---|
| 1 | pinterest.com/pin/87820261471906170 | Pin of the jitudas image |
| 2 | jitudas.com/2018/09/assamese-love-letter-for-girlfriend.html | Blogspot, letter as image |
| 3 | jitudas.com/2017/09/assamese-love-letter-poem-by-jitu-das.html | Blogspot, poem as image |
| 4 | fathersloveletter.com/assamese.html | Christian devotional tract |
| 5 | facebook.com/groups/… | Group post |
| 6 | staff.ces.funai.edu.ng/…/Assamese_Love_Letter_To_Girlfriend.pdf | Scraper/spam PDF on a Nigerian university host |
| 7 | en.wikipedia.org/wiki/Love_in_Tawang | Film — pure entity collision |
| 8 | jonakaxom.in/assamese-love-letter-love-letter-writing-format/ | Assamese content site, 3 real letters |
| 9 | ai.tenorshare.com/love-letter/assamese-love-letter.html | AI-generated sample farm (**competitor**) |

This confirms the BRIEF's estimate of 6–8 weak results out of 10. No AI Overview and no featured snippet were returned for the query.

### The five pages analysed in full

| Page | Words of body text | Headings | Where the answer is | Script | Romanisation | Pronoun named? | ৰ/ৱ mentioned? | Data cited | Date |
|---|---|---|---|---|---|---|---|---|---|
| jitudas 2018 | **~0 — letter is a JPEG** | H3 title only | Inside an image | In image | None | No | No | None | 2018-09-13 |
| jitudas 2017 poem | **~0 — poem is a JPEG** | H3 title only | Inside an image | In image | None | No | No | None | 2017-09-16 |
| jonakaxom.in | ~1,400, all Assamese | 3 H2s, one per letter | Letter 1 opens the page | Yes, correct ৰ/ৱ | **None** | No | No | None | Undated |
| ai.tenorshare.com (competitor) | ~1,800 | 11 H2s by occasion | After a generic intro | Yes | **None** | No | No | None | 2024-08-01 |
| fathersloveletter.com | ~90 + a PDF | 2 H2s | Not a love letter at all | In a PDF | None | No | No | None | Undated |

**Tone**: jonakaxom is genuinely warm, first-person, human-written Assamese. Tenorshare is flat and interchangeable — its own product is an "AI Bypasser" that humanises AI text, which tells you how the samples were made. jitudas is a personal poetry blog.

**What each is optimising for**: volume of sample letters (tenorshare), personal portfolio (jitudas), Assamese-reading audience with no translation layer (jonakaxom).

---

## Phase 2 — Gap analysis

**Table stakes** — present on every page that has text at all: Assamese-script letter content; an emotional, ornamental register; occasion framing (proposal, apology, anniversary, distance).

**The gap.** Not one of the five:
1. Gives a **romanisation** alongside the script. A reader who speaks Assamese but types in Latin — extremely common — cannot use any of them.
2. Names **which second-person pronoun** it used, or why. All silently pick তুমি; none says so or mentions that তই and আপুনি exist.
3. Mentions **ৰ or ৱ** — the characters that distinguish Assamese from Bangla, and the single most common error a non-speaker makes.
4. Warns that **machine translation into Assamese pivots through Bangla**.
5. Says anything about **how long writing one takes** or **where it gets read**.
6. Has **extractable text at all**, in two of five cases — the letter is a JPEG, so it is invisible to search engines, uncopyable, and unreadable by a screen reader.

**Stale data**: nothing on any page cites anything. The two jitudas pages are 8 and 9 years old. There is no statistic to supersede — the whole SERP is source-free, which is itself the opportunity.

**Fan-out sub-queries → became H2s or FAQs:**
- what do you write in an Assamese love letter → answer paragraph + FAQ 1
- what makes Assamese different from Bengali → H2 2, FAQ 9
- তুমি vs তই vs আপুনি → H2 3, FAQ 2
- ৰ vs র → H2 4, FAQ 3
- how do you say "I love you" in Assamese → H3 1, FAQ 4
- what does মৰম mean → H3 3, FAQ 5
- script or roman letters → H2 6, FAQ 7
- can I use Google Translate → H2 7, FAQ 6
- how short can it be → FAQ 8
- how do I check it → FAQ 11

**Angle** (recorded as `batchMeta.angle`): wins by being the only post that resolves the two decisions an Assamese love letter actually turns on — the second-person pronoun, with a sourced verb-agreement table showing the switch re-conjugates every verb, and the two Assamese-only letters named with their Unicode codepoints — grounded in the 987-page `/love-gf` record and the 7.2-hour median edit window.

---

## Phase 3 — Sources

Six sources, all fetched and verified. **Zero overlap** with the 96 URLs in `USED-SOURCES.md`, and zero domain overlap with the three sibling posts present at write time (`malayalam`, `nepali`, `never-have-i-ever`).

| # | Source | Domain | Subject test | Peer-reviewed | Open access | Verified claim |
|---|---|---|---|---|---|---|
| 1 | The Unicode Standard v16.0, ch. 12 | unicode.org | ✅ Assamese script | No (standards body) | Yes | "Assamese employs two letters not used for the Bangla language" — ra = U+09F0 ৰ, wa = U+09F1 ৱ |
| 2 | Boruah, "Pro-drop and subject pronouns in Assamese", IJLLT 3(7) 2020 | al-kindipublisher.com | ✅ Assamese pronouns | Yes | **CC BY** | Verb `kha` table: Tumi → kha-l-a/kha-b-a, Toi → kha-l-i/kha-b-i; pro-drop "not acceptable in written language" |
| 3 | Mahanta, "Assamese", JIPA 42/2, 2012 | cambridge.org | ✅ Assamese phonology | Yes | Free PDF, not CC | /x/ a full phoneme; "The only rhotic /ɹ/"; affricates "not present as distinctive sound units" |
| 4 | Biswas, "Language, Identity and Conflict", Space and Culture India 12(3) 2024 | spaceandculture.in | ✅ Assam language conflict | Yes | **CC BY** | 150 family interviews; Language Movement 1960, Medium of Instruction 1972, Assam Movement 1979–85 |
| 5 | Nath & Gulzar, "Zero-shot English–Assamese NMT", Sci Rep 16:13732, 2026 | nature.com | ✅ low-resource Assamese MT | Yes | Yes | BLEU 28.65, reported as 7.53 above direct baselines, via an Assamese–Bengali pivot |
| 6 | English Wiktionary, Assamese entries | en.wiktionary.org | ✅ Assamese lexicon | No | Yes | Source of every Assamese line in the post |

**Generic context statistics: zero.** **Swap test: all six fail it** (none could move to the Malayalam, Nepali or couple-games posts unchanged).

### Search terms tried, and what came back empty

Run against DOAJ's article API and OpenAlex with `is_oa:true`:

`Assamese language` · `Assamese script orthography` · `Assamese sociolinguistics` · `Assamese pronoun honorific` · `Assamese orthography script` · `Assamese honorific second person pronoun` · `Assamese Bengali script distinction ra wa` · `Assamese language identity Assam` · `romanization Indic script transliteration users`

DOAJ returned **0 results** for three of its four queries. **No source exists for the actual phenomenon** — Assamese-language romantic letter-writing, or pronoun choice between Assamese romantic partners. That is a real finding, recorded in the audit: the angle is about language mechanics rather than a studied behaviour, so the post leans on Assamese linguistics plus first-party data instead of padding with a government statistic.

### Entity verification

All `sameAs` pairs confirmed against the Wikipedia API with Wikidata QIDs: Assamese language Q29401, Assamese alphabet Q191272, Love letter Q1056617, Unicode Q8819, Assam Q1164. Zero Wikipedia links in the body.

---

## Language decisions

**Register: তুমি.** Wiktionary labels তুমি "familiar", তই "very familiar, inferior", আপুনি "formal". আপুনি to a girlfriend reads as distance or parody; তই carries a downward tilt whose reception varies by family and region. The choice is stated in the body along with the admission that it is reasoned from dictionary labels, not from native intuition — no source measuring actual couple usage was found.

**A self-audit caught a real error.** An earlier draft claimed ৰ and ৱ displace "the Bangla র and ব". That is wrong: ৰ fully replaces র (Assamese uses no র), but ৱ is an *addition* for /w/ — Assamese keeps ব for /b/, as in পাব and বেয়া. The Unicode code chart supports the narrower reading, annotating U+09F1 as "= bengali letter va with lower diagonal". Corrected in the body and flagged in `honestAssessment` item 10.

**Mechanical script check.** A script walked every Bengali-block run in the finished JSON and asserted that each occurrence of র or ব is deliberate. The only র instances are the two counter-examples (মরম, তোমার) and the named letter itself; the only ব instances are legitimate Assamese /b/ (পাব, বেয়া, পাবগৈ) plus the deliberate discussion of জীবন/জিবন in the audit notes.

**Eight-plus lines flagged for native review** — see `batchMeta.auditReport.honestAssessment`, items 1–10, which name each uncertain line and the specific reason.

---

## Audit outcome

**48 passed, 2 failed**, disjoint, all 50 strings byte-verbatim from `publish-checklist.md`.

The two failures are both structural and both escalated rather than patched:
1. *metaTitle exact keyword in the first five words* — the keyword is itself six words long, so the item is unsatisfiable; placement is already at word 1.
2. *Slug no stop words* — the brief assigned `love-letter-for-girlfriend-in-assamese` as the exact-match target and verified it free; only the orchestrator can retarget it.

**Recorded gap:** the Pricing block in `facts.md` is empty, so the post says nothing about cost anywhere. A reader on this query plausibly wants to know whether making the page costs anything, and that is unanswerable from current data.

**What the post cannot overcome:** subhsandesh.in has no Assamese content at all today, so this page starts with no topical cluster and no internal authority in the language. Two competing results are 8–9-year-old blogspot pages with accumulated links. No ranking prediction is made.
