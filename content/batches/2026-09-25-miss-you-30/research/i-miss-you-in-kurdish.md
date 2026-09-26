# Research brief — `i miss you in kurdish`

Batch `2026-09-25-miss-you-30`, wave 2, row 20 of `WAVE2-PLAN.json`.
Slug `i-miss-you-in-kurdish`. Category `miss-you-across-miles`.
Templates `/missyou-gf`, `/catch`, `/templates`. Zero WebSearch calls spent.

---

## Phase 0 — first-party gate

Facts taken byte-verbatim from `facts-snapshot.md` (BRIEF.md section 1 pins the
snapshot, not the live `content/facts.md`). Seven used, and the two that open the
post are the two least-used across the batch's 32 existing blogs — the median
2.6-hour save-to-last-edit gap (7 prior uses) and the 88.8% publish rate (7 prior
uses). Every other miss-you fact sits at 20–36 prior uses.

Mandatory caveats carried in body prose, not only here: n = 214 over two months
since 2026-07-28; recorded views are page views and not unique visitors; city,
background music and "together since" are pickers with defaults. Added, because
this is a language row: the database records which TEMPLATE was opened, never who
received it and never what language was written, so **no first-party figure in
this post is Kurdish-specific** and the body says so.

`## Pricing` in the snapshot is empty. No price, no "free", no cost language anywhere.

## Phase 1 — SERP, measured 2026-09-25

Ten organic URLs from `SERPS-WAVE2.md` (DuckDuckGo `kl=in-en`, 2026-09-25). Live
titles and bodies fetched the same day.

| # | Result | Variety in title? | Variety anywhere? | Form given | Fetch |
|---|---|---|---|---|---|
| 1 | glosbe.com/en/ku | yes ("Kurdish Kurmanji") | yes | `min berîya te kir`, sourced to "Ferhenga Şên" | 200 |
| 2 | howtosayguide.com/…-kurdish-sorani/ | — (URL says Sorani) | URL only | unknown | **connect timeout** |
| 3 | howtosayguide.com/…-kurdish/ | no | URL only | unknown | **connect timeout** |
| 4 | indifferentlanguages.com/…/kurdish_(kurmanji) | yes | yes | `ez bîra te dikim` | 200 |
| 5 | linguashop.com | no | body boilerplate only | not rendered without JS | 200 |
| 6 | hinative.com/questions/24480687 | no | unknown | unknown | **403** |
| 7 | hinative.com/questions/26213616 | no | unknown | unknown | **403** |
| 8 | learnentry.com/english-kurmanji-kurdish/… | yes | yes | `ez bîra te dikim` | 200 |
| 9 | mymemory.translated.net | no | selector lists "Kurdish" and "Kurdish Sorani" | `بیرت دەكەم` filed under plain "Kurdish"; also `ez ê bêriya te bikim` for "im gonna miss you" | 200 |
| 10 | kurdi.sh/en/phrasebook | no | phrasebook is Kurmanji | `Bêriya te dikim` | 200 |

**Measurements reported in the post.** Variety in the title: **3 of 10**. Variety
anywhere on the page: **5 of 10**. URL disambiguates: **2 of 10**, both from
howtosayguide. **Cites a dictionary — a lexicographer, a publisher or a page
reference: 0 of 10.** Distinct Kurmanji strings across the set: **4**. Results that
returned no readable content: **5 of 10** (2 timeouts, 2×403, 1 JS-gated).

Limit stated in the post: the "zero cite a dictionary" count rests on the seven
that returned content plus the two howtosayguide URL paths. It is not a claim about
pages that could not be read.

**Checkable weakness in the #1 result.** `glosbe.com/en/ku/I miss you` silently
resolves to the **Kurmanji** dictionary (page title: "I miss you in Kurdish
Kurmanji"), and its entry is spelled **`min berîya te kir`** — circumflex on the i,
none on the e. English Wiktionary carries `bêrî` (Northern Kurdish noun, "longing")
and `berî` (Northern Kurdish preposition, "before") as two separate entries, and
Chyet has a separate `berî` headword glossed "desert, wilderness, plain". The
spelling on the page ranking first therefore points at a different headword. The
same aggregator's **English→Sorani (ckb) dictionary is empty for this phrase**:
"Currently, we have no translations for I miss you in the dictionary".

No SubhSandesh page appears in this SERP, so there is no `weAlreadyRank` question
for this row. `WAVE2-PLAN.json` records `overlapWithSelected: 0`.

## Phase 2 — gap

Table stakes the post covers: a form to send, a romanisation, a literal gloss, who
to send it to, and the script.

**The gap.** Every ranking result hands over one string. None asks which Kurdish the
recipient speaks, none names a dictionary, and the set does not agree with itself —
four different Kurmanji strings and one unlabelled Sorani one. A reader given one of
those without a variety label has been given a coin flip.

**Angle.** The only page on this query that treats Kurdish as the ISO macrolanguage
it is, prints both varieties, and shows the dictionary behind each — including the
dictionary evidence that Sorani has no verb for missing a person.

Fan-out sub-queries turned into H2s or FAQs: is Kurdish one language; Kurmanji vs
Sorani; what does the phrase literally mean; is it past tense; does it change by
gender; is Zazaki Kurdish; why does the Arabic-script line render broken; can I
write Sorani in Latin letters; what about Southern Kurdish.

## Phase 3 — instruments and sources

**Instruments that resolved:** `en.wiktionary.org`, `iso639-3.sil.org`,
`unicode.org`, `glosbe.com`, `archive.org`.
**Instrument that failed:** `webonary.org` — HTTP 403 behind a Cloudflare challenge.
**Not needed:** `dsal.uchicago.edu` serves South Asian languages and has no Kurdish
dictionary, so none of BRIEF.md's DSAL references applied to this row and none
failed. `ethnologue.com` was not fetched because the ISO registry already carried
the codes and their macrolanguage membership.

### What the instruments actually said

**ISO 639-3, `kur`.** Scope = Macrolanguage, Type = Living, 639-1 equivalent `ku`.
Members, all Active: `ckb` Central Kurdish, `kmr` Northern Kurdish, `sdh` Southern
Kurdish. Checked separately: `zza` Zaza is a **macrolanguage of its own** (members
`diq` Dimli, `kiu` Kirmanjki) and is **not** a member of `kur`; `lki` Laki is a
separate individual language.

**Chyet 2003** (Yale Language Series, ISBN 0-300-09152-4, verified from the scan's
own title and copyright pages):

- `bêrî` f. — "longing, yearning, homesickness"; idiom `bêriya … kirin` = "to
  desire, miss, be impatient for"; examples printed in the entry:
  **"Min bêriya te kir (JB3) I miss you (polite formula)"** and "Min bêriya welêt
  kir (JB3) I am homesick".
- `berî II` — "desert, wilderness, plain". A separate headword, one circumflex away.
- `bîr` sense 2 — "longing, homesickness (Ag/Kp)"; idiom `bîra fk-ê kirin (Kp/Ag)`
  "to miss, be homesick for", example "Ez bîra mala xwe dikim (Kp) I am homesick".
  Cross-reference: "Sor bîr = 'mind, memory'". **Regional, and the example is about
  a house.**

**McCarus & Abdulla 1967** (Sorani, dialect of Sulaimania):

- `bîr` — "thought, idea; reflection; memory; reminiscence, recollection; mind".
  Idioms: `bîr-î malawa` homesickness; `bîr-î malawa k.` to be homesick;
  `la bîr-î …` to remember, recall; `la bîr çûnawa` to forget; `bîr la … k.` **"to
  think of, recall, mention s.th."**; `bîr xistnawa` to remind. **None is "to miss
  a person."**
- The only lexical entry in the dictionary glossing the verb *miss* sits under
  `dest` "hand": **`la dest dan` / `la dezdan`, "to miss, not to avail o.s. of
  s.th."** — an opportunity.

**Corroboration, two more Sorani dictionaries on archive.org** (named in the post,
not linked, to hold outbound links at six): *Zanko Dictionary English-Kurdish* and
*Pocket English-Kurdish Dictionary*. Both gloss the verb *miss* as
`le dest dan` / `le dest çûn` (losing) and `ne-pêkan` (failing to hit). Three
dictionaries, no emotional sense.

**English Wiktionary.**

- `I miss you` phrasebook: exactly one Kurdish line, nested as
  "Northern Kurdish: **min bêrîya te kiriye**". **No Central Kurdish and no
  Southern Kurdish entry.** Zazaki appears as a separate top-level language.
- `miss`: ten translation tables by sense. The only Kurdish line on the whole page
  is in table 4, **"to be late for something"** (Central Kurdish لەدەسچون). Table 2,
  "to feel the absence of someone or something", has **no Kurdish entry at all**.
- `bêrî` (kmr) noun "longing"; `bêrî kirin` (kmr) verb "to long", forms
  `bêrî dike` / `bêrî kir`; `berî` (kmr) preposition "before"; `kirin` (kmr) verb
  "to do, to make", forms `dike` / `kir`; `بیر` (ckb) "memory, mind";
  `کردن` (ckb) "to do, to make"; `تۆ` (ckb) "you"; Kurmanji pronoun table gives one
  second-person singular `tu`.

**Unicode, ArabicShaping-18.0.0.txt (header dated 2026-08-18).**
`06D5; DOTLESS TEH MARBUTA; R; TEH MARBUTA` · `06A9; KEHEH; D; GAF` ·
`06CC; FARSI YEH; D; FARSI YEH` · `0695; REH WITH V BELOW; R` ·
`06CE; FARSI YEH WITH V ABOVE; D` · `06C6; WAW WITH V ABOVE; R` ·
`06B5; LAM WITH V ABOVE; D`.
Codepoints of the printed Sorani string بیرت دەکەم: U+0628 U+06CC U+0631 U+062A
U+0020 U+062F U+06D5 U+06A9 U+06D5 U+0645 — Farsi yeh and keheh rather than the
Arabic yeh and kaf, and U+06D5 twice, joining type R, which is why the word
visibly separates.

**Claim checked and dropped:** the Sorani letters are *not* outside the Arabic
Unicode block. `Blocks.txt` puts U+0695, U+06B5, U+06C6, U+06CE and U+06D5 all
inside "Arabic" (U+0600–U+06FF). The true and useful statement is the narrower one
the post makes: they are letters Arabic itself does not use, so an Arabic keyboard
or font is not a guarantee.

### Research sources — route and caps

Route: `findpapers.mjs` (Crossref + Europe PMC) → Unpaywall → publisher landing.
Zero WebSearch calls. Queries run: `Kurdish dialectology Kurmanji Sorani`,
`Kurmanji Sorani mutual intelligibility standardization`,
`Kurdish diaspora language maintenance`, `Kurdish alphabet script orthography
identity`, `Kurdish language variety identity speakers`.

**Cited:** Sağlam, Özek, Buran & Gooskens, "Assessing mutual intelligibility between
Kurmanji and Zazaki spoken in Elazığ at text level", *Dilbilim Araştırmaları
Dergisi* 36(3), 97–120, 2026-01-27, doi 10.18492/dad.1696092. Open access
(publishedVersion at publisher, confirmed by Unpaywall). 243 participants aged
14–19, 27 from each of nine district centres, B1-level text tests; "mutual
intelligibility between Kurmanji and Zazaki remains below 40% for both languages";
significant correlation between exposure and functional score. **Abstract and
metadata read; PDF not parsed.**

**Considered and cut, with reasons:**

- Özek, Sağlam & Gooskens 2021, *Applied Linguistics Review* 14(5) 1411–1449,
  CC BY 4.0 — the pilot of the study above (69 participants, "mutual
  intelligibility was rather low"). Cut: De Gruyter returned an empty HTTP 202 to
  every fetch, and the 2026 paper supersedes it with a larger sample.
- Yarahmadi 2021, "Language Shift Among Speakers of Kalhuri Kurdish in Iran",
  *International Journal of Kurdish Studies* 7(1) 82–102, n = 1,000 in Kermanshah.
  Directly on-subject for Southern Kurdish. Cut on venue: a DOAJ journal search for
  the exact title returns 0 results and indexing could not be confirmed.
- "Gorani: A Distinct and Independent Language Not a Variety of the So-called
  Kurdish", *International Journal of Language & Linguistics* 2023. Cut on venue —
  the publisher appears on predatory-publisher lists, and BRIEF.md section 4 warns
  that Crossref indexes such journals.
- Haig, "Calibrating Kurmanji and Sorani", *Routledge Handbook on the Kurds* 2018,
  doi 10.4324/9781315627427-9. The single best match for the post's actual subject.
  Closed access, no OA location per Unpaywall. **Re-check if ever deposited.**
- Haig & Mustafa 2019, "Language choice and patterns of usage among Kurdish speakers
  of Duhok", *Bamberg Studies in Kurdish Linguistics*, University of Bamberg Press,
  OA. Cut for space rather than quality; no abstract deposited to Crossref and the
  repository page did not render one.
- PLoS ONE 2021 on Hawleri civic identity — cut, PLoS ONE is at the batch cap.

**Cap position.** Five of six cited URLs are on `capExemptDomains`
(`iso639-3.sil.org`, `archive.org` ×2, `en.wiktionary.org`, `unicode.org`). The one
research domain, `dergipark.org.tr`, and the journal *Dilbilim Araştırmaları
Dergisi* appear in no other post in this batch. No sibling's `sources` array was
reused; the Arabic and Sinhala rows' arrays were read first.

## Phase 4–5 — draft and links

1,786 words in `contentMarkdown`, FAQs excluded. Ten FAQs, in `article.faqs` and the
FAQPage JSON-LD only. Six outbound links, all fetched. Four internal links:
`/missyou-gf` (mandatory), `/catch` (the batch's `oneOfLinks` alternative — a letter
delivered one line at a time suits a short verified phrase better than a page of
English chrome), `/templates`, and the live hub
`/blog/i-miss-you-in-different-languages`.

**Hub check, 2026-09-25.** The live hub advertises "50+ languages" and contains no
occurrence of "Kurdish", "Kurmanji" or "Sorani". This post is the missing row and
links up to it without restating its table.

**Slug check.** `strapi.subhsandesh.in/api/articles?filters[slug][$eq]=i-miss-you-in-kurdish`
returns `total: 0`. Category `miss-you-across-miles` confirmed present in the live
category list. All three `templateUrls` confirmed present in `TEMPLATE_LINKS`.

## Phase 6 — audit

50 checklist items, 46 passed, 4 failed, disjoint, sum 50. Failures are recorded in
`batchMeta.auditReport.failed` with the blocker and the condition that would close
each. The load-bearing one is the source subject test: the only peer-reviewed number
in the post measures Kurmanji against **Zazaki**, not against **Sorani**, because no
open-access Kurmanji–Sorani intelligibility study was findable.

## Correction to the task prompt

The prompt said Southern Kurdish and "Zazaki/Gorani" are "also in play and contested
as Kurdish at all". Half of that is right. ISO 639-3 puts Southern Kurdish (`sdh`)
**inside** the Kurdish macrolanguage, so it is not contested there. Zaza is **not**
inside it — `zza` is a macrolanguage in its own right — and Gorani has no membership
of `kur` either. English Wiktionary independently lists Zazaki as a top-level
language beside Kurdish. The post states what the registers record rather than
repeating that the status is merely contested.

The prompt also suggested checking whether Kurdish marks the addressee's gender the
way Arabic does. It does not: Wiktionary's Kurmanji pronoun table lists one
second-person singular (`tu`, oblique `te`) and the Central Kurdish entry lists one
(`تۆ`). That negative result is stated in the body and in an FAQ.
