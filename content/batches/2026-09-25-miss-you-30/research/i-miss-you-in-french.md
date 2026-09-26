# Research brief — `i miss you in french`

Batch `2026-09-25-miss-you-30` · slug `i-miss-you-in-french` · compiled 2026-09-25.
All fetches read in sandbox; every French line below carries a Tatoeba sentence id
or a dictionary lemma. Nothing here is from memory.

---

## Phase 1 — SERP

One WebSearch, US-served, 2026-09-25, query `i miss you in french`. Nine results:

| # | Page | What it is | Optimising for |
|---|---|---|---|
| 1 | readle-app.com | language-app blog, "A Guide for Romantics" | app install |
| 2 | talkinfrench.com | course site, phrase list | email capture / course |
| 3 | rocketlanguages.com | course site, audio phrase page | course trial |
| 4 | mathildekien.com | podcast episode 131 | podcast subscription |
| 5 | quora.com | UGC thread on "I missed you" pronunciation | — |
| 6 | lingoculture.com | tutoring blog, "An explanation of *Tu me manques*" | tutoring |
| 7 | copycatcafe.com | blog, "And Avoid a Common Mistake" | newsletter |
| 8 | context.reverso.net | bilingual concordance | tool usage |
| 9 | mermaidhangout.substack.com | personal essay, off-intent | — |

Structure only was recorded; no competitor text is quoted, linked or paraphrased
anywhere in the post (`references/competitors.md`).

**Table stakes** every page covers: `tu me manques`; the observation that the word
order is reversed; `beaucoup` / `tellement` as intensifiers; a note that `je te
manque` is the trap.

**No AI Overview claim is made** — the search tool does not expose one, so the post
says nothing about it either way.

**The gap.** Not one of these pages cites a dictionary. Every one asserts the
reversal and then moves on; none prints the full paradigm with a source per cell,
none dates the construction, and none says what French lexicography actually calls
it. The reversal is the *headline* on all nine pages and the *only* thing any of
them explains.

**Stale data / unanswered questions.** No page dates anything at all. Unresolved
across the set: is the verb intransitive or transitive-indirect; where does
`manquer` come from; how old is the *manquer à* construction; and is "you are
missing **from** me" the correct literal gloss (it is not — see below).

**Fan-out sub-queries → H2s.** how do you say i miss you in french · why is tu me
manques backwards · i miss you in french formal / plural · what does je te manque
mean · i miss you so much in french · where does manquer come from · how long
should the message be · when not to send a French line.

## Phase 2 — Angle

Wins by being the only page on this query that prints the whole `manquer à`
paradigm with a Tatoeba sentence id behind every cell, dates the construction from
CNRTL (verb into French 1546, *manquer à* + noun 1563, the affective use
illustrated by Michelet's *Journal* of 1834), reports that the Académie and
Larousse file the same sense in two different verb classes, and sets that beside
214 measured miss-you pages whose median letter is 88 words.

---

## Phase 3 — Sources, and what each actually says

### CNRTL / TLFi — `https://www.cnrtl.fr/definition/manquer`

The single best source on this query. State-funded (ATILF / CNRS / Université de
Lorraine). **Method note:** the portal is now a Vue single-page app and the HTML at
that URL is an empty shell; the entry was read from the portal's own public
endpoint `https://www.cnrtl.fr/api/word/manquer/verbe`, which returns the TLFi,
Académie 9e/8e/4e, Littré, DMF, etymology, synonyms and conjugation sections as one
document. The URL cited in the post is the human-facing one, which renders the same
text in a browser.

Verbatim, TLFi entry MANQUER:

- Structure: `I. — [Idée d'absence] A. — **Manquer à qqc./à qqn.** [Le suj. désigne
  ce qui est absent et qui serait nécessaire, souhaitable]`
- The affective sense, I.A.3: `**Faire cruellement défaut sur le plan affectif.
  Manquer à qqn.**`
- Its first illustration: `Tu me manques essentiellement, et pourtant je ne puis me
  repentir de ne pas t'avoir amenée` (Michelet, *Journal*, 1834, p. 750). The exact
  phrase, dated, in a national dictionary.
- Header gloss for the verb: `Faire défaut; être absent là où on devrait être, ou
  être en quantité insuffisante; être en moins dans un ensemble.`
- IPA `\mɑ̃.ke\`.

Etymology section, verbatim in part:

- `I. Intrans. 1. 1546 «faire défaut» (en parlant d'une personne) (Rabelais, Tiers
  Livre, chap. 41…)`
- `II. Trans. indir. A. Manquer à + subst. 1. 1563 «faire défaut à» (quelqu'un, en
  parlant d'une chose) (R. Belleau, La Reconnue, II, 371 ds IGLF)`
- `III. Trans. … 2. 1661 «ne pas réussir à rencontrer» (quelqu'un) (Molière, Les
  Fâcheux)`
- `Empr. à l'ital. mancare «faire défaut» … dér. de manco «absent, perdu; privé d'un
  bien matériel ou moral», du lat. mancus «mutilé, estropié; défectueux, incomplet»
  (cf. manchot).`

Conjugation section (indicatif présent, with IPA): `je manque \ʒə mɑ̃k\`,
`tu manques \ty mɑ̃k\`, `il/elle/on manque`, `nous manquons \nu mɑ̃.kɔ̃\`,
`vous manquez \vu mɑ̃.ke\`, `ils/elles manquent \mɑ̃k\`. Three cells share one
pronunciation.

### Académie française, 9e édition — `https://www.dictionnaire-academie.fr/article/A9M0575`

Article id located by scanning `/article/A9M0520`–`A9M0600`; the site's search route
is JS-driven and returns no server-rendered links. Verbatim:

- `MANQUER … verbe intransitif et transitif. Étymologie : xvie siècle. Emprunté de
  l'italien mancare, de même sens.`
- `I. Verbe intransitif. A. Faire défaut. … 3. **Manquer à quelqu'un**, faire défaut
  à la personne, aux personnes à qui on serait nécessaire.`
- `▪ En parlant d'une personne. **Ses amis lui manquent. Vous nous avez bien manqué
  aujourd'hui, nous avons déploré votre absence.**`

So the Académie files the "I miss you" sense under the **intransitive** verb, and
its own paraphrase of the feeling is *déplorer l'absence de quelqu'un*.

### Larousse — `https://www.larousse.fr/dictionnaires/francais/manquer/49234`

(The id 49386 is `marchantiale`; 49234 is the real one, reached by following
`/dictionnaires/francais/manquer`.) Verbatim:

- `manquer verbe intransitif (italien mancare, de manco, défectueux, du latin
  mancus)`
- `manquer **verbe transitif indirect** … 3. **Créer un vide, un manque par son
  absence : Ses enfants lui manquent.**`

**The two reference dictionaries disagree on the verb class for the same sense** —
Académie: intransitive; Larousse: transitif indirect; TLFi's etymology files
*manquer à + subst.* under `Trans. indir.` while its body treats it under
`[Idée d'absence]`. That disagreement is printable and no competing page notes it.

### Figura, "Dative Experiencer Psych Verbs in Old French – The Role of the Preposition *à*" (2026)

`https://edizionicafoscari.it/it/edizioni/libri/978-88-6969-962-7/dative-experiencer-psych-verbs-in-old-french-the-r/`
In *Psych Predicates in Romance Languages*, LiVVaL 8, Edizioni Ca' Foscari — Venice
University Press. Peer-reviewed, open access, CC BY. Submitted 2025-03-14, accepted
2025-11-17, **published 2026-04-29**. Full book PDF fetched and read (pp. 229–258),
not just the abstract.

What it actually says, used for the terminology check:

- It works on "Belletti and Rizzi's 3rd class … where the dative object is the
  Experiencer and the nominative subject encodes the Stimulus" (p. 229–230). That
  description fits `tu me manques` exactly.
- The five verbs it analyses are **chaloir, convenir, estovoir, faillir, loisir**.
  `manquer` is **not** among them — and could not be, because CNRTL dates the verb
  into French at 1546, after the Old French period.
- Conclusion, verbatim: `Consequently, à cannot be considered a reliable dative
  marker in Old French.`

### Tatoeba — attestation instrument (cap-exempt per `verify.config.json`)

Every French line printed in the post carries an id from
`tatoeba.org/en/api_v0/search?from=fra&to=eng`:

| French | English gloss on Tatoeba | id | corpus hits |
|---|---|---|---|
| Tu me manques. | I miss you. | 3124 | 46 |
| Vous me manquez. | I miss you. / I miss you guys. | 385358 | 29 |
| Il me manque. | I miss him. | 479787 | 22 |
| Elle me manque. | I miss her. | 2003446 | 12 |
| Ils me manquent. | I miss them. | 2089407 | 5 |
| Tu nous manques. | We miss you. | 4777511 | 8 |
| **Je te manque.** | **You miss me.** | 2089526 | 5 |
| Tu me manques beaucoup. | I miss you very much. | 9080 | 4 |
| Tu me manques tellement. | I miss you so much. | 1186068 | 4 |
| Tu me manques énormément. | I miss you dearly. | 397212 | 1 |
| Tu me manques déjà. | I miss you already. | 2482558 | 3 |
| Tu me manquais. | I missed you. | 11916214 | — |
| Tu me manqueras beaucoup. | I'll miss you very much. | 1243521 | — |
| Tu nous manqueras. | We'll miss you. | 4750876 | — |

### Entity disambiguation — `https://fr.wikipedia.org/wiki/Tu_me_manques`

One Wikipedia link, entity only, not counted as research. Q67960905: *Tu me
manques* is a **2019 Bolivian romantic drama** written and directed by Rodrigo
Bellott, Bolivia's entry for Best International Feature at the 92nd Academy Awards.

---

## Phase 3b — prompt claims checked before building on them

Per BRIEF §0. Three load-bearing claims in the task prompt were tested.

1. **"A Harlan Coben Netflix series called *Tu me manques* contaminates the French
   head term." — FALSE.** The Coben Netflix adaptation is **Missing You** (2025),
   `en.wikipedia.org/wiki/Missing_You_(2025_TV_series)`; the API reports it has **no
   French-language Wikipedia article** (`prop=langlinks&lllang=fr` returns none).
   The article actually titled *Tu me manques* on both fr. and en.wikipedia is the
   2019 Bolivian film, Q67960905. The contaminating entity is real; the brief named
   the wrong one. Corrected in the post.

2. **"`tu me manques` = 'you are missing FROM me'." — WRONG PREPOSITION.** Both the
   prompt and SubhSandesh's own live hub print the "from me" gloss. The dictionaries
   are unambiguous that *à* marks the person who suffers the lack, not a place:
   Académie, "faire défaut **à** la personne … **à qui** on serait nécessaire";
   Larousse, "créer un vide … par son absence"; TLFi's usage note, "[+ compl. prép.
   désignant la pers. … qui souffre de l'absence]". The literal reading is
   "you are lacking **to** me". Corrected in the post.

3. **"dative experiencer" vs *manquer à* + indirect object — PROMPT'S CAUTION WAS
   RIGHT, and the answer is: call it what the dictionaries call it.** No French
   dictionary entry for this verb uses the term. Académie: "Manquer à quelqu'un",
   under the intransitive verb. Larousse: "verbe transitif indirect". TLFi:
   "Trans. indir. Manquer à + subst." The term *dative Experiencer* is a live label
   in Romance generative syntax (Belletti & Rizzi's third class) and it does describe
   the argument structure — but it is a syntactician's category, not a lexicographic
   one, `manquer` is not among the verbs Figura analyses, and Figura's own conclusion
   is that *à* "cannot be considered a reliable dative marker". The post prints
   *manquer à* + indirect object as the name, and reports the syntax term as a term
   rather than adopting it.

## Phase 3c — searches that returned nothing usable

`findpapers.mjs` (Crossref + Europe PMC, no WebSearch cost) on
`French psych verbs experiencer argument structure`,
`second language learners argument structure errors`,
`emotion verbs cross-linguistic`, and
`French manquer experiencer construction learners`.

Nothing open-access exists on the specific L2 error — English speakers producing
*je te manque* for "I miss you". Crossref returns adjacent work (Bordeaux 2018 on
French experiencer verbs and the Universal Freezing Hypothesis; Studies in Second
Language Acquisition on overpassivization) but none of it measures this error, none
is open access, and none mentions *manquer*. **So the post makes no claim about how
often learners get it wrong** — only that the reversed form is attested and means
the opposite. Naming the gap is the honest outcome.

## Phase 5 — targeting

- `categorySlug`: `miss-you-across-miles` (confirmed live in the Strapi categories
  endpoint, 2026-09-25).
- Slug free: `filters[slug][$eq]=i-miss-you-in-french` → `total: 0`. A
  `$contains=french` query over all live articles also returns 0 — there is no
  French post on the site.
- `templateUrls`: `/missyou-gf` (mandatory), `/hold-my-hand`, `/capsule`. All three
  are in `TEMPLATE_LINKS` and all returned 200.
- The alternative named with a reason is **`/hold-my-hand`**, and the reason is
  structural rather than decorative: French hands the action to the person who left,
  and so does that template — the recipient has to hold the screen for sixty seconds
  before the letter opens. It is the template-side analogue of the grammar the post
  is about, and it matches the one recipient-side number the platform has (1,434 hug
  taps across 138 of 214 pages).

## Phase 2b — against the live hub and the live siblings

- **Hub** `/blog/i-miss-you-in-different-languages` (fetched 2026-09-25): French gets
  one line in a 50+ language list — "French: Tu me manques (too muh mahngk)" — one
  FAQ, and one copy-paste example. The hub's FAQ prints the "missing from me" gloss
  and suggests adding *beaucoup*. It names no dictionary, no verb class, no
  attestation and no date. This post does not restate the hub's table; it supplies
  the layer underneath that one row, and corrects the preposition.
- **Siblings**: 81 live articles carry `miss` in the slug; none is French. Nearest
  are `i-miss-you-in-marathi`, `i-miss-you-in-tamil-words` and the hub itself.
  Language is one of the three never-duplicate axes in the BRIEF, so this is a new
  row, not a merge candidate.

## Phase 3d — caps

`node content/batches/2026-09-25-miss-you-30/capcheck.mjs` re-run immediately before
saving. Banned URLs: none used. Domains at cap 3: none. `doi.org` has one slot left,
so the Figura chapter is cited at its **publisher URL** rather than through the DOI
resolver. `cnrtl.fr`, `dictionnaire-academie.fr`, `larousse.fr` and
`edizionicafoscari.it` were each at zero posts in this batch. `tatoeba.org` is
cap-exempt.
