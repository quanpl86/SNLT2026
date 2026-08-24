# UI ASSET PACKAGE REQUIREMENTS — B07

Included program-authored PNGs:
- B07_ICON_CRYSTAL_PROGRAM.png
- B07_ICON_CHECKPOINT_PROGRAM.png
- B07_ICON_CHECKPOINT_INACTIVE_PROGRAM.png
- B07_HUD_PANEL_PROGRAM.png

Antigravity must:
1. import PNGs in Godot 4.7.1;
2. assign them only to TextureRect/visual UI nodes;
3. keep Label text as runtime source of truth;
4. not bake numbers/status text into image assets;
5. test visibility at project window size and on light/dark backgrounds;
6. record SHA-256;
7. use default/system/Godot font; no external font dependency.

Student does not design or replace these assets in B07.
