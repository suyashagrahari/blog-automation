# Research brief — `propose message in marathi`

Batch `2026-09-24-propose-30c` · slug `propose-message-in-marathi` · category `modern-romance`
Demand: 5 prefixes, joint-highest of this wave's language posts (ordinal only, never a volume).

---

## Phase 1 — SERP: what was and was not measured

**One WebSearch call was spent on the exact keyword. No ranking page was fetched.** The search
was US-served, not India-served, which is a further limit. Under the BRIEF's rule ("if you did
not fetch a page or see a SERP, do not describe what is on it") the post makes **no claim about
any competitor page's contents, structure or position**, and the audit records this as a failed
checklist item rather than papering over it.

What the result set itself showed — titles and hostnames only, which is what the SERP displays:

| Host | Title as returned |
|---|---|
| marathi.asianetnews.com | "Happy Propose Day Wishes in Marathi … Propose Day Quotes Propose Day Messages In Marathi" |
| marathishayarihub.com | "200+ Propose Shayari in Marathi, Quotes, Status and Wishes" |
| marathitype.in | "मराठीत दिवसाचे उद्गार प्रपोज करा \| Propose Day Quotes in Marathi" |
| marathiveda.in | "50+ Propose Day Quotes In Marathi" |
| en.wikipedia.org | "Propose Day", plus two unrelated Marathi entities |

The only defensible observation: **every returned title collapses "message" into quotes,
shayari, status or wishes**, and three of the four are dated to Propose Day. Nothing is claimed
about what is inside them. The 11 India-served SERPs measured on 2026-09-16
(`content/keywords/2026-09-16-propose-100/serps.md`) do not include this keyword.

No competitor page was read, linked, cited or paraphrased.

## Phase 2 — Gap and the four Marathi siblings

Three Marathi siblings exist and all three are **live in Strapi** (checked 2026-09-24; the
wave-3 note that they would 404 is now out of date):

| Slug | Wave | Its lane | Its instruments |
|---|---|---|---|
| `propose-day-quotes-in-marathi` | 2 | Propose Day **quotes**, grouped by who is asked; regional-language-internet framing | Hindi blocklist, L3Cube MahaCorpus, KPMG |
| `propose-day-wishes-in-marathi` | 2 | Propose Day **wishes**, re-cut by तू/तुम्ही register; Valentine reception in Maharashtra | Pune-district premarital research, Delhi ethnography |
| `how-to-propose-girl-in-marathi` | 3 | **Advice** — the method and the order; Marathi gender agreement | UD Marathi-UFAL Gender stats, own future-tense count, Deo & Sharma |
| **`propose-message-in-marathi`** | **4** | **The message itself, any day, one named recipient; Marathi clusivity (आपण vs आम्ही)** | **Grambank GB028, UD `Clusivity` feature, Molesworth, Wiktionary/Berntsen** |

The distinction the project runs on — *quote ≠ wish ≠ message ≠ advice* — holds here. A message
is addressed to one named person and expects a reply; it is not a line anyone could read, not a
greeting pinned to a date, and not a method. **Zero published lines from any sibling are reused,
and zero of their sources are reused.**

**The gap:** none of the three, and nothing visible on the SERP, touches the fact that Marathi
has a grammaticalised inclusive/exclusive first-person plural. That is the single most
proposal-relevant feature of the language, because a proposal is a request to create a
particular "us" and Marathi has a dedicated word for exactly that "us".

**Fan-out sub-queries the H2s answer:** what is a propose message vs a quote/wish · what is the
difference between आपण and आम्ही · does Hindi have it · which message fits which register · how
do I know these lines are correct · should I send a message or build a page · when is a Marathi
message wrong.

## Phase 3 — verifying the framing claim in the task prompt

The task prompt asserted: *"Marathi has clusivity where Hindi does not; आपण means 'you and I',
आम्ही means 'we but not you'."* Per the BRIEF's final section this was treated as unverified.

**It holds, with one important correction.**

Confirmed:

- **Grambank** codes feature **GB028** ("Is there a distinction between inclusive and
  exclusive?") as **present (1)** for Marathi, referencing Dhongde and Wali (2009: 48–50), and
  **absent (0)** for Hindi, referencing Koul (2009: 75–76).
  <https://grambank.clld.org/values/GB028-mara1378>
- **Own count over the Grambank CLDF release** (`values.csv` × `languages.csv`, filtered to
  lineage `indo1321`): **16 Indo-Aryan languages carry a GB028 code; 2 are coded present** —
  Marathi and Maithili (Yadav 1996: 107–108). The 14 coded absent are Awadhi, Bhojpuri, Bundeli,
  Darai, Domaaki, Hindi, Kashmiri, Konkan Marathi, Lambadi, Magahi, Nepali, Odia, Eastern
  Panjabi, Western Panjabi. For contrast, **26 of 35 Dravidian languages coded are present**.
- **English Wiktionary** glosses आपण as "we: inclusive first-person plural personal pronoun"
  (example आपण जाऊयात का? "Shall we go?") and आम्ही as "we: exclusive first-person plural
  personal pronoun", cross-referencing each other.
- **UD Marathi-UFAL** carries the `Clusivity` feature on **5 tokens, all value `In`**, all
  `PRON` with `Number=Plur|Person=1`, over 2 types (आपण, आपल) and 1 lemma. **No token reads
  `Ex`.** Attested inclusive sentences: *आपण त्याच्यासाठी काही करूया*, *चला आपण जाऊ*, *आपण
  उद्यापासून मजूर झालो*. आम्ही appears 3 times, tagged `Person=1|Number=Plur` with no
  `Clusivity` value.

**The correction, and it matters for the page:** आपण is **not unambiguous**. The same form is
the highest-formality second-person pronoun (Wiktionary: "you: polite second-person singular").
Worse, **Molesworth (1857) does not describe आपण as an inclusive 'we' at all** — it calls it "a
representative or referential pronoun, standing indifferently for I, thou, he, we, ye, they" and
documents the honorific use ("Your majesty", "His excellency"). The clusivity reading is a
**modern grammatical description**, not a nineteenth-century lexicographic one. The page says
this out loud and gives the fix: pair आपण with a first-person-plural verb, which the treebank
attests, and the second-person reading becomes impossible.

So the prompt's framing survives, but it would have been wrong to print it as a clean
one-word-solves-everything story.

Search terms tried on `findpapers.mjs`: `Marathi inclusive exclusive pronoun study`,
`clusivity first person plural Indo-Aryan research`, `inclusive we exclusive we typology study`,
`Marathi pronoun system grammar description`, `we-talk first person plural pronoun romantic
relationship outcomes`, `Marathi Dravidian contact convergence South Asia linguistic area`.
Crossref returned the Benjamins *Clusivity* volume (TSL 63, paywalled) and Beames' *Comparative
Grammar*; Europe PMC returned nothing on-topic and is at the 3-post domain cap anyway. DOAJ was
the productive route for open-access clusivity work.

## Sources (5) — all fetched, none banned, none at cap

| URL | What it supports | Published | Test |
|---|---|---|---|
| grambank.clld.org/values/GB028-mara1378 | Marathi present, Hindi absent; the 2-of-16 Indo-Aryan count | 2023 | subject |
| wals.info/chapter/39 | No European language has clusivity; Kannada lost it under Indo-Aryan influence | 2013 | subject, scholarly |
| glossa-journal.org/article/id/5098/ | No ABA in the 1SG–1EXCL–1INCL triple; the inclusive is the most marked category | 2018 | subject, peer-reviewed OA |
| revistaiberica.org/…/137 | Inclusive pronouns construct positive politeness; "I" and "you" become "we" | 2018 | subject, peer-reviewed OA — **abstract only** |
| ugp.rug.nl/cadaad/article/view/42058 | Clusivity as container and centre–periphery schemas; the speaker draws the "us" boundary | 2009 | subject, peer-reviewed OA — **abstract only** |

Swap test: every one is about the inclusive/exclusive distinction. None could sit unchanged in
another post in this batch. Generic context statistics: **zero**. Wikipedia in body: **zero**.

**Instruments credited in prose and `structuralLimitations`, not in `sources`** (ban-exempt under
the BRIEF's mid-batch exemption): Molesworth via `dsal.uchicago.edu`, English Wiktionary's
Marathi entries citing Berntsen, `universaldependencies.org` plus the `UD_Marathi-UFAL` CoNLL-U
release. `science.org` (the Grambank paper) and `zenodo.org` both returned 403 here.

## Phase 4 — the Marathi ledger: 20 drafted, 8 published, 12 cut

Verification tiers: **T1** Molesworth (DSAL) · **T2** English Wiktionary citing Berntsen ·
**T3** attested token in UD Marathi-UFAL.

### Published (8)

| # | Message | Register | Speaker-gender forms |
|---|---|---|---|
| 1 | तुला एक विचारायचं आहे — आपण एकत्र सुरुवात करूया का? | तू | 0 |
| 2 | मी खूप वेळ थांबलो / थांबले. आज विचारतो / विचारते — आपण एकत्र राहूया का? | तू | 2 |
| 3 | तुम्हाला हे सांगायला मला वेळ लागला. आपण एकत्र राहूया का? | तुम्ही | 0 |
| 4 | तुला एक विचारतो / विचारते. आपण लग्न करूया का? | तू | 1 |
| 5 | उत्तर आज नको. तू विचार कर. मी थांबतो / थांबते. | तू | 1 |
| 6 | नकार आला तरी चालेल. मी विचारलं, आणि आता तुला माहित आहे. | तू | 0 |
| 7 | आपण एकत्र आहोत — हे मला आज पुन्हा सांगायचं आहे. | neutral | 0 |
| 8 | आम्ही दोघं एकत्र आहोत. हे तुम्हाला सांगायचं होतं. | तुम्ही | 0 |

Message 8 is deliberately the one where **आम्ही is correct** — it is sent to family, who are
outside the couple.

### Cut (12), with the gloss or corpus result that killed each

1. `मला तू हवी आहेस` — **हवें returns zero Molesworth results**; Wiktionary's हवा is "air, wind,
   weather" only. The wanting-sense हवे fails T1, T2 and T3.
2. `मला तू आवडतेस` — **आवडणें and आवड both return zero Molesworth results**. (Also already
   published on the wave-2 quotes sibling.)
3. `तुझ्या आवडीचं सगळं करेन` — same आवड failure.
4. `हे सांगणं खूप मोठं धाडस आहे` — **मोठा has no Marathi section on English Wiktionary** and no
   matching Molesworth headword.
5. `एवढंच विचारतो` — **एवढा has no Marathi Wiktionary entry**; only एवढेच / एवढी appear in the
   treebank, so the colloquial एवढंच is an unverifiable spelling.
6. `आपण जमूया का?` — Molesworth glosses **जमणें as "to assemble together; to congeal; to
   coagulate; to solidify"**, not "to be compatible".
7. `आपली मैत्री तशीच राहील` — **मैत्री returns zero Molesworth results** (only मैत्र, "a
   friend"); Wiktionary rescues मैत्री but तशीच fails all three tiers.
8. `आपण कायमचे एकत्र राहूया` — **कायम returns zero Molesworth results** under that spelling;
   Wiktionary points to Molesworth's काईम. Cut rather than publish on a spelling mismatch.
9. `आत्ता उत्तर नको` — **आत्ता has no Marathi Wiktionary entry**. Rewritten with आज, which the
   treebank attests 7 times.
10. `मी रोज तुझा विचार करतो` — **तुझा appears zero times in the treebank** (only तुझी, तुझे,
    तुझेच). The wave-3 sibling had to fall back to Wikipedia for this paradigm; not repeated.
11. `तुझा होकार आला तर उद्यापासून फक्त "आपण"` — same तुझा failure, although होकार itself is T1
    ("consent, assent, the saying of yes").
12. `आता आपण आम्ही होऊया` — **semantically backwards**. होऊया is attested (*तुम्ही आम्ही
    होऊया*), but the sentence would invite the addressee into a group the pronoun excludes her
    from. Cut on meaning, not on lexis.

### Survived on tier 2 only, and disclosed

**खूप** — Molesworth's खूप headword is a **homograph glossed "sharp pain or smarting of the eyes
arising at seasons during ophthalmia"**. It is Wiktionary, citing Berntsen, that supplies "much,
many, very" (a Persian خوب loan). Exactly the trap that cost Kannada ಬಾಳು in wave 3. **पण** and
**सुद्धा** are in the same position (Molesworth's पण is "a promise, a bet or wager"; सुद्धां is
"together with") and were kept out of the published messages entirely.

### Hindi-not-Hindi screen

A blocklist of मैं, हम, तुम, तुम्हें, तुम्हारा, मुझे, मुझको, मेरा/मेरी/मेरे, तेरा/तेरी/तेरे,
हूँ, हूं, है, हैं, था, थी, थे, नहीं, प्यार, ज़िंदगी, जिंदगी, दिल, बहुत, हमेशा, सिर्फ, अगर,
लेकिन, और, भी, क्या, करूंगा, रहा, रही was run over every Devanagari token in the eight published
messages: **zero hits**. Marathi-only forms carry the load: आहे, आहोत, आणि, फक्त, खूप, तुला,
आपण, आम्ही, नको, तरी, तुम्हाला. **का was deliberately excluded from the blocklist** — it is the
Marathi sentence-final interrogative particle (treebank: *तुला माहित आहे का?*) and a homograph of
the Hindi genitive, not a borrowing.

## Phase 5 — links and targeting

- `templateUrls`: `/proposal` (mandatory), `/love-gf` (the genuine alternative — in Indian usage
  "propose" usually means asking someone to be a girlfriend or boyfriend, so the marriage
  scrapbook is usually the wrong page), `/date-invitation` (better still when the real ask is a
  date). All three are **English-language**, which the body states.
- Three sibling cross-links by slug, all verified live in Strapi on 2026-09-24. They are internal
  links **outside** `TEMPLATE_LINKS`, recorded as a checklist failure rather than hidden.
- `categorySlug`: `modern-romance`, confirmed against the live Strapi category list.
- Slug `propose-message-in-marathi` returned 0 results from Strapi — free.

## Phase 6 — audit

50 items, 48 passed, 2 failed, disjoint. The two failures are the un-measured SERP (item 2) and
the sibling `/blog/` links not being `TEMPLATE_LINKS` entries (item 31). Body is **1,798 words**
excluding FAQs; **11 FAQs**; no FAQ scores above 0.6 token similarity against any body H2.
Paragraphs are 2–3 sentences throughout. Every H2 section carries a number, date or named source.
