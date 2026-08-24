# ANTIGRAVITY HANDOFF — HP1 B07 v1.0

## Goal
Implement B07 HUD with K13 and runtime state/data flow. Keep B01–B06 statuses unchanged.

## Branch
Use `b07` from latest branch carrying Review Studio + B01–B06 canonical packages. Record base SHA. No merge/LOCKED.

## Canonical sync
Copy package unchanged first. Suggested commit:
`feat(b07): add ChatGPT canonical HUD and runtime UI plans`

## UI assets
Package contains 4 program-authored PNGs. Import them in Godot 4.7.1, record checksums, and keep them visual-only. No external font files.

## Project
Follow PROJECT_SPEC_B07.
Project Basic:
- CrystalLabel runtime update
- CheckpointLabel runtime state update
- B05/B06 continuity
- no B08 UI

Starter:
- Gap A hard-coded crystal HUD
- Gap B checkpoint state not forwarded to HUD

## Review Studio
Expected:
- B07 auto-discovery
- 19 test entries
- 21 media items
- result/media isolation B01–B07
- RAW no-overwrite

## Return
```text
LOCAL_TEST_REPORT_B07
BRANCH:
BASE_SHA:
COMMIT_CANONICAL_SYNC:
COMMIT_UI_ASSET_INGEST:
COMMIT_IMPLEMENTATION:
REVIEW_STUDIO_DISCOVERY:
B01_TO_B06_STATUS_UNCHANGED:
GODOT_VERSION:
UI_ASSET_IMPORT:
UI_ASSET_SHA256:
PROJECT_BASIC:
STARTER_CRYSTAL_GAP:
STARTER_CHECKPOINT_GAP:
E2E_CRYSTAL_FIX:
E2E_CHECKPOINT_FIX:
SAVE_REOPEN:
HUD_READABILITY_LOCAL:
ERRORS:
WARNINGS:
TESTS_EXECUTED:
TESTS_NOT_EXECUTED:
OPEN_FINDINGS:
NEXT_OWNER: CHATGPT
```
