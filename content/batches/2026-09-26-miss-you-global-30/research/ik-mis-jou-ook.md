# Research brief — `ik mis jou ook` (nl-NL, lane A-reply)

Batch `2026-09-26-miss-you-global-30`, wave 3. Body language **Dutch**.
Slug `ik-mis-jou-ook` (native slug, per the orchestrator's 2026-09-27 correction).

---

## Phase 0 — data gate

`facts-snapshot.md` (pinned), not `content/facts.md`. Four lines used, picked by a
usage census over all 102 blog JSONs in `2026-09-25-miss-you-30` and
`2026-09-26-miss-you-global-30`:

| line | prior uses | why this one |
|---|---|---|
| 2,417 views, 11.3/page, 104 on the most-opened | 40 | the reply reader **is** the person who opened it; neither Dutch sibling used it |
| 86.4% carry a written memory (185 of 214) | 38 | what a reply can contain; neither Dutch sibling used it |
| 90.9% of started pages are published (4,724 of 5,199) | 5 | platform-wide, least collided |
| median edit gap 2.5 h, /apology-dashboard, n=1,396 | 10 | the **platform-wide** line, deliberately not the miss-you 2.6 h (40 uses) |

Two of these are inside the first 150 words. All twelve miss-you lines are now
used 36–68 times, so the differentiation is thin and the post says so.

## Phase 1 — SERP, measured not assumed

**Route 1, `serp-ddg.mjs`, ONE attempt, query first:**
`node scripts/serp-ddg.mjs "ik mis jou ook" --region nl-nl`
→ echoed `query: ik mis jou ook` (so not the argument-order trap), then
`(no results parsed)`. Not retried, per BRIEF §3.

**Route 2, Google in the real browser, `gl=nl&hl=nl&pws=0`, run twice, identical
both times.** Self-authenticated on content: Dutch UI strings (`AI-overzicht`,
`Webresultaten`, `Meer om te vragen`) and my own query in every snippet.

| # | host | page type | weak? |
|---|---|---|---|
| 1 | context.reverso.net (`/vertaling/…`) | bilingual example concordance | yes |
| 2 | uitgeverijdefontein.nl | **children's book** titled *Ik mis jou ook* (Niki Smit, 100%-serie) | yes |
| 3 | wordhippo.com | dictionary scraper ("I miss you too", "I miss you also") | yes |
| 4 | bol.com | novel ***Ik mis mij ook*** (Giphart) — a different phrase | yes |
| 5 | context.reverso.net (`/translation/…`) | same site, other direction | yes |
| 6 | reddit.com r/DutchHipHop | thread about a Lange Frans song | yes |
| 7 | open.spotify.com | song *Mis Je Mij Ook* (Henk Stelte, 2022) | yes |

**7 of 7 weak. Zero Dutch editorial explainers.** Plus an image block (a Facebook
page "Ik mis jou"), a video block of songs (*Ek Mis Jou Ook* — Afrikaans —,
Stef Bos, Stanley Hazes), and a "Meer om te vragen" entry *Hoe zeg je "ik mis jou"
in het Frans?*

**AI Overview (nl):** *"Dat is lief, maar ik ben een computerprogramma en kan je
helaas niet missen."* Google's own answer parses the query as a message addressed
to Google and returns nothing about the phrase. No Translate widget appeared for
this query (the sibling row saw one for `ik mis je nu al`).

**Route 3, Brave `country=nl`,** for a second index: 20 unique hosts, same picture
— `ikmisje.eo.nl` (an EO **television programme** called *Ik mis je*),
`nl.wikihow.com/Reageren-op-een-''Ik-mis-je''-bericht`, `mydiary.nl`,
`datingguru.nl`, `yentlendeboer.nl`, `songteksten.net` (Lange Frans),
`genius.com` ×2, `gedichten.nl`, `zijvanhem.wordpress.com`, `thomasrap.nl`,
`quora.com`, `mymemory.translated.net`, Spotify, Reddit ×6.

**Contamination confirmed, and it is not the funeral brand this time.** The
`ikmisjenual.com` urn shop the sibling found does not rank for this phrase.
What contaminates *this* query is: a **children's book** with exactly this title,
a **novel** with the near-miss title *Ik mis mij ook*, an **EO TV programme**, and
at least five **songs** (Stef Bos, Stanley Hazes, Lange Frans, Arnhemsgewijs,
Henk Stelte) plus an Afrikaans track.

**Gate 4 verdict: PASS, comfortably.** The strongest incumbent is a wikiHow list
of reply lines. No page on either index explains the grammar.

## Phase 2 — gap

Table stakes: give the phrase, give the English, show it in context.

**The gap:** nobody says *why it is `jou` and not `je`*. The wikiHow page prints
**"Wat een toeval! Ik mis jou ook!"** and **"Ik jou ook!"** — both with the full
form, correctly — and never explains it. Reverso's thirteen examples are all `jou`,
with no comment.

Fan-out sub-queries → H2s: what the ANS rule is · where *ook* attaches and whether
it floats · `jou` vs `je` vs `ik jou ook` · can *ook* go first (V2) · does Dutch
have the French reduplication · how four languages differ · what ranks and what is
wrong with it · what research says about scope and typed language · what the
product does and does not do.

**Angle:** the only page that locates the Dutch answer in the **pronoun**, not in
word order.

## Phase 3 — the linguistic result

### ANS 5.2.7 *Volle en gereduceerde vormen* — the decisive section

Punt 2 lists where the **full** form is obligatory. **Three entries apply to a
reply at once:**

1. *"in tegenstellingen"* — ex. 1 *Hij bedoelt jou niet, maar Mark.*
2. *"wanneer een persoonlijk voornaamwoord als reactie op een voorafgaande
   taaluiting fungeert"* — exs. 9–10.
3. **the decisive one:** *"wanneer het persoonlijk voornaamwoord vergezeld gaat van
   een bepaling als **ook**, zelfs, enz., die expliciet op dat voornaamwoord slaat
   (anders gezegd: het als **bereik** heeft)"* — ex. 19 *Ook jij zult…*, ex. 20
   *Zij hebben háár zelfs uitgenodigd.*

And the ANS prints its **own minimal pair**: ex. 21 *Ze hebben 'r zelfs
uítgenodigd* is marked *"met een ander bereik van zelfs en een andere
zinsklemtoon"*.

**So: the pronoun FORM carries the particle's scope.** `jou` → *ook* scopes over
the person. `je` → different scope, different sentence stress. The ANS names *ook*
inside the rule.

This is a **third mechanism**, not the Italian one and not the French one:

| language | how the reply is disambiguated |
|---|---|
| Italian | **position** — *anche* selects what it precedes |
| French | **reduplication** — both arguments are clitics, so precision comes from *Toi aussi* |
| Spanish | **nothing positional** — the DPD's own two citations sit either side of the target |
| **Dutch** | **the form of the pronoun** — full `jou` vs reduced `je` (ANS 5.2.7 §2) |

### Where *ook* attaches — ANS 21.4.9.4.1 *Focuspartikels*

- *ook* is one of eleven focus particles (*zelfs, juist, alleen, maar, slechts, al,
  reeds, nog, pas, eerst*).
- §2: with non-predicate scope the particle *"staat vlak bij zijn bereik (dit is de
  **meest ondubbelzinnige plaats**), hoewel niet altijd ervóór."*
- §3: ***"Ook en zelfs kunnen vóór of ná het element komen dat ze onder hun bereik
  hebben"*** — 10a *Geer wilde ook Kéés uitnodigen* / 10b *Geer wilde Kees óók
  uitnodigen*. Opmerking: together on the first position the particle normally
  precedes — *Ook een áuto hadden ze hem beloofd.*
- §5: the focused element **can come loose** from its particle; the particle then
  sits as far right as possible and the element is *"gekenmerkt door een accent"*.

**So *ook* attaches to `jou` by adjacency in `ik mis jou ook`, and it CAN float —
but then the accent has to do the work, which a typed message does not have.**

### Does Dutch have the Italian pre-argument slot? **YES — my prompt was wrong**

The task prompt predicted a probable clean negative. ANS 21.4.9.4.1 §3 and its
Opmerking license both *Ik mis ook jou* and *Ook jou mis ik*. Recorded in
`additionalChecks` as a corrected framing claim.

### Does Dutch have the French reduplication? **NO, and the ANS says why**

ANS **21.8 De aanloop** is the Dutch left-dislocation slot. 21.8.1: *"Een aanloop
vereist meestal een **verwijswoord** in de eigenlijke zin"*, and the resumptive may
be a demonstrative — *"alleen **dat** en **die**"* — or an adverb (*toen, dan, zo*).
**A repeated personal pronoun is not licensed.** So *Jou ook, ik mis jou* is not the
Dutch pattern; the demonstrative version *Jou ook, die mis ik* is, and it is stilted
for a person.

21.8.3: an anticipating aanloop element *"kan het verwijswoord vervangen"* and move
to the first position — *Zo'n gekunsteld boek vind ik onleesbaar.* That is
**`Jou mis ik ook`: one clause, no doubling.** Dutch does the French job in one slot.

### The V2 lever

ANS 21.3.1.1: the eerste zinsplaats is defined for **zinstype 1a** (voor-pv as the
second constituent, i.e. the main clause), with the one-constituent rule *"op de
eerste zinsplaats kan hooguit maar één zinsdeel staan"*. **In a bijzin that slot
does not exist** (*omdat ik jou ook mis*), the finite verb goes to the second pole,
and the full form `jou` is the only disambiguator left — which is exactly the
situation of a typed reply.

### Tatoeba (nld, `to=none`, 2026-09-27) — every hit inspected

| query | count | survivors |
|---|---|---|
| `"ik mis jou ook"` | **0** | — |
| `"ik mis je ook"` | **0** | — |
| `"ik jou ook"` | 0 | — |
| `"ik mis jou"` / `"mis jou"` | 0 | — |
| `"ook jou"` | **0** | — |
| `"jou ook, ik"` | 0 | — |
| `"jou ook"` | **4** | **4 of 4**, *ook* postposed in every one |
| `"ik mis je"` | 11 | 11 |
| `"je ook"` | 87 | 10 of 10 inspected have **subject** *je* (*Kook je ook?*) |
| `"ook missen"` | 2 | **1 of 2** |

The four survivors: 12085430 *Heeft Tom jou ook gekust?* · 9499947 *Vrolijk
kerstfeest voor jou ook.* · 13164800 *Misschien vindt hij jou ook leuk.* ·
**6036562 *Ik zal jou ook missen.*** → eng *"I'll miss you, too."*

Two bonus alignments on those sentences:
- 9499947's Italian is *Felice Natale **anche a te***, against Dutch *voor jou
  **ook*** — the Italian/Dutch position contrast on one aligned pair.
- 6036562's French carries **both** *Tu vas aussi me manquer* **and** the
  reduplicated *Toi aussi tu me manqueras*.

**Tokenisation survivor report (the required one):** `"ook missen"` returns 2, and
**13285305 *Tom had het ook mis*** passes on tokens and is wrong — *mis* there is
the predicative of *het mis hebben* ("Tom was wrong about that, too"), not the verb
*missen*. A stronger false positive than the sibling's possessive *je*
("Ik mis je grapjes").

**The zeros are not treated as evidence.** `ik mis jou` = 0 while `ik mis je` = 11,
so the zero tracks corpus size, and ANS 5.2.7 licenses `jou` on rule — the standard
`ik-mis-je-nu-al-betekenis` set, held here.

## Phase 3b — the checkable error in a ranking result

**Reverso Context, rank #1 (and #5).** Thirteen example pairs on the first page;
**3 of 13 render the Dutch present `ik mis` as English past `I missed`:**

- *"Het geeft niet, ik mis jou ook."* → *"It's okay. **I missed you too.**"*
- *"Ja ja ik mis jou ook, maar ik zie je biiiijjjjjna!"* → *"Yes **I missed you
  too**, but I'll see you again reaaaal soon!"*
- *"En ik mis jou ook, Japita."* → *"**I missed them, and I missed you too.**"*

Dutch *ik mis* is a plain presens (ANS 2.4.8.3.i: w = r = s, established by the
sibling row). For a **reply** this is not cosmetic: *I missed you too* answers a
different message. The page 403s a scripted UA; read in the real browser, title
self-authenticated as *"ik mis jou ook - Vertaling naar Engels … | Reverso
Context"*.

Second, smaller: **WordHippo (#3)** lists *"I miss you also"* under "More meanings
for Ik mis jou ook", presenting two English renderings as interchangeable where
the Dutch alternation encodes the difference.

## Phase 3c — third-party research (4–6, caps respected)

Named journals, both **full text read** via
`https://www.ebi.ac.uk/europepmc/webservices/rest/<PMCID>/fullTextXML`:

1. **Open Research Europe** 5 (2025-02-03), PMC12086508, CC BY — Sauerland,
   Sugawara & Yatsushiro, *Higher-Order Logical Reasoning in Preschool Children*.
   140,603 chars read. n = 36 German children (3;7–5;11) + 20 adults. From the body:
   adults *"always chose the picture representing the surface scope
   interpretation"*, i.e. **a preference for scope to follow linear order**.
2. **Corpus Linguistics and Linguistic Theory** (2025-03-14), PMC12919633, CC BY —
   Just & Widmer, Swiss German text messages. 163,446 chars read. 10,674 messages,
   288,434 tokens. From the body: writers *"prioritize prosody and phonology over
   syntax"*, which *"particularly affects function items coming in the form of
   clitics and particles."*

Banned/spent avoided: Frontiers in Psychology, PLoS ONE, Scientific Reports, BMC
Psychology, Behavioral Sciences, PNAS; PMC12294133 / PMC12482273 / PMC11878271
(Dutch siblings); `doi.org` (at cap 3) — publisher-side URLs used instead.

Instruments: ANS ×3 sections (+5.2.4.2 and 21.3.1.1 read and title-verified),
Tatoeba. **e-ans.ivdnt.org takes its third and final domain slot with this post.**

## Instrument notes worth keeping

- **e-ANS returns HTTP 200 for topic ids that do not exist.** `…/pid/ans210801`
  (without the `lingtopic` suffix) serves a page titled **"ANS | Fout"** reading
  *"Helaas. Dit topic met id ans210801 lijkt niet te bestaan."* Every page here was
  title-checked before citing. Working id shape: `ans` + two digits per level +
  `lingtopic` (5.2.7 → `ans050207lingtopic`; 21.4.9.4.1 → `ans2104090401lingtopic`).
- **`Instituut voor de Nederlandse Taal` redirects on en.wikipedia to
  `Dutch Language Union` (Q152299)** — a different organisation. Not used.
  `Algemene Nederlandse Spraakkunst` has no en.wikipedia page (`missing: true`),
  so it got no `sameAs`.
- Van Dale and `gtb.ivdnt.org` were not attempted: BRIEF §4 records both as
  unusable, and no claim in this post needs a dictionary.

## Split from the two Dutch siblings

- `ik-mis-je-nu-al-betekenis` (**live**): *nu al* is compositional, and there is no
  tense paradox. Shares the focus-particle section; uses it for *al*, not *ook*.
- `ik-mis-je-in-het-frans`: *missen* is `overgankelijk`, the speaker is subject,
  and ANS 20.5 lists *mankeren*/*ontbreken* but not *missen*.
- **This post:** neither meaning nor argument structure — **scope**. Which word
  *ook* attaches to, and why the answer is carried by `jou` rather than by where
  the particle sits. No section, source clause or first-party line overlaps.
