# Research brief — `how-to-say-i-miss-you-in-arabic-to-a-woman`

Keyword: **how to say i miss you in arabic to a woman**
Batch: `2026-09-25-miss-you-30` (wave 2, row 18)
Written: 2026-09-25. Zero WebSearch calls spent — SERP URLs came from `SERPS-WAVE2.md`,
papers from `findpapers.mjs` (Crossref + Europe PMC), everything else fetched directly.

---

## 0. Two framing claims in my task prompt that did not survive checking

**(a) The prompt's proposed spine is already owned by the wave-1 sibling.** My prompt
said the post's spine should be "اشتقت إليكِ vs إليكَ, the distinction is the final short
vowel, usually unwritten — that is the practical trap and the post's spine." That is
precisely the sibling's thesis. `blogs/i-miss-you-in-arabic.json` is titled *"I Miss You
in Arabic, and the Vowel That Decides Who You Meant"*, opens on the same pair, names
U+064E and U+0650, counts the Tatoeba sentences that omit them, and covers the Egyptian
inversion وحشتني/وحشتيني under its own H3. Writing that spine again would have produced a
duplicate, not a sibling. The angle was moved to the part the sibling does **not** have:
Arabic marks gender in three *different grammatical slots*, and only one of them marks
**her**.

**(b) The cap status in my prompt is stale on one line.** It said `arxiv.org` was "At 2
(one slot)". `capcheck.mjs`, run 2026-09-25 against all 52 posts on disk, reports
`arxiv.org` at **3 posts — closed**. `journals.plos.org` 3 (closed) and `frontiersin.org`
/ `doaj.org` / `edizionicafoscari.it` at 2 were correct. Nothing I cite touches any of
them.

**(c) One prompt claim that did check out.** The ISO 639-3 codes in my prompt (`arb`,
`arz`, `apc`, `acm`) are all correct — Active, Individual, Living, all members of the
macrolanguage Arabic. One nuance worth printing: the registry's name for `acm` is
**Mesopotamian Arabic**, not "Iraqi".

---

## 1. SERP — measured, not asserted

Source of URLs: `SERPS-WAVE2.md`, "## how to say i miss you in arabic to a woman"
(DuckDuckGo `kl=in-en`, 2026-09-25). Nine results. Fetched 2026-09-25 from this sandbox
with a desktop UA.

| # | Domain | Fetched | Feminine form given | Kasra written on fem. | Fatha written on masc. | Dialects named | Arabizi |
|---|---|---|---|---|---|---|---|
| 1 | howtosayguide.com | **NO — timeout ×3** | — | — | — | — | — |
| 2 | welcome2jordan.com | yes (200, 12.1k chars) | yes | **no** | no | Egyptian, Levantine | no |
| 3 | blog.alifbee.com | yes (200, 10.4k) | yes | yes | **yes** | Egyptian, Levantine, Gulf, Maghrebi | no |
| 4 | howtosayguide.com | **NO — timeout ×3** | — | — | — | — | — |
| 5 | equranzone.com | yes (200, 7.1k) | yes | yes | no | Egyptian, Levantine, Gulf | no |
| 6 | wordscr.com | yes (200, 12.8k) | **no** | no | no | Egyptian, Levantine | no |
| 7 | earabic.io | yes (200, 5.0k) | yes | yes | no | Egyptian, Levantine, Gulf, Moroccan | no |
| 8 | sahraiq.com | yes (200, 9.9k) | yes | yes | no | **none** | no |
| 9 | talkpal.ai | yes (200, 6.1k) | yes | yes | no | Egyptian | no |

**Counts reported in the post, all out of the seven that returned:**

- **6 of 7** give a feminine form at all. wordscr gives none.
- **5 of 7** write the kasra on the feminine in Arabic script.
- **1 of 7** (alifbee) also writes the fatha on the masculine. So **6 of 7 present the
  feminine as the marked special case and the masculine as the unmarked default** — which
  inverts the grammar, where both are equally marked and both are equally droppable.
- **6 of 7** name at least one dialect; sahraiq names none while presenting the dialectal
  لـ construction as plain "Arabic".
- **0 of 7** mention Arabizi, Franco-Arabic or the chat alphabet.
- **2 of 9 could not be fetched.** Both are howtosayguide.com, at positions 1 and 4 — the
  two most valuable positions on the SERP, including the only result whose title targets
  the gendered query. Four attempts (https, https+www, http, bare domain), two UAs, 10–18s
  timeouts: every one aborted. **Nothing in this post makes any claim about their
  contents.**

Format note for the wave-2 method table: this SERP is **not** the quotes/messages split
the other rows measured. It is a how-to/translation SERP, nine results, no subhsandesh
page present, and no result leads with a raw count.

## 2. Checkable errors found in ranking results

Four sibling rows found one; this row found three, all verifiable against a named
dictionary entry.

**(i) wordscr (#6) offers "I love you" as "I miss you".** It lists بحبك as *"I miss you in
a loving way"* and بحبك كتير as *"I miss you a lot"*. Wiktionary's Egyptian Arabic entry
for بحبك is a phrase with exactly one gloss: **I love you**. Root ح ب ب (love), not ش و ق
or و ح ش.

**(ii) The same page offers "I forget you".** It gives Egyptian بنسىك, transcribed
"b-nes-ik", for "I miss you". That is the imperfect of نسي, which Wiktionary's Egyptian
Arabic section defines as *"to forget (to lose remembrance of)"*. This is the exact shape
of the `i-miss-you-in-sinhala` row's finding (talkpal glossing the word for *forgetting*
as "remember").

**(iii) welcome2jordan (#2) and equranzone (#5) put the participle's gender on the wrong
person.** welcome2jordan: *"Mishtaq (مشتاق) is used when speaking to a man, mishtaqa
(مشتاقه) when speaking to a woman."* equranzone answers *"What do you want me to say to a
woman in Arabic that I miss her?"* with **مشتاقة لك**. Wiktionary files مُشْتَاق as the
**active participle** of اِشْتَاقَ, declined as an **adjective**; an adjective agrees with
the person it describes, which is the one doing the longing. Tatoeba confirms the
direction: أنا مشتاق لك = "I miss you" (masculine speaker); زوجها مشتاق لها = "Her husband
is missing her"; كانت مشتاقة للحب = "She was…". So مشتاقة لك, sent by a man to a woman,
marks **him** feminine and leaves **her** unmarked — both genders on the wrong person.

**(iv) A softer one, at #2.** welcome2jordan prints six masculine/feminine pairs
(eshta'tellak/eshta'tellek, weenak/weenek, wishak/wishek…) in which **the Arabic script is
byte-identical in both columns** — اشتقتلك for both, وشك ولا ضو القمر for both. Its page
carries **no kasra and no fatha anywhere**. It is not wrong about the language; it is a
page that promises a distinction and then renders none, which is the post's whole subject.

## 3. Gap analysis

**Table stakes** (all fetched results carry these): the MSA pair إليكَ/إليكِ; a
transliteration; a mention that Arabic is gendered; at least one dialect form.

**The gap.** Not one result asks **which word** carries the gender. All seven treat "the
feminine form" as a single thing. In fact there are three grammatically distinct slots:

1. **object pronoun** — إليكِ / لِك: marks *her*, by a nonspacing mark that is normally not typed;
2. **verb subject ending** — وحشتيني: marks *her*, by a full letter ي, because وحش inverts the sentence;
3. **active participle** — مشتاق/مشتاقة: marks *the speaker*, by ة, and says nothing about her.

That decomposition is what makes errors (iii) diagnosable rather than a matter of taste,
and it is the post's angle.

**Second gap:** 0 of 7 mention Arabizi, which is the only typed form in which the feminine
vowel becomes a full character and therefore survives.

**Stale/absent data:** none of the seven cites any corpus, dictionary or standard. There
is nothing to supersede; there is only unsourced assertion to replace with counts.

**Fan-out sub-queries → H2s:** which word carries the feminine · does the mark actually get
written · is مشتاقة the feminine form · are the ranking pages right · which dialect · how
do people really type it · what do I put around the line.

## 4. Instruments and what each one was used for

Every form printed in the post is verified against one of these. Forms I could not verify
are **not printed** (see §6).

| Instrument | Fetched | What it established |
|---|---|---|
| Wiktionary, "I miss you" phrasebook | 200, wikitext via `action=raw` | 69 language entries; **exactly 2 carry m/f tags and both are Arabic** — `ar` أَشْتَاقُ إِلَيْكَ m / أَشْتَاقُ إِلَيْكِ f, `arz` وحشتني m (*waḥašteni*) / وحشتيني f (*waḥaštīni*). No `apc`, `afb`, `ary`, `acm` entry exists. |
| Wiktionary, مشتاق | 200 | Active (and passive) participle of اِشْتَاقَ; adjective مُشْتَاق, "yearning (for), longing (for), desirous", with `ar-decl-adj`. |
| Wiktionary, بحبك | 200 | Egyptian Arabic phrase, one gloss: "I love you". |
| Wiktionary, نسي | 200 | Egyptian Arabic verb, "to forget (to lose remembrance of)". |
| Wiktionary, افتقد | 200 | "to miss; to lose"; also "to examine; to study". |
| Tatoeba `api_v0/search` | 200 | Counts below. |
| Glosbe | 200 / 404 | Four vocalised headwords for the لـ form; no entry for اشتقتلك or وحشتيني. |
| iso639-3.sil.org | 200 ×6 | `arb`, `arz`, `apc`, `acm`, `afb`, `ary` all Active / Individual / Living / members of macrolanguage Arabic. `acm` = **Mesopotamian Arabic**. |
| Wikipedia, Arabizi | 200 (redirect from "Arabic chat alphabet") | ح → 7, ع → 3. Entity link only, not research. |

**Codepoint check, run on the phrasebook's own strings:**
`أَشْتَاقُ إِلَيْكَ` ends `U+0643 U+064E` (kaf + FATHA);
`أَشْتَاقُ إِلَيْكِ` ends `U+0643 U+0650` (kaf + KASRA).
`وحشتني` = 6 characters; `وحشتيني` = 7 — the extra one is `U+064A ARABIC LETTER YEH`, a
letter, not a mark. That is the mechanical reason the Egyptian feminine survives typing
and the MSA feminine does not.

**Tatoeba counts (Arabic → English, 2026-09-25):**

- `إليك` → 52 sentences returned, 51 containing the pronoun. **3 write the masculine fatha, 2 write the feminine kasra, 46 write neither.**
- The two kasra sentences are #10473022 أحتاج إليكِ ("I need you") and #376808, a translated speech addressing أمريكا. **Neither is about missing anyone.**
- `اشتقت إليك` → 7 sentences, all translated "I miss you", **0 carrying either mark**.
- `وحشتيني` → **0**. `اشتقتلك` → **0**. (`وحشتني` returns 28 hits, all of them the *noun* وحش, "monster", via stem matching — not the verb form.)
- `مشتاقة` → 13, including زوجها مشتاق لها "Her husband is missing her" and كانت مشتاقة للحب.

**Glosbe finding, reported in the post.** Glosbe carries the لـ construction under four
separately-vocalised headwords — اِشْتَقْتُ لَك, اِشْتَقْتُ لِك, اَشْتَقْتُ لَكِ and bare
اشتقت لك — each glossed "I miss you", and **each evidenced by the same single example
sentence**, which is itself unvocalised (اشتقتُ لك في الآخرة…). A dictionary distinguishing
four forms and proving all four with one string that cannot tell them apart is the post's
thesis, found inside the instrument rather than in a competitor.

## 5. Research sources (Phase 3)

Six in `sources`. Route: `findpapers.mjs` (Crossref + Europe PMC) → Europe PMC REST core →
Semantic Scholar abstract API. No landing page needed a browser. **PDFs do not parse here;
both papers are abstract-and-metadata reads and the post says so.**

1. **Asadi, I. & Asli-Badarneh, A. (2026).** "Diglossia and Orthographic Complexity as
   Multiplicative but not Additive Challenges in Arabic: A Critical Review."
   ***Journal of Psycholinguistic Research*** 55. doi:10.1007/s10936-026-10214-3,
   PMC13050341, CC BY, open access, first published 2026-04-04. PRISMA synthesis of
   empirical work 2000–2025. Used for: the two dimensions interact "multiplicatively", and
   the closing call to scaffold readers "as they transition from vowelized to unvowelized
   text". **Linked at `europepmc.org` (cap-exempt repository); the journal is named so the
   journal-level cap is checkable by hand.** This is the paper the `i-miss-you-in-arabic`
   row recorded as *lost* to the old host-based cap reading — its re-check trigger is now
   closed. It is **not** in that row's `sources`; the only prior mention is in its
   `structuralLimitations`.
2. **Bies, A. et al. (2014).** "Transliteration of Arabizi into Arabic Orthography:
   Developing a Parallel Annotated Arabizi-Arabic Script SMS/Chat Corpus." *Proceedings of
   the EMNLP 2014 Workshop on Arabic NLP*, ACL, pp. 93–103. doi:10.3115/v1/W14-3612.
   Abstract read via Semantic Scholar. Used for: speakers "often use a non-standard
   romanization called Arabizi", and the dialects used in social media "lack standard
   orthographies". `aclanthology.org` was at 1 post (`i-miss-you-in-korean`, a different
   URL) before this one.
3–6. Wiktionary phrasebook · Wiktionary مشتاق · Tatoeba · Glosbe — reference instruments,
cap-exempt per `verify.config.json`, each cited for a distinct printed form.

**Subject test:** all six are about this language and this phrase. **Swap test:** none
could move to another row in the batch — the phrasebook entry, the participle, the corpus
counts and both papers are Arabic-specific. **Generic context statistics: zero.**
**Wikipedia: 1 body link (Arabizi), entity only.**

`capcheck.mjs` run immediately before writing the file: no banned URL, no URL at 2, and
none of my hosts appears in the at-cap list. `en.wiktionary.org`, `tatoeba.org`,
`glosbe.com`, `iso639-3.sil.org` and `europepmc.org` are all on `capExemptDomains`;
`aclanthology.org` is not exempt and this makes it 2 posts of 3.

## 6. Lines cut, and why

- **Levantine اشتقتلِّك / Gulf اِشْتَقْتْ لِك / Moroccan توحشتِك.** Every one appears on a
  ranking page. None is in Wiktionary's phrasebook (which stops at `ar` and `arz`), Tatoeba
  returns zero for اشتقتلك, and Glosbe 404s it. A competitor blog is not evidence for a
  form, so these are **not printed**. What is printed instead is the absence itself.
- **A register claim about وحشتيني** ("casual", "affectionate", "used between couples").
  No instrument reached carries register information for it. Cut.
- **The digit table for Arabizi beyond 7 and 3.** Only those two were verified against the
  Wikipedia article's own table; the rest were not, so they are not listed.
- **Any statement about howtosayguide.com's two pages.** Unfetchable, so unmeasured.
- **A speaker-gender claim about Hebrew** on the live hub (אני מתגעגע/ת). True-looking, but
  outside this post's language and unverified against a Hebrew instrument. Cut.
- **Lane's lexicon and the Magidow diglossia paper.** Both belong to the sibling; reusing
  them would have rebuilt its page.

## 7. First-party data (Phase 0)

Snapshot: `content/batches/2026-09-25-miss-you-30/facts-snapshot.md`, the "Miss-you
segment" block, measured 2026-09-25, n=214, template live since 2026-07-28.

Counted across the 52 posts already on disk, every one of the 12 miss-you lines is used by
18–52 siblings. **There is no unused line and no unused pair.** This post opens with the
two *least*-collided: the 2.6-hour median save-to-last-edit gap (18 prior posts) and the
88.8% publish-and-share rate (20 prior posts). **Differentiation from first-party data is
therefore thin**, and no figure in the snapshot is Arabic-specific — nothing in the
database records the language a letter was written in. This closes with a new probe, not
with better writing.

Mandatory disclosures carried in body prose: pickers with defaults are not sender choices;
`viewCount` is page views not unique visitors; n=214 over two months kills any seasonal
reading; and the database records **which template was opened, never who received it**.

## 8. Angle

> Wins by being the only page on this SERP that separates the three grammatical slots an
> Arabic "feminine form" can occupy — object pronoun, verb subject ending, and speaker
> participle — counts how often the addressee's kasra is actually written (2 of 51 attested
> sentences), and names three checkable errors in ranking results, including one that
> offers "I love you" as "I miss you".

## 9. Split from the wave-1 sibling

`blogs/i-miss-you-in-arabic.json` answers **which Arabic sentence means "I miss you"** —
verb choice, the وحش inversion, Lane, the four forms. This page answers **whether the
sentence you send can be seen to be addressed to a woman** — which morpheme carries it,
whether it is typed, and what to do when it is not. No source, no table and no H2 is shared
with it. It is cross-linked, and the split is stated in one sentence in the body.

Note for the publisher: `/blog/i-miss-you-in-arabic` is **not live yet** (Strapi returns
`total: 0` on 2026-09-25) — it is a same-batch sibling, so that link resolves only once
this batch publishes.
