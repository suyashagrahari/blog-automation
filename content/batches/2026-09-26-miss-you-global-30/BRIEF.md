# BRIEF — 2026-09-26-miss-you-global-30 (BINDING)

Read this before Phase 1. It overrides your own instincts and, where they conflict,
your own task prompt. Your row is one of `WAVE1-PLAN.json`.

**This batch is not like the others. The body of most of these posts is NOT in
English.** Everything below exists because five waves of English posts found the
other failures the expensive way.

---

## 0. Treat the framing claims in your own task prompt as unverified

The orchestrator that wrote your prompt gets things wrong. Across the last two waves
agents caught **eight** false framing claims from the same orchestrator — a spine that
was already a sibling's thesis verbatim, three wrong ISO codes, two dictionaries that
do not serve what the brief claimed, an over-stated migration statistic, and a
predicted content gap that was 7 of 10 on the real SERP.

If a claim in your prompt is load-bearing, **verify it before you build on it.** If it
is wrong, say so in `structuralLimitations`, fix the angle, keep going. "The brief said
X, the source says Y" is the single most valuable thing you can report.

## 1. Language — the rule this batch turns on

`WAVE1-PLAN.json` gives your row a `bodyLanguage`. **Write the entire post in that
language**: H1, every H2, all body prose, `metaTitle`, `metaDescription`, and all
8–12 FAQs. A Portuguese query is not served by an English page.

Three rows are marked `bodyLanguage: English` (the Japanese and Korean learner rows).
Those are English pages, because the searcher is typing romanised Japanese or Korean
*into an English query*. Check your row before you start.

**Do not translate a sibling post.** Several of your rows have an English sibling that
is already written (named in your row's `note`). Read it, state the split in one
sentence, cross-link it — and build for *your* SERP, which is a different SERP with
different incumbents. A translated post is a duplicate with extra steps.

**`batchMeta.factsUsed` strings stay byte-verbatim ENGLISH**, copied from
`facts-snapshot.md`. They are metadata, not body text. The *prose* that cites those
numbers is in your body language. Copy, do not retype.

## 2. The product is in English. Say so.

`/missyou-gf` and every other template is an **English-language page with English
labels, English prompts and English furniture.** You are writing in Portuguese,
Turkish or Polish and linking a reader to an English product.

**That mismatch must be disclosed in body prose, in your body language, not only in
the audit.** Say plainly what the reader will find when they click. A post that
oversells this is worse than useless — the reader bounces and the page teaches Google
that it does not answer the query.

If the mismatch makes the template genuinely wrong for your reader, **say that too.**
Three posts last wave argued against their own product and that is the strongest
citation signal available here.

`/missyou-gf` is the mandatory link. Plus at least one genuine alternative from
`oneOfLinks` in `verify.config.json`, **with the reason it suits that reader better.**

## 3. Gate 2 and Gate 4 — several of your rows should probably ABORT

Your row's `tier` tells you what the orchestrator expects:

- **`D-listicle` rows are marked ABORT-LIKELY.** These are the high-volume
  "frases / mensagem / sözleri / cytaty" queries. Measured evidence: the `br-pt` SERP
  for `mensagem de saudade para namorado` returns **eight strong Portuguese message
  sites and zero weak results**, against an inventory score of 5 weak. `de-de` returns
  ten established German magazines. These SERPs are owned by national publishers with
  a decade of authority in that language.
- **`A` and `B` rows are the real opportunities** — grammar, meaning, translation and
  "how do I say this differently" queries, where the incumbents are forums, dictionary
  scrapers and Q&A sites.

**Run your own SERP and apply Gate 4 honestly.** If the top 10 is strong editorial
pages in that language with no weak result, a new low-authority English domain
publishing its first post in that language will not rank. **Emit the research brief,
write no blog JSON, report with your reasoning.** Four rows aborted across earlier
waves and every one was correct. A twin or a hopeless row is worse than a missing post.

**Measure, never assume — and READ THIS BEFORE you spend twenty minutes on retries.**

**As of 2026-09-26 the scripted SERP tools are DOWN. Do not grind on them.** Three
agents established this independently, one after 36 failed attempts across 3 query
variants in ~18 minutes:

- `serp-ddg.mjs` — `html.duckduckgo.com` and `lite.duckduckgo.com` both
  `UND_ERR_CONNECT_TIMEOUT`, sandboxed or not, for every region *and* for a `us-en`
  control. One agent ran a same-process control set (Crossref 200, TDK 200, Wikipedia
  200, Marginalia 200, DDG timeout), so this is an IP-level block, not a markup change.
- `serp.mjs` (Brave) — hard **429**.
- Also checked and useless: Mojeek (a ~5 KB stub its own header documents), Bing
  (JS shell, 0 results), Ecosia 403, Yandex captcha/empty, six SearXNG instances,
  `r.jina.ai` 403 Cloudflare, Startpage bot-challenge.

**`serp-ddg.mjs` TAKES THE QUERY FIRST — and gets it silently wrong otherwise.**
`node scripts/serp-ddg.mjs "<query>" --region xx-yy` is correct.
`node scripts/serp-ddg.mjs --region xx-yy "<query>"` makes **`xx-yy` the query**, prints
`query: xx-yy`, and returns "(no results parsed)" — which reads exactly like the tool
being down. Two agents hit this. **Read the `query:` line the tool echoes back before
concluding anything from a failure.** (Verified by the orchestrator 2026-09-27: the
mis-ordered call prints `query: de-de`.)

**Try `serp-ddg.mjs` ONCE. If it fails, stop and switch routes immediately.**

**UPDATE 2026-09-27 — DDG is INTERMITTENT, not dead and not fixed.** One agent got a
clean `--region fr-fr` SERP twice in a row today and its third call throttled; the
orchestrator then tried `es-es` and `pl-pl` minutes later and both returned
"(no results parsed)". So: it is worth the one call, it may hand you a real
market-served SERP for free with **no browser and therefore no contention exposure** —
which is the best outcome available — but **a failure tells you nothing about the next
query and is not worth a retry.** Take the win if you get it, move on if you do not,
and say which happened.

**The route that works: Google served to your row's market, in the real browser**, with
personalisation off — `gl=<country>&hl=<lang>&pws=0`. Three agents used it and two
re-ran it a second time to confirm identical results. **This is stronger evidence than
the DDG proxy, not weaker** — it is the actual SERP your reader sees. Read it only;
never click, submit, post or buy anything in that browser.

**CORRECTION 2026-09-26 — an earlier version of this brief claimed the Playwright
browser is per-agent and immune to contention. THAT IS FALSE.** The agent that found it
useful was followed by one whose navigation to its own Bing URL returned **the German
sibling's SERP for a completely different keyword, ten German results.** Contention is
confirmed on **BOTH** browser routes. There is no isolated browser here.

**Therefore: assume every page you load may belong to another agent, on every route.**
Self-authentication is not a precaution, it is the only thing standing between you and
publishing someone else's SERP as your own. Two agents have caught this and discarded;
none has published one, and that record depends on you.

**THE SHARED CHROME IS SHARED AND YOU CANNOT ISOLATE IT. Six of you drive ONE real
Chrome tab.** Two agents hit this independently: one lost ranks 9–10 to another agent's tab,
and one had a sibling's Turkish SERP and a `wikihow.com.tr` page land inside its own
Spanish scrapes. **CORRECTION to an earlier version of this brief: opening "your own
tab" does not work — PolterTab exposes a single shared tab and the `session` argument
does not isolate it.** Do not rely on isolation that does not exist.

What actually works, and both agents did it right:

0. **A CORRECT TITLE IN THE NAVIGATE RESPONSE IS NOT AUTHENTICATION.** One agent's
   `browser_navigate` returned `status: ok` **and the right page title**, and the very
   next read returned a Turkish sibling's page. Authenticate on the **content you
   actually read**, not on the navigation result — and prefer an atomic
   navigate-and-extract in one call over navigate-then-read.
1. **Self-authenticate every scrape.** Before you record a single position, confirm the
   page you got back contains *your* query and *your* language. If it does not, it is
   another agent's page — **discard it, do not record it, and re-run.**
2. **Count only results you actually saw**, and say how many that was. One agent
   reported its weak count "6 of the 8 I actually saw" rather than inventing ranks 9–10.
   That is the correct behaviour, not a shortfall.
3. **Interactive, multi-step browser work will be corrupted by contention** — it is what
   killed one agent's interactive corpus query. Prefer a single page load you can verify
   over a sequence of clicks you cannot.
4. Re-run a SERP a second time and compare. Two agents did; identical results across two
   runs is real evidence, and a mismatch tells you contention hit you.

**It is the operator's real, logged-in browser. Read only.** Never click, submit,
post, buy, or dismiss anything in it, and never open a dialog — an alert or confirm
blocks every later command.

**For a `us-en` row, the harness `WebSearch` tool is a legitimate route** — one agent
measured its whole SERP with 2 calls after both scripts died. It is a real index and
US-served, which *matches* a `us-en` row, so no caveat is needed there; flag only that
it is not Google. **Do not use it for a market row** (`br-pt`, `tr-tr`, …): US-served
results for a non-English query are exactly the artefact that made the keyword
inventory worthless. Budget stays ~4 calls; the session cap is shared across all of you.

**Google itself rate-limits.** One agent got `/sorry/index` twice in a row. When that
happens, **Bing with a market parameter through the real browser works** — that agent
measured its whole SERP via Bing `mkt=it-IT` and said so in the post. A sandboxed fetch
of the same Bing URL returns only a JS shell, so it has to be the real browser. Bing is
a different index from Google: usable, and it must be labelled.

**A FOURTH ROUTE THAT WORKS: Brave Search with a country parameter, in the real
browser** (`search.brave.com/search?q=...&country=nl`). One agent ran it twice and got
24 identical results after Google 429'd three times across two browsers and Bing refused.
Yahoo with a market parameter also served a Polish row (it carries the Bing index — say
so). Try in this order: `serp-ddg.mjs` ONCE, then Google, then Bing DOM, then Brave.

**BING'S "no results" IS USUALLY A THROTTLE, NOT A ZERO — and two agents proved it with
controls.** One got `b_no` on 4 of 4 Dutch long-tails while a control returned 7; another
got "Brak wyników" on browser AND RSS for a *quoted control phrase* while `wikipedia`
returned normally. **Neither reported a Bing zero as a finding, and you must not either.**
Run a control query on the same route before concluding anything from an empty SERP.

**A ZERO-RESULT SERP IS PROBABLY TRANSIENT — RE-RUN BEFORE YOU RECORD IT.** One agent's
unquoted Bing query returned `b_no` (zero results) **twice**, while a control query on the
same route returned 10 results seconds later. A single load would have produced a false
finding — and an earlier agent recorded "Bing returned an explicit zero-result page" for
its query, which may have been this same transient rather than a property of the keyword.
**Never conclude "nothing ranks" from one load.** Also note the **Bing RSS route is now
dead from this IP** (HTTP 200, correct channel title, **0 `<item>`** across 4 variants),
so use the real browser DOM.

**Whatever route you use, name it in the post and in your report.** One agent labelled
it plainly as an instrument substitution, which is exactly right. An unlabelled
position is worthless, and five posts in an earlier wave asserted what competitors do
on SERPs nobody had run — if you did not run it, you do not know.

Your row carries the right `region` (`br-pt`, `es-es`, `mx-es`, `fr-fr`, `it-it`,
`de-de`, `tr-tr`, `id-id`, `ru-ru`, `nl-nl`, `pl-pl`, `us-en`) — map it to the
`gl`/`hl` pair. **Do not trust any SERP I paste into your prompt.** One agent checked
and found only three of my ten pasted hosts actually ranked, with the incumbent at #2
rather than #1 and the weak count 8-of-9 rather than 6-of-10. Measure it yourself.

Record who ranks, the page type of each, and the weak count.

## 4. Every non-English line must be verified against a fetched source

This is the standard the batch is judged on. Last waves, checking lines against real
dictionaries cut roughly 40% of them — including an Odia entry that opens on
"Coition; copulation" and a Sinhala word glossed by the #1 result as "remember" when
the dictionary gives "forgetting".

Named instruments, cited in the post, never a competitor's listicle and never memory:

- Spanish — **RAE** (`dle.rae.es`), CORPES/CREA for frequency
- Portuguese — **Priberam**, Michaelis, VOLP (Academia Brasileira de Letras)
- French — **Larousse** (`larousse.fr`; *manquer* is **49234**, and `/49348` serves
  MARAUD). **CNRTL IS NOW A JS SPA** — `/definition/<word>` returns HTTP 200 with a
  914-byte empty shell and `/api/definition/` 400s, so it worked for an early row and
  fails now; `dictionnaire-academie.fr/search` is likewise an empty SPA shell, **Académie
  française** (`dictionnaire-academie.fr` — NOT `academie-fr.fr`, which does not resolve).
  **Larousse entry ids are not guessable**: `/manquer/49348` returns 200 and serves the
  entry for MARAUD. Verify the id lands on the word you think it does before citing it
- Italian — **Treccani**, Vocabolario della Crusca
- German — **Duden**, DWDS (`dwds.de`)
- Dutch — **ANS** (`ans.ruhosting.nl` / INT) is the grammar authority and works; **Van
  Dale is UNUSABLE** (every URL shape returns HTTP 200 serving an 8,403-char webshop page
  with no headword — the MARAUD/DEZILITER trap again); Onze Taal has no reachable search
  endpoint (404); `woordenlijst.org`, etymologiebank.nl
- Polish — **PWN is 403 from every route including the real browser**; recover its
  Poradnia rulings via the Wayback Machine and read the headword before citing. WSJP
  returns 401 for in-progress entries. **NKJP works only through PELCRA
  `NKJPSpanSearch` with the form's own defaults sent verbatim** (Poliqarp returns a bare
  form with zero results)
- Turkish — **TDK Güncel Türkçe Sözlük** (`sozluk.gov.tr`)
- Indonesian — **KBBI** (`kbbi.kemdikbud.go.id`); Javanese speech levels: verify ngoko
  vs krama for every form you print
- Russian — **Gramota.ru**, Ожегов, Национальный корпус (`ruscorpora.ru`)
- Japanese / Korean — the standard dictionary, plus **Tatoeba** for attested usage
- ISO codes — **verify at `iso639-3.sil.org`, never from a brief.** One earlier prompt
  of mine contained three ISO errors in a single paragraph.
- Scripts and codepoints — `unicode.org` charts, never a blog's screenshot

**`webonary.org` is UNUSABLE — 403 Cloudflare.** Reported independently by two rows.

**Wiktionary 404s on inflected and romanised forms — check the exact page, not the
word.** `en.wiktionary.org/wiki/会いたい` and `会いたかった` are both `missingtitle`; build
on the lemma page (`たい`, `会う`) instead. One agent also found
`en.wiktionary.org/wiki/aitai` **ranking top-5 for its keyword while containing no
gloss of the Japanese word at all** — its sections are Italian, a bare romanization
pointer, and Latvian (dative of *aita*, "sheep"). A page existing is not a page saying
what you need.

**WHY the Larousse trap happens, and it generalises: in a Larousse URL the WORD IS
DECORATIVE — only the numeric id selects the entry.** An agent proved it by fetching
`/aussi/6587`, `/6588` and `/6589`, which return 200 serving **autoamputation**,
**autoanalyse** and **s'autoanalyser**. That is why `/manquer/49348` serves MARAUD. The
correct ids found so far: **manquer 49234**, **aussi 6526**. The Académie behaves
similarly — its `/search` is an empty shell with zero `/article/` links, so ids are
found by bisection (**AUSSI = A9A3190**, **manquer = A9M0575**).

**HTTP 200 IS NOT CONFIRMATION YOU GOT THE RIGHT ENTRY.** Twice now: Larousse
`/manquer/49348` returns 200 and serves the entry for **MARAUD**, and `dwds.de/wb/hdl`
returns 200 and serves **DEZILITER**. Both would have been cited as the word the agent
was looking for. **Read the headword on the page you fetched and confirm it is your
word** before you cite it — a dictionary is only an instrument if you checked which
entry you are holding.

**Get the grammatical label exactly right.** ‑たい is the **desiderative**; the
volitional of 会う is 会おう. Three ranking pages in that row had the terminology wrong,
one labelling a verb form "Adjective". Imprecision copied from a brief becomes an error
a reader can check — and an earlier post in this family invented an "exclamative
inversion" that does not exist. If my prompt hands you a grammatical term, verify it.

**Verify the dictionary resolves BEFORE building a section on it.** Two of three DSAL
references written into an earlier brief from memory were wrong. Treat every lexical
reference here as a lead to check.

**Record every line you CUT and why** in `structuralLimitations`. The cuts are the
evidence of method and reviewers read them.

**Look for a checkable error in a ranking result.** Five sibling rows found one —
a #1 page glossing "forget" as "remember", another giving بحبك ("I love you") as
"I miss you". A dictionary-checkable error in a top result, cited with a page or entry
reference, is the strongest citation asset available on these SERPs.

## 5. Price guard — in YOUR language

`content/facts.md` has an **EMPTY** pricing block, so every price claim is unsourced.
The verifier's guard is an **English-only regex and will not catch your language.**
That makes this your responsibility, not the tool's.

Never write, in any language: **free / grátis / gratuito / gratis / gratuit /
kostenlos / ücretsiz / бесплатно / darmowy / gratuito / 무료 / 無料**, any price, any
"costs nothing", any tier or subscription claim. Say it cannot be confirmed and link
`/templates`.

Run before you save:
```
node content/batches/2026-09-26-miss-you-global-30/pricecheck-intl.mjs
```

## 6. First-party facts, and the caveats that travel with them

Use `facts-snapshot.md` (pinned), **not** `content/facts.md` — `npm run facts`
rewrites the live file in place and orphaned 721 references across 86 posts once.

**Three caveats are mandatory in body prose, in your language, not only in the audit:**

1. City, background-music and "together since" are **pickers with defaults**. Their
   fill rates are not sender choices and may not be presented as behaviour.
2. `viewCount` is page views, not unique visitors.
3. n = 214 over two months. No seasonal claim survives it.

**And one more, which matters more in this batch than any other: the database records
which TEMPLATE was opened, never who received it, and nothing in it is segmented by
language or country.** No figure here is Brazilian, Turkish or Polish. Do not imply
one is. Disclose it in body prose.

Phase 0 still blocks: 3 relevant facts, 2 in the first 150 words. **These 12 lines are
heavily used** — 54 siblings draw on them. Pick the least-collided pair you can and
say in the audit that the differentiation is thin. It is an honest structural failure,
not something to hide.

## 7. Sources — caps

4–6 sources. At least 2 pass the **subject test** (about missing someone, about that
language, about distance — not "about the internet"). At least 1 peer-reviewed and
open-access. At most 1 generic context statistic. Wikipedia 0–2, entity
disambiguation only, never counted as research.

**Caps are counted in POSTS, per batch: a URL in at most 2, a publisher domain in at
most 3.** `doi.org` is a resolver — count the publisher it resolves to. Repositories
(`europepmc.org`, `pmc.ncbi.nlm.nih.gov`, `archive.org`, Gutenberg, `books.google.com`)
and the dictionaries above are **cap-exempt hosts** — but the cap still applies to the
**journal named in the citation**. Name the journal so a human can check;
`capcheck.mjs` cannot.

**This is a fresh batch, so the counts start at zero** — but the 54-post sibling batch
already spent 60+ PMCIDs. Check `../2026-09-25-miss-you-30/blogs/` before reusing a
paper, and prefer one it has not touched.

**Check the WORK, not just the hostname.** A sibling nearly cited the same paper twice
through two different hosts.

Route that works, and costs no WebSearch call:
`node content/batches/2026-09-26-miss-you-global-30/findpapers.mjs "<query>"`
(Crossref + Europe PMC), then Unpaywall
(`https://api.unpaywall.org/v2/<doi>?email=suyash.agrahari@hirequotient.com`), then the
Europe PMC REST API for abstracts. **Landing pages 403 a scripted UA; the REST API works.**

**BEST FULL-TEXT ROUTE FOR ANY OPEN-ACCESS PMC PAPER: the Europe PMC `fullTextXML`
endpoint** — `https://www.ebi.ac.uk/europepmc/webservices/rest/<PMCID>/fullTextXML`
returns the whole article as JATS XML. No PDF, no landing page, no 403. The
`carta-para-decir-te-extrano` agent read **all three** of its papers this way and recorded
zero abstract-only citations. **Try it BEFORE reaching for a PDF**, and use it to check a
sample size, a method or a limitation that an abstract does not state.

**Exact form matters:** `/rest/<PMCID>/fullTextXML` works; `/rest/PMC/<PMCID>/…` 404s and
a bare numeric id 500s. **It also 500s transiently** — the orchestrator got 500 on two ids,
retried the identical URL and got 200 with 41 KB of XML. **One failed call proves nothing
here**, exactly as with a Bing zero-result: retry once before concluding a paper has no
full text.

**PDFs DO PARSE — CORRECTION 2026-09-27, and this reverses what every earlier brief in
this run told you.** `pdftotext` (poppler 26.04.0) is on PATH at `/usr/local/bin/pdftotext`,
verified by the orchestrator. The `i-miss-you-in-morse-code` agent downloaded a 1.4 MB ITU
Recommendation, ran `pdftotext -layout`, and parsed all 26 letters out of the clause tables
programmatically instead of retyping them. **So "abstract only" is no longer an acceptable
default: if an open-access PDF exists, fetch it and read it.** Roughly forty agents were
told the opposite and recorded honest abstract-only limitations that were never necessary —
that was my error, not theirs. Still record what you actually read: full text, or abstract
because no OA PDF exists.

403/bot-challenged: Wiley, SAGE, Elsevier, Springer, SSRN, MDPI, nature.com.
**WebSearch has a 200-call session limit shared across all of you. Budget ~4.**

Search the phenomenon, not the keyword: `long distance relationship maintenance`,
`emotional expression second language`, `untranslatable words emotion lexicon`,
`code-switching affect`, `politeness speech levels address`.

**HARD BAN, measured 2026-09-26 across the 16 posts on disk — `capcheck.mjs` CANNOT see
either of these, because one is a journal name and one is reached through a cap-exempt
host. Do not cite, whatever your search returns:**

**CORRECTED 2026-09-28 — the two bans below were wrong and are withdrawn.** The counts
that produced them came from grepping journal names out of post prose, which over-counts,
because agents name journals in running text including inside negations ("NOT Frontiers in
Psychology"). That is the exact failure mode this brief warns about elsewhere, and I then
committed it here. Re-measured by resolving every PMCID against Europe PMC metadata
(`journalcheck.mjs`, the only trustworthy method):

- ***Frontiers in Psychology* is at 2 posts, NOT 5** — `seni-ozledim-ingilizce-nasil-yazilir`
  and `tu-me-manques-en-anglais`. **One slot remains; it is usable.** The old text told
  every row it was unusable and cost them their best source for nothing.
- ***PNAS* is at 2 posts, NOT 3** — `diferencia-entre-te-extrano-y-te-echo-de-menos` and
  `kangen-kamu-bahasa-inggris`. **One slot remains.**
- **PMC13552847 (PNAS, affect labeling in the dominant native language) is in 2 posts, not
  3.** Two IS the URL cap, so the operative instruction is unchanged: **do not cite that
  article again.** Same for PMC11878271 (`diferencia-entre-te-extrano-y-te-echo-de-menos`
  and `ik-mis-je-in-het-frans`).

Run `node content/batches/2026-09-26-miss-you-global-30/journalcheck.mjs` for the live
state rather than trusting any figure written here — it resolves PMCIDs via Europe PMC and
DOIs via Crossref, and prints a residue list of journal-host URLs carrying neither, which
it tells you to count by hand because it cannot.

**Two journals that ARE at their limit, and one distinction I had wrong.** `euroslajournal.org`
(JESLA) and `bop.unibe.ch` (*Linguistik Online*) are **two different journals**; I had been
treating them as one. What is actually capped is an ARTICLE in each:
- JESLA article `jesla.127` — cited by `ich-vermisse-dich-auch` and `ya-tozhe-skuchayu-po-tebe`
  through two different URLs. Same article, so it is at the URL cap of 2: **do not cite that
  article again.** A *different* JESLA article is still allowed (the journal is at 2 of 3).
- *Linguistik Online* article `1777` — cited by `i-miss-you-too-in-italian` and
  `tu-me-manques-aussi`. **Do not cite that article again.** A different one is allowed.
- Also spent, check before citing: PMC11977004, PMC13481806, PMC4891949, PMC12714898,
  PMC13550703, PMC13337705, PMC12599338, PMC8144866.

**The lesson worth carrying: a clean `capcheck` does NOT mean you are within the caps.**
It counts hostnames. The cap that bites in this batch is on the **journal named in your
citation**, which only a human reads. **Name the journal in your source note** so the
orchestrator can count it, and check your journal against this list yourself.

Run `node content/batches/2026-09-26-miss-you-global-30/capcheck.mjs` immediately
before writing your file — six of you write at once and your check goes stale.
If you are the one over, swap your least load-bearing citation rather than arguing.

## 8. Hard rules the verifier enforces

- **FAQs live in `article.faqs` and the FAQPage JSON-LD only** — never in
  `contentMarkdown`. Strapi renders them separately and the reader sees them twice.
- **The body must reach 1,500–1,800 words without the FAQs**, plain whitespace split.
  The verifier hard-fails outside that range.
- 8–12 FAQs, in your body language. None may restate a body H2.
- `templateUrls` must be **relative** (`/missyou-gf`), 1–3, from `TEMPLATE_LINKS` in
  `app/lib/prompt.ts`. An invented slug 404s.
- 2–4 internal links, descriptive anchor text, placed after the section that earns them.
- **Emit valid JSON.** A sibling crashed the verifier batch-wide with one unescaped
  `"`. You are writing accented Latin, Cyrillic, Arabic and CJK — check your file
  parses and the script survived the write.

## 9. Audit arithmetic

`passed ∩ failed = ∅` and `|passed| + |failed| = 50`. Strings **byte-verbatim** from
`references/publish-checklist.md` (English — the checklist is not translated). An item
runs from its `- [ ]` marker to the next marker, blank line or heading,
whitespace-collapsed; several wrap across lines.

**Put any extra self-checks of your own in a separate `additionalChecks` field** —
never in `passed` or `failed`. A row killed mid-verify shipped 55 items against a
50-item checklist and had to be repaired by hand.

A structural failure stays `failed` with an honest `why` naming the blocker and what
would close it. **Never delete an item to make the count green.**

Run before reporting:
```
node scripts/verify-batch.mjs content/batches/2026-09-26-miss-you-global-30
```
Act only on lines naming your own slug. **Ignore every source-cap finding** — the
orchestrator enforces caps at quiescence; acting on a mid-write count once stripped a
legitimate source from a finished post. Ignore the batch-wide `batch.json` line.

## 10. Scratch files

The scratchpad is **shared**. Name every temporary file `<your-slug>-<purpose>.md`.
Three agents once wrote `body.md` simultaneously and overwrote each other mid-draft.

## 11. Corrections entered 2026-09-28 (wave 4)

These four were each wrong in a previous version of this brief or in my prompts. They are
listed as corrections, not as new rules, so nobody re-derives them.

**The schema file is real; the path I gave was not.** `references/article-json-schema.md`
does NOT resolve from the repo root. It lives at
`.claude/skills/blog-optimisation/references/article-json-schema.md` (11,679 bytes, 197
lines). Agents in waves 1–3 who reported it missing were right about the path and I
overruled them; four posts carried a false failure and have been corrected. The file ships
its own validator under "Validate before committing" — run it, it is the real check. All 52
posts pass it.

**Production Strapi is UP and this batch is already published.** Only `127.0.0.1:1337` is
down. `https://strapi.subhsandesh.in/api/articles?filters[slug][$eq]=<slug>` answers 200.
All 52 posts went live 2026-09-27T20:29Z. Three consequences:
- A slug check returning `total=1` for a post in this batch is a SELF-collision. Verify by
  comparing the live title to your file's title before treating it as a conflict. Seventeen
  posts carried a false "Strapi offline" failure; all seventeen were self-collisions with
  exact title matches and zero real conflicts.
- `miss-you-across-miles` is a confirmed live category, 1 of 10.
- **Renaming the slug of an already-published post is a PRODUCTION change**, not a local
  edit: it orphans a live URL and creates a duplicate at the new one. It needs a redirect
  and the user's decision. Do not do it from a row prompt.

**Song-contamination rule, corrected by measurement (third data point).** The old rule here
said "add a word naming the intent, not the particle". That was never the variable. The
mechanism is: **the disambiguating token must not already appear in the incumbent
vertical's own title pattern.**
- Portuguese worked — the additive particle is absent from lyric-page titles.
- German failed — the particle is inside the song title ("Und ich vermiss dich auch").
- Spanish failed — `significado` is inside the lyric sites' own template
  (`letras.com/<artista>/<id>/significado.html`, "letra y significado"), so adding it moved
  the SERP from streaming results to lyric-meaning results and on Google made it worse.
- **Test before choosing a disambiguator:** search `"letra y <token>"` (or the local
  equivalent) and see whether the incumbents already own the string.

**Browser contention, third confirmed instance.** `browser_navigate` returned `status: ok`
AND the correct page title, and the next `browser_scrape` returned a different concurrent
row's SERP. Passing a distinct `session` name did NOT isolate. PolterTab has no atomic
navigate-and-extract, so the earlier advice to "prefer an atomic call" cannot be followed.
Content self-authentication — asserting markers that must be present and markers that must
be absent — is the only defence, and it is what caught this.


## 12. Route artefact found 2026-09-28 — WebSearch vs Google on head terms

**The harness `WebSearch` tool and Google disagree hard on entity-colliding head terms,
and §3 currently licenses WebSearch for us-en rows with no caveat. That is now a caveat.**

Measured on `i miss you meaning`, three routes, same hour:
- **Google**, real browser, `gl=us&hl=en&pws=0&num=20`, run twice with identical heading
  and host sets, self-authenticated: **zero music results**, 9 of 10 weak — one of the
  weakest SERPs in the batch.
- **Brave**, `country=us`: agrees with Google. The two blink-182 pages sit at ranks ~28
  and ~31 of 33 — page three.
- **Harness `WebSearch`**: **7 of 9 results were Wikipedia song-entity pages.**

WebSearch alone would have produced a **false abort** on a winnable row. The rule:

- For a **head term that collides with a named entity** (a song, film, band, series),
  WebSearch is not sufficient evidence to abort. Confirm on a second route before you
  drop a row, and name both routes.
- The reverse also holds: do not treat a clean WebSearch as proof a SERP is uncontaminated.
- This does not retire WebSearch. It remains fine for long-tail, non-entity queries, and
  it is the only us-en route available when `serp-ddg.mjs` is IP-blocked — which it has
  been for most of this wave. Just label it and do not abort on it alone.

**Corollary for the disambiguator rule in §11.** The title-pattern test tells you WHICH
disambiguating token to avoid *once contamination is measured*. It does not establish that
contamination exists. On `i miss you meaning` the test correctly condemns `meaning` — it
is verbatim inside the music vertical's titles ("A Deep Dive into its Lyrics and Meaning",
"The Meaning Behind…") — yet that condemned token is the one that wins, because on Google
the music vertical is on page three. **Measure first, then select the token.**

## 13. Two operational notes

- **`timeout` is not on PATH on macOS.** Any example in this brief that uses it will fail.
- **First-party fact exhaustion.** All 12 first-party fact lines are now collided 14–25
  times across the siblings; there is no least-collided pair left. Rows written from here
  on cannot differentiate on the numbers, only on the reading of them — say so in
  `honestAssessment` rather than claiming novelty the data does not have.


## 14. Corrections entered later on 2026-09-28 (wave 5)

**`rae.es` / `dle.rae.es` 403 CONSISTENTLY to scripted user-agents, not intermittently.**
§11 called it intermittent on the strength of one retry that worked. A later row measured
4 headwords x 2 attempts = 8/8 refusals. Treat it as: scripted access does not work, use
the real browser, and confirm the headword on the page before citing anything.

**Browser contention is at FOUR-PLUS confirmed instances and has TWO NEW VARIANTS.**
Earlier text said the corruption shows up on the read after a good navigate. Both halves
of that are now wrong:
- It can appear **in the `browser_navigate` response itself** — one row got a navigate
  whose url AND title both belonged to a different concurrent row.
- It is **not specific to SERP pages.** Navigates returned the correct title while
  serving `dle.rae.es/mucho`, `rae.es/dpd/él` and `dle.rae.es/amigo`.
A distinct `session` name does NOT isolate. The only defence that has ever worked is
content self-authentication — assert markers that must be present and markers that must
be absent — and it has now caught every instance. If an earlier read in your run was not
authenticated, discard it retroactively.

**Tatoeba's `api_v0` quoted search is NOT exact-phrase, and does NOT discriminate
grammatical gender.** Verified: `"me haces falta"` and `"me hace falta"` both return 24
with identical sentence sets; `"te extraño mucho"` returns 13 whose top hits are *Te
extrañé mucho* and *Te extrañamos mucho*; `"loco por ti"` and `"loca por ti"` return the
same six sentences, which had made four gender pairs look perfectly symmetric. Never
report a Tatoeba count as a phrase or gender frequency. Report attested / not attested, or
count from the sentence texts yourself. Zeros ARE meaningful and reproducible.

**The `extrañar` / `falta` death-sense test HELD and extended the Portuguese finding.**
DLE, headwords confirmed in the real browser: *extrañar* has 8 acepciones and **zero**
death or loss sense; *falta* acep. 6 is "Ausencia de una persona, **por fallecimiento u
otras causas**"; *faltar* acep. 2 is "Consumirse, acabar, **fallecer**"; *añorar* has a
single acepción and is the only one naming *pérdida*. So Spanish carries the death sense
in **both** noun and verb, where Portuguese's three dictionaries put it only in the noun,
and adds a fourth term with no *saudade* analogue. The Portuguese conclusion survives
anyway: the noun does not disambiguate, so the disambiguators are person, tense and a
return date.


## 15. Two hazards found late on 2026-09-28 — read before using the browser

**THE SERP DOM IS NOT CLEAN. The operator's real Chrome carries a Keyword Surfer
extension** that injects `surferseo.com` links and per-result numbers directly into the
Google results DOM — e.g. a figure like `14,299,153` sitting beside a result. **These are
not Google data and must never be read as search volume, result counts, or anything else.**
Exclude them from every extraction. This is a live trap: the numbers look exactly like the
metric a keyword researcher is hunting for.

**CONTENT SELF-AUTHENTICATION MUST CHECK THE EXACT THING YOU ASKED FOR, NOT THE LANGUAGE
OR THE SITE.** Earlier guidance said to assert language markers that must be present and
absent. That is no longer sufficient and one row proved why: a contended read returned
content **in the same language, from the same site** — a different dictionary headword.
Language markers could not have caught it; only checking the specific headword did.

Two additions to the defence, both free:
- **Compare the `url` the navigate RETURNED against the url you REQUESTED.** One row got
  back `dle.rae.es/extrañar` in the response's own `url` field for a page it never asked
  for. A mismatch is contention, full stop.
- **Assert the specific query, headword or entry you requested appears in the content**,
  not merely that the page is in the right language on the right host.

Running total: **five confirmed contention instances**, corruption appearing in the
navigate response itself as well as on the following read, on SERP and non-SERP pages
alike. A distinct `session` name does NOT isolate.

**`web.archive.org` — CORRECTED an hour later. It is NOT dead; it is per-request.** One
row hit 403s and reported the fallback gone, and I repeated that here without testing it.
Measured directly:

| request shape | result |
|---|---|
| `archive.org/wayback/available?url=...` (availability API) | **429** — reliably rate-limited, do not use |
| `web.archive.org/web/2024/<url>` | **403** |
| `web.archive.org/web/2023/<url>` | **200**, 68 KB |
| the exact snapshot the Polish PWN citation cites | **200**, and the headword „brak jako czasownik" is still present |

So: **skip the availability API, go straight to a timestamped replay, and if one year is
refused try another.** A 402 or 403 on a snapshot is a per-snapshot block, not evidence the
capture is missing. The §11 fallback stands.

**Instrument gained:** `dem.colmex.mx` — Diccionario del español de México, El Colegio de
México — is scriptable, returns HTTP 200, and is a better authority than the RAE for an
mx-es row. It is now cap-exempt. It yielded the best finding in the Spanish cluster: its
adjective example for *querido* is literally «mi más querida amiga», while the NOUN
*querido* is glossed «relaciones amorosas ilícitas; amante» — so *mi querida amiga* is
safe and *mi querida* is a mistress.


## 16. Self-authentication: substring markers are NOT sufficient

A row checked a fetched page for the substrings `extra` and `whatsapp` and got a **false
pass on a RAE dictionary page** — because that page carries a WhatsApp *share button*. The
contended content was in the right language, on a plausible host, and contained both
markers. Only comparing the **page title and the requested URL** caught it.

So the authentication rule, in final form, after five confirmed contention instances:

1. **Compare the `url` the navigate RETURNED with the url you REQUESTED.** A mismatch is
   contention, full stop. This is free and catches the variant where the navigate response
   is itself corrupt.
2. **Compare the page TITLE with what you asked for.**
3. **Assert the specific headword, query string or entry you requested** appears in the
   content — not a substring that could appear incidentally, and not merely the right
   language or the right host.
4. If an earlier read in your run was not authenticated this way, **discard it
   retroactively.**

The navigate response is unreliable in BOTH directions: it has returned the correct title
with foreign content, and foreign url AND title for a page that was fetched correctly.
A distinct `session` name does not isolate.


## 17. §12 refined, and two scoping warnings

**§12 overstated the WebSearch artefact, and a row measured the correction.** §12 says
harness WebSearch invents song-entity contamination that Google does not show. On an
**intent-bearing** query that held — `i miss you meaning` gave WebSearch 7-of-9 song
entities against Google's zero. But on a **bare entity head term** it does not:

| query | Google (`gl=us&hl=en&pws=0`, twice) | Brave (`country=us`) |
|---|---|---|
| `missing you` (bare) | **8 of 8 named entity** — Netflix, Wikipedia ×2, IMDb, Rotten Tomatoes, Spotify/John Waite, Harlan Coben, Guardian | agrees: Netflix, IMDb, RT, Metacritic, Variety, Spotify, YouTube Music, TMDB |
| `"missing you" meaning when to use` | **zero entity**, ~8 of 9 weak | ~15 of 16 weak, 4 hosts shared |

So the entity contamination on a bare head term is **real on Google too**, not a WebSearch
artefact. The correct statement: **WebSearch over-reports entity pages on intent-bearing
queries; on bare head terms every route agrees the entity owns it.** Two routes still
required before aborting, but do not expect Google to rescue a bare head term.

**§7's cap figures are SCOPED TO `2026-09-26-miss-you-global-30`.** They are not portable.
In `2026-09-28-miss-you-es-10`, *Frontiers in Psychology* is **AT CAP at 3 posts**
(`frases-de-te-extrano`, `...-para-mi-novia`, `...-para-una-amiga`) while §7 says one slot
remains — true of the other batch, false here. Always run `journalcheck.mjs` against the
batch you are writing into.

**Cross-links to siblings are only live once that batch is PUBLISHED.** Verified
2026-09-28: `miss-you-or-missing-you`, `miss-you-quotes`, `como-decir-te-extrano-sin-decirlo`
and the rest of the first 52 are live, but `i-miss-you-meaning`, `i-miss-you-so-much-in-spanish`,
`bogosipeo-vs-bogoshipda` and every 2026-09-28 slug return `total=0`. Earlier text in this
brief told rows that "any sibling you cross-link is a real published URL" — that is true
only of the originally published 52. **Deploy consequence: the wave-4 and wave-5 posts
must be published together with, or before, anything that links to them, or those links
404.**
