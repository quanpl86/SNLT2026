# ANTIGRAVITY HANDOFF — HP1 B09 v1.0

## Goal
Implement the B09 Beta checkpoint with no new core knowledge, one deliberate integration blocker, evidence-based bug fix, and formal TG-WEB-SMOKE.

Keep B01–B08 statuses unchanged.

## Branch
Use `b09` from latest branch carrying Review Studio + canonical B01–B08 packages. Record base SHA. No merge/LOCKED.

## Canonical sync
Copy this package unchanged first.
Suggested commit:
`feat(b09): add ChatGPT canonical beta checkpoint and web-smoke plans`

## Base project
Canonical = latest integrated B08 Project Basic/candidate.
Classroom = each learner's own B08 working project.

Do not replace a learner's B05 asset with fallback in a real classroom project.

## Starter deliberate defect
Move only `BetaCrystal05` to an unreachable location.
Do NOT:
- change target_count;
- break collectible signal;
- break goal condition;
- add double jump;
- add a second hidden blocker.

## Asset policy
No new assets. Reuse B04–B08 approved assets.
Check `ASSET_REUSE_MANIFEST.json`.

## Native
Run BT-01→BT-06 on Master.
Confirm Starter baseline 4/5 blocker.
E2E: defect record → Position fix → retest → full regression.

## TG-WEB-SMOKE
This is the formal B09 gate:
- Compatibility;
- export;
- HTTP serve;
- actual browser;
- TG-01→TG-06;
- record findings.

Do not infer TG-WEB-SMOKE from B08 evidence or build files alone.

## Review Studio
Expected:
- B09 auto-discovery
- 19 test entries
- 24 media items
- B01–B09 isolation
- RAW no-overwrite

## Return
```text
LOCAL_TEST_REPORT_B09
BRANCH:
BASE_SHA:
COMMIT_CANONICAL_SYNC:
COMMIT_IMPLEMENTATION:
REVIEW_STUDIO_DISCOVERY:
B01_TO_B08_STATUS_UNCHANGED:
GODOT_VERSION:
ASSET_REUSE_AUDIT:
PROJECT_BASIC_BT01_BT06:
STARTER_4_OF_5_BLOCKER:
E2E_DEFECT_RECORD:
E2E_CRYSTAL05_FIX:
E2E_NATIVE_REGRESSION:
WEB_EXPORT:
HTTP_SERVE_METHOD:
BROWSER_TARGET:
TG_WEB_SMOKE_TG01_TG06:
TG_WEB_SMOKE_RESULT:
SAVE_REOPEN:
ERRORS:
WARNINGS:
TESTS_EXECUTED:
TESTS_NOT_EXECUTED:
OPEN_FINDINGS:
NEXT_OWNER: CHATGPT
```
