# Phase 3 — candidate pool, before any SERP was run

**7,678 unique autocomplete suggestions** harvested live from Google across
**19 market/language pairs** (`ac/<geo>-<hl>/autocomplete.csv`, merged into
`autocomplete-merged.csv` by `merge.mjs`). 1,180 calls, 0 failures.

| Market | Suggestions | Market | Suggestions | Market | Suggestions |
|---|---|---|---|---|---|
| us-en | 1,215 | in-en | 1,211 | in-hi | 1,020 |
| es-es | 753 | br-pt | 733 | gb-en | 626 |
| id-id | 527 | fr-fr | 401 | mx-es | 392 |
| nl-nl | 372 | de-de | 370 | it-it | 360 |
| ph-en | 333 | tr-tr | 317 | jp-ja | 302 |
| pl-pl | 279 | ru-ru | 206 | kr-ko | 177 |
| sa-ar | 40 | | | | |

`sa-ar` is thin for a known reason: `suggest.mjs` expands each seed with the Latin
alphabet a–z, which does not expand an Arabic stem. The Arabic rows in the inventory
rest on 40 suggestions, and are banded low because of it, not because demand is low.

## The pattern that runs through every single market

The top non-noise suggestion in **almost every language** is a request to translate
the phrase into another one:

- `miss you in spanish`, `i miss you in korean`, `i miss you in french` (US)
- `te echo de menos en inglés / en catalán / en italiano / en francés` (Spain)
- `sinto sua falta em italiano / em inglês / em espanhol` (Brazil)
- `tu me manques en anglais / espagnol / italien / portugais / arabe` (France)
- `ich vermisse dich auf türkisch / italienisch / spanisch` (Germany)
- `mi manchi in inglese / spagnolo / francese` (Italy)
- `seni özledim ingilizce / kürtçe` (Turkey)
- `kangen kamu bahasa inggris / bahasa jawa / bahasa madura` (Indonesia)
- `miss kita in bisaya / ilocano / waray / bicol` (Philippines)
- `اشتقت اليك بالانجليزي` (Saudi) · `会いたい 英語` (Japan) · `보고싶다 일본어로` (Korea)

People do not only want the words. They want the words **in the language of the person
they are sending them to**. That is a hub-and-spoke content shape, and SubhSandesh
already owns the hub: `/blog/i-miss-you-in-different-languages` is live.

## Noise that had to be gated out

Every market's head term is contaminated by an entity:

- EN — Rolling Stones, Oliver Tree, blink-182, Beyoncé (songs)
- ES — Luis Miguel, Ricky Martin, Intocable, Grupo Firme (songs);
  *Te echo de menos* (Netflix series)
- FR / DE / PL — **a TV series entity, in all three markets.** The harvest returns
  `tu me manques harlan coben`, `tu me manques serie`, `tu me manques distribution`,
  `tu me manques guide des épisodes` (FR); `ich vermisse dich harlan coben`,
  `ich vermisse dich serie`, `ich vermisse dich besetzung` (DE); `tęsknię za tobą
  coben`, `tęsknię za tobą serial`, `tęsknię za tobą obsada`, `tęsknię za tobą ile
  odcinków` (PL). Cast, episode-count and streaming queries sit directly on top of
  the message intent in three markets, and searchers in all three pair the phrase
  with Harlan Coben's name.
  **CORRECTED 2026-09-25, then refined the same day.** This file originally said all
  three were "the same Harlan Coben Netflix series localised" under those titles.
  Two agents checked it independently and the truth is split by market:
  - **German — the claim HOLDS, verified.** de.wikipedia carries an article titled
    exactly `Ich vermisse dich` (Q124795248, no redirect), opening *"Ich vermisse
    dich (Originaltitel: Missing You) … 1. Januar 2025 auf Netflix"*. Coben's series
    genuinely is *Ich vermisse dich* in German.
  - **French — the claim is FALSE.** The Wikipedia API returns no French article for
    Coben's series, and `Tu me manques` (Q67960905) on both fr. and en.wikipedia is a
    **2019 Bolivian drama by Rodrigo Bellott** — a different work. French searchers
    pair the phrase with Coben's name in autocomplete, but the French head term is
    not his show's title, and may carry two distinct entities.
  - **Polish — UNVERIFIED.** Nobody has checked whether `Tęsknię za tobą` is the
    Polish title of the same series. Do not assume it from the German result.
  What was measured throughout is the autocomplete evidence above. The original
  three-market generalisation was written from one market's pattern.
- IT — Pooh, Fausto Leali, Paky, Aka Seven (songs)
- RU — a series again (`скучаю по тебе сериал / смотреть онлайн`)
- KR / JP — BTS, drama OSTs, RADWIMPS

This is why the bare head terms in the inventory carry a weakness count of 2 and sit
in `hard-differentiator-only`: they are not hard because the competition is good, they
are hard because **half the searchers want a TV show**.

## Axes live for this category

1 modifier · 2 audience · 3 format · 4 action · **7 language (the dominant axis here)**
· 8 question. Skipped: **5 occasion** — missing someone has no date, which is why
Gate 0 does not fire anywhere in this run and every row is `evergreen`; **9 year
freshness** — no meaningful year modifiers surfaced; **6 feature** — the product
mechanics (photo, music, password, countdown) are already covered by the 81 live pages.
