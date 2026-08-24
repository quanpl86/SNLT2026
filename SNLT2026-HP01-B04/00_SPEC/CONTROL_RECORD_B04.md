# CONTROL RECORD — HP1 B04 — Ôn tập — Thử thách Nền tảng 3D

> B04 là checkpoint. **K_NEW = 0. Không mở kiến thức kỹ thuật lõi mới.** Visual refresh được chương trình/Antigravity gắn sẵn và không trở thành nhiệm vụ học sinh.

| Trường | Giá trị |
|---|---|
| HP | HP1 — Phiêu lưu Nền tảng 3D |
| Bài | B04 — Ôn tập — Thử thách Nền tảng 3D |
| Sản phẩm bài | Sản phẩm chơi được số 1 / Thử thách Nền tảng 3D |
| CIO | CIO07: Tích hợp điều khiển, nhảy, va chạm và màn chơi thành thử thách hoàn chỉnh. CIO08: Phát hiện và sửa lỗi làm cản trở việc hoàn thành màn chơi. |
| SIO/ULO theo Bảng LO | CIO07 → SIO01,SIO02 → ULO-01,ULO-04. CIO08 → SIO05 → ULO-05. |
| K_NEW | — |
| K_PRIOR | CIO07: K01,K05,K06,K07,K08,K09. CIO08: K05–K09. |
| Minh chứng bắt buộc theo Assessment | CIO07: MC-CN. CIO08: MC-KT. MC-CN/MC-GT của CIO08 có thể là minh chứng hỗ trợ theo LO. |
| Cổng | Cổng nguyên mẫu |
| Câu hỏi | HP1-B04-Q01→Q25, 25 câu / 45 phút, nguyên văn bản ĐÃ DUYỆT. |
| Nguồn kỹ thuật | PJT-004, PJT-003, relevant GD-001–GD-011 sections from B1–B3. |
| Asset refresh | PJT-004 frozen commit, selected CC0 models `character.glb`, `brick.glb`, gắn sẵn. |
| Trạng thái nguồn | Đủ để chuẩn bị/implement. Runtime/Human PASS chưa có. |

## PHÁT HIỆN NGUỒN — B04-MAP-01

**Nguồn A — Bảng LO:** CIO07 → SIO01,SIO02; ULO-01,ULO-04.  
**Nguồn B — Assessment:** CIO07 metadata → SIO02,SIO03; ULO-04.  
**Ảnh hưởng:** mapping thứ cấp không đồng nhất.  
**Xử lý canonical:** không sửa nguồn; CONTROL/Manifest giữ mapping của Bảng LO theo thứ tự thẩm quyền. Assessment chỉ quyết định evidence/gate.

## Luồng 120 phút khóa

- 15' Ôn tập nhanh Bài 1–3.
- 45' Quiz checkpoint 25 câu.
- 60' Hoàn thiện sản phẩm, sửa lỗi, chạy lại và nộp minh chứng.

## Quy tắc visual refresh

Học sinh được thấy dự án đẹp hơn nhưng **không phải học đổi/import asset ở B04**. Character/model mới là Ownership C. Không dùng việc asset đã được gắn sẵn làm minh chứng cá nhân.
