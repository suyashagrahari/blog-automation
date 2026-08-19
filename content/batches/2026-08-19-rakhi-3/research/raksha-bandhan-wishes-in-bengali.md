# Research brief — `raksha-bandhan-wishes-in-bengali`

- **Keyword:** raksha bandhan wishes in bengali
- **Batch:** 2026-08-19-rakhi-3
- **Intent:** informational, blog asset type. Long-tail (5 words), not a head term.
- **Slug check:** `https://strapi.subhsandesh.in/api/articles?fields[0]=slug&filters[slug][$eq]=raksha-bandhan-wishes-in-bengali` returned `data: []` on 2026-08-19. Free.
- **Sibling files present in `content/batches/2026-08-19-rakhi-3/blogs/`:**
  - *Checked before Phase 3, and again immediately before writing the JSON:* directory empty. No sibling `batchMeta.sources` existed to pick around at either point, so the five sources were chosen with no batch-uniqueness constraint to satisfy.
  - *Checked again immediately after writing the JSON:* two siblings had landed — `celebrate-raksha-bandhan-siblings-different-cities.json` (`demographic-research.org` ×2, `pib.gov.in` ×2, `newsonair.gov.in`) and `make-raksha-bandhan-card-online-with-name.json` (`hbs.edu`, `research.google.com`, `englelab.gatech.edu`, `wu.ac.at`, `ics.uci.edu`).
  - **Collision check re-run against both:** zero shared URLs and zero shared domains with this post's five. Nothing needed changing. If further siblings land, `ccsenet.org`, `questjournals.org`, `en.banglapedia.org`, `w3.org` and `unicode.org` each stand at one use in this batch.

---

## Phase 1 — SERP analysis

Searched `raksha bandhan wishes in bengali`. Every result is a competitor or a content farm under `references/competitors.md` (wishes/greeting aggregators, or Bengali-language news lifestyle desks running an annual wishes listicle). **None is cited or linked.**

| Page | Words / structure | Where the answer is | Data cited + date | Format | Tone | Optimising for |
|---|---|---|---|---|---|---|
| `bengalisms.com/rakhi-bandhan-bengali-quotes/` | ~1,200, mostly image captions. H2s: Wishes / Quotes / Subho Rakhi Bandhan. Fetched in full. | Immediately — a blockquote of Bengali verse in the first screen | None. Body says "এই বছর … আগস্ট মাসের ১২ তারিখে", i.e. **2022**. Headline says "২০২২ এর সেরা ৪৫ টি" | Blockquotes + one image per line + a "কপি করুন" copy button. No table, no FAQ, no byline | Bengali only, warm, formulaic | Image search + copy-paste volume. 45 lines, zero explanation |
| `tipsinbangla.com/raksha-bandhan-sms-wishes-bengali/` | ~1,400. Flat list under one H2. Fetched in full. | Immediately | "will be celebrated this year on Monday, 19 August 2024" — **stale by two years** | **Does give Roman transliteration under each Bengali line** — the only competitor that does. No gloss, no register note, no table, no FAQ | Mixed Bengali/English, SEO-stuffed intro ("brother caption bangla, rakhi purnima sms bengali") | Long-tail keyword stuffing |
| `bangla.aajtak.in/…-soc-1258154-2025-08-08` | ~900. Wishes as a scroll of image cards. Fetched in full. | In the standfirst | Year-stamped **2025**. Standfirst does note "রাধা-কৃষ্ণের ঝুলনযাত্রার শেষে শ্রাবণী পূর্ণিমায় রাখি বন্ধন উৎসব হয়" — one line on Jhulan, unexplained and unsourced | Image cards, no table, no FAQ, no schema visible, no author expertise signal | Bengali, news-desk neutral | Annual seasonal traffic |
| `bangla.aajtak.in/…-soc-1073985-2024-08-18` | ~850, same template one year older. Not fetched in full (same template, same desk); read via SERP + the 2025 sibling | In the standfirst | Year-stamped **2024** | Same as above | Same | Same |
| `bengali.boldsky.com/insync/…-005624.html` | **403 to the fetcher.** Not analysed. Recorded as unread rather than guessed. | — | — | — | — | — |
| `in.pinterest.com/pin/…600667669057026901/` | Image pin, no article | n/a | none | image | n/a | Image search |

Two of the five ranking pages carry a **2024** or **2025** year-stamp in the title, and one is stamped **2022**. Being accurately current in August 2026 is a free win.

### AI Overview / featured snippet
No AI Overview surfaced for the English-language query in the search run. The snippet space is held by the Bengali-language news pages.

---

## Phase 2 — Gap analysis

**Table stakes (all five cover these, so the post must too):**
- A set of ready-to-send Bengali lines in Bengali script.
- The words রাখী পূর্ণিমা / শুভ রাখীবন্ধন.
- A brother-and-sister framing.
- Something short enough for a WhatsApp or Instagram status.

**The gap — four things none of them do:**
1. **No page names the register decision.** Bengali has a three-way second person (আপনি / তুমি / তুই). The aajtak set alone mixes আপনি ("আপনার ও আপনার পরিবারকে") and তুই ("তোর সুখ") in the same list with no note that they are not interchangeable, so a reader copying two lines from one page can send a demotion and an honorific to the same brother.
2. **No page uses the 1905 Tagore rakhi as history.** `tipsinbangla.com` prints a *poem* that alludes to it ("মিলল গলায় রাখির টানে হিন্দু মুসলমান", "বাংলা ভাগের সমাজ ভাগের চেষ্টা") but never dates it, names Tagore, explains it, or sources it. Nobody reframes the day as anything other than a sibling-gift occasion.
3. **Jhulan is one unexplained clause at most.** aajtak's standfirst mentions ঝুলনযাত্রা and drops it. No page says what Jhulan is, that it is Vaishnav, or that its five days *end* on Rakhi Purnima.
4. **No page addresses script rendering.** Bengali conjuncts and the *ya-phalā* are font-dependent, so a line can be correct on the sender's phone and broken on the recipient's. Five pages of Bengali script, zero words on why it sometimes breaks.

**Stale data:** three of the ranking pages are year-stamped 2022, 2024 and 2025; one states a 2024 festival date as "this year".

**Unanswered questions the pages raise and drop:** what is Jhulan; why does the same list use তুই in one line and আপনি in the next; can a sister tie rakhi to a sister; why did the Bengali text arrive broken.

**Fan-out sub-queries → H2s:**

| Sub-query | H2 |
|---|---|
| what is Raksha Bandhan called in Bengali | ## What a Bengali Raksha Bandhan wish is actually called |
| why is Jhulan on the same day as rakhi | ## Why Rakhi Purnima shares its date with Jhulan |
| did Tagore start rakhi / rakhi 1905 Bengal partition | ## The 1905 rakhi: Tagore's thread across a communal line |
| tumi or tui for elder brother in Bengali | ## Pick the register first: আপনি, তুমি, তুই |
| raksha bandhan wishes in bengali with meaning | ## Six Raksha Bandhan wishes in Bengali, with transliteration and meaning |
| which rakhi message for which relative | ## Which register goes to whom, and how it gets read |
| bengali font not showing properly / broken text | ## What breaks Bengali script on someone else's phone |
| should I write in Bengali or English | ## When a Bengali wish is the wrong choice |

**Angle:** wins by being the only post that treats রাখী পূর্ণিমা as a Bengali festival with its own frame — Jhulan's Vaishnav five days and Tagore's dated 1905 Hindu–Muslim rakhi — and makes the আপনি / তুমি / তুই register decision the step *before* the words, with every line carrying transliteration, gloss and the register it commits you to.

---

## Phase 3 — Sources

Searched the *phenomena*, not the keyword: `Bengali second person pronouns tui tumi apni honorificity`, `Rabindranath Tagore 1905 rakhi bandhan partition of Bengal Swadeshi`, `W3C Bengali script layout requirements ya-phala conjunct`, `banglapedia Jhulan Yatra Sravana Purnima`.

All five fetched and verified against the source text. Zero competitor sources. Zero Wikipedia (Wikipedia is banned for this batch; the only Wikipedia URLs in the file are `sameAs` entity targets in `structuredData`, which `references/structured-data.md` explicitly excludes from the link budget). **Zero generic context statistics** — no PIB, TRAI, Census or MEA figure appears anywhere in the post.

| # | Source | Domain fresh? | Subject test | Swap test | Scholarly? |
|---|---|---|---|---|---|
| 1 | Md. Afaz Uddin, "Second Person Pronouns as Person Deixis in Bengali and English", *International Journal of English Linguistics* 10(1), 30 Dec 2019 — `ccsenet.org` | New to all 3 rakhi batches | About the Bengali language's pronoun system. Pass | Useless in any other keyword in this batch. Pass | Peer-reviewed, open access |
| 2 | Priyanka Mitra, "Partition of Bengal, Swadeshi Movement and the Role of Rabindranath Tagore", *JRHSS* 7(1), 2019, pp. 37–42 — `questjournals.org` | New | About the 1905 rakhi specifically. Pass | Pass | Peer-reviewed journal, open access PDF |
| 3 | "Jhulan", Banglapedia (Asiatic Society of Bangladesh) — `en.banglapedia.org` | New | About the festival on the same full moon. Pass | Pass | Scholarly-edited national encyclopedia, signed entry (Sambaru Chandra Mohanta). Not peer-reviewed |
| 4 | "Bengali Script Resources", W3C Group Note Draft, 20 March 2026 — `w3.org` | New | About rendering the Bengali script. Pass | Pass | Standards body |
| 5 | "Bengali (Bangla) FAQ", Unicode Consortium — `unicode.org` | `unicode.org` appears once in `2026-08-18-rakhi-2` (the Marathi post, `/faq/indic.html`). Different page, different batch; 1st use in this batch | About the Bengali *ya-phalā*. Pass | Pass | Standards body |

**Verified claims used in the post**

1. **ccsenet / IJEL** — "Bengali … has three separate morphemes for singular nominative pronouns of address—apni, tumi, tui", tabulated as *Formal/polite/hierarchical*, *Familiar/polite/intimate*, *intimate/impolite/neglecting*. "Unlike the T/V dichotomy, it has a tripartite form"; আপনি on the V axis, তুই on the T axis, and "the semi-formal, emotionally intimate form 'tumi' does not fall into any of these categories." তুই marks addressees "in a friendly, jovial, informal or even hostile relationship", and is used "by the elderly people in a familiy situation to address the younger members of the family" [sic]. *Note: the landing page at ccsenet.org shows the abstract; the quoted claims were read from the full open-access PDF of the same article (not a paywall — full text is free).*
2. **questjournals / JRHSS** — an assembly "organized on 27th September in Sabitri Library where Rakhi Bandhan festival was proposed and this song ['Banglar Mati, Banglar Jol'] was written on this occasion"; on 16 October 1905 shops shuttered, vehicles halted, people walked barefoot chanting "Vande Mataram", bathed in the Ganga and "irrespective of caste and religion tied Rakhi on each other's hand as a symbol of unity"; "Tagore himself posted cards and rakhis to many of his acquaintances. Rakhi and rakhi strings were sold from Bhandar office in Cornwallis Street."
3. **Banglapedia** — "Jhulan a Vaishvava festival … also called the Jhulan festival of radha and krishna. The festival continues for five days, from the eleventh of the first bright fortnight of the Bangla month of Shravan to the day of the full moon." Images placed on a swing.
4. **W3C beng-lreq (20 March 2026)** — the Bengali script is an abugida; clusters are "normally indicated using a virama (hasant) between consonants. This results in a large number of conjunct forms expressed using stacked consonants, conjoined consonants, and ligated glyphs"; "As part of a cluster, RA has special forms, for both cluster-initial and post-base positions."
5. **Unicode Bengali FAQ** — when U+09AF য "occurs as the last member of a consonant cluster it has a special shape … called *ya-phalā*"; if য follows র "the font will normally produce the *reph* over the full form of *ya*, as in পর্যন্ত", and retaining the ya-phalā shape there requires U+200D ZERO WIDTH JOINER before the hasant.

**Deliberately not cited:** `en.wikipedia.org` (banned this batch), `drikpanchang.com` (banned), the Bengali film "Rakhi Bandhan" (not the festival — checked and excluded), and every SERP result. Raksha Bandhan 2026 = Friday 28 August 2026 was fact-checked and is stated in one FAQ, but the post states no muhurat time, so it is kept out of `sources` and `citation` per the checklist exception.

**Search terms that found nothing better:** for a more prestigious open-access scholarly treatment of the 1905 rakhi specifically I tried `Tagore rakhi bandhan 1905 Swadeshi archive`, `Rakhi Bandhan Utsav Santiniketan 1905 scholarly`, and searches scoped to Shodhganga and JSTOR Open. The best open-access, verifiable, publisher-hosted item found was the JRHSS paper. This is recorded as an audit failure rather than papered over.

---

## Phase 4–5 notes

- **First-party facts used (4):** 51.9% phone-open rate of 32,683 views; 2,718 pages across 13 page types; 52.1% touch-device views; 44.3% password-protect (1,205 of 2,718). Two of them (51.9% / 32,683 and 2,718 / 13 types) sit inside the first 150 words.
- **Stated limitation:** there is no rakhi-specific first-party number. The post says so twice — in the table's last row and in the wrong-choice section — rather than implying one exists.
- **`categorySlug`:** `festive-beats`. The brief prefers `family-and-continuity` where the post is about the relationship; this post's spine is the festival's Bengali identity and history, not the sibling relationship, so `festive-beats` is the honest fit. Verified live against the Strapi categories endpoint.
- **`templateUrls`:** `/happy-rakshabandhan-to-brother` and `/templates`, both from `TEMPLATE_LINKS`. The rakhi template is brother-first, which the body states plainly next to the link because two of the six lines are sister-to-sister or non-sibling.
- **Wikidata QIDs**, all verified in one `en.wikipedia.org/w/api.php` call with `redirects=1&prop=pageprops&ppprop=wikibase_item`: Raksha Bandhan Q10266, Jhulan Purnima Q19892218, Rabindranath Tagore Q7241, Bengali language Q9610, Partition of Bengal (1905) Q2047143. None guessed.
- **Cannibalisation check against the 19 existing rakhi posts:** the closest is `raksha-bandhan-quotes-in-marathi` (2026-08-18-rakhi-2) — same register-plus-script method, different language, no shared source URL or domain except the `unicode.org` domain on a different page. `raksha-bandhan-wishes-for-brother-in-marathi` and `raksha-bandhan-shayari-in-hindi-for-bhai` are other-language siblings with no Bengali overlap. No internal links point at any of the 19 unpublished slugs.

## Bengali line authenticity

Eight lines were drafted; **two were dropped** for authenticity rather than shipped:

1. `এক হাত, এক সুতো, সারা জীবনের বন্ধন।` — grammatical but generic to the point of being interchangeable with the competitor lists, which defeats the purpose.
2. A Jhulan line drafted as `...শ্রাবণী পূর্ণিমায় হাতে ওঠে রাখী` — `হাতে ওঠে` is not how a Bengali speaker would say a rakhi is tied. Rewritten as `হাতে বাঁধা পড়ে রাখী` and kept as line 5.

The six published lines are original compositions. **They have had no native-speaker review**, which is the single most likely way this post embarrasses itself, and it is stated in `honestAssessment`.
