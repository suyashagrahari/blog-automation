# Research brief — `sweet miss you message tagalog for boyfriend`

Slug: `miss-you-message-in-tagalog-for-boyfriend`
Batch: `2026-09-25-miss-you-30`
Written: 2026-09-25

---

## Phase 0 — Data gate

Used `content/batches/2026-09-25-miss-you-30/facts-snapshot.md`, not `content/facts.md`.
The `/missyou-gf` segment (n = 214, probed 2026-09-25) carries far more than three
relevant facts. Gate passes.

Facts placed in the first 150 words: median letter 88 words; 43.5% password-protect
(against 38.5% platform-wide). Further facts in body: 13.6% voice note, 28.0% reunion
date, 1,434 hug taps across 138 of 214 pages, 92.1% "open when" letter, 47 city pairs,
214 pages = 4.1% of 5,221.

The three mandatory caveats (pickers-with-defaults, `viewCount` ≠ unique visitors,
n = 214 over two months) appear in body prose in "What 214 miss-you pages show".

---

## Phase 1 — SERP, run 2026-09-25

**One WebSearch on the exact keyword.** Reported honestly, because the brief's §0 says
prompt framing is unverified and I was given no predictions.

What actually came back (9 links, no AI Overview and no featured snippet surfaced in
the result block):

| # | Result | Type | What it optimises for |
|---|---|---|---|
| 1 | tiktok.com/discover/sweet-message-tagalog-for-girlfriend | TikTok topic page | video aggregation; wrong gender |
| 2 | smartsmssolutions.com — "85+ Sweet Messages for Boyfriend in Tagalog (Copy & Paste Ready)" | SMS-gateway listicle | volume + "copy paste" |
| 3 | tiktok.com/discover/sweet-message-for-bf-tagalog | TikTok topic page | video aggregation |
| 4 | tiktok.com/discover/sweet-message-tagalog-for-my-boyfriend | TikTok topic page | video aggregation |
| 5 | smartsmssolutions.com — "80+ Short Sweet Message for Boyfriend Tagalog" | SMS-gateway listicle | volume |
| 6 | tiktok.com/discover/sweet-message-for-girlfriend-tagalog | TikTok topic page | video aggregation; wrong gender |
| 7 | tiktok.com/discover/sweet-message-for-girlfriend-copy-paste-tagalog | TikTok topic page | video aggregation; wrong gender |
| 8 | ai.tenorshare.com — "150+ Sweet Message for Boyfriend in Tagalog" | AI-tool content page | volume + tool funnel |
| 9 | ling-app.com — "The 20+ Best Ways To Say I Miss You In Tagalog" | language-app blog | language-learning funnel |

**Observations I can defend, because I ran the search:**

- **Five of nine results are TikTok `/discover/` topic pages, not articles.** Four of
  those five are for a *girlfriend*, not a boyfriend — the SERP is being padded with
  near-miss video aggregation. That is an entity-matching gap, not a content gap.
- The three actual articles compete on **count** (85+, 80+, 150+, 20+). None of them
  is a Tagalog-language authority page; two are published by an SMS gateway and one by
  an AI-tool vendor.
- **No page on this SERP marks any line for whether it is attested.** Every line is
  presented flat, as though a corpus would back it. That is the gap.

Per `references/competitors.md` none of these is cited, linked or paraphrased. They
were read only to establish table stakes and the gap. I did **not** fetch all five in
full — four of the top results are JS-rendered TikTok topic pages with no article body
to fetch, and I recorded that rather than pretending to a five-page teardown. This is
recorded as an audit failure, not hidden.

**Table stakes:** a grouped bank of ready-to-send lines; English glosses; some note on
when each fits; something about length; an FAQ.

**The gap:** nobody says which lines are real and which are guesses.

**Fan-out sub-queries → H2s/H3s:** which line do I send tonight · is *miss kita*
correct Tagalog · what is the difference between *miss na kita* and *miss na miss
kita* · is Taglish bad Tagalog · should I write deep Tagalog to my boyfriend · what
does *po* do · how long should the message be · what if he speaks Bisaya.

---

## Phase 2 — Angle

> Wins by being the only page that prints Tagalog miss-you lines for a boyfriend with
> each one labelled **corpus-attested** or **everyday Taglish** — 13 against 5 — after
> measuring Tatoeba's Tagalog corpus directly, and sets them beside 214 real miss-you
> pages where the median letter is 88 words.

---

## Phase 3 — Sources

### What I measured myself (the post's original claim)

Tatoeba Tagalog corpus, queried through `tatoeba.org/en/api_v0/search` on 2026-09-25:

| Query (`from=tgl`) | Hits | Note |
|---|---|---|
| `miss` | **17** | every hit uses *ko*; objects are *si Tom*, *ang Boston*, *ang mga magulang ko*, *ang mga kaibigan ko*, *siya*, *sila*, *kayo* |
| `miss kita` | **0** | — |
| `namimiss` | 2 | *Namimiss ko na siya*; *Namimiss ko na ang pamilya at bayan ko* |
| `kita` | 387 | the pronoun itself is everywhere |
| `mahal kita` | 20 | incl. *Mahal na mahal kita*, *Sobrang mahal kita* |
| `sobrang` | 241 | incl. *Sobrang miss ko na ang Boston* |
| `iniisip kita` | 2 | *Iniisip kita*; *Iniisip kita sa tuwing nagsisipilyo ako* |
| `hinihintay kita` | 2 | *Hinihintay kita*; *Simula alas-dos hinihintay na kita* |
| `gusto kitang makita` | 7 | incl. *…muli*, *…bago ka umalis* |
| `kailangan kita` | 3 | *Kailangan kita*; *Kailangan kita rito* |
| `pangungulila` / `nangungulila` | 0 / 0 | the native noun is absent from the corpus entirely |

**The finding:** the corpus will tell you how to say you miss your parents, Boston, or
Tom. It goes silent the moment the object is the person you are writing to. The
pronoun is not the obstacle — *kita* has 387 sentences and *mahal kita* twenty. It is
the borrowed verb plus *kita* that no volunteer has written down.

This is consistent with, and does not contradict, the two Tagalog siblings in this
batch: `miss-na-miss-kita-meaning` found zero Tatoeba hits for *miss na miss kita*,
*miss kita* and *miss na kita*, and found the corpus intensifying with *sobrang*.

### Cited sources (6)

1. **Bautista, M.L.S. (2004), "Tagalog-English Code Switching as a Mode of Discourse",
   *Asia Pacific Education Review* 5(2): 226–233** — ERIC full text EJ720543, open
   access, read in full (PDF extracted, not abstract-only). Peer-reviewed, De La Salle
   University-Manila. Used for: "Taglish is the language of informality among
   middle-class, college-educated, urbanized Filipinos… it is now a lingua franca in
   Philippine cities"; the deficiency-driven vs proficiency-driven distinction
   (Bautista 1999); and Goulet (1971) quoted at p. 83, "Among educated Tagalogs, mixing
   is considered the normal acceptable conversational style of speaking and writing."
   Subject test ✓ (the language). Swap test ✓ — useless in any non-Tagalog post here.
   Domain `files.eric.ed.gov`: **0 posts** in this batch before mine.
2. `https://tatoeba.org/en/sentences/search?query=miss&from=tgl` — 17 results, none
   addressing the hearer. Cap-exempt, fetched.
3. `https://tatoeba.org/en/sentences/search?query=miss+kita&from=tgl` — 0 results.
   Cap-exempt, fetched.
4. `https://tatoeba.org/en/sentences/search?query=gusto+kitang+makita&from=tgl` — 7
   attested *kita* sentences. Cap-exempt, fetched.
5. `https://en.wiktionary.org/wiki/kita#Tagalog` — *kitá* "replaces *ko ka* or *ko
   ikaw*", with the example *…at ikaw, mahal kita*. Cap-exempt, fetched.
6. `https://en.wiktionary.org/wiki/sobra#Tagalog` — adjective "excessive; too much";
   adverb, colloquial, "so; very". Cap-exempt, fetched.

### Considered and rejected

- **`diksiyonaryo.ph` (KWF Diksiyonaryo ng Wikang Filipino)** — at cap 3, spent by the
  three Tagalog siblings. Their findings (borrowed *miss* is a *pandiwa* with six
  "mabigong…" senses, none meaning longing; *pangungulila* a noun, *sabik* an
  adjective) are treated here as established by them and referred to without a link.
- **Domingo, P. (2025), "Negotiating motherhood and authority…", *Frontiers in
  Sociology* 10** — fetched in full. Rejected: it is about maternal authority in
  parenting adolescents, not couple messaging, and its only transferable number ("12
  percent of Filipino households having an OFW member") is a second-hand PSA citation,
  i.e. exactly the generic context statistic the brief limits to one and the swap test
  rejects. Recorded rather than bolted on.
- **"Mobile phone paradox… Filipino domestic workers in Hong Kong", *Mobile Media &
  Communication* (2022)** — right subject, but SAGE, no open-access copy found.
- **"'Making time': Long-distance marriages…", *Current Sociology* (2019)** —
  `journals.sagepub.com` returned HTTP 403; the only open copy is on the PMC family,
  which is at cap 3. Dropped rather than breach the cap.
- Crossref results for `Taglish code switching text messaging` were dominated by
  venues that fail a basic check (a Taglish sociolinguistics paper published in
  *Veredas do Direito*, a Brazilian law journal). None cited.

### Cap position at time of writing

`capcheck.mjs`, re-run immediately before saving. At cap 3: `europepmc.org` ==
`pmc.ncbi.nlm.nih.gov`, `diksiyonaryo.ph` — neither cited. One slot left: `doi.org`,
`journals.plos.org`, `edizionicafoscari.it` — none cited. My only non-exempt domain,
`files.eric.ed.gov`, was at 0 posts.

---

## Phase 5 — Targeting

- `categorySlug`: `miss-you-across-miles` (verified live in Strapi).
- `templateUrls`: `/missyou-gf` (mandatory) + `/dedication`.
- **Why `/dedication` and not `/train-ticket`.** The prompt suggested `/train-ticket`
  on the OFW argument. I read both and chose against it: its whole mechanic is an
  Indian-railways PNR and a clearing waitlist, and a Filipino boyfriend in Dubai or
  Hong Kong will not read that as a metaphor — it is the one template on the list whose
  joke is locale-locked. `/dedication` is the opposite: the reader's specific problem
  in this post is that a written Tagalog line cannot be attested and can be mispitched
  in register, and a recording in her own voice removes both risks at once. 13.6% of
  miss-you senders already record a voice note, so this is the smallest real step from
  what the segment does.
- Slug checked free: `filters[slug][$eq]=miss-you-message-in-tagalog-for-boyfriend`
  returned `"data":[]`, total 0.

## Cannibalisation

Fetched two of the four live neighbours in full:

- `/blog/miss-you-message-for-boyfriend` — "120 Lines & How to Send". Tone buckets
  (short & sweet, cute & playful, flirty, long-distance, after a fight…). Searched the
  fetched text for *Tagalog*, *Filipino*, *miss na miss kita*: **zero hits.** English only.
- `/blog/missing-you-message-for-boyfriend` — "50 Heartfelt Lines". Same shape, English
  only.

So the LANGUAGE axis holds and this is a separate page, not a merge. It is the
situation-grouped message post those two are, in a language neither touches, with a
labelling system neither could run. Where it overlaps them deliberately — grouping by
situation rather than by grammar — that is the point of the post, and is what separates
it from its three Tagalog siblings in this batch, which are linguistics explainers.

## Hub

`/blog/i-miss-you-in-different-languages` is linked up to. Its Tagalog line reads
"Tagalog (Filipino): Miss na kita / Nami-miss kita (miss na kee-tah)" and its FAQ says
"say 'Miss na kita' … or 'Nami-miss kita' **for emphasis**". The emphasis claim is
wrong and is corrected in the body: *nami-miss* marks ongoing aspect, not degree.
Tagalog marks degree with the *X na X* linker or with *sobrang*.
