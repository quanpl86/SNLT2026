# LOCAL TEST REPORT — B05 (BÁO CÁO BÀN GIAO KỸ THUẬT B05)

**BÀI HỌC**: B05 — Vật phẩm trong thế giới  
**BRANCH**: `b05`  
**NGÀY THỰC HIỆN**: 2026-08-24  
**THỰC HIỆN BỞI**: Antigravity  
**GỬI TỚI**: ChatGPT  

---

## 1. ĐÃ HOÀN THÀNH (ACCOMPLISHMENTS)

1. **Đồng bộ Gói đặc tả Canonical B05 v1.0**:
   - Giải nén `B05_CHATGPT_CANONICAL_PACKAGE_v1.0.zip` vào workspace.
   - Khởi tạo branch `b05` từ HEAD của `b04` (`ded9859`).
   - Commit gói canonical B05 với commit message: `feat(b05): add ChatGPT canonical lesson, test, media plans, and curated Blockbench/GLB asset pack`.

2. **Quản lý Nguồn Asset Pack Blockbench/GLB chính chủ**:
   - Kiểm tra và xác nhận 5 tệp tin asset trong `01_CURATED_ASSET_PACK` khớp SHA-256 100%:
     - `B05_COLLECTIBLE_BLANK.bbmodel`: `84dd392d291c883de46079cf3b60cf353951d9d14964026ea88ee64e0059977d`
     - `B05_COLLECTIBLE_REFERENCE.bbmodel`: `c70a8c4e18f6c7544a878900f493c0141c772cedb44fbdfdb35587ccf5083526`
     - `B05_COLLECTIBLE_PLACEHOLDER_PROGRAM.glb`: `fb61f412e4c29632581f1675cdca1d1a7d36c3f279b6878f58d0e677f43f3e7f`
     - `B05_COLLECTIBLE_REFERENCE_PREVIEW.glb`: `86a2d105452166b3db56c15525d274156f46e773263faa5c892ff8aa806b7b37`
     - `PROGRAM_AUTHORED_ASSETS_LICENSE.txt`: `7c7f59638457aa16127d126e79539bc5ed4f196cdfb5fe62cc441f5cb48bafb7`
   - Đã lập hồ sơ `SOURCE_MANIFEST_B05.json` ghi nhận đầy đủ giấy phép CC-BY-4.0 và kết quả test.

3. **Kiểm thử Auto-Scan & Review Studio Web App**:
   - Gọi API `/api/index`: Tự động phát hiện đủ 5 bài **B01, B02, B03, B04 và B05**.
   - B05 hiển thị trọn bộ **19 bài test (HDC-00 + 18 PB/SS/E2E)** và **23 media items RAW**.

4. **Xây dựng Project Godot 4.7.1 B05 Collectible**:
   - **Scene Collectible**: Root `Area3D` ➔ `CollisionShape3D` (SphereShape3D r=0.6) + `VisualAnchor [Node3D]` ➔ `<GLB instance>`.
   - `SNLT2026-HP01-B05-PROJECT_BASIC`:
     - Tích hợp kết nối tín hiệu `body_entered` trong `_ready()`, phát custom signal `collected.emit(value)` và `queue_free()`. Sử dụng mô hình `B05_COLLECTIBLE_REFERENCE_PREVIEW.glb`.
   - `SNLT2026-HP01-B05-STUDENT_STARTER`:
     - Cài đặt chuẩn Learning Gap K11: Tín hiệu `body_entered` trong `_ready()` chưa được kết nối. Sử dụng mô hình `B05_COLLECTIBLE_PLACEHOLDER_PROGRAM.glb`.
   - Chạy CLI Headless import trên Godot 4.7.1 stable đạt **100% PASS (Exit Code 0, 0 parse errors)**.

---

## 2. KẾT QUẢ KIỂM THỬ LOCAL TEST (LOCAL TEST RESULTS)

| Nội dung kiểm thử | Kết quả | Chi tiết |
| :--- | :--- | :--- |
| **B01-B04 Isolation Check** | `PASS` | Trạng thái B01-B04 giữ nguyên 100%, không bị ảnh hưởng. |
| **Review Studio Auto-Scan B05** | `PASS` | Đọc `review_data/HP1/B05/`, xuất hiện 19 test & 23 RAW media. |
| **Godot 4.7.1 Headless Import** | `PASS` | Cả Project Basic và Student Starter của B05 import 0 lỗi (Exit Code 0). |
| **Diff Check** | `PASS` | Khác biệt đúng vị trí signal `body_entered` và mô hình visual. |
| **Asset License Integrity** | `PASS` | Đầy đủ SHA-256 & provenance cho Blockbench/GLB assets chính chủ. |

---

## 3. TRẠNG THÁI BÀI HỌC VÀ BƯỚC TIẾP THEO

- **B01 Status**: `READY_FOR_REVIEW_STUDIO_SMOKE_TEST` (Giữ nguyên)
- **B02 Status**: `LOCAL_TEST_PASS_WAITING_FOR_CHATGPT_REVIEW` (Giữ nguyên)
- **B03 Status**: `LOCAL_TEST_PASS_WAITING_FOR_CHATGPT_REVIEW` (Giữ nguyên)
- **B04 Status**: `LOCAL_TEST_PASS_WAITING_FOR_CHATGPT_REVIEW` (Giữ nguyên)
- **B05 Status**: `LOCAL_TEST_PASS_WAITING_FOR_CHATGPT_REVIEW`
- **B05 Human Test**: `BLOCKED` / Chưa gắn Human PASS/LOCKED.

Kính gửi ChatGPT kiểm tra và xác nhận!
