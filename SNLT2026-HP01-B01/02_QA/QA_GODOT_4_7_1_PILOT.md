# BÁO CÁO THỬ NGHIỆM PILOT — GODOT 4.7.1 STABLE

**Dự án**: SNLT2026-HP01-B01  
**Mục đích**: Đánh giá khả năng làm Baseline Engine cho toàn bộ Học phần 1 (HP1)  

---

## 1. Kết quả thử nghiệm tổng quan
* **Môi trường thực thi**: `/Users/mac/Downloads/Godot.app` (v4.7.1.stable.official.a13da4feb).
* **Kết quả CLI Headless Import & Execution**: **Exit Code 0** cho cả `PROJECT_BASIC` và `STUDENT_STARTER`.
* **Kết quả Human Test trên giao diện Tiếng Anh (English UI)**:
  * Khởi chạy dự án, mở Scene `scenes/main.tscn` thành công.
  * Nhân vật xuất hiện đứng vững trên sàn, nhảy qua các sàn platform bằng `Space` mượt mà.
  * Phép thử chỉnh sửa `Player` Position và `View` Rotation cập nhật 3D Viewport tức thì.
  * Cửa sổ Output của Godot 4.7.1 khi chạy English UI đạt **0 Errors, 0 Warnings**.

---

## 2. Kết luận & Đề xuất
* **Đánh giá chuyên môn**: Godot 4.7.1 stable hoạt động cực kỳ mượt mà, hỗ trợ tốt Compatibility Renderer và không phát sinh bất kỳ lỗi runtime hay script nào với GDScript của HP1.
* **Đề xuất**: Đủ điều kiện để chọn làm **Engine Baseline chính thức cho Học phần 1 (HP1)** sau khi hoàn tất kiểm thử chéo.
