# Research brief — `propose day quotes in bengali`

Batch `2026-09-17-propose-30`. Slug `propose-day-quotes-in-bengali`.
Category `modern-romance`. Volume band 1,000–3,000 EST (no tool data — never printed as a real volume).

---

## Phase 0 — first-party data gate

`content/facts.md`, regenerated 2026-09-17. There is **no proposal-specific data** —
the `proposalpages` probe was refused by production-read policy in wave 1 and again
here. Every number used in the body is labelled **platform-wide across all 16 page
types** or **sampled on `/love-gf`**, in the prose itself and not only in the audit.

Facts used:

- 39.9% of creators password-protect their page before sharing it (1,822 of 4,567) — platform-wide
- 48.9% of shared pages are opened on a phone (25,167 of 51,504 views) — platform-wide
- 51,504 recorded views; 11.3 average views per created page — platform-wide
- 92.7% of started pages are published and shared (4,234 of 4,567) — platform-wide
- #1 page type `/love-gf` — 1,138 created, 24.9% of all pages — platform-wide
- Median first-save → last-edit gap 6.4 hours, sampled on `/love-gf`, n=1,138

Gate passes: 6 relevant facts, 2 inside the first 150 words.

---

## Phase 1 — SERP analysis

WebSearch budget for the session was exhausted (200/200) and the Firecrawl MCP
required re-authentication. SERP was read through the DuckDuckGo HTML endpoint,
India region, for both `propose day quotes in bengali` and the native-script query
`প্রপোজ ডে কোট্স বাংলা`. Two incumbents were fetched in full.

| # | Page | Words / structure | Where the answer is | Data cited | Format | Tone | Optimising for |
|---|---|---|---|---|---|---|---|
| 1 | bengali.timesnownews.com — "25+ Romantic Propose Day Wishes in Bengali" | News-cycle listicle, refreshed each February; a separate 2026 piece ("১০০+ রোমান্টিক কথা") exists on the same domain | Lines immediately, no framing | None | Bengali script lines, images | Bengali prose, editorial | Annual news traffic; huge domain authority |
| 2 | bongquotes.com — "75+ প্রপোজ ডে ক্যাপশন, স্ট্যাটাস" | ~93KB page, ToC with 6 sections (উক্তি / ক্যাপশন / শুভেচ্ছা / স্ট্যাটাস / মেসেজ / conclusion) | After 3 short intro paragraphs | None; date stated correctly as ৮ ফেব্রুয়ারি | Quote-card images with Download/Pin buttons, ToC | All-Bengali prose | Pinterest/image download + long-tail Bengali queries |
| 3 | banglacaption.blog — "50+ প্রপোজ ডে মেসেজ" | ~33KB, updated 7 Feb 2026, author byline | After 2 intro paragraphs | None | Blockquoted lines with emoji, internal links to Chocolate/Teddy/Promise Day | All-Bengali prose | Valentine-week internal cluster |
| 4 | in.brandedpoetry.com — "40+ Happy Propose Day Quotes… In Bengali [2024]" | Year-stamped 2024, stale | Lines immediately | None | Plain list | English frame, Bengali lines | Aggregator long-tail |
| 5 | bengalisms.com / bengalimasti.com / wishutsav.com | SMS/shayari/status aggregators, several still stamped 2022–2023 | Lines immediately | None | Lists + images | Mixed | Copy-paste WhatsApp traffic |

All five are **wishes content farms or news-cycle lifestyle desks**, which makes them
competitors under `references/competitors.md`. None is linked, cited or paraphrased.

Correct observations found in the incumbents (so: table stakes, not a gap):
bongquotes states ৮ ফেব্রুয়ারি correctly; banglacaption calls it
"ভ্যালেন্টাইন উইকের দ্বিতীয় দিন" (the second day of Valentine week) correctly.
The "7 Feb Propose Day" error a sibling agent reported was **not** reproduced by
either of the two pages fetched in full here — so the body states the correct date
and the Rose Day contrast without asserting how many incumbents get it wrong.

---

## Phase 2 — Gap analysis

**Table stakes:** the date; a large number of Bengali-script lines; grouping by
recipient (wife / husband / girlfriend / crush); shareable framing.

**The gap — all five miss the same three things:**

1. **No pronoun guidance whatsoever.** Every page mixes তুমি, আপনি and তুই lines in
   one undifferentiated list with no note on who each is for. This is the single
   largest usability failure on the SERP: the reader is about to send a line to
   someone they love and the grammar encodes the relationship.
2. **No Roman transliteration and no English gloss.** The audience largely types in
   Roman. A reader who cannot read Bengali script fluently cannot use any of these pages.
3. **No West Bengal / Bangladesh usage note.** The lines are presented as if Bengali
   were one undifferentiated register across both.

**Stale data:** four incumbents still carry 2024/2025 (or 2022–23) in titles or bodies.

**Unanswered questions:** can I machine-translate an English line? Is তুই ever safe?
Does this line work in Dhaka as well as Kolkata?

**Fan-out sub-queries → H2s:** when is Propose Day 2027 · what is a Bengali propose
line · তুই vs তুমি vs আপনি · the lines themselves · WB vs BD usage · how to send it ·
when not to.

**Angle:** *Wins by being the only post that sorts Propose Day lines in Bengali by the
তুই/তুমি/আপনি tier the reader is actually entitled to use — cited to Bengali
honorifics scholarship — with transliteration and gloss on every line, alongside
SubhSandesh's platform-wide 39.9% password-protection rate.*

**Final shape:** 1,799 words in `contentMarkdown` excluding FAQs, 11 FAQs, 14 lines,
4 sources, 2 internal links, 8 H2s and 4 H3s.

---

## Phase 3 — Sources

Lane: **Bengali literary romance and the language's role in Bengali identity**,
including Bengali honorifics linguistics. Cap script re-run before choosing and again
before finalising. `pmc.ncbi.nlm.nih.gov`, `frontiersin.org` and `arxiv.org` were all
at the 3-post cap, so none was used — the arXiv BLADE honorifics paper
(arXiv:2605.22487) was found, read and **deliberately dropped** for that reason.

| # | Source | What it actually says | Tests |
|---|---|---|---|
| 1 | Uddin, Md. Afaz (2019/2020), *Second Person Pronouns as Person Deixis in Bengali and English*, International Journal of English Linguistics 10(1):345, CC BY 4.0 — ccsenet.org | Bengali has three second-person address forms — আপনি, তুমি, তুই — encoding "relative rank and deference between speaker and addressee". আপনি is the usual form between strangers, colleagues, older people and anyone outside the immediate circle; among strangers the move off a V-form is "a sign of a closer friendship". তুই is used among young friends, elderly→younger family, child-to-child, and "when people are angry or hostile towards the addressee(s)", and sometimes downward by socio-economic status "with the purpose of looking down upon the addressee"; it "may confuse a non-native speaker as it has multiple layer of meaning". তুমি is semi-formal and emotionally intimate and fits neither the T nor the V axis of the classic T/V distinction. | Subject ✔ Swap ✔ Peer-reviewed ✔ Open access ✔ |
| 2 | Wang, Ruoan (Margaret), *Tiered honorification in E. Indo-Aryan: A [hon]-less proposal*, SALT 34, MIT, 28 May 2024 — saltconf.github.io | Sets out the Bangla paradigm: 2NH তুই / to-ra with agreement -iś; 2H তুমি / tom-ra with -o/-e; 2HH আপনি / apna-ra with -en. Frames honorification as negative politeness (Brown & Levinson 1987) realised through avoidance. Full handout read. | Subject ✔ Swap ✔ Scholarly ✔ Open ✔ |
| 3 | Sijan et al. (2026), *BanglaSocialBench*, Proceedings of ACL 2026 (Vol. 4: Student Research Workshop), pp. 247–280, doi 10.18653/v1/2026.acl-srw.22 — aclanthology.org | Bangla "exemplifies this challenge through its three-tiered pronominal system, kinship-based addressing, and culturally embedded social customs". 1,719 culturally grounded instances written and verified by native Bangla speakers across Address Terms, Kinship Reasoning and Social Customs; twelve contemporary LLMs evaluated zero-shot; models "frequently default to overly formal address forms, fail to recognize multiple socially acceptable address pronouns". Abstract + landing page read; PDF is image-heavy and was not read in full. | Subject ✔ Swap ✔ Peer-reviewed ✔ Open ✔ |
| 4 | *Language movement and self-identity of Bengali: A General Overview*, Khwaja Yunus Ali University Journal 7(1), 2025, doi 10.61921/kyauj.v07i01.004 — journal.kyau.edu.bd | After Pakistan declared Urdu the state language to the exclusion of Bengali, the mother tongue of the majority, Bengalis began a movement to protect it, and "it was through this movement that nationalism was born among the Bengalis"; the study traces how Bengali identity was established through the language movement. Abstract read on the publisher's article page; full text not read. | Subject ✔ Swap ✔ |

**Zero generic context statistics used.** Zero Wikipedia links in the body (Wikipedia
appears only as verified `sameAs` targets in `structuredData`, which the reference
file states does not count against the body budget).

Domain check at time of writing: `ccsenet.org` 0 posts, `saltconf.github.io` 0 posts,
`journal.kyau.edu.bd` 0 posts, `aclanthology.org` 2 posts (this makes 3 — at cap, not
over). No URL used here appears in any sibling file or in the wave-1 banned list of 54.

**Searches that returned nothing usable**, named honestly: `Tagore love poetry
scholarship` (Crossref/DOAJ returned comparative-literature pieces on Iqbal, Shamloo
and Polish reception, none about the Bengali romantic idiom itself); `adda Bengali
sociality scholarship` (no open-access hit — the Chakrabarty chapter is in a
paywalled monograph); `Bangladesh West Bengal Bengali variety differences` (the one
promising hit, Open Journal of Modern Linguistics 10.4236/ojml.2026.164025, is behind
a 403 on scirp.org and was not read, so it is not cited). OpenAlex and Semantic
Scholar were HTTP-429 throughout, presumably from 29 concurrent sibling agents.

---

## The Bengali lines — what was written and what was cut

All 14 published lines are **original compositions**. **Nothing on the page reproduces
copyrighted modern Bengali poetry or song lyrics.** No Tagore or Nazrul text is quoted
or attributed anywhere in the post.

25 lines were drafted; **14 kept, 11 cut.** Reasons:

1. Two Tagore lines (from *তুমি রবে নীরবে* and *ভালোবেসে সখী*) — **cut.** Public-domain
   status is not the problem; I could not verify the exact wording character-for-character
   against a reliable text within this session, and the brief forbids attributing a line
   that could not be verified. Tagore is not quoted at all in the final post.
2. One Nazrul line — **cut**, same reason.
3. Two ornate lines using প্রাণেশ্বরী / সোহাগিনী register — **cut.** Grammatically fine
   but nobody proposes in that register; it reads as serial-drama pastiche.
4. One "তুমি আমার চাঁদ, তুমি আমার তারা" moon-and-stars line — **cut** as cliché, and it is
   already what the incumbents publish.
5. One আপনি + ভালোবাসি line — **cut** as socially incoherent. Declaring love while holding
   the addressee at maximum formal distance does not work; the আপনি tier takes
   ভালো লাগে, and that point is made in the prose instead.
6. One তুই line addressed to someone older — **cut.** তুই upward is an insult, not a risk
   worth modelling on the page.
7. One Banglish "প্রপোজ করছি" line — **cut.** Fine in speech, weak as a quotable line,
   and the incumbents own that phrasing.
8. Two further তুমি lines — **cut for length, not for quality.** The body has a hard
   1,500–1,800 word ceiling excluding FAQs, and the transliteration-plus-gloss format
   costs roughly 30 words per line. তুমি পাশে থাকলে দিনটা এমনিতেই ভালো কাটে and
   রোজ তোমার কথা ভাবি, আজ সেটা তোমাকে জানাচ্ছি were both correct and idiomatic; they went
   because তুমি is the best-served tier and the আপনি and তুই groups are the differentiator.
   Final split: 4 pronoun-free, 4 তুমি, 3 আপনি, 3 তুই.

A **Pohela Falgun / 13 February** claim for Bangladeshi readers was drafted and **cut**:
DuckDuckGo rate-limited before the revised Bangla calendar date could be verified, and
an unverified calendar claim is the one error a reader catches instantly.

Every kept line was checked for pronoun–verb agreement against the Wang (2024)
paradigm: তুই → -িস (জানিস, ছিলি, হবি, বুঝলি), তুমি → -ও/-এ, আপনি → -এন (দেন, দেবেন).
None of the 14 lines uses a word that splits across the West Bengal / Bangladesh
lexical divide (জল/পানি, নিমন্ত্রণ/দাওয়াত), so each works in Kolkata and Dhaka alike.

---

## Phase 5 — links and targeting

- Internal, 2 total, both from `TEMPLATE_LINKS`, both placed after value is established:
  `/proposal` (mandatory, the marriage question) and `/love-gf` (the genuine
  alternative — asking someone to be your girlfriend, not your wife; also the #1
  template at 1,138 pages). The body states plainly that both templates' interfaces
  and built-in copy are English and the reader pastes their Bengali in.
- `categorySlug`: `modern-romance` — verified against the live Strapi category list.
  Propose Day is Valentine week, not `indian-festivals`.
- Slug verified free: the Strapi query for `propose-day-quotes-in-bengali` returns
  `total: 0`.
- Weekday verified independently: 8 Feb 2027 = Monday; 7 Feb 2027 = Sunday (Rose Day);
  14 Feb 2027 = Sunday; 8 Feb 2026 = Sunday.

## Target

**Position 6–10, not 3.** This SERP is a February news cycle owned by Times Now
Bengali and established Bengali quote farms with authority far above this domain.
