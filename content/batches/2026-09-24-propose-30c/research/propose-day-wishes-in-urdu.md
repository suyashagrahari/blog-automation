# Research brief — propose-day-wishes-in-urdu

**Keyword:** propose day wishes in urdu · **Secondary:** propose message in urdu (same page)
**Slug:** propose-day-wishes-in-urdu · **Category:** modern-romance · **Batch:** 2026-09-24-propose-30c
**Date verified with `date`:** today is Thu 24 Sep 2026 IST. Propose Day 2027 = **Monday 8 February**; Rose Day Sun 7 Feb; Valentine's Day Sun 14 Feb (computed, not asserted).

---

## Phase 1 — SERP analysis: NOT RUN, and that is recorded as a failure

No WebSearch call was spent (budget was 4; 0 used) and no competing page was fetched. Per the BRIEF's "Do not claim what you did not measure", the post therefore makes **no claim about what competitors cover**, and two checklist items that depend on a measured SERP are recorded in `auditReport.failed`:

- "The post contains at least one claim none of the top 5 pages make"
- "H2s map to the fan-out sub-queries identified in Phase 2"

The eleven India-served SERPs measured on 2026-09-16 do not include this keyword.

## Phase 2 — angle, and how this differs from the sibling

**Cannibalisation check.** `propose-girlfriend-shayari` (batch 2026-09-17-propose-30) was read in full before a line was written. It owns the **ghazal form** — sher, matla, qafiya, radif, bahr — and an Urdu-poetics source set (indjst.org, archive.org ghazal MA report, urdustudies.in, ijhss, gwern McGlone). None of those five URLs is reused here.

| | `propose-girlfriend-shayari` | this post |
|---|---|---|
| Artefact | the couplet as a poetic form | everyday spoken wishes and messages |
| Script | lines given in Devanagari, prose about Urdu poetics | lines in Urdu script, RTL handling is a section |
| Register lane | तू / तुम / आप in Devanagari | تو / تم / آپ, verified in Platts + UD tags |
| Verification | poetic-form sources | Platts headwords + UD_Urdu-UDTB token counts |
| Research lane | ghazal poetics | Hindi and Urdu as one language, two scripts |

**Angle:** the only page on this query that names its verification instruments, publishes the token counts, and publishes the ledger of what it cut.

## Phase 3 — sources (4 research + 3 exempt instruments), all fetched

1. **Bhatt 2018**, *Electronic Journal of Foreign Language Teaching* (NUS) — peer-reviewed, open access, full text read. Different scripts ≠ two languages (Serbian, Konkani); short vowels rarely written, so اس serves both *is* and *us* and a word can be read 2–4 ways; high register diverges Sanskrit vs Persian-Arabic while pronouns/postpositions/verbs stay near-identical; most Hindi-Urdu programmes teach Devanagari first, Nastaliq around week 6–7.
2. **Trivedi 2017**, *Revista Brasileira de Literatura Comparada*, CC BY 4.0 — full text read. Premchand founded the modern novel in both languages, publishing in Urdu from 1903; his deliberately Persianised speech made one prospective listener "quake before such heavy literary artillery".
3. **Hook 2026**, *Bhasha* (Edizioni Ca' Foscari), open access + peer reviewed, CC BY — abstract/record read. Treats "Hindi-Urdu" as one grammatical system.
4. **Corporum 2021** (Air University) — **abstract only**; the full-text PDF link returned an HTML wrapper. Conjunct predicate = noun + light verb as one syntactic constituent, extracted from the UD Urdu corpus; Urdu "severely under-resourced".
**UAX #9**, Unicode 18.0.0 rev 52, 2026-09-01 — standards document, **exempt instrument, NOT a sources slot**. Logical order stored, display affected; implicit ordering sometimes "not sufficient to produce comprehensible text". Linked and quoted in the body, but kept out of `batchMeta.sources` and `citation` because the final `capcheck.mjs` run showed **unicode.org already at the 3-post domain cap** (propose-day-quotes-in-punjabi, propose-day-quotes-in-gujarati, and this post). The BRIEF's preferred handling for an exempt instrument at cap is exactly this: credit in prose, not a source slot.

Checked against `capcheck.mjs` when choosing and again before saving: none banned, no domain at cap. PMC / Europe PMC avoided (already at 3 posts); frontiersin and PLOS avoided.

**Instruments, deliberately kept out of `sources` per the BRIEF exemption:** Platts' *Dictionary of Urdu, Classical Hindi, and English* (DSAL, University of Chicago) and **UD_Urdu-UDTB** (train+dev+test: 5,130 sentences, 138,077 tokens), read from the Universal Dependencies GitHub raw files.

## Verification ledger — 17 drafted, 10 published, 7 cut

Every content word went to Platts for a headword and an attested sense; every inflected form went to UD_Urdu-UDTB for a token count and a UPOS/feature tag.

### Published (10)

| # | Roman | Platts check | UD check |
|---|---|---|---|
| 1 | tum se muḥabbat hai, aur āj kahne kī himmat huī | maḥabbat "love, affection"; himmat "resolution… courage"; kahnā "to say" | tum 11, محبت 4, ہمت 3, کہنے 4, آج 215 |
| 2 | kyā tum mere sāth raho gī? | rahnā "to remain, abide… continue"; sāth "company… together" | رہو 2 (Mood=Imp, Polite=Infm), ساتھ 239, گی 63 / گے 99 |
| 3 | yih dil kī bāt hai | dil "heart"; **bāt "word, saying… matter… proposal, aim"** | دل 13, بات 205 |
| 4 | tumhārī marzī sab se pahle hai | marzī "assent, consent; choice; will" | مرضی 6, تمہاری 3, پہلے 97 |
| 5 | javāb ke liye waqt lo | javāb "answer… also refusal of an offer of marriage"; waqt "time" | لو 2 (VERB, Mood=Imp, Polite=Infm), وقت 157, جواب 34 |
| 6 | javāb kuchh bhī ho, mujhe manzūr hai | manzūr "approved of, admitted, accepted" | منظور 29, مجھے 13, ہو 617 |
| 7 | khudā kare tum hamesha khush raho | khush "cheerful, glad, happy… content, willing" | خوش 7 (ADJ), ہمیشہ 25, کرے 63, رہو 2 |
| 8 | āp se ek bāt karnī hai, agar ijāzat ho | ijāzat "permission, liberty, leave… sanction" | آپ 71, اجازت 34, کرنی 17, اگر 118 |
| 9 | mujhe āp kā sāth hamesha ke liye chāhiye | sāth "company, society… together"; chāhnā "to wish, desire… love" | چاہیے 71, ساتھ 239, ہمیشہ 25 |
| 10 | āj kā din mubārak ho | mubārak "blessed; happy, fortunate, auspicious" | مبارک 20 tokens but 15 PROPN — flagged in body |

### Cut (7)

| Roman | Reason | Instrument that caught it |
|---|---|---|
| kyā tum merī bano gī? | بنو occurs **once**, tagged **PROPN** (a personal name); no verb token | UD_Urdu-UDTB |
| kyā tum merā sāth do gī? | دو = 142 tokens, **139 NUM "two"**, **zero VERB**; reads as a number | UD_Urdu-UDTB |
| hāṅ yā nah, donoṅ qabūl haiṅ | ہاں = 3 tokens, **all ADP**, never the interjection "yes" | UD_Urdu-UDTB |
| chalo, sāth chalte haiṅ | چلو occurs once, tagged **INTJ**, not a verb | UD_Urdu-UDTB |
| tumhāre baghair din pūrā nahīṅ hotā | بغیر has 39 UD tokens but **Platts returned no headword** under baghair / bagair / ghair | Platts (failed) |
| yih bāt bahut pahle kahnī thī | کہنی = 1 token, tagged **NOUN**; kahnī also means "elbow" | UD_Urdu-UDTB + sense ambiguity |
| har din tumhāre nām hai | **Passed both instruments.** Cut on editorial grounds: reads as an English greeting-card line in Urdu | judgement, stated in body |

Also cut as a group: every drafted line built on **tamannā, ārzū, pyār, ulfat, bharosā** — all five are Platts headwords, all five return **zero tokens** in 138,077. Recorded as a limit of the newswire corpus, not proof the words are wrong.

**No copyrighted poetry.** Faiz, Firaq, Jaun Elia and every other modern Urdu poet are absent. All ten published lines are original compositions assembled from dictionary-attested lexemes and corpus-attested forms.

## Register — the section that carries the page

- Platts on **تو tū**: "Thou (used to imply depreciation or contempt; or by way of familiarity, or endearment; or, in addressing the Deity, to imply extreme reverence)." Contempt and endearment in one headword → not used anywhere on the page.
- UD counts: تو = 262 tokens but only **24 PRON** (197 SCONJ, 39 PART). A frequency list hands you a conjunction.
- **تم tum** = 11 PRON tokens, Platts "2nd pers. pl.". The default grade used here.
- **آپ āp** = 69 PRON tokens, **26 explicitly Polite=Form**; Platts labels it "pron. rever.".
- Imperatives in the whole treebank: **20 tokens**, all tum-grade -o forms (رکھو، کرو، رہو، سناؤ، جاؤ، دیکھو، لو، چاہو، آؤ). Zero tū-grade imperatives — which is why lines 2, 5 and 7 use -o endings.

## RTL handling

Rule applied: **an Urdu string never shares a line with a Latin character, asterisk, bracket or quote.** Urdu punctuation only (، ۔ ؟). The pronoun table uses Roman transliterations; the three written forms sit on three separate lines above it in table order. Cut lines are printed in Roman only, so a rejected line cannot be copy-pasted. A programmatic scan of `contentMarkdown` confirms zero Urdu+Latin mixed lines.

## Templates

- `/proposal` — mandatory, linked after the ten lines, framed for the marriage ask.
- `/love-gf` — the genuine alternative: in Indian usage "propose" usually means asking someone to be your girlfriend. Linked with the platform-wide numbers (1,178 created, 22.9%; 16,998 views).
- `/dedication` — the honest third option for a reader who speaks Urdu but cannot read the script: a voice recording carries the short vowels that Urdu writing omits.
- Stated plainly in the body: all three are **English-language and left-to-right**, and nothing on them sets Urdu in Nastaʿlīq.

## Counts

Body **1,792 words** excluding FAQs · **11 FAQs** in `article.faqs` + FAQPage built by the renderer · 7 H2s, 10 H3s · 6 outbound links (4 research sources + Platts + UAX #9) · 3 internal links · audit 46 passed / 4 failed / 50 total.
