# MANIFEST — SNLT2026-HP01-B01

STATUS: READY_FOR_IMPLEMENTATION
VERSION: v1.0
LESSON: B01
LESSON_NAME: Khám phá trò chơi 3D
INPUT_OWNER: ChatGPT — HP1 Content/Project Specification Agent
TARGET_ENGINE: Godot 4.6
TARGET_RENDERER: Compatibility
LANGUAGE: GDScript
WEB_FIRST: true
BLENDER: prohibited
BLOCKBENCH_IN_THIS_LESSON: not_required

## Đầu ra bắt buộc
1. `SNLT2026-HP01-B01-PROJECT_BASIC/` — dự án hoàn chỉnh chuẩn cho giáo viên.
2. `SNLT2026-HP01-B01-STUDENT_STARTER/` — dự án base cho học sinh, dẫn xuất từ PROJECT_BASIC.
3. `01_DOCS/HUONG_DAN_TUONG_TAC_SAN_PHAM.md`.
4. `01_DOCS/HUONG_DAN_CAU_HINH_TRIEN_KHAI_DU_AN.md`.
5. `01_DOCS/HUONG_DAN_THUC_HIEN_SAN_PHAM_STEP_BY_STEP.md`.
6. `01_DOCS/NGUON_VA_GIAY_PHEP.md`.
7. Báo cáo trong `02_QA/` theo quy tắc workspace.

## Input có thẩm quyền
- `CONTROL_RECORD.md`
- `PRODUCT_SPEC.md`
- `KNOWLEDGE_APPLICATION.md`
- `STUDENT_WORK_BOUNDARY.md`
- `TECHNICAL_SPEC.md`
- `ACCEPTANCE_TESTS.md`
- `ASSET_SOURCE_LICENSE.md`
- `GUIDE_AUTHORING_SPEC.md`

## Quy tắc thực thi
- Đọc toàn bộ input trước khi code.
- PROJECT_BASIC được xây trước.
- STUDENT_STARTER chỉ được dẫn xuất sau khi PROJECT_BASIC ổn định về cấu trúc.
- Không tự đổi CIO/SIO/ULO/K/evidence/student-work boundary.
- Không mở kiến thức kỹ thuật ngoài B1 cho học sinh.
- Không gọi Runtime PASS nếu chưa chạy project thật bằng Godot 4.6.
- B1 KHÔNG yêu cầu Web export; không tự mở K27.
- Nếu đặc tả lõi mâu thuẫn hoặc không thể triển khai: `BLOCKED` và báo rõ, không tự suy đoán.
