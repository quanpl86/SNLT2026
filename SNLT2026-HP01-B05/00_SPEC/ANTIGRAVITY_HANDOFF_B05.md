# ANTIGRAVITY HANDOFF — HP1 B05 v1.0

## Goal
Prepare/implement B05 fully, including the first real Blockbench→GLB→Godot student pipeline. Do not change B01–B04 status as a side effect.

## Branch
Use `b05`, based on latest branch that contains Review Studio + canonical prior packages. Record base SHA; do not merge/lock yet.

## Sync
Copy canonical package unchanged first. Commit:
`feat(b05): add ChatGPT canonical collectible and Blockbench asset package`

## Critical asset validation
The package now contains actual `.bbmodel` and `.glb` files. Their statuses are intentionally conservative:
- `.bbmodel`: `BLOCKBENCH_OPEN/EXPORT_PENDING`
- program GLB: generated preview/placeholder, Godot 4.7.1 import pending

You MUST:
1. open blank/reference `.bbmodel` in Blockbench;
2. report Blockbench version;
3. export reference to `B05_COLLECTIBLE_REFERENCE_VALIDATED.glb`;
4. import validated GLB into Godot 4.7.1;
5. use validated GLB in Project Basic;
6. use program placeholder GLB in Student Starter;
7. record SHA-256.

If `.bbmodel` cannot open, file a finding and recreate an equivalent Generic Model from `BLOCKBENCH_TEMPLATE_PLAN.json`; do not alter learning requirements.

## Collectible implementation
Follow `PROJECT_SPEC_B05.md`. Starter must have one deliberate signal gap only: `body_entered` not connected. Do not introduce B6+ features.

## External sources
PJT-004 frozen commit `3fa8a04b1c01ab23db43123d4ce814a34c3fc7f0` can be inspected. `models/block-coin.glb` is optional reference/fallback only after checksum/license record. Do not ingest Blockbench Gallery assets without per-model license audit.

## Review Studio
B05 must auto-discover with 19 test entries and 23 media items. Multi-lesson result/media isolation and RAW no-overwrite must already be fixed/regressed before real Human evidence.

## Return
```text
LOCAL_TEST_REPORT_B05
BRANCH:
BASE_SHA:
COMMIT_CANONICAL_SYNC:
COMMIT_ASSET_VALIDATION:
COMMIT_IMPLEMENTATION:
REVIEW_STUDIO_DISCOVERY:
B01_B02_B03_B04_STATUS_UNCHANGED:
GODOT_VERSION:
BLOCKBENCH_VERSION:
BBMODEL_BLANK_OPEN:
BBMODEL_REFERENCE_OPEN:
REFERENCE_GLB_EXPORT:
REFERENCE_GLB_GODOT_IMPORT:
PROGRAM_PLACEHOLDER_GODOT_IMPORT:
PROJECT_BASIC:
STUDENT_STARTER:
E2E_WORKING_COPY:
ASSET_SHA256:
SOURCE_LICENSE:
ERRORS:
WARNINGS:
TESTS_EXECUTED:
TESTS_NOT_EXECUTED:
OPEN_FINDINGS:
NEXT_OWNER: CHATGPT
```
