# Research brief — `i miss you in sinhala`

Batch `2026-09-25-miss-you-30`, wave 2, row 15. Slug `i-miss-you-in-sinhala`
(checked free in Strapi: `filters[slug][$eq]` returns `total: 0`).

## Phase 1 — SERP

Source: `SERPS-WAVE2.md`, "## i miss you in sinhala" (DuckDuckGo `kl=in-en`, 2026-09-25).
Eight results. Six were fetched; `howtosayguide.com` refused the connection and
`translate.google.com` is a tool, not a page.

| # | Domain | Words | Sinhala strings printed | Dictionary or corpus cited | Register / diglossia | What it optimises for |
|---|---|---|---|---|---|---|
| 1 | talkpal.ai | 864 | මම ඔයාට හුගාක් අමතකයි, මට ඔයාගේ අමතකයි, මට ඔයා හුගාක් අහිමි වෙලා | no | none | AI language-app signup; H2s are Alternative Phrases / Pronunciation Guide / Cultural Nuances / Common Mistakes |
| 2 | howtosayguide.com | — | — | — | — | not fetchable (connection refused) |
| 3 | indifferentlanguages.com | 374 | ඔයාව, දැනෙනවා | mentions the word "dictionary" | none | a translation stub plus a language index |
| 4 | linguashop.com | 394 | none at all | no | none | course sales; the page prints no Sinhala |
| 5 | answers.com | 330 | none at all | no | none | a legacy Q&A stub |
| 6 | mymemory.translated.net | 1,113 | මට ඔයාව මතක් වෙනවා, මට ඔයා නැතුව පාලුයි, මට ඔබ සියල්ලන්ම මග හැරී ඇත, … | no (it is itself a translation memory) | none | machine + human translation memory dump, unranked |
| 7 | italki.com | 388 | ඔබ නැතුව මට පාලුයි, ඔයා නැතුව පාලුයි මට, මට ඔයාව මතක් වෙනවා | no | none | a 2014-era forum question answered by native speakers |

**Measured, not assumed:** of the six pages fetched, **zero** mention diglossia,
colloquial-versus-literary register, or any spoken/written split, and only one
references a dictionary at all (and names none).

**The headline finding.** The page ranking first offers
**මම ඔයාට හුගාක් අමතකයි** as "the most common way to say I miss you in Sinhala"
and glosses අමතකයි as "remember". Carter 1924 has **අ·මතකය** at page 54 —
"forgetting, forgetfulness, oblivion" — that is මතක, "remembrance", with the
privative අ-. The top result's headline phrase is built on the word for forgetting.

**What the native-speaker sources actually contain.** The forum thread (7) and the
translation memory (6) independently both give මට ඔයාව මතක් වෙනවා and
ඔයා/ඔබ නැතුව මට පාලුයි. Those are the two forms this post leads with, arrived at
from the dictionary first and corroborated against these afterwards.

## Phase 2 — gap

Nobody on this SERP checks a dictionary. The gap is not more phrases; it is
**correctness with a citation**, plus the three things the format hides:

1. Sinhala has **no verb for missing a person**. A full-text search of Carter 1924
   for "miss" returns 4 entries, all about hitting a target; "yearn" returns 0.
2. **Register is compulsory.** You cannot say it without choosing among
   ඔයා / ඔබ / නුඹ / තෝ, and one of those is derogatory.
3. **Script is a decision.** Romanised Sinhala dominates social media; Unicode is
   the formal context. The choice changes what a machine in the middle can do.

Fan-out sub-queries the H2s map to: *does Sinhala have a word for miss* ·
*what does මතක් වෙනවා mean* · *මතක vs අමතක* · *ඔයා or ඔබ* ·
*spoken vs written Sinhala* · *Sinhala script or romanised* ·
*is Sinhala the same as Tamil* · *how long should the message be*.

## Phase 3 — instruments and sources

**Reference instruments (cap-exempt in `verify.config.json`), each fetched:**

- **Carter, *A Sinhalese-English Dictionary*, Colombo 1924**, via DSAL
  (`dsal.uchicago.edu/dictionaries/carter/`, endpoint `carter_query.py`).
  **BRIEF CORRECTION: BRIEF.md section 3 says "Sinhala — Clough".
  `dsal.uchicago.edu/dictionaries/clough/` returns 404.** DSAL's Sinhala dictionary
  is Carter. Clough 1892 exists only as archive.org scans
  (`sinhaleseenglish00clourich`) whose Sinhala-script OCR is unreliable. Wiktionary's
  own Sinhala reference template is `R:si:Carter`, so the two instruments agree.
- **English Wiktionary.** Note the L2 header is `==Sinhalese==`, not `==Sinhala==`.
  Coverage is thin: මතක, ඔයා, ඔබ, ආදරය, මම, තෝ, නුඹ have entries;
  මතක්, නැති, මිස්, සිහි, අඩු, මතකය, ඔයාව, අමතක all 404.
  The `I miss you` phrasebook entry lists **69 languages and Sinhala is not one**.
- **Tatoeba.** The Sinhala set is **75 sentences**, and not one is about missing or
  remembering a person. It does attest the dative frame (2968421, "I hear you") and
  the absence of subject agreement in the spoken register (13213063 vs 13213137,
  identical බොනවා for "I" and for "Tom").

**Research sources (capped), both checked against the domain counts in `blogs/`:**

- arXiv 2601.14958, Rajapakse & Weerasinghe 2026, script duality and a measured
  >300x median degradation Unicode → romanised across 24 models. **Preprint,
  abstract only; PDF not parsed.** arxiv.org was at 0 posts in this batch.
- Shashikala 2021, *Open Journal of Modern Linguistics* 11:158–173,
  doi:10.4236/ojml.2021.112014. Peer-reviewed, open access (confirmed via
  Unpaywall). n = 30 urban Sinhala-English bilinguals; insertion is the dominant
  code-mixing strategy; the mixed code is preferred for neutralising attitude.
  Full HTML read.

**Considered and dropped:** Gair, "Sinhala Diglossia Revisited, or Diglossia Dies
Hard" (OUP 1998) — Unpaywall reports no OA location, so the register claim rests on
the corpus instead. A Frontiers in Public Health paper on Sri Lankan transnational
grandparent households (PMC13395645, n = 166) — genuinely on-subject for the reader,
dropped to keep `sources` at six and the post's evidence on the language.

**Lines cut, with the reason:**

- **මම ඔයාට හුගාක් අමතකයි** — built on අමතක, "forgetting" (Carter p. 54).
  Appears in the post only as the error it is.
- **මට ඔයාගේ අඩුව දැනෙනවා** — Carter has අඩු (p. 15) and දැනෙනවා (p. 283) but not
  the compound අඩුව, so the phrase could not be verified against the instrument.
- **A literary first-person verb in -මි** — no attested literary sentence for this
  meaning could be fetched, so the post states that the written register marks
  person without printing an example it cannot back.
- **මට ඔයාව මතකයි / මං ඔයාට ආදරෙයි**, named in the task prompt as "the standard
  rendering" — they are not two renderings of one thing, and ආදරය is Carter p. 90,
  "love, affection, regard". Neither is used.
- Spelling: Carter's headword is **පාළු** (retroflex ළ); the circulating form is
  **පාලු**. The post uses the dictionary spelling and names the variant.

## Phase 0 — first-party

`facts-snapshot.md`, miss-you segment, measured 2026-09-25. Nine lines used, all
byte-verbatim. The three mandatory caveats are carried in body prose, not only here:
n = 214 over two months (template live 2026-07-28), `viewCount` is page views rather
than unique visitors, and the city field is a picker with a default. The post also
discloses that the database records which template was opened and never who received
it — which matters here, because no first-party figure in this post is
Sinhala-specific.
