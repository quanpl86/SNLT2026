# HUMAN DOUBLE-CHECK B01 — CHECKLIST CHÍNH THỨC TỪ CHATGPT

**Bài học:** HP1 — B01 — Khám phá trò chơi 3D  
**Trạng thái:** `OFFICIAL_CHATGPT_ISSUED`  
**Đối tượng kiểm thử:** `SNLT2026-HP01-B01-STUDENT_STARTER`  
**Godot:** `4.7.1 stable`  
**Renderer:** `Compatibility` (`gl_compatibility`)  
**Editor UI:** English  
**Branch / PR:** `b01` / `#1`

> Mục tiêu: HUMAN kiểm tra lại độc lập các hành vi đã được Antigravity test trên local, đồng thời xác thực các nội dung chỉ con người mới đánh giá được: thao tác thực tế, camera, save/reopen, độ khớp hướng dẫn và độ phù hợp với học sinh 12–14 tuổi.

---

## HDC-00 — Điều kiện trước khi bắt đầu

Không bắt đầu Human Test nếu một trong các điều kiện sau chưa đạt:

- [ ] Godot đúng `4.7.1 stable`.
- [ ] Renderer là `Compatibility`.
- [ ] Editor dùng English UI.
- [ ] `01_DOCS/HUONG_DAN_THUC_HIEN_SAN_PHAM_STEP_BY_STEP.md` đã ghi `Godot 4.7.1 stable`, không còn `Godot 4.6` hoặc `Godot 4.x` như baseline hiện hành.
- [ ] `01_DOCS/HUONG_DAN_CAU_HINH_TRIEN_KHAI_DU_AN.md` đã ghi `Godot 4.7.1 stable`.

Nếu chưa đạt, ghi `BLOCKED_DOC_VERSION_MISMATCH` và dừng. Không tự sửa tài liệu trong lúc Human Test.

### Tạo bản test độc lập
1. Đóng Godot.
2. Sao chép nguyên thư mục `SNLT2026-HP01-B01-STUDENT_STARTER` ra ngoài repository.
3. Đặt tên `B01_HUMAN_TEST_COPY`.
4. Tất cả chỉnh sửa `Position`, `Rotation`, Save, Close, Reopen thực hiện trên bản sao này.

**Không chỉnh `PROJECT_BASIC` trong vòng test này.**

Kết quả HDC-00: [ ] PASS  [ ] FAIL  
Ghi chú: ................................................................

---

## HDC-01 — Import và mở Student Starter

1. Mở Godot 4.7.1 stable.
2. Trong Trình quản lý dự án (**Project Manager**), chọn **Import**.
3. Chọn `project.godot` trong `B01_HUMAN_TEST_COPY`.
4. Chọn **Import & Edit**.
5. Chờ Editor mở hoàn chỉnh.

**Kỳ vọng:** project mở được; không có lỗi blocker; `scenes/main.tscn` mở được; các bảng **Scene**, **Inspector**, **FileSystem** hiển thị bình thường.

Kết quả: [ ] PASS  [ ] FAIL  
Ảnh đề nghị: `B01_HDC_01_project_open.png`

---

## HDC-02 — Scene Tree và baseline

1. Mở `scenes/main.tscn`.
2. Kiểm tra Scene Tree có `Main`, `Environment`, `Player`, `View`, `Camera`, `World`.
3. Chọn `Player` → **Inspector** → `Transform` → `Position`.
4. Chọn `View` → **Inspector** → `Transform` → `Rotation`.

**Kỳ vọng:**
- `Player.Position = (0, 0.05, 0)`.
- `View.Rotation = (0°, 0°, 0°)`.

Kết quả: [ ] PASS  [ ] FAIL  
Player baseline thực tế: ................................................  
View baseline thực tế: ..................................................

Ảnh bắt buộc:
- `B01_HDC_02_scene_tree.png`
- `B01_HDC_03_player_baseline.png`
- `B01_HDC_04_view_baseline.png`

---

## HDC-03 — Di chuyển, nhảy, va chạm cơ bản

1. Chạy dự án (**Run Project**, `F5`).
2. Nhấn lần lượt `W`, `A`, `S`, `D`.
3. Khi Player đứng trên sàn, nhấn `Space`.
4. Thử nhảy và tiếp đất lại.
5. Dừng (**Stop**, `F8`).

Đánh dấu:
- [ ] W hoạt động.
- [ ] A hoạt động.
- [ ] S hoạt động.
- [ ] D hoạt động.
- [ ] Space làm Player nhảy khi đang đứng trên sàn.
- [ ] Player tiếp đất, không xuyên sàn.
- [ ] Không có lỗi runtime blocker quan sát được.

Kết quả: [ ] PASS  [ ] FAIL  
Ảnh đề nghị: `B01_HDC_05_baseline_game.png`

> Đây là hạ tầng Ownership C, không phải minh chứng năng lực cá nhân B01.

---

## HDC-04 — Rơi khỏi level và tự phục hồi

1. Run Project.
2. Điều khiển Player rơi khỏi platform.
3. Chờ Player rơi xuống dưới level.
4. Quan sát việc nạp lại scene.

**Kỳ vọng:** khi `Y < -8.0`, scene được reload; Player quay về vị trí khởi đầu của scene đang lưu; game không kẹt ở trạng thái rơi vô hạn.

Kết quả: [ ] PASS  [ ] FAIL  
Ghi chú: ................................................................

---

## HDC-05 — Đối chiếu Scene Tree và Player Sub-scene theo tài liệu

Mở `01_DOCS/HUONG_DAN_THUC_HIEN_SAN_PHAM_STEP_BY_STEP.md` và thực hiện đúng Bước 3–4.

- [ ] `scenes/main.tscn` đúng.
- [ ] `objects/player.tscn` đúng.
- [ ] Tên Node khớp project.
- [ ] Có thể tìm đúng **Scene**, **Inspector**, **FileSystem** theo mô tả.
- [ ] Không phải tự đoán thao tác quan trọng.

Kết quả: [ ] PASS  [ ] FAIL  
Bước chưa khớp: ........................................................

---

## HDC-06 — Player Position: Đọc → Dự đoán → Chỉnh → Chạy → Giải thích

1. Chọn `Main/Player`.
2. Mở `Inspector → Transform → Position`.
3. Xác nhận baseline: `X=0`, `Y=0.05`, `Z=0`.
4. Ghi một câu dự đoán trước khi sửa.
5. Đổi `Position X` thành `1.5`.
6. Run Project.
7. Quan sát vị trí xuất phát mới.
8. Stop.

**Kỳ vọng:** Player vẫn đứng an toàn trên StartPlatform; vị trí xuất phát thay đổi rõ; không xuất hiện lỗi/xuyên sàn do thay đổi.

Dự đoán: ................................................................  
Quan sát: ................................................................  
Kết quả: [ ] PASS  [ ] FAIL

Ảnh bắt buộc:
- `B01_HDC_06_player_x_1_5_editor.png`
- `B01_HDC_07_player_x_1_5_run.png`

---

## HDC-07 — View Rotation Y và góc nhìn camera

1. Chọn `Main/View`, không chọn trực tiếp `Camera`.
2. Mở `Inspector → Transform → Rotation`.
3. Xác nhận baseline `Y=0°`.
4. Ghi dự đoán trước khi sửa.
5. Đổi `Rotation Y` thành `25°`.
6. Run Project.
7. Quan sát góc nhìn.
8. Di chuyển Player bằng `W/A/S/D` trong vài giây.

**Kỳ vọng:** góc nhìn thay đổi; camera vẫn theo Player; `View.Rotation Y=25°` không bị script ghi đè về 0°; Player vẫn quan sát được hợp lý.

Dự đoán: ................................................................  
Quan sát: ................................................................  
Camera dễ quan sát? [ ] Có [ ] Không [ ] Có điều kiện  
Kết quả: [ ] PASS  [ ] FAIL

Ảnh bắt buộc:
- `B01_HDC_08_view_y_25_editor.png`
- `B01_HDC_09_game_after_view_rotation.png`

---

## HDC-08 — Camera-follow sau Remix

Giữ `Player.Position X=1.5` và `View.Rotation Y=25°`.

1. Run Project.
2. Di chuyển Player tiến/lùi/trái/phải đủ xa để camera phải theo.
3. Quan sát 10–20 giây.

**Kỳ vọng:** camera theo vị trí Player; góc Y=25° được giữ; không có giật/nhảy góc bất thường do script ghi đè Rotation.

Kết quả: [ ] PASS  [ ] FAIL  
Ghi chú cụ thể nếu có hiện tượng khó chịu: ...............................

---

## HDC-09 — Save → Close → Reopen → Run

1. Stop game.
2. Xác nhận trong Editor:
   - `Player.Position X=1.5`
   - `View.Rotation Y=25°`
3. Lưu cảnh (**Save Scene**, `Cmd+S` trên macOS / `Ctrl+S` trên Windows).
4. Đóng Godot hoàn toàn.
5. Mở lại Godot 4.7.1 stable.
6. Mở lại chính `B01_HUMAN_TEST_COPY`.
7. Kiểm tra lại hai giá trị.
8. Run Project.
9. Kiểm tra lại W/A/S/D và Space.

**Kỳ vọng:** hai giá trị vẫn còn; project vẫn chạy; input vẫn hoạt động.

Kết quả: [ ] PASS  [ ] FAIL  
Ảnh bắt buộc: `B01_HDC_10_reopen_persistence.png`

---

## HDC-10 — Thử chuỗi 5 platform

1. Run Project ở trạng thái sau remix.
2. Thử di chuyển/nhảy qua chuỗi 5 platform tới GoalPlatform.
3. Thử tối thiểu 2 lượt nếu lượt đầu rơi.
4. Ghi dữ liệu quan sát.

Số lượt thử: ............  
Số lần rơi: ............  
Platform khó nhất: ......................................................  
Khoảng nhảy bất hợp lý (nếu có): .......................................

Nhận định Human về học sinh 12–14 tuổi:
- [ ] Phù hợp
- [ ] Phù hợp có điều kiện
- [ ] Cần chỉnh sửa
- [ ] Chưa đủ bằng chứng

Kết quả: [ ] PASS [ ] FAIL [ ] CONDITIONAL

---

## HDC-11 — Đối chiếu Step-by-Step 1:1

| Bước | Khớp project/UI | Phải tự đoán? | Ghi chú |
|---|---|---|---|
| Bước 1 — Mở Student Starter | [ ] Có [ ] Không | [ ] Có [ ] Không | |
| Bước 2 — Run baseline | [ ] Có [ ] Không | [ ] Có [ ] Không | |
| Bước 3 — Scene Tree | [ ] Có [ ] Không | [ ] Có [ ] Không | |
| Bước 4 — Player Sub-scene | [ ] Có [ ] Không | [ ] Có [ ] Không | |
| Bước 5 — Player Position | [ ] Có [ ] Không | [ ] Có [ ] Không | |
| Bước 6 — View Rotation | [ ] Có [ ] Không | [ ] Có [ ] Không | |
| Bước 7 — Save + Evidence | [ ] Có [ ] Không | [ ] Có [ ] Không | |

Nếu phải tự đoán nơi bấm, Node, property hoặc giá trị cần nhập, ghi finding `DOC` hoặc `BOTH`.

Kết quả: [ ] PASS  [ ] FAIL

---

## HDC-12 — Hồ sơ minh chứng và ranh giới nhiệm vụ học sinh

Mở `evidence/HO_SO_MINH_CHUNG_B01.md`.

- [ ] Có Part 1 cho sơ đồ Scene Tree.
- [ ] Có phần giải thích vai trò Node.
- [ ] Part 2.1 có baseline, dự đoán, giá trị thay đổi, kết quả, quyết định, lý do.
- [ ] Part 2.2 có baseline, dự đoán, giá trị thay đổi, kết quả, quyết định, lý do.
- [ ] Hướng dẫn không yêu cầu học sinh chỉnh `player.gd` hoặc `view.gd` ở B01.
- [ ] Movement/jump/collision/camera-follow vẫn là hạ tầng cung cấp sẵn, không phải minh chứng B01.

Kết quả: [ ] PASS  [ ] FAIL

---

## HDC-13 — Thời gian và khả năng triển khai

Thời gian Human từ HDC-01 đến HDC-12: ............ phút

Nhận định:
- [ ] Có khả năng triển khai phần thực hành khoảng 55 phút với hướng dẫn/điều phối giáo viên.
- [ ] Có khả năng nhưng cần điều kiện/hỗ trợ thêm.
- [ ] Có nguy cơ vượt thời lượng.
- [ ] Chưa đủ bằng chứng.

Ghi chú: ................................................................

---

## HDC-14 — Kết luận Human Double-Check

Chỉ chọn một:
- [ ] `HUMAN_PASS`
- [ ] `HUMAN_PASS_WITH_CONDITIONS`
- [ ] `HUMAN_FAIL`
- [ ] `NEEDS_RETEST`

Nếu FAIL, ghi:

```text
Finding ID: HDC-B01-Fxx
Test: HDC-xx
Phân loại: PROJECT / DOC / BOTH / NON-PROJECT
Triệu chứng:
Cách tái hiện:
Expected:
Actual:
Ảnh minh chứng:
Mức ảnh hưởng: BLOCKER / NON-BLOCKER
```

---

# ẢNH TỐI THIỂU GỬI LẠI CHATGPT

1. `B01_HDC_01_project_open.png`
2. `B01_HDC_02_scene_tree.png`
3. `B01_HDC_03_player_baseline.png`
4. `B01_HDC_04_view_baseline.png`
5. `B01_HDC_05_baseline_game.png`
6. `B01_HDC_06_player_x_1_5_editor.png`
7. `B01_HDC_07_player_x_1_5_run.png`
8. `B01_HDC_08_view_y_25_editor.png`
9. `B01_HDC_09_game_after_view_rotation.png`
10. `B01_HDC_10_reopen_persistence.png`

Có thể gửi ít ảnh hơn nếu một ảnh chứng minh rõ nhiều mục, nhưng phải đủ để ChatGPT đối chiếu các test quan trọng.

---

# MẪU PHẢN HỒI HUMAN GỬI CHATGPT

```text
B01 HUMAN DOUBLE-CHECK

HDC-00: PASS / FAIL
HDC-01: PASS / FAIL
HDC-02: PASS / FAIL
HDC-03: PASS / FAIL
HDC-04: PASS / FAIL
HDC-05: PASS / FAIL
HDC-06: PASS / FAIL
HDC-07: PASS / FAIL
HDC-08: PASS / FAIL
HDC-09: PASS / FAIL
HDC-10: PASS / FAIL / CONDITIONAL
HDC-11: PASS / FAIL
HDC-12: PASS / FAIL
HDC-13: nhận định thời lượng
HDC-14: HUMAN_PASS / HUMAN_PASS_WITH_CONDITIONS / HUMAN_FAIL / NEEDS_RETEST

Findings:
- ...

Ảnh gửi kèm:
- ...
```

---

## GIỚI HẠN CỦA VÒNG TEST

- Không xác nhận Web export/browser ở B01.
- Không đánh giá GDScript như năng lực học sinh B01.
- Không tự nâng Godot 4.7.1 stable từ `ENGINE_CANDIDATE` thành baseline HP1 chỉ dựa trên một vòng test; quyết định baseline chỉ được chốt sau khi Human evidence được ChatGPT review và HUMAN phê duyệt.
