# PRODUCT SPEC — SNLT2026-HP01-B01

## 1. Mục tiêu sản phẩm
Xây một mini project platformer 3D ngắn, dễ đọc cấu trúc, đủ hấp dẫn để học sinh CHƠI trước rồi PHÂN TÍCH và REMIX. Trọng tâm không phải viết game từ đầu mà là đọc project thật và thực hiện hai chỉnh sửa Transform có chủ đích.

## 2. Hai phiên bản sản phẩm
### A. PROJECT_BASIC — bản hoàn chỉnh chuẩn giáo viên
Tên thư mục bắt buộc:
`SNLT2026-HP01-B01-PROJECT_BASIC`

Đây là phương án tham chiếu hoàn chỉnh. Nó phải chạy được và thể hiện một phương án remix chuẩn:
- Player Position: `(1.5, 0.05, 0)`.
- View Rotation Degrees: `(0, 25, 0)`.

### B. STUDENT_STARTER — bản base học sinh
Tên thư mục bắt buộc:
`SNLT2026-HP01-B01-STUDENT_STARTER`

Phải được dẫn xuất từ PROJECT_BASIC, nhưng trả hai vùng học sinh cần chỉnh về baseline:
- Player Position: `(0, 0.05, 0)`.
- View Rotation Degrees: `(0, 0, 0)`.

Hồ sơ minh chứng trong Starter phải để trống cho học sinh điền.

## 3. Trải nghiệm khi chạy
Khi Run Project:
- Người chơi thấy một nhân vật 3D đơn giản trên khu xuất phát.
- Có một đường platform ngắn gồm StartPlatform → Platform01 → Platform02 → Platform03 → GoalPlatform.
- Có 3 coin trực quan để tạo cảm giác game thật; coin không cần logic thu thập ở B1.
- Có GoalFlag trực quan ở khu đích; không cần win logic.
- W/A/S/D di chuyển; Space nhảy. Đây là hạ tầng C.
- Camera theo vị trí Player.
- Nếu Player rơi quá thấp, scene tự reload để học sinh không bị kẹt.

## 4. Scene Tree cốt lõi phải giữ tên chính xác
```text
Main
├── Environment
│   ├── WorldEnvironment
│   └── Sun
├── Player
├── View
│   └── Camera
└── World
    ├── StartPlatform
    ├── Platform01
    ├── Platform02
    ├── Platform03
    ├── GoalPlatform
    ├── Coins
    │   ├── Coin01
    │   ├── Coin02
    │   └── Coin03
    └── GoalFlag
        ├── Pole
        └── Flag
```

Các tên `Main`, `Environment`, `Player`, `View`, `Camera`, `World` là contract với tài liệu; không tự đổi.

## 5. Player Scene
`res://objects/player.tscn` phải có cấu trúc tối thiểu:
```text
Player
├── Collider
└── Character
    ├── Body
    ├── Visor
    └── DirectionMarker
```

Mục đích sư phạm: học sinh thấy `Player` xuất hiện như một thành phần trong Main nhưng khi mở scene Player thì bên trong có nhiều Node.

## 6. Hai thao tác học sinh phải thực hiện
### Thao tác 1 — Player Position
- Chọn `Main/Player`.
- Inspector → Transform → Position.
- Ghi baseline.
- Dự đoán.
- Thay đổi có chủ đích.
- Run và quan sát.
- Quyết định giữ/hoàn tác.

Phương án chuẩn trong PROJECT_BASIC: X từ `0` → `1.5`, Y/Z giữ nguyên.

### Thao tác 2 — View Rotation
- Chọn `Main/View`.
- Inspector → Transform → Rotation.
- Ghi baseline.
- Dự đoán tác động tới góc nhìn.
- Thay đổi có chủ đích.
- Run và quan sát.
- Quyết định giữ/hoàn tác.

Phương án chuẩn trong PROJECT_BASIC: Y từ `0°` → `25°`, X/Z giữ nguyên.

## 7. Camera
`Main/View/Camera` dùng để học K09 và kiểm tra vai trò camera.
Baseline bắt buộc:
- Position = `(0, 3.4, 7.5)`
- Rotation Degrees = `(-20, 0, 0)`
- Current = true
- FOV = 52

Không yêu cầu học sinh chỉnh Camera trực tiếp trong phương án B1 chính thức.

## 8. Artefact minh chứng
Starter phải có `evidence/HO_SO_MINH_CHUNG_B01.txt` hoặc `.md` với phần trống gồm:
1. Sơ đồ Scene Tree.
2. Vai trò Main/Player/View/Camera/World.
3. Player Position: trước → dự đoán → sau → kết quả → giữ/hoàn tác → lý do.
4. View Rotation: trước → dự đoán → sau → kết quả → giữ/hoàn tác → lý do.
5. Giải thích ngắn về Node đã chỉnh, property đã chỉnh và tác động của camera.

PROJECT_BASIC có thể có `evidence/PHUONG_AN_CHUAN_B01.md` làm bản đối chiếu giáo viên.

## 9. Không yêu cầu ở B1
- Không collectible logic.
- Không win/lose logic.
- Không HUD runtime.
- Không checkpoint.
- Không Web export.
- Không Blockbench.
- Không chỉnh code học sinh.
