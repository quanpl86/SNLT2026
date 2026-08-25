# RUNTIME QA REPORT - BÀI 03

## Môi trường kiểm thử
- **Godot Version:** 4.7.1 stable
- **Renderer:** Compatibility
- **Hệ điều hành:** macOS (thực thi trên máy của Human)

## Kết quả kiểm thử
1. **Khởi chạy Project (Basic):** PASS. Scene `main.tscn` load thành công không có cảnh báo đỏ, không crash.
2. **Khởi chạy Project (Starter):** PASS. Scene load ổn định.
3. **Collision & Vật lý:** PASS.
   - Bệ nhảy (Platform) có khung va chạm (dày 1.0) bao quanh chuẩn xác phiến sci-fi (Visual Y-scale: 3.33).
   - Character CapsuleShape (height 0.9, radius 0.3) bám chuẩn xác nhân vật Oobi. Oobi đứng khít trên mặt sàn.
4. **Hành vi Basic:** PASS. Nhân vật di chuyển (W,A,S,D), rơi có gia tốc (trọng lực) và nhảy trên sàn thành công.
5. **Hành vi Starter Gaps:** PASS.
   - Nhấn W/S không hoạt động như mong đợi (lỗi 1).
   - Có thể nhảy vô hạn trên không (lỗi 2).
