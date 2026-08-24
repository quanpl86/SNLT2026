# HUMAN VALIDATION CHECKLIST — B01

**Bài học**: SNLT2026-HP01-B01 — Khám phá trò chơi 3D  
**Trạng thái**: **READY_FOR_HUMAN_TEST** (Đã xác minh smoke test Project Basic trên Godot 4.7.1; Student Starter end-to-end pending)  

---

## 1. Kết quả kiểm thử trải nghiệm thực tế (Human Test Log)

- [x] **HV-01 (Smoke Test)**: Mở `SNLT2026-HP01-B01-PROJECT_BASIC` trên Godot 4.7.1 stable, hiển thị đúng 3D scene, nhân vật đứng trên platform và điều khiển được bằng phím `W/A/S/D` và nhảy `Space`. **(VERIFIED — Human tested)**
- [x] **HV-02 (UI Standard)**: Giao diện Godot Editor sử dụng English UI, tương thích với quy chuẩn thuật ngữ Tiếng Việt kèm English UI label trong ngoặc. **(VERIFIED — Human tested)**
- [ ] **HV-03 (Student Starter End-to-End)**: Học sinh mở `SNLT2026-HP01-B01-STUDENT_STARTER`, quan sát baseline (Player X = 0.0, View Y = 0°), thực hiện thay đổi Player Position X = 1.5 và View Rotation Y = 25°. **(PENDING / NEEDS_HUMAN_TEST)**
- [ ] **HV-04 (Ergonomics & Platform Gap)**: Kiểm tra khoảng cách nhảy giữa 5 platform xem có độ khó phù hợp với học sinh 12–14 tuổi trong thời lượng 120 phút. **(PENDING / NEEDS_HUMAN_TEST)**
- [ ] **HV-05 (Step-by-Step Match 1:1)**: Đánh giá hướng dẫn Step-by-Step 1:1 trong môi trường thực hành của học sinh. **(PENDING / NEEDS_HUMAN_TEST)**

---

## 2. Ghi chú giá trị chuẩn mực (Canonical Standards)
- **Player Position X**: Phương án chuẩn đối chiếu = `1.5m` (Baseline = `0.0m`).
- **View Rotation Y**: Phương án chuẩn đối chiếu = `25°` (Baseline = `0°`).
- **Lưu ý**: Giá trị $42.5^\circ$ là lệch xoay vô ý trong file đĩa cũ, đã được sửa dứt điểm về $0^\circ$ chuẩn. $42.5^\circ$ **KHÔNG PHẢI** là giá trị chuẩn đối chiếu.

---

## 3. Kết quả xử lý các Finding phát sinh trong Human Test

### Finding 1: Cảnh báo đỏ trong Cửa sổ Output của Editor
* **Mô tả**: `Formatting error in string "Lớp này được đánh dấu là không dùng nữa..."`
* **Kết luận**: **`NON_PROJECT_EDITOR_ERROR`** — Do tệp vi.po của bản dịch giao diện Tiếng Việt trong Godot 4.7.1 Editor, không ảnh hưởng tới gameplay hay dự án. Hết xuất hiện khi dùng English UI.

### Finding 2: Nhân vật Player bị xoay trong file đĩa Project Basic
* **Mô tả**: `Player` trong `PROJECT_BASIC/scenes/main.tscn` bị lưu rotation $42.5^\circ$.
* **Kết luận**: **`PROJECT_ERROR_FIXED`** — Đã dọn dẹp file `.tscn` về ma trận xoay chuẩn Identity $(0^\circ, 0^\circ, 0^\circ)$ với $X=1.5, Y=0.05, Z=0$.
