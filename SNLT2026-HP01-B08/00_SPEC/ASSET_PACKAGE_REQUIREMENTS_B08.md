# ASSET PACKAGE REQUIREMENTS — B08

Included:
- B08_GOAL_PORTAL_PROGRAM.glb
- B08_WIN_PANEL_PROGRAM.png
- B08_ICON_RESTART_PROGRAM.png
- B08_ICON_GOAL_LOCKED_PROGRAM.png
- B08_ICON_GOAL_READY_PROGRAM.png

All are program-provided Ownership C.

Antigravity must:
1. import GLB/PNGs in Godot 4.7.1;
2. keep Goal gameplay root as Area3D + CollisionShape3D;
3. use portal GLB as visual child only;
4. keep win/restart text as real Label/Button text, not baked into images;
5. test UI readability in native and browser;
6. record SHA-256;
7. use no external font dependency unless separately audited.
