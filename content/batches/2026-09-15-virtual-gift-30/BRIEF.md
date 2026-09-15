# BRIEF — 2026-09-15-virtual-gift-30

30 posts on the **virtual / digital / online gift** axis, from
`content/keywords/2026-09-15-virtual-gift-100/`. Market: India. Evergreen, not
festival-dated — there is no lead-time gate on this batch.

---

## 0. Why this batch exists, and the one thing that governs it

The keyword run found 73 surviving keywords. They collapse to **31 distinct search
intents**. Writing one post per keyword would have produced ~40 posts competing
against each other for the same SERPs.

**So: one post per intent cluster.** Your `batchMeta.keyword` is the cluster
primary; the other phrasings are `batchMeta.secondaryKeywords`. Do not write a
separate post for a phrasing that is already a secondary on another post in this
batch — check `content/batches/2026-09-15-virtual-gift-30/blogs/` before you start.

## 1. The competitive set — who actually ranks

Measured on live India SERPs 2026-09-15. These are **not** IGP, FNP, Archies,
Amazon or Flipkart. They are small personalised-page startups:

`gifft.me` · `qlovy.com` · `surprises.gift` · `ourgiftverse.com` ·
`digiflower.net` · `giftsqr.com` · `blog.messagear.com`

**Every one of these is a competitor. Never cite, link to, or paraphrase them**
(`references/competitors.md`). They are listed here so you recognise them in the
SERP and do not mistake one for a citable source.

Reddit (r/LongDistance, r/Gifts), Quora, Pinterest and Instagram hold 4–6 of every
10 results. Reddit ranks **#1** for `digital gift for girlfriend`. That is the gap:
there is no authoritative page in this category.

## 2. The intent split that decides every post

Two different searches hide under the word "gift":

| | our searcher | NOT our searcher |
|---|---|---|
| wants | a shareable personalised page | a physical object delivered |
| types | virtual / digital / online gift, gift link, surprise website | gift for girlfriend, under ₹500, gift delivery |

**Write for the first.** If a section starts drifting into physical gift ideas
(jewellery, chocolates, hampers), you have lost the post. It is fine — and honest —
to say "if you want something they can hold, buy the thing; this page is for when
you are 2,000 km away at 11pm."

## 3. Source rules — tighter than usual, because this batch is large

Standard caps from the skill apply and they bind hard at 30 posts:

- **A URL may appear in at most 2 posts. A domain in at most 3.**
- 30 posts × 4–6 sources = 120–180 slots → you need **40+ distinct domains** across
  the batch. Check the sibling JSONs in `blogs/` before adding a source.
- **At most 1 generic context statistic** (PIB / TRAI / Census / MEA) per post, and
  do not all reach for the same one. "India has N internet users" passes the
  subject test for none of these posts.

**Search the phenomenon, not the keyword.** Useful directions for this axis:
long-distance relationship maintenance, computer-mediated communication and
intimacy, digital gift-giving / virtual gift economies, parasocial and mediated
affection, symbolic value of non-material gifts, mobile messaging and relational
closeness. Try: `digital gift giving relational value study`,
`long distance relationship maintenance mediated communication`,
`virtual gift economy social media research`.

If no topical research exists for your angle, **say so in the audit and name the
search terms you tried.** Do not pad with another government statistic.

## 4. First-party data — this is the moat

`content/facts.md`, regenerated 2026-09-15. This axis is the best-matched of any
batch so far: the facts *are* virtual-gift statistics.

Highest-value lines for this batch:

- 4,357 personalised pages created since 2026-03-12, across 16 page types
- #1 /love-gf 1,125 (25.8%), #2 /bouquet-gf 1,070 (24.6%), #3 /apology-dashboard 1,043 (23.9%)
- 49,968 recorded views; average 11.5 views per created page
- **40.6% of creators password-protect the page before sharing** (1,767 of 4,357)
- **94.1% of started pages are actually published and shared** (4,098 of 4,357)
- 49.0% of shared pages are opened on a phone
- Median first save → last edit: 6.2 hours (n=1,125, /love-gf)
- 3,377 registered creators, 1.29 pages each
- Occasion-dated pages are only 3.7% of all pages — the platform is 96.3%
  romantic and everyday

**Two of these must land inside the first 150 words.** The 40.6% password figure
and the 6.2-hour edit gap are the two most interesting and least obvious — prefer
them over the raw totals, which every sibling post will also use.

**Do not overuse the same pair.** If three posts all open with "4,357 pages and
49,968 views" the batch reads like one page printed thirty times.

## 5. Templates

`TEMPLATE_LINKS` in `app/lib/prompt.ts` is unusually rich for this axis. Pick
`batchMeta.templateUrls` (1–3) that genuinely match your keyword:

- romantic/general → `/love-gf`, `/darling`, `/bouquet-gf`
- birthday → `/birthday-gf`
- long distance → `/train-ticket`, `/streak`, `/capsule`, `/hold-my-hand`
- anniversary → `/capsule`, `/rewind`, `/loveflix`
- proposal / valentine week → `/proposal`, `/date-invitation`, `/flags`
- missing someone → `/missyou-gf`
- apology → `/apology-dashboard`

**Only use URLs that exist in `TEMPLATE_LINKS`.** An invented slug 404s.

`batchMeta.categorySlug`: nothing in this batch is a festival, so **never use
`indian-festivals`** — not even for the Valentine's-week and Christmas posts.
Live categories, verified 2026-09-15:

```
digital-gifts-romance · modern-romance · virtual-bouquets · milestone-birthdays
miss-you-across-miles · say-sorry-beautifully · family-and-continuity
big-fat-weddings · festive-beats · indian-festivals
```

**Default to `digital-gifts-romance`** — it is the exact hub for this axis and
concentrating the cluster there is the point. Use instead:

- `milestone-birthdays` for the birthday posts
- `virtual-bouquets` only if the post is genuinely bouquet-led
- `miss-you-across-miles` for the long-distance posts
- `modern-romance` for the Valentine's-week / propose / teddy / hug day posts

## 6. Head terms — two posts must be reframed

`virtual gift` and `digital gift` are 1–2 word head terms and unwinnable as-is for
this domain. Both are written as **long-tail primaries** with the head term demoted
to a secondary:

- `virtual gift` → target **"what is a virtual gift and how to send one"**
- `digital gift` → target **"what is a digital gift"**

Say so in the audit rather than pretending the head term is the target.

## 7. The audit strings must be BYTE-verbatim — including the markdown

`scripts/verify-batch.mjs` compares every string in `auditReport.passed` /
`auditReport.failed` byte-for-byte against `references/publish-checklist.md`, after
collapsing internal whitespace to single spaces. **It does not strip markdown.**

Four of the first six posts failed on exactly three items, all for the same reason:
the agent helpfully removed the `**bold**` markers and truncated the item at the
line break. These three items are multi-line in the source file and contain bold:

```
- [ ] At least 2 sources pass the **subject test** — about siblings / ritual /
      ...continues on the next line...
- [ ] No source passes the **swap test** — none could sit unchanged in a different
      ...continues on the next line...
- [ ] No source URL appears in more than 2 posts in this batch; no domain in more than 3.
```

**Copy each item exactly as it appears in `publish-checklist.md`** — keep the `**`
markers, and join a wrapped item into one string with single spaces. Do not
paraphrase, do not truncate at the newline, do not strip formatting.

Then assert, before you write the file: `passed ∩ failed = ∅` and
`|passed| + |failed| = 50`.

## 8. FAQs must not restate a body heading

The verifier flags an FAQ whose wording overlaps a body H2/H3 by ≥0.8 token
similarity, and asks a human to judge anything ≥0.6. Two of the first six tripped it
with pairs like *"What is a digital gift for a girlfriend?"* vs the heading *"What
counts as a digital gift for a girlfriend?"*.

Write FAQs that answer questions the body does **not** already have a section for.
If an FAQ and a heading say the same thing, the FAQ is wasted — Strapi renders the
`faqs` component separately, so the reader sees the same question twice.

## 9. Paragraphs: 2–3 sentences, and that includes the opening answer block

Three of the first twelve posts failed this same item, in two places:

- **The ~150-word direct-answer block.** It is still a paragraph. Split it into two or
  three, each 2–3 sentences. A five-sentence opening block fails the item.
- **H3 blocks carrying a repeated structure.** Several posts used a fixed four- or
  five-field pattern per H3 and let it run to 4–6 sentences as one paragraph. Break
  it, or use a short list — the pattern does not require one block.

Short paragraphs are not a style preference here: a long block is less likely to be
lifted cleanly as a citation, which is the whole point of the batch.

## 10. Which hosts actually fetch (measured during this batch — save yourself the time)

Collected from agents 1–17. This is not a policy, it is a map of what works.

**Reliably fetchable — go here first.** Institutional repository *landing pages*:
EPrints, DSpace, Digital Commons / bepress, and university `pure`/`research` portals.
Examples that worked this batch: `eprints.soton.ac.uk`, `shura.shu.ac.uk`,
`scholarworks.lib.csusb.edu`, `repository.up.ac.za`, `strathprints.strath.ac.uk`,
`dspace.library.uu.nl`, `dare.uva.nl`, `research.aalto.fi`, `eprints.lse.ac.uk`,
`repository.upenn.edu`, `figshare.le.ac.uk`. Also fine: `cyberpsychology.eu`,
`journals.uic.edu`, `dialnet.unirioja.es`, `koreascience.or.kr`, `europepmc.org`,
university news offices (`today.uconn.edu`, `news.ku.edu`), and standards bodies.

**Blocked from this sandbox — do not burn attempts on them.** `tandfonline.com`,
`onlinelibrary.wiley.com`, `link.springer.com`, `mdpi.com`, `dl.acm.org`,
`pubmed.ncbi.nlm.nih.gov`, `nature.com`, `royalsocietypublishing.org`,
`journals.sagepub.com`, Emerald, APA PDFs. All return 403 or a bot challenge.

**Two practical notes.** Direct PDF URLs often index as raw bytes — prefer the
landing page, or run `pdftotext`. And if a paper is only readable as an abstract,
cite **only what the abstract states**, say so in the body, and record it in the
audit. Never infer past the abstract, and never cite a paper you could not open.

## 11. Scratch files

The session scratchpad is **shared across concurrent subagents**. Name every
temporary file `<slug>-<purpose>.md`. A bare `body.md` will be overwritten by
another agent mid-draft and the schema validator will not catch it.
