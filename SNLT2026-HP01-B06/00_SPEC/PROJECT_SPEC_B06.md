# PROJECT SPEC B06 — Hazard + Checkpoint + Respawn

## 1. Canonical structure

```text
Main/Level [Node3D]
├── Player [CharacterBody3D]
├── View
│   └── Camera [Camera3D]
└── World
    ├── Checkpoint01 [Area3D]
    │   ├── CollisionShape3D
    │   └── VisualAnchor
    │       └── B06_CHECKPOINT_BEACON_PROGRAM.glb
    ├── StateHazard [Area3D]
    └── ReferenceHazard [Area3D]
```

Project Basic có thể dùng nhiều hazard cùng một logic đúng. Hai tên StateHazard/ReferenceHazard chỉ bắt buộc ở Student Starter để tách hai nhiệm vụ debug.

## 2. Canonical state logic

```gdscript
@onready var player: CharacterBody3D = $Player

var respawn_position: Vector3

func _ready() -> void:
    respawn_position = player.global_position

func _on_checkpoint_activated(position: Vector3) -> void:
    respawn_position = position

func respawn_player() -> void:
    player.global_position = respawn_position
    player.velocity = Vector3.ZERO
```

Checkpoint dùng Area3D/Signal đã học:

```gdscript
extends Area3D

signal activated(position: Vector3)
var is_activated := false

func _on_body_entered(body: Node3D) -> void:
    if body.is_in_group("player") and not is_activated:
        is_activated = true
        activated.emit(global_position)
```

## 3. Student Starter — hai debug task tách biệt

### Task A — K12 state mismatch

Checkpoint callback cập nhật:

```gdscript
last_checkpoint_position = position
```

nhưng `respawn_player_state()` vẫn dùng:

```gdscript
player.global_position = respawn_position
```

Kết quả: đã qua checkpoint nhưng StateHazard vẫn đưa Player về start.

Học sinh trace hai biến, dự đoán, hợp nhất/đổi đúng state variable, chạy lại và giải thích.

### Task B — K29 wrong object reference

`respawn_player_reference()` cố ý có:

```gdscript
camera.global_position = respawn_position
```

thay vì:

```gdscript
player.global_position = respawn_position
```

ReferenceHazard được dùng để tái hiện riêng bug này sau Task A. Học sinh phải chỉ ra object bị thay đổi sai và sửa sang đúng Player.

## 4. Asset policy

Hazard/checkpoint visuals được chương trình gắn sẵn. Học sinh **không đổi/import asset ở B06**. Detection vẫn là Area3D/CollisionShape3D, không dựa trên mesh collision.

## 5. Continuity

- B05 collectible có thể còn trong course để tạo cảm giác project tiếp tục phát triển.
- B05 student-created asset nếu có từ lớp thật được giữ nguyên.
- Canonical Starter/Master không phụ thuộc một asset cá nhân cụ thể; dùng B05 program/reference asset khi cần.
- Không tạo HUD; B07 mới học giao diện.

## 6. Ownership

- A: prediction, code trace, actual/expected, explanation.
- B: state-variable fix + correct Node reference.
- C: visuals, course art, hazard/checkpoint scene skeleton, B05 continuity infrastructure.

## 7. Không được làm

- Không state machine.
- Không save/load checkpoint qua phiên.
- Không UI/HUD.
- Không restart button/win screen.
- Không Blockbench work ở B06.
