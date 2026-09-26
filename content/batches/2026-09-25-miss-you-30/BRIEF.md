# BRIEF — 2026-09-25-miss-you-30 (BINDING)

Read this before Phase 1. Everything here overrides your own instincts and, where
they conflict, your own task prompt. It exists because four previous waves of 30
posts each found these failures the expensive way.

---

## 0. Treat the framing claims in your own task prompt as unverified

The orchestrator that wrote your prompt gets things wrong. In the last wave agents
caught **eleven** false framing claims in prompts written by the same orchestrator —
including a diglossia claim about Tamil that was not in Ferguson, a psychology
finding stated backwards, and a corpus count that was never measured. Every one was
corrected inside the post that found it.

If a claim in your prompt is load-bearing for your angle, **verify it before you
build on it.** If it is wrong, say so in `structuralLimitations`, fix the angle, and
keep going. Reporting "the brief said X, the source says Y" is the single most
valuable thing you can do in this batch.

## 1. Phase 0 — the facts, and the caveats that travel with them

Use `content/batches/2026-09-25-miss-you-30/facts-snapshot.md`, **not**
`content/facts.md`. The snapshot is pinned; `npm run facts` rewrites the live file
in place and invalidated 486 `factsUsed` entries across three batches last time.

Every `factsUsed` string must be **byte-verbatim** from the snapshot. Copy, do not
retype.

**This batch has its own first-party segment, and it is the reason these posts can
be cited.** 214 pages on `/missyou-gf`, probed read-only on 2026-09-25. The numbers
worth building on:

- 43.5% password-protect, against 38.5% platform-wide — **the most private segment
  on the platform.** That is a genuine finding about how people send "I miss you"
- 1,434 hug taps across 138 of 214 pages, 512 on one page — **recipient-side**
  behaviour, which no competitor publishes because no competitor measures it
- median letter 88 words, longest 1,024 — a real answer to "how long should this be"
- 28.0% set a reunion countdown; 13.6% record a voice note

**Three caveats are mandatory in body prose wherever these are cited, not only in
the audit:**

1. City, background-music and "together since" are **pickers with defaults**. Their
   fill rates are not sender choices and may not be presented as behaviour.
2. `viewCount` is page views, not unique visitors.
3. n = 214 over two months (template live 2026-07-28). No seasonal claim survives it.

**Do not claim what you did not measure.** Five posts in wave 2 asserted what
competitors rank for on SERPs nobody had run. If you did not run the search, you do
not know.

## 2. The thing that will actually sink this batch: cannibalisation

**There are already 81 live articles with `miss` in the slug**, listed in
`content/keywords/2026-09-25-miss-you-global/site-baseline.md`. They cover every
relationship (bf, gf, husband, wife, crush, ex, brother, sister, mom, dad, friend),
every tone (cute, deep, emotional, heart-touching, romantic, short, long), every
tool (generator, card maker, video maker, page maker) and ten Indian languages.

Before you draft, **read the two or three live slugs closest to your keyword** and
state in `structuralLimitations` what your post does that they do not. Three axes
are never duplicates of each other — **language, occasion, subject** — so a Bisaya
post is not a duplicate of a Tamil one. Anything else needs a real difference.

If there is no honest difference, **say so and recommend the merge.** Three agents
did exactly that last wave and it was the right call both times it was accepted.

**The translation spokes have a hub.** `/blog/i-miss-you-in-different-languages` is
live. If you are writing `i miss you in <language>`, link up to that hub, and do not
restate its table. You are the depth it cannot carry.

## 3. Language verification — the standard this batch is judged on

This is the batch's centre of gravity. Last wave, checking Indian-language lines
against fetched dictionaries cut roughly 40% of them, including Odia ରହ, whose
Praharaj entry opens on "Coition; copulation", and Punjabi ਦੁਨੀਆ, attested as
"Coriander". Those would have been memorable in the wrong way.

**Every non-English line you print must be verified against a fetched source.** Not
from memory. Not from a competitor's listicle. Named dictionaries, treebanks and
corpora, cited in the post:

- Philippine languages — the UP Diksiyonaryong Filipino, Wolff's *Cebuano Visayan*
  dictionary, the Ilocano and Bikol lexicons on `dsal.uchicago.edu` where present,
  `en.wiktionary.org` entries with citations
- Sanskrit — **Monier-Williams is NOT on `dsal.uchicago.edu`.** CORRECTED
  2026-09-25 by the `i-miss-you-in-sanskrit` agent: DSAL's Sanskrit index lists only
  Apte and Macdonell; MW and Cappeller survive there as commented-out HTML and every
  `monier_query.py` / `mw_query.py` call 404s. Cite MW from Cologne
  (`sanskrit-lexicon.uni-koeln.de`), which gives printed page AND column. Apte on
  DSAL is real and works.
- **`webonary.org` (SIL) is UNUSABLE — 403 Cloudflare "you have been blocked".** Reported
  independently by the `i-miss-you-in-kurdish` and `miss-kita-in-bicol` rows. It is on the
  cap-exempt list but does not serve this sandbox. Do not plan a section around it.
- **Verify ISO 639-3 codes at `iso639-3.sil.org`, never from a brief.** The Bicol row
  found three errors in one prompt of mine: `bhk` Albay Bicolano is **Deprecated**
  (2010-01-15, CR 2009-078 Split), `msb` Masbatenyo is **not** a member of the `bik`
  macrolanguage, and "Pandan Bikol" does not exist among its eight members.
- Kannada — Kittel · Nepali — Turner · Sinhala — ~~Clough~~ **CARTER**.
  CORRECTED 2026-09-25 by the `i-miss-you-in-sinhala` agent:
  `dsal.uchicago.edu/dictionaries/clough/` **404s**. DSAL serves **Carter (1924)**, with
  a working `carter_query.py`. Cite it with page numbers, as that row did (මතක්වෙනවා
  p.472, පාළු p.380, ඔබ p.140, ආදරය p.90, අ·මතකය p.54).

  **Verify the dictionary resolves BEFORE you build a section on it.** Two of the three
  DSAL references written into this brief from memory turned out to be wrong — this one
  and Monier-Williams above. Treat every lexical reference here as a lead to check, not a
  fact.

  **What that row found by actually searching Carter, as a model for the others:** a
  full-text search for "miss" returns 4 entries and **all four are "miss a target"**
  (නොවැදීයාම, වරද්දනවා, වාරාවෙනවා, මුක්තකය); "yearn" returns 0. Sinhala has no verb for
  missing a *person*. It also found the **#1 ranking page is wrong**: talkpal.ai gives
  මම ඔයාට හුගාක් අමතකයි as "the most common way", glossing අමතකයි as "remember", while
  Carter p.54 has අ·මතකය = "forgetting, forgetfulness, oblivion". A checkable error in
  the top result, with a page number, is the strongest citation asset available on these
  language SERPs — look for one on yours.

  Two more measurements from that row, worth repeating on any language spoke: Tatoeba's
  Sinhala set is **75 sentences, none about missing anyone**, and Wiktionary's
  "I miss you" phrasebook lists **69 languages and no Sinhala**. Absence of coverage is
  itself reportable evidence.
- Korean, Japanese, Arabic, Russian, Spanish, French, German, Italian, Portuguese —
  the national dictionary where one exists (RAE, Larousse, Duden, Treccani, Priberam,
  Ожегов), otherwise Wiktionary with its citations, plus Tatoeba for attested usage
- Scripts and codepoints — `unicode.org` charts, never a blog's screenshot

**Dictionary URLs go stale and indexes lie.** If a named dictionary is not where this
BRIEF says it is, that is a finding: record it in `structuralLimitations`, cite the
working mirror, and say which one you used. Two agents have now caught this file
pointing at a resource that does not serve what it claims.

Record every line you **cut** and why, in `structuralLimitations`. The cuts are
evidence of method, and reviewers read them.

**The claims below came out of SERPs in the keyword run. They are leads, not
facts. Verify before printing:**

- that no Philippine language has a native verb for "to miss", which is why the
  English loanword is used across Tagalog, Bisaya and Ilocano
- that Japanese 会いたい means "I want to see you" rather than "I miss you"
- that Portuguese *saudade* is untranslatable
- that French *tu me manques* is literally "you are missing from me"

## 4. Sources — caps, and the race that breaks them

4–6 sources. At least 2 pass the **subject test** (about missing someone, about the
language, about long distance — not "about India", not "about the internet"). At
least 1 peer-reviewed and open-access. At most 1 generic context statistic.
Wikipedia 0–2, entity disambiguation only, never counted as research.

**Caps, counted in POSTS not occurrences: a URL in at most 2 posts, a publisher
domain in at most 3.** `doi.org` is a resolver — count the publisher it resolves to.
`eric.ed.gov` and `files.eric.ed.gov` are one domain.

**AMENDED 2026-09-25 — repositories are not publishers.** `europepmc.org`,
`pmc.ncbi.nlm.nih.gov`, `pubmed.ncbi.nlm.nih.gov`, `books.google.com`,
`archive.org` and Project Gutenberg are now cap-EXEMPT hosts. Three papers reached
through PMC are normally three different journals, which is the opposite of the
concentration this cap exists to prevent. Counting the host cost this batch two real
sources — an Arabic diglossia-and-orthography paper and Hentschel 2023 on
Ukrainian-Russian Suržyk, the latter already read in full.
**The cap still applies, to the JOURNAL or publisher named in the citation, not the
host: no journal in more than 3 posts.** Name the journal in your source note so a
human can check it; `capcheck.mjs` cannot.

Run `node content/batches/2026-09-25-miss-you-30/capcheck.mjs` before you save. It
counts posts, not URLs — an agent last wave reported a false breach because it
counted occurrences.

**The source-cap RACE.** Six of you are writing at once. Your check was accurate
when you ran it and can be stale by the time you save. `frontiersin.org` reached 4
posts that way. **Re-run capcheck immediately before writing your file**, and if you
are the one over, swap your least load-bearing citation rather than arguing.

The domains in `verify.config.json → capExemptDomains` are reference instruments
and are exempt from the cap. They are not exempt from being fetched and read.

WebSearch has a **200-call session limit shared across all six of you**. Budget ~4
searches: one for the SERP, three for research. For papers, prefer
`node content/batches/2026-09-25-miss-you-30/findpapers.mjs "<query>"` — it queries
Crossref and Europe PMC directly and costs no WebSearch call. Crossref indexes
predatory journals; check the venue before citing.

## 5. Hard rules the verifier enforces

- **FAQs live in `article.faqs` and the FAQPage JSON-LD only.** Never in
  `contentMarkdown` — Strapi renders them separately and the reader sees them twice.
- **The body must reach 1,500–1,800 words without the FAQs.** The verifier splits on
  whitespace and hard-fails outside that range.
- 8–12 FAQs. None may be ≥0.85 similar to a body H2.
- **Price guard.** Do not write "free", "costs you nothing", "no cost" or a price of
  any kind. `content/facts.md` has an empty pricing block, so every such claim is
  unsourced. Three agents hit this last wave; one had to cut "length is free".
- `templateUrls` must be **relative** (`/missyou-gf`), 1–3 of them, from
  `TEMPLATE_LINKS` in `app/lib/prompt.ts`. An invented slug 404s.
- Mandatory link `/missyou-gf`; plus at least one genuine alternative from
  `oneOfLinks` in `verify.config.json`, **with the reason it suits that reader
  better**. If none of them honestly suits your reader, say so rather than bolting
  one on.
- Check the slug is free:
  `https://strapi.subhsandesh.in/api/articles?fields[0]=slug&filters[slug][$eq]=<slug>`

## 6. Audit arithmetic

`passed ∩ failed = ∅` and `|passed| + |failed| = 50`. Strings **byte-verbatim** from
`references/publish-checklist.md`. An item runs from its `- [ ]` marker to the next
marker, blank line or heading, whitespace-collapsed — several wrap across lines, and
retyping them from memory is how three files ended up asserting an item both passed
and failed.

Run `node scripts/verify-batch.mjs content/batches/2026-09-25-miss-you-30` yourself
before reporting done.

## 7. Scratch files

The scratchpad is **shared** between all six of you. Name every temporary file
`<your-slug>-<purpose>.md`. Three agents once wrote `body.md` simultaneously and
overwrote each other mid-draft.
