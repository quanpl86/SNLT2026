# ASSET / SOURCE / LICENSE — B01

## Nguồn chương trình có thẩm quyền
- Project source reference: **PJT-004 — Kenney Starter Kit 3D Platformer**.
- Theo Resource Catalog HP1: code nguồn MIT; asset nguồn CC0.
- Nguồn Godot chính thức liên quan B1: PJT-003, PJT-010; GD-001, GD-003, GD-027, GD-028 và nguồn transform/camera được catalog chỉ định.

## Chính sách triển khai B1
Để B1 nhẹ, dễ đóng gói và tránh dependency không cần thiết:
- Ưu tiên dựng visual bằng PrimitiveMesh/Material có sẵn trong Godot.
- Không yêu cầu import art asset Kenney vào B1.
- Không dùng Blender.
- Không dùng Blockbench ở B1.

## Nếu Antigravity tham khảo/copy code upstream
- Không copy mù quáng toàn bộ Starter Kit.
- Chỉ dùng phần thật sự cần cho baseline kỹ thuật.
- Nếu có đoạn code được sao chép hoặc chuyển thể đáng kể từ Kenney upstream, giữ attribution/notice MIT trong `01_DOCS/NGUON_VA_GIAY_PHEP.md` và docs project.

## Nếu Antigravity dùng asset ngoài đặc tả
Mặc định KHÔNG được dùng. Nếu cho rằng cần asset ngoài:
1. dừng thay đổi đó;
2. báo `BLOCKED_FOR_ASSET_APPROVAL`;
3. nêu asset, nguồn, license, lý do;
4. chờ phê duyệt.

## Ghi chú quyền sở hữu học sinh
Asset/world baseline là Ownership C và không được dùng làm minh chứng cá nhân B1.
