# QA STATIC — B02 (Kiểm thử Tĩnh)

**BÀI HỌC**: B02 — Điều khiển nhà thám hiểm  
**NGÀY THỰC HIỆN**: 2026-08-24  
**THỰC HIỆN BỞI**: Antigravity  
**KẾT QUẢ TỔNG THỂ**: `PASS`

---

## 1. CẤU TRÚC THƯ MỤC VÀ RESOURCE `res://`

- [x] Thư mục `SNLT2026-HP01-B02-PROJECT_BASIC` tồn tại và khởi tạo thành công trên Godot 4.7.1 stable.
- [x] Thư mục `SNLT2026-HP01-B02-STUDENT_STARTER` tồn tại và khởi tạo thành công trên Godot 4.7.1 stable.
- [x] Không có tệp tin hoặc đường dẫn `res://` bị rác hoặc mất liên kết.

---

## 2. KIỂM TRA MÃ NGUỒN GDSCRIPT (GDSCRIPT PARSE)

### `SNLT2026-HP01-B02-PROJECT_BASIC/scripts/player.gd`
- [x] Chứa vùng mã B02 chuẩn: `var speed: float = 6.0` và `func get_move_speed() -> float: return speed`.
- [x] Movement core lấy giá trị tốc độ qua `get_move_speed()`.
- [x] Không làm sẵn nội dung của B03 (K06/K07/K08).

### `SNLT2026-HP01-B02-STUDENT_STARTER/scripts/player.gd`
- [x] Chứa vùng mã B02 Starter: `var speed: float = 4.0` và `func get_move_speed() -> float: return speed`.
- [x] Mẫu mã sạch, cho phép học sinh tự đọc, dự đoán và điều chỉnh từ 4.0 → 6.0.

---

## 3. KIỂM TRA BẢN ĐỒ ĐẦU VÀO (INPUT MAP)

### Project Basic
- [x] Action `move_left` ➔ Key A (Physical Keycode 65)
- [x] Action `move_right` ➔ Key D (Physical Keycode 68)
- [x] Action `move_forward` ➔ Key W (Physical Keycode 87)
- [x] Action `move_back` ➔ Key S (Physical Keycode 83)

### Student Starter
- [x] Action `move_left` ➔ Key A
- [x] Action `move_right` ➔ Tồn tại nhưng mảng `events` trống `[]` (Key D bị thiếu có chủ đích).
- [x] Action `move_forward` ➔ Key W
- [x] Action `move_back` ➔ Key S

---

## 4. KẾT LUẬN

Project Basic và Student Starter đạt chuẩn QA Tĩnh 100%, sẵn sàng cho vòng kiểm thử Runtime.
