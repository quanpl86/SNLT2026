# ANTIGRAVITY HANDOFF — HP1 B06 v1.0

## Goal
Implement B06 hazard/checkpoint/respawn with K12 + K29 while keeping B01–B05 status unchanged.

## Branch
Use `b06` from latest branch containing Review Studio + canonical B01–B05 packages. Record base SHA. No merge/LOCKED.

## Canonical sync
Copy this package unchanged first. Suggested commit:
`feat(b06): add ChatGPT canonical hazard checkpoint and state plans`

## Assets
Package contains real program-authored GLBs:
- `B06_HAZARD_SPIKES_PROGRAM.glb`
- `B06_CHECKPOINT_BEACON_PROGRAM.glb`

Import/test in Godot 4.7.1, record SHA-256, visual-child only.

## Implementation
Follow PROJECT_SPEC_B06. Critical:
- Project Basic uses one canonical respawn_position and correct Player reference.
- Student Starter has two isolated test zones:
  1. StateHazard → state-variable mismatch.
  2. ReferenceHazard → camera reference bug.
- Make sure Task B does not prevent Task A from being tested first.
- No B07 UI.

## Review Studio
B06 auto-discovery:
- 19 test entries;
- 21 media items;
- no result/media contamination with B01–B05;
- RAW no-overwrite.

## Local report
```text
LOCAL_TEST_REPORT_B06
BRANCH:
BASE_SHA:
COMMIT_CANONICAL_SYNC:
COMMIT_ASSET_INGEST:
COMMIT_IMPLEMENTATION:
REVIEW_STUDIO_DISCOVERY:
B01_B02_B03_B04_B05_STATUS_UNCHANGED:
GODOT_VERSION:
HAZARD_GLB_IMPORT:
CHECKPOINT_GLB_IMPORT:
ASSET_SHA256:
PROJECT_BASIC:
STARTER_STATE_BUG:
STARTER_REFERENCE_BUG:
E2E_STATE_FIX:
E2E_REFERENCE_FIX:
SAVE_REOPEN:
ERRORS:
WARNINGS:
TESTS_EXECUTED:
TESTS_NOT_EXECUTED:
SOURCE_LICENSE:
OPEN_FINDINGS:
NEXT_OWNER: CHATGPT
```
