# Research brief — navratri invitation card online free with photo

- Batch: `2026-10-12-navratri-b3` · slug `navratri-invitation-card-with-photo` · bodyLanguage `en`
- Also covers: "navratri invitation card online free with name", "navratri invitation card edit online", "garba invitation card with photo" (autocomplete demand 3 each)
- Written 2026-10-12. WebSearch calls used: 2 of 2 (one SERP, one to locate an open copy of Such et al. 2017).

## Split from siblings (do not cannibalise)

`dandiya-invitation-card-online-free` (b1) compares the TOOLS (Adobe Express, Canva, Kapwing, WhatsApp text, interactive link) on watermark, export and RSVP; `navratri-wishes-with-name` (b1) covers name/photo on GREETINGS plus photo privacy (Exif, WhatsApp chat vs document mode, DPDP); `garba-invitation-video` (b2) covers video length, platform video limits and a shot list. **This page is only about the photo and the name on a still invitation card: which photo, which crop and pixel size, where the face and name sit, how Devanagari/Gujarati names render, which fonts are licensed for it, whose permission you need, and an edit checklist.** No tool comparison, no Exif/DPDP section; the WhatsApp image-vs-document point is a one-line prose pointer to the wishes-with-name topic, with no `/blog/` link (brief §8).

## Phase 0 — first-party data

facts.md read directly (no `npm run facts`). Relevant lines:

- 48.3% of shared pages opened on a phone (27,725 of 57,456) — decides the card is designed for a phone screen first. In first 150 words.
- 38.5% of creators password-protect (2,000 of 5,199) — bears on putting other people's faces on a shared card. In first 150 words.
- Raksha Bandhan 2026 lead time, n=89: 49.4% built on the festival day, median 0 days — used as nearest analogue with both mandatory disclosures (different festival, n=89 small) in body prose; justifies a checklist that fits a same-day edit.
- Median first-save-to-last-edit gap 2.5 hours on /apology-dashboard, n=1,396 — "edit online" sub-intent; labelled as an apology-dashboard sample.
- No dandiya-partner or Navratri usage data exists; none stated. Template features taken only from `template-spec.md` (up to six photos, 1080×1920 PNG Dandiya Pass with your photo, nine lines, password, edit and republish, English UI, one-to-one only).

Gate: 4 relevant facts, 2 in the opening. Passes, though the facts are platform-wide, not photo-specific (no data on what photos creators upload).

## Phase 1 — SERP (US-served (WebSearch), 2026-10-12)

| # | URL (US-served (WebSearch)) | Type | Fetched? | Words / structure | Direct answer | Data + date | Weak? |
|---|---|---|---|---|---|---|---|
| 1 | cardinvitationbolton.onrender.com/posts/39-free-navratri-invitation-card-pictures | Scraped image-gallery mirror | Yes | ~600 words of auto-generated captions under hotlinked images (yoovite, eventgroove, zee5, 123greetings, desievite); dated 2020-10-28 | None | None | Weak (scraped, 2020) |
| 2 | adobe.com/in/express/create/invitation/navratri | Tool landing page (competitor, invitation builder) | HTTP 403 to fetcher; WebSearch summary only | Template gallery + steps | "Pick a template, add photo" | Says get permission from anyone visible if promoting as a business (per WebSearch summary, not read) | Strong-ish (tool, not a guide) |
| 3 | msoid.icmbio.gov.br/templates/navratri-invitation-template.html (+4 more msoid URLs at 4, 6, 7, 8) | Scraped mirror on a hijacked .gov.br host | DNS failure (ENOTFOUND) | — | — | — | Weak ×5 (scraped mirror; known incumbent spam) |
| 4 | smartpuja.com/blog/navratri-invitation-card ("Ideas 2023") | Puja-booking blog | Yes — URL now redirects to the SmartPuja services homepage; the 2023 article is gone | Services listing | None | None | Weak (dead, 2023) |
| 5 | connect.usama.dev/blogs/34136/Free-Hindi-Invitation-Card-Maker-Online-Crafty-Art | Spam repost of a Crafty Art promo | Yes — returns only a WhatsApp profile stub | — | — | — | Weak (spam) |

Corroboration: `content/keywords/2026-10-12-navratri-garba-dandiya/serps.md` row "navratri invitation card online free digital" lists adobe.com/in express (tool), canva, desievite and scraped .gov.br mirrors — same pattern.

**Weak count in top 9 returned: 8** (onrender, msoid ×5, smartpuja dead, usama.dev spam). Only Adobe Express is a real page, and it is a builder, not a guide to the photo. Gate 4 passes.

Table stakes: a template or builder, "add your photo", date/time/venue fields. Nobody gives pixel sizes, crop maths, text-safe zones, Indic name rendering, font licences, or consent of people pictured.

## Phase 2 — gap and angle

Gaps: (1) pixel size and crop per output (1:1, 4:5, 9:16) from the platform's own spec; (2) safe zones for face and name; (3) Devanagari/Gujarati name rendering failures and the fix; (4) font licence for a name set in a Hindi/Gujarati font; (5) whose permission is needed for couple/family photos; (6) group vs one-to-one.

Fan-out sub-queries → H2s: what makes a photo card different; which size/crop; where face and name go; couple vs family vs single photo; how to write the name in Hindi/Gujarati; whose permission; formats compared; edit checklist; when the one-to-one card is wrong.

Angle: *Wins by being the only post that gives pixel-exact crops and text-safe zones for a Navratri photo card from Meta's own spec pages, plus Unicode's Devanagari rendering rules and Noto's font licence for the name, grounded in SubhSandesh's 48.3% phone-open and 38.5% password rates.*

## Phase 3 — sources (all fetched 2026-10-12)

| Source | What it supports | Read | Published |
|---|---|---|---|
| Romero-Ortells, Perea, Gutierrez-Sigut, "Subtitle Engagement Varies with Audio–Subtitle Language–Script Pairing", *Vision* (MDPI), via Europe PMC PMC13307662 | Peer-reviewed, OA (CC BY). 30 Hindi–English bilinguals (EMI): gaze split evenly between faces and English subtitles, but more dwell on faces than on Hindi subtitles | Full text (JATS XML) | 2026-06-22 |
| Such, Porter, Preibusch, Joinson, "Photo privacy conflicts in social media: a large-scale empirical study", CHI 2017 — University of Bath research portal | 496 uploaders + 537 co-owners surveyed; all-or-nothing conflict resolution dominates | **Abstract only** (ACM full text 403; KCL dataset page 404) | 2017 (CHI 2017, May) |
| Meta Ads Guide — Image, Instagram Stories | 9:16, 1440×2560 recommended; leave ~14% top, 35% bottom, 6% sides free of text; min width 500 px; 30 MB | Full page | undated |
| Meta Ads Guide — Image, Instagram Feed | 4:5, 1440×1800 recommended; aspect 400×500 to 191×100; min width 500 px | Full page | undated |
| Noto Sans Devanagari OFL.txt (github notofonts/devanagari) | Noto Devanagari is SIL OFL 1.1; licence requirement does not apply to documents created with the font; may not be sold by itself. Gujarati repo OFL.txt identical (also fetched) | Full | Copyright 2022 |
| Unicode Standard 16.0, Chapter 12 (§12.1.2, §12.1.3) | Renderer must reorder the i-matra to the left; fallback to half-forms then visible virama when conjunct glyph missing | Relevant sections | 2024 (Unicode 16.0) |

Also read, not cited: SIL OFL-FAQ 1.1-update7 (Nov 2023) Q1.1 (any design work, no extra permission) — kept out to stay at 6 links; Noto Gujarati OFL.txt.

Searched and rejected: "faces engage us" (Bakhshi et al. CHI 2014) — closed access, author host dead; Dobres et al. 2016 glance legibility (Ergonomics) — Taylor & Francis, at publisher cap; WhatsApp HD-photo FAQ — URLs 404 to fetcher; Instagram help 1631821640426723 — JS shell, no content. findpapers queries: "faces in photos engagement Instagram", "photo privacy conflicts social media multi-party consent", "Devanagari typeface legibility reading", "Indic script rendering complex text layout font", "sharing photos of others without permission", "faces attract attention photographs eye movements"; Europe PMC queries on text legibility, Devanagari reading, selfie consent.

Caps: Europe PMC and unicode.org exempt; facebook.com, researchportal.bath.ac.uk, raw.githubusercontent.com new to b3 at time of writing. None in the BANNED list.

## Brief claims checked

- template-spec "1080×1920 pass with your photo" — consistent with spec; also matches Meta's 9:16 ratio (Meta recommends 1440×2560 for ads; 1080×1920 is the same ratio).
- Prompt said the SERP is "likely tool SERP": partly true — one tool (Adobe Express) and eight scraped/dead/spam pages; it is a spam SERP more than a tool SERP.
