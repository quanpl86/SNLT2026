# ACCEPTANCE TESTS B02

## Gate A — Static
- Project cấu trúc hợp lệ; `project.godot`, scene, script path khớp.
- Godot features `4.7` + GL Compatibility.
- Input actions đúng target Master/Starter.
- `player.gd` có vùng B02 và Ownership C rõ.
- Student Starter chỉ khác Master ở khoảng trống học tập có chủ đích.
- Tài liệu không dùng kiến thức B03 như nội dung đánh giá B02.

## Gate B — Antigravity Local Runtime
Antigravity PHẢI chạy thật trên Godot 4.7.1:
- Project Basic: open + F5 + W/A/S/D.
- Student Starter: open + F5 + W/A/S hoạt động, D không hoạt động có chủ đích.
- E2E copy: speed 4→6; add D→move_right; F5; save/reopen; retest.
- Ghi số error/warning thực tế, lệnh/cách chạy, path, kết quả từng target.
- Không suy ra Human PASS từ local test.

## Gate C — ChatGPT Review
Antigravity gửi `LOCAL_TEST_REPORT_B02` với:
- commit SHA;
- file diff;
- 3 target paths;
- actual results;
- errors/warnings;
- phần chưa test;
- screenshot kỹ thuật nếu cần.
ChatGPT kiểm coverage và phát hành/điều chỉnh Human Double Check chính thức.

## Gate D — Human
Human chạy trên máy thật bằng Review Studio sau khi Gate C mở:
- camera/feel/age-fit;
- clarity hướng dẫn;
- E2E 1:1;
- media RAW;
- PASS/FAIL từng test.
Fail → finding → Antigravity fix → local regression → ChatGPT delta checklist → Human retest.

## Tiêu chí CIO
**CIO03:** thay đổi tham số/logic có chủ đích; dự đoán/mục tiêu trước; kiểm chứng sau chạy; lựa chọn dựa trên kết quả; giải thích biến/hàm.  
**CIO04:** mapping Input action đúng; dữ liệu input đi tới hành vi đúng; runtime phù hợp thiết kế; giải thích action khác phím vật lý.

## Quiz
10 câu / 30 phút: `HP1-B02-Q01` → `HP1-B02-Q10`, chỉ dùng nguyên văn ngân hàng HP1 ĐÃ DUYỆT. Quiz không thay MC-ML/MC-CN.
