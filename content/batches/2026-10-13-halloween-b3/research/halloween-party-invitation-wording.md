# Research brief: halloween party invitation wording (row 122)

- Slug: `halloween-party-invitation-wording` (free in Strapi, checked 2026-10-13). Absorbs "halloween party invite wording", "halloween party invite".
- Category `festive-beats`; templates `/happy-halloween` (mandatory, described as a one-person greeting, not an invitation tool) and `/date-invitation` (oneOf, offered only for inviting ONE date).
- Siblings: b1 `halloween-party-ideas` (timing / lead-time advice not repeated; its three invite lines not reused), b1 `halloween-party-themes` (dress-code lines not reused), b3 `halloween-puns-for-party-invite` (puns kept light here). 5-word overlap check run against all b1, b2 and b3 posts: no invitation, allergy, plus-one or chase line overlaps; remaining overlaps are template-spec feature phrasing and facts.md wording shared by every post.

## Phase 0: first-party data
No Halloween or invitation data exists in facts.md (BRIEF §3). `npm run facts` NOT run. Used, labelled in prose:
1. 48.3% of shared pages opened on a phone (platform-wide) — why the date and costume rule go in the first two lines.
2. Raksha Bandhan 2026 lead time, 49.4% built on the day itself (n = 89, labelled a different occasion).
3. 86.1% of on-time Raksha Bandhan pages built within 24 hours (same caveat) — last-minute invites section.
4. 11.1 average views per page — why a one-person page is not a guest-list tool.

## Phase 1: SERP (searches used: 1 WebSearch, US index; Firecrawl 0)

| # | URL | Type | Structure | Direct answer | Data / dates | Format | Weak? |
|---|---|---|---|---|---|---|---|
| 1 | jotform.com/blog/halloween-party-invitation-wording/ | Form/RSVP SaaS (competitor) | H1, "line by line" H2 with H3 per detail (host, date, location, costumes, age rating, food, RSVP, notes), template, product pitch | Quick-steps checklist near top | Updated 23 Jul 2026; no sources | Example lines per detail, RSVP-tool upsell | No (strong domain) |
| 2 | onlyoffice.com/blog/2025/10/halloween-invitations | Office-suite blog (template upsell) | Numbered how-to steps, 25 wording ideas, template instructions | Generic intro, steps follow | 10 Oct 2025; no sources | Short lines, screenshots | Partly (off-topic brand) |
| 3 | shutterfly.com/ideas/halloween-party/ | Card retailer (competitor) | H2 per audience (adult, kids, etc.), bulleted one-liners plus an example invite | One-line intro | Undated; no sources | Lists of taglines | No |
| 4 | static.intrafocus.com/?p=66879 | Hijacked-subdomain spam | — | — | — | — | Yes (not analysed) |
| 5 | greenvelope.com/blog/?p=12508 | E-invite SaaS (competitor) | H2 tone groups, 12 design showcases | Tone advice after intro | Updated 12 Oct 2026; no sources | Lines plus product cards | No |
| 6–9 | netbox.point-broadband.com, static.intrafocus.com x3 | Hijacked-subdomain spam | — | — | — | — | Yes |

**Weak count in the top 9 returned: 5** (spam subdomains), plus ONLYOFFICE as an off-topic brand. Gate 4 passes. Every non-spam result is an invitation/card/form SaaS competitor: none cited or linked. Emily Post does not appear in the top 10, so it is cited.

## Phase 2: gap
- Table stakes: date/time, location, costume expectation, food, RSVP; tone split adult vs kids; lists of taglines.
- Gap: nobody organises by party type beyond adult/kids (office, murder mystery, potluck, seated dinner, same-week all missing); nobody gives wording for an allergy ask, "no plus-ones" or chasing non-repliers; nobody cites etiquette guidance or any research; no page tells you to front-load details for a phone preview.
- Fan-out sub-queries → H2s/FAQs: what to include; adults-only wording; no plus-ones; allergy ask; costume optional vs required; office wording; murder mystery; short notice; chasing RSVPs; date of Halloween.
- Angle: "Wins by being the only post that organises ready-to-copy invitations by ten party types and backs the allergy, plus-one and RSVP-chasing wording with Emily Post guidance and two open-access papers, framed by SubhSandesh's 48.3% phone-open rate."

## Phase 3: sources (all fetched 2026-10-13)
1. emilypost.com/advice/invitation-etiquette — reply within a day or two and by the deadline; invitation covers only those invited; "and guest" / children must be stated. **No publication date on the page.**
2. emilypost.com/advice/what-to-do-when-guests-dont-rsvp — perfectly polite to call non-repliers; be friendly, not accusatory. No publication date.
3. Europe PMC PMC12400901 — Engel et al. 2025, *Pediatric Allergy and Immunology* (Wiley, CC BY): food-allergy social anxiety; fear of seeming demanding or unappreciative when declining unsafe food. **Abstract only read**; population is young people, stated in body.
4. Europe PMC PMC5293197 — Smiljanić & Mitrović Dankulov 2017, *PLOS ONE* (CC BY), full text read: Meetup groups; engagement mainly strengthens existing ties; small events build cohesion; cites Macedo et al. 2015 that attendance probability strongly depends on whether friends attend (attributed as "cites earlier work").

Searches tried (findpapers / Europe PMC REST): "invitation response attendance social event", "commitment public pledge attendance follow-through", "reminder messages attendance no-show randomized", "food allergy disclosure social eating adults", "RSVP attendance no-show" (RSVP returns visual-presentation papers), "meetup event-based social network attendance", "social invitations". No study of invitation *wording* itself was found outside medical screening letters.
Caps: capcheck clean; emilypost.com 1 post in b3 (2 URLs), europepmc exempt; avoided T&F, SAGE, Frontiers, Elsevier, arXiv.

## Brief claims checked
- "Check whether Emily Post is a ranking competitor": it is not in the measured top 10, so cited.
- "Dated, sourced etiquette guidance": the Emily Post pages carry no publication date; cited as undated with check date, `datePublished` omitted.
- b1 note on `/date-invitation` as a one-person invite: confirmed in TEMPLATE_LINKS ("an invitation they must answer; a yes turns into a countdown").
