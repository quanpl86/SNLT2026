# HP1 HUMAN VALIDATION & DOUBLE-CHECK WORKFLOW PROTOCOL

Phân biệt rõ giữa kiểm thử tự động và kiểm thử bởi con người:

CLI/headless PASS ≠ Human PASS

Các cấp độ QA bắt buộc:
1. STATIC_PASS
2. HEADLESS_RUNTIME_PASS
3. VISUAL_VALIDATION
4. HUMAN_TEST_PASS
5. WEB_BROWSER_PASS

Nghiêm cấm tự suy ra:
Exit Code 0 → sản phẩm phù hợp học sinh.

Những tiêu chí cần con người (Human) xác nhận:
- Camera dễ nhìn, dễ quan sát 3D.
- Thao tác di chuyển, nhảy mượt mà.
- Độ khó phù hợp học sinh 12–14 tuổi.
- Thời lượng làm bài nằm trong 120 phút.
- Hướng dẫn rõ ràng, không làm học sinh bị kẹt.

---

## MÔ HÌNH PHỐI HỢP THỰC HIỆN TEST 3 BƯỚC (CANONICAL WORKFLOW RULE)

1. **Bước 1 — Antigravity Code & Local Test Phase**:
   - Triển khai project Godot và chạy các bài test môi trường địa phương.
   - Phản hồi lại kết quả test kèm theo:
     - Báo cáo kết quả test ngắn gọn.
     - Tệp / Nội dung Markdown chi tiết **Checklist các nội dung cần test**.
     - **Hướng dẫn chi tiết từng bước cách test trên Godot** dành cho Human.

2. **Bước 2 — Human Double-Check & Validation Phase**:
   - Người dùng (Human) double-check bằng cách thực hành test trực tiếp trên Godot theo checklist & hướng dẫn từ Antigravity.
   - Người dùng cung cấp hình ảnh minh chứng screenshot, ghi chú kết quả/phản hồi trực tiếp vào file hoặc thông báo chat.

3. **Bước 3 — Post-Validation & Handoff Phase (Bởi Antigravity)**:
   - Sau khi nhận được xác nhận **OK** từ người dùng:
     - Antigravity cập nhật lại code, tài liệu `01_DOCS/`, báo cáo QA `02_QA/`, lưu minh chứng screenshot và cập nhật `00_COORDINATION/`.
     - Thực hiện `git commit` và `git push` lên GitHub.
     - Viết thông điệp/prompt chính thức gửi **ChatGPT** thông báo kết quả hoàn tất và sẵn sàng nhận task bài tiếp theo.
