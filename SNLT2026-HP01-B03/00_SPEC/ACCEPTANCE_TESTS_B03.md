# ACCEPTANCE TESTS B03

## Gate A — Static

- Cấu trúc project/path hợp lệ.
- Godot features phù hợp 4.7 + Compatibility.
- Project Basic có full movement z + jump floor check.
- Student Starter có đúng hai learning gaps và không có lời giải ẩn ở file khác.
- Không có logic khác vô tình sửa/bỏ qua learning gap.
- Course không yêu cầu double jump.
- Tài liệu/hồ sơ khớp Node/file/action/variable thực tế.
- Không đưa đáp án quiz vào học liệu HS.

## Gate B — Antigravity local runtime

### Project Basic
- Open + F5.
- W/A/S/D.
- single jump.
- spam Space trên không không tạo jump mới.
- gravity/fall/landing.
- collision với platform.
- thử course đại diện.
- regression B02 InputMap/speed.

### Student Starter
- Open + F5.
- xác nhận A/D hoạt động, W/S gap tái hiện.
- xác nhận air-jump bug tái hiện.
- không crash.

### E2E copy
- copy Starter.
- sửa velocity.z.
- F5 W/A/S/D.
- sửa `and is_on_floor()`.
- F5 air-jump test.
- Cmd+S → close → reopen.
- F5 lại.
- chạy course đại diện.
- kiểm hồ sơ minh chứng.

Antigravity phải ghi actual errors/warnings, không dùng từ “100% ổn định” nếu chỉ mới local test.

## Gate C — Review Studio multi-lesson

- HP1 hiển thị B01/B02/B03 nếu các schema tương ứng đã sync.
- B03 title đúng.
- B03 load 19 mục: HDC-00 + 18 target tests.
- MEDIA_PLAN có 20 planned RAW items.
- switch bài không trộn `results`, `findings`, `media_uploads`.
- Smoke Mode phải isolate theo HP/Bài.
- real path phải map HP1 → folder HP01.
- backend không overwrite RAW dù UI gửi sai cờ.

## Gate D — ChatGPT review

Antigravity gửi `LOCAL_TEST_REPORT_B03`:
- branch / base SHA;
- canonical sync commit;
- implementation commit;
- file diff;
- actual runtime;
- Review Studio discovery/isolation;
- errors/warnings;
- tests not run;
- source/license;
- findings.

ChatGPT review rồi mới mở Human Test B03.

## Gate E — Human

Human kiểm:
- movement/jump feel;
- camera/course visibility;
- độ khó 12–14;
- E2E 1:1 của hướng dẫn;
- thời lượng 55' thực hành có khả thi;
- media RAW;
- PASS/FAIL từng test.

CLI/headless/local Antigravity PASS không thay Human PASS.
