# HUMAN DOUBLE-CHECK B01 v1.2
## Checklist thực thi + chụp ảnh + quay video + lưu minh chứng — bản vận hành đầy đủ

**Học phần**: HP1 — Phiêu lưu Nền tảng 3D  
**Bài**: B01 — Khám phá trò chơi 3D  
**Trạng thái**: `OFFICIAL_CHATGPT_ISSUED`  
**Engine**: Godot `4.7.1 stable`  
**Renderer**: `Compatibility`  
**Editor UI**: English  
**Mô hình test**: `PROJECT_BASIC CANONICAL → STUDENT_STARTER CANONICAL → E2E WORKING COPY`

> Đây là file HUMAN dùng để thực hiện test thực tế.  
> Mỗi test đều ghi rõ: mở project nào, thao tác gì, kỳ vọng gì, chụp/quay gì, đặt tên file gì, lưu vào đâu và ghi kết quả thế nào.

---

# 1. THƯ MỤC LÀM VIỆC CANONICAL

## 1.1. Checklist đọc trong lúc test

```text
/Users/mac/Downloads/SNLT2026-HP01/
SNLT2026-HP01-B01/
03_HUMAN_TEST_REVIEW/
01_CHECKLIST/
HUMAN_DOUBLE_CHECK_B01_v1.2.md
```

## 1.2. Ảnh RAW phải lưu vào

```text
/Users/mac/Downloads/SNLT2026-HP01/
SNLT2026-HP01-B01/
03_HUMAN_TEST_REVIEW/
03_EVIDENCE_RAW/
IMAGES/
```

## 1.3. Video RAW phải lưu vào

```text
/Users/mac/Downloads/SNLT2026-HP01/
SNLT2026-HP01-B01/
03_HUMAN_TEST_REVIEW/
03_EVIDENCE_RAW/
VIDEOS/
```

## 1.4. Ghi chú kết quả Human Test

Tạo hoặc cập nhật:

```text
/Users/mac/Downloads/SNLT2026-HP01/
SNLT2026-HP01-B01/
03_HUMAN_TEST_REVIEW/
02_HUMAN_NOTES/
HUMAN_TEST_RESULT_B01.md
```

## 1.5. KHÔNG tự đưa file vào thư mục này

```text
03_HUMAN_TEST_REVIEW/
04_MEDIA_APPROVED/
```

Chỉ sau khi:
1. ChatGPT review;
2. Human xác nhận OK;
3. media được duyệt dùng cho học liệu;

thì Antigravity mới copy media được chọn từ RAW sang APPROVED.

---

# 2. CÁCH CHỤP ẢNH VÀ QUAY VIDEO TRÊN macOS

## 2.1. Chụp riêng cửa sổ Godot

Ưu tiên cách này để tránh lộ Desktop.

1. Nhấn `Cmd + Shift + 4`.
2. Nhấn tiếp `Space`.
3. Con trỏ chuyển thành biểu tượng camera.
4. Di chuột lên cửa sổ Godot Editor hoặc game.
5. Click để chụp.
6. Đổi tên file theo đúng tên trong checklist.
7. Di chuyển file vào:
   `03_EVIDENCE_RAW/IMAGES/`.

Nếu cần chụp một vùng nhỏ có Scene + Inspector + Viewport:
1. `Cmd + Shift + 4`.
2. Kéo vùng cần chụp.
3. Không crop mất tên Node/property/value được yêu cầu.

## 2.2. Quay video

1. Nhấn `Cmd + Shift + 5`.
2. Chọn `Record Selected Portion` hoặc `Record Entire Screen`.
3. Ưu tiên chỉ chọn vùng Godot/game.
4. Nhấn `Record`.
5. Thực hiện đúng kịch bản của test.
6. Nhấn nút Stop trên thanh menu macOS.
7. Đổi tên video đúng checklist.
8. Di chuyển vào:
   `03_EVIDENCE_RAW/VIDEOS/`.

## 2.3. Quy tắc RAW

RAW media:
- không thêm text;
- không vẽ mũi tên;
- không crop mất thông tin kỹ thuật;
- không chỉnh màu;
- không tăng tốc video;
- không thêm nhạc;
- không ghi đè file gốc sau khi đã dùng làm evidence.

---

# 3. QUY TẮC ĐẶT TÊN

## Project Basic

```text
B01_PB_Mxx_<MoTa>_RAW.png
B01_PB_Vxx_<MoTa>_RAW.mov
```

## Student Starter

```text
B01_SS_Mxx_<MoTa>_RAW.png
B01_SS_Vxx_<MoTa>_RAW.mov
```

## E2E Working Copy

```text
B01_E2E_Mxx_<MoTa>_RAW.png
B01_E2E_Vxx_<MoTa>_RAW.mov
```

Không đổi tên tùy ý vì tên file được dùng để liên kết:
- test ID;
- QA report;
- MEDIA_INDEX;
- Summary;
- Giáo án;
- Slide.

---

# 4. GATE HDC-00 — KIỂM TRA MÔI TRƯỜNG TRƯỚC KHI TEST

## Project/ứng dụng
Godot 4.7.1 stable.

## Thao tác

1. Mở Godot.
2. Kiểm tra version là `4.7.1 stable`.
3. Khi mở project, xác nhận renderer là Compatibility.
4. Editor UI phải là English.
5. Xác nhận hai tài liệu hướng dẫn B01 đang dùng:
   - Godot 4.7.1 stable;
   - Compatibility;
   - English UI.

## PASS khi

- [ ] Godot 4.7.1 stable.
- [ ] Compatibility.
- [ ] English UI.
- [ ] Docs đúng baseline.
- [ ] PROJECT_BASIC tồn tại.
- [ ] STUDENT_STARTER tồn tại.
- [ ] B01_HUMAN_TEST_COPY tồn tại.

**Không cần chụp ảnh riêng nếu M01/PB-M01 sau đó đã thể hiện rõ môi trường.**

**Ghi vào HUMAN_TEST_RESULT_B01.md**

```text
HDC-00: PASS / FAIL
Note:
```

---

# 5. NẤC 1 — PROJECT_BASIC CANONICAL

## Đường dẫn project

```text
/Users/mac/Downloads/SNLT2026-HP01/
SNLT2026-HP01-B01/
SNLT2026-HP01-B01-PROJECT_BASIC/
project.godot
```

## Quy tắc

**KHÔNG sửa property. KHÔNG Cmd+S.**

---

## PB-01 — MỞ PROJECT BASIC

### Thao tác

1. Mở Godot.
2. Import/Open `PROJECT_BASIC/project.godot`.
3. Trong FileSystem mở:
   `scenes/main.tscn`.
4. Quan sát Scene Tree.

### Expected

Phải có cấu trúc chính:

```text
Main
├ Environment
├ Player
├ View
│ └ Camera
└ World
```

### PASS khi

- [ ] Project mở được.
- [ ] main.tscn mở được.
- [ ] Không lỗi blocker.
- [ ] Scene Tree đúng.

### Ghi note

```text
PB-01: PASS / FAIL
Actual:
```

---

## PB-02 — PLAYER CANONICAL

### Thao tác

1. Scene → chọn `Player`.
2. Inspector → mở `Transform`.
3. Xem `Position`.
4. Xem `Rotation`.

### Expected

```text
Position
X = 1.5
Y = 0.05
Z = 0

Rotation
X = 0°
Y = 0°
Z = 0°
```

### Chụp ảnh PB-M01

**Trước khi chụp**
- Player đang selected.
- Scene panel nhìn thấy `Player`.
- Inspector đang mở Transform.
- Position đọc rõ.
- viewport có Player/StartPlatform nếu có thể.

**Tên file**

```text
B01_PB_M01_Player_Canonical_RAW.png
```

**Lưu vào**

```text
03_HUMAN_TEST_REVIEW/03_EVIDENCE_RAW/IMAGES/
```

### PASS khi

- [ ] Position đúng `(1.5, 0.05, 0)`.
- [ ] Player Rotation bằng 0°.

---

## PB-03 — VIEW CANONICAL

### Thao tác

1. Scene → chọn `View`.
2. Inspector → Transform → Rotation.

### Expected

```text
X = 0°
Y = 25°
Z = 0°
```

### Chụp ảnh PB-M02

**Ảnh phải thấy**
- View selected;
- Rotation;
- Y = 25°;
- viewport 3D.

**Tên**

```text
B01_PB_M02_View_Canonical_RAW.png
```

**Lưu**
`03_EVIDENCE_RAW/IMAGES/`

### PASS khi
- [ ] Y = 25°.

---

## PB-04 — GAMEPLAY + HERO MEDIA

### Thao tác test

1. F5.
2. Chờ 2 giây.
3. Test W/A/S/D.
4. Test Space.
5. Quan sát tiếp đất.
6. Di chuyển Player vài giây để kiểm camera-follow.

### Expected

- [ ] W/A/S/D hoạt động.
- [ ] Space jump.
- [ ] Không xuyên sàn.
- [ ] Camera theo Player.
- [ ] View 25° vẫn có hiệu lực.
- [ ] Không lỗi runtime blocker.

### Chụp ảnh PB-M03 — Hero

**Thao tác trước khi chụp**
1. Trong runtime, đưa Player đến vị trí thấy rõ nhiều platform.
2. Chọn góc có chiều sâu 3D.
3. Player không sát mép ảnh.
4. Không chụp lúc đang motion blur.

**Tên**

```text
B01_PB_M03_Hero_Gameplay_RAW.png
```

**Lưu**
`03_EVIDENCE_RAW/IMAGES/`

### Quay PB-V01

**Kịch bản**
1. bắt đầu recording;
2. đứng yên 2 giây;
3. W;
4. A;
5. S;
6. D;
7. Space;
8. thử qua 1–2 platform;
9. giữ 2–3 giây cuối;
10. stop recording.

**Tên**

```text
B01_PB_V01_Canonical_Gameplay_RAW.mov
```

**Lưu**
`03_EVIDENCE_RAW/VIDEOS/`

---

## PB-05 — FALL RESET

### Thao tác

1. Run Project.
2. Điều khiển Player ra khỏi platform.
3. Để Player rơi.
4. Không restart bằng tay.
5. Chờ scene tự reload.

### Expected

```text
Player Y < -8
→ reload current scene
→ Player trở lại
→ tiếp tục chơi được
```

### Quay PB-V02

Bắt đầu quay trước khi Player rơi, kết thúc 2–3 giây sau reload.

**Tên**

```text
B01_PB_V02_Fall_Reset_RAW.mov
```

**Lưu**
`03_EVIDENCE_RAW/VIDEOS/`

### PASS khi
- [ ] Scene tự reload.
- [ ] Có thể chơi tiếp.

---

## PB-06 — COURSE / ĐỘ KHÓ

### Thao tác

1. Thử đi qua toàn bộ chuỗi platform.
2. Thử ít nhất 2 lượt nếu lượt đầu rơi.
3. Ghi dữ liệu.

### Ghi

```text
PB-06:
Số lượt thử:
Số lần rơi:
Platform khó nhất:
Khoảng nhảy bất hợp lý nếu có:
Nhận định 12–14 tuổi:
PASS / CONDITIONAL / FAIL
```

### Có thể chụp thêm Goal Hero

Nếu tới GoalPlatform và có khung đẹp:

```text
B01_PB_M04_Goal_Gameplay_RAW.png
```

Lưu vào `IMAGES/`.

**Ảnh này optional nhưng hữu ích cho học liệu.**

### Kết thúc Project Basic

- F8.
- Đóng project.
- **KHÔNG Save.**

---

# 6. NẤC 2 — STUDENT_STARTER CANONICAL

## Đường dẫn

```text
/Users/mac/Downloads/SNLT2026-HP01/
SNLT2026-HP01-B01/
SNLT2026-HP01-B01-STUDENT_STARTER/
project.godot
```

## Quy tắc

**KHÔNG sửa property. KHÔNG Cmd+S.**

---

## SS-01 — MỞ STARTER

### Thao tác

1. Open Student Starter.
2. Mở `scenes/main.tscn`.
3. Chờ Editor ổn định.

### Chụp SS-M01

**Trong ảnh phải thấy**
- Scene;
- FileSystem;
- 3D viewport;
- Inspector;
- tab main.tscn.

**Tên**

```text
B01_SS_M01_Project_Open_RAW.png
```

**Lưu**
`03_EVIDENCE_RAW/IMAGES/`

---

## SS-02 — SCENE TREE

### Thao tác

1. Mở rộng Main.
2. Mở rộng View.
3. Nếu World quá dài, chỉ mở đủ để thấy cấu trúc chính.

### Chụp

```text
B01_SS_M02_Scene_Tree_RAW.png
```

**Ảnh phải thấy**

```text
Main
├ Environment
├ Player
├ View
│ └ Camera
└ World
```

Lưu `IMAGES/`.

---

## SS-03 — PLAYER SUB-SCENE

### Thao tác

1. FileSystem → `objects/player.tscn`.
2. Double-click.
3. Mở rộng root Player.

### Chụp

```text
B01_SS_M03_Player_Subscene_RAW.png
```

**Phải thấy**
- tab player.tscn;
- root Player;
- node con chính;
- viewport nếu có thể.

Lưu `IMAGES/`.

---

## SS-04 — PLAYER BASELINE

### Thao tác

1. Quay lại main.tscn.
2. Chọn Player.
3. Inspector → Transform → Position.

### Expected

```text
X = 0
Y = 0.05
Z = 0
```

### Chụp

```text
B01_SS_M04_Player_Baseline_RAW.png
```

**Phải thấy**
- Player selected;
- Position;
- 0 / 0.05 / 0.

Lưu `IMAGES/`.

---

## SS-05 — VIEW BASELINE

### Thao tác

1. Chọn View.
2. Inspector → Transform → Rotation.

### Expected

```text
X = 0°
Y = 0°
Z = 0°
```

### Chụp

```text
B01_SS_M05_View_Baseline_RAW.png
```

Lưu `IMAGES/`.

---

## SS-06 — BASELINE RUNTIME

### Thao tác

1. F5.
2. Chờ 2 giây.
3. Test W/A/S/D.
4. Test Space.
5. Quan sát collision.
6. Quan sát camera-follow.
7. Có thể thử fall-reset một lần.

### Chụp

```text
B01_SS_M06_Baseline_Game_RAW.png
```

**Cố gắng chụp góc gần tương đương PB-M03 để tạo Before/After sau này.**

Lưu `IMAGES/`.

### Quay

```text
B01_SS_V01_Baseline_Movement_RAW.mov
```

**Kịch bản**
2 giây đứng yên → W/A/S/D → Space → tiếp đất.

Lưu `VIDEOS/`.

### PASS khi

- [ ] Movement.
- [ ] Jump.
- [ ] Collision.
- [ ] Camera follow.
- [ ] Fall reset nếu test.
- [ ] X=0 / View Y=0 vẫn là baseline.

### Kết thúc Student Starter

- F8.
- Đóng project.
- **KHÔNG Save.**

---

# 7. NẤC 3 — E2E WORKING COPY

## Đường dẫn

```text
/Users/mac/Desktop/B01_HUMAN_TEST_COPY/project.godot
```

Đây là project duy nhất được chỉnh + Save.

---

## E2E-01 — KIỂM WORKING COPY SẠCH

### Thao tác

1. Open working copy.
2. main.tscn.
3. Player → Position.
4. View → Rotation.

### Expected

```text
Player X = 0
View Y = 0°
```

Nếu đã là 1.5 / 25° trước khi test:
- dừng;
- tạo lại copy từ Student Starter canonical.

### Ghi

```text
E2E-01: PASS / FAIL
```

---

## E2E-02 — ĐỐI CHIẾU STEP-BY-STEP

Mở song song:

```text
01_DOCS/HUONG_DAN_THUC_HIEN_SAN_PHAM_STEP_BY_STEP.md
```

Đi theo đúng từng bước.

Mỗi bước ghi:

```text
Tên bước:
Tìm đúng Node? YES/NO
Tìm đúng panel? YES/NO
Property đúng? YES/NO
Có phải tự đoán thao tác quan trọng? YES/NO
Note:
```

Nếu phải tự đoán đáng kể → ghi finding DOC.

---

## E2E-03 — PLAYER POSITION X = 1.5

### Trước khi chỉnh

1. Chọn Player.
2. Xác nhận X=0.
3. Ghi dự đoán.

### Chỉnh

```text
Position X: 0 → 1.5
Y giữ 0.05
Z giữ 0
```

### Chụp E2E-M01

**Phải thấy**
- Player selected;
- Scene panel;
- Inspector;
- Position X=1.5;
- Y=0.05;
- Z=0;
- viewport.

**Tên**

```text
B01_E2E_M01_Player_X_1_5_Editor_RAW.png
```

Lưu `IMAGES/`.

### Run

1. F5.
2. Không di chuyển ngay.
3. Quan sát vị trí mới.

### Chụp E2E-M02

```text
B01_E2E_M02_Player_X_1_5_Run_RAW.png
```

Lưu `IMAGES/`.

### Quay E2E-V01

**Kịch bản**
Editor X=1.5 giữ 2 giây → F5 → vị trí runtime mới → giữ 4–5 giây.

**Tên**

```text
B01_E2E_V01_Player_Position_Change_RAW.mov
```

Lưu `VIDEOS/`.

---

## E2E-04 — VIEW ROTATION Y = 25°

### Trước khi chỉnh

1. F8.
2. Chọn View.
3. Xác nhận Y=0°.
4. Ghi dự đoán.

### Chỉnh

```text
Rotation Y: 0° → 25°
X giữ 0°
Z giữ 0°
```

### Chụp E2E-M03

```text
B01_E2E_M03_View_Y_25_Editor_RAW.png
```

**Phải thấy**
- View selected;
- Rotation Y=25°;
- viewport.

Lưu `IMAGES/`.

### Run

1. F5.
2. Di chuyển theo ít nhất 2 hướng.
3. Quan sát camera-follow.
4. Xác nhận góc View không bị trả về 0°.

### Chụp E2E-M04

Tìm frame gameplay đẹp, có Player + nhiều platform.

```text
B01_E2E_M04_View_Y_25_Game_RAW.png
```

Lưu `IMAGES/`.

### Quay E2E-V02

**Kịch bản**
Editor View Y=25° giữ 2 giây → F5 → di chuyển ít nhất 2 hướng → giữ 2–3 giây cuối.

```text
B01_E2E_V02_View_Rotation_Camera_Follow_RAW.mov
```

Lưu `VIDEOS/`.

---

## E2E-05 — SAVE → CLOSE → REOPEN → RUN

### Thao tác

1. F8.
2. Xác nhận:
   - Player X=1.5.
   - View Y=25°.
3. Nhấn `Cmd + S`.
4. Đóng Godot hoàn toàn.
5. Mở lại Godot 4.7.1.
6. Mở lại `B01_HUMAN_TEST_COPY`.
7. main.tscn.

### Chụp persistence Player

1. Chọn Player.
2. Position phải còn X=1.5.

**Tên**

```text
B01_E2E_M05_Reopen_Player_RAW.png
```

Lưu `IMAGES/`.

### Chụp persistence View

1. Chọn View.
2. Rotation phải còn Y=25°.

**Tên**

```text
B01_E2E_M06_Reopen_View_RAW.png
```

Lưu `IMAGES/`.

### Run lại

1. F5.
2. Test W/A/S/D.
3. Test Space.

### PASS khi

- [ ] Player X=1.5 vẫn còn.
- [ ] View Y=25° vẫn còn.
- [ ] Run bình thường.
- [ ] Movement/jump vẫn bình thường.

---

## E2E-06 — GOAL / COURSE MEDIA

Nếu có thể đi tới GoalPlatform:

### Chụp

```text
B01_E2E_M07_Goal_RAW.png
```

**Trong ảnh nên thấy**
- Player;
- GoalFlag;
- GoalPlatform;
- một phần course phía sau.

Lưu `IMAGES/`.

Optional nhưng rất hữu ích cho Summary/Slide.

---

# 8. GHI KẾT QUẢ VÀO HUMAN_TEST_RESULT_B01.md

Dùng mẫu:

```text
# B01 HUMAN TEST RESULT

HDC-00: PASS / FAIL

## PROJECT_BASIC
PB-01:
PB-02:
PB-03:
PB-04:
PB-05:
PB-06:

## STUDENT_STARTER
SS-01:
SS-02:
SS-03:
SS-04:
SS-05:
SS-06:

## E2E WORKING COPY
E2E-01:
E2E-02:
E2E-03:
E2E-04:
E2E-05:
E2E-06:

## HUMAN JUDGMENT
Camera:
Course:
Hướng dẫn:
Thời gian E2E:
Khả năng triển khai 55 phút:

## FINDINGS
- None
hoặc:
- HDC-B01-F01 ...

## MEDIA CAPTURED
PB-M01:
PB-M02:
PB-M03:
PB-V01:
PB-V02:

SS-M01:
SS-M02:
SS-M03:
SS-M04:
SS-M05:
SS-M06:
SS-V01:

E2E-M01:
E2E-M02:
E2E-M03:
E2E-M04:
E2E-M05:
E2E-M06:
E2E-M07:
E2E-V01:
E2E-V02:

## FINAL HUMAN STATUS
HUMAN_PASS / HUMAN_PASS_WITH_CONDITIONS / HUMAN_FAIL / NEEDS_RETEST
```

---

# 9. SAU KHI CHỤP/QUAY XONG — “UPLOAD” VÀO ĐÂU?

Ở giai đoạn Human Test, “upload” nghĩa là **đưa file vào thư mục local của repository**, chưa phải commit/push GitHub.

## Ảnh

Move/copy vào:

```text
SNLT2026-HP01-B01/
03_HUMAN_TEST_REVIEW/
03_EVIDENCE_RAW/
IMAGES/
```

## Video

Move/copy vào:

```text
SNLT2026-HP01-B01/
03_HUMAN_TEST_REVIEW/
03_EVIDENCE_RAW/
VIDEOS/
```

## Notes

Lưu vào:

```text
SNLT2026-HP01-B01/
03_HUMAN_TEST_REVIEW/
02_HUMAN_NOTES/
HUMAN_TEST_RESULT_B01.md
```

Sau đó báo ChatGPT để review.

---

# 10. CHƯA ĐƯỢC LÀM SAU HUMAN TEST

Trước khi ChatGPT review và Human xác nhận OK:

- KHÔNG commit.
- KHÔNG push.
- KHÔNG sửa functional code.
- KHÔNG copy toàn bộ RAW sang `04_MEDIA_APPROVED`.
- KHÔNG rename file đã được ChatGPT review mà không cập nhật catalog.
- KHÔNG chỉnh ảnh/video RAW.

---

# 11. KHI GỬI CHATGPT REVIEW

Có thể gửi theo batch.

## Batch A — Project Basic

```text
PB-M01
PB-M02
PB-M03
PB-V01
PB-V02
+ kết quả PB-01..PB-06
```

## Batch B — Student Starter

```text
SS-M01..SS-M06
SS-V01
+ kết quả SS-01..SS-06
```

## Batch C — E2E

```text
E2E-M01..M07
E2E-V01..V02
+ kết quả E2E-01..E2E-06
```

ChatGPT sẽ phân loại từng media:

```text
EVIDENCE_PASS
EVIDENCE_FAIL
LEARNING_MEDIA_APPROVED
QA_ONLY
RETAKE_REQUIRED
```

---

# 12. QUY TẮC CUỐI

**PROJECT_BASIC canonical**
- chỉ đọc/run/chụp/quay;
- không Save.

**STUDENT_STARTER canonical**
- chỉ đọc/run/chụp/quay;
- không Save.

**E2E WORKING COPY**
- được chỉnh;
- được Save;
- được Close/Reopen.

**RAW**
- là bằng chứng gốc;
- không chỉnh sửa.

**APPROVED MEDIA**
- chỉ được tạo sau review + Human approval.

**GitHub push**
- chỉ thực hiện trong Post-Validation sau Human OK.
