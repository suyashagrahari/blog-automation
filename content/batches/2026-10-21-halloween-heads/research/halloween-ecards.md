# Research brief: halloween ecards (row 3, slug `halloween-ecards`)

## Phase 0: first-party data
No Halloween usage data exists (BRIEF §3). Used platform-wide lines, each labelled in the body as platform-wide and not Halloween data: 48.3% phone opens and 11.1 views per page (both in the first 150 words), 90.9% publish rate, 38.5% password rate, and the Raksha Bandhan 2026 lead-time line (49.4% built on the day; disclosed as Raksha Bandhan, n = 89). The template spec (first-hand) supplies the page rows of the table.

## Phase 1: SERP (orchestrator's Firecrawl snapshot, US, 2026-10-21; 0 extra searches used)
Head term, hard for this domain. Weak ~3/10. It is a tool SERP: every top-5 result is an ecard storefront, so all of them are competitors. None is cited or linked, and the post makes no claim about any named service's pricing or features.

| # | Page | Type | Direct answer | Content / format | Optimising for |
|---|---|---|---|---|---|
| 1 | americangreetings.com/ecards/halloween | Membership ecard catalogue | None. Category intro opens with a trial-membership CTA | Filter facets (tone, recipient, features such as music, animated, add-a-photo, interactive), card grid, short promo paragraph. No research, no dates | Transactional: sign-ups |
| 2 | 123cards.com | Ad-supported catalogue | n/a | Snapshot URL returned HTTP 404 to the fetcher; judged from the snippet only | Transactional |
| 3 | jibjab.com/ecards/halloween | Face-swap video ecards | n/a | JavaScript app; the fetcher got only the title. Snippet only | Transactional: sign-ups |
| 4 | jacquielawson.com/cards/halloween | Membership animated cards | None | Navigation-heavy category page, card thumbnails. No prose answer | Transactional |
| 5 | bluemountain.com/ecards/halloween | Membership ecard catalogue | One line: "Send unlimited Halloween ecards… when you join" | Filters (recipient, tone, collections), reminder widget, card grid | Transactional: sign-ups |
| 6–10 | hallmark ecard, pinterest board, e-cards.com, doozycards.com, 123greetings.com | Catalogues and a social board | none | none | none |

Weak results: pinterest (#7), plus small catalogues e-cards.com and doozycards.com, about 3/10. Gate 4 is not triggered.

**Cannibalisation:** the BRIEF's rejected-row note shows "halloween messages" shares 5 URLs with happy-halloween-wishes. The ecards top 10 shares none of those URLs (cardsnacks, 1800flowers and the rest are absent). Overlap with the named siblings is 0 known URLs, so this is a separate page. Siblings' owned ground was avoided: posting dates by country (card-for-boyfriend), card-part word budgets (quotes-for-cards, card-for-girlfriend), image sizes (images-with-quotes), the 30 Oct and Allhallowtide timing (eve-greetings), and wishes by recipient or channel (happy-halloween-wishes). Six original message-box lines were checked by 5-gram scan against all b1–b8 bodies; one hit ("lasts as long as the") was rewritten.

## Phase 2: gap
- **Table stakes:** what an ecard is, the fact that there are kinds of them, how to send one.
- **Gap:** no ranking page compares ecard *types* neutrally, because each one sells one type. None answers whether an ecard reads as low effort, whether a late one is rude, or how the clocks change around Halloween. None cites research.
- **Fan-out:** what is a Halloween ecard; which type suits whom; photos, voice and replies by type; is an ecard less thoughtful; voice or text; when to send in 2026 and 2027; is late OK; can I schedule it; group sends; editing after sending; password; kids-safe.
- **Angle:** see batchMeta.angle.

## Phase 3: sources (all fetched; verified via Firecrawl scrape or the Europe PMC/Crossref APIs)
1. Savelyeva 2025, *Neophilology* 11(3), neophilology.elpub.ru/jour/article/view/531. CC BY 4.0, peer-reviewed, open access. 110 ecards sampled from open-access sites plus 49 sent by respondents on 12 Jun 2023 (Russia Day). Finding: the visual component dominates the verbal one. Abstract and metadata read; the article is in Russian. The same paper was cited earlier in the virtual-gift-30 batch (how-to-create-a-digital-card) but in no Halloween batch.
2. Liu, Rim, Min & Min, JPSP (online 11 Jul 2022), europepmc MED/35816566. People underestimate how much others appreciate being reached out to, and the gap is magnified by surprise and social distance. Abstract only (APA, paywalled). Also cited in b1 halloween-messages-for-adults, so it is a swap-test risk (flagged in the audit).
3. Kumar & Epley, JEP: General (online 10 Sep 2020), europepmc MED/32915017. Voice-based interactions build stronger bonds than text, with no extra awkwardness; people still expect text to be fine. Abstract only. PubMed itself cookie-walled the fetcher, so the abstract was read via the Europe PMC API.
4. Haltman, Herziger, Donnelly & Reczek, J Consumer Psychology 35(4) (online 5 Dec 2024), onlinelibrary.wiley.com/doi/10.1002/jcpy.1446. Open access, CC BY, full text read. Study 4 (n = 754), predicted relationship harm on a 1–7 scale: on time 1.21/1.39, 2 days late 2.29/1.70, 2 weeks late 2.94/1.73 (giver/recipient). Study 5 (n = 871): never sent 2.84 vs 2 months late 2.21 (recipients). Also cited in b-batch boo-basket-ideas-for-girlfriend, so it is a swap-test risk (flagged).
5. Directive 2000/84/EC Art. 3, eur-lex.europa.eu. Summer time ends at 01:00 GMT on the last Sunday in October, which is 25 Oct 2026 and 31 Oct 2027. The US dates (1 Nov 2026, 7 Nov 2027) come from the b8 BRIEF §10 log (verified by b8 writers) and are not separately cited.

Searches tried (Crossref + Europe PMC via findpapers and the direct APIs): "electronic greeting card versus paper card perceived effort", "handwritten versus typed message perceived thoughtfulness", "underestimating how much recipients appreciate reaching out", "gift giver recipient asymmetry thoughtfulness effort", "late timing gift greeting delayed message evaluation", "electronic greeting card ecard", "greeting cards", "voice versus text communication social connection", "digital gift wrapping recipient reaction", "perceived effort personalization message warmth", "media richness thoughtfulness gift occasion", "belated gift", "tardy gifts", "e-greeting card". No reception study of Halloween (or any holiday) ecards was found. GFMC 2025 "Gift occasions and media richness on perceived thoughtfulness" had no readable abstract and is not cited.

Banned or avoided: no Frontiers, SAGE, T&F or Elsevier sources. Kumar & Epley 2018 "Undervaluing gratitude" (Psych Science, SAGE) was skipped.

## Brief claims checked
- BRIEF §4 says "Firecrawl MCP is disconnected (out of credits)", but §A says it works. Firecrawl scrape worked this session (§A is correct; §4 is stale).
- Template-spec features used: 6/12 photos, 60 s voice, 3,000-character letter, 280-character reply, unlock time with countdown, optional password, email on first answer, kids tone, No button behaviour, edit and republish, about 5 and 10 minutes. Nothing beyond the spec is described.
