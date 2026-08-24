# QA STATIC — B08 (Kiểm thử Tĩnh)

**BÀI HỌC**: B08 — Luật thắng và trải nghiệm trò chơi  
**NGÀY THỰC HIỆN**: 2026-08-24  
**THỰC HIỆN BỞI**: Antigravity  
**KẾT QUẢ TỔNG THỂ**: `PASS`

---

## 1. CẤU TRÚC THƯ MỤC VÀ ASSET PACK B08

- [x] `SNLT2026-HP01-B08-PROJECT_BASIC` khởi tạo và chạy thành công trên Godot 4.7.1 stable.
- [x] `SNLT2026-HP01-B08-STUDENT_STARTER` khởi tạo và chạy thành công trên Godot 4.7.1 stable.
- [x] Đã verify gói `01_CURATED_ASSET_PACK` với 5 visual assets chính chủ:
  - `GLB_READY/B08_GOAL_PORTAL_PROGRAM.glb`
  - `UI/B08_WIN_PANEL_PROGRAM.png`
  - `UI/B08_ICON_RESTART_PROGRAM.png`
  - `UI/B08_ICON_GOAL_LOCKED_PROGRAM.png`
  - `UI/B08_ICON_GOAL_READY_PROGRAM.png`
  - `LICENSES/PROGRAM_AUTHORED_ASSETS_LICENSE.txt` (Giấy phép CC-BY-4.0)
- [x] Đã lập hồ sơ `SOURCE_MANIFEST_B08.json` lưu giữ chính xác checksum SHA-256 của từng tệp program-authored asset.

---

## 2. KIỂM TRA MÃ NGUỒN VÀ NODE TREE B08

### Kiến trúc Game Loop & UI Overlay Canonical
- [x] Scene Goal Portal `objects/goal.tscn`: Root `Goal [Area3D]` ➔ `CollisionShape3D` + `VisualAnchor [Node3D]` ➔ `B08_GOAL_PORTAL_PROGRAM.glb`.
- [x] Scene Win UI `objects/win_ui.tscn`: Root `WinUI [Control]` ➔ `Panel [TextureRect]` ➔ `WinLabel [Label]`, `RestartButton [Button (%RestartButton)]`.
- [x] Scene Main `scenes/main.tscn`: Tích hợp `GoalPortal`, `HUDLayer [CanvasLayer]` và `UILayer [CanvasLayer]`.

### B08 Learning Gaps trong Student Starter
- [x] **Gap A (CIO15/K15 - Early Win Gap)**:
  - `scripts/main.gd`: Callback `_on_goal_reached` trong Starter thiếu kiểm tra `if crystal_count >= target_count:`.
  - Học sinh bổ sung điều kiện ➔ chỉ khi đủ vật phẩm mới cho phép thắng.
- [x] **Gap B (CIO15/K15 - Dirty Restart Gap)**:
  - `scripts/main.gd`: Hàm `restart_game()` trong Starter chỉ đưa Player về vị trí ban đầu nhưng giữ nguyên state (crystal_count, is_finished, HUD state).
  - Học sinh sửa thành `get_tree().reload_current_scene()` ➔ tạo lượt chơi mới hoàn toàn sạch.

---

## 3. WEB EXPORT PRESET (K27)

- [x] File `export_presets.cfg` được cấu hình chuẩn Web preset (Compatibility renderer).
- [x] Build output đặt tại `build/web/index.html`.

---

## 4. KẾT LUẬN

Cả Project Basic và Student Starter của B08 đạt 100% tiêu chuẩn QA Tĩnh.
