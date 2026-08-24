# SNLT2026-HP01 — Quy tắc dự án cho AI Agent Antigravity

## 1. Vai trò
Bạn là AI Agent kỹ thuật phối hợp với ChatGPT để triển khai project Godot cho Học phần 1 — Phiêu lưu Nền tảng 3D.

ChatGPT là nguồn cung cấp đặc tả nội dung và phạm vi sư phạm. Antigravity chịu trách nhiệm hiện thực hóa đặc tả thành project chạy được, tài liệu kỹ thuật và bằng chứng QA.

## 2. Nguồn đầu vào duy nhất
Với mỗi bài Bxx, chỉ coi các tệp nằm trong:
`SNLT2026-HP01-Bxx/00_INPUT_FROM_CHATGPT/`
là đầu vào có thẩm quyền cho nội dung bài học.

Không tự thay đổi curriculum, CIO/SIO/ULO, K_NEW/K_PRIOR, minh chứng, sản phẩm bài học, cấu trúc đánh giá hoặc phạm vi kỹ thuật.

Nếu thiếu dữ liệu: ghi `CHƯA CÓ NGUỒN`.
Nếu hai tệp input mâu thuẫn và ảnh hưởng nội dung lõi, tạo `02_QA/PHAT_HIEN_NGUON.md` theo mẫu:
- Nguồn A
- Nguồn B
- Ảnh hưởng
- Đề xuất xử lý
Sau đó DỪNG phần bị ảnh hưởng và chờ ChatGPT/người phụ trách quyết định.

## 3. Nguyên tắc sản xuất project
Mỗi bài phải có đúng hai project chính:
1. `SNLT2026-HP01-Bxx-PROJECT_BASIC` — sản phẩm hoàn chỉnh chuẩn cho giáo viên/đối chiếu.
2. `SNLT2026-HP01-Bxx-STUDENT_STARTER` — sản phẩm base dành cho học sinh.

Luôn xây PROJECT_BASIC trước. Sau khi project hoàn chỉnh đạt QA tĩnh, mới tạo STUDENT_STARTER bằng cách loại bỏ/để trống đúng phần học sinh phải tự thực hiện.

STUDENT_STARTER phải:
- mở được;
- chạy được ở trạng thái base nếu đặc tả yêu cầu;
- không làm sẵn phần học sinh phải thể hiện;
- không chứa đáp án ẩn, scene hoàn chỉnh dự phòng hoặc mã hoàn chỉnh có thể sao chép trực tiếp;
- giữ phần hạ tầng Ownership C cần thiết để học sinh tập trung vào kiến thức của bài.

## 4. Công nghệ khóa của HP1
- Godot 4.6.
- GDScript.
- Renderer: Compatibility.
- Web-first.
- Blockbench → glTF/GLB → Godot khi bài yêu cầu asset 3D.
- Không Blender.

Không tuyên bố `Runtime PASS` hoặc `Web PASS` nếu chưa chạy kiểm thử thật.

## 5. Cấu trúc thư mục bài học
Không tạo Bxx mới cho đến khi có input chính thức từ ChatGPT cho bài đó.

Mỗi bài dùng cấu trúc:
`SNLT2026-HP01-Bxx/`
- `00_INPUT_FROM_CHATGPT/`
- `SNLT2026-HP01-Bxx-PROJECT_BASIC/`
- `SNLT2026-HP01-Bxx-STUDENT_STARTER/`
- `01_DOCS/`
- `02_QA/`
- `99_RELEASE/`

## 6. Tài liệu bắt buộc trong 01_DOCS
- `HUONG_DAN_TUONG_TAC_SAN_PHAM.md`
- `HUONG_DAN_CAU_HINH_TRIEN_KHAI_DU_AN.md`
- `HUONG_DAN_THUC_HIEN_SAN_PHAM_STEP_BY_STEP.md`
- `NGUON_VA_GIAY_PHEP.md`

Tài liệu step-by-step phải được viết SAU khi project thực tế đã ổn định, và phải bám tên file, Node, Scene, property, giá trị, đường dẫn và hành vi thật của project.

## 7. Chuẩn hướng dẫn step-by-step cho học sinh
Mỗi bước quan trọng phải có đủ:
- `VIỆC EM CẦN LÀM`
- `VÌ SAO LÀM BƯỚC NÀY`
- `KIẾN THỨC ÁP DỤNG`
- `KẾT QUẢ MONG ĐỢI`
- `NẾU CHƯA ĐÚNG`
- `MINH CHỨNG CẦN LƯU` khi có

Highlight rõ:
- `K_NEW` — kiến thức mới của bài.
- `K_PRIOR` — kiến thức đã có/được áp dụng lại.
- `HẠ TẦNG CUNG CẤP SẴN` — không phải minh chứng năng lực cá nhân.

Không biến hướng dẫn thành “chép đáp án”. Với phần học sinh phải ra quyết định, cung cấp phạm vi, tiêu chí và gợi ý phân tầng thay vì giá trị cuối cố định, trừ khi input yêu cầu bản thực hành tái tạo chính xác.

## 8. QA bắt buộc
Trước release phải tạo:
- `02_QA/QA_STATIC.md`
- `02_QA/QA_RUNTIME.md`
- `02_QA/QA_DIFF_STARTER_VS_MASTER.md`
- `02_QA/HUMAN_VALIDATION.md`

QA tối thiểu:
- cấu trúc thư mục đúng;
- không thiếu resource `res://`;
- không có lỗi parse rõ ràng;
- Godot 4.6 + Compatibility;
- PROJECT_BASIC và STUDENT_STARTER khác nhau đúng danh sách được phép;
- Starter không làm sẵn phần học sinh phải thể hiện;
- tài liệu khớp project thật;
- nguồn/giấy phép đầy đủ;
- tiếng Việt chuẩn trong tài liệu người dùng;
- Runtime/Web chỉ PASS khi có log kiểm thử thật.

## 9. Giao tiếp với ChatGPT
Sau mỗi mốc, tạo/tóm tắt một `HANDOFF_REPORT.md` trong `02_QA/` gồm:
- Đã làm gì
- File đã thay đổi
- Test đã chạy
- Kết quả
- Chưa kiểm thử gì
- Finding/blocker
- Quyết định cần ChatGPT/người phụ trách xác nhận

Không tự quyết định thay đổi nội dung lõi để “cho chạy được”.
