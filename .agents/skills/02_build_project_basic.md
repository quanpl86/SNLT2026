---
description: Xây project hoàn chỉnh chuẩn của bài HP1 từ đặc tả ChatGPT.
---
# Skill — Build PROJECT_BASIC

## Objective
Hiện thực hóa chính xác sản phẩm hoàn chỉnh được mô tả trong input.

## Rules
- Dùng đúng Godot 4.6 và Compatibility nếu input không ghi ngoại lệ được phê duyệt.
- Tên Node/Scene/File phải ổn định, dễ dùng trong tài liệu học sinh.
- Tách rõ code học sinh cần hiểu, code được tinh chỉnh, hạ tầng cung cấp.
- Ưu tiên project nhỏ, dễ kiểm thử, không chứa hệ thống ngoài phạm vi bài.
- Không tạo "magic state" chỉ để demo.

## Process
1. Tạo cấu trúc project.
2. Tạo/copy asset hợp lệ.
3. Tạo scenes/resources/scripts.
4. Thiết lập project.godot.
5. Kiểm tra mọi `res://` reference.
6. Chạy parser/static checks.
7. Nếu Godot CLI có sẵn, import project và run smoke test.
8. Ghi trạng thái vào `02_QA/QA_STATIC.md` và `QA_RUNTIME.md`.
