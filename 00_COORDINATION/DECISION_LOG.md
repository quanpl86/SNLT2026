# HP1 DECISION LOG

Tệp này ghi nhận tất cả các quyết định đã khóa để các Agent không tự ý thay đổi hoặc tranh luận lại.

---

### DEC-HP1-001
* **Quyết định**: Không sử dụng phần mềm Blender trong toàn bộ Học phần 1.
* **Quy trình Asset**: Blockbench → glTF/GLB → Godot 4.
* **Trạng thái**: `LOCKED`
* **Cơ quan quyết định**: Human + Project Rules

---

### DEC-HP1-002
* **Quyết định**: Giao diện phần mềm Godot luôn dùng **Tiếng Anh (English UI)**.
* **Học liệu & Hướng dẫn**: Viết bằng Tiếng Việt chuẩn.
* **Quy chuẩn trích dẫn UI**: `Tên tiếng Việt (Exact English UI label)` (Ví dụ: `Mở dự án (Import Project)`, `Bảng Thuộc tính (Inspector)`, `Góc xoay (Rotation)`).
* **Trạng thái**: `LOCKED`
* **Cơ quan quyết định**: Human + ChatGPT + Antigravity

---

### DEC-HP1-003
* **Quyết định**: Dự án `STUDENT_STARTER` phải được dẫn xuất từ `PROJECT_BASIC` đã qua QA tĩnh.
* **Trạng thái**: `LOCKED`
* **Cơ quan quyết định**: Antigravity Custom Agent Rules

---

### DEC-HP1-004
* **Quyết định**: Kiến trúc quản lý đa hệ thống:
  * **GitHub (`quanpl86/SNLT2026.git`)**: Là kho quản lý kỹ thuật chính (Source code Godot, GDScript, `.tscn`, `.md`, Specs, QA, PRs).
  * **Google Drive**: Là kho phát hành học liệu Office (`.docx`, `.pptx`, `.xlsx`, `.pdf`) và lưu trữ các ma trận chương trình gốc.
  * **`DOCUMENT_INDEX.md`**: Lưu trữ danh mục liên kết tới Google Drive tại thư mục gốc GitHub.
* **Trạng thái**: `LOCKED`
* **Cơ quan quyết định**: Human + ChatGPT + Antigravity

---

### DEC-HP1-005
* **Quyết định**: Quy trình Git Branching & Pull Request:
  * `main`: Chỉ chứa mã nguồn các bài học đã qua kiểm thử và được phê duyệt khóa.
  * Mỗi bài học đang triển khai dùng branch riêng: `b01`, `b02`, ..., `b12`.
  * Đẩy thay đổi qua PR và chỉ merge vào `main` sau khi Người dùng phê duyệt.
* **Trạng thái**: `LOCKED`
* **Cơ quan quyết định**: ChatGPT + Antigravity
