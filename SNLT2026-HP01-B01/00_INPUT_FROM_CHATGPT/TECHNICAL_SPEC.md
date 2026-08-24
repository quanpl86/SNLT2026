# TECHNICAL SPEC — B01

## 1. Platform
- Godot: **4.6**.
- Renderer: **Compatibility / gl_compatibility**.
- Script language: GDScript.
- Main scene: `res://scenes/main.tscn`.
- Viewport: 1152 × 648, 16:9.
- No Blender.
- B1 không dùng Blockbench.

`project.godot` phải khai báo tương đương:
```ini
config_version=5

[application]
config/name="SNLT2026 HP01 B01 - Kham pha tro choi 3D"
run/main_scene="res://scenes/main.tscn"
config/features=PackedStringArray("4.6", "GL Compatibility")

[display]
window/size/viewport_width=1152
window/size/viewport_height=648
window/stretch/mode="canvas_items"
window/stretch/aspect="expand"

[physics]
3d/default_gravity=18.0

[rendering]
renderer/rendering_method="gl_compatibility"
renderer/rendering_method.mobile="gl_compatibility"
```

## 2. Input hạ tầng
- A = move_left
- D = move_right
- W = move_forward
- S = move_back
- Space = jump

Input tồn tại để học sinh chơi/test. Không dạy K05 ở B1.

## 3. Cấu trúc file tối thiểu cho cả hai project
```text
project.godot
README_*.md
scenes/
  main.tscn
objects/
  player.tscn
scripts/
  player.gd
  view.gd
docs/
  PHUC_HOI_GIA_TRI_MAC_DINH.md
  NGUON_VA_GIAY_PHEP.md
evidence/
  ...
```

## 4. Main scene contract
Node hierarchy theo `PRODUCT_SPEC.md`.

### Environment
- background màu sáng, dễ quan sát nhân vật/platform.
- DirectionalLight3D có shadow.

### Platform layout canonical
- StartPlatform position `(0, -0.25, 0)`, size khoảng `(7, 0.5, 7)`.
- Platform01 position `(0, 0.35, -5.3)`.
- Platform02 position `(3.0, 1.15, -9.0)`.
- Platform03 position `(0.2, 1.95, -12.8)`.
- GoalPlatform position `(-2.0, 2.75, -16.5)`.

Mục tiêu: level ngắn, nhìn rõ ảnh hưởng camera, không biến B1 thành thử thách platform khó.

### Student Starter baseline
- Player Position = `(0, 0.05, 0)`.
- View Rotation Degrees = `(0, 0, 0)`.
- Camera Position = `(0, 3.4, 7.5)`.
- Camera Rotation Degrees = `(-20, 0, 0)`.
- Camera FOV = `52`.

### PROJECT_BASIC canonical completion
- Player Position = `(1.5, 0.05, 0)`.
- View Rotation Degrees = `(0, 25, 0)`.
- Camera giữ nguyên baseline.

Lưu ý nếu sửa trực tiếp `.tscn`:
- 25° ≈ `0.436332` rad.
- -20° ≈ `-0.349066` rad.
Ưu tiên dùng Godot Editor khi có thể.

## 5. Player scene contract
Root `Player` là `CharacterBody3D` để hạ tầng movement chạy, nhưng loại Node này không được trình bày như kiến thức B1.

Cấu trúc:
```text
Player
├── Collider: CollisionShape3D
└── Character: Node3D
    ├── Body: MeshInstance3D
    ├── Visor: MeshInstance3D
    └── DirectionMarker: MeshInstance3D
```

Dùng PrimitiveMesh của Godot để tránh dependency asset bên ngoài ở B1.

## 6. player.gd — functional contract, Ownership C
Phải đảm bảo:
- CharacterBody3D nhận W/A/S/D.
- hướng di chuyển có thể được xoay theo `View.rotation.y` để góc camera và điều khiển hợp lý.
- Space nhảy khi đang ở sàn.
- `move_and_slide()` xử lý chuyển động/collision.
- nếu y < -8, reload current scene.
- không có lỗi parser/runtime blocker.

Không cần code phức tạp, animation, particles, collectible hay HUD.

## 7. view.gd — functional contract, Ownership C
- Root `View` theo vị trí `Player` bằng follow mượt hoặc trực tiếp.
- Không ghi đè Rotation do học sinh đặt trong Inspector.
- Không cần camera input/zoom ở B1.
- Nếu `target == null`, return an toàn.

## 8. Docs nội bộ project
Starter:
- `README_HOC_SINH.md` — chỉ cách mở/run và boundary.
- `docs/PHUC_HOI_GIA_TRI_MAC_DINH.md` — baseline chính xác.
- `evidence/HO_SO_MINH_CHUNG_B01.md` — mẫu trống.

PROJECT_BASIC:
- `README_DOI_CHIEU.md`.
- `docs/PHUC_HOI_GIA_TRI_MAC_DINH.md`.
- `evidence/PHUONG_AN_CHUAN_B01.md`.

## 9. Contract đồng nhất
Ngoại trừ các file README/evidence theo vai trò, hai project phải có cùng:
- scripts;
- node names/types;
- world layout;
- input;
- camera baseline;
- engine settings.

Khác biệt chức năng cốt lõi giữa Starter và Basic chỉ nằm ở hai Transform cần học sinh thực hiện.
