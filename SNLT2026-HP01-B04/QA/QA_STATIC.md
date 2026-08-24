# QA STATIC — B04 (Kiểm thử Tĩnh)

**BÀI HỌC**: B04 — Ôn tập — Thử thách Nền tảng 3D (Checkpoint chơi được số 1)  
**NGÀY THỰC HIỆN**: 2026-08-24  
**THỰC HIỆN BỞI**: Antigravity  
**KẾT QUẢ TỔNG THỂ**: `PASS`

---

## 1. CẤU TRÚC THƯ MỤC VÀ TÀI NGUYÊN (RESOURCES)

- [x] `SNLT2026-HP01-B04-PROJECT_BASIC` khởi tạo và chạy thành công trên Godot 4.7.1 stable.
- [x] `SNLT2026-HP01-B04-STUDENT_STARTER` khởi tạo và chạy thành công trên Godot 4.7.1 stable.
- [x] Các tệp 3D asset `character.glb`, `brick.glb` và texture `colormap.png` từ Kenney PJT-004 (commit `3fa8a04b1c01ab23db43123d4ce814a34c3fc7f0`) nằm đúng vị trí `assets/kenney_pjt004/`.
- [x] Đã lập hồ sơ `SOURCE_MANIFEST_B04.json` lưu giữ chính xác checksum SHA-256 của từng asset.

---

## 2. KIỂM TRA MÃ NGUỒN VÀ NÓDE TREE B04

### Visual Refresh (Làm mới hình ảnh)
- [x] `Player`: Giữ nguyên root `CharacterBody3D`, `CollisionShape3D` và `scripts/player.gd`. Mô hình `character.glb` gắn dưới dạng `Visual` child node (không làm hỏng physics).
- [x] `Platforms`: Giữ nguyên root `StaticBody3D` và `CollisionShape3D`. Mô hình `brick.glb` đóng vai trò visual decoration (không dùng Trimesh Collision để thay thế collider học tập).

### Bugs Ôn tập B04 trong Student Starter
- [x] **Bug A (K05 / B02)**: Action `move_right` có trong InputMap nhưng bị gỡ phím D.
- [x] **Bug B (K07 / B03)**: `ChallengePlatform03/CollisionShape3D` bị đặt `disabled = true` (Visual brick vẫn nhìn thấy nhưng nhân vật rơi xuyên qua, củng cố khái niệm "Hình nhìn thấy ≠ Collider vật lý").

---

## 3. KẾT LUẬN

Cả Project Basic và Student Starter của B04 đạt 100% tiêu chuẩn QA Tĩnh.
