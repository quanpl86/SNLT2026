# Cấu hình Antigravity — SNLT2026-HP01

## Mục đích
Thiết lập một workflow kỹ thuật ổn định để ChatGPT cung cấp đặc tả sư phạm/nội dung, còn Antigravity triển khai code, project, tài liệu kỹ thuật và QA.

## Cách dùng
1. Mở thư mục `SNLT2026-HP01` làm workspace trong Antigravity.
2. Kiểm tra custom agent `hp1-lesson-project-builder` xuất hiện trong Agent Manager.
3. Với bài đang triển khai, ChatGPT điền input vào `SNLT2026-HP01-Bxx/00_INPUT_FROM_CHATGPT/`.
4. Đặt `MANIFEST.md` thành `READY_FOR_IMPLEMENTATION` khi input đã đủ.
5. Gửi prompt trong `00_TEMPLATES/ANTIGRAVITY_HANDOFF_PROMPT_TEMPLATE.md`.
6. Review `02_QA/HANDOFF_REPORT.md` sau khi agent hoàn thành.
7. Người phụ trách chạy lại project và step-by-step. Finding quay lại ChatGPT → cập nhật input → Antigravity sửa project → kiểm lại → khóa.

## Nguyên tắc phối hợp
ChatGPT quyết định WHAT/WHY/BOUNDARY.
Antigravity thực hiện HOW/BUILD/TEST.
Con người xác nhận USABILITY/RUNTIME/RELEASE.
