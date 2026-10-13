# Research brief — halloween messages for boyfriend (row 74)

- Batch: 2026-10-13-halloween-b2 · slug `halloween-messages-for-boyfriend` · theme couple · plan weak 7/10
- Absorbs: "cute halloween messages for boyfriend", "halloween texts for boyfriend"
- Written 2026-10-13. Evergreen: 31 October is Saturday in 2026 and Sunday in 2027 (BRIEF §1).

## Phase 0 — first-party data

No Halloween usage data exists in `content/facts.md` (BRIEF §3). Used platform-wide lines only, each labelled in the body as platform-wide and not Halloween data:

- 48.3% of shared pages are opened on a phone (27,725 of 57,456 views) — measured 2026-09-24
- Average views per created page: 11.1 — measured 2026-09-24
- 38.5% of creators password-protect their page before sharing it (2,000 of 5,199) — measured 2026-09-24

The template spec (`template-spec.md`) is product fact for the /happy-halloween and /happy-halloween-premium paragraphs and does not count toward the three.

## Phase 1 — SERP (WebSearch, US index; Firecrawl disconnected)

Searches used: **2 of 2** — `halloween messages for boyfriend`, `cute halloween texts for boyfriend`. No browser tools.

Top results, query 1: static.intrafocus.com ×3, netbox.point-broadband.com, dev.ourstate.com, travelpander.com ×2 (hijacked-subdomain or auto-generated spam), elitedaily.com (Halloween pickup lines, dating-app intent), aol.com (generic greetings list; **404 on fetch**).
Query 2 adds smartsmssolutions.com (generic boyfriend SMS list; **403, snippet only**), bpsf.bouncepad.com, bt.safe2choose.org, cfe.keltyeatingdisorders.ca (all hijacked subdomains), elitedaily.com sexy Halloween texts.

**Weak count in the top 10 of query 1: 8** (7 spam/hijacked + 1 off-intent pickup-line page); AOL is the only generic editorial result and it 404s. Corroboration: `serps.md` measured "cute halloween messages for boyfriend" at weak 7 (pinterest ×3, joliecarte ×2 card generator, boomf, matchbox, marriage365, parade). Gate 4 passes comfortably.

| Page | Words / structure | Where the answer sits | Data cited (date) | Format | Tone | Optimising for |
|---|---|---|---|---|---|---|
| travelpander.com/?p=91051 "Cute Halloween Quotes for Boyfriend" | ~2,500 words, ten "What/Why/How" H2s, numbered sub-lists | A quote box above the fold, then explainers | Vague "American Psychological Association" humor claim, no link, no date | Lists inside numbered explainers, no table, no FAQ schema seen | Third person, padded, AI-generated | "cute halloween quotes for boyfriend" |
| elitedaily.com sexy-texts-to-send-on-halloween (upd. 20 Feb 2024) | ~1,200 words, 3–4 H2 tiers by heat level | Intro then lists | None | Bullet lists, images | Second person, casual | Spicy/sexting intent: explicit; off-brand for us |
| elitedaily.com halloween-pickup-lines (upd. 26 Aug 2021) | ~600 words, one list of 25 | List after 3 intro paras | None | One bullet list | Casual | Dating-app openers, not partners |
| aol.com 50-best-halloween-greetings | n/a: 404 on fetch | n/a | n/a | n/a (snippet: "Happy Halloween to my boo!") | n/a | Generic greetings for anyone |
| smartsmssolutions.com 65 playful messages for boyfriend | n/a: 403; snippet only | n/a | n/a | Not Halloween-specific | n/a | Generic boyfriend SMS templates |

Not analysed as top-5 pages: intrafocus, point-broadband, ourstate dev, bouncepad, safe2choose, keltyeatingdisorders subdomains (spam per BRIEF §4).

## Phase 2 — gap analysis

- **Table stakes:** a list of cute, funny and romantic lines; usable in a text or card.
- **The gap:** no ranking page sorts lines by *relationship stage* (a 3-week boyfriend and a 6-year partner need different texts) or by *moment on 31 October* (morning, mid-day, costume pocket, after-party, apart). None covers the "I'm away this Halloween" case. None cites any research on what makes a text land; travelpander gestures at "the APA" with no link.
- **Stale / off-intent:** Elite Daily pages are 2021 and 2024 and aimed at crushes or explicit texting. The clean, partner-specific intent is underserved.
- **Fan-out sub-queries:** what to text my boyfriend on Halloween morning; cute short Halloween text; what to write in a Halloween card for him; funny Halloween texts; long-distance Halloween message; how long should the text be; should I use emojis; what if he doesn't like Halloween; when to send it; can I send a link instead of a text.

**Angle:** Wins by being the only post that sorts original, clean Halloween messages for a boyfriend by relationship stage and by the moment on 31 October they are sent, grounded in open-access couples research on responsiveness and time apart, using SubhSandesh's platform-wide 48.3% phone-open share and 11.1 views per page to say where a reopenable message beats a one-off text.

## Phase 3 — sources (all fetched via Europe PMC REST full text or core record, 2026-10-13)

| Source | Finding used | Read | Publisher check |
|---|---|---|---|
| Rogge, Macri, Okwudili & Crasta 2026, *Behavioral Sciences* — https://europepmc.org/article/PMC/PMC13405681 | 405 couples (810 partners) over their first month on a relationship app; increases in quality time, perceived partner responsiveness and gratitude toward the partner were the changes most proximally linked to rising relationship quality. No control group; correlational. | Abstract (core record, CC BY) | MDPI, OA |
| Huh 2025, *PLOS ONE* — https://europepmc.org/article/PMC/PMC12221085 | 260 participants, 15 text conversations; replies with emojis were perceived as more responsive than text-only replies, and perceived responsiveness predicted closeness and satisfaction. Framed as replies from friends, not partners. | Abstract (core record, CC BY) | PLOS, OA |
| Meier et al. 2025, *Affective Science* 6(1) — https://europepmc.org/article/PMC/PMC11904024 | N = 314 (49 married couples, 108 friendship dyads); affection most strongly associated with compassion, amusement and excitement; higher in pleasant than conflict conversations. | Full text XML fetched; abstract quoted | Springer, OA CC BY |
| Forshaw et al. 2025, *PLOS ONE* — https://europepmc.org/article/PMC/PMC12021284 | Fly-in fly-out workers: 806 daily observations, N = 106 incl. 19 couples; lower relationship satisfaction on days away was fully mediated by less time spent communicating with the partner. | Full text XML fetched (abstract + discussion read) | PLOS, OA CC BY |

Rejected: Luo & Tuney 2015 *Computers in Human Behavior* (positive texts and satisfaction) — closed access and OpenAlex carries no abstract, so it cannot be verified; Aron & Tomlinson 2026 (PMC13203665) — used in 10+ Batch 1 posts; Love and Rejection Messages Theory (Frontiers, brief trap); capitalization (Frontiers 2021; JSPR = SAGE). Jiang & Hancock 2013 and Kreager/Topinkova were used in Batch 1, as the prompt said (verified: jcom.12029 in halloween-ideas-for-boyfriend; Kreager in halloween-pickup-lines-for-guys).

**Cap notes:** Huh 2025 (PMC12221085) appears once in Batch 1 (halloween-ideas-for-girlfriend) and zero times in Batch 2; caps are per batch, so it is legal, but BRIEF §9 prefers Batch-1-unused sources, so recorded here as a structural compromise: it is the only open-access study found that measures responsiveness *inside text messages*. Forshaw 2025 appears once in an older batch (miss-you-es-10). europepmc.org is cap-exempt; the per-paper cap still applies and each paper is at 1 post in this batch.

Wikipedia sameAs verified via API: Halloween Q251868, Text messaging Q17166101, Long-distance relationship Q1406917.

## Siblings and overlap

Read the H2s of Batch 1 halloween-nicknames-for-boyfriend, halloween-ideas-for-boyfriend, halloween-gift-ideas-for-boyfriend, romantic-halloween-quotes, happy-halloween-wishes, halloween-pickup-lines-for-guys and halloween-for-boyfriend-and-girlfriend. Batch 2 rows 78/84/87 not yet on disk. Every line was checked by script for 5-word overlap against all sibling bodies in both batches and the fetched competitor pages (see JSON audit).
