# Wave 2 brief — 2026-08-26-birthday, ranks 13–22

Read `BRIEF.md` first for the first-party data and the general rules. This file carries
**four corrections to wave 1** and the wave-2 source position. Where the two disagree,
this file wins.

Ranks 2 and 3 of the shortlist (`birthday date personality test`,
`birthday decoration ideas at home`) are **not** in this wave. They remain held on the
Phase 0 gate — no first-party data exists for numerology or physical decoration — and
have not been authorised for an override.

---

## Correction 1 — the source cap is PER BATCH, not corpus-wide

Wave 1 was briefed with corpus-wide domain counts. **That was wrong.** Checklist item 65
states it plainly:

> No source URL appears in more than 2 posts **in this batch**; no domain in more than 3.

`SOURCE-EXCLUSIONS.md` therefore over-restricts. Its corpus-wide figures made four
language agents route around venues that were never actually capped, and cost one of them
a working source mid-draft. **Ignore its "OVER CAP" lists.** Use the in-batch measurement
below and the snippet that produces it.

Corpus-wide concentration still matters as **judgement, not a cap**: nine posts leaning on
one press release reads like a content farm to a retrieval system. So prefer a domain the
corpus has not leaned on — but do not treat corpus-wide counts as a prohibition.

### In-batch position after wave 1 (10 posts, 43 domains)

**Two of three slots used — one left each:**
`pure.uva.nl` · `ccsenet.org` · `journals.openedition.org` · `r12a.github.io`

`r12a.github.io` matters most to you: Richard Ishida's orthography notes are the obvious
source for Punjabi, Urdu, Bengali and Kannada script questions, and **only one post in
this batch can still cite that domain.** Four of you may want it. First to verify it takes
it; the rest need something else. Coordinate by not assuming.

Every other domain sits at 1 of 3. Measure before you cite:

```bash
python3 - <<'PY'
import json,glob,os,collections
dom=collections.defaultdict(set); url=collections.defaultdict(set)
for p in glob.glob("content/batches/2026-08-26-birthday/blogs/*.json"):
    j=json.load(open(p)); s=os.path.basename(p)[:-5]
    for x in (j["batchMeta"].get("sources") or []):
        u=(x.get("url") or "").split("?")[0]
        if "://" in u: dom[u.split("/")[2].replace("www.","")].add(s); url[u].add(s)
for d,v in sorted(dom.items(), key=lambda x:-len(x[1])):
    if len(v)>=2: print(len(v), d, sorted(v))
print("URLs at 2:", [u for u,v in url.items() if len(v)>=2])
PY
```

---

## Correction 2 — measure words with `wordCount()`, and only that

Three of ten wave-1 posts recorded the word-count item as **passed** while 17–23 words
over the cap. All three had measured with a plain whitespace split and reported it as
`wordCount()`. They are not the same function: `wordCount()` replaces markdown
punctuation with spaces, so it splits hyphenated words (`96-character` → 2) and counts
table-cell delimiters. It reads roughly 25 higher than a plain split.

Checklist item 41: **1,500–1,800 words in `contentMarkdown` excluding FAQs.**

**Target ~1,770, not 1,799**, so a later edit does not push you over. Run exactly this,
substituting your slug:

```bash
node -e "
const fs=require('fs');
const j=JSON.parse(fs.readFileSync('content/batches/2026-08-26-birthday/blogs/<SLUG>.json','utf8'));
const md=j.article.contentMarkdown;
console.log(md.replace(/\`\`\`[\s\S]*?\`\`\`/g,' ').replace(/[#>*_\`|\-[\]()!]/g,' ').split(/\s+/).filter(Boolean).length);
"
```

---

## Correction 3 — where the language blocker goes in the audit

There is no checklist item for native-language verification; I grepped for
verif/native/language/script and none exists. In wave 1 each language agent therefore
mapped the blocker to a different item, and two said in their own `why` that the item was
not really what failed. That makes the audits inconsistent and slightly dishonest.

**For this wave, map it to exactly this item, verbatim:**

> The post contains at least one claim none of the top 5 pages make

That mapping is true rather than arbitrary: in a language post the differentiating claim
**is** the script content. If the wishes, transliterations and honorific guidance are
unverified, that claim is not established. Record it as **structural**, with a `why` that
names the closing condition and makes clear a citation cannot close it.

Also: keep each `failed` entry's `why` describing **its own** item. One wave-1 post had all
three entries paired with another item's `why`, so three items falsely passed while three
real failures sat in `passed`. Sums and disjointness were correct, which is exactly why it
survived review — check the pairing yourself.

---

## Correction 4 — general sources need lane discipline too

Wave 1 allocated lanes for the required scholarly source only. Two agents then
independently cited the same generic typing-speed study, which duplicated a URL inside the
batch and failed the swap test by demonstration. **Every** source has to pass the subject
test and the swap test, lane or not. If a figure would sit unchanged in a sibling's post,
it is filler in both.

---

## Standing rules, unchanged from wave 1

- **Phase 0 is satisfied** by `BRIEF.md`'s first-party data (n=198). Use ≥3 facts, ≥2 in
  the first 150 words. Prefer the birthday-specific numbers over the site-wide ones.
- **Do not call WebSearch** — the session budget is exhausted at 200/200 and it errors.
  Your Phase 1 SERP is supplied in `ASSIGNMENTS-WAVE2.json`, harvested India-localised
  (`gl=in`) in a real browser.
- **WebFetch is blocked. Use `ctx_fetch_and_index`**, then `ctx_search`. Shell through
  `ctx_execute`. Never `curl` or `wget`.
- **Read full text, not abstracts, wherever the full text is reachable.** Wave 1 caught two
  real citation errors this way: a gratitude study cited as n=196 is n=164, and an
  eye-tracking paper's abstract says 44 participants where its Methods say 50 per group.
  Record explicitly when only an abstract was readable.
- **Scratch files must be named `<slug>-<purpose>.md`.** The scratchpad is shared.
- **Never cite or link a competitor**, including every domain in your SERP block.
- At most **1 generic context statistic** (PIB / TRAI / Census / MEA) per post.
- FAQs in `article.faqs` + FAQPage JSON-LD only — never in `contentMarkdown`. 8–12 FAQs.
- `batchMeta.categorySlug` = `milestone-birthdays`. Template URLs only from
  `TEMPLATE_LINKS` in `app/lib/prompt.ts` — never invent a slug.
- Audit: all **50** items, `passed ∩ failed = ∅`, `|passed| + |failed| == 50`, strings
  verbatim, **never a placeholder**, `honestAssessment` real prose and never "TBD".
  Process limitations go in `honestAssessment`, not `failed`.

## Cannibalisation — 181 birthday posts are already live

Live already, do not restate: `birthday-wishes-for-wife`, `-teacher`, `-daughter`,
`-boss`, `-sister`, `-elder-sister`, `-friend`, `-best-friend`, `-bestie`, `-brother`,
`-husband`, `-son`, `-jiju`, `-bhabhi`, `-papa`, `-mummy`, `-nani`, `-dadi`, `-chachu`,
`-mama`, plus `birthday-message-maker-for-girlfriend` and
`free-birthday-wish-website-maker`. Wave 1 added ten more in this batch — read the sibling
slugs in `blogs/` before settling your angle.

Two specific risks in this wave:

- **`birthday-wishes-for-younger-sister`** — `birthday-wishes-for-sister` and
  `-elder-sister` are both live. Yours must be about *younger* specifically, or it is a
  third sister page.
- **`birthday-wishes-reply-in-hindi`** — wave 1's `thank-you-for-birthday-wishes` covers
  reply etiquette in English and absorbed the threshold arithmetic. Yours is the Hindi
  query. Do not re-derive the same threshold; link nothing, and find a different spine.
