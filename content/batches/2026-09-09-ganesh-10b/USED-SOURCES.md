# Sources used in batch 2

`<slug> | <domain> | <url>`. URL cap 2 posts, domain cap 3.
ALSO check PRIOR-BATCH-SOURCES.md — batch 1 already spent 47 URLs across 25 domains,
and en.wikipedia.org is at its cap there. Do not re-cite any of them.


## ⚠ LIVE CAP STATUS (updated as posts land)

- `arxiv.org` — **AT the 3-post cap across both batches.** Do not add an arXiv source.
- `en.wikipedia.org` — AT cap in batch 1. No Wikipedia body link (a `sameAs` in
  structuredData is fine and does not count).
- `journals.plos.org` — **AT cap, no slots left.**
- `ojs.aaai.org` — 2 of 3 used, one slot left.
- `archive.org` — one slot left.
- `drikpanchang.com` — exempt, but you MUST mark that source entry's `stat` with
  the literal text `[date/festival reference]` or the verifier counts it.

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
