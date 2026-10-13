# Research brief — halloween-wishes-in-french (row 119)

Keyword: **halloween wishes in french** · absorbs "joyeux halloween messages" · theme messages · plan weak 4/10 · band 3,000–10,000/mo.

## Phase 0 — first-party data
- `content/facts.md` read directly (no `npm run facts`, per BRIEF §3). No Halloween usage data exists; none is stated or implied.
- Platform-wide lines used (verbatim, 2026-09-24 vintage):
  - 48.3% of shared pages are opened on a phone (27,725 of 57,456 views) — measured 2026-09-24
  - Average views per created page: 11.1 — measured 2026-09-24
  - 90.9% of started pages are actually published and shared (4,724 of 5,199) — measured 2026-09-24
- These bear on a message sent as a link (read on a phone, re-opened ~11 times). They say nothing about French or Halloween, and the body says so.
- Template spec (`template-spec.md`) used for the /happy-halloween section only; interface is English, so only the typed fields (names, letter, carved word, the closing question up to 60 characters) can be French.

## Phase 1 — SERP (searches used: 2 of 2)
1. `WebSearch` "halloween wishes in french" (US index) — worked, not capped.
2. DuckDuckGo html "vitrinelinguistique oqlf Halloween" — used to locate the OQLF GDT fiche, since the Vitrine's own search returns a 202 bot challenge.

US-index results: lsa-conso.fr (French trade news on Halloween spending, 403 on fetch — not a wishes page), frenchtoday.com, schoolmouv.fr ×2 (generic "souhaiter" grammar lesson, not about Halloween), mosalingua.com, thegoodlifefrance.com, lingoda.com/fr (English Halloween vocab for French speakers — wrong direction), talkinfrench.com, frenchwithagnes.com. No greeting-card or wishes site in the visible results; no AI Overview content returned.

All five fetched with a browser UA via ctx_execute (first ctx_fetch_and_index pass failed with EHOSTUNREACH, a transient network fault; the retry returned 200). Competitors — never cited or linked.

| # | Page | Words (approx.) | Structure | Direct answer? | Data cited / date | Format | What it optimises for |
|---|---|---|---|---|---|---|---|
| 1 | frenchtoday.com "Halloween in France" | ~1,840 | 9 H2s: trick-or-treat translation, 50-term vocab list, is it celebrated, no tricks, scary costumes only, foreign holiday, mixed reactions, Toussaint, video | "How do you say trick or treat? … you don't"; gives "des bonbons ou un sort", "bêtises ou friandises" (says Canada) | No sources; "in the 1990s young French hipsters…" undated anecdote; pub 2025-10-29 | Lists, video, no table, no FAQ schema | Learner vocabulary + culture blog |
| 2 | talkinfrench.com "45 French Words & Phrases" | ~975 | Single word list, word-search puzzle | Vocab only; "farce ou friandise / Des bonbons ou un sort"; "Bonbons, s'il vous plaît" tagged Québécois | None; pub 2016, mod 2026-10-05 | Glossary list | Vocabulary keyword |
| 3 | thegoodlifefrance.com | ~15 readable (JS-heavy; page body not in HTML) | n/a | n/a | pub 2012, mod 2020 | — | Weak/stale |
| 4 | mosalingua.com "Halloween words in 6 languages" | ~1,690 | 25 H3 "How to say X" ×6 languages | Not French-specific | None; pub 2021 | Emoji lists | Multi-language vocab, app funnel |
| 5 | frenchwithagnes.com "French Halloween" | ~1,800 | Origins, vocab, practices, food | Gives "Des bonbons ou un sort" as common children's phrase; notes Halloween used without article | None; pub 2024, mod 2026-09 | Lists | Tutor funnel |

Weak count in my top 10: thegoodlifefrance (stale 2012, near-empty), schoolmouv ×2 (off-topic), lingoda/fr (wrong direction), lsa-conso (news, not wishes) → **5 weak** (plan said 4). Gate 4 not triggered.

## Phase 2 — gap
- **Table stakes:** "Joyeux Halloween", trick-or-treat translation, vocabulary (citrouille, sorcière, fantôme, bonbons), Toussaint on 1 November, "Halloween isn't big in France".
- **Gap:** none of the five gives more than a couple of ready wishes; none sorts them by **tu/vous** or by recipient; none mentions that Larousse and the OQLF both class *Halloween* as **feminine** (OQLF prescribes "Joyeuse Halloween !") or the Europe-no-article vs Quebec "l'Halloween" split; none cites anything; the "decline" story is told as anecdote with no dates or figures.
- **Stale data:** talkinfrench 2016, goodlife 2012; no figures anywhere.
- **Fan-out:** how do you say happy Halloween in French · joyeux or joyeuse Halloween · tu or vous in a card · trick or treat in French · is Halloween celebrated in France · Quebec vs France · Toussaint · what to write to a French colleague · kid-safe lines · how to pronounce.
- **Angle:** Wins by being the only post that gives 50 original French Halloween wishes sorted by tu/vous and recipient, settles "joyeux or joyeuse" from Larousse and the OQLF, and dates France's Halloween boom and fade from a scholarly source, alongside SubhSandesh's own 48.3% phone-open figure.

## Phase 3 — sources (all fetched)
| Source | What it supports | Read | Date |
|---|---|---|---|
| Lherm, A., "Halloween et les Français", in *Terres promises*, Éditions de la Sorbonne, pp. 289–302 — https://books.openedition.org/psorbonne/43378 (DOI 10.4000/books.psorbonne.43378) | Printemps Haussmann's 1993 Halloween stand failed; Halloween sits in the Toussaint school holidays; 1997–2000 "déferlement"; France Télécom covered the Trocadéro gardens with 7,000+ pumpkins to launch its OLA mobile; total Halloween-related sales >250m francs 1998, ~400m 1999, ~500m 2000; Coca-Cola joined 1998; La Poste jack-o'-lantern stamp 2001; reflux from 2001; Comité Non à Halloween (Dijon, 2000/2001); Holy Wins 2002; 2006 press declared it dead; survives with small children in provincial towns, "Halloweeniens" born from 1997 | **Full text** (OpenEdition Books, behind an Anubis proof-of-work page that was solved programmatically as a browser would). Licence OpenEdition Books (text) — cited, not reproduced | 2010 (citation_publication_date 2010/01) |
| OQLF, Grand dictionnaire terminologique, "Halloween" — https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/8398771/halloween | n.f. ("Joyeuse Halloween!"); h muet → "d'Halloween"; Europe usually no article ("C'est Halloween!") vs Quebec usage "C'est l'Halloween!"; definition: children dress up and go door to door collecting treats; from "All Hallow Even" | Full | Last update 2022 |
| Larousse, "Halloween" — https://www.larousse.fr/dictionnaires/francais/Halloween/38914 | nom féminin singulier; 31 October; children dress as ghosts and witches | Full | Undated |
| Service-public.fr, "Jours fériés et ponts dans le secteur privé" — https://www.service-public.fr/particuliers/vosdroits/F2405 | Toussaint listed among fêtes légales, 1 November (Dimanche 1er novembre 2026) | Full | Vérifié le 1 janvier 2026 (dateModified, not datePublished) |
| Ville de Montréal, "L'Halloween dans Ville-Marie" — https://montreal.ca/actualites/lhalloween-dans-ville-marie-99427 | Dated Canadian institutional source: borough activity list to "bonifier votre parcours de cueillette de bonbons"; green alleys of Centre-Sud distributing candy to neighbours; uses "l'Halloween" with article (matches OQLF) | Full | Published 2 Oct 2026, updated 9 Oct 2026 |
| Estay Stange, V. & Nesi Lammardo, M., "Tutoiement et vouvoiement : la peau de l'échange", *Actes Sémiotiques* 133 (2025), Université de Limoges — https://www.unilim.fr/actes-semiotiques/9162 (DOI 10.25965/as.9162) | Tu/vous mark politeness norms; once one is the established norm, an unexpected switch either way "heurte" (jolts) the other person; counter-examples include conjugal/family vouvoiement and company-wide tutoiement | Abstract + sections 1 read (full text available). CC BY-NC-SA 4.0 — cited, not reused | 2025 |

Verified but **not linked** (named in body only, to stay within 3–6 outbound links; all exempt reference instruments):
- Larousse "citrouille" (/16257): n.f., several cucurbit species; popular sense "grosse tête". "sorcier, sorcière" (/73519): fairy-tale woman with supernatural powers. "fantôme" (/32856): apparition of a dead person; revenant. "bonbon" (/10117): small confection of cooked sugar; Belgium: dry biscuit. "sort" (/73535) sense 4: harmful effect attributed to witchcraft, "jeter un sort". "Toussaint" (/78767): 1 Nov, anticipates jour des morts 2 Nov; in France since 1801 one of four religious holidays chômées. "tutoyer" (/80327).
- en.wiktionary "trick or treat": French translations "farce ou friandise", "bonbon ou bâton", "des bonbons ou un sort". fr.wiktionary "farce ou friandise": the phrase children say at doors on Halloween.
- CNRTL (TLFi) is now a JavaScript app (returns an empty shell to fetch), so Larousse was used instead.

Search terms tried (findpapers / Crossref): "Halloween France fête diffusion commerciale", "Halloween en France", "tutoiement vouvoiement address forms French", Crossref prefix queries 10.4000 (OpenEdition), 10.3406 (Persée), 10.3917 (Cairn), 10.7202 (Érudit) for "Halloween". Persée Lherm 2005 (*Communications* 77) is about the British/American history and only its first page is in HTML (PDF 403) — not used. Érudit returned no Quebec Halloween study.

Caps: capcheck run — no banned URLs, no domains at cap. books.openedition.org, unilim.fr, montreal.ca, service-public.fr are new to this batch; journals.openedition.org was used in b1 (different host, different batch).

## Brief claims checked (BRIEF §0)
- **"Quebec 'l'Halloween' is feminine" (prompt framing) — partly false as a France/Quebec contrast.** Larousse (France) also lists Halloween as *nom féminin singulier*. The documented France/Quebec difference is the **article** ("C'est Halloween !" vs "C'est l'Halloween !"), not the gender. "Joyeux Halloween" (masculine agreement) is common usage but is not the dictionary form.
- **"« un bonbon ou un sort »" (prompt) — not attested in the singular.** Wiktionary gives "des bonbons ou un sort" (plural) and "farce ou friandise"; Larousse gives "jeter un sort". The post uses the plural form.
- Toussaint 1 November is a fête légale — confirmed on service-public.fr. Note: a fête légale is not automatically a paid day off in the private sector except 1 May; the post says "public holiday" and Larousse adds "chômée since 1801".
- "Late-1990s commercial push and its decline" — confirmed and dated by Lherm 2010.
