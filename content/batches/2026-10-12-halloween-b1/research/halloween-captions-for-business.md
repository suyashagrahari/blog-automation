# Research brief: halloween captions for business

Row 49 · slug `halloween-captions-for-business` · theme captions · also covers "halloween instagram captions for businesses" · written 2026-10-12

## Phase 0: first-party data

facts.md has no business-account or Halloween data. Used (verbatim in `factsUsed`):
- 48.3% phone-open share (platform-wide, SubhSandesh pages, not Instagram; labelled as ours in the body)
- Raksha Bandhan 2026: 86.1% of the 79 on-time pages built within 24 hours. Disclosed in the body as a different festival with a small n.
- 11.1 average views per created page (used for the one-customer thank-you)

None of these numbers measures business captions, which is why the table has no first-party column (recorded as a failure in the audit).

## Phase 1: SERP

Firecrawl MCP was disconnected, so I used **WebSearch (US-served index, lower confidence)**: 1 search for the keyword and 1 for the camel-case accessibility source. That is 2 of 2. The keyword is not in `serps.md`.

| # | URL | Fetched | Words | Structure | Direct answer | Data cited (date) | Notes |
|---|---|---|---|---|---|---|---|
| 1 | pippit.capcut.com/templates/halloween-caption-ideas | 404 | n/a | n/a | n/a | n/a | Tool template page, dead link. Weak |
| 2 | wordstream.com/blog/halloween-instagram-captions | 403 (both fetchers) | n/a | n/a | n/a | n/a | Strong domain. Snippet shows generic puns |
| 3 | lilachbullock.com (Spooky Halloween Captions for Instagram) | 200 | ~2,800 | H2: why captions underperform, puns, Reels, "Business and brand captions", hashtags, timing, FAQ | Short answer in intro | n/a | Consultant blog. Business is one section. Weak |
| 4 | digitalmarketingagency.sg/blog/halloween-captions | 200 | ~3,100 | 130+ captions by tone; "by industry" covers only food, retail, beauty and fitness; tone/use/platform table; FAQ incl. "brand-safe" (keep it fun, not gory) | Intro | NRF-style US spend stats ($13.1B 2025) | Agency blog. Closest competitor. Weak |
| 5 | nestscale.com/blog/halloween-social-media-posts.html | 200 | ~3,400 | 8 post ideas, slogans by product (apparel, beauty, decor, snacks), e-com product ideas, pet supplies | Buried | Year-stamped 2025 | Shopify-app SaaS blog. Weak |
| 6 | tagembed.com/blog/halloween-social-media-marketing-ideas | 200 | ~1,800 | 5 tactics (contest, hashtag campaign, embed feed) | Buried | 2021–2023 | Widget SaaS blog. Weak |
| 7 | expertbeacon.com/halloween-instagram-captions | 403 | n/a | n/a | n/a | n/a | "Small-team ROI playbook". Unread |
| 8 | adobe.com/uk/express/discover/quotes/halloween | not fetched | n/a | n/a | n/a | n/a | Known incumbent, strong |

Only 9 results came back (two from nestscale). By my count, 5 or more are weak (pippit, lilachbullock, dma.sg, nestscale, tagembed, plausibly expertbeacon), which agrees with the plan's 4/10. **Gate 4 passes.** All of these are competitors (marketing SaaS, agencies and Adobe Express), so none is cited.

## Phase 2: gaps

- **Table stakes:** short, punny and promo captions; hashtags; a tone match to the brand.
- **Gap (checked by keyword scan of 3 fetched pages):** none mention alt text, accessibility, camel case or trademarks. None cover dental/healthcare, real estate, B2B or nonprofit captions. None cover responsible-drinking wording for bars, and none give evidence for tone choices. dma.sg's "brand-safe" FAQ is one sentence long.
- **Stale data:** dma.sg relies on US spending stats. This post does not compete on spend figures (nrf.com is full anyway).
- **Fan-out sub-queries:** captions by industry; how many emojis; can I use movie names; B2B on Halloween; healthcare tone; bar wording; accessible hashtags; alt text; when to post; thanking one customer.
- **Angle:** see `batchMeta.angle`.

Sibling separation:
- `halloween-marketing-ideas` covers strategy, FTC rules and CAN-SPAM. I repeated none of it and cited no FTC source.
- `halloween-wishes-for-instagram` covers personal posts and the help.instagram pages. I did not use help.instagram.
- `halloween-puns-for-work` covers internal puns.
- `halloween-captions-for-stories` covers Stories.

A 5-gram scan of every caption against all sibling bodies found 0 overlaps, after one generic phrase was rewritten.

## Phase 3: sources (all fetched)

1. **Deng (2019), PhD thesis, Carleton University.** carleton.scholaris.ca. I downloaded the full PDF via the DSpace API and read the relevant sections:
   - 728 of 4,549 brand Facebook posts (16%) used emojis.
   - Emojis improved B2C engagement intention but showed no such relationship for B2B posts.
   - Informal punctuation was positively related to comments (15,496 posts, 120 pages).
   - Licence: link-only sharing. The post cites findings and links; nothing is reproduced.
2. **Hu et al. (2026), Behavioral Sciences 16(4):509.** MDPI, CC BY, via Europe PMC (exempt). Full text read. This is a PRISMA review of 32 studies. Humor raised engagement on health posts, but it can lower perceived risk and credibility and undermine seriousness.
3. **USPTO, Likelihood of confusion.** Marks need not be identical to be confusingly similar; sound, appearance, meaning or commercial impression can each be enough. uspto.gov is now in 2 posts and capcheck lists it as "one slot left". The page carries no date.
4. **W3C WAI Images Tutorial.** Exempt. Images must have text alternatives describing their information. The page shows "Updated 08 April 2026", so the citation uses dateModified only.
5. **Iowa Digital Experience, Accessibility Tips for Social Media** (dxtraining.iowa.gov). Recommends camel-case hashtags (#SocialMediaTips) and one emoji at the start or end of a sentence. The page carries no date.

Searches tried in findpapers:
- "brand Instagram post engagement humor"
- "humor brand social media posts engagement"
- "firm-generated content social media engagement"
- "Instagram caption hashtags emoji engagement brand posts"
- "humorous advertising sharing social media"
- "alt text images social media accessibility blind users"
- "brand posts likes comments content characteristics"
- "small business social media posts engagement"
- "holiday seasonal social media posts brand engagement"

Rejected sources:
- J Brand Management 2021 (Springer, not OA, so I kept the Springer slot unused).
- Journal of Consumer Marketing 2025 memes paper (Emerald, paywalled).
- EBLIP 2024 review of Hill & Oswald: same underlying paper as the wishes-for-instagram source, and CC BY-NC.
- Taylor & Francis and SAGE hits (banned).

## Brief claims checked

- "uspto.gov is used once, so one more allowed": confirmed. Capcheck now shows 2 posts, one slot left.
- The coordinator's late note says ftc.gov is full. This post does not cite it.
- `batch.json` lists fewer blogs than are on disk, so verify-batch flags "blogs != files on disk". That belongs to the orchestrator and I did not edit it.

## Mandatory link handling

The Halloween card is framed as **not a marketing tool**. It is offered for an owner thanking one regular. There is no customer mode, so bestie is named as the nearest fit. The question is editable up to 60 characters, and the interface is English only.

The premium version is mentioned for its reply box (280 characters) and its voice note (60 seconds). Only template-spec features are described.
