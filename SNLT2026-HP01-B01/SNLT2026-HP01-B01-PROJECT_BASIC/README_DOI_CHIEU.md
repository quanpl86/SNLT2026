# PROJECT BASIC — DỰ ÁN ĐỐI CHIẾU CHUẨN (GIÁO VIÊN)

Đây là bản dự án hoàn chỉnh chuẩn dành cho Giáo viên tham chiếu và kiểm thử bài học **SNLT2026-HP01-B01 — Khám phá trò chơi 3D**.

## Thông số phương án chuẩn (Canonical Reference)
1. **Player Position**: `(1.5, 0.05, 0)` (Vị trí xuất phát lệch phải 1.5m trên StartPlatform).
2. **View Rotation**: `(0°, 25°, 0°)` (Góc quan sát xoay theo trục Y 25 độ).
3. **Camera Baseline**: Position `(0, 3.4, 7.5)`, Rotation `(-20°, 0°, 0°)`, FOV `52`.

## Cấu trúc Scene Tree cốt lõi
- `Main` (Node3D)
  - `Environment`
  - `Player` (CharacterBody3D - Instance `objects/player.tscn`)
  - `View` (Node3D - Gắn `scripts/view.gd`)
    - `Camera` (Camera3D)
  - `World` (Static Platforms, Coins, GoalFlag)

## Cách khởi chạy & kiểm thử
- Mở dự án bằng **Godot 4.7.1 stable** (Compatibility Renderer).
- Nhấn **F5** hoặc nút **Run Project** để khởi chạy `scenes/main.tscn`.
- Phím điều khiển hạ tầng: `W/A/S/D` để di chuyển, `Space` để nhảy.
