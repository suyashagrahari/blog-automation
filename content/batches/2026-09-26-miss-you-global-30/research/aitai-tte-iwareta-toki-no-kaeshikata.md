# Research brief — `aitai-tte-iwareta-toki-no-kaeshikata`

Keyword: **会いたいって言われた時の返し方** · market `jp-ja` · body language Japanese · tier `A-reply` · band 2 · predicted weak 5

---

## Phase 1 — SERP measurement

**Route:** `node scripts/serp-ddg.mjs "会いたいって言われた時の返し方" --region jp-ja`, 2026-09-28.
The tool echoed back `query: 会いたいって言われた時の返し方` (the argument-order trap in BRIEF §3 was avoided — query first) and returned 10 results on the **first** call. The confirming second call returned `(no results parsed)` — the documented DDG throttle — so **only one run is confirmed**, and this is a DuckDuckGo proxy, **not Google**. Labelled as such in the post body.

Routes tried and failed, in brief order:

| Route | Result |
|---|---|
| `serp-ddg.mjs` jp-ja | **10 results, first call.** Second call throttled. |
| Brave `search.brave.com?country=jp` (scripted fetch) | HTTP **429** |
| Bing `mkt=ja-JP` (scripted fetch) | HTTP 200, `b_no` zero-result shell. **Per BRIEF §3 this is a throttle, not a finding** — not reported as a property of the keyword. |
| Google `gl=jp&hl=ja&pws=0` in the shared real browser | **Not attempted.** DDG had already succeeded; BRIEF §3 documents that the single shared Chrome tab is contended across six agents and cannot be isolated, so one verified proxy run was preferred to a scrape that could not be self-authenticated. |

**Self-authentication:** each of the 10 result URLs was fetched individually and checked for the string 会いたい. 9 confirmed. `smartlog.jp` returned **HTTP 403** to a scripted UA and was **not read** — so every page-level count below is *of the 9 I could read*, never of 10.

### Who ranks

| # | Host | Page type |
|---|---|---|
| 1 | smartlog.jp | men's lifestyle magazine (403, not read) |
| 2 | happymail.co.jp | dating-app operator's content blog |
| 3 | wikihow.jp | wikiHow Japan |
| 4 | anny.gift | gift-commerce media magazine |
| 5 | miror.jp | online fortune-telling service's column |
| 6 | omoshiroi-kaeshi.com | single-topic "funny replies" site |
| 7 | love.topicks.jp | small personal blog |
| 8 | uranaisikei.com | individual fortune-teller's blog |
| 9 | wikihow.jp | wikiHow Japan (second entry) |
| 10 | zyoshikagami.xsrv.jp | small blog on shared hosting |

**Weak count: 5 of 10** — omoshiroi-kaeshi.com, love.topicks.jp, uranaisikei.com, zyoshikagami.xsrv.jp, miror.jp. This matches the WAVE4-PLAN row's predicted `weak: 5` exactly.

**Gate 4 verdict: PROCEED, do not abort.** There is no national publisher with decade-scale authority here — nothing resembling the ten established German magazines on `de-de` or the eight Portuguese message sites on `br-pt` that the brief documents. The incumbents are lifestyle media, two app-operator blogs, two fortune-telling sites and four small blogs.

### What every page optimises for, and what none covers

Measured mechanically across the 9 readable pages:

| Term | Pages containing it |
|---|---|
| たがる / たがっ | 2 (both incidental, never as grammar) |
| 願望 | 1 |
| 人称 | **0** |
| 係助詞 | **0** |
| 助動詞 | **0** |
| 大辞泉 / 国語辞典 | **0** |

**Zero of the 10 results is a dictionary, grammar reference, corpus or academic source.** Every page reads 会いたい as a signal of the sender's psychology (男性心理 / 脈ありサイン) and not one treats it as a grammatical form.

### Original count made from the SERP itself

All `「…」`-quoted strings containing 会いた were extracted from the 9 readable pages and de-duplicated: **55 distinct reply lines.**

- **20 carry the additive 係助詞 も** — 私も会いたい, 俺も会いたい, 自分も会いたい, 私も❍❍君に会いたい, 私も会いたかったよ
- **20 are a bare 会いたい** with no additive and no subject
- 15 shift to emotion or scheduling (嬉しい / いつ会える？)
- **0 are 君にも会いたい**

### A checkable error in a ranking result

**wikiHow Japan, rank 9.** Under 「友人への返信」 it lists, as one of its 「明るい返事」, the line:

> 「あなたを恋しく思うほどではありませんよ、友よ！」

That means *"I don't miss you that much, friend"* — a denial. The English wikiHow original is an affectionate tease addressed to the other person ("don't miss me too much"). **The person restriction is what broke it**: 恋しい, like 会いたい, cannot be predicated of the addressee in a 言いきり main clause, so the experiencer was relocated onto the speaker and the sense inverted. The error is caused by the exact constraint this post is about.

Deliberately **not linked** — wikiHow is a ranking competitor and `references/competitors.md` forbids the link. Named and quoted only.

---

## Phase 2 — Gap analysis and angle

**Table stakes** (all pages cover): what he means by it, whether it is a 脈あり sign, cute/short reply examples, how to decline, LINE-specific phrasing.

**The gap:** nobody explains *why* the reply takes the shape it takes. The two most common shapes on the SERP — 「私も会いたい」 and a bare 「会いたい」 — are both listed as examples by every page and explained by none.

**Fan-out sub-queries → H2s:** where does the も attach · why does a bare 会いたい mean "me too" · how do you say it about someone else (会いたがる) · is 「会いたいです」 rude · how does this compare to English "too" · what do the ranking pages actually recommend · when should you not send a page at all.

**Angle (recorded as `batchMeta.angle`):** wins by being the only page on the measured jp-ja SERP that answers the grammar of the reply rather than the psychology of the sender — 55 reply lines counted from the ranking pages themselves, explained from デジタル大辞泉 plus two open-access J-STAGE papers read in full — and by showing that the search query's own 「って言われた」 is a workaround forced by the person restriction.

---

## Phase 2b — The hypothesis, and the negative result

**Given to me:** *Japanese may be the first language in this lane with **no additive particle slot at all** in the natural reply, because 会いたい is a -tai desiderative.*

**OVERTURNED in its strong form.** Japanese has a fully available additive slot — **も**, labelled 係助詞 by デジタル大辞泉 with the first sense 「ある事柄を挙げ、同様の事柄が他にある意を表す」 — and it is the **single most common reply shape on the measured SERP** (20 of 55). The claim that no additive is available is simply false, and the post says so.

**What is actually true — mechanism #9, two parts, both measured:**

1. **も is bound to the phrase it focuses and licensed there without movement.** 小林亜希子 (2009), read in full: toritate particles *mo* and *wa* are licensed as focus by Agree with F, and *"since movement is not required for focus licensing, either particle can remain in its merged position."* Morphologically, も **displaces** the nominative が (私も, never \*私がも) but **stacks on** に (君にも). So Japanese writes the scope of the additive into the morphology and never reorders the clause. That is precisely what German cannot do: the sibling `ich-vermisse-dich-auch` measured the disambiguating order 「Auch ich vermisse dich」 at **0 occurrences in 75,520,701 tokens**.

2. **Japanese also has a zero option no other language in the lane has.** 人称制限 restricts a 言いきり -tai predicate to a first-person experiencer, and the first-person subject is normally omitted outright — so a bare 会いたい already reads as "me too" with nothing marking it. That is the other 20 of the 55 lines.

So the **refined** claim holds — Japanese is the first language in the lane where the natural reply can carry no additive marker at all and still be additive — while the strong claim does not.

**Third finding (original, unstated by any ranking page):** the keyword itself is evidence. 「会いたいって言われた時」 uses the quotative って plus the passive 言われた because a searcher cannot predicate 会いたい of another person in a plain main clause. Tatoeba: **15 sentences contain 会いたがっ, 13 with an explicit third-person subject, 0 first-person-only.**

---

## Phase 3 — Sources (6)

| # | Source | Why it passes the subject test | Journal / class |
|---|---|---|---|
| 1 | デジタル大辞泉「も」 (kotobank 644757) | the additive particle itself, labelled 係助詞 | dictionary instrument |
| 2 | デジタル大辞泉「たい」 (weblio) | 希望の助動詞, first sense 話し手の希望; 補説 gives the ヲ/ガ alternation | dictionary instrument |
| 3 | デジタル大辞泉「たがる」 (kotobank 559558) | first sense 話し手以外の人の希望 — the dedicated non-speaker desiderative | dictionary instrument |
| 4 | 小林亜希子「とりたて詞の極性とフォーカス解釈」 | toritate particles incl. も, licensing position | **言語研究** (Gengo Kenkyu, LSJ) 136:121, 2009 — peer-reviewed, open access |
| 5 | 畠山真一「感情表出動詞の人称制限と変化後の局面の二重性」 | defines 人称制限 for Japanese emotion predicates | **尚絅学園研究紀要 A.人文・社会科学編** 6:63–77, 2012 — peer-reviewed, open access |
| 6 | Tatoeba 日英対訳コーパス | attested usage, counted by hand | corpus instrument (cap-exempt) |

**Both papers were read as full-text PDFs** via `/usr/local/bin/pdftotext -layout` from the J-STAGE `_pdf` endpoints — **no abstract-only citation in this post.**

Cap position, checked immediately before writing with `capcheck.mjs` and `journalcheck.mjs`: `kotobank.jp`, `weblio.jp` and `jstage.jst.go.jp` all at **0 posts** in this batch; `言語研究` and `尚絅学園研究紀要` appear in **neither** the AT-CAP nor the ONE-SLOT-LEFT census; `tatoeba.org` is cap-exempt. No Frontiers, no PNAS, no PMC paper, no JESLA, no `doi.org` URL (that domain is at cap 3).

**Generic context statistics: zero.** The post uses no PIB/TRAI/Census-class figure at all.

---

## Instrument traps hit (record of method)

- **kotobank `/word/も-646473` returns HTTP 200 and serves モノルビ (monoruby), not も.** The correct entry is **644757**, confirmed by reading the headword on the fetched page.
- **kotobank `/word/たい` redirects to entry 556227, which is THAILAND**, not the auxiliary たい. The auxiliary was taken from weblio instead, whose headword was confirmed. This is the Larousse/MARAUD and DWDS/DEZILITER trap recurring in a third dictionary family.
- **`dictionary.goo.ne.jp` failed at the connect/TLS layer** on every attempt from this sandbox — not a 403, no response at all.
- **Bing `mkt=ja-JP` returned `b_no`** — treated as a throttle per BRIEF §3, never as a finding.
- `timeout` is **not on PATH** on this macOS host, so brief idioms wrapping a script in `timeout` fail with "command not found".
- `references/article-json-schema.md` does **not** exist at the repo root, where BRIEF §3 item 3 points. Real path: `.claude/skills/blog-optimisation/references/article-json-schema.md`.

## Lines cut, and why

- **Cut:** "君にも会いたい is unavailable in a reply." It is perfectly grammatical. Replaced with the measured fact that it occurs **0 times in the 55 SERP reply lines and 0 times in Tatoeba's 58 会いたい sentences**, with the reason stated (a reply has exactly one addressee, so there is nothing to add to). Absence of use is reported as absence of use, never as ungrammaticality.
- **Cut:** "会いたい cannot take a second-person subject." Tatoeba shows 5 interrogatives such as 私に会いたいの？ ("Do you want to see me?"), where the restriction shifts to second person. Narrowed to the 言いきり form, which is what 畠山 (2012) actually states.

## Known limitation carried into the post

Tatoeba is small — 15 and 58 sentences are **counts, not frequencies**, and no rate is derived from them. NINJAL's 少納言/中納言 would be the right instrument, but both require an interactive session and BRIEF §3 documents that interactive multi-step browser work is corrupted by contention across the six concurrent agents, so it was not attempted rather than attempted unreliably.
