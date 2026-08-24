# ACCEPTANCE TESTS — B01

## A. QA tĩnh — bắt buộc trước Runtime
### ST-01 Cấu trúc
PASS khi cả hai project có `project.godot`, main scene, player scene, 2 scripts và docs/evidence cần thiết.

### ST-02 Renderer
PASS khi không còn `Forward Plus`; project khai báo Godot 4.6 + GL Compatibility / gl_compatibility.

### ST-03 Resource references
PASS khi mọi `res://` reference trỏ tới file tồn tại.

### ST-04 Scene contract
PASS khi có chính xác các Node cốt lõi: Main, Environment, Player, View, Camera, World.

### ST-05 Starter boundary
PASS khi Starter baseline:
- Player `(0,0.05,0)`
- View `(0°,0°,0°)`
- evidence chưa điền.

### ST-06 Basic canonical completion
PASS khi Basic:
- Player `(1.5,0.05,0)`
- View `(0°,25°,0°)`.

### ST-07 Diff contract
PASS khi code/config/world giữa hai project giống nhau, ngoại trừ khác biệt được phép trong README/evidence và hai Transform của `main.tscn`.

## B. Runtime Godot 4.6 — chỉ đánh PASS khi đã chạy thật
### RT-01 Open
Import/Open cả hai project thành công trong Godot 4.6.

### RT-02 Parser
Không có parser error hoặc GDScript error cản Run.

### RT-03 Main run
F6/F5 chạy main scene đúng.

### RT-04 Player baseline
Starter: Player xuất hiện trên StartPlatform và không rơi ngay.

### RT-05 Movement
W/A/S/D di chuyển được.

### RT-06 Jump
Space nhảy và tiếp đất được.

### RT-07 Collision
Player không xuyên qua platform trong thử nghiệm bình thường.

### RT-08 Respawn safety
Nếu rơi khỏi level xuống y < -8, scene reload và quay lại baseline của project tương ứng.

### RT-09 Camera follow
Camera theo Player, Player vẫn quan sát được trong phần lớn đường ngắn.

### RT-10 Student task A
Trong Starter, đặt Player X = 1.5; Run; thay đổi vị trí xuất phát nhìn thấy rõ và Player vẫn ở khu an toàn.

### RT-11 Student task B
Trong Starter, đặt View Rotation Y = 25°; Run; góc nhìn thay đổi rõ, Player vẫn quan sát được.

### RT-12 Combined result
Hai chỉnh sửa cùng tồn tại và project vẫn chơi được.

### RT-13 Restore
Khôi phục Player `(0,0.05,0)` và View `(0°,0°,0°)` theo file phục hồi; project trở lại baseline.

### RT-14 Save/reopen
Save → đóng project → mở lại; giá trị đã lưu không mất.

## C. QA tài liệu sau khi project ổn định
- DOC-01 tên Node/property trong docs khớp project 100%.
- DOC-02 mọi giá trị baseline khớp Starter.
- DOC-03 mọi giá trị phương án chuẩn khớp Basic.
- DOC-04 không hướng dẫn sửa script ở B1.
- DOC-05 mỗi bước có highlight K_NEW/K_PRIOR/HẠ TẦNG/MINH CHỨNG phù hợp.
- DOC-06 có cách cứu lỗi cơ bản và điểm kiểm chứng “nếu đúng em sẽ thấy gì”.

## D. Human validation
Không tự gắn PASS. Ghi vào `02_QA/HUMAN_VALIDATION.md`:
1. Học sinh 12–14 tuổi có mở project và theo step-by-step được không?
2. Thay đổi Player X = 1.5 có trực quan nhưng không gây rơi/khó chơi không?
3. View Y = 25° có tạo thay đổi góc nhìn rõ và vẫn dễ điều khiển không?
4. Level có quá khó hoặc gây nhiễu mục tiêu K01/K02/K09 không?
5. Toàn bộ quy trình thực hành có phù hợp timebox của B1 không?

## Trạng thái
- `STATIC_PASS`: chỉ QA tĩnh.
- `RUNTIME_PASS`: chỉ sau khi RT-01..RT-14 chạy thật và đạt.
- `READY_FOR_HUMAN_TEST`: static + runtime đạt nhưng chưa có người dùng mục tiêu xác thực.
- `LOCK_CANDIDATE`: human validation đạt và không còn finding blocker/major.
