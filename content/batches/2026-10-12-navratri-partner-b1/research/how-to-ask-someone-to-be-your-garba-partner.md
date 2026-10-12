# Research brief — how to ask someone to be your garba partner

- Slug: `how-to-ask-someone-to-be-your-garba-partner` · cluster partner-howto · bodyLanguage `en` (Hinglish script lines)
- Also covers: will you be my dandiya partner, how to ask a girl for garba, how to ask your crush to garba
- Run: 2026-10-12 (Navratri day 2). WebSearch calls used: **1 of 2**. No browser tools.

## Phase 0 — first-party data

facts.md read by hand (no `npm run facts`). No Navratri or /dandiya-partner data exists. Cited, verbatim:

1. 48.3% of shared pages are opened on a phone (27,725 of 57,456 views) — measured 2026-09-24 → bears on "the ask is read on a phone"; platform-wide.
2. Raksha Bandhan 2026 lead time, n = 89: 49.4% built on the festival day, median 0 days → timing table column, labelled in body as a Raksha Bandhan analogue, different one-day festival, small n.
3. 38.5% of creators password-protect their page (2,000 of 5,199) → crush asks you would not want forwarded.

Gate is thin: none of the three is Navratri data. Template-spec features (No turns into Yes after five tries, 1080×1920 pass, email on first yes, garba buddy mode) used as first-hand product fact, not counted toward the 3.

## Phase 1 — SERP (US-served (WebSearch), 12 Oct 2026)

| # | URL | Type / date | Answers "how to ask"? | Notes |
|---|---|---|---|---|
| 1 | forums.anandtech.com/threads/spring-garba-… | Forum thread, Apr 2003 | No | A student asks whether to go to a Spring Garba with a girl; anecdote only. Weak |
| 2 | freepressjournal.in/…rent-a-garba-partner… | News, updated 25 Sep 2026 | No | Rent-a-partner trend, "largely fake or satirical", from ~Rs 1,000, Ahmedabad police examining. Weak for intent |
| 3 | azafashions.com/blog/navratri-garba-etiquette-first-timers-usa (AMP) | Retailer blog, 11 Sep 2026 | No | Outfit + circle etiquette; one line "Dandiya requires eye contact and matching your partner's rhythm". No asking section. Weak |
| 4 | azafashions.com/…/navratri-outfits-for-couples… (AMP) | Retailer blog | No | Couples outfits. Weak |
| 5 | azafashions etiquette (canonical) | duplicate of 3 | No | Weak |
| 6 | ousds.site.ox.ac.uk/node/356 | Oxford Scottish Dance Society note, undated | Partly (ceilidh dance asks) | ~350 words; "Do you have a partner for this dance?"; not garba, no logistics, no no-handling. Weak |
| 7 | azafashions couples (canonical) | duplicate of 4 | No | Weak |
| 8 | folklore.usc.edu/?p=35994 | Folklore archive entry | No | Not fetched in full (outside top 5 distinct); title/snippet only. Weak |
| 9 | jigardangadhavi.com/blog/first-time-garba-beginners-guide | Serves Rameelo's "Your First Garba" (dated June/Oct 2026) | No | ~400 words, steps/etiquette/what to wear; "Dandiya raas adds a pair of sticks and a partner". Weak |

**Weak count: 9 of 9.** No page answers the query; no featured snippet or AI Overview surfaced in the WebSearch result. Gate 4 does not abort.

Corroboration: `serps.md` (same day) lists "anandtech forum, freepressjournal (rent-a-partner news), azafashions etiquette", weak 9. The task prompt said "2008 mailing lists" — my run returned no 2008 mailing list (the oldest page was the 2003 forum thread); noted in structuralLimitations.

Format/tone notes: the two how-to-adjacent pages (Aza, Rameelo) are second-person, list-heavy, no data, no sources, no FAQ on asking. The Oxford note is a humorous essay.

## Phase 2 — gap

- **Table stakes:** dandiya is partnered, garba is a rotating circle; go-to etiquette.
- **The gap (none of the 9 cover):** actual ask wording by relationship; channel choice; timing in days before which night; logistics (pass, who pays, ride home); how to handle and respect a no; consent framing.
- **Stale data:** none cited by competitors.
- **Fan-out sub-queries → H2/FAQ:** what am I asking for; what do I say (by relationship); text vs in person; how early; who pays; what if they say no / maybe; is "will you be my dandiya partner" a date; best friend as garba buddy; colleague.
- **Angle:** wins by being the only post that gives original relationship-specific scripts with a built-in way to say no, grounded in request-compliance and refusal research, plus the five logistics and a timing table using the Raksha Bandhan lead-time analogue.

## Phase 3 — sources (all fetched; claims checked)

| Source | What it supports | Read |
|---|---|---|
| Flynn & Bohns 2008, JPSP 95(1) — hdl.handle.net/1813/75652 (Cornell ILR) | People underestimate compliance with direct requests by as much as 50%; askers overlook the social cost of saying no | Abstract only (repository record; PDF HTTP 405) |
| Lu, Fang & Qiu 2022, J Exp Psych: Applied — europepmc MED/36201840 | Rejecters overestimate negative consequences of refusal, 7 studies N = 2,132 | Abstract only (APA paywall); body says "the abstract reports" |
| Richter, Kouri, Meuwly & Schoebi 2024, BMC Psychology (CC BY) — europepmc PMC11201850 | Rejection-sensitive people anxiously expect rejection, read ambiguous cues as rejection; no stronger/longer negative emotion; N = 298 participants (couples) | Full text (Europe PMC XML) |
| DeshGujarat, 2 Sep 2025 | Ahmedabad 2025 single-day passes ₹499–₹1,947, season ₹2,799–₹10,824 | Full article |
| Free Press Journal, 25 Sep 2026 | Rent-a-partner trend largely fake/satirical, from ~Rs 1,000, Ahmedabad police examining | Full article. Not described as a police advisory |
| Drik Panchang 2027 (New Delhi) | 2027: Day 2 = 1 Oct, so Day 1 = 30 Sep; Vijayadashami 9 Oct | Fetched; date reference, cap-exempt |

Search terms tried via findpapers.mjs (Crossref + Europe PMC): "underestimate likelihood others agree to request", "liking gap conversation partners underestimate how much they are liked", "rejection sensitivity romantic initiation fear of rejection asking", "refusing a request social pressure difficulty saying no in person versus text", "declining invitations overestimate negative consequences". OpenAlex used to resolve authors and OA locations.

Rejected: "The Pain of Ghosting?" (PSPB 2026, Sage — publisher at cap); "People Underestimate the Acceptability of Canceling Plans" (PsyArXiv preprint, not peer reviewed); Rejection sensitivity in Indonesian journals (venue quality unclear).

Caps: capcheck clean for this post; FPJ and DeshGujarat URLs are now at their 2-post cap (shared with garba-partner-on-rent), hence the swap-test failure in the audit. No Wikipedia, doi.org, Taylor & Francis or Sage links.

## Internal links

/dandiya-partner (mandatory, after the channel section, template-spec features only, No→Yes framed as a joke and not consent), /date-invitation (plan beyond garba), /love-gf (when the message is really "I love you"). No /blog/ sibling links.
