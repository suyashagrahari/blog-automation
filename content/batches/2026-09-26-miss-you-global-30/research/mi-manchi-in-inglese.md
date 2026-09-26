# Research brief — `mi-manchi-in-inglese`

- **Primary keyword:** `mi manchi in inglese`
- **Body language:** Italian (H1, all H2s, body prose, metaTitle, metaDescription, all FAQs)
- **Region:** `it-it` · **Tier:** `A-translate` · **Category:** `miss-you-across-miles`
- **Templates:** `/missyou-gf` (mandatory), `/streak`, `/templates`
- **Measured:** 2026-09-26

---

## 0. Framing claims in the task prompt — checked before anything was built

| Prompt claim | Verdict | Evidence |
|---|---|---|
| In *mi manchi* the person missed is the grammatical **subject** of *mancare*, *mi* an indirect object | **CONFIRMED** | Treccani, *mancare*, sense **1.c**, "Con il compl. di termine, in frasi quali *mi manchi*, *mi sei mancato*, *ci mancherai*". Wiktionary gives the literal gloss explicitly: *Ci manca molto* lit. "He **is missed by** us very much" |
| *mi manchi* vs *ti manco* "is the single most useful thing on the page" | **REJECTED for this row** | It is the thesis of the **already-written** English sibling `i-miss-you-in-italian` (its H2: *"Ti manco is a real sentence. It means the opposite."*) and of the French twin `tu-me-manques-en-anglais` (H2: *"« Je te manque » dit exactement le contraire"*). My reader is a **native Italian**; they do not confuse *mi manchi* with *ti manco*. Writing that as my spine would have produced a triplet. **Re-angled** — see §0b |
| Agreement: the verb agrees with the person missed | **CONFIRMED and printed** | Treccani headword conjugation "(io manco, tu manchi, ecc.)" + Wiktionary auxiliary table + 278 attested Tatoeba sentences, §3 |
| *mancare* has other senses (lack, be absent, fail, die) | **CONFIRMED, all four** | Treccani 1.a (quantity), 1.c (absence **and** the death euphemism "è mancato all'affetto dei suoi cari"), 2.a/2.b (be without / fail in a duty), **3. tr. "Fallire: m. il colpo… m. la coincidenza, perderla"** |
| Register: *mi manchi* vs *sento la tua mancanza* | **CONFIRMED in the dictionary, ABSENT from the corpus** | Treccani *mancanza* 1.b attests "abbiamo sentito molto la tua mancanza". Tatoeba ita→eng: `="sento la tua mancanza"` = **0 sentences**, `="sentire la mancanza"` = **0**. Reported as absence of coverage, not inflated |
| Instruments: Treccani, Accademia della Crusca, Vocabolario Treccani *mancare*, Wiktionary, Tatoeba | **4 of 5 as given; Crusca needed a different host** | §1 |
| `capcheck.mjs` mis-pathed and fixed | **CONFIRMED fixed** — ran clean, all cap lists empty, banned list empty | |
| `serp-ddg.mjs` timing out, `serp.mjs` 429 | **BOTH CONFIRMED independently today** | §2 |
| Inventory weakness scores for non-English rows are US-served artefacts | **Accepted, not relied on.** No inventory number is used anywhere in this post | |

**One terminology correction.** The prompt calls *mi* a "dative". Italian school and
academic grammar calls it a **complemento di termine**; Treccani's own entry uses that
exact phrase. "Dative" is a correct typological label for the Romance psych-verb class
but is not the label any Italian dictionary uses, so the body says *complemento di
termine* and reserves "dative" for the cross-language comparison. No grammar was
invented; every label in the post comes from a quoted entry.

### 0b. The split, and why this is not a twin

Three posts now touch *mi manchi*. The direction of travel is what separates them:

| Post | Reader | Direction | Owns |
|---|---|---|---|
| `i-miss-you-in-italian` (**written**, 2026-09-25 batch, English body, 1,793 words) | English speaker | EN → IT | *mi manchi* vs *ti manco*; the paradigm as an Italian lesson; the *manco¹* "maimed/left-handed" etymology; the Spanish *me haces falta* comparison |
| `tu-me-manques-en-anglais` (**written**, this batch, French body, 1,800 words) | French speaker | FR → EN | Larousse/Académie/TLFi label disagreement; 90 French translations; *tu* vs *vous* collapsing into "you" |
| **this post** | **Italian speaker** | **IT → EN** | What the Italian must *produce in English*: the calque that yields "you miss me"; **English "miss" is one verb where Italian has three**; *mi manca* → four different English sentences; the Crusca's silence; the 278-sentence count |

**ABORT NOT TRIGGERED.** The written Italian sibling is an English-language page on
the reverse question, on a different SERP, and does not answer "what do I type in
English". It is cross-linked, as is the French twin. But the overlap is real at the
level of the *facts about mancare*, and that is declared in `structuralLimitations`.

---

## 1. Instrument verification (done BEFORE any section was built)

| URL | Status | Note |
|---|---|---|
| `https://www.treccani.it/vocabolario/mancare/` | **200** | Full entry read: 1.a–1.d, 2.a–2.c, **3. tr.**, participles. This is the load-bearing source |
| `https://www.treccani.it/vocabolario/mancanza/` | **200** | 1.b is the *sentire la mancanza* sense, and also covers the dead ("la sua improvvisa mancanza") |
| `https://en.wiktionary.org/wiki/mancare` | **200** (API) | Eleven numbered senses, each tagged with its auxiliary, and two explicit `lit=` glosses |
| `https://tatoeba.org/en/api_v0/search` | **200** | `from=ita&to=eng`, exact phrase as `="…"`. Paging count is the reportable number |
| `https://accademiadellacrusca.it/it/ricerca?query=mancare` | **500** | Prompt's instrument. Their site search is **still broken** — `?key=` returns an empty results page, `?search_api_fulltext=` returns 500, `/it/search` 404. Same failure the 2026-09-25 Italian sibling recorded |
| **`https://www.lessicografia.it/Controller?lemma=MANCARE`** | **200** | **The Crusca obtained by another route.** This is the Accademia's own *Lessicografia della Crusca in rete*; the 4th edition (1729–1738) entry MANCARE, vol. 3, pp. 139–140. The sibling reported this host as 404 — it 404s on `ricerca_lemma.jsp`, which is the wrong endpoint; `Controller?lemma=` serves |
| `https://www.mdpi.com/2226-471X/11/3/36` | not used | OA per Unpaywall, but **already cited by the written Italian sibling**. Dropped per the BRIEF's prefer-untouched rule |
| `https://api.unpaywall.org/v2/10.1191/026765898668810271` | **200, is_oa: false** | *The L2 acquisition of dative experiencer subjects*, Second Language Research 1998 — perfectly on-topic and **not open access**. Cut rather than cited from its title |

**Crusca finding (new, and nobody on the SERP has it).** The 4th-edition entry MANCARE
carries ten senses: *non essere a sufficienza*; §I *venir meno*; §II *da me non manca*;
§III *restar di fare, desistere*; §IV *iscemare, diminuire*; §V *mancar di fede* — "Romper
la fede, Non attenere i patti"; §VI *mancar di speranza*; §VII *mancar d'animo*;
§VIII *mancar poco*; §IX *difettare, far mancamento*. **None of them is the affectionate
"a person is missed" sense.** The nearest thing to *mancarti* in the 1729–38 Crusca is
§V, "to fail you" — Machiavelli, *Clizia* 1.3: "mia madre, e io non siamo per mancarti."
Treccani files that same "venire meno alla fiducia" meaning **inside sense 1.c, next to
*mi manchi***, with Manzoni's "Lucia, volete voi mancarmi ora?" Two independent entries,
three centuries apart, put "I miss you" and "I will not fail you" in the same box.

---

## 2. SERP — measured, and by which route

**Both scripted routes failed, exactly as `knownIssues` predicted.**

- `node scripts/serp-ddg.mjs "mi manchi in inglese" --region it-it --n 10` →
  `ConnectTimeoutError: Connect Timeout Error (attempted address: html.duckduckgo.com:443, timeout: 10000ms)`
- `node scripts/serp.mjs "mi manchi in inglese" --region it-it --n 10` →
  `Error: brave rate-limited (429) after 4 attempts`

**Route actually used, stated plainly: Bing `mkt=it-IT&cc=IT&setlang=it`, driven through
the operator's own Chrome (PolterTab), 2026-09-26.** Google was tried first
(`google.it/search?hl=it&gl=it`) and served a `/sorry/index` interstitial on two
attempts, so no Google SERP was obtained and none is claimed. A sandbox `fetch` of the
same Bing URL returned a JavaScript shell with no `b_algo` nodes — the real browser was
required. Mojeek and Ecosia both returned 403 to the sandbox. **This is an in-market
Bing SERP, not a Google SERP, and the post says so.**

### Top 10, `mi manchi in inglese`, Bing it-IT, 2026-09-26

| # | Domain | Page type | Weak? |
|---|---|---|---|
| 1 | context.reverso.net | machine-aligned translation-memory dump | **yes** |
| 2 | it.bab.la | bilingual dictionary aggregator | **yes** |
| 3 | wordreference.com | dictionary + forum threads | borderline — real lexicography, no article |
| 4 | frasario.it | "40 Frasi per dire Mi manchi in Inglese" listicle | **yes** |
| 5 | frasimania.it | near-identical listicle to #4 | **yes** |
| 6 | context.reverso.net | second Reverso URL, `mi... mi manchi` | **yes** |
| 7 | wordy.info | app-blog, machine-localised | **yes** |
| 8 | dizionario.reverso.net | third Reverso URL | **yes** |
| 9 | lovelanguages.io | listicle (Vercel bot-wall to a scripted fetch) | **yes** |
| 10 | dizionario.reverso.net | fourth Reverso URL | **yes** |

**Weak count: 9 of 10.** Four of the ten slots are a single domain (Reverso). Zero
results are Italian editorial. **Not one of the ten names Treccani, the Crusca,
Zingarelli, De Mauro or Devoto-Oli.** No result is an article written for an Italian who
has to produce an English sentence; #7 is literally a page about going the *other* way
("how-to-say-i-miss-you-in-italian" in its URL) machine-localised into Italian and
ranked on an Italian query.

**GATE 4: PASS — proceed.** This is the opposite of the `D-listicle` situation the BRIEF
warns about. It is a dictionary-scraper SERP with no incumbent authority to displace.

### Checkable error in a ranking result

**#4 `frasario.it` and #5 `frasimania.it` both print the same mistranslated pair:**

> EN: *"I wonder if you miss me as much as I miss you."*
> IT: *"Vorrei mancarti tanto quanto tu manchi a me."*

Two faults, both checkable against any dictionary:

1. **"I wonder if" is not *vorrei*.** *To wonder* is "chiedersi, domandarsi"; *vorrei* is
   "I would like / I wish". The English sentence speculates; the Italian one desires.
   A reader using this page as a production model learns that "I wonder" = *vorrei*.
2. The Italian half is not a translation of the English half at all — it is a different
   proposition ("I'd like to be missed by you as much as you are missed by me").

**And the two pages carry it identically** — #4 and #5 are duplicates of each other, so
the same error occupies two of the ten organic slots. Verified by fetching both pages
on 2026-09-26; the string appears in both.

`wordy.info` (#7) gets the grammar right but its own FAQ is circular untranslated
template output: *"'Mi manchi' significa 'mi manchi' (tu mi manchi). 'Ti manco'
significa 'ti manco'"*. Noted, not cited — a tautology is not a checkable error.

---

## 3. Tatoeba — the count

`tatoeba.org/en/api_v0/search`, `from=ita&to=eng&trans_to=eng`, **exact-phrase** (`="…"`),
all counts read off `paging.Sentences.count`, measured **2026-09-26**.

| Italian phrase | Sentences | English rendering in the aligned translations |
|---|---|---|
| `mi manca` | **157** | "I miss you / him / it / her" — the form is ambiguous in Italian, forced in English |
| `mi mancano` | **38** | "I miss them" |
| `mi manchi` | **32** | "I miss you" and variants — **all 32 inspected one by one** |
| `mi mancate` | **23** | "I miss you" (plural addressee; English does not mark it) |
| `mi sei mancato` | **17** | "I missed you / I've missed you" |
| `mi mancherai` | **11** | "I'll miss you / I'm going to miss you" |
| `ci manchi` | **5** | "We miss you" |
| `ti manco` | **3** | "you miss me" — every one inverts the pronouns |
| `vi manco` | **0** | — |
| `sento la tua mancanza` | **0** | — |
| `sentire la mancanza` | **0** | — |
| `mi manchi da morire` | **0** | — |

**The headline number: 278 attested sentences across the six first-person forms
(157+38+32+23+17+11), and not one English translation keeps the Italian shape.** Every
single one makes the speaker the subject. Zero renderings of the type "you are missing
to me" / "you are lacking to me" exist in the corpus. The literal gloss is a teaching
device, not English anyone writes.

**The ratio.** 278 sentences in the *mi manchi* direction against **3** in the *ti manco*
direction — roughly 93:1. The reversal that every competing page dramatises is, in
attested usage, a rounding error.

**Two absences, recorded rather than smoothed over.** *Sento la tua mancanza* and
*mi manchi da morire* — both perfectly ordinary Italian, both in the SERP's listicles —
have **zero** sentences in Tatoeba. Treccani independently attests the first
(*mancanza* 1.b, "abbiamo sentito molto la tua mancanza"), so the gap is the corpus's,
not the language's. The post says exactly that and claims nothing about frequency from
a zero.

**Sample IDs cited in the post:** #4378 (*Mi manchi.* → "I miss you / I'm missing you /
I missed you"), #479785 (*Mi manca.* → "I miss you | I miss him | I miss it | I miss
her" — four English sentences, one Italian), #1237920 (*Mi sei mancato!* → "I missed
you!"), #3247477 (*Ci manchi.* → "We miss you."), #3869907 (*Non ti manco per niente?*
→ "Do you miss me at all?"), #11891202 (*Mi manchi ancora.* → "I still miss you").

### The Italian/French difference, measured

Cross-linking `tu-me-manques-en-anglais` required one verifiable difference, so it was
measured rather than asserted: **the two languages take different auxiliaries in the
past.** Italian *mi sei mancato* takes **essere** — Treccani heads the whole of sense 1
"intr. (aus. essere)" — with 17 attested sentences. French *tu m'as manqué* takes
**avoir**, with 14. The English output is identical in both ("I missed you"), which is
the point: English has no auxiliary choice to get wrong. Counts also run parallel:
`tu me manques` 37 vs `mi manchi` 32; `je te manque` 1 vs `ti manco` 3.

---

## 4. Sources, and the ones cut

**Registered (6):**

1. Treccani, *Vocabolario*, **mancare** — the spine. Senses 1.c and 3. Cap-exempt host.
2. Treccani, *Vocabolario*, **mancanza** — sense 1.b, the register alternative. Cap-exempt.
3. Wiktionary, **mancare** — eleven senses with per-sense auxiliary, and the two `lit=`
   glosses. Cap-exempt.
4. Tatoeba, sentence #4378 and the counts above. Cap-exempt.
5. **Lessicografia della Crusca in rete**, MANCARE, 4th ed. (1729–1738), vol. 3
   pp. 139–140. `lessicografia.it` is **not** on the batch's cap-exempt list although
   `accademiadellacrusca.it` is — it is the same institution's own corpus. Flagged in
   `structuralLimitations`; first use in this batch either way.
6. **PNAS 2026** — Davydova et al., *Affect labeling down-regulates amygdala only in a
   dominant native language*, PNAS 123, doi 10.1073/pnas.2603126123, PMC13552847.
   Peer-reviewed, open access. **Abstract only** — the PDF does not parse in this
   environment, recorded in the audit. N = 151 across two bilingual groups; unbalanced
   bilinguals showed reduced amygdala activity when labelling an emotion **only in the
   dominant native language**. This is the evidence behind the post's "write it in
   Italian, gloss it in English" recommendation, and it is a Spanish–English /
   Spanish–Catalan study, **not an Italian one**, which the body states.

**Cut, and why:**

- **MDPI, *Languages* 11(3):36**, Stortini, dative experiencer psych-verbs IT/ES — open
  access and on-topic, but **already cited by `i-miss-you-in-italian`**. Cut per the
  prefer-untouched rule.
- **Vietri, *The Variety of Syntactic Patterns of Dative Experiencer Verbs in Italian***
  — Unpaywall `is_oa: false`, and also already used by the same sibling. Cut twice over.
- **Bianchi, *The L2 acquisition of dative experiencer subjects*, Second Language
  Research 1998** — the single most on-topic paper found. `is_oa: false`. Cut rather
  than cited from a title.
- **Second Language Research 2007, Italian accusative and dative clitics** (OA via HAL)
  — about acquiring *Italian* clitics, i.e. the wrong direction for this reader. Cut on
  the subject test rather than padded in.
- **Reverso, bab.la, WordReference, frasario, frasimania, wordy, lovelanguages** — all
  competitors. Cited nowhere; #4/#5 are *described* in the error section without a link,
  which is the zero-competitor-links rule.

**Lines cut from the draft:**

- "*mi manchi da morire* → 'I miss you to death'" — **cut**. 0 corpus sentences either
  side, and "to death" is not idiomatic English in this frame. Replaced with "I miss you
  so much", which is attested twice (*Mi manchi assai!*, *Mi manchi così tanto*).
- A claim that Italians say "you miss me" when writing English — **softened**. The
  calque is predicted by the structure and the *ti manco* gloss makes the output
  transparent, but no learner-error corpus was obtained to measure the rate. The post
  states it as what the word-for-word mapping *produces*, never as a measured error rate.
- Any British/American English split — **cut**, no instrument measured it.
- Any claim about Google's SERP or an AI Overview — **cut**, Google was never obtained.

---

## 5. First-party facts and the disclosures

Collision counted across all 54 posts of the 2026-09-25 batch. The three least-used
lines were chosen deliberately:

| Line | Used in | Chosen |
|---|---|---|
| Median first-save-to-last-edit gap, 2.6 h, n=214 | **20 / 54** | ✔ (first 150 words) |
| 88.8% published and shared (190 of 214) | **22 / 54** | ✔ (first 150 words) |
| 86.4% carry at least one written memory (185 of 214), 4.5 avg | **27 / 54** | ✔ |
| 1,434 hug taps | 39 / 54 | avoided |
| 43.5% password | 48 / 54 | avoided |
| 214 pages / 4.1% | 48 / 54 | avoided as a headline; the n is stated for context |
| Median letter 88 words | **53 / 54** | avoided |

**Differentiation is thin and it is declared in the audit.** The best available pair is
still used by a fifth of the sibling batch. What is not shared is the *framing*: these
numbers are used here to answer "how long does it take to write one of these", not
"what do senders choose".

Four caveats, all in Italian body prose, none confined to the audit: pickers-with-
defaults; `viewCount` is page views not unique visitors; n = 214 over two months so no
seasonal reading; and **the database is not segmented by language or country — no figure
here is Italian — and it records which TEMPLATE was opened, never who received it.**

## 6. Product disclosure

`/missyou-gf` is, at `app/lib/prompt.ts:44`, *"'I miss you' page for a girlfriend/partner"*
— read at source, not taken from the prompt. Two mismatches for this reader, both stated
in Italian body prose: **the interface is in English**, and **the template is built for a
partner**, so it is the wrong page for a reader missing a parent, a sibling or a friend.
For those, `/streak` is offered as the genuine alternative with the reason (it is
reciprocal and undated — one tap a day from each side — so it suits a friendship or a
family tie that has no romantic frame), and `/templates` for browsing. Nothing about
commercial conditions is claimed anywhere; `pricecheck-intl.mjs` run clean on the slug.
