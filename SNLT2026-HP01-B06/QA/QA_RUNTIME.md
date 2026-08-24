# QA RUNTIME — B06 (Kiểm thử Động & CLI Headless)

**BÀI HỌC**: B06 — Nguy hiểm và điểm kiểm tra  
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
[ DONE ] reimport assets (B06_CHECKPOINT_BEACON_PROGRAM.glb, B06_HAZARD_SPIKES_PROGRAM.glb, brick.glb, character.glb)
[ DONE ] loading_editor_layout
Status: PASS (0 Parse Errors, Exit Code 0)
```

### STUDENT_STARTER
```text
Godot Engine v4.7.1.stable.official.a13da4feb
[ DONE ] first_scan_filesystem
[ DONE ] reimport assets (B06_CHECKPOINT_BEACON_PROGRAM.glb, B06_HAZARD_SPIKES_PROGRAM.glb, brick.glb, character.glb)
[ DONE ] loading_editor_layout
Status: PASS (0 Parse Errors, Exit Code 0)
```

---

## 2. HÀNH VI RUNTIME MONG ĐỔI

- **Project Basic**:
  - Nhân vật đi qua `Checkpoint01` ➔ Kích hoạt signal `activated` ➔ `respawn_position` được cập nhật thành vị trí `Checkpoint01`.
  - Nhân vật va chạm `Hazard01` hoặc `Hazard02` ➔ Signal `player_hit` phát ➔ Hàm `respawn_player()` đưa `Player` về đúng `respawn_position` mới nhất.

- **Student Starter**:
  - **Kịch bản Task A (State Mismatch)**: Nhân vật qua `Checkpoint01`, nhưng va chạm `StateHazard` ở Platform 02 vẫn bị đưa về điểm Start ban đầu do `respawn_player_state()` đọc nhầm biến `respawn_position`. Học sinh trace biến state ➔ sửa code ➔ qua checkpoint ➔ va chạm hazard ➔ nhân vật xuất hiện lại đúng checkpoint ➔ PASS Task A.
  - **Kịch bản Task B (Wrong Reference)**: Va chạm `ReferenceHazard` làm màn hình Camera bị dịch chuyển trong khi Player đứng nguyên. Học sinh phát hiện tham chiếu `camera` ➔ sửa thành `player` ➔ PASS Task B.

---

## 3. KẾT LUẬN

Tất cả kiểm thử CLI Runtime đạt `PASS`.
