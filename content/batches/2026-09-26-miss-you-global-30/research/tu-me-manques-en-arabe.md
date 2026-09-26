# Research brief — tu me manques en arabe

Batch `2026-09-26-miss-you-global-30` · row `tu-me-manques-en-arabe` · tier `A-translate` ·
region `fr-fr` · bodyLanguage **French** · written 2026-09-26.

## Phase 0 — data gate

`facts-snapshot.md` (pinned; `content/facts.md` NOT used — `npm run facts` rewrites it in
place). Twelve miss-you lines, measured 2026-09-25, n = 214 since 2026-07-28.

Collision measured across the 74 blog JSONs on disk in both batches:

| line | prior posts using it |
|---|---|
| Median first-save→last-edit gap 2.6 h | 29 |
| 88.8% published and shared | 31 |
| 86.4% written memory | 35 |
| 92.1% "open when" | 36 |
| 47 city pairs | 38 |
| 2,417 views | 38 |
| 28.0% reunion date | 43 |
| 1,434 hug taps | 46 |
| 13.6% voice note | 52 |
| 43.5% password | 54 |
| median letter 88 words | 58 |
| 214 pages / 4.1% | 60 |

Opening pair chosen: **2.6 h median edit gap** and **88.8% published** — the two least-collided
lines. Overlap with the French sibling `tu-me-manques-en-anglais` factsUsed: **1 of 6** (the
214 denominator, unavoidable). Differentiation is still thin and the audit fails that item.

## Phase 1 — SERP, as actually run

- `scripts/serp-ddg.mjs "tu me manques en arabe" fr-fr` → `UND_ERR_CONNECT_TIMEOUT` on
  `html.duckduckgo.com:443`. Tried **once**, per BRIEF §3.
- Google `gl=fr&hl=fr&pws=0` in the operator's Chrome → redirected to `/sorry/index`
  (captcha). **Not clicked past.** No Google position, no AI Overview and no Google
  Translate widget is asserted anywhere in the post.
- Bing RSS `format=rss&mkt=fr-FR` → HTTP 200, 990 bytes, **0 `<item>` elements**. Useless.
- **Route used: Bing `mkt=fr-FR` in the operator's real Chrome (PolterTab), 2026-09-26.**
  Self-authenticated: page title `tu me manques en arabe - Recherche`, all ten results
  French-language and on this keyword. **Run twice; the ten cites were identical.**

Top 10 (Bing fr-FR, 2026-09-26) — 10 of 10 actually seen:

| # | host | page type | strength |
|---|---|---|---|
| 1 | deviens-bilingue.fr | language-blog listicle | weak |
| 2 | berberosphere.org | blog post dated 6 août 2014 | weak |
| 3 | tarjamaan.com | MT aggregator | weak |
| 4 | fluentvista.com | language-blog listicle, 12 mai 2026 | weak |
| 5 | lamaisondessultans.com | Paris shop's blog, darija, 23 juil. 2025 | weak |
| 6 | dictionnaire.reverso.net | dictionary scraper (`tu me manques beaucoup`) | weak |
| 7 | blabla-darija.com | language-blog, 9 sept. 2026 | weak |
| 8 | dictionnaire.reverso.net | dictionary scraper (`que tu me manques`) | weak |
| 9 | fr.glosbe.com | dictionary scraper | weak |
| 10 | context.reverso.net | concordancer | weak |

**Weak count: 10 of the 10 I actually saw.** Zero French editorial authority, zero
newspaper, zero university, zero national dictionary. Above the organic list Bing renders
its **own machine-translation widget**, whose target-language menu offers *Arabe*,
*Arabe (égyptien)*, *Arabic (Moroccan)* and *Arabic (Romanized)* — a translator outranking
every organic result, exactly as the French sibling measured on Google. Related searches
carried `tu me manques en marocain` and `tu me manques en darija`.

**Gate 4: PASS.** No strong French editorial incumbent exists on this SERP.
**Gate 2: PASS** — the query is a 4-word long-tail translation intent, not a head term.

Per `references/competitors.md` no ranking page was fetched, linked, cited or paraphrased.
Only the Bing-rendered snippet text of #1 and #5 is quoted, and only to correct it.

## Phase 2 — gap

Table stakes on this SERP: give an Arabic string; mention gender; mention "darija".

**The gap, and it is the whole post:** not one result says **who the grammatical subject
is**. French *tu me manques* makes the missed person the subject. Modern Standard Arabic
*اشتقت إليك* makes the **speaker** the subject. Egyptian *وحشتني* flips it back to the
addressee. So Arabic offers both shapes and a French speaker's intuition matches only one
of them — and #1 gets this exactly wrong.

**Checkable error, rank 1.** deviens-bilingue.fr's snippet: *« Pour dire "tu me manques" en
arabe, vous pouvez utiliser l'expression « انت تفتقدني » »*. أنت is the independent
**nominative** pronoun; Wiktionary's `افتقد` entry prints يَفْتَقِدُكَ = *He misses you (to a
man)*, so the prefix carries the subject and the ـك suffix the object. تفتقدني is therefore
*you miss me* — the Arabic for **je te manques**, not *tu me manques*. Rank 1 commits the
exact inversion the post is about.

**Second checkable error, rank 9.** fr.glosbe.com answers *tu me manques* with exactly one
string, اَشْتَقْتُ لَكِ, vocalised with a **kasra** on the final كِ — i.e. addressed to a
woman only — while its single supporting example, لقد اشتقت لك لكني لا أعرف إن كان هذا يكفي,
is written **without** that mark, so it cannot evidence the headword it sits under.

**Third, rank 5.** lamaisondessultans.com gives Moroccan *« Twahashtek » (توحشتك)*. See the
cut list.

## Phase 3 — instruments and what each was checked for

Verified BEFORE any section was built on them:

- `larousse.fr/dictionnaires/francais/manquer/**49234**` → 200, headword **manquer**.
  `/manquer/49348` → 200, headword **MARAUD**. BRIEF §4's warning reproduced first-hand.
- `cnrtl.fr/definition/manquer` → 200 but a 914-byte frameset shell in this sandbox; not cited.
- `en.wiktionary.org` `I miss you` → **69 top-level languages + 14 sub-entries = 83 entries.
  Exactly two carry `m`/`f` tags, and both are Arabic.** French contributes one form.
- `en.wiktionary.org/wiki/اشتاق` → MSA form VIII, root ش و ق, object marked
  `+obj|ar|:إِلَى/acc`; usage examples أَشْتَاقُ إِلَيْكَ / إِلَيْكِ. Sections present:
  Arabic, **Hijazi (acw)**, **South Levantine (ajp)**. **No Moroccan, Algerian or Tunisian
  section.**
- `en.wiktionary.org/wiki/افتقد` → "to miss; to lose"; يَفْتَقِدُكَ / يَفْتَقِدُكِ.
- `en.wiktionary.org/wiki/وحش` → Egyptian verb *waḥaš* "to miss, **to cause longing**".
- `en.wiktionary.org/wiki/توحش` → MSA only: "to be unsocial", "to act wild", "to be
  desolate". **No "miss" sense, no Maghrebi section.**
- `iso639-3.sil.org` code tables (`iso-639-3.tab`, `iso-639-3_Retirements.tab`) + per-code
  pages.
- `tatoeba.org` api_v0, `from=fra&to=ara`, query `"tu me manques"`, paged to exhaustion.
- `glosbe.com/fr/ar/tu me manques` → 200, read.

### ISO verdicts — all six codes in the task prompt are CORRECT

| code | Ref_Name | Scope | Type | status |
|---|---|---|---|---|
| `arb` | Standard Arabic | Individual | Living | Active |
| `arz` | Egyptian Arabic | Individual | Living | Active |
| `apc` | Levantine Arabic | Individual | Living | Active |
| `ary` | Moroccan Arabic | Individual | Living | Active |
| `aeb` | Tunisian Arabic | Individual | Living | Active |
| `arq` | Algerian Arabic | Individual | Living | Active |

None appears in the retirement table. `ara` is the macrolanguage (Scope M, ISO 639-1 `ar`).

**New finding the siblings did not have: `ajp` (South Levantine Arabic) was RETIRED on
2023-01-20, reason `M` (merge), change-to `apc`.** English Wiktionary still uses `ajp` as a
live language header on اشتاق. The sibling's `apc` label is the current code; a page headed
"South Levantine Arabic [ajp]" is using a code the registry withdrew.

### Wiktionary coverage, counted 2026-09-26 (`insource:/==X Arabic==/`, ns 0)

Standard 176,990 · South Levantine 3,010 · Moroccan 2,079 · Hijazi 1,892 · Egyptian 1,270 ·
North Levantine 769 · Gulf 698 · Tunisian 680 · Libyan 193 · **Algerian 68**.

Entries carrying a `to [[miss]]` gloss: Egyptian **2** (جنب, وحش); Moroccan 3, all of which
put that gloss in their *Arabic* section, not their Moroccan one; Algerian **0**; Tunisian **0**.

### Tatoeba — the original measurement this post is built on

`from=fra&to=ara`, query `"tu me manques"`, read 2026-09-26:

- **12** French sentences containing *tu me manques* carry an Arabic translation.
- **28** translation links, **24 distinct Arabic sentences.**
- **24 of 24** put the **speaker** in the subject slot (finite 1sg verb, or the participle
  أنا مشتاق agreeing with the speaker). **0 of 24** keep the French shape.
- **0 of 24** contain و ح ش in any form.
- Roots: **17** on ش و ق (اشتاق / مشتاق), **7** on ف ق د (افتقد).
- Object marking: **12** via إلى (إليك), **5** via لـ (لك), **7** attached directly (أفتقدك,
  افتقدتك).
- Participle: **4** use أنا مشتاق, masculine; **0** use the feminine مشتاقة.
- **Only 2 of 24 write any vowel mark on the addressee's ك** — #3054790 أشتقتُ لكَ and
  #3054791 أشتقتُ لكِ — and both translate **the same** French sentence, #9080
  *Tu me manques beaucoup.* One French sentence, two Arabic sentences differing by one mark.

### Lines CUT, and why

1. **توحشتك / "Twahashtek" (Moroccan, ranks 5 and 7).** Wiktionary's توحش carries MSA senses
   only — "unsocial", "wild", "desolate" — no "miss", no Maghrebi section. Tatoeba's only two
   hits for the string توحشتك are substring matches inside unrelated classical sentences
   (#592440, #1792624), neither of which means "I miss you". No instrument. Not printed.
2. **انت تفتقدني (rank 1).** Means *you miss me*. Printed only as the corrected error.
3. **بَعِيدًا عَنكَ (rank 4).** "Far from you" — an adverbial phrase, not a rendering of
   *tu me manques*. No instrument attests it as one.
4. **Algerian and Tunisian forms of any kind.** Zero entries glossed "to miss" in either.
   The honest gap is reported instead of a form being invented.
5. **Levantine and Gulf gendered forms.** Same verdict the Arabic sibling reached; nothing
   changed, and this post does not re-derive it.
6. **مشتاقة as a printed line.** It is the feminine of *I*, not of *you* — the woman sibling
   owns that, and Tatoeba attests it 0 times here. Named as a consequence, cross-linked, not
   re-derived.
7. **Larousse and CNRTL as body links.** Larousse `/manquer/49234` was fetched and the
   headword confirmed, but the French-side proof (the `lui` test, transitif indirect vs
   intransitif) is the French sibling's thesis. One sentence and a cross-link, no link slot.
8. **Alshemali, "Dialectal substitution…", *Scientific Reports* 2026, PMC12901007.** Read
   (abstract): most Arabic NLP is trained on MSA while real Arabic text is dialectal. Cut
   only to stay inside the 3–6 outbound-link cap. *Scientific Reports* is at 1 post in this
   batch, so it remains available.
9. **VISH-DARIJA-TTS, *Data in Brief* 2026, PMC13416458.** Dual-script (Latin + Arabic)
   Darija dataset — would have sourced the Latin-script claim. Cut for the same link cap.

## Phase 3 — sources used

1. Wiktionary, `I miss you` phrasebook (cap-exempt instrument).
2. Wiktionary, `افتقد` (cap-exempt instrument).
3. Tatoeba sentence #9080 (cap-exempt instrument), CC BY 2.0 FR.
4. ISO 639-3 code tables, SIL International (cap-exempt instrument).
5. Sawalha et al., "MADOran: A morphologically annotated dataset of Oran",
   ***Data in Brief***, 2025-09-27, doi:10.1016/j.dib.2025.112104, PMC12552140.
   `isOpenAccess: Y`, licence cc-by-nc. **Abstract only — PDFs do not parse here.**
6. Bies et al. is NOT used; Arabizi detail is cross-linked to the sibling, not re-derived.
   Sixth slot: Wiktionary `اشتاق` is cited in prose without a link slot; the sixth outbound
   link is the ISO retirement table companion download.

**Journal cap, checked by hand as BRIEF §7 requires:** *Data in Brief* = **0** prior posts
in this batch, now 1. *Frontiers in Psychology* — **not cited** (banned, over at 6).
*PNAS* — not cited. PMC12552140 — 0 prior posts. No spent PMCID reused.

## Phase 4–5 — angle, links

Angle: wins by being the only page on this SERP that says who the grammatical subject is in
each Arabic form, counts 24 attested Arabic translations of *tu me manques* (24 of 24 flip
the subject onto the speaker, 0 keep the French shape), verifies six ISO codes and catches
`ajp`'s 2023 retirement, and corrects the rank-1 result which prints *you miss me*.

Internal links: `/missyou-gf` (mandatory), **`/hold-my-hand`** (substituted for `/capsule`
from `oneOfLinks` — a reader who cannot reliably produce the line is better served by a page
that needs no words), `/templates`. Three sibling cross-links, none live yet.

Product mismatch disclosed in French body prose: English UI, English labels, left-to-right
furniture around a right-to-left line, and a template named for a girlfriend/partner.
