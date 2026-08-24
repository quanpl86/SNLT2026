# ANTIGRAVITY HANDOFF — HP1 B02 v1.0

## Mục tiêu của lượt này

Triển khai **B02 — Điều khiển nhà thám hiểm** đầy đủ theo gói ChatGPT canonical, đồng thời kiểm thử luồng hệ thống:
`ChatGPT schema/spec → GitHub b02 → Antigravity pull/implement → Review Studio refresh → B02 xuất hiện → local test report → ChatGPT review`.

**B01 giữ nguyên trạng thái hiện tại. Không đổi `CURRENT_STATE.md` của B01 sang LOCKED/DONE. Không merge B02 vào main.**

## Ngoại lệ flow-test được Human chỉ định

B02 được mở song song chỉ để kiểm thử pipeline thực. Tạo branch `b02` từ HEAD hiện tại của `b01` để kế thừa Review Studio. Sau khi B01 khóa và merge main, branch B02 phải đồng bộ commit B01 cuối trước khi B02 có thể đi tới release/lock.

## Việc 1 — Sync nguyên văn gói ChatGPT lên GitHub

Do GitHub integration của ChatGPT trả `403 Resource not accessible by integration`, Antigravity là transport-only cho phần này:
1. `git fetch origin`
2. từ `b01` HEAD hiện tại tạo/chuyển sang `b02` nếu chưa có;
3. copy **nguyên văn** các file trong gói này vào repo;
4. không tự sửa JSON/CONTROL/PROJECT_SPEC trừ khi phát hiện schema không chạy; nếu cần sửa phải ghi finding;
5. commit/push riêng phần canonical:
   `feat(b02): add ChatGPT canonical lesson, test and media plans`
6. báo commit SHA.

Các file Review Studio bắt buộc:
- `00_REVIEW_STUDIO/review_data/HP1/B02/LESSON_MANIFEST.json`
- `00_REVIEW_STUDIO/review_data/HP1/B02/TEST_PLAN.json`
- `00_REVIEW_STUDIO/review_data/HP1/B02/MEDIA_PLAN.json`

## Việc 2 — Smoke test auto-discovery trước khi code B02

Chạy Review Studio từ branch `b02`, bấm **LÀM MỚI DỮ LIỆU** và xác nhận:
- HP1 có B01 và B02.
- B01 vẫn hiện đúng title/trạng thái dữ liệu hiện tại.
- B02 hiện title `Điều khiển nhà thám hiểm`.
- B02 load đủ Manifest/Test Plan/Media Plan.
- Số test B02 = **19** gồm HDC-00 + 18 test target.
- Số media RAW planned = **20**.
- Chuyển B01 ↔ B02 không trộn test/media/results.

Nếu không đúng: dừng implementation, ghi `REVIEW_STUDIO_B02_DISCOVERY_FAIL`.

### Finding kỹ thuật cần kiểm ngay

`00_REVIEW_STUDIO/server.js` hiện tạo đường dẫn result/upload bằng:
`SNLT2026-${hp}-${lesson}`.
Với `hp=HP1`, đường dẫn sẽ là `SNLT2026-HP1-B02`, trong khi chuẩn repo là `SNLT2026-HP01-B02`.

Antigravity phải smoke-test upload/result path. Nếu bug tái hiện:
- sửa Review Studio bằng normalization rõ ràng `HP1 -> HP01` cho filesystem folder;
- không thay `hp` canonical trong JSON;
- regression B01 + B02;
- commit fix riêng;
- báo ChatGPT.

## Việc 3 — Triển khai project B02

Tuân thủ `PROJECT_SPEC_B02.md`. Yêu cầu chính:
- Godot 4.7.1 stable / Compatibility / English UI.
- Derive từ B01 candidate nhưng ghi dependency.
- Project Basic: `speed=6.0`; full W/A/S/D.
- Student Starter: `speed=4.0`; `move_right` tồn tại nhưng thiếu event D.
- Giữ CharacterBody3D/Vector3/gravity/jump/collision/camera/fall-reset ở Ownership C.
- Refactor movement core chỉ đủ để lấy speed qua `get_move_speed()`.
- Không mở K06/K07/K08.
- Không Blockbench.
- Không dùng Kenney code/asset trực tiếp nếu không cần; nếu dùng, audit và ghi MIT/CC0 exact file.
- Tạo đầy đủ docs, evidence template, QA folders, Human Test workspace.

## Việc 4 — Local test thực tế

Thực hiện toàn bộ Gate A/B trong `ACCEPTANCE_TESTS_B02.md`.
Bắt buộc thử:
- Project Basic.
- Student Starter.
- E2E working copy.
- save/reopen.
- Review Studio B02 auto-discovery.
- upload/result path isolation B01 vs B02.

## Việc 5 — Handoff lại ChatGPT

Gửi báo cáo theo format:

```text
LOCAL_TEST_REPORT_B02
BRANCH:
COMMIT_CANONICAL_SYNC:
COMMIT_IMPLEMENTATION:
REVIEW_STUDIO_DISCOVERY: PASS/FAIL
B01_UNCHANGED: YES/NO
PROJECT_BASIC:
STUDENT_STARTER:
E2E_WORKING_COPY:
GODOT_VERSION:
RENDERER:
ERRORS:
WARNINGS:
TESTS_EXECUTED:
TESTS_NOT_EXECUTED:
REVIEW_STUDIO_PATH_TEST:
FILES_CHANGED:
SOURCE/LICENSE:
OPEN_FINDINGS:
NEXT_OWNER: CHATGPT
REQUESTED_ACTION: Review local implementation + issue/confirm Human Double Check B02
```

Không gắn `HUMAN_PASS`, `LOCKED`, `Runtime PASS` thay cho Human.
