# QA DIFF STARTER VS MASTER — B06

**BÀI HỌC**: B06 — Nguy hiểm và điểm kiểm tra  
**NGÀY THỰC HIỆN**: 2026-08-24  
**THỰC HIỆN BỞI**: Antigravity  

---

## 1. DANH SÁCH SO SÁNH KHÁC BIỆT DỰ TÍNH (ALLOWED DIFF)

| Thành phần | Project Basic | Student Starter | Lý do sư phạm |
| :--- | :--- | :--- | :--- |
| `scripts/main.gd` (`_on_checkpoint_activated`) | `respawn_position = pos` | `last_checkpoint_position = pos` | Task A (K12): Tạo lỗi bất đồng bộ state variable giữa ghi checkpoint và đọc respawn |
| `scripts/main.gd` (`respawn_player_state`) | N/A (Hàm hợp nhất `respawn_player()`) | `player.global_position = respawn_position` (đọc sai biến) | Task A (K12): Giúp học sinh học cách trace 2 biến state |
| `scripts/main.gd` (`respawn_player_reference`) | N/A (Hàm hợp nhất `respawn_player()`) | `camera.global_position = respawn_position` | Task B (K29): Tạo lỗi tham chiếu sai đối tượng (Camera3D thay vì Player) |
| `scenes/main.tscn` (Hazards) | `Hazard01`, `Hazard02` | `StateHazard`, `ReferenceHazard` | Tách 2 hazard trong Starter để học sinh kiểm thử độc lập 2 nhiệm vụ debug |

---

## 2. KẾT QUẢ SO SÁNH THỰC TẾ (GIT DIFF)

```diff
--- SNLT2026-HP01-B06-PROJECT_BASIC/scripts/main.gd
+++ SNLT2026-HP01-B06-STUDENT_STARTER/scripts/main.gd
@@ -10,8 +10,19 @@
 func _on_checkpoint_activated(pos: Vector3) -> void:
-	respawn_position = pos
+	last_checkpoint_position = pos

-func respawn_player() -> void:
-	player.global_position = respawn_position
+func respawn_player_state() -> void:
+	player.global_position = respawn_position

+func respawn_player_reference() -> void:
+	camera.global_position = respawn_position
```

---

## 3. ĐÁNH GIÁ

- [x] Khác biệt đúng 100% danh sách được phép.
- [x] Không làm rò rỉ đáp án trực tiếp, giữ nguyên hạ tầng Area3D, Signal và Checkpoint.
- [x] Giữ đúng giới hạn: không có UI/HUD, Save/Load hay State Machine.
