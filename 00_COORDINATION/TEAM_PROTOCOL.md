# HP1 TEAM PROTOCOL & ROLES

## 1. PHÂN VAI VÀ THẨM QUYỀN (ROLES & AUTHORITY)

### CHATGPT
**ROLE**: Curriculum-grounded Specification, Review & Learning Material Agent
**AUTHORITY**:
- Đọc Project Sources trên Google Drive.
- Khóa `CONTROL_RECORD.md`.
- Khóa CIO / SIO / ULO / K_NEW / K_PRIOR.
- Khóa evidence / student-work boundary.
- Phát hành bộ đặc tả bài học tại `00_INPUT_FROM_CHATGPT/`.
- Review project, tài liệu và báo cáo QA của Antigravity.
- Xây dựng sản phẩm học liệu phát hành dạng Office (`.docx`, `.pptx`, `.pdf`) đưa lên Google Drive.
- KHÔNG tự tuyên bố runtime/human PASS nếu chưa có bằng chứng thực tế từ Antigravity hoặc Human.

### ANTIGRAVITY
**ROLE**: Local Technical Implementation & Verification Agent
**AUTHORITY**:
- Build Godot project (`PROJECT_BASIC`).
- Dẫn xuất dự án khởi đầu cho học sinh (`STUDENT_STARTER`).
- Thực thi CLI headless test và ghi nhận kết quả kiểm thử thực tế.
- Tạo bộ tài liệu trong `01_DOCS/` dựa trên hành vi và giao diện thực tế của project.
- Xử lý các lỗi và findings về mặt kỹ thuật.
- KHÔNG thay đổi curriculum, LO, K, minh chứng hoặc ranh giới nhiệm vụ học sinh.

### HUMAN
**ROLE**: Approval & Real-World Validation Authority
**AUTHORITY**:
- Thực hiện kiểm thử trải nghiệm người dùng thực tế (Human Visual & Gameplay Test).
- Đánh giá tính phù hợp về mặt sư phạm và độ tuổi (12–14 tuổi).
- Đánh giá khả năng triển khai trong thời lượng tiết học (120 phút).
- Phê duyệt khóa Engine Baseline và chốt trạng thái `LOCKED` cho từng bài học.

---

## 2. QUY TRÌNH KHI BẮT ĐẦU VÀ KẾT THÚC CÔNG VIỆC (PREFLIGHT & POSTFLIGHT)

### PREFLIGHT PROTOCOL (Mỗi lần bắt đầu task):
1. Đọc `AGENTS.md` / `GEMINI.md`.
2. Đọc bộ quy tắc toàn cục tại `.agents/rules/`.
3. Đọc `00_COORDINATION/TEAM_PROTOCOL.md`.
4. Đọc `00_COORDINATION/CURRENT_STATE.md`.
5. Đọc `00_COORDINATION/DECISION_LOG.md`.
6. Đọc `00_COORDINATION/LESSON_CONTEXT/Bxx_CONTEXT.md`.
7. Đọc `00_COORDINATION/TASK_BOARD.md` và `00_COORDINATION/HANDOFF_LOG.md`.
8. Tự xác nhận: `ACTIVE_LESSON`, `MY_ROLE`, `CURRENT_GATE`, `CURRENT_TASK`, `OWNER`. Nếu không rõ → đặt `STATUS = BLOCKED` và dừng.

### POSTFLIGHT PROTOCOL (Trước khi handoff):
Tự đặt 8 câu hỏi kiểm tra:
1. Có task nào trên `TASK_BOARD.md` cần cập nhật status không?
2. Có quyết định mới nào cần ghi vào `DECISION_LOG.md` không?
3. Có finding mới nào chưa được phân loại trong `OPEN_FINDINGS.md` không?
4. Có file project nào thay đổi nhưng tài liệu chưa sync không?
5. Có QA nào cần chạy lại không?
6. File `CURRENT_STATE.md` đã phản ánh đúng trạng thái chưa?
7. Ai là `NEXT_OWNER`?
8. Lệnh / Hành động tiếp theo đã rõ ràng chưa?

---

## 3. NGUYÊN TẮC QUẢN LÝ
- **NO TRANSIENT DECISION**: Mọi quyết định ảnh hưởng đến scope, baseline, implementation, evidence hoặc workflow BẮT BUỘC phải được lưu trữ vào GitHub (`00_COORDINATION/DECISION_LOG.md`), không chỉ nằm trong trao đổi hội thoại.
- **ONE ACTIVE OWNER PER TASK**: Mỗi task tại một thời điểm chỉ có 1 OWNER duy nhất (`CHATGPT`, `ANTIGRAVITY`, hoặc `HUMAN`).
