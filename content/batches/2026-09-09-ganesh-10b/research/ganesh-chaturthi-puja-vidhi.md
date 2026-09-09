# Research brief — `ganesh-chaturthi-puja-vidhi`

**Batch:** `2026-09-09-ganesh-10b` · **Primary keyword:** `ganesh chaturthi puja vidhi`
**Folds in:** ganesh sthapana vidhi · ganesh chaturthi puja samagri · pranapratishtha vidhi · ganpati sthapana
**Research field (mine alone):** ritual studies — domestic puja procedure, the shodashopachara sixteen upacharas, household religious practice in India.
**Written:** 2026-09-09

---

## Phase 0 — data gate

`content/facts.md` was regenerated 2026-09-08 and carries 17 facts. **None are Ganesh facts** — the
`/happy-ganesh-chaturthi` template has created zero pages, so no Ganesh-specific first-party number
exists this cycle. Per the batch brief, every first-party number in this post is **platform-wide
across 15 page types** and is captioned that way in the sentence nearest the claim. Six facts used:

- 3,860 pages created since 2026-03-12 across 15 page types
- 49.6% of shared pages opened on a phone (22,667 of 45,656 views)
- 96.1% of started pages published and shared (3,708 of 3,860)
- 42.1% of creators password-protect before sharing (1,625 of 3,860)
- 45,656 recorded views of shared pages
- Median first-save-to-last-edit gap 6.8 hours (sampled on /love-gf, n=1,065)

Two land inside the first 150 words (49.6% and 96.1%), both captioned platform-wide.

`facts.md` ships an **empty pricing block**, so the post makes no claim about what SubhSandesh costs.

## Slug and targeting checks

| Check | Result |
|---|---|
| Slug free in Strapi | `?filters[slug][$eq]=ganesh-chaturthi-puja-vidhi` → `total: 0` ✔ |
| `categorySlug` | `indian-festivals` present in the live category list (id 10) ✔ |
| `/happy-ganesh-chaturthi` | in `TEMPLATE_LINKS` ✔ — but **HTTP 404 on prod, checked 2026-09-09**. Recorded as an audit failure. |
| `/templates` | HTTP 200 ✔ |

## Collision check against batch 1

Read `content/batches/2026-09-09-ganesh-10/blogs/ganesh-chaturthi-2026-date.json` before drafting.
That post owns: `ganesh chaturthi 2026`, `... date`, `kab hai`, `start and end date`, `how many days
to go`, and the madhyahna muhurat with a city table. It also owns `ganpati-visarjan-2026`,
`ganpati-aarti` (Sukhkarta, Jai Ganesh Deva, Karpur Gauram) and `ganesh-chaturthi-decoration-ideas`.

This post therefore states the date **once**, quotes exactly one muhurat window (Mumbai, needed to
timestamp the sthapana step and to justify the panchang in `citation`), and targets no date keyword.
No FAQ overlaps batch 1's twelve date FAQs. Its subject is **how the puja is performed**.

---

## Phase 1 — SERP analysis

Fetched in full where the fetcher was allowed. `rgyan.com` did not resolve; `ganeshchaturthi.org`
returned 406.

| Page | Words | Structure | Direct answer | Upachara depth | Data cited | Format |
|---|---|---|---|---|---|---|
| radhakrishnatemple.net (temple blog) | ~2,400 | Intro → significance → preparations → 6 steps → Atharvashirsha → modak recipe → visarjan → eco | Buried under a 2-para intro and a "spiritual significance" H2 | Names shodashopachara as one collapsed step; all 16 terms appear but not enumerated in order | none, no dates | FAQ section, no schema, no table |
| jkyog.org (temple blog) | ~2,000 | Intro → significance → preparation → 7 numbered rituals → daily → visarjan → checklist → eco | Buried | Same: "4. Shodashopachara Pooja (16 Ritual Offerings)" as a single bullet | none | Checklist list, FAQ, no schema, no table |
| bhaktihome.com | ~1,400 | Samagri → preparation → 9 steps | Reasonably early | Step 4 is "Perform Shodashopachara vidhi" with no enumeration | none | No table, no FAQ schema |
| mypoojabox.in (puja-kit retailer — **competitor**) | ~4,300 incl. product rails | Date/muhurat → significance → history → items → 3 steps → days | Buried under product blocks | Mentions "1.5 day" and "uttar puja" once each | 2026 muhurat only | Has a table; page is a storefront |
| harishyam.com, devaastha.com, cycle.in, satvikly.com, divinestore | — | Same shape | — | — | — | All puja-kit or gifting retailers |

**Read as research, cited nowhere.** Every commercial result in this SERP sells puja samagri, which
puts it in the competitor category under `references/competitors.md`. Zero links to any of them.

## Phase 2 — gap analysis

**Table stakes** (all five cover): a samagri list; chowki + kalash setup; sankalpa; pranapratishtha
named; "shodashopachara / 16 steps" named; modak and durva; aarti; visarjan; an eco-friendly note.

**The gap — four things none of them do:**

1. **Nobody enumerates the sixteen.** Every page names *shodashopachara* and then treats it as one
   step. The reader is told there are sixteen and never told what they are, in order.
2. **Nobody admits the sixteen are not one fixed list.** The Āśvalāyana Gṛhyasūtra appendix
   enumeration and the enumeration taught by teaching bodies today diverge at five of the sixteen
   positions (4, 8, 14, 15, 16). Printing both side by side is this post's differentiator.
3. **Nobody gets snana right for clay.** Several tell the reader to bathe the murti in
   panchamrit. Bühnemann is explicit that clay and painted icons "are wiped but not bathed as they
   would easily dissolve". This is a correction, not a nuance.
4. **Quantities are vague.** "Some durva", "modaks". The twenty-one count has a documented basis and
   nobody sources it.

**Stale data:** none of the five cites any dated figure at all, so there is nothing to supersede —
which is itself the opening. A page with five dated sources is unusual in this SERP.

**Fan-out sub-queries → H2 map:**

| Sub-query | H2 |
|---|---|
| what is shodashopachara puja | ## What is the shodashopachara puja vidhi? |
| ganesh chaturthi puja samagri list | ## Ganesh Chaturthi puja samagri: the list, with real quantities |
| ganpati sthapana vidhi step by step / pranapratishtha vidhi | ## The Ganesh Chaturthi puja vidhi in six stages (6 H3s) |
| what are the 16 upacharas in order | ### 4 + ## The sixteen are not one fixed list, and clay changes two of them |
| can you bathe a clay ganpati murti | (same H2, second half) |
| 1.5 day vs 10 day ganpati puja difference | ## Dedh-din, five days or ten: what actually changes |
| how to include family who cannot attend | ## Sending the puja to someone who cannot be in the room |
| downside / when not to | ## When a Ganesh Chaturthi page is the wrong choice |

**Angle:** wins by being the only post that prints two named textual enumerations of the sixteen
upacharas side by side and flags where they diverge, sources the offering counts (21 durva, 21
modak, Atharvashirsha twenty-one times) rather than asserting them, and states that a clay murti is
wiped and not bathed — sized against SubhSandesh's platform-wide 49.6% mobile-open rate.

---

## Phase 3 — sources

Five. All fetched and read in full; none paywalled; no abstract-only citation. Every domain was new
to both batches when checked against `PRIOR-BATCH-SOURCES.md` and `USED-SOURCES.md` on 2026-09-09.

| # | Source | Subject test | Peer-reviewed / scholarly | Open | What it verifies |
|---|---|---|---|---|---|
| 1 | Gudrun Bühnemann, *Pūjā: A Study in Smārta Ritual*, De Nobili Research Library, Vienna, 1988 — PDF at `australiancouncilofhinduclergy.com` | PASS — the monograph on smarta shodashopachara in Maharashtra | Scholarly monograph in a university research-library series | Free full text, verified readable | The 16-service enumeration from the ĀGS appendix; kalash contents; "the number connected with offerings of durva, modaka etc. to Ganesa" = 21 and Atharvashirsha ×21 at abhisheka; clay icons "wiped but not bathed"; movable icons take āvāhana + visarjana, immovable take neither; deity comes from and returns to the devotee's heart; water as the correct deposit for objects loaded with sacred power; modaka as Ganapati's dish |
| 2 | Hindu American Foundation, "How to conduct a traditional 16-step Hindu puja", 11 Nov 2020 (modified 11 Sep 2025) | PASS — a full 16-upachara procedure | No — educational nonprofit | Free | The household enumeration (dhyānam & āvāhanam → pradakshina & namaskāram) and the pañcha upachāra / five-senses mapping |
| 3 | Peter Maňo & Dimitris Xygalatas, "Ritual Form and Ritual Choice among Mauritian Hindus", *Slovenský národopis* 70(2), 2022, 186–209, DOI 10.61577/SN.2022.2.18 | PASS — ritual choice among Hindus | **Yes — peer-reviewed, CC-licensed open access** | Free PDF at sav.sk, verified | Devotees seek rituals "appropriate (in terms of their structure and focus) and proportionate (in terms of their costs) to their needs and expectations" |
| 4 | Pew Research Center, "Religious practices", ch. 7 of *Religion in India: Tolerance and Segregation*, 29 Jun 2021, n=29,999 | PASS — household religious practice in India, the post's exact subject | Large-n survey by a non-competing research org | Free | 81% of Indian adults keep an altar/shrine/religious symbol at home; 76% of Hindus do puja at home weekly vs 53% at a temple; Hindu women 84% vs men 68% |
| 5 | Drik Panchang, 2026 Ganesh Chaturthi date and puja time, Mumbai | **[date/festival reference]** — exempt from the caps | n/a | Free | Monday 14 Sep 2026; Madhyahna muhurat 11:20 AM–1:48 PM (2h 27m); visarjan Friday 25 Sep 2026; tithi 07:06 AM 14 Sep → 07:44 AM 15 Sep |

Requirements: ≥2 subject-test sources → 4 (#1–#4). ≥1 peer-reviewed **and** open-access → #3.
Generic context statistics (PIB/TRAI/Census/MEA) → **zero**. Wikipedia body links → **zero**
(`en.wikipedia.org` is at its 3-post cap in batch 1); Wikipedia appears only as `sameAs` inside
`structuredData`, which does not count.

**Swap test:** none of the five could sit unchanged in a sibling post. #1 and #2 are puja procedure,
#3 is ritual-form choice, #4 is household worship frequency. None would fit the Kannada, Telugu,
invitation-card or Lalbaugcha Raja posts.

**Searched and rejected:** `shodashopachara puja ritual`, `prana pratishtha consecration murti`,
`domestic puja household Hindu worship India`, `Ganesh Chaturthi ritual`, `puja offerings deity
hospitality`, `home shrine Hindu everyday religion`, `image consecration eye opening`, `vrata vow
domestic observance`, `ethnobotany 21 patri leaves Ganesha` (all via OpenAlex OA filter, Crossref,
DOAJ and Semantic Scholar). Rejections and why:

- *The worship of clay images in Bengal* (Oxford DPhil, 1983) — ORA is behind a JS challenge; could
  not verify the text, so not cited.
- *Ekavimsati patrani (21 leaves) used during Vinayaka Chaviti festival*, Advances in Traditional
  Medicine 2021, DOI 10.1007/s13596-021-00597-0 — Unpaywall returns no OA location. Would have been
  the ideal patri source. Not cited rather than cited from an abstract.
- Frøystad, "Worship and the virus in Hindu India", *Approaching Religion* 11(2), 2021 — abstract
  fetched, full PDF unreadable through the fetcher, and the subject (pandemic ritual innovation) is
  further from puja procedure than #1–#4. Dropped rather than cited abstract-only.
- `pmc.ncbi.nlm.nih.gov` deliberately avoided: batch 1 put it at 2 of 3 and a sibling may need the
  last slot. `en.wikipedia.org`, `arxiv.org` at cap.

## Phase 5 — links and targeting

- Outbound, all inline at the claim: Drik Panchang (opening), Bühnemann (definition H2 + Sources),
  Hindu American Foundation (stage 5 + Sources), Maňo & Xygalatas (duration H2 + Sources), Pew
  (remote-inclusion H2 + Sources). Five distinct outbound URLs.
- Internal, 2, both after the value is established: `/happy-ganesh-chaturthi` in the
  remote-inclusion section, `/templates` at the end of the same section.
- `templateUrls`: `["/happy-ganesh-chaturthi", "/templates"]`, template first.
- `structuredData`: an `@id`-matched `BlogPosting` enrichment block on
  `https://subhsandesh.in/blog/ganesh-chaturthi-puja-vidhi#post` carrying `about` (Ganesh Chaturthi),
  five `mentions` and `citation` mirroring `batchMeta.sources` one-to-one; plus one `ItemList`
  mirroring the six H3s in order. **No `HowTo`** — Google dropped HowTo rich results in 2023 and
  `structured-data.md` forbids it here, so the ordered procedure is carried by the `ItemList`.
- `sameAs` verified against the Wikipedia API with Wikidata QIDs paired: Ganesh Chaturthi Q929250,
  Puja (Hinduism) Q10937578, Prana pratishtha Q7238298, Murti Q1781039, Modak Q2673557,
  Cynodon dactylon Q208705. `Shodashopachara` returned `missing` and was not used.

## Phase 6 — audit summary

48 passed, 2 failed, disjoint, covering all 50 checklist items byte-verbatim.

1. **At least one table column uses first-party data** — structural. The first-party figure fills one
   of four cells in the phone column; SubhSandesh measures only its own pages.
2. **Every internal link is a real URL from TEMPLATE_LINKS** — `/happy-ganesh-chaturthi` is in
   `TEMPLATE_LINKS` but 404s on prod as of 2026-09-09. Closes on the next client deploy.

Word count 1,795 (plain split; the studio's `wordCount()` reads higher). 12 FAQs, none restating a
body H2 and none duplicating batch 1's date FAQs.
