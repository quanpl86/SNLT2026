# KNOWLEDGE APPLICATION — B01

## Nguyên tắc highlight trong tài liệu
Mỗi bước quan trọng phải gắn một hoặc nhiều nhãn:
- `[K_NEW]` — kiến thức mới của B1.
- `[K_PRIOR]` — kiến thức đã được hình thành ở bước trước và đang được dùng lại.
- `[HẠ TẦNG CUNG CẤP SẴN]` — phần project chạy nhưng không phải minh chứng học sinh.
- `[MINH CHỨNG]` — phần phải lưu/giải thích.

## K01 — Node – Scene – Scene Tree `[K_NEW]`
Học sinh phải:
- nhận biết Node là thành phần trong Scene Tree;
- nhận biết quan hệ cha–con qua thụt lề;
- nhận biết `Main` là scene chính;
- mở `player.tscn` để thấy Player scene có nhiều Node con;
- dùng project thật để giải thích, không chỉ học thuộc định nghĩa.

Áp dụng tại:
- đọc `Main` Scene Tree;
- mở `Player` scene;
- điền sơ đồ cấu trúc;
- giải thích `View` là cha của `Camera`.

## K02 — Transform 3D `[K_NEW]`
Học sinh phải nhận biết:
- Position = vị trí;
- Rotation = hướng xoay;
- Scale = tỉ lệ;
- x/y/z là ba trục 3D ở mức nhận biết và thao tác Inspector.

Không dạy phép toán Vector3 ở B1.

Áp dụng tại:
- đọc Player Position;
- dự đoán rồi thay đổi Player Position;
- đọc View Rotation;
- so sánh trước/sau.

## K09 — Camera3D `[K_NEW]`
Học sinh phải hiểu:
- Camera3D quyết định góc nhìn khi game chạy;
- Camera là con của View trong project B1;
- thay Rotation của View làm thay đổi hướng quan sát của cụm camera;
- thay đổi camera/góc nhìn cần được chạy kiểm chứng.

Áp dụng tại:
- xác định `View/Camera` trong Scene Tree;
- quan sát Camera property;
- thay View Rotation;
- giải thích ảnh hưởng tới trải nghiệm.

## K_PRIOR trong chính B1
B1 là bài đầu nên không có K_PRIOR từ bài trước. Tuy nhiên, khi sang CIO02:
- K01 và K02 đã được hình thành ở phần đầu bài và được dùng lại như `[K_PRIOR]`.

## Các khái niệm kỹ thuật xuất hiện trong hạ tầng nhưng KHÔNG là LO B1
- CharacterBody3D.
- Input/InputMap.
- Vector3 trong code.
- gravity/collision.
- điều kiện `if`.
- `_physics_process()`.
- `move_and_slide()`.

Nếu cần nhắc tới, chỉ ghi `[HẠ TẦNG CUNG CẤP SẴN]`, không giảng sâu và không dùng làm evidence B1.
