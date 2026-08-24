# HP1 BUILD ORDER

Thứ tự bắt buộc:

1. PROJECT_BASIC
2. STATIC QA
3. RUNTIME QA
4. FIX BLOCKERS
5. STUDENT_STARTER
6. STARTER ↔ MASTER DIFF
7. STARTER END-TO-END TEST
8. DOCS
9. HUMAN TEST PACKAGE
10. RELEASE PACKAGE

RULES:
- Không xây Student Starter độc lập.
- Student Starter phải derive từ Project Basic đã ổn định.
- Không viết hướng dẫn step-by-step trước khi project thực tế ổn định.
- Không dùng hướng dẫn tưởng tượng để ép project chạy theo.
- Nếu project thay đổi sau khi viết tài liệu:
  project → docs → screenshots → QA
  phải đồng bộ lại.
