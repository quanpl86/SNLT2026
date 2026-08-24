# QA RUNTIME — B08 (Kiểm thử Động & Web Export)

**BÀI HỌC**: B08 — Luật thắng và trải nghiệm trò chơi  
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
[ DONE ] reimport assets (B08_GOAL_PORTAL_PROGRAM.glb, B08_WIN_PANEL_PROGRAM.png, B08_ICON_RESTART_PROGRAM.png, B08_ICON_GOAL_LOCKED_PROGRAM.png, B08_ICON_GOAL_READY_PROGRAM.png)
[ DONE ] loading_editor_layout
Status: PASS (0 Parse Errors, Exit Code 0)
```

### Headless Web Export Check (K27)
- **Godot Export Command**:
  ```bash
  Godot --headless --path SNLT2026-HP01-B08-PROJECT_BASIC --export-release "Web" build/web/index.html
  ```
- **Export Artifacts Generated**:
  - `build/web/index.html` (5,492 bytes)
  - `build/web/index.js` (279,815 bytes)
  - `build/web/index.pck` (270,668 bytes)
  - `build/web/index.wasm` (39,513,091 bytes)
- **Status**: `PASS` (Build files được tạo sạch sẽ, Exit Code 0).

---

## 2. CHẠY THỬ WEB SERVER & SMOKE TEST

- **HTTP Server**: `python3 -m http.server 8088 --directory build/web`
- **HTTP Response Verification**:
  - `http://localhost:8088/index.html` ➔ `HTTP/1.0 200 OK`
  - `http://localhost:8088/index.wasm` ➔ `HTTP/1.0 200 OK`
  - `http://localhost:8088/index.pck` ➔ `HTTP/1.0 200 OK`

---

## 3. HÀNH VI RUNTIME MONG ĐỔI

- **Project Basic**:
  - Di chuyển người chơi tới `GoalPortal` khi chưa nhặt đủ 3 vật phẩm ➔ Game in log: `"Reached goal, but not enough crystals! Needed: 3 Got: 0"` ➔ Không kích hoạt Win UI.
  - Nhặt đủ 3 vật phẩm (`CrystalLabel` hiển thị `3/3`) ➔ Di chuyển tới `GoalPortal` ➔ Hiển thị overlay Win UI (`"THẮNG CUỘC!"` + nút `"Chơi lại"`).
  - Nhấn nút `"Chơi lại"` ➔ Call `get_tree().reload_current_scene()` ➔ Lượt chơi mới hoàn toàn sạch (`0/3`, chưa kích hoạt checkpoint, player ở vị trí ban đầu).

- **Student Starter**:
  - **Gap A (Early Win)**: Khi chạm Goal lập tức thắng dù chưa thu thập đủ vật phẩm. Sau khi học sinh sửa điều kiện `if crystal_count >= target_count:` ➔ Xử lý thắng đúng quy tắc.
  - **Gap B (Dirty Restart)**: Nhấn chơi lại chỉ chuyển vị trí Player nhưng giữ nguyên điểm crystal và trạng thái thắng. Sau khi học sinh sửa `get_tree().reload_current_scene()` ➔ Khởi động lại lượt chơi sạch.

---

## 4. GHI CHÚ QUAN TRỌNG VỀ GATES (TECHNICAL GATES DISTINCTION)

- Lần xuất bản Web này phục vụ minh chứng **CIO16 / MC-XB / MC-KT** bài B08.
- Cổng **`TG-WEB-SMOKE` chính thức trong Ma trận Technical Gates vẫn được giữ nguyên cho B09** theo đúng phân định nguồn canonical của ChatGPT.

---

## 5. KẾT LUẬN

Tất cả kiểm thử Native Import và Web Export CLI đạt `PASS`.
