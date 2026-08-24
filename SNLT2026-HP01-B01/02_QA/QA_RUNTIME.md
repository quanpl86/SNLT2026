# QA RUNTIME REPORT — B01 (GODOT 4.7.1 STABLE PILOT)

**Bài học**: SNLT2026-HP01-B01 — Khám phá trò chơi 3D  
**Trạng thái kiểm thử**: **PASS** (CLI Headless Exit Code 0 & Human Smoke Test Verified)  
**Môi trường thử nghiệm**: Godot 4.7.1 stable (Compatibility Renderer)  

---

## 1. Kết quả kiểm thử tự động (CLI Headless / Parse QA)

```text
ENGINE_CANDIDATE: Godot 4.7.1 stable
GODOT_4_7_1_IMPORT_PARSE_QA: PASS (Exit Code 0)
GODOT_4_7_1_PROJECT_BASIC_HEADLESS_RUNTIME: PASS (Exit Code 0)
PROJECT_BASIC_HUMAN_SMOKE_TEST: PASS (Verified W/A/S/D movement & Space jump)
STUDENT_STARTER_IMPORT_PARSE_QA: PASS (Exit Code 0)
STUDENT_STARTER_HUMAN_E2E: PENDING
WEB_QA: NOT_TESTED
```

---

## 2. Phân loại Findings
- **FND-B01-001**: `NON_PROJECT_EDITOR_ERROR` — Lỗi tệp vi.po của bản dịch tiếng Việt trong Editor, hết xuất hiện khi chuyển sang English UI.
- **FND-B01-002**: `PROJECT_ERROR_FIXED` — Player rotation $42.5^\circ$ trên file đĩa cũ đã được dọn dẹp về $0^\circ$ chuẩn.

---

## 3. Ghi chú lịch sử môi trường (Historical Environment Log)
- *Godot 4.6.x*: Môi trường mặc định HP1 ban đầu không tìm thấy CLI binary trên máy thử nghiệm (`GODOT_4_6_NOT_FOUND`). Toàn bộ dự án được chuyển sang pilot thực tế trên **Godot 4.7.1 stable** với kết quả 100% ổn định.
