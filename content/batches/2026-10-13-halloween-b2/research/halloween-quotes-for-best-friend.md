# Research brief: halloween quotes for best friend (row 89)

Slug `halloween-quotes-for-best-friend` · absorbs "best friend halloween quotes" · theme friends · plan weak 7/10 · written 2026-10-13.

## Phase 0: first-party data
- `content/facts.md` was read directly. `npm run facts` was not run, per BRIEF §3.
- No Halloween usage data exists. The post uses three platform-wide lines, labelled as such: 48.3% phone opens, 11.1 views per page and 38.5% password-protect.
- The template spec (`template-spec.md`) is used for /happy-halloween bestie mode and premium features only.

## Phase 1: SERP
- **Searches used: 2.**
  - WebSearch (US index), 1 call. It returned 9 thin results: static.intrafocus.com ×2 (hijacked-subdomain spam), id.monacor.de (spam), updf.com ×3 (a PDF-tool blog that returned 403, so it was judged from its snippet), bestlifeonline.com ×2 (2022 general list) and ibtimes.co.uk (2016 general list).
  - The coordinator reported that WebSearch had hit its cap, so the SERP was measured a second time on DuckDuckGo HTML. Treat this as **lower confidence**: it is not Google.
- **DuckDuckGo top 9:** wishesmsg.com (wishes farm), whosentthat.com (e-card blog), inamatchbox.com (UK gift shop blog), positivityblog.com ×2, friendshipsy.com (403), sparklequote.com, famsolute.com and cozywisher.com.
- **Weak count: 8 of 9.** Every result is a small blog or a content farm. positivityblog is the only mid-authority site. Firecrawl is disconnected. The keyword is absent from `serps.md`.

| Page | Words | Structure | Direct answer | Data / dates | Format | Optimising for |
|---|---|---|---|---|---|---|
| whosentthat.com messages for friends | ~1,356 | H2 by tone: spooky, funny, cute, short, heartfelt, long-distance, captions, work | after an intro | none, "2026" in title | lists, e-card CTA | messages, not quotes |
| inamatchbox.com 39 quotes about friendship | ~2,100 incl. shop chrome | single list | after intro | none | list, shop upsell | gift-shop traffic |
| positivityblog.com 101 Halloween quotes | ~2,300 | H2: best, funny, short, kids, letter board | after intro | none | attributed list | general Halloween quotes |
| famsolute.com best friend Halloween quotes | ~1,980 | H2: playful, sweet, funny, short, adventures, how to use, importance | after intro | none, "importance" section unsourced | lists with "meaning" glosses | exact keyword |
| bestlifeonline.com 79 Halloween quotes | long | H2: cute, funny, scary… | late | 2022; Watterson line credited without a source | attributed list | general Halloween quotes |

## Phase 2: gap
- **Table stakes:** tone groups (funny, sweet, short), long-distance lines, and caption or card use.
- **Gap:** none of these pages verifies an attribution. Bestlife misspells Poe as "Allen". None cites research on why friendship matters, none gives a length-by-use table, none flags that the most-shared "best friend" Halloween line (Watterson) is from an in-copyright comic, and none has public-domain friendship classics with edition numbers.
- **Fan-out:** short captions, funny lines, a long-distance bestie, a group or squad, famous quotes, whether lines can be used without credit, and whether friendship affects health.
- **Angle:** the post wins by being the only best-friend Halloween quote page that pairs all-original lines with public-domain friendship classics checked word for word against Gutenberg, a tone-to-use length table and open-access friendship research.

## Phase 3: sources (all fetched)
1. **Holt-Lunstad, Smith & Layton 2010**, *PLOS Medicine*, CC BY, [PMC2910600](https://europepmc.org/article/PMC/PMC2910600). Full text read: 148 studies, 308,849 participants, OR 1.50 (a 50% higher likelihood of survival), mean follow-up 7.5 years.
2. **Kim, Chopik, Chen, Wilkinson & VanderWeele 2023**, *Epidemiology and Psychiatric Sciences* (Cambridge), CC BY, [PMC10689060](https://europepmc.org/article/PMC/PMC10689060). **Only the abstract was read**: 12,998 HRS adults over 50, 35 outcomes; stronger friendships were linked to lower mortality risk and better psychosocial outcomes, and also to more smoking.
3. **Dunbar 2025**, *Annals of the New York Academy of Sciences* (Wiley), CC BY, [PMC11918532](https://europepmc.org/article/PMC/PMC11918532). Full text read: friendship layers of 1.5, 5 and 15, and emotional closeness that declines within a few months without meeting.
4. **Gutenberg #2944**, Emerson, *Essays: First Series* (1841, year confirmed on Wikipedia). Three lines grep-verified: "A friend is a person with whom I may be sincere. Before him I may think aloud.", "the only way to have a friend is to be one" (mid-sentence) and "a friend may well be reckoned the masterpiece of nature".
5. **Gutenberg #2808**, Cicero, *Treatises on Friendship and Old Age*, translated by E. S. Shuckburgh. De Amicitia dates to 44 BC (Wikipedia). Section 6 has "halving and sharing"; section 7 has "second self".
6. **Gutenberg #1524**, *Hamlet* I.iii, the "hoops of steel" lines, verified verbatim.

- **Collision checks:** none of these sources appears in either Halloween batch. capcheck is clean for all six. PMC10689060 or PMC11918532 was used once in the separate navratri-partner-b1 batch, which has its own cap. The sibling papers PMC4626528 and PMC12217408 are avoided.
- **Avoided publishers:** no Taylor & Francis, SAGE, arXiv or Frontiers source is cited. Hall 2018 ("How many hours…") is a SAGE paper and was rejected.
- **Wikipedia:** used only as `sameAs` targets, verified through the API with paired QIDs: Friendship Q491, Halloween Q251868, Essays: First Series Q5399394, Laelius de Amicitia Q675210 and Hamlet Q41567.

## Overlap and hygiene
- 74 lines (62 originals, 6 classics and 6 attribution lines) were checked with 5-gram overlap against all 89 blog files in b1 and b2, including halloween-messages-for-best-friend, halloween-captions-for-best-friends, witch-quotes, vampire-quotes, halloween-quotes and halloween-costumes-for-best-friends. After rewrites there are **0 overlaps**. Four collisions were rewritten: "light a candle for every", "you're the only one I'd", "masks come off at midnight" and "make the dark feel like".
- The prompt asked for 55–70 originals. The post has 62, cut from 66 to stay under the 1,800-word ceiling.
