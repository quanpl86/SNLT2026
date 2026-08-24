# ANTIGRAVITY HANDOFF — HP1 FINAL PRODUCT v1.0

## Goal

Build the polished **Teacher Master / reference final product** for HP1 from the latest integrated B09/B10–B12 candidate, while keeping curriculum evidence boundaries intact.

This is a product target, not a new lesson and not a shortcut that pre-completes student evidence.

## Required experience

- Start Screen.
- How-to-play overlay.
- Complete 3D platform core loop.
- 5 collectibles.
- 3 lives + Lose Screen.
- checkpoint/respawn.
- HUD: crystals/lives/checkpoint.
- valid win gate.
- Win Screen.
- clean restart.
- animated character idle/walk/jump.
- collectible/checkpoint/goal animation.
- VFX/audio feedback.
- coherent art direction.
- student Blockbench asset slot.
- Web Final.

## Build from prior work

Reuse:
- B05 asset slot/pipeline.
- B06 hazard/checkpoint.
- B07 HUD.
- B08 goal/result UI.
- B09 stable integrated core loop.

Do not recreate mechanics from scratch unless the current branch is technically unrecoverable and a finding is filed.

## Animated character

Download exact PJT-004 frozen `models/character.glb`, validate animation names `idle`, `walk`, `jump`.
Use it as visual child only.
Do not import Kenney double-jump logic.

## Assets

Package already contains program UI/audio and prior program GLBs.
Validate all imports in Godot 4.7.1.
Complete ASSET_SOURCE_MANIFEST with SHA-256.

For classroom/student release:
replace fallback collectible with each student's own approved `.glb`.

## Screens

`MainMenu.tscn`:
- title
- Bắt đầu
- Cách chơi

`Game.tscn`:
- world/player/camera
- HUD
- ResultLayer win/lose

Do not add production hosting/PWA/settings systems as new scope.

## Animation/VFX/audio

Follow ANIMATION_SPEC and AUDIO_VFX_SPEC.
These are polish/infrastructure, not new core learning objectives.

## Testing

Run `FINAL_RELEASE_ACCEPTANCE_TESTS.md`:
- native;
- animation;
- core loop;
- lose/win/restart;
- asset;
- regression;
- Web actual browser.

## Return

```text
LOCAL_TEST_REPORT_HP1_FINAL
BRANCH:
BASE_SHA:
COMMIT_FINAL_PRODUCT:
GODOT_VERSION:
RENDERER:
START_SCREEN:
HOW_TO_PLAY:
CHARACTER_SOURCE_SHA256:
CHARACTER_IMPORT:
ANIM_IDLE:
ANIM_WALK:
ANIM_JUMP:
COLLECTIBLE_ANIMATION:
CHECKPOINT_ANIMATION:
GOAL_ANIMATION:
AUDIO_IMPORT:
VFX:
HUD_CRYSTALS:
HUD_LIVES:
HUD_CHECKPOINT:
LOSE_FLOW:
WIN_FLOW:
RESTART_CLEAN:
STUDENT_ASSET_SLOT:
NATIVE_FULL_LOOP:
WEB_EXPORT:
BROWSER_TARGET:
WEB_FULL_LOOP:
ERRORS:
WARNINGS:
TESTS_NOT_EXECUTED:
OPEN_FINDINGS:
NEXT_OWNER: CHATGPT
REQUESTED_ACTION: Review final product implementation and issue Human Final Product Validation
```

Do not claim RELEASE PASS or WEB PASS until actual tests and Human validation.
