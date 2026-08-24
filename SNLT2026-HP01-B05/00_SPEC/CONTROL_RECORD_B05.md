# CONTROL RECORD — HP1 B05 — Vật phẩm trong thế giới

| Trường | Giá trị |
|---|---|
| HP | HP1 — Phiêu lưu Nền tảng 3D |
| Bài | B05 — Vật phẩm trong thế giới |
| Sản phẩm bài | Màn chơi có collectible + một tài sản Blockbench do học sinh tạo và tích hợp |
| CIO | CIO09: Tạo vùng phát hiện và sự kiện thu thập vật phẩm. CIO10: Tạo và tích hợp một tài sản Blockbench vào cơ chế thu thập. |
| SIO | CIO09 → HP1-SIO03. CIO10 → HP1-SIO04. |
| ULO | CIO09 → ULO-03, ULO-04. CIO10 → ULO-02. |
| K_NEW | CIO09: K10 Area3D/vùng phát hiện; K11 Event/Signal. CIO10: K14 Blockbench → GLB → Godot. |
| K_PRIOR theo Bảng LO | CIO09: K01,K02,K04,K07. CIO10: K01,K02. |
| Minh chứng bắt buộc theo Assessment | CIO09: MC-CN. CIO10: MC-3D + MC-CN. MC-ML của CIO09 là supporting evidence theo Bảng LO. |
| Ownership | CIO09: CHỈNH SỬA. CIO10: TỰ TẠO. |
| Câu hỏi | HP1-B05-Q01→Q10, 10 câu / 30 phút, nguyên văn bản ĐÃ DUYỆT. |
| Nguồn kỹ thuật | PJT-004, PJT-003, GD-009 Area3D, GD-010 Using Signals, BB-001 3D Export, BB-002 Format Features, GD-019 glTF support, GD-020 Importing 3D Scenes. |
| Tài nguyên phải tạo | Student Guide/Summary/evidence; Starter; Project Basic; Blockbench blank/reference; GLB placeholder/reference; Teacher Guide/slides; QA/Human Review; Review Studio JSON. |
| Trạng thái nguồn | Đủ để chuẩn bị/implement. Blockbench/Godot runtime validation: CHƯA CÓ. |

## PHÁT HIỆN NGUỒN — B05-K-01

Bảng LO khóa K_PRIOR của CIO09 là K01,K02,K04,K07. Assessment/Activity huy động thêm K08 ở cấp bài/hoạt động. Theo thứ tự thẩm quyền, CONTROL giữ K_PRIOR từ Bảng LO; Activity/Assessment có thể dùng K08 như kiến thức huy động rộng hơn nhưng không ghi đè K_PRIOR CIO.

## Thời lượng 120 phút

5' Gắn kết → 10' Khám phá → 15' Giải thích → 55' Vận dụng Godot/Blockbench/GDScript → 30' Quiz 10 câu → 5' Chốt.

## Ranh giới năng lực

**CIO09:** học sinh phải hiểu Area3D là vùng phát hiện, CollisionShape3D định nghĩa vùng, Signal là sự kiện; phải tạo/kết nối/kiểm chứng chuỗi thu thập có ý nghĩa.

**CIO10:** học sinh phải có file `.bbmodel` và `.glb` của chính mình, import được vào Godot và hoạt động trong collectible. Giữ placeholder/reference nguyên trạng không đạt MC-3D cá nhân.

**Không mở B6+:** state/checkpoint, Node reference K29, hazard, HUD, win/restart.
