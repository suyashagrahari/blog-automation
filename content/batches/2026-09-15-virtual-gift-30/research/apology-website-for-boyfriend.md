# Research brief — `apology website for boyfriend`

- **Batch:** `2026-09-15-virtual-gift-30`, wave 2
- **Keyword:** apology website for boyfriend
- **Secondaries:** sorry website for boyfriend · online apology page for boyfriend
- **Category:** `say-sorry-beautifully`
- **Templates assigned:** `/apology-dashboard`, `/court-of-love`, `/legal-notice`
- **nearestLive:** `/blog/sorry-gift-online-for-girlfriend`
- **Gate 2 (from WAVE2-PLAN):** CLEAN — 0 ecommerce results in the India SERP.

---

## Phase 1 — SERP analysis

India SERP (`scripts/serp-ddg.mjs`, `kl=in-en`, ads filtered), taken serially by
the orchestrator into `SERPS-WAVE2.md`. I did **not** re-run a SERP call; WebSearch
is exhausted and `scripts/serp.mjs` is hard-429'd (BRIEF-WAVE2 §0).

| # | Domain | What the page is | Format | Direct answer? | Data cited | Tone |
|---|---|---|---|---|---|---|
| 1 | mewtrucard.com | Apology card maker, girlfriend-skewed landing page | Product page + light copy | No — product pitch first | None | Brand, third person |
| 2 | iamreallysorry.com | "Funny apology website for free" builder | Tool landing page | Tool CTA, no prose answer | None | Playful, minimal |
| 3 | apologify.com/generator/boyfriend | Generator page, exact-match to the keyword | Generator UI + thin copy | No | None | Generated-feeling |
| 4 | sorrycard.app | Free apology card maker | Tool landing page | No | None | Minimal |
| 5 | ai.mobirise.com (×2) | AI-generated site templates, auto-spun titles | Template demo | No | None | Machine-written |
| 8/9 | saysorry.in | Sorry-website builder plus one how-to blog post | Blog + product | Partial | None | Brand |
| 10 | easy-peasy.ai | AI apology text generator | Tool page | No | None | Generic |

**Every result is a tool, not an article.** Zero ecommerce, zero news, zero
research-backed writing, zero authorship. Not one of the ten pages cites a single
study, a single number, or names a case where a web page is the *wrong* thing to
send. Several are AI-spun template pages with no author at all.

All ten are competitors under `references/competitors.md` and BRIEF-WAVE2 §0
(`apologify.com`, `saysorry.in`, `mewtrucard.com` are named explicitly). **None is
cited, linked or paraphrased anywhere in this post.**

## Phase 2 — Gap analysis

**Table stakes** (all the builders imply, so the post must cover): what the page
contains, that it is private and link-shared, that it takes minutes, that you can
add photos/music, that you send it yourself.

**The gap — and it is enormous.** Nobody in the top ten answers the question the
searcher is actually carrying: *should I be sending a web page at all?* Every
result is incentivised to say yes. There is no page in this SERP that names the
transgressions a link cannot repair, and no page that grounds any of it in
evidence. That is the whole opportunity.

**Stale data:** not applicable — there is no data on any of the ten pages to
supersede. That is itself the finding.

**Fan-out sub-queries → became H2s:**

1. What is an apology website for a boyfriend, concretely?
2. What does an apology have to contain to work at all?
3. Does the channel you send it through actually matter?
4. What will he not forgive, regardless of how the page looks?
5. When should I not send a page?
6. Should the apology be funny?
7. How is this different from a link vs a call vs saying it in person?
8. When do I send it?

**Angle:** wins by being the only page in this SERP that treats the medium itself
as the question — grounding *when a link works and when it fails* in five open-access
studies plus SubhSandesh's own 1,043-page apology template record, against ten
competitors that cite nothing and all have a commercial reason to say "yes, send one".

## Phase 3 — Sources

Discovered through the open scholarly APIs per BRIEF-WAVE2 §1b — Europe PMC first,
then Crossref, then DOAJ with two- and three-word queries. OpenAlex and Semantic
Scholar were not attempted (documented 429). Every landing page below was opened
and verified before citing; PDFs were read with `pdftotext` rather than indexed as
raw bytes.

Checked against `SPENT-SOURCES.json` and all 40+ sibling files in `blogs/`:
**all five domains are new to this batch**, and no sibling cites apology or
forgiveness research at all.

| Source | Year | What it actually supports | Verified |
|---|---|---|---|
| `sajip.co.za/index.php/sajip/article/view/2170` | 2024 | n=311. Apology content quality, promptness, perceived justice **and delivery channel** each relate significantly and positively to perceived authenticity. | Landing page read; abstract quoted from it |
| `jhs.mazums.ac.ir/article-1-993-en.pdf` | 2025 | n=197 Indian adults aged 20–40. Qualitative phase: causes of unforgiveness named were ignorance, **betrayal and breach of trust**; low-narcissism participants forgave most offences but not harassment or physical/verbal abuse. | PDF extracted with `pdftotext`, abstract read in full |
| `modernpsy.rahman.ac.ir/article_234405_...pdf` | 2025 | n=150. Forgiveness, humour and emotional intimacy are each negatively related to marital conflict; together they explain 35.5% of conflict severity. | PDF extracted with `pdftotext` |
| `ejournal.umm.ac.id/index.php/jipt/article/view/26094` | 2024 | n=77. Ambiguous (p=0.036) and deceptive (p=0.048) infidelity perceptions significantly reduce forgiveness; explicit behaviour did not reach significance (p=0.236). | Landing page read, full abstract |
| `phil.duan.edu.ua/images/PDF/2021/2/19.pdf` | 2021 | Five success conditions for the apology speech genre, sincerity first; violating one produces communicative failure visible in the addressee's negative reaction. | PDF extracted with `pdftotext` |

**Disclosed limits, stated in the body and not only here:** the SAJIP study is a
workplace leader–follower sample, not a romantic one. The Iranian conflict study
sampled 150 women in Rasht. The infidelity study sampled 77 women in Indonesia.
The speech-genre analysis is of German, not Indian, apology. None of the five is
about Indian men apologising to Indian men, and the post says so where each is used.

## Phase 3b — Cannibalisation (BRIEF-WAVE2 §3): **DIFFERENTIATE**

Both live pages were fetched and read in full:

- `/blog/sorry-gift-online-for-girlfriend` — ranks **#2** for `sorry page for girlfriend online`.
- `/blog/website-to-say-sorry-to-girlfriend` — ranks **#7** for `apology website for girlfriend`.

Both are **build tutorials**: pick a theme, add photos, write a short message,
preview, share; plus sample apology scripts, design tips and a pre-send checklist.
Both answer "how do I make one". Neither cites a single source, and neither
contains a section saying *don't send one*.

**The split, in one sentence:** the two live pages teach a reader who has already
decided to build a page *how to build it*; this post answers the prior question —
whether the page is the right medium for this particular apology — and is the only
one of the three that is research-grounded and that names the transgressions a link
cannot repair.

That split is not a gender flip, so the row is written rather than aborted. Both
live pages are linked from the body, so the three reinforce instead of competing:
the reader who lands here and concludes "yes, build one" is handed the tutorial.

## Phase 5 — Templates, and the judgement the brief asked for

Read from `app/lib/prompt.ts` before writing:

- `/apology-dashboard` — "All-in-one apology / 'I'm sorry' page — the flagship,
  beautifully-animated make-up-and-say-sorry experience for anyone." The obvious fit,
  and 23.9% of everything created on the platform.
- `/court-of-love` — "put a partner on trial in the cutest way: 10 funny questions,
  a penguin judge, and a signed stamp paper if they win the case."
- `/legal-notice` — "a mock formal notice served on your person; they must accept or
  contest every demand, with seven days to comply."

**Verdict, written into the body rather than hidden here: neither joke template is
an apology, and neither should be sent as one.** The sincerity condition is the
first success condition of the apology speech genre, and a penguin judge violates it
on contact — the format tells him the thing he is upset about is a bit. But the
Rasht study found humour negatively related to conflict severity, so humour is not
the enemy; sequence is. Both are linked in the body **for the after**, once he has
actually said it's fine, and the post says plainly when not to use them. That is
the honest reason neither has been linked in the first thirty posts of this batch,
and the post is the first to link them with the caveat attached.

`/templates` is linked once near the closing CTA. Four template links total, all
from `TEMPLATE_LINKS`.

## Phase 4 — Honest note on first-party data

The `gifts` database records **which template was opened, not who received it**.
The 1,043 apology-dashboard pages therefore do not prove any of them went to a
boyfriend. This is disclosed in the body, per BRIEF-WAVE2 §4, not only in the audit.
`content/facts.md` "## Pricing (fill in by hand)" is still empty, so the post makes
no price or free-tier claim anywhere.
