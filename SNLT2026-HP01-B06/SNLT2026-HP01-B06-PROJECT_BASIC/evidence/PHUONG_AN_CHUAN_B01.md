# HỒ SƠ MINH CHỨNG MẪU (PHƯƠNG ÁN ĐỐI CHIẾU CHUẨN - GIÁO VIÊN)

**Tên học sinh**: [Bản đối chiếu Giáo viên]  
**Bài học**: SNLT2026-HP01-B01 — Khám phá trò chơi 3D  

---

## Part 1: Phân tích cấu trúc Node–Scene (CIO01 / K01)
### 1.1 Sơ đồ Scene Tree Main
```text
Main
├── Environment (WorldEnvironment, Sun)
├── Player (CharacterBody3D - Sub-scene objects/player.tscn)
├── View (Node3D)
│   └── Camera (Camera3D)
└── World (StartPlatform, Platforms 01-03, GoalPlatform, Coins, GoalFlag)
```

### 1.2 Vai trò các Node cốt lõi
- **`Main`**: Root node chứa toàn bộ thế giới game 3D.
- **`Player`**: Nhân vật chính điều khiển được (chứa Collider và các hình khối tạo dáng nhân vật).
- **`View`**: Khung gắn camera, đi theo vị trí của Player.
- **`Camera`**: Tạo góc nhìn quan sát thế giới game cho người chơi.
- **`World`**: Chứa địa hình platform, vật thể coin và cờ đích.

---

## Part 2: Nhật ký Remix Nhân vật (CIO02 / K02 & K09)

### 2.1 Thao tác 1 — Thay đổi Vị trí Nhân vật (Player Position)
- **Node chỉnh sửa**: `Main/Player`
- **Thuộc tính**: Inspector → Transform → Position
- **Giá trị gốc (Baseline)**: `(0, 0.05, 0)`
- **Dự đoán trước khi chạy**: "Khi đổi vị trí X từ 0 thành 1.5, nhân vật sẽ dịch sang bên phải trên khu vực xuất phát."
- **Giá trị thử nghiệm chuẩn**: `(1.5, 0.05, 0)`
- **Kết quả quan sát sau khi Run**: Nhân vật xuất phát ở vị trí dịch sang phải 1.5m, vẫn đứng an toàn trên StartPlatform và di chuyển bình thường.
- **Quyết định**: Giữ thay đổi vì vị trí mới tạo điểm bắt đầu thú vị và an toàn.

### 2.2 Thao tác 2 — Thay đổi Góc nhìn Camera (View Rotation)
- **Node chỉnh sửa**: `Main/View`
- **Thuộc tính**: Inspector → Transform → Rotation
- **Giá trị gốc (Baseline)**: `(0°, 0°, 0°)`
- **Dự đoán trước khi chạy**: "Khi đổi góc xoay Y của View thành 25°, toàn bộ góc nhìn camera sẽ xoay chéo 25 độ, giúp quan sát đường đi chéo hơn."
- **Giá trị thử nghiệm chuẩn**: `(0°, 25°, 0°)`
- **Kết quả quan sát sau khi Run**: Camera xoay góc 25 độ quanh nhân vật, tầm nhìn bao quát tốt hơn đường đi platform.
- **Quyết định**: Giữ thay đổi để có góc nhìn chéo 3D ấn tượng.
