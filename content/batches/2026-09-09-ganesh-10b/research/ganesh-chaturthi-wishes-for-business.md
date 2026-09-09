# Research brief — `ganesh-chaturthi-wishes-for-business`

Primary keyword: **ganesh chaturthi wishes for clients**
Folds in: `corporate ganesh chaturthi message`, `ganesh chaturthi wishes for employees`,
`ganesh chaturthi wishes for colleagues`, `ganesh chaturthi wishes for boss`
Batch: `2026-09-09-ganesh-10b` (Wave 3, post 14). Category: `indian-festivals`.
Research field, mine alone: **organisational communication** — festival greetings at work,
professional register, religion in the workplace, inclusive communication in multi-faith teams.

Slug verified free in Strapi on 2026-09-09:
`https://strapi.subhsandesh.in/api/articles?fields[0]=slug&filters[slug][$eq]=ganesh-chaturthi-wishes-for-business`
→ `{"data":[],"meta":{"pagination":{"total":0}}}`.

---

## Phase 0 — data gate

`content/facts.md` regenerated 2026-09-08. **Zero Ganesh-specific facts exist** — the
`/happy-ganesh-chaturthi` template has created no pages. Per BRIEF.md, every first-party
number here is **platform-wide across 15 page types** and is captioned that way in the
sentence nearest the claim. The gate is satisfied on that basis; four platform-wide facts
are used:

- 49.6% of shared pages are opened on a phone (22,667 of 45,656 views) — measured 2026-09-08
- 42.1% of creators password-protect their page before sharing it (1,625 of 3,860) — measured 2026-09-08
- 96.1% of started pages are actually published and shared (3,708 of 3,860) — measured 2026-09-08
- Average views per created page: 11.8 — measured 2026-09-08

The 42.1% password figure and the 11.8-views average are the two that do real work here:
both describe a **one-to-one** artefact, which is exactly the argument against bulk-sending
a personalised page to a client list.

## Phase 1 — SERP analysis

Searched `ganesh chaturthi wishes for clients corporate message` and
`"ganesh chaturthi wishes for employees" OR "ganesh chaturthi wishes for colleagues" office`.
Every page below was fetched in full and measured on 2026-09-09.

| # | Page | Words | Structure | Direct answer? | Data cited | Schema | Tone | Optimising for |
|---|---|---|---|---|---|---|---|---|
| 1 | bestmessage.org — wishes to customers and clients | 698 | H1 + 4 H3 blocks of message strings | No — 2 lines of setup then a list | None | **None at all** | Third person, imperative, hedged | Long-tail "wishes to clients" copy-paste |
| 2 | bestmessage.org — wishes/messages for business | 637 | H1 + 2 H3 blocks | No | None | None | Same | Copy-paste |
| 3 | bestmessage.org — wishes for employees | 700 | H1 + 3 H3 blocks, one Hindi | No — and states the festival is **"27th August 2025"** | None | None | Same | Copy-paste |
| 4 | artboxsolutions.com — corporate wish ideas | 767 | H1, no H2s; article body is one run of prose | No | None | None | Brand-voice listicle | Selling corporate hampers (competitor — not cited, not linked) |
| 5 | library.changeengine.com — Ganesh Chaturthi, all employees | 1,112 | H1 + "How to celebrate Ganesh Chaturthi at work" + "Inspiration from other companies" | Partly | None | None | HR-comms marketing | Selling an employee-comms template library (competitor — not cited, not linked) |

Observations that decided the angle:

- **Median 700 words. Not one of the five emits a single JSON-LD `@type`.** No FAQ block,
  no author byline, no table, no source, no date on any claim.
- Three of the five are the same domain, published on the same day (22 August 2023), and
  one of them still carries a **2025 date for a 2026 festival**. Superseding a stale date is
  the cheapest citation win available on this SERP.
- Four of the five are message-string dumps. None asks who the recipient is, whether they
  celebrate, or whether the sender outranks them.

## Phase 2 — gap analysis

**Table stakes** (must be present or the post looks incomplete): actual usable message text;
the 2026 date; a client variant, an employee variant, a colleague variant, a boss variant;
the "may Bappa remove obstacles" idiom, which every page uses and readers expect.

**The gap — four things none of the five even mention:**

1. **Religious neutrality.** Not one page acknowledges that a recipient may not be Hindu,
   or that a company-wide religious greeting is an organisational act with a downside.
2. **Register by hierarchy.** All five write the same voice for a boss, a report and a
   client. There is measured research showing workplace register genuinely varies by status
   — and varies in the opposite direction to the intuition these pages assume.
3. **The bulk-vs-personal line.** Nobody says which greeting scales and which does not.
   This is where the honest "SubhSandesh is the wrong tool" section lives.
4. **Whether 14 September is a working day.** A practical constraint every sender needs and
   nobody answers.

**Stale data:** the "27th August 2025" date on page 3.

**Unanswered questions the pages raise and drop:** "send a personalised message" (how, to
400 people?); "use your corporate social channels" (what does that do for a client
relationship?); "a video from your team" (who edits it, and by when?).

**Fan-out sub-queries → H2 map:**

| Sub-query | Becomes |
|---|---|
| what do I send clients on ganesh chaturthi | Answer paragraph |
| how is a work greeting different from a personal one | H2 — definition block |
| ganesh chaturthi message for client / employees / colleagues / boss | H2 with 5 H3s (mirrored as the `ItemList`) |
| what if my client isn't hindu | H2 — greeting without assuming |
| should the company send an all-staff festival message | H2 — when it reads as performative |
| can I send the same page to my whole client list | H2 — where SubhSandesh is the wrong choice |
| is ganesh chaturthi a holiday / is the office open | H2 — holiday status |

**Angle (→ `batchMeta.angle`):** wins by being the only post that treats a workplace Ganesh
Chaturthi greeting as an organisational-communication problem — register by relationship,
religious neutrality in a multi-faith team, and the line between a personal send and a bulk
one — instead of a list of message strings, and the only one that prices the bulk question
with SubhSandesh's own platform-wide send data.

## Phase 3 — sources

Five. Four pass the subject test; three are peer-reviewed **and** open access; every one was
fetched and read on 2026-09-09. Domain check run against `USED-SOURCES.md` and
`PRIOR-BATCH-SOURCES.md`: `repo.uni-hannover.de`, `teslcanadajournal.ca`, `immi.se` (via
`doi.org`) and `cag.gov.in` were all **untouched** across both batches and are now at 1 of 3.
Nothing here reduces a sibling's budget.

Deliberately not used: `arxiv.org`, `en.wikipedia.org` and `journals.plos.org` (all at cap);
`mdpi.com` (left at 2 of 3 — *Religions* 13(6):481, "Building a More Inclusive Workplace for
Religious Minorities", would have fit but MDPI returns HTTP 403 to the fetcher anyway);
`pmc.ncbi.nlm.nih.gov` (left at 2 of 3); `pewresearch.org` (left at 1 of 3 — a religion-in-India
statistic would have failed the swap test, since it fits any post in this batch).

1. **Gebert, Boerner, Kearney, King, Zhang & Song (2014).** "Expressing religious identities
   in the workplace: Analyzing a neglected diversity dimension." *Human Relations* 67(5),
   543–563. Open-access author copy, Leibniz Universität Hannover repository:
   `https://repo.uni-hannover.de/handle/123456789/2337` (PDF `0018726713496830.pdf`, 21 pp.,
   read in full).
   Used for: Proposition 1 — "the public expression of diverse religious identities is
   positively related to the probability of relational conflicts among members of different
   religious denominations," mediated by perceivers' attribution of proselytism, religious
   discrimination and identity threat. And the managerial section: "respectful pluralism"
   (Hicks 2003: 174), plus the specific remedy that **"accurate information about the meaning
   of such things as sacred holidays, rituals, practices or attire can be explained for
   various faiths, thus reducing confusion."** That last line is the paper's direct
   instruction to a workplace festival message: explain, do not assume.
   Subject test: PASS. Swap test: fails nothing — no sibling post is about religion at work.

2. **Leopold, L. (2015).** "Request Strategies in Professional E-mail Correspondence:
   Insights from the United States Workplace." *TESL Canada Journal* 32(2), 1–29.
   `https://teslcanadajournal.ca/index.php/tesl/article/view/1205` · DOI
   `10.18806/tesl.v32i2.1205`. Open access, read in full (29 pp.).
   Used for: 450 request head acts from authentic workplace e-mail; direct requests occurred
   at about two and a half times the rate of indirect ones; and **Table 9, "Percentage of
   Request Strategies by Status"** — writing to a **superior** 78.69% direct / 21.31%
   indirect, to a **subordinate** 64.10% / 35.90%, to a **client** 74.83% / 25.17%. The
   counter-intuitive finding is that professionals are *more* direct upward than downward,
   and that "the politeness of a request cannot be judged solely by the request strategy
   chosen" — mitigators carry the politeness, not circumlocution.
   Note: US corpus, native English-speaking professionals, requests rather than greetings.
   The post says so rather than over-claiming it onto Indian offices.
   Subject test: PASS (workplace register and status).

3. **Pikhart, M. & Koblizkova, A. (2017).** "The Central Role of Politeness in Business
   Communication: The Appropriateness Principle as the Way to Enhance Business Communication
   Efficiency." *Journal of Intercultural Communication* 17(3), 1–19. DOI
   `10.36923/jicc.v17i3.747`. Open access, PDF read in full (19 pp.).
   Used for: the appropriateness principle — a message is judged appropriate against the
   recipient's conventions, not the sender's, so "the dominance of English culture should not
   be automatic in business communication"; and the survey table showing the *same* request
   scored very differently across groups (the most elaborately mitigated form was chosen by
   51% of Czech, 67% of German and 22% of English respondents on Q7).
   Subject test: PASS (business communication register).

4. **Office of the Principal Accountant General (A&E), Odisha / CAG (for calendar year 2026).**
   "List of Compulsory Gazetted Holidays and Restricted Holidays" (Annexure-I and II),
   circulated on the recommendation of the Central Government Employees Welfare Co-ordination
   Committee. `https://cag.gov.in/uploads/media/List-of-Gazetted-Holidays-and-Restricted-Holidays-2026-069492ddf80fa39-36385303.pdf`
   Verified by extracting the PDF text: Annexure-I lists **17 compulsory gazetted holidays**
   for 2026 — Republic Day, Holi, Id-ul-Fitr, Mahavir Jayanti, Good Friday, Budha Purnima,
   Id-ul-Zuha, Muharram, Ratha Yatra, Independence Day, Milad-un-Nabi, Mahatma Gandhi's
   Birthday, Maha Navami, Dussehra, Diwali, Guru Nanak's Birthday, Christmas Day —
   **and Ganesh Chaturthi is not among them.** It appears in Annexure-II, the *Restricted*
   (optional) holiday list, as entry "Ganesh Chaturthi/Vinayaka Chaturthi". Cross-checked
   against `https://dfe.gov.in/uploads/documents/list-of-restricted-holiidays-2026.pdf`,
   where it is item 23 of the restricted list.
   This is the post's **one** government source and it is used as a workplace fact, not as a
   context statistic. No PIB / TRAI / Census / MEA figure appears anywhere in the post.
   The PDF carries no publication date, so `datePublished` is omitted from its `citation`.
   Subject test: PASS (whether this festival is a working day, which is a workplace question).

5. **Drik Panchang — Ganesh Chaturthi 2026, Mumbai** (`geoname-id=1275339`).
   `[date/festival reference]`. Ganesh Chaturthi **Monday, 14 September 2026**; Madhyahna
   Ganesha Puja Muhurat **11:20 AM to 01:48 PM** (Mumbai); Chaturthi Tithi begins 07:06 AM
   on 14 Sep and ends 07:44 AM on 15 Sep; Ganesha Visarjan **Friday, 25 September 2026**.
   The visarjan page (`ganesh-visarjan-date-time.html`) was fetched separately and confirms
   Anant Chaturdashi on Friday 25 September 2026. The Mumbai muhurat **is stated in the
   body** (it is when an office mandap aarti actually happens), so this entry does appear in
   `sources` and `citation`.

### Sources considered and rejected

- `mdpi.com` — *Religions* 13(6):481 (2022), "Building a More Inclusive Workplace for
  Religious Minorities": HTTP 403 to the fetcher, and MDPI is at 2 of 3 anyway.
- `link.springer.com` — *Corpus Pragmatics* 2(3), "Politeness at Work in the Clinton Email
  Corpus: A First Look at the Effects of Status and Gender" (2018): JS challenge, unreadable.
  It would have doubled up on Leopold in any case.
- `onlinelibrary.wiley.com` / `researchonline.lse.ac.uk` / `surrey.eprints-hosting.org` —
  Héliot et al. (2020), "Religious identity in the workplace: A systematic review",
  *Human Resource Management* 59(2). All three open-access mirrors returned 403 or timed out.
  A good source, unreadable; do not burn time re-searching it.
- `maharashtra.gov.in` — the 8 December 2025 gazette notification declaring the state's 2026
  public holidays under s.25 of the Negotiable Instruments Act, 1881, timed out repeatedly.
  **Consequence for the body:** the post states the verified central-government fact (Ganesh
  Chaturthi is a restricted, optional holiday on the 2026 central list) and tells the reader
  to check their own state list rather than asserting an unverified Maharashtra specific.
- Every "wishes" farm, corporate-gifting vendor and HR-template vendor on the SERP:
  competitors under `references/competitors.md`. Read in Phase 1, never linked or cited.

## Phase 5 — targeting

- `categorySlug`: `indian-festivals` — verified live against
  `https://strapi.subhsandesh.in/api/categories` on 2026-09-09.
- `templateUrls`: `["/happy-ganesh-chaturthi", "/templates"]`, both from `TEMPLATE_LINKS` in
  `app/lib/prompt.ts`. `/happy-ganesh-chaturthi` is first, and is linked in the body only
  after the section that establishes why a one-to-one page is worth the ten minutes.
- **Deploy warning, re-confirmed 2026-09-09:** `https://subhsandesh.in/happy-ganesh-chaturthi`
  returns **HTTP 404**; `https://subhsandesh.in/templates` returns 200. Recorded as an audit
  failure in the blog JSON, as the two siblings before it did. It is the primary CTA in all
  fifteen posts and must be live before publish.

## Phase 6 — known weaknesses going in

- Every first-party number is platform-wide across 15 page types, never Ganesh-specific, and
  is captioned as such at each use. It stays platform-wide until `/happy-ganesh-chaturthi`
  has enough pages of its own to segment — realistically a 2027 re-query.
- Leopold's corpus is US, English, and about requests rather than greetings. The post uses it
  for the *direction* of the status effect and says openly that the corpus is American.
- No study exists on festival greetings sent by Indian employers specifically. Searched
  `festival celebration at workplace India employee engagement organizational culture`,
  `holiday greetings organizational communication employees festive`,
  `religious holiday accommodation policy organizations employees minority faith` and
  `impersonal mass email employees perceived sincerity organizational message tone` on
  OpenAlex (OA filter) and DOAJ. Nothing topical and openable. That gap is stated in
  `honestAssessment` rather than papered over with a substitute statistic.
