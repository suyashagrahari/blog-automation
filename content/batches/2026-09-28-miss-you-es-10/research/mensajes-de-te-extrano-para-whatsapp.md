# Research brief — mensajes de te extraño para whatsapp

Row: `mensajes-de-te-extrano-para-whatsapp` · lang es · region mx-es (+ es-es intended)
Axis: **FORMAT — the channel.** Not the recipient. Band 3, inventory 4 weak, intent-fit 5.
Written 2026-09-28.

---

## 1. Route log — what was measured, on what, and what was discarded

**`serp-ddg.mjs`, with a control, and the control is the whole finding.**

| # | Call | Result |
|---|---|---|
| 1 | `"recetas de pozole" --region mx-es` (CONTROL, known demand) | 10 Mexican hosts — tool alive, region targeting working |
| 2 | `"mensajes de te extraño para whatsapp" --region mx-es` | `(no results parsed)` |
| 3 | same, `--region es-es` | `(no results parsed)` |
| 4 | **CONTROL RE-RUN**, identical to call 1 | `(no results parsed)` |

Call 4 is the point. The control that returned ten results ~30 seconds earlier returned the
bot-challenge string on re-run, which proves calls 2 and 3 were a **mid-session throttle, not an
empty SERP**. This is WAVE4 laneWideFindings #20 reproduced with the diagnostic run in the other
direction: instead of running a control to prove a block, a control was re-run *after* the failure
to prove the block arrived mid-session. Both blanks were discarded. The query line echoed back was
correct in every call, so the argument-order trap (BRIEF §3) was not involved.

**Google, real browser, `gl=mx&hl=es&pws=0&num=20` — the one recorded measurement.**
Self-authenticated: page title `mensajes de te extraño para whatsapp - Buscar con Google` and the
URL carrying `gl=mx`, both matching the query.

**Four scrapes DISCARDED as contention**, none recorded:

1. `browser_navigate` for my `gl=es` URL returned, in its own response, the URL and title of a
   **sibling row's query** — `te extraño papá frases`. This is a new contention variant worth
   recording: previous instances had navigate return the *correct* title and the next call return
   the wrong page. Here the navigate response itself was wrong. So the navigate result is
   unreliable in **both** directions.
2. Next `gl=es` attempt: scrape returned `rae.es/dpd/el` (another agent's RAE lookup).
3. Next attempt: scrape returned `dle.rae.es/extrañar`.
4. Confirming `gl=mx` re-run: scrape returned `dle.rae.es/falta`.

A distinct `session` name was passed on every call and did not isolate, consistent with BRIEF §11.

**METHOD DEFECT FOUND IN MY OWN CHECK, worth carrying forward.** My first self-authentication used
substring markers `extra` + `whatsapp` must-be-present. On discard #2 both matched — `extra` inside
ordinary Spanish words and `whatsapp` from a **share button** on the RAE page — producing a FALSE
PASS on a page that was not mine. Only the title comparison caught it. Substring markers are not
sufficient authentication on this lane; the page **title plus the search URL** is. Hardened check
used for all subsequent scrapes.

Consequence: **`es-es` was never measured.** All SERP evidence here is `gl=mx`, measured once. The
brief's confirming second run could not be obtained — three further attempts were eaten by
contention.

## 2. The measured SERP (Google gl=mx, self-authenticated, 2026-09-28)

Organic result headings actually seen:

| Result | Host | Type |
|---|---|---|
| 102 frases de extrañar a alguien… | pensador.com | quote aggregator — weak |
| Frases para decir te echo de menos | (es publisher) | listicle |
| frases de te extraño, amor a distancia | mx.pinterest.com | pin board — weak |
| 50 frases de "te extraño" para decirle a alguien | — | listicle |
| Más de 120 mensajes de texto cálidos y conmovedores | — | listicle |
| Las mejores 50 frases para dedicar a tu amor a distancia | — | listicle |
| whatsapp frases de te extraño — Imagen gratis | joliecarte.com | image farm — weak |
| 100 frases de "te echo de menos" | cosmopolitan.com | magazine — STRONG |
| Mensajes de te extraño para dedicar | youtube.com | video — weak |
| video carousel | tiktok / facebook / instagram | social video — weak |

Also present: a Google **AI Mode** answer block at the top.

**Roughly 6 of the ~10 organic results I actually saw are weak** (aggregator, pin board, image
farm, three social-video surfaces), against an inventory score of 4 weak. Cosmopolitan and one
newspaper are the only real editorial authority.

**THE FINDING THAT DEFINES THIS ROW: not one ranking page addresses WhatsApp as a channel.**
The query contains `para whatsapp`. Every ranking result answers "give me phrases", and the single
result carrying "whatsapp" in its title (`joliecarte.com`) is a free-image page, not a channel page.
The D-listicle tier warning is therefore only half-true here: the incumbents *are* listicles, but
they are answering a different question, which leaves the channel ground unoccupied. That is the
gap, and it is exactly the axis this row was assigned — the axis is validated by measurement, not
assumed.

## 3. Gap / table stakes / angle

- **Table stakes:** some actual sendable Spanish lines. Included, but shaped by the channel
  (front-loaded so they survive truncation) rather than listed by recipient.
- **The gap:** what the channel does to the message. Unoccupied on the whole measured SERP.
- **Angle:** the only page that treats WhatsApp as the variable rather than the recipient, and the
  only one that measured what the channel does to a *Spanish* message.

Lane discipline (WAVE5 `standingRisk`): nothing here depends on who receives the message. The
regional `extrañar` / `echar de menos` split is the hub's spine and is **not** restated; recipient
agreement is the para-el / para-mi-novia / para-una-amiga rows and is not touched.

## 4. What was verified, and how

| Claim | Instrument | Result |
|---|---|---|
| `/missyou-gf` serves an English preview | own fetch with a WhatsApp-like UA | `og:locale=en_US`, English `og:title` + `og:description`, `html lang="en"` — reproduces WAVE4 #30 independently |
| why that happens | ogp.me spec | `og:locale` "Default is `en_US`" |
| ñ in a link | RFC 3986 §2.1 + computed | `ñ` U+00F1, UTF-8 `C3 B1` → `%C3%B1`; `¿`→`%C2%BF`, `¡`→`%C2%A1` |
| the invisible trap | Unicode UAX #15 rev 58 (2026-08-12) + computed | NFC `ñ` (U+00F1) vs NFD (`U+006E U+0303`) look identical, give `%C3%B1` vs `n%CC%83` |
| voice vs text | Psychological Science 2017, **full PDF** via pdftotext | Exp 1 human-uniqueness: audio 0.63 vs identical transcript 0.06 |
| what text loses | Emotion Review 2025, **full text** via fullTextXML | "in text messages, meaning is the foremost goal and emotions are a secondary addition" |
| link preview exists | Meta WhatsApp Business docs, **real browser** | text messages = body + "an optional link preview"; CTA buttons exist to avoid "lengthy or obscure raw URLs" |

## 5. What could NOT be sourced — and is therefore not claimed

1. **WhatsApp's consumer mechanics, from WhatsApp.** `faq.whatsapp.com` returns **HTTP 400 to every
   scripted UA** — numeric IDs, slug paths, and `?locale=es_LA` alike. In the real browser the same
   URL renders a correct server-side `<title>` but the article body is a Meta Comet SPA payload of
   **1,201,866 characters** from which `browser_get_text` extracts no prose. `developers.facebook.com`
   also 400s scripted but **did** render one page in the real browser, which is the only
   WhatsApp-published source in this post. Consequence: the read-receipt section describes the
   sender's experience and **explicitly declines to describe settings**, and the truncation section
   **states that no character count is published** rather than inventing one.
2. **Truncation character counts.** Not published by WhatsApp; device-, OS- and font-size-dependent.
   The post says so and gives the direction of the cut (always the end) instead of a number.
3. **WhatsApp channel share for MX/ES.** Not asserted. Not re-attempted — two published rows already
   established INEGI ENDUTIH 2024, INE Spain, IBGE and CETIC.br as blocked or timing out.
4. **Any Spanish-language study of miss-you messaging on WhatsApp.** Six search phrasings tried
   (voice vs text CMC, read receipts/responsiveness, voice notes/intimacy, LDR channel, self-disclosure
   in mobile IM, emoji/tone). Europe PMC skews biomedical on all of them. Both peer-reviewed sources
   used are US/English-sample; both limitations are stated in the body **in Spanish**.

## 6. Sources (6)

1. `ogp.me` — Open Graph spec, `og:locale` default `en_US`.
2. `rfc-editor.org/rfc/rfc3986.txt` — §2.1 percent-encoding triplets.
3. `unicode.org/reports/tr15/` — UAX #15 rev 58, canonical equivalence.
4. `escholarship.org/uc/item/4bd9d03k` — Schroeder, Kardas & Epley, **Psychological Science** 2017.
   Read in full (PDF, 113,965 chars). Caveat: political disagreement, US online evaluators.
5. `pmc.ncbi.nlm.nih.gov/articles/PMC12161768/` — **Emotion Review** 2025, CC BY. Read in full
   (fullTextXML, 210,501 bytes). Caveat: theoretical review, no sample size.
6. `developers.facebook.com/...send-messages` — WhatsApp **Business Platform** docs, updated
   2026-05-21. Caveat: business platform, not the consumer app.

**Source swapped after a real capcheck breach.** First choice for the cue section was PLoS ONE 2025
(`journal.pone.0326189`, PMC12221085, N=260), already read in full. `capcheck.mjs` flagged that exact
URL as **spent by the sibling batch `2026-09-25-miss-you-30`**. Replaced with Emotion Review, and the
section plus its FAQ were **rewritten around the new source** rather than re-pointed at it.

**Tooling defect, and two flags deliberately kept.** capcheck prints "Statutes, dictionaries,
treebanks, corpora and **standards** are EXEMPT and excluded from this list", but applies exemption by
hostname against `capExemptDomains`, which contains `unicode.org` but not `rfc-editor.org` or `ogp.me`.
So UAX #15 is exempt while RFC 3986 and the Open Graph spec — the same class of published standard —
are reported banned. Same incomplete-exemption bug as WAVE4 #6/#7. Both kept under the script's own
stated policy. **Recommend adding `rfc-editor.org`, `ogp.me`, `w3.org` and `ietf.org` to
`capExemptDomains`.**

## 7. Numbers

Body 1,797 words (whitespace split, FAQs excluded) · 12 FAQs · 8 H2s · 6 outbound · 3 template links
(`/missyou-gf`, `/dedication`, `/templates`) · 5 sibling cross-links · audit 46 passed / 4 failed / 50.
