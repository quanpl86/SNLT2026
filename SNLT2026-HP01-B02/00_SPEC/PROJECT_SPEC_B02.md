# PROJECT SPEC B02 — Nhân vật có thể điều khiển

## 1. Mục tiêu sản phẩm

B02 biến project nền thành một **nhân vật có thể điều khiển có chủ đích**, trong đó học sinh:
1. đọc biến `speed` và một hàm trả về tốc độ;
2. dự đoán tác động trước khi đổi giá trị;
3. chỉnh `speed`, chạy thử và giải thích kết quả;
4. phát hiện quan hệ giữa phím vật lý và Input action;
5. sửa mapping `move_right` trong InputMap để phím D tạo hành vi sang phải;
6. lưu và chứng minh thay đổi tồn tại sau khi mở lại.

Không dạy trước nội dung B03.

## 2. Nền kỹ thuật

- Godot 4.7.1 stable.
- Renderer: Compatibility.
- Editor UI: English.
- Instruction: tiếng Việt; tên UI theo mẫu `Tên tiếng Việt (Exact English UI label)`.
- Web-first ở cấp học phần; B02 chưa có Web gate riêng.
- Cấu trúc scene tiếp tục tối giản theo B01: Main / Environment / Player / View / Camera / World.
- Nguồn tham chiếu: PJT-004; GD-004 GDScript Basics; GD-005 Input Examples; GD-006 InputMap.
- Nếu tái sử dụng project B01 hiện tại khi B01 chưa lock, phải ghi `B01_CANDIDATE_DEPENDENCY` và đồng bộ lại sau khi B01 chốt.

## 3. Thiết kế Project Basic Canonical

### `scripts/player.gd` — vùng B02 bắt buộc

Antigravity phải refactor hằng `SPEED` của B01 thành biến học sinh có thể đọc/chỉnh, và thêm hàm có tên rõ:

```gdscript
# === B02 — VÙNG PHẢI HIỂU / CHỈNH SỬA ===
var speed: float = 6.0

func get_move_speed() -> float:
    return speed
# === HẾT VÙNG B02 ===
```

Phần movement core đang dùng tốc độ phải lấy giá trị qua `get_move_speed()` thay vì hard-code. Không thay đổi mục tiêu vật lý của B03.

### Vùng C — cung cấp sẵn

Giữ và đánh dấu rõ:
- `extends CharacterBody3D`;
- Input vector / Vector3;
- gravity;
- jump;
- `move_and_slide()`;
- camera-follow;
- fall-reset;
- collision/world.

Có thể refactor tối thiểu để gọi `get_move_speed()`, nhưng học sinh B02 không phải sửa/giải thích chi tiết phần này.

### InputMap canonical

- `move_left` → A
- `move_right` → D
- `move_forward` → W
- `move_back` → S
- `jump` → Space (hạ tầng C, không phải minh chứng B02)

Không kiểm tra phím vật lý trực tiếp ở nhiều nơi trong mã; logic gameplay đọc action có tên.

## 4. Student Starter Canonical

Student Starter phải **có chủ đích chưa hoàn tất**, nhưng vẫn mở/chạy được:
- `speed = 4.0`.
- `get_move_speed()` đã có để học sinh đọc luồng biến → hàm.
- `move_right` action **tồn tại nhưng không có event D**.
- `move_left=A`, `move_forward=W`, `move_back=S`; do đó baseline W/A/S hoạt động, D không.
- Không làm sẵn prediction, explanation, final decision.
- Không yêu cầu học sinh sửa Vector3/CharacterBody3D/gravity/jump.

## 5. Đường đi E2E chuẩn để kiểm thử hướng dẫn

1. Copy Student Starter → `B02_HUMAN_TEST_COPY`.
2. F5 baseline: W/A/S hoạt động, D không.
3. Đọc `speed=4.0` và `get_move_speed()`.
4. Ghi dự đoán trước khi sửa.
5. Sửa `speed` 4.0 → 6.0.
6. F5, so sánh, ghi kết quả và giải thích.
7. Vào Dự án (Project) → Thiết lập dự án… (Project Settings...) → Bản đồ đầu vào (Input Map).
8. Mở `move_right`, thêm phím D.
9. F5, xác nhận D hoạt động; regression W/A/S.
10. `Cmd+S`, đóng Godot, mở lại, xác nhận `speed=6.0` và D mapping còn tồn tại.
11. Hoàn tất hồ sơ minh chứng.

## 6. Ownership

- **A — Học sinh tự tạo:** prediction, kết quả quan sát, lựa chọn cấu hình, giải thích, hồ sơ minh chứng.
- **B — Học sinh chỉnh sửa có ý nghĩa:** `speed`, cấu hình InputMap `move_right` → D.
- **C — Chương trình cung cấp:** Scene/world/camera, CharacterBody3D, Vector3 movement core, gravity, collision, jump, fall-reset, config nền.

Mức C không được dùng thay minh chứng cá nhân.

## 7. Tài liệu/dự án bắt buộc Antigravity tạo

```text
SNLT2026-HP01-B02/
├── 00_SPEC/                         # gói ChatGPT canonical
├── 01_DOCS/
│   ├── HUONG_DAN_TUONG_TAC_SAN_PHAM.md
│   ├── HUONG_DAN_CAU_HINH_TRIEN_KHAI_DU_AN.md
│   ├── HUONG_DAN_THUC_HIEN_SAN_PHAM_STEP_BY_STEP.md
│   └── NGUON_VA_GIAY_PHEP.md
├── evidence/
│   └── HO_SO_MINH_CHUNG_B02.md
├── SNLT2026-HP01-B02-PROJECT_BASIC/
├── SNLT2026-HP01-B02-STUDENT_STARTER/
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

## 8. Tài nguyên học liệu cần sản xuất sau khi project ổn định

### Học sinh
- Step-by-Step chi tiết.
- Summary tích hợp K03/K04/K05 + hình/sơ đồ + code đọc/chỉnh + worksheet + prediction + thử nghiệm + giải thích + challenge + checklist + self-check.
- Hồ sơ sản phẩm.
- Student Starter.

### Giáo viên
- Giáo án 120 phút có đáp án hoạt động, tiêu chí quan sát, lỗi phổ biến và hướng dẫn chữa.
- Slides 16:9 ít chữ, có speaker notes.
- Project Basic/Teacher Master.
- Mã chuẩn + giải thích.
- Bộ media đã được ChatGPT/Human duyệt.

## 9. Không được làm

- Không mở K06/K07/K08 như kiến thức mới.
- Không biến API thành LO độc lập.
- Không đưa Blockbench vào B02.
- Không cho học sinh chép nguyên controller do giáo viên viết.
- Không tuyên bố Runtime/Human/Web PASS khi chưa có kiểm thử tương ứng.
- Không đưa đáp án quiz vào tài liệu học sinh.
