# Research brief — `how to propose ex girlfriend again`

Batch `2026-09-23-propose-30b` (wave 3). Slug `how-to-propose-ex-girlfriend-again`.
Category `modern-romance`. Volume band: **under-300 EST**.

---

## Phase 1 — SERP, and exactly what was and was not measured

**One WebSearch call was spent on the keyword on 2026-09-23.** The WebSearch tool in
this environment is **US-served**, not India-served, and returns result titles/URLs
plus a synthesised summary — **no ranked India SERP, no AI Overview capture, no page
fetches.** Everything below is therefore a description of a *US-served result set on
one day*, not a ranking claim, and no position is described as current.

Result set returned (titles/URLs only; none fetched, none linked, none paraphrased):

| # | Result | What it is |
|---|---|---|
| 1 | marriage.com advice page | "get back together with ex girlfriend" listicle |
| 2–4 | Quora / JustAnswer threads | user Q&A, unmoderated |
| 5 | themodernman.com | paid "get your ex back" coaching funnel |
| 6 | yourtango.com | first-person essay, adjacent intent |
| 7 | goodreads author blog "WAYS TO GET YOUR EX BACK in 10" | self-promotion |
| 8–9 | huggingface.co dataset viewers | irrelevant, ML training corpora |

The one thing safely observable from the returned *summaries alone*, without
describing any page's contents: the surfaced advice is uniformly **technique-shaped** —
"reactivate her feelings of respect and attraction before proposing", "suggest a
casual date by phone", "take it slow" — i.e. a sequence of actions framed as
changing her mind. **No result in the set framed her decision as information, and
none named a case where contact is wrong.** That is an observation about the summary
text returned to this agent on 2026-09-23, and it is the only competitor observation
this brief makes.

**Not measured, and therefore not claimed anywhere in the post:** India-served
positions, AI Overview presence, featured snippets, competitor word counts, schema,
heading structures, author bylines, internal linking, or whether any of these pages
rank in India at all.

Inherited context: 11 India-served SERPs were measured on 2026-09-16
(`content/keywords/2026-09-16-propose-100/serps.md`). **This keyword was not one of
them.** Recorded in `structuralLimitations`.

---

## Phase 2 — gap, and the angle

**Table stakes** (present across the returned summaries): the three-situations
question is *implied* but never separated; "don't rush"; "rebuild trust"; "talk
before you propose".

**The gap.** Every surfaced result assumes the reader's goal — her saying yes — is
legitimate and the only open question is method. None of them:

- separates **who ended it** as the governing variable;
- names a case in which reaching out is **wrong**, rather than merely premature;
- mentions the **legal line** in India between persistence and stalking;
- tells the reader that the **urgency itself is a documented post-breakup phase**
  rather than evidence about the relationship;
- says that **no page, no message and no gesture** is the correct output for many
  readers.

**Angle.** Wins by being the only post that treats "who ended it" as the governing
variable, cites post-dissolution adjustment research to explain why the urge to act
is a symptom rather than a signal, states the BNS 2023 s.78 line on repeated contact
after a clear indication of disinterest, and says plainly that for many readers the
right output is no page at all.

**Fan-out sub-queries** mapped to H2s and FAQs: *is it okay to propose to an ex* ·
*how do I know if my ex wants me back* · *should I contact my ex if she ended it* ·
*what if she asked for space* · *what if she has a new boyfriend* · *how long should
I wait* · *is it illegal to keep messaging my ex* · *does no contact work* · *should
I apologise before proposing* · *how do I move on if she says no*.

---

## Cannibalisation check — the wave-2 sibling

`content/batches/2026-09-17-propose-30/blogs/how-to-propose-girlfriend-again-after-a-fight.json`

| | Wave-2 sibling | This post |
|---|---|---|
| Situation | A fight **inside a continuing relationship** | The relationship **ended** |
| Governing question | How to repair, then how long to wait | Whether contact is reasonable at all, decided by who ended it |
| Lane | Forgiveness-seeking, apology components, on-off relationship cycling, unwanted pursuit in ongoing relationships | Post-dissolution adjustment: initiator status, self-concept clarity, distress-driven pursuit |
| Sources | Frontiers (forgiveness), EKU (apology components), Vennum (cycling), Monk/Missouri (on-off), indianmentalhealth.com (Mumbai pursuit) | Slotter/Gardner/Finkel (self-concept), Ranđelović & Goljović (initiator), Park et al. (RCSW→pursuit), Vázquez et al. (returning after abuse), BNS 2023 |
| Overlap | The sibling has one short H2, "How to propose to an ex-girlfriend again after a breakup", that explicitly hands this case off | This post is that hand-off, expanded |

**Zero source overlap** — every sibling URL was checked against `capcheck.mjs` and
none is reused. The sibling is **cross-linked by slug**, not re-covered.

---

## Phase 3 — sources

Five. Lane: **post-breakup adjustment and recovery**. All fetched and read in this
session except where noted.

1. **Slotter, E. B., Gardner, W. L., & Finkel, E. J. (2010).** *Who Am I Without You?
   The Influence of Romantic Breakup on the Self-Concept.* Personality and Social
   Psychology Bulletin 36(2), 147–160.
   `https://faculty.wcas.northwestern.edu/eli-finkel/documents/2010_SlotterGardnerFinkel_PSPB.pdf`
   Green OA author copy, full text read. **Study 3**: 69 Northwestern undergraduates,
   14 biweekly online assessments over 6 months; 26 reported their relationship ended
   mid-study (mean Wave 7.46). Fitted discontinuous growth model: BREAKUP predicted an
   immediate drop in self-concept clarity (B = −0.44, SE = 0.01, t = −2.12, p < .05),
   and TIMESINCEBREAKUP predicted a decrement to the subsequent slope (B = −0.05,
   t = −3.02, p < .001). Reduced clarity uniquely predicted post-breakup distress.
   *Subject test: pass. Peer-reviewed: yes. Openly readable: yes.*

2. **Ranđelović, K. Ž., & Goljović, N. R. (2020).** *Breakup Grief — The Difference
   Between Initiator and Non-Initiator Depending on Coping Strategies and Attachment.*
   Zbornik Radova Filozofskog Fakulteta u Prištini 50(3), 47–…  DOAJ-listed.
   `https://scindeks-clanci.ceon.rs/data/pdf/0354-3293/2020/0354-32932003047R.pdf`
   Full text read. Convenience sample of 387 respondents, 82.7% female, aged 18–40
   (M = 23.90, SD = 4.22); 278 more often initiated breakups, 109 more often did not.
   t(365) = 4.62, p < .01: those whose partners more often ended it reported higher
   breakup grief (M = 2.88, SD = 1.05) than those who more often ended it themselves
   (M = 2.36, SD = 0.98). Regression R² = .28, F(6,380) = 24.38, p < .001; initiator
   status an independent predictor (β = −.16, t = −3.53). *Subject: pass.
   Peer-reviewed: yes ("Original scientific paper"). Open: yes.*

3. **Park, L. E., Sanchez, D. T., & Brynildsen, K. (2011).** *Maladaptive Responses to
   Relationship Dissolution: The Role of Relationship Contingent Self-Worth.* Journal
   of Applied Social Psychology 41(7), 1749–1773.
   `https://ubwp.buffalo.edu/selfandmotivationlab/wp-content/uploads/sites/91/2018/05/Park-Sanchez-Bryndilsen-2011-JASP-1.pdf`
   Green OA lab copy, full text read. SEM on N = 312 (245 women, 66 men; M age 22.1,
   SD 5.4) who reported a breakup in the previous 12 months. Higher relationship
   contingency of self-worth predicted greater emotional distress **and** greater
   obsessive pursuit of the ex-partner (32-item extended Obsessive Pursuit Scale,
   Davis et al. 2000); distress **partially mediated** the link. *Subject: pass.
   Peer-reviewed: yes. Openly readable: yes.*

4. **Vázquez et al. (2025).** *Construction and Validation of the Attitude Toward
   Returning to an Ex-Partner Scale.* Social Sciences 14(9), 528. DOAJ-listed.
   `https://www.mdpi.com/2076-0760/14/9/528`
   **ABSTRACT ONLY.** mdpi.com returned HTTP 403 to this agent (publisher
   bot-blocking); the abstract was read via the DOAJ article API record. Cited claims
   are confined to the abstract: 55 women who had been victims of gender violence;
   unidimensional 16-item scale, α = 0.93; "when a relationship ends due to abuse, a
   favorable attitude toward reconciliation may become a risk factor"; heightened
   perception of danger was associated with a *less* favourable attitude toward
   reconciliation. A correction notice exists (Soc. Sci. 15(1), 42, 2026); not read.
   *Subject: pass. Peer-reviewed: yes. Full text: not read — recorded in the audit.*

5. **Bharatiya Nyaya Sanhita, 2023, section 78 (stalking).** Act text PDF hosted by
   PRS Legislative Research.
   `https://prsindia.org/files/bills_acts/acts_parliament/2023/The%20Bharatiya%20Nyaya%20Sanhita,%202023.pdf`
   Full text of s.78 read at line 2061 of the extracted PDF. Verbatim: following a
   woman and contacting "or attempts to contact such woman to foster personal
   interaction repeatedly despite a clear indication of disinterest by such woman"
   constitutes stalking; punishable on first conviction with imprisonment up to three
   years and fine, and on a second or subsequent conviction up to five years and fine.
   *Statute text, not a statistic. Subject: pass.*

   **Section number re-verified 2026-09-23** after a sibling agent reported a PRS
   document numbering stalking as s.77. The file cited here (md5
   `5639d038c8464645e42a9b7ddaa6d7be`) is the Gazette of India text of the **enacted
   Act** and numbers **s.77 Voyeurism, s.78 Stalking** — the marginal note "Stalking."
   sits immediately above `78. (1)` — and **s.79** word or gesture intended to insult
   modesty. The NCRB bare act
   (`https://www.ncrb.gov.in/uploads/SankalanPortal/DownloadPDF/BNS2023.pdf`) was
   downloaded and independently confirms s.78 Stalking with identical text and
   penalties, as did the MHA PDF. Three bare-act sources agree. The s.77 numbering the
   sibling saw belongs to a different PRS document, almost certainly the BNS **Bill as
   introduced** rather than the Act — PRS hosts both, and the Bill's numbering differs.
   No swap was needed; the linked document supports the claim exactly.

### Source-cap notes

- `capcheck.mjs` run **before** choosing (2026-09-23) and **again immediately before
  saving**. None of the five URLs appears in the 194 banned wave-1/2 URLs.
- **`https://www.mha.gov.in/sites/default/files/250883_english_01042024.pdf` — the
  official MHA BNS PDF — was found to be BANNED** (used in `2026-09-17-propose-30`).
  It was verified to contain s.78 and then discarded; the PRS-hosted copy of the same
  Act was verified independently (identical s.78 text) and used instead.
- Deliberately avoided: `pmc.ncbi.nlm.nih.gov` / `europepmc.org`, `journals.plos.org`,
  `archive.org`, `dsal.uchicago.edu` (all at cap 3), and `frontiersin.org`,
  `link.springer.com`, `nature.com`, `doi.org` (one slot left — source-cap race).
  A Frontiers in Psychiatry 2025 rumination paper and a PLOS ONE music-coping paper
  were both on-lane and both rejected on cap-race grounds.
- Generic context statistics used: **zero**.
- Wikipedia body links: **zero**. Wikipedia appears only as `sameAs` in
  `structuredData`, verified via the MediaWiki API with Wikidata QIDs paired
  (Breakup Q100926628, Marriage proposal Q1057944, Stalking Q163942, Bharatiya Nyaya
  Sanhita 2023 Q121436708, Self-concept Q1860557).

---

## Phase 0 — first-party facts used (verbatim from `content/facts.md`, 2026-09-23)

1. `Most popular creation: apology dashboard (/apology-dashboard) — 1,347 pages, 26.6% of everything created — measured 2026-09-23`
2. `5,061 personalised pages created since 2026-03-12, across 20 page types — measured 2026-09-23`
3. `Median gap between a page's first save and its last edit: 2.4 hours — sampled on apology dashboard (/apology-dashboard), n=1,348 — measured 2026-09-23`
4. `38.7% of creators password-protect their page before sharing it (1,961 of 5,061) — measured 2026-09-23`
5. `91.2% of started pages are actually published and shared (4,615 of 5,061) — measured 2026-09-23`

Two are inside the first 150 words. Every figure is labelled **platform-wide across
20 page types** or **sampled on the named template** in body prose, not only in the
audit. **No figure is attributed to proposal pages** — none exists; the read-only
probe of `proposalpages` is still refused by this machine's production-read policy.
No price, tier or cost claim appears anywhere: `content/facts.md` has an empty
pricing block.

---

## The editorial line this post holds

Written to a binding constraint that outranks every SEO consideration on this page.
**What was refused, deliberately:**

- No "no contact rule", no timeline for when to break silence, no jealousy framing,
  no staged encounters, no mutual-friend intermediaries, no "make her miss you", no
  script for changing her mind, no grand-gesture advice.
- No claim that a well-built page influences her decision.
- No persistence coaching of any kind. Where the honest answer to a sub-question is
  "she ended it and that is information", the post says exactly that.
- The post names four cases where reaching out is wrong — she has asked for space,
  she is with someone else, there was coercion or abuse, contact would be unwelcome —
  and states the BNS 2023 s.78 line in plain words.
- The post says, in its own H2, that **no page at all** is the right answer for many
  readers, and that the alternative template (`/apology-dashboard`) comes first and
  separately when there is something genuinely to apologise for.

Internal links: `/apology-dashboard`, `/date-invitation`, `/proposal` (all in
`TEMPLATE_LINKS`), plus the wave-2 sibling by slug. `/proposal` is placed last, after
the section that establishes why a reader would ever want it.
