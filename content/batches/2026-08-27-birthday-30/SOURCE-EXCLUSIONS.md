# Source exclusions — measured against the live corpus on 2026-08-27

Counted across all `content/batches/*/blogs/*.json`: **357 distinct source URLs over 260
domains.** The caps are: a URL in at most **2** posts, a domain in at most **3**.

Re-measure before you cite — other agents are writing right now and these counts move:

```bash
python3 - <<'PY'
import json,glob,collections
dom=collections.Counter()
for p in glob.glob("content/batches/*/blogs/*.json"):
    try: j=json.load(open(p))
    except: continue
    for s in (j.get("batchMeta",{}).get("sources") or []):
        u=(s.get("url") or "").split("?")[0]
        if "://" in u: dom[u.split("/")[2]] += 1
for d,n in dom.most_common(40): print(n,d)
PY
```

---

## Domains AT OR OVER the 3-post cap — do not cite

`archive.org` (11) · `pmc.ncbi.nlm.nih.gov` (7) · `drikpanchang.com` (5) ·
`aclanthology.org` (5) · `arxiv.org` (5) · `unicode.org` (5) · `research.ed.ac.uk` (4) ·
`doi.org` (4) · `frontiersin.org` (4) · `pib.gov.in` (4) · `lrec-conf.org` (4) ·
`indiapost.gov.in` (4) · `escholarship.org` (4) · `onlinelibrary.wiley.com` (4) ·
`journals.sagepub.com` (4) · `publicholidays.in` (4) · `dsal.uchicago.edu` (4) ·
`en.wikipedia.org` (3) · `theweek.in` (3) · `cambridge.org` (3) · `journals.plos.org` (3) ·
`hbs.edu` (3) · `digitalcommons.unl.edu` (3) · `digitalcommons.usu.edu` (3) ·
`w3.org` (3) · `web.mit.edu` (3) · `nature.com` (3) · `link.springer.com` (3) ·
`etheses.whiterose.ac.uk` (3)

## The specific problem for the four language posts

The 2026-08-25 rakhi batch already wrote seven language posts — Hindi, Marathi, Telugu,
Kannada, Punjabi, Gujarati, Bengali — and **it consumed the obvious script-and-language
research venues doing it**:

| Domain | Used by rakhi language posts | Status |
|---|---|---|
| `aclanthology.org` | telugu, punjabi, marathi, 2027-quotes | **OVER CAP** |
| `unicode.org` | bengali, kannada, punjabi, marathi | **OVER CAP** |
| `lrec-conf.org` | gujarati, kannada, diwali-hindi | **OVER CAP** |
| `w3.org` | bengali, wishes-link, name-on-photo | **AT CAP** |
| `learn.microsoft.com` (Devanagari typography) | marathi, name-on-photo | at 2 — one slot |
| `glottolog.org` | kannada, bhai-behan-shayari | at 2 — one slot |
| `journals.rudn.ru` | raksha-bandhan-wishes-in-hindi | at 2 — one slot |
| `shodhganga.inflibnet.ac.in` | raksha-bandhan-wishes-in-hindi | at 2 — one slot |
| `ijhssi.org` | raksha-bandhan-wishes-in-telugu | at 2 — one slot |
| `etheses.whiterose.ac.uk` | gujarati, punjabi | **AT CAP** |

**Do not assume a language source is free because it is obscure.** Check it.

Untried territory that is still open, by way of suggestion rather than instruction:
university language-department repositories, `scholarworks.*` / `ir.*` institutional
repositories, national library digitisation projects, `openreview.net`, `dspace.*`
instances, `persee.fr`, `redalyc.org`, `scielo.*` (at 2), regional linguistics journals,
and the language-specific standards bodies (e.g. a state government's official
script/keyboard specification, which is a primary source and usually uncited).

## If nothing in-cap exists

**Record it as a structural audit failure. Do not breach the cap, and do not pad with a
second government statistic.** The `why` should name the search terms you tried and the
condition that would close it. That is a real finding and it is worth more than a filler
citation — the whole point of the cap is that nine posts propped up by one press release
read like a content farm to a retrieval system.

## Already used inside THIS batch — treat as spent

| URL | In | Note |
|---|---|---|
| `userinterfaces.aalto.fi/typing37k/` | birthday-status-for-whatsapp | **Do not reuse.** It is a 36.2 wpm average over 37,370 volunteers — about no platform and no occasion, so it fails the swap test anywhere. It was already caught duplicating into the thank-you post. |
| `pure.uva.nl` | birthday-status-for-whatsapp, rakhi business-wishes | at 2 — one slot left |
| `ccsenet.org` | birthday-status-for-whatsapp, rakhi bengali | at 2 — one slot left |
| `hnpublisher.com` | birthday-status-for-whatsapp | one slot |
| `kclpure.kcl.ac.uk` | birthday-status-for-whatsapp | one slot |
| `nature.com` | belated-birthday-wishes (+2 rakhi) | **AT CAP** |
| `scielo.br` | belated-birthday-wishes, first-diwali-after-marriage | at 2 — one slot |
| `onlinelibrary.wiley.com` | thank-you-for-birthday-wishes (+3) | **OVER CAP — needs review** |
| `link.springer.com` | thank-you-for-birthday-wishes (+2) | **AT CAP** |

---

## Update 2026-08-27 — consumed since this file was written

`nature.com` **AT CAP (3)** — no slot left · `ccsenet.org` **AT CAP (3)** ·
`scielo.br` (2) · `twi-kreuzlingen.ch` (1) · `aquila.usm.edu` (1) · `da.lib.kobe-u.ac.jp` (1) ·
`ora.ox.ac.uk` (1) · `lup.lub.lu.se` (1) · `research.rug.nl` (1) · `research.birmingham.ac.uk` (1)

Institutional repository copies are working well — the cake post reached Oxford, Lund,
Groningen and Birmingham after Wikipedia, Springer, PMC and Frontiers were all blocked
on the cap. Prefer a university repository copy of a paper over the publisher's page.

**Also now AT CAP (3):** `europepmc.org`, `pure.uva.nl` — both consumed by
`birthday-wishes-for-nephew`. New this batch and still open: `poverty.com.pk` (1),
`journals.openedition.org` (2 — one slot).

---

## CORRECTION 2026-08-27 — the cap counts POSTS, not source entries

An earlier line in this file said `onlinelibrary.wiley.com` was "OVER CAP (4)". **That was
wrong.** It counted source *entries*; the rule counts *posts*. Wiley appears in 2 posts —
one rakhi post that cites three Wiley URLs, plus the thank-you post. It has a slot free.

Re-measure with this, which counts distinct posts:

```bash
python3 - <<'PY'
import json,glob,os,collections
dom=collections.defaultdict(set)
for p in glob.glob("content/batches/*/blogs/*.json"):
    try: j=json.load(open(p))
    except: continue
    for s in (j.get("batchMeta",{}).get("sources") or []):
        u=(s.get("url") or "").split("?")[0]
        if "://" in u: dom[u.split("/")[2]].add(os.path.basename(p)[:-5])
for d,v in sorted(dom.items(), key=lambda x:-len(x[1]))[:40]: print(len(v), d)
PY
```

**Verified state as of this correction — over the 3-POST cap, do not cite:**
`pmc.ncbi.nlm.nih.gov` (6) · `drikpanchang.com` (5) · `arxiv.org` (5) · `unicode.org` (5) ·
`research.ed.ac.uk` (4) · `aclanthology.org` (4) · `frontiersin.org` (4) · `archive.org` (4) ·
`indiapost.gov.in` (4) · `escholarship.org` (4) · `journals.sagepub.com` (4)

**Exactly at 3 — no slot left:** `europepmc.org` · `journals.openedition.org` ·
`nature.com` · `pure.uva.nl` · `link.springer.com`

**One slot left (at 2):** `onlinelibrary.wiley.com` · `research.rug.nl` · `scielo.br` ·
`eprints.lancs.ac.uk` · `ccsenet.org` · `ora.ox.ac.uk`

Note `ccsenet.org` and `www.ccsenet.org` are counted separately by the host string but are
the same publisher — treat it as at cap.

**This batch has introduced no cap breach.** Keep it that way.
