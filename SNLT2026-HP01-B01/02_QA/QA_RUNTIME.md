# BÁO CÁO QA RUNTIME (RUNTIME QA REPORT) — B01

**Bài học**: SNLT2026-HP01-B01  
**Trạng thái kiểm thử**: **NOT_RUN — GODOT_4_6_NOT_FOUND** (Đã kiểm thử thực tế bởi Con người & CLI trên Godot 4.7.1 Exit Code 0)  

---

## 1. Thông tin phát hiện môi trường thực thi (Discovery Log)
* **Executable Path**: `/Users/mac/Downloads/Godot.app/Contents/MacOS/Godot`
* **Detected Version**: `4.7.1.stable.official.a13da4feb`
* **Ghi chú tuân thủ**: Hệ thống hiện tại có sẵn Godot 4.7.1. Chuẩn quy định của HP1 yêu cầu chạy trên Godot 4.6. Trạng thái Runtime PASS chính thức cho Godot 4.6 hiện ghi nhận: `NOT_RUN — GODOT_4_6_NOT_FOUND`.

---

## 2. Kết quả kiểm thử thực tế bởi Con người (Human Test) & CLI 4.7.1

> **CẢNH BÁO PHẠM VI**: ĐÃ KIỂM THỬ THỰC TẾ TRÊN GODOT 4.7.1; CHƯA XÁC NHẬN TRÊN GODOT 4.6.

* **Project Basic mở & hiển thị scene 3D**: ✅ PASS
* **Player xuất hiện & đứng an toàn trên StartPlatform**: ✅ PASS
* **Điều khiển di chuyển W/A/S/D**: ✅ PASS
* **Phím Space nhảy qua các platform**: ✅ PASS
* **View & Camera follow**: ✅ PASS
* **Phép thử Remix Transform Player Position & View Rotation**: ✅ PASS

---

## 3. Nhật ký điều tra các phát hiện (Finding Investigation Log)

### Finding 01 — Dòng lỗi đỏ trong Output: `Formatting error in string "Lớp này được đánh dấu là không dùng nữa..."`
* **Triệu chứng**: Cửa sổ Output của Godot Editor xuất hiện 8 dòng cảnh báo đỏ.
* **Nguyên nhân**: Lỗi định dạng trong tệp bản dịch giao diện Tiếng Việt (`vi.po`) tích hợp sẵn của Godot Editor 4.7.1 (thiếu placeholder `%s` khi hiển thị tooltip mô tả lớp bị nạp trong Inspector).
* **Bằng chứng**: Không xuất hiện khi chạy bằng CLI headless; không có bất kỳ dòng lệnh nào trong GDScript dự án gọi chuỗi này.
* **Kết luận phân loại**: **`NON_PROJECT_EDITOR_ERROR`** (Lỗi bản dịch Tiếng Việt của Godot 4.7.1 Editor, không thuộc mã nguồn bài học).

### Finding 02 — Giá trị xoay Player Rotation Y = 42.5° trong file đĩa `main.tscn`
* **Triệu chứng**: `Player` trong `PROJECT_BASIC/scenes/main.tscn` bị lưu giá trị xoay `42.5°` do thao tác tương tác giao diện lưu lại.
* **Xử lý**: Đã khôi phục ma trận xoay chuẩn Identity `Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, 1.5, 0.05, 0)` về đĩa.
* **Kết luận phân loại**: **`PROJECT_ERROR_FIXED`** (Đã làm sạch file scene chuẩn trên đĩa).

---

## 4. Bảng theo dõi danh mục kiểm thử Runtime (RT-01 .. RT-14)

| Mã test | Nội dung kiểm thử | Kết quả Godot 4.7.1 (Human + CLI) | Trạng thái Chốt (Godot 4.6 Standard) |
| :--- | :--- | :--- | :--- |
| **RT-01** | Open project | PASS | Chờ xác nhận Godot 4.6 |
| **RT-02** | Parser check | PASS (No error) | Chờ xác nhận Godot 4.6 |
| **RT-03** | Main scene run | PASS | Chờ xác nhận Godot 4.6 |
| **RT-04** | Player baseline | PASS | Chờ xác nhận Godot 4.6 |
| **RT-05** | W/A/S/D movement | PASS (Human Verified) | Chờ xác nhận Godot 4.6 |
| **RT-06** | Space jump | PASS (Human Verified) | Chờ xác nhận Godot 4.6 |
| **RT-07** | Collision | PASS (Human Verified) | Chờ xác nhận Godot 4.6 |
| **RT-08** | Respawn safety (y < -8) | PASS | Chờ xác nhận Godot 4.6 |
| **RT-09** | Camera follow | PASS (Human Verified) | Chờ xác nhận Godot 4.6 |
| **RT-10** | Student task A (Player X) | PASS (Human Verified) | Chờ xác nhận Godot 4.6 |
| **RT-11** | Student task B (View Y) | PASS (Human Verified) | Chờ xác nhận Godot 4.6 |
| **RT-12** | Combined result | PASS (Human Verified) | Chờ xác nhận Godot 4.6 |
| **RT-13** | Restore baseline | PASS | Chờ xác nhận Godot 4.6 |
| **RT-14** | Save & reopen | PASS | Chờ xác nhận Godot 4.6 |
