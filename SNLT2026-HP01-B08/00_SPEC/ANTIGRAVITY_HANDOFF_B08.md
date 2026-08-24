# ANTIGRAVITY HANDOFF — HP1 B08 v1.0

## Goal
Implement B08 complete loop + first real Web export. Keep B01–B07 statuses unchanged.

## Branch
Use `b08` from latest branch carrying Review Studio + canonical B01–B07 packages. Record base SHA. No merge/LOCKED.

## Canonical sync
Copy package unchanged first. Suggested commit:
`feat(b08): add ChatGPT canonical win restart and first web export plans`

## Program assets
Import/test:
- goal portal GLB
- 4 UI PNGs
Record SHA-256. Visual only; no new asset-learning task.

## Native implementation
Project Basic:
- valid win condition: goal + enough crystals
- result overlay
- clean restart
- B07 HUD continuity

Starter:
- early-win gap
- dirty-restart gap
- no Web export preset

## Web
Use GD-023/GD-024 constraints and `WEB_EXPORT_PRESET_SPEC.json`.
Critical:
- Compatibility
- export templates
- build/web/index.html
- serve via HTTP
- actual browser core-loop test

Do not claim `TG-WEB-SMOKE PASS`; formal gate is B09.
Do not claim Web PASS based only on generated build files.

## Review Studio
Expected:
- B08 auto-discovery
- 19 test entries
- 24 media items
- B01–B08 result/media isolation
- RAW no-overwrite

## Return
```text
LOCAL_TEST_REPORT_B08
BRANCH:
BASE_SHA:
COMMIT_CANONICAL_SYNC:
COMMIT_ASSET_INGEST:
COMMIT_IMPLEMENTATION:
REVIEW_STUDIO_DISCOVERY:
B01_TO_B07_STATUS_UNCHANGED:
GODOT_VERSION:
EXPORT_TEMPLATES:
GOAL_GLB_IMPORT:
UI_ASSET_IMPORT:
ASSET_SHA256:
PROJECT_BASIC_NATIVE:
STARTER_EARLY_WIN:
STARTER_DIRTY_RESTART:
E2E_WIN_FIX:
E2E_RESTART_FIX:
WEB_PRESET:
WEB_EXPORT_RESULT:
WEB_BUILD_PATH:
HTTP_SERVE_METHOD:
BROWSER_TARGET:
WEB_BROWSER_CORE_LOOP:
WEB_ERRORS:
NATIVE_ERRORS:
WARNINGS:
TESTS_EXECUTED:
TESTS_NOT_EXECUTED:
OPEN_FINDINGS:
NEXT_OWNER: CHATGPT
```
