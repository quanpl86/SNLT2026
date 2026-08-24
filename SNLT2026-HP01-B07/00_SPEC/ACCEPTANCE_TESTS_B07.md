# ACCEPTANCE TESTS B07

## Static
- CIO/K/ULO/evidence per canonical sources.
- HUD uses Control nodes.
- Starter has exactly two learning gaps.
- No B08 win/restart UI.
- no external font file.
- quiz Q01–Q10 only, no answers.

## Antigravity Local
Project Basic:
- open/F5;
- collect 2 items → label increments;
- checkpoint → status changes;
- hazard/respawn → HUD remains consistent;
- UI fixed on screen.

Starter:
- collect updates gameplay but HUD crystal stays static;
- checkpoint affects respawn but checkpoint HUD remains inactive;
- no unrelated blocker.

E2E:
- fix CrystalLabel runtime data;
- fix checkpoint state→HUD;
- regression collect/checkpoint/hazard;
- save/reopen.

## UI/Asset QA
- 4 PNGs import in Godot 4.7.1.
- no missing texture.
- readable at normal project resolution.
- HUD does not cover key traversal area.
- icons/panel are C ownership.

## Human
- HUD readable/age-appropriate;
- label wording understandable;
- visual hierarchy clear;
- 55-minute practice feasible;
- camera/gameplay not obscured.
