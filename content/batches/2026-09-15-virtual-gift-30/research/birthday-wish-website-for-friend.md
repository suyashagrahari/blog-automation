# Research brief — `birthday-wish-website-for-friend`

Batch `2026-09-15-virtual-gift-30`, **wave 2**. Market India, evergreen.
Primary keyword: **birthday wish website for friend**.
Secondaries (from `WAVE2-PLAN.json`): `birthday wish website for best friend`,
`online birthday wish page for friend`.
Category `milestone-birthdays`. Assigned templates `/photo-puzzle`, `/catch`,
`/templates` — all three kept, no swap.

This row **replaced** `digital gift ideas for girlfriend`, which its own agent
aborted after measuring 5 of 10 URLs identical to a published sibling. It was
screened for ecommerce density *and* URL overlap before it was created: zero
overlap with `birthday website for girlfriend` and with
`long distance gift for best friend`.

---

## Phase 1 — SERP

`SERPS-WAVE2.md` did not carry this keyword, so I collected it myself, once:

```
node scripts/serp-ddg.mjs "birthday wish website for friend"
engine: ddg-html   region: in-en   date: 2026-09-16
```

| # | URL | What it is | Shape |
|---|---|---|---|
| 1 | thegreeter.in | "Create Beautiful Birthday, Anniversary & Wish Pages" | **Competitor product** |
| 2 | blinkwish.in | "BlinkWish AI — Create Interactive Wishes & Greetings" | **Competitor product** |
| 3 | wishesbirthdays.com/heart-touching-birthday-wishes-for-a-friend | "80 Heart Touching Birthday Wishes for a Friend" | Quotes listicle |
| 4 | thegreeter.in/birthday-wishes-website | "Instant Birthday Wish Website Maker" | **Competitor product** |
| 5 | sharemywishes.com/birthday-wish-link-generator | "Birthday Wish Link Generator" | **Competitor product**, group-signing |
| 6 | gifft.me/create/happy-birthday | "Create Free Virtual Birthday Gifts and eCards" | **Competitor product** |
| 7 | wishesmaker.com | "Create Personalized Wishes Instantly, 100% Free" | **Competitor product** |
| 8 | lovingecards.com/blog/birthday-wishes-for-a-friend | "80+ Heartfelt Messages 2026" | Quotes listicle |
| 9 | blog.tribute.co/birthday-wishes-for-friend | "100+ Birthday Wishes for a Friend" | Quotes listicle |
| 10 | wishesheaven.com/birthday-wishes-for-friend | "100+ Heartfelt Happy Birthday Wishes for Friend" | Quotes listicle |

**Gate 2: clean.** Zero ecommerce — no Amazon, no Flipkart, no Etsy, no gift
cards, and no physical product anywhere in the ten. This confirms the
`WAVE2-PLAN.json` `gate2` note.

Two drifts from the note worth recording: the plan predicted Good Housekeeping
and a second `gifft.me` result; the live India SERP on 2026-09-16 instead
returned `blog.tribute.co` and `wishesheaven.com`. That makes it **six
competitor products and four quotes listicles, and no non-competitor source I
could cite at all.** Nothing on this SERP is linked or paraphrased anywhere in
the post.

**Structure of what ranks.** The six products are homepages or bare builder
pages: a hero, a CTA, no body copy to speak of, no data, no author, no FAQ.
The four listicles are the opposite — 1,500–3,000 words of copy-paste wish
text, an H2 per tone ("funny", "emotional", "short"), no product, no numbers.
Neither half answers *how do I make one, and what do I put on it.*

**Autocomplete substitute.** Grepping
`content/keywords/2026-09-15-virtual-gift-100/ac*/autocomplete.csv` for `friend`
returns almost nothing on friend birthdays — the hits are
`anniversary gift for friends`, `anniversary gift best friend`,
`anniversary gift kya de friend ko`. The harvested demand on this axis is
overwhelmingly girlfriend/boyfriend, which is consistent with 58 of the 60 posts
in this batch being romantic or family. Fan-out came from the SERP split above
rather than from autocomplete.

## Phase 2 — Gap

**Table stakes** (all ten cover, in one half or the other): what to say in a
birthday wish; that a link is the delivery mechanism; that it should feel
personal.

**The gap.** Nobody addresses the register problem. Every builder on this SERP
sells "make a wish page" as though the recipient's identity were irrelevant, and
every listicle hands over text a stranger wrote. Neither says *this template is
written for a partner and will read wrong from a friend.* That judgement is the
post.

**Second gap, from the SERP itself.** Result 5 is a "wish link generator" — many
senders, one recipient, one page they all sign. That is a real feature axis and
SubhSandesh does not have it. The post says so in its own H2 rather than
pretending the product is complete.

**Unanswered questions** the ranked pages raise and drop: what do you write if
you have drifted; what if every photo is a group photo; how do you stop an early
forward spoiling a surprise. All three became FAQs.

**Fan-out sub-queries → H2s:** what is it · why the romantic script fails ·
what to put on it · which templates transfer · can a group sign one · how to
build it · when not to bother.

**Angle:** wins by being the only post that says which personalised-page
templates transfer from a romantic partner to a friend and which do not, using
SubhSandesh's own template mix as the evidence that the library is romantic by
default.

## Phase 3 — Sources

WebSearch and `serp.mjs` were not used (exhausted / hard-429 per BRIEF-WAVE2
§0). Discovery ran through Europe PMC → Crossref → DOAJ → OpenAIRE.

**What did not work, recorded so the next agent does not repeat it.** Europe PMC
is biomedical on this topic: `birthday wishes Facebook social network tie
strength` returned eight gerontology abstract books and nothing else;
`friendship ritual celebration` returned Chinese *guanxi*, Andean funeral rites
and a palliative-care paper. OpenAIRE's JSON nests every field under
`oaf:result` and my parser produced `[object Object]` — not worth a second pass
against DOAJ, which answered directly. `nature.com` (Humanities & Social
Sciences Communications) and `sfleducation.springeropen.com` both returned a
bot challenge; `journal2.um.ac.id` returned HTTP 418 on http *and* https.
Springer, Taylor & Francis, Emerald, SAGE and Elsevier all held every on-point
friendship-maintenance paper I found and all of them are blocked per BRIEF §10.

**What worked: DOAJ with two-word queries.** `birthday greetings`,
`birthday wishes` and `congratulation speech act` surfaced an entire small
literature on birthday greetings as a speech act that nobody in this batch has
touched.

Five sources, all fetched and verified with `ctx_fetch_and_index`, all
open-access, **all read at abstract level only** (the landing pages carry the
abstract; I did not pull the PDFs):

| Source | Domain | Year | Verified claim |
|---|---|---|---|
| The Mental Scenarios and Internet Genre Etiquette of Different Cultures | journals.vu.lt | 2012-10-25 | Most online greeting texts have no author; they move site to site and are re-used by a wide circle of "implementers" |
| Facebook Birthday Postings from a Language Ecology Perspective | jle.hse.ru | 2016 | 680 postings, four languages; most are short and follow one similar pattern |
| Do Iranians and Americans Congratulate their Friends Differently on their Birthdays on Facebook? | elt.tabrizu.ac.ir | 2016 | 120 notes, 60 Iranians + 60 Americans, seven categories, significant differences in five; IFID and blessing wishes showed none |
| Birthday, Culture, and Social Media | journals.ysu.am | 2019 | British, Polish, **Indian** and Armenian profiles; formulaic vs personalised wishes differ markedly by culture even in English |
| Interpersonal mattering and students' friendship quality as predictors of subjective wellbeing | ijphs.iaescore.com | 2022-12-01 | 119 Malaysian emerging adults, 18–25; mattering predicted wellbeing more strongly than friendship quality |

**Cap check against `SPENT-SOURCES.json` (regenerated 2026-09-16) and the 30+
sibling files in `blogs/`.** Four of the five domains appear nowhere in the
batch. `journals.ysu.am` appears once, on a different URL, so this is its second
of three. None is in `domainsAtCap`. No generic context statistic is used at
all — zero PIB/TRAI/Census/MEA.

**Swap test — recorded as the one audit failure.** Three of the five are about
birthday greetings generally, not friendship specifically, and could sit
unchanged in `birthday-website-for-girlfriend` or
`birthday-surprise-page-for-sister`. Only Tabriz (notes written *to friends*)
and IJPHS (friendship quality) are recipient-specific. Friendship-birthday
research that is both open-access and fetchable from this sandbox does not
appear to exist; the two best leads were paywalled behind blocked publishers.

## Phase 4–5 — Facts, templates, links

**First-party facts.** Checked `factsUsed` across all 30+ sibling files first.
The two lines this post opens on are among the least-used in the batch:
`/birthday-gf` at 352 / 8.1% (15 prior uses) and love-gf's 16,201 views / 32.4%
(9 prior uses). Deliberately avoided: the 40.6% password figure (46 uses) and
the 6.2-hour edit gap (40 uses), per BRIEF-WAVE2 §4. The mandated disclosure —
the database records which *template* was created, not who received it — is in
the body, immediately under the table, not only here.

**No pricing claim anywhere.** The `facts.md` pricing block is empty. The FAQ
asking whether it is free says plainly that current pricing cannot be confirmed
and points at the template library.

**Templates — which transfer and which do not.** Descriptions read from
`TEMPLATE_LINKS` in `app/lib/prompt.ts` before writing.

- **Kept `/photo-puzzle`** (The Last Piece — photo jigsaw, each piece reveals a
  line of a letter, the final piece is not in the box). It is a game. Nothing in
  the frame asserts romance, and the fragment-by-fragment reveal is the right
  container for a specific shared memory.
- **Kept `/catch`** (a letter falling one line at a time, caught with the
  recipient's own face; nothing ever locks). Also a game, and the "nothing is
  ever locked" property matters for a friend who loses interest halfway.
- **Kept `/templates`**, once, near the closing CTA.
- **No swap was needed.** Both assigned templates genuinely fit.

**Judged NOT to transfer, and named in the body with reasons:** `/love-gf`,
`/darling`, `/bouquet-gf` and `/missyou-gf` are written as declarations of
romantic love and arrive from a friend as a confession; `/proposal`,
`/date-invitation` and `/flags` presuppose a dating relationship outright;
`/birthday-gf` is the platform's only birthday page and its copy is
partner-shaped, so it needs rewriting line by line. Worth recording for the
batch: `TEMPLATE_LINKS` notes that `/birthday-friend` and `/birthday-bestfriend`
were **removed on 2026-09-02** because they 307-redirected to `/birthday-gf` —
there is genuinely no friend-specific birthday page to link, which is the
product fact this whole post is built on.

**Internal links: three**, all from `TEMPLATE_LINKS`, all placed after the
section that earns them. No `nearestLive` exists for this row, so no blog
cross-link was added.

**Cannibalisation.** No `nearestLive` in `WAVE2-PLAN.json`. Nothing in the
measured SERP is a subhsandesh.in page. The three positions the site already
holds (`sorry page for girlfriend online`, `apology website for girlfriend`,
`wedding wish page online`) are unrelated to this keyword.

## Phase 6 — Audit

49 passed, 1 failed, disjoint, 50 total. The single failure is the swap test,
with the blocked-publisher reasoning above. Full strings in
`blogs/birthday-wish-website-for-friend.json`.

**Honest assessment.** The ten ranked pages are six thin product homepages and
four quote listicles. This is the only page on the query that tells a reader
which template is the wrong register for a friend and prints a first-party
number behind the claim, and the only one that names a feature the product does
not have. Every third-party claim comes from an abstract, not a full text.
Domain authority is well below the incumbents; months, not weeks, and no
position is predicted.
