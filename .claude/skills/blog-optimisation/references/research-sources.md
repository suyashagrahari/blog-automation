# Research sources — topical, open-access, never repeated

Read this during Phase 3, before searching for anything.

This file exists because of a real failure. In the 2026-08-13 rakhi batch, nine
posts were written and **seven contained no research paper at all**. The same three
domains carried them: `pib.gov.in` in 6 of 9, `en.wikipedia.org` in 6 of 9,
`drikpanchang.com` in 5 of 9. Every post about siblings, festivals, poetry and
family distance was propped up by telecom-subscriber counts and migration
percentages — figures that fit any article and are *about* none of them.

Nothing in the skill was broken. The old Phase 3 ranked government statistics
first, never required a peer-reviewed source, and never said a source had to be
about the post's actual subject. The agents complied. That is what this file fixes.

---

## The topical test — the one that was missing

The old test was "would this fact belong in the post even with no link?" It is too
weak: a subscriber count "belongs" in a long-distance post, so it passed.

Replace it with two tests, and a source must pass **both**:

1. **Subject test.** Is this source *about* the thing the post is about — siblings,
   ritual, festivals, family distance, the language, the platform behaviour? Not
   "about India", not "about the internet", not "about the month it happens in".
2. **Swap test.** Could this exact source sit, unchanged, in a post about a
   completely different keyword in this batch? If yes, it is filler. A 1,294 million
   wireless-subscriber figure works equally well in a rakhi post, a Diwali post and
   an anniversary post — which is precisely why it is worthless in all three.

A source that passes the swap test but fails the subject test is a *context* source.
**At most one per post**, and never counted toward the research requirement.

---

## What every post must now carry

| Requirement | Rule |
|---|---|
| Total sources | 4–6, as before |
| **Topical research** | **At least 2** sources that pass the subject test, of which **at least 1 is peer-reviewed or a scholarly work** in a field genuinely relevant to the keyword |
| Context statistics | At most 1 (PIB, TRAI, Census, MEA and similar) |
| Wikipedia | 0–2, entity disambiguation only, never counted as research |
| Date/calendar reference | At most 1, and it is a fact-check, not a source |
| Competitors | Zero. See `competitors.md` |

If a post cannot find one genuinely topical scholarly source, **say so in the audit**
and name what you searched. Do not pad the count with another government statistic.
An honest "no relevant research found for this angle" is a real finding — it usually
means the angle is about product mechanics rather than a studied phenomenon, which
is fine, and the post should lean on first-party data instead.

---

## Never the same source twice in a batch

**A source URL may appear in at most 2 of the posts in a batch, and a domain in at
most 3.** Before adding a source, check the sibling files already written in
`content/batches/<batchId>/blogs/` and count.

The reason is not tidiness. Nine posts citing the same PIB release look, to a
retrieval system, like nine pages from one thin content farm. Distinct topical
sourcing is a large part of what makes a set of pages read as genuine coverage of a
subject rather than a spun template.

The date/festival reference is the one permitted exception — every post in a
festival batch may verify the same date, because that is a fact-check rather than a
citation. Keep it out of `citation` where it is not load-bearing.

---

## Where to find open-access research

Search these directly. All are free to read, and all let the reader verify the claim
without hitting a paywall — which is the editorial reason to prefer them, quite apart
from licensing.

| Source | What it is | Good for |
|---|---|---|
| **PubMed Central (PMC)** | Free full-text biomedical + behavioural science | sibling relationships, family psychology, wellbeing, loneliness |
| **DOAJ** | Directory of Open Access Journals, ~20k journals | anything; the best general starting point |
| **PLOS ONE** | Fully open access, CC BY | social science, behaviour, large-n studies |
| **Frontiers in Psychology** | Open access, CC BY | family bonds, ritual, emotion, social connection |
| **arXiv** | Preprints, free | computational linguistics, code-switching, HCI, social media |
| **SSRN** | Free-to-read working papers | economics of gifting, consumer behaviour, migration |
| **CORE** (core.ac.uk) | Aggregates 200M+ open-access papers | full-text search across repositories |
| **OpenAlex** / **Semantic Scholar** | Open scholarly metadata + OA links | finding the open version of a paywalled paper |
| **Shodhganga** | Indian PhD theses, free | Indian kinship, festivals, regional language, folklore |
| **eGyanKosh** / **NCERT** / **IGNOU** | Indian academic course material, free | Indian sociology and kinship, when journals fail |
| **JSTOR Open** / **Project MUSE Open** | Open subsets | anthropology, area studies, literature |

**Practical search pattern:** put the *phenomenon* into the query, not the keyword.
For "raksha bandhan wishes for long distance brother", search
`sibling relationship maintenance long distance study`, not `raksha bandhan`.
Festivals are under-studied; the behaviours around them are not.

---

## Copyright, in plain terms

- **Citing a finding and linking to it is always fine.** Facts and data are not
  copyrightable; referring to a study, stating its finding in your own words, and
  linking to it is normal scholarly practice, not infringement. This is true even
  for paywalled work.
- **Reproducing the work is different.** Do not paste figures, charts, tables, or
  substantial passages of text. A short quoted sentence with attribution is normal;
  a reproduced table is not.
- **CC BY / CC BY-SA / CC0 work may be reused with attribution.** Check the licence
  on the article page — open-access journals state it explicitly, usually near the
  abstract or in the footer. CC BY-NC forbids commercial use, and a company blog is
  commercial, so do not reuse NC-licensed material even with attribution; cite and
  link it instead.
- **Never reproduce an image or figure** into the post. Cover images are handled
  separately in the studio.
- **Prefer open access so the reader can check you.** A citation the reader cannot
  open is a citation they must take on trust, which is the opposite of the point.

If a paper is paywalled and load-bearing, look for the open version first
(OpenAlex, CORE, the author's institutional page, arXiv). If only an abstract is
readable, you may cite **only what the abstract actually says**, and the audit must
record that the full text was not read. Do not infer beyond the abstract.

---

## Mapping keyword types to research fields

Use this to know what to search for. It is a starting point, not a limit.

| Keyword type | Field to search | Example phenomenon |
|---|---|---|
| Sibling wishes, brother/sister, cousin | developmental & family psychology | sibling closeness across the lifespan, birth-order effects, adult sibling contact frequency |
| Long distance, abroad, different cities | migration studies, transnational families | relationship maintenance at distance, "polymedia", diaspora family ties |
| Festival, ritual, muhurat, tradition | anthropology of ritual, religious studies | ritual and social cohesion, calendrical rites, kinship obligation |
| WhatsApp, sending, sharing, messaging | computer-mediated communication, HCI | mediated intimacy, forwarding behaviour, message reception |
| Instagram, captions, status, social post | social media studies, HCI | self-presentation, audience awareness, caption/engagement studies |
| Shayari, quotes, poetry, Hindi/Marathi | linguistics, literary studies, sociolinguistics | ghazal prosody, code-switching, script choice and identity |
| Gift, gift ideas, what to give | consumer research, economic anthropology | gift-giving reciprocity, symbolic value over monetary value |
| Apology, sorry, reconciliation | social psychology | apology components, forgiveness research |

---

## The audit item

`publish-checklist.md` now carries these. A post that cannot satisfy them records a
failure with the search terms tried — never a silently substituted statistic.

- At least 2 sources pass the subject test
- At least 1 is peer-reviewed or scholarly
- At most 1 generic context statistic
- No source URL used in more than 2 posts in this batch; no domain in more than 3
- Every paywalled citation records that only the abstract was read
