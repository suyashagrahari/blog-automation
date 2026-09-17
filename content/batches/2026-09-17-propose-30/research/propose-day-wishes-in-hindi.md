# Research brief — `propose day wishes in hindi`

Batch `2026-09-17-propose-30` · slug `propose-day-wishes-in-hindi` · category `modern-romance`
Volume band: 3,000–10,000 EST (no tool data — never printed as a real volume in the post).
Slug checked against Strapi on 2026-09-17: `filters[slug][$eq]=propose-day-wishes-in-hindi` returned
`{"data":[],"meta":{"pagination":{"total":0}}}` — free.

**Date verified locally, not from memory:** `date -j -f %Y-%m-%d` returns
2027-02-07 = Sunday (Rose Day), **2027-02-08 = Monday (Propose Day)**, 2027-02-14 = Sunday
(Valentine's Day). Propose Day 2026 fell on a Sunday, so the 2027 Monday is a genuine change
and no incumbent prints it.

---

## Phase 1 — SERP analysis

WebSearch on the exact keyword and on `"propose day" wishes hindi 2026 shayari messages boyfriend
girlfriend`. Two of the top pages were fetched in full and indexed; the rest were read from SERP
titles, descriptions and indexed fragments. **No competitor page is cited, linked or paraphrased.**

| Page | Type | Where the answer is | Structure | Data cited | Format | Tone | Optimising for |
|---|---|---|---|---|---|---|---|
| Amar Ujala (Hindi daily) | Photo gallery, dated Sun 08 Feb 2026 | In the images, not the text | Slide-per-line, no H2 hierarchy | None | Gallery, wallpapers, no schema of substance | Hindi, newsroom, impersonal | February news-cycle refresh + wallpaper downloads |
| Astroyogi (Hindi astro portal) | Blog, dated Sat 07 Feb 2026 | After a long intro | Loose Hindi H2s, no recipient split | None | Long Hindi prose, astrologer CTA | Hindi, promotional | Astrologer consultations |
| India TV / India TV Hindi | News listicle, Feb 2026 | Para 1 | "for husband / wife / boyfriend / girlfriend" buckets | None | Mixed Hindi + English lines, images | Newsroom | Annual Valentine-week traffic |
| Asianet News Hindi | "50 wishes" photoshow | In the slides | 50 undifferentiated lines | None | Photoshow | Newsroom | Pageviews per slide |
| igstore.in / wishesmsg-class wishes farms | Commercial wishes blog | Para 1 | Anchor-linked buckets: wishes / boyfriend / girlfriend / husband / wife / crush | None | Long dumps, jump links | Generic | Long-tail wishes queries |

### Phase 2 — gap analysis

**Table stakes** (present on all five, so the post must have them): Devanagari lines; the
8 February date; the Valentine-week position; partner/spouse/crush buckets.

**The gap — four things none of the five do:**
1. **No Roman transliteration and no English gloss.** The audience types in Roman and reads
   in Devanagari; every incumbent gives one script only.
2. **No register marking.** Not one page tells you whether a line is तुम, तू or आप. Sending an
   आप line to a partner reads cold; sending a तुम line to an elder reads rude. This is the
   actual failure mode and it is completely unaddressed.
3. **No non-romantic recipients.** Every page assumes the reader is proposing. On 8 February
   most wishes go to people nobody is proposing to — a long-married spouse, a friend, a
   sibling, a family group.
4. **No 2027 date and no weekday.** Four incumbents still carry 2025 in the title; the ones
   that refreshed carry 2026 and a Sunday.

**Stale data:** every page cites zero data of any kind, so there is nothing to supersede —
the win is having any verifiable number at all.

**Fan-out sub-queries** (each becomes an H2 or an FAQ): what is a propose day wish in Hindi ·
propose day 2027 date and day · propose day wish vs propose day quote vs shayari · तुम vs आप in
a wish · propose day wish for wife / husband / friend / brother / group · can you send a propose
day wish to a colleague · does the Hindi change if the sender is a woman · is forwarding rude.

**Angle (recorded as `batchMeta.angle`):** wins by being the only post that sorts Propose Day
wishes in Hindi by *who receives them* and marks the pronoun each recipient takes — तुम, तू or
आप — with a Roman line and an English gloss on every wish, against SubhSandesh's platform-wide
send behaviour (4,567 pages, 39.9% password-protected before sharing).

**Lane discipline.** This post stays inside *festival greeting exchange as a social obligation*
— phatic function, reciprocity, politeness matching, honorific register. It deliberately does
not touch first-disclosure anxiety, marriage readiness, novelty, escalation, WhatsApp mechanics,
CMC channel choice, post-conflict repair, bilingual emotion, or perceived effort/quotation.

---

## Phase 3 — sources

Searched (phenomenon, not keyword): `festival greeting exchange social obligation study`,
`ritual greeting reciprocity research`, `mobile phone festival greetings study India`,
`bulk SMS festival greetings research`, `politeness theory greetings study`,
`phatic communion greetings social bond`, `greeting ritual reciprocity social obligation`,
`forwarded festival greeting messages WhatsApp India`, `Hindi honorific pronouns tum aap
address forms`. OpenAlex full-text search with `is_oa:true` was used to find open copies.

**Nothing exists on Indian festival greeting forwards specifically.** The OpenAlex query
`forwarded festival greeting messages WhatsApp India` returns 83 OA works and every top hit is
about political misinformation circulation, not greeting exchange. That is a real finding and is
recorded in the audit rather than papered over with a telecom statistic. The phenomenon is
instead reached through its three studied components: phatic function, reciprocity, and
honorific register.

| # | Source | What it actually says | Read |
|---|---|---|---|
| 1 | Mukherjee, Mehta, Saha, Arora & Choudhury, *Women, Infamous, and Exotic Beings: A Comparative Study of Honorific Usages in Wikipedia and LLMs for Bengali and Hindi*, arXiv:2501.03479, EMNLP 2025 (Main), submitted 2025-01-07 | "The obligatory use of third-person honorifics is a distinctive feature of several South Asian languages, encoding nuanced socio-pragmatic cues such as power, age, gender, fame, and social distance." First large-scale study across 10,000 Hindi and Bengali Wikipedia articles; honorifics more prevalent in Bengali than Hindi; in both languages, and more prominently in Hindi, men are more frequently addressed with honorifics than women. | Abstract page read in full; the PDF body was not read. The paper studies **third-person** honorifics on Wikipedia, so it is evidence that Hindi honorific marking is obligatory and socially loaded — **not** direct evidence about तुम/आप inside a sent wish. The post says exactly that. |
| 2 | Culpeper & Tantucci, *The Principle of (Im)politeness Reciprocity*, Journal of Pragmatics 175 (2021), CC BY | Reciprocity "has not received the attention it deserves in the (im)politeness literature"; the principle concerns the (mis)matching of (im)politeness across participants, construed as a debit–credit balance sheet. Informant testing and corpus analysis reveal "that (im)politeness matching is by far the most common interaction, that mismatches are perceived as clear deviations." | **Abstract only.** sciencedirect.com returns HTTP 403 to this machine; the abstract was read via the OpenAlex record for the DOI. Disclosed in the audit. |
| 3 | Kovanen, Saramäki & Kaski, *Reciprocity of mobile phone calls*, arXiv:1002.0763, submitted 2010-02-03 | Study of all mobile calls between 5.3 million customers of one operator. "It turns out that lopsided relations are indeed quite common, to the extent that the variation cannot be explained by simple random deviations or by variations in personal activity." | Abstract page read in full; PDF body not read. Disclosed in the audit. |
| 4 | *Triadicities of Indonesian Phatic Functions*, Theory and Practice in Language Studies 12(12), 2022 | Culture-specific pragmatic analysis of Javanese-Indonesian phatic functions; identifies the pragmatic meanings carried by phatic forms, **greeting** among them, alongside small talk, courtesy, thanking, joking, complimenting, apologising and reminding. Evidence that a greeting is a phatic form whose meaning is set by culture, not by content. | Abstract read via the OpenAlex record; the OA PDF returns HTTP 200 so the reader can open it. Full text not read — disclosed. |
| 5 | Dąbrowska, *"Happy b'day bhaiya": characteristics of Facebook Indian English*, Studia Linguistica Universitatis Iagellonicae Cracoviensis 129(1), 2012, pp. 61–89 | Analyses Indian English on Facebook — spelling and pronunciation change, abbreviation, nativised grammar, and "some typical sociolinguistic features of that variety, notably forms of address, culture-specific elements, and code-switching." The title itself is a greeting that code-switches an English wish into a Hindi kinship term. | Repository record read in full (abstract, metadata, keywords). Article body not read. |

**Generic context statistics used: zero.** No PIB, TRAI, Census or MEA figure appears in the post.

**Cap check.** `capcheck.mjs` run before choosing sources and again before finalising. None of the
five URLs is on the 54-URL wave-1 banned list. No domain was at the 3-post cap; none of
`arxiv.org`, `sciencedirect.com`, `tpls.academypublication.com` or `ruj.uj.edu.pl` appeared in the
"one slot left" list. `arxiv.org` carries two of this post's URLs — the cap counts **posts**, not
occurrences, so that is one post against the domain.

**Sources rejected and why.** `ejournal.ukm.my` (GEMA Online, *Intrusive Busybody or Benevolent
Buddy: Phatic Communication among Javanese Women*, CC BY) is the single best-fitting phatic paper
found, but the host closes the TLS socket to this machine on every attempt, so a reader following
the link would likely hit the same wall — dropped rather than shipped as a dead citation.
`anthropology.ucsd.edu` (Zuckerman, *Phatic, the*) fetched as unparseable binary. `en.wikipedia.org
/wiki/Propose_Day` is on the wave-1 banned list, so **no Wikipedia link appears in the body at all**
— the Wikipedia/Wikidata pairs in `structuredData` are `sameAs` entity grounding, which
`structured-data.md` explicitly excludes from the body Wikipedia budget.

---

## The Hindi lines — what was written, what was cut

**Every line was written for this post.** Nothing was copied, adapted or re-ordered from any
competitor page. 21 lines were drafted; **6 were cut as unverifiable or unidiomatic**, leaving 15
verified lines. Five of those 15 were then cut purely to bring the body inside the 1,500–1,800
word limit, so **10 shipped.**

Shipped: 2 for the person being proposed to (तुम) · 2 for a spouse (one आप, one तुम) · 2 for a
friend (तुम) · 2 for a sibling or cousin (तुम) · 1 for a family or office group (आप) · 1 for
someone not told yet (आप). Each carries Devanagari, a Roman transliteration and an English gloss,
and the group heading states the register.

Cut as unverifiable or unidiomatic, with the reason:

1. *"तुम्हारे बिना ज़िंदगी अधूरी है"* — correct Hindi, but it is a stock line that appears on
   several incumbent pages. Shipping it would be indistinguishable from copying it.
2. An Urdu-register construction built on *इज़हार-ए-मोहब्बत* — could not verify it reads naturally
   inside a sent greeting rather than a written couplet. Cut on the "if you cannot verify it, cut
   it" rule.
3. A तू-register line for a very close friend — तू is warm in Delhi, Haryana and Punjab and can
   read as contemptuous elsewhere in the Hindi belt. Too risky to publish as a line someone will
   paste and send without knowing that.
4. *"प्रपोज़ डे की हार्दिक बधाई"* — बधाई collocates with an achievement (a wedding, a promotion,
   an exam result), not with a calendar day. शुभकामनाएँ is the right word and is what shipped.
5. A Sanskritised group greeting (*प्रणय-दिवसस्य शुभाशयाः*) — grammatical as Sanskrit, not Hindi
   usage; nobody sends this.
6. A line for a colleague — could not write one that is not inappropriate in a workplace. The
   post says so in the body and in an FAQ rather than shipping a line it does not believe in.

Register note carried into the body: verb agreement follows the **speaker's** gender, so a male
sender writes चुन रहा हूँ / चुनूँगा and a female sender चुन रही हूँ / चुनूँगी. No incumbent page
flags this, and it is the most common way a pasted line goes wrong.

---

## Phase 5 — links and targeting

- `categorySlug`: `modern-romance`. Propose Day is Valentine week, **not** `indian-festivals`.
- `templateUrls`: `/proposal` (mandatory for this batch) and `/love-gf` (the genuine alternative —
  the reader whose question is "will you be my girlfriend", not "will you marry me").
- Body internal links: `/proposal`, `/love-gf`, `/templates` — three, all relative, all from
  `TEMPLATE_LINKS`, all placed after the table that establishes why the reader would want one.
- **The honest limit is stated in the body, not hidden here:** for a wish sent to a friend or a
  sibling, *neither* template is right — the right thing is one typed line in the chat thread
  that already exists, with their name in it, and no link at all.

## Phase 6 — audit arithmetic

`references/publish-checklist.md` has 50 items. `|passed| = 49`, `|failed| = 1`,
`passed ∩ failed = ∅`, `49 + 1 = 50`. The single failure is the outbound-link item: 5 sources are
cited but only 3 of the 5 pages could be fetched from this machine, so two facts were verified
against OpenAlex abstract records rather than against the pages themselves. Strings copied byte-verbatim, including items that wrap
across lines. The no-proposal-specific-data limitation and the empty pricing block are recorded in
`batchMeta.structuralLimitations`, never in `failed`.

Target position 6–10, not 3. These SERPs refresh every February and are held by national Hindi
newsrooms with authority far above this domain.

Body: 1,798 words excluding FAQs. 11 FAQs. 10 Hindi lines shipped.
