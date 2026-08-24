# BÁO CÁO QA TĨNH (STATIC QA REPORT) — B01

**Bài học**: SNLT2026-HP01-B01  
**Kết quả tổng quan**: **STATIC_PASS**  

---

## Danh sách kiểm tra tiêu chuẩn (ST-01 .. ST-07)

| Mã test | Tên kiểm thử | Tiêu chuẩn | Kết quả | Ghi chú |
| :--- | :--- | :--- | :--- | :--- |
| **ST-01** | Cấu trúc thư mục | Cả 2 project có `project.godot`, main.tscn, player.tscn, 2 scripts, docs, evidence | **PASS** | Đạt 100% tệp quy định |
| **ST-02** | Renderer | Renderer `gl_compatibility` + Godot 4.6 feature flag | **PASS** | Khai báo chuẩn Compatibility |
| **ST-03** | Tham chiếu Resource | Mọi đường dẫn `res://` trỏ tới tệp tồn tại thực tế | **PASS** | Không có broken reference |
| **ST-04** | Scene Tree Contract | Đúng các Node: Main, Environment, Player, View, Camera, World | **PASS** | Khớp contract 100% |
| **ST-05** | Starter Boundary Baseline | Starter Player `(0, 0.05, 0)`, View `(0°, 0°, 0°)`, evidence trống | **PASS** | Không làm hộ nhiệm vụ HS |
| **ST-06** | Basic Canonical Completion | Basic Player `(1.5, 0.05, 0)`, View `(0°, 25°, 0°)`, evidence mẫu | **PASS** | Phương án đối chiếu chuẩn |
| **ST-07** | Diff Contract | Code, hạ tầng, world 2 project giống nhau ngoại trừ 2 transform & docs | **PASS** | Đã xác nhận qua Diff Report |
