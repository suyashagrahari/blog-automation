# Research brief — birthday wishes in hindi

- **Batch:** 2026-08-27-birthday-30 · **Slug:** `birthday-wishes-in-hindi` · **Rank 9** · **Lane C**
- **Band:** 10,000+/mo (band 5) · **Bucket:** medium · realistic target **position 6–10**, not 3
- **Hub page:** absorbs `janamdin ki hardik shubhkamnaye`, `birthday quotes in hindi`, `birthday wishes for brother in hindi`
- **Sub-angle:** Devanagari input methods and transliteration typing behaviour
- **Slug checked against live Strapi 2026-08-27:** free (0 results)
- **Category slug verified against live Strapi 2026-08-27:** `milestone-birthdays` present

---

## Phase 0 — data gate

Satisfied by the BRIEF's birthday-specific probe of `birthdaygfpages` (2026-08-26, n=198),
used in preference to the site-wide `facts.md` numbers. Facts inside the first 150 words:

1. Median personal message **96 characters** (n=197)
2. **106 of 197** messages under 100 characters
3. **198** birthday pages = **6.5%** of all **3,024** pages, #5 page type

Further first-party facts used later in the body: median first-save-to-last-edit gap
**0.9 h** (against 6.9 h for /love-gf), **50.5%** finished inside the hour, longest recorded
message **1,437 characters**, quiz played on only **28 of 195** pages (**14.4%**), **4** pages
(2.0%) never opened, only **2 of 198** past 50 views with a max of **67**, birthday views
**48.6% mobile** against **51.0%** site-wide, **100%** of 198 pages carry a cover photo and a
music track.

**Not available, recorded as a limit:** there is no per-language or per-relationship
birthday breakdown, so nothing on this page is Hindi-specific first-party data. No claim
was invented to fill that gap.

---

## Phase 1 — SERP (supplied; WebSearch exhausted 200/200 for the session)

Live India-localised SERP from the assignment, `gl=in`. Only **six** results returned.
No page was fetched: every one of the six is a competitor under `references/competitors.md`
(wishes content farms, a gifting retailer, and social platforms), so they are read as
positioning only and never cited, quoted or structurally mirrored.

| # | Result | What it is | What it optimises for | Gap it leaves |
|---|---|---|---|---|
| 1 | navbharattimes.indiatimes.com | News-portal wishes roundup, Devanagari headline + English subhead | Volume + brand authority; the strongest incumbent | No register guidance, no length guidance, no explanation of script choice |
| 2 | happybirthdaywishesinhindi.com | Bare exact-match domain, "200+ Happy Birthday Wishes in Hindi" | Exact-match domain + raw count | Count-as-value; nothing about who each line suits |
| 3 | pinterest.com | Image board | Image search | Not a page; nothing extractable as text |
| 4 | facebook.com | Post: "जन्मदिन की ढेर सारी शुभकामनाएं!" | Social distribution | Not an article |
| 5 | in.pinterest.com | "Discover 50 जन्मदिन ideas" | Image search | Same as #3 |
| 6 | floweraura.com | "Happy Birthday Shayari — जन्मदिन शायरी हिंदी में" | Commercial gifting funnel | Shayari only; long-form, no brevity data |

Three of six are Pinterest ×2 plus Facebook, which is why a band-5 head term is worth
attempting at all on this domain. It is still a head term: the ceiling is the back half
of page one.

---

## Phase 2 — gap analysis

**Table stakes** (present on effectively every result, so the post must carry them):
the जन्मदिन की हार्दिक शुभकामनाएं formula; the जन्मदिन मुबारक हो alternative; a set of ready
lines to copy; a brother/friend/parent split; some quote-shaped or shayari-shaped lines.

**The gap — nothing in the SERP mentions it:** *how the reader is physically typing Hindi.*
The keyword `janamdin ki hardik shubhkamnaye` only exists in Roman script because
transliteration input, not a Devanagari keyboard, is the default path. No ranking page says
so, and none acknowledges that there is therefore no single correct Roman spelling.

**Second gap:** length. The competitors compete on count ("200+", "50 ideas"). None states
how long a birthday message actually is. The 96-character median inverts the entire premise
of a 200-item listicle.

**Third gap:** register. Forty-five relation posts and a hundred listicles publish lines
without saying whether each is तू, तुम or आप. That is the single most common way a
copy-pasted Hindi wish goes wrong.

**Stale data:** none of the six cites dated research at all, so there is no stale number to
supersede — the win is citing anything verifiable.

**Fan-out sub-queries → became H2s / FAQs:** what does janamdin ki hardik shubhkamnaye mean ·
how do you spell shubhkamnaye in English letters · is it okay to send Hindi in Roman letters ·
aap or tum for a brother · quote vs plain wish · how long should the message be · what to
write for parents · will Devanagari display on the recipient's phone · why is a Devanagari
keyboard hard.

**Angle (recorded as `batchMeta.angle`):** wins by being the only post that explains why
Hindi birthday wishes are typed and searched in Roman letters — Google names Transliteration
as the first input method for Hindi, and there is no single correct Roman spelling — and
prices every wish against the measured 96-character median from 197 birthday pages.

---

## Phase 3 — sources

Domain counts re-measured **by post** (per the coordinator's correction) immediately before
citing, across all `content/batches/*/blogs/*.json`. Caps: URL ≤ 2 posts, domain ≤ 3 posts.

| # | Source | Domain posts after this one | Verified claim | Published |
|---|---|---|---|---|
| 1 | [Kirov, Johny, Katanova, Gutkin, Roark — *Context-aware Transliteration of Romanized South Asian Languages*](https://research.google/pubs/context-aware-transliteration-of-romanized-south-asian-languages/), *Computational Linguistics* 50(2), 475–534 | `research.google` — 1 | "the informal romanization prevalent in South Asia"; full-sentence Latin→native transliteration across all 12 Dakshina languages; 4.8% absolute / 27.1% relative mean WER reduction | 2024 |
| 2 | [The Dakshina Dataset v1.0](https://github.com/google-research-datasets/dakshina), Google Research | `github.com` — 1 | Romanization lexicons: 25,000 native-script word types per language in the training split (Sindhi 15,000), 2,500 each in dev/test; human-annotated romanizations with an attestation count per (word, romanization) pair; Hindi and Marathi are the Devanagari members of the 12 | 2020-05-27 |
| 3 | [Richard Ishida — *Devanagari (Hindi) Orthography Notes*](https://r12a.github.io/scripts/deva/hi) | `r12a.github.io` — 2 | 11 combining vowel signs for post-consonant vowels; 12 independent vowel letters for the same sounds standalone; 1 pre-base glyph, no circumgraphs; U+094D kills the inherent vowel and forms conjuncts | **dateModified 2026-04-27** — the page's own "Referencing this document" line reads "Richard Ishida, Devanagari (Hindi) Orthography Notes, 27-Apr-2026", matching its "Updated 27 April, 2026" header. Emitted as `dateModified`, not `datePublished`. (The Tamil sibling's Tamil page carries 2026-04-28; this Devanagari page was checked separately.) |
| 4 | [Google Input Tools — supported languages and input methods](https://www.google.com/inputtools/help/languages.html) | `www.google.com` — 1 | Hindi row lists Transliteration, Keyboard Hindi, Keyboard Devanagari Phonetic, Handwriting — Transliteration first; the product page states "over 80 languages and input methods" | **undated — kept and flagged.** No date in the page text, its two meta tags, its footer or any changelog. Only signal is an HTTP `Last-Modified: Thu, 04 Sep 2025 04:00:00 GMT`, which is server metadata, not document-stated, so no date is emitted into `citation`. Kept rather than dropped because "Transliteration listed first among the four Hindi input methods" is the load-bearing claim of the lane-C angle; recorded as a checklist failure. |
| 5 | [Sunil Kumar Bhatt — *Honorifics in Hindi: a morphological, semantic and pragmatical analysis*](https://journals.phil.muni.cz/linguistica-brunensia/article/view/30697), *Linguistica Brunensia* 60(1–2), 49–60 | `journals.phil.muni.cz` — 2 | The Hindi honorific system reflects family ties, acquaintance, formality, personal closeness, social status and caste simultaneously | 2012 |

**Subject test:** all five are about Hindi, Devanagari or romanized South Asian input. None is
a generic India/internet statistic — **zero** generic context statistics are used, against a
budget of one.

**Peer-reviewed and open:** #1 (*Computational Linguistics*, open access) and #5
(*Linguistica Brunensia*, open access). **Abstract-only, recorded in the audit:** #1 — the
publisher full text at `direct.mit.edu` returned HTTP 403 to the fetcher, so only the
abstract on the author-hosted publication page was read; #5 — the Czech abstract was read,
the English PDF was not opened.

**Swap-test caveat, recorded as an audit failure:** #1 covers all 12 Dakshina languages, so a
lane-C sibling could in principle cite it. #3 shares a *domain* with the Tamil sibling, which
cited `r12a.github.io/scripts/taml/...`; the URLs differ and the domain sits at 2 of 3 posts.

### Blocked, over-cap or rejected while searching

- **Over cap, unusable:** `aclanthology.org` (4), `unicode.org` (5), `lrec-conf.org` (4),
  `arxiv.org` (5), `w3.org`, `learn.microsoft.com` (4 — the Devanagari OpenType page was
  drafted in and then removed after the coordinator's mid-task notice), `link.springer.com`,
  `nature.com`, `europepmc.org`, `pmc.ncbi.nlm.nih.gov`, `doi.org` as a bare resolver.
- **Refused the fetcher:** `direct.mit.edu` (403), `doaj.org` article pages (403),
  `www.mdpi.com` (403 — "Multimodal Hinglish Tweet Dataset", *Data* 9(2):38, would otherwise
  have been an ideal fifth), `www.sciencedirect.com` (403), `scriptsource.org` (403),
  `hal.science` (bot wall), `censusindia.gov.in` and `tdil-dc.in` (TLS chain failures),
  `cdac.in` InScript pages (server error).
- **Discovery limits:** OpenAlex returned HTTP 429 on most queries and Semantic Scholar on
  all of them, which materially narrowed the candidate pool.
- **Rejected on quality:** `rjwave.org` ("Challenges of Hindi Spelling and Standardization
  … Internet and Digital Media") — a ₹599 pay-to-publish venue.
- **Rejected on prior use:** `scf-lsa.info` (Hadavizadeh & Singh, Leech's politeness maxims
  in Hindi and Persian) — verified and genuinely useful for the तू/तुम/आप three-tier system,
  but its DOI is `10.5281/zenodo.7457674`, the same work already cited as
  `zenodo.org/records/7457674` in `happy-diwali-wishes-in-hindi`. Dropped rather than
  re-serve one paper across two Hindi posts.
- **Rejected on fit:** Shodhganga's Devanagari theses are all handwriting/OCR;
  `jcoms.fesb.unist.hr` misogyny detection is CC BY-NC and off-topic; XTREME-UP
  (`discovery.ucl.ac.uk`) is about under-represented languages generally and fails the swap
  test against three lane-C siblings.

**Search terms tried for a Hindi-only, in-cap scholarly source on input behaviour:**
`romanized Hindi Devanagari script choice social media` · `transliteration input method Indic
text entry keyboard` · `Hinglish code-mixing Roman script Hindi computer-mediated` · `text
entry Indian language mobile keyboard user study` · `Devanagari InScript keyboard layout
typing` · `typing Hindi phonetic transliteration native keyboard users India text entry` ·
`smartphone text input Indian languages adoption transliteration keyboard` ·
`title.search:devanagari + is_oa:true` · `Romanagari Hindi Roman script digital` ·
`bibjson.abstract:("Devanagari" AND (typing OR keyboard OR input OR transliteration))`.
Nothing Hindi-specific and in-cap survived. Recorded as a structural audit failure rather
than padded with a government statistic.

---

## Phase 4–5 — draft and targeting

- **7 H2s, 8 H3s, one H1.** Direct answer in the first 150 words with three first-party
  numbers ahead of any context-setting.
- **Comparison table**, 4 rows: Devanagari only (37.9 chars average of the eight lines),
  Roman only (42.9), both stacked (80.8), and the longest message actually recorded
  (1,437) — the fourth column prices each against the 96-character median, so a first-party
  column is present. Character counts were computed, not estimated.
- **Downside section** names three cases where SubhSandesh loses, including the 14.4% quiz
  play rate and the 2 of 198 pages past 50 views.
- **Internal links (3), all from `TEMPLATE_LINKS`, all placed after the value is
  established:** `/birthday-parents` after the eight wishes, `/birthday-friend` inside the
  brother section, `/templates` at the end of the objection section.
- **Category:** `milestone-birthdays`. **Templates:** `/birthday-parents`,
  `/birthday-friend`, `/templates`.
- **structuredData:** an `@id`-matched `BlogPosting` enrichment block on
  `<canonicalURL>#post` carrying `about` (Hindi), four `mentions` (Devanagari, Devanagari
  transliteration, Transliteration, InScript keyboard) and `citation` mirroring the five
  sources one-to-one; plus an `ItemList` of 8 mirroring the H3s in order. Every `sameAs` was
  verified against the Wikipedia API with its Wikidata QID paired: Hindi Q1568,
  Devanagari Q38592, Devanagari transliteration Q2659588, Transliteration Q134550,
  InScript keyboard Q924434.
- **Length:** 1,777 words on a plain whitespace split; `wordCount()` in `app/lib/batches.ts`
  reports 1,802. FAQs (12) live only in `article.faqs`.

## Phase 6 — audit summary

**50 checklist items, partitioned disjointly: 46 passed, 4 failed.** No entry is a paraphrase
and none is a process limitation — process limitations live in `honestAssessment`.

1. **One comparison table with real values, 3–5 rows** — STRUCTURAL. This is where the
   mandatory **language blocker** is recorded, following the pattern the Tamil sibling used:
   the table's 37.9-vs-42.9-character values are computed from the eight machine-composed
   Devanagari lines. Native-reader sign-off required; no agent can verify Hindi idiom, gender
   agreement or honorific register. Not fixable by more work; a publishing gate.
2. **Paragraphs 2–3 sentences throughout** — twelve paragraphs run four or more. The opening
   block is seven short clauses because `page-structure.md` Block 1 prescribes that shape; the
   other eleven are the H3 wish entries, punctuated as three fragments each.
3. **No source passes the swap test** — Kirov et al. spans all 12 Dakshina languages, and the
   Ishida notes share a domain (not a URL) with the Tamil sibling.
4. **Sources list with publication dates, omitted where the source publishes none** — the
   Google Input Tools page is undated; kept and flagged rather than dropped or dated by
   invention.
