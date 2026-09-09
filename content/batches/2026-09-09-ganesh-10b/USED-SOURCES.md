# Sources used in batch 2

`<slug> | <domain> | <url>`. URL cap 2 posts, domain cap 3.
ALSO check PRIOR-BATCH-SOURCES.md — batch 1 already spent 47 URLs across 25 domains,
and en.wikipedia.org is at its cap there. Do not re-cite any of them.


## ⚠ LIVE CAP STATUS (corrected 2026-09-09)

**The cap is PER BATCH**, per `research-sources.md`: "A source URL may appear in at
most 2 of the posts in a batch, and a domain in at most 3." An earlier note here
applied it across both batches. That was stricter than the rule and it made the
invitation-card agent discard an already-verified source for nothing. Count within
THIS batch only.

Counts in THIS batch (2026-09-09-ganesh-10b), 9 posts written:

- `dsal.uchicago.edu` — **3 of 3, AT cap** (kannada, tamil, telugu). No slots.
- `aclanthology.org` — at cap. No slots.
- `arxiv.org` — 2 of 3 in this batch. One slot left. VERIFIED 2026-09-09 by counting
  posts per batch; several agents reported it 'over cap' by counting across both
  batches, which is not the rule.
- `archive.org` — 2 of 3 in this batch. One slot left (same miscount applied here).
- `drikpanchang.com` — exempt, but you MUST put the literal text
  `[date/festival reference]` in that source entry's `stat` or the verifier counts it.

Batch 1's spend is in `PRIOR-BATCH-SOURCES.md`. It does NOT constrain your caps, but
do not re-cite the same URL — nine near-identical citation sets still read as a
content farm even when each batch is individually legal.

PMC, DOAJ, Frontiers, SSRN, CORE, Shodhganga, Semantic Scholar, Redfame and the
Indian university repositories are still open ground.

ganesh-chaturthi-wishes-with-name | link.springer.com | https://link.springer.com/article/10.1186/s41235-024-00555-9
ganesh-chaturthi-wishes-with-name | gsb.stanford.edu | https://www.gsb.stanford.edu/faculty-research/working-papers/personalization-email-marketing-role-non-informative-advertising
ganesh-chaturthi-wishes-with-name | arxiv.org | https://arxiv.org/abs/1411.5451
ganesh-chaturthi-wishes-with-name | doi.org (mdpi.com / Behavioral Sciences) | https://doi.org/10.3390/bs15101323
ganesh-chaturthi-wishes-with-name | doi.org (mededportal.org) | https://doi.org/10.15766/mep_2374-8265.11284
ganesh-chaturthi-wishes-with-name | drikpanchang.com | https://www.drikpanchang.com/festivals/ganesh-chaturthi/ganesh-chaturthi-date-time.html?geoname-id=1275339&year=2026  (date fact-check only — no muhurat stated, so NOT in sources/citation)

<!-- Post 2 (wishes-with-name) notes:
     - ZERO Wikipedia body links (en.wikipedia.org is at its 3-post cap from batch 1). Wikipedia
       appears only as sameAs inside structuredData, which does not count.
     - ZERO generic context statistics (no PIB / TRAI / Census / MEA).
     - **arxiv.org is now AT the 3-post domain cap** (2 in batch 1 + this one). Do not add another.
     - mdpi.com is now at 2 of 3. link.springer.com, gsb.stanford.edu and mededportal.org are each
       at 1 of 3 and were previously untouched.
     - pmc.ncbi.nlm.nih.gov stays at 2 of 3: PMC11089017 and PMC12561546 were read as mirrors to
       verify the Springer and MDPI articles, but neither PMC URL is cited. The last PMC slot is
       still free for a sibling.
     - link.springer.com and mdpi.com both return a JS challenge to the fetcher; both were verified
       through Europe PMC. Recorded in the blog's auditReport. -->

ganpati-invitation-card | ojs.aaai.org | https://ojs.aaai.org/index.php/ICWSM/article/view/14989
ganpati-invitation-card | journals.plos.org | https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0171565
ganpati-invitation-card | doi.org (ccsenet.org / Int. J. of English Linguistics) | https://doi.org/10.5539/ijel.v10n5p173
ganpati-invitation-card | rudn.tlcjournal.org | https://rudn.tlcjournal.org/issues/7%281%29-08.html
ganpati-invitation-card | drikpanchang.com | https://www.drikpanchang.com/festivals/ganesh-chaturthi/ganesh-chaturthi-date-time.html?geoname-id=1275339&year=2026  ([date/festival reference] — muhurat times ARE stated in the body, so it is in sources/citation)

<!-- Post 1 (ganpati-invitation-card) notes:
     - **journals.plos.org is now AT the 3-post cap.** Do not add another PLOS source.
     - ojs.aaai.org is now at 2 of 3 (batch 1's images post + this one). One slot left, but note
       ICWSM v18i1.31372 is already spent by ganesh-chaturthi-images.
     - ZERO Wikipedia body links (en.wikipedia.org at cap). Wikipedia appears only as sameAs in
       structuredData.
     - ZERO generic context statistics (no PIB / TRAI / Census / MEA).
     - ccsenet.org (via doi.org) and rudn.tlcjournal.org were untouched and are each now at 1 of 3.
     - arxiv.org was NOT used: the OutWithFriendz paper (arXiv:1710.02609) was fetched, verified and
       drafted in, then removed when the sibling wishes-with-name post took the last arXiv slot.
     - Blocked by the fetcher and therefore NOT cited: arrow.tudublin.ie (403, IJRTP 4(3) 2016 on
       instant messaging in religious mass events — perfect fit, unreadable), degruyterbrill.com
       (empty 202, Open Linguistics 2019 on the Pakistani wedding invitation), journals.sagepub.com
       (403, SAGE Open 2013 on the Persian wedding invitation genre), onlinelibrary.wiley.com and
       downloads.hindawi.com (403).
     - Deploy warning for the whole batch: https://subhsandesh.in/happy-ganesh-chaturthi returned
       HTTP 404 on 2026-09-09 while /templates and /shaadi-card returned 200. Recorded as an audit
       failure in this post's JSON. Re-check before publishing — it is the primary CTA in all ten. -->

ganesh-chaturthi-puja-vidhi | australiancouncilofhinduclergy.com | https://www.australiancouncilofhinduclergy.com/uploads/5/5/4/9/5549439/smartapuja.pdf
ganesh-chaturthi-puja-vidhi | hinduamerican.org | https://www.hinduamerican.org/blog/hindu-puja-instructions/
ganesh-chaturthi-puja-vidhi | sav.sk | https://www.sav.sk/journals/uploads/06301943SN.2022.2.18.pdf
ganesh-chaturthi-puja-vidhi | pewresearch.org | https://www.pewresearch.org/religion/2021/06/29/religious-practices-2/
ganesh-chaturthi-puja-vidhi | drikpanchang.com | https://www.drikpanchang.com/festivals/ganesh-chaturthi/ganesh-chaturthi-date-time.html?geoname-id=1275339&year=2026  ([date/festival reference] — muhurat IS stated, so it is in sources AND citation)

<!-- Post 3 (puja-vidhi) notes:
     - ZERO Wikipedia body links (en.wikipedia.org at its 3-post cap). Wikipedia appears only as
       sameAs inside structuredData, which does not count.
     - ZERO generic context statistics (no PIB / TRAI / Census / MEA). Pew is a subject-test source
       here (household religious practice in India), not a context statistic.
     - All four non-panchang domains were previously UNTOUCHED in both batches and are now at 1 of 3.
     - pmc.ncbi.nlm.nih.gov deliberately left alone (still 2 of 3); arxiv.org and en.wikipedia.org
       are at cap and were not used.
     - Rejected rather than cited weakly: ora.ox.ac.uk (JS challenge), doi 10.1007/s13596-021-00597-0
       (no OA location per Unpaywall), doi 10.30664/ar.107671 (abstract only through the fetcher).
     - No source was cited abstract-only; all five were read in full. -->

ganesh-chaturthi-wishes-in-kannada | doi.org (ojs.bonviewpress.com / Artificial Intelligence and Applications) | https://doi.org/10.47852/bonviewAIA3202624
ganesh-chaturthi-wishes-in-kannada | acta.uni-obuda.hu | https://acta.uni-obuda.hu/Lakshmaiah_Balouchzahi_Anusha_Sidorov_128.pdf
ganesh-chaturthi-wishes-in-kannada | dsal.uchicago.edu | https://dsal.uchicago.edu/cgi-bin/app/kittel_query.py?qs=b%C4%81gina&searchhws=yes
ganesh-chaturthi-wishes-in-kannada | newsonair.gov.in | https://www.newsonair.gov.in/gowri-ganesha-festival-is-being-celebrated-with-devotion-all-over-karnataka
ganesh-chaturthi-wishes-in-kannada | drikpanchang.com | https://www.drikpanchang.com/festivals/ganesh-chaturthi/ganesh-chaturthi-date-time.html?geoname-id=1277333&year=2026  ([date/festival reference] — Bengaluru muhurat IS stated in the body, so it is in sources/citation)
ganesh-chaturthi-wishes-in-kannada | drikpanchang.com | https://www.drikpanchang.com/festivals/gowri-habba/swarna-gowri-vratha-date.html?geoname-id=1277333&year=2026  ([date/festival reference] — Bengaluru Gowri muhurat IS stated in the body, so it is in sources/citation)

<!-- Post 4 (wishes-in-kannada) notes:
     - All five non-panchang domains were previously UNTOUCHED in both batches: acta.uni-obuda.hu,
       dsal.uchicago.edu, newsonair.gov.in and ojs.bonviewpress.com (reached via doi.org) are each
       now at 1 of 3. Nothing this post uses reduces a sibling's remaining budget.
     - **arxiv.org was deliberately NOT used.** The CoLI-Kenglish paper exists as arXiv:2211.09847,
       but the peer-reviewed journal version in Acta Polytechnica Hungarica 19(10) 2022 carries the
       identical figures and was cited instead, so the arXiv slot stayed free for a sibling. Both
       were fetched; the numbers match.
     - ZERO Wikipedia body links (en.wikipedia.org at cap). Wikipedia appears only as sameAs in
       structuredData: Q929250, Q33673, Q5590128, Q839666, Q1185, Q59203.
     - ZERO generic context statistics (no PIB / TRAI / Census / MEA). newsonair.gov.in is a
       government broadcaster but the citation is a descriptive report of Karnataka practice, not
       a statistic, so it does not spend the one-per-post context allowance.
     - The two Drik Panchang URLs use geoname-id=1277333 (Bengaluru), which no sibling has used —
       batch 1 and batch 2 so far use 1261481, 1273294 and 1275339.
     - **Regional finding worth reusing:** for Bengaluru in 2026, Swarna Gowri Vratha and Ganesh
       Chaturthi BOTH fall on Monday 14 September (Gowri Pratahkala muhurat 06:09-07:06 AM, Ganesha
       Madhyahna muhurat 11:02 AM-01:28 PM). The usual one-day Gowri Habba gap collapses this year.
     - Sourcing gap recorded in the blog's honestAssessment: no openable peer-reviewed study on
       Kannada diglossia exists. ideals.illinois.edu 403s on hdl 2142/78494; the CIIL e-book
       "Diglossia and Literacy" bundles Kannada with Tamil and Sinhalese and is left for nobody;
       Sonali Nag's akshara work is paywalled at Wiley. Do not burn a slot re-searching this.
     - Deploy warning re-confirmed 2026-09-09: https://subhsandesh.in/happy-ganesh-chaturthi is
       still HTTP 404; /templates is 200. Recorded as an audit failure in this post's JSON too. -->

ganesh-chaturthi-wishes-in-gujarati | revistas.udes.edu.co | https://revistas.udes.edu.co/aibi/article/view/4445
ganesh-chaturthi-wishes-in-gujarati | ijmems.in | https://ijmems.in/cms/storage/app/public/uploads/volumes/42-IJMEMS-22-0221-7-5-643-655-2022.pdf
ganesh-chaturthi-wishes-in-gujarati | openaccess.wgtn.ac.nz | https://openaccess.wgtn.ac.nz/articles/thesis/Immigrant_Language_Maintenance_and_Shift_in_the_Gujarati_Dutch_and_Samoan_Communities_of_Wellington/16970086
ganesh-chaturthi-wishes-in-gujarati | grfdt.com | https://grfdt.com/PublicationDetails.aspx?Type=Working+papers&TabId=10191
ganesh-chaturthi-wishes-in-gujarati | unesco.org | https://www.unesco.org/en/articles/garba-gujarat-inscribed-unesco-representative-list-intangible-cultural-heritage-humanity
ganesh-chaturthi-wishes-in-gujarati | drikpanchang.com | https://www.drikpanchang.com/festivals/ganesh-chaturthi/ganesh-chaturthi-date-time.html?geoname-id=1279233&year=2026  ([date/festival reference] — the Ahmedabad Madhyahna muhurat IS stated in the body, so it is in sources/citation)

<!-- Post 6 (wishes-in-gujarati) notes:
     - All five non-panchang domains were previously UNTOUCHED in both batches:
       revistas.udes.edu.co, ijmems.in, openaccess.wgtn.ac.nz, grfdt.com and unesco.org are each
       now at 1 of 3. Nothing this post uses reduces a sibling's remaining budget.
     - Deliberately NOT used, to leave the slots for siblings: arxiv.org, journals.plos.org and
       en.wikipedia.org (all at cap), plus archive.org, aclanthology.org, dsal.uchicago.edu,
       ojs.aaai.org and pmc.ncbi.nlm.nih.gov. mdpi.com stays at 2 of 3 — MDPI Sensors 2023
       "Modeling Topics in DFA-Based Lemmatized Gujarati Text" was found, is open and would have
       fit, but IJMEMS covered the script ground better and the MDPI slot was left free.
     - ZERO Wikipedia body links. Wikipedia appears only as sameAs inside structuredData:
       Q929250, Q5137, Q733944, Q1282294, Q925034, Q2394624, Q10269, Q882985, Q1070, Q1579.
     - ZERO generic context statistics (no PIB / TRAI / Census / MEA). The 62 M worldwide and
       46.1 M in-India speaker figures come from the two topical peer-reviewed papers, not from a
       government release.
     - Drik Panchang geoname-id=1279233 (Ahmedabad) is unique to this post. Batch so far uses
       1261481, 1269843, 1273294, 1275339, 1277333.
     - Verified but NOT cited (fact-check only, no time stated in the body, so kept out of
       sources/citation): Drik Panchang Pitru Paksha 2026 for Ahmedabad,
       https://www.drikpanchang.com/shraddha/pitru-paksha-shraddha-dates.html?geoname-id=1279233&year=2026
     - **Regional finding worth reusing:** Ganesh visarjan is Friday 25 September 2026; Pitru
       Paksha opens the very next day (Purnima Shraddha, Saturday 26 September) and runs to Sarva
       Pitru Amavasya on Saturday 10 October 2026. Navratri's Ghatasthapana follows that, so
       Gujarat's Ganesh observance does NOT run straight into Navratri — Garba starts roughly four
       weeks after the Ganesh wish, with sixteen days of ancestor rites in between. Any sibling
       that repeats the "Ganesh runs into Navratri" framing is wrong for 2026.
     - Read abstract-only and recorded as such in the blog's honestAssessment: the Roberts 1999
       Wellington thesis (the 200+ page figshare PDF timed out repeatedly, >240 s, so only the
       repository record and full abstract were read) and the GRFDT Lisbon working paper (the page
       publishes no full text and no date, so publishedDate is omitted from its citation).
     - Blocked by the fetcher and therefore NOT cited: repository.digital.georgetown.edu
       (Cloudflare challenge on hdl 10822/559499, "Factors Affecting Proficiency Among Gujarati
       Heritage Language Learners on Three Continents" — a perfect fit, unreadable; do not burn a
       slot re-searching it), ich.unesco.org/en/RL/garba-of-gujarat-01962 (empty body; the
       unesco.org news article carries the same facts and was used instead), degruyter.com,
       explorequotes.com and gujaratiquotes.in (both HTTP 406 — competitors anyway).
     - Source flaw recorded in the research brief: the IJMEMS paper's abstract says "36 consonants,
       13 vowels" while its introduction says "34 Consonants 13 Vowels 15 Gujarati modifiers". The
       post cites only the vowels-and-modifiers figure and the shirorekha statement, never a
       consonant count.
     - Deploy warning re-confirmed 2026-09-09: https://subhsandesh.in/happy-ganesh-chaturthi is
       still HTTP 404; /templates is 200. Recorded as an audit failure in this post's JSON too. -->

ganesh-chaturthi-wishes-in-tamil | dsal.uchicago.edu | https://dsal.uchicago.edu/cgi-bin/app/tamil-lex_query.py?qs=%E0%AE%B5%E0%AE%BE%E0%AE%B4%E0%AF%8D%E0%AE%A4%E0%AF%8D%E0%AE%A4%E0%AF%81&searchhws=yes
ganesh-chaturthi-wishes-in-tamil | sas.upenn.edu | https://www.sas.upenn.edu/~haroldfs/sars238/tamil238.html
ganesh-chaturthi-wishes-in-tamil | aclanthology.org | https://aclanthology.org/2020.sltu-1.28/
ganesh-chaturthi-wishes-in-tamil | r12a.github.io | https://r12a.github.io/scripts/taml/ta.html
ganesh-chaturthi-wishes-in-tamil | drikpanchang.com | https://www.drikpanchang.com/festivals/ganesh-chaturthi/ganesh-chaturthi-date-time.html?geoname-id=1264527&year=2026  ([date/festival reference] — the Chennai Madhyahna muhurat IS stated in the body, so it is in sources/citation)

<!-- Post 7 (wishes-in-tamil) notes:
     - **aclanthology.org is now AT the 3-post cap** (batch 1 marathi + batch 1 quotes-in-hindi +
       this one). No wave-3 sibling may add an ACL source.
     - **dsal.uchicago.edu is now AT the 3-post cap** (kannada kittel_query, telugu brown_query,
       tamil tamil-lex_query). No further DSAL dictionary lookups.
     - sas.upenn.edu and r12a.github.io were both previously UNTOUCHED and are each now at 1 of 3.
     - ZERO Wikipedia body links (en.wikipedia.org at cap). Wikipedia appears only as sameAs inside
       structuredData: Q929250, Q5885, Q26803, Q59203, Q845871, Q3522272, Q1119274, Q1445. Note
       `Kozhukattai` does not exist on en.wikipedia — the live title is `Kozhukkatta` (Q3522272).
     - ZERO generic context statistics (no PIB / TRAI / Census / MEA).
     - **arxiv.org deliberately NOT used.** arXiv:2603.26587 (EnTaCs) carries the sharper figure —
       8,370 of 44,161 utterances (19.0%) contain Tamil Unicode characters, so ~81% are Romanised —
       and arXiv:2006.00206 mirrors the cited ACL paper. Both were skipped because arxiv.org is at
       cap. journals.plos.org, ojs.aaai.org, archive.org and pmc.ncbi.nlm.nih.gov were left free.
     - Drik Panchang geoname-id=1264527 (Chennai) is unique to this post. The batch now uses
       1261481, 1264527, 1269843, 1273294, 1275339, 1277333, 1279233.
     - **Regional findings worth reusing:** the Tamil Lexicon's மோதகம் entry cross-refers to
       கொழுக்கட்டை (not the reverse); விக்கினம் is marked "n. vighna" and glossed with the native
       இடையூறு; பிள்ளையார் is glossed first as மகன், "son". கணேஷ் requires ஷ, one of the Grantha
       consonants (ஜ ஸ ஶ ஷ ஹ) the script imported for Sanskrit and English, while விநாயகர்,
       பிள்ளையார் and சதுர்த்தி use only the 18 native consonants.
     - Source flaw recorded in the research brief: the Tamil Lexicon dates விநாயகசதுர்த்தி to the
       lunar month of Cirāvaṇam (Śrāvaṇa), not Bhādrapada. It is cited for word meanings ONLY;
       every date in the post comes from Drik Panchang.
     - Rejected rather than cited weakly: ijelr.in (Maraimalai Adigal paper, open but polemical),
       w3.org/TR/tamil-lreq/ (404 — no such W3C document), cal.org Heritage Voices (outreach brief,
       fails the swap test), academia.edu (login wall).
     - **Cap breach found in a sibling, not fixed here:** ganesh-chaturthi-wishes-in-telugu.json is
       missing from this file entirely, and it cites https://arxiv.org/abs/2010.04482 — which puts
       arxiv.org at 4 posts, one over the domain cap. Its other sources are dsal.uchicago.edu
       (brown_query), ijfmr.com, archive.org and drikpanchang (geoname-id 1269843). Someone should
       append them and reconcile the arXiv count.
     - Deploy warning re-confirmed 2026-09-09 (third check): https://subhsandesh.in/happy-ganesh-chaturthi
       is still HTTP 404; /templates and /shaadi-card both return 200. Recorded as an audit failure
       in this post's JSON. -->

ganesh-chaturthi-2027 | drikpanchang.com | https://www.drikpanchang.com/festivals/ganesh-chaturthi/ganesh-chaturthi-date-time.html?geoname-id=1275339&year=2027  ([date/festival reference] — 2027 muhurat times ARE stated in the body, so it is in sources/citation)
ganesh-chaturthi-2027 | drikpanchang.com | https://www.drikpanchang.com/festivals/ganesh-chaturthi/ganesh-chaturthi-date-time.html?geoname-id=1275339&year=2031  ([date/festival reference] — stands for the per-year Mumbai pages checked at year=2026, 2028, 2029, 2030, 2031; muhurats ARE stated, so it is in sources/citation)
ganesh-chaturthi-2027 | web.archive.org (archive.org) | https://web.archive.org/web/20240827060635/https://www.narit.or.th/files/JAHH/2019JAHHvol22/2019JAHH...22..407G.pdf
ganesh-chaturthi-2027 | doi.org (ijp.uobaghdad.edu.iq / Iraqi Journal of Physics) | https://doi.org/10.30723/ijp.v14i29.229
ganesh-chaturthi-2027 | eclipse.gsfc.nasa.gov | https://eclipse.gsfc.nasa.gov/phase/phases2001.html

<!-- Post 11 (ganesh-chaturthi-2027) notes:
     - **archive.org is now AT the 3-post cap (3/3).** No slot left in either batch. It was spent on
       Gislen & Eade (2019), JAHH 22(3) 407-416, "The Calendars of Southeast Asia. 1: Introduction" —
       the peer-reviewed open-access source for the 11-day drift, the adhikamasa rule, the Metonic
       7-in-19 scheme and the definition of a tithi. The publisher's own copy is GONE: every
       narit.or.th/files/JAHH/... path now returns an HTML shell, sciengine.com (the journal's current
       host) returns HTTP 418 to a fetcher, ADS returns CAPTCHA/405, and the Lund University records
       (lup.lub.lu.se, portal.research.lu.se) link only to the dead file. The Wayback capture is the
       only readable full text and it is a genuine 870 KB PDF, read end to end via pdftotext.
     - New domains, each now at 1 of 3: eclipse.gsfc.nasa.gov, ijp.uobaghdad.edu.iq (via doi.org).
     - ZERO Wikipedia body links (en.wikipedia.org at cap). Wikipedia appears only as sameAs inside
       structuredData: Q929250, Q190552, Q7261567, Q1427958, Q194235, Q285682, Q3630768. Note
       en.wikipedia.org/wiki/Adhika-masa was a BODY link in batch 1's ganesh-chaturthi-2026-date;
       here it is sameAs only, which does not count.
     - ZERO generic context statistics (no PIB / TRAI / Census / MEA).
     - arxiv.org deliberately NOT used: arXiv:1007.0062 "Calendars of India" is a near-perfect fit and
       was left alone because the domain is at cap.
     - Batch 1's three calendrical sources were NOT re-cited, per the brief: cs.tau.ac.il (Dershowitz
       & Reingold), archive.org/details/in.ernet.dli.2015.207413 (Kielhorn 1897) and
       archive.org/details/dli.ministry.19933 (1955 Calendar Reform Committee).
     - Read abstract-only and recorded as an audit failure: the Iraqi Journal of Physics article
       (CC BY, open access — all five cited figures are in the abstract; the full PDF was never fetched).
     - Dead ends, do NOT burn a slot re-searching these: insa.nic.in/writereaddata/UpLoadedFiles/IJHS/
       Vol38_1_3_AKBag.pdf (A.K. Bag on the luni-solar calendar in Indian Journal of History of Science
       38(1)) downloads fine but is a SCANNED IMAGE with no text layer, pdftotext yields 4 bytes;
       link.springer.com/article/10.1007/s11042-023-16553-w (VedicDateTime R package) returns a JS
       challenge; repository.ias.ac.in/74673 is 404; core.ac.uk 403s; DOAJ's article API returns 0 hits
       for every calendrical query tried.
     - **packolkata.gov.in does not resolve from this network.** The Positional Astronomy Centre is the
       body that actually computes the Rashtriya Panchang and is the obvious official Indian source for
       any calendar post — worth retrying from another network before the next festival batch.
     - **Verified forward table any sibling may reuse without re-fetching** (Drik Panchang, Mumbai
       geoname-id=1275339): Ganesh Chaturthi / visarjan — 2026 Mon 14 Sep / Fri 25 Sep · 2027 Sat 4 Sep /
       Tue 14 Sep · 2028 Wed 23 Aug / Sat 2 Sep · 2029 Tue 11 Sep / Fri 21 Sep · 2030 Sun 1 Sep /
       Tue 10 Sep · 2031 Sat 20 Sep / Mon 29 Sep. On 4 September 2027 EVERY Indian city's madhyahna
       muhurat ends at 12:25 PM because the Chaturthi tithi expires then (Mumbai 11:23 AM, Pune 11:19 AM,
       New Delhi 11:04 AM, Bengaluru 11:05 AM, Hyderabad 11:01 AM, Chennai 10:54 AM).
     - Deploy warning re-confirmed 2026-09-09 at 12:1x IST: https://subhsandesh.in/happy-ganesh-chaturthi
       is STILL HTTP 404; /templates is 200. Recorded as an audit failure in this post's JSON too. -->

ganesh-chaturthi-wishes-for-business | repo.uni-hannover.de | https://repo.uni-hannover.de/handle/123456789/2337
ganesh-chaturthi-wishes-for-business | teslcanadajournal.ca | https://teslcanadajournal.ca/index.php/tesl/article/view/1205
ganesh-chaturthi-wishes-for-business | doi.org (immi.se / Journal of Intercultural Communication) | https://doi.org/10.36923/jicc.v17i3.747
ganesh-chaturthi-wishes-for-business | cag.gov.in | https://cag.gov.in/uploads/media/List-of-Gazetted-Holidays-and-Restricted-Holidays-2026-069492ddf80fa39-36385303.pdf
ganesh-chaturthi-wishes-for-business | drikpanchang.com | https://www.drikpanchang.com/festivals/ganesh-chaturthi/ganesh-chaturthi-date-time.html?geoname-id=1275339&year=2026  ([date/festival reference] — the Mumbai Madhyahna muhurat IS stated in the body, so it is in sources/citation)

<!-- Post 14 (wishes-for-business) notes:
     - All three research domains were previously UNTOUCHED across both batches and are each now
       at 1 of 3: repo.uni-hannover.de (Gebert et al., Human Relations 67(5) 2014, open-access
       author copy), teslcanadajournal.ca (Leopold, TESL Canada Journal 32(2) 2015) and
       immi.se reached via doi.org (Pikhart & Koblizkova, J. of Intercultural Communication 17(3)
       2017). cag.gov.in is also new and is now at 1 of 3.
     - Nothing here reduces a sibling's remaining budget. arxiv.org, en.wikipedia.org and
       journals.plos.org (all at cap) were not touched; mdpi.com deliberately left at 2 of 3 and
       pmc.ncbi.nlm.nih.gov at 2 of 3; pewresearch.org left at 1 of 3.
     - ZERO Wikipedia body links. Wikipedia appears only as sameAs inside structuredData:
       Q929250, Q1937189, Q4115749, Q927083, Q628858 — all verified through the Wikipedia API.
     - ZERO generic context statistics (no PIB / TRAI / Census / MEA). cag.gov.in is the post's
       one government source and it is used as a workplace fact, not a context statistic.
     - **Workplace finding worth reusing:** Ganesh Chaturthi is NOT one of the 17 compulsory
       gazetted holidays on the central government's 2026 list. It sits in Annexure-II, the
       restricted (optional) list, as "Ganesh Chaturthi/Vinayaka Chaturthi". Verified by
       extracting the text of the CAG PDF above and cross-checked against
       https://dfe.gov.in/uploads/documents/list-of-restricted-holiidays-2026.pdf (item 23).
       Gazetted for 2026, in order: Republic Day, Holi, Id-ul-Fitr (24 Mar), Mahavir Jayanti,
       Good Friday, Budha Purnima, Id-ul-Zuha, Muharram, Ratha Yatra, Independence Day,
       Milad-un-Nabi, Gandhi Jayanti, Maha Navami, Dussehra, Diwali, Guru Nanak's Birthday,
       Christmas Day (25 Dec).
     - Could NOT be verified and therefore NOT asserted: the Maharashtra state public-holiday
       notification of 8 December 2025 under s.25 of the Negotiable Instruments Act, 1881.
       www.maharashtra.gov.in timed out repeatedly (>30 s) and every readable copy is an HR-SaaS
       aggregator. The post states the verified central-government fact and tells the reader to
       check their own state list. Do not burn a slot re-searching this.
     - Blocked by the fetcher and therefore NOT cited: mdpi.com (403, Religions 13(6):481 2022
       "Building a More Inclusive Workplace for Religious Minorities" — a good fit, unreadable),
       link.springer.com (JS challenge, Corpus Pragmatics 2018 on status and gender in the
       Clinton email corpus), and all three OA mirrors of Héliot et al. 2020 "Religious identity
       in the workplace: A systematic review", HRM 59(2) — onlinelibrary.wiley.com,
       researchonline.lse.ac.uk and surrey.eprints-hosting.org all 403 or time out.
     - No source was cited abstract-only; all five were read in full.
     - Deploy warning re-confirmed 2026-09-09: https://subhsandesh.in/happy-ganesh-chaturthi is
       still HTTP 404; /templates is 200. Recorded as an audit failure in this post's JSON too. -->

ganpati-mantra-and-stotra | redalyc.org | https://www.redalyc.org/journal/586/58647014006/html/
ganpati-mantra-and-stotra | journal.oraltradition.org | https://journal.oraltradition.org/the-oral-style-of-the-r%CC%A5gveda/
ganpati-mantra-and-stotra | gretil.sub.uni-goettingen.de | https://gretil.sub.uni-goettingen.de/gretil/corpustei/transformations/html/sa_Rgveda-edAufrecht.htm
ganpati-mantra-and-stotra | gretil.sub.uni-goettingen.de | https://gretil.sub.uni-goettingen.de/gretil/corpustei/transformations/html/sa_nAradapurANa.htm
ganpati-mantra-and-stotra | ich.unesco.org | https://ich.unesco.org/en/RL/tradition-of-vedic-chanting-00062
ganpati-mantra-and-stotra | drikpanchang.com | https://www.drikpanchang.com/festivals/ganesh-chaturthi/ganesh-chaturthi-date-time.html?geoname-id=1259229&year=2026  ([date/festival reference] — the Pune Madhyahna muhurat IS stated in the body, so it is in sources AND citation)

<!-- Post 8 (ganpati-mantra-and-stotra) notes:
     - **CAP CORRECTION — archive.org is now AT the 3-post cap, not "one slot left".** The Telugu
       post (ganesh-chaturthi-wishes-in-telugu.json) cites
       https://archive.org/details/vinayaka-vrata-katha-by-chellapilla-bangareswara-sarma and
       https://arxiv.org/abs/2010.04482 but its sources were never appended to this file. Counting
       it: archive.org = batch 1's date post + ganpati-aarti + telugu = 3. arxiv.org = 4 posts and
       is OVER cap. Whoever writes posts 7, 11-15 must not use either domain.
     - redalyc.org, journal.oraltradition.org and gretil.sub.uni-goettingen.de were previously
       UNTOUCHED in both batches; each is now at 1 of 3 (gretil carries two URLs but only one post).
     - ich.unesco.org shares the unesco.org registrable domain with the Gujarati post, so
       unesco.org is now at 2 of 3.
     - ZERO Wikipedia body links (en.wikipedia.org at cap). Wikipedia appears only as sameAs in
       structuredData: Q131510, Q1579, Q4133165, Q727413, Q1973860, Q2416043, Q48723594, Q929250.
     - ZERO generic context statistics (no PIB / TRAI / Census / MEA).
     - Deliberately avoided so as not to collide with batch 1's ganpati-aarti, which owns the
       group-singing research: pmc.ncbi.nlm.nih.gov (still 2 of 3) and frontiersin.org.
     - Drik Panchang geoname-id=1259229 (Pune) is unique to this post. The batch so far uses
       1259229, 1261481, 1269843, 1273294, 1275339, 1277333 and 1279233.
     - Nothing was cited abstract-only; all six sources were read in full.
     - Blocked by the fetcher and therefore cited through a mirror: estudiosdeasiayafrica.colmex.mx
       (Cloudflare challenge, HTTP 403 on both the article page and the PDF). The same article's
       full text is open on Redalyc and that is the URL cited. Also blocked: mdpi.com search (403)
       and michaelwitzel.org's canon.pdf (scanned, no extractable text).
     - Left for a sibling, open and on-topic but unreadable through the fetcher:
       journals.akademicka.pl, Cracow Indological Studies 19 (2017), Ferrara, "The Theology of
       Performance and the Vedic Rituals".
     - **Original finding worth reusing:** searched GRETIL on 2026-09-09 — "vakratunda mahakaya"
       occurs ZERO times in the Rigveda Samhita (Aufrecht), the Brahmanda Purana, the Naradapurana
       and Skanda Purana 1-31. RV 2.23.1 "gananam tva ganapatim havamahe" is addressed to
       Brahmanaspati (vocative "brahmanas pate"). "suryakotisamaprabham" is a stock Puranic epithet
       used of Hanuman, a jewel and a vimana in the Naradapurana, never of Ganesha there.
     - Deploy warning re-confirmed 2026-09-09: https://subhsandesh.in/happy-ganesh-chaturthi is
       still HTTP 404; /templates is 200. Recorded as an audit failure in this post's JSON too. -->

ganesh-chaturthi-wishes-in-telugu | dsal.uchicago.edu | https://dsal.uchicago.edu/cgi-bin/app/brown_query.py?qs=%E0%B0%9A%E0%B0%B5%E0%B0%BF%E0%B0%A4%E0%B0%BF&searchhws=yes&matchtype=exact
ganesh-chaturthi-wishes-in-telugu | ijfmr.com | https://www.ijfmr.com/papers/2025/4/54968.pdf
ganesh-chaturthi-wishes-in-telugu | drikpanchang.com | https://www.drikpanchang.com/festivals/ganesh-chaturthi/ganesh-chaturthi-date-time.html?geoname-id=1269843&year=2026

ganesh-chaturthi-katha-and-story | asianethnology.org | https://asianethnology.org/article/148337-the-origin-of-the-ganapati-cult
ganesh-chaturthi-katha-and-story | wisdomlib.org | https://www.wisdomlib.org/hinduism/book/shiva-purana-english/d/doc226133.html
ganesh-chaturthi-katha-and-story | sanskritdocuments.org | https://sanskritdocuments.org/doc_purana/gaNeshapurANam1.html
ganesh-chaturthi-katha-and-story | gretil.sub.uni-goettingen.de | https://gretil.sub.uni-goettingen.de/gretil/corpustei/transformations/plaintext/sa_bhAgavatapurANa.txt
ganesh-chaturthi-katha-and-story | jur.sljol.info | https://jur.sljol.info/articles/10.4038/jur.v12i2.8054
ganesh-chaturthi-katha-and-story | drikpanchang.com | https://www.drikpanchang.com/festivals/ganesh-chaturthi/ganesh-chaturthi-date-time.html?geoname-id=1259229&year=2026  ([date/festival reference] — the Pune Madhyahna muhurat AND the moon-sighting window ARE stated in the body, so it is in sources/citation)

<!-- Post 12 (katha-and-story) notes:
     - CAP CORRECTIONS, read these before choosing sources. The live-cap block at the top of this
       file is out of date because two finished posts never appended their sources here:
         * **archive.org is AT the 3-post cap, not "one slot left".** ganesh-chaturthi-wishes-in-telugu
           cites https://archive.org/details/vinayaka-vrata-katha-by-chellapilla-bangareswara-sarma,
           joining batch 1's ganesh-chaturthi-2026-date and ganpati-aarti.
         * **arxiv.org is now at 4 posts, i.e. OVER cap** (marathi, telugu, wishes-with-name,
           happy-ganesh-chaturthi-wishes). Nothing can be done about that retroactively; do not add a fifth.
         * doi.org resolves for 9 posts, but each resolves to a different publisher, so the real domains
           are within cap. aclanthology.org and dsal.uchicago.edu are both AT 3.
       This post used none of them.
     - asianethnology.org, wisdomlib.org, sanskritdocuments.org and jur.sljol.info were all previously
       UNTOUCHED and are each now at 1 of 3.
     - gretil.sub.uni-goettingen.de is now at 2 of 3 (ganpati-mantra-and-stotra used the Rgveda and
       Naradapurana e-texts; this post uses the Bhagavatapurana one, so the URLs differ).
     - **The Drik Panchang Pune URL (geoname-id=1259229) is now at the 2-post URL cap** — ganpati-mantra-and-stotra
       used the identical URL. A later post needing a panchang must pick a different geoname-id.
       Spent so far: 1259229 (Pune), 1261481, 1269843, 1273294, 1275339, 1277333, 1279233.
     - ZERO Wikipedia body links (en.wikipedia.org at cap). Wikipedia appears only as sameAs in
       structuredData: Q929250, Q1579, Q124243, Q2565316, Q2392874, Q1296733, Q17069706 — all verified
       against the Wikipedia API with their QIDs paired.
     - ZERO generic context statistics (no PIB / TRAI / Census / MEA).
     - **Verified in full but deliberately NOT cited:** Brahmavaivarta Purana, Ganesa Khanda, trans.
       Rajendra Nath Sen, Sacred Books of the Hindus vol. 24 (1922), read through the archive.org OCR item
       `sacredbooksofthehindusvol24brahmavaivartapurana1922_202002`. Its chapter list verifies every claim
       the post makes about that text (ch. III–VII Punyaka vrata, VIII the birth, XI Parvati–Sani discourse,
       XVIII why Ganesa lost his head, XX the elephant face, XXIV the one tusk via Jamadagni/Kartavirya).
       The print edition is named in the body but NOT linked, because archive.org is at its domain cap.
     - Blocked by the fetcher and therefore NOT cited: digi.ub.uni-heidelberg.de (Anubis proof-of-work wall
       on Getty 1936, `diglit/getty1971` — a perfect fit, unreadable; do not burn time re-searching it),
       sacred-texts.com (403 on every path), shodhganga.inflibnet.ac.in (simple-search times out >30 s).
       wisdomlib.org 403s a default user-agent and 200s a browser one — use a browser UA.
     - DOAJ full-text search for "Ganesha" is useless: it matches *Undiksha* (Universitas Pendidikan
       Ganesha) and returns Indonesian education papers. Search OpenAlex or Semantic Scholar instead.
     - Deploy warning re-confirmed 2026-09-09: https://subhsandesh.in/happy-ganesh-chaturthi is still
       HTTP 404; /templates is 200. Recorded as an audit failure in this post's JSON too. -->

lalbaugcha-raja-mumbai | lalbaugcharaja.com | https://lalbaugcharaja.com/en/ganesh-muhurta-pujan-2026/
lalbaugcha-raja-mumbai | english.lokshahi.com | https://english.lokshahi.com/maharashtra/how-to-reach-lalbaugcha-raja-darshan-timings-mukh-darshan-charan-sparsh-12459868
lalbaugcha-raja-mumbai | freepressjournal.in | https://www.freepressjournal.in/mumbai/mumbai-ganeshotsav-2026-gsb-seva-mandal-secures-rs-70327-crore-insurance-cover-66-kg-gold-to-adorn-ganpati-idol-mumbai-news
lalbaugcha-raja-mumbai | freepressjournal.in | https://www.freepressjournal.in/mumbai/attention-mumbaikars-avoid-these-routes-near-lalbaug-parel-ahead-of-grand-ganpati-aagman-processions-today-mumbai-news
lalbaugcha-raja-mumbai | arrow.tudublin.ie | https://arrow.tudublin.ie/ijrtp/vol8/iss8/8/
lalbaugcha-raja-mumbai | frontiersin.org | https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2025.1695241/full
lalbaugcha-raja-mumbai | drikpanchang.com | https://www.drikpanchang.com/vrats/sankashti-chaturthi-dates.html?year=2026&geoname-id=1275339  ([date/festival reference] — used ONLY to verify Vighnaraja Sankashti Chaturthi = Tue 29 Sep 2026 for Mumbai, which is the Andhericha Raja immersion date. The post states a DATE, not a muhurat time, so per research-sources.md this is kept OUT of batchMeta.sources and OUT of citation, and there is no outbound body link to it.)

<!-- Post 10 (lalbaugcha-raja-mumbai) notes:
     - ZERO Wikipedia body links. Wikipedia appears only as sameAs inside structuredData (Lalbaugcha
       Raja Q12061085, Ganesh Chaturthi Q929250, Mumbai Q1156, Lalbaug Q65327625, Girgaon Chowpatty
       Q5564239, BMC Q1195653 — all verified against the Wikipedia API on 2026-09-09).
     - ZERO generic context statistics (no PIB / TRAI / Census / MEA).
     - All six cited domains were UNTOUCHED in both batches and are each now at 1 of 3 in batch 2.
       freepressjournal.in carries two URLs but that is ONE post, so the domain is at 1 of 3, not 2.
       (Note freepressjournal.in also appears once in batch 1 via ganpati-visarjan-2026 — different
       URL, and batch 1 does not constrain this batch's cap.)
     - arrow.tudublin.ie DOES serve its IJRTP landing pages to the fetcher; only
       /cgi/viewcontent.cgi (the PDF) returns 403. The invitation-card agent's "403" note applies to
       the PDF endpoint, not the whole domain. Abstract-only citation recorded as an audit failure.
     - dsal.uchicago.edu, aclanthology.org, journals.plos.org and arxiv.org were deliberately not
       touched. pmc.ncbi.nlm.nih.gov and archive.org slots were left free for siblings.
     - Territory: stayed off ganesh-chaturthi-essay's Tilak/1893 history and off ganpati-visarjan-2026's
       immersion ritual and water quality. No CPCB figure, no shadu-vs-PoP, no artificial-pond count.
       Visarjan appears only as street logistics (which day, which roads).
     - Deploy warning STILL OPEN: https://subhsandesh.in/happy-ganesh-chaturthi returned HTTP 404 on
       2026-09-09; /templates returned 200. Recorded as an audit failure in this post's JSON. -->

ganpati-wallpaper-hd-4k | nature.com | https://www.nature.com/articles/s41467-025-64679-2
ganpati-wallpaper-hd-4k | people.csail.mit.edu | https://people.csail.mit.edu/torralba/publications/howmanypixels.pdf
ganpati-wallpaper-hd-4k | pmc.ncbi.nlm.nih.gov | https://pmc.ncbi.nlm.nih.gov/articles/PMC9918960/
ganpati-wallpaper-hd-4k | w3.org | https://www.w3.org/Graphics/JPEG/itu-t81.pdf
ganpati-wallpaper-hd-4k | gs.statcounter.com | https://gs.statcounter.com/screen-resolution-stats/mobile/india
ganpati-wallpaper-hd-4k | gs.statcounter.com | https://gs.statcounter.com/screen-resolution-stats/desktop/india
ganpati-wallpaper-hd-4k | purdue.edu | https://www.purdue.edu/newsroom/archive/releases/2021/Q3/dark-mode-may-not-save-your-phones-battery-life-as-much-as-you-think,-but-there-are-a-few-silver-linings.html

<!-- Post 15 (ganpati-wallpaper-hd-4k) notes:
     - **Phase 8a collision check was run BEFORE drafting, and the post survived it.** The top-10 for
       `ganpati wallpaper hd` and for `ganpati bappa 4k wallpaper` share ZERO identical URLs with the
       top-10 for `ganesh chaturthi images` (batch 1). Threshold to merge is 3. Three DOMAINS recur
       (pixabay.com, stock.adobe.com, magnific.com) but every path differs, and the wallpaper SERPs are
       dominated by a result class the images SERP does not contain: wallpaper farms (WallpaperBat,
       WallpaperAccess, WallpaperFlare), Pinterest pins, a Google Play app and two Gumroad pages. Full
       three-way URL table is in research/ganpati-wallpaper-hd-4k.md. Do not re-litigate this.
     - **All six domains were previously UNTOUCHED in both batches** and are each now at 1 of 3, except
       gs.statcounter.com which is at 1 of 3 as a domain (two URLs, mobile + desktop, both in this one
       post — well inside the 2-post URL cap). Nothing here reduces a sibling's remaining budget.
     - Deliberately NOT used, to leave slots free: arxiv.org (1 left), archive.org (1 left),
       pmc.ncbi.nlm.nih.gov is now at 3 of 3 in batch 1 terms but only 1 of 3 in THIS batch — PMC9918960
       is this batch's first PMC citation, so two PMC slots remain here.
     - **Deliberately NOT re-cited: jis-eurasipjournals.springeropen.com** (Pasquini et al., media
       forensics on social platforms). It is the obvious source for platform recompression and would have
       fitted the upload section perfectly, but batch 1's `ganesh-chaturthi-images` already spent it, and
       re-citing it would make the two posts read as one. ITU-T T.81 (the JPEG standard itself) was used
       as the primary source instead, which is stronger anyway.
     - ZERO Wikipedia body links (en.wikipedia.org at cap from batch 1). Wikipedia appears only as sameAs
       inside structuredData, all verified through the Wikipedia API with QIDs paired: Q1139104
       (Wallpaper (computing)), Q929250, Q12538706 (Display resolution), Q904055 (Pixel density), Q2195
       (JPEG), Q555066 (Visual acuity), Q1579.
     - ZERO generic context statistics (no PIB / TRAI / Census / MEA). Statcounter is a screen-resolution
       measurement, i.e. the post's actual subject, not a context statistic.
     - drikpanchang.com NOT used at all: the body states the 2026 date but no muhurat time, so per the
       checklist the date reference stays out of both `sources` and `citation`.
     - No source was cited abstract-only; all six were read in full (the T.81 PDF via pdftotext, the
       Statcounter figures via the CSV endpoint).
     - **Reusable technical findings, verified by computation — no sibling needs to redo these:**
       Statcounter India Aug 2026 mobile 360x800 = 18.44%, 393x873 = 8.43%; desktop 1920x1080 = 7.13%,
       1366x768 = 6.70%, 1536x864 = 6.15%. 360x800 CSS px at DPR 3 = a 1080x2400 panel. A 6.7-inch
       1080x2400 phone is 392.8 ppi and delivers 94.5 ppd at 35 cm — exactly the 94 ppd population mean
       the Nature Communications study measured. A 3840x2160 file cropped to fill 1080x2400 keeps 25.3%
       of its width and its surviving 972x2160 slice (2.10 MP) is 19% BELOW the 2.59 MP panel.
     - **Could NOT be verified and therefore NOT asserted:** the stored pixel dimensions of a WhatsApp or
       Instagram profile photo. The widely repeated "640x640" is documented by neither platform. The post
       states the mechanism (square crop, circular mask, small render) and works in ratios instead. Do
       not burn a slot re-searching this.
     - Blocked by the fetcher and therefore only characterised, never cited (competitors anyway):
       wallpaperaccess.com (403 Cloudflare), wallpaperflare.com and pixabay.com (JS challenges).
     - Deploy warning re-confirmed 2026-09-09 (fourth check): https://subhsandesh.in/happy-ganesh-chaturthi
       is STILL HTTP 404; /templates returns 200. Recorded as this post's single audit failure. -->

ganesh-chaturthi-drawing-for-school | pmc.ncbi.nlm.nih.gov | https://pmc.ncbi.nlm.nih.gov/articles/PMC10853520/
ganesh-chaturthi-drawing-for-school | ecrp.illinois.edu | https://ecrp.illinois.edu/v10n1/vlach.html
ganesh-chaturthi-drawing-for-school | files.eric.ed.gov | https://files.eric.ed.gov/fulltext/EJ833503.pdf
ganesh-chaturthi-drawing-for-school | cbseacademic.nic.in | https://cbseacademic.nic.in/web_material/Circulars/2020/33_Circular_2020.pdf
ganesh-chaturthi-drawing-for-school | drikpanchang.com | https://www.drikpanchang.com/festivals/ganesh-chaturthi/ganesh-chaturthi-date-time.html?geoname-id=1275339&year=2026  ([date/festival reference] — body link only; NO muhurat time is stated in the post, so it is NOT in sources/citation)

<!-- Post 9 (ganesh-chaturthi-drawing-for-school) notes:
     - Research field: art education — children's drawing development, observational vs formula
       drawing, festival art in Indian schools. No sibling is in this field.
     - Three of the four cited domains were previously UNTOUCHED across both batches and are each
       now at 1 of 3: ecrp.illinois.edu, files.eric.ed.gov, cbseacademic.nic.in.
       **pmc.ncbi.nlm.nih.gov is now at 2 of 3 IN THIS BATCH** (ganpati-wallpaper-hd-4k took the
       first slot with a different PMC article). One PMC slot left.
     - Deliberately NOT touched: dsal.uchicago.edu and aclanthology.org (both at cap), arxiv.org
       (its single remaining slot left free for a sibling), journals.plos.org (at cap), mdpi.com,
       ojs.aaai.org, archive.org, en.wikipedia.org.
     - ZERO Wikipedia body links. Wikipedia appears only as sameAs inside structuredData:
       Q929250 (Ganesh Chaturthi), Q1430886 (Child art), Q1579 (Ganesha), Q93184 (Drawing),
       Q3347350 (CBSE), Q2673557 (Modak) — all verified through the Wikipedia API on 2026-09-09.
       Note "Art education" REDIRECTS to "Visual arts education" (Q1757598); it was not used.
     - ZERO generic context statistics (no PIB / TRAI / Census / MEA). cbseacademic.nic.in is a
       curriculum requirement, not a statistic, so the one-per-post context allowance is unspent.
     - No source was cited abstract-only; all four were read in full (the CBSE PDF via pdftotext,
       the ERIC PDF via pdftotext).
     - **ncert.nic.in does not resolve from this network at all** (connect timeout on both
       /pdf/syllabus/Art_Educationfinal_syllabus.pdf and the site root), so the NCF-2005 Position
       Paper of the National Focus Group on Arts, Music, Dance and Theatre could not be read.
       cbseacademic.nic.in resolves normally. Worth retrying NCERT from another network.
     - Blocked by the fetcher and therefore NOT cited: mdpi.com/2227-7102/15/6/681 (Lowenfeld stage
       validity, 218 drawings, Madrid, 2025 — 403, the third sibling to hit MDPI's 403) and
       journals.sagepub.com (Wammes/Meade/Fernandes 2016 on the drawing effect — 403).
       Do not burn a slot re-searching either.
     - **Finding worth reusing:** CBSE Circular Acad-33/2020 (14 May 2020) clause 4.7 requires
       art-integrated projects to use "readily available local resources without any financial
       burden on parents or guardians" — a clean, citable anchor for any post that recommends
       low-cost craft to Indian parents.
     - Deploy warning re-confirmed 2026-09-09 (fifth check): https://subhsandesh.in/happy-ganesh-chaturthi
       is STILL HTTP 404; /templates returns 200. Recorded as an audit failure in this post's JSON too. -->

ganesh-chaturthi-captions-for-instagram | frontiersin.org | https://www.frontiersin.org/articles/10.3389/fcomm.2026.1799090/full
ganesh-chaturthi-captions-for-instagram | doi.org (elsevier / IJIM Data Insights) | https://doi.org/10.1016/j.jjimei.2022.100067
ganesh-chaturthi-captions-for-instagram | cyberpsychology.eu | https://cyberpsychology.eu/article/view/4276
ganesh-chaturthi-captions-for-instagram | web.archive.org (archive.org) | https://web.archive.org/web/20211025222301/https://developers.facebook.com/docs/instagram-api/reference/ig-user/media
ganesh-chaturthi-captions-for-instagram | drikpanchang.com | https://www.drikpanchang.com/festivals/ganesh-chaturthi/ganesh-chaturthi-date-time.html?geoname-id=1259229&year=2026  ([date/festival reference] — the Pune Madhyahna muhurat IS stated in the body, so it is in sources/citation)

<!-- Post 13 (captions-for-instagram) notes:
     - **archive.org is now AT the 3-post cap for this batch.** It took the last slot flagged above,
       spent on Meta's own Instagram Graph API publishing reference (capture of 25 Oct 2021), which
       states verbatim "Maximum 2200 characters, 30 hashtags, and 20 @ tags". This is the only
       readable primary source for the caption ceilings: every live developers.facebook.com and
       help.instagram.com path returns HTTP 400 to a non-browser client, and the 2025 rewrite of
       the content-publishing doc no longer carries the numbers.
     - frontiersin.org, cyberpsychology.eu and doi.org->elsevier were previously UNTOUCHED in batch 2
       and are each now at 1 of 3. Nothing here reduces a sibling's remaining budget.
     - Deliberately NOT used, to leave the slots for siblings: arxiv.org (last slot),
       pmc.ncbi.nlm.nih.gov (last slot), mdpi.com (last slot), ojs.aaai.org (last slot),
       en.wikipedia.org, journals.plos.org, aclanthology.org, dsal.uchicago.edu.
     - ZERO Wikipedia body links. Wikipedia appears only as sameAs inside structuredData:
       Q929250, Q209330, Q278485, Q106678883, Q380, Q2673557, Q1538 — all verified through the
       Wikipedia API in one call.
     - ZERO generic context statistics (no PIB / TRAI / Census / MEA).
     - Drik Panchang geoname-id=1259229 (PUNE) is new to both batches. The batch so far uses
       1261481, 1264527, 1269843, 1273294, 1275339, 1277333, 1279233.
     - **Verified platform facts any sibling may reuse without re-fetching:** an Instagram caption
       is capped at 2,200 characters, 30 hashtags and 20 @-tags (Meta, archived API reference).
       Meta does NOT document the ~125-character feed truncation point anywhere — that number is
       vendor convention and must be labelled as such. The "use 3-5 hashtags" figure is Instagram's
       own creator-account advice, not research.
     - Read abstract-only and recorded in the research brief and the sources array: the IJIMDI
       article (doi 10.1016/j.jjimei.2022.100067). It is gold OA under CC BY, but sciencedirect.com
       returns HTTP 403 to the fetcher even for OA articles, the Figshare mirror only links back to
       ResearchGate, and Unpaywall lists no third location. Every figure used is in the abstract.
     - Blocked by the fetcher and therefore NOT cited — do not burn a slot re-searching these:
       journals.sagepub.com (Cloudflare 403 on all of Litt & Hargittai 2016 "The Imagined Audience
       on Social Network Sites", "Who's Viewing My Post?" doi 10.1177/20563051231224271,
       "Influential post identification on Instagram through caption and hashtag analysis"
       doi 10.1177/0020294019877489, and Waterloo et al. 2018 — all four were good fits);
       mdpi.com (403 on both the article page and /pdf); www.sciencedirect.com (403 even for gold
       OA); uclpress.co.uk (403) and discovery.ucl.ac.uk (404), which cost Venkatraman's
       *Social Media in South India* — the best Indian-practice source available and fully open at
       the publisher; academica-e.unavarra.es (502); jsr.org (523); intangiblecapital.org (its
       "PDF" link serves XML).
     - Recorded as an audit failure: the comparison table's first-party numbers sit in one ROW, not
       a column, because SubhSandesh has no Instagram-side data for the other three formats.
     - Deploy warning re-confirmed 2026-09-09 (fifth check in this batch):
       https://subhsandesh.in/happy-ganesh-chaturthi is STILL HTTP 404; /templates is 200. -->
