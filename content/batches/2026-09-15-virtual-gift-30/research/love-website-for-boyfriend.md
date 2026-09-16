# Research brief — `love website for boyfriend`

Batch `2026-09-15-virtual-gift-30`, wave 4, row 9 of `WAVE4-PLAN.json`.
Primary: **love website for boyfriend**. Secondary: `love website for boyfriend free`.
Category: `digital-gifts-romance`. Templates: `/love-gf`, `/streak`, `/flags`.
`mustDifferentiate: true` — 4/10 organic overlap with the published
`romantic website for girlfriend`.

---

## Phase 1 — SERP

**Source: `SERPS-WAVE4.md`, "## love website for boyfriend". Engine: Brave,
US-served, ads filtered, collected for wave 4.** Brave accepts no region
parameter, so this is *reliable evidence of page type* and *unreliable evidence
of Indian ranking order*. Nothing below should be read as an India position.

| # | URL | Type | Notes |
|---|---|---|---|
| 1 | yourlovepage.com | competitor landing page | banned source (BRIEF-WAVE3 §1) |
| 2 | yourlovepage.online | competitor landing page | banned |
| 3 | reddit.com/r/neocities — "does anyone know any lovepages, webpage dedicated…" | forum | person asking other people where to find this |
| 4 | reddit.com/r/LongDistance — "I have made a website for my girlfriend, what do you think" | forum | build-and-show-off thread |
| 5 | reddit.com/r/CasualConversation — "I just really love my boyfriend" | forum | **not about building anything** |
| 6 | reddit.com/r/love — "I feel like I'm too in love with my boyfriend" | forum | **not about building anything** |
| 7 | yourlovepage.com/website-for-boyfriend | competitor landing page | banned |
| 8 | justmeantforyou.com/blog/cute-website-for-boyfriend-girlfriend.php | competitor blog | banned |
| 9 | tiktok.com/@mayz.love video | social video | — |
| 10 | lovepage.io | competitor landing page | banned |

`blogResultsInSerp: 5/10`. **Zero ecommerce. Zero authoritative editorial.**

Fetch status, recorded honestly: `WebFetch` is blocked in this environment and
the competitor domains are banned as sources and links, so the top five were
**not** fetched in full. Reddit's JSON endpoints returned **HTTP 403** on both
threads tried (`/r/neocities/1phbhsy`, `/r/LongDistance/1jof8m2`), so the SERP
titles are the evidence used. Phase 1's "fetch each of the top 5 in full" was
therefore not performed; this is recorded as a failed checklist-adjacent step in
`auditReport.honestAssessment` rather than glossed.

**What the result set nonetheless establishes.** Four of ten results are Reddit,
and two of those four are people talking about loving their boyfriend with no
website in them at all. The query is ambiguous to the engine: "love website"
splits between *a site about being in love* and *a site that says I love you*.
No page in the ten resolves that, and no page in the ten is an authority.

## Phase 2 — Gap analysis

**Table stakes** (present across the competitor landing pages): what the page is,
that no coding is needed, that it sends as a link, a template gallery, a
privacy/password mention.

**The gap.** Every incumbent sells the artefact. None of them distinguishes a page
with an occasion on it from a page without one, and none of them writes for a male
recipient as anything other than a pronoun swap. Two specific holes:

1. **No occasion means no deadline, no pretext and no obligation.** A birthday page
   explains itself; a love page has to. Nobody on this SERP says so.
2. **A page with no end date can be a different *shape*** — finished at send, or
   accumulating. Nobody on this SERP frames the choice at all.

**Stale data:** none of the ranking pages cites any dated research or usage figure,
so there is nothing to supersede — which is itself the finding.

**Fan-out sub-queries** (from the SERP plus the India autocomplete harvest in
`content/keywords/2026-09-15-virtual-gift-100/`): *how to create a love website* ·
*love website template* · *a love website* · *love website maker* · *is a love
website for a boyfriend cringe* · *what do you put on a love website* ·
*love website for boyfriend free*.

**Angle.** Wins by being the only post in this cluster that treats a no-occasion
love page as a choice between a page that is finished at send and one that keeps
accumulating, and that treats a male recipient as a change of register rather than
a change of pronoun.

## Anti-cannibalisation

Siblings read in full before drafting (H2s, angle, takeaways, facts, sources,
opening):

1. `romantic-website-for-girlfriend` — *nearestWritten*. Frames the page as a letter
   for "interrupted presence" and specifies five content blocks. Claims `love
   website for girlfriend` / `for gf` / `for girlfriend free` as secondaries.
2. `cute-website-for-boyfriend` — argues that for a man, "cute" has to become funny,
   and ranks joke formats by how much they ask him to perform.
3. `cute-website-for-girlfriend` — "cute" as a format separate from "romantic".
4. `website-to-impress-girlfriend` — will the gesture land, and where it lands badly.
5. `love-letter-website-for-girlfriend` — which letter format gets reread.
6. `birthday-website-for-girlfriend` — four build routes against one deadline.
7. `how-to-make-a-website-for-your-girlfriend` — the build order.
8. `virtual-gift-website-for-boyfriend` — five checks for choosing a *service*.
9. `surprise-website-for-girlfriend-free` — what the word "free" charges instead.
10. `birthday-website-for-crush` — calibration, how much is too much.

**The split, in one sentence:** `romantic-website-for-girlfriend` answers what to
write on a page you send once to a woman; this post answers what changes when there
is no occasion to end the page and the reader is a man — whether to build a page
that is finished at send or one that keeps accumulating, and what has to replace
the pretext a birthday would have supplied.

Cross-linked: `/blog/romantic-website-for-girlfriend` and
`/blog/cute-website-for-boyfriend`. Keyword check run across all 78 sibling files —
no sibling claims `love website for boyfriend` or `love website for boyfriend free`
as primary or secondary.

## Phase 3 — Sources

Route used: **Crossref → Unpaywall → OA landing page**, per BRIEF-WAVE4 §2.
OpenAlex returned `429 insufficient budget, $0 remaining` (dead for the day, as
documented). Semantic Scholar returned `429` on the first call. DOAJ worked with
two- and three-word queries. OpenAIRE returned 200 but was not needed.

Search terms tried, phenomenon-first: `relational maintenance everyday routine
behaviors romantic couples` · `perceived partner responsiveness intimacy` ·
`masculinity emotional expression men disclosure romantic relationships` · `couple
rituals everyday ordinary relationship` · `mediating intimate relationships
technology strategies` · `Snapchat streaks friendship maintenance` · `gamified
streak commitment obligation` · `emotion work gender division heterosexual couples`
· `expressed gratitude romantic partner appreciation` · `affectionate communication`
· `spontaneous gift no occasion surprise romantic partner` · `digital keepsake
mementos` · `awareness systems staying in touch couples`.

Hosts that refused: `scienceopen.com` 403 (the best-matched paper on this angle,
*Love Is All You Need: User Preferences of Strategies for Mediating Intimate
Relationships Through Technology*, BCS HCI 2018, is OA only there),
`scholarworks.calstate.edu` 403, `hv.diva-portal.org` and `publicera.kb.se`
Anubis-challenged, `oro.open.ac.uk` 403, `pure.au.dk` served metadata with no
abstract, `nesnedergisi.com` and `pssr.org.pk` are PDF-only and PDFs do not parse
here. Domains already at the cap of 3 were excluded before fetching.

**Four sources, all open-access peer-reviewed journals, all fresh domains for this
batch except `hipatiapress.com` which moves 1 → 2. Every one is an
abstract-and-metadata read; no full text was parsed.**

1. **Chonody, Killian, Gabb & Dunk-West (2017)**, "Understanding Everyday
   Relationship Work: The Development of a Relationship Maintenance Scale",
   *Advances in Social Work* — n=8,162 across 60 countries; an 8-item Relationship
   Maintenance Scale built from exploratory then confirmatory factor analysis.
   Published 2017-01-30.
   `https://advancesinsocialwork.iupui.edu/index.php/advancesinsocialwork/article/view/21155`
2. **Gados (2026)**, "Exploring the Adherence to Masculine Norms and Emotional
   Expression of Male College Students", *Masculinities & Social Change* 15(1) —
   n=100; CMNI-22 and the Emotional Expressivity Scale; after adjusting for shared
   variance, r = 0.783, p < .001 between masculine-norm adherence and emotional
   suppression, strongest on Work, Status and Reliance.
   `https://www.hipatiapress.com/hpjournals/index.php/mcs/article/view/18215`
3. **Khattri (2010)**, "Rites of Passage: Flow of Gifts", *Dhaulagiri Journal of
   Sociology and Anthropology* 4, 111–128 — in rites of transition people are
   obliged to give and obliged to receive; refusing a gift insults the giver.
   `https://nepjol.info/index.php/DSAJ/article/view/4516`
4. **Romdhon & Wahyuningsih (2013)**, "Hubungan Antara Pengungkapan-Diri dan
   Kepuasan Pernikahan dengan Dimediasi oleh Intimasi", *Psikologika* 18(2) —
   n=110 married adults in Cilegon, Banten; self-disclosure positively related to
   marital satisfaction, with intimacy as mediator.
   `https://journal.uii.ac.id/Psikologika/article/view/7680`

**Not found, and named as a finding:** no reachable open-access study measures the
obligation cost of a *couple's* daily streak. The closest, Hristova, Dumit,
Lieberoth & Slunecko, "Snapchat Streaks: How Adolescents Metagame Gamification in
Social Media" (GamiFIN 2020), is listed on `pure.au.dk` with metadata only and no
abstract, so it is **not cited**. The streak caveat in the post is written as a
judgement, not as a research claim.

## Phase 0 — first-party data

`content/facts.md`, measured **2026-09-15** (`npm run facts` cannot be re-run here;
the production-DB read is denied). Opening pair chosen to avoid the batch tic:
**3,377 registered creators at 1.29 pages each** and **11.5 average views per
created page** — a pair no near sibling opens with, and the pair that carries this
post's argument (the page is reopened far more often than it is made).

Mandatory disclosure carried in the body, not only here: **the database records
which template was opened, not who received it**, so /love-gf counts are not
evidence that any recipient was a girlfriend — which matters directly in a post
about sending one to a boyfriend.

**Pricing: `## Pricing (fill in by hand)` in `facts.md` is EMPTY.** The secondary
keyword contains "free". No figure is stated, inferred or implied anywhere in the
post; the post says cost cannot be confirmed and links `/templates`.
