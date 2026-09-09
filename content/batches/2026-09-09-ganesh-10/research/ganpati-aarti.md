# Research brief — `ganpati-aarti`

- **Primary keyword:** ganpati aarti
- **Secondary keywords folded in:** ganesh chaturthi songs · ganpati aarti in marathi · ganpati ji ki aarti
- **Batch:** 2026-09-09-ganesh-10 · category `indian-festivals`
- **Assigned research field:** ethnomusicology and devotional music — congregational singing, bhakti performance, the social effect of singing together
- **Date facts (verified, brief):** Ganesh Chaturthi 2026 = Monday 14 September 2026. Anant Chaturdashi / visarjan = Friday 25 September 2026. Weekday check run against the proleptic Gregorian calendar; both confirmed.

---

## Phase 1 — SERP analysis

`WebSearch` on "ganpati aarti" returns almost no editorial pages. Positions 1–10 are split
between streaming/app listings (Spotify album, a Play Store "Aarti Sangrah" app, two YouTube
playlists, AllMusic) and lyrics pages. There is no AI Overview and no featured snippet on the
head term — Google is treating it as a media/navigational query. That is a real finding: the
informational slot is genuinely unoccupied.

The pages that *are* editorial were fetched and parsed for headings, word count, tables,
FAQ and JSON-LD. None are cited or linked in the post; they are the thing being beaten.

| Page (analysed, not cited) | Words | Heading structure | Where the answer is | Data cited | Format elements | Tone | Optimising for |
|---|---|---|---|---|---|---|---|
| Temple blog A (aarti collection) | 582 | H4 "Collection of Aartis", then login/comment headings — no H1, no H2 on the content | No answer at all; the page is a lyric block | None | No table, no FAQ, **no JSON-LD**; Devanagari present | None (pure text dump) | Owning a lyric string |
| US temple blog ("Ganesh Chaturthi Aarti: Lyrics in English…") | 2,239 | H1 + 15 H2s incl. "Popular Ganesh Chaturthi Aartis", "Meaning of…", "Symbolism", "Psychological and Spiritual Benefits", "Conclusion", "🌸 Call to Action" | Buried under "Introduction to Ganesh Chaturthi Aarti" | None — "psychological benefits" section cites nothing | FAQ present, **no table, no JSON-LD, zero Devanagari** | Third person, hedged, emoji headings | A Dallas 2025 temple event CTA |
| Lyrics farm B (`bhaktinidhi`) | 890 | H1 + one content H2, then six "You May Also Like" H3s and a comment thread | Lyric block only | None | No table, no FAQ, no JSON-LD | None | Internal-link farming |
| Lyrics farm C (`mantramaya`) | 3,944 | **No h1–h4 tags at all** | Lyric block only | None | Has a table (a lyric layout table), no FAQ, no JSON-LD | None | PDF/image downloads |
| Streaming + app results (Spotify, Play Store, YouTube ×2, AllMusic) | n/a | n/a | n/a | None | n/a | n/a | Plays and installs |

**Common to all of them:** no publication date, no author, no structured data, no attribution
of the songs to their poets, no statement of the order in which the aartis are sung, and — the
one that matters most — no distinction between the Marathi aarti, the Hindi aarti and the
Sanskrit closing shloka. The US temple page prints "Sukhkarta Dukhharta" and "Jai Ganesh Deva"
back to back under one heading and gives neither a language nor a composer. Two of the four
carry no Devanagari at all, which makes them useless to the person who is actually going to
read the words out loud at 7 pm.

## Phase 2 — Gap analysis

**Table stakes** (present on most incumbents, so the post must carry them): the text of
Sukhkarta Dukhharta; the text of Jai Ganesh Jai Ganesh Deva; a line-by-line meaning; some note
on when the aarti is performed; the Ganesh Chaturthi date.

**The gap** — nothing in the top ten does any of this:

1. **Correct, separated attribution.** Sukhkarta Dukhharta is Marathi, by Samarth Ramdas
   (1608–1682), and it is *signed* in the last stanza — "दास रामाचा" (Das Ramacha). Jai Ganesh
   Jai Ganesh Deva is Hindi and circulates anonymously. Karpur Gauram is Sanskrit and is
   addressed to Shiva, not to Ganesha. The incumbents blur all three.
2. **The order.** Nobody says which song is sung when, or what follows the aarti.
3. **Devanagari + Roman + a plain English gloss together.** Two incumbents give no Devanagari;
   the rest give no usable gloss.
4. **Any evidence for the claim they all make.** Three of the four assert "spiritual and
   psychological benefits" of aarti and cite nothing. There is a real, open-access literature
   on group singing that none of them touches.
5. **Any first-party data.** By construction, none of them has any.

**Stale data:** not applicable — the incumbents cite no data at all, stale or fresh.

**Unanswered questions raised and dropped:** why the aarti is in Marathi/Hindi rather than
Sanskrit when the rest of the puja is Sanskrit; why a Shiva shloka closes a Ganesh aarti;
whether it matters if you sing the "wrong" one.

**Fan-out sub-queries** (each became an H2, an H3 or an FAQ): what is a ganpati aarti · which
aarti is sung first · who wrote sukhkarta dukhharta · ganpati aarti in marathi lyrics · ganpati
ji ki aarti in hindi · what does karpur gauram mean · why is karpur gauram sung to shiva at a
ganesh aarti · what comes after the aarti · what is mantrapushpanjali · ganesh chaturthi songs
list · how many times a day is the aarti done · does it matter if I sing badly.

**Angle (recorded as `batchMeta.angle`):** wins by being the only page that separates the
Marathi, Hindi and Sanskrit aartis by language, poet and position in the sequence — with
Devanagari, Roman and an original English gloss for each — and then explains why singing them
together works using open-access group-singing research, alongside SubhSandesh's own
platform-wide behaviour data.

## Phase 3 — Sources

Field searched: congregational singing, ritual music, group singing and social bonding. Search
strings used: `singing social bonding ice-breaker effect`, `congregational singing religious
ritual social cohesion open access`, `choir heart rate variability respiratory sinus
arrhythmia`, `bhajan kirtan group singing India study wellbeing PMC DOAJ Shodhganga`,
`ethnomusicology bhajan aarti performance Maharashtra Ganeshotsav open access`.

**A genuine negative finding, recorded in the audit:** there is no open-access, peer-reviewed
study of *Indian* congregational devotional singing that I could open and verify. The nearest
candidate, *Religions* 12(8):600 on kirtan in Gaudiya Vaishnavism, returns HTTP 403 to
automated fetch and could not be verified, so it was dropped rather than cited unread. The
group-singing literature used below is European and North American; the post says so in the
body rather than implying the studies were run on aarti singers.

| # | Source | Type | Subject test | Swap test | Verified |
|---|---|---|---|---|---|
| 1 | Pearce, Launay & Dunbar, "The ice-breaker effect: singing mediates fast social bonding", *Royal Society Open Science* 2(10), Oct 2015 — read at PMC4632513 | Peer-reviewed, **open access (CC BY)** | Pass — group singing and bonding | Pass — fits no other post in this batch | Full text read. 7 WEA adult-education classes; 84 singers, 51 non-singers; 3 timepoints over 7 months; within-class closeness change M=1.04 (s.d. 1.02, N=188) for singers vs M=0.46 (s.d. 0.90, N=114) for non-singers, t298.12=5.01, p<0.0001; no difference by timepoint 3 |
| 2 | Vickhoff et al., "Music structure determines heart rate variability of singers", *Frontiers in Psychology* 4:334, 9 July 2013 | Peer-reviewed, **open access** | Pass — what unison singing does to the singer's body | Pass | Full text read. 15 healthy 18-year-olds; hum / hymn / slow mantra, 5 min each; the mantra's 10-second phrases produce a 0.1 Hz respiratory cycle and marked respiratory sinus arrhythmia |
| 3 | Wald-Fuhrmann, Boenneke, Vroegh & Dannecker, "'He Who Sings, Prays Twice'? Singing in Roman Catholic Mass…", *Frontiers in Psychology* 11:570189, 17 Sept 2020 | Peer-reviewed, **open access** | Pass — congregational singing inside a liturgy | Pass | Full text read. N=1,603 Catholics in German-speaking countries; "I have the feeling that we become a community when we sing" M=4.2 (SD 0.9); "I feel connected with the others while singing" M=4.1 (SD 0.9), 5-point scale |
| 4 | Weinstein, Launay, Pearce, Dunbar & Stewart, "Singing and social bonding: changes in connectivity and pain threshold as a function of group size", *Evolution and Human Behavior* 37(2):152–158, March 2016 | Peer-reviewed, green OA | Pass — group *size* and singing, i.e. the mandal question | Pass | **Abstract only.** PMC4856205 is behind a browser check and Europe PMC returns 404 for the full text; Crossref confirms the title, journal, volume and March 2016 issue, and the abstract confirms small subchoirs n=20–80, a megachoir of n=232, and 90 minutes of singing |
| 5 | *Aarati Sangraha* (Marathi devotional collection, digitised), Internet Archive item `AaratiSangraha` | Primary text, freely readable | Pass — it *is* the aarti repertoire | Pass | OCR text read directly. Confirms the Devanagari of Sukhkarta Dukhharta, the attribution line "समर्थ रामदासस्वामी", the signature "दास रामाचा", the Marathi karpur-arati variant "कर्पूरगौरा करुणावतारा", the Namdev signature "म्हणे नामा" in Ghalin Lotangan, and the closing run through Tvameva Mata, Kayena Vacha, the Rigvedic Ganapati shloka and Mantrapushpanjali |

**Not used, and why:** every lyrics aggregator in the SERP (competitor content farms per
`competitors.md`); `en.wikipedia.org`, which is at the 3-post domain cap for this batch — it
appears only as `sameAs` inside `structuredData`, which is not a body link; Drik Panchang,
because this post states no muhurat time, so the date reference stays out of `sources` and
`citation` entirely; MDPI *Religions* 12(8):600, unverifiable (403).

Generic context statistics used: **zero**.

## Phase 4–5 notes

- Body: 8 H2s. First-party numbers land in the first 150 words (49.6% phone-open, 96.1%
  publish-and-share), both captioned platform-wide across 15 page types in the same sentence.
- Comparison table: four ways of getting the words in front of a 20-person aarti, with a
  first-party column.
- Internal links, all from `TEMPLATE_LINKS`: `/happy-ganesh-chaturthi` (placed after the
  section that establishes why a page that plays Karpur Gauram is useful), `/templates`, and
  `/happy-rakshabandhan-to-brother` (its own config describes animated tilak/aarti scenes, so
  the relevance is real, not a plug).
- Entities verified against the Wikipedia API with QIDs paired: Arti (Hinduism) Q16154326,
  Sukhakarta Dukhaharta Q19898505, Samarth Ramdas Q55780, Ganesha Q1579, Ganesh Chaturthi
  Q929250, Marathi language Q1571, Bhajan Q854775, Jogiya (raga) Q21998572.
- **Verified 2026-09-09:** slug `ganpati-aarti` free in Strapi (0 results); `indian-festivals` is a
  live Strapi category; `https://subhsandesh.in/templates` and
  `https://subhsandesh.in/happy-rakshabandhan-to-brother` return 200 but
  `https://subhsandesh.in/happy-ganesh-chaturthi` returns **404** on the apex domain — template
  visibility is admin-controlled, so this is recorded as an audit failure, not a bad slug.
- Audit: 48 of 50 checklist items pass; 2 fail (Weinstein 2016 verified from abstract + Crossref
  only, and the 404 on the primary internal link).
