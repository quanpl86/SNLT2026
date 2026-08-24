# KENNEY ANIMATED CHARACTER — SOURCE/FREEZE NOTE

Preferred animation source:
- PJT-004 — KenneyNL Starter Kit 3D Platformer
- Frozen commit: `3fa8a04b1c01ab23db43123d4ce814a34c3fc7f0`
- `models/character.glb`
- Git blob SHA: `49ea3291f2a4fcd4ad4c667c49ecb5e09576d944`
- wrapper: `objects/character.tscn`
- behavior reference: `scripts/player.gd`

Verified source behavior:
- reference script obtains `$Character/AnimationPlayer`;
- plays animation names `idle`, `walk`, `jump`;
- model stays a visual child of the gameplay CharacterBody3D;
- PJT-004 README states included 3D models and sound effects are CC0; software is MIT.

Antigravity must download the exact frozen file, calculate local SHA-256 and import it into Godot 4.7.1. Do not copy the source double-jump controller into HP1 final logic.

If character import/animation names differ in the real engine test, report a finding and adapt the visual wrapper only. Do not alter the learned movement/jump construct to fit the art asset.
