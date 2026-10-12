# Research brief — navratri wishes for best friend

Batch `2026-10-12-navratri-partner-b1` · slug `navratri-wishes-for-best-friend` · cluster wishes-relation · bodyLanguage `en` with Hinglish lines · also covers: navratri wishes for bestie, garba buddy wishes, navratri wishes for friends · autocomplete demand 3.

## Phase 0 — first-party data

`content/facts.md` read directly (no `npm run facts`). No friendship, Navratri or /dandiya-partner usage data exists. Used, each labelled in body prose:

- 48.3% of shared pages opened on a phone (platform-wide, 2026-09-24) — opening paragraph + table.
- Raksha Bandhan 2026 lead time, n = 89, 49.4% built on the day, median 0 days — opening paragraph + dates section, labelled as a one-day-festival analogue, not Navratri data.
- 38.5% of creators password-protect (platform-wide) — table.

Gate is thin: all three are platform-wide or an analogue. Template features (nine lines, six photos, 1080×1920 pass, No → Yes after five tries, best-friend "garba buddy" mode) come from `template-spec.md` and are product fact, not counted toward the 3.

## Phase 1 — SERP, US-served (WebSearch), 1 call

Query: `navratri wishes for best friend`. 9 results returned.

| # | Result | Status | Friend-specific? | Dates / freshness |
|---|---|---|---|---|
| 1 | hindupad.com forum "Navratri SMS in English" | fetched | One Durga Puja line "occasion made happier with best friend like you"; rest generic SMS | Posts dated Sep–Oct 2013 |
| 2 | hindupad.com forum "Navratri messages in Hindi" | fetched | No | 2013 |
| 3 | lutonhoo.oandg.co.uk (scraped mirror) | DNS fail | — | Competitor mirror per BRIEF, never cite |
| 4 | thestatesman.com Chaitra Navratra 2022 | HTTP 403 | Title "for your family and friends" | 2022, wrong (spring) Navratri |
| 5 | smartpuja.com/blog/navratri-wishes ("14 Best Navratri Wishes 2023") | fetched, but served puja-services landing content | Search summary claimed a "To my dearest friend" line; not verifiable from fetch | 2023 title |
| 6/7 | eduyush.com happy-navratri-wishes (two locales) | fetched | "Family & Friends (15)" section, plural friends; 4 friend lines, group-addressed | Refreshed: "Last updated: September 2026"; day-wise table maps Day 8 = Mahagauri = 18 Oct 2026 — contradicted by Drik (Mahagauri Puja 19 Oct) |
| 8 | outlookindia.com brand-studio Sharad Navratri 2024 | fetched | Generic "friends and families" blessings | Published 26 Sep 2024 |
| 9 | smartpuja wp-json duplicate | not fetched | — | — |

Format: lists of blessing lines, no tables on-topic (Eduyush has a date table), no research, FAQs only on Eduyush. Direct answer: none answers "what to write to ONE best friend". Tone: third-person blessings, Maa Durga-centred.

**Weak count in top 10: 9 of 9** (forums 2013, mirror, 2022/2023/2024 stale, Eduyush is fresh but generic and group-addressed). Gate 4 not triggered.

Corroboration: `serps.md` (41 SERPs) has no best-friend row; nearest is "dandiya night invitation message for friends" (8 weak).

## Phase 2 — gap analysis

- **Table stakes:** a list of wish lines, Maa Durga blessing language, friends mentioned alongside family, garba/dandiya references.
- **The gap:** no analysed page writes for one best friend by situation — moved away, hard year (breakup/loss/exam), new partner, different faith, platonic across gender. No page says why a wish matters, or gives regional Dussehra caveats.
- **Stale data:** HinduPad 2013, Statesman 2022 (Chaitra), SmartPuja 2023, Outlook 2024. Eduyush 2026 has a date-goddess mapping that Drik contradicts.
- **Fan-out sub-queries → H2/FAQ:** what to write (H2 definition + FAQ 1), friend of another faith (H3 3 + FAQ), grieving friend (H3 4 + FAQ), asking best friend to garba (H2 + FAQ), opposite-gender without romance (H3 6 + FAQ), friend with new partner (H3 5 + FAQ), which day to send (H2 dates + FAQ), Hinglish (FAQ), staying close after a move (H2 why + FAQ), group invite (wrong-choice H2 + FAQ).

**Angle:** Wins by being the only post among the five analysed that writes Navratri wishes for ONE best friend by situation and explains from Dunbar 2025 why the wish matters most to the friend absent from the circle, framed by SubhSandesh's 48.3% phone-open rate.

## Phase 3 — sources (findpapers.mjs + Europe PMC REST; 0 extra WebSearch)

findpapers queries tried: "friendship maintenance behaviors adult best friends", "collective ritual festival participation social bonding", "romantic relationship friendship network dyadic withdrawal", "friendship decline geographic relocation emotional closeness", "cross-sex friendship platonic", "managing relationship decay network gender contextual effects", "friendship India young adults gender". Europe PMC REST also searched for grief/friend and supportive-message papers (none used).

| Source | What it says (verified) | Read | Published | Subject / swap |
|---|---|---|---|---|
| Dunbar, "Why friendship and loneliness affect our health", Annals NYAS (Wiley OA), PMC11918532 | Wellbeing best predicted by number and quality of close relationships, five optimal; dancing/singing/feasting/ritual raise bonding but have "no effect at all on the quality of existing relationships (even for best friendships)" if absent; closeness declines measurably within months without meeting; ~3 years of no contact to leave the 150 | Full text (Europe PMC REST; pmc.ncbi served captcha) | 2025-03-06 | Friendship maintenance — passes both |
| Roberts & Dunbar, "Managing Relationship Decay", Human Nature 26:426–450, CC BY 4.0, PMC4626528 | 25 participants, 18 months, school→university, ~half left hometown; friendships decayed more than kin; decline prevented most by talking (females) and doing activities together (males) | Full text (Europe PMC REST) | 2015-10-21 | The friend who moved away — passes both |
| Ribadeau Dumas, EHESS thesis 2025EHES0037 (theses.fr) | n = 1,062 + 61 interviews, Purnea & Margao; men more likely to have close friends; intimacy among women viewed as indulgent or threatening | Abstract only (theses.fr API); full text not online | defended 2025-05-15 | Platonic friendship in India — passes both |
| Drik Panchang New Delhi 2026 and 2027 | 11–19 Oct 2026, Ashtami/Mahagauri 19 Oct, Day 10 20 Oct; 30 Sep 2027 start, Vijayadashami 9 Oct 2027 | Fetched | undated | Date/festival reference, cap-exempt |

Avoided per BRIEF: Frontiers in Psychology, Taylor & Francis, Sage (Sage JSPR friendship-dissolution paper found and skipped), arxiv, aclanthology, Wikipedia, doi.org links. capcheck: no banned URLs; pmc.ncbi.nlm.nih.gov is cap-exempt; theses.fr unused elsewhere.

BRIEF-verified but not fetched by this agent: Dussehra 21 Oct in Bengal/Mysuru, Sharad Purnima garba 25 Oct 2026.

## Links

Internal (3): /dandiya-partner (after the wish lists and table), /streak (alternative for the friend who moved away), /templates. No sibling /blog/ links. Siblings named only by topic: group captions (garba-partner-captions-with-friends), mixed-audience English wishes, how-to-ask.
