# PROJECT SPEC B07 — HUD Platform Adventure

## 1. Canonical UI structure

```text
Main [Node3D]
├── ...
└── HUDLayer [CanvasLayer]         # Infrastructure C
    └── HUD [Control]              # K13 focus
        └── Panel
            ├── CrystalIcon [TextureRect]
            ├── CrystalLabel [Label]
            ├── CheckpointIcon [TextureRect]
            └── CheckpointLabel [Label]
```

CanvasLayer được cung cấp sẵn để HUD không đi theo camera 3D; không biến CanvasLayer thành LO riêng.

## 2. Canonical HUD script

```gdscript
extends Control

@onready var crystal_label: Label = %CrystalLabel
@onready var checkpoint_label: Label = %CheckpointLabel

func update_crystal_hud(value: int, total: int) -> void:
    crystal_label.text = "%d/%d" % [value, total]

func update_checkpoint_hud(is_active: bool) -> void:
    if is_active:
        checkpoint_label.text = "Đã kích hoạt"
    else:
        checkpoint_label.text = "Chưa kích hoạt"
```

Gameplay remains source of truth:

```gdscript
func _on_collectible_collected(value: int) -> void:
    crystal_count += value
    hud.update_crystal_hud(crystal_count, target_count)

func _on_checkpoint_activated(position: Vector3) -> void:
    respawn_position = position
    hud.update_checkpoint_hud(true)
```

Không tạo `display_crystal_count` riêng.

## 3. Project Basic

- HUD fixed on screen.
- Initial: 0/5; Chưa kích hoạt.
- Collectibles from B05 update CrystalLabel.
- Checkpoint from B06 updates CheckpointLabel.
- Hazard/respawn preserves HUD state correctly within current run.
- No win/restart UI.

## 4. Student Starter — 2 guided gaps

### Gap A — CIO13/K13
Function receives runtime data but hard-codes display:

```gdscript
func update_crystal_hud(value: int, total: int) -> void:
    crystal_label.text = "0/5" # TODO B07
```

Student traces data and replaces fixed text with runtime value/total.

### Gap B — CIO14
Checkpoint state updates correctly but HUD link is missing:

```gdscript
func _on_checkpoint_activated(position: Vector3) -> void:
    respawn_position = position
    # TODO B07: update HUD checkpoint state
```

Student traces signal/state/reference flow and calls HUD update.

## 5. Ownership

- A: predictions, trace, runtime observations, explanations.
- B: runtime Label update + checkpoint state→HUD link.
- C: CanvasLayer infrastructure, UI PNGs, panel art, default positions/theme polish, prior gameplay systems.

## 6. No B08 leakage

Do not implement win condition, game-over overlay, restart button, level-complete screen or Web export gate in B07.
