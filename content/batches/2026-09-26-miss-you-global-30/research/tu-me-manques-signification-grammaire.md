# Research brief — `tu-me-manques-signification-grammaire`

- **Keyword:** `tu me manques signification grammaire`
- **Region:** `fr-fr` · **bodyLanguage:** French · **Tier:** A-grammar
- **Verdict: PROCEED.** The measured SERP wants the verb explained, not the phrase translated — and the translation sibling gives the second, not the first.
- Date of all measurements: **2026-09-27**

---

## Phase 1 — SERP, measured

**Route: `scripts/serp-ddg.mjs`.** The BRIEF records this script as connect-timing-out
on 2026-09-26. **It worked on 2026-09-27.** Reported to the orchestrator: the DDG
IP-level block described in BRIEF §3 was not in force today. Run once with the script's
default `in-en` region, then twice with `--region fr-fr`. No browser route was needed,
so no browser contention could apply.

**Stability control:** the two `fr-fr` runs returned the same host set with a minor
ordering shuffle (ranks 2/3 and 4/6 swap). That is the two-run agreement the BRIEF asks
for. A third call, an unrelated `fr-fr` control query (`recette tarte tatin`), returned
"no results parsed" — a throttle on the third consecutive call, not a markup change,
since the two runs either side of it parsed cleanly.

**Self-authentication:** every one of the 10 results is French-language and about
*tu me manques*. No cross-contamination.

| # | Host | Page type | Strong / weak |
|---|---|---|---|
| 1 | francaisavecpierre.com | French-course brand, article on the *je te manque / tu me manques* split | strong-ish |
| 2 | francaissansfautes.fr | small spelling blog, 807 words | weak |
| 3 | vitrinelinguistique.oqlf.gouv.qc.ca | **government language authority**, BDL ruling page | strong |
| 4 | hitcf.com | TCF exam revision aide-mémoire, 655 words | weak |
| 5 | hellofrench.com | French-course site, *manquer de / à / manquer*, 3,397 words | medium |
| 6 | french-iceberg.com | small blog, 2,733 words | weak |
| 7 | orthodidacte.com | spelling-training brand, 609-word orthography fiche | medium |
| 8 | julie-la-plus-belle.com | content farm — 1,913 words on this phrase with **no grammatical analysis at all** | weak |
| 9 | smartlink.ausha.co | podcast host page, not an article | weak |
| 10 | frenchlearner.com | English-language site for anglophones | weak |

**Weak count: 6 of 10** (2, 4, 6, 8, 9, 10). Results counted: 10, all actually seen.

**No Google Translate widget. No AI Overview.** Neither route surfaced either one.

This is the **third distinct SERP shape** in this batch's French rows:

- `tu me manques en anglais` (translation) — 6 of 8 weak, translation aggregators
  (Linguee, Reverso, bab.la), **Google Translate above every organic result**.
- the advice-shaped French row — **no Translate widget, but an AI Overview**.
- **this one (grammar)** — no widget, no AI Overview, no translation aggregator
  anywhere in the top 10, and **no reference dictionary ranking either**. The field is
  French-teaching pages plus one government ruling.

**Gate 2:** page-type match. These are explanatory articles, which is what a blog post
is. Pass.

**Gate 4: PASS.** This is not a SERP of national publishers with a decade of authority.
It is course blogs, a podcast feed and a content farm, with a single institutional page
(the OQLF) that is a ruling fiche rather than an article.

---

## Phase 2 — Duplicate analysis against the sibling

`blogs/tu-me-manques-en-anglais.json` read in full before any drafting.

**What the sibling already owns, and this post does not retake:**
the English rendering; the 90-translation Tatoeba count (86 *miss*, 4 *long for*, 0
keeping the French shape); the three-dictionaries-three-labels disagreement (Larousse
*transitif indirect* vs Académie *intransitif* vs TLFi/Michelet 1834); the *tu*/*vous*
register collapse in English; the English mirror structures (*You will be missed*);
the gymglish "passive" error.

**One unavoidable overlap:** the *lui*-not-*le/la* proof. No grammar post can omit it.
It is compressed to three sentences and immediately cross-linked to the sibling.

**What this post owns, none of it in the sibling:**

1. **The five Larousse construction blocks side by side**, with the point that only one
   inverts — and that the confusion is imported from the *direct*-object construction
   (*j'ai manqué le train*), where the subject really is the person doing the missing.
2. **The etymology, and what it explains.** Both authorities print it, so it held:
   - Académie 9e: "Étymologie : XVIᵉ siècle. Emprunté de l'italien *mancare*, de même sens."
   - Larousse: "(italien *mancare*, de *manco*, défectueux, du latin *mancus*)"
   - The payoff is not the trivia but the Académie's **filing**: the affective sense sits
     under "I. Verbe intransitif. **A. Faire défaut.** 3. *Manquer à quelqu'un*", the same
     rubric as "L'argent lui manque". French treats a missed person as a **missing
     resource**, and a missing resource is a subject. That is the causal explanation the
     whole SERP gestures at and nobody states.
3. **The OQLF ruling** — the single strongest thing on the page, and it came out of the
   SERP rather than out of reasoning. *Je te manque* meaning "I miss you" is not a
   beginner's slip; the Office québécois de la langue française files it under
   **Emprunts syntaxiques** and writes that it is "une construction calquée sur l'anglais
   *I miss you*" and "jugé incorrect". Plus the nuance nobody else in the top 10 gives:
   *Je vous ai manqué* is perfectly correct in the sense of having failed to meet someone.
4. **The paradigm counted**, person by person, on Tatoeba — a different measurement from
   the sibling's, which counted English translations.
5. **The past-participle rule**, with the point that the agreement is what disambiguates
   the affective sense from the *rater* sense.

**Angle:** the only post that treats *tu me manques* as a question about the **verb**
rather than about translation.

---

## Phase 3 — Instruments and sources

### Instrument status (reported as asked)

| Instrument | Result |
|---|---|
| **CNRTL** | **DEAD for this agent.** `/definition/manquer` and `/etymologie/manquer` both HTTP 200, **914-byte shell, only text "Portail lexical"**. Confirms the JS-SPA warning. Not cited — the sibling cites it, but I will not cite a page I could not read. |
| **Larousse** `/manquer/49234` | HTTP 200, **headword confirmed `manquer`** (title "Définitions : manquer, être manqué, se manquer"). No MARAUD. |
| **Académie** `dictionnaire-academie.fr/article/A9M0575` | HTTP 200, **headword confirmed `MANQUER`**. |
| **Tatoeba** | api_v0 search working. **Caveat found: its search is diacritic-insensitive** — a query for `manquée` returns the `manqué` set. Counts verified by reading the sentences, not by trusting the matcher. |
| **MDPI** (`Languages` 11(3):36) | **Unusable.** 2.2 KB Cloudflare bot challenge on three URL forms. **Dropped rather than cited unread.** |
| **Strapi production** | Reachable via `ctx_execute`. `tu-me-manques-signification-grammaire` → `total:0` (free). `tu-me-manques-en-anglais` → `total:1` (cross-link target live). |

### Checkable error in a ranking result

**french-iceberg.com** (rank 4/6 across the two runs). Two errors, both on the page:

1. It writes: "C'est la personne qui manque qui est le sujet de la phrase, et la personne
   qui ressent l'absence qui devient le **complément d'objet**." Unqualified *complément
   d'objet* reads as **direct**. It is indirect — the dictionaries' *lui* proves it, and
   the consequence is the participle rule. The intuition is right; the label is wrong.
2. It gives the transcription `/ty mə mɑ̃k/`, notes that "le *s* final reste muet", and
   then instructs the reader to "faire la liaison". **There is no liaison in
   *tu me manques*** — a liaison requires a normally-silent final consonant pronounced
   before a vowel-initial word, and the phrase contains none. The page contradicts itself
   within one section.

Named in prose, **not linked** — zero competitor links.

Worth recording as a negative finding: **hitcf.com (rank 4/6) is correct**, including the
participle rule ("m' est un COI → pas d'accord"). It is a low-authority site with accurate
content, not a straw man, and the post does not pretend otherwise.

### Sources (6)

| # | Source | Journal / publisher | Read |
|---|---|---|---|
| 1 | Larousse, entrée *manquer* | Larousse (cap-exempt) | full entry |
| 2 | Dictionnaire de l'Académie française, 9e éd., art. *manquer* | Académie française (cap-exempt) | full article |
| 3 | OQLF, Banque de dépannage linguistique, "Emploi déconseillé de *je te manque*…" | Office québécois de la langue française | full page |
| 4 | Tatoeba, French side, counted 2026-09-27 | Tatoeba (cap-exempt) | result sets read by hand |
| 5 | Figura, "Dative Experiencer Psych Verbs in Old French – The Role of the Preposition *à*" | ***Psych Predicates in Romance Languages*** (Edizioni Ca' Foscari, LiVVaL 8), CC BY, peer reviewed, OA | **abstract only** — disclosed |
| 6 | Kang & Oh, "Overpassivization Revisited" | ***Journal of Psycholinguistic Research*** (Springer), CC BY | **full text**, via Europe PMC REST |

**Cap compliance.** `capcheck.mjs` reports **doi.org at cap 3**, so both scholarly sources
are cited at the publisher's own URL, never through the resolver. New hostnames introduced:
`vitrinelinguistique.oqlf.gouv.qc.ca` (1 post), `edizionicafoscari.unive.it` (1 post).
All others are cap-exempt instruments.

**Journal names, for the cap the script cannot see:** *Psych Predicates in Romance
Languages* (Edizioni Ca' Foscari) and *Journal of Psycholinguistic Research* (Springer).
Neither is on the hard-ban list. **No *Frontiers in Psychology*, no *PNAS*, no *PLoS ONE*,
no *Scientific Reports*.** Neither spent PMCID (PMC8330882, PMC12221085) is reused.

**Paper rejected on the ban list:** the `findpapers` sweep returned several *Frontiers in
Psychology* and *Scientific Reports* hits. All discarded unread per BRIEF §7.

### Tatoeba paradigm counts, 2026-09-27

| Query (French side) | Sentences |
|---|---|
| « tu me manques » | 46 |
| « me manquent » (plural absent subject) | 33 |
| « vous me manquez » | 29 |
| « il me manque » | 22 |
| « tu m'as manqué » | 16 |
| « je te manque » | **5** |

*Je te manque* is roughly **nine times rarer** than *tu me manques* — consistent with the
OQLF treating the inverted use as a borrowing rather than as native syntax.

---

## Phase 4–7 — Output

- `blogs/tu-me-manques-signification-grammaire.json`
- Body **1,765 words** (target ~1,750, ceiling 1,800), FAQs excluded.
- **11 FAQs**, French, none restating a body H2.
- 8 H2s; one 5-row comparison table (the constructions) plus a 3-row first-party table.
- Internal links 4: `/missyou-gf`, `/capsule`, `/templates` (all in `TEMPLATE_LINKS`),
  plus the sibling cross-link `/blog/tu-me-manques-en-anglais` (live, `total:1`).
- Price guard: `pricecheck-intl.mjs` clean.
- Audit: **47 passed / 3 failed**, `passed ∩ failed = ∅`, 14 `additionalChecks`.

### What stayed failed

- **#29** Wikipedia links 0 in body — recorded as a decision, not an oversight (the item
  permits 0; Wikipedia appears only as `sameAs` identifiers, which #44 requires).
- **#37** the Figura chapter is abstract-only; the MDPI paper was dropped unread rather
  than cited.
- **#45** the `ItemList` mirrors the five table rows, not H3s — the body uses no H3s.

### Honest note on the weakest part

The scholarly sourcing. The Old French chapter is exactly on subject but I read only its
abstract; the MDPI article I wanted as its companion was unreadable and I dropped it
rather than cite a page I had not opened; the Kang & Oh paper that filled the slot is
about English L2 learners and is the loosest fit in the list. The dictionary and corpus
evidence, which is what the post actually rests on, was read in full and first-hand.
