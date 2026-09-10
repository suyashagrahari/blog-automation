# ganesh-chaturthi-wishes-reply — ABORTED at the BRIEF §3 cannibalisation gate

- **Keyword:** `happy ganesh chaturthi reply`
- **Slug (not published):** `ganesh-chaturthi-wishes-reply`
- **Batch:** `2026-09-10-ganesh-10d` (Ganesh Chaturthi wave 4)
- **Assigned gate sibling:** `content/batches/2026-09-09-ganesh-10/blogs/happy-ganesh-chaturthi-wishes.json`
- **Verdict: ABORT.** Both halves of BRIEF §3 fail independently. No blog JSON was written.
- **Date of measurement:** 2026-09-10

---

## 1. Verdict in one paragraph

The reader intent is real and genuinely uncovered — none of the 36 live Ganesh
posts is written for the person *receiving* a wish. But the intent does not have
its own SERP. Nine of the ten organic results for `happy ganesh chaturthi reply`
are the same generic "Ganesh Chaturthi wishes" listicles that rank for
`happy ganesh chaturthi wishes`, which is the keyword our live sibling already
targets. Three of them are **byte-identical URLs** shared between the two
top-10s, which is BRIEF §3's blocking threshold. Separately, the live sibling has
already spent the reply frame, the reply-specific H2s, and the exact response-
obligation literature this assignment's research lane points at, under the same
first-party numbers — BRIEF §3's second, independent abort condition. The right
remediation is a section and two FAQs added to the live wishes post, not a second
page on the same SERP. Detail in §7.

---

## 2. Phase 0 — data gate (would have passed; recorded for completeness)

`content/facts.md`, regenerated 2026-09-09, was read. `npm run facts` was **not**
run, per BRIEF §1. At least three lines are relevant to a reply-shaped post and at
least two could have opened the body inside 150 words:

- `49.6% of shared pages are opened on a phone (22,817 of 46,005 views) — measured 2026-09-09`
- `Average views per created page: 11.8 — measured 2026-09-09`
- `96.0% of started pages are actually published and shared (3,737 of 3,894) — measured 2026-09-09`
- `Raksha Bandhan 2026 lead time, both rakhi collections, n = 89 pages, IST calendar days: 49.4% built on the festival day itself, 27.0% the day before, 5.6% two to three days ahead, 6.7% four or more days ahead, 11.2% after it had passed; median lead time 0 days — measured 2026-09-09`
- `No Ganesh Chaturthi page-creation data exists at all: the /happy-ganesh-chaturthi template went live 2026-09-10, four days before the festival — measured 2026-09-10`

Phase 0 was therefore **not** the blocker. The blocker is Phase 1/§3.

Worth recording: the lead-time line is the one first-party number that speaks
directly to *replying late* (median lead time 0 days; 11.2% of pages built after
the festival had passed). It is also the line most tightly capped — Raksha
Bandhan not Ganesh Chaturthi, n = 89 — and the live good-morning sibling has
already spent it on timing. So the single fact that would have differentiated a
reply post is both weak and taken.

---

## 3. Methodology disclosure — read this before trusting the counts

Two limitations, both recorded rather than hidden.

1. **`WebSearch` is US-locale only.** There is no `gl=in`. Every wave-3 post
   records this and this brief does too: an India-intent keyword's real SERP may
   differ from what was measured.
2. **`WebSearch` was unavailable at all.** This session had already spent its
   full budget (200 of 200 calls) before this assignment started, so the
   documented Phase 1 route was closed. Substituted engine: **Brave Search
   (`search.brave.com`, `country=in`)**, parsed from the `data-type="web"`
   result blocks so widget clusters (images, videos, discussions) are excluded
   from the organic count.

Engines tested and found unusable today, consistent with what other agents in
this batch reported:

| Engine | Result |
|---|---|
| Brave (`country=in`) | **Usable** — 296 KB, 20 parsed organic blocks. Used. |
| Google (`gl=in`) | 92 KB, one extractable domain — consent/JS wall |
| Bing (`cc=IN`) | 127 KB, zero `b_algo` blocks parsed |
| DuckDuckGo html + lite | HTTP 202, 14 KB challenge page |
| Mojeek | 5.5 KB, zero results |
| Startpage | 22 KB, one domain — captcha |
| Ecosia | HTTP 403 |

The BRIEF's stated fallback at exactly 2 shared results — a second search on a
differently-phrased query — was run anyway even though the count came in at 3,
because the primary engine was a substitute rather than the documented tool.
**Four differently-phrased reply-intent queries were run on Brave** (§5). All
four corroborate. Confidence in the abort is high; confidence in the exact
integer 3 is moderate, and the direction the corroboration points is the reason
that does not matter.

---

## 4. Phase 1 — the SERP for `happy ganesh chaturthi reply`

Top 10 organic, Brave `country=in`, 2026-09-10:

| # | Domain | Page | Reply-specific? |
|---|---|---|---|
| 1 | timesofindia.indiatimes.com | `/…/happy-ganesh-chaturthi-2019-wishes-messages-quotes-images-facebook-whatsapp-status/articleshow/70906235.cms` | No — wishes listicle |
| 2 | caratlane.com | `/blog/happy-ganesh-chaturthi-wishes-quotes-messages/` | No — wishes listicle |
| 3 | bestmessage.org | `/ganesh-chaturthi-wishes-reply/` | **Yes** |
| 4 | bloomsflora.com | `/blog/ganesh-chaturthi-wishes/` | No — wishes listicle |
| 5 | fnp.com | `/quotes/ganesh-chaturthi` | No — wishes listicle |
| 6 | timesofindia.indiatimes.com | `/…/happy-ganesh-chaturthi-2025-best-messages…` | No — wishes listicle |
| 7 | usekro.com | `/blogs/details/ganesh-chaturthi-wishes-in-hindi` | No — Hindi wishes listicle |
| 8 | timesofindia.indiatimes.com | `/…/happy-ganesh-chaturthi-2025-top-50-wishes…` | No — wishes listicle |
| 9 | timesofindia.indiatimes.com | `/…/happy-ganesh-chaturthi-2022-best-messages…` | No — wishes listicle |
| 10 | drikpanchang.com | `/greetings/ganesh-chaturthi/ganesh-chaturthi-messages-greetings.html` | No — messages/SMS list |

**1 of 10 results is written for the reply intent.** That single page was fetched
in full: `bestmessage.org/ganesh-chaturthi-wishes-reply/`, dated 22 August 2023.
It is an undifferentiated paste list of roughly two dozen thank-you lines with a
three-sentence intro, no headings beyond one H3, no data, no date reference, no
schema, no segmentation by who sent the wish. A well-built post would beat that
page on quality without difficulty.

**That is not what the gate asks.** The gate asks whether this keyword and the
sibling's keyword are one keyword. Nine of ten results say Google's and Brave's
current answer to "reply" is the wishes corpus — the corpus our live post is
already in.

---

## 5. Corroboration — four differently-phrased reply queries

Each run on Brave `country=in`, top 10 organic. Counting only reply-specific
pages:

| Query | Reply-specific results in top 10 | Everything else |
|---|---|---|
| `ganesh chaturthi wishes reply` | 1 (`bestmessage.org`, #3) | 9 wishes listicles — giva, caratlane, vaaree, bloomsflora, TOI ×2, fnp, hindustantimes, adobe |
| `reply to happy ganesh chaturthi message` | 1 (`bestmessage.org`, #1) | 9 wishes listicles — bloomsflora, TOI ×3, caratlane, economictimes, drikpanchang, goodreturns, chococraft |
| `how to reply to ganesh chaturthi wishes` | 2 (`bestmessage.org` #1, plus `tumblr.com/bestmessage/…` #2, a syndication of the same page) | 8 — caratlane, bloomsflora, TOI ×2, chococraft, brainly.in question, yummycake, drikpanchang |
| `happy ganesh chaturthi ka reply kya de` | 0 | 10 Hindi wishes listicles — usekro, TOI, livehindustan, quora, hindiiquotes, translate.google, webdunia, aajtak, jagran, jansatta |

Two findings worth keeping:

- **There is exactly one reply-specific page on the entire English-language
  SERP**, and one Tumblr syndication of it. The lane is empty because nobody has
  built for it — not because demand is absent.
- **The Hinglish variant is the most starved and the least separable.** `happy
  ganesh chaturthi ka reply kya de` returns *zero* reply-specific results and
  ten Hindi wishes listicles, plus a Quora question and a Google Translate proxy
  of an English page. The code-mixed phrasing is a genuine reader signal, and it
  currently resolves to the general Hindi wishes corpus with no reply content at
  all.

---

## 6. The gate, counted explicitly — all three siblings

Rule (BRIEF §3): count results shared between the two top-10s where the **domain
and the article identity are both the same**. Exclude `pinterest.com` and
`youtube.com` — a shared publisher ranking a different asset is a false merge
(the "Spotify precedent"). **3 or more shared = one keyword = abort.** At exactly
2 it is a judgment call requiring second-engine corroboration.

### 6a. vs `happy-ganesh-chaturthi-wishes` — the assigned gate — **3 shared. BLOCKING.**

Sibling keyword `happy ganesh chaturthi wishes`, top 10 organic, Brave
`country=in`:

| # | Domain | Page | Shared with reply? |
|---|---|---|---|
| 1 | adobe.com | `/in/express/discover/wishes/ganesh-chaturthi` | No |
| 2 | in.pinterest.com | `/shivangi69/happy-ganesh-chaturthi-wishes/` | *excluded (pinterest)* |
| 3 | pinterest.com | `/pin/whatsappganeshchaturthiwishes--605945324886184326/` | *excluded (pinterest)* |
| 4 | timesofindia.indiatimes.com | `/…/happy-ganesh-chaturthi-2022-top-50-wishes…` | Same domain, **different article** — not counted |
| 5 | cz.pinterest.com | `/pin/548946642100575927/` | *excluded (pinterest)* |
| 6 | caratlane.com | `/blog/happy-ganesh-chaturthi-wishes-quotes-messages/` | **SHARED — identical URL** |
| 7 | bloomsflora.com | `/blog/ganesh-chaturthi-wishes/` | **SHARED — identical URL** |
| 8 | in.pinterest.com | `/tbtbhanu/chathurthi-wishes/` | *excluded (pinterest)* |
| 9 | fnp.com | `/quotes/ganesh-chaturthi` | **SHARED — identical URL** |
| 10 | magnific.com | `/free-photos-vectors/ganesha-chaturthi` | No |

**Shared count = 3.** All three are byte-identical URLs, not merely shared
domains:

1. `https://www.caratlane.com/blog/happy-ganesh-chaturthi-wishes-quotes-messages/`
2. `https://www.bloomsflora.com/blog/ganesh-chaturthi-wishes/`
3. `https://www.fnp.com/quotes/ganesh-chaturthi`

The count was computed programmatically on normalised URLs rather than by eye.

**The count is deliberately conservative.** `timesofindia.indiatimes.com` appears
in both top-10s — four times in the reply list, once in the wishes list — but
with different `articleshow` IDs, so under the Spotify precedent it is a shared
publisher and not a shared article identity. Counting it would make the total 4.
It is excluded, and the gate still blocks at 3. There is no reading of the
evidence under which this keyword passes.

### 6b. vs `happy-ganesh-chaturthi-status` — **1 shared. Clear.**

Sibling top 10: fnp, adobe, meribadhai, TOI ×2, indianexpress ×2, mpanchang,
pinterest ×2 (excluded).

Shared: `https://www.fnp.com/quotes/ganesh-chaturthi` — **1**. Below threshold.
The status keyword has genuinely separated itself; that post is not the problem.

### 6c. vs `ganesh-chaturthi-good-morning-wishes` — **2 shared. Judgment zone, moot.**

Sibling top 10: joliecarte ×2, fnp, goodlightscraps, in.pinterest (excluded),
indiatvnews, goodmorningsite, timesnownews, morninggreetings, usekro.

Shared — **2**:

1. `https://www.fnp.com/quotes/ganesh-chaturthi`
2. `https://usekro.com/blogs/details/ganesh-chaturthi-wishes-in-hindi`

Exactly 2 is the judgment band. It is moot: the assigned gate in §6a already
blocks at 3. Recorded for the ledger, and worth noting that both shared results
are the same undifferentiated wishes listicles that leak across every query in
this cluster — `fnp.com/quotes/ganesh-chaturthi` alone appears in all four
top-10s measured, which is itself a sign of how thin the corpus is.

### 6d. Second, independent abort condition — substantive duplication

BRIEF §3 is explicit that a clean SERP gate is not sufficient. This one fails
too, and it would fail even if the SERP count had come in at zero.

`happy-ganesh-chaturthi-wishes.json` was read in full. It has already spent the
reply lane:

- Its **H1 is "Happy Ganesh Chaturthi Wishes People Actually Reply To."** The
  reply frame is the live post's own title.
- Its `metaTitle` is "Happy Ganesh Chaturthi Wishes — 7 That Don't Read
  Forwarded".
- It carries an H3 **"7. The wish that invites a reply"** and a full H2
  **"Which Ganesh Chaturthi wish format actually gets a reply"**.
- Its stated angle is that a wish is "something the recipient receives rather
  than a list to copy" — which is the receiving-side framing this assignment was
  supposed to own.
- It already answers two of the reply post's natural FAQs: "Is it rude to
  forward a Ganesh Chaturthi wish?" and "Can I send Ganesh Chaturthi wishes
  after the first day?"

And it has spent the documents this assignment's research lane points at. The
lane given was *reciprocity norms in greeting exchange; politeness and response
obligation*. The live sibling's five sources include:

| Spent source | What it says | Why that closes the lane |
|---|---|---|
| `journals.plos.org/…pone.0326189` | n=260 across 15 conversations; messages with emojis rated more **responsive**, and perceived responsiveness predicted closeness | This *is* the response-obligation literature |
| `www.nature.com/articles/s44271-024-00075-8` | Fewer than a third reached out to an old friend even when willing (27.8%/36.8%, Ns=453/604) | The reciprocity-failure finding |
| `journals.plos.org/…pone.0288773` | 20,760 WhatsApp group chats; greetings 61.8% of cohesive messages | The phatic-greeting corpus |
| `arxiv.org/abs/2407.08172v1` | 604 forwarded-many-times items; greetings + religious + entertainment over a third | Forwarded-broadcast behaviour |

`journals.plos.org` is at the cap of 3 posts, `arxiv.org` at 5, `nature.com` at
4, `en.wikipedia.org` at 6, `pmc.ncbi.nlm.nih.gov` at 7 — all closed per BRIEF
§4. `en.wikipedia.org/wiki/Phatic_expression`, the single most on-point entity
reference for a reply post, is already spent by the good-morning sibling.

So a reply post would have had to reach the same conclusions from *different*
documents, on the same SERP, using the same first-party numbers (49.6% mobile
open, 11.8 views per page — both already in the sibling's `factsUsed` and both in
its opening 150 words). That is the definition of the duplication §3 describes.

### 6e. Format risk — the check the assignment asked for

The assignment said: if this becomes the wishes post with "reply" prepended to
each line, abort. Tested honestly against the draft outline that survived §6a–d.
The three-way asymmetry named in the assignment — replying to a forwarded
broadcast, replying to something clearly written for you, replying late — is a
real and interesting distinction, and it is the strongest thing this keyword had.
But two of its three legs are already load-bearing in the live sibling (the
forwarded-broadcast leg is that post's H2 "Why the same eleven lines reach you
from nine different people"; the written-for-you leg is its H3 "2. The named wish
for one person"). Only the *replying late* leg is genuinely unspent, and the one
first-party number that supports it is the n=89 Raksha Bandhan lead-time line,
which the good-morning sibling has already used and which BRIEF §1 forbids
deriving any rate from. One unspent leg on a shared SERP is a section, not a
post.

---

## 7. What to do instead — the useful output of this abort

The demand is real: `poolRelevance` 561, a coherent six-variant family in the
harvested pool, and exactly one thin 2023 page serving it. Wasting that is not
the recommendation. Folding it into the page that already owns the SERP is.

**Recommended: amend `content/batches/2026-09-09-ganesh-10/blogs/happy-ganesh-chaturthi-wishes.json`.**
Its title already promises the reply frame, so this closes a gap between its
promise and its body rather than bolting on a new topic.

1. **Add one H2: "What to reply when someone wishes you first."** Place it after
   the existing "Which Ganesh Chaturthi wish format actually gets a reply" H2,
   which sets up the need. Content is the three-way asymmetry, one short
   paragraph each: a forwarded broadcast earns a short warm line and nothing
   more; a wish clearly written for you earns a reply that names the thing they
   named; a late reply should own being late rather than pretending it isn't.
   The one thing to state plainly is what the SERP's twenty-five thank-you lines
   never say — **"same to you" is what everyone types and what nobody wants to
   receive.**
2. **Add two FAQs** to the same file's `article.faqs` (it currently has 10, so
   there is room inside the 8–12 band):
   - *"What do I reply when someone sends me Happy Ganesh Chaturthi?"*
   - *"Happy Ganesh Chaturthi ka reply kya de?"* — keep the code-mixed phrasing
     verbatim. It is how the query is actually typed, it returns zero
     reply-specific results today, and sanitising it into English throws away the
     only variant with no competition at all.
3. **Do not** create `blogs/ganesh-chaturthi-wishes-reply.json`, and do not add
   the slug to `batch.json`. Keeping the slug unpublished leaves it available if
   the SERP ever separates.
4. **Re-test in 2027.** If a reply-specific corpus develops — the trigger is
   fewer than 3 shared results against `happy ganesh chaturthi wishes`, or more
   than two genuinely reply-specific pages appearing in the top 10 — the keyword
   becomes viable as its own post. Today it is one keyword with the sibling.

Note that amending the sibling is a **cross-batch edit to a committed, live
post** and therefore outside this agent's assignment. It is a recommendation for
the batch owner, not a change made here. No file outside this batch was touched.

---

## 8. Phases not run

Phases 3 through 7 were not run, because §3 blocks before drafting and the BRIEF
is explicit that an abort writes this brief and no blog JSON.

Specifically **not** produced: `batchMeta.sources` (no fresh sources were
fetched or verified beyond the one competitor page in §4, which is a competitor
and would never be cited), `factsUsed`, `structuredData`, FAQs, the §0 social
block, and the audit report. The 50-item publish checklist was not run, since
there is no draft to run it against — recording a 50-item audit of a
non-existent post would be the kind of green count BRIEF §6 warns about.

The research lane was probed only far enough to establish §6d — that the
reciprocity and response-obligation documents a reply post would need are
already spent by the gate sibling. The four search terms the assignment named
(`ritual greeting reciprocity`, `politeness theory response obligation`,
`phatic communication messaging study`,
`code-switching in Indian digital communication`) were **not** run as literature
searches, because the abort was already established on two independent grounds
and finding fresh sources could not have changed either. That is a deliberate
stop, not an omission.

---

## 9. Files

- **This brief:** `content/batches/2026-09-10-ganesh-10d/research/ganesh-chaturthi-wishes-reply.md`
- **Blog JSON:** none, by design.
- **Raw gate data:** the four parsed top-10s and the computed shared counts were
  kept in the session scratchpad as
  `ganesh-chaturthi-wishes-reply-gate.md` (session-local, not committed).
