# Research brief — `rakhi-wishes-for-brother-in-the-army`

- **Keyword:** rakhi wishes for brother in the army
- **Batch:** `2026-08-19-rakhi-3` (third rakhi batch; 19 rakhi posts already on disk)
- **Intent:** Informational, blog asset type. Fresh keyword, not from the original sheet.
- **Slug checked against Strapi 2026-08-19:** `filters[slug][$eq]=rakhi-wishes-for-brother-in-the-army` returned `data: []` — free.
- **Phase 0:** skipped as instructed. `content/facts.md` generated 2026-08-18 was read and used verbatim.

## Sibling files present in this batch when I checked (2026-08-19)

Three, all read for source overlap:

| Slug | categorySlug | Source domains already taken |
|---|---|---|
| `make-raksha-bandhan-card-online-with-name` | `festive-beats` | hbs.edu, research.google.com, englelab.gatech.edu, wu.ac.at, ics.uci.edu |
| `raksha-bandhan-wishes-in-bengali` | `festive-beats` | ccsenet.org, questjournals.org, en.banglapedia.org, w3.org, unicode.org |
| `celebrate-raksha-bandhan-siblings-different-cities` | `family-and-continuity` | demographic-research.org (×2), pib.gov.in (×2), newsonair.gov.in |

Consequences for me: **`pib.gov.in` is exhausted** (2 uses already, and the batch cap is 2), so I took
zero PIB. `newsonair.gov.in` had one use, so I could take exactly one — I did. Every other domain I
use appears in none of the 29 posts across the three rakhi batches.

## Phase 1 — SERP analysis

Searched `rakhi wishes for brother in the army`, plus `send rakhi to soldiers campaign address army
post office APO`. There is no AI Overview stable enough to record and no featured snippet on the
head query; the results split into two clusters, neither of which is about your own serving brother.

| Page | Words | Structure | Where the answer is | Data cited | Format | Tone | Actually optimising for |
|---|---|---|---|---|---|---|---|
| igp.com `/blog/send-rakhi-indian-soldiers/` | ~1,025 | H1 + 2 H2s + 4 H3 steps, then a related-posts wall | Step list starts ~30% in, after a "why you should" section | None. No date on any claim | No table, no FAQ schema, no author byline | Third person, exhortative ("Why Should You Send Rakhi to Indian Soldiers?") | Rakhi product sales via a logistics how-to; the "soldier" is anonymous, not your brother |
| floweraura.com `/blog/how-to-send-rakhi-to-indian-army-soldiers` | ~1,235 | Single H1, no H2s at all; body is unstructured prose, then 15 unrelated H3/H4 recommendation cards | Buried; no extractable answer block | Mentions "56 A.P.O." without sourcing it | No table, no FAQ schema | Third person, promotional | Same job as IGP, worse structure |
| rakhibazaar.com `/blog/how-to-send-rakhi-to-indian-army-soldiers-rakhi-bazaar/` | ~1,072 | H1 + 2 H2s + 4 numbered H2 steps | Steps at ~35% | Mentions "56 A.P.O."/"99 A.P.O." unsourced | No table, no FAQ schema; has an author byline | Third person instructional | Rakhi sales; the closest thing to a genuine how-to in the set |
| highclap.com `/happy-raksha-bandhan-wishes-quotes-captions/` | ~2,153 | H1 + 13 H2 buckets, one of them "Raksha Bandhan Wishes For Indian Army" | No answer at all; it is a list from line one | None; images still labelled "Raksha Bandhan 2022" | No table, no FAQ schema | Second person, sentimental | Volume of quotable lines across every rakhi long-tail at once |
| caratlane.com `/blog/happy-rakhi-wishes-quotes-messages/` | ~1,534 | H1 + 1 H2 + 4 H3 buckets incl. "Long-Distance Happy Rakhi Wishes" | List from the top | None | No table, no FAQ schema; skips H2→H4 | Warm second person | Jewellery sales; army case not covered at all |
| parenting.firstcry.com `/articles/raksha-bandhan-messages-quotes-and-wishes/` | ~4,331 | H1 + 7 H2 buckets, incl. long-distance brother and sister | List from the top | None | No table, no FAQ schema | Second person, generic | Breadth; the word "army" does not appear |

Cross-page observations worth recording:

- **Zero tables and zero FAQPage schema across all six pages.** Not one carries a `<table>` element
  and not one emits FAQ markup.
- **Two clusters, both wrong for the query.** Cluster A (IGP, FlowerAura, Rakhi Bazaar) answers
  "how do I send a rakhi to an anonymous soldier" — a campaign, not a sibling. Cluster B (HighClap,
  CaratLane, FirstCry) answers "give me lines", and where it acknowledges the army at all it is a
  block of patriotic slogans addressed to soldiers in general.
- **Nobody addresses the sister whose own brother is serving.** The practical facts of that
  situation — that he may be unreachable without notice, that his address is a unit and an A.P.O.
  number, that he may be forbidden from posting a reply — appear nowhere.
- **The "56 A.P.O." claim is repeated without a source** on at least three pages, which is exactly
  the kind of unverified assertion this brief was told not to make.

## Phase 2 — Gap analysis

**Table stakes** (must be present or the post looks incomplete): worked messages for a brother in
the forces; some acknowledgement of distance; how to get a physical rakhi to him; something about
what to say when he cannot be there.

**The gap** — none of the six pages covers:

1. **Reachability as the organising axis.** Every competitor groups by sentiment (heartfelt, funny,
   emotional) or by relation. Nobody groups by whether he can actually reply, which is the only
   variable that changes what the message should do.
2. **Communication restrictions as a real constraint.** The Indian Army's December 2025 social-media
   advisory permits Skype, WhatsApp, Telegram and Signal only for unclassified information of a
   general nature and only with known persons, and permits YouTube, X, Quora and Instagram for
   passive viewing with uploading of user-generated content prohibited. No competitor mentions it.
   It is the reason a text-only message is a better bet than a link, and the reason he may read your
   post and be unable to reply under it.
3. **Operational security as the sister's problem, not just his.** No page tells the reader not to
   name his unit, station or movement in a public caption.
4. **The address rule, sourced.** The competitors assert "56 A.P.O." and stop. India Post's own Post
   Office Guide Part I states the required particulars (No., Rank, Name, Unit) and that such mail is
   addressed to 56 A.P.O. or 99 A.P.O. **without any post town** — and separately that
   value-payable articles and money orders are not booked to Army Post Office addresses. That last
   line is a genuinely useful, entirely unreported constraint: no cash-on-delivery gift to an A.P.O.
5. **The hard cases.** The year he cannot reply at all, tying a rakhi to a photograph, and sending a
   rakhi to a soldier who is not your brother — the first two appear on none of the six pages, and
   the third appears only as a sales campaign.

**Stale data:** nothing to supersede, because no competitor cites data at all. HighClap still ships
"Raksha Bandhan 2022" image labels, which is a freshness signal against it rather than a statistic
to replace.

**Unanswered questions the pages raise and drop:** how long does A.P.O. mail actually take (none
say); what happens if he never replies (none say); can he even post a photo of the rakhi (none say);
what do you write when he died (none say).

**Fan-out sub-queries → H2/FAQ targets:** what is a field posting; can I send a rakhi to my brother
in the army; what is 56 APO; how do I address a letter to an army unit; why is my brother not
replying; what if he cannot call on rakhi; is it safe to post about my brother in the army; what do
I say instead of stay safe; can I tie a rakhi to a photo; how do I send a rakhi to a soldier who is
not my brother.

**Angle (recorded verbatim in `batchMeta.angle`):** wins by being the only post that groups the
message by whether he can reply — in contact, intermittent, unreachable — and by sourcing the
A.P.O. addressing rule to India Post's own Post Office Guide instead of asserting it, alongside
SubhSandesh's 51.9% phone-open and 44.3% password-protect rates as the reason a text beats a link
when bandwidth is the constraint.

## Phase 3 — Sources

Research lane held: **military family separation and deployment communication**. Searched the
phenomenon, not the keyword: `deployment communication frequency military families separation
study`, `Indian Army soldiers families separation psychological study`, `Medical Journal Armed
Forces India separation from family stress soldiers`, `arro.anglia.ac.uk military families
separation scoping review`.

Five sources, all fetched and verified in the text:

1. **India Post — Post Office Guide Part I** (`indiapost.gov.in/documents/documents/ManualsGuides/PO_Guide_Part-1.pdf`).
   Clause 27, "Mails for Defence Services Personnel serving in the Army and Air Force": the address
   must always carry No., Rank, Name, Unit, and "Such mails should be addressed to 56 A.P.O., 99
   A.P.O, etc. without the addition of any post town." Clause 28 covers Navy personnel on I.N.S.
   ships via the Fleet Mail Office. A separate note in the same guide: "Value-payable articles and
   money orders will not be booked to the address of Army Post Offices," and registered articles to
   and from Army Post Offices may be insured only up to ₹500 each. Verified by extracting the PDF
   text and reading the surrounding clauses, not from a search snippet. The guide carries no
   publication date on the page, so `publishedDate` is omitted.
2. **Indian Army — Army Postal Service Corps home page** (`indianarmy.nic.in/about/the-corps-of-engineers/aps-home-army-postal-service-corps`).
   Verified: APS provides India Post's mail and remittance services to armed forces personnel
   serving in India and on UN missions, including post cards, inland letters, envelopes, book
   packets, parcels, registered and insured letters plus Speed Post, and runs a Scheduled Dispatch
   Service for official armed-forces correspondence through **373 Field Post Offices**. Note: the
   server returned the Hindi rendering of the page and the English toggle would not take through a
   scripted cookie exchange, so the 373 FPO figure and the service list were read from the Hindi
   text ("अपने 373 एफ पी ओ के माध्यम से"). Recorded here because it is a limitation of my
   verification, not of the source. Undated page, so `publishedDate` omitted.
3. **Akashvani / News on AIR, 25 December 2025** — "Army issues advisory on use of social media to
   its personnel for responsible online behaviour". Verified in the body: Instagram access for
   viewing and monitoring only, no comments or views to be communicated; Skype, WhatsApp, Telegram
   and Signal permitted for the exchange of unclassified information of a general nature, restricted
   to known persons, with the user responsible for correctly identifying the recipient; on YouTube,
   X, Quora and Instagram only passive participation, with uploading of any user-generated content,
   messages or posts prohibited; LinkedIn for resumes only. This is the single domain I share with a
   sibling post in this batch, taking it to the cap of 2.
4. **Ohlsson, Nilsson & Larsson (2024), Journal of Veterans Studies 10(1)** —
   "Social and Psychological Support for Military Personnel and Their Families in Connection with
   Military Deployment: A Scoping Review and Thematic Analysis", pages 160–172, published
   2 May 2024 under CC BY 4.0. Peer-reviewed, fully open access, full text read. Verified: 24 articles met the inclusion criteria; the two main themes are
   family-based and couple interventions; findings concentrate on parenting and couple support with
   a focus on communication and reintegration; the literature is "limited, especially literature
   outside of North American military populations". Load-bearing for an honest claim I could not
   make otherwise: deployment-support research is about spouses and children, and **siblings are
   effectively absent from it**.
5. **Sivasubramanian & Rajandran (2017), International Journal of Management 8(1), 145–151** —
   "A Study on Effect of Family Separation on Stress Level of Soldiers Deployed in Rajasthan Sector
   of Indian Air Force". Open PDF, full text read. Verified from Table 2: convenience sample of
   n=80 male IAF personnel in frontier field units; on "separation induces higher stress level",
   24 (30%) strongly agreed and 49 (61.2%) agreed — 91.2% agreement. Also lists feelings of
   isolation and loneliness and worries about relatives' health among the contributing factors.
   Cited **with** its sample size and convenience-sampling caveat stated in the body, because an
   n=80 convenience sample from one sector should not be presented as a national figure.

**Rejected, and why:**

- `rand.org` Deployment Life Study research brief (RB9906) — **HTTP 403**, could not fetch, so not
  cited.
- Wood et al. (2023), *New Media & Society*, "Social media and Internet-based communication in
  military families during separation: an international scoping review" — the best-matching study in
  the field. Only reachable via SAGE, and `doi.org` is banned for this batch anyway; no open version
  found on the Anglia Ruskin repository or elsewhere. Not cited, not paraphrased.
- `tandfonline.com` "Blurred lines: intimacy, mobility, and the social military" — **HTTP 403**.
- `link.springer.com` Kumar & Bhukar-style Indian military adolescent study (10.1007/s12646-013-0224-8)
  — bot challenge page returned, abstract not readable, so not cited.
- `pmc.ncbi.nlm.nih.gov` "Building psychological resilience among families of service personnel" —
  domain banned for this batch.
- `pib.gov.in` — already at the batch cap of 2 from a sibling post. Took zero generic context
  statistics as a result, which is the desired outcome rather than a loss.
- Every SERP page above. All six are competitors under `references/competitors.md`; analysed, never
  cited, never linked, and their unsourced "56 A.P.O." assertion was independently verified against
  India Post's own guide rather than borrowed.

**Source test results:** subject test passed by 1, 2, 3, 4 and 5 (all five are about forces mail,
forces communication rules, or military family separation specifically). Peer-reviewed and open
access: 4, plus 5. Generic context statistics (PIB/TRAI/Census/MEA): **zero**. Swap test: none of the
five could sit unchanged in the Bengali-wishes, name-card or different-cities posts in this batch.

## First-party facts used

- 51.9% of shared pages are opened on a phone (16,952 of 32,683 views) — measured 2026-08-18
- 44.3% of creators password-protect their page before sharing it (1,205 of 2,718) — measured 2026-08-18
- Average views per created page: 12.0 — measured 2026-08-18
- 2,718 personalised pages created since 2026-03-12, across 13 page types — measured 2026-08-18

Stated limitation, carried into `honestAssessment`: rakhi is **not** one of the 13 measured page
types, so there is no rakhi-specific first-party number and the post does not imply one. The
platform-wide figures are used only for what they prove — how a shared page behaves once it is sent.

## Lane discipline

Stayed inside military family separation and deployment communication. Did not touch
form-abandonment or the IKEA effect, text legibility, internal migration within India, Bengali
festival history or Tagore, sister-to-sister ritual, in-law relationships, blended families, or
caption brevity. Read
`content/batches/2026-08-18-rakhi-2/blogs/rakhi-message-for-brother-far-away-in-another-country.json`
first: it owns the diaspora case, segmentation by years away, and the "when are you coming home"
question, and none of its four sources, its H2 order or its framing appears here. Overlap is limited
to the unavoidable shared premise that the brother is not in the room.

## Fact-checks (not citations)

- Raksha Bandhan 2026 is **Friday 28 August 2026**. The post states the date once and no muhurat
  time, so per the checklist it stays out of `sources` and out of `citation`.
- Wikidata QIDs verified against the Wikipedia API on 2026-08-19 in one call: Raksha Bandhan
  Q10266, Indian Army Q355771, India Post Q3519720, Field post office Q17130743, Operational
  security Q461910 (via redirect from "Operations security"), Sibling Q31184. "Army Postal Service
  Corps" returned `missing` and was therefore **not** used as an entity.
- Live Strapi category slugs confirmed; `family-and-continuity` chosen because the post is about the
  relationship and its constraints rather than the festival.

## Output

- Body 1,798 words by plain whitespace split, FAQs excluded (they live only in `article.faqs` and
  the FAQPage the renderer builds). One H1, eight content H2s plus a Sources H2, three H3s.
- 11 FAQs, 5 `keyTakeaways`, one 5-row comparison table whose fourth column carries the first-party
  and official figures.
- 5 outbound links (all five sources, all fetched) and 2 internal links, both from `TEMPLATE_LINKS`.
- `structuredData`: one `@id`-matched enrichment block on `<canonicalURL>#post` carrying `about`,
  four `mentions` and `citation` mirroring all five sources, plus one `ItemList` of the three H3s in
  order. No renderer-built type without a matching `@id`; no `AggregateRating`, `Review` or `HowTo`.
- Audit: 49 of 50 checklist items passed, asserted disjoint from `failed` and summing to 50. The one
  failure is "Slug short, hyphenated, lowercase, no stop words" — the slug mirrors the exact keyword
  and therefore carries "for", "in" and "the", and it was fixed by the batch instruction after being
  verified free in Strapi.
