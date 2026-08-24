# QA DIFF STARTER VS MASTER — B02

**BÀI HỌC**: B02 — Điều khiển nhà thám hiểm  
**NGÀY THỰC HIỆN**: 2026-08-24  
**THỰC HIỆN BỞI**: Antigravity  

---

## 1. DANH SÁCH SO SÁNH KHÁC BIỆT DỰ TÍNH (ALLOWED DIFF)

| Thành phần | Project Basic | Student Starter | Lý do sư phạm |
| :--- | :--- | :--- | :--- |
| `speed` (trên `player.gd`) | `6.0` | `4.0` | Cho học sinh đọc biến `speed`, dự đoán tác động và điều chỉnh |
| `move_right` (trên `project.godot`) | Mapping phím D (`keycode: 68`) | Mảng events trống `[]` | Tạo tình huống học tập thực tế cho CIO04: kết nối phím D với action |

---

## 2. KẾT QUẢ SO SÁNH THỰC TẾ (GIT DIFF)

```diff
--- SNLT2026-HP01-B02-PROJECT_BASIC/project.godot
+++ SNLT2026-HP01-B02-STUDENT_STARTER/project.godot
@@ -13,1 +13,1 @@
-config/name="SNLT2026 HP01 B02 - Dieu khien nha tham hiem (Basic)"
+config/name="SNLT2026 HP01 B02 - Dieu khien nha tham hiem (Starter)"
@@ -30,4 +30,2 @@
 move_right={
 "deadzone": 0.5,
-"events": [Object(InputEventKey,... "keycode":68 ...)
-]
+"events": []
 }

--- SNLT2026-HP01-B02-PROJECT_BASIC/scripts/player.gd
+++ SNLT2026-HP01-B02-STUDENT_STARTER/scripts/player.gd
@@ -4,1 +4,1 @@
-var speed: float = 6.0
+var speed: float = 4.0
```

---

## 3. ĐÁNH GIÁ

- [x] Khác biệt đúng 100% phạm vi được phép.
- [x] Không để rò rỉ đáp án ẩn trong Starter.
- [x] Giữ nguyên 100% hạ tầng Ownership C (Scene, Camera, gravity, jump, collision).
