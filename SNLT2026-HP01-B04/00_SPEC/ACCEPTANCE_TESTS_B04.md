# ACCEPTANCE TESTS B04

## Static
- K_NEW=0.
- Project Basic và Starter cùng visual refresh.
- Root physics/collider/transform gameplay không bị asset swap thay thế.
- Starter chỉ có hai bug đã chỉ định.
- Quiz reference đúng Q01–Q25 và không chứa đáp án.

## Antigravity Local Runtime
Project Basic: W/A/S/D, jump, collision, full course.  
Starter: D lỗi + ChallengePlatform03 collision lỗi tái hiện.  
E2E: sửa D; sửa collision; full course; save/reopen; regression.

## Asset QA
- exact commit/source path.
- SHA-256 từng asset local.
- license evidence.
- Godot 4.7.1 import thực tế.
- character không thay CharacterBody3D root.
- brick không tạo collider gameplay mới.
- visual không che camera hoặc làm học sinh khó xác định platform.

## Human
Human đánh giá visual refresh có hấp dẫn hơn nhưng vẫn nhận ra cơ chế cũ; course/character dễ nhìn; 60' hoàn thiện có khả thi.
