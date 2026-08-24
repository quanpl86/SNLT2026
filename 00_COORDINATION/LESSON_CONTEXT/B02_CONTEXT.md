# B02 CONTEXT — PARALLEL FLOW TEST EXCEPTION

LESSON: B02 — Điều khiển nhà thám hiểm  
MODE: USER_AUTHORIZED_PARALLEL_FLOW_TEST  
B01_POLICY: KEEP_CURRENT_HUMAN_TEST_STATE  
B02_RELEASE_POLICY: DO_NOT_MERGE_TO_MAIN / DO_NOT_LOCK UNTIL NORMAL GATE RESUMES

## Canonical learning mapping
- CIO03 → SIO02 → ULO-03; K_NEW K03,K04; K_PRIOR K01,K02,K09.
- CIO04 → SIO02 → ULO-03,ULO-04; K_NEW K05; K_PRIOR K03,K04.
- Product: Player tuning + Nhân vật có thể điều khiển.
- Evidence: MC-ML + MC-CN.
- 120 min: 5/10/15/55/30/5.
- Quiz: HP1-B02-Q01→Q10, approved exact text only.
- Technical: PJT-004; GD-004; GD-005; GD-006.
- No Blockbench.

## Pipeline goal
Validate real flow:
ChatGPT canonical JSON/spec → GitHub → Antigravity → Review Studio auto-scan → B02 content appears correctly → Antigravity implementation → local report → ChatGPT → Human.

## Dependency rule
Branch B02 may be based on current B01 HEAD only because Review Studio has not yet reached main. This does not convert B01 into a completed lesson. Before B02 release, sync final locked B01 state after it becomes available.
