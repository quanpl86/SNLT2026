# CONTROL RECORD — HP1 B09 — Ôn tập — Bản thử nghiệm Phiêu lưu Nền tảng 3D

| Trường | Giá trị |
|---|---|
| HP | HP1 — Phiêu lưu Nền tảng 3D |
| Bài | B09 — Ôn tập — Bản thử nghiệm Phiêu lưu Nền tảng 3D |
| Sản phẩm bài | Platform Adventure Beta + Beta test report + TG-WEB-SMOKE |
| CIO | CIO17: Tích hợp toàn bộ hệ thống thành bản thử nghiệm có thể chơi từ đầu đến cuối. CIO18: Kiểm thử bản thử nghiệm và sửa ít nhất một lỗi có bằng chứng. |
| SIO/ULO theo Bảng LO | CIO17 → SIO03,SIO05 → ULO-04,ULO-06. CIO18 → SIO05 → ULO-05. |
| K_NEW | — cho cả hai CIO |
| K_PRIOR | CIO17: K10–K14,K27. CIO18: Hệ thống HP1. |
| Minh chứng bắt buộc theo Assessment | CIO17: MC-CN. CIO18: MC-KT. |
| Cổng | Cổng bản thử nghiệm: MC-CN + MC-KT + TG-WEB-SMOKE. |
| Quiz | HP1-B09-Q01→Q35, 35 câu / 60 phút, nguyên văn bản ĐÃ DUYỆT. |
| Thời lượng | 15' ôn nhanh + 60' quiz + 45' hoàn thiện/sửa lỗi/TG-WEB-SMOKE = 120'. |
| Nguồn kỹ thuật | PJT-004, PJT-003, GD-023/GD-024 và các nguồn B5–B8 đã khóa. |
| Asset | Không asset mới; reuse approved assets B04–B08 và asset Blockbench B05 của học sinh khi có. |
| Trạng thái nguồn | Đủ để chuẩn bị/implement. Native/TG-WEB-SMOKE/Human PASS chưa có. |

## PHÁT HIỆN NGUỒN — B09-MAP-01

**Nguồn A — Bảng LO (thẩm quyền mapping):** CIO17 → SIO03,SIO05 → ULO-04,ULO-06.  
**Nguồn B — Ma trận Đánh giá v1.2:** CIO17 → SIO03 → ULO-03,ULO-04.  
**Ảnh hưởng:** mapping thứ cấp khác nguồn LO, đặc biệt ULO-06/SIO05.  
**Xử lý canonical:** CONTROL/Manifest giữ mapping Bảng LO. Assessment chỉ quyết định ownership/evidence/gate.

## PHÁT HIỆN NGUỒN — B09-EV-01

**Nguồn A — Bảng LO:** CIO17 MC-CN,MC-XB; CIO18 MC-KT,MC-CN.  
**Nguồn B — Assessment:** CIO17 bắt buộc MC-CN; CIO18 bắt buộc MC-KT.  
**Xử lý canonical:** Assessment quyết định evidence bắt buộc. MC-XB/MC-CN còn lại là supporting evidence; ngoài ra B09 phải qua TG-WEB-SMOKE theo Technical Gates.

## Khóa B09

- Không kiến thức kỹ thuật lõi mới.
- Không asset workflow mới.
- Không B10 personalization/design mới.
- Chỉ tích hợp, kiểm thử, sửa lỗi, hồi quy và formal Web smoke.
