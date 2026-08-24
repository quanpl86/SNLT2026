# PROJECT SPEC B05 — Collectible + Blockbench Asset

## 1. Kiến trúc collectible canonical

```text
Collectible [Area3D]
├── CollisionShape3D
└── VisualAnchor [Node3D]
    └── <GLB visual>
```

Script canonical:

```gdscript
extends Area3D

signal collected(value: int)

@export var value: int = 1
var collected_once: bool = false

func _ready() -> void:
    body_entered.connect(_on_body_entered)

func _on_body_entered(body: Node3D) -> void:
    if collected_once:
        return
    if body.is_in_group("player"):
        collected_once = true
        collected.emit(value)
        queue_free()
```

Receiver ở Main/World có thể tăng `collected_count` và `print()` để kiểm chứng. **Không tạo HUD ở B05**.

## 2. Project Basic

- Kế thừa prototype B04.
- Có ít nhất 3 collectible đặt trên course.
- Area3D/collider/signal chain hoạt động.
- Có count nội bộ/debug Output, chưa có HUD.
- Visual của Master phải là GLB **thực sự export từ `B05_COLLECTIBLE_REFERENCE.bbmodel` bằng Blockbench và import vào Godot**, sau khi Antigravity validate.
- Program-generated `REFERENCE_PREVIEW.glb` chỉ là preview/fallback, không thay bằng chứng pipeline.

## 3. Student Starter

- Course B04 + 2–3 collectible skeleton.
- `Area3D`, `CollisionShape3D`, `VisualAnchor`, placeholder program GLB có sẵn.
- Callback `_on_body_entered()` và custom signal `collected` có sẵn.
- `body_entered` **chưa kết nối** — learning gap K11.
- Main receiver có thể được cung cấp sẵn để giảm tải; học sinh phải trace/giải thích.
- `B05_COLLECTIBLE_BLANK.bbmodel` là file bắt đầu cho asset cá nhân.

## 4. Nhiệm vụ Blockbench của học sinh

Mở blank Generic Model, tự tạo collectible:
- ≥3 part/element có ý nghĩa hoặc hình học tương đương;
- silhouette khác placeholder/reference, không chỉ đổi màu;
- lưu `.bbmodel`;
- export binary GLB;
- import vào Godot;
- instance dưới `VisualAnchor`;
- kiểm tra scale/orientation/collider;
- F5 và thu được vật phẩm.

Texture/material là tùy chọn, không phải kiến thức lõi K14.

## 5. Ownership

- A: file `.bbmodel`/`.glb` cá nhân, thiết kế hình học, giải thích, evidence.
- B: signal connection, asset integration, scale/orientation/collider adjustment có ý nghĩa.
- C: course B04, program placeholder, receiver infrastructure, project config.

## 6. Không được làm

- Không dùng imported GLB làm Area3D root.
- Không thay collision logic bằng mesh collision tự động nếu không cần.
- Không sao chép nguyên reference asset để nộp.
- Không dùng Blockbench Gallery model không rõ license.
- Không mở checkpoint/state/HUD/win.
