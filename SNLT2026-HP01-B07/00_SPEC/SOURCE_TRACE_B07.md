# SOURCE TRACE B07

- Bảng LO:
  - CIO13 → SIO03 → ULO-03,ULO-04; K13; prior K03,K04,K11,K12,K29.
  - CIO14 → SIO03 → ULO-04; no K_NEW; prior K11,K12,K13,K29.
- Assessment v1.2:
  - CIO13 CHỈNH SỬA; mandatory MC-CN; ĐG-02.
  - CIO14 CHỈNH SỬA; mandatory MC-ML+MC-CN; ĐG-03+ĐG-02.
- Activity Map:
  - K13:N→R; 5/10/15/55/30/5=120; TH04+TH04; MC-CN+MC-ML.
- Approved bank:
  - `08_Bai_7`, HP1-B07-Q01→Q10.
  - Questions explicitly cover HUD purpose, runtime values, Label references, Signal→HUD, state→HUD and avoiding hard-coded display data.
- Resource Catalog:
  - K13 → GD-011 Control + PJT-003.
  - B07 product = HUD Platform Adventure; focus Control/HUD + runtime data; suggested PJT-004/PJT-003.
- PJT-004 frozen reference `3fa8a04b1c01ab23db43123d4ce814a34c3fc7f0`:
  - `scripts/hud.gd` extends Control and updates a coin Label from runtime value.
  - Used as architecture reference only.

No `90_LUU_TRU_*` used.
