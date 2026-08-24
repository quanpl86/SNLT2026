# B01 LESSON CONTEXT SNAPSHOT

**Tên bài học**: SNLT2026-HP01-B01 — Khám phá trò chơi 3D  
**Trạng thái triển khai**: `READY_FOR_HUMAN_TEST` / `READY_FOR_CHATGPT_REVIEW`  

---

## 1. Mục tiêu sư phạm lõi
- **CIO**:
  - `CIO01`: Phân tích cấu trúc Node–Scene của một project game 3D mẫu (K_NEW: K01, K02; K_PRIOR: —).
  - `CIO02`: Điều chỉnh có chủ đích vị trí/hướng nhìn của thành phần 3D/camera (K_NEW: K09; K_PRIOR: K01, K02 đã hình thành ở phần trước của cùng B1).
- **K_NEW**:
  - `K01`: Kiến trúc Node – Scene – Scene Tree trong Godot 4.
  - `K02`: Transform 3D cơ bản (Position X, Rotation Y).
  - `K09`: Camera3D và góc nhìn quan sát 3D.
- **K_PRIOR**:
  - CIO01: —
  - CIO02: K01, K02

---

## 2. Ranh giới nhiệm vụ Học sinh (Student Boundary)
- **Hạ tầng C (Cung cấp sẵn)**:
  - Cấu trúc 5 sàn platform (`StartPlatform`, `Platform01..03`, `GoalPlatform`).
  - Toàn bộ script điều khiển `scripts/player.gd` (W/A/S/D movement, Space jump, respawn safety Y < -8).
  - Script camera-follow `scripts/view.gd`.
- **Học sinh thực hiện A/B**:
  - Thao tác 1: Điều chỉnh `Player` Position `X` trên sàn xuất phát (Canonical = `1.5m`, Baseline = `0.0m`).
  - Thao tác 2: Điều chỉnh `View` Rotation `Y` để thay đổi góc nhìn Camera (Canonical = `25°`, Baseline = `0°`).
  - Điền phản hồi và minh chứng vào `evidence/HO_SO_MINH_CHUNG_B01.md`.

---

## 3. Các giá trị tham chiếu
- **PROJECT_BASIC (Canonical)**:
  - `Player.Position` = `(1.5, 0.05, 0)`
  - `View.Rotation` = `(0, 25, 0)`
- **STUDENT_STARTER (Baseline)**:
  - `Player.Position` = `(0, 0.05, 0)`
  - `View.Rotation` = `(0, 0, 0)`
