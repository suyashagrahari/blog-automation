# Research brief — `raksha bandhan wishes link`

- **Slug:** `raksha-bandhan-wishes-link`
- **Batch:** `2026-08-25-rakhi-2027`
- **Assigned primary first-party fact:** 36,202 recorded views of shared pages, 12.2 average views per created page
- **Slug availability:** checked against Strapi on 2026-08-25 —
  `?filters[slug][$eq]=raksha-bandhan-wishes-link` returned `total: 0`. Free.
- **Category:** `indian-festivals` (confirmed present in the live category list)

---

## Phase 1 — SERP analysis

Live `WebSearch` on 2026-08-25 for `raksha bandhan wishes link` and
`send raksha bandhan wishes link to brother whatsapp`. Every result on page one is
a wishes-text listicle. Two of them are competitors under
`references/competitors.md` (FNP, Adobe Express) and were read for analysis only —
never cited, never linked, structure not mirrored.

Each page was fetched in full in the sandbox and machine-probed for the terms that
matter to this keyword: `shareable link`, `share a link`, `personalised page`,
`password`, `expire`, `expiry`, `screenshot`, `forward`, `microsite`.

| Page | Words | Heading shape | Where the answer lands | Data cited | Table | FAQ | Byline | Mentions a link at all? |
|---|---|---|---|---|---|---|---|---|
| vyapargrow.com/raksha-bandhan-wishes/ | ~1,660 | 41 headings; 14 wishes-category H2s, then "Grow Your Business with VyaparGrow" | No answer — straight into wish lists | None (`%` count = 0, `study` = 0) | No | Yes, 4 Qs | No | **No.** `shareable link` 0, `shareable` 0, `expiry` 0, `screenshot` 0. One FAQ asks "Can I send Raksha Bandhan wishes online?" and does not explain how. |
| adobe.com/express/discover/wishes/raksha-bandhan (competitor) | ~3,505 | H1 + 11 H2/H3; "40 wishes", "how to design wishes", "creative ways to use your wishes" | Buried under a sibling-bond intro | None | No | No | No | **Barely.** `shareable` = 1, in a product line. `whatsapp` 0, `password` 0, `expiry` 0. |
| caratlane.com/blog/happy-rakhi-wishes-quotes-messages/ | ~1,534 | H1 "Top 50 Happy Rakhi Wishes 2026" + 5 wish-category headings, then unrelated jewellery posts | No answer; list from paragraph one | None | No | No | Comment form, no author | **No.** All probes 0 except `forward` = 1. |
| babyorgano.com/blogs/.../happy-raksha-bandhan-wishes-for-everyone | ~2,700 | ToC + 12 audience-segmented H2s (brother, sister, Gen Z, uncle/aunty, kids, colleagues, Hindi) | No answer; list-first | None (`%` = 1, unrelated) | No | No | No | **No.** `shareable link` 0, `password` 0, `expiry` 0. |
| fnp.com/quotes/raksha-bandhan (competitor) | ~4,878 | H1 + 11 headings; "Ideal Formats to Correctly Express your Feelings" → Cards / WhatsApp Messages / Status / Videos | Buried; commercial gift rail first | None | No | Nominal | Yes | **Closest, and still no.** It names four *formats* — card, WhatsApp message, status, video. `shareable link` 0, `microsite` 0, `landing page` 0. |
| greetingsit.com/raksha-bandhan-wishes-quotes-greetings/ | ~7,099 | H1 says "Rakhi 2024" (stale), ToC, 9 wishes H2s, then National Pineapple Day | No answer | None | No | No | No | **No.** All probes 0 except `whatsapp` = 4. |

**Tone across all six:** third person, imperative ("share these with your
brother"), no first person, no numbers, no dates newer than the year in the title.
Two pages carry a stale year in the H1 or title (`Rakhi 2024` on greetingsit;
`2026` on four others three days before Rakhi 2026).

**What the SERP is optimising for:** volume of copyable text. Not one page answers
the mechanical question the query contains — *a link*.

---

## Phase 2 — Gap analysis

**Table stakes** (present on five or six of six, so the post must not look
ignorant of them): wishes for a brother and for a sister; a long-distance variant;
a WhatsApp-status/Instagram-caption use; a Hindi option; the sibling-bond framing.
This post acknowledges them and does not re-list them — the keyword is not asking
for more text.

**The gap.** Nobody covers the **delivery mechanism**. Zero of six pages contain
the string `shareable link`. Zero mention a password, an expiry, revocation, or who
else might be looking at the phone when the thing opens. The query says *link*;
the SERP answers *text*. That mismatch is the whole opportunity.

**Stale data.** There is no data to be stale — five of six pages cite no statistic
at all. The only dated signals are title-years, one of them 2024. Any verified
number is therefore a differentiator, which is unusual and worth stating plainly.

**Unanswered questions raised and dropped.** vyapargrow asks "Can I send Raksha
Bandhan wishes online?" and answers with more copy-paste text. FNP lists "Cards /
WhatsApp Messages / Status / Videos" as formats and never says what happens to any
of them after you send it.

**Fan-out sub-queries** (each becomes an H2 or an FAQ):

1. What *is* a Raksha Bandhan wishes link?
2. What does a link do that a forwarded image does not?
3. How do I send it on WhatsApp so it actually gets opened?
4. Will he need an app?
5. Can I password-protect it?
6. Does it expire? Can I take it back?
7. Can I tell whether he opened it?
8. What if he forwards it to the family group?
9. Is a link better than an image?
10. How early should I make it?

**Angle (recorded as `batchMeta.angle`):** this post wins by being the only page on
this SERP that describes what happens *after* the link is sent — 12.2 average opens
per shared page across 36,202 recorded views — instead of supplying more wishes
text to copy.

**Differentiation from the sibling post.** A concurrent agent is writing
`personalised raksha bandhan website for sibling`. Their subject is the artifact;
mine is the **transport**: the message the link sits in, WhatsApp behaviour,
password before share, revocation, who else sees the screen, whether a forward
gets opened. `content/batches/2026-08-25-rakhi-2027/blogs/` was empty when this
brief was written, so overlap could not be read — the split above is enforced from
my side by keeping every H2 about sending rather than about building.

---

## Phase 3 — Sources

Searched the **phenomenon**, per `references/research-sources.md`:
`link sharing behaviour messaging apps study`, `URL link sharing reshare clicks
academic paper`, `WhatsApp forwarding images India study open access`,
`shared phone use India privacy family ACM`, `capability URL unguessable secret
link`, `ephemeral versus persistent digital artefact HCI revisiting`,
`digital mementos revisiting reminiscence open access`.

Every source below was fetched and the claim verified against the fetched text
(arXiv/Crossref/PubMed APIs and `pdftotext` in the sandbox, because several
publishers block direct fetch).

| # | Source | Verified claim | Published | Test |
|---|---|---|---|---|
| 1 | Nature Human Behaviour — "Sharing without clicking on news in social media" (`10.1038/s41562-024-02067-4`) | Over 35 million public Facebook posts with URLs shared 2017–2020; "shares without clicks" are **around 75% of forwarded links** | 2024-11-19 | Subject ✓ (link-sharing behaviour). **Paywalled — abstract only**, verified via PubMed 39562798; OpenAlex reports `is_oa: false`. Recorded in the audit. |
| 2 | USENIX SOUPS 2018 — Sambasivan et al., "Privacy is not for me, it's for those rich women" | Qualitative study of **199 women** across India, Pakistan and Bangladesh; phones are frequently borrowed and **monitored by close social relations including husbands and brothers**; five performative practices, among them phone and app locks and content deletion | 2018-08-12 | Subject ✓, peer-reviewed ✓, open access ✓ (USENIX PDF, read in full via `pdftotext`) |
| 3 | CHI 2015 — van Gennip, van den Hoven & Markopoulos, "Things That Make Us Reminisce" (`10.1145/2702123.2702460`) | Diary + interview study, 15 adults aged 24–66 (M=39); everyday **physical** objects, locations and repeated activities cued involuntary memories, while **digital items and photos were less frequent stimulants** | 2015-04-18 | Subject ✓, peer-reviewed ✓, open PDF read in full. Used *against* the post's own recommendation. |
| 4 | W3C TAG — "Good Practices for Capability URLs" | A capability URL grants access to anyone holding it; identifiers should be **unguessable, e.g. a UUID**; URLs leak through the `Referer` header, browser history, URL bars, server logs and history-syncing tools; a granter **needs a route to revoke** a leaked URL | 2014-02-18 (First Public Working Draft) | Subject ✓ (the mechanics of a private shareable link). Standards body — explicitly non-competitor. |
| 5 | *Social Media + Society* — Costa, Esteve-Del-Valle & Hagedoorn, "Scalable Co-presence: WhatsApp and the Mediation of Personal Relationships during the COVID-19 Lockdown" (`10.1177/20563051211069053`) | WhatsApp enables experiences of proximity across **different scales of sociality, from one-to-one to large group interactions** — the "scalable co-presence" concept, built on "scalable socialities" and "polymedia" | 2022-02-02 | Subject ✓ (the platform behaviour), peer-reviewed ✓, gold open access ✓ (CC BY 4.0, confirmed via Crossref) |

**Source swap, made after six sibling files had landed.** The fifth slot originally
held arXiv 2407.08172 (Garimella et al., "Global Patterns of Viral Content on
WhatsApp", 2024-06-28), verified via the arXiv API. A recount across
`content/batches/2026-08-25-rakhi-2027/blogs/` showed **arxiv.org already at 6 of
the written posts** — twice the domain cap — so it was dropped and replaced with
Costa et al. That source is a better fit anyway: "one-to-one to large group
interactions" is the mechanism behind 12.2 opens per page, which the arXiv paper
only gestured at. `journals.sagepub.com` was at 0 in the batch before this post.

**Rejected, and why.** arXiv 2005.09784 (WhatsApp images in Indian political
groups) — the widely-quoted "80% of images posted only once" is not in the
abstract, and I would not cite it from memory. `inria.hal.science/hal-05324936`
("A Study into User Behaviour Toward Shared Links", 111 MIM users) — exactly on
point but Cloudflare-blocked on every route tried, so unverifiable and dropped.
JCMC `zmac019` on digital-possession affordances — 403. dl.acm.org fullHtml for
the Bangladesh shared-phone CHI paper — 403.

**Zero government or generic-context sources.** None of drikpanchang.com,
indiapost.gov.in, pib.gov.in or trai.gov.in appears. No subscriber count, no
census figure. The context budget of one was not spent.

**Batch caps.** Recounted against all 10 files present after the swap: every one of
this post's five URLs and five domains (`nature.com`, `usenix.org`,
`materialisingmemories.com`, `w3.org`, `journals.sagepub.com`) is at **count 1**.
Zero overlap with any sibling's source list. Three of the 47 posts were still
unwritten, so the final count belongs to the orchestrator.

**Sibling overlap check.** `personalised-raksha-bandhan-website-for-sibling.json`
was read after it landed. Its sources (`ovid.com`, `sciencedaily.com`,
`frontiersin.org`, `pmc.ncbi.nlm.nih.gov`) are disjoint from mine. Its H2s are
about the artifact — what goes on the page, six things a sibling page needs, why
creators lock it. The one real overlap is the 44.2% password figure, which it gives
a whole H2 and I give one H3 beat plus a revocation argument it does not make. Mine
stays on transport throughout: the message the link sits in, forward-versus-open,
capability-URL leakage and revocation, and who else is holding the phone.

---

## First-party facts used

Verbatim from `content/facts.md` (regenerated 2026-08-25):

- `36,202 recorded views of shared pages — measured 2026-08-25` — **primary, leads the answer paragraph**
- `Average views per created page: 12.2 — measured 2026-08-25` — **primary**
- `51.1% of shared pages are opened on a phone (18,497 of 36,202 views) — measured 2026-08-25`
- `44.2% of creators password-protect their page before sharing it (1,315 of 2,973) — measured 2026-08-25`
- `99.4% of started pages are actually published and shared (2,956 of 2,973) — measured 2026-08-25`
- `2,973 personalised pages created since 2026-03-12, across 15 page types — measured 2026-08-25`
- `Median gap between a page's first save and its last edit: 6.9 hours — sampled on "I love you" page (/love-gf), n=931 — measured 2026-08-25`

**The honest limit, per the batch brief.** `rakshabandhanpages` holds 3 documents
and rakhi templates account for 39 of 36,202 views (0.1%). **No statistic is
computed from n=3 anywhere in this post.** Where rakhi template usage is mentioned
at all, the post says the template is new and lightly used. Every number above is
platform-wide, which is a genuine weakness and is recorded in
`auditReport.failed`, not dressed up as a rakhi finding. It is, however, a closer
fit here than on most keywords in this batch: 12.2 opens per page, 51.1% mobile
and 44.2% password-protection all describe *link behaviour*, which is precisely
what this keyword asks about.

---

## Timing

Rakhi 2027 is **Tuesday 17 August 2027**; Rakhi 2026 was Friday 28 August 2026,
three days after this batch. The keyword is evergreen, so the title carries no
year and the body names 2027 once, in a re-datable sentence rather than a news
frame.
