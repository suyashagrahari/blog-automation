# Research brief — `rakhi 2027 wishes for sister`

- **Slug:** `rakhi-2027-wishes-for-sister` — checked against Strapi on 2026-08-26, `total: 0`, free.
- **Batch:** `2026-08-25-rakhi-2027`
- **Category:** `indian-festivals`
- **Templates:** `/happy-rakshabandhan-to-sister` (primary — recipient matches), `/templates`
- **Source lane:** F (media & data), then D (publisher-native OA)

---

## Phase 0 — Data gate

`content/facts.md` was refreshed 2026-08-25 (17 facts). **There is no rakhi-specific
first-party data and none was manufactured.** Direct DB counts recorded in `BRIEF.md`:
`rakshabandhanpages` = 3 documents, `rakshabandhansisterpages` = 3, rakhi template
views = 39 of 36,202 (0.1%). n=3 supports no rate, no percentage and no "most creators"
claim, so no rakhi statistic appears anywhere in this post.

What is used instead is platform-wide behaviour, which applies to a rakhi page as much
as any other. Assigned primary fact for this keyword: **2,973 personalised pages created
across 15 page types, by 2,466 registered creators**, leading the first 150 words.

Supporting facts used: 99.4% published-and-shared (2,956 of 2,973), 51.1% opened on a
phone (18,497 of 36,202), 44.2% password-protected (1,315 of 2,973), 12.2 average views
per created page, 36,202 recorded views.

This is recorded as a failure in `auditReport.failed`, per `BRIEF.md`. Condition that
would close it: rakhi template usage above ~500 pages, then re-query.

---

## Phase 1 — SERP

**The sanctioned tool was unavailable.** The session's `WebSearch` budget was exhausted
(200 of 200) before this post's Phase 1 began, so the full five-page teardown the skill
asks for could not be run. This is recorded in `auditReport.failed`.

Substitute evidence — a direct Bing `en-IN` fetch, read as HTML, nothing fetched from
any competitor page and nothing cited from one:

| Query | What came back |
|---|---|
| `rakhi 2027 wishes sister` | Myntra, IGP, Flipkart, Amazon.in, rakhi.in, FNP, rakhibazaar, GIVA, Winni — **all rakhi e-commerce, all competitors under `references/competitors.md`.** Not one wishes page. Not one dated 2027. |
| `raksha bandhan 2027 wishes` | Wikipedia (`Raksha Bandhan`), ganeshaspeaks (**2026**), firstcry parenting (**2026**), astroyogi (**2026**), shubhpanchang, Britannica (**2026**), oneindia (**2026**) |
| `raksha bandhan 2027 date` | calendardate.com, dekhopanchang, shrimahalaxmicalendar, **publicholidays.in**, **samvat.in**, drikpanchang — panchang and calendar pages, correctly dated, none competing for wishes intent |

This independently confirms the orchestrator's finding: **Google and Bing are both
serving last cycle's pages, because 2027 wishes content does not exist.** The `2027`
SERP is held by panchang/calendar pages (which answer "what date", not "what do I
write") and by gifting retailers (which answer "what do I buy").

### Table stakes visible from titles and snippets

Date and tithi; the brother/sister framing; a list of lines; a "history and
significance" block; muhurat timing.

### Format read

Every result is either a product listing page or a date/panchang page. No result in
either SERP is a dated wishes article addressed from a brother to a sister.

---

## Phase 2 — Gap analysis

**The gap.** Three things, none of which any incumbent has:

1. **A page that is actually titled and dated 2027.** The year gap is the structural
   opportunity and it is verified twice over above.
2. **The weekday problem.** Rakhi 2027 is **Tuesday 17 August 2027**, and it is a
   gazetted public holiday in **only nine states and UTs** — CG, DD, DN, GJ, HR, MP,
   RJ, UK, UP. In Mumbai, Bengaluru, Hyderabad, Chennai, Kolkata and Delhi it is a
   working day. A festival you have to observe from a desk is a different practical
   problem from a weekend one, and no incumbent mentions it at all.
3. **The brother-to-sister direction.** The default rakhi framing runs sister → brother.
   This page is the return half, written by the brother.

**Stale data.** Every competing page is dated 2026 or earlier. The whole SERP is stale
by definition; that is the opportunity.

**Fan-out sub-queries → H2s and FAQs.** When is rakhi 2027 · is it a holiday · what does
a brother write · one-line wishes · what time to send on a workday · sister abroad ·
younger brother · her first rakhi after marriage · when is rakhi 2028 · can I reuse the
message · do I need a gift too.

**Angle (recorded as `batchMeta.angle`):** wins by being the only rakhi 2027 wishes page
written from the brother's side to his sister that treats Tuesday 17 August 2027 as a
working weekday — naming the nine states where it is gazetted and the rest of India where
it is not — and is built to be re-dated for Saturday 5 August 2028 rather than rewritten.

---

## Differentiation vs the two 2027 siblings and the sister posts

Read before drafting: `raksha-bandhan-2027-wishes`, `raksha-bandhan-2027-quotes`,
`happy-raksha-bandhan-wishes-for-sister-from-brother` (2026-08-13),
`raksha-bandhan-wishes-for-sister-from-sister` (2026-08-19-rakhi-3),
`rakhi-messages-for-sister-from-brother` (2026-08-19-rakhi-4).

| Post | Its axis | How this one differs |
|---|---|---|
| `raksha-bandhan-2027-wishes` | Grouped by **recipient** across all six sibling types; leads on 36,202 views / 12.2 per page | Single recipient (sister), single sender (brother); leads on 2,973 pages / 15 types / 2,466 creators. Shares only the date fact, which is the uncapped festival reference. |
| `raksha-bandhan-2027-quotes` | **Quote vs wish** — portable, unaddressed lines for captions; leads on 44.2% password-protect | Addressed messages, not portable lines. Only entry 7 touches captions, and it defers rather than expanding. |
| `happy-raksha-bandhan-wishes-for-sister-from-brother` | 2026 muhurat window; reply-script for when she messages first | No muhurat, no reply-script. Organised by **where you physically are at 10am on a working Tuesday**, not by relationship situation. |
| `raksha-bandhan-wishes-for-sister-from-sister` | Sender is a **sister**; no brother in frame | Sender is a brother. No overlap in either sender or framing. |
| `rakhi-messages-for-sister-from-brother` | Graded by **how much the brother will write** (four words → paragraph) | Graded by **circumstance and clock**, not by writing appetite. Different sort key on the same audience — the closest sibling, and the reason entries 4 and 5 avoid the "how much to write" axis entirely. |

**Verdict:** a real third 2027 page. The dated 2027 framing plus the nine-state holiday
map is unique in the corpus, and no existing SubhSandesh post mentions the weekday at all.
The closest overlap is `rakhi-messages-for-sister-from-brother`, which shares the audience
but sorts by effort rather than by circumstance and carries no date.

---

## Phase 3 — Sources

Lane F first, then D. Lane F's listed outlets (`theweek.in`, `sciencedaily.com`,
`themarkup.org`, `pewresearch.org`, `statista.com`, `lokniti.org`) produced nothing
genuinely about a brother writing to his sister on a dated weekday festival, so the
scholarly half came from lane D. Every one was fetched and read; the two PDFs were
extracted with `pdftotext` and the claims read in place.

| # | Source | Domain | Lane | Verified claim |
|---|---|---|---|---|
| 1 | [Raksha Bandhan 2027 — Samvat](https://samvat.in/festivals/raksha-bandhan-2027/) | samvat.in | date ref (uncapped) | "Raksha Bandhan 2027 … is on Tuesday, 17 August 2027. It falls on Shukla Purnima, Shravana." **2nd and final use in this batch.** |
| 2 | [Raksha Bandhan 2026, 2027 and 2028 — PublicHolidays.in](https://publicholidays.in/raksha-bandhan/) | publicholidays.in | F | Table row: `2027 · 17 Aug · Tue · Raksha Bandhan · CG, DD, DN, GJ, HR, MP, RJ, UK & UP`. 2028 row: `5 Aug · Sat`. No publication date on the page — `publishedDate` omitted. |
| 3 | [Kinkeeping Across Families](https://repository.tilburguniversity.edu/bitstreams/d63cf819-161d-4929-b7ce-a4c8ca4ed3a4/download) — Hornstra & Ivanova, *Sex Roles* 88(7–8), 367–382, 2023-04-04 | repository.tilburguniversity.edu (Springer VoR) | D | "A kinkeeper is the person within the household that is involved in the management of family relationships, a position traditionally fulfilled by women." Kinkeeping operationalised as buying presents, organising outings, relaying family news, discussing problems. OKiN survey, N=746 intact + N=982 mother-stepfather + N=1,010 father-stepmother families. "Substantial gaps were found between mothers and fathers." |
| 4 | [Intergenerational Solidarity and Support Between Adult Siblings](https://pure.rug.nl/ws/files/2758018/VoorpostelM-Intergenerational-2008.pdf) — Voorpostel & Blieszner, *JMF* 70(1), 157–167, 2008 | pure.rug.nl (Wiley VoR) | D | "Dutch national sample containing 1,259 triads (two siblings, one parent)." "58% of the siblings were sisters, sister-sister dyads were most common (37%)." "Women … were also more likely to exchange emotional support, but only with sisters, as is shown by the significant interaction effect." |
| 5 | [Have Mobile Devices Changed Working Patterns in the 21st Century?](https://eprints.lse.ac.uk/84051/1/Work%20extension%20and%20mobile%20devices%20Final.pdf) — Mullan & Wajcman, *Work, Employment and Society*, 2017-10-26 | eprints.lse.ac.uk (SAGE, accepted version) | D | "5.3% of employed individuals 16-64 years reported work extension on a workday in 2000, which increased to 7.9% in 2015." "on average, close to 50% of reported work time was carried out while also using a [device]." |

**Publisher-native URLs could not be used.** `journals.sagepub.com`,
`link.springer.com` and `onlinelibrary.wiley.com` all return HTTP 403 or a JavaScript
challenge to every fetcher available here, so each citation points at the open-access
copy that was actually read. Sources 3 and 4 are publisher versions of record; source 5
is the author's accepted manuscript, which is recorded in the audit.

**Bans respected.** No `arxiv.org`, `pmc.ncbi.nlm.nih.gov`, `frontiersin.org`,
`aclanthology.org`, `doi.org`, `europepmc.org`, `journals.plos.org`,
`digitalcommons.usu.edu`, `drikpanchang.com`, `indiapost.gov.in`, `pib.gov.in`,
`trai.gov.in`. **Zero** government/context sources used (budget was 1). Zero competitor
links. Zero Wikipedia links in the body — Wikipedia appears only as `sameAs` in
`structuredData`, which is uncounted.

**Domain headroom after this post:** samvat.in URL 2/2 (full), publicholidays.in 1/3,
repository.tilburguniversity.edu 1/3, pure.rug.nl 1/3, eprints.lse.ac.uk 1/3.

### Swap test — failed honestly

Three of five would survive a swap into a sibling keyword's post. Sources 3 and 4 are
about siblings and kin work generally; source 5 is UK time-diary data about work
extension, the closest thing that exists to the weekday problem but not about greetings.
Only sources 1 and 2 are locked to this post's specific claim.

Search terms tried that returned nothing usable, across Crossref, OpenAlex, DOAJ and
Bing: `festival falls on working day India office greeting`, `greeting message ritual
obligation reciprocity festival digital India`, `brother sister communication frequency
adulthood gender`, `personal smartphone use during work hours employees non-work
messaging`, `India festival celebration workplace leave holiday employees`, `weekday
weekend differences in social contact time use survey`, `sister brother sibling ties
gender differences contact who keeps in touch`. This matches the batch-wide finding in
`SOURCE-ALLOCATION.md`: **there is no distinct body of research on Indian festival
greeting behaviour by weekday.**

---

## Phases 4–7 — build notes

- Body 1,781 words, FAQs excluded. 1 H1, 8 H2s (incl. Sources), 7 H3s.
- 12 FAQs, in `article.faqs` only — none in `contentMarkdown`.
- Comparison table: 4 rows × 4 columns; the first-party column carries real values on the
  page row and honest nulls on the other three, because a forward genuinely leaves no
  record.
- 3 internal links, both destinations from `TEMPLATE_LINKS`, all placed after the seven
  wishes establish why a page would be wanted.
- `structuredData`: one `@id`-matched `BlogPosting` enrichment on `#post` (about ×1,
  mentions ×3, citation ×5 mirroring `batchMeta.sources` one-to-one) plus one `ItemList`
  of 7 mirroring the H3s in order. All four Wikidata QIDs verified against the Wikipedia
  API: Raksha Bandhan Q10266, Sibling Q31184, Public holidays in India Q927083,
  Purnima Q3635662.
- Audit: 49 passed, 1 checklist failure (swap test), 3 additional failures recorded above
  and beyond the checklist. `passed ∩ failed = ∅`; `|passed| + |checklist failed| = 50`,
  the checklist length.
