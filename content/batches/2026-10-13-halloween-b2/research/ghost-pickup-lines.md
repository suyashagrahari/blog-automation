# Research brief: ghost pickup lines (row 85)

- Keyword: `ghost pickup lines` (absorbs "boo pickup lines", "halloween pickup lines boo"). Slug `ghost-pickup-lines`, free in Strapi (checked 2026-10-13).
- Theme: pickup. PLAN weak 6/10, band 3,000–10,000/mo.
- Category `festive-beats`; templates `/happy-halloween` (mandatory), `/happy-halloween-premium`, plus `/date-invitation` in body.

## Phase 0: first-party data
facts.md (vintage 2026-09-24) has no Halloween data. Used platform-wide lines, labelled as such in the body:
- 48.3% of shared pages opened on a phone; 11.1 average views per page (both in first 150 words)
- 38.5% of creators password-protect their page (limits section)
The template-spec features (60-character question, the "ghosted" No-button count in the email, the 1080×1920 Boo License with a ghost costume, premium 60 s voice note and 280-character reply box) are product facts, not counted toward the 3.

## Phase 1: SERP (WebSearch, US index; Firecrawl disconnected; 1 of 2 searches used)
Query: `ghost pickup lines`. Top 10 had 9 results:

| # | URL | Type | Notes |
|---|---|---|---|
| 1 | faits-marquants.inrae.fr/… | hijacked-subdomain spam | weak, not analysed |
| 2 | samplechat.aldine.edu.in/… | hijacked-subdomain spam | weak, not analysed |
| 3 | blavity.com/halloween-pick-up-lines | 100 general Halloween lines (Oct 2024) | ~2.5k words; H2 by tone; ghost lines are a handful; a few suggestive; one consent caveat in the intro; no research; no FAQ |
| 4 | blavity.com/women/halloween-pick-up-lines | duplicate of #3 | weak (duplicate) |
| 5 | elitedaily.com (Sep 2018) | 20 lines framed "sexy & spooky", year-stamped 2018 | ~600 words; lines link out to other lists; sexual lines; stale |
| 6 | scarymommy.com/ghost-jokes-puns (2020, upd. 2021) | ghost jokes, with a pickup-line subsection | ~2k words; Q&A jokes; includes "under the sheets" lines; no research |
| 7 | docs.thebrandindustry.com/… | spam | weak |
| 8 | lgbtqnation.com (2016) | news item on Ghostbusters film lines | 403; judged from snippet; off-intent, weak |
| 9 | onlycaptions.com 358 ghost pick up lines (Jan 2023, "(2026)" headers) | padded ghost list | ~4k words; H2 by tone/gender (funny, cheesy, Tinder, cute, for her, for him); 5 generic FAQs; AI-style intro; some cheeky lines |

Weak count in top 10: 6 (2 hijacked subdomains, 1 spam, 1 duplicate, 1 off-intent 2016 news, 1 stale 2018). Gate 4 passes.

Table stakes: lists of "Are you a ghost?"-style lines, "boo" puns, "haunting my dreams", sheet jokes.
Gap: nobody sorts lines by ghost trope and channel; nobody is clean throughout; nobody covers dating "ghosting" (the obvious double meaning) or cites any research; no page says when ghost lines are the wrong move (bereavement, someone you ghosted).
Stale: Elite Daily 2018; onlycaptions updates only the year in headers.
Fan-out: what is a ghost pickup line; what does boo mean; clean lines for a sheet costume; ghost emoji texts; what is ghosting / how common; how not to ghost after a date; how to ask "will you be my boo".

Angle: wins by being the only page that sorts original, clean ghost lines by trope and channel and turns dating "ghosting" into anti-ghosting lines backed by two open-access prevalence studies, with platform-wide phone-open data.

Overlap checks: all 50 trope lines and 3 no-thanks texts were checked for 5-word overlap against every blog in b1 and b2 (incl. halloween-pickup-lines hub ghost group, halloween-puns ghost/boo group, tinder and love-puns siblings) and against the four fetched competitor pages. Final: 0 hits. Two lines were reworded after competitor hits ("can see right through", "can walk through walls but"), one after a sibling hit ("better with you in it").

## Phase 3: sources (all fetched via Europe PMC REST full text or direct)
1. Navarro, Larrañaga, Yubero, Víllora 2020, IJERPH (MDPI, CC BY), PMC7037474, published 2020-02-10. n=626, ages 18–40; strict criterion: 4.8% ghosting victims, 14.1% breadcrumbing, 2.4% both, 78.8% none; ghosting not significantly related to life satisfaction, loneliness, helplessness; breadcrumbing was. Intro cites 13–23% prior prevalence. Full text read.
2. Biolcati, Pupi, Mancini, Current Issues in Personality Psychology (Univ. of Gdańsk), PMC10535627, first published 2021-09-21 (issue 2022). n=409: 67.4% stopped responding to messages, 58.5% punitive silence, 18.6% ended a relationship by disappearing. CC BY-NC-SA: cited, not reused. Full text read.
3. Atalar et al. 2025, BMC Psychology, PMC12007334, published 2025-04-17. Describes ghosting as a breakup method in which communication is sharply ended without explanation; scale validation n=200. Full text read.
4. Unicode emoji-test.txt (latest, dated 2026-04-30): 1F47B 👻 E0.6 ghost. Cap-exempt reference.

Rejected: Frontiers RCT on ghosting and sleep (PMC12886356; BRIEF §9 Frontiers caution); LeFebvre / Freedman ghosting papers (SAGE JSPR); PMC12316385 friendship dissolution (SAGE JSPR). Koessler et al. "When your boo becomes a ghost" not found open in Europe PMC. Avoided every paper in the prompt's spent list and the tinder sibling's sources (Bruch & Newman, van der Zanden, Dürnberger, Tinder pages).
Findpapers query: "ghosting dating relationship dissolution"; Europe PMC REST: `ghosting AND (breakup OR prevalence) AND OPEN_ACCESS:y`.

## Brief claims checked
- Prompt: "Koessler/LeFebvre-type studies": LeFebvre is SAGE, so excluded. Navarro's own strict-criterion rate (4.8%) is far below the 13–23% often quoted; the post reports both and says why.
- WebSearch cap notice arrived after the search had already returned; DuckDuckGo fallback not needed.

## Verifier and capcheck
`verify-batch.mjs`: ghost-pickup-lines clean (1793 words, 10 FAQs, 48/2). An FAQ that echoed an H2 was reworded. Batch-level "batch.json blogs != files on disk" is not this row's to fix. `capcheck.mjs`: no cap issues for this row's sources.
