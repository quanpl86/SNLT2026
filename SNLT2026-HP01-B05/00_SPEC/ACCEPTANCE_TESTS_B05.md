# ACCEPTANCE TESTS B05

## Static
- Manifest/plan đúng CIO09/CIO10/K10/K11/K14.
- Starter có signal gap thật, không bị kết nối ẩn.
- No HUD/checkpoint/hazard.
- blank `.bbmodel` không có geometry làm sẵn.
- Master reference asset không được coi validated trước khi Blockbench test thật.

## Antigravity Local — Godot
- Project Basic open/F5, collect ≥2 items, count đúng, no double collect.
- Starter open/F5, placeholder không collect trước signal fix.
- E2E connect signal → collect placeholder.
- Import student/test GLB → swap visual → collect.
- Save/reopen → import/persistence.

## Antigravity Local — Blockbench
- Open blank/reference `.bbmodel`.
- Create/modify test asset from blank.
- Save `.bbmodel`.
- Export GLB.
- Godot 4.7.1 imports exported GLB.
- Record Blockbench version used.

## Asset QA
- model scale/orientation reasonable.
- VisualAnchor preserves Area3D/collider.
- asset source/license/checksum recorded.
- program preview GLB not mislabeled as Blockbench-export proof.
- external Gallery model prohibited unless separately audited.

## Human
- Blockbench workflow understandable for 12–14.
- 55' practice feasible across signal + asset creation/export/import.
- collectible visible/readable against B04 art.
- Student can distinguish detection zone from visual model.
