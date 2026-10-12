# Research brief: halloween memes (row 33)

- **Slug:** `halloween-memes` (free in Strapi, checked 2026-10-12: 0 matches)
- **Also covers:** funny halloween memes
- **Theme / archetype:** jokes; plan said weak 6/10
- **Category / templates:** festive-beats; /happy-halloween, /happy-halloween-premium

## Phase 0: first-party data
There is no Halloween usage data in facts.md, so none is claimed. I used four platform-wide lines (2026-09-24 vintage) and labelled each one platform-wide in the body:
- 48.3% of shared pages opened on a phone, used in the intro and in the how-to step about legibility
- 11.1 average views per created page, used in the intro and the table
- 48.4% of views on a touch device, used in the how-to
- 90.9% of started pages published, used in the table and the closing section

The template spec is first-hand product fact. Only spec features are described: up to 6 photos, knock three times, carve a pumpkin, letter by flashlight, "Will you be my boo?" plus the bestie/family/kids modes, an email on the first answer, the 1080x1920 Boo License, and PT5M. For premium: a 60 s voice note, 12 photos, an unlock time, and PT10M.

## Phase 1: SERP
I ran 1 Firecrawl search (`halloween memes`, location United States, limit 10, web only). A second Firecrawl search was used for research (Frightgeist on blog.google). Total: 2 Firecrawl searches and 0 WebSearch.

| # | URL | Type | Weak? |
|---|---|---|---|
| 1 | pinterest.com/mrssah/halloween-meme | UGC pin board | weak |
| 2 | theinappropriategiftco.com "30 inappropriate Halloween memes" | gift-shop blog, image list (~867 words, 69 imgs) | weak |
| 3 | boredpanda.com "29 hilarious Halloween memes" | image gallery, ~30 reposted images with vote points | strong (authority) |
| 4 | gettyimages.com/photos/halloween-memes | stock search page | weak (wrong intent) |
| 5 | facebook.com/halloweenmemes78 | fan page | weak |
| 6 | glendalehalloween.com/halloween-memes | costume-store page, ~1,600 words with nav, 27 imgs | weak |
| 7 | yahoo.com (Seventeen syndication) "73 hilarious Halloween memes" | image gallery | strong (authority) |
| 8 | reddit.com r/halloween "Day 6 of posting memes" | UGC thread | weak |
| 9 | pinterest.com/ideas/meme-costume-halloween | UGC; different intent (meme costumes) | weak |
| 10 | aol.com (Bored Panda syndication) "50 Halloween memes" | image gallery, 79 imgs, dated 24 Oct 2024 | strong (authority) |

**Weak count: 7 of 10.** The plan said 6.

### Top-5 analysis
I fetched Bored Panda, Glendale, Yahoo and AOL with ctx_fetch_and_index. The gift-co page returned 429 through ctx_fetch, so I fetched it with a plain JS fetch and scanned it with keyword and heading counts only.

| Page | Words / format | Where the answer is | Data cited (date) | Copyright / how-to / FAQ |
|---|---|---|---|---|
| Bored Panda | ~30 reposted meme images with a two-line intro | none, just a gallery | none | none |
| Gift co | ~870 words, 69 images, "inappropriate" angle | none | none | none |
| Glendale Halloween | gallery inside a store page | none | none | none |
| Yahoo/Seventeen | 73 images, intro paragraph | none | none | none |
| AOL/Bored Panda | 50 images, plus Drive Research 2024 spend stats and Cognitive Market Research CAGR | none | **2024 data, stale** | one "how to make" mention, no method |

**Table stakes:** the recurring jokes (early spooky season, costume fails, candy, the Christmas switch, the skeleton) and a "funny" register.
**Gap:** no page explains the formats in words. None gives original captions, a method for making your own, or the copyright question that a reader reusing images faces. Every page reposts other people's images (Bored Panda credits Instagram accounts), and AOL's market data is from 2024.
**Fan-out sub-queries:** what is a Halloween meme; the popular formats; how to make one; caption length; fair use and screenshots; why candy corn / the skeleton; relatable vs funny; clean memes for kids and work; sending one to one person.

**Angle:** this post wins by being the only top result that describes the recurring Halloween meme formats in words, gives 36 original clean captions across those formats, explains the U.S. Copyright Office fair-use factors, and ties caption length to SubhSandesh's 48.3% phone-open rate.

## Phase 3: sources (all fetched)
1. **copyright.gov "More Information on Fair Use"**: the four Section 107 factors, a case-by-case test, "no formula" for a safe amount, and no individual legal advice. The page shows "Index last updated May 2021" and has no publication date, so datePublished is omitted.
2. **blog.google Frightgeist 2025** (9 Oct 2025): the 12-foot skeleton has been a top trending search since it went viral in 2020, and "dill pickle candy corn" was a breakout search. It is free for siblings according to BRIEF §9. This is the one generic or context source, and it fails the swap test (logged in the audit).
3. **Jach, Lenart, Kocur & Wardawy-Dudziak 2026**, Current Issues in Personality Psychology 14(2):116-125 (Europe PMC PMC13392671, epub 11 Jun 2026). n=225 Polish adults. Procrastination memes were rated the most relatable, and funniness and relatability were rated separately. I read the full text. The licence is CC BY-NC-SA, so the paper is cited and linked only and nothing is reproduced.
4. **An, Jin, Xu, Xia & Luh 2026**, Behavioral Sciences 16(9):1570 (MDPI; Europe PMC PMC13603214, 4 Sep 2026). Survey n=356 and experiment n=393. Stress recall raised ratings and choice of ugly-cute images. I read the full text. Licence is CC BY. This is a different paper from the capped PMC13603195.
5. Wikipedia "Image macro" (Q6002242) is used to disambiguate the term only.

Findpapers queries: "internet memes humor sharing social media study", "why people share memes humor", "image macro meme template remix", "relatable memes humor appreciation experiment", "memes coping stress pandemic humor". I rejected Social Media + Society 2020/2025 (Sage, banned), Myrick et al. 2022 (APA, paywalled), Semiotica 2025 (De Gruyter, no OA) and the firstmonday option (cap: used once already, and it was not needed).

Caps: capcheck showed no conflict. copyright.gov, blog.google and both PMC ids are in no other post. europepmc.org is cap-exempt.

## Brief claims checked
- The suggested "find an open-access alternative to Shifman" worked: both papers are open access and from 2026.
- The task suggested PLOS/MDPI/Europe PMC. MDPI is linked through Europe PMC, so mdpi.com itself is not used.
- AOL's 2024 spend figures (Drive Research) are stale and come from a competitor, so they are not used.
