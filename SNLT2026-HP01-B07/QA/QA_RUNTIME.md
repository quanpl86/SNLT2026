# QA RUNTIME — B07 (Kiểm thử Động & CLI Headless)

**BÀI HỌC**: B07 — Giao diện người chơi  
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
[ DONE ] reimport assets (B07_HUD_PANEL_PROGRAM.png, B07_ICON_CRYSTAL_PROGRAM.png, B07_ICON_CHECKPOINT_PROGRAM.png, B07_ICON_CHECKPOINT_INACTIVE_PROGRAM.png, GLB models)
[ DONE ] loading_editor_layout
Status: PASS (0 Parse Errors, Exit Code 0)
```

### STUDENT_STARTER
```text
Godot Engine v4.7.1.stable.official.a13da4feb
[ DONE ] first_scan_filesystem
[ DONE ] reimport assets (B07_HUD_PANEL_PROGRAM.png, B07_ICON_CRYSTAL_PROGRAM.png, B07_ICON_CHECKPOINT_PROGRAM.png, B07_ICON_CHECKPOINT_INACTIVE_PROGRAM.png, GLB models)
[ DONE ] loading_editor_layout
Status: PASS (0 Parse Errors, Exit Code 0)
```

---

## 2. HÀNH VI RUNTIME MONG ĐỔI

- **Project Basic**:
  - Trạng thái ban đầu: HUD hiển thị `0/3` vật phẩm và trạng thái Checkpoint là `"Chưa kích hoạt"`.
  - Ăn 1 vật phẩm ➔ HUD cập nhật ngay `1/3`. Ăn tiếp ➔ `2/3`, `3/3`.
  - Nhân vật bước qua `Checkpoint01` ➔ Checkpoint Label chuyển thành `"Đã kích hoạt"`.
  - Bị rơi/va chạm hazard ➔ Nhân vật về vị trí respawn ➔ Trạng thái HUD (`3/3`, `"Đã kích hoạt"`) được bảo toàn chính xác.

- **Student Starter**:
  - **Kịch bản Gap A (CIO13 - Hardcoded HUD)**: Thu thập vật phẩm nhưng `CrystalLabel` giữ nguyên `"0/5"`. Học sinh sửa `hud.gd` ➔ gán `%d/%d` ➔ HUD cập nhật đúng `1/3`, `2/3`, `3/3` ➔ PASS Gap A.
  - **Kịch bản Gap B (CIO14 - Checkpoint Link Missing)**: Bước qua `Checkpoint01`, Player di chuyển respawn đúng nhưng HUD vẫn hiện `"Chưa kích hoạt"`. Học sinh sửa `main.gd` ➔ bổ sung `hud.update_checkpoint_hud(true)` ➔ HUD cập nhật `"Đã kích hoạt"` ➔ PASS Gap B.

---

## 3. KẾT LUẬN

Tất cả kiểm thử CLI Runtime đạt `PASS`.
