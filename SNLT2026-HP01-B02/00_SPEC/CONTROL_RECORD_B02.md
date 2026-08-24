# CONTROL RECORD — HP1 B02 — Điều khiển nhà thám hiểm

> Trạng thái tài liệu: CANONICAL SPEC v1.0 — phát hành bởi ChatGPT cho FLOW TEST + IMPLEMENTATION.
> Đây là ngoại lệ song song do Human yêu cầu để kiểm thử luồng. **Không thay đổi trạng thái B01 và không coi B01 đã khóa.**

## CONTROL RECORD

| Trường | Giá trị |
|---|---|
| HP | HP1 — Phiêu lưu Nền tảng 3D |
| Bài | B02 — Điều khiển nhà thám hiểm |
| Sản phẩm bài | Player tuning + **Nhân vật có thể điều khiển** |
| CIO | **HP1-CIO03:** Sử dụng biến và hàm để điều chỉnh thuộc tính chuyển động. **HP1-CIO04:** Kết nối Input action với hành vi điều khiển nhân vật. |
| SIO | HP1-SIO02 — Điều khiển nhân vật |
| ULO | CIO03 → **ULO-03**. CIO04 → **ULO-03, ULO-04**. |
| K_NEW | CIO03: **K03 Biến và kiểu dữ liệu cơ bản; K04 Hàm và luồng gọi hàm.** CIO04: **K05 Hệ thống đầu vào và InputMap.** |
| K_PRIOR | CIO03: **K01, K02, K09**. CIO04: **K03, K04**. |
| Minh chứng | **MC-ML, MC-CN**; phần học sinh đọc/chỉnh phải giải thích được; chức năng chạy được không tự động là minh chứng năng lực. |
| Câu hỏi liên quan | **HP1-B02-Q01 → HP1-B02-Q10**, 10 câu / 30 phút, chỉ dùng nguyên văn bản ĐÃ DUYỆT. |
| Nguồn kỹ thuật | **PJT-004; GD-004; GD-005; GD-006.** |
| Tài nguyên phải tạo | HS Step-by-Step; HS Summary tích hợp; hồ sơ sản phẩm; Student Starter; GV lesson plan; slide 16:9; Teacher Master/Project Basic; mã chuẩn + giải thích; QA; Human Test workspace; Review Studio schema/media plan. |
| Trạng thái nguồn | **ĐỦ NGUỒN ĐỂ TRIỂN KHAI. Runtime/Human PASS: CHƯA CÓ.** |

## PHÁT HIỆN NGUỒN — B02-LO-01

**Nguồn A — Bảng LO (thẩm quyền mapping):** CIO03 → ULO-03.  
**Nguồn B — Ma trận đánh giá/Blueprint câu hỏi:** một số metadata ghi CIO03 → ULO-03, ULO-04.  
**Ảnh hưởng:** mapping ULO nếu lấy metadata thứ cấp có thể sai với nguồn thẩm quyền.  
**Xử lý canonical:** gói B02 giữ **CIO03 → ULO-03** theo Bảng LO đã khóa; Ma trận chỉ dùng cho evidence/gate và ngân hàng chỉ dùng cho câu hỏi. Không sửa nguồn gốc.

## PHÁT HIỆN NGUỒN — B02-K-01

Activity Map liệt kê kiến thức huy động ở cấp luồng bài rộng hơn K_PRIOR từng CIO. CONTROL RECORD dùng K_PRIOR từ Bảng LO; Activity Map chỉ điều phối luồng/N–R–D–T. Không dùng Activity Map để ghi đè K_PRIOR.

## Thời lượng khóa — 120 phút

- 5' Gắn kết.
- 10' Khám phá.
- 15' Giải thích K03/K04/K05.
- 55' Vận dụng theo ĐỌC → DỰ ĐOÁN → CHỈNH SỬA → CHẠY → GIẢI THÍCH.
- 30' Quiz 10 câu HP1-B02-Q01→Q10, nguyên văn bản đã duyệt.
- 5' Chốt: lưu project, ghi minh chứng và điểm cần khắc phục.

## Ranh giới kiến thức

**Phải hiểu/được đánh giá ở B02:** biến/giá trị, vai trò hàm và luồng gọi hàm ở mức cần thiết, Input action, InputMap, quan hệ input → hành vi, dự đoán tác động của chỉnh speed.

**Được cung cấp sẵn, KHÔNG dùng làm minh chứng B02:** CharacterBody3D, Vector3, gravity, collision, logic nhảy/điều kiện nhảy, camera-follow, fall-reset. Đây là hạ tầng hoặc nội dung B03.

**Blockbench:** không sử dụng trong B02.
