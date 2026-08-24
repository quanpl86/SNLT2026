# QA RUNTIME — B04 (Kiểm thử Động & CLI Headless)

**BÀI HỌC**: B04 — Ôn tập — Thử thách Nền tảng 3D  
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
[ DONE ] reimport assets (character.glb, brick.glb, colormap.png)
[ DONE ] loading_editor_layout
Status: PASS (0 Parse Errors, Exit Code 0)
```

### STUDENT_STARTER
```text
Godot Engine v4.7.1.stable.official.a13da4feb
[ DONE ] first_scan_filesystem
[ DONE ] loading_editor_layout
Status: PASS (0 Parse Errors, Exit Code 0)
```

---

## 2. HÀNH VI RUNTIME MONG ĐỔI

- **Project Basic**:
  - Di chuyển 4 hướng W/A/S/D và nhảy Space mượt mà.
  - Mô hình nhân vật `character.glb` di chuyển khớp với chân collider.
  - Màn chơi thử thách 5 platform và platform đích hiển thị gạch Kenney đẹp mắt.
  - Tất cả platform có va chạm đầy đủ, nhảy qua được toàn bộ đường chạy.

- **Student Starter**:
  - Nhấn phím D nhân vật không di chuyển sang phải (do Bug A: `move_right` thiếu gán phím D).
  - Nhân vật di chuyển nhảy đến Platform 03 thì rơi xuyên qua sàn (do Bug B: `ChallengePlatform03/CollisionShape3D.disabled = true`).
  - Học sinh gỡ lỗi bằng cách bổ sung phím D vào InputMap và bật lại `disabled = false` cho CollisionShape3D của Platform 03, sau đó vượt qua màn chơi thành công.

---

## 3. KẾT LUẬN

Tất cả kiểm thử CLI Runtime đạt `PASS`.
