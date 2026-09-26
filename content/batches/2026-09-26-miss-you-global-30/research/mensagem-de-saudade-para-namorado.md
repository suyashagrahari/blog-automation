# Research brief — `mensagem-de-saudade-para-namorado`

**VERDICT: ABORT at Gate 4. No blog JSON written.**

- Keyword: `mensagem de saudade para namorado`
- Row tier: `D-listicle` (flagged ABORT-LIKELY in `WAVE1-PLAN.json`)
- Region: `br-pt` · bodyLanguage would have been Portuguese (pt-BR)
- Date measured: 2026-09-26
- Files emitted: this brief only. `blogs/` untouched, `batch.json` untouched.

---

## 1. How the SERP was measured (and why not with `serp-ddg.mjs`)

BRIEF §3 asks for `node scripts/serp-ddg.mjs "<kw>" --region br-pt --n 10`.
**That route was unavailable on this machine at this time and I am recording the
failure rather than asserting a SERP I did not run:**

| Route | Result |
|---|---|
| `scripts/serp-ddg.mjs --region br-pt` (4 attempts) | 1st attempt returned `(no results parsed — DDG markup may have changed)`; attempts 2–4 `UND_ERR_CONNECT_TIMEOUT` on `html.duckduckgo.com:443` |
| `lite.duckduckgo.com/lite/` POST from the sandbox | `fetch failed` |
| `scripts/serp.mjs` (Brave) | `brave rate-limited (429) after 4 attempts` |
| `mojeek.com?arc=br` | HTTP 200 but 5.5 KB — the stub `serp.mjs`'s own header documents |
| **Google Brazil in the real browser** — `google.com/search?q=…&gl=br&hl=pt-BR&pws=0` | **200, parsed, used below** |
| `WebSearch` (US-served) | used once, as a control — see §3 |

The measurement below is therefore a **live, Brazil-served, personalisation-off
Google SERP**, which is *stronger* evidence than the DDG `br-pt` proxy the brief
prescribes, not weaker. Both queries were re-run and returned identical result
sets, so this is not a one-shot parse.

## 2. Measured SERP — Google `gl=br&hl=pt-BR`, 2026-09-26

Google returned **8 organic blue links** on page 1; the remaining slots are taken
by SERP features (image pack, video block, related questions). Position numbers
are organic positions.

| # | URL | Publisher type | Strong / weak |
|---|---|---|---|
| 1 | `pensador.com/mensagem_de_amor_a_distancia/` | Pensador — major BR quotes/messages publisher, curated collection | **Strong** |
| 2 | `mundodasmensagens.com/saudade-namorado/` | Dedicated PT message site, exact-intent page ("saudade namorado") | **Strong** |
| 3 | `pensador.com/textos_de_saudade_do_amor/6/` | Pensador again — paginated message collection, page 6 | **Strong** |
| 4 | `pinterest.com/pin/35-frases-de-saudades-do-namorado-…` | Pinterest pin (image, "há 2 anos") | **WEAK** |
| 5 | `mensagenscomamor.com/saudades-meu-amor` | Dedicated PT message site, `…/Saudade` category | **Strong** |
| 6 | `pensador.com/cartas_para_namorado_de_saudades/` | Pensador again — *letters* to a boyfriend, exact recipient match | **Strong** |
| 7 | `casamentos.com.br/artigos/frases-para-seu-amor-a-distancia--c11178` | Casamentos.com.br — large BR wedding marketplace, editorial article | **Strong** |
| 8 | `fashionbubbles.com/datas-comemorativas/frases-de-saudade/` | Established BR lifestyle magazine, on-intent listicle | **Strong** |

**Weak count: 1 of 8** (the Pinterest pin, and Pinterest is excluded from
`serp-ddg.mjs`'s own ranking as a non-comparable publisher).
**Strong count: 7 of 8.** Pensador alone holds **3 of the 8 organic slots**.

### Did the orchestrator's "eight strong, zero weak" hold?

**Yes, in substance — and the specific domains differing makes the case worse,
not better.** The orchestrator's DDG `br-pt` run listed mundodasmensagens,
frasesdobem, pensador ×2, sabedoriaempalavras, mundomensagens, escritoradesucesso
and mensagens10. My Google-BR run shares only pensador and mundodasmensagens and
adds mensagenscomamor, casamentos.com.br and fashionbubbles. Two independent
measurements returning **eleven distinct established Portuguese-language
publishers** between them, with exactly one weak result across both, means the
bench behind this SERP is deep: displacing the visible eight would not clear the
field, because the next eight are the same kind of site.

## 3. Why the keyword inventory said "5 weak" — a reproducible scoring bug

The inventory scored this row *"5 weak: tiktok x2, pinterest, medium,
coroasparavelorio off-intent"*. I reproduced that list **exactly** with a single
**US-served** `WebSearch` call: tiktok.com ×2, a Pinterest pin, a Medium post by
"Me Apaixonei", and `coroasparavelorio.com.br` (a funeral-wreath vendor's
*mensagem de luto* page — off-intent, as the inventory says).

None of those five except the Pinterest pin appear on the Brazil-served SERP.
**The inventory's weakness score for this row was computed on a US SERP for a
Portuguese query, where Google has no strong local signal and falls back to
social and syndication.** That is a scoring artefact, not a market opening.

**This almost certainly affects every non-English row scored the same way** — see §6.

## 4. Gate 4 applied

BRIEF §3: *"If the top 10 is strong editorial pages in that language with no weak
result, a new low-authority English domain publishing its first post in that
language will not rank."*

- Weak results: **1** (a Pinterest pin — not a displaceable editorial slot).
- Language: SubhSandesh has **905 live articles and zero in Portuguese**
  (checked `content/keywords/strapi-live-articles.json`: no slug or title matching
  `saudade|namorad|mensagem|frases`). This would be the domain's first
  Portuguese page, with no topical or language authority behind it.
- Incumbents: Pensador, Mundo das Mensagens and Mensagens com Amor are *dedicated
  Portuguese message publishers* whose entire site architecture is this query
  class. Casamentos.com.br is a marketplace brand. None are beatable with
  "more/better messages".

**Gate 4 fails. Abort.**

## 5. The openings I was asked to test, and why neither survives

The task prompt named the only two angles that would justify proceeding. I tested
both against the actual assets and both fail on facts, not on nerve.

**(a) First-party behavioural data.** `facts-snapshot.md` is n = 214 over two
months; **nothing in it is segmented by language or country, and it records which
TEMPLATE was opened, never who received it.** So it contains no Brazilian figure,
no figure about Portuguese speakers, and no figure about boyfriends. A Portuguese
page whose differentiator is "our data" would have to disclose, in its own body
prose, that none of the data is about its reader — which is an honest disclosure
that also removes the reason the page exists. This is the structural difference
from the English rows, where the same data is at least drawn from the same market
as the query.

**(b) "What to send when a copied message is obviously copied."** This answers a
query nobody typed. The searcher here wants copyable text; Google's own SERP
features for this query are an image pack and a video block, i.e. it reads the
intent as *grab and send*. A page arguing against copying would be a poor match
for the query it targets, and the explanatory lane in this wave is already
allocated to the sibling rows `saudade-ou-saudades-qual-o-certo` (grammar) and
`o-que-significa-saudade` (meaning).

**I cannot write the one honest sentence justifying this page next to those eight.
So, per the instruction, I abort.**

## 6. Two findings the wave should act on

**A second, independent mismatch on this row.** `TEMPLATE_LINKS` in
`app/lib/prompt.ts:44` defines `/missyou-gf` as *"'I miss you' page for a
girlfriend/partner"*. This row's recipient is a **namorado (boyfriend)**. The
mandatory template link is therefore both wrong-language *and* labelled for the
wrong recipient for this row's reader. Any surviving `…para namorado` row in this
wave inherits that problem and must disclose it, not just the English-labels
problem in BRIEF §2.

**Priberam resolves — confirmed, with a caveat for pt-BR rows.**
`https://dicionario.priberam.org/saudade` returns HTTP 200 and serves the entry,
but **redirects to `/pt-pt/saudade`** (European Portuguese). Sibling rows writing
pt-BR must request `/pt-br/<word>` explicitly and cite that URL. The entry as
served reads: *saudade*, nome feminino — **1.** "Lembrança grata de pessoa
ausente, de um momento passado, ou de alguma coisa de que alguém se vê privado."
**2.** "Pesar, mágoa que essa privação causa." **3.** [Botânica] "Planta (Scabiosa
atropurpurea) da família das dipsacáceas. (Mais usado no plural.) = ESCABIOSA,
SUSPIRO". Sense 3 is a plant and is a live trap for any row that skims the entry.

## 7. What would have to be true for this row to be worth writing

In rough order of how much each would move the decision:

1. **The domain would need existing Portuguese-language presence** — a cluster of
   pt-BR pages with some ranking history, so a listicle is not a cold first post
   in a new language. It has none of 905 posts.
2. **First-party data segmented by country or language**, so the page could carry
   a number that is actually about Brazilian senders. The snapshot cannot be
   re-cut to produce this; it would need new instrumentation.
3. **A weak-result count of 3+ on the Brazil-served SERP** — forums, Q&A, thin
   aggregators or stale pages in displaceable slots. Measured: 1, and it is a
   Pinterest pin.
4. **A product that reads in Portuguese.** The single largest conversion problem
   here is that the reader arrives from a Brazilian message SERP and lands on an
   English page. Localising one template would change this row's economics more
   than any amount of writing.

## 8. Does this generalise to the other Portuguese, Italian, Dutch and Polish listicle rows?

**Yes — for the `D-listicle` tier specifically, and I would treat it as the default
expectation rather than a prediction.** Three of the reasons are structural, not
about this keyword:

- Every one of these markets has a mature national "frasi / frases / cytaty /
  citaten" publishing sector with a decade of authority, exactly as this SERP shows
  for pt-BR and as the brief reports for `de-de` (ten established German magazines).
- The inventory's weak-result scores for these rows appear to be **US-served
  artefacts** (§3, reproduced exactly). Any `D-listicle` row whose "weak" results
  are TikTok, Pinterest, Medium or a random off-intent vendor is very likely
  carrying the same bug, and the number should be re-measured in-market before it
  is used to justify proceeding.
- The first-party-data differentiator is unavailable in **every** non-English row
  for the same reason it fails here: the database has no language or country
  segmentation at all.

**What does not generalise:** the `A` and `B` rows — grammar, meaning, translation,
"how do I say this differently". Those SERPs are contested by forums, dictionary
scrapers and Q&A, the weak counts are genuinely higher, and a careful
dictionary-verified page has a real claim there. **The abort here is an argument
about the listicle tier, not about writing in Portuguese.** My own sibling rows
`saudade-ou-saudades-qual-o-certo` and `o-que-significa-saudade` are the right
shape and should proceed on their own measurements.

**Recommended wave action:** re-measure every `D-listicle` row in-market before
drafting, and expect most of them to land where this one did.

---

### Audit note

No `blogs/*.json` file was written, so the 50-item publish checklist does not
apply to this row. Nothing else in the batch was touched.
