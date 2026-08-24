# QA DIFF STARTER VS MASTER — B03

**BÀI HỌC**: B03 — Nhảy qua thử thách  
**NGÀY THỰC HIỆN**: 2026-08-24  
**THỰC HIỆN BỞI**: Antigravity  

---

## 1. DANH SÁCH SO SÁNH KHÁC BIỆT DỰ TÍNH (ALLOWED DIFF)

| Thành phần | Project Basic | Student Starter | Lý do sư phạm |
| :--- | :--- | :--- | :--- |
| Jump condition (trên `player.gd`) | `if Input.is_action_just_pressed("jump") and is_on_floor():` | `if Input.is_action_just_pressed("jump"):` | Cố ý thiếu `is_on_floor()` (Gap B) để học sinh chẩn đoán lỗi air-jump và áp dụng toán tử `and` |
| Di chuyển Z (trên `player.gd`) | `velocity.z = direction.z * move_speed` | `velocity.z = 0.0` | Cố ý gán 0.0 (Gap A) để học sinh đọc Vector3, sửa di chuyển trục Z |

---

## 2. KẾT QUẢ SO SÁNH THỰC TẾ (GIT DIFF)

```diff
--- SNLT2026-HP01-B03-PROJECT_BASIC/scripts/player.gd
+++ SNLT2026-HP01-B03-STUDENT_STARTER/scripts/player.gd
@@ -19,3 +19,3 @@
-	if Input.is_action_just_pressed("jump") and is_on_floor():
+	if Input.is_action_just_pressed("jump"):
 		velocity.y = jump_speed
@@ -37,3 +37,3 @@
 		velocity.x = direction.x * move_speed
-		velocity.z = direction.z * move_speed
+		velocity.z = 0.0
```

---

## 3. ĐÁNH GIÁ

- [x] Khác biệt đúng 100% hai learning gaps A và B được chỉ định.
- [x] Không làm rò rỉ đáp án trong Starter.
- [x] Giữ nguyên hạ tầng Ownership C (Camera, gravity, scene layout, collision shapes).
