# Research brief — `online-propose-day-gift-for-girlfriend`

Batch: `2026-09-15-virtual-gift-30` · Keyword: **online propose day gift for girlfriend** ·
Secondary keywords: none · Category: `modern-romance` · Drafted 2026-09-15.

---

## Phase 0 — Data gate

`content/facts.md` regenerated 2026-09-15. Ten lines used (see `batchMeta.factsUsed`).
The **Pricing** block is empty, so no price, plan or "free tier" claim appears anywhere in
the post — the body says so explicitly in the sources section rather than staying silent
about it.

The two lines carried inside the first 150 words are the two the BRIEF §4 flags as the
least obvious: **40.6% password-protect before sharing** (1,767 of 4,357) and the
**6.2-hour median first-save-to-last-edit gap** (n = 1,125, `/love-gf`). Neither is used
as the opener by the sibling posts checked in `blogs/`.

## Phase 1 — SERP and competitive set

Not re-run live for this keyword; the batch-level SERP work in `BRIEF.md` §1–2 governs.
The competing set on this axis is `gifft.me`, `qlovy.com`, `surprises.gift`,
`ourgiftverse.com`, `digiflower.net`, `giftsqr.com`, `blog.messagear.com`, plus Reddit,
Quora and Pinterest holding 4–6 of every 10 results. **None is cited, linked or
paraphrased.** For `propose day` specifically the visible pattern is bulk gifting
retailers selling rose bouquets, cushions and teddies, which is the physical-object intent
the BRIEF §2 tells us not to write for.

**Table stakes** the post has to cover: what Propose Day is, the 8 February date, a list of
ideas, something about how to send it, a mention of Valentine's Week ordering.

**The gap.** Every competing page answers "what object do I buy". None answers "how do I
get the sentence delivered". Nobody treats the confession itself as the hard part, and
nobody has product data about how people behave while writing one.

**The critical distinction.** Propose Day in India is about asking someone out or
confessing feelings — not a marriage proposal. `/proposal` ("Will You Marry Me?") is
therefore the wrong template and is deliberately excluded. The templates chosen are the
ones whose own `config.ts` descriptions match a confession:
`/date-invitation` (an invitation she must answer), `/catch` (a letter that is never locked
behind a game), `/flags` (self-disclosure disguised as self-deprecation).

**Fan-out sub-queries** that became H2s:
what is propose day / when is propose day · what do I send if I'm scared of rejection ·
what are the actual options · which one should I pick · should I be direct or hint ·
when is a link the wrong idea · when should I build it.

## Phase 2 — Angle

> Wins by being the only post that treats a Propose Day gift as a confession-delivery
> problem rather than a product list, pairing SubhSandesh's 40.6% password-protect rate and
> 6.2-hour median edit gap with research showing people recall missed romantic
> opportunities as regrettable more than three times as often as rejections.

## Phase 3 — Sources

Search strategy per BRIEF §3: search the phenomenon, not the keyword. Terms tried —
`romantic confession self-disclosure relationship initiation rejection risk`,
`confessing romantic feelings text message mediated`,
`relationship initiation computer-mediated communication disclosure`,
`saying I love you first confession commitment`,
`courtship dating India young adults romantic love`,
`face threat rejection politeness asking someone out`,
`romantic rejection unrequited love`,
`dating apps India young adults romantic partner selection`,
`expressing love confession smartphone couples qualitative study`,
`love letter writing romantic communication written declaration`.

Discovery ran through the OpenAlex and Crossref APIs and the Europe PMC REST search after
WebSearch and Firecrawl were both unavailable (search budget exhausted / HTTP 402).
Every landing page below was fetched and read before being cited.

| # | Source | Why it passes the subject test | Peer reviewed | Open |
|---|---|---|---|---|
| 1 | ["Nothing Ventured, Nothing Gained"](https://osf.io/s45ce/), OSF preprint of a 2017 *J. Social and Personal Relationships* paper, posted 2017-08-11 | Directly about romantic **pursuit decisions**: rejection vs. missed opportunity. This is the Propose Day decision. | Yes (journal version) | Yes |
| 2 | Ömür & Büyükşahin-Sunal (2015), [*J. Educational and Social Research* 5(1 S1) p.195](https://www.richtmann.org/journal/index.php/jesr/article/view/6323) | About **who should make the first move and how** — direct vs indirect initiation strategy, tied to rejection sensitivity. n = 373, aged 18–37. | Yes | Yes |
| 3 | Lapidot-Lefler & Barak (2015), [*Cyberpsychology* 9(2) art. 3](https://cyberpsychology.eu/article/view/4335) | About whether **mediation actually unlocks disclosure**. Factorial experiment, n = 144 adult strangers. Supplies the post's inconvenient finding. | Yes | Yes |
| 4 | Pooja & Bhatia (2026), [*Space and Culture, India* 13(4), 81–104](https://www.spaceandculture.in/index.php/spaceandculture/article/view/1667) | About **urban Indian emerging adults' romantic relationships and dating delays**. N = 510, 18–25, several Indian states. | Yes | Yes (CC BY 4.0) |

**Wikipedia was dropped mid-draft, deliberately.** `https://en.wikipedia.org/wiki/Propose_Day`
was fetched and does confirm the date (8 February, second day of Valentine's Week, after
Rose Day on the 7th), and it was briefly source #5. While this post was being written two
concurrent siblings added Wikipedia sources of their own and `verify-batch.mjs` reported
`en.wikipedia.org` in 4 posts. The citation was removed from `batchMeta.sources` and from
the `citation` block rather than leaving the batch over the domain cap; the 8 February
date is now stated in the body unlinked, which is exactly what the checklist's
date-reference exception prescribes ("a post that merely mentions the date keeps it out of
`sources` and `citation` entirely"). The Wikipedia URL survives only as a `sameAs` inside
`about`, which is entity grounding and not a citation. Final count: **4 sources, all
peer-reviewed and open-access, 0 Wikipedia links in the body, 0 generic context statistics.**

**Abstract-only disclosure.** Source 1 was read as its OSF abstract via the OSF public API
— `https://osf.io/s45ce/` itself is a client-side JavaScript app and returns an empty
document to a non-browser fetch — and the full preprint PDF was not opened. This is the
post's single recorded audit failure. The post says so in the body ("Only the abstract of that
preprint was readable, so that is all this post claims from it") and in the audit. Source 4
was read as its landing-page abstract and record; the numbers cited (N = 510, 221 men,
289 women, 18–25, several states) are all stated in that abstract.

**Generic context statistics: zero.** No PIB, TRAI, Census or MEA figure is used.

**Swap test.** None of the four would sit unchanged in a sibling post. 1 is about romantic
pursuit and the rejection-vs-missed-chance trade-off; 2 is about who makes the first move
and how; 3 is about whether mediation actually makes confessing easier; 4 is about Indian
dating delays among 18–25s. A `virtual gift ideas`, `virtual gift for best friend` or
`digital anniversary gift` post could use none of them, because none of those posts
involves an unanswered question being asked for the first time.

**Cap check, re-run against the 25 sibling JSONs on disk after the Wikipedia removal.**
`osf.io` 1 · `richtmann.org` 1 · `spaceandculture.in` 1 · `cyberpsychology.eu` 2 (shared
with `virtual-gift-for-best-friend`). No URL of mine appears in any other post. Banned
domains at cap (`arxiv.org`, `pewresearch.org`, `pmc.ncbi.nlm.nih.gov`) untouched, as are
the seven one-slot-left domains named in the assignment.

**Hosts that refused the sandbox during this run**, recorded so the next agent does not
repeat them: `ink.library.smu.edu.sg` (Incapsula challenge, despite being a Digital
Commons site), `bmcpsychology.biomedcentral.com` (redirects to link.springer.com,
Cloudflare client challenge), `europepmc.org` article pages (403 — though the EBI REST
search API works fine), `doaj.org` API (403), `lite.duckduckgo.com` (empty).
OpenAlex and Crossref APIs both work but OpenAlex rate-limits hard after one burst.

## Phase 4 — Structure

1,740 words excluding FAQs. Answer block split into three paragraphs of 2–3 sentences each
per BRIEF §9. Seven H2s plus a sources H2; five H3s under the ideas H2, mirrored one-to-one
and in order by the `ItemList` in `structuredData`. One comparison table, 4 rows ×
4 columns, with the fourth column entirely first-party.

Downside section: "Where an online Propose Day gift is the wrong call" — carries the
Cyberpsychology null result, the "say it out loud if you can" concession, and the 5.9% of
started pages that are never published.

## Phase 5 — Links and targeting

- Outbound (4, one per source, each placed at the sentence stating the fact).
- Internal (4, all from `TEMPLATE_LINKS`): `/templates`, `/flags`, `/catch`,
  `/date-invitation`. All placed after the section establishing why the reader wants them.
- `batchMeta.templateUrls`: `/date-invitation`, `/catch`, `/flags`.
- `categorySlug`: `modern-romance` — verified live against the Strapi categories endpoint
  (id 3, "Modern Romance"). Per BRIEF §5, `indian-festivals` is never used for this batch.
- Slug checked against Strapi: `filters[slug][$eq]=online-propose-day-gift-for-girlfriend`
  returned `total: 0`, so it is free.
- `structuredData`: one `@id`-matched enrichment block on `<canonicalURL>#post` carrying
  `about` / `mentions` / `citation` (mirroring `batchMeta.sources` one-to-one), plus one
  `ItemList`. Every `sameAs` verified through the Wikipedia API with its Wikidata QID
  paired: Propose Day Q7250378, Valentine's Day Q37587, Courtship Q376596,
  Self-disclosure Q2892912, India Q668.

## Phase 6 — Audit

49 passed, 1 failed, disjoint, 50 total. Every string byte-verbatim against
`references/publish-checklist.md` after whitespace collapsing, `**bold**` markers and
multi-line joins included (BRIEF §7) — asserted programmatically against the parsed
checklist before the file was written.

The single failure is **"3–6 outbound links, all fetched and verified to contain the cited
fact"**: three of the four links were read as rendered pages, but the OSF preprint page
renders empty to a non-browser fetch, so its abstract was verified through the OSF API
record for the same preprint id instead. The fact is verified; the link as a reader sees
it was not.

`node scripts/verify-batch.mjs content/batches/2026-09-15-virtual-gift-30` reports no
problem attributed to this slug: 1,748 words, 12 FAQs, 49/1, `modern-romance`, four
internal links, no source-cap violation.
