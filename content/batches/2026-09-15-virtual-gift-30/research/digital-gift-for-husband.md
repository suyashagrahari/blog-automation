# Research — `digital gift for husband` (wave 2, row 15)

Batch `2026-09-15-virtual-gift-30`. Market India, evergreen.
Primary: **digital gift for husband**.
Secondaries: `digital gift ideas for husband`, `romantic gift for husband`,
`electronic gift for husband birthday`.
Category: `digital-gifts-romance`. Templates: `/darling`, `/legal-notice`, `/loveflix`.

---

## Phase 1 — competitive set: NOT MEASURED, and this is the honest record

`SERPS-WAVE2.md` never reached row 15. At first read it carried only rows 1–2
(`birthday website for girlfriend`, `romantic website for girlfriend`); on the
second read, part-way through drafting, the file had been truncated to 10 lines
and 529 bytes, with no `##` sections at all. BRIEF-WAVE2 §0 forbids calling
`WebSearch`, `WebFetch` or `scripts/serp.mjs`, so no substitute pass was run.

**No competitor page for this keyword was opened.** Phase 1 was rebuilt from
three things that do exist:

1. **BRIEF-WAVE2 §5**, which records the measured `digital gift for wife` SERP:
   sendbestgift, lettersbyheart, a bestproducts listicle, Reddit, Etsy, then a
   wall of BestBuy **gift cards**. That is the documented collision.
2. **India autocomplete**, `content/keywords/2026-09-15-virtual-gift-100/ac3/autocomplete.csv`
   and `autocomplete-merged.csv` — real India-geo data, and the better evidence
   on phrasing.
3. **The sibling posts** in `blogs/`, in particular `digital-gift-for-wife.json`.

## Phase 2 — the collision, measured from the autocomplete rather than assumed

The wife sibling calls this a three-way collision: gift card, gadget, page. The
husband query splits differently, and the numbers are checkable in the CSV.

- **36 distinct husband-bearing seeds** in `ac3/autocomplete.csv`.
- **8 of them are "electronic gift" phrasings**: `electronic gift for husband`,
  `electronic gift husband`, `electronic gift for my husband`,
  `electronic gift items for husband`, `electronic gift ideas for husband`,
  `electronic gift for husband birthday`, `best electronic gift for husband`,
  `best electronic gift for husband birthday`.
- **0 of the 36 mention a gift card, voucher, coupon or Amazon.** (`wife` has
  exactly one such seed, `wife birthday gift ideas amazon`.)
- `digital gift for husband maker` is a live completion, and it is the **only**
  "maker" completion anywhere in the harvest.
- Full question fan-out exists on the head phrase: `how / what / when / why /
  which / who digital gift for husband`.

**Reading.** The gadget strand is genuine typed demand. The gift-card strand is
something the SERP supplies, not something Indian searchers ask for. So the post
separates all three early — the brief requires it and the wife SERP proves the
hazard — but weights the gadget comparison, and answers the `maker` intent by
pointing at actual templates rather than listing ideas.

Checked against wave-2 siblings: this does not target row 17
(`romantic-gift-for-husband-birthday`) or row 16
(`online-gift-for-wife-on-anniversary`). Birthday framing is deliberately left
alone; the frame here is product confusion, not occasion.

Cannibalisation: this row carries **no `nearestLive`** field, so there is no
already-published subhsandesh page to differentiate against or link.

## Phase 3 — sources

Discovery via Europe PMC, Crossref and DOAJ per BRIEF-WAVE2 §1b. OpenAlex not
attempted (documented 429).

**Queries that produced nothing usable**, recorded so the next agent does not
repeat them. Europe PMC: `gift giving gender differences spouses`,
`kin work women family gift labour`, `marital relational maintenance strategies
husband wife`, `men emotional expressiveness marriage disclosure`,
`symbolic gift sentimental value recipient preference` — Europe PMC is
biomedical and returned organ-donation and obstetrics work for every one. DOAJ:
`gift thoughtfulness` (1 irrelevant hit), `e-voucher redemption`, `gift card`
(clinical-incentive studies), `handmade effect`, `digital memory keepsake` (0),
`gift giving India` (5, all historical or unrelated).

**Blocked / unusable leads.** `mdpi.com` 403 (JTAER symbolic online gifting),
`jurnal.iaii.or.id` and `journal.iainlangsa.ac.id` both behind a JS challenge,
Wiley and SAGE DOIs per BRIEF §10. `digitalcommons.georgiasouthern.edu`
("Gift Cards and Gift Giving") is the obvious source for the voucher strand and
was **deliberately not used** — the wife sibling already has it.

**Domains avoided as at or near cap** (SPENT-SOURCES.json plus a live count of
`blogs/`): arxiv, pmc.ncbi, journals.plos, frontiersin, pewresearch, gsb.stanford,
europepmc, research.utwente — all at 3. Europe PMC was used as a discovery API
only, never cited.

**Cited, all landing pages opened and read in-sandbox before citing:**

| # | Source | Domain | Date | What it actually says |
|---|---|---|---|---|
| 1 | Personal values and gift giving act: a proposed connection — *Estudios Gerenciales* | icesi.edu.co | 2020 | 1,085 consumers, PLS-SEM; gift-giving influenced by five personal values (self-direction, hedonism, tradition, achievement, power); gender's role considered. **Abstract in Spanish only.** |
| 2 | How Residential Mobility Influences Material and Experiential Purchases — *Asia Marketing Journal* 24(4) | amj.kma.re.kr | 2023 | Priming a high/low mobility mindset in the US and South Korea shifted preference between material goods and experiences; mediated by autonomy, moderated by culture. CC-BY. |
| 3 | Facebook, Long-Distance Marriages, and the Mediation of Intimacies — *IJoC* 12 | ijoc.org | 2018-09-25 | Transnational Filipino couples perform "performative mediated intimacies"; gendered marriage practice is reorganised when wives are the overseas breadwinners and **husbands are left at home**. |
| 4 | The Polish version of the Affectionate Communication Index — *Fides et Ratio* 42 | fidesetratio.com.pl | 2020-08-18 | 430 participants aged 18–36; EFA supported a two-factor solution where the original ACI used three. |
| 5 | Till Phone Do Us Part: Phubbing in Relationship Satisfaction and Self-Esteem — *JPEPSI* 27 | ojs.tnkul.pl | 2021 | 200 adults in informal relationships and marriages; phubbing measured on two dimensions, communication disturbance and phone obsession. |

Five distinct domains, none previously used in this batch at the time of
writing; none at the URL or domain cap.

**Swap-test honesty.** #1, #3 and #5 are locked to this post. #2 and #4 are not —
either could sit in another post in this batch. They are kept because the gadget
strand needs evidence that object-versus-experience preference is not fixed, and
that affection sorts into more than one channel. Recorded as a checklist failure
rather than hidden.

## Phase 4 — first-party facts, and the mandatory disclosure

Deliberately avoids the 40.6% password figure and the 6.2-hour edit gap, which
BRIEF-WAVE2 §4 flags as over-used across the first 30 posts. Uses instead:

- `/darling` 427 pages, 9.8% of all pages — the template this post links first
- 3,377 registered creators, 1.29 pages each
- 11.5 average views per created page
- 49.0% of shared pages opened on a phone (used in an FAQ)

**Relationship-label disclosure** is an H2 in the body, not an audit line:
*"Our numbers record the template, not the marriage."* The database records
which template was opened and how often the page was viewed; it does not record
the recipient. 427 Darling pages is 427 people who wanted that page, not 427
wives sending one to a husband.

**Pricing.** The `## Pricing (fill in by hand)` block in `facts.md` is empty, so
no free-tier or paid-tier claim is made anywhere. The body and the FAQ both say
the post will not quote a price and send the reader to `/templates`.

## Phase 5 — templates

Assigned three, all used, all descriptions read from `app/lib/prompt.ts` first:

- `/darling` — "Dark, dramatic romantic page for a partner". Described as the
  dark register, not as a generic love page.
- `/legal-notice` — **a joke by design**: "a mock formal notice served on your
  person; they must accept or contest every demand, with seven days to comply."
  Never linked once in the first 30 posts of this batch. Described as a joke, in
  those terms, with the seven-day mechanic named.
- `/loveflix` — "a streaming service with one show on it and your partner as the
  lead … then play a branching episode."

Plus `/templates` once at the closing CTA. Four internal links, at the cap. No
swaps were needed.

## Phase 6 — structure

H1 + 6 body H2s + a Sources H2; 5 H3s under the ideas section, mirrored
one-to-one in an `ItemList`. 1,675 words excluding FAQs. One 4-row comparison
table whose final column is first-party. 11 FAQs, none restating a body heading.
`about`/`mentions` entities verified against the Wikipedia API with QIDs paired:
Gift Q184303, Gift card Q554910, Consumer electronics Q581105, Long-distance
relationship Q1406917, Phubbing Q14552133.

## Audit outcome

48 passed, 2 failed — the swap test, and "no section closely mirrors a
competitor page's structure or framing", the second failed as *unverifiable*
because the competitive set was never read. See `batchMeta.auditReport`.
