# STATIC QA REPORT - BÀI 03

- **ST-01 (Cấu trúc thư mục):** PASS. Đầy đủ các file `project.godot`, `main.tscn`, `player.gd`, `player.tscn` và các assets trong thư mục `PROJECT_BASIC` và `STUDENT_STARTER`.
- **ST-02 (Tài nguyên hợp lệ):** PASS. Tất cả các tài nguyên (nhân vật Oobi, khối sci-fi, food) đều tải đúng chuẩn Kenney (.glb và .png), texture colormap đầy đủ.
- **ST-03 (Script Parse/Syntax):** PASS. Mã nguồn `player.gd` parse thành công, không có lỗi cú pháp.
- **ST-04 (Tham chiếu Scene):** PASS. Không phát hiện liên kết hỏng (`missing dependency`).
- **ST-05 (Ownership):** PASS. Khối mã dành cho học sinh (B03) được đặt trong vùng comment `# === B03 — VÙNG PHẢI HIỂU / CHỈNH SỬA ===` rõ ràng.
- **ST-06 (Starter Gaps):** PASS. Lỗ hổng `velocity.z = 0.0` và thiếu `and is_on_floor()` được thiết lập chính xác trong file `player.gd` của Starter.
- **ST-07 (Tên dự án):** PASS. Tên dự án trong cả 2 bản đều là `HP01 B03 - Nhay qua thu thach`.
