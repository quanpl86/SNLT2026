# HP1 AGENT COLLABORATION PROTOCOL

Rule thứ 7 trong bộ quy tắc toàn cục (Global Rules).

---

## 1. NGUYÊN TẮC MEMORY CHÍNH THỨC
- **GitHub Repository (`quanpl86/SNLT2026.git`)** là "Bộ nhớ dùng chung + Bảng công việc + Nhật ký bàn giao" chính thức duy nhất giữa ChatGPT và Antigravity.
- Các trao đổi trong cửa sổ chat KHÔNG phải là nguồn lưu trữ trạng thái có hiệu lực lâu dài nếu chưa được serialize vào GitHub.

---

## 2. QUY TRÌNH PREFLIGHT & POSTFLIGHT
Mỗi lượt xử lý công việc:
1. **Preflight**: Bắt buộc đọc `00_COORDINATION/TEAM_PROTOCOL.md`, `CURRENT_STATE.md`, `DECISION_LOG.md`, `HANDOFF_LOG.md`, và `TASK_BOARD.md` trước khi thực hiện bất kỳ thao tác nào.
2. **Postflight**: Cập nhật tóm tắt trạng thái công việc vào `00_COORDINATION/TASK_BOARD.md`, `HANDOFF_LOG.md` và `CURRENT_STATE.md` trước khi báo bàn giao.

---

## 3. NGUYÊN TẮC NO TRANSIENT DECISION
- Mọi quyết định thay đổi về scope, baseline, implementation, evidence, workflow hay UI language BẮT BUỘC phải được ghi nhận vào `00_COORDINATION/DECISION_LOG.md`.

---

## 4. QUY TRÌNH PHÂN VAI SINGLE OWNER
- Mỗi task tại một thời điểm chỉ có duy nhất một Owner (`CHATGPT`, `ANTIGRAVITY`, hoặc `HUMAN`).
- Không thực hiện song song các chỉnh sửa mâu thuẫn trên cùng một tài nguyên khi chưa có chuyển giao Owner rõ ràng trong `HANDOFF_LOG.md`.
