# Research brief — `virtual-gift-for-bf`

Batch `2026-09-15-virtual-gift-30`, WAVE 2, plan row 5. Market: India. Evergreen.

- **Keyword:** `virtual gift for bf`
- **Secondary:** `virtual gift for bf free`, `virtual gifts for bf online`
- **Category:** `digital-gifts-romance`
- **Templates assigned:** `/templates`, `/challan`, `/recharge` — all three used, none swapped.
- **Row note:** replaces `romantic proposal website for girlfriend` (killed at Jaccard 0.80).
  `bf` is a distinct India/SMS token, ph=13, est 1,000–3,000/mo.
- **`nearestLive`:** none on this row, so no cannibalisation gate against a live page was required.

---

## Phase 1 — competitor read: ARRIVED LATE, after drafting

`SERPS-WAVE2.md` was checked five times. For most of this run it held nothing
usable — at the fourth check it was **527 bytes containing only its top-level
heading**, having earlier carried two sections and then lost them. The whole post
was therefore drafted against the autocomplete and the siblings, per the
`BRIEF-WAVE2.md` §0 honest fallback.

**The section then landed before the final verifier pass**, and it was read.
Per §0 I never ran `scripts/serp.mjs`, `WebSearch` or `WebFetch` myself.

```
engine: ddg-html   region: in-en   query: virtual gift for bf
 1. giftfeels.com/gifts-for-boyfriend — "Free Digital Gifts for Boyfriend — Send a Surprise Link"
 2. blog.messagear.com — "Virtual Gifts for Long Distance Boyfriend: 250+ Ideas"
 3. shebethriving.com — "15 Thoughtful Virtual Gifts For Your Long Distance Boyfriend (100% BF…)"
 4. surprises.gift — "Free Virtual Gifts for a Long-Distance Boyfriend"
 5. etsy.com/market/virtual_gift_ideas_for_boyfriend — "60+ Gift Ideas for 2026"
 6. ourgiftverse.com — "Virtual Gifts for Boyfriend (Long-Distance)"
 7. gifft.me — "Surprise Gift Service: Send Free Virtual Gifts Online"
 8. etsy.com/market/virtual_gifts_for_boyfriend — "60+ Gift Ideas for 2026"
 9. ourgiftverse.com/blog — "12 Virtual Gift Ideas for a Long-Distance Boyfriend"
10. aiskyla.com/blog — "15 Virtual Gift Ideas for Long Distance Couples"
```

**Gate 2 read — four things, and the angle survives all of them.**

1. **Every one of the ten is an idea-count listicle or a gift-service landing
   page.** The only numbers on offer are counts of ideas: 250+, 60+, 60+, 15, 15,
   12. Not one carries a study, a measured figure or any discussion of tone. The
   claim this post leads with — a mock apology dashboard is 23.9% of 4,357 real
   builds — is unavailable to all ten by construction.
2. **Seven of the ten silently reframe `bf` to "long distance boyfriend".** The
   engine does not treat the abbreviation as its own intent; it resolves it to
   `boyfriend`, then to the fatter `long distance boyfriend` head. That reframe
   belongs to other rows in this batch (`virtual-gift-for-long-distance-boyfriend`
   is already on disk, plus LDR rows 7–13), so this post deliberately does **not**
   chase it — long distance appears only inside the "wrong call" section, as the
   case where the page earns its keep.
3. **"Free" is live commercial demand.** Three of the ten lead on it (giftfeels,
   surprises.gift, gifft.me). This is the one place this post is structurally
   weaker than the SERP: `facts.md` has no pricing figure, so the dedicated
   "free" H2 gives a stated non-answer plus a `/templates` link. Honest, but it is
   not what that searcher wants, and it is named as such in the audit.
4. **Two of ten slots are Etsy marketplace pages**, both year-stamped "2026".
   Marketplace pages and a year-stamp are both signals this SERP is thin rather
   than entrenched — but subhsandesh.in has no authority on the head term either.

Because the SERP arrived after drafting, **no H2 was reverse-engineered from it.**
Mapping was checked afterwards and holds: "free" → its own H2; idea-quantity →
the five-row first-party table and the two-format section; long distance → the
wrong-call section. The audit item *"No section closely mirrors a competitor
page's structure or framing"* is left **failed**, because the ten were judged from
titles and URLs only — no competitor page body was opened.

What the post was actually built from, all real data:

**1. India autocomplete** — `content/keywords/2026-09-15-virtual-gift-100/ac*/autocomplete.csv`.
The shape of the demand around this token is unambiguous, and it is price- and
speed-led rather than sentiment-led:

| completion | len | depth | score |
|---|---|---|---|
| `virtual gift for boyfriend` | 4 | 3 | 1250 |
| `gift for boyfriend under 500` | 5 | 3 | 1251 |
| `gift for boyfriend under 200` | 5 | 3 | 1250 |
| `gift for boyfriend blinkit` | 4 | 3 | 750 |
| `virtual gift for boyfriend free` | 5 | 3 | 601 |
| `online gift maker for bf` | 5 | 3 | 600 |
| `long distance gift for bf` | 5 | 3 | 558 |
| `gift for bf in anniversary` | 5 | 2 | 555 |

Two things follow. `bf` survives as its own token at depth 2–3 (`online gift
maker for bf`, `long distance gift for bf`, `gift for bf in anniversary`), so it
is not merely a stem of `boyfriend`. And the neighbourhood it sits in is
`under 500` / `under 200` / `blinkit` / `free` — the register is fast, cheap,
casual. That is the whole basis of this post's angle.

The autocomplete and the late SERP agree on one thing and disagree on another.
Both confirm the "free" modifier. But the autocomplete keeps `bf` alive as its own
token at depth 2–3 (`online gift maker for bf`, `long distance gift for bf`,
`gift for bf in anniversary`) where the SERP collapses it into `boyfriend`. That
gap *is* the opportunity: the demand is typed in the abbreviation, and every page
currently answering it was written for the expanded word.

**2. Wave-1 Gate-2 evidence carried in `BRIEF-WAVE2.md` §5.** The
`birthday website for girlfriend` SERP (us-served, 2026-09-15) had no ecommerce,
no authority page, and a GitHub repo at #1. The `digital gift for wife` SERP
collapsed into BestBuy gift cards. Both are adjacent, neither is mine, so
neither is quoted as evidence for this keyword — only as the reason the
"virtual/digital gift" wording needs separating from "gift card" early, which
this post does in its opening paragraph.

**3. The three sibling posts** (below), read in full.

---

## Phase 2 — separation from the three sibling boyfriend posts

Read before drafting:

| slug | its angle | its H2 spine |
|---|---|---|
| `online-gift-for-boyfriend` (wave 1, live) | woman-to-boyfriend direction; the "will he find it cringe" question | What counts as… / Will he think it's cringe / **Six online gifts… ranked by what gets reopened** (6 numbered H3s) / What people actually build / What the build takes / When it's the wrong choice |
| `virtual-gift-website-for-boyfriend` (wave 1, live) | *which website* — a five-check test on signup, editability, password, price, link survival | What a virtual gift website is and is not / Five checks to run… |
| `digital-gift-for-boyfriend` (wave 2, row 4, in flight) | not yet on disk at drafting time; per §5 its job is separating "digital gift" from "digital gift card" |

**My split, in one sentence:** the other three answer *what to send him* and
*where to build it*; this one answers *what the abbreviation you just typed says
about which register will land*, and prices the real elapsed-time cost against
the speed the phrasing implies.

Concretely, to stay off their ground:

- **No ranked/numbered list of gift ideas.** `online-gift-for-boyfriend` owns
  "six … ranked by what gets reopened" including the numbered H3s. This post has
  zero numbered H3s and no `ItemList`.
- **No "which website" comparison.** `virtual-gift-website-for-boyfriend` owns
  the platform-selection test.
- **No "will he find it cringe" section.** Owned by row 1 of the siblings.
- **No long-distance framing.** Seven of the ten SERP results pivot there and so
  do at least eight rows of this batch; this post cedes it entirely.
- **Only two template formats are described**, both mock-official, both assigned
  to this row, both argued from humour research rather than listed as ideas.
- **The first-party pair is deliberately different.** The siblings open on the
  40.6% password figure and the 4,357 total. This one opens on **49.0% phone**
  and the **23.9% apology-dashboard share**, which `BRIEF-WAVE2.md` §4 flags as
  under-used, and which happen to be the two that carry the argument.

No abort was warranted: the differentiation is real and holds for the whole post.

---

## Phase 3 — sources: how they were found, and what each one actually says

`WebSearch`/`WebFetch`/Brave were not used. Discovery was **Europe PMC → Crossref
→ DOAJ** per `BRIEF-WAVE2.md` §1b, searching the phenomenon (humour register,
teasing, textese, mediated closeness) rather than the keyword. OpenAlex was not
attempted. Every landing page below was opened with `ctx_fetch_and_index` before
being cited.

Queries run (Europe PMC, all with ` AND OPEN_ACCESS:Y`): `humor romantic
relationship satisfaction`, `playfulness romantic couples`, `text messaging
abbreviations perception`, `textese texting language attitudes`, `teasing
intimacy close relationships`, `mobile messaging relational maintenance`,
`gift givers recipients appreciation mismatch`, `surprise positive emotion
intensity`, `smartphone notification attention interruption`.

Crossref: `textism sincerity perceived text message`, `text message abbreviation
perceived effort sender`, `informal language computer mediated communication
closeness`, `humor use romantic partners relational maintenance`.

DOAJ (two/three-word queries only): `texting abbreviations`, `humor couples`,
`playfulness relationships`, `emoji romantic`, `SMS language`, `digital gift`,
`mediated intimacy`, `humour communication`, `instant messaging intimacy`,
`smartphone couples`, `whatsapp couples`, `romantic relationship texting`,
`playful teasing`, `joke appreciation`, `online greeting`, `Hinglish`,
`code switching WhatsApp`, `Indian youth smartphone`, `digital romance India`,
`abbreviation identity`, `humour digital communication`, `humour text messages`,
`online humour sharing`, `affection expression technology`, `parody genre`,
`gift giving effort`, `gift recipient preferences`, `spontaneity planning`,
`informal register`.

### Cited (5)

1. **Campbell, L. & Moroz, S. (2014).** *Humour Use Between Spouses and Positive
   and Negative Interpersonal Behaviours During Conflict.* Europe's Journal of
   Psychology 10(3), published 13 August 2014.
   `https://ejop.psychopen.eu/index.php/ejop/article/view/763`
   **Read:** full landing page + abstract. **Says:** 116 heterosexual married
   couples; APIM analysis; positive humour use by *either* partner predicted more
   positive conflict-resolution behaviour, negative humour by either partner
   predicted less, instrumental humour predicted greater apathy.
   **Used for:** the joke has a direction, and the direction decides whether it
   helps. Domain headroom: `ejop.psychopen.eu` was at 1 (`cute-website-for-girlfriend`,
   a *different* URL, /view/1105) → this takes it to 2 of 3.

2. **Pennock-Speck, B. & Clavel-Arroitia, B. (2019).** *Facework and Prosocial
   Teasing in a Synchronous Video Communication Exchange.* Atlantis 41(2),
   December 2019. `https://www.atlantisjournal.org/index.php/atlantis/article/view/599`
   **Read:** full landing page + abstract. **Says:** provocative elements in
   prosocial teasing activate a **play frame** (Bateson), inside which seemingly
   hostile face acts are read as playful; successful teasing can enhance the face
   of both teaser and teased and build rapport. Goffman-based facework analysis.
   **Used for:** the mechanism by which a mock fine reads as affection rather
   than accusation — and the two-second legibility requirement that follows.
   Fresh domain, 0 prior uses in the batch.

3. **Braimoh, J. J. (2020).** *The impact of texting language on Nigerian
   students: a case study of final year linguistics students.* Per Linguam 36(1),
   15–31, published 10 September 2020.
   `https://perlinguam.journals.ac.za/pub/article/view/900`
   **Read:** full landing page + abstract. **Says:** 62 final-year linguistics
   students, University of Benin, 2015; SMS abbreviations did carry into written
   classwork, but the author argues this cannot be attributed to SMS alone —
   **the purpose of the writing and the writer's state of mind** are also
   determinants of whether abbreviations appear.
   **Used for:** the load-bearing claim that `bf` is a register selection, not a
   typo. Fresh domain.

4. **Fiadotava, A. (2020).** *Sharing humour digitally in family communication.*
   The European Journal of Humour Research 8(1), 95–111, published 23 April 2020.
   `https://www.europeanjournalofhumour.org/index.php/ejhr/article/view/462`
   **Read:** full landing page + abstract. **Says:** 60 Belarusian families, oral
   interviews plus an online survey of 175 respondents; **the most preferable
   ways of sharing humour digitally are those that ensure the privacy of the
   conversation**; visual and generic humour is shared more than textual and
   personal humour.
   **Used for:** pairing with SubhSandesh's 40.6% password rate — the lock is the
   normal shape of this behaviour, not paranoia. Fresh domain.

5. **Pollmann, M. M. H., Norman, T. J. & Crockett, E. E. (2021).** *A daily-diary
   study on the effects of face-to-face communication, texting, and their
   interplay on understanding and relationship satisfaction.* Computers in Human
   Behavior Reports 3, 100088. `https://doaj.org/article/eccf5ce039a742fb8763f2e6d8711a1b`
   **Read: ABSTRACT ONLY — disclosed in the body.** The publisher full text
   (`sciencedirect.com/science/article/pii/S2451958821000361`) is blocked from
   this sandbox; the DOAJ record is where the abstract was actually read, so that
   is what is cited. **Says:** daily-diary design covering phone calls, video
   calls, texting and face-to-face time; more face-to-face communication predicted
   feeling more understood and more satisfied; **texting did not predict
   relationship satisfaction**, and was positively associated with understanding
   **only when face-to-face communication was relatively low**.
   **Used for:** the honest downside section. `doaj.org` was at 1
   (`online-gift-for-girlfriend-new-year`, a different article id) → 2 of 3.

**Subject test:** all five are about humour register, teasing, textese or mediated
closeness. None is "about India" or "about the internet".
**Swap test:** none could sit unchanged in another row of this batch — the teasing
play frame, the textese-register argument and the humour-privacy finding are only
load-bearing because this keyword is an abbreviation aimed at a joke format.
**Generic context statistics:** zero. No PIB/TRAI/Census/MEA line is used.

### Found, verified, and NOT cited

- **Lyu, Wang, Song & Jin (2025), "Greater effort, greater pain: Givers' feelings
  of social exclusion in gift failures…"**, Humanities & Social Sciences
  Communications 12(1), November 2025, doi `10.1057/s41599-025-06093-z`. Abstract
  read in full via DOAJ (`doaj.org/article/6d51d4801d4245e4ac10b3283a909894`);
  `nature.com` returned a bot challenge. Genuinely relevant — givers put more
  effort into gifts for close recipients and suffer a stronger social-exclusion
  response when those gifts land badly. **Dropped only to keep `doaj.org` at 2 of
  3** rather than pinning it to its cap while thirty agents are still writing.
  A good pick-up for any sibling that needs it.
- `bmcpsychology.biomedcentral.com` (empathic accuracy in couples' messenger
  communication) — bot challenge.
- `lingua.soloclcs.org` — HTTP 466.
- `research.tilburguniversity.edu`, `core.ac.uk` — 403 / JS challenge.

### Domains deliberately avoided

Banned at cap 3 per `SPENT-SOURCES.json`: `arxiv.org`, `pmc.ncbi.nlm.nih.gov`,
`journals.plos.org`, `frontiersin.org`, `pewresearch.org`, `gsb.stanford.edu`.
Several strong leads (PLoS ONE emoji-as-affective-signals 2019, Frontiers
playfulness work, the Sci Rep playfulness/attachment papers) were discarded on
this basis alone. `europepmc.org`'s last slot was left for a sibling.

---

## Phase 4 — first-party facts (11 used, 2 inside the first 150 words)

Opening pair, chosen because `BRIEF-WAVE2.md` §4 flags them as under-used and
because they carry the argument rather than decorating it:

- **49.0% of shared pages are opened on a phone** (24,493 of 49,968) — the phone
  is the device, which is why the phrasing is abbreviated in the first place.
- **The #3 page type of 4,357 is the apology dashboard at 23.9%** (1,043) — a
  deadpan mock interface, nearly level with the sincere #1. The joke format is
  already a quarter of everything built. This is the claim no competitor can make.

Also used: 4,357 pages / 16 types; #1 /love-gf 25.8%; #2 /bouquet-gf 24.6%;
#4 /darling 9.8%; #5 /birthday-gf 8.1%; 6.2-hour median first-save-to-last-edit
(n=1,125); 94.1% publish-and-share rate; 11.5 average views per page; 49,968 total
views.

**Two mandatory disclosures, both in body prose and not only here:**

1. The database records **which template was opened, not who received it**. The
   /love-gf count does not prove 1,125 girlfriends, and nothing here proves a
   recipient was a boyfriend.
2. The `## Pricing (fill in by hand)` block in `content/facts.md` is **empty**.
   The secondary keyword contains "free"; no free-tier or paid-tier figure is
   stated or implied anywhere in the post. The body says plainly that current
   pricing could not be confirmed and points to `/templates`.

---

## Phase 5 — templates

All three assigned URLs used, none swapped, all present in `TEMPLATE_LINKS`.
Descriptions taken from `app/lib/prompt.ts`, not guessed:

- **`/challan`** — "a mock traffic notice for the things they actually did
  ('illegal parking in your head since 2023'); they pay it or contest it."
  Written as a parody of an Indian e-challan, with the pay/contest mechanic named.
  It is not described as a sincere romantic gesture.
- **`/recharge`** — "a prepaid 'recharge' for a relationship: pick a plan from the
  grid, pay on a sheet that looks like the real thing, get a receipt." Written as
  a parody of a prepaid top-up flow, with the plan grid / payment sheet / receipt
  named.
- **`/templates`** — linked once, in the pricing section near the close.

Both jokes are parodies of screens an Indian phone user meets every month, which
is the reason the play frame is legible in two seconds. That is the argument the
row's template assignment makes possible, and it is why no swap was needed.

Three internal links total, all descriptive anchors, all placed after the section
that earns them.

---

## Phase 6 — structure decisions

- **No `ItemList`** in `structuredData`: the body contains no ranked or numbered
  sequence, by design (see Phase 2). One enrichment block only, `@id`-matched to
  `<canonicalURL>#post`, with `citation` mirroring `batchMeta.sources` one-to-one.
- **Zero Wikipedia links in the body.** Entities appear only as `sameAs` in
  `about`/`mentions`, each QID resolved through the Wikipedia API at draft time:
  Virtual gift Q7935109, SMS language Q2090785, Humour Q35874, Teasing Q518090,
  Challan Q5321492, Prepaid mobile phone Q2858140.
- **One comparison table**, five rows, real values, with a first-party column
  (share of 4,357 built pages).
- FAQs written to avoid both this post's own H2s and the sibling posts' FAQ sets.
