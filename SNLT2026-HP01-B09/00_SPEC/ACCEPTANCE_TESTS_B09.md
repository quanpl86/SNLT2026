# ACCEPTANCE TESTS B09

## Static
- K_NEW=0.
- Timebox 15/60/45.
- 35 approved question IDs, no answers.
- Student Starter has one deliberate Beta blocker only.
- No B10 design/personalization content.
- Asset reuse only.

## Antigravity Native
Project Basic:
- BT-01→BT-06 PASS.
- full core loop no blocker.

Starter:
- reaches maximum 4/5 because BetaCrystal05 is unreachable.
- goal correctly remains locked.
- no unrelated blocker.

E2E:
- create defect record before edit;
- move Crystal05 only;
- retest 5/5;
- full loop;
- restart;
- save/reopen;
- regression.

## Formal TG-WEB-SMOKE
- Compatibility.
- Web export.
- HTTP serve.
- browser target.
- TG-01→TG-06.
- actual browser evidence required.
- a generated build without browser execution is NOT PASS.

## Human
- defect is discoverable but not trivial/gimmicky;
- 45-minute product block feasible;
- Beta feels continuous with B08;
- Web smoke steps understandable;
- no new-knowledge surprise.

## Gate
Cổng bản thử nghiệm only when:
- MC-CN CIO17;
- MC-KT CIO18;
- TG-WEB-SMOKE technical gate;
- no blocker.
