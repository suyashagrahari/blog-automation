# Research brief — `i miss you in sanskrit`

Batch `2026-09-25-miss-you-30`. Slug `i-miss-you-in-sanskrit`, checked free against
Strapi on 2026-09-25 (`pagination.total: 0`). Facts from
`content/batches/2026-09-25-miss-you-30/facts-snapshot.md`, never `content/facts.md`.

---

## Phase 1 — SERP

**Search budget used: 1 of ~4.** One WebSearch on the exact keyword, nothing leading.

### Search 1 — `i miss you in sanskrit`

| # | Result | Format |
|---|---|---|
| 1 | instagram.com/popular/i-miss-you-in-sanskrit | social aggregator |
| 2 | pinterest.com/pin/how-to-say-i-miss-you-in-sanskrit | image board |
| 3 | in.pinterest.com/pin/how-to-say-i-miss-you-in-sanskrit | image board |
| 4 | pinterest.com/pin/497507090095706631 "how to say in sanskrit" | image board |
| 5 | en.wikipedia.org — *I Miss You (Toki o Koete)* | encyclopedia, a song |
| 6 | youtube.com/shorts — "#IMISSU … IN #sanskrit \|\| HINDI #ENGLISH" | video short |
| 7 | en.wikipedia.org — *I Miss You* | encyclopedia, a song |
| 8 | en.wikipedia.org — *I Am Missing You* | encyclopedia, a song |
| 9 | en.wikipedia.org — *Miss You (film)* | encyclopedia, a film |
| 10 | blogadda.com — "How To Say I Miss You In Sanskrit" | blog aggregator post |

**There is no competitor article on this SERP.** Four of ten slots are Google
resolving the query as a song or film title. Three are Pinterest, one Instagram,
one YouTube. Not one dictionary, not one grammar, not one page by a named author.

Phase 1's instruction to fetch the top five pages in full could not be executed as
written, because there are not five comparable pages. Per `references/competitors.md`
the aggregator results were **not opened**, so nothing in the post paraphrases them.
Note for the record: the #6 YouTube title literally reads "IN #sanskrit || HINDI
|| ENGLISH", i.e. it offers Hindi and Sanskrit in the same breath — which is the
failure mode the post warns about, visible in the SERP itself.

**Consequence for the audit.** Any statement about "what competitors do" is limited
to what that result list shows on its face. The post makes no measured claim about
competitor rankings.

---

## Phase 2 — Gap

**Table stakes on this query:** a Devanagari string, a roman transliteration, an
"aesthetic" presentation. That is the whole of what the ranking results supply.

**The gap, which is total.** Nothing on the SERP:

- names a dictionary, let alone a page;
- distinguishes the state (*viraha*) from the feeling (*utkaṇṭhā*);
- warns that the tattoo-ready words have second entries reading "a mode of sexual
  enjoyment", "wages, hire" and "deceit";
- says that Sanskrit has no transitive verb for this at all;
- tells the reader that Devanagari alone cannot distinguish Sanskrit from Hindi.

**Who this reader actually is.** Nobody texts Sanskrit. This is a tattoo, an
engraving, an invitation or a caption — permanent and public. That inverts the
usual stakes of the batch: the cost of being wrong is not an awkward message, it
is a body or an object.

**Fan-out sub-queries**, each of which became an H2 or an FAQ: *is there a Sanskrit
word for missing someone* · *what does viraha mean* · *viraha vs utkanthā* · *what is
vipralambha shringara* · *is Sanskrit written in Devanagari* · *how do I check a
Sanskrit tattoo* · *does smarāmi tvām mean I miss you* · *why do Sanskrit translators
fail* · *word for one who is separated*.

**Angle.** The only post that treats this as an inscription query rather than a
messaging one, prints only forms verified to a named dictionary page, names the
homograph traps, refuses to print a composed sentence because no corpus attests
one, and sets that permanence against 43.5% of our own 214 miss-you senders
locking their page behind a password.

---

## Phase 3 — Language verification

Every fetch below was made this session. Nothing is from memory.

### The instrument problem, and a correction to the brief

**BRIEF §3 and my own task prompt both say to cite Monier-Williams from
`dsal.uchicago.edu`. It is not there.** DSAL's dictionary index lists only **Apte**
and **Macdonell** under Sanskrit. Monier-Williams and Cappeller appear in the page
source solely inside HTML comments:

```
<!-- <a href="monier-wlliams">Monier-Williams</a> -->
```

and `monier_query.py` / `mw_query.py` return HTTP 404 for every query. Verified
2026-09-25. The coordinator repeated the same instruction mid-task; it is still
wrong. Monier-Williams is therefore cited from the **Cologne Digital Sanskrit
Dictionaries**, which serves the 1899 text with printed-book page and column
references — the same standard of proof the Kannada sibling used with Kittel.

### Verified and printed

| Form | Source fetched | What it actually says |
|---|---|---|
| विरहः *virahaḥ* | Apte p. 1461 | 1 "Parting with, separation"; 2 "**Especially, the separation of lovers**"; 6 "The feeling of love in separation; see विप्रलम्भ (6)"; 7 "Loneliness" |
| *vi-raha* m. | MW p. 982 c. 3 | "abandonment, desertion, parting, separation (esp. of lovers), **absence from (instr. or comp.)**" |
| विरहानलः, विरहज्वरः | Apte p. 1461 | "the fire of separation"; "the fever or anguish of separation" |
| विरहोत्कण्ठिता | Apte p. 1461 | "a woman distressed by the absence of her lover or husband, **one of the several classes of a Nāyikā in poetic compositions**" |
| विरहिन् / विरहिणी | Apte p. 1461; MW p. 982 c. 3 | "separated, parted (esp. from a beloved person)"; f. "a woman separated from her husband or lover" — **and sense 2, "Wages, hire", in both** |
| विप्रलम्भः | Apte p. 1452; MW p. 976 c. 1 | sense 1 "**Deceiving, deceit, tricking, disappointment**"; sense 6 "(In Rhet.) The feeling or sentiment of love in separation, one of the two main kinds of शृङ्गार (opp. संभोग)", quoted as **पञ्चविधः**, five-fold |
| शृङ्गारः | Apte p. 1566 | "the erotic sentiment (the first of the eight or nine sentiments in poetical compositions) … it is of two kinds: **संभोगशृङ्गार and विप्रलम्भशृङ्गार**" |
| संभोगः | Apte p. 1649 | "Enjoyment"; 3 "sexual union"; 5 "A subdivision of the sentiment of love; see under शृङ्गार" |
| अभिलाषः / प्रवासः / शपः | Apte pp. 183, 1108, 1532 | "longing of a lover" · "**going or journeying abroad, being absent from one's home**" · "A curse, an imprecation" |
| उत्कण्ठा | Apte p. 403; MW p. 175 c. 3 | 2 "Longing for a beloved person or thing"; 3 "**Regret, sorrow, missing any thing or person**"; MW "regretting or missing anything or a person" |
| उत्कण्ठ (adj.) | Apte p. 403; MW p. 175 c. 3 | bracketed **उन्नतः कण्ठो यस्य**, "Having the neck uplifted"; MW adds "having the throat open (as in crying)" — **and the nouns -ण्ठः / -ण्ठा, "A mode of sexual enjoyment" / "a kind of sexual union"** |
| √स्मृ *smṛ* | MW p. 1271 c. 3 | cl. 1 P. *smarati*, "to remember … be mindful of (**gen. or acc.**)"; "**to remember or think of with sorrow or regret**"; cognate note "cf. Gk. μέρμερος; Lat. memor, mora" |
| सा विरहे तव दीना | Apte p. 1461, under विरह sense 2 | the dictionary's own quotation; "you" appears as **तव**, a genitive |
| तव = "your" | Tatoeba sentence 11766004 | तव शिष्येण, translated on Tatoeba "by your … gifted disciple" |
| Sanskrit corpus size | Tatoeba, all 77 sentences pulled | **77 sentences** total; **0** contain any form of स्मृ, विरह or उत्कण्ठा; 0 contain त्वाम्/त्वां; 5 contain तव |
| Devanagari block | Unicode UCD 18.0.0 Blocks.txt, UnicodeData.txt | `0900..097F; Devanagari`; U+0902 ANUSVARA, U+094D VIRAMA. **No separate Sanskrit range** |

**The etymology answer, as asked.** *utkaṇṭhā* is literally "up-throat". Apte's
bracketed derivation **उन्नतः कण्ठो यस्य** and MW's "having the neck uplifted" agree,
and MW's second gloss "having the throat open (as in crying)" is the harder reading.
Two lexicons, one image: a neck craned for someone who has not arrived.

**Corpus finding.** Tatoeba's whole Sanskrit collection is **77 sentences**, against
326 for Kannada (the sibling's figure) and 2,045,262 for English. It is mostly
Bhagavad Gītā. There is no attested modern sentence for this idea to copy, which is
the evidentiary basis for the post's refusal.

### Cut, and why — seven items

1. **त्वां स्मरामि** as a printed recommendation. **Cut.** स्मरामि is verified as the
   first-person singular in en.wiktionary.org's conjugation table for स्मरति (root
   √स्मृ, class 1 P), and त्वाम् as the accusative singular of त्वद् on
   en.wiktionary.org (referenced there to Kümmel 2018); MW p. 1271 licenses
   **gen. or acc.** So the sentence is *licensable*. It is not *attested* — Tatoeba's
   77 sentences contain neither word — and "I remember you" is not "I miss you". For
   an engraving that is not enough.
2. **उत्कण्ठे** as a first-person verb. **Cut.** Apte p. 403 attests only the
   third-person denominative उत्कण्ठते, which governs gen. or dat.
   (उत्कण्ठते च युष्मत्सन्निकर्षस्य, U. 6). A first-person form would be my
   inflection, not the dictionary's.
3. **विरहिणी** as an engraving. **Cut** — sense 2, in *both* dictionaries, is
   "Wages, hire."
4. **विप्रलम्भ** standing alone. **Cut** — sense 1 in both dictionaries is
   "deception, deceit, disappointment."
5. **उत्कण्ठा recommended without its warning.** Cut — the neighbouring entry reads
   "A mode of sexual enjoyment" (Apte) and "a kind of sexual union" (MW).
6. **Every line reachable through the Pinterest, Instagram, YouTube and BlogAdda
   results.** Cut unread — no author, no dictionary, no page number.
7. **A Devanagari codepoint table.** Cut for the 3–6 outbound-link budget after the
   Unicode data was fetched. The block range survives in prose, Unicode named and
   not linked.

**Orthography trap worth recording, and it cuts the other way from Kittel's.** DSAL's
`matchtype=exact` on Apte returns **nothing** for Devanagari विरह, because Apte files
the nominative विरहः; it returns one result for उत्कण्ठा. Meanwhile exact roman *yad*
returns यद् (the relative pronoun, p. 1303) and exact *hai* returns है, "a vocative
particle" (p. 1765) — false passes for Hindi याद and है. So a naive lookup test can
clear a Hindi word and reject a Sanskrit one in the same sitting. That finding became
the body's comparison table and is, as far as this SERP shows, published nowhere else.

---

## Phase 3 — Third-party sources

Six, all fetched. `capcheck.mjs` re-run immediately before the JSON was written.

| # | Source | Subject test | Peer-reviewed / OA | Notes |
|---|---|---|---|---|
| 1 | Apte विरहः, p. 1461 (dsal) | pass — the language | scholarly reference | cap-exempt instrument |
| 2 | Apte विप्रलम्भः, p. 1452 (dsal) | pass — the language | scholarly reference | cap-exempt |
| 3 | Apte उत्कण्ठा, p. 403 (dsal) | pass — the language | scholarly reference | cap-exempt |
| 4 | Monier-Williams √स्मृ, p. 1271 (Cologne) | pass — the language | scholarly reference | domain unused elsewhere in batch |
| 5 | Tatoeba Sanskrit collection, 77 sentences | pass — attested usage | corpus | cap-exempt |
| 6 | Irfan Ali, Lo Presti, La Cascia, Spanò, *Frontiers in Artificial Intelligence*, 28 Jul 2026 | pass — Sanskrit segmentation | **yes, OA, read in full** | 79.34% exact segmentation accuracy; 84.39% boundary accuracy |

Generic context statistics: **zero**. Wikipedia in body: **zero** (only in `sameAs`,
which does not count against the 0–2 budget). No paywalled citation — all six open.

### Fetched, verified, not cited

- Samarth P. & Sanjay Balaji Mahalingam, "The Gemma Sutras: Fine-Tuning Gemma 3 for
  Sanskrit Sandhi Splitting", *Proceedings of the 9th Widening NLP Workshop*, ACL,
  Nov 2025, pp. 235–241. Abstract read in full: sandhi splitting is "substantially
  more complex due to inherent ambiguity and context-sensitive transformations" and
  Sanskrit "lacks explicit word boundaries". It corroborates source 6 and was dropped
  only because the source count was full.
- Unicode UCD 18.0.0 `Blocks.txt` and `UnicodeData.txt` — named in prose, not linked.
- en.wiktionary.org त्वाम्, त्वम्, स्मरति — used to justify the *cut*, not a printed line.
- MW विरह, उत्कण्ठा, विरहिन्, विप्रलम्भ — corroboration cited by page in prose.
- **Rejected on venue:** "Exploring the Major Themes in Selected Works of Kalidasa",
  *Webology* 2021 (Crossref). Webology's indexing history makes it a venue this batch
  should not cite; per BRIEF §4, checked before use and dropped.

### A claim in my prompt I could not verify

That Kālidāsa's *Meghadūta* is "an entire poem built on" viraha. Apte's विरह entry
carries five quotation tags to a work abbreviated **Me.** (8, 12, 29, 87, 89), its
उत्कण्ठा entry one more (85), and its √स्मृ citations include Me. 87 — but DSAL
serves Apte's front matter and abbreviation key only as **page scans** (`apte.pdf`,
`.jpg`), so the expansion of "Me." could not be machine-verified within budget. It is
**not asserted in the body.** The *vipralambha-śṛṅgāra* material — which is the
substance of that angle, and the thing no competing page has — is verified outright
from Apte pp. 1452 and 1566 and needs no attribution to a particular poem.

---

## Phase 4–5 — Structure and targeting

H1 → answer paragraph (three first-party numbers inside the first 150 words) →
`## Sanskrit has no transitive verb for missing someone` →
`## विरह (viraha): the word to engrave, and what it says` →
`## Love-in-separation is a named category, not a mood` →
`## उत्कण्ठा (utkaṇṭhā): longing, with a trap inside it` →
`## Why I will not print a Sanskrit sentence for your tattoo` →
`## How to tell Sanskrit from Hindi sold as Sanskrit` (table) →
`## What 214 private pages say about the opposite instinct` (table) →
`## What I cut, and why` → `## Sources`.

**1,797 words** excluding FAQs. **11 FAQs**, in `article.faqs` and the
renderer-built FAQPage only, none restating an H2.

- `categorySlug`: **miss-you-across-miles**, matching the twelve language siblings so
  the cluster's internal linking holds. It half-misdescribes this reader and that is
  recorded in `structuralLimitations`.
- `templateUrls`: `/missyou-gf` (mandatory) and `/photo-puzzle`. Three internal links
  including the hub, all placed after the section that earns them.
- **`/missyou-gf` is linked and argued against in the same sentence.** It assumes a
  romantic recipient and a reunion countdown, which only 28.0% of its senders set,
  and the body says outright that most readers here want no template at all — a
  forced pitch to this reader is worse than none. `/photo-puzzle` is named as the
  genuine alternative with a real reason: its final piece is deliberately not in the
  box, which is structurally closer to *viraha* than any countdown, and it suits
  someone who has one line rather than a letter. It is the least-used of the honest
  candidates (one prior use in this batch, against /dedication ×4 and /catch ×3).
- No price or "free" language anywhere.

**The three mandatory first-party caveats appear in body prose** in the "214 private
pages" section: pickers-with-defaults (city, background music and "together since"
excluded, with the sender-chosen fields named and the city-pair row marked "not a
sender signal" in the table), `viewCount` as page views not unique visitors, and
n = 214 over two months since 2026-07-28 with no seasonal claim.

---

## Phase 6 — Audit summary

47 passed, 3 failed, disjoint, 50 total, strings byte-verbatim from
`references/publish-checklist.md`.

Failures kept open:

1. **Every H2 section answerable standalone in 2–3 sentences** — the Sources section
   is a bibliography and "What I cut, and why" is a list of refusals. Seven of nine
   H2s pass. Closing it would mean dropping the sources list.
2. **An ItemList is present if the body ranks or numbers things, mirroring the H3s in
   the same order** — the body has no H3s and ranks nothing, so there is no H3 order
   to mirror. An ItemList of the four verified forms is emitted because it is useful
   for retrieval, but it mirrors the dictionary table's rows, not headings.
3. **3–6 outbound links, all fetched and verified to contain the cited fact** — all
   six links pass. The failure is a budget one: five further fetched-and-verified
   sources are cited in prose by page number without a link, because a seventh link
   would breach the rule.

## Cannibalisation check

- `/blog/i-miss-you-in-different-languages` (the hub) fetched 2026-09-25, HTTP 200.
  It contains the string "Sanskrit" **zero times**. Nothing to restate and nothing to
  correct; this post adds a language the hub omits entirely, plus the dictionary layer
  it carries for no language. Linked up to from the first-party section.
  *Separate flag, not my verification:* the hub's Tamil row reads
  "நான் உன்னை இனியிருக்கின்றேன் (naan unnai iniyirukkiren)", which does not look like
  an ordinary Tamil rendering. I did not check it against a Tamil dictionary and make
  no claim; whoever owns the Tamil spoke should.
- `content/keywords/2026-09-25-miss-you-global/site-baseline.md` contains no slug
  matching "sanskrit". None of the 81 live "miss" slugs is a classical language.
- Inside this batch, all thirteen finished siblings are modern spoken languages or
  English tone posts, and every one writes for a reader who will *send* something.
  This one writes for a reader who will *cut a word into* something.

Language, occasion and subject are never duplicates of each other, and this post
differs on two of the three. **No merge recommended.**
