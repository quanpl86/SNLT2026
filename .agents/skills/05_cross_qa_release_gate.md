---
description: Kiểm tra chéo toàn bộ project, starter, tài liệu và input trước khi bàn giao.
---
# Skill — Cross QA & Release Gate

## Cross-check matrix
Kiểm tra ít nhất các cặp:
- Input PRODUCT_SPEC ↔ PROJECT_BASIC.
- K_NEW/K_PRIOR ↔ step-by-step.
- Student work boundary ↔ STUDENT_STARTER.
- Scene/Node/file names ↔ hướng dẫn.
- Default values ↔ hướng dẫn phục hồi.
- Controls ↔ project.godot/Input Map.
- Asset/source ↔ NGUON_VA_GIAY_PHEP.md.
- Master ↔ Starter diff.

## Static gate
PASS chỉ khi không còn lỗi tham chiếu/parse/cấu trúc đã biết.

## Runtime gate
PASS chỉ khi đã chạy thật trên Godot theo phiên bản khóa.
Nếu chưa có môi trường: `CHƯA KIỂM THỬ THỰC TẾ`.

## Human validation
Ghi các mục cần người thật xác nhận: độ khó, khả năng tự làm, UX, thời lượng, máy phòng lab, Web/browser khi áp dụng.

## Release
Chỉ tạo package trong `99_RELEASE/` khi static gate PASS.
Tên release:
- `SNLT2026-HP01-Bxx-PROJECT_BASIC-v1.x.zip`
- `SNLT2026-HP01-Bxx-STUDENT_STARTER-v1.x.zip`
- `SNLT2026-HP01-Bxx-DOCS-v1.x.zip`
