# QA STATIC — B06 (Kiểm thử Tĩnh)

**BÀI HỌC**: B06 — Nguy hiểm và điểm kiểm tra  
**NGÀY THỰC HIỆN**: 2026-08-24  
**THỰC HIỆN BỞI**: Antigravity  
**KẾT QUẢ TỔNG THỂ**: `PASS`

---

## 1. CẤU TRÚC THƯ MỤC VÀ ASSET PACK B06

- [x] `SNLT2026-HP01-B06-PROJECT_BASIC` khởi tạo và chạy thành công trên Godot 4.7.1 stable.
- [x] `SNLT2026-HP01-B06-STUDENT_STARTER` khởi tạo và chạy thành công trên Godot 4.7.1 stable.
- [x] Đã verify gói `01_CURATED_ASSET_PACK` với 3 tệp tin chính chủ:
  - `GLB_READY/B06_CHECKPOINT_BEACON_PROGRAM.glb`
  - `GLB_READY/B06_HAZARD_SPIKES_PROGRAM.glb`
  - `LICENSES/PROGRAM_AUTHORED_ASSETS_LICENSE.txt` (Giấy phép CC-BY-4.0)
- [x] Đã lập hồ sơ `SOURCE_MANIFEST_B06.json` lưu giữ chính xác checksum SHA-256 của từng tệp asset program-authored.

---

## 2. KIỂM TRA MÃ NGUỒN VÀ NODE TREE B06

### Kiến trúc Checkpoint & Hazard Canonical
- [x] Scene `objects/checkpoint.tscn`: Root `Area3D` ➔ `CollisionShape3D` (CylinderShape3D height=2.0, r=1.0) + `VisualAnchor [Node3D]` ➔ `B06_CHECKPOINT_BEACON_PROGRAM.glb`.
- [x] Scene `objects/hazard.tscn`: Root `Area3D` ➔ `CollisionShape3D` (BoxShape3D) + `VisualAnchor [Node3D]` ➔ `B06_HAZARD_SPIKES_PROGRAM.glb`.
- [x] Không có UI/HUD, Game Over hay nút Restart ở B06 (tuân thủ giới hạn phạm vi B06).

### B06 Learning Bugs trong Student Starter
- [x] **Task A (K12 - State Mismatch)**:
  - Checkpoint callback cập nhật `last_checkpoint_position = pos`.
  - Hàm `respawn_player_state()` lại đọc `respawn_position` (biến chưa cập nhật).
  - Học sinh trace 2 biến state, hợp nhất/đổi đúng biến state để Player hồi sinh đúng checkpoint mới.
- [x] **Task B (K29 - Wrong Object Reference)**:
  - Hàm `respawn_player_reference()` di chuyển `camera.global_position = respawn_position` thay vì `player`.
  - Học sinh phát hiện đối tượng tham chiếu sai (`camera` vs `player`) và sửa sang `player.global_position`.

---

## 3. KẾT LUẬN

Cả Project Basic và Student Starter của B06 đạt 100% tiêu chuẩn QA Tĩnh.
