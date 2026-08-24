---
description: Xác minh bộ input của một bài HP1 trước khi code.
---
# Skill — Validate ChatGPT Input

## Objective
Đảm bảo Antigravity có đủ dữ liệu để triển khai mà không tự suy đoán nội dung lõi.

## Required input
Đọc toàn bộ `00_INPUT_FROM_CHATGPT/`, ưu tiên `MANIFEST.md`.

## Checks
1. Bài/lesson ID.
2. Tên sản phẩm bài.
3. CIO/SIO/ULO.
4. K_NEW/K_PRIOR.
5. Minh chứng.
6. Phần học sinh phải làm.
7. Hạ tầng cung cấp sẵn.
8. Đặc tả PROJECT_BASIC.
9. Đặc tả STUDENT_STARTER.
10. Phiên bản Godot/renderer.
11. Asset/source/license.
12. Runtime acceptance tests.
13. Human validation items.

## Output
Ghi `02_QA/INPUT_VALIDATION.md` với PASS / BLOCKED cho từng mục.
Nếu thiếu dữ liệu lõi, dừng trước khi code.
