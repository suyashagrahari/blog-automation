# Shortlist — miss-you axis

Run `2026-09-08-miss-you` · market **India** (`gl=in&hl=en&pws=0`) · seeds: miss
you, i miss you, miss you message, miss you quotes, missing you, miss you ideas, miss
you gf, miss you boyfriend, miss you long distance · **59 live SERPs measured
2026-09-08**, every one India-localised.

## Read this before the numbers

**There is now partial tool volume in this run, added 2026-09-08 after the SERP pass.**
Ahrefs' free Keyword Generator was queried for all 50 keywords at `country=in`. It
priced **11 of 50** and had **no row at all for the other 39**. No Semrush or Keyword
Planner access exists on this machine, and no Search Console export was supplied — the
sixth run asking. So:

- **The free tier returns buckets, not point volumes** (`<100`, `>100`, `>1,000`,
  `>10,000`). `>1,000` spans 1,000-10,000 and so straddles bands 3 and 4. Buckets are
  carried through verbatim in `ahrefs-free-india.tsv` and used only for ordering; none
  was converted into a monthly number.
- **`no Ahrefs row` is not `zero searches`.** It bounds a keyword below Ahrefs' India
  reporting floor, and no further. Ahrefs' India coverage of Hindi/regional and
  long-tail phrasings is thin, so absence is much weaker evidence here than it would be
  for a US English head term. Those 39 rows keep their `EST` band and are ranked below
  every priced row.
- **The tool data overturned this run's top pick.** `miss you long distance
  relationship quotes in hindi` led every earlier ordering on 15 autocomplete
  `prefix_hits`; Ahrefs prices it `<100/mo`. The Tamil variant, same seed set, came back
  `>1,000/mo`. So `prefix_hits` is **not** a volume proxy on this axis — it tracked
  phrasing breadth, not demand. `expected_clicks` was recomputed from the buckets, not
  rescaled, because `band_midpoint` is one of its three inputs.
- **Ahrefs and our own difficulty count disagree, and both are kept.** Ahrefs returns
  `Easy` for 10 of the 11 priced rows and `Hard` only for `miss you quotes in hindi`.
  Our count says that same keyword is 7/9 weak. They are not the same measurement — KD
  is a backlink-profile estimate, `weak/parsed` is a count of beatable results in a live
  India top 10 — so `ahrefs_kd` and `weakness_count` sit in separate columns and are
  never averaged.

The remaining `EST` caveats:

- **`est. volume` is a band, labelled `EST`,** placed from Phase 2 autocomplete
  `prefix_hits` (ordinal demand from Google, geo-targeted) plus SERP furniture. The
  band-to-midpoint table is the one in `references/gates.md`, used verbatim so this
  run stays comparable to the others. The `prefix_hits`→band thresholds, however, are
  calibrated to **this** run's seed set (13 seeds, max observed 15x) and are **not**
  comparable to the 2026-09-04 digital-gift run's, which used a different seed count.
- **`weak/parsed` is the difficulty figure, and it is not KD.** It is a count of
  beatable results in a live top 10, made today, on the India SERP. `gates.md` is
  explicit about why counting beats a KD score: KD is derived from backlink profiles
  and on long-tails is "frequently wrong in both directions — low KD on a SERP owned by
  entrenched authorities, high KD on a SERP full of forum threads."
- **`clicks/mo` is `band_mid × CTR(target) × win_probability`, all three estimates.**
  Rounded, `EST`, and **halved wherever an AI Overview fired** (33 of 59 SERPs).
  Its job is ordering, not forecasting.

**One caveat on the weakness counts, stated because it cuts against the good news.**
`pinterest.com` appears in **35 of 59** SERPs, so it adds +1 weak almost
everywhere. Pinterest is genuinely outrankable, so the count is not wrong — but a
Pinterest-heavy SERP also means the query is image-and-inspiration led, and a text page
converts worse there than the weakness count implies. Rows whose opening is mostly
Pinterest are marked.

---

## 1. This week — pages we already have that are one edit away

The cheapest traffic on the board, reported first because it costs an edit rather than
a post. **This axis is not new ground for the site**: `subhsandesh.in` is the 7th most
frequent domain across the 59 SERPs. `content/batches/` contains exactly one
miss-you post, so the rest were published outside the batch pipeline — worth knowing
before anyone writes a "new" page that already exists.

### Striking distance — improve, do not rewrite

| keyword | demand | est. volume | weak/parsed | AI Ov. | our pos | clicks/mo |
|---|---|---|---|---|---|---|
| what can i say other than i miss you | 7x | 300-1,000/mo | 4/8 | yes | — | 14 |
| i miss you online message | 4x | 300-1,000/mo | 3/7 | yes | @8 | 14 |
| miss you quotes in kannada | 8x | 300-1,000/mo | 4/10 | yes | @10 | 14 |

### Already position 1-4 — cut from the run

Writing another page for these is how cannibalisation starts.

| keyword | demand | est. volume | weak/parsed | AI Ov. | our pos | clicks/mo |
|---|---|---|---|---|---|---|
| i miss you website for girlfriend | 0x | under 300/mo | 4/6 | yes | @1 | — |
| cute ways to say i miss you | 0x | under 300/mo | 3/7 | yes | @2 | — |
| miss you surprise for girlfriend | 0x | under 300/mo | 8/9 | yes | @3 | — |
| miss you message for boyfriend | 6x | 300-1,000/mo | 2/7 | yes | @3 | — |
| i miss you page for boyfriend | 0x | under 300/mo | 3/6 | no | @4 | — |
| miss you messages for gf | 7x | 300-1,000/mo | 2/7 | yes | @4 | — |

---

## 2. New pages, in build order

9 themes survived every gate. Total realistic ceiling **~329 clicks/mo EST** —
small, and the honest read section explains why.

| keyword | demand | est. volume | weak/parsed | AI Ov. | our pos | clicks/mo |
|---|---|---|---|---|---|---|
| miss you long distance relationship quotes in hindi | 15x | 1,000-3,000/mo | 9/11 | no | — | 132 |
| miss you long distance relationship quotes in tamil | 15x | 1,000-3,000/mo | 7/7 | yes | — | 66 |
| miss you long distance relationship quotes | 14x | 1,000-3,000/mo | 3/9 | yes | — | 44 |
| miss you message for best friend | 7x | 300-1,000/mo | 5/9 | yes | — | 21 |
| miss you boyfriend quotes in marathi | 7x | 300-1,000/mo | 8/9 | yes | — | 21 |
| miss you quotes for instagram story | 4x | 300-1,000/mo | 5/9 | yes | — | 21 |
| what to do when you miss your girlfriend long distance | 12x | 300-1,000/mo | 3/9 | yes | — | 14 |
| open when you miss me ideas | 2x | under 300/mo | 6/8 | yes | — | 5 |
| miss you status for girlfriend | 4x | 300-1,000/mo | 2/7 | yes | — | 5 |

---

## 3. Secondaries — target on an existing page, do not give them their own

One theme = one page. These carry 0 expected clicks by construction; the head of their
theme carries the traffic.

| keyword | demand | theme | target it on |
|---|---|---|---|
| miss you long distance relationship status | 4x | ldr-miss-you | miss you long distance relationship quotes |
| miss you long distance relationship | 13x | ldr-miss-you | miss you long distance relationship quotes |
| miss you surprise for boyfriend | 0x | miss-you-page-tool | i miss you online message |
| open when you miss me ideas for him | 2x | open-when-letters | open when you miss me ideas |
| miss you long distance love quotes | 9x | ldr-miss-you | miss you long distance relationship quotes |
| miss you long distance friendship quotes | 9x | miss-you-friend | miss you message for best friend |
| miss you quotes for best friend | 7x | miss-you-friend | miss you message for best friend |
| miss you long distance relationship shayari in hindi | 15x | miss-you-shayari-hi | miss you long distance relationship quotes in hindi |
| what to do when you miss your boyfriend long distance | 1x | cope-missing-partner | what to do when you miss your girlfriend long distance |
| miss you ideas for boyfriend | 0x | miss-you-page-tool | i miss you online message |
| miss you ideas for girlfriend | 0x | miss-you-page-tool | i miss you online message |
| miss you long distance shayari | 9x | miss-you-shayari-hi | miss you long distance relationship quotes in hindi |
| miss you quotes in hindi | 8x | miss-you-shayari-hi | miss you long distance relationship quotes in hindi |
| what to do when you miss your boyfriend | 2x | cope-missing-partner | what to do when you miss your girlfriend long distance |
| creative ways to say i miss you | 0x | ways-to-say-miss-you | what can i say other than i miss you |
| how to tell someone you miss them | 0x | ways-to-say-miss-you | what can i say other than i miss you |
| i miss you letter for boyfriend | 0x | miss-you-messages | miss you message for boyfriend |
| what to do when you miss your girlfriend | 9x | cope-missing-partner | what to do when you miss your girlfriend long distance |
| miss you gf captions for instagram | 8x | insta-captions | miss you quotes for instagram story |
| miss you boyfriend captions for instagram | 7x | insta-captions | miss you quotes for instagram story |
| miss you story ideas for instagram | 7x | insta-captions | miss you quotes for instagram story |
| miss you long distance relationship captions for instagram | 6x | insta-captions | miss you quotes for instagram story |
| i miss you letter for gf | 4x | miss-you-messages | miss you message for boyfriend |
| miss you gf shayari in hindi | 7x | miss-you-shayari-hi | miss you long distance relationship quotes in hindi |
| miss you gf quotes in hindi | 7x | miss-you-shayari-hi | miss you long distance relationship quotes in hindi |
| miss you status in hindi | 4x | miss-you-shayari-hi | miss you long distance relationship quotes in hindi |
| miss you shayari for girlfriend | 0x | miss-you-shayari-hi | miss you long distance relationship quotes in hindi |
| miss you status for boyfriend | 2x | unthemed | miss you status for girlfriend |

---

## 4. Do not attempt — named, with the reason

13 keywords failed a gate. They are listed so the cost of skipping them is visible.

| keyword | demand | weak/parsed | gate failed | why |
|---|---|---|---|---|
| miss you gifts for boyfriend | 11x | 7/8 | 2-page-type | SERP wants ecommerce category page — a post cannot enter it |
| miss you gifts for girlfriend | 8x | 8/8 | 2-page-type | SERP wants ecommerce category page — a post cannot enter it |
| miss you gifts for husband | 8x | 7/8 | 2-page-type | SERP wants ecommerce category page — a post cannot enter it |
| miss you gifts for wife | 8x | 6/8 | 2-page-type | SERP wants ecommerce category page — a post cannot enter it |
| miss you gifts for best friend | 8x | 8/8 | 2-page-type | SERP wants ecommerce category page — a post cannot enter it |
| miss you card ideas for friends | 6x | 5/7 | 2-page-type | SERP wants DIY craft video / pin — a post cannot enter it |
| miss you gift ideas | 4x | 8/8 | 2-page-type | SERP wants ecommerce category page — a post cannot enter it |
| miss you card ideas for kids | 7x | 8/9 | 2-page-type | SERP wants DIY craft video / pin — a post cannot enter it |
| miss you card ideas | 5x | 6/8 | 2-page-type | SERP wants DIY craft video / pin — a post cannot enter it |
| what to send someone you miss | 2x | 6/8 | 2-page-type | SERP wants ecommerce category page — a post cannot enter it |
| miss you gifts online india | 0x | 9/9 | 2-page-type | SERP wants ecommerce category page — a post cannot enter it |
| miss you video for boyfriend | 0x | 7/8 | 2-page-type | SERP wants video / stock asset — a post cannot enter it |
| i miss you in hindi | 4x | 2/6 | 2-page-type | SERP wants dictionary / translation page — a post cannot enter it |

---

## 5. The honest read

**The seed was half right.** "miss you" has real demand and the site already ranks on
it — but the high-volume centre of the axis is *reading intent*, and the part of it
that is winnable is *not in English*.

**The vocabulary decides the SERP, again — and here the deciding word is the
language.** English `miss you quotes / messages / captions` SERPs are held by
theknot.com (17/59 SERPs), wikihow.com (13), womansday.com, countryliving.com,
today.com, southernliving.com, goodhousekeeping.com and marriage.com. Those are
enormous domains executing the exact format a new page would attempt, and they score
2-4 weak out of 8-9. The same queries in Hindi are held entirely by small shayari
sites and score 9/11 and 10/10 weak. **No US magazine has a Hindi page on this axis** (this holds for Hindi, Marathi and
Tamil; `miss you quotes in kannada` is the counter-example, and `competitor-map.md`
records it).

**The traffic ceiling here is low, and the reason is Gate 5, not difficulty.** The
biggest keywords on this axis end the searcher's job with a copied line of text:

```
10,000 searches × 0.1% conversion =  10 conversions
   300 searches × 5%   conversion =  15 conversions
```

A 300/mo doing-intent keyword beats a 10,000/mo copying-intent one for a product site.
That arithmetic is why the shortlist is short and why the shayari cluster — which is
pure copying intent — is recommended as a *ranking* play with a send-CTA rather than a
conversion play.

**The commercial half is not reachable.** `miss you gifts for <person>` looks like the
strongest opening in the entire run at 7-9 weak. It is a Gate 2 failure: the SERP is
fnp.com, oyegifts.com, amazon.in, giftcart.com, sendbestgift.com — ecommerce category
pages shipping physical objects. Neither a blog post nor a digital-page template enters
that SERP. Any difficulty-sorted spreadsheet puts these rows on top, and that is the
single most misleading thing such a sheet does on this axis.

**What is genuinely ours and under-exploited:** `open when you miss me` (6-7/8-9
weak, held by Pinterest, Wattpad, Tumblr and `openwhen.cards`) is the one cluster that
is both winnable and mechanically identical to the product — a sealed note opened on a
condition. It is low volume, and it is the best intent match in the run.

**One competitor to watch: `lovelydesign.in`** appears in 4/59 SERPs with
near-identical page titles ("Miss You Messages for Girlfriend: 80 Texts, Sorted…",
"A Miss You Page for Your Long-Distance Girlfriend"). Same country, same product shape,
same keywords. It is the only site in the set competing directly rather than adjacently.

## 6. The feedback loop

Every figure above is a guess about a SERP nobody has entered from this site's own
Search Console. The export would replace `EST` bands with real impressions and would
immediately separate "we rank 7th and get clicks" from "we rank 7th and get none" —
which is the difference between the two `improve-existing` recommendations above being
worth doing and being noise. **Ask again on the next run if it does not exist by then.**
`npm run keywords:inventory` will show next time which of this shortlist got written.

## 7. Handoff

Send these to `blog-optimisation` first, in this order. Its Phase 0 facts gate may
still refuse one — surviving every gate here is not a promise a post can be written
today.

1. **miss you long distance relationship quotes in hindi** — miss-you-shayari-hi, 9/11 weak, 1,000-3,000/mo EST, ~132 clicks/mo
2. **miss you long distance relationship quotes in tamil** — miss-you-tamil, 7/7 weak, 1,000-3,000/mo EST, ~66 clicks/mo
3. **miss you long distance relationship quotes** — ldr-miss-you, 3/9 weak, 1,000-3,000/mo EST, ~44 clicks/mo
4. **miss you message for best friend** — miss-you-friend, 5/9 weak, 300-1,000/mo EST, ~21 clicks/mo

**The Hindi/shayari pages need a writer who can actually write Hindi shayari**, not
translated English quotes. The incumbents are weak on authority and strong on
idiom; a translated page loses to them on the only axis they are good at.
