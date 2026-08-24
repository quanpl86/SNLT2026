# QA STATIC — B09 (Kiểm thử Tĩnh)

**BÀI HỌC**: B09 — Ôn tập — Bản thử nghiệm Phiêu lưu Nền tảng 3D  
**NGÀY THỰC HIỆN**: 2026-08-24  
**THỰC HIỆN BỞI**: Antigravity  
**KẾT QUẢ TỔNG THỂ**: `PASS`

---

## 1. CẤU TRÚC THƯ MỤC VÀ ASSET REUSE PACK B09

- [x] `SNLT2026-HP01-B09-PROJECT_BASIC` (Master clean) khởi tạo và chạy thành công trên Godot 4.7.1 stable.
- [x] `SNLT2026-HP01-B09-STUDENT_STARTER` (Starter Beta blocker) khởi tạo và chạy thành công trên Godot 4.7.1 stable.
- [x] Đã verify gói `01_CURATED_ASSET_PACK`:
  - `NEW ASSET COUNT = 0` (B09 tái sử dụng 100% tài nguyên đã tạo từ B04 đến B08).
  - Đã có `ASSET_REUSE_MANIFEST.json` ghi nhận chính xác danh mục asset tái sử dụng từ B04, B05, B06, B07, B08.
  - Đã bổ sung `README_REUSE_ONLY.md`.

---

## 2. KIỂM TRA MÃ NGUỒN VÀ INTEGRATION BETA BLOCKER B09

### Beta Integration Baseline
- [x] Chức năng di chuyển / nhảy / va chạm (B01-B04).
- [x] Vật phẩm collectible + Blockbench GLB model (B05).
- [x] Nguy hiểm hazard / điểm kiểm tra checkpoint / respawn (B06).
- [x] Giao diện người chơi HUD (B07).
- [x] Goal portal / Win UI / Clean restart (B08).

### B09 Single Integration Beta Blocker trong Student Starter
- [x] **Single Integration Blocker (CIO18)**:
  - Trong `SNLT2026-HP01-B09-STUDENT_STARTER/scenes/main.tscn`, `Collectible05` (`BetaCrystal05`) cố ý đặt tại tọa độ `Vector3(0, 15.0, -20.2)` lơ lửng 15m trên không trung không thể tiếp cận bằng cú nhảy đơn thường.
  - Người chơi chỉ thu thập được 4/5 vật phẩm ➔ `crystal_count` đạt 4/5 ➔ Goal Portal không mở ➔ Win UI không xuất hiện.
  - Học sinh không được đổi `target_count` 5 ➔ 4 mà phải dùng kiến thức Transform/Position để chỉnh tọa độ Y của `BetaCrystal05` xuống `y = 3.65m` trên bề mặt `Platform05`.

---

## 3. FORMAL TECHNICAL GATE TG-WEB-SMOKE (B09)

- [x] File `export_presets.cfg` được cấu hình chuẩn Web preset (Compatibility renderer).
- [x] Build output đặt tại `build/web/index.html`.

---

## 4. KẾT LUẬN

Cả Project Basic và Student Starter của B09 đạt 100% tiêu chuẩn QA Tĩnh.
