# Research brief — kojagari-lakshmi-puja-2027

- Keyword: `kojagari lakshmi puja 2027` (anchor: `lakshmi puja date`), language en
- PLAN angle: Kojagari Lakshmi Puja 2027 date, rituals, why Bengal worships Lakshmi on Purnima not Diwali; verified
- Measured: 2026-10-22. Searches used: 3 of 3 (WebSearch US index ×2, DuckDuckGo HTML kl=in-en ×1).

## Phase 0 — first-party data

No Kojagari, Lakshmi Puja or Diwali usage data exists. Used (verbatim in `factsUsed`):
- Raksha Bandhan 2026 lead time (n = 89): 49.4% built on the festival day — labelled in body as the nearest festival analogue with n = 89.
- 48.3% of shared pages opened on a phone (27,725 of 57,456 views).
- Average views per created page: 11.1.
Fit is weak (puja-date query); the facts are used only where the post talks about greeting someone away from home.

## Phase 1 — SERP (India view via DuckDuckGo kl=in-en, lower confidence)

| # | URL | Fetched | Words | Direct answer | Data / dates | Format | Optimising for |
|---|---|---|---|---|---|---|---|
| 1 | bhaktiras.net/festivals/kojagari-lakshmi-puja/ | 406 (Mod_Security) — snippet | ? | snippet: "is on 14 October" | none visible | article | date + legend + rituals |
| 2 | panchangtime.com/festivals/kojagara-puja/yearly/2027 | yes | ~1,120 incl. nav | top: 14 Oct (Bengaluru) | 2027–2031 dates; says "no single prescribed muhurat" | list + FAQ | tool page, generic observance list |
| 3 | drikpanchang.com/festivals/kojagara/…?year=2027 | yes (Kolkata, Bhubaneswar) | ~1,830 | top: 14 Oct, nishita 10:58–11:47 PM Kolkata | Purnima 6:49 PM 14 Oct – 7:16 PM 15 Oct; moonrise 4:19 PM; nishita-vyapini rule | tool + katha | date/time tool |
| 4 | hinducalculator.com/durga-puja-calendar/2027/ | yes | ~1,880 | Kojagari 14 Oct inside Durga Puja calendar | tithi spans | calendar tool | Durga Puja calendar |
| 5 | drikpanchang.com/nepali/dashain/kojagrat/…?year=2027 | yes (New Delhi default) | ~750 | 14 Oct | Purnima 5:54–6:40 PM (inconsistent with #3) | tool | Nepali Kojagrat |
| 6–10 | drikganita, mpanchang, mypanchang.app, moonastro (holiday), youtube (Bengali) | snippets only | | | | | |

US WebSearch extra: officeholidays.com lists West Bengal "Lakshmi Puja 2027" = 29 Oct (that is Diwali's Lakshmi Puja, wrong for Kojagari); vedpanchang gives Sharad Purnima 15 Oct; bhaktibharat 14 Oct.
Weak of 10: 7 (tool pages, snippet-only, video, holiday aggregator). All top-5 are competitors for this keyword: none cited or linked.

Cannibalisation gate: 0 URLs shared with b1 `lakshmi-puja-muhurat-2027` serp (same domains drikpanchang/mpanchang, different pages). `sharad-purnima-wishes` (2026-10-12) has no recorded serp; its angle is wishes for 2026, and its sources (drik 2026 page, jtfp, PMC7840136, PMC10946667, orissapost, officeholidays) are not reused.

## Phase 2 — gap

- Table stakes: date, Purnima span, nishita time, "ko jagarti" meaning, vigil, alpana, kheer/bhog, Bengal/Odisha/Assam.
- Gap: nobody explains *why* the 14th and not the 15th in plain words (sunrise vs midnight rule) or shows working; no diaspora nishita times; no source for "why Bengal does Lakshmi on Purnima, Kali on Diwali" beyond assertion; no Odia-language detail; one listing site gives 29 Oct.
- Fan-out → H2s: what is it / meaning; why 14 not 15; nishita by city; why Bengal & Odisha on Purnima not Diwali; the Kojagari story; rituals in order; sending a wish; when not to follow these times.
- Angle (batchMeta.angle): only post proving 14 vs 15 Oct with documented computation + diaspora windows + Bengal custom from 1919 primary text and WB holiday notification.

## Phase 3 — sources (all fetched and read)

1. B. A. Gupte, *Hindu Holidays and Ceremonials*, 1919 — https://archive.org/details/cu31924024133922 — full OCR read; p.36 Kali in place of Lakshmi on Diwali in Bengal; pp.102–104 Kojagari Puja story; pp.132–135 Bengal Lakshmi pujas in Chaitra, Paushya. Public-domain primary text / scholarly ethnography.
2. West Bengal Finance (Audit) Dept Notification 4188-F(P2), 27/11/2025 — https://finance.wb.gov.in/writereaddata/4188-F%28P2%29.pdf — PDF fetched (needed legacy TLS renegotiation), text extracted: Lakshmi Puja Sun 25 Oct 2026, additional day Mon 26 Oct; Kali Puja Sun 8 Nov 2026.
3. Monier-Williams, kojāgara, p.312 (sanskrit-lexicon, exempt).
4. Samsad Bengali-English Dictionary via DSAL (exempt): কোজাগর, আলপনা, ঝাঁপি, পাঁচালি, খই, জাগরণ, অলক্ষ্মী, শরা.
5. Purnnachandra Odia Bhashakosha via DSAL (exempt): କୋଜାଗର ପୂର୍ଣ୍ଣିମା p.1782 (କୁଆଁରପୁନିଆଁ, ଚାନ୍ଦଭୋଗ in the note).
Also checked (not cited): en.wiktionary লক্ষ্মী, নাড়ু, পেঁচা, খিচুড়ি; Wikipedia API for sameAs QIDs (Sharada Purnima Q3325016, Lakshmi Puja Q6479912, Lakshmi Q131443, Kali Puja Q3349216, West Bengal Q1356, Odisha Q22048).

Peer-reviewed search (failed to find an OA paper): see `structuralLimitations` for the 13 queries tried.

## Date computation (documented)

Script: Meeus ch.47 lunar longitude (main terms) and ch.25 solar longitude, ΔT ≈ 70 s; tithi boundaries at elongation 168° (Purnima start) and 180° (full moon); NOAA sunrise equation (zenith 90.833°); nishita = middle 1/15 of sunset-to-sunrise.

| Item | Computed | Drik Panchang (cross-check only) |
|---|---|---|
| Purnima start | 14 Oct 2027 18:49 IST | 18:49 |
| Purnima end / full moon | 15 Oct 2027 19:17 IST | 19:16 |
| Nishita Kolkata | 22:58–23:47 | 22:58–23:47 |
| Nishita Bhubaneswar | 23:08–23:57 | 23:08–23:57 |
| Nishita New Delhi | 23:42–00:32 | 23:42–00:32 |
| Nishita Guwahati | 22:44–23:34 | — |
| Dubai / New York / London | 23:40–00:29 / 00:16–01:08 / 00:20–01:13 local, all inside Purnima on night of 14 Oct | — |
| Sydney | Purnima starts 00:19 AEDT 15 Oct; nishita 00:18–01:02 → edge case | — |
| Kojagari 2026 | Purnima 25 Oct 11:56 – 26 Oct 09:41 IST → Sun 25 Oct 2026 (matches WB notification) | — |
| Amavasya end 29 Oct 2027 | 19:06 IST (matches batch USNO figure) | — |
