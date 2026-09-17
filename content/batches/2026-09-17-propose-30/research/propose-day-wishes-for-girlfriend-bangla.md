# Research brief — `propose day wishes for girlfriend bangla`

- **Slug:** `propose-day-wishes-for-girlfriend-bangla` (verified free in Strapi, 2026-09-17: `filters[slug][$eq]` returned `total: 0`)
- **Secondary keyword:** `propose day wishes bangla` — same page, no separate post
- **Category:** `modern-romance` (verified live: Strapi category id 3)
- **Volume band:** 1,000–3,000 EST, no tool data. Not printed on the page as a real volume.
- **Batch:** `2026-09-17-propose-30`

---

## Phase 0 — first-party data gate

Five lines from `content/facts.md` are load-bearing; two sit inside the first 150 words.

| Fact | Where it is used | Labelling in body prose |
|---|---|---|
| 4,567 personalised pages since 2026-03-12, 16 page types | answer paragraph | "platform-wide" |
| 39.9% password-protect before sharing (1,822 of 4,567) | answer paragraph, table, key takeaway | "platform-wide" |
| 48.9% of views on a phone (25,167 of 51,504) | comparison table | "platform-wide" |
| /love-gf — 1,138 pages, 24.9% of everything created | internal-link paragraph, FAQ | named as the template |
| Median first-save → last-edit 6.4h, n=1,138 | table + takeaway paragraph | "sampled on /love-gf, n=1,138" |

**No figure is attributed to proposal pages.** The `proposalpages` probe was refused by
the production-read policy in wave 1 and again in this batch; every number above is
platform-wide or /love-gf-sampled and says so in prose, not only in the audit. The
pricing block in `facts.md` is empty, so the post makes no price, free-tier or
paid-tier claim. The Raksha Bandhan lead-time block was not used (out of bounds for
this batch).

---

## Date verification

Checked with `date` and a Node date construction before drafting, not from memory:

| Day | 2027 date | Weekday |
|---|---|---|
| Rose Day | 7 February 2027 | **Sunday** |
| Propose Day | 8 February 2027 | **Monday** |
| Valentine's Day | 14 February 2027 | **Sunday** |

An incumbent publishes "7 Feb Propose Day", which is Rose Day. Propose Day 2026 fell
on a Sunday; the 2027 Monday genuinely narrows the usable window, and that is stated
in two places on the page.

---

## Phase 1 — SERP analysis: NOT RUN, and why

**This is a real gap, recorded rather than papered over.** This session's `WebSearch`
budget was exhausted (200/200) before the first Phase 1 query, so the top 5 ranking
pages for the keyword were never fetched and no comparison table of incumbents exists
for this post.

What was used instead:

- The batch BRIEF's incumbent list — MensXP, Maharashtra Times, Zee, Webdunia,
  Loksatta, Times Now for the Indian-language SERPs, plus the wave-1 findings on
  bondlyfe.com and the digital-card builders.
- The `references/competitors.md` category list.

Consequences, both carried into the audit:

1. Checklist item *"The post contains at least one claim none of the top 5 pages
   make"* is recorded as **failed**, because it cannot be verified without the SERP.
2. Checklist item *"No section closely mirrors a competitor page's structure or
   framing"* is recorded as **passed** on the strongest possible ground: no competitor
   page was read at all in the making of this post, so nothing could be mirrored.

---

## Phase 2 — Angle and the sibling boundary

A sibling in this batch owns `propose day quotes in bengali` — general quotable lines
for all recipients. This post is deliberately narrower and warmer: **what you actually
send to one girlfriend.**

The dividing line, stated as the things a general quotes list structurally cannot do:

- **Pronoun choice.** A quotes list prints lines. It cannot tell you that তুমি is the
  default for a girlfriend, that তুই signals a specific closeness and reads as rough if
  you do not already speak that way, and that আপনি is cold. This page makes that the
  second H2 and treats it as the most valuable thing on the page.
- **Length, because of who else can see the phone.** A quotes list has no reason to
  cap length. An addressed-message page does, and can explain why in terms of family
  visibility.
- **Already together vs asking for the first time.** Different H3 groups, different
  lines.
- **The hour after you send.** A quotes list ends at the line. This one carries a
  section on not following up.

### Angle statement

> Wins by being the only post that treats a Bangla Propose Day line as something
> addressed to one girlfriend who shares a phone with her family — giving the
> তুমি/তুই/আপনি register rule, the Kolkata-vs-Dhaka usage split, and a channel-by-channel
> length rule grounded in SubhSandesh's platform-wide 39.9% password-protection rate.

### Fan-out sub-queries → H2 map

| Sub-query | H2 |
|---|---|
| when is Propose Day 2027 / is it 7 or 8 Feb | What Propose Day is in Bengali, and when it falls in 2027 |
| tumi or tui for girlfriend in Bengali | Why the pronoun decides whether the line lands |
| Bengali propose day lines with meaning | 12 Propose Day wishes for your girlfriend in Bangla |
| how long should a propose day message be / where to send it | How long is too long, and where to send it |
| she hasn't replied, should I message again | What to do if she doesn't reply for an hour |
| when not to send a page / does it work in Bengali | When a Bangla wishes page is the wrong choice |

---

## Phase 3 — Sources

**Research lane:** privacy, audience and self-presentation when a romantic message can
be seen by others. Deliberately kept out of the first-disclosure-anxiety,
marriage-readiness, novelty, escalation, WhatsApp-mechanics, CMC-channel,
post-conflict, bilingual-emotion, perceived-effort, greeting-obligation,
ghazal-poetics, romanisation, regional-language-internet, Valentine-reception and
Bengali-literary literatures, which belong to other agents in this batch.

Search route: `WebSearch` was unavailable, so discovery ran through DOAJ's article API,
Crossref, Europe PMC and the Semantic Scholar graph API, with full texts pulled and
converted where the publisher allowed it. OpenAlex was rate-limited out (daily budget
exhausted, presumably by concurrent siblings).

| # | Source | Read | Subject test | Swap test |
|---|---|---|---|---|
| 1 | Sambasivan et al., SOUPS 2018 (usenix.org) | **full text** | pass — women's phone privacy in India/Pakistan/Bangladesh | fails to be generic; it is specifically about who else sees the phone |
| 2 | Litt & Hargittai, *Social Media + Society* 2016 | abstract only | pass — who a sender imagines is watching | specific to audience misjudgement |
| 3 | Yao, Taylor & Leiser Ransom, *Social Media + Society* 2024 | abstract only | pass — Stories vs posts, disclosure intimacy | specific to channel choice |
| 4 | Bouchard, Harrigan & Tobin, *JSPR* 2021 | abstract only | pass — relationship visibility and commitment | specific to how public a couple wants to be |
| 5 | Ameli, Bicharanlou & Hajjari, *New Media Studies* 2025 | **full text** | pass — couples renegotiating privacy boundaries | specific to dyadic boundary work |

Zero generic context statistics (budget is 1; none used). Zero Wikipedia links in the
body. Zero competitor links.

### What each one actually says

1. **Sambasivan, N., Checkley, G., Batool, A., Ahmed, N., Nemer, D., Gaytán-Lugo, L. S.,
   Matthews, T., Consolvo, S. & Churchill, E. (2018).** *"Privacy is not for me, it's
   for those rich women": Performative Privacy Practices on Mobile Phones by Women in
   South Asia.* SOUPS 2018, USENIX Association, pp. 127–142. Published 12 August 2018.
   <https://www.usenix.org/conference/soups2018/presentation/sambasivan>
   Triad focus groups with **199 women**, May–December 2017, 500+ hours of fieldwork
   across India, Pakistan and Bangladesh; participants aged 18–65, all
   internet-enabled phone owners, roughly a third each of high, medium and low SES.
   Participants' digital activity was carefully monitored by close social relations —
   the paper names **husbands, brothers, parents and children**. Five performative
   privacy practices are described, including phone and app locks and deletion of
   content. Open access; PDF read in full. Directly serves both the West Bengal and
   Bangladesh halves of this audience.

2. **Litt, E. & Hargittai, E. (2016).** *The Imagined Audience on Social Network Sites.*
   Social Media + Society. Published online 24 February 2016.
   <https://journals.sagepub.com/doi/10.1177/2056305116633482>
   Two-month diary study of **119 diverse American adults and their 1,200 posts**, plus
   30 follow-up interviews. Users cope with large, diverse actual audiences by
   envisioning either very broad abstract audiences or more targeted specific ones.
   **SAGE returned HTTP 403 to every fetch attempt; the abstract was read via Crossref
   and the Semantic Scholar graph API and only abstract-level findings are stated.**

3. **Yao, Y., Taylor, S. H. & Leiser Ransom, S. (2024).** *Who's Viewing My Post?
   Extending the Imagined Audience Process Model Toward Affordances and Self-Disclosure
   Goals on Social Media.* Social Media + Society. Published online 22 January 2024.
   CC BY-NC. <https://journals.sagepub.com/doi/10.1177/20563051231224271>
   Retrospective diary study of US Instagram users comparing posts and Stories,
   **n = 1,270**. Channel ephemerality predicted a **less diverse and less close**
   imagined audience; imagined audience closeness was positively related to
   **disclosure intimacy**. This is the evidence behind "a Story is the wrong shape for
   the most intimate line you own." **Abstract only — SAGE 403.**

4. **Bouchard, G., Harrigan, I. & Tobin, S. J. (2021).** *The use of Facebook in
   romantic relationships: an actor-partner interdependence mediation model predicting
   relationship visibility.* Journal of Social and Personal Relationships. Published
   online 30 March 2021. CC BY.
   <https://journals.sagepub.com/doi/10.1177/02654075211006788>
   **139 couples**, Facebook users, aged 17–30. Relational commitment predicted
   *desired* relationship visibility, which mediated *actual* relationship visibility
   (declared status and transient visibility). Used to explain a slow reply that is
   about audience rather than about feeling. **Abstract only — SAGE 403.**

5. **Ameli, S. R., Bicharanlou, A. & Hajjari, M. (2025).** *Networked Communication of
   the Iranian Family: Exploring How Spouses Redefine Privacy and Surveillance.* New
   Media Studies, 11(41), 129–174.
   <https://nms.atu.ac.ir/article_19311_d68e3bc96e6ff5de03e2ee14559ac9db.pdf>
   Semi-structured interviews with **47 individuals** in three groups — spouses,
   informants, and psychologists/couple therapists. Privacy boundaries split into
   "self-boundaries" and "dyadic boundaries", both sitting under a theme the authors
   call **liquid privacy**: private/public boundaries and ownership over the
   dissemination of information are fluid and continually renegotiated. Open access,
   PDF read in full.

### Cap check

`node content/batches/2026-09-17-propose-30/capcheck.mjs` was run twice — before
choosing sources and again before finalising. None of `usenix.org`,
`journals.sagepub.com` or `nms.atu.ac.ir` appeared at cap or with one slot left, and
none of the five URLs is on the wave-1 banned list. `onlinelibrary.wiley.com` had one
slot left and a Wiley paper (Saudi women / context collapse) was **dropped** rather
than risk pushing a domain to cap while siblings write concurrently.

---

## The Bengali content — written vs cut

**13 lines published.** Each carries Bengali script, Roman transliteration and an
English gloss. Twelve are situational (তুমি throughout, in five H3 groups); one is a
তুই example inside the pronoun section, with an আপনি anti-example beside it.

### Pronoun guidance (the page's main asset)

- **তুমি** — default for a girlfriend. Affectionate, equal, unmarked. Every published
  line uses it.
- **তুই** — the register of people who grew up together. Reads as deep closeness *or*
  as rough, depending entirely on whether the couple already speaks that way. Rule
  given on the page: send তুমি unless she already says তুই to you, because Propose Day
  is the wrong day to switch register.
- **আপনি** — respectful, and cold in a love note. Shown once as what not to send.

### Regional usage stated on the page

- **সঙ্গে** / **সন্ধেবেলা** (West Bengal) vs **সাথে** / **সন্ধ্যাবেলা** (more often
  Bangladesh). Both correct.
- **বাবু** — ordinary pet name for a partner in Kolkata, but usually means a small
  child in Dhaka. **সোনা** offered as the safe substitute for a Bangladeshi reader.

### Cut for correctness or register — 6 lines

1. `তুমি আমাকে সম্পূর্ণ করো` ("you complete me") — a calque from English. Grammatical,
   but not something a Bengali speaker says.
2. A rhyming two-line couplet in the register of Bengali romantic verse — cut because
   anything that scans like published Bengali lyric risks echoing copyrighted material
   and originality could not be verified.
3. A তুই imperative (`তুই রাজি হয়ে যা`) — তুই imperatives are the highest-risk register
   in Bengali: warm between people who already use তুই, actively rude otherwise, and a
   wishes page cannot know which applies.
4. A Dhaka-colloquial line using `কইলাম` for `বললাম` — fine spoken, reads as a typo
   written, and excludes West Bengal readers.
5. A `প্রেম নিবেদন` (formal "declaration of love") line — correct but ceremonial;
   reads like a wedding card, not a message.
6. চাঁদ / moon endearment lines — cliché and flat outside song lyrics. Cut for
   weakness rather than error.

### Cut for the word cap — 3 lines

These were verified correct and idiomatic but removed to bring `contentMarkdown` under
1,800 words. They are recorded here so a future edit can restore them if the cap moves:

- `তোমাকে ভালো লাগে, এটুকু বলতে আমার এক বছর লেগে গেল। আজ বললাম।`
- `তোমার পাশে বসে চুপ করে থাকতেও ভালো লাগে — এটাই বোধহয় ভালোবাসা।`
- `আজকের দিনটা তোমার জন্য। বাকি দিনগুলোও অবশ্য তোমারই।`

### Copyright

No modern Bengali poetry or song lyric is reproduced. Every published line was written
originally for this page, and the post says so in an FAQ. No public-domain material was
used, because none could be verified to a reliable text within this session.

---

## Phase 5 — Links and templates

**Internal — 3, all from `TEMPLATE_LINKS`, all relative, none in the opening:**

| Path | Where | Why it earns the click |
|---|---|---|
| `/train-ticket` | after the long-distance H3 | the gap is the story, not an apology for it |
| `/love-gf` | after the comparison table | **the genuine alternative.** For a girlfriend on Propose Day this is usually the better fit than `/proposal` — the page says "I love you", not "marry me" — and it is the most-created template on the platform at 1,138 pages, 24.9% of everything built |
| `/proposal` | in the "wrong choice" H2, after the case for it is established | **mandatory.** Correct only when the reader is genuinely asking her to marry him |

**What a Bengali reader can and cannot get from these**, stated in the body rather than
left to be discovered: Bengali text pasted into the message fields renders correctly,
but the templates are English-language — buttons, prompts and headings stay in English.

`templateUrls`: `["/proposal", "/love-gf", "/train-ticket"]`.

**Outbound:** 5, one per source, inline at the sentence each supports.
**Wikipedia in body:** 0. Wikipedia and Wikidata appear only in `sameAs`, which
`structured-data.md` excludes from the body budget.

### Entity verification

All five `sameAs` pairs were checked against the Wikipedia API in one call
(`action=query&prop=pageprops&ppprop=wikibase_item`); none returned `missing`:

| Entity | Wikidata |
|---|---|
| Propose Day | Q7250378 |
| Bengali language | Q9610 |
| West Bengal | Q1356 |
| Bangladesh | Q902 |
| Valentine's Day | Q37587 |

---

## Phase 6 — Audit

50 checklist items, byte-verbatim from `references/publish-checklist.md` (extracted
programmatically, with wrapped items joined). **47 passed, 3 failed, intersection
empty, sum 50** — asserted in the build script, not by eye.

Failed:

1. *The post contains at least one claim none of the top 5 pages make* — unverifiable
   without the SERP (WebSearch budget exhausted).
2. *Slug short, hyphenated, lowercase, no stop words* — contains "for"; the slug is
   fixed by the batch assignment and matches the keyword exactly.
3. *3–6 outbound links, all fetched and verified to contain the cited fact* — two of
   five read in full, three cited from publisher abstracts because SAGE returns 403.

Structural limitations (in `batchMeta.structuralLimitations`, never in `failed`): no
proposal-specific data; empty pricing block; no live SERP this session; SAGE
bot-blocking; no instrumented Bengali corpus check.

**Position target: 6–10, not 3.** These February SERPs are a news cycle owned by
publishers with far higher domain authority, refreshed every year.
