# HP1 HUMAN VALIDATION & DOUBLE-CHECK WORKFLOW PROTOCOL

Phân biệt rõ giữa kiểm thử tự động và kiểm thử bởi con người:

CLI/headless PASS ≠ Human PASS

Các cấp độ QA bắt buộc:
1. STATIC_PASS
2. HEADLESS_RUNTIME_PASS
3. VISUAL_VALIDATION
4. HUMAN_TEST_PASS
5. WEB_BROWSER_PASS

Nghiêm cấm tự suy ra:
Exit Code 0 → sản phẩm phù hợp học sinh.

Những tiêu chí cần con người (Human) xác nhận:
- Camera dễ nhìn, dễ quan sát 3D.
- Thao tác di chuyển, nhảy mượt mà.
- Độ khó phù hợp học sinh 12–14 tuổi.
- Thời lượng làm bài nằm trong 120 phút.
- Hướng dẫn rõ ràng, không làm học sinh bị kẹt.

---

## PHÂN ĐỊNH THẨM QUYỀN VÀ VAI TRÒ (CANONICAL TEST & MEDIA AUTHORITY)

```text
CHATGPT     = canonical learning-media planner & art-direction authority (HUMAN_DOUBLE_CHECK_Bxx.md & MEDIA_REQUIREMENTS_Bxx.md)
ANTIGRAVITY = project/code/local-test implementation authority & technical status provider
HUMAN       = actual capture + visual/experience validation authority
```

---

## QUY ĐỊNH VỀ TÀI NGUYÊN MEDIA VÀ BẰNG CHỨNG (UPDATE MEDIA AUTHORITY)

- `CHATGPT` chịu trách nhiệm toàn bộ việc thiết kế media cho học liệu (chủ trì xác định ảnh/video cần cho Student Summary, Guide, Teacher Plan, Slides, Diagram, Captions, Crops, Callouts).
- `ANTIGRAVITY` **KHÔNG** tự xác định danh sách ảnh/video phục vụ Summary, Student Guide, Teacher Guide, Lesson Plan hoặc Slides.
- Sau local test, Antigravity chỉ cung cấp:
  * actual project state;
  * test result;
  * Node/property/path;
  * technically capturable states;
  * limitations.
- `CHATGPT` phát hành chính thức:
  * `HUMAN_DOUBLE_CHECK_Bxx.md`
  * `MEDIA_REQUIREMENTS_Bxx.md`
- NGUYÊN TẮC VÀNG: `TEST EVIDENCE ≠ automatically LEARNING MEDIA`.
- Một evidence chỉ được đưa vào `04_MEDIA_APPROVED/` hoặc `03_EVIDENCE_SCREENSHOTS/` chính thức khi ChatGPT đánh giá phù hợp cho học liệu và Human phê duyệt.

---

## MÔ HÌNH PHỐI HỢP THỰC HIỆN TEST 9 BƯỚC (CANONICAL WORKFLOW RULE)

1. **CHATGPT**: Phát hành spec + acceptance tests.
2. **ANTIGRAVITY**: Code `PROJECT_BASIC` / `STUDENT_STARTER`, test thực tế trên local Godot.
3. **ANTIGRAVITY → CHATGPT**: Gửi `LOCAL_TEST_REPORT` + actual results + errors/warnings + những gì chưa test được (có thể kèm `HUMAN_TEST_DRAFT` để tham khảo).
4. **CHATGPT**: Review test coverage của Antigravity và phát hành `HUMAN_DOUBLE_CHECK_Bxx.md` & `MEDIA_REQUIREMENTS_Bxx.md` chính thức cho HUMAN.
5. **HUMAN**: Thực hiện các bài test trên máy thật + chụp screenshot/video + note kết quả PASS/FAIL.
6. **CHATGPT**: Review Human evidence & media quality:
   - Nếu `FAIL` → phát finding giao Antigravity sửa → regression test → Human retest.
   - Nếu `PASS` → báo OK cho Human & Antigravity.
7. **HUMAN**: Xác nhận **OK**.
8. **ANTIGRAVITY**:
   - Freeze functional state (không được thay đổi code chức năng).
   - Ingest media approved vào repository, cập nhật QA / report / state / metadata / coordination log.
   - Commit + Push GitHub.
   - Handoff cho ChatGPT.
9. **CHATGPT**: Review commit/PR và phát hành task tiếp theo.

---

## NGUYÊN TẮC BẢO VỆ ĐÓNG VÒNG (POST-HUMAN-PASS CODE FREEZE)

- Sau khi Human xác nhận **PASS / OK**, Antigravity được phép cập nhật tài liệu `.md`, QA report, screenshot minh chứng và metadata.
- **NGHIÊM CẤM** tự tiện thay đổi mã nguồn chức năng (functional code) sau khi Human PASS.
- Nếu bắt buộc phải thay đổi code chức năng sau khi đã PASS:
  `CODE CHANGE → Antigravity local test → ChatGPT phát delta checklist → Human retest → PASS lại → mới commit/push.`
