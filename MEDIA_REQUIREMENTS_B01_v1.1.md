# MEDIA REQUIREMENTS — HP1 B01
## 3-TARGET MEDIA CAPTURE PLAN

**Bài học**: HP1 — B01 — Khám phá trò chơi 3D  
**Phiên bản**: v1.1  
**Trạng thái**: `OFFICIAL_CHATGPT_ISSUED`  
**Authority**: ChatGPT — Canonical Learning-Media Planner & Art-Direction Authority  
**Engine**: Godot `4.7.1 stable`  
**Renderer**: Compatibility  
**Editor UI**: English

Media B01 được chụp từ 3 nguồn:

1. `PROJECT_BASIC CANONICAL` — trạng thái đích chuẩn / hero media.
2. `STUDENT_STARTER CANONICAL` — baseline / before-state / student-boundary evidence.
3. `E2E WORKING COPY` — quá trình HS chỉnh sửa + persistence evidence.

---

# QUY TẮC CHUNG

- Project Basic canonical: chỉ mở/chạy/chụp, không Save thay đổi.
- Student Starter canonical: chỉ mở/chạy/chụp, không Save thay đổi.
- E2E Working Copy: được chỉnh, Save, Close, Reopen.
- RAW evidence: không crop/annotate/overwrite.
- Không lộ Desktop/Finder/notification/thông tin cá nhân.
- Ảnh property phải thấy Node selected + Inspector + property/value.
- Ảnh runtime ưu tiên game window sạch.

---

# A. PROJECT_BASIC CANONICAL

## PB-M01 — Player canonical
**Phải thấy**: Player selected, Inspector → Position, X=1.5, Y=0.05, Z=0, viewport có Player trên StartPlatform.  
**Tên**: `B01_PB_M01_Player_Canonical_RAW.png`

## PB-M02 — View canonical
**Phải thấy**: View selected, Inspector → Rotation, X=0°, Y=25°, Z=0°.  
**Tên**: `B01_PB_M02_View_Canonical_RAW.png`

## PB-M03 — Hero runtime canonical
**Cách chụp**: F5, di chuyển đến vị trí có Player + nhiều platform + chiều sâu 3D rõ; chụp frame sạch.  
**Tên**: `B01_PB_M03_Hero_Gameplay_RAW.png`  
**Reuse**: HS Summary, GV Slides, bìa bài, kết quả đích.

## PB-V01 — Canonical gameplay
20–30 giây: đứng yên 2 giây → W/A/S/D → Space → đi qua 1–2 platform → giữ 2 giây cuối.  
**Tên**: `B01_PB_V01_Canonical_Gameplay_RAW.mov`

## PB-V02 — Fall reset
10–20 giây: rơi khỏi platform → quay tới scene reload → giữ 2 giây sau reload.  
**Tên**: `B01_PB_V02_Fall_Reset_RAW.mov`  
**Reuse mặc định**: QA_ONLY / Teacher troubleshooting.

---

# B. STUDENT_STARTER CANONICAL

## SS-M01 — Project open
**Phải thấy**: Scene, FileSystem, 3D viewport, Inspector, tab `main.tscn`.  
**Tên**: `B01_SS_M01_Project_Open_RAW.png`

## SS-M02 — Scene Tree baseline
**Phải thấy**:
```text
Main
├ Environment
├ Player
├ View
│ └ Camera
└ World
```
**Tên**: `B01_SS_M02_Scene_Tree_RAW.png`

## SS-M03 — Player sub-scene
Mở `objects/player.tscn`, mở rộng root Player.  
**Tên**: `B01_SS_M03_Player_Subscene_RAW.png`

## SS-M04 — Player baseline X=0
Player selected, Inspector → Position; X=0, Y=0.05, Z=0.  
**Tên**: `B01_SS_M04_Player_Baseline_RAW.png`

## SS-M05 — View baseline Y=0°
View selected, Inspector → Rotation; X=0°, Y=0°, Z=0°.  
**Tên**: `B01_SS_M05_View_Baseline_RAW.png`

## SS-M06 — Baseline runtime
F5, Player ở trạng thái baseline; chụp khung game gần tương đương PB-M03 nếu có thể để dễ Before/After.  
**Tên**: `B01_SS_M06_Baseline_Game_RAW.png`

## SS-V01 — Baseline movement/jump
15–25 giây: đứng yên 2 giây → W/A/S/D → Space → tiếp đất.  
**Tên**: `B01_SS_V01_Baseline_Movement_RAW.mov`

---

# C. E2E WORKING COPY

## E2E-M01 — Player X=1.5 trong Editor
**Phải thấy**: Player selected, Scene panel, Inspector, Position X=1.5, Y=0.05, Z=0, viewport có Player trên StartPlatform.  
**Tên**: `B01_E2E_M01_Player_X_1_5_Editor_RAW.png`

## E2E-M02 — Runtime sau Player X=1.5
Player X=1.5, View Y=0°, F5, Player đứng tại vị trí mới.  
**Tên**: `B01_E2E_M02_Player_X_1_5_Run_RAW.png`

## E2E-V01 — Player Position Editor → Run
Editor Player X=1.5 giữ 2 giây → F5 → giữ runtime 4–5 giây.  
**Tên**: `B01_E2E_V01_Player_Position_Change_RAW.mov`

## E2E-M03 — View Y=25° trong Editor
View selected, Rotation X=0°, Y=25°, Z=0°, viewport.  
**Tên**: `B01_E2E_M03_View_Y_25_Editor_RAW.png`

## E2E-M04 — Runtime sau View Y=25°
Player X=1.5, View Y=25°, F5, di chuyển tới vị trí có chiều sâu 3D rõ, chụp frame sạch.  
**Tên**: `B01_E2E_M04_View_Y_25_Game_RAW.png`

## E2E-V02 — View Rotation + camera-follow
20–30 giây: Editor View Y=25° giữ 2 giây → F5 → di chuyển ít nhất hai hướng → giữ 2–3 giây cuối.  
**Tên**: `B01_E2E_V02_View_Rotation_Camera_Follow_RAW.mov`

## E2E-M05 — Persistence Player
Sau `Cmd + S → Close Godot → Reopen`, chọn Player, phải thấy Position X=1.5.  
**Tên**: `B01_E2E_M05_Reopen_Player_RAW.png`

## E2E-M06 — Persistence View
Ngay sau E2E-M05, chọn View, phải thấy Rotation Y=25°.  
**Tên**: `B01_E2E_M06_Reopen_View_RAW.png`

## E2E-M07 — GoalPlatform
Optional/high-value: Run, đi tới gần hoặc lên GoalPlatform, chụp Player + GoalFlag + course context.  
**Tên**: `B01_E2E_M07_Goal_RAW.png`

---

# D. CHATGPT-GENERATED VISUALS — HUMAN KHÔNG CẦN CHỤP

ChatGPT sẽ tự thiết kế sau khi media được duyệt:
1. Diagram Node → Scene → Scene Tree.
2. Trục X/Y/Z cho K02.
3. Before/After Position composite.
4. Before/After View Rotation composite.
5. ĐỌC → DỰ ĐOÁN → CHỈNH → CHẠY → GIẢI THÍCH.
6. Sơ đồ Ownership A/B/C.
7. Crop/callout/annotation.
8. Hero slide composition.

---

# E. THỨ TỰ CAPTURE TỐI ƯU

## Batch A — Project Basic
1. PB-M01
2. PB-M02
3. PB-M03
4. PB-V01
5. PB-V02

## Batch B — Student Starter
6. SS-M01
7. SS-M02
8. SS-M03
9. SS-M04
10. SS-M05
11. SS-M06
12. SS-V01

## Batch C — E2E Working Copy
13. E2E-M01
14. E2E-M02
15. E2E-V01
16. E2E-M03
17. E2E-M04
18. E2E-V02
19. Cmd+S
20. Close
21. Reopen
22. E2E-M05
23. E2E-M06
24. E2E-M07 nếu thuận lợi

---

# F. MEDIA INDEX FIELDS

```text
MEDIA_ID:
FILE:
TARGET: PROJECT_BASIC / STUDENT_STARTER / E2E_COPY
TYPE: IMAGE / VIDEO
TEST_ID:
RAW_OR_APPROVED:
ENGINE:
EDITOR_UI:
PROJECT_STATE:
CONTENT:
PROVES:
PEDAGOGICAL_PURPOSE:
REUSE_TARGETS:
CAPTION_VI:
HUMAN_APPROVED:
CHATGPT_MEDIA_STATUS:
NOTES:
```

Statuses:
```text
RAW_EVIDENCE
REVIEWED_EVIDENCE
APPROVED_LEARNING_MEDIA
REJECTED_FOR_LEARNING_MEDIA
QA_ONLY
```

---

# G. ĐIỀU KIỆN APPROVAL

Media chỉ vào `04_MEDIA_APPROVED/` khi:
- Human Test liên quan PASS.
- kỹ thuật/value đúng.
- không chứa thông tin cá nhân.
- đủ rõ.
- không có UI/runtime error ngoài mục đích shot.
- ChatGPT xác định có mục đích sư phạm.
- Human đồng ý dùng media đó.

---

# H. MẪU MEDIA CAPTURE RESULT

```text
B01 MEDIA CAPTURE — 3 TARGETS

PROJECT_BASIC
PB-M01:
PB-M02:
PB-M03:
PB-V01:
PB-V02:

STUDENT_STARTER
SS-M01:
SS-M02:
SS-M03:
SS-M04:
SS-M05:
SS-M06:
SS-V01:

E2E
E2E-M01:
E2E-M02:
E2E-V01:
E2E-M03:
E2E-M04:
E2E-V02:
E2E-M05:
E2E-M06:
E2E-M07:

Media notes:
- ...
```

---

# I. GIỚI HẠN B01

Không yêu cầu trong B01:
- Blockbench.
- GDScript như minh chứng HS.
- Area3D/Signal/HUD.
- Web/browser evidence.
- kiến thức B02+.
