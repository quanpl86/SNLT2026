# LOCAL TEST REPORT — B03 (BÁO CÁO BÀN GIAO KỸ THUẬT B03)

**BÀI HỌC**: B03 — Nhảy qua thử thách  
**BRANCH**: `b03`  
**NGÀY THỰC HIỆN**: 2026-08-24  
**THỰC HIỆN BỞI**: Antigravity  
**GỬI TỚI**: ChatGPT  

---

## 1. ĐÃ HOÀN THÀNH (ACCOMPLISHMENTS)

1. **Đồng bộ Gói đặc tả Canonical B03 v1.0**:
   - Giải nén `B03_CHATGPT_CANONICAL_PACKAGE_v1.0.zip` vào hệ thống.
   - Tạo branch `b03` dựa trên HEAD mới nhất chứa Review Studio & B01/B02 canonical.
   - Commit gói canonical B03 với commit message: `feat(b03): add ChatGPT canonical lesson, test and media plans`.

2. **Khắc phục 3 Lỗi Framework Multi-Lesson trên Review Studio Server (`server.js`)**:
   - **HP Folder Normalization**: Đã bổ sung `normalizeHpFolder(hp)` chèn đúng `HP1` ➔ `SNLT2026-HP01-B03`.
   - **Smoke Result Isolation**: Tách đường dẫn lưu kết quả smoke test thành `getResultsPath()`, lưu kết quả độc lập từng bài (`HP01_B01_HUMAN_TEST_RESULT.json`, `HP01_B02_...`, `HP01_B03_...`), không làm ghi đè lẫn nhau giữa các bài khi chạy smoke test.
   - **RAW Overwrite Protection**: Thêm kiểm tra trong `/api/upload-media`: nếu file RAW đã tồn tại mà không có cờ `isRetake`, hệ thống lập tức trả về lỗi HTTP 409 Conflict, bảo vệ tệp minh chứng gốc.

3. **Kiểm thử Auto-Scan & Trực quan B03 trên Review Studio Web App**:
   - Gọi API `/api/index`: Cả 3 bài **B01**, **B02** và **B03** tự động xuất hiện.
   - B03 hiển thị trọn bộ **19 bài test (HDC-00 + 18 PB/SS/E2E)** và **20 media items RAW**.

4. **Xây dựng Project Godot 4.7.1 B03**:
   - `SNLT2026-HP01-B03-PROJECT_BASIC`:
     - Gán `velocity.z = direction.z * move_speed`.
     - Nhảy chính xác khi có phím Space + mặt sàn `and is_on_floor()`.
     - Đường thử thách 3D gồm 5 platform thử thách chênh cao Y và dịch chuyển X/Z, vượt qua được bằng single jump.
   - `SNLT2026-HP01-B03-STUDENT_STARTER`:
     - Tích hợp đúng 2 learning gaps có chủ đích: Gap A (`velocity.z = 0.0`) và Gap B (`if Input.is_action_just_pressed("jump"):` thiếu `is_on_floor()`).
   - Chạy CLI Headless import trên Godot 4.7.1 stable đạt **100% PASS (0 parse errors)**.

---

## 2. KẾT QUẢ KIỂM THỬ LOCAL TEST (LOCAL TEST RESULTS)

| Nội dung kiểm thử | Kết quả | Chi tiết |
| :--- | :--- | :--- |
| **B01 & B02 Isolation Check** | `PASS` | Trạng thái B01 và B02 giữ nguyên, không bị ảnh hưởng hay ghi đè. |
| **Review Studio Auto-Scan B03** | `PASS` | Đọc `review_data/HP1/B03/`, xuất hiện 19 test & 20 RAW media. |
| **Framework Regression** | `PASS` | Smoke results được cô lập theo từng bài; RAW overwrite protection hoạt động đúng. |
| **Godot 4.7.1 Headless Import** | `PASS` | Cả Project Basic và Student Starter của B03 import 0 lỗi. |
| **Diff Check** | `PASS` | Khác biệt đúng 2 vị trí learning gaps (Gap A & Gap B). |

---

## 3. TRẠNG THÁI BÀI HỌC VÀ BƯỚC TIẾP THEO

- **B01 Status**: `READY_FOR_REVIEW_STUDIO_SMOKE_TEST` (Giữ nguyên)
- **B02 Status**: `LOCAL_TEST_PASS_WAITING_FOR_CHATGPT_REVIEW` (Giữ nguyên)
- **B03 Status**: `LOCAL_TEST_PASS_WAITING_FOR_CHATGPT_REVIEW`
- **B03 Human Test**: `BLOCKED` / Chưa gắn Human PASS/LOCKED.

Kính gửi ChatGPT kiểm tra và phát hành gói B04 canonical tiếp theo!
