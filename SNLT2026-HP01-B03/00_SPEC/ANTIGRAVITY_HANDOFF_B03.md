# ANTIGRAVITY HANDOFF — HP1 B03 v1.0

## Mục tiêu lượt này

Chuẩn bị và triển khai project **B03 — Nhảy qua thử thách** theo canonical package, trong chiến lược Human yêu cầu:
**chuẩn bị toàn bộ dự án/lesson schema cho Antigravity trước, rồi mới đi vào triển khai chi tiết từng bài.**

B01/B02 không được tự đổi trạng thái vì B03 được tạo.

## 1. Branch / dependency

Ưu tiên:
- nếu `b02` đã tồn tại và chứa Review Studio + canonical B02: tạo `b03` từ latest `b02`;
- nếu chưa, tạo từ latest branch chứa Review Studio và toàn bộ canonical package trước đó.

Ghi base SHA.

B03 lúc này là preparation branch, không merge main và không mark LOCKED.

## 2. Sync canonical package nguyên văn

Copy nguyên văn:
- `00_REVIEW_STUDIO/review_data/HP1/B03/*`
- `SNLT2026-HP01-B03/00_SPEC/*`
- `00_COORDINATION/LESSON_CONTEXT/B03_CONTEXT.md`
- `00_COORDINATION/B03_PREPARATION_EXCEPTION.md`
- `B03_SYNC_INSTRUCTIONS.md`

Commit riêng:
`feat(b03): add ChatGPT canonical project, test and media plans`

Nếu cần đổi canonical JSON vì schema engine không đọc được: ghi finding trước, không tự sửa construct sư phạm.

## 3. Fix framework trước khi dùng multi-lesson

Đọc `REVIEW_STUDIO_MULTI_LESSON_FINDINGS.md`.

Kiểm tra trên code mới nhất:
- HP1 vs HP01 real filesystem.
- smoke results per lesson.
- smoke media per lesson.
- backend RAW no-overwrite.

Nếu tái hiện:
- sửa Review Studio ở commit riêng;
- regression B01/B02/B03;
- báo exact diff và test.

## 4. Discovery smoke B03

Sau canonical sync, chưa cần project implementation:
- start Review Studio;
- refresh;
- B03 phải tự xuất hiện;
- title = `Nhảy qua thử thách`;
- 19 test entries;
- 20 media items;
- switch B01/B02/B03 không trộn plan/result.

Nếu fail: dừng project code và báo `REVIEW_STUDIO_B03_DISCOVERY_FAIL`.

## 5. Implement B03

Theo `PROJECT_SPEC_B03.md`.

Bắt buộc:
- Project Basic full Vector3 movement + CharacterBody3D physics + single jump with floor condition.
- Student Starter: movement-z gap + missing floor check.
- course ≥5 challenge platforms, không cần double jump.
- docs/evidence/QA/Human Test workspace.
- Godot 4.7.1 stable + Compatibility + English UI.
- không Blockbench.

## 6. Nguồn

Canonical tech:
PJT-004, PJT-003, PJT-010, GD-004, GD-007, GD-008.

Có thể dùng Godot Demo Projects / official Asset Library / Kenney assets làm discovery khi cần, nhưng:
- không thay canonical Resource Catalog mapping;
- freeze version phù hợp;
- audit code + asset license riêng;
- LICENSE_UNKNOWN = BLOCKED.
Blockbench Gallery không cần cho B03.

## 7. Local test

Thực hiện Gate A/B/C trong `ACCEPTANCE_TESTS_B03.md`.

Không suy ra Human PASS.

## 8. Handoff về ChatGPT

```text
LOCAL_TEST_REPORT_B03
BRANCH:
BASE_SHA:
COMMIT_CANONICAL_SYNC:
COMMIT_REVIEW_STUDIO_FIXES:
COMMIT_IMPLEMENTATION:
REVIEW_STUDIO_DISCOVERY:
REVIEW_STUDIO_ISOLATION:
B01_STATUS_UNCHANGED:
B02_STATUS_UNCHANGED:
PROJECT_BASIC:
STUDENT_STARTER:
E2E_WORKING_COPY:
GODOT_VERSION:
RENDERER:
ERRORS:
WARNINGS:
TESTS_EXECUTED:
TESTS_NOT_EXECUTED:
COURSE_FEASIBILITY_LOCAL:
FILES_CHANGED:
SOURCE_LICENSE:
OPEN_FINDINGS:
NEXT_OWNER: CHATGPT
REQUESTED_ACTION: Review B03 implementation and issue/confirm Human Double Check
```
