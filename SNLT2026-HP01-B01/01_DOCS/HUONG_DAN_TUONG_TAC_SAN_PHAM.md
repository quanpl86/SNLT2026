# HƯỚNG DẪN TƯƠNG TÁC SẢN PHẨM — SNLT2026-HP01-B01

> **Quy chuẩn giao diện**: Mọi thuật ngữ giao diện phần mềm sử dụng nhãn tiếng Anh chuẩn trên Godot (**English UI**), đi kèm tên giải thích tiếng Việt.

## 1. Giới thiệu sản phẩm
Sản phẩm Bài 01 là một dự án mini game 3D Platformer gồm 5 sàn di chuyển, 3 đồng coin trang trí và 1 cờ đích. Trọng tâm bài học là **chơi trải nghiệm**, **đọc cấu trúc Cây cảnh (Scene Tree)** và **thực hiện hai thao tác Remix Transform có chủ đích**.

## 2. Phím điều khiển hạ tầng (Ownership C)
- **`W`**: Di chuyển tiến về phía trước (theo hướng nhìn của Camera).
- **`S`**: Di chuyển lùi về phía sau.
- **`A`**: Di chuyển sang bên trái.
- **`D`**: Di chuyển sang bên phải.
- **Phím khoảng cách (`Space`)**: Nhảy lên cao khi đang đứng trên sàn.

## 3. Cơ chế tự động an toàn
- Nếu nhân vật di chuyển trượt khỏi sàn và rơi xuống vực ($Y < -8.0$), dự án sẽ tự động nạp lại cảnh gốc (Reload Scene) để người chơi không bị kẹt.

## 4. Các điểm tương tác chính cho Học sinh (Ownership B)
1. **Thay đổi vị trí xuất phát (`Main/Player` Position)**:
   - Trong bảng Cảnh (**Scene**), chọn Node `Main/Player`.
   - Trong bảng Thuộc tính (**Inspector**), chọn nhóm Biến đổi (**Transform**) → thay đổi chỉ số Vị trí (**Position**) `X` để thay đổi vị trí xuất phát của nhân vật trên sàn xuất phát `StartPlatform`.
2. **Thay đổi góc nhìn Camera (`Main/View` Rotation)**:
   - Trong bảng Cảnh (**Scene**), chọn Node `Main/View`.
   - Trong bảng Thuộc tính (**Inspector**), chọn nhóm Biến đổi (**Transform**) → thay đổi chỉ số Góc xoay (**Rotation**) `Y` để thay đổi hướng quan sát toàn cảnh màn chơi.
