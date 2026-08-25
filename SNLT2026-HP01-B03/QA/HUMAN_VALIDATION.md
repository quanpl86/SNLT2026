# HUMAN VALIDATION RECORD - BÀI 03

## Trạng thái: PASS
**Ngày xác nhận:** 2026-08-25
**Người xác nhận:** Human (quanpl86)
**Phương thức xác nhận:** Trực tiếp trên Godot Editor thông qua Screenshot.

## Chi tiết Validation
1. **Thiết kế màn chơi (Level Design):** 
   - Xác nhận có đủ 5 bệ nhảy thử thách so le độ cao, 1 bệ bắt đầu, 1 bệ đích.
   - Các vật phẩm (Coin, Star, Jewel) được bố trí hợp lý.
2. **Hình ảnh Asset & Collision (Đã sửa và xác nhận lại):**
   - Đã xử lý triệt để lỗi CollisionShape3D cồng kềnh hơn Visual. Bệ khối hộp sci-fi hiện đã vừa vặn độ dày 1.0 (nhờ căn chỉnh lại scale y = 3.33).
   - Oobi Alien CapsuleShape3D đã được thu nhỏ (`height=0.9, radius=0.3`) để ôm sát model, khắc phục tình trạng lơ lửng.
3. **Nhiệm vụ học sinh:**
   - Học sinh đã được giới hạn phần chỉnh sửa trong Script (thêm Vector Z và hàm is_on_floor).
   - Không yêu cầu học sinh làm Level Design (tuân thủ Ownership C của B03).
