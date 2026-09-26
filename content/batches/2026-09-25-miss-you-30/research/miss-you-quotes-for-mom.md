# Research — `miss you quotes for mom`

Batch `2026-09-25-miss-you-30`, wave 2. Written 2026-09-25. Zero WebSearch calls spent:
every SERP title, every live page and every paper reached by sandboxed `fetch` or by
`findpapers.mjs` (Crossref + Europe PMC REST).

---

## 0. The row in one sentence

`sympathymessageideas.com` — a bereavement-support site — ranks **#1** on this SERP. A
large share of people searching `miss you quotes for mom` have lost their mother; the rest
have a mother alive in another city. **Conflating them is the failure mode**, and the
measurement below shows the SERP conflates them almost universally.

---

## 1. SERP measurement (Phase 2) — live titles fetched 2026-09-25

SERP source: `SERPS-WAVE2.md`, `## miss you quotes for mom` (DuckDuckGo `kl=in-en`,
second screening round). 8 organic results. All 8 returned HTTP 200 to a browser UA.
Titles were **fetched, not read off slugs**, per the WAVE-2 METHOD table.

| # | Host | Live `<title>` | Count-led | Bereavement in title | Living-mother in title |
|---|---|---|---|---|---|
| 1 | sympathymessageideas.com | 50 Touching I Miss You Mom Quotes and Messages | yes (50) | no | no |
| 2 | momjunction.com | 200+ Melting Quotes About Missing Mom | yes (200+) | no | no |
| 3 | parenting.firstcry.com | 100+ Quotes About Missing Mom – Touching Sayings to Remember Her | yes (100+) | no | no |
| 4 | quotewords.com | Miss You Mom Quotes | no | no | no |
| 5 | wishesexpert.com | 45+ Heartfelt Miss You Mom Quotes | yes (45+) | no | no |
| 6 | eventgreetings.com | 35 Heartfelt Miss You Mom Quotes And Sayings | yes (35) | no | no |
| 7 | impactvilla.com | 50 Touching I Miss You Mom Quotes and Messages | yes (50) | no | no |
| 8 | quotena.com | 150 I Miss You Mom Quotes From Daughter (Updated 2026) | yes (150) | no | no |

### The three counts the row was asked for

- **Bereavement-framed titles: 0 of 8.** No title contains heaven, memory, loss, passed,
  died, in-memoriam or any equivalent. firstcry's "Touching Sayings to Remember Her"
  leans that way but names nothing.
- **Living-framed titles: 0 of 8.** No title contains long distance, away, another city,
  abroad, hostel or any equivalent.
- **Mixing both readers with NO signposting: 6 of 8.** Method: body text was stripped of
  script/style/markup and regex-counted for bereavement vocabulary (heaven, passed away,
  died, death, grave, angel, no longer here, gone too soon, rest in peace) and for
  living-contact vocabulary (call you, phone, video call, visit, come home, flight, miles
  away, WhatsApp, text you, counting the days). Then the H2 list of each page was read for
  a **labelled** section that warns a bereaved reader before the first list.

Per-page hit counts (body words / bereavement hits / living-contact hits):

| Host | words | bereavement hits | living-contact hits | labelled bereavement section? |
|---|---|---|---|---|
| sympathymessageideas.com | 2,208 | 20 | 0 | no |
| momjunction.com | 8,498 | 29 | 4 | no |
| parenting.firstcry.com | 3,202 | 43 | 2 | **yes** — "Missing Mom in Heaven Quotes" |
| quotewords.com | 3,418 | 16 | 1 | no |
| wishesexpert.com | 1,949 | 9 | 0 | **yes** — "Miss You Mom In Heaven" |
| eventgreetings.com | 1,703 | 4 | 0 | no |
| impactvilla.com | 1,462 | 2 | 4 | no |
| quotena.com | 5,314 | 19 | 9 | no |

**8 of 8 carry bereavement language. Only 2 of 8 give it a labelled section. So 6 of 8
mix the two readers with no signposting at all — and 5 of 8 carry contactable-mother
language inside the same undivided list.** That mixing count is this row's differentiator
and it is high.

### Other measured SERP facts

- **7 of 8 titles are count-led** (50, 200+, 100+, 45+, 35, 50, 150) — at least **630
  lines claimed** between them. Volume is not where this page can win, consistent with the
  anchor row's finding on its own SERP.
- **#1 and #7 are the same article.** `impactvilla.com` carries sympathymessageideas'
  exact title and H2 sequence ("I Miss You Mom Quotes", "Miss You Mom Messages",
  "…From a Daughter", "…From a Son").
- **#4 quotewords.com is a pure mood-bucket bank** — Heartfelt / Emotional / Uplifting /
  Inspirational / Soothing / Comforting. This is the shape BRIEF-WAVE2 §0 bans.
- **#8 quotena.com is a link farm**: 21 H2s, most of them other posts' titles.
- **0 subhsandesh.in results.** `weAlreadyRank` is null for this row and that holds.

---

## 2. Live subhsandesh pages read (Phase 1 cannibalisation check)

### `/blog/miss-you-message-for-mom` — HTTP 200, fetched 2026-09-25

**It is the banned shape, confirmed.** Title: "Miss You Message for Mom — 80+ Lines & How
to Send". 5,916 words. H2/H3 list includes "Pick the right tone", "A table: Short vs Long
vs Playful vs Healing (examples)", "Tone checklist before you send", "How to write a miss
you message for mom that feels like a hug" and "A short, practical how-to (numbered
steps)". That is a **mood/tone-bucketed bank plus a write-your-own workflow** — both
banned for this row by BRIEF-WAVE2 §0.

**The decisive finding: the words heaven, died, passed away and "no longer with us" appear
ZERO times across its 5,916 words.** One H3 reads "For grieving moms", which means mothers
who are themselves grieving, not a reader whose mother has died. So the live page serves
the living-mother reader exclusively.

**Differentiation (not abort):** the live page is *messages* (compose and send) in a tone
taxonomy; this page is *quotes* (borrow and pass on) split by which reader you are, and it
takes the bereaved reader the live page does not address at all. Cross-linked in the body
so the two reinforce rather than compete.

### `/blog/long-distance-gift-for-mom` — HTTP 200, fetched 2026-09-25

Different batch (`2026-09-15-virtual-gift-30`), `categorySlug: family-and-continuity`, the
same category as this row. 3,121 words, product-side: which templates survive the move
from a partner to a parent, why the password step is the wrong default here, "When a page
is the wrong gift for your mother". Zero death vocabulary. It is the correct downstream
page for the **living** half of this post and is cross-linked from that half only.

---

## 3. Sibling de-confliction

`blogs/` was re-read immediately before the H2s were fixed. 43 posts on disk.
`miss-you-quotes-for-dad.json` **now exists**; `miss-you-quotes-for-grandmother` does not
yet.

**The dad row** (`Miss You Quotes for Dad, Split for Two Different Readers`) H2s:

```
If your father is alive and living somewhere else | If your father has died |
The words he never used | The hardest days, and what the record shows |
What the nine results on this search are doing | Where this runs out
```

It opens on the split itself, its mid-post axis is **emotional reticence** ("the words he
never used"), and it opened its first-party evidence on the two least-used facts (88.8%
published/shared; 2.6-hour median edit gap).

**How this row is different, deliberately:**

1. **Different first move.** The dad row's first H2 is the living-father section. This
   page's first H2 is the *phenomenon* — that what goes missing with a mother is the
   **unimportant, high-frequency contact**, not ceremony. The split is still declared in
   the first 150 words of the intro, before any H2.
2. **Different axis.** Dad = reticence (what he never said). Mom = **frequency and
   triviality of ordinary contact** (the call on the way home, the question about whether
   you ate). No result on this SERP writes that, and neither does the dad row.
3. **Different evidence.** Of the dad row's six sources this page re-uses exactly one
   (`PMC13366898`, loss-related objects) and for a different claim. The four
   mother-specific papers below are all unspent in the batch.
4. **Different first-party opening.** See §5 — the two least-used facts are the dad row's
   opener, so this page opens on the 3rd and 4th least-used instead, and says so.
5. **Different hard-days section.** Dad cites Swedish sibling-death-anniversary mortality.
   This page cites a Danish self-controlled case series covering **both the death
   anniversary and the deceased's birthday**, and draws the opposite-facing practical
   conclusion: the measured elevation is in the 30 days after the death, not on the
   anniversary.

---

## 4. Sources — all Europe PMC, all abstract-only

`europepmc.org` is cap-exempt in `verify.config.json` (repositories are not publishers).
**The journal cap still binds and is counted below.** All 42 PMCIDs already spent in the
batch were enumerated from the 43 posts on disk before selection; none of the four new
papers is among them. `capcheck.mjs` run immediately before saving.

Route used throughout: `findpapers.mjs` (Crossref + Europe PMC search) → Europe PMC REST
`search?query=PMCID:...&resultType=core` for the abstract. **The europepmc.org HTML
article pages 403 a scripted UA, so every figure below is from the REST abstract record,
not from full text. PDFs do not parse here.** Recorded as a failed checklist item.

| # | PMCID | Journal | Posts using this journal after me | Half |
|---|---|---|---|---|
| 1 | PMC12121901 | Journal of Family Issues (SAGE) | 1 | living |
| 2 | PMC13124240 | Journals of Gerontology Series B (OUP) | 3 (sister row, me ×2) | living |
| 3 | PMC10523011 | SSM – Population Health (Elsevier) | 1 | living |
| 4 | PMC13476080 | Journals of Gerontology Series B (OUP) | see above | living |
| 5 | PMC10465319 | Epidemiology and Psychiatric Sciences (CUP) | 1 | bereaved |
| 6 | PMC13366898 | BMC Psychology | 2 (dad row, me) | bereaved |

**Journals of Gerontology Series B reaches 3 posts** (the sister row's PMC13439929, plus
two papers inside this post — which is still one post for cap purposes, so the post-count
is 2). Recorded so a human can check it by hand, as the brief requires.

### 1. PMC12121901 — Journal of Family Issues, 2025-04-11, CC BY
German LifE-Study, 1,179 mother–child relationships tracked from mid-adolescence (1982) to
early adulthood (2002). SEM finding: emotional closeness, **contact frequency** and
instrumental support from adult children to mothers are shaped by adolescent family
experience; **mother–adult son relationships were "less involved and more reliant on
current contact frequency"** than mother–daughter ones.
Subject test: passes. Swap test: passes — it is specifically about mothers.

### 2. PMC13124240 — Journals of Gerontology Series B, 2026-04-01, CC BY
Within-Family Differences Study, 687 adult children (mean age 49.1) in 283 families,
multilevel models. More frequent **advice from mothers** was associated with higher
depressive symptoms in adult children; stratified by gender, the association held **among
sons but not daughters**, and mother–child tension exacerbated it.
Subject test: passes. Swap test: passes — mothers specifically.

### 3. PMC10523011 — SSM – Population Health, 2023-09-18, CC BY-NC-ND
LASI (Longitudinal Ageing Study in India) 2017-18, n = 19,401 aged 60+. **36% of older
parents have at least one migrant child; 35% are empty nesters.** Empty-nested older
adults had a higher prevalence of poor self-rated health and depression, and the authors
report **no significant difference in physical or mental health between left-behind and
non-left-behind parents** — what mattered was whether a child was in the household. The
stated policy implication is raising awareness among migrant children of "the importance
of maintaining frequent contact and visiting their aging parents."
Subject test: passes (distance, India). Swap test: passes for this batch — no other row
targets a parent left behind by migration.

### 4. PMC13476080 — Journals of Gerontology Series B, 2026-08-01, CC BY
SHARE wave 9 (2021-22) and ESS round 10 (2020-22), 23 European countries. **Face-to-face
and phone contact between older parents and adult children remain widespread, whereas text
and especially video contact are less common**; digital contact is a supplementary channel
that does not follow the North/South gradient. Used only for the channel claim.
Subject test: passes. Swap test: **transferable** — see §6.

### 5. PMC10465319 — Epidemiology and Psychiatric Sciences, 2023-08-08, CC BY
Danish national registers 1980–2016, self-controlled case series of everyone bereaved by
the suicide of a first-degree relative or partner who then self-harmed or died by suicide
within 5 years. **No evidence of elevated risk in the 6 weeks either side of a death
anniversary or the deceased's birthday** — IRR_adj 1.00 (95% CI 0.87–1.16) after suicide
bereavement, 1.04 (1.00–1.08) after other causes. **Rates were elevated in the 30 days
immediately after bereavement by other causes: IRR_adj 1.95 (95% CI 1.77–2.22).**
Subject test: passes. Swap test: **transferable** — see §6.

### 6. PMC13366898 — BMC Psychology, 2026-05-21, CC BY
250 bereaved adults; ECR-R-SF, DERS-BF and PG-13. **83.2% kept a loss-related object.**
Keepers had higher grief symptom scores (t = 3.36, p = .001). PG-13 scores were associated
with visiting frequency (β = .14), smelling the object (β = .21) and pain experienced
during interaction with it (β = .27).
Used here for one purpose only: a kept artefact addressed to someone who has died is not
neutral, so no template is recommended on the bereaved half. The dad row cites the same
paper for a different claim; that is 2 posts, at the URL cap, and `europepmc.org` is
cap-exempt regardless.
Swap test: **transferable** — see §6.

---

## 5. First-party data — the binding constraint

`content/facts.md`, `## Miss-you segment — the /missyou-gf template`, regenerated
**2026-09-24/25**. The `## Superseded vintage` ARCHIVE was not touched. `## Pricing` is
EMPTY, so no price, cost or "free" claim appears anywhere in the post.

Usage counted across all 43 posts in `blogs/` on 2026-09-25:

| fact | posts using it |
|---|---|
| 88.8% published and shared (190 of 214) | 14 |
| median 2.6-hour first-save→last-edit gap | 15 |
| 92.1% carry an "open when" letter (197 of 214) | 23 |
| 2,417 views, 11.3 per page, 104 on one page | 24 |
| 86.4% carry a written memory (185 of 214) | 25 |
| 13.6% record a voice note (29 of 214) | 38 |

**Deliberate deviation from "open with the two least-used".** The two least-used (88.8% and
2.6 hours) are *exactly* the pair the sibling `miss-you-quotes-for-dad` row opens with, and
that row also splits bereaved from living. Opening on the same pair would make the two
pages read as one template filled in twice, which is the worse failure of the two. This
page therefore opens on the **3rd and 4th least-used** — 92.1% "open when" letters and the
2,417 views / 11.3-per-page figure — which are also the two that actually carry the
argument (a page returned to repeatedly, for ordinary future occasions).

**Differentiation from first-party data is thin and is stated as such.** Twelve miss-you
lines serve 44 posts; every one is in at least 14 siblings. The post does not pretend
otherwise.

**The mandatory caveats travel with every citation of these lines:** n = 214 over two
months (template live 2026-07-28, so no seasonal claim is derivable); `viewCount` counts
page views, not unique visitors; and the city / music / "together since" fields are
pickers with defaults. Also disclosed in the body: **the database records which template
was opened, never who received it.**

**And the one that matters most for this row: none of the 214 pages can see a bereaved
sender.** Every one was built to be sent to a person alive to open it. The post says this
in the intro, again in the table, and again in the bereaved section.

---

## 6. Known failures, carried honestly into `auditReport.failed`

1. **Swap test.** Four of six sources are mother-specific or India-migration-specific and
   could not move. Two — PMC10465319 (anniversaries) and PMC13366898 (loss-related
   objects) — could sit unchanged in `miss-you-quotes-for-dad` or a future
   `miss-you-quotes-for-grandmother`. They were kept because they are the only measured
   evidence for the two claims that make the bereaved half safe (the hardest-days section,
   and the refusal to put a product CTA there). Closes only by dropping the claims.
2. **Outbound links fetched.** europepmc.org article pages return 403 to a scripted UA
   (Cloudflare). Every figure was verified against the Europe PMC REST record for the same
   PMCID; that is the abstract, not the full text. A human browser opens the links
   normally.
3. **TEMPLATE_LINKS.** The three template links (`/missyou-gf`, `/watch`, `/templates`)
   are all real TEMPLATE_LINKS entries. The post also carries two blog cross-links
   (`/blog/miss-you-message-for-mom`, `/blog/long-distance-gift-for-mom`, both HTTP 200
   on 2026-09-25) which BRIEF-WAVE2 §1 requires and which are not in TEMPLATE_LINKS. The
   two rules conflict; the cross-links were kept.

## 7. Scratch

No scratch files beyond this research note were left behind. `batch.json` was not touched.
