# Research brief — `tu-me-manques-en-anglais`

- **Primary keyword:** `tu me manques en anglais`
- **Body language:** French (H1, all H2s, body prose, metaTitle, metaDescription, all FAQs)
- **Region:** `fr-fr` · **Tier:** `A-translate` · **Category:** `miss-you-across-miles`
- **Templates:** `/missyou-gf` (mandatory), `/streak`, `/templates`
- **Measured:** 2026-09-26

---

## 0. Framing claims in the task prompt — checked before building

The prompt asked me to verify its own angle. Result:

| Prompt claim | Verdict | Evidence |
|---|---|---|
| *Tu me manques* puts the missed person in subject position, *me* is an indirect object | **CONFIRMED** | Larousse, Académie française 9e, TLFi — all three, see §2 |
| "You are missing from me" is the literal shape | **CONFIRMED in sense, with a caveat** | TLFi glosses *manquer* as *"Faire défaut; être absent là où on devrait être"*. "Missing **from** me" is a gloss, not a translation — no attested English translation uses it (0 of 90, §3) |
| *Je te manque* means the opposite of what a beginner expects | **CONFIRMED and attested** | Tatoeba #2089526 *Je te manque.* → #9956793 *You miss me.* |
| English "I miss you" covers both *tu* and *vous* | **CONFIRMED and attested** | Tatoeba #3124 (*Tu me manques.*) and #385358 (*Vous me manquez.*) both link to the **same** English sentence #1308 *I miss you.* |
| Dictionary instruments: `larousse.fr`, `cnrtl.fr`, `dictionnaire-academie.fr` | **3 of 4 resolve; 1 prompt URL wrong** | see §1 |
| `academie-fr.fr` | **WRONG — does not resolve** (DNS failure). The Académie's sites are `academie-francaise.fr` and `dictionnaire-academie.fr` | |
| French *message/sms* cluster held by Lovebox / Flexilivre | **NOT TESTED** — those are a different keyword cluster (`message tu me manques`, a sibling row). Neither appears on **my** measured SERP, so I make no claim about them in the post |
| Sibling `mi-manchi-in-inglese` should be cross-linked | **NOT POSSIBLE** — `blogs/` was empty at write time (2026-09-26 18:40 and again at emit). No cross-link written; see `structuralLimitations` |

**One terminology correction to the prompt.** The prompt said "the role of *me*" is a
"dative". In French school and academic grammar the term is **complément d'objet
indirect (COI)**; "dative" is a typological label, correct for the Romance
psych-verb clitic class (and used as such by the peer-reviewed source in §4) but
*not* the label any French dictionary uses. I use COI in the body and reserve
"dative" for the cross-linguistic comparison, where the cited paper uses it.

---

## 1. Instrument verification (done BEFORE any section was built on them)

| URL | Status | Note |
|---|---|---|
| `https://www.cnrtl.fr/definition/manquer` | **200** | Portail lexical is now a JS SPA — the HTML shell is 914 bytes. The data is served by `https://www.cnrtl.fr/api/word/manquer/verbe` (206 KB JSON), carrying TLFi, Académie 9e, Académie 8e, Littré, DMF, etymology, synonyms, Wiktionnaire |
| `https://www.larousse.fr/dictionnaires/francais/manquer/49234` | **200** | Correct entry — "manquer, être manqué, se manquer" |
| `https://www.larousse.fr/dictionnaires/francais/manquer/49348` | **200 but WRONG WORD** | This ID serves **`maraud`**, not `manquer`. A guessed Larousse ID is not safe; IDs must be harvested from the page's own links |
| `https://www.dictionnaire-academie.fr/article/A9M0575` | **200** | **`manquer`, 9e édition.** Found by probing the `A9M####` range — `A9M0742` (a guess) is a 404. Site is a JS SPA with no public search API |
| `https://tatoeba.org/en/api_v0/search` | **200** | Works; `from=fra&to=eng`, phrase in double quotes for exact-phrase |
| `https://academie-fr.fr/` | **DNS FAILURE** | Prompt URL. Does not exist |

---

## 2. The grammatical analysis — three authorities, one analysis, three labels

This is the post's spine, and the genuinely new observation is that the three
standard French references **agree on the analysis and disagree on the label**.

**Larousse** (`/manquer/49234`) files it under **`manquer` verbe transitif indirect**,
sense 3: *"Créer un vide, un manque par son absence : **Ses enfants lui manquent.**"*

**Académie française, 9e édition** (article `A9M0575`) heads the entry
*"MANQUER verbe intransitif et transitif"* and files it under
**`I. Verbe intransitif. A. Faire défaut. 3. Manquer à quelqu'un`**, *"faire défaut à
la personne, aux personnes à qui on serait nécessaire"*, with the sub-rubric
*"**En parlant d'une personne. Ses amis lui manquent.**"*

**TLFi** (via CNRTL) gives the affective sense as
*"**Faire cruellement défaut sur le plan affectif. Manquer à qqn.**"* and attests it
with **Michelet, *Journal*, 1834, p. 750: "Tu me manques essentiellement."**

So: *transitif indirect* (Larousse) vs *intransitif* (Académie). What none of them
calls it is **passive** — which matters, see §6.

**The decisive diagnostic, and it is checkable by any reader.** French `me/te/nous/vous`
are identical in direct and indirect function, so first and second person prove
nothing. The **third person** does: both Larousse and the Académie print the
experiencer as **`lui`** ("Ses enfants **lui** manquent", "Ses amis **lui** manquent"),
never `le`/`la`. `lui` is the indirect form. The experiencer is therefore an
indirect complement and the missed person is the subject — settled, from two
independent dictionaries, without me asserting anything.

**Second sense, same shape, opposite meaning — a real ambiguity.** Académie 9e also
gives *"Manquer à quelqu'un, ne pas lui montrer les égards qu'on lui doit. **Il nous a
gravement manqué.**"*, and TLFi has it as *"Manquer à qqn (envers qqn). Ne pas se
conduire à son égard comme il le faudrait."* Larousse marks the same sense
*Littéraire* (v.t. ind., sense 5). So *il m'a manqué* is genuinely ambiguous between
"I missed him" and "he was disrespectful to me". No page on the measured SERP mentions
this.

---

## 3. Tatoeba — the count

Method: `tatoeba.org/en/api_v0/search?from=fra&to=eng&query="<phrase>"`, all pages
collected, English translations tallied. Measured 2026-09-26.

**`"tu me manques"` — 46 French sentences, 90 English translations:**

- **86 of 90** use a form of the English verb *miss*
- **4 of 90** use *long for* (`I long for you!` ×2, `I longed for you deeply.` ×2)
- **0 of 90** preserve the French shape — no "you are missing from me", no passive
  "you are missed", nothing with the missed person as subject
- **88 of 90** have *I* within the first four words: the translator moves the speaker
  into subject position, every time

**`"je te manque"` — 5 French sentences, 7 English translations:** 5 of 7 have *you*
as subject. Flagship pair: **#2089526 *Je te manque.* → #9956793 *You miss me.***

**`"vous me manquez"` — 29 French sentences.** Flagship pair: **#385358 *Vous me
manquez.* → #1308 *I miss you.*** — and **#3124 *Tu me manques.* → #1308 *I miss
you.*** The two French registers are linked to the **same English sentence id**. That
is the register point, attested rather than asserted.

---

## 4. SERP — measured, and how

**The prescribed instrument failed.** `node scripts/serp-ddg.mjs "tu me manques en
anglais" --region fr-fr --n 10` returned *"no results parsed"* on four attempts, then
hard connect-timeouts to `html.duckduckgo.com` and `lite.duckduckgo.com` on ten more.
Direct sandbox requests confirmed the cause: DuckDuckGo returns **HTTP 202 with an
anomaly/challenge page** (14 KB, no `result__a`), then stops accepting connections from
this IP entirely. Six agents share the address. Also blocked: Mojeek (captcha),
Ecosia (403), Brave (429), Qwant (DataDome interstitial), Startpage (Anubis
proof-of-work challenge, difficulty 6), Yep (403), Bing RSS (0 items), public
SearXNG instances (returned results for "tu"/"en" as separate tokens — garbage).

**What I did instead: read the live Google SERP in the user's own browser at
`google.fr/search?q=tu+me+manques+en+anglais&hl=fr&gl=fr&pws=0`.** This is a
**genuinely market-served fr-FR SERP** — better than the DDG proxy the brief
prescribes, not worse. No US-served caveat applies. Measured 2026-09-26.

### SERP features above the organic results

- **Google Translate widget occupies the top of the page**, French→English,
  `tu me manques` → `I miss you`. The query is answered inline before any result.
- **No AI Overview was served.** Google returned *"Aucun Aperçu IA n'est disponible
  pour cette recherche"* / *"Impossible de générer un Aperçu IA pour le moment."*
- **"Autres questions" (People Also Ask), 4 questions** — these are the fan-out
  sub-queries and they drove the H2 and FAQ set:
  1. *Comment dit-on en anglais "il me manque" ?*
  2. *Comment dit-on "tu me manques aussi" en anglais ?*
  3. *Comment dit-on "tu me manques beaucoup" ?*
  4. *Pourquoi dit-on "I miss you" ?*
  - PAA answer sources: Linguee, Glosbe, **Facebook (Tony's English Class)**,
    **TikTok (@etymocurieux)**, Reverso. Social video is inside the answer surface.

### Organic top 10 (8 results returned)

| # | Domain | Page type | Weak? |
|---|---|---|---|
| 1 | `linguee.fr` | Parallel-corpus translation aggregator (top example pair: *Tu me manques.* → *I'm missing you.*, from icc-icc.ca) | **Weak** |
| 2 | `thebigchallenge.com` | Editorial translation page, English-learning competition for French schools | Medium |
| 3 | `context.reverso.net` | Translation-example aggregator | **Weak** |
| 4 | `anglaisfacile.com` | Forum thread, "Meilleure réponse" dated 18 mai 2026 | **Weak** |
| 5 | `gymglish.com` | Product blog translation page (French course) | Medium |
| 6 | `fr.bab.la` | Dictionary aggregator | **Weak** |
| 7 | Quora (FR) | Q&A, *"Plus de 60 réponses · il y a 7 ans"* | **Weak** |
| 8 | YouTube | *"How to say 'MISS' in English"*, *"48,9 k vues · il y a 9 ans"* | **Weak** |

**Weak count: 6 of 8.** Three pure translation aggregators, two forum/Q&A pages (one
of them seven years old), one nine-year-old video.

### Gate 4 — verdict: **PROCEED**

Tier `A-translate` was correct. There is **no strong French editorial authority** in
the top 10 — no Larousse page, no Le Figaro Langue française, no Projet Voltaire, no
national publisher. The ground is exactly what the brief predicted: translation
aggregators and forums. The two medium results are both language-course product blogs
running the same play we are, and neither grounds its grammar in a named authority.

### What the incumbents actually do and do not do (measured, not assumed)

- **The inversion is NOT an unclaimed gap.** `anglaisfacile.com` states it in its best
  answer: *"la construction est inversée par rapport au français : I (sujet) = la
  personne qui ressent le manque"*. Quora states it: *"C'est l'inverse de ce que vous
  attendiez."* `thebigchallenge.com` states it: *"my parents miss me = je manque à mes
  parents"*. **Merely repeating "it's inverted" would be a sixth copy.**
- **What none of the eight does:** name a French grammatical authority; quote TLFi,
  Larousse or the Académie; give the `lui` diagnostic; mention the second,
  disrespect sense of *manquer à qqn*; count how the pair is actually translated;
  or address *tu* vs *vous* against English's single *you*.

### Checkable error found in a ranking result

**`gymglish.com`, "Tu me manques - English Translation" (organic #5), read 2026-09-26.**
The page states, verbatim:

> "Note that the French constructions with manquer are **passive**, and start with the
> person 'missed' (**indirect object**), and not the doing the 'missing'!"

Two errors in one sentence, both checkable against the dictionaries in §2:

1. **"passive" is wrong.** *Tu me manques* is an active present indicative. A French
   passive is *être* + past participle (*tu es manqué*), which means something else
   entirely. Académie 9e classes the verb here as **intransitif**; Larousse as
   **transitif indirect**. No authority calls it passive.
2. **The two roles are labelled backwards.** In *Tu me manques*, *tu* — the person
   missed — is the **subject**. The indirect object is *me*. The page says the
   construction "starts with the person 'missed' (indirect object)".

The page's own next line is correct (*"Son sourire nous manque. — Literally: Her smile
is missing from us"*), which shows the analysis is right and only the terminology is
wrong — a good-faith error, and exactly the kind a reader cannot catch alone.

Second, smaller, on the same page: *"Tu manques d'argent. **You need money.**"*
Larousse gives *manquer de* as *"Ne pas disposer de choses ou d'êtres en quantité
suffisante"* — "you lack money" / "you're short of money". "You need money" is a
different proposition.

**Not linked from the post** (zero competitor links). Named and quoted only.

---

## 5. Gap analysis and the angle

**Table stakes** (all 8 cover, so the post must too): the translation itself; the
inversion; *tu me manques beaucoup / aussi / déjà*.

**The gap:** nobody grounds the claim. The strongest page on this SERP is a forum best
answer, and the only page that tries formal terminology gets it wrong. Nobody counts
anything. Nobody touches *tu* vs *vous*.

**Angle, stated honestly:** this post wins by being the only page on this SERP that
names the three French authorities for *manquer à quelqu'un*, shows they agree on the
analysis while disagreeing on the label, proves the indirect complement with the
third-person `lui` test, counts 90 attested English translations of the pair on
Tatoeba (86 *miss*, 4 *long for*, **0** keeping the French shape), and corrects a
checkable grammar error in a top-10 result — grounded throughout in SubhSandesh's own
214-page `/missyou-gf` dataset.

---

## 6. Sources (5) — subject test, swap test, caps

| # | Source | Subject test | Swap test | Cap |
|---|---|---|---|---|
| 1 | **TLFi / CNRTL**, entry *manquer* — `cnrtl.fr` | Pass — the verb itself | Pass — French only | Cap-exempt instrument |
| 2 | **Larousse**, entry *manquer* (49234) — `larousse.fr` | Pass | Pass | 1st use in batch |
| 3 | **Académie française, 9e éd.**, article `A9M0575` — `dictionnaire-academie.fr` | Pass | Pass | Cap-exempt instrument |
| 4 | **Tatoeba**, sentences #3124 / #385358 / #1308 / #2089526 / #9956793 | Pass | Pass — these exact sentence ids are French-specific | Cap-exempt instrument |
| 5 | **Guajardo, G. (2021),** *Co-occurrence Strength and Transitivity Effects on Spanish Clitic Case Variation With Reverse-Psychological Predicates*, **Frontiers in Psychology** 12:712959, doi 10.3389/fpsyg.2021.712959, CC BY — via Europe PMC `PMC8330882` | Pass — the Romance psych-verb class *manquer* belongs to | Pass | Journal **Frontiers in Psychology**: `capcheck.mjs` shows 2 posts in the 09-25 sibling batch, 0 in this batch. Naming the journal so it is checkable by hand |

**Peer-reviewed + open-access requirement:** source 5 (CC BY). **Abstract only** —
the Europe PMC REST record's `abstractText` was read; the full text was not parsed.
Recorded in the audit.

**Generic context statistics: 0.** Wikipedia body links: **0** (QIDs appear only in
`structuredData.about/mentions` `sameAs`, verified against the Wikipedia API:
Académie française Q161806, Tatoeba Q495456, French language Q150).

**Considered and rejected:** *Psychological and health consequences of
difficult-to-translate concepts among immigrant older adults* (The Gerontologist,
2026, PMC13488542) — good subject fit but its evidence is about clinical
mistranslation among older immigrants in US healthcare, which I could not use without
stretching it to a claim it does not make. *The impact of emojis on perceived
responsiveness…* (PLOS ONE 2025, pone.0326189) — **already cited by
`say-i-miss-you-without-saying-it.json`** in the sibling batch, and `journals.plos.org`
is at cap 3. Dropped.

**Lines cut, and why** (the batch rule — record the cuts):

- *"Tu me manques" is literally "you are missing from me"* as a **translation**. Cut.
  It is a gloss; 0 of 90 attested translations use it. Kept only as an explanatory
  gloss, explicitly labelled as one.
- *"French is more romantic / more poetic than English here."* Cut — unsourceable,
  and TLFi's own gloss ("faire défaut") is unromantic.
- *"Most French learners get this wrong."* Cut — no measurement exists. Replaced with
  the Tatoeba counts, which are measured.
- *"Lovebox and Flexilivre hold this SERP."* Cut — prompt claim about a different
  keyword cluster; neither appears on the SERP I measured, so I state nothing.
- *"English once had this construction and lost it (methinks / it liketh me)."* Cut
  from the body as a **claim** — plausible and well known, but I found no open-access
  source I could verify within budget. The body says only what is checkable: that
  modern English's nearest mirror is the passive *you are missed*, and that English no
  longer distinguishes *thou* from *you*.
- The *Il m'a manqué* disrespect sense was kept (two dictionaries) but trimmed to two
  sentences, as it is a side road for this reader.

---

## 7. First-party data and its limits

From `facts-snapshot.md` (**not** `content/facts.md`). Five lines used, three inside
the first 150 words.

**All five mandatory disclosures are in French body prose, in the final H2, not only
here:**

1. City, background music and "together since" are **pickers with defaults** — I use
   none of them, and say why.
2. `viewCount` is **page views, not unique visitors**.
3. **n = 214 over two months** (template live 2026-07-28) — no seasonal claim.
4. **Nothing in the database is segmented by language or country.** No figure here is
   French. Stated plainly.
5. The database records **which template was opened, never who received it.**

**Differentiation is thin and I am saying so.** These twelve `/missyou-gf` lines are
shared by 54 sibling posts. I picked the least-collided set I could (median letter
length 88 words; 92.1% open-when; 86.4% memories; 28.0% reunion date; 13.6% voice
note) and built the comparison table around the *sender-chosen* fields specifically,
because that is the cut the caveat forces and most siblings do not make it. It is
still thin.

## 8. Product honesty

`/missyou-gf` is an **English-language page with English labels**, handed to a French
reader who has just asked how to say something in English. That is disclosed in French
body prose. The post says plainly that the interface will be in English, that the
letter field is where French can go, and that a reader who only wanted the translation
does not need the product at all. `/streak` is offered as the genuine alternative for
the long-distance reader (a daily two-person check-in rather than a one-off page), and
`/templates` for browsing. **No price claim of any kind** — `facts.md` Pricing is
empty; `pricecheck-intl.mjs` run before emit.
