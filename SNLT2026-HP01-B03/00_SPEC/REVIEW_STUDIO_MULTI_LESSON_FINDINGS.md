# REVIEW STUDIO — MULTI-LESSON READINESS FINDINGS

Các finding này được phát hiện khi đọc `00_REVIEW_STUDIO/server.js` trên remote branch b01 trước khi phát hành gói B03. Antigravity phải kiểm tra lại trên branch mới nhất trước khi sửa.

## RS-ML-01 — HP folder normalization

Current pattern:
`SNLT2026-${hp}-${lesson}`

Canonical JSON:
`hp = HP1`

Canonical filesystem:
`SNLT2026-HP01-B03`

Risk:
real result/media có thể ghi nhầm vào `SNLT2026-HP1-B03`.

Expected:
một hàm normalization/mapping filesystem riêng, ví dụ `HP1 -> HP01`, không đổi canonical JSON id.

## RS-ML-02 — Smoke result không tách theo HP/Bài

Current:
`_smoke_test/RESULTS/HUMAN_TEST_RESULT.json`

Risk:
B01/B02/B03 dùng chung một result file; test IDs/media IDs lặp (`PB-01`, `PB-M01`...) sẽ trộn/ghi đè metadata.

Expected:
```
_smoke_test/
  HP1/
    B01/RESULTS/HUMAN_TEST_RESULT.json
    B02/RESULTS/HUMAN_TEST_RESULT.json
    B03/RESULTS/HUMAN_TEST_RESULT.json
```
hoặc cấu trúc tương đương.

## RS-ML-03 — Smoke media nên tách theo HP/Bài

Current:
`_smoke_test/IMAGES/`
`_smoke_test/VIDEOS/`

Canonical filenames có Bxx giúp tránh phần lớn collision file, nhưng metadata dùng media_id như `PB-M01` lặp giữa bài.

Expected:
`_smoke_test/HP1/B03/IMAGES|VIDEOS` để isolation đầy đủ.

## RS-ML-04 — Backend RAW no-overwrite chưa fail-closed

Current behavior quan sát từ server:
- chỉ tạo RETAKE khi file tồn tại **và** `isRetake=true`;
- nếu file tồn tại và `isRetake=false`, sau đó `writeFileSync()` vẫn ghi target path.

Risk:
UI bug/request thủ công có thể overwrite RAW.

Expected backend:
- nếu target tồn tại và không có explicit retake: trả HTTP 409, không ghi file;
- retake: server tự cấp `_RETAKE_XX`;
- RAW immutable tại server, không chỉ ở UI.

## Gate

Trước khi chuẩn bị schema B04–B12 hàng loạt trên Review Studio, nên sửa và regression 4 finding này một lần ở framework để tránh lặp lỗi cho mọi bài.
