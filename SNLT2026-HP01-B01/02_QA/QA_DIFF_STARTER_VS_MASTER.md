# BÁO CÁO KHÁC BIỆT (DIFF REPORT): STARTER vs BASIC

**Bài học**: SNLT2026-HP01-B01 — Khám phá trò chơi 3D  
**Ngày kiểm tra**: 2026-08-24  

---

## 1. Tóm tắt sự khác biệt được phép

| Tệp tin | Trạng thái trong Basic (Teacher Canonical) | Trạng thái trong Starter (Student Base) | Lý do sư phạm |
| :--- | :--- | :--- | :--- |
| `project.godot` | Name: `... (Basic)` | Name: `... (Student Starter)` | Phân biệt dự án trong Godot Project Manager. |
| `scenes/main.tscn` | `Player` Position: `(1.5, 0.05, 0)` | `Player` Position: `(0, 0.05, 0)` | Học sinh tự thực hiện thay đổi Transform Position. |
| `scenes/main.tscn` | `View` Rotation Y: `25°` | `View` Rotation Y: `0°` | Học sinh tự thực hiện thay đổi Transform Rotation. |
| Root README | `README_DOI_CHIEU.md` | `README_HOC_SINH.md` | Hướng dẫn đúng đối tượng người dùng. |
| `evidence/` | `PHUONG_AN_CHUAN_B01.md` | `HO_SO_MINH_CHUNG_B01.md` | Bản đối chiếu mẫu (Basic) vs Mẫu trống (Starter). |

---

## 2. Kiểm tra tính đồng nhất hạ tầng (Zero Discrepancy Gate)
Các tệp dưới đây cam kết **giống nhau 100%**:
- `scripts/player.gd` — PASS
- `scripts/view.gd` — PASS
- `objects/player.tscn` — PASS
- `docs/PHUC_HOI_GIA_TRI_MAC_DINH.md` — PASS
- `docs/NGUON_VA_GIAY_PHEP.md` — PASS

---

## 3. Xác nhận Ranh giới Năng lực (Student Work Boundary Check)
- [x] `STUDENT_STARTER` mở được và chạy được ở trạng thái baseline.
- [x] `STUDENT_STARTER` **không làm sẵn** phần học sinh phải thể hiện (Player X = 0, View Y = 0°).
- [x] `STUDENT_STARTER` **không chứa** đáp án ẩn hoặc code hoàn chỉnh bị comment out.
- [x] Hồ sơ minh chứng trong `STUDENT_STARTER` để trống hoàn toàn cho học sinh tự điền.
