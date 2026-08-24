# HUMAN VALIDATION CHECKLIST — B01

**Bài học**: SNLT2026-HP01-B01 — Khám phá trò chơi 3D  
**Trạng thái**: **READY_FOR_HUMAN_TEST** (Đã xác minh Human Test bởi Người dùng trên Godot 4.7.1)  

---

## 1. Kết quả kiểm thử trải nghiệm thực tế (Human Test Log)

- [x] **HV-01**: Học sinh mở `SNLT2026-HP01-B01-STUDENT_STARTER` và giao diện Editor hiển thị đầy đủ scene 3D, không bị kẹt. **(VERIFIED)**
- [x] **HV-02**: Thay đổi vị trí Player $X = 1.5$ trực quan rõ ràng, nhân vật đứng an toàn trên StartPlatform. **(VERIFIED)**
- [x] **HV-03**: Thay đổi góc xoay View $Y = 25^\circ$ hoặc $42.5^\circ$ quan sát 3D ấn tượng, dễ di khiển `W/A/S/D` và nhảy `Space`. **(VERIFIED)**
- [x] **HV-04**: Sàn 5 platform có độ dài và khoảng cách nhảy phù hợp. **(VERIFIED)**
- [x] **HV-05**: Hướng dẫn Step-by-Step khớp tên Node và thuộc tính Inspector trên màn hình Godot. **(VERIFIED)**

---

## 2. Kết quả xử lý các Finding phát sinh trong Human Test

### Finding 1: Cảnh báo đỏ trong Cửa sổ Output của Editor
* **Mô tả**: `Formatting error in string "Lớp này được đánh dấu là không dùng nữa..."`
* **Kết luận**: **`NON_PROJECT_EDITOR_ERROR`** — Do tệp vi.po của bản dịch giao diện Tiếng Việt trong Godot 4.7.1 Editor, không ảnh hưởng tới gameplay hay dự án.

### Finding 2: Nhân vật Player bị xoay trong file đĩa Project Basic
* **Mô tả**: `Player` trong `PROJECT_BASIC/scenes/main.tscn` bị lưu rotation $42.5^\circ$.
* **Kết luận**: **`PROJECT_ERROR_FIXED`** — Đã dọn dẹp file `.tscn` về ma trận xoay chuẩn Identity $(0^\circ, 0^\circ, 0^\circ)$ với $X=1.5, Y=0.05, Z=0$.
