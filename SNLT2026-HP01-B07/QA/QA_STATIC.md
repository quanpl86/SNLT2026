# QA STATIC — B07 (Kiểm thử Tĩnh)

**BÀI HỌC**: B07 — Giao diện người chơi  
**NGÀY THỰC HIỆN**: 2026-08-24  
**THỰC HIỆN BỞI**: Antigravity  
**KẾT QUẢ TỔNG THỂ**: `PASS`

---

## 1. CẤU TRÚC THƯ MỤC VÀ ASSET PACK B07

- [x] `SNLT2026-HP01-B07-PROJECT_BASIC` khởi tạo và chạy thành công trên Godot 4.7.1 stable.
- [x] `SNLT2026-HP01-B07-STUDENT_STARTER` khởi tạo và chạy thành công trên Godot 4.7.1 stable.
- [x] Đã verify gói `01_CURATED_ASSET_PACK` với 4 tệp PNG UI chính chủ:
  - `UI_ICONS/B07_HUD_PANEL_PROGRAM.png`
  - `UI_ICONS/B07_ICON_CRYSTAL_PROGRAM.png`
  - `UI_ICONS/B07_ICON_CHECKPOINT_PROGRAM.png`
  - `UI_ICONS/B07_ICON_CHECKPOINT_INACTIVE_PROGRAM.png`
  - `LICENSES/PROGRAM_AUTHORED_UI_ASSETS_LICENSE.txt` (Giấy phép CC-BY-4.0)
- [x] Đã lập hồ sơ `SOURCE_MANIFEST_B07.json` lưu giữ chính xác checksum SHA-256 của từng tệp UI asset program-authored.
- [x] Không cài đặt font ngoài; sử dụng font mặc định/system của Godot engine.

---

## 2. KIỂM TRA MÃ NGUỒN VÀ NODE TREE B07

### Kiến trúc HUD Canonical
- [x] Scene `objects/hud.tscn`: Root `HUD [Control]` (script `scripts/hud.gd`) ➔ `Panel [TextureRect]` ➔ `CrystalIcon`, `CrystalLabel (%CrystalLabel)`, `CheckpointIcon`, `CheckpointLabel (%CheckpointLabel)`.
- [x] CanvasLayer hạ tầng: `HUDLayer [CanvasLayer]` trong `scenes/main.tscn` để HUD giữ cố định trên màn hình (Ownership C).
- [x] Không leak tính năng B08+: Không có Win Screen, Lose Screen, Restart Button, Level Complete Overlay hay Web export gate.

### B07 Guided Learning Gaps trong Student Starter
- [x] **Gap A (CIO13/K13 - Hard-coded HUD)**:
  - `scripts/hud.gd`: `update_crystal_hud(value: int, total: int)` nhận dữ liệu runtime nhưng gán chuỗi tĩnh `"0/5"`.
  - Học sinh trace luồng dữ liệu ➔ sửa thành `crystal_label.text = "%d/%d" % [value, total]`.
- [x] **Gap B (CIO14 - Missing HUD Checkpoint Link)**:
  - `scripts/main.gd`: `_on_checkpoint_activated(pos: Vector3)` cập nhật `respawn_position` nhưng chưa gọi `hud.update_checkpoint_hud(true)`.
  - Học sinh nối signal/state ➔ bổ sung lệnh gọi `hud.update_checkpoint_hud(true)`.

---

## 3. KẾT LUẬN

Cả Project Basic và Student Starter của B07 đạt 100% tiêu chuẩn QA Tĩnh.
