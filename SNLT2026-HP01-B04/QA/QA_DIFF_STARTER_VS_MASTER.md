# QA DIFF STARTER VS MASTER — B04

**BÀI HỌC**: B04 — Ôn tập — Thử thách Nền tảng 3D  
**NGÀY THỰC HIỆN**: 2026-08-24  
**THỰC HIỆN BỞI**: Antigravity  

---

## 1. DANH SÁCH SO SÁNH KHÁC BIỆT DỰ TÍNH (ALLOWED DIFF)

| Thành phần | Project Basic | Student Starter | Lý do sư phạm |
| :--- | :--- | :--- | :--- |
| Action `move_right` (trong `project.godot`) | Có sự kiện phím `D` (keycode 68) | Sự kiện phím bị trống (`events: []`) | Bug A (K05 / B02): Học sinh ôn tập cấu hình phím di chuyển sang phải |
| `ChallengePlatform03/CollisionShape3D` (trong `scenes/main.tscn`) | `disabled = false` (hoặc không có cờ disabled) | `disabled = true` | Bug B (K07 / B03): Học sinh nhận biết visual mesh tồn tại nhưng va chạm vật lý bị tắt |

---

## 2. KẾT QUẢ SO SÁNH THỰC TẾ (GIT DIFF)

```diff
--- SNLT2026-HP01-B04-PROJECT_BASIC/project.godot
+++ SNLT2026-HP01-B04-STUDENT_STARTER/project.godot
@@ -28,4 +28,2 @@
 move_right={
 "deadzone": 0.5,
-"events": [Object(InputEventKey,"resource_local_to_scene":false,"resource_name":"","device":-1,"window_id":0,"alt_pressed":false,"shift_pressed":false,"ctrl_pressed":false,"meta_pressed":false,"pressed":false,"keycode":68,"physical_keycode":68,"key_label":68,"unicode":100,"location":0,"echo":false,"script":null)
-]
+"events": []
 }

--- SNLT2026-HP01-B04-PROJECT_BASIC/scenes/main.tscn
+++ SNLT2026-HP01-B04-STUDENT_STARTER/scenes/main.tscn
@@ -141,3 +141,4 @@
 [node name="CollisionShape3D" type="CollisionShape3D" parent="World/ChallengePlatform03" unique_id=1440070239]
+disabled = true
 shape = SubResource("BoxShape3D_plat")
```

---

## 3. ĐÁNH GIÁ

- [x] Khác biệt đúng 100% hai lỗi ôn tập Bug A và Bug B.
- [x] Visual assets (`character.glb`, `brick.glb`) giữa Starter và Master giống hệt nhau.
- [x] Không làm rò rỉ đáp án hoặc làm hỏng hạ tầng Ownership C.
