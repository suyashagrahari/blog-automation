# SERP log — digital / online / virtual gifting — 2026-09-04

## Locale, stated per the skill rule

**Every position in this file was served from Google with `gl=in&hl=en`**, pulled
through a live browser session on an Indian-locale query string. Nothing here is a
US-served position, and no DuckDuckGo or Bing data is mixed in.

The 2026-09-03 run established why that matters: DuckDuckGo's US-weighted index
inverted every conclusion against real Google India on the gf/bf gifting axis. This
run went straight to Google and never used a second engine.

## Coverage — and what was NOT measured

| | |
|---|---|
| Keywords queued for Phase 4 | **62** |
| **SERPs measured** | **61** |
| Of those, usable (≥4 parsed hosts) | **59** |
| Excluded — no parseable host | **1** (`website for girlfriend reddit`) |
| Below the 4-host floor, no verdict recorded | **1** (`website for girlfriend github`) |

**Google rate-limited the session at request 41** with HTTP 429 and did not clear for
~35 minutes. The remaining 21 were then measured in three slower batches
(15-22s between requests, versus 9-15s before the block). **Every keyword in
`final50.json` therefore carries a measured SERP** — nothing is presented as checked
when it was not.

`website for girlfriend reddit` returned nine results that were entirely Reddit
threads; the `cite`-based parser extracted vote counts (`20+`, `2.5L+`) rather than
domains, so **zero hosts parsed and no weakness verdict exists for it.** It is
excluded from the 50 rather than scored. That is a Gate 1 signal in its own right —
an all-forum SERP for a query naming Reddit.

**Depth caveat.** The parser captured page-1 organic `h3` results only — 2 to 10
distinct results per SERP after deduplication, mean 8.2. So "8/8 weak" means eight of
the eight page-1 results, and `own_position: none` means "not on page 1", **not**
"not in the top 20".

**A false alarm worth recording.** The first block detector matched the string
`/sorry/index`, which appears in ordinary Google HTML boilerplate. It reported
`BLOCKED` on a page that had in fact returned 200 with nine good results. Had that
gone unchecked, this run would have reported a Google block that never happened. The
detector now requires `status !== 200` or the literal phrase `unusual traffic`.

**URLs are not in this file, and that is a real limitation.** Google now wraps every
organic result in an opaque `/goto?url=<token>` redirect, so the destination URL is
not present in the served HTML. Results are therefore identified by
**host + page title**, which is a good proxy for a URL but not the thing itself. This
matters for Phase 8a, whose rule is "3 or more identical *URLs*" — see below.

## AI Overview

**Fired on 45 of 61 SERPs.** Recorded per row. The Gate 6d CTR halving is applied to
exactly those 45 rows in `scored.json` and `final50.json`, and to no others.

The 16 SERPs with no AI Overview skew toward the most commercial, most tool-shaped
queries in the set — `digital love letter website free`, `surprise link for bf`,
`gift link for whatsapp`, `digital love letter for boyfriend`, `digital card for
love`, `digital love letter for her`, `digital love letter template`,
`online gift maker for gf`, `online gift maker for bf`, `digital sorry card for gf`,
`surprise message link for girlfriend`, `virtual gift for girlfriend` — which is a
weak signal that Google reads them as navigational-to-a-tool rather than
informational.

## How weakness was counted

Gate 4 counts a result weak if it is a forum, social, marketplace-where-content-would-
serve, off-intent, stale-year, thin, or **a site with authority comparable to or below
ours**. That last clause does the heavy lifting on this axis and it cuts both ways:

- The **2026-09-03 run's bug** was scoring unfamiliar *Indian retailers* as strong
  editorial. Recount moved mean weak from 4.8 to 6.4.
- **The mirror risk here** was scoring unfamiliar *tiny startups* as strong merely
  because the name was new. `gifft.me`, `qlovy.com`, `2-luv.com`, `aiskyla.com`,
  `surprises.gift`, `giftsqr.com`, `lovepaper.app`, `lovetale.app`, `emocia.net`,
  `justmeantforyou.com`, `yourlovepage.com`, `lovepage.io`, `digitalloveletters.com`,
  `loveyoumake.com`, `saysorry.in`, `letter-u.com`, `lovely-lens.com`, `ilovi.in`,
  `iloveyou.gift`, `creativegift.site`, `gifter.live`, `heartgift.in`, `yygifty.com`,
  `artrayd.com`, `scansurprise.com`, `bemyval.co`, `mewtrucard.com`, `joygram.io` —
  every one was checked against its own SERP title before being classed weak. They
  are single-purpose page builders at or below SubhSandesh's authority.

Deliberately classed **strong**, not weak: `paperlesspost.com`, `canva.com`,
`greetingsisland.com`, `americangreetings.com`, `bluemountain.com`, `jibjab.com`,
`punchbowl.com`, `adobe.com`, `evite.com`, `123cards.com`, `doozycards.com`,
`moonpig.com`, `cardly.net`, `kudoboard.com`, `genially.com`, `eventkingdom.com`,
`brides.com`, `goodhousekeeping.com`, `extension.usu.edu`, and the established QR
utilities (`me-qr.com`, `qr-code-generator.com`, `the-qrcode-generator.com`,
`orcascan.com`, `barcodesinc.com`, `qrcode.tec-it.com`).

The 21 second-wave SERPs added ~26 unseen hosts. **Where authority was genuinely
unclear, the host was classed STRONG** — `sendwishonline.com`, `poki.com`,
`rosebud.ai`, `wikihow.com`, `thoughtcatalog.com`, `hitched.co.uk`,
`goodhousekeeping.com`. That understates the opening rather than inflating it, which
is the safer direction to be wrong in.

Three off-intent classes were counted **weak**, per Gate 4's "a page that doesn't
directly answer the query": AI-girlfriend chatbots (`couple.me`, `kupid.ai`) ranking
on `website for girlfriend free`, a stock-vector pack (`magnific.com`) on
`digital love letter template`, and an AI-tool directory (`aixploria.com`).

Result: **mean weak 6.2 of mean 8.2 parsed.** 48 SERPs at 5+, 5 at 3-4, 4 at 1-2,
4 at zero.

## Phase 8a — and why the number moved

The rule is 3+ shared results in the top 10 means one keyword. Two linkage methods
were run deliberately, as a bracket, because they disagree sharply:

| Method | Clusters (of 61) | Collapse |
|---|---|---|
| Single-linkage, only web-wide broad hosts discounted | **12** | 80% |
| **Complete-linkage, hosts in >25% of SERPs discounted** | **40** | 34% |

**The single-linkage figure is not trustworthy here.** It chains: A~B and B~C put A
and C in one cluster even when A and C share nothing. With `gifft.me` in **43 of 61**
SERPs, `2-luv.com` in 26, `qlovy.com` in 23 and `aiskyla.com` in 20, chaining
collapsed 40 unrelated keywords into a single cluster. Those four hosts function as
broad-authority sites *on this axis*, and `gates.md` says explicitly to discount
shared broad-authority hosts.

The complete-linkage run cannot chain and discounts those hosts. It produces
coherent, interpretable groups — `digital love letter` (7), `digital card` (5),
`love website` (4), `virtual date` (3), `sorry` (2) — which is why the **13 themes
used in `shortlist.md` are built from the strict groups**, merged only where the
strict run left obvious singletons of one theme.

**Three of those 13 themes group keywords the strict run kept apart**
(`virtual-gift-partner`, `surprise-link`, `love-website-builder`). They are named in
`shortlist.md` as the ones most likely to be more than one page each.

The conclusion holds under both methods and is the most important line in this run:
**these 50 keywords are somewhere between 8 and 15 pages, not 50.**

## The measured SERPs

The 41 first-wave rows are below. The 20 second-wave rows are in
`serp-scored.json` and `serps-google.tsv`; their headline numbers are in
`shortlist.md`.

| Keyword | Weak / parsed | AI Ov | SERP shape | Cluster |
|---|---|---|---|---|
| digital love letter website free | **10/10** | — | tool-page | digital-love-letter |
| digital love letter maker | **9/9** | Y | tool-page | digital-love-letter |
| online gift ideas for gf | **9/9** | Y | blog | virtual-gift-surprise-link |
| surprise link for bf | **9/9** | — | tool-page | virtual-gift-surprise-link |
| gift link for whatsapp | **9/9** | — | tool-page | virtual-gift-surprise-link |
| digital love letter for boyfriend | **9/9** | — | tool-page | digital-love-letter |
| digital love letter for him | **9/9** | Y | tool-page | digital-love-letter |
| digital love letter with code | **9/9** | Y | tool-page | digital-love-letter |
| digital love letter with music | **9/9** | Y | tool-page | digital-love-letter |
| virtual gift for boyfriend | **8/8** | Y | mixed | virtual-gift-surprise-link |
| online surprise for boyfriend | **8/8** | Y | tool-page | virtual-gift-surprise-link |
| web page for boyfriend | **8/8** | Y | tool-page | love-website-builder |
| gift link for gf | **8/9** | Y | tool-page | virtual-gift-surprise-link · **OURS @5** |
| digital gift for boyfriend | **8/8** | Y | tool-page | virtual-gift-surprise-link |
| virtual gift website free | **8/8** | Y | tool-page | virtual-gift-surprise-link |
| website for girlfriend ideas | **8/9** | — | blog | love-website-builder |
| surprise link for girlfriend | **7/8** | Y | tool-page | virtual-gift-surprise-link · **OURS @6** |
| online surprise ideas for boyfriend | **7/7** | Y | tool-page | virtual-gift-surprise-link |
| virtual gift ideas for boyfriend | **7/7** | Y | blog | virtual-gift-surprise-link |
| virtual gift for boyfriend free | **7/7** | Y | tool-page | virtual-gift-surprise-link |
| digital gift ideas for boyfriend | **7/7** | Y | blog | virtual-gift-surprise-link |
| best virtual gift for boyfriend | **7/7** | Y | blog | virtual-gift-surprise-link |
| digital love letter app | 6/9 | Y | tool-page | digital-love-letter |
| virtual date with gf | 6/8 | Y | blog | virtual-date-night-ldr |
| virtual gift ideas free | 6/6 | Y | tool-page | virtual-gift-surprise-link |
| how to make a website for my boyfriend | 6/6 | Y | tool-page | love-website-builder |
| how to make a website for girlfriend | 6/7 | Y | tool-page | love-website-builder · **OURS @7** |
| digital card for love | 5/9 | — | tool-page | digital-card-partner |
| virtual date nights for long-distance couples | 5/7 | Y | blog | virtual-date-night-ldr |
| virtual date night for long distance | 5/7 | Y | blog | virtual-date-night-ldr |
| digital card for gf | 4/9 | Y | tool-page | digital-card-partner |
| digital card for boyfriend | 4/8 | Y | tool-page | digital-card-partner |
| digital card for boyfriend free | 4/9 | Y | tool-page | digital-card-partner |
| digital birthday card for boyfriend | 2/9 | Y | tool-page | digital-birthday-card |
| qr code gift generator | 2/8 | Y | tool-page | qr-code-gift |
| digital invitation card maker online free | 1/10 | — | tool-page | digital-invitation |
| **website for girlfriend github** | 1/**2** | — | dev-repo | *below the 4-host floor — no verdict* |
| **digital birthday card for girlfriend** | **0/10** | — | tool-page | Gate 4 cut |
| **digital birthday wish for boyfriend** | **0/8** | Y | tool-page | Gate 4 cut |
| **how do i make a digital card** | **0/7** | Y | tool-page | Gate 4 cut |
| **digital invitation cards online** | **0/9** | Y | tool-page | Gate 4 cut |

## Phase 5 — answer-engine citation harvest: NOT RUN

`WebSearch` was not available for this run and the Google budget was exhausted on
Phase 4. **No answer-engine pass was performed**, so nothing in this directory is
citation data and `competitor-map.md` describes Google rankings only.

To get it properly, run these five queries in ChatGPT / Gemini / Perplexity and paste
the cited domains back — 20 minutes, and better data than anything inferable here:

```
what is a good virtual gift for a long distance boyfriend
how do I send my girlfriend a surprise link
best free digital love letter website
how to make a website for my girlfriend without coding
what can I gift my girlfriend online in India
```

## What the rate limit cost, in the end

Nothing in the shortlist — all 21 were measured after the pause. But two of them
turned out to matter more than their demand suggested, and they were the two I had
flagged as the gap: **`digital sorry card for gf`** and **`sorry surprise link for
girlfriend`** map onto `/apology-dashboard`, the **#3 template at 753 pages created,
22.0% of everything** — and `subhsandesh.in` already ranks **@9 and @4** on them.
Had the run stopped at 41 SERPs, the shortlist would have missed both, and would have
reported that theme as having no coverage.

Nine of the 13 own-page rankings in this run came from that second wave. Stopping at
the rate limit would have produced a materially wrong picture of what the site
already owns.
