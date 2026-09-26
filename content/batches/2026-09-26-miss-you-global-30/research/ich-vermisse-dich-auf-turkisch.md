# Research — ich vermisse dich auf türkisch (de-de)

Slug: `ich-vermisse-dich-auf-turkisch` · bodyLanguage: German · tier A-translate
Written 2026-09-26.

---

## 1. SERP measurement

**Route: Bing, real browser (PolterTab), `mkt=de-DE&setlang=de`.** Google was not
usable: the very first navigation of this session returned
`google.com/sorry/index?continue=...q=ik+mis+je+nu+al+betekenis&gl=nl&hl=nl` — the
**Dutch sibling's captcha page**, not mine. Discarded, not recorded, never clicked.
That is contention on the shared browser exactly as BRIEF §3 and knownIssue 7
describe. Bing is a different index from Google and is labelled as such in the post.

Two runs, both self-authenticated before anything was recorded (search-box `value`
read back, German UI chrome, every result German-language and on-topic):

**Run A — `"ich vermisse dich" auf türkisch` (phrase-restricted), "Ungefähr 265 Websites":**
Reverso Wörterbuch · PONS · Reverso Context · bab.la · beluka.de · lovelanguages.io ·
Glosbe · dict.cc · Google Translate · LinguaShop. **10 results seen.**

**Run B — `ich vermisse dich auf türkisch` (the exact keyword), "Ungefähr 18.500 Websites":**

| # | Host | Page type |
|---|---|---|
| 1 | woerterbuch.reverso.net | bilingual dictionary |
| 2 | beluka.de | bilingual dictionary ("1 Übersetzungen") |
| 3 | de.bab.la | bilingual dictionary — snippet: "…wie Seni özlüyorum." |
| 4 | de.pons.com | bilingual dictionary |
| 5 | lovelanguages.io | **the only editorial article** — "Türkische Ich-vermisse-dich-Sprüche für Deutsche", dated 30. Jan. 2026 |
| 6 | de.glosbe.com | dictionary |
| 7 | context.reverso.net | translation memory — snippet: "seni seviyorum, **seni özledim**" |
| 8 | translate.google.com | MT tool |
| 9 | detr.dict.cc | dictionary |
| 10 | linguashop.com | commercial course page |

**10 organic results seen in each run. Same ten hosts both times, different order.**
Reverso #1 in both.

**Weak count: 9 of 10.** The single editorial page (lovelanguages.io) is a *Sprüche*
listicle with pronunciation respellings ("se-NI dü-schün-ME-den du-ra-MI-jo-rum") and
no grammar. **0 of 10 name a case, a tense or a formality level. 0 of 10 cite TDK.**
No German magazine, no Wikipedia, no forum ranks here at all.

**GATE 4: PASS — do not abort.** This is the dictionary-scraper/MT lane BRIEF §3
names as the real A/B opportunity, not the "ten established German magazines" that
kill the `de-de` Sprüche rows.

**Measured content gap:** bab.la (#3) gives *seni özlüyorum*; Reverso Context (#7)
gives *seni özledim*. **The SERP contradicts itself on the tense and not one page
explains why.** That is the post.

---

## 2. Checkable error found in a ranking result — CONFIRMED

**beluka.de, ranking #2 on the exact keyword**, page fetched and read at source
(HTTP 200, 22,786 bytes), indirect-hit table, verbatim:

> ich vermisse dich auch → **bende seni özlüyorum**

`bende` is written as **one word**. TDK Güncel Türkçe Sözlük carries **`bende` as a
separate headword**: `lisan: Farsça bende`, sense 1 `► köle`, tagged `eskimiş (esk.)`.
*Köle* is **slave**. The intended form is `ben de` — two words, "I too". Tatoeba
#13679199 writes it correctly: "**Ben de** sizi özledim, Tom." A German reader who
copies beluka.de's line sends a Turkish partner a sentence containing an obsolete
Persian word for *slave*.

(The Turkish sibling `seni-ozledim-mesajina-verilecek-cevaplar` established the
`bende`/`ben de` distinction at TDK. My contribution is finding it **live and
ranking #2 on a German-market SERP**, not re-deriving it.)

## 2b. A second candidate error that I tested and that CLEARED — recorded honestly

Same beluka.de table: `ich vermisse dich sehr → seni çok arıyorum`. I expected this
to be a second error, since *aramak* is everyday Turkish for "to phone / to look
for". **It is not an error.** TDK `aramak` **sense 4**, verbatim: *"Bir şeyin
yokluğunu duyarak geri gelmesini istemek, özlemek"* — the dictionary explicitly
lists *özlemek* there. I was wrong and did not publish it as an error.

What survives is a genuine **ambiguity**, which the post states as an ambiguity:
the same TDK entry carries sense 6 *"Bir kişiyle görüşmek üzere telefon etmek"*, so
*seni çok arıyorum* will be read by most readers today as "I keep calling you."

---

## 3. Every Turkish form printed in the post, with its TDK warrant

All fetched 2026-09-26 from `sozluk.gov.tr/gts?ara=<word>`, headword read before citing.
**`seni` and `sizi` return `Sonuç bulunamadı`** — TDK does not headword inflected
forms, so the case is established from TDK's *grammar* entries, not from a word lookup.

| Form | TDK warrant | Formality |
|---|---|---|
| **seni özledim** | `özlemek` tagged **`[-i]`** = `belirtme durumu`, which TDK defines as *"Adın fiile -ı eki aracılığıyla bağlandığı durumu; yükleme durumu, yükleme hâli, akuzatif"*; `-di` = `görülen geçmiş zaman` (*"-dı ekiyle kurulan zaman"*); `-m` = `kişi eki` (*"Fiil çekimlerinde kişiyi gösteren ek"*) | neutral / intimate (*sen*) |
| **seni çok özledim** | as above + *çok*; Tatoeba 16 matches, e.g. #1440901 → "I missed you very much / a lot / so much" | neutral / intimate, intensified |
| **seni özlüyorum** | `-yor` = `şimdiki zaman` (TDK: *"-yor, -makta ekleriyle kurulan zaman"*) | neutral / intimate, explicitly ongoing |
| **sizi özledim** | `siz` sense 1 *"Çokluk ikinci kişi zamiri"*; **sense 2 *"Bir kişiye saygı ve incelik belirtisi olarak kullanılan bir seslenme sözü"*** | **formal singular OR plural** — the in-law form |
| **özledim seni** | `devrik cümle`: *"Yüklemi sonda olmayan cümle"* (vs `kurallı cümle`: *"Yüklemi sonunda olan cümle"*) | spoken, emphatic, song/poetry register |

**Honesty note on `sizi özledim`:** TDK's `siz` sense 2 licenses the formal-singular
reading. **Tatoeba does not attest it** — all four `sizi özledim` sentences address a
*plural* (#3697027 "…çocuklar", #4471395 "…beyler", #3140526 "…arkadaşlar"). The post
says exactly this: the dictionary licenses it, the corpus I checked happens to show
only plural uses.

---

## 4. The tense verdict — my prompt's framing is HALF right, and the post says so

The framing handed to me: "*özledim* is morphologically past but the natural German is
present." **The first half is confirmed; the implied second half — that the dictionaries
giving *özlüyorum* are making a mistake — is not.**

- Confirmed: `özle-di-m` is `görülen geçmiş zaman` per TDK, yet Tatoeba **#630939
  "Seni özledim."** carries four English translations including **"I miss you." (#1308)**
  alongside "I missed you." (#407574). The past form does present-tense work.
- **Not confirmed:** *özlüyorum* is not an error. Tatoeba exact-phrase counts,
  measured 2026-09-26: `özlüyorum` **259** vs `özledim` **124**; `seni özlüyorum`
  **27** vs `seni özledim` **14**. The transparent present form is roughly **twice as
  frequent** in that corpus, the opposite of what the framing implies.

**Verdict printed in the post: both are current Turkish.** *Seni özledim* is the -DI
past that reads as present; *seni özlüyorum* is the -yor present that says "right now,
still". Neither dictionary on the SERP is wrong about *which form*; all ten are silent
about *why there are two*.

---

## 5. Does Turkish have anything like the German *fehlen* inversion? — verified NO (everyday)

German offers two sentences for one feeling, and the difference is which person is the
grammatical subject:

- **ich vermisse dich** — *ich* subject, *dich* **accusative**. Duden `vermissen`,
  Wortart *schwaches Verb*, Bedeutung 1: *"sich mit Bedauern bewusst sein, dass jemand,
  etwas nicht mehr in der Nähe ist…"*, example **"die Kinder, die Ehefrau, den Freund
  sehr vermissen"**. DWDS labels it `mit Akkusativobjekt`.
- **du fehlst mir** — *du* **nominative subject**, *mir* **dative**. Duden `fehlen`
  Bedeutung 4: *"[sehnlich] herbeigewünscht, vermisst werden"*, example **"du wirst/
  deine Hilfe wird mir sehr fehlen"**. DWDS 1b: `⟨jmd. fehlt jmdm.⟩ sehr vermisst,
  entbehrt werden`.

(Carried from the German sibling, verified again at source: `fehlen` is **not** a
subjectless dative verb of the *mir ist kalt* type — *du* is the nominative subject.)

**Turkish:** `özlemek` is `[-i]`, transitive — the misser is always the subject.
The one construction that flips it is the passive **`özlenmek`**, TDK: *"Özleme işine
konu olmak"* — but TDK tags it **`nesnesiz (nsz.)`**, objectless, and its citation is
literary (Peyami Safa, *"Ben özlenerek hatırlananlardan bahsediyorum."*).

**That tag is the whole finding.** German's *fehlen* demotes the misser to a dative but
**keeps them in the sentence** (*mir*). Turkish's *özlenmek* **deletes** them. So the
choice German gives you — which of the two people the sentence puts first — has nowhere
to land in Turkish. *Yokluğunu hissediyorum* ("I feel your absence") is not a
counterexample: TDK `yokluk` sense 2 is *"Göz önünde bulunmama; gaybubet"*, a noun, and
*ben* is still the subject.

**So: the framing I was given is CORRECT, with the correction that a formal passive
does exist and had to be named rather than denied.**

---

## 6. Orthography — what I tell the reader to actually do

Codepoints read from the Unicode Character Database (`UnicodeData.txt`, latest):
ç U+00E7 · ğ U+011F · **ı U+0131 LATIN SMALL LETTER DOTLESS I** · **İ U+0130 LATIN
CAPITAL LETTER I WITH DOT ABOVE** · ö U+00F6 · ş U+015F · ü U+00FC.

**The practical finding nobody publishes: two of Turkish's six non-ASCII letters are
already on a German keyboard.** Turkish ö and ü are **the same codepoints** as German
ö (U+00F6) and ü (U+00FC) — not lookalikes. Only **ç, ğ, ı, İ, ş** are missing. So a
German writer needs four extra keys, not a new alphabet: add the Turkish layout
(iOS/Android: keyboard settings; macOS/Windows: "Turkish Q"), or long-press c, g, s, i.

**The trap, from `SpecialCasing.txt`:** Unicode carries a *Turkish-locale* casing rule.
`0049; 0131; 0049; 0049; tr Not_Before_Dot` — under `tr`, capital **I** lowercases to
**ı**. `0069; 0069; 0130; 0130; tr` — lowercase **i** uppercases to **İ**. A German
phone is not in `tr` locale, so autocorrect and auto-capitalisation will quietly turn
**İstanbul → Istanbul** and **ı → i**. The fix is to switch the keyboard, not to fight
the autocorrect.

Vowel harmony is visible in TDK's own accusative examples — `sokağ-ı, ev-i, okul-u,
yüz-ü` — four allomorphs, which is why it is *sen-i*, never *sen-ı*. TDK `ünlü uyumu`:
*"Kelimelerdeki ünlülerin incelik, kalınlık veya düzlük, yuvarlaklık bakımlarından
birbirine benzeşmesi"*.

---

## 7. Sources, with journals named for the cap

Reference instruments (cap-exempt, all fetched 2026-09-26, headword read before citing):
`sozluk.gov.tr` (TDK), `duden.de`, `dwds.de`, `tatoeba.org`, `unicode.org`.

Peer-reviewed, open-access, journals **named here because `capcheck.mjs` cannot see them**:

1. **European Journal of Psychotraumatology** (Informa UK / Taylor & Francis) — Renner A,
   Linde K, Schmidt V, Kersting A, 2026-01-27, doi 10.1080/20008066.2026.2612833,
   PMC12849801. Unpaywall `is_oa: true`, `oa_status: gold`; Europe PMC licence `cc by-nc`.
   **ABSTRACT ONLY** — PDFs do not parse here. First appearance of this journal in the batch.
2. **Journal of Intelligence** (MDPI) — Agustín Llach MP, 2025-12-24,
   doi 10.3390/jintelligence14010003, PMC12842814. Unpaywall `is_oa: true`,
   `oa_status: gold`; licence `cc by`. **ABSTRACT ONLY.** First appearance in the batch.

**Neither is *Frontiers in Psychology* (banned, at 5) nor *PNAS* (banned, at 3).**
No banned PMCID used. `capcheck.mjs` run immediately before writing: clean.

**Correction to my own prompt from source 1:** the prompt states "Turkish is Germany's
largest immigrant language." The paper says *"one of the largest migrant communities in
Germany, comprising around 1.5 million first generation migrants and 1.4 million second
generation individuals born in Germany."* The post uses the paper's wording — **"eine
der größten"**, not "die größte".

---

## 8. Split from the two siblings

- `wie-sage-ich-ihm-dass-ich-ihn-vermisse` (German) owns the **German-internal**
  case question and the "does it read as needy" risk question. This post takes its
  Duden/DWDS finding as **established input** and spends its words on what happens
  when that German choice is carried into Turkish. Cross-linked.
- `seni-ozledim-mesajina-verilecek-cevaplar` (Turkish) owns **replying** to
  *seni özledim* and established `özlemek [-i]`, `kişi eki`, `bende`/`ben de`. This
  post is for someone **composing** it, from German, and adds what that sibling had no
  reason to cover: `sizi`, `özlenmek`, `devrik cümle`, the keyboard. Cross-linked.

`factsUsed` deliberately disjoint from both: neither sibling used the view figures,
the city pairs, the 48.3% phone rate or the 5,199/21-types denominator.

## 9. Lines considered and CUT

- *"Seni çok arıyorum" as an error* — cut, TDK sense 4 cleared it (§2b).
- *Sizi özledim as unambiguously formal-singular* — softened, Tatoeba attests only plural.
- *"özledim is past, so özlüyorum is what dictionaries get wrong"* — cut, the corpus
  counts point the other way (§4).
- *"Turkish has no passive counterpart to fehlen"* — cut, `özlenmek` exists; replaced
  with the precise `nesnesiz` distinction (§5).
- *PONS's snippet wording about a vocabulary trainer* — not quoted, price-guard.
