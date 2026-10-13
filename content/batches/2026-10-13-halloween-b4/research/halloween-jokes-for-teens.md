# halloween-jokes-for-teens — research brief (row 192, batch 2026-10-13-halloween-b4)

Keyword: **halloween jokes for teens** (absorbs "teen halloween jokes"). PLAN weak = 6, band 1,000–3,000/mo. Theme: jokes.

## Phase 0 — first-party data
`content/facts.md` (generated 2026-09-24) was read by hand. `npm run facts` was not run. There is no Halloween or teen data in it. Three platform-wide lines are used and labelled as all-templates:
- 48.3% of shared pages are opened on a phone (27,725 of 57,456 views) — measured 2026-09-24 (intro and FAQ framing: group-chat jokes and pages get read on phones)
- 38.5% of creators password-protect their page before sharing it (2,000 of 5,199) — measured 2026-09-24 (intro)
- 90.9% of started pages are actually published and shared (4,724 of 5,199) — measured 2026-09-24 (/happy-halloween section)
Template features come only from template-spec.md: bestie mode with "Will you be my boo-st friend forever?", the No button that runs away, a letter read by flashlight in the attic, a carved word, up to six photos, a 1080×1920 Boo License with a chosen costume, an email on first answer, Kids tone (round blushing ghosts, no jump scares, "maybe later?"), and the premium voice note of up to 60 s.

## Phase 1 — SERP (2 of 2 budget: WebSearch US index ×1; DuckDuckGo HTML ×1, lower confidence)
**WebSearch top 9:** ev27.clearout.io (spam), library.gmob.ca (spam), zim.dhis2.org (spam), helloswanky.com/blogs/jokes/halloween-jokes, v0.carbonext.com.br (spam), netbox.point-broadband.com (spam), scotsman.com kids list (403, judged from snippet only), classpop.com/magazine/halloween-jokes (now serves "89 Halloween Riddles"), luckydraw.tcl.com (spam). **Weak: 6/9.**
**DuckDuckGo top 10:** wittypuns.com, punwaves.com, tastypun.com, rd.com, punsterz.com, laughlyfun.com, today.com, chukypuns.com, jokviva.com, alldayjokes.com. **Weak: 8/10** (pun farms). Gate 4 not triggered.

| # | Page | Fetched | Size / structure | Direct answer | "Teen" treatment | Data | Format | Tone |
|---|---|---|---|---|---|---|---|---|
| 1 | wittypuns.com/halloween-jokes-for-teenagers (Sep 2024) | yes | ~1,400 words; H2s: one-liners, short, captions, Q&A, conclusion | none; "As the leaves turn crisp…" intro | "teenagers" in headings only; generic ghost Q&A | none | lists | farm |
| 2 | punwaves.com/halloween-jokes-for-teenagers (2025, updated Jun 2026) | yes | ~2,200 words; 9 H2s by adjective (funny, short, cute, clean…) | none; "let's dive in" intro | label only; claims jokes were "tested on real friends" | none | lists | farm, first-person filler |
| 3 | rd.com/article/halloween-jokes | yes | ~3,600 words; H2s by monster plus dad, corny, kids, adults | none | no teen section | none | Q&A lists, "Why trust us" | magazine |
| 4 | helloswanky.com/blogs/jokes/halloween-jokes (store blog) | yes | ~4,200 words incl. chrome; kids, adults, WhatsApp/Instagram, friends, "how to deliver" | after a padded intro | none | none | lists | shop blog |
| 5 | classpop.com/magazine/halloween-jokes | yes | the URL now serves a riddles page (Jan 2026); the snippet still promises an all-ages list running to "dirty" jokes | — | snippet: "teens may be eye-rolling at the corny ones" | none | lists | brand blog |
None of the five carries FAQPage schema, a cringe or tone rating, any sorting by setting, guidance on punching down, or a single source.

**SERP overlap with b-batch joke rows:**
- vs `halloween-jokes-for-kids` (b1, Firecrawl SERP: weareteachers, natgeokids, whosmarted, abcmouse, tinybeans, reddit, macaronikid, harpervalleyfarms, nestle, mommypoppins): **0 shared URLs**.
- vs `halloween-jokes-for-adults` (b3, WebSearch SERP): **4 of 9 shared**. Two are spam (ev27.clearout.io, library.gmob.ca) and two are genuine all-ages pages (helloswanky, classpop). The DuckDuckGo teen SERP shares nothing with either, because it is dominated by "for-teenagers" pun farms. The intents are related but separate. Of the incumbents, today.com and rd.com rank for both.
- **Cannibalisation flag:** the b1 hub `halloween-jokes` is titled "51 Clean Ones for Teens, Adults and Family". This post differentiates by setting and cringe level, not by joke form or monster.

## Phase 2 — gap
- **Table stakes:** many jokes, one-liners, Q&A, captions, "clean".
- **Gap:** (1) no page sorts jokes by where a teen will use them (chat, class, sibling, photo, friends); (2) no tone or cringe signal; (3) nobody says what not to joke about, even though teen teasing is a well-studied harm; (4) no slang dating, so lists read stale; (5) no FAQ schema; (6) no sources.
- **Fan-out → H2/FAQ:** what makes a joke work for teens (H2); jokes for school (H3 + FAQ); group-chat jokes (H3 + FAQ); teen vs kids jokes (FAQ); cringe level (H2 + FAQ); roasting friends (H3 + FAQ); body/identity jokes (H2 + FAQ); anti-jokes (H3 + FAQ); jokes for a younger sibling (H3 + FAQ); costume captions (H3 + FAQ); Halloween date (FAQ); sending to one friend (H2 + FAQ).
- **Angle:** wins by being the only post that sorts original teen Halloween jokes by setting, puts a cringe level on every line, and backs its no-punching-down rule with a 2026 survey of 1,032 adolescents, framed by the 48.3% phone-open rate.

## Phase 3 — sources (all checked against b1–b3 §9/§10 and b4 §10; none previously used)
| Source | Host | Type | Read | Claim used |
|---|---|---|---|---|
| de Araújo Pinto & Ribeiro 2026, J Sch Health 96(9) e70233, CC BY 4.0, epub 2026-09-09 | europepmc.org PMC13556169 | peer-reviewed, OA (Wiley open, not a megajournal) | full text (Europe PMC XML) | 1,032 adolescents aged 14–19 in northern Brazil; 27.1% body-satisfied; every teasing form linked to dissatisfaction; appearance mockery strongest (RRR 2.75 thinness, 2.08 overweight); cross-sectional |
| Halfpenny, James & Glăveanu 2020, Europe's J Psychol 16(1):148–166, CC BY 4.0 | europepmc.org PMC7913033 | peer-reviewed, OA | full text | 214 UK children aged 9–11; aggressive humour negatively associated with affective empathy and sympathy; affiliative humour positively associated with cognitive empathy |
| Sezer & Bozkur 2026, Psihologija, doi 10.2298/psi250209006s, CC BY-SA, diamond OA (DOAJ) | doi.org → doiserbia.nb.rs | peer-reviewed | **abstract only** (Crossref + OpenAlex; doiserbia timed out on direct fetch and via Firecrawl) | 412 high-school students; social anxiety correlated negatively with affiliative, aggressive and self-enhancing humour and positively with self-defeating humour; humour is "protective and risky" |
| OUP press release, 2 Dec 2024 | corp.oup.com | publisher primary | full page | "brain rot" was Word of the Year 2024; more than 37,000 voters; usage up 230% from 2023 to 2024 (supports the slang date-stamp) |

**Rejected:** Lee et al. 2020 BMC Psychiatry PMC7448489 (1,551 Taiwanese grade 7–9 students, humour expression). Its outcome is suicidal ideation, which is too heavy for this page. Also rejected: IJERPH 2022 humour styles and bullying (MDPI, full in b4); Frontiers PMC9816482 (aggressive humour and cyberbullying, banned publisher); Media Psychology 2022 "Just a Joke?" (T&F); SAGE neurodevelopmental humour 2026; Andrews & Dawes 2025 J Adolescence (already in couple-jokes). languages.oup.com 2023 "rizz" (used in b1 rizz-lines; the 2024 page there served the wrong year's content).
**findpapers / Europe PMC queries:** adolescent humor styles peer acceptance; affiliative aggressive humor adolescents wellbeing; humor styles adolescents bullying victimization; adolescent humour styles depression loneliness; humor styles adolescents; adolescent humor friendship quality; disparagement humor prejudice tolerance; humor styles high school students self-esteem; adolescents sense of humour peer popularity; Europe PMC: humour styles AND adolescents OA; aggressive/disparagement humour AND youth OA; weight/appearance teasing adolescents 2018–2026; identity-/bias-based bullying adolescents.
**capcheck:** doi.org reports at cap 3. That is a resolver; this link resolves to doiserbia (Psihologija), a publisher nobody else in the batch uses. corp.oup.com is 1. Both Europe PMC papers are new to the batch.

## Originality
- 40 jokes (5 × 8 groups), all written for this post. The prompt asked for 40–55; 48 pushed the body to 2,369 words, so the count was cut to fit the 1,500–1,800 band.
- 5-word overlap check against 191 Halloween sibling files (b1–b4 blogs, body + FAQs): **0 hits on any joke line.** Idea-level clashes were found and swapped: the ghost driving-test pun (halloween-puns), the witch-parking gag (halloween-jokes), the "group chat voted… one emoji" caption (captions-with-friends), the "bats sleep upside down" fact (messages-for-kids), "keep an eye on the mouse" (jokes-for-kids), the vampire-costume "finally an excuse" line (messages-for-best-friend), and the "not dressing up this year" line (picture-comments). The remaining 5-gram matches are only the 31 October 2026/2027 date string and template-feature wording in FAQ answers.
- Slang: one term ("brain rot"), date-stamped as of October 2026.
