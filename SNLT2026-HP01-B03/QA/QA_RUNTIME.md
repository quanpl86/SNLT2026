# QA RUNTIME — B03 (Kiểm thử Động & CLI Headless)

**BÀI HỌC**: B03 — Nhảy qua thử thách  
**ENGINE**: Godot 4.7.1 stable (Compatibility)  
**NGÀY THỰC HIỆN**: 2026-08-24  
**THỰC HIỆN BỞI**: Antigravity  
**KẾT QUẢ TỔNG THỂ**: `PASS`

---

## 1. CHẠY THỬ HEADLESS IMPORT & INITIALIZATION

### PROJECT_BASIC
```text
Godot Engine v4.7.1.stable.official.a13da4feb
[ DONE ] first_scan_filesystem
[ DONE ] update_scripts_classes
[ DONE ] loading_editor_layout
Status: PASS (0 Parse Errors, 0 Missing Dependencies)
```

### STUDENT_STARTER
```text
Godot Engine v4.7.1.stable.official.a13da4feb
[ DONE ] first_scan_filesystem
[ DONE ] update_scripts_classes
[ DONE ] loading_editor_layout
Status: PASS (0 Parse Errors, 0 Missing Dependencies)
```

---

## 2. HÀNH VI RUNTIME MONG ĐỔI

- **Project Basic**:
  - W/A/S/D di chuyển 4 hướng mượt mà trên mặt phẳng XZ.
  - Phím Space kích hoạt nhảy duy nhất khi nhân vật ở trên mặt sàn (`is_on_floor()`). Không thể nhảy liên tiếp trên không.
  - Vượt đường thử thách 3D gồm 5 platform bằng cú nhảy đơn (single jump).

- **Student Starter**:
  - Phím W/S không di chuyển Z (do Gap A `velocity.z = 0.0`).
  - Phím Space có thể bấm liên tục trên không để bay/nhảy nhiều lần (do Gap B thiếu `is_on_floor()`).
  - Không crash game. Sau khi học sinh bổ sung `direction.z` và `and is_on_floor()`, game hoạt động chuẩn như Project Basic.

---

## 3. KẾT LUẬN

Tất cả kiểm thử CLI Runtime đạt `PASS`.
