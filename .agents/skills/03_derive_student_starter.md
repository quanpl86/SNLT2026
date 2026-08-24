---
description: Dẫn xuất Student Starter từ project hoàn chỉnh mà không làm hộ nhiệm vụ học sinh.
---
# Skill — Derive STUDENT_STARTER

## Objective
Tạo base project cùng hạ tầng với PROJECT_BASIC nhưng để trống đúng phần học sinh phải tự hoàn thành.

## Process
1. Copy PROJECT_BASIC sang STUDENT_STARTER.
2. Đọc mục `STUDENT_WORK_BOUNDARY` trong input.
3. Chỉ gỡ/đặt lại phần nằm trong boundary đó.
4. Giữ hạ tầng cần thiết.
5. Xóa evidence mẫu/đáp án/backup hoàn chỉnh có thể lộ lời giải.
6. Chạy lại static/runtime smoke test.
7. So sánh tree/file hashes/diff với PROJECT_BASIC.

## Output
`02_QA/QA_DIFF_STARTER_VS_MASTER.md` phải liệt kê:
- đường dẫn khác nhau;
- khác biệt cụ thể;
- lý do sư phạm;
- ownership;
- có/không phải evidence.
