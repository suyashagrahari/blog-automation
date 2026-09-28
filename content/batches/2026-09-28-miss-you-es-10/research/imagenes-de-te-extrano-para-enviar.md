# Research brief — `imagenes-de-te-extrano-para-enviar`

- **Keyword:** imágenes de te extraño para enviar
- **Market:** mx-es · **Body language:** Spanish · **Band:** 3 (1–3k/mo) · **Plan weak:** 3
- **Axis (WAVE5-PLAN):** FORMAT — the image. Six siblings own the recipients and the channel.

---

## Phase 1 — SERP, measured

### Route log (every route named, per BRIEF §3)

| # | Route | Result |
|---|---|---|
| 1 | `serp-ddg.mjs "clima ciudad de mexico" --region mx-es` (**CONTROL**, known demand) | `(no results parsed)` — query line echoed **correctly**, so not the arg-order bug |
| 2 | `serp-ddg.mjs "imágenes de te extraño para enviar" --region mx-es` | `(no results parsed)` |
| 3 | Google real browser, `gl=mx&hl=es&pws=0&num=20` — **run 1** | **AUTHENTICATED, USED** |
| 4 | Google real browser, same URL — **run 2** | **CONTENTION — DISCARDED** |
| 5 | Google real browser, `"te extraño" imágenes para enviar`, `gl=mx&hl=es&pws=0` — **run 3** | **AUTHENTICATED, corroborates run 1** |

**The control is the load-bearing part.** A known-demand query returned the same
"(no results parsed)" as my keyword, with the `query:` line echoing correctly. That is
laneWideFinding [20] exactly: DDG is IP-blocked, and an empty block is indistinguishable
from an empty SERP without the control. No DDG result was recorded.

Harness `WebSearch` was **not** used: it is us-en only and this is an mx-es row. Saying so
rather than substituting silently, per the task prompt and BRIEF §3.

### Browser contention — TWO instances hit in this row alone

1. **Navigate-response variant (BRIEF §14 variant a).** The very first
   `browser_navigate` to my Google URL returned
   `url: …q=te+extraño+en+silencio+significado`, `title: "te extraño en silencio
   significado - Buscar con Google"`, `status: ok` — the **`te-extrano-en-silencio-significado`
   sibling row's** query, in the navigate response itself. Discarded without reading.
2. **Correct-response / corrupt-content variant.** Run 2's navigate returned **my** URL and
   **my** title. The scrape that followed returned the *same sibling's* SERP: H3s reading
   "Te extraño en silencio Grupo Firme — letra y significado", hosts
   `tiktok/brainly.lat/reddit`. Caught by content self-authentication, discarded, re-run.

That is a **fifth and sixth** confirmed instance, and instance 1 is a fresh reproduction of
the variant BRIEF §14 had only one data point for. Title and URL in a navigate response are
worth nothing.

**Authentication assertions used on every recorded read** — markers that MUST be present
(`imágenes de te extraño para enviar` / `"te extraño" imágenes para enviar` in the AI-Mode
heading; Spanish result titles) and markers that MUST be absent (`en silencio`,
`Grupo Firme`, `letra y significado`, any non-Spanish row marker).

### The SERP (Google, gl=mx&hl=es&pws=0, run 1, 8 results actually seen)

| # | Host | Page type | Weak? |
|---|---|---|---|
| — | google AI Mode | "Respuesta del Modo IA" present for my exact query | n/a |
| 1 | `es/mx/ar/cl/fr.pinterest.com` (several ccTLDs) | Pin boards, user-generated | weak |
| 2 | `clubimagenes.com` | image listicle, "13 imágenes de te extraño…" | weak |
| 3 | `facebookamor.com` | image listicle | weak |
| 4 | `imagenescool.com` | image listicle | weak |
| 5 | `joliecarte.com` | greeting-card generator | weak |
| 6 | `gifsdeamor.blogspot.com` | Blogspot GIF gallery | weak |

Run 3 (variant query) adds `correomagico.com`, `adobe.com`, `shutterstock.com`, `tiktok`,
`instagram` — stock-photo and social, still no editorial authority.

**Weak count: 8 of the 8 results I actually saw.** Counting only what I saw, per BRIEF §3.
The plan predicted 3 weak; measured it is materially weaker than that — consistent with
WAVE5 laneWideFinding [1], which found the Spanish listicle tier weaker than the
German/Brazilian tier the D-tier abort framing came from. **No abort. Gate 4 passes easily.**

**The catch Gate 5 already flagged, and it is real:** the intent is genuinely
image-gallery. Pinterest at the top is the honest signal. We cannot ship a gallery, so
ranking is not the same as being useful, and the page says so out loud.

---

## Phase 2 — Gap

**Table stakes:** lines of text to pair with a picture; some notion of "for whom".

**What none of them do** — and this is the whole page: not one result treats the image as a
*file with properties*. Nothing about ratio and crop, nothing about the text baked into the
pixels, nothing about accents in a filename or a link, nothing about what the recipient
actually receives when the image does not load.

**Angle:** the only page on this SERP that treats a «te extraño» image as a file that has to
survive a send — measured crop ratios, a normative accessibility standard, a first-hand
Unicode measurement, and a link-preview defect measured on our own product today.

---

## Phase 3 — Sources (5)

| # | Source | What it carries | Subject test | Peer-reviewed OA |
|---|---|---|---|---|
| 1 | **Visual Communication** 24(4), 2024-03-08, PMC12588420, doi 10.1177/14703572231213936 | 90 interviews, 21 romantic + 9 friendship dyads, 60 adults 18–91, M=36, Switzerland. "the polysemic nature of an image created fertile ground for conflict"; "WhatsApp was perceived as unproblematic, while sharing on SNSs was to be avoided" | **PASS** — images in close relationships | **YES**, read in full via `fullTextXML` |
| 2 | **W3C WCAG 2.2**, REC 2024-12-12 | SC 1.4.5 Images of Text (AA) verbatim; SC 1.1.1 Non-text Content (A) verbatim | PASS — images of text | normative standard |
| 3 | **ogp.me** (Open Graph protocol) | `og:locale` "Default is `en_US`"; `og:image:alt` "A description of what is in the image (**not a caption**)" | PASS — link previews | spec |
| 4 | **Unicode UAX #15**, Revision 58, 2026-08-12 | NFC/NFD canonical equivalence | PASS — the ñ | standard (cap-exempt host) |
| 5 | **RFC 3986** §2.5, Jan 2005 | "Local names, such as file system names, are stored with a local character encoding… the URI producer will transform the local encoding… into the restricted set of URI characters" | PASS — accents in links | standard |

**Journal named for the hand-count the cap actually needs: _Visual Communication_.** Not
used anywhere else in this batch or the sibling batch. `capcheck.mjs` and
`journalcheck.mjs` both clean at time of writing.

**No competitor is cited or linked.** The ranking pages were *measured* (below), never cited.

---

## First-hand measurements (original, reproducible)

1. **`/missyou-gf` link preview — verified, and worse than the orchestrator's claim.**
   The claim handed to me was `og:locale=en_US` + English `og:title`/`og:description`.
   **Confirmed**, and `<html lang="en">` too. **New finding:** the declared
   `og:image` — `https://subhsandesh.in/assets/missyou-gf/og-missyou-gf.png` — returns
   **HTTP 404** (`text/html`, 468,708 bytes), including to a `facebookexternalhit` UA and on
   both apex and `www`. **Controls on the same host:** `/favicon.ico` → 200 `image/x-icon`;
   `/og-image.png` → 200 `image/png`. So the server serves images; that asset is missing.
   A Spanish sender's link arrives with an English title, an English description **and no
   preview image**.
2. **Alt text does not live inside the file.** `/og-image.png` (1370×784) walked chunk by
   chunk: **zero `tEXt`/`iTXt`/`zTXt` chunks**. The description declared in HTML is not in
   the bytes the recipient receives.
3. **NFC vs NFD, computed.** `ñ` NFC = U+00F1 = `c3 b1` (1 char); NFD = U+006E U+0303 =
   `6e cc 83` (2 chars); not equal as strings. `te-extraño.jpg` percent-encodes to
   `te-extra%C3%B1o.jpg` or `te-extran%CC%83o.jpg` depending on form.
4. **APFS measured, and it overturns the usual claim.** Wrote a file named in NFC; the
   filesystem returned the name at **15 bytes (NFC preserved)**, and **both** NFC and NFD
   lookups found it. So modern macOS is normalization-*insensitive and form-preserving*, not
   the NFD-converting HFS+ behaviour usually repeated. The breakage is in the URL, not the disk.
5. **Alt-text coverage on the ranking pages — my own expectation overturned.** 4 reachable
   ranking pages, **94 `<img>` elements: 72 non-empty `alt` (76.6%)**, 20 empty, 2 with no
   attribute. I expected the incumbents to be failing at alt text. **They are not.** The
   gap is not that their pages lack alt text — it is that alt text is an HTML attribute that
   stays on the page and never travels with the downloaded JPG.

---

## Phase 4–5 — Build

- `templateUrls`: `/missyou-gf` (mandatory) + `/photo-puzzle` (the `oneOfLinks` alternative,
  chosen *on axis*: the reader wants to send a picture, and this is the one that makes a
  photo something the recipient works through rather than screenshots and leaves).
- `categorySlug`: `miss-you-across-miles` — confirmed live, 1 of 10.
- Cross-links per the contract: hub `frases-de-te-extrano`, channel
  `mensajes-de-te-extrano-para-whatsapp`, plus `te-extrano-mucho-frases-para-el`,
  `frases-de-te-extrano-para-mi-novia`, `frases-de-te-extrano-para-una-amiga`. No
  recipient-specific lines written here.
- Slug check: Strapi 200, `total=0` — free, no self-collision.
- Price guard: no price/cost/subscription/`gratis`/`gratuito` token anywhere. Note the SERP
  itself is full of "Tarjeta gratis" titles; that word is deliberately absent from this post.
