# Research brief: halloween costumes with no mask

Row 107 · slug `halloween-costumes-with-no-mask` · theme costume · plan weak 5/10 · absorbs "halloween costumes without mask" · written 2026-10-13

## Phase 0: first-party data
- facts.md was read by hand. `npm run facts` was not run, per BRIEF §3. There is no Halloween usage data.
- Cited platform-wide lines, each labelled in the body as platform-wide:
  - 48.3% phone opens: a costume photo is mostly seen as a small thumbnail.
  - 11.1 views per page.
  - 90.9% publish rate.
- The template spec is a product fact. It does not count toward the three-fact minimum.

## Phase 1: SERP
I ran one search: WebSearch (US index), `halloween costumes with no mask`. Firecrawl was not used.

| # | URL | Type | Fetched? | Notes |
|---|---|---|---|---|
| 1 | static.intrafocus.com/?p=29334 | hijacked-subdomain spam | no (spam) | "7+ Spooky Halloween Costumes No Mask Ideas"; weak |
| 2 | devservices.eveuniversity.org/43612-… | hijacked-subdomain spam | no (spam) | weak |
| 3 | thenewshouse.com, "Turn your COVID-19 mask into your Halloween costume" | 2020 student news | yes | Opposite intent: how to hide a face mask inside a costume. Ideas: Grey's Anatomy scrubs, The Purge, morph suit. Dated 25 Oct 2020. No table, no FAQ, no sources. Weak |
| 4 | forwardme.com, "halloween costume shopping 2020" | 2020 retail blog | 403 (snippet only) | Pandemic framing. Weak |
| 5 | northbynorthwestern.com, "last minute masked halloween costumes" | 2020 student mag | 404 | Masked intent. Weak |
| 6 | theappalachianonline.com, "COVID-conscious Halloween costumes" | 2020 student paper | yes | Sheet ghost, surgeon, cowboy bandana, bank robber, clown mask, mummy, Purge, cat drawn on a mask. Every idea hides a face mask, so the intent is opposite. ~500 words. Weak |
| 7 | bhsinsight.com, "Mask-Friendly Halloween Costumes" | 2020 high-school paper | yes | Health-care hero, cat on mask, ghost, cowboy, Spring Breakers, robber. Weak |
| 8 | dev.calfaucets.com/…no-costume-halloween-ideas | hijacked-subdomain spam | no | weak |

**Weak count: 8 of 8 results returned, 9 including the duplicate newshouse URL.** None of the results serves the maskless intent. The SERP mixes up "mask" meaning a costume mask with "mask" meaning a COVID face mask. That confusion is the gap. Gate 4 passes.

## Phase 2: gap
- **Table stakes (from intent, since the SERP has none):** a list of ideas, plus face paint as the substitute for a mask.
- **The gap:** none of the results says why people skip masks: visibility, glasses, breathing, sensory comfort, house rules, photos. None groups ideas by what replaces the mask. None has a glasses verdict, cost estimates, venue rules, or safety-body guidance.
- **Stale data:** every competitor is from 2020.
- **Fan-out sub-queries, each mapped to an H2 or FAQ:**
  - What counts as maskless?
  - Why skip a mask?
  - Which costumes work with glasses?
  - Cheapest maskless costume
  - Disney or park mask rules
  - Is face paint safe?
  - Kids who hate things on their face
  - Props instead of weapons
  - Do masks hide emotions?
- **Angle:** see `batchMeta.angle`.

## Phase 3: sources (all fetched 2026-10-13)
1. **AAP, HealthyChildren.org, Halloween Fun & Safety Tips.** Last updated 9/29/2026.
   - Says to consider non-toxic makeup and decorative hats as safer alternatives to masks.
   - Hats should not slide over the eyes.
   - Avoid sharp or long swords, canes or sticks.
   - Child pedestrian injuries are more likely on Halloween than on any other night.
   - Full page read.
2. **FDA, Novelty Makeup.** First posted 25 Sep 2001; current as of 22 Nov 2022.
   - Face paint lets you see better than a mask.
   - A mask can make it hard to watch for cars.
   - Dab new products on your arm for a couple of days first.
   - Full page read.
3. **Grundmann, Epstude & Scheibe 2021, PLOS ONE** (PMC8064590, CC BY). Peer-reviewed, open access, preregistered, n=191 German adults.
   - Emotion-recognition accuracy was 69.9% for unmasked faces and 48.9% for masked ones. Read in the full-text Results section.
   - Caveat stated in the body: the masks were lower-face medical masks, not costume masks.
4. **Libby & Scarince 2025, PLOS ONE** (PMC12422498, CC BY).
   - Accuracy was lower for masked faces. Masked disgust and sadness showed the biggest rise in confusion.
   - **Only the abstract was read.**
5. **Walt Disney World, Mickey's Not-So-Scary Halloween Party page** (server-rendered).
   - Says "Don a cool costume for this occasion—following a few guidelines" and links to the official costume guidelines.

**Venue rules not reachable.** These pages all return a script-only shell with no policy text, using both ctx_fetch_and_index and a raw fetch:
- disneyworld.disney.go.com/faq/parks/dress/
- disneyland.disney.go.com/faq/parks/dress-code/
- halloweenhorrornights.com/orlando/faq.html
- universalorlando.com/web/en/us/park-rules
- universalstudioshollywood.com park-rules
- knotts.com/park-rules and the Scary Farm pages
- cedarpoint.com/park-rules

The post says so and prints no venue rule.

**Searches tried in findpapers** (no search budget used):
- "face masks emotion recognition children": Frontiers hits rejected (banned).
- "face mask peripheral visual field": only glaucoma perimetry artefacts, off-topic.
- "face covering impairs facial expression recognition"
- "costume mask visibility pedestrian": nothing usable.

**Caps:** capcheck was clean. Neither PMC id appears in b1 or b2. No Taylor & Francis, Sage, Frontiers, Elsevier or arXiv sources.

## Brief claims checked
- The prompt asked for 28–34 ideas. The post has 30, in 6 groups. The table groups them into 5 rows (hood and hair share a row) because of the 3–5-row rule.
- 5-word overlap against the b1, b2 and b3 files was run. Phrasings shared with siblings were rewritten. The remaining matches are spec and fact phrases such as "up to six photos" and "one-person greeting page".
- None of the 30 costume ideas repeats an idea from the named siblings. The sheet ghost, black cat, witch, vampire, mummy, skeleton, pirate, wizard, detective and mime were all deliberately avoided.
