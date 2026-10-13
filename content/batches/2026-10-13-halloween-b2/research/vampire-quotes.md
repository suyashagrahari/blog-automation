# Research brief: vampire quotes (row 57; absorbs "halloween quotes vampire")

Batch `2026-10-13-halloween-b2`. Slug `vampire-quotes` (free in Strapi, checked 2026-10-13). Category `festive-beats`.

## Phase 0: first-party data
facts.md has no Halloween data (BRIEF §3). Platform-wide lines used, byte-verbatim:
- 48.3% phone opens (27,725 of 57,456 views), 2026-09-24. In the opening.
- 11.1 average views per page, 2026-09-24. In the opening.
- 90.9% of started pages published, 2026-09-24. In the /happy-halloween section.
- #5 page type: Darling, 457 created, 8.8%, 2026-09-24. Used with the /darling alternative.
The template spec (Boo License 1080×1920, vampire is one of the eight costumes, a 60-character question, bestie mode) is product fact and is not counted toward the three.

## Phase 1: SERP
One WebSearch, "vampire quotes", US index. Firecrawl was disconnected. Top 5 pages were fetched with ctx_fetch_and_index.

| # | Page | Size and structure | Where the answer sits | Sources and data | Format | Optimising for |
|---|---|---|---|---|---|---|
| 1 | bookroo.com/quotes/vampires | 38 book quotes, numbered | Immediately | Mostly Twilight, Matheson and King (all in copyright), tagged by character | List and tags, no FAQ | Book-quote catalogue |
| 2 | goodreads.com tag vampire-quotes | 13 user-tagged quotes | Immediately | Self-published authors; includes a sexual line | UGC list | Tag page (weak) |
| 3 | today.com (rcna167355) | Title says 65 quotes; H2s Best / Funny / Short | After about 200 words of intro | Modern film and TV lines, Rice and Meyer. Byron's Giaour lines 755–758. Stoker's welcome misquoted ("the night are is chill"). Garrett Fort's film line | Image-led lists, no table, no history | Head term, Instagram use |
| 4 | shmoop.com Interview with the Vampire quotes | Theme index | Navigation only | Anne Rice novel | Study guide | One book, not the head term |
| 5 | hachette.com.au | 10 Twilight quotes | Immediately | Publisher promo | Short list | Twilight fans |

Weak results in the top 10: 2 Goodreads tag pages, 2 hijacked-subdomain spam pages (imap.compagnie-des-sens.fr, monitor.lpc.events) and the narrow Hachette Twilight page. That is about 5, so Gate 4 passes. The shmoop result appears twice (app. and www.).

## Phase 2: gap
- **Table stakes:** funny, short and romantic groupings, plus Dracula lines.
- **Gap:**
  - None of the pages give a chapter for any line or verify a single one. Today.com prints a mangled Dracula line.
  - None cover Polidori or Carmilla.
  - None cover the real 1725/1732 Serbian cases or the medical theories.
  - Most of their lines are copyrighted modern film and novel lines, which the brief bans.
- **Fan-out:**
  - Is X really in Dracula?
  - Romantic, funny and short vampire quotes.
  - Were vampires real?
  - Who was Arnold Paole?
  - Rabies, porphyria.
  - Where does the no-reflection rule come from?
  - Can I quote Dracula?
- **Angle:** the only post that checks every classic vampire line against the 1813–1897 Gutenberg texts by chapter, flags three misquotes, and traces the literary vampire back to the dated Serbian reports and the medical theories. It uses the 48.3% and 11.1 figures to size each line.

## Phase 3: sources (fetched)
1. Gómez-Alonso 1998, *Neurology* 51:856, Europe PMC MED/9748039. ABSTRACT ONLY (paywalled). It proposes rabies "may have played a key role" and says the phenomenon "still awaits a comprehensive explanation".
2. Cox 1995, *Postgrad Med J* 71:643, Europe PMC MED/7494765, "Porphyria and vampirism: another myth in the making". RECORD/TITLE ONLY: the scanned letter's PDF returned 403.
3. Daniels-Higginbotham et al. 2019, *Genes* (MDPI, CC BY), PMC6769528. Full text read. Blood at the mouth and a bloated chest come from "the natural process of decomposition". JB55, from Griswold, CT, had chronic pulmonary infection, perhaps TB.
4. Polidori, *The Vampyre* 1819, Gutenberg #6087. The introduction cites the London Journal of March 1732, "Arnold Paul" and "Madreyga, in Hungary". It also has the body "fresh … florid blood" passage.
5. Wikipedia, Arnold Paole (entity). Report dated 26 Jan 1732. The Blagojević 1725 details (nine deaths in eight days, Kisilova) come from the linked Petar Blagojević entry.

Quote texts, unlinked and cited by eBook number:
- Dracula #345
- Carmilla #10007
- Byron Works vol. 3 #21811: Giaour lines 759–762 and note [110]

Every quote was matched with a script against the downloaded texts. The Byron passage was checked by eye, because the edition's line number "760" sits inside the text. "Strength of the vampire" and "oceans of time" each have 0 matches in Dracula.

Dropped:
- Gregoricka 2014 (PMC4245124), Bonczarowska 2025 (PMC12137733) and PMC7458347. All three are used by sibling vampire-halloween-captions, per the coordinator's note.
- Annals Med Surg 2023 (PMC9949817). It repeats the porphyria link uncritically.
- Hampl 1997 J R Soc Med. It is published by SAGE, which is banned.

Searches tried:
- findpapers: "vampire folklore history", "vampire legend rabies", "porphyria vampire", "vampire burial deviant exhumation decomposition", "Medvegia vampire 1732 Serbia"
- Europe PMC REST: title and keyword queries

There was no open-access rebuttal of the rabies hypothesis, and no open-access history of the Serbian reports.

## Brief claims checked
- "Rabies hypothesis is debated": only its abstract is readable and no open-access critic was found. The post calls it "an argument from resemblance, not a test" and does not name a critic.
- Sibling overlap: no 5-word overlap with any of 57 sibling posts across both batches. The post does not reuse Batch 1's "children of the night" line and mentions "oceans of time" in one line.
