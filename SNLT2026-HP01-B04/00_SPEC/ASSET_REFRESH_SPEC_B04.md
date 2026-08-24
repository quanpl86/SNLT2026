# ASSET REFRESH SPEC — B04

## Mục tiêu

Làm B04 có cảm giác “phiên bản checkpoint mới” mà không làm học sinh phải học kiến thức mới. Cơ chế, collider, Node root, InputMap, camera, movement và jump phải giữ tinh thần B1–B3.

## Nguồn mặc định đã có trong Resource Catalog

PJT-004 — KenneyNL Starter Kit 3D Platformer. Freeze commit `3fa8a04b1c01ab23db43123d4ce814a34c3fc7f0`. README của nguồn xác nhận 3D models/sprites/sfx CC0; code MIT. B04 **chỉ lấy asset**, không lấy controller/double-jump/collectible logic.

### Asset chọn trước
- `models/character.glb` → visual Player.
- `models/brick.glb` → visual/decorative layer cho platform.

Antigravity phải tải đúng file từ commit frozen, tính SHA-256, copy vào project và điền SOURCE_MANIFEST.

## Cách gắn asset — không đổi gameplay

### Player
Giữ nguyên `CharacterBody3D Player`, script, `CollisionShape3D`, vị trí root. Thêm/đổi **visual child** thành character model. Chỉ scale/rotate/offset visual child để khớp collider. Không dùng imported scene làm physics root. Không thêm controller/animation gameplay mới.

### Platform
Giữ nguyên `StaticBody3D` và `CollisionShape3D`. Brick/model chỉ là visual child/decoration. Không “Create Trimesh Collision” từ model để thay collider checkpoint. Không thay spacing/height course trừ correction rất nhỏ bắt buộc và phải report.

## Student-facing

Trong Student Starter, asset đã được gắn sẵn. Tài liệu chỉ nói: “Dự án checkpoint đã được chương trình làm mới hình ảnh; em tiếp tục dùng kiến thức B1–B3. Quy trình tự tạo/đưa asset 3D vào Godot sẽ học ở bài sau.”

## Teacher/technical optional swap

Nếu giáo viên/Antigravity cần thay skin khác: chỉ thay node Visual, giữ root/collider/script/transform gameplay. Sau swap phải regression W/A/S/D, jump, landing, camera, course completion. Đây không phải hoạt động HS B04.
