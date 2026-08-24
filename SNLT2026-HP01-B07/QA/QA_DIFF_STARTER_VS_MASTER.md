# QA DIFF STARTER VS MASTER — B07

**BÀI HỌC**: B07 — Giao diện người chơi  
**NGÀY THỰC HIỆN**: 2026-08-24  
**THỰC HIỆN BỞI**: Antigravity  

---

## 1. DANH SÁCH SO SÁNH KHÁC BIỆT DỰ TÍNH (ALLOWED DIFF)

| Thành phần | Project Basic | Student Starter | Lý do sư phạm |
| :--- | :--- | :--- | :--- |
| `scripts/hud.gd` (`update_crystal_hud`) | `crystal_label.text = "%d/%d" % [value, total]` | `crystal_label.text = "0/5"` | **Gap A (CIO13/K13)**: Hard-coded string để học sinh học cách gán giá trị runtime thật |
| `scripts/main.gd` (`_on_checkpoint_activated`) | `hud.update_checkpoint_hud(true)` | Bị khuyết lệnh gọi update HUD | **Gap B (CIO14)**: Nối luồng signal/state ➔ HUD reference |

---

## 2. KẾT QUẢ SO SÁNH THỰC TẾ (GIT DIFF)

```diff
--- SNLT2026-HP01-B07-PROJECT_BASIC/scripts/hud.gd
+++ SNLT2026-HP01-B07-STUDENT_STARTER/scripts/hud.gd
@@ -7,3 +7,3 @@
 func update_crystal_hud(value: int, total: int) -> void:
-	crystal_label.text = "%d/%d" % [value, total]
+	crystal_label.text = "0/5"

--- SNLT2026-HP01-B07-PROJECT_BASIC/scripts/main.gd
+++ SNLT2026-HP01-B07-STUDENT_STARTER/scripts/main.gd
@@ -20,3 +20,2 @@
 	respawn_position = pos
-	if hud != null:
-		hud.update_checkpoint_hud(true)
```

---

## 3. ĐÁNH GIÁ

- [x] Khác biệt đúng 100% 2 khoảng trống sư phạm được duyệt (Gap A & Gap B).
- [x] Không rò rỉ đáp án trực tiếp trong Starter.
- [x] Giữ đúng giới hạn: Không có Win/Lose screen, Restart button, Level complete UI hay Web export gate.
