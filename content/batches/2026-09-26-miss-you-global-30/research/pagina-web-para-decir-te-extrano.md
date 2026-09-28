# Research brief — `pagina-web-para-decir-te-extrano`

**Keyword:** página web para decir te extraño
**Body language:** Spanish (neutral Latin American, es-MX)
**Markets:** mx-es (primary), es-es (secondary)
**Tier:** product-shaped landing/guide. Band 1 (<300/mo), weakness 5, intent-fit 5.
**Date measured:** 2026-09-28

---

## Phase 1 — SERP measurement (measured, never inferred)

### Routes attempted, in the order the BRIEF prescribes

| Route | Result |
|---|---|
| `serp-ddg.mjs "página web para decir te extraño" --region mx-es` | Ran ONCE. Echoed `query: página web para decir te extraño` correctly (so **not** the argument-order trap) and returned `(no results parsed)`. Per BRIEF §3 that is an IP-level block. Not retried. |
| **Google, real browser, `gl=mx&hl=es&pws=0&num=20`** | **WORKED.** Run twice, identical host set and order both times. Footer confirmed `Los resultados no están personalizados` / `México`. |
| **Google, real browser, `gl=es&hl=es&pws=0&num=20`** | **WORKED.** Different result set from mx — recorded separately. |
| Harness `WebSearch` | **NOT USED and not a valid route here.** It is us-en only; a US-served index for an es-MX query is the artefact that made the keyword inventory worthless (BRIEF §3). Stated rather than silently substituted. |

**Self-authentication** (BRIEF §11 — title is NOT authentication): every scrape was checked for markers that must be present (`extraño`, `te echo de menos`, Spanish SERP furniture `Resultados web`, `Falta(n)`) and markers that must be absent (`vermisse`, `özledim`, Japanese kana, Tamil block). All three scrapes passed. No contaminated page was recorded.

### Measured SERP — Google `gl=mx&hl=es&pws=0&num=20`, 2026-09-28, 9 organic results seen

| # | Host | Title | Page type | Weak? |
|---|---|---|---|---|
| 1 | canva.com | Crea tarjetas de Te extraño online … | template gallery | no (strong brand, but gallery not guide) |
| 2 | capcut.com | Formas emotivas de decir 'Te extraño' y fortalecer tus lazos | tool content-marketing | **weak** (off-intent) |
| 3 | monlivresms.com | Mensajes de amor a larga distancia | message listicle | **weak** — Google prints `Falta(n): web` |
| 4 | correomagico.com | Ideas geniales para decir Te extraño | e-card sender | no |
| 5 | pensador.com | 102 frases de extrañar a alguien | quote aggregator | **weak** (off-intent) |
| 6 | joyogram.com | Tarjeta Te extraño en línea para prometidos | card builder | no |
| 7 | quillbot.com | Frases para decir te echo de menos | grammar-tool blog | **weak** (off-intent) |
| 8 | adobe.com | Frases de "Te extraño" perfectas… | quote page, machine-translated (Google labels it `Traducido por Google · Ver original (English)`) | **weak** |
| 9 | writeexpress.com | Realmente te extraño. (Por favor, ven a casa pronto.) | sample letter, English site | **weak** — Google prints `Falta(n): web` |

**Weak count: 6 of the 9 results I actually saw.** An AI Overview and an AI Mode answer sit above them, both answering with Correo Mágico / Canva / Joyogram.

### Measured SERP — Google `gl=es&hl=es&pws=0&num=20`, 2026-09-28, 9 organic results seen

correomagico.com · canva.com · capcut.com · joyogram.com · dedica.me · joliecarte.com · tlanex.com · greetingsisland.com · joliecarte.com (2nd URL).

Different market, different incumbents, **same shape**: nine product/gallery pages, zero editorial guides.

### Gate 4 — ABORT or proceed?

**PROCEED.** The abort condition handed to me was "owned by established page-builder brands with no gap".

- *Established brands*: partly true — Canva, Adobe, CapCut, Greetings Island.
- *No gap*: **false, and this is the load-bearing finding.** Six of nine mx results are quote listicles or off-intent tool marketing, two of which Google itself flags as missing the query term `web`. The three genuinely product-shaped results (Canva, Correo Mágico, Joyogram) are **template galleries, not guides** — they show you cards, they do not tell you what to put on one, which second-person pronoun to write it in, or what happens to the link when you send it.
- **Not one of the eighteen results across both markets addresses a single Spanish-specific decision**: tú/vos/usted, `extrañar` vs `echar de menos` in the page's own copy, or what an accented page name does to the URL.

## Phase 2 — Gap analysis

**Table stakes** (all incumbents cover): a build sequence, photos, a message, a share link, privacy.

**The gap**: every incumbent is a gallery. Nobody writes the *order*, nobody answers *how long the text should be*, and — decisively — **nobody treats the page as a Spanish artefact**. The English siblings on our own domain (`/blog/how-to-make-an-i-miss-you-website`, `/blog/website-to-tell-someone-you-miss-them`, `/blog/i-miss-you-page-maker-for-her`, `/blog/send-i-miss-you-card-online`, all four read in full) never face these decisions, because English has one second person, no ñ, and no regional verb split. **This post is therefore not a translation of any of them** — it is the set of decisions that only exist in Spanish.

**Fan-out sub-queries → H2s**: qué es / los pasos en orden / qué escribir y cuánto / tú-vos-usted / qué verbo usar / la ñ en el enlace / cómo enviarla / comparación / qué encuentro al hacer clic / límites de los datos.

## Phase 3 — Sources (4–6; caps checked live before writing)

1. **RAE, *Diccionario panhispánico de dudas*, «voseo»** — https://www.rae.es/dpd/voseo — headword read and confirmed on the page. §2.3 *Extensión del voseo*: "son zonas de tuteo exclusivo casi todo México…"; "coexisten el tuteo como tratamiento de formalidad intermedia y el voseo como tratamiento familiar en Chile … en la mayor parte de Centroamérica". §2 *Voseo americano*: "implica acercamiento y familiaridad". **Cap-exempt instrument.** Fetched via the real browser — rae.es returns 403 to scripted UAs and to `ctx_fetch_and_index`.
2. **RAE, *DPD*, «usted»** — https://www.rae.es/dpd/usted — headword confirmed. §2: usted is grammatically third person, "si funciona como sujeto, el verbo debe ir en tercera persona"; §4: "usted implica cierto distanciamiento, cortesía y formalidad". **Cap-exempt instrument.**
3. **Bertolotti-style matched-guise attitude study** — *International Journal of the Sociology of Language*, "Competing patterns of prestige in Latin American Spanish: implicit attitudes towards informal address in two Uruguayan cities", 2026-02-20, PMC13358585. **Read in FULL** via the Europe PMC `fullTextXML` endpoint (199,582 bytes). Matched-guise test, raters N = 82 (Montevideo) + N = 75 (Rocha). Peer-reviewed, open access (CC BY 4.0). **Journal not in any cap list** (journalcheck 2026-09-28).
4. **JMIR Formative Research**, "WhatsApp-Based Focus Groups Among Mexican-Origin Women in Zika Risk Area", 2021-10-28, PMC8587330. **Read in FULL** via `fullTextXML` (96,121 bytes). n = 5 — tiny, and disclosed in the body. Load-bearing detail: participants had to be warned that other members "would be able to see their phone numbers, profile pictures, and public status messages", and the study shipped an appendix on setting up an anonymous WhatsApp number. **Journal not in any cap list.**
5. **RFC 3986, *Uniform Resource Identifier (URI): Generic Syntax*** — https://www.rfc-editor.org/rfc/rfc3986.txt — §2.3: `unreserved = ALPHA / DIGIT / "-" / "." / "_" / "~"`. ALPHA is US-ASCII, so ñ and the accented vowels are not unreserved. Percent-encodings computed locally and printed in the post: ñ → `%C3%B1`, á → `%C3%A1`, ¿ → `%C2%BF`; `te-extraño-mariana` → `te-extra%C3%B1o-mariana` (18 characters become 23). New domain in this batch, 1 post.

**Swap test**: none of the five could sit unchanged in another post in this batch. The RAE voseo entry, the Uruguayan address study and RFC 3986 are all here *because the artefact is a Spanish page with a link*; no other row in the batch is product-shaped.

**Generic context statistics: zero. Wikipedia body links: zero.**

### A claim in my own prompt that I could NOT verify, and therefore did not assert

The prompt offered "WhatsApp's dominance as the send channel in Mexico and Spain versus SMS/iMessage in the US" as a candidate distinction. **I tried to source it and failed.** INEGI's ENDUTIH 2024 press bulletin (`inegi.org.mx/contenidos/saladeprensa/boletines/2025/ENDUTIH/ENDUTIH_24.pdf`) timed out at 25 s and again at 45 s from this host; the INE Spain equivalent did not return either; and Europe PMC / Crossref returned no paper carrying a Mexico-or-Spain-versus-US messaging-channel share. **No channel market-share figure is asserted anywhere in the post.** The channel section is instead grounded on what *is* verifiable: what a messaging app exposes about the sender (PMC8587330), what a URL can and cannot carry (RFC 3986), and our own phone-open rate. This is recorded in `structuralLimitations`.

### A claim in my prompt that the sources overturn

The prompt framed the register question as "the tú/usted … choice in a message meant to be intimate". **The RAE's own entries say that is the wrong axis for an intimate page.** DPD «usted» §4 puts usted squarely in *tratamiento formal*, implying "cierto distanciamiento" — so it is not a live option in a page for a partner. The choice that actually varies, and that the RAE marks geographically, is **tú vs vos** (DPD «voseo» §2.3): vos is the *familiar* form across most of Central America, Argentina and Uruguay, while almost all of Mexico is *tuteo exclusivo*. The post is built on the corrected axis.

## Phase 6 note

Audit is in `batchMeta.auditReport` in the emitted JSON: 50 items, `passed ∩ failed = ∅`, `|passed| + |failed| = 50`. Extra self-checks are in `batchMeta.additionalChecks`.
