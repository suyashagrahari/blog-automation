# Research brief — `propose girlfriend shayari`

- Batch: `2026-09-17-propose-30`
- Slug: `propose-girlfriend-shayari` (Strapi check returned `total: 0` — free)
- Category: `modern-romance`
- Secondary keyword on the same page: `propose a girl in shayari`
- Volume: no tool data. An estimate band was supplied in the assignment; it is **not printed anywhere in the post** and must not be quoted as a measured figure.

---

## Phase 1 — SERP analysis

`WebSearch` had exhausted its session budget, so the SERP was pulled from
`lite.duckduckgo.com` (POST, `kl=in-en`) for `propose girlfriend shayari`,
`propose a girl in shayari` and `propose day shayari for girlfriend hindi english`.
Each of the top five pages was fetched directly and parsed in the sandbox.

Every page on this SERP is a shayari aggregator, i.e. a competitor under
`references/competitors.md` ("Shayari/wishes aggregators"). None is linked, cited,
paraphrased or mirrored. Reading them was Phase 1 research only.

| # | Page | Words | Devanagari chars | H2/H3s | FAQ | Schema | What it optimises for |
|---|---|---|---|---|---|---|---|
| 1 | a1shayaris.com/propose-shayari/ | 1,493 | 2,608 | 5 | no | yes | "New 2026" freshness stamp + copy-paste blocks |
| 2 | shayariloop.com/propose-shayari-in-hindi/ | 508 | **0** | 0 | yes | no | thin; the Devanagari is rendered as images, so nothing is copyable or indexable |
| 3 | shayariba.in/propose-shayari/ | 1,538 | 5,142 | 6 | no | yes | volume + "Shayari image" downloads; heavy related-post interlinking |
| 4 | tiptopshayari.com/propose-shayari-in-hindi/ | 2,532 | 7,246 | 15 | no | yes | "(Copy-Paste)" in the H2s; segmented by recipient (GF, BF, first time) |
| 5 | dailyshayarihub.com/propose-shayari/ | 2,096 | 6,198 | 12 | no | yes | "With Images", "Stylish … For WhatsApp" — image-sharing intent |
| (6) | bharative.com/…/100-plus-love-proposal-shayari-hindi/ | 5,125 | 14,343 | 36 | no | yes | sheer count (100+), emoji-headed sections, Hindi prose throughout |

Observed across all of them:

- **Zero** define *sher*, *matla*, *qafiya*, *radif* or *bahr*. Substring hits on
  "matla" in two pages resolve to *matlabi* / *matlab*, not the prosodic term.
- **Zero** give a Roman transliteration beside the Devanagari, and zero give an
  English gloss. The reader either reads Devanagari or leaves.
- **Zero** say who a line suits, or flag that a line's vocabulary might not land.
- **Zero** cite any source at all. Not one outbound research link across six pages.
- Direct answer position: none of them answers anything; they open with a block of
  lines. There is no definitional paragraph to lift, which is why AI Overviews on
  this query have nothing authoritative to pull from.
- Tone: third person, no author byline, no tradeoffs, no admitted limits.

## Phase 2 — Gap analysis

**Table stakes** (present on all five, so the post must not omit them): actual
usable lines in Devanagari; segmentation by situation (first ask, long-term
girlfriend, distance); a Propose Day hook.

**The gap.** Shayari is a *form* with a describable structure, and not one page on
this SERP describes it. The reader is handed 100 lines and no way to tell a good
one from a bad one. Nobody marks register — the difference between plain Hindi,
film-song Urdu-lite, and genuine Urdu vocabulary — even though that is the single
decision most likely to make the message backfire. Nobody admits cutting a line.

**Stale data.** Not applicable: there is no data on these pages to be stale. The
absence *is* the finding.

**Unanswered questions raised and dropped:** what actually makes two lines a sher;
whether to send Devanagari or Roman; whether quoting a famous poet is acceptable;
what to do if she does not read Hindi.

**Fan-out sub-queries** → became H2s and FAQs: *what is a sher* · *what is radif* ·
*what is qafiya* · *what is matla* · *how long should a propose shayari be* ·
*Devanagari or Roman* · *is it okay to use a famous poet's sher* · *what if she
doesn't read Hindi* · *should I recite it or send it*.

**Angle (one sentence).** Wins by being the only post that teaches the form — sher,
matla, qafiya, radif, bahr — well enough that the reader can judge a line
themselves, then gives eight original couplets with Roman, English and an explicit
register warning, grounded in SubhSandesh's platform-wide figures.

## Phase 3 — Sources

Lane: **Urdu/Hindi poetics, the ghazal tradition, mushaira performance, and rhyme
processing.** Deliberately avoided (other agents' lanes): first-disclosure anxiety,
marriage readiness, novelty, escalation, WhatsApp mechanics, CMC channel effects,
post-conflict repair, bilingual emotion, perceived effort/quotation, greeting
obligation.

Searches run: `ghazal form radif qafiya prosody scholarly article open access` ·
`mushaira performance Urdu poetry audience scholarly article` ·
`Urdu register Hindi film lyrics sociolinguistics study` ·
`rhyme as reason effect McGlone Tofighbakhsh aphorisms processing fluency` ·
`Urdu ghazal convention beloved gender ambiguity scholarly open access pdf` ·
`rhyme and rhythm improve memory for verse experiment open access journal`.

Five sources, all read in full, none paywalled at the point of reading:

1. **Khan, Rao, Wasi, Minai & Raazi (2020)** — "Edit distance-based search approach
   for retrieving element-wise prosody/rhymes in Hindi-Urdu poetry", *Indian Journal
   of Science and Technology* 13(39), 9 November 2020. Peer-reviewed, CC BY 4.0,
   fully open. **Says:** qafiya (rhyming words) is "the core element, without which
   we may not consider anything Hindi/Urdu poetry but merely a piece of writing";
   radif is "a phrasal suffix to qafiya", intrinsic in ghazals. Corpus of 13.46M
   tokens, tri-script. *Subject test: pass. Peer-reviewed + open: pass.*
2. **Kirk (2011)** — "Half-Drawn Arrows of Meaning: A Phenomenological Approach to
   Ambiguity and Semantics in the Urdu Ghazal", MA report, University of Texas at
   Austin. **Says:** the ghazal is "a series of thematically unrelated yet
   metrically and prosodically related couplets"; apart from the first and last
   sh'ir (distinct rhyme scheme; poet's *taxallus*), the sh'irs "can be reordered,
   some can be omitted … or any single sh'ir can stand on its own". *This is the
   licence for sending one couplet alone.* **Disclosure:**
   `repositories.lib.utexas.edu` returns HTTP 403 to this machine; the full text was
   read from the publicly hosted archive.org copy, and that copy is what is cited.
   *Subject test: pass.*
3. **Kuczkiewicz-Fraś (2020)** — "Urdu Ghazal: The Poetic String of Pearls",
   *Urdu Studies* (international, peer-reviewed, bilingual; print edition 2020 —
   confirmed on the journal's own "Contributors of Previous Print Versions" page).
   **Says:** the Urdu ghazal "emerged from its Persian model both in structure and
   in texture"; the *ishq* it depicts "is experienced in separation and can never be
   fulfilled", with "pain and anguish … their distinctive marks". Used in the post
   to make the point nobody else makes: classical shayari is built to ache, and the
   reader is trying to get a yes. *Subject test: pass.*
4. **Mirza (2014)** — "The Role of Poetry Readings in Dispelling the Notion that
   Urdu is a Muslim Language", *International Journal of Humanities and Social
   Science* 4(10), August 2014. Interview study at Delhi mushairas. **Says:**
   historically "obsolete and difficult words were used to highlight the vocabulary
   skills of the poet", and "this search for perfection led to the exclusion of the
   masses"; present-day mushairas show "exclusion of obsolete words and a preference
   for a simpler language", which is "appealing to the masses". Also: spoken Urdu
   and Hindi are the same language, only the scripts differ. This is the documented
   backing for the register warning. *Subject test: pass.*
5. **McGlone & Tofighbakhsh (1999)** — "The Keats heuristic: Rhyme as reason in
   aphorism interpretation", *Poetics* 26, 235–244. **Says:** unfamiliar aphorisms
   in rhyming form and in semantically equivalent non-rhyming form were rated
   *equally comprehensible*, but the rhyming versions were "perceived as more
   accurate". **Disclosure:** paywalled at the publisher; OpenAlex records no OA
   location. The full PDF was read from a public copy at gwern.net and that copy is
   cited so the reader can verify it. ScienceDirect was additionally avoided because
   `capcheck.mjs` shows `sciencedirect.com` with only one post slot left in this
   batch. *Subject test: pass (rhyme processing is the mechanism of the form).*

Generic context statistics used: **zero**. Wikipedia: **one** link
(`/wiki/Ghazal`), entity disambiguation only, not counted as research and not in
`sources`.

Cap position at finalisation (`capcheck.mjs` re-run): none of
`indjst.org`, `archive.org`, `urdustudies.in`, `ijhss.thebrpi.org`, `gwern.net`
appears in the wave-1 banned list, at the 3-post domain cap, or at the 2-post URL
cap. A count across all sibling files in `blogs/` confirms each is used by exactly
one post — this one.

## The shayari itself

**8 published, 5 cut.** All eight are **original**, written for this page. None
reproduces a published sher by a named modern poet, and none is copied from any
competitor page. A byte-level check against every sibling blog in this batch found
zero overlapping Devanagari lines.

Each is written as a **matla** — both lines rhyming — because a sher quoted alone
needs both lines to chime; a non-matla sher pulled out of its ghazal has a rhyme
word with nothing to answer it.

| # | Qafiya | Radif | Register | Suits |
|---|---|---|---|---|
| 1 | keh / reh | raha hoon | plain Hindi | first confession |
| 2 | veeran / pehchaan | lagta hai | Urdu-lite (film-song) | almost anyone |
| 3 | tumhara / hamara | hai | neutral | a no-pressure proposal |
| 4 | nazrana / thikana | hai | mixed, mild formality | empty-handed ask |
| 5 | naya / dua | lagta hai | Urdu-lite | long relationship |
| 6 | badal / nikal | na jaaye | plain Hindi | proposing to a friend |
| 7 | ghar / safar | lagta hai | neutral | long distance |
| 8 | mol / bol | nahin hai | genuine Urdu register | someone who reads Urdu vocabulary |

Lines 2 and 5 use the *alif-rawi* class of qafiya (`naya`/`dua`), which is standard
Urdu practice for words ending in a long *ā*.

**The five cut, and why:**

1. `कहो हाँ तो ये शाम सजा लूँ मैं / कहो ना तो भी दोस्ती निभा लूँ मैं` — `कहो ना`
   reads as both "say no" and "do say". An ambiguity at the exact hinge of a
   proposal is unusable.
2. `ये दिन भी तेरे नाम, ये शाम भी तेरी / कहो हाँ तो ये उम्र का इनाम भी तेरी` —
   gender agreement fails: *inaam* is masculine and takes *tera*, not *teri*.
3. `मैंने कुछ ख़ास नहीं, बस सच कहा है / जो दिल में बरसों से था, वो अब कहा है` — the
   rhyme word is the same word (*kahā*) in both lines. That is repetition, not
   qafiya.
4. `मैं शायर तो नहीं, पर इतना कहा / कि तेरे बिन ये दिल कभी ना रहा` — tense wobble
   between *kahā* (perfective) and the intended present-tense framing, and the
   second line's sense ("this heart never was") is strained rather than compressed.
5. `सुना है इश्क़ में अल्फ़ाज़ कम पड़ जाते हैं / तभी तो आज मैं सिर्फ़ तेरा नाम लाया हूँ` —
   no qafiya at all once lifted out of a ghazal; the second line rhymes with an
   absent sequence.

**Metrical honesty.** The eight are matched by **syllable count**, not by classical
*arūz* scansion of long and short quantities. This is stated in the body under the
*bahr* heading rather than glossed over, and is recorded in
`batchMeta.structuralLimitations`. Line-by-line counts: 13/13, 12/12, 12/12, 12/12,
11/11, 11/11, 11/11, 12/12.

## Phase 0 — first-party facts used

Four, two of them inside the first 150 words:

- 4,567 personalised pages created since 2026-03-12, across 16 page types
- #1 page type: "I love you" page (`/love-gf`) — 1,138 created, 24.9% of all pages
- 39.9% of creators password-protect their page before sharing it (1,822 of 4,567)
- Median first-save → last-edit gap 6.4 hours, sampled on `/love-gf`, n = 1,138

Every one is labelled **platform-wide across 16 page types** or **sampled on
/love-gf** in the body prose, not only in the audit. The comparison table prints
"no proposal-specific figure exists" for the proposal row rather than borrowing a
platform number. No price, free-tier or paid-tier claim appears anywhere; the
pricing block in `facts.md` is empty and the post sidesteps cost entirely.

## Phase 5 — links

- Internal (3, all from `TEMPLATE_LINKS`): `/proposal` (mandatory, placed after the
  section establishing why a page helps), `/love-gf` (the genuine alternative — this
  keyword covers "will you be my girlfriend" as often as marriage), `/templates`.
- The post says plainly that when the sher is the whole gesture, sending it alone in
  a chat is the correct move and no page improves on it — the honest "neither is
  right" case the BRIEF asks for.
- `templateUrls`: `["/proposal", "/love-gf"]`, relative paths.
- Outbound: 5 research links, each attached inline to the fact it supports, plus 1
  Wikipedia entity link. Zero competitor links.

## Phase 6 — audit

50/50 passed, 0 failed. `passed ∩ failed = ∅`; `|passed| + |failed| = 50`; every
string checked byte-verbatim against `references/publish-checklist.md` with the
line-wrapping rule applied. Six structural limitations recorded in
`batchMeta.structuralLimitations` (no proposal-specific data; empty pricing block;
syllable-count rather than *arūz* metre; the gwern.net copy of a publisher-paywalled
paper; the archive.org copy of a 403-blocked UT Austin report; no search-volume tool
data) — none of which is a checklist item, so none is in `failed`.

Verified dates: Propose Day 2027 is **Monday 8 February 2027** (computed, not
assumed); Rose Day Sunday 7 February; Valentine's Day Sunday 14 February. Propose
Day 2026 fell on a Sunday.

`node scripts/verify-batch.mjs content/batches/2026-09-17-propose-30` reports this
file as 1,800 words, 12 FAQs, audit 50/0, category `modern-romance`.

## Honest assessment

The five incumbents are undifferentiated dumps: none defines the form, none
transliterates, none glosses, none marks register, none cites anything. This page is
the only one that does all five, and the only one that names the lines it cut. That
is a genuine citation hook for "what is radif in shayari" or "is this sher correct".
It will not beat MensXP, Zee or the established shayari farms on the head term —
they refresh every February and their authority is far above ours — so position 6–10
on `propose girlfriend shayari` is the realistic target, with the form-explainer
sub-queries the likelier win.
