# HƯỚNG DẪN CHỤP ẢNH MINH CHỨNG & TÀI NGUYÊN HỌC LIỆU — B01

Thư mục này lữu trữ toàn bộ **Hình ảnh minh chứng thực tế (Human Test Evidence)** và **Tài nguyên Media** phục vụ:
1. Đưa vào GitHub repository làm bằng chứng QA & Handoff.
2. Trích xuất làm hình ảnh minh họa cho **Hướng dẫn Step-by-Step học sinh**.
3. Sử dụng làm tư liệu hình ảnh cho **Giáo án, Slide giảng dạy và Hồ sơ môn học (Summary/Manifest)**.

---

## 📁 NƠI LƯU ẢNH TRÊN MÁY MAC

Tất cả các tệp ảnh sau khi chụp xong, Anh hãy lưu trực tiếp vào thư mục:
`SNLT2026-HP01-B01/03_EVIDENCE_SCREENSHOTS/`

---

## 📸 DANH MỤC 10 TỆP ẢNH CẦN CHỤP CHI TIẾT (KÈM THAO TÁC CỤ THỂ)

### 1. `B01_HDC_01_project_open.png` — Mở dự án Student Starter thành công
- **Thao tác chụp**: Mở Godot 4.7.1, nạp dự án `B01_HUMAN_TEST_COPY`. Chụp toàn bộ màn hình Editor.
- **Nội dung cần thấy rõ**: Bảng **Scene** bên trái, bảng **FileSystem** ở góc dưới bên trái, thẻ tab `scenes/main.tscn` đang mở ở giữa.
- **Mục đích học liệu**: Dùng minh họa cho **Bước 1** trong Hướng dẫn Step-by-Step & Slide bài giảng.

### 2. `B01_HDC_02_scene_tree.png` — Cấu trúc Cây cảnh (Scene Tree)
- **Thao tác chụp**: Phóng to/chụp rõ khu vực bảng **Scene** ở góc trên bên trái màn hình.
- **Nội dung cần thấy rõ**: Cấu trúc thụt lề Cha-Con: `Main` → `Environment`, `Player`, `View` → `Camera`, `World`.
- **Mục đích học liệu**: Minh họa khái niệm `K01 - Kiến trúc Scene Tree` trong Giáo án & Slide.

### 3. `B01_HDC_03_player_baseline.png` — Vị trí nhân vật mặc định (Baseline Player Position)
- **Thao tác chụp**: Chọn Node `Main/Player` trong bảng Scene. Chụp góc phải bảng **Inspector**.
- **Nội dung cần thấy rõ**: Mục `Transform` → `Position`: `X = 0`, `Y = 0.05`, `Z = 0`.
- **Mục đích học liệu**: Minh chứng vị trí xuất phát ban đầu của học sinh.

### 4. `B01_HDC_04_view_baseline.png` — Góc nhìn camera mặc định (Baseline View Rotation)
- **Thao tác chụp**: Chọn Node `Main/View` trong bảng Scene. Chụp góc phải bảng **Inspector**.
- **Nội dung cần thấy rõ**: Mục `Transform` → `Rotation`: `X = 0°`, `Y = 0°`, `Z = 0°`.
- **Mục đích học liệu**: Minh chứng góc nhìn mặc định chực diện ban đầu.

### 5. `B01_HDC_05_baseline_game.png` — Cửa sổ game chạy mặc định (Baseline Running Game)
- **Thao tác chụp**: Nhấn **F5** chạy game. Chụp toàn bộ cửa sổ game đang chạy.
- **Nội dung cần thấy rõ**: Nhân vật đứng ở giữa sàn xuất phát, góc nhìn thẳng trực diện dọc theo sàn.
- **Mục đích học liệu**: Minh họa cho **Bước 2 (Trải nghiệm Baseline)** trong Hướng dẫn Step-by-Step.

### 6. `B01_HDC_06_player_x_1_5_editor.png` — Thao tác 1: Chỉnh vị trí nhân vật Position X = 1.5
- **Thao tác chụp**: Nhấp vào Node `Player`, ô `Position X` đổi sang `1.5`. Chụp bảng **Inspector** & **Viewport 3D**.
- **Nội dung cần thấy rõ**: Ô `Position X = 1.5` bôi đậm và nhân vật trong Viewport 3D dịch sang bên phải sàn.
- **Mục đích học liệu**: Minh họa cho **Bước 5** trong Hướng dẫn Step-by-Step & Slide.

### 7. `B01_HDC_07_player_x_1_5_run.png` — Cửa sổ game sau khi chỉnh Position X = 1.5
- **Thao tác chụp**: Nhấn **F5** chạy game sau khi chỉnh X = 1.5. Chụp cửa sổ game.
- **Nội dung cần thấy rõ**: Nhân vật xuất phát dịch sang bên phải sàn xuất phát màu xanh ngọc.
- **Mục đích học liệu**: Minh họa kết quả chạy thực tế của Thao tác 1.

### 8. `B01_HDC_08_view_y_25_editor.png` — Thao tác 2: Chỉnh góc xoay View Rotation Y = 25°
- **Thao tác chụp**: Nhấp vào Node `View`, ô `Rotation Y` đổi sang `25`. Chụp bảng **Inspector**.
- **Nội dung cần thấy rõ**: Ô `Rotation Y = 25°` và tầm nhìn Viewport 3D nghiêng chéo 25 độ.
- **Mục đích học liệu**: Minh họa cho **Bước 6** trong Hướng dẫn Step-by-Step & Slide.

### 9. `B01_HDC_09_game_after_view_rotation.png` — Cửa sổ game bao quát 3D sau khi xoay 25°
- **Thao tác chụp**: Nhấn **F5** chạy game. Nhấn `W/A/S/D` di chuyển nhân vật tiến lên. Chụp cửa sổ game.
- **Nội dung cần thấy rõ**: Góc nhìn nghiêng 25 độ chéo bao quát toàn bộ 5 sàn platform 3D phía trước.
- **Mục đích học liệu**: Hình ảnh đại diện đẹp nhất cho Sản phẩm hoàn thành của Học sinh.

### 10. `B01_HDC_10_reopen_persistence.png` — Kiểm tra tính lưu trữ (Save & Reopen)
- **Thao tác chụp**: Nhấn **Ctrl+S** lưu scene → Đóng Godot → Mở lại Godot và dự án `B01_HUMAN_TEST_COPY`. Chụp Editor.
- **Nội dung cần thấy rõ**: `Player Position X = 1.5` và `View Rotation Y = 25°` vẫn còn lưu nguyên vẹn trong Inspector.
- **Mục đích học liệu**: Minh chứng tính ổn định của dự án sau khi học sinh lưu bài.

---

## 🛠️ PHƯƠNG PHÁP CHỤP MÀN HÌNH NHANH TRÊN MAC

1. **Chụp vùng màn hình tùy chọn**: Nhấn phím **`Cmd + Shift + 4`** → Đưa con trỏ kéo quét vùng cần chụp.
2. **Chụp riêng 1 Cửa sổ (Window)**: Nhấn phím **`Cmd + Shift + 4`** → Nhấn phím **Space** → Bấm vào cửa sổ Godot hoặc Cửa sổ Game.
3. **Đổi tên & Di chuyển**:
   * Ảnh chụp xong mặc định nằm ở Desktop.
   * Đổi tên ảnh thành `B01_HDC_01_project_open.png`, `B01_HDC_02_scene_tree.png`,...
   * Kéo toàn bộ 10 file ảnh thả vào thư mục `/Users/mac/Downloads/SNLT2026-HP01/SNLT2026-HP01-B01/03_EVIDENCE_SCREENSHOTS/`.
