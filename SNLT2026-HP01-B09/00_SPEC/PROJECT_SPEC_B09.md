# PROJECT SPEC B09 — Platform Adventure Beta

## 1. Mục tiêu

B09 không xây mechanic mới. Bản Beta phải kết nối trơn tru:
- movement/jump/collision;
- collectible + asset B05;
- hazard/checkpoint/respawn;
- HUD;
- goal/win/restart;
- Web export trên Compatibility.

## 2. Project Basic

Dùng B08 integrated project làm nền. Các case BT-01→BT-06 phải PASS native. Formal TG-WEB-SMOKE phải có actual browser run.

Không thêm art/mechanic mới chỉ để làm Beta "đẹp hơn".

## 3. Student Starter — một deliberate Beta blocker

Canonical Starter chỉ tạo **một lỗi chính**:
`BetaCrystal05` nằm ở Position không thể tiếp cận hợp lý bằng movement/single-jump hiện có.

Hệ quả:
- collectible logic vẫn đúng;
- HUD lên tối đa 4/5;
- win rule B08 vẫn đúng và do đó goal không mở;
- học sinh phải test để xác định đây là level/integration defect chứ không phải sửa target_count.

Học sinh sửa bằng Transform/Position K02 đã học:
- move BetaCrystal05 tới vị trí reachable;
- không đổi target_count;
- không thêm double jump;
- retest item 5 → 5/5 → goal → win.

## 4. Classroom continuity vs canonical QA

**Lớp thật:** tiếp tục từ project B08 của chính học sinh, giữ asset Blockbench B05 cá nhân và các thay đổi đã được duyệt.

**Canonical Human/QA Starter:** dùng fallback assets đã duyệt từ B04–B08 để project tái lập được trên máy kiểm thử.

Không được biến fallback C-owned asset thành minh chứng MC-3D của học sinh.

## 5. Beta test discipline

Học sinh phải có:
- test cases có chủ đích;
- ít nhất 1 defect record;
- before evidence;
- change;
- retest;
- regression;
- after evidence.

## 6. Web gate

Sau native fix:
- export Web Compatibility;
- serve HTTP;
- browser target;
- TG-01→TG-06.

B9 là formal TG-WEB-SMOKE.

## 7. Không được làm

- Không mở B10 GDD/personalization.
- Không thêm mechanic mới.
- Không lấy asset mới.
- Không sửa bug bằng cách làm sai luật thiết kế (ví dụ đổi target_count 5→4 chỉ để pass).
