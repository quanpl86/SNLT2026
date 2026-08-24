# QA DIFF STARTER VS MASTER — B08

**BÀI HỌC**: B08 — Luật thắng và trải nghiệm trò chơi  
**NGÀY THỰC HIỆN**: 2026-08-24  
**THỰC HIỆN BỞI**: Antigravity  

---

## 1. DANH SÁCH SO SÁNH KHÁC BIỆT DỰ TÍNH (ALLOWED DIFF)

| Thành phần | Project Basic | Student Starter | Lý do sư phạm |
| :--- | :--- | :--- | :--- |
| `scripts/main.gd` (`_on_goal_reached`) | `if crystal_count >= target_count: finish_game()` | `finish_game()` | **Gap A (CIO15/K15)**: Thắng quá sớm, khuyết kiểm tra số lượng vật phẩm |
| `scripts/main.gd` (`restart_game`) | `get_tree().reload_current_scene()` | `player.global_position = start_position` | **Gap B (CIO15/K15)**: Dirty restart, giữ nguyên state thay vì tạo lượt chơi mới |

---

## 2. KẾT QUẢ SO SÁNH THỰC TẾ (GIT DIFF)

```diff
--- SNLT2026-HP01-B08-PROJECT_BASIC/scripts/main.gd
+++ SNLT2026-HP01-B08-STUDENT_STARTER/scripts/main.gd
@@ -32,3 +32,2 @@
 func _on_goal_reached() -> void:
 	if is_finished: return
-	if crystal_count >= target_count:
 	finish_game()
@@ -43,3 +42,4 @@
 func restart_game() -> void:
-	get_tree().reload_current_scene()
+	if player != null:
+		player.global_position = start_position
```

---

## 3. ĐÁNH GIÁ

- [x] Khác biệt đúng 100% 2 khoảng trống sư phạm được duyệt (Gap A: Early Win & Gap B: Dirty Restart).
- [x] Không rò rỉ đáp án trực tiếp trong Starter.
- [x] Web export preset (`export_presets.cfg`) và Web build xuất bản đúng chuẩn Compatibility.
