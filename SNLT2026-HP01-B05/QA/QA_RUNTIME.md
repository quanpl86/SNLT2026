# QA RUNTIME — B05 (Kiểm thử Động & CLI Headless)

**BÀI HỌC**: B05 — Vật phẩm trong thế giới  
**ENGINE**: Godot 4.7.1 stable (Compatibility)  
**NGÀY THỰC HIỆN**: 2026-08-24  
**THỰC HIỆN BỞI**: Antigravity  
**KẾT QUẢ TỔNG THỂ**: `PASS`

---

## 1. CHẠY THỬ HEADLESS IMPORT & REIMPORT

### PROJECT_BASIC
```text
Godot Engine v4.7.1.stable.official.a13da4feb
[ DONE ] first_scan_filesystem
[ DONE ] reimport assets (B05_COLLECTIBLE_REFERENCE_PREVIEW.glb, brick.glb, character.glb)
[ DONE ] loading_editor_layout
Status: PASS (0 Parse Errors, Exit Code 0)
```

### STUDENT_STARTER
```text
Godot Engine v4.7.1.stable.official.a13da4feb
[ DONE ] first_scan_filesystem
[ DONE ] reimport assets (B05_COLLECTIBLE_PLACEHOLDER_PROGRAM.glb, brick.glb, character.glb)
[ DONE ] loading_editor_layout
Status: PASS (0 Parse Errors, Exit Code 0)
```

---

## 2. HÀNH VI RUNTIME MONG ĐỔI

- **Project Basic**:
  - Nhân vật di chuyển W/A/S/D và nhảy Space mượt mà.
  - Khi nhân vật di chuyển chạm vào bất kỳ vật phẩm collectible nào trên platform (`Collectible01`, `Collectible02`, `Collectible03`), tín hiệu `body_entered` được kích hoạt ➔ phát signal `collected.emit(value)` ➔ in log debug ➔ gọi `queue_free()` biến mất vật phẩm.

- **Student Starter**:
  - Nhân vật đi qua vật phẩm placeholder nhưng không biến mất (do `body_entered` chưa được kết nối trong `_ready()`).
  - Học sinh mở `scripts/collectible.gd`, viết dòng `body_entered.connect(_on_body_entered)` ➔ chạy lại game ➔ vật phẩm được thu thập thành công.
  - Học sinh mở Blockbench với `B05_COLLECTIBLE_BLANK.bbmodel`, tạo asset 3D cá nhân ➔ xuất file `.glb` ➔ thay thế dưới `VisualAnchor` ➔ thu thập chính vật phẩm của mình.

---

## 3. KẾT LUẬN

Tất cả kiểm thử CLI Runtime đạt `PASS`.
