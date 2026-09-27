# Research brief — `tu-me-manques-aussi`

- **Primary keyword:** `tu me manques aussi`
- **Region:** `fr-fr` · **Body language:** FRENCH · **Tier:** `A-reply` (lane: the reply)
- **Category:** `miss-you-across-miles` · **Templates:** `/missyou-gf` (mandatory), `/streak`, `/templates`
- Written 2026-09-27.

---

## 0. Framing claims in the task prompt, checked

BRIEF §0 says treat the orchestrator's framing as unverified. Three claims were load-bearing.
Two were wrong.

| Claim in my prompt | Verdict | Evidence |
|---|---|---|
| "where does *aussi* attach in *tu me manques aussi*? To **tu**" | **WRONG** | De Cesare 2015, Table 1: Fr. *aussi* in configuration III `S Vfin AFA (O)` has **WS — wide scope**, identical to E. *also*. Clause-final *aussi* is *not* anchored to the subject. |
| "French has the same inversion and therefore the same trap — verify it" | **Half wrong** | The *inversion* is the same (OQLF: subject = the absent person). The ***aussi* trap is not the *anche* trap.** De Cesare 2015, ex. (11): `*Aussi Jean est parti.` is **starred as ungrammatical** (after Lauwers 2003: 9). The Italian pre-subject slot that disambiguates *anche tu mi manchi* **does not exist in French.** |
| "check whether *moi aussi* is the more idiomatic reply" | **Answered: no, and the SERP's reason is also wrong** | Tatoeba prints ***à* moi aussi** 5×, bare *moi aussi* with *manquer* **0×**. But Ngrams rescues *moi aussi tu me manques* from that zero (non-zero curve, fr-2019). It is rare, not ungrammatical — and the SERP's stock explanation ("it means *je me manque*") mis-parses *moi* as the subject when it is the tonic form of the **COI**. |
| `serp-ddg.mjs` "takes the query FIRST" | **Correct** | Echoed `query: tu me manques aussi` on both runs. |
| CNRTL is a JS SPA | **Correct, and I got the shell** | `cnrtl.fr/definition/aussi` and `/manquer`: HTTP 200, **914 bytes**, `<title>Portail lexical</title>`, no entry. Two of three agents saw this; I am the third. |

---

## 1. SERP — measured, two routes, self-authenticated

### Route 1 — `serp-ddg.mjs`, `--region fr-fr`, run TWICE

Both runs echoed `query: tu me manques aussi`. Second run ~20 min after the first. Domain set
stable; ranks 2–3 swapped and three tail slots rotated — ordinary DDG jitter, not contention.

| # | Host | Page type | Strong? |
|---|---|---|---|
| 1 | youtube.com | video | *excluded by the tool* |
| 2/3 | **dictionary.reverso.net** | auto-generated dictionary stub | weak |
| 2/3 | **context.reverso.net** | translation-memory dump | weak |
| 7 | **dictionnaire.reverso.net** | third Reverso surface, same query | weak |
| 4 | bonobology.com/fr/ | machine-translated listicle off an English relationship site | weak |
| 5 | **motsefficaces.com** | "Comment répondre à tu me manques" listicle | on-intent, weak |
| 6 (run 1) | **francaisavecpierre.com** | editorial French-teaching page | **STRONG** |
| 6 (run 2) | idee-message.fr | "19 exemples de réponses" listicle | weak |
| 8 | flexilivre.com | messages listicle | weak |
| 9 (run 2) | **fr.hinative.com/questions/13772590** | Q&A: *« Tu me manques », je dois lui répondre « Moi aussi, tu… »* | weak |
| 10 (run 1) | parlerdamour.fr | listicle | weak |

**Weak count: 7 of the 8 non-excluded results I actually saw on run 1; 8 of 8 on run 2.**
Across both runs, 11 distinct non-YouTube hosts, **10 of 11 weak**. Three of them are the same
publisher (Reverso) on three subdomains.

### Route 2 — Brave Search, `country=fr`, real browser

Self-authenticated: the page returned my query, in French, about *tu me manques aussi*.
Organic set: LingoCulture, context.reverso.net, WordHippo, **Reddit ×4**, Tumblr, Linguee ×2,
MyMemory, weekendlove.fr. Overwhelmingly UGC and translation-memory. Corroborates route 1.

Brave's AI answer (not an organic result, so not counted) asserts: *"While some French speakers
say moi aussi, it is grammatically inconsistent with the verb structure … The grammatically
consistent short response is toi aussi."* The top Reddit r/French answer (2011) says the same
thing. **Both are over-stated — see §4.**

### Route 3 — Google `gl=fr&hl=fr&pws=0`, real browser

Loaded; the organic block was buried under an images pack. Rank-1 organic was
`context.reverso.net`, matching DDG. I recorded that one result and no more, rather than
inventing ranks. No AI Overview was served on the load I read.

### Gate 4 — **PASS**

Nothing on the measured SERP answers where *aussi* attaches. The one strong page
(francaisavecpierre.com) is about *tu me manques* vs *je te manque* — the inversion — and does
not discuss *aussi* at all. The rest are message listicles, three Reverso surfaces and a Q&A
thread in which a learner asks precisely my question and gets no sourced answer.

---

## 2. Instruments — what resolved, what served the wrong word

| Instrument | Result |
|---|---|
| **Larousse `/manquer/49234`** | 200, headword confirmed *manquer* |
| **Larousse `/aussi/6526`** | 200, headword confirmed **aussi**. Found by requesting `/dictionnaires/francais/aussi` with no id and following the redirect. |
| Larousse `/aussi/6587`, `/aussi/6588`, `/aussi/6589` | **200 each, serving *autoamputation*, *autoanalyse* and *s'autoanalyser*.** New instances of the MARAUD trap — and they establish *why* it happens: **the word in the Larousse URL is decorative; only the numeric id selects the entry.** |
| **Académie française `/article/A9M0575`** | 200, 230 KB, headword *manquer* |
| **Académie française `/article/A9A3190`** | 200, headword **AUSSI**. The id is not published anywhere I could reach; `/search?term=aussi` is a client-rendered shell with zero `/article/` links in the HTML. **I found it by bisection** on `A9A####` (aubépine A9A3100 → autan A9A3200 → aussi A9A3190). |
| **CNRTL** | **JS SPA.** 914-byte shell on both `/definition/aussi` and `/definition/manquer`. Unusable. |
| **OQLF Vitrine linguistique** | Direct BDL article URLs work. The search page is client-rendered and returns nothing to a fetch. |
| **Tatoeba `api_v0/search`** | Works. Tokenised, diacritic-insensitive, and **quotes do not force a phrase match**. |
| **Google Books Ngram `/ngrams/json`** | Works, `corpus=fr-2019`. |
| **Europe PMC / PMC** | Not used — the subject is Romance syntax, not biomedicine. |

---

## 3. The grammar, and the entry that licenses each step

### 3.1 The verb — inherited from three French siblings, not re-derived

`manquer à qqn`: the **absent person is the subject**, the experiencer is a **complément d'objet
indirect**. OQLF, verbatim: *"le verbe manquer a pour sujet la personne ou la chose absente, et
pour complément la personne qui regrette cette absence."* The siblings' reader-checkable proof
is that dictionaries print the third person as **lui**, never *le/la*.

### 3.2 The preposition — the step the siblings did NOT take, and the one my post turns on

**OQLF BDL 24314, "MANQUER : emploi avec DE et À", section "Manquer à + nom ou pronom":**

> *"manquer peut être suivi de la préposition **à** devant un nom ou un pronom avec quatre sens
> différents : il peut signifier « **être regretté par** »…"* — example: *Le retraité manque
> beaucoup à tous ses collègues.*

So the experiencer slot is **`à` + nominal**. Clitic *me* is the reduced realisation of *à moi*.
**That is why focusing it requires `à moi aussi` and not bare `moi aussi`.**

### 3.3 Where `aussi` can attach — Académie française, AUSSI (A9A3190), sense 1

Sense 1 ("Encore, de plus ; en outre") prints two examples that are a **minimal pair for
position**:

- *Il a perdu son temps **et aussi son argent**.* — `aussi` **precedes** its target
- *Il a perdu sa place, et **sa réputation aussi**.* — `aussi` **follows** its target

Sense 2 adds a third: *Il est à plaindre, mais **sa femme l'est aussi**.* — post-posed, over the
subject. **`aussi` associates with the constituent it is adjacent to, on either side.** It is not
a subject-seeking particle.

Larousse 6526 sense 1 agrees and adds a bonus rule: *"(Dans les phrases négatives, on emploie
**non plus**.)"* — so *tu ne me manques pas aussi* is wrong; *tu ne me manques pas non plus.*

### 3.4 Why neither `tu` nor `me` can carry `aussi` — De Cesare 2015, fn. 17

> *"Fr. aussi can of course not follow a clitic Subject (\*Il aussi lit); in this case, a full
> pronoun is required (Lui aussi lit; cf. Perrin-Naffakh 1996: 143)."*

Both arguments of *tu me manques* are clitics. **Neither can host `aussi`.** To attach it you must
swap in a tonic pronoun — **toi** for the subject, **à moi** for the COI.

### 3.5 The scope table — De Cesare 2015, Tables 1 and 7

Read in full from the PDF (`pdftotext -layout`, 88,186 characters). Corpus: ~750,000 words of
comparable online news in Italian, French and English, collected Q4 2011; sample of 300
occurrences, 100 per language.

**Table 1 — where the adverb can take the canonical Subject as its domain of association:**

| Configuration | It. *anche* | Fr. *aussi* | E. *also* |
|---|---|---|---|
| I `AFA S Vfin (O)` | NS | **NA** | NA |
| II `S AFA Vfin (O)` | NS | NS | WS |
| III `S Vfin AFA (O)` | WS | **WS** | WS |
| IV `S Vfin O AFA` | ?WS | WS | WS |
| V Subject reduplication | NS | **NS** | **NA** |

(NS = narrow scope, unequivocally the Subject. WS = wide scope, context decides. NA = not available.)

**`Tu me manques aussi` is configuration III → WS, the same cell as English `also`.**
**`Toi aussi, tu me manques` is configuration V → NS, a cell English does not have.**

**Table 7 — what French actually does in the corpus when `aussi` targets the Subject:**
configuration III **29%**, configuration V **71%**. Overall, *aussi* takes the canonical Subject
only **8% of the time (7 of 82)**, against *anche* 31% (13/42) and *also* 14% (13/90) —
and *aussi* is the rarest of the three AFAs outright: **106 occ./100,000** against *also* 162 and
*anche* 380.

De Cesare's own summary, verbatim from the abstract section:

> *"While E. also takes wide scope and always needs the context to narrow down its association
> with the Subject, It. anche and to some extent Fr. aussi are used in configurations in which it
> is unequivocally the Subject that functions as their focus. However, It. anche [is placed]
> before the canonical Subject, Fr. aussi occurs after the finite verb, most often in a special
> syntactic construction involving the reduplication of the Subject by means of a full pronoun."*

That construction, `Sᵢ Vfin proᵢ aussi`, **is** *Toi aussi, tu me manques* / *Vous aussi vous me
manquerez*.

---

## 4. Tatoeba — the census, and how many raw hits survived

Query `manque aussi`, `from=fra`, all 4 pages. **33 raw hits pulled. Every one inspected
individually.**

- **13 discarded as noise**, where *manquer* carries a different sense (miss a train, lack, fail
  to) or *aussi* belongs to a different clause: #925930, #1107571, #1313140, #1744265, #2999288,
  #3341258, #6743476, #9945910, #12708711, #12713656, #12756783, #12982464, #14004547.
- **20 survived** as the psych-verb `manquer à qqn` with `aussi`.

| Attachment | n (of 20) | Sentences |
|---|---|---|
| **Clause-final bare `aussi`** (config. III, scope unresolved) | **10** | #1683186, #2266795, #2266796, #6470255, #6470256, #7724720, #11274439, #11619483, #11802998, #13439993 |
| **Tonic subject + `aussi`** (config. V, subject) | **5** | #2266794, #2266798, #2266800, #3658979, #12311987 |
| **`à` + tonic pronoun + `aussi`** (COI) | **3** | #4468034, #4468044, #12709318 |
| `aussi` before an infinitive | **2** | #1843026, #1843027 |
| **Bare `moi aussi`** | **0** | — |

Two more COI sentences sit outside this pull because the verb is *manquent*: #4468046
*Elles me manquent à moi aussi*, #4468049 *Ils me manquent à moi aussi*. **Full COI set: 5.
All 5 print the preposition `à`. None omits it.**

### The minimal triple

English **#6532383 / #5940744 "I missed you, too."** carries **three** French translations at once:

| French | id | What `aussi` attaches to |
|---|---|---|
| *Tu m'as manqué aussi.* | #11802998 | nothing in particular — config. III |
| *Toi aussi, tu m'as manqué.* | #12311987 | **toi** — the person missed |
| *Tu m'as manqué, **à moi aussi**.* | #12709318 | **à moi** — the person doing the missing |

One English sentence, three French sentences, two of them unambiguous. That is the post.
A second block does the same for the future: #2266794/95/96/98/2266800 — **five** French
variants of *"I'll miss you too."*

Also worth recording: #2266795 and #2266796 write *"Tu me manqueras**,** aussi."* with a comma,
which is the orthographic shadow of English *", too"*.

### The zero, checked against a second corpus

Tatoeba returns **0** for *moi aussi tu me manques*. Per BRIEF §3's own warning, a zero may
belong to the query. Google Books Ngram Viewer, `corpus=fr-2019`, smoothing 3, relative
frequency at the 2022 datapoint:

| Form | 2022 | Peak |
|---|---|---|
| *tu me manques aussi* | 3.470e-9 | 1.060e-8 |
| *toi aussi tu me manques* | 1.649e-9 | 4.100e-9 |
| *moi aussi tu me manques* | 7.493e-10 | 1.375e-9 |

**The Ngrams curve rescues it from the zero.** *Moi aussi tu me manques* is real — roughly
**2.2× rarer** than *toi aussi tu me manques* and **4.6× rarer** than *tu me manques aussi* — not
absent. The Tatoeba zero belongs to a 20-sentence sample, not to French.

So the SERP's flat verdict ("moi aussi is wrong") is over-stated in both directions: the form
exists, and the reason usually given for rejecting it — that *moi* would be the subject, so *moi
aussi* means *je me manque aussi* — mis-parses the pronoun. *Moi* is also the tonic form of the
COI *me*, the same slot the third person fills with *lui*. What the corpus actually shows is that
French keeps the **preposition** when it focuses that slot: ***à* moi aussi**, 5 of 5.

---

## 5. Checkable error in a ranking result

**motsefficaces.com**, *"Comment répondre à « tu me manques » : Conseils & exemples"*,
`datePublished` 2026-03-03. Rank **5** on both my DDG runs for `tu me manques aussi`, and rank
**1** for `que répondre à tu me manques`. Item 8 of its numbered list offers this copy-and-send
reply:

> « **Tu me manques à toi aussi.** D'ailleurs, depuis que tu es parti, j'ai personne pour me dire
> que mes blagues sont nulles. »

The page introduces it as a way of saying *"moi aussi"*. It does not say that.

Per OQLF BDL 24314, the `à`-phrase after *manquer* names **who does the regretting** (« être
regretté par »). *Tu me manques* already fills that slot with the clitic *me*. Adding *à toi*
gives the verb a second, conflicting experiencer, and read literally it makes the addressee the
one who misses — *you are missed by you too*. The attested form is ***à moi aussi*** (Tatoeba
#12709318, glossing "I missed you too") or ***toi aussi, tu me manques*** (#12311987).

A reader who copies that line sends a sentence that does not mean what the page says it means.

**Secondary, softer:** `lingoculture.com` (Brave rank-1 organic, 2024-02-21) glosses *"Tu me
manques aussi"* as *"I miss you as well"* and *"Toi aussi, tu me manques"* as *"I miss you too"* —
presenting the two French forms as an English style variant and erasing the scope difference
between them. Not false; just the whole point, dropped.

**Not claimed:** I did not measure gymglish, and I am not repeating the "passive" error another
row found there.

---

## 6. Gap analysis

**Table stakes** (everything on the SERP has these): the translation "I miss you too"; the
inversion; a list of alternative replies; the *je te manque* warning.

**The gap — nothing on the measured SERP does any of this:**
1. Says that *tu me manques aussi* is **scope-unresolved**, and names the configuration and the
   corpus study that says so.
2. Explains **why** — clitics cannot host *aussi*.
3. Gives the two resolutions, **toi aussi** and **à moi aussi**, as a *scope* contrast rather than
   a right/wrong verdict.
4. Counts anything. Not one page on this SERP carries a corpus number.
5. Corrects the received "moi aussi is illogical" story with a second corpus.

**Angle sentence:** wins by being the only page that treats the French reply as a question of
where *aussi* can legally sit — Académie A9A3190's two-sided examples, De Cesare's 71%/29% split,
OQLF's `à`-phrase — and proves it on a 33-hit Tatoeba census in which 5 of 5 experiencer-focus
sentences keep the preposition and 0 use bare *moi aussi*, while Ngrams rescues *moi aussi* from
that zero.

**Fan-out sub-queries → H2s:** *tu me manques aussi ou moi aussi* · *toi aussi ou moi aussi* ·
*pourquoi on dit tu me manques et pas je te manque* · *où placer aussi dans une phrase* ·
*tu me manques aussi en anglais* · *comment répondre à tu me manques*.

---

## 7. Sources (6)

| # | Source | Journal / publisher | Read |
|---|---|---|---|
| 1 | Académie française, 9ᵉ éd., **AUSSI**, art. A9A3190 | Académie française | full entry |
| 2 | Larousse, **aussi**, entrée 6526 | Éditions Larousse | full entry |
| 3 | OQLF / BDL 24314, **MANQUER : emploi avec DE et À** | Office québécois de la langue française | full page |
| 4 | Tatoeba #12709318 *Tu m'as manqué, à moi aussi.* | Tatoeba (CC-BY) | sentence + all translations; plus a 33-hit census |
| 5 | **De Cesare, A.-M. (2015)**, *Additive Focus Adverbs in Canonical Word Orders. A Corpus-based Study of It.* anche*, Fr.* aussi *and E.* also *in Written News* | **Linguistik Online 71 (2/15)**, peer-reviewed, open access (CC BY 3.0) | **FULL TEXT** — PDF fetched, `pdftotext -layout`, 88,186 chars |
| 6 | Google Books Ngram Viewer, corpus `fr-2019` | Google Books | JSON API, 3 curves |

Subject test: #3, #4, #5 and #6 are all specifically about *manquer à qqn* or about French
*aussi*. Peer-reviewed + open access: #5. Generic context statistics: **none**. Wikipedia: **0**
in the body; six QIDs used only in `structuredData` for entity disambiguation.

Swap test: none of these could sit in another post in this batch unchanged — #5's French tables
and #4's census are about this exact construction.

**Cap notes for the orchestrator:** `bop.unibe.ch` / *Linguistik Online* becomes the **2nd** post
in this batch (the Italian reply row read the same paper — that is deliberate, since it is the
one study covering both *anche* and *aussi*, and it is the load-bearing cross-link between the
two posts). URL cap 2 — **this fills it.**
`vitrinelinguistique.oqlf.gouv.qc.ca` is a **different URL** from the sibling's *je te manque*
page. `capcheck.mjs` run immediately before writing: clean; only `doi.org` at cap, which I do not
cite. **No PMC paper, no journal from the banned list, no `doi.org` link.**

---

## 8. Siblings — the split, in one sentence each

| Sibling | Its job | My split |
|---|---|---|
| `tu-me-manques-en-anglais` | FR→EN; 86 of 90 Tatoeba translations use *miss* | It translates the sentence. I ask where one adverb goes inside it. |
| `tu-me-manques-signification-grammaire` | Larousse's five constructions; only *manquer à qqn* inverts; Italian *mancare*, 16th c. | It is about the verb. I am about the focus adverb, which its Larousse entry never touches. |
| `tu-me-manques-en-arabe` | Which word is the grammatical subject in four Arabic forms | Different language pair entirely. |
| `i-miss-you-too-in-italian` | *anche* is pre-adjacent, so the Italian reply is unambiguous where English is not | **The direct counterpart, and the finding is the opposite.** De Cesare ex. (11) stars `*Aussi Jean est parti` — French has no pre-subject slot. French gets its precision from configuration V instead, which Italian's corpus never uses (0%) and English does not have at all. |
| `tu-me-manques-beaucoup` | Does not exist on disk or in Strapi as of writing | No cross-link. |

**Strapi liveness of cross-link targets, checked 2026-09-27 via the production API:**
`tu-me-manques-en-anglais` **live**, `tu-me-manques-en-arabe` **live**,
`tu-me-manques-signification-grammaire` **not yet** (total 0), `i-miss-you-too-in-italian`
**not yet** (total 0). The last two are linked anyway and will resolve when this batch publishes;
recorded as a failure in the audit.

---

## 9. First-party data — the pairing, and the honest weakness

Picked deliberately against the three French siblings, none of which used the platform-wide view
lines. The new pairing is **11.3 vs 11.1**: miss-you pages average **11.3** views each against
**11.1** across the whole platform — **0.2 apart**, which is a null result and is reported as one.
(The Italian reply row paired the two edit-gap lines, 2.6 h vs 2.5 h; this is the same move on a
different pair, chosen so we are not both running the same comparison.)

The reply-lane fact is the **1,434 "hug" taps**: the only line in the snapshot that records the
*recipient* acting, which is what a reply is.

Mandatory caveats carried in body prose, in French: pickers-with-defaults, `viewCount` is page
views not people, n = 214 over two months, and — the one that matters most here — **the database
records which template was opened, never who received it, and nothing in it is segmented by
language or country.** No number in this post is French.

**Honest weakness:** these 12 lines are used by 54+ siblings. The differentiation is thin and is
recorded as such in the audit.

## 10. Product mismatch, and the tension the lane creates

`/missyou-gf` is defined at `app/lib/prompt.ts:44` as *"'I miss you' page for a girlfriend/
partner"* — **English labels, and recipient-specific.** Disclosed in French prose.

`/streak` is kept from the assigned set on the Italian reply row's reasoning:
`app/lib/prompt.ts:88`, *"two people, one tap a day"* — **the only reciprocal template**, and a
reply is a reciprocal act.

**The tension, named in the post:** a reply is a different job from building a page. Someone
staring at *tu me manques* on their phone needs one sentence in the next thirty seconds, not a
web page. **48.4% of views are on a touch device** — that is the moment. The post says plainly
that the sentence comes first and the page is for later, which is an argument against our own
product at the point of the query.

## 11. Price guard

No `gratuit`, `gratuitement`, `sans frais`, `ne coûte rien`, no price, no tier.
`pricecheck-intl.mjs tu-me-manques-aussi` run before saving.

## 12. Scratch files

`tu-me-manques-aussi-*.html`, `tu-me-manques-aussi-tatoeba*.json`, `decesare2015.pdf`,
`decesare2015.txt`, all in the session scratchpad.
