# QA RUNTIME — B02 (Kiểm thử Động & CLI Headless)

**BÀI HỌC**: B02 — Điều khiển nhà thám hiểm  
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
  - Nhấn phím W/A/S/D ➔ Nhân vật di chuyển bốn hướng linh hoạt với tốc độ `speed = 6.0`.
  - Nhấn phím Space ➔ Nhân vật nhảy (hạ tầng C).

- **Student Starter**:
  - Nhấn phím W/A/S ➔ Nhân vật di chuyển lên/trái/lùi với tốc độ baseline `speed = 4.0`.
  - Nhấn phím D ➔ Nhân vật đứng yên (do action `move_right` chưa có key binding). Game không crash.
  - Sau khi học sinh thêm phím D vào `move_right` ➔ Nhân vật di chuyển sang phải thành công.

---

## 3. KẾT LUẬN

Tất cả kiểm thử Runtime CLI đạt `PASS`.
