# HƯỚNG DẪN THỰC HIỆN SẢN PHẨM STEP-BY-STEP — B01

Chào mừng em đến với bài thực hành **Khám phá trò chơi 3D**! Dưới đây là từng bước chi tiết giúp em làm chủ dự án game 3D đầu tiên trên phần mềm Godot.

> **Quy chuẩn giao diện**: Mọi hướng dẫn bên dưới sử dụng giao diện phần mềm bằng **Tiếng Anh (English UI)**. Các thao tác giao diện được trình bày dạng: **Tên Tiếng Việt (Nhãn English UI chính xác)**.

---

### BƯỚC 1 — Mở dự án khởi đầu (Student Starter)
**VIỆC EM CẦN LÀM**:
- Mở phần mềm Godot 4.7.1 stable.
- Tại Trình quản lý dự án (**Project Manager**), nhấn nút Nạp dự án (**Import**).
- Nhấn Duyệt tệp (**Browse**) và chọn tới tệp:
  `SNLT2026-HP01-B01/SNLT2026-HP01-B01-STUDENT_STARTER/project.godot`
- Nhấn Nạp & Chỉnh sửa (**Import & Edit**).

**VÌ SAO LÀM BƯỚC NÀY**: Để nạp dự án khởi đầu dành cho học sinh vào Trình chỉnh sửa (**Editor**).

**KIẾN THỨC ÁP DỤNG**: `[HẠ TẦNG CUNG CẤP SẴN]`

**KẾT QUẢ MONG ĐỢI**: Giao diện Trình chỉnh sửa (**Editor**) mở ra với bảng Cây cảnh (**Scene**) ở góc trên bên trái và bảng Hệ thống tệp (**FileSystem**) ở góc dưới bên trái.

**NẾU CHƯA ĐÚNG**: Kiểm tra lại xem em đã chọn đúng thư mục `STUDENT_STARTER` chưa.

---

### BƯỚC 2 — Chạy thử dự án ở trạng thái ban đầu (Baseline)
**VIỆC EM CẦN LÀM**:
- Nhấn nút Chạy dự án (**Run Project**) ở góc trên bên phải (hoặc nhấn phím **F5**).
- Dùng các phím `W`, `A`, `S`, `D` để di chuyển nhân vật và phím khoảng cách (`Space`) để nhảy thử qua các sàn platform.
- Nhấn nút Dừng (**Stop**) ở góc trên bên phải (hoặc phím **F8**) để quay lại Trình chỉnh sửa (**Editor**).

**VÌ SAO LÀM BƯỚC NÀY**: Để trải nghiệm trực tiếp trạng thái mặc định ban đầu của dự án trước khi thực hiện phân tích và chỉnh sửa.

**KIẾN THỨC ÁP DỤNG**: `[HẠ TẦNG CUNG CẤP SẴN]`

**KẾT QUẢ MONG ĐỢI**: Cửa sổ game mở ra, nhân vật xuất phát tại giữa sàn đầu tiên và nhảy di chuyển bình thường.

**NẾU CHƯA ĐÚNG**: Nếu chưa thấy nhân vật di chuyển, nhấp chuột vào cửa sổ game để kích hoạt tâm điều khiển.

---

### BƯỚC 3 — Khám phá Cấu trúc Cây cảnh (Scene Tree)
**VIỆC EM CẦN LÀM**:
- Trong Trình chỉnh sửa (**Editor**), nhấp chuột vào tệp `scenes/main.tscn` trong bảng Hệ thống tệp (**FileSystem**).
- Quan sát bảng Cảnh (**Scene**) ở góc trên bên trái.
- Nhấp vào biểu tượng mũi tên để mở rộng các Node con bên trong: `Environment`, `Player`, `View`, `World`.

**VÌ SAO LÀM BƯỚC NÀY**: Để nhận biết mối quan hệ Cha–Con (thụt lề) giữa các Node trong cấu trúc **Scene Tree**.

**KIẾN THỨC ÁP DỤNG**: `[K_NEW] K01 — Kiến trúc Node – Scene – Scene Tree`

**KẾT QUẢ MONG ĐỢI**: Em thấy `Main` là Node gốc (Root Node). `Camera` nằm thụt lề bên trong (là Node con của) `View`.

**NẾU CHƯA ĐÚNG**: Nếu bảng Cảnh (**Scene**) bị rỗng, hãy đúp chuột vào tệp `scenes/main.tscn` trong bảng Hệ thống tệp (**FileSystem**).

**MINH CHỨNG CẦN LƯU**: Ghi sơ đồ cấu trúc Node vào phần **Part 1** trong tệp `evidence/HO_SO_MINH_CHUNG_B01.md`.

---

### BƯỚC 4 — Phân tích Cảnh con (Sub-scene Player)
**VIỆC EM CẦN LÀM**:
- Trong bảng Hệ thống tệp (**FileSystem**), đúp chuột vào tệp `objects/player.tscn`.
- Quan sát danh sách Node con bên trong `player.tscn`.

**VÌ SAO LÀM BƯỚC NÀY**: Để hiểu rằng một Node trong Scene chính (như `Player`) thực chất có thể là một Cảnh con (**Sub-scene**) được lắp ghép từ nhiều Node thành phần (Collider, Body, Visor, Marker).

**KIẾN THỨC ÁP DỤNG**: `[K_NEW] K01 — Mối quan hệ Node và Sub-scene`

**KẾT QUẢ MONG ĐỢI**: Mở ra một thẻ tab mới mang tên `player.tscn` hiển thị chi tiết các khối tạo hình nên nhân vật.

---

### BƯỚC 5 — Thực hiện Thao tác 1: Vị trí Nhân vật (Player Position)
**VIỆC EM CẦN LÀM**:
- Chuyển quay lại thẻ tab cảnh chính `scenes/main.tscn`.
- Trong bảng Cảnh (**Scene**), nhấp chọn Node `Main/Player`.
- Quan sát bảng Thuộc tính (**Inspector**) ở góc phải → mở nhóm Biến đổi (**Transform**) → xem chỉ số Vị trí (**Position**).
- **Đọc giá trị ban đầu**: `X = 0`, `Y = 0.05`, `Z = 0`.
- **Đặt mục tiêu & Dự đoán**: Ghi dự đoán vào hồ sơ minh chứng (Ví dụ: "Nếu tăng X lên 1.5, nhân vật sẽ di chuyển sang bên phải sàn xuất phát").
- **Nhập giá trị mới**: Nhấp chuột vào ô `X` và nhập giá trị thử nghiệm `1.5` (hoặc một số từ 0.5 đến 2.0), sau đó nhấn **Enter**.
- Nhấn nút Chạy dự án (**Run Project**, phím **F5**) để kiểm tra vị trí xuất phát mới của nhân vật.
- Đưa ra quyết định **Giữ hay Hoàn tác** và giải thích lý do.

**VÌ SAO LÀM BƯỚC NÀY**: Để làm chủ thuộc tính Vị trí (**Position**) thuộc nhóm Biến đổi (**Transform**) trong không gian 3D.

**KIẾN THỨC ÁP DỤNG**: `[K_NEW] K02 — Transform 3D: Position`

**KẾT QUẢ MONG ĐỢI**: Nhân vật xuất phát dịch sang bên phải trên sàn xuất phát màu xanh ngọc nhưng vẫn đứng an toàn.

**NẾU CHƯA ĐÚNG**: Nếu nhập X quá lớn làm nhân vật rơi khỏi sàn, hãy nhấp vào nút Hoàn tác (**Undo**, phím `Ctrl + Z` trên Windows / `Cmd + Z` trên Mac) hoặc sửa ô `X` về lại `1.5`.

**MINH CHỨNG CẦN LƯU**: Ghi nhận số liệu và câu giải thích vào **Part 2.1** trong tệp `evidence/HO_SO_MINH_CHUNG_B01.md`.

---

### BƯỚC 6 — Thực hiện Thao tác 2: Góc nhìn Camera (View Rotation)
**VIỆC EM CẦN LÀM**:
- Trong bảng Cảnh (**Scene**), nhấp chọn Node `Main/View`.
- Trong bảng Thuộc tính (**Inspector**) → nhóm Biến đổi (**Transform**) → xem mục Góc xoay (**Rotation**).
- **Đọc giá trị ban đầu**: `X = 0°`, `Y = 0°`, `Z = 0°`.
- **Đặt mục tiêu & Dự đoán**: Dự đoán hướng quan sát của camera khi xoay góc theo trục đứng Y.
- **Nhập giá trị thử nghiệm**: Nhấp chuột vào ô `Y` trong nhóm Góc xoay (**Rotation**) và nhập `25` (xoay 25 độ), nhấn **Enter**.
- Nhấn nút Chạy dự án (**Run Project**, phím **F5**) để quan sát sự thay đổi tầm nhìn trong game.
- Đưa ra quyết định **Giữ hay Hoàn tác** và giải thích lý do.

**VÌ SAO LÀM BƯỚC NÀY**: Để hiểu cách sử dụng thuộc tính Góc xoay (**Rotation**) phối hợp với Camera3D nhằm điều chỉnh góc quan sát của người chơi.

**KIẾN THỨC ÁP DỤNG**: `[K_NEW] K02 — Transform 3D: Rotation` & `[K_NEW] K09 — Camera3D & Góc nhìn`

**KẾT QUẢ MONG ĐỢI**: Góc nhìn quan sát xoay nghiêng 25 độ chéo, tạo tầm nhìn 3D bao quát hơn về phía chuỗi sàn platform.

**NẾU CHƯA ĐÚNG**: Đảm bảo em chọn đúng Node `Main/View` trong bảng Cảnh (**Scene**) chứ không chỉnh trực tiếp `Camera` bên trong.

**MINH CHỨNG CẦN LƯU**: Ghi nhận số liệu và câu giải thích vào **Part 2.2** trong tệp `evidence/HO_SO_MINH_CHUNG_B01.md`.

---

### BƯỚC 7 — Lưu dự án và hoàn thành Hồ sơ minh chứng
**VIỆC EM CẦN LÀM**:
- Nhấn phím lưu Cảnh (**Save Scene**, `Ctrl + S` trên Windows / `Cmd + S` trên Mac).
- Mở tệp `evidence/HO_SO_MINH_CHUNG_B01.md` trong bảng Hệ thống tệp (**FileSystem**) và hoàn thiện toàn bộ phần trả lời.

**VÌ SAO LÀM BƯỚC NÀY**: Để lưu trữ kết quả thực hành và hoàn thiện minh chứng năng lực cá nhân.

**KIẾN THỨC ÁP DỤNG**: `[MINH CHỨNG CẦN LƯU]`
