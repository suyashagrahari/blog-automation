# Research brief — `online gift kaise banaye`

Batch `2026-09-15-virtual-gift-30`, WAVE 2. Market: India. Evergreen.
Row replaces `online gift kaise bheje` (killed: 5/10 ecommerce — `bheje`/send is a
delivery query).

---

## Phase 0 — first-party data gate

`content/facts.md`, regenerated 2026-09-15. Gate met: far more than three relevant
lines, and the two that open the post are the **least-used pair in the batch**.

I counted how often each fact appears inside the first ~170 words of the 48 sibling
files already on disk before choosing:

| fact | siblings opening with it |
|---|---|
| 4,357 pages created | 36 |
| 40.6% password-protect | 23 |
| 6.2-hour median edit gap | 18 |
| 94.1% published and shared | 13 |
| **#1 /love-gf 25.8%** | **2** |
| **#2 /bouquet-gf 24.6%** | **1** |

So the opening block uses `#1 /love-gf — 1,125, 25.8%`, `#2 /bouquet-gf — 1,070,
24.6%` and `94.1% published`. The password and 6.2-hour figures still appear, but
in steps 3 and 4 where they do work, not in the lead where they have become a tic.

**Disclosure carried into the body:** the database records which *template* was
opened, not who received the page, so the `/love-gf` count does not prove the
recipient was a girlfriend. Written into the section under the comparison table.

**Pricing:** the `## Pricing (fill in by hand)` block in `facts.md` is empty. The
post says plainly that current pricing cannot be confirmed and links `/templates`.
No free-tier or paid-tier figure is stated or implied.

---

## Phase 1 — SERP analysis

### Primary query — `SERPS-WAVE2.md`, DuckDuckGo `kl=in-en`

```
 1. winni.in/gifts                    Online Gift Delivery | Send Gifts to India @ ₹199
 2. gifft.me/create                   Create Free Virtual Gifts Online          [COMPETITOR]
 3. indidecor.com                     Gifts Delivery Online | Buy/Send Gifts in India
 4. giftmebazar.com                   Best Personalized Gifts Online in India
 5. flipkart.com/the-gift-card-store  Buy Gift Cards & Vouchers Online
 6. giftana.com                       India's Best Personalized Gifts Online
 7. oyehappy.com                      Unique Gifts Online - Buy Customized Gifts
 8. bhootiya.com                      Unique Personalized & Customized Gifts
 9. oyegifts.com                      Send Gifts to India: Online Gifts Delivery
10. amazon.in/gifts                   Amazon.in: Gifts
```

**Gate 2 read: MIXED, and honestly weak.** Eight of ten are gift-delivery or
gift-shop pages. Only #2 (a competitor, not citable and not linkable) is a maker
tool. Canva ranked #1 in the row's `gate2` note but does not appear in the
captured ten — it appears on the `page` variant below.

**No top-5 page was read in full.** WebFetch is blocked this session, and eight of
the ten are retailers this brief forbids fetching or citing. Phase 1's "fetch the
top 5 in full" step therefore could not be run, and checklist item *"No section
closely mirrors a competitor page's structure or framing"* is recorded as
**failed** rather than asserted — see the audit.

### Secondary query I ran myself — `node scripts/serp-ddg.mjs "gift page kaise banaye"`

One call, no retry loop. The result is the single most useful finding in this row:

```
 1. cutiepage.in                      Make a Website Gift for Your GF/BF     [COMPETITOR]
 2. canva.com/hi_in/website-builder/  फ्री ऑनलाइन वेबसाइट डिज़ाइन बनाएँ
 3. canva.com/hi_in/website-builder/design/
 5. subhsandesh.in/                   SubhSandesh — Digital Celebration Pages
 6. dribbble.com/tags/gift-website
 7. 24siteshop.com/gift-selling-website-kaise-banaye/
 8. hi.wikihow.com/…फेसबुक-पेज-तैयार-करें
 9. chotu.com/blog/…online-gift-store
```

**Adding one noun (`page`) removes the ecommerce wall entirely.** Zero marketplaces,
two Canva Hindi pages, a Hindi wikiHow, a `kaise banaye` tutorial — and
**subhsandesh.in's homepage already sits at #5**. That is a live ranking on this
exact Hinglish intent, and it is the reason this post targets the make-it reading
rather than trying to out-rank Winni.

This finding became a body block ("Query mein noun daaliye"), and it is the claim
none of the top pages make.

### Autocomplete (India) — `content/keywords/2026-09-15-virtual-gift-100/ac*/autocomplete.csv`

```
online gift kaise bheje              1,250 / 558
virtual gift meaning in hindi          901
anniversary gift kaise banaen          600
birthday gift for girlfriend in hindi  601
surprise gift for her meaning in hindi 561
love gift shayari in hindi             550
```

Real, repeated demand on the Hindi/Hinglish axis. `anniversary gift kaise banaen`
is taken as a secondary keyword; it is not listed as any other row's secondary
(checked all 79 secondaries across the 48 sibling files — **none** contain
`kaise`, `hindi`, `banaye` or `banane`).

---

## Phase 2 — gap analysis and angle

**Table stakes** (what every ranking page covers): what you can send online, a
list of occasions, some notion of personalisation.

**The gap, in one line:** every page on this SERP answers the English noun `gift`
and ignores the Hindi verb `banaye`.

- `banaye` (बनाएँ) = make. `bheje` (भेजें) = send. `kharide` (ख़रीदें) = buy.
  Three jobs. The SERP returns one answer for all three.
- Nobody tells the searcher how to fix their own query. One noun does it.
- Nobody discusses **what language to write inside the gift**, which is the only
  decision unique to this searcher and the one with actual research behind it.

**Fan-out sub-queries → H2s:**

| sub-query | H2 |
|---|---|
| banaye vs bheje kya farak hai | Banaye, bheje aur kharide: teen alag sawaal |
| online gift kaise banate hain (steps) | Online gift kaise banate hain: paanch step |
| gift mein Hindi likhein ya English | Gift ke andar kaunsi bhasha likhein |
| kaunsa page kis mauke ke liye | Kaunsa page kis mauke ke liye (table) |
| kya yeh free hai | "Free" ka matlab kya hai |
| kab yeh sahi nahi hai | Jab online gift banana hi galat choice hai |

**Angle:** wins by being the only post that treats `banaye` as a different question
from `bheje`, proves it from the live India SERP, hands the reader the one-noun fix,
and then answers the language question nobody raises — grounded in the
25.8% / 24.6% / 23.9% split of what people actually build.

---

## THE LANGUAGE DECISION (recorded per instruction)

**Decision: Hinglish in Roman script throughout — title, all H2/H3s, body prose and
all ten FAQs — with Devanagari used exactly three times, for the three verbs the
whole post turns on (बनाएँ / भेजें / ख़रीदें). English is retained for product nouns
(template, builder, password, link) and for the source attributions.**

Four reasons, in order of weight:

1. **The query is Roman-script Hindi, not Devanagari.** The searcher types
   `banaye`, not `बनाएँ`. Autocomplete confirms the whole cluster is transliterated:
   `kaise bheje`, `kaise banaen`, `meaning in hindi`, `shayari in hindi`. Matching
   the script of the query is the point; a Devanagari-titled page answers a query
   nobody in this cluster types.
2. **Both registers already rank, but Roman Hinglish is the underserved one.**
   Canva's Hindi (Devanagari) pages and a Hindi wikiHow rank on the `page` variant,
   so Devanagari is *covered*. No Roman-Hinglish page answers the make-it reading.
3. **A full-Devanagari post would be an orphan on this blog.** Every template it
   links — `/templates`, `/love-gf`, `/bouquet-gf` — is an English product surface,
   and every internal link into it would come from an English post. Sending a
   reader from Devanagari prose straight into an English builder is a worse
   handover than keeping one register end to end.
4. **The keyword has to live in the prose, not in the slug.** A plain English post
   carrying a Hindi slug was the failure mode named in the assignment. Writing the
   body in the register of the query makes `online gift kaise banaye`,
   `online gift kaise banate hain` and `anniversary gift kaise banaen` sit in the
   text naturally rather than being bolted on.

**Where Devanagari earns its place:** the banaye/bheje/kharide distinction is a
Hindi-grammar distinction. Written only in Roman it looks like three spellings;
written once in Devanagari it reads as three different verbs. That is the one place
script carries meaning rather than decoration.

**What I did not do:** no machine-translated Hindi, no Devanagari headings, and no
claim that the SubhSandesh builder itself has a Hindi interface — that is not in
`facts.md` and I could not verify it.

---

## Phase 3 — sources

Searched the phenomenon, not the keyword. Europe PMC returned HTTP 503 on every
attempt this session (it was the documented first choice); Crossref, DOAJ and
OpenAIRE all worked. OpenAlex was not attempted — documented as 429.

Search terms used: `Hindi English code-mixing digital communication`,
`Hinglish`, `code-mixed Hindi`, `code switching intimacy`,
`code-switching emotional expression bilingual first language`,
`Hinglish romanised Hindi transliteration social media India`,
`translanguaging India`, `Devanagari script`, `language choice bilingual messaging`.

Leads discarded because the host is blocked or dead: the 2024 *Humanities & Social
Sciences Communications* Hinglish paper (nature.com), *Emotion Detection in
Hinglish Code-Mixed Social Media Text* (ScienceDirect), *Cooking Is Creating
Emotion: Hinglish Sentiments of YouTube Cookery Channels* (mdpi.com returned empty
content), the 1980 KU ScholarWorks Hindi–English code-switching thesis (handle 404s),
and two Frontiers items (`frontiersin.org` is at the domain cap).

**Four sources, all verified with `ctx_fetch_and_index` before citing, all on
domains that appear in neither `domainsAtCap` nor `domainsAtTwo` and in none of the
48 sibling `sources` arrays:**

| # | source | domain | why it is here |
|---|---|---|---|
| 1 | Sahni, *Code-Switching in South Asia… with Hinglish*, **Bhasha** 4(1), 1 Jul 2025 | `edizionicafoscari.it` | Peer-reviewed, open access, Hinglish specifically. Matrix Language Frame Model fits South Asian switching better — one language frames, the other sits inside. |
| 2 | Parr, *"Baby, Te Amo": Code Switching … Intimacy in Multilingual, Romantic Relationships*, JUE 3(2), 2013 | `ojs.library.dal.ca` | Code-switching **inside romantic relationships**, function = increase or limit intimacy. Sample is 5 individuals + 2 couples; the post says so. |
| 3 | Deshpande, *Hinglish Hamari Identity*, IJELLH 7(5), 28 May 2019 | `ijellh.com` | Direct quote verified on the landing page: Hinglish popular "not only in the megacities but even in rural India"; brands chose it for local sentiment. |
| 4 | Verma, *Hinglish Today*, Shodh Sari 3(1), 1 Jan 2024 | `icert.org.in` | Hinglish as an established fusion now present in contemporary Indian literature, not only speech. |

- **Subject test:** all four are about *the language* — the exact axis named in the
  checklist item. 2 required, 4 delivered.
- **Peer-reviewed + open access:** #1 (Bhasha, CC BY, explicitly "open access |
  peer reviewed"). #3 and #4 are peer-reviewed journals, CC BY.
- **Swap test:** none could sit in another post in this batch. This is the only
  Hinglish/Devanagari-intent row in sixty; a paper on Hindi–English code-mixing is
  dead weight in `virtual gift for boyfriend birthday`.
- **Generic context statistics: zero.** No PIB, TRAI, Census or MEA.
- **Wikipedia body links: zero.** Wikipedia appears only as `sameAs` pairs in the
  structured-data `about`/`mentions`, each with its Wikidata QID verified through
  the Wikipedia API (Hinglish Q1499115, Code-switching Q255615, Hindi Q1568,
  Devanagari Q38592).
- **Depth read:** landing page / abstract for all four. Each cited claim is present
  verbatim in the fetched text. None are paywalled.

**Competitors seen in the SERPs and deliberately not cited, linked or paraphrased:**
`gifft.me`, `cutiepage.in`. Canva is not a competitor but is not a source either —
it is named once as a SERP observation, unlinked. Winni, Flipkart, Giftana, Oye
Happy, Amazon and the rest are described as SERP results only.

---

## Phase 5 — links, category, templates

- **Templates, exactly as the row assigns them:** `/templates`, `/love-gf`,
  `/bouquet-gf`. No swap needed — this row is the one place the assignment is a
  perfect fit, because `/love-gf` and `/bouquet-gf` are literally the #1 and #2
  things people build, which is what a "kaise banaye" reader is about to do.
  `/love-gf` is anchored after the template-first step establishes why; `/bouquet-gf`
  after the comparison table; `/templates` at the pricing block near the close.
- **Blog cross-links: none.** This row has no `nearestLive` field, and no sibling in
  the batch is close enough on the Hinglish axis to reinforce rather than compete.
- **Category:** `digital-gifts-romance` (row default; nothing here is a festival).
- **Cannibalisation:** checked against all 48 sibling files and their 79 secondary
  keywords — not one contains `kaise`, `hindi`, `banaye` or `banane`. Closest
  wave-1 neighbours are `what is a virtual gift and how to send one` (a definition
  post, four meanings of the term) and `virtual gift link free` (a "free" post about
  what free covers). Neither reads the Hindi verb; neither discusses which language
  to write in. Split is clean. Slug checked against Strapi: 0 results.

---

## Phase 6 — audit summary

**49 passed, 1 failed**, disjoint, 50 total, strings taken byte-verbatim from
`references/publish-checklist.md` with `**bold**` markers kept and wrapped lines
joined by single spaces.

Failed: *"No section closely mirrors a competitor page's structure or framing"* —
not verifiable, because no top-5 page could be read (WebFetch blocked; eight of ten
are retailers this brief forbids fetching). Recorded as failed rather than asserted.

Body: 1,652 words excluding FAQs. 7 H2s, 5 H3s, one 5-row comparison table with a
first-party column, 10 FAQs (none overlapping a heading above 0.5 token
similarity), 4 outbound links, 3 internal template links.
