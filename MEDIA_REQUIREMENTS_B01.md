# MEDIA REQUIREMENTS — HP1 B01
## Kế hoạch chụp/quay media canonical cho toàn bộ học liệu B01

**Bài học**: HP1 — B01 — Khám phá trò chơi 3D  
**Trạng thái**: `OFFICIAL_CHATGPT_ISSUED`  
**Thẩm quyền**: ChatGPT — Canonical Learning-Media Planner & Art-Direction Authority  
**Engine khi chụp/quay**: Godot `4.7.1 stable`  
**Renderer**: `Compatibility` (`gl_compatibility`)  
**Editor UI**: English  
**Nguồn project**: `B01_HUMAN_TEST_COPY` dùng để thao tác/chụp; không làm thay đổi Student Starter canonical trong Git repository.

---

# 1. MỤC TIÊU

Bộ media B01 phải phục vụ đồng thời 4 nhóm nhu cầu:

1. **Minh chứng Human Test** — chứng minh project và hướng dẫn hoạt động đúng trên máy thật.
2. **Học liệu học sinh** — Hướng dẫn từng bước + Summary.
3. **Học liệu giáo viên** — Giáo án + hướng dẫn tổ chức/giải thích.
4. **Slide 16:9** — hình trực quan, ít chữ, đủ rõ khi trình chiếu.

Nguyên tắc:

> `TEST EVIDENCE ≠ automatically LEARNING MEDIA`

Mỗi file RAW phải được giữ nguyên làm bằng chứng. Chỉ các media được ChatGPT chọn và Human phê duyệt mới được copy sang thư mục `04_MEDIA_APPROVED/`.

---

# 2. CẤU TRÚC THƯ MỤC ĐỀ XUẤT

```text
SNLT2026-HP01-B01/
└── 03_HUMAN_TEST_REVIEW/
    ├── 00_README.md
    ├── 01_CHECKLIST/
    │   ├── HUMAN_DOUBLE_CHECK_B01.md
    │   └── MEDIA_REQUIREMENTS_B01.md
    ├── 02_HUMAN_NOTES/
    │   └── HUMAN_TEST_RESULT_B01.md
    ├── 03_EVIDENCE_RAW/
    │   ├── IMAGES/
    │   └── VIDEOS/
    ├── 04_MEDIA_APPROVED/
    │   ├── IMAGES/
    │   └── VIDEOS/
    └── 05_MEDIA_CATALOG/
        └── MEDIA_INDEX.md
```

Không xóa `03_EVIDENCE_SCREENSHOTS/` cũ cho tới khi các link cũ được kiểm tra. Có thể giữ nó làm compatibility alias hoặc thư mục lưu trữ cũ.

---

# 3. QUY CHUẨN CHỤP ẢNH / QUAY VIDEO

## 3.1 Ảnh RAW

- Định dạng: PNG.
- Chụp ở độ phân giải gốc của màn hình; ưu tiên ít nhất 1920×1080 nếu máy hỗ trợ.
- Không thêm mũi tên, chữ, callout, highlight hay chỉnh màu vào ảnh RAW.
- Không crop mất context kỹ thuật quan trọng.
- Không để lộ thông tin cá nhân, Finder/Desktop, notification, tài khoản, tên người dùng hoặc cửa sổ không liên quan.
- Editor phải dùng English UI.
- Khi ảnh phục vụ property:
  - Node đúng phải đang được chọn trong bảng Cảnh (**Scene**).
  - Nhóm `Transform` trong bảng Thuộc tính (**Inspector**) phải mở.
  - Property và giá trị phải đọc được.
- Khi ảnh phục vụ gameplay:
  - chụp cửa sổ game rõ ràng;
  - tránh motion blur;
  - giữ nhân vật và platform mục tiêu trong khung.

## 3.2 Video RAW

- Ưu tiên `.mov` trên macOS hoặc `.mp4` nếu công cụ xuất trực tiếp.
- Không nhạc nền, không voice-over.
- Không tăng tốc.
- Trước thao tác chính: giữ 1–2 giây.
- Sau khi kết quả xuất hiện: giữ 2–3 giây.
- Không quay toàn desktop nếu có thể chỉ quay cửa sổ Godot/game.
- Video evidence không cần dựng đẹp; video learning-media sau này mới được cắt.

## 3.3 Tên file

```text
B01_Mxx_<MoTaNgan>_RAW.png
B01_Vxx_<MoTaNgan>_RAW.mov
```

Media sau khi được duyệt:

```text
B01_Mxx_<MoTaNgan>_APPROVED.png
B01_Vxx_<MoTaNgan>_APPROVED.mov
```

---

# 4. DANH SÁCH ẢNH BẮT BUỘC

## B01-M01 — Toàn cảnh Godot Editor sau khi mở Student Starter

**Test liên quan**: HDC-01  
**Mức độ**: BẮT BUỘC  
**Loại**: `PROOF + LEARNING_MEDIA`

### Trước khi chụp
1. Mở Godot 4.7.1 stable.
2. Mở `B01_HUMAN_TEST_COPY`.
3. Mở `scenes/main.tscn`.
4. Đảm bảo không có popup che giao diện.

### Trong ảnh bắt buộc phải thấy
- bảng Cảnh (**Scene**);
- bảng Hệ thống tệp (**FileSystem**);
- vùng 3D Viewport;
- bảng Thuộc tính (**Inspector**);
- tab `main.tscn`;
- scene 3D hiển thị bình thường.

### Không cần thấy
- Desktop;
- Dock;
- Finder;
- tài khoản cá nhân.

**Tên RAW**: `B01_M01_Project_Open_Editor_RAW.png`

**Tái sử dụng dự kiến**
- HS-01: Bước mở dự án.
- HS-02 Summary: Làm quen Godot Editor.
- GV-01: chuẩn bị môi trường.
- GV-02 Slide: mở bài / giao diện làm việc.

**Caption dự kiến**
> Dự án B01 được mở trong Godot Editor với Scene, FileSystem, 3D Viewport và Inspector.

---

## B01-M02 — Scene Tree của `main.tscn`

**Test liên quan**: HDC-02, HDC-05  
**Mức độ**: BẮT BUỘC  
**Loại**: `PROOF + LEARNING_MEDIA`

### Trước khi chụp
1. `main.tscn` đang mở.
2. Mở rộng `Main`, `Environment`, `View`, `World` đủ để thấy cấu trúc chính.
3. Nếu cần, tăng chiều rộng panel Scene để tên Node không bị cắt.

### Trong ảnh phải thấy rõ
```text
Main
├ Environment
├ Player
├ View
│ └ Camera
└ World
```

Không cần mở toàn bộ node con platform nếu làm ảnh quá dài.

**Tên RAW**: `B01_M02_Scene_Tree_RAW.png`

**Tái sử dụng**
- HS-01: Bước Scene Tree.
- HS-02: K01 Node–Scene–Scene Tree.
- GV-01: câu hỏi phân tích.
- GV-02: slide kiến thức K01.

**Caption**
> Scene Tree cho biết các Node được tổ chức theo quan hệ cha–con trong scene chính.

---

## B01-M03 — `player.tscn` như một scene con

**Test liên quan**: HDC-05  
**Mức độ**: BẮT BUỘC  
**Loại**: `LEARNING_MEDIA`

### Trước khi chụp
1. Mở `objects/player.tscn`.
2. Mở rộng root `Player`.
3. Chỉnh panel Scene để đọc được tên các Node con.

### Trong ảnh phải thấy
- tab `player.tscn`;
- root `Player`;
- ít nhất các node hình học/collider chính của Player;
- 3D viewport của Player nếu có thể.

**Tên RAW**: `B01_M03_Player_Subscene_RAW.png`

**Tái sử dụng**
- HS-01: Bước phân tích scene con.
- HS-02: phân biệt Scene và Node.
- GV-02: slide “Một scene có thể được lắp vào scene khác”.

---

## B01-M04 — Player baseline trong Inspector

**Test liên quan**: HDC-02  
**Mức độ**: BẮT BUỘC  
**Loại**: `PROOF + LEARNING_MEDIA`

### Trước khi chụp
1. Quay lại `main.tscn`.
2. Chọn Node `Player`.
3. Inspector → mở `Transform`.
4. Đảm bảo `Position` đọc rõ.

### Trong ảnh phải thấy
- `Player` đang được chọn ở Scene;
- Inspector;
- `Transform → Position`;
- X = `0`;
- Y = `0.05`;
- Z = `0`;
- một phần 3D viewport có Player trên StartPlatform.

**Tên RAW**: `B01_M04_Player_Baseline_Position_RAW.png`

**Tái sử dụng**
- HS-01: “Đọc baseline trước khi chỉnh”.
- HS-02: K02 Position.
- GV-01/GV-02: mô hình ĐỌC → DỰ ĐOÁN → CHỈNH.

---

## B01-M05 — View baseline trong Inspector

**Test liên quan**: HDC-02  
**Mức độ**: BẮT BUỘC  
**Loại**: `PROOF + LEARNING_MEDIA`

### Trước khi chụp
1. Chọn `View`.
2. Inspector → `Transform`.
3. Đảm bảo `Rotation` đọc rõ.

### Trong ảnh phải thấy
- `View` đang được chọn;
- `Rotation X = 0°`;
- `Rotation Y = 0°`;
- `Rotation Z = 0°`;
- một phần viewport.

**Tên RAW**: `B01_M05_View_Baseline_Rotation_RAW.png`

---

## B01-M06 — Gameplay baseline

**Test liên quan**: HDC-03  
**Mức độ**: BẮT BUỘC  
**Loại**: `PROOF + LEARNING_MEDIA`

### Trước khi chụp
1. Player X = 0.
2. View Rotation Y = 0°.
3. Run Project (`F5`).
4. Đợi nhân vật đứng ổn định trên StartPlatform.

### Trong ảnh phải thấy
- Player;
- StartPlatform;
- ít nhất một phần chuỗi platform phía trước;
- góc nhìn baseline rõ.

**Tên RAW**: `B01_M06_Baseline_Game_RAW.png`

**Tái sử dụng**
- HS-01: Chơi trước khi phân tích.
- HS-02: “Baseline”.
- GV-02: slide CHƠI → PHÂN TÍCH.

---

## B01-M07 — Player Position X = 1.5 trong Editor

**Test liên quan**: HDC-06  
**Mức độ**: BẮT BUỘC  
**Loại**: `PROOF + LEARNING_MEDIA`

### Trước khi chụp
1. Stop game.
2. `main.tscn`.
3. Chọn `Player`.
4. Inspector → `Transform → Position`.
5. Nhập `X = 1.5`.
6. Đảm bảo Y = `0.05`, Z = `0`.

### Trong ảnh bắt buộc phải thấy
- Node `Player` đang được chọn;
- Scene panel;
- Inspector;
- Position X = `1.5`;
- Position Y = `0.05`;
- Position Z = `0`;
- 3D viewport có Player nằm trên StartPlatform.

**Tên RAW**: `B01_M07_Player_X_1_5_Editor_RAW.png`

**Tái sử dụng**
- HS-01: Thao tác Position.
- HS-02: K02.
- GV-01: minh họa thay đổi có chủ đích.
- GV-02: slide Transform.

**Caption**
> Thay đổi Position X làm vị trí xuất phát của Player dịch chuyển theo trục X.

---

## B01-M08 — Kết quả runtime sau Player X = 1.5

**Test liên quan**: HDC-06  
**Mức độ**: BẮT BUỘC  
**Loại**: `PROOF + LEARNING_MEDIA`

### Trước khi chụp
1. Player Position X = 1.5.
2. View Rotation Y vẫn = 0°.
3. Run Project.
4. Chụp khi Player đang đứng yên ở vị trí xuất phát mới.

### Trong ảnh phải thấy
- Player lệch khỏi vị trí baseline;
- vẫn đứng an toàn trên StartPlatform;
- khung game đủ giống B01-M06 để dễ so sánh Before/After.

**Tên RAW**: `B01_M08_Player_X_1_5_Run_RAW.png`

**Tái sử dụng**
- HS-01/HS-02: Before → After Position.
- GV-02: slide dự đoán → kiểm chứng.

---

## B01-M09 — View Rotation Y = 25° trong Editor

**Test liên quan**: HDC-07  
**Mức độ**: BẮT BUỘC  
**Loại**: `PROOF + LEARNING_MEDIA`

### Trước khi chụp
1. Stop game.
2. Chọn `View`.
3. Inspector → `Transform → Rotation`.
4. Nhập `Y = 25°`.
5. X = 0°, Z = 0°.

### Trong ảnh bắt buộc phải thấy
- Node `View` đang được chọn;
- Scene panel;
- Inspector;
- Rotation X = `0°`;
- Rotation Y = `25°`;
- Rotation Z = `0°`;
- viewport 3D.

**Lưu ý**
Viewport Editor không phải bằng chứng duy nhất cho camera runtime. Tác động thật được chứng minh bằng B01-M10 và B01-V03.

**Tên RAW**: `B01_M09_View_Y_25_Editor_RAW.png`

---

## B01-M10 — Gameplay sau View Rotation Y = 25°

**Test liên quan**: HDC-07, HDC-08  
**Mức độ**: BẮT BUỘC  
**Loại**: `PROOF + HERO_LEARNING_MEDIA`

### Trước khi chụp
1. Player X = 1.5.
2. View Y = 25°.
3. Run Project.
4. Di chuyển Player đến vị trí mà:
   - Player vẫn nhìn rõ;
   - chuỗi platform tạo chiều sâu 3D rõ;
   - Goal direction có thể quan sát được.

### Trong ảnh phải thấy
- Player;
- nhiều platform ở các độ sâu khác nhau;
- góc nhìn 3D sau Rotation 25°;
- bố cục không bị Player che khuất.

**Tên RAW**: `B01_M10_View_Y_25_Game_RAW.png`

**Tái sử dụng ưu tiên**
- HS-02 Summary — hình sản phẩm B01.
- GV-02 — hero image.
- HS-01 — kết quả thao tác 2.
- trang bìa/thumbnail bài nếu phù hợp.

**Caption**
> Góc nhìn sau khi xoay View 25° giúp người chơi quan sát chuỗi platform từ một hướng khác.

---

## B01-M11 — Reopen: Player Position vẫn = 1.5

**Test liên quan**: HDC-09  
**Mức độ**: BẮT BUỘC  
**Loại**: `PROOF`

### Trước khi chụp
1. Save Scene bằng `Cmd + S`.
2. Đóng Godot hoàn toàn.
3. Mở lại Godot 4.7.1.
4. Mở lại `B01_HUMAN_TEST_COPY`.
5. Mở `main.tscn`.
6. Chọn `Player`.

### Trong ảnh phải thấy
- Player selected;
- Inspector → Position X = `1.5`;
- Y = `0.05`;
- Z = `0`.

**Tên RAW**: `B01_M11_Reopen_Player_RAW.png`

---

## B01-M12 — Reopen: View Rotation vẫn = 25°

**Test liên quan**: HDC-09  
**Mức độ**: BẮT BUỘC  
**Loại**: `PROOF`

### Ngay sau B01-M11
1. Chọn `View`.
2. Chụp Inspector.

### Trong ảnh phải thấy
- View selected;
- Rotation Y = `25°`;
- X = 0°, Z = 0°.

**Tên RAW**: `B01_M12_Reopen_View_RAW.png`

---

## B01-M13 — GoalPlatform / đích đến

**Test liên quan**: HDC-10  
**Mức độ**: KHUYẾN NGHỊ CAO  
**Loại**: `LEARNING_MEDIA`

### Trước khi chụp
1. Run Project.
2. Di chuyển Player gần GoalPlatform hoặc trên GoalPlatform.
3. Chụp khi thấy cờ đích và context chuỗi platform.

**Tên RAW**: `B01_M13_Goal_Platform_RAW.png`

**Tái sử dụng**
- HS-01: mục tiêu chơi.
- HS-02: “thử thách có điểm bắt đầu và đích”.
- GV slide: sản phẩm bài.

---

# 5. VIDEO BẮT BUỘC / KHUYẾN NGHỊ

## B01-V01 — Baseline movement + jump

**Mức độ**: BẮT BUỘC  
**Test**: HDC-03  
**Thời lượng**: 15–25 giây

### Kịch bản quay
1. Bắt đầu khi game vừa Run.
2. Giữ 2 giây ở trạng thái đứng yên.
3. Thực hiện W → A → S → D, mỗi phím đủ nhìn thấy thay đổi.
4. Nhấn Space khi đứng trên platform.
5. Giữ 2 giây sau khi tiếp đất.

**Tên RAW**: `B01_V01_Baseline_Movement_Jump_RAW.mov`

**Dùng cho**
- QA evidence.
- đào tạo GV.
- có thể trích frame cho slide.

---

## B01-V02 — Player Position: Editor → Run

**Mức độ**: KHUYẾN NGHỊ CAO  
**Test**: HDC-06  
**Thời lượng**: 15–25 giây

### Kịch bản
1. Bắt đầu tại Editor với Player selected và Position X = 1.5.
2. Giữ 2 giây.
3. Nhấn F5.
4. Giữ khung game 4–5 giây để thấy vị trí xuất phát mới.

**Tên RAW**: `B01_V02_Player_Position_Change_RAW.mov`

---

## B01-V03 — View Rotation + camera-follow

**Mức độ**: BẮT BUỘC  
**Test**: HDC-07, HDC-08  
**Thời lượng**: 20–30 giây

### Kịch bản
1. Editor: View selected, Rotation Y = 25°.
2. Giữ 2 giây.
3. F5.
4. Di chuyển Player theo ít nhất 2 hướng.
5. Giữ đoạn cuối 2–3 giây.

### Phải chứng minh
- View 25° có hiệu lực runtime.
- Camera vẫn theo Player.
- Rotation không bị script ghi đè.

**Tên RAW**: `B01_V03_View_Rotation_Camera_Follow_RAW.mov`

---

## B01-V04 — Fall reset

**Mức độ**: BẮT BUỘC CHO QA, KHÔNG MẶC ĐỊNH DÙNG CHO HS  
**Test**: HDC-04  
**Thời lượng**: 10–20 giây

### Kịch bản
1. Run game.
2. Điều khiển Player rơi khỏi platform.
3. Tiếp tục quay cho tới khi scene reload.
4. Giữ 2 giây sau khi Player xuất hiện lại.

**Tên RAW**: `B01_V04_Fall_Reset_RAW.mov`

**Reuse mặc định**
- QA evidence.
- Teacher troubleshooting.
- Không đưa vào Student Summary trừ khi ChatGPT quyết định sau.

---

# 6. MEDIA KHÔNG CẦN HUMAN CHỤP — CHATGPT SẼ TỰ THIẾT KẾ

Các visual sau **không yêu cầu Human chụp trong Godot**:

1. Sơ đồ khái niệm `Node → Scene → Scene Tree`.
2. Sơ đồ trục X/Y/Z đơn giản cho K02.
3. Before/After composite của Player Position.
4. Before/After composite của View Rotation.
5. Sơ đồ “ĐỌC → DỰ ĐOÁN → CHỈNH → CHẠY → GIẢI THÍCH”.
6. Callout/annotation trên screenshot APPROVED.
7. Slide title/hero composition.
8. Diagram phân biệt “hạ tầng C” và “phần học sinh A/B”.

ChatGPT sẽ tạo/cắt/annotate từ media đã duyệt hoặc tạo visual riêng khi sản xuất học liệu.

---

# 7. ƯU TIÊN MEDIA THEO TÀI LIỆU

## HS-01 — Hướng dẫn chi tiết
Bắt buộc ưu tiên:
- M01, M02, M03, M04, M05, M06, M07, M08, M09, M10.

## HS-02 — Summary
Ưu tiên:
- M02 — Scene Tree.
- M04/M07 — Position before/after.
- M05/M09/M10 — Rotation before/after.
- M10 — hero product.
- diagrams do ChatGPT tạo.

## GV-01 — Giáo án
Ưu tiên:
- M01, M02, M07, M09.
- V01, V03, V04 khi đào tạo/troubleshooting.

## GV-02 — Slides 16:9
Ưu tiên:
- M06 baseline.
- M02 Scene Tree.
- M07 hoặc crop Position.
- M09 hoặc crop Rotation.
- M10 hero.
- M13 Goal nếu chất lượng tốt.

---

# 8. MEDIA INDEX — TRƯỜNG METADATA BẮT BUỘC

Mỗi file đưa vào catalog cần:

```text
MEDIA_ID:
FILE:
TYPE: IMAGE / VIDEO
SOURCE: HUMAN_CAPTURE / CHATGPT_GENERATED / PROJECT_CAPTURE
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

Trạng thái media:

```text
RAW_EVIDENCE
REVIEWED_EVIDENCE
APPROVED_LEARNING_MEDIA
REJECTED_FOR_LEARNING_MEDIA
QA_ONLY
```

---

# 9. QUY TRÌNH HUMAN CAPTURE TRONG MỘT PHIÊN

Thứ tự tối ưu để tránh thao tác lại:

1. M01 — Project open.
2. M02 — Scene Tree.
3. M03 — Player sub-scene.
4. M04 — Player baseline.
5. M05 — View baseline.
6. M06 + V01 — baseline runtime.
7. V04 — fall reset.
8. M07 — Player X=1.5.
9. M08 + V02 — runtime Player X=1.5.
10. M09 — View Y=25°.
11. M10 + V03 — runtime View Y=25° + camera follow.
12. Save `Cmd + S`.
13. Close Godot.
14. Reopen.
15. M11 — Player persistence.
16. M12 — View persistence.
17. M13 — GoalPlatform nếu có thể tạo shot tốt.
18. Hoàn thành note HDC-10..14.

---

# 10. ĐIỀU KIỆN ĐỂ MEDIA ĐƯỢC APPROVED

Một ảnh/video chỉ chuyển từ RAW sang APPROVED khi:

- Human Test liên quan đã PASS hoặc PASS WITH CONDITIONS không ảnh hưởng nội dung media.
- Không chứa thông tin cá nhân.
- UI/version đúng.
- Giá trị kỹ thuật đúng.
- Hình đủ rõ để đọc.
- Không có lỗi UI/runtime vô tình lọt vào ảnh nếu ảnh không nhằm chứng minh lỗi.
- ChatGPT xác định có mục đích sư phạm cụ thể.

Không tự copy toàn bộ evidence sang `04_MEDIA_APPROVED/`.

---

# 11. KẾT QUẢ HUMAN GỬI LẠI CHATGPT

Cùng với checklist HDC, Human chỉ cần gửi:

```text
MEDIA CAPTURE RESULT — B01

M01: CAPTURED / FAILED
M02: CAPTURED / FAILED
...
M13: CAPTURED / SKIPPED

V01: CAPTURED / FAILED
V02: CAPTURED / SKIPPED
V03: CAPTURED / FAILED
V04: CAPTURED / FAILED

Media notes:
- Mxx: ...
- Vxx: ...

Ảnh/video đính kèm:
- ...
```

ChatGPT sẽ quyết định file nào:
- chỉ giữ làm QA evidence;
- được duyệt làm learning media;
- cần chụp lại;
- cần crop/annotate;
- cần tạo diagram bổ sung.

---

# 12. GIỚI HẠN B01

Không yêu cầu trong media session B01:
- Blockbench.
- GDScript như nội dung học sinh phải đọc/sửa.
- Area3D/Signal/HUD.
- Web export/browser evidence.
- ảnh thuộc B02 trở đi.

Những nội dung này không thuộc learning-media scope của B01.
