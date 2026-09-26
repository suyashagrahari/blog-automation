# Research — `miss you status in bhojpuri`

Batch `2026-09-25-miss-you-30`, wave 2, row 16. Written 2026-09-25. Zero WebSearch calls
spent; every page below was fetched in the sandbox.

---

## 0. The angle, and what survived checking

**Premise given:** Bhojpuri is not another translation spoke — it is the language of one
of India's largest internal labour migrations, so "miss you" here is often a migrant
worker and the family left behind.

**Verdict: holds, on evidence I fetched.** But the framing claim about script does NOT
hold on this SERP, and that correction is in the body. See §4.

The migration figure was treated as the trap the brief said it was. **No national
percentage appears anywhere in the post.** The paper I cite says outright that the Census
and the NSS *undercount* migration because they are built for long-term moves, which is
precisely why a headline figure would be the wrong instrument.

---

## 1. Instruments — what works, what does not

| Instrument | Result |
|---|---|
| `iso639-3.sil.org/code/bho` | **Works.** Bhojpuri; Active; 639-2 + 639-3; Individual; Living. |
| `dsal.uchicago.edu` | **NO BHOJPURI DICTIONARY EXISTS THERE.** See §2. |
| `en.wiktionary.org` (bho) | Works. 421 lemmas, 31 verbs, 141 in Kaithi. |
| `tatoeba.org` (bho) | Works. **32 sentences total**; 20 retrievable through api_v0. |
| `unicode.org` UCD text files | Works. `charts/PDF/U11080.pdf` does **not** parse (raw stream bytes). |
| `archive.org` — Arjun Tiwari's Bhojpuri–Hindi dictionary | **Works, and is the find of this row.** Full OCR text, 1,100,018 bytes. |
| `ethnologue.com/language/bho` | **403 Cloudflare.** Cap-exempt but does not serve this sandbox, exactly as `webonary.org` failed for two earlier rows. |
| `censusindia.gov.in` | **Fails to connect.** |
| `glottolog.org` | Works (JSON API). Bhojpuri `bhoj1244`, 16 dialects. Not cited in the end. |

### DSAL has no Bhojpuri dictionary at all

The task prompt told me to verify the DSAL query script resolves before planning a
section on it. It does resolve — `soas_query.py` against the Comparative Dictionary of
Indo-Aryan Languages returned `yadā́` at p.602 for a test query. **The problem is the
collection, not the script.** The DSAL index at `/dictionaries/` lists no Bhojpuri
heading and no Bhojpuri dictionary (it lists Maithili and Dogri as bare headings with no
dictionary behind them, and Bhojpuri not even that). A full-text CDIAL search for
`bhojpuri` returns *"No results for search term bhojpuri"*.

So: **do not plan a DSAL section on any Bihari language.** Platts (Urdu/Classical Hindi)
and CDIAL are there and work; Bhojpuri, Maithili and Magahi are not.

### What replaced it

**Arjun Tiwari (अर्जुन तिवारी), भोजपुरी-हिंदी शब्दकोश**, University Publications,
Varanasi, 2019 — `https://archive.org/details/bhojpuri-hindi-shabdkosh`. This is the
edition **English Wiktionary itself cites as `R:bho:Tiwari`**, so the two instruments are
not independent, but they do agree. I read the DjVu OCR text in the sandbox
(`Bhojpuri-Hindi-Shabdkosh_djvu.txt`), which is searchable plain text.

**Page numbers deliberately omitted.** The scan has no form-feed page breaks and the
printed folios that survive OCR are inconsistent: the ब section resolved coherently
(बालू ~335, बिदेसिआ ~337, बिछोह ~337, बिसरल ~339, and राउर ~404 in the र section) but
जियरा resolved to ~473, which is impossible for a ज headword in an alphabetical
dictionary. Rather than print a page number I could not stand behind, **every dictionary
claim in the post is cited by headword**, which is exactly reproducible by anyone
searching the same file. This is a real weakness against the Sinhala sibling's standard
and it is recorded in `structuralLimitations`.

---

## 2. Every Bhojpuri line, with script, gloss and instrument

### Printed in the post

| Form | Gloss | Instrument |
|---|---|---|
| हम | "I" (singular); gen. हमार, obl. हमरा; < Prakrit 𑀅𑀫𑁆𑀳𑁂 "we" < Skt वयम्/अस्मे | Wiktionary bho |
| बा | "is" — inflection of होब, 3s pres. ind. | Wiktionary bho |
| बानी | 1s copula, attested in Tatoeba 8722021 | Tatoeba bho |
| बाड़े | 3s/hon. copula, attested in Tatoeba 2915420 | Tatoeba bho |
| तोर | सर्व० तेरा, तेरी — "your", intimate | Tiwari |
| तोहार | सर्व० तुम्हारा — "your", familiar | Tiwari + Tatoeba 2915420 |
| राउर | सर्व० आपका — "your", honorific | Tiwari + Tatoeba 8722021 |
| परदेस | पु० अन्य देश, विदेश — a land that is not yours | Tiwari |
| जियरा | पु० मन, दिल — heart, mind | Tiwari |
| करेज, करेजा | पु० हृदय, कलेजा — heart | Tiwari |
| बिछोह | पु० वियोग, बिलगाव — separation, parting | Tiwari |
| बिछुड़ल | अक० अलग होना, बिछोह होना, वियोग होना | Tiwari |
| बिसरल | सक० भूलना, विस्मृत होना — to forget | Tiwari |
| बिरहा | पु० विरह गीत — a song of separation | Tiwari |
| बारहमासा | पु० एक प्रकार का गीत, जिसमें बारहों महीने का बिरह-वर्णन होता है | Tiwari |
| बिदेसिआ | पु० एक लोकनाट्य, जिसके प्रस्तुतकर्ता स्व० भिखारी ठाकुर थे | Tiwari |
| इयार / संघतिया | "friend" — the two words in the Tatoeba minimal pair; संघतिया पु० साथी | Tatoeba + Tiwari |
| होब | infinitive "to be", named in Wiktionary's बा entry | Wiktionary bho |
| हमनी | "we" (contrast with हम "I") | Tatoeba 3219605 हमनीके का? |

**Attested sentences quoted whole:**

- `तोहार इयार कहवां बाड़े?` — Tatoeba **2915420**
- `राउर संघतिया कहवां बानी?` — Tatoeba **8722021**, *linked to 2915420 as a translation*.
  Both render English "Where is your friend?". This is the register minimal pair the post
  is built on, and it is attested, not composed.
- `पिया मोर गइलन परदेस, ए बटोही भइया।` … `एको ना भेजवलन सनेस, ए बटोही भइया।` —
  folk song quoted in Tiwari's preface. "My beloved has gone to a foreign land, brother
  traveller. … He has not sent even one message." A migration lament from long before
  phones whose complaint is that *nothing arrived*.
- `बालू के भीत, परदेसी के प्रीत` — proverb under बालू in Tiwari. "A wall of sand; the love
  of a man gone abroad." Printed as a line to read, not to send.
- Copula geography, Tiwari's preface: *भोजपुर में 'बाटे', छपरा में 'बाड़े, बाड़न', बनारसी के
  'हउवन, हई, हौ, हवन'*.

**Composed, and flagged as composed in an FAQ:**

`हम परदेस में बानी, जियरा घरे बा` — every word attested (हम, बा: Wiktionary; परदेस, जियरा:
Tiwari; बानी: Tatoeba 8722021). The sentence as a whole appears in no corpus I fetched. A
native reviewer could still find it stilted.

### Lines CUT, and why

1. **तोहार याद आवत बा / हमरा तोहार याद आवे ला** — the line almost every status page
   prints. **CUT.** याद has *no Bhojpuri section* on English Wiktionary (Hindi + Urdu
   only) and *no headword* in Tiwari. इयाद occurs exactly **once** in the whole 1.1 MB
   dictionary — in the appendix विलोम (antonym) list — never as a glossed entry.
2. **हम तोहके मिस करत बानी** (the English loan) — **CUT.** मिस is not a Tiwari headword;
   the only matches are मिसिर, मिसरी, किसमिस. No Bhojpuri Wiktionary entry either.
3. **तोहरे बिना जियरा ना लागे** — **CUT.** लागल is glossed in Tiwari only inside compounds
   (अहस लागल "झिझकना", छुका लागल "छिपकर देखना"); the standalone sense is unverified.
4. **बाकिर** ("but") — **CUT** from the headline line; no headword found, sentence rewritten.
5. **बाट जोहत बानी** — **CUT.** जोहल *is* a headword (सक० रास्ता देखना; खोजना) but बाट is
   not, so the collocation is unverified.
6. **सुरतिया** as "memory" — **CUT.** It occurs only inside a folk song where it means a
   face (ललना के देखि कै सुरतिया त नयना जुड़ाइल हो); no headword gloss.
7. **All 96 couplets from the ranking page** — not reproduced. None is glossed, and
   reproducing a competitor's lines is barred.
8. **Kaithi renderings** — **CUT** for rendering, with the reason stated in the body.

That is **8 cuts against ~20 forms kept.** The most important one is #1: the line the
whole SERP is built on is the line I could not verify.

Honest caveat, stated in the body: "not attested" here means "not written down in the two
places I could check", not "not said". Both instruments are thin — 421 lemmas, 31 verbs,
32 Tatoeba sentences.

---

## 3. Bhojpuri vs Hindi — verified, not asserted from memory

- **हम.** Wiktionary's Bhojpuri entry glosses it **"I"**, singular, with genitive हमार and
  oblique हमरा, inherited from Prakrit 𑀅𑀫𑁆𑀳𑁂 (*amhe*, "we") from Sanskrit वयम्/अस्मे.
  In Hindi हम is *we*. Bhojpuri "we" is हमनी (Tatoeba 3219605 हमनीके का?).
- **Copula.** Bhojpuri बा (< होब) against Hindi है — and Tiwari's preface records the
  copula varying *by district* within Bhojpuri itself.
- **Pronoun grades.** तोर / तोहार / राउर, all three glossed in Tiwari, with the Tatoeba
  pair showing the verb moving with them.
- **Coverage.** Wiktionary Bhojpuri: 421 lemmas, 327 nouns, **31 verbs**, 12 numerals.

---

## 4. Script — Devanagari, Roman, Kaithi

- Unicode Character Database `Blocks.txt`: `11080..110CF; Kaithi` and `0900..097F; Devanagari`.
- `DerivedAge.txt`: `11080..110BC`, `110BD`, `110BE..110C1` → **Unicode 5.2**; `110CD` → 11.0;
  `110C2` → 14.0. So the first 61 Kaithi characters were encoded in 5.2.
- Wiktionary's Bhojpuri lemma set is a live demonstration: **141 of 421 lemmas (33.5%) are
  written in Kaithi**, and Bhojpuri headword templates carry a Kaithi field (आ → 𑂄).
- Practical verdict: Kaithi is genuinely encoded and will still render as tofu, because
  phones do not ship the font. Devanagari + a Roman line.

**BRIEF/PROMPT CLAIM THAT FAILED.** The prompt said most "status" text online is
Roman/Hinglish rather than Devanagari. **On this SERP that is wrong.** The only result
carrying Bhojpuri text at all carries 5,181 Devanagari characters across 96 couplets *and*
a Roman transliteration beside every one; zero of the three results are Roman-only. I
initially miscounted that page as carrying zero Devanagari because its Devanagari is
HTML-entity-encoded (`&#2340;`…); I caught it, decoded and recounted before writing. Both
the correction and my own miscount are recorded in `structuralLimitations`.

---

## 5. SERP, measured

India-served DuckDuckGo (`kl=in-en`), 2026-09-25, from `SERPS-WAVE2.md`; all three URLs
fetched the same day.

**The SERP returns 3 results. Not ten.** Thinnest measured in this wave.

| # | URL | Fetch | Live `<title>` | Finding |
|---|---|---|---|---|
| 1 | sharechat.com/tag/yr0e0P → /tag/i-miss-you-janu/yr0e0P | 200, 155 KB | "900+ I Miss You Janu Bhojpuri Status, Images & Videos" | Video/image feed, 33 posts, 135K views. **53 Devanagari characters on the whole page, all inside hashtags. No Bhojpuri line at all.** |
| 2 | howtosayguide.com/how-to-say-i-miss-you-in-bhojpuri/ | **FAILED** | — | `UND_ERR_CONNECT_TIMEOUT`, 3 attempts, 2 clients. The only result promising an actual translation. |
| 3 | shayaridaily.com/bhojpuri-shayari/ | 200, 181 KB | "Best Bhojpuri Shayari 2026: Bold Lines You Must Share" | 96 couplets, 5,181 Devanagari chars, Roman transliteration beside every one. |

**Counts:**

- Devanagari: **1 of 3** (the third result). Roman alongside it: 1 of 3. Roman-only: **0 of 3.**
- Status/shayari dumps with no gloss: **2 of 3.**
- **0 of 3 gloss a single line word-for-word into English.**
- **0 of 3 name a dictionary.**
- **0 of 3 mention migration, बिदेसिया or Bhikhari Thakur.** ("Bihar" appears twice on
  result 3, both as belt colour.)
- **0 subhsandesh results.** `weAlreadyRank: null` confirmed.
- Failed to fetch: **1 of 3.**

### Checkable error found

On shayaridaily.com (#3), **63 of 96 couplets carry a Bhojpuri copula** (बा, बाटे, बाड़,
बानी, नइख) and **exactly one carries the Hindi copula है** — and that one carries *both*:

> बोली मीठ **बा** तोहार जइसन मिसरी के डली, मन में बस गइलू तू जइसे बसत **है** कली।

Bhojpuri copula in line one, Hindi copula in line two, in a collection whose entire
premise is that it is not Hindi. Small, exact, and reproducible by anyone who counts.

Its FAQ claim that the collection "provides both scripts for every couplet" **holds** —
I checked and did not overclaim against it.

---

## 6. Migration — the one general statistic, and what it measures

**Source:** "Circular Migration and Precarity: Perspectives from Rural Bihar",
*The Indian Journal of Labour Economics* (Springer), 12 November 2020, open access,
`https://europepmc.org/article/PMC/PMC7659404`. **Read as full text** via the Europe PMC
REST `fullTextXML` endpoint, not abstract-only.

Instrument: **IHD Bihar Household Survey 2016 — 1,588 rural households across six Bihar
districts, 906 migrant workers.**

- "Nearly two-thirds of the sample households have at least one migrant member."
- "Overall, 18.8% of the individuals in the sample were migrants."
- "among all migrants, 85.2% are male."
- "more than a third of the migrants had migrated for 10 months, and **two-thirds of the
  migrants had migrated for 10 months or more** in the year preceding the survey."
- "Less than 6% of total migrants reported being away … up to 5 months."
- "more than 90% migrant workers from rural Bihar undertake long-distance migration to go
  to other states"; within Bihar 5.8%, outside India 2.8%.
- Table 1, households with a migrant: **Gopalganj 71.0%**, Madhubani 73.1%,
  Araria/Purnia 69.4%, Gaya 54.9%, Rohtas 53.5%, Nalanda 43.5%. (Gopalganj is
  Bhojpuri-speaking.)
- And the reason no national figure appears: the paper states the NSSO and the Census
  "underestimate the extent of migration in India as they are biased towards long-term
  migration and unable to properly capture short-term, seasonal, and circular streams."

**What the post says it measures:** rural households, six districts, one survey year. Not
a national rate; not a figure about Bhojpuri speakers as a population.

### Source that died under me

"An Overview of Out-Migration from Uttar Pradesh Using Census 2011", *Journal of Migration
Affairs* (TISS), `doi:10.36931/jma.2020.2.2.58-66`, was my first choice for a
Census-based figure. Unpaywall still reports it open access. **The DOI now resolves to a
gambling site (`dewi11yup.com`).** Not cited. Flagged here because it is live in Crossref
and will mislead the next agent who reaches for it.

Other candidate considered and dropped: "Impact of adult son migration on the health
wellbeing of older parents…", *BMC Geriatrics*, 2025, PMC12455820 — good abstract
(loneliness log β 0.82; ~18% of parents of migrants rate their health poor) but the survey
is **Koch Bihar, West Bengal**, not the Bhojpuri belt, so it fails the subject test for
this row. Left for a sibling.

Also dropped: "Exploring the legacy of colonial language policies: the case of Mauritian
Bhojpuri", *Journal of Historical Sociolinguistics*, 2026 (de Gruyter) — subject-perfect
but Unpaywall reports `is_oa: false`, no OA location.

---

## 7. Cannibalisation

- **905 live articles; 81 carry `miss` in the slug; zero mention Bhojpuri anywhere.**
- Live Indian-language miss-you pages: Hindi, Marathi, Tamil, Telugu, Punjabi, Gujarati,
  Bengali, Urdu, Kannada, Malayalam. The `miss-you-status-in-<language>` pattern exists
  live for **Marathi, Tamil and Telugu only**.
- Slug free: Strapi `filters[slug][$eq]=miss-you-status-in-bhojpuri` → `total: 0`.
- Category `miss-you-across-miles` exists among the 10 live Strapi categories.

**Split from the nearest sibling, in one sentence:** `miss-you-yaar-meaning-in-hindi`
explains one Persian loanword inside an English sentence and is a Hindi register post,
while this post is about the language a reader chose *instead of* Hindi, centred on the
migration context and the three-way pronoun grade — neither of which the Hindi row
touches. Cross-linked both ways in prose.

---

## 8. First-party data

`facts-snapshot.md` carries 12 miss-you lines; across the 52 posts on disk each is already
used by **18 to 52** of them. **No unused pair exists.** Usage count at the time of
writing:

| uses | line |
|---|---|
| 18 | median 2.6-hour first-save-to-last-edit gap |
| 20 | 88.8% published and shared |
| 25 | 86.4% carry a written memory |
| 27 | 92.1% carry an "open when" letter · 47 city pairs |
| 28 | 2,417 views |
| 37–52 | the rest |

Opened on the two **least-collided** lines (18 and 20). Six facts used in all.

**Differentiation from first-party data here is thin and the audit says so.** Not one of
the twelve lines is Bhojpuri-specific, migrant-specific, or segmented by language, script
or destination — the segment was probed by template, not by audience. This closes with a
new database probe (one that segments miss-you pages by the letter's script or language),
not with more writing.

**City data explicitly refused as evidence.** The 47-city-pair line is cited *and* the
body states in the same breath that city is a picker with a default and is therefore not
evidence of where senders live. On a post whose argument is about where the sender is,
that was the most tempting dishonest inference available and it is not made anywhere.

Disclosure carried in body prose: the database records **which template was opened, never
who received it**; n = 214 over two months; views are page views, not unique visitors.

---

## 9. Templates

`WAVE2-PLAN.json` row 16 gives `/missyou-gf, /watch, /templates`. The task prompt gives
`/missyou-gf, /streak, /templates`. **Went with /streak**, and the reason is argued in the
body: `/watch` gives a video its own page, and video is the worst thing to send a reader
on a metered connection and a cheap handset; `/streak` is one tap a day and matches a
ten-month absence. Both are in `oneOfLinks`, so either is legal.

**`/missyou-gf` is argued against in its own post.** It is mandatory batch-wide and it is
the wrong register for the reader this post is about — a page built for a girlfriend, sent
by a son to his mother, is a worse failure than a wrong pronoun. The body says so plainly
before recommending `/streak`. The link is kept because the mandate is real and because a
partner is still one of the readers here.

---

## 10. Sources (6) and caps

| # | URL | Domain | Journal / publisher | Cap status |
|---|---|---|---|---|
| 1 | archive.org/details/bhojpuri-hindi-shabdkosh | archive.org | University Publications, Varanasi (2019) | cap-exempt |
| 2 | en.wiktionary.org/wiki/Category:Bhojpuri_lemmas | en.wiktionary.org | — | cap-exempt |
| 3 | tatoeba.org/en/sentences/show/2915420 | tatoeba.org | — | cap-exempt |
| 4 | iso639-3.sil.org/code/bho | iso639-3.sil.org | SIL International | cap-exempt |
| 5 | unicode.org/Public/UNIDATA/Blocks.txt | unicode.org | Unicode Consortium | cap-exempt |
| 6 | europepmc.org/article/PMC/PMC7659404 | europepmc.org | **The Indian Journal of Labour Economics** (Springer) | cap-exempt host; journal used by no other post |

- `capcheck.mjs`: no banned URLs used; this post touches none of the capped domains
  (`doi.org` 4, `journals.plos.org` 3, `arxiv.org` 3) nor the one-slot domains.
- **PMCID checked, not just hostname.** PMC7659404 is not among the 77 PMCIDs already
  spent across the batch.
- Journal-level check `capcheck.mjs` cannot do: the only journal named is *The Indian
  Journal of Labour Economics*. *BMC Psychology*, *Frontiers in Psychology*, *Scientific
  Reports* and PLOS are not cited here.
- Subject test: 5 of 6 are about the language or its script; the 6th is about the
  separation of exactly this population. Swap test: none would sit in another row's post.
- Generic context statistics: **1** (the Bihar survey), spent deliberately.
- No paywalled citation. PMC7659404 was read in full, not abstract-only.

---

## 11. Audit

`passed` 47 / `failed` 3, `passed ∩ failed = ∅`, 50 items byte-verbatim from
`references/publish-checklist.md`. Extra self-checks live in `additionalChecks`, not in
`passed`.

Failed, with honest why in the JSON:

1. **Every internal link is a real URL from TEMPLATE_LINKS** — `/blog/miss-you-yaar-meaning-in-hindi`
   is a blog URL, kept because BRIEF-WAVE2 §2 requires the sibling cross-link.
2. **H2s map to the fan-out sub-queries identified in Phase 2** — no fan-out was measured;
   WebSearch budget was zero, so the H2s map to inferred sub-queries. Re-check trigger:
   one autocomplete pull closes it.
3. **Paragraphs 2–3 sentences throughout** — several one-sentence landings and two
   four-sentence paragraphs. Recorded rather than rewritten.

`node scripts/verify-batch.mjs content/batches/2026-09-25-miss-you-30` → my row reports
`1790 words, 11 FAQs, 47/3, miss-you-across-miles, /missyou-gf /streak /templates` with
**no findings naming this slug**. The only batch-level problem is the `batch.json`
blogs-vs-disk line, which the brief says to ignore.
