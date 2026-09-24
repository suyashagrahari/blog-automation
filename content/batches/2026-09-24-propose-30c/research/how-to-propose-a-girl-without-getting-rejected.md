# Research brief — `how to propose a girl without getting rejected`

Batch `2026-09-24-propose-30c` (wave 4) · slug `how-to-propose-a-girl-without-getting-rejected` ·
category `modern-romance` · demand: 2 ordinal prefixes.

---

## Phase 0 — first-party data gate

Passed on `content/facts.md`, regenerated 2026-09-24. Six lines used, copied verbatim into
`batchMeta.factsUsed`; two are inside the first 150 words (the 5,148-pages-across-21-page-types
line and the 38.5% password-protection line).

Every figure is labelled **platform-wide across 21 page types** or **sampled on the named
template** in the body prose, never attributed to proposal pages. The `proposalpages` probe is
still refused by this machine's production-read policy, so no proposal-specific figure exists.
The pricing block is empty for a fourth batch, so the post states and implies no price, tier or
cost of any kind.

---

## Phase 1 — SERP analysis: NOT RUN

**No SERP for this keyword was measured, and the post makes no claim about what competing pages
contain.** The only India-served SERPs this project has ever fetched are the 11 measured on
2026-09-16 (`content/keywords/2026-09-16-propose-100/serps.md`), and this keyword is not among
them. The batch search budget was spent on Phase 3 source discovery instead (2 WebSearch calls of
the 4 allowed, both used to locate open-access copies of specific papers).

Recorded as a checklist failure, not passed over: `The post contains at least one claim none of
the top 5 pages make` and `H2s map to the fan-out sub-queries identified in Phase 2` are both in
`auditReport.failed` because neither can be asserted without fetching the ranking pages.

What *is* safe to say, and all this brief says: the task prompt states that the pages on this
SERP sell a guarantee. This post does not, and that is a property of this post, verifiable here.

---

## Phase 2 — angle

The premise of the keyword is false. There is no technique that removes the possibility of a no,
because the answer is a decision another person makes. The page's job is to say so in the first
150 words and then replace the promised guarantee with judgement.

**Angle (recorded as `batchMeta.angle`):** wins by being the only post that refuses the premise in
its first sentence and replaces the guarantee with judgement, pairing the illusion-of-control
literature with a coded corpus of 374 real proposal accounts, grounded in SubhSandesh's
platform-wide data where the most-built template is an apology, not an ask.

### Fan-out sub-queries the H2s answer

Reasoned out from the keyword itself (**not** derived from ranking pages — see Phase 1):

| Sub-query | Where it is answered |
|---|---|
| Is there a way to guarantee a yes? | H1 answer paragraph + "What 'propose without getting rejected' is actually asking for" |
| Why do I feel like I can control this? | "Why a guarantee feels available when it is not" |
| What actually raises the odds? | "Five things you control, and one you do not" |
| Should I propose in public or private? | "Public or private: how the setting changes what a no costs" |
| How do I tell if she likes me? | "Reading interest honestly, including the part nobody writes down" |
| Should I send her a page or a link? | "When a proposal page is the wrong thing to send" |
| What do I do if she says no? | "If the answer is no" |

---

## Cannibalisation — how this differs from the two named siblings

| | Wave 2 · `how-to-propose-girlfriend-first-time` | Wave 3 · `how-to-propose-a-girl-without-knowing-her` | **This post** |
|---|---|---|---|
| Reader | A first-timer, frightened | Someone asking a near-stranger | Someone who wants a **guarantee** |
| Core error named | Misforecasting rejection out of nerves | Assuming you know a stranger | Believing the outcome is yours to control |
| Research lane | Compliance / liking gap (Flynn & Bohns, Boothby, Joel) — **all banned** | Zero-acquaintance accuracy, first-interaction contact rates | **Illusion of control, overconfidence and optimism bias about outcomes another person decides** |
| Structural move | Reframes fear as a forecasting error | Says "don't, not yet" | Says the thing you asked for does not exist, then hands over the part that does |
| Template fit | `/proposal`, `/date-invitation`, `/love-gf` | `/proposal`, `/date-invitation`, `/apology-dashboard` | `/proposal`, `/date-invitation`, `/love-gf` |

Zero source overlap with either sibling. Both siblings are referenced in prose terms only — their
`/blog/` slugs are not `TEMPLATE_LINKS` entries and 404 until waves 1–3 publish, so they are not
linked.

One deliberate, disclosed overlap: the wave-3 sibling cites Hoplock & Stinson's finding that
public proposals carry **1.73×** the odds of rejection, from the published journal version at
`onlineacademiccommunity.uvic.ca`. **That URL is on the ban list and was not reused.** This post
cites the primary work behind it instead — Hoplock's 2016 University of Victoria doctoral
dissertation, at `dspace.library.uvic.ca/handle/1828/7406` — which was downloaded and read in
full to verify the odds ratio, the test statistic (χ²(1) = 4.77, p = .031) and the sample
(n = 287). The dissertation also carries six findings the sibling does not use, and those carry
most of this post.

---

## Phase 3 — sources

Four sources, all fetched and read in full text. No paywalled citation, so nothing rests on an
abstract. Zero generic context statistics. Zero Wikipedia body links (Wikipedia appears only as
`sameAs` in `structuredData`, which does not count against the body budget). Zero competitor
links. `capcheck.mjs` run when choosing and again immediately before saving: no banned URL used,
no domain at cap.

1. **Eben, Chen, Billieux & Verbruggen (2022)**, *Outcome sequences and illusion of control —
   Part I: An online replication of Langer & Roth (1975)*, International Gambling Studies,
   published 10 November 2022. Accepted manuscript, Ghent University repository.
   N = 289, preregistered, effect reproduced but smaller than the original (largest Hedges'
   g_av = 0.49). Carries Langer's 1975 definition of the illusion of control verbatim.
   *Subject test:* passes on the phenomenon. *Swap test:* fails no other post in this batch.
2. **Hoplock (2016)**, *Will she say yes? A content analysis of accepted and rejected marriage
   proposals*, PhD dissertation, University of Victoria, 15 July 2016.
   Study 2 coded 374 first-person accounts (180 rejected, 194 accepted). Verified in the PDF:
   public → 1.73× odds of rejection (n = 287); >60% of proposals private; 29% of rejected couples
   vs 100% of accepted had discussed marriage in advance (n = 86, χ²(1) = 46.43, p < .001);
   10.1% of rejected proposals from couples who had never dated vs 0% accepted; 15.8% of rejected
   proposals made to "save the relationship" vs 0% accepted; 60% of rejected proposals ended the
   relationship immediately (87 of 145) and 5.1% of those couples were still together at writing;
   reasons for declining — too young/not ready 27%, relationship problems 16%, partner's flaws
   14%, incompatibility 13%, "not feeling right" 13%.
3. **Taylor & Gollwitzer (1995)**, *Effects of mindset on positive illusions*, Journal of
   Personality and Social Psychology 69(2), 213–226. Green OA at KOPS, University of Konstanz.
   Deliberation produced greater perceived risk and poorer self-perceptions than implementation,
   with no-mindset controls in between. Used for the claim that deciding to ask is itself the
   worse mindset for judging whether to ask.
4. **Joshi & Carter (2013)**, *Unrealistic optimism: east and west?*, Frontiers in Psychology,
   13 February 2013. 287 participants (200 India, 87 England); comparative optimism for bad events
   higher in the Indian sample, F(1,283) = 5.62, p = 0.018; 5.9% self–other gap in India against
   3.4% in England. The only source here with an Indian sample, and the reason the post can tell
   an Indian reader they are probably not the exception they feel like.

### Searched and rejected

- `illusion of control study`, `overconfidence prediction social outcomes research`,
  `perceived control uncontrollable outcome study`, `optimism bias personal outcomes research`
  via `findpapers.mjs` (Crossref + Europe PMC). Crossref returns the two canonical Ross-lab
  papers — Dunning, Griffin, Milojkovic & Ross (1990) and Vallone, Griffin, Lin & Ross (1990) —
  but OpenAlex confirms **neither has any open-access location**, so neither was cited. Langer
  (1975) and Weinstein (1980) are likewise closed; the 2022 replication was used in place of
  Langer.
- Europe PMC returned gambling, neuroscience and finance work on the same construct and nothing
  on romantic outcomes. **There is no study of the illusion of control applied to a romantic
  ask.** That is a real finding and it is stated in the body: the coin-toss evidence is imported
  and labelled as such.
- Gino's illusion-of-control work was excluded on sight given that author's retraction record.
- Wilkinson, Ball & Alford (2015), *Counterfactual reasoning for regretted situations involving
  controllable versus uncontrollable events* (Advances in Cognitive Psychology) was read and
  dropped — it is about contingent self-esteem and regret intensity, too far from the ask.
- **No legal citation** for "repeated contact after a refusal is a criminal matter in India".
  The three BNS 2023 sources verified in waves 2–3 (MHA, NCRB, enacted PRS Act) are all banned,
  and `indiacode.nic.in` did not respond from this machine on 2026-09-24. The point is made
  without a statute reference rather than with an unverified one.

---

## Phase 4–5 — structure and links

Block order per `references/page-structure.md`. Eight H2s, one H1, five H3s each carrying the same
four fields in the same order (what it is / why it matters / what it costs you / what it does not
do). Body 1,799 words excluding FAQs. 11 FAQs in `article.faqs` only. One comparison table, five
columns, four rows, last column first-party.

**Internal links (3, all from `TEMPLATE_LINKS`, all after value is established):**

- `/proposal` — mandatory. Placed in the "wrong thing to send" section, which is also where the
  post says plainly that for this reader it is usually **oversized**, and that the grow-the-YES-
  button mechanic is a joke between two people who are already sure, not a pressure device.
- `/date-invitation` — the genuine alternative: the smaller ask a well-judged reader should
  usually make first. One question, a countdown on yes, a single tap for a no with no audience.
- `/love-gf` — for the reader who is already in the relationship and wants to *say* something
  rather than *ask* something. Carries the 16,998-views / 29.9% first-party line.
- **And the honest case where no page belongs**, stated in the same section: after a refusal,
  with someone you have never dated, or into a group chat. A link is still an audience.

**Binding constraint honoured:** nothing on the page coaches manipulation. No engineered scarcity,
no jealousy, no pressure, no public ask designed to make refusal socially costly — the public ask
is argued *against*, with the measured 1.73× attached. Nowhere does the title, metaTitle, H1, any
FAQ or any body sentence promise or imply that anything guarantees a yes.

---

## Phase 6 — audit

48 passed, 2 failed, disjoint, summing to 50. Both failures are Phase 1 failures and both are
recorded with the condition that would close them. Seven further limitations that are not
checklist items sit in `batchMeta.structuralLimitations`, never in `failed`.
