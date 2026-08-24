# HP1 FINAL — RELEASE ACCEPTANCE TESTS

## A. Start / UI
- App opens to Start Screen, not directly gameplay.
- Bắt đầu opens a fresh run.
- Cách chơi opens/closes correctly.
- Web does not expose a meaningless Quit button.
- HUD is readable and does not cover traversal.

## B. Player / animation
- W/A/S/D works.
- Single jump works.
- Gravity/collision stable.
- idle plays while standing.
- walk plays while moving on floor.
- jump plays airborne.
- animation visual does not replace CharacterBody3D/collider.

## C. Core loop
- 5 collectible items are reachable.
- Collectible count updates once per item.
- Hazard reduces lives and gives feedback.
- With lives remaining, respawn occurs at latest checkpoint.
- Checkpoint state/HUD updates.
- Lives reach 0 → Lose screen.
- Restart after lose creates a clean run.
- Goal before enough crystals does not win.
- Goal after enough crystals → Win screen.
- Restart after win creates a clean run.

## D. Asset / visual
- Student asset .bbmodel + .glb exists for real learner release.
- Student asset is visible/integrated at runtime.
- Program assets do not masquerade as student evidence.
- Scale/orientation/collider are appropriate.
- Art style is coherent and gameplay silhouettes remain readable.

## E. Feedback
- jump/collect/checkpoint/hazard/win/lose have visible or audible feedback.
- audio levels do not clip or overwhelm.
- VFX does not hide player/platform edges.

## F. Regression
- B01–B09 core behavior still works.
- No blocker after B10 customization.
- B11 playtest issues selected for tuning are retested.
- Final regression record exists.

## G. Web Final
- Compatibility renderer.
- export completes.
- served by HTTP.
- target browser loads.
- Start Screen works.
- input/core loop works.
- audio starts after user gesture as required by browser behavior.
- animation visible.
- win/lose/restart work.
- no blocker.

## H. Release Gate evidence
- MC-XB Web final.
- MC-TK design/GDD.
- MC-3D personal Blockbench asset.
- MC-ML personal GDScript.
- MC-KT testing.
- MC-GT presentation/defense.
- personal ownership is explicit.

No Native/Web/Human PASS may be claimed without the corresponding actual test.
