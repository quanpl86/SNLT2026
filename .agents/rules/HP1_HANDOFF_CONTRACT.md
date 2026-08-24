# HP1 HANDOFF CONTRACT

Quy định sau mỗi bài Antigravity phải đóng gói gói Handoff:

SNLT2026-HP01-Bxx_HANDOFF_TO_CHATGPT_vX.X.zip

Bắt buộc chứa:
- 00_INPUT_FROM_CHATGPT/
- SNLT2026-HP01-Bxx-PROJECT_BASIC/
- SNLT2026-HP01-Bxx-STUDENT_STARTER/
- 01_DOCS/
- 02_QA/
- 03_EVIDENCE_SCREENSHOTS/
- 99_RELEASE/

Không chứa:
- .godot/
- .git/
- cache/
- temporary build files/

---

## GIT WORKFLOW RULES

- `main` = locked/released lesson state.
- Mỗi bài đang phát triển dùng branch riêng: `b01`, `b02`, ..., `b12`.
- Không push trực tiếp thay đổi triển khai bài mới vào `main`.
- Mỗi gate quan trọng phải có commit riêng:
  - `Bxx: project basic build`
  - `Bxx: static qa pass`
  - `Bxx: runtime qa pass`
  - `Bxx: derive student starter`
  - `Bxx: generate verified docs`
  - `Bxx: human test fixes`
  - `Bxx: ready for lock`
- Trước khi merge vào `main` phải có:
  - Project Basic QA PASS
  - Student Starter QA PASS
  - Human validation PASS
  - ChatGPT review APPROVED
  - READY_FOR_LOCK
- Merge vào `main` chỉ sau khi người dùng phê duyệt.

---

## MẪU CẤU TRÚC HANDOFF_REPORT.md (BAO GỒM GIT METADATA)

Trong `02_QA/HANDOFF_REPORT.md` phải chứa các câu báo cáo chuẩn:

LESSON:
VERSION:

ENGINE_VERSION:
RENDERER:

PROJECT_BASIC_STATUS:
STUDENT_STARTER_STATUS:

STATIC_QA:
RUNTIME_QA:
WEB_QA:
HUMAN_VALIDATION:

CANONICAL_VALUES:
STARTER_BASELINE_VALUES:

STUDENT_WORK_BOUNDARY_CONFIRMED:

OPEN_FINDINGS:

FILES_CHANGED_AFTER_HUMAN_TEST:

GIT_BRANCH:
HEAD_COMMIT:
BASE_COMMIT:
PR_NUMBER:
REVIEW_STATUS:

RECOMMENDED_STATUS:
