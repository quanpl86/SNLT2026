# WEB EXPORT CHECKLIST B08 — FIRST EXPORT

## Trước export
- Project chạy native không blocker.
- Compatibility renderer.
- Main scene đúng.
- Export templates cài đúng phiên bản.
- Tất cả asset resolve.

## Export
- Project → Export.
- Add/choose Web preset.
- Output: `build/web/index.html`.
- Export Project.
- Ghi lỗi nếu có.
- Xác nhận build files tồn tại.

## Browser
Không mở trực tiếp `file://` rồi coi là test. Serve build qua HTTP.

Kiểm:
- trang tải;
- W/A/S/D;
- jump;
- collectible/HUD;
- checkpoint;
- hazard respawn;
- goal chưa đủ không thắng;
- đủ vật phẩm + goal thắng;
- Chơi lại tạo run mới sạch.

## Evidence
- MC-KT: checklist + lỗi/khắc phục.
- MC-XB: screenshot/video browser + build path/link nếu có.

**Export hoàn tất ≠ Web PASS.**
**B08 first export ≠ formal TG-WEB-SMOKE của B09.**
