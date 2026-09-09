# Research brief — `ganpati bappa photos`

- **Batch:** `2026-09-09-ganesh-10c` (wave 3), assignment n=8, cluster C04
- **Slug:** `ganpati-bappa-photos` (verified free on Strapi today)
- **Secondaries requested:** `happy ganesh chaturthi images`, `happy ganesh chaturthi images for whatsapp`
- **Cannibalisation sibling:** `content/batches/2026-09-09-ganesh-10/blogs/ganesh-chaturthi-images.json` (targets `ganesh chaturthi images`)
- **Research lane:** visual devotion and darshan — circulation of religious images, what devotees do with a picture, reproduction and the sacred image in South Asia
- **SERPs harvested:** 2026-09-09, India-localised (`gl=in&hl=en&pws=0`), Google web, real-browser harvest (HTTP scraping of Google returns a JS shell; `html.duckduckgo.com` returned a 202 challenge, so both fallbacks were unusable)

---

## 1. THE CANNIBALISATION GATE — result

**VERDICT: PASS for the primary keyword. 0 shared articles on both engines that answered.**
**BOTH folded secondaries FAIL the same gate and have been dropped.**

Comparison rule applied: (domain, title) *article* identity, **pinterest.com / in.pinterest.com and youtube.com excluded from the count**, threshold 3.

Counted per engine, never pooled:

| comparison | Google `gl=in` | DuckDuckGo `kl=in-en` | Brave `country=in` | verdict |
| --- | --- | --- | --- | --- |
| `ganpati bappa photos` vs `ganesh chaturthi images` | **0** | **0** | unavailable | **PASS — write the post** |
| `happy ganesh chaturthi images` vs `ganesh chaturthi images` | **3** | **5** | unavailable | MERGE on both — drop the fold |
| `happy ganesh chaturthi images for whatsapp` vs `ganesh chaturthi images` | **1** | **3** | unavailable | MERGE on one engine — drop the fold |

**Brave returned HTTP 429 on every attempt** (four tries, spaced, `search.brave.com/search?country=in`), almost certainly because ten agents in this wave were hitting it at once. Not reported as a zero — reported as no data.

`html.duckduckgo.com` works only as a **POST** with `q=` and `kl=in-en` in the body; the GET form returns a 202 challenge page, which is what made it look unusable on the first attempt.

### 1a-pre. Capture integrity — one capture was discarded

The Chrome tab is shared across the wave, and this bit twice:

1. **The first Google capture was thrown away.** It came back with results for *happy ganesh chaturthi good morning wishes* — a sibling agent's query, in the tab I had just navigated. It was caught because the page's own heading list did not mention "bappa" once. Every capture kept below was re-verified by reading the page's own `url` back out of the extractor and matching it against my query string before any result was counted.
2. **A later browser navigation was hijacked mid-call**, returning an `ora.ox.ac.uk` page belonging to another agent. Because of that, **no source verification was done through the browser** — sources were verified through the sandbox (`ctx_execute` / `ctx_fetch_and_index`) only, and where a publisher blocks the sandbox that is recorded as a limitation rather than papered over with a browser read.

Google's plain-HTTP endpoint is JS-walled: it returns HTTP 200 with a script shell and no result markup for every user agent tried (Chrome, Android Chrome, curl, Lynx, w3m, MSIE). That is why the browser was needed for the Google leg at all.

### 1a-i. Why both secondaries were dropped

`happy ganesh chaturthi images` shares with the live sibling, on **DuckDuckGo**, five identical articles: `gecdesigns.com/collections/happy-ganesh-chaturthi-images`, `shutterstock.com/search/ganesh-chaturthi`, `pexels.com/search/ganesh%20chaturthi/`, the `hindustantimes.com` Ganesh Chaturthi wishes/images page, and the `indiatimes.com` "Happy Ganesh Chaturthi images 2025" page. On Google it shares three (listed in §1a). Two engines, same verdict.

`happy ganesh chaturthi images for whatsapp` is the borderline one: Google 1, DuckDuckGo 3 — `gecdesigns.com/collections/happy-ganesh-chaturthi-images`, the `hindustantimes.com` page, and `pexels.com/search/ganesh%20chaturthi/`. One engine trips the threshold, so it is left to the live sibling. Splitting a phrase across two posts on a coin-flip is exactly the failure the gate exists to prevent, so the conservative reading wins: **this post targets `ganpati bappa photos` alone, and `article.keywords` contains no "happy ganesh chaturthi images" phrasing.**

### 1a. The 3 shared articles that killed `happy ganesh chaturthi images`

Identical domain **and** identical title **and** identical URL in both SERPs:

1. `stock.adobe.com` — "80294 results for ganesh chaturthi in all" — `https://stock.adobe.com/search?k=ganesh+chaturthi` (pos 1 on the sibling, pos 2 on the secondary)
2. `postermywall.com` — "1.91K+ Free Templates for 'Ganesh chaturthi'" — `https://www.postermywall.com/index.php/posters/search?s=ganesh%20chaturthi` (pos 8 sibling, pos 5 secondary)
3. `canva.com` — "गणेश फ़ोटो और इमेज" — `https://www.canva.com/hi_in/photos/s/ganesh/` (pos 6 sibling, pos 7 secondary)

Near-misses deliberately **not** counted: `magnific.com` appears in both but as two different pages (`/free-photos-vectors/ganesh-chaturthi-background` vs `/free-photos-vectors/ganesha-chaturthi`) — same publisher, different article. `in.pinterest.com/sreekiranvamsiroadlines/happy-ganesh-chaturthi-images/` is byte-identical in both SERPs and would have made it 4, but Pinterest is excluded by rule.

**Consequence:** `happy ganesh chaturthi images` belongs to the live post at `2026-09-09-ganesh-10/blogs/ganesh-chaturthi-images.json`. It is **not** folded into this post, it is not in `secondaryKeywords`, and this post does not target the phrase in its title, meta or H1. The live post keeps it.

### 1b. Why the primary survives

`ganpati bappa photos` and `ganesh chaturthi images` share exactly one *publisher* (`stock.adobe.com`) and **zero articles** — Adobe ranks `search?k=GANPATI+BAPPA` ("Ganpati Bappa Images – Browse 14951 ...") for mine and `search?k=ganesh+chaturthi` ("80294 results for ganesh chaturthi in all") for the sibling. Different query, different asset set, different page. Compared on domains this would have read as a merge; compared on articles it is not one.

The SERPs also diverge in kind, which supports the split being real rather than manufactured:

- **Mine** is a *free-photo / stock-library* SERP: Unsplash, Pixabay, Adobe Stock, Pexels, plus four Pinterest boards. Nothing design-tool, nothing informational.
- **The sibling's** is a *design-tool* SERP: Canva, PosterMyWall, Magnific, Getty, iStock, Adobe. It also carries a 4-question People Also Ask block; mine carries none.
- Mine returns "People also search for" terms that are all *possessive/devotional-personal* — `Ganpati Bappa original photo`, `Ganpati Bappa Murti Photo`, `Ganpati Bappa Photo Dp`, `Cute`, `Best`. The sibling's are all *acquisition* terms — `download`, `free download`, `hd wallpapers`, `for whatsapp`, `pictures for project`.

That is the "bappa" register showing up in the data: the Marathi affectionate name pulls toward *this specific murti, mine, to keep and to set as a DP*, while "ganesh chaturthi images" pulls toward *get me a file*. The distinction is weaker than the angle would like — both SERPs are still image-supply pages — but it is present in the PASF terms and in the absence of any design-tool result on mine.

---

## 2. SERP A — `ganpati bappa photos` (gl=in, 2026-09-09)

**AI Overview: NONE. Featured snippet: NONE. People Also Ask: NONE** (only a "People also search for" chip row). Google returned 8 organic results on page 1 plus a "Short videos" carousel.

| # | domain | title | what it is |
| --- | --- | --- | --- |
| 1 | in.pinterest.com | Discover 110 Ganpati Bappa and ganpati feta photo ideas (`/chetankumarvadive23/ganpati-bappa/`) | user board |
| 2 | unsplash.com | 550+ Ganpati Bappa Pictures \| Download Free Images on ... (`/s/photos/ganpati-bappa`) | free-photo library |
| — | (carousel) | Short videos: Pinterest ×7, Facebook ×1, Instagram ×2 | UGC video |
| 3 | in.pinterest.com | ganpati bappa with pagdi, ganpati bappa idol, ganpati feta photo (`/vanyaanand20120321/ganpati-bappa/`) | user board, 2020 |
| 4 | pixabay.com | 92 Free images of Ganpati Bappa Morya | free-photo library |
| 5 | stock.adobe.com | Ganpati Bappa Images – Browse 14951 ... (`search?k=GANPATI+BAPPA`) | paid stock |
| 6 | pinterest.com | Ganpati photo hd (`/nash0897/ganpati-photo-hd/`) | user board |
| 7 | in.pinterest.com | 35 Ganpati Bappa ideas (`/monikadhamal/ganpati-bappa/`) | user board |
| 8 | pexels.com | Free Ganpati Bappa Morya Photos | free-photo library |

Also surfaced in the page's thumbnail/related modules (not organic positions): istockphoto.com, shutterstock.com, peakpx.com, gettyimages, team-bhp.com.

**People also search for:** Ganpati Bappa Photo Hd 4k · Ganpati bappa Photo Wallpaper · Ganpati bappa original photo · Ganpati bappa photos Cute · Best ganpati bappa Photo · Ganpati Bappa Photo Dp · Ganpati Bappa Murti Photo · New ganpati bappa Photo

### Format finding (goes in the audit)

**Zero informational pages rank. Zero. And there is no AI Overview and no PAA on this SERP.** Page 1 is four Pinterest boards and four image libraries. There is no article-shaped result to displace, which means a blog post is competing for a query whose satisfied intent is "give me a file". Recorded in `auditReport.failed` and stated in `honestAssessment`. The realistic upside is the folded `...for whatsapp` lane (§3) and answer-engine citation for the *questions around* the picture — licence, which murti, what to do with it — not the head query.

## 3. SERP C — `happy ganesh chaturthi images for whatsapp` (folded, gl=in, 2026-09-09)

8 organic. **This is the one lane with informational results**, which is why the fold is worth keeping:

| # | domain | title |
| --- | --- | --- |
| 1 | in.pinterest.com | Happy ganesh chaturthi images |
| 2 | magnific.com | Happy ganesh chaturthi Images - Free Download on ... |
| 3 | pinterest.com | Happy Ganesh Chaturthi (idea page) |
| 4 | stock.adobe.com | 80294 results for ganesh chaturthi in all |
| 5 | fnp.com | 100+ Happy Ganesh Chaturthi Wishes & Images |
| 6 | wordzz.com | HD Happy Ganesh Chaturthi Images, Photos, Wallpapers ... |
| 7 | joliecarte.com | happy ganesh chaturthi images for whatsapp |
| 8 | 99advice.com | Happy Ganesh Chaturthi Images 2025 Free ... (URL dated 2019) |

Competitor observations (analysis only — never cited, never linked, per `references/competitors.md`): all four informational pages are "download these N images" galleries. `99advice.com` is a 2019 URL still ranking with "2025" in the title; `wordzz.com` is an undated wallpaper dump. None of them says a word about **licence, provenance, or what happens to a picture once you have it** — no attribution guidance, no mention that a "HD free download" pack is mostly unlicensed reuse, nothing on the difference between a stock file and a photo of your own murti. That is the gap.

## 4. SERP B — `ganesh chaturthi images` (the sibling's keyword, for the comparison)

8 organic, **no AI Overview**, **PAA present (4)**: "What is the theme for Ganesh Chaturthi in 2026?" · "Which Ganesha photo is good for home?" · "How to wish in Ganesh Chaturthi?" · "What is the symbol of Ganesh Chaturthi?"

| # | domain | title |
| --- | --- | --- |
| 1 | stock.adobe.com | 80294 results for ganesh chaturthi in all |
| 2 | pinterest.com | 20+ Best Ganesh Chaturthi Images ... - Pinterest |
| 3 | gettyimages.in | Ganesh Chaturthi Mumbai Stock Photos |
| 4 | in.pinterest.com | 7 Happy ganesh chaturthi images ideas |
| 5 | istockphoto.com | Ganesh Chaturthi Stock Photos |
| 6 | canva.com | गणेश फ़ोटो और इमेज |
| 7 | magnific.com | Ganesh chaturthi background Images - Free Download on ... |
| 8 | postermywall.com | 1.91K+ Free Templates for 'Ganesh chaturthi' |

## 5. SERP D — `happy ganesh chaturthi images` (dropped secondary, for the record)

8 organic: pinterest.com `/mcismultichoice/happy-ganesh-chaturthi/` · **stock.adobe.com `search?k=ganesh+chaturthi`** · in.pinterest.com `/akash31081981/...` · magnific.com `/free-photos-vectors/ganesha-chaturthi` · **postermywall.com `posters/search?s=ganesh chaturthi`** · fnp.com `/quotes/ganesh-chaturthi` · **canva.com `/hi_in/photos/s/ganesh/`** · in.pinterest.com `/sreekiranvamsiroadlines/happy-ganesh-chaturthi-images/`. The three in bold are the merge with §4.

---

## 6. Gap analysis

**Table stakes** (what every ranking page supplies, so the post must acknowledge them): a large set of pictures; the words "HD / 4K / free download"; a WhatsApp-shaped use case; the greeting phrase "Ganpati Bappa Morya".

**The gap, and it is wide:**

1. **Nobody addresses licence or provenance.** Unsplash/Pexels/Pixabay pages carry explicit licences; the listicles that outrank them for the `whatsapp` variant carry none, while telling readers to download and forward. Nobody explains that "HD free download" packs are largely unlicensed reuse, or that Adobe's 14,951 `GANPATI BAPPA` results and Getty's 7,620 Mumbai frames are paid, credited work.
2. **Nobody distinguishes a stock deity file from a photo of your own murti** — which is what "bappa" and PASF terms like *original photo*, *Murti Photo*, *Photo Dp* are actually asking for.
3. **Nobody says what happens after the picture.** The entire SERP ends at download. What devotees do with an image — darshan, the DP, the household shrine, the forward — is the studied phenomenon (see §7) and is absent from all of page 1.
4. **Timing is ignored.** Every page reads as if written for leisurely browsing. SubhSandesh's own measurement says the opposite (§8).

**Fan-out sub-queries** (each a candidate H2 or FAQ): is a downloaded Ganpati photo free to use? · which Ganpati photo is right for the home shrine? · can I put Bappa as my WhatsApp DP? · what does "Ganpati Bappa Morya" mean? · why is a photo treated as the deity? · what size does WhatsApp need? · should the visarjan photo be shared? · is AI-generated Ganpati imagery acceptable?

**Angle (`batchMeta.angle`):** This post wins by being the only page on either SERP that treats a Ganpati picture as something you *do something with* — licence, murti-choice, DP, and the on-the-day rush measured at n=89 with a median lead time of 0 days — rather than a file to download.

## 7. Sources (Phase 3) — lane: visual devotion, darshan, reproduction of the sacred image

Recorded in full in the blog JSON's `batchMeta.sources` with `{url, stat, publishedDate}`. Every one fetched and verified; publication dates are the source's own.

## 8. First-party data used

From `content/facts.md` (regenerated 2026-09-09): 3,894 pages across 15 page types; 46,005 recorded views; 49.6% of shared pages opened on a phone (22,817 of 46,005); 42.0% password-protect before sharing (1,636 of 3,894); 96.0% of started pages get published (3,737 of 3,894); average 11.8 views per page.

From BRIEF.md §1, the batch's own Raksha Bandhan lead-time measurement (n=89, both rakhi collections, IST calendar days): median lead time 0 days; 49.4% built on the day itself; 27.0% the day before; 86.1% of the 79 in-time pages within 24 hours; none earlier than 7 days; median first-save-to-last-edit 5.4 hours. **Disclosures carried in body prose:** it is Raksha Bandhan (one day) not Ganesh Chaturthi (ten days to Anant Chaturdashi, 25 September), and n=89 is small — no per-template or per-region rate, no projection of Ganesh page counts.

Honest limiter also stated in prose: occasion-dated pages are 144 of 3,894 (3.7%); there is **no** Ganesh page-creation data at all, because the template is not deployed.
