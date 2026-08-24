# B01 LESSON CONTEXT SNAPSHOT

**Tên bài học**: SNLT2026-HP01-B01 — Khám phá trò chơi 3D  
**Trạng thái triển khai**: `READY_FOR_HUMAN_TEST` / `READY_FOR_CHATGPT_REVIEW`  

---

## 1. Mục tiêu sư phạm lõi
- **CIO**: CIO-01, CIO-02, CIO-04.
- **K_NEW**:
  - `K01`: Kiến trúc Node – Scene – Scene Tree trong Godot 4.
  - `K02`: Transform 3D cơ bản (Position X, Rotation Y).
  - `K09`: Camera3D và góc nhìn quan sát 3D.
- **K_PRIOR**: Không (Bài mở đầu Học phần 1).

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
