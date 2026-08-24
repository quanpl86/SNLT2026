# QA STATIC — B05 (Kiểm thử Tĩnh)

**BÀI HỌC**: B05 — Vật phẩm trong thế giới  
**NGÀY THỰC HIỆN**: 2026-08-24  
**THỰC HIỆN BỞI**: Antigravity  
**KẾT QUẢ TỔNG THỂ**: `PASS`

---

## 1. CẤU TRÚC THƯ MỤC VÀ ASSET PACK B05

- [x] `SNLT2026-HP01-B05-PROJECT_BASIC` khởi tạo và chạy thành công trên Godot 4.7.1 stable.
- [x] `SNLT2026-HP01-B05-STUDENT_STARTER` khởi tạo và chạy thành công trên Godot 4.7.1 stable.
- [x] Đã verify gói `01_CURATED_ASSET_PACK` với đủ 5 tệp tin chính chủ:
  - `BLOCKBENCH_TEMPLATES/B05_COLLECTIBLE_BLANK.bbmodel` (Blank model cho HS)
  - `BLOCKBENCH_TEMPLATES/B05_COLLECTIBLE_REFERENCE.bbmodel` (Reference model cho GV)
  - `GLB_READY/B05_COLLECTIBLE_PLACEHOLDER_PROGRAM.glb` (Placeholder GLB trong Starter)
  - `GLB_READY/B05_COLLECTIBLE_REFERENCE_PREVIEW.glb` (Reference GLB trong Basic)
  - `LICENSES/PROGRAM_AUTHORED_ASSETS_LICENSE.txt` (Giấy phép CC-BY-4.0)
- [x] Đã lập hồ sơ `SOURCE_MANIFEST_B05.json` lưu giữ chính xác checksum SHA-256 của từng tệp asset.

---

## 2. KIỂM TRA MÃ NGUỒN VÀ NODE TREE B05

### Kiến trúc Collectible Canonical
- [x] Scene `objects/collectible.tscn`: Root `Area3D` ➔ `CollisionShape3D` (SphereShape3D r=0.6) + `VisualAnchor [Node3D]` ➔ `<GLB instance>`.
- [x] Player được đăng ký vào group `"player"` bằng lệnh `add_to_group("player")` trong `_ready()`.

### B05 Learning Gap trong Student Starter
- [x] **Project Basic (`scripts/collectible.gd`)**: Kết nối tín hiệu `body_entered` đầy đủ (`body_entered.connect(_on_body_entered)`).
- [x] **Student Starter (`scripts/collectible.gd`)**: Cố ý **bỏ trống** phần kết nối tín hiệu trong `_ready()` (Learning Gap K11). Học sinh đọc mã, dự đoán, tự viết câu lệnh kết nối signal `body_entered.connect(_on_body_entered)` để thu thập vật phẩm.

---

## 3. KẾT LUẬN

Cả Project Basic và Student Starter của B05 đạt 100% tiêu chuẩn QA Tĩnh.
