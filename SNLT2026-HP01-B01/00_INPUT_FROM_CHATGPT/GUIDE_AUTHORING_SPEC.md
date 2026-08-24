# GUIDE AUTHORING SPEC — B01

## Mục tiêu
Sau khi PROJECT_BASIC và STUDENT_STARTER đã ổn định, sinh hướng dẫn để một học sinh 12–14 tuổi mới làm quen Godot có thể tự đi từ Starter tới một bản remix hoàn chỉnh mà không cần đoán thao tác giao diện.

## Tệp bắt buộc
`01_DOCS/HUONG_DAN_THUC_HIEN_SAN_PHAM_STEP_BY_STEP.md`

## Cấu trúc mỗi bước
Mỗi bước thao tác phải có các khối sau, dùng đúng thứ tự:

### BƯỚC N — <Tên hành động>
**VIỆC EM CẦN LÀM**
- đường dẫn click cụ thể trong Godot;
- tên scene/node/property chính xác;
- khi nhập giá trị, ghi rõ ô X/Y/Z nào.

**VÌ SAO LÀM BƯỚC NÀY**
- 1–3 câu tiếng Việt dễ hiểu.

**KIẾN THỨC ÁP DỤNG**
- `[K_NEW] K01/K02/K09` hoặc
- `[K_PRIOR] K01/K02` hoặc
- `[HẠ TẦNG CUNG CẤP SẴN]`.

**DỰ ĐOÁN TRƯỚC KHI CHẠY**
- dùng ở các bước chỉnh sửa.

**KẾT QUẢ MONG ĐỢI**
- mô tả “nếu đúng em sẽ thấy gì” trên Editor hoặc game window.

**NẾU CHƯA ĐÚNG**
- 1–4 kiểm tra cứu hộ cụ thể.

**MINH CHỨNG CẦN LƯU**
- chỉ khi bước đó tạo evidence.

## Chuỗi step-by-step tối thiểu
1. Kiểm tra thư mục Student Starter.
2. Mở Godot 4.6.
3. Import/Open `project.godot`.
4. Nhận biết giao diện Scene / 3D Viewport / Inspector / FileSystem.
5. Run project baseline.
6. Dùng W/A/S/D + Space để chơi ngắn.
7. Stop project.
8. Mở `scenes/main.tscn`.
9. Đọc Scene Tree cốt lõi.
10. Mở `objects/player.tscn`, quan sát Player là một Scene gồm nhiều Node.
11. Quay lại `main.tscn`, hoàn thành sơ đồ Scene Tree evidence.
12. Chọn Player và mở Inspector → Transform → Position.
13. Ghi baseline `(0, 0.05, 0)`.
14. Dự đoán tác động nếu đổi X.
15. Thay X bằng một giá trị an toàn; phương án thực hành chuẩn có thể dùng `1.5` để đối chiếu.
16. Run → quan sát → giữ/hoàn tác → ghi evidence.
17. Chọn View và mở Transform → Rotation.
18. Ghi baseline `(0°, 0°, 0°)`.
19. Xác định Camera là con của View, quan sát Camera property nhưng không chỉnh.
20. Dự đoán tác động nếu đổi View Y Rotation.
21. Thay Y bằng một góc nhỏ; phương án thực hành chuẩn có thể dùng `25°` để đối chiếu.
22. Run → quan sát → giữ/hoàn tác → ghi evidence.
23. Kiểm tra combined result.
24. Save project.
25. Hoàn thành giải thích cuối.
26. Dùng checklist sản phẩm.

## Quy tắc sư phạm
- Không “giáo viên code → học sinh chép”.
- B1 không có code-editing task.
- Với hai thao tác Transform: **ĐỌC → DỰ ĐOÁN → CHỈNH SỬA → CHẠY → GIẢI THÍCH**.
- Không tiết lộ đáp án quiz.
- Không gọi CharacterBody3D/Input/Vector3/gravity là kiến thức cần học B1.

## Hình ảnh
Nếu môi trường Antigravity có thể chụp screenshot Godot thật:
- ưu tiên screenshot từ chính STUDENT_STARTER sau Runtime PASS;
- đặt ảnh trong `01_DOCS/images/`;
- ảnh phải đánh dấu vị trí Scene, Inspector, Player Transform, View Transform và Camera;
- không dùng ảnh giao diện khác phiên bản nếu có thể tránh.

Nếu không thể chụp ảnh thật, ghi `SCREENSHOT_PENDING_HUMAN_CAPTURE`, không tạo ảnh giả rồi gọi là ảnh Godot thật.
