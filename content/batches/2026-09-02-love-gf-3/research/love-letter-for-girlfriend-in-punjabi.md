# Research brief — `love letter for girlfriend in punjabi`

- **Batch**: `2026-09-02-love-gf-3` (wave 3, love-gf cluster)
- **Slug**: `love-letter-for-girlfriend-in-punjabi` — checked against Strapi on 2026-09-02, `filters[slug][$eq]` returned `total: 0`
- **Category**: `modern-romance` (confirmed present in the live 10-category list)
- **Demand**: 20x prefix hits in the 2026-09-02 India-geo autocomplete harvest. Ordinal, not a volume.
- **Secondaries folded into body/FAQs**: `love letter to girlfriend in punjabi language` (20x), `love letter to girlfriend in punjabi text` (19x), `love letter for gf in punjabi` (17x), `love letter for girlfriend in punjabi text` (11x), `short love letter for girlfriend in punjabi` (8x), `love letter in punjabi language for girlfriend` (7x)

---

## Phase 1 — SERP analysis (2026-09-02)

WebSearch on the exact keyword returned Instagram, YouTube (x2), Scribd, Nojoto,
a Blogspot SMS page, Pinterest, two `ai.tenorshare.com` sample pages and the
Wikipedia article for the 2016 film *Love Punjab*. Six of ten results are either
an idea grid, a video, or an entity-name collision — the weak SERP the brief
measured on 2026-08-31 is still weak.

Metrics below were measured directly on 2026-09-02: word count from the
tag-stripped HTML, Gurmukhi character count by Unicode range `U+0A00–U+0A7F`.

| Page | Words | Gurmukhi chars | Romanisation | H2s | FAQ | JSON-LD | Byline / date | Optimising for |
|---|---|---|---|---|---|---|---|---|
| `ai.tenorshare.com` — funny love letter in Punjabi | ~2,153 | 4,618 | **none** | 11 | no | 1 block | "Andy Samue \| 2024-08-05" | occasion-indexed sample dump feeding an AI-writer product |
| `ai.tenorshare.com` — love letter to boyfriend in Punjabi | ~2,525 | 5,580 | **none** | 11 | no | 1 block | "Andy Samue \| 2024-08-01" | same template, different relationship |
| `lovelysmsforgirlfriend.blogspot.com` — Punjabi sms | ~1,408 | **0** | Roman only | 12 | no | none | none | pre-2014 SMS list, abandoned |
| `en.wikipedia.org` — Love Punjab | n/a | n/a | n/a | n/a | no | n/a | continuously edited | a 2016 Punjabi film about an NRI family in Canada — pure entity collision |
| `pinterest.com` / `instagram.com` idea pages | ~72 | 0 | none | 0 | no | 1 block | none | image grid, no text answer at all |

Where the direct answer appears: on both Tenorshare pages, after a ~100-word
throat-clearing intro and a table of contents. On the Blogspot page there is no
answer, only a list. Nothing in the top ten answers "which script", "which
pronoun", or "what if she can't read Gurmukhi".

Named entities the ranking pages carry: Punjabi, Valentine's Day, occasions
(birthday, anniversary, long distance, apology). Entities none of them carry:
Gurmukhi, Shahmukhi, ਤੂੰ/ਤੁਸੀਂ, Heer Ranjha, Landa.

Data cited by any of the five: **none**. No page carries a single statistic,
study, or dated source.

---

## Phase 2 — Gap analysis

**Table stakes** — present on all the sample-letter pages, so the post must have
them: actual Punjabi letter text; a short version; occasion coverage; some
statement of why writing in Punjabi is different from writing in English.

**The gap** — none of the five covers any of this:

1. **Script.** No page distinguishes Gurmukhi from Shahmukhi, so a reader whose
   girlfriend's family is from Pakistani Punjab is handed a letter she cannot read.
2. **Romanisation.** The two pages that do print Gurmukhi print 4,618 and 5,580
   Gurmukhi characters and **zero** romanised lines. The Blogspot page is the
   mirror image: 0 Gurmukhi characters, Roman only. Nobody gives both.
3. **Pronoun.** ਤੂੰ vs ਤੁਸੀਂ is never named, and neither are the dative forms
   (ਤੈਨੂੰ / ਤੁਹਾਨੂੰ) or the copulas (ਹੈਂ / ਹੋ) that follow from the choice.
4. **Writer gender.** Punjabi's habitual participle agrees with the *speaker*, so
   ਕਰਦਾ/ਕਰਦੀ changes with who is writing. No page says so, and the samples are
   uniformly masculine.
5. **The vocative.** ਨੀ (to a female) vs ਵੇ (to a male) is a live register choice
   in Punjabi and appears nowhere.
6. **The copula error.** A large share of the circulating samples pair ਤੂੰ with
   third-person ਹੈ instead of ਹੈਂ.
7. **Delivery.** No page addresses what happens when she cannot read the script.

**Stale data**: the Blogspot page is undated and reads pre-2014. The Tenorshare
pages are dated 2024-08-01 and 2024-08-05 but cite nothing, so there is no stale
*number* to supersede — only an absence to fill.

**Unanswered questions the pages raise**: they all assert Punjabi is more
emotional than English and none supports it. Dewaele 2011 does.

**Fan-out sub-queries → H2/H3/FAQ mapping**

| Sub-query | Where it is answered |
|---|---|
| How do I write "I love you" in Punjabi? | H3 1 and 2, FAQ 1 |
| Gurmukhi, Shahmukhi or Roman? | H2 "Gurmukhi, Shahmukhi or Roman", FAQ 2, FAQ 5 |
| ਤੂੰ or ਤੁਸੀਂ for a girlfriend? | H2 "ਤੂੰ or ਤੁਸੀਂ", FAQ 3 |
| Does the verb change if a woman writes it? | H3 2, FAQ 4 |
| What do I call her? | H3 3, FAQ 9 |
| Short version? | H2 intro + all four H3s, FAQ 7 |
| Copy-paste Punjabi text? | H3 1–4, FAQ 6 |
| What if she can't read Gurmukhi? | H2 "When a Punjabi love letter is the wrong choice", FAQ 12 |
| Why does the romanisation look wrong? | H2 "The four decisions", FAQ 10 |
| Paper or a page? | Comparison table, FAQ 11 |
| Can I do this without good Punjabi? | FAQ 8 |

**Angle** (recorded as `batchMeta.angle`): wins by being the only post that makes
the four Punjabi-specific decisions in a love letter explicit — Gurmukhi vs
Shahmukhi vs Roman, ਤੂੰ vs ਤੁਸੀਂ, the writer's-gender verb form and the ਨੀ
vocative — with every Gurmukhi line paired to a romanisation, priced against
SubhSandesh's own 14,607 views on `/love-gf` and its 50.3% phone-open rate.

---

## Phase 3 — Sources

Five sources, all fetched and read in full (no abstract-only citations). None
appears in `USED-SOURCES.md`. Four pass the subject test.

| # | Source | Domain | Type | Date | Claim used | Subject test | Swap test |
|---|---|---|---|---|---|---|---|
| 1 | Brandt, "Script as a potential demarcator and stabilizer of languages in South Asia", *Language Documentation & Conservation* Spec. Pub. 7 | `scholarspace.manoa.hawaii.edu` | peer-reviewed volume chapter, open access | Jan 2014 | ~60m Punjabi speakers in Pakistan, 44.15% of population (1998 census), written in Shahmukhi; barely 30m in India (2001 census), mostly Gurmukhi, a modified Landa script | pass — about the language and its scripts | pass (Punjabi-specific) |
| 2 | Saxena, *A Sociolinguistic Study of Panjabi Hindus in Southall*, DPhil, York | `etheses.whiterose.ac.uk` | doctoral thesis, open access | Aug 1995 | Table 7.5/7.6: of 86 informants surveyed 1988–89, 7.4% wrote a personal letter to a South Asian friend in the UK in Punjabi vs 63.0% English; 21.0% to relatives in India | pass — script choice for personal letters | pass |
| 3 | Alam, "Functions of Code-Switching between Punjabi, Urdu and English", *International Journal of Linguistics* 3(1) | `macrothink.org` | peer-reviewed, CC BY | 2011-12-10 | among Punjabi-Pakistanis in London, "Punjabi is serving 'tu' relationships" while Urdu serves the 'vous' relationship; switching to Urdu out-groups the addressee | pass — Punjabi register and intimacy | pass |
| 4 | Haidar, Wali, Tahir & Parveen, "'I Am Not Punjabi, My Parents Are'", *Acta Linguistica Asiatica* 11(2) | `revije.ff.uni-lj.si` | peer-reviewed, CC BY-SA, DOAJ-indexed | 2021-07-30 | 60 Punjabi students aged 18–22 at four Islamabad universities; speakers disowning the language and identity; participant P28 mocked for speaking Punjabi on the phone (interview 5 March 2019); women least likely to use or transmit it | pass — Punjabi language attitudes | pass |
| 5 | Dewaele, "Reflections on the Emotional and Psychological Aspects of Foreign Language Learning and Use", *Anglistik* 22(1) | `eprints.bbk.ac.uk` | scholarly review article, open access | 2011 | reports Pavlenko's (2006) analysis of 1,039 multilinguals: 65% feel different in another language, ~25% do not, 10% ambiguous; and the Greek/English story-retelling asymmetry | pass — language of emotion | **fails** — could sit unchanged in the Malayalam, Assamese or Nepali sibling posts |

**Peer-reviewed + open access requirement**: satisfied by #4 (*Acta Linguistica
Asiatica*, CC BY-SA, indexed in DOAJ) and independently by #3 (CC BY).

**Generic context statistics**: zero. The 1998/2001 census figures reach the post
through Brandt's language-specific chapter, not through a census portal, so the
one permitted context-statistic slot is unused.

**Wikipedia**: zero body links. Wikipedia + Wikidata pairs are used only in
`structuredData` `sameAs`, which the reference file says does not count against
the 0–2 body budget.

**Domain cap note for the orchestrator**: `eprints.bbk.ac.uk` appears in one
earlier post (`/id/eprint/709/`) per `USED-SOURCES.md`; my URL
(`/id/eprint/5096/1/Dewaele2011Anglistik.pdf`) is different, so the domain sits
at 1 inside batch 3 and 2 across all batches — no breach on either cap. If a
sibling in batch 3 also cites `eprints.bbk.ac.uk` twice more, **the URL I would
give up is the Dewaele PDF**, because it is also the one source that fails the
swap test. I have not dropped or swapped it; escalating per the brief.

**Rejected sources**: `tandfonline.com` "Language, politics, and identity:
Challenges to the Panjabi language in India" (2024) — OpenAlex lists it as open
access but the PDF returns HTTP 403 behind Cloudflare, so the reader cannot
verify it. `eprints.gla.ac.uk` RER-LX (2023) — host unreachable. `unicode.org`
chapter 12 — a sibling agent in this batch had already indexed it. `aclanthology.org`,
`arxiv.org`, `pmc.ncbi.nlm.nih.gov`, `frontiersin.org` — closed per the brief.

### Language verification, not cited as sources

Every Gurmukhi word printed in the post was checked against the English
Wiktionary Punjabi entry (`en.wiktionary.org` API, 2026-09-02) for spelling,
gloss and romanisation. This is a fact-check, like a panchang date check, so it
is not in `batchMeta.sources` and gets no `citation` entry.

Verified: ਤੂੰ *tū̃* (you, thou), ਤੁਸੀਂ *tusī̃* (plural of ਤੂੰ), ਤੈਨੂੰ *tainū̃*
(dative of ਤੂੰ), ਤੁਹਾਨੂੰ *tuhānū̃* (dative of ਤੁਸੀਂ), ਤੇਰਾ *terā* (genitive of
ਤੂੰ), ਤੇਰੇ *tere* (oblique of ਤੇਰਾ), ਮੈਂ *maĩ* (I), ਮੇਰੀ *merī* (f. of ਮੇਰਾ),
ਹਾਂ *hā̃* (1sg present of ਹੋਣਾ), ਹੈਂ *aĩ* (2sg present), ਹੋ *o* (2pl present),
ਪਿਆਰ *piāra* (love), ਪਿਆਰਾ *piārā* (dear/beloved), ਕਰਦਾ *kardā* (m. habitual
participle of ਕਰਨਾ), ਕਰਦੀ *kardī* (f.), ਜਾਨ *jān* (life, soul), ਦਿਲ *dil*
(heart), ਸੋਹਣਾ/ਸੋਹਣੀ *sohṇā/sohṇī* (beautiful), ਹੀਰ *hīr* (Heer; also "a
beloved, a female lover"), ਰਾਂਝਾ *rāñjhā* (Ranjha; figuratively a lover), ਨੀ
*nī* (vocative to a female — "ਮਾਏ ਨੀ ਮਾਏ"), ਵੇ *ve* (vocative to a male, used by
women), ਨਹੀਂ *nahī̃* (not), ਬਿਨਾਂ *binā̃* (without, postposition), ਹਮੇਸ਼ਾ
*hameśā* (always), ਨਾਲ *nāl* (with), ਲੱਗਣਾ *laggaṇā* (to stick, be attached),
ਗੱਲ *galla* (matter), ਸੱਜਣ *sajjaṇ* (beloved, friend).

**Not verified — flagged in `auditReport.honestAssessment`**: ਪਿਆਰੀ (feminine of
ਪਿਆਰਾ; no Wiktionary entry), ਲੱਗਦਾ (regular habitual participle of ਲੱਗਣਾ, but
the inflected form has no entry), ਸੋਹਣੀਏ (the song-register vocative; no entry,
so it is **not** printed in the post), the idiom ਦਿਲ ਨਹੀਂ ਲੱਗਦਾ as a whole, and
the two composed ਤੁਸੀਂ-register lines.

**Romanisation convention stated in the post**: pronounced form rather than the
dictionary's inherent-vowel form (ਪਿਆਰ as *piār*, not *piāra*), and the silent
tonal ਹ marked as the dictionary does (ਹੈਂ = *aĩ*, ਹੋ = *o*).

**One Wiktionary error noticed and not repeated**: the ਤੇਰਾ entry prints the
Shahmukhi spelling as میرا (*merā*). No Shahmukhi word forms are printed in the
post for this reason — only the script is described.

---

## Phase 0 — first-party facts used

From `content/facts.md`, regenerated 2026-09-02. Three land inside the first 150
words (987/29.2%, 14,607/35.2% of 41,486, and 50.3%).

- `Most popular creation: "I love you" page (/love-gf) — 987 pages, 29.2% of everything created — measured 2026-09-02`
- `Most-viewed template: love-gf — 14,607 views, 35.2% of all page views — measured 2026-09-02`
- `41,486 recorded views of shared pages — measured 2026-09-02`
- `50.3% of shared pages are opened on a phone (20,853 of 41,486 views) — measured 2026-09-02`
- `Median gap between a page's first save and its last edit: 7.2 hours — sampled on "I love you" page (/love-gf), n=987 — measured 2026-09-02`
- `42.8% of creators password-protect their page before sharing it (1,444 of 3,377) — measured 2026-09-02`
- `#4 page type: Darling romantic page (/darling) — 349 created, 10.3% of all pages — measured 2026-09-02`
- `3,377 personalised pages created since 2026-03-12, across 15 page types — measured 2026-09-02`

**The Pricing block in `facts.md` is empty**, so the post says nothing about cost
in any direction. The gap is recorded here: readers arriving on "love letter for
girlfriend in punjabi" plausibly want to know whether making a shareable page
costs anything, and neither the body nor an FAQ answers it. Fill the manual
pricing block in `facts.md` and this becomes an FAQ.

---

## Phase 5 — internal links and Strapi targeting

- `https://subhsandesh.in/love-gf` — mandatory. Placed in "The two mistakes"
  section, after the script and romanisation problem has been established.
- `https://subhsandesh.in/darling` — mandatory. Placed in the comparison table row,
  after the reach argument.
- `https://subhsandesh.in/templates` — third link, in the closing paragraph.
- `batchMeta.templateUrls`: `/love-gf` and `/darling` only — the two genuinely
  relevant templates. `/templates` is a browse link, not a related template.
- `categorySlug`: `modern-romance`.

`structuredData` carries two blocks: an `@id`-matched `BlogPosting` enrichment on
`https://subhsandesh.in/blog/love-letter-for-girlfriend-in-punjabi#post` with
`about`, `mentions` and a five-entry `citation` mirroring `batchMeta.sources`; and
an `ItemList` mirroring the four H3s in order. Every `sameAs` was checked through
the Wikipedia API on 2026-09-02 with its Wikidata QID paired: Punjabi language
Q58635, Gurmukhi Q689894, Shahmukhi Q133800, Heer Ranjha Q3631228, Love letter
Q1056617.

---

## Phase 6 — audit summary

47 of 50 checklist items pass. Three fail, all structural rather than fixable:

1. `metaTitle 50–60 characters, exact keyword in the first five words (hard cap 70)`
   — the target keyword is six words long, so it cannot sit inside five. It is
   placed at word 1 and completes at word 6, the closest satisfiable position.
2. `Slug short, hyphenated, lowercase, no stop words` — the assigned slug keeps
   "for" and "in". It was verified free against 935 live articles by the batch
   orchestrator and is not mine to change.
3. `No source passes the swap test — none could sit unchanged in a different
   keyword's post in this batch` — the Dewaele review would sit unchanged in the
   Malayalam, Assamese or Nepali sibling posts. Named rather than dropped.

Full item-by-item result is in `batchMeta.auditReport`.
