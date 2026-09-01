# love-gf keyword shortlist — 2026-08-31

Seed cluster: the `/love-gf` template (`client/app/(templates)/love-gf`) — a personalised,
shareable romantic page for a girlfriend with a love letter, photo gallery, background
music, notes, a Love Quiz, Truth-or-Dare, an "Our Story" game history, floating hearts
and an optional password gate.

Market: India (`gl=in`). Site: `subhsandesh.in`, blog at `/blog/<slug>`. Authority: low.
Asset types in play: blog post (28), comparison post (1), template page (1).

## Honest limits on these numbers

- **No Ahrefs / Semrush / Keyword Planner access.** Every volume figure is a band
  labelled `EST`, placed from autocomplete `prefix_hits` plus SERP furniture. None of
  them is a tool-verified monthly figure. Paste any tool export and these get replaced.
- **Difficulty is a weak-result count, not a KD score.** `weakness_count` is how many of
  the top 10 are forums, Pinterest, TikTok, marketplaces, off-intent pages, scraped PDFs
  or sites at our authority level. Gate 4: 5+ = prioritise, 3-4 = winnable, 1-2 = hard,
  0 = cut.
- **SERPs were served from a US IP.** `WebSearch` is US-only. Phrasing came from
  India-geo autocomplete (`--geo in`), so the *keywords* are Indian demand, but the
  *positions* are not India-localised. Discount confidence accordingly; the weak-result
  patterns (Pinterest / blogspot / Wikipedia-film noise on the language queries) are
  structural and will hold, the exact orderings will not.
- **Anchor:** `love quiz questions for girlfriend` (28x prefix_hits, joint highest in the
  run) is banded 3 (1,000-3,000/mo). Every other band is placed relative to it.
- **No Search Console export was supplied.** That is the single largest quality gap here
  and it takes two minutes to produce. Ask again before the next run.
- **`own_position` was not established by a per-keyword `site:` pass.** It is inferred
  from the 935 live Strapi articles (Jaccard token overlap, `strapi-dedupe.json`). No
  candidate scored ≥0.6, so all 30 are `none` — but that is a title-level check, not a
  live-rank check.

## Novelty against Strapi (the gap you asked for)

All 935 live articles were pulled and every candidate scored against every slug+title.

- **0 duplicates** (Jaccard ≥ 0.6).
- **16 near-neighbours** (0.4–0.6) that need deliberate differentiation, not avoidance.
  The recurring neighbours: `cute-typing-effect-love-letter-page-for-girlfriend`,
  `free-online-love-letter-editor`, `digital-gift-for-girlfriend-day`,
  `online-birthday-surprise-for-girlfriend`,
  `long-distance-relationship-anniversary-surprise-ideas`,
  `miss-you-surprise-page-for-girlfriend`.
- **The genuinely empty vein: Indian-language love letters.** Existing letter coverage is
  all mechanic-led ("typing effect page", "online editor"). Nothing targets
  `love letter for girlfriend in <language>` — and that is the lowest-difficulty,
  highest-certainty set in this run.

## The 30, by bucket

### Winnable now — 5+ weak results, prioritise (7)
| # | Keyword | Est. vol | Weak | Exp. clicks/mo |
|---|---|---|---|---|
| 1 | love letter for girlfriend in hindi written in english | 1,000-3,000 EST | 7/10 | 132 |
| 2 | how can i surprise my girlfriend online | 1,000-3,000 EST | 6/10 | 132 |
| 3 | surprise for girlfriend online | 1,000-3,000 EST | 6/10 | 132 |
| 4 | digital gift ideas for girlfriend | 1,000-3,000 EST | 6/10 | 132 |
| 5 | love letter for girlfriend in telugu | 300-1,000 EST | 8/10 | 43 |
| 6 | love letter for girlfriend in marathi / urdu / tamil / bengali | 300-1,000 EST | 6/10 | 43 ea |
| 7 | best digital gift for girlfriend · digital gift for girlfriend free | 300-1,000 EST | 6/10 | 43 ea |

### Winnable now — 3-4 weak results (17)
`cute website for gf` · `love website for girlfriend free` · `love quiz questions for
girlfriend` · `how much i love you messages for girlfriend` · `i love you message for her
to make her cry` · `love song dedication for her` · `love website for girlfriend template`
· `i love you website for girlfriend free` · `long distance relationship surprise ideas on
a phone` · `long distance relationship surprise website` · `long distance relationship
surprise gifts` · `i love you message for her long distance relationship` · `love song
dedicated to gf hindi` · `what is a good song to dedicate to your girlfriend` · `love
letter for girlfriend in gujarati`

### Hard — only with a real differentiator (3)
- `truth or dare questions for couples long distance` (2 weak) and `…over the phone`
  (2 weak) — truthordarequiz.com, marriage.com and paired.com are entrenched. The only
  differentiator is that `/love-gf` *plays* Truth-or-Dare in the page. Write the list
  only if the page it links to is the answer.
- `love website for girlfriend without coding` (1 weak) — **9 of 9 results are direct
  competitors** (lovelydesign.in at ₹79, yourlovepage.com/.online across six slots). A
  how-to cannot enter it. A genuine comparison table might.

### Reclassified — tool SERP, not a blog SERP (1)
- `love quiz game for girlfriend` (26x demand, band 3, **0 weak**) — the top 10 is
  couplesquizgame.com, syncwithlove.com, lovify, quiz-couple.com, lovebae, Google Play.
  Zero editorial results. Gate 2 cuts a blog post here and Gate 4 cuts it outright.
  Target it with the `/love-gf` Games tab metadata instead. `expected_clicks = 0` for the
  blog, by construction.

### Cut, and why
- `cute things to send your girlfriend over text` — lovepanky ×2, Parade, Zoosk,
  Mantelligence. 1 weak. Gate 4.
- `romantic surprise for girlfriend at home` — 4 weak, but the intent is candles and
  dinner. A digital page does not finish that searcher's job. Gate 5.
- `i love you message ringtone for girlfriend` (13x demand) — off-product entirely.
- `love website for girlfriend github` / `…code` / `make a love website using html css and
  javascript` (9x, 5x) — developer intent. They want to build it themselves; we sell not
  building it. Real demand, wrong audience.

## The Gate 5 arithmetic, stated

Cluster F (`how much i love you messages…`, `…make her cry`) carries the joint-highest
demand in the run and the weakest conversion fit — the searcher's job finishes when they
copy a line. Bands 2-3 with a copy-and-leave ending:

```
2,000 searches × 0.5% conversion  = 10 conversions
  650 searches × 4%   conversion  = 26 conversions   ← 'digital gift for girlfriend free'
```

Keep the message keywords, but write them with the page as the payoff ("send it as a page
she can open again"), not as another 200-message listicle. If they get written as
listicles they will rank and convert at near-zero.

## Publish order — first 6

1. **love letter for girlfriend in hindi written in english** — highest expected clicks,
   7/10 weak, zero Strapi overlap. Romanised Hindi is how the Indian market actually
   types this.
2. **digital gift ideas for girlfriend** — 27x demand, marketplace-only SERP, and the
   product literally *is* a digital gift. Best conversion fit in the run.
3. **how can i surprise my girlfriend online** (fold in `surprise for girlfriend online`
   — 5 shared URLs, one page) — 6/10 weak including two forum threads.
4. **love letter for girlfriend in telugu** — 8/10 weak, the single weakest SERP found.
5. **cute website for gf** + `love website for girlfriend free` — highest commercial
   intent; enter as a template gallery, and name the ₹79 competitor honestly.
6. **love quiz questions for girlfriend** — 28x demand against a 5-result SERP with two
   spam PDFs on a New Zealand immigration domain.

`publish_by` on every row is **2026-11-15**, working back 12 weeks from the 1-14 Feb
Valentine's peak. Nothing here is date-blocked today (Gate 0 passes for all 30) — this
cluster is evergreen with a February peak and an Aug 1 Girlfriend Day secondary spike,
and Girlfriend Day 2026 has already passed, which is why the existing
`girlfriend-day-*` articles dominated the near-neighbour list.

## Next cycle
`love letter for girlfriend in kannada` · `love letter for girlfriend in odia` ·
`love letter for girlfriend in nepali` (7x) · `love letter for girlfriend tagalog` (4x,
off-market) — ship after the top five languages prove the pattern.

## The uncomfortable read

This niche has real, funded competitors — `yourlovepage.com`, `yourlovepage.online`,
`lovepage.io`, `lovelydesign.in`, `justmeantforyou.com`, `lovetales.ai`,
`syncwithlove.com` — and they already own every high-intent product SERP end to end.
On `love website for girlfriend without coding` they hold 9 of 9 slots. You will not win
those with a blog post, and pretending otherwise is how a content plan burns a quarter.

What is actually open is the flank: **Indian-language love letters** (Pinterest and 2014
blogspots), **marketplace-owned gift queries** (Etsy, Walmart, Costco pages that answer
nobody), and **forum-owned surprise queries** (Quora, anandtech). Those 30 rows total
~1,600 expected clicks/mo at position 3 — a real number, not a transformative one. The
transformative move in this cluster is getting `/love-gf` named in other people's
roundups, because the roundups are what the answer engines cite.

Note also: the run pulled 15 of 30 rows against SERPs it verified directly. The rest are
`serp-pattern` — scored from a cluster sibling's verified SERP. Six of the language rows
are pattern-scored off three verified SERPs (hindi-in-english, marathi, telugu), which is
the strongest pattern in the run but is still an inference, not a measurement.
