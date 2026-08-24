# QA DIFF STARTER VS MASTER — B09

**BÀI HỌC**: B09 — Ôn tập — Bản thử nghiệm Phiêu lưu Nền tảng 3D  
**NGÀY THỰC HIỆN**: 2026-08-24  
**THỰC HIỆN BỞI**: Antigravity  

---

## 1. DANH SÁCH SO SÁNH KHÁC BIỆT DỰ TÍNH (ALLOWED DIFF)

| Thành phần | Project Basic | Student Starter | Lý do sư phạm |
| :--- | :--- | :--- | :--- |
| `scenes/main.tscn` (`Collectible05` position) | `transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 3.65, -20.2)` | `transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 15.0, -20.2)` | **CIO18 (Single Integration Blocker)**: BetaCrystal05 nằm ở y=15m trên không không thể tiếp cận. Học sinh dùng Transform/Position để hạ xuống y=3.65m |

---

## 2. KẾT QUẢ SO SÁNH THỰC TẾ (GIT DIFF)

```diff
--- SNLT2026-HP01-B09-PROJECT_BASIC/scenes/main.tscn
+++ SNLT2026-HP01-B09-STUDENT_STARTER/scenes/main.tscn
@@ -142,3 +142,4 @@
 [node name="Collectible05" parent="World/Collectibles" instance=ExtResource("5_collectible_scene")]
-transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 3.65, -20.2)
+# UNREACHABLE BETA BLOCKER (CIO18): BetaCrystal05 nằm ở y=15.0m trên không, không thể tiếp cận bằng jump thường!
+transform = Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 15.0, -20.2)
```

---

## 3. ĐÁNH GIÁ

- [x] Khác biệt đúng 100% 1 khoảng trống sư phạm duy nhất (Beta Crystal 05 Position Blocker).
- [x] Luật thắng B08 (`if crystal_count >= target_count:`) giữ nguyên 100%, không bị sửa đổi.
- [x] Web export preset (`export_presets.cfg`) và Web build xuất bản đúng chuẩn Compatibility.
