# CONTROL RECORD — HP1 B06 — Nguy hiểm và điểm kiểm tra

| Trường | Giá trị |
|---|---|
| HP | HP1 — Phiêu lưu Nền tảng 3D |
| Bài | B06 — Nguy hiểm và điểm kiểm tra |
| Sản phẩm bài | Hệ thống thất bại – hồi sinh với hazard + checkpoint |
| CIO | CIO11: Quản lý trạng thái thất bại/checkpoint. CIO12: Tham chiếu đúng đối tượng để cập nhật vị trí hồi sinh. |
| SIO | Cả hai → HP1-SIO03 |
| ULO | Cả hai → ULO-03, ULO-04 |
| K_NEW | CIO11: K12 Trạng thái và chuyển trạng thái. CIO12: K29 Tham chiếu Node/Object. |
| K_PRIOR theo Bảng LO | CIO11: K02,K08,K10,K11. CIO12: K12,K02. |
| Minh chứng bắt buộc theo Assessment | CIO11: MC-ML. CIO12: MC-ML. |
| Minh chứng hỗ trợ theo Bảng LO | MC-CN cho cả CIO11/CIO12. |
| Ownership | CHỈNH SỬA cho cả hai CIO. |
| Câu hỏi | HP1-B06-Q01→Q10, 10 câu / 30 phút, nguyên văn bản ĐÃ DUYỆT. |
| Nguồn kỹ thuật | PJT-004, PJT-003, GD-009, GD-010, GD-028 SceneTree, GD-027 Node, GD-003 Nodes and Scenes. |
| Asset | Hazard/checkpoint visual program-authored, gắn sẵn, Ownership C. |
| Trạng thái nguồn | Đủ để chuẩn bị/implement; runtime/Human PASS chưa có. |

## PHÁT HIỆN NGUỒN — B06-EV-01

**Nguồn A — Bảng LO:** CIO11/CIO12 đều liệt kê MC-ML, MC-CN.  
**Nguồn B — Ma trận Đánh giá v1.2:** minh chứng bắt buộc của CIO11/CIO12 đều là MC-ML; Activity Map cũng ghi MC-ML.  
**Ảnh hưởng:** nếu dùng Bảng LO làm evidence gate sẽ làm tăng yêu cầu bắt buộc trái thứ tự thẩm quyền.  
**Xử lý canonical:** Assessment quyết định minh chứng bắt buộc → MC-ML. MC-CN được giữ là supporting evidence, không thay code trace/explanation cá nhân.

## Thời lượng 120 phút

5' Gắn kết → 10' Khám phá → 15' Giải thích → 55' Vận dụng → 30' Quiz → 5' Chốt.

## Ranh giới sư phạm

**Phải hiểu:** state hiện tại, cập nhật checkpoint state, hazard→respawn, đúng Node/Object reference, `global_position`, vai trò `$Player`/tham chiếu tương đương.

**Được dùng lại:** Area3D/Signal từ B05, điều kiện K08, transform K02.

**Không mở:** HUD, win/lose screen, restart UI, checkpoint persistence qua phiên chơi, save file, state machine nâng cao, NodePath patterns phức tạp nếu không cần.
