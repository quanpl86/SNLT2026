# CONTROL RECORD — HP1 B03 — Nhảy qua thử thách

> Trạng thái: CANONICAL SPEC v1.0 cho giai đoạn **chuẩn bị toàn bộ dự án cho AI Agent Antigravity**.
> Đây là ngoại lệ chuẩn bị song song do Human yêu cầu. **Không thay đổi trạng thái B01/B02 như side effect và không coi các bài trước đã khóa.**

## CONTROL RECORD

| Trường | Giá trị |
|---|---|
| HP | HP1 — Phiêu lưu Nền tảng 3D |
| Bài | B03 — Nhảy qua thử thách |
| Sản phẩm bài | **Movement + jump + Đường thử thách 3D** |
| CIO | **HP1-CIO05:** Sử dụng Vector3 và vật lý nhân vật để điều khiển chuyển động/nhảy. **HP1-CIO06:** Dùng điều kiện để kiểm soát hành vi nhảy hợp lệ. |
| SIO | Cả hai → HP1-SIO02 — Điều khiển nhân vật |
| ULO | CIO05 → **ULO-03, ULO-04**. CIO06 → **ULO-03** theo Bảng LO. |
| K_NEW | CIO05: **K06 Vector và chuyển động; K07 Vật lý nhân vật và va chạm.** CIO06: **K08 Điều kiện và logic Boolean.** |
| K_PRIOR | CIO05: **K03,K04,K05**. CIO06: **K06,K07**. |
| Minh chứng | CIO05: **MC-ML, MC-CN**. CIO06: **MC-ML** bắt buộc; runtime hành vi vẫn phải được chạy/kiểm chứng ở project. Toàn bài thu MC-ML + MC-CN. |
| Câu hỏi liên quan | **HP1-B03-Q01 → HP1-B03-Q10**, 10 câu / 30 phút, chỉ dùng nguyên văn ngân hàng HP1 v1.1 ĐÃ DUYỆT. Không đưa đáp án vào học liệu HS. |
| Nguồn kỹ thuật | **PJT-004, PJT-003, PJT-010; GD-004, GD-007, GD-008.** |
| Tài nguyên phải tạo | HS Step-by-Step; HS Summary tích hợp; hồ sơ sản phẩm; Student Starter; GV lesson plan; slide 16:9; Teacher Master/Project Basic; mã chuẩn + giải thích; QA; Human Test workspace; Review Studio schema/media plan. |
| Trạng thái nguồn | **ĐỦ NGUỒN ĐỂ CHUẨN BỊ/IMPLEMENT. Runtime/Human PASS: CHƯA CÓ.** |

## PHÁT HIỆN NGUỒN — B03-ULO-01

- **Nguồn A — Bảng LO (thẩm quyền mapping):** CIO06 → ULO-03.
- **Nguồn B — Ma trận đánh giá/Question Blueprint:** có metadata thứ cấp ghi CIO06 → ULO-03, ULO-04.
- **Ảnh hưởng:** nếu dùng metadata thứ cấp để ghi đè sẽ sai thứ tự thẩm quyền.
- **Xử lý canonical:** CONTROL/Manifest dùng CIO06 → **ULO-03** theo Bảng LO. Assessment vẫn là nguồn evidence/gate; ngân hàng vẫn là nguồn câu hỏi. Không tự sửa nguồn gốc.

## Thời lượng khóa — 120 phút

- 5' Gắn kết.
- 10' Khám phá.
- 15' Giải thích K06/K07/K08.
- 55' Vận dụng: ĐỌC → DỰ ĐOÁN → CHỈNH SỬA → CHẠY → GIẢI THÍCH.
- 30' Quiz: HP1-B03-Q01→Q10 nguyên văn bản đã duyệt.
- 5' Chốt: lưu project, ghi minh chứng, điểm cần khắc phục.

## Ranh giới sư phạm

### Phải hiểu / được đánh giá
- Vector3 và ý nghĩa thành phần x/y/z trong movement.
- Quan hệ direction → velocity.
- CharacterBody3D ở mức phục vụ movement/collision B03.
- gravity / velocity.y / move_and_slide() ở mức cần để giải thích cơ chế cơ bản.
- điều kiện Boolean cho jump hợp lệ.
- `is_on_floor()` và kết hợp với input jump.

### Không mở rộng
- Không double jump như kiến thức lõi.
- Không state machine.
- Không coyote time / jump buffering / advanced controller.
- Không Area3D/Signal/checkpoint/HUD/Web.
- Không Blockbench.

## Activity / Assessment

Activity Map B03: TH02 + TH03 + TH03; evidence toàn bài MC-ML, MC-CN; gate Cổng minh chứng CIO.  
Assessment:
- CIO05 ownership = CHỈNH SỬA; công cụ ĐG-03 + ĐG-02; đạt khi chức năng đúng, không có lỗi cản trở, giải thích được phần thay đổi.
- CIO06 ownership = CHỈNH SỬA; công cụ ĐG-03; đạt khi hành vi đúng trong sản phẩm chạy được và đủ bằng chứng cá nhân.
