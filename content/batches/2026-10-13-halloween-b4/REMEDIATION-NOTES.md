# Phase 8 — remediation policy (BINDING for every remediator) and cross-post notes

## Policy
1. **No WebSearch, no browser.** New sources ARE allowed via `findpapers.mjs` (Crossref + Europe PMC) and `ctx_fetch_and_index`; fetch and verify every one. Papers are capped per batch by PMC id / DOI (capcheck). Sourcing failures you cannot close stay in `failed` with a precise blocker and re-check trigger.
2. **Remove every sibling `/blog/<slug>` link from the body.** Batch policy changed mid-run: body internal links must be TEMPLATE_LINKS URLs only (2–4). Name the sibling topic in prose if the sentence needs it.
3. **Paragraph rule:** prose paragraphs must be 2–3 sentences. Copyable wish/caption/quote lines belong in a bulleted list or a blockquote list, not as one-line prose paragraphs. Merge or split prose paragraphs to fit. Read how `scripts/verify-batch.mjs` and publish-checklist.md define it before deciding.
4. Body stays 1,500–1,800 words (plain whitespace split, FAQs excluded). Fixes usually cost words; cut padding to stay under 1,800.
5. Do not change the slug, category, the /dandiya-partner link, or `factsUsed` strings (byte-verbatim).
6. After editing, re-run the WHOLE publish checklist, `node scripts/verify-batch.mjs content/batches/2026-10-13-halloween-b4` and `node content/batches/2026-10-13-halloween-b4/capcheck.mjs`, then rewrite `honestAssessment`. passed ∩ failed = ∅; |passed|+|failed| = checklist length; item strings verbatim.
8. **Scratch files MUST be named `<your-slug>-<purpose>.*`** (e.g. `navratri-status-in-hindi-body.md`). Never write a generic `body.md`/`draft.md`: the scratchpad is shared and another agent's body has already landed in a sibling's file once. Before writing your JSON, confirm the body's H1 matches your slug's keyword.
7. Edit only your own blog JSON (and its research brief if needed).

## Cross-post notes
- b4 boo-basket posts (boyfriend, girlfriend, best friend, wife, kids) written in parallel — run an item-overlap check across them before commit.
- halloween-pickup-lines-tagalog: native Tagalog speaker should review lines and stress hints before publishing.
- witch-pickup-lines links Miller 2022 via doi.org — relink to mdpi.com publisher URL in remediation. **Done 2026-10-13: 4 occurrences relinked to https://www.mdpi.com/2077-1444/13/2/118 (Crossref primary URL).**

- **halloween-pickup-lines-tagalog — verify 2 Nov 2027 status.** The post says Mon 1 + Tue 2 Nov 2027 are special non-working days under Proclamation 1427. The around-the-world writer found that Lawphil's table for 1427 lists 2 Nov 2027 as "Special (Working)" while its preamble calls it non-working. Orchestrator to check against officialgazette.gov.ph before commit, and align both posts.
  - **Resolved by orchestrator, 2026-10-13:** Lawphil's Proc. 1427 text was fetched. Its list block "C. Special (Working) Day" contains EDSA *and* Chinese New Year, Black Saturday, All Souls' 2 Nov and Christmas Eve. The preamble declares all of those except EDSA special (non-working), so the list is missing a heading for "additional special (non-working) days" and is a transcription error. Black Saturday is never a working day. The Official Gazette returns 403, and we did not work around it. Both posts are consistent with the preamble, so no change is needed. Re-check the Gazette before October 2027.

- **Saki clash (teachers vs sleepover) — fixed 2026-10-13 by orchestrator:** halloween-ideas-for-teachers #9, the subject table and the read-aloud FAQ now use Poe's "The Cask of Amontillado" (1846; inference prompt: why Montresor tells it now). It is unused in b1–b4. The sleepover post keeps "The Open Window".
