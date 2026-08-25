# HƯỚNG DẪN TƯƠNG TÁC SẢN PHẨM BÀI 03

## 1. Giới thiệu
Bài 03 mang đến một đường thử thách 3D (3D obstacle course) với không gian vũ trụ viễn tưởng (Alien Skybox). Học sinh sẽ điều khiển phi hành gia Oobi vượt qua các khối nhảy để đến được đích.
Tuy nhiên, dự án Starer ban đầu đã bị hỏng mã nguồn ở chức năng tiến lùi (W/S) và chức năng nhảy (Space).

## 2. Cách tương tác (Dành cho bản Project Basic - Đã hoàn thành)
- Dùng các phím `W, A, S, D` để di chuyển nhân vật.
- Dùng phím `Space` để nhảy.
- Nhảy qua các bệ thử thách, tránh bị rơi xuống vực thẳm.
- Mục tiêu: Chạm được cột cờ ở đích đến (Platform cuối cùng).

## 3. Khác biệt ở bản Student Starter
- Phím `W, S` (tiến, lùi) sẽ không có tác dụng do trục Z bị khóa trong code.
- Phím `Space` (Nhảy) bị lỗi "nhảy vô hạn": nhân vật có thể đạp không khí bay vút lên trời thay vì chỉ nhảy khi chạm đất.
