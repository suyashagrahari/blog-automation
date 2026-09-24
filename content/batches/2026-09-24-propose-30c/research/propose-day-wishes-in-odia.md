# Research brief — `propose day wishes odia`

- **Slug:** `propose-day-wishes-in-odia` — checked against Strapi on 2026-09-24, returns `total: 0`, free.
- **Batch:** `2026-09-24-propose-30c` (wave 4)
- **Category:** `modern-romance`
- **Demand:** 2 prefixes, ordinal only. Low. This is a visibility asset, not a converting page.
- **Date:** `date` on this machine returned `Thu Sep 24 13:21:00 IST 2026`. Propose Day 2027 = **Monday 8 February 2027** (Rose Day Sun 7 Feb, Valentine's Day Sun 14 Feb).

---

## Phase 1 — SERP (measured, with its limits stated)

One `WebSearch` call for the exact keyword on 2026-09-24. **The tool is US-served, not
India-geo**, so this is *not* the SERP an Odisha searcher sees and nothing below should be
read as a ranking claim. What the ten returned links were:

| Result | Type | What it is |
|---|---|---|
| pinterest.com pin | Image board | "Happy Propose Day Odia Shayari, Photo, Status" — images, no text page |
| bsmjsambalpuri.in (2022) | Regional blog | Odia + **Sambalpuri** photo-shayari post, images-first |
| giftalove.com (via Google Translate) | **Competitor** — gifting retailer | English propose-day quotes, machine-translated. Not read, not cited, not linked. |
| en.wikipedia.org/wiki/Propose_Day | Encyclopaedia | Entity page, no Odia |
| lifekafunda.com | Card builder | Odia new-year card, wrong occasion |
| quora.com | Q&A | One user answer giving a romanised Odia marriage phrase |
| en.wikipedia.org ×3 (Utkala Deepika, Odia Hindu wedding, Odisha Day) | Encyclopaedia | Off-intent |
| dribbble.com | Design shot | Off-intent |

**What I can honestly say from this:** the ten results contain no page that gives Odia lines
in ଓଡ଼ିଆ script *with* Roman transliteration *and* an English gloss, and none that marks
register. I did not fetch the competitor result and make no claim about its internals. I
have **not** measured the India-served SERP, and the `content/keywords/2026-09-16-propose-100/`
SERP set does not include this keyword.

## Phase 2 — Gap and angle

- **Table stakes:** a set of copyable lines; the 8 February date; "propose" framed for Valentine week.
- **The gap:** nothing in the measured set (a) verifies its Odia against a published dictionary,
  (b) marks ତୁ / ତୁମେ / ଆପଣ register, or (c) reports what it cut.
- **Fan-out sub-queries:** what is an Odia propose-day wish · which register do I use ·
  how do I write "I love you" in Odia · will Odia script show on their phone · is Odia the
  same as Bengali · what if they say no · Sambalpuri vs standard Odia.

**Angle:** wins by being the only Odia Propose Day page where every published line is traced
to a Praharaj headword and an attested verb form, the register is marked, and the seven cut
lines are listed with the dictionary evidence that killed them.

## Phase 3 — Sources

Research sources (4), all fetched:

1. **Sahoo, K. (2013), "Pronouns, Address Forms and Politeness Strategies in Odia",
   *Acta Linguistica Asiatica* 3(1), DOI 10.4312/ala.3.1.29-46** —
   `https://journals.uni-lj.si/ala/article/view/65`. Peer-reviewed, open access.
   **Full text read** (PDF galley `/ala/article/download/65/324`). Three second-person singular
   pronouns *tu* / *tume* / *āpaṇa*; *tu* intimate but "due to its lack of honorific content…
   used with servants, socially low class people"; *tume* intermediate, used for in-laws, male
   family members, colleagues, **strangers of the same age-group**, neighbours, elders; *āpaṇa*
   honorific, students→teacher. Three politeness levels: plain / simple polite / advanced polite.
   Honorific command `karantu`, honorific present `-nti`, 3sg honorific `se āsuchanti` vs plain
   `se āsuchi`. Data from the EMILLE/CIIL corpus plus the author's native-speaker judgements.
2. **Minz, M. (2015), "A calligraphic approach to Odia script", Typography Day 2015** —
   `https://www.typoday.in/2015/spk_papers/Manish%20Minz-Typographyday2015.pdf`.
   Conference paper (Typography Day series), **full PDF text extracted and read**. Proto-Odia
   11th–14th c. AD used in Assam, Bengal and Odisha; modern Odia *and* modern Bengali both
   descend from it; "The Bengali script whereas, retained the horizontal tip line of the
   original script, **it is said that** Odia script changed them to curves due to the
   exigencies of the writing material, the palm leaf." Palm leaves called *Tari*; metal stylus
   *Kitta lekhani* / *Loha kantaka*; incised, then smeared with carbon-based ink and cleaned
   with sand. Script fully developed by the Suryavanshi kings (1435–1540 AD); main development
   under the Ganga dynasty 1077–1435 AD. "Odia is now stated as one of the six classical
   languages of India." 11 *Swaravarn*, 38 *Byanjanbarn*, left to right.
   **Note the hedge — the paper reports the palm-leaf explanation, it does not demonstrate it.**
3. **Central Institute of Indian Languages (Ministry of Education, Government of India),
   "Classical Languages"** — `https://www.ciil.org/clalanguages.php`. Fetched. Lists **ODIA**
   among the classical languages with a Centre of Excellence at CIIL Mysore; functions include
   "Procure manuscripts and undertake digitization". Page publishes no publication date (it
   carries "Last updated on : 20/08/2024", which is a modification date) → `publishedDate` omitted.
4. **Panda, D. P. & Jayaraj, T. (2026), "Negation in Regional Varieties of Odia: Synchronic
   Patterns and Variations", *Annali di Ca' Foscari: Serie Orientale* 62** —
   `https://edizionicafoscari.unive.it/en/edizioni4/riviste/annali-di-ca-foscari-serie-orientale/2026/62/negation-in-regional-varieties-of-odia-synchronic/`.
   Open access, peer reviewed, CC BY, IIT Indore. **Abstract only — the article is marked
   "Published Forthcoming" and its DOI `10.30687/AnnOr/2385-3042/2026/62/003` returned
   "DOI Not Found" on 2026-09-24, so no full text exists to read.** Cited only for what the
   abstract states: Odia "forms a continuum of regional varieties", and the paper analyses
   **eight** — Kataki, Sambalpuri, Debagadia, Sundargadi, Singhbhumi, Baleswari, Desia, Ganjami.
   Submitted 25 March 2026, accepted 24 June 2026.

Rejected: `jpl.letras.ulisboa.pt` (Odia loanword phonology) — behind an Anubis anti-bot
challenge, could not read it. `academia.edu` palm-leaf paper — login wall. `nature.com`
npj Heritage Science palm-leaf restoration paper — publisher blocks automated requests and
it is about conservation chemistry, not letterform. `orissapost.com` — news, not needed once
Minz carried the same material with a citable hedge.

**Verification instruments — credited in prose, kept out of `sources` per the BRIEF exemption:**

- **Praharaj, G. C., *Purnnachandra Odia Bhashakosha*,** via the Digital Dictionaries of South
  Asia, University of Chicago — `https://dsal.uchicago.edu/dictionaries/praharaj/`. Queried
  headword-by-headword through `praharaj_query.py`. This is the dictionary of record for Odia.
- **UD Odia-ODTB** (Universal Dependencies) — `https://universaldependencies.org/treebanks/or_odtb/`.
  CC BY-SA 4.0, genre nonfiction/news. I pulled the CoNLL-U directly: **456 sentences,
  5,818 tokens** — the whole treebank.
- **Tatoeba**, Odia (`ori`) — **402 sentences** on 2026-09-24. Used only for second-person
  agreement, which the treebank barely has.
- **The Unicode Standard, chapter 12 (South and Central Asia-I)** — Oriya block U+0B00–U+0B7F;
  states that the preferred Latin transcription "has shifted to the spelling Odia" while the
  standard retains "Oriya" for immutable character names; documents the visible virama and
  conjunct behaviour. Its palm-leaf remark is generic to South Indian scripts and hedged
  ("Some scholars suggest…"), so it does **not** on its own support an Odia-specific claim.

Cap discipline: `capcheck.mjs` run at source-selection and again immediately before saving.
`journals.uni-lj.si` goes to 2 posts (a *different* ALA article, `/view/219`, is spent in
wave 3). `edizionicafoscari.unive.it` is a distinct hostname from the `edizionicafoscari.it`
URL spent in wave 3, but it is the **same publisher** — flagged in `structuralLimitations`.
`typoday.in` and `ciil.org` are new to the cluster.

---

## The Odia ledger — 17 drafted, 10 published, 7 cut

Every published line decomposes into (a) Praharaj headwords and (b) a verb ending attested in
ODTB or Tatoeba. Every cut has dictionary evidence behind it.

### Published (10)

| # | Odia | Roman | English | Attestation |
|---|---|---|---|---|
| 1 | ମୁଁ ତୁମକୁ ଭଲ ପାଉଛି । | Muñ tumaku bhala pāuchi | I love you | ମୁଁ Praharaj p.6564 + ODTB ×14; ତୁମକୁ Tatoeba `ori`; ଭଲ ପାଇବା p.6055 "to love"; 1sg `-ଉଛି` ODTB ("ମୁଁ … ଯାଉଛି") |
| 2 | ତୁମେ ମୋ ଜୀବନ । | Tume mo jībana | You are my life | ତୁମେ Tatoeba ×4; ମୋ ODTB ×7; ଜୀବନ p.3005 **sense 7** "one's dearest person; beloved person" |
| 3 | ତୁମେ ମୋ ସାଙ୍ଗ ହେବ କି ? | Tume mo sāṅga heba ki? | Will you be my companion? | ସାଙ୍ଗ p.8361 "companionship; companion"; 2sg fut `-ବ` ODTB ("ତୁମେମାନେ … ବଡ଼ ହେବ"); `କି` ODTB + Tatoeba ("ଦେଖିଲ କି?") |
| 4 | ଆଜି ମୁଁ ତୁମକୁ ଗୋଟିଏ କଥା କହିବି । | Āji muñ tumaku goṭie kathā kahibi | Today I'll tell you one thing | ଆଜି p.722; ଗୋଟିଏ p.2303 (marked **ଆଦରାର୍ଥକ**, respectful); କଥା p.1277; କହିବା p.1436; 1sg fut `-ବି` ODTB ("ମୁଁ ବିବାହ କରିବି ନାହିଁ") |
| 5 | ମୁଁ ତୁମ ସାଙ୍ଗରେ ରହିବାକୁ ଚାହୁଁଛି । | Muñ tuma sāṅgare rahibāku cāhuñchi | I want to stay with you | ସାଙ୍ଗରେ ODTB; ରହିବ ODTB; ରହିବା named at Praharaj p.7029; ଚାହୁଁଚି ODTB (see spelling note) |
| 6 | ମୋ ମନ ତୁମ ପାଖରେ । | Mo mana tuma pākhare | My heart is with you | ମନ p.6253 + ODTB ×2; ପାଖ p.4707 "nearness; proximity"; loc `-ରେ` ODTB |
| 7 | ତୁମ ହସ ମୋ ଦିନର ସବୁଠାରୁ ଭଲ କଥା । | Tuma hasa mo dinara sabuṭhāru bhala kathā | Your laugh is the best thing in my day | ହସ p.9015 "laugh; laughter"; ଦିନ p.3762; ସବୁଠାରୁ ଭଲ ODTB ("ସବୁଠାରୁ ଭଲ କାମ ଥିଲା") |
| 8 | ମୁଁ ତୁମର ଉତ୍ତର ଅପେକ୍ଷା କରିବି । | Muñ tumara uttara apekṣā karibi | I'll wait for your answer | ଉତ୍ତର p.945 "reply; answer"; ଅପେକ୍ଷା କରିବା p.395 "to wait; to await"; ତୁମର given as a variant at p.3509 |
| 9 | ତୁମେ ଯାହା ଉତ୍ତର ଦେବ, ମୁଁ ମାନିବି । | Tume yāhā uttara deba, muñ mānibi | Whatever answer you give, I'll accept it | ଯାହା ODTB ×6; 2sg fut `-ବ`; ମାନିବା p.6471 "to obey; to comply with" |
| 10 | ମୁଁ ତୁମକୁ ବିବାହ କରିବାକୁ ଚାହୁଁଛି । | Muñ tumaku bibāha karibāku cāhuñchi | I want to marry you | ବିବାହ p.5688 "Marriage; wedding" + ODTB ("ମୁଁ ବିବାହ କରିବି ନାହିଁ") |

Spelling note carried into the post: ODTB writes the 1sg of "want" **ଚାହୁଁଚି**; the published
lines use the standard **ଚାହୁଁଛି**. The `-ଛି` shape is separately attested in Tatoeba
(ତୁମେ … ଭାବୁଛ) and in ODTB (ଦେଖିପାରୁଛି), so the ending is attested even where that exact
spelling is not.

### Cut (7)

1. **ତୁ ମୋ ଜୀବନ** — Sahoo 2013 (full text): *tu* lacks honorific content and "is used with
   servants, socially low class people"; Praharaj glosses ତୁ (p.3498) as "Thou (contemptuously
   used)", with affectionate use only as a secondary note. Wrong pronoun for an ask.
2. **ମୁଁ ତୁମ ସାଥେ ରହିବି** — **ସାଥେ returns no headword in Praharaj**, and neither does ସାଥୀ.
   Hindi/Bengali-shaped. Replaced throughout by ସାଙ୍ଗ / ସାଙ୍ଗରେ.
3. **ତୁମେ ମୋ ପ୍ରେମିକା** — **ପ୍ରେମିକା returns no headword in Praharaj.**
4. **ମୁଁ ତୁମକୁ ବାହା ହେବାକୁ ଚାହୁଁଛି** — Praharaj marks ବାହା (p.5578) **ଗ୍ରା.** (rural/colloquial)
   for marriage, and its ordinary ଦେ. sense is "Arm; strength". Replaced with ବିବାହ, which is
   also what the treebank attests. (The Quora result in the SERP used the ବାହା form; the
   dictionary is the reason I went the other way, not the competitor.)
5. **ରହ ମୋ ପାଖରେ** — Praharaj's headword ରହ (p.7029) opens on "Coition; copulation", with the
   Odia imperative only as a later sense. Exactly the ಬಾಳು failure mode from wave 3. Cut.
6. **ମୁଁ ତୁମକୁ ଚାହେଁ** ("I want you") — Praharaj glosses ଚାହିଁବା (p.2634) as "to look at; to
   see; to wait in expectation", not "to desire". Kept only the `…ବାକୁ ଚାହୁଁଛି` frame, which
   the treebank does attest in the modern "want" sense; dropped the bare form.
7. **ତୁମେ ଖୁସିରେ ରୁହ** — ଖୁସି is attested (p.2020, a Persian loan) but Praharaj also records a
   ଗ୍ରା. sense that is crude, and ରୁହ inherits problem 5. Cut rather than risk it.

### The two lane claims, tested

- **Palm leaf → rounded letterforms: PARTLY verified, and I say so in the post.** Minz (2015)
  states it with the hedge "it is said that"; the Unicode Standard's related remark is
  "Some scholars suggest…" and is about South Indian scripts generally, not Odia specifically.
  I found no source that demonstrates it. The post reports it as the standard explanation and
  names the hedge, and what *is* solid is the material record Minz documents: *Tari* leaves,
  a *Kitta lekhani* stylus, incised strokes inked with lampblack.
- **Classical-language status: verified.** CIIL (Ministry of Education) lists Odia among the
  classical languages with its own Centre of Excellence; Minz independently records Odia as
  "one of the six classical languages of India" as of 2015. I did **not** find a fetchable
  primary notification with the designation date, so the post gives no date for it.

### Cannibalisation

Sibling `propose-day-quotes-in-bengali` (wave 3) and a concurrent Assamese post exist. The
distinction is made *inside* this post rather than asserted: Minz documents that modern Odia
and modern Bengali both descend from proto-Odia (11th–14th c.) and that Bengali **kept** the
horizontal head-line Odia curved away — so the two are siblings, not variants. No source,
no lane and no line is shared with either post. This post's lane is script shape and classical
status; the Bengali post's is honorifics/literary, the Assamese post's is low-resource NLP.

### Internal links

`/proposal` (mandatory) and `/love-gf` (the genuine alternative — in Indian usage "propose"
usually means asking someone to be your girlfriend or boyfriend, not to marry you, and line 3
is exactly that ask). Both templates are **English-language interfaces**; the Odia is whatever
the sender types in. Said plainly in the body.

### Honest position

Low demand, copy-text intent, near-zero conversion. Target position 6–10, not 3. The
February SERP is an annual news cycle owned by large publishers with domain authority this
site does not have.
