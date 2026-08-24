# B03 SYNC INSTRUCTIONS

## A. Create/switch branch
Use `b03`.
Prefer base = latest `b02` if b02 contains Review Studio + canonical prior lesson packages. Otherwise use latest branch that does.

## B. Copy package paths into repo root
Do not rename:
- `00_REVIEW_STUDIO/review_data/HP1/B03/`
- `SNLT2026-HP01-B03/00_SPEC/`
- `00_COORDINATION/LESSON_CONTEXT/B03_CONTEXT.md`
- `00_COORDINATION/B03_PREPARATION_EXCEPTION.md`

## C. Commit canonical data separately
Suggested:
`feat(b03): add ChatGPT canonical project, test and media plans`

## D. Run Review Studio discovery smoke
Expected:
- HP1 contains B03.
- B03 title correct.
- Test count 19.
- Media count 20.
- Schema valid.
- No B01/B02 plan/result contamination.

## E. Fix multi-lesson framework findings before real evidence
See `REVIEW_STUDIO_MULTI_LESSON_FINDINGS.md`.

## F. Implement and local-test
Follow `ANTIGRAVITY_HANDOFF_B03.md` and `ACCEPTANCE_TESTS_B03.md`.

Keep ChatGPT canonical spec commits separate from implementation commits when practical.
