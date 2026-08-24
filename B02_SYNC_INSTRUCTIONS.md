# B02 SYNC / REVIEW STUDIO FLOW TEST — OPERATIONAL

## A. Branch
Use branch `b02`. Because Review Studio currently exists on `b01` and B01 is still Human Test, create `b02` from the latest remote `b01` HEAD. Record the base SHA.

## B. Copy canonical package
Copy the package paths into repo root without renaming:
- `00_REVIEW_STUDIO/review_data/HP1/B02/*`
- `SNLT2026-HP01-B02/00_SPEC/*`
- `00_COORDINATION/LESSON_CONTEXT/B02_CONTEXT.md`
- `00_COORDINATION/B02_FLOW_TEST_EXCEPTION.md`

Do not overwrite B01 files.

## C. Commit 1 — Canonical data
Suggested:
`feat(b02): add ChatGPT canonical lesson, test and media plans`

Push `origin b02`.

## D. Review Studio discovery smoke
From branch `b02`:
1. Start Review Studio.
2. Refresh data.
3. Confirm B01 + B02 both listed.
4. Select B02 and confirm title/product/targets.
5. Confirm 19 tests and 20 planned media items.
6. Switch to B01 and back to B02.
7. Test a smoke result/upload only in smoke mode; verify no real B01 result is changed.
8. Report exact path used by upload/result API.

Do not run real Human B02 tests yet.

## E. Implementation
Follow `ANTIGRAVITY_HANDOFF_B02.md`.

## F. Commit 2+
Keep implementation commits separate from ChatGPT canonical data whenever practical so review can distinguish curriculum spec from implementation.
