# Wave-2 orchestrator notes — `2026-09-15-virtual-gift-30`

Running log. Written during the wave, not after, so the reasoning survives.

## Why wave 2 needed a new keyword harvest

Of the 73 survivors in `content/keywords/2026-09-15-virtual-gift-100/`, **67 were
already claimed** by wave 1 as primaries or secondaries. Eight were unclaimed and
all eight were near-duplicates of posts already written. The run could not supply
thirty more keywords.

So a fresh India-geo autocomplete harvest ran on eight mechanic-led seeds →
`content/keywords/2026-09-15-virtual-gift-100/ac3/autocomplete.csv` (458 rows).
Combined with ac1+ac2 and filtered — 4+ words, digital/mechanic intent, minus
gift-card, international-delivery, physical-product and dev-tutorial noise, minus
anything within Jaccard 0.7 of the 67 claimed keywords or the 905 live slugs —
that left ~2,300 candidates.

**The finding that mattered: wave 1 chased the word "gift" and nobody chased
"website".** `birthday website for girlfriend` (prefix_hits 25), `romantic
website for girlfriend` (23), `love website for girlfriend` (17), `cute website
for girlfriend` (12). Its SERP is the cleanest gap found in either run — #1 is a
GitHub repo, four of the top ten are Reddit threads, and there is no ecommerce
and no authoritative page at all. Searchers want this enough to write code for
it. That is a literal description of the product.

## Three rows killed by the collision check before anything was written

| killed | why | replaced with |
|---|---|---|
| `birthday website for boyfriend` | live `/blog/birthday-surprise-website-for-boyfriend`, Jaccard 0.80 | `digital gift for boyfriend` |
| `romantic proposal website for girlfriend` | 0.80 against sibling `romantic website for girlfriend`, plus live `/blog/create-interactive-proposal-website-girlfriend` | `virtual gift for bf` |
| `how to surprise boyfriend on his birthday online` | live `/blog/how-to-surprise-girlfriend-on-birthday-online` 0.67 + claimed `how to surprise girlfriend online` | `digital gift ideas for girlfriend` |

Ten further rows carry a `nearestLive` in `WAVE2-PLAN.json` and must differentiate
and link it, or abort.

## Templates — the user's stated reason for this wave

Wave 1 linked 20 of 27 romance/novelty templates and left **seven never linked
once in thirty posts**: `/missyou-gf`, `/court-of-love`, `/vending-machine`,
`/nutrition`, `/recharge`, `/searched`, `/legal-notice`. Wave 2 assigns all seven,
plus the three wedding templates. Every template in `TEMPLATE_LINKS` now appears
somewhere in the batch.

## Tooling failures hit during the wave, and what was done

1. **WebSearch exhausted, 200/200, at the start.** Not recoverable in-session.
   Switched Phase 1 to `scripts/serp.mjs` (Brave), which exists for exactly this.
2. **Brave then 429'd under six concurrent agents** — including on the
   cannibalisation gate, which fails *silently in the permissive direction*.
   Fixed by collecting all thirty SERPs **serially** in the background to
   `SERPS-WAVE2.md` and forbidding agents from calling `serp.mjs` at all.
3. **No way to discover sources without a search engine.** Measured the open
   scholarly APIs from this sandbox and wrote the results into BRIEF-WAVE2 §1b:
   Europe PMC and Crossref work reliably, DOAJ works only with two- or three-word
   queries, and **OpenAlex is 429 from here with or without a polite-pool
   `mailto`** — do not retry it next batch. Agents later added two more
   measurements: **OpenAIRE works**, and **Semantic Scholar 429s** like OpenAlex.
   So the working set is Europe PMC, Crossref, DOAJ (short queries) and OpenAIRE.

## Pending at the end of the wave — do not forget

- [ ] `batch.json` still lists only the thirty wave-1 slugs. Rebuild it over all
      sixty, or the verifier reports `blogs != files on disk` batch-wide.
- [ ] `birthday-website-for-girlfriend` records one audit failure that is **no
      longer true**: it read *"Every internal link is a real URL from
      TEMPLATE_LINKS"* as forbidding the `nearestLive` blog cross-link. That item
      governs template links; blog cross-links are separate and the verifier
      already excludes them from the 2–4 count. BRIEF-WAVE2 §3 now says so.
      Move that item from `failed` to `passed` in the remediation pass.
- [ ] Enforce source caps **once, at quiescence**, across all sixty posts. Never
      mid-run — that mistake cost a rewritten section in wave 1.
- [ ] `content/facts.md` "## Pricing (fill in by hand)" is still empty, so posts
      whose keyword contains "free" cannot confirm a price. Needs the user.

- [ ] **Cross-link the "website for …" cluster.** `birthday-website-for-girlfriend`,
      `romantic-website-for-girlfriend` and `cute-website-for-girlfriend` are one
      intent cluster written in parallel, so none could link the others — they did
      not exist on disk yet, and they are not in `TEMPLATE_LINKS` or Strapi. Add
      the cross-links in the final pass or the cluster ships with no internal
      structure at all. The same applies to the seven long-distance posts.

## The SERP situation reversed mid-wave — seven posts need a re-check

Order of events, because it determines which posts are weaker:

1. WebSearch exhausted at 200/200 before the wave started.
2. `scripts/serp.mjs` (Brave) hard-429'd and never recovered. Six agents burned
   over an hour of wall-clock on retries returning nothing.
3. `scripts/serp-ddg.mjs` written to replace it. DuckDuckGo's POST endpoints are
   not bot-challenged, and DDG takes `kl=in-en`, so the replacement produces
   **India** SERPs — better evidence than the us-served Brave data it replaced.
4. All thirty rows harvested into `SERPS-WAVE2.md`, then eight Gate 2 failures
   swapped out and their replacements harvested too.

**The posts written before step 4 had no SERP for their own keyword** and say so
honestly in their audits. They are not wrong, but they are weaker than the later
ones, and the fix is now cheap because the SERP exists:

- `romantic-website-for-girlfriend`
- `cute-website-for-girlfriend`
- `digital-gift-for-boyfriend`
- `love-letter-website-for-girlfriend`
- `digital-gift-for-husband`
- `long-distance-relationship-gifts-online-free`
- `long-distance-relationship-gift-ideas-for-girlfriend` (read the file while it
  was still a 10-line header — its Gate 2 call was reasoned from autocomplete
  and turned out to match the measured SERP, but it was not measured)
- (`birthday-website-for-girlfriend` and `digital-gift-for-wife` had the
  us-served Brave SERP from BRIEF-WAVE2 §5, so they are half-covered)

**In the Phase 8 remediation pass, give each of these its India SERP section from
`SERPS-WAVE2.md`** and let the remediator close the two checklist items they
had to fail — "a claim none of the top 5 pages make" and "no section mirrors a
competitor's framing". Both are now answerable.

## Competitors discovered in the India SERPs

Not in `BRIEF.md` §1 or `references/competitors.md`, and several rank above us:
`aiskyla.com`, `iloveyou.gift`, `couplemoment.com`, `hugnify.com`,
`feelclose.app`, `giftfeels.com`, `myheartcraft.com`, `justmeantforyou.com`,
`yourlovepage.com`, `lovepage.io`, `wishcupid.in`, `alwaysyou.in`,
`thegreeter.in`, `instamemory.in`, `apologify.com`, `saysorry.in`,
`mewtrucard.com`, `cutiepage.in`, `wishprise.online`, `bondlyfe.com`.

**`giftfeels.com` appears in 14 of the 30 India SERPs** — more than any rival
except Etsy. It is the topical authority on this axis and nobody had noticed it.
Worth adding to `references/competitors.md` for every future batch.

## Striking distance — the highest-ROI finding of the wave

Cheaper than any new post, and the skill says to report these first:

| query | our position | page | action |
|---|---|---|---|
| `sorry page for girlfriend online` | **2** | `/blog/sorry-gift-online-for-girlfriend` | hold |
| `wedding wish page online` | **2** | homepage | hold |
| `apology website for girlfriend` | **7** | `/blog/website-to-say-sorry-to-girlfriend` | **retitle — one place off page one** |

## The best finding of the wave came from an abort

`digital-gift-ideas-for-girlfriend` was aborted by its own agent rather than
written. It ran one `serp-ddg` cannibalisation call against wave-1's published
`digital gift for girlfriend` and found **5 of 10 URLs byte-identical with the
same page at #1**. Adding "ideas" does not change what the engine resolves the
query to. Its research brief is kept; no source was spent; no template coverage
was lost. It was replaced with `birthday wish website for friend`.

**The process defect it exposed, which will recur:** the Gate 2 screen that
killed eight rows measured *ecommerce density* and nothing else. It never
measured **URL overlap against rows already written or planned**. Those are two
different failure modes — one says "this SERP is owned by retailers", the other
says "this SERP is the one we already wrote". The second is invisible to the
first, and it is the one that produces quiet self-cannibalisation.

Fix for wave 3, cheap now that `serp-ddg.mjs` is not rate-limited: **at planning
time, run one SERP per candidate and reject any candidate sharing 4+ of 10 URLs
with an already-claimed row.** That is 30 calls and about four minutes, and it
catches this before an agent is spawned instead of after 100k tokens.

It also explains the whole Gate 2 pattern in one sentence, which nothing else in
either run managed: **a retailer cannot ship a digital thing.** `online` and
`creative` are words an Etsy or IGP category page can honestly carry, so retail
ranks for them; `digital` is not, so retail vacates and personalised-page
startups fill the space. Measured on two near-identical queries in the same
file: `digital gift ideas for girlfriend` is 2/10 retail, `online creative gift
ideas for girlfriend` is 8/10. Same tail, different qualifier.

**Implication for keyword selection generally:** prefer `digital` over `online`
or `creative` as the qualifier on this axis, wherever both have demand.

## My Gate 2 classifier was lenient — agents caught it

The orchestrator's ecommerce/listicle screen was a hostname regex over a fixed
list (amazon, flipkart, etsy, igp, winni, fnp…). Agents who read their own SERP
by hand consistently scored it **worse** than the regex did. On
`romantic gift for husband birthday` the regex said 3 ecommerce + 1 listicle;
reading the ten by hand gave **five storefronts** (Flipkart, Confetti, Swashaa,
Oye Happy, Etsy) **and four affiliate listicles**, i.e. zero informational
results.

The regex cannot know that `confettigifts.in`, `swashaa.com` and `oyehappy.com`
are storefronts. So **the eight rows it killed were certainly right, but the
rows it merely flagged "watch" were probably worse than reported.** No post was
harmed — every affected agent read its own SERP and wrote the honest version —
but do not trust the automated score alone next time.

Better screen for wave 3: classify by *page shape* rather than hostname —
a result is transactional if its URL contains `/product`, `/collections`,
`/gifts/`, `/s?k=`, `/market/`, or `/q/`. That catches an unknown storefront,
which a hostname list never will.

## Correction: `kl=in-en` is India-localised, not India-native

I described the DDG harvest to the user as "real India SERPs". That is true in
the sense that `kl=in-en` changes the result set, and false in a way worth
recording: on `long distance gift for mom` the agent found the `in-en` SERP
returning **`amazon.com`, not `amazon.in`, with zero India-native results.**

So `kl=in-en` is a region *hint* that the engine applies unevenly, not a
guarantee of India-native results. Two consequences:

1. **Do not state a DDG position as an India rank** without checking whether the
   results are actually Indian properties. The agent's observation — that an
   entire SERP for an India-geo query is US retail — is itself the finding, and
   a better one than the position numbers: it means nobody is serving this query
   in India at all.
2. The India **autocomplete** (`ac*/autocomplete.csv`) remains the stronger
   India signal, because it comes from Google with an explicit `gl=in`. Where
   the two disagree, trust the autocomplete on demand and the DDG SERP only on
   page-type mix.

## Correction: Europe PMC recovered the same day

It 503'd for several hours on 2026-09-16 and then returned HTTP 200 on a smoke
test plus four full queries. The BRIEF-WAVE2 §1b warning was accurate when
written and is now stale. **Try it; do not assume it is down.**

Newly measured as blocked this session, on top of the BRIEF.md §10 list:
`academic.oup.com` (403), `openedition.org` (Anubis challenge), `cureus.com`
(403), `scielo.br` (502). And `osf.io` serves JS-rendered HTML — use
`api.osf.io` instead, which works.

## SERP-overlap audit across the whole wave — the finding that matters most

Measured from the 38 SERPs in `SERPS-WAVE2.md`, normalised to host+path.
**Eleven pairs of written or planned rows share 4 or more of 10 URLs** — the
same threshold agents were told to abort on:

```
6/10  long distance relationship gifts to stay connected  <-> ...gift ideas for girlfriend
5/10  romantic website for girlfriend                     <-> website to impress girlfriend
5/10  cute website for girlfriend                         <-> cute website for boyfriend
5/10  long distance relationship gifts online free        <-> ...gift website  [aborted]
5/10  long distance relationship interactive gifts        <-> ...gift website  [aborted]
4/10  cute website for girlfriend                         <-> website to impress girlfriend
4/10  ...gifts to stay connected                          <-> ...gifts for him
4/10  ...gifts to stay connected                          <-> ...interactive gifts
4/10  ...gift ideas for girlfriend                        <-> ...gifts for him
4/10  ...gift ideas for girlfriend                        <-> ...interactive gifts
4/10  ...gifts for him                                    <-> ...interactive gifts
```

**Google does not resolve these clusters by recipient or by qualifier.** The
cleanest demonstration: `birthday website for wife` shares **6/10** URLs with
`birthday website for girlfriend`. Changing the recipient does not change the
SERP. That is why `birthday website for wife` was rejected as the replacement
30th row despite scoring zero ecommerce.

**The orchestrator error, stated plainly:** the 4+ overlap threshold was applied
to *new candidate* rows only. It was never run across the rows already written.
Two agents discovered it independently — one aborted on it, one measured 4/10
and justified differentiating anyway — which is how it surfaced at all.

**What this does and does not mean.** Shared SERP results mean these keywords
occupy similar space; they do not mean the posts duplicate each other. Every
agent in the clusters above differentiated on angle, audience and sources, and
several checked their split explicitly and recorded it. The real risk is split
signal, not duplicate content.

**Mitigation is internal linking, not deletion.** A cluster with an explicit
hub-and-spoke link structure reads to a search engine as a set with one primary;
the same pages with no links between them read as rivals. The cross-link pass
was already pending because parallel agents could not link siblings that did not
exist on disk yet — it is now the highest-value item in the close-out, not
housekeeping.

**For wave 3, do all of this at planning time:** build the candidate list, pull
one SERP per candidate, and reject any candidate sharing 4+ URLs with an
*already-claimed* row **or with another surviving candidate**. `scripts/serp-score.mjs`
now does both halves; it did not exist when this wave was planned.

## Final state at close-out — 2026-09-16

| | |
|---|---|
| posts in batch | **60** (30 wave 1 + 30 wave 2) |
| total words | **105,212** |
| audit items | **2,911 / 3,000** passing |
| source caps | **zero violations** — 264 URLs, 215 domains, none over |
| blog cross-links | 70, up from 16; all four flagged clusters fully linked |
| verifier | **✔ no problems** |
| research briefs | 62 — 60 posts plus 2 for the aborted rows |

Two rows were aborted by their own agents on cannibalisation grounds and both were
replaced after screening: `digital gift ideas for girlfriend` →
`birthday wish website for friend`, and `long distance relationship gift website`
→ `anniversary wish page online`. Their research briefs are kept, because the
reasoning is the useful part.

## Still open — needs the user, not another agent

1. **`content/facts.md` "## Pricing (fill in by hand)" is empty.** Sixteen of the
   sixty posts now carry a sentence explicitly declining to quote a price, several
   of them on keywords containing "free". Every one is honest and every one is
   weaker than it needs to be. Filling in two lines closes all sixteen.
2. **Neither wave is published.** Both need the Vercel deployment → Batches tab →
   review → tick → publish.
3. **Nothing is committed**, and `main` is still ahead of `origin/main` from the
   previous merge.

## Product gaps the batch surfaced, worth more than the posts

Found by agents reading `TEMPLATE_LINKS` against real SERPs:

- **No wedding-congratulations template.** `/wedding-shaadi`, `/shaadi-card` and
  `/reception` are all invitations, which travel couple → guests. A wish travels
  guest → couple. subhsandesh.in already ranks **#2** for `wedding wish page
  online`, so this is demand we rank for and cannot fully serve.
- **No non-romantic birthday template.** `/birthday-gf` is the only birthday page
  and its copy is partner-shaped. `/birthday-friend` and `/birthday-bestfriend`
  were removed on 2026-09-02 because they 307'd to `/birthday-gf`. The sister,
  friend and mom posts all had to say so.
- **No group-signed page.** Several wish-page competitors let many people sign one
  page for one recipient. We have no equivalent.
- **The password default is wrong for some recipients.** 40.6% of creators
  password-protect before sharing. For an older parent in another city that is a
  barrier, not a feature — the `long-distance-gift-for-mom` post argues this from
  proxy-use research.

## Striking distance — cheaper than any new post

| query | position | page |
|---|---|---|
| `sorry page for girlfriend online` | **2** | `/blog/sorry-gift-online-for-girlfriend` |
| `wedding wish page online` | **2** | homepage |
| `gift page kaise banaye` | **5** | homepage |
| `apology website for girlfriend` | **7** | `/blog/website-to-say-sorry-to-girlfriend` |

The last one is the single best-value item in the run: the page exists, it is one
place off page one, and the fix is a title and heading edit.
