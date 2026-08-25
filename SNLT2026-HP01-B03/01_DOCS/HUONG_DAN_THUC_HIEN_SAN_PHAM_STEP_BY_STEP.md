# HƯỚNG DẪN THỰC HIỆN SẢN PHẨM STEP BY STEP - BÀI 03

## Tổng quan nhiệm vụ
Trong bài học này, em sẽ đóng vai trò lập trình viên gỡ lỗi (debugger). Đường thử thách 3D đã được xây dựng sẵn, nhưng bộ điều khiển của phi hành gia đang bị hỏng. Em cần sửa 2 lỗi chính:
1. Nhân vật không thể di chuyển tiến/lùi (trục Z).
2. Nhân vật nhảy vô hạn trên không trung.

---

## Bước 1: Khắc phục lỗi di chuyển tiến lùi (Vector Z)

**VIỆC EM CẦN LÀM**
1. Mở file `player.gd` trong thư mục `scripts`.
2. Tìm đến dòng số `35` (hoặc khu vực có chữ `# TODO B03`).
3. Đổi dòng code:
   `velocity.z = 0.0`
   Thành:
   `velocity.z = direction.z * get_move_speed()`

**VÌ SAO LÀM BƯỚC NÀY**
- `velocity.z` quyết định tốc độ di chuyển của nhân vật theo chiều sâu (trục Z - tiến/lùi). Nếu nó bị gán cố định bằng `0.0`, nhân vật sẽ vĩnh viễn không thể chạy tới phía trước.

**KIẾN THỨC ÁP DỤNG**
- **K_NEW (K06): Vector và chuyển động.** Hiểu được ý nghĩa của các trục `x`, `y`, `z` trong không gian 3D.

**KẾT QUẢ MONG ĐỢI**
- Khi ấn F5 chạy game, bấm phím W và S, nhân vật sẽ chạy tiến lùi bình thường.

**NẾU CHƯA ĐÚNG**
- Kiểm tra xem em đã gõ đúng chính tả `direction.z` chưa.
- Đảm bảo em vẫn giữ dấu `*` để nhân với vận tốc.

---

## Bước 2: Khắc phục lỗi nhảy vô hạn (Điều kiện Boolean)

**VIỆC EM CẦN LÀM**
1. Nhấn phím `Space` liên tục khi đang chạy game để quan sát lỗi nhảy vô hạn.
2. Quay lại file `player.gd`, tìm xuống khu vực xử lý nhảy (Jump).
3. Đổi dòng code:
   `if Input.is_action_just_pressed("jump"):`
   Thành:
   `if Input.is_action_just_pressed("jump") and is_on_floor():`

**VÌ SAO LÀM BƯỚC NÀY**
- Lệnh `if` kiểm tra xem người chơi có bấm phím nhảy không. Nhưng nếu chỉ có vậy, nhân vật sẽ nhảy kể cả khi đang ở trên trời!
- Hàm `is_on_floor()` giúp game tự động kiểm tra xem bàn chân nhân vật có đang chạm mặt sàn hay không. 

**KIẾN THỨC ÁP DỤNG**
- **K_NEW (K07): Vật lý nhân vật.** Hàm `is_on_floor()` của CharacterBody3D.
- **K_NEW (K08): Điều kiện và logic Boolean.** Sử dụng toán tử `and` để yêu cầu: *Phải bấm phím VÀ phải đang đứng trên đất thì mới được nhảy.*

**KẾT QUẢ MONG ĐỢI**
- F5 chạy lại, nhân vật chỉ có thể nhảy khi đang đứng trên bệ cứng. Bấm Space trên không trung sẽ không có tác dụng.
- Vượt qua toàn bộ màn chơi một cách an toàn!

**NẾU CHƯA ĐÚNG**
- Kiểm tra chữ `and` có viết thường không.
- Hàm `is_on_floor()` bắt buộc phải có hai dấu ngoặc đơn `()` ở cuối.

---

## Bằng chứng hoàn thành
- **MC-ML (Minh chứng Mã lệnh):** Code của em có chứa trục `z` và điều kiện `and is_on_floor()`.
- **MC-CN (Minh chứng Chức năng):** Video/ảnh GIF nhân vật chạy và nhảy qua các bệ thử thách thành công để lấy được Cờ ở GoalPlatform.
