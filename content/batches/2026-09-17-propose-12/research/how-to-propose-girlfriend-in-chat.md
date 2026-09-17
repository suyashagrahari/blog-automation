# Research brief — "how to propose girlfriend in chat"

Batch `2026-09-17-propose-12` · slug `how-to-propose-girlfriend-in-chat` · category `modern-romance`
Phases 1–3. Written 2026-09-17.

---

## Phase 1 — SERP analysis

Run 2026-09-17 on the head keyword and on the secondary `how to propose a girl on
whatsapp chat`. The BRIEF's characterisation held up: **this SERP is not a content
SERP.** What ranks is UGC, short video, and retailers whose blog exists to sell a
physical product.

Two things worth recording before the table. First, the B2B contamination the BRIEF
warns about did **not** appear here — adding "girlfriend"/"girl" to "propose" pins the
intent to romance, so no Proposify/Jotform results surfaced. Second, one genuine
content competitor *has* entered since the keyword run: **bondlyfe.com**, which sells
proposal pages — the same job as `/proposal`. It is a competitor under
`references/competitors.md` and is not cited, linked or structurally paraphrased
anywhere in the post. It does, however, raise the bar: several things the BRIEF
treated as gaps are now table stakes.

| # | Page | Type | Words / structure | Where the answer sits | Data cited | Format | Tone | Optimising for |
|---|---|---|---|---|---|---|---|---|
| 1 | tiktok.com/discover/how-to-propose-to-girlfriend-in-chat | Short video hub | No article body; a feed of clips | No prose answer at all | None | Video grid, no schema, no author | n/a | TikTok's own discover surface |
| 2 | bondlyfe.com/blog/how-to-propose-to-a-girl | **Competitor** (proposal-page product) | ~3,000 words, 14-min read, ~10 H2s incl. a dedicated "on chat or over text" H2 | First 80 words, answer-first | **Zero third-party data.** No study, no statistic, no date | Example-line lists, FAQ block, author byline ("Peter"), updated-date | Second person, contractions, confident, specific | Conversion to its own proposal-page product |
| 3 | quora.com / writeyourheartout.quora.com threads | UGC | Variable, 100–600 words per answer | Scattered across answers | None | Answer threads, no schema | Anecdotal, first person | Nothing; organic UGC |
| 4 | shararat.in/blogs/…/how-to-propose-a-girlfriend-on-chat | **Competitor** (lingerie retailer) | ~900 words | Buried under a promo bar and cart chrome | None | "10 best lines" bullet list, product rail | Generic, hedged, "let's dive in" | Selling loungewear |
| 5 | vocal.media/humans/how-to-propose-a-girl-in-a-unique-way-in-chat | UGC platform | ~1,200 words, 5-min read, emoji H2s | After a three-paragraph story intro | None | Do's/Don'ts list, invented "case studies" (Arjun & Sanya) | Warm, florid, heavy emoji | Vocal's own engagement metrics |
| 6 | floweraura.com, myflowertree.com, chocomanualart.com | **Competitors** (flower/chocolate retailers) | 700–1,200 words each | Buried | None | Line lists + product grid | Promotional | Selling bouquets and chocolate |

**Verified:** 6 of 10 results are weak by the BRIEF's definition (short video, UGC
threads, retailer blogs). No AI Overview was returned for the head term. **No page in
the SERP cites a single study, statistic or dated source.** That is the most
exploitable fact on the board.

**Slug check:** `https://strapi.subhsandesh.in/api/articles?filters[slug][$eq]=how-to-propose-girlfriend-in-chat`
returned `[]`. Free.

---

## Phase 2 — Gap analysis

**Table stakes** (covered by bondlyfe, and by at least one retailer page each):
send it when she can reply properly; one message rather than five; end on a clear
question; avoid a "can we talk?" opener; be specific rather than generic; don't ask
over chat if you see her constantly; example lines to steal.

**The gap — four things no page in the SERP covers:**

1. **The post-send interval.** Every page tells you what to write. Not one says what
   happens in the forty minutes after you press send, which is the part the reader is
   actually afraid of. There is a real number for this and nobody has used it.
2. **Channel baselines differ.** No page distinguishes WhatsApp from Instagram DM,
   though the reply norms are roughly 70% vs 44% within five minutes. A reader
   panicking at minute six on Instagram is measuring against the wrong baseline.
3. **Private vs public is the variable that matters, not online vs offline.** The
   PLOS ONE work locates the damage in *perceived inclusivity of recipients* — how
   many people can see it — not in the medium. Every SERP page frames this as
   "online is less romantic than in person", which is the wrong axis.
4. **Relationship-stage calibration.** Ruppel's diary study found the text penalty on
   disclosure is *weaker* the further along the relationship is. Every SERP page gives
   one-size advice.

**Stale data:** not applicable — there is no data on any of these pages to supersede.
That absence is itself the opening.

**Unanswered questions raised and dropped by the SERP pages:** "how long should I wait
for a reply", "what if she leaves me on read", "is it okay to ask on Instagram instead
of WhatsApp", "should I delete it if she doesn't reply".

**Fan-out sub-queries → H2s:**

| Sub-query | Becomes |
|---|---|
| what does proposing in chat even mean / dating vs marriage | H2 "What 'proposing in chat' actually means" |
| what do I actually send | H2 "How to propose girlfriend in chat, step by step" (6 H3s) |
| how long do I wait for a reply / left on read | H2 "What the silence after you send it actually means" |
| chat vs call vs in person | H2 + comparison table |
| should I do this over chat at all | H2 "When proposing in chat is the wrong call" |
| is there something better than a message | H2 "Send a page instead of a paragraph" |

**Angle (`batchMeta.angle`):** wins by being the only post that says what the silence
after you hit send actually means — grounded in a 3.4-million-message study of real
WhatsApp and Instagram response times and in SubhSandesh's own 48.9% phone-open rate
across 51,164 views, against a SERP where not one page cites a single source.

---

## Phase 3 — Sources

Lane: text-based/instant messaging in romantic relationships. Four sources, all
fetched and verified; no competitor among them; no government context statistic used
at all. At the time of writing `blogs/` held no sibling files, so no URL or domain
collision existed — the lane (CMC/chronemics) is in any case distinct from the other
eleven keywords.

| Source | Type | Verified finding used | Published |
|---|---|---|---|
| [Martin, Hakobyan & Drimalla, *Sorry for the late reply*](https://arxiv.org/abs/2605.03687) | arXiv preprint, open | 3.4M messages, 889 chats, 97 donations. ~70% of WhatsApp and 44% of Instagram messages answered within 5 min. Response-time reciprocity slopes 0.786 (WhatsApp) / 0.796 (Instagram), stable across months | 2026-05-05 |
| [Lee, Gillath & Miller, PLOS ONE 14(3): e0212186](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0212186) | **Peer-reviewed, open access, CC BY** | Five studies. Greater online disclosure → lower romantic intimacy (B = −0.23, p = .037) and satisfaction (B = −0.39, p = .001); effect present **only where perceived inclusivity of recipients was high**; partner-focused content dissipated it (Study 5) | 2019-03-04 |
| [Guest & Chang, *What to expect when you are texting*, JSMS 13(2)](https://www.thejsms.org/index.php/JSMS/article/view/1077) | Peer-reviewed, open access | Direct mobile messaging with a romantic partner is expected to be continuous, fast and transparent; partners use read receipts and Snapchat streaks to manage those expectations; violations trigger explicit conversations | 2024-12-31 |
| [Ruppel, JSPR](https://journals.sagepub.com/doi/abs/10.1177/0265407514541075) | Peer-reviewed, **paywalled — abstract only read** | N = 64, 4-day diary. Reduced-cue CT use negatively associated with self-disclosure breadth and depth in that conversation; the negative association for text-based CT was **weaker at higher levels of relationship development** | 2014-07-09 |

**Subject test:** all four are about text-mediated romantic communication. None is
about "India" or "the internet". **Swap test:** none could sit unchanged in another
post in this batch — response-time reciprocity, inclusivity of disclosure recipients,
and read-receipt expectancy violations are specific to a chat proposal and useless in
a bouquet or Propose Day-date post. **Context statistics used: zero.** WhatsApp
user-count statistics were deliberately excluded per the task brief; they pass the
swap test and are therefore filler.

**Not used, and why:** `academic.oup.com/jcmc` (403), `dl.acm.org` (403) and
`pmc.ncbi.nlm.nih.gov` (reCAPTCHA) blocked automated fetch, so the Kalman & Rafaeli
chronemics paper and the CSCW response-delay paper could not be verified and are not
cited. The arXiv paper covers the same ground with a larger, open dataset. A UW thesis
on channel choice as a relational message (`digital.lib.washington.edu`) returned an
unparseable PDF and was dropped rather than cited unread.

---

## First-party facts used

- 48.9% of shared pages are opened on a phone (25,008 of 51,164 views) — measured 2026-09-16 — *first 150 words*
- 40.0% of creators password-protect their page before sharing it (1,809 of 4,524) — measured 2026-09-16 — *first 150 words*
- 4,524 personalised pages created since 2026-03-12, across 16 page types — measured 2026-09-16
- 92.9% of started pages are actually published and shared (4,204 of 4,524) — measured 2026-09-16
- #2 page type: apology dashboard (/apology-dashboard) — 1,095 created, 24.2% of all pages — measured 2026-09-16
- Median gap between a page's first save and its last edit: 6.3 hours — sampled on /love-gf, n=1,136 — measured 2026-09-16
- Average views per created page: 11.3 — measured 2026-09-16 — *added in the fix pass, in the comparison table*

**Honesty constraint observed.** Every citation of 40.0% says *platform-wide, across
all 4,524 pages*; the 6.3-hour figure says *sampled on the "I love you" template,
n=1,136, not on proposals*; 48.9% says *across every shared page*, and the table cell
repeats *platform-wide, not proposals*. No number anywhere in the post is attributed to
proposal pages specifically, and the body says out loud that no proposal-specific figure
was obtainable. Per the BRIEF's 2026-09-17 correction this is recorded in
`auditReport.honestAssessment` and here, **not** in `auditReport.failed` — `failed`
entries must be verbatim checklist strings, and a non-checklist string would break the
`|passed| + |failed| = 50` arithmetic.

## Internal links

`/proposal` (primary, in the bridge section), `/apology-dashboard` (named for the
reader proposing after a fight), `/date-invitation` (named for the reader asking
someone out rather than asking to marry). All three from `TEMPLATE_LINKS` in
`app/lib/prompt.ts`; all placed after the sections that establish why the reader would
want them. Re-verified against `app/lib/prompt.ts` lines 45, 82 and 83 on 2026-09-17.

---

## Phase 8 — audit remediation, 2026-09-17

Three failures triaged. One closed, two left open as structural.

**Closed — "At least one table column uses first-party data."** The comparison table was
rebuilt from four rows to five: the single "private link" row split into *unlocked link*
and *password-protected link*, so the first-party column now carries two distinct verified
platform figures (11.3 average views per page with 48.9% of all 51,164 views on a phone;
40.0% of creators locking before sharing, 1,809 of 4,524) instead of one, each labelled
platform-wide in the cell. The three chat rows still read "Nothing — the platform sees the
page, never the chat", which is the truth rather than a gap: SubhSandesh has no visibility
into a WhatsApp or Instagram thread and never will. The checklist asks for one first-party
column, not a fully populated one, so the item is now honestly passed.

**Open — slug stop words.** See `auditReport.failed`. Exact-match keyword slug, fixed by the
brief, canonicalURL and filename.

**Open — one outbound link unfetched (Ruppel, JSPR).** `journals.sagepub.com` still returns
HTTP 403 to automated fetch. A fresh open-access search on 2026-09-17 ("Ruppel 2015 use of
communication technologies in romantic relationships … PDF") returned only the SAGE landing
page, a **ResearchGate** upload (not a citable copy of record) and the author's CV — no
repository copy, no university-news restatement. **Do not re-run this search.** The abstract
remains verified via the OpenAlex record for DOI 10.1177/0265407514541075, and both the body
and the sources list say in prose that only the abstract was read. `journals.sagepub.com` is
at the batch domain cap of 3, so no substitute SAGE URL is available either.

**No sources were added.** Batch tally re-counted across all 12 files in `blogs/` on
2026-09-17: arxiv.org 3, journals.sagepub.com 3, cyberpsychology.eu 3, frontiersin.org 3,
link.springer.com 3, en.wikipedia.org 3 — all at cap; journals.plos.org 2, europepmc.org 2,
pmc.ncbi.nlm.nih.gov 2. This post's four sources are unchanged.

**Body word count:** 1,795 → 1,798 on the schema validator's plain split (1,785 → 1,784 on
`wordCount()` in `app/lib/batches.ts`). The larger table was paid for by cutting a
roadmap sentence from the intro, an unsupported "a message gets scrolled past" claim from
the bridge section, and three redundant clauses — not by cutting the honest-limits material.
`honestAssessment` rewritten for the post as it now stands.
