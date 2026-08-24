# ACCEPTANCE TESTS B06

## Static
- CIO/K/evidence đúng canonical.
- Starter có đúng 2 debug tasks tách được.
- No HUD/win/save/load/state machine.
- hazard/checkpoint GLB chỉ là visual child.
- quiz refs Q01–Q10, không đáp án.

## Antigravity Local Runtime
Project Basic:
- checkpoint activates;
- hazard respawns at latest checkpoint;
- repeated hazard stable;
- velocity reset;
- movement/jump/collectible regression.

Starter:
- StateHazard reproduces state mismatch.
- ReferenceHazard reproduces wrong-camera reference.
- no unrelated blockers.

E2E:
- fix state;
- retest StateHazard;
- trace/fix reference;
- retest ReferenceHazard;
- save/reopen;
- full regression.

## Asset QA
- both program GLB import in Godot 4.7.1;
- readable scale/contrast;
- no mesh collider gameplay replacement;
- source/checksum recorded.

## Human
- hazard/checkpoint visually clear to ages 12–14;
- two bugs are understandable, not confusingly simultaneous;
- camera behavior after ReferenceHazard baseline is recoverable and not nauseating;
- 55' practice feasible.
