# TÀI LIỆU KHÔI PHỤC GIÁ TRỊ MẶC ĐỊNH (BASELINE RESTORE GUIDE)

Khi thực hành, nếu gặp sự cố kẹt hoặc muốn khôi phục về trạng thái ban đầu của Học sinh (Student Starter), hãy chọn các Node tương ứng trong Scene Tree và đặt lại thuộc tính trong bảng **Inspector → Transform**:

## 1. Khôi phục Vị trí Nhân vật (Player Position)
- **Node**: `Main/Player`
- **Thẻ**: Inspector → Transform → Position
- **Giá trị gốc**:
  - `X`: `0.0`
  - `Y`: `0.05`
  - `Z`: `0.0`

## 2. Khôi phục Góc nhìn (View Rotation)
- **Node**: `Main/View`
- **Thẻ**: Inspector → Transform → Rotation
- **Giá trị gốc**:
  - `X`: `0.0°`
  - `Y`: `0.0°`
  - `Z`: `0.0°`

## 3. Thông số Camera (Hạ tầng C - Không cần tự chỉnh)
- **Node**: `Main/View/Camera`
- **Inspector → Transform → Position**: `(0.0, 3.4, 7.5)`
- **Inspector → Transform → Rotation**: `(-20.0°, 0.0°, 0.0°)`
- **FOV**: `52.0`
- **Current**: `true`
