# ACCEPTANCE TESTS B08

## Static
- CIO/K/ULO/evidence đúng canonical.
- Starter có exactly two CIO15 gaps + no Web preset.
- No B09 knowledge.
- asset UI/goal are C.
- quiz Q01–Q10 only; no answers.

## Antigravity Native
Project Basic:
- insufficient goal no win;
- enough crystals + goal wins;
- result overlay;
- restart clean run;
- B01–B07 regression.

Starter:
- early win reproduces;
- dirty restart reproduces.

E2E:
- fix win;
- fix restart;
- native full-loop regression.

## Antigravity Web
- verify export templates;
- create/validate Web preset;
- export build;
- serve HTTP;
- browser load;
- input/core-loop;
- win/restart on Web.
If browser test not actually executed: `WEB_BROWSER_PASS = PENDING`.

## Asset/UI
- portal GLB imports;
- 4 PNGs import;
- no missing texture/font;
- UI readable in browser.

## Human
- win feedback clear;
- locked/unlocked goal understandable;
- restart expectation obvious;
- Web run feels equivalent enough to native for core loop;
- 55' practice feasible.

No Runtime/Web/Human PASS without actual corresponding test.
