# Research brief — `why raksha bandhan is celebrated`

- **Slug:** `why-raksha-bandhan-is-celebrated` (verified free in Strapi, `filters[slug][$eq]` → 0 results, 2026-08-26)
- **Batch:** 2026-08-25-rakhi-2027
- **Source lane:** E (Indian scholarship / Indology), then B. `archive.org` was **not** used — see the cap note below.
- **Assigned primary first-party fact:** 51.1% of shared pages are opened on a phone (18,497 of 36,202 views)

---

## Keyword merge — three queued keywords, one page

SERP testing before this brief showed these three resolve to a single page, so this
post serves all three. Recorded here because a silent merge reads as coverage we
did not deliver.

| Merged keyword | Where it is served |
|---|---|
| `why raksha bandhan is celebrated` (primary) | H1, opening answer, `## So why is it still celebrated?` |
| `what raksha bandhan meaning` | `## What "Raksha Bandhan" means: रक्षा + बंधन, literally` and `## Why the older Hindi name for the festival was Salono` |
| `why raksha bandhan is celebrated according to hindu mythology` | `## Why Raksha Bandhan is celebrated according to Hindu mythology`, four H3s with an evidential status line each |

The third keyword is used verbatim as an H2 so the fan-out query has an exact
heading to match against.

---

## Phase 1 — SERP analysis

**`WebSearch` was exhausted for this batch (200/200), so the Phase 1 teardown was
not run through it.** What was used instead, and what each attempt returned:

| Method | Result |
|---|---|
| DuckDuckGo HTML endpoint (`html.duckduckgo.com`, `kl=in-en`) | HTTP 202 challenge page, 14 KB, no results markup |
| Bing `cc=IN` | HTTP 200, 130 KB, but no result anchors in the served HTML (JS-gated) |
| Mojeek `arc=in` | HTTP 200, 5.5 KB shell only |
| Direct fetch of the named SERP entries | partial — see below |

So the ranking set below is the one **captured for this assignment before the
search budget ran out**, not one I re-queried. I verified what I could by direct
fetch:

| Ranking page | Direct-fetch result | Read |
|---|---|---|
| utsav.gov.in | `/view-event/raksha-bandhan` → **404**; a Ministry of Culture event listing, not an explainer | government portal, date/event framing |
| **Boston Public Library** | HTTP 202 (bot challenge) | a US public-library blog post ranking on an Indian-festival query |
| teachearlyyears.com | **404** on the obvious path; site is a British **early-years teaching** magazine | off-intent: lesson-planning audience, not people asking why the festival exists |
| **amritapuri.org** | HTTP 200, ~709 words, H1 = **"A Rakhi Bond to Fight Farmer Suicide"**, dated 31 May 2008, Seattle | **hard off-intent** — a 2008 retreat news item about an AYUDH youth campaign, ranking on a "why is it celebrated" query |
| timeanddate.com | HTTP 403 (Cloudflare) | a date/calendar page |
| **an nj.gov PDF** | not fetched | a US state-government PDF |
| gladful.in, fnp.com | not fetched — **competitors**, never cited or linked |
| mangoandmarigoldpress, a Substack | not fetched | trade-press / newsletter |

**The finding that matters:** roughly 5–6 of the 10 are weak, and the
institutional-looking ones are institutional-but-off-intent. A US state government
PDF, a Boston public library and a British early-years teaching resource rank on
this query because **nobody authoritative has claimed it**. The one genuinely
Indian religious institution on the SERP (amritapuri.org) ranks with a 2008 news
post about farmer suicide. That is a SERP with no incumbent to displace on
substance.

**Recorded as an audit item:** `Phase 1 SERP teardown not run via WebSearch —
budget exhausted (200/200); used DuckDuckGo HTML, Bing en-IN, Mojeek and direct
fetches, all of which are logged above.`

## Phase 2 — Gap analysis

**Table stakes** (present on essentially every ranking page): the Shravan Purnima
date; the sister-ties-brother description; the Krishna–Draupadi story; the
Bali–Lakshmi story; a "raksha = protection, bandhan = bond" gloss.

**The gap.** Every page repeats the etymology and the myths. **Not one checks
either.** Nobody opens a Sanskrit dictionary to see what रक्षा and बंधन actually
denote, and nobody searches the Mahabharata for the Draupadi episode they
attribute to it. The gap is not a missing subtopic — it is that the whole
category is transmission without verification.

**Stale/unsourced data.** The competitor set carries almost no dated citations at
all; the myths are asserted without a text, a chapter or an edition. There is
nothing to supersede, only something to ground.

**Unanswered questions the pages raise and drop:** why the *right* wrist; why
Shravan Purnima specifically; whether the Draupadi episode is in the epic; what
बंधन actually means; what the festival was called before "Raksha Bandhan" was the
everyday name.

**Fan-out sub-queries** → became H2s/H3s/FAQs: *what does raksha bandhan literally
mean · is the Draupadi story in the Mahabharata · which purana is raksha bandhan
from · what is the raksha bandhan mantra · why the right hand · what was raksha
bandhan called before · is rakhi mentioned in the Vedas · why the full moon of
Shravan.*

**Angle:** wins by being the only page that answers "why is Raksha Bandhan
celebrated" by *checking* the name and the myths against machine-readable primary
texts — Monier-Williams (1899), Platts (1884) and GRETIL's Sanskrit corpus — with
counts anyone can reproduce, then reading the result forward to SubhSandesh's own
51.1% phone-open rate across 36,202 views.

**Not a duplicate of** — three siblings, all read before drafting:

| Sibling | What it owns | Why this post is not it |
|---|---|---|
| `why-sister-ties-rakhi-to-brother` | the **rite**: who ties, on whom, the five layers behind the gesture, Marriott's 1950–52 Kishan Garhi fieldwork, the return gift, how long it stays on | that post explains the *gesture*. This one explains the *festival's rationale and its name*: what the compound denotes lexically, and what the mythology is and is not evidence for. It shares no source, no H2 and no FAQ with it. Its one overlapping paragraph — "What 'Raksha Bandhan' means, and why the right wrist" — is a 90-word aside there and is the spine of this post, argued from dictionary entries it does not cite. |
| `how-raksha-bandhan-started` (in progress) | **origin and transmission** — a chronology of how the practice arrived | this post is deliberately **not** a chronology. It contains no date sequence, no 1905, no Karnavati narrative arc. Where it touches history it does so only to grade a myth's evidential status. |
| `raksha-bandhan-history-in-hindi` | the same chronology **in Hindi**, layered by evidence, on `archive.org` scans | different language, different job, zero shared sources — that post's five archive.org URLs are all avoided here (see cap note). |

**Conclusion: not a duplicate.** Meaning and rationale, not origin and not ritual
mechanics.

## Phase 3 — Sources

**Lane E (Indian scholarship / Indology) was the brief. `archive.org` — lane E's
named repository — was found to be at its cap and was not used.** Corpus check on
2026-08-26: `archive.org` appears in three blog JSONs already
(`2026-08-19-diwali/blogs/happy-diwali-wishes-in-hindi.json`,
`2026-08-25-rakhi-2027/blogs/raksha-bandhan-history-in-hindi.json`,
`2026-08-25-rakhi-2027/blogs/why-sister-ties-rakhi-to-brother.json`) = **3 of 3.**
So lane E was worked through its other Indology holdings instead: the Digital
South Asia Library (Chicago), the Cologne Digital Sanskrit Dictionaries, and
GRETIL at Göttingen. All three domains were unused anywhere in the corpus.

Every claim below was fetched and read in this session. Nothing is taken from a
sibling post's word — the Mahabharata absence in particular was re-established
independently, on a **different** corpus (GRETIL, not the archive.org scan the
Hindi post used).

| # | Source | Domain | What was verified |
|---|---|---|---|
| 1 | Platts, *A Dictionary of Urdu, Classical Hindi, and English* (1884), headword **rākhī**, p. 582 | dsal.uchicago.edu | rākhī derived `[S. रक्षिका]`, Prakrit रक्खिओ; glossed "a piece of thread or silk bound round the wrist on the festival of Salūno or the full moon of Sāvan… as an amulet and preservative against misfortune, or as a symbol of mutual dependence, or as a mark of respect"; **also** "fee paid for protection", "the portion of the land of a village which is assigned for the maintenance of a watchman", and "the black mail formerly levied by the Sikhs in the parganas on the Jamnā"; sub-entry `rākhī-bandhan, s.f. The festival called rākhī` |
| 2 | Platts (1884), headword **salūno**, p. 670 | dsal.uchicago.edu | `salūno [S. श्रावणी], s.f. The day of full moon in the month Sāwan (July-August), the festival of rakshā-ban-dhan (see rākhī)` |
| 3 | Monier-Williams, *A Sanskrit-English Dictionary* (1899), **रक्षा**, printed p. 860 col. 1 | sanskrit-lexicon.uni-koeln.de | "the act of protecting or guarding, protection, care, preservation, security" (Mn., MBh.); "a guard, watch, sentinel"; "any preservative, (esp.) **a sort of bracelet or amulet**, any mysterious token used as a charm" (BhP., Suśr.); "a piece of thread or silk bound round the wrist… esp. on the full moon of Śrāvaṇa". **Absence check:** the same headword index returns रक्षा-गृह, रक्षा-मणि and रक्षा-सूत्र (all p. 860 col. 1) but `rakzAbanDana` → *not found* — रक्षाबन्धन is not an MW headword |
| 4 | Monier-Williams (1899), **बन्धन**, printed p. 721 col. 1 | sanskrit-lexicon.uni-koeln.de | "binding, tying, fettering" (RV.); "a bond, tie (also fig.), rope, cord, tether"; "catching, capturing, confining, detention, custody, imprisonment or a prison"; "(in phil.) mundane bondage (opp. to final liberation)" |
| 5 | GRETIL e-text of the **Mahābhārata** (Pune/BORI critical edition), all 18 parvans | gretil.sub.uni-goettingen.de | Fetched all 18 books, **14,358,138 bytes**. Case-insensitive counts: `rakṣābandh` **0**, `rakṣābandhana` **0**, `rakṣāsūtra` **0**, `rākhī` **0**; controls `draupad` **626**, `śiśupāl` **57**, `śrāvaṇ` **8** |
| 6 | GRETIL e-text of the **Agni Purāṇa** (ed. Rajendralal Mitra, Asiatic Society of Bengal, Bibliotheca Indica, 1870–79; data entry Jun Takashima, version 2020-07-31), 1,629,692 bytes | gretil.sub.uni-goettingen.de | **33.49:** `devasya dakṣiṇe haste rakṣāsūtrañca bandhayet` — bind the protective thread on the **right hand of the deity**, in the pavitrārohaṇa rite. **36.9:** `pavitramātmane dadyādrakṣābandhaṃ visṛjya ca`; the second `rakṣābandh` hit in the file is the editor's variant-reading note on the same verse (`:n 1 rakṣābandhaṃ vimucya ceti kha…`), not a separate passage |

**Corpus-wide sweep behind the "only one Purana" claim.** 18 of the 23 GRETIL
plaintext Purāṇa files fetched successfully (5 returned 404: Bhāgavata-10,
Liṅga-2, Skanda-1-31, Viṣṇudharmottara-2 and -3), **17,725,918 bytes** in total.
Across those 18: `rakṣābandh` **2** (both Agni Purāṇa), `rakṣāsūtra` **1** (Agni
Purāṇa 33.49), `mā cala` **0**. `yena baddho` (1, Brahmāṇḍa 3,3.37) and `balī
rājā` (1, Matsya 48.62) were inspected and are unrelated coincidences, not the
tying-mantra. **The Bhaviṣya Purāṇa is not in GRETIL** — checked the full
798-file plaintext index — so the account most often cited for the festival could
not be machine-checked, and the post says so rather than implying otherwise.

### Considered and deliberately left out

- **Vācaspatyam (1873–84), headword रक्षा** — verified live at the Cologne
  endpoint: it glosses रक्षा as `rakṣāsūtre` and quotes `"rakṣa0! mā cala mā cala"
  rakṣābandhamantraḥ`. Genuinely good, but adding it would have taken the source
  list to seven and the outbound-link count over six. The mantra claim was
  therefore **dropped from the body entirely** rather than asserted without a
  link.
- **Turner, *A Comparative Dictionary of the Indo-Aryan Languages* (1962–66), entry
  10546 रक्षण** — verified at dsal.uchicago.edu; gives Sindhi `rakhiṇī` f.
  "guarding, deference, **charm worn on neck or wrist**". Cut for the same
  six-source reason; it is the strongest candidate if a seventh is ever wanted.
- `archive.org` — at 3/3, see above.
- `theconversation.com`, `research.ed.ac.uk` — both already carry the sibling
  posts' rakhi citations; reusing them would have collapsed the differentiation.

### Searches that found nothing usable

Run for a peer-reviewed secondary article specifically on the etymology or the
textual attestation of रक्षाबन्धन: OpenAlex (`Raksha Bandhan ritual brother
sister`, `brother sister ritual north India kinship`, `rakhi thread protection
ritual Hindu festival ethnography` — API returned HTTP 429, daily budget
exhausted); White Rose eTheses (`raksha bandhan` → **0 matches**; `brother sister
ritual India` → 22 hits, none South Asian); Shodhganga (`raksha bandhan`,
`shravan purnima vrat parv`, `parv utsav lok sanskriti`, `Hindu festivals
anthropological study`, `naimittika vrata parva puranas` — three plausible theses
found, all with **empty abstracts**, and every `/bitstream/` PDF redirects to a
port-8443 viewer that refuses automated fetching); UCL Discovery and CORE (HTTP
403 bot challenge); ORA Oxford (HTTP 404 on its search endpoint); OpenEdition
search (JavaScript-only shell).

**This is a real finding, not a shortfall to hide:** the six sources are scholarly
open-access *reference editions* from three universities (Chicago, Cologne,
Göttingen), not peer-reviewed journal articles. It is recorded in
`auditReport.failed`.

## Phase 0 — the data gate, and why it half-fails here

`content/facts.md` (rebuilt 2026-08-25) carries 17 facts, and three are used. But
there is **no rakhi-specific first-party data**: `rakshabandhanpages` holds 3
documents and rakhi templates account for 39 of 36,202 views. **No statistic is
computed from n=3 anywhere in this post.** The template's newness is stated as a
plain qualitative limitation in the downside section, not converted into a rate.

On a meaning-and-mythology keyword the mismatch is sharper than on most of this
batch: platform-wide behavioural numbers are genuinely relevant to *how the
festival is now observed at a distance*, and genuinely irrelevant to *what the
Sanskrit compound denotes*. The post confines them to the sections where they
actually bear — the opening, the comparison table's fourth column, and the
"why it is still celebrated" and downside sections — and does not sprinkle them
through the philology. Recorded in `auditReport.failed`.

## Phase 5 — targeting

- `categorySlug`: `indian-festivals` (batch-wide rule).
- `templateUrls`: `/happy-rakshabandhan-to-brother`, `/happy-rakshabandhan-to-sister`,
  `/templates` — all three from `TEMPLATE_LINKS` in `app/lib/prompt.ts`, verified
  present. Both recipients apply because this post is about the festival, not
  about one direction of it. All internal links sit in the last two sections.
- **Commercial intent on this keyword is near zero.** Someone typing "why raksha
  bandhan is celebrated" is not shopping. The links are placed late and framed as
  "if you now want to send something", and `honestAssessment` says so.
