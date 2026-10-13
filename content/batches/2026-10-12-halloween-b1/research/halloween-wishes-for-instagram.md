# Research brief: halloween wishes for instagram

Row 36 · slug `halloween-wishes-for-instagram` · theme messages · absorbs "halloween wishes instagram post" · planned weak 4/10.

## Phase 0: first-party data

No Halloween usage data exists (BRIEF §3). Used three platform-wide lines, byte-verbatim from `content/facts.md`:

- 48.3% of shared pages are opened on a phone (27,725 of 57,456 views) — measured 2026-09-24 (first paragraph)
- Average views per created page: 11.1 — measured 2026-09-24 (first paragraph)
- 38.5% of creators password-protect their page before sharing it (2,000 of 5,199) — measured 2026-09-24 (wrong-choice section)

None measures Instagram behaviour; the body frames them as SubhSandesh page data only.

## Phase 1: SERP (Firecrawl, location India, 1 search of the 2-search budget)

| # | URL | Type | Weak? | Words (approx.) | Structure / direct answer | Data and dates | Optimising for |
|---|---|---|---|---|---|---|---|
| 1 | travelandleisure.com/photography/halloween-instagram-captions | 100-caption listicle | No | n/a (HTTP 402 to both fetchers; snippet only) | List of captions | none seen | "halloween captions for instagram" |
| 2 | pinterest.com/ideas/short-halloween-captions | Pin board | Yes | n/a | Image pins | none | captions |
| 3 | shutterfly.com/ideas/spooktacular-halloween-captions | 220+ caption listicle (retailer) | No | ~3,400 | H2 per mood: cute, funny, couples, groups, movies, songs, pets, kids, DIY; answer = list | dated "2026", modified 2026-07-24; no stats | captions + print upsell |
| 4 | whimsysoul.com/halloween-messages-quotes-instagram-caption... | 70+ captions, lifestyle blog | Yes | ~2,000 | Long intro (equinox, "Christmas people vs Halloween people") before the list | none | captions + affiliate |
| 5 | today.com/life/holidays/halloween-captions-rcna36316 | 144-caption listicle | No | ~2,000 | H2 per mood (best, cute, short, funny, movies, TV) | "in 2026" in title, updated 2026-09-24 | captions |
| 6 | fnp.com/quotes/halloween | quotes (competitor, gifting) | No | — | not fetched (competitor) | — | — |
| 7 | livemint.com ... happy-halloween-2025-top-100-wishes... | news listicle | No | ~1,500 | H2s: WhatsApp messages, funny wishes, quotes, Instagram captions, image gallery | dated 2025-10-31 (stale year) | "happy halloween 2025 wishes" |
| 8 | joliecarte.com/en/all-instagram-halloween-messages | e-card site (competitor) | Yes | ~470 | one H2, card list | none | e-card |
| 9 | 194crafthouse.com/blogs/... | shop blog | Yes | — | captions + shop | — | captions |
| 10 | theknot.com/content/halloween-captions | 186-caption listicle | No | — | — | — | captions |

Weak: 4/10 (pinterest, whimsysoul, joliecarte, 194crafthouse). Gate 4 passes.

Intent finding: the India SERP for "wishes for instagram" is a **captions** SERP. 9 of 10 results are generic caption lists sorted by mood (cute/funny/couples). Livemint is the only "wishes" page, and it mixes WhatsApp and Instagram. US not re-measured; `serps.md` "halloween captions for instagram" (US) shows the same pattern (adobe, today, chatbooks, T+L, shutterfly; weak pinterest, 194crafthouse, pallyy).

Content checks on the 5 fetched pages (keyword counts in page text): "hashtag" 0 relevant mentions (shutterfly's one hit is a sidebar link), "alt text" 0, "carousel" 0, "reel" 0, "truncat"/character limit 0.

## Phase 2: gap analysis

- **Table stakes:** many short lines; couples, friends/groups, kids/family groupings; funny and cute tones.
- **Gap:** no page sorts by Instagram post format (single photo, carousel first/last slide, Reel cover, followers wish); none gives a length rule; none states the hashtag limit (now 5); none mentions alt text.
- **Stale data:** livemint is year-stamped 2025; T+L/today/shutterfly year-stamp titles.
- **Unanswered:** where does the caption cut off; how many hashtags; first comment vs caption; private-account hashtags; how to make a costume photo accessible.
- **Fan-out sub-queries:** wish length for Instagram; hashtag limit; carousel first-slide text; Reel cover text; alt text for Halloween photos; wishing followers without sounding like a brand; couple/friends/family post wishes.
- **Angle:** wins by being the only page in the top 10 that formats Halloween wishes by Instagram post type with a length rule, Instagram's verified 5-hashtag limit and alt-text guidance, grounded in SubhSandesh's 48.3% phone-view share and 11.1 views per page.

## Phase 3: sources (5, all fetched)

| Source | Claim used | Read | Date |
|---|---|---|---|
| help.instagram.com/351460621611097 | "up to 5 tags on a post"; >5 and the comment won't post; caption or comments; private accounts not on hashtag pages; edit caption to add | full (Firecrawl; JS page) | undated |
| help.instagram.com/503708446705527 | automatic alt text uses object recognition; replace via Accessibility before sharing or Edit after | full (Firecrawl) | undated |
| developers.facebook.com IG User Media reference | caption max 2,200 characters; API still says 30 hashtags | full | undated |
| Hill & Oswald 2023, Partnership 18(1), journal.lib.uoguelph.ca | ~900 posts; no library in initial sample added alt text on Instagram; "may be an image of text" | full PDF (CC BY-NC-ND, cite and link only) | 2023-07-05 |
| Desjarlais 2026, PLOS ONE, Europe PMC PMC13160335 | N=125; 71% of attributions for selfies/elsies internal; meme attributions all external | full text XML (CC BY) | 2026-05-11 |

Subject test: all five are about Instagram mechanics or Instagram/social image behaviour. Peer-reviewed OA: Desjarlais (PLOS ONE), Hill & Oswald (Partnership, peer-reviewed OA). Generic statistics: 0. Wikipedia body links: 0. Capped domains avoided (no doi.org, frontiersin, sciencedirect, SAGE, T&F, Elsevier). capcheck: no cap exceeded.

findpapers queries: "Instagram captions engagement self-presentation", "Instagram caption length likes engagement", "Instagram hashtags engagement study", "alt text accessibility social media images blind users". Rejected: Bakhshi et al. 2014 "Faces engage us" (author PDF 404); Hu et al. 2014 "What We Instagram" (ojs.aaai.org 403); King 2024 EBLIP evidence summary (secondary; cited the primary study).

## Prompt claims checked (BRIEF §0)

- "Find a source for the visible-caption cut-off": **none exists from Instagram/Meta.** Help Center and developer docs give only the 2,200-character maximum. The commonly repeated "125 characters" was not found on any official page. The body says so and labels its 70/80-character targets as a working rule.
- "Hashtag limit changed to 5 in 2025?": **5 verified** on the Help Center. The page is undated, so the 2025 date is unconfirmed and not printed. Meta's developer reference still says 30 for API captions; the body names the conflict.
