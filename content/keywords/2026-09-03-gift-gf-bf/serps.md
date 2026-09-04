# SERP log — gift gf/bf — 2026-09-03

## Locale, stated per the skill rule

**Every position below was served from Google with `gl=in&hl=en`**, pulled through a
live browser session. Nothing here is a US-served position.

**AI Overview fired on 34 of 34.** Recorded per row; the CTR halving in
`final30.json` follows from it.

**Depth caveat:** the parser captured the organic `h3` results on page 1 only — 6 to 9
distinct hosts per SERP after deduplication, not a full top-20. So "weak 5/8" means
five of the eight organic hosts on page 1, and `own_position: none` means "not on
page 1", not "not in the top 20".

## Why there are two engines in this directory

`serps-a/b/c.json` are DuckDuckGo (`kl=in-en`) and are kept **only as the record of a
wrong answer.** `WebSearch` was exhausted (200/200) so DDG was tried first; it blocked
the IP after 4 of 40 keywords, and those few results pointed the opposite way to
Google India — US editorial instead of Indian retailers. `serps-google.tsv` is the
data the shortlist is built on. Do not average the two.

## The 34, as measured


### These counts are the RECOUNTED ones

The first pass classified weak results against a fixed list of well-known shops, so
every unfamiliar Indian gifting retailer landed in the strong column. A batch writer
caught it: `confettigifts.in` and `jusst4you.com` are retailers, and so were
`boontoon.com`, `zwende.com`, `boxupgifting.com`, `giftory.com`, `saugatonline.com`,
`uncommongoods.com`, `incrediblegifts.in`, `lovelydesign.in`, `qlovy.com` and more.
A later writer found `endlessdistances.com` ranks a 37-item affiliate list with a
discount code, and another that `anncheshire.co.nz` is a florist whose blog 404s.

Recounted: **mean weak 4.8 → 6.4** of 6–9 parsed hosts; rows in the 5+ tier 22 → 32
of 34. `pampers.com`, `thebump.com` and `clearblue.com` were deliberately NOT
reclassified — on a pregnancy-announcement query they are on-intent editorial.

**An earlier version of this file carried the pre-recount numbers**, which two writers
independently flagged as disagreeing with `final30.json`. It is now generated from
`scored.json`, so the two agree. Trust `final30.json` if they ever diverge again.

| Keyword | Weak / parsed | AI Ov | Weak hosts | Strong hosts |
|---|---|---|---|---|
| surprise gift for girlfriend on valentine's week | **8/8** | Y | fnp.com, oyehappy.com, oyegifts.com, amazon.in, pinterest.com, cherishx.com, confettigifts.in, jusst4you.com | — |
| how to surprise my girlfriend with flowers | **8/8** | Y | myflowertree.com, pinterest.com, interflora.in, reddit.com, regalflowers.com.ng, bloomsflora.com, flowersathilltop.com, williampaulfloraldesignatl.com | — |
| surprise gifts for girlfriend on valentine's day | **8/8** | Y | igp.com, fnp.com, flipkart.com, pinterest.com, caratlane.com, amazon.in, youtube.com, confettigifts.in | — |
| anniversary gift for boyfriend unique | **7/8** | Y | oyehappy.com, pinterest.com, igp.com, amazon.in, reddit.com, confettigifts.in, uncommongoods.com | theknot.com |
| romantic gift for bf birthday | **6/7** | Y | oyehappy.com, oyegifts.com, pinterest.com, fnp.com, tiedribbons.com, confettigifts.in | theknot.com |
| anniversary gift for boyfriend 2 years | **6/7** | Y | pinterest.com, amazon.in, etsy.com, reddit.com, oyehappy.com, confettigifts.in | theknot.com |
| romantic gift ideas for boyfriend | **5/7** | Y | fnp.com, pinterest.com, oyehappy.com, confettigifts.in, saugatonline.com | theknot.com, endlessdistances.com |
| romantic gifts for boyfriend long distance | **5/7** | Y | amazon.in, oyehappy.com, pinterest.com, fnp.com, etsy.com | endlessdistances.com, theknot.com |
| how to surprise my boyfriend for no reason | **5/8** | Y | reddit.com, pinterest.com, quora.com, fnp.com, proflowers.com | wikihow.com, zenhabits.net, munchiesandmunchkins.com |
| how to surprise my boyfriend in long distance relationship | **5/8** | Y | pinterest.com, quora.com, reddit.com, mysweetldr.medium.com, thezappybox.com | endlessdistances.com, wikihow.com, camillestyles.com |
| how to surprise your boyfriend randomly | **4/8** | Y | reddit.com, pinterest.com, youtube.com, quora.com | wikihow.com, munchiesandmunchkins.com, stylecraze.com, anncheshire.co.nz |
| how to surprise my girlfriend for no reason | **4/8** | Y | quora.com, reddit.com, pinterest.com, boontoon.com | romantic.ua, wikihow.com, zenhabits.net, marriage.com |
| how to surprise my boyfriend with pregnancy | **3/8** | Y | za.pinterest.com, reddit.com, in.pinterest.com | pampers.com, oasisindia.in, thebump.com, clearblue.com, focusonthefamily.com |
| surprise gift for girlfriend instant | **9/9** | Y | fnp.com, oyegifts.com, igp.com, youtube.com, instagram.com, amazon.in, oyehappy.com, lovelydesign.in, qlovy.com | — |
| how to surprise my gf on her birthday | **9/9** | Y | reddit.com, pinterest.com, cherishx.com, quora.com, youtube.com, incrediblegifts.in, surprisemachi.com, giftory.com, showcity.in | — |
| romantic gift for boyfriend on valentine's day | **8/8** | Y | fnp.com, oyehappy.com, amazon.in, pinterest.com, caratlane.com, flipkart.com, confettigifts.in, chococraft.in | — |
| how to surprise my boyfriend on his birthday | **8/8** | Y | quora.com, thezappybox.com, cherishx.com, reddit.com, pinterest.com, bookthesurprise.com, blacks.ca, confettigifts.in | — |
| how to surprise your boyfriend on his birthday online | **8/8** | Y | pinterest.com, thezappybox.com, oyegifts.com, cherishx.com, quora.com, igp.com, gifft.me, memento.com | — |
| anniversary gift for boyfriend 1 year | **7/8** | Y | amazon.in, pinterest.com, reddit.com, igp.com, fnp.com, oyehappy.com, confettigifts.in | theknot.com |
| how to surprise my boyfriend on our anniversary | **7/8** | Y | pinterest.com, igp.com, fnp.com, quora.com, oyehappy.com, greetingsisland.com, boxupgifting.com | theknot.com |
| anniversary gift for boyfriend long distance | **7/8** | Y | oyehappy.com, amazon.in, pinterest.com, reddit.com, zwende.com, boxupgifting.com, confettigifts.in | endlessdistances.com |
| anniversary gift for boyfriend 5 years | **7/8** | Y | amazon.in, pinterest.com, reddit.com, igp.com, oyegifts.com, oyehappy.com, etsy.com | theknot.com |
| anniversary gift for boyfriend 3 years | **7/8** | Y | meesho.com, pinterest.com, amazon.in, youtube.com, quora.com, etsy.com, bumblebeelinens.com | theknot.com |
| what are good gift ideas for boyfriend | **7/9** | Y | fnp.com, reddit.com, oyehappy.com, youtube.com, bigsmall.in, confettigifts.in, theadventurechallenge.com | styledbymckenz.com, endlessdistances.com |
| gift ideas for boyfriend anniversary | **7/8** | Y | oyehappy.com, pinterest.com, fnp.com, reddit.com, amazon.in, confettigifts.in, uncommongoods.com | theknot.com |
| gift ideas for boyfriend christmas | **7/8** | Y | fnp.com, pinterest.com, reddit.com, youtube.com, amazon.in, nestasia.in, theadventurechallenge.com | styledbymckenz.com |
| surprise gift for girlfriend at work | **6/8** | Y | fnp.com, amazon.in, quora.com, nestasia.in, reddit.com, boontoon.com | theknot.com, styledbymckenz.com |
| how to surprise my boyfriend when he comes home | **6/8** | Y | reddit.com, pinterest.com, quora.com, arnolditkin.com, togetherv.com, boomf.com | wikihow.com, changehim.com |
| gift ideas for girlfriend 1 year anniversary | **6/7** | Y | pinterest.com, oyehappy.com, reddit.com, amazon.in, igp.com, confettigifts.in | theknot.com |
| best gift for boyfriend on his birthday | **6/7** | Y | fnp.com, pinterest.com, oyehappy.com, youtube.com, oyegifts.com, confettigifts.in | styledbymckenz.com |
| how to surprise my girlfriend without money | **5/8** | Y | reddit.com, quora.com, facebook.com, scribd.com, slownorth.com | zenhabits.net, wikihow.com, celebrateagain.org |
| how to surprise my girlfriend after work | **5/9** | Y | quora.com, reddit.com, youtube.com, boontoon.com, giftory.com | wikihow.com, romantic.ua, thetravellingsquid.com, marriage.com |
| how to surprise my boyfriend just because | **5/8** | Y | reddit.com, fnp.com, pinterest.com, quora.com, confettigifts.in | wikihow.com, vice.com, theknot.com |
| gift ideas for boyfriend handmade | **5/6** | Y | pinterest.com, amazon.in, nestasia.in, aftertaste.co.in, zwende.com | stylebyemilyhenderson.com |

## Not measured

Six keywords could not be pulled: Google began returning HTTP 429 with a CAPTCHA
challenge and the run **stopped rather than push through it.**

| Keyword | Demand | Reason |
|---|---|---|
| `surprise gift for girlfriend website` | 8x | 429 + CAPTCHA |
| `surprise gift for girlfriend link` | 8x | 429 + CAPTCHA |
| `what can i gift my girlfriend` | 8x | throttled, 0 hosts parsed |
| `best gift for girlfriend handmade` | 7x | throttled, 0 hosts parsed |
| `how to impress my girlfriend by texting` | 4x | throttled, 0 hosts parsed |
| `virtual surprise gift for girlfriend` | 1x | throttled, 0 hosts parsed |

An empty parse is recorded as a **failure**, never as "zero weak results" — that
distinction is the one that would otherwise have cut every keyword in this run.

## Phase 5 — answer-engine citations

**Not run.** No quota remained. No citation data was collected and none is claimed.
