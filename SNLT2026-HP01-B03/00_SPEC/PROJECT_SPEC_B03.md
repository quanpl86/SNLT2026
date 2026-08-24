# PROJECT SPEC B03 — Movement + jump + Đường thử thách 3D

## 1. Mục tiêu

B03 biến controller đã có Input/biến/hàm từ B02 thành một cơ chế platform 3D mà học sinh có thể **đọc, chẩn đoán, chỉnh sửa và giải thích**:
1. đọc `Vector3` movement;
2. theo dấu `direction → velocity`;
3. quan sát CharacterBody3D xử lý movement/collision;
4. hiểu gravity và thành phần `velocity.y`;
5. sửa điều kiện jump để chỉ nhảy khi ở sàn;
6. dùng cơ chế đó vượt một đường thử thách 3D.

Không dạy controller nâng cao.

## 2. Technical baseline

- Godot 4.7.1 stable.
- Renderer: Compatibility.
- Editor UI: English.
- Instruction: tiếng Việt; exact English UI label giữ khi cần.
- Nguồn canonical: PJT-004, PJT-003, PJT-010, GD-004, GD-007, GD-008.
- B03 có thể kế thừa implementation candidate từ B02 trong giai đoạn chuẩn bị, nhưng phải ghi `B02_CANDIDATE_DEPENDENCY`.
- Khi B02 được khóa chính thức, B03 phải sync dependency rồi regression trước release.

## 3. Controller Project Basic — cấu trúc mục tiêu

Tên biến có thể giữ tương thích B02, nhưng vùng B03 phải dễ đọc:

```gdscript
# === B03 — VÙNG PHẢI HIỂU / CHỈNH SỬA ===
var input_dir := Input.get_vector(
    "move_left",
    "move_right",
    "move_forward",
    "move_back"
)

var direction := Vector3(input_dir.x, 0.0, input_dir.y)

velocity.x = direction.x * get_move_speed()
velocity.z = direction.z * get_move_speed()

if not is_on_floor():
    velocity.y -= gravity * delta

if Input.is_action_just_pressed("jump") and is_on_floor():
    velocity.y = jump_speed

move_and_slide()
# === HẾT VÙNG B03 ===
```

Antigravity không phải copy y nguyên nếu controller cần camera-relative movement, nhưng phải bảo toàn **construct**:
- Vector3 có x/y/z rõ;
- movement ngang đi qua velocity;
- gravity cập nhật velocity.y khi trên không;
- jump có input + floor condition;
- CharacterBody3D thực thi collision qua `move_and_slide()` hoặc cơ chế tương đương được Resource Catalog hỗ trợ.

Nếu dùng camera-relative vector từ B01/B02, comment phải tách phần toán xoay nâng cao khỏi vùng học sinh phải giải thích.

### Tham số candidate

Có thể kế thừa:
- speed: 6.0 từ B02 canonical candidate;
- jump_speed: 6.5;
- gravity: project setting 18.0 hoặc giá trị tương đương đã có.

Các giá trị này là **candidate technical baseline**, không phải LO. Antigravity phải local-test và Human phải đánh giá feel/course; không gắn PASS chỉ vì dùng đúng số.

## 4. Project Basic course

Tạo một `World`/course bằng primitive hoặc asset đã audit, đủ để quan sát:
- StartPlatform.
- Ít nhất 5 platform thử thách.
- Có dịch chuyển theo X/Z và chênh cao Y vừa phải.
- Một platform đích / GoalPlatform trực quan.
- Không có collectible/hazard/checkpoint ở B03.
- Không cần luật thắng hoàn chỉnh.

Acceptance:
- có thể hoàn thành bằng movement + single jump cơ bản;
- không cần double jump;
- có ít nhất một va chạm cạnh/sàn dễ quan sát;
- platform spacing cho thấy ảnh hưởng của jump/gravity nhưng không biến thành bài precision platformer quá khó.

## 5. Student Starter — hai learning gap có chủ đích

Student Starter phải mở/chạy được và chứa hai lỗi học tập **có thể chẩn đoán**.

### Gap A — movement Z

`direction` có đủ x/z nhưng `velocity.z` chưa dùng `direction.z`. Ví dụ:

```gdscript
velocity.x = direction.x * get_move_speed()
velocity.z = 0.0 # B03 TODO — chưa áp dụng direction.z
```

Baseline:
- A/D hoạt động.
- W/S không tạo movement z đúng.
- Không crash.

Học sinh:
ĐỌC → dự đoán → sửa `velocity.z` → F5 → thử W/A/S/D → giải thích.

### Gap B — jump hợp lệ

Starter cố ý thiếu floor condition:

```gdscript
if Input.is_action_just_pressed("jump"):
    velocity.y = jump_speed
```

Baseline:
- nhấn Space khi đang trên không có thể kích hoạt lại velocity jump.
- gravity vẫn tồn tại để bug thể hiện rõ.

Học sinh:
tái hiện → dự đoán → thêm `and is_on_floor()` → F5 → thử air-jump → tiếp đất → thử lại → giải thích Boolean AND.

## 6. Ownership

- **A — học sinh tự tạo:** prediction, observation, explanation, decision, hồ sơ minh chứng.
- **B — chỉnh sửa có ý nghĩa:** movement z/Vector3→velocity; jump condition.
- **C — chương trình cung cấp:** world/camera art; InputMap từ B02; phần camera-relative math nâng cao nếu có; fall-reset; cấu hình project; template course ban đầu.

B03 yêu cầu học sinh hiểu CharacterBody3D/gravity/move_and_slide ở mức LO, vì vậy nếu các dòng này được cung cấp sẵn thì **vẫn phải đọc/trace/giải thích**, nhưng không được coi việc chúng tồn tại sẵn là minh chứng cá nhân.

## 7. Dự án/tài liệu Antigravity phải tạo

```text
SNLT2026-HP01-B03/
├── 00_SPEC/
├── 01_DOCS/
│   ├── HUONG_DAN_TUONG_TAC_SAN_PHAM.md
│   ├── HUONG_DAN_CAU_HINH_TRIEN_KHAI_DU_AN.md
│   ├── HUONG_DAN_THUC_HIEN_SAN_PHAM_STEP_BY_STEP.md
│   └── NGUON_VA_GIAY_PHEP.md
├── evidence/
│   └── HO_SO_MINH_CHUNG_B03.md
├── SNLT2026-HP01-B03-PROJECT_BASIC/
├── SNLT2026-HP01-B03-STUDENT_STARTER/
├── 03_HUMAN_TEST_REVIEW/
│   ├── 01_CHECKLIST/
│   ├── 02_HUMAN_NOTES/
│   ├── 03_EVIDENCE_RAW/IMAGES/
│   ├── 03_EVIDENCE_RAW/VIDEOS/
│   ├── 04_MEDIA_APPROVED/IMAGES/
│   ├── 04_MEDIA_APPROVED/VIDEOS/
│   └── 05_MEDIA_CATALOG/
├── QA/
│   ├── QA_STATIC.md
│   ├── QA_RUNTIME.md
│   ├── QA_DIFF_STARTER_VS_MASTER.md
│   ├── HUMAN_VALIDATION.md
│   └── HANDOFF_REPORT.md
└── 99_RELEASE/
```

## 8. Không được làm

- Không mở kiến thức B04+.
- Không double jump/coyote time/jump buffer như core learning.
- Không Area3D/Signal/checkpoint/HUD.
- Không Blockbench ở B03.
- Không lấy `PJT-004` nguyên bản làm Student Starter; phải đóng gói theo construct B03.
- Không dùng Godot demo `master` như dependency cố định.
- Nếu chọn thêm project/asset từ Godot Asset Library/Kenney/Blockbench Gallery, phải audit từng nguồn/version/license trước khi dùng.
- Không tuyên bố Runtime/Human/Web PASS nếu chưa có test tương ứng.
