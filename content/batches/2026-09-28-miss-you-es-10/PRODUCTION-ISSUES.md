# Production defects found while writing this batch

These are live-site issues, not batch issues. Nothing here has been changed — they need a
decision and a fix outside the content pipeline. All were verified first-hand.

## 1. `/missyou-gf` declares an `og:image` that 404s

Verified 2026-09-28 by the orchestrator, fetching as `facebookexternalhit/1.1`:

```
page                https://subhsandesh.in/missyou-gf          200
og:image            https://subhsandesh.in/assets/missyou-gf/og-missyou-gf.png
og:image (apex)     404
og:image (www)      404
control /favicon.ico                                            200
control /og-image.png                                           200
```

The controls on the same host return 200, so this is the one asset, not a serving problem.

**Effect:** every shared link to that page — WhatsApp, Instagram, Facebook, iMessage —
arrives with **no preview image**.

## 2. The same page is English-only in its metadata

```
<html lang="en">
og:locale        en_US
og:title         💭 Miss You Page for Your Girlfriend — Send a Love Letter
og:description   Send your girlfriend a sealed 'I miss you' letter ... Free, in 2 minutes.
```

`/missyou-gf` is the mandatory template link on every non-English post in both miss-you
batches — Spanish, Portuguese, German, Turkish, Japanese, Korean, Tamil, Polish, Dutch,
Russian, Italian, Indonesian. A reader sending a Spanish card gets an **English link
preview**, with **no image** (defect 1). Four independent rows reproduced this and
disclosed it in body prose; one recommended `/streak` instead.

Two further consequences:
- The `og:title` says **"for Your Girlfriend"**. It is the mandatory link on rows whose
  recipient is a male partner, a platonic female friend, and a **deceased father**. Rows
  have been writing prose to explain the mismatch.
- The `og:description` carries a cost claim ("Free, in 2 minutes"). Every post in these
  batches is held to a no-cost-claim rule enforced by `pricecheck-intl.mjs` in 13
  languages; one row deliberately declined to quote this line for that reason.

## 3. `og:image:alt` and image text

Our own share PNG was walked chunk-by-chunk by a row: **zero `tEXt`/`iTXt`/`zTXt` chunks**,
which is the proof that alt text never travels with an image file. Relevant to any plan to
ship image assets for the Spanish image-intent rows.

## Suggested order

1. Ship the missing `og-missyou-gf.png` (or point `og:image` at the existing `/og-image.png`).
2. Serve `og:locale`, `og:title`, `og:description` and `<html lang>` per the visitor's
   language, or at minimum stop claiming `en_US` on pages linked from non-English content.
3. Revisit the "for Your Girlfriend" title, or give non-romantic rows a different template.
