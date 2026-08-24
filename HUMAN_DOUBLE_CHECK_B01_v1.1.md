# HUMAN DOUBLE-CHECK B01 — 3-TARGET TESTING MODEL
## Checklist chính thức do ChatGPT phát hành

**Bài học**: HP1 — B01 — Khám phá trò chơi 3D  
**Phiên bản checklist**: v1.1  
**Trạng thái**: `OFFICIAL_CHATGPT_ISSUED`  
**Engine**: Godot `4.7.1 stable`  
**Renderer**: `Compatibility` (`gl_compatibility`)  
**Editor UI**: English  
**Mô hình kiểm thử**: `PROJECT_BASIC CANONICAL → STUDENT_STARTER CANONICAL → E2E WORKING COPY`

> Hai project canonical chỉ được mở, quan sát và chạy thử. Không lưu thay đổi vào scene/project canonical trong phiên Human Test. Chỉ E2E Working Copy được phép chỉnh sửa, Save, đóng và mở lại.

---

# HDC-00 — GATE MÔI TRƯỜNG

- [ ] Godot là `4.7.1 stable`.
- [ ] Renderer project là `Compatibility`.
- [ ] Editor UI là English.
- [ ] Hai tài liệu hướng dẫn B01 dùng Godot `4.7.1 stable`.
- [ ] Không còn `Godot 4.6` hoặc `Godot 4.x` như baseline hiện hành trong hai tài liệu hướng dẫn chính.
- [ ] `PROJECT_BASIC` canonical tồn tại.
- [ ] `STUDENT_STARTER` canonical tồn tại.
- [ ] Có `B01_HUMAN_TEST_COPY` độc lập để dùng cho E2E.

**Nếu FAIL**: dừng test, ghi finding, không chuyển sang HDC-PB-01.

---

# NẤC 1 — PROJECT_BASIC CANONICAL

## HDC-PB-01 — Mở Project Basic canonical

**Project**  
`SNLT2026-HP01-B01/SNLT2026-HP01-B01-PROJECT_BASIC/project.godot`

**Cách thực hiện**
1. Mở Godot 4.7.1.
2. Import/open Project Basic.
3. Mở `scenes/main.tscn`.
4. Không sửa bất kỳ property nào.

**Kiểm tra**
- [ ] Project mở được.
- [ ] Scene chính mở được.
- [ ] Không có lỗi blocker.
- [ ] Scene Tree có `Main`, `Environment`, `Player`, `View`, `Camera`, `World`.

**Kết quả**: [ ] PASS [ ] FAIL  
**Note**: ....................................................

## HDC-PB-02 — Xác nhận canonical target values

1. Chọn `Player` → Inspector → `Transform → Position`.
2. Ghi giá trị.
3. Chọn `View` → Inspector → `Transform → Rotation`.
4. Ghi giá trị.

**Expected**
- `Player.Position = (1.5, 0.05, 0)`.
- `Player Rotation = (0°, 0°, 0°)`.
- `View.Rotation = (0°, 25°, 0°)`.

**Kết quả**: [ ] PASS [ ] FAIL  
**Actual Player**: ...........................................  
**Actual View**: .............................................

## HDC-PB-03 — Runtime Project Basic

1. F5 Run Project.
2. Test `W`, `A`, `S`, `D`.
3. Test `Space` khi Player đứng trên platform.
4. Thử tiếp đất.
5. Quan sát camera khi di chuyển.
6. F8 Stop.

**Expected**
- [ ] W/A/S/D làm Player di chuyển.
- [ ] Space làm Player nhảy khi đứng trên sàn.
- [ ] Player không xuyên sàn.
- [ ] Camera theo Player.
- [ ] View 25° vẫn có hiệu lực runtime.
- [ ] Không có lỗi runtime blocker.

**Kết quả**: [ ] PASS [ ] FAIL

## HDC-PB-04 — Fall reset và khả năng hoàn thành course

1. Run Project.
2. Chủ động làm Player rơi khỏi platform.
3. Quan sát scene có reload.
4. Sau reload, thử đi/nhảy qua chuỗi platform tới gần GoalPlatform.

**Expected**
- [ ] Khi `Y < -8`, scene reload.
- [ ] Player trở lại trạng thái canonical.
- [ ] Có thể tiếp tục chơi sau reload.
- [ ] Chuỗi platform có thể hoàn thành trên máy thật.

**Số lượt thử course**: ........  
**Số lần rơi**: ........  
**Platform khó nhất**: .....................................

**Kết quả**: [ ] PASS [ ] FAIL [ ] CONDITIONAL

---

# NẤC 2 — STUDENT_STARTER CANONICAL

## HDC-SS-01 — Mở Student Starter canonical

**Project**  
`SNLT2026-HP01-B01/SNLT2026-HP01-B01-STUDENT_STARTER/project.godot`

1. Đóng Project Basic.
2. Mở Student Starter canonical.
3. Mở `scenes/main.tscn`.
4. Không sửa property.
5. Không Save scene.

**Kiểm tra**
- [ ] Project mở được.
- [ ] Scene Tree đúng.
- [ ] Không có lỗi blocker.

**Kết quả**: [ ] PASS [ ] FAIL

## HDC-SS-02 — Xác nhận baseline và student boundary

1. Chọn `Player` → `Transform → Position`.
2. Chọn `View` → `Transform → Rotation`.
3. Đối chiếu với Project Basic.

**Expected**
- `Player.Position = (0, 0.05, 0)`.
- `View.Rotation = (0°, 0°, 0°)`.

**Ranh giới sư phạm**
- [ ] Starter chưa làm sẵn `Player X = 1.5`.
- [ ] Starter chưa làm sẵn `View Y = 25°`.
- [ ] `player.gd` và `view.gd` là hạ tầng cung cấp sẵn.
- [ ] Không yêu cầu HS sửa GDScript trong B01.
- [ ] Phần HS phải thể hiện vẫn còn nguyên.

**Kết quả**: [ ] PASS [ ] FAIL

## HDC-SS-03 — Runtime hạ tầng Student Starter

1. F5.
2. Test W/A/S/D.
3. Test Space.
4. Thử rơi khỏi level để xác nhận reload.
5. F8.

**Expected**
- [ ] Movement hoạt động.
- [ ] Jump hoạt động.
- [ ] Collision hoạt động.
- [ ] Fall reset hoạt động.
- [ ] Camera-follow hoạt động.
- [ ] Không có lỗi blocker.

**Kết quả**: [ ] PASS [ ] FAIL

---

# NẤC 3 — E2E WORKING COPY

## HDC-E2E-01 — Mở working copy

**Working Copy**  
`/Users/mac/Desktop/B01_HUMAN_TEST_COPY/project.godot`

- [ ] Working Copy được tạo từ Student Starter canonical.
- [ ] Baseline vẫn là Player X=0.
- [ ] View Y=0°.

**Kết quả**: [ ] PASS [ ] FAIL

## HDC-E2E-02 — Đối chiếu Step-by-Step 1:1

Mở `01_DOCS/HUONG_DAN_THUC_HIEN_SAN_PHAM_STEP_BY_STEP.md` và làm theo toàn bộ các bước.

| Bước | Khớp project/UI | Phải tự đoán thao tác quan trọng? | Note |
|---|---|---|---|
| 1 — Mở Student Starter | [ ] Có [ ] Không | [ ] Có [ ] Không | |
| 2 — Run baseline | [ ] Có [ ] Không | [ ] Có [ ] Không | |
| 3 — Scene Tree | [ ] Có [ ] Không | [ ] Có [ ] Không | |
| 4 — Player Sub-scene | [ ] Có [ ] Không | [ ] Có [ ] Không | |
| 5 — Player Position | [ ] Có [ ] Không | [ ] Có [ ] Không | |
| 6 — View Rotation | [ ] Có [ ] Không | [ ] Có [ ] Không | |
| 7 — Save + Evidence | [ ] Có [ ] Không | [ ] Có [ ] Không | |

**Kết quả**: [ ] PASS [ ] FAIL

## HDC-E2E-03 — Player Position

1. Chọn `Main/Player`.
2. Xác nhận baseline `X=0, Y=0.05, Z=0`.
3. Ghi dự đoán.
4. Đổi `Position X = 1.5`.
5. F5.
6. Quan sát.
7. F8.

**Expected**
- [ ] Player xuất phát khác baseline.
- [ ] Player vẫn đứng an toàn trên StartPlatform.
- [ ] Không có lỗi mới.

**Dự đoán Human**: ........................................  
**Actual**: ..................................................

**Kết quả**: [ ] PASS [ ] FAIL

## HDC-E2E-04 — View Rotation

1. Chọn `Main/View`.
2. Xác nhận baseline `Y=0°`.
3. Ghi dự đoán.
4. Đổi `Rotation Y = 25°`.
5. F5.
6. Di chuyển bằng W/A/S/D.
7. Quan sát camera-follow.
8. F8.

**Expected**
- [ ] Góc nhìn thay đổi.
- [ ] View 25° có hiệu lực runtime.
- [ ] Camera vẫn theo Player.
- [ ] `view.gd` không ghi đè Rotation về 0°.

**Kết quả**: [ ] PASS [ ] FAIL

## HDC-E2E-05 — Save → Close → Reopen → Run

1. Stop game.
2. Xác nhận Player X=1.5 và View Y=25°.
3. `Cmd + S`.
4. Đóng Godot hoàn toàn.
5. Mở lại Godot.
6. Mở lại `B01_HUMAN_TEST_COPY`.
7. Kiểm tra Player và View.
8. F5 chạy lại.
9. Test W/A/S/D + Space.

**Expected**
- [ ] Player X=1.5 còn nguyên.
- [ ] View Y=25° còn nguyên.
- [ ] Project vẫn chạy.
- [ ] Movement/jump còn hoạt động.

**Kết quả**: [ ] PASS [ ] FAIL

## HDC-E2E-06 — Hồ sơ minh chứng

Mở `evidence/HO_SO_MINH_CHUNG_B01.md`.

- [ ] Có phần Scene Tree.
- [ ] Có phần giải thích vai trò Node.
- [ ] Có baseline, dự đoán, thay đổi, kết quả, quyết định, lý do cho Player Position.
- [ ] Có baseline, dự đoán, thay đổi, kết quả, quyết định, lý do cho View Rotation.
- [ ] Không biến hạ tầng C thành minh chứng năng lực cá nhân.

**Kết quả**: [ ] PASS [ ] FAIL

---

# HDC-HUMAN-01 — ĐÁNH GIÁ TRẢI NGHIỆM

**Camera**
- [ ] Dễ quan sát.
- [ ] Có điều kiện.
- [ ] Cần chỉnh.

**Course**
- [ ] Phù hợp 12–14.
- [ ] Phù hợp có điều kiện.
- [ ] Cần chỉnh.
- [ ] Chưa đủ bằng chứng.

**Hướng dẫn**
- [ ] Có thể đi theo mà không bị kẹt ở thao tác chính.
- [ ] Có bước cần sửa.
- [ ] Chưa đủ bằng chứng.

**Thời gian Human thực hiện E2E**: ........ phút

**Nhận định về khả năng triển khai phần thực hành trong khung 55 phút**
- [ ] Khả thi.
- [ ] Khả thi có điều kiện.
- [ ] Có nguy cơ vượt.
- [ ] Chưa đủ bằng chứng.

---

# HDC-HUMAN-02 — KẾT LUẬN

- [ ] `HUMAN_PASS`
- [ ] `HUMAN_PASS_WITH_CONDITIONS`
- [ ] `HUMAN_FAIL`
- [ ] `NEEDS_RETEST`

Nếu có finding:

```text
Finding ID: HDC-B01-Fxx
Target: PROJECT_BASIC / STUDENT_STARTER / E2E_COPY / DOCS
Test:
Phân loại: PROJECT / DOC / BOTH / NON-PROJECT
Triệu chứng:
Cách tái hiện:
Expected:
Actual:
Evidence:
Mức ảnh hưởng: BLOCKER / NON-BLOCKER
```

---

# MẪU PHẢN HỒI GỬI CHATGPT

```text
B01 HUMAN DOUBLE-CHECK — 3 TARGETS

HDC-00:
PB-01:
PB-02:
PB-03:
PB-04:

SS-01:
SS-02:
SS-03:

E2E-01:
E2E-02:
E2E-03:
E2E-04:
E2E-05:
E2E-06:

HUMAN-01:
HUMAN-02:

Findings:
- ...

Media captured:
- ...
```

**Không commit/push sau Human Test cho tới khi ChatGPT review evidence và Human xác nhận OK.**
