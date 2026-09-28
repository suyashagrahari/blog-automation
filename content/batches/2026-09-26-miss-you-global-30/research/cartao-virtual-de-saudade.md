# Research brief — `cartao-virtual-de-saudade`

Keyword: **cartão virtual de saudade** · market **br-pt** · body language **PT-BR**
Row tier: product-shaped landing/guide. Inventory band 1 (<300/mo), weakness 5, intent-fit 5.
Written 2026-09-28.

---

## 1. SERP measurement (in-market, two routes, both self-authenticated)

### Route 0 — `serp-ddg.mjs` (FAILED, and proven to be a block, not a zero)

```
node scripts/serp-ddg.mjs "cartão virtual de saudade" --region br-pt
  → engine: ddg-html  region: br-pt  query: cartão virtual de saudade
  → (no results parsed — DDG markup may have changed)
```

Query echoed back correctly, so this is not the argument-order bug in BRIEF §3.
**Control query with known demand**, same route, same minute:

```
node scripts/serp-ddg.mjs "mensagem de saudade" --region br-pt
  → (no results parsed — DDG markup may have changed)
```

A query that returns eight strong Portuguese publishers on Google returned the same
empty block. **DDG is bot-challenged; it measured nothing.** This is exactly
laneWideFinding #20. One call each, no retries.

### Route 1 — Google, real browser, `gl=br&hl=pt-BR&pws=0&num=20` (PRIMARY)

Run twice, identical heading and host sets both times.
Self-authentication: Portuguese UI chrome ("Resultados da pesquisa", "Resultados da
Web"), Portuguese result titles, `/pt/` and `/pt_br/` paths; **no** German, Spanish or
Japanese markers. This is my SERP.

9 organic results. **No AI Overview, no featured snippet, no People-Also-Ask.**

| # | Host | Title | Page type | Weak? |
|---|---|---|---|---|
| 1 | joyogram.com/pt/ | Cartão online de saudades | localised SaaS card tool | weak |
| 2 | joliecarte.com/pt/ | Cartão de saudades | localised SaaS card catalogue | weak |
| 3 | br.pinterest.com | **Mensagens de Condolências** | pinboard, **wrong intent (luto)** | weak |
| 4 | canva.com/pt_br/ | Modelos de Mensagens De Saudade | template gallery | weak |
| 5 | capcut.com/pt-br/ | Modelo de Cartão de Despedida | video-editor template | weak |
| 6 | pt.venngage.com | Cartão de despedida virtual | template gallery | weak |
| 7 | play.google.com | Cartões Para Todas Ocasiões | app store listing | weak |
| 8 | homiwork.com/pt/ | Cartão 'Pensando em Você' … 'Sinto Sua Falta' | AI image tool | weak |
| 9 | joyogram.com/pt/ | Cartão online de saudade para namoradas | localised SaaS card tool | weak |

**9 of 9 weak. Zero editorial pages. Zero Brazilian publishers. Zero how-to guides.**
Every result is a product surface; not one explains what to write or how to send it.

### Route 2 — Brave, real browser, `country=br` (CORROBORATION)

Self-authenticated: `elo7.com.br`, `umcartao.com`, `lettersofjoy.com.br`,
`ninawrite.com`, `veionamala.com`, `colab55.com` — all Brazilian, all Portuguese.

Brave returns a **different commercial tier**: physical/paper card e-commerce
(Elo7 marketplace listings, artisan stationery shops) plus one Pinterest board and
`pensador.com` ("carta de amor e saudades", a quotes site). Notably
`umcartao.com/fisicos/cartoes/cartao-saudade-e-emergencia`.

The two routes disagree on *which* commercial tier ranks and **agree completely on the
gap**: no informational page in Portuguese, on either index, tells a Brazilian sender
what to write or what the recipient will see.

### Gate 4 call: **PROCEED**

The orchestrator's warning shape held: an earlier row measured
`mensagem de saudade para namorado` in br-pt and found 1 weak in 8 against eleven
established Portuguese publishers, and the whole listicle tier was correctly dropped.
**This query shape behaves oppositely.** `cartão virtual de saudade` is transactional,
and the transactional br-pt SERP is owned by generic international template SaaS with
machine-localised pages — not by Brazilian editorial authority. 9 of 9 weak on Google,
corroborated by a second index.

---

## 2. Gap analysis

**Table stakes** (present on most of the 9): what a virtual card is; that you send it as
a link; that you can add a photo and a message; that WhatsApp is the send channel
(JolieCarte's own share row lists "WhatsApp · Facebook · SMS · outras apps", WhatsApp
first, and its modal says WhatsApp sending works only from a phone).

**The gap — nobody addresses the register collision.** Every one of the nine pages
treats *saudade* / *sinto sua falta* as unambiguously affectionate. The SERP itself
falsifies that at rank 3 (a **condolence** board) and rank 2 (a saudade card catalogue
whose own list includes *"Feliz aniversário no céu"*). No page warns the sender.

**Unanswered:** what the recipient sees in the WhatsApp preview bubble before opening;
*tu* vs *você* in the card line; whether the noun alone can carry a message.

---

## 3. The Brazilian distinction, established by measurement

### 3a. The death sense lives in *falta*, not in *saudade* — three dictionaries

| Instrument | Entry read 2026-09-28 | Death sense? |
|---|---|---|
| Priberam pt-br, `saudade` | n.f. 1 lembrança grata · 2 pesar/mágoa da privação · **3–5 Botânica, *Scabiosa atropurpurea*** · plural headword *saudades* 6 boas lembranças · 7 cumprimentos ("mande-lhe saudades minhas"). Origem: lat. *solitas, -atis* | **no** |
| Priberam pt-br, `falta` | n.f. sense **8 "Falecimento, morte."** | yes |
| Michaelis (Dic. Brasileiro), `falta` | sf sense **3 "*por ext* Morte, falecimento."** — third of twelve | yes |
| Aulete, `falta` | sense **9 "Morte, falecimento: *Apesar do tempo, ainda sente muito a falta dos pais.*"** | yes, with a bereavement example in the exact verb frame `sentir a falta de` |

Priberam's headword was read on the page fetched (`/pt-br/saudade`, requested with the
`pt-br` path explicitly because the site redirects to `/pt-pt/`). **Sense 3 of *saudade*
is the plant *Scabiosa atropurpurea*** — confirmed, and the reason sense numbers must
never be cited without reading the headword.

### 3b. My first hypothesis was WRONG, and the paper is what overturned it

I first concluded: "*saudade* is the safe card word, *sinto sua falta* is the risky one."
**That is not what Brazilian bereavement data shows.**

*Vivência de idosos que perderam um filho* (Revista Brasileira de Enfermagem, 2026-07-06,
doi 10.1590/0034-7167-2025-0260, PMC13336226, open access, read in full via Europe PMC
`fullTextXML`) — qualitative, **n = 8** older adults, snowball sampling, Discourse of the
Collective Subject. Participants' own collective discourses:

- *"hoje o sentimento é de saudade, sinto muito a falta dele. Saudade de um abraço e dos
  momentos que vivemos juntos."*
- *"Sinto falta, sinto saudades deles, e essa não vai passar."*
- Abstract: *"embora a aceitação da perda seja possível, a saudade e a falta permanecem."*

So **both** nouns are native to the Brazilian mourning register. The dictionaries put the
*lexicalised* death sense only in *falta*, but usage puts both there.

**Therefore the disambiguator cannot be the noun.** It has to be the tense, the
addressee and the presence of a future: a card with a return date, a second-person
present/future verb and a request for a reply cannot be read as a condolence whichever
noun it uses. That is the post's thesis, and it is the opposite of what I started with.

### 3c. What the recipient actually sees in WhatsApp — measured, not assumed

Fetched `https://subhsandesh.in/missyou-gf` 2026-09-28 (HTTP 200). Head tags:

- `og:locale` = **`en_US`**
- `og:title`, `og:description` — **English**
- `og:image` = `/assets/missyou-gf/og-missyou-gf.png`, `og:image:width` 1200,
  `og:image:height` 630
- `og:type` = `website`, `twitter:card` = `summary_large_image`

Per the Open Graph protocol (ogp.me, fetched 2026-09-28), `og:title`, `og:type`,
`og:image` and `og:url` are the four required properties and `og:locale` is optional.
The preview bubble is built from these tags, not from what the sender typed inside the
page. **So a Brazilian sender pasting this link into WhatsApp gets an English preview
card**, regardless of the Portuguese they wrote. Nobody on the SERP says this about any
product, including ours. This is also the BRIEF §2 disclosure, in body prose.

Limitation recorded: I measured the **template** page. I did not measure a created,
shared page's tags.

---

## 4. Claims tested and NOT established

- **"WhatsApp dominates as the send channel in Brazil."** I could not verify a population
  statistic from an official source. IBGE Agência de Notícias returned **403** (Cloudflare
  "Just a moment…"); CETIC.br publishes TIC Domicílios only as downloadable
  spreadsheets behind a JS shell. The post therefore **asserts no share figure**. It
  grounds the WhatsApp section only in what is verifiable: the Open Graph spec, our own
  measured tags, and the observation that the ranked Brazilian card page puts WhatsApp
  first in its own share row.
- Europe PMC searches for a peer-reviewed Brazilian WhatsApp-channel study returned only
  health-intervention literature (antenatal care, HIV, breastfeeding chatbots) — real
  research, wrong subject. Searched: `WhatsApp AND brazil* AND (communication OR
  message*)`, `"link preview" OR "rich preview"`, `long distance romantic relationship
  mediated communication messaging`.

## 5. Sources (6)

1. `dicionario.priberam.org/pt-br/saudade` — instrument (cap-exempt)
2. `dicionario.priberam.org/pt-br/falta` — instrument (cap-exempt)
3. `michaelis.uol.com.br/…palavra=falta` — instrument (cap-exempt)
4. `aulete.com.br/falta` — instrument (cap-exempt)
5. `europepmc.org/article/PMC/PMC13336226` — **Revista Brasileira de Enfermagem**, 2026.
   Journal not at cap (journalcheck 2026-09-28: not listed). Read in full, n=8 disclosed.
6. `ogp.me` — Open Graph protocol, a standard (cap-exempt class)

Zero generic context statistics. Zero Wikipedia. No competitor cited or linked.

## 6. Cross-links, not restatements

- `/blog/o-que-significa-saudade` — the dictionary senses argument. Not repeated here.
- `/blog/saudade-em-ingles-como-se-diz` — the translation frames. Not repeated.
- `/blog/saudade-ou-saudades-qual-o-certo` — singular vs plural. I use only the
  *cumprimento* sense, for the sign-off decision, and point there for the rest.
- The four live English siblings (`send-i-miss-you-card-online`,
  `how-to-make-an-i-miss-you-website`, `i-miss-you-page-maker-for-her`,
  `website-to-tell-someone-you-miss-them`) do the generic build-and-send job in English.
  **Nothing here is translated from them**: the register collision, the dictionary
  evidence, the *tu*/*você* line and the English-preview measurement have no English
  counterpart.

## 7. Tooling defects found

- `serp-ddg.mjs` bot-challenge is indistinguishable from an empty SERP; the control-query
  protocol worked and should stay mandatory.
- IBGE Agência de Notícias is 403 to a scripted UA — add to the brief's blocked list.
- My row (`cartao-virtual-de-saudade`) is **not present in `WAVE4-PLAN.json`'s `rows`**.
  The ten slugs there are a different set. The plan file's `bindingReminders` and
  `laneWideFindings` were read and applied; the row itself came only from the prompt.
