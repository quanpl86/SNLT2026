# ASSET PACKAGE REQUIREMENTS — B05

## Có trong package ChatGPT v1.0

- `B05_COLLECTIBLE_BLANK.bbmodel` — program-authored blank Generic Model, dành cho học sinh bắt đầu.
- `B05_COLLECTIBLE_REFERENCE.bbmodel` — program-authored teacher reference.
- `B05_COLLECTIBLE_PLACEHOLDER_PROGRAM.glb` — placeholder thực để Starter không phụ thuộc external download.
- `B05_COLLECTIBLE_REFERENCE_PREVIEW.glb` — preview thực do chương trình tạo; **không được coi là Blockbench-export validation**.
- license note + checksum.

## Antigravity phải làm

1. Mở cả hai `.bbmodel` bằng Blockbench thật.
2. Nếu schema không tương thích với Blockbench version đang dùng: báo finding; tạo lại file tương đương từ Generic Model theo spec, không tự đổi yêu cầu sư phạm.
3. Export `B05_COLLECTIBLE_REFERENCE.bbmodel` → `B05_COLLECTIBLE_REFERENCE_VALIDATED.glb`.
4. Import file validated vào Godot 4.7.1.
5. Dùng validated GLB trong Project Basic.
6. Giữ program placeholder trong Student Starter.
7. Tính SHA-256 tất cả file và hoàn tất source manifest.

## External reference

PJT-004 `models/block-coin.glb` là CC0 theo README nguồn và có thể dùng làm technical reference/fallback sau khi Antigravity tải đúng frozen commit + ghi checksum. Không dùng nó thay sản phẩm Blockbench của học sinh.
