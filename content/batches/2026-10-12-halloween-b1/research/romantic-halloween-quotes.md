# Research brief — romantic halloween quotes

- Row 20 · slug `romantic-halloween-quotes` · absorbs "halloween quotes romantic" · PLAN weak count 7, band 10,000+/mo
- Slug free in Strapi (checked 2026-10-12, total 0). Category `festive-beats` exists (id 6).
- Searches used: 2 Firecrawl (1 SERP, US; 1 to locate the Poe Museum misattribution post). 0 WebSearch.
- Not in `content/keywords/2026-10-12-halloween-global/serps.md` (grep "romantic": no hit), so no corroborating SERP.

## Phase 1 — SERP (Firecrawl, location United States, 2026-10-12)

| # | URL | Type | Weak? |
|---|---|---|---|
| 1 | pinterest.com/ideas/romantic-halloween-quotes | Pin board | weak |
| 2 | inamatchbox.com (39 Best Halloween Quotes About Love) | Gift retailer blog | weak (429 on fetch) |
| 3 | purelovequotes.com/category/halloween-quotes | Quote-image farm | weak |
| 4 | printerval.com (80+ Halloween Love Quotes for Cards, Texts & Captions) | Print-on-demand retailer blog | weak |
| 5 | amandavshane.substack.com (Spooky Romantic Quotes) | Personal newsletter, 2022 | weak |
| 6 | couplehoodies.com (99 Halloween Love Quotes) | Apparel retailer blog | weak (429 on fetch) |
| 7 | yourtango.com (51 Best Halloween Quotes) | Media, updated Oct 2022 | not weak |
| 8 | getnamenecklace.com (45+ Most Romantic Halloween Quotes) | Jewellery retailer blog, 2022 | weak |
| 9 | rd.com (103 Halloween Pickup Lines) | Media, off-intent | not weak |
| 10 | pinterest.com/ideas/halloween-couple-quotes | Pin board | weak |

**Measured weak count: 8/10** (PLAN said 7). Gate 4 passes.

### Top-5 fetched pages compared

| Page | Size / structure | Direct answer | Attribution quality | Format | Optimising for |
|---|---|---|---|---|---|
| purelovequotes | ~12 KB; image tiles, no H2s | none, tiles from line 1 | every line "Anonymous" | quote images | image search, pins |
| printerval | ~28 KB, 80+ lines; H2 by vibe (romantic, cute puns, movie quotes, short for him/her), FAQ | after a 2-para intro | credits "I have crossed oceans of time to find you" as "Inspired by Bram Stoker's Dracula"; rewrites Brontë ("Whatever our souls are made of, yours and mine are carved from the same autumn timber") unattributed; trims "Annabel Lee" | bullets, FAQ | product upsell (costumes, gifts) |
| substack (Shane) | 13 image quotes from classic works | 1-line intro | attributions, no editions; includes non-love lines (Macbeth "something wicked", Frankenstein "Beware, for I am fearless") | images | newsletter |
| getnamenecklace | 45+ lines by recipient (boyfriend/girlfriend…) | 3-line intro | mostly "Unknown"; non-Halloween quotes (Charles Schulz, Lao Tzu, Robert Frost "fence") | numbered lists | necklace upsell |
| yourtango | 51 quotes as H3s, 2022 | intro after 4 paras | "Edgar Allen Poe"; "I have crossed oceans of time…" credited to "Bram Stoker's Dracula"; film quotes (Bride of Frankenstein) | H3 list, images | ad impressions |

Tone across all five: third person, no sources, no data, no dates on quotes, every page an upsell or ad page.

## Phase 2 — Gap

- **Table stakes:** an "Annabel Lee" line, some gothic classics, short captions, lines for him/her, card/text use.
- **Gap:** nobody verifies a single quote. Two of five print the Dracula line that is not in the novel; one rewrites Brontë without saying so; "Annabel Lee" is trimmed everywhere. Nobody separates attributed classics from originals, nobody gives work + year, nobody covers October anniversaries or long distance as a use, nobody says when a death-and-love quote is the wrong card.
- **Stale:** yourtango and getnamenecklace are 2022.
- **Fan-out sub-queries → H2s/FAQs:** is X a real Poe quote; did Stoker write "oceans of time"; why love and death pair in Gothic; short quotes for captions; what to write in a card; October anniversary; long distance; how long a note should be; can I change a quote.
- **Angle:** wins by being the only post in the top 10 that checks every classic love line against the original public-domain text, names five famous fakes, splits 10 attributed classics from 40 originals by use, and sizes them with SubhSandesh's 48.3% phone-open rate and 88-word median letter.

## How the quotes were verified (the post's original claim)

Downloaded Project Gutenberg plain texts to the scratchpad (`romantic-halloween-quotes-gut/`): Poe Raven Edition vols 1–5 (#2147–2151), Dracula (#345), Wuthering Heights (#768), Frankenstein 1818 (#41445) and 1831 (#84), Romeo and Juliet (#1513), Keats 1820 poems (#23684), Dickinson three series (#12242), Rossetti Goblin Market/Prince's Progress (#16950). Grepped each candidate phrase and copied the exact line with surrounding context.

| Quote | Result |
|---|---|
| "But we loved with a love that was more than love— / I and my ANNABEL LEE—" | found, vol 5 l.5551 (Annabel Lee, 1849) |
| "It was night in the lonesome October / Of my most immemorial year:" | found, vol 5 l.5369 (Ulalume, dated 1847 in edition notes) |
| "For the rare and radiant maiden whom the angels name Lenore—" | found, vol 5 l.5132 (The Raven) |
| "I could not love except where Death / Was mingling his with Beauty's breath—" | found, vol 5 l.9268, editor's note 32: lines added to "Romance" in the 1831 volume ("Introduction") |
| "Shall I believe / That unsubstantial death is amorous;" | found, R&J l.4939 (Act 5 Sc 3) |
| "Whatever our souls are made of, his and mine are the same;" | found, WH l.2929 |
| "Be with me always—take any form—drive me mad! only _do_ not leave me in this abyss, where I cannot find you!" | found, WH l.6126 |
| "I met a Lady in the Meads / Full beautiful, a faery's child," | found, Keats #23684 l.4629 (printed in the edition's notes; poem not in the 1820 volume, written 1819) |
| "Remember me when I am gone away, / Gone far away into the silent land;" | found, Rossetti l.1327 (Goblin Market…, 1862) |
| "Because I could not stop for Death, / He kindly stopped for me;" | found, Dickinson l.2533, before "Second Series" header, i.e. first series (1890) |
| "Sleep, those little slices of death" | **0 hits** in Poe vols 1–5 |
| "crossed oceans of time" / "oceans of time" | **0 hits** in Dracula — not Stoker's. Attribution to the 1992 film is stated as "usually traced to", not fetched-verified |
| "The best things in life make you sweaty" | 0 hits; Poe Museum: not Poe |
| "long intervals of horrible sanity" | 0 hits in Works (it is from a letter; not used in post) |
| "exquisite horror of their reality" | found, vol 3 l.3737, Pym ch. 12 (cannibalism scene) |
| "I will be with you on your wedding-night!" | found, Frankenstein 1818 l.6052 — the creature's threat |
| "most poetical topic" | 0 hits in Raven Edition (essay not included); verified on eapoe.org instead |

## Phase 3 — Sources (all fetched)

| Source | What it supports | Read | Date |
|---|---|---|---|
| eapoe.org, The Philosophy of Composition (Graham's Magazine 28:163-167) | "the death, then, of a beautiful woman is, unquestionably, the most poetical topic in the world… a bereaved lover" | full text | April 1846 (page last updated 3 Sep 2022) |
| Lima, Diálogo das Letras 14: e02528 (UERN, OA, peer-reviewed) | Annabel Lee is Poe's last complete poem, 1849, 6 stanzas / 41 lines; love and death sustain its poetry; beauty in the morbid | full PDF (Portuguese) | 27 Nov 2025 |
| Oda, Revue LISA (OpenEdition, OA, peer-reviewed) | Catherine in the genealogy of Gothic heroines; Heathcliff's identity depends on Catherine's existence | full text | 9 Mar 2010 |
| Poe Museum, "Did Poe Really Say That?" | majority of circulating Poe quotes misattributed; "slices of death" untraceable, credited in Nightmare on Elm Street III; "sweaty" not Poe | full text | no date on page — omitted |
| Floyd, Mikkelson, Hesse & Pauley, Human Communication Research 33(2):119-142 (OUP) | 2 × 5-week RCTs; 20 min × 3 occasions of affectionate writing → significant total-cholesterol reduction | **abstract only** (paywalled; firecrawl_scrape after 403s) | April 2007 |
| Project Gutenberg #2151, Raven Edition vol 5 | exact text of quotes 1–4 | full text | released 1 Apr 2000 |

- Subject test: Lima, Oda, Poe Museum, eapoe pass. Swap test: **Floyd fails** (generic affectionate-writing study — recorded in audit).
- Candidates rejected: "Irony in the 'Death of a Beautiful Woman'" (Literary Voice 2026 — venue not verifiable as non-predatory); Edgar Allan Poe Review papers (JSTOR paywall); Floyd's Communication Monographs / Health Communication papers (Taylor & Francis, banned).
- Caps: academic.oup.com in 1 other post (gift-ideas-for-boyfriend) → 2 now; gutenberg.org exempt; others new. capcheck clean for this slug.
- Wikidata QIDs from the Wikipedia API: Halloween Q251868, Edgar Allan Poe Q16867, Annabel Lee Q564072, Wuthering Heights Q202975, Gothic fiction Q20669641 (API value; looks unusual but is what pageprops returned).

## First-party facts used (facts.md, verbatim in batchMeta.factsUsed)

48.3% phone opens; love-gf most-viewed 29.7%; 11.1 views per page; 90.9% publish rate; miss-you median letter 88 words (n=214, two-month caveat stated in body). No Halloween usage data cited.

## Brief/prompt claims checked

- Prompt framed "the Brontës": only Emily Brontë is quoted (Charlotte's Jane Eyre has no line as strong on love-and-death; not forced in).
- Prompt suggested Mary Shelley as a romantic source: her best-known "love" line in circulation is the creature's wedding-night threat, so she appears only in the fakes/avoid list.
- PLAN weak count 7 → measured 8.
