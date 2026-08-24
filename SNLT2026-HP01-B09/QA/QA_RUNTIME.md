# QA RUNTIME — B09 (Kiểm thử Động & Formal TG-WEB-SMOKE)

**BÀI HỌC**: B09 — Ôn tập — Bản thử nghiệm Phiêu lưu Nền tảng 3D  
**ENGINE**: Godot 4.7.1 stable (Compatibility)  
**NGÀY THỰC HIỆN**: 2026-08-24  
**THỰC HIỆN BỞI**: Antigravity  
**KẾT QUẢ TỔNG THỂ**: `PASS`

---

## 1. CHẠY THỬ HEADLESS IMPORT & NATIVE EXPORT

### Headless Import Check
```text
Godot Engine v4.7.1.stable.official.a13da4feb
[ DONE ] first_scan_filesystem
[ DONE ] reimport assets (B04, B05, B06, B07, B08 assets)
[ DONE ] loading_editor_layout
Status: PASS (0 Parse Errors, Exit Code 0)
```

### Headless Web Export Check (K27 / TG-WEB-SMOKE)
- **Godot Export Command**:
  ```bash
  Godot --headless --path SNLT2026-HP01-B09-PROJECT_BASIC --export-release "Web" build/web/index.html
  ```
- **Export Artifacts Generated**:
  - `build/web/index.html` (5,503 bytes)
  - `build/web/index.js` (279,815 bytes)
  - `build/web/index.pck` (295,064 bytes)
  - `build/web/index.wasm` (39,513,091 bytes)
- **Status**: `PASS` (Exit Code 0).

---

## 2. CHẠY THỬ WEB SERVER & SMOKE TEST

- **HTTP Server**: `python3 -m http.server 8089 --directory build/web`
- **HTTP Response Verification**:
  - `http://localhost:8089/index.html` ➔ `HTTP/1.0 200 OK`
  - `http://localhost:8089/index.wasm` ➔ `HTTP/1.0 200 OK`
  - `http://localhost:8089/index.pck` ➔ `HTTP/1.0 200 OK`

---

## 3. THỰC THI BỆ BETA TEST MATRIX (BT-01 ➔ BT-06)

| Test ID | Nội dung kiểm thử | Actual Result | Expected Result | Trạng thái |
| :--- | :--- | :--- | :--- | :--- |
| **BT-01** | Start & Movement | Player di chuyển W/A/S/D và nhảy Space mượt mà | Player di chuyển & nhảy chính xác | `PASS` |
| **BT-02** | Collectible + HUD | Thu thập vật phẩm ➔ HUD cập nhật điểm `x/5` | HUD tăng số lượng điểm khi chạm item | `PASS` |
| **BT-03** | Checkpoint + Hazard | Vượt qua checkpoint ➔ va phải hazard ➔ respawn tại checkpoint | Player hồi sinh đúng vị trí checkpoint | `PASS` |
| **BT-04** | All Collectibles Reachable | **Master**: Đủ 5/5 vật phẩm trên level.<br>**Starter**: `BetaCrystal05` lơ lửng 15m (Defect recorded 4/5). Chỉnh Position ➔ Đủ 5/5. | Tùy bản: Master đạt 5/5; Starter phát hiện defect & fix vị trí ➔ 5/5 | `PASS` |
| **BT-05** | Win + Restart | Đủ 5/5 vật phẩm ➔ chạm Goal ➔ Win UI ➔ Chơi lại sạch (`get_tree().reload_current_scene()`) | Win UI hiển thị nút Chơi lại ➔ reset 0/5 | `PASS` |
| **BT-06** | Asset Integration | Model 3D Blockbench & UI Icons hiển thị chuẩn không vỡ mesh/texture | Asset 3D & UI render hoàn chỉnh | `PASS` |

---

## 4. FORMAL TECHNICAL GATE TG-WEB-SMOKE (B09)

- Cổng **`TG-WEB-SMOKE` chính thức trong Ma trận Technical Gates được nghiệm thu tại B09**:
  - `TG-01`: Build HTML5 export load được trên HTTP server.
  - `TG-02`: Phím điều khiển W/A/S/D + Space hoạt động.
  - `TG-03`: Collectible + HUD đồng bộ.
  - `TG-04`: Checkpoint + hazard respawn chính xác.
  - `TG-05`: Goal + Win UI + Clean restart hoạt động.
  - `TG-06`: 0 lỗi Web runtime.

---

## 5. KẾT LUẬN

Tất cả kiểm thử Headless Import, Web Export CLI, HTTP Server và Beta Test Matrix B09 đạt `PASS`.
