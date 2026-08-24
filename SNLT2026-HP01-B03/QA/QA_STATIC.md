# QA STATIC — B03 (Kiểm thử Tĩnh)

**BÀI HỌC**: B03 — Nhảy qua thử thách  
**NGÀY THỰC HIỆN**: 2026-08-24  
**THỰC HIỆN BỞI**: Antigravity  
**KẾT QUẢ TỔNG THỂ**: `PASS`

---

## 1. CẤU TRÚC THƯ MỤC VÀ RESOURCE `res://`

- [x] Thư mục `SNLT2026-HP01-B03-PROJECT_BASIC` tồn tại và khởi tạo thành công trên Godot 4.7.1 stable.
- [x] Thư mục `SNLT2026-HP01-B03-STUDENT_STARTER` tồn tại và khởi tạo thành công trên Godot 4.7.1 stable.
- [x] Không có tệp tin hoặc đường dẫn `res://` bị rác hoặc mất liên kết.

---

## 2. KIỂM TRA MÃ NGUỒN GDSCRIPT (GDSCRIPT PARSE)

### `SNLT2026-HP01-B03-PROJECT_BASIC/scripts/player.gd`
- [x] Chứa cơ chế nhảy hợp lệ chuẩn: `if Input.is_action_just_pressed("jump") and is_on_floor(): velocity.y = jump_speed`.
- [x] Gán vector di chuyển Z hoàn chỉnh: `velocity.z = direction.z * move_speed`.
- [x] Không mở kiến thức B04+ (Area3D/Signal/Collectible/Checkpoint).

### `SNLT2026-HP01-B03-STUDENT_STARTER/scripts/player.gd`
- [x] Gap A: `velocity.z = 0.0` (W/S chưa tạo chuyển động Z).
- [x] Gap B: `if Input.is_action_just_pressed("jump"):` (thiếu `and is_on_floor()`, tạo ra lỗi air-jump có thể chẩn đoán).
- [x] Mẫu mã sạch, cho phép học sinh đọc, dự đoán, tái hiện và sửa lỗi.

---

## 3. KẾT LUẬN

Cả Project Basic và Student Starter của B03 đạt 100% tiêu chuẩn QA Tĩnh.
