# QA DIFF STARTER VS MASTER — B05

**BÀI HỌC**: B05 — Vật phẩm trong thế giới  
**NGÀY THỰC HIỆN**: 2026-08-24  
**THỰC HIỆN BỞI**: Antigravity  

---

## 1. DANH SÁCH SO SÁNH KHÁC BIỆT DỰ TÍNH (ALLOWED DIFF)

| Thành phần | Project Basic | Student Starter | Lý do sư phạm |
| :--- | :--- | :--- | :--- |
| `scripts/collectible.gd` (`_ready()`) | `body_entered.connect(_on_body_entered)` | `pass # B05 TODO` | Learning Gap K11: Học sinh tự học cách kết nối signal trong GDScript |
| Mô hình Visual dưới `VisualAnchor` | `B05_COLLECTIBLE_REFERENCE_PREVIEW.glb` | `B05_COLLECTIBLE_PLACEHOLDER_PROGRAM.glb` | Starter dùng placeholder để học sinh tự tạo asset Blockbench mới và thay thế dưới `VisualAnchor` |

---

## 2. KẾT QUẢ SO SÁNH THỰC TẾ (GIT DIFF)

```diff
--- SNLT2026-HP01-B05-PROJECT_BASIC/scripts/collectible.gd
+++ SNLT2026-HP01-B05-STUDENT_STARTER/scripts/collectible.gd
@@ -8,1 +8,2 @@
 func _ready() -> void:
-	body_entered.connect(_on_body_entered)
+	# B05 TODO: Học sinh kết nối tín hiệu body_entered tại đây!
+	pass

--- SNLT2026-HP01-B05-PROJECT_BASIC/objects/collectible.tscn
+++ SNLT2026-HP01-B05-STUDENT_STARTER/objects/collectible.tscn
@@ -4,1 +4,1 @@
-[ext_resource type="PackedScene" path="res://assets/blockbench/B05_COLLECTIBLE_REFERENCE_PREVIEW.glb" id="2_reference_glb"]
+[ext_resource type="PackedScene" path="res://assets/blockbench/B05_COLLECTIBLE_PLACEHOLDER_PROGRAM.glb" id="2_placeholder_glb"]
```

---

## 3. ĐÁNH GIÁ

- [x] Khác biệt đúng 100% hai vị trí quy định (tín hiệu signal `body_entered` và mô hình placeholder/reference visual).
- [x] Hạ tầng Area3D, CollisionShape3D, VisualAnchor và logic callback `_on_body_entered()` được giữ nguyên.
- [x] Không làm rò rỉ đáp án hoặc làm hỏng hạ tầng Ownership C.
