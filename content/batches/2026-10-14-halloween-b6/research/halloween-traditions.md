# Research brief — halloween traditions (absorbs: halloween customs)

Batch 2026-10-14-halloween-b6, PLAN rank 268, slug `halloween-traditions`. Written 2026-10-14.

## Phase 1 — SERP (2 searches total)

- Search 1, WebSearch (US index): a thin, low-authority list (blog.duolingo.com, studentnews.nisd.net, vam.ac.uk, two FHSU student-project URLs, binus.ac.id student page, theblondeabroad, mondaymandala, spectrumlocalnews). Not a normal Google SERP; used only as a weak-signal check.
- Search 2, DuckDuckGo HTML (lower confidence), top 10:
  1. britannica.com/topic/Halloween — 403 to fetch; judged from snippet only
  2. kinghalloween.com/halloween-traditions — WEAK (niche retailer blog)
  3. worldhistory.org ten-halloween-facts-and-traditions
  4. mondaymandala.com/halloween-traditions — WEAK (43-item undated list blog)
  5. en.wikipedia.org/wiki/Halloween
  6. almanac.com/origins-halloween-traditions
  7. history.com/articles/history-of-halloween
  8. history.com/topics/halloween
  9. today.com history-of-halloween
  10. usghostadventures.com — WEAK (ghost-tour operator blog)
- Weak count: **3 of 10** (PLAN.json says 6). No AI Overview visible via DDG.
- Head-term note: "halloween traditions" is a 2-word head term owned by Britannica, History.com and Wikipedia. The post targets the long-tail answers inside it ("when did trick-or-treating start", "oldest halloween tradition", "halloween traditions that died out").

| Page | Words (approx.) | Structure | Direct answer | Dates / data | Format | Optimising for |
|---|---|---|---|---|---|---|
| britannica.com | n/a (403) | Encyclopedia article | Snippet: definition first | Unknown | Encyclopedic | Definition + history |
| kinghalloween.com | ~6,000 | 25 H2 traditions in 4 groups (classic, newer, disappearing, love) | After intro | Few (1920s, 1950s) | No table, no FAQ | Breadth list |
| worldhistory.org | ~4,150 | 10 H2s, bibliography, FAQ schema | After intro | 1400, 1533, 1880, 1898, 1913, 1927, 1930 | Prose, FAQ | Facts listicle |
| mondaymandala.com | ~3,750 | 43 numbered H3 ideas | None (list) | Essentially none | List | "Traditions to start" |
| almanac.com | ~2,000 | 7 H2 "why do we..." | Per section | 1121, 1792 | Prose | Origins explainer; states apple bobbing is "A Roman Festival Turned Halloween Game" |

## Phase 2 — Gap analysis

- Table stakes: trick-or-treating, jack-o'-lanterns, costumes, apple bobbing, bonfires, divination/love games, soul cakes, haunted houses, parades.
- Gap: none of the five gives each custom a first dated record WITH its source and where it survives today; none separates "first record" from "origin"; almanac repeats the unsourced Pomona origin.
- Fan-out sub-queries: what counts as a Halloween tradition; oldest Halloween tradition; when did trick-or-treating start; where did apple bobbing come from; what were soul cakes; Halloween traditions that died out; new Halloween traditions; first Halloween parade; Halloween customs vs traditions.
- Cannibalisation: b2 history-of-halloween is held by History.com/Britannica/NatGeo/Wikipedia; this DDG top 10 shares about 4 URLs with that set (history.com x2, britannica, wikipedia). Sub-intent changed to per-custom dated cards + survival status; that sibling's milestones (1886 lantern, 1898 disguises, Dennison Bogie Book, poisoned candy) are not reused.
- Angle: wins by being the only post that gives each custom a dated card read at the primary or scholarly source (1623 Hallowmas beggar line, 1658 Dugdale straw fires, c.1714 Gay's nut spell, 1786 Burns's mirror note, 1833 Maclise, 1903 Schell, 1917 Sault Daily Star, 1920 Anoka), with the platform's 48.3% phone-open share framing the newest custom.

## Phase 3 — Sources (all fetched and read)

| URL | What it supports | Date |
|---|---|---|
| folger.edu Two Gentlemen of Verona 2.1 | "puling like a beggar at Hallowmas"; play first printed in 1623 First Folio | 1623 |
| en.wikisource.org Folk-Lore vol. 23 "Guy Fawkes' Day" (Charlotte S. Burne) | Dugdale 1658; Pennant North Wales stones; Welsh bobbing; Shropshire soul-cakes; parkin; Hallowmas bells banned; Findern Tindles 1784; bonfire older than 1605; Diwali comparison | Dec 1912 (scholarly, open, read in full) |
| en.wikisource.org Hallowe'en Festivities (Schell) | Jack-o'-lanterns of apples/cucumbers/squashes/pumpkins; place of mysteries ranking; "knock low and slow"; ducking with initials; mirror on cellar stairs; melting lead; four bowls; Welsh nuts for prosperity; Pomona claim | 1903 |
| barrypopik.com trick_or_treat | Sault Daily Star 1 Nov 1917 "tricks or treats" + coin immunity; 1927 Calgary/Lethbridge Herald on Blackie | undated entry |
| anokahalloween.com/history | 1920 parade, 1,000+ children's costumes, treats, Bridge Square bonfire, skipped 1942–43 | undated |

Named without links (read on Wikisource): DNB 1893 vol. 35 Maclise entry (Snap-apple Night exhibited 1833, Blarney party); The Beauties of Burns's Poems, Falkirk 1819 chapbook (Burns's 1786 notes on nut burning and the looking-glass); Lancashire Legends (1873, Gay's "Spell" still tried); Short Biographical Dictionary of English Literature (Gay's Shepherd's Week about 1714).

Dropped: Wiley et al. 2026, Emotion (haunted attractions; abstract only) — already used by b1 halloween-date-ideas-for-couples. Blocked, not worked around: thecanadianencyclopedia.ca (202 bot wall), merriam-webster.com (403), loc.gov (Cloudflare), Andrews "Footnoted Folklore" PDF on scholarcommons.sc.edu (403). Avoided for caps: gutenberg.org (FULL), foodallergy.org (FULL), archive.org, dsl.ac.uk, gov.uk.

Search terms tried for open-access peer-reviewed work: OpenAlex/DOAJ title and full-text searches for halloween, hallowe'en, trick-or-treat, jack-o'-lantern, souling soul cakes, snap-apple, guising, mumming, Journal of Festive Studies; findpapers.mjs: "Halloween customs folklore history", "trick-or-treating", "jack-o-lantern pumpkin history", "divination love marriage folk custom Hallowe en", "haunted house attraction recreational fear". No modern open-access paper on the dating of Halloween customs was found; Burne 1912 (Folk-Lore Society transactions) is the scholarly source.

## First-party facts used (facts.md, verbatim in batchMeta.factsUsed)

48.3% phone opens; 90.9% published; 38.5% password; Raksha Bandhan 2026 lead time (49.4% on the day, n = 89, disclosed as Raksha Bandhan and small in body prose). No Halloween usage data exists.
