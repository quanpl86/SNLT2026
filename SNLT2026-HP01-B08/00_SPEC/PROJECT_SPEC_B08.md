# PROJECT SPEC B08 — Complete Loop + First Web Export

## 1. Goal + win state

Goal uses Area3D/Signal infrastructure already learned:

```text
FinishGate [Area3D]
├── CollisionShape3D
└── VisualAnchor
    └── B08_GOAL_PORTAL_PROGRAM.glb
```

Main state:

```gdscript
var crystal_count := 0
var target_count := 5
var is_finished := false

func _on_goal_reached() -> void:
    if is_finished:
        return
    if crystal_count >= target_count:
        finish_game()

func finish_game() -> void:
    is_finished = true
    hud.show_result_overlay()
```

A feedback hint when not enough crystals may be provided as infrastructure C.

## 2. Restart

Preferred simple implementation:

```gdscript
func restart_game() -> void:
    get_tree().reload_current_scene()
```

This ensures a clean run: Player start, crystals restored, `crystal_count=0`, checkpoint initial, HUD initial, `is_finished=false`.

`reload_current_scene()` is an implementation API, not a new LO.

## 3. Project Basic

- B07 HUD retained.
- Goal is locked until enough collectibles.
- Result overlay appears after valid win.
- Chơi lại starts clean run.
- Web preset validated by Antigravity.
- Web build opens in target browser and runs core loop before any PASS claim.

## 4. Student Starter

### Gap A — early win
Goal event triggers finish without checking `crystal_count >= target_count`.

### Gap B — dirty restart
Restart only moves Player to start, preserving `crystal_count`, `is_finished`, HUD and/or checkpoint state.

Students trace and fix both using prior state/UI knowledge.

### K27 task
Starter intentionally has no Web export preset. After native fixes:
- create Web preset;
- export `build/web/index.html`;
- serve via HTTP;
- run browser core-loop check.

## 5. Ownership

- A: predictions, trace, Web checklist, test record, explanation.
- B: win condition + restart fix; creation/use of Web preset and export workflow.
- C: goal/UI art, helper HTTP-server instruction, export templates installation if preconfigured, prior gameplay systems.

## 6. Scope guardrail

No production hosting, no custom HTML/CSS shell, no PWA, no advanced renderer tuning. Compatibility remains renderer baseline.
