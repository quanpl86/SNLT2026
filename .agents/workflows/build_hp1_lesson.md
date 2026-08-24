---
description: Xây trọn bộ project của một bài HP1 từ input ChatGPT theo Master-first → Starter → Docs → QA → Handoff.
---
# Workflow — Build HP1 Lesson

## Invocation intent
Dùng khi trong `SNLT2026-HP01-Bxx/00_INPUT_FROM_CHATGPT/` đã có `MANIFEST.md` trạng thái `READY_FOR_IMPLEMENTATION`.

## Ordered Workflow Lifecycle
```text
VALIDATE GLOBAL RULES
        ↓
VALIDATE LESSON INPUT
        ↓
BUILD PROJECT_BASIC
        ↓
STATIC QA
        ↓
RUNTIME QA
        ↓
DERIVE STARTER
        ↓
DIFF QA
        ↓
STARTER END-TO-END
        ↓
GENERATE DOCS
        ↓
CAPTURE SCREENSHOTS
        ↓
HUMAN TEST PACKAGE
        ↓
HANDOFF TO CHATGPT
        ↓
WAIT FOR REVIEW
        ↓
FIX FINDINGS
        ↓
HUMAN RETEST
        ↓
LOCK
```

## Detailed Execution Steps
1. Đọc và tuân thủ toàn bộ bộ quy tắc tại `.agents/rules/`.
2. Kiểm tra input tại `SNLT2026-HP01-Bxx/00_INPUT_FROM_CHATGPT/`. Nếu lỗi/thiếu: ghi `STATUS = BLOCKED` và dừng.
3. Tạo Implementation Plan ngắn trong `02_QA/IMPLEMENTATION_PLAN.md`.
4. Xây dựng `SNLT2026-HP01-Bxx-PROJECT_BASIC`.
5. Kiểm thử `STATIC_QA` (ST-01 .. ST-07).
6. Kiểm thử `RUNTIME_QA` (nếu có Godot 4.7.1/4.6.x CLI & Human test).
7. Dẫn xuất `SNLT2026-HP01-Bxx-STUDENT_STARTER`.
8. Kiểm thử `STARTER_QA` & tạo báo cáo khác biệt `02_QA/QA_DIFF_STARTER_VS_MASTER.md`.
9. Biên soạn tài liệu hướng dẫn trong `01_DOCS/` (Áp dụng quy chuẩn English UI + Tiếng Việt trong ngoặc).
10. Lưu hình ảnh minh chứng English UI vào `03_EVIDENCE_SCREENSHOTS/`.
11. Tạo báo cáo tóm tắt 10 câu tiêu chuẩn `02_QA/HANDOFF_REPORT.md`.
12. Đóng gói `SNLT2026-HP01-Bxx_HANDOFF_TO_CHATGPT_vX.X.zip` (loại trừ `.godot/`, `.git/`, cache).
13. Chuyển trạng thái sang `READY_FOR_HUMAN_TEST` và báo cáo đường dẫn ZIP.

## Stop Conditions
- Mâu thuẫn nguồn lõi.
- Thiếu PRODUCT_SPEC.
- Thiếu STUDENT_WORK_BOUNDARY.
- Không rõ K_NEW/K_PRIOR.
- Asset/license không xác định mà project bắt buộc dùng asset đó.
