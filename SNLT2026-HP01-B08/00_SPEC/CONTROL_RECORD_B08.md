# CONTROL RECORD — HP1 B08 — Luật thắng và trải nghiệm trò chơi

| Trường | Giá trị |
|---|---|
| HP | HP1 — Phiêu lưu Nền tảng 3D |
| Bài | B08 — Luật thắng và trải nghiệm trò chơi |
| Sản phẩm bài | Vòng chơi hoàn chỉnh: luật thắng/chơi lại + bản Web thử đầu tiên |
| CIO | CIO15: Hoàn thiện luật thắng/chơi lại bằng các trạng thái đã học. CIO16: Thực hiện lần xuất Web thử đầu tiên và xác nhận vòng chơi chính hoạt động. |
| SIO | CIO15 → HP1-SIO03. CIO16 → HP1-SIO05. |
| ULO theo Bảng LO | CIO15 → ULO-04. CIO16 → ULO-06. |
| K_NEW | CIO15: —. CIO16: K27 Xuất bản game Web. |
| K_PRIOR theo Bảng LO | CIO15: K11,K12,K13. CIO16: K12,K13. |
| Minh chứng bắt buộc theo Assessment | CIO15: MC-ML + MC-CN. CIO16: MC-KT + MC-XB. |
| Supporting evidence | CIO16 có MC-CN trong Bảng LO nhưng không phải gate bắt buộc theo Assessment. |
| Ownership | CIO15: CHỈNH SỬA. CIO16: SỬ DỤNG/TÍCH HỢP. |
| Câu hỏi | HP1-B08-Q01→Q10, 10 câu / 30 phút, nguyên văn bản ĐÃ DUYỆT. |
| Nguồn kỹ thuật | GD-023 Exporting for the Web, GD-024 Overview of Renderers, PJT-004, PJT-003; dùng lại GD-010/GD-011/GD-028 khi cần. |
| Asset | Goal portal + win/restart UI program-authored, Ownership C. |
| Trạng thái nguồn | Đủ để chuẩn bị/implement. Native/Web/Human PASS chưa có. |

## PHÁT HIỆN NGUỒN — B08-EV-01

**Nguồn A — Bảng LO:** CIO16 liệt kê MC-XB + MC-CN.  
**Nguồn B — Ma trận Đánh giá v1.2:** CIO16 bắt buộc MC-KT + MC-XB.  
**Xử lý canonical:** Assessment quyết định gate → MC-KT + MC-XB bắt buộc; MC-CN chỉ supporting.

## PHÁT HIỆN NGUỒN — B08-K-01

Bảng LO khóa K_PRIOR CIO15 = K11,K12,K13 và CIO16 = K12,K13. Assessment/Activity huy động thêm K08 cho CIO15 và K11 cho CIO16 ở cấp bài. CONTROL giữ K_PRIOR từ Bảng LO; các K thêm là kiến thức huy động rộng hơn.

## PHÂN BIỆT WEB GATE — B08-WEB-01

CIO16 yêu cầu **lần xuất Web thử đầu tiên** và có MC-XB. Tuy nhiên `07_Technical_Gates` khóa formal `TG-WEB-SMOKE` tại **B09**, không phải B08.

Vì vậy B08 phải thật sự export + mở browser + chạy core loop để có evidence CIO16, nhưng không được gọi kết quả đó là `TG-WEB-SMOKE PASS`.

## Thời lượng 120 phút

5' Gắn kết → 10' Khám phá → 15' Giải thích → 55' Vận dụng win/restart + Web export → 30' Quiz → 5' Chốt.

## Không mở quá scope

Không mở kiến thức B09+ mới. Không performance profiling nâng cao, PWA, hosting production, custom HTML shell, service worker, multiplayer, save/load.
