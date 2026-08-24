# ANTIGRAVITY HANDOFF — HP1 B04 v1.0

## Mục tiêu
Triển khai B04 checkpoint và **visual refresh pre-integrated**, không mở kiến thức mới. Không đổi status B01–B03 như side effect.

## Branch
Tạo/use `b04` từ latest branch chứa Review Studio + canonical B01–B03 packages. Ghi base SHA; chưa merge main/LOCKED.

## Canonical sync
Copy nguyên văn package B04 trước, commit riêng `feat(b04): add ChatGPT canonical checkpoint and asset plans`.

## Asset retrieval bắt buộc
Nguồn: `KenneyNL/Starter-Kit-3D-Platformer` commit `3fa8a04b1c01ab23db43123d4ce814a34c3fc7f0`.
Download/freeze đúng:
- `models/character.glb`
- `models/brick.glb`

Không lấy code/double jump/collectible logic. Tính SHA-256 và hoàn tất `SOURCE_MANIFEST_B04.json`.

## Visual integration
Theo `ASSET_REFRESH_SPEC_B04.md`: visual child only, physics root/collider giữ nguyên. Starter và Master cùng visual.

## Controlled bugs Starter
- move_right thiếu D.
- ChallengePlatform03 CollisionShape3D Disabled=true.
Không thêm bug khác.

## Review Studio
B04 auto-discovery; 19 test entries; 22 media items. Fix framework multi-lesson/isolation/no-overwrite trước real evidence nếu chưa fix ở B03.

## Local test report
Trả về:
```text
LOCAL_TEST_REPORT_B04
BRANCH:
BASE_SHA:
COMMIT_CANONICAL_SYNC:
COMMIT_ASSET_INGEST:
COMMIT_IMPLEMENTATION:
REVIEW_STUDIO_DISCOVERY:
B01_B02_B03_STATUS_UNCHANGED:
ASSET_SOURCE_SHA:
ASSET_LOCAL_SHA256:
ASSET_LICENSE_AUDIT:
PROJECT_BASIC:
STUDENT_STARTER:
E2E_WORKING_COPY:
GODOT_4_7_1_IMPORT:
ERRORS:
WARNINGS:
TESTS_EXECUTED:
TESTS_NOT_EXECUTED:
OPEN_FINDINGS:
NEXT_OWNER: CHATGPT
```
