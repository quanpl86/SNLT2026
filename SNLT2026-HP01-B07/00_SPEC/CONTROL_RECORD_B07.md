# CONTROL RECORD — HP1 B07 — Giao diện người chơi

| Trường | Giá trị |
|---|---|
| HP | HP1 — Phiêu lưu Nền tảng 3D |
| Bài | B07 — Giao diện người chơi |
| Sản phẩm bài | HUD Platform Adventure — hiển thị số vật phẩm và trạng thái checkpoint |
| CIO | CIO13: Hiển thị dữ liệu gameplay trên giao diện. CIO14: Kết nối thay đổi trạng thái với nội dung HUD. |
| SIO | Cả hai → HP1-SIO03 |
| ULO theo Bảng LO | CIO13 → ULO-03, ULO-04. CIO14 → ULO-04. |
| K_NEW | CIO13: K13 Giao diện và dữ liệu runtime. CIO14: — |
| K_PRIOR theo Bảng LO | CIO13: K03,K04,K11,K12,K29. CIO14: K11,K12,K13,K29. |
| Minh chứng bắt buộc theo Assessment | CIO13: MC-CN. CIO14: MC-ML + MC-CN. |
| Supporting evidence | CIO13 có MC-ML trong Bảng LO nhưng không phải gate bắt buộc. |
| Ownership | CHỈNH SỬA cho cả hai CIO. |
| Câu hỏi | HP1-B07-Q01→Q10, 10 câu / 30 phút, nguyên văn bản ĐÃ DUYỆT. |
| Nguồn kỹ thuật | GD-011 Control, PJT-004, PJT-003; dùng lại GD-010 Signals, GD-027/GD-003 cho reference khi cần. |
| Asset | 4 PNG UI program-authored, Ownership C, không có font ngoài. |
| Trạng thái nguồn | Đủ để chuẩn bị/implement. Runtime/Human PASS chưa có. |

## PHÁT HIỆN NGUỒN — B07-ULO-01

**Nguồn A — Bảng LO (thẩm quyền mapping):** CIO14 → ULO-04.  
**Nguồn B — Ma trận Đánh giá v1.2:** CIO14 → ULO-03, ULO-04.  
**Ảnh hưởng:** mapping ULO thứ cấp rộng hơn nguồn LO.  
**Xử lý canonical:** Manifest/CONTROL dùng CIO14 → ULO-04. Assessment chỉ dùng cho evidence/gate/pass criteria.

## PHÁT HIỆN NGUỒN — B07-K-01

Bảng LO khóa K_PRIOR CIO14 = K11,K12,K13,K29. Assessment/Activity Map huy động thêm K03,K04 ở cấp bài. CONTROL giữ K_PRIOR từ Bảng LO; các K thêm chỉ là kiến thức huy động rộng hơn, không ghi đè mapping CIO.

## PHÁT HIỆN NGUỒN — B07-EV-01

Bảng LO CIO13 liệt kê MC-ML,MC-CN; Assessment chỉ khóa MC-CN là minh chứng bắt buộc cho CIO13. Theo thứ tự thẩm quyền, MC-CN là gate bắt buộc; MC-ML là supporting evidence.

## Thời lượng 120 phút

5' Gắn kết → 10' Khám phá → 15' Giải thích K13 → 55' Vận dụng → 30' Quiz → 5' Chốt.

## Ranh giới sư phạm

**Phải hiểu:** HUD là gì, Control/Label ở mức cần thiết, giao diện phải lấy dữ liệu runtime thật, runtime data/state → HUD, node reference tới label/HUD.

**Dùng lại:** variables/functions, Signal, state, Node/Object reference.

**Không mở:** win/lose screen, restart button, pause menu, responsive UI nâng cao, theme system phức tạp, save/load.
