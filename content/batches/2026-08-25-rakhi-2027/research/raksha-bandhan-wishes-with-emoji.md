# Research brief — `raksha bandhan wishes with emoji`

Slug: `raksha-bandhan-wishes-with-emoji` · Batch: `2026-08-25-rakhi-2027` · Written 2026-08-26

## Step 0 — angle-collision check (ordered by the brief, before drafting)

```
grep -rh '"angle"' content/batches/*/blogs/*.json
```

79 existing angles across all batches. **Zero mention emoji, Unicode, characters,
codepoints or rendering.** The nearest neighbours are about *script* (Devanagari
above/below-base marks in `write-name-on-happy-raksha-bandhan-photo`, "Unicode-documented
script faults" in `raksha-bandhan-wishes-in-marathi`) — both about making Indic text
render, none about the emoji characters themselves. **The assigned angle is free.** No
reshaping needed.

## Differentiation verdict vs the live WhatsApp post

`how-to-send-rakhi-wishes-on-whatsapp` (live, 2026-08-13 batch) was read in full.

| | That post | This post |
|---|---|---|
| Unit of analysis | the **channel** — text, image, Status, voice note, link | the **characters inside the message** |
| Structure | 5 send formats ranked by "what survives" | 6 borrowed Unicode characters ranked by how much rakhi meaning they carry |
| Named mechanics | forwarded label, 5-chat forward cap, 24-hour Status expiry, Open Graph preview | codepoint-vs-vendor-font split, sentiment misconstrual, emoji-as-beat-gesture |
| Occurrences of "emoji" in its body | **0** | the whole subject |
| FAQs | none about emoji | 11, all about emoji |

**Verdict: the line holds comfortably.** The word "emoji" does not appear once in
that post's 1,791 words, and none of its 11 FAQs touches character choice. There is
one shared idea — "a link renders once for everyone" — which appears here as a single
table row inside a four-way comparison, not as the argument of the page. Not a near-twin.

Batch siblings checked: `raksha-bandhan-wishes-in-hindi`, `-for-elder-brother`,
`-for-younger-brother`, `raksha-bandhan-2027-wishes`, `raksha-bandhan-reply-to-brother-wishes`.
All are wording/recipient/register posts. None discusses characters. No overlap.

## Phase 1 — SERP

**WebSearch: refused, 200/200 budget exhausted.** One call attempted, as instructed.
**Bing: deliberately not used** — this batch already documented it stripping modifiers
and serving cached head-term SERPs.
**Brave Search `country=in`: hard-429 on six attempts across ~4 minutes, then returned
on the seventh.** So the SERP below is real, but single-instrument.

| # | URL | Type | Words | Distinct emoji on page | "Unicode" | "render/platform" |
|---|---|---|---|---|---|---|
| 1 | emojidb.org/happy-raksha-bandhan-emojis | emoji database | 1,582 | **370** | 0 | 0 |
| 2 | in.pinterest.com pin ("…emoji sms caption 2022") | pin | — | — | — | — |
| 3 | emojicombos.com/raksha-bandhan | copy-paste combos | 1,965 | **342** (mostly Braille block fill, ⣿ ×4,238) | 0 | 0 |
| 4 | sheetwa.com/blogs/raksha-bandhan-wishes-for-whatsapp/ | "130+ wishes" listicle | 5,283 | **13** | 0 | 2 each (Android/iPhone, in a send section) |
| 5 | economictimes.indiatimes.com — Raksha Bandhan 2026 wishes/quotes/status | news listicle | — | — | — | — |
| 6 | timesofindia.indiatimes.com — Happy Raksha Bandhan 2026 wishes/images | news listicle | — | — | — | — |
| 7 | iconscout.com/icons/raksha-bandhan-chat | stock-icon store | — | — | — | — |
| 8 | beststatus-point.com/2022/08/raksha-bandhan-wishes-emoji.html | wishes listicle, title stamped 2022/2024 | 1,610 | **15** | 0 | 0 |
| 9 | vyapargrow.com/raksha-bandhan-wishes/ | wishes listicle | — | — | — | — |

Four pages fetched and measured directly (1, 3, 4, 8 — the four most on-keyword).
Positions 2, 5, 6, 7, 9 recorded from the SERP only.

**This is a split SERP, not a Gate 2 cut.** The "emoji" half of the query is answered
by generic emoji databases (1, 3) and an icon store (7); the "wishes" half by dated
listicles (4, 5, 6, 8, 9). Positions 4–9 are article pages, so a blog post can occupy
this SERP.

Format notes: no page carries an author byline, a date-of-data, or a table. Position 4
is the only one with a key-takeaways block. Positions 1 and 3 have no prose at all —
they are grids.

## Phase 2 — Gap analysis

**Table stakes** — actual emoji characters shown, ready-to-copy wish lines, brother
*and* sister direction, a Hindi/Hinglish line, an answer to "which emoji".

**The gap, measured.** The two pages that actually supply emoji supply 370 and 342
distinct characters and explain **none** of them. The two pages that supply wishes
supply 15 and 13 emoji. **Not one of the four pages fetched contains the word
"Unicode", "codepoint" or "render".** Nobody states the fact the query sits on top of:

> **There is no rakhi emoji.**

**Verified first-hand, not cited.** Every one of the 148,853 named characters in the
Unicode Character Database **version 16.0.0** (as bundled with Python 3, queried via
`unicodedata.name` over the full 0x0–0x10FFFF range) was checked:

- `RAKSHA` → **0 characters**
- `BANDHAN` → **0 characters**
- `RAKHI` → 8, all `ZNAMENNY NEUME VRAKHIYA …` (Russian liturgical chant notation)
- whole-word `KNOT` → **exactly 1**, U+1FAA2 🪢 `KNOT`
- `THREAD`/`YARN` → U+1F9F5 `SPOOL OF THREAD`, U+1F9F6 `BALL OF YARN`, plus 2 CJK radicals
- `BRACELET`, `GARLAND`, `INCENSE` → **0 each**

And what *does* exist, which is the sharper half: U+1FA94 `DIYA LAMP`, U+1F6D5
`HINDU TEMPLE`, U+1F97B `SARI`, U+1F965 `COCONUT`, U+1F4FF `PRAYER BEADS`, U+1F9FF
`NAZAR AMULET`, U+1FAAC `HAMSA`, U+1F9E7 `RED GIFT ENVELOPE` (hongbao), U+1F96E
`MOON CAKE`, U+1F9E8 `FIRECRACKER`. Diwali got a character. Raksha Bandhan did not.

Official names of the characters the SERP actually uses, all verified locally:
🎀 `RIBBON`, 🧵 `SPOOL OF THREAD`, 👫 `MAN AND WOMAN HOLDING HANDS`, 🙏 `PERSON WITH
FOLDED HANDS`, ❤ `HEAVY BLACK HEART`, 🏵 `ROSETTE`, 🫶 `HEART HANDS`, 🧿 `NAZAR AMULET`,
📿 `PRAYER BEADS`, 🎗 `REMINDER RIBBON`, 🪡 `SEWING NEEDLE`.

Frequency on the position-1 page: ❤ 51, ♡ 35, 🏵 34, ✨ 19, 👩 18, 🫶 17, 🧿 16, 👨 16,
🦋 15, 📿 14. **🪢 is not in its top ten** — the closest literal match is the one
nobody reaches for.

**Stale data on the SERP:** position 8's title is stamped 2022 in the URL and 2024 in
the H1; position 2's pin says 2022; positions 5 and 6 are stamped 2026, which is wrong
for anyone searching after 28 August 2026.

**Fan-out sub-queries → H2s/FAQs:** is there a rakhi emoji · which emoji for Raksha
Bandhan · what does 🪢 mean · why does it look different on his phone · is 🙏 right ·
how many emoji · which for an elder brother · is emoji-only rude · do emoji work with
Devanagari · what about other Indian festivals.

**Angle:** see `batchMeta.angle`. Written honestly as "the only post that treats the
emoji as characters rather than decoration".

## Phase 3 — Sources

Lane **A (linguistics)** was assigned. `aclanthology.org` (5 posts), `unicode.org` (5),
`lrec-conf.org` (4) and `escholarship.org` (4) are all at or over the cap corpus-wide,
so the brief's named alternates were tried: **`ceur-ws.org` worked** (Emoji2018 workshop
proceedings, CEUR Vol-2130, co-located with ICWSM 2018 — an emoji-linguistics volume);
`glottolog.org` has nothing on emoji; **`hal.science` is behind an Anubis proof-of-work
challenge** and returns a bot wall on every article page. Lane **F** was not needed.

Discovery instruments that worked: `api.crossref.org?query.bibliographic=`,
`api.unpaywall.org`, `api.archives-ouvertes.fr` (HAL's API answers even though its web
pages do not), direct `ceur-ws.org` and `grouplens.org` fetches.
Did **not** work: `ojs.aaai.org` 403, `formative.jmir.org` JS bot wall,
`dr.lib.iastate.edu` bitstream returned 755 bytes, `scholarspace.manoa.hawaii.edu`
search API 404, `dl.acm.org` closed.

**Rejected, and the reason matters.** Miltner, *"One part politics, one part technology,
one part history": Racial representation in the Unicode 7.0 emoji set*, New Media &
Society, 29 January 2020 (`10.1177/1461444819899623`) is the single most on-subject
paper found — it is about who gets a character encoded and who does not, which is
exactly this post's gap. Unpaywall lists **only two OA locations, both on
`research.ed.ac.uk`**, which is at/over cap. Not cited. If that domain ever frees up,
this is the paper to add.

| # | Source | Domain | Lane | Verified claim used |
|---|---|---|---|---|
| 1 | Miller, Thebault-Spieker, Chang, Johnson, Terveen, Hecht, *"Blissfully happy" or "ready to fight": Varying Interpretations of Emoji*, ICWSM 2016 | grouplens.org (new, 1/3) | A | 304 participants; Apple/Google/Microsoft/Samsung/LG; 25% sentiment disagreement on the **identical** rendering; 44 of 110 renderings (40%) misconstrual ≥ 2 points; 9 of 22 characters range wider than one sentiment unit across platforms; U+1F64C in the top-3 most different on 4 of 5 platforms. Full text read (7,134 words, `pdftotext`). |
| 2 | McCulloch & Gawne, *Emoji Grammar as Beat Gestures*, Emoji2018 @ ICWSM | ceur-ws.org (new, domain 2/3) | A | SwiftKey corpus, >1 billion emoji uses to April 2016; 53% / 52% / 39.5% of the ten most common 2-/3-/4-emoji sequences are identical repeats vs **zero** repetition in COCA/GloWbE word sequences; partial repetition in 75.5% of non-identical trigrams and 67.5% of quadrigrams; ~85% of emoji use sits alongside words. Full text read. |
| 3 | Herring & Dainas, *Receiver Interpretations of Emoji Functions: A Gender Perspective*, Emoji2018 @ ICWSM | ceur-ws.org | A | 523 surveys (352 female), 74.2% native English speakers, 75% US-based; respondents matched the authors' own function coding on only **60.4%** of items (F 66%, M 50.9%, other 64.2%), rising to 83% counting second choice; only two significant female/male differences (frowns p=.0105, smiles p not reported as significant elsewhere). Full text read. |
| 4 | Micle & Mudure-Iacob, *Creating Communicative Context Through the Use of Emoji and Politeness in Online Academic Written Interactions*, Studia UBB Philologia LXIX(3), 30 Sep 2024 | studia.reviste.ubbcluj.ro (new, 1/3) | A-adjacent (pragmatics) | n = 92 undergraduates; 69.2% use emoji to show appreciation, 56% excitement, **34.1% irony/sarcasm**, 14.3% fear/concern/fury. Full text read. |

Four sources, the low end of the 4–6 band, all four full-text read, none paywalled.
**Swap test: all four pass** — every one is specifically about emoji interpretation, and
none could sit unchanged in another keyword's post in this batch. That is unusual here;
the batch's standing finding is that topical research does not exist behind 47 rakhi
keywords, but it does exist behind *emoji*.

Zero government/context statistics. Zero Wikipedia body links. Zero competitor links.

## Phase 0 — data gate

`content/facts.md`, refreshed 2026-08-25, 17 facts. Assigned primary fact:
**51.1% of shared pages are opened on a phone (18,497 of 36,202 views)**, used as the
lead number in the first 150 words together with 36,202 total views and 12.2 average
views per created page. Support: 44.2% password-protect, 2,973 pages across 15 page types.

**No rakhi-specific first-party data exists and none is computed.** `rakshabandhanpages`
holds 3 documents; rakhi templates account for 39 of 36,202 recorded views. The post
states plainly that the rakhi templates are new and lightly used and that no
rakhi-specific open rate is claimed. Recorded as an `auditReport.failed` item with the
re-query condition (~500 rakhi pages).

## The capped-Unicode citation, and how it was handled

`unicode.org` appears in 5 posts corpus-wide against a 3-post cap, so it could not be
cited even though it is the normative authority for the post's central claim. Three
options existed: cite a linguistics paper that states it (none found — the emoji
literature discusses what *is* encoded, not what is absent), state it uncited, or drop
the claim.

**Resolution: stated as our own first-hand verification, not as a citation.** The post
says it checked all 148,853 named characters in the Unicode Character Database version
16.0.0, and the sources list closes with that line rather than a URL. This is reproducible
in three lines of Python and is first-hand experience, which the skill counts as original.
It is recorded as an `auditReport.failed` item naming the cap as the blocker, because the
post's most load-bearing claim carrying no citation is a real weakness even when the
check itself is sound. `unicode.org` was **not** fetched and **not** cited from memory.

## Category, templates, structured data

- `categorySlug`: `indian-festivals` (batch-mandated for every post).
- `templateUrls`: `/happy-rakshabandhan-to-brother`, `/happy-rakshabandhan-to-sister`,
  `/templates` — all three from `TEMPLATE_LINKS`. Both directions are linked because the
  keyword is recipient-neutral; the body links brother and sister pages in the same
  sentence, after the table establishes why a single-rendering page matters.
- `structuredData`: one `ItemList` (6 items, mirroring the six H3s in order) plus one
  `@id`-matched `BlogPosting` enrichment block on `<canonicalURL>#post` carrying `about`
  (Raksha Bandhan / Q10266), `mentions` (Emoji / Q1049294, Unicode / Q8819, Unicode
  Consortium / Q1572774) and `citation` mirroring `batchMeta.sources` one-to-one. All
  five `sameAs` pairs verified against the Wikipedia API on 2026-08-26; `Rakhi (bracelet)`
  was checked and returned `missing`, so it was not used.
- Slug check: `filters[slug][$eq]=raksha-bandhan-wishes-with-emoji` → `total: 0`. Free.

## Audit summary

50 checklist items partitioned exactly: 48 passed, 2 failed, intersection empty.
Failures: (1) first-party facts are platform-wide rather than rakhi-specific;
(2) the no-rakhi-codepoint claim carries no citation because `unicode.org` is capped.
`honestAssessment` records the single-instrument SERP, the 2016 vintage of the
rendering-divergence figures, and the authority gap against Economic Times and
Times of India.
