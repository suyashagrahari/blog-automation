# Research brief — halloween books for kids (rank 383; absorbs "best halloween books for kids")

Slug: `halloween-books-for-kids` (Strapi check 2026-10-15: not taken). Batch 2026-10-15-halloween-b8.

## Phase 0 — first-party data
No Halloween or reading data in facts.md. Used platform-wide lines only: 48.3% phone opens, 11.1 views per page, 38.5% password rate (all measured 2026-09-24). Template spec used for /happy-halloween Kids tone and premium voice note.

## Phase 1 — SERP (WebSearch, US index, 1 search; 0 Firecrawl)
| # | URL | Type | Words (approx) | Structure | Ages? | Years/publishers? | Fear rating? | Research? | Library/Libby? |
|---|---|---|---|---|---|---|---|---|---|
| 1 | schoolreadinglist.co.uk/genres/halloween | UK reading-list site | 3,800 | H3 per book, 3 age groups | yes (7–11, YA) | no | no | no | no |
| 2 | romper.com/entertainment/halloween-books-for-kids | media listicle | 2,500 | 31 numbered H2 blurbs | no | no | no | no | no |
| 3 | thecontentedreader.ca/halloween-books-for-kids | book blog (weak) | 3,500 | 25 titles | no | no | no | no | no |
| 4 | panmacmillan.com halloween-books-for-children | publisher catalogue | 4,900 | by age (babies, 3–5…) | yes | own titles only | no | no | no |
| 5 | happiestbaby.com/blogs/toddler/halloween-books-kids | baby-products retailer (also secure. duplicate) | 2,000 | 20 H2 blurbs, "not too spooky" | no | no | implicit | no | no |
| 6 | selectedreads.com 20 great halloween books | book blog (weak) | 2,500 | 20 H3 | no | no | no | no | no |
| 7 | screenwiseapp.com/guides/halloween-books-for-kids | parenting app guide (weak) | 1,400 | 3 age bands | yes | no | "read earlier in the day" | no | no |
| 8 | triadmomsonmain.com | local parenting blog (weak) | — snippet only | | | | | | |

Weak count in top 10: 5 (contentedreader, secure.happiestbaby duplicate, triadmomsonmain, selectedreads, screenwise). Direct answer: none in the first paragraph except screenwise. No tables, no FAQPage schema on any of the 7 fetched. None mentions Libby or dialogic reading (string check); schoolreadinglist mentions Sleepy Hollow.

Sibling overlap: 0 shared URLs with b1 halloween-movies-for-kids, b4 halloween-movies-for-toddlers, b2 halloween-quotes-for-kids, b6 halloween-ghost-stories, b4 halloween-ideas-for-teachers, b5 halloween-quotes-for-teachers.

## Phase 2 — gap
- Table stakes: titles by age, short blurbs, a "not too scary" note.
- Gap: no page verifies first-edition year/publisher, rates fear explicitly, gives a per-title read-aloud tip, cites any reading research, or explains library borrowing.
- Fan-out: good Halloween book for a 2-year-old; non-scary Halloween books; is X too scary for age Y; Sleepy Hollow for young kids; how to read scary books aloud; borrow Halloween ebooks at the library.
- Angle: only post sorting 20 books by age band with LoC-checked first editions, an explicit 1–5 fear scale, research-grounded read-aloud tips and Libby borrowing.

## Verification of books (2026-10-15)
loc.gov JSON → Cloudflare challenge after first call; WorldCat → Cloudflare 429; search.catalog.loc.gov API → 401 (token); harpercollins.com → 403. Not worked around. Used Open Library's public API, reading editions whose source_records are Library of Congress MARC (marc_loc_*) or LCCN-keyed:
- Pumpkin Pumpkin — Titherington, 1986, Greenwillow (LCCN 84025334)
- It's Pumpkin Time! — Zoe Hall, 1994, Blue Sky Press/Scholastic (93035909)
- Pumpkin Eye — Fleming, 2001, Henry Holt (00044850)
- Ten Timid Ghosts — O'Connell, 2000, Scholastic (99046427)
- Inside a House That Is Haunted — Capucilli, 1998, Scholastic (97038398)
- Creepy Carrots! — Reynolds, 2012, Simon & Schuster BFYR (2010035099)
- Leo — Barnett, 2015, Chronicle (2014024417)
- Ghosts in the House! — Kohara, 2008, Roaring Brook (2008018204)
- The Hallo-Wiener — Pilkey, 1995, Blue Sky Press (94040949)
- The Teeny-Tiny Woman — Galdone, 1984, Clarion (84004311)
- Where's My Mummy? — Crimi, 2008, Candlewick (2007034229)
- Georgie — Bright, 1944, Doubleday Doran (44007589)
- In a Dark, Dark Room — Schwartz, 1984, Harper & Row (83047699)
- Bunnicula — Howe & Howe, 1979, Atheneum (78011472)
- Haunted Castle on Hallows Eve — Osborne, 2003, Random House (2002156313)
- The Graveyard Book — Gaiman, 2008 (OL editions Bloomsbury 2008; LCCN 2008013860 HarperCollins) — weakest
- Small Spaces — Arden, 2018, Putnam (2018010780)
- Wait Till Helen Comes — Hahn, 1986, Clarion (86002648)
- Sleepy Hollow — Sketch Book first edition, C. S. Van Winkle, NY, 1819–1820, seven parts (archive.org irvingsketchbook metadata)
- Grimm "Youth Who Went Forth to Learn What Fear Was" — Gutenberg #2591, Taylor & Edwardes translation (full text read; 1812 date not verified, not printed)
Dropped for sibling reuse: Room on the Broom, The Witches, Coraline, The Halloween Tree (films in b1/b4/b2), Where Is Baby's Pumpkin? (b3 toddlers), Five Little Pumpkins (b4 songs). Dropped as unverifiable: Spooky Pookie, Little Blue Truck's Halloween, Goodnight Goon, Little Old Lady (first-edition record ambiguous).

## Phase 3 — sources (capcheck run 2026-10-15)
1. eric.ed.gov EJ541641 — Collins-Standley et al. 1996, Child Study Journal (abstract only).
2. europepmc PMC12716577 — Milani et al. 2025, BMJ Paediatrics Open meta-analysis (abstract).
3. europepmc PMC12483062 — Reinoso et al. 2025, J Child Lang (abstract; CC BY).
4. archive.org irvingsketchbook — Sketch Book first edition metadata.
5. gutenberg.org/ebooks/2591 — Grimm, full text.
6. help.libbyapp.com/en-us/6103.htm — Libby getting started (read 2026-10-15).
Rejected: PLOS ONE dialogic fNIRS 2026 (PLOS ONE full), Frontiers items (banned), Compr Psychiatry 2024 dialogic RCT (Elsevier, banned), Children (Basel) (MDPI full), Dowdall 2020 Child Dev (not OA in Europe PMC).
Searches: findpapers "dialogic reading shared book reading child language meta-analysis", "children enjoyment of scary stories fear picture books"; Europe PMC title queries for recreational fear / scary play / frightening stories / horror + children (0 OA hits); ERIC API "scary books/stories".
