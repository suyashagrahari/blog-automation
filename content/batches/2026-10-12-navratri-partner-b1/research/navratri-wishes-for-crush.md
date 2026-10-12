# Research brief: navratri wishes for crush

Slug `navratri-wishes-for-crush` · cluster romantic-wishes · bodyLanguage `en` with Hinglish lines · batch 2026-10-12-navratri-partner-b1 · written 2026-10-12

Also covers: "navratri message for crush", "how to wish crush on navratri".

## Phase 0: first-party data

facts.md was read directly. `npm run facts` was NOT run (BRIEF §3). No Navratri or dandiya-partner usage data exists, so none is claimed.

Facts used (byte-verbatim in batchMeta.factsUsed):

| Fact | Why it bears on a crush wish |
|---|---|
| 48.3% of shared pages are opened on a phone | The first line of a wish gets read as a lock-screen or notification preview, so the opening words have to be safe to see in public |
| 38.5% of creators password-protect their page | Senders already assume someone else may see what they send, which is the case behind the "shared family phone" rule |
| Average views per created page: 11.1 | A shared page is opened again and again, maybe by friends too. Write as if it will be screenshotted |
| Raksha Bandhan 2026 lead time, n=89: 49.4% built on the festival day | Labelled in the body as a Raksha Bandhan measurement used as the nearest analogue. It is not Navratri data |

Gate: 4 relevant facts, with 2 (48.3%, 38.5%) in the first 150 words. The facts are platform-wide. None of them measures crush messages, and the body says so.

## Phase 1: SERP. US-served (WebSearch), 12 Oct 2026. 1 WebSearch call used

| # | URL | Fetched? | Words | "crush" mentions | Date | Notes |
|---|---|---|---|---|---|---|
| 1 | lutonhoo.oandg.co.uk/en/navratri-wishes-in-hindi.html | DNS fail (ENOTFOUND) | — | — | — | Scraped mirror, a known competitor. Never cite |
| 2 | eduyush.com/en-us/blogs/lifestyle/happy-navratri-wishes | yes | ~5,870 | 0 | **Title now says 2026, "Last updated: September 2026"** | 170+ generic wishes split by audience (family, clients, WhatsApp, garba). Has a date table, an FAQ and FAQPage schema. Its day table prints Day 8 = Sun 18 Oct = Mahagauri, which BRIEF §1 says is wrong for 2026 |
| 3 | blog.getcompass.ai/navratri-celebration-email | HTTP 404 | — | — | — | Corporate email greetings |
| 4 | outlookindia.com brand-studio Sharad Navratri 2024 | yes | ~405 (article) | 0 (the one hit is a sidebar headline, "Crushing defeat") | 26 Sep 2024 | Traditional wishes for friends and family. Stale |
| 5 | eduyush.com/blogs/... (non-US duplicate) | same page as #2 | | | | |
| 6 | fithindi.thequint.com/amp ... 2021 | duplicate of #9 | | | 7 Oct 2021 | |
| 7 | lbas.lboro.ac.uk/wishes/navratri-wish.html | DNS fail | — | — | — | Scraped-mirror pattern |
| 8 | goodreads author blog, Chaitra Navratri | yes | ~360 | 0 | — | Chaitra, not Sharad |
| 9 | thequint.com/amp ... 2021 | yes | ~405 | 0 | 7 Oct 2021 | 6 generic lines, including a pandemic line |

**Weak count: 9 of 9.** None of them has a crush-specific section, line or heading. Gate 4 does not apply. The serps.md row "navratri wishes for crush | 9 | eduyush 2025, outlook 2024, quint 2023/24" agrees on the weak count.

**Framing claim found false:** the prompt and serps.md say "eduyush 2025". The ranking eduyush page is now titled "170+ Happy Navratri Wishes 2026" and says "Last updated: September 2026". The incumbent is fresher than the prompt says. It still has no crush content.

## Phase 2: gap analysis

- **Table stakes:** short shareable lines, Hindi/Hinglish options, garba/dandiya flavour, Navratri dates.
- **The gap (none of the 5):** (a) wishes written for someone you like when nothing has been said, (b) how hard to push: an escalation order, (c) how to read the reply, (d) group chat vs DM, (e) a colleague or classmate crush, (f) a don't list covering repeat messages after silence and shared family phones.
- **Stale data:** Outlook 2024 and Quint 2021 carry no data at all. Eduyush's 2026 day table maps one goddess per date, which is wrong for 2026.
- **Fan-out sub-queries:** what to text a crush on Navratri · how to wish without being obvious · what a short reply means · should I wish every day · group or DM · colleague crush · when to ask them to garba.

**Angle:** Wins by being the only post that orders crush wishes as an escalation ladder (plain → personal detail → conversation-opener → hint → invitation page) with a rule for reading each reply, grounded in research on romantic interpretation bias and breadcrumbing and in SubhSandesh's 48.3% phone-open and 38.5% password rates.

## Phase 3: sources (findpapers.mjs plus the Europe PMC REST API; 0 extra WebSearch calls)

Queries tried: "text message response time romantic interest", "uncertainty reduction initial romantic attraction texting", "flirting ambiguity computer-mediated communication", "liking gap underestimate how much others like us", "rejection sensitivity romantic interest disclosure", "chronemics response latency CMC", "emoji affective signals relationship-oriented digital communication", "texting romantic relationship initiation", plus Europe PMC OA searches for ghosting, breadcrumbing, workplace romance and "text messaging response time relationship".

Rejected: Frontiers in Psychology ghosting RCT (journal at cap); Hall et al. "Accurately Detecting Flirting" (Sage, at publisher cap); liking-gap work (Psychological Science, Sage); JCMC 2018 response-latency paper (academic.oup.com returned 403, unread); BMC rejection-sensitivity 2024 (PMC11201850, already used by how-to-ask-someone-to-be-your-garba-partner, so it would put the same topic in two sibling posts).

Chosen. All open access on europepmc.org (cap-exempt per verify.config.json), and no sibling cites any of them:

1. **Dong, Wang, Pan & Cheng 2026, Archives of Sexual Behavior 55**: "Love Through a Distorted Lens", https://europepmc.org/article/PMC/PMC12916924, published 2026-01-13. Read: abstract plus intro (full text XML). Four studies, N=861. "Romantic interpretation bias": some people read ambiguous female-male interactions as romantic. In heterosexual women it is linked to self-objectification. The body uses only "people read ambiguous interactions as romantic" and the N. It does not generalise the self-objectification finding.
2. **Khattar, Huete & Navarro 2023, BMC Psychology 11**: breadcrumbing and attachment insecurity, India and Spain, https://europepmc.org/article/PMC/PMC10601106, published 2023-10-25. Read: abstract and methods. 334 Indian and 348 Spanish adults aged 18–40. Breadcrumbing means sending flirtatious but non-committal messages. It is linked to anxious and avoidant attachment, and in India the link with anxious attachment is stronger.
3. **Gesselman, Ta & Garcia 2019, PLOS ONE 14**: emoji as affective signals, https://europepmc.org/article/PMC/PMC6695182, published 2019-08-15. Read in full. Study 1: 5,327 single US adults. 37.6% never and 29.1% hardly used emoji with potential dates. More frequent emoji use went with more first dates. The study is correlational. Disclosed: the Singles in America study is funded by Match, and two authors consult for Match.
4. **La France 2022, Behavioral Sciences 12(8):278**: beliefs and advice about workplace romance, https://europepmc.org/article/PMC/PMC9404732, published 2022-08-11. Read: abstract and parts of the body. N=259 organisational members (US). Advice falls into four types: encouraging, warning, gender concern and silence. One of the beliefs is a right to privacy about workplace romance.

All 4 pass the subject test (early romantic interest, ambiguous signals, messaging, workplace romance). None would fit unchanged in a garba-benefits or dandiya-steps post. 3 are peer-reviewed empirical papers, all open access. 0 generic statistics, 0 Wikipedia body links. Dates are BRIEF-verified (drikpanchang not re-fetched): Sharad Navratri 11–19 Oct 2026, 30 Sep–8 Oct 2027. They are kept out of `sources`.

## Structural limitations

- 3 of 4 studies use US or European samples. The breadcrumbing paper is the only one with an Indian sample.
- No study measures festival greetings to a crush. The ladder is editorial judgement grounded in these findings, not a tested intervention.
- /dandiya-partner's "No turns into Yes after five tries" is a joke mechanic. For a crush who has not signalled interest, it can read as pressure, and the body says so.
- WebSearch is US-served. India-served positions are unknown.
