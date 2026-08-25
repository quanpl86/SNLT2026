# HƯỚNG DẪN CẤU HÌNH VÀ TRIỂN KHAI DỰ ÁN BÀI 03

## 1. Yêu cầu môi trường
- **Engine:** Godot 4.7.1 stable.
- **Renderer:** Compatibility (Để đảm bảo chạy tốt trên nền web và máy yếu).

## 2. Cấu hình Input Map (Có sẵn trong dự án)
Dự án kế thừa Input Map từ Bài 02:
- `move_left`: Phím A, Mũi tên trái
- `move_right`: Phím D, Mũi tên phải
- `move_forward`: Phím W, Mũi tên lên
- `move_back`: Phím S, Mũi tên xuống
- `jump`: Phím Space

## 3. Cấu hình Physics
Trọng lực được lấy từ cấu hình mặc định của Project Settings (`physics/3d/default_gravity = 18.0`). Giá trị này đã được kiểm thử để phù hợp với thông số `jump_speed = 6.5` của nhân vật.

## 4. Triển khai
- Không cần cấu hình thêm. Giáo viên hoặc học sinh chỉ cần import thư mục `SNLT2026-HP01-B03-STUDENT_STARTER` vào Godot và mở `scenes/main.tscn`.
