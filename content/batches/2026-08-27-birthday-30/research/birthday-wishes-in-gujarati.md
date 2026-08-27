# Research brief — "birthday wishes in gujarati"

Batch: `2026-08-27-birthday-30` · slug `birthday-wishes-in-gujarati` · rank 7 · lane **C**
(Gujarati diaspora usage and language maintenance abroad) · bucket `winnable`, 3–4 weak.

WebSearch was exhausted for this session, so the SERP was taken as given from
`ASSIGNMENTS.json` (live India-localised, `gl=in`). Competitor pages were fetched with
`ctx_fetch_and_index`; their URLs were located from each site's `sitemap.xml` rather than
by searching.

---

## Phase 1 — SERP analysis

| # | Page | Fetched | Words / shape | Where the answer is | Data cited | Format | Tone | Optimising for |
|---|---|---|---|---|---|---|---|---|
| 1 | igp.com — "ગુજરાતીમાં જન્મદિવસના શુભેચ્છા" | not fetched (gifting retailer, competitor; product sitemap only) | product-page wrapper around a wish list | n/a | none | product cards | promotional | selling cake/flower delivery against a wishes query |
| 2 | beread.org — "101+ Best Happy Birthday Wishes in Gujarati" | yes | 259 indexed sections; very long wish dump | no direct answer — Gujarati intro paragraph, then wishes | none | H2 buckets, per-wish Facebook/WhatsApp share links, "Updated on Aug 11, 2026" | second person, warm, entirely in Gujarati script | volume of copyable wishes + social share clicks |
| 3 | pinterest.com | not fetched (competitor; image board) | image pins | n/a | none | images | n/a | image search |
| 4 | prestogifts.com — "Gujarati Birthday Wishes, Shayari" | not fetched (gifting retailer, competitor) | wish list + product rail | n/a | none | lists | promotional | gift transactions |
| 5 | wishgujarati.com — "50+ જન્મદિવસની શુભકામનાઓ સંદેશ" | yes | 13 indexed sections, ~50 wishes | no direct answer; site-welcome paragraph first | none | relation-based internal link list (father / mother / friend / wife / husband / daughter / son / brother / sister), images with wishes baked in | first person plural, "મિત્રો" address | relation long-tails, "copy and share" |
| 6 | gujaratiwish.com — "Birthday Wishes in Gujarati" | yes | 26 indexed sections | no direct answer; three scene-setting paragraphs | none | table of contents, "Heart Touching" H2 buckets, images | third person, generic inspirational | keyword coverage |
| 7 | smitcreation.com — "25+Happy Birthday Wishes In Gujarati" | not fetched (20+ post sitemaps; thin EMD) | short wish list + images | n/a | none | images | n/a | image + wish volume |
| 8 | gujaratijagran.com — "જન્મદિવસની શુભકામના (2026)" | article URL not in the sitemap index (news-section sitemap only) | news-site listicle, refreshed to 2026 | n/a | none | lists | news-desk | freshness + brand authority |

**Common shape of every page that could be read:** a Gujarati-script intro of two to four
paragraphs, then an unnumbered dump of wishes grouped by relation, then images with the
same wishes rendered as pictures. No page carried a number, a date, a study, an author
with a byline, a comparison table, or a Roman transliteration.

---

## Phase 2 — Gap analysis

**Table stakes** (must appear or the post looks incomplete):
the standard phrase જન્મદિવસની હાર્દિક શુભેચ્છા; a shorter જન્મદિવસ મુબારક; wishes split by
relation (parent, grandparent, friend, sibling/cousin); an English gloss for each.

**The gap.** Every ranking page is written as though the reader is in Gujarat writing to
someone in Gujarat. Nobody addresses the sender abroad. Specifically, none of them:

1. prints a **Roman transliteration** next to the script, so a reader who speaks Gujarati
   but cannot read it can still use the wish;
2. mentions that the script can fail to render on the recipient's device;
3. mentions **IST** or the timezone arithmetic of sending from the UK or North America;
4. says how **long** a real birthday message is;
5. flags the **honorific** distinction (તમે vs તું) that decides whether a wish to a parent
   reads as respectful or rude.

**Stale data.** There is none to supersede — no page in the SERP cites a statistic at all,
which is itself the opportunity.

**Unanswered questions raised and dropped:** how to type Gujarati from an English keyboard;
what to send when the birthday has already passed in India; whether to send script, Roman
or both.

**Fan-out sub-queries** → became H2s and FAQs: *how do you say happy birthday in Gujarati* ·
*Gujarati birthday wishes in English letters* · *why does Gujarati show as boxes* ·
*how long should a birthday message be* · *what time to send a birthday wish to India* ·
*તમે or તું for parents* · *late birthday wish in Gujarati*.

**Angle (recorded as `batchMeta.angle`):** wins by being the only post that writes the
Gujarati birthday wish for the sender abroad rather than the reader in Gujarat — pairing
every wish with a Roman transliteration for the readers who cannot read the script, naming
the IST send window, and grounding message length in the measured 96-character median
personal message across 197 SubhSandesh birthday pages.

---

## Phase 3 — Sources

Lane C is shared with the Hindi, Tamil and Telugu posts, so the sub-angle here is
**diaspora and language maintenance**, not script technology or NLP. Domain post-counts
were re-measured against `content/batches/*/blogs/*.json` immediately before writing.

| Source | Domain | Posts using this domain | Test |
|---|---|---|---|
| ONS, *Language, England and Wales: Census 2021*, published 29 Nov 2022 | `www.ons.gov.uk` | 0 | The one permitted context statistic. Subject test: it is about Gujarati specifically, not about Britain generally. |
| Prasad, *Identity threat through the lens of heritage language maintenance: second-generation Indian diaspora in Sydney, Australia*, *South Asian Diaspora*, 13 Jun 2024, open access (CC BY-NC-ND) | `www.taylorfrancis.com` | 1 | Peer-reviewed, open access, full text read. |
| Roberts, *Immigrant Language Maintenance and Shift in the Gujarati, Dutch and Samoan Communities of Wellington*, PhD thesis, Victoria University of Wellington, 1999 | `openaccess.wgtn.ac.nz` | 0 | Scholarly, open access, full text read (95 MB PDF, extracted and checked). Gujarati-specific with a real n. |
| Noto fonts project, Gujarati font families | `notofonts.github.io` | 0 | Primary technical reference; verified the three families exist. |

**Verified figures actually used:**

- ONS: Gujarati was the **9th** most common main language in England and Wales in 2021 with
  **188,956** speakers, down from **213,094** and **5th** place in 2011. Read from the
  bulletin's Figure 1 data download (`dvc2205/fig1/datadownload.xlsx`), not from memory.
- Prasad 2024, Table 3 (n = 42 reporting an Indian regional language): **63%** understand it
  very well and **26%** well; **79%** cannot read it; **81%** cannot write it. Full text read.
- Roberts 1999, §7.2.4 and Table 7-14 (n = 141 Gujarati respondents in Wellington):
  **91.4%** had spoken both Gujarati and English in the previous month; **65.9%** used both
  at home; of the 35 New Zealand-born respondents **37.1%** reported no ability to read or
  write Gujarati, against **4.3%** of the 94 Gujarat-born.
- Noto: the project publishes **Noto Sans Gujarati, Noto Sans Gujarati UI and Noto Serif
  Gujarati**.

**Rejected, and why:**

- `learn.microsoft.com` — *Developing OpenType Fonts for Gujarati Script* was fetched,
  verified and drafted in, then removed when the domain hit the cap (4 posts) mid-write.
  The rendering section was rewritten around the Noto reference instead.
- `aclanthology.org`, `arxiv.org`, `unicode.org`, `lrec-conf.org`, `w3.org`,
  `etheses.whiterose.ac.uk` — all at or over cap from the rakhi language batch.
- `source.android.com`, `harfbuzz.github.io` — taken by the Telugu sibling.
- The Google Research romanised-transliteration paper — already indexed by a lane C sibling
  in this batch; not reused.
- `www.ijfmr.com` review of Indian diaspora language shift — low-quality venue, rejected on
  editorial grounds rather than on cap.
- Shodhganga thesis *British gujarati diaspora kavitama bhav bhasha ane abhivyakti* — on
  British Gujarati diaspora poetry, written in Gujarati; no extractable figure for this post.

**Search terms tried** (Crossref, Semantic Scholar, DOAJ, Unpaywall, Shodhganga; OpenAlex
was rate-limited and general web search engines were unreachable from the sandbox):
`Gujarati language maintenance diaspora` · `heritage language maintenance Gujarati Britain
second generation` · `Gujarati script romanisation digital communication` · `language
maintenance shift Gujarati Wellington New Zealand` · `transnational family communication
video call migrants distant intimacy` · `time zone difference transnational family
communication scheduling` · `romanised Indic script transliteration users prefer reading` ·
`digital kinning ageing migrants transnational care` · `Gujarati bilingualism
sociolinguistic study speakers` · `grandparents transnational communication smartphone
migrant grandchildren`.

---

## Phase 5 — targeting

- `categorySlug`: `milestone-birthdays` (confirmed live against Strapi during this run).
- `templateUrls`: `/birthday-parents`, `/birthday-friend`, `/templates` — all present in
  `TEMPLATE_LINKS`. `/birthday-gf` was rejected: this post is addressed to parents,
  grandparents and cousins back home.
- Slug checked against live Strapi during this run: **free** (0 matches).
- `structuredData`: one `@id`-matched enrichment block on `<canonical>#post` carrying
  `about`, four `mentions` and four `citation` entries mirroring `batchMeta.sources`
  one-to-one, plus an `ItemList` mirroring the six H3 wishes in order. Every `sameAs` was
  checked against the Wikipedia API and paired with its Wikidata QID (Q5137, Q733944,
  Q1334971, Q604055, Q1150437).

## Phase 6 — audit summary

47 of 50 checklist items pass. Three fail, all recorded in the blog JSON:

1. Per-language birthday data does not exist in the first-party probe (structural).
2. **The mandatory language blocker** — every Gujarati string is machine-composed and
   unverified; native-reader sign-off required (structural).
3. Eight paragraphs exceed three sentences, six of them the wish blocks by design.
